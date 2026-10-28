---
tur: bilim
sana: 2026-10-06
teglar: [motion, 3d, threejs, hyperframes, amaliy]
---
# Three.js 3D sahna HyperFrames'da (sinalgan retsept)

Birinchi qo'llanishi: [[NEIROZOL Reels]] → `NEIROZOL_oila_domino.mp4` (domino zanjiri, uycha, mahsulot qutisi). GPU bilan render: 740 kadr ~1.5 daqiqa.

## Ulash
- Three.js'ni loyiha ichiga qo'y: `assets/vendor/three.module.js` + `three.core.js`. Addon'lar CDN tuzilmasida: `assets/vendor/addons/geometries/RoundedBoxGeometry.js`, `addons/environments/RoomEnvironment.js` ([[Video montaj texnik xatolari]] #18).
- `<head>` da importmap: `"three": "./assets/vendor/three.module.js"`, `"three/addons/": "./assets/vendor/addons/"`. Keyin `<script type="module" src="./assets/world.js">`.
- Root'da `data-duration` bo'lishi shart (three adapteri davomiylikni o'zi topmaydi).
- Kadr faqat vaqtdan chiziladi: `window.addEventListener("hf-seek", e => renderAt(e.detail.time))`. `requestAnimationFrame` yo'q.
- Shrift yuklanishini va sahna qurilishini kutish: `window.__hf.buildReady["nom"] = build()` (ichida `await document.fonts.load('800 120px "FSXC"', "ҚҒҲЎ…")`).
- Renderer: `preserveDrawingBuffer: true`, `setPixelRatio(1)`, `setSize(1080,1920)`, ACES tone mapping, `PCFShadowMap` + `shadow.radius`.
- Bir canvas, uch rejim: `off` (shaffof, ostida video), `world` (to'liq 3D), `overlay` (faqat kameraga bog'langan obyekt, masalan "+" belgisi video ustida).

## Ko'rinishni "qimmat" qilgan narsalar
- Lak material: `MeshPhysicalMaterial` (roughness 0.34, clearcoat 0.55) + `RoomEnvironment` env map (intensity ~0.3).
- O'yilgan yozuv: bir xil chizilgan ikki canvas, biri `map`, biri `bumpMap` (oq fon, qora harf) + 2px yorug' "highlight" siljishi.
- Iliq key light chapdan-oldindan, issiq hemisphere fill, orqadan rim. Changlar: 400 nuqta, additive, harakati dunyo vaqtiga bog'langan (muzlashda to'xtaydi, orqaga o'rashda teskari yuradi).
- Vinyetka va subtitr orqasidagi qorong'i chiziq DOM qatlamida.

## Harakat
- Domino fizikasi kinematik, sof funksiya: tushish `θc·(0.16u + 0.84u²)`, urilgandan keyin keyingisiga suyanadi: `θ = φ + asin((D·cosφ − t)/h)`.
- "Dunyo vaqti" (`worldTime(t)`) bilan muzlatish va orqaga o'rash bitta funksiyada bajariladi.
- Kamera: `SHOTS` ro'yxati (t0, t1, pos, lookAt, fov, ease). Kesim — keyingi shot. Zarbalarda pasayib boruvchi deterministik silkinish.
- Vertikal kadrda zanjirni gorizontal ko'rsatma: obyektlar sig'maydi. Yuqoridan, zanjir bo'ylab qarash kerak (zinapoya kompozitsiyasi).

## Tez tekshirish (render qilmasdan)
- `_ish/c0476v2/tools/shot.cjs`: `node shot.cjs <papka> "t1,t2" [patch.js]`. U `python -m http.server` orqali ochilgan sahnani `chrome-headless-shell` + `puppeteer-core` bilan yuklaydi (npx keshidagi hyperframes'dan), patch bilan kamerani almashtirib, kadr saqlaydi. `sheet.sh` kadrlarni bitta varaqqa yig'adi.
- Buning uchun sahnada debug tutqich: `window.__dominoDebug = { renderAt, SHOTS, … }` va `window.__timelines = window.__timelines || {}`.

Markaz: [[Motion design]] · Bog'liq: [[HyperFrames GSAP tuzoqlari]] · [[Ovoz dizayni pipeline]]
