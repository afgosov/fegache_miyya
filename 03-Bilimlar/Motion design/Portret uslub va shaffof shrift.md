---
tur: bilim
sana: 2026-10-21
teglar: [motion, shablon, mediazone, portret, shaffof-shrift, difference, reels, qoida]
---
# Portret uslub va shaffof shrift (Mediazone shabloni)

Foydalanuvchi 2026-10-21 da 2 ta kadr yuborib o'rgatdi: "TEXNIKALAR" (kamera ekrani) Reels'i. Ikkala kadr **piksel bo'yicha o'lchandi** va skript bilan qayta yasalib, namunaga solishtirildi (soya ±3 daraja, logo siyoh massasi 36.7/37.4).

## ⭐ Buyruqlar (foydalanuvchi shunday aytadi)
| Foydalanuvchi aytsa | Nima qilaman |
|---|---|
| **"portret uslubda montaj qil"** | Krem fon + video 69% kartochka (yumaloq burchak, soya pastki-chapga) + tepada MEDIA ZONE / Media studio logo + diafragma ikonka. Skript: `--rejim portret` |
| **"shaffof shrift bilan montaj qil"** | Sarlavha **Difference** (farq) rejimida: fon qora joyda och lavanda, yorug' joyda teskari (qora/rangli) ko'rinadi. Skript: `--matn` |
| Ikkalasi birga | Matn videoning ichida (kartochka bilan birga kichrayadi), keyin portret ramka. Namunadagi holat aynan shu |

