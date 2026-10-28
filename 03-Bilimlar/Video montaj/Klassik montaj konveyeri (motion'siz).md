---
tur: bilim
sana: 2026-10-16
teglar: [montaj, klassik, reels, brand-face, b-roll, konveyer]
---
# Klassik montaj konveyeri (motion'siz Brand Face + B-roll Reels)

Birinchi marta: [[Premier Uzbekistan Reels (Primer papka)]]. Foydalanuvchi "klassik uslub, motion kadrlar yo'q" desa — shu.

## Uslub (Premier namunasi, brauzerda o'lchangan)
- 9:16, 55–85 s. Brand Face showroomda (gimbal bilan yaqinlashish) → mahsulot B-roll (qo'l bilan ko'rsatish, makro) → yakunda yana Brand Face.
- Kadr o'rtacha 3–5 s. Hook'dan keyin bitta **light leak** (to'q sariq/pushti, 14 kadr, screen) + yumshoq whoosh. Qolgani oddiy kesim.
- **To'liq subtitr yo'q** — faqat ssenariydagi "Ekran yozuvi" (kalit atama): oq, katta harf, Montserrat 600, ~78 px, harf oralig'i +0.04em, markazda (y≈0.47), yumshoq soya, so'z aytilganda so'zma-so'z paydo bo'ladi (4 kadr so'nish). Yorug' fon (oq filtr, LED chiziq) ustida bo'lsa y ni qorong'i joyga ko'chir.
- Ketma-ket bir xil o'lchamdagi spiker kadrlari (jump) → keyingisini 1.16× punch-in qil.
- Musiqa: Mixkit past bassli trek, ovozdan ~17 LU past (`db: -42`), yakuniy kartochkada +6 dB, ovozsiz bo'laklarda +7 dB (`gap_lift`).
- Yakun: 3.4 s qora kartochka — oq logo (kenglik 640/1080) + 50 px slogan 2 qator, logo 0.5 s da, slogan 0.3 s keyin paydo bo'ladi.
- Har B-roll'ga yengil zoom 1.00↔1.05 (navbatma-navbat), gimbal harakati bor spiker kadrlariga zoom berilmaydi.

## Konveyer (`_primer/tools/`)
1. `prep.py` — 48k/16k wav, 1 fps kadr varaqlari (rotation=90 vertikal Sony).
2. `phr2.py` — **moslashuvchan chegara** (p12 + 0.38·(p95−p12)) bilan ibora bo'laklari → whisper-server. Eski `phr.py` (p90−26 dB) shovqinli showroomda butun klipni bitta bo'lak qilib, gallyutsinatsiya berdi.
3. `tok.py klip a b` — tor oynada so'z vaqtlari (verbose_json) + pauzalar. **Takror dubllar bor oynani butun berma** — whisper takrorni "yutib" yuboradi; 3–6 s kichik oynalarga bo'l.
4. `plan.json` — segmentlar: `aud` (bitta yoki bir nechta bo'lak, yoki `null` + `dur` = faqat musiqa), `vid` (sync yoki B-roll [klip, kirish, davom, {z, c}]), `captions` (lines, wt so'z vaqtlari), `leak`.
5. `build.py` — ffmpeg (cuda) 4K → 1296×2304 → warpAffine zoom → grade → light leak → yozuv → x264. Bir xil manba kadri ikki joyda ishlatilsa ogohlantiradi. ~2 daqiqa / 75 s video.
6. `cut_check.py` — har segmentni qayta whisper bilan o'qish (ekipaj so'zlari, yarim so'z, takror).
7. `mix.py` — RNNoise + EQ + kompressor, musiqa ducking, leak whoosh, −14 LUFS, limiter.
8. `final.py` — mux AAC 320k, LUFS/TP, blackdetect, freezedetect (faqat tana qismida), kontakt varaq, TAYYOR ga nusxa.

## v2 qo'shimchalari (foydalanuvchi tanqididan keyin, 2026-10-16)
- **`male_scan.py`** — operator/rejissyor ovozini topish: YIN F0 (10 ms). Spiker ayol (~240–320 Hz), erkak 100–150 Hz. Har bo'lakda F0<165 Hz, ovozlilik >0.6, ≥0.15 s — whisper bilan o'qib tekshir. Shunday topildi: C8458 73.4–75.2 s rejissyor "Duxovkaning ichki…" deb aytib bergan (balandligi spikerdan atigi 5–8 dB past — eski `quiet_check` ≥9 dB/0.9 s uni o'tkazib yuborgan). 70–98 Hz qisqa "erkak" — bu hirqiroq ovoz (vocal fry), xato signal.
- **`shake.py` + build ichidagi stabilizator** — LK + RANSAC o'xshashlik (540×960) → traektoriya; tuzatish = Gauss(σ 14→9→6→4) − xom; kerakli zoom ≤1.2 bo'lmasa σ kamayadi; inlier <0.7 yoki titrash <0.9 px bo'lsa tegmaydi. Kadr chegarasi chiqmasligi har kadrda tekshiriladi. Kamera ob'ektga ergashgan kadr (C8414) stabilizatsiya bo'lmaydi → bunday kadrni ishlatma.
- **`edges.py`** — spiker kadrining kirish/chiqishini 10 fps da ko'rish: kutib turgan, pastga qaragan, sochini tuzatgan joylar.
- **`shotsheet.py`** — har kadrning boshi/o'rtasi/oxiri; qo'shni kadrlar bir xil emasligini, harakat tugashini tekshirish.
- Build endi bir klip ikki joyda ishlatilsa ogohlantiradi; ovoz bo'laklari nutq balandligi bo'yicha tenglanadi (±6 dB); leak SFX = `medlennyiy-zamah.mp3` (0.5 s), uzun riser emas.
- Kesish qoidasi: spiker klipidan B-roll faqat faol harakat bo'lsa (changyutgich bilan yurish); "Motor"dan oldin turib kutish — yo'q. Kamera kech yoqilib, birinchi tovush kesilgan dubl (C8392 0.00 s da "Premier") — boshqa dublni ol.

## v3: ishlaydigan stabilizator va ritm (2026-10-16)
- `shake2.py` → `traj2/` (markaz siljishi t = M·c − c, aylanishsiz; inlier <0.5 bo'lsa phaseCorrelate). Build: avval 2-darajali polinom "glide", zoom >1.22 bo'lsa Gauss 24/14/8. Gimbal spiker kadrlarida `stab_min: 0.9` yoki `stab: false`.
- **Tekshiruv majburiy:** `NOCAP=1 build.py` (yozuv/leak'siz) → `out_shake.py` → har kadr "manba → chiqish" px. Statik yozuv o'lchovni nolga tortadi — yozuvli videoda o'lchama.
- `beats.py` → `beats/<musiqa>.json`; build kesimni ±0.45 s zarbga suradi, klip yetmasa o'zi o'chiradi; segment uchun `"snap": false`.
- Build ogohlantirishi `> klip` = qotib qolgan kadr → har safar tuzat.

## Tuzoqlar
- VO ("ozvuchka") ko'pincha alohida klipda: qiz qog'ozdan o'qiydi, kamera qiya/backstage — faqat ovozini ol.
- B-roll sifatida spiker klipining "gapirmagan" qismini olsang, 5 fps da og'zini tekshir (C8449: 2.2 s dan og'iz ochiladi).
- Ssenariy va syomka farq qilishi mumkin (model nomi o'zgargan) — yorliqni kadrdan o'qi.

Bog'liq: [[Video montaj]] · [[Subtitr san'ati]] · [[Zamonaviy reklama montaji]]
