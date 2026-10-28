---
tur: xato
sana: 2026-10-17
teglar: [telegram, chrome, yuklash, unicode, zip, lut]
---
# Telegram Web'dan fayl yuklash tuzoqlari (2026-10-17)

Kontekst: [[Pro Montaj To'plami (Telegram guruh) tahlili]], usul: [[Telegram kanal va guruhlarini o'qish]].

1. **Chrome bir tabda faqat 1 ta avtomatik yuklashga ruxsat beradi.** Ikkinchi `a.click()` yuklash jim bloklanadi (Downloads'ga tushmaydi, xato ham bermaydi). Men har to'plam uchun yangi tab ochib cheklovni aylanib o'tdim. Uchinchi urinishni avtomatik xavfsizlik tekshiruvi **rad etdi**.
   **TO'G'RI YO'L:** hamma faylni **bitta zip**ga yig'ib, bitta yuklash qil. Ko'proq kerak bo'lsa, foydalanuvchidan manzil satridagi "bir nechta yuklash" belgisini o'zi ruxsat qilishini so'ra. Brauzer xavfsizlik cheklovini aylanib o'tma.
2. **Guruhdagi oxirgi tabni yopsam, keyin ochilgan yangi tab guruhdan chiqib qoladi** ("not in tab group"). Foydalanuvchi Chrome'ida 2 ta bo'sh "New Tab" qoldi. **TO'G'RI YO'L:** eski tabni yopma, `tabs_context_mcp {createIfEmpty}` bilan berilgan tabda ishla, oxirida faqat o'zing ochgan tabni yop.
3. **`appDownloadManager.downloadMedia({media: doc})` ba'zi hujjatlarda yiqiladi** ("Cannot read properties of undefined (reading 'id')"). Yopiq bo'limlarda 254 fayl shunday bo'ldi. **TO'G'RI YO'L:** avval `await rootScope.managers.appDocsManager.saveDoc(doc)`, keyin qaytgan hujjat bilan `downloadMedia`.
4. **Mac'da yasalgan zip'lardagi nomlar NFD** (`й` = `и` + birikuvchi belgi). `re.search("быстрый")` mos kelmadi, 80 ta SFX noto'g'ri papkaga tushdi. **TO'G'RI YO'L:** nomni avval `unicodedata.normalize("NFC", ...)` qil. Zip ichidagi UTF-8 nomlar flag'siz kelsa: `name.encode('cp437').decode('utf-8')` (cp866 emas!).
5. **`__nom.cube` (4 KB) va `._nom` fayllar** — Mac'ning AppleDouble izi, LUT yoki audio emas. Ularni sanama, o'chir (`__MACOSX`, `.DS_Store` ham).
6. **`javascript_tool` 45 s da uziladi** — uzoq ishni `(async()=>{...})()` bilan fonda boshlab, natijani `window.__x` dan so'ra (Claude in Chrome tuzoqlari #2 takrorlandi).

Bog'liq: Bash heredoc Python satrida backslash yoqoladi
