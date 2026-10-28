---
tur: bilim
sana: 2026-10-21
teglar: [montaj, motion, konveyer, portret, shaffof-shrift, hyperframes, sfx, target]
---
# Video ustidagi motion konveyeri (portret + shaffof shrift) — NEIROZOL 20.10 da sinalgan

Papka: `D:/claude_ish/loyihalar/2026-10-21_neirozol_2010/tools/`. Kadr doim spikerda; grafika shaffof qatlam.

1. `transcribe.py` (ibora + 25 s bo'lak) → `reread.py N a b` (tor oynani **large-v3 va turbo** bilan, prompt bilan/promptsiz) → `texts/texts.json` (aytilgan matn, `*aksent*`, `@body`) → `mkwords.py` (harf darajasida NW, so'z vaqtlari).
2. `bodycheck.py` — bir guruhdagi body audio-korrelyatsiya + kadr farqi bilan **aynan bir xil** ekanini tasdiqlash.
3. `cuts3.py` — montajchi jump-cutlari: butun kadr farqi cho'qqisi **va** qo'llar zonasidan tashqari farq ≥3× (imo-ishora yolg'on kesim bermaydi).
4. `facemap.py` (2 fps yuz) → `proxy.py` (4K → 1440×2560, guruh uchun bitta grade + yengil persona).
5. `boxmap.py` — NEIROZOL qutisi (yalpiz ramka H 58–95 + ichi oq/krem ≥45%) → subtitr/chip/CTA qutini yopmaydi (`avoid`, quti ustiga yoki ostiga).
6. `mkplan.py` — 9 video rejasi Python DSL'da: `v.chip / stk / title / dif / cta / battery`, har biri o'z SFX'i bilan avtomatik (`sfx.json`); kamera: montajchi kesimlari + uzun kadrlarda pauzada virtual kesim, zoom navbatma-navbat (G1 1.12↔1.36, portret 1.28↔1.52), sekin Ken Burns.
   - G1 yo'laklari: bosh ustida y 250/395, ko'krakdan past 1180/1310, shaffof shrift 0.56H, subtitr 1500.
   - Portret: krem fon, karta (165,295,750×1330), sarlavha krem zonada (y 100–280), stikerlar karta chetida (x 22 / 868), chiplar karta pastida (1060/1190), CTA karta ostida.
7. `common/nx.js` (+ `nx_icons_extra.js`: valeriana, melissa, lavanda, yalpiz, tog'rayhon, tirnoqgul, uy, mashina, ko'z, telefon, hamyon, miya, qum soat...) + `g1/g2/g3.css` (mavzu o'zgaruvchilari) → HyperFrames `front.mov` (`rfront.sh`, ~3 daq/video).
8. `comp.py` — proxy + virtual kamera + **Difference matn (portret.py Matn)** + burn/leak/grain/vinyetka + portret ramka (kirish 0.30–1.15 s) + front qatlam. `preview.py N t,t,...` — render qilmasdan kadr varag'i (asos + snapshot).
9. `audio.py` — RNNoise + kompressor; musiqa eng katta ko'tarilishi NEIROZOL so'ziga (gapda ovozdan ~22–25 dB past, duck −5 dB); SFX ovoz p90 dan ≥8 dB past; −14 LUFS. `finalize.py` — mux + qora/muzlash tekshiruvi.

## Tuzoqlar (o'zim topdim)
- `np.convolve` ni 48 kHz signalda 0.8 s yadro bilan qilma — 10 daqiqa osiladi; 100 Hz to'rda silliqla, keyin `interp`.
- `v.t("kechasi")` body ichida **birinchi** uchrashni qaytaradi — mahsulotdan keyingi so'z kerak bo'lsa `after=` ber (aks holda element hech qachon ko'rinmaydi).
- Karta chetidagi stiker yorlig'i (uzun so'z) kanvasdan chiqadi → o'ng tomonda o'ngga tekislash (`.st1.lr`).
- Quti aniqlash firuza fonda yolg'on topadi → ichi oq/krem tekshiruvi shart.

Bog'liq: [[Portret uslub va shaffof shrift]] · [[Tabiiy B-roll motion konveyeri]] · [[Ikki kamerali hook seriyasi konveyeri]] · Markaz: [[Video montaj]]

## Xom kliplardan (montajchisiz) — Iskander Buildings (2026-10-22)
Papka: `D:/claude_ish/loyihalar/2026-10-22_iskandar_building/tools/` (Iskander Buildings - Mezbon (22.10.2026)).
1. `sheet.py` (9:16 kataklar) → `transcribe.py` (WPORT/WSUF/WPROMPT) → `reread.py` + bir nechta til (uz/kk/tr) bilan fonetik o'qish → `edges.py` (10 ms nutq chegaralari) → `strip.py CLIP t0 t1 qadam` (kesim chetini kadrda ko'rish).
2. `work/V/edl.json` {segs: [[klip, a, b, {stab, fixz}]]} → `build_seg.py V`: har bo'lak 4K dan 1440×2560, `grade.py` (bo'lakka o'z oq balansi + umumiy uslub), `beauty.py` 0.5, `stab.py` (spiker niqoblanadi, LK+RANSAC o'xshashlik, shtativ yoki Gauss σ9, zoom ≤1.09) → `proxy/V.mp4`, `src/V.wav`, `segmap.json`, `face/V.json`. Kamera keskin burilib (whip) kirgan bo'lakni ikkiga bo'l: whip `stab off`, qolgani stab, ikkalasi `fixz` bir xil.
3. `texts/texts_ib.json` ("|" = segment, "~so'z" = ekranga chiqmaydi) → `mkwords_ib.py` (whisper so'z vaqtlari + NW + lokal pauzalar).
4. `mkplan_ib.py` — `chip / stat (count-up) / kick / dif / check / cta / comment / brand / burn`, har biri o'z SFX bilan; `common/nx_icons_ib.js` (kalit, bino, mashina, samolyot, kamera, P-avtoturargoh, o'yingoh, daraxt, pul, kalendar, pin, galochka, foiz, sport). Subtitr — pill plashka (`.wc .pl`).
5. `comp.py` + `difftext.py` (moslashuvchan soya) → `audio.py` → `finalize.py` → `qa.py`; navbat: `chainF.sh` (1 ta HyperFrames), `workerC.sh` ×2, `autofin2.sh`.

