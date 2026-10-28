---
tur: bo'lim
sana: 2026-10-29
teglar: [bilim]
---
# 📚 Bilimlar

Bo'lim markazi: [[🧠 Miya]].

## Markazlar
- [[Video montaj]] — 🎞️ montaj bilimlari markazi (59 yozuv)
- [[Motion design]] — 🎬 motion grafika markazi (32 yozuv)

## Montaj — qo'shimcha
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

## CS 1.6 va CS Skin Studio
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