## 1. Portret kadr anatomiyasi (1080×1920)
- **Fon:** krem `#FEFBF0` (254,251,240), tekis, tekstura yo'q.
- **Kartochka:** butun 9:16 video **69.4% ga kichraytirilgan, aniq markazda**: x 165, y 295, 750×1330. Burchak radiusi **30 px** (kartochka eni 4%). Gorizontal video bo'lsa — markazdan 9:16 qirqiladi.
- **Soya:** qora, shaffoflik 60%, Gaussian σ 22 px, siljish **(−40, +34)** → asosan chap va pastda ko'rinadi, o'ng va tepada deyarli yo'q. Premiere/AE: Drop Shadow, Direction ≈ 230°, Distance ≈ 52, Softness ≈ 60, Opacity 60%.
- **Logo (chap tepada):** `MEDIA/ZONE` — Helvetica **Black**, 2 qator, bosh harf 26 px, qatorlar orasida 1 px; qiyshiq **/** chiziq (parallelogram, eni 10.5 px); `Media/studio` — Helvetica **Light**. Rang iliq kulrang `#7E7D76`. Siyoh chegarasi: x 120–340, y 204–257.
- **Ikonka (o'ng tepada):** 6 pardali kamera diafragmasi, markaz (904, 230), diametr 70 px, rang `#7E7D76`. Tuzilishi: kulrang disk → ichida 0.91R da ingichka krem halqa → 6 parda orasida krem chiziqlar (0.05R) → markazda krem olti burchak (0.34R), ko'zgu tomoni va 21° burilish namunaga moslangan.
- Logo + ikonka bir qatorda (markaz y 230), kartochka ustidan 40 px bo'shliq.

## 2. Shaffof shrift (Difference matn)
- **Rejim:** `Difference` (CapCut: Смешивание → Разница; Premiere: Opacity → Blend Mode → Difference; AE: layer mode Difference). Formula: natija = |rang − fon|. Shaffoflik 100%.
- **Isbot (o'lchov):** gilam (70) ustida harf (155,161,185); qora kamera (10) ustida (213,220,243); oq ekran (235,255,255) ustida (4,21,6) — hammasi rang `#E2E5FA` (226,229,250) bilan farq formulasiga to'liq mos.
- **Shrift:** grotesk, o'rta-qalin (shtrix = bosh harfning 17.6%), harflar deyarli tegib turadi. Eng yaqin: **Inter Tight SemiBold**, tracking **−3%** (Premiere −30). O'zbek lotin/kirill va ʻ bor. Katta harf bilan.
- **O'lcham va joy:** bosh harf balandligi video balandligining 6% (1920 da **115 px**), so'z eni ≤ 86% (uzun so'z avtomatik kichrayadi, qisqa so'z kattalashtirilmaydi). Gorizontal va vertikal markazda.
- **Animatsiya (bizning qo'shimcha, doktrinaga mos):** harflar niqob ichidan pastdan ko'tariladi (power3.out, 0.62 s, 0.03 s oraliq), oxirida tepaga chiqib ketadi (power3.in, 0.38 s). Nafas olish/sekin zoom yo'q.
- ⚠️ **Zaif joyi:** fon o'rta kulrang (~110–130) bo'lsa farq ≈ 0 → matn yo'qoladi. Matnni qorong'i yoki juda yorug' joyga qo'y. Skript buni o'lchab `[!] past kontrast` deb ogohlantiradi. To'yingan rang ustida (ko'k osmon) harf teskari rangga (to'q sariq) kiradi — bu effektning tabiati, namunada ham yashil bo'lgan.

## 3. Kirish animatsiyasi (bizning qo'shimcha)
0–0.35 s video to'liq ekranda (hook) → 0.85 s ichida kartochkaga kichrayadi (power4.inOut, burchak 0→30, soya paydo bo'ladi, **motion blur 5 sub-kadr, 180°**) → logo chapdan siljib chiqadi, diafragma −120° dan burilib joyiga tushadi (power3.out). O'chirish: `--kirish-anim yoq`.
- SFX (foydalanuvchi kutubxonasidan, [[SFX kutubxonasi (foydalanuvchiniki)]]): kichrayish o'rtasida `whoosh/Swoosh.MP3`, diafragma burilganda `kamera_chaqnash/Camera shutter.MP3`, har sarlavha kirishida `matn_animatsiya/5 межбуквенное`. O'lchangan: −26…−30 LUFS (ovozdan 12+ LU past). O'chirish: `--sfxsiz`.

## 4. Skript (tayyor, sinalgan)
`C:/Users/Admin/ObsidianMiya/.claude/tools/portret.py` (git'da). Assetlar: `.claude/assets/portret/` (Helvetica OTF'lar, namuna kadrlari, `solishtirish.png`).
```bash
# portret + shaffof shrift
python -X utf8 portret.py kirish.mp4 chiqish.mp4 --matn "1.9-5.6=TEXNIKALAR"
# faqat shaffof shrift (to'liq ekran, 1-kadrdagidek)
python -X utf8 portret.py kirish.mp4 chiqish.mp4 --rejim toliq --matn "0.5-4.5=TEXNIKALAR"
# 2 qator, joy va o'lcham: "|" qator, "@0.42" balandlik, "#0.9" o'lcham
python -X utf8 portret.py k.mp4 c.mp4 --matn "12.5-16.5=YORUG‘LIK|SIRLARI@0.42#0.9"
# plan.json: {"rejim":"portret","kirish_anim":"0.35:0.85","matnlar":[{"t0":0.5,"t1":4,"matn":"STUDIYA","y":0.45}]}
python -X utf8 portret.py k.mp4 kadr.png --kadr 2.5      # bitta kadr, tez tekshiruv
```
- Ichida: ffmpeg dekod (lanczos, cover-crop, CFR) → Python/numpy (matn → ramka) → x264 CRF 17, BT.709 → manba ovozi + SFX miksi (apad bilan). O'qish/hisob/yozish parallel oqimlarda: 20 s video ≈ 26 s.
- Kerning HarfBuzz (`uharfbuzz`, o'rnatilgan) orqali; yo'q bo'lsa kerningsiz ishlaydi.
- Montaj (kesish, rang, musiqa) **oldin** qilinadi, bu skript oxirgi qatlam. Musiqa qo'shilsa — avval montaj qilingan videoga, keyin `portret.py`.

## 5. Topshirishdan oldin tekshir
1. `--kadr` bilan sarlavha o'rtasidagi kadrni ko'r: matn o'qiladimi (o'rta kulrang fon emasmi)?
2. Kartochkada yuz/mahsulot markazda qoldimi (gorizontal videoda markazdan qirqiladi).
3. Kirish animatsiyasi kerakmi? Bir xil seriyada hamma videoda bir xil bo'lsin.
4. Davomiylik manba bilan teng (`ffprobe`), ovoz bor, SFX baland emas.

Bog'liq: [[Motion doktrinasi]] · [[Montaj shriftlari]] · [[Tayyor Reels shablonlari]] · [[Video montaj texnik xatolari]] (#148–149) · Markaz: [[Motion design]] · [[Video montaj]]

## Rang tanlash (2026-10-21, Lucem v3 — foydalanuvchi: "rangni to'g'ri tanla")
- Difference natijasi = |matn − fon|. Natija rangini **fon rangidan teskari hisobla**: oq/och devor (≈225) ustida brend pushti (205,17,117) kerak bo'lsa matn = 225 − pushti ≈ **(20,215,110)**; sariq kerak bo'lsa ≈ (0,40,255).
- O'rta-to'q, rang-barang zonada (kiyim, jinsi, quti) har qanday rang xira chiqadi — matnni **bir xil yorug' yoki bir xil qorong'i** zonaga qo'y. Avval 4–5 rangni 2–3 joyda `--kadr` bilan sinab, setka qilib ko'r, keyin tanla.
- `portret_rang.py` (Lucem loyihasida): plan'da `rgb`, `x`.
