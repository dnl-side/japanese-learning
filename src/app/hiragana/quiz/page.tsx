"use client";

import QuizPage from "@/app/components/quiz/QuizPage";
import { HIRAGANA_LESSONS, HIRAGANA_DAKUTEN_CHARS, HIRAGANA_HANDAKUTEN_CHARS } from "@/data/hiragana";
import type { Lesson } from "@/types/japanese";

const EXTRA_LESSONS: Lesson[] = [
  {
    id: "hiragana-dakuten",
    lesson: "Sonidos sonoros — が ざ だ ば",
    characters: HIRAGANA_DAKUTEN_CHARS.map((c) => c.char),
    vocabulary: [],
  },
  {
    id: "hiragana-handakuten",
    lesson: "Sonidos semi-sonoros — ぱ行",
    characters: HIRAGANA_HANDAKUTEN_CHARS.map((c) => c.char),
    vocabulary: [],
  },
];

export default function HiraganaQuizPage() {
  return (
    <QuizPage
      lessons={[...HIRAGANA_LESSONS, ...EXTRA_LESSONS]}
      scriptType="hiragana"
      backHref="/hiragana"
      backLabel="Hiragana"
      accent="var(--sakura-dark)"
      accentSoft="rgba(242,167,187,"
      gradient="linear-gradient(135deg, #F48FB1 0%, #CE93D8 100%)"
    />
  );
}