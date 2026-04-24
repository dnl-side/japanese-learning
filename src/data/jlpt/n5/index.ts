import { n5GrammarGuides, n5GrammarQuestions } from "./grammar";
import { n5ListeningGuides, n5ListeningQuestions } from "./listening";
import { n5ReadingGuides, n5ReadingQuestions } from "./reading";
import { n5VocabularyGuides, n5VocabularyQuestions } from "./vocabulary";
import type { JlptItemTypeGuide, JlptQuestion } from "../types";

export const n5JlptQuestions: JlptQuestion[] = [
  ...n5VocabularyQuestions,
  ...n5GrammarQuestions,
  ...n5ReadingQuestions,
  ...n5ListeningQuestions,
];

export const n5JlptGuides: JlptItemTypeGuide[] = [
  ...n5VocabularyGuides,
  ...n5GrammarGuides,
  ...n5ReadingGuides,
  ...n5ListeningGuides,
];
