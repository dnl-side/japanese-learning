//src/types/grammar.ts

import { RubySegment } from "@/app/components/ui/Ruby";

// ─── Shared ───────────────────────────────────────────────────────────────────

export interface RubyExample {
  segments: RubySegment[];
  translation: string;
}

// ─── Particles ────────────────────────────────────────────────────────────────

export interface ParticleUse {
  title: string;         // "Tema de la oración"
  examples: RubyExample[];
}

export interface ParticleEntry {
  particle: string;      // "は (wa)"
  symbol: string;        // "は"
  romaji: string;        // "wa"
  summary: string;       // one-line description
  uses: ParticleUse[];
}

// ─── Verbs ────────────────────────────────────────────────────────────────────

export type VerbGroup = "godan" | "ichidan" | "irregular";

export interface VerbConjugationExample {
  kanjiRoot: string;       // 食
  furigana: string;        // た
  morpheme: string;        // べる
  conjugatedRoot: string;  // 食
  conjugatedFurigana: string; // た
  conjugatedMorpheme: string; // べます
  meaning: string;         // Como (educado)
}

export interface VerbConjugationGroup {
  group: VerbGroup;
  title: string;
  examples: VerbConjugationExample[];
}

export interface ConjugationForm {
  key: string;           // "masu"
  title: string;         // "ます形"
  titleSegments: RubySegment[];
  description: string;
  groups: VerbConjugationGroup[];
}

// ─── Grammar rules ────────────────────────────────────────────────────────────

export interface GrammarPattern {
  pattern: string;       // "〜ています"
  meaning: string;
  examples: RubyExample[];
  notes?: string;
}

export interface GrammarLesson {
  id: string;
  title: string;
  level: "N5" | "N4" | "N3" | "N2" | "N1";
  patterns: GrammarPattern[];
}