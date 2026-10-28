---
tur: bilim
sana: 2026-10-25
teglar: [cs-skin-studio, 3d, playwright, animatsiya, video]
---
# CS Skin Studio: o'yinchi modelini (terror.mdl) qurol va animatsiya bilan chizish

Dasturning o'zida mini-o'yin botlari uchun tayyor funksiyalar bor — videoda niqobli terroristlarni harakatlantirish uchun ishlatildi ([[CS Skin Studio - 6 ta o'yin intro video (2026-10-25)]]).

1. **Ochish:** `parseMDL(await (await fetch("std/terror.mdl")).arrayBuffer())` → `loadModel(m, {name, buf}, null)` (muharrir modeli bo'ladi, `S.T` teksturalari bilan) va `await gbLoad()` (`GB.m`, `GB.pm` = p_ak47, ketma-ketliklar).
2. **Kiyim:** terror.mdl da bitta 512×512 tekstura (+ ryukzak) — dastur uslubi butun gavdaga tushadi (niqob ham). Yaxshi natija: `grad` (2 rang) to'q tonlarda, `detail 0.75–0.9`; `sapphire/emerald` juda yorqin «o'yinchoq askar» chiqadi.
3. **Animatsiya:** `gbBones(seq, frame, gaitIdx("idle1"), gaitFrame, aim)` — yuqori tana ketma-ketligi + oyoqlar. Kadrlar orasida 3×4 matritsalarni chiziqli aralashtirish (30 fps anim → 60 fps video). Yaxshi «imo»lar: `ref_reload_ak47` (91 kadr), `ref_reload_onehanded`, `ref_shoot_knife` (pichoq aylantirish), `ref_aim_ak47` (sokin poza).
4. **Qo'ldagi qurol:** `p_*.mdl` suyaklari o'yinchi suyaklaridan nom bo'yicha — `GB.pm = pm; GB.pmap = GB.pown = null; gbPBones(B)` (istalgan p_ model uchun). Oltin qurol: `idxToRGBA` → `palAt(P_GOLD, Y·1.25+0.08)`.
5. **Chizish:** `window.computeBones` ni vaqtincha almashtirib (`m === S.model ? B : m === pm ? pB : asl`) har kadrda `mg.load(S.model, "player", {rgba})` va `mg.load(pm, "p", …)`; ikkinchi chizishda `mg.g.clear` vaqtincha no-op (chuqurlik buferi saqlanadi), keyin `mg.free`. Kamera: model o'qlari X oldinga, Z yuqoriga; yaqin plan `d 50–62`, `fov 1.0` (keng burchak, drill klip hissi), qo'lda tebranish — deterministik sinuslar.
6. ⚠ Orqa ko'rinishda (yaw ≈ 2.6) bosh chizilmay qoldi — orqadan kadr ishlatma.

Bog'liq: [[Ilovada to'liq skin bo'yash animatsiyasi (qatlamlar orasida o'tish)]] · [[GoldSrc MDL formati va skin muharriri]]
