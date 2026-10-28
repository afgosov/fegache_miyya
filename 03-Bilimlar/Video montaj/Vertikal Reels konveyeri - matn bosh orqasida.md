---
tur: bilim
sana: 2026-10-09
teglar: [montaj, reels, pipeline, rvm, opencv, hyperframes, text-behind, sfx]
---
# Vertikal (9:16) talking-head Reels konveyeri — matn bosh orqasida, virtual kadrlar

Nun Arabic Reels (C6184) da sinalgan, ~1.5 soatda xomdan tayyor MP4 gacha. Bitta uzluksiz dubl + bitta kamera uchun.

## 0. Tekshir
- `ffprobe -show_entries stream_side_data=rotation` — Sony 4K vertikal kadrda **rotation=90** bo'ladi; ffmpeg avtomatik buradi (chiqish 2160×3840). Kontakt varaqni shunga qarab o'qi.
- Whisper: **faqat `whisper-cli.exe`** (`main.exe` deprecated — hech narsa yozmaydi, faqat ogohlantirish). `-l uz -bs 5 -mc 0 -ojf -otxt`, ikki model (large-v3-q5_0 + turbo), so'z vaqtlari `tr_*.json` tokenlaridan (`words.py`).
- Kesim nuqtalari: 10 ms RMS konvert, chegara p90−26 dB, ≥150 ms bo'shliqlar (`words.py`), aniq nuqta 5 ms konvert bilan (`cutpts.py`). Vergul pauzasi 40–50 ms bo'lishi mumkin — shunda ham kesiladi (50.20 da ishladi).

## 1. Proxy + niqob (kesishdan oldin, bir marta)
- Proxy `scale=1296:2304` (1.2× chiqish → 1.2 zoom'da ham upscale yo'q), crf 12, `-g 25`, yengil grade shu yerda (`eq=contrast=1.03:saturation=1.05`) — plate va odam qatlami bir xil rangda.
- RVM ONNX DirectML (`matte.py`, ds 0.25) 1296×2304'da **~265 ms/kadr** (98 s → 11 daqiqa), faqat eng katta blob + dilate 41. Natija `alpha_full.mkv` (FFV1 gray). Whisper CUDA bilan bir vaqtda yursa ham bo'ladi.

