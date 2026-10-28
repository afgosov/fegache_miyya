---
tur: bilim
sana: 2026-10-15
teglar: [montaj, motion, reels, hyperframes, konveyer, whisper, shrift]
---
# Motion Reels konveyeri — sahna ↔ spiker almashinuvi (9 videoda sinalgan)

NEIROZOL Neirazol papka - 9 motion video da yig'ilgan amaliy qoidalar. Asos: [[Vertikal Reels konveyeri - matn bosh orqasida]].

## O'tish vaqtlari (qora kadr va "ustma-ust matn" bo'lmasin)
- Spiker → sahna: spiker `off` (a 0, k 1.08) 0.42 s; sahna `sceneIn` spiker so'nishidan **0.2 s oldin** boshlanadi (ostida tayyor turadi).
- Sahna → spiker: spiker `full` **0.35 s**; sahna `sceneOut` = spiker kirishi **+0.35 s** (spiker to'liq ko'ringach). Aks holda 0.2–0.3 s qora/bo'sh kadr chiqadi.
- Subtitr spiker to'liq ko'ringandan keyin (+0.35 s) boshlanadi — so'nayotgan grafika matni bilan ustma-ust tushmasin.
- Segment chegarasi (boshqa klip/dubl) faqat sahna ostida yoki spiker kirish lahzasida bo'lsin (#73).

## Bitta elementda kirish/chiqish
- Tez ketma-ket so'zlar (0.3 s): kirish `d = min(0.35, keyingi − t − 0.12)`, chiqish keyingi so'zdan 0.08 s oldin. Ustma-ust tween → element qolib ketadi (#82).

## Matn
- Yozuv effekti (typeOn): harflarni `display:none→inline` bilan och (opacity emas) — aks holda kursor so'z oxirida "uzoqda" turadi.
- Kartadagi uzun so'z (masalan «Ҳайратланишлар» 40px / 470px karta) sig'masa — `&shy;` qo'y; qo'shni karta ostiga kirib ketadi (#100).
- `maskWords` da `|` = qator ko'chishi. Subtitr `em` so'zi kirishda 1.18× kattalashadi — snapshotda qo'shni so'zga tegib ko'rinsa, bu animatsiya o'rtasi.
- Kirill shriftlarni `@fontsource` (npm pack) dan ol, `fontTools` bilan ҚҒҲЎ tekshir; `unicode-range` bilan bitta oila (`fonts/fontcss.py`). Ishlaydi: Arsenal, Bad Script, Commissioner, Cormorant, EB Garamond, Forum, Geologica, Golos Text, IBM Plex Sans/Mono, Inter Tight, Montserrat Alternates, Onest, Pacifico, PT Serif, Tektur, Mulish, Noto Sans/Serif Display, Nunito Sans, Podkova, Roboto Condensed/Slab, Source Serif 4, Ubuntu, Ysabeau. Ishlamaydi (ҚҒҲ yo'q): JetBrains Mono, Jost, Manrope, Playfair Display, Sofia Sans, Unbounded, Russo One, Tenor Sans, Wix Madefor, Great Vibes, Lobster/Philosopher/Prata/Yeseva (Ҳ yo'q).

## Mahsulot
- Qadoqni CSS 3D bilan qayta yasash (oq quti — yalpiz ramka, Times yozuv; yashil quti — SVG old yuz). Kadrdagi haqiqiy qadoqqa o'xshashini kadr crop bilan solishtir.

## Diniy/madaniy tasvir
- Masjid/maqbara gumbazi ustiga **faqat alem** (shar/shpil) chiz; ikki kesishgan chiziq xochga o'xshaydi (#97).

## Ovoz va matn tekshiruvi
- `quiet_check.py`: bo'lak ichida spiker medianidan ≥9 dB past, 0.9 s+ ovoz = **kadr ortidagi pichirlash** ehtimoli → transkripsiya qilib ko'r (#93).
- "birinchi o'n kunlik(da)" ≠ "birinchi kunlar" — whisper "onkullidi/unkunlikte" deydi (#94).

## Render
- 2 parallel navbat (`queue.sh`, `queue2.sh`; har biri o'z `queueN.txt`/`_done.txt`) — 17 GB bo'sh RAM da muammosiz. Kompozit ~0.35 s/kadr.
- GPU'ni o'yin (CS2) band qilsa whisper 10× sekinlashadi: 25 s bo'laklar bilan o'qish (30 s oyna uchun bir xil narx) + CPU turbo server.

## Showroom/tur videosi — 4K "virtual B-roll" (2026-10-16, Express yangi video (2026-10-16))
- Gimbal bilan yurib olingan 4K vertikal tur: alohida B-roll yo'q, lekin **o'sha lahzaning 4K kadridan native 1080×1920 crop** (2× yaqin plan, sifat yo'qolmaydi) — mahsulot detali (tortma, karusel, lift) ovoz bilan sinxron. `tools/broll.py`: TM.broll `{t0,t1,x,y,w,h,z0,z1[,clip,src]}`, `src` berilmasa `segs.json` dan comp→manba; `composite.py` shu oraliqda gapiruvchi o'rniga crop + faqat old qatlam (orqa qatlamdagi matn ko'rinmaydi → B-roll ustidagi yozuvlar `#L_front` da).
- Crop chetida odamning yarim yuzi/boshi qolmasin — QA'da 3 joyda topildi: crop'ni odamdan uzoqlashtir yoki B-roll'ni u kadrga kirguncha tugat.
- Proxy **1620×2880 (1.5×)**: yaqin plan 1.22–1.29 upscale'siz. Yaqin plan holati boshga qarab: `heads_t.json` median → `f = [cx, top + (c_y − 520)/k]`, **clamp** `f_x ∈ [540/k, 1080−540/k]`, `f_y ∈ [c_y/k, 1920−(1920−c_y)/k]` — aks holda `BORDER_REFLECT` ko'zgu chekkasi chiqadi.
- Orqa qatlamdagi (speaker-space) matn yaqin planda kattalashadi va siljiydi → kalit so'zlar orqa qatlamda faqat W/W2 (k ≤ 1.05) paytida; yaqin plan yoki B-roll paytidagi yozuvlar old qatlamda.
- Yorug' oq/tilla interyerda sariq matn ko'rinmaydi → brend teal + oq halo (`text-shadow: 0 0 26px rgba(255,255,255,.9)`).
- Bo'lak chegarasida bir xil kadr o'lchami (W→W) = jump cut → `zt` punch yoki holat almashinuvi bilan yashir.
- Render'dan oldin: `edl_check.py` + `gap_check.py` ([[Video montaj texnik xatolari]] #106).

Markaz: [[Video montaj]] · [[Motion design]]
