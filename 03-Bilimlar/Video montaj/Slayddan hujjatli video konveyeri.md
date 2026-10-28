---
tur: bilim
sana: 2026-10-13
teglar: [montaj, slayd, ken-burns, tts, upscale, opencv, fransuz]
---
# Slayddan hujjatli video konveyeri (rasm-slaydlar → diktorli 5 daqiqalik video)

Birinchi qo'llanish: Ouzbekistan 1970-1990 fransuz video. Kod: `D:/2 Mediazone montaj qilish kere/04.10.2026 Neiorozol/_ish/ouzb-fr/tools/`.

## Tartib
1. **Tartib = slayd raqami** (rasmdagi "3/10"), biriktirish tartibi emas → [[Video montaj uslubi]].
2. Chetlarni kesish (`crop.py`: oq/kulrang hoshiya ustunlari), koordinata to'ri bilan rasm (`grid.py`) — kamera nishonlarini shu to'rdan o'qi.
3. **Kattalashtirish (Real-ESRGAN ncnn-vulkan, `D:/claude_ish/asboblar/realesrgan/rs`):**
   - Matn uchun **`realesr-animevideov3-x4`** — silliq, toza harflar. ❌ `realesrgan-x4plus` matnda "stiker" oq hoshiya va ichki chizg'ilar beradi, odam fotolarini plastik qiladi.
   - Foto hududlari: Lanczos 2x + yengil UnsharpMask, 15% AI aralashma (yumshoq niqob).
4. **Diktor:** `edge-tts` (pip), fr-FR-VivienneMultilingualNeural, rate −6%. Har bo'lak alohida mp3 + WordBoundary. **Har bo'lakni whisper (`-l fr`) bilan qayta o'qib tekshir**: "Et l'ikat" → "Hélicate", "adras" → "adra" chiqdi → `say` maydoni bilan fonetik yozuv ("l'adrasse"), matn faylida asl imlo.
5. Uzunlikni moslash: nutq 176 s chiqdi → har slaydga 1 aniq fakt jumlasi qo'shildi (+38 s), pauzalar, musiqa "nafas"lari (`hold`), umumiy `EXTRA` bilan aniq 5:00.
6. **Sahna rejasi** (`scenes.py`): har bo'lakka kamera ramkasi (cx, cy, kenglik) — sarlavha → punkt matni → mos foto → keyingi punkt; ikkita ramka = sekin suzish. Ramka chetida kesilgan yozuv/bosh qolmasin (kontakt varaqda tekshir).
7. **Kompozitor** (`render.py`, OpenCV, Chrome yo'q): arxiv stoli (protsedural to'q qo'ng'ir), kartochkalar to'plami (yangi slayd o'ngdan aylanib tushadi, eskisi ostida xiralashadi), soya, trilinear mip (√2 qadam) — zoomda miltillash yo'q, yorliqlar (yirtiq qog'oz, EB Garamond), light leak o'tishda, vinyetka, donadorlik. 5 jarayon parallel, ~0.5 s/kadr.
8. **Kamera yo'li:** zoom paytida markaz "ekranda barqaror" formula bilan (`g = (1/w − 1/w0)/(1/w1 − 1/w0)`); uzoq siljishda (ekranda >1300 px) **yoy (hop)**: o'rtada uzoqlashadi, pan p2in/p2out, zoom sine — tezlik ≤ 45 px/kadr. Renderdan oldin tezlik/tezlanishni raqamda tekshir.
9. Ovoz (`mix.py`, numpy): diktor −20 dBFS RMS, musiqa gapda −19.5 dB past, bo'shliqda −11 dB, bas 110 Hz dan kesilgan, 1–4 kHz carve; ikki trek (A boshidan, B oxiri video oxiriga backtime). SFX — foydalanuvchi kutubxonasidan qog'oz varaqlash, 0.4 s oyna bo'yicha diktordan ≥9 dB past.

Bog'liq: [[Video montaj]] · [[Ovoz dizayni pipeline]] · [[Video montaj texnik xatolari]]
