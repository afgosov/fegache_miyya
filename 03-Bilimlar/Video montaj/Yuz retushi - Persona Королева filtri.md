---
tur: bilim
sana: 2026-10-20
teglar: [retush, beauty, persona, yuz, mediapipe, opencv, video]
---
# Yuz retushi — Persona "Королева" filtri (videoda, lokal)

Foydalanuvchi tilida **"odam yuziga persona"** = Persona ilovasidagidek beauty-retush. U "Красота" bo'limidagi **"Королева"** obrazini **o'rtacha (~50%)** kuchda xohlaydi. Bo'limda boshqa obrazlar ham bor: Ретушь, Поцелуй, Натуральная.

## "Королева" tarkibi (ilova skrinshotidan, 2026-10-20)
- Silliq, yorug', bir tekis teri ("chinni" teri) va yengil "sianie".
- **Qora qanotli qalam (strelka)**, aniq va to'q qosh, ko'z biroz kattalashgan.
- **Pushti-atirgul (nude-pink) yaltiroq lab**, biroz to'ldirilgan.
- Yengil rumyana yonoq suyagida, yuz biroz V-shaklda ingichka.
- Fon va kiyim rangi o'zgarmaydi: effekt faqat yuzga ishlaydi.

## Skript: `koroleva.py` (MediaPipe FaceLandmarker + OpenCV)
`python koroleva.py kirish.mp4 chiqish.mp4 --kuch 0.5 --taqqos taqqos.mp4 --rasm oldin_keyin.jpg`
1. **1-o'tish:** har kadrda 478 nuqta (model `~/.cache/mp/face_landmarker.task`, VIDEO rejim). Nuqtalar vaqt bo'yicha **ikki tomonlama Gauss (σ=1.5 kadr)** bilan silliqlanadi, bu kechikishsiz va strelka titramaydi. Yuz yo'qolsa, ≤8 kadrlik uzilish to'ldiriladi, uzunrog'ida effekt sekin o'chadi.
2. **Teri niqobi:** yuz ovali minus ko'z, qosh, lab va **burun teshiklari** (`NOSTRIL_R=[218,237,44,238,20,60,75,59,166]` va ko'zgu juftlari). Bunga YCrCb bo'yicha teri rangi ehtimoli ko'paytiriladi (median/MAD, qoramtir piksellar chiqariladi), shunda soch tolalari va soyalar silliqlanmaydi.
3. **Silliqlash:** yuz ~220 px ga kichraytiriladi → **guided filter (r=4, eps=0.0008)** → dog'lar (black-hat L, top-hat a*) to'ldiriladi → kattalashtiriladi → nozik tekstura (`img − blur(σ≈0.9/sc)`) **60%** qaytariladi.
4. **Lab:** qizarish tekislanadi, L +3, ko'z osti yoritiladi, rumyana (a+3), qosh −20%, ko'z keskinligi, strelka (L 10, iliq qora), lab (a 32, b 13, yaltiroq +7). Tish oqartiriladi (b −35%).
5. **Sianie:** faqat yorug' teri joylariga (soyalarni yoritmaydi) + mayda donadorlik.
6. **Shakl:** bitta siljish maydoni (V-yuz 4%, ko'z +5%, lab vertikal +9%) → `cv2.remap`.
- Tezlik: ~0.12 s/kadr (kadrdagi kichik hududlarda ishlaydi). 17 s Reels ≈ 2–4 daqiqa (CPU band bo'lsa sekinroq).

## O'rganilgan saboqlar
- **Bilateral 2 marta (past rezolyutsiyada) → "katak/dog'" artefakti** yaqin planda. **Guided filter** toza chiqadi.
- **Burun teshiklari** rang ehtimoli bilan to'liq chiqmaydi: chetlari silliqlanib, burun "yassi" bo'ladi. Landmark bilan teshik qilish kerak.
- **Screen-blend nuri** qorong'i joylarni ko'proq yoritadi, shuning uchun nur `smoothstep(35,65,L)` bilan cheklanadi.
- **Keng kulgida tish chekkasi lab niqobiga tushadi** va labda och-pushti chiziq chiqadi. Yorug' va rangsiz (tishga o'xshash) piksellar labdan chiqariladi.
- **Rawvideo truba rangni qoraytiradi**, bu [[Video montaj texnik xatolari]] #145 da yozilgan.
- Avtomatik retushda ehtiyot bo'l ([[Video montaj texnik xatolari]] #47): hamma narsa yuz niqobi ichida bo'lishi kerak.
- Teri teksturasini to'liq o'chirma, aks holda "multfilm" bo'ladi (AI avatar - shaxsiy brend videolari).

## Sinov (2026-10-20)
Mixkit bepul kliplari: 42323 (vertikal influencer, 1080×1920) va 33553 (yaqin plan 720p). Yuz 99–100% kadrda topildi. Natija: teri, strelka, lab va V-yuz Persona'ga o'xshash chiqdi, fon o'zgarmadi.

Bog'liq: [[Rang tuzatish va grading]] · [[Video montaj]] · Foydalanuvchi

## Erkak boshlovchi: yengil retush + tish oqartirish (2026-10-21, [[Vesta Quadro (Akfa Lighting) Reels]] v2)
- `beauty.py` 0.62 (makiyajsiz) + qizil dog'lar: Lab a* mahalliy o'rtachadan (Gauss 0.06·yuz) oshgan qismi −60% (yonoq qizilligi saqlanadi).
- **Tish:** ichki lab konturi `[78,191,80,81,82,13,312,311,310,415,308,324,318,402,317,14,87,178,88,95]` ichida, L > max(70, 0.55·p85) va a* < 152 (lab/milk/til chiqadi) → b* −65%, a* −40%, L +22% (≤236), niqob 1.2 px yumshoq. Og'iz yopiq (< 40 px) — tegilmaydi. Natija tabiiy, "chinni" emas.
