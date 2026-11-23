// The One-Line Laugh — make.fun bounty
// u-ronigrv-the-one-line-laugh-7ccca46f
//
// One funny line, single sentence, at most 200 characters.
// Deterministic: the same line, byte for byte, on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The line. One sentence, everyday truth (killing houseplants),
// twist at the end: the plants wanted water, not a pep talk.
// Revised: "motivational speech" is a sharper, more specific image
// than "told them I loved them", and "encouragement" pairs with it,
// so the punch lands on the contrast instead of repeating the setup.
const LINE =
  "I gave my plants a motivational speech every morning, and they still died — turns out they wanted water, not encouragement.";

const OUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

// A one-liner is only worth submitting if it is one real line of text.
if (LINE.length === 0 || LINE.length > MAX_CHARS) {
  throw new Error(`line must be 1-${MAX_CHARS} chars, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");

// No trailing newline: the gate counts every character, and the file
// must hold exactly the line — nothing before it, nothing after it.
console.log(`wrote ${LINE.length} chars to ${OUT_PATH}`);
