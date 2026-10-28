---
tur: bilim
sana: 2026-10-05
teglar: [montaj, rang, grading, lut]
---
# Rang tuzatish (correction) va grading

## Farqi
- **Correction (tuzatish) — texnik ish:** ekspozitsiya, oq balans, kontrast, kadrlarni bir-biriga moslash. Natijada tasvir "to'g'ri" ko'rinadi.
- **Grading — ijodiy ish:** kayfiyat va uslub (iliq, sovuq, kinematik, retro). Har doim tuzatishdan **keyin** qilinadi.

## Tartib (har doim shu ketma-ketlikda)
1. **LOG yoki HDR bo'lsa:** avval Rec.709 ga o'tkaz (rasmiy LUT yoki konvertatsiya bilan).
2. **Ekspozitsiya:** waveform yoki histogramma bo'yicha. Qoralar ~0–5%, oqlar ~95% dan oshmasin. Yuz taxminan 55–70% IRE atrofida bo'lsin.
3. **Oq balans:** neytral narsa (oq devor, kulrang) haqiqatan neytral ko'rinsin.
4. **Kontrast va to'yinganlik:** me'yorida.
5. **Kadrlarni moslash:** turli kamera va burchaklar bir xil ko'rinsin.
6. **Grading:** kayfiyat beriladi (LUT intensivligi odatda 50–85%, 100% emas).
7. **Mahalliy tuzatishlar:** yuzni biroz yoritish, fonni biroz pasaytirish (vignette).

## Teri rangi — eng muhim narsa
- **Vectorscope'da qizil va sariq orasida "skin tone line"** bor. Har qanday teri rangi shu chiziq atrofida bo'lsa, tabiiy ko'rinadi.
- Teri pushti yoki qizilga ketsa (bizning NEIROZOL kadrida iliq-pushti tus kuchli edi), qizil/magenta'ni kamaytir. Teri yashil yoki sariqqa ketsa, aksincha.
- Grading teriga ta'sir qilmasin. Kerak bo'lsa, teri tonini alohida himoya qil.

