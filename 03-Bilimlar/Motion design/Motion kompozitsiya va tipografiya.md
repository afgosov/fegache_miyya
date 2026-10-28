---
tur: bilim
sana: 2026-10-05
teglar: [motion, kompozitsiya, tipografiya, rang]
---
# Motion kompozitsiya va tipografiya

## Kadr qurilishi (video — veb-sahifa emas)
- **Kamida 2 ta fokus nuqtasi** bo'lsin, shunda ko'z harakatlanadi. Bo'shliqda suzib yurgan yolg'iz matn yaramaydi.
- **Kadrni to'ldir:** asosiy matn kenglikning 60–80% ini egallasin.
- **Kamida 3 qatlam:** fon (porlash, xira katta yozuv, rangli panel) + asosiy kontent + aksentlar (chiziqlar, yorliqlar).
- **Fon bo'sh bo'lmasin.** Sof `#000` "yuklanmagan" kabi ko'rinadi. Radial glow, 3–8% shaffoflikdagi "ghost text", nozik chiziqlar, grain qo'sh. Bunday dekoratsiyalar sahnada 2–5 ta bo'lsin, hammasi sekin "nafas olsin" (statik dekor o'lik ko'rinadi).
- **Chetlarga tayan:** kontentni chap-tepaga yoki o'ng-pastga bog'la. Hammasini o'rtaga qo'yish — veb uslubi.
- **Zonalarga bo'l:** chapda ma'lumot, o'ngda kontent; tepada metadata satri.
- **Chiziqlar o'z ishini qilsin:** har bir chiziqning boshi, oxiri va vazifasi bo'lsin. Aks holda olib tashla.
- **Rasm hech qachon tekis qo'yilmaydi:** perspektiv qiyshaytirish, Ken Burns (scale 1→1.04), qurilma ramkasi yoki parallaks bilan ishlat.

## Rang
- Kontentga mos fon: oziq-ovqat, sog'liq, bolalar → yorug'; texnologiya, kino, moliya → qorong'i.
- **Bitta aksent rang.** Barcha sahnalarda fon bir xil. Neytral ranglarni aksent tomonga ozgina tusla.
- Palitrani kod yozishdan oldin e'lon qil: bg / fg / accent.
- Kontrast WCAG AA bo'lishi kerak (`hyperframes check` tekshiradi).
- Palitra turlari: Bold/Energetic, Warm/Editorial, Dark/Premium, Clean/Corporate, Nature/Earth, Neon, Pastel, Jewel, Monochrome.
- ⚠️ Foydalanuvchi uchun: neon va bachkana ranglar yo'q, och yashil + oq ma'qul ([[Video montaj uslubi]]).

## "AI yasagani bilinib turadi" belgilari (ataylab bo'lmasa, qochish kerak)
Gradient matn · kartochka chetidagi rangli chiziq · qorong'i fonda cyan, binafsha-ko'k gradient, neon · sof #000/#fff · bir xil kartochkalar to'ri · hammasi markazda, bir xil og'irlikda.

## Tipografiya
- **Ikki sans shriftni juftlama.** Serif + sans yoki sans + mono ishlat.
- **Sahnada bitta ekspressiv shrift:** biri "o'ynaydi", ikkinchisi orqada turadi.
- **Og'irlik kontrasti keskin bo'lsin:** 300 va 900 (400 va 700 emas).
- **O'lchamlar:** sarlavha 60px+, matn 20px+. Telefon lentasi (Reels) uchun yanada kattaroq.
- **O'qish vaqti:** 3 s ko'rinadigan matn 2 s da o'qilsin. So'z kam, harf katta.
- **Harf oralig'i** katta o'lchamlarda -0.03…-0.05em. ⚠️ Lekin `letterSpacing` ni animatsiya qilma ([[HyperFrames GSAP tuzoqlari]]).
- **Vaqt — bu ierarxiya:** birinchi chiqqan so'z eng muhim. **Harakat ham tipografiya:** 0.1 s "slam" va 2 s fade bir xil shriftda butunlay boshqa ma'no beradi.
- **HyperFrames'da oflayn ishlaydigan shriftlar:** Inter, Roboto, Open Sans, Lato, Nunito, Montserrat, Poppins, Outfit, Oswald, League Gothic (faqat 400), Archivo Black (faqat 400), Playfair Display, EB Garamond, Space Mono, IBM Plex Mono, JetBrains Mono, Source Code Pro.
- **"Monokultura" shriftlari** (har AI tanlaydi, ataylab bo'lmasa qoch): Inter, Roboto, Poppins, Outfit, Playfair, Cormorant Garamond, Syne...
- O'zbek lotin yozuvidagi ʻ va ' belgilari shriftda bor-yo'qligini tekshir.

Manba: HyperFrames `house-style.md`, `typography.md`, `motion-principles.md`

Markaz: [[Motion design]]
