import type { JlptMockBlueprint, JlptMockResult, JlptQuestion } from "./types";

function seededRandom(seedText: string): () => number {
  let seed = 2166136261;

  for (let i = 0; i < seedText.length; i += 1) {
    seed ^= seedText.charCodeAt(i);
    seed = Math.imul(seed, 16777619);
  }

  return () => {
    seed += 0x6d2b79f5;
    let value = seed;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleWithSeed<T>(items: readonly T[], random: () => number): T[] {
  const copy = [...items];

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    const current = copy[i];
    copy[i] = copy[j];
    copy[j] = current;
  }

  return copy;
}

export function generateJlptMockFromPool({
  pool,
  blueprint,
  seed,
}: {
  pool: readonly JlptQuestion[];
  blueprint: JlptMockBlueprint;
  seed: string;
}): JlptMockResult {
  const random = seededRandom(`${blueprint.level}:${seed}`);
  const usedIds = new Set<string>();
  const sections = blueprint.sections.map((sectionPlan) => {
    const sectionQuestions: JlptQuestion[] = [];

    for (const itemPlan of sectionPlan.items) {
      const candidates = pool.filter(
        (question) =>
          question.level === blueprint.level &&
          question.section === sectionPlan.section &&
          question.itemType === itemPlan.itemType &&
          !usedIds.has(question.id),
      );

      const selected = shuffleWithSeed(candidates, random).slice(0, itemPlan.count);
      for (const question of selected) {
        usedIds.add(question.id);
        sectionQuestions.push(question);
      }
    }

    return {
      section: sectionPlan.section,
      minutes: sectionPlan.minutes,
      questions: sectionQuestions,
    };
  });

  const questions = sections.flatMap((section) => section.questions);

  return {
    id: `${blueprint.level.toLowerCase()}-${seed}`,
    level: blueprint.level,
    seed,
    title: blueprint.title,
    sections,
    questions,
  };
}
