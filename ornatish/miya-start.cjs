// SessionStart hook: miyadagi muhim bilimlarni Claude kontekstiga avtomatik yuklaydi.
// Claude Code har bir hook chiqishini 10 000 belgi bilan cheklaydi (ortig'i faylga tushadi, faqat 2 000 belgi ko'rinadi),
// shuning uchun miya bir nechta bo'lakka bo'linadi: `node miya-start.cjs <N>` N-bo'lakni chiqaradi.
// settings.json da N = 0, 1, 2, 3 uchun to'rtta hook bor (ornat.cjs qo'yadi). 0-bo'lak har doim montaj qizil chiziqlari.
const fs = require('fs'), path = require('path');
const V = path.resolve(__dirname, '..').replace(/\\/g, '/'); // vault = shu papkaning ota-papkasi
const CHUNK = 9500;
const N = parseInt(process.argv[2] || '0', 10) || 0;
const read = p => { try { return fs.readFileSync(path.join(V, p), 'utf8').trim(); } catch { return ''; } };

// Indeks'dan faqat xatolar va darslar bo'limlari (to'liq indeks juda katta)
const indeks = read('00-Kirish/Indeks.md');
const a = indeks.indexOf('## ❌ Xatolar'), b = indeks.indexOf('## 📚 Bilimlar');
const indeksQisqa = a >= 0 ? indeks.slice(a, b > a ? b : undefined).trim() : '';

// Muhimlik tartibida bloklar; har blok yangi bo'lakdan boshlanadi
const blocks = [
  "# 🧠 OBSIDIAN MIYA (avtomatik yuklandi)\n" +
  `Vault: ${V}. Qoidalarga QAT'IY amal qil; yangi xato/dars/bilimni so'ramasdan vaultga yoz.\n` +
  "MONTAJ ishida quyidagi qizil chiziqlar majburiy: boshlashdan oldin o'qi, topshirishdan oldin tekshiruvdan o'tkaz.\n\n" +
  read('01-Xatolar/Montaj qizil chiziqlar.md'),
  indeksQisqa + `\n\n(To'liq indeks: ${V}/00-Kirish/Indeks.md — bilimlar va loyihalar ro'yxati o'sha yerda.)`,
].filter(Boolean);

// Uzun blokni qator chegarasida bo'lib, bo'laklarga joylash
const chunks = [];
for (const blk of blocks) {
  let rest = blk;
  while (rest.length > CHUNK) {
    let cut = rest.lastIndexOf('\n', CHUNK);
    if (cut < CHUNK / 2) cut = CHUNK;
    chunks.push(rest.slice(0, cut));
    rest = rest.slice(cut).replace(/^\n+/, '');
  }
  if (rest) chunks.push(rest);
}

if (N >= chunks.length) process.exit(0);
const ctx = (N > 0 ? `# 🧠 Miya (${N + 1}/${chunks.length}-bo'lak)\n` : '') + chunks[N];
process.stdout.write(JSON.stringify({ hookSpecificOutput: { hookEventName: 'SessionStart', additionalContext: ctx } }));
