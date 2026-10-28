---
tur: xato
sana: 2026-10-15
teglar: [csharp, windows, process, test]
---
# Process.Start (UseShellExecute=true) xato oynasi chiqaradi va so'rovni to'xtatadi

**Nima bo'ldi:** [[CS Skin Studio]] xostiga «▶ O'ynash» (`/api/cs/launch`) qo'shdim va soxta CS papkasida (bo'sh `hl.exe`) sinadim. `Process.Start(new ProcessStartInfo(exe) { UseShellExecute = true })` Windows'ning modal oynasini chiqardi («Неподдерживаемое 16-разрядное приложение») — HTTP so'rov 2 daqiqa osilib qoldi, oyna foydalanuvchi ekranida turdi. Xost jarayonini o'ldirib yopdim.

**Sabab:** ShellExecute noto'g'ri/buzuq exe uchun GUI xato oynasini ko'rsatadi va qaytmaydi.

**Takrorlandi shu kuni:** `UseShellExecute = false, ErrorDialog = false` ham yordam bermadi — «16-bit ilova» oynasini tizim (CreateProcess) chiqaradi.

**To'g'ri yo'l:**
- Ishga tushirishdan **oldin exe ni tekshir**: `MZ` + `e_lfanew` (0x3C) dagi `PE\0\0` imzosi. Yaroqsiz bo'lsa — darhol 400 xato, jarayon umuman yaratilmaydi (`IsWinExe` funksiyasi, Host.cs).
- Qo'shimcha: `UseShellExecute = false, ErrorDialog = false`.
- Haqiqiy dasturni (o'yinni) ochadigan endpointni foydalanuvchining haqiqiy papkasida sinama; soxta papkada esa avval yuqoridagi sozlama bilan.
- Sinov buyrug'iga qisqa timeout qo'y (`Invoke-RestMethod -TimeoutSec 10`).

Bog'liq: [[Lokal yordamchi server (brauzer ilova + C# host)]] · Playwright tuzoqlari
