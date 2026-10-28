---
tur: bilim
sana: 2026-10-06
teglar: [motion, easing, gsap, timing, spacing]
---
# Easing va harakat egri chiziqlari

## Timing va spacing
- **Timing:** harakat qancha davom etadi (kadrlar soni). 25 fps da 1 kadr = 0.04 s.
- **Spacing:** shu vaqt ichida harakat qanday taqsimlangan. Kadrlar orasidagi masofa katta bo'lsa, tez. Kichik bo'lsa, sekin.
- Easing egri chizig'i timing'ning "barmoq izi": tekis qism to'xtashni, tik qism tezlikni bildiradi.
- **Speed graph (tezlik grafigi):** cho'qqi qayerda bo'lsa, harakat o'sha yerda eng tez. `.out` da cho'qqi boshida, `.in` da oxirida, `.inOut` da o'rtada.

## GSAP easing'lari — qachon qaysi biri
| Easing | Xarakter | Ishlatish |
|---|---|---|
| `none` (linear) | mexanik, sun'iy | Faqat opacity fade, doimiy aylanish, progress chizig'i |
| `sine.out / inOut` | eng yumshoq | Hashamat, sokin, Soft Signal, fon dekori |
| `power1` | yengil | Nozik harakatlar |
| `power2` | o'rtacha | Umumiy UI va chiqishlar (`power2.in`) |
| **`power3.out`** | **uzun, silliq dum** | **Standart kirish** ([[Motion doktrinasi]]) |
| `power4` / `expo` | keskin boshlanish, uzoq "o'tirish" | Ishonchli, zarbali kirish, velocity cut'lar |
| `circ` | keskin oxir | Mexanik to'xtash |
| `back.out(1.2–2.5)` | overshoot (oshib ketib qaytadi) | ⚠️ Faqat o'ynoqi kontent |
| `elastic`, `bounce` | prujina, sakrash | ⚠️ Faqat bolalar yoki o'yin kontenti |
| `steps(n)` | qadamli, raqamli | Glitch, typewriter, retro |

## Klassik tamoyillar (amalda)
- **Anticipation:** asosiy harakatdan oldin teskari tomonga kichik (5–10%) siljish. Masalan, logo pastga "cho'kib", keyin yuqoriga chiqadi. Reklamada nozik qilinadi.
- **Overshoot va settle:** element nishondan biroz o'tib ketib, kichrayib boruvchi tebranishlar bilan joyiga tushadi. Massa va elastiklik hissini beradi. Jiddiy uslubda overshoot o'rniga `expo.out` ning uzun dumi ishlatiladi.
- **Follow-through / overlap:** asosiy element to'xtaganda uning qismlari (soya, ikkinchi qator) 2–4 kadr kechikib to'xtaydi. Bu GSAP'da kichik offset bilan qilinadi.
- **Arcs:** tabiiy harakat yoy bo'ylab bo'ladi. x va y ga turli easing berish yoyni hosil qiladi (masalan, x `power2.out`, y `power2.in`).
- **Asimmetriya:** kirish 0.4–0.6 s, chiqish 0.25–0.35 s. Chiqish doim tezroq.
- **Kesim yonidagi tezlik:** chiqish `.in` (tezlanadi), kirish `.out` (sekinlashadi). Bir xil kuchda bo'lsin: `power4.in` ↔ `power4.out` ([[Professional kesim texnikalari]]).

## Raqamlar (25 fps uchun)
| Harakat | Davomiylik | Kadrlar |
|---|---|---|
| Kichik UI pop | 0.2–0.3 s | 5–8 |
| Matn kirishi | 0.4–0.7 s | 10–18 |
| Katta sarlavha yoki kamera | 0.8–1.2 s | 20–30 |
| Sahna o'tishi | 0.3–0.6 s | 8–15 |
| So'zlar orasidagi stagger | 0.04–0.25 s | 1–6 |
| Ushlab turish (o'qish) | ≥ 1.5–3 s | 38–75 |

## Tez-tez uchraydigan xatolar
- Hammasiga bitta easing va bitta davomiylik berilgan ([[Motion design asoslari]]).
- Kirishga `.in` easing berilgan, natijada sust ko'rinadi.
- Linear easing joy o'zgarishida ishlatilgan, natijada robotdek ko'rinadi.
- Overshoot jiddiy kontentda ishlatilgan, natijada bachkana ko'rinadi.
- Juda tez (< 0.15 s) kirish ishlatilgan, tomoshabin payqamay qoladi.

Manbalar: [Ben Marriott — Motion Foundation](https://www.benmarriott.com/motion-foundation), [Medium — graph editor](https://medium.com/@unalbalc/the-pendulum-and-time-designing-meaningful-motion-with-the-graph-editor-ae4e8d046738), [Ellie Motion — animation vocabulary](https://elliemotion.com/journal/terms-in-animation-design-the-working-vocabulary-every-visual-creator-should-know); HyperFrames `gsap-easing-and-stagger.md`

Markaz: [[Motion design]]
