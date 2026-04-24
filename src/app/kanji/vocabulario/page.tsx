// src/app/kanji/vocabulario/page.tsx

import { Suspense } from "react";
import { AVAILABLE_LEVELS, getKanjiByLevel, getKanjiExamples, kanjiExampleToText } from "@/data/kanji";
import type { Lesson } from "@/types/japanese";
import VocabularyPage from "@/app/components/vocabulary/VocabularyPage";

// Build lessons from kanji data — groups of 5, matching Flutter's kanjiLessons structure
function buildKanjiLessons(): Lesson[] {
  const lessons: Lesson[] = [];
  const chunkSize = 5;

  for (const level of AVAILABLE_LEVELS) {
    const entries = getKanjiByLevel(level).filter(k => k.meaning !== "");

    for (let i = 0; i < entries.length; i += chunkSize) {
      const chunk = entries.slice(i, i + chunkSize);
      const lessonNum = Math.floor(i / chunkSize) + 1;

      lessons.push({
        id: `kanji-l${level}-${lessonNum}`,
        lesson: `Nivel ${level} · Lección ${lessonNum} — ${chunk.map(k => k.char).join("・")}`,
        characters: chunk.map(k => k.char),
        vocabulary: chunk.map((k) => {
          const examples = getKanjiExamples(k);

          return {
            word: k.char,
            romaji: k.on.length > 0 ? k.on[0] : k.kun[0] ?? "",
            meaning: k.meaning,
            example: examples[0] ? kanjiExampleToText(examples[0]) : `${k.char}。`,
            examples,
          };
        }),
      });
    }
  }

  return lessons;
}

const KANJI_LESSONS = buildKanjiLessons();

export default function KanjiVocabularioPage() {
  return (
    <Suspense>
      <VocabularyPage
        lessons={KANJI_LESSONS}
        scriptType="kanji"
        backHref="/kanji"
        backLabel="Kanji"
        accent="#2E7D32"
        accentSoft="rgba(46,125,50,"
        gradient="linear-gradient(135deg, #A5D6A7, #2E7D32)"
      />
    </Suspense>
  );
}