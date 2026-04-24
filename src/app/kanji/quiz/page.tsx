// src/app/kanji/quiz/page.tsx

"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  ALL_LEVELS,
  AVAILABLE_LEVELS,
  KANJI_LIST,
  getKanjiByLevel,
  getKanjiExamples,
  getPrimaryKanjiExample,
  type KanjiEntry,
  type KanjiExample,
} from "@/data/kanji";
import { RubyText, type RubySegment } from "@/app/components/ui/Ruby";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";

const ACCENT = "#2E7D32";
const ACCENT_SOFT = "rgba(46,125,50,";
const GRADIENT = "linear-gradient(135deg, #A5D6A7, #2E7D32)";
const LEVELS_WITH_DATA: readonly number[] = AVAILABLE_LEVELS;

type QuizMode = "reading-to-kanji" | "kanji-to-reading";
type PromptType = "reading" | "kanji-word";

interface ReadingQuizItem {
  id: string;
  kanji: string;
  reading: string;
  entry: KanjiEntry;
  example?: KanjiExample;
}

interface QuizQuestion {
  id: string;
  mode: QuizMode;
  prompt: string;
  promptType: PromptType;
  correct: string;
  options: string[];
  item: ReadingQuizItem;
}

function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function unique(values: string[]): string[] {
  return [...new Set(values.filter(Boolean))];
}

function toHiragana(input: string): string {
  return input.replace(/[ァ-ヶ]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0x60));
}

function normalizeReading(input: string): string {
  return toHiragana(input)
    .split(/[／/]/)[0]
    .replace(/\s+/g, "")
    .trim();
}

function normalizeKanjiText(input: string): string {
  return input.replace(/\s+/g, "").trim();
}

function buildOptions(correct: string, candidates: string[]): string[] | null {
  const distractors = shuffle(unique(candidates).filter((item) => item !== correct)).slice(0, 3);

  if (distractors.length < 3) return null;

  return shuffle([correct, ...distractors]);
}

function getMainReadings(entry: KanjiEntry): string[] {
  return unique([...entry.on, ...entry.kun].map(normalizeReading).filter(Boolean));
}

function buildReadingItems(levels: readonly number[]): ReadingQuizItem[] {
  const items: ReadingQuizItem[] = [];
  const seen = new Set<string>();

  const addItem = (item: ReadingQuizItem) => {
    const key = `${item.kanji}|${item.reading}`;
    if (!item.kanji || !item.reading || item.kanji === item.reading || seen.has(key)) return;
    seen.add(key);
    items.push(item);
  };

  for (const entry of KANJI_LIST) {
    if (!levels.includes(entry.level) || !entry.meaning) continue;

    const examples = getKanjiExamples(entry);

    examples.forEach((example, exampleIndex) => {
      example.segments.forEach((segment, segmentIndex) => {
        if (!segment.ruby || !segment.text.includes(entry.char)) return;

        const kanji = normalizeKanjiText(segment.text);
        const reading = normalizeReading(segment.ruby);

        addItem({
          id: `${entry.char}-${kanji}-${reading}-${exampleIndex}-${segmentIndex}`,
          kanji,
          reading,
          entry,
          example,
        });
      });
    });

    getMainReadings(entry).forEach((reading, readingIndex) => {
      addItem({
        id: `${entry.char}-${reading}-${readingIndex}`,
        kanji: entry.char,
        reading,
        entry,
        example: getPrimaryKanjiExample(entry),
      });
    });
  }

  return items;
}

function buildQuestion(
  item: ReadingQuizItem,
  mode: QuizMode,
  pool: ReadingQuizItem[],
  index: number
): QuizQuestion | null {
  if (mode === "reading-to-kanji") {
    const candidates = pool
      .filter((candidate) => candidate.reading !== item.reading)
      .map((candidate) => candidate.kanji);
    const options = buildOptions(item.kanji, candidates);
    if (!options) return null;

    return {
      id: `${mode}-${item.id}-${index}`,
      mode,
      prompt: item.reading,
      promptType: "reading",
      correct: item.kanji,
      options,
      item,
    };
  }

  const candidates = pool
    .filter((candidate) => candidate.kanji !== item.kanji)
    .map((candidate) => candidate.reading);
  const options = buildOptions(item.reading, candidates);
  if (!options) return null;

  return {
    id: `${mode}-${item.id}-${index}`,
    mode,
    prompt: item.kanji,
    promptType: "kanji-word",
    correct: item.reading,
    options,
    item,
  };
}

