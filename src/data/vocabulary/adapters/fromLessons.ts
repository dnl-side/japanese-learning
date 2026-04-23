import type { GrammarLesson } from "@/data/grammar/lessons";
import type { VocabularyCollection, VocabularyEntry, VocabularyTopic } from "../types";

function intersects(a: string[] | undefined, b: string[] | undefined): boolean {
  if (!a?.length || !b?.length) return false;

  const set = new Set(a.map((value) => value.toLowerCase()));
  return b.some((value) => set.has(value.toLowerCase()));
}

function uniqueTopics(values: VocabularyTopic[]): VocabularyTopic[] {
  return [...new Set(values)];
}

export function buildCollectionsFromLessons(
  lessons: GrammarLesson[],
  entries: VocabularyEntry[],
): VocabularyCollection[] {
  const collections: VocabularyCollection[] = [];

  for (const lesson of lessons) {
    const matched = entries.filter((entry) => {
      if (entry.relatedLessonSlugs?.includes(lesson.slug)) return true;
      if (intersects(entry.relatedVocabularyTags, lesson.relatedVocabularyTags)) return true;
      if (intersects(entry.tags, lesson.relatedVocabularyTags)) return true;
      return false;
    });

    if (!matched.length) continue;

    collections.push({
      id: `lesson:${lesson.slug}`,
      label: lesson.shortTitle ?? lesson.title,
      description: `Vocabulario relacionado con la lección ${lesson.order
        .toString()
        .padStart(2, "0")}: ${lesson.title}.`,
      level: lesson.level,
      topics: uniqueTopics(matched.flatMap((entry) => entry.topics)),
      entryIds: matched.map((entry) => entry.id),
      accent: "#2563EB",
    });
  }

  return collections;
}