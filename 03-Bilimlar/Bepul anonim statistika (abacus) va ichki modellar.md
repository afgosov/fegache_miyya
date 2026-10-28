---
tur: bilim
sana: 2026-10-17
teglar: [statistika, abacus, telemetriya, desktop, android]
---
# Bepul anonim statistika (abacus) va dastur ichidagi modellar

Birinchi qo'llanish: [[CS Skin Studio]] 1.9.

## Statistika — hisobsiz, serversiz
- **abacus.jasoncameron.dev** — bepul hisoblagich API, CORS bor, ro'yxatdan o'tish yo'q. `GET /hit/<ns>/<key>` (+1), `/get/...`, `/create/<ns>/<key>?initializer=N` (int64 sig'adi).
- Cheklov: **10 soniyada 30 so'rov / IP**; kalit **kamida 3 belgi** (`u`, `cn` → 400 xato!); har murojaatda kalit 6 oyga uzayadi.
- Davlat: `api.country.is` (zaxira `ipwho.is`) — CORS bor, kalitsiz.
- Sxema: `users`, `u-win`/`u-and`, `c-UZ` (davlat), `d-YYYYMMDD` (kunlik faol); davlatlar ro'yxati — `cnt` hisoblagich + `ci-N` (qiymat = harflar kodi `(A..Z)*27+...`). O'rnatish bir marta (`css_st_u`), kunlik bir marta (`css_st_d`) — localStorage.
- Muallif paneli yashirin: bosh sahifa belgisi 7 marta → PIN (SHA-256 xesh kodda) → 📊 tugma; so'rovlar 380 ms oraliq bilan (limitga tushmaslik).
- Sinovda haqiqiy sanoqni buzmaslik: `localStorage.css_stat_ns = "cssk-test-..."`.
- Sozlamalarda o'chirish (`optStats`) — anonimlik va rozilik uchun.

## Dastur ichidagi standart modellar
- 96 ta `v_/p_/w_` → `std\` + `index.json` (`installer/tools_models/make_std.py`). Manba: qurol teksturalari asl, qo'llari logosiz yig'ma.
- `api()` boshida `cs=%40std` → `stdApi()` (`fetch("std/...")`): galereya, bosh sahifa, Ilhom, To'plam o'zgarishsiz ishlaydi.
- Kompyuter: `std.zip` resurs → o'rnatishda `app\std\`, host `GET /std/<nom>.(mdl|json)` (regex bilan himoya). Android: `assets/www/std/` (APK 0.26 → 7 MB).

Bog'liq: [[Android APK - Gradle'siz WebView ilova]] · [[Lokal yordamchi server (brauzer ilova + C# host)]]
