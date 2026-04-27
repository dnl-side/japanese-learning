//src/data/grammar/lessons/index.ts

import type { RubySegment } from "@/app/components/ui/Ruby";
import lesson001 from "./lesson-001";
import lesson002 from "./lesson-002";
import lesson003 from "./lesson-003";
import lesson004a from "./lesson-004a";
import lesson004b from "./lesson-004b";
import lesson004c from "./lesson-004c";
import lesson005a from "./lesson-005a";
import lesson005b from "./lesson-005b";
import lesson006 from "./lesson-006";
import lesson007 from "./lesson-007";
import lesson008 from "./lesson-008";
import lesson009 from "./lesson-009";
import lesson010 from "./lesson-010";
import lesson011 from "./lesson-011";
import lesson012 from "./lesson-012";
import lesson013 from "./lesson-013";
import lesson014 from "./lesson-014";
import lesson015 from "./lesson-015";
import lesson016 from "./lesson-016";
import lesson017 from "./lesson-017";


export type JLPTLevel = "N5" | "N4" | "N3" | "N2" | "N1";
export type LessonStatus = "draft" | "ready";
export type LessonRubyMode = "always" | "smart" | "tap" | "off";
export type LessonTextSize = "base" | "lg" | "xl" | "2xl" | "3xl";
export type LessonSpacing = "normal" | "relaxed" | "loose";

export type LessonSectionKind =
  | "intro"
  | "concept"
  | "structure"
  | "vocabulary"
  | "examples"
  | "contrast"
  | "warning"
  | "practice"
  | "summary";

export type LessonCalloutTone = "info" | "success" | "warning" | "danger";

export type LessonInlineTone =
  | "default"
  | "muted"
  | "accent"
  | "success"
  | "warning"
  | "danger";

export type LessonInlinePart =
  | {
      type: "text";
      text: string;
    }
  | {
      type: "jp";
      segments: RubySegment[];
    }
  | {
      type: "mark";
      text: string;
      tone: LessonInlineTone;
    }
  | {
      type: "link";
      label: string;
      href: string;
      external?: boolean;
      tone?: LessonInlineTone;
    };

export type LessonRichText = LessonInlinePart[];
export type LessonTextContent = string | LessonRichText;

export interface LessonDisplayConfig {
  rubyMode: LessonRubyMode;
  bodyTextSize: LessonTextSize;
  japaneseTextSize: LessonTextSize;
  exampleTextSize: LessonTextSize;
  spacing: LessonSpacing;
  preferWideLayout: boolean;
}

export interface LessonPrompt {
  jp?: RubySegment[];
  es?: LessonTextContent;
  note?: LessonTextContent;
}

export interface LessonBreakdownItem {
  label: string;
  jp?: RubySegment[];
  es?: LessonTextContent;
}

export interface LessonStructureSlot {
  slot: string | LessonPrompt;
  value: string;
  note?: string | LessonPrompt;
}

export interface LessonPatternCard {
  id: string;
  label: string;
  pattern: RubySegment[];
  meaning: string;
  translation?: LessonTextContent;
  structure?: LessonStructureSlot[];
  notes?: LessonBulletItem[];
}

export interface LessonVocabularyItem {
  id: string;
  jp: RubySegment[];
  meaning: string;
  reading?: string;
  notes?: LessonTextContent[];
  tags?: string[];
}

export interface LessonExample {
  id: string;
  jp: RubySegment[];
  es: LessonTextContent;
  literal?: LessonTextContent;
  breakdown?: LessonBreakdownItem[];
  notes?: LessonBulletItem[];
}

export interface LessonContrastItem {
  id: string;
  label: string;
  correct: LessonPrompt;
  incorrect?: LessonPrompt;
  explanation: LessonTextContent;
}

export type LessonBulletItem = string | LessonPrompt;

export interface LessonLinkItem {
  id?: string;
  label: string;
  href: string;
  jp?: RubySegment[];
  description?: LessonTextContent;
  external?: boolean;
  tone?: LessonInlineTone;
}

export type LessonTableAlign = "left" | "center" | "right";

export interface LessonTableColumn {
  key: string;
  label: string | LessonPrompt;
  align?: LessonTableAlign;
  width?: string;
}

export type LessonTableCell =
  | string
  | LessonPrompt
  | LessonRichText;

  export interface LessonTableRow {
  id?: string;
  cells: Record<string, LessonTableCell>;
}


export type LessonContentBlock =
  | {
      type: "paragraph";
      content: LessonTextContent;
    }
  | {
      type: "bullet-list";
      items: LessonBulletItem[];
    }
  | {
      type: "pattern-cards";
      items: LessonPatternCard[];
    }
  | {
      type: "vocabulary-grid";
      items: LessonVocabularyItem[];
      columns?: 2 | 3 | 4;
    }
  | {
      type: "example-group";
      items: LessonExample[];
    }
  | {
      type: "contrast-list";
      items: LessonContrastItem[];
    }
 | {
      type: "callout";
      tone: LessonCalloutTone;
      title: string;
      content: LessonTextContent;
      bullets?: LessonBulletItem[];
    }
  | {
      type: "checklist";
      items: LessonBulletItem[];
    }
  | {
      type: "resource-links";
      title?: string;
      description?: LessonTextContent;
      items: LessonLinkItem[];
    }
  | {
      type: "table";
      title?: string;
      description?: LessonTextContent;
      columns: LessonTableColumn[];
      rows: LessonTableRow[];
      compact?: boolean;
      zebra?: boolean;
    };
    


