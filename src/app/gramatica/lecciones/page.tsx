// src/app/gramatica/lecciones/page.tsx

import Link from "next/link";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";
import { getGrammarLessonSummaries } from "@/data/grammar/lessons";

const ACCENT = "#1565C0";
const ACCENT_SOFT = "rgba(21,101,192,";
const GRADIENT = "linear-gradient(135deg, #90CAF9 0%, #1565C0 100%)";

function levelColor(level: string) {
  switch (level) {
    case "N5":
      return { bg: "rgba(34,197,94,0.12)", text: "#15803D", border: "rgba(34,197,94,0.2)" };
    case "N4":
      return { bg: "rgba(59,130,246,0.12)", text: "#1D4ED8", border: "rgba(59,130,246,0.2)" };
    case "N3":
      return { bg: "rgba(168,85,247,0.12)", text: "#7E22CE", border: "rgba(168,85,247,0.2)" };
    case "N2":
      return { bg: "rgba(249,115,22,0.12)", text: "#C2410C", border: "rgba(249,115,22,0.2)" };
    case "N1":
      return { bg: "rgba(236,72,153,0.12)", text: "#BE185D", border: "rgba(236,72,153,0.2)" };
    default:
      return { bg: "rgba(148,163,184,0.12)", text: "#475569", border: "rgba(148,163,184,0.2)" };
  }
}

export default function GrammarLessonsIndexPage() {
  const lessons = getGrammarLessonSummaries();

  return (
    <main className="relative min-h-screen" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />

      <div className="relative z-10 flex w-full justify-center">
        <div className="w-full max-w-5xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10">
          <div className="mb-6">
            <Link
              href="/gramatica"
              className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: ACCENT }}
            >
              ← Gramática
            </Link>
          </div>

          <section
            className="rounded-[30px] border px-5 py-6 sm:px-7 sm:py-8"
            style={{
              background: "rgba(255,255,255,0.84)",
              border: `1px solid ${ACCENT_SOFT}0.12)`,
              boxShadow: `0 24px 50px ${ACCENT_SOFT}0.08)`,
            }}
          >
            <div
              className="inline-flex rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em]"
              style={{
                background: `${ACCENT_SOFT}0.08)`,
                color: ACCENT,
                border: `1px solid ${ACCENT_SOFT}0.14)`,
              }}
            >
              文法 · Lecciones
            </div>

            <h1
              className="mt-5 text-4xl font-bold leading-tight sm:text-5xl"
              style={{ color: "var(--ink)" }}
            >
              Lecciones de gramática
            </h1>

            <p
              className="mt-4 max-w-3xl text-base leading-8 sm:text-lg"
              style={{ color: "var(--ink-soft)", opacity: 0.82 }}
            >
              Ruta guiada para estudiar gramática paso a paso, con ejemplos en japonés
              con ruby y quiz por lección.
            </p>
          </section>

          <section className="mt-6 grid gap-4">
            {lessons.map((lesson) => {
              const level = levelColor(lesson.level);

              return (
                <Link
                  key={lesson.id}
                  href={`/gramatica/lecciones/${lesson.slug}`}
                  className="rounded-[26px] border p-5 transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.86)",
                    border: "1px solid var(--border)",
                    boxShadow: `0 12px 30px ${ACCENT_SOFT}0.05)`,
                  }}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]"
                      style={{
                        background: `${ACCENT_SOFT}0.08)`,
                        color: ACCENT,
                        border: `1px solid ${ACCENT_SOFT}0.14)`,
                      }}
                    >
                      Lección {lesson.order}
                    </span>

                    <span
                      className="rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        background: level.bg,
                        color: level.text,
                        border: `1px solid ${level.border}`,
                      }}
                    >
                      {lesson.level}
                    </span>

                    <span
                      className="rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        background: "rgba(255,255,255,0.72)",
                        color: "var(--ink-soft)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {lesson.estimatedMinutes} min
                    </span>
                  </div>

                  <div className="mt-4">
                    {lesson.jpTitle && (
                      <p
                        className="char-display text-lg font-bold sm:text-xl"
                        style={{ color: ACCENT, letterSpacing: "0.06em" }}
                      >
                        {lesson.jpTitle}
                      </p>
                    )}

                    <h2
                      className="mt-1 text-2xl font-bold sm:text-3xl"
                      style={{ color: "var(--ink)" }}
                    >
                      {lesson.title}
                    </h2>

                    <p
                      className="mt-3 text-sm leading-7 sm:text-base"
                      style={{ color: "var(--ink-soft)", opacity: 0.8 }}
                    >
                      {lesson.description}
                    </p>
                  </div>

                  {lesson.objectives.length > 0 && (
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {lesson.objectives.slice(0, 4).map((objective, idx) => (
                        <div
                          key={idx}
                          className="rounded-2xl border px-3 py-2"
                          style={{
                            background: `${ACCENT_SOFT}0.04)`,
                            border: `1px solid ${ACCENT_SOFT}0.10)`,
                          }}
                        >
                          <p className="text-sm" style={{ color: "var(--ink-soft)", opacity: 0.84 }}>
                            {objective}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-5 flex flex-wrap gap-3">
                    <span
                      className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-bold text-white"
                      style={{
                        background: GRADIENT,
                        boxShadow: `0 10px 24px ${ACCENT_SOFT}0.2)`,
                      }}
                    >
                      Entrar a la lección →
                    </span>

                    <span
                      className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-semibold"
                      style={{
                        background: "rgba(255,255,255,0.72)",
                        color: "var(--ink-soft)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      Quiz disponible
                    </span>
                  </div>
                </Link>
              );
            })}
          </section>
        </div>
      </div>
    </main>
  );
}