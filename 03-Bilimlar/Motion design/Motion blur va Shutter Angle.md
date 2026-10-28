---
tur: bilim
sana: 2026-10-06
teglar: [motion, motion-blur, premiere, after-effects, hyperframes]
---
# Motion blur va Shutter Angle (Premiere, After Effects, HyperFrames)

**Nima:** tez harakatlanayotgan narsaning kadrdagi "iz"i (smear). **Shutter angle** shu izning uzunligini belgilaydi:
- 180° — kinodagi tabiiy blur;
- 360° — 1 kadr uzunlikda, kuchli;
- 720° — 2 kadr, juda kuchli.

Kamerada esa bu 180° qoidasiga mos: 25 fps → 1/50 shutter ([[Studiya yorug'ligi va suratga olish]]).

## Premiere Pro
- **Transform** effekti: *Effects → Video Effects → Distort → Transform*.
  - **"Use Composition's Shutter Angle"** belgisini o'chir, keyin **Shutter Angle** ni qo'y (0–360; 180 tabiiy, 360 kuchli).
  - ⚠ Blur faqat **Transform effektining ichida** keyframe qilingan Position/Scale/Rotation'ga ishlaydi. Standart **Motion** (Effect Controls'dagi) xossasi blur bermaydi. Shuning uchun animatsiyani Motion'da emas, Transform'da qil.
- **Videoning o'zidagi harakatga** (kamera silkinishi, tez panorama) Premiere'da tayyor "pixel motion blur" yo'q. Variantlar:
  - plaginlar: **RSMB** (RE:Vision ReelSmart Motion Blur), Boris FX Continuum;
  - qo'lda soxta usul: **Directional Blur** effekti, harakat yo'nalishida.

## After Effects
- Qatlamdagi **Motion Blur** tugmasi (switch) va kompozitsiya darajasidagi Motion Blur tugmasi.
- **Composition Settings → Advanced:** Shutter Angle, Shutter Phase, Samples.
- Videoning o'zi uchun **Pixel Motion Blur** effekti. Pre-comp va murakkab holatlar uchun **CC Force Motion Blur**.

## HyperFrames (bizning vosita)
- **Element bo'yicha:** `motion-blur` komponentini kompozitsiyaga qo'shib, elementga atribut berish kifoya. Bu blur preview'da ham ko'rinadi.
  ```html
  <div id="title" data-hf-motion-blur='{"shutterAngle": 360}'></div>
  ```
  - Sozlamalar: `shutterAngle` (standart 720, AE eksportidan o'lchangan), `shutterPhase` (-360), `samplesPerFrame` (16, maks 64), `fps`.
- **Butun kadr bo'yicha:** render paytidagi `motionBlur` opsiyasi. U video, canvas va ota elementlarni ham blur qiladi, lekin faqat yakuniy renderda ko'rinadi.
- Hujjat: `~/.agents/skills/hyperframes-animation/references/motion-blur.md`, komponent: `shutter-slam`.

## Qachon ishlatish (qoida)
- ✅ Faqat **tez, keskin lahzalarga** qo'llanadi: slam, whip, scale punch, tez kirish, aylanish. Bitta videoda 1–3 joy yetadi.
- ❌ Quyidagilarga ishlatilmaydi:
  - sekin suzish, parallax yoki "nafas olish" harakati (blur emas, xiralik bo'lib ko'rinadi);
  - fade va rang o'zgarishi;
  - **o'qilishi kerak bo'lgan paytdagi matn**. To'g'ri yo'l: matn blur bilan kirsin, aniq to'xtasin va ushlab turilsin.
- Faqat harakatlanayotgan elementga belgila, konteynerga emas.
- `left` / `top` animatsiyasiga blur tushmaydi, faqat `x`, `y`, `scale`, `rotation` ga.
- Narxi: har element 17 nusxa. Render sekinlashsa `samplesPerFrame: 8` qo'y.

Namunada ko'rilgan: [[Namuna tahlili - Digital Forum promo]] — bosh ustidagi bokeh chiroqlar vertikal iz bilan tushadi, o'tishlarda ham motion blur bor.

Markaz: [[Motion design]] · Bog'liq: [[Effektlar katalogi]] · [[Motion lug'ati va o'tishlar]]
