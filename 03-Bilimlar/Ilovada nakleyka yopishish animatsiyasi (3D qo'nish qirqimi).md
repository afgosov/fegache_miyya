---
tur: bilim
sana: 2026-10-24
teglar: [hyperframes, 3d, nakleyka, promo, cs-skin-studio, ritm]
---
# Ilovada nakleyka yopishish animatsiyasi — haqiqiy 3D kadr + qo'nish qirqimi

Skin «yasalayotganini» ko'rsatish: nakleyka uchib kelib, musiqa zarbasida qurolga «shapillab» yopishadi va shu kadrdan boshlab teksturaning o'zida turadi. Hammasi dasturning o'z dvigatelida pishiriladi (soxta emas). [[CS Skin Studio - skin yasash video (2-qism)]] da sinaldi.

## Konveyer
1. **Nakleykalar rejasi** muharrirda: qurolni yon tomondan sig'dirib (`cam.yaw = −π/2`, masofa nuqtalar proyeksiyasi bo'yicha), to'r bilan skrinshot → har nakleyka uchun `(nom, x%, y%, scale, rot)`. Qo'yish: `S.st.cur`, `S.st.scale/rot`, `S.samePart = true`, `placeSticker3D(pick(x, y))`, `commitSticker()`.
   - `scale` model o'lchamiga nisbiy: Deagle'da AK'dagidan ~2.5 baravar kichik qiymat kerak bo'ldi.
   - CS modellarida UV qayta ishlatiladi (AWP qo'ndog'i ↔ korpus old bloki) — nakleyka boshqa joyda ham bo'lak bo'lib chiqadi. Variantlarni tez sinab, takrorlanmaydigan nuqtani tanla.
2. **Holatlar**: asl tekstura + har nakleykadan keyingi nusxa (`S.T[k].cur.slice()`), har biri uchun alohida `MiniGL.load(..., {rgba})` sahnasi.
3. **Takt to'ri**: `B(n) = drop + bar·(n−4)`; har kadr `CUT(n) = B(n) − 0.28` (808 uzilishi ichida). Qo'nishlar taktdagi kuchli zarbalarga: +0 / +0.475 / +0.95 s.
4. **Suratga olish** (60 fps, 1920×1080, shaffof): kamera `_mats(tgt, dir(yaw, pitch), up, dist, fov)`, chiziqli harakat; kadr vaqti `g ≥ qo'nish` bo'lsa keyingi holat sahnasi. Qo'nish kadrida yana bitta «oldin» kadr (`pre_i.png`). To'liq qurol kadrlarida masofa avtomatik: 5 burchakda proyeksiya, eng kattasi (aylanish ±0.4 rad dan oshmasin — aks holda qurol kichrayadi).
5. **Qo'nish qirqimi** (`qoplama.py`): `|keyin − oldin|` > 14 → kengaytirish → eng katta komponent (+40 px ichidagi bo'laklar) → nakleykaning qurol ustidagi aniq ko'rinishi (perspektiva, yorug'lik bilan) va `x, y, w, h`.
6. **HyperFrames**: qirqim qurol kadri wrapper'i ichida o'sha joyda. Parvoz 0.22 s `power3.in`: `x ±260, y −230, scale 1.75, rot ±16° → 0`. Parvozda **asl yuqori sifatli rasm** (`object-fit: contain`), oxirgi 2 kadrda (0.034 s) qirqimga crossfade — uzunroq bo'lsa ikki rasm ustma-ust ko'rinadi (qirqimni kattalashtirsa xira chiqadi). Qo'nishda: soya `drop-shadow 46px → 0`, oq halqa (0.34 s), wrapper'ga `scale 1.012 → 1` zarba (3.5% «shake»dek tuyuldi) (transform-origin = nakleyka markazi), keyin qoplama yashiriladi — video kadrda nakleyka allaqachon bor.

## Vertikal (Reels) uchun
- 16:9 kadrni kesmay, 3D ni 1080×1920 da qayta yoz: kamera **roll** 45–63° (`up = u·cos θ + r·sin θ`, musbat — qurol pastki chapdan yuqori o'ngga ko'tariladi). Yaqin kadrlarda masofa ~1.6–2× (tor kadr). Qo'nish qirqimlari va HUD joyi shu render bo'yicha qayta hisoblanadi; HUD har skin uchun bo'sh burchakka.

## Ovoz
- Zarba = qog'oz (3 variant navbat bilan) + crunch (2 variant). Daraja stem'larda o'lchanadi: to'liq polosada musiqadan 6–9 dB past, yuqori chastotada ustun. → [[Video montaj texnik xatolari]] #196

Bog'liq: [[Ilova 3D modelidan shaffof turntable video]] · [[GoldSrc MDL formati va skin muharriri]] · [[HyperFrames GSAP tuzoqlari]] · [[Motion design]]
