---
tur: bilim
sana: 2026-10-17
teglar: [obuna, to'lov, telegram, ecdsa, ntfy, ilova]
---
# Ilovaga obuna — karta, bot va imzolangan kalit

Payme/Click merchant'siz, serversiz oylik obuna. [[CS Skin Studio]] 2.0 da qilingan.

## Oqim
1. Ilova qurilma ID yaratadi (24 hex, localStorage `css_dev`). «Ro'yxatdan o'tish» tugmasi `t.me/<bot>?start=<dev>` ni ochadi.
2. Bot (muallif kompyuterida, Bot API long polling) buyurtma yaratadi: **narx + 1..99 so'm noyob qo'shimcha**, 30 daqiqa. Karta raqami `<code>` ichida beriladi, bosganda nusxalanadi.
3. Kartaga kirim kelsa (Kartaga tushgan pulni avtomatik kuzatish), summa buyurtmaga mos tushadi va obuna `max(hozir, tugash) + 30 kun` bo'ladi.
4. Kalit `CSS1.<b64u(json{d,e})>.<b64u(r||s)>` — ECDSA P-256. Python `cryptography` DER imzo beradi, uni `decode_dss_signature` bilan 64 baytlik raw'ga o'giriladi (WebCrypto shuni kutadi).
5. Kalit ntfy.sh dagi `fgc-lic-<dev>` mavzusiga qo'yiladi. Ilova `GET /json?poll=1&since=12h` qiladi (CORS ochiq), imzoni ochiq kalit bilan tekshiradi va ochiladi. Zaxira yo'l: botdagi «🔑 Kalit» tugmasi, kalit qo'lda kiritiladi.

## Muhim
- Ochiq kalit ilovaga joylanadi, yopiq kalit faqat kompyuterda turadi. Soxta yoki muddati o'zgartirilgan kalit va boshqa qurilmaning kaliti rad etiladi (Node va brauzerda sinalgan).
- ntfy anonim limit: so'rov ~1/5 s. Shuning uchun ilova to'lov kutayotganda 5 s, darvoza ochiq bo'lsa 60 s, aks holda 10 daqiqada bir tekshiradi. Kesh 12 soat.
- HTML ilovani usta odam buzishi mumkin — bu oddiy foydalanuvchidan himoya.
- **Bank SMS matnini ntfy (uchinchi tomon) orqali o'tkazish avtomatik ruxsat tizimida bloklandi (ma'lumot chiqib ketishi).** Buni foydalanuvchi aniq rozilik bermaguncha qilma. Kalit uzatish esa ruxsat etildi: unda shaxsiy ma'lumot yo'q.
- Muallifning o'zi botga /start bossa, 10 yillik bepul obuna oladi. Ega buyruqlari: `/stat`, `/ber <id|@user> <kun>`.

Kod: `C:\Users\Admin\KartaKuzatuv\obuna.py`, ilova tomoni: `D:\CS Skin Studio\installer\part6.js`.
