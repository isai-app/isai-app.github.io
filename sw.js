// Isai's service worker.
//
// 1. Songs streaming: <base>tg/stream/<msgId>?s=<size>&m=<mime> becomes an
//    ordinary ranged audio response, so <audio> plays and seeks natively. The
//    bytes come from the page, which holds the Telegram connection and the
//    replay cache (src/telegram/files.ts); this worker only answers the
//    browser's Range requests.
// 2. Covers: <base>tg/cover/<msgId> is the song's Telegram thumbnail.
// 3. The app shell, kept for offline use: pages network-first, built assets
//    cache-first (their names are content hashes).
const CHUNK = 512 * 1024;
const SHELL = 'isai-shell-v1';
const BASE = new URL(self.registration.scope).pathname;

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== location.origin || event.request.method !== 'GET') return;
  const path = url.pathname.slice(BASE.length);
  if (path.startsWith('tg/stream/')) return event.respondWith(stream(event, url, path));
  if (path.startsWith('tg/cover/')) return event.respondWith(cover(event, path));
  if (event.request.mode === 'navigate') return event.respondWith(page(event.request));
  if (path.startsWith('assets/')) return event.respondWith(asset(event.request));
});

async function page(request) {
  const cache = await caches.open(SHELL);
  try {
    // Revalidated, not taken from the HTTP cache: GitHub Pages lets pages be cached for 10
    // minutes, which kept a fresh deploy out of sight until the second reload.
    const response = await fetch(request.url, { cache: 'no-cache', credentials: 'same-origin' });
    if (response.ok) await cache.put(BASE, response.clone());
    return response;
  } catch (error) {
    // Offline: the app is one page, whatever the path.
    const shell = await cache.match(BASE);
    if (shell) return shell;
    throw error;
  }
}

// Each deploy adds ~140 hashed assets and never reuses the old ones' names; past this many, the
// oldest stored go (task 91). One still in use is simply fetched again.
const SHELL_MAX = 800;
const SHELL_KEEP = 600;

async function asset(request) {
  const cache = await caches.open(SHELL);
  const hit = await cache.match(request);
  if (hit) return hit;
  const response = await fetch(request);
  if (response.ok) {
    await cache.put(request, response.clone());
    trimShell(cache);
  }
  return response;
}

let trimming = false;
async function trimShell(cache) {
  if (trimming) return;
  trimming = true;
  try {
    const keys = await cache.keys();
    if (keys.length <= SHELL_MAX) return;
    // keys() lists entries in the order they were stored, so the first ones are the oldest deploys'.
    for (const old of keys.slice(0, keys.length - SHELL_KEEP)) {
      if (new URL(old.url).pathname !== BASE) await cache.delete(old);
    }
  } finally {
    trimming = false;
  }
}

async function pageClient(event) {
  const own = event.clientId && (await self.clients.get(event.clientId));
  if (own) return own;
  const all = await self.clients.matchAll({ type: 'window' });
  return all.find((c) => c.focused) || all[0];
}

function ask(client, message) {
  return new Promise((resolve, reject) => {
    const channel = new MessageChannel();
    channel.port1.onmessage = (e) => (e.data.error ? reject(new Error(e.data.error)) : resolve(e.data));
    client.postMessage(message, [channel.port2]);
  });
}

async function stream(event, url, path) {
  // A song key: the message id in Songs, <group>_<message> in another library group.
  const id = decodeURIComponent(path.split('/')[2] || '');
  const size = Number(url.searchParams.get('s'));
  const mime = url.searchParams.get('m') || 'application/octet-stream';
  const client = await pageClient(event);
  if (!client || !id || !size) return new Response('no player page', { status: 503 });

  const range = /bytes=(\d*)-(\d*)/.exec(event.request.headers.get('range') || '');
  const start = range && range[1] ? Number(range[1]) : 0;
  const end = range && range[2] ? Math.min(Number(range[2]), size - 1) : size - 1;
  if (start >= size) return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${size}` } });

  let pos = start;
  // The player moved on (a seek or another song): stop asking the page for chunks.
  let cancelled = false;
  const body = new ReadableStream(
    {
      async pull(controller) {
        if (cancelled) return;
        if (pos > end) return controller.close();
        const idx = Math.floor(pos / CHUNK);
        try {
          const { bytes } = await ask(client, { type: 'isai-chunk', id, idx, size, mime });
          const chunk = new Uint8Array(bytes);
          const from = pos - idx * CHUNK;
          const to = Math.min(chunk.length, end - idx * CHUNK + 1);
          if (cancelled) return;
          if (to <= from) return controller.close();
          controller.enqueue(chunk.subarray(from, to));
          pos = idx * CHUNK + to;
        } catch (error) {
          if (!cancelled) controller.error(error);
        }
      },
      cancel() {
        cancelled = true;
      },
    },
    { highWaterMark: 0 },
  );

  const headers = { 'Content-Type': mime, 'Accept-Ranges': 'bytes', 'Content-Length': String(end - start + 1) };
  if (!range) return new Response(body, { status: 200, headers });
  return new Response(body, { status: 206, headers: { ...headers, 'Content-Range': `bytes ${start}-${end}/${size}` } });
}

async function cover(event, path) {
  const id = decodeURIComponent(path.split('/')[2] || '');
  const client = await pageClient(event);
  if (!client || !id) return new Response(null, { status: 404 });
  try {
    const { bytes, type } = await ask(client, { type: 'isai-cover', id });
    if (!bytes) return new Response(null, { status: 404 });
    return new Response(bytes, { headers: { 'Content-Type': type, 'Cache-Control': 'max-age=31536000' } });
  } catch {
    return new Response(null, { status: 404 });
  }
}
