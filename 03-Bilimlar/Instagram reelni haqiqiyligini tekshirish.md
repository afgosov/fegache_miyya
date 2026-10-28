---
tur: bilim
sana: 2026-10-20
teglar: [instagram, reels, yt-dlp, ffmpeg, tekshirish, fake]
---
# Instagram reelni haqiqiyligini tekshirish

Foydalanuvchi "bu video rostmi yoki fake" deb reel havolasini yuboradi.

## Yo'l
1. `yt-dlp --no-playlist --write-info-json -o "<papka>/reel.%(ext)s" <reel URL>` — ochiq reel login'siz yuklanadi (2026.08.19 versiya ishladi).
2. `info.json` dagi `description` ni o'qi — muallif ko'pincha o'zi "VFX/montaj" deb tan oladi.
3. Kadrlar: `ffmpeg -i reel.mp4 -vf fps=1 s%03d.jpg`, keyin `tile=5x2` bilan kontakt varaq.
4. Ekran/terminal matni uchun: `-ss <t> -frames:v 1 -vf "crop=...,scale=1200:-1:flags=lanczos"` — 720p'da ham o'qiladi.

## Tuzoqlar
- Uzun scratchpad yo'liga `cd` qilib ffmpeg ishga tushsa: "path longer than allowed for Win32 working directory". `cd` qilma, to'liq yo'l ber.
- `python -I` `PYTHONIOENCODING` ni e'tiborsiz qoldiradi — emoji chiqarishda `sys.stdout.reconfigure(encoding='utf-8')`.

## Misol (2026-10-20)
hhub.uz "Afsonalar vodiysi charxpalagini o'chirish" reeli — terminalning o'zida `Visual Control Simulator`, `Physical device interface: DISABLED`, `ALL VIRTUAL LIGHTS OFF` yozilgan; tavsifda "VFX" deb tan olingan → sahna (fake).

## Profil Reels ro'yxati (ko'rishlar bilan) — 2026-10-21
- Ilova ichidagi brauzerda login'siz `instagram.com/<user>/reels/` faqat **12 ta** reel (ko'rishlar soni bilan) beradi, 2–3 profildan keyin login oynasi chiqib, grid bo'sh qoladi. `/api/v1/users/web_profile_info/` login'siz 401 (`require_login`).
- To'liq ro'yxat uchun brauzerda Instagram'ga kirilgan bo'lishi shart; yuklab olish esa yt-dlp bilan login'siz ishlaydi (info.json'da `view_count` yo'q — ko'rishlarni grid'dan ol).
