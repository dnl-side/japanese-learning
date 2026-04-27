"use client";

import type { CounterPracticeQuestion } from "@/data/grammar/counterPractice";
import { Badge, SectionPanel, withAlpha } from "../QuantityUi";
import type { PracticeAnswer } from "./usePracticeSession";

export function PracticeQuestionCard({
  question,
  currentIndex,
  total,
  progress,
  answer,
  selected,
  onAnswer,
  onNext,
}: {
  question: CounterPracticeQuestion;
  currentIndex: number;
  total: number;
  progress: number;
  answer?: PracticeAnswer;
  selected: string | null;
  onAnswer: (choice: string) => void;
  onNext: () => void;
}) {
  const answered = Boolean(answer);
  const correct = answer?.correct ?? false;
  const color = correct ? "#15803D" : answered ? "#B45309" : "#00695C";

  return (
    <SectionPanel
      eyebrow={`Pregunta ${currentIndex + 1} / ${total}`}
      title={question.prompt}
      description="El enunciado no muestra furigana cuando la pregunta evalúa lectura. Así el ejercicio no se vuelve obvio."
      color={color}
    >
      <div className="mb-5 h-2 overflow-hidden rounded-full" style={{ background: "rgba(15,23,42,0.08)" }}>
        <div className="h-full rounded-full transition-all" style={{ width: `${progress}%`, background: color }} />
      </div>

      <div className="rounded-[28px] border p-5 text-center sm:p-7" style={{ background: withAlpha(color, 0.07), borderColor: withAlpha(color, 0.16) }}>
        <div className="flex justify-center">
          <Badge color={color}>{question.tag}</Badge>
        </div>
        {question.jpText ? (
          <p className="mt-4 font-mono text-4xl font-black leading-tight sm:text-5xl" style={{ color: "var(--ink)" }}>
            {question.jpText}
          </p>
        ) : null}
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {question.choices.map((choice) => {
          const isSelected = selected === choice || answer?.selected === choice;
          const isCorrect = choice === question.correct;
          const showCorrect = answered && isCorrect;
          const showWrong = answered && isSelected && !isCorrect;

          return (
            <button
              key={choice}
              type="button"
              disabled={answered}
              onClick={() => onAnswer(choice)}
              className="rounded-[22px] border px-4 py-4 text-left text-base font-bold transition-all hover:-translate-y-0.5 disabled:cursor-default disabled:hover:translate-y-0"
              style={{
                color: showWrong ? "#B91C1C" : showCorrect ? "#15803D" : "var(--ink)",
                background: showWrong
                  ? "rgba(254,226,226,0.76)"
                  : showCorrect
                  ? "rgba(220,252,231,0.76)"
                  : isSelected
                  ? withAlpha("#80CBC4", 0.16)
                  : "rgba(255,255,255,0.86)",
                borderColor: showWrong
                  ? "rgba(220,38,38,0.22)"
                  : showCorrect
                  ? "rgba(22,163,74,0.22)"
                  : isSelected
                  ? withAlpha("#00695C", 0.24)
                  : "var(--border)",
              }}
            >
              {choice}
            </button>
          );
        })}
      </div>

      {answered ? (
        <div className="mt-5 rounded-[24px] border p-4" style={{ color: correct ? "#166534" : "#92400E", background: correct ? "rgba(220,252,231,0.66)" : "rgba(254,243,199,0.76)", borderColor: correct ? "rgba(22,163,74,0.18)" : "rgba(217,119,6,0.18)" }}>
          <p className="text-sm font-black uppercase tracking-[0.14em]">
            {correct ? "Correcto" : "Revisar"}
          </p>
          <p className="mt-2 text-sm leading-relaxed sm:text-base">
            {question.explanation}
          </p>
        </div>
      ) : null}

      <div className="mt-5 flex justify-end">
        <button
          type="button"
          disabled={!answered}
          onClick={onNext}
          className="rounded-full border px-6 py-3 text-sm font-black text-white shadow-sm transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0"
          style={{ background: color, borderColor: withAlpha(color, 0.24), boxShadow: `0 14px 28px ${withAlpha(color, 0.18)}` }}
        >
          {currentIndex + 1 >= total ? "Ver resultado" : "Siguiente →"}
        </button>
      </div>
    </SectionPanel>
  );
}
