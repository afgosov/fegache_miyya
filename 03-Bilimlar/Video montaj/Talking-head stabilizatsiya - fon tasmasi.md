---
tur: bilim
sana: 2026-10-21
teglar: [stabilizatsiya, talking-head, faza-korrelyatsiya, opencv]
---
# Talking-head stabilizatsiya — fon tasmasi faza korrelyatsiyasi

Qo'lda olingan intervyu/boshlovchi kadrlari uchun ([[Vesta Quadro (Akfa Lighting) Reels]] v2 da ishlab chiqildi).

## Nega LK+RANSAC yaramadi
Boshlovchi kadrning katta qismini egallaydi, qo'lida mahsulot. Fon esa bir xil parda yoki oq devor bo'ladi, unda nuqta kam. Natijada nuqtalar qo'l, ramka va qadoqqa tushadi va "titrash" yolg'on chiqadi ([[Video montaj texnik xatolari]] #163).

## Ishlaydigan usul
1. **O'lchash:** bosh ustidagi tasmani olasan (devor bezaklari, parda burmalari, shift). Yaqin planda esa kadrning chap/o'ng chetlari va tepasini olasan. Har tasmada `cv2.phaseCorrelate` + Hanning oynasi ishlatiladi. Javob > 0.08–0.12 va siljish < 12–25 px bo'lsa baho qabul qilinadi. Bir nechta tasma bo'lsa, ularning **medianasi** olinadi. Fon ishonchsiz kadrda zaxira sifatida yuz siljishi ishlatiladi (ko'z burchaklari + burun ildizi).
2. **Tuzatish:** `Gauss(sigma) − xom` hisoblanadi. 1-bosqichda manba kanvasida sigma 12 (0.5 s), 2-bosqichda tayyor kadrda sigma 7. Natija ±16/28 px bilan cheklanadi, chunki katta qiymat haqiqiy kamera harakati bo'ladi.
3. **Chegara:** bo'lak ichida zoom doimiy bo'ladi (1.035 yoki kerakli darajada hisoblanadi). Zoom kadrma-kadr o'zgarmaydi.
4. **Tekshiruv:** tayyor videoda fon tasmasining yuqori chastotali titrashi o'lchanadi va oldingi versiya bilan solishtiriladi. Shtativ kadrlar (titrash < 0.25 px) umuman stabilizatsiya qilinmaydi.

Natija (Vesta): titrash 41–85% kamaydi, barqaror kadr buzilmadi.

Bog'liq: [[Stabilizatsiya - niqobli o'xshashlik (v12)]] · [[Klassik montaj konveyeri (motion'siz)]] · Markaz: [[Video montaj]]
