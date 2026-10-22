import{a as e}from"./rolldown-runtime-BWaJ3C7D.js";import{t}from"./react-BjT6POu5.js";import{t as n}from"./jsx-runtime-lTuChwRC.js";import{t as r}from"./react-dom-UioNGCZW.js";import{t as i}from"./edition-DqSXCDIF.js";import{I as a}from"./index-BmEjiTkC.js";var o=e(t(),1),s=r(),c=`# Isai User Guide

Updated 19 Oct 2026, for phone build 36 and the web app.

## Overview

Isai is a personal Tamil music player that streams your lossless library straight from Telegram, with no server and no storage of its own. It runs as an Android app and as a web app at [isai-app.github.io](https://isai-app.github.io/); both sign in to your own Telegram account on the device.

How the pieces fit:

- **Library groups** ("Songs" and any others you link) hold the audio files. Isai reads them and streams each file on demand, in its original quality (FLAC, ALAC, WAV).
- **Isai Sync**, a private one-member Telegram group, carries everything that follows you between devices: likes, playlists, hidden songs, tags, follows, wishlist, play history, the shared library state, and live device status for handoff and remote control. Isai uses a group by that name only if you created it, it has no public link, and you are its only member.
- **Fallbacks.** A song you play that isn't in your library plays from your HTTP addons, then JioSaavn (320 kbps), then YouTube Music.
- **tglossless** runs inside the phone app (and on the Mac) to find new Tamil songs in the groups you authorized and forward lossless copies to Songs, nightly while the phone charges on Wi-Fi.

Isai is for your own listening only. Sharing a song sends its title, credits and a YouTube Music search, never the file or a Telegram link.

## Getting started

Sign each device in to Telegram once with your own api_id and api_hash; the library then loads by itself. On the phone, **Sources** means Settings → Audio quality → **Sources** (Settings opens from your account photo at the top of Home).

### Phone (Android)

1. Install the APK from the **Isai Builds** Telegram group (tap the file) or from the GitHub pre-release. Later builds install over it with nothing lost.
2. On the first-run screens, enter a name, then **Sign in with Google** for YouTube Music, or **Skip sign in**. Google is optional; it only adds YouTube Music search, playlists and its Home feed.
3. Open Settings → Sources → **Telegram library**. Enter your **api_id** and **api_hash** from my.telegram.org (they stay on the phone) → **Continue**.
4. Enter your **phone number, with country code** → **Next**, then the **code Telegram sent** → **Next**, then your **2FA password** if you have one.
5. The **Songs** row shows the song count; **Refresh library** reloads it.
6. **Add new songs** signs tglossless in by itself: your Telegram login above approves it, the way a phone approves a desktop app's QR code, so there's no second phone number or code (only your 2FA password, once, if you have one). If Telegram won't allow that yet (a login has to be a day old before it can approve another), it asks for its own code instead ("Sign in once more for tglossless").

### Web (laptop)

1. Open [isai-app.github.io](https://isai-app.github.io/) in Chrome or Edge.
2. Settings → **Telegram Library** (or the **Connect** card on Home): api_id and api_hash → **Continue**. A QR code appears: on your phone, open Telegram → Settings → Devices → **Link Desktop Device** and point the camera at it (it changes every 30 seconds), then type your 2FA password if you have one. **Use Phone Number Instead** signs in with your phone number and the code Telegram sends, as on the phone. On a phone's browser it asks for the number straight away. The login stays in this browser only.
3. Install the **Isai extension** from the sidebar's **Isai Extension** page (Download for Chrome or Firefox, unzip, then Load unpacked). It's needed for YouTube Music playback and sign-in, JioSaavn, Spotify, Discord, and Spotify/Apple Music imports; your library and lyrics work without it.
4. Optional: install Isai as an app from the install icon in Chrome's address bar.

### Updates

- **Phone:** Settings → Updates → **Check for updates** downloads the newest build from Isai Builds through Telegram and installs it; it also checks once per launch. The row shows your build number.
- **Web:** reload the page. The sidebar's **Isai Extension** shows an **Update** badge when a new extension is out. To update it, copy what's inside the new zip's folder into the folder your browser loads Isai from (an older one is called bitchord-extension-chrome), replacing its files, then press the reload arrow on Isai's card in chrome://extensions. Your sign-ins in it stay.
- **This guide and What's New:** Settings → Help → **User guide** or **What's new**, on both. What's New lists what each build added, newest first. **Open-source licences**, also under Help, lists the free software Isai is built on and each project's licence. If Isai ever closes unexpectedly, **Send the last crash report** appears there too (phone). The report stays on the phone until you share it and choose where it goes. A notice from Isai (an outage, or a request to update) shows at the top of Sources on the phone and of Settings on the web.

## Finding your way around

The phone has four tabs and a Settings sheet; the web has a sidebar. Most Isai-specific features on the phone live in the **Sources** screen.

### Phone tabs

| Tab | What it shows |
| --- | --- |
| Home ("Listen Now") | Lead cards (signed-out warning, "Playing on *device*"), then Isai's shelves, then YouTube Music's feed |
| Explore | YouTube Music's Moods & genres categories |
| Library | Downloads, Local Music, Cached songs, WebDAV/SMB and Spotify links; **On Device** cards for Liked songs, your Isai playlists and Hidden songs; your YouTube Music playlists with **New playlist** and **Import Spotify** |
| Search | A **YouTube / Library / Addons** switch, filters (All, Songs, Videos, Albums, Artists, Playlists) and Recent searches |

The account photo at the top opens **Settings** (via the account switcher when signed in to Google). A downloads button appears there while a batch is downloading.

### Sources screen (phone), in order

1. Sources, tried in this order (Telegram, your addons, JioSaavn, YouTube Music)
2. Telegram library · Library groups · Missing songs
3. Add new songs · Library health
4. Import a playlist · Wishlist · Smart playlists · Following
5. Smart offline · Home page
6. Wake up to Isai · Bedtime
7. Your listening · Guess the song · BGMs and instrumentals · Ragas · Export a playlist · Your devices · Your Telegram logins
8. WebDAV, SMB · Source matching

Add new songs, Library health, Smart offline, Your devices and Your Telegram logins appear only after Telegram sign-in; Guess the song, BGMs and instrumentals, Ragas and Export a playlist once the library has loaded (each only when it has something to show).

### Web sidebar

- **Search, Home, Songs, New, Radio.** New and Radio are YouTube Music content.
- **Your Music:** Liked Songs, Your Playlists, **Your Listening** (stats), **Guess the Song**, then each of your playlists.
- **Library** (when signed in to YouTube Music) and **Spotify** (when connected).
- Footer: **Isai Extension**, the YouTube Music account button, **Get the Android app**, and the gear for **Settings**.
- Library Health has no sidebar entry: open it from Settings or the weekly digest card.

**Web keyboard shortcuts:** Space play/pause · ⌘/Ctrl+→/← next/previous · ⌘/Ctrl+↑/↓ volume · ⌘/Ctrl+F or \`/\` search · ⌘/Ctrl+K command palette · Esc closes Now Playing.

**Command palette (web):** ⌘K (Mac) or Ctrl+K opens one box, from anywhere. Type to play a song, open a film, composer, singer, raga or playlist, go to a page (Songs, Ragas, Wishlist, Your Listening, Settings…), or change something: "sleep 30" (sleep timer), "speed 1.25", "autoplay off", "crossfade 6", "shuffle", "next", "lyrics", "pop out". Every word you type must start a word of the result, spelt the forgiving way search spells. ↑/↓ pick, Enter does it, Esc closes.

## Playback

Tap the mini player (phone) or the player bar (web) to open Now Playing; its ⋯ menu holds the sleep timer, speed and smart shuffle on both apps.

### Now Playing

- **Caption:** "Playing from *list*", "Playing *song* Radio", or "Played by *device*".
- **Source and quality line** under the artist: a badge (Lossless, Hi-Res Lossless, Dolby Atmos, High quality) and where it plays from, e.g. *Lossless · from Telegram · Songs*. Tap it on the phone for codec · bit depth · sample rate · kbps · channels; on the web use ⋯ → **Song Info**.
- **Your note** on the song, when you've written one: under the credits on the web, at the foot of the artwork on the phone.
- **Controls:** like (heart / star), previous, play/pause, next, scrubber, volume.
- **Phone bottom row:** Lyrics, Shuffle, Repeat (off / all / one), AutoPlay, Up next, and the output pill (Audio output or Listen together).
- **Web:** **Lyrics** and **Up Next** tabs; close with the chevron, Esc, Back or a swipe down.

### The ⋯ menu

| Option | Phone | Web |
| --- | --- | --- |
| Sleep timer | After this song, 15, 30, 45 min, 1 hour, Turn off timer | Off, 5–45 min, 1 h, 1.5 h, End of This Song |
| Playback speed | 0.5× to 2× | 0.5× to 2× |
| Smart shuffle for "*list*" | Yes | Yes |
| Karaoke (voice down) | Yes; off while bit-perfect | — |
| Equalizer | Settings → Playback → Equalizer | **Equalizer…**: 10 bands, presets, **Even out loudness** |
| Pop Out Player | — | Chrome/Edge: a small always-on-top window |
| Song Info | Tap the quality line | Title, film, source, quality, group, message |
| Play original (the library's song in place of a YouTube video or edit) | Yes | — |
| Upgrade quality / Revert to original, Convert to audio/video, Copy log | Yes | — |

**Videos and edits play as your song.** A YouTube music video, or a slowed, reverb, sped-up, nightcore, lo-fi or 8D edit, plays as the song in your library when the library has it, with the same credited artist. On the phone the queue row becomes the library song before it starts (the next song is switched ahead of time); turn it off in Settings → Playback → **Play the original from your library**, and ⋯ → **Play original** switches the playing song by hand. On the web the edit plays from your copy (Settings → Sources → **The original of an edit**). A video uploaded by a TV or label channel, whose artist is only the channel's name ("Adangaatha Asuran Lyric Video | Dhanush | … | A.R. Rahman" by Sun TV), is read from its title: it plays as your song when the song name in the title matches exactly, someone named in the title is credited on your copy, and the lengths are within 30 seconds of each other. A remix, cover, live take, instrumental or karaoke version is another performance and still plays as it is.

**Smart shuffle** works per list (a film, playlist, mix, Liked songs…): no two songs from the same film, or three by the same composer, in a row, when the list allows it. Two versions of one song (sad, male, female…) never play back to back, even within one film, and BGMs and instrumentals play last unless you've set them to play with the rest.

### Lyrics

- Synced, word-level lyrics from several providers; pick one with **Lyrics by X** (phone) or the provider picker (web).
- **Romanize lyrics** (phone) or the **A** button (web, switch back with **அ**) shows Tamil lyrics in English letters, offline.
- **Translate lyrics** on the phone; **Lyrics offset** shifts the timing.

### Queue (Up next)

- Drag to reorder, remove a song, or **Clear**. The web adds Play Now and Play Next per row, and **Save Queue as Playlist…**.
- **AutoPlay** keeps playing similar music when the queue ends. After a library song, radio comes from your library (Home page → **Radio from your library**), starting with songs you usually pair with it and leaving out songs you keep skipping, and BGMs and instrumentals unless you've set them to play with the rest.

### Song actions (phone: long-press or ⋯; web: ⋯)

Play next, Add to queue, Like, Add to playlist, Remove from this playlist, **Hide this song**, Download / Keep Offline, Start radio, Open album, Open artist, Share (title, credits and a YouTube Music search). Library songs add **Goes well with**, **Follow** *composer*, **Your tags** (web: **Add Tags…**), **Your note** (web: **Add a Note…** / **Edit Your Note…**), **Other versions** when the film has the song's sad, male, female, reprise or remix version (web: **Other Versions (N)**), and on the phone **Make a ringtone**. A song on Wikipedia's raga lists adds **In** *raga* ("In Kalyani"), which opens that raga's songs.

### Audio output (phone)

The output sheet lists this phone, headphones, USB, HDMI, your watch, your other Isai devices and **Cast**, plus volume and **Audio Pipeline** details. With **Remember for each output** on (Equalizer screen), the equalizer, loudness and bit-perfect choices are kept per output: speaker, wired headphones, each Bluetooth device, the car, each USB DAC.

### Wake up and Bedtime (phone, in Sources)

| | Wake up to Isai | Bedtime |
| --- | --- | --- |
| Set | Time, days, what plays (Liked songs, Today's picks, Recently added, Hi-Res), Shuffle, Fade in (off to 5 min) | Time, days, what plays (Liked songs, a mood mix, a playlist), For 15–90 min, Fade out (off to 5 min) |
| When it fires | Opens over the lock screen with **Stop**, **Snooze 10 min**, **Keep playing**; raises media volume to at least 40%; rings the alarm sound if nothing plays in 25 s | Shows "Good night" with **Not tonight** / **OK**, plays shuffled, then fades and pauses |
| Test | **Try it now** | **Try it now** |

Both are real alarm-clock alarms, so Android shows them in the status bar. Songs kept on the phone play with no network.

### Other phone extras

- **Resume when headphones connect** (Home page settings, off by default): resumes within an hour of a pause.
- **Pausing with headphones on**: while headphones, a Bluetooth headset or a car stays connected, the player keeps its notification after a pause, so the headset's play button resumes even hours later. Unplugged, Android ends a pause after about 10 minutes as before. If Android stopped the app anyway, the headset's play button now picks up the last queue where it was.
- **Home-screen widgets** (long-press the home screen → Widgets → Isai):
  - **Now playing 2×2**, **4×2** and **4×1**: the playing song's cover and controls.
  - **Isai mixes 4×2**: Today's mix, Liked songs and mixes of the singers you play most, with their covers. Tap one to play it shuffled, without opening the app.
  - **Quick play 4×1**: **Today**, **Liked**, **New** and **Shuffle** buttons. Each plays that list shuffled.
  - **Your week 2×2**: time listened since Monday, plays and songs, the singer you played most and the song on repeat. Tap it to open Isai.
- **Make a ringtone** (a library song's menu, Android 10 and later): Isai fetches the song, draws its waveform and you drag or tap to pick 30 seconds (it starts a third of the way in). **Try it** plays that part. Choose **Ringtone**, **Notification sound** or **Alarm sound**, then **Save**: a WAV with short fades goes to Ringtones/Isai (or Notifications or Alarms). **Open sound settings** is where you set it with Android's own picker; Isai doesn't change the setting itself.
- Android Auto and Chromecast: see Devices below.

## Finding music: Home, search, library and playlists

Home builds personal shelves from your library and every device's history; search finds library songs offline first; playlists, likes, tags and follows sync to every device.

### Home shelves

In order, each shown only when it has songs (any can be turned off under Home Page settings):

| Shelf | What's in it |
| --- | --- |
| On this day | On the day only: "Today is *singer*'s birthday", "*Film* came out 34 years ago today", with their songs. Dates come from Wikidata and Wikipedia, looked up a few at a time; it fills over the first days |
| Jump back in | What you played recently |
| Your top songs, Your mixes | Your most played songs, and mixes built from them |
| Composers (then Lyricists on the phone) | The composers you play most first; each opens Play / Shuffle |
| Liked songs, Your playlists | Your own lists |
| Moods & genres | Mixes tagged from YouTube Music's Tamil mood playlists (love, sad, vibe…) |
| Films you love | Films you play most |
| Today's picks | A fresh daily selection (BGMs and instrumentals left out unless you play them with the rest) |
| Your mornings / afternoons / evenings / nights | Songs you mostly play at this time of day (2+ plays, 40%+ at that time) |
| A year ago | What you played most this month in earlier years (fills from Oct 2027) |
| Never played | Library songs no device has played, your favourite singers and composers first, reshuffled daily (BGMs left out the same way) |
| Hi-Res picks | Hi-Res songs |
| Through the years | Decades by your top composers ("80s Ilaiyaraaja") |
| Rediscover | Songs you loved but haven't played in a while |
| Recently added | Songs posted to your library groups in the last 14 days |
| New from people you follow | Their songs posted in the last 30 days |
| Your tags | One tile per tag you created |
| Duets | The singer pairs with the most songs together ("S. P. Balasubrahmanyam & S. Janaki"); each opens their songs |
| Milestones | On the web a card above the shelves, on the phone a shelf for a week with one notification: a round number you just passed (your 1,000th Ilaiyaraaja play, 100 hours of SPB, a song played 50 times, your 10,000th play, a year of listening). Each opens its songs; **Done** (web) keeps it as seen. The first time, only your three biggest show |
| By pace | **Work out**, **Dance** and **Calm** mixes, from each song's tempo and energy. Shows once 60 songs or more are measured on the Mac (see Mac-side commands) |

On the web, the cards (weekly, monthly, yearly recaps, wishlist arrivals, milestones) sit above the shelves, and YouTube Music's own shelves follow them.

### Search

- Library songs come first under **In your library**, found offline; YouTube Music results follow (top results, artists, albums, songs, playlists, videos).
- Titles match **by sound**: "Thirunelveli Alwaada" finds "Thirunelveli Halwada" (h, w/v, ee/i, oo/u, zh/l, th/t, doubled letters).
- You can type in **Tamil script** ("இளையராஜா", "கண்ணான கண்ணே"); it is converted to English letters first.
- **From the lyrics:** type a line you remember ("poongatru pudhithanadhu", or in Tamil script) and the songs whose lyrics have it show too: on the web under **From the lyrics**, with the line they were found in; on the phone after the title matches under the library results. It searches the lyrics Isai has already shown on that device (kept there, up to 6,000 songs), so it works offline and grows as you play.
- The web keeps your last 20 **Recent searches**. Shortcut: ⌘/Ctrl+F or \`/\`.

### Browsing the library

- Web **Songs** tabs: Songs, Films, Artists, Composers, Lyricists, Duets, Ragas, Years, Hi-Res, BGMs, with a **Shuffle** button and a filter box; with several library groups, **All** or one group.
- **Duets** (web tab; Home shelf on both): singer pairs with three or more songs together. The composer is left out of the credits, and songs with five singers or more don't count.
- **BGMs** (web tab; phone: Sources → **BGMs and instrumentals** → **Open them**): themes, BGMs, background scores, karaoke and instrumental versions, told by their titles, and bits under 75 seconds. **Play Them Too** (web) or **Play them with the rest** (phone) puts them back into radio, smart shuffle, Never played and Today's picks; this is kept per device.
- **Ragas** (web tab; phone: Sources → **Ragas**, the eight biggest, then **Show all**): the Carnatic raga a film song is set in, from English Wikipedia's lists of Tamil film songs by raga (about 3,000 songs in 88 ragas, bundled with the app, so it reads offline). A song counts when its film and the start of its title match one on the list, spelt the forgiving way search spells; a ragamalika song can be in several. Each raga opens its songs.
- **Film pages:** director, cast and release date from Wikidata, or from the film's Wikipedia article when Wikidata has only the year (only on a sure match), the songs, and **Not in your library (N)**: soundtrack tracks you lack, from iTunes, with **Add to Wishlist**.
- **Artist pages:** Your top songs, then film by film, then **Through the years**, then **Sings most with** (the singers they share most songs with, each opening their duets), then all songs.
- **Composer and singer pages:** Play, Shuffle and **Follow**. A composer's page also lists **Films you don't have yet (N)**: their Tamil films on Wikidata with none of their songs in your library, newest first. Web: **Add to Wishlist** per film (**Show All** for the rest). Phone: tap a film to put it on your wishlist.
- **Through the years** (composer and singer pages): a bar per year for how many of their songs you have, from each file's year tag (or the film's release year once its film page has looked it up), with their first song, busiest years and latest. On the web a bar opens that year's songs; on the phone each year is a tile. It shows once their songs span three years or more, so it needs the years read on the Mac (\`tgl metadata composers\`).

### Guess the song

Web sidebar → **Guess the Song**; phone Sources → **Guess the song** → **Play**. Isai plays ten seconds from the middle of a library song and you pick the film (or, with **Guess the composer**, the composer) from four choices, the others from the same decade where possible. A round is ten songs, each from a different film, and your best score is kept for each kind of round. Choose where the songs come from: all your songs, your Liked songs, songs kept offline (web) or downloaded (phone), a decade, or one composer's songs. BGMs and bits are left out. The clip plays on its own, so Now Playing never gives the answer away; **Play the Song** (web) plays the whole song after you answer.

### Playlists and your own lists

| Feature | Web | Phone |
| --- | --- | --- |
| Liked songs | Heart / Favorite on a song | Heart on a library song |
| New playlist | Your Playlists → **New Playlist**, or a song's ⋯ → Add to Playlist | Song menu → add to playlist |
| Save the queue | Up Next → ⋯ → **Save Queue as Playlist…** | Not on the phone |
| Import | Your Playlists → **Import…**: a Spotify, Apple Music, JioSaavn or YouTube Music link, "Artist - Title" lines, or an .m3u file | Share the playlist to Isai from that app, or Sources → Import a playlist |
| Smart playlist | Your Playlists → **New Smart Playlist** | Sources → Smart playlists |
| Wishlist | Your Playlists → **Wishlist** | Sources → Wishlist |
| Tags | Song ⋯ → **Add Tags…** (comma-separated) | Song menu → **Your tags** |
| Notes | Song ⋯ → **Add a Note…** (up to 280 characters; empty removes it) | Song menu → **Your note** |
| Follow | Follow button on a composer or singer page | Sources → Following, or song menu → Follow *composer* |
| Hide a song | Song ⋯ → **Hide This Song**; undo from **Hidden Songs** | Song menu → hide |
| Export | The download button on a playlist or Liked Songs: **M3U for the Backup Drive**, **Text: Song – Film – Composer**, **CSV for a Spreadsheet** | Sources → **Export a playlist** → a playlist → **Share as text** or **Share as CSV** |

- **Imported songs** that are in Songs play from there; the rest play from JioSaavn or YouTube Music and are looked for in your authorized groups, one a minute, then forwarded to Songs as lossless copies.
- **Smart playlists** are rules: composer, singer, lyricist, film, raga, tempo (faster or slower than N BPM; songs not measured yet match neither), decade, quality, plays, added in the last N days, liked, your tag (is / isn't), matching all or any. Pick the order (newest, oldest, most played, shuffled daily, by title) and a maximum size. They refill each time you open them; you can't add songs by hand.
- **Wishlist:** type "Song - singer or film", a film name, or a link. Each wish shows Waiting, Already in your library, or Arrived *date*; you're notified when one arrives.
- **Goes well with** (song ⋯ menu) opens songs you often play right after it.
- **Export:** the M3U lists each song by its file name in the backup folder, so put the file in the drive's backup folder (next to isai-backup.json) and open it in VLC or a car's USB player; songs the drive doesn't have are listed as comments. It needs the drive chosen under Settings → Your Backup Drive. Text and CSV need nothing.

## Offline listening

You can keep songs by hand, let Smart offline pick them, or (on the laptop) play from your backup drive. Downloads are always your original files from Telegram, with their cover.

| Way | Phone | Web | What it keeps |
| --- | --- | --- | --- |
| By hand | **Download** on a song; **Download all** on film, mood, playlist and Liked pages | **Keep Offline** on a song; the download button on films, moods, playlists and Liked songs; the **Kept Offline** page lists them | Exactly what you pick; never removed automatically |
| Smart offline | Sources → Smart offline → **Keep your songs offline** | Settings → Smart Offline → **Keep your songs offline** | Up to a quarter of the space for songs added in the last 14 days (newest first), the rest for your most played songs on every device; hidden songs never |
| Backup drive | — | Settings → Your Backup Drive → **Choose Folder…** | Plays songs from the drive the Mac's \`tgl backup\` writes, including ones gone from Songs |

**Smart offline settings** (both apps): off until you turn it on; **Space to use** 1–50 GB, 5 GB by default. It checks every 6 hours (the phone only on Wi-Fi) and only removes songs it downloaded itself. On the phone, **Remove its downloads** turns it off and deletes them; songs you downloaded yourself stay and don't count against its space.

**Backup drive notes:** the browser asks for folder access once; tap **Reconnect** when Chrome asks again. Damaged files are skipped, and with the drive unplugged songs come from Telegram as before. The player then reads *from your backup drive*.

**Preload the next song** (phone Settings → Playback, with **Only on Wi-Fi**) fetches the next song ahead so it starts instantly.

## Devices: sync, handoff and remote control

Every device signed in to the same Telegram account shares one library state through the **Isai Sync** group, so the phone and the browser behave like one player. Nothing goes through a server. **Sync between devices** (phone: Sources → Your devices; web: Settings → Sync) says whether sharing is up to date, or what went wrong. When two devices change the same thing, the later change wins, even if one device's clock is off.

**What syncs automatically:** Liked songs, playlists (smart ones too), hidden songs, your tags, people you follow, the wishlist, and each device's play history (which drives Home's shelves and stats).

### Continue here (handoff)

- While one device plays, the other shows **Playing on *device* — Continue here** (a banner on the web, a card on the phone's Home).
- Tap it and the song starts at the other device's position; the first device pauses and steps aside within about a second.

### Remote control

| From | How | What you can do |
| --- | --- | --- |
| Web → phone | Player bar → **Play on** → pick the phone | Play/pause, next, previous, seek; songs you tap on the web play on the phone until you pick **This browser** |
| Phone → laptop | Player → output sheet → pick the laptop (listed beside Cast and the watch) | The phone's player, notification and lock screen drive the laptop; volume keys set the web's volume |

- Only library and YouTube songs move between devices; a command runs once and only within a minute.
- **Phone in the background:** Android 12+ only lets a background app start music within 10 minutes of a pause. After that, a **Tap to play "song"** notification appears and the web says *Tap the notification on (phone) to play*. Tap **Always allow** on that notification, or turn on Sources → Home page → **Let other devices start music here**, so Android stops asking.
- **Test the connection:** web Play on → Test the connection; phone Settings → Sources → Your devices → Test the connection. It sends three pings and shows the median reply time; each device also shows how long its last Continue here took to make sound.

### Other outputs on the phone

- **Chromecast:** library songs cast from the phone over Wi-Fi (ALAC excepted).
- **Android Auto:** an Isai folder with Liked songs, your playlists and Home shelves.
- **Wear OS** watch, Bluetooth and USB DACs appear in the same output sheet.

## Stats, recaps and notifications

Isai builds all its insights from the play history every device shares, so a song played on the laptop counts on the phone too.

### Your listening (stats page)

Web: **Your Listening** (\`/stats\`). Phone: Sources → **Your listening**. Pick **All time** or a year to see:

- hours and plays, number of songs, how much came from your library, and how much was lossless and Hi-Res;
- hours by month (for a year);
- top songs, composers, singers, films and decades.

Monthly plays are kept for good from 19 Oct 2026, so years build up from then; an imported history (below) fills in the years before.

### Import your old listening (web)

Settings → **Import Your Listening** → **Choose Files…**: pick a Spotify export (Account → Privacy → Download your data: the \`StreamingHistory_music_*.json\` files, or the extended history's \`Streaming_History_Audio_*.json\`) or a YouTube Music one from Google Takeout (\`watch-history.json\`), or the export's whole .zip. Isai reads it on the laptop, counts plays of 30 seconds or more, and matches each to a library song by its title (spelt the forgiving way) and a shared singer, composer or film; a title the library has only once matches on its own. It shows how many plays matched, from when to when, and the songs that didn't match (not in your library, or spelt too differently).

**Add to Isai** shares the matched plays as one more device in Isai Sync ("Imported from Spotify" or "Imported from YouTube Music"), so on every device they count toward Your listening, top songs, Rediscover, A year ago, For this hour and milestones. Importing again replaces the earlier import of that service; **Take Them Out** removes it. The export itself never leaves the laptop.

### Recaps

| Recap | When | Phone | Web | Contents |
| --- | --- | --- | --- | --- |
| Your week in Isai | Sundays from 9:00 | Quiet notification ("Weekly digest" channel) | Home card until **Done** | Songs added (count + newest five), songs gone from Songs, library health changes, Mac backup progress |
| Your month in Isai | 1st of the month from 9:00 | Notification ("Monthly recap" channel) | Home card until **Done** | Hours, plays, top 5 songs, top composers, top films, new favourites (first heard that month, 3+ plays) |
| Your year in Isai | 1 January from 9:00, through January | One notification | Home card | Hours, plays, top songs, composers, films, new favourites, biggest month |

A phone that's off on the day gets the recap later. The first week, month or year after installing only starts counting.

### Other notifications (phone)

Each has its own Android channel, so you can turn any off in Android's notification settings.

- **Wishlist:** a wished-for song arrived, or the nightly run is holding one for your OK.
- **People you follow:** a new song by a composer or singer you follow.
- **Add new songs:** the nightly run added songs, or songs wait for your OK; also when no run has finished for 3 days, with the reason.
- **Telegram signed Isai out:** a login stopped working (also shown as a card at the top of Home until you sign in again).
- **Logins:** a new Telegram login appeared on your account, or one of Isai's ended.
- **Missing from Songs:** a song disappeared since the last check.
- **Milestones:** a round number your listening just passed (once each).

## Growing and caring for the library

The phone adds new Tamil songs to Songs every night and keeps a health report you can act on. Nothing here deletes anything from Songs; "hide" only hides a song inside Isai.

### Library groups

- Sources lists your **library groups** (Songs plus any private one-member groups you link or create), each with a language label; one is the target for found songs. Isai plays them merged as one library.
- **Link a group** adds any group or channel you're in, by its link (\`t.me/+…\`, \`t.me/name\`, \`@name\`), as a place to look for songs. It's listen-only: Isai never joins a group, and refuses groups that restrict saving content.
- If a linked group can't be read (you left it, or it was deleted), **Refresh library** skips it and names it, and the other groups still refresh.

### Your music servers (phone: Sources → Your music servers; web: Settings → Your Music Servers)

Songs on your own server join the library beside the Telegram groups. Home, search, radio, likes, playlists and every device's sync include them, and they play from the server in their original quality.

1. **Add a server**, pick its kind, and type its address, user name and password:
   - **Subsonic or Navidrome**: Navidrome, Airsonic, Gonic, Ampache and any other Subsonic-API server.
   - **Jellyfin or Emby.**
   - **WebDAV**: Nextcloud, ownCloud, a NAS or rclone. Title and artist come from the file name ("Artist - Title"), the album from its folder. On the web the server must allow this site (CORS), which most WebDAV servers need switched on.
   - **Windows or NAS share (SMB)** (phone only): type the share and folder, e.g. \`smb://nas.local/Music\`. Leave the user name and password blank for a guest share. Title and artist come from the file name, the album from its folder, and the cover from a picture in the same folder.
2. Isai signs in and reads every song. For Subsonic and Jellyfin it keeps a sign-in token, not the password. WebDAV needs the password for each file, so the phone keeps it, encrypted.
3. **Refresh servers** (or pulling down on Library, on the phone) picks up songs added since. A server that can't be reached is named, and the others still refresh.
4. **Remove** takes a server and its songs out of the library. Nothing on the server changes.

**Add a Folder on This Computer** (web) adds a music folder and the folders inside it, read from the files' own tags (MP3 and FLAC), else from their names. Chrome and Edge keep the folder; after a restart they ask once more (**Allow Again**). Other browsers forget it when the page closes, and its songs need the folder picked again to play. Nothing leaves the computer.

**Add this phone's music** (phone) adds the songs saved on the phone, with their own tags, once you allow Isai to read them. Isai's own downloads are left out, since they are already in your library. These play straight from the file.

**On your other devices:** a server added on one device shows on the others, marked "on your other devices", with **Sign in** (the form opens with its address and user name filled in; type the password there). Passwords and sign-in tokens never leave the device they were typed on. **Forget** stops every device offering it.

On the web the server must use https and allow this site: Navidrome and Jellyfin do by default. A song liked in the browser is the same song on the phone, as long as both use the same address and user name.

### Add new songs (phone: Sources → Add new songs)

1. tglossless has its own Telegram login, but your player login approves it for you, so it signs in without a phone number or code (2FA password once, if you use one). The nightly run signs it back in the same way if Telegram ends that login. Only when Telegram refuses does it ask for a phone number and code.
2. **Find new songs** scans your authorized groups and shows the plan; tap **Forward** to send the lossless copies to Songs.
3. **Add new songs every night** (on by default) does this daily while the phone charges on Wi-Fi. The row shows the last run and **Next run**, and explains why if 3 days pass without one.
4. **N songs need your OK** lists songs whose language is only "likely" Tamil, with the reason. Switch on to add, off for "not Tamil" (never offered again). The web shows the same list in Settings → Library Health.
5. **Earlier versions** keeps the last 5 versions of the shared library state; pick one and **Put back** to roll back (the restore itself can be undone).

### Library health (phone: Sources → Library health; web: Settings → Library Health)

| Item | What it does |
| --- | --- |
| Counts | Songs, language unknown, only likely, duplicate groups, lossy songs with a lossless copy waiting, and a **Since** line of what got better or worse |
| Hide the worse copies | Keeps the best copy in each duplicate group and hides the rest on every device |
| Review their language | Switches for unknown or likely songs already in Songs; off hides it and records your decision |
| Add the lossless copies (N) | Phone only: confirms each upgrade, forwards the lossless copy, then hides the lossy one |
| Check artwork / Find covers on iTunes | Finds songs with no cover, then fills them from iTunes when album and artist match |
| Songs you skip | Songs skipped 3+ times and more often than played, each with a hide switch |
| Check Songs now / Missing from Songs | Lists songs sent to Songs that are gone; on the web, a **Play** button when your backup drive has the song |
| Backed up | The Mac backup's progress: N of M songs, files Telegram couldn't serve, damaged files |

### Your Telegram logins

Phone: Sources → **Your Telegram logins**; web: Settings → **Your Telegram Logins**. A read-only copy of Telegram's own list. Isai warns you about a new login or a lost Isai login; ending a login stays in Telegram's own settings.

### Mac-side commands (tglossless)

Run these in Terminal on the Mac; Isai only shows their results.

- \`tgl backup /Volumes/(drive)/Songs\` copies Songs to a drive (\`--plan\` shows the size first; resumable).
- \`tgl backup --verify\` test-decodes every saved file; \`tgl backup-schedule on\` runs a nightly top-up.
- \`tgl put-back\` re-uploads missing songs from the backup after you confirm; likes and playlists follow them.
- \`tgl metadata composers\`, then \`tgl state push\` and \`tgl export-catalog --post\`, fill in composers, lyricists and years.
- \`tgl metadata tempo\` measures each song's tempo (BPM) and energy from its copy on the backup drive (a minute from the middle, decoded with ffmpeg; nothing is written anywhere). Without a drive, \`tgl metadata tempo --from-telegram\` measures FLAC and MP3 songs from a 20-second slice downloaded from Songs (about 2 MB each; it asks first). Both resume where they stopped. Then \`tgl state push\` and \`tgl export-catalog --post\`: Isai's By pace mixes, the tempo rule and radio's pace come from it.

## Settings reference

Every option, grouped as each app shows it. Defaults are in brackets. The phone's Settings has a **Search settings** field at the top.

### Phone: Settings

| Group | Option | What it does |
| --- | --- | --- |
| — | Account & integrations | Google account and profile, Spotify, Discord rich presence, Last.fm and ListenBrainz scrobbling and its timing |
| — | Listen together | Share a code and play the same music in time with others |
| Audio quality | Sources | Opens the Sources screen |
| Audio quality | On Wi-Fi / On mobile data | Low, Medium, High or Lossless per network (default Lossless for both); the one in use says IN USE |
| Audio quality | Dolby Atmos | Plays Atmos where the device can decode it (default on) |
| Downloads | Download quality | Standard, High or Lossless (default Lossless) |
| Downloads | Download over Wi-Fi only | (default on) |
| Downloads | Export compatible downloads | Copies downloads to Music/Isai (default off) |
| Playback | Prefer music-only version | Avoids video versions (default off) |
| Playback | Output precision | 16-bit PCM or 32-bit float (default 16-bit) |
| Playback | Prefer USB DAC / Bit-perfect to a USB DAC | Sends untouched audio to a USB DAC on Android 14+; effects and crossfade pause while it holds (default off) |
| Playback | Preload the next song | Fetches the next song ahead (default on); **Only on Wi-Fi** (default off) |
| Playback | Karaoke | Turns the centred voice down, with an amount slider; resets to off each launch |
| Playback | Play the original from your library | A YouTube music video or a slowed, reverb, sped-up, nightcore, lo-fi or 8D edit plays as your library's song (default on) |
| Playback | Loudness normalization | Evens out volume between songs (default on); **Disable on Phone Speaker** (default on) |
| Playback | Crossfade / Automix (beta) | Fade between songs, or DJ-style beat-matched mixes (Efficient, Balanced, Performance) |
| Playback | Skip silence / Spatial audio | (default off) |
| Playback | Equalizer | Tone pad (Broad or Focused), 17 presets, bands, balance, system equalizer, **Remember for each output** (default on) |
| Appearance | Theme | System, Light, Dark (default Dark) |
| Appearance | Reduce animation, Reduce dynamic blur, Liquid Glass (Android 12+), Legacy mesh gradient | Look and motion |
| Appearance | Full-screen cover art, Animated cover art | (default on); animated covers can be limited to Wi-Fi; Set up Spotify Canvas |
| Appearance | Artist signatures | Signature API URL |
| Appearance | Synced lyrics | (default on); Blur unfocused lyrics, Lyrics sources, Translation language |
| Performance | High performance mode, Refresh rate | Smoothness against battery |
| Local Music | Local music folder, Use all audio folders, Filter non-music audio (default on) | Songs on the phone itself |
| Storage | Song cache limit (default 512 MB), Clear song cache, Clear image cache, Show cached songs folder | Space used by played songs |
| Your data | Replay, Work out genres (default on), Export data, Import data | Backup of app settings and history |
| Miscellaneous | Play next on swipe, Don't repeat songs in current session, Stop music on close from recents, Hide volume bar, Hide status bar in player, Show queue history, Hide Song Status | (all off) |
| Language | App language | |
| Advanced | Smart audio alignment (default on), Show stats for nerds (default off), App icon | |
| Updates | Check for updates | Installs the newest build from Isai Builds |
| Help | User guide, What's new, Open-source licences | This guide, what each build added, and the software Isai is built on |

### Phone: Sources → Home page

| Option | Default | What it does |
| --- | --- | --- |
| Show your shelves first | on | Isai shelves above YouTube Music's feed |
| Show YouTube Music's shelves | on | Off shows only Isai shelves |
| Radio from your library | on | Radio after a library song stays in your library |
| Tamil film music | on | Film details from Wikipedia and Wikidata, and a film's other songs from iTunes, looked up by album name. Off: film pages show your songs only |
| Resume when headphones connect | off | Resumes within an hour of a pause |
| Let other devices start music here | tap to allow | Turns off battery optimisation so the web can start the phone any time |
| One switch per shelf | all on | Hide any of the 23 shelves (Milestones and By pace among them) |

**Source matching → Track length tolerance** (default 3 s) decides how closely a song's length must match when Isai swaps in your library copy.

### Web: Settings

| Section | Options |
| --- | --- |
| Telegram Library | Sign in; Songs count with **Refresh library**; **Sign Out** (this browser only) |
| Library Groups | Each group's language, **Unlink**, **Link a group**, Link by its link, **New group**, Found songs go to |
| Missing Songs | **Add missing songs from your groups**: a song played from YouTube Music that isn't in Songs is looked for in your groups and forwarded as a lossless copy |
| Your Telegram Logins | Read-only list with **Check Now** |
| Library Health | Opens the health page |
| Sources | **Your library first**, **The original of an edit** (default on), your addons (Allow, reorder, Remove, on/off), **JioSaavn** (needs the extension), **Add an addon** |
| Replay Cache | Played songs kept, **Clear**, **Keep up to** N GB |
| Smart Offline | **Keep your songs offline**, **Space to use**, **Check Now** |
| Your Backup Drive | **Choose Folder…**, Reconnect, Look Again, Change…, Forget (Chrome or Edge on a computer) |
| Home Page | Show your shelves first, Show YouTube Music's shelves, one switch per shelf (Milestones turns the milestones card off) |
| Import Your Listening | **Choose Files…** for a Spotify or YouTube Music history export, then **Add to Isai**; **Take Them Out** for an earlier import |
| Account & Integrations | YouTube Music, Spotify, Discord, Isai Extension version, Spotify Canvas |
| Listen Together | Start a Party, Join with a Code, party server and controls |
| Playback | **AutoPlay**, **Crossfade** (Off, 3, 6, 9, 12 s) |
| Lyrics | Providers (reorderable), Prefer syllable timing, extension access, PaxSenix key, Restore Defaults |
| Help | **User Guide** (this guide), **What's New** (what each build added) |

The web has no streaming-quality setting: library songs always play in their original quality.

## Troubleshooting

| Symptom | Cause | Fix |
| --- | --- | --- |
| "Telegram signed Isai out" card, notification or red web banner | Telegram ended the login (it can end every login of the app at once) | Sign in again: phone Settings → Sources; web **Sign In Again** on the banner |
| The web asks you to tap a notification on the phone | Android won't let a background app start music more than 10 minutes after a pause | Tap **Always allow** on the notification, or turn on **Let other devices start music here** |
| Nightly run hasn't run for days | Phone not charging on Wi-Fi, app force-stopped, or Android stopped the job at about 10 minutes | Read the reason under **Add new songs every night**; turning on **Let other devices start music here** also lifts the 10-minute limit |
| By pace mixes or the tempo rule are missing | No songs measured yet | On the Mac: \`tgl metadata tempo\` (or \`--from-telegram\`), \`tgl state push\`, \`tgl export-catalog --post\` |
| Search by lyrics finds nothing | Only lyrics shown on that device are searched | Play the song with lyrics open once; it is kept from then on |
| A song isn't found in your library | Spelling differs | Search matches Tamil titles by sound ("Alwaada" finds "Halwada") and in Tamil script; try the film or singer name |
| Composers, Lyricists or Years shelves are empty | The Mac hasn't read those tags yet | On the Mac: \`tgl metadata composers\`, \`tgl state push\`, \`tgl export-catalog --post\` |
| A JioSaavn song or a Spotify/Apple Music import fails on the web | The Isai Chrome extension is missing or old | Install or update the extension (0.7.0 or newer) and allow the site when asked |
| Handoff or remote control feels slow | Not yet measured on two real devices | Run **Test the connection** on both devices and note the times |
| Library covers missing on Home, in lists or in the player, but shown in the notification | Fixed in build 41 (the app's image loader never asked Telegram for them) | Update; songs with no cover in Telegram still show a blank tile until **Find covers** finds one |
| Headset play does nothing after a long pause and the notification is gone | Android stopped the paused player | Fixed in build 41 while a headset stays connected; also tap **Always allow** on the "Tap to play" notification |
| A library song keeps loading and never plays | Telegram can't be reached (no network, or a network that blocks Telegram) | Since build 46 it moves to the next source after a few seconds; a song partly on the phone keeps waiting for Telegram |
| A library song's title is a file name, a hashtag list or a number | The file's tags were broken | Since build 46 tglossless names it from the file; run \`tgl export-catalog --post\` on the Mac (or wait for the nightly run) to update the catalogue |
| A song starts on a lower quality and switches to FLAC a few seconds in | A lossless addon answered more than 2 seconds after a lossy source | Expected: the switch is the upgrade. If an addon was down, Isai tries again a minute later, up to three times |
| A song you have in Songs plays from YouTube | The match missed it | ⋯ → **Copy log** and send it: a line "Telegram · Songs has … but it wasn't matched" names the library copy |
| The log shows YouTube lines, but the song plays as FLAC | The Songs copy is saved on the phone from an earlier play, and a YouTube lookup ran beside it | Nothing to do: since build 54 the log's first lines say **from Telegram · Songs (saved on this phone)** with the file's own bitrate, and the YouTube lookup is dropped |
| No update offered | The check runs once per launch | Settings → Updates → **Check for updates**, or install the APK from the Isai Builds group |

**Good to know**

- Isai never deletes from Songs. Hidden songs come back from **Hidden songs**.
- The APK refuses to start if it was re-signed or a debugger is attached; only install builds from Isai Builds or the GitHub release.
- Telegram keys and logins are entered on the device and never shipped in the app.
`,l=`# Isai User Guide

For the Isai app on Android and the web app at [isai-app.github.io](https://isai-app.github.io/).

## Overview

Isai plays your own music library, in its original quality, from wherever it already lives:

- **Telegram:** the audio files in your own groups and channels. Isai signs in to your Telegram account on each device and streams each file when you play it.
- **Your own music server:** Subsonic or Navidrome, Jellyfin or Emby, or a WebDAV folder (Nextcloud, ownCloud, a NAS).
- **A Windows or NAS share** (SMB, on the phone).
- **Files on your device:** the music saved on your phone, or a folder on your computer (web).

Isai has no server and keeps nothing of yours. Your library, likes, playlists and play history stay in your own Telegram account and on your devices. Everything that follows you between devices travels through **Isai Sync**, a private group Isai creates in your Telegram with only you in it.

Isai plays only music you already have. It doesn't download from, or stream, any store or music service.

## Getting started

### Phone (Android)

1. Open Isai. The first screens ask for your name and then show **Sources**, where your library comes from.
2. **Telegram library** → **Sign in**: your phone number with country code → **Next**, the code Telegram sends you → **Next**, and your 2FA password if you use one.
3. **Library groups** → **Link a group** and pick the groups or channels that hold your music, or paste a link (\`t.me/+…\`, \`t.me/name\`, \`@name\`). Isai only reads them; it never posts or joins anything.
4. **Your music servers**: **Add a server** for a Subsonic, Navidrome, Jellyfin, Emby, WebDAV or SMB server, and **Add this phone's music** for the songs saved on the phone.
5. Go to **Home**. Your library loads in the background; songs appear as they are found.

### Web (computer)

1. Open [isai-app.github.io](https://isai-app.github.io/) in Chrome, Edge, Firefox or Safari.
2. **Settings → Telegram Library**. A QR code appears: on your phone, open Telegram → Settings → Devices → **Link Desktop Device** and point the camera at it. Type your 2FA password if you use one. **Use Phone Number Instead** signs in with your number and a code. On a phone's browser it asks for the number straight away.
3. **Library Groups** → **Link a group**, as on the phone.
4. **Your Music Servers**: **Add a server**, or **Add a Folder on This Computer** (see Your music servers below).
5. Optional: install Isai as an app from the install icon in the browser's address bar.

**Use your own API keys** (Advanced, on both): Isai signs in with its own Telegram app keys. If you'd rather use keys you made at my.telegram.org, enter them here before signing in.

### Help and updates

- **Settings → Help:** this **User guide**, **What's new**, **Privacy**, **Terms of use** and **Open-source licences**. If Isai ever closes unexpectedly, **Send the last crash report** appears there too (phone). The report stays on the phone until you share it.
- A notice from Isai (an outage, or a request to update) shows at the top of Sources on the phone and of Settings on the web.
- **Web:** reload the page for the newest version.

## Finding your way around

### Phone

| Tab | What it shows |
| --- | --- |
| Home | Cards (what to do next, "Playing on *device*"), then shelves built from your library and listening |
| Library | Your Liked songs, playlists, hidden songs, downloads and the music on this phone |
| Search | Your library, found offline as you type |

Your account picture at the top of Home opens **Settings**. **Settings → Sources** holds everything about your library: Telegram, library groups, servers, devices, offline and the Home page.

### Web

- Sidebar: **Search, Home, Songs**, then **Your Music** (Liked Songs, Your Playlists, Your Listening, Guess the Song and your playlists), and the gear for **Settings**.
- **Keyboard:** Space play/pause · ⌘/Ctrl+→/← next/previous · ⌘/Ctrl+↑/↓ volume · ⌘/Ctrl+F or \`/\` search · ⌘/Ctrl+K command palette · Esc closes Now Playing.

## Playback

- Tap the mini player (phone) or the player bar (web) for **Now Playing**: artwork, controls, **Lyrics** and **Up next**.
- The line under the artist says the quality and where the song plays from, e.g. *Lossless · from Telegram · My Music* or *from music.example.com*.
- **⋯ menu:** sleep timer, playback speed, smart shuffle for the list you're playing; on the web also **Equalizer…** and **Pop Out Player**.
- **Lyrics** are synced where LRCLIB has them; Tamil lyrics can show in English letters (**Romanize** on the phone, **A** on the web).
- **Up next:** drag to reorder, remove, or clear. **AutoPlay** keeps going with similar songs from your library when the queue ends.
- **Song actions** (long-press or ⋯): Play next, Add to queue, Like, Add to playlist, Hide this song, Download (phone) or Keep Offline (web), Start radio, Open album, Open artist, Your tags, Your note.

## Your library

### Library groups (Telegram)

- **Link a group** adds a group or channel you're in; Isai plays every linked group as one library. **Refresh library** picks up new songs.
- A group that can't be read any more (you left it, or it was deleted) is skipped and named; the others still refresh.
- Isai never joins groups for you, and skips groups that don't allow saving their content.

### Your music servers (phone: Sources → Your music servers; web: Settings → Your Music Servers)

1. **Add a server**, pick its kind, and type its address, user name and password:
   - **Subsonic or Navidrome**: Navidrome, Airsonic, Gonic, Ampache and any other Subsonic-API server.
   - **Jellyfin or Emby.**
   - **WebDAV**: Nextcloud, ownCloud, a NAS or rclone. Title and artist come from the file name ("Artist - Title"), the album from its folder.
   - **Windows or NAS share (SMB)** (phone): the share and folder, e.g. \`smb://nas.local/Music\`. Leave the user name and password blank for a guest share.
2. Isai signs in and reads every song. For Subsonic and Jellyfin it keeps a sign-in token, not your password. WebDAV and SMB need the password for each file, so it is kept on the device, encrypted.
3. **Refresh servers** picks up songs added since. A server that can't be reached is named, and the others still refresh.
4. **Remove** takes a server's songs out of the library. Nothing on the server changes.

**Add this phone's music** (phone) adds the songs saved on the phone, with their tags, once you allow Isai to read them. They play straight from the file.

**Add a Folder on This Computer** (web) adds a music folder and the folders inside it, read from the files' own tags (MP3 and FLAC), else from their names. Chrome and Edge remember the folder; after a restart they ask once more (**Allow Again**). Other browsers forget it when the page closes. Nothing leaves the computer.

**On your other devices:** a server added on one device shows on the others with **Sign In**, its address and user name filled in; type the password there. Passwords and sign-in tokens never leave the device they were typed on. **Forget** stops offering it.

**On the web,** a server must use https and allow this site (CORS). Navidrome and Jellyfin do by default; most WebDAV servers need it switched on.

## Finding music

### Home

Shelves appear as your library and listening grow; turn any off under **Home page** (phone: Sources → Home page; web: Settings → Home). Among them: Jump back in, Your top songs and mixes, Liked songs and Your playlists, Today's picks, songs for this time of day, Never played, Hi-Res picks, Rediscover, Recently added, New from people you follow, Your tags and Milestones. With an empty library, Home says what to do next.

**Tamil film music** (Home page settings, off by default) adds film details from Wikipedia and Wikidata to film pages, and a film's other songs from iTunes.

### Search

- Library songs show as you type, found on the device with no network.
- Titles match **by sound**, so spelling differences ("Alwaada" / "Halwada") still find the song. Tamil script works too.
- **From the lyrics:** type a line you remember to find songs whose lyrics Isai has shown on that device.

### Playlists and your own lists

| Feature | Web | Phone |
| --- | --- | --- |
| Liked songs | Heart on a song | Heart on a song |
| New playlist | Your Playlists → **New Playlist**, or a song's ⋯ → Add to Playlist | Song menu → Add to playlist |
| Save the queue | Up Next → ⋯ → **Save Queue as Playlist…** | — |
| Import | Your Playlists → **Import…**: "Artist - Title" lines or an .m3u file; songs found in your library are added | Sources → Import a playlist |
| Smart playlist | Your Playlists → **New Smart Playlist** | Sources → Smart playlists |
| Wishlist | Your Playlists → **Wishlist** | Sources → Wishlist |
| Tags and notes | Song ⋯ → **Add Tags…**, **Add a Note…** | Song menu → **Your tags**, **Your note** |
| Follow | Follow on a composer or singer page | Sources → Following |
| Hide a song | Song ⋯ → **Hide This Song** | Song menu → Hide |
| Export | The download button on a playlist: text or CSV | Sources → Export a playlist |

**Smart playlists** are rules (composer, singer, film, decade, quality, plays, added in the last N days, liked, your tag), matching all or any, refilled each time you open them. The **Wishlist** tells you when a wished-for song arrives in your library.

## Offline listening

| Way | Phone | Web |
| --- | --- | --- |
| By hand | **Download** on a song, or **Download all** on a film, playlist or Liked songs | **Keep Offline** on a song or list; the **Kept Offline** page lists them |
| Smart offline | Sources → Smart offline → **Keep your songs offline** | Settings → Smart Offline → **Keep your songs offline** |

Smart offline keeps your most played songs and the newest additions, in the space you choose (1–50 GB), and only removes songs it stored itself. Songs you play are also kept for a while (the replay cache), so playing one again needs no network.

## Devices

Every device signed in to the same Telegram account shares one library state through **Isai Sync**: likes, playlists, hidden songs, tags, notes, follows, the wishlist, your servers (without their passwords) and each device's play history. **Sync between devices** (phone: Sources → Your devices; web: Settings → Sync) says whether sharing is up to date. When two devices change the same thing, the later change wins.

- **Continue here:** while one device plays, the other shows **Playing on *device* — Continue here**. Tap it to carry on from the same moment.
- **Remote control:** on the web, the player bar's **Play on** → your phone; on the phone, the output sheet → your computer.
- **Phone outputs:** Bluetooth, USB DACs, Chromecast (library songs over Wi-Fi) and Android Auto (an Isai folder with Liked songs, playlists and Home shelves).

## Your listening

- **Your listening** (phone: Sources → Your listening; web: sidebar → Your Listening): hours, plays, top songs, composers, singers and films, for all time or a year.
- **Recaps:** your week (Sundays), month (the 1st) and year (January), as a notification on the phone and a card on the web's Home.
- **Guess the song:** ten seconds of a song from your library; pick the film or composer from four choices.

## Privacy

Isai runs no server and collects nothing. Your Telegram login stays on each device (encrypted), your server passwords stay on the device they were typed on, and your library state lives in your own Telegram account. The full policy is under **Settings → Help → Privacy**.

## Troubleshooting

| What you see | Why | What to do |
| --- | --- | --- |
| Home says your library is empty | No group, server or folder added yet, or the first read is still running | Link a group or add a server (the card's buttons go there) |
| A group shows an error after **Refresh library** | You left it, it was deleted, or it restricts saving | The other groups still refresh; remove it from Library groups |
| A server can't be added on the web | It isn't https, or it doesn't allow other sites (CORS) | Use its https address and allow this site, or add it on the phone |
| A folder's songs don't play after restarting the browser | The browser needs your OK again | Settings → Your Music Servers → **Allow Again** (Chrome, Edge), or pick the folder again |
| "Telegram signed Isai out" | The login was ended (Telegram → Settings → Devices) | Sign in again; nothing in your library is lost |
| "Telegram asked us to slow down" | Too many requests at once | Wait the time it shows; Isai retries on its own |
`,u=`# What's New

Newest first. "Phone" and "Web" say where a change landed; most land on both. The full how-to for every feature is in the User guide.

## October 2026

### Build 54 · 22 Oct

- **New** · Windows and NAS shares (SMB) as a library source: Sources → Your music servers → Add a server → **Windows or NAS share (SMB)** (phone).
- **New** · **Add this phone's music** puts the songs saved on your phone in your library, with their tags (phone).
- **New** · WebDAV servers on the web too: Settings → Your Music Servers → Add a server → **WebDAV** (web).
- **New** · An empty library's Home says what to do next: sign in to Telegram or link a group, or add a server or a folder. It goes once a song is in your library.
- **New** · Sign in on the web with a QR code: scan it with Telegram on your phone (Settings → Devices → Link Desktop Device). **Use Phone Number Instead** still works (web).
- **New** · Your music servers are shared between your devices: a server added on one shows on the others with **Sign In**, its address and user name filled in. Passwords and sign-in tokens never leave the device they were typed on.
- **New** · Tamil: with your phone's language set to Tamil, the player, menus, settings and notifications that come from BitChord show in Tamil. Isai's own screens (Sources and the library pages) are still English (phone).
- **New** · **Add a Folder on This Computer**: a music folder's songs join your library, with their tags (web).
- **Fixed** · WebDAV songs named "Artist - Title" no longer show "Unknown Artist" when the name has no artist.
- **Fixed** · Artist pages say "From your library" instead of naming Telegram, since songs can come from your servers (web).
- **Fixed** · A song playing from the Songs copy saved on your phone now says so. The quality line and the song's log say **from Telegram · Songs (saved on this phone)** and give the file's real bitrate. Before, they showed the bitrate of a YouTube lookup that ran alongside and wasn't used, such as "159 kbps" on a 24-bit FLAC (phone).
- **Improved** · Isai's notifications, logs, file tags and messages no longer say BitChord. The credit to BitChord, which Isai is based on, stays at the foot of Settings (phone).

### Build 53 · 22 Oct

- **New** · **Tamil film music** switch (phone: Sources → Home page; web: Settings → Home). It controls the film details from Wikipedia and Wikidata, and a film's other songs from iTunes. It stays on for you.
- **New** · If Isai closes unexpectedly, the report is kept on the phone, and **Settings → Help → Send the last crash report** lets you share it wherever you choose. Nothing is sent by itself (phone).
- **New** · Isai can show a short notice, about an outage or an update, at the top of Sources (phone) or Settings (web). Isai's settings file is signed, so only Isai can send one.

### Build 52 · 22 Oct

- **Fixed** · A change you make after seeing another device's now wins, even when this device's clock is behind. Before, a device whose clock ran fast won every later conflict over likes, playlists, tags and notes.
- **Fixed** · Two devices that changed the same like at the very same moment now settle on the same answer. Before, each could keep its own for good.
- **Fixed** · Every device's likes, playlists and history are read, however many devices there are. Only the newest 20 were read before.
- **New** · **Sync between devices** shows whether sharing is up to date, or what went wrong (phone: Sources → Your devices; web: Settings → Sync).

### Build 51 · 22 Oct

- **New** · **Your music servers.** Add your own Subsonic or Navidrome, Jellyfin or Emby, or WebDAV server (WebDAV on the phone only). Its songs join your library: Home, search, radio, likes and playlists include them, and they play from the server in their original quality. Sources → Your music servers on the phone; Settings → Your Music Servers on the web.
- **Improved** · Pulling down on Library also refreshes your servers (phone).
- **Improved** · Songs kept in the browser never take more room than the browser allows. On Safari or in a private window that can be far less than the limit you chose (web).

### Build 50 · 22 Oct

- **New** · **Settings → Help → Open-source licences** lists the free software Isai is built on and each project's licence.
- **Improved** · **Your Telegram login is kept out of phone backups**, along with its keys and tglossless's login. A restored phone signs in again instead of carrying a copy of the login (phone).
- **Improved** · **A new Telegram sign-in is encrypted on the phone.** Its database is encrypted with a key kept in Android's Keystore. The login you're signed in with now stays as it is, and the next sign-in gets the encryption (phone).
- **Improved** · **The browser's Telegram login is sealed.** It is encrypted with a key that this browser made and can't export, so a copy of the browser's storage holds only ciphertext. The page also refuses scripts from anywhere but Isai itself (web).

### Build 49 · 22 Oct

- **Fixed** · A linked group you've left, or one that was deleted, no longer stops the whole library from refreshing. That group is skipped and named under **Refresh library**, and the other groups still pick up their new songs.
- **Improved** · **Isai Sync is checked before it's trusted.** Isai uses a group called "Isai Sync" only if you created it, it has no public link, and you're its only member, and it checks this again every half hour. Before, the phone took any group with that name. A group someone else added you to could then have sent your player remote commands.
- **Improved** · **Check for updates** offers only builds that you posted to Isai Builds yourself (phone).

### Build 48 · 21 Oct

- **Fixed** · An addon that was briefly down no longer counts as "no better copy". The search for a better copy of the song is tried again a minute later, up to three times. It used to give up on that song until the app restarted (phone).
- **Improved** · Skipping no longer leaves addon searches running. Searches for songs you've moved past stop; the current and next song keep theirs. Before, each skip left up to 20 seconds of requests to every addon (phone).
- **Improved** · With lossless on, a quicker lower-quality answer waits up to 2 seconds for a lossless one before the song starts. That means fewer songs start lossy and switch to FLAC mid-song (phone).
- **Improved** · Sources no longer checks addons and servers that are switched off; their row shows what they are instead of "Checking…" (phone).

### Build 47 · 21 Oct

- **Improved** · **Smoother everywhere** (phone). Buffering, queue changes and play/pause no longer redraw the whole app, only the parts that show them: the player, the mini player and the queue.
- **Improved** · **Liking a song is instant on Home** (phone). Liking, tagging or editing a playlist rebuilds only Liked, Playlists, Tags and Following. The library-wide shelves (Daily, Unplayed, Hi-Res, decades, mixes and the rest) are kept until the library, your plays, hidden songs or the day change.
- **Improved** · **Songs start sooner when a lossless copy is looked for** (phone). With lossless on, a song from JioSaavn or YouTube asks every lossless source at once and waits at most 4 seconds. It used to ask them one after another with no limit. A song no lossless source has isn't asked about again until the app restarts.

### Build 46 · 21 Oct

- **Fixed** · The last 8 library songs that YouTube couldn't find now play from Songs. Their titles were broken in the catalogue, and those titles are now taken from the file instead: "\\\\" is now "Kaadhalai Solla Mudiyatha", and "KONDU,12.new" is now "Seerkondu Vaa". 224 titles are tidied the same way:
  - hashtag lists keep only the song name
  - "-HD-Remastered-FT" and "24 Bit" endings are removed
  - songs from an album of instrumentals say "(Instrumental)"

  A title that starts with "With" ("With Love") is no longer read as a featuring credit. Every one of the 25,976 songs now finds itself.
- **Improved** · **Skipping is faster** (phone):
  - A song you skip stops downloading instead of finishing in full alongside the new one.
  - The next library song's first seconds are fetched while the current one plays.
  - The read-ahead of the next YouTube song works again; it had stopped after 64 KB.
- **Improved** · **Fewer gaps and stalls** (phone). The player keeps about 3½ minutes of FLAC ahead instead of about one, so short network drops no longer stop the music.
- **Fixed** · A library song no longer sits "loading" for ever when Telegram can't be reached. After a few seconds it plays from the next source (JioSaavn, YouTube Music). It keeps trying Telegram only when part of it is on the phone already (phone).
- **Fixed** · A song that stalled because another download of the same file moved Telegram's download position now picks up again (phone).
- **Improved** · **Less lag** (phone):
  - Isai pages with thousands of songs (All songs, composers, Hi-Res) sort, filter and group in the background.
  - The same goes for Sources: Wishlist, Smart playlists, Export, Smart offline and Your listening.
  - Home reads your listening history once instead of re-reading every month's file each time.
  - Adding to or reordering a long queue no longer reconverts the whole queue.
  - Play logs save in the background.
  - App start reads them alongside everything else.
  - Songs with no cover aren't asked of Telegram again for a week.
- **Fixed** · The Sunday digest could say "No new songs this week" because it counted before the library had loaded (phone).

### Build 45 · 21 Oct

- **Fixed** · More songs in your library play from Telegram instead of YouTube. Every song in the catalogue was checked against itself the way YouTube describes it; this fixes every kind of miss that turned up:
  - a film whose name looks like a version word: \`(From "VIP")\`, \`(From "KGF Chapter 2")\`, \`(From "PT Sir")\`
  - titles in Tamil script, whose vowel signs were dropped
  - library songs named after their file or a download site ("03_Kuchi_Kuchi.wav", "Aandipatti - Tamilanda.com")
  - short titles like "Oh Oh" crowded out by soundtrack titles that name the singer

  Out of 25,976 songs, 8 still don't find themselves, all because their titles in the library are broken.
- **Improved** · Library songs named after their file or a site now show a clean title ("Kuchi Kuchi") on the phone.
- **Improved** · When YouTube plays a song that Songs has under the same title, the song's log says which copy, so ⋯ → **Copy log** shows why (phone).

### Build 44 · 20 Oct

- **Fixed** · A song whose title has a slash or hyphen inside a word ("Aura 10/10", "Jil-Jung-Juk") now plays from your library instead of YouTube. The YouTube song was looked for as "aura 1010", and the library only knew "aura 10 10".

### Build 43 · 20 Oct

- **Improved** · **Songs start sooner** (phone). A FLAC's embedded cover (hundreds of KB to a few MB) is no longer downloaded before the music; the player never used it. Isai also reads less of the file up front, notices sooner when Telegram has sent the first bytes, and asks Telegram for what's on the phone half as often while a song plays.

### Build 42 · 20 Oct

- **Improved** · **Faster everywhere** (phone). Opening the app no longer waits for the whole library to load. Home's Isai shelves, Isai pages (mixes, composers, films) and the song menu's library rows are worked out in the background instead of on screen. Home rebuilds at most once a minute instead of on every visit. The library is re-indexed only when songs actually changed. Liked, hidden and tagged songs save without holding up the tap. Typing in search and playing or pausing no longer recount every smart playlist.

### Build 41 · 20 Oct

- **Improved** · **One Telegram login**: tglossless (Add new songs) is now signed in by the player's own Telegram login, the way a phone approves a desktop app's QR code. No second phone number or code; the nightly run signs it back in the same way if Telegram ends that login (phone).
- **New** · Three home-screen widgets: **Isai mixes 4×2** (Today's mix, Liked songs and your singers' mixes, with covers; tap one to play it), **Quick play 4×1** (Today, Liked, New, Shuffle) and **Your week 2×2** (time listened, plays, your top singer and the song on repeat) (phone).
- **Fixed** · Library covers now show on Home, in lists, in the player and on the widgets. Before, they showed only in the notification. Mixes, Films, Composers, Lyricists, Moods, Decades and On this day tiles show a song's cover instead of a blank tile (phone).
- **Fixed** · Pausing with a Bluetooth headset, headphones or a car connected no longer lets Android stop the player after about 10 minutes, so the headset's play button resumes. If Android did stop it, play now picks up the last queue where it was (phone).

### Build 40 · 20 Oct

- **Improved** · **Videos play as your song** now covers lyric videos and video songs put up by TV and label channels, whose artist is only the channel ("#RAAYAN - Adangaatha Asuran Lyric Video | … " by Sun TV): the song and the people are read from the title, and the length has to agree.

### Build 39 · 20 Oct

- **Fixed** · Artist signatures settings and the "Signed by" caption are now in Chinese (Simplified and Traditional) instead of English (phone).

### Build 38 · 20 Oct

- **Fixed** · Refreshing the library no longer stops halfway, with "Telegram library refresh failed", when you leave the screen you started it from (phone).

### Build 37 · 20 Oct

- **New** · **Videos and edits play as your song**: a YouTube music video ("Kalasala Kalasala") or a slowed, reverb, sped-up, nightcore, lo-fi or 8D edit ("Enna Solla Pogirai (Slowed and Reverbed)") now plays as the song in your library when it has it. Phone: automatic, with ⋯ → **Play original** and Settings → Playback → **Play the original from your library**. Web: edits, under Settings → Sources → **The original of an edit**.

### Build 36 · 19 Oct

- **New** · **Ragas**: the Carnatic raga a film song is set in, from Wikipedia's lists of Tamil film songs by raga (about 3,000 songs, bundled). A Ragas tab (web) or Sources → Ragas (phone), **In** *raga* in the song menu, and a raga rule for smart playlists.
- **New** · **Search by lyrics**: type a line you remember and find the song, from the lyrics Isai has shown on that device; offline, and it grows as you play.
- **New** · **Import your old listening** (web): load a Spotify or YouTube Music history export in Settings; the plays that match your songs count toward stats, top songs, A year ago and milestones on every device.
- **New** · **By pace**: Work out, Dance and Calm mixes and a tempo rule for smart playlists, and radio after a library song keeps a similar pace. Needs the tempos measured on the Mac first (\`tgl metadata tempo\`).
- **New** · **Export a playlist**: as an M3U for the backup drive (web), as text, or as CSV.
- **New** · **Command palette** (web): ⌘K or Ctrl+K to play, go to a page or change a setting from the keyboard.
- **New** · **Through the years** on composer and singer pages: their songs year by year, with their first, busiest and latest.
- **New** · **Milestones**: a card (web) or shelf and notification (phone) when you pass a round number, like your 1,000th Ilaiyaraaja play or 100 hours of SPB.

### Build 35 · 19 Oct

- **New** · **Guess the song**: ten seconds of a song from your library, four films or composers to choose from, ten songs a round, best score kept. Web sidebar → Guess the Song; phone Sources → Guess the song.
- **New** · **On this day** shelf on Home: your composers' and singers' birthdays and your films' anniversaries, with their songs.
- **New** · **Films you don't have yet** on a composer's page: their Tamil films with none of their songs in your library, each a tap from the wishlist.
- **New** · **BGMs and instrumentals**: themes, scores, karaoke and short bits have their own tab (web) or page (phone), and stay out of radio, Never played and Today's picks unless you switch them back in.
- **New** · **Your note** on a song, synced to every device and shown in Now Playing.
- **New** · **Duets**: the singer pairs you have most, as a Home shelf and a Songs tab (web), and "Sings most with" on a singer's page.
- **New** · **Other versions**: a song's sad, male, female, reprise or remix versions in the song menu; smart shuffle doesn't play two of them in a row.
- **New** · **Make a ringtone** from a library song (phone): pick 30 seconds on its waveform and save it as a ringtone, notification or alarm sound.
- **Improved** · Web: the extension is called **Isai** everywhere: its download (isai-extension-chrome.zip), its folder, its toolbar window and the Discord status. Extension 0.7.0.
- **Improved** · Film pages show the full release day more often: it now comes from the Wikipedia article when Wikidata has only the year.

### Build 34 · 19 Oct

- **New** · **User guide** in Settings → Help, on the phone and the web: every screen, setting and feature, built into the app so it reads offline and matches your version.
- **New** · **What's New** (this page) in Settings → Help: what each build added, newest first.

### Build 33 · 19 Oct

- **New** · **Your year in Isai**: from 1 January, a recap of the year before: hours, plays, top songs, composers and films, new favourites and your biggest month.
- **New** · **A year ago** shelf on Home: what you played most this month in earlier years. It fills from October 2027.
- **New** · **For this hour** shelf ("Your mornings", "Your evenings"…): songs you mostly play at this time of day.
- **New** · **Follow a composer or singer**. "New from people you follow" on Home, and a phone notification for each new song.
- **New** · **Your own tags** on library songs, synced to every device, with a page per tag and a "Your tag" rule in smart playlists.
- **New** · **Complete the film**: a film page lists the soundtrack songs your library lacks, with Add to Wishlist.
- **New** · **Pop Out Player** (web, Chrome/Edge): a small always-on-top player window.
- **New** · **Bedtime** (phone): plays calm songs at a set time, then fades out and stops.

### Build 32 · 19 Oct

- **New** · **Search in Tamil script**: "இளையராஜா" finds the English-letter titles, singers and films.
- **New** · **Lyricists**: Songs → Lyricists on the web, a Lyricists shelf on the phone.
- **New** · **Smart playlists**: playlists made of rules (composer, singer, decade, quality, plays, added, liked…) that fill themselves.
- **New** · **Skips** count: songs you keep skipping play less in radio, smart shuffle and Never played; Library health lists them.
- **New** · **Goes well with**: songs you often play one after another, in the song menu and at the start of radio.
- **New** · **Wake up to Isai** (phone): an alarm that plays your music with a fade-in.
- **New** · **Your listening** stats page: all time or a year, top songs, composers, singers, films and decades.
- **New** · **Film details**: director, cast and release date from Wikidata on film pages.

### Build 31 · 19 Oct

- **New** · **Wishlist**: add songs or films you want; you're told when one arrives in your library.
- **New** · **Never played** shelf: library songs no device has played, your favourite singers and composers first.
- **New** · **Years and decades**: a "Through the years" shelf, Songs → Years, and film years.
- **New** · **Your month in Isai**: a recap on the 1st of each month.
- **New** · **Smart shuffle**, per list: no two songs from one film, or three by one composer, in a row.
- **New** · **Smart offline on the laptop** (web): keeps your most played and newest songs in the browser.
- **New** · **Sound per output** (phone): equalizer, loudness and bit-perfect remembered for each speaker, headphone, car and DAC.
- **Improved** · Likes, playlists and plays follow a song the Mac put back into Songs.
- **Fixed** · The phone's library sort could crash on songs with and without a post date.

### Build 30 · 19 Oct

- **New** · **Your week in Isai**: a Sunday digest of songs added, songs gone missing, library health and backup progress.

### Builds 23–29 · 18 Oct

- **New** · **Composers** shelf and pages (once the Mac has read the composer tags).
- **New** · **Backup progress** from the Mac in Library health, and playing from your backup drive on the laptop (web).
- **New** · **Missing from Songs**: Library health lists songs that disappeared from Songs.
- **New** · **Smart offline** (phone): keeps your most played and newest songs downloaded, within the space you choose.
- **New** · **Health history**: Library health shows what got better or worse since the last check.
- **New** · **Add the lossless copies** for lossy songs, and **Find covers on iTunes** for songs with no artwork.
- **New** · **Your Telegram logins**, with a warning for a new login or a lost Isai login; **Hide the worse copies** of duplicates; **Review their language**.
- **New** · **Library health** on the phone and the web, and **Songs that need your OK** on the web.
- **New** · **Earlier versions** of the shared library, with Put back.
- **New** · **Recently added** shelf: songs posted in the last 14 days.
- **New** · **"Telegram signed Isai out"** warning on both apps, and a nightly-run health check that says why a run was missed.

### Builds 13–22 · 18 Oct

- **New** · **Test the connection** between your devices.
- **New** · **Songs that need your OK**: songs the nightly run holds because their language is only likely Tamil.
- **New** · **Nightly Add new songs on the phone**, while it charges on Wi-Fi.
- **New** · **Tap to play** notification when another device starts music on a phone in the background.
- **New** · **Remote control**: play on the phone from the web, or on the laptop from the phone.
- **Improved** · **Faster handoff**: Continue here answers in about a second and starts where the other device was.
- **Improved** · Builds are signed release builds that refuse to run if re-signed or debugged.
- **New** · The player's **source and quality line** on the phone ("Lossless · from Telegram · Songs").
- **New** · **Sound-alike Tamil titles**: "Alwaada" finds "Halwada".
- **New** · **Link a group** by its link, listen-only.
- **Fixed** · Add new songs no longer offers a song already in Songs.

### Builds 3–12 · 17 Oct

- **New** · **Check for updates** inside the app (Settings → Updates).
- **New** · **Isai Sync** group for everything that syncs between devices.
- **New** · **Bit-perfect to a USB DAC**, **Preload the next song** and **Karaoke** (phone).
- **New** · **Playlist import** from Spotify, Apple Music, JioSaavn or YouTube Music links.
- **New** · **Liked songs, playlists and hidden songs** of your own, synced to every device.
- **New** · **Keep offline** and Download all; **Tamil lyrics in English letters**; **radio from your library**.
- **New** · Playback speed, Resume when headphones connect, Android Auto folder, Chromecast and loudness levelling for library songs (phone).
- **New** · Full-screen Now Playing, sleep timer, equalizer, recent searches and an installable app (web).
- **New** · **Add new songs** on the phone, **artwork** for library songs, and **Moods & genres** mixes.
- **New** · **Shared listening history** shelves and **Continue here** between devices.
- **New** · **Several library groups**, merged into one library.
- **New** · **Missing songs** found in your groups and forwarded to Songs.

### Build 2 · 16 Oct

- **New** · Renamed to **Isai**, with Tamil Home shelves and a working library refresh.
`,d=`# Privacy

*Draft for the owner's approval (task 90). Last changed 22 Oct 2026. Describes the public edition of Isai.*

Isai is a music player for your own library. It has no servers of its own and no accounts of its own, so there is nothing of yours on any Isai server.

## What stays on your device

- **Your Telegram login.** Isai signs in to Telegram directly from your phone or browser, the way Telegram's own apps do. On the phone the login is in the app's private storage, encrypted with a key kept in Android's Keystore, and it is left out of phone backups. In the browser it is sealed with a key the browser made and can't export.
- **Server addresses and passwords** for any music servers you add. They are kept in encrypted storage on each device.
- **Songs you played.** These are kept in the audio cache so they play again without the internet, up to the size you set.

## What goes into your own Telegram account

To follow you between your devices, Isai keeps a few files in a private group called "Isai Sync". It creates the group, and you are its only member. The files hold:

- your likes, playlists, hidden songs, tags and follows
- your listening history
- each device's name and what it is playing (for "Continue here" and remote control)

The group is part of your Telegram account and can be read only by you. Deleting it deletes this data. Telegram's own privacy policy covers Telegram.

## Who Isai talks to

- **Telegram**, to read the groups and channels you link and to stream their files. Isai only reads them: it never posts, joins, forwards or invites.
- **Music servers and addons you add yourself.**
- **LRCLIB**, the open lyrics database, with the song's title, artist and length.
- **Only if you switch on Tamil film music:** Wikipedia and Wikidata for film details, and the iTunes Search API for a film's other songs, with the film's name.
- **Isai's own website** (isai-app.github.io), a few times a day, for a small signed settings file that can switch a broken feature off. It carries nothing about you.

Each of these requests also carries your IP address, as any web request does.

## What Isai does not do

- No analytics or tracking, and no advertising.
- No selling or sharing of your data with anyone.
- No crash reports are sent by themselves. If Isai crashes, a report (the build, your phone's model and the error) stays on your device, and **Settings → Help → Send the last crash report** shares it only if you choose where to send it.

## Children

Isai is not directed at children under 13.

## Contact

Questions: isai-app on GitHub (https://github.com/isai-app).
`,f=`# Terms of use

*Draft for the owner's approval (task 90). Last changed 22 Oct 2026.*

1. **Isai plays your own library.** You choose the Telegram groups and channels, servers and files it reads. You are responsible for having the right to listen to what is in them. Isai does not supply, host, search for or share music.
2. **Telegram's rules apply.** Isai signs in to your Telegram account. Your use of Telegram through Isai is covered by Telegram's Terms of Service. Isai only reads your library chats and keeps its own sync group, and it never posts on your behalf anywhere else.
3. **No warranty.** Isai is free software under the GNU General Public License, version 3. It comes with no warranty, to the extent the law allows. Its source code is available, as that licence requires.
4. **Changes.** These terms may change with a new version of the app. The version in the app is the one that applies.
`,p=`# Open-source licences

Isai is free software under the GNU General Public License, version 3, and is built on the work below. Each is used under its own licence. This list is generated by tools/licences.py from the public edition; the personal edition also carries Chaquopy and its Python packages (Telethon, mutagen, platformdirs, pyaes).

## Bundled

| Component | Licence |
| --- | --- |
| TDLib (via tdlibx/td) (https://github.com/tdlib/td) | Boost Software License 1.0 |
| FFmpeg audio decoders (librempeg build, Media3 FFmpeg extension) (https://github.com/librempeg/librempeg) | GPL-3.0-or-later |
| DST decoder (DSD audio) | See app/src/main/cpp/dsd/dst/NOTICE.md |
| Beat This! beat-tracking model (https://github.com/CPJKU/beat_this) | MIT |
| Open-Unmix vocals model (umxhq) (https://github.com/sigsep/open-unmix-pytorch) | MIT |
| BitChord, which Isai is based on (https://github.com/kushagrasinghx/BitChord) | GPL-3.0 |

## Phone app libraries

| Library | Version | Licence |
| --- | --- | --- |
| androidx.activity:activity | 1.9.3 | The Apache Software License, Version 2.0 |
| androidx.activity:activity-compose | 1.9.3 | The Apache Software License, Version 2.0 |
| androidx.activity:activity-ktx | 1.9.3 | The Apache Software License, Version 2.0 |
| androidx.annotation:annotation | 1.9.1 | The Apache Software License, Version 2.0 |
| androidx.annotation:annotation-experimental | 1.4.1 | The Apache Software License, Version 2.0 |
| androidx.annotation:annotation-jvm | 1.9.1 | The Apache Software License, Version 2.0 |
| androidx.appcompat:appcompat | 1.7.0 | The Apache Software License, Version 2.0 |
| androidx.appcompat:appcompat-resources | 1.7.0 | The Apache Software License, Version 2.0 |
| androidx.arch.core:core-common | 2.2.0 | The Apache Software License, Version 2.0 |
| androidx.arch.core:core-runtime | 2.2.0 | The Apache Software License, Version 2.0 |
| androidx.autofill:autofill | 1.0.0 | The Apache Software License, Version 2.0 |
| androidx.collection:collection | 1.5.0 | The Apache Software License, Version 2.0 |
| androidx.collection:collection-jvm | 1.5.0 | The Apache Software License, Version 2.0 |
| androidx.collection:collection-ktx | 1.5.0 | The Apache Software License, Version 2.0 |
| androidx.compose:compose-bom | 2024.12.01 | The Apache Software License, Version 2.0 |
| androidx.compose.animation:animation | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.animation:animation-android | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.animation:animation-core | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.animation:animation-core-android | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.foundation:foundation | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.foundation:foundation-android | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.foundation:foundation-layout | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.foundation:foundation-layout-android | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.material:material-icons-core | 1.7.6 | The Apache Software License, Version 2.0 |
| androidx.compose.material:material-icons-core-android | 1.7.6 | The Apache Software License, Version 2.0 |
| androidx.compose.material:material-icons-extended | 1.7.6 | The Apache Software License, Version 2.0 |
| androidx.compose.material:material-icons-extended-android | 1.7.6 | The Apache Software License, Version 2.0 |
| androidx.compose.material:material-ripple | 1.7.6 | The Apache Software License, Version 2.0 |
| androidx.compose.material:material-ripple-android | 1.7.6 | The Apache Software License, Version 2.0 |
| androidx.compose.material3:material3 | 1.3.1 | The Apache Software License, Version 2.0 |
| androidx.compose.material3:material3-android | 1.3.1 | The Apache Software License, Version 2.0 |
| androidx.compose.runtime:runtime | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.runtime:runtime-android | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.runtime:runtime-annotation | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.runtime:runtime-annotation-android | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.runtime:runtime-retain | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.runtime:runtime-retain-android | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.runtime:runtime-saveable | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.runtime:runtime-saveable-android | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.ui:ui | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.ui:ui-android | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.ui:ui-geometry | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.ui:ui-geometry-android | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.ui:ui-graphics | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.ui:ui-graphics-android | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.ui:ui-text | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.ui:ui-text-android | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.ui:ui-tooling-preview | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.ui:ui-tooling-preview-android | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.ui:ui-unit | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.ui:ui-unit-android | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.ui:ui-util | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.compose.ui:ui-util-android | 1.10.5 | The Apache Software License, Version 2.0 |
| androidx.concurrent:concurrent-futures | 1.2.0 | The Apache Software License, Version 2.0 |
| androidx.concurrent:concurrent-futures-ktx | 1.2.0 | The Apache Software License, Version 2.0 |
| androidx.core:core | 1.16.0 | The Apache Software License, Version 2.0 |
| androidx.core:core-ktx | 1.16.0 | The Apache Software License, Version 2.0 |
| androidx.core:core-viewtree | 1.0.0 | The Apache Software License, Version 2.0 |
| androidx.cursoradapter:cursoradapter | 1.0.0 | The Apache Software License, Version 2.0 |
| androidx.customview:customview | 1.0.0 | The Apache Software License, Version 2.0 |
| androidx.customview:customview-poolingcontainer | 1.0.0 | The Apache Software License, Version 2.0 |
| androidx.documentfile:documentfile | 1.0.0 | The Apache Software License, Version 2.0 |
| androidx.drawerlayout:drawerlayout | 1.0.0 | The Apache Software License, Version 2.0 |
| androidx.dynamicanimation:dynamicanimation | 1.0.0 | The Apache Software License, Version 2.0 |
| androidx.emoji2:emoji2 | 1.4.0 | The Apache Software License, Version 2.0 |
| androidx.emoji2:emoji2-views-helper | 1.4.0 | The Apache Software License, Version 2.0 |
| androidx.exifinterface:exifinterface | 1.3.7 | The Apache Software License, Version 2.0 |
| androidx.fragment:fragment | 1.5.4 | The Apache Software License, Version 2.0 |
| androidx.graphics:graphics-path | 1.0.1 | The Apache Software License, Version 2.0 |
| androidx.interpolator:interpolator | 1.0.0 | The Apache Software License, Version 2.0 |
| androidx.legacy:legacy-support-core-utils | 1.0.0 | The Apache Software License, Version 2.0 |
| androidx.lifecycle:lifecycle-common | 2.9.4 | The Apache Software License, Version 2.0 |
| androidx.lifecycle:lifecycle-common-java8 | 2.9.4 | The Apache Software License, Version 2.0 |
| androidx.lifecycle:lifecycle-common-jvm | 2.9.4 | The Apache Software License, Version 2.0 |
| androidx.lifecycle:lifecycle-livedata | 2.9.4 | The Apache Software License, Version 2.0 |
| androidx.lifecycle:lifecycle-livedata-core | 2.9.4 | The Apache Software License, Version 2.0 |
| androidx.lifecycle:lifecycle-livedata-core-ktx | 2.9.4 | The Apache Software License, Version 2.0 |
| androidx.lifecycle:lifecycle-process | 2.9.4 | The Apache Software License, Version 2.0 |
| androidx.lifecycle:lifecycle-runtime | 2.9.4 | The Apache Software License, Version 2.0 |
| androidx.lifecycle:lifecycle-runtime-android | 2.9.4 | The Apache Software License, Version 2.0 |
| androidx.lifecycle:lifecycle-runtime-compose | 2.9.4 | The Apache Software License, Version 2.0 |
| androidx.lifecycle:lifecycle-runtime-compose-android | 2.9.4 | The Apache Software License, Version 2.0 |
| androidx.lifecycle:lifecycle-runtime-ktx | 2.9.4 | The Apache Software License, Version 2.0 |
| androidx.lifecycle:lifecycle-runtime-ktx-android | 2.9.4 | The Apache Software License, Version 2.0 |
| androidx.lifecycle:lifecycle-service | 2.9.4 | The Apache Software License, Version 2.0 |
| androidx.lifecycle:lifecycle-viewmodel | 2.9.4 | The Apache Software License, Version 2.0 |
| androidx.lifecycle:lifecycle-viewmodel-android | 2.9.4 | The Apache Software License, Version 2.0 |
| androidx.lifecycle:lifecycle-viewmodel-compose | 2.9.4 | The Apache Software License, Version 2.0 |
| androidx.lifecycle:lifecycle-viewmodel-compose-android | 2.9.4 | The Apache Software License, Version 2.0 |
| androidx.lifecycle:lifecycle-viewmodel-ktx | 2.9.4 | The Apache Software License, Version 2.0 |
| androidx.lifecycle:lifecycle-viewmodel-savedstate | 2.9.4 | The Apache Software License, Version 2.0 |
| androidx.lifecycle:lifecycle-viewmodel-savedstate-android | 2.9.4 | The Apache Software License, Version 2.0 |
| androidx.loader:loader | 1.0.0 | The Apache Software License, Version 2.0 |
| androidx.localbroadcastmanager:localbroadcastmanager | 1.0.0 | The Apache Software License, Version 2.0 |
| androidx.media:media | 1.7.0 | The Apache Software License, Version 2.0 |
| androidx.media3:media3-common | 1.11.0 | The Apache Software License, Version 2.0 |
| androidx.media3:media3-container | 1.11.0 | The Apache Software License, Version 2.0 |
| androidx.media3:media3-database | 1.11.0 | The Apache Software License, Version 2.0 |
| androidx.media3:media3-datasource | 1.11.0 | The Apache Software License, Version 2.0 |
| androidx.media3:media3-datasource-okhttp | 1.11.0 | The Apache Software License, Version 2.0 |
| androidx.media3:media3-decoder | 1.11.0 | The Apache Software License, Version 2.0 |
| androidx.media3:media3-exoplayer | 1.11.0 | The Apache Software License, Version 2.0 |
| androidx.media3:media3-exoplayer-dash | 1.11.0 | The Apache Software License, Version 2.0 |
| androidx.media3:media3-exoplayer-hls | 1.11.0 | The Apache Software License, Version 2.0 |
| androidx.media3:media3-extractor | 1.11.0 | The Apache Software License, Version 2.0 |
| androidx.media3:media3-session | 1.11.0 | The Apache Software License, Version 2.0 |
| androidx.mediarouter:mediarouter | 1.8.1 | The Apache Software License, Version 2.0 |
| androidx.navigation:navigation-common | 2.8.5 | The Apache Software License, Version 2.0 |
| androidx.navigation:navigation-common-ktx | 2.8.5 | The Apache Software License, Version 2.0 |
| androidx.navigation:navigation-compose | 2.8.5 | The Apache Software License, Version 2.0 |
| androidx.navigation:navigation-runtime | 2.8.5 | The Apache Software License, Version 2.0 |
| androidx.navigation:navigation-runtime-ktx | 2.8.5 | The Apache Software License, Version 2.0 |
| androidx.palette:palette | 1.0.0 | The Apache Software License, Version 2.0 |
| androidx.palette:palette-ktx | 1.0.0 | The Apache Software License, Version 2.0 |
| androidx.print:print | 1.0.0 | The Apache Software License, Version 2.0 |
| androidx.profileinstaller:profileinstaller | 1.4.1 | The Apache Software License, Version 2.0 |
| androidx.recyclerview:recyclerview | 1.1.0 | The Apache Software License, Version 2.0 |
| androidx.resourceinspection:resourceinspection-annotation | 1.0.1 | The Apache Software License, Version 2.0 |
| androidx.savedstate:savedstate | 1.3.3 | The Apache Software License, Version 2.0 |
| androidx.savedstate:savedstate-android | 1.3.3 | The Apache Software License, Version 2.0 |
| androidx.savedstate:savedstate-compose | 1.3.3 | The Apache Software License, Version 2.0 |
| androidx.savedstate:savedstate-compose-android | 1.3.3 | The Apache Software License, Version 2.0 |
| androidx.savedstate:savedstate-ktx | 1.3.3 | The Apache Software License, Version 2.0 |
| androidx.security:security-crypto | 1.1.0-alpha06 | The Apache Software License, Version 2.0 |
| androidx.startup:startup-runtime | 1.2.0 | The Apache Software License, Version 2.0 |
| androidx.tracing:tracing | 1.2.0 | The Apache Software License, Version 2.0 |
| androidx.transition:transition | 1.6.0 | The Apache Software License, Version 2.0 |
| androidx.vectordrawable:vectordrawable | 1.1.0 | The Apache Software License, Version 2.0 |
| androidx.vectordrawable:vectordrawable-animated | 1.1.0 | The Apache Software License, Version 2.0 |
| androidx.versionedparcelable:versionedparcelable | 1.1.1 | The Apache Software License, Version 2.0 |
| androidx.viewpager:viewpager | 1.0.0 | The Apache Software License, Version 2.0 |
| androidx.wear:wear-remote-interactions | 1.1.0 | The Apache Software License, Version 2.0 |
| androidx.window:window | 1.5.0 | The Apache Software License, Version 2.0 |
| androidx.window:window-core | 1.5.0 | The Apache Software License, Version 2.0 |
| androidx.window:window-core-android | 1.5.0 | The Apache Software License, Version 2.0 |
| com.caverock:androidsvg-aar | 1.4 | The Apache Software License, Version 2.0 |
| com.github.MetrolistGroup.innertubex:innertubex | v0.7.0 | GNU General Public License, version 3 |
| com.github.MetrolistGroup.innertubex:innertubex-android | v0.7.0 | GNU General Public License, version 3 |
| com.github.MuntashirAkon:libadb-android | 3.1.1 | Other |
| com.github.MuntashirAkon.spake2-java:spake2-android | 2.2.1 | GNU Lesser General Public License v3.0 |
| com.github.TeamNewPipe:nanojson | e9d656ddb49a412a5a0a5d5ef20ca7ef09549996 | see the project |
| com.github.tdlibx:td | 1.8.56 | Apache License 2.0 |
| com.google.accompanist:accompanist-drawablepainter | 0.36.0 | The Apache Software License, Version 2.0 |
| com.google.android.datatransport:transport-api | 3.0.0 | The Apache Software License, Version 2.0 |
| com.google.android.datatransport:transport-backend-cct | 3.1.3 | The Apache Software License, Version 2.0 |
| com.google.android.datatransport:transport-runtime | 3.1.3 | The Apache Software License, Version 2.0 |
| com.google.android.gms:play-services-base | 18.7.2 | Android Software Development Kit License |
| com.google.android.gms:play-services-basement | 18.9.0 | Android Software Development Kit License |
| com.google.android.gms:play-services-cast | 22.2.0 | Android Software Development Kit License |
| com.google.android.gms:play-services-cast-framework | 22.2.0 | Android Software Development Kit License |
| com.google.android.gms:play-services-flags | 18.1.0 | Android Software Development Kit License |
| com.google.android.gms:play-services-tasks | 18.3.2 | Android Software Development Kit License |
| com.google.android.gms:play-services-wearable | 20.0.1 | Android Software Development Kit License |
| com.google.code.findbugs:jsr305 | 3.0.2 | The Apache Software License, Version 2.0 |
| com.google.code.gson:gson | 2.8.9 | Apache-2.0 |
| com.google.crypto.tink:tink-android | 1.8.0 | Apache License, Version 2.0 |
| com.google.errorprone:error_prone_annotations | 2.28.0 | Apache 2.0 |
| com.google.firebase:firebase-encoders | 17.0.0 | The Apache Software License, Version 2.0 |
| com.google.firebase:firebase-encoders-json | 18.0.0 | The Apache Software License, Version 2.0 |
| com.google.firebase:firebase-encoders-proto | 16.0.0 | The Apache Software License, Version 2.0 |
| com.google.guava:failureaccess | 1.0.2 | The Apache Software License, Version 2.0 |
| com.google.guava:guava | 33.3.1-android | Apache License, Version 2.0 |
| com.google.guava:listenablefuture | 9999.0-empty-to-avoid-conflict-with-guava | The Apache Software License, Version 2.0 |
| com.google.j2objc:j2objc-annotations | 3.0.0 | Apache License, Version 2.0 |
| com.google.protobuf:protobuf-javalite | 4.35.0 | BSD-3-Clause |
| com.google.zxing:core | 3.5.3 | The Apache Software License, Version 2.0 |
| com.halilibo.compose-richtext:richtext-commonmark | 0.20.0 | The Apache Software License, Version 2.0 |
| com.halilibo.compose-richtext:richtext-commonmark-android | 0.20.0 | The Apache Software License, Version 2.0 |
| com.halilibo.compose-richtext:richtext-ui | 0.20.0 | The Apache Software License, Version 2.0 |
| com.halilibo.compose-richtext:richtext-ui-android | 0.20.0 | The Apache Software License, Version 2.0 |
| com.halilibo.compose-richtext:richtext-ui-material3 | 0.20.0 | The Apache Software License, Version 2.0 |
| com.halilibo.compose-richtext:richtext-ui-material3-android | 0.20.0 | The Apache Software License, Version 2.0 |
| com.hierynomus:asn-one | 0.6.0 | The Apache License, Version 2.0 |
| com.hierynomus:smbj | 0.15.0 | The Apache License, Version 2.0 |
| com.microsoft.onnxruntime:onnxruntime-android | 1.28.0 | MIT License |
| com.squareup.okhttp3:okhttp | 5.3.2 | The Apache Software License, Version 2.0 |
| com.squareup.okhttp3:okhttp-android | 5.3.2 | The Apache Software License, Version 2.0 |
| com.squareup.okio:okio | 3.17.0 | The Apache Software License, Version 2.0 |
| com.squareup.okio:okio-jvm | 3.17.0 | The Apache Software License, Version 2.0 |
| dev.chrisbanes.haze:haze | 1.3.1 | The Apache Software License, Version 2.0 |
| dev.chrisbanes.haze:haze-android | 1.3.1 | The Apache Software License, Version 2.0 |
| dev.chrisbanes.haze:haze-materials | 1.3.1 | The Apache Software License, Version 2.0 |
| dev.chrisbanes.haze:haze-materials-android | 1.3.1 | The Apache Software License, Version 2.0 |
| io.coil-kt:coil | 2.4.0 | The Apache License, Version 2.0 |
| io.coil-kt:coil-base | 2.4.0 | The Apache License, Version 2.0 |
| io.coil-kt:coil-compose | 2.4.0 | The Apache License, Version 2.0 |
| io.coil-kt:coil-compose-base | 2.4.0 | The Apache License, Version 2.0 |
| io.coil-kt.coil3:coil | 3.0.4 | The Apache License, Version 2.0 |
| io.coil-kt.coil3:coil-android | 3.0.4 | The Apache License, Version 2.0 |
| io.coil-kt.coil3:coil-compose | 3.0.4 | The Apache License, Version 2.0 |
| io.coil-kt.coil3:coil-compose-android | 3.0.4 | The Apache License, Version 2.0 |
| io.coil-kt.coil3:coil-compose-core | 3.0.4 | The Apache License, Version 2.0 |
| io.coil-kt.coil3:coil-compose-core-android | 3.0.4 | The Apache License, Version 2.0 |
| io.coil-kt.coil3:coil-core | 3.0.4 | The Apache License, Version 2.0 |
| io.coil-kt.coil3:coil-core-android | 3.0.4 | The Apache License, Version 2.0 |
| io.coil-kt.coil3:coil-network-core | 3.0.4 | The Apache License, Version 2.0 |
| io.coil-kt.coil3:coil-network-core-android | 3.0.4 | The Apache License, Version 2.0 |
| io.coil-kt.coil3:coil-network-okhttp | 3.0.4 | The Apache License, Version 2.0 |
| io.coil-kt.coil3:coil-network-okhttp-jvm | 3.0.4 | The Apache License, Version 2.0 |
| io.coil-kt.coil3:coil-svg | 3.0.4 | The Apache License, Version 2.0 |
| io.coil-kt.coil3:coil-svg-android | 3.0.4 | The Apache License, Version 2.0 |
| io.github.dokar3:quickjs-kt | 1.0.14 | The Apache Software License, Version 2.0 |
| io.github.dokar3:quickjs-kt-android | 1.0.14 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-client-content-negotiation | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-client-content-negotiation-jvm | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-client-core | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-client-core-jvm | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-client-okhttp | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-client-okhttp-jvm | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-client-websockets | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-client-websockets-jvm | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-events | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-events-jvm | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-http | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-http-cio | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-http-cio-jvm | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-http-jvm | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-io | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-io-jvm | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-network | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-network-jvm | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-serialization | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-serialization-jvm | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-serialization-kotlinx | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-serialization-kotlinx-json | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-serialization-kotlinx-json-jvm | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-serialization-kotlinx-jvm | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-sse | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-sse-jvm | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-utils | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-utils-jvm | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-websocket-serialization | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-websocket-serialization-jvm | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-websockets | 3.5.2 | The Apache Software License, Version 2.0 |
| io.ktor:ktor-websockets-jvm | 3.5.2 | The Apache Software License, Version 2.0 |
| javax.inject:javax.inject | 1 | The Apache Software License, Version 2.0 |
| net.engio:mbassador | 1.3.2 | MIT license |
| org.bouncycastle:bcpkix-jdk18on | 1.85 | Bouncy Castle Licence |
| org.bouncycastle:bcprov-jdk18on | 1.85.2 | Bouncy Castle Licence |
| org.bouncycastle:bcutil-jdk18on | 1.85 | Bouncy Castle Licence |
| org.checkerframework:checker-qual | 3.43.0 | The MIT License |
| org.commonmark:commonmark | 0.21.0 | BSD 2-Clause License |
| org.commonmark:commonmark-ext-autolink | 0.21.0 | BSD 2-Clause License |
| org.commonmark:commonmark-ext-gfm-strikethrough | 0.21.0 | BSD 2-Clause License |
| org.commonmark:commonmark-ext-gfm-tables | 0.21.0 | BSD 2-Clause License |
| org.conscrypt:conscrypt-android | 2.5.3 | Apache 2 |
| org.jetbrains:annotations | 23.0.0 | The Apache Software License, Version 2.0 |
| org.jetbrains.androidx.lifecycle:lifecycle-common | 2.9.6 | The Apache Software License, Version 2.0 |
| org.jetbrains.androidx.lifecycle:lifecycle-runtime | 2.9.6 | The Apache Software License, Version 2.0 |
| org.jetbrains.androidx.lifecycle:lifecycle-runtime-compose | 2.9.6 | The Apache Software License, Version 2.0 |
| org.jetbrains.androidx.lifecycle:lifecycle-viewmodel | 2.9.6 | The Apache Software License, Version 2.0 |
| org.jetbrains.androidx.lifecycle:lifecycle-viewmodel-savedstate | 2.9.6 | The Apache Software License, Version 2.0 |
| org.jetbrains.androidx.savedstate:savedstate | 1.3.6 | The Apache Software License, Version 2.0 |
| org.jetbrains.androidx.savedstate:savedstate-compose | 1.3.6 | The Apache Software License, Version 2.0 |
| org.jetbrains.compose.animation:animation | 1.10.3 | The Apache Software License, Version 2.0 |
| org.jetbrains.compose.animation:animation-core | 1.10.3 | The Apache Software License, Version 2.0 |
| org.jetbrains.compose.annotation-internal:annotation | 1.10.3 | The Apache Software License, Version 2.0 |
| org.jetbrains.compose.collection-internal:collection | 1.10.3 | The Apache Software License, Version 2.0 |
| org.jetbrains.compose.components:components-resources | 1.10.3 | The Apache Software License, Version 2.0 |
| org.jetbrains.compose.components:components-resources-android | 1.10.3 | The Apache Software License, Version 2.0 |
| org.jetbrains.compose.foundation:foundation | 1.10.3 | The Apache Software License, Version 2.0 |
| org.jetbrains.compose.foundation:foundation-layout | 1.10.3 | The Apache Software License, Version 2.0 |
| org.jetbrains.compose.material:material-icons-core | 1.7.3 | The Apache Software License, Version 2.0 |
| org.jetbrains.compose.material:material-icons-extended | 1.7.3 | The Apache Software License, Version 2.0 |
| org.jetbrains.compose.material:material-ripple | 1.7.3 | The Apache Software License, Version 2.0 |
| org.jetbrains.compose.material3:material3 | 1.7.3 | The Apache Software License, Version 2.0 |
| org.jetbrains.compose.runtime:runtime | 1.10.3 | The Apache Software License, Version 2.0 |
| org.jetbrains.compose.runtime:runtime-saveable | 1.10.3 | The Apache Software License, Version 2.0 |
| org.jetbrains.compose.ui:ui | 1.10.3 | The Apache Software License, Version 2.0 |
| org.jetbrains.compose.ui:ui-geometry | 1.10.3 | The Apache Software License, Version 2.0 |
| org.jetbrains.compose.ui:ui-graphics | 1.10.3 | The Apache Software License, Version 2.0 |
| org.jetbrains.compose.ui:ui-text | 1.10.3 | The Apache Software License, Version 2.0 |
| org.jetbrains.compose.ui:ui-unit | 1.10.3 | The Apache Software License, Version 2.0 |
| org.jetbrains.compose.ui:ui-util | 1.10.3 | The Apache Software License, Version 2.0 |
| org.jetbrains.kotlin:kotlin-stdlib | 2.4.10 | Apache-2.0 |
| org.jetbrains.kotlin:kotlin-stdlib-jdk7 | 1.8.21 | The Apache License, Version 2.0 |
| org.jetbrains.kotlin:kotlin-stdlib-jdk8 | 1.8.21 | The Apache License, Version 2.0 |
| org.jetbrains.kotlinx:kotlinx-coroutines-android | 1.11.0 | Apache-2.0 |
| org.jetbrains.kotlinx:kotlinx-coroutines-bom | 1.11.0 | Apache-2.0 |
| org.jetbrains.kotlinx:kotlinx-coroutines-core | 1.11.0 | Apache-2.0 |
| org.jetbrains.kotlinx:kotlinx-coroutines-core-jvm | 1.11.0 | Apache-2.0 |
| org.jetbrains.kotlinx:kotlinx-coroutines-guava | 1.11.0 | Apache-2.0 |
| org.jetbrains.kotlinx:kotlinx-coroutines-slf4j | 1.11.0 | Apache-2.0 |
| org.jetbrains.kotlinx:kotlinx-io-bytestring | 0.9.1 | Apache-2.0 |
| org.jetbrains.kotlinx:kotlinx-io-bytestring-jvm | 0.9.1 | Apache-2.0 |
| org.jetbrains.kotlinx:kotlinx-io-core | 0.9.1 | Apache-2.0 |
| org.jetbrains.kotlinx:kotlinx-io-core-jvm | 0.9.1 | Apache-2.0 |
| org.jetbrains.kotlinx:kotlinx-serialization-bom | 1.11.0 | Apache-2.0 |
| org.jetbrains.kotlinx:kotlinx-serialization-core | 1.11.0 | Apache-2.0 |
| org.jetbrains.kotlinx:kotlinx-serialization-core-jvm | 1.11.0 | Apache-2.0 |
| org.jetbrains.kotlinx:kotlinx-serialization-json | 1.11.0 | Apache-2.0 |
| org.jetbrains.kotlinx:kotlinx-serialization-json-io | 1.11.0 | Apache-2.0 |
| org.jetbrains.kotlinx:kotlinx-serialization-json-io-jvm | 1.11.0 | Apache-2.0 |
| org.jetbrains.kotlinx:kotlinx-serialization-json-jvm | 1.11.0 | Apache-2.0 |
| org.jsoup:jsoup | 1.22.2 | The MIT License |
| org.jspecify:jspecify | 1.0.0 | The Apache License, Version 2.0 |
| org.mozilla:rhino | 1.8.1 | Mozilla Public License, Version 2.0 |
| org.mozilla:rhino-engine | 1.8.1 | Mozilla Public License, Version 2.0 |
| org.nibor.autolink:autolink | 0.10.0 | MIT License |
| org.slf4j:slf4j-api | 2.0.18 | MIT |

## Web app libraries

| Package | Version | Licence |
| --- | --- | --- |
| @babel/runtime | 7.29.10 | MIT |
| @bufbuild/protobuf | 2.16.0 | (Apache-2.0 AND BSD-3-Clause) |
| @cryptography/aes | 0.1.1 | GPL-3.0-or-later |
| @lit-labs/ssr-dom-shim | 1.6.0 | BSD-3-Clause |
| @lit/reactive-element | 2.1.2 | BSD-3-Clause |
| @remix-run/route-pattern | 0.22.1 | MIT |
| @tanstack/query-core | 5.104.3 | MIT |
| @tanstack/react-query | 5.104.3 | MIT |
| @tanstack/react-virtual | 3.14.19 | MIT |
| @tanstack/virtual-core | 3.19.4 | MIT |
| @types/trusted-types | 2.0.7 | MIT |
| @uimaxbai/am-lyrics | 1.8.2 | MPL-2.0 |
| async-mutex | 0.3.2 | MIT |
| base64-js | 1.5.1 | MIT |
| bgutils-js | 4.0.3 | MIT |
| big-integer | 1.6.52 | Unlicense |
| buffer | 6.0.3 | MIT |
| bufferutil | 4.1.0 | MIT |
| cookie-es | 3.1.1 | MIT |
| d | 1.0.2 | ISC |
| debug | 2.6.9 | MIT |
| des.js | 1.1.0 | MIT |
| dom-serializer | 1.4.1 | MIT |
| domelementtype | 2.3.0 | BSD-2-Clause |
| domhandler | 4.3.1 | BSD-2-Clause |
| domutils | 2.8.0 | BSD-2-Clause |
| entities | 2.2.0 | BSD-2-Clause |
| es5-ext | 0.10.64 | ISC |
| es6-iterator | 2.0.3 | MIT |
| es6-symbol | 3.1.4 | ISC |
| esniff | 2.0.1 | ISC |
| event-emitter | 0.3.5 | MIT |
| ext | 1.7.0 | ISC |
| fflate | 0.8.3 | MIT |
| googlevideo | 4.1.1 | MIT |
| graceful-fs | 4.2.11 | ISC |
| htmlparser2 | 6.1.0 | MIT |
| ieee754 | 1.2.1 | BSD-3-Clause |
| imurmurhash | 0.1.4 | MIT |
| inherits | 2.0.4 | ISC |
| ip-address | 10.7.4 | MIT |
| is-typedarray | 1.0.0 | MIT |
| lit | 3.3.3 | BSD-3-Clause |
| lit-element | 4.2.2 | BSD-3-Clause |
| lit-html | 3.3.3 | BSD-3-Clause |
| lucide-react | 1.57.0 | ISC |
| meriyah | 7.4.0 | ISC |
| mime | 3.0.0 | MIT |
| minimalistic-assert | 1.0.1 | ISC |
| ms | 2.0.0 | MIT |
| next-tick | 1.1.0 | ISC |
| node-gyp-build | 4.8.4 | MIT |
| node-localstorage | 2.2.1 | MIT |
| pako | 2.2.0 | (MIT AND Zlib) |
| path-browserify | 1.0.1 | MIT |
| react | 19.3.1 | MIT |
| react-dom | 19.3.1 | MIT |
| react-icons | 5.7.0 | MIT |
| react-router | 8.4.0 | MIT |
| real-cancellable-promise | 1.2.3 | MIT |
| scheduler | 0.28.0 | MIT |
| shaka-player | 4.16.52 | Apache-2.0 |
| slide | 1.1.6 | ISC |
| smart-buffer | 4.2.0 | MIT |
| socks | 2.8.10 | MIT |
| store2 | 2.14.4 | MIT |
| telegram | 2.26.22 | MIT |
| ts-custom-error | 3.3.1 | MIT |
| tslib | 2.8.1 | 0BSD |
| type | 2.7.3 | ISC |
| typedarray-to-buffer | 3.1.5 | MIT |
| uqr | 0.1.3 | MIT |
| utf-8-validate | 5.0.10 | MIT |
| websocket | 1.0.35 | Apache-2.0 |
| write-file-atomic | 1.3.4 | ISC |
| yaeti | 0.0.6 | MIT |
| youtubei.js | 18.1.0 | MIT |
| zustand | 5.0.15 | MIT |
`,m={scrim:`_scrim_14wsf_3`,fade:`_fade_14wsf_1`,dialog:`_dialog_14wsf_19`,header:`_header_14wsf_29`,close:`_close_14wsf_40`,body:`_body_14wsf_50`,tableWrap:`_tableWrap_14wsf_102`},h=n(),g={guide:{title:`User Guide`,markdown:i.personal?c:l},whatsNew:{title:`What's New`,markdown:u},privacy:{title:`Privacy`,markdown:d},terms:{title:`Terms of Use`,markdown:f},licences:{title:`Open-Source Licences`,markdown:p}};function _(e,t=``){let n=[],r=/\*\*(.+?)\*\*|\*(.+?)\*|`([^`]+)`|\[([^\]]+)\]\(([^)\s]+)\)/g,i=0,a=0;for(let o of e.matchAll(r)){let[r,s,c,l,u=``,d]=o;o.index>i&&n.push(e.slice(i,o.index));let f=`${t}.${a++}`;s===void 0?c===void 0?l===void 0?n.push((0,h.jsx)(`a`,{href:d,target:`_blank`,rel:`noreferrer`,children:_(u,f)},f)):n.push((0,h.jsx)(`code`,{children:l},f)):n.push((0,h.jsx)(`em`,{children:_(c,f)},f)):n.push((0,h.jsx)(`strong`,{children:_(s,f)},f)),i=o.index+r.length}return i<e.length&&n.push(e.slice(i)),n}var v=e=>e.trim().replace(/^\|/,``).replace(/\|$/,``).split(`|`).map(e=>e.trim());function y(e){let t=e.split(`
`),n=e=>t[e]??``,r=[],i=0;for(;i<t.length;){let e=n(i),a=`b${i}`;if(!e.trim())i++;else if(/^#{1,3} /.test(e)){let t=e.indexOf(` `),n=t===1?`h1`:t===2?`h2`:`h3`;r.push((0,h.jsx)(n,{children:_(e.slice(t+1),a)},a)),i++}else if(e.startsWith(`|`)){let e=[];for(;i<t.length&&n(i).startsWith(`|`);)/^\|[\s:|-]+\|$/.test(n(i).trim())||e.push(v(n(i))),i++;let[o=[],...s]=e;r.push((0,h.jsx)(`div`,{className:m.tableWrap,children:(0,h.jsxs)(`table`,{children:[(0,h.jsx)(`thead`,{children:(0,h.jsx)(`tr`,{children:o.map((e,t)=>(0,h.jsx)(`th`,{children:_(e,`${a}h${t}`)},t))})}),(0,h.jsx)(`tbody`,{children:s.map((e,t)=>(0,h.jsx)(`tr`,{children:e.map((e,n)=>(0,h.jsx)(`td`,{children:_(e,`${a}r${t}c${n}`)},n))},t))})]})},a))}else if(/^(- |\d+\. )/.test(e)){let o=/^\d+\. /.test(e),s=[];for(;i<t.length&&(o?/^\d+\. /.test(n(i)):n(i).startsWith(`- `));)s.push(n(i).replace(/^(- |\d+\. )/,``)),i++;let c=o?`ol`:`ul`;r.push((0,h.jsx)(c,{children:s.map((e,t)=>(0,h.jsx)(`li`,{children:_(e,`${a}i${t}`)},t))},a))}else{let e=[];for(;i<t.length&&n(i).trim()&&!/^(#{1,3} |\||- |\d+\. )/.test(n(i));)e.push(n(i++));r.push((0,h.jsx)(`p`,{children:_(e.join(` `),a)},a))}}return r}function b({doc:e,onClose:t}){let{title:n,markdown:r}=g[e];return(0,o.useEffect)(()=>{let e=e=>e.key===`Escape`&&t();return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[t]),(0,s.createPortal)((0,h.jsx)(`div`,{className:m.scrim,onPointerDown:e=>e.target===e.currentTarget&&t(),children:(0,h.jsxs)(`div`,{className:m.dialog,role:`dialog`,"aria-modal":`true`,"aria-label":n,children:[(0,h.jsxs)(`header`,{className:m.header,children:[(0,h.jsx)(`h2`,{children:n}),(0,h.jsx)(`button`,{className:m.close,"aria-label":`Close`,onClick:t,children:(0,h.jsx)(a,{size:16})})]}),(0,h.jsx)(`article`,{className:m.body,children:y(r.replace(/^# .*\n/,``))})]})}),document.body)}export{b as HelpDoc};