---
tur: bilim
sana: 2026-10-15
teglar: [bilim, video, qidiruv, opencv, yuz]
---
# Videolardan odamni yuz bo'yicha qidirish

Foydalanuvchi rasm beradi: "shu odam qatnashgan videoni top". **Fonga emas, yuzga qara** — foydalanuvchi aytdi: "fonni inobatga olma, odamni inobatga ol".

## Usul (sinalgan, 2026-10-15)
- Model: OpenCV `FaceDetectorYN` (YuNet, `face_detection_yunet_2023mar.onnx`) + `FaceRecognizerSF` (SFace, `face_recognition_sface_2021dec.onnx`) — github.com/opencv/opencv_zoo dan, jami ~39 MB. cv2 5.0 da ishlaydi (ogohlantirish "Targets are not supported" — zararsiz).
- Har videodan 3 kadr (15/50/85%), uzun tomoni 1280 px, `alignCrop` → `feature` → kosinus. SFace chegarasi 0.363, lekin **0.36–0.52 oralig'ida begonalar ko'p chiqadi** (to'y/olomon kadrlari) → har nomzodni yuzini kattalashtirib ko'z bilan tekshir.
- Ro'yxat: `D:\` + `C:\Users\Admin` (Temp, `claude_ish` va `kirilmasin` papkasidan tashqari) — ~10 ming video, 1 MB dan kattasi 6612 ta.

## Tezlik saboqlari
- **ffmpeg/ffprobe har ishga tushishi ~1.8 s** (sys vaqt — Defender skaneri ehtimol). Har kadr uchun alohida jarayon = soatlab. To'g'ri yo'l: `cv2.VideoCapture` + `CAP_PROP_POS_FRAMES` (jarayon ichida, ~0.65 s/kadr 4K), ffmpeg faqat zaxira.
- 12 oqim, HDD (D:) — 4870 video ~70 daqiqa.
- `D:\13 max photos kirilmasin` — nomida "kirilmasin", shaxsiy; ruxsatsiz ochma.

Skriptlar sessiya scratchpad'ida edi (`scan/face.py`, `face_scan.py`) — kerak bo'lsa qayta yoz.

Bog'liq: Kompyuter va hisob holati · [[Video montaj vositalari]]
