---
tur: bilim
sana: 2026-10-17
teglar: [capcut, speed-ramp, keyframe, glow, overlay, shrift, motion-blur, dars]
---
# CapCut retseptlari — Telegram darslaridan (sinab ko'rilgan kadrlar bilan)

Manba: [[Pro Montaj To'plami (Telegram guruh) tahlili]] dagi 4 ta dars. Videolar `D:\claude_ish\namunalar\pro_montaj_tg\darslar\`, tahlil kadrlari `_namunalar\motion\_tahlil\<nom>\`. Bizning konveyerda (ffmpeg/HyperFrames) ham shu mantiq bilan qilinadi.

## 1. Speed ramp (CapCut mobil, 1:11)
**Reverse ramping** — kadr oldinga ketib, orqaga qaytadi:
1. Klip → **Скорость → Кривая → Пользовательский** (5 nuqtali egri chiziq).
2. Birinchi nuqtani yuqoriga ko'tar (boshi ~10×), qolganini pastda qoldir. Tez boshlanib, sekinlashadi (2.6 s → 2.1 s).
3. Klipni nusxala → **Реверс** → nusxaga **teskari** egri: boshi sekin, oxiri tez.
4. Natija: oldinga zarb bilan uchadi → to'xtaydi → orqaga tortilib ketadi.

**Next ramping** — ikki ketma-ket klip: A klipning **oxiri** tezlashadi, B klipning **boshi** tez boshlanib sekinlashadi. Kesim eng tez joyga tushadi, shuning uchun ko'z kesimni sezmaydi (whip o'tish o'rniga).

**Yakuniy silliqlash:** tayyor videoni eksport qil → yangi loyihaga qo'y → Эффекты → **Размытие экрана**: Размытие **50**, Смещ. **30**, Направление «Оба варианта», Кратн. «Один раз». Tez joylarda motion blur paydo bo'ladi ([[Motion blur va Shutter Angle]]).
- Bizda: ffmpeg `setpts` egri chizig'i yoki HyperFrames vaqt egri chizig'i + `tmix`/`minterpolate` bilan blur.

## 2. Mahsulot grafikasi (CapCut PC, 12:49, ruscha)
"Oddiy, lekin chiroyli va silliq" grafika (krossovka misolida, istalgan mahsulotga):
1. **Fon** + ustiga ikkinchi fon (overlay) qo'shish rejimi bilan.
2. **Mahsulot PNG (kirish):** 1-kalit kadr — yakuniy joyda. Biroz oldinga qaytib 2-kalit: pastga tushirilgan, kichraytirilgan, qiyshaytirilgan. Ikkala kalitni Ctrl bilan belgila → **Пресеты кривых → «Вылет куб»** (cubic ease-out). Usta har doim shuni ishlatadi. Tezlikni kalitlar orasidagi masofa boshqaradi.
3. **Chiqish:** 1-kalitni Ctrl+C qilib oxirgi joyga Ctrl+V, 2-kalitni undan keyin. Kirishning ko'zgusi hosil bo'ladi.
4. **Mahsulot nuri (glow):** qatlam nusxasi → pastkisiga Эффекты → Объектив → **Размытие** (maksimal) → qo'shish rejimi **«Осветление основы»** (Color Dodge). Yumshoq nur chiqadi.
5. **Fon prozhektori:** fon → Кривые bilan qorong'ilash (bordo) → fon nusxasi biroz yorug'roq + **dumaloq maska + qirra yumshatish** (ретушь края). Natija: mahsulot ortida qizil nur dog'i.
6. **Matn:** kichik "KROSSOVKI" (Montserrat Bold) + katta brend nomi (ekspressiv shrift) + "ОЧЕНЬ МЯГКИЕ" katta harflar bilan. Qo'shimcha matn rangi **mahsulot rangidan** (ko'k) olinadi. Animatsiya «Скольжение вверх» **0.7 s** (1.0 s — sekin), chiqish animatsiyasi ham bo'ladi.
7. **Bezak chiziqlar:** qora chiziqlar mahsulot ostida, kalit kadr bilan kattalashib chiqib ketadi, yana «Вылет куб».
8. **Tirik harakat:** Эффекты → Ночной клуб → **Покачивание** — tezligini minimal, kuchini kuchsiz qil (deyarli sezilmas tebranish).
9. **Matn nuri (Сияние):** diapazonni oshir, intensivlikni kamaytir. Usta: "nursiz yaxshiroq ko'rindi" — ixtiyoriy.
10. **Ovoz — majburiy:** "ovozsiz grafika bo'm-bo'sh ko'rinadi". Boshida whoosh (boshidagi jimlikni kes, ovozni pasaytir), har matn kirishiga **mayda, past** ovoz (nusxa bilan), keyin vaqtini surib moslash.

## 3. Shriftni CapCut'ga qo'shish (mobil, 1:38)
Telegram'da `.ttf/.otf` fayl → bosib turish → Ulashish → **CapCut** (yoki "Faylga saqlash"). CapCut: Текст → Шрифты → **Мои шрифты → + Добавить** → Загрузки. Bizning kompyuterda: [[Montaj shriftlari]].

## 4. Overlay o'tish (CapCut PC, 0:46)
O'tish videosini (qora/oq fonli siyoh, olov, light leak) **ustki yo'lakka**, kesim ustiga qo'y → Видео → Режим наложения **«Экран»** (qora yo'qoladi) yoki maska-o'tish bo'lsa «Осветление». O'tishning eng zich joyi kesimga to'g'ri kelishi kerak.

**O'lchangan (194 ta overlay o'tish, `perehod_olchov.json`):**
- Davomiylik mediana **1.08 s** (0.76–1.44). Yorug'lik cho'qqisi o'tish uzunligining **~44%** nuqtasida (30–54%), cho'qqida kadr deyarli to'liq oq (0.94).
- Kadrni **to'liq yopadigan** qism atigi **~3 kadr** (0–5). Cho'qqidan oldin ~6 kadr ko'tarilish.
- ⇒ **Qoida:** overlay boshi = kesim − 0.44 × davomiylik. Kesim to'liq oq 3 kadr ichiga tushsin, aks holda "sakrash" ko'rinadi.
- 142 tasi gorizontal, 52 tasi vertikal. Reels'da gorizontal overlay'ni 90° burib yoki kattalashtirib to'ldir.
- Turlar: **film burn** (to'q sariq/oq, plyonka teshiklari, "3" countdown, ~1.4 s), **oq chaqnash**, **light leak**, **siyoh/qog'oz yirtiq luma-maska** (0.9 s, oq chiziq va yirtiq bo'lak — track matte sifatida), **rangli shakl o'tishi** (ko'k/sariq doira va diagonal chiziqlar butun kadrni qoplaydi, ~2 s), VHS, glitch.
- ffmpeg: `[a][ov]blend=all_mode=screen` yoki `overlay` + `colorkey`; luma-maska uchun `alphamerge`.

Bog'liq: [[Professional kesim texnikalari]] · [[Effektlar katalogi]] · [[Easing va harakat egri chiziqlari]] · [[SFX kutubxonasi (foydalanuvchiniki)]]
