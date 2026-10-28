---
tur: bilim
sana: 2026-10-12
teglar: [abloshka, muqova, cover, reels, cutout, birefnet, hyperframes]
---
# Abloshka (Reels muqova) retsepti — videodan 4K premium muqova

Sinalgan: Xayotxon abloshka - Kamera qo'rquvi.

## O'lcham va xavfsiz zona
- Kanvas **2160×3840** (4K 9:16), qo'shimcha 1080×1920 JPG. Profil to'rida markazdagi **3:4** (4K da y 480–3360) ko'rinadi — sarlavha, yuz, asosiy grafika shu zonada. Pastki ~35% Reels lentasida UI bilan yopiladi.

## Konveyer (Python + HyperFrames)
1. **Kadr tanlash:** har kadrda yuz hududi Laplacian dispersiyasi − qo'shni kadr farqi → eng tiniq va harakatsiz 24 tasi kontakt varaqqa → ifoda bo'yicha qo'lda tanla (og'iz yopiq, ko'z kameraga). Kamera burilgan bo'lsa avval aylantir.
2. **Ko'p kadrli shovqin tozalash:** tanlangan kadr ±6 kadrni `cv2.DISOpticalFlow` (MEDIUM, yarim o'lchamda) bilan tekisla, farqqa qarab og'irlik `exp(-(d/6)²)` → o'rtacha (16-bit PNG). Teri shovqini/bloklar ketadi.
3. **Kesish:** BiRefNet-portrait ONNX (`danielgatis/rembg` release, 970 MB). Butun kadr + soch/bosh uchun **yaqinlashtirilgan oynalar** (1024 ga kamroq kichraytiriladi → soch tiniqroq), chetlari 120 px so'nish bilan qo'shiladi → rangli **guided filter** (r=9, eps=2e-4) faqat noaniq chiziqda → `pymatting.estimate_foreground_ml` (fon rangi soch chetidan ketadi). Asl kadrdagi keraksiz buyumni (haykalcha) y bo'yicha kes, past qismini dizayn gradienti yopadi.
4. **Tiniqlash:** faqat Y kanalida, `d = Y − blur(1.4)`, `gate = clip((|d|−0.003)/0.006)`, `Y += 0.5·d·gate`; clarity 0.08. Tone curve faqat silliq funksiya (`+0.035·sin(πY)`).
5. **Fon:** qizni olib tashla (alfa dilate 61 px) → normalized convolution (σ 12→150) bilan to'ldir → σ≈22 defokus → to'yinganlik 0.78, ko'k/yashil pasaytirib bordo tus → qiz bilan bir xil masshtab. Yorug'lik asl sahna bilan mos qoladi — sun'iy fondan realroq.
6. **Joylash:** premultiplied alfa bilan `warpAffine` (LANCZOS4) — chetda qora/qizil hoshiya bo'lmaydi.
7. **HyperFrames:** bitta kompozitsiya → statik PNG = `snapshot --at <oxirgi kadr>` (2160×3840, lossless), motion = `render --fps 25 -q delivery`. Matn bosh orqasida: masthead `#mast` (overflow hidden, harflar yPercent 105→0) qiz PNG'sidan oldin; check uchun harflarga `data-layout-allow-occlusion`.

## Dizayn qoidalari (foydalanuvchi uslubiga mos)
- Mavzudan kelib chiqqan bitta metafora (kamera mavzusi → viewfinder HUD, AF ramka yuzga qulflanadi). Bezak emas, ma'no.
- 1 serif display (Instrument Serif) + 1 sans (Manrope 800) + mono (HUD). O'zbek ʻ o'rniga ‘ (U+2018).
- Rang: fon sahna rangidan (bordo), aksent kiyimdan (lilac), matn fil suyagi. Neon, ko'p ikonka yo'q.
- Ism/brend imlosi aniq bo'lmasa — abloshkaga yozma, topshirishda ayt.

Bog'liq: [[Matn bosh orqasida - professional usul]] · [[Reels va TikTok texnik talablari]] · RVM matting dvigateli · Markaz: [[Video montaj]]

