---
tur: xato
sana: 2026-10-05
teglar: [xato, hyperframes, gsap, render]
---
# Xato: HyperFrames GSAP tuzoqlari (lint o'tadi, render buziladi)

Bu xatolarni `hyperframes check` ushlamaydi. Ular rasmiy skill hujjatida qayd etilgan, shuning uchun oldindan bil.

1. **Bitta elementda ikkita transform tween bir vaqtda** (masalan `y` bilan kirish + `scale` Ken Burns) → element ko'rinmay qoladi.
   - **To'g'ri:** bitta `fromTo` ga birlashtir YOKI ota div'ga kirish, ichki elementga Ken Burns ber.
2. **`.clip` sahna ichida `tl.from()`** — `immediateRender` sabab element miltillaydi yoki noto'g'ri joydan chiqadi.
   - **To'g'ri:** har doim `tl.fromTo()`.
3. **Ambient pulsatsiya (`gsap.to` alohida)** — preview'da ko'rinadi, render'da YO'Q.
   - **To'g'ri:** har doim `tl.to(..., 0)` bilan timeline'ga qo'sh.
4. **Sahna chegarasida chiqib ketgan ichki element qayta paydo bo'ladi.**
   - **To'g'ri:** fade'dan keyin `tl.set(el, {opacity:0, visibility:"hidden"}, end)`. `.clip` konteynerining o'ziga emas.
5. **iframe** render'da qotib qoladi.
   - **To'g'ri:** iframe o'rniga skrinshot qatlamlarini ishlat.
6. **Videoga CSS `opacity:0`** — `data-start` bor element uchun framework uni majburan 1 qiladi.
   - **To'g'ri:** videoni `data-*` atributlari yo'q wrapper div'ga o'ra, opacity'ni o'sha div'ga ber.
7. **Text-behind-subject'da cutout videoni keyinroq boshlash** (`data-start=3.3`) → bir kadrlik titrash.
   - **To'g'ri:** asosiy video ham, cutout ham `data-start="0"` dan boshlansin. Cutout kerakli paytda wrapper opacity bilan yoqiladi.
8. **`letterSpacing` va layout xossalarini animatsiya qilish** → piksel sakrashi ([[Video montaj texnik xatolari]] #2).
9. **Timeline oxirgi tween'da tugaydi** → render erta to'xtaydi.
   - **To'g'ri:** oxiriga sentinel qo'y: `tl.set({}, {}, DURATION)`.

Manba: `~/.agents/skills/hyperframes-creative/references/motion-principles.md`, `composition-patterns.md`

Markaz: [[Motion design]] · Bo'lim: [[Xatolar]]

10. **Ota div `visibility:hidden` bo'lsa ham `<video class="clip">` ko'rinib qoladi** (2026-10-10): framework videoga `visibility: visible` beradi, bola esa otaning hidden'ini bekor qiladi → PiP video B sahnadan keyin butun kadrni yopib qo'ydi (check "text_occluded inside #pipv" dedi).
   - **To'g'ri:** video wrapper'ini `opacity` bilan yashir (`tl.set(wrap,{opacity:0})`), visibility bilan emas. Bir xil src'li ikki video → `duplicate_media_discovery_risk`: ikkinchisiga fayl nusxasini ber.
11. **`blink()` sikli oxirgi qadamda kursorni qayta yoqadi** — `t+0.5 < b` sharti bilan cheklamasa, keyingi `tl.set(opacity:0)` dan keyin ham kursor ko'rinadi.

10. **`reveal()`/maskWords bilan chiqadigan matnga `gsap.set(el,{opacity:0})` qo'yma** (2026-10-11, AHDAR Reels). `reveal` faqat `visibility` va so'z maskalarini boshqaradi, opacity'ni qaytarmaydi — natijada 10 ta sarlavha (YEMIRILISHI, QUTQARUVCHIM, DAVOLADIM…) renderda umuman chiqmadi. Snapshot kontakt-varaqda "yozuv yo'q" ko'rinsa — avval opacity:0 ro'yxatini tekshir.
11. **`maskWords(el, text)` HTML'da matni bor elementga qo'llansa, matn ikkilanadi** ("353535"). Funksiya boshida `el.textContent = ""` qil yoki elementni bo'sh qoldir. Ichida boshqa element (chiziq, ikonka) bo'lsa — matn uchun alohida ichki `<span>` ber.
12. **Transform atributli SVG `rect` ga GSAP rotation tween** — `transform="rotate(45 …)"` yo'qoladi (GSAP uni rotation deb o'qib, 0 ga tweenlaydi). Romb kerak bo'lsa `polygon` bilan chiz.
13. **`.chip`/kartochka kabi keyin chiqadigan elementlarga global `gsap.set(".chip",{opacity:0})`** — `popRise` (fromTo, immediateRender:false) boshlanguncha element CSS holatida ko'rinib turadi (2-videoda "uyalish/tortinish" chiplari 8 s oldin chiqdi). **Takrorlandi** (2026-10-13, Gavhar g4/g5): paket chiptasida 02–04 raqam/ikonkalar va oltin chiziq vaqtidan oldin ko'rindi → har `fromTo(..., immediateRender:false)` elementiga boshlang'ich holatni `gsap.set` bilan ham ber.

