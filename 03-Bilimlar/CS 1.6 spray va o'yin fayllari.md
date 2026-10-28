---
tur: bilim
sana: 2026-10-15
teglar: [cs16, goldsrc, spray, wad, viewmodel, fayllar]
---
# CS 1.6: spray (T), skin fayllari va CS papkasini topish

[[CS Skin Studio]] 1.1 da sinalgan (soxta CS nusxasida, haqiqiy o'yinga tegmasdan).

## Spray = `cstrike\tempdecal.wad`
- WAD3: sarlavha `"WAD3"`, lumplar soni=1, katalog ofseti. Lump nomi **`LOGO`**, turi **0x40**, miptex nomi ham `LOGO`.
- Miptex: nom[16], w, h, 4 ta ofset (40, +w·h, +w·h/4, +w·h/16) → 4 mip daraja → int16 256 → palitra 768 → 2 bayt to'ldirish. 64×64 asl fayl = 6296 bayt.
- **Rangli spray:** palitraning oxirgi rangi **(0,0,255)** bo'lsa — rangli, indeks 255 shaffof. Aks holda "gradient" decal: indeks = alfa, rang = palitra[255] (o'yindagi oddiy logolar shunday, masalan (255,120,24)).
- O'lcham: tomonlari **16 ga karrali**, jami piksel **≤ 14336** (128×112, 112×128, 96×144, 224×64…). O'yinda 1 piksel ≈ 1 birlik (odam bo'yi 72).
- Options → Multiplayer'da logo o'zgartirilsa o'yin faylni qayta yozadi → o'rnatgach **faqat o'qish** atributi qo'yiladi (o'zimiz yozishdan oldin olib tashlaymiz).

## Skin fayllari
- `cstrike\models\v_*.mdl` (qo'ldagi), `p_*` (o'yinchi qo'lida), `w_*` (yerda). `…T.mdl` = alohida tekstura fayli.
- **`cstrike_hd\models`** — "yuqori sifatli modellar" yoqilsa o'yin avval shu yerdan o'qiydi → u yerda fayl bo'lsa, unga ham yozish kerak.
- Zaxira va holat: `cstrike\_CSSkinStudio\asl\…` (birinchi asl nusxa saqlanadi), `state.json` (qaysi skin, `added` — o'zimiz qo'shgan fayl → qaytarishda o'chiriladi).
- **CS 1.6 viewmodel'lari faylda chap qo'lda** (HLMV'da qurol chapda). O'yin `cl_righthand 1` (sukut) bilan ularni **ko'zgu qilib o'ngga** chizadi → preview'da Y o'qini −1 qil, culling'ni teskari (BACK) qil, yorug'lik Y'ini ham aylantir.
- Viewmodel kamerasi: model koordinatalari boshida, +X ga qarab, tepa +Z; FOV 90 gorizontal 4:3 → vertikal 73.74° (keng ekranda Hor+).

## CS papkasini topish algoritmi (≈0.3 s)
CS papka belgisi: ichida `cstrike\liblist.gam` (yoki `cstrike\models` + exe). Exe nomi har xil: `hl.exe` (Steam/SteelSeries), `cs.exe` (Gigabyte/Next), `cstrike.exe`.
1. Ishlab turgan jarayonlar (hl, cs, cstrike) → `MainModule` yo'li.
2. Steam: `HKCU\Software\Valve\Steam\SteamPath` + `steamapps\libraryfolders.vdf` → `steamapps\common\Half-Life`.
3. Registr: Valve kalitlari + `…\Uninstall` (DisplayName "Counter/CS/Half-Life") → InstallLocation/DisplayIcon/UninstallString.
4. Yorliqlar: ish stoli + Pusk — **faqat nomi CS'ga o'xshaganlari** (hammasini COM bilan ochish 19 s edi).
5. Har diskda odatiy joylar: `\`, `\Games`, `\Игры`, `\Program Files*`, `steamapps\common` (+ CS nomli papkalarning ichi).
6. "Chuqur qidirish" (so'ralganda): barcha disklar, chuqurlik 7, `cstrike` papkasini qidirish, Windows/AppData/node_modules o'tkaziladi, ReparsePoint o'tkaziladi (~20 s / 3 disk).
Foydalanuvchida topildi: `C:\Games\Counter-Strike 1.6 SteelSeries` (hl.exe), `C:\Games\CS 1.6 Infinity Gigabyte` (cs.exe), ikkalasida HD papka bor.

## CS2 nakleykalar ma'lumoti
- Ochiq JSON: `https://raw.githubusercontent.com/ByMykel/CSGO-API/main/public/api/en/stickers.json` (≈11 100 ta, 19.7 MB, CORS `*`): name, rarity{name,color}, effect (Holo/Foil/Gold/Glitter/…), tournament{name}, crates, image.
- Rasmlar `community.akamai.steamstatic.com/economy/image/<hash>` — **CORS yo'q** (canvas'ga o'qib bo'lmaydi) → lokal xost orqali yuklash. Hajm qo'shimchasi: `<url>/512fx384f`, kichik prevyu `/160fx120f`.
- Rasmlarni dasturga joylama (Valve/jamoa mulki) — faqat havola saqla, foydalanuvchi bosganda yuklansin.
- .NET 4.8 csc bilan yig'ilgan exe'da `ServicePointManager.SecurityProtocol = Tls12 | Tls13` qo'ymasang HTTPS yiqilishi mumkin.

Bog'liq: [[GoldSrc MDL formati va skin muharriri]] · [[Lokal yordamchi server (brauzer ilova + C# host)]] · [[CS Skin Studio]]
