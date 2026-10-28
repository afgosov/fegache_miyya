---
tur: bilim
sana: 2026-10-25
teglar: [qatlam, paint, undo, js, cs-skin-studio]
---
# Rastr qatlamlar — mavjud tahrirlovchiga undo nuqtasidan qo'shish

Ko'p asbobli rasm tahrirlovchiga (mo'yqalam, chelak, uslub, import…) Paint.NET'dagidek qatlamlarni har asbobni qayta yozmasdan qo'shish usuli:
- **Bitta tutish nuqtasi:** har amal tugaganda `pushUndo(label, before)` chaqiriladi (`before` — amaldan oldingi teksturalar). Shu yerda `before` bilan hozirgi rasm farqi = amal chizgan piksellar → **faol qatlam**ga yoziladi (qatlam: har tekstura uchun RGBA, alfa 255). O'chirg'ich qatlamda — o'sha piksellar alfasini 0 qiladi.
- **Ko'rinadigan rasm = yig'indi:** Fon (to'liq RGBA) + ko'rinadigan qatlamlar tartibda ustma-ust. Saqlash/render shu yig'indidan → yashirin qatlam saqlanmaydi (Paint.NET flatten).
- **Arzon undo:** qatlam piksel massivlari o'zgarmas (har o'zgarishda `slice()` bilan yangisi) → holat nusxasi faqat `new Map(px)`; undo yozuviga `{pre, post}` biriktiriladi, `doUndo` o'rami ustki yozuv almashganini ko'rib holatni tiklaydi.
- **Kechiktirib yoqish:** qatlamlar birinchi kerak bo'lganda yoqiladi (yangi qatlam / nakleyka OK) — undan oldin dastur avvalgidek, ortiqcha xotirasiz.
- **Nakleyka → qatlam:** OK da har nakleykani alohida asosga pishirib, farqini o'z qatlamiga — "qotadi" talabi saqlanadi, lekin yashirish/qulf/tartib ishlaydi.
- Cheklov: yarim shaffof chetlar amal paytidagi ostki rang bilan aralashgan holda yoziladi (past qatlam yashirilsa — chetda ozgina iz).

Amaliy: [[CS Skin Studio]] `installer\part11.js` (2.4.0).
