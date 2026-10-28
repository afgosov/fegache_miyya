---
tur: bilim
sana: 2026-10-06
teglar: [motion, doktrina, qoida, reklama]
---
# Motion doktrinasi — jiddiy videoni "AI yasagan PowerPoint"dan ajratadigan 4 qoida

Manba: `product-launch-video/references/motion-language.md`. Bu qoidalar foydalanuvchining talabiga ham to'liq mos keladi: u "sakrovchi animatsiyalar"ni bachkana deb rad etgan ([[Video montaj uslubi]]).

## 1. Silliq harakat sakrovchidan doim yaxshi: standart easing `power3`
- Elementlar uzun, sekinlashuvchi "dum" bilan joyiga silliq o'tirsin. Ko'p hollarda `power3.out` yetarli.
- **`back.out`, `bounce.out`, `elastic.out` standart sifatida ishlatilmaydi.** Sakrash havaskor videolarning eng birinchi kamchiligi. U urg'u beradi, lekin tozalikni o'ldiradi.
- Overshoot faqat ataylab o'ynoqi lahzada mumkin (bolalar mahsuloti logosi, ataylab "qo'ng'iroq zarbasi").
- ⚠️ [[Motion lug'ati va o'tishlar]] dagi `scale_punch` va `bounce_in` faqat shunday istisnolar uchun.

## 2. Ketma-ket ochish: sahnaning keyingi ~50% ida, diktor bilan sinxron
- **Hamma narsani sahnaning birinchi 25% ida chiqarib tashlama.** Slayd-shou hissi aynan shundan paydo bo'ladi.
- Har bo'lak (qator, kartochka, hatto sarlavha) **diktor uni aytgan lahzada** chiqsin. Ochilishlar sahnaning keyingi yarmiga taqsimlanadi.
- **Kam — ko'p demakdir.** Har biri o'z vaqtida chiqqan kam elementli kadr bir marta animatsiya bo'lib qotib qolgan to'la kanvasdan yaxshi.
- Vositalar: so'zma-so'z ochilish, markazdan tarqalish, count-up, kalit so'zning porlashi (ASR vaqtiga sinxron).

## 3. Arzon "jonlilik" yo'q: yomon harakatdan ko'ra harakatsizlik yaxshi
- **"Nafas olish" yo'q:** kartochka yoki matnni tirik ko'rsatish uchun aylana bo'ylab kattalashtirib-kichraytirish arzon ko'rinadi.
- **Sahnaning keyingi yarmida sekin pan yoki push yo'q:** bu ko'zni charchatadi va qarash yo'nalishini buzadi.
- Ikkala muammoning yechimi bir xil: elementlarni ssenariyga mos ravishda ketma-ket och (2-qoida).
- Harakatsiz kadr nafas olayotgan kadrdan yaxshi. Kadr o'lik ko'rinmasligi uchun ruxsat etilgan yagona "jonlilik" — juda kichik amplitudali titrash (jitter).
- ⚖️ **Ziddiyat haqida:** `house-style` fon dekorlariga (glow, ghost text) sekin "nafas"ni tavsiya qiladi. Farqi shunda: fon dekori sekin nafas olishi mumkin, lekin **asosiy kontent** (kartochka, matn) nafas olmaydi. Jiddiy reklamada bu doktrina ustun turadi.

## 4. Ichki choklar tezligi mos keltirilgan kesim bilan qilinadi
- Sahna ichidagi almashinuv, sahnadan sahnaga yoki qatordan qatorga o'tish oddiy hard cut bilan emas, eng yuqori tezlik nuqtasidagi kesim bilan qilinadi. Batafsil: [[Professional kesim texnikalari]].

## Taqiqlar (tez tekshirish uchun)
- **Slayd-shou:** hamma narsa birinchi 25% da chiqadi, keyin qotadi, diktorga sinxron emas.
- **Arzon jonlilik:** nafas olish, keyingi yarmida sekin pan, ko'p elementlar mustaqil suzib yuradi.
- **Sakrash:** standart sifatida `back`, `bounce` yoki `elastic`.
- **Har doim:** `repeat` yoki `yoyo` yo'q, `Math.random` yoki `Date.now` yo'q, hamma elementlar bir vaqtda kirmaydi.

## Bir qatorda
`power3` silliqligi · diktorga sinxron ketma-ket ochish (keyingi 50% da) · nafas olish va yomon pan yo'q, kerak bo'lsa harakatsizlik · eng tez nuqtada, yo'nalish mos kesim.

Markaz: [[Motion design]]
