---
tur: bilim
sana: 2026-10-23
teglar: [smooth, silliqlik, stabilizatsiya, slow-motion, easing, o'tish, ovoz, tekshiruv, markaz]
---
# Smooth montaj (silliqlik) — markaz va majburiy tekshiruv

**Smooth** (o'qilishi "smus") — "silliq" degani. Montajda tomoshabinning ko'zi va qulog'i hech qayerda **sakrash, titrash, qotib qolish yoki chiqillashni sezmasligi**ni bildiradi. Hamkasblar tanqidida bu "плавныйроқ қилиш керак" deb yoziladi ([[Montaj xatolari - hamkasblar tanqidi]] #13). Foydalanuvchi va mijozlar ham buni darhol sezadi: Premier gaz plita "kadrlar titrab ketgan", Iskander "stabilizatsiya sezmadim".

Foydalanuvchi so'rovi (2026-10-23): "barchasini o'rgan, miyaga saqla, kerakli videolarda kerakli joylarda qo'lla".

## 1. Smooth'ning 8 turi — nima, qanday, qayerda

| # | Tur | Silliq emas belgisi | Bizda (Python/ffmpeg/HyperFrames) | Premiere / AE | CapCut |
|---|---|---|---|---|---|
| 1 | **Kamera** (stabilizatsiya) | qo'l titrashi, qadam chayqalishi, burilish | [[Stabilizatsiya - niqobli o'xshashlik (v12)]] (mahsulot B-roll), [[Talking-head stabilizatsiya - fon tasmasi]] (boshlovchi) | Warp Stabilizer: **Smooth Motion** (silliqlik 50→100%) yoki **No Motion** (shtativdek); Method: Subspace Warp kadrni buzsa → **Position, Scale, Rotation**; Framing: Stabilize, Crop, Auto-scale | Клип → Стабилизация (Рекомендуемая / Максимальная) |
| 2 | **Vaqt** (slow-motion) | kadr takrori (qotib-qotib), kadr aralashuvi (ikki qavat qirra) | faqat yuqori fps manbadan; 25 fps bo'lsa — §2 | Time Interpolation: Frame Sampling (qotadi) / Frame Blending (ikki qavat) / **Optical Flow** (eng silliq, artefakt bo'lishi mumkin) | Скорость → **Плавное замедление / Optical flow** (30–60 fps) |
| 3 | **Speed ramp** | tezlik sakrab o'zgaradi | `setpts` egri chizig'i + tez joyga motion blur | Time Remapping, nuqtani ikkiga bo'lib egri qilish | Скорость → Кривая → Пользовательский ([[CapCut retseptlari (speed ramp, mahsulot grafikasi, overlay)]]) |
| 4 | **Zoom / Ken Burns** | zinapoya (pikselga yaxlitlash), keskin boshlanish | 1.2–1.5× kanvasda subpiksel `warpAffine`, ease, ≤2.5–3.5%/s. **ffmpeg `zoompan` ishlatilmaydi** (titratadi) | Scale keyframe + Easy Ease | Ключевые кадры + Сглаживание |
| 5 | **Animatsiya** (yozuv, grafika) | chiziqli harakat, keskin to'xtash | GSAP `power3.out` kirish, `power2.in` chiqish ([[Easing va harakat egri chiziqlari]]) | Easy Ease (F9), Graph Editor ta'siri 60–85% | «Вылет куб» egri chizig'i |
| 6 | **O'tish va kesim** | jump cut, ritmdan tashqari kesim | harakat ustida kesim, match cut, J/L-cut, light leak (cho'qqi = kesim, 44% qoidasi) ([[Professional kesim texnikalari]]) | Cross Dissolve 8–12 kadr faqat vaqt yoki kayfiyat o'zgarganda | Переходы, overlay «Экран» |
| 7 | **Ovoz** | kesimda "chiq", musiqa uzilishi, ovoz sakrashi | har ovoz chetiga 10 ms fade (build.py), bo'laklar balandligini tenglash, ducking attack/release 150–300 ms | Constant Power 2–4 kadr, audio J/L-cut | Затухание |
| 8 | **Texnik** | VFR qotishi, 25→30 fps titrashi, siqilish | CFR eksport (`-fps_mode cfr -r 25`), manba fps saqlanadi, CRF ≤18 | Sequence fps = manba fps | 1080p, manba fps, 10–20 Mbit |

Qo'shimcha: kadrlar orasida rang yoki yorqinlik sakrasa ham silliq emas ko'rinadi → bitta grade ([[Rang tuzatish va grading]]). Kamera tomonda esa 180° qoidasi: 25 fps → 1/50 shutter ([[Motion blur va Shutter Angle]]).

