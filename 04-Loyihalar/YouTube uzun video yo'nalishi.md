---
tur: loyiha
sana: 2026-10-09
teglar: [youtube, long-form, darslik, o'rganish, mediazone]
---
# YouTube uzun video yo'nalishi (darsliklar, 5–30 daqiqa, 1 soat)

- **Maqsad (2026-10-09):** Mediazone'da YouTube darsliklari uchun suratga olingan videolar bor, ularni montaj qilish kerak. Shu paytgacha asosan motion/Reels qilinardi, shuning uchun avval YouTube uzun video montajini o'rganish kerak. Foydalanuvchi buni o'zi ham o'rganmoqchi.
- **Qilindi:** internet + ilmiy manbalardan o'rganib, 4 ta bilim yozuvi tuzildi:
  - [[YouTube uzun video montaji]] — Reels va uzun video farqi, tuzilma, retention grafigi, ish tartibi, o'rganish mashqlari
  - [[YouTube darslik (tutorial) montaji]] — edX tadqiqoti raqamlari, Mayer tamoyillari, darslik tuzilmasi, ko'p kamerali darslik, ekran yozuvi
  - [[YouTube texnik talablari va yuklash]] — eksport (sinalgan ffmpeg), −14 LUFS, chapter va end screen qoidalari, o'zbekcha SRT, tekshiruv ro'yxati
  - [[Premiere uzun video ish tartibi]] — proxy, multicam, Enhance Speech, Auto Ducking, markerlar → chapterlar, 26.x funksiyalari
- **Papka:** `29.09.2026 Gulmira opa darslik` — foydalanuvchi "hozir bu papka bilan ishlamaymiz, ko'rma" dedi (2026-10-09). Qaysi material montaj qilinishi hali aytilmagan.
- **Keyingi qadam:** foydalanuvchi material papkasini aytganda → transkripsiya (large-v3) → qog'ozdagi montaj → rough cut XML + chapterlar + SRT → grafika shablonlari (qadam plashkasi, lower-third, end screen) → foydalanuvchi tekshiruvi.
- **Kompyuter ogohlantirishi:** sinovda 4K eksport paytida RAM yetmadi (x264 `malloc failed`), GPU 100% band edi (ehtimol parallel sessiyadagi Reels renderi). Uzun eksportdan oldin yuklamani tekshir ([[YouTube texnik talablari va yuklash]]).

Bo'lim: [[Loyihalar]] · Markaz: [[Video montaj]]

## 2026-10-10 — birinchi video bajarildi
- Material: `4.10.2026 onyx podcast faxriddin aka/ESTETIK/` — C0100 (1-video). Shu papkada keyingi uzun yozuvlar ham bor: C0102 (18 daq), C6183 (42 daq). Foydalanuvchi aytmaguncha ochma.
- Natija va texnika: [[YouTube darslik C0100 (Noon Academy)]] · [[YouTube darslik montaj konveyeri]]
