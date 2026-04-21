// src/app/kanji/quiz/page.tsx

"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { KANJI_LIST, getKanjiByLevel, type KanjiEntry, getPrimaryKanjiExample, kanjiExampleToText } from "@/data/kanji";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";

const ACCENT = "#2E7D32";
const ACCENT_SOFT = "rgba(46,125,50,";
const GRADIENT = "linear-gradient(135deg, #A5D6A7, #2E7D32)";

// ─── Types ────────────────────────────────────────────────────────────────────

type QuizMode = "kanji-to-meaning" | "meaning-to-kanji" | "kanji-to-reading";

interface QuizQuestion {
  prompt: string;
  promptType: "kanji" | "meaning" | "reading";
  correct: string;
  options: string[];
  entry: KanjiEntry;
}

// ─── Generator ────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateQuiz(levels: number[], mode: QuizMode, count: number): QuizQuestion[] {
  // Only level 1 has full data (meaning, readings)
  const pool = KANJI_LIST.filter(k =>
    levels.includes(k.level) && k.meaning !== ""
  );

  const allMeanings = [...new Set(pool.map(k => k.meaning))];
  const allChars = pool.map(k => k.char);
  const allReadings = [...new Set(pool.flatMap(k => k.on).filter(Boolean))];

  const selected = shuffle(pool).slice(0, count);
  const questions: QuizQuestion[] = [];

  for (const entry of selected) {
    if (mode === "kanji-to-meaning") {
      const distractors = shuffle(allMeanings.filter(m => m !== entry.meaning)).slice(0, 3);
      questions.push({
        prompt: entry.char,
        promptType: "kanji",
        correct: entry.meaning,
        options: shuffle([entry.meaning, ...distractors]),
        entry,
      });
    } else if (mode === "meaning-to-kanji") {
      const distractors = shuffle(allChars.filter(c => c !== entry.char)).slice(0, 3);
      questions.push({
        prompt: entry.meaning,
        promptType: "meaning",
        correct: entry.char,
        options: shuffle([entry.char, ...distractors]),
        entry,
      });
    } else if (mode === "kanji-to-reading" && entry.on.length > 0) {
      const correct = entry.on[0];
      const distractors = shuffle(allReadings.filter(r => r !== correct)).slice(0, 3);
      if (distractors.length < 3) continue;
      questions.push({
        prompt: entry.char,
        promptType: "kanji",
        correct,
        options: shuffle([correct, ...distractors]),
        entry,
      });
    }
  }

  return questions.slice(0, count);
}

// ─── Setup Screen ─────────────────────────────────────────────────────────────

