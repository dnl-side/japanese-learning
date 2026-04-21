// src/lib/quizGenerator.ts

import type { Lesson, ScriptType } from "@/types/japanese";
import { HIRAGANA_ALL_CHARS, HIRAGANA_DAKUTEN_CHARS, HIRAGANA_HANDAKUTEN_CHARS } from "@/data/hiragana";
import { KATAKANA_ALL_CHARS, KATAKANA_DAKUTEN_CHARS, KATAKANA_HANDAKUTEN_CHARS } from "@/data/katakana";

// ─── Types ────────────────────────────────────────────────────────────────────

export type QuizMode = "char-to-romaji" | "romaji-to-char";

export interface QuizQuestion {
  id: string;
  mode: QuizMode;
  prompt: string;       // what the user sees as the question
  promptType: "char" | "romaji";
  correct: string;      // correct answer
  options: string[];    // 4 shuffled options including correct
  char: string;         // original character (for reference)
  romaji: string;
}

export interface QuizConfig {
  lessonIds: string[];  // empty = all lessons
  mode: QuizMode;
  count: number;        // number of questions
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickDistractors(
  correct: string,
  pool: string[],
  count: number
): string[] {
  const filtered = pool.filter((v) => v !== correct);
  return shuffle(filtered).slice(0, count);
}

// Get all chars for a script (used to generate distractors)
function getAllChars(scriptType: ScriptType) {
  if (scriptType === "hiragana") {
    return [
      ...HIRAGANA_ALL_CHARS,
      ...HIRAGANA_DAKUTEN_CHARS,
      ...HIRAGANA_HANDAKUTEN_CHARS,
    ];
  }
  return [
    ...KATAKANA_ALL_CHARS,
    ...KATAKANA_DAKUTEN_CHARS,
    ...KATAKANA_HANDAKUTEN_CHARS,
  ];
}

// ─── Generator ────────────────────────────────────────────────────────────────

export function generateQuiz(
  lessons: Lesson[],
  scriptType: ScriptType,
  config: QuizConfig
): QuizQuestion[] {
  // Pick source lesson(s)
  const sourceLessons = config.lessonIds.length > 0
    ? lessons.filter((l) => config.lessonIds.includes(l.id))
    : lessons;

  // Collect all chars from selected lessons
  const lessonChars = sourceLessons.flatMap((l) => l.characters);

  // All chars for distractors
  const allChars = getAllChars(scriptType);
  const allRomaji = [...new Set(allChars.map((c) => c.romaji))];
  const allCharStrs = [...new Set(allChars.map((c) => c.char))];

  // Build char→romaji map from allChars
  const romajiMap: Record<string, string> = {};
  allChars.forEach((c) => { romajiMap[c.char] = c.romaji; });

  // Generate one question per char, shuffle, then take count
  const questions: QuizQuestion[] = shuffle(lessonChars).slice(0, config.count).map((char, i) => {
    const romaji = romajiMap[char] ?? char;

    if (config.mode === "char-to-romaji") {
      // Show char → pick romaji
      const distractors = pickDistractors(romaji, allRomaji, 3);
      const options = shuffle([romaji, ...distractors]);
      return {
        id: `q-${i}`,
        mode: config.mode,
        prompt: char,
        promptType: "char",
        correct: romaji,
        options,
        char,
        romaji,
      };
    } else {
      // Show romaji → pick char
      const distractors = pickDistractors(char, allCharStrs, 3);
      const options = shuffle([char, ...distractors]);
      return {
        id: `q-${i}`,
        mode: config.mode,
        prompt: romaji,
        promptType: "romaji",
        correct: char,
        options,
        char,
        romaji,
      };
    }
  });

  return questions;
}