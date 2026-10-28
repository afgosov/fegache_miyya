---
tur: bilim
sana: 2026-10-10
teglar: [youtube, darslik, konveyer, edl, hyperframes, pip, opencv, ffmpeg, 4k]
---
# YouTube darslik montaj konveyeri (sinalgan: C0100, 16 daq xom → 10:50, 4K)

Nazariya: [[YouTube uzun video montaji]] · [[YouTube darslik (tutorial) montaji]]. Loyiha: [[YouTube darslik C0100 (Noon Academy)]]. Ish papkasi: `C:/Users/Admin/AppData/Local/Temp/claude/c0100/`.

## 1. Matnni to'liq o'qish (kesishdan oldin)
- Audio: `a48.wav` (kanallarni solishtir — bu kamerada L=R). 16 kHz mono → `aud/a16.wav`.
- `phrases.py seg` (−40 dB, ≥0.42 s pauza bo'yicha iboralar) → `chunks.json` (≤28 s) → `tr_chunks.py` (large-v3 q5, `-l uz`, GPU): butun video tuzilmasini o'qish uchun. 16 daqiqa ≈ 15 daqiqa.
- **Chunk darajasi yashirin dubllarni yashiradi.** Masalan, xulosa gapi 3 marta aytilgan, chunk esa ularni bitta gap qilib qo'shib yuborgan. Shuning uchun **har bir qoldiriladigan bo'lakni ibora darajasida** (`phrases.py run L a b gpu`) qayta o'qi. `words.py` so'z vaqtlarini va pauzalarni beradi.
- Kesiladiganlar: operator bilan suhbatlar ("bo'ldimi?", "rasmiy qilaymi?"), 1-dubllar (**har doim oxirgi to'liq dublni** ol), chala gaplar, "Xo'p, eh..." kabi o'ziga gapirishlar, noaniq boshlanish. Ishonchsiz joyni kesishning xavfi kamroq bo'lsa, kes va foydalanuvchiga ayt.

## 2. EDL (`edl.py`)
- `KEEP` — ibora aniqligidagi (birinchi ibora boshi, oxirgi ibora oxiri) bo'laklar va har biriga izoh.
- Tutqichlar: oldin 0.18 s, keyin 0.30 s. Keyingi gap juda yaqin bo'lsa, `TIGHT` bilan 0.11–0.2 s.
- 1.3 s dan uzun pauzalar 0.75 s gacha qisqartiriladi.
- **Virtual kamera:** har kesimda va uzun bo'laklarda ~32 s da (pauzada) W (to'liq) ↔ C (1.15×, yuz x .52 / y .30) almashadi. Jump cut kamera almashuviga aylanadi.
- `tmap.py s2o()` — manba vaqtini chiqish vaqtiga o'tkazadi; overlay va insert vaqtlari shu bilan hisoblanadi.

## 3. Asos video (`render_base.py`)
- Har segment alohida: `-ss (f0-0.5)/25` (aniq qidiruv) + `-frames:v n`, crop/scale + yengil grade, NVENC p7 cq15 → concat (copy). Kadr sonlari tekshiriladi.
- Imzo fayli (`base/sig.json`) bo'lgani uchun EDL o'zgarsa, faqat o'zgargan segmentlar qayta render bo'ladi.
- Tezlik: 4K 10.7 daqiqa ≈ 40 daqiqa (parallel whisper bilan birga).

## 4. Motion kadrlar (HyperFrames, faqat grafika)
- Har insert alohida loyiha: `mg/src/<m>.html` → `build.py` (`/*BASE*/` o'rniga `base.css` qo'yiladi, assets nusxalanadi) → `check` → `snapshot` → render.
- **4K render:** kompozitsiya 1920×1080 da yoziladi, `render --resolution 4k --fps 25 --workers 8`. **25 fps ishlaydi** (hujjatda faqat 24/30/60 deyilgan). Alfa: `--format mov` (ProRes 4444, 4K bilan ishlaydi). Insertlar `mp4 --crf 12`. Tezlik ~5 kadr/s.
- Brend: Noon Academy — teal `#0b3d42`, oltin gradient, krem; Fraunces + Plus Jakarta + Noto Naskh Arabic (harakatlar to'g'ri chiqadi); fonda xira "ن" belgisi (SVG text, `data-layout-allow-*`).
- Arabcha so'zlar qatori (chip'lar) **o'ngdan chapga** tursin: `display:flex; direction: rtl`.
- `getBoundingClientRect` o'lchovi animatsiya transformi ostida noto'g'ri chiqadi. Ajratib ko'rsatish (highlight) uchun `offsetLeft/offsetWidth` ishlat.
- SVG chiziq chizish: `opacity 0` → chizish boshlanganda 1 bo'lsin ([[Video montaj texnik xatolari]] #17 — yumaloq uchli nuqta).

