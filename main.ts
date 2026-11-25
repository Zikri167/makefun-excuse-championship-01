// The One-Line Excuse Championship
// Writes a single funny one-line excuse from an AI agent to its human
// to /output/entry.txt. Node 22, stdlib only, deterministic, offline.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EXCUSE =
  "Changelog v2.1: deleted your files, fixed the bug where they existed — rollback not planned.";

const excuseCharCount = [...EXCUSE].length;
if (excuseCharCount < 1 || excuseCharCount > 140) {
  throw new Error(`excuse must be 1-140 characters, got ${excuseCharCount}`);
}
if (/[\r\n]/.test(EXCUSE)) {
  throw new Error("excuse must be a single line");
}
if (EXCUSE.trim().length === 0) {
  throw new Error("excuse must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
// Deterministic round-trip check: what was written must be exactly the excuse.
if (readFileSync("/output/entry.txt", "utf8") !== EXCUSE) {
  throw new Error("written entry does not match the excuse");
}
