---
tur: bilim
sana: 2026-10-24
teglar: [windows, installer, smartscreen, chrome, imzo]
---
# Windows exe ogohlantirishi (Chrome / SmartScreen) — imzosiz o'rnatuvchi

**Belgi:** Chrome yuklashda "This file might be malware — Google Safe Browsing is checking…", Windows ishga tushirishda "Windows protected your PC".

**Sabab:** SSL emas (u faqat ulanishni himoyalaydi). `.exe` **raqamli imzosiz** (`Get-AuthenticodeSignature` → NotSigned) va **obro'si yo'q**: imzosiz faylning obro'si fayl xeshiga bog'lanadi, har yangi yig'ish = yangi xesh = noldan.

**To'liq yechim:** kod imzolash sertifikati (Authenticode). EV — SmartScreen deyarli darhol ishonadi (qimmat, kompaniya hujjatlari, USB-kalit); OV — arzonroq, obro' sertifikatga to'planadi (yangilanishlarda saqlanadi). `signtool sign /fd sha256 /tr <timestamp> ...` ni yig'ish skriptiga qo'shish; ichidagi exe ham imzolanadi. O'zi yasagan (self-signed) sertifikat yordam bermaydi.

**Bepul choralar:** Google Safe Browsing `report_error` formasi, Search Console → Security issues, Microsoft WDSI file submission (Software developer); saytda brauzer versiyasini asosiy qilish; fayl xossalarida to'g'ri versiya/kompaniya (`AssemblyVersion`, `AssemblyCompany`). Foydalanuvchini "baribir yuklang" deb ko'ndirish o'rniga — rost izoh.

Bog'liq: [[CS Skin Studio]] · [[Windows installer - o'rnatilgan csc bilan]]
