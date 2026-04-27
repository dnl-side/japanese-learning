"use client";

import { COUNTER_PRACTICE_QUESTIONS, PRACTICE_MODES, type CounterPracticeMode } from "@/data/grammar/counterPractice";
import { Badge, SectionPanel, withAlpha } from "../QuantityUi";

const QUESTION_COUNTS = [5, 10, 15, 20] as const;

export function PracticeModeSelector({
  mode,
  setMode,
  questionCount,
  setQuestionCount,
  onStart,
}: {
  mode: CounterPracticeMode;
  setMode: (mode: CounterPracticeMode) => void;
  questionCount: number;
  setQuestionCount: (count: number) => void;
  onStart: () => void;
}) {
  const activeConfig = PRACTICE_MODES.find((item) => item.id === mode) ?? PRACTICE_MODES[0];
  const availableCount = mode === "mixed" ? COUNTER_PRACTICE_QUESTIONS.length : COUNTER_PRACTICE_QUESTIONS.filter((question) => question.type === mode).length;

  return (
    <SectionPanel
      eyebrow="練習モード"
      title="Elige el tipo de sesión"
      description="La sesión toma preguntas al azar desde el banco. Así puedes repetir el mismo modo sin ver siempre el mismo orden ni las mismas preguntas."
      color={activeConfig.accent}
    >
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {PRACTICE_MODES.map((item) => {
          const active = mode === item.id;
          const count = item.id === "mixed" ? COUNTER_PRACTICE_QUESTIONS.length : COUNTER_PRACTICE_QUESTIONS.filter((question) => question.type === item.id).length;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setMode(item.id)}
              className="rounded-[24px] border p-4 text-left transition-all hover:-translate-y-0.5"
              style={{
                background: active ? withAlpha(item.accent, 0.13) : "rgba(255,255,255,0.84)",
                borderColor: active ? withAlpha(item.accent, 0.28) : "var(--border)",
                boxShadow: active ? `0 14px 28px ${withAlpha(item.accent, 0.12)}` : "none",
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="char-display text-lg font-black" style={{ color: item.accent }}>
                    {item.jp}
                  </p>
                  <p className="mt-1 text-sm font-black" style={{ color: "var(--ink)" }}>
                    {item.label}
                  </p>
                </div>
                <Badge color={item.accent}>{count}</Badge>
              </div>
              <p className="mt-2 text-xs leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.74 }}>
                {item.description}
              </p>
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em]" style={{ color: activeConfig.accent }}>
            Cantidad de preguntas
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {QUESTION_COUNTS.map((count) => {
              const disabled = count > availableCount;
              const active = questionCount === count;
              return (
                <button
                  key={count}
                  type="button"
                  disabled={disabled}
                  onClick={() => setQuestionCount(count)}
                  className="rounded-full border px-4 py-2 text-sm font-bold transition-all disabled:cursor-not-allowed disabled:opacity-40"
                  style={{
                    color: active ? "white" : activeConfig.accent,
                    background: active ? activeConfig.accent : "rgba(255,255,255,0.82)",
                    borderColor: withAlpha(activeConfig.accent, 0.22),
                  }}
                >
                  {count}
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-xs leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.72 }}>
            Banco disponible para este modo: {availableCount} preguntas.
          </p>
        </div>

        <button
          type="button"
          onClick={onStart}
          className="rounded-full border px-6 py-3 text-sm font-black text-white shadow-sm transition-all hover:-translate-y-0.5"
          style={{ background: activeConfig.accent, borderColor: withAlpha(activeConfig.accent, 0.24), boxShadow: `0 14px 28px ${withAlpha(activeConfig.accent, 0.22)}` }}
        >
          Empezar práctica →
        </button>
      </div>
    </SectionPanel>
  );
}
