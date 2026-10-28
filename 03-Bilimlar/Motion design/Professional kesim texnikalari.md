---
tur: bilim
sana: 2026-10-06
teglar: [motion, kesim, otish, gsap, velocity]
---
# Professional kesim texnikalari (motion ichidagi "choklar")

**Asosiy tamoyil:** kesimni harakat eng tez bo'lgan nuqtada qil. Kesimning ikki tomonida yo'nalish va tezlik bir xil bo'lsin. Shunda ikki xil sahna tomoshabinga bitta uzluksiz kamera harakatidek ko'rinadi, slayd-shou kabi emas. Manba: `product-launch-video/references/cut-catalog.md`.

## Qaysi birini tanlash kerak
| | Zoom-Through | Teskari zoom | Cut the Curve | Waterfall |
|---|---|---|---|---|
| Qayerda | Sahna ichida matn almashishi | Yakuniy zarba yoki "yetib keldik" | Sahnalar orasida | Matndan matnga |
| O'q | Z, tomoshabinga | Z, tomoshabindan | X / Y | X, har so'z |
| Blur cho'qqisi | 10px matn / 20px to'liq kadr | 10 / 20px | shart emas | yo'q |
| Hissi | "ichkariga kirib boryapmiz" | "yetib keldik" | "yonga olib ketildi" | to'lqin |
- **Tugallanmagan fikr** (bitta g'oya bir necha kadr bo'ylab davom etadi) → cut-the-curve yoki waterfall.
- **Holat o'zgarishi** (yangi bo'lim) → zoom-through. **Yakuniy zarba** → teskari zoom.

## 1. Zoom-Through (oldinga)
1. **Chiqish (0.2 s):** scale 1.0→1.2, blur 0→10px (`power3.in`). Opacity 1→0.15 alohida tween bilan, `none` (linear) easing.
2. **Kesim (`tl.set`, bir lahzada):** eski matn opacity 0. Yangi matn opacity 0.15, scale 0.75, blur 10px.
3. **Kirish (0.5 s):** scale 0.75→1.0, blur 10→0, opacity 0.15→1 (`expo.out`).
- Hech qachon ikkala matn bir vaqtda ko'rinmasin.
- Faqat sarlavha yoki qisqa iborada ishlat. Kichik matn 0.75 scale'da o'qilmay qoladi.

## 2. Teskari zoom (orqaga)
- **Chiqish:** scale 1.0→0.8, blur →10px (`power3.in`, 0.2 s).
- **Kesim:** yangisi scale **1.25**, opacity 0.15, blur 10px.
- **Kirish:** 1.25→1.0 (`expo.out`, 0.5 s).
- Yakuniy gap ("Bu bugun o'zgaradi", logo) uchun. Kadrdan kattaroq bo'lib keladi va o'z joyiga "o'tiradi".

## 3. Cut the Curve (sahnalar orasidagi standart o'tish)
- Asosiy element bir tomonga tezlanib chiqadi. Kesim harakat o'rtasida bo'ladi, yangi element **o'sha yo'nalishda** davom etib sekinlashadi.
- Masofa ±230px:
  - Chapga: eski `x: 0→-230`, yangi `x: +230→0`.
  - Yuqoriga: `y: 0→-230`, yangi `y: +230→0`.
- **Easing ko'zgu kabi bo'lsin:** chiqish `power4.in`, kirish `power4.out`. Masofa va davomiylik bir xil (bu bitta `power4.inOut` ning ikki yarmi, kesimda tezlik bir xil ~3000 px/s).
- **Fade hiylasi:** chiqishdagi opacity yo'lning 25–30% ida tugaydi (0.18–0.3 s). Element hali tezlanib turganda yo'qoladi. Kirish ~0.35 opacity'dan tez yonadi.
- Chiqish qisqa (0.2–0.4 s), kirish ≥ chiqish. Elementlar ekrandan to'liq chiqib ketmaydi.
- Oxirgi so'nayotgan element aynan kesimda o'lsin, aks holda "o'lik havo" (hech narsa qimirlamaydigan bo'shliq) qoladi.

## 4. Waterfall (so'zma-so'z)
- **Chiqish (har so'z):** `x: 0→-230`, 0.34 s, `power4.in` (avval sekin siljiydi, keyin "yirtilib" ketadi). Opacity 0.18 s da 0 ga tushadi. So'zlar orasidagi stagger ~0.022 s, oxirgi so'z kesimda yo'qoladi.
- **Kirish (har so'z):** `x: +230→0`, opacity 0.35→1, 0.3 s, `power4.out`. Stagger qisqarib boradi: 0.05 s dan boshlanadi, har so'zda ×0.84, ya'ni kaskad tezlashadi.
- Barcha so'zlarni oldindan `x:+230, opacity:0` holatiga qo'y.

## Blur qoidasi
- Matn uchun blur cho'qqisi **10px**. 20px da harflar surkalib, glitch kabi ko'rinadi.
- To'liq kadr (kartochka, skrinshot) uchun **18–20px**.
- Kesimning ikki tomonida blur qiymati bir xil bo'lsin. Blur bolalarga emas, wrapper'ga beriladi.

## Anti-patternlar
| Qilma | Nega | O'rniga |
|---|---|---|
| Zoom paytida ikki matn ko'rinadi | Z illyuziyasi buziladi | Blur cho'qqisida hard cut |
| Matnga 20px blur | Glitch bo'lib ko'rinadi | 10px |
| Kesim ikki tomonida turli yo'nalish | Ko'z boshqa tomonga ketadi | Bir xil xossa va yo'nalish |
| Kesimda blur yoki opacity mos emas | Miltillash | Kesim kadrida qiymatlar bir xil |
| Kirishda yumshoq `power2.out` | Kirish chiqishdan sekin tuyuladi | `power4.out` yoki `expo.out` |
| Ekrandan to'liq chiqish yoki kirish | Vaqt isrof bo'ladi, tezlik yo'qoladi | Qisman yo'l + erta fade |
| Kesimsiz statik almashinuv | Slayd-shou | Cut-the-curve standart bo'lsin |

Bog'liq: [[Motion lug'ati va o'tishlar]] (velocity-matched o'tishlar) · [[Motion design asoslari]]

Markaz: [[Motion design]]
