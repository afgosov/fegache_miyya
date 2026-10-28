---
tur: markaz
sana: 2026-10-10
teglar: [montaj, reklama, motion-siz, o'tish, rang, markaz]
---
# 🍽 Zamonaviy reklama montaji (motion'siz) — bo'lim markazi

**Nima bu:** grafika va motion'siz, faqat **footage + rang + ritm + ovoz** bilan qilinadigan premium reklama: restoran, resort, mahsulot, ishlab chiqarish, salon. Grafika minimal (faqat logotip). [[Motion design]] dan farqi shundaki, bu yerda hikoyani kamera va montaj aytadi.

Boshlangan sana: 2026-10-10 (foydalanuvchi: "yangi bo'limni o'rganamiz", "biz ham huddi shunday video yaratamiz"). Loyiha: [[Reklama montaj yo'nalishi]].

## Namunalar
- ⭐ [[Namuna tahlili - Beldersoy restoran reklamasi]] — taom/resort: tasma-hook, defokus-ochilish, chaqnash, ikki rang olami, drop olovga, blur + dim yakuniy kartochka
- [[Namuna tahlili - Amirsoy kurort Reels (2 ta)]] — joy/kayfiyat Reels: ichkaridan tashqariga, har kesim pianino notasiga, doimiy kichik serif matn / logo, oltin soat grade, yurib suratga olingan tur

## Asosiy qoidalar (1-namunadan; yangi namunalar bilan to'ldiriladi)
1. **Har kadr = bitta bosqich.** Hikoya zanjiri: treyler-hook → xom ashyo → jarayon → kulminatsiya → usta/detal → natija → joy → brend.
2. **Hook finaldan olinadi.** Eng chiroyli 3–5 lahza birinchi 1.5 s da bitta kadrda ko'rsatiladi (tasmalar yoki tez kesimlar).
3. **Rang hikoya aytadi.** Jarayon = qorong'i va iliq, natija = yorug' va toza. Bitta kontrast kesim (qorong'idan yorug'ga) videoning cho'qqisi bo'ladi.
4. **Musiqa strukturasi = montaj strukturasi.** Sokin intro (taom/jarayon ovozlari bilan) → drop eng "issiq" kadrga → drop'dan keyin kesimlar zarbaga, cho'qqida yarim zarbaga → oxirida 1.5–2 s fade-out.
5. **O'tishlar kamera tilida:** blur/defokus, yorug'lik chaqnashi, harakat ustida kesim, obyekt kirishi, o'zgarish kesimi. Wipe, glitch, zoom-transition, "shake" ishlatilmaydi — ular arzon ko'rinadi.
6. **Logotip 2 marta:** boshida (2–3 s, kim ekani) va oxirida (yakuniy kartochka). Matn yo'q yoki juda kam.
7. **ASMR qatlami:** shitirlash, quyish, pichoq, bug' ovozlari musiqa ostida. Ular reklamani "jonli" qiladi.
8. **Kadr uzunligi:** o'rtacha 1.0–1.3 s, cho'qqida 0.4–0.5 s. Yakuniy kadr esa eng uzun bo'ladi (4–5 s).

## O'tishlar qutisi — qachon, qanday (ffmpeg sinalgan + Premiere)
Skript: `D:/claude_ish/namunalar/reklama/reklama_effektlar.py` — `python -I reklama_effektlar.py sinov` (namunadan 11 s demo, 2026-10-10 da sinaldi, −14.2 LUFS).

| O'tish | Qachon | ffmpeg (skriptdagi funksiya) | Premiere'da |
|---|---|---|---|
| **Tasmali hook** | 1-soniya, "treyler" | `strips(clips, 1.4, ...)`: har klip `crop=720:256:0:y`, keyin `vstack=inputs=5` | 5 ta trek, har klipga Crop (Top/Bottom) + Position; oraliq 0 |
| **Defokusdan ochilish** | logotip chiqishi, yangi bo'lim | `clip(blur_in=(16, 0.47))`: gblur sigma 16→0, ease-out | Gaussian Blur 40→0, 14 kadr, Ease Out, "Repeat Edge Pixels" ✓ |
| **Chaqnash + porlash** | olov, issiqlik, "zarba" | `clip(flash_out=(2.7, 0.10))` A da + `clip(glow_in=(22, 0.30), blur_in=(6, 0.30))` B da | A oxirida 2 kadr Lumetri Exposure +2; B boshida Gaussian Blur nusxa-qatlam Screen 100→0% (0.3 s) |
| **O'zgarish kesimi** | xom → tayyor | oddiy kesim, o'xshash burchak | suratga olishda rejalashtiriladi |
| **Speed ramp** | ko'tarish, aylantirish | 60 fps manbadan 2 bo'lak: `setpts=0.5*PTS` (tez) + `setpts=2*PTS` (sekin) | Time Remapping, 4 kadrlik silliq o'tish |
| **Obyekt kirishi / harakat ustida kesim** | kesimni yashirish | — (kadr tanlash) | kesimni harakat o'rtasiga qo'y |
| **Kontrast kesimi** | joy ochilishi | ikki xil rang uslubi (pastda) | ikki xil Lumetri preset |
| **Yakuniy kartochka** | oxirgi 4 s | `clip(end_blur=(1.9, 0.8, 9), dim=(1.5, 2.6, 0.58), logo=(png, 1.1, 0.65, None, 0))` + `afade` | Gaussian Blur 0→25 + Exposure −1 (keyframe), logo PNG Opacity 0→100 (18 kadr) |

**Texnika (ffmpeg):** vaqtga bog'liq blur va yorqinlik `sendcmd` fayli orqali har kadrga yoziladi (`gblur@b sigma`, `colorchannelmixer@m rr/gg/bb`). Logotip ustki qatlam bo'ladi va blur'dan keyin overlay qilinadi. Glow uchun `split → gblur → blend all_expr` (screen, T bilan so'nadi), gbrp formatda. Batafsil: [[ffmpeg retseptlari]].

## Rang uslublari (o'lchangan, `GRADES` skriptda)
| Uslub | Qachon | O'lchov (namunada) | ffmpeg boshlang'ich |
|---|---|---|---|
| **Olov kechasi** | oshxona, olov, jarayon, ustaxona | qora 0 (ezilgan), yorug'lar krem ~210/177/141, to'yinganlik 0.35–0.38 (olov 0.7+), kuchli vinyetka | `curves 0/0 0.10/0.025 0.5/0.47 0.85/0.86 1/0.94` + iliq highlight `colorbalance` + `saturation 0.92` + `vignette PI/4.2` |
| **Kunduz havosi** | natija, joy, tashqarida | qoralar 11–14 ga ko'tarilgan, toza salqin oq 240/240/247, to'yinganlik 0.27–0.30 | `curves 0/0.04 0.5/0.54 1/0.98` + `colorbalance bh=0.03` + `saturation 0.88` |
- ⚠️ Retseptlar allaqachon grade qilingan namunada sinaldi. Real xom footage'da kadr bilan sozla: `rang_olchov.py` bilan o'lchab, namuna raqamlariga yaqinlashtir.
- O'lchov skripti: `python -I _namunalar/reklama/rang_olchov.py video.mp4` — har 0.5 s da yorqinlik, qora/oq nuqta, to'yinganlik, soya/yorug' RGB, iliqlik va vinyetka nisbatini beradi.

## Suratga olish ro'yxati (taom/joy reklamasi uchun, operatorga)
- Makro: xom mahsulot teksturasi, tuz/ziravor sepish (60 fps), bug', olov (60 fps).
- Jarayon: 3–4 bosqich, har biri 2 burchakdan (past burchak + yuqoridan).
- Usta detali: qo'llar, pichoq, soat yoki forma. Yuz shart emas.
- O'zgarish juftligi: "oldin" va "keyin" bir xil burchakdan.
- Joy: keng plan (manzara, zal), xizmat lahzasi (ofitsiant qo'yadi).
- Hero kadr: tayyor taom statik, 6–8 s, fonda joy (bokeh).
- Yorug'lik: qorong'i fon + bitta kuchli yon yorug'lik (low-key). Kunduz kadrlari tabiiy yorug'likda.

## ✅ Sinalgan konveyer (2026-10-10, [[Gulkam Resort steyk reklamasi]], 51 klip → 43.2 s)
Skriptlar: `C:/Users/Admin/AppData/Local/Temp/claude/gulkam5/` + `_namunalar/reklama/reklama_effektlar.py`. Umumiy vaqt: ko'rish ~3 daq, segment render ~3.5 daq (39 segment, 4K → 1080×1920, 3 parallel).
1. **Ko'rish:** `sheets.py` — har klipdan 8 kadr, 6 klip = 1 varaq. Har klipga bir qator yoz: nima bor, qaysi soniyada eng yaxshi lahza. Kerak bo'lsa `oyna.py klip t0 t1 10` (10 fps).
2. **Musiqa:** Mixkit sahifasidan ro'yxat JSON-LD ichida (`<script type="application/ld+json">` → `ItemList` → name/byArtist/duration/url). 8–10 nomzodni yuklab `music_scan.py` bilan o'lcha: tempo, energiya grafigi, drop. Drop'ni 50 ms RMS + bass ulushi bilan aniq top (Deep Urban: 15.49 s).
3. **Zarb panjarasi:** `bframe(k) = round((DROP_V + BEAT·k)·FPS)`. Har segment = butun zarb soni, chiqish `-frames:v N` → concat'da siljish yo'q. Bo'limlar 16 zarbdan (4 takt, 123 BPM'da 7.8 s).
4. **Hikoya bo'limlari:** hook (5 tasma, 1.8 s) → tayyorlash (sokin intro, 1–3 zarbli kadrlar) → **drop = eng katta olov** → jarayon → ikkinchi cho'qqi (gorelka) → tortish → taqdimot → hero + blur/dim yakun.
5. **Rang:** klipni tekislash (`colorlevels`, 1% / 99.5% percentil, kuchaytirish ≤1.5×) → umumiy S-curve (`0/0 0.06/0.022 0.30/0.275 0.50/0.515 0.75/0.79 0.90/0.915 1/0.95`) → juda yengil iliqlik → `saturation 0.97` → `vignette PI/7`. ⚠️ PI/5 vinyetka va kuchli iliqlik bu oq oshxonada chetlarni qoraytirdi va doskani sarg'aytirdi.
6. **ASMR:** kamera ovozini EDL bo'yicha yig' (`asmr.py`) → whisper uz/ru bilan gap bormi tekshir (ikkala tilda bir xil so'z chiqsa — haqiqiy gap; takroriy bema'ni matn — shovqin) → faqat gapsiz shitirlash/olov kliplari, highpass 900 Hz ×2 + ventilyator notch, musiqadan 13 LU past.
7. **Miks:** loudnorm 2 bosqichli −14 → `alimiter limit=0.63` → AAC 256k → **MP4'ni o'lcha** (−14.1 LUFS, −1.2 dBTP).
8. **Tekshiruv:** 2 fps varaq, o'tishlarni kadrma-kadr (hook→1-kadr, drop, chaqnashlar, yakun), `blackdetect`/`freezedetect`, kadr soni, keng kadrlarda to'r bilan qiyshiqlik.
## ⭐ Uzviylik va stabilizatsiya — majburiy qadamlar (2026-10-11, Gulkam v2)
Foydalanuvchi talabi: "premium darajada". Har reklama montajida:
1. **Xronologiya:** `ffprobe -show_entries format_tags=creation_time` → kliplarni yozilgan vaqti bo'yicha tartibla. Sahna ichida tartib faqat shu.
2. **Holat jurnali:** `scene_sheet.py <nom> klip...` (3 fps). Har klip uchun yoz: boshidagi holat → nima qo'shiladi → oxiridagi holat. Dubllarni belgila (bir harakat 2 marta) — faqat bittasini ol.
3. **Kesim qoidasi:** keyingi kadr boshidagi holat ⊇ oldingi kadr oxiridagi holat. Yangi narsa paydo bo'lsa, uning qo'yilishi ko'rinsin. Bir xil burchakdagi 2 kadr ketma-ket kelmasin (30° qoidasi). Yirik ↔ umumiy o'tish harakat ustida bo'lsin.
4. **Tekshiruv:** `cut_check.py video plan.json out.jpg` — har kesim juftligini ko'z bilan ko'r.
5. **Stabilizatsiya:**
   - `stab_cv.py`: RANSAC, ishonch ≥ 0.6, inlier ≥ 0.55, aks holda tegma. Natija < 0.8× bo'lmasa — avtomatik asl holiga qaytaradi.
   - Kadrni qo'l yoki tog'ora to'ldirgan bo'lsa: `stab_zone.py klip ss n top|left|...` (fon zonasi bo'yicha).
   - Tekshir: `bgflow.py` (fon zonasida titrash px). ⚠️ vidstab ishlatma — katta obyekt kirsa, o'zi titratadi.
6. **Logotip:** kichik PNG bo'lsa `logo_anim.py` usuli (4x silliq alfa, fil suyagi-oq, bosqichli paydo bo'lish, yorug'lik o'tishi).
## Joy/sayohat Reels (2026-10-11, Gulkam Resort tog' sayohati Reels)
- Taomdan farqi: zarbli drop emas, **fraza** asosida. Har 8 zarb = yangi joy yoki bo'lim, musiqa to'liq ochilgan joyga eng keng panorama.
- Kun xronologiyasi = hikoya (tong → yo'l → tabiat → kulminatsiya → qaytish → mehmonxona → yakun). Teaser'ga turli sahnalardan 4 lahza ol, bir xil obyekt 2 marta bo'lmasin.
- 135 klipdan tanlash tartibi: `sheets.py` (8 kadr/klip, 23 varaq) + `creation_time` → har sahnadan eng yaxshi 2–5 klip → kesim varag'i (`cut_check.py`).
- Kamera ovozini avval o'lcha. Bo'sh bo'lsa, Mixkit tabiat ovozlarini sahnalar bo'yicha qo'y ([[Video montaj texnik xatolari]] #52).
## Yakuniy logo kartochkasi — foydalanuvchi tanlagan uslub (2026-10-11, namuna `C0433_1.mp4`)
- ⛔ **2026-10-12 dan Gulkam uchun eskirdi:** logotip endi videoning BOSHIDA, fonsiz, video ustida (pastdagi bo'lim). Oxirida logo kartochkasi yo'q.
Foydalanuvchi: "oxiri manashu videoning oxiridagidek chiqishi kerak". O'lchandi va `gulkam5/logo_card.py` da qayta yasaldi:
- So'nggi hero kadr (blur yo'q) **0.4 s ichida chiziqli ravishda krem rangga** o'tadi: `fade=t=out:...:color=0xFCF9EF`.
- Fon **#FCF9EF** (252,249,239), toza va tekis. Logotip **asl brend ranglarida** (tog'lar #4A5B6E, yozuv to'q), markazda.
- Logotip 0.07 s dan 0.33 s ichida paydo bo'ladi. Keyin butun kartochka davomida **bir tekis kattalashadi**: kenglik 38.9% → +2.94% / s (5 s da ~54%).
- Kartochka ~5 s turadi, musiqa ostida so'nadi. Qoraga o'tish yo'q, video kartochkada tugaydi.
- ⚠️ Bu uslub avvalgi "fon xiralashadi + qorayadi + fil suyagi-oq logo" variantining **o'rnini egalladi** (Gulkam uchun).
- Namunaning boshida yana bir usul bor: kadr **oq-qora** boshlanadi va bufetchi kokteylni qo'yganda **rang qaytadi** (rang = mahsulot paydo bo'ldi).
## Bar/kokteyl reklamasi — sinalgan (2026-10-11, Gulkam Resort bar kokteyl Reels)
- **Oq-qora → rang portlashda:** tayyorgarlik bo'limi `GRADE + ",hue=s=0,eq=contrast=1.05"`. Portlash kadrida (mahsulot rangi paydo bo'lganda) `hue=s='min(1,max(0,(t-0.06)/0.32))'` ishlatiladi; ifoda qo'shtirnoq ichida, vergullar qochirilmaydi. Musiqa portlashi aynan shu kadrga tushadi.
- **Ozvuchka = foley:** kamera ovozida gap bo'lsa, butunlay Mixkit foley bilan qur. Har hodisani klip vaqti bo'yicha yoz (`vt(klip, t)`), effektning cho'qqisini hodisaga moslashtir. Kerakli effektlar (Mixkit SFX id): stakan 2936, muz 2829, muzga quyish 2834, ichimlik + muz 2830/941, gazli ichimlik 1307/3207, havo 1492.
- **Balans:** sokin kirishda foley musiqaga teng (ASMR); portlashdan keyin 7–13 dB past. 50 ms cho'qqi bilan o'lcha, 0.25 s RMS bilan emas (zarba yo'qolib ketadi).
- ⚠️ `voice_check.py` stakan jiringlashi va quyish ovozini "gap" deb ko'rsatadi — bunday holatda whisper va effekt nomi bilan tekshir.
## Mafia / "bad boy" vibe — sinalgan (2026-10-11, Gulkam Resort bad boy kokteyl Reels)
- **Musiqa:** zamonaviy "mafia/bad boy" vibe = **UK drill / dark trap**: minor lad, 140 BPM (half-time 70), sirpanuvchi 808. Mixkit'da sinalgani: "UK" (Arulo, 363). Muqobillari: "Vertigo" (597, pizzicato-suspense, juda qorong'i), "Pianinni" (165).
- **Musiqani eshitmasdan tanlash:** `gulkam5/music_char.py id...` → tempo, lad, spektral markaz, bas ulushi, energiya. 808 sirpanishi 28–110 Hz dominant chastotasining asta pasayishidan aniqlanadi. Spektrogrammada portlash joyini topib, eng kuchli kadrni shunga qo'y.
- **Sin City (oq-qora + bitta rang):** `gulkam5/selcol.py` — **Lab** xroma ≥ 58 va burchak 12–48° bo'lsa rang qoladi. HSV yaramaydi: issiq yorug'likda teri kokteyl bilan bir xil hue/sat'ga ega bo'ladi. ffmpeg `hsvhold`/`colorhold` **teskari** ishlaydi (tanlangan rangni kulrang qiladi).
- **Vibe nazorati:** "jiddiy" so'ralsa, aktyor kulgan yoki gapirgan har bir kadrni sahna varag'idan topib, chiqarib tashla. Yakun — kameraga jiddiy qarash.
- **Yangilandi (2026-10-11):** foydalanuvchi drill'ni rad etdi ("jiddiy bo'lsin"). Qabul qilingan yo'nalish — **sitsiliya / mafia kino uslubi:** Mixkit "Sicilian Coffee" (613, A garmonik minor, xromatik E–F–E–D♯–E motiv). Qizil aksentli "Sin City" ham rad etildi — oq-qora butunlay, rang faqat sahna almashganda bir marta o'zgaradi.
- **Bir xil burchakdagi ikki dublni** ketma-ket qo'yish kerak bo'lsa, hajmni ≥ 1.4× o'zgartir (punch-in), aks holda jump cut bo'ladi.
## ✅ Bar/kokteyl foley — TO'G'RI Mixkit id'lar (2026-10-11, sarlavha xaritasi tuzatilgandan keyin)
| Harakat | Mixkit id — nomi | Izoh |
|---|---|---|
| ingichka quyish (jigger) | 142 Pouring a small drink · 1318 Water pour light stream (36 s, o'rtasidan) · 1302 Pouring water | highpass 300 |
| muzli stakanga quyish | 2829 Pouring drink with ice · 138 Pouring a drink with ice cubes into a glass · 125 Liquid poured in a jar with ice | |
| kupaga suzish | 1324 Pouring water to glass | 4 s |
| muz tushishi / aralashtirish | 2834 Dropping ice into a glass | |
| qadah bar ustiga | 1799 Bowl placed on table · 2934 · 2933 | lowpass 4000 |
| qadah suriladi | 1527 Glass plate slide | |
| metall (shaker qopqog'i) | 2177 Metal grill quick hit · 2857 Gear fast lock tap · 835 Metal tool drop | |
| flair havosi | 1489 Air woosh | lowpass 6000 |
| sigara tutuni | 2232 Strong breathing of a person (1.3–2.5 s) | lowpass 3500, juda sokin |
| shaker chayqash | **kameraning haqiqiy ovozi** (gapsiz oraliq, `voice_check.py`) | highpass 800 |
- Daraja: musiqaga **nisbiy** — har effektning cho'qqisi o'sha paytdagi musiqadan 4–12 dB past (aniq harakat 4–6, yengil 8–12). Mixkit preview'lari juda past yozilgan, mutlaq dB yaramaydi.
## Bitta uzun kadrdan Reels — virtual kamera (2026-10-11, Gulkam Resort kechki taom Reels)
- Shtativdagi bitta 4K kadr (masalan, stol tepadan) → `gulkam5/kb.py make(src, ss, n, z0, z1, cx, cy, out)`. U umumiy (z 1.0→1.03), o'rta (1.35–1.55) va yaqin (2.0, 4K dan 1:1) planlarni subpiksel silliq push-in bilan qirqib beradi. Natijada 13 ta turli plan chiqdi, jump cut sezilmaydi.
- Hikoya — hodisalar zanjiri: har yangi narsa (taom, qadah, salfetka) stolga tushgan kadr **zarbga** qo'yiladi. Birinchi kuchli hodisa musiqa ochilgan joyga tushadi.
- Ozvuchka vaqtlari: har hodisani idish yoki qo'l atrofidan kesib, 25 fps da ko'r (`crop` + `tile` + `-copyts`). Tovush obyekt to'xtagan kadrga tushadi (taxta 17.66, salat 24.36...).
- Daraja: effekt cho'qqisini **o'zi davom etadigan butun oraliqdagi** musiqa cho'qqisidan 6–12 dB past qo'y. Faqat hodisa nuqtasidagi musiqa bilan solishtirsang, musiqa jim bo'lgan joyda effekt juda past chiqadi (−26 dB bo'lgan edi).
- Restoran uchun yangi Mixkit foley: 1898 Cloth slide out (salfetka, taxta surilishi) · 2933 Dish placed in a wood table · 2934 Bowl put in table · 1855 Cutlery placement · 133 Taking cutlery from a plate · 132 Placing cutlery on a plate · 1853 Gentle plate grab · 2835 Stirring cutlery in ceramic plate · 136 Cutting hard vegetables (sokin 2.9–3.6 s qismi).
- **Odam kadrda bo'lsa — "kesilishi kerak joylar"** (2026-10-11, Gulkam Resort jentlmen kechki ovqat Reels):
  1. Avval butun kadrni 2–3 fps varaqlarda ko'r va noqulay oraliqlarni ro'yxatga yoz: boshga/sochga qo'l, og'izni artish, imo-ishora, kameraga tikilib gapirish, orqada begona odamlar.
  2. Har tanlangan oynani **12.5 fps yuz kesimida** tekshir: og'iz qimirlasa (gapiryapti) yoki ko'z kameraga qadalib qolsa — oynani siljit yoki tashla.
  3. Render'dan oldin **storyboard**: `gulkam7/story.py edl.py out.jpg` — har plan boshi/o'rtasi/oxiri aynan virtual kamera kesimida. Burchakda yarim bosh (ofitsiant), kadr chetidan kesilgan yuz, qimirlagan yeng shu yerda ko'rinadi.
  4. Ketma-ket ikki plan bir xil o'lchamda bo'lmasin (o'rta→o'rta = sakrash). `cut_check` varag'ida shuni alohida qidir.
  5. Ketma-ket harakatni plan o'zgarishi bilan davom ettir (umumiy: turadi → yaqin: tugma qadaydi, manba vaqti uzluksiz) — eng toza kesim.
- **Ho'plash va chaynash** ovozini qo'yma — nafis reklamada yoqimsiz. Vino quyish: 1324 Pouring water to glass (1.9 s dan barqaror oqim), oqim to'xtagan kadrda 0.1 s da keskin tugaydi.
- Musiqa beat'ga kirish joyini aniqlash: `gulkam7/beatfit.py` (BPM + faza), `onsets.py` (har zarbdagi past/o'rta/yuqori onset va daraja) — drop, breakdown va qaytishni zarb raqami bilan topadi.

## Logotip video boshida — fonsiz, kadr ustida (2026-10-12, Gulkam 6 ta video)
Foydalanuvchi: "logo video boshida chiqishi kerak, oxirida emas" → "bg fonsiz video ustiga nalojeniya qilib". Brend 3 variant berdi: qora, oq, rangli (tog'lar #5F7089, yozuv to'q).
- **Variantni fonga qarab tanla:** logo turadigan zonaning yorqinligini o'lcha (birinchi 3.4 s, 10 fps, markaziy 50% kenglik). To'q fon (bar, sigara, restoran) → **oq** + juda yumshoq soya (blur 11 px, 48%). Och fon (oq dasturxon, osmon, och taxta) → **asl rangli** + yumshoq krem nur (blur 15 px, 55%). Qora variant kerak bo'lmadi.
- **Joy:** yuz, mahsulot oqimi (quyish, muz qoshig'i) va Instagram UI (tepa ~8%, pastki ~20%) dan qochish. Logoni kichik eskizda emas, **to'liq o'lchamda** tekshir: 324 px eskizda bo'sh ko'ringan joyda logo mehmon peshonasiga tushgan edi.
- **Vaqt:** 0.2 s dan 0.5 s da defokusdan aniqlikka paydo bo'ladi, sekin kattalashadi (44% → +1.2%/s), ~3.4 s da yo'qoladi. Agar keyingi kadr fon rangini buzsa (oq mato, to'q kanyon) — logo o'sha kesimgacha yo'qolsin. Tezkor "hook" montajida emas, birinchi tinch kadrda chiqsin (steyk: 2.05 s).
- **Texnika:** `gulkam5/logo_overlay.py` (Logo klassi, `run(src, out, variant, y, t_in, t_out, width, x)`); `gulkam7/relogo2.py` — eski segmentlardan faqat birinchi K tasi qayta kodlanadi (logo), qolgani `-c copy`; oxirgi kadr kremga **to'liq** yetadigan qilib qayta so'ndiriladi + 12 kadr krem. Ovoz: eski musiqa va foley qatlamlari (`mix_pre − foley`) olinadi, faqat oxiriga 3 s so'nish, loudnorm avvalgi maqsadga. Tekshiruv: eski va yangi ovoz korrelyatsiyasi (siljish 0 ms, o'xshashlik ≥0.999).

## Shablon
→ [[Tayyor Reels shablonlari]] dagi **E. Jarayon → natija (taom, resort, ishlab chiqarish), 15–25 s**.

Markaz: [[Video montaj]] · Bog'liq: [[Rang tuzatish va grading]] · [[SFX dizayni va musiqa ritmi]] · [[Montaj nazariyasi]] · [[Reklama video hikoyasi]]
