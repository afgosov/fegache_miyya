---
tur: xato
sana: 2026-10-26
teglar: [xato, montaj, tekshiruv, majburiy]
---
# ⛔ Montaj qizil chiziqlari — foydalanuvchi qaytargan xatolar

> 05–26.10 dagi barcha montaj sessiyalari (856 xabar) dan yig'ildi. Har band = foydalanuvchi "xato" deb qayta montajga bergan narsa; (×N) = necha marta qaytarilgan. Retsept va sabablar: [[Video montaj texnik xatolari]], [[Video montaj uslubi]]. **Har montajda: boshlashdan oldin o'qi, topshirishdan oldin pastdagi tekshiruvdan o'tkaz.** Yangi feedback kelsa — shu yerga qo'sh yoki ×N ni oshir (fayl 9 000 belgidan oshmasin).

## 1. Kesish
1. **Kadrga tayyor bo'lmagan soniyalar** (×12 — Primer ×4, NEIROZOL, Termiz ×2, Akfa, Iskander ×3 (biznes 2-video 3D render bilan boshlandi — "render kadrdan boshlanmasin"), Vesta, Onyx, ESTETIK): boshidagi jimlik/o'ylanish, nafas, tomoq qirish, chetga qarash, yurib kirish, "s'yomka boshlanmagandek" kadr, gapdan keyin nigoh ketishi. ✅ Har bo'lakning birinchi/oxirgi 1 s ini kadrda ko'r: ko'z kamerada, tayyor. Video spikerning o'zi va birinchi so'zi bilan boshlanadi (B-roll/AI kadr bilan emas).
2. **Takror gap, ikki dubl ulanishi, duduq, "a/ee", tuzatilgan xato varianti** (×9 — "agar sizga, agar sizdayam", "SMM komanda→jamoa", "1-2-3 ketti", 16.mp4 tomoq + takror). ✅ Yakuniy audioni whisper bilan qayta o'qi, har ulanishning ±3 s ini tekshir: bir ibora 2 marta = kes. Ssenariy bo'lsa — solishtir.
3. **So'z boshi/oxiri kesildi, gap yoki ovoz tushib qoldi** (×8 — "ruhiy holat…", "Ele-ktriklarni", "bo'lar-kan", dudburon 15–29 s ovozsiz, "masofadan boshqarish", Iskander savol klipi, Premiere XML ovozi ×2). ✅ Chegara = 10 ms energiya profili (so'nish tugagach +0.1–0.15 s), so'z vaqti emas. Denoise so'z boshini yemasin. "Tushunarsiz" klipni o'zboshimchalik bilan tashlama. **Ildiz (28.10): `arnndn` ~35 ms kechiktiradi → zanjir oxiriga `atrim=start=0.035,asetpts=PTS-STARTPTS,apad=pad_dur=0.035` majburiy.**
4. **Begona ovoz** (×7): operator, rejissyor pichirlashi, intervyuer ko'rsatmasi, ustma-ust gap, fon shovqini. ✅ Faqat spiker ovozi qoladi.
5. **Target video uzun** (82 s → rad). ✅ Target ≤60 s, ma'no saqlansin.

