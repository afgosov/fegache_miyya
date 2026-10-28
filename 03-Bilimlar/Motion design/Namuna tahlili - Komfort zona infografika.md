---
tur: bilim
sana: 2026-10-09
teglar: [motion, namuna, tahlil, infografika, tushuntirish, minimal, hyperframes]
---
# Namuna tahlili: "Komfort zonadan chiqish" — minimal infografik tushuntirish

Fayl: `_namunalar/motion/_kiruvchi/n1009_03.mp4` (asli `3.mp4`). 69.9 s, 720×1280, **24 fps**, −14.1 LUFS, LRA 1.9 (juda tekis — diktor ovozi asosiy). Kesimlar: 4.9 va 46.8 s; qolgani bitta grafik oqim.
Janr: **ta'limiy tushuntirish (explainer)**, Apple keynote uslubi. Diktor faqat birinchi 5 s kadrda, keyin ovoz.

## Asosiy sir
1. **Diktorning har jumlasi = bitta ekran, bitta g'oya.** 3 qatorli matn ierarxiyasi:
   - kichik kulrang kontekst ("Hamma biladi"),
   - o'rta oq qator ("Komfort zonadan chiqmasang —"),
   - **katta qalin xulosa, nuqta bilan** ("rivojlanmaysan.").
   Har qator diktor aytganda **blur → aniq** bo'lib chiqadi (~0.3 s).
2. **Rangga ma'no berilgan:** ko'k = komfort, qizil = qo'rquv, sariq = o'rganish, yashil = o'sish. Matndagi kalit so'z ham shu rangda.
3. **Bitta oddiy shakl tili:** doira + nuqta. Doira chiziladi (stroke), kattalashadi, ichiga yangi halqa qo'shiladi. Oxirida 4 halqa birlashadi — butun hikoya bitta diagrammada.
4. Fon: to'q navy `#08112B`, ozgina vinyetka. Shrift: neo-grotesk (Inter/SF Pro uslubi).

## Tuzilma
| Vaqt | Nima bo'ladi |
|---|---|
| 0–1 | Diktor oq fonda. Orqada juda katta "JudA" (serif + sans aralash) — bosh orqasida. "ko'pchilik" kichik qo'shiladi. |
| 1–3.3 | Grafik: "COMFORT" siqiq baland shrift + qizil qo'lyozma "zonadan". Atrofida 2 halqa chiziladi, orbitada 3 qizil ikonka (to'xtab qolish belgilari). |
| 3.3–4.9 | **Whip:** grafik chapga motion blur bilan ketadi, diktor yon tomondan yaqin planda kiradi. Bosh tepasida chap/o'ngda so'zlar navbatma-navbat ("buni / asosiy / sababi / bor"). |
| 4.9–8 | Navy fon. Doira stroke bilan chiziladi + oq nuqta (odam). "Komfort zona". 3 qatorli matn. Nuqta doira ichida tebranadi. |
| 8–12.7 | Doira chapga suriladi, strelka chiziladi → **punktir doira "?"**. "Komfortdan keyin — rivojlanish" → "rivojlanish" **qizil chiziq bilan ustidan chiziladi** → "emas." |
| 13–16.7 | "?" qizil doiraga aylanadi, kattalashadi, ko'k doirani o'z ichiga oladi: "Bu — qo'rquv zonasi." |
| 17–20 | **Ro'yxat kartochkalari:** "Bahonalar" sarlavha, ostida raqamli qatorlar (01 Boshqalarning fikri, 02 Ichki qarshilik) pastdan blur bilan, oldingisi xiralashadi. |
| 24–28 | 4 rangli nuqta chiziq bo'ylab ketma-ket chiqadi → vertikal ro'yxatga aylanadi (morph). Faol qator rangli, qolganlari xira. |
| 44–51 | **Doira-niqob o'tish:** "2 bosqich" qizil doirasi ichida AI surat paydo bo'ladi, doira butun ekranga kengayadi. Surat ustida matn + **qizil annotatsiya doirasi** mikrofonni ko'rsatadi. Keyingi surat xira crossfade. |
| 64–68 | Final: 4 konsentrik halqa birma-bir chiziladi, legend, yashil "birinchi belgisi." |

## O'rganiladigan usullar
- **3 qatorli matn ierarxiyasi** (kontekst / jumla / xulosa.) — eng foydali shablon.
- **Ustidan chizish (strike-through) + "emas."** — fikrni inkor qilishning vizual usuli.
- **Punktir doira "?"** = noma'lum; keyin u to'liq rangli doiraga aylanadi = javob.
- **Faol qator ajratish** — ro'yxatda hozirgi punkt yorqin, qolgani 30% opacity.
- **Doira-niqob reveal** — `clip-path: circle(r)` 0 → 150%.
- **Bitta diagramma hikoya bo'ylab o'sadi** — oxirida hamma narsa bir rasmda (xulosa).

## HyperFrames — 100% qilsa bo'ladi
Faqat SVG doiralar, matn va 2–3 ta AI surat. [[Tayyor Reels shablonlari]] dagi "tushuntirish" shabloniga to'liq mos. NEIROZOL uchun: "stress → uyqusizlik → charchoq" zanjiri shu uslubda (och yashil + oq, [[Video montaj uslubi]]).

Markaz: [[Motion design]] · Ro'yxat: [[Motion namunalar kutubxonasi]] · Xulosa: [[Namunalar xulosasi - 2026-10-09]]
