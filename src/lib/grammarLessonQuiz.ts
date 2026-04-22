import type {
  LessonDisplayConfig,
  LessonQuiz,
  LessonQuizQuestion,
  LessonTextSize,
} from "@/data/grammar/lessons";
import type { RubySegment } from "@/app/components/ui/Ruby";

export type LessonQuizAnswer = string | string[];

export function shuffleArray<T>(items: T[]): T[] {
  const copy = [...items];

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

export function buildQuizQuestions(quiz: LessonQuiz): LessonQuizQuestion[] {
  const questions = [...quiz.questions];
  return quiz.shuffleQuestions ? shuffleArray(questions) : questions;
}

function normalizeText(value: string) {
  return value.normalize("NFKC").trim().replace(/\s+/g, "").toLowerCase();
}

export function isQuestionCorrect(
  question: LessonQuizQuestion,
  answer: LessonQuizAnswer,
) {
  if (question.type === "single-choice") {
    return typeof answer === "string" && answer === question.correctChoiceId;
  }

  if (question.type === "order-sentence") {
    if (!Array.isArray(answer)) return false;
    if (answer.length !== question.correctOrder.length) return false;

    return answer.every((item, index) => item === question.correctOrder[index]);
  }

  if (question.type === "fill-blank") {
    if (typeof answer !== "string") return false;
    const normalized = normalizeText(answer);

    return question.acceptedAnswers.some(
      (accepted) => normalizeText(accepted) === normalized,
    );
  }

  return false;
}

export function getQuizPercent(correctCount: number, total: number) {
  if (total <= 0) return 0;
  return Math.round((correctCount / total) * 100);
}

export function hasPassedQuiz(
  correctCount: number,
  total: number,
  passScore: number,
) {
  return getQuizPercent(correctCount, total) >= passScore;
}

export function resolveQuizSegments(
  segments: RubySegment[] | undefined,
  rubyMode: LessonDisplayConfig["rubyMode"],
) {
  if (!segments) return [];

  if (rubyMode === "off") {
    return segments.map((seg) => ({ text: seg.text }));
  }

  if (rubyMode === "smart") {
    return segments.map((seg) => {
      const isKanaOnly = /^[ぁ-ゖァ-ヶー・、。？！「」『』（）\s]+$/.test(seg.text);
      return isKanaOnly ? { text: seg.text } : seg;
    });
  }

  return segments;
}

export function getQuizRtStyle(display: LessonDisplayConfig) {
  if (display.rubyMode === "off") {
    return { display: "none" as const };
  }

  return {
    fontSize: display.exampleTextSize === "3xl" ? "0.42em" : "0.48em",
    opacity: 0.9,
    lineHeight: 1,
  };
}

export function lessonTextSizeClass(size: LessonTextSize) {
  switch (size) {
    case "base":
      return "text-base";
    case "lg":
      return "text-lg";
    case "xl":
      return "text-xl";
    case "2xl":
      return "text-2xl";
    case "3xl":
      return "text-3xl";
    default:
      return "text-lg";
  }
}