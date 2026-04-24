"use client";

import { CSSProperties, useEffect, useMemo, useState } from "react";
import { RubyText } from "@/app/components/ui/Ruby";
import type {
  FillBlankQuizQuestion,
  LessonDisplayConfig,
  LessonInlineTone,
  LessonOrderToken,
  LessonPrompt,
  LessonQuizQuestion,
  LessonTextContent,
  OrderSentenceQuizQuestion,
  SingleChoiceQuizQuestion,
} from "@/data/grammar/lessons";
import {
  getQuizRtStyle,
  lessonTextSizeClass,
  resolveQuizSegments,
  type LessonQuizAnswer,
} from "@/lib/grammarLessonQuiz";

const ACCENT = "#1565C0";
const ACCENT_SOFT = "rgba(21,101,192,";

interface QuestionRendererProps {
  question: LessonQuizQuestion;
  display: LessonDisplayConfig;
  locked: boolean;
  submittedAnswer?: LessonQuizAnswer;
  onSubmit: (answer: LessonQuizAnswer) => void;
}

function inlineToneStyle(tone: LessonInlineTone = "default"): CSSProperties {
  switch (tone) {
    case "accent":
      return { color: ACCENT, fontWeight: 700 };
    case "success":
      return { color: "#15803D", fontWeight: 700 };
    case "warning":
      return { color: "#B45309", fontWeight: 700 };
    case "danger":
      return { color: "#B91C1C", fontWeight: 700 };
    case "muted":
      return { color: "var(--ink-soft)", opacity: 0.72 };
    case "default":
    default:
      return {};
  }
}

function TextContentView({
  content,
  display,
}: {
  content: LessonTextContent;
  display: LessonDisplayConfig;
}) {
  if (typeof content === "string") {
    return <>{content}</>;
  }

  return (
    <>
      {content.map((part, index) => {
        if (part.type === "text") {
          return <span key={index}>{part.text}</span>;
        }

        if (part.type === "jp") {
          return (
            <RubyText
              key={index}
              segments={resolveQuizSegments(part.segments, display.rubyMode)}
              className="char-display font-semibold"
              style={{ color: "var(--ink)" }}
              rtStyle={getQuizRtStyle(display)}
            />
          );
        }

        if (part.type === "mark") {
          return (
            <span key={index} style={inlineToneStyle(part.tone)}>
              {part.text}
            </span>
          );
        }

        if (part.type === "link") {
          return (
            <a
              key={index}
              href={part.href}
              target={part.external ? "_blank" : undefined}
              rel={part.external ? "noreferrer" : undefined}
              className="font-semibold underline underline-offset-2"
              style={inlineToneStyle(part.tone ?? "accent")}
            >
              {part.label}
            </a>
          );
        }

        return null;
      })}
    </>
  );
}

function PromptView({
  prompt,
  display,
}: {
  prompt: LessonPrompt;
  display: LessonDisplayConfig;
}) {
  return (
    <div className="space-y-2">
      {prompt.jp && prompt.jp.length > 0 && (
        <RubyText
          segments={resolveQuizSegments(prompt.jp, display.rubyMode)}
          className={`char-display font-bold leading-relaxed ${lessonTextSizeClass(display.exampleTextSize)}`}
          style={{ color: "var(--ink)" }}
          rtStyle={getQuizRtStyle(display)}
        />
      )}

      {prompt.es && (
        <p
          className={`leading-7 ${lessonTextSizeClass(display.bodyTextSize)}`}
          style={{ color: "var(--ink-soft)", opacity: 0.86 }}
        >
          <TextContentView content={prompt.es} display={display} />
        </p>
      )}

      {prompt.note && (
        <p className="text-sm" style={{ color: "var(--ink-soft)", opacity: 0.68 }}>
          <TextContentView content={prompt.note} display={display} />
        </p>
      )}
    </div>
  );
}

function ChoiceLabel({
  prompt,
  display,
}: {
  prompt: LessonPrompt;
  display: LessonDisplayConfig;
}) {
  return (
    <div className="space-y-1 text-left">
      {prompt.jp && prompt.jp.length > 0 && (
        <RubyText
          segments={resolveQuizSegments(prompt.jp, display.rubyMode)}
          className="char-display text-lg font-bold leading-relaxed"
          style={{ color: "var(--ink)" }}
          rtStyle={getQuizRtStyle(display)}
        />
      )}

      {prompt.es && (
        <p className="text-sm sm:text-base" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>
          <TextContentView content={prompt.es} display={display} />
        </p>
      )}
    </div>
  );
}

