---
tur: bilim
sana: 2026-10-22
teglar: [elevenlabs, tts, ovoz, klon, ozbek, diktor]
---
# ElevenLabs bilan o'zbekcha diktor ovozi (Chrome UI orqali)

Ishlatilgan: Grossline raqobatchilar Reels tahlili — 12 ta ssenariy. Foydalanuvchida **Starter** tarif (40 000 kredit; 1 belgi = 1 kredit, har generatsiya 2 variant beradi, narxi bir marta).

## Model va ovozlar
- O'zbek tilini faqat **Eleven v4 / v4 Turbo / v3** qo'llaydi (Multilingual v2, Flash v2.5 da yo'q). Sozlamada **Language = Uzbek** qo'y.
- Kirill matn ham, lotin ham o'zbekcha o'qiladi (whisper bilan tekshirildi). UI kirill matnni ko'rib "ruscha ovoz tavsiya" qiladi — e'tibor berma.
- Kutubxonada `uzbek` qidiruvi: erkak — **Bekzod** (Toshkent standarti, ishonchli), **Jahongir** (Samarqand, hikoyachi), Sardor (tez); ayol — **Malika** (Buxoro, iliq-sokin, 05–08 da ishlatildi), Nodira, Gulnora, Shahnoza, Dilnoza/Zilola (quvnoq).
- **Ovoz nusxasi (Instant Voice Clone):** Starter'da bor. Namuna: tozalangan montaj nutqidan 2–3 daqiqa (`parts3/*/body.wav`, h*.wav → `concat` filtri, mono 44.1k, loudnorm −18, MP3 192k, <10 MB). Rozilik belgisi — faqat foydalanuvchi "rozi" desa. 19.10 Neirazol spikeri (yigit) → "Grossline spiker (erkak, uz)".

## Chrome UI tuzoqlari
- Fayl yuklash (`file_upload`) faqat sessiya papkasidagi fayllarni oladi → namunani avval sessiya ishchi papkasiga nusxala.
- Matnni `execCommand('insertText')` bilan qo'yma: TipTap holati yangilanmaydi (hisoblagich faqat 1-qatorni ko'radi), DOM'da "axlat" qoladi → sahifani yangilash kerak bo'ladi. **`computer type` bilan bir qatorli matn** yoz; 30 s CDP timeout xatosi chiqsa ham matn to'liq tushadi — `N / 10,000 characters` ni kutilgan uzunlik bilan solishtir.
- Tozalash: tahrir maydoniga bos → Ctrl+A → Delete. Bo'sh maydonda pastroq bossang "Add speaker" bosilib, ikkinchi spiker bloki qo'shiladi — X bilan o'chir.
- Ovoz tanlash: spiker chipi (matn ustidagi) → `find` bilan variant ref'i → bosish. Katta oynada qator bosilsa faqat preview o'ynaydi, "Use" kerak.
- Yuklash: `find` "Download buttons on Generation 1 and 2" → ikkala ref; fayl nomi `ElevenLabs_<vaqt>_<ovoz>_..._v4.mp3`, (1) — ikkinchi variant. `ovoz_ol.py NN` → `ovoz/xom/NN_a|b.mp3`.

## Tanlash
`ovoz_tanla.py`: har variantni whisper (large-v3-q5, uz, `-mc 0`) → ssenariy bilan **undosh skeleti** solishtiriladi (unlilar o↔a adashadi). `SequenceMatcher(..., autojunk=False)` — aks holda uzun matnda 0.01 chiqadi. 12 ta ovoz 0.83–0.97 bo'ldi.
