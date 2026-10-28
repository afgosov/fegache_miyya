---
tur: bilim
sana: 2026-10-12
teglar: [sfx, ovoz, kutubxona, mediazone, qoida]
---
# SFX kutubxonasi — foydalanuvchi o'zi yig'gan (asosiy manba)

**Qoida (2026-10-12):** foydalanuvchi: "sound effektlarni faqat shu papkadan ol". Montajda SFX **avval shu kutubxonadan** olinadi (Mixkit/sintez faqat bu yerda mos narsa bo'lmasa — va buni aytish kerak).

- **Joyi (doimiy nusxa, yashirin):** `C:/Users/Admin/ObsidianMiya/.claude/assets/SoundEffects/` (74 fayl, 69 MB). Asl papka `C:/Users/Admin/Desktop/claude/SoundEffects` — foydalanuvchi uni o'chirib yuborishi mumkin, shuning uchun nusxadan foydalan. `.claude/assets/` gitga kirmaydi (`.gitignore`).
- **O'lchov jadvali:** `.claude/assets/sfx_scan.json` (davomiylik, onset = boshidagi jimlik, cho'qqi vaqti, spektr markazi, bas ulushi). Skript: `.claude/assets/sfx_scan.py <papka> <out.json>`. SFX'ni `onset`/`peak_t` bo'yicha kadrga qo'y ([[Video montaj texnik xatolari]] #8).

