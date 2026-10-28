---
tur: xato
sana: 2026-10-26
teglar: [server, parol, powershell, xavfsizlik, yuklash]
---
# Server paroli buyruq qatoriga yozilib ketdi

- **Nima bo'ldi:** `sayt_yuklash.ps1` da scp parolni kutayotganda server ~2 daqiqada ulanishni uzdi ("Connection closed"), skript tugab PowerShell buyruq qatori qaytdi. Foydalanuvchi parolni o'sha qatorga yozdi — u buyruq sifatida bajarilib (xato), ekranda ochiq qoldi va PSReadLine tarixiga (`ConsoleHost_history.txt`) tushdi.
- **Sabab:** xatodan keyin skript to'xtab, interaktiv qatorni bo'shatib qo'yardi; foydalanuvchi "hali parol so'rayapti" deb o'yladi.
- **TO'G'RI YO'L:** yuklash skripti xatoda o'zi qayta urinadi va `Read-Host -AsSecureString` bilan so'raydi (yashirin, tarixga tushmaydi); oxirgi xatoda ham yashirin "Enter bosing" bilan tugaydi — qator bo'sh qolmaydi. Foydalanuvchiga: parolni faqat "password:" chiqqanda, 2 daqiqa ichida. Parol oshkor bo'lsa — almashtirishni tavsiya qil, tarixdan o'chirish foydalanuvchining o'zi bilan (avtomatik ruxsat tizimi tarix faylini tahrirlashni blokladi). Parol matnini hech qayerga yozma.

Bog'liq: [[CS Skin Studio]]
