---
tur: bilim
sana: 2026-10-06
teglar: [motion, uslub, dizayner, tipografiya, matn-effekt]
---
# 8 ta vizual uslub (buyuk dizaynerlar asosida) + 24 ta matn effekti

Manba: `hyperframes-creative/references/visual-styles.md`. Har uslubning to'liq YAML spetsifikatsiyasi shu faylda.

## Uslublar — aniq parametrlar
| Uslub (dizayner) | Kayfiyat | Ranglar | Shrift | Kirish / chiqish easing | Davomiylik (kirish / ushlash) | Atmosfera | O'tish |
|---|---|---|---|---|---|---|---|
| **Swiss Pulse** (Müller-Brockmann) | Klinik, aniq | #1a1a1a / oq / ko'k #0066FF | Helvetica 700, raqam 7rem | expo.out / power4.in | 0.4 / 1.5 s | to'r chiziqlari | cinematic-zoom |
| **Velvet Standard** (Vignelli) | Premium, abadiy | #0a0a0a / oq / to'q ko'k | Inter **300**, BOSH HARFLAR, keng oraliq 0.15em | sine.inOut / power1.in | **1.2 / 3.0 s** | nozik grain, ingichka chiziqlar | cross-warp-morph |
| **Deconstructed** (Neville Brody) | Sanoat, xom | qora / to'q sariq #D4501E | Space Grotesk + Space Mono | back.out(2.5) / steps(8) | 0.3 / 1.0 s | scan-line, glitch, grain | glitch |
| **Maximalist Type** (Paula Scher) | Shovqinli, kinetik | qora / qizil #E63946 / sariq #FFD60A | Anton + Space Grotesk | expo.out | 0.3 / 0.8 s | matn qatlamlari, rang bloklari | ridged-burn |
| **Data Drift** (Refik Anadol) | Futuristik | qora / binafsha / cyan | Inter **200–300** | sine.inOut | 1.0 / 2.5 s | zarrachalar, yorug'lik izlari, glow | gravitational-lens |
| **Soft Signal** (Sagmeister) | Iliq, samimiy | krem #FFF8EC / amber / pushti / **adaçayı yashil #8FAF8C** | Playfair + Inter 300 | sine.inOut / power1.inOut | **1.0 / 3.0 s** | yumshoq gradient, iliq grain | thermal-distortion |
| **Folk Frequency** (Terrazas) | Madaniy, yorqin | oq + pushti, ko'k, sariq, yashil | Fredoka One + Nunito | back.out / elastic | 0.5 / 1.5 s | naqsh plitkalar, konfetti | swirl-vortex |
| **Shadow Cut** (Hans Hillmann) | Qorong'i, kinematik | deyarli monoxrom + bitta qon-qizil aksent | o'tkir burchakli | sekin | — / 1.2 s o'tish | chuqur soya, vignette, grain | domain-warp |

### Uslublarning xarakteri
- **Swiss:** hamma narsa 12 ustunli to'rga yopishadi. Raqamlar 80–120px, sanab chiqadi. Hard cut'lar, hech narsa suzmaydi.
- **Velvet:** katta bo'sh joy, simmetriya, uzoq ushlab turish. Hech narsa "sakramaydi", hammasi silliq siljiydi. Hashamat shoshilmaydi.
- **Deconstructed:** matn qiyshiq, chetlardan chiqib ketadi. Harflar aralashib, keyin joyiga tushadi.
- **Maximalist:** matnning o'zi vizual bo'ladi. Kadrning 50–80% i qatlamlangan yozuvlar, 2–3 s lik tez sahnalar.
- **Data Drift:** ingichka, vaznsiz shrift. Zarrachalar raqamga yig'iladi, mikrodan makroga keskin o'tiladi.
- **Soft Signal:** gumanistik serif yoki qo'lyozma. Yaqin plan, bitta element. Sekin suzish, hech qachon "snap" yo'q. Shoshilmaydi.
- **Folk:** dumaloq qalin shrift, naqshlar. Elementlar sakrab va aylanib quvonch bilan chiqadi, bu yerda overshoot ataylab qilingan.
- **Shadow Cut:** film-noir sarlavhalari. Elementlar qorong'ilikdan chiqadi, ochilishning o'zi hikoya bo'ladi.

