// src/app/gramatica/formalidad/registro/practica/page.tsx

"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";
import { RubyText } from "@/app/components/ui/Ruby";
import {
  FORMALITY_REGISTER_QUESTIONS,
  FORMALITY_REGISTER_SESSION_PRESETS,
  REGISTER_CONTEXT_LABELS,
  REGISTER_DIFFICULTY_LABELS,
  REGISTER_ERROR_FEEDBACK,
  REGISTER_ERROR_LABELS,
  REGISTER_LABELS,
  REGISTER_QUIZ_MODE_DESCRIPTIONS,
  REGISTER_QUIZ_MODE_LABELS,
  type RegisterChoice,
  type RegisterContext,
  type RegisterDifficulty,
  type RegisterErrorTag,
  type RegisterQuizMode,
  type RegisterQuizQuestion,
  type RegisterSessionPreset,
} from "@/data/grammar/formalityRegisterQuiz";

const ACCENT = "#37474F";
const ACCENT_SOFT = "rgba(55,71,79,";
const GRADIENT = "linear-gradient(135deg, #CFD8DC 0%, #37474F 100%)";

const COUNT_OPTIONS = [8, 10, 12, 16, 20] as const;

type Screen = "setup" | "quiz" | "results";

type ContextSelection = "all" | RegisterContext;

interface SessionConfig {
  presetId: string;
  modes: RegisterQuizMode[];
  difficulties: RegisterDifficulty[];
  contexts: ContextSelection[];
  count: number;
}

interface AnswerRecord {
  questionId: string;
  selectedChoiceId: string;
  correctChoiceId: string;
  isCorrect: boolean;
  tags: RegisterErrorTag[];
  mode: RegisterQuizMode;
  difficulty: RegisterDifficulty;
  context: RegisterContext;
}

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-4">
      <p
        className="text-xs font-bold uppercase tracking-[0.18em]"
        style={{ color: ACCENT }}
      >
        {eyebrow}
      </p>
      <h2
        className="mt-2 text-[clamp(1.35rem,2vw,1.9rem)] font-bold"
        style={{ color: "var(--ink)" }}
      >
        {title}
      </h2>
      {desc && (
        <p
          className="mt-2 max-w-3xl text-sm leading-6"
          style={{ color: "var(--ink-soft)", opacity: 0.82 }}
        >
          {desc}
        </p>
      )}
    </div>
  );
}

