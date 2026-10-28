---
tur: bilim
sana: 2026-10-06
teglar: [after-effects, mcp, extendscript, adobe]
---
# After Effects va Claude — ulash yo'llari

Foydalanuvchi so'radi: "Claude'ni After Effects'ga ulasa bo'ladimi?" Javob: **ha**. Kompyuterda ishlaydigani **AE 2025** (2026 papkasi chala) — Kompyuter va hisob holati.

## 1-yo'l: ExtendScript (.jsx), uchinchi tomon kodisiz
- AE o'zining skript tili (ExtendScript/JS) bilan boshqariladi: kompozitsiya, qatlam, keyframe, effekt, matn, render.
- Claude `.jsx` yozadi. Uni ishga tushirish: `"C:/Program Files/Adobe/Adobe After Effects 2025/Support Files/AfterFX.exe" -r skript.jsx` yoki AE'da File → Scripts → Run Script File.
- AE'da yoqish kerak: Edit → Preferences → Scripting & Expressions → "Allow Scripts to Write Files and Access Network".
- Render AE oynasisiz: `aerender.exe -project x.aep -comp "Main" -output out.mov` (o'sha papkada).
- Kamchiligi: Claude natijani o'zi ko'rmaydi. Buning uchun skript kadrni PNG qilib saqlashi kerak, Claude esa o'sha PNG'ni o'qiydi.

## 2-yo'l: MCP server (AE ochiq turganda jonli boshqarish)
Jamoa (community) loyihalari, rasmiy Adobe emas:
- `LiamcKerr/after-effects-mcp` — AE 26.5 Windows'da sinalgan. Kadrni rasm qilib ko'rish va render progressini kuzatish imkoni bor.
- `kumoproductions/mcp-aftereffects` — AE 2024–2026, Windows/macOS. Undo guruhlari va JSON eksport bor.
- `irfanabdulhameed/aftereffects-mcp` — keyframe, text animator, batched chaqiruvlar.
- O'rnatishdan oldin kodini ko'rib chiqish kerak, chunki u kompyuterda skript ishga tushiradi.

## Rasmiy "Adobe" konnektori (claude.ai)
- Bu bulutdagi Adobe vositalari (Express, Firefly, rasm tahriri) uchun. Kompyuterdagi After Effects'ni **boshqarmaydi**.

## Qachon AE, qachon HyperFrames (foydalanuvchiga tushuntirilgan, 2026-10-06)
**HyperFrames (asosiy, ~80% ish):**
- ➕ Men to'liq mustaqil ishlayman: yozaman → `check` → `snapshot` → tuzataman → MP4.
- ➕ Tez takrorlash mumkin. Shablon bo'lib qoladi: matnni almashtirsang, yangi video tayyor.
- ➕ Bepul. Xatolar tajribasi vaultda ([[HyperFrames GSAP tuzoqlari]]).
- ➖ AE pluginlari yo'q, 3D cheklangan. Kompozitlash (keying, tracking, roto) zaif.
- ➖ Foydalanuvchi o'zi qo'lda tuzata olmaydi (kod).

**After Effects:**
- ➕ Barcha effektlar va pluginlar ishlaydi: 3D kamera, tracking, Keylight, graph editor.
- ➕ Foydalanuvchi .aep ni ochib, o'zi tuzatadi va o'rganadi. Studiya/mijozga .aep beriladi.
- ➖ Men "ko'r" ishlayman: har tekshiruv uchun render qilish kerak.
- ➖ ExtendScript eski JS (ES3), AE dialoglari skriptni to'xtatib qo'yishi mumkin. Faqat 2025 versiyasi ishlaydi.
- ➖ Mustaqil emas: ko'proq oldi-berdi qilishga to'g'ri keladi.

**Qaror:** gibrid.
- UI-motion, kinetik matn, Reels, subtitr, takrorlanadigan seriyalar → HyperFrames ([[Namuna tahlili - McDonald's ilova reklamasi]]).
- 3D, yashil fon, tracking, plugin effektlari, mijoz .aep → AE ([[Namuna tahlili - Digital Forum promo]]).
- O'rganish uchun: men AE'da asosini yig'aman, foydalanuvchi qo'lda sayqal beradi.

Markaz: [[Motion design]]
