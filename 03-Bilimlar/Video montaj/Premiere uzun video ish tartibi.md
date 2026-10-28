---
tur: bilim
sana: 2026-10-09
teglar: [premiere, long-form, proxy, multicam, audio, youtube]
---
# Premiere'da uzun video (30 daqiqa – 1 soat) ish tartibi

Kompyuterda Premiere Pro 2026 bor (Kompyuter va hisob holati). Adobe 2026 dan dastur nomidagi "Pro" so'zini olib tashladi, endi u shunchaki **Premiere** deb ataladi. Umumiy bosqichlar: [[YouTube uzun video montaji]].

## 1. Loyiha va proxy
- Bin'lar: `01 A-roll`, `02 B-roll`, `03 Ekran`, `04 Audio`, `05 Musiqa-SFX`, `06 Grafika`, `07 Sequence`.
- **Proxy:** Import paytida Ingest Settings → Create Proxies. Montaj proxy bilan qilinadi, eksportda Premiere originallarni o'zi oladi. Proxy tugmasi bitta bosish bilan yoqiladi va o'chadi.
- Proxy'siz ishlansa: playback'ni 1/2 yoki 1/4 resolution'ga qo'y, High Quality Playback'ni o'chir.
- **4K material + 1080p sequence:** klipga "Set to Frame Size" (scale 50%) ber. Shunda 100% gacha punch-in sifat yo'qotmasdan qilinadi (2× virtual kamera).

## 2. Ko'p kamera
- Kameralarni tanla → **Create Multi-Camera Source Sequence** → Synchronize Point: Audio. Montaj paytida 1/2/3 tugmalari bilan kamera almashtiriladi.
- Kameralar tanaffusda to'xtatilgan yoki drift bor bo'lsa, Premiere sinxroni adashadi. Unda bizning GCC-PHAT sinxroni va tayyor XML ishlatiladi ([[Podcast multicam pipeline]]).

## 3. Matn bo'yicha montaj (Text-Based Editing)
- Text panel → Transcribe. Matndan so'zni o'chirsang, video ham kesiladi. Pauza va "parazit so'z"larni topish funksiyasi bor.
- ⚠️ Premiere transkripsiyasi o'zbek tilini qo'llashi tasdiqlanmagan. Biz whisper large-v3 bilan transkripsiya qilamiz va tayyor kesimlarni XML qilib beramiz.
- **Caption translation:** 27 tilgacha avtomatik tarjima. Bir nechta subtitr trekini bir vaqtda ko'rish mumkin.

## 4. Ovoz
- **Essential Sound → Dialogue → Enhance Speech:** AI bilan ovozni tozalash (shovqin, aks-sado). To'liq kuchda ovoz sun'iy eshitilishi mumkin. Unda Mix amount slayderini pasaytirib, tabiiy tembrni qaytar (aniq qiymatni quloq bilan tanla).
- Boshqa effektlar: Reduce Noise, Reduce Rumble, DeHum.
- **Auto Ducking:** musiqa klipini Music deb belgila → Ducking → Duck Against: Dialogue. Duck amount −12 (sezilmas) … −18 dB (aniq). 2025+ versiyalarda fade position ham bor. Bizning standart: musiqa ovozdan 17–20 dB past ([[Video montaj uslubi]]).
- Yakunda: Loudness Radar yoki Export'da Loudness Normalization (−14 LUFS, TP −1).

## 5. Markerlar va chapterlar
- **M** — marker qo'yish, ikkinchi marta **M** bosilsa, nom yozish oynasi ochiladi. Faqat **sequence** markerlari olinadi (clip markerlari emas). Birinchi marker 00:00 da bo'lsin.
- File → Export → Markers → CSV → YouTube description formatiga o'tkaziladi ([[YouTube texnik talablari va yuklash]]).

## 6. Foydali yangi funksiyalar
- **Sequence Index paneli (26.2, 2026-aprel):** uzun timeline'dagi kliplarni jadval ko'rinishida qidirish va ularga o'tish. 1 soatlik montajda juda qulay.
- **Global Mute (26.2):** butun sequence ovozini bitta bosishda o'chirish (klip sozlamalari o'zgarmaydi).
- **Object Mask (26.0):** odam yoki obyektni bitta bosishda ajratib, kuzatib boradi. Matnni odam orqasiga qo'yish va fonni xiralashtirish uchun.
- **Media Intelligence:** katta materialdan kadrni so'z bilan qidirish ("qo'l yaqin planda" kabi).
- **Generative Extend:** klipni ~2 s ga, fon ovozini 10 s gacha AI bilan uzaytiradi. Juda qisqa kadrni yoki o'tishni to'ldirish uchun.

## 7. Eksport
- H.264, Match Source, VBR 2-pass, 4K 25p uchun Target 40 / Max 50 Mbps, AAC 48 kHz 320 kbps. Batafsil: [[YouTube texnik talablari va yuklash]].
- Uzun eksportni **Media Encoder** navbatiga yubor, shunda Premiere'da ishlashda davom etish mumkin.

## Claude bilan birga ishlash
- Claude tayyorlaydi: transkript, rough cut XML (kesimlar + markerlar), toza ovoz WAV, grafika (alpha MOV), SRT, chapterlar ro'yxati.
- Foydalanuvchi: XML'ni **Ctrl+I** bilan import qiladi, ko'rib chiqadi, keyin fine cut va eksport qiladi.
- Premiere'ni Claude to'g'ridan-to'g'ri boshqara olmaydi, faqat fayllar orqali ishlaydi ([[After Effects va Claude]]).

Manbalar: [Adobe — proxy workflow](https://helpx.adobe.com/premiere-pro/using/proxy-workflow.html), [frame.io — Premiere proxy qo'llanmasi](https://blog.frame.io/2024/07/29/updated-guide-premiere-pro-proxies-and-proxy-workflows/), [Adobe — auto ducking](https://www.adobe.com/learn/premiere-pro/web/automatic-audio-ducking), [RedShark — AI audio vositalari](https://www.redsharknews.com/using-premiere-pros-latest-ai-audio-tools), [newsshooter — Premiere 26.0](https://www.newsshooter.com/2026/01/20/whats-new-in-adobe-premiere-pro-26-0/), [Adobe — release notes](https://helpx.adobe.com/premiere-pro/kb/fixed-issues.html), [newsshooter — long-form workflow guide](https://www.newsshooter.com/2022/07/27/premiere-pro-long-form-and-episodic-workflow-guide/)

Markaz: [[Video montaj]]