## 2. Kadr
6. **Stabilizatsiya yo'q / kadr titraydi** (×13 — ENG KO'P: Gulkam, Primer ×7, Vesta, Iskander ×3, Onyx ×2). ✅ Har qo'lda/yurib olingan kadr stabilizatsiya qilinadi; titrash fon bo'yicha o'lchanadi (odam emas); oxiridagi operator zoomi/harakati kesiladi; o'lchov hisobotisiz topshirma.
7. **Yomon kadr tanlovi** (×14): bir kadr 2 marta, quyosh nuri/blik tushgan "tushunarsiz" kadr, bir xil burchak (TV cheti) qayta-qayta, 5 s+ bitta qo'lda olingan kadr, juda qisqa yoki qotib qolgan kadr, 1–3 s da 3 kesim, crossfade "arvoh", odam "o'zidan paydo bo'ladi", qo'l/barmoq/qog'oz/tirgak kadrda, yaxshiroq dubl tashlab ketilgan, rasmiy bo'lmagan stok, chet elliklar, uzviylik buzilgan, "bad boy" butunlay rad. ✅ Kontakt varaq (har kadr: bosh/o'rta/oxir) ko'z bilan; bir harakat = eng yaxshi bitta dubl; kadr ≥1.2 s; B-roll oynasi ≤ manba uzunligi; korporativga faqat rasmiy kadr.
8. **Zoom/kadr** (×6): katta zoom odamni kesdi, bosh chegarasi g'alati, keskin zoom/o'tish, qiyshiq kadr. ✅ Odam to'liq sig'sin; zoom 0.9–1.4 s silliq; ufqni tekisla.

## 3. Rang va yuz
9. **Rang** (×9): xira, qorong'i ("tyomniy"), juda yorug'/ko'zni qamashtiradigan (Premier TV — namunaga tenglayman deb ortiqcha ko'tarish), juda sariq, kadrdan kadrga sakraydi, seriya har xil, mijozning eski videosidan farq; ko'z yoqmaydigan palitra (xira ko'k, xantal, yashil+jigarrang). ✅ Grade'ni YUZGA bog'la (yuz L* manba/natija/namuna o'lchanadi, yuzni ko'tarma); Seriyaga BITTA grade; teri rangi kadrlar orasida bir xil; qorong'ilatma; eski video bo'lsa unga tenglashtir; palitra kadr ranglaridan + 1 toza aksent.
10. **Persona juda yorug' / multfilm / kadrlarda har xil** (×8; aksincha ham bo'ladi: Iskander v6 da juda kamaytirdim → "ozgina persona qo'ying" — Vesta, Iskander ×3, Premier TV, brieflarda har safar "me'yorida"). ✅ O'rtacha kuch, teri teksturasi qoladi, yuz yorqinligi kadrlar bo'yicha bir xil; yuzni oqartirma.

## 4. Ovoz
11. **SFX** (×10): baland, ko'p, keraksiz joyda, eski/arzon, harakatdan erta, soat chiqillashi; aksincha — juda past yoki mijoz yoqtirgani o'chirilgan ("qo'ymabsiz", twinkle). ✅ Faqat [[SFX kutubxonasi (foydalanuvchiniki)]]; har SFX ko'rinadigan harakatda; ovozdan past, lekin eshitiladi; maqtalgan SFX keyingi versiyada qoladi.
12. **Musiqa** (×9): baland/bassli, multfilm/yengil (kompaniyaga), "juda sho'x", targetga mos emas, har safar bir xil trek. ✅ Ovozdan ~18–20 dB past; brendga mos (kompaniya = templi, jiddiy, zamonaviy); har videoga boshqa trek; 10+ nomzoddan tanla, sababini yoz.

