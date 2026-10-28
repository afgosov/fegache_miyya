---
tur: bilim
sana: 2026-10-17
teglar: [montaj, b-roll, pexels, motion, reels, konveyer, stiker]
---
# Tabiiy B-roll motion konveyeri ("Табиий нафас", NEIROZOL v2)

Sabab: mijoz "quruq, mexanik" motion'ni rad etdi → [[Video montaj uslubi]]. Papka: `D:/claude_ish/loyihalar/2026-10-17_neirazol2/`.

## Qadamlar
1. **Stok qidirish:** `tools/stock_search.py -f queries.txt` — Pexels qidiruv sahifasining `__NEXT_DATA__` JSON'idan vertikal kliplar (id, davomiylik, `video.src` = UHD/1080 mp4) + 24 ta kichik rasm varag'i (`stock/sheets/<so'rov>.jpg`). Login/API kalit kerak emas. Pexels litsenziyasi — tijorat uchun bepul.
2. **Tanlash:** `clipsheet.py out.jpg ID...` — har klipdan 7 kadr (vaqt bilan) → emotsiya cho'qqisi va `in` nuqtani shundan ol. Mavzu: muammo gapiga muammo kadri, yechimga yorug' tabiat/oila/choy/giyoh. Hijobli ayollar va oila kadrlari mahalliy auditoriyaga yaqin.
3. **Yuklash:** `stock_dl.py ID...` → `stock/raw/p<ID>.mp4` (84 klip ≈ 1.3 GB).
4. **Loyiha:** `newproj.py nN <eski vN> <dur> "<nom>"` — eski kesilgan proxy/so'z vaqtlari qayta ishlatiladi; `grade_spk.py` spikerga iliq-yashil rang (curves + vibrance + `huesaturation colors=g+y`).
5. **Storyboard:** `nN/tm.json` (spiker holatlari, `broll` ro'yxati: t0/t1/id/in/tr cut|fade|blur/k0→k1 Ken Burns/f/c, `bblur` karta ostida fonni xiralash, `leaks` iliq nur), `scenes.js` (komponentlar), `caps_src.json` (so'zma-so'z subtitr, 4-element = ekrandagi y). `settm.py nN` → index.html.
6. **Komponentlar** (`common/nzc.js` + `nz2.css`): `hook`, `title`, `checklist` (galochka + stiker har qatorda), `nameCard` (yil sanog'i), `chip` (stikerli), `seal` (100% muhr, aylanuvchi yozuv), `product` (3D quti + arslonquyruq/na'matak stikerlari + "8 хил гиёҳ"), `days10` (10 doira barg bilan to'ladi), `quote`, `vine` (yo'l + barglar), `cta` (`compact: true` — quti past ushlansa).
7. **Stiker ikonkalari** (`nz2.js ICON`): heart (EKG), thoughts, focus, battery, sofa, tired, moon, clock 03:00, storm, leaf, sprout, **motherwort (arslonquyruq: tik poya, juft barg, lilak gul halqalari)**, **rosehip (na'matak)**, cup, sun, family, briefcase, bolt, shield. Die-cut: oq qirra + ikki qavat soya; kirish `stickIn` (1.35→1, −14° → 0°, power3, sakrashsiz).
8. **Render:** `chain2.sh nN:Nom ...` → `layers2.py` (faqat front alfa qatlam) → HyperFrames mov → `composite2.py` (spiker/B-roll aralashma, blur/fade o'tish, vinyetka, grain, leak, front) → `build_audio2.py` (tg2026 SFX: `tg:<papka>/<fayl>`) → `finalize2.py` → `Neirazol/TAYYOR_v2/`.
9. **Tez tekshiruv:** `NOFRONT=1 FRAMES=1.0,3.5,... composite2.py nN` — faqat ko'rsatilgan kadrlar (`render/peek_*.jpg`), kadrlashni render'siz ko'rish. Grafika: `npx hyperframes snapshot --at ...`. Yakuniy: `qa2.py video out.jpg t...`.

## Ovoz
- Musiqa: sokin pianino/ambient (Mixkit 839 Tears of Joy, 493, 22, 587, 599, 27), ovozdan ~21 LU past. SFX: matn "тап", qog'oz, sekin whoosh (Медленный 3/4/7/12/13), блеск (muhr/nom), заливка (10 kun), кнопка (tugma). SFX 100 ms cho'qqisi ovoz p90 dan ~10 dB past (`under −22`, gain −5…−9).

## v3 qo'shimchalari (2026-10-17)
- **Film burn o'tishlari** (Telegram paketidan, `_namunalar/pro_montaj_tg/perehod/5577|5565|5591_FILM BURNS*`): `tm.json → "burns": [{"t": kesim, "f": fayl, "a": 0.8}]`. Kompozitor `perehod_olchov.json` dagi `peak_t` bo'yicha boshlaydi — kesim eng yorug' kadrga tushadi; screen blend, 1080×1920 ga cover-crop. Videoda 2–3 ta, faqat bo'lim almashganda (hook → B-roll, mahsulot, CTA'ga qaytish) + `Медленный` whoosh cho'qqisi bilan.
- **Yuzni kuzatuvchi virtual kamera:** `tools/facetrack.py nN t0 t1` (mediapipe FaceLandmarker) → `tm.json "track": {t0, t1, b0, k, c, pts}` — kamera siljigan boshlanishda close-up yuz ortidan yuradi, b0..t1 da odatiy holatga silliq qaytadi. Qamrov `cover_k` bilan.
- **strikeBubble** (nzc.js): nutq pufagi «…» → qo'lda chizilgan chiziq bilan o'chiriladi + ✕ (hook'da "qilmang" degan gap uchun). SFX `Карандаш 4`.
- Kesimni qayta qurish: `_neirazol/v1b/edl.json` → `build_cut.py v1b` → `cwords.py v1b`; `nN/src.json` yangi papkaga.
- Topshirish papkasi `DST` env bilan (`TAYYOR_v3`).

## v4 qo'shimchalari (2026-10-18)
- **`tools/phrasemap.py CLIP`** — klipni 10 ms energiya pauzalari bo'yicha iboralarga bo'lib, har birini whisper-server bilan o'qiydi. Nutq boshi, "a" to'ldiruvchilari, takrorlar va qisqartirish uchun **aniq chegaralar** shundan olinadi (cwords/DTW boshida va takrorlarda adashadi).
- **Qayta kesish:** `_neirazol/vNx/edl.json` (bo'laklar) → `build_cut.py vNx` → har ulanishni whisper bilan qayta o'qish → `cwords.py vNx` → `nN/src.json`.
- **Qisqartirish (target ≤ 60 s):** iboralar ro'yxatidan umumiy gaplar va bog'lovchilarni chiqarib, qolganini bo'laklarga ajrat; spiker ko'rinadigan joyda ulanish kam bo'lsin, ko'p ulanishlar B-roll ostida.
- **`product({noBox: true})`** — qutisiz mahsulot kartasi: 4 ta tarkib stikeri qatori + "100% табиий" chip + NEIROZOL + imzo (CSS `.rx.nobox`).
- **`title({plate: true})`** — krem plashkali sarlavha (yorug' fon uchun).
- **Subtitr joylari:** `caps_src.json` 4-element = y (default 1420; karta/quti bo'lsa 1580–1620; tepada 190–330). Spiker yaqinlashsa tepa joy qisqaradi.
- **`tools/preview.sh nN "t1,t2,..." cols`** — render qilmasdan grafika (snapshot) + kompozit kadrlarni bitta varaqqa yig'adi (`sheets/nN_prev.jpg`). Har o'zgarishdan keyin shu bilan tekshir, keyin render.

Bog'liq: [[Motion Reels konveyeri - sahna-spiker almashinuvi]] · [[Klassik montaj konveyeri (motion'siz)]] · [[SFX kutubxonasi (foydalanuvchiniki)]] · Markaz: [[Video montaj]]
