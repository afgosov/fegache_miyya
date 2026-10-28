---
tur: bilim
sana: 2026-10-22
teglar: [reels, talim, ai-rasm, whiteboard, doodle, subtitr, motion, konveyer]
---
# AI rasm + whiteboard ta'lim Reels konveyeri (diktor ovozi asosida)

Ishlatilgan: Grossline raqobatchilar Reels tahlili — 12 video (8 ta AI rasmli hikoya/gapiradigan a'zo, 4 ta whiteboard). Kod: `D:\claude_ish\loyihalar\2026-10-22_grossline_reels\skriptlar\`. Grafika asosi — [[Premium motion qatlam (gfx.py)]].

## Zanjir
1. `kadrlar.py` → 93 kadr prompti; rasmlar Flow agentida (Nano Banana, 2K) → `kocha.py` ([[Google Flow insert konveyeri]]).
2. Ovoz → [[ElevenLabs o'zbekcha ovoz konveyeri]]; `sozlar.py` — whisper so'z vaqtlari (`-ml 1 -sow -oj`) ssenariy so'zlariga **undosh skeleti + belgi darajasida difflib** bilan bog'lanadi (96–100% moslik), qolgani interpolyatsiya.
3. `reja.py` — har video uchun qo'lda yozilgan reja: `shots=[("V01-03", "тасаввур"), ("V01-01:z", "кечаси соат")…]` (langar = ssenariy so'zi, ketma-ket qidiriladi; `:z` — o'sha rasmning yaqin plani 1.28→1.36), hook sarlavha (`*urg'u*` yashil), ro'yxatlar (`head`, bandlar langari, `neg` = qizil). → `reja/NN.json` (VO_OFF 0.10 s qo'shilgan).
4. `reels.py NN` → ovozsiz MP4 (1080×1920, 30 fps, ~2.5 daq / 60 s video). `reels.py NN 1.2,7,36` — faqat shu soniyalar kadrlari (tez QA).
5. `miks.py NN` → yakuniy MP4.

## Vizual qoidalar (sinalgan)
- **Kadr almashinuvi jumla boshida**: dissolve tugashi = so'z + 0.10 s, davomiyligi min(0.9, 0.45×kadr) — power2.inOut. Ken Burns navbatma-navbat 1.0↔1.075, yengil gorizontal siljish. Langarni noyob so'z bilan yoz ("секин" emas "секин нафас" — oldinroq "секин чиқаринг" bor edi).
- AI kadr ustida: vinetka + pastki qoraytirish (0.58H dan) + sarlavha/karta paytida yuqori qoraytirish. Subtitr 0.775H (Reels UI zonasidan yuqori), Montserrat ExtraBold 64, kontur 4 + soya 215 — yorug' fonda ham o'qiladi.
- **Subtitr bo'laklari bir vaqtda faqat bittasi** (keyingisi boshlanguncha so'nib bo'ladi) — aks holda so'z almashganda 0.1 s ustma-ust chiqadi. Bo'lak ≤3 so'z / ≤20 belgi, tinish belgisidan keyin uziladi; aytilayotgan so'z yashil.
- Ro'yxat: **bitta karta** (raqam belgisi + matn, 2 qatorgacha) yuqori bandda, yangi band kelganda eskisi chapga ketadi; ostida nuqtalar (nechanchi band). Ko'p kartani ustma-ust taxlash personajni yopib qo'yadi.
- Yakun (reklamasiz): fon xiralashadi (AI) / oqarib ketadi 95% (doska), qog'oz samolyot ikonka + "Яқинларингизга **юборинг**", "Фойдали маълумотлар учун" + "Обуна бўлиш" tugmasini kursor bosadi (aytilgan "обуна" so'ziga). Montserrat'da ✓ yo'q — belgini chiziq bilan chiz.
- Yaqin plan (`:z`) har doim kadr markazida emas — personaj chetda bo'lsa (V08-05) umumiy plan qoldir. Render oldidan barcha `:z` kadrlarni varaqda ko'r.

## Whiteboard chizish (doska.py)
- Doodle (oq fon, qora marker): siyoh = oqdan uzoqlik >70; `cv2.ximgproc.thinning` → skelet; komponentlar oldingi tugagan joyga eng yaqinidan, uchidan DFS bilan yuriladi → tartib. `distanceTransformWithLabels(DIST_LABEL_PIXEL)` bilan har siyoh pikseli eng yaqin skelet nuqtasining tartibini oladi → `tmap` (0..1). Kadrda: `m = clip((r − tmap)/0.003 + 0.5)` — juda tez (faqat bbox ichida).
- Qo'l: AI rasm (marker ushlagan qo'l, oq fon) → chetdan floodFill bilan kesish, marker uchi = qora piksellardan `argmax(y − x)`; masshtab 0.62, soya. Qo'l uchi yo'l nuqtasiga, har kadrda 0.6 ga silliqlanadi; chizishdan 0.35 s oldin kiradi, 0.45 s da chiqadi.
- Kadrlar orasida doska chapga suriladi (0.75 s), keyin yangi chizma 1.0–2.2 s da chiziladi (0.5−0.5cos tezlik). Sarlavha/kartalar qo'ldan ustda (matn o'qilishi muhim).
- Prompt: "top 20% and bottom 30% empty white" — sarlavha/karta tepada, subtitr 0.835H da sig'adi.

## Ovoz miksi (miks.py, numpy + scipy)
- O'z BS.1770 K-filtri: momentary (400 ms) va integrated (gating). Musiqa = diktor − 21 LU (highpass 120, lowpass 9k, fade 0.8/1.8 s, guruh ichida har video trekning boshqa joyidan). SFX shinasi max momentary ≤ diktor − 7 LU (avtomatik pasaytiriladi). Yakun: −14 LUFS, alimiter −1 dBTP → 01: −14.2 LUFS, cho'qqi −0.9.
- SFX (foydalanuvchi kutubxonasi): sarlavha/karta sarlavhasi `свуш (2)`, band `1 тап`, doska surilishi `Медленный 1`, chizish `Карандаш 1` bo'lagi (−17 dB), yakun `медленный вжух` + `клик 3`.
- Musiqa (Mixkit): hikoya 22 "Piano Reflections", a'zolar 135 "Sleepy Cat", whiteboard 749 "Relaxation 05".

Markaz: [[Video montaj]] · [[Motion design]]
