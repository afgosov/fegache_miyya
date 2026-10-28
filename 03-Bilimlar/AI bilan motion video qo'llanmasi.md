---
tur: bilim
sana: 2026-10-05
teglar: [bilim, video, remotion]
---
# AI bilan motion video — qadamma-qadam qo'llanma (PDF, @Farrukh)

Fayl: `C:/Users/Admin/Desktop/claude/AI bilan motion video qadamma-qadam qo'llanma.pdf` (7 bet). Foydalanuvchi o'qib o'rganishni so'ragan.

- **G'oya:** skript + ovoz (mp3) → montaj dasturisiz animatsiyali video. Claude kod yozadi, **Remotion** render qiladi.
- **Bosqichlar:**
  1. Node.js o'rnatish, `npx create-video@latest` bilan "reels01" loyihasini yaratish.
  2. Claude'ga format (1:1 yoki 9:16), uslub va skript yozish.
  3. Berilgan `Reels.tsx`, `Root.tsx`, `index.ts` fayllarini `src` ga, `audio.mp3` va SFX'ni `public` ga joylash.
  4. Preview qilib render qilish.
- **Namuna uslub:** oq fon, minimalist, Apple emojilari, Montserrat shrifti, qora matn, SFX.
- **Asosiy usul (SFX):** har bir ovoz effekti aniq bitta animatsiya lahzasiga bog'lanadi. Bu usul [[NEIROZOL Reels]] v3 da qo'llandi.
- Biz Remotion o'rniga HyperFrames ishlatamiz ([[Video montaj vositalari]]); g'oyalar bir xil.

Bo'lim: [[Bilimlar]]
