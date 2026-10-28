---
tur: bilim
sana: 2026-10-09
teglar: [motion, namuna, tahlil, before-after, kinetik-matn, portfolio]
---
# Namuna tahlili: gayrat.motion — "Oddiy kadrdan professional motiongacha" (nomlab)

Fayl: `_namunalar/motion/_kiruvchi/n1009_01.mp4` (asli `Desktop/claude/1.mp4`). 28.6 s, 720×1280, 30 fps, −14.3 LUFS, LRA 3.8. Musiqa ~92 BPM (bass zarbasi har 0.65 s, 9.15 s dan boshlab). Nutq whisper'da tanilmadi.
Janr: **motion dizayner portfoliosi (oldin/keyin)** + "nomlab" brend-nom xizmati reklamasi.

## Asosiy sir
1. **Oldin/keyin bitta kadrda.** Oq fon, chapda kichik "xom" kadr (ustida "$10" yorlig'i), o'ngda katta "tayyor" kadr ("$50" yorlig'i), ikkalasi bir vaqtda o'ynaydi. Ostida "Oddiy kadrdan — **professional motiongacha**", eng pastda imzo "gayrat • motion". Narx yorlig'i qiymatni darhol tushuntiradi.
2. **Har 2–3 s da yangi vizual hodisa**, lekin layout o'zgarmaydi. Ko'z doim o'ng kadrda.
3. **Matn — diktor so'zlari, kalit so'z katta.** Kichik ingichka/italik qator ("bir marotaba", "nomingizni esa", "aynan shu ishni") + ostida katta siqiq qalin so'z ("YANGILAYSIZMI?", "HECHQACHON!", "NOMTOPAMIZ", "MUTLAQO BEPUL").

## Tuzilma
| Vaqt | Nima bo'ladi |
|---|---|
| 0–0.75 | **Piksel-olov ochilish:** bo'sh koridor, odam kvadrat piksellar ichidan olovsimon to'q sariq yorug'lik bilan "yonib" paydo bo'ladi (pixel dissolve + glow). |
| 0.75–2.2 | Orqada katta konturli "LOGO" so'zi (odam orqasida, oq kontur, ichi shaffof) + kichik toj ikonkalari. Oldinda "HAR 5-10 YILDA" so'zma-so'z chiqadi. |
| 2.25–5.0 | **Kesim:** oq-qora, yaqin, yon burchakdan kadr (qo'lda ushlangan, titroq). "bir marotaba / YANGILAYSIZMI?" — katta so'z harfma-harf chapdan wipe. Keyin "nomingizni esa / HECHQACHON!". |
| 5.0 | **VHS/scanline glitch o'tish** (1–2 kadr gorizontal chiziqlar). |
| 5.25–7.25 | Qora fon, "nomlab" logotipi. Atrofiga **qo'lda chizilgan doira** (scribble, bir necha qatlam) chiziladi. Ostida "LOGO"dan ko'ra ko'proq" yoziladi, "ko'proq" tagiga qo'lda chizilgan chiziq. |
| 7.5 | **Invert:** qora → oq bir kadrda (oq flash). "urg'u ajratish shart". |
| 9.0–12.5 | Odam o'rtacha planda, "nomlab" logotipi ko'krak oldida, ustida kichik "aynan shu ishni", pastda so'zma-so'z "siz uchun ... amalga oshiradi". |
| 13–16.7 | Kichik oq subtitr ko'krak darajasida; "NOM TOPAMIZ" chapdan wipe. |
| 16.7–24 | **Punch-in:** yaqin plan (~1.4×). "PATIENTDAN" — harflar chapdan o'ngga ochiladi, ustida yorliq "o'zingiz topgan nom". "MUTLAQO BEPUL". |
| 24.25 | **Haze dip:** kadr 1–2 kadrga kulrang tumanga botadi va keng planga qaytadi (yumshoq kesim). |
| 26.25–28 | Telefon raqami "33 240 40 40" raqamlari gorizontal motion blur bilan uchib kiradi. |

## O'rganiladigan usullar
- **Piksel/olov reveal** — odamni "materializatsiya" qilish. HyperFrames: niqobga piksel-blok shader yoki registry'dan `pixel`/`dissolve` qidir.
- **Katta konturli so'z odam orqasida** (`-webkit-text-stroke`, `color: transparent`) + oldida qalin so'z — ikki qatlam chuqurlik beradi ([[Matn bosh orqasida - professional usul]]).
- **Oq-qora yaqin kadr** — hissiy savolni ajratadi (rangdan B&W ga o'tish = "jiddiy lahza").
- **Qo'lda chizilgan doira va chiziq** — SVG `stroke-dashoffset`, 0.4–0.6 s, notekis (jitter) yo'l. "Inson qo'li" hissi beradi.
- **Invert flash** — qora sahnadan oq sahnaga bitta kadrda. Urg'u.
- **Raqamlar motion blur bilan** — har guruh chapdan `x` + `filter: blur(x)` bilan uchib kiradi.

## Bizga qo'llash
- **Mediazone uchun portfolio Reels formati:** "Oddiy kadrdan — professional montajgacha" — xom va tayyor videoni yonma-yon ko'rsatish. Bizning NEIROZOL ishlarimiz uchun tayyor shablon.
- HyperFrames'da: 2 ta `<video>` (xom + render), oq fon, `box-shadow`, narx yorliqlari — 100% qilsa bo'ladi.

Markaz: [[Motion design]] · Ro'yxat: [[Motion namunalar kutubxonasi]] · Xulosa: [[Namunalar xulosasi - 2026-10-09]]
