"use client";

//src/app/gramatica/particulas/quiz/page.tsx

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import { PARTICLE_QUIZ_BANKS } from "@/data/grammar/particleQuiz";
import type { ParticleQuestion } from "@/data/grammar/particleQuiz";
import { RubyText } from "@/app/components/ui/Ruby";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";

const ACCENT = "#E65100";
const ACCENT_SOFT = "rgba(255,171,64,";
const GRADIENT = "linear-gradient(135deg, #FFAB40, #E65100)";

const ALL_PARTICLES = PARTICLE_QUIZ_BANKS.map((b) => b.symbol);

// ─── Shuffle ──────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Sentence renderer (shows blank prominently) ──────────────────────────────

function SentenceWithBlank({
  question,
  answered,
  userAnswer,
}: {
  question: ParticleQuestion;
  answered: boolean;
  userAnswer: string;
}) {
  const isCorrect = answered && question.answers.includes(userAnswer);

  return (
    <div className="flex flex-wrap items-baseline justify-center gap-1 text-center">
      {question.segments.map((seg, i) => {
        if (seg.text === "____") {
          return (
            <span
              key={i}
              className="char-display inline-flex min-w-[2.5rem] items-center justify-center rounded-xl px-2 py-0.5 text-2xl font-bold transition-all duration-300"
              style={{
                background: answered
                  ? isCorrect
                    ? "rgba(220,252,231,0.9)"
                    : "rgba(254,226,226,0.9)"
                  : `${ACCENT_SOFT}0.12)`,
                border: `2px solid ${
                  answered
                    ? isCorrect
                      ? "#16A34A"
                      : "#DC2626"
                    : ACCENT
                }`,
                color: answered
                  ? isCorrect
                    ? "#15803D"
                    : "#B91C1C"
                  : ACCENT,
                minWidth: "3rem",
              }}
            >
              {answered ? userAnswer || "—" : "　"}
            </span>
          );
        }
        return (
          <RubyText
            key={i}
            segments={[seg]}
            className="char-display text-2xl leading-loose"
            style={{ color: "var(--ink)" }}
          />
        );
      })}
    </div>
  );
}

// ─── Setup Screen ─────────────────────────────────────────────────────────────

function SetupScreen({ onStart }: { onStart: (particles: string[], count: number) => void }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [count, setCount] = useState(8);

  const toggleParticle = (p: string) =>
    setSelected((prev) => prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]);

  const isAll = selected.length === 0;

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">

      {/* Particle selector */}
      <div className="rounded-[24px] border p-5" style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ACCENT_SOFT}0.15)`, boxShadow: `0 12px 32px ${ACCENT_SOFT}0.06)` }}>
        <h3 className="mb-1 text-sm font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
          Partículas a practicar
        </h3>
        <p className="mb-4 text-xs" style={{ color: "var(--ink-soft)", opacity: 0.65 }}>
          Sin marcar = todas las partículas
        </p>

        <button
          onClick={() => setSelected([])}
          className="mb-3 w-full rounded-2xl border p-3 text-sm font-semibold transition-all"
          style={{
            background: isAll ? `${ACCENT_SOFT}0.10)` : "rgba(255,255,255,0.6)",
            border: `1px solid ${isAll ? `${ACCENT_SOFT}0.35)` : "var(--border)"}`,
            color: isAll ? ACCENT : "var(--ink)",
          }}
        >
          {isAll ? "✓ " : ""}Todas las partículas ({PARTICLE_QUIZ_BANKS.reduce((a, b) => a + b.questions.length, 0)} preguntas disponibles)
        </button>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {PARTICLE_QUIZ_BANKS.map((bank) => {
            const active = selected.includes(bank.symbol);
            return (
              <button
                key={bank.symbol}
                onClick={() => toggleParticle(bank.symbol)}
                className="rounded-xl border p-3 text-left transition-all duration-200"
                style={{
                  background: active ? `${ACCENT_SOFT}0.10)` : "rgba(255,255,255,0.6)",
                  border: `1px solid ${active ? `${ACCENT_SOFT}0.35)` : "var(--border)"}`,
                }}
              >
                <span className="char-display block text-xl font-bold" style={{ color: active ? ACCENT : "var(--ink-soft)" }}>
                  {active ? "✓ " : ""}{bank.symbol}
                </span>
                <span className="mt-0.5 block text-xs opacity-60" style={{ color: "var(--ink)" }}>
                  {bank.particle.split(" ")[1] ?? ""} · {bank.questions.length}p
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Count */}
      <div className="rounded-[24px] border p-5" style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ACCENT_SOFT}0.15)`, boxShadow: `0 12px 32px ${ACCENT_SOFT}0.06)` }}>
        <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
          Preguntas: {count}
        </h3>
        <input
          type="range" min={3} max={15} step={1} value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="w-full" style={{ accentColor: ACCENT }}
        />
        <div className="mt-1 flex justify-between text-xs" style={{ color: "var(--ink-soft)", opacity: 0.6 }}>
          <span>3</span><span>8</span><span>15</span>
        </div>
      </div>

      {/* Start */}
      <button
        onClick={() => onStart(selected, count)}
        className="w-full rounded-2xl py-4 text-base font-bold text-white transition-all hover:brightness-110 active:scale-95"
        style={{ background: GRADIENT, boxShadow: `0 12px 28px ${ACCENT_SOFT}0.25)` }}
      >
        Comenzar Quiz →
      </button>
    </motion.div>
  );
}

