---
tur: bilim
sana: 2026-10-05
teglar: [bilim, video, hyperframes, whisper]
---
# Video montaj vositalari (shu kompyuterda o'rnatilgan)

- **HyperFrames** v0.8.133 — HTML/GSAP'dan video. Skillar `~/.claude/skills/` da (hyperframes, general-video, talking-head-recut, embedded-captions, media-use, motion-graphics va boshqalar).
  - Buyruqlar: `npx -y hyperframes check` (tekshiruv), `render`, `studio` (preview: `http://localhost:3002/#project/<nom>`), `transcribe`, `remove-background` (u2net modeli, RVM emas).
  - HeyGen'ga kirilmagan — ovoz/musiqa uchun lokal vositalar ishlatiladi.
- **Whisper** — whisper.cpp v1.9.2 CUDA, model `large-v3-turbo` (1.5 GB, o'zbekchani yaxshi taniydi).
  - Joyi: `~/.cache/hyperframes/whisper` (bin + models). HyperFrames uni `HYPERFRAMES_WHISPER_PATH` orqali topadi.
- **GPU:** NVIDIA GTX 1660 SUPER, drayver CUDA 12.4. Odamni fondan ajratish (60 s video) ~2.7 daqiqa.
- **Mixkit** — bepul musiqa va SFX; o'zimiz yozgan skill `~/.claude/skills/mixkit`. Sokin trek namunasi: "Classical 6" (Jonny S.).
- **Git, Python 3.12, ffmpeg** — winget orqali o'rnatilgan (2026-10-05).
  - Yangi o'rnatilgandan keyin PowerShell'da PATH yangilash kerak: `$env:Path = [Environment]::GetEnvironmentVariable('Path','Machine') + ';' + [Environment]::GetEnvironmentVariable('Path','User')`
- **Kirill shrift:** Montserrat 500/600/800/900 (latin + cyrillic + cyrillic-ext, unicode-range bilan) — `neirozol-reels/assets/fonts/montserrat/` (jsdelivr @fontsource/montserrat dan).
- **SFX qo'shimcha:** `ecg-beep.wav` (ffmpeg sine 1318 Hz, 0.12 s) — yurak monitori bipi; `riser-short.wav` (1.5 s, oxirida cho'qqi). Hammasi `assets/sfx/*-tight.wav`.
- **Text-behind uchun:** cutout'ni bitta 33 s shaffof `fg_all.webm` qilib, `data-start=0` dan ber (kech boshlansa titraydi).
- **PDF o'qish:** poppler yo'q → Read PDF rasm sifatida ishlamaydi; `pypdf` bilan skript faylidan o'qi.
- **(2026-10-06 qo'shildi)** HyperFrames 0.8.137. Python'da `numpy`, `scipy`, `soundfile`, `fontTools`, `brotli` bor (PIL yo'q). Renderda WebGL GPU bilan ishlaydi (ANGLE D3D11, GTX 1660 SUPER); 3D'li 29.6 s video ~2.5 daqiqada render bo'ladi.
  - Tez kadr olish: `~/.cache/hyperframes/chrome/chrome-headless-shell/.../chrome-headless-shell.exe` + npx keshidagi `puppeteer-core` → skript `_ish/c0476v2/tools/shot.cjs` ([[Three.js 3D sahna HyperFrames]]).
  - Ovoz dizayni skripti: `_ish/c0476v2/audio/build_audio.py` ([[Ovoz dizayni pipeline]]).
  - Brauzer panelida `file://` ochilmaydi; lokal sahifani `python -m http.server` orqali och.
- Yo'q: RVM (Mac versiyasi), HeyGen kaliti.
- **HeyGen CLI (2026-10-16):** v0.10.0 `%LOCALAPPDATA%\Programs\heygen\heygen.exe`, foydalanuvchi PATH'iga qo'shildi. Rasmiy hujjat "Windows tez orada" deydi, lekin GitHub `heygen-com/heygen-cli` releases'da `windows_amd64.zip` bor (sha256 checksums.txt bilan tekshirildi). Kirish: `heygen auth login --oauth` (bepul obuna kreditlari; API kalit = API kredit). Telemetriyani o'chirish: `HEYGEN_NO_ANALYTICS=1`.
  - ⚠️ Git Bash'da `$LOCALAPPDATA` (`C:\...`) ni PATH'ga qo'shma — `:` bo'linib ketadi; `/c/Users/Admin/AppData/Local/Programs/heygen` yoz.
  - Rasmiy skillar `~/.claude/skills/heygen-avatar|heygen-video|heygen-translate` (heygen-com/skills v3.2.0); HeyGen MCP `https://mcp.heygen.com/mcp/v1/` user scope'ga qo'shildi (yangi sessiyada OAuth so'raydi).
  - Video: `heygen video create` — `type: image` + `audio_asset_id`/`audio_url` (o'z ovozi bilan lip-sync), `aspect_ratio: 9:16`, `engine: avatar_v`. Asset yuklash: `heygen asset create`.
- **edge-tts 7.3.1** (bepul o'zbekcha TTS: uz-UZ-SardorNeural/MadinaNeural). 7.2.8 → 403, yangilash kerak.

## ☁️ Bulut (claude.ai/code) — 2026-10-07 sinovi
- Mashina: 4 yadro CPU, 15.7 GB RAM, ~30 GB disk, GPU/WebGL yo'q (software render). Node 22, ffmpeg 6.1, HyperFrames 0.8.138, Inter shrifti tizimda bor.
- `setup.sh` ~6–21 s (birinchi marta Chrome 114 MB yuklanadi). Tayyorligi: `.claude/cloud/.setup-done`.
- Render tezligi: 5 s 1080x1920 matnli video → **14.4 s** (150 kadr, 2 worker). Oddiy motion ~3x real vaqt; 3D/WebGL sekinroq bo'ladi.
- Tartib: `work/<nom>/` da `hyperframes init` → GSAP lokal (`~/.cache/miya-vendor/gsap.min.js` → `assets/vendor/`) → `check` → `snapshot` → `render` → `ffprobe` → `renders/YYYY-MM-DD-<nom>.mp4` → commit + push.
- Yo'q / yopiq: whisper-cpp, Kokoro TTS, MusicGen; jsdelivr/unpkg/cdnjs, huggingface, mixkit. Batafsil: Bulut muhiti tuzoqlari.
- **Transkripsiya bulutda ishlaydi (2026-10-07):** `python3 -I .claude/tools/bulut-transkripsiya.py video.mp4` — whisper large-v3 (ONNX int8, sherpa-onnx) GitHub release'dan `~/.cache/miya-models` ga o'zi yuklanadi (1.07 GB, yuklash ~1 daqiqa, ochish ~3 daqiqa). Ovoz pauzalari bo'yicha ≤15 s bo'laklarga kesadi, `.json` + `.txt` yozadi. Tezlik CPU'da ~1.5–2.5x real vaqt (60 s ovoz ≈ 4 daqiqa). Faqat ibora vaqtlari bor, so'z vaqtlari yo'q. O'zbekchani taxminan taniydi ("neyrazol", "pinyus"), shuning uchun matnni ma'no bo'yicha o'zing tuzat.

Bog'liq: [[Video montaj uslubi]] · [[Video montaj texnik xatolari]] · [[AI bilan motion video qo'llanmasi]] · [[Motion design]]

Bo'lim: [[Bilimlar]]
- **(2026-10-16)** `hyperframes remove-background` va `render` progress chiqishi juda uzun (har kadr) — `2>&1 | tr '
' '
' | tail -5` yoki `--quiet` bilan ishga tushir. `hyperframes check`: `<html data-layer>` endi xato (deprecated) → nz.js'da kamera blokini `#spkClip` borligiga bog'ladim; shriftlarni `<link>` o'rniga `<style>` ichiga qo'y (StaticGuard @font-face ni ko'rmaydi).
