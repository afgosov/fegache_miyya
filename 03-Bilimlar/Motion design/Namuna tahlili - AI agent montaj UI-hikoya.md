---
tur: bilim
sana: 2026-10-09
teglar: [motion, namuna, tahlil, ui-motion, macos, cta, hyperframes]
---
# Namuna tahlili: "AI agent bilan Reels montaj" — macOS UI-hikoya

Fayl: `_namunalar/motion/_kiruvchi/n1009_04.mp4` (asli `4.mp4`). 30.1 s, 720×1280, 30 fps, −14.2 LUFS. **Diktor yo'q** — faqat musiqa (~128 BPM, zarb 0.47 s) + UI SFX.
Janr: **UI-hikoya (screen story)** — xizmat/kurs reklamasi. Hammasi soxta macOS interfeysida (Finder menyusi o'zbekcha, dock, MacBook ramkasi). Ehtimol HTML'da yasalgan — bizning HyperFrames'ga eng mos janr.

## Hikoya (diktorsiz, faqat UI orqali)
| Vaqt | Nima bo'ladi |
|---|---|
| 0–3 | Chat oynasi "Mijoz — onlayn": "Instagram uchun reels kerak edi", "yozmoqda..." → "Lekin o'ylab qoldim... montajni o'zim ham qila olaman-ku?" (muammo). |
| 3.25 | **Zoom-blur o'tish** (kamera chapga uchadi, kuchli motion blur). |
| 3.5–5 | "AI agent — montaj" oynasi, kursor bosadi, "reels montaj qil" harfma-harf teriladi, ↑ bosiladi. |
| 5.25–6 | **Zoom-out:** butun MacBook ko'rinadi, tepada katta "**Bitta buyruq.**" chapdan kiradi, pastda kichik "AI agent montajni boshladi" teriladi. |
| 6.25–7 | Checklist oqimi: "✓ Ssenariy va hook yozildi / ✓ Sahnalar rejalashtirildi / ✓ Shrift va ranglar / SFX va mu..." — har qator yashil nuqta bilan, matn terilib boradi. |
| 7–11 | After Effects oynasi + **soat time-lapse**: 23:47 → 23:48 → ... → 00:12, render progress bar to'ladi. |
| 11–11.75 | Zoom-out: "**20–30 daqiqa.**" (to'q sariq), "render tayyor · 1 ta buyruq". |
| 12–15 | "Portfolio — tayyor ishlar" — vertikal video kartochkalar **gorizontal karusel**, har biriga kursor tegadi, keyingisiga motion blur bilan suriladi. |
| 15–23 | Chatga qaytish: tayyor video yuboriladi, "Shuncha tezmi?! 25 daqiqada?", "AI agent. Bitta buyruq", "Menga ham shunaqa kerak!" → javob "Tizimni ko'rsataman — direktga 'O'ZIM' deb yozing". |
| 23.25–30 | Eslatmalar oynasi: "Izohga / **O'ZIM** / deb yozing" (to'q sariq ulkan), tepada Instagram bildirishnomalari stack: "s***_smm izoh qoldirdi: O'ZIM" ×3 (ijtimoiy isbot). |

## O'rganiladigan usullar
- **Hikoya chat orqali** — muammo, savol, javob, CTA hammasi xabar pufakchalarida. Diktor kerak emas.
- **Zoom-in/zoom-out + motion blur** har sahna almashuvida (0.25–0.5 s, zarbaga). Kamera "ekran ichiga sho'ng'iydi" va "chiqadi".
- **Zoom-out = sarlavha lahzasi:** qurilma kichrayadi, bo'shagan joyga katta sarlavha ("Bitta buyruq.", "20–30 daqiqa.").
- **Soat time-lapse** — vaqt tejalishini raqam bilan ko'rsatish.
- **Checklist streaming** — AI ishlayotganini ko'rsatish (har 0.25 s yangi qator).
- **Kalit so'zli CTA + soxta izohlar stack'i** — boshqalar allaqachon yozyapti (FOMO).
- Ranglar: macOS qorong'i UI + binafsha-qizil gradient fon + to'q sariq urg'u `#F7941D`.

## HyperFrames — 100%
Chat, dock, oynalar, kursor, terish, checklist, soat — hammasi HTML/CSS + GSAP. [[Namuna tahlili - McDonald's ilova reklamasi]] dagi kursor-hikoyachi bilan bir oila. Mediazone xizmatlari reklamasi uchun tayyor formula: **mijoz chati → muammo → bizning yechim → natija → kalit so'zli CTA**.

Markaz: [[Motion design]] · Ro'yxat: [[Motion namunalar kutubxonasi]] · Xulosa: [[Namunalar xulosasi - 2026-10-09]]
