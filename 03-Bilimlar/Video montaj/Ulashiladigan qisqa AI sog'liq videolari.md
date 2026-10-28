---
tur: bilim
sana: 2026-10-23
teglar: [reels, ai-video, ulashish, repost, sog'liq, grossline, formula]
---
# Ulashiladigan qisqa AI sog'liq videolari (repost formulasi)

12 ta viral Instagram video o'lchandi (11 tasi sog'liq). Hujjat: https://claude.ai/artifact/Y6i5bFhv3gEptVVdfKUysT. Ish papkasi: `D:\claude_ish\loyihalar\2026-10-23_ai_viral\`.

## Asosiy topilma
- O'lchov: **repost / 1000 ko'rish** (vebda faqat repost ko'rinadi, Direct ulashish soni ochiq emas).
- "Nima qilishni ko'rsatadi" (bitta uy amali) — **1,0–2,6**; hikoya / shikoyat / "izohga yozing" — **0,1–0,9**, ko'rishi million bo'lsa ham.
- Eng yuqori ikkitasi — **o'zbekcha AI bobo** (do'ppi, oq soqol, yog'och uy): @ai_tafakkurbobo 10 s duo — 2,62; @gulhayo.ai bobo, shishgan oyoqqa ichimlik — 2,19.
- Hind tilidagi @health_animition (TheSwadVerse qayta joylashlari): mushakdor meva-qahramon tomoshabinni hazil bilan masxara qiladi ("bu tilmi yoki mog'or bosgan bo'yra?") + uy usuli + "oldin/keyin" — 3–6,6 ming repost.
- Izoh va repost raqobatlashadi: @doctor.dilobar "yurakchaga bosing" — 5 534 izoh, repost 0,14. Grossline uchun 2 xil video kerak: lid (izoh) va qamrov (ulashish).
- Kichik akkaunt ham chiqadi: @organixtoon 6,8K obunachi → 16,3 mln.

## Formula (12–16 s)
0–2 s muammo ko'rinadi + tepada holat → 2–4 s personaj murojaati ("Болам…" / "Мен сизнинг миянгизман") → bitta amal, sanoq ekranga chiqadi → oxirida faqat "Сақлаб қўйинг, яқинларингизга юборинг". Logo kartasi yo'q, butun video davomida tepada `@grossline_tabiiy` belgisi (repostda ham brend ko'rinadi). Xavfsiz, umume'tirof etilgan usullar + kichik ogohlantirish satri.

## Ishlab chiqarish (konveyer)
- `montaj\skriptlar\ssenariy_v.py` — V01–V10 (matn, kadrlar/promptlar, motion, ogohlantirish).
- Ovoz: ElevenLabs (ayol/erkak klon, v4) → `ovoz_bol.py F01 ol` (bitta elementli partiya: `reja/oylik.json` + `ovoz/partiya/partiyalar.json`) → `ovoz/VNN.wav` + `vaqt/VNN.json`.
- `reja_v.py VNN` → `reels_v.py VNN` (reels2 nusxasi, `"end":"share"`: xatcho'p + samolyotcha so'zlarga tushadi, `note`, `wm`) → `miks2.py` → `tekshir2.py`.
- Oylik loyihaga tegmaslik uchun hammasi alohida `montaj\` papkada (kadrlar nusxasi).
- **Abloshka (majburiy, seriya uslubi):** `reja/oylik.json` ga `cover` → `abloshka2.py VNN` → `insta2.py VNN` (muqova 1-kadrda) → `post/vNN.mp4`. Yorug' kadr yo'q bo'lsa: `kesma.py` (venv_cut, BiRefNet) bilan personajni qirqish + `abloshka_fon.py` (P11 krem kadridan eski yurak/kofeni o'chirib, yangi personajni qo'yish). TAYYOR: `ulashish_videolar\VNN_*.mp4` + `abloshka\VNN.jpg`.

## Tuzoqlar
- whisper `-l auto` o'zbekchani ozarbayjon/qozoq deb taniydi — ma'no tushunarli, lekin aniq matn kerak bo'lsa `-l uz`.
- Bir xil rasmni uning yaqinlashtirilgan nusxasiga dissolve qilish "arvoh" beradi → bitta kadr ichida Ken Burns yetarli ([[Video montaj texnik xatolari]]).
- Higgsfield MCP (ushbu ulanish) faqat katalog/balans/tarixni o'qiydi — video yaratmaydi. Haqiqiy AI animatsiya uchun Flow "kadrdan video" yoki Higgsfield veb kerak.
- Bizning V01 — animatik (still + Ken Burns); viral videolarda personaj harakatlanadi va gapiradi.

## V01 natijasi (2026-10-25)
- Formula tekshirilmadi: V01 Instagram'dan yo'qolgan ("страница недоступна"), Buffer faqat 4 soatlik ma'lumot berdi (23 ko'rish, 0 ulashish, 1 saqlash, 18 s dan o'rtacha 7,9 s tomosha) — xulosa uchun yetarli emas.
- Kanal bazasi (gl seriyasi): repost/1000 medianasi ~0, faqat gl09 ("Асаб чарчаганининг 5 белгиси", ro'yxat + "дўстингизга юборинг") 2,3 ga yetdi — ro'yxatli amaliy maslahat ulashishga ishlaydi. → grossline_tabiiy Instagram (Buffer)

Bog'liq: [[Sog'liq Reels formulalari (raqobatchilar)]] · Grossline life hack va 15 profil tahlili · Grossline oylik kontent (29.10–27.11) · [[ElevenLabs o'zbekcha ovoz konveyeri]] · [[AI rasm va whiteboard ta'lim Reels konveyeri]]
