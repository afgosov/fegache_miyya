---
tur: loyiha
sana: 2026-10-09
teglar: [loyiha, motion, namuna, o'rganish]
---
# Motion namunalar kutubxonasi

**Maqsad (2026-10-09):** foydalanuvchi montaj va motion design'ni o'rganish uchun namuna videolar yuboradi. Har bir videoni tahlil qilib miyaga yozamiz, toki keyingi videolarimiz yanada yaxshi chiqsin. Ikkimiz ham o'rganamiz: foydalanuvchiga ham usullar nomi bilan, sodda tushuntiriladi.

- **Papka:** `D:/claude_ish/namunalar/motion/`
  - `_kiruvchi/` — videolar (foydalanuvchi shu yerga tashlaydi yoki skript nusxa/yuklab oladi)
  - `_tahlil/<nom>/` — kadr varaqlari, spektr, matn, `stats.json`; `_tahlil/umumiy.json` — hammasining qisqa jadvali
  - `tahlil_namuna.py` — skript (har doim `python -I`)
- **Ish tartibi:** [[Namuna tahlil qilish tartibi]]
- Avvalgi namunalar (shu tizimdan oldin): [[Namuna tahlili - Digital Forum promo]], [[Namuna tahlili - McDonald's ilova reklamasi]], [[glow.rustamov uslubini o'rganish]] (34 Reels, alohida papkada: `_namunalar/glow.rustamov/`).

## Tahlil qilingan namunalar
| # | Nom (`_kiruvchi/`) | Miya yozuvi | Janr | Asosiy saboq |
|---|---|---|---|---|
| 0 | `glow_digital_forum` | [[Namuna tahlili - Digital Forum promo]] | event promo, virtual studiya | skript sinovi; portal o'tish = 0.40 s (12 kadr), lower-third ~1.5 s |
| 1 | `n1009_01` | [[Namuna tahlili - gayrat.motion before-after]] | portfolio oldin/keyin | xom + tayyor yonma-yon, narx yorlig'i |
| 2 | `n1009_02` | [[Namuna tahlili - AI kadr uzaytirish tutorial]] | tutorial | virtual kamera ekran ustida |
| 3 | `n1009_03` | [[Namuna tahlili - Komfort zona infografika]] | explainer | 3 qatorli ierarxiya, rang = ma'no |
| 4 | `n1009_04` | [[Namuna tahlili - AI agent montaj UI-hikoya]] | UI-hikoya | chat hikoya + zoom/blur + CTA |
| 5 | `n1009_05` | [[Namuna tahlili - SFX paket promo]] | mahsulot promo | sanoq → drop, jimlikda SFX |
| 6 | `n1009_06` | [[Namuna tahlili - AI montajchi maksimalist]] | yoshlar fikr-video | stiker matn, doira matn |
| 7 | `n1009_07` | [[Namuna tahlili - Kino dialog sahnasi]] | qisqa film (16:9) | kameraga qarab gapirish |
| 8 | `r1010_01` | [[Namuna tahlili - Beldersoy restoran reklamasi]] | taom/resort reklamasi, motion'siz | tasma-hook, defokus-ochilish, ikki rang olami, drop olovga → [[Zamonaviy reklama montaji]] |
| 9 | `r1011_01`, `r1011_02` | [[Namuna tahlili - Amirsoy kurort Reels (2 ta)]] | kurort joy Reels | nota = kesim, doimiy kichik matn/logo, ichkaridan tashqariga |

| 10 | `n1012_01`, `n1012_02`, `n1012_03` | [[Namuna tahlili - Express Mebel intervyu Reels (3 ta)]] | direktor intervyusi + B-roll | tezis → B-roll isbot → raqam urg'usi → logo; typewriter lower-third; rang-chaqnash 5 kadr, light leak 7 kadr, REC ramkasi, qo'l hisoblagichi, mozaika→logo |

Umumiy qoidalar: ⭐ [[Namunalar xulosasi - 2026-10-09]]

## Holat
- ✅ 2026-10-09: qabul va tahlil tizimi tayyor, Digital Forum namunasida sinaldi (35 s → ~1 daqiqa).
- ✅ 2026-10-09: birinchi to'plam — 7 video (`Desktop/claude/1–7.mp4`) tahlil qilindi, 7 yozuv + xulosa. Skript 7 videoni ~6 daqiqada qayta ishladi.
- Eslatma: 1-video va 4-videoda nutq yo'q (whisper bema'ni matn berdi — e'tibor berma); 7-video ruscha (`--til ru` bilan qayta ishlatish mumkin).

## Keyingi qadamlar
- Har 3–5 namunadan keyin umumiy xulosa: qaysi usullar takrorlanadi → [[Motion doktrinasi]] va [[Tayyor Reels shablonlari]] ni yangilash.
- Eng kuchli usullarni HyperFrames'da kichik sinov sahnasi qilib yasash (o'rganish uchun).

Bo'lim: [[Loyihalar]] · Markaz: [[Motion design]]
- ✅ 2026-10-12: Express Mebel 3 ta intervyu Reels (foydalanuvchi: "yangi videoni montaj qilishimiz uchun") — bitta yozuv, 6 ta o'tish kadrma-kadr o'lchandi.
- ✅ 2026-10-16: Express 4 namuna (`D:/claude_ish/loyihalar/2026-10-16_express_namunalar/`) — 3 tasi n1012 bilan bir xil (md5), yangi `n1016_04` (16:9 explainer, letterbox) → [[Express uslubi - qo'llanma]].
- ✅ 2026-10-23: `n1023_claude_ekosistema` — o'zbek AI blogeri, "Claude ekosistemasi 3-qism": split-screen UI-motion + so'zma-so'z subtitr, bob kartalari, ochiq halqa → [[Namuna tahlili - Claude ekosistemasi 3-qism]].
