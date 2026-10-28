---
tur: bilim
sana: 2026-10-05
teglar: [montaj, audio, miks, lufs, ffmpeg]
---
# Ovoz miksi va mastering

Ovoz videodan muhimroq: tomoshabin yomon tasvirni kechiradi, yomon ovozni esa kechirmaydi.

## Diagnostika: nima eshitilyapti → qayerda → nima qilish kerak
| Eshitilishi | Chastota | Yechim |
|---|---|---|
| G'uvullash, shovqin, qadam tovushi | 20–80 Hz | High-pass 80 Hz |
| Bo'g'iq, "ko'krakdan", mikrofonga juda yaqin | 80–250 Hz | 200 Hz −4 dB |
| Karton orqasidagidek bo'g'iq | 250–600 Hz | 250 Hz −3 dB ("mud") |
| Kichik xonadagidek, "qutidek" | ~400 Hz | 400 Hz −3 dB |
| So'zlar tushunarsiz, musiqa ostida qolgan | 2–5 kHz | 3 kHz +2.5 dB yoki musiqani "o'yish" |
| Qattiq, charchatadigan | 3–5 kHz | 3.2 kHz −3 dB |
| "S" tovushi vishillaydi | 5–10 kHz | De-esser |
| Xira, jonsiz | 10–20 kHz | High-shelf bilan ko'tarish ("air") |
| Ba'zi so'zlar juda baland | — | Kompressor |
| Gaplar orasida xona shovqini | — | Gate yoki noise reduction |
| Cho'qqilar "chiyillaydi" | — | Limiter (zanjirda doim oxirgi) |
| Ovoz va musiqa to'qnashadi | 1–3 kHz | Musiqada ovoz ostida joy o'yish (carve), sidechain ducking |

## Ishlov berish tartibi
1. **Avval kes, keyin qo'sh:** avval rumble va mud'ni olib tashla. Bo'g'iq ovozda ko'pincha past-o'rta chastota ortiqcha bo'ladi. Unga yuqori chastota qo'shilsa, ham bo'g'iq, ham qattiq bo'lib qoladi.
2. **Filtrdan keyin balandlik:** kompressor filtrlangan signalga qo'yiladi.
3. **Balandlikdan keyin munosabat:** ovoz tayyor bo'lgach, musiqani ovozga moslab o'y.
4. **Xarakter (saturatsiya, reverb), eng oxirida limiter.**

## Balandliklar (bizning standart)
- **Yakuniy miks:** -14 LUFS integral (gapli kontent), true peak ≤ -1 dBTP ([[Reels va TikTok texnik talablari]]).
- **Fon musiqasi:** ovozdan **17–20 dB past**. HyperFrames standarti bo'yicha ovoz ostidagi musiqa volume 0.12 ≈ −18 dB, ovozsiz videoda 0.9. Bassi high-pass bilan kesilgan bo'lsin ([[Video montaj uslubi]]).
- **SFX:** ovoz va musiqa ostida, volume ≈ 0.35. Boshidagi jimlik kesilgan bo'lsin ([[Video montaj texnik xatolari]] #8).
- Musiqa trekining boshi har doim eng yaxshi joy emas. Kuchliroq va toza kirish qismini topib, o'sha yerdan kes, qisqa fade-in ber.

## ffmpeg retseptlari
- **Ovozni tozalash zanjiri:**
  `highpass=f=80, afftdn=nf=-25, equalizer=f=250:t=q:w=1.2:g=-3, equalizer=f=3000:t=q:w=1:g=2.5, acompressor=threshold=-18dB:ratio=3:attack=10:release=150, alimiter=limit=0.89`
  - `afftdn` shovqinni kamaytiradi. Juda kuchli qilinsa, "robot" ovoz chiqadi.
