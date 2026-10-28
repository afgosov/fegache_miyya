# Indeks — barcha xotiralar ro'yxati

> Claude: har sessiya boshida shu faylni o'qi. Har yangi yozuvni shu yerga bir qator qilib qo'sh.
> Montajdan oldin: [[Montaj qizil chiziqlar]] → [[Video montaj]] → [[Motion design]].

## ❌ Xatolar (qaytarmaslik kerak)
- ⛔ [[Montaj qizil chiziqlar]] — MAJBURIY: foydalanuvchi qaytargan 20 ta montaj xatosi (×N bilan) + topshirishdan oldingi 9 bandli tekshiruv; hook 1-bo'lakda yuklaydi (2026-10-26)
- [[HyperFrames GSAP tuzoqlari]] — lint o'tadi, render buziladi: fromTo, timeline'dagi ambient, wrapper opacity
- [[Telegram Web dan fayl yuklash tuzoqlari]] — Chrome 1 tab = 1 yuklash (aylanib o'tma, bitta zip), saveDoc, NFD nomlar, `__.cube` Mac izi
- [[Video montaj texnik xatolari]] — whisper kanallari, GSAP letterSpacing, matn odam orqasida, loudnorm SFX, SFX boshidagi jimlik, mahsulotni yopmaslik; #119–131: dubl ulanishida takror/kesilgan gap, nutq boshi, "a", ≤60 s target, subtitr parallel, chizilgan quti yo'q
- [[3D nakleyka ramkasi cho'zilishi va to'xtab qolishi]] — yonbosh yuza → kameraga qaratish, chetda erkin surish, tutqich radiusi nakleyka o'lchamiga
- [[Android emulyator va WebView tuzoqlari]] — preview emulyator, lambda stubs, WebGL bufer (kanvasni 1px silkitish), SAF oynasi, sun'iy offsetX, chooser o'ziga qaytishi
- [[Process.Start ShellExecute xato oynasi]] — exe ochishda UseShellExecute=false, ErrorDialog=false; aks holda modal oyna so'rovni osadi
- [[Server paroli buyruq qatoriga yozilib ketdi]] — scp uzilgach parol shell qatoriga tushdi; skript endi qayta urinadi va yashirin so'raydi
- [[Telethon sessiya fayli bor, lekin kirilmagan]] — sessiya fayli bor ≠ kirilgan; --holat bilan tekshirish, qayta --kirish

## 🎓 Darslar (foydalanuvchi o'rgatgan)
- [[Bitta ish papkasi - claude_ish]] — ⚠️ MAJBURIY: oraliq hamma narsa `D:\claude_ish\loyihalar\YYYY-MM-DD_nom`, mijoz papkasiga faqat `TAYYOR\`; eski `_papka` → yangi joy jadvali
- [[Instagram Reels namunalari]] — hook, matn odam orqasida, punch-in, CTA
- [[Portret uslub va shaffof shrift buyrug'i]] — "portret uslubda montaj qil" = krem fon + kartochka; "shaffof shrift" = Difference sarlavha
- [[Video montaj uslubi]] — sokin musiqa, kam ikonka, och yashil + oq, bachkana emas, tayyor MP4 topshir
- [[Dastur interfeysi - qisqa va sodda yozuvlar]] — tugmalarda 1–2 so'z («Text», «OK», «CS2»), izoh tooltip'da; V = oddiy kursor

## 📚 Bilimlar
- [[Video montaj]] — 🎞️ markaz: nazariya, hikoya, subtitr, rang, ovoz, SFX, Reels talablari, ffmpeg, yorug'lik (59 yozuv)
- [[Motion design]] — 🎬 markaz: doktrina, easing, kesim texnikalari, effektlar katalogi, uslublar, tayyor shablonlar (32 yozuv)
- [[After Effects va Claude]] — AE'ni ulash: .jsx skript (AfterFX.exe -r) yoki community MCP server; rasmiy Adobe konnektori AE'ni boshqarmaydi
- [[AI bilan motion video qo'llanmasi]] — Remotion, SFX'ni animatsiyaga bog'lash
- [[Instagram raqobatchi tahlili konveyeri]] — ⭐ Chrome grid'dan reel+ko'rish (CAP 300, fon loop), yt-dlp top-6, large-v3-q5 `-mc 0` matn, reklama = layk≈3
- [[Instagram reelni haqiqiyligini tekshirish]] — yt-dlp + kadr kesish, terminal matnini o'qish; cd uzun yo'l tuzog'i
- [[Meta ko'zoynak videolarini topish]] — Ray-Ban Meta videolari qayerda saqlanadi, ko'zoynaksiz qanday topish
- [[Sog'liq Reels formulalari (raqobatchilar)]] — ⭐ 10 profil o'lchangan: 9 format, 8 hook, mavzular, CTA; mazmun > montaj (mediana 73 s)
- [[Sony 0 baytli MP4 tiklash]] — ochilmaydigan 0 baytli Sony klipni tahlil va tiklash
- [[Soxta shaxmat fonli JPG dan shaffof PNG]] — yorqinlik ramp bilan alfa, chekka piksellarga hudud rangi; Pillow+numpy
- [[Telegram kanal va guruhlarini o'qish]] — ochiq kanal t.me/s/ + ?q= qidiruv (loginsiz), guruh = Desktop eksport; AbosyanEdits tekshiruvi
- [[Video montaj vositalari]] — HyperFrames, Whisper CUDA, Mixkit, ffmpeg
- [[Videodan musiqani olib tashlash (ovoz ajratish)]] — BS-RoFormer (audio-separator, venv_torch), video copy + MD5; GPU band bo'lsa CPU ~27 daq; SFX ham ketadi → Bandit v2 DnR
- [[Videolardan odamni yuz bo'yicha qidirish]] — rasmdagi odamni minglab videodan topish: YuNet+SFace, cv2.VideoCapture (ffmpeg spawn 1.8 s sekin), ko'z bilan tasdiqlash

### 🔫 CS 1.6 va CS Skin Studio
- [[Android APK - Gradle'siz WebView ilova]] — HTML dasturni APK ga: SDK to'g'ridan-to'g'ri, javac+d8+aapt2+apksigner, app.local intercept, fayl polifillari (istalgan joyga saqlash/ulashish/galereya), CDP bilan sinash
- [[Bepul anonim statistika (abacus) va ichki modellar]] — hisobsiz sanoq (abacus + country.is), muallif paneli PIN bilan; std modellar dastur ichida
- [[CS 1.6 cfg va pro sozlamalar manbalari]] — userconfig vs autoexec, cfg sintaksisi, buy bindlar, sm/360°, pro cfg'larni ochiq sahifadan yig'ish (2026-10-27)
- [[CS 1.6 spray va o'yin fayllari]] — tempdecal.wad formati (LOGO, 0x40, ko'k=shaffof, ≤14336 px), cstrike_hd, chap qo'l modellar ko'zgusi, CS papkasini topish algoritmi
- [[CS Skin Studio o'yinchi modelini animatsiya bilan chizish]] — terror.mdl: kiyim uslublari, gbBones animatsiya, p_ qurol suyak birlashtirish, MiniGL kadrlar
- [[Dastur funksiyasi Reels - UI holatlarini kadrlash]] — Playwright holat suratlari + kesim oynalar + soxta kursor + POV animatsiya kadrlari
- [[GoldSrc MDL formati va skin muharriri]] — CS 1.6 .mdl v10 offsetlari, tri-buyruqlar, tekstura+palitra, 3D nakleyka proyeksiyasi, 256 rang kvantlash, file:// da FS Access API
- [[Ilova 3D modelidan shaffof turntable video]] — MiniGL → PNG → VP9 alpha WebM → HyperFrames, masofa bir marta, POST-qabul server (2026-10-21)
- [[Ilovada nakleyka yopishish animatsiyasi (3D qo'nish qirqimi)]] — dastur 3D'sida nakleyka holatlari, beat'ga bog'langan kamera kadrlari, «oldin/keyin» qirqim, parvozda asl rasm (2026-10-24)
- [[Ilovada to'liq skin bo'yash animatsiyasi (qatlamlar orasida o'tish)]] — holatlar, markazlangan kamera, wipe/radial yorug' o'tish, bo'ron gain, fetch+eval yuklovchi
- [[Ilovaga obuna - karta, bot va imzolangan kalit]] — serversiz oylik obuna: noyob summa, Telegram bot, ECDSA P-256 kalit, ntfy orqali yetkazish; bank SMS'ini ntfy'dan o'tkazish bloklandi (2026-10-17)
- [[Lokal yordamchi server (brauzer ilova + C# host)]] — brauzer ilovaga disk kerak bo'lsa: TcpListener host, token + Host/Origin himoya, o'zgarmas port, umr boshqaruvi
- [[Rasm fayl turlari - jfif, avif va Android MIME]] — .jfif/.avif/.svg/kengaytmasiz rasmni tanish, katta suratni kichraytirib o'qish, Android octet-stream fayl oynasi (2026-10-28)
- [[Rastr qatlamlar - undo nuqtasidan]] — Paint.NET'dagidek qatlamlarni pushUndo farqidan qurish, o'zgarmas massivlar bilan arzon undo
- [[Saytni qidiruvda chiqarish (SEO)]] — Google/Yandex/Bing: meta, og.png, JSON-LD, sitemap, Search Console, IndexNow
- [[WebGL - ko'p bot uchun umumiy poza]] — 12 skinlangan bot: 2 umumiy poza + model matritsasi, yorug'likni teskari burish, tez rad etish (2026-10-23)
- [[Windows exe ogohlantirishi (imzosiz o'rnatuvchi)]] — Chrome «might be malware»/SmartScreen: sabab imzo va obro', SSL emas; sertifikat va bepul choralar (2026-10-24)
- [[Windows installer - o'rnatilgan csc bilan]] — yuklamasdan Setup.exe: csc + WinForms, resurs ichida fayllar, asInvoker manifest, HKCU Uninstall, jim /S, PNG-ico ToBitmap tuzog'i

## 📁 Loyihalar
### 🔫 CS Skin Studio (Fegache)
- [[CS Skin Studio]] — CS 1.6 .mdl skin muharriri: CS2 uslubidagi nakleyka, mo'yqalam, rang almashtirish, 256 rangli saqlash; `D:\CS Skin Studio`, ish stolida yorliq (2026-10-15)
- [[CS Skin Studio - 6 ta o'yin intro video (2026-10-25)]] — drill (namuna MP4), NFS MW, GTA IV, GTA V, Mortal Kombat, CoD uslubidagi 6 Reels; umumiy 3D skin to'plami
- [[CS Skin Studio - AK-47 LOWRIDER gangsta video (4-qism)]] — gangsta Reels: o'zimiz chizgan quyosh botishi shahri + gidravlikada sakraydigan lowriderlar, Deep Cover 0:21 dan, filtr bilan «drop»
- [[CS Skin Studio - AK-47 ZEVS to'liq skin video (3-qism)]] — to'liq bo'yalgan pro skin Reels (22.6 s, 60 fps): uslub + nakleyka qatlamlari, bo'ron → chaqmoq tushishi
- [[CS Skin Studio - NFS intro video]] — NFS Most Wanted uslubidagi 32 s / 60 fps promo: Blacklist, UI ekranlar, takt to'ri, shaffof 3D qurollar (2026-10-21)
- [[CS Skin Studio - sayt ochildi va strim banner video]] — eksklyuziv «Rasmiy sayt ochildi» (16:9 + Reels, qora-oltin) va OBS uchun shaffof WebM strim banneri (2026-10-23)
- [[CS Skin Studio - skin yasash video (2-qism)]] — NFS MW uslubida 44 s / 60 fps: 3 qurolga 24 ta eksklyuziv nakleyka musiqa zarbasiga yopishadi, tayyor skinlar, FEGACHE.UZ (2026-10-24)
- [[CS Skin Studio — yangiliklar Reels (2026-10-27)]] — 5 ta yangilik Reels (qatlamlar, O'yinda, cl_righthand, CFG, 2.6), musiqa va fayllar

### Montaj yo'nalishlari
- [[glow.rustamov uslubini o'rganish]] — 34 Reels yuklandi va tahlil qilindi → [[glow.rustamov uslub pasporti]]
- [[Motion namunalar kutubxonasi]] — foydalanuvchi yuboradigan o'quv videolari: `_namunalar/motion/_kiruvchi/`, tahlillar jadvali (2026-10-09)
- [[Reklama montaj yo'nalishi]] — motion'siz zamonaviy reklama montajini o'rganish; vositalar `_namunalar/reklama/`, footage papkasi hali aytilmagan (2026-10-10)
- [[YouTube uzun video yo'nalishi]] — YouTube darsliklari montajini o'rganish; material papkasi hali aytilmagan (2026-10-09)

### Namunaviy montaj loyihalari
- [[Express mebel 4 kamerali podkast (21.10.2026)]] — 4 kamera, 3 kishi: ovoz sinxroni + gapiruvchi kamerasi (lab 98%), Premiere XML 2 sequence + petlichka stem'lari (2026-10-26)
- [[Express Mebel loyiha hikoyasi (C5202)]] — direktor intervyusi (74.7 s, ikki planli xom) → 8 motion sahna + bosqich treki + B-roll + typewriter lower-third, teal brend; B-roll trek + RAILW oynalari texnikasi (2026-10-12)
- [[Gulkam Resort steyk reklamasi]] — 1-motion'siz reklama: 51 klipdan 43.2 s, Mixkit "Deep Urban", drop olovga, logotipsiz blur+dim yakun (2026-10-10)
- [[Iskander Buildings - biznes noturar joy (24.10.2026)]] — 41 klip → 4 video: serif kinetik matn, Flow AI 'bino o'sadi' insertlari (2026-10-25)
- [[NEIROZOL 27.10 - 12 ssenariy (Production Manager)]] — 12 ssenariy: dubllarni bir nechta klipdan yig'ish, 50/50 labirint/kubik, subtitr↔ekran yozuvi avtomat (14b), Telegram bot orqali fayl (2026-10-28)
- [[NEIROZOL Reels]] — Mediazone reklama montaji, 5 video; eng so'nggisi "Domino effekti" (oila, 3D + SFX, 2026-10-06)
- [[Premier Uzbekistan Reels (Primer papka)]] — 82 klip → 4 ssenariy + 1 bonus, klassik (motion'siz) @premieruzbekistan uslubida; gaz plita = Elegance, dudbo'ron VO yo'q (2026-10-16)
- [[Qashqadaryo Qarshi lampa brendlari otziv (Akfa Reels)]] — YouTube kollaj tizer, 6 javob, The Journey musiqasi, arnndn 35 ms topilmasi, 60 s (2026-10-28)
- [[Vesta Quadro (Akfa Lighting) Reels]] — shaffof shrift 5 ta + texnik pasport overlay, cutaway EDL, 44 s (2026-10-21)
- [[YouTube darslik C0100 (Noon Academy)]] — 1-YouTube darslik: 16 daq → 10:50, 7 motion + overlay, 4K MP4 + chapterlar (2026-10-10)

Markaz: [[🧠 Miya]]
