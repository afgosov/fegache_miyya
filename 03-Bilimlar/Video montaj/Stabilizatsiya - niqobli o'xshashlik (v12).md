---
tur: bilim
sana: 2026-10-17
teglar: [stabilizatsiya, montaj, python, sifat, o'lchov]
---
# Stabilizatsiya — niqobli to'liq o'xshashlik (v12, sinalgan)

Loyiha: [[Premier Uzbekistan Reels (Primer papka)]] gaz plita v12. Fayllar: `_primer/tools/build12.py`, `stabtune.py`, `out_shake2.py`, `shakestrip.py`, `traj3.py`.

## Konveyer
1. 4K manba **1620×2880 kanvasga** o'qiladi; tuzatish + statik kesim kanvasda, oxirida **INTER_AREA** bilan 1080×1920.
2. `stabtune.py`: har kadr oynasini 540×960 da dekod → LK nuqtalar (**faqat niqob ichida**, forward-backward tekshiruv, RANSAC 1 px) → yo'l (x, y, burilish, masshtab).
3. Usullar: `yoq`, **T0/TR0 (shtativ — o'rtaga qotirish)**, T1/T2, TR1/TR2, TRS2. Har biri qo'llanib, natija yana niqobli o'lchanadi; ball = titrash + 0.25·tebranish + 3·burilish (+zoom jarimasi). Zoom ≤ 1.25 (yoki kesim z dan katta emas).
4. `build12.py` tanlangan tuzatishni ishlatadi (`<proj>/stab/<seg>_<klip>_<kadr>.npy`).

## Saboqlar
- **Niqob shart:** eshik/qopqoq/qo'l/odam katta joy egallasa, o'lchov ularni kamera deb oladi → stabilizator fonni silkitadi. Niqob = qimirlamaydigan detal (panel, plita old qismi).
- **Shtativ rejimi** qisqa (1–3 s) qo'l kadrlarida eng toza natija beradi (C8467 2.3 → 0.06 px, C8472 2.1 → 0.04 px).
- Qorong'i, kam teksturali yoki chuqurlikli (parallaks) kadrlarda o'lchov raqami shishadi — **detal-strip bilan ko'z tekshiruvi** shart.
- Rolling shutter "jele"ni 2D o'xshashlik tuzatmaydi — bunday kadrni qisqa ishlat yoki almashtir.
- Sekinlashtirish (frame blending) 25 fps da titratadi — mijoz brifida taqiqlangan.
Bog'liq: [[Video montaj texnik xatolari]] · [[Klassik montaj konveyeri (motion'siz)]]
