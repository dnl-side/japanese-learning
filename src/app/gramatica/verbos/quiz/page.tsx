// src/app/gramatica/verbos/quiz/page.tsx
"use client";

import { useState, useCallback, useEffect, useRef, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { VERB_LIST } from "@/data/grammar/verbs";
import {
  conjugate,
  FORM_TENSES,
  FORM_LABELS,
  TENSE_LABELS,
  type FormKey,
  type TenseKey,
  type ConjugationResult,
} from "@/lib/conjugationEngine";
import type { VerbEntry, VerbGroup } from "@/data/grammar/verbs";
import { RubyText } from "@/app/components/ui/Ruby";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";

const ACCENT = "#5D4037";
const ACCENT_SOFT = "rgba(141,110,99,";
const GRADIENT = "linear-gradient(135deg, #FFAB40, #5D4037)";

const GROUP_OPTIONS: { key: VerbGroup | "all"; label: string; color: string }[] = [
  { key: "all",      label: "Todos",    color: "#9E9E9E" },
  { key: "godan",    label: "Grupo 1",  color: "#FFAB40" },
  { key: "ichidan",  label: "Grupo 2",  color: "#81C784" },
  { key: "irregular",label: "Grupo 3",  color: "#90CAF9" },
];

// Forms with color coding
const FORM_OPTIONS: { key: FormKey; level: string; color: string }[] = [
  { key: "masu",              level: "N5", color: "#FFE0B2" },
  { key: "te",                level: "N5", color: "#C8E6C9" },
  { key: "ta",                level: "N5", color: "#FFCCBC" },
  { key: "nai",               level: "N5", color: "#D1C4E9" },
  { key: "tai",               level: "N5", color: "#B3E5FC" },
  { key: "mashou",            level: "N5", color: "#FFF9C4" },
  { key: "potential",         level: "N4", color: "#FFE0B2" },
  { key: "passive",           level: "N4", color: "#B2DFDB" },
  { key: "causative",         level: "N4", color: "#EF9A9A" },
  { key: "causative_passive", level: "N3", color: "#A5D6A7" },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Quiz question type ───────────────────────────────────────────────────────

interface QuizQuestion {
  verb: VerbEntry;
  form: FormKey;
  tense: TenseKey;
  result: ConjugationResult;
}

function generateQuestions(
  groups: VerbGroup[],
  forms: FormKey[],
  count: number
): QuizQuestion[] {
  const verbPool = groups.length > 0
    ? VERB_LIST.filter(v => groups.includes(v.group))
    : VERB_LIST;

  const questions: QuizQuestion[] = [];
  let attempts = 0;

  while (questions.length < count && attempts < 500) {
    attempts++;
    const verb = verbPool[Math.floor(Math.random() * verbPool.length)];
    const form = forms[Math.floor(Math.random() * forms.length)];
    const tenses = FORM_TENSES[form];
    const tense = tenses[Math.floor(Math.random() * tenses.length)];
    const result = conjugate(verb, form, tense);
    if (result && result.morpheme) {
      questions.push({ verb, form, tense, result });
    }
  }
  return questions;
}

// ─── Setup Screen ─────────────────────────────────────────────────────────────

function SetupScreen({ onStart, initialForm }: {
  onStart: (groups: VerbGroup[], forms: FormKey[], count: number) => void;
  initialForm?: FormKey;
}) {
  const [selectedGroup, setSelectedGroup] = useState<VerbGroup | "all">("all");
  const [selectedForms, setSelectedForms] = useState<FormKey[]>(
    initialForm ? [initialForm] : ["masu", "te", "ta", "nai"]
  );
  const [count, setCount] = useState(10);

  const toggleForm = (f: FormKey) =>
    setSelectedForms(prev =>
      prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f]
    );

  const groups: VerbGroup[] = selectedGroup === "all"
    ? ["godan", "ichidan", "irregular"]
    : [selectedGroup];

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">

      {/* Group filter */}
      <div className="rounded-[24px] border p-5"
        style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ACCENT_SOFT}0.12)`, boxShadow: `0 12px 32px ${ACCENT_SOFT}0.06)` }}>
        <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
          Grupo de verbos
        </h3>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {GROUP_OPTIONS.map(g => (
            <button
              key={g.key}
              onClick={() => setSelectedGroup(g.key)}
              className="rounded-2xl border p-3 text-sm font-semibold transition-all"
              style={{
                background: selectedGroup === g.key ? `${g.color}33` : "rgba(255,255,255,0.6)",
                border: `1px solid ${selectedGroup === g.key ? g.color : "var(--border)"}`,
                color: selectedGroup === g.key ? ACCENT : "var(--ink)",
              }}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      {/* Form selector */}
      <div className="rounded-[24px] border p-5"
        style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ACCENT_SOFT}0.12)`, boxShadow: `0 12px 32px ${ACCENT_SOFT}0.06)` }}>
        <h3 className="mb-1 text-sm font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
          Formas a practicar
        </h3>
        <p className="mb-3 text-xs" style={{ color: "var(--ink-soft)", opacity: 0.6 }}>
          Los tiempos disponibles dependen de la forma seleccionada
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {FORM_OPTIONS.map(f => {
            const active = selectedForms.includes(f.key);
            const tenses = FORM_TENSES[f.key];
            return (
              <button
                key={f.key}
                onClick={() => toggleForm(f.key)}
                className="rounded-xl border p-2.5 text-left transition-all"
                style={{
                  background: active ? `${f.color}33` : "rgba(255,255,255,0.6)",
                  border: `1px solid ${active ? f.color : "var(--border)"}`,
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="char-display text-base font-bold" style={{ color: active ? ACCENT : "var(--ink-soft)" }}>
                    {active ? "✓ " : ""}{FORM_LABELS[f.key]}
                  </span>
                  <span className="text-[0.6rem] font-bold px-1.5 py-0.5 rounded-full"
                    style={{ background: `${f.color}44`, color: ACCENT }}>
                    {f.level}
                  </span>
                </div>
                <p className="mt-1 text-[0.65rem] opacity-60" style={{ color: "var(--ink-soft)" }}>
                  {tenses.length === 1
                    ? `Solo ${TENSE_LABELS[tenses[0]].toLowerCase()}`
                    : `${tenses.length} tiempos`}
                </p>
              </button>
            );
          })}
        </div>
        {selectedForms.length === 0 && (
          <p className="mt-2 text-xs" style={{ color: "#DC2626" }}>Selecciona al menos una forma</p>
        )}
      </div>

      {/* Count */}
      <div className="rounded-[24px] border p-5"
        style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ACCENT_SOFT}0.12)`, boxShadow: `0 12px 32px ${ACCENT_SOFT}0.06)` }}>
        <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
          Preguntas: {count}
        </h3>
        <input
          type="range" min={5} max={20} step={5} value={count}
          onChange={e => setCount(Number(e.target.value))}
          className="w-full" style={{ accentColor: ACCENT }}
        />
        <div className="mt-1 flex justify-between text-xs" style={{ color: "var(--ink-soft)", opacity: 0.5 }}>
          <span>5</span><span>10</span><span>15</span><span>20</span>
        </div>
      </div>

      {/* Start */}
      <button
        onClick={() => selectedForms.length > 0 && onStart(groups, selectedForms, count)}
        disabled={selectedForms.length === 0}
        className="w-full rounded-2xl py-4 text-base font-bold text-white transition-all hover:brightness-110 active:scale-95 disabled:opacity-40"
        style={{ background: GRADIENT, boxShadow: `0 12px 28px ${ACCENT_SOFT}0.25)` }}
      >
        Empezar Quiz →
      </button>
    </motion.div>
  );
}

// ─── Question Screen ──────────────────────────────────────────────────────────

function QuestionScreen({
  question, current, total, onAnswer,
}: {
  question: QuizQuestion;
  current: number;
  total: number;
  onAnswer: (answer: string, correct: boolean) => void;
}) {
  const [typed, setTyped] = useState("");
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTyped(""); setAnswered(false); setIsCorrect(false);
    setTimeout(() => inputRef.current?.focus(), 100);
  }, [question.verb.dictionary, question.form, question.tense]);

  const checkAnswer = useCallback((ans: string) => {
    if (answered) return;
    // Accept full verb or just morpheme, with or without kanji
    const clean = ans.trim();
    const correct =
      clean === question.result.fullReading ||
      clean === question.result.full ||
      clean === question.result.morpheme;
    setIsCorrect(correct);
    setAnswered(true);
    setTimeout(() => onAnswer(clean, correct), 1300);
  }, [answered, question.result, onAnswer]);

  const { verb, form, tense, result } = question;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}
      className="space-y-5"
    >
      {/* Progress */}
      <div className="flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full" style={{ background: `${ACCENT_SOFT}0.12)` }}>
          <motion.div className="h-full rounded-full" style={{ background: GRADIENT }}
            animate={{ width: `${(current / total) * 100}%` }} transition={{ duration: 0.4 }} />
        </div>
        <span className="text-xs font-semibold" style={{ color: ACCENT }}>{current}/{total}</span>
      </div>

      {/* Question card */}
      <div className="rounded-[28px] border p-6"
        style={{ background: "rgba(255,255,255,0.88)", border: `1px solid ${ACCENT_SOFT}0.12)`, boxShadow: `0 16px 40px ${ACCENT_SOFT}0.08)` }}>

        {/* Prompt label */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full px-3 py-1 text-xs font-bold"
            style={{ background: `${ACCENT_SOFT}0.10)`, color: ACCENT }}>
            {FORM_LABELS[form]}
          </span>
          {FORM_TENSES[form].length > 1 && (
            <span className="rounded-full px-3 py-1 text-xs font-bold"
              style={{ background: "rgba(100,181,246,0.15)", color: "#1565C0" }}>
              {TENSE_LABELS[tense]}
            </span>
          )}
          <span className="text-xs opacity-50" style={{ color: "var(--ink-soft)" }}>
            Grupo {verb.group === "godan" ? "1" : verb.group === "ichidan" ? "2" : "3"}
          </span>
        </div>

        {/* Verb prompt */}
        <div className="mb-2 text-sm font-medium" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>
          Conjuga este verbo:
        </div>
        <div className="mb-1 flex items-baseline gap-3">
          <RubyText
            segments={verb.kanji
              ? [{ text: verb.kanji + verb.morpheme, ruby: verb.furigana + verb.morpheme }]
              : [{ text: verb.dictionary }]}
            className="char-display text-5xl font-bold"
            style={{ color: ACCENT }}
          />
        </div>
        <p className="mb-6 text-sm" style={{ color: "var(--ink-soft)", opacity: 0.65 }}>
          {verb.meaning} · {verb.dictionary}
        </p>

        {/* Answer input */}
        <div className="flex gap-2">
          <input
            ref={inputRef}
            value={typed}
            onChange={e => setTyped(e.target.value)}
            onKeyDown={e => e.key === "Enter" && typed.trim() && checkAnswer(typed)}
            placeholder="Escribe en hiragana o kanji..."
            disabled={answered}
            className="char-display flex-1 rounded-2xl border px-4 py-3 text-lg font-bold outline-none transition-all"
            style={{
              border: `2px solid ${answered
                ? isCorrect ? "#16A34A" : "#DC2626"
                : `${ACCENT_SOFT}0.25)`}`,
              color: "var(--ink)",
              background: answered
                ? isCorrect ? "rgba(220,252,231,0.5)" : "rgba(254,226,226,0.5)"
                : "rgba(255,255,255,0.9)",
            }}
          />
          {!answered && (
            <button
              onClick={() => typed.trim() && checkAnswer(typed)}
              disabled={!typed.trim()}
              className="rounded-2xl px-5 py-3 text-sm font-bold text-white transition-all disabled:opacity-40"
              style={{ background: GRADIENT }}
            >
              ✓
            </button>
          )}
        </div>

        {/* Hint */}
        {!answered && (
          <p className="mt-2 text-xs" style={{ color: "var(--ink-soft)", opacity: 0.45 }}>
            Puedes escribir solo el morfema ({result.morpheme}) o la forma completa
          </p>
        )}

        {/* Feedback */}
        <AnimatePresence>
          {answered && (
            <motion.div
              initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
              className="mt-4 rounded-2xl p-4"
              style={{
                background: isCorrect ? "rgba(220,252,231,0.8)" : "rgba(254,226,226,0.8)",
                border: `1px solid ${isCorrect ? "#16A34A" : "#DC2626"}33`,
              }}
            >
              <p className="text-sm font-bold mb-2" style={{ color: isCorrect ? "#15803D" : "#B91C1C" }}>
                {isCorrect ? "¡Correcto! ✓" : "Incorrecto ✗"}
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-xs" style={{ color: "var(--ink-soft)" }}>Respuesta correcta:</span>
                <RubyText
                  segments={verb.kanji
                    ? [{ text: verb.kanji, ruby: verb.furigana }, { text: result.morpheme }]
                    : [{ text: result.morpheme }]}
                  className="char-display text-xl font-bold"
                  style={{ color: ACCENT }}
                />
              </div>
              <p className="mt-1 text-xs" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>
                {result.label} · {verb.meaning}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ─── Results Screen ───────────────────────────────────────────────────────────

function ResultsScreen({
  score, total, mistakes, onRestart, onNewQuiz,
}: {
  score: number; total: number;
  mistakes: Array<{ question: QuizQuestion; userAnswer: string }>;
  onRestart: () => void; onNewQuiz: () => void;
}) {
  const pct = Math.round((score / total) * 100);
  const emoji = pct === 100 ? "🎉" : pct >= 80 ? "😊" : pct >= 60 ? "🤔" : "😅";
  const msg = pct === 100 ? "¡Perfecto!" : pct >= 80 ? "¡Muy bien!" : pct >= 60 ? "Sigue practicando" : "¡No te rindas!";

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4">
      <div className="rounded-[28px] border px-6 py-8 text-center"
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
          <div>
            <span className="text-2xl font-bold" style={{ color: "#15803D" }}>{score}</span>
            <p style={{ color: "var(--ink-soft)" }}>correctas</p>
          </div>
          <div>
            <span className="text-2xl font-bold" style={{ color: "#B91C1C" }}>{total - score}</span>
            <p style={{ color: "var(--ink-soft)" }}>incorrectas</p>
          </div>
        </div>
      </div>

      {/* Mistakes review */}
      {mistakes.length > 0 && (
        <div className="rounded-[24px] border p-5"
          style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ACCENT_SOFT}0.12)` }}>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
            Repasa tus errores
          </h3>
          <div className="space-y-3">
            {mistakes.map((m, i) => (
              <div key={i} className="rounded-xl p-3"
                style={{ background: "rgba(254,226,226,0.3)", border: "1px solid rgba(220,38,38,0.12)" }}>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <RubyText
                    segments={m.question.verb.kanji
                      ? [{ text: m.question.verb.kanji, ruby: m.question.verb.furigana }, { text: m.question.verb.morpheme }]
                      : [{ text: m.question.verb.dictionary }]}
                    className="char-display text-xl font-bold"
                    style={{ color: ACCENT }}
                  />
                  <span className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: `${ACCENT_SOFT}0.10)`, color: ACCENT }}>
                    {m.question.result.label}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-3 text-sm flex-wrap">
                  <span style={{ color: "#B91C1C" }}>
                    Tu respuesta: <strong>{m.userAnswer || "—"}</strong>
                  </span>
                  <span className="opacity-30">→</span>
                  <RubyText
                    segments={m.question.verb.kanji
                      ? [{ text: m.question.verb.kanji, ruby: m.question.verb.furigana }, { text: m.question.result.morpheme }]
                      : [{ text: m.question.result.morpheme }]}
                    className="char-display font-bold"
                    style={{ color: "#15803D" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-3">
        <button onClick={onRestart}
          className="flex-1 rounded-2xl py-3.5 text-sm font-bold text-white hover:brightness-110"
          style={{ background: GRADIENT }}>
          Repetir
        </button>
        <button onClick={onNewQuiz}
          className="flex-1 rounded-2xl py-3.5 text-sm font-semibold hover:bg-white"
          style={{ border: `1px solid ${ACCENT_SOFT}0.20)`, color: "var(--ink)", background: "rgba(255,255,255,0.7)" }}>
          Nuevo quiz
        </button>
      </div>
    </motion.div>
  );
}

// ─── Main (inner — needs useSearchParams) ────────────────────────────────────

type Screen = "setup" | "quiz" | "results";

function VerbQuizInner() {
  const searchParams = useSearchParams();
  const formParam = searchParams.get("form") as FormKey | null;
  const validForms = Object.keys(FORM_TENSES) as FormKey[];
  const initialForm = formParam && validForms.includes(formParam) ? formParam : undefined;

  const [screen, setScreen] = useState<Screen>("setup");
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState<Array<{ question: QuizQuestion; userAnswer: string }>>([]);
  const [lastConfig, setLastConfig] = useState<{ groups: VerbGroup[]; forms: FormKey[]; count: number } | null>(null);

  const handleStart = useCallback((groups: VerbGroup[], forms: FormKey[], count: number) => {
    const qs = generateQuestions(groups, forms, count);
    setQuestions(qs);
    setCurrentIdx(0);
    setScore(0);
    setMistakes([]);
    setLastConfig({ groups, forms, count });
    setScreen("quiz");
  }, []);

  const handleAnswer = useCallback((answer: string, correct: boolean) => {
    if (correct) {
      setScore(s => s + 1);
    } else {
      setMistakes(m => [...m, { question: questions[currentIdx], userAnswer: answer }]);
    }
    if (currentIdx < questions.length - 1) setCurrentIdx(i => i + 1);
    else setScreen("results");
  }, [questions, currentIdx]);

  return (
    <main className="relative min-h-screen" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />

      <div className="relative z-10 mx-auto max-w-xl px-4 pb-24 pt-8 sm:px-6">
        <div className="mb-6 flex items-center justify-between">
          <Link href="/gramatica/verbos" className="text-sm font-medium transition-opacity hover:opacity-70" style={{ color: ACCENT }}>
            ← Verbos
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
            動詞クイズ · Quiz de Verbos
          </div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--ink)" }}>Practica conjugaciones</h1>
          <p className="mt-1 text-sm" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>
            Se te mostrará un verbo en forma diccionario y tendrás que conjugarlo.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {screen === "setup" && (
            <motion.div key="setup" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <SetupScreen onStart={handleStart} initialForm={initialForm} />
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
              onRestart={() => lastConfig && handleStart(lastConfig.groups, lastConfig.forms, lastConfig.count)}
              onNewQuiz={() => setScreen("setup")}
            />
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

export default function VerbQuizPage() {
  return (
    <Suspense>
      <VerbQuizInner />
    </Suspense>
  );
}