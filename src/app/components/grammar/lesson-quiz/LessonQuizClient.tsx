"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { GrammarLesson, LessonQuizQuestion } from "@/data/grammar/lessons";
import QuestionRenderer from "./QuestionRenderer";
import {
  buildQuizQuestions,
  getQuizPercent,
  hasPassedQuiz,
  isQuestionCorrect,
  type LessonQuizAnswer,
} from "@/lib/grammarLessonQuiz";

const ACCENT = "#1565C0";
const ACCENT_SOFT = "rgba(21,101,192,";
const GRADIENT = "linear-gradient(135deg, #90CAF9 0%, #1565C0 100%)";

type Screen = "intro" | "quiz" | "results";

interface CurrentFeedback {
  answer: LessonQuizAnswer;
  correct: boolean;
}

export default function LessonQuizClient({ lesson }: { lesson: GrammarLesson }) {
  const [screen, setScreen] = useState<Screen>("intro");
  const [questions, setQuestions] = useState<LessonQuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [answers, setAnswers] = useState<Record<string, LessonQuizAnswer>>({});
  const [feedback, setFeedback] = useState<CurrentFeedback | null>(null);

  const total = questions.length;
  const currentQuestion = questions[currentIdx];

  const percent = useMemo(
    () => getQuizPercent(correctCount, total),
    [correctCount, total],
  );

  const passed = useMemo(
    () => hasPassedQuiz(correctCount, total, lesson.quiz.passScore),
    [correctCount, total, lesson.quiz.passScore],
  );

  function startQuiz() {
    const builtQuestions = buildQuizQuestions(lesson.quiz);
    setQuestions(builtQuestions);
    setCurrentIdx(0);
    setCorrectCount(0);
    setAnswers({});
    setFeedback(null);
    setScreen("quiz");
  }

  function restartQuiz() {
    startQuiz();
  }

  function goNext() {
    setFeedback(null);

    if (currentIdx < questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      return;
    }

    setScreen("results");
  }

  function handleSubmit(answer: LessonQuizAnswer) {
    if (!currentQuestion) return;

    const correct = isQuestionCorrect(currentQuestion, answer);

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answer,
    }));

    if (correct) {
      setCorrectCount((prev) => prev + 1);
    }

    if (lesson.quiz.showImmediateFeedback) {
      setFeedback({ answer, correct });
      return;
    }

    if (currentIdx < questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setScreen("results");
    }
  }

  return (
    <div className="w-full">
      <div className="mb-6 flex items-center justify-between gap-4">
        <Link
          href={`/gramatica/lecciones/${lesson.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
          style={{ color: ACCENT }}
        >
          ← Volver a la lección
        </Link>

        <span
          className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]"
          style={{
            background: `${ACCENT_SOFT}0.08)`,
            color: ACCENT,
            border: `1px solid ${ACCENT_SOFT}0.16)`,
          }}
        >
          {lesson.level}
        </span>
      </div>

      {screen === "intro" && (
        <section
          className="rounded-[30px] border p-6 sm:p-7"
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
            Quiz de lección
          </div>

          <h1
            className="mt-5 text-3xl font-bold leading-tight sm:text-4xl"
            style={{ color: "var(--ink)" }}
          >
            {lesson.quiz.title}
          </h1>

          {lesson.quiz.description && (
            <p
              className="mt-3 max-w-3xl text-base leading-8 sm:text-lg"
              style={{ color: "var(--ink-soft)", opacity: 0.82 }}
            >
              {lesson.quiz.description}
            </p>
          )}

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div
              className="rounded-2xl border px-4 py-3"
              style={{ background: "rgba(255,255,255,0.72)", border: "1px solid var(--border)" }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: ACCENT }}>
                Lección
              </p>
              <p className="mt-1 text-sm font-semibold" style={{ color: "var(--ink)" }}>
                {lesson.title}
              </p>
            </div>

            <div
              className="rounded-2xl border px-4 py-3"
              style={{ background: "rgba(255,255,255,0.72)", border: "1px solid var(--border)" }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: ACCENT }}>
                Preguntas
              </p>
              <p className="mt-1 text-sm font-semibold" style={{ color: "var(--ink)" }}>
                {lesson.quiz.questions.length}
              </p>
            </div>

            <div
              className="rounded-2xl border px-4 py-3"
              style={{ background: "rgba(255,255,255,0.72)", border: "1px solid var(--border)" }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: ACCENT }}>
                Puntaje mínimo
              </p>
              <p className="mt-1 text-sm font-semibold" style={{ color: "var(--ink)" }}>
                {lesson.quiz.passScore}%
              </p>
            </div>

            <div
              className="rounded-2xl border px-4 py-3"
              style={{ background: "rgba(255,255,255,0.72)", border: "1px solid var(--border)" }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: ACCENT }}>
                Feedback
              </p>
              <p className="mt-1 text-sm font-semibold" style={{ color: "var(--ink)" }}>
                {lesson.quiz.showImmediateFeedback ? "Inmediato" : "Al final"}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={startQuiz}
              className="rounded-2xl px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
              style={{
                background: GRADIENT,
                boxShadow: `0 12px 28px ${ACCENT_SOFT}0.22)`,
              }}
            >
              Empezar quiz
            </button>

            <Link
              href={`/gramatica/lecciones/${lesson.slug}`}
              className="rounded-2xl px-5 py-3 text-center text-sm font-semibold transition-all hover:bg-white"
              style={{
                border: `1px solid ${ACCENT_SOFT}0.20)`,
                color: "var(--ink)",
                background: "rgba(255,255,255,0.72)",
              }}
            >
              Volver a la lección
            </Link>
          </div>
        </section>
      )}

      {screen === "quiz" && currentQuestion && (
        <div className="space-y-4">
          <section
            className="rounded-[24px] border p-4 sm:p-5"
            style={{
              background: "rgba(255,255,255,0.82)",
              border: `1px solid ${ACCENT_SOFT}0.10)`,
            }}
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <div>
                <p
                  className="text-[0.68rem] font-bold uppercase tracking-[0.16em]"
                  style={{ color: ACCENT }}
                >
                  Progreso
                </p>
                <p className="mt-1 text-sm sm:text-base" style={{ color: "var(--ink)" }}>
                  Pregunta {currentIdx + 1} de {total}
                </p>
              </div>

              <div
                className="rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  background: `${ACCENT_SOFT}0.08)`,
                  color: ACCENT,
                  border: `1px solid ${ACCENT_SOFT}0.14)`,
                }}
              >
                {Math.round(((currentIdx + 1) / total) * 100)}%
              </div>
            </div>

            <div
              className="h-2 overflow-hidden rounded-full"
              style={{ background: "rgba(148,163,184,0.16)" }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: `${((currentIdx + 1) / total) * 100}%`,
                  background: GRADIENT,
                }}
              />
            </div>
          </section>

          <QuestionRenderer
            question={currentQuestion}
            display={lesson.display}
            locked={Boolean(feedback)}
            submittedAnswer={feedback?.answer}
            onSubmit={handleSubmit}
          />

          {feedback && (
            <section
              className="rounded-[24px] border p-5"
              style={{
                background: feedback.correct
                  ? "rgba(220,252,231,0.86)"
                  : "rgba(254,226,226,0.86)",
                border: feedback.correct
                  ? "1px solid rgba(22,163,74,0.18)"
                  : "1px solid rgba(220,38,38,0.18)",
              }}
            >
              <p
                className="text-[0.7rem] font-bold uppercase tracking-[0.18em]"
                style={{ color: feedback.correct ? "#15803D" : "#B91C1C" }}
              >
                {feedback.correct ? "Correcto" : "Revisar"}
              </p>

              <p className="mt-3 text-sm leading-7 sm:text-base" style={{ color: "var(--ink)" }}>
                {currentQuestion.explanation}
              </p>

              {currentQuestion.relatedSectionIds && currentQuestion.relatedSectionIds.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {currentQuestion.relatedSectionIds.map((sectionId) => (
                    <Link
                      key={sectionId}
                      href={`/gramatica/lecciones/${lesson.slug}#${sectionId}`}
                      className="rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        background: "rgba(255,255,255,0.76)",
                        color: "var(--ink-soft)",
                        border: "1px solid rgba(148,163,184,0.22)",
                      }}
                    >
                      Revisar sección
                    </Link>
                  ))}
                </div>
              )}

              <div className="mt-5">
                <button
                  type="button"
                  onClick={goNext}
                  className="rounded-2xl px-5 py-3 text-sm font-bold text-white"
                  style={{ background: GRADIENT }}
                >
                  {currentIdx < total - 1 ? "Siguiente pregunta" : "Ver resultados"}
                </button>
              </div>
            </section>
          )}
        </div>
      )}

      {screen === "results" && (
        <section
          className="rounded-[30px] border p-6 sm:p-7"
          style={{
            background: "rgba(255,255,255,0.84)",
            border: `1px solid ${ACCENT_SOFT}0.12)`,
            boxShadow: `0 24px 50px ${ACCENT_SOFT}0.08)`,
          }}
        >
          <div className="text-center">
            <div
              className="mx-auto flex h-28 w-28 items-center justify-center rounded-full text-3xl font-bold text-white"
              style={{
                background: GRADIENT,
                boxShadow: `0 8px 24px ${ACCENT_SOFT}0.30)`,
              }}
            >
              {percent}%
            </div>

            <h2 className="mt-5 text-3xl font-bold" style={{ color: "var(--ink)" }}>
              {passed ? "¡Aprobado!" : "Vamos por otra ronda"}
            </h2>

            <p className="mt-3 text-base leading-8 sm:text-lg" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>
              {passed
                ? "La base de esta lección ya se ve bastante sólida."
                : "Todavía hay margen para fijar mejor la estructura. Repetirlo ahora te va a servir mucho."}
            </p>

            <div className="mt-6 flex justify-center gap-8 text-sm">
              <div>
                <p className="text-2xl font-bold" style={{ color: "#15803D" }}>
                  {correctCount}
                </p>
                <p style={{ color: "var(--ink-soft)" }}>correctas</p>
              </div>

              <div>
                <p className="text-2xl font-bold" style={{ color: "#B91C1C" }}>
                  {total - correctCount}
                </p>
                <p style={{ color: "var(--ink-soft)" }}>incorrectas</p>
              </div>

              <div>
                <p className="text-2xl font-bold" style={{ color: ACCENT }}>
                  {lesson.quiz.passScore}%
                </p>
                <p style={{ color: "var(--ink-soft)" }}>meta</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={restartQuiz}
              className="flex-1 rounded-2xl py-3.5 text-sm font-bold text-white"
              style={{ background: GRADIENT }}
            >
              Repetir quiz
            </button>

            <Link
              href={`/gramatica/lecciones/${lesson.slug}`}
              className="flex-1 rounded-2xl py-3.5 text-center text-sm font-semibold transition-all hover:bg-white"
              style={{
                border: `1px solid ${ACCENT_SOFT}0.20)`,
                color: "var(--ink)",
                background: "rgba(255,255,255,0.7)",
              }}
            >
              Volver a la lección
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}