---
tur: bilim
sana: 2026-10-09
teglar: [motion, namuna, tahlil, sfx, ovoz-dizayni, hook, drop, cta]
---
# Namuna tahlili: "Hamma qidirgan premium ovoz effektlar" — SFX paket promo

Fayl: `_namunalar/motion/_kiruvchi/n1009_05.mp4` (asli `5.mp4`). 22.5 s, 720×1280, 30 fps, −14.8 LUFS, **LRA 9.7** (eng dinamik — jimlik va drop bor). Kesimlar: 3.2 / 9.3 / 18.2 s.
Janr: **raqamli mahsulot promo** (SFX paket), kalit so'zli CTA ("Ovoz").

## Asosiy sir — ovoz bilan hikoya
1. **Hook (0–3.2):** diktor kameraga gapiradi, ustida **bitta katta so'z** almashadi, har biri ~0.25–0.5 s, diktor so'ziga sinxron: "HOZIRDA → HAMMA → QIDIRGAN → PREMIUM → OVOZ → EFFECTLAR". Shrift: siqiq baland (Bebas/Anton uslubi), krem `#F4EEC4`, bosh tepasida. Animatsiya yo'q — faqat almashadi (hard cut).
2. **SFX "ASMR" bo'limi (3.2–9):** qora ekran, iPhone Soat ilovasi qayta yaratilgan: menyu (World Clock → Alarms → Stopwatch → **Timers** to'q sariq), "Start", taymer g'ildiragi motion blur bilan aylanadi, **3 soniya** tanlanadi, to'q sariq halqa 00:03 dan sanaydi. Spektrda: musiqa yo'q, **har bir UI harakatiga alohida aniq SFX** (klik, tik, swish) — orasida jimlik. Tomoshabin effektlarni "eshitib" ko'radi.
3. **Drop (9.0):** taymer 0 ga yetadi → **kuchli bass drop**, musiqa kiradi. Hikoya ichidagi sanoq = musiqa drop'iga tayyorlov (build-up). Eng kuchli usul.
4. **Isbot (9.3–18):** qo'lda ushlangan kamera bilan monitor: SFX papkalari tez aylantiriladi (fayl nomlari: whoosh, glitch, flash, riser, tension...), kesimlar zarbaga (67% kesim zarbada).
5. **CTA (18.2–22.5):** diktorga qaytish, gapirib bo'lgach **fon rack-defokus** bilan xiralashadi, o'rtada qo'shtirnoqli kalit so'z **"Ovoz"** (krem, siqiq). "Izohga 'Ovoz' deb yozib qoldiring".

## O'rganiladigan usullar
- **Bitta so'z = bitta zarb hook'i** (one-word kinetic): har so'z alohida, katta, bir joyda almashadi. Diktor tezligida.
- **Sanoq → drop:** 3-2-1 vizual sanoq (taymer, raqam, progress) aynan musiqa drop'ida tugaydi. Musiqani shunday kesish kerak: drop kadri = sanoq tugagan kadr.
- **Jimlik + izolyatsiya qilingan SFX** — drop'dan oldin musiqani butunlay olib tashlash, faqat UI SFX qoldirish. Kontrast drop'ni kuchaytiradi.
- **UI SFX ro'yxati:** menyu siljishi = soft tick, tanlash = click, g'ildirak = ratchet/scroll tick, start = pop, sanoq = tik-tak, nol = impact/drop.
- **Rack-defokus CTA:** fon `filter: blur(0→18px)` 0.4 s, ustida kalit so'z.
- Rang: teal-to'q sariq kinematik grade (teri iliq, fon teal).

## Bizga qo'llash
- [[Ovoz dizayni pipeline]] ga: drop'dan oldin 2–3 s "jim + UI SFX" bo'limi va sanoqni drop'ga bog'lash.
- Sog'liq reklamalarida ([[Video montaj uslubi]]) bass drop emas, sokin "zarba" (soft impact) ishlatiladi, lekin sanoq → ochilish g'oyasi ishlaydi.

Markaz: [[Motion design]] · Ro'yxat: [[Motion namunalar kutubxonasi]] · Xulosa: [[Namunalar xulosasi - 2026-10-09]] · [[SFX dizayni va musiqa ritmi]]
