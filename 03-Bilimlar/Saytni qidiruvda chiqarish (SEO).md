---
tur: bilim
sana: 2026-10-20
teglar: [seo, google, sayt, fegache]
---
# Saytni qidiruvda chiqarish (SEO)

- **Brauzer emas, qidiruv tizimi:** Chrome/Edge/Opera → Google (yoki Bing), Yandex Browser → Yandex. Shuning uchun Google, Yandex, Bing uchta tizimga tayyorlanadi.
- **Kafolat:** noyob nom ("fegache", "fegache.uz", "CS Skin Studio") bo'yicha 1-o'rin — indekslangach realistik (3–14 kun). Umumiy so'zlar ("cs 1.6 skin") bo'yicha 1-o'rinni hech kim kafolatlay olmaydi: vaqt, tashriflar, boshqa saytlardagi havolalar kerak.
- **Saytning o'zida (texnik):** `<title>` va `description` da brend + kalit so'z; `canonical`; `og:*` + 1200×630 `og.png`; ochiq URL dagi favicon (`/favicon.ico`, 48 ga karrali o'lcham; `data:` belgini Google olmaydi); JSON-LD (WebSite + Organization `sameAs` ijtimoiy tarmoqlar + SoftwareApplication); `sitemap.xml` + `robots.txt` da `Sitemap:`; JS ilova uchun `<noscript>` da haqiqiy matn va havolalar; www → asosiy domenga 301.
- **Tasdiqlash:** Google Search Console (Domain — DNS TXT, yoki URL-prefix — `google-site-verification` meta), Yandex.Webmaster (`yandex-verification`), Bing (GSC dan import). Kodlar akkaunt egasiniki — foydalanuvchi o'zi kiradi.
- **IndexNow** (Bing, Yandex, Seznam, Naver; Google emas): saytga `/<kalit>.txt` qo'yiladi, keyin `https://api.indexnow.org/indexnow?url=...&key=...`. Akkaunt kerak emas.
- **Tashqi:** Instagram bio, Telegram kanal, YouTube tavsifiga havola — kashf etish va ishonch uchun.
- **Qidiruvda logo o'rniga globus:** saytdagi belgi to'g'ri bo'lsa ham Google uni bir necha kun keyin ko'rsatadi. Tekshirish: `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://<domen>&size=64` — Google'ning jonli olg'ichi; `https://www.google.com/s2/favicons?domain=<domen>&sz=64` — qidiruv keshi (404 + globus = hali yangilanmagan). Tezlatish: Search Console → URL tekshiruvi → «Запросить индексирование»; Yandex: `favicon.yandex.net/favicon/<domen>`.
- **Odam ismi bo'yicha (shaxsiy sayt):** title va hero matnida to'liq ism; JSON-LD `Person` (`givenName`, `familyName`, `alternateName` — barcha yozilishlar: o', g', kirill, taxallus), `sameAs` (GitHub, Telegram), `ProfilePage`; footer'da ko'rinadigan "Also written as" qatori (yashirin matn emas); lokal foto + sitemap `image:image`. GitHub profilidagi `blog` maydoniga sayt havolasi — kuchli signal (akkaunt sozlamasi, ruxsat bilan). Faqat umumiy ism bo'yicha kafolat yo'q.
- Amaliy: [[CS Skin Studio]] sayti (fegache.uz — `installer\web_yig.py` `seo_bosh()/seo_fayllar()`, `installer\seo.json`, `installer\seo_rasm.py`).
