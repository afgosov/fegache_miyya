---
tur: bilim
sana: 2026-10-25
teglar: [video, tiklash, sony, exfat]
---
# Sony kamera: 0 baytli MP4 (ochilmaydigan klip)

**Belgisi:** `PRIVATE\M4ROOT\CLIP\Cxxxx.MP4` = 0 bayt, `CxxxxM01.XML` yo'q, vaqti g'alati. Yozish yakunlanmagan (batareya, karta chiqishi).

**Tekshirish:**
- `\\.\E:` ni admin huquqisiz ham Python `os.open` bilan xom o'qish mumkin (skript faylda, bash qochirish buziladi).
- exFAT yozuvida birinchi klaster 0 bo'lsa, faylga joy biriktirilmagan.
- Sony kliplarni ketma-ket yozadi: oldingi XML tugaganidan +32 klaster keyin keyingi klip boshlanadi. Keyingi klip o'sha joyda boshlangan bo'lsa, buzilgan klip ustidan yozilgan bo'ladi.
- Bo'sh klasterlarda `ftypXAVC` qidiriladi; moov yo'q mdat = tugallanmagan yozuv.
- Tiklash: `C:\Users\Admin\Tools\untrunc\untrunc_x64\untrunc.exe <namuna_ok.mp4> <carve.mp4>` (namuna o'sha kamera sozlamasida bo'lsin).

**Muhim:** Kartaga boshqa hech narsa yozmaslik; ish paytida karta uzilib qolishi mumkin.