function SingleChoiceView({
  question,
  display,
  locked,
  submittedAnswer,
  onSubmit,
}: {
  question: SingleChoiceQuizQuestion;
  display: LessonDisplayConfig;
  locked: boolean;
  submittedAnswer?: LessonQuizAnswer;
  onSubmit: (answer: LessonQuizAnswer) => void;
}) {
  return (
    <div className="grid gap-3">
      {question.choices.map((choice) => {
        const selected = submittedAnswer === choice.id;
        const isCorrect = choice.id === question.correctChoiceId;

        let background = "rgba(255,255,255,0.86)";
        let border = "1px solid var(--border)";
        let color = "var(--ink)";

        if (locked) {
          if (isCorrect) {
            background = "rgba(220,252,231,0.72)";
            border = "1px solid rgba(22,163,74,0.18)";
            color = "#166534";
          } else if (selected) {
            background = "rgba(254,226,226,0.72)";
            border = "1px solid rgba(220,38,38,0.18)";
            color = "#991B1B";
          }
        } else if (selected) {
          background = `${ACCENT_SOFT}0.10)`;
          border = `1px solid ${ACCENT_SOFT}0.24)`;
        }

        return (
          <button
            key={choice.id}
            type="button"
            disabled={locked}
            onClick={() => onSubmit(choice.id)}
            className="rounded-[22px] border p-4 text-left transition-all duration-200 hover:-translate-y-0.5 disabled:cursor-default disabled:hover:translate-y-0"
            style={{
              background,
              border,
              color,
              boxShadow: selected && !locked ? `0 6px 18px ${ACCENT_SOFT}0.08)` : "none",
            }}
          >
            <ChoiceLabel prompt={choice.label} display={display} />
          </button>
        );
      })}
    </div>
  );
}

