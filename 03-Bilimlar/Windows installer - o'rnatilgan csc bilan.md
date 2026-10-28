---
tur: bilim
sana: 2026-10-15
teglar: [windows, installer, csharp, winforms, setup]
---
# Windows o'rnatuvchi (Setup.exe) — hech narsa yuklamasdan

[[CS Skin Studio]] uchun sinalgan. Inno Setup/NSIS shart emas: Windows'da `.NET Framework 4.8` va `csc.exe` bor.

## Tuzilma (`D:\CS Skin Studio\installer\`)
- `Launcher.cs` → `CS Skin Studio.exe`: Chrome/Edge'ni (App Paths registri + standart yo'llar) `--user-data-dir=%LOCALAPPDATA%\<App>\Browser --no-first-run --no-default-browser-check --app="file:///…html"` bilan ochadi. Alohida profil = alohida oyna, o'z xotirasi.
- `Setup.cs` → bitta `Setup.exe`: fayllar **ichki resurs** (`/resource:yo'l,nom` → `GetManifestResourceStream`). WinForms qorong'i oyna, papka tanlash, ish stoli + Pusk yorlig'i (`WScript.Shell` COM, reflection `InvokeMember`), `HKCU\…\Uninstall\<Key>` (DisplayName, DisplayIcon, UninstallString, EstimatedSize, NoModify/NoRepair).
- O'zini `Uninstall.exe` sifatida nusxalaydi; o'chirishda o'z papkasini `cmd /c ping 127.0.0.1 -n 3 > nul & rmdir /s /q "<dir>"` bilan keyin o'chiradi.
- Kalitlar: `/S` jim o'rnatish, `/uninstall /S` jim o'chirish, `/purge` foydalanuvchi ma'lumotini ham, `/dir=…`.
- `build.ps1`: `csc /codepage:65001 /target:winexe /win32icon:icon.ico /win32manifest:app.manifest /r:System.Windows.Forms.dll /r:System.Drawing.dll`.

## Muhim
- **Manifest `asInvoker` majburiy** — nomida "setup" bo'lgan exe'ni Windows aks holda administrator so'rab ishga tushiradi. Per-user papka: `%LOCALAPPDATA%\Programs\<App>`.
- csc 4.8 = **C# 5**: `$"…"`, `?.`, `nameof` yo'q.
- Pillow yozgan `.ico` ichidagi kadrlar **PNG** → `new Icon(...).ToBitmap()` `ArgumentOutOfRangeException (BmpFrame)` bilan yiqiladi. Oyna ikonkasi: `Icon.ExtractAssociatedIcon(exe)`, sarlavha rasmi: alohida `logo.png` resurs.
- Ishga tushishda yiqilsa: `Get-WinEvent` Application log, `.NET Runtime` provayderi — to'liq stack shu yerda.
- Sinov: jim o'rnatish → fayllar/registr/yorliqlar → `Uninstall.exe /uninstall /S` → hammasi yo'qolganini tekshir → qayta o'rnat.
- Imzosiz exe boshqa kompyuterga Telegram/brauzer orqali borsa SmartScreen chiqadi: «Подробнее → Выполнить в любом случае».

Bog'liq: [[CS Skin Studio]] · [[GoldSrc MDL formati va skin muharriri]] · Bir buyruqli o'rnatish skriptlari (Win+Mac)