function generateQuiz(levels: number[], mode: QuizMode, count: number): QuizQuestion[] {
  const pool = buildReadingItems(levels);
  const questions: QuizQuestion[] = [];

  for (const [index, item] of shuffle(pool).entries()) {
    const question = buildQuestion(item, mode, pool, index);
    if (question) questions.push(question);
    if (questions.length >= count) break;
  }

  return questions;
}

function getModeMeta(mode: QuizMode) {
  const map: Record<QuizMode, { label: string; desc: string; example: string; badge: string; promptLabel: string }> = {
    "reading-to-kanji": {
      label: "ひらがな → 漢字",
      desc: "Lectura en hiragana; elige la escritura correcta en kanji.",
      example: "がくせい → 学生",
      badge: "JLPT 語彙",
      promptLabel: "この読み方の漢字は？",
    },
    "kanji-to-reading": {
      label: "漢字 → ひらがな",
      desc: "Palabra en kanji; elige la lectura correcta en hiragana.",
      example: "学生 → がくせい",
      badge: "JLPT 読み方",
      promptLabel: "この漢字の読み方は？",
    },
  };

  return map[mode];
}

function SetupScreen({
  errorMessage,
  onStart,
}: {
  errorMessage: string | null;
  onStart: (levels: number[], mode: QuizMode, count: number) => void;
}) {
  const [selectedLevels, setSelectedLevels] = useState<number[]>([1]);
  const [mode, setMode] = useState<QuizMode>("reading-to-kanji");
  const [count, setCount] = useState(10);

  const totalSelected = useMemo(() => buildReadingItems(selectedLevels).length, [selectedLevels]);

  const toggleLevel = (level: number) => {
    setSelectedLevels((prev) => {
      if (prev.includes(level)) {
        return prev.length > 1 ? prev.filter((item) => item !== level) : prev;
      }

      return [...prev, level].sort((a, b) => a - b);
    });
  };

  const modes: QuizMode[] = ["reading-to-kanji", "kanji-to-reading"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]"
    >
      <section
        className="rounded-[32px] border p-5 sm:p-6"
        style={{
          background: "rgba(255,255,255,0.84)",
          border: `1px solid ${ACCENT_SOFT}0.12)`,
          boxShadow: `0 18px 44px ${ACCENT_SOFT}0.08)`,
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="mb-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
            Tipo de práctica
          </p>
          <h2 className="mt-2 text-2xl font-bold" style={{ color: "var(--ink)" }}>
            Lectura JLPT de kanji
          </h2>
          <p className="mt-2 text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.75 }}>
            La práctica se concentra en reconocer la relación entre escritura japonesa y lectura en hiragana. El español queda solo como apoyo en la retroalimentación.
          </p>
        </div>

        <div className="grid gap-3">
          {modes.map((item) => {
            const meta = getModeMeta(item);
            const active = mode === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setMode(item)}
                className="group rounded-3xl border p-4 text-left transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: active ? `${ACCENT_SOFT}0.10)` : "rgba(255,255,255,0.66)",
                  border: `1px solid ${active ? `${ACCENT_SOFT}0.30)` : "rgba(148,163,184,0.18)"}`,
                  boxShadow: active ? `0 14px 28px ${ACCENT_SOFT}0.12)` : "none",
                }}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="char-display text-lg font-bold" style={{ color: active ? ACCENT : "var(--ink)" }}>
                        {meta.label}
                      </span>
                      <span
                        className="rounded-full px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em]"
                        style={{ background: `${ACCENT_SOFT}0.08)`, color: ACCENT }}
                      >
                        {meta.badge}
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-5" style={{ color: "var(--ink-soft)", opacity: 0.76 }}>
                      {meta.desc}
                    </p>
                  </div>
                  <span
                    className="char-display w-fit rounded-2xl px-3 py-1.5 text-sm font-semibold"
                    style={{ background: "rgba(255,255,255,0.78)", color: ACCENT, border: `1px solid ${ACCENT_SOFT}0.12)` }}
                  >
                    {meta.example}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <aside className="space-y-5">
        <section
          className="rounded-[32px] border p-5 sm:p-6"
          style={{
            background: "rgba(255,255,255,0.84)",
            border: `1px solid ${ACCENT_SOFT}0.12)`,
            boxShadow: `0 18px 44px ${ACCENT_SOFT}0.08)`,
            backdropFilter: "blur(12px)",
          }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
            Niveles
          </p>
          <p className="mt-2 text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.72 }}>
            Nivel 1–7 disponible para lectura y reconocimiento. Nivel 8 queda bloqueado hasta completar datos.
          </p>

          <div className="mt-4 grid grid-cols-4 gap-2">
            {ALL_LEVELS.map((level) => {
              const hasData = LEVELS_WITH_DATA.includes(level);
              const active = selectedLevels.includes(level);
              const levelCount = getKanjiByLevel(level).filter((k) => k.meaning).length;

              return (
                <button
                  key={level}
                  type="button"
                  onClick={() => hasData && toggleLevel(level)}
                  disabled={!hasData}
                  className="rounded-2xl border px-2 py-3 text-center transition-all duration-200"
                  style={{
                    background: active ? `${ACCENT_SOFT}0.13)` : "rgba(255,255,255,0.62)",
                    border: `1px solid ${active ? `${ACCENT_SOFT}0.34)` : "rgba(148,163,184,0.18)"}`,
                    color: hasData ? (active ? ACCENT : "var(--ink)") : "var(--ink-soft)",
                    opacity: hasData ? 1 : 0.38,
                    cursor: hasData ? "pointer" : "not-allowed",
                  }}
                >
                  <span className="char-display block text-lg font-bold">{level}</span>
                  <span className="text-[0.64rem] font-medium">{hasData ? `${levelCount}字` : "—"}</span>
                </button>
              );
            })}
          </div>
        </section>

        <section
          className="rounded-[32px] border p-5 sm:p-6"
          style={{
            background: "rgba(255,255,255,0.84)",
            border: `1px solid ${ACCENT_SOFT}0.12)`,
            boxShadow: `0 18px 44px ${ACCENT_SOFT}0.08)`,
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
                Cantidad
              </p>
              <h3 className="mt-1 text-xl font-bold" style={{ color: "var(--ink)" }}>
                {count} preguntas
              </h3>
            </div>
            <div
              className="rounded-2xl px-4 py-2 text-right"
              style={{ background: `${ACCENT_SOFT}0.08)`, border: `1px solid ${ACCENT_SOFT}0.12)` }}
            >
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em]" style={{ color: ACCENT }}>
                Pool
              </p>
              <p className="char-display text-lg font-bold" style={{ color: "var(--ink)" }}>
                {totalSelected}語
              </p>
            </div>
          </div>

          <input
            type="range"
            min={5}
            max={20}
            step={5}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="mt-5 w-full"
            style={{ accentColor: ACCENT }}
          />
          <div className="mt-1 flex justify-between text-xs" style={{ color: "var(--ink-soft)", opacity: 0.55 }}>
            <span>5</span>
            <span>10</span>
            <span>15</span>
            <span>20</span>
          </div>
        </section>

        <AnimatePresence>
          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="rounded-2xl border px-4 py-3 text-sm font-medium"
              style={{ background: "rgba(254,242,242,0.86)", borderColor: "rgba(220,38,38,0.18)", color: "#B91C1C" }}
            >
              {errorMessage}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => onStart(selectedLevels, mode, count)}
          className="w-full rounded-3xl py-4 text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98]"
          style={{ background: GRADIENT, boxShadow: `0 16px 34px ${ACCENT_SOFT}0.26)` }}
        >
          Empezar quiz →
        </button>
      </aside>
    </motion.div>
  );
}

