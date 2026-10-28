---
tur: bilim
sana: 2026-10-19
teglar: [google-flow, veo, insert, b-roll, montaj]
---
# Google Flow (Veo 3.1) bilan insert kadrlar konveyeri

Ishlatilgan: NEIROZOL hook seriyasi (19.10.2026). Bog'liq: [[AI video vositalari 2026]], [[Ikki kamerali hook seriyasi konveyeri]].

## Generatsiya
- Loyiha ichidagi **agent paneli**: bitta xabarda 6–9 ta prompt `[ID] ...` ko'rinishida, "Generate N separate videos with Veo 3.1 - Fast, vertical 9:16, 8 seconds, 1 video per prompt, name each video with its ID". Har partiyada "Одобрить" (20 kredit/video Fast, 100 — Quality).
- "Что-то пошло не так" ko'pincha chiqadi, lekin generatsiya baribir navbatga tushadi — **Повторить bosma** (dublikat bo'ladi), avval galereyani tekshir.
- Uslub qatori: "Photorealistic cinematic commercial footage, ARRI Alexa 50mm, shallow DOF, natural skin texture, subtle film grain, muted premium grade, slow camera. No text/logos/dialogue". Odamlar uchun millat va kiyimni aniq yoz (xato #141).
- ⚠️ "cinematic" so'zi letterbox qora chiziq chiqaradi (xato #144): promptga "full-frame vertical, no letterbox, no black bars" qo'sh; baribir `flow_bars.py` bilan tekshirib kes.

## Yuklab olish (1080p)
- Detal sahifa `/edit/<uuid>`; o'q tugmalari ← → bilan videolar orasida yur, `document.body.innerText` dan `[ID]` ni o'qib uuid jadvalini tuz.
- 6 ta tab, har birida `button[aria-label*="Скачать медиа"]` → menyu `1080p` (JS click). ~1–2 daqiqada `Downloads/<Sarlavha>_<vaqt>.mp4` tushadi; sarlavha boshi → ID xaritasi bilan ko'chir (`flow_move.py`).
- Upscale xato bersa — 720p + `scale=1080:1920:flags=lanczos,unsharp=5:5:0.6`.

## Rasmlar (Nano Banana, 2026-10-22)
- Agentga 8 tadan: "Generate 8 separate images with Nano Banana 2.1, vertical 9:16, exactly 1 image per prompt, and rename each image to its ID in brackets" + umumiy STYLE qatori. Personaj izchilligi: "Use image [V07-01] as the character reference". Kredit sarflamaydi, lekin "бонусы заканчиваются" banneri chiqadi.
- Promptni `execCommand('insertText')` bilan ProseMirror'ga qo'yish ishlaydi, **lekin `find` ref bilan bosilgan "Начать генерацию" ba'zan yubormaydi** — matn maydonda qolib ketadi (vaqt yo'qotildi). Bosgandan keyin skrinshot yoki `innerText` bilan maydon bo'shaganini va "Остановить" chiqqanini tekshir; bo'lmasa koordinata bilan bos (tugma `getBoundingClientRect` × skrinshot masshtabi).
- Yuklash: `flow-image-tile` → ⋮ → "Скачать" → "2K" (JS `__dlOne(name)` — eng yangi plitka birinchi). 8 ta ~60 s; yuklash tugamaguncha agent tugmasini bosma (menyular aralashadi).
  - **To'r virtual** (DOM'da faqat ~70 ta ko'rinadigan plitka bor): eski rasmni topish uchun to'r konteynerini (`clientWidth>800`, overflowY auto) 0.7 ekrandan aylantirib qidir (`__seek`).
  - **2K 503 bersa** (2026-10-23: ko'p partiyadan keyin `batchexecute rpcids=SPrCad` va reCAPTCHA `clr` 503 qaytardi; sahifani yangilash ham yordam bermadi): **1K "Исходный размер"** CDN'dan (`flow-content.google`) to'g'ridan-to'g'ri tushadi. Fayl nomi `[PXX-k]_<vaqt>.jpg` (768×1376). Lokal 2x: D/P → Real-ESRGAN `realesr-animevideov3 -s 2`; R/C (foto) → Lanczos 2x + UnsharpMask(1.4, 70) + 15% AI. Natija asl 2K'dan deyarli farq qilmaydi. Skript: oylik loyihadagi `kocha.py`. Tezlik ~10 s/rasm.
  - Uzun JS navbat (`setTimeout` sikli) Flow tabi **orqa fonda** qolsa Chrome taymerlarni sekinlashtiradi — navbat "to'xtab qolgandek" bo'ladi. Tabga `javascript_tool`/skrinshot bilan murojaat qilsang yana tezlashadi; holatni `__allLog` uzunligi bilan kuzat.
- Agent ba'zan ortiqcha rasm qo'shadi ([V12-07], [V12-08]) — faqat kerakli ID larni yukla.
- Agent ba'zan **ID qo'ymaydi** — "barchasi qayta nomlandi" desa ham plitka nomi tavsif bo'lib qoladi ("Woman sleeping in bed", 2026-10-23, P48-2…4). Belgi: `__seek` topolmaydi. Tekshiruv: eng yangi plitkalar ichidan `^\[(P|V)\d\d-` ga mos kelmaydigan nomlarni chiqar, promptga qarab moslab yukla va Downloads'da `[ID]_vaqt.jpg` ga qayta nomla. Promptga "Do not leave descriptive names" qo'shish foydali. Montaj: [[AI rasm va whiteboard ta'lim Reels konveyeri]].

