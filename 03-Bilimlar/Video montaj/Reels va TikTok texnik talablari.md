---
tur: bilim
sana: 2026-10-05
teglar: [montaj, reels, tiktok, eksport, safe-zone]
---
# Reels va TikTok texnik talablari

## Format
- **Kanvas:** 1080×1920 (9:16). Reels uchun 25 yoki 30 fps (bizning kamera 25 fps, shuni saqla).
- **Feed (post):** 1080×1350 (4:5). Reels profil to'rida markazdagi 3:4 qismi ko'rinadi, muqova uchun buni hisobga ol.
- **YouTube:** 1920×1080 (16:9). Shorts 1080×1920.
- Kodek: H.264 (libx264), `yuv420p`, AAC 48 kHz, `+faststart`. Bitreyt 1080p uchun ~10–16 Mbps (CRF 18–20 yetarli).

## Xavfsiz zona (Instagram Reels, 1080×1920)
- **Tepa ~200–270px (≈14%)** — akkaunt nomi va "follow" tugmasi.
- **Past ~400–670px (≈35%)** — izoh matni, audio yorlig'i, foydalanuvchi nomi.
- **O'ng ~120px** — like, comment, share tugmalari ustuni. Har yon tomondan ~6% ga ehtiyot bo'l.
- **Amaliy xavfsiz zona:** markazdagi taxminan **1080×1320** (tepadan 200, pastdan 400px). Eng ishonchli joy: markazdagi ~950×980.
- Subtitr, CTA va logo shu zonada tursin. Yuz kadrning yuqori-o'rta qismida bo'lsin.
- TikTok'da ham shunga o'xshash: pastki ~25–30% va o'ng ustun band.

## Ovoz balandligi
- Instagram va TikTok ovozni normallashtiradi (taxminan **-14 LUFS**). Juda baland ovoz shunchaki pasaytiriladi, foyda bermaydi.
- **Bizning standart:** gapli kontent **-14 LUFS** (−12 gacha ruxsat), **true peak ≤ -1 dBTP**, loudness range 4–9 LU. Musiqali klip −11…−10 LUFS gacha bo'lishi mumkin.
- Batafsil: [[Ovoz miksi va mastering]].

## Eksport (ffmpeg)
```
ffmpeg -i in.mp4 -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p -r 25 \
  -c:a aac -b:a 192k -ar 48000 -movflags +faststart out.mp4
```
- Hajm odatda 33 s uchun 60–100 MB. Instagram baribir qayta siqadi, lekin yuqori sifatli manba kamroq buziladi.
- Topshirishdan oldin tekshir: davomiylik, o'lcham, fps, ovoz LUFS va bir nechta kadr.

## Muqova (cover)
- Birinchi kadr yoki alohida muqova bo'lsin: katta va o'qiladigan sarlavha markaziy 3:4 zonada.

Manbalar: [zeely — Instagram safe zones 2026](https://zeely.ai/blog/master-instagram-safe-zones/), [imageresizers — Reels dimensions](https://www.imageresizers.net/instagram-reels-dimensions), [mixingandmastering.ai — -14 LUFS](https://mixingandmastering.ai/blog/lufs-for-tiktok-and-reels), [cutscore — Reels loudness](https://cutscore.io/blog/loudness-for-instagram-reels)

Markaz: [[Video montaj]]