function QuestionPrompt({ question }: { question: QuizQuestion }) {
  const meta = getModeMeta(question.mode);
  const isKanjiPrompt = question.promptType === "kanji-word";

  return (
    <div className="w-full text-center">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
        {meta.promptLabel}
      </p>
      <span
        className="char-display"
        style={{
          fontSize: isKanjiPrompt ? "clamp(4rem, 14vw, 7.5rem)" : "clamp(2.6rem, 10vw, 5.5rem)",
          fontWeight: 800,
          background: isKanjiPrompt ? GRADIENT : undefined,
          WebkitBackgroundClip: isKanjiPrompt ? "text" : undefined,
          WebkitTextFillColor: isKanjiPrompt ? "transparent" : undefined,
          color: isKanjiPrompt ? undefined : "var(--ink)",
          lineHeight: 1.12,
          textAlign: "center",
        }}
      >
        {question.prompt}
      </span>
    </div>
  );
}

function ExampleFeedback({ question }: { question: QuizQuestion }) {
  const example = question.item.example ?? getPrimaryKanjiExample(question.item.entry);
  if (!example) return null;

  return (
    <div
      className="mt-4 rounded-2xl p-4"
      style={{ background: "rgba(255,255,255,0.72)", border: `1px solid ${ACCENT_SOFT}0.10)` }}
    >
      <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
        Ejemplo contextual
      </p>
      <RubyText
        segments={example.segments}
        className="char-display text-base leading-8 sm:text-lg"
        style={{ color: "var(--ink)" }}
        rtStyle={{ fontSize: "0.48em" }}
      />
      {example.translation && (
        <p className="mt-2 text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
          {example.translation}
        </p>
      )}
      {example.note && (
        <p className="mt-2 text-xs leading-5" style={{ color: "var(--ink-soft)", opacity: 0.68 }}>
          {example.note}
        </p>
      )}
    </div>
  );
}

