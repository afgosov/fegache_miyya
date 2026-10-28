---
tur: bilim
sana: 2026-10-28
teglar: [javascript, android, webview, rasm, cs-skin-studio]
---
# Rasm fayl turlari — .jfif, .avif va Android MIME

- **Kengaytma ro'yxati bilan rasm tanima.** Windows'da Chrome Google rasmini ko'pincha **.jfif** (JPEG) yoki **.avif** qilib saqlaydi; `accept="image/*"` fayl oynasi ularni ko'rsatadi, lekin `/\.(png|jpe?g|…)$/` filtri rad etadi → foydalanuvchi "rasm qo'shilmayapti" deydi. To'g'ri: kengaytma **yoki** `file.type.startsWith("image/")`, noma'lum bo'lsa — ochib ko'r (`createImageBitmap` rad etsa — rasm emas).
- **createImageBitmap SVG ni ochmaydi** → `URL.createObjectURL` + `<img>` zaxira yo'li (o'lchami yo'q SVG uchun 512). HEIC'ni Chrome umuman ochmaydi — "JPG/PNG qilib saqlang" deb yoz.
- **Katta suratlar:** 50 MP (8160×6120) to'liq kanvas + getImageData ≈ 400 MB — telefonda qulaydi. Bitmap'dan to'g'ridan-to'g'ri kichik kanvasga `drawImage(bmp, 0, 0, w', h')` (`imageSmoothingQuality="high"`) chiz.
- **Android WebView fayl tanlash:** `.jfif` va kengaytmasiz fayl MediaStore'da `application/octet-stream` — `ACTION_OPEN_DOCUMENT` + `setType("image/*")` bo'lsa oynada **ko'rinmaydi**. Yechim: `setType("*/*")` + `EXTRA_MIME_TYPES = {"image/*", "application/octet-stream"}`. Galereyadan "Ulashish" bilan kelgan faylning nomi kengaytmasiz bo'lishi mumkin (`1000012345`).
- **Emulyatorda SAF sinovi:** adb push'dan keyin `content call --method scan_volume --uri content://media --arg external_primary`; `uiautomator dump` → `content-desc="fayl, hajm, vaqt"` bounds'i bo'yicha bos (o'ng-yuqori burchakdagi «Preview» belgisidan uzoq). `$("#stLoad").click()` ni CDP orqali `userGesture: true` bilan chaqir; har urinishdan oldin oynalar ustma-ust ochilib qolmaganini tekshir (`dumpsys activity activities | grep topResumedActivity`).

Bog'liq: [[CS Skin Studio]], [[Android APK - Gradle'siz WebView ilova]], [[Android emulyator va WebView tuzoqlari]]
