---
tur: loyiha
sana: 2026-10-10
teglar: [loyiha, reklama, montaj, motion-siz, taom, gulkam, mediazone]
---
# Gulkam Resort — steyk reklamasi (motion'siz zamonaviy montaj)

**Topshiriq (2026-10-10):** "5-papka ichidagi barcha videolarni olib, keraklisini tanlab, kesib video yaratish kerak. Uzunligi maksimum 1.5 daqiqa, minimum 40 soniya, musiqa trenddagisini tanla." Namuna sifatida [[Namuna tahlili - Beldersoy restoran reklamasi]] uslubi olindi. Qo'shimcha: **"hech qanday logo kerak emas, oxiri namunadagi so'nggi soniyalardek"** (fon xiralashib qorayadi, logotipsiz).

- **Manba:** `D:/2 Mediazone montaj qilish kere/07,10,2026 Gulkam Resort/5/` — 51 klip (C6707–C6758), Sony XAVC 4K 25p, ko'pi vertikal (rotation 90). C6707 va C6718 gorizontal (yuqoridan suratga olingan). Jami 211.7 s. Mavzu: steyk + grill sabzavotlar + qaymoqli sous. Oshpaz qora formada, oshxona oq va yorug'.
- **Natija:** `.../07,10,2026 Gulkam Resort/_claude_montaj/Gulkam_steyk_reklama.mp4` — 1080×1920, 25 fps, **43.2 s**, −14.1 LUFS, TP −1.2. Manbalar va tuzilma: `Gulkam_steyk_reklama_manbalar.txt`. Foydalanuvchi bahosi hali yo'q.
- **Musiqa:** Mixkit "Deep Urban" (Eugenio Mininni, deep house, 123.07 BPM). Drop 15.49 s da → musiqa 5.89 s dan boshlanadi, drop videoning 9.60-soniyasiga (olov kadriga) tushadi. 10 ta nomzod tempo va drop bo'yicha o'lchab tanlandi (`music_scan.py`). Zaxira nomzod: "Cat Walk" (129 BPM, drop 14.8 s, 59.5 s da tanaffus).
- **Tuzilma (zarb = 0.4875 s, 39 kadr, har kesim zarbga):** hook 5 tasma (0–1.8) → tayyorlash 16 zarb → **drop = oshpaz olov devori ortida** → grill 16 zarb → gorelka + sous 16 zarb → tortish 16 zarb → taqdimot → hero kadr (C6758, 2.7 s ushlab turiladi), fon blur + qorayish, musiqa 2.7 s da so'nadi.
- **O'tishlar:** defokusdan ochilish (1-kadr), chaqnash + porlash (drop'da va gorelkada), qolganlari zarbadagi oddiy kesim.
- **Rang:** har klip avtomatik tekislanadi (o'rtadagi kadrdan 1%/99.5% → `colorlevels`, kuchaytirish ≤1.5×), keyin umumiy kinematik uslub: yumshoq S-curve (qoralar ezilgan, oqlar 0.95 krem), juda yengil iliqlik, to'yinganlik 0.97, vinyetka PI/7.
  - **1-versiya rad etildi (o'zim):** vinyetka PI/5 va kuchli iliqlik → chetlari qora, oq doska sarg'ish, bug' kadri loyqa.
- **Ovoz:** musiqa + faqat grill kliplaridan kamera ovozi (shitirlash, olov), highpass 900 Hz ×2, 880 Hz notch (ventilyator), musiqadan 13 LU past. Gorelka kliplarida (C6748/49) orqada odam "Zo'r!" deydi — whisper uz/ru ikkalasida bir xil chiqdi, shuning uchun bu kliplar ovozi olinmadi.
- **Fayllar:** `C:/Users/Admin/AppData/Local/Temp/claude/gulkam5/` — `build.py` (EDL, zarb panjarasi, kesh imzosi), `audio.py`, `asmr.py`, `music_scan.py`, `sheets.py` (kadr varaqlari), `oyna.py`, `tilt.py`, `sheets/`, `mk/` (Mixkit treklari). Effektlar: `_namunalar/reklama/reklama_effektlar.py` (1080×1920/25 fps uchun yangilandi).
## v2 — qayta montaj (2026-10-11), foydalanuvchi tanqidi bo'yicha
**Tanqid (v1):**
- "Videoga stabilizator qo'yish kerak."
- "Baqlajon 1 marta noto'g'ri qo'yildi, keyingi kadrda o'zidan o'zi to'g'rilanib qoldi."
- "Yirik kadrda qo'yilgani umumiyda qaytadan qo'yilmayapti — perexodlarni to'g'ri qo'yish kerak."
- "Boshidan montaj qil, lekin style va idea shunaqaligicha qolsin. Oxiriga logo qo'yamiz, premium sifatda."

**Natija:** `_claude_montaj/Gulkam_steyk_reklama_v2.mp4` — 44.4 s, 1080×1920 25p, −13.9 LUFS, −1.7 dBTP, AAC 320k. Tafsilot: `Gulkam_steyk_reklama_v2_manbalar.txt`. Foydalanuvchi bahosi kutilmoqda.

**Nima qilindi:**
- **Holat jurnali:** har klipning `creation_time` vaqti olindi va sahna varaqlari tuzildi (`scene_sheet.py`, 3 fps). Suratga olish tartibi: tayyorlash 12:39 → sabzavot 12:44 → grill 12:47 → sous 12:59 → tortish 13:00 → gorelka 13:02 → steyk doskaga 13:02:42 → sous quyish 13:03 → taqdimot 13:04.
- **Dubllar:** C6743/C6744 (baqlajon), C6754/C6755 (doska). Bir xil plan juftlari: C6738/C6741, C6735/C6737, C6757/C6758 — har juftdan bittasi olindi.
- **Kesimlar tekshiruvi:** `cut_check.py` — har kesimda oldingi kadrning oxiri va keyingisining boshi yonma-yon. 5 ta muammo topildi va tuzatildi (tortish: holat sakrashi, sariq qalampir paydo bo'lishi; 3 ta bir xil plan).
- **Musiqa:** 3.79 s dan (drop'dan 6 takt oldin). Drop 11.7 s da olovga, gorelka 32-zarbda (yangi fraza), logotip 60-zarbda (fraza).
- **Stabilizatsiya:**
  - vidstab rad etildi — u titratib yubordi.
  - O'rniga `stab_cv.py` (OpenCV RANSAC) va `stab_zone.py` (faqat fon zonasidagi oqim) ishlatildi. 7 ta kadr barqarorlashtirildi.
  - Tekshiruv uchun `bgflow.py`: fon zonasida Farneback oqimi. Shu orqali "titrash" aslida pichoq yoki qo'l harakati ekani ajratildi.
- **Logotip:** `logo_anim.py` — 4x alfa (bikubik → Gauss 2.2 → qayta keskinlash), fil suyagi-oq #F4EEE4, yumshoq soya. Tog'lar 0–0.9 s, yozuv 0.28 s kechikib, yorug'lik o'tishi 1.3–2.3 s, 1.035 → 1.0 o'tirish. Kenglik 580 px, markaz 45.5%. Oxirida 0.6 s qoraga so'nadi.
- **Ovoz:** AAC 256k shitirlash zarbalarida cho'qqini +3.5 dB ko'tardi → 192 kHz da limiter + AAC 320k ([[Video montaj texnik xatolari]] #47 yangilandi).
- **Fayllar:** `gulkam5/build2.py` (venv python: `podtizer/venv` — cv2 5.0), `stab_cv.py`, `stab_zone.py`, `bgflow.py`, `motion.py`, `kymo.py`, `cut_check.py`, `scene_sheet.py`, `logo_anim.py`, `audio2.py`, `asmr2.py`; oraliq fayllar `stab2/`, `seg2/`, `logo_seq/`.
## v3 (2026-10-11), foydalanuvchi so'rovi bo'yicha
- **So'rov:** "0:07 dagi joyni kesish kerak" (C6716, oshpaz umumiy planda); "orqa fonda operator ovozi tushib qopti, 19-sekundda"; "oxirini C0433_1.mp4 videosining oxiridagidek qil, logo bilan".
- **Natija:** `_claude_montaj/Gulkam_steyk_reklama_v3.mp4` — 43.9 s, −13.9 LUFS, −1.1 dBTP. Tafsilot: `Gulkam_steyk_reklama_v3_manbalar.txt`.
- **Nima qilindi:**
  - C6716 va C6721 olindi (4 zarb = 1 takt). Musiqa 5.74 s dan boshlanadi, takt chegarasi saqlandi; drop 9.75 s da.
  - C6737 kamera ovozi ASMR'dan chiqarildi: unda operator gapirgan, `voice_check.py` 18% ovozli kadr topdi ([[Video montaj texnik xatolari]] #53). Qolgan grill ovozlari tekshirildi va toza chiqdi.
  - Yangi yakun: `logo_card.py` — krem #FCF9EF, logotip asl ranglarida, 0.4 s chiziqli o'tish, 38.9% + 2.94%/s o'sish. Fon rangi namuna bilan 1–3 daraja ichida mos.
- **Fayllar:** `gulkam5/build3s.py`, `logo_card.py`, `voice_check.py`, `audio3s.py`, `asmr3s.py`; oraliqlar `seg3/`.
- Xotira yetmadi → 1 ta parallel jarayon (#54). C: diskda joy kam: tugagan Reels keshi `D:/claude_ish/loyihalar/2026-10-11_gulkam1_kesh/stab` ga ko'chirildi.

## Saboqlar (shu loyihadan)
- Gorizontal top-down klipni 9:16 markazidan kessang, qo'l kadr chetidan kiradi. Obyekt markazga **kechroq** kiradi (C6707: 1.00 → 1.32 s). Kirish nuqtasini kesilgan kadrda tekshir.
- Hook tasmalarida bir-biriga o'xshash 2 kadr bo'lmasin (2 ta rozmarin edi → qizil qalampir kesish bilan almashtirildi). Metall tog'ora tasmada tushunarsiz ko'rinadi.
- AAC kodlash zich deep house'da cho'qqini **~1–2 dB ko'taradi** → [[Video montaj texnik xatolari]] #47.
- Kesh imzosiga segmentga ta'sir qiladigan **hamma** ro'yxatni qo'sh (HOOK yo'q edi → eski hook qoldi) → #48.

- **2026-10-12 — logotip boshida (fonsiz, video ustida):** `Gulkam_steyk_reklama_v4.mp4` — asl rangli logo, xom steyk kadrida 2.05–4.7 s, 39.5 s. Oxiridagi krem logo kartochkasi olib tashlandi; kadrlar, musiqa va foley vaqtlari o'zgarmagan. → [[Zamonaviy reklama montaji]]

Bo'lim: [[Loyihalar]] · Yo'nalish: [[Reklama montaj yo'nalishi]] · Usullar: [[Zamonaviy reklama montaji]]
