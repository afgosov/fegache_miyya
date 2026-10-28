---
tur: bilim
sana: 2026-10-09
teglar: [png, shaffof, logo, python, pillow]
---
# Soxta shaxmat fonli JPG dan shaffof PNG

**Muammo:** mijoz logoni "shaffof" deb JPG yuboradi, lekin fonda chizilgan shaxmat katakchalar bo'ladi (haqiqiy alfa yo'q). Misol: Gulkam Resort logosi (2026-10-09).

**Yechim (Python, Pillow + numpy):**
1. Yorqinlik (luminance) hisoblanadi: `0.299R + 0.587G + 0.114B`.
2. Alfa = chiziqli ramp: yorqinlik ≥ 180 → 0 (fon), ≤ 120 → 1 (logo), orasi — chetlar uchun yumshoq o'tish.
3. To'liq qora piksellar o'z rangini saqlaydi; chekka (qisman alfa) piksellarga hudud rangi beriladi (tog' / matn), aks holda fon oqi aralashib "oq hoshiya" chiqadi.
4. Alfa < 0.04 bo'lganlar 0 ga tenglanadi (JPEG shovqini).
5. Tekshirish: natijani to'q sariq va qora fonga qo'yib ko'rish — hoshiya yoki katakcha qoldig'i yo'qligini ko'rsatadi.

**Chegaralar:** faqat fon logodan ancha ochiq bo'lganda ishlaydi. Logo ichida oq element bo'lsa, u ham shaffof bo'lib ketadi — bunda hudud niqobi (mask) kerak.

**Muhit:** `pip install pillow numpy` (2026-10-09 da o'rnatildi). ImageMagick yo'q, ffmpeg bor.

Bog'liq: [[Video montaj vositalari]], [[NEIROZOL Reels]]