## 5. Matn
13. **So'z/raqam/imlo xatosi** (×15+): "Rils", "Boyliklarni yashirmaylik" (spiker boshqacha degan), "ko'nglini" (aslida "qulayligini"), "Binaning", "yerosti", 150 (aslida 127), "Quadro" (Kvadro), "qo'yish" (yoqish), ism tashlab ketildi, "?" o'chdi, telefon xato, arabcha. ✅ Shubhali so'zni TAXMIN QILMA: kichik oynada qayta o'qi, ssenariy/mijoz matni bilan solishtir; baribir noaniq — so'ra. Raqam/ism/brend/telefon — 2 marta tekshir. Spiker so'zini (shevasini) o'zgartirma.
14. **Matn joyi** (×7): peshona/yuzga tushdi, mahsulotni yopdi, Reels pastki zonasida kesildi, tepadagi ~15% va chetlar kesiladi (Mediazone kurslari: mijoz sariq ramka chizdi), yorug' fonda o'qilmaydi, yozuvlar almashib qolgan (NARXI/EKRAN). ✅ Kadrda tekshir; matn y 300–1450, chetdan ≥90 px; yorug' fonda plashka. Shablonni ham o'lcha (`ov.mov` alfa): Akfa otziv kartochkalari 1540 da edi.
14b. **Subtitr ekrandagi yozuvni takrorladi** (×1 — "Yoki Directga yozing" chipi ostida "murojaat qiling", "Tashkent City" chipi ostida o'sha gap): mijoz "tepadagi yozuv qolib, pastdagi bir xil gapni o'chirish kerak". ✅ Chip/sarlavha/shaffof shrift/ro'yxat/tugma/sahna matni turganda subtitrdan o'sha gap (butun ibora, bo'lak so'z qoldirmay) olinadi; `caps_review.txt` ni ko'z bilan o'qi.

## 6. Brief va motion
15. **Motion miqdori briefga zid** (×10): animatsiya/stok yarim ekranda (vstack) — mijoz "to'liq ekranga qo'ying" (Premier TV); kam ("motion umuman yo'q" ×3), ko'p ("kasha", "ko'payib ketgan"), spiker PiP kartada, sun'iy 3D qadoq. ✅ "Motion asosida" = gapga mos motion kadrlar; "motion ishlatma" = grafika yo'q, lekin sekin zoom bor; "speakerdan boshqa yoqqa kadr qaramasin" = motion faqat video ustida; bir vaqtda ≤2 element.
16. **Aytilgan ish bajarilmadi / boshqa narsa buzildi** (×7): "men aytgan hech nima o'zgarmagan", noldan qayta qilinib yoqqan qismlar yo'qoldi. ✅ Feedback → raqamlangan ro'yxat; har band oldin/keyin kadr bilan; faqat aytilganini o'zgartir; oxirgi tasdiqlangan versiyadan davom et.
17. **Bitta videoga aytilgan xato boshqalarida qoldi** (Primer, Iskander, NEIROZOL). ✅ Tuzatishni seriyaning HAMMA videosida tekshir.
18. **Logo/brend/yakun briefga zid** (×6): logo joyi, "oxirida hech narsa bo'lmasin", introdagi 3 logo, portretdagi MEDIA ZONE yozuvi, "Vesta Electric" o'rniga "Akfa Lighting", namuna videoni ulab qo'yish ("o'zing yarat"). ✅ Har buyurtmada briefdan o'qi; noaniq — so'ra.
19. **Mahsulotda yo'q xususiyat** (×2 — gaz plita; Iskander: AI "bino o'sadi" boshqa binoni ko'rsatdi, mijoz "o'rniga spiker yoki bizning render" dedi). ✅ Faqat mahsulotda bor faktlar.
20. **Progress** (×5): har xabar `Umumiy: X% — ~N daqiqa qoldi` bilan boshlanadi.
21. **Ssenariy aralashib ketdi — kadrlar o'rni almashdi** (×1 — Iskander biznes: 2 ssenariy ("Joy topolmayapsizmi" / "Bunaqasi hali bo'lmagan") bo'laklari 3- va 4-videoda aralashdi; mijoz "tekst bo'yicha yig'ing"). ✅ Manbada ssenariy qog'ozi/matni bo'lsa (masalan C9561 kadri) — AVVAL o'qi; har video = bitta ssenariy, uning "Ofis:/Qurilish:" bo'limlari tartibida; boshqa ssenariy dubli qo'shilmaydi.

## ✅ Topshirishdan oldin (har video, majburiy)
1. Brief/feedback ro'yxatining har bandi bajarildi — kadr bilan isbot.
2. Kontakt varaq: bosh/oxir tayyor, takror kadr, qo'l/begona narsa, qotgan kadr yo'q.
3. Titrash o'lchovi har kadrda.
4. Yakuniy audio whisper bilan o'qildi: takror, kesilgan so'z, begona ovoz yo'q; subtitr = aytilgan so'z.
5. Raqam, ism, brend, telefon, imlo — 2-tekshiruv.
6. Rang va persona seriya bo'yicha bir xil, yuz yorug' emas.
7. Ovoz −14 LUFS; SFX va musiqa ovozdan past.
8. Xavfsiz zona (y 300–1450, chetdan ≥90 px); matn yuz va mahsulotga tushmaydi; subtitr ekrandagi yozuvni takrorlamaydi.
9. Bitta videodagi tuzatish seriyaning hammasiga qo'llandi.
