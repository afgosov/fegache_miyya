---
tur: bilim
sana: 2026-10-09
teglar: [motion, namuna, tahlil, ish-tartibi, ffmpeg, whisper]
---
# Namuna videoni tahlil qilish tartibi

Foydalanuvchi motion design o'rganish uchun namuna videolar yuboradi. Har bir video shu tartibda tahlil qilinadi va miyaga yoziladi. Kutubxona va ro'yxat: [[Motion namunalar kutubxonasi]].

## 1. Qabul qilish (videoni olish)
Foydalanuvchi videoni uch xil yo'l bilan yuborishi mumkin. Hammasi bitta skript bilan qabul qilinadi:
- **Papkaga tashlaydi:** `D:/claude_ish/namunalar/motion/_kiruvchi/`. Keyin argumentsiz ishga tushiriladi.
- **Fayl yo'lini beradi** (masalan `Desktop/claude/x.mp4`). Skript nusxasini `_kiruvchi/` ga oladi.
- **Havola beradi** (Instagram, YouTube, TikTok). Skript `yt-dlp` bilan login'siz yuklab oladi va `.info.json` ni saqlaydi (ko'rishlar, layklar, izoh).

```bash
cd "D:/claude_ish/namunalar/motion"
python -I tahlil_namuna.py                         # _kiruvchi/ dagi yangilari
python -I tahlil_namuna.py "<yo'l yoki havola>"     # bitta video
python -I tahlil_namuna.py --til en "<havola>"      # inglizcha/ruscha nutq bo'lsa
python -I tahlil_namuna.py --qayta <nom>            # qaytadan
python -I tahlil_namuna.py --oyna <nom> 6.2 6.9     # o'tishni kadrma-kadr
```
Tezlik: 35 s video ≈ 1 daqiqa (eng sekini — whisper).

