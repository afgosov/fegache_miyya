---
tur: bilim
sana: 2026-10-12
teglar: [whisper, transkripsiya, sheva, xorazm, otziv]
---
# Shevali nutqni (Xorazm va h.k.) transkripsiya qilish

Sinalgan: NEIROZOL otziv - Zuhra opa (4:54 daqiqalik ko'cha intervyusi, Xorazm shevasi, ovoz −40 LUFS).

## Muammo
- Whisper (`-l uz`) shevali nutqda deyarli bema'ni matn beradi: kirill/lotin/qozoqcha aralash, turbo esa takrorlanish gallyutsinatsiyasiga tushadi ("Uyukumu Yaakshi" ×20, arabcha/tibetcha harflar).

## Ishlagan usul
1. **Ovozni tayyorla:** `highpass=80,loudnorm=I=-20` (juda past ovoz). Pauza chegarasini percentil bo'yicha tanla (bu yerda shovqin −38, nutq −20 → chegara −31 dB).
2. **3 xil o'qish** va ma'noni o'zing tikla:
   - large-v3 `-l uz` (ibora darajasida, `phrases.py`);
   - large-v3 `-l tk` (**turkmancha** — Xorazm shevasi o'g'uz guruhiga yaqin, ko'pincha eng tushunarli chiqadi);
   - **keng oynalar** (20–26 s, `wide.py`) — kontekst ko'payganda so'zlar ancha to'g'rilanadi.
3. Kesim uchun nomzod bo'laklarni **alohida tor oynada** qayta o'qi (`verify.py`: large uz + tk + turbo).
4. Shevadan adabiyga misollar: "momo la bor edi" = muammolar bor edi; "uyqum yaxshi buldi vaqtada" = uyqum yaxshi bo'ldi; "tuganlarimgen ayttim, ulagen maqul keldi" = qarindoshlarimga aytdim, ularga ma'qul keldi; "nimay apsusdaman" = nimaga afsusdaman; "bog'chada ishlayman".

## Montaj qoidasi
- Shevali gapni **so'zma-so'z subtitr qilma**. Ekranga faqat ma'nosi aniq iboralarni adabiy tilda «iqtibos» yoki kalit so'z qilib chiqar. Noaniq joylarda faqat vizual metafora qo'y.
- Topshirishda ekrandagi barcha matnlar ro'yxatini ber, foydalanuvchi tekshirsin.
- Intervyuer ovozini kim gapirayotganiga qarab ajratish: og'iz harakati (qat'iy kropda) va spektr PCA bu yerda ishonchsiz chiqdi (ikki ayol ovozi) — **mazmun bo'yicha** (savol shakli) ajrat.

## Qoraqalpoq tili (2026-10-14, Nukus lampa brendlari otziv (Lucem Vesta Akfa))
- Whisper'da qoraqalpoq yo'q. **large-v3 `-l kk`** (qozoqcha, kirill) eng izchil o'qiydi; `-l uz` lotin/kirill aralash, lekin brend nomlarini yaxshiroq beradi ("Aqua Lighting" = Akfa lighting, "Lusem/Luchem/Lyusian" = Lucem, "Vesta/Pesta/Desta electric" = Vesta electric). Ikkalasini birga o'qi.
- Turbo `-l kk` yomon (kesilib qoladi, takrorlanish). Ibora darajasida large-v3 + whisper-server.
- Savol shakli: "Qaraqalpaqstanda satılıp atırǵan qaysı brendtegi lampalardı sapalı dep oylaysız?"

Bog'liq: [[Video montaj texnik xatolari]] · [[Subtitr san'ati]] · Markaz: [[Video montaj]]
