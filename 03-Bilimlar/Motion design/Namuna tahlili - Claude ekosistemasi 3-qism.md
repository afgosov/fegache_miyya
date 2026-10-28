---
tur: bilim
sana: 2026-10-23
teglar: [motion, namuna, tahlil, reels, talking-head, ui-motion, split-screen, ai]
---
# Namuna tahlili — "Claude ekosistemasi" 3-qism (o'zbek AI blogeri)

## 1. Pasport
- Fayl: `Downloads/Telegram Desktop/SaveVid_Net_AQPqfRoUAB_...mp4` → nusxa `D:/claude_ish/namunalar/motion/_tahlil/n1023_claude_ekosistema/`
- 9:16, 720×1280 (yuklab olingan, asli 1080×1920 bo'lsa kerak), 30 fps, 62 s.
- Janr: ta'limiy explainer Reels, seriyaning 3-qismi. Spiker + UI-motion. Maqsad: obunachi + izoh (keyingi qism mavzusini so'rash).
- Mazmuni: Claude'ning 4 funksiyasi → Claude avtomatlashtirish - 4 funksiya. Videodagi 3 ta mubolag'a: Projects "faqat shu fayllar", Computer Use "24/7", Routines cheklovlari aytilmagan.

## 2. Asosiy sir
1. **Split-screen**: tepada ~47% krem motion panel, o'rtada subtitr tasmasi, pastda spiker. Ko'z ikkala qatlamni bir vaqtda o'qiydi — ma'lumot zich, lekin tartibli.
2. **Bitta UI tili**: krem fon + bitta to'q sariq + oq kartochkalar + skeleton chiziqlar. Har funksiya o'z "mini-ilovasi" bilan tushuntiriladi (papka, soat+input, oyna+kursor, noutbuk+bulut).
3. **Ochiq halqa (open loop)**: 3-soniyada "Shu 4 ta narsa" — 4 ta bo'sh kartochka; 40-s da "3 tasi tayyor, Va oxirgisi" — 3 tasiga belgi. Tomoshabin 4-chisini kutib qoladi.
4. **Bob kartalari** "FUNKSIYA 1/4 #1" + yuqorida progress chiziqchalari — qayerdaligini doim biladi.
5. **Hook 0.8 s**: spiker + boshi orqasida neon "CLAUDE" → to'q sariq chaqnash → AI rasm (o'zi noutbuk oldida uxlab yotibdi) + "Claude ishlayapti", "56 ta xabar yuborildi" UI pufaklari.

## 3. Tuzilma
| Vaqt | VO | Nima bo'ladi |
|---|---|---|
| 0–0.8 | Claude endi siz… | To'liq spiker, orqada neon CLAUDE |
| 0.8–3 | uxlaganingizda ham ishlaydigan xodimga aylanadi | Chaqnash → AI uxlash rasmi, pill + chizilgan strelka, toast |
| 3–5 | agar shu narsalarni to'g'ri qilsangiz | Split: "Shu 4 ta narsa" 4 kartochka ketma-ket belgilanadi |
| 5–8 | ekosistemaning 3- va oxirgi qismi | "CLAUDE EKOSISTEMASI" muqova karta + 1→2→3-qism stepper, "3-QISM" stiker |
| 8–18 | #1 Projects | Bob kartasi → papkalar (Brend, Mijozlar, Hisobotlar), fayl tushadi, hisoblagich 1→3, "faqat shu fayllar" chip, Claude javobi + manba chiplari |
| 18–29 | #2 Scheduled Tasks | Soat (strelkalar aylanadi), input'ga "Har kuni 09:00 da hisobot tayyorla" yoziladi, VAQT/ISH ostiga chiziq, Du–Ya kartalar ketma-ket ✓, "har kuni, qayta-qayta" |
| 29–38 | #3 Computer Use | Oyna "Kompyuteringiz", "Boshqaruv" tugmasi yoqiladi, "Claude" yorliqli kursor ro'yxatni belgilaydi, dock ikonkalari to'q sariq bo'ladi |
| 38–40 | 24/7 ishlashi ham mumkin | To'liq spiker, boshi orqasida "24/7" neon (miltillab yonadi) |
| 40–47 | #4 Routines | "3 tasi tayyor" → bob kartasi → noutbuk yoqiq → o'chiq (power ikonka) → "Claude bulutda ishlayapti" ro'yxati |
| 47–57 | Eslab qoling… | "ESLAB QOLING" neon → 4 qatorli ro'yxat, VO bilan faol qator ajraladi, oxirida hammasi yonadi |
| 57–62 | Kommentariyada… | "Keyingi video qaysi AI haqida?" input yoziladi, ChatGPT?/Gemini?/Grok?/Perplexity? chiplari, "fikringizni qoldiring" tugma |

