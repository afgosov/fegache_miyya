---
tur: bilim
sana: 2026-10-13
teglar: [tipografiya, matn, hyperframes, tekstura, background-clip, helvetica, bosh-ortida]
---
# Matn uslubi: ingichka + qalin teksturali ("Til / sirlari")

Foydalanuvchi namunasi: tepada ingichka oq "Til", ostida juda qalin, zich harflarli "sirlari" — harf ichi osmon/suv fotosi bilan to'ldirilgan, bosh harflarning bir qismini yopadi. Sinalgan: Gavhar tsiklorama Reels (5 video + 5 abloshka).

## Shrift
- Foydalanuvchi kompyuterida Helvetica faqat Type1 (`%LOCALAPPDATA%\Microsoft\Windows\Fonts\HELVLIG.PFB` — Light, `HELVBLA.PFB` — Black). Brauzer PFB o'qimaydi → `fontTools` bilan OTF (CFF) ga o'tkazish: `_gavhar/tools/t1_to_otf.py` (T1Font → `DecomposingRecordingPen` (seac urg'uli harflar uchun shart) → `T2CharStringPen` → `FontBuilder`). Natija `HelvLight.otf`, `HelvBlack.otf` (‘ ’ bor). Kerning yo'q — zich tracking bilan sezilmaydi.
- Oila nomi noyob bo'lsin ("HelvLight", "HelvBlack"), "Serif"/"sans" kabi emas ([[HyperFrames GSAP tuzoqlari]] #14).

## CSS
```css
.tl { font-family: "HelvLight"; letter-spacing: -0.02em; line-height: .95; }
.th { font-family: "HelvBlack"; letter-spacing: -0.055em; line-height: .9; }
.th .hs { color: transparent; -webkit-background-clip: text; background-clip: text;
          background-image: url(tex/sky_cobalt.jpg); background-size: 220% 100%; padding-right: .04em; }
```
- Tekstura `maskWords` ichidagi har so'z span'iga (`.hs`) beriladi — ota elementga bersa transform/overflow'li bolalarda ishlamaydi.
- "Tirik" tekstura: `backgroundPosition 0%→100%` sekin tween (drift).
- Soya: `text-shadow` emas (shaffof harf ustiga tushadi) → `filter: drop-shadow(...)`.
- O'lcham nisbati: qalin ≈ 1.7–2× ingichka (masalan 104 / 172 px, 4K muqovada 210 / 420).

## Teksturalar (protsedural, `_gavhar/tools/make_tex.py`)
fBm shovqin + gradient xarita: `sky_cobalt` (namunadagidek osmon: tepasi oq, pasti kobalt, bulut tolalari), `silk_cherry`, `silk_butter`, `velvet_crimson`, `chrome`. Ipak burmalari past chastota (3–3.5) va yumshoq kontrast bilan — aks holda "suyuq plastik" ko'rinadi.

## Bosh ortida joylash
- Sarlavha `L_behind` qatlamida (gapiruvchi niqobi ostida). Qalin so'zning pastki ~8–26% i bosh ortiga kirsin — ko'p kirsa so'z o'qilmaydi ("pa  ti").
- Yon tomondagi blok yuzga tegsa ham `L_behind` ga qo'y (yuz harfni yopadi — tabiiy), oldingi qatlamda burun ustiga tushadi.

- **Avtomatik joylash (ONYX, 2026-10-14):** o'lcham shrift metrikasidan (`fontTools` hmtx + letter-spacing) — kadrdan chiqmasin; sarlavha spiker zoom qatlamida bo'lsa kenglik `cx ± (540−40)/1.12`. Joy: oxirgi qalin qator baseline = bosh tepasi + 0.22·sh (videoda), muqovada qutisi pasti = bosh tepasi + 0.05·hs. Bosh kadrning yuqori 12% idan baland bo'lsa — sarlavhani kostyum ustiga, old qatlamga. → `_onyx/tools/gen.py`
- **Yorug' fon (oq tsiklorama):** og'ir so'zga to'q tekstura (`cobalt_deep`), soya rangli va yengil (kobalt 0.20), subtitr to'q siyoh + kobalt urg'u, oq skrim. Och tekstura oq fonda xira "loyqa" ko'rinadi.
- **Yorqin devor (amber oniks) ustidagi muqova sarlavhasi:** sarlavha orqasiga radial to'q "scrim" (0.8 → 0) — aks holda amber harf amber devorga singib ketadi.

## Subtitr
Oddiy so'zlar HelvLight 60px oq, urg'u (`*...*`) HelvBlack + aksent rang (qora skrim ustida och variant: #ff4d5e, #9cc3ff, #f7e48a). `word-spacing: .06em`; urg'u so'z scale-in 1.06 dan oshmasin (1.2 da qo'shni so'zga minadi).

Bog'liq: [[Motion kompozitsiya va tipografiya]] · [[Matn bosh orqasida - professional usul]] · [[Video montaj uslubi]] · Markaz: [[Motion design]]
