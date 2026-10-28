---
tur: bilim
sana: 2026-10-27
teglar: [reels, playwright, hyperframes, ui, motion]
---
# Dastur funksiyasi uchun Reels: UI holatlarini kadrlash

CS Skin Studio yangiliklari uchun ishlatilgan, yaxshi chiqqan usul ([[CS Skin Studio — yangiliklar Reels (2026-10-27)]]):

1. **Dastur nusxasi alohida portda** (web_build → loyiha/app, `python -I -m http.server`), Playwright yangi kontekstda (1600x1000, deviceScaleFactor 2), tashqi so'rovlar yopiq. Asosiy dastur fayllariga tegilmaydi.
2. **Har holat = to'liq surat** (3200x2000) + tugma joylari (`boundingBox`). Harakatlar haqiqiy bosish bilan (ko'z, qulf, ▲, «O'yinda», cl_righthand) — dastur o'zi o'zgaradi.
3. **Videoda kesimlar**: bitta suratdan 2 oyna (masalan 3D qurol + qatlamlar paneli) bir vaqtda almashadi; soxta kursor (SVG) + to'lqin halqasi; kerakli joyga zoom (transform-origin = tugma, rasm cheti oynadan chiqmasin: x ≤ ox·(s−1)).
4. **O'yin animatsiyasi**: `S.seq/S.frame` + `applyPose()` + 2×rAF, har 1/60 s da clip-surat (jpeg 92) → hardlink ketma-ketlik → ffmpeg crop+scale 1080x1920 (crf 13, -g 30). Vertikal «POV» kesim: o'ng qo'l x=1455..2420, chap qo'l x=0..965.
5. Mo'yqalam izi uchun `setColor()`, `S.brush.size/hard`; nakleyka qiya sirtda cho'ziladi — o'yin ko'rinishida nakleyka kadrini ishlatmadim.
6. Panel kesimini sarlavhadan pastga olsa, qatlam qo'shilganda oyna «o'sadi» — chiroyli effekt.

Bog'liq: [[HyperFrames GSAP tuzoqlari]], [[Video montaj uslubi]]
