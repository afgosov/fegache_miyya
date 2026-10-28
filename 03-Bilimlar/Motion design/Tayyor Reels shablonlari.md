---
tur: bilim
sana: 2026-10-06
teglar: [shablon, storyboard, reels, reklama, amaliy]
---
# Tayyor Reels shablonlari (foydalanuvchining odatiy ishlari uchun)

Bu shablonlar miyadagi barcha bilimlarni amaliy rejaga birlashtiradi. Har birini mijoz va kontentga moslashtir. Umumiy qoidalar:
- 1080×1920, 25 fps, -14 LUFS.
- Matnlar xavfsiz zonada.
- Och yashil + oq ranglar, bachkana emas.
- `power3` silliq harakat.
- Diktorga sinxron ketma-ket ochish.
Manbalar: [[Video montaj uslubi]] · [[Motion doktrinasi]] · [[Reels va TikTok texnik talablari]]

---

## A. Studiyada gapiruvchi + mahsulot reklamasi (30–35 s) — NEIROZOL turi
**Yoy:** PAS. **Uslub:** Soft Signal, Reels uchun tezlashtirilgan. **Musiqa:** sokin pianino, 80–95 BPM, bassi kesilgan, −18 dB.
| Vaqt | Beat | Ekranda | Harakat va effekt | SFX |
|---|---|---|---|---|
| 0.0–3.0 | **Hook (og'riq savoli)** | Katta kalit so'z odam orqasida ("UYQUSIZLIK?") | Matn orqada: cutout wrapper + `mask-reveal-up`, 0.2 s kechikish bilan | yumshoq whoosh |
| 3.0–6.0 | Og'riqni kuchaytirish | 2-kalit so'z almashadi ("QON BOSIMI?"), punch-in 115% | Zoom-through so'z almashinuvi | — |
| 6–12 | Tushuntirish | Yuz + 1–2 ta nafis ikonka bosh yonida | Ikonka `spring-pop` emas, `scale-fade` bilan; `power3.out` | pop (past) |
| 12–20 | **Mahsulot** | Quti yaqin plani yoki B-roll, "NEIROZOL" + "8 xil giyoh" | `counting-dynamic-scale` 1→8, barg ikonkalari | ding (raqam tugaganda) |
| 20–27 | Dalil va foyda | 2–3 qatorlik foydalar ro'yxati (shisha karta) | `line-by-line-slide`, har biri diktor aytganda chiqadi | yumshoq tick'lar |
| 27–33 | **CTA** | "Izohlarda «+» qoldiring" + "Bepul konsultatsiya" | typewriter + kursor bosishi | typing, click |
- **Montaj:** matn bo'yicha kesish, jump cut'lar umumiy ↔ punch-in bilan yashiriladi ([[Montaj nazariyasi]]).
- **Rang:** Natural Portrait; qutiga Product Polish ([[Rang tuzatish va grading]]).
- **Subtitr:** 65–95px, 2 og'irlik, faqat kalit so'zlar och yashil ([[Subtitr san'ati]]).
- **Tekshiruv:** yuz, qo'l va quti yopilmasin ([[Video montaj texnik xatolari]] #9).

---

## B. Faqat motion (gapiruvchisiz) mahsulot reklamasi (15–20 s)
**Yoy:** Hook – bitta kuchli foyda – CTA. **Uslub:** Soft Signal yoki Velvet. **Musiqa:** 90–110 BPM. Kesimlar taktga tushadi ([[SFX dizayni va musiqa ritmi]]).
| Vaqt | Beat | Blueprint yoki effekt |
|---|---|---|
| 0–2.5 | Hook: bitta raqam yoki savol | `kinetic-type-beats` yoki `dataviz-countup` |
| 2.5–6 | Mahsulot paydo bo'ladi | `logo-assemble-lockup` / mahsulot fotosi + Ken Burns (scale 1→1.04) + `ambient-glow-bloom` |
| 6–12 | 3 ta foyda (uchlik qoidasi) | `grid-card-assemble` yoki waterfall, **cut-the-curve** o'tishlar ([[Professional kesim texnikalari]]) |
| 12–15 | Yakuniy zarba | Teskari zoom-through |
| 15–18 | CTA va logo | `titlecard-reveal` (2–3 statik karta) |

---

## C. Tushuntirish (ekspert, shifokor) videosi (45–60 s)
**Tuzilma:** konsepsiya yoki "N ta maslahat" ([[Hikoya qurish va tushuntirish videolari]]). **Layout:** stack (video tepada, kartochka pastda) yoki overlay ([[Talking-head grafik qadoqlash]]).
- **Kartochkalar soni:** 60 s, aralash zichlik → 60/(7×1.0) ≈ 8–9 ta.
- 0–3 s: hook (hayratlanarli raqam yoki "tasavvur qiling"). Har 5–8 s da yangi kartochka. Kalit raqam `count-up` bilan, iqtibos alohida kartochkada.
- **Retention:** har 3–5 s da interrupt. Asosiy vosita punch-in, keyin kartochka va SFX ([[Retention va hook formulalari]]).
- Oxirida callback (hook'dagi savolga javob) + CTA.

---

## D. Mijoz fikri (testimonial) (20–30 s)
- 0–2 s: eng kuchli iqtibos katta matn bilan (natija): "3 kunda uyqum tiklandi".
- Keyin odam gapiradi + lower-third (ism, shahar), `mask-reveal`.
- O'rtada mahsulot B-roll'i, L-cut bilan (ovoz davom etadi).
- Oxirida mahsulot + CTA.
- ⚠️ Faqat haqiqiy mijoz fikri. Soxta natija ko'rsatilmaydi ([[AI video vositalari 2026]]).

## E. Jarayon → natija (taom, resort, ishlab chiqarish), motion'siz, 15–25 s — 2026-10-10
Namuna: [[Namuna tahlili - Beldersoy restoran reklamasi]] · usullar: [[Zamonaviy reklama montaji]]
- 0–1.4 s: **tasma-hook** — 5 ta eng chiroyli lahza ustma-ust tasmalarda (finaldan "treyler").
- 1.4–3.7 s: kesim + **defokusdan ochilish** + logotip (1.5 s turadi, so'nadi). Xom ashyo ko'rsatiladi.
- 3.7–9 s: jarayon, 4–5 kadr × ~1.2 s. **Chaqnash kesimi** va **o'zgarish kesimi** (xom → tayyor). Musiqa sokin, ASMR ovozlar.
- ~9 s: **musiqa drop'i = eng kuchli kadr** (olov, quyish, portlash). Keyin 4 kadr × 0.45 s (yarim zarb).
- 12–16 s: usta detali (qo'llar, pichoq, sepish slow-mo).
- 16–18 s: **kontrast kesimi** — joy/natija yorug'da ochiladi (rang "Olov kechasi" → "Kunduz havosi").
- 18–22 s: hero kadr statik → logotip fade-in → fon blur + 45% qorayish → musiqa fade-out.
- Matn yo'q yoki 1 qator. Subtitr yo'q.

---

## F. Direktor/ekspert intervyusi + B-roll (20–40 s) — 2026-10-12
To'liq brend qo'llanmasi (Reels + 16:9 explainer, motion me'yori 20–30%): [[Express uslubi - qo'llanma]] (2026-10-16).
Manba: [[Namuna tahlili - Express Mebel intervyu Reels (3 ta)]].
1. **0–3 s:** TH, typewriter lower-third (ism/lavozim) + logo nishoni tepadan. Birinchi gap = savol yoki tezis.
2. **3–8 s:** har gapga 3–5 ta B-roll ×0.5–1 s, musiqa zarbiga; kamera qo'lda, jarayon kadrlari.
3. **8–14 s:** brend/raqam motion urg'usi (1 ta): logo-tushuntirish yoki raqam bloki ("25 KUN ICHIDA") yoki HEX chip.
4. **14–25 s:** TH ↔ B-roll almashinuvi, TH ketma-ket 3 s dan oshmasin; qo'lga bog'langan yorliq, split-screen portfolio.
5. **(ixtiyoriy)** samimiy lahza: REC ramkasi (oq-qora) 3–4 s.
6. **Yakun:** TH xulosa → mozaika→logo (1 s) → logo 2 s.
O'tishlar: rang-chaqnash (5 kadr), light leak (7 kadr), dip-to-dark; har biri ≤0.3 s. Musiqa 80–110 BPM, diktor ustun, −14 LUFS, TP −1.5.

1. Hook 1-soniyada ovozsiz ham ishlaydimi?
2. Matnlar xavfsiz zonada va 2 s da o'qiladimi?
3. Sakrovchi animatsiya, neon rang yoki ortiqcha ikonka yo'qmi?
4. SFX animatsiya bilan bir kadrdami? Musiqa ovozdan 17–20 dB pastmi?
5. -14 LUFS, true peak ≤ -1 dBTP mi?
6. Yuz, qo'l va mahsulot yopilmaganmi?
7. Kadrlarni ko'rib chiqdingmi (kontakt varaq)?
8. CTA aniq, oxirgi 2–3 s da va xavfsiz zonadami?

Markaz: [[Motion design]] · [[Video montaj]]

## Topshirishdan oldingi umumiy tekshiruv

**Topshirishdan oldin qo'shimcha tekshiruv (2026-10-17):** hamkasblar tanqidida eng ko'p uchragan xatolar — SFX/musiqa baland, shrift rangi mos emas, ortiqcha effekt/shake, kalit kadrlarda easing yo'q, kesim ritmga tushmagan, blur ramka, sifat tushgan → [[Montaj xatolari - hamkasblar tanqidi]]

**Smooth tekshiruvi (2026-10-23, majburiy):** `python -X utf8 C:/Users/Admin/ObsidianMiya/.claude/tools/smooth_check.py video.mp4` → XULOSA "SILLIQ ✅" bo'lmasa topshirma (titrash, chayqalish, kadr takrori/aralashuvi, zoom zinapoya, muzlash, kesimdagi chiqillash) → [[Smooth montaj (silliqlik)]]

**Spiker + mahsulot reklamasi — topshirishdan oldin MAJBURIY (2026-10-18, NEIROZOL pravkalaridan):**
1. **Boshlanish:** birinchi kadrda spiker gapiryapti (energiya bilan nutq boshi topilgan); tomoq qirish, jim kutish, kamera aylanishi yo'q.
2. **Hook:** spikerning o'z gapi + pastda subtitr; B-roll hook'da emas.
3. **Ulanishlar:** har dubl ulanishini ±3 s qayta o'qi — takror ibora ("agar siz… agar siz…") yoki kesilgan so'z yo'q.
4. **To'ldiruvchilar:** "a/ee/mm" kesilgan.
5. **Uzunlik:** target/reklama ≤ 60 s.
6. **Subtitr:** butun video bo'ylab, gapga parallel; motion yozuvlar so'z aytilgan zahoti.
7. **Stok:** mahalliy qiyofali yoki odamsiz; "baxtli juftlik" kabi sun'iy kadrlar yo'q.
8. **Mahsulot:** chizilgan nusxa yo'q — nom + tarkib stikerlari yoki haqiqiy quti kadri.
9. **Yozuvlar:** yuzga, boshga, qutiga tushmaydi; yorug' fonda plashka.
10. **Texnik:** qora kadr yo'q, −14 LUFS, SFX ovozdan ≥ 7 dB past.
Batafsil: [[Video montaj texnik xatolari]] #119–131.

---

## G. Portret uslub (Mediazone kartochka) + shaffof shrift — 2026-10-21
Foydalanuvchi "portret uslubda" desa: istalgan montaj qilingan videoni krem fon ustidagi 69% kartochkaga joylash (logo, diafragma, soya), sarlavhalar Difference rejimida. To'liq o'lcham va skript: [[Portret uslub va shaffof shrift]].
