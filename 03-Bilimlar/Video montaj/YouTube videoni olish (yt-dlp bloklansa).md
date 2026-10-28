---
tur: bilim
sana: 2026-10-14
teglar: [youtube, yt-dlp, yuklab-olish, brauzer, shorts]
---
# YouTube videoni olish (yt-dlp bloklansa)

**Muammo (2026-10-14):** `yt-dlp` (2026.08.19) — HTTP 429 + "Sign in to confirm you're not a bot"; `--js-runtimes node`, tv/ios/android/web_safari klientlari ham faqat 360p (format 18) berdi, keyin u ham bloklandi. Cookie (brauzer login) ishlatilmadi.

## Ishlagan yo'l — o'rnatilgan brauzerda yozib olish (1080p)
1. `preview_start` bilan Shorts sahifasini och.
2. Sifatni majburla: `document.querySelector('#shorts-player').setPlaybackQualityRange('hd1080','hd1080')` → 6 s kut → `video.videoWidth` 1080 bo'lsin.
3. `v.pause(); v.currentTime=0;` buferni kut (`v.buffered`).
4. `MediaRecorder(new MediaStream(v.captureStream(30).getVideoTracks()), {mimeType:'video/mp4;codecs=avc1.640033', videoBitsPerSecond:40e6})`, `v.loop=false`, 20 ms intervalda oxirni (yoki vaqt orqaga qaytishini) kutib `rec.stop()`.
5. Blob → `<a download>` click. Fayl `Downloads/<uuid>.tmp` bo'lib qoladi (hajmi to'liq) — nusxalab `.mp4` qil.
6. Natija VFR (~25 fps) → `ffmpeg -vf fps=25` bilan CFR.

## Ustidagi yozuvni olib tashlash
- Statik quti joyini topish: kadrlar bo'yicha o'rtacha yorqinlik past + vaqt bo'yicha std past (`mean<40 & std<12`).
- Harakatlanuvchi kadrda inpaint dog' qoldiradi → **kadrni qutidan tashqarida kesish** (o'ng chetga yopishgan oyna, zoom ≥ 1080/(1080−x1)) + sekin Ken Burns (subpiksel `warpAffine`).

Bog'liq: Nukus lampa brendlari otziv (Lucem Vesta Akfa) · [[Namuna tahlil qilish tartibi]] · Markaz: [[Video montaj]]

## Vertikal video: standart format 608×1080 bo'lib qoladi (2026-10-21)
- yt-dlp oddiy yuklashda vertikal videoni **608×1080 AV1** (gorizontal "1080p" kesimi) olib keldi. `intro.info.json` → `formats` da **1080×1920** bor edi: `yt-dlp --no-playlist -f 270/137` (avc1, 25 fps). Avval formatlar ro'yxatini ko'r, keyin yukla.
- Suv belgisini kesish: `zoom ≥ 1920 / pastki_chegara` (belgi y 1520 da → chegara 1500 → z ≥ 1.28); 1080p manbada 1.3–1.4× sifatni buzmaydi.

## Kanal faolligini tekshirish (2026-10-26)
- O'rnatilgan brauzerda `youtube.com` sahifasida turib `fetch('https://www.youtube.com/@<handle>/videos')` → HTML'dan `var ytInitialData = {…};` ni JSON qilib och.
- 2026 formati: videolar `lockupViewModel` ichida — sarlavha `lockupMetadataViewModel.title.content`, ko'rish va sana `metadata` ichidagi `"content"` qatorlari ("120 тыс. просмотров · 3 нед. назад"). Eski `videoRenderer`/`publishedTimeText` yo'q.
- Obunachi: `"content":"925 тыс. подписчиков"`. 404 = handle noto'g'ri (Cinecom `@cinecom`/`@cinecomnet` emas).
- `get_page_text` YouTube kanal sahifasida ko'pincha bo'sh qaytadi — JS bilan o'qi.

