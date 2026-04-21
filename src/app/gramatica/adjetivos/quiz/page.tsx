// src/app/gramatica/adjetivos/quiz/page.tsx

"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import {
  generateAdjQuiz,
  type QuizFilters,
} from "@/lib/adjQuizGenerator";
import {
  QUIZ_MODE_LABELS,
  QUIZ_MODE_DESCRIPTIONS,
  DIFFICULTY_LABELS,
  ERROR_FEEDBACK,
  ERROR_LABELS,
  type AdjQuestion,
  type AdjDistractor,
  type QuizMode,
  type Difficulty,
  type ErrorTag,
} from "@/data/grammar/adjectiveQuiz";
import { ADJ_FORM_LABELS } from "@/lib/adjectiveEngine";
import {
  recordResult,
  getWeights,
  getTopWeakTags,
  useWeaknessState,
} from "@/lib/weaknessTracker";
import { RubyText } from "@/app/components/ui/Ruby";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";

// ─── Theming ──────────────────────────────────────────────────────────────────

const ACCENT = "#6A1B9A";
const ACCENT_SOFT = "rgba(206,147,216,";
const GRADIENT = "linear-gradient(135deg, #CE93D8, #6A1B9A)";

const ALL_MODES: QuizMode[] = [
  "tipo",
  "conjugacion",
  "uso_frase",
  "comparacion",
  "produccion",
];
const ALL_DIFFICULTIES: Difficulty[] = ["basico", "uso", "mixto", "desafio"];
const ALL_JLPT = ["N5", "N4", "N3", "N2", "N1"] as const;
type JlptLevel = (typeof ALL_JLPT)[number];

const MIN_ANSWERED_FOR_ADAPTIVE = 10;

// ─── Utils ────────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function normalizeInput(s: string): string {
  return s.normalize("NFC").trim();
}

// ─── Setup screen ─────────────────────────────────────────────────────────────

