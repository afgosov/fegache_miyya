---
tur: loyiha
sana: 2026-10-23
teglar: [video, promo, hyperframes, cs-skin-studio, strim, banner]
---
# CS Skin Studio — "Sayt ochildi" video va strim banner videosi (2026-10-23)

Foydalanuvchi: "1. Sayt ochilganligi to'g'risidagi video eksklyuziv 2. youtube strim uchun reklama banneri animatsyali (uyam video) — bu ishlarni ham qil yoki qilinganmi". Tekshiruv: banner faqat HTML (`fegache.uz/banner.html`, OBS brauzer manbasi) bor edi, video yo'q edi; sayt videosi umuman yo'q edi.

## 1. "Rasmiy sayt ochildi" — eksklyuziv (26.5 s, 60 fps)
- `D:\CS Skin Studio\TAYYOR\CS_Skin_Studio_sayt_ochildi_16x9_60fps.mp4` va `..._Reels_60fps.mp4` (1080×1920). −14.1 LUFS.
- Loyiha: `D:\claude_ish\loyihalar\2026-10-23_sayt_ochildi\` (`video\` 16:9, `video_reels\` 9:16 — bitta faylni CSS almashtirish bilan moslab yasalgan).
- Uslub: saytdagi jiddiy **qora + oltin** (`--gold #e8b55d`), Zevs medali (CSS halqa + oltin gradient `mask: zeus.png`), Cormorant (serif) + Inter Tight + Montserrat ExtraBold. Oltin chang (fon dekori), grain.
- Tuzilma (Mixkit 470 Golden Storm, drop 15.116 s, ~127 BPM, bar 1.894): EKSKLYUZIV · "Rasmiy sayt ochildi" → brauzer oynasi, manzilga `fegache.uz` yoziladi (harf-harf + klaviatura SFX), Enter, yuklanish → sayohat 4 sahna (muharrir, uslublar + 3D AK oynadan chiqadi, galereya like/izoh, Telegram kirish) → drop'da taklif kartasi (🎁 Birinchi kun bepul, har bir skin ~~5 000~~ 3 000 so'm, aksiya 23-noyabrgacha) → fegache.uz + QR + Brauzer/Windows/Android + tg/ig.
- Ekranlar jonli fegache.uz 2.3.2 dan, DPR 2; kirish oynasi (`#obKirish`) suratda yashirildi. **Statistikani buzmaslik uchun** `css_stats=0` (addInitScript) bilan ochildi. QR — `banner.html` dagi `#q` elementi skrinshoti (qrcode kutubxonasi yo'q).
- Narx manbasi: `GET /fgc-obuna/narx` → narx 3000, asos 5000, aksiya_gacha 2026-11-23.

## 2. Strim banneri — video (20 s, aylanadi)
- `TAYYOR\CS_Skin_Studio_strim_banner_shaffof.webm` — 1920×1080, VP9 **alpha**, 60 fps; OBS: Manba → Media manbasi → fayl, «Takrorlash» yoqilgan. Ko'rish uchun: `..._banner_korish.mp4` (to'q fonda).
- `banner.html` dizayni saqlangan (CS belgisi, 5 aylanuvchi satr, fegache.uz · tg @Fegache · ig fegache_1.6, QR) + "AKSIYA −40%" belgisi, nur o'tishi, kirish/chiqish (aylanish choki toza). Loyiha: `D:\claude_ish\loyihalar\2026-10-23_strim_banner\`.
- Tuzoq: check kontrast — oq matn #e2564b ustida 3.7:1 → #b8322a. `#load` fromTo da opacity faqat from'da — lint `gsap_cold_seek_hidden_fromto_missing_reveal` (to'g'ri: to'g'ri qiymatni to'g'ri'ga ham yoz).

Bog'liq: [[CS Skin Studio]] · [[CS Skin Studio - NFS intro video]] · [[Motion design]]

- **Jonli galereya sinovi (2026-10-23, foydalanuvchi ruxsati bilan):** fegache.uz 2.3.2 Foto → «🖼 Galereyaga» → «AK-47 | Galaktika (sinov)», muallif «Sinov» joylandi (id 3); toza profilda galereya «3 ta skin», rasm 200. POST /api/galereya kirishsiz ochiq (bo'sh tana → 413). Sinov yozuvini foydalanuvchi muallif kaliti bilan o'chiradi.