## 5. Ustoz PiP ichida (`composite_inserts.py`, OpenCV)
- Grafika shaffof emas (mp4). Ustozni kodning o'zi chizadi. Insert boshida to'liq kadr **kichrayib PiP doirasiga aylanadi** (shared element, power3.inOut, 0.9 s). Oxirida yana to'liq kadrgacha kattalashadi. Yakuniy insertda doira yopiladi.
- Matematika: `s = exp(log(R/rs)·p)`, langar nuqta `A → C_pip`, niqob radiusi `4600·(R/4600)^p`. Faqat doira bbox'i `warpAffine` qilinadi. Zoom (W/C) kadr bo'yicha hisobga olinadi, shuning uchun PiP ichida sakrash bo'lmaydi.
- Halqa, soya va "USTOZ" yorlig'i HTML'da (halqaning ichki radiusi = PiP radiusi).

## 6. Ovoz (`aud2/build_audio.py`, numpy-only `sfxlib.py`)
- EDL bo'yicha kesish, har ulanishda 5 ms crossfade, namunaga aniq (1920 namuna/kadr).
- `adeclip, highpass 75, eq, acompressor 2.3:1` → SFX faqat ko'rinadigan harakatda (insert o'tishlari, kartochkalar, ✓/✗), ovozdan ~9.5 dB past, gapirganda yana −3 dB.
- Musiqa faqat hook ostida (~−24 dB) va yakuniy logo kartasida. Mastering: −14 LUFS, TP −1.5.

## 7. Yig'ish (`assemble.py`)
- `base_v` + `tpad` (yakuniy karta uchun) → insertlar (`setpts=+start`, `overlay eof_action=pass`) → alfa overlaylar → audio. NVENC p7, `-multipass fullres`, VBR 40/50 Mbps, `+faststart`.

Markaz: [[Video montaj]]

## Vaqt va disk (C0100, 2026-10-10)
- Whisper (chunk) 15 daq · base render 40 daq · 15 ta HyperFrames render jami ~45 daq (~5 kadr/s, 8 worker) · PiP composite ~2.3 kadr/s (render bilan parallel) · yakuniy yig'ish 10 daq (28 kadr/s, NVENC).
- **4K alfa MOV uzun bo'lsa** (41 s), multi-worker screenshot capture kadrlarni diskka yozadi (~34 GB). C: da joy yetmaydi → `TEMP`/`TMP` ni D: dagi papkaga qo'yib render qil.

