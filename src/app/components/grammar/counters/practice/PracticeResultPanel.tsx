"use client";

import type { CounterPracticeQuestion } from "@/data/grammar/counterPractice";
import { Badge, SectionPanel, withAlpha } from "../QuantityUi";
import type { PracticeAnswer } from "./usePracticeSession";

export function PracticeResultPanel({
  score,
  total,
  answers,
  questions,
  onRetry,
  onSetup,
}: {
  score: number;
  total: number;
  answers: PracticeAnswer[];
  questions: CounterPracticeQuestion[];
  onRetry: () => void;
  onSetup: () => void;
}) {
  const percent = total > 0 ? Math.round((score / total) * 100) : 0;
  const color = percent >= 80 ? "#15803D" : percent >= 60 ? "#B45309" : "#B91C1C";

  return (
    <SectionPanel
      eyebrow="結果"
      title="Resultado de la sesión"
      description="Puedes repetir el mismo modo con otra selección random o volver a elegir un modo distinto."
      color={color}
    >
      <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
        <div className="rounded-[28px] border p-6 text-center" style={{ background: withAlpha(color, 0.08), borderColor: withAlpha(color, 0.18) }}>
          <p className="font-mono text-6xl font-black leading-none" style={{ color }}>
            {percent}%
          </p>
          <p className="mt-3 text-lg font-black" style={{ color: "var(--ink)" }}>
            {score} / {total}
          </p>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
            {percent >= 80 ? "Muy bien. Puedes subir la dificultad o pasar al modo mixto." : percent >= 60 ? "Base aceptable. Conviene repetir para fijar irregularidades." : "Conviene repetir con menos preguntas y revisar las familias."}
          </p>

          <div className="mt-5 grid gap-2">
            <button
              type="button"
              onClick={onRetry}
              className="rounded-full border px-5 py-3 text-sm font-black text-white transition-all hover:-translate-y-0.5"
              style={{ background: color, borderColor: withAlpha(color, 0.24) }}
            >
              Repetir random
            </button>
            <button
              type="button"
              onClick={onSetup}
              className="rounded-full border px-5 py-3 text-sm font-black transition-all hover:-translate-y-0.5"
              style={{ color, background: "rgba(255,255,255,0.86)", borderColor: withAlpha(color, 0.24) }}
            >
              Cambiar modo
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {questions.map((question, index) => {
            const answer = answers.find((item) => item.questionId === question.id);
            const correct = answer?.correct ?? false;
            return (
              <div key={question.id} className="rounded-[22px] border p-4" style={{ background: "rgba(255,255,255,0.86)", borderColor: correct ? "rgba(22,163,74,0.18)" : "rgba(220,38,38,0.18)" }}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Badge color={correct ? "#15803D" : "#B91C1C"}>
                    {index + 1}. {correct ? "Correcto" : "Error"}
                  </Badge>
                  <span className="text-xs font-bold" style={{ color: "var(--ink-soft)", opacity: 0.72 }}>
                    {question.tag}
                  </span>
                </div>
                <p className="mt-3 font-mono text-2xl font-black" style={{ color: "var(--ink)" }}>
                  {question.jpText}
                </p>
                <div className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                  <p style={{ color: correct ? "#15803D" : "#B91C1C" }}>
                    Tu respuesta: <strong>{answer?.selected ?? "—"}</strong>
                  </p>
                  <p style={{ color: "#15803D" }}>
                    Correcta: <strong>{question.correct}</strong>
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.76 }}>
                  {question.explanation}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionPanel>
  );
}
