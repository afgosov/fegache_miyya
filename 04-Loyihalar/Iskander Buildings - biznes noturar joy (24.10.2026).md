---
tur: loyiha
sana: 2026-10-25
teglar: [loyiha, iskander-buildings, kochmas-mulk, target, reels, noturar-joy, ai-insert, serif]
---
# Iskander Buildings — biznes uchun noturar joy (24.10.2026 papka, 41 klip → 4 video)

- **Manba:** `D:\2 Mediazone montaj qilish kere\24.10.2026 Iskandar bulding` (A7S III, vertikal). Natija: `...\TAYYOR\` + `musiqasiz\`. Ish: `D:/claude_ish/loyihalar/2026-10-25_iskandar_v2/`.
- **Topshiriq:** 4 namuna reels (realtor tur, thekx kinetik matn, 2 ta AI "teskari qurilish") uslubida, zamonaviy shriftlar, qurilish ko'ringan kadrlarda bino paydo bo'lish animatsiyasi; oldingi Iskander xatolari takrorlanmasin.
- **Spiker:** bitta qiz, 3 kiyim/joy: qora kostyum (ofis/lobbi), bej (soch yoyiq), bej + kaska (qurilish); bej + soch turmaklangan (09:39, kirish dubllari).

| Video | Kliplar | Mazmun | Musiqa |
|---|---|---|---|
| 1 qora | C9571, C9579, C9582, C9585, C9587, C9591, C9595, C9597 | "Biznes uchun joy izlayapsizmi?" 65 m², 25% = 334,6 mln, 36 oy | 1154 |
| 2 bej | C9600, C9603, C9606, C9609, C9610, C9611, C9612 | nafaqat xonadon, 50–127 m², ijara daromadi | 1167 |
| 3 kaska | C9566, C9614, C9623, C9615, C9624, C9568, C9632 | "Bunaqasi hali bo'lmagan", 50 m², oylik 19,9 mln, 1 m² 16,3 mln | 1117 |
| 4 turmak | C9552, C9556, C9560 + 2-video tanasi (C9611 siz) | "Joy topolmayapsizmi?" | 350 |

- **Uslub (v5):** Cormorant SemiBold serif sarlavha (so'zlar xiralikdan chiqadi), so'z karuseli (ro'yxatlar), katta serif raqam + Inter Tight yorliq; ko'krak balandligida (tepada yozuv yo'q). Real B-roll: klip boshlaridagi bo'sh kadrlar (maket, logo, model) + IMG_2587. AI: Flow Veo 3.1 Fast image-to-video — C9623 va C9620 bo'sh qurilish kadridan "bino o'sadi" (`broll/ai_Q1_rise.mp4`, `ai_Q2_tower.mp4`).
- Dubl tanlovi: C9571 (hook, ovoz toza), C9585, C9591 (raqam 600 ming — 2 dublda tekshirildi), C9597, C9614, C9615 (2-dubl, oylik qo'shilgan).
- Kesilgan: C9561 (ssenariy qog'ozi), C9567 (ekipaj), C9611 boshidagi soxta start, takror dubllar.

## v6 (2026-10-25) — mijoz feedbacki bo'yicha tuzatish
- **127 m²** (150 emas) — matn va katta raqam `50–127 m²` (2- va 4-video). Spiker "bir yuz yigirma yetti" deydi; promptli whisper 150 ni "tasdiqlagan" edi → xato #200.
- **Rang:** butun seriya uchun bitta `grade.fixed_look(gain)` (bo'lakka qarab oq balans yo'q), faqat yuz yorqinligiga ±10% gain. Persona: beauty 0.35, tekstura 0.45, yorqinlashtirish yo'q.
- **Ovoz:** har bo'lak gap RMS → −20 dBFS, RNNoise 0.9 + afftdn, −14 LUFS.
- **Stab:** C9560/C9566/C9614/C9610/C9587 — fon ROI `[0, 0.45]` + maxz 1.16–1.18 (C9560 titrash 10.8 → 0).
- **B-roll:** V1 5–7 s model kadri olib tashlandi (spiker), maket `BR_maket3` 2.55 s; V2 boshida `Cam_06` (Mezbon 3D kirish render; bo'sh logo devori → shu rakursda spiker = "paydo bo'lish", shuning uchun olib tashlandi); V3 12–13 s `BR_crane` (C9620, 0.65x, chapga fokus k 1.18 — o'ng chetdagi spiker kesildi); V4 `BR_maket2s` 1.94 s. V3 `ai_Q1_rise` — C9623 bilan bir rakurs, shuning uchun in=1.3 s (bino ko'tarilgan) + zoom-out 1.15→1.0.
- **Qoida:** har B-roll chegarasida oldingi/keyingi kadr bilan bir rakurs-bir joy bo'lsa (bo'sh joy ↔ spiker) — bu "paydo/yo'qolish"; boshqa rakurs yoki kadr o'lchami keskin farq qilsin. Aerofoto `IMG_2587g` rang berilgan (kontrast/to'yinganlik/gamma).
- Tekshiruv vositalari: `tools/brcheck.py` (B-roll oynasi ≤ manba), `cutcheck.py` (<1.8 s kadr yo'q), `capsprint.py` (subtitr satrlari).
- **v6 natija (03:17):** 4 video `TAYYOR\` + `musiqasiz\` qayta yozildi. QA: −14,0 LUFS, TP −1,5, qora/muzlash 0; bo'laklar orasida ovoz farqi ≤1,1 dB; fon titrashi (LK, median) ≤0,1 px; har kesim `tools/trqa.py` juftlik varag'ida ko'rildi, `tools/jitter.py` — kadr bo'yicha titrash.
- **Keyingi qadam:** mijoz fikri. Ochiq savol: V2 3,8 s va V3 0 s da spiker o'zi kadrga yurib kiradi (sahnalashtirilgan, qoldirildi).

## v7 mijoz feedbacki (2026-10-27) — bajarildi
Mijoz (kirillda): kadrlar o'rni almashib ketgan; lokatsiya aytilgan joydagi grafika o'rniga **Dilnoza** (spiker) gapirgan kadr, yoki loyihaning o'z renderlarini ko'proq qo'ying; video **render kadrdan boshlanmasin**; videolar **tekst (ssenariy) bo'yicha** yig'ilsin; **ozgina persona**.
- **Ssenariy topildi:** C9561 kadridagi qog'oz (0.3 s kadri eng o'qiladigani). Har video "Ofis:" + "Qurilish:" bo'limli. A = "O'z biznes g'oyangiz bor, lekin hali ham joy topolmayapsizmi?…" + Qurilish: "Ortimdagi loyihadan… 50 m²… 25%… 36 oy… har oy 19 mln 900 ming… Yunusobod 16-kv… tugmani bosing". B = "Bunaqasi hali hech qayerda bo'lmagan — noturar joyni ham bo'lib to'lashga…", "Mezbondan qulay takliflarni qo'ldan boy bermang!", "Qulay lokatsiya, chiroyli manzara…" + Qurilish: "Mana bu qurilishi ketayotgan binoning pastki qavatlari… ofis, kafe, do'kon, o'quv markazi…", "100% to'lovda 1 m² 16 mln 300", lokatsiya, CTA. Keyingisi "65 kv m…" (1-video).
- **Xato:** v6 3-video = B-ofis + A-qurilish + B-qurilish aralash; 4-video = A-ofis + 2-video tanasi. To'g'ri: 3-video = B to'liq, 4-video = A to'liq.
- **Render fayl:** `C:/Users/Admin/Downloads/Telegram Desktop/4k_H_265_5040_2_1_prob4 (2).mp4` — 163 s, 3840×2160 16:9, 30 fps, H.264 (nomida H265). Rang metama'lumoti buzuq (primaries=reserved) → ffmpeg'da `setparams=color_primaries=bt709:color_trc=bt709:colorspace=bt709` siz kadr chiqmaydi. ~31 kadr × 5 s: fasad, MEZBON kirish, pastki qavat do'konlari (Barbeque, HUGO) 10–20 s, kafe/terasa 34–42 s, hovli/o'yin maydoni 54–86 s, xonadon ichi 90–112 s, yer osti parking 114–124 s, lift zali/MEZBON lobbi 126–148 s, havodan lokatsiya 150–163 s.
- **Foydalanuvchi qo'shimchasi (2026-10-27):** "bino o'sadi" AI animatsiyasi qoladi, lekin oxiridagi tayyor bino mijoz renderidagi HAQIQIY Mezbon bo'lsin (v5–v6 dagi ai_Q1_rise/ai_Q2_tower butunlay boshqa binoni ko'rsatgan). Reja: Flow Veo "Frames to Video" — 1-kadr = bizning qurilish kadri, oxirgi kadr = mos rakursdagi render kadri (9:16 kesim), keyin to'g'ridan-to'g'ri haqiqiy render klipiga ulanadi. Juftliklar: C9620 (kran, baland karkas) → render 21–31 s (balkonli fasad, ritmi mos); C9623 (pastki 2 qavat karkas) → render 46–50 s (butun bino + pastki qavat do'konlar). Zaxira: AI'siz — renderdan chizma chiziqlari → qavatlar pastdan to'ladi.
- **v7 bajarildi:** 3-video = ssenariy B (C9566 → C9568 → C9623 → C9624 → C9632), 4-video = ssenariy A (C9552 → C9556 → C9560 → C9614 → C9615 → C9620 → C9632 CTA qismi 5.83–9.0). Lokatsiya gapida hamma videoda Dilnoza (AI grafika olib tashlandi). 2-video Dilnoza bilan boshlanadi (C9600 — kamera slayder, u turibdi).
- **Render B-roll** (`tools/prep_render.py` → `broll/R_*.mp4`, 9:16, 1.2x sekin): R_mezbon (MEZBON yozuvi), R_shops (BARBEQUE), R_hugo, R_cafe, R_gastro, R_tower, R_full, R_court, R_aerial. Joylari: 1-video "noturar joylar"/"do'koningizni"; 2-video "mingga yaqin oila", "kafe va restoranlar", "ijaraga berib"; 3-video "qulay lokatsiya", "pastki qavati… ofis, kafe"; 4-video "Mezbon loyihasidan".
- **AI "bino o'sadi" v7:** `broll/ai_MZA.mp4` (kran karkasi → logoli minora, 4-video "Ortimdagi loyihadan" + R_tower davomi), `ai_MZB.mp4` (qurilish → butun Mezbon, 3-video "Mana bu qurilish…"). Flow Frames-to-Video, oxirgi kadr = render.
- **Persona:** beauty 0.55, tekstura 0.38 (`BEAUTY_TEX`), yoritish yo'q. **So'zlar:** "O'z biznes g'oyangiz bor", "chiroyli manzara" (ssenariy + 2 raqib prompt bilan tasdiqlandi).
- **Subtitr ≠ sarlavha** (qizil chiziq 14b): `onscreen_hide()` — serif/stack/bignum ko'rsatgan so'z bor subtitr satri olinadi, ikki tomoni olingan 1 so'zli satr ham.
- **Virtual kamera:** yuz kadr tepasida bo'lsa c→0.37H 2x majburiy zoom berardi (C9619) — need > 1.7 bo'lsa c siljiydi (zoom ≤ 1.25).
- **v7 natija (2026-10-27 04:12):** 4 video `TAYYOR\` + `musiqasiz\`: −14,0 LUFS, qora/muzlash 0, <1.8 s kadr yo'q, B-roll oynalari manbaga sig'adi, gap balandligi farqi ≤1,5 dB. 4-video lokatsiyasi C9619 → **C9620** (C9619 boshida spiker xira, yuz kadr tepasida). C9632 juda past yozilgan: `build_seg` kuchaytirish chegarasi +9 → +12 dB. 3-video havodan render ustidagi ro'yxat uchun `R_aerial_d` (matn joyida yumshoq qorong'i chiziq). Flow bonus: 40 sarflandi (10 qoldi).