## Qo'shimcha (2026-10-12, 2 ta keyingi abloshka)
- **Fon inpaint QILMA** (normalized convolution katta bo'shliqda kulrang loyqa/dog' beradi). O'rniga: (a) yorug' sahna → fonni to'liq CSS gradient + sahnadagi motiv (arka, gul bokehi) bilan chiz; (b) parda → bosh tepasidagi parda qismidan **ustunlar mediani** (1D profil) → butun kadrga cho'z + yengil notekislik; orqa fon blur σ≈20, oldingi "ochiluvchi parda" tiniq.
- Rangli parda kostyumga rang bersa — **despill**: `G = min(G, max(R,B))` (yashil), lilac/qizil uchun shunga o'xshash.
- Aylana bo'ylab matn (muhr): SVG `textPath` + `textLength="2πr−eps"` `lengthAdjust="spacing"` — aks holda boshi-oxiri ustma-ust tushadi.
- Kesma ostidagi 30 px alfa-so'nish kattalashtirilganda ~40 px och chiziq bo'lib ko'rinadi — yopuvchi panel/gradient so'nish boshlanishidan **yuqorida** tursin.
- Kadr tanlash uzun videoda: `sharp_scan2.py <video> <dir> <step> <sep>`; video oxiridagi "gap tugagan" lahzada ko'pincha eng tabiiy yopiq-og'iz tabassum bo'ladi.
- Seriya uchun: har abloshka sahna rangidan (bordo / lavanda / zumrad) va kiyimidan (lilac, tilla tugma) palitra oladi; shriftlar juftligi ham har birida boshqa (Instrument+Manrope, Fraunces+DM Sans, Cormorant+Montserrat).
## Seriya (2026-10-13, Gavhar tsiklorama Reels — 5 ta)
- Asboblar: `_gavhar/tools/cover_cands.py` (klip boshi/oxiridan nomzodlar) → `cover_pick.py` (har 2-kadr yuz kesmasi + Laplacian) → `cover_still.py` (±5 kadr DIS oqim bilan tekislab o'rtacha, videodagi grade bilan, 16-bit) → `cover_cut.py` (BiRefNet: butun kadr + bosh oynasi + pastki oyna, guided filter, pymatting) → `cover_html.py` (2160×3840 kompozitsiya, snapshot).
- Model: `C:/Users/Admin/.cache/birefnet/birefnet-portrait.onnx`. Python: onnxruntime+pymatting bor venv (eski sessiya scratchpad'idagi `venv_cut`; yo'qolsa: `python -m venv` + `pip install onnxruntime pymatting opencv-python`). ~95 s/kadr CPU.
- Bosh kadr tepasida bo'lsa (yaqin plan) sarlavhaga joy yo'q → kadrni `s=0.78–0.88` kichraytirib pastga qo'y; bo'shliqni **qizsiz inpaint** bilan to'ldir (1/8 o'lchamda `cv2.inpaint` TELEA, qiz niqobi + bo'sh joy) → xiralashtir → kattalashtir. Butun kadrni xiralashtirib fon qilma — tepada qizning "arvohi" chiqadi.
- 3:4 profil to'ri: kicker y≥520 (4K), chip y≈3080–3240.

## Yorqin oniks devor + bosh tepada (2026-10-26, MediaZone studiya otzivlari - Onyx zal (25.10.2026))
- Bosh kadr tepasiga yaqin bo'lsa: kadrni **kichraytirma va ko'zguda to'ldirma** (ko'zgu — simmetrik "Rorschach" naqsh va qo'l/yeng aksi chiqdi; kichraytirish yonlarda bo'shliq beradi). To'g'ri yo'l: kadrni **300 px pastga sur** (odam o'lchami o'zgarmaydi, oyoq qismi kesiladi), tepadagi tasmani devorning eng yuqori 140 qatoridan cho'zib σ28 xiralashtir va 160 px gradient bilan ula — defokus davomi kabi ko'rinadi, 3:4 profil to'ridan tashqarida (`tools/cover_html2.py`, `shift`).
- Yorqin sariq devorda matn **to'q**: issiq analog (espresso-karamel tekstura + krem chip) yoki komplementar kobalt (jinsi/kiyimdan) — oq matn yorqin devorda yo'qoladi. Krem radial scrim 0.55/0.30.
- Kadr: ±4 qo'shni kadr DIS bilan o'rtacha + videodagi `make_look` + persona 0.62; 1080p manba → Real-ESRGAN x4plus 50% + Lanczos (`tools/cover_still2.py`). Kadrni gap tugagandan keyingi tabassumdan ol.
