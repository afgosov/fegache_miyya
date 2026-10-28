---
tur: loyiha
sana: 2026-10-21
teglar: [video, promo, hyperframes, cs-skin-studio, nfs]
---
# CS Skin Studio — NFS Most Wanted intro video (2026-10-21)

Foydalanuvchi: "shu saytni NFS MW ni intro siga o'xshab bitta video qilib ber smooth effecti bo'lsin silliq chiqsin".

- **Natija:** `D:\CS Skin Studio\TAYYOR\CS_Skin_Studio_NFS_intro_60fps.mp4` — 32.4 s, 1920×1080, **60 fps**, −14.1 LUFS (TP −1.2).
- **Loyiha:** `D:\claude_ish\loyihalar\2026-10-21_cs_nfs_intro\` (`video/` — HyperFrames, `ish/` — skriptlar, kadrlar, miks). Bitta `index.html` (monolit, ~380 qator).
- **Tuzilma (128 BPM takt to'ri, drop = 3.751 s):** 1) politsiya radiosi matni + qizil/ko'k chiroqlar → 2) AK-47 «Olov» yo'nalishli blur bilan kiradi, "ENG QIDIRUVDAGI SKINLAR" → 3) BLACKLIST #3 AWP Kiber to'r / #2 Deagle Neon / #1 M4A1 Galaktika (rank, rap-sheet, qidiruv shkalasi, muhr) → 4) 4 ta qiyshiq UI ekran: 22 yangi uslub, ✓ bir bosishda, Ctrl+C→Ctrl+V tugmalar, 100+ minimal nakleyka → 5) 10 qurol tezkor montaj (strob, tezlik chiziqlari) → 6) "CS SKIN STUDIO" xrom logo, Zevs logotipi xira fonda, fegache.uz · Windows · Android.
- **Assetlar:** qurollar dasturning o'zidan — [[Ilova 3D modelidan shaffof turntable video]] (13 ta VP9 alpha WebM). UI — web_build'dan skrinshotlar (2.1.0 holati; keyin 2.1.1 da nakleyka tutqichlari ⟳/✓/🗑 bo'ldi).
- **Ovoz:** Mixkit 160 (`2026-10-15_neirazol/music/160.mp3`, 128 BPM, drop 30.02 s) + foydalanuvchi SFX (Radio, Reverse Tension, Braams, Doppler whoosh, Camera shutter, Car Skid, Hollywood Hit, Блик). `ish/ovoz_miks.py`. HyperFrames render audio'ni 1.9 dB pasaytirgan (−15.8) — yakunda m4a −14 ga keltirilib `-c:v copy` bilan qayta mux qilindi.
- Render 3 daq 36 s (5 worker, hardware GPU). check: 0 xato, kontrast 62/62.
- Muammolar: Playwright run_code modalni kutib 30 daqiqa osildi → Playwright tuzoqlari #14.

Bog'liq: [[CS Skin Studio]] · [[Motion design]] · [[Video montaj]]

## Reels versiyasi + 2.1.1 ekranlari (2026-10-21, foydalanuvchi: "ha reels formatida qilib ber")
- `TAYYOR\CS_Skin_Studio_NFS_intro_Reels_60fps.mp4` — 1080×1920, 60 fps, −14.1 LUFS. Loyiha: `video_reels\` (assets nusxa, alohida `index.html`).
- 16:9 ham yangilandi (o'sha nom): UI ekranlari 2.1.1 dan, **DPR 2** (3840×2160) — Reels'da 1.9× zoom ham tiniq. Nakleyka: ⟳/✓/🗑 klasteri (✓ endi to'q sariq — halqa rangi ham), 2-model: 3D ko'rinish + "✓ 1 ta detal" belgilash.
- Vertikal joylashuv: Instagram xavfsiz zonasi (tepa ~250, past ~420 px) — matnlar 260–1480 orasida; qahramon qurol −22° qiya (width 1150), Blacklist quroli −9°, UI kartochka 1000×860 ichida **rasm zoom** (karta emas), fokus nuqtasi kartochka markaziga.
- Tuzoq: Reels'da logotip qatorlari uchun `.lt` klass qo'ydim — CTRL+C/V tugmalaridagi `.key.lt` bilan to'qnashib, C/V harflari 214 px bo'lib ketdi → `.lgl` ga o'zgartirildi. Yangi klass nomini qo'yishdan oldin mavjudlarini qidir.
- Playwright: DPR 2 uchun `page.context().browser().newContext({deviceScaleFactor: 2})`; `globalThis` run_code chaqiruvlari orasida saqlanmaydi — sahifani `browser().contexts()` dan `devicePixelRatio === 2` bo'yicha qayta top.

- **2026-10-23:** fegache.uz 2.3.2 da galereya jonli ishlayapti (bosh sahifa «GALEREYA — HAMJAMIYAT SKINLARI», 2 ta skin, rasmlar fegache.uz/galereya-rasm). Videolarda versiya yozuvi hali «2.1».
