---
tur: bilim
sana: 2026-10-17
teglar: [motion, subtitr, python, reels, obuna]
---
# Premium motion qatlam (gfx.py) — HyperFrames'siz, Python'da

Sinalgan: Pediatr Arofat Reels (5 video). Fayl: `D:/claude_ish/loyihalar/2026-10-16_arofat/tools/gfx.py`.

## Konveyer
`build.py` (`NOCAP=leak` → `video_nocap.mp4`: kesim, color, stab, light leak) → `gfx.py` (motion qatlam → `video.mp4` + `sfx_auto.json`) → `mix.py` (SFX hodisalarini o'zi qo'shadi) → `final.py`.
Motionni qayta sozlash uchun asosni qayta render qilish shart emas: gfx 25 s videoga ~45 s.

## Elementlar (plan.json → "gfx")
- `title`: kicker (kobalt pill) + qatorlar niqob ichidan ko'tariladi (power3.out, 0.13 s stagger), `maxw` ga sig'diriladi; `dim` bilan fonni qoraytir.
- subtitr: har so'z alohida sprite, 26 px pastdan ko'tariladi + 0.94→1 masshtab, `*so'z*` aksent (sariyog' #FFD64A), 3 px kontur + soya. Ism kartasi/ro'yxat paytida subtitr qo'yilmaydi (takror matn).
- `name`: oq karta + kobalt chiziq, niqob bilan ochiladi, `count: [8, "yillik tajriba"]` sanog'i.
- `list`: raqamli oq kartalar, har biri diktor aytgan kadrda, `head` pill; elementlar segmentlararo (`seg`/`seg1`).
- `cta`: kobalt tugma + pastga strelka + bir marta yaltirash; `sub` (telefon) tepada.
- `endcard`: oxirgi toza kadr xiralashadi (σ 16, −42%), avatar (mediapipe yuz kesimi, IG gradient halqa), ism, "Obuna bo'lish" (#0095F6) → kursor bosadi, to'lqin → "✓ Obuna bo'lingan". SFX: вжух + клик 3.
## Tuzoqlar
- Avatar uchun umumiy plan/yurish kadri olinmaydi: yuz kichik → FaceLandmarker topmaydi. O'tirgan yaqin kadr ol.
- Montserrat'da ✓ va ↓ yo'q — chiziq bilan chiziladi.
- `FRAMES=a-b` rejimida video yozilmaydi (faqat jpg) — to'liq render uchun o'chir.
Bog'liq: [[Subtitr san'ati]] · [[Motion doktrinasi]] · [[Klassik montaj konveyeri (motion'siz)]]