function shuffleArray<T>(array: readonly T[]): T[] {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function shuffleUntilDifferent<T>(
  array: readonly T[],
  isSameOrder: (a: readonly T[], b: readonly T[]) => boolean,
  maxTries = 6,
): T[] {
  let next = [...array];

  for (let i = 0; i < maxTries; i += 1) {
    next = shuffleArray(array);
    if (!isSameOrder(next, array)) return next;
  }

  return next;
}

function sameTokenOrder(a: readonly LessonOrderToken[], b: readonly LessonOrderToken[]) {
  return a.length === b.length && a.every((token, idx) => token.value === b[idx]?.value);
}

function OrderSentenceView({
  question,
  display,
  locked,
  submittedAnswer,
  onSubmit,
}: {
  question: OrderSentenceQuizQuestion;
  display: LessonDisplayConfig;
  locked: boolean;
  submittedAnswer?: LessonQuizAnswer;
  onSubmit: (answer: LessonQuizAnswer) => void;
}) {
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [availableTokens, setAvailableTokens] = useState<LessonOrderToken[]>([]);

  useEffect(() => {
    setSelectedIndices([]);
    setAvailableTokens(
      shuffleUntilDifferent(question.tokens, sameTokenOrder)
    );
  }, [question.id]);

  const answerArray =
    Array.isArray(submittedAnswer)
      ? submittedAnswer.filter((item): item is string => typeof item === "string")
      : [];

  const currentAnswerValues = locked
    ? answerArray
    : selectedIndices.map((idx) => availableTokens[idx].value);

  const currentAnswerTokens = locked
    ? currentAnswerValues
        .map((value) => question.tokens.find((token) => token.value === value))
        .filter((token): token is typeof question.tokens[number] => Boolean(token))
    : selectedIndices.map((idx) => availableTokens[idx]);

  const availableIndices = useMemo(
    () =>
      availableTokens
        .map((_, index) => index)
        .filter((index) => !selectedIndices.includes(index)),
    [availableTokens, selectedIndices],
  );

  const canSubmit = currentAnswerValues.length === question.tokens.length;

  return (
    <div className="space-y-4">
      <div
        className="min-h-[92px] rounded-[22px] border p-4"
        style={{
          background: "rgba(255,255,255,0.88)",
          border: "1px solid var(--border)",
        }}
      >
        <p
          className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.16em]"
          style={{ color: ACCENT }}
        >
          Tu respuesta
        </p>

        <div className="flex flex-wrap gap-2">
          {currentAnswerTokens.length > 0 ? (
            currentAnswerTokens.map((token, index) => (
              <button
                key={`${token.id}-${index}`}
                type="button"
                disabled={locked}
                onClick={() => {
                  if (locked) return;
                  setSelectedIndices((prev) => prev.filter((_, i) => i !== index));
                }}
                className="rounded-full px-3 py-2 text-sm font-semibold transition-all disabled:cursor-default"
                style={{
                  background: `${ACCENT_SOFT}0.08)`,
                  color: "var(--ink)",
                  border: `1px solid ${ACCENT_SOFT}0.16)`,
                }}
              >
                {token.label.jp && token.label.jp.length > 0 ? (
                  <RubyText
                    segments={resolveQuizSegments(token.label.jp, display.rubyMode)}
                    className="char-display text-lg font-bold leading-relaxed"
                    style={{ color: "var(--ink)" }}
                    rtStyle={getQuizRtStyle(display)}
                  />
                ) : (
                  token.value
                )}
              </button>
            ))
          ) : (
            <p className="text-sm" style={{ color: "var(--ink-soft)", opacity: 0.62 }}>
              Toca los bloques para ordenar la oración.
            </p>
          )}
        </div>
      </div>

      {!locked && (
        <>
          <div
            className="rounded-[22px] border p-4"
            style={{
              background: "rgba(255,255,255,0.86)",
              border: "1px solid var(--border)",
            }}
          >
            <p
              className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.16em]"
              style={{ color: ACCENT }}
            >
              Bloques disponibles
            </p>

            <div className="flex flex-wrap gap-2">
              {availableIndices.map((index) => {
                const token = availableTokens[index];

                return (
                  <button
                    key={`${question.id}-token-${token.id}`}
                    type="button"
                    onClick={() => setSelectedIndices((prev) => [...prev, index])}
                    className="rounded-full px-3 py-2 text-sm font-semibold transition-all hover:-translate-y-0.5"
                    style={{
                      background: "rgba(255,255,255,0.92)",
                      color: "var(--ink)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {token.label.jp && token.label.jp.length > 0 ? (
                      <RubyText
                        segments={resolveQuizSegments(token.label.jp, display.rubyMode)}
                        className="char-display text-lg font-bold leading-relaxed"
                        style={{ color: "var(--ink)" }}
                        rtStyle={getQuizRtStyle(display)}
                      />
                    ) : (
                      token.value
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            disabled={!canSubmit}
            onClick={() => onSubmit(currentAnswerValues)}
            className="w-full rounded-2xl py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-45"
            style={{
              background: "linear-gradient(135deg, #90CAF9 0%, #1565C0 100%)",
            }}
          >
            Confirmar orden
          </button>
        </>
      )}

      {locked && question.answerLabel && (
        <div
          className="rounded-[22px] border p-4"
          style={{
            background: "rgba(220,252,231,0.56)",
            border: "1px solid rgba(22,163,74,0.16)",
          }}
        >
          <p
            className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.16em]"
            style={{ color: "#15803D" }}
          >
            Forma esperada
          </p>
          <PromptView prompt={question.answerLabel} display={display} />
        </div>
      )}
    </div>
  );
}

function FillBlankView({
  question,
  locked,
  submittedAnswer,
  onSubmit,
}: {
  question: FillBlankQuizQuestion;
  locked: boolean;
  submittedAnswer?: LessonQuizAnswer;
  onSubmit: (answer: LessonQuizAnswer) => void;
}) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue("");
  }, [question.id]);

  const currentValue =
    locked && typeof submittedAnswer === "string" ? submittedAnswer : value;

  return (
    <div className="space-y-4">
      <input
        value={currentValue}
        disabled={locked}
        onChange={(e) => setValue(e.target.value)}
        placeholder={question.placeholder ?? "Escribe tu respuesta"}
        className="w-full rounded-[22px] border px-4 py-3 text-base outline-none transition-all"
        style={{
          background: "rgba(255,255,255,0.92)",
          border: "1px solid var(--border)",
          color: "var(--ink)",
        }}
      />

      {!locked && (
        <button
          type="button"
          disabled={!value.trim()}
          onClick={() => onSubmit(value)}
          className="w-full rounded-2xl py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-45"
          style={{
            background: "linear-gradient(135deg, #90CAF9 0%, #1565C0 100%)",
          }}
        >
          Confirmar respuesta
        </button>
      )}
    </div>
  );
}

export default function QuestionRenderer({
  question,
  display,
  locked,
  submittedAnswer,
  onSubmit,
}: QuestionRendererProps) {
  return (
    <div
      className="rounded-[28px] border p-5 sm:p-6"
      style={{
        background: "rgba(255,255,255,0.84)",
        border: `1px solid ${ACCENT_SOFT}0.12)`,
        boxShadow: `0 20px 40px ${ACCENT_SOFT}0.06)`,
      }}
    >
      <div className="mb-5">
        <p
          className="text-[0.7rem] font-bold uppercase tracking-[0.18em]"
          style={{ color: ACCENT }}
        >
          Pregunta
        </p>

        <div className="mt-3">
          <PromptView prompt={question.prompt} display={display} />
        </div>
      </div>

      {question.type === "single-choice" && (
        <SingleChoiceView
          question={question}
          display={display}
          locked={locked}
          submittedAnswer={submittedAnswer}
          onSubmit={onSubmit}
        />
      )}

      {question.type === "order-sentence" && (
        <OrderSentenceView
          question={question}
          display={display}
          locked={locked}
          submittedAnswer={submittedAnswer}
          onSubmit={onSubmit}
        />
      )}

      {question.type === "fill-blank" && (
        <FillBlankView
          question={question}
          locked={locked}
          submittedAnswer={submittedAnswer}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
}