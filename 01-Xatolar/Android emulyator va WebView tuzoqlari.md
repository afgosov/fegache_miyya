---
tur: xato
sana: 2026-10-17
teglar: [android, webview, emulyator, saf, webgl]
---
# Android emulyator va WebView tuzoqlari

1. **Emulyator "trampoline … legacy emulator not exist"** — `emulators;…` (Preview, channel-2) paketi olingan. TO'G'RI: repo'dagi `path="emulator"` **channel-0** arxivi.
2. **javac: LambdaMetafactory.metafactory topilmadi** — android.jar'da yo'q. TO'G'RI: bootclasspath'ga `build-tools/…/core-lambda-stubs.jar`.
3. **3D kanvas bo'sh (WebGL chizmaydi, xato yo'q)** — emulyatorda ishga tushganda yaratilgan chizish buferi ekranga chiqmaydi; faqat kanvas o'lchami *haqiqatan* o'zgarsa tiklanadi (bir xil qiymat berish yordam bermaydi). TO'G'RI: ishga tushganda, model ochilganda va `onResume` da `canvas.width -= 1` (keyingi kadr asl o'lchamga qaytaradi). Viewport'ni majburlash yetarli emas edi.
4. **Fayl tanlash oynasida faylni bosish "Ochish" (VIEW) qilib yubordi** — avtomatika `Preview the file …` belgisini bosgan; `EXTRA_ALLOW_MULTIPLE` ham shubhali. TO'G'RI: bitta fayl tanlash; uiautomator'da nomni **aniq** (`tapx`) bosish; saqlash oynasida nom maydonini koordinata bilan bosish (aks holda "Overwrite?").
5. **Sun'iy PointerEvent'da offsetX/offsetY noto'g'ri** — Chrome ishonchli hisoblamaydi, aylantirish 3× bo'lib ketdi. TO'G'RI: `Object.defineProperty(ev,"offsetX",{value: clientX - rect.left})`.
6. **Ulashish o'zimizga qaytdi** — chooser'da yagona qabul qiluvchi o'z ilovamiz bo'lsa avtomatik tanlanadi. TO'G'RI: `EXTRA_EXCLUDE_COMPONENTS` bilan o'z activity'ni chiqarish.
7. **Tugmani hujjatga qo'shilmagan konteynerga ko'chirib, `$("#id")` bilan qidirish → null** — butun skript to'xtadi. TO'G'RI: avval havolani olish yoki `container.querySelector`.
8. **Git Bash `adb push … /sdcard/…` yo'lni buzadi** (`C:/Program Files/Git/sdcard`) — TO'G'RI: `MSYS_NO_PATHCONV=1`.
9. **Oyna ochilganda qidirish maydoni avtofokus → klaviatura ekranni yopadi** — TO'G'RI: Androidda `.ovl` ochilganda `activeElement.blur()`.
10. **Emulyator WebGL ilova ochilganda qulaydi (exit 139)** — `-gpu swiftshader_indirect` bilan (2026-10-21, bir necha marta). TO'G'RI: `-gpu host` (`-no-window` bilan ham ishlaydi, 36 s da yuklandi, o'yin va bot chizildi).
11. **Playwright `connectOverCDP` WebView'ga ulanmaydi** — "Browser context management is not supported". TO'G'RI: `/json/list` dagi page `webSocketDebuggerUrl` ga Node'ning o'z `WebSocket` i bilan to'g'ridan-to'g'ri CDP (`Runtime.evaluate` awaitPromise+returnByValue) — skript: scratchpad `cdp_eval.mjs`.
12. **CDP `Page.captureScreenshot` WebGL kanvasni ko'rsatmaydi** (faqat HTML, osmon foni). TO'G'RI: `adb exec-out screencap -p > x.png`.
13. **`adb shell input tap` koordinatasi** = (CSS × devicePixelRatio) + **holat paneli balandligi** (y ga, dpr 2.625 da ≈ 63 px). Sun'iy PointerEvent nakleyka ✓ ni bosmadi — haqiqiy teginish kerak.
14. **`emulator -avd cs` → "Unknown AVD name"** (2026-10-23) — AVD `D:\Android\home\avd` da. TO'G'RI: `ANDROID_AVD_HOME=D:/Android/home/avd emulator -avd cs -gpu host -no-snapshot-save -no-audio -no-boot-anim`, keyin `adb wait-for-device shell 'while [ "$(getprop sys.boot_completed)" != 1 ]; do sleep 2; done'`.
15. **Release APK'da WebView DevTools yo'q** (`setWebContentsDebuggingEnabled` faqat FLAG_DEBUGGABLE da). TO'G'RI: sinov uchun scratchpad'da `build` modulini import qilib, manifestga `android:debuggable="true"` qo'shilgan nusxa bilan yig'ish (`build.B/OUT` scratchpad'ga, `build.run` manifest yo'lini almashtiradi) — `dist` ga tegmaydi; sinovdan keyin `adb install -r dist\…apk` bilan release qaytariladi.

Bog'liq: [[Android APK - Gradle'siz WebView ilova]] · Playwright tuzoqlari