## Tekshiruv va montaj
- `flow_check.py`: 6 kadrli kontakt varaq + LUFS/peak + whisper (fonda gap bormi).
- Har klip uchun `_offsets.json`: eng yaxshi 2.6 s oyna (`off`), subtitr balandligi (`sub`), ovoz (`lp`/`mute`).
- Montajda: so'z aytilgan lahzada to'liq ekran, hard cut, 1.0→1.06 Ken Burns, umumiy grade + pastki gradient, subtitr ustida. Ovoz — [[Video montaj uslubi]] → "AI insert kadrlar ovozi".

## Image-to-video (birinchi kadr = o'z kadrimiz), 2026-10-25 Iskander
- Fayl yuklash: "Загрузить" tugmasi native oyna ochadi — bosma. Avval JS bilan `HTMLInputElement.prototype.click` ni almashtir (file input'ni DOM'ga qo'shib, `aria-label` ber), keyin `find` → `file_upload` (fayl scratchpad'da bo'lishi shart).
- Agentga: "Use the uploaded image as the FIRST FRAME (image-to-video) … [Q1] first frame = <fayl nomi>: …" — Veo 3.1 Fast, 9:16, 8 s; 2 video = 40 bonus kredit (kunlik 50).
- Qurilish time-lapse prompti: "locked-off static camera, same angle … rises floor by floor … crane works, scaffolding disappears … ending as a finished modern residential building … golden hour; no text/logos/people; no letterbox". Natija tabiiy, birinchi kadr real kadr bilan bir xil → real kadrdan AI ga sezilmas kesim.
- Yuklash: tepada ↓ → "1080p Повышенное разрешение" (1–2 daq, bittadan).

## Haqiqiy bino dizayni kerak bo'lsa (2026-10-27, Iskander)
Image-to-video'da "bino o'sadi" so'rovi Veo'ga erkinlik beradi → u O'ZI bino o'ylab topadi (Iskander'da ikkala insert ham boshqa binoni ko'rsatdi, mijoz va foydalanuvchi rad etdi). Ko'chmas mulk/mahsulot uchun: **Frames to Video** — boshlang'ich kadr = real qurilish kadri, oxirgi kadr = mijozning rasmiy renderi (rakursi eng yaqin kadr, 9:16 ga kesilgan); klip tugashi bilan o'sha render klipiga ulash, shunda oxirgi soniyalar 100% haqiqiy dizayn bo'ladi. O'rtadagi kadrlarni ham ko'r: bino boshqa shaklga o'tmasin.
- **Natija (2026-10-27):** agentga "Use FRAMES TO VIDEO mode … [MZA] first frame = X.jpg, last frame = Y.jpg" deb yozish yetarli (Veo 3.1 Fast, 9:16, 8 s, 20 bonus/video). Ikkala klip ham oxirida renderdagi binoga keldi; o'rtada 0.5–0.8 s "morf" (xira qatlam) bor → montajda 2x tezlik + oxiridan haqiqiy render klipiga ulash.
- "Не удалось сгенерировать аудио" xatosi: sozlamalar ⚙ → **"Вернуть видео без звука"** ni yoq, kartadagi ↻ — bonus qaytariladi, qayta urinish yana 20.
- Render manbasida letterbox bo'lishi mumkin (`cropdetect`): 9:16 oynani faqat faol maydondan kes.
- Yuklash: `HTMLInputElement.prototype.click` ni almashtir → yuqoridagi ➕ → "Загрузить" → yashirin input'ni body'ga qo'sh → `file_upload` (bir nechta fayl birdan).