## Tezlashtirish va rang (22 video, 2026-10-23)
- **comp.py 4× tez, sifat bir xil (PSNR 47 dB):** avval `warp` (1440×2560 → 1080×1920), keyin grade + persona chiqish o'lchamida (piksel bo'yicha amallar — natija o'zgarmaydi); vinyetka `cv2.multiply` (uint8 VIG), grain ±uint8 juftligi `cv2.add/subtract`; old qatlam (front.mov) faqat alfa > 0 qatorlarda float. Profil: float qism 400 ms → ~15 ms, grade 87 → 32, persona 214 → 132 ms. Persona kuzatuvi har shot boshida yangilanadi (`RESET`).
- Navbat: HyperFrames 2 ta parallel (~4.5 daq/video), comp 3 ta parallel. Reja (index.html) o'zgarsa — front.ok ni o'chirib qayta render (eski front qolsa elementlar mos kelmaydi).
- **Sariq fon (amber) limon tusiga o'tadi** (oq balans ko'k-kulrang ko'ylakdan o'lchanadi): `grade.make_grade(tame=1, hue=-4)` — faqat H 14–46, S>150 fon: S −16%, V −8%, tus −4 (tilla tomon). Teri (H≤14) tegmaydi.
- **Bo'shliq to'ldirish** (`specs.fill_gaps`): CTA gacha >7 s yangi element bo'lmasa, gapdagi kalit so'z (FILL ro'yxati: stress, befarq, sababini, tekshirtiring...) bo'yicha yengil chip.
- Takror gapni kesish: so'z vaqti emas, **RMS jimlik** nuqtasi (10 ms qadam) — "K" portlovchisi kesilib qolmasin.
- **Render oldidan majburiy 3 tekshiruv** (hammasi rejadan, render qilmasdan, soniyalarda): `facecheck.py` (har element kamera bilan chiqishga o'tkazilgan yuz qutisiga ≥8% tegmasin), `overlapcheck.py` (vaqtda kesishgan elementlar bir-birini yopmasin), `gaps.py` (>7 s bo'shliq). mkplan o'zi tuzatadi: `avoid_face` → `avoid_box` → `resolve_overlaps` (siljish nomzodlari yuz/quti/subtitr/boshqalarga qarab tekshiriladi).
- Zoom 1.3 da iyak 900–1075 px ga tushadi — standing chip yo'lagi c1=880 yuzga tegishi mumkin; mahsulot "kick" i bosh ustiga (y 170).

## Studiya otzivlari, 50 fps manba (2026-10-25, MediaZone studiya otzivlari - Onyx zal (25.10.2026))
Papka: `D:/claude_ish/loyihalar/2026-10-25_studiya_2video/tools/`. NEIROZOL 22 konveyeriga qo'shimchalar:
- **50 fps:** `plan.fps`, HTML `data-fps=50`, `rfront.sh --fps 50`. comp 1080×1920 da ~0.24 s/kadr (2 parallel ~0.36).
- **Yumshoq zoom o'tish:** shot'da `tr: 1.0` — `cam_at` kesim markazida oldingi va keyingi kadr holatini (k, f, c) power2.inOut bilan aralashtiradi; har ikkinchi virtual kesimda. Kesim nuqtasi: pauza bo'lmasa — tinish belgili so'z chegarasi (`wb` ro'yxati, 2.5–5.8 s oynada).
- **Shaffof shrift shrifti tanlanadi:** `comp.FMatn(font=plan.dfont)` (Geologica Black / Onest Black — TTF `common/fonts`). UI shrifti `meta.font.ui` → `--capF/--chF/--tF`.
- **Pill subtitr:** `nx.js caps()` so'zlarni `.pl` (rgba to'q, r28) ichiga oladi — och kiyim ustida oq matn o'qiladi. Subtitr markazi 1330 (Instagram xavfsiz zonasi, #208).
- **Rang:** `make_grade(wb=0.3, face_keep=True)` — iliq oniks fon limon tusiga o'tmaydi, yuz yorqinligi asl holida (+1.5%). Xom/tayyor yuzni yonma-yon ko'r.
- **Operator o'zi zoom qilgan kadr** (`bgscale.py` — fon bo'yicha ECC masshtab): virtual zoom kichik (1.04↔1.15), kesimlar baribir gap chegarasida.
- Ikonkalar `nx_icons_mz.js`: camera, insta, film, scissors, sparkle, medal, views, fire, chatq, heart2, pin; `nxLogo(X, {t,out,y,w})` — oq MediaZone logosi blur-in.
- Sheva matni: `rr.py` (uz / uz+prompt / kk / tr, `LANGS`, `WPORT`), large-v3 + turbo solishtiriladi; noaniq so'z `~` bilan yashiriladi.

