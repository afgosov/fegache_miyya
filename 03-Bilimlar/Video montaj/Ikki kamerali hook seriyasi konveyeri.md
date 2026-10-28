---
tur: bilim
sana: 2026-10-19
teglar: [montaj, konveyer, ikki-kamera, target, hook, sinxron]
---
# Ikki kamerali hook seriyasi konveyeri (motion'siz, target reklama)

Birinchi marta: NEIROZOL hook seriyasi (19.10.2026). Ssenariyda har bo'limga 3 hook + umumiy body/CTA bo'lsa: body bir marta render qilinadi, hooklar alohida, keyin `concat -c copy`.

## Qadamlar (`_neirozol_hook/tools/`)
1. `prep.py` — 48k/16k wav + kadr varag'i **faqat keyframe** (`-skip_frame nokey`, 4K da tez). Metadata'siz yotgan B kamera → `transpose=2`.
2. `phr.py` (whisper-server, ibora) → `tok.py` (so'z vaqtlari) → `aedges.py` (energiya chegaralari).
3. `sync.py` — B↔A: 10 ms log-energiya konverti, sekin trend olib tashlanadi, FFT korrelyatsiya (ball ~0.87–0.92), keyin xom signalda ±30 ms. Juftlikni creation_time farqi bilan berish ishonchliroq.
4. `pairframes.py` → `colormatch.json` — bir lahzadagi A/B kadrlar LAB statistikasi; B ga a/b siljishi 85%, L 50% (kontent har xil bo'lgani uchun to'liq Reinhard emas).
5. `facemap.py` — MediaPipe, keyframe'larda yuz markazi → build zoomda yuzni balandlikning 0.34 qismiga qo'yadi.
6. `plan/N.json` — `parts: h1,h2,h3,body`, seg = {clip, a, b, shots:[{cam A|B, d, z:[z0,z1]}]}; ovoz doim A (lav).
7. `edgecheck.py` — har chegara: b dan keyin 0.7 s ichida nutq bormi → bor bo'lsa [b−1.6, b] va [b, b+1.2] ni whisper bilan o'qib, gap kesilmaganini tasdiqla.
8. `build.py` (1620×2880 kanvas → 1080×1920, ~6 fps) → `cutcheck.py` → `final.py` (RNNoise+EQ+kompressor, musiqa −38 dB duck 0.45, −14 LUFS; musiqali + musiqasiz).
9. `tmp/queue.sh "3:h3,body" 5` — 2 parallel navbat.

## Kadr qoidasi
- Hook: A o'rta (1.22→1.30) → B yon (1.0→1.04) → A yaqin (1.45→1.52); kesim faqat pauzada.
- Bir kameraning ketma-ket kadrlari zoom farqi ≥1.28×; dubl almashinuvi (jump) doim kamera almashinuvi bilan yopiladi.
- Bitta kamera bo'lsa (o'tirgan intervyu) — keng/o'rta/yaqin virtual kadrlar.

## v2 — subtitrli professional montaj (`build2.py`, `final2.py`)
- `texts/N.json`: har segment matni lotinda (`*aksent*`, `@dlv`/`@cta` belgilari), hook sarlavhasi kirillda (`qator|*aksent*`). `uzcyr.py` — lotin→kirill (yo'→йў, e boshida→э, ' → ъ, insult→инсульт, NEIROZOL lotin).
- Kadrlash avtomatik: ≥0.35 s pauzalar qisqartiriladi (0.09/0.07 s qoladi), uzun bo'laklar 2.2–3.6 s da "punch" kesim (vaqt yo'qolmaydi, kamera A↔B yoki zoom ≥1.25×). Hook birinchi kadri A-o'rta (sarlavha uchun bosh ustida joy), CTA paytida A keng/o'rta.
- Subtitr: Montserrat ExtraBold 70 px, oq + qora kontur/soya, aksent och yashil #96ECB2, guruh ≤4 so'z/≤21 belgi, so'zlar aytilishi bilan 0.14 s da chiqadi; y=0.745H, quti (yalpiz HSV 68–92) ustiga tushsa yuqoriga (≥1150) yoki pastga (≤1500). Pastki gradient 0.60→0.90H (38%).
- Plashkalar: krem #F6F1E7 + chap yashil chiziq, Montserrat Bold 68; hook sarlavhasi tepada (0.085H); CTA: "Уйгача етказиб бериш / Кўриб, кейин тўлайсиз" va "Буюртма учун / пастдаги тугмани босинг" + chevron.
- O'tish: film burn 5577 (peak 17-kadr, screen 0.78) hook→body va CTA segmenti boshida + `medlennyiy-zamah` whoosh (ovoz p90 − 12 dB). Musiqa −36 dB, duck 0.45.
- Tekshiruv: `FRAMES="1.2,4.6" build2.py` → `peek_*.jpg`; `align_all.py` → shubhali so'z tezligi.

Bog'liq: [[Klassik montaj konveyeri (motion'siz)]] · [[Vox pop (ko'cha so'rovi) montaji]] · [[Video montaj]]
