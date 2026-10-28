---
tur: xato
sana: 2026-10-17
teglar: [nakleyka, 3d, ux, webgl]
---
# 3D nakleyka: ramka cho'zilib ketishi, surishda to'xtab qolishi

**Foydalanuvchi shikoyati (skrinshot bilan):** OK'dan keyin ham sozlash ramkasi chiqadi; surayotganda "kvadrat ichidagi nuqta burchakka borsa to'xtab qoladi"; ramka butun ekranga qiyshiq cho'zilgan.

**Sabablar:**
1. Surish faqat kursor ostida model bo'lsa ishlardi (`pick` → null bo'lsa harakat yo'q) → chetda to'xtaydi.
2. Nakleyka kameraga **yonbosh** yuzaga (ustki qirra) yopishsa, F ⟂ kamera → proyeksiyada ramka cheksiz cho'ziladi, nakleyka bir necha qismga chiziq bo'lib tushadi.
3. Kichik nakleykada tutqich radiusi (10 px, Androidda 26 px) markazni ham qamraydi → o'rtasidan ushlansa **cho'ziladi**, siljimaydi.
4. Model tashqarisida o'z tekisligi bo'ylab sirpantirish qiya burchakda nakleykani kameradan uzoqqa otib yubordi (kichrayib, ushlab bo'lmaydi).

**TO'G'RI YO'L:**
- OK — yakuniy: qayta ochish moduli olib tashlandi, faqat Ctrl+Z / ↶.
- Surish: sirt bo'ylab, lekin yangi normal joriy F bilan `dot > 0.6` bo'lsagina; aks holda markaz sirt nuqtasiga, yo'nalish o'zgarmaydi; model tashqarisida — **kameraga parallel tekislik** (doimiy chuqurlik).
- `stickerFrame`: `dot(-n, camF) < 0.4` bo'lsa F = camF (kameraga qaratish).
- Tutqich radiusi = `min(base, 0.45 × markaz–tutqich masofasi)`; Androidda tutqich chizmasi ham kichrayadi.
- Sinash: Playwright'da haqiqiy `page.mouse` bilan model chetidan tashqariga sudrash, har qadamda C ni yozish. Claude brauzer paneli **yashirin bo'lsa rAF to'xtaydi** — chizishga bog'liq testlarni Playwright'da qiling.

Bog'liq: [[GoldSrc MDL formati va skin muharriri]] · [[Android emulyator va WebView tuzoqlari]]

- **OK dan keyin o'sha joyni bosish yangi kvadrat ochardi** (2026-10-24, 2.3.3, stop-hook talabi: "OK bosgandan keyin yana sozlasa bo'ladigan kvadrat chiqmasin"). Eski nakleyka teksturada qolardi, lekin nakleyka asbobi va tanlangan rasm saqlanib qolgani uchun bosish o'sha rasmdan **yangi** qatlam (kvadrat bilan) yaratardi — foydalanuvchi buni "qayta ochildi" deb ko'radi. **TO'G'RI YO'L:** `commitSticker()` da tanlovni bo'shat (`S.st.cur = -1; renderLib()`); keyingi bosishda yumshoq maslahat; yangi nakleyka faqat rasm qayta tanlanganda. Sinov — haqiqiy sichqoncha bilan: qo'yish → surish → ✓ → nakleyka asbobida va tanlash asbobida qayta bosish → Ctrl+Z / Ctrl+Shift+Z.
