---
tur: bilim
sana: 2026-10-17
teglar: [android, apk, webview, saf, emulyator]
---
# Android APK — Gradle'siz WebView ilova (HTML dasturni telefonga)

Birinchi qo'llanish: [[CS Skin Studio]] Android 1.9.0 (`D:\CS Skin Studio\android\`).

## Vositalar (hammasi `D:\Android\`, admin kerak emas)
- JDK 17: `aka.ms/download-jdk/microsoft-jdk-17-windows-x64.zip`.
- SDK paketlari to'g'ridan-to'g'ri `dl.google.com/android/repository/` dan (ro'yxat `repository2-3.xml`): build-tools 35, platform-35, platform-tools, **emulator — channel-0 (barqaror)**, system-image `sys-img/android/x86_64-34_r04.zip`.
- AVD qo'lda: `home/avd/cs.ini` + `cs.avd/config.ini`; env `ANDROID_SDK_ROOT`, `ANDROID_AVD_HOME`; `C:\Users\Admin\.android` papkasi bo'lishi shart. Ishga tushirish: `emulator -avd cs -no-window -no-audio -gpu swiftshader_indirect` (WHPX bor).

## Yig'ish (build.py)
`javac -source 8 -target 8 -bootclasspath android.jar;core-lambda-stubs.jar` → `d8 --min-api 24` → `aapt2 compile/link -A assets` → zip'ga classes.dex → `zipalign -p 4` → `apksigner sign` (kalit `keys/release.jks`, parol `keystore.properties` da — **yangilanishlar uchun shu kalit kerak**).

## Arxitektura
- Sahifa `https://app.local/index.html` — `shouldInterceptRequest` assetlardan beradi (CORS yo'q, secure origin).
- `GET /api/...` ham intercept'da (rasm `<img src>` lar o'zgarishsiz ishlaydi); POST tanasini intercept ko'rmaydi → JS ko'prigi `AndroidHost.post(id, method, path, qs, base64)` → Java ishchi oqim → `evaluateJavascript(__andRes(...))`.
- Fayl API polifillari: `showOpenFilePicker` → ACTION_OPEN_DOCUMENT (+persistable, ustiga yozish ishlaydi), `showSaveFilePicker` → avval o'z "Qayerga saqlaymiz?" oynasi: **Telefonga** (ACTION_CREATE_DOCUMENT) / **Ulashish** (o'z ContentProvider + chooser) / **Galereya** (MediaStore). Katta fayl — 768 KB bo'laklab vaqtinchalik faylga, keyin `openOutputStream(uri,"wt")`.
- `navigator.share`, rasm clipboard → tizim ulashish. "Ochish bilan"/"Ulashish" bilan kelgan fayllar → `__andIncoming`.
- Telefon UI: `html.android` + `@media (orientation)`; ish stoli DOM'ini JS bilan qayta joylash (harakatlar qatori, tutqich, suzuvchi undo); 2 barmoq — WheelEvent + kamera; o'yinda joystik.
- Sinash: `WebView.setWebContentsDebuggingEnabled(true)` → `adb forward tcp:9333 localabstract:webview_devtools_remote_<pid>` → Node CDP (`tools/cdp.mjs`: eval, haqiqiy touch tap/swipe/pinch) + `uiautomator dump` bilan tizim oynalari (`tools/ui.py`). Ulashishni tekshirish — kichik "ShareProbe" qabul qiluvchi APK.

Xatolar: [[Android emulyator va WebView tuzoqlari]]. Bog'liq: [[Lokal yordamchi server (brauzer ilova + C# host)]] · [[Windows installer - o'rnatilgan csc bilan]]
