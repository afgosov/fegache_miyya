---
tur: bilim
sana: 2026-10-19
teglar: [motion, ilova, tutorial, mokap, hyperframes, konveyer]
---
# Ilova qo'llanma video konveyeri — telefon mokapi, virtual kamera, tap-doira

Birinchi qo'llanish: Guds Jobs ilova qo'llanma video (54 s, 1080×1920, 30 fps). Mijoz TZ'si "After Effects screen-record" bo'lsa ham, **ekran yozuvisiz** to'liq motion qilib berish mumkin: ilova UI'si HTML'da qayta chiziladi.

## 1. Material yig'ish (ilova bizda yo'q bo'lsa)
- Play Store sahifasi: `curl -A Chrome "…details?id=<pkg>&hl=en"` → tavsif `data-g-id="description"`, rasmlar `play-lh.googleusercontent.com/<id>=s0` (asl 1080×2400 skrinshot).
- App Store: `itunes.apple.com/search?term=<nom>&entity=software&country=uz` → `screenshotUrls` (`…/1206x2622bb.jpg` qilib asl o'lcham), ikonka `artworkUrl512` → `1024x1024bb.png`. Tavsifda funksiyalar ro'yxati bo'ladi (ssenariy uchun).
- Ranglarni skrinshotdan piksel bilan o'lcha (Guds: tugma #00AF30, fon #FAFAFA). Ikonkani o'lchab **SVG path** qilib qayta chiz — keyin bo'laklarini alohida animatsiya qilsa bo'ladi (logo yig'ilishi).

## 2. Kompozitsiya tuzilmasi (bitta fayl, bitta uzluksiz "kadr")
- `#camClip` (mask, harakatsiz) → `#cam` (transform-origin 0 0; x/y/scale = virtual kamera) → `#phoneWrap` → `#screen` (568×1268, radius 62) → `#ui` (390×871 **pt**, `transform: scale(1.4564)`). UI CSS'ini iPhone pt birliklarida yoz (16px shrift = 16pt) — oddiy va aniq.
- Kamera fokus formulasi: `fx = SX + ux·K`, `fy = SY + uy·K`; `x = 540 − s·fx`, `y = ty − s·fy` (ty ≈ 1160 — taglavha zonasidan pastda). Zoom 1.35–1.75, 0.8–0.95 s, `power2.inOut`.
- ⚠ **Taglavha ustidagi zoom muammosi:** scrim gradient yetmadi — kattalashgan telefon matni sarlavha ortidan ko'rinib qoldi. Yechim: kamera qatlamini **harakatsiz wrapper**ga o'rab `mask-image: linear-gradient(transparent 405px → #000 548px)`. Maskani transform bo'ladigan `#cam` ga qo'yma — u ham kattalashib ketadi.
- Ekranlar `.scr` (`z-index: 2` — har biri o'z stacking context'i, aks holda bitta ekrandagi `z-index:33` sheet keyingi ekran ustiga chiqadi).
- Tap-doira: 46pt oq 55% doira + halqa (scale 0.7→2.5, opacity → 0), `#ui` ichida — kamera bilan birga kattalashadi. Swipe = doira y bo'ylab suriladi.
- Matn terish: har harf `<span style="display:none">` + `tl.set(span,{display:"inline"}, t)` (seek-xavfsiz). Klaviatura tugmasi bosilishi `backgroundColor` flash.
- ⚠ Bir tugma tez-tez bosilsa (ll, e…e) flash tween'lari ustma-ust tushadi → `gsap_tween_tail`. Yechim: bosishlarni yig'ib, oxirida har tugma uchun keyingi bosishgacha qisqartirilgan release yasash (`buildKeyFlashes`).
- Boshlang'ich holatlar `gsap.set(...)` bilan (timeline ichida `tl.set(…,0)` emas — lint `gsap_timeline_set_initial_hide`).

## 3. Ssenariy (TZ "registratsiya → katalog → buyurtma → CTA")
Intro: ikonka bo'laklari yig'iladi → nom + "ilovasidan qanday foydalaniladi?" → ikonka **telefon splash'iga uchib tushadi** (shared element) → drop'da login ochiladi. Har qadam: chip "1-QADAM" + sarlavha (kalit so'z to'q sariq) + almashib turadigan podskazka (har amalga bitta), tepada 3 bo'lakli progress. Yakun: ikonka + nom + shior + App Store / Google Play nishonlari + nishonga tap, telefon kichrayib pastda.

## 4. Ovoz
- Hodisalar kod ichida `sfx(t, kind)` bilan yig'iladi → `<script type="application/json" id="sfxdump">` ga yoziladi → `chrome --headless=new --dump-dom file:///…index.html` bilan olinadi (Playwright kerak emas) → `tools/build_audio.py` (kind → fayl/gain, peak_t ga joylash, −14 LUFS).
- Diktorsiz videoda balansni **musiqaga nisbatan** o'lcha (SFX 50 ms RMS − musiqa 400 ms RMS): tap ≈ +2 dB, klaviatura ≈ −8, kamera whoosh ≈ −12, bildirishnoma/success ≈ 0. Birinchi urinishda tap −8 dB chiqdi (eshitilmas edi).
- Tonal SFX'ni FFT bilan tanla: `maxkim_Уведомление` (880/1760 Hz chime), `best-sms-tone` (E4, SMS uchun), `maxkim_Выбор меню` (C#6 blip — success).

Bog'liq: [[Dastur reklamasi - o'z ilovasidan kadr konveyeri]] · [[Namuna tahlili - McDonald's ilova reklamasi]] · [[Motion doktrinasi]] · [[HyperFrames GSAP tuzoqlari]] · [[SFX kutubxonasi (foydalanuvchiniki)]]

Markaz: [[Motion design]]

## Davomi (2-qism) — 2026-10-20 saboqlari
- Foydalanuvchi ilova ekran yozuvini "bilishing uchun" yuborsa: 1 fps kontakt varaqlar (`fps=1,scale=300,drawtext=pts,tile=6x2`) → hamma ekranni ko'r → kerakli kadrlarni to'liq o'lchamda olib, matnni aniq ko'chir (px / (590/390) = pt).
- Ilovadagi rastr illyustratsiyalar (3D rasmlar) — yozuvdan qirqib, 2× Lanczos + UnsharpMask; oq kartochkadagilar chok bermaydi, rangli fondagisiga alfa feather.
- Seriya davomi: progress 6 bo'lak, avvalgi 3 tasi och to'q sariq (bajarilgan), chiplar 4/5/6-QADAM — tomoshabin "davomi"ni darrov tushunadi. Musiqa va drop (5.0 s) bir xil — seriya ovozi.
- ⚠ "Orqaga" navigatsiyada ekranlarning DOM tartibi: oldingi ekran (DOMda pastroq) keyingisining ostida qoladi — orqaga qaytishda ustdagi ekranlarni yashir yoki o'ngga sur.
- Qorong'i ekranlarda (xarita) status bar rangini oqqa almashtir (`currentColor` SVG + `tl.set(#statusBar,{color})`).
- Yozuvdagi haqiqiy foydalanuvchi ismi doim test ism bilan almashtiriladi.