## 2. Slow-motion — o'lchangan sinov (2026-10-23)
Manba C8467 (silliq siljish) va C8463 (qo'l tutqichni buraydi), 25 fps, 0.5× sekinlashtirish. Har variant `smooth_check.py` bilan o'lchandi va kadrlari ko'z bilan ko'rildi.

| Usul | ffmpeg | notekislik | takror | aralashuv | Ko'z bilan |
|---|---|---|---|---|---|
| Asl tezlik | — | 0.05 | 0 | 0.012 | silliq |
| Kadr takrori (Frame Sampling) | `setpts=2*PTS,fps=25` | **1.78** | **0.51** | 0.009 | qotib-qotib |
| Kadr aralashuvi 0.5× (Frame Blending) | `setpts=2*PTS,framerate=fps=25` | 0.08 | 0 | **0.222** | har 2-kadr xira, ikki qavat qirra |
| Kadr aralashuvi 0.6× | `setpts=PTS/0.6,framerate=fps=25` | 0.42 | 0 | **0.043** | notekis + ikki qavat |
| **Optical flow (mci)**, kamera siljishi | `minterpolate=fps=50:mi_mode=mci:mc_mode=aobmc:me_mode=bidir:vsbmc=1,setpts=2*PTS,fps=25` | 0.03 | 0.05 | 0.019 | ✅ silliq |
| Optical flow (mci), qo'l | xuddi shu | 0.09 | 0.05 | **0.105** | barmoqlarda qisman xiralik |

**Qoidalar:**
- Sekinlashtirish faqat **50/60/100/120 fps** manbadan: 50→25 = 2×, 100→25 = 4×. Manba fps'ini avval `ffprobe` bilan tekshir.
- 25 fps manbada slow-mo **qilinmaydi**: kadr yetmasa, boshqa kadr qo'sh yoki kesimni ko'paytir. Juda zarur bo'lsa — faqat **mci**, faqat oddiy kamera siljishida, ≥0.5×. Qo'l, shisha, aks, olov va suvda mci ham aralashtiradi.
- mci 540×960 da ~6 s / 1.2 s klip. 4K da juda sekin — avval kesib, keyin interpolyatsiya qil.
- "Slow-motion voqea paytida" — harakat cho'qqisida sekinlashadi, keyingi kadrda emas (tanqid #18).

## 3. Qachon qayerda qo'llash (video turi bo'yicha)
| Video turi | Asosiy smooth vazifalari |
|---|---|
| Brend reklama, mahsulot B-roll (Premier, Akfa, Express) | qo'l kadrlarini shtativdek stabilizatsiya qil (≤3 s kadrlar), 25 fps slow-mo yo'q, B-roll'ning titragan boshi va oxirini kes, bitta grade, kesim musiqa zarbiga |
| Talking-head, otziv, boshlovchi | fon tasmasi bo'yicha stabilizatsiya, jump cut o'rniga ≥1.4× punch-in yoki B-roll, J/L-cut, so'z oxirini kesmaslik, ovoz bo'laklari orasida 10 ms fade |
| Motion grafika, yozuvlar | easing (`power3.out` / `power2.in`), kirish 0.4–0.7 s, chiqish tezroq, motion blur faqat tez lahzalarda, yozuv o'qilayotganda qimirlamaydi |
| Restoran, resort, jarayon | speed ramp faqat 50/60 fps manbadan, harakat ustida kesim, light leak, zarbga kesim |
| Podcast, uzun video | kamera almashinuvi gap chegarasida, ovoz crossfade, rang kameralar o'rtasida tenglangan |
| Ken Burns (motion'siz montaj) | har kadrda sekin zoom, navbatma-navbat, subpiksel, ease ([[Video montaj uslubi]] "Motion ishlatma ≠ kamera harakatisiz") |

## 4. O'lchov vositasi — `smooth_check.py` (topshirishdan oldin MAJBURIY)
`python -X utf8 C:/Users/Admin/ObsidianMiya/.claude/tools/smooth_check.py video.mp4 [--json out.json] [--border] [--from S --to S]`
- Kesimlarni o'zi topadi. Har kadr bo'lagi uchun: **titrash**, **chayqalish**, **burilish**, **tezlik**, **notekislik**, **kadr takrori**, **aralashuv**, **zoom zinapoyasi**. Bundan tashqari: muzlagan kadr, juda qisqa kadr, kesimdagi keskin ovoz.
- Chegaralar: titrash > 0.5 px, chayqalish > 2.0 px (1080 da), burilish > 0.05°, notekislik > 0.55, takror > 8%, aralashuv > 0.04, zoom > 0.0006.
- `--border`: talking-head'da nuqtalarni kadr chetidan oladi (odamni emas, fonni o'lchaydi).
- 60 s 1080×1920 video ~27 s da tekshiriladi.
- Sozlash (kalibrlash) qilingan: yozuv yoki subtitr chiqishi aralashuv belgisini bermaydi (6×4 plitka mediana), light leak "juda qisqa (o'tish)" deb chiqadi, qora yakuniy kartochka belgilanmaydi.
- **Yolg'on signal bo'lishi mumkin:**
  - katta qimirlaydigan obyekt (eshik, qopqoq, qo'l): "o'lchov ishonchi past" chiqadi → ko'z bilan tekshir;
  - "kesimda keskin ovoz" ataylab qo'yilgan SFX zarbasi bo'lishi mumkin → eshitib ko'r.
- Birinchi topilma: TAYYOR `Premier_gaz_plita.mp4` 18.5–24.2 s (PURE CERAMIC qopqoq kadri). Aralashuv 0.119, kadr farqlari navbatma-navbat 4.4/3.4 — sekinlashtirish izi ([[Premier Uzbekistan Reels (Primer papka)]]).

## 5. Topshirishdan oldingi smooth ro'yxati
1. `smooth_check.py` → XULOSA "SILLIQ ✅". Belgi bo'lsa — tuzat yoki sababini yoz (ataylab qilingan harakat).
2. Har B-roll'ning boshi va oxirini 0.25 s qadamda ko'r — kamera "joylashayotgan" titroq qism kesilgan.
3. Slow-mo bo'lsa — manba fps ≥ 50 ekani tasdiqlangan.
4. Barcha zoom va harakatlar ease bilan; ffmpeg `zoompan` yo'q.
5. Kesimlar zarbga yoki harakatga tushgan; ketma-ket bir xil burchak yo'q.
6. Ovoz: har kesimda 10 ms fade, so'z oxiri kesilmagan, musiqa uzilmagan.
7. Eksport CFR, manba fps, yuqori bitreyt.

Bog'liq: [[Easing va harakat egri chiziqlari]] · [[Motion blur va Shutter Angle]] · [[Professional kesim texnikalari]] · [[Stabilizatsiya - niqobli o'xshashlik (v12)]] · [[Talking-head stabilizatsiya - fon tasmasi]] · [[CapCut retseptlari (speed ramp, mahsulot grafikasi, overlay)]] · [[Montaj xatolari - hamkasblar tanqidi]]

