---
tur: bilim
sana: 2026-10-06
teglar: [ffmpeg, montaj, buyruqlar, amaliy]
---
# ffmpeg retseptlari (montaj uchun amaliy buyruqlar)

⚠️ Windows'da: yo'llarda bo'sh joy va apostrof bo'lsa, buyruqni skript faylga yozib ishga tushir (PowerShell native argumentlar). Yangi o'rnatilgan dasturlar uchun PATH'ni yangila ([[Video montaj vositalari]]).

## Ma'lumot olish
- Metadata (davomiylik, o'lcham, fps, rotation): `ffprobe -v error -show_entries format=duration:stream=codec_name,width,height,r_frame_rate:stream_side_data=rotation -of json in.mp4`
- Audio kanallar: `ffprobe -v error -select_streams a -show_entries stream=channels,channel_layout -of csv=p=0 in.mp4`
- Ovoz balandligi: `ffmpeg -i in.mp4 -af ebur128=peak=true -f null -` (integral LUFS, LRA, true peak)
- Jimlik joylari: `ffmpeg -i in.mp4 -af silencedetect=noise=-35dB:d=0.4 -f null -`
- Sahna almashinuvlari: `ffmpeg -i in.mp4 -vf "select='gt(scene,0.3)',showinfo" -f null -`

## Kadrlar va tekshiruv
- Bitta kadr: `ffmpeg -ss 12.5 -i in.mp4 -frames:v 1 frame.jpg`
- Kontakt varaq (har 2 s da bitta kadr, 4×4): `ffmpeg -i in.mp4 -vf "fps=1/2,scale=270:-1,tile=4x4" -frames:v 1 sheet.jpg`

## Kesish va birlashtirish
- Aniq kesish (qayta kodlash bilan): `ffmpeg -ss 23.0 -to 29.5 -i in.mp4 -c:v libx264 -crf 18 -c:a aac part.mp4`
- Tez kesish (keyframe bo'yicha, qayta kodlashsiz): `-c copy`. Kesim aniq bo'lmaydi.
- ⚠️ **Sony 4K (C99xx, XAVC S) — open GOP, keyframe har 0.48 s** (2026-10-28, C9910): `-c copy` kesimda boshida ~0.5 s **yashirin kadr** (edit list) qoladi, Premiere/pleyerlar ko'rsatishi mumkin; chiqish tomonidagi `-ss` esa videoni 0.48 s kech boshlab ovozdan siljitadi. ✅ Mijozga bo'lak: `-ss A -i in -t D -c:v libx264 -preset slow -crf 12 -g 25 -pix_fmt yuv420p` + bt709 teglari, `-c:a aac -b:a 320k` (~88 Mbit/s, asldan yuqori; 4K'da ~6 kadr/s, 2 parallel).
- ⚠️ **Vertikal Sony klip `rotation=-90`** bilan 3840×2160 bo'lib ko'rinadi: `scale=960:540` qilsang kadr 3× cho'ziladi va noto'g'ri baholaysan. Avval `stream_side_data=rotation` ni o'qi; tahlil kadrlarini 9:16 da chiqar (`scale=216:384`).
- **Uzun B-roll'dan "zo'r kadr" tanlash** (2026-10-28, sinalgan): proxy → har 0.5 s odam zonasi harakati + qo'l keskinligi (Laplacian) + fon `phaseCorrelate` (kamera siljishi) → "X/x/." xaritasi; 3 s qadamli 9:16 kontakt varaq bilan umumiy ko'rish, shubhali oynalarni 0.5 s qadamda. Tanlov: har harakatdan bitta eng toza dubl (o'ylash pozasi, tez yozish, rangli ekran, boshlanish/ketish), keskin qo'l siltashi yo'q. Skriptlar: `D:\claude_ish\loyihalar\2026-10-28_c9910_zor_kadrlar\` (`motion.py`, `vsheet.py`, `cut2.py`).
- Birlashtirish (bir xil format): `list.txt` ga `file 'a.mp4'` qatorlarini yoz, keyin `ffmpeg -f concat -safe 0 -i list.txt -c copy out.mp4`
- Crossfade bilan ulash: `xfade=transition=fade:duration=0.3:offset=4.7` va audio uchun `acrossfade=d=0.3`

## Format va o'lcham
- 4K vertikal → 1080×1920: `scale=1080:1920:flags=lanczos`
- Gorizontaldan vertikalga markazdan qirqish: `crop=ih*9/16:ih,scale=1080:1920`
- Punch-in (yaqinlashtirish 120%): `scale=iw*1.2:-1,crop=1080:1920`
- Burish: `transpose=1` (90° soat yo'nalishida). Rotation metadata'ni ffmpeg odatda avtomatik qo'llaydi.
- fps: `-r 25` yoki `fps=25`
- Render uchun zich keyframe: `-g 25 -keyint_min 25` ([[Talking-head grafik qadoqlash]])

## Tasvir sifati
- Rang: `eq=contrast=1.05:saturation=1.05:brightness=0.01`, `colorbalance=rm=-0.03`, `lut3d=look.cube` ([[Rang tuzatish va grading]])
- Shovqinni kamaytirish: `hqdn3d=2:1:3:3` (yengil). Kuchli usul: `nlmeans` (sekin).
- O'tkirlik: `unsharp=5:5:0.6:5:5:0.0`
- Stabilizatsiya (ikki bosqich):
  1. `vidstabdetect=shakiness=5:result=t.trf`
  2. `vidstabtransform=input=t.trf:smoothing=20,unsharp=5:5:0.8:3:3:0.4`
- Vignette: `vignette=PI/5`
- Grain: `noise=alls=6:allf=t`

## Vaqt
- Tezlashtirish ×2: `setpts=0.5*PTS` va audio `atempo=2.0`
- Sekinlashtirish ×0.5: `setpts=2*PTS` (silliq chiqishi uchun `minterpolate=fps=50`)
- Kadrni to'xtatish (freeze 1 s): `tpad=stop_mode=clone:stop_duration=1`
- Teskari: `reverse,areverse` (faqat qisqa kliplar uchun)

## Ustma-ust qo'yish
- Logo: `overlay=W-w-40:40` (o'ng yuqori)
- Matn: `drawtext=fontfile=Montserrat-Bold.ttf:text='NEIROZOL':fontsize=96:fontcolor=white:x=(w-tw)/2:y=h*0.2`
- Subtitr yoqish: `subtitles=subs.srt:force_style='FontName=Montserrat,FontSize=14,Outline=2'`
- Fade: `fade=t=in:st=0:d=0.5,fade=t=out:st=32.5:d=0.5`

## Audio
- Ovozni ajratish: `-vn -acodec libmp3lame -q:a 2 audio.mp3`
- OGG (Telegram ovozli xabar, opus) → MP3: `ffmpeg -n -i audio.ogg -vn -c:a libmp3lame -b:a 192k audio.mp3`. Telegram ovozlari `Downloads\` yoki `Downloads\Telegram Desktop\` da `audio_YYYY-MM-DD_*.ogg` nomi bilan turadi; "ogg" desa, eng yangilarini ol (2026-10-23).
- Bitta kanalni mono qilish: `pan=mono|c0=c0`
- Ovozni almashtirish: `-i video.mp4 -i new.wav -map 0:v -map 1:a -c:v copy -shortest`
- Musiqani aralashtirish: `amix=inputs=2:duration=first:weights='1 0.15'`
- Tozalash, loudnorm, ducking, SFX jimligini kesish → [[Ovoz miksi va mastering]]

## Namunani kadrma-kadr tahlil qilish (2026-10-06 da sinalgan)
- Umumiy ko'rinish (3 s = 1 varaq, 4 fps, vaqt yozuvi bilan): `ffmpeg -i in.mp4 -vf "fps=4,scale=240:-1,drawtext=text='%{pts\:hms}':x=4:y=4:fontsize=16:fontcolor=yellow:box=1:boxcolor=black@0.6,tile=6x2" sheet/s%02d.png`
- O'tishni har kadrda ko'rish (t soniyadan 16 kadr): `ffmpeg -ss T -i in.mp4 -frames:v 16 -vf "scale=180:-1,tile=8x2" t.png`. ⚠ `select` + `tile` + `-vsync vfr` birga ishlamadi (fayl yaratilmadi) → `-t 0.8` + `fps=15` + `-frames:v 1` ishlat.
- Kesim vaqtlari: `ffmpeg -i in.mp4 -vf "select='gt(scene,0.2)',metadata=print:file=-" -an -f null - | grep -o "pts_time:[0-9.]*"`
- Spektrogramma (SFX/zarba/ovozni ko'rish): `ffmpeg -i in.mp4 -lavfi "showspectrumpic=s=1600x400:legend=1:scale=log" spec.png`
- Ovoz balandligi: `ffmpeg -i in.mp4 -af ebur128 -f null -` (oxirgi qatorlar).
- Diktor matni: `ffmpeg -i in.mp4 -ar 16000 -ac 1 a.wav`, keyin `~/.cache/hyperframes/whisper/bin/Release/whisper-cli.exe -m ~/.cache/hyperframes/whisper/models/ggml-large-v3-turbo.bin -f a.wav -l auto`. Matn vaqtini kadrlar bilan solishtir: "so'z = kadr" bog'lanishini shunda ko'rasan.

## Yakuniy eksport (Reels)
`ffmpeg -i in.mp4 -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p -r 25 -c:a aac -b:a 192k -ar 48000 -movflags +faststart out.mp4` ([[Reels va TikTok texnik talablari]])

Markaz: [[Video montaj]]

## QuickTime/Mac'da ochiladigan mp4 (2026-10-08)
- ffmpeg'ni `pip install imageio-ffmpeg` dan ol (`imageio_ffmpeg.get_ffmpeg_exe()`): Win, macOS Intel + arm64, Linux; libx264 bor. ffprobe **yo'q** → `ffmpeg -i X` stderr'ini parse qil.
- Retsept: `-c:v libx264 -preset veryfast -crf 18 -pix_fmt yuv420p -vf scale=trunc(iw/2)*2:trunc(ih/2)*2:out_range=tv -color_range tv -movflags +faststart`.
- Chrome MediaRecorder webm: **full range** (natija `yuvj420p` bo'lib qoladi) → `out_range=tv` shart; vaqt belgilari notekis → `-fps_mode vfr`.
- Python'dan kadrlarni to'g'ridan yozish: `-f rawvideo -pix_fmt bgr24 -s WxH -r FPS -i -` + stdin; stderr'ni PIPE emas vaqtinchalik faylga (to'lib qotmasin). 1080p30 da 0 kadr tashlandi.
- Tugamagan faylni yashirin `.X.mp4.part` ga yoz → tekshiruvchi/ro'yxatlar chala faylni ushlamaydi. faststart: `moov` qutisi `mdat` dan oldin.

## Silliq zoom'ni videoga "pishirish" (2026-10-09, sinalgan)
- Brauzer/HyperFrames transform zoom'i deyarli tekis, lekin eng ishonchlisi — OpenCV `warpAffine` (INTER_LANCZOS4, float matritsa, subpiksel) bilan har kadrni oldindan hisoblash. Skript: `C:/Users/Admin/AppData/Local/Temp/claude/podtizer/zoom.py` (alohida venv: `podtizer/venv`, opencv-python-headless).
- Manba 1.2× proxy (2304×1296) → chiqish 1920×1080: k = s·1920/2304, origin yuzda; s ≤ 1.2 bo'lsa upscale yo'q. Tezlik 0.03/s, maks 20%; ease = 0.75·u + 0.25·(0.5−0.5cos πu) — chetlarda to'xtamaydi.
- 67 s 1080p ~1–2 daqiqada tayyor; HyperFrames'da video transform'siz o'ynaydi.

## Vaqtga bog'liq blur va yorqinlik — `sendcmd` (2026-10-10, sinalgan, ffmpeg 9.0.2)
Reklama o'tishlari uchun: defokusdan ochilish, chaqnash, yakuniy kartochkadagi blur + qorayish. Skript: `_namunalar/reklama/reklama_effektlar.py` ([[Zamonaviy reklama montaji]]).
- `gblur` (`sigma`) va `colorchannelmixer` (`rr/gg/bb`) runtime buyruqlarni qabul qiladi (`-h filter=...` da `T` belgisi). Python har kadr uchun qator yozadi: `0.0333 gblur@b sigma 12.400, colorchannelmixer@m rr 1.0000, colorchannelmixer@m gg 1.0000, colorchannelmixer@m bb 1.0000;`
- Zanjir: `setpts=PTS-STARTPTS,...,sendcmd=f=p2.cmd,gblur@b=sigma=0:steps=2,format=gbrp,colorchannelmixer@m`. Vaqt — segment ichidagi vaqt (input `-ss` + `setpts=PTS-STARTPTS`).
- Qorayish ko'paytma bilan qilinadi (`rr=gg=bb=0.58`): qora joylar o'zgarmaydi, oq joylar pasayadi. `eq brightness` esa ayiradi va kulrang "parda" beradi.
- Porlash (glow) so'nishi: `split[a][b]; [b]gblur=sigma=22[bb]; [a][bb]blend=all_expr='A+((255-(255-A)*(255-B)/255)-A)*pow(max(0,1-T/0.3),2)'`. Bu screen aralashmasi, T bilan so'nadi; gbrp formatda ishlaydi. Qo'shtirnoq ichida vergulni `\,` bilan qochirma — ifoda buziladi.
- Logotipni blur'dan **keyin** overlay qil, shunda logotip tiniq qoladi: `-loop 1 -t D -i logo.png` → `format=rgba,fade=t=in:st=1.1:d=0.65:alpha=1` → `overlay=0:0:format=auto`.
- Tasmali hook: har klipga `scale=720:-2,crop=720:256:0:'min(max(ih*0.45-128,0),ih-256)'`, keyin `vstack=inputs=5`.
- Tuzoqlar: (1) `sendcmd=f=` nisbiy yo'lni ffmpeg'ning **cwd**'idan qidiradi. cmd faylini ishchi papkaga yoz va ffmpeg'ni `cwd=` bilan ishga tushir (Windows'da `C:` dagi `:` ni qochirishdan qutulasan). (2) ffmpeg 9 da `-vsync` **olib tashlangan** → `-fps_mode vfr`.

## Fokusdan tashqari yozuvni o'tkirlashtirish (2026-10-17, sinalgan)
Sayoz DOF'da xira chiqqan yozuv (masalan mahsulot nomi): faqat yozuv atrofidagi ROI'da Richardson-Lucy dekonvolyutsiya (disk PSF r≈4 px @1080, 12 iteratsiya, `cv2.filter2D`) + yengil unsharp (0.5, σ1.6), ROI chetlari 40 px yumshoq aralashtiriladi. Natija: o'qiladi, lekin 100% aniq emas (yengil halo). Kod: `_primer/tools/build.py` → `deblur()`, plan opsiyasi `"sharp": {"roi":[x0,y0,x1,y1],"r":4,"it":12}`.

## Telegram'ga yuboriladigan siqilgan nusxa (2026-10-18, sinalgan)
- **Limit:** Telegram oddiy akkaunt — fayl ≤ 2 GB (Premium 4 GB). 4K 35 Mbit/s podcast (16–31 daq = 4–8 GB) → 1080p ~6 Mbit/s ga tushadi: 31 daq ≈ 1.45 GB, 16 daq ≈ 0.75 GB. H.264 + faststart = Telegram'da to'g'ridan-to'g'ri o'ynaydi.
- **GPU (GTX 1660 Super, ~8.5x tezlik, 4K→1080p):**
  `ffmpeg -hwaccel cuda -hwaccel_output_format cuda -i in.mp4 -vf scale_cuda=1920:1080 -c:v h264_nvenc -preset p6 -tune hq -rc vbr -multipass fullres -b:v 6M -maxrate 7M -bufsize 12M -profile:v high -spatial-aq 1 -c:a aac -b:a 160k -movflags +faststart out.mp4`
- Hajmni oldindan hisobla: `GB ≈ davomiylik_s × (video+audio Mbit/s) / 8 / 1000`. maxrate qopqog'i eng yomon holatda ham 2 GB dan oshirmasligini tekshir.
- Loyiha: Podcast 12-oktabr reels xona (#52 vazifa).

## Standart encoder: NVENC (CPU'ni bo'shatish) — 2026-10-24
- **Qoida:** yangi render skriptlarida `libx264` o'rniga **`h264_nvenc`** ishlat. Sabab: bir nechta parallel render i9-10900F'ni 100% band qildi; NVENC GPU'dagi alohida blokda kodlaydi.
- Almashtirish (rawvideo pipe → mp4): `-c:v libx264 -preset medium -crf N` → `-c:v h264_nvenc -preset p5 -tune hq -rc vbr -cq N+1 -b:v 0 -spatial-aq 1 -temporal-aq 1` (qolgan `-pix_fmt yuv420p -g -movflags +faststart` o'zgarmaydi).
- Sinov (1080x1920, 30fps): SSIM x264 crf17 = 0.9476, nvenc cq18 = 0.9478 — sifat bir xil, fayl ~40% katta (Reels uchun muammo emas).
- O'tkazilgan skriptlar (`.bak` asl nusxa yonida): jasur_rich `ib/comp.py`, `ib/comp_slow.py`, `ib/build_seg.py`, `tools/build2.py`; grossline `skriptlar/reels2.py`, `insta2.py`; vault `tools/portret.py`, `neirozol_pipeline/tools/comp.py`.
- Eski yopilgan loyihalar libx264 da qoldi (tegilmadi).

## NVDEC dekod — bit-baravar bir xil (2026-10-24, md5 bilan sinalgan)
- 4K H.264 8-bit: `-hwaccel cuda` (output_format'siz) + CPU `scale=...:flags=lanczos` → kadrlar CPU dekod bilan **bir xil**, CPU vaqti 39 → 25 s / 200 kadr. `-hwaccel_output_format cuda` + `scale_cuda` → 7.5 s, lekin PSNR 42 dB (bir xil emas).
- O'lchamsiz yuv→bgr24 (proxy o'qish) NVDEC bilan farq qiladi (nv12 yo'li) — u yerda CPU qoldir.
- Python'da pipe'dan o'qish: `bufsize=0` bo'lsa `read(n)` qisqa qaytishi mumkin → `readinto` tsikli; aks holda o'quvchi to'xtab ffmpeg osiladi. Katta kadrlar uchun `capture_output` ishlatma (1300 kadr 4K = 14 GB RAM).
- Batafsil: [[Render tezlashtirish (sifat o'zgarmasdan)]]. Final arxiv/YouTube uchun eng kichik hajm kerak bo'lsa — libx264 `slow` hali ham variant.