### Foydalanuvchi uchun tanlov
- **Sog'liq, oila, tabiiy mahsulot (NEIROZOL)** → **Soft Signal** asosida: adaçayı yashil rang foydalanuvchining "och yashil + oq" talabiga to'g'ri keladi. Ritmi Reels uchun biroz tezlashtiriladi (kirish 0.6–0.8 s).
- **Premium mijoz** → Velvet Standard.
- **Raqamlar, statistika** → Swiss Pulse.
- ⚠️ Deconstructed va Folk uslublarida sakrash bor. Ular faqat mijoz shuni xohlasa ishlatiladi ([[Motion doktrinasi]]).

### 9-uslub: "Qora minimal metafora" (Telegram ГРАФИКА bo'limi, ~300 klip, 2026-10-17)
Faceless motivatsion/tushuntirish Reels'larida eng ko'p ishlatiladigan uslub. Kadrlar: `_namunalar/pro_montaj_tg/_varaqlar/grafika/`.
- **Fon:** sof qora (ba'zan to'q navy). **Chiziq:** ingichka oq, 1–2 px; to'liq shakllar faqat oq.
- **Matn:** kichik oq sans (1–2 qator), tepada yoki markazda, diktor gapiga sinxron yoziladi. Kalit so'z ba'zan rangli.
- **Har gapga bitta metafora:** nuqtalar → yulduz turkumi, Nyuton beshigi, zinapoya/uchburchak, telefon konturi, prozhektor konusi, qum soati, quyosh, "?" → lampochka, orbita halqa, checklist, o'sib boruvchi grafik, ilova ikonkali tumbler, labirint-miya, ildizli o'simlik ("ego"), chiziqli odamcha, spiral.
- **Bitta aksent glow** butun klipga: sariq, binafsha, ko'k yoki qizil. Qolgani oq-qora.
- **Harakat:** sekin, yumshoq easing; shakl chizilib boradi (stroke draw), nuqtalar birlashadi, glow sekin yonadi. Klip 4–30 s.
- **Bizda:** HyperFrames SVG `stroke-dashoffset` + GSAP `power2.inOut`, glow `filter: drop-shadow`. [[Motion doktrinasi]]ga mos (sakrash yo'q). Foydalanuvchining "kam ikonka, bachkana emas" talabiga ham mos, ayniqsa shaxsiy brend/tushuntirish uchun (AI avatar - shaxsiy brend videolari).

## 24 ta matn effekti (nomlari, storyboard uchun)
| Daraja | Effektlar |
|---|---|
| **Har harf (7)** | soft-blur-in · per-character-rise · typewriter · bottom-up-letters · top-down-letters · stagger-from-center · stagger-from-edges |
| **Har so'z (8)** | per-word-crossfade · spring-scale-in · shared-axis-y · blur-out-up · kinetic-center-build · short-slide-right · short-slide-down · depth-parallax-words |
| **Har qator (2)** | mask-reveal-up · line-by-line-slide |
| **Butun element (7)** | micro-scale-fade · shimmer-sweep · fade-through · shared-axis-z · scale-down-fade · focus-blur-resolve · shared-axis-x |
- Storyboard'da har matnga effekt nomini ber. Masalan: sarlavha uchun `kinetic-center-build`, yorliq uchun `soft-blur-in`, 3 qatorlik matn uchun `mask-reveal-up`.
- Implementatsiya: `/animate-text` skilli (upstream) yoki o'zing GSAP bilan ([[Effektlar katalogi]]).
- ⚠️ `soft-blur-in` va `focus-blur-resolve` effektlarida blur butun element yoki wrapper'ga beriladi. Subtitr ichidagi alohida so'zlarga blur animatsiya qilma ([[Subtitr san'ati]] #10).

## O'zbek yozuvi uchun shrift eslatmasi
- **Lotin:** oʻ va gʻ uchun to'g'ri belgi **ʻ (U+02BB)**. Apostrof ' yoki ` ishlatilmaydi. Tutuq belgisi uchun ʼ (U+02BC). Tanlangan shriftda bu belgilar borligini tekshir.
- **Kirill:** Ў ў, Қ қ, Ғ ғ, Ҳ ҳ harflari kerak. **Montserrat** bularni qo'llab-quvvatlaydi (NEIROZOL v4 kirill versiyasida ishlatilgan). Inter, Roboto, Noto Sans va PT Sans ham qo'llaydi. Ko'p "trend" display shriftlarda kirill yo'q, avval tekshir.

Bog'liq: [[Motion lug'ati va o'tishlar]] · [[Motion kompozitsiya va tipografiya]]

Markaz: [[Motion design]]
