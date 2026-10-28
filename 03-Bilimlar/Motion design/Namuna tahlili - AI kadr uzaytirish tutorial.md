---
tur: bilim
sana: 2026-10-09
teglar: [motion, namuna, tahlil, tutorial, ekran-yozuvi, virtual-kamera, subtitr]
---
# Namuna tahlili: "AI bilan kadrni uzaytirish" tutoriali (Invideo, Porsche)

Fayl: `_namunalar/motion/_kiruvchi/n1009_02.mp4` (asli `2mp4.mp4`). 53.7 s, 720×1280, 30 fps, −14.1 LUFS. 1 ta haqiqiy kesim (3.3 s), qolgani bitta uzluksiz "virtual kamera".
Janr: **dasturiy tutorial / reklama integratsiya** (Invideo, 50% chegirma).
Ssenariy: "E'tibor berdingizmi? → original kadr juda qisqa edi, qolgan qismini AI generatsiya qildi → qanday qildim (timeline, agent, prompt) → effekt bilan ulash → natija → 'Invideo' → 50% chegirma".

## Asosiy sir
1. **Ekran yozuvi hech qachon "tekis" ko'rsatilmaydi.** Butun dastur oynasi bitta katta tasvir, ustida **virtual kamera** yuradi: kerakli joyga zoom-in, pan, biroz 3D qiyshayish. Kesim deyarli yo'q — kamera bir joydan ikkinchisiga "uchadi".
2. **Bir rang — sariq urg'u** (#F5C542 atrofi) qora/kulrang UI ustida: subtitr, strelkalar, ramkalar, playhead, "50%".
3. **So'zma-so'z subtitr:** bitta so'z, sariq, kichik, kadrning past-o'rtasida, diktor aytgan payt chiqadi ("Shunchaki" → "kadrni" → "taymlaynga" → "tashladim").

## Tuzilma va usullar
| Vaqt | Nima bo'ladi |
|---|---|
| 0–1.3 | Porsche kadri letterbox'da. |
| 1.3–3.3 | **Pauza + ishora (hook):** kadr to'xtaydi, halftone (nuqtali) tekstura qoplanadi, pleyer UI (▶, 🔊) chiqadi, sariq qo'lda chizilgan strelka g'ildirakka ko'rsatadi: "E'tibor berdingizmi?". |
| 3.3–12 | Timeline ekrani. Kamera kliplar chegarasiga zoom qiladi. **Sariq porlovchi vertikal chiziq** = kesim joyi. Qavs (bracket) "1 sekund" / "4+ sekund", ostida strelka + "Kadr tugadi" / "AI bilan generatsiya qilingan". Audio to'lqin yashil neon bilan porlaydi. |
| 12.3 | **Defokus o'tish:** kadr kuchli blur bo'ladi, ustida matn, keyingi sahna blur'dan chiqadi. |
| 13–15 | UI panellari **sariq ramka** bilan ajratiladi ("Invideo Timeline Editor"). |
| 16–34 | Fayl tortib tashlanadi, AI agent chati, prompt matni yoziladi, "Quick question" oynasi — kamera har bir amalga yaqinlashadi. |
| 36–40 | After Effects'da effekt qidirish (`s_dissolve`), kamera keskin zoom. |
| 40–46 | **Natija kartochkasi:** video sariq ramkali yumaloq kartochkada, ostida sariq progress bar (scrubber) yuradi; orqa fon xira. |
| 46–48 | Qidiruv maydonida "Invideo" harfma-harf teriladi → so'z ajralib, qo'shtirnoq ichida porlaydi. |
| 48–52 | 3 ta narx kartochkasi pastdan stagger bilan chiqadi, xiralashadi, ustiga **oltin metall "50%"** zarb bilan, ostida "Chegirmali". |

## O'rganiladigan usullar
- **Virtual kamera ekran yozuvi ustida** — HyperFrames: skrinshot/yozuvni bitta `div` ga qo'yib, `scale`+`x/y` bilan kamera yo'li ([[Professional kesim texnikalari]]). Har to'xtash 1.5–3 s, harakat 0.5–0.7 s `power3.inOut`.
- **Pauza + chizilgan strelka hook'i** — "freeze frame + annotatsiya". Qiziqish uyg'otadi.
- **Bracket + strelka annotatsiyalari** — tushuntirish videolarida aniq ko'rsatish.
- **Natija = scrubber'li kartochka** — tayyor videoni "pleyer" ichida ko'rsatish.
- **Qidiruv maydoniga yozish = brend nomini aytish** (UI orqali CTA).
- **Oltin metall raqam** — gradient + ichki yorug'lik, chegirma uchun.

## Bizga qo'llash
- Mediazone uchun **"qanday qildik" (behind-the-scenes) Reels** — montaj jarayonini shu uslubda ko'rsatish.
- [[Video montaj uslubi]]: sariq o'rniga och yashil urg'u ishlatiladi.

Markaz: [[Motion design]] · Ro'yxat: [[Motion namunalar kutubxonasi]] · Xulosa: [[Namunalar xulosasi - 2026-10-09]]
