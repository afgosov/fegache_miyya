---
tur: bilim
sana: 2026-10-15
teglar: [cs16, goldsrc, mdl, tekstura, webgl, kvantlash]
---
# GoldSrc MDL (v10) formati va skin muharriri texnikasi

CS 1.6 / Half-Life modellari (`v_ak47.mdl` va h.k.). [[CS Skin Studio]] shu bilimlar asosida yozilgan; Python bilan tekshirish skripti: struct offsetlari pastda.

## Sarlavha (studiohdr_t, 244 bayt, little-endian)
- `0` "IDST" (asosiy/T-fayl), "IDSQ" = animatsiya fayli (`…01.mdl`). `4` versiya = 10. `8` nom[64]. `72` length.
- `140` numbones/`144` boneindex · `164` numseq/`168` seqindex · `172` numseqgroups/`176` · `180` numtextures/`184` textureindex · `192` numskinref/`196` numskinfamilies/`200` skinindex · `204` numbodyparts/`208` bodypartindex.
- `numtextures == 0` → teksturalar `…T.mdl` faylida (skin jadvali ham o'sha yerdan). T-fayl: `numbodyparts == 0`, `numtextures > 0`.

## Tuzilmalar
- **Tekstura** (80 b): nom[64], flags `+64`, w `+68`, h `+72`, offset `+76`. Offsetda `w*h` bayt indeks + **768 bayt palitra** (256×RGB). Flags: 2 chrome, 4 fullbright, 32 additive, 64 masked (indeks 255 = shaffof).
- **Suyak** (112 b): nom[32], parent `+32`, flags, bonecontroller[6] `+40`, value[6] `+64` (pos xyz, rot xyz radian), scale[6] `+88`.
- **Bodypart** (76 b): nom[64], nummodels `+64`, base, modelindex `+72`. **Model** (112 b): nummesh `+72`, meshindex `+76`, numverts `+80`, vertinfo (suyak indeksi, bayt) `+84`, vertindex (float3) `+88`, numnorms `+92`, norminfo `+96`, normindex `+100`.
- **Mesh** (20 b): numtris, triindex, skinref, numnorms, normindex.
- **Tri-buyruqlar**: int16 son (`>0` strip, `<0` fan, `0` tugadi), keyin har cho'qqi uchun 4×int16: vertIdx, normIdx, s, t. **s,t piksel birligida** → UV = s/w, t/h (shuning uchun tekstura o'lchamini o'zgartirib bo'lmaydi).
- Strip: juft i → (i, i+1, i+2), toq → (i+1, i, i+2). GoldSrc `glCullFace(GL_FRONT)` — WebGL'da ham `cullFace(FRONT)` to'g'ri chiqdi.
- **Sequence** (176 b): fps `+32`, flags `+36`, numframes `+56`, animindex `+124`, seqgroup `+156`. Anim = seqgroup[0].data + animindex; har suyak uchun 6×uint16 offset (`mstudioanim_t`), RLE qiymatlar `{valid u8, total u8}` + int16. AngleQuaternion — Valve formulasi (roll/pitch/yaw = x/y/z).

## Skin muharriri usullari (sinalgan)
- **Texel ↔ sirt namunalari:** har uchburchakni UV fazoda rasterlash, piksel markazi uchun barisentrik → posed 3D nuqta + normal. 1-o'tish: ichidagi pikselllar; 2-o'tish: 0.75 px chegaradan kengaytirish (faqat qoplanmagan teksellar) — choklarda teshik qolmaydi.
- **3D nakleyka (CS2 uslubi):** markaz C, F = −normal, U = kamera tepasi proyeksiyasi, R = F×U. Teksel (x,y) = dekal ramkasida; teksellar bo'yicha **maksimal alfa** (ko'zgu UV'da ikki nuqta bir teksel). Rasm mip-zanjiri (premultiplied), daraja = log2(rasm px / teksel).
- **Qo'l/qurolga tushmasligi:** dekalni faqat bosilgan **bodypart** ishlatadigan teksturalarga cheklash (sleeve stok yonida turadi).
- **Rang almashtirish:** Lab'da masofa (L ×0.5), siljitish a,b + L nisbat — naqsh saqlanadi. Asl teksturalar ≤256 rang → natijani rang bo'yicha keshlash juda tez.
- **Bo'yash (colorize):** l = y^γ, γ = log(targetL)/log(o'rtacha Y) — qorong'i tekstura ham tanlangan rangga chiqadi.
- **256 rangga qaytarish:** median-cut + k-means (5-bit histogram) VA asl palitradan boshlangan k-means — xatosi kichigini ol. Masked: 255 rang + indeks 255 asl. O'zgarmagan tekstura baytma-bayt asl holida yoziladi; fayl uzunligi o'zgarmaydi (joyida yamoq).
- **Fonni olib tashlash:** chetdagi eng ko'p 1–4 rang (4-bit bin) → chetdan flood fill (RGB masofa < 42), 1 px yumshoq chekka. Soxta shaxmat fonli JPG'lar uchun ishlaydi.

## Brauzer tomoni
- `file://` sahifa Chrome'da **secure context**: `showOpenFilePicker/showSaveFilePicker/showDirectoryPicker`, IndexedDB, WebGL2 ishlaydi (headless `--dump-dom` bilan tekshirildi).
- **Drop hodisasi:** `DataTransferItem.getAsFile()` va `getData()` ni **birinchi `await` dan oldin** chaqir — keyin DataTransfer bo'shab qoladi.
- Internet rasmini sudrash ko'pincha CORS'ga uriladi → `text/html` dagi `<img src>` (data: bo'lsa ishlaydi), aks holda foydalanuvchiga "Copy image → Ctrl+V".
- Ilovani dastur kabi ochish: `chrome.exe --app="file:///…html" --window-size=1600,950` yorlig'i + `.ico` (Pillow, bir nechta o'lcham).

Bog'liq: [[CS Skin Studio]] · E2E sinov - Playwright va real GPU · Playwright tuzoqlari
