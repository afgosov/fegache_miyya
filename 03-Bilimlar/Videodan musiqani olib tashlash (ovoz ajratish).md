---
tur: bilim
sana: 2026-10-28
teglar: [montaj, ovoz, musiqa, ajratish, roformer, sfx]
---
# Videodan musiqani olib tashlash (ovoz ajratish)

**Vazifa:** tayyor videodan fon musiqasini olib tashlash, video va ovoz sifati o'zgarmasin.

## Ishlagan yo'l
- Vosita: `audio-separator` → `D:\claude_ish\asboblar\venv_torch` (torch 2.6.0+cu124 saqlandi: `-c constr.txt` ichida `torch==2.6.0`; `audioread` qo'lda qo'shildi).
- Model: **`model_bs_roformer_ep_317_sdr_12.9755.ckpt`** (BS-RoFormer, vokal SDR 12.97 — ovoz uchun eng ishonchli), `--sample_rate 48000`, WAV.
- Asl audio → `pcm_f32le` WAV → ajratish → `ffmpeg -map 0:v -c:v copy -tag:v hvc1 -c:a aac -b:a 320k -map_metadata 0 -movflags +faststart`.
- Tekshiruv: video MD5 (`-map 0:v -c copy -f md5 -`) asl bilan teng; o'zaro korrelyatsiya bo'yicha siljish 0; spektrogramma (asl / ovoz / musiqa ustma-ust); LUFS va peak.

## Tuzoqlar
- **GPU band bo'lsa (Premiere, mzai, whisper-server) VRAM ~1 GB qoladi** → RoFormer GPU'da sysmem'ga to'kilib 50+ daqiqa osilib qoldi. Avval `nvidia-smi` bilan bo'sh VRAM'ni ko'r: < 2 GB bo'lsa — darhol CPU.
- 2026-10-29: VRAM ~2.7 GB bo'sh bo'lganda GPU ishladi — ~6 s/bo'lak, 36 s audio 1.5 daqiqada. Skript: `loyihalar\2026-10-28_musiqa_olib_tashlash\sep.py <wav> <out> <models> <sr> [--cpu]`; `sr` = asl audio chastotasi (44100 bo'lsa resample yo'q).
- `CUDA_VISIBLE_DEVICES=` bilan audio-separator "Invalid device id" xatosi beradi → python o'rami: `torch.cuda.is_available = lambda: False`, keyin `Separator(...)`.
- CPU tezligi: 51 s audio = 25 bo'lak × ~63 s ≈ **27 daqiqa** (overlap 8, fp32). fp16 ishlatma — natija bit-baravar bir xil bo'lmaydi ([[Render tezlashtirish (sifat o'zgarmasdan)]]).
- ⚠️ **Vokal ajratish SFX'ni ham olib tashlaydi** (musiqa stemiga tushadi). Reklama videosida SFX bo'lsa, "ortiqcha hech nima o'zgarmasin" = SFX qolishi kerak → DnR model kerak: **Bandit v2** (Zenodo 12701995, `checkpoint-multi.ckpt`, 48 kHz, nutq/musiqa/sfx) + MSST `configs/config_dnr_bandit_v2_mus64.yaml`. Musiqa stemiga qo'llab `sfx` olinadi, ovoz RoFormer'dan qoladi. MSST — tashqi kod: ishga tushirishdan oldin foydalanuvchidan ruxsat kerak (auto-mode bloklaydi). Checkpoint faqat `torch.load(weights_only=True)` bilan ochiladi (ishladi).

Bog'liq: [[Video montaj texnik xatolari]], [[Montaj qizil chiziqlar]]
