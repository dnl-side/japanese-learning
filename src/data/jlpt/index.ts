import { JLPT_MOCK_BLUEPRINTS } from "./blueprints";
import { generateJlptMockFromPool } from "./generators";
import { JLPT_LEVEL_META, JLPT_SECTION_META } from "./levels";
import { n5JlptGuides, n5JlptQuestions } from "./n5";
import type { JlptItemType, JlptItemTypeGuide, JlptLevel, JlptMockResult, JlptQuestion, JlptSection } from "./types";

export * from "./blueprints";
export * from "./levels";
export * from "./types";

export const allJlptQuestions: JlptQuestion[] = [...n5JlptQuestions];
export const allJlptGuides: JlptItemTypeGuide[] = [...n5JlptGuides];

export function getJlptQuestionsByLevel(level: JlptLevel): JlptQuestion[] {
  return allJlptQuestions.filter((question) => question.level === level);
}

export function getJlptQuestionsBySection(level: JlptLevel, section: JlptSection): JlptQuestion[] {
  return allJlptQuestions.filter((question) => question.level === level && question.section === section);
}

export function getJlptQuestionsByItemType(level: JlptLevel, section: JlptSection, itemType: JlptItemType): JlptQuestion[] {
  return allJlptQuestions.filter(
    (question) => question.level === level && question.section === section && question.itemType === itemType,
  );
}

export function getJlptGuidesByLevel(level: JlptLevel): JlptItemTypeGuide[] {
  return allJlptGuides.filter((guide) => guide.level === level);
}

export function getJlptGuidesBySection(level: JlptLevel, section: JlptSection): JlptItemTypeGuide[] {
  return allJlptGuides.filter((guide) => guide.level === level && guide.section === section);
}

export function getJlptGuide(level: JlptLevel, section: JlptSection, itemType: JlptItemType): JlptItemTypeGuide | undefined {
  return allJlptGuides.find((guide) => guide.level === level && guide.section === section && guide.itemType === itemType);
}

export function getJlptQuestionById(id: string): JlptQuestion | undefined {
  return allJlptQuestions.find((question) => question.id === id);
}

export function getJlptLevelStats(level: JlptLevel): {
  totalQuestions: number;
  guideCount: number;
  sectionCounts: Record<JlptSection, number>;
} {
  const questions = getJlptQuestionsByLevel(level);
  return {
    totalQuestions: questions.length,
    guideCount: getJlptGuidesByLevel(level).length,
    sectionCounts: {
      vocabulary: questions.filter((question) => question.section === "vocabulary").length,
      grammar: questions.filter((question) => question.section === "grammar").length,
      reading: questions.filter((question) => question.section === "reading").length,
      listening: questions.filter((question) => question.section === "listening").length,
    },
  };
}

export function generateJlptMock({ level, seed }: { level: JlptLevel; seed: string }): JlptMockResult {
  const blueprint = JLPT_MOCK_BLUEPRINTS[level];
  return generateJlptMockFromPool({ pool: allJlptQuestions, blueprint, seed });
}

export function getSectionHref(level: JlptLevel, section: JlptSection): string {
  return `/jlpt/${JLPT_LEVEL_META[level].slug}/${section}`;
}

export function getItemTypeHref(level: JlptLevel, section: JlptSection, itemType: JlptItemType): string {
  return `/jlpt/${JLPT_LEVEL_META[level].slug}/${section}/${itemType}`;
}

export function getSectionLabel(section: JlptSection): string {
  return JLPT_SECTION_META[section].label;
}
