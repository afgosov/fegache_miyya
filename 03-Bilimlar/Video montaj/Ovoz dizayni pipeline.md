---
tur: bilim
sana: 2026-10-06
teglar: [audio, sfx, musiqa, miks, python, amaliy]
---
# Ovoz dizayni pipeline (Python + ffmpeg, sinalgan)

Skript: `D:/2 Mediazone montaj qilish kere/04.10.2026 Neiorozol/_ish/c0476v2/audio/build_audio.py` ([[NEIROZOL Reels]], domino videosi). Natija bitta `mix.wav` (48 kHz, 24-bit). Kompozitsiyaga bitta `<audio id="mix">` qilib qo'yiladi. Kerak paketlar: `numpy`, `scipy` (o'rnatilgan).

## Tuzilma
1. **Har SFX = bitta vizual hodisa.** `ev(vaqt, ovoz, dB, pan, "izoh")` ro'yxati. Vaqtlar sahna kodidagi `T` dan olinadi, taxmindan emas.
2. **Domino zarbasi sintezi:** "Knocking on a thick wooden door" (Mixkit 197) dan 5 ta toza zarba + "Wood plank dominoes fall" (3136) dan bo'laklar. Obyekt qanchalik katta bo'lsa, pitch shuncha past (+5 → −6.5 st). Kattalariga past chastotali "tana" sinusi va "Wood hard hit" qo'shiladi. Oxirida xona reverb'i (sintetik IR).
3. **Musiqa ikki qismli:** muammo — minor (Silent Descent), yechim — major (We'll Be Okay). Tonallik A → D, ya'ni dominantadan tonikaga o'tadi va quloqqa "yengillik" bo'lib eshitiladi. Tonallikni `key_an.py` (chroma + Krumhansl) bilan aniqlash mumkin.
4. **Muzlash:** musiqaga tape-stop qilinadi (o'qish tezligi 1 → 0, 0.42 s). Riser keskin kesiladi, ustiga shisha jarangi va 3.1 kHz osilib turgan ton.
5. **Orqaga o'rash:** musiqaning oxirgi 2 s i teskari va ×1.9 tez, "Fast tape rewind" ×1.45 va teskari domino kaskadi. Oxirida "klik".
6. **Ducking:** ovoz energiyasidan konvert olinadi (attack 30 ms, release 350 ms), ovoz bor joyda musiqa −5 dB.
7. **Balans tekshiruvi:** `mom.py` har bo'lim uchun stem'larning momentary LUFS maksimumini chiqaradi. Mo'ljal: musiqa ovozdan 17–20 LU past, kichik zarbalar ~11 LU, asosiy lahzalar 5–8 LU past.
8. **Mastering:** statik gain bilan −14 LUFS, keyin `alimiter limit=0.84` → TP ≈ −2 dB. Qisqa SFX'larga loudnorm ishlatilmaydi ([[Video montaj texnik xatolari]] #4).
9. **Past chastota:** SFX bus'iga 38 Hz highpass, yurak urishiga 48 Hz. Foydalanuvchi bassni yoqtirmaydi ([[Video montaj uslubi]]).

## Mixkit'dan tez qidirish
- `curl https://mixkit.co/free-sound-effects/<so'z>/`, keyin sahifadagi `data-audio-player-preview-url-value` ni ajratib ol (`mk/parse.py`).
- Musiqa sahifalaridagi JSON-LD (`MusicRecording`: nom, janr, muallif, davomiylik, url) toza ro'yxat beradi (`mk/mjson.py`).
- Tinglay olmasang ham baholash mumkin: davomiylik, boshlanish, cho'qqi vaqti, spektral markaz (`sfx_raw/analyze.py`), 10 ms konvert (`env.py`), spektrogramma (`showspectrumpic`).

Bog'liq: [[SFX dizayni va musiqa ritmi]] · [[Ovoz miksi va mastering]] · [[Three.js 3D sahna HyperFrames]]

Markaz: [[Video montaj]]
