---
tur: bilim
sana: 2026-10-09
teglar: [motion, montaj, sfx, zoom, xulosa, qoidalar, namuna]
---
# Namunalar xulosasi — 7 video (2026-10-09)

Foydalanuvchi "sound effektlar, motion kadrlar, montaj, zoomlar — hammasini o'rganib ol" deb yuborgan 7 namunadan umumiy qoidalar. Ish paytida **shu sahifadan boshla**, tafsilot — har bir namunada.

| # | Namuna | Janr | Eng kuchli usul |
|---|---|---|---|
| 1 | [[Namuna tahlili - gayrat.motion before-after]] | portfolio oldin/keyin | xom va tayyor kadr yonma-yon + narx yorlig'i |
| 2 | [[Namuna tahlili - AI kadr uzaytirish tutorial]] | dastur tutoriali | ekran yozuvi ustida virtual kamera, sariq annotatsiyalar |
| 3 | [[Namuna tahlili - Komfort zona infografika]] | explainer | 3 qatorli matn ierarxiyasi, rang = ma'no, bitta diagramma |
| 4 | [[Namuna tahlili - AI agent montaj UI-hikoya]] | UI-hikoya | chat orqali hikoya, zoom-in/out + blur, kalit so'zli CTA |
| 5 | [[Namuna tahlili - SFX paket promo]] | mahsulot promo | taymer sanoq → bass drop, jimlikdagi UI SFX |
| 6 | [[Namuna tahlili - AI montajchi maksimalist]] | yoshlar fikr-video | stiker matn, kursor-kesish, doira bo'ylab matn |
| 7 | [[Namuna tahlili - Kino dialog sahnasi]] | qisqa film | kameraga qarab gapirish, simmetriya, final POV |

## 1. Ovoz effektlari (SFX) — qoidalar
- **Har ko'rinadigan harakatga ovoz:** UI bosish = click, menyu = soft tick, g'ildirak = ratchet, oyna ochilishi = swish, zoom o'tish = whoosh, sarlavha zarbasi = impact/thump. (#4, #5)
- **Drop'dan oldin jimlik:** musiqani 2–5 s butunlay olib tashlab, faqat aniq SFX qoldirish → keyin drop. Kontrast = kuch. (#5)
- **Vizual sanoq musiqa drop'ida tugaydi** (3-2-1, progress, taymer). Musiqani drop kadri sanoq tugagan kadrga tushadigan qilib kes. (#5)
- **Diktorsiz video = musiqa + SFX hikoya qiladi**; o'tishlar zarbaga (128 BPM → har 0.47 s, sahna 2–4 zarb). (#4)
- **Dialog/hikoyada musiqa kech kiradi** va eng og'ir gapda ko'tariladi, oxirida to'liq jimlik. (#7)
- Hamma namunalar **−14…−14.8 LUFS** — Instagram standarti. Biznikida ham shunday ([[Ovoz miksi va mastering]]).
- SFX boshidagi jimlikni kes ([[Video montaj texnik xatolari]] #8) — aks holda zarba kechikadi.

## 2. Zoom va kamera — qoidalar
- **Punch-in** (1.0 → 1.3–1.4×) — urg'uli gapda yaqin planga sakrash, kesim o'rnida. (#1)
- **Zoom-in/zoom-out + motion blur** (0.25–0.5 s) — ekran/qurilma ichiga "sho'ng'ish" va chiqish; zoom-out lahzasi = katta sarlavha joyi. (#4)
- **Virtual kamera** — ekran yozuvi yoki katta kompozitsiya ustida pan/zoom, kesimsiz. To'xtash 1.5–3 s, harakat 0.5–0.7 s `power3.inOut`. (#2)
- **Whip (chapga/o'ngga motion blur)** — sahnalar orasida, 2–4 kadr. (#3, #6)
- **Rack-defokus** — fon xiralashadi, ustida CTA yoki keyingi matn. (#2, #5)
- **Barrel roll** (360° aylanish) — faqat energik uslubda. (#6)
- ⚠️ Zoom chegarasi: odam kadrdan chiqmasin ([[Video montaj texnik xatolari]] #29).

## 3. Montaj (kesim) — qoidalar
- **Bir jumla = bir ekran** (explainer, #3). **Bir replika = bir kesim** (dialog, #7).
- **Kesim o'rniga "vizual hodisa"** ham bo'ladi: layout o'zgarmay, ichida matn/rang/zoom almashadi (#1, #2). Tomoshabin uchun o'zgarish har 1.5–3 s da.
- **Oq-qora yoki yaqin kadr = jiddiy lahza** (#1); **keng plan = nafas** (#7).
- **Doira-niqob o'tish** (clip-path circle 0→150%) — grafikdan suratga. (#3)
- **Glitch/VHS, invert flash, haze dip** — 1–2 kadrlik qisqa o'tishlar, urg'u uchun, ko'p emas. (#1)
- **Final ma'noni ochadi:** oxirgi kadr butun hikoyani yig'adi (diagramma #3, POV #7, izohlar stack'i #4).

## 4. Matn (motion tipografiya) — qoidalar
- **Ierarxiya:** kichik kontekst → o'rta jumla → **katta qalin xulosa.** (nuqta bilan). (#1, #3)
- **Kalit so'z rangda** (ma'noga mos: qizil = muammo, yashil = yechim). (#3)
- **Bitta so'z = bitta zarb** hook'i — katta siqiq shrift bosh tepasida, diktorga sinxron. (#5)
- **So'zma-so'z subtitr** — bitta so'z, kichik, urg'u rangida (tutorial uslubi). (#2)
- **Matn chiqishi:** blur → aniq (0.3 s) — eng ko'p uchraydi; harflar wipe; strike-through bilan inkor. (#1, #3)
- **Qo'lda chizilgan elementlar** (doira, strelka, tagiga chiziq) — "inson qo'li", premium his. (#1, #2)
- **CTA:** qo'shtirnoqli kalit so'z ("Ovoz", "O'ZIM", "Invideo") — 4 namunada bor. Ijtimoiy isbot (izohlar stack'i) bilan kuchliroq. (#2, #4, #5)

## 5. HyperFrames'da nima osonroq
- ✅ 100%: #3 (infografika), #4 (UI-hikoya), #1 layouti, #2 annotatsiyalari, #5 taymer UI.
- ⚠️ AI kontent kerak: #6 (stilizatsiya, anime, 3D cartoon), #3 suratlari → [[AI video vositalari 2026]].
- 🎬 Kamera ishi: #7 (simmetrik kadr, grading) — suratga olishda rejalash.

## Foydalanuvchi uslubiga moslash
[[Video montaj uslubi]]: sokin, och yashil + oq, bachkana emas. Shuning uchun **#3, #4, #1, #7** usullari asosiy; #5 ning sanoq/jimlik g'oyasi yumshoq SFX bilan; #6 dan faqat alohida elementlar.

Markaz: [[Motion design]] · [[Video montaj]] · Kutubxona: [[Motion namunalar kutubxonasi]]
