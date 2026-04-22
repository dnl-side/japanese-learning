"use client";

import { useEffect, useMemo, useState } from "react";
import { RubyText } from "@/app/components/ui/Ruby";
import type {
  FillBlankQuizQuestion,
  LessonDisplayConfig,
  LessonPrompt,
  LessonQuizQuestion,
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
          {prompt.es}
        </p>
      )}

      {prompt.note && (
        <p className="text-sm" style={{ color: "var(--ink-soft)", opacity: 0.68 }}>
          {prompt.note}
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
          {prompt.es}
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

  useEffect(() => {
    setSelectedIndices([]);
  }, [question.id]);

  const answerArray =
    Array.isArray(submittedAnswer)
      ? submittedAnswer.filter((item): item is string => typeof item === "string")
      : [];

  const currentAnswerValues = locked
    ? answerArray
    : selectedIndices.map((idx) => question.tokens[idx].value);

  const currentAnswerTokens = locked
    ? currentAnswerValues
        .map((value) => question.tokens.find((token) => token.value === value))
        .filter((token): token is typeof question.tokens[number] => Boolean(token))
    : selectedIndices.map((idx) => question.tokens[idx]);

  const availableIndices = useMemo(
    () =>
      question.tokens
        .map((_, index) => index)
        .filter((index) => !selectedIndices.includes(index)),
    [question.tokens, selectedIndices],
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
                const token = question.tokens[index];

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