---
tur: bilim
sana: 2026-10-17
teglar: [shrift, tipografiya, montaj, premiere, kirill, o'zbek]
---
# 🔤 Montaj shriftlari — o'rnatilgan to'plam va qoidalar

## Holat (2026-10-17)
- Kompyuterda 440 oila bor edi, lekin o'zbek kirillini (ҚҒҲЎ) to'liq qo'llaydigani atigi 26 ta, ular ham asosan Windows tizim shriftlari (Arial, Calibri, Segoe...). **Montserrat tizimda yo'q edi.**
- **664 ta Type 1 shrift (`.pfb/.pfm`)** foydalanuvchi papkasida bor. **Premiere 2026 va AE 2025 ularni ko'rmaydi**, chunki Adobe 2023 yildan Type 1 ni qo'llamaydi. Kerak bo'lsa, fontTools bilan OTF ga o'tkaziladi (Helvetica misoli: [[Matn uslubi - ingichka va qalin teksturali]]).
- O'rnatilgan dasturlar: Premiere Pro 2026, After Effects 2025, DaVinci Resolve 21.

## O'rnatilgan to'plam — 23 oila, 250 statik yuz
Kutubxona: `D:\claude_ish\shriftlar\` (oila papkalari + `_Shriftlar namunasi.png` + `_Namuna.html` + `_vositalar\`). Manba: Google Fonts GitHub (OFL — tijorat uchun bepul). Windows'ga "faqat men uchun" o'rnatilgan (`%LOCALAPPDATA%\Microsoft\Windows\Fonts` + HKCU registr). Hammasida lotin + kirill + ҚқҒғҲҳЎў tekshirilgan.

| Vazifa | Shriftlar |
|---|---|
| Hook / sarlavha | Montserrat 900, Onest 800, Geologica 800, Inter Tight 800, Golos Text 800, Commissioner 800 |
| Siqiq (bitta so'z, raqam, infografika) | Oswald 700 (Bebas o'rniga, kirill bor), Fira Sans Extra Condensed 800, Roboto Condensed 800 |
| Subtitr | Montserrat 600–800, Golos Text 600, Nunito Sans 800 |
| Premium serif (kursivsiz!) | Cormorant, EB Garamond, Noto Serif Display, Lora, Forum |
| Yumaloq / do'stona | Nunito, Montserrat Alternates |
| Qo'lyozma (1–3 so'z) | Caveat, Bad Script, Pacifico |
| Texno / HUD | Tektur, Exo 2, IBM Plex Mono |

- Oldindan bor, faqat **lotin** uchun: Akira Expanded, Aspekta (20 og'irlik), Anton, Poppins, Lato. Kirill bilan ishlamaydi.
- Oldindan bor, to'liq o'zbekcha: Bahnschrift (DIN uslubi, raqamlar uchun), Coolvetica.

## ʻ belgisi
- ʻ (U+02BB) yo'q: Geologica, Golos Text, Roboto Condensed, Caveat, Bad Script, Pacifico, Forum (+ avvaldan Instrument Serif, Manrope) → **‘ (U+2018)** yoz.
- **Nunito va Nunito Sans'da ʻ bor, lekin juda keng chiqadi** ("O ʻ zbekiston") → ularda ham ‘ ishlat. Glif borligi yetarli emas, **ko'z bilan tekshir**.

## Variable → statik (nega va qanday)
- DaVinci va eski dasturlar variable shriftning faqat standart og'irligini ko'rsatadi. Shu sabab har `fvar` instansiyasidan alohida TTF yasaldi (`_vositalar\build_static.py`): `instancer.instantiateVariableFont(..., updateFontNames=False)`, keyin name 1/2/4/6/16/17, `usWeightClass`, `fsSelection`, `macStyle` qo'lda yoziladi. RIBBI bo'lmasa: name1 = "Montserrat SemiBold", name2 = Regular/Italic. Boshqa o'qlar (wdth, opsz, CRSV, FLAR...) standartda qotiriladi.
- O'rnatish: `install_fonts.py` (nusxa + `HKCU\...\Fonts` + `AddFontResourceW` + `WM_FONTCHANGE`). Tekshiruv: PowerShell `System.Drawing.Text.InstalledFontCollection` — 23/23 ko'rindi.
- Yangi shrift qo'shish: oilani `dl\<nom>\` ga yukla → `build_static.py dl out` → kutubxonaga nusxa → `install_fonts.py`. Premiere/AE ochiq bo'lsa, qayta ishga tushirish kerak.

## Kirill uchun mos KELMAYDIGANLAR (tekshirilgan)
Unbounded, Manrope, Jost, Sofia Sans (Extra Condensed), Alumni Sans, Playfair Display, Russo One, Tenor Sans, Wix Madefor, JetBrains Mono, Great Vibes, Amatic SC, Neucha, Marck Script, Yeseva One (ҚҒҲ yo'q); Rubik, Comfortaa, Literata, Old Standard TT, Lobster, Philosopher, Prata (Ҳ yo'q). Bebas Neue va Anton'da kirill umuman yo'q.

## Qoidalar
- Bitta videoda ko'pi bilan 2 oila va 2 og'irlik ([[Subtitr san'ati]]). Serif + sans yoki sans + mono ([[Motion kompozitsiya va tipografiya]]).
- Serif kursiv ishlatilmaydi (foydalanuvchi 2026-10-13 da rad etgan — [[Express uslubi - qo'llanma]]).
- **Shaffof shrift** (Difference sarlavha) = Inter Tight SemiBold, tracking −3% — namunaga o'lchab tanlangan ([[Portret uslub va shaffof shrift]]). Helvetica Bold/Regular/Black/Light OTF nusxalari: `ObsidianMiya/.claude/assets/portret/fonts/` (Type1 → OTF, `_gavhar/tools/t1_to_otf.py`).
- Montserrat kirilli lotindan kengroq, katta sarlavhani ~15% kichraytir ([[Video montaj texnik xatolari]] #10).

Bog'liq: [[Video montaj]] · [[Motion design]] · [[Vizual uslublar va matn effektlari]] · [[Motion Reels konveyeri - sahna-spiker almashinuvi]]