## 4. O'tishlar va effektlar
- **Rang chaqnash**: 0.8 s da 1–2 kadr to'liq to'q sariq → yangi sahna (kesim urg'usi).
- **Matn bosh orqasida + neon**: kondensat (Anton/Bebas turi) katta so'z, to'q sariq glow; "24/7" da oq + glow, 1 kadr xira → keyingi kadr to'liq (flicker-on).
- **Pop-in pufaklar**: pill/toast scale 0.8→1 + opacity, ~6–8 kadr, back-out.
- **Chizilgan strelka**: stroke-draw (SVG `stroke-dashoffset`), ~10 kadr.
- **Typewriter input**: harfma-harf, oxirida yuborish tugmasi.
- **Stagger belgilash**: kartochkalar ✓ ketma-ket (~0.25 s oraliq), to'q sariq doira scale-in.
- **Multiplayer kursor**: Figma uslubidagi "Claude" yorliqli kursor nuqtadan nuqtaga silliq (power3) siljiydi, bosganda element rangi o'zgaradi.
- **Faol qator**: ro'yxatda faqat aytilayotgan qator to'liq oq + chap to'q sariq chiziq, qolganlari 50% xira.
- Sahna ↔ spiker: asosan **qattiq kesim** (yumshoq o'tish deyarli yo'q). Split va to'liq spiker — bitta kameradan ikki xil crop.

## 5. Tipografiya
- UI va subtitr: geometrik sans Bold (Inter / SF Pro turi) — bizda Inter Tight, Onest, Geologica.
- Raqam va neon so'z: og'ir kondensat (Anton/Bebas turi).
- Subtitr: so'zma-so'z karaoke — aytilgan so'z qora, kalit so'z to'q sariq, hali aytilmagani kulrang; tasma ostida to'q sariq progress chiziq.
- Kichik ustki yozuv (FUNKSIYA 1/4, AGAR TO'G'RI SOZLASANGIZ): bosh harf, keng interval, kulrang.

## 6. Rang olami
Krem fon ~`#F8F4EF`, to'q sariq ~`#FF5A1F`, matn ~`#161616`, kulrang ~`#9A9A9A`, oq kartochka + yumshoq soya. Spiker kadri: tungi balkon, issiq bokeh.

## 7. Kamera
Bitta kamera, o'rta plan, lav mikrofon (ko'rinib turadi). Split uchun yaqinroq crop, to'liq kadrlar uchun kengroq. Kamera harakati yo'q; AI rasmda sekin push-in.

## 8. Ovoz
- −14.1 LUFS, LRA 4.7, true peak −0.8 — Reels me'yorida.
- **Musiqa yo'q** (pauzalarda spektr bo'sh) — faqat ovoz + SFX.
- **Sub-boom** (past chastotali zarba) har bob kartasida: 0, 8.1, 17.9, 29.0, 38.1, 41, 47.3 s.
- Mayda UI SFX (pop/klik) har pufak, ✓ va kursor bosishida (spektrda ingichka yuqori chiziqlar).
- Pauzalar ≤0.35 s — jim joylar kesib tashlangan, nutq zich.
- Kesimlar: 6 ta haqiqiy kesim (0.87, 8.1, 38.2, 39.77, 47.37, 48.1); qolgan o'zgarishlar sahna ichidagi motion. Fayl: `_tahlil/n1023_claude_ekosistema/stats.json`.

## 9. Ssenariy formulasi
Va'da hook ("uxlaganingizda ham ishlaydi") → shart ("agar 4 narsani to'g'ri qilsangiz") → seriya konteksti → 4 ta bob (har biri: nomi → o'xshatish → amalda) → "Eslab qoling" xulosa → izoh uchun savol + variantlar.

## 10. HyperFrames'da qila olamizmi — ~95%
- ✅ Krem UI sahnalar, kartochkalar, kursor, typewriter, stagger, bob kartalari — HyperFrames + GSAP ([[Motion Reels konveyeri - sahna-spiker almashinuvi]]).
- ✅ So'zma-so'z karaoke subtitr — whisper + [[Premium motion qatlam (gfx.py)]].
- ✅ Matn bosh orqasida + neon — [[Matn bosh orqasida - professional usul]] (RVM).
- ✅ Split-screen — [[Talking-head grafik qadoqlash]].
- ⚠️ "Uxlab yotgan spiker" AI rasmi — Google Flow / Nano Banana ([[Google Flow insert konveyeri]]), spikerning yuz rasmi kerak.
- ⚠️ Spiker videosi — suratga olish kerak (yorug'lik, lav mikrofon).

## 11. O'zimizga qanday qo'llaymiz
- Ta'limiy/explainer mijozlar uchun tayyor shablon: "N ta narsa" ro'yxat + split + bob kartalari. Mijoz ranglariga moslab.
- O'z akkaunt uchun: AI/montaj mavzusidagi seriya (shu formatda).
- Olmaymiz: faktik mubolag'a ("24/7", "faqat shu fayllar") — mijoz kontentida tekshirilgan gap.

Markaz: [[Motion design]] · Kutubxona: [[Motion namunalar kutubxonasi]]