Manbalar: [Adobe — Warp Stabilizer settings](https://helpx.adobe.com/premiere/desktop/add-video-effects/commonly-used-effects/warp-stabilizer-settings.html), [CapCut — Optical flow](https://www.capcut.com/resource/optical-flow-in-capcut), [Adobe community — Time Interpolation](https://community.adobe.com/t5/premiere-pro-discussions/time-interpolation-frame-sampling-and-opitcal-flow-in-ppro-then-again-in-media-encoder/m-p/12073975/highlight/true), [Larry Jordan — Warp Stabilizer](https://larryjordan.com/articles/advanced-features-of-warp-stabilizer-in-adobe-premiere-pro/)

Markaz: [[Video montaj]] · [[Motion design]]

## smooth_check yolg'on "TITRAYDI" bergan holat (2026-10-23, NEIROZOL 22 oktabr - 22 target video)
- Talking-head + virtual kamera (zoom 1.1–1.5) videolarida `smooth_check --border` deyarli har kadrga TITRAYDI/CHAYQALADI/ZOOM ZINAPOYA qo'ydi. Sabab: chetga kirgan qo'l/chip harakati, qorong'i/silliq fon shovqini; zoom zinapoya o'lchovi qotgan zoomda ham 0.0007 (shovqin tagi).
- **Aniq tekshiruv** (`_neirozol_2210/tools/srcjitter.py N t0 t1`): spiker qutisidan tashqaridagi teksturali kataklarda fazaviy korrelyatsiya, javobi eng yuqori (≥0.8) 3 katak. Natija: manba titrashi 0.03–0.23 px (shtativ) — stabilizatsiya kerak emas. Stab (L1, `stab.py`) sinab ko'rildi: 0.14 → 0.16 px, foydasiz.
- Tayyor videoni tekshirish: `bgjitter.py` (burchak bo'laklari) — yog'och/qorong'i fonda ishonch <0.45 bo'lsa natija yaroqsiz, kataklarni javob bo'yicha tanla.
- Qoida: smooth_check belgisi chiqsa, avval **manba titrashini aniq o'lcha**; < 0.3 px bo'lsa — belgilar yolg'on, hisobotda shuni ochiq ayt.
- **Nazorat sinovi (2026-10-26, NEIROZOL 24.10):** rejadagi virtual kamera yo'lini overlay/grain/ranglarsiz render qilib (`_neirozol_2410/tmp/camtest.py`) smooth_check'dan o'tkazildi — baribir 10/10 kadrga TITRAYDI (1–4 px), lekin xuddi shu videoda toza fon bo'laklari fazaviy korrelyatsiyada 0.11–0.25 px. Xulosa: o'tirgan spiker kadrida (qo'l/tana kadr chetiga yetadi) `--border` rejimi tana harakatini o'lchaydi. Talking-head uchun hukmni fon bo'laklari (ishonch ≥0.6) bo'yicha chiqar.
