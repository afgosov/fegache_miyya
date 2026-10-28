---
tur: bilim
sana: 2026-10-06
teglar: [motion, effekt, katalog, gsap, hyperframes]
---
# Effektlar katalogi (HyperFrames tayyor retseptlari)

Har bir effekt `~/.agents/skills/hyperframes-animation/rules/<nom>.md` faylida tayyor kod bilan berilgan. Bitta sahnada 2–4 tasini birlashtir. Kerakli effekt nomini bu yerdan topib, keyin o'sha faylni o'qi.

## Umumiy shartnoma (hamma effektlar uchun)
- Bitta **pauzadagi** GSAP timeline bo'ladi, u `window.__timelines` ga ro'yxatdan o'tkaziladi.
- Effekt ikki yo'nalishda ham seek-safe bo'lsin: `fromTo`, absolyut qiymatlar, `+=` ishlatilmaydi.
- Deterministik: `Math.random` yoki `Date.now` yo'q, takrorlar soni chekli.
- Faqat transform va bo'yoq xossalari animatsiya qilinadi. **width, height, top, left tween taqiqlangan.**
- Guruh stagger'i ≈ 0.5 s dan oshmasin (`elementlar × stagger ≤ 0.5`).
- Animatsiya qilinadigan elementlarda CSS `transition` bo'lmasin (miltillaydi).