## Vositalar
- **Waveform:** ekspozitsiya uchun. **Vectorscope:** rang (teri, oq balans). **Histogramma:** umumiy taqsimot.
- **HyperFrames'da:** `data-color-grading` preset va LUT bilan. Avval `media-treatment --analyze` bilan signal statistikasini ol, keyin yengil tuzatish qil. Tayyor uslublar: retro, plyonka, kamkorder, glitch, ASCII va boshqalar (`media-treatments.md`). LUT faylini kontekstga o'qima, `grade-compare` bilan vizual solishtir.
- **ffmpeg retseptlari:**
  - Yengil tuzatish: `eq=brightness=0.02:contrast=1.05:saturation=1.05`
  - Rang balansi (pushti tusni kamaytirish): `colorbalance=rm=-0.04:gm=0.01:bm=0.02` (qiymatlar kichik bo'lsin, kadr bilan tekshir).
  - Egri chiziq: `curves=preset=medium_contrast`
  - LUT qo'llash: `lut3d=file.cube`
  - Signal tahlili: `signalstats` (YAVG, SATAVG). Kadrdan oldin va keyin solishtir.

## HyperFrames tayyor retseptlari (aniq diapazonlar bilan)
### Natural Portrait — talking-head va boshlovchi uchun (bizning studiya videolari!)
- Boshlang'ich qiymat: `{"preset":"skin-soft","intensity":0.6}`. Bu butun kadrga ta'sir qiladi: teriga o'xshash ranglarda vibrance kamroq qo'llanadi. Yuzni silliqlamaydi va blur bermaydi.
- Ruxsat etilgan diapazonlar:
  - intensity 0.45–0.75
  - exposure −0.06…0.14
  - contrast −0.05…0.08
  - highlights −0.18…−0.04
  - shadows 0.04…0.18
  - whites −0.10…0.04
  - blacks −0.06…0.06
  - temperature −0.05…0.10
  - tint −0.03…0.05
  - vibrance 0…0.06
  - saturation −0.04…0.06
- Grain, blur va pixelate 0 da qoladi. Vignette faqat 0–0.05 va faqat fokusni yaxshilasa.
- Namuna: `{"preset":"skin-soft","intensity":0.58,"adjust":{"highlights":-0.08,"shadows":0.08,"temperature":0.02,"vibrance":0.02},"details":{"vignette":0.03}}`
- Natijani rad et, agar: teri g'ayritabiiy bo'lsa, yorug' joylardagi detal yo'qolsa, qora teri xiralashsa yoki kiyim va fon tasodifan bo'yalib qolsa.

### Product Polish — mahsulot (quti, shisha, qadoq) uchun
- Boshlang'ich qiymat: `{"intensity":0.7,"adjust":{"exposure":0.01,"contrast":0.06,"highlights":-0.1,"shadows":0.04,"whites":0.02,"blacks":-0.03,"vibrance":0.03,"saturation":0.02}}`
- Mahsulot rangi, yorliq o'qilishi, tekstura va yaltirashni himoya qil. Neytral namuna bo'lmasa, brend rangini "tuzatma".
- Manba allaqachon yaxshi bo'lsa, **piksellarga tegma**. Sifatni kompozitsiya va harakat bilan oshir.
- Natijani rad et, agar: oq qadoq "kuyib" ketsa, qora mahsulot loyqalansa yoki brend rangi siljisa.

### UI Fidelity — ekran yozuvi, sayt, ilova
- Rang tuzatish **umuman qo'llanmaydi**. Brend va grafik ranglari aniq qolishi kerak.

### Stilizatsiya retseptlari (faqat hikoya aniq talab qilsa)
- Film Memory — iliq xotira yoki flashback.
- 8mm Home Movie — oilaviy arxiv yoki bolalik xotirasi.
- Creator Camcorder — zamonaviy kamkorder uslubi.
- VHS Playback — eski videokasseta.
- CRT Display — eski monitor.
- Editorial Halftone, Two-Ink Print, Monochrome Screen Print — afisha yoki gazeta uslubi.
- Engraved Illustration, Crosshatched Sketch — chizma va gravyura.
- Procedural ASCII — terminal yoki kod uslubi.
- Ordered Palette Dither, Cached Error Diffusion — piksel-art yoki 1-bit.
- **Organic Light Leak** — iliq o'tish, bitta xotira lahzasi.
- **Freeze-Frame Cutout** — kadr to'xtaydi, odam kesib olinadi. Spikerni tanishtirish uchun yaxshi.
- **Social Flash / Editorial Reveal** — bitta kuchli kesim yoki "oldin/keyin" uchun. Har o'tishga ishlatma.
- Bu uslublarni umumiy LUT, qo'lda vignette va grain bilan yig'ma. Tayyor retseptni ishlat (`media-use/references/media-treatment-recipes.md`).

## Kayfiyat → rang
| Mavzu | Grading yo'nalishi |
|---|---|
| Sog'liq, oila, tabiiy mahsulot | Iliq, yumshoq, past kontrast, och yashil aksent. To'yinganlik o'rtacha |
| Premium, hashamat | Chuqur qoralar, kam to'yinganlik, iliq yorug'lik |
| Texnologiya | Sovuqroq, toza oqlar, yuqori kontrast |
| Retro va nostalgiya | Grain, ko'tarilgan qoralar, sariq-yashil tus |
| Kinematik | "Teal & orange", lekin teri tabiiy qolsin |
| Taom jarayoni, olov, ustaxona (2026-10-10, o'lchangan) | **"Olov kechasi":** qora 0 (ezilgan), yorug'lar krem ~210/177/141 (sof oq emas), go'shtda to'yinganlik 0.35–0.38, kuchli vinyetka (chet/markaz ~0.5) |
| Natija, joy, kunduz (2026-10-10, o'lchangan) | **"Kunduz havosi":** qoralar 11–14 ga ko'tarilgan, toza salqin oq 240/240/247, to'yinganlik 0.27–0.30, fon ko'k-yashil va mahsulot to'q sariq |

Ikki uslubni bitta videoda almashtirish (qorong'i jarayon → yorug' natija) — hikoya qurollaridan biri. ffmpeg retseptlari va o'lchov skripti: [[Zamonaviy reklama montaji]].

⚠️ Foydalanuvchi talabi: bachkana va neon ranglar ishlatilmaydi. Tabiiy, toza va jiddiy ko'rinish kerak ([[Video montaj uslubi]]).

## Tayyor LUT paketlari — sinov natijasi (2026-10-17)
Telegram guruhidagi LUT'lar 3 ta haqiqiy kadrga (quyoshli tashqari, tabiat, qo'l + telefon) ffmpeg `lut3d` bilan qo'llandi. Varaqlar: `D:\claude_ish\namunalar\pro_montaj_tg\_lut_test\` (skript: `../_vositalar/lut_test.py`).
| LUT | O'lchangan ta'sir | Xulosa |
|---|---|---|
| **TC seriyasi** (Chroma, Delux, Luma, Lux, Prisma, Process, Radiant, Spectrum, Technicolour, Transcend, Vivid, Wavelength; 33³) | to'yinganlik **+15…+27%**, kontrast +2…6%, soyalar **ko'k-yashil** (masalan RGB 10,31,32), yorug'lar iliq. LUX/PRISMA eng iliq | Klassik **teal-orange**. Oddiy telefon videosida to'liq kuchda teri to'q sariq bo'ladi, soyalar "kuyadi". **20–40% intensivlikda** yoki faqat yassi (log/flat) materialda ishlat |
| **Zeke 39** (32³) | yorug'lik −0.14, kontrast −0.10, deyarli rangsiz, soyalar jigarrang | So'lgan kino / sepiya. Xotira yoki flashback uchun |
| **1_LUT (Black Magic Camera)** | qorong'ilashtiradi (−0.16), qizilni portlatadi | Faqat **Blackmagic Camera ilovasida log** bilan olingan video uchun. Oddiy videoga yaramaydi |
| `__…cube` (4 KB) | ffmpeg o'qimaydi | Bular LUT **emas** — Mac'ning `._` AppleDouble izlari. Chatdagi "LUT qo'ysam xato beryapti" shikoyatining sababi shu |

**Qoidalar:** avval correction (oq balans, ekspozitsiya), keyin LUT. LUT kuchini pasaytirib, teri rangini vektorskopda tekshir. Chatdagi tanqid ham shu haqda: "glow/LUT'dan keyin odam terisi qizarib ketgan" ([[Montaj xatolari - hamkasblar tanqidi]]). Guruhda kamera uchun LUT'lar ham bor: DJI Osmo Pocket 3/4 D-Log, DJI Action/Nano, iPhone Log → Rec709, "CONVERT LOG". Kamera log rejimida olgan bo'lsa, birinchi qadam shular.

Manbalar: [dehancer — correction vs grading](https://www.dehancer.com/learn/article/color-grading-color-correction-a-practical-guide-for-beginners), [pinnacle — selective vectorscope](https://www.pinnaclesys.com/en/landing/color-grading/selective-vectorscope/), [dslrvideoshooter — workflow](https://dslrvideoshooter.com/my-color-correction-workflow/); HyperFrames `media-use/references/grading.md`

Markaz: [[Video montaj]]

## Spiker kadri stokdan "xira" ko'rinsa (2026-10-20, sinalgan)
Sabab: Sony log/past kontrast — oq nuqta 175–190, o'rta ton qorong'i, mahalliy kontrast yo'q. Yechim (`_primer/tools/autograde.py`): per-manba daraja cho'zish + mediana bo'yicha gamma + yengil S-egri + CLAHE (faqat farq qo'shiladi, L kanal) + yengil unsharp; stokka kuchsizroq (0.35). O'lchov: p1/p50/p99 yorug'lik va Laplacian dispersiyasi — kadrlar orasida yaqin bo'lsin.