## 2. Skript nima beradi (`_tahlil/<nom>/`)
| Fayl | Nima uchun |
|---|---|
| `00_umumiy.jpg` | 12 kadr: videoning umumiy ko'rinishi |
| `01_kesimlar.jpg` | Har kesimdan keyingi birinchi kadr, vaqti bilan. Tuzilmani ko'rsatadi |
| `zich/zich_SS-SSs.jpg` | Sekundiga 4 kadr (uzun videoda 2–3). **Asosiy ish shu:** harakat, matn chiqishi, kamera |
| `oyna_*.jpg` | `--oyna` bilan: 30 fps, har kadr. O'tish necha kadr davom etishini o'lchash uchun |
| `ovoz_spektr.png` | Spektrogramma. Vertikal yorqin chiziq = zarba yoki whoosh; bo'sh joy = pauza |
| `palitra.png` | 6 ta asosiy rang (ulushi bo'yicha) |
| `matn.txt` | Diktor matni, ibora vaqtlari bilan (whisper large-v3-turbo, CUDA) |
| `stats.json` | Davomiylik, o'lcham, fps, kesimlar ro'yxati, o'rtacha kadr uzunligi, harakat egri chizig'i (0.5 s), LUFS, LRA, true peak, zarbalar va bass zarbalar vaqti, **zarbaga tushgan kesimlar %**, jim joylar, palitra hex |

Ishonchsiz raqamlar:
- **BPM** — diktor musiqa ustida gapirsa ±30% adashadi (sinov: 143 chiqdi, haqiqiysi ~110). Tempni spektrdagi zarbalar oralig'idan o'zing hisobla.
- **Kesim soni** — tez motion grafikada keskin o'zgarishlar ham "kesim" bo'lib chiqadi. Rasm bilan tekshir. Teskarisi ham bo'ladi (2026-10-10, r1010_01): rangi o'xshash ikki qorong'i kadr orasidagi kesimni (16.30) skript **topmadi**. Zich varaqlarda kadr almashganini ko'z bilan tekshir.
- **Zarbadagi kesimlar %** — chegara qattiq. Kesim zarbadan 2–4 kadr kech tushsa ham hisobga olinmaydi (22% chiqdi, qo'lda ±3 kadr bilan ~70%). Zarb panjarasini onsetlar oralig'idan o'zing tuz.
- **Motion'siz reklama namunasi bo'lsa:** qo'shimcha rang o'lchovi uchun `python -I "D:/claude_ish/namunalar/reklama/rang_olchov.py" <video>` ishlat (qora/oq nuqta, to'yinganlik, soya/yorug' RGB, vinyetka). Yozuv [[Zamonaviy reklama montaji]] bo'limiga tushadi.
- **Whisper matni** — o'zbekchani taxminan yozadi ("DARAMAT KILISH HAKADA"). Ma'no bo'yicha o'zing tuzat.

## 3. Ko'rish tartibi (Claude)
1. `stats.json` + `00_umumiy.jpg` + `01_kesimlar.jpg` → janr, tuzilma, ritm.
2. `matn.txt` → ssenariy formulasi (hook, ro'yxat, CTA).
3. `zich/` varaqlarini **hammasini** ko'r. Har sahna uchun yoz: nima chiqadi, qayerdan, qanday easing, necha soniyada.
4. Har bir qiziq o'tish yoki effekt uchun `--oyna` (0.5–1 s). Shundan keyin kadrlar soni va harakat mexanikasini yoz.
5. `ovoz_spektr.png` → SFX joylari, musiqa tushishi, pauza. Kesimlar zarbaga tushadimi (`zarbadagi_kesimlar_foiz`)?
6. `palitra` → rang olami (hex).

## 4. Miyaga yozish (har video — alohida yozuv)
Fayl: `03-Bilimlar/Motion design/Namuna tahlili - <qisqa nom>.md`. Namunalar: [[Namuna tahlili - McDonald's ilova reklamasi]], [[Namuna tahlili - Digital Forum promo]].

Bo'limlar:
1. **Pasport:** fayl yo'li, manba (havola, muallif, ko'rishlar), texnik raqamlar, janr, maqsad.
2. **Asosiy sir:** 3–5 punkt. Bu videoni kuchli qiladigan narsalar.
3. **Tuzilma jadvali:** Vaqt | VO | Nima bo'ladi.
4. **O'tishlar va effektlar katalogi:** har biri uchun nomi, mexanikasi, **kadrlar soni**, easing.
5. **Tipografiya:** shrift turi (va bizdagi o'xshashi), ierarxiya, chiqish animatsiyasi.
6. **Rang olami:** hex kodlar.
7. **Kamera:** push-in, pan, shake, world-space matn.
8. **Ovoz:** musiqa turi, SFX joylari, LUFS, pauzalar, kesimlar zarbagami.
9. **Ssenariy formulasi.**
10. **HyperFrames'da qila olamizmi:** foiz, ✅/⚠️ ro'yxati, qaysi skill yoki effekt bilan.
11. **O'zimizga qanday qo'llaymiz:** qaysi mijozga, nimani olamiz, nimani olmaymiz ([[Video montaj uslubi]]).

Keyin:
- Yangi usul bo'lsa → [[Effektlar katalogi]] yoki [[Professional kesim texnikalari]] ga bir qator qo'sh (namunaga havola bilan).
- Yangi formula bo'lsa → [[Tayyor Reels shablonlari]].
- [[Motion design]] markazidagi "Namuna tahlillari" ro'yxatiga, [[Motion namunalar kutubxonasi]] jadvaliga va Indeksga qo'sh.

## 5. Foydalanuvchiga javob
U ham o'rganmoqchi (Foydalanuvchi). Chatda qisqa yoz:
- 3–5 ta eng muhim usul. Har birining **nomi + qanday ishlaydi**, sodda tilda.
- "Bizda qanday qilamiz" — bir jumla.
- Kerak bo'lsa bitta kadr varag'ini ko'rsat.
Uzun jadvallar chatga emas, miyaga yoziladi.

## Texnik tuzoqlar (skriptni yozishda topilgan)
- **Letterbox (9:16 ichida 16:9, qora chiziqlar) namuna** (2026-10-16, n1016_04): skript butun kadr bo'yicha 1 ta kesim topdi (aslida ~33). Avval `cropdetect=24:2:0` bilan faol maydonni top, keyin `crop=W:H:X:Y,select='gt(scene,0.12)'` bilan kesim va `crop` bilan kadr varaqlari. Shevali nutq bo'lsa turbo emas, large-v3 `-l uz` o'qi ([[Shevali nutq transkripsiyasi]]).
- ffmpeg `drawtext` matnida `%{pts:hms}` ning `:` belgisi **qochirilishi shart**: `%{pts\:hms}`. Qochirilmasa ffmpeg xato bermaydi, lekin varaq umuman yaratilmaydi.
- `-copyts` bilan `-t` ni chiqish tomoniga qo'ysang, hamma kadr tashlanadi. `-ss T -t D -copyts -i fayl` (kirish tomonida) ishlat.
- `scipy.signal.resample_poly` nisbati: 22050 → 16000 = `320/441` (160/441 emas — 8 kHz bo'lib qoladi va whisper bitta bema'ni segment beradi).
- numpy `float32` ni `json.dumps` yozolmaydi → `float()` yoki `default=float`.
- Whisper `-l auto` o'zbekchani rus yoki fors deb oladi ("Субтитры сделал DimaTorzok" kabi xayoliy matn chiqadi). Standart `uz` ([[Video montaj texnik xatolari]] #25).

Markaz: [[Motion design]] · Bog'liq: [[Video montaj vositalari]] · [[ffmpeg retseptlari]]
