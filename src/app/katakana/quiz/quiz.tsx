"use client";

import QuizPage from "@/app/components/quiz/QuizPage";
import { KATAKANA_LESSONS, KATAKANA_DAKUTEN_CHARS, KATAKANA_HANDAKUTEN_CHARS } from "@/data/katakana";
import type { Lesson } from "@/types/japanese";

const EXTRA_LESSONS: Lesson[] = [
  {
    id: "katakana-dakuten",
    lesson: "Sonidos sonoros — ガ ザ ダ バ",
    characters: KATAKANA_DAKUTEN_CHARS.map((c) => c.char),
    vocabulary: [],
  },
  {
    id: "katakana-handakuten",
    lesson: "Sonidos semi-sonoros — パ行",
    characters: KATAKANA_HANDAKUTEN_CHARS.map((c) => c.char),
    vocabulary: [],
  },
];

export default function KatakanaQuizPage() {
  return (
    <QuizPage
      lessons={[...KATAKANA_LESSONS, ...EXTRA_LESSONS]}
      scriptType="katakana"
      backHref="/katakana"
      backLabel="Katakana"
      accent="#1A4BC0"
      accentSoft="rgba(167,196,242,"
      gradient="linear-gradient(135deg, #64B5F6 0%, #1A4BC0 100%)"
    />
  );
}