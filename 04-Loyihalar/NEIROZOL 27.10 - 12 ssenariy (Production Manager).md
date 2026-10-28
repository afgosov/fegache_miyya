---
tur: loyiha
sana: 2026-10-28
teglar: [neirozol, mediazone, motion, 50-50, ssenariy, target]
---
# NEIROZOL 27.10 — 12 ssenariy (Production Manager ro'yxati)

**Manba:** `D:/2 Mediazone montaj qilish kere/27.10.2026 Neirozol/` (Sony C9882–C9906, 4K, rotate −90) + Telegram'dan 2 ta iPhone selfi (`IMG_3440.MOV`, `IMG_3441.MOV`, 59.94 fps → 25 fps proksi).
**Natija:** `…/27.10.2026 Neirozol/TAYYOR/NEIROZOL_01…12_*.mp4` (+ `musiqasiz/`). **Ish papkasi:** `D:/claude_ish/loyihalar/2026-10-28_neirozol_2710/`.

## Buyruq
"Yangi o'rganganlarimiz bilan professional, kesish va joylashda xato qilma"; 2 selfi qaysidir ssenariyga — o'zing aniqla. Savollarga javob: 50/50 yuqori vizualni **o'zim chizaman**; 4-video **hook + B-roll motion + CTA**; Ustoz 8 va 12 — **ikkalasi**. Oxirida: **Telegram bot orqali fayl qilib yubor**, kompyuter **yoniq qolsin** (avval "o'chir" degan, keyin bekor qildi).

## Ssenariy → klip
1 3 ta meva C9882 · 2 labirint IMG_3440 (50/50) · 3 qaysi biri og'irroq IMG_3441 + C9899 ovozi (C varianti) B-roll C9898 ustida · 4 ayollar sababi: hook C9896 ovozi (kadrda suflyor ushlagan yordamchi yuzni yopgan → foydalanuvchi "ovoz + B-roll" tanladi) + skaner + C9906 CTA · 5 kubik C9897 (50/50) · 6 C9884 · 7 C9896 0–109 s · 8 C9904 · 9 C9893 · 10 C9889 · 11 C9886 · 12 C9901.

## Yangi texnikalar
- `assemble.py`: har video = dubl bo'laklari bir nechta klipdan (`[v_klip, v_bosh, a_klip, a_bosh, d]`, B-roll = video bir klipdan, ovoz boshqasidan, `SIL` = jim). comp.py `parts` bilan klip almashtiradi.
- 50/50 (`nx_split.js`): tepada o'zimiz chizgan labirint (seed'li maze, 4 odamcha BFS yo'li, iz chizig'i, seek-safe tween) / ortografik sim-kubik (har kadr `tl.set` d) ; gapdan keyin panel butun ekranga. Pastki spiker kadri `face_at` bilan.
- **14b avtomat:** ekranda chip/tagStack/CTA/Difference turganda o'sha gap `v.mute()` bilan subtitrdan olinadi; `qa/caps_review_N.txt`. Shubhali so'zlar (C9904 "doimiy ~ishubat", C9906 "jo'natvoring") faqat ekrandagi yozuv bilan berildi — taxmin subtitrga yozilmadi.
- Xavfsiz zona: subtitr 1336, chip 1000/1112, tepa 330, CTA 1120, x ≥ 90–100.

## Holat
- 2026-10-28 08:10: **12/12 tayyor** (TAYYOR + musiqasiz). Hammasi 12–43 s, −14.0±0.2 LUFS, TP −1.5, `final_report` MUAMMO yo'q. Har video: kadr varag'i ko'z bilan, whisper qayta o'qish (ulanishlar ±3 s), subtitr↔ekran yozuvi ro'yxati, musiqa ovozdan 19.5 dB past (avto), SFX 7–16 dB past.
- QA'da topilib tuzatilgan: 4-video boshida begona qisqa tovush ("Tab") — kesildi; 11-videoda "Neirozol" ulanishda 2 marta — kesildi; 50/50 panel kengayganda pastki kadr sakrardi; kubik sarlavhaga tegardi; 3-videoda "C — eng og'iri" 0.6 s edi → 1.4 s; Difference/NEIROZOL yorlig'i yorug' devorda xira → plashkali chip; subtitrdan qo'shni so'z yutilishi (kun, fanda, oling); musiqa 23 dB past edi → avto 19.5.
- Topshirish: Telegram bot qayta ishga tushirildi; ≤ 50 MB 6 ta asl fayl bot orqali (xabar 151–156). Qolgan 6 tasi (01, 03, 04, 07, 09, 12) — foydalanuvchi qarori kutilmoqda (siqilgan nusxani rad etdi, masofadan Telegram Web'ga kira olmadi). Kompyuter yoniq qoldirildi.

Bog'liq: NEIROZOL 24.10 - 9 maslahat video (shifokor) · [[Montaj qizil chiziqlar]] · [[Video ustidagi motion konveyeri (portret + shaffof shrift)]]
