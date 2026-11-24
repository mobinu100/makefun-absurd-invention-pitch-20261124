import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-Sentence Absurd Invention Pitch: a self-folding laundry basket
// that fixes the lost-sock annoyance by pairing lonely single socks
// into pen pals and mailing the orphans a holiday postcard.
// Design note: the laugh lives in the invention itself (pen-pal socks,
// a holiday postcard for orphans), not in a joke bolted on at the end;
// the fix is silly yet weirdly plausible — the socks come home in pairs.
// The line is 178 characters: inside the gate (1-220) and in the
// 120-200 band the brief targets. One sentence only, so fail fast if
// the text ever gains a second sentence or drifts outside the gate.
const ENTRY = "My self-folding laundry basket pairs lonely single socks into pen pals, mails the orphans a postcard saying they were never lost, just on holiday, and returns them home in pairs.";
if (ENTRY.length < 1 || ENTRY.length > 220 || ENTRY.trim().length === 0) {
  throw new Error(`entry.txt must be 1-220 non-blank characters, got ${ENTRY.length}`);
}
if ((ENTRY.match(/\./g) ?? []).length !== 1 || !ENTRY.endsWith(".")) {
  throw new Error("entry.txt must be exactly one sentence");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
