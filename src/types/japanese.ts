// ─── Script types ────────────────────────────────────────────────────────────

export type ScriptType = "hiragana" | "katakana" | "kanji";

// ─── Character ───────────────────────────────────────────────────────────────

export interface JapaneseCharacter {
  char: string;          // あ
  romaji: string;        // a
  strokeCount: number;   // 3
  row: string;           // "a-row" | "ka-row" | ...
  type: "basic" | "dakuten" | "handakuten" | "combo" | "small";
}

// ─── Vocabulary ──────────────────────────────────────────────────────────────

export interface VocabWord {
  word: string;          // あさ
  romaji: string;        // asa
  meaning: string;       // Mañana
  example: string;       // あさごはんをたべます。- Como el desayuno.
}

// ─── Lesson ──────────────────────────────────────────────────────────────────

export interface Lesson {
  id: string;            // "hiragana-1"
  lesson: string;        // "Lección 1 - A, I, U, E, O"
  characters: string[];  // ["あ", "い", "う", "え", "お"]
  vocabulary: VocabWord[];
}

// ─── Kanji ───────────────────────────────────────────────────────────────────

export interface KanjiEntry {
  kanji: string;         // 一
  strokeCount: number;   // 1
  readings: {
    on: string[];        // ["イチ", "イツ"]
    kun: string[];       // ["ひと-", "ひと.つ"]
  };
  meaning: string[];     // ["one", "uno"]
  level: number;         // JLPT level: 1 = N5, 2 = N4, ...
}

// ─── Quiz ────────────────────────────────────────────────────────────────────

export type QuizType =
  | "char-to-romaji"    // Ves あ → eliges "a"
  | "romaji-to-char"    // Ves "a" → eliges あ
  | "char-to-meaning"   // Ves vocab → eliges significado
  | "drawing";          // Dibujas el carácter

export interface QuizQuestion {
  id: string;
  type: QuizType;
  question: string;
  correctAnswer: string;
  options: string[];     // Para preguntas de selección múltiple
  character?: string;    // Carácter relacionado (para drawing)
}

export interface QuizResult {
  questionId: string;
  correct: boolean;
  timeMs: number;
  userAnswer: string;
}

export interface QuizSession {
  id: string;
  scriptType: ScriptType;
  lessonId?: string;
  questions: QuizQuestion[];
  results: QuizResult[];
  startedAt: Date;
  completedAt?: Date;
}

// ─── Progress ────────────────────────────────────────────────────────────────

export interface CharacterProgress {
  char: string;
  scriptType: ScriptType;
  attempts: number;
  successes: number;
  strokeAccuracy: number;   // 0–1
  lastPracticed?: Date;
}

export interface LessonProgress {
  lessonId: string;
  completed: boolean;
  quizBestScore: number;    // 0–100
  vocabKnown: string[];     // words the user marked as known
}

// ─── User ────────────────────────────────────────────────────────────────────

export interface UserSettings {
  strokeWidth: number;      // Drawing canvas pen width (default: 15)
  showRomaji: boolean;      // Show romaji hints
  language: "es" | "en";   // UI language
}

export interface User {
  id: string;
  email: string;
  name: string;
  settings: UserSettings;
  createdAt: Date;
}

// ─── Table display ───────────────────────────────────────────────────────────

export interface TableCell {
  char: string | null;      // null = empty cell (e.g. yi, ye don't exist)
  romaji: string | null;
}

export interface TableRow {
  label: string;            // "a", "ka", "sa" ...
  cells: TableCell[];
}