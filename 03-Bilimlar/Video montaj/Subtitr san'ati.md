---
tur: bilim
sana: 2026-10-05
teglar: [montaj, subtitr, tipografiya, caption]
---
# Subtitr san'ati (kinematik caption)

Asosiy g'oya: hozirgi AI subtitr dasturlari (CapCut, Submagic, Veed, Opus Clip) shunchaki tayyor presetlardan birini tanlab beradi. Professional ish esa **rejissyorlik qarori** talab qiladi. Manba: `embedded-captions` skilli.

## 18 qoida
1. **Har doim odam birinchi o'qiladi.** Subtitr ko'zni yuzdan oldin tortsa, u yomon ishlangan.
2. **Odam ustida suzdirma, sahnaning ichiga joyla.** Harflar yelka, mikrofon yoki bosh ortidan o'tsa, tabiiy ko'rinadi ([[Instagram Reels namunalari]] dagi "matn odam orqasida").
3. **Kontrast ierarxiyasi** (eng yaxshisidan oxirgi chorasigacha):
   1. `mix-blend-mode` (overlay yoki screen)
   2. 2–3px qora kontur va yumshoq soya
   3. Tor, yarim shaffof gradient chiziq
   4. Fonni joyida 10–15% xiralashtirish
   5. Oq "pill" quti. Kinematik uslubda taqiqlangan.
4. **Doim pastda turadigan subtitrdan voz kech.** Yaqin plan → yuqori yon tomon. O'rta plan → orqa devorga. Umumiy plan → odam yo'q tomondagi pastki qism.
5. **Bitta shrift oilasi, ko'pi bilan 2 ta og'irlik** (masalan 500 va 800). Montserrat, skript va serifni aralashtirish havaskorlikning birinchi belgisi.
6. **Harf oralig'i:** katta matnda manfiy (-0.015…-0.035em), kichik matnda ijobiy (+0.005…+0.015em).
7. **O'lcham:**
   - Vertikal 1080×1920: asosiy matn **65–95px**, urg'u yoki hook **130–170px**.
   - Gorizontal: matn 40–55px, urg'u 70–100px.
   - Hormozi o'lchami (kadrning 7–9%) faqat punchline uchun.
8. **Urg'u uchun kursiv ishlatma.** Videoda kursiv urg'u emas, "qiyshaygan" bo'lib ko'rinadi. Urg'u og'irlik, bitta aksent rang yoki 1.3–1.6× o'lcham bilan beriladi.
9. **Bitta to'yingan aksent rang + neytrallar.** Iliq oq `#F5EFE6`, grafit `#1A1A1A`. Foydalanuvchi uchun aksent och yashil ([[Video montaj uslubi]]).
10. **Faqat transform animatsiya qilinadi** (y, scale, opacity, clip-path). `letter-spacing`, `blur`, `font-weight` animatsiyasi qatorlarni sakratadi ([[Video montaj texnik xatolari]]).
11. **Har so'z kamida 0.4 s ko'rinsin.** O'qish tezligi daqiqasiga 160–180 so'z. So'zlar orasidagi stagger 200–220 ms, butun ibora chiqib ketishdan oldin 0.4–0.6 s ushlab turilsin.
12. **Stagger kayfiyatni belgilaydi:**
| Stagger | Kayfiyat |
|---|---|
| 40 ms | pulemyot, shoshilinch, TikTok hook |
| 80 ms | suhbat, standart |
| 150 ms | o'ylangan, hujjatli film |
| 250+ ms | she'riy, tantanali |
13. **Urg'u ibora ichida o'sib boradi:** 70% oddiy, 20% biroz ajratilgan (rang YOKI og'irlik), 8% to'liq urg'u, 2% cho'qqi (eng katta, 1.5 s, oldin va keyin pauza). Hamma so'z qalin bo'lsa, urg'u yo'qoladi.
14. **Har ~30 s da ritmni buz:** teskari tomondan kirish, bitta so'zni 2× kattalashtirish, subtitrsiz sukunat yoki rang almashinuvi.
15. **Faqat foydali so'zlarni ko'rsat.** Hammasini transkripsiya qil, lekin 70–85% ini ekranga chiqar. "Ee", "mm", "bilasizmi", "ya'ni" va o'z-o'zini tuzatishlarni olib tashla.
16. **Nafasga qarab bo'l:** ≥250 ms pauzada yangi guruh boshlansin. Bitta subtitr nafas tanaffusini kesib o'tmasin.
17. **Platforma xavfsiz zonalari:** Reels va TikTok interfeysi (tugmalar, izoh, nom) ostiga subtitr qo'yma ([[Reels va TikTok texnik talablari]]).
18. **Letterbox yoki pillarbox qora chiziqlari** subtitr uchun tayyor joy.

## Guruhlash (so'z → ibora)
- 1 guruh = 1 nafas yoki vergulgacha bo'lgan bitta qism.
- Yangi guruh boshlanadigan joylar:
  - pauza ≥ 500 ms;
  - nuqta, so'roq yoki undov belgisi;
  - vergul + ≥ 250 ms pauza;
  - "lekin", "shuning uchun", "keyin" kabi bog'lovchi bilan boshlangan yangi gap;
  - guruh **6 so'z yoki 2.5 s** ga yetganda.
- Guruhda kamida 2 so'z (undov va cho'qqi bundan mustasno), ekranda kamida 0.5 s. Bir vaqtda faqat bitta guruh ko'rinadi.
- Vaqt: guruh birinchi so'zdan 0.08 s oldin kiradi, oxirgi so'zdan ~0.6 s keyin chiqadi (keyingi guruhga to'qnashmasligi kerak).
- Belgilangan so'z soni bo'yicha bo'lma ("har doim 3 so'z" emas). Guruhlar 2 so'zdan 5 so'zgacha tabiiy o'zgarib turadi.
- **Ma'noni saqlab, ortiqchasini kesish mumkin.** Subtitr sud bayonnomasi emas.

## Texnik saboqlar (amalda sinalgan)
- **Konteynerni ham, so'zni ham fade qilma.** Ikkala shaffoflik ko'paytiriladi va matn ~40% da birdan paydo bo'ladi. Konteynerni `tl.set` bilan opacity 1 qil, faqat so'zlarni fade qil.
- **Flex ustunda subtitrlarni ustma-ust qo'yma.** Yashirin elementlar ham joy egallaydi. Har `.cap` uchun `position:absolute` ishlat.
- **Blend rejimini fon yorqinligiga qarab tanla:** o'rta yorqinlik (60–180) → `overlay`; qorong'i (<60) → `screen` (overlay oq matnni qora qilib qo'yadi); juda yorug' (>180) → `normal`.
- **Markazdagi katta so'zni ("crown") odam tanasi yeb qo'yishi mumkin.** Odam markazdan siljigan bo'lsa, so'zni kattaroq bo'sh tomonga sur. Markazda qoldirmoqchi bo'lsang, so'z kengligi > odam kengligi + 400px bo'lsin.
- **Sig'ish formulasi** (Inter 900 bosh harflar uchun): `max_px ≈ kadr_kengligi / (eng_uzun_so'z_harflari × 0.72)`. Matn kadr chetidan chiqmasin.
- **Klipni oldindan tekshir:** 20%, 50% va 80% nuqtalardan kadr ol. Klip ichida boshqa planga kesish bo'lsa, subtitr noto'g'ri joyga tushadi. Videoda allaqachon subtitr bo'lsa, ustidan yana qo'shma.
- **Matte (odam kesmasi)** qo'ldagi buyumlarni (mikrofon, daftar) ko'pincha qamramaydi, shuning uchun matn ular ustidan o'tib ketadi. Kamera tez harakatlansa, matte miltillaydi.
- **fps mos bo'lsin:** render fps manba bilan bir xil bo'lsin (bizda 25). Aks holda odam kesmasi tanadan orqada qoladi.
- 3 s dan uzun sukunatda: oldingi subtitrni qoldir, sarlavha kartochkasi qo'y yoki sukunatni kes.

## Kadr balandligiga nisbatan o'lcham
| Kayfiyat | Kadr balandligining % |
|---|---|
| Pichirlash, yorliq | 4–6% |
| Yumshoq boshlanish | 6–9% |
| Asosiy hikoya | 9–14% |
| Urg'u | 14–22% |
| Cho'qqi | 22–35% |
| Yuzdan katta sarlavha | 40%+ |

## Render oldidan o'z-o'zini tekshirish
Quyidagi savollarning birortasiga "ha" bo'lsa, qayta ishla:
- Subtitr odamdan oldin o'qiladimi?
- Oq quti bormi?
- Yaqin planda subtitr pastda qolganmi?
- 2 tadan ko'p og'irlik yoki shrift bormi?
- Urg'u uchun kursiv ishlatilganmi?
- Bittadan ko'p aksent rang bormi?
- `letter-spacing` animatsiya qilinganmi?
- Har guruhda urg'u bormi?
- 30 s davomida ritm buzilmaganmi?
- "Ee"lar qolganmi?
- Subtitr nafas tanaffusini kesib o'tganmi?
- Platforma interfeysi zonasiga tushganmi?

Bog'liq: [[Video montaj]] · [[Motion kompozitsiya va tipografiya]] · [[Talking-head grafik qadoqlash]]
