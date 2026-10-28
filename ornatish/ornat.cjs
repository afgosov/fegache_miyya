// Yangi kompyuterda miyani Claude Code'ga ulaydi (bir marta ishga tushiriladi, qayta ishga tushirish xavfsiz):
//   1) ~/.claude/settings.json ga SessionStart hook'lari (miya-start.cjs 0..3) qo'shiladi, eski miya hook'lari almashtiriladi;
//   2) ~/.claude/CLAUDE.md ga miya qoidalari bloki yoziladi (fayldagi boshqa matn o'zgarmaydi).
// Ishga tushirish: node ornatish/ornat.cjs
const fs = require('fs'), os = require('os'), path = require('path');

const VAULT = path.resolve(__dirname, '..').replace(/\\/g, '/');
const START = path.join(__dirname, 'miya-start.cjs').replace(/\\/g, '/');
const CDIR = path.join(os.homedir(), '.claude');
const SETTINGS = path.join(CDIR, 'settings.json');
const GLOBAL_MD = path.join(CDIR, 'CLAUDE.md');
const BOSHI = '<!-- fegache-miya:boshi -->', OXIRI = '<!-- fegache-miya:oxiri -->';
const stamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-');

fs.mkdirSync(CDIR, { recursive: true });

// 1) settings.json
let settings = {};
if (fs.existsSync(SETTINGS)) {
  const raw = fs.readFileSync(SETTINGS, 'utf8').replace(/^﻿/, '');
  try { settings = raw.trim() ? JSON.parse(raw) : {}; }
  catch (e) { console.error(`XATO: ${SETTINGS} o'qilmadi (JSON buzilgan): ${e.message}. Hech narsa o'zgartirilmadi.`); process.exit(1); }
  fs.copyFileSync(SETTINGS, `${SETTINGS}.bak-${stamp}`);
}
settings.hooks = settings.hooks || {};
const eski = Array.isArray(settings.hooks.SessionStart) ? settings.hooks.SessionStart : [];
const boshqa = eski
  .map(g => ({ ...g, hooks: (g.hooks || []).filter(h => !String(h.command || '').includes('miya-start.cjs')) }))
  .filter(g => g.hooks.length);
settings.hooks.SessionStart = [
  ...boshqa,
  { hooks: [0, 1, 2, 3].map(n => ({ type: 'command', command: `node "${START}" ${n}` })) },
];
fs.writeFileSync(SETTINGS, JSON.stringify(settings, null, 2) + '\n', 'utf8');

// 2) ~/.claude/CLAUDE.md — repo'dagi CLAUDE.md ni vault yo'li bilan blok qilib qo'yish
const qoidalar = fs.readFileSync(path.join(VAULT, 'CLAUDE.md'), 'utf8').replace(/^﻿/, '').trim()
  .replace(/^# .*\n+/, '')
  .replace(/^Bu repo — Obsidian vault\..*\n/m, `Umumiy xotira vaulti: \`${VAULT}\` (Obsidian).\n`);
const blok = `${BOSHI}\n# 🧠 Fegache Miya — uzoq muddatli xotira (MAJBURIY)\n\n${qoidalar}\n${OXIRI}`;
let md = fs.existsSync(GLOBAL_MD) ? fs.readFileSync(GLOBAL_MD, 'utf8') : '';
if (md) fs.copyFileSync(GLOBAL_MD, `${GLOBAL_MD}.bak-${stamp}`);
const i = md.indexOf(BOSHI), j = md.indexOf(OXIRI);
md = i >= 0 && j > i ? md.slice(0, i) + blok + md.slice(j + OXIRI.length) : (md.trim() ? md.trimEnd() + '\n\n' : '') + blok + '\n';
fs.writeFileSync(GLOBAL_MD, md, 'utf8');

// Tekshiruv: 0-bo'lak chiqishi kerak
const { execFileSync } = require('child_process');
const out = execFileSync(process.execPath, [START, '0'], { encoding: 'utf8' });
const ok = out.includes('qizil chiziq');
console.log(`Vault: ${VAULT}`);
console.log(`Hook'lar: ${SETTINGS} (4 ta, SessionStart)`);
console.log(`Qoidalar: ${GLOBAL_MD}`);
console.log(ok ? "✅ Tayyor. Claude Code'ni qayta oching — miya avtomatik yuklanadi." : "⚠️ miya-start.cjs chiqishi kutilganidek emas — tekshiring.");
process.exit(ok ? 0 : 1);
