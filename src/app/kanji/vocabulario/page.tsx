// src/app/kanji/vocabulario/page.tsx
import { Suspense } from "react";
import { getKanjiByLevel } from "@/data/kanji";
import type { Lesson } from "@/types/japanese";
import VocabularyPage from "@/app/components/vocabulary/VocabularyPage";

// Build lessons from kanji data — groups of 5, matching Flutter's kanjiLessons structure
function buildKanjiLessons(): Lesson[] {
  const level1 = getKanjiByLevel(1).filter(k => k.meaning !== "");
  const lessons: Lesson[] = [];
  const chunkSize = 5;

  for (let i = 0; i < level1.length; i += chunkSize) {
    const chunk = level1.slice(i, i + chunkSize);
    const lessonNum = Math.floor(i / chunkSize) + 1;
    lessons.push({
      id: `kanji-${lessonNum}`,
      lesson: `Lección ${lessonNum} — ${chunk.map(k => k.char).join("・")}`,
      characters: chunk.map(k => k.char),
      vocabulary: chunk.map(k => ({
        word: k.char,
        romaji: k.on.length > 0 ? k.on[0] : k.kun[0] ?? "",
        meaning: k.meaning,
        example: k.example || `${k.char}。`,
      })),
    });
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