---
tur: bilim
sana: 2026-10-05
teglar: [montaj, talking-head, grafika, hyperframes]
---
# Talking-head videoni grafika bilan "qadoqlash"

Kameraga gapirayotgan odam (studiya, intervyu, podkast) videosi o'zgarmay o'ynaydi. Uning ustiga gapga mos vaqtda **grafik kartochkalar** chiqadi: sarlavha, lower-third (pastki uchdan bir qism), raqam, iqtibos, yon panel, PiP. Skill: `talking-head-recut`. Oddiy subtitr uchun boshqa skill bor → [[Subtitr san'ati]].

## Jarayon
1. `ffprobe` bilan metadata (davomiylik, o'lcham, fps), audioni mp3 ga ajratish.
2. Whisper transkripsiya → so'zma-so'z `[{text,start,end}]`.
   - ⚠️ Oxirgi so'zning `end` qiymati video uzunligidan oshib ketishi mumkin. Barcha vaqtlarni video davomiyligiga cheklab qo'y, aks holda oxirida qora dum qoladi.
3. Transkriptni tuzat: nomlar, atamalar, tinish belgilari. Vaqtlarni o'zgartirma.
4. Storyboard: har kartochka uchun `intent`, `startSec/endSec`, `zone`, `accentIndex`, `contentHints`.
5. Kartochkalarning HTML'i → kompozitsiya → `check` → `snapshot` → render.

## Nechta kartochka? (formula)
| Video uzunligi | Asosiy temp (s/kartochka) |
|---|---|
| < 60 s (Reels) | 6–8 |
| 1–3 daqiqa | 8–12 |
| 3–10 daqiqa | 12–20 |
| 10–30 daqiqa | 20–35 |
| > 30 daqiqa | 30–60 |

Zichlik koeffitsienti: raqam va fikrlar ko'p bo'lsa **×0.7**, aralash bo'lsa ×1.0, bitta sekin hikoya bo'lsa **×1.5**.
`kartochka soni = max(5, round(uzunlik / (temp × koeff)))`. Kamida 5 ta.
- 15 s dan uzoq turadigan kartochka boy bo'lsin (bosqichma-bosqich ochilsin). Bir qatorlik statik kartochka 8 s dan keyin zeriktiradi.

## Joylashuv (layout) — video va kartochka birga
| Layout | Kartochka zonasi | Qachon |
|---|---|---|
| **split** (50/50) | yon panel | spiker + ma'lumot teng og'irlikda |
| **stack** (video tepada ~44–52%) | pastki 30% | yuz + xulosa kartochkasi, vertikalga yaxshi |
| **pip** (video burchakda) | to'liq ekran | kontent asosiy, spiker ikkinchi darajali |
| **overlay** (video to'liq, shisha kartochka) | butun kanvas, shaffof | kinematik, hissiy |
- Video bir layoutdan boshqasiga 0.5–0.7 s da `power2.inOut` bilan suriladi (`#video-wrap` wrapper animatsiya qilinadi, video elementning o'zi emas).
- Video ko'rinib turgan kartochkalarning foni shaffof bo'lsin.
- Overlay layoutda dekorativ ramka ishlatilmaydi.

## Vertikal (9:16) formatda o'lchamlar kattaroq
| Element | Gorizontal | **Vertikal** |
|---|---|---|
| Sarlavha | 64–96px | **88–132px** |
| Matn | 24–30px | **30–40px** |
| Kicker / yorliq | 14–16px | **18–22px** |
| Asosiy raqam | 48–60px | **64–88px** |
Qoida: vertikal = gorizontal × 1.3, keyin 4 ga karrali songa yaxlitla. Yon bo'shliq vertikalda 24–36px.

## ⚠️ Muhim texnik tuzoq: siyrak keyframe
Kameradan olingan videoda keyframe oralig'i katta bo'lsa (GOP > ~1 s), render paytida kadr qotib qoladi. **Videoni avval qayta kodla:**
`ffmpeg -i in.mp4 -c:v libx264 -crf 18 -g 25 -keyint_min 25 -pix_fmt yuv420p -movflags +faststart -c:a aac input-video.mp4` (`-g` = fps, bizda 25).

## Animatsiya turlari (kartochka ichida)
fade-in/out · slide-in · kinetic-chars (har harf pop) · typewriter · **count-up** (raqam sanaladi) · draw-path (SVG chiziq chiziladi) · grow-x/grow-y (bar o'sadi) · scale-pop · blur-in · mask-reveal · morph-to. 2–3 ta naqsh tanlab, butun video davomida izchil ishlat.

## QA qoidalari
- Har kartochkaning "hero kadri"ni (to'liq ko'ringan holatini) avval yasa.
- Video, kartochka va subtitr bir-birini kutilmaganda yopmasin. Yuz va mahsulot ochiq qolsin ([[Video montaj texnik xatolari]] #9).
- `Math.random()`, `Date.now()`, `setTimeout` ishlatma. Timeline sinxron va pauza holatida bo'lsin.
- Layout xossalari o'rniga transform va opacity animatsiya qil.

Bog'liq: [[Video montaj]] · [[Motion design]] · [[HyperFrames GSAP tuzoqlari]]
