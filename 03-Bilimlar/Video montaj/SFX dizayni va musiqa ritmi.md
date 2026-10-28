---
tur: bilim
sana: 2026-10-06
teglar: [audio, sfx, musiqa, ritm, beat]
---
# SFX dizayni va musiqa ritmiga montaj

## SFX turlari va vazifasi
| SFX | Vazifasi | Qayerda |
|---|---|---|
| **Whoosh** | Harakat va o'tish | Kesim, slide, zoom |
| **Riser** | Kutish va taranglik yaratadi | Muhim lahzadan 1–3 s oldin |
| **Impact / hit** | Zarba, urg'u | Sarlavha "uriladi", logo, kesim |
| **Pop** | Kichik element chiqadi | Ikonka, pufak, belgi |
| **Click** | Bosish | Tugma, UI, kursor |
| **Ding / chime** | Muvaffaqiyat, tasdiq | "Yechim bor", galochka |
| **Typing** | Yozish | Typewriter matn |
| **Glitch** | Buzilish, texnologiya | Glitch o'tish |
| **Swipe / swish** | Yengil o'tish | Kartochka almashishi |

## Qoidalar
- **Bitta SFX = bitta aniq animatsiya lahzasi.** Tasodifiy joyga qo'yilgan SFX foydalanuvchiga yoqmagan ([[Video montaj uslubi]]).
- **Vaqt:** whoosh vizual o'zgarishdan **biroz oldin** qo'yilsa, kutish hissi beradi. Aynan kesimda qo'yilsa, aniqlikni kuchaytiradi. Pop va hit element chiqqan kadrga to'g'ri kelsin.
- **SFX faylining boshidagi jimlikni kes**, aks holda ovoz kechikib eshitiladi ([[Video montaj texnik xatolari]] #8).
- **Og'irlik va o'lcham:** katta va og'ir narsaga past va sekin ovoz, kichik va yengil narsaga baland va tez ovoz.
- **Me'yor:** SFX ko'p bo'lsa, ta'siri yo'qoladi. Sokin reklamada 3–6 ta aniq SFX yetarli.
- **Balandlik:** ovoz va musiqa ostida (≈0.35 volume). Sokin uslubda yana ham pastroq ([[Ovoz miksi va mastering]]).
- **Qatlamlash:** past, o'rta va yuqori chastotali qatlamlar bo'lsa, cho'qqilarini bir nuqtaga to'g'rila. Har qatlam uchun chastotada joy o'y (EQ).
- **Pitch:** ko'tarilayotgan pitch taranglik beradi, tushayotgani bo'shashtiradi. Riser'da high-pass 150 Hz dan ~10 kHz gacha ochilsa, yorqinlik qo'shiladi.
- **Fade:** har SFX boshida va oxirida qisqa fade bo'lsin, "chiq" degan tovush chiqmasin.

## Musiqa ritmiga montaj
- **Bitta beat davomiyligi (s) = 60 / BPM.** Masalan, 100 BPM → 0.6 s, 120 BPM → 0.5 s. Bir takt (4 beat) 120 BPM da 2 s davom etadi.
- **BPM va kayfiyat:**
  - 80–100 — sokin, shoshilmaydigan (lifestyle, sog'liq).
  - 100–120 — yengil harakat.
  - 120–140 — energik (fitnes, sayohat).
  - 140+ — hayajonli (sport, o'yin).
- **Ikki tezlik:** har taktda (4 beat) kesish sokin ko'rinadi, har 1–2 beatda kesish intensiv. Eng kuchli montaj ikkalasini almashtiradi: avval takt bilan "qurilish", keyin beat bilan "zarba".
- Kesim beat'dan biroz chetga tushsa, tomoshabin nima noto'g'riligini bilmaydi, lekin video "beparvo" tuyuladi.
- Kuchli lahza (logo, asosiy gap) musiqaning downbeat'iga yoki akkord almashinuviga to'g'ri kelsin.
- **Sokin musiqada beat aniq bo'lmaydi.** Unda beat'ga kesma, iboralarga mos sekin o'tishlar va Ken Burns ishlat (HyperFrames `music-to-video` qoidasi).
- **Gapli videoda** asosiy ritmni gap belgilaydi. Musiqa fonda turadi, kesimlar gap tugashiga to'g'ri keladi ([[Montaj nazariyasi]]).
- Musiqa videodan uzun bo'lsa, oxirini fade bilan kesma, musiqiy ibora tugaydigan joyda kes. Kerak bo'lsa, trekni o'rtasidan qisqartir (bir taktni olib tashla).
- **BPM'ni aniqlash:** ffmpeg yoki Python (librosa) bilan beat va onset vaqtlarini olish mumkin. HyperFrames `music-to-video` skilli audiomap yaratadi.

Manbalar: [Krotos — whoosh sound effects](https://sound.krotosaudio.com/whoosh-sound-effects/), [unison — risers](https://unison.audio/how-to-create-risers/), [clipmusic — BPM for video editors](https://clipmusic.ai/blog/bpm-video-editing-guide), [toolsforfilm — BPM and picture](https://www.toolsforfilm.com/blog/bpm-and-picture-editors-guide)

Markaz: [[Video montaj]]
## Kesimni musiqa taktiga (2026-10-14, ADIA Trayfl tort Reels)
- librosa yo'q → numpy: spektral flux (hop 128 @22.05 kHz) − lokal o'rtacha (cumsum bilan!) → lokal maksimum ±2 kadr → **doimiy to'r qidiruvi** (davr 0.290–0.312 s, faza qadami 4 ms) — DP beat-tracker tezlik o'zgarmagan qo'shiqda tebranib ketadi, to'r aniqroq. 4-zarb fazalari kuchi bo'yicha takt boshi (faza 0), 8-zarb bo'yicha 2 taktli jumla boshi.
- Kesim kadri: `round((D0 + k*BAR - M0) * fps)` — M0 musiqaning video boshiga to'g'ri keladigan nuqtasi. Qisqa kadr 1 takt, asosiy kadr 2 takt, yozuv 4 takt; vokal qatori boshlanishi bilan yozuv kadri.
- Qo'shiq so'zlari vaqti: whisper `-ml 1`, lekin vokal boshi qiyin — bo'lakni (8–32 s) alohida o'qit.
