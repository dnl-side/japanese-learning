import type { RubySegment } from "@/app/components/ui/Ruby";

export const JLPT_LEVELS = ["N5", "N4", "N3", "N2", "N1"] as const;
export type JlptLevel = (typeof JLPT_LEVELS)[number];

export const JLPT_SECTIONS = ["vocabulary", "grammar", "reading", "listening"] as const;
export type JlptSection = (typeof JLPT_SECTIONS)[number];

export type JlptQuestionMode = "strategy" | "guided" | "practice" | "mock";

export type JlptItemType =
  | "kanji-reading"
  | "orthography"
  | "context-expression"
  | "paraphrase"
  | "word-usage"
  | "form-selection"
  | "sentence-composition"
  | "text-grammar"
  | "short-passage"
  | "information-retrieval"
  | "task-based-listening"
  | "key-point-listening"
  | "quick-response";

export interface JlptLocalizedText {
  es?: string;
  jp?: RubySegment[];
  note?: string;
}

export interface JlptChoice {
  id: string;
  label: JlptLocalizedText;
}

export interface JlptOrderToken {
  id: string;
  label: JlptLocalizedText;
  value: string;
}

export interface JlptPassage {
  title?: string;
  body: RubySegment[];
  translation?: string;
  note?: string;
}

export interface JlptAudioPrompt {
  status: "pending" | "ready";
  src?: string;
  script: RubySegment[];
  note?: string;
}

export interface JlptExplanation {
  hint: string;
  strategy: string[];
  whyCorrect: string;
  whyWrong?: Record<string, string>;
}

export interface JlptQuestionBase {
  id: string;
  level: JlptLevel;
  section: JlptSection;
  itemType: JlptItemType;
  title?: string;
  instruction: JlptLocalizedText;
  prompt: JlptLocalizedText;
  passage?: JlptPassage;
  audio?: JlptAudioPrompt;
  explanation: JlptExplanation;
  tags: string[];
  source: "original";
}

export interface JlptSingleChoiceQuestion extends JlptQuestionBase {
  questionKind: "single-choice";
  choices: JlptChoice[];
  correctChoiceId: string;
}

export interface JlptOrderSentenceQuestion extends JlptQuestionBase {
  questionKind: "order-sentence";
  tokens: JlptOrderToken[];
  correctOrder: string[];
  answerLabel: JlptLocalizedText;
}

export type JlptQuestion = JlptSingleChoiceQuestion | JlptOrderSentenceQuestion;

export interface JlptItemTypeGuide {
  id: string;
  level: JlptLevel;
  section: JlptSection;
  itemType: JlptItemType;
  title: string;
  jpTitle: string;
  shortDescription: string;
  whatItTests: string[];
  solvingSteps: string[];
  commonTraps: string[];
  starterQuestionId?: string;
}

export interface JlptLevelMeta {
  level: JlptLevel;
  slug: string;
  label: string;
  jpLabel: string;
  description: string;
  accent: string;
  color: string;
  status: "ready" | "scaffold";
}

export interface JlptSectionMeta {
  section: JlptSection;
  label: string;
  jpLabel: string;
  description: string;
  accent: string;
  color: string;
}

export interface JlptMockItemPlan {
  itemType: JlptItemType;
  count: number;
}

export interface JlptMockSectionPlan {
  section: JlptSection;
  minutes: number;
  items: JlptMockItemPlan[];
}

export interface JlptMockBlueprint {
  level: JlptLevel;
  title: string;
  description: string;
  sections: JlptMockSectionPlan[];
}

export interface JlptMockSectionResult {
  section: JlptSection;
  minutes: number;
  questions: JlptQuestion[];
}

export interface JlptMockResult {
  id: string;
  level: JlptLevel;
  seed: string;
  title: string;
  sections: JlptMockSectionResult[];
  questions: JlptQuestion[];
}
