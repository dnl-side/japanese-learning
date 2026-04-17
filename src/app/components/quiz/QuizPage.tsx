"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { generateQuiz } from "@/lib/quizGenerator";
import type { QuizQuestion, QuizMode } from "@/lib/quizGenerator";
import type { Lesson, ScriptType } from "@/types/japanese";
import SakuraAnimation from "../layout/SakuraAnimation";

interface QuizPageProps {
  lessons: Lesson[];
  scriptType: ScriptType;
  backHref: string;
  backLabel: string;
  accent: string;
  accentSoft: string;
  gradient: string;
}

function SetupScreen({
  lessons,
  accent,
  accentSoft,
  gradient,
  onStart,
}: {
  lessons: Lesson[];
  accent: string;
  accentSoft: string;
  gradient: string;
  onStart: (lessonIds: string[], mode: QuizMode, count: number) => void;
}) {
  const [selectedLessons, setSelectedLessons] = useState<string[]>([]);
  const [mode, setMode] = useState<QuizMode>("char-to-romaji");
  const [count, setCount] = useState(10);

  const isAll = selectedLessons.length === 0;

  const toggleLesson = (id: string) => {
    setSelectedLessons((prev) =>
      prev.includes(id) ? prev.filter((l) => l !== id) : [...prev, id]
    );
  };

  const totalChars = isAll
    ? lessons.reduce((a, l) => a + l.characters.length, 0)
    : lessons
        .filter((l) => selectedLessons.includes(l.id))
        .reduce((a, l) => a + l.characters.length, 0);

  return (
    <div className="space-y-4">
      <div
        className="rounded-[24px] border p-4 sm:p-5"
        style={{
          background: "rgba(255,255,255,0.8)",
          border: `1px solid ${accentSoft}0.12)`,
          boxShadow: `0 12px 32px ${accentSoft}0.06)`,
        }}
      >
        <h3
          className="mb-3 text-sm font-bold uppercase tracking-[0.18em]"
          style={{ color: accent }}
        >
          Modo de quiz
        </h3>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {(["char-to-romaji", "romaji-to-char"] as QuizMode[]).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className="rounded-2xl border p-4 text-left transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background:
                  mode === m ? `${accentSoft}0.10)` : "rgba(255,255,255,0.6)",
                border: `1px solid ${mode === m ? `${accentSoft}0.30)` : "var(--border)"}`,
                boxShadow: mode === m ? `0 4px 16px ${accentSoft}0.12)` : "none",
              }}
            >
              <div
                className="char-display mb-1 text-2xl font-bold"
                style={{ color: accent }}
              >
                {m === "char-to-romaji" ? "あ → a" : "a → あ"}
              </div>
              <p
                className="text-xs font-medium leading-5"
                style={{ color: "var(--ink)" }}
              >
                {m === "char-to-romaji"
                  ? "Ver carácter, elegir romaji"
                  : "Ver romaji, elegir carácter"}
              </p>
            </button>
          ))}
        </div>
      </div>

      <div
        className="rounded-[24px] border p-4 sm:p-5"
        style={{
          background: "rgba(255,255,255,0.8)",
          border: `1px solid ${accentSoft}0.12)`,
          boxShadow: `0 12px 32px ${accentSoft}0.06)`,
        }}
      >
        <h3
          className="mb-1 text-sm font-bold uppercase tracking-[0.18em]"
          style={{ color: accent }}
        >
          Lecciones
        </h3>
        <p
          className="mb-3 text-xs leading-5"
          style={{ color: "var(--ink-soft)", opacity: 0.65 }}
        >
          Selecciona una o varias — o deja todo sin marcar para usar todas (
          {lessons.reduce((a, l) => a + l.characters.length, 0)} caracteres)
        </p>

        <button
          onClick={() => setSelectedLessons([])}
          className="mb-3 w-full rounded-2xl border p-3 text-left text-sm font-semibold transition-all duration-200"
          style={{
            background: isAll ? `${accentSoft}0.10)` : "rgba(255,255,255,0.6)",
            border: `1px solid ${isAll ? `${accentSoft}0.30)` : "var(--border)"}`,
            color: isAll ? accent : "var(--ink)",
          }}
        >
          {isAll ? "✓ " : ""}Todas las lecciones (
          {lessons.reduce((a, l) => a + l.characters.length, 0)} caracteres)
        </button>

        <div className="grid grid-cols-1 gap-2 min-[520px]:grid-cols-2">
          {lessons.map((lesson) => {
            const active = selectedLessons.includes(lesson.id);

            return (
              <button
                key={lesson.id}
                onClick={() => toggleLesson(lesson.id)}
                className="rounded-xl border p-2.5 text-left text-xs transition-all duration-200"
                style={{
                  background: active ? `${accentSoft}0.12)` : "rgba(255,255,255,0.6)",
                  border: `1px solid ${active ? `${accentSoft}0.30)` : "var(--border)"}`,
                  color: "var(--ink)",
                }}
              >
                <span
                  className="char-display block font-bold"
                  style={{ color: active ? accent : "var(--ink-soft)" }}
                >
                  {active ? "✓ " : ""}
                  {lesson.characters.slice(0, 3).join("")}
                  {lesson.characters.length > 3 && "…"}
                </span>
                <span className="mt-0.5 block leading-tight opacity-60">
                  {lesson.lesson.split(" - ")[1] ?? lesson.lesson}
                </span>
              </button>
            );
          })}
        </div>

        {!isAll && (
          <p className="mt-3 text-xs font-medium" style={{ color: accent }}>
            {selectedLessons.length} lección
            {selectedLessons.length > 1 ? "es" : ""} · {totalChars} caracteres
            seleccionados
          </p>
        )}
      </div>

      <div
        className="rounded-[24px] border p-4 sm:p-5"
        style={{
          background: "rgba(255,255,255,0.8)",
          border: `1px solid ${accentSoft}0.12)`,
          boxShadow: `0 12px 32px ${accentSoft}0.06)`,
        }}
      >
        <h3
          className="mb-3 text-sm font-bold uppercase tracking-[0.18em]"
          style={{ color: accent }}
        >
          Preguntas: {count}
        </h3>

        <input
          type="range"
          min={5}
          max={30}
          step={5}
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="w-full"
          style={{ accentColor: accent }}
        />

        <div
          className="mt-2 flex justify-between text-xs"
          style={{ color: "var(--ink-soft)", opacity: 0.6 }}
        >
          <span>5</span>
          <span>10</span>
          <span>15</span>
          <span>20</span>
          <span>25</span>
          <span>30</span>
        </div>
      </div>

      <div className="pt-2 pb-[calc(env(safe-area-inset-bottom)+6.5rem)] sm:pb-0">
        <button
          onClick={() => onStart(selectedLessons, mode, count)}
          className="w-full rounded-2xl py-4 text-base font-bold text-white transition-all duration-200 hover:brightness-110 active:scale-95"
          style={{
            background: gradient,
            boxShadow: `0 12px 28px ${accentSoft}0.25)`,
          }}
        >
          Empezar Quiz → {!isAll && `(${totalChars} chars)`}
        </button>
      </div>
    </div>
  );
}