## Matn va tipografiya
| Effekt | Nima qiladi | Qachon |
|---|---|---|
| `kinetic-beat-slam` | Qisqa iboralar bitta ritmga turli kirishlar bilan "uriladi" | Energik hook, musiqaga sinxron |
| `waterfall-entry` | So'zlar pastdan to'lqin bo'lib, tezlashib chiqadi | Sarlavha, bo'lim boshi |
| `asr-keyword-glow` | Kalit so'z diktor aytganda porlaydi va kattalashadi | Subtitrda urg'u |
| `hacker-flip-3d` | Harflar 3D aylanib, "shifr ochilgandek" almashadi | Texnologiya, sir ochilishi |
| `vertical-spring-ticker` | Slot mashinasidek vertikal aylanuvchi so'z | Variantlar almashinuvi |
| `discrete-text-sequence` | Xatolar, backspace va pauzali "jonli" yozish | Typewriter hook |
| `3d-text-depth-layers` | Bir necha qatlamli 3D "hajmli" matn | Katta sarlavha |
| `gradient-text-sweep` | Harflar ichidan gradient o'tadi | Premium urg'u (ehtiyot bo'l: "AI belgisi") |
| `chromatic-glitch` | RGB bo'linishi yoki tasma glitch, keyin tiniqlashadi | Texnologiya, keskin zarba |
| `context-sensitive-cursor` | Rangi o'zgaruvchi miltillovchi kursor | Yozish sahnasi |

## Raqam va ma'lumot
| Effekt | Nima qiladi |
|---|---|
| `counting-dynamic-scale` | Raqam sanab chiqadi va qiymat o'sgani sari kattalashadi ("8 xil giyoh", "10 000 mijoz") |
| `stat-bars-and-fills` | O'suvchi ustunlar, progress chizig'i, yulduzli reyting |
| `chart-scrub-readout` | Grafik bo'ylab kursor yuradi, qiymat ko'rsatkichi o'zgaradi |

## Kamera
| Effekt | Nima qiladi |
|---|---|
| `viewport-change` | Butun sahna o'ralgan `.world` wrapper orqali virtual zoom, pan va fokus |
| `coordinate-target-zoom` | Markazda bo'lmagan elementga yaqinlashish |
| `multi-phase-camera` | Uzoqlashish → fokus → yaqinlashish + mikro-drift |
| `3d-camera-flight` | 3D dunyo bo'ylab perspektivali parvoz |
| `depth-of-field-blur` | Rack-focus: fon xiralashadi, asosiy element tiniq qoladi |
| `camera-cursor-tracking` | Kamera yozuvchi kursorni kuzatib boradi |

## Joylashuv va tarmoq
`center-outward-expansion` (markazdan tarqalish) · `split-tilt-cards` (ikki qiyshaygan karta) · `orbit-3d-entry` (orbitaga kirish) · `avatar-cloud-network` (avatarlar halqasi) · `depth-scatter-assemble` (3D bulutdan yig'ilish) · `anchored-layout-expand` (pill dropdown'ga ochiladi) · `3d-page-scroll` (sayt 3D kartada aylanadi) · `ai-tracking-box` (AI aniqlash ramkasi)

## SVG va ikonkalar
- `svg-path-draw` — kontur chiziq-chiziq chiziladi (logo, ikonka, imzo). Uzunlik `getTotalLength()` bilan o'lchanadi.
- `svg-icon-enrichment` — ikonka ichidagi qismlar harakatlanadi (soat millari, parraklar). Ikonkalar "tirik" ko'rinadi.

## Fon va ambient (ehtiyotkorlik bilan — [[Motion doktrinasi]])
- `ambient-glow-bloom` — asosiy element orqasida yumshoq porlash ochiladi. Yoki sirt bo'ylab bir marta yaltirab o'tadi.
- `sine-wave-loop` — nafas olish yoki idle harakat. Faqat fon dekori uchun.

## O'tish va o'zaro ta'sir
| Effekt | Nima qiladi |
|---|---|
| `spring-pop-entrance` | `scale 0→1` kirish (overshoot faqat o'ynoqi kontentda) |
| `motion-blur-streak` | Tez kirishda soxta harakat blur'i |
| `nudge-curve` | Guruh sekin-tez-sekin siljiydi (10/65/25 masofa) |
| `scale-swap-transition` | Bir markazda ikki element almashadi |
| `card-morph-anchor` | Kartochka o'lcham va burchagini o'zgartirib boshqa elementga aylanadi |
| `theme-crossfade-morph` | Butun mavzu (ranglar, shriftlar) bir zumda almashadi |
| `reactive-displacement` | Kirayotgan element chiqayotganini "urib" chiqaradi |
| `particle-burst` | Konfetti yoki zarrachalar portlashi |
| `press-release-spring`, `physics-press-reaction` | Tugma bosilishi |
| `cursor-click-ripple`, `cursor-drag`, `multi-cursor-choreography` | Kursor bilan UI demo |
| `control-target-sync` | Boshqaruv va natija bir vaqtda o'zgaradi |

**UI-motion o'tishlari** (McDonald's ilova namunasidan, 2026-10-06 → [[Namuna tahlili - McDonald's ilova reklamasi]]):
| Usul | Qanday qilinadi |
|---|---|
| Kadr → kartochka | Butun sahna wrapper'i `scale 1→0.85` + `borderRadius 0→40px`, ostidan rangli fon ochiladi (~0.4 s, `power3.inOut`) |
| Ikonka → ilova | Ikonka `scale` + `borderRadius` bilan ekran o'lchamiga kengayadi, ichki kontent `opacity` bilan chiqadi (iPhone'da ilova ochilishi kabi) |
| Logo wipe | Kadrdan katta logo (SVG) `scale 8→1` bilan kichrayadi; uning shakli keyingi sahnani ochadigan maska bo'ladi |
| Focus dim | Tanlanmaganlar uchib ketadi, fon `brightness 1→0.6`, tanlangan kartochka sariq gradient nur bilan "yonadi" |
| Element kesimdan o'tadi | ✓ yoki ikonka sahnalar ustidagi alohida qatlamda yashaydi; sahna almashganda u ko'chib davom etadi va kesimni yashiradi |
| Thermal / gradient map | 0.3 s SVG `feComponentTransfer` (gradient map) yoki shader; kadr qizil-sariq posterize bo'lib keyingi sahnaga o'tadi |
| Dim + glow reveal | Hammasi xira va qorong'i bo'ladi, markazdan sariq radial nur bilan "mukofot" obyekti chiqadi |
| 3D kartochka yelpig'ichi | 3 kartochka `perspective` ichida `rotationY ±15°` va `x` siljish bilan ochiladi |
| 3 qatlamli tanlash | Kursor bosadi (scale 0.9) → katak sariq bo'lib yonadi → belgi `+`→`✓` |
| Count-up + halqa | Raqam sanaladi, SVG halqa `stroke-dashoffset` bilan to'ladi, uchida glow nuqta; maqsadda rang almashadi + uchqunlar |
| Ikki qatorli sarlavha | 1-qator ingichka oddiy ("Your"), 2-qator qalin, katta, brend rangida, nuqta bilan ("usual."); diktor aytgan so'z bilan bir xil |

## Marker va urg'u
`css-marker-patterns` — qo'lda chizilgandek belgilar: sariq marker (highlight), aylana, nurlar, chizib tashlash. Matndagi kalit so'zni belgilash uchun juda mos.

## Namunalardan o'rganilgan effektlar (2026-10-09)
Rasmiy katalogda alohida nomi yo'q, lekin foydalanuvchi namunalarida ko'rilgan. Tafsilot — har bir namunada. Umumiy: [[Namunalar xulosasi - 2026-10-09]].
| Effekt | Qanday qilinadi (qisqa) | Namuna |
|---|---|---|
| Piksel-olov reveal | odam niqobi ustida piksel bloklar + to'q sariq glow, 0.75 s | [[Namuna tahlili - gayrat.motion before-after]] |
| Konturli so'z odam orqasida | `-webkit-text-stroke`, shaffof ichi, fg matte ustida | shu |
| Qo'lda chizilgan doira/chiziq | SVG path `stroke-dashoffset`, notekis yo'l, 0.4–0.6 s | shu |
| Invert flash | qora → oq bitta kadrda | shu |
| Freeze + chizilgan strelka hook | kadr to'xtaydi, halftone, pleyer UI, sariq strelka | [[Namuna tahlili - AI kadr uzaytirish tutorial]] |
| Virtual kamera ekran ustida | skrinshot `div` + `scale/x/y` yo'li, `power3.inOut` | shu |
| Scrubber'li natija kartochkasi | video + progress bar yuradi | shu |
| 3 qatorli matn ierarxiyasi + blur-in | kontekst / jumla / **xulosa.** | [[Namuna tahlili - Komfort zona infografika]] |
| Strike-through inkor | so'z ustidan qizil chiziq → "emas." | shu |
| Doira-niqob reveal | `clip-path: circle(0→150%)` | shu |
| Zoom-out sarlavha | qurilma kichrayadi, bo'sh joyga katta sarlavha | [[Namuna tahlili - AI agent montaj UI-hikoya]] |
| Soat time-lapse | raqamlar tez almashadi + progress | shu |
| Izohlar stack'i (ijtimoiy isbot) | Instagram bildirishnomalari ketma-ket tushadi | shu |
| Bitta so'z = bitta zarb | katta siqiq so'z bir joyda almashadi | [[Namuna tahlili - SFX paket promo]] |
| Taymer sanoq → drop | halqa progress 3→0, nolda musiqa drop | shu |
| Rack-defokus CTA | fon `blur(0→18px)`, ustida kalit so'z | shu |
| Stiker/scrapbook matn | yirtiq qog'oz, oq kontur, qiyshiq, `back.out` | [[Namuna tahlili - AI montajchi maksimalist]] |
| Doira bo'ylab matn + aylanish | SVG `textPath`, konteyner `rotation` | shu |
| Kursor-kesish stilizatsiya | punktir yo'l bo'ylab niqob, ichida AI-uslubdagi versiya | shu |

## Tayyor sahna shablonlari
22 ta blueprint ([[Motion lug'ati va o'tishlar]] da sanab o'tilgan): `kinetic-type-beats`, `typewriter-reveal`, `dataviz-countup`, `logo-assemble-lockup`, `grid-card-assemble`, `titlecard-reveal`, `cta-morph-press`, `ticker-takeover`, `fixed-anchor-cycle`, `overwhelm-surround` va boshqalar. Ular yuqoridagi effektlardan yig'ilgan to'liq sahnalar.

Markaz: [[Motion design]]

## Namunalardan (2026-10-12, [[Namuna tahlili - Express Mebel intervyu Reels (3 ta)]])
| Effekt | Mexanika | Manba |
|---|---|---|
| Rang-chaqnash kesim | eski kadr ustida qizil→to'q sariq→pushti tint (screen) 3 kadr, kesim, yangi kadr 2 kadr oqargan — 0.2 s | Express Mebel 2 |
| Light leak kesim | diagonal to'q sariq/binafsha nur tasmalari (`mix-blend-mode: screen`) 3 kadr oldin + 4 kadr keyin — 0.28 s | shu |
| REC kamera ramkasi | 6 kadrli tint kirish → `grayscale(1)` + burchak ramkalar + ● REC (0.5 s miltillash) + batareya; samimiy lahza uchun | shu |
| Blur-dissolve chiqish | matn bloki `blur 0→20px→0` + oqarish, 5 kadr; odam ham 3 kadr xira | Express Mebel 1 |
| Typewriter lower-third | harf/kadr, joriy harf rangli, ism 800 + familiya 300, teal teg; tepada logo nishoni blur bilan tushadi (5 kadr) | shu |
| Tipografik raqam bloki | "25" katta + "KUN" 90° vertikal + "ICHIDA" ostida, 3 qadam ×0.45 s, oq glow | shu |
| Qo'lga bog'langan hisoblagich | yorliq qo'l nuqtasiga track, raqam har 0.4 s kamayadi (25→22) — kompozitorda nuqta kuzatish | shu |
| Logo chiziqlari yonishi + HEX chip | logo elementi navbatma-navbat qizil glow (1 s oraliq), chiziqcha o'sib rang nomi plashkasi chiqadi | shu |
| 3 qatorli split-screen | kadr 3 gorizontal tasma, har birida video, tasmalar 0.3–0.5 s da almashadi | Express Mebel 3 |
| Mozaika → logo niqobi | surat plitkalari suzadi → logo harflari `clip-path` niqob 6×→1× (`expo.out` 0.5 s) → xrom to'ldirish → tekis rang (0.5 s) | shu |
| Siluet infografika | qora fon + uchqun zarrachalar + oq konturli SVG siluet + sariq glow matn so'zma-so'z | Express Mebel 2 |

## Telegram guruhidan (2026-10-17, [[Pro Montaj To'plami (Telegram guruh) tahlili]])
AE shablon namunalari kadrma-kadr ko'rildi (`_namunalar/pro_montaj_tg/_varaqlar/ae/`, `_namunalar/motion/_tahlil/23564_Kinetic_Hook_Titles`, `…/14192_Camera_Transitions`). 2026 trendlari, HyperFrames'da qayta yasaladi:
| Effekt | Mexanika | HyperFrames'da |
|---|---|---|
| **Kinetic Hook kartochka** (vertikal) | 4 qavat: kichik kursiv ustki qator ("Rule #1", "TOO SLOW") → **ulkan siqiq** so'z (GAME, PEOPLE SCROLL) → rangli so'z yoki raqam (lime 99%, sariq TIME, magenta THINK) → stiker-plashka (qizil "HOOK", sariq lenta "Clear") + qo'lyozma so'z ("you.", "Feel"). So'z gorizontal niqob bilan ochiladi (avval rangli blok, keyin harflar), raqam count-up 97→99%, stiker aylanib "pop" qiladi. Sahnalar orasida **4 qirrali yulduz chaqnashi** (0.25 s) | ✅ GSAP: clip-path wipe, count-up, back.out pop; yulduz — SVG + glow |
| **Kamera o'tishi (blur)** | kesim 0.25–0.5 s **kuchli Gauss blur** ichida yashirinadi: A kadr push-in + blur↑, B kadr blur↓ + ozgina xromatik aberratsiya. Matn so'zma-so'z blur→aniq kiradi, chiqishda blur + kattalashadi | ✅ `filter: blur` + scale; [[Professional kesim texnikalari]] zoom-through |
| **Chromatic Distortion Titles** | RGB qatlamlar siljiydi, gorizontal tilim glitch, brutalist tipografiya, qora fon | ✅ 3 nusxa + `mix-blend-mode: screen` + clip tilimlar |
| **Vertical Tape Titles** | poster ustida qiyshiq rangli lentalar (ko'k, qizil, sariq), lenta ichida matn yugurib o'tadi, siqiq qalin BOSH HARFLAR | ✅ rotate qilingan div + marquee |
| **Torn Paper Titles** | yirtilgan qog'oz tasma (kollaj) ichida matn, qog'oz teksturasi, chiqishda yirtilib ketadi | ⚠️ PNG yirtiq maska kerak |
| **Looper (g'ijim plyonka)** | tipografiya ustida g'ijimlangan plastik/qog'oz teksturasi (overlay), qizil/sariq fonlar, distress harflar | ✅ tekstura `mix-blend-mode: multiply/screen` |
| **Dynamic Typography** | takrorlanuvchi matn naqshlari, aylanuvchi matn halqasi, oq-qora + elektr ko'k/lime, matn plitkalari | ✅ [[Vizual uslublar va matn effektlari]] Maximalist |
| **Y2K abstrakt shakllar** | 4 qirrali yulduz/gul shakllar qora-oq video ustida aylanib, miltillaydi; qizil gradient, grain | ✅ SVG + rotate |
| **Number Counter (moliya)** | qorong'i UI kartochka, yashil count-up raqam + mini grafik (sparkline), qizil minus | ✅ `dataviz-countup` |
| **Leaderboard** | yumaloq kartochkalar, o'rin raqami, avatar, ochko; sport/geymer kadri ustida | ✅ grid-card-assemble |
| **Particles logo reveal** | oltin nur izlari va uchqunlar logoga yig'iladi | ⚠️ canvas zarrachalar |
| **Halftone / Dither (8-bit)**, **Liquid Glass**, **mo'ynali matn** | chatda trend deb tilga olingan | Liquid glass — `backdrop-filter` |
| **Overlay o'tish (film burn, flash, leak)** | 1.08 s, cho'qqi 44% da, to'liq yopish ~3 kadr — kesim shu 3 kadrda ([[CapCut retseptlari (speed ramp, mahsulot grafikasi, overlay)]] §4) | ✅ video overlay + `screen` |
| **Qog'oz yirtilishi maskasi** | oq chiziq kadrni kesib o'tadi, ortidan yirtiq qog'oz bo'lagi; 0.9 s luma-maska | ✅ SVG path maska |
| **Rangli shakl o'tishi** | ko'k/sariq doiralar va diagonal tasmalar kadrni qoplaydi va ochadi, ~2 s | ✅ GSAP shakllar |
| **Qora minimal metafora grafikasi** | qora fon, ingichka oq chiziq, har gapga bitta metafora, bitta aksent glow ([[Vizual uslublar va matn effektlari]] 9-uslub) | ✅ stroke draw |
| **Animatsion emoji (yashil fon)** | 3 s Telegram uslubidagi emoji (savol, jahl, esnash, "100", tanga, yulduz); `.MOV` alfa yoki yashil fon chroma key | ⚠️ faqat bolalar/quvnoq kontentda, kam ([[Video montaj uslubi]]) |
| **Fon sikllari** | qorong'i setka (matn/infografika uchun), mayda chang, 3 s aurora/ikki rangli gradient, uchqunlar, neon chiziqlar | ✅ CSS/shader fon |