## v2: spiker + AI B-roll + klon ovoz, to'liq qotirish (2026-10-26)
Papka o'sha (`2026-10-25_studiya_2video/tools/`). Qo'shimchalar:
- **Vaqt chizig'i bo'laklari** (`specs.META.pieces`): `{"k":"spk","a","b"}` (manba vaqti) va `{"k":"vo","clip":"VO_M_b","a","b"}` (ElevenLabs fayli vaqti). `mkplan.V.o()` VO bo'laklarini hisobga olib vaqtni suradi, VO so'zlari (`vo_words.py` → `texts/VO_*_words.json`) subtitr va elementlarga qo'shiladi. `broll`: `{"clip", "at": ["spk", ts] | ["vo", clip, tv], "dur"}` — rasm qatlami, ovoz o'zgarmaydi.
- **comp.py**: spiker bo'lagi o'qiladi (B-roll ostida ham — sinxron), B-roll faqat GRADE (persona yo'q), manba almashgan har nuqtada ±0.14 s radial zoom-blur + 7% chaqnash (`zoomblur`), whoosh `airy` −11.
- **broll_prep.py**: Flow 720p/24 → `setpts=PTS*24/25,fps=25` (kadr takrori/aralashuvisiz 25p) → Lanczos 1080 + unsharp → `fps=50`; suratlar: Real-ESRGAN x4plus 60% + Lanczos 40%, 1296×2304 dan ease push-in ≤2.5%/s.
- **stablock.py**: operator kamerasini to'liq qotirish — LK+RANSAC o'xshashlik matritsalari **ko'paytiriladi** (log-masshtab/siljishni qo'shish zoomda xato beradi), teskari matritsa = tuzatish; `valid` (hamma kadrda bor joy, C7015: eni 0.71) → `mkplan.shots` f ni shu oraliqqa siljitadi, `comp.cover_k` va `_cam` valid bo'yicha. 4K manba `proxy 1620×2880` (ffmpeg lanczos) — warp ~1:1, aliasing yo'q; `stab_pw` bilan matritsa siljishi masshtablanadi. Yuz xaritasi ham qotirilgan koordinataga o'tkaziladi (`face/N_raw.json` asl).
- **audio.py**: bo'laklar ketma-ket, VO nutq RMS spikerga tenglanadi (±1 dB), har ulanishda 10 ms fade.
- Kerakli tekshiruv: B-roll oynasi (0.3 s qadam varaq) — AI uchib o'tadigan begona narsalarni chetla; shaffof shrift bo'lak chegarasidan oshib spiker yuziga tushmasin.

## 24.10 to'plamidan (2026-10-26)
- **So'z vaqtlari shevali nutqda:** qisqa iboralarni alohida o'qish ASR ni buzadi (kirill, chala so'z) → so'zlar siqiladi. To'g'ri yo'l — `mkwords2.py`: ≤18 s oynalar, whisper-server `response_format=verbose_json` (har token/bo'g'in vaqti bilan), matn harflari ↔ token harflari NW. "Yotishdan" 4.85→5.26 s ga tuzaldi.
- **Gibrid portret:** boshida karta (~10 s), pauzada karta silliq kattalashib to'liq kadrga (comp `pout`, p4io); kartadagi elementlar o'tishdan oldin tugasin, sarlavhalar o'tishdan keyin kicker (bosh ustida).
- **Rang (rangli fon + oq kiyim):** daraja kengaytirish (hi 215) to'yinganlik va yaltiroqlikni oshiradi → `hi_min 235`, `sat 0.85`, `skin_sat 0.85`, `wb 0.5`.
- Uzluksiz nutqda virtual kesim uchun pauza ≥0.05 s yetadi (aks holda 25 s da 2 ta kadr).
- Takroriy dub: `META dups [[a, k, b, k]]` — a ning k-chi uchrashuvidan b gacha, chegaralar RMS jimlikka.