function QuestionScreen({
  question,
  current,
  total,
  accent,
  accentSoft,
  gradient,
  onAnswer,
}: {
  question: QuizQuestion;
  current: number;
  total: number;
  accent: string;
  accentSoft: string;
  gradient: string;
  onAnswer: (answer: string) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    setTimeout(() => onAnswer(opt), 900);
  };

  useEffect(() => {
    setSelected(null);
  }, [question.id]);

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.25 }}
      className="space-y-5"
    >
      <div className="flex items-center gap-3">
        <div
          className="h-2 flex-1 overflow-hidden rounded-full"
          style={{ background: `${accentSoft}0.12)` }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ background: gradient }}
            initial={{ width: `${((current - 1) / total) * 100}%` }}
            animate={{ width: `${(current / total) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <span className="text-xs font-semibold" style={{ color: accent }}>
          {current}/{total}
        </span>
      </div>

      <div
        className="flex min-h-[160px] items-center justify-center rounded-[28px] border py-10"
        style={{
          background: "rgba(255,255,255,0.85)",
          border: `1px solid ${accentSoft}0.12)`,
          boxShadow: `0 16px 36px ${accentSoft}0.08)`,
        }}
      >
        <span
          className={question.promptType === "char" ? "char-display" : "font-mono"}
          style={{
            fontSize:
              question.promptType === "char"
                ? "clamp(4rem, 16vw, 8rem)"
                : "clamp(2rem, 8vw, 4rem)",
            fontWeight: 700,
            background: gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1.1,
          }}
        >
          {question.prompt}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {question.options.map((opt) => {
          const isThis = selected === opt;
          const isRight = opt === question.correct;

          let bg = "rgba(255,255,255,0.8)";
          let border = "var(--border)";
          let color = "var(--ink)";

          if (selected) {
            if (isRight) {
              bg = "rgba(220,252,231,0.9)";
              border = "#16A34A";
              color = "#15803D";
            } else if (isThis) {
              bg = "rgba(254,226,226,0.9)";
              border = "#DC2626";
              color = "#B91C1C";
            }
          }

          return (
            <motion.button
              key={opt}
              whileTap={!selected ? { scale: 0.97 } : {}}
              onClick={() => handleSelect(opt)}
              className="rounded-2xl border p-4 text-center transition-all duration-200"
              style={{
                background: bg,
                border: `2px solid ${border}`,
                color,
                cursor: selected ? "default" : "pointer",
              }}
            >
              <span
                className={
                  question.promptType === "char"
                    ? "font-mono text-lg font-semibold"
                    : "char-display text-3xl font-bold"
                }
              >
                {opt}
              </span>
              {selected && isRight && (
                <div className="mt-1 text-xs font-bold">✓ Correcto</div>
              )}
              {selected && isThis && !isRight && (
                <div className="mt-1 text-xs font-bold">✗ Incorrecto</div>
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}

function ResultsScreen({
  score,
  total,
  accent,
  accentSoft,
  gradient,
  onRestart,
  onNewQuiz,
}: {
  score: number;
  total: number;
  accent: string;
  accentSoft: string;
  gradient: string;
  onRestart: () => void;
  onNewQuiz: () => void;
}) {
  const pct = Math.round((score / total) * 100);
  const emoji = pct === 100 ? "🎉" : pct >= 80 ? "😊" : pct >= 60 ? "🤔" : "😅";
  const msg =
    pct === 100
      ? "¡Perfecto!"
      : pct >= 80
      ? "¡Muy bien!"
      : pct >= 60
      ? "¡Bien, sigue practicando!"
      : "¡Sigue intentando!";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center gap-5 text-center"
    >
      <div
        className="w-full rounded-[28px] border px-6 py-8"
        style={{
          background: "rgba(255,255,255,0.85)",
          border: `1px solid ${accentSoft}0.12)`,
          boxShadow: `0 20px 48px ${accentSoft}0.10)`,
        }}
      >
        <div className="mb-3 text-5xl">{emoji}</div>
        <h2 className="text-2xl font-bold" style={{ color: "var(--ink)" }}>
          {msg}
        </h2>

        <div className="my-6 flex flex-col items-center">
          <div
            className="flex h-28 w-28 items-center justify-center rounded-full text-3xl font-bold text-white"
            style={{
              background: gradient,
              boxShadow: `0 8px 24px ${accentSoft}0.30)`,
            }}
          >
            {score}/{total}
          </div>
          <p className="mt-3 text-lg font-semibold" style={{ color: accent }}>
            {pct}% correcto
          </p>
        </div>

        <div className="flex justify-center gap-6 text-sm">
          <div>
            <span className="text-2xl font-bold" style={{ color: "#15803D" }}>
              {score}
            </span>
            <p style={{ color: "var(--ink-soft)" }}>correctas</p>
          </div>
          <div>
            <span className="text-2xl font-bold" style={{ color: "#B91C1C" }}>
              {total - score}
            </span>
            <p style={{ color: "var(--ink-soft)" }}>incorrectas</p>
          </div>
        </div>
      </div>

      <div className="flex w-full gap-3">
        <button
          onClick={onRestart}
          className="flex-1 rounded-2xl py-3.5 text-sm font-bold text-white hover:brightness-110"
          style={{ background: gradient }}
        >
          Repetir quiz
        </button>
        <button
          onClick={onNewQuiz}
          className="flex-1 rounded-2xl py-3.5 text-sm font-semibold hover:bg-white"
          style={{
            border: `1px solid ${accentSoft}0.20)`,
            color: "var(--ink)",
            background: "rgba(255,255,255,0.7)",
          }}
        >
          Nuevo quiz
        </button>
      </div>
    </motion.div>
  );
}

type Screen = "setup" | "quiz" | "results";

export default function QuizPage({
  lessons,
  scriptType,
  backHref,
  backLabel,
  accent,
  accentSoft,
  gradient,
}: QuizPageProps) {
  const [screen, setScreen] = useState<Screen>("setup");
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [lastConfig, setLastConfig] = useState<{
    lessonIds: string[];
    mode: QuizMode;
    count: number;
  } | null>(null);

  const handleStart = useCallback(
    (lessonIds: string[], mode: QuizMode, count: number) => {
      const qs = generateQuiz(lessons, scriptType, { lessonIds, mode, count });
      setQuestions(qs);
      setCurrentIdx(0);
      setScore(0);
      setLastConfig({ lessonIds, mode, count });
      setScreen("quiz");
    },
    [lessons, scriptType]
  );

  const handleAnswer = useCallback(
    (answer: string) => {
      if (answer === questions[currentIdx].correct) {
        setScore((s) => s + 1);
      }

      if (currentIdx < questions.length - 1) {
        setCurrentIdx((i) => i + 1);
      } else {
        setScreen("results");
      }
    },
    [questions, currentIdx]
  );

  return (
    <main
      className="relative flex min-h-[100dvh] flex-col"
      style={{ background: "var(--paper)" }}
    >
      <SakuraAnimation />

      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-1 flex-col px-4 pb-36 pt-6 sm:px-6 sm:pb-24 sm:pt-8">
        <div className="mb-5 flex items-center justify-between gap-3">
          <Link
            href={backHref}
            className="text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: accent }}
          >
            ← {backLabel}
          </Link>

          {screen !== "setup" && (
            <button
              onClick={() => setScreen("setup")}
              className="text-xs font-medium transition-opacity hover:opacity-70"
              style={{ color: "var(--ink-soft)" }}
            >
              Cambiar configuración
            </button>
          )}
        </div>

        <div className="mb-6">
          <div
            className="mb-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
            style={{
              color: accent,
              background: `${accentSoft}0.08)`,
              border: `1px solid ${accentSoft}0.15)`,
            }}
          >
            クイズ · Trivia
          </div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--ink)" }}>
            Quiz de {backLabel}
          </h1>
        </div>

        <div className="flex-1">
          <AnimatePresence mode="wait">
            {screen === "setup" && (
              <motion.div
                key="setup"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <SetupScreen
                  lessons={lessons}
                  accent={accent}
                  accentSoft={accentSoft}
                  gradient={gradient}
                  onStart={handleStart}
                />
              </motion.div>
            )}

            {screen === "quiz" && questions[currentIdx] && (
              <QuestionScreen
                key={`q-${currentIdx}`}
                question={questions[currentIdx]}
                current={currentIdx + 1}
                total={questions.length}
                accent={accent}
                accentSoft={accentSoft}
                gradient={gradient}
                onAnswer={handleAnswer}
              />
            )}

            {screen === "results" && (
              <ResultsScreen
                key="results"
                score={score}
                total={questions.length}
                accent={accent}
                accentSoft={accentSoft}
                gradient={gradient}
                onRestart={() =>
                  lastConfig &&
                  handleStart(lastConfig.lessonIds, lastConfig.mode, lastConfig.count)
                }
                onNewQuiz={() => setScreen("setup")}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