14. **Shrift oilasini `"Serif"` deb nomlash — renderda shrift almashib ketadi** (2026-10-12, Mediazone target videolari). `@font-face { font-family: "Serif"; ... }` snapshot/preview'da to'g'ri (Instrument Serif italic), lekin `hyperframes render` (layer .mov) da kursiv so'zlar Manrope'ga o'xshash qalin kursivga aylandi — render dvigateli nomni umumiy `serif` kalit so'zi deb talqin qiladi. **To'g'ri yo'l:** oilaga umumiy kalit so'zlarga (serif, sans-serif, monospace, cursive...) o'xshamaydigan noyob nom ber: `"InstrSerifIt"`. Render qilingan qatlamdan bitta kadrni snapshot bilan solishtir.
15. **Bitta elementga `maskWords` ni ikki marta qo'llash** — ikkinchi chaqiruv build paytida birinchi matnni o'chiradi (timeline vaqtida emas), birinchi yozuv umuman chiqmaydi. **To'g'ri yo'l:** almashadigan yozuv uchun alohida element (`#hkK`, `#hkK2`).
16. **`.mask { overflow:hidden }` kursiv serif harfni (q, f, j) chap tomondan kesadi** — padding 6 px yetmaydi. **To'g'ri yo'l:** `padding: 8px 14px 16px; margin: -8px -14px -10px`.
17. **`#bub span {...}` CSS'i `typeText()` yaratgan har harf `<span>`iga ham tushdi** (2026-10-13, Gavhar g4): "tug'ilgan kun" har harfi alohida ko'k pufakcha bo'lib chiqdi. **To'g'ri yo'l:** konteyner uslubini klass bilan ber (`#bub .bb`), avlod-selektor (`span`) ishlatma; `tl.fromTo("#bub span")` ham hamma harflarni tanlaydi.


18. **Boshlang'ich yashirish `tl.set(el,{opacity:0}, 0)` bilan** (2026-10-19, Guds Jobs ilova qo'llanma video) — lint `gsap_timeline_set_initial_hide`: playhead aynan 0 da turganda set ishlamaydi, 0-kadr yashirilmagan holatda chiqadi. **To'g'ri yo'l:** boshlang'ich holatlar `gsap.set(...)` bilan (timeline'dan tashqarida), keyingi o'zgarishlar timeline'da.
19. **Bitta elementga tez-tez takrorlanadigan qisqa tween'lar** (klaviatura tugmasi "ll", "e…e") → `gsap_tween_tail`: oldingi tween'ning dumi keyingisini bosib ketadi. **To'g'ri yo'l:** hodisalarni yig'ib, oxirida har element uchun keyingi hodisagacha qisqartirilgan tween yasash.
20. **Zoom qilingan qatlam ustidagi sarlavha uchun scrim gradient yetmaydi** — kattalashgan oq UI sarlavha ortidan "loyqa" ko'rinadi. **To'g'ri yo'l:** kamera qatlamini harakatsiz wrapper ichiga olib, wrapper'ga `mask-image` gradient (sarlavha zonasida shaffof). → [[Ilova qo'llanma video konveyeri (telefon mokapi)]]

21. **`fromTo` da xususiyat faqat «from» da berilgan — kadrga to'g'ridan-to'g'ri o'tilsa yo'qoladi** (2026-10-24, [[CS Skin Studio - skin yasash video (2-qism)]]). Hisoblagich raqami `fromTo(el, {opacity:1, scale:1.35}, {scale:1})`: ketma-ket snapshotda ko'rindi, lekin `--at 15.3` (render bo'laklari ham shunday sakraydi) da raqam yo'q — faqat «/09». **To'g'ri yo'l:** «from» dagi har xususiyat «to» da ham bo'lsin (`{opacity:1, scale:1}`); generatordan keyin regex bilan tekshir: from kalitlari − to kalitlari = bo'sh.

22. **`check` `text_occluded` — `background-clip:text` li oltin sarlavha qo'shni matnni «yopadi»** (2026-10-24, [[CS Skin Studio - AK-47 ZEVS to'liq skin video (3-qism)]]): tekshiruvchi gradient fonli matnni shaffof emas quti deb biladi, ustidagi/ostidagi kichik qatorlar xato beradi (ko'rinishda hammasi joyida). **To'g'ri yo'l:** snapshot bilan ko'rib, qo'shni matn elementlariga `data-layout-allow-occlusion`.

23. **Yaltirash (glint) — `mix-blend-mode: overlay` li oq to'rtburchak sarlavha ustida** oq marmar/yorug' fon ustidan o'tganda oq quti bo'lib ko'rinadi. **To'g'ri yo'l:** sarlavha matnining nusxasi `background-clip:text` + tor oq diagonal gradient (`300% 100%`), `backgroundPosition` 100%→0% tween — yaltirash faqat harflarda.

24. **`check` `text_occluded` — keyingi (yashirin) kadrdagi to'liq ekranli element «yopadi»** (2026-10-25, [[CS Skin Studio - 6 ta o'yin intro video (2026-10-25)]]): kadr konteyneri `opacity:0` bo'lsa ham, uning ichidagi video/fon/tus qatlami tekshiruvchiga oldingi kadrlardagi matnni yopgandek ko'rinadi (ko'zda hammasi joyida). **To'g'ri yo'l:** snapshot bilan ko'rib, belgilangan matn elementlarining o'ziga (va `span` bolalariga) `data-layout-allow-occlusion`; faqat qatlamga qo'yish yetmadi.
