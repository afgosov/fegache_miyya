---
tur: bilim
sana: 2026-10-21
teglar: [hyperframes, 3d, webm, alpha, promo, cs-skin-studio]
---
# Ilova 3D modelidan shaffof turntable video (promo uchun)

Dasturning o'zidagi WebGL chizgich bilan qurol/modelni shaffof fonda aylantirib, HyperFrames'ga 60 fps alpha video qilib qo'yish. [[CS Skin Studio - NFS intro video]] da sinaldi.

## Konveyer
1. Ilovaning sayt versiyasini statik server bilan och (`python -m http.server 47810 -d web_build`) — asosiy test hostga tegmaydi.
2. Playwright'da modelni och, uslubni qo'lla (`__fin(nom)`), keyin `MiniGL`: `g.load(S.model, "v", {rgba: k => S.T[k].cur})` (tahrirlangan teksturalar bilan).
3. **Masofani bir marta hisobla**: `view(..., {fixed:true})` ni 3 burchakda chaqirib eng katta `dist` ni ol, so'ng hamma kadrda `{dist}` — aks holda aylanganda masshtab "nafas oladi".
4. Har kadr `canvas.toDataURL("image/png")` → `fetch("http://127.0.0.1:47811/save?p=...")` (kichik Python POST-server, faqat `ish/kadrlar` ichiga yozadi). 1080p 240 kadr ≈ 6–130 s.
5. `ffmpeg -framerate 60 -i %04d.png -c:v libvpx-vp9 -pix_fmt yuva420p -b:v 0 -crf 22 -auto-alt-ref 0 out.webm` → `alpha_mode=1`. Tekshirish: `ffmpeg -c:v libvpx-vp9 -i out.webm` bilan kadr chiqarib, burchak piksel alfasi 0 ekanini ko'r.
6. HyperFrames'da `<video muted data-start data-duration>` — vaqtsiz wrapper ichida; transformni wrapper'ga ber (videoning o'ziga emas). VP9 alpha renderda saqlanadi.

## Silliqlik qoidalari (60 fps promo)
- Kirish: wrapper `x` + SVG `feGaussianBlur stdDeviation="X 0"` proksi bir xil `expo.out` oynada (yo'nalishli motion blur) — [[Motion blur va Shutter Angle]].
- Sahnalarni musiqa takt to'riga bog'la: drop vaqti (onset) + BPM fazasini o'lchab, `B(n) = D + n·bar` formula; video `data-start` lar shu raqamlardan.
- Global qatlamlar (vinetka, grade, grain, chiroqlar) `data-layout-allow-occlusion`, konturli bezak yozuvlar `data-layout-ignore` — aks holda `check` xato beradi.

Bog'liq: [[GoldSrc MDL formati va skin muharriri]] · [[HyperFrames GSAP tuzoqlari]] · [[Motion design]]