## 2-video (C0102) dan qo'shimcha saboqlar
- **Arabcha shrift:** Amiri مُحَمَّدٌ ni an'anaviy ustma-ust ligaturada yozadi, harakatlar bir joyga to'planadi (`liga/dlig/calt` o'chirilsa ham). Boshlovchilar uchun **Noto Naskh** — har harakat o'z harfi ustida. Yangi shriftni 150 px katta sinov sahifasida tekshir.
- **Yakka harakatni ko'rsatish:** `ـُ` (tatvil + harakat) kichik va noaniq chiqadi. Harf bilan ko'rsat (`بُ بِ بَ`) yoki lotincha "-u / -un" deb yoz.
- **Ustoz da'volari:** "doim" degan umumiy qoidani ekranga mutlaq qilib yozma. Istisnosi bo'lsa — "ko'pincha / odatda", yoki misolga bog'la ("فِي kirgani uchun oxiri -i").
- **To'rtburchak PiP:** manba oynasi chiqish to'rtburchagi aspektida bo'ladi (log-balandlik interpolyatsiya) → cho'zilish yo'q; antialiased rounded-rect SDF niqob.
- **Ketma-ket insertlar:** oraliq < 2 s bo'lsa, ustozni to'liq kadrga qaytarma — oldingisida `exit` yo'q, keyingisida `enter` manfiy (doim PiP), grafika o'zi almashtiriladi.
- **Kirib qolganlarni qidirish:** `intrude.py` — 2 fps, yon hududlar, W/C kadr bo'yicha alohida median. Topilganlarni kadr bilan ko'r (bu safar faqat ustozning qo'l harakatlari edi).
- **Diskda joy:** uzun alfa render → `TEMP=D:\...` (`render_all.py` o'zi qo'yadi).
- **Fon CPU worker:** GPU band bo'lsa (`wiwig.exe` 100%), whisper'ni ikkinchi oqimda CPU'da (`-ng`, `-t 8`) parallel yurgiz — iboralar fayllari bir-birini o'tkazib yuboradi.

## 3-video (C6183) dan tezlik saboqlari
- **Phrase-level whisper:** har ibora uchun alohida `whisper-cli` chaqirilsa model har safar yuklanadi (~16 s/ibora). `ph_batch.py`: bitta chaqiruvda 60 ta `-f fayl` + 60 ta `-of nom` → 375 ibora ~25 daqiqa.
- **4K raw pipe (eng muhim):** `subprocess.Popen(..., bufsize=katta)` bilan 4K kadr o'qish juda sekin (bgr24: 3.4 kadr/s). **`bufsize=0` + `-pix_fmt yuv420p`** + `readinto` sikli → 29 kadr/s. Kompozitni Y/U/V tekisliklarida qil: har tekislikka `warpAffine` (chroma uchun siljish /2), `cv2.blendLinear`, niqobni keshla (statik PiP holatida bir marta).
- Mikro-o'lchov qil: avval qaysi qism sekinligini o'lcha (dekod, pipe, numpy, encode) — taxmin bilan optimallashtirma.
- **Kadrni tekislash (qiyshiq kamera):** burchakni o'lcha — vertikal chegaralarda har qatorda max |∂I/∂x| nuqtasi, stol chetida max |∂I/∂y|, robust chiziq moslash (`tilt/` kadrlari, har 30 s). Tuzatish ffmpeg'da bitta zanjirda: `rotate=-θ:ow=IW:oh=IH:bilinear=1,scale=3840:2160:lanczos` (C plan uchun orasiga `crop`). IW×IH — aylangan kadr ichiga sig'adigan eng katta 16:9: `a·cosθ+b·sinθ ≤ W/2`, `a·sinθ+b·cosθ ≤ H/2` (1.85° da 3630×2042, ×1.058). PiP `SRCWIN` va C crop'ni yangi koordinatalarga qayta hisobla. 4K da ~10 kadr/s → segmentlarni 3 parallel render qil.
- **Roll + keystone (pitch) birga:** gorizontallar bir xil og'gan, vertikallar esa x bo'yicha har xil og'sa (chapda ~0°, o'ngda +2.7°) — bu kamera pastga qaragani (keystone). Faqat aylantirish yetmaydi (vertikallar teskari og'adi). Yechim: devor chiziqlariga `H = K·Rz(roll)·Rx(pitch)·K⁻¹` ni moslash (f≈1870 px @1920, grid search), ichki 16:9 to'rtburchakni topish va ffmpeg `perspective=x0..y3:interpolation=cubic:sense=source` ga W va C ko'rinishlari uchun alohida manba nuqtalarini berish (bitta resample). C0102: roll 1.25°, pitch 4°, zoom ×1.037, qoldiq ≤0.17° (`D:/claude_ish/loyihalar/2026-10-10_c0102/level.py`).

