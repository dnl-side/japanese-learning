"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";
import { ACCENT, InfoCard, ShellCard, SOFT, withAlpha } from "../QuantityUi";
import { PracticeModeSelector } from "./PracticeModeSelector";
import { PracticeQuestionCard } from "./PracticeQuestionCard";
import { PracticeResultPanel } from "./PracticeResultPanel";
import { usePracticeSession } from "./usePracticeSession";

function PracticeHero() {
  return (
    <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42 }}
        className="relative overflow-hidden lg:col-span-7"
      >
        <ShellCard color={ACCENT} className="h-full p-6 sm:p-7 lg:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-2 select-none char-display"
            style={{ fontSize: "clamp(4.4rem, 10vw, 8rem)", color: withAlpha(ACCENT, 0.08), lineHeight: 1 }}
          >
            練習
          </div>

          <div className="mb-4 inline-flex items-center rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT, background: withAlpha(SOFT, 0.12), border: `1px solid ${withAlpha(SOFT, 0.22)}` }}>
            数字・助数詞 · Práctica
          </div>

          <h1 className="char-display max-w-[14ch] text-4xl font-bold leading-tight sm:text-5xl" style={{ color: "var(--ink)" }}>
            Práctica de números y contadores
          </h1>

          <p className="mt-4 max-w-[66ch] text-base leading-relaxed sm:text-lg" style={{ color: "var(--ink-soft)", opacity: 0.8 }}>
            Entrena lectura de números, separación por 万・億・兆, elección de contador, lecturas irregulares, tiempo vs duración y frases tipo sintaxis. Las sesiones se arman al azar desde el banco de preguntas.
          </p>
        </ShellCard>
      </motion.div>

      <motion.aside
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42, delay: 0.05 }}
        className="lg:col-span-5"
      >
        <ShellCard color={SOFT} className="h-full p-5 sm:p-6">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
            Diseño del quiz
          </p>
          <h2 className="mt-1 text-2xl font-bold" style={{ color: "var(--ink)" }}>
            No mostrar la respuesta antes de tiempo
          </h2>
          <div className="mt-4 space-y-4">
            <InfoCard icon="読" title="Sin ruby en la pregunta" text="Si la pregunta evalúa lectura, el enunciado muestra solo 3本, 4時 o 20日, no el furigana." />
            <InfoCard icon="乱" title="Sesión random" text="Cada intento toma preguntas al azar desde el banco para evitar memorizar solo el orden." />
            <InfoCard icon="文" title="Frases tipo sintaxis" text="Completar frase se acerca más al ejercicio de reconocer qué bloque encaja por contexto." />
          </div>
        </ShellCard>
      </motion.aside>
    </section>
  );
}

export function CounterPracticeShell() {
  const session = usePracticeSession();

  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />

      <div className="relative z-10 w-full">
        <div className="mx-auto flex w-full justify-center px-4 pb-24 pt-8 sm:px-6 lg:px-8">
          <div className="w-full max-w-[1120px]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/gramatica/contadores"
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold shadow-sm backdrop-blur transition-all hover:-translate-y-0.5"
                style={{ color: ACCENT, background: "rgba(255,255,255,0.82)", borderColor: withAlpha(ACCENT, 0.16), boxShadow: `0 10px 24px ${withAlpha(ACCENT, 0.08)}` }}
              >
                <span aria-hidden="true">←</span>
                <span>Números y contadores</span>
              </Link>

              {session.stage !== "setup" ? (
                <button
                  type="button"
                  onClick={session.resetToSetup}
                  className="rounded-full border px-4 py-2 text-sm font-bold transition-all hover:-translate-y-0.5"
                  style={{ color: ACCENT, background: "rgba(255,255,255,0.82)", borderColor: withAlpha(ACCENT, 0.16) }}
                >
                  Cambiar modo
                </button>
              ) : null}
            </div>

            <PracticeHero />

            <section className="mt-8">
              {session.stage === "setup" ? (
                <PracticeModeSelector
                  mode={session.mode}
                  setMode={session.setMode}
                  questionCount={session.questionCount}
                  setQuestionCount={session.setQuestionCount}
                  onStart={session.startSession}
                />
              ) : null}

              {session.stage === "running" && session.currentQuestion ? (
                <PracticeQuestionCard
                  question={session.currentQuestion}
                  currentIndex={session.currentIndex}
                  total={session.questions.length}
                  progress={session.progress}
                  answer={session.currentAnswer}
                  selected={session.selected}
                  onAnswer={session.answerCurrent}
                  onNext={session.nextQuestion}
                />
              ) : null}

              {session.stage === "finished" ? (
                <PracticeResultPanel
                  score={session.score}
                  total={session.questions.length}
                  answers={session.answers}
                  questions={session.questions}
                  onRetry={session.restartSameMode}
                  onSetup={session.resetToSetup}
                />
              ) : null}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
