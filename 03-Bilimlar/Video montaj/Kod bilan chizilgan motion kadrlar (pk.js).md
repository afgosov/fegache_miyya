---
tur: bilim
sana: 2026-10-21
teglar: [motion, sahna, hyperframes, gsap, reels, portret, shaffof-shrift, sfx, rang]
---
# Kod bilan chizilgan motion kadrlar (pk.js) — "rostakam motion", generatsiya/stok emas

Foydalanuvchi 2026-10-21: "motion kadrlar qo'sh, lekin **generatsiya qilingan yoki yuklangan video emas**, rostakam motion kadrlar; **ko'p bo'lmasin**; speaker gapirayotganda u bilan mos, mavzuga aloqador". Sinaldi: Reels podkluch - Mediazone kurslari (21.10).

## Qoida
- Motion kadr = **to'liq ekranli grafik sahna** (portretda — kartochka ichida), spiker ovozi davom etadi, subtitr sahna **ustida** qoladi.
- Soni: 30 s → 2 ta, 50–56 s → 2–3 ta, har biri 2.5–5 s (videoning ~16–25%). Ketma-ket ikki sahna qo'yma (orasida spiker ≥3 s).
- Hook (birinchi 5 s) — doim spiker + yozuv; birinchi sahna 5-soniyadan keyin.
- Har sahna aytilgan gapning vizual metaforasi va har element **so'z aytilgan lahzada** chiqadi (×10–20 → ×100, nishon → 100%, 4 modul → 0→PRO, radar, 2 OY kalendar, $0 → $3 000).
- Sahna chegarasi montajchi kesimiga to'g'ri kelsa — kesim **parda ostida** qolsin (t1 = kesim + 0.2…0.3 s); kesimdan 0.02 s oldin tugasa, darhol sakrash ko'rinadi.

## Fayllar (`D:/claude_ish/loyihalar/2026-10-21_podkluch_2110/`)
- `common/pk.js` — `shell()` (doira bilan ochiladi `clipPath circle 0→2300px` 0.55 s power3.inOut; parda bilan yuqoriga ketadi `inset(0 0 1920px 0)` 0.46 s), 8 sahna: `sGrowth, sTarget, sInsights, sModules, sGift, sRadar, sCalendar, sIncome`; video ustida: `chip` (monoline ikonka aksent doirada), `plist` (galochkali ro'yxat), `seats` (joylar to'ladi).
- `common/pk_icons.js` — 27 monoline ikonka (target, laptop, dollar, chart, gift, ai, calendar, users, briefcase, pin, wallet, coffee, cap, star, send, heart, camera, film, seat, trophy, bell, play...). Stiker (die-cut) uslubi kurs/biznes reklamasiga bolalarcha ko'rinadi — monoline yaxshiroq.
- `common/t1|t2|t3.css` — har video o'z rang uslubi (CSS o'zgaruvchilar: `--sBg --sInk --sAcc --sAcc2 --sCard --chBg --chIcBg --capC --capEm --btnBg`...).
- `tools/mkplan2.py` — reja DSL: `v.scene(kind, t0, t1, ...)`, `v.chip`, `v.dif`, `v.title`, `v.cta`, `v.plist`, `v.seats`; har biri o'z SFX bilan; `add(t, key, db, peak=True)` — SFX cho'qqisi ko'rinadigan lahzaga tushadi.
- `tools/comp.py` — sahna kirishida spiker zoom-through (k ×1.10), qaytishda 1.08 → 1.0 "qo'nish".

## O'tish markazi
Doira (`org`) hech qachon yuzda emas: to'liq ekranda `[540, 1560]`, portretda `[540, 1500]` (ichki koordinata). Yuzdan boshlansa, yuzda qora dog' o'sib boradi ([[Video montaj texnik xatolari]] #158).

## Seek-safe sanoq
Raqam sanog'ini `onUpdate`/`textContent` bilan qilma (seek'da ishonchsiz). `stepNum()`: har qiymat alohida span, `tl.set(visibility)` — ease-out vaqtlarida 10–11 qiymat ("$0 … $3 000").

## Portret rejimda sahna
Sahna 1080×1920 da yoziladi, `.scn.card` = kartochka (165,295,750×1330, r30) ichida `scale(0.69444)`. Subtitr kartochka **ostida** krem fonda (y 1712, siyoh rang, aksent so'z gilos) — juda toza ko'rinadi. Shaffof shrift kartochka ichidagi videoda y 0.14 (zoom 1.16/1.32 da boshga tegmaydi).

## Rang uslubi tanlash (har video alohida)
| Kadr | Uslub | Fon | Matn | Aksent |
|---|---|---|---|---|
| Qizil kostyum, oq/qora devor (portret) | Krem va gilos | krem #FEFBF0 / siyoh sahna #16110e | #17130f | gilos #d7192d (kostyumdan) |
| Qizil devor, qora kostyum | Bordo va shaftoli | bordo radial #5c1526→#16040a | fil suyagi #fff4ec | shaftoli #ffb48c |
| To'q ko'k ofis | Tungi kobalt | #16296a→#050a1c | oq | kobalt #4d7cff + muz #8fb4ff |
"Muvaffaqiyat = yashil" galochka ham palitraga bo'ysunadi (kobalt videoda kobalt galochka).

## SFX (foydalanuvchi kutubxonasidan, o'lchangan cho'qqi)
sahna kirishi `whoosh/Медленный 4` (cho'qqi 0.50 s), chiqishi `Быстрый 6` (0.36), grafik o'sishi `riser/Sharp Detail Riser` (0.66), ustunlar `riser/Ascending`, raqam slam `zarba_impact/Impact` (past, −6), nishon qulflanishi `glitch_data/Data 2` (raqamli blip), sanoq `Цифры дисплея (1)` (dur = sanoq davomiyligi), $ yakuni `pul_tanga/Дзынь (касса)`, bildirishnoma `klik_ui/maxkim_Уведомление`, kalendar `qogoz/Paper`, modul plitkasi `Клик 2`, sovg'a `Twinkle`. Natija: eng baland SFX ovoz p90 dan 8.8–9 dB past.

Bog'liq: [[Video ustidagi motion konveyeri (portret + shaffof shrift)]] · [[Portret uslub va shaffof shrift]] · [[Motion doktrinasi]] · [[SFX kutubxonasi (foydalanuvchiniki)]] · Markaz: [[Video montaj]] · [[Motion design]]

## v2 qo'shimchalari (2026-10-25)
- `sCourse` — bitta sahna ichida ikki faza (`.sph` A/B: kalendar → kim o'rgatadi → qatorlar `.crow` → progress `.lvl`), uzun (12 s+) yon rakursni yopish uchun; ikki sahnani ketma-ket qo'yishda ikkinchisi birinchisining **ustidan** ochiladi.
- Subtitr Instagram xavfsiz zonasida: to'liq ekranda y 1350, portretda kartochka ichida krem plashka (ibora butunligicha chiqadi). Sahna elementlari ≤1300 da tugaydi (sInsights/sGift ixchamlashtirildi).
- `comp.py Rangli` — shaffof shrift harakati bilan to'liq rangli matn (mijoz "ko'zga tashlansin" desa).
- (v3, 2026-10-26) `shell()` ambient: kontent sekin yaqinlashadi (1.03) + to'r suriladi — subtitrsiz sahna ham qotib turmaydi. Subtitr ekrandagi yozuvni takrorlamasligi: `mkplan2.py` `v.txt` + `dedupe()` + `v.hide()`.
