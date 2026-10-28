---
tur: bilim
sana: 2026-10-08
teglar: [montaj, matte, rvm, hyperframes, text-behind, kamera]
---
# Matn bosh orqasida — professional usul (sinalgan)

MediaZone mehmon promo da ishlatildi. Foydalanuvchi talabi: matn **peshonaga tushmasin**, boshning **orqasida** ko'rinsin.

## Konveyer
1. **Plastinka:** manbadan 9:16 uchun zaxirali kvadrat kesish (bizda 2160² → 1920² plate). Rang shu bosqichda beriladi (`curves` + `colorbalance` + `eq`), shunda fon va odam qatlami bir xil rangda bo'ladi.
2. **Matte:** RVM ONNX + DirectML (`virtual_studio/engine/.venv` python, model `engine/models/rvm_mobilenetv3_fp32.onnx`), `downsample_ratio=0.25`, 1920² da ~370 ms/kadr. Faqat eng katta blobni qoldir (dilate 41px) — chiroq/o'simlik "odam" bo'lib qolmaydi. Natija: `alpha.mkv` (FFV1 gray).
3. **Odam qatlami:** `alphamerge` → VP9 `yuva420p` webm (crf 22). Oxirgi kadr PNG (`-c:v libvpx-vp9` dekoder bilan, aks holda alfa yo'qoladi) — outro "freeze" uchun.
4. **Qatlamlar tartibi:** plate → fon effekti (dim/halo/light sweep) → **matn** → odam (webm) → subtitr. Plate va odam bitta "kamera" tweeni bilan harakatlanadi (`.cam` wrapper, `transformOrigin 0 0`, `x=-wx·z, scale=z`) — ikkalasi har doim aniq ustma-ust.
5. **Fonni qorong'ilash (dim) odam orqasida:** matn chiqqanda fon 45–60% qorayadi, odam yorug' qoladi → kontrast check'dan o'tadi va "subject pop" premium ko'rinish beradi. Dim matn kirishidan **oldin** boshlansin, chiqib bo'lgandan **keyin** tugasin (aks holda o'tish kadrlarida kontrast xatosi).

## Joylashuvni hisoblash (taxmin emas)
- Har kadrda niqobdan bosh/yelka chetlarini o'lcha (`track2.py`: har 50 px qatorda min/max x). Lavha uchun kamera holatini tanla va matn qutisi bilan solishtir.
- **To'silish balli:** matn qutisi ichida alfa>0.5 bo'lgan piksellar ulushi (lavha davomida). Ro'yxat 104px'da qo'llar tufayli 3–13% to'silardi, 92px + kamera 20px siljishi bilan ~0%.
- Kamera (⚠️ faqat manba o'zi vertikal 9:16 bo'lsa — kvadrat manbada bu odamni kesib yubordi, pastdagi bo'limga qara): odamni yon tomonga (yuz markazi ~ 2/3) suradi, matn bo'sh tomonda; matn **boshning orqasidan chiqib keladi** (`x:+300→0`, power3.out) — bu "orqada" ekanini eng aniq ko'rsatadi.
- Ingichka chiziq (rule) bo'yin orqasidan butun kenglikda o'tadi — chuqurlik hissi, harflar esa to'liq o'qiladi.

## Check tuzoqlari
- `text_occluded` (coveredFraction 1) — check shaffof webm'ni to'liq quti deb hisoblaydi → ataylab orqadagi matnga `data-layout-allow-occlusion`.
- Subtitr so'zlari ko'tarilish animatsiyasida `content_overlap` info beradi → `data-layout-allow-overlap`.
- Kontrast faqat o'tish kadrlarida yiqilsa — dim vaqtini to'g'rila, rangni emas.

## Manba 9:16 dan keng bo'lsa (kvadrat/16:9) — "jurnal muqovasi" joylashuvi
- ❌ Yonlarini kesib 9:16 ga to'ldirma — odam sig'may qoladi ([[Video montaj texnik xatolari]] #29).
- ✅ Kadrni to'liq kenglikda "band" qilib qo'y (bizda 1080×1080, top 330). Plate va odam qatlami alohida `overflow:hidden` + bir xil `mask-image` (ustki/pastki 44–60 px yumshoq so'nish) li band'larda; matn qatlami ular orasida, lekin **kesilmagan** — shuning uchun katta masthead band'ning ustki chetidan chiqib turadi.
- Masthead harflarining pastki ~60 px i kadr ichida — bosh ularni yopadi (muqova effekti), yuqori qismi to'q headerda to'liq o'qiladi. Har harf alohida span, `y:+150→0` stagger bilan "bosh orqasidan ko'tariladi".
- Kamera: `scale = 0.5625·z`, `x` chegaralangan (bo'sh joy ko'rinmasin), z ≤ 1.06. Band ichidagi zoom uchun check `container_overflow` beradi → `data-layout-allow-overflow`.
- Subtitr band ostida to'q fonda (kontrast muammosi yo'q), Instagram UI uchun pastki ~350 px bo'sh qoladi.

Bog'liq: RVM matting dvigateli · [[Video montaj texnik xatolari]] · [[Subtitr san'ati]] · [[Professional kesim texnikalari]]

Markaz: [[Video montaj]]
