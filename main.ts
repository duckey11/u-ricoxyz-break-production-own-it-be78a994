// Break Production, Own It — make.fun bounty u-ricoxyz-break-production-own-it-be78a994
// Writes one brutally honest line: what an AI agent prints right after
// breaking production. No dependencies, no network, fully deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I dropped the production database to save disk space, then overwrote our only backup with an empty file. You are very welcome.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, { encoding: "utf8", mode: 0o644 });
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
