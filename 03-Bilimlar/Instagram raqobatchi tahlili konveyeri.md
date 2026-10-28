---
tur: bilim
sana: 2026-10-22
teglar: [instagram, raqobatchi, chrome, yt-dlp, whisper, tahlil, konveyer]
---
# Instagram raqobatchi profillarini tahlil qilish konveyeri

Sinalgan: 10 profil, 3 681 reel, 2026-10-22 (Grossline raqobatchilar Reels tahlili). Skriptlar: `D:\claude_ish\loyihalar\2026-10-21_grossline_tahlil\skriptlar\` (nusxa olib ishlat).

## 0. Profil topish (2026-10-26, [[Montaj o'rganish manbalari (kuzatuv ro'yxati)]])
- `/api/v1/web/search/topsearch/` **404**, `web_profile_info` **429** — API orqali qidirib bo'lmaydi.
- **Sahifadagi qidiruv oynasi** ishlaydi: `/explore/` dagi input'ga JS bilan qiymat ber (`HTMLInputElement.prototype` value setter + `input` hodisasi), 3,5 s kut, `a[href^="/"]` natija havolalarini yig'. 35 so'rov ≈ 2 daqiqa, 155 profil. Fonda `(async()=>{…})()` + `window.__done`.
- **Obunachi/post soni login'siz:** `fetch('/<user>/')` HTML'idagi `og:description` ("Подписчики: 109K, Подписки…, Публикации: 174") — ichki brauzerda (login'siz) ham ishlaydi; ~1 s oraliq bilan 130 profil ≈ 3 daqiqa. HTML entity'larni `textarea.innerHTML` bilan och.
- **Bio:** profil sahifasida `document.querySelector('header').innerText`.
- **Tez median:** `/<user>/reels/` → 4 s kut → 3 marta scroll (1,5 s) → ~24–30 oxirgi reel ko'rishi; har profil ~10 s. `browser_batch` da 8 ta profil bir chaqiruvda.
- Qidiruvga kirmaydigan kuchli sahifalar ko'p (brendlar, studiyalar) → bio'dagi "Made in @…", "Loyihalarimiz @…" zanjiri bo'yicha yur (ai.otabek → ai.fabrika).
- Tuzoq: tasodifiy profillar boshqa mamlakatdan bo'lishi mumkin (kerel_reels — yoqutcha) — izoh tilini tekshir.

## 1. Reels ro'yxati ko'rishlar bilan — faqat login qilingan Chrome
- Ilova ichidagi brauzer login'siz 12 reel beradi, 2–3 profildan keyin bo'sh ([[Instagram reelni haqiqiyligini tekshirish]]). Foydalanuvchining Chrome'i kerak (Claude in Chrome). 2026-10-22: Chrome'da **grossline_tabiiy** akkaunti bilan kirilgan.
- `/api/v1/users/web_profile_info` login bilan ham **429** berdi → API emas, **grid'ni aylantirib yig'**: `a[href*="/reel/"]` → kod + `innerText` ("506 тыс.", "1,3 млн", "1 272"). Virtual grid eski elementlarni o'chiradi → `Map`ga to'pla.
- JS 45 s dan oshsa CDP uziladi → loop'ni `(async()=>{…})()` bilan fonda ishga tushir, `window.__done/__iter`ni so'ra; `computer wait` 10 s × n bilan kut.
- Tezlik: 2 s/scroll, 12 marta o'smasa to'xta; **CAP 300** reel (kuniga ko'p joylaydiganlar 600 ta = atigi 2 oy). Instagram vaqti-vaqti bilan sekinlashtiradi (min/10 reel) — tezlatma, akkaunt bloklanmasin.
- Natija: mediana, p90, 1M+ soni, top-25 → `reels_<user>.json`.

## 2. Yuklash — yt-dlp login'siz
`yukla.py <json> 6 25`: top-6 video + top-25 faqat `--skip-download --write-info-json` (izoh, layk, izohlar soni, sana). `view_count` yo'q — ko'rishni grid'dan ol. "can't be seen by certain audiences" = yoshga cheklangan → Chrome'da `og:description` dan izoh va layk olinadi.
- 2026-10-26: 30/30 reel `yt-dlp` login'siz yuklandi (`montaj_tahlil.py`, `D:\claude_ish\loyihalar\2026-10-26_uz_montajchilar\skriptlar\`).

## 3. Tahlil — `tahlil_lite.py <user>…`
ffprobe, kesimlar (scene>0.3), `umumiy.jpg` (12 kadr), `hook.jpg` (0–3 s, 2 fps), whisper → `matn.txt`. **Whisper: large-v3-q5_0 + `-mc 0` + o'zbekcha `--prompt`** — turbo bitta iborani 40 marta takrorladi ([[Video montaj texnik xatolari]] #166). 2 ta jarayon parallel (GTX 1660S 6 GB) yetadi.

- **Kesim soni tuzog'i:** `scene>0.3` bir xil yorug'likdagi dialog kesimlarini sezmaydi (cinemedia 70 s da 1 kesim ko'rsatdi, aslida o'ndan ortiq). Dialog/intervyu uchun `scene>0.15` qo'y yoki kadr varag'i bilan tasdiqla.

## 4. Ko'rish tartibi
`top25_izohlar.txt` (izoh/1000 ko'rish, layk) → har profil top-6 `umumiy.jpg` + matn → format, hook, CTA. Brend akkauntida layk ≈ 3 = pullik reklama, organik deb hisoblama.