function shuffle<T>(items: readonly T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function unique<T>(items: readonly T[]): T[] {
  return [...new Set(items)];
}

function getPresetById(id: string): RegisterSessionPreset {
  return (
    FORMALITY_REGISTER_SESSION_PRESETS.find((preset) => preset.id === id) ??
    FORMALITY_REGISTER_SESSION_PRESETS[0]
  );
}

function buildQuiz(config: SessionConfig): RegisterQuizQuestion[] {
  const modeSet = new Set(config.modes);
  const difficultySet = new Set(config.difficulties);
  const useAllContexts =
    config.contexts.length === 0 || config.contexts.includes("all");
  const contextSet = new Set(
    config.contexts.filter((ctx): ctx is RegisterContext => ctx !== "all"),
  );

  const pool = FORMALITY_REGISTER_QUESTIONS.filter((question) => {
    if (!modeSet.has(question.mode)) return false;
    if (!difficultySet.has(question.difficulty)) return false;
    if (!useAllContexts && !contextSet.has(question.context)) return false;
    return true;
  });

  const fallbackPool = pool.length > 0 ? pool : FORMALITY_REGISTER_QUESTIONS;
  return shuffle(fallbackPool).slice(0, Math.min(config.count, fallbackPool.length));
}

function getSelectedChoice(
  question: RegisterQuizQuestion,
  selectedChoiceId: string | null,
): RegisterChoice | null {
  if (!selectedChoiceId) return null;
  return question.choices.find((choice) => choice.id === selectedChoiceId) ?? null;
}

function SetupScreen({
  config,
  onConfigChange,
  onStart,
}: {
  config: SessionConfig;
  onConfigChange: (next: SessionConfig) => void;
  onStart: () => void;
}) {
  const selectedPreset = getPresetById(config.presetId);

  const toggleMode = (mode: RegisterQuizMode) => {
    const exists = config.modes.includes(mode);
    const nextModes = exists
      ? config.modes.length > 1
        ? config.modes.filter((item) => item !== mode)
        : config.modes
      : [...config.modes, mode];

    onConfigChange({ ...config, modes: nextModes });
  };

  const toggleDifficulty = (difficulty: RegisterDifficulty) => {
    const exists = config.difficulties.includes(difficulty);
    const nextDifficulties = exists
      ? config.difficulties.length > 1
        ? config.difficulties.filter((item) => item !== difficulty)
        : config.difficulties
      : [...config.difficulties, difficulty];

    onConfigChange({ ...config, difficulties: nextDifficulties });
  };

  const toggleContext = (context: ContextSelection) => {
    if (context === "all") {
      onConfigChange({ ...config, contexts: ["all"] });
      return;
    }

    const current = config.contexts.filter((item): item is RegisterContext => item !== "all");
    const exists = current.includes(context);
    const next = exists ? current.filter((item) => item !== context) : [...current, context];

    onConfigChange({
      ...config,
      contexts: next.length === 0 ? ["all"] : unique(next),
    });
  };

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
      <div
        className="rounded-[26px] border p-5"
        style={{
          background: "rgba(255,255,255,0.85)",
          border: `1px solid ${ACCENT_SOFT}0.12)`,
          boxShadow: `0 12px 32px ${ACCENT_SOFT}0.06)`,
        }}
      >
        <SectionTitle
          eyebrow="Sesión"
          title="Elige una ruta de práctica"
          desc="Puedes partir con un preset ya armado o ajustar manualmente modos, dificultad y contexto."
        />

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {FORMALITY_REGISTER_SESSION_PRESETS.map((preset) => {
            const active = preset.id === config.presetId;
            return (
              <button
                key={preset.id}
                onClick={() =>
                  onConfigChange({
                    presetId: preset.id,
                    modes: [...preset.modes],
                    difficulties: [...preset.difficulties],
                    contexts: ["all"],
                    count: preset.recommendedCount,
                  })
                }
                className="rounded-[22px] border p-4 text-left transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: active ? `${ACCENT_SOFT}0.08)` : "rgba(255,255,255,0.72)",
                  borderColor: active ? `${ACCENT_SOFT}0.25)` : "var(--border)",
                  boxShadow: active ? `0 10px 24px ${ACCENT_SOFT}0.10)` : "none",
                }}
              >
                <p
                  className="text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                  style={{ color: ACCENT }}
                >
                  {preset.label}
                </p>
                <p className="mt-2 text-sm leading-6" style={{ color: "var(--ink)", opacity: 0.88 }}>
                  {preset.description}
                </p>
                <p className="mt-3 text-xs" style={{ color: "var(--ink-soft)", opacity: 0.75 }}>
                  {preset.recommendedCount} preguntas recomendadas
                </p>
              </button>
            );
          })}
        </div>

        <div
          className="mt-4 rounded-[22px] border px-4 py-3 text-sm"
          style={{
            background: "rgba(207,216,220,0.12)",
            borderColor: `${ACCENT_SOFT}0.10)`,
            color: "var(--ink)",
          }}
        >
          <strong style={{ color: ACCENT }}>{selectedPreset.label}:</strong>{" "}
          {selectedPreset.description}
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5">
          <div
            className="rounded-[26px] border p-5"
            style={{
              background: "rgba(255,255,255,0.85)",
              border: `1px solid ${ACCENT_SOFT}0.12)`,
              boxShadow: `0 12px 32px ${ACCENT_SOFT}0.06)`,
            }}
          >
            <SectionTitle
              eyebrow="Modos"
              title="Qué tipo de habilidad quieres trabajar"
              desc="Registro no es solo conjugación: también incluye adecuación, naturalidad y continuidad del diálogo."
            />

            <div className="space-y-2">
              {(Object.keys(REGISTER_QUIZ_MODE_LABELS) as RegisterQuizMode[]).map((mode) => {
                const active = config.modes.includes(mode);
                return (
                  <button
                    key={mode}
                    onClick={() => toggleMode(mode)}
                    className="w-full rounded-2xl border p-4 text-left transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: active ? `${ACCENT_SOFT}0.08)` : "rgba(255,255,255,0.68)",
                      borderColor: active ? `${ACCENT_SOFT}0.25)` : "var(--border)",
                      boxShadow: active ? `0 8px 18px ${ACCENT_SOFT}0.08)` : "none",
                    }}
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-sm font-bold" style={{ color: ACCENT }}>
                          {REGISTER_QUIZ_MODE_LABELS[mode]}
                        </p>
                        <p className="mt-1 text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>
                          {REGISTER_QUIZ_MODE_DESCRIPTIONS[mode]}
                        </p>
                      </div>
                      <span
                        className="rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                        style={{
                          background: active ? "rgba(55,71,79,0.10)" : "rgba(0,0,0,0.04)",
                          color: active ? ACCENT : "var(--ink-soft)",
                        }}
                      >
                        {active ? "Activo" : "Inactivo"}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className="rounded-[26px] border p-5"
            style={{
              background: "rgba(255,255,255,0.85)",
              border: `1px solid ${ACCENT_SOFT}0.12)`,
              boxShadow: `0 12px 32px ${ACCENT_SOFT}0.06)`,
            }}
          >
            <SectionTitle
              eyebrow="Dificultad"
              title="Base, intermedio o avanzado"
              desc="Aquí la progresión no sigue JLPT: sube desde la forma base hacia naturalidad y lectura social del contexto."
            />

            <div className="grid gap-3 md:grid-cols-3">
              {(Object.keys(REGISTER_DIFFICULTY_LABELS) as RegisterDifficulty[]).map((difficulty) => {
                const active = config.difficulties.includes(difficulty);
                return (
                  <button
                    key={difficulty}
                    onClick={() => toggleDifficulty(difficulty)}
                    className="rounded-2xl border p-4 text-left transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: active ? `${ACCENT_SOFT}0.08)` : "rgba(255,255,255,0.68)",
                      borderColor: active ? `${ACCENT_SOFT}0.25)` : "var(--border)",
                    }}
                  >
                    <p className="text-sm font-bold" style={{ color: ACCENT }}>
                      {REGISTER_DIFFICULTY_LABELS[difficulty]}
                    </p>
                    <p className="mt-2 text-xs" style={{ color: "var(--ink-soft)", opacity: 0.75 }}>
                      {difficulty === "base" && "Plain vs ます, copula, negativo y pasado."}
                      {difficulty === "intermedio" && "Contexto, adecuación mínima y corrección de tono."}
                      {difficulty === "avanzado" && "Naturalidad, matiz y continuidad del diálogo."}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div
            className="rounded-[26px] border p-5"
            style={{
              background: "rgba(255,255,255,0.85)",
              border: `1px solid ${ACCENT_SOFT}0.12)`,
              boxShadow: `0 12px 32px ${ACCENT_SOFT}0.06)`,
            }}
          >
            <SectionTitle
              eyebrow="Contexto"
              title="Dónde quieres situar la sesión"
              desc="Puedes dejarlo mixto o centrarte en profesor, trabajo, cliente o relación cercana."
            />

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => toggleContext("all")}
                className="rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200"
                style={{
                  background: config.contexts.includes("all") ? GRADIENT : "rgba(255,255,255,0.8)",
                  color: config.contexts.includes("all") ? "white" : "var(--ink)",
                  border: config.contexts.includes("all") ? "none" : "1px solid var(--border)",
                  boxShadow: config.contexts.includes("all") ? `0 10px 24px ${ACCENT_SOFT}0.18)` : "none",
                }}
              >
                Todo
              </button>

              {(Object.keys(REGISTER_CONTEXT_LABELS) as RegisterContext[]).map((context) => {
                const active = !config.contexts.includes("all") && config.contexts.includes(context);
                return (
                  <button
                    key={context}
                    onClick={() => toggleContext(context)}
                    className="rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200"
                    style={{
                      background: active ? GRADIENT : "rgba(255,255,255,0.8)",
                      color: active ? "white" : "var(--ink)",
                      border: active ? "none" : "1px solid var(--border)",
                      boxShadow: active ? `0 10px 24px ${ACCENT_SOFT}0.18)` : "none",
                    }}
                  >
                    {REGISTER_CONTEXT_LABELS[context]}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className="rounded-[26px] border p-5"
            style={{
              background: "rgba(255,255,255,0.85)",
              border: `1px solid ${ACCENT_SOFT}0.12)`,
              boxShadow: `0 12px 32px ${ACCENT_SOFT}0.06)`,
            }}
          >
            <SectionTitle
              eyebrow="Cantidad"
              title="Cuántas preguntas quieres"
              desc="Puedes seguir la recomendación del preset o ampliar la sesión."
            />

            <div className="grid grid-cols-5 gap-2">
              {COUNT_OPTIONS.map((count) => {
                const active = config.count === count;
                return (
                  <button
                    key={count}
                    onClick={() => onConfigChange({ ...config, count })}
                    className="rounded-xl border py-3 text-sm font-bold transition-all duration-200"
                    style={{
                      background: active ? `${ACCENT_SOFT}0.10)` : "rgba(255,255,255,0.72)",
                      borderColor: active ? `${ACCENT_SOFT}0.25)` : "var(--border)",
                      color: active ? ACCENT : "var(--ink)",
                    }}
                  >
                    {count}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className="rounded-[26px] border p-5"
            style={{
              background: "rgba(207,216,220,0.14)",
              borderColor: `${ACCENT_SOFT}0.12)`,
            }}
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: ACCENT }}
            >
              Resumen de sesión
            </p>

            <div className="mt-4 space-y-3 text-sm" style={{ color: "var(--ink)" }}>
              <div>
                <strong>Preset:</strong> {selectedPreset.label}
              </div>
              <div>
                <strong>Modos:</strong>{" "}
                {config.modes.map((mode) => REGISTER_QUIZ_MODE_LABELS[mode]).join(" · ")}
              </div>
              <div>
                <strong>Dificultad:</strong>{" "}
                {config.difficulties
                  .map((difficulty) => REGISTER_DIFFICULTY_LABELS[difficulty])
                  .join(" · ")}
              </div>
              <div>
                <strong>Contexto:</strong>{" "}
                {config.contexts.includes("all")
                  ? "Todo"
                  : config.contexts
                      .map((context) => REGISTER_CONTEXT_LABELS[context as RegisterContext])
                      .join(" · ")}
              </div>
              <div>
                <strong>Preguntas:</strong> {config.count}
              </div>
            </div>

            <button
              onClick={onStart}
              className="mt-5 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110"
              style={{ background: GRADIENT, boxShadow: `0 14px 30px ${ACCENT_SOFT}0.20)` }}
            >
              Empezar práctica →
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProgressBar({ current, total }: { current: number; total: number }) {
  const ratio = total > 0 ? (current / total) * 100 : 0;

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
        <span>Progreso</span>
        <span>
          {current}/{total}
        </span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full" style={{ background: "rgba(207,216,220,0.26)" }}>
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${ratio}%`, background: GRADIENT }}
        />
      </div>
    </div>
  );
}

function QuestionScreen({
  question,
  current,
  total,
  selectedChoiceId,
  onSelect,
  onNext,
}: {
  question: RegisterQuizQuestion;
  current: number;
  total: number;
  selectedChoiceId: string | null;
  onSelect: (choiceId: string) => void;
  onNext: () => void;
}) {
  const selectedChoice = getSelectedChoice(question, selectedChoiceId);
  const isRevealed = !!selectedChoiceId;
  const isCorrect = selectedChoiceId === question.correctChoiceId;

  const selectedFeedback = selectedChoice
    ? selectedChoice.feedback ??
      (selectedChoice.misconception
        ? REGISTER_ERROR_FEEDBACK[selectedChoice.misconception]
        : undefined)
    : undefined;

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className="space-y-5"
    >
      <div
        className="rounded-[28px] border p-5 sm:p-6"
        style={{
          background: "rgba(255,255,255,0.86)",
          borderColor: `${ACCENT_SOFT}0.12)`,
          boxShadow: `0 14px 34px ${ACCENT_SOFT}0.07)`,
        }}
      >
        <ProgressBar current={current} total={total} />

        <div className="mt-5 flex flex-wrap gap-2">
          <span
            className="rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
            style={{ background: "rgba(207,216,220,0.22)", color: ACCENT, border: `1px solid ${ACCENT_SOFT}0.12)` }}
          >
            {REGISTER_QUIZ_MODE_LABELS[question.mode]}
          </span>
          <span
            className="rounded-full px-3 py-1 text-[0.72rem] font-semibold"
            style={{ background: "rgba(255,255,255,0.72)", color: "var(--ink-soft)", border: "1px solid var(--border)" }}
          >
            {REGISTER_DIFFICULTY_LABELS[question.difficulty]}
          </span>
          <span
            className="rounded-full px-3 py-1 text-[0.72rem] font-semibold"
            style={{ background: "rgba(255,255,255,0.72)", color: "var(--ink-soft)", border: "1px solid var(--border)" }}
          >
            {REGISTER_CONTEXT_LABELS[question.context]}
          </span>
          {question.targetRegister && (
            <span
              className="rounded-full px-3 py-1 text-[0.72rem] font-semibold"
              style={{ background: "rgba(255,255,255,0.72)", color: "var(--ink-soft)", border: "1px solid var(--border)" }}
            >
              Meta: {REGISTER_LABELS[question.targetRegister]}
            </span>
          )}
        </div>

        {question.situation && (
          <div
            className="mt-5 rounded-[22px] border p-4"
            style={{
              background: "rgba(207,216,220,0.12)",
              borderColor: `${ACCENT_SOFT}0.12)`,
            }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
              Situación
            </p>
            <p className="mt-2 text-sm leading-7" style={{ color: "var(--ink)" }}>
              {question.situation}
            </p>
          </div>
        )}

        <div className="mt-5 rounded-[24px] border p-5" style={{ background: "rgba(255,255,255,0.72)", borderColor: "var(--border)" }}>
          <RubyText
            segments={question.prompt}
            className="char-display text-[clamp(1.1rem,2.7vw,1.4rem)] leading-9"
            style={{ color: "var(--ink)" }}
          />
          {question.promptMeta?.translation && (
            <p className="mt-3 text-sm" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
              {question.promptMeta.translation}
            </p>
          )}
        </div>

        <div className="mt-5 space-y-3">
          {question.choices.map((choice) => {
            const isSelected = selectedChoiceId === choice.id;
            const isCorrectChoice = question.correctChoiceId === choice.id;

            let background = "rgba(255,255,255,0.76)";
            let borderColor = "var(--border)";
            let textColor = "var(--ink)";

            if (isRevealed && isCorrectChoice) {
              background = "rgba(220,252,231,0.70)";
              borderColor = "rgba(22,163,74,0.22)";
              textColor = "#14532D";
            } else if (isRevealed && isSelected && !isCorrectChoice) {
              background = "rgba(254,226,226,0.70)";
              borderColor = "rgba(220,38,38,0.22)";
              textColor = "#7F1D1D";
            } else if (!isRevealed && isSelected) {
              background = `${ACCENT_SOFT}0.08)`;
              borderColor = `${ACCENT_SOFT}0.25)`;
            }

            return (
              <button
                key={choice.id}
                onClick={() => !isRevealed && onSelect(choice.id)}
                disabled={isRevealed}
                className="w-full rounded-[22px] border p-4 text-left transition-all duration-200"
                style={{
                  background,
                  borderColor,
                  color: textColor,
                  cursor: isRevealed ? "default" : "pointer",
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="mt-0.5 inline-flex h-7 min-w-7 items-center justify-center rounded-full text-xs font-bold"
                    style={{
                      background: isRevealed && isCorrectChoice ? "rgba(22,163,74,0.16)" : "rgba(55,71,79,0.10)",
                      color: isRevealed && isCorrectChoice ? "#166534" : ACCENT,
                    }}
                  >
                    {choice.label.replace(/^Opción\s+/i, "")}
                  </div>
                  <div className="min-w-0 flex-1">
                    {choice.segments ? (
                      <RubyText
                        segments={choice.segments}
                        className="char-display text-base leading-8"
                        style={{ color: textColor }}
                      />
                    ) : (
                      <p className="text-base font-medium">{choice.label}</p>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {isRevealed && selectedChoice && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div
            className="rounded-[24px] border p-5"
            style={{
              background: isCorrect ? "rgba(220,252,231,0.68)" : "rgba(254,226,226,0.68)",
              borderColor: isCorrect ? "rgba(22,163,74,0.18)" : "rgba(220,38,38,0.18)",
            }}
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: isCorrect ? "#15803D" : "#B91C1C" }}
            >
              {isCorrect ? "Bien" : "Revisa esto"}
            </p>
            <p className="mt-2 text-sm leading-7" style={{ color: isCorrect ? "#14532D" : "#7F1D1D" }}>
              {isCorrect
                ? question.explanation
                : selectedFeedback ?? "La opción no encaja bien con el registro o el contexto."}
            </p>
          </div>

          {!isCorrect && (
            <div
              className="rounded-[24px] border p-5"
              style={{ background: "rgba(255,255,255,0.82)", borderColor: `${ACCENT_SOFT}0.10)` }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
                Forma esperada
              </p>
              <div className="mt-3 rounded-2xl border p-4" style={{ background: "rgba(220,252,231,0.42)", borderColor: "rgba(22,163,74,0.14)" }}>
                <RubyText
                  segments={
                    question.choices.find((choice) => choice.id === question.correctChoiceId)?.segments ??
                    question.prompt
                  }
                  className="char-display text-base leading-8"
                  style={{ color: "var(--ink)" }}
                />
              </div>
              <p className="mt-3 text-sm leading-7" style={{ color: "var(--ink-soft)", opacity: 0.84 }}>
                {question.explanation}
              </p>
            </div>
          )}

          <div className="flex justify-end">
            <button
              onClick={onNext}
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:brightness-110"
              style={{ background: GRADIENT, boxShadow: `0 12px 28px ${ACCENT_SOFT}0.18)` }}
            >
              {current === total ? "Ver resultados" : "Siguiente pregunta"} →
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

function ResultsScreen({
  questions,
  answers,
  onRestart,
  onNewQuiz,
}: {
  questions: RegisterQuizQuestion[];
  answers: AnswerRecord[];
  onRestart: () => void;
  onNewQuiz: () => void;
}) {
  const total = questions.length;
  const score = answers.filter((answer) => answer.isCorrect).length;
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;

  const tagStats = useMemo(() => {
    const map = new Map<
      RegisterErrorTag,
      { total: number; correct: number }
    >();

    answers.forEach((answer) => {
      answer.tags.forEach((tag) => {
        const current = map.get(tag) ?? { total: 0, correct: 0 };
        current.total += 1;
        if (answer.isCorrect) current.correct += 1;
        map.set(tag, current);
      });
    });

    return [...map.entries()]
      .map(([tag, value]) => ({
        tag,
        total: value.total,
        correct: value.correct,
        accuracy: value.total > 0 ? Math.round((value.correct / value.total) * 100) : 0,
      }))
      .sort((a, b) => a.accuracy - b.accuracy || b.total - a.total);
  }, [answers]);

  const weakestTags = tagStats.filter((item) => item.total >= 2).slice(0, 4);
  const strongestTags = [...tagStats]
    .filter((item) => item.total >= 2)
    .sort((a, b) => b.accuracy - a.accuracy || b.total - a.total)
    .slice(0, 3);

  const modeCoverage = useMemo(() => {
    const map = new Map<RegisterQuizMode, { total: number; correct: number }>();
    answers.forEach((answer) => {
      const current = map.get(answer.mode) ?? { total: 0, correct: 0 };
      current.total += 1;
      if (answer.isCorrect) current.correct += 1;
      map.set(answer.mode, current);
    });
    return [...map.entries()];
  }, [answers]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-5"
    >
      <div
        className="rounded-[30px] border p-6 text-center"
        style={{
          background: "rgba(255,255,255,0.86)",
          borderColor: `${ACCENT_SOFT}0.12)`,
          boxShadow: `0 18px 40px ${ACCENT_SOFT}0.08)`,
        }}
      >
        <div
          className="mx-auto flex h-28 w-28 items-center justify-center rounded-full text-3xl font-bold"
          style={{
            color: ACCENT,
            background: "rgba(207,216,220,0.20)",
            border: `1px solid ${ACCENT_SOFT}0.16)`,
            boxShadow: `0 10px 24px ${ACCENT_SOFT}0.18)`,
          }}
        >
          {score}/{total}
        </div>
        <p className="mt-4 text-lg font-semibold" style={{ color: ACCENT }}>
          {pct}% correcto
        </p>
        <p className="mt-2 text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.8 }}>
          El objetivo aquí no es solo acertar formas, sino afinar tu lectura del tono, la distancia social y la naturalidad.
        </p>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-5">
          <div
            className="rounded-[28px] border p-5"
            style={{ background: "rgba(255,255,255,0.84)", borderColor: `${ACCENT_SOFT}0.10)` }}
          >
            <SectionTitle
              eyebrow="Áreas a reforzar"
              title="Dónde conviene insistir"
              desc="Estas etiquetas resumen en qué parte del registro te costó más sostener la naturalidad o el contexto."
            />

            <div className="space-y-3">
              {weakestTags.length === 0 ? (
                <div className="rounded-2xl border px-4 py-3 text-sm" style={{ background: "rgba(255,255,255,0.72)", borderColor: "var(--border)", color: "var(--ink)" }}>
                  Buen equilibrio general. Puedes subir la dificultad o cambiar de contexto para tensionar más el registro.
                </div>
              ) : (
                weakestTags.map((item) => (
                  <div
                    key={item.tag}
                    className="rounded-[22px] border p-4"
                    style={{ background: "rgba(254,243,199,0.40)", borderColor: "rgba(217,119,6,0.16)" }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-bold" style={{ color: "#9A3412" }}>
                        {REGISTER_ERROR_LABELS[item.tag]}
                      </p>
                      <span className="rounded-full px-3 py-1 text-[0.72rem] font-bold" style={{ background: "rgba(217,119,6,0.10)", color: "#9A3412" }}>
                        {item.accuracy}%
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6" style={{ color: "#7C2D12" }}>
                      {REGISTER_ERROR_FEEDBACK[item.tag]}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

          <div
            className="rounded-[28px] border p-5"
            style={{ background: "rgba(255,255,255,0.84)", borderColor: `${ACCENT_SOFT}0.10)` }}
          >
            <SectionTitle
              eyebrow="Fortalezas"
              title="Lo que ya viene saliendo bien"
              desc="Estas son las zonas donde el registro estuvo más estable durante la sesión."
            />

            <div className="space-y-3">
              {strongestTags.length === 0 ? (
                <div className="rounded-2xl border px-4 py-3 text-sm" style={{ background: "rgba(255,255,255,0.72)", borderColor: "var(--border)", color: "var(--ink)" }}>
                  Completa más de una sesión para que aparezcan fortalezas claras por skill.
                </div>
              ) : (
                strongestTags.map((item) => (
                  <div
                    key={item.tag}
                    className="rounded-[22px] border p-4"
                    style={{ background: "rgba(220,252,231,0.48)", borderColor: "rgba(22,163,74,0.16)" }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-bold" style={{ color: "#166534" }}>
                        {REGISTER_ERROR_LABELS[item.tag]}
                      </p>
                      <span className="rounded-full px-3 py-1 text-[0.72rem] font-bold" style={{ background: "rgba(22,163,74,0.10)", color: "#166534" }}>
                        {item.accuracy}%
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6" style={{ color: "#14532D" }}>
                      Vas sosteniendo bien esta parte del cambio de registro.
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div
            className="rounded-[28px] border p-5"
            style={{ background: "rgba(255,255,255,0.84)", borderColor: `${ACCENT_SOFT}0.10)` }}
          >
            <SectionTitle
              eyebrow="Cobertura"
              title="Qué apareció en esta sesión"
              desc="Sirve para ver si la práctica quedó más centrada en base, naturalidad, diálogo o ajuste social."
            />

            <div className="space-y-3">
              {modeCoverage.map(([mode, stat]) => {
                const accuracy = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
                return (
                  <div key={mode} className="rounded-2xl border p-4" style={{ background: "rgba(255,255,255,0.72)", borderColor: "var(--border)" }}>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-bold" style={{ color: ACCENT }}>
                        {REGISTER_QUIZ_MODE_LABELS[mode]}
                      </p>
                      <span className="text-xs font-semibold" style={{ color: "var(--ink-soft)" }}>
                        {stat.correct}/{stat.total} · {accuracy}%
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>
                      {REGISTER_QUIZ_MODE_DESCRIPTIONS[mode]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex w-full gap-3">
            <button
              onClick={onRestart}
              className="flex-1 rounded-2xl py-3.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110"
              style={{ background: GRADIENT }}
            >
              Repetir sesión
            </button>
            <button
              onClick={onNewQuiz}
              className="flex-1 rounded-2xl py-3.5 text-sm font-semibold transition-all duration-200 hover:bg-white"
              style={{
                border: `1px solid ${ACCENT_SOFT}0.20)`,
                color: "var(--ink)",
                background: "rgba(255,255,255,0.72)",
              }}
            >
              Nueva sesión
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FormalityRegisterPracticePage() {
  const defaultPreset = FORMALITY_REGISTER_SESSION_PRESETS.find((preset) => preset.id === "mixed-review") ??
    FORMALITY_REGISTER_SESSION_PRESETS[0];

  const [screen, setScreen] = useState<Screen>("setup");
  const [config, setConfig] = useState<SessionConfig>({
    presetId: defaultPreset.id,
    modes: [...defaultPreset.modes],
    difficulties: [...defaultPreset.difficulties],
    contexts: ["all"],
    count: defaultPreset.recommendedCount,
  });
  const [questions, setQuestions] = useState<RegisterQuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [lastConfig, setLastConfig] = useState<SessionConfig | null>(null);

  const currentQuestion = questions[currentIdx] ?? null;
  const currentAnswer = currentQuestion
    ? answers.find((answer) => answer.questionId === currentQuestion.id)
    : null;

  const handleStart = useCallback((sessionConfig: SessionConfig) => {
    const nextQuestions = buildQuiz(sessionConfig);
    setQuestions(nextQuestions);
    setCurrentIdx(0);
    setAnswers([]);
    setLastConfig(sessionConfig);
    setScreen("quiz");
  }, []);

  const handleSelectChoice = useCallback((choiceId: string) => {
    if (!currentQuestion) return;
    const existing = answers.find((answer) => answer.questionId === currentQuestion.id);
    if (existing) return;

    const record: AnswerRecord = {
      questionId: currentQuestion.id,
      selectedChoiceId: choiceId,
      correctChoiceId: currentQuestion.correctChoiceId,
      isCorrect: choiceId === currentQuestion.correctChoiceId,
      tags: currentQuestion.tags,
      mode: currentQuestion.mode,
      difficulty: currentQuestion.difficulty,
      context: currentQuestion.context,
    };

    setAnswers((prev) => [...prev, record]);
  }, [answers, currentQuestion]);

  const handleNext = useCallback(() => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      return;
    }

    setScreen("results");
  }, [currentIdx, questions.length]);

  useEffect(() => {
    if (screen === "quiz" && questions.length === 0) {
      setScreen("setup");
    }
  }, [questions.length, screen]);

  return (
    <main className="relative min-h-screen" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10">
        <div className="mb-6 flex items-center justify-between gap-3">
          <Link
            href="/gramatica/formalidad/registro"
            className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: ACCENT }}
          >
            ← Registro
          </Link>

          {screen !== "setup" && (
            <button
              onClick={() => setScreen("setup")}
              className="text-xs font-medium transition-opacity hover:opacity-70"
              style={{ color: "var(--ink-soft)" }}
            >
              Cambiar sesión
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
            話し方クイズ · Práctica de Registro
          </div>
          <h1 className="text-[clamp(1.9rem,4vw,2.5rem)] font-bold" style={{ color: "var(--ink)" }}>
            Quiz de Registro
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-7 sm:text-base" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
            Entrena el paso entre informal, neutro y formal base con foco en adecuación, naturalidad y lectura del contexto social.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {screen === "setup" && (
            <motion.div key="setup" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <SetupScreen config={config} onConfigChange={setConfig} onStart={() => handleStart(config)} />
            </motion.div>
          )}

          {screen === "quiz" && currentQuestion && (
            <QuestionScreen
              key={`q-${currentQuestion.id}`}
              question={currentQuestion}
              current={currentIdx + 1}
              total={questions.length}
              selectedChoiceId={currentAnswer?.selectedChoiceId ?? null}
              onSelect={handleSelectChoice}
              onNext={handleNext}
            />
          )}

          {screen === "results" && (
            <ResultsScreen
              key="results"
              questions={questions}
              answers={answers}
              onRestart={() => lastConfig && handleStart(lastConfig)}
              onNewQuiz={() => setScreen("setup")}
            />
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