- **Loudnorm, ikki bosqichli (eng aniq usul):**
  1. O'lchash: `-af loudnorm=I=-14:TP=-1:LRA=7:print_format=json -f null -`
  2. Qo'llash: `loudnorm=I=-14:TP=-1:LRA=7:measured_I=..:measured_TP=..:measured_LRA=..:measured_thresh=..:offset=..:linear=true`
  - ⚠️ Qisqa SFX fayllarga loudnorm qo'llama, ovozni bo'g'ib qo'yadi ([[Video montaj texnik xatolari]] #4).
- **Musiqani ovoz bilan ducking qilish:** `[music][voice]sidechaincompress=threshold=0.05:ratio=8:attack=20:release=300`
- **SFX boshidagi jimlikni kesish:** `silenceremove=start_periods=1:start_threshold=-45dB`
- **Kanallarni tekshirish:** mikrofon bitta kanalda bo'lishi mumkin. `pan=mono|c0=c0` (chap) yoki `c0=c1` (o'ng). Whisper'dan oldin buni tekshir ([[Video montaj texnik xatolari]] #1).
- **O'lchash:** `ebur128=peak=true` (integral LUFS, LRA, true peak).
- **Audio kesimlar:** har kesimda 1–2 kadrlik `acrossfade`. Bu "chiq" degan tovushning oldini oladi.

## Ovoz yozish bo'yicha maslahat (studiya uchun)
- Mikrofon og'izdan 15–25 cm uzoqlikda bo'lsin. Petlichka ko'krak o'rtasiga taqiladi.
- Yozish darajasi −12…−6 dBFS atrofida bo'lsin, 0 ga tegmasin.
- Har sessiya boshida 5–10 s jim "xona tovushi" yozib ol. Shovqinni kamaytirish uchun namuna kerak bo'ladi.

Manbalar: HyperFrames `hyperframes-audio/references/presets.md`, `media-use/audio/references/bgm.md`, `sfx.md`; [EBU R128](https://en.wikipedia.org/wiki/EBU_R_128)

Markaz: [[Video montaj]]

## Ko'cha/tashqi shovqinni tozalash — RNNoise (2026-10-12, NEIROZOL otziv - Zuhra opa)
- `afftdn=nr=10:nf=-42` tashqi shovqinda **deyarli ishlamadi** (SNR +0 dB) — shovqin asosan 0–300 Hz (shamol, ko'cha guvillashi).
- **ffmpeg `arnndn` (RNNoise)** modellari: GitHub `GregorR/rnnoise-models` (bd, cb, sh, mp, lq). O'lchov: shovqin −18…−21 dB, gap −3 dB. **`bd`** gapni eng kam buzdi (1.5–8 kHz −3 dB) → keyin EQ: +3.5 dB @3 kHz, +2.5 dB @6 kHz. Whisper tozalangan ovozni avvalgidek (hatto aniqroq) o'qidi.
- Model: `C:/Users/Admin/.cache/rnnoise/bd.rnnn`. Windows'da filtr yo'lini escape qilish qiyin (`C\:` + Git Bash yo'l aylantirishi) → ffmpeg'ni shu papkada `cwd` bilan ishga tushir, `arnndn=m=bd.rnnn`.
- Tartib: `volume → highpass 95 → arnndn → highpass 110 → EQ → compressor`. Natija: pauza va gap orasidagi farq ~10 dB → 25–30 dB.
- **Kechikish (2026-10-28):** `arnndn` chiqishi ~35 ms kech (6 klipda o'lchandi) → zanjir oxiriga `atrim=start=0.035,asetpts=PTS-STARTPTS,apad=pad_dur=0.035`. Aks holda kesim chegarasi so'z oxirini yeydi va oldingi tovushni olib kiradi. Yangi filtr qo'shsang, xom/tozalangan ovoz xcorr bilan kechikishni o'lcha.
- Qoida: tashqarida yozilgan otziv/intervyuda shovqin tozalashni **birinchi versiyadanoq** qil va o'lcha (pauza p10 vs gap p70).
