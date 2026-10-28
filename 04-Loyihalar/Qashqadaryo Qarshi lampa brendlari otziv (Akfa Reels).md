---
tur: loyiha
sana: 2026-10-28
teglar: [loyiha, otziv, vox-pop, qashqadaryo, qarshi, akfa, lucem, vesta, kollaj, reels]
---
# Qashqadaryo (Qarshi, Farhod bozori) — Akfa otziv Reels

**Talab (2026-10-27):** 24 klip DSCF7576–7601 (Telegram Desktop; 7594, 7599 yo'q) + tizer uchun YouTube `y-46aImm6uA`. Foydalanuvchi so'zlari: "har doimgidek tizer uchun boshida 3 ga bo'lib kadrlar", "oldingi kesish va boshqa xatolarni qilma, miyadan qidir".

## Material
- **Kamera:** Fujifilm DSCF MOV, 3840×2160 50p, rotation −90 (ffmpeg o'zi buradi — `transpose` kerak emas). Ovoz PCM 24-bit, L=R.
- **Fon:** bozor shovqini −33…−35 dB, gap −14 dB.
- **YouTube:** "Welcome to Uzbekistan" (Uzbekistan Travel), 2560×1440 25p. Outrogacha suv belgisi yo'q.

## Natija
- **Fayl:** `D:/claude_ish/loyihalar/2026-10-27_akfa_otziv/TAYYOR/Akfa_Qashqadaryo_Qarshi_otziv.mp4` (nusxasi `Telegram Desktop/TAYYOR/` da). 60.0 s, −14 LUFS.
- **Tuzilma (ketma-ket):**
  1. Kollaj 4 s. Uchta tasma, minterpolate mci bilan sekinlashtirilgan:
     - s1 — tog'lar, 0.36×;
     - s2 — oltin koshinli ravoqlar, 0.17×;
     - s3 — yashil dalalar, 0.21×.

     Ustida kick "QASHQADARYO · QARSHI" va logosiz sarlavha.
  2. H 7601 — boshlovchi walk-and-talk (4K dan 1:1 crop) + joy chipi "Farhod bozori · Qarshi".
  3. P1 7576 — savol paneli + "Akfa Lighting, Lucem, Vesta — hamyonbop va sifatli".
  4. R2 7584 — "kafolatli, yorug'ligi baland".
  5. R3 7588 — "eng ko'p sotiladi", tavsiya.
  6. R4 7586 — "talab ko'proq".
  7. CTA 7596.
  8. Akfa lighting kartochkasi, 3.6 s.
- **Olinmagan kliplar:**
  - 7597 — raqobatchi nomi bo'lishi mumkin;
  - 7579, 7585 — noaniq;
  - ekipaj gaplari ("2-3 ketti").
- **Musiqa:** Mixkit 79 "The Journey" — iliq, ~89 BPM, sho'x emas.
  - 17.16 s dan boshlanadi: kuchli zarb 4.00 s dagi birinchi kesimga tushadi.
  - Bed −37 dB, ovoz −19 dB.
  - Avval 33 "Motivating Mornings" qo'yilgan edi. U Vesta v7 B variantida va Jasur Rich'da ishlatilgani uchun almashtirildi.
- **SFX:** 18 ta, faqat foydalanuvchi kutubxonasidan.
- **Stabilizatsiya** (stab2, SZ 1.06):

  | Bo'lak | Oldin | Keyin |
  |---|---|---|
  | H | 1.53 px | 0.82 px |
  | R3 | 1.26 px | 0.60 px |
  | CTA | 1.59 px | 0.43 px |
  | P1 / R2 / R4 | 0.31 / 0.40 / 0.21 px | tegilmadi |
- **Rang:** grade yuzga bog'langan, gamma 0.62–0.94.

## Topilmalar
- **arnndn ~35 ms kechiktiradi.** Bu so'z boshi/oxiri kesilishining ildiz sababi: [[Video montaj texnik xatolari]] #172, [[Montaj qizil chiziqlar]] #3. vdn/vlt zanjiriga `atrim=start=0.035,asetpts=PTS-STARTPTS,apad=pad_dur=0.035` qo'shildi.
- **Otziv shabloni yozuvlari xavfsiz zonadan chiqqan edi** (#222). Topshirishdan oldin tuzatildi:
  - kartochkalar `row_y 1360`, x 106–973;
  - fakt chiplari y 1140;
  - joy chipi va CTA y 1340;
  - savol paneli x 90–990.
- **Whisper qisqa oynada musiqa ustida xayol qildi** (#223). Yakuniy qayta o'qish faqat ovoz yo'lida qilinadi.

## Keyingi Akfa otzivi uchun
Asboblarni shu loyihadan ko'chir (`tools/`, `work/tools/`):
- gen_overlay — xavfsiz zona;
- build_audio — vlt chetlari, boost, delay;
- arnndn kompensatsiyasi;
- stab2 — env parametrlari (SZ, SLX, SLY);
- face_scan — num_faces=2;
- final_reread.py.

Bog'liq: Surxondaryo Termiz lampa brendlari otziv (Akfa Reels), Surxondaryo Denov lampa brendlari otziv (Akfa Reels), Navoiy Darxon lampa brendlari otziv (Akfa Reels), [[Vesta Quadro (Akfa Lighting) Reels]]
