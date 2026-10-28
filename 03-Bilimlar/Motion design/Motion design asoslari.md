---
tur: bilim
sana: 2026-10-05
teglar: [motion, tamoyil, easing]
---
# Motion design asoslari

## Easing — bu hissiyot
- Harakat — fe'l, easing esa ravish. Bitta harakatning o'zi turli easing bilan har xil eshitiladi: `expo.out` = ishonchli, `sine.inOut` = xayolchan, `elastic.out` = o'yinqaroq.
- **Kirish → `.out`** (tez boshlanib sekinlashadi). **Chiqish → `.in`** (sekin boshlanib tezlashadi). **Joydan joyga → `.inOut`**. Teskarisi xato: kirishda `.in` sust ko'rinadi.
- Hamma narsaga bitta easing (`power2.out`) qo'yma. Bir sahnada bir xil easingli mustaqil tween 2 tadan oshmasin.

## Tezlik — bu og'irlik
| Davomiylik | Ta'sir |
|---|---|
| 0.15–0.3 s | energiya, shoshilinch, ishonch |
| 0.3–0.5 s | professional, ko'p kontent uchun |
| 0.5–0.8 s | salmoq, hashamat, o'ylantiruvchi |
| 0.8–2.0 s | kinematik, hissiy, atmosfera |
- Eng sekin sahna eng tezidan ~3 barobar sekin bo'lsin. Hamma joyda 0.4 s qo'yish — havaskorlik belgisi.

## Sahna tuzilishi: build / breathe / resolve
- **Build (0–30%)** — elementlar navbat bilan kiradi, hammasi birdan emas.
- **Breathe (30–70%)** — kontent ko'rinib turadi, faqat BITTA ambient harakat bor.
- **Resolve (70–100%)** — chiqish yoki aniq yakun. Chiqish kirishdan tezroq bo'ladi (masalan kirish 0.4 s, chiqish 0.25 s).
- Birinchi animatsiyani t=0 da boshlama, 0.1–0.3 s kechiktir. Aks holda jump cut kabi ko'rinadi.

## Xoreografiya — bu ierarxiya
- Birinchi qimirlagan element eng muhim deb qabul qilinadi. Stagger'ni DOM tartibida emas, muhimlik tartibida qil.
- Kirishlarni ustma-ust qo'y (biri tugashini kutma). Butun stagger ketma-ketligi 500 ms dan oshmasin.
- Hammasini bir tomondan kiritma (`y:30, opacity:0` hammaga emas): chapdan, o'ngdan, scale'dan, faqat opacity, blur bilan aralashtir.
- Har sahnaga o'z ritmi va o'z ambient harakati (pan, aylanish, scale push, rang siljishi yoki **sukunat**). Harakatdan keyingi sukunat kuchli ta'sir qiladi.

## O'tishlar — bu ma'no
- Crossfade = "davom etadi". Hard cut = "uyg'on" yoki keskin burilish. Sekin dissolve = "men bilan suzib bor".
- Hammasini crossfade qilma.

## Disneyning 12 tamoyili motion grafikada
1. **Squash & stretch** — tez harakatda ikonka cho'ziladi, tugma bosilganda siqiladi.
2. **Anticipation** — asosiy harakatdan oldin teskari tomonga kichik "tayyorlanish".
3. **Staging** — ko'zni bitta narsaga yo'naltir, elementlarni ketma-ket kirit.
4. **Straight ahead / pose to pose** — keyframe'lar bilan rejalashtir.
5. **Follow through & overlap** — element to'xtaganda qismlari biroz davom etadi; elementlar ustma-ust harakatlanadi.
6. **Slow in / slow out** — easing (yuqoriga qara). Linear easingdan qoch.
7. **Arcs** — tabiiy harakat yoy bo'ylab bo'ladi, to'g'ri chiziqda emas.
8. **Secondary action** — asosiy harakatni qo'llab-quvvatlovchi kichik harakat (masalan, soya yoki porlash).
9. **Timing** — UI'da odatda 200–500 ms.
10. **Exaggeration** — aniq bo'lishi uchun biroz bo'rttir.
11. **Solid drawing** — hajm, chuqurlik, perspektiva.
12. **Appeal** — harakat "dizayn qilingan" ko'rinsin.

Manbalar: HyperFrames `motion-principles.md`; [uxcel](https://uxcel.com/blog/12-principles-of-animation-a-guide-to-motion-design-133), [toptal](https://www.toptal.com/designers/ux/motion-design-principles)

Markaz: [[Motion design]]
