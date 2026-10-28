---
tur: bilim
sana: 2026-10-14
teglar: [vox-pop, otziv, montaj, motion-overlay, brend]
---
# Vox pop (ko'cha so'rovi / brend otzivi) montaji

Sinalgan: Nukus lampa brendlari otziv (Lucem Vesta Akfa) (58 klip → 88 s).

## Tuzilma
1. Joy intro (5–10 s, musiqa + sarlavha-savol + logolar).
2. Boshlovchi kirishi — oxirgi qabul qilingan dubl.
3. **Savol faqat bir marta** (1-javobchi ustida intervyuer ovozi bilan) — keyin savol paneli tepada kichik bo'lib qoladi.
4. Javoblar "tez o'q" ritmida: faqat javob (1.2–6 s), savol qayta eshitilmaydi. Batafsil javob (sabablar) boshida, eng kuchli xulosa oxirida.
5. Boshlovchi yakuni + CTA ("izohlarda qoldiring") + logolar.

## Dubl tanlash
- Har odamda bir nechta dubl: **oxirgi to'liq dubl** odatda qabul qilingani (keyin ekipaj boshqa joyga o'tgan). Lekin mazmunni solishtir: javob orasida 1+ s ikkilanish bo'lsa — boshqa dubl.
- "Salom aleykum" bilan boshlangan javobni o'rtaga qo'yma; tozaroq dublni ol.

## Kesim
- Energiya bo'laklari (10 ms RMS, persentil chegarasi) + ibora transkripsiyasi; kirish = gap − 0.22 s, chiqish = gap + 0.30 s, lekin qo'shni ovozdan ≥ 0.12 s uzoq.
- Har kesilgan bo'lakni **aynan o'sha oraliqda** qayta o'qi (kk + uz) — chetda "yaka? / ha / qarapın" qolmasin, raqobatchi brend yo'qligini tekshir.
- Operator kamerani burgan bo'lsa — yuz kuzatuvi bilan raqamli barqarorlash (zoom 1.10–1.13).

## Brend kartochkalari (motion overlay)
- Kartochka **brend aytilgan so'z** vaqtida (energiya bo'lagi boshi + 0.06 s); bir odamning kartochkalari bitta qatorda oldindan hisoblangan joylarda (qayta joylashmaydi).
- ⚠️ Kirish animatsiyasi kesimdan oldin tugashi shart: `d = min(0.55, t1 − t − 0.04)`; chiqish **kesimda** (0.22 s), keyingi odamning 1-kartochkasi ≥ 0.25 s keyin → [[Video montaj texnik xatolari]] #82.
- To'q shisha kartochka + oq logolar (Akfa emblemasi ichi oq bilan to'ldiriladi), sariq ost chiziq + yorug'lik o'tishi — "lampa" mavzusi.

## Raqobatchi brend
- `edl.json` → `"beeps": [[manba_a, manba_b]]`: ovoz o'chiriladi, 1 kHz ton (ovoz p95 × 0.55), 6 ms fade; ekranda "***" chip (ixtiyoriy).

Bog'liq: [[Talking-head grafik qadoqlash]] · [[Subtitr san'ati]] · Markaz: [[Video montaj]]

## Qo'shimcha (2026-10-17, Navoiy Darxon lampa brendlari otziv (Akfa Reels))
- **Shahar videosi kollaj bo'lib** ("go'sht videosidagidek" = steyk tasma-hook): 3 tasma 1080×640, oraliqsiz, 4 s. Turizm roliklari tez kesilgan (0.8–1.3 s) — `shots.py` (64×36 farq) bilan ≥2.5 s toza kadrlarni top; yozuvli ("…xush kelibsiz!") va dissolve'li kadrlarni olma. 2.5 s → 4 s uchun `minterpolate=mi_mode=mci:mc_mode=aobmc:me_mode=bidir:vsbmc=1` (0.6×) silliq dron/qo'l kadrida yaxshi; ichida kesim bo'lsa arvoh kadr chiqadi — avval tekshir.
- **60 s limitida:** kollaj 4 + boshlovchi hook ~8 + savolli P1 ~11 + 4 javob × 4–7 + boshlovchi CTA ~7.5 + logo 3.6. Hook uchun boshlovchining "…X'ni tavsiya qilishmoqda, ularning o'zidan eshiting" dubli kirish dublidan kuchliroq.
- Boshlovchi umumiy planda kichik bo'lsa: joy chipi, kartochka va CTA **tepada** (y≈300, uchinchi tomon reklama yozuvi ustida), tanasi ochiq qoladi. Kichik yuz uchun face_scan'ga markaziy (0.32–0.68 × 0.44–0.60) qidiruv oynasi qo'sh.
- Brend so'zi vaqti: whisper so'z vaqtlari ±0.3 s adashadi — 20 ms energiya konvertidagi dip'lar (`env25.py`) bo'yicha bo'g'inlarni ajrat.
- **Foydalanuvchi talabi (2026-10-17, Navoiy v2):** otziv seriyasida boshida **sarlavha** (Nukus 1-videosidagidek, kick = shahar · joy) bo'lishi kerak — **3 logosiz** (2026-10-19, Surxondaryo v2: "introdagi 3 logoni olib tashla"; Nukus v3 qoidasi bilan bir xil, rasmdagi logolar faqat namuna edi); boshlovchining kirish ("bugun … so'rovnoma") gapi kerak emas — boshlovchi faqat yakuniy CTA'da. "1-kadrdagi odam" = videodagi birinchi kadr (kollajdan keyingi).
- **Andoza (2026-10-18, Surxondaryo):** turizm intro (YouTube) suv belgili bo'lsa — kollajda manba kesimini belgi zonasidan pastga sur (`Y0MIN`); 50 fps manbada 0.5× sekinlashtirish interpolyatsiyasiz. Boshlovchining yakuniy klipi bo'lmasa CTA chipi oxirgi javobchida (y 1250). Operator sanog'i ("bir, ikki, uch") javob boshida qolmasin — lab 12.5 fps + energiya bilan kirish.
- **Ikki kishilik savol kadri (2026-10-20, Termiz v2):** foydalanuvchi boshlovchi qiz + javobchi turgan keng kadrni olib tashlatdi (Navoiy v2 dagi kabi boshlovchi kadri yoqmaydi). Agar boshqa toza savol kadri bo'lmasa — savolsiz: intro sarlavhasi savol vazifasini bajaradi, birinchi kadr = yakka javobchi.