## 2. EDL — kadrga yaxlitlangan uchta kesim bir xil
- `edl.py`: `SEGS` soniya → `round(t*25)` kadr; video `trim=start_frame:end_frame` + concat (proxy va alfa alohida, lekin bir xil), audio namuna darajasida (kadr × 1920) 4 ms crossfade bilan. ⚠️ Python `round()` yarimlarni juftga yaxlitlaydi (93.30×25=2332.5 → 2332) — natijani `edl.json` dan o'qi, o'zing hisoblama.
- Shubhali oxirgi ibora ("Bo‘ldimi?" — operatorga savol bo'lishi mumkin) kiritilmaydi.

## 3. Kamera pishirish (`zoom.py`)
- Virtual kadrlar: ibora chegaralarida keng 1.0 ↔ yaqin 1.14, ichida drift 0.012/s (maks 5%), ease 0.75·linear + 0.25·cos. Origin = niqobdan: bosh tepasi + 250 px (ko'z), o'rtacha x. Plate (Lanczos) va alfa (bilinear) **bir xil** `warpAffine`.
- Chiqish 1080×1920: plate_zoom.mp4 (crf 14) + alpha_zoom.mkv → `alphamerge,format=yuva420p` → VP9 `fg.webm` (crf 22, cpu-used 2: 52 s ≈ 4 daqiqa). Oxirgi kadr `last.jpg` — videodan keyingi qoraga so'nish uchun.
- Bosh tepasi chiqishda: `y = oy·1920 + (top − oy·2304)·(s·1080/1296)` → bizda keng 542–553 px, yaqin 512–523 px. Band joylashuvi shundan: orqadagi so'z pastki cheti = bosh tepasi + 50–60 px; to'liq o'qiladigan kartochka pastki cheti ≤ bosh tepasi − 20 px.

## 4. Kompozitsiya qatlamlari (HyperFrames)
`#camwrap` (GSAP punch) → `last.jpg` → `plate` video → `#bgdim` + `#topScrim` → `#behind` (yuqori band matnlari) → `fg.webm` → tashqarida `#vignette`, `#capScrim`, subtitrlar, `#sweep`, `#fade`. Ikkala video `data-start="0"`. Yuqori band elementlari `.band` + `data-layout-allow-occlusion`; subtitrlar `data-layout-allow-overlap`.
- Hook so'zi bosh orqasida: serif 150px, kicker ustida; almashinuv zoom-through text swap. Ro'yxat: slotlar (raqam + 34px chiziq) → to'lishda mask-reveal + chiziq 1.6×; chiqish cut-the-curve (x −230, power4.in). Count-up: proxy obyekt `tl.to(cnt,{v:600,onUpdate})` — seek-safe.
- **Check tuzoqlari:** niqob ichida kutayotgan matn (`yPercent 112`) `text_occluded`/`container_overflow` **error** beradi → `gsap.set(txt,{visibility:"hidden"})` + `tl.set(...visible, t−0.02)`. Yashirin band ichidagi bolalar (`#sub1`) ham geometriya bo'yicha `content_overlap` beradi → ularga ham inline `visibility:hidden`. Ikki `dimSpan` tutashsa `overlapping_gsap_tweens` → bitta span. `#topScrim` kanvasdan chiqmasin (left −200 → `panel_out_of_canvas`). `check --json` 52 s kompozitsiyada **~5 daqiqa** — fonda yurgiz.

## 5. Ovoz (`aud/build_audio.py`, `check_mix.py`)
- @@TIMING blokidan vaqtlar; `lvl()` eng baland 100 ms RMS'ni nishonga keltiradi, `at_peak()` cho'qqini kesim kadriga qo'yadi. UNDER = −29 dBFS (pre-master) → ovozdan 7–18 LU past. Musiqa −8.5 LUFS trek + `MUSIC_DB=-26` + duck −4 → ovozdan ~21 LU past.
- Mixkit qidiruv: `mk_fetch.py` (SFX sahifalari, `item-grid-card__title`), `sfx_dl.py` (yuklab olish + onset/peak/centroid/bass %), `mk_music2.py` (musiqa ro'yxati + statistika), `key_an.py` (tonallik + BPM) — sfx'ni eshitmasdan tanlash uchun yetarli.

## 6. Render — Chrome'siz kompozit (majburiy, [[Video montaj texnik xatolari]] #43)
- `hyperframes render` ikkita katta videoli kompozitsiyada Chrome OOM bilan o'ladi. Shuning uchun: `layers.py` → `proj_behind/` (bgdim, topScrim, orqa matnlar) va `proj_front/` (vignette, capScrim, subtitrlar, fade) — videosiz, shaffof fon, kamera tween'lari o'chirilgan → `render --format mov -w 2` (ProRes 4444 alfa, har biri ~5 daqiqa).
- `composite.py` kadrma-kadr: plate_zoom → orqa qatlam `a·(1−alfa_odam)` bilan → GSAP punch (ORIGIN jadvali, zoomThrough/settle/opening egri chiziqlari) warpAffine + GaussianBlur(σ = CSS blur px) → sweep (screen: `1−(1−b)(1−bar·op)`, 520×3000 bar, −14°, x −900→1700 power2.inOut) → old qatlam over → x264 crf 16 → `mix.wav` mux (AAC 256k). Natija −14.0 LUFS, TP −1.5, 1325 kadr aniq.
- Katta `.mov` qatlamlarni (2.5 GB) o'zgartirish kerak bo'lguncha saqla: matn o'zgarsa faqat bitta qatlam qayta render qilinadi, kompozit 8 daqiqa.

## 7. Motion kadrli versiya (v2) — odam karta holatida
- Bitta HTML (`proj2/index.html`): `#L_bg` (fon), `#spkClip>#spkInner` (preview uchun video + `#L_behind`), `#L_front` (grafika + subtitr). Vaqtlar `// @@JSON-BEGIN … @@JSON-END` JSON blokida (TM): `states` (W/T/C/C2: k, f, c, m=[x,y,w,h,r]), `spk` kalitlari, `punch`, `ev` (har harakat vaqti), `caps`. HTML (GSAP proxy onUpdate), kompozitor va ovoz skripti **bir xil JSON'ni** o'qiydi → hammasi sinxron.
- Ekran nuqtasi: `X = c + k·(u − f)`; proxy uchun `k·(1080/1296)`. O'tish: holatlar chiziqli interpolyatsiya, power3.inOut 0.7 s. Kartaga soya (¼ o'lchamda blur) + 2 px shampan chegara.
- `layers2.py` → behind/front `.mov` (alfa), bg `.mp4`; har biri ~4 daqiqa; `composite2.py` ~0.5 s/kadr (1288 kadr ≈ 11 daqiqa). Preview uchun `snapshot` (videoli) — tez tekshiruv.
- Tuzoqlar: yashirin sarlavha so'zlari mask padding'idan "chiziqcha" bo'lib ko'rinadi → `yPercent 135` + konteyner `visibility:hidden` reveal'gacha; `position:absolute; inset:0` li bola o'lchamsiz otada 0 balandlik bo'ladi (`.twin` ga `inset:0` ber); ن logotipi SVG yoyda tabassumga o'xshaydi → Amiri `ں` (U+06BA, nuqtasiz nun) + alohida nuqta.

Markaz: [[Video montaj]] · Bog'liq: [[Matn bosh orqasida - professional usul]] · [[Professional kesim texnikalari]] · [[Ovoz dizayni pipeline]]

## 8. 29.97 fps manba va 30 fps kompozitsiya (2026-10-11, AHDAR Reels)
- Sony 4K 29.97 fps (30000/1001) kadrni HyperFrames 30 fps bilan ishlash uchun proxy'ni `-vf fps=30` bilan yasa: har ~33 s da bitta kadr takrorlanadi, **ovoz o'zgarmaydi**, sinxron ±1 kadr. `-r 30` + atempo kerak emas.
- EDL: `round(t*30)` kadrlar; voice_cut namuna darajasida (1600 namuna/kadr).
- RVM matte: tizim Python'da onnxruntime yo'q — `C:/Users/Admin/virtual_studio/engine/.venv/Scripts/python.exe` (DirectML) bilan `matte.py`: 1296×2304 da **126 ms/kadr** (2155 kadr ≈ 4.5 daq); ikkinchi videoda render bilan parallel 207 ms/kadr.
- Kompozitor (`composite.py`) holatlarga `a` (opacity) qo'shildi: `C3` = kartani so'ndirish (CTA'da gapiruvchi yuqori o'ngdagi doiradan yo'qoladi). Yuqori o'ng doira holati: `C2: k 0.44, c [900,236], m [790,126,220,220,110]`.
- Gapiruvchi stol oldida o'tirsa (kadrning pastki 37% — stol): motion grafika **stol ustida** (y 1400–1760) joylashadi, to'liq ekranli sahnalarda esa gapiruvchi pastdagi kartada (`C`, y 1214–1684) va kontent y 150–1180 da.