// ─── Question Screen ──────────────────────────────────────────────────────────

function QuestionScreen({
  question,
  current,
  total,
  onAnswer,
}: {
  question: ParticleQuestion & { bankSymbol: string };
  current: number;
  total: number;
  onAnswer: (answer: string, correct: boolean) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [typed, setTyped] = useState("");
  const [mode, setMode] = useState<"buttons" | "type">("buttons");
  const [answered, setAnswered] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSelected(null); setTyped(""); setAnswered(false);
  }, [question]);

  useEffect(() => {
    if (mode === "type") inputRef.current?.focus();
  }, [mode]);

  const handleAnswer = useCallback((answer: string) => {
    if (answered) return;
    const isCorrect = question.answers.includes(answer.trim());
    setSelected(answer);
    setAnswered(true);
    setTimeout(() => onAnswer(answer, isCorrect), 1200);
  }, [answered, question.answers, onAnswer]);

  const handleType = (e: React.FormEvent) => {
    e.preventDefault();
    if (typed.trim()) handleAnswer(typed.trim());
  };

  const isCorrect = answered && selected !== null && question.answers.includes(selected);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.25 }}
      className="space-y-5"
    >
      {/* Progress */}
      <div className="flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full" style={{ background: `${ACCENT_SOFT}0.12)` }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: GRADIENT }}
            animate={{ width: `${(current / total) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <span className="text-xs font-semibold" style={{ color: ACCENT }}>{current}/{total}</span>
      </div>

      {/* Question card */}
      <div
        className="rounded-[28px] border p-6"
        style={{
          background: "rgba(255,255,255,0.88)",
          border: `1px solid ${ACCENT_SOFT}0.12)`,
          boxShadow: `0 16px 40px ${ACCENT_SOFT}0.08)`,
        }}
      >
        {/* Hint */}
        {question.hint && (
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
            style={{ color: ACCENT, background: `${ACCENT_SOFT}0.08)`, border: `1px solid ${ACCENT_SOFT}0.15)` }}
          >
            💡 {question.hint}
          </div>
        )}

        {/* Sentence */}
        <div className="mb-6 min-h-[80px] flex items-center justify-center px-2">
          <SentenceWithBlank
            question={question}
            answered={answered}
            userAnswer={selected ?? ""}
          />
        </div>

        {/* Feedback */}
        <AnimatePresence>
          {answered && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 rounded-xl px-4 py-3 text-sm font-medium text-center"
              style={{
                background: isCorrect ? "rgba(220,252,231,0.9)" : "rgba(254,226,226,0.9)",
                color: isCorrect ? "#15803D" : "#B91C1C",
                border: `1px solid ${isCorrect ? "#16A34A" : "#DC2626"}33`,
              }}
            >
              {isCorrect
                ? "¡Correcto! ✓"
                : `Incorrecto — la respuesta era: ${question.answers.join(" / ")}`}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mode toggle */}
        <div className="mb-4 flex justify-center gap-2">
          {(["buttons", "type"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className="rounded-full px-3 py-1 text-xs font-semibold transition-all"
              style={{
                background: mode === m ? `${ACCENT_SOFT}0.12)` : "transparent",
                color: mode === m ? ACCENT : "var(--ink-soft)",
                border: `1px solid ${mode === m ? `${ACCENT_SOFT}0.25)` : "var(--border)"}`,
              }}
            >
              {m === "buttons" ? "Selección" : "Escribir"}
            </button>
          ))}
        </div>

        {/* Answer input */}
        {mode === "buttons" ? (
          <div className="grid grid-cols-5 gap-2">
            {ALL_PARTICLES.map((p) => {
              const isThis = selected === p;
              const isRight = question.answers.includes(p);
              let bg = "rgba(255,255,255,0.8)", border = "var(--border)", color = "var(--ink)";
              if (answered) {
                if (isRight)        { bg = "rgba(220,252,231,0.9)"; border = "#16A34A"; color = "#15803D"; }
                else if (isThis)    { bg = "rgba(254,226,226,0.9)"; border = "#DC2626"; color = "#B91C1C"; }
              }
              return (
                <motion.button
                  key={p}
                  whileTap={!answered ? { scale: 0.92 } : {}}
                  onClick={() => !answered && handleAnswer(p)}
                  className="char-display rounded-xl border py-3 text-xl font-bold transition-all duration-200"
                  style={{ background: bg, border: `2px solid ${border}`, color, cursor: answered ? "default" : "pointer" }}
                >
                  {p}
                </motion.button>
              );
            })}
          </div>
        ) : (
          <form onSubmit={handleType} className="flex gap-2">
            <input
              ref={inputRef}
              value={typed}
              onChange={(e) => setTyped(e.target.value)}
              placeholder="Escribe la partícula..."
              disabled={answered}
              className="char-display flex-1 rounded-2xl border px-4 py-3 text-xl font-bold outline-none transition-all"
              style={{
                border: `2px solid ${ACCENT_SOFT}0.25)`,
                color: "var(--ink)",
                background: "rgba(255,255,255,0.9)",
              }}
            />
            <button
              type="submit"
              disabled={answered || !typed.trim()}
              className="rounded-2xl px-5 py-3 text-sm font-bold text-white transition-all disabled:opacity-40"
              style={{ background: GRADIENT }}
            >
              ✓
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
}

// ─── Results ──────────────────────────────────────────────────────────────────

function ResultsScreen({
  score, total, mistakes, onRestart, onNewQuiz,
}: {
  score: number; total: number;
  mistakes: Array<{ question: ParticleQuestion; userAnswer: string }>;
  onRestart: () => void; onNewQuiz: () => void;
}) {
  const pct = Math.round((score / total) * 100);
  const emoji = pct === 100 ? "🎉" : pct >= 80 ? "😊" : pct >= 60 ? "🤔" : "😅";
  const msg = pct === 100 ? "¡Perfecto!" : pct >= 80 ? "¡Muy bien!" : pct >= 60 ? "Sigue practicando" : "¡Ánimo!";

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4">
      <div className="rounded-[28px] border px-6 py-8 text-center" style={{ background: "rgba(255,255,255,0.88)", border: `1px solid ${ACCENT_SOFT}0.15)`, boxShadow: `0 20px 48px ${ACCENT_SOFT}0.10)` }}>
        <div className="text-5xl mb-3">{emoji}</div>
        <h2 className="text-2xl font-bold" style={{ color: "var(--ink)" }}>{msg}</h2>
        <div className="my-6 flex flex-col items-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full text-3xl font-bold text-white" style={{ background: GRADIENT, boxShadow: `0 8px 24px ${ACCENT_SOFT}0.30)` }}>
            {score}/{total}
          </div>
          <p className="mt-3 text-lg font-semibold" style={{ color: ACCENT }}>{pct}% correcto</p>
        </div>
      </div>

      {/* Mistakes review */}
      {mistakes.length > 0 && (
        <div className="rounded-[24px] border p-5" style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ACCENT_SOFT}0.12)` }}>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
            Repasa tus errores
          </h3>
          <div className="space-y-3">
            {mistakes.map((m, i) => (
              <div key={i} className="rounded-xl p-3" style={{ background: "rgba(254,226,226,0.3)", border: "1px solid rgba(220,38,38,0.15)" }}>
                <div className="mb-1 flex flex-wrap items-baseline gap-1">
                  <RubyText
                    segments={m.question.segments.map((s) => s.text === "____" ? { text: m.question.answers[0] } : s)}
                    className="char-display text-lg"
                    style={{ color: "var(--ink)" }}
                  />
                </div>
                <p className="text-xs" style={{ color: "#B91C1C" }}>
                  Tu respuesta: <strong>{m.userAnswer || "—"}</strong> → Correcto: <strong>{m.question.answers.join(" / ")}</strong>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-3">
        <button onClick={onRestart} className="flex-1 rounded-2xl py-3.5 text-sm font-bold text-white hover:brightness-110" style={{ background: GRADIENT }}>
          Repetir
        </button>
        <button onClick={onNewQuiz} className="flex-1 rounded-2xl py-3.5 text-sm font-semibold hover:bg-white" style={{ border: `1px solid ${ACCENT_SOFT}0.20)`, color: "var(--ink)", background: "rgba(255,255,255,0.7)" }}>
          Nuevo quiz
        </button>
      </div>
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

interface QuizEntry extends ParticleQuestion { bankSymbol: string; }

type Screen = "setup" | "quiz" | "results";

export default function ParticleQuizPage() {
  const [screen, setScreen] = useState<Screen>("setup");
  const [questions, setQuestions] = useState<QuizEntry[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState<Array<{ question: ParticleQuestion; userAnswer: string }>>([]);

  const handleStart = useCallback((particles: string[], count: number) => {
    const banks = particles.length > 0
      ? PARTICLE_QUIZ_BANKS.filter((b) => particles.includes(b.symbol))
      : PARTICLE_QUIZ_BANKS;

    const pool: QuizEntry[] = banks.flatMap((b) =>
      b.questions.map((q) => ({ ...q, bankSymbol: b.symbol }))
    );

    const picked = shuffle(pool).slice(0, count);
    setQuestions(picked);
    setCurrentIdx(0);
    setScore(0);
    setMistakes([]);
    setScreen("quiz");
  }, []);

  const handleAnswer = useCallback((answer: string, correct: boolean) => {
    if (correct) {
      setScore((s) => s + 1);
    } else {
      setMistakes((m) => [...m, { question: questions[currentIdx], userAnswer: answer }]);
    }
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((i) => i + 1);
    } else {
      setScreen("results");
    }
  }, [questions, currentIdx]);

  return (
    <main className="relative min-h-screen" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />

      <div className="relative z-10 mx-auto max-w-xl px-4 pb-24 pt-8 sm:px-6">
        <div className="mb-6 flex items-center justify-between">
          <Link href="/gramatica/particulas" className="text-sm font-medium transition-opacity hover:opacity-70" style={{ color: ACCENT }}>
            ← Partículas
          </Link>
          {screen !== "setup" && (
            <button onClick={() => setScreen("setup")} className="text-xs font-medium hover:opacity-70" style={{ color: "var(--ink-soft)" }}>
              Cambiar configuración
            </button>
          )}
        </div>

        <div className="mb-6">
          <div
            className="mb-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
            style={{ color: ACCENT, background: `${ACCENT_SOFT}0.08)`, border: `1px solid ${ACCENT_SOFT}0.15)` }}
          >
            助詞クイズ · Quiz de Partículas
          </div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--ink)" }}>
            Completa la oración
          </h1>
          <p className="mt-1 text-sm" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>
            Elige o escribe la partícula correcta para completar cada oración.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {screen === "setup" && (
            <motion.div key="setup" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <SetupScreen onStart={handleStart} />
            </motion.div>
          )}
          {screen === "quiz" && questions[currentIdx] && (
            <QuestionScreen
              key={`q-${currentIdx}`}
              question={questions[currentIdx]}
              current={currentIdx + 1}
              total={questions.length}
              onAnswer={handleAnswer}
            />
          )}
          {screen === "results" && (
            <ResultsScreen
              key="results"
              score={score}
              total={questions.length}
              mistakes={mistakes}
              onRestart={() => handleStart([], questions.length)}
              onNewQuiz={() => setScreen("setup")}
            />
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}