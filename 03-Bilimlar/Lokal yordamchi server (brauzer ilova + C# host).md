---
tur: bilim
sana: 2026-10-15
teglar: [csharp, http, xavfsizlik, chrome-app, arxitektura]
---
# Brauzer ilovasiga fayl tizimi kerak bo'lsa: C# lokal host

Brauzer (file:// yoki https) diskni qidira olmaydi va ixtiyoriy papkaga yoza olmaydi. [[CS Skin Studio]] 1.1 dagi yechim — ishga tushiruvchi exe o'zi kichik HTTP server.

## Tuzilma (`installer\Host.cs`, faqat .NET Framework 4.8 + csc)
- `TcpListener(IPAddress.Loopback, 47615..47640)` — oddiy HTTP/1.1 (Connection: close), `ThreadPool` har ulanishga. `HttpListener` ishlatilmadi (URL ACL / admin muammosi bo'lmasin).
- Chrome/Edge: `--user-data-dir=%LOCALAPPDATA%\<App>\Browser --no-first-run --app="http://127.0.0.1:PORT/?t=TOKEN"`. **Port o'zgarmas** bo'lishi kerak — aks holda origin o'zgarib IndexedDB (kolleksiya) yo'qoladi.
- Bitta nusxa: `Mutex("Local\\…")`; ikkinchi ishga tushishda `host.json` (port, token) o'qilib, o'sha serverga yangi oyna ochiladi.
- Umr: brauzer jarayoni yopilsa yoki sahifa `pagehide` da `sendBeacon('/api/bye?t=')` yuborsa → 6 s keyin chiqadi; ping (10 s) yo'q bo'lsa 3 daqiqadan keyin. Fon tabda Chrome taymerlarni 1 daqiqaga sekinlatadi — timeout'ni katta qil.
- JSON: `System.Web.Script.Serialization.JavaScriptSerializer` (`/r:System.Web.Extensions.dll`, `MaxJsonLength = int.MaxValue`). Katta fayllar JSON emas, **xom PUT body**.

## Xavfsizlik (sinalgan)
- `Host` sarlavhasi faqat `127.0.0.1:PORT`/`localhost:PORT` (DNS rebinding), `Origin` begona bo'lsa 403.
- Har `/api/*` uchun `X-Token` (tasodifiy 128 bit); `<img src>` uchun faqat GET'da `?t=` ruxsat.
- Yo'llar: CS papkasi `IsCsInstall` bilan tekshiriladi, `rel` da `..`/absolyut yo'q, faqat `cstrike*` ichida; skin id `^[A-Za-z0-9_-]+$`, fayl nomi `GetFileName(name)==name` + kengaytma ro'yxati.
- Faylni almashtirish: `.tmp` ga nusxa → `File.Replace`; read-only bo'lsa avval olib tashlanadi.

## Native dialog
`FolderBrowserDialog` alohida **STA** oqimda, egasi — ko'rinmas `TopMost` forma (aks holda Chrome orqasida qoladi).

## Sinov usuli
⚠️ Sinov rejimi ishlab turgan dasturdan **ajratilgan bo'lishi shart**: avval `--serve` ham o'sha mutex/port/host.json'ni ishlatgan — foydalanuvchining ochiq dasturi javob berdi va unga yangi oyna ochildi. Endi `--serve` → alohida mutex (`…HostTest`), port 47700+, `host_test.json`.
Yangilashdan oldin: oyna sarlavhasini tekshir (`● fayl.mdl` yoki model nomi = foydalanuvchi ishlayapti) — ishlayotgan bo'lsa majburan yopib yangilama, Setup'ni yubor.
`--serve` kaliti (brauzer ochmaydi) → `host_test.json` dan port/token → PowerShell `Invoke-RestMethod` + Playwright `http://127.0.0.1:PORT/?t=…`. Haqiqiy o'yin o'rniga **soxta CS papkasi** (hl.exe bo'sh fayl + liblist.gam + models nusxalari).

## Minglab fayl ro'yxati (2026-10-15, CS modellari galereyasi)
- Har faylni ochib sarlavha o'qish 2400 faylda **25 s** bo'ldi (antivirus har ochishni tekshiradi). `DirectoryInfo.EnumerateFiles(..., AllDirectories)` — o'lcham/vaqt papka ro'yxatidan, ochishsiz → **0.5 s**. Faylni faqat shubhali holatda (4 bayt) och.
- **Xato:** `…01.mdl` animatsiya fayllarini faqat nom bo'yicha (`\d\d$` + asosiy fayl bor) chiqarib tashlash haqiqiy skinlarni ham yashirdi (`v_m4a120.mdl` yonida `v_m4a1.mdl`). **To'g'ri:** nom faqat nomzod tanlaydi, qaror — fayl sehrli so'zi (`IDSQ`).
- Rasmlar uchun alohida WebGL2 konteksti (muharrir holatiga tegmaydi), faqat ko'rinayotgan kartalar (IntersectionObserver), natija IndexedDB'da Blob (kalit: yo'l+o'lcham+vaqt).
- O'yin papkasiga yozishda `File.Copy`/`File.Replace` ba'zan «fayl boshqa jarayon tomonidan band» deydi (antivirus yangi faylni tekshirayotgan lahza) → `Retry` (10 marta, 60…460 ms) + `File.Replace` o'xshamasa oddiy `File.Copy` ustidan. O'yinni ochishdan oldin exe ni PE sarlavhasi bo'yicha tekshir → [[Process.Start ShellExecute xato oynasi]].
- Brauzerdagi video: `canvas.captureStream(30)` + `MediaRecorder("video/mp4;codecs=avc1.42E01E")` — Chrome MP4 yozadi (Instagram/Telegram uchun). Fon rejimida rAF sekinlashadi; uzun ishlarda `MessageChannel` bilan `yield`, PNG uchun sinxron `toDataURL` (toBlob kechikadi).
- Versiya ko'targanda `Version` konstantasi bilan birga `[assembly: AssemblyVersion/AssemblyFileVersion]` ni ham o'zgartir — aks holda exe xususiyatlarida eski raqam qoladi.

Bog'liq: [[Windows installer - o'rnatilgan csc bilan]] · Lokal API himoyasi va ffmpeg CFR · [[CS 1.6 spray va o'yin fayllari]]

- Host `Html()` natijani `htmlKesh` da saqlaydi: `app\CS Skin Studio.html` almashtirilsa, sahifani yangilash yetmaydi — host jarayonini qayta ishga tushir (token ham yangilanadi).

- Android WebView (emulyator) ichma-ich `color-mix(in srgb, var(--x) 24%, transparent)` ni tushunmaydi, agar `--x` ning o'zi `color-mix` bo'lsa — qiymat "computed-time invalid" bo'lib, border `currentColor` (oq) ga tushadi. Ilovada aniq hex+alfa (`#e8b55d3d`) ishlat.

- catbox.moe (2026-10-21) ishonchsiz chiqdi: API bo'sh javob qaytardi, saqlangan fayl 0 bayt (Content-Length 0). Foydalanuvchi rasmlari uchun o'z server (fegache.uz galereya xizmati) ishonchliroq. Bash'dan `powershell -File host_test.ps1 | tail` chaqirilsa, Start-Process qilingan host.exe pipe'ni ushlab qoladi va buyruq osilib qoladi — hostni PowerShell vositasidan ishga tushir.
