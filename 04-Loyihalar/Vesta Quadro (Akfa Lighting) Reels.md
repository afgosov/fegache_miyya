---
tur: loyiha
sana: 2026-10-21
teglar: [loyiha, akfa, vesta, quadro, shaffof-shrift, motion-overlay, reels]
---
# Vesta Electric Quadro — Akfa Lighting Reels (20.10.2026 syomka)

**Talab:** `D:/2 Mediazone montaj qilish kere/akfa lighting 20.10.2026/` C0333–C0366 (20 klip, Sony 4K 25p, rotation=90 metadata bor). "Barchasidan farq qilsin, Instagram post; bugun o'rgangan **shaffof shrift** — faqat asosiy gaplarda, ko'p emas; motion montaj, lekin kadr motionga o'tib ketmasin; shumlarga e'tibor; faqat eng yaxshi kadrlar; video boshida 2–3 s jimlik, duduq, adashgan joylar yo'q".

## Natija
- `_akfa_lighting/TAYYOR/Vesta_Quadro_Akfa_Lighting.mp4` (+ `Telegram Desktop/TAYYOR/`) — 44.24 s, −14.1 LUFS, TP −3.0.
- Ssenariy (har gapdan eng toza dubl, energiya + yuz bilan tekshirilgan): C0335 6.76 ("e," to'ldiruvchisi kesildi) "Elektrikka mazza bo'pti-da, zo'r o'ylangan ekan" → "Vertikal ham, gorizontal ham…" (ovoz C0335, tasvir C0350 B-roll — ramka aylanadi, so'zga mos) → C0337 3-dubl "vaqtini ham, asabini ham qadrlaymiz" → C0341 "o'rnatish tarafdan ham, dizayn…" (cutaway C0346) → C0342 "Sodda bo'lishi bilan zamonaviy…" (cutaway C0343 rozetka) → C0347 "gorizontal ham, vertikal ham… universal" (o'zi ko'rsatadi) → C0352 (cutaway C0351; 0.52 s pauza punch-in bilan kesildi) → C0359 "USB + Type-C" → C0366 3.16 "O'zingizni qiynamasdan, Vesta Electric Quadro…" + tabassum bilan yakun (Vesta logo).
- Shaffof (Difference) shrift 5 ta: VAQT VA ASAB, SODDA VA ZAMONAVIY, UNIVERSAL, USB + TYPE-C, VESTA QUADRO — `portret.py --plan diff_plan.json` (rejim toliq, kirish_anim yoq), y har kadrda tanadagi qora hoodie ustida (yuzga/mahsulotga tushmaydi).
- Overlay (yangi "texnik pasport" uslubi): sariq #FFD200 + qora shisha plitalar, Inter Tight; vizor burchaklari, VERTIKAL/GORIZONTAL yorliqlari, checklist (O'rnatish ✓ Dizayn ✓ → SODDA), "YANGI MODEL" ko'rsatkich, kirish yorlig'i "VESTA ELECTRIC / Quadro seriyasi". Musiqa Mixkit 470 "Golden Storm" (yangi).
- EDL yangiligi: `vclip`/`vt` — ovoz bir klipdan, tasvir boshqa klipdan (cutaway/L-kesim). `build_base.py` da.
- Tekshiruvda topilib tuzatilgan: oq yorliqlar oq devorda ko'rinmasdi → qora plita; UNIVERSAL yuzga tushgan → y 0.80; C0339 B-rollda yuz yarim kesilgan → C0346.

## v2 (2026-10-21) — foydalanuvchi tanqidi
Talablar: boshlanishi "s'yomka hali boshlanmagandek" (boshlovchi pastga qarab turibdi) → qora fon yoki boshqacha; yuzni tozalash + tishni oqartirish ("defektim bilinib qopti" — boshlovchi foydalanuvchining o'zi); musiqa yoqmadi; **"Quadro" emas "Kvadro"**; stabilizatsiya; filtr (rang) to'g'ri emas; rozetka B-rollida ortidagi shtrix-kodli quti (tirgak) ko'rinib qolgan; keyin: "motionlarni ko'paytir, shaffof shrift va boshqa effektlar".
- **Ochilish "chiroq yoqildi"** (Akfa Lighting mavzusi): 0.4 s qora + sariq chiroq tugmasi ikonkasi yoqiladi ("щелкает выключателем" SFX) → kadr lyuminessent lampadek miltillab yonadi (`FLICKER` 7 kadr, build_base `flicker`) + bloom, "Прожектор" SFX. EDL boshida `{"who":"BLACK","clip":"BLACK","a":0,"b":0.4,"mute":true}`.
- **Rang (grade.py v2):** oq balans to'liq (±9%), teri to'yinganligi hamma kadrda bir xil (maqsad (R−B)/R = 0.326, ×0.78–1.28), yuz faqat yorug'lashtiriladi (maqsad 160), fonda sariq nur (H 18–34, S<170) −30% va ko'k-zangori (H 84–118) −26% → hamma kadr bitta filtrda.
- **Retush** (`tools/retouch.py`, beauty.py 0.62 + qizil dog'lar a* −60% mahalliy o'rtachadan + tish oqartirish ichki lab konturida: b −65%, a −40%, L +22%). 935/1116 kadrda yuz.
- **Tirgak o'chirish:** S2 da quti kanvas [859,1950,906,2120] → 44 px o'ngdagi fon/stol bo'lagi + ustun bo'yicha yorug'lik tuzatish (quti ustidagi/ostidagi toza qatorlardan) + o'ng chet 12 px feather. (Telea inpaint → rozetka qorasi oqadi; seamlessClone → quti rangi chegaradan yoyiladi — ikkalasi yaroqsiz.)
- **Stabilizatsiya:** shtativ kadrlari (H1, V, Q, S) fon titrashi < 0.25 px — tegilmadi; qo'lda olingan U, O2, O3, T, C: 1-bosqich `stab.py` (bosh ustidagi devor/parda tasmasi faza korrelyatsiyasi, yuz siljishi zaxira) + 2-bosqich `stab2.py` (tayyor kadrda chap/o'ng/tepa tasma, 3 baho medianasi, sigma 7, zoom 1.035). Natija titrash: U 1.75→0.97, O2 1.00→0.15, O3 1.73→0.58, T 3.67→2.18, C 0.25→0.24 px@540.
- **Motion:** shaffof shrift 5 → 9 (ZO‘R O‘YLANGAN, KVADRO, ENG MUHIMI, HAMMASI OSON qo'shildi; `portret_rang.py` x/rgb), "elektrik" so'zida chaqmoq ikonka (2), KVADRO atrofida o'zi chiziladigan sariq kvadrat, 8 kesimda iliq light leak + whoosh, `fx_pass` (9 zarba + 13 kesimda zoom-blur), yakunda logo lampadek miltillab yonadi + kvadrat ramka + yaltirash + sariq kvadratchalar.
- **Musiqa:** Mixkit 744 "House 02" (122 BPM), `start` 7.52 → bas 0.40 s da (chiroq yonishi bilan) kiradi.
- `TAYYOR/Vesta_Kvadro_Akfa_Lighting_v2.mp4` (+ `Telegram Desktop/TAYYOR/`) — 44.64 s, −14.2 LUFS, TP −3.1, qora faqat 0–0.4 s (ataylab), muzlash yo'q, ovoz v1 bilan sinxron. v1 `eski_versiyalar/` da.

## v3 (2026-10-21) — "motionni kuchaytir, yuziga persona ber, ranglar bilan sifatliroq ishla" + TZ (3 namuna)
- Ish davomida foydalanuvchi 3 ta Instagram reel yubordi: "TZ sifatida qabul qil, persona qo'y, tishni oqartir, qolganini shu videolardek qil" → [[Namuna tahlili - glow.rustamov maktabi (TZ, 3 ta)]].
- **Persona (erkak):** `tools/persona_m.py` — guided filter + dog'larni to'ldirish (black-hat L, top-hat a*), tekstura 38% qaytariladi, yog'li yaltiroq p93 dan yuqorisi −45%, qizillik tekislanadi, ko'z osti +6 L, yorug' teriga nur, ko'z tiniqligi, tish oqartirish, V-yuz 2.5% (jag' nuqtalaridan eng yaqini, siljish maydoni 1/4 o'lchamda). Kuch 0.92.
- **Rang:** `look.py` "A" (filmik egri, soyalar zangori / yorug'lar iliq, terisiz joylarda vibrance + tiniqlik, halation, vinyetka) + `relight.py` (RVM alfa: fon ×0.36–0.66, rangsizroq, tepasi qorong'i, odam ortida yorug' dog') = namunadagi moody kadr.
- **Tezlik:** Persona+look 0.55 s/kadr → 5 ta parallel bo'lak (segment chegaralarida) + `concat -c copy` ≈ 5 daqiqa.
- **Motion (gen_ov4.py, plan4.py):** 39 ta sariq pill so'zma-so'z subtitr (matn qo'lda to'g'ri imloda, vaqt whisper `-ml 1 -sow` + jimlik → ovoz o'tishiga moslash; ishonchsiz 2 so'z ("bu ramkaga…") subtitrsiz), 6 ta katta matn (ZO'R, VAQT, ZAMONAVIY, UNIVERSAL, USB + TYPE-C, VESTA) blur-skew kirish + halqa + porlovchi ikonkalar, 4 ta toggle (Vertikal/Gorizontal), burchak brendlari "vesta / electric." · "kvadro / seriyasi.", chiroq tugmasi ochilishi saqlandi.
- **UI sahnalar (`cards.py` + overlay):** Q (9.4–14.5) spiker 0.56 kartochkada + "Kvadro modellari" sozlamalar kartasi (O'rnatish/Dizayn toggle → SODDA ✓); MSG (25.4–28.1) piksel o'tishi bilan "Xabarlar": "Usta, o'rnatish qiyinmi?" → "Ortiqcha qiyinchiliksiz" → "Hammasi oson! ✓"; END (43.2+) kartochka + Vesta brend kartasi + kursor "Batafsil" ni bosadi. Krem gradientda banding → dither ±1.4.
- **Musiqa:** Mixkit 738 "Hip Hop 02" (97 BPM), `start` 4.509 → takt boshi 0.40 s da (chiroq yonishi).
- `TAYYOR/Vesta_Kvadro_Akfa_Lighting_v3.mp4` (+ `Telegram Desktop/TAYYOR/`) — 44.64 s, −14.2 LUFS, TP −3.1, qora faqat 0–0.4 s. v1/v2 `eski_versiyalar/` da.

## v4 (2026-10-23) — mijoz otzivi (3 ta ovozli xabar) bo'yicha
Otziv: "motion'ga o'xshagan narsa yoqyapti, lekin detallar ko'payib, **kasha** bo'lib ketgan, ko'rishga ulgurmaydi"; "**vijir-vijir**: Vesta USB ni ushlab turganimda tovar vijillayapti, chetlarim **PNG** qo'yganga o'xshab qolgan"; "**multfilm** bo'lib qolgan"; "muzika **templi emas**, yengil multfilm muzika — dinamikroq, kompaniyaga mos qo'yish kerak"; "**gaplarim oxirigacha eshitilmayapti** — 'qo'ysa bo'lar…', tugallanmasdan keyingi kadrga o'tib ketyapti".
- **Gap oxirlari:** har bo'lak chegarasi 10 ms energiya bo'yicha qayta o'lchandi. 9 ta bo'lakda so'zning so'nish qismi (40–250 ms) kesilgan edi. Endi oxiri −56 dB gacha + 0.12 s nafas, boshi jimlikda 0.1 s oldinroq. Video 44.6 → 47.6 s. Tekshiruv: har gap oxirgi 60 ms ≤ −59 dBFS, whisper qayta o'qidi ("bo'larkan", "ko'rinishga ega", "maslahat beramiz" to'liq).
- **Vijir-vijir / PNG:** sababi `relight.py` (RVM niqobi). Qadoqning bir qismi niqobdan tashqarida qolib, qorayib miltillagan, kiyim chetida oq halo bo'lgan. Endi niqob yo'q: `spot.py`, ya'ni har bo'lakka bitta qimirlamaydigan yumshoq spot (EDL fx/fy) + tepa qorong'iroq. Ketma-ket kadrlarda qadoq va chetlar toza.
- **Multfilm:** Persona k 0.92 → 0.55, tekstura 0.38 → 0.62, V-yuz o'chirildi, nur/ko'z keskinligi kamaydi. Look "N": tiniqlik 0.28 → 0.10, halation 0.07 → 0.03.
- **Kasha → tinch:** 39 pill → 25 iborali oq subtitr (kalit so'z sariq, ≥ 0.9 s); katta matn 6 → 4 (ikonka/halqasiz); chat sahnasi, kursor, uchqunlar, zoom-blur, glitch va ko'p zarbalar olib tashlandi. Q kartasi, toggle'lar, END brend kartasi va burchak brendlari qoldi. SFX 34 → 16.
- **Musiqa:** Mixkit 162 "Minimal Techno 01" (128 BPM, nutq polosasi −13.8 dB, jiddiy va tempi baland), `start` 7.312 → takt 0.40 s da; db_bed −31, db_open −15.
- `TAYYOR/Vesta_Kvadro_Akfa_Lighting_v4.mp4` (+ `Telegram Desktop/TAYYOR/`) — 47.6 s, −14.2 LUFS, TP −3.0. v1–v3 `eski_versiyalar/` da.

## v5 (2026-10-23) — "musiqa juda baland va mavzuga mos emas, juda sho'x bo'lib ketgan"
- 12 ta nomzod yorqinlik (spektral markaz), yuqori chastotali urg'ular va nutq polosasi bo'yicha solishtirildi. Minimal Techno 01 markazi ~3980 Hz edi va master −4 dB → sho'x/qattiq eshitildi.
- Yangi: Mixkit 134 **"Deep Techno Ambience"** (125 BPM, markaz ~1560 Hz — to'q, jiddiy texno-fon, nutq polosasi −13 dB), `start` 7.457 → takt 0.40 s da. Daraja: `db_bed` −31 → **−37**, `db_open` −15 → **−20**: gapsiz joylarda musiqa 4.5 dB pastroq, gap ostida 6 dB pastroq. Tasvir o'zgarmadi (video oqimi nusxa).
- `TAYYOR/Vesta_Kvadro_Akfa_Lighting_v5.mp4` (+ Telegram), 47.6 s, −14.2 LUFS. v4 `eski_versiyalar/` da.

## v6 (2026-10-23) — ikki subtitr so'zi
- Foydalanuvchi: 0:33 da **"qulayligini"** (men "ko'nglini" deb yozgan edim), 0:45 da **"tanlashingizni"** ("ishlatishingizni" emas). To'g'ri gaplar: "Elektrik akalarimizning **qulayligini** o'ylaganmiz", "Vesta Electric Kvadro modellarini **tanlashingizni** maslahat beramiz". Faqat overlay qayta render qilindi; tasvir va ovoz v5 dagidek.
- `TAYYOR/Vesta_Kvadro_Akfa_Lighting_v6.mp4` (+ Telegram). v5 `eski_versiyalar/` da.

## v7 (2026-10-23) — mijoz: "Zo'r, men xohlagandek chiqibdi" + 4 tuzatish
- **Bosh "Ele-" tushib qolgan ("r-r-triklar"):** v1 da "e," to'ldiruvchi deb 6.76 dan kesilgan edi, aslida bu "E-lektriklarga" boshi (6.34). RNN tozalagich (arnndn) so'z boshini ham −40 dB gacha bosgan (xom −17). Yechim: H1 5.80 dan (u stoldan ramkani olib qaraydi, ~0.55 s jimlik), gap chetlarida yengil tozalangan ovoz (`vlt/`, afftdn nr 12) bilan aralashtirish.
- **"bo'larkan" "-kan" i:** spiker past aytgan (−43 dB, gapdan ~22 dB past), tozalagich va nafas shlyuzi uni yeb qo'ygan. Yechim: chetda `vlt` + EDL `boost` [12.37–12.54, +10 dB]. Whisper endi "khusuholakyan" (oldin "khusubolak") deb eshitadi.
- **"Trin-trin-trin" SFX:** v2 dagi Twinkle (C manba 8.76) + блеск 1 (9.41) — qo'l ramkani silkitgan paytga qaytarildi.
- **Rang gradientlari:** fon tusi kadrlar bo'ylab sakragan (H1/V/S b +8 sariq, C a −10 zangori). `spot2.py`: har bo'lak fonini float Lab da a −1 / b +3 ga surish (teri, qora kiyim, to'yingan narsalar himoyalangan) + spot kuchi bo'lakka mos + dither σ 0.9. Yakunda `gradfun` + `noise c0s=2` (crf 17, 127 MB). Natija: fon a −1…−2, b +2…+5; pog'ona uzunligi 3.3–3.9 → 2.7–2.9 px.
- **Musiqa:** 3 variant topshirildi — asosiy A Mixkit 132 "Hazy After Hours" (start 15.6, kirish→to'liq ritm 0.40 s da), B 33 "Motivating Mornings" (11.75), C 173 "Better Times are Coming" (1.77). Hammasi −37/−20 dB.
- `TAYYOR/Vesta_Kvadro_Akfa_Lighting_v7.mp4` (+ `_musiqa_B`, `_musiqa_C`; Telegram TAYYOR) — 48.6 s, −14.2 LUFS. v6 `eski_versiyalar/` da.

## v8 (2026-10-24) — "SFX qo'yib bermabsiz; boshida hook qora bilan, fonda riser bilan boshlanishi kerak edi; oxirida Vesta Electric bo'lishi kerak (Akfa Lighting bo'p qopti)"
- **Qora hook (1.6 s):** EDL BLACK 0.4 → 1.6 (video: base_fx oldiga 30 qora kadr, qayta render shart emas). 0.12 "Elektriklar," (sariq), 0.30 "BUNI KO'RING!" zarb + silkinish, 1.12 uchib ketadi, 1.24 chiroq tugmasi, 1.54 "chirt", 1.60 chiroq yonadi. Riser 1 + Sharp Detail Riser cho'qqisi 1.60 da. Musiqa (Hazy After Hours) `delay` 1.6 bilan aynan chiroq yonganda kiradi (`build_audio.py` ga `delay` qo'shildi).
- **SFX 18 → 61:** har kesimda whoosh, har subtitrda yumshoq "tap" (−17), katta matnda whoosh + Drop, toggle klik −10, Q kirish/chiqish, yakunda whoosh + flash + Twinkle + блеск. Chiroq yonishi to'plami gap cho'qqisidan ~4 dB past.
- **Yakun:** brend kartasidagi "Kvadro seriyasi · Akfa Lighting" → **"Vesta Electric · Kvadro seriyasi"**.
- `TAYYOR/Vesta_Kvadro_Akfa_Lighting_v8.mp4` (+ Telegram), 49.8 s, −14.2 LUFS, TP −3.0. v7 (3 ta) `eski_versiyalar/` da.
- Topshirish joyi (2026-10-24): `Telegram Desktop/TAYYOR/` endi yo'q (foydalanuvchi tozalagan) → qoida bo'yicha manba papka `D:/2 Mediazone montaj qilish kere/akfa lighting 20.10.2026/TAYYOR/`.
