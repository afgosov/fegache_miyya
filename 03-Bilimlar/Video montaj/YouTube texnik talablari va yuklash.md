---
tur: bilim
sana: 2026-10-09
teglar: [youtube, eksport, chapter, end-screen, subtitr, ffmpeg, loudness]
---
# YouTube texnik talablari va yuklash

## Eksport (YouTube rasmiy tavsiyasi)
- **Konteyner:** MP4, edit list'siz, `moov` atomi fayl boshida bo'lsin (fast start).
- **Video:** H.264 High Profile, progressive, 2 ta ketma-ket B-kadr, yopiq GOP. GOP = kadr chastotasining yarmi (25p → 12–13), CABAC, 4:2:0, VBR.
- **Kadr chastotasi:** qanday yozilgan bo'lsa, shunday qoldir. Bizning kameralar 25p → eksport ham 25p.
- **Audio:** AAC-LC (yoki Opus), **48 kHz**, stereo. Rasmiy bitreyt raqami yo'q; 320–384 kbps yetarli.
- **Tavsiya etilgan video bitreyti (SDR):**

| O'lcham | 24/25/30 fps | 48/50/60 fps |
|---|---|---|
| 4K (2160p) | 35–45 Mbps | 53–68 Mbps |
| 1440p | 16 Mbps | 24 Mbps |
| 1080p | 8 Mbps | 12 Mbps |
| 720p | 5 Mbps | 7.5 Mbps |
- Bu raqamlar tavsiya, chegara emas. Material 4K bo'lsa, **4K yukla**: YouTube 4K uchun yaxshiroq kodek (VP9/AV1) beradi, shuning uchun 1080p da ko'rganda ham rasm tiniqroq chiqadi (amaliyotda keng ma'lum).

### ffmpeg retsepti (2026-10-09 sinalgan: High, 2 B-kadr, AAC-LC 48k, moov boshida)
```
# CPU (sifat yaxshi, sekin)
ffmpeg -i in.mov -c:v libx264 -preset slow -profile:v high -crf 18 -maxrate 45M -bufsize 90M -g 12 -bf 2 -pix_fmt yuv420p -c:a aac -b:a 384k -ar 48000 -ac 2 -movflags +faststart out.mp4
# GPU NVENC (GTX 1660 SUPER)
ffmpeg -i in.mov -c:v h264_nvenc -preset p6 -profile:v high -rc vbr -cq 19 -b:v 40M -maxrate 50M -bufsize 100M -g 12 -bf 2 -pix_fmt yuv420p -c:a aac -b:a 384k -ar 48000 -ac 2 -movflags +faststart out.mp4
```
- **Tezlik (shu kompyuter, 4K 25p sintetik test, 2026-10-09):** NVENC ~14.6 kadr/s → 1 soatlik 4K ≈ 1 s 40 daq. O'sha paytda GPU 100% band edi (ehtimol parallel sessiyada Reels renderi ketayotgan edi). 4K'da x264 `slow` xotira yetmay yiqildi (`malloc ... failed`). Shuning uchun bu raqamlar "yomon holat" o'lchovi; bo'sh kompyuterda qayta o'lchash kerak. Uzun 4K eksportdan oldin parallel render/sessiyalar va RAM, GPU'ni band qilayotgan dasturlarni yop (Kompyuter va hisob holati → shubhali jarayon).
- **Premiere'da:** Format H.264 → preset "Match Source – High bitrate", keyin Bitrate Encoding VBR 2-pass, Target 40 / Max 50 Mbps (4K 25p). Audio AAC 48 kHz 320 kbps.

## Ovoz balandligi
- Yakuniy miks: **−14 LUFS integral, true peak ≤ −1 dBTP** ([[Ovoz miksi va mastering]]).
- YouTube baland videoni pasaytiradi, past videoni esa ko'tarmaydi. Shuning uchun −14 dan past (masalan −20) yuklangan video boshqa videolar orasida jim eshitiladi. Tekshirish: pleyerda "Stats for nerds" → content loudness.
- 1 soatlik videoda boshidan oxirigacha bir xil balandlik bo'lishi shart. Bir nechta mikrofon bo'lsa, avtomikser ishlat ([[Podcast multicam pipeline]]).

## Chapterlar (bo'limlar) — rasmiy qoidalar
- Description'ga vaqt belgilari yoziladi. **Birinchisi `00:00`**, kamida **3 ta**, o'sish tartibida, har bo'lim kamida **10 s**.
- 1 soatdan uzun videoda format `H:MM:SS` (masalan `1:05:30`).
- Qo'lda yozilgan chapterlar avtomatik chapterlardan ustun turadi. Kanalda strike bo'lsa, chapterlar ishlamaydi.
- Namuna:
```
00:00 Kirish — natija
00:42 1-qadam: tayyorgarlik
03:15 2-qadam: ...
12:40 Ko'p uchraydigan xatolar
15:10 Xulosa
```
- Bo'lim nomi aniq va tavsiflovchi bo'lsin ("Qism 2" emas, "Teri turini aniqlash").
- Premiere'dan: sequence markerlari (M tugmasi; clip markeri emas) → File → Export → Markers (CSV). Bizda chapterlar transkriptdan avtomatik chiqariladi ([[YouTube uzun video montaji]]).

## End screen va kartochkalar
- **End screen** videoning **oxirgi 5–20 soniyasida** chiqadi. Video kamida 25 s bo'lishi kerak. 4 tagacha element qo'yiladi (video, playlist, obuna, kanal, havola). "Bolalar uchun" videoda end screen bo'lmaydi.
- Montajda: oxirgi ~20 s ni end screen uchun dizayn qil — xira yoki sokin fon, elementlar uchun bo'sh joy, markazda logotip. Namuna: Podcast 4-oktabr 5 kamera yakuni (xira fon + nishon).
- **Kartochka (card):** 5 tagacha; turlari: video, playlist, kanal, havola (havola kartochkasi faqat YouTube Partner Program'da).

## Subtitr (CC)
- YouTube avtomatik subtitri **o'zbek tilini qo'llamaydi**. Rasmiy ro'yxatdagi 17 til: arab, ingliz, rus, turk, ukrain, nemis, fransuz, ispan va boshqalar.
- Shuning uchun o'zimiz **SRT** tayyorlaymiz (whisper large-v3 → qo'lda tekshiruv) va CC sifatida yuklaymiz. Yuklangan trek bo'lsa, YouTube "auto-translate" orqali boshqa tillarga ham tarjima qiladi.
- Uzun videoda ekranga "yopishtirilgan" subtitr odatda kerak emas. Faqat kalit so'z va atamalar chiqariladi ([[YouTube darslik (tutorial) montaji]] → Redundancy).

## Thumbnail
- 1280×720 (16:9). Video ichidagi hook bilan bir xil va'dani bersin. Hook 10 s ichida thumbnail va sarlavhani tasdiqlashi kerak.

## Yuklashdan oldingi tekshiruv ro'yxati
- [ ] ffprobe: H.264 High, 25p, yuv420p, AAC 48 kHz stereo, moov boshida
- [ ] Ovoz −14 LUFS, TP ≤ −1 (`ebur128=peak=true`)
- [ ] Boshidagi va oxiridagi qora kadrlar, ortiqcha "jimlik" yo'q
- [ ] Chapterlar: 00:00, ≥3 ta, har biri ≥10 s, nomlari aniq
- [ ] SRT (o'zbekcha) tayyor va vaqtlari sinxron
- [ ] Oxirgi 20 s end screen'ga mos
- [ ] Thumbnail 1280×720
- [ ] Butun videoni oddiy tezlikda bir marta ko'rib chiqish

Manbalar: [YouTube — recommended upload encoding settings](https://support.google.com/youtube/answer/1722171?hl=en), [YouTube — video chapters](https://support.google.com/youtube/answer/9884579?hl=en), [YouTube — automatic captions (PDF)](https://support.google.com/youtube/answer/6373554?hl=en.pdf), [YouTube blog — auto-translate](https://blog.youtube/news-and-events/auto-translate-now-available-for-videos), [storyblocks — chapterlar](https://www.storyblocks.com/resources/tutorials/how-to-add-chapters-to-youtube-video), [sociality — YouTube cards](https://sociality.io/blog/youtube-cards/), [ProVideo Coalition — markerlardan chapterga](https://www.provideocoalition.com/from-markers-to-youtube-video-chapters-with-adobe-premiere-pro/)

Markaz: [[Video montaj]]
