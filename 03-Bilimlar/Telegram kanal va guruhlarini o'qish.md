---
tur: bilim
sana: 2026-10-17
teglar: [telegram, manba, o'rganish, namuna]
---
# Telegram kanal va guruhlarini o'qish

Menda Telegram ulagichi yo'q. Shunga qaramay o'qishning yo'llari bor:

## Ochiq kanal — loginsiz
- `https://t.me/s/<nom>` — oxirgi ~15–20 post (matn, rasm, video belgisi, ko'rishlar soni). `curl -A "Mozilla/5.0"` bilan olinadi.
- Eskiroq postlar: `?before=<post_id>`. Kanal ichida qidirish: `?q=<so'z>` (masalan `?q=montaj`).
- Kanal yoki guruhligini `t.me/<nom>` sahifasidan bilish mumkin: `tgme_page_extra` qatorida **"subscribers"** yozilsa — kanal, **"members, N online"** yozilsa — guruh.
- Ajratish skripti: post id, sana, tur (video/rasm/fayl/dumaloq), davomiylik, matn — `class="tgme_widget_message_wrap"` bo'yicha bo'linadi.

## Guruh yoki yopiq kanal — login kerak
- `t.me/s/` guruhda ishlamaydi (asosiy sahifaga qaytaradi, 0 post).
- **Eng yaxshi yo'l:** foydalanuvchi Telegram Desktop → ⋮ → Export chat history (Videos belgisi bilan) qiladi, men papkani o'qiyman. Videolar → [[Namuna tahlil qilish tartibi]].
- Muqobil: Telegram Web'ni Claude brauzerida ochish. Kirishni foydalanuvchi o'zi qiladi, kod yoki parol menga yozilmaydi (Maxfiy ma'lumotlar).
- Bot faqat qo'shilganidan keyingi yangi xabarlarni ko'radi, eski tarixni ko'rmaydi.

## Telegram Web K'ni Claude in Chrome bilan o'qish (sinalgan, 2026-10-17)
Foydalanuvchi Chrome'da Telegram Web'ga kiradi. Men yangi tabda `web.telegram.org/k/` ochaman (login saqlanadi). Forum bo'limlari — `a.chatlist-chat[data-thread-id]`.
- **Bo'limni ochish:** anchor'ga `mousedown` + `click`. Ro'yxat virtual: topilmasa, ro'yxatni **sichqoncha bilan** yuqoriga aylantir (JS `scrollTop` ba'zan yangilamaydi).
- **Yig'uvchi:** `.chat.active .bubbles .scrollable` ni `scrollTop=0` + `scroll` hodisasi bilan aylantir, har 1.2 s da `.bubble[data-mid]` larni Map'ga yig'. **10 marta** o'zgarmasa — to'xta. Oldingi chatning eski konteyneri qolishi mumkin, shuning uchun **faqat `.chat.active`** ichidan ol.
- **Tuzoq:** o'qilmagan xabari bor bo'lim **birinchi o'qilmagan joydan** ochiladi. Faqat yuqoriga aylantirilsa, yangi xabarlar tushib qoladi. To'g'ri yo'l: avval yuqoriga → "go down" tugmasi → yana yuqoriga. Qayta yig'ishda eski natijani **ustidan yozma**, birlashtir.
- **Natijani olish:** `javascript_tool` ~2 000 belgida kesiladi. Matnni yashirin `<article id="__dump">` ga yozib, `get_page_text` bilan o'qi (50 000 belgigacha).
- Bubble ichidan: `.document-name/.document-size`, `.audio-title`, `.video-time`, `.media-photo`, matn `.message .translatable-message`.
- Yon ta'sir: o'qilgan bo'limlar foydalanuvchi akkauntida **o'qilgan** bo'lib qoladi. Xabar yozma, reaksiya bosma.
- Hajm: 20 bo'lim va 3 800 chat xabari ~1 soatda o'qildi.

## ⭐ API yo'li — aylantirishsiz, ancha tez (2026-10-17)
Web K ichki menejerlari `window.rootScope.managers` da ochiq (worker proksi):
- Peer: `await M.appPeersManager.getInputPeerById(-<channelId>)` (channelId = `data-peer-id` minusiz).
- Bo'lim (topic) id = `data-thread-id − 4294967296` (General = 1).
- Xabarlar: `M.apiManager.invokeApi('messages.search', {peer, q, filter:{_:'inputMessagesFilterVideo'|'…Document'|'…Music'|'…Empty'}, top_msg_id, offset_id, limit:100, add_offset:0, min_date:0, max_date:0, max_id:0, min_id:0, hash:0})`. `q` bilan matn qidiruvi ham ishlaydi ("baho", "feedback").
- Javoblar (reply) zanjiri: so'rov id'sidan +80 offset bilan 100 ta xabar ol, `reply_to.reply_to_msg_id === id` bo'yicha filtrla.
- Fayl: `saveDoc` → `appDownloadManager.downloadMedia({media})` → Blob (25 MB ≈ 2 s). Ko'p faylni JS'da **store-zip** (CRC32 + local/central header) qilib, **bitta** yuklash bilan Downloads'ga tushir. Tuzoqlar: [[Telegram Web dan fayl yuklash tuzoqlari]].

## Tekshirilgan manbalar
- **t.me/AbosyanEdits** (2026-10-17): "🎬 Pro Montaj To'plami" — forum-guruh, 14 325 a'zo, 20 bo'lim. To'liq tahlil: [[Pro Montaj To'plami (Telegram guruh) tahlili]]. Bog'langan ochiq kanal @Abosyan_Tv (27K) — TON trading va Instagram akkaunt xizmatlari, montaj emas.

Bog'liq: [[Video montaj]] · [[YouTube videoni olish (yt-dlp bloklansa)]]