function SetupScreen({
  onStart,
}: {
  onStart: (filters: QuizFilters, useWeights: boolean) => void;
}) {
  const weaknessState = useWeaknessState();
  const canAdapt = weaknessState.totalAnswered >= MIN_ANSWERED_FOR_ADAPTIVE;

  const [modes, setModes] = useState<QuizMode[]>(["conjugacion"]);
  const [adjType, setAdjType] = useState<"i" | "na" | "both">("both");
  const [difficulties, setDifficulties] = useState<Difficulty[]>([]);
  const [jlpt, setJlpt] = useState<JlptLevel[]>(["N5"]);
  const [count, setCount] = useState(10);
  const [adaptive, setAdaptive] = useState(false);

  const toggleInList = <T,>(list: T[], value: T): T[] =>
    list.includes(value) ? list.filter((v) => v !== value) : [...list, value];

  const canStart = modes.length > 0 && jlpt.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      {/* Modos */}
      <SectionCard title="Modos de práctica" subtitle="Elige uno o más">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {ALL_MODES.map((m) => {
            const active = modes.includes(m);
            return (
              <button
                key={m}
                onClick={() => setModes((p) => toggleInList(p, m))}
                className="rounded-2xl border p-3 text-left transition-all duration-200"
                style={{
                  background: active ? `${ACCENT_SOFT}0.10)` : "rgba(255,255,255,0.6)",
                  border: `1px solid ${active ? `${ACCENT_SOFT}0.32)` : "var(--border)"}`,
                  boxShadow: active ? `0 4px 14px ${ACCENT_SOFT}0.10)` : "none",
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold" style={{ color: active ? ACCENT : "var(--ink)" }}>
                    {active ? "✓ " : ""}{QUIZ_MODE_LABELS[m]}
                  </span>
                </div>
                <p className="mt-0.5 text-[0.7rem] leading-snug" style={{ color: "var(--ink-soft)", opacity: 0.75 }}>
                  {QUIZ_MODE_DESCRIPTIONS[m]}
                </p>
              </button>
            );
          })}
        </div>
      </SectionCard>

      {/* Familia */}
      <SectionCard title="Familia de adjetivo">
        <div className="grid grid-cols-3 gap-2">
          {(["both", "i", "na"] as const).map((t) => {
            const active = adjType === t;
            const label = t === "both" ? "Ambos" : t === "i" ? "い-adj" : "な-adj";
            return (
              <button
                key={t}
                onClick={() => setAdjType(t)}
                className="rounded-xl border py-2.5 text-sm font-bold transition-all"
                style={{
                  background: active ? `${ACCENT_SOFT}0.12)` : "rgba(255,255,255,0.6)",
                  border: `1px solid ${active ? `${ACCENT_SOFT}0.35)` : "var(--border)"}`,
                  color: active ? ACCENT : "var(--ink)",
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
      </SectionCard>

      {/* JLPT */}
      <SectionCard title="Nivel JLPT">
        <div className="grid grid-cols-5 gap-2">
          {ALL_JLPT.map((l) => {
            const active = jlpt.includes(l);
            return (
              <button
                key={l}
                onClick={() => setJlpt((p) => toggleInList(p, l))}
                className="rounded-xl border py-2.5 text-sm font-bold transition-all"
                style={{
                  background: active ? `${ACCENT_SOFT}0.12)` : "rgba(255,255,255,0.6)",
                  border: `1px solid ${active ? `${ACCENT_SOFT}0.35)` : "var(--border)"}`,
                  color: active ? ACCENT : "var(--ink)",
                }}
              >
                {l}
              </button>
            );
          })}
        </div>
      </SectionCard>

      {/* Dificultad */}
      <SectionCard
        title="Dificultad"
        subtitle="Vacío = todas. Solo afecta uso-en-frase y comparación."
      >
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {ALL_DIFFICULTIES.map((d) => {
            const active = difficulties.includes(d);
            return (
              <button
                key={d}
                onClick={() => setDifficulties((p) => toggleInList(p, d))}
                className="rounded-xl border py-2.5 text-xs font-bold transition-all"
                style={{
                  background: active ? `${ACCENT_SOFT}0.12)` : "rgba(255,255,255,0.6)",
                  border: `1px solid ${active ? `${ACCENT_SOFT}0.35)` : "var(--border)"}`,
                  color: active ? ACCENT : "var(--ink)",
                }}
              >
                {DIFFICULTY_LABELS[d]}
              </button>
            );
          })}
        </div>
      </SectionCard>

      {/* Adaptive */}
      {canAdapt && (
        <SectionCard
          title="Adaptar al nivel"
          subtitle="Sobre-muestra preguntas con los errores más frecuentes."
        >
          <button
            onClick={() => setAdaptive((v) => !v)}
            className="flex w-full items-center justify-between rounded-xl border px-4 py-3 text-sm font-semibold transition-all"
            style={{
              background: adaptive ? `${ACCENT_SOFT}0.12)` : "rgba(255,255,255,0.6)",
              border: `1px solid ${adaptive ? `${ACCENT_SOFT}0.35)` : "var(--border)"}`,
              color: adaptive ? ACCENT : "var(--ink)",
            }}
          >
            <span>{adaptive ? "✓ Activado" : "Activar modo adaptativo"}</span>
            <span className="text-xs opacity-70">
              {weaknessState.totalAnswered} respuestas
            </span>
          </button>
        </SectionCard>
      )}

      {/* Count */}
      <SectionCard title={`Preguntas: ${count}`}>
        <input
          type="range"
          min={5}
          max={20}
          step={1}
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="w-full"
          style={{ accentColor: ACCENT }}
        />
        <div className="mt-1 flex justify-between text-xs" style={{ color: "var(--ink-soft)", opacity: 0.5 }}>
          <span>5</span><span>10</span><span>15</span><span>20</span>
        </div>
      </SectionCard>

      <button
        onClick={() =>
          canStart &&
          onStart(
            {
              modes,
              count,
              difficulties: difficulties.length > 0 ? difficulties : undefined,
              jlpt: jlpt.length > 0 ? jlpt : undefined,
              adjType,
            },
            adaptive
          )
        }
        disabled={!canStart}
        className="w-full rounded-2xl py-4 text-base font-bold text-white transition-all hover:brightness-110 active:scale-95 disabled:opacity-40"
        style={{ background: GRADIENT, boxShadow: `0 12px 28px ${ACCENT_SOFT}0.25)` }}
      >
        Empezar →
      </button>
    </motion.div>
  );
}

function SectionCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div
      className="rounded-[24px] border p-5"
      style={{
        background: "rgba(255,255,255,0.85)",
        border: `1px solid ${ACCENT_SOFT}0.12)`,
        boxShadow: `0 12px 32px ${ACCENT_SOFT}0.06)`,
      }}
    >
      <h3
        className="mb-1 text-sm font-bold uppercase tracking-[0.18em]"
        style={{ color: ACCENT }}
      >
        {title}
      </h3>
      {subtitle && (
        <p className="mb-3 text-xs" style={{ color: "var(--ink-soft)", opacity: 0.65 }}>
          {subtitle}
        </p>
      )}
      <div className={subtitle ? "" : "mt-3"}>{children}</div>
    </div>
  );
}