function SetupScreen({ onStart }: {
  onStart: (levels: number[], mode: QuizMode, count: number) => void;
}) {
  const [selectedLevels, setSelectedLevels] = useState<number[]>([1]);
  const [mode, setMode] = useState<QuizMode>("kanji-to-meaning");
  const [count, setCount] = useState(10);

  const toggleLevel = (l: number) =>
    setSelectedLevels(prev =>
      prev.includes(l) ? (prev.length > 1 ? prev.filter(x => x !== l) : prev) : [...prev, l]
    );

  const MODES: { key: QuizMode; label: string; desc: string; example: string }[] = [
    { key: "kanji-to-meaning", label: "漢字 → Significado", desc: "Ver kanji, elegir significado", example: "火 → Fuego" },
    { key: "meaning-to-kanji", label: "Significado → 漢字", desc: "Ver significado, elegir kanji",  example: "Fuego → 火" },
    { key: "kanji-to-reading", label: "漢字 → 読み方",      desc: "Ver kanji, elegir on-yomi",      example: "火 → カ" },
  ];

  // Only level 1 has full data
  const LEVELS_WITH_DATA = [1];

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">

      {/* Mode */}
      <div className="rounded-[24px] border p-5"
        style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ACCENT_SOFT}0.12)`, boxShadow: `0 12px 32px ${ACCENT_SOFT}0.06)` }}>
        <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>Modo de quiz</h3>
        <div className="space-y-2">
          {MODES.map(m => (
            <button key={m.key} onClick={() => setMode(m.key)}
              className="w-full rounded-2xl border p-4 text-left transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: mode === m.key ? `${ACCENT_SOFT}0.08)` : "rgba(255,255,255,0.6)",
                border: `1px solid ${mode === m.key ? `${ACCENT_SOFT}0.25)` : "var(--border)"}`,
                boxShadow: mode === m.key ? `0 4px 16px ${ACCENT_SOFT}0.10)` : "none",
              }}>
              <div className="flex items-center justify-between">
                <div>
                  <span className="char-display text-base font-bold" style={{ color: ACCENT }}>{m.label}</span>
                  <p className="mt-0.5 text-xs" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>{m.desc}</p>
                </div>
                <span className="char-display text-sm font-medium px-3 py-1 rounded-xl"
                  style={{ background: `${ACCENT_SOFT}0.08)`, color: ACCENT }}>{m.example}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Level selector */}
      <div className="rounded-[24px] border p-5"
        style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ACCENT_SOFT}0.12)`, boxShadow: `0 12px 32px ${ACCENT_SOFT}0.06)` }}>
        <h3 className="mb-1 text-sm font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>Nivel</h3>
        <p className="mb-3 text-xs" style={{ color: "var(--ink-soft)", opacity: 0.6 }}>
          Solo niveles con datos completos disponibles para quiz
        </p>
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(l => {
            const hasData = LEVELS_WITH_DATA.includes(l);
            const active = selectedLevels.includes(l);
            return (
              <button key={l}
                onClick={() => hasData && toggleLevel(l)}
                disabled={!hasData}
                className="rounded-xl border py-3 text-center transition-all"
                style={{
                  background: active ? `${ACCENT_SOFT}0.12)` : "rgba(255,255,255,0.6)",
                  border: `1px solid ${active ? `${ACCENT_SOFT}0.30)` : "var(--border)"}`,
                  color: hasData ? (active ? ACCENT : "var(--ink)") : "var(--ink-soft)",
                  opacity: hasData ? 1 : 0.4,
                  cursor: hasData ? "pointer" : "not-allowed",
                }}>
                <span className="char-display block font-bold">{l}</span>
                <span className="text-[0.6rem]">{hasData ? `${getKanjiByLevel(l).filter(k=>k.meaning).length}k` : "—"}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Count */}
      <div className="rounded-[24px] border p-5"
        style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ACCENT_SOFT}0.12)`, boxShadow: `0 12px 32px ${ACCENT_SOFT}0.06)` }}>
        <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>Preguntas: {count}</h3>
        <input type="range" min={5} max={20} step={5} value={count}
          onChange={e => setCount(Number(e.target.value))} className="w-full" style={{ accentColor: ACCENT }} />
        <div className="mt-1 flex justify-between text-xs" style={{ color: "var(--ink-soft)", opacity: 0.5 }}>
          <span>5</span><span>10</span><span>15</span><span>20</span>
        </div>
      </div>

      <button onClick={() => onStart(selectedLevels, mode, count)}
        className="w-full rounded-2xl py-4 text-base font-bold text-white transition-all hover:brightness-110 active:scale-95"
        style={{ background: GRADIENT, boxShadow: `0 12px 28px ${ACCENT_SOFT}0.25)` }}>
        Empezar Quiz →
      </button>
    </motion.div>
  );
}

// ─── Question Screen ──────────────────────────────────────────────────────────

function QuestionScreen({ question, current, total, onAnswer }: {
  question: QuizQuestion; current: number; total: number;
  onAnswer: (answer: string) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    setTimeout(() => onAnswer(opt), 900);
  };

  useEffect(() => { setSelected(null); }, [question.entry.char, question.promptType]);

  const isKanjiPrompt = question.promptType === "kanji";

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }} className="space-y-5">

      {/* Progress */}
      <div className="flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full" style={{ background: `${ACCENT_SOFT}0.12)` }}>
          <motion.div className="h-full rounded-full" style={{ background: GRADIENT }}
            animate={{ width: `${(current / total) * 100}%` }} transition={{ duration: 0.4 }} />
        </div>
        <span className="text-xs font-semibold" style={{ color: ACCENT }}>{current}/{total}</span>
      </div>

      {/* Prompt */}
      <div className="flex items-center justify-center rounded-[28px] border py-10"
        style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ACCENT_SOFT}0.12)`,
          boxShadow: `0 16px 36px ${ACCENT_SOFT}0.08)`, minHeight: "160px" }}>
        <span
          className={isKanjiPrompt ? "char-display" : "font-medium"}
          style={{
            fontSize: isKanjiPrompt ? "clamp(4rem, 16vw, 8rem)" : "clamp(1.2rem, 4vw, 2rem)",
            fontWeight: 700,
            background: GRADIENT,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1.2,
            textAlign: "center",
            maxWidth: isKanjiPrompt ? "auto" : "280px",
          }}>
          {question.prompt}
        </span>
      </div>

      {/* Options */}
      <div className={`grid gap-3 ${question.promptType === "meaning" ? "grid-cols-2" : "grid-cols-2"}`}>
        {question.options.map(opt => {
          const isThis = selected === opt;
          const isRight = opt === question.correct;
          let bg = "rgba(255,255,255,0.8)", border = "var(--border)", color = "var(--ink)";
          if (selected) {
            if (isRight)     { bg = "rgba(220,252,231,0.9)"; border = "#16A34A"; color = "#15803D"; }
            else if (isThis) { bg = "rgba(254,226,226,0.9)"; border = "#DC2626"; color = "#B91C1C"; }
          }
          const optIsKanji = question.promptType === "meaning";
          return (
            <motion.button key={opt}
              whileTap={!selected ? { scale: 0.97 } : {}}
              onClick={() => handleSelect(opt)}
              className="rounded-2xl border p-4 text-center transition-all duration-200"
              style={{ background: bg, border: `2px solid ${border}`, color, cursor: selected ? "default" : "pointer" }}>
              <span className={optIsKanji ? "char-display text-3xl font-bold" : "text-sm font-semibold leading-snug"}>
                {opt}
              </span>
              {selected && isRight  && <div className="mt-1 text-xs font-bold">✓ Correcto</div>}
              {selected && isThis && !isRight && <div className="mt-1 text-xs font-bold">✗ Incorrecto</div>}
            </motion.button>
          );
        })}
      </div>

      {/* Context after answer */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl p-4"
            style={{ background: `${ACCENT_SOFT}0.06)`, border: `1px solid ${ACCENT_SOFT}0.12)` }}>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="char-display text-3xl font-bold" style={{ color: ACCENT }}>{question.entry.char}</span>
              <div>
                {question.entry.on.length > 0 && (
                  <p className="char-display text-sm" style={{ color: ACCENT }}>{question.entry.on.join("・")}</p>
                )}
                <p className="text-sm font-semibold" style={{ color: "var(--ink)" }}>{question.entry.meaning}</p>
              </div>
            </div>
            {(() => {
              const primaryExample = getPrimaryKanjiExample(question.entry);
              if (!primaryExample) return null;

              return (
                <p
                  className="char-display mt-2 text-sm"
                  style={{ color: "var(--ink-soft)", opacity: 0.75 }}
                >
                  {kanjiExampleToText(primaryExample)}
                </p>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Results ──────────────────────────────────────────────────────────────────

function ResultsScreen({ score, total, onRestart, onNewQuiz }: {
  score: number; total: number; onRestart: () => void; onNewQuiz: () => void;
}) {
  const pct = Math.round((score / total) * 100);
  const emoji = pct === 100 ? "🎉" : pct >= 80 ? "😊" : pct >= 60 ? "🤔" : "😅";
  const msg = pct === 100 ? "¡Perfecto!" : pct >= 80 ? "¡Muy bien!" : pct >= 60 ? "Sigue practicando" : "¡Ánimo!";

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center gap-5 text-center">
      <div className="w-full rounded-[28px] border px-6 py-8"
        style={{ background: "rgba(255,255,255,0.88)", border: `1px solid ${ACCENT_SOFT}0.12)`, boxShadow: `0 20px 48px ${ACCENT_SOFT}0.10)` }}>
        <div className="text-5xl mb-3">{emoji}</div>
        <h2 className="text-2xl font-bold" style={{ color: "var(--ink)" }}>{msg}</h2>
        <div className="my-6 flex flex-col items-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full text-3xl font-bold text-white"
            style={{ background: GRADIENT, boxShadow: `0 8px 24px ${ACCENT_SOFT}0.30)` }}>
            {score}/{total}
          </div>
          <p className="mt-3 text-lg font-semibold" style={{ color: ACCENT }}>{pct}% correcto</p>
        </div>
        <div className="flex justify-center gap-6 text-sm">
          <div><span className="text-2xl font-bold" style={{ color: "#15803D" }}>{score}</span><p style={{ color: "var(--ink-soft)" }}>correctas</p></div>
          <div><span className="text-2xl font-bold" style={{ color: "#B91C1C" }}>{total - score}</span><p style={{ color: "var(--ink-soft)" }}>incorrectas</p></div>
        </div>
      </div>
      <div className="flex w-full gap-3">
        <button onClick={onRestart} className="flex-1 rounded-2xl py-3.5 text-sm font-bold text-white hover:brightness-110" style={{ background: GRADIENT }}>
          Repetir quiz
        </button>
        <button onClick={onNewQuiz} className="flex-1 rounded-2xl py-3.5 text-sm font-semibold hover:bg-white"
          style={{ border: `1px solid ${ACCENT_SOFT}0.20)`, color: "var(--ink)", background: "rgba(255,255,255,0.7)" }}>
          Nuevo quiz
        </button>
      </div>
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

type Screen = "setup" | "quiz" | "results";

export default function KanjiQuizPage() {
  const [screen, setScreen] = useState<Screen>("setup");
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [lastConfig, setLastConfig] = useState<{ levels: number[]; mode: QuizMode; count: number } | null>(null);

  const handleStart = useCallback((levels: number[], mode: QuizMode, count: number) => {
    const qs = generateQuiz(levels, mode, count);
    setQuestions(qs);
    setCurrentIdx(0);
    setScore(0);
    setLastConfig({ levels, mode, count });
    setScreen("quiz");
  }, []);

  const handleAnswer = useCallback((answer: string) => {
    if (answer === questions[currentIdx].correct) setScore(s => s + 1);
    if (currentIdx < questions.length - 1) setCurrentIdx(i => i + 1);
    else setScreen("results");
  }, [questions, currentIdx]);

  return (
    <main className="relative min-h-screen" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />
      <div className="relative z-10 mx-auto max-w-xl px-4 pb-24 pt-8 sm:px-6">
        <div className="mb-6 flex items-center justify-between">
          <Link href="/kanji" className="text-sm font-medium transition-opacity hover:opacity-70" style={{ color: ACCENT }}>
            ← Kanji
          </Link>
          {screen !== "setup" && (
            <button onClick={() => setScreen("setup")} className="text-xs font-medium hover:opacity-70" style={{ color: "var(--ink-soft)" }}>
              Cambiar configuración
            </button>
          )}
        </div>

        <div className="mb-6">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
            style={{ color: ACCENT, background: `${ACCENT_SOFT}0.08)`, border: `1px solid ${ACCENT_SOFT}0.15)` }}>
            漢字クイズ · Trivia de Kanji
          </div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--ink)" }}>Quiz de Kanji</h1>
          <p className="mt-1 text-sm" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>
            Practica lecturas y significados de kanji.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {screen === "setup" && (
            <motion.div key="setup" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <SetupScreen onStart={handleStart} />
            </motion.div>
          )}
          {screen === "quiz" && questions[currentIdx] && (
            <QuestionScreen key={`q-${currentIdx}`} question={questions[currentIdx]}
              current={currentIdx + 1} total={questions.length} onAnswer={handleAnswer} />
          )}
          {screen === "results" && (
            <ResultsScreen key="results" score={score} total={questions.length}
              onRestart={() => lastConfig && handleStart(lastConfig.levels, lastConfig.mode, lastConfig.count)}
              onNewQuiz={() => setScreen("setup")} />
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}