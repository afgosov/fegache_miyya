---
tur: bilim
sana: 2026-10-23
teglar: [webgl, skinning, optimizatsiya, oyin, telefon]
---
# WebGL — ko'p bot uchun umumiy poza (CPU skinning tejash)

Muammo: bitta shader (uVP, uV, uL), skinning CPU da; 12 ta bir xil model har kadr alohida skinlansa telefon sekinlashadi.

Yechim ([[CS Skin Studio]] 2.3.2, `part8.js`):
- Tirik botlar **2 ta umumiy pozada** (faza farqi — qatorda bir xil qimirlamasin): poza har kadr 2 marta hisoblanadi, botlar soniga bog'liq emas.
- Skin **model koordinatalarida**; har bot `uVP = VP × W`, `uV = V × W` (W = burilish Z atrofida + joy), shader o'zgarmaydi. Yorug'lik normal model fazosida bo'lgani uchun `uL` ni teskari burish: `(c·Lx + s·Ly, −s·Lx + c·Ly, Lz)`.
- O'layotgan/silkingan bot — o'z VBO si, faqat poza kaliti (seq + kadr) o'zgarganda qayta skinlanadi; animatsiya tugagach — hisob yo'q.
- `gbSkin`: avval har uch (vertex) va normal bir marta (`md.numverts`), keyin uchburchak ro'yxatiga indeks bo'yicha tarqatish (non-indexed massivda har uch 3–6 marta takrorlanadi).
- Hitbox nuri: avval bot atrofidagi sharga (r 75) masofa bo'yicha tez rad etish; orqadagi botlarni chizmaslik (dot(bot − ko'z, f) < −60).
- Natija: 12 bot, gameFrame ~0.8 ms (headless), emulyatorda 60 FPS.

Bog'liq: [[GoldSrc MDL formati va skin muharriri]]
