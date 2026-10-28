---
tur: bilim
sana: 2026-10-24
teglar: [montaj, ikki-kamera, sinxron, intervyu, sheva, whisper, shaffof-shrift, konveyer]
---
# Ikki kamerali intervyu / savol-javob Reels konveyeri (sheva bilan)

Birinchi marta: Jasur Rich biznes Reels (20.10.2026) — 2 kamera (Sony, vertikal, rotation=90), ~85 daqiqa xom → 13 Reels. Papka: `D:/claude_ish/loyihalar/2026-10-24_jasur_rich/tools/`.

## Qadamlar
1. `prep.py` — 48k/16k wav + 1 fps kadrlar (rotation ffmpeg o'zi buradi, transpose QO'SHMA). HDD da 2 oqim.
2. **Qaysi kamerada lav:** L=R (corr 1.0) va baland — lav qabul qilgichi; L≠R — kamera mikrofoni. Matn va yakuniy ovoz lav'dan.
3. `asr2.py LANG PORTS klip...` — **25 s bo'laklar** (chegarasi eng jim nuqtada) + `verbose_json` segment vaqtlari. Ibora-ibora so'rov whisper'da sekin (har so'rov 30 s enkoder) — 690 s ovoz 775 s ketgan; bo'laklab 2.5–4× real vaqtdan tez. Turbo shevada halqaga tushadi — faqat large-v3.
4. **Xorazm shevasi:** `-l tk` (turkmancha) eng tushunarli, `-l uz` lotin — ikkalasini yonma-yon o'qi (`view.py CLIP t0 t1 --asr`). Ma'noni o'zing tikla ([[Shevali nutq transkripsiyasi]]).
5. `sync.py` — har A klip uchun eng mos B klip: 10 ms energiya konverti FFT xcorr (ball ~0.85) + xom signalda ±30 ms → `syncA.json {b, off}`. Kamera soatlari ishonchsiz (B 2020-yil) — faqat ovoz. Bitta B klip ikki A klipni qoplashi mumkin (A to'xtatilgan, B yozib turgan).
6. Dubl tanlash: rejissyor "zo'r/chotki" degan joydan oldingi oxirgi to'liq dubl. `pauses.py` (lav, A vaqtida, 0.04–0.2 s) bilan kesim nuqtasi, `wt.py` bilan so'z vaqtlari.
7. `edl.json`: `[A_klip, a, b, "A"|"B", {aud, gain, stab}]` — vaqtlar A bo'yicha, B = a+off. Kamera har 4–10 s da almashadi, faqat pauzada; dublar ulanishi doim kamera almashinuvi bilan yopiladi. Savol beruvchi (kadr tashqarisida) gapirganda — umumiy plan.
8. `build2.py` — **bo'lak keshi** (`proxy/seg/<sha1>.mp4`): kesim o'zgarsa faqat yangi bo'lak render; har bo'lakda 4 namuna kadrdan yuz (MediaPipe) + oq balans/daraja (grade); ovoz bo'lagi nutq darajasiga tenglanadi, 10 ms fade.
9. `mkplan_jr.py` — `p.at(klip, manba_vaqti)` manba vaqtini chiqish vaqtiga aylantiradi (vwords kerak emas). Elementlar: `dif` (shaffof shrift), `chip`, `stat`, `check`, `comment` (CTA "qarz"/"+"). Kamera: har bo'lak bitta kadr, sekin zoom ~2.2%/s yuz atrofida (`f=c=yuz`).
10. `chain.sh V` (mkplan → HyperFrames front → comp → audio → finalize), `queue.sh` proxy tayyor bo'lishini kutadi; 2–3 parallel navbat (RAM ≥ 3 GB bo'sh).

## Tezlik
- `grade.py` fn: vinyetkani proxy'dan olib tashlash + vibrance `cv2.copyTo(mask)` → 0.29 → 0.045 s/kadr (6.5×). Proxy build 0.23 → ~0.11 s/kadr.
- 4K H.264 8-bit dekod CPU'da 0.024 s/kadr (devor vaqti), lekin **0.2 CPU-s/kadr** — ~14 yadro band; parallel renderlarda shu CPU'ni yeydi. NVDEC (`-hwaccel cuda`) bit-baravar bir xil va CPU'ni ~35% kamaytiradi (2026-10-24).
- Bo'laklar parallel (`SEGJOBS=3`), kompozit bo'laklab (`PARTS=3`): proxy 250 → 159 s, comp 227 → 111 s, natija bir xil → [[Render tezlashtirish (sifat o'zgarmasdan)]].

## Tekshiruv
- `smooth_check` talking-head yaqin kadrlarda yolg'on TITRAYDI beradi (spiker qo'li). `outjit.py V` — fon kataklarida fazaviy korrelyatsiya; xira (bokeh) fonda ishonch ~0.5, grain shovqin qo'shadi — proxy'da ham o'lcha. Shtativ B kadr: 0.1 px.
- Chip ≤ 28 belgi (Reels o'ng paneli) — [[Video montaj texnik xatolari]] #197; chetga kirgan begona narsa (qog'oz) — #198.

Bog'liq: [[Ikki kamerali hook seriyasi konveyeri]] · [[Podcast multicam pipeline]] · [[Video ustidagi motion konveyeri (portret + shaffof shrift)]] · Markaz: [[Video montaj]]