export interface LessonSection {
  id: string;
  kind: LessonSectionKind;
  title: string;
  description?: string;
  blocks: LessonContentBlock[];
}

export interface QuizChoice {
  id: string;
  label: LessonPrompt;
}

interface QuizQuestionBase {
  id: string;
  prompt: LessonPrompt;
  explanation: string;
  relatedSectionIds?: string[];
}

export interface SingleChoiceQuizQuestion extends QuizQuestionBase {
  type: "single-choice";
  choices: QuizChoice[];
  correctChoiceId: string;
}

export interface OrderSentenceQuizQuestion extends QuizQuestionBase {
  type: "order-sentence";
  tokens: LessonOrderToken[];
  correctOrder: string[];
  answerLabel?: LessonPrompt;
}

export interface FillBlankQuizQuestion extends QuizQuestionBase {
  type: "fill-blank";
  acceptedAnswers: string[];
  placeholder?: string;
}

export type LessonQuizQuestion =
  | SingleChoiceQuizQuestion
  | OrderSentenceQuizQuestion
  | FillBlankQuizQuestion;

export interface LessonQuiz {
  id: string;
  title: string;
  description?: string;
  passScore: number;
  shuffleQuestions: boolean;
  showImmediateFeedback: boolean;
  questions: LessonQuizQuestion[];
}

export interface GrammarLesson {
  id: string;
  slug: string;
  order: number;
  level: JLPTLevel;
  status: LessonStatus;
  title: string;
  jpTitle?: string;
  shortTitle?: string;
  description: string;
  estimatedMinutes: number;
  categoryTags: string[];
  grammarTags: string[];
  searchTerms: string[];
  relatedLessonSlugs: string[];
  relatedVocabularyTags: string[];
  objectives: string[];
  display: LessonDisplayConfig;
  sections: LessonSection[];
  quiz: LessonQuiz;
}

export interface LessonOrderToken {
  id: string;
  label: LessonPrompt;
  value: string;
}

const RAW_GRAMMAR_LESSONS: GrammarLesson[] = [
  lesson001,
  lesson002,
  lesson003,
  lesson004a,
  lesson004b,
  lesson004c,
  lesson005a,
  lesson005b,
  lesson006,
  lesson007,
  lesson008,
  lesson009,
  lesson010,
  lesson011,
  lesson012,
  lesson013,
  lesson014,
  lesson015,
  lesson016,
  lesson017,
];

function compareLessons(a: GrammarLesson, b: GrammarLesson) {
  if (a.order !== b.order) return a.order - b.order;
  return a.title.localeCompare(b.title, "es");
}

function assertUniqueLessons(lessons: GrammarLesson[]) {
  const ids = new Set<string>();
  const slugs = new Set<string>();
  const orders = new Set<number>();

  for (const lesson of lessons) {
    if (ids.has(lesson.id)) {
      throw new Error(`Grammar lesson id duplicado: ${lesson.id}`);
    }

    if (slugs.has(lesson.slug)) {
      throw new Error(`Grammar lesson slug duplicado: ${lesson.slug}`);
    }

    if (orders.has(lesson.order)) {
      throw new Error(`Grammar lesson order duplicado: ${lesson.order}`);
    }

    ids.add(lesson.id);
    slugs.add(lesson.slug);
    orders.add(lesson.order);
  }
}

export const GRAMMAR_LESSONS = [...RAW_GRAMMAR_LESSONS].sort(compareLessons);

assertUniqueLessons(GRAMMAR_LESSONS);

const LESSONS_BY_ID = new Map(GRAMMAR_LESSONS.map((lesson) => [lesson.id, lesson]));
const LESSONS_BY_SLUG = new Map(GRAMMAR_LESSONS.map((lesson) => [lesson.slug, lesson]));

export function getAllGrammarLessons() {
  return GRAMMAR_LESSONS;
}

export function getGrammarLessonById(id: string) {
  return LESSONS_BY_ID.get(id);
}

export function getGrammarLessonBySlug(slug: string) {
  return LESSONS_BY_SLUG.get(slug);
}

export function getGrammarLessonsByLevel(level: JLPTLevel) {
  return GRAMMAR_LESSONS.filter((lesson) => lesson.level === level);
}

export function getGrammarLessonsByTag(tag: string) {
  const normalized = tag.trim().toLowerCase();

  return GRAMMAR_LESSONS.filter((lesson) =>
    [...lesson.categoryTags, ...lesson.grammarTags, ...lesson.searchTerms].some(
      (value) => value.toLowerCase() === normalized,
    ),
  );
}

export function getAdjacentGrammarLessons(slug: string) {
  const index = GRAMMAR_LESSONS.findIndex((lesson) => lesson.slug === slug);

  if (index === -1) {
    return {
      previous: undefined,
      current: undefined,
      next: undefined,
    };
  }

  return {
    previous: index > 0 ? GRAMMAR_LESSONS[index - 1] : undefined,
    current: GRAMMAR_LESSONS[index],
    next: index < GRAMMAR_LESSONS.length - 1 ? GRAMMAR_LESSONS[index + 1] : undefined,
  };
}

export function getGrammarLessonSummaries() {
  return GRAMMAR_LESSONS.map((lesson) => ({
    id: lesson.id,
    slug: lesson.slug,
    order: lesson.order,
    level: lesson.level,
    status: lesson.status,
    title: lesson.title,
    jpTitle: lesson.jpTitle,
    description: lesson.description,
    estimatedMinutes: lesson.estimatedMinutes,
    objectives: lesson.objectives,
  }));
}