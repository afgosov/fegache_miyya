# 🧠 fegache_miyya — Claude uchun montaj miyasi

Claude Code / Claude Desktop uchun uzoq muddatli xotira (Obsidian vault). Ichida faqat:

- **Video montaj** bilimlari — `03-Bilimlar/Video montaj/` (nazariya, hikoya, subtitr, rang, ovoz, SFX, Reels/YouTube talablari, ffmpeg, konveyerlar);
- **Motion design** bilimlari — `03-Bilimlar/Motion design/` (doktrina, easing, kesim texnikalari, effektlar, tayyor Reels shablonlari, namuna tahlillari);
- **Montaj xatolari va qoidalari** — `01-Xatolar/Montaj qizil chiziqlar.md` (har videoni topshirishdan oldingi majburiy tekshiruv), `02-Darslar/`;
- **CS 1.6 / CS Skin Studio** — loyiha va unga oid barcha bilimlar (GoldSrc `.mdl`, nakleyka, spray, cfg, o'rnatuvchi, Android, promo videolar);
- bir nechta **namunaviy montaj loyihasi** — `04-Loyihalar/`.

Kirish nuqtasi: [`🧠 Miya.md`](🧠%20Miya.md) → [`00-Kirish/Indeks.md`](00-Kirish/Indeks.md).

## Yangi kompyuterga o'rnatish (Windows)

Kerak: [Git](https://git-scm.com/), [Node.js LTS](https://nodejs.org/), Claude Code. Ixtiyoriy: [Obsidian](https://obsidian.md/).

1. Repo'ni uy papkasiga `ObsidianMiya` nomi bilan klon qiling (PowerShell):

   ```powershell
   git clone <shu-repo-havolasi> "$env:USERPROFILE\ObsidianMiya"
   ```

2. Miyani Claude Code'ga ulang — `~/.claude/settings.json` ga SessionStart hook'lari va `~/.claude/CLAUDE.md` ga qoidalar blokini qo'shadi (ikkalasining zaxira nusxasi `.bak-<sana>` bo'lib qoladi, qayta ishga tushirish xavfsiz):

   ```powershell
   node "$env:USERPROFILE\ObsidianMiya\ornatish\ornat.cjs"
   ```

3. Claude Code'ni qayta oching. Har sessiya boshida montaj qizil chiziqlari va indeks avtomatik yuklanadi.
4. (Ixtiyoriy) Obsidian → *Open folder as vault* → `ObsidianMiya`.

macOS/Linux'da ham xuddi shunday: `git clone <havola> ~/ObsidianMiya`, keyin `node ~/ObsidianMiya/ornatish/ornat.cjs`.

## Miyani yangilab borish

Claude yangi xato/dars/bilimni shu vaultga o'zi yozadi. GitHub'ga saqlash:

```powershell
cd "$env:USERPROFILE\ObsidianMiya"; git add -A; git commit -m "Miya: yangilandi"; git push
```

> Repo ochiq (public): parol, token, karta raqami, telefon va shaxsiy ma'lumot yozilmaydi.
> Yozuvlardagi `D:\…` / `C:\Users\Admin\…` yo'llari eski kompyuterdagi joylar — u yerdagi skriptlar, SFX kutubxonasi va footage bu repoda yo'q.
