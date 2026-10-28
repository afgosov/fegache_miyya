---
tur: bilim
sana: 2026-10-24
teglar: [render, tezlik, nvdec, nvenc, parallel, konveyer, sifat]
---
# Render tezlashtirish — sifat o'zgarmasdan (2026-10-24, o'lchangan)

Foydalanuvchi: "1 ta video montaji o'rtacha 1 soat — tezlashtirish kerak, **lekin sifat kamaymasin**". Qoida: faqat natijasi **bit-baravar bir xil** chiqadigan usullar (parallel ish, GPU dekod). Filtr, o'lcham, cq, interpolatsiya o'zgartirilmaydi.

## Vaqt qayerga ketadi (Jasur Rich, 13 video, 3 soat 45 daq)
- Transkripsiya (whisper large-v3, 85 daq ovoz): ~32 daq — GPU (GTX 1660S) chegarasi, flash-attn allaqachon yoqiq.
- Proxy (4K → 1440×2560, grade + stab): 5–11 daq/video, kompozit 4–5 daq, HyperFrames 3–6 daq — **parallel navbatlar CPU'ni 100% band qilgani uchun** (bo'sh mashinada 2–3 baravar tez).
- Qolgan vaqt — Claude ishi (sheva matnini o'qish, dubl tanlash, reja, tekshiruvlar).

## Nima qilindi (bo'sh mashinada o'lchandi, V11 78.8 s)
| Bosqich | Oldin | Keyin | Usul | Natija |
|---|---|---|---|---|
| Proxy `build2.py` | 250 s | 159 s | yangi bo'laklar `SEGJOBS=3` oqimda + NVDEC | 10/10 bo'lak md5 bir xil |
| Kompozit `ib/comp.py` (to'liq) | 227 s | 111 s | `PARTS=3` (bo'laklab, keyin concat) | ffv1 sinovida 0 farq |
| Kompozit (portret) | 126 s | 84 s | `PARTS=3` | 0 farq |
| NEIROZOL `comp.py` (vault, persona) | 179 s | 159 s | `PARTS=4` + NVDEC | 0 farq (971 kadr) |
| HyperFrames front | 88 s (`-w 2`) | — | `-w 4` = 99 s, sekinroq | 2 da qoladi |

- NEIROZOL kompozitorida foyda kam: bitta jarayon o'zi 4K dekod + lanczos bilan CPU'ni to'ldiradi. NVDEC dekod CPU vaqtini ~35% kamaytiradi (39 → 25 CPU-s / 200 kadr) — bir nechta video birga render bo'lganda foydali.
- `scale_cuda` lanczos (CPU 39 → 7.5 CPU-s) **bit-baravar emas** (PSNR 42 dB) — sifat talabi tufayli yoqilmadi. Kerak bo'lsa "turbo" rejim sifatida foydalanuvchidan so'ra.

## Qoidalar (bo'laklab render)
- Bo'lak chegarasi holatli effekt ichiga tushmasin: shaffof shrift (DMatn fon yorqinligini birinchi kadrda o'lchaydi), B-roll, burn, leak, dim, punch, portret intro (±0.6 s).
- NEIROZOL: chegara faqat shot boshida (`RESET`) — persona kuzatuvi o'sha yerda yangilanadi; `BEAUTY._n = N0` (yuz nuqtalari "har 2-kadrda" juftligi).
- Portret: statik karta foni ketma-ket renderdagi kadrda (e≈0.999, aniq 1.0 emas) keshlanadi — ishchi o'sha kadrni oldindan hisoblaydi, aks holda soya chetida ±1 farq.
- Jasur `comp.py`: chegara GOP (50 kadr) karralida — 0-bo'lak NVENC'da ham bit-baravar; qolganlarida farq faqat kodlovchi holatidan (PSNR ~52 dB, cq bir xil).
- `ffmpeg -ss` (kirishda) h264 va ProRes'da kadr-aniq — md5 bilan tekshirilgan.
- RAM: har bo'lak alohida jarayon (MediaPipe ham yuklanadi). 2+ navbat parallel bo'lsa `PARTS=1` yoki 2; navbatlar bitta videoni ikki marta olmasin — [[Video montaj texnik xatolari]] #199, #200.

## NVDEC qachon bit-baravar
- ✅ 4K H.264 8-bit 4:2:0 + `scale=...:flags=lanczos` / `flags=area` gray (Sony A va B kamera, NEIROZOL iPhone 16.mp4).
- ❌ O'lchamsiz konversiya (1440×2560 proxy → bgr24): NVDEC nv12 → bgr24 yo'li CPU yuv420p → bgr24 dan farq qiladi. Proxy o'qishda CPU qoldi.
- Yangi kamera/kodek bo'lsa avval tekshir: `ffmpeg [-hwaccel cuda] -i X -frames:v 60 -vf scale=... -an -f framemd5 -` → md5 solishtir.

## Tekshiruv usuli
- `ENC=ffv1 OUTF=x.mkv` (ikkala comp.py): yo'qotishsiz chiqish → `framemd5` bilan eski va yangi kadrlar solishtiriladi. NVENC'ni solishtirish farqni yashiradi.
- `framemd5` ga **`-an`** qo'sh (aks holda audio paketlari ham qo'shiladi).
- Sinov uchun `SEGDIR=` (build2) va `OUTF=` (comp) — asl kesh/videoga tegilmaydi.

## Fayllar
- `D:/claude_ish/loyihalar/2026-10-24_jasur_rich/tools/build2.py` (SEGJOBS, SEGDIR, NVDEC), `ib/stab.py` (NVDEC), `ib/comp.py` (PARTS, OUTF, ENC), `tools/chain.sh` (`PARTS=${PARTS:-3}`). Asl nusxalar: `*.bak_seq`.
- Vault: `.claude/tools/neirozol_pipeline/tools/comp.py` (PARTS, HWDEC=1, OUTF, ENC; asl `comp.py.bak_seq`). Navbat skriptlarida PARTS yoqilmagan (opt-in).

Bog'liq: [[ffmpeg retseptlari]] · [[Ikki kamerali intervyu Reels konveyeri (sheva)]] · [[Video ustidagi motion konveyeri (portret + shaffof shrift)]] · Kompyuter va hisob holati · Markaz: [[Video montaj]]
