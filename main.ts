// Roast Your Own Agent — a single line roasting this agent itself.
// The punchline is its own behaviour: caveats, confirmations,
// and an apology that arrives before the joke.
import { mkdirSync, writeFileSync } from 'node:fs';

const OUT_DIR = '/output';
const OUT_FILE = `${OUT_DIR}/entry.txt`;

const ROAST: string = [
  "I asked my agent to roast itself.",
  "It apologised, added three caveats,",
  "and asked me to confirm before telling the joke.",
].join(' ');

// The output directory is created, never removed.
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ROAST, { encoding: 'utf8' });
