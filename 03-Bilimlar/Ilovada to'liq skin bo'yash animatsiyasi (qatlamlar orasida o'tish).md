---
tur: bilim
sana: 2026-10-24
teglar: [hyperframes, 3d, cs-skin-studio, motion, skin, playwright]
---
# Ilovada to'liq skin bo'yash animatsiyasi — qatlamlar orasida yorug' o'tish

Skin qatlam-qatlam «bo'yalayotganini» ko'rsatish: har bo'yoq qatlami musiqa zarbasida qurol bo'ylab oqib o'tadi (wipe) yoki markazdan muhr kabi ochiladi (radial), chegarasida yorug' chiziq. Hammasi dasturning o'z MiniGL dvigatelida. [[CS Skin Studio - AK-47 ZEVS to'liq skin video (3-qism)]] da sinaldi.

## Konveyer
1. **Holatlar**: muharrirda ketma-ket qo'llanadi va har biridan keyin `S.T[k].cur.slice()` nusxasi olinadi. Uslub detalga: `FN.preset`, `FN.scope="sel"`, `S.selTex=k`, `runFinish()` va **darhol** `commitPending()` (aks holda keyingi detalga o'tganda oldingisi qaytariladi). Nakleyka: `S.st.depth/front/flip/op`, `placeSticker3D(pick(..))`, `commitSticker()`; `hit.p` saqlanadi (radial markazi, kadr nishoni).
2. **Kamera** (to'liq qurol kadri): nishon = bbox markazi bo'lsa vertikal kadrda qurol bir tomonga siljiydi (x −1…+0.45). To'g'risi: proyeksiya qutisini markazga keltirish (`T += r·cx·d·tan(fov/2)·W/H + u·cy·d·tan(fov/2)`) va `d *= max(yarim kenglik, yarim balandlik)`, 8 iteratsiya. Yo'l bo'yicha 7 namuna + Catmull-Rom — kadr «nafas olmaydi». **Aylanish (turntable)**: har burchakda qayta markazlash qurolni 3–4 px tebratadi → `fixc`: namunalar o'rtacha nishoni + eng katta masofa (qo'zg'almas markaz); `out3` oxirida deyarli to'xtaydi (smooth_check: muzlash, takror) → `0.55·out3 + 0.45·u`. Natija: titrash 1.33→0.28, tebranish 4.1→0.65. Yaqin kadr: `"@nakleyka"` 3D nuqtasi, `d = L × 0.55…0.86` (0.4 dan yaqin — tekstura xira).
3. **O'tish kadri**: eski va yangi holat bir xil kamerada chiziladi → 2D canvas'da yangi holat niqob bilan ustiga: wipe — qurol uzun o'qi proyeksiyasi bo'ylab `createLinearGradient` (soft 0.07, inOut), radial — `createRadialGradient` (outCubic). Yorug' chegara alohida canvas'da, `destination-in` bilan faqat qurol shakliga kesilib `lighter` qo'shiladi. Davomiylik: wipe 0.34–0.42 s, muhr 0.26 s, tushish 0.14 s.
4. **Bo'ron**: `mg.draw(..., {gain})` — 0.3 qorong'i, chaqnashda `exp(−Δt/0.075)` bilan 1.5–1.9; ayrim chaqnashlarda 2 kadr yakuniy holat (chaqmoq «ko'rinib ketadi»).
5. Kadrlar POST bilan 127.0.0.1:47811 ga, VP9 alfa webm (crf 22) → HyperFrames'da wrapper ichida (kesimda scale 1.05→1, zarbada 1.02→1).

## Playwright
- Uzun skriptni `filename` bilan berish natijada butun kodni chiqaradi (kontekst to'ladi) → kichik yuklovchi: `async (page) => eval(await (await fetch("http://127.0.0.1:47812/run.js")).text())(page)` — skript lokal serverdan.

Bog'liq: [[Ilovada nakleyka yopishish animatsiyasi (3D qo'nish qirqimi)]] · [[Ilova 3D modelidan shaffof turntable video]] · [[HyperFrames GSAP tuzoqlari]]