// ─── Question screen ──────────────────────────────────────────────────────────

interface AnswerRecord {
  chosen: string;
  distractor: AdjDistractor | null;
}

function QuestionScreen({
  question,
  current,
  total,
  onAnswer,
}: {
  question: AdjQuestion;
  current: number;
  total: number;
  onAnswer: (rec: AnswerRecord) => void;
}) {
  const [chosen, setChosen] = useState<string | null>(null);
  const [chosenDistractor, setChosenDistractor] = useState<AdjDistractor | null>(null);
  const [typed, setTyped] = useState("");
  const [typedCorrect, setTypedCorrect] = useState<boolean | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Reset state on question change
  useEffect(() => {
    setChosen(null);
    setChosenDistractor(null);
    setTyped("");
    setTypedCorrect(null);
    if (question.mode === "produccion") {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [question.id, question.mode]);

  // Shuffle options — stable per question
  const options = useMemo(() => {
    if (question.mode === "produccion") return [];
    return shuffle([question.correct, ...question.distractors.map((d) => d.value)]);
  }, [question.id, question.correct, question.distractors, question.mode]);

  const answered =
    question.mode === "produccion" ? typedCorrect !== null : chosen !== null;

  const handleSelect = (opt: string) => {
    if (answered) return;
    setChosen(opt);
    if (opt === question.correct) {
      setChosenDistractor(null);
    } else {
      const d = question.distractors.find((x) => x.value === opt) ?? null;
      setChosenDistractor(d);
    }
  };

  const handleTypedSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (answered) return;
    const input = normalizeInput(typed);
    if (!input) return;
    const accept = question.promptMeta?.accept ?? [question.correct];
    const isCorrect = accept.some((a) => normalizeInput(a) === input);
    setTypedCorrect(isCorrect);
    setChosen(typed);
    setChosenDistractor(null); // no distractor mapping for free input
  };

  const handleNext = () => {
    if (!chosen) return;
    onAnswer({ chosen, distractor: chosenDistractor });
  };

  const isCorrect =
    question.mode === "produccion"
      ? typedCorrect === true
      : chosen === question.correct;

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.25 }}
      className="space-y-5"
    >
      {/* Progress */}
      <div className="flex items-center gap-3">
        <div
          className="h-2 flex-1 overflow-hidden rounded-full"
          style={{ background: `${ACCENT_SOFT}0.12)` }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ background: GRADIENT }}
            animate={{ width: `${(current / total) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <span className="text-xs font-semibold" style={{ color: ACCENT }}>
          {current}/{total}
        </span>
      </div>

      {/* Prompt card */}
      <div
        className="rounded-[28px] border p-6"
        style={{
          background: "rgba(255,255,255,0.88)",
          border: `1px solid ${ACCENT_SOFT}0.12)`,
          boxShadow: `0 16px 40px ${ACCENT_SOFT}0.08)`,
        }}
      >
        <PromptBody question={question} />
      </div>

      {/* Answer area */}
      {question.mode === "produccion" ? (
        <form onSubmit={handleTypedSubmit} className="flex gap-2">
          <input
            ref={inputRef}
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
            placeholder="Escribe en japonés..."
            disabled={answered}
            className="char-display flex-1 rounded-2xl border px-4 py-3 text-lg font-bold outline-none transition-all"
            style={{
              border: `2px solid ${
                answered
                  ? isCorrect
                    ? "#16A34A"
                    : "#DC2626"
                  : `${ACCENT_SOFT}0.25)`
              }`,
              color: "var(--ink)",
              background: answered
                ? isCorrect
                  ? "rgba(220,252,231,0.9)"
                  : "rgba(254,226,226,0.9)"
                : "rgba(255,255,255,0.9)",
            }}
          />
          {!answered && (
            <button
              type="submit"
              disabled={!typed.trim()}
              className="rounded-2xl px-5 py-3 text-sm font-bold text-white transition-all disabled:opacity-40"
              style={{ background: GRADIENT }}
            >
              ✓
            </button>
          )}
        </form>
      ) : (
        <OptionGrid
          options={options}
          correct={question.correct}
          chosen={chosen}
          onSelect={handleSelect}
        />
      )}

      {/* Feedback + next */}
      <AnimatePresence>
        {answered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-3"
          >
            <FeedbackCard
              isCorrect={isCorrect}
              correct={question.correct}
              distractor={chosenDistractor}
              promptMeta={question.promptMeta}
            />
            <button
              onClick={handleNext}
              className="w-full rounded-2xl py-3.5 text-sm font-bold text-white hover:brightness-110"
              style={{ background: GRADIENT }}
            >
              {current === total ? "Ver resultados →" : "Siguiente →"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Prompt body by mode ──────────────────────────────────────────────────────

function PromptBody({ question }: { question: AdjQuestion }) {
  const meta = question.promptMeta;

  // Chip con el modo + contexto
  const chipLabel = (() => {
    switch (question.mode) {
      case "tipo":        return "¿い o な?";
      case "conjugacion": return meta?.targetForm ? ADJ_FORM_LABELS[meta.targetForm] : "Conjugación";
      case "uso_frase":   return "Completa la oración";
      case "comparacion": return "Patrón comparativo";
      case "produccion":  return meta?.targetForm ? `Producir: ${ADJ_FORM_LABELS[meta.targetForm]}` : "Producción";
    }
  })();

  return (
    <>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span
          className="rounded-full px-3 py-1 text-[0.72rem] font-bold"
          style={{ background: `${ACCENT_SOFT}0.12)`, color: ACCENT }}
        >
          {chipLabel}
        </span>
        <span className="text-[0.72rem]" style={{ color: "var(--ink-soft)", opacity: 0.55 }}>
          {QUIZ_MODE_LABELS[question.mode]}
        </span>
      </div>

      {(question.mode === "tipo" ||
        question.mode === "conjugacion" ||
        question.mode === "produccion") && (
        <>
          <RubyText
            segments={question.prompt}
            className="char-display text-5xl font-bold"
            style={{ color: ACCENT }}
          />
          {meta?.spanish && (
            <p className="mt-2 text-sm" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>
              {question.mode === "produccion" ? meta.spanish : meta.spanish}
            </p>
          )}
        </>
      )}

      {question.mode === "uso_frase" && (
        <>
          {meta?.adjDict && (
            <div
              className="mb-3 inline-flex items-center gap-2 rounded-xl px-3 py-2"
              style={{ background: `${ACCENT_SOFT}0.08)` }}
            >
              <span className="text-xs font-semibold" style={{ color: "var(--ink-soft)" }}>
                Usando
              </span>
              <span className="char-display text-lg font-bold" style={{ color: ACCENT }}>
                {meta.adjDict}
              </span>
            </div>
          )}
          <RubyText
            segments={question.prompt}
            className="char-display block text-2xl leading-relaxed"
            style={{ color: "var(--ink)" }}
          />
          {meta?.spanish && (
            <p className="mt-3 text-sm italic" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>
              {meta.spanish}
            </p>
          )}
        </>
      )}

      {question.mode === "comparacion" && (
        <>
          <RubyText
            segments={question.prompt}
            className="char-display block text-2xl leading-relaxed"
            style={{ color: "var(--ink)" }}
          />
          {meta?.spanish && (
            <p className="mt-3 text-sm italic" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>
              {meta.spanish}
            </p>
          )}
        </>
      )}
    </>
  );
}

// ─── Option grid ──────────────────────────────────────────────────────────────

function OptionGrid({
  options,
  correct,
  chosen,
  onSelect,
}: {
  options: string[];
  correct: string;
  chosen: string | null;
  onSelect: (opt: string) => void;
}) {
  const gridCols =
    options.length === 2
      ? "grid-cols-2"
      : options.length === 3
      ? "grid-cols-3"
      : "grid-cols-2";

  return (
    <div className={`grid ${gridCols} gap-3`}>
      {options.map((opt) => {
        const isThis = chosen === opt;
        const isRight = opt === correct;
        const answered = chosen !== null;

        let bg = "rgba(255,255,255,0.8)";
        let border = "var(--border)";
        let color = "var(--ink)";

        if (answered) {
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
            whileTap={!answered ? { scale: 0.97 } : {}}
            onClick={() => onSelect(opt)}
            className="char-display rounded-2xl border p-4 text-center font-bold transition-all duration-200"
            style={{
              background: bg,
              border: `2px solid ${border}`,
              color,
              cursor: answered ? "default" : "pointer",
              fontSize: "clamp(1rem, 3.5vw, 1.25rem)",
              minHeight: "64px",
            }}
          >
            {opt}
            {answered && isRight && <div className="mt-1 text-[0.65rem] font-bold">✓ Correcto</div>}
            {answered && isThis && !isRight && <div className="mt-1 text-[0.65rem] font-bold">✗ Incorrecto</div>}
          </motion.button>
        );
      })}
    </div>
  );
}

// ─── Feedback card ────────────────────────────────────────────────────────────

function FeedbackCard({
  isCorrect,
  correct,
  distractor,
  promptMeta,
}: {
  isCorrect: boolean;
  correct: string;
  distractor: AdjDistractor | null;
  promptMeta?: AdjQuestion["promptMeta"];
}) {
  if (isCorrect) {
    return (
      <div
        className="rounded-2xl border p-4 text-sm"
        style={{
          background: "rgba(220,252,231,0.6)",
          border: "1px solid rgba(22,163,74,0.3)",
          color: "#15803D",
        }}
      >
        <div className="font-bold">✓ ¡Correcto!</div>
      </div>
    );
  }

  const feedback = distractor
    ? distractor.feedback ?? ERROR_FEEDBACK[distractor.misconception]
    : null;

  return (
    <div
      className="rounded-2xl border p-4 text-sm leading-relaxed"
      style={{
        background: "rgba(254,226,226,0.4)",
        border: "1px solid rgba(220,38,38,0.25)",
        color: "var(--ink)",
      }}
    >
      <div className="mb-1 font-bold" style={{ color: "#B91C1C" }}>
        ✗ Incorrecto
      </div>
      {feedback && (
        <p className="mb-2" style={{ color: "var(--ink-soft)" }}>
          {feedback}
        </p>
      )}
      <div className="flex flex-wrap items-baseline gap-2">
        <span className="text-xs font-semibold" style={{ color: "var(--ink-soft)", opacity: 0.8 }}>
          Respuesta correcta:
        </span>
        <span className="char-display text-lg font-bold" style={{ color: "#15803D" }}>
          {correct}
        </span>
        {promptMeta?.accept && promptMeta.accept.length > 1 && (
          <span className="text-xs" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>
            ({promptMeta.accept.join(" / ")})
          </span>
        )}
      </div>
    </div>
  );
}

// ─── Results screen ───────────────────────────────────────────────────────────

function ResultsScreen({
  score,
  total,
  mistakes,
  onRestart,
  onNewQuiz,
}: {
  score: number;
  total: number;
  mistakes: Array<{ question: AdjQuestion; record: AnswerRecord }>;
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
      ? "Vas mejorando"
      : "A seguir practicando";

  // Top weak tags — lectura fresca del tracker (ya se actualizó con este quiz)
  const topTags = useMemo(() => getTopWeakTags(3), []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-5"
    >
      {/* Score */}
      <div
        className="rounded-[28px] border p-6 text-center"
        style={{
          background: "rgba(255,255,255,0.88)",
          border: `1px solid ${ACCENT_SOFT}0.12)`,
          boxShadow: `0 16px 40px ${ACCENT_SOFT}0.08)`,
        }}
      >
        <div className="text-5xl">{emoji}</div>
        <div className="mt-2 text-lg font-bold" style={{ color: "var(--ink)" }}>
          {msg}
        </div>
        <div className="mt-4">
          <span
            className="text-6xl font-bold"
            style={{
              background: GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {score}
          </span>
          <span className="text-2xl font-semibold opacity-60" style={{ color: "var(--ink-soft)" }}>
            /{total}
          </span>
        </div>
        <div className="text-sm" style={{ color: "var(--ink-soft)", opacity: 0.6 }}>
          {pct}% correcto
        </div>
      </div>

      {/* Weak tags */}
      {topTags.length > 0 && (
        <div
          className="rounded-[24px] border p-5"
          style={{
            background: "rgba(255,255,255,0.85)",
            border: `1px solid ${ACCENT_SOFT}0.12)`,
          }}
        >
          <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
            Dónde más te equivocas
          </h3>
          <div className="space-y-2">
            {topTags.map(({ tag, errors, attempts }) => (
              <div key={tag} className="flex items-center justify-between text-sm">
                <span style={{ color: "var(--ink)" }}>{ERROR_LABELS[tag as ErrorTag]}</span>
                <span className="text-xs font-semibold" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>
                  {errors}/{attempts}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mistakes */}
      {mistakes.length > 0 && (
        <div
          className="rounded-[24px] border p-5"
          style={{
            background: "rgba(255,255,255,0.85)",
            border: `1px solid ${ACCENT_SOFT}0.12)`,
          }}
        >
          <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
            Errores de este quiz ({mistakes.length})
          </h3>
          <div className="space-y-3">
            {mistakes.map((m, i) => (
              <div
                key={i}
                className="rounded-xl border p-3"
                style={{
                  background: "rgba(254,226,226,0.3)",
                  border: "1px solid rgba(220,38,38,0.15)",
                }}
              >
                <RubyText
                  segments={m.question.prompt}
                  className="char-display text-base"
                  style={{ color: "var(--ink)" }}
                />
                <div className="mt-1 flex flex-wrap items-baseline gap-2 text-xs">
                  <span style={{ color: "#B91C1C" }}>
                    Tu respuesta: <strong>{m.record.chosen || "—"}</strong>
                  </span>
                  <span className="opacity-30">→</span>
                  <span style={{ color: "#15803D" }}>
                    <strong>{m.question.correct}</strong>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={onRestart}
          className="flex-1 rounded-2xl py-3.5 text-sm font-bold text-white hover:brightness-110"
          style={{ background: GRADIENT }}
        >
          Repetir
        </button>
        <button
          onClick={onNewQuiz}
          className="flex-1 rounded-2xl py-3.5 text-sm font-semibold hover:bg-white"
          style={{
            border: `1px solid ${ACCENT_SOFT}0.20)`,
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

// ─── Main ─────────────────────────────────────────────────────────────────────

type Screen = "setup" | "quiz" | "results";

export default function AdjQuizPage() {
  const [screen, setScreen] = useState<Screen>("setup");
  const [questions, setQuestions] = useState<AdjQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState<
    Array<{ question: AdjQuestion; record: AnswerRecord }>
  >([]);
  const [lastConfig, setLastConfig] = useState<{
    filters: QuizFilters;
    useWeights: boolean;
  } | null>(null);

  const handleStart = useCallback(
    (filters: QuizFilters, useWeights: boolean) => {
      const ctx = useWeights ? { weights: getWeights() } : undefined;
      const qs = generateAdjQuiz(filters, ctx);
      if (qs.length === 0) return; // no data — stay in setup
      setQuestions(qs);
      setCurrentIdx(0);
      setScore(0);
      setMistakes([]);
      setLastConfig({ filters, useWeights });
      setScreen("quiz");
    },
    []
  );

  const handleAnswer = useCallback(
    (rec: AnswerRecord) => {
      const q = questions[currentIdx];

      // 1. Determinar si fue correcto (producción compara contra accept[])
      const wasCorrect =
        q.mode === "produccion"
          ? (q.promptMeta?.accept ?? [q.correct]).some(
              (a) => normalizeInput(a) === normalizeInput(rec.chosen)
            )
          : rec.chosen === q.correct;

      // 2. Registrar en el tracker
      if (wasCorrect) {
        recordResult(q);
      } else if (rec.distractor) {
        // Multiple-choice: tenemos el distractor con su misconception específica
        recordResult(q, rec.distractor);
      } else if (q.tags[0]) {
        // Producción errada: sintetizamos un distractor con el primer tag de
        // la pregunta para que la misconception sí acumule error en el tracker.
        recordResult(q, { misconception: q.tags[0] });
      } else {
        recordResult(q);
      }

      // 3. Score + mistakes
      if (wasCorrect) {
        setScore((s) => s + 1);
      } else {
        setMistakes((m) => [...m, { question: q, record: rec }]);
      }

      // 4. Avanzar o terminar
      if (currentIdx < questions.length - 1) {
        setCurrentIdx((i) => i + 1);
      } else {
        setScreen("results");
      }
    },
    [questions, currentIdx]
  );

  const handleRestart = useCallback(() => {
    if (!lastConfig) return;
    handleStart(lastConfig.filters, lastConfig.useWeights);
  }, [lastConfig, handleStart]);

  return (
    <main className="relative min-h-screen" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />

      <div className="relative z-10 flex w-full justify-center px-4 pb-24 pt-8 sm:px-6">
        <div className="w-full max-w-3xl">
            <div className="mb-6 flex items-center justify-between">
            <Link
                href="/gramatica/adjetivos"
                className="text-sm font-medium transition-opacity hover:opacity-70"
                style={{ color: ACCENT }}
            >
                ← Adjetivos
            </Link>
            {screen !== "setup" && (
                <button
                onClick={() => setScreen("setup")}
                className="text-xs font-medium hover:opacity-70"
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
                color: ACCENT,
                background: `${ACCENT_SOFT}0.08)`,
                border: `1px solid ${ACCENT_SOFT}0.15)`,
                }}
            >
                形容詞クイズ · Quiz de Adjetivos
            </div>
            <h1 className="text-2xl font-bold" style={{ color: "var(--ink)" }}>
                {screen === "setup"
                ? "Practica adjetivos"
                : screen === "quiz"
                ? "Responde"
                : "Resultados"}
            </h1>
            {screen === "setup" && (
                <p className="mt-1 text-sm" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>
                Elige los modos, filtra por nivel y tipo, y empezá.
                </p>
            )}
            </div>

            <AnimatePresence mode="wait">
            {screen === "setup" && <SetupScreen key="setup" onStart={handleStart} />}
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
                onRestart={handleRestart}
                onNewQuiz={() => setScreen("setup")}
                />
            )}
            </AnimatePresence>
        </div>
      </div>
    </main>
  );
}