---
tur: bilim
sana: 2026-10-05
teglar: [motion, gsap, otish, uslub]
---
# Motion lug'ati va o'tishlar

## Harakat fe'llari — har elementga bitta fe'l
Agar elementning fe'lini ayta olmasang, u hali dizayn qilinmagan.
- **Zarb / og'irlik:** SLAM, CRASH, PUNCH, STAMP, SHATTER, DROP
- **Yo'nalishli:** SLIDE, PUSH, PULL, WIPE, CUT
- **Ochilish / qurilish:** DRAW, FILL, GROW, EXPAND, ASSEMBLE, COUNT UP
- **Organik / fon:** FLOAT, DRIFT, BREATHE, PULSE, ORBIT, MORPH
- **Mexanik / aniq:** TYPE ON, CLICK, LOCK IN, SNAP, STEP

## GSAP retseptlari (har doim `fromTo` ishlat)
| Nom | Retsept | Mos keladi |
|---|---|---|
| slide | `y:±150 / x:±200, opacity:0 → 0`, `power4.out` | sokin, professional |
| scale_grow | `scale:0 → 1`, 0.6 s, `power2.out` | yumshoq |
| scale_punch | `scale:.6 → 1`, `back.out(2.2)` | zarbali |
| fade_blur | `opacity:0, blur(14px) → 0` | kinematik, xayolchan |
| typewriter | clip yoki width bilan qadam-baqadam | texnik, hikoya |
| word_reveal | har so'z `y` + opacity, stagger 0.1 | hikoya |
| wave | har harf `y`, stagger 0.04 | ritmik |
| slam | `y:-300 → 0`, `power4.out` + qo'nganda silkinish | og'ir zarb |
| scale_pulse (urg'u) | `scale:1.12`, yoyo, `sine.inOut` | ritm cho'qqisi |
| glow (urg'u) | textShadow porlashi, yoyo | muhim |
| underline_sweep | `scaleX:0 → 1`, origin chap | aksent |
| chiqish | `opacity → 0` / `y` ketadi, `power2.in` | yakun |

HyperFrames'da tayyor subtitr komponentlari bor: `caption-kinetic-slam`, `caption-editorial-emphasis`, `caption-pill-karaoke`, `caption-weight-shift`, `shimmer-sweep` va boshqalar. O'zing yozishdan oldin `npx hyperframes catalog --query "..." --json` bilan qidir.

## O'tishlar
- **Shader o'tish:** asosiy (hero) lahza, logo yoki mahsulot ochilishi, "wow" uchun. 5–7 beat'lik videoda 1–2 ta yetadi.
  - Shaderlar: domain-warp, ridged-burn, whip-pan, sdf-iris, ripple-waves, gravitational-lens, cinematic-zoom, chromatic-split, swirl-vortex, thermal-distortion, flash-through-white, cross-warp-morph, light-leak, glitch.
- **CSS o'tish:** bog'lovchi sahnalar uchun. Turlari: push/slide, zoom, iris, 3D flip, dissolve/blur, blinds, light leak, glitch, shutter, grid dissolve.
- **Hard cut:** tez ro'yxatlar, ritmga zarbali kesishlar, 3+ ketma-ket tez almashinuv.
- **Tez tanlovlar:**
  - **Velocity-matched (yuqoriga):** chiqish `y:-150, blur 30px, 0.33 s power2.in` → kirish `y:150→0, blur→0, 1.0 s power2.out`. Ikkala egri chiziqning eng tez nuqtasi kesimda uchrashadi.
  - **Whip pan:** `x:-400, blur 24px, 0.3 s power3.in` → `x:400→0, 0.3 s power3.out`
  - **Zoom through:** `scale 1→1.2, blur 20px, 0.2 s` → `scale 0.75→1, 0.5 s expo.out`
  - Vaqt presetlari: instant 0.15 · snappy 0.2 · smooth 0.4 · dramatic 0.5 · gentle 0.6 · luxe 0.7.

## Ritmni rejalashtir
- Kod yozishdan oldin ritmni nomla: masalan `tez-tez-SEKIN-tez-SHADER-ushlab tur`.
- 15 s reklamada hook + 3 xususiyat + CTA odatda shovqin bo'ladi. Ko'pincha "hook – bitta kuchli xususiyat – CTA" to'g'riroq.
- Energiya cho'qqisi diktorning eng kuchli urg'usiga to'g'ri kelsin.
- Har beat'ni piksel bilan emas, **tajriba** bilan tasvirla: konsepsiya → kayfiyat → xoreografiya (fe'llar) → o'tish → chuqurlik qatlamlari (BG/MG/FG) → SFX lahzalari.

## Vizual uslublar (kayfiyat → uslub)
| Kontent | Uslub | Shader |
|---|---|---|
| Ma'lumot, texnik | Swiss Pulse (Müller-Brockmann) | Cinematic Zoom / SDF Iris |
| Premium, hashamat | Velvet Standard (Vignelli) | Cross-Warp Morph |
| Xom, isyonkor | Deconstructed (Brody) | Glitch / Whip Pan |
| Shovqinli e'lon | Maximalist Type (Scher) | Ridged Burn |
| AI, kelajak | Data Drift (Anadol) | Gravitational Lens |
| **Iliq, sog'liq, shaxsiy** | **Soft Signal (Sagmeister)** | Thermal Distortion |
| Madaniy, iste'mol, bayram | Folk Frequency (Terrazas) | Swirl Vortex |
| Dramatik, kinematik | Shadow Cut (Hillmann) | Domain Warp |

Foydalanuvchining sog'liq reklamalari (NEIROZOL) uchun **Soft Signal** ga yaqin uslub mos keladi.

## Tayyor sahna shablonlari (HyperFrames blueprints, 22 ta)
- `kinetic-type-beats` — hook, muammo, foyda, CTA uchun asosiy shablon: so'zlarning o'zi almashib harakat hosil qiladi.
- `typewriter-reveal` — matn odam yozayotgandek teriladi.
- `dataviz-countup` — raqamlar sanab chiqadi.
- `logo-assemble-lockup` — logo bo'laklardan yig'iladi.
- `grid-card-assemble` — kartochkalar kaskad bilan to'planadi.
- `camera-journey`, `spatial-pan-stations`, `zoom-out-workspace-reveal` — kamera harakati shablonlari.
- `titlecard-reveal`, `cta-morph-press`, `comparison-split`, `video-text-pivot`.

To'liq ro'yxat: `~/.agents/skills/hyperframes-animation/blueprints-index.md`

Markaz: [[Motion design]]
