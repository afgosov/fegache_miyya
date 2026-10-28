---
tur: bilim
sana: 2026-10-15
teglar: [motion, reklama, hyperframes, playwright, ilova, konveyer]
---
# Dastur reklamasi — o'z ilovasidan kadr konveyeri

Birinchi qo'llanish: [[CS Skin Studio]] reklamasi (36.5 s, 1080×1920, 25p).

## 1. Kadrlarni ilovaning o'zidan olish (screen-record emas)
- Ilovani **alohida Playwright konteksti**da DPR 2 bilan och (`browser.newContext({deviceScaleFactor: 2})`) — asosiy MCP sahifasi buzilmaydi.
- Ilova ichiga yordamchilar o'rnat: `__load(model)`, `__render(nom, W, H, opts)` (WebGL dan shaffof PNG), `__save(nom, canvas)`.
- Fayllar **lokal saqlovchi serverga** (masalan `127.0.0.1:47720`, python) POST qilinadi → to'g'ridan-to'g'ri `reklama/assets/` ga. `run_code_unsafe` faqat `.playwright-mcp/` yoki ish papkasidagi skriptni yuklaydi.
- Bir xil kadrlashda render (bir xil `dist`) → uslublar orasida "wipe" va crossfade silliq chiqadi.
- 3D aylanish ketma-ketligi: PNG kadrlar → `libvpx-vp9 -pix_fmt yuva420p` alfa WebM.
- Ilova hostida "bo'sh turgan bo'lsa o'chadi" taymer bo'lsa — fon pinger (keepalive) ishlat.

## 2. Kompozitsiya (HyperFrames)
- Sahna = haqiqiy UI skrinshoti (karta, egilgan) + toza 3D render + **SVG kursor va bosish halqasi** beat ustida (B = 0.627 s, 96 BPM).
- Matn almashadigan joylar (raqam, nom) — `onUpdate/textContent` EMAS: oldindan hamma variantni chiz, `tl.set(opacity)` bilan almashtir (seek xavfsiz).
- Konfetti — deterministik LCG (Math.random emas).
- Vignette/grain/flash ustidagi qatlamlarga `data-layout-allow-occlusion`.

## 3. Ovoz
- `tools/build_audio.py`: musiqa drop'i birinchi "vau" kadriga (2.52 s) tushadi; har SFX **cho'qqisi** (`sfx_scan.json` dagi `peak_t`) aniq hodisa vaqtiga qo'yiladi; bassli fayllarga `highpass=90`; oxirida ikki bosqichli loudnorm −14 LUFS / TP −1.5.
- Video `render` dan ovozsiz chiqadi → ffmpeg bilan mux (`-c:v copy -c:a aac -b:a 256k -shortest`).
- ⚠ Keskin SFX (zarba, shatter) AAC **192k** da true peak'ni WAV'dagidan +1…3 dB oshiradi (WAV −4 → MP4 −1.0). Yechim: **256k** AAC + loudnorm'dan keyin 4x oversample limiter (`aresample=192000,alimiter=limit=0.63,aresample=48000`). Natija: −14.0 LUFS, TP −2.2. Doim MP4 ning o'zini o'lcha, WAV ni emas.

## Saboqlar
- Canvas'dagi matn nakleyka canvasidan kengroq bo'lsa kesilib qoladi — PIL bilan qayta chiz, avval o'lchab ko'r.
- Fiksirlangan `dist` + bbox markazi o'ng chetni kesdi → fitting bilan qayta render.

Bog'liq: [[Motion doktrinasi]], [[Tayyor Reels shablonlari]], [[Three.js 3D sahna HyperFrames]], [[Namuna tahlili - McDonald's ilova reklamasi]]
