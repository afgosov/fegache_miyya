---
tur: loyiha
sana: 2026-10-24
teglar: [video, promo, hyperframes, cs-skin-studio, nfs, nakleyka]
---
# CS Skin Studio — skin yasash video (2-qism, NFS MW uslubi)

Foydalanuvchi (bosh sessiya orqali): "videoning 2-qismi — skin tayyorlanayotganini animatsiya qilish (nakleykalar yopishtirilayotganini); tayyor bo'yoqlarsiz, nakleyka va noodatiy eksklyuziv rasmlardan; shu musiqa ritmiga; Fegache.uz deb tugasin; men tashlagan video uslubida; tayyor skinlar ko'rsatilsin".

- **Natija:** `D:\CS Skin Studio\TAYYOR\CS_Skin_Studio_skin_yasash_60fps.mp4` — 44.4 s, 1920×1080, 60 fps, −14.3 LUFS.
- **Loyiha:** `D:\claude_ish\loyihalar\2026-10-24_skin_yasash_video\` — `video/` (HyperFrames, `index.html` generator `ish/yig_html.py` dan), `ish/` (reja, suratga olish skriptlari, kadrlar, miks).
- **Uslub namunasi:** `Desktop\nVjSnDWlczE.mp4` — NFS Most Wanted «Blacklist» intro (1-qism bilan bir xil): yashil-sariq grade, kranlar/bo'ronli osmon, oldingi plandagi qora graffiti chizgilar, yozilib chiqadigan graffiti imzo, ulkan harflar kamera oldidan o'tadi, qiya nomlar, burchakda «blacklist #1» muhri → bizda «skin #1/#2/#3» (Old English).
- **Musiqa:** EsDeeKid — «LV Sandals» (`Desktop\291762090.mp3`, 111 s, −6.5 LUFS). ~95 BPM, takt 2.532 s; har taktda 808 ~0.8 s uziladi va takt boshida qaytadi; kuchli zarbalar +0 / +0.475 / +0.95 s; 10.1 s — tushish. Videoda 0–44.4 s (17 takt), 43.1 dan so'nadi.
- **Tuzilma:** 0-takt — oq «fegache» teg yoziladi · 1 — «SKIN / QANDAY / YASALADI?» · 2 — «BO'YOQSIZ. / FAQAT NAKLEYKA / + EKSKLYUZIV RASMLAR» + 13 nakleyka portlashi · 3 — AK-47 asl holat · 4–7 — AK-47 «ZEVS» (9 nakleyka, har zarbaga bittadan) + tayyor · 8–11 — Desert Eagle «O'ZBEK NAQSH» (9) · 12–14 — AWP «KO'CHA» (6) · 15 — «TAYYOR SKINLAR» qatori · 16 — FEGACHE.UZ.
- **Eksklyuziv nakleykalar** (o'zim chizdim, SVG → PNG, oq die-cut chegara): Zevs oltin nishoni (zeus.png), FEGACHE graffiti, Samarqand naqshi, anor, tojli bosh suyagi, chaqmoq 1.6, olov, acid smayl, BAM!, ko'z, QR (fegache.uz), UZB nishoni, toj. Tayyor uslub/bo'yoq ishlatilmadi — faqat dasturning nakleyka asbobi (`placeSticker3D` + OK).
- **Usul:** [[Ilovada nakleyka yopishish animatsiyasi (3D qo'nish qirqimi)]] — 3D kadrlar dasturning MiniGL'ida (12 kadr × 176 + qator), qo'nish qirqimi «oldin/keyin» farqidan, parvozda asl rasm.
- **Ovoz:** musiqa −7 dB + 79 SFX (qog'oz+crunch shapillash, whoosh, блеск, shutter, Hollywood hit), `ish/ovoz_miks.py`; render audio'si o'rniga `mix_final.m4a` qayta mux qilinadi.
- **Tekshiruv:** `check` ok (0 xato); render 5 daq 40 s (2664 kadr). `smooth_check` qamchi o'tishlarni kesim deb ajratmaydi va 15 s li "kadr"larni titraydi deydi — xom 3D kliplar va toza oraliqlar (18.5–19.8, 11.3–12.2) SILLIQ ✅, belgilar faqat ataylab qo'yilgan harakatdan. Zarba pop'i 3.5% → 1.2% («shake ortiqcha» tanqidi), parvoz → qirqim crossfade 2 kadr. Sinov-yordamchi serverlar (47810–47812) to'xtatildi.
- Muammolar: [[HyperFrames GSAP tuzoqlari]] #21 (fromTo from-only), [[Video montaj texnik xatolari]] #196 (SFX eshitilmadi), Playwright tuzoqlari #16–17.

Bog'liq: [[CS Skin Studio]] · [[CS Skin Studio - NFS intro video]] · [[Motion design]] · [[Video montaj]]

## Reels (9:16) versiyasi (2026-10-24, foydalanuvchi: "ha, 2-qismning Reels (9:16) versiyasini ham qil")
- `TAYYOR\CS_Skin_Studio_skin_yasash_Reels_60fps.mp4` — 1080×1920, 60 fps, o'sha miks. Loyiha: `video_reels\` (generator `ish/yig_html_reels.py` = `yig_html.py` + `reels_patch.py` + `reels_patch2.py`).
- 16:9 ni kesib bo'lmaydi (qo'nishlar chetga tushadi) → 3D kadrlar **vertikal qayta yozildi**: kamera **roll** (yuqori vektor ko'rish o'qi atrofida burilgan) +44…+63° — qurol pastki chapdan yuqori o'ngga ko'tariladi, tor kadrda ~1.6× katta. Manfiy roll qurolni pastga «tushirdi» — ko'tariluvchi diagonal yaxshiroq. Reja: `ish/reja_reels.py`, shablon `pw/cap_shablon_r.js`.
- Instagram zonasi: yuqori 250 / pastki 420 px. HUD har qurol uchun nakleykalari qo'nmaydigan burchakda (AK — yuqori chap, Deagle/AWP — pastki chap), ixcham yarim shaffof plashka bilan; namoyishda HUD yashirinadi, pastda qorong'i gradient va nom.