## ➕ 2-qism: `SoundEffects_tg2026/` (2026-10-17, 324 fayl, 336 MB)
Xuddi shu Telegram guruhidan ([[Pro Montaj To'plami (Telegram guruh) tahlili]]) — asosiy kutubxonada **yo'q** bo'lganlari. Memlar, musiqa va dublikatlar olib tashlangan. Yo'l: `.claude/assets/SoundEffects_tg2026/<tur>/`, har tur uchun `<tur>.scan.json`. Bu ham foydalanuvchining kutubxonasi hisoblanadi (o'zi "SFX'larni ham o'rgan" dedi).

| Papka | Soni | Nima | Qachon |
|---|---|---|---|
| `matn_animatsiya` | 9 | **Matn animatsiyasi to'plami:** `1 тап` (0.17 s, past-o'rta) · `2 затяжение` (havoli, 7.8 kHz) · `3 ввод текста` ×3 (qisqa chiq) · `4 щелчок` · `5–6 межбуквенное` · `7 шторка` (eng baland −7.9 dB, yorqin) · `8 заливка` (0.7 s) | Matn **bosqichlari**: paydo bo'lish → yozilish → harf-harf → parda ochilishi → rang to'ldirilishi. Har bosqich o'z ovozida |
| `whoosh` | 54 | `Быстрый 1–15`, `Медленный 1–15`, `вжух 1–7`, `Вуш базовый/с огнем`, `Swoosh`, `Swoosh Transition` (bassli 1.3 s) | O'tish, kirish/chiqish |
| `riser` | 16 | `Riser 1–5`, `Bass_riser`, `Creaking`, `Sharp Detail` (0.97 s), `cinematicRiser` | Kulminatsiyadan oldin; cho'qqisi (`peak_t`) kesimga |
| `kinematik` | 30 | **30 SFX Cinematic:** Braams, Hollywood/Epic/Massive Hit, Bass Drop, Reverse Tension, Riser Long/Short, Flutter, Drone, SciFi/Wind Atmos | Treyler, katta ochilish. ⚠️ Ko'pining boshida **2–6 s jimlik** (Epic Hit v2: onset 6.2 s) — `peak_t` bo'yicha kes. Bass Drop deyarli faqat 90–110 Hz: telefonda eshitilmaydi, o'rta zarba bilan qatlamla |
| `glitch_data` | 24 | `Data 1–6` (raqamli ma'lumot), `Glitch`, `Radio`, `Цифры дисплея`, `Пленка` | UI, raqam, texno |
| `kamera_chaqnash` | 17 | `Camera 2–7`, `Camera shutter`, `блеск 1–4` (yaltirash), `Блик`, `Вспышка` | Foto, oq chaqnash, logo yaltirashi |
| `klik_ui` | 20 | klik, sichqoncha, tugma, bildirishnoma, "типо загрузка" | Kursor, ilova, UI |
| `typing_klaviatura` | 9 | `Typing`, klaviatura, bitta tugma | Yozilayotgan matn |
| `zarba_impact` | 25 | `трейлер 1–3`, `Выстрел`, `Взрыв`, `Quick_Impact`, `Debris_Slow_Motion`, `Crunch` | Raqam yoki so'z "slam" |
| `pul_tanga` | 12 | kassa, tanga, pul sanash | Narx, chegirma |
| `mexanizm` | 10 | `звук шестеренки 1–5`, soat | Jarayon, vaqt |
| `olov_suv_otish` | 17 | `Переход водный 1–8`, `Переход огненный` | Suv/olov o'tishi |
| `qogoz`, `qalam_yozish` | 12 | qog'oz yirtish, qalam, pichoq, cho'zilish | Qog'oz/collage uslubi |
| `multfilm` | 38 | pop, bubble, slide up/down, twang, xylophone, jump, "Mickey Mousing" | Bolalar, quvnoq reklama (kam!) |
| `atmosfera` | 28 | yomg'ir, shahar, olomon (walla), qarsak, jungle, okean, ariq, chigirtka | Foley fon qatlami ([[Zamonaviy reklama montaji]]) |

- **"Eng kerakli 7 ta"** (admin tanlovi): `Typing`, `Camera shutter`, `Gears`, `Glitch`, `Radio`, `Riser`, `Swoosh` (hammasi < 0.7 s, mayda). Har qanday motion Reels uchun boshlang'ich to'plam.
- Darsdagi qoida: **ovozsiz grafika bo'm-bo'sh**. Boshidagi jimlikni kes, ovozni pasaytir, matn kirishiga mayda past ovoz qo'y ([[CapCut retseptlari (speed ramp, mahsulot grafikasi, overlay)]]).

## Nima bor (turlari bo'yicha)
| Tur | Fayllar | Qachon |
|---|---|---|
| **Kinematik whoosh (bassli, uzun)** | `Cinematic Whoosh 1–5.wav` (1, 3, 4 — bassli zarbali; 2, 5 — 12–15 s uzun pad), `медленный вжух.mp3` (sekin, bassli) | katta sahna o'tishi, logo chiqishi |
| **Qisqa whoosh / swish** | `zvuk3/5/11/16/19.mp3`, `rezkiy-zamah`, `medlennyiy-zamah`, `svist-razrezaniya-vozduha`, `zvuk-byistrogo-vzmaha-mecha`, `Stick_Whoosh_Fast_01`, `свуш*.mp3` (= `2_543594…` dublikatlar: `свуш`/`свуш (2)` past, `свуш 2` yuqori chastotali) | kartochka/matn kirishi, kesim, zoom-through |
| **O'tish (transition) to'plami** | `Интересный переход`, `Объемный звук для перехода`, `Стрессовый переход №1`, `Таинственный перехо №1`, `Reverse_riser_02` | sahna almashinuvi; "stress" — muammo sahnasi |
| **Riser** | `cinematicRiser.mp3` + `(1)…(10)` (cho'qqi 1.6–2.4 s da), `Riser Sound Effect` (5 s) | narx/kulminatsiyadan oldin |
| **Zarba** | `удар.mp3` (0.2 s da cho'qqi), `Water_Hit_Hollow_Subtle_Low_02` (38 s — bir nechta past zarbalar), `Cinematic Whoosh 4` (qisqa bass) | narx, asosiy so'z "slam" |
| **Olov whoosh** | `Fire_Whoosh`, `Whoosh_Torch_Fire_Whoosh_Deep_02` | issiq/kuchli urg'u (kamdan-kam) |
| **Kamera** | `шаттер.mp3`, `шаттер 2.mp3`, `вспышка.mp3` (chaqnash), `izvlechenie-plenki-iz-fotoapparata` | syomka, foto, oq chaqnash |
| **UI / telefon** | `кнопка`, `клик 3`, `schelchok-myishyu` (sichqoncha), `загрузка` (yuklanish), `айфон_клава`, `айфон_быстры`, `андроид`, `кнопочный`, `клава2/3` (klaviatura), `best-sms-tone meloboom` (SMS) | qidiruv yozish, tugma bosish, bildirishnoma |
| **Qog'oz** | `Paper Flip 1`, `Paper Flip Sound Effect`, `Multiple Paper Turn`, `Paper Sketchbook Page Flip`, `Rustling Paper 1`, `Ripping Paper`, `Long Page Tear…`, `Paper Crumble 1/2`, `Loud Crumbling Paper`, `Paper Shredder`, `Paper Sound Effects`, `Paper Sounds Video` (58 s to'plam) | ssenariy, hujjat, "g'ijimlab tashlash" |
| **Boshqa** | `Slot_Machine_Latch_Snap` (metall chiq), `Hammer_Wood_Handle_Scrape…`, `Drone sound` (5.9 s, oxirida cho'qqi), `key a minor (2).wav` (7 s, A minor nota/akkord — bass) | tekstura, tonal urg'u |

## Kelib chiqishi va bo'shliqlar (2026-10-17)
- Kutubxona Telegram guruhidagi SFX bo'limining **2025-04 qismi** bilan bir xil (Cinematic Whoosh 1–5, cinematicRiser 1–10, qog'oz, айфон_клава…).
- Guruhda bor edi, bizda yo'q edi — **2026-10-17 da 2-qismga qo'shildi** (pastda): matn animatsiyasi SFX to'plami (тап, затяжение, ввод текста, межбуквенное, шторка, заливка), "eng kerakli 7" (Typing, Camera shutter, Gears, Glitch, Radio, Riser, Swoosh), Data 1–6, Camera 2–7, Riser 1–5, Bass_riser, блеск, шестеренки, ambience (yomg'ir, shahar, odamlar, tabiat), multfilm to'plami. Batafsil: [[Pro Montaj To'plami (Telegram guruh) tahlili]].

## Eslatmalar
- `onset` katta fayllar: `Paper Sketchbook Page Flip` (1.18 s), `кнопочный` (1.02 s), `Riser Sound Effect` (1.54 s) — boshini kesib ishlat.
- `андроид` (−42 dB) va `кнопочный` (−39 dB) juda past yozilgan — gain hisobida e'tibor ber.
- Balans qoidasi o'zgarmaydi: SFX ovozdan ≥6–7 LU past ([[Video montaj uslubi]]).

## MediaZone brend fayllari
- `.claude/assets/brand/mediazone/`: `mediazone_logo_white.png` / `_black.png` (shaffof, 3505×1085), `mediazone_badge_white.png` / `_black.png` (doira ramkali, 2000×2000 — foydalanuvchi yuborgan ko'rinish), asl `mediazone_studio_4k_asl.png` (manba: `Documents/Copied_video 1/`). Tozalash skripti: `.claude/assets/logo_clean.py` (xira artefaktlar o'chiriladi, STUDIO markazga keltiriladi).
- Logo "Ⓞ" o'rnida kamera diafragmasi (shutter) bor — o'tishlarda diafragma motivini ishlatsa bo'ladi.

Bog'liq: [[SFX dizayni va musiqa ritmi]] · [[Ovoz dizayni pipeline]] · Mediazone target videolari · Markaz: [[Video montaj]]

> ⛔ **Ishlatilmasin** (foydalanuvchi, 2026-10-25): jaranglovchi qo'ng'iroqcha tovushlar — `kamera_chaqnash/блеск 1–4`, `Twinkle`, `maxkim_Блик`, `pul_tanga/Звон монет`, `Cash Register`. → [[Video montaj uslubi]]
