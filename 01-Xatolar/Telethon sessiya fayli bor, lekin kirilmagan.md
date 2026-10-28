---
tur: xato
sana: 2026-10-21
teglar: [telegram, telethon, server, tolov]
---
# Telethon sessiya fayli bor, lekin kirilmagan

- **Nima bo'ldi:** fegache.uz serverida `fegache-obuna` qayta ishga tushganda log: "Telegram akkauntga kirilmagan — to'lovlar kuzatilmaydi". `ornat.sh` esa "Telegram allaqachon ulangan" dedi — u faqat `karta.session` fayli borligini tekshirardi. Natija: karta-bot kirimlari kuzatilmaydi, to'lovlar avtomatik tasdiqlanmaydi (bot va sinov xizmati ishlayveradi).
- **Sabab:** Telegram sessiyani bekor qilgan (masalan, telefonda "boshqa seanslarni tugatish" yoki uzoq vaqt/IP sababi) — fayl qoladi, lekin `is_user_authorized()` = False.
- **TO'G'RI YO'L:** fayl emas, holatni tekshirish: `kuzatuv.py --holat` (0 — kirilgan, 3 — kirilmagan, boshqasi — tekshirib bo'lmadi). `ornat.sh` endi 3 bo'lsa eski sessiyani `karta.session.eski-*` qilib, `--kirish` so'raydi (telefon + kodni foydalanuvchi o'zi yozadi). Bir sessiyani ikki joyda ishlatmaslik.
- Vaqtincha: xaridor «To'ladim» bossa, 5 daqiqadan keyin egaga "❌ … kelmadi" xabari keladi — kartani tekshirib `/ber <tg>` bilan qo'lda tasdiqlash mumkin.

Bog'liq: [[CS Skin Studio]] · [[Ilovaga obuna - karta, bot va imzolangan kalit]]
