---
tur: bilim
sana: 2026-10-27
teglar: [cs16, cfg, goldsrc, cs-skin-studio]
---
# CS 1.6 cfg va pro sozlamalar manbalari

- **Qaysi fayl o'qiladi:** Steam CS 1.6 da `config.cfg` oxirida `exec userconfig.cfg` bo'ladi → o'z sozlamalarni `cstrike\userconfig.cfg` ga yozish eng xavfsiz (config.cfg o'yin yopilganda qayta yoziladi). Ba'zi yig'malarda (non-Steam, Xash3D) bu qator yo'q — unda `autoexec.cfg`. Tekshirish: config.cfg da `^\s*exec\s+"?userconfig\.cfg` bormi.
- **Sintaksis:** `cvar "qiymat"`, qator oxirida `//` izoh bo'ladi; noma'lum cvar zarar qilmaydi (`cl_righthand`, `m_rawinput` faqat yangi Steam versiyada). `cl_crosshair_size` eski fayllarda 0–3 → auto/small/medium/large.
- **Tez sotib olish bindlari:** `ak47; m4a1; primammo`, `awp; primammo`, `vesthelm`, `hegren; flash; flash; sgren`, `deagle; secammo`, `defuser`. F1/F2 (autobuy/rebuy) va F5 (skrinshot) o'yinniki — tegma.
- **sm/360°** = 360 / (sens × 0.022) / DPI × 2.54.
- **Pro cfg manbalari (faqat ochiq sahifa matni, arxiv yuklanmaydi):** gamerconfig.eu `/config/counter-strike/...` sahifalari (fayl .rar, lekin sahifada `<ol class="config">` matni bor), Steam qo'llanmasi «Legendary Na'Vi CS 1.6 configs» (id 2176022153; WebFetch 429 berdi, curl ishladi). Bir o'yinchining nusxalari zid bo'lsa (ZET, Loord) yoki chala bo'lsa (kennyS) — olinmaydi. Shaxsiy narsa (name, setinfo _pw, ovoz, g'alati bindlar) olinmaydi. Har biriga «ommaviy nusxa, o'yinchi tasdiqlamagan» deb yoziladi.
- Skriptlar: `D:\claude_ish\loyihalar\2026-10-27_cfg-logo-pw\` (`yig_cfg.py`, `pro_ajrat.py`, `pro_joyla.py` → part13 `CFG_PRO`).

Bog'liq: [[CS Skin Studio]], [[CS 1.6 spray va o'yin fayllari]]
