---
tur: bilim
sana: 2026-10-28
teglar: [montaj, motion, matn, estetik, rvm, b-roll, hyperframes]
---
# "Og'izdan chiqadigan" nafas yozuv: spiker orqadan yoki yondan olingan

Foydalanuvchi talabi (C9774, tabobat): "asosiy gaplar xuddi spikerning og'zidan chiqayotgandek bo'lsin", "juda silliq", "estetik". Sinalgan konveyer: `D:\claude_ish\loyihalar\2026-10-28_c9774_estetik\tools\` (plan → mkfront → matte → comp → audio → finalize).

## Effekt (GSAP, seek-safe)
- **Chiqish nuqtasi** = labdan 25–30 px oldinda (bu videoda 1080×1920 da (548, 900)). Virtual kamera **og'iz nuqtasiga langar** qilinadi (`M = k·q`, og'iz ekranda qimirlamaydi), shunda nuqta butun video bo'yi bir joyda turadi.
- So'z o'z joyida (yuqori band, y 330–560) turadi. Boshlang'ich offset = (og'iz − markaz). Ichma-ich 3 ta o'rov ishlatiladi:
  - `.bw`: y, `power2.inOut` (avval sekin, ya'ni so'z avval o'ngga chiqadi);
  - `.bx`: x + o'ngga "bo'rtish" +150 px (`sine.out` 36%, keyin `power2.inOut`);
  - `.bs`: scale 0.1→1 va blur 22→0 (`power2.inOut`), opacity `power1.out`;
  - harflar opacity stagger ≤0.05 s.
  - D ≈ 1.35 s. Natijada so'z labdan bug' bo'lib chiqib, ko'tarilib, tiniqlashadi.
- **Bug' bo'laklari (wisps):** 3–5 ta yumshoq oq radial dog'. Ular og'izdan o'ng va tepaga suzib, 1.4→2.5× kattalashadi. Opacity ≤0.30 (`sine`).
- Scale `power3.out` bo'lsa, so'z yuz yonidayoq kattalashib yuzni yopadi. Shuning uchun scale ham y bilan bir xil easing'da (`inOut`) bo'ladi.
- Katta so'z Cormorant SemiBold, krem #F7F0E4, soya va scrim (radial qorong'i ellips, 0.42) bilan. Kicker Montserrat 600, 29 px, tracking .34em, oltin chiziqchalar bilan. Aksent: shalfey #CFE0C2.

## Qatlamlar
- Ikki shaffof HF render bo'ladi: `back.mov` (katta yozuv, spiker ORQASIDA) va `top.mov` (subtitr, oldinda). Spiker niqobi RVM ONNX + DirectML (virtual_studio venv) bilan olinadi, 720×1280, 0.09 s/kadr, eng katta blob qoldiriladi. Kompozitda `out = graded·m + (fon+ravoq+yozuv)·(1−m)`. Zoom kattalashsa ham yozuv boshga tushmaydi, uning orqasidan o'tadi.
- **Ravoq (arka) B-roll:** spiker qaragan bo'sh tomonda (x 610, y 650, 380×590). Ko'rinishi: yarim doira tepa, oltin chiziq (13 px tashqarida), soya. Pastdan wipe bilan ochiladi (`power3.out`, 1 s), ichida klip almashishi ham pastdan wipe (0.75 s). B-roll sekin Ken Burns 1.08→1 va iliq grade bilan beriladi. Spiker kadrda qoladi.

## Audio
SFX faqat [[SFX kutubxonasi (foydalanuvchiniki)]] dan olinadi:
- katta so'z — `Медленный 13/4/5/11` (havo, nafas);
- kicker va ro'yxat — `2 затяжение`, `6 мкжбуквенное 2`;
- ravoq — `вуш 3`;
- CTA — `Медленный 12` + `Клик 2`, tugma qo'nganda 0.96 "bosilish" bilan.

Daraja: ovozning 100 ms p90 qiymatidan −11 dB (katta so'z) va −14/−15 dB (mayda). Mix −14 LUFS, TP −1.6.

## Tuzoqlar (C9774 da topildi)
- **Pexels hijoma/cupping kliplari:** deyarli hammasida chet ellik terapevt yoki yalang'och bel bor (qizil chiziq №7). Faqat idishlar ko'rinadigan qismni `crop` qil (8313349: 520×800 @ 60,1100, 0–2.35 s), 2.5 s dan keyin kadrga oyoq kiradi. Zuluk uchun yumshoq stok yo'q, u faqat yozuvda.
- **Ravoq ichidagi wipe pastdan yuqoriga ketadi:** eski klipning TEPASI eng oxirgi ko'rinadi. Klip tepasida kirib kelayotgan narsa bo'lsa, oynani qisqartir.
- **`smooth_check --border` noto'g'ri "TITRAYDI" deydi:** defokus fonda (manbaning o'zida 0.71) va ustidagi harakatli qatlamlarda (ravoq, yozuv) shunday bo'ladi. Haqiqiy titrashni qatlamsiz oynada o'lcha: javon nuqtalarini LK bilan kuzat, yuqori chastota std. Natija 0.02–0.03 px bo'ldi, ya'ni shtativdek.
- **Subtitr pastki chegarasini alfadan o'lcha** (alpha>200): `.cap top 1342` 1458 px gacha tushdi, xavfsiz chegara 1450. 1326 ga ko'chirildi.
- Snapshot PNG vaqti kadr vaqtiga to'g'ri kelmasa (`at-37.5s` va 37.52), PEEK qatlamni topmaydi. Snapshot `--at` ni kadrga karrali qilib ber (n/25).

Bog'liq: [[Matn bosh orqasida - professional usul]] · [[Tabiiy B-roll motion konveyeri]] · [[Subtitr san'ati]] · [[Motion doktrinasi]] · Loyiha: C9774 tabobat estetik Reels (2026-10-28)