function QuestionScreen({
  question,
  current,
  total,
  onAnswer,
}: {
  question: QuizQuestion;
  current: number;
  total: number;
  onAnswer: (answer: string) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    setSelected(null);
  }, [question.id]);

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    window.setTimeout(() => onAnswer(opt), 850);
  };

  const correct = selected === question.correct;
  const optionIsKanji = question.mode === "reading-to-kanji";
  const meta = getModeMeta(question.mode);

  return (
    <motion.div
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -18 }}
      transition={{ duration: 0.24 }}
      className="mx-auto max-w-4xl space-y-5"
    >
      <div className="flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full" style={{ background: `${ACCENT_SOFT}0.12)` }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: GRADIENT }}
            animate={{ width: `${(current / total) * 100}%` }}
            transition={{ duration: 0.35 }}
          />
        </div>
        <span className="text-xs font-bold" style={{ color: ACCENT }}>
          {current}/{total}
        </span>
      </div>

      <div
        className="rounded-[34px] border p-5 text-center sm:p-7"
        style={{
          background: "rgba(255,255,255,0.86)",
          border: `1px solid ${ACCENT_SOFT}0.12)`,
          boxShadow: `0 18px 46px ${ACCENT_SOFT}0.10)`,
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="mb-5 flex flex-wrap items-center justify-center gap-2">
          <span
            className="rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em]"
            style={{ color: ACCENT, background: `${ACCENT_SOFT}0.08)`, border: `1px solid ${ACCENT_SOFT}0.12)` }}
          >
            {meta.badge}
          </span>
          <span className="text-xs" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>
            Nivel {question.item.entry.level} · {question.item.entry.strokeCount > 0 ? `${question.item.entry.strokeCount}画` : "sin trazos"}
          </span>
        </div>

        <div className="flex min-h-[180px] items-center justify-center rounded-[28px] px-4 py-8" style={{ background: `${ACCENT_SOFT}0.045)` }}>
          <QuestionPrompt question={question} />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {question.options.map((opt) => {
          const isThis = selected === opt;
          const isRight = opt === question.correct;
          let background = "rgba(255,255,255,0.82)";
          let border = "rgba(148,163,184,0.22)";
          let color = "var(--ink)";

          if (selected) {
            if (isRight) {
              background = "rgba(220,252,231,0.92)";
              border = "#16A34A";
              color = "#15803D";
            } else if (isThis) {
              background = "rgba(254,226,226,0.92)";
              border = "#DC2626";
              color = "#B91C1C";
            }
          }

          return (
            <motion.button
              key={opt}
              type="button"
              whileTap={!selected ? { scale: 0.97 } : {}}
              onClick={() => handleSelect(opt)}
              className="rounded-3xl border p-4 text-center transition-all duration-200 hover:-translate-y-0.5"
              style={{ background, border: `2px solid ${border}`, color, cursor: selected ? "default" : "pointer" }}
            >
              <span className={optionIsKanji ? "char-display text-4xl font-bold" : "char-display text-2xl font-bold leading-snug sm:text-3xl"}>
                {opt}
              </span>
              {selected && isRight && <div className="mt-1 text-xs font-bold">✓ Correcto</div>}
              {selected && isThis && !isRight && <div className="mt-1 text-xs font-bold">✗ Incorrecto</div>}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="rounded-[28px] border p-5"
            style={{ background: `${ACCENT_SOFT}0.06)`, border: `1px solid ${ACCENT_SOFT}0.12)` }}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="char-display text-5xl font-bold leading-none" style={{ color: ACCENT }}>
                  {question.item.entry.char}
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: correct ? "#15803D" : "#B91C1C" }}>
                    {correct ? "Respuesta correcta" : "Respuesta corregida"}
                  </p>
                  <p className="char-display mt-1 text-xl font-semibold" style={{ color: "var(--ink)" }}>
                    {question.item.kanji} ・ {question.item.reading}
                  </p>
                  <p className="mt-1 text-sm" style={{ color: "var(--ink-soft)", opacity: 0.76 }}>
                    {question.item.entry.meaning}
                  </p>
                </div>
              </div>

              <div
                className="rounded-2xl px-4 py-2 text-sm font-bold"
                style={{ background: "rgba(255,255,255,0.72)", color: correct ? "#15803D" : "#B91C1C" }}
              >
                Correcta: {question.correct}
              </div>
            </div>

            <ExampleFeedback question={question} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ResultsScreen({
  score,
  total,
  onRestart,
  onNewQuiz,
}: {
  score: number;
  total: number;
  onRestart: () => void;
  onNewQuiz: () => void;
}) {
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const emoji = pct === 100 ? "🎉" : pct >= 80 ? "😊" : pct >= 60 ? "🤔" : "😅";
  const msg = pct === 100 ? "¡Perfecto!" : pct >= 80 ? "¡Muy bien!" : pct >= 60 ? "Sigue practicando" : "¡Ánimo!";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center"
    >
      <div
        className="w-full rounded-[34px] border px-6 py-8"
        style={{ background: "rgba(255,255,255,0.88)", border: `1px solid ${ACCENT_SOFT}0.12)`, boxShadow: `0 22px 52px ${ACCENT_SOFT}0.12)` }}
      >
        <div className="mb-3 text-5xl">{emoji}</div>
        <h2 className="text-3xl font-bold" style={{ color: "var(--ink)" }}>
          {msg}
        </h2>

        <div className="my-7 flex flex-col items-center">
          <div
            className="flex h-32 w-32 items-center justify-center rounded-full text-3xl font-bold text-white"
            style={{ background: GRADIENT, boxShadow: `0 12px 30px ${ACCENT_SOFT}0.30)` }}
          >
            {score}/{total}
          </div>
          <p className="mt-3 text-lg font-semibold" style={{ color: ACCENT }}>
            {pct}% correcto
          </p>
        </div>

        <div className="flex justify-center gap-8 text-sm">
          <div>
            <span className="text-3xl font-bold" style={{ color: "#15803D" }}>
              {score}
            </span>
            <p style={{ color: "var(--ink-soft)" }}>correctas</p>
          </div>
          <div>
            <span className="text-3xl font-bold" style={{ color: "#B91C1C" }}>
              {total - score}
            </span>
            <p style={{ color: "var(--ink-soft)" }}>incorrectas</p>
          </div>
        </div>
      </div>

      <div className="grid w-full gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={onRestart}
          className="rounded-2xl py-3.5 text-sm font-bold text-white transition-all hover:brightness-110"
          style={{ background: GRADIENT }}
        >
          Repetir quiz
        </button>
        <button
          type="button"
          onClick={onNewQuiz}
          className="rounded-2xl py-3.5 text-sm font-semibold transition-all hover:bg-white"
          style={{ border: `1px solid ${ACCENT_SOFT}0.20)`, color: "var(--ink)", background: "rgba(255,255,255,0.72)" }}
        >
          Nuevo quiz
        </button>
      </div>
    </motion.div>
  );
}

type Screen = "setup" | "quiz" | "results";

export default function KanjiQuizPage() {
  const [screen, setScreen] = useState<Screen>("setup");
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [lastConfig, setLastConfig] = useState<{ levels: number[]; mode: QuizMode; count: number } | null>(null);

  const handleStart = useCallback((levels: number[], mode: QuizMode, count: number) => {
    const qs = generateQuiz(levels, mode, count);

    if (qs.length === 0) {
      setErrorMessage("No se pudieron generar preguntas suficientes con esta configuración.");
      setScreen("setup");
      return;
    }

    setErrorMessage(null);
    setQuestions(qs);
    setCurrentIdx(0);
    setScore(0);
    setLastConfig({ levels, mode, count });
    setScreen("quiz");
  }, []);

  const handleAnswer = useCallback(
    (answer: string) => {
      const currentQuestion = questions[currentIdx];
      if (!currentQuestion) return;

      if (answer === currentQuestion.correct) setScore((s) => s + 1);

      if (currentIdx < questions.length - 1) {
        setCurrentIdx((i) => i + 1);
      } else {
        setScreen("results");
      }
    },
    [questions, currentIdx]
  );

  return (
    <main className="relative min-h-screen" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />

      <div className="relative z-10 flex w-full justify-center">
        <div className="w-full max-w-6xl px-4 pb-28 pt-8 sm:px-6 sm:pt-10">
          <div className="mb-7 flex items-center justify-between gap-4">
            <Link href="/kanji" className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70" style={{ color: ACCENT }}>
              ← Kanji
            </Link>

            {screen !== "setup" && (
              <button
                type="button"
                onClick={() => setScreen("setup")}
                className="rounded-full px-3 py-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
                style={{ color: ACCENT, background: `${ACCENT_SOFT}0.08)` }}
              >
                Cambiar configuración
              </button>
            )}
          </div>

          <motion.header
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-8 text-center"
          >
            <div
              className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
              style={{ color: ACCENT, background: `${ACCENT_SOFT}0.08)`, border: `1px solid ${ACCENT_SOFT}0.15)` }}
            >
              漢字クイズ · JLPT読み方
            </div>
            <h1 className="char-display text-[clamp(2.4rem,6vw,4.8rem)] font-bold leading-none" style={{ color: "var(--ink)" }}>
              Kanji Reading Quiz
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 sm:text-base" style={{ color: "var(--ink-soft)", opacity: 0.76 }}>
              Practica el reconocimiento entre hiragana y kanji. El enfoque principal es lectura japonesa, no traducción al español.
            </p>
          </motion.header>

          <AnimatePresence mode="wait">
            {screen === "setup" && (
              <motion.div key="setup" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <SetupScreen errorMessage={errorMessage} onStart={handleStart} />
              </motion.div>
            )}

            {screen === "quiz" && questions[currentIdx] && (
              <QuestionScreen
                key={questions[currentIdx].id}
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
                onRestart={() => lastConfig && handleStart(lastConfig.levels, lastConfig.mode, lastConfig.count)}
                onNewQuiz={() => setScreen("setup")}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
