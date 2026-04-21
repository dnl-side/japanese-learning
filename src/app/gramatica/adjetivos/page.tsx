// src/app/gramatica/adjetivos/page.tsx
"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ADJECTIVE_LIST,
  I_ADJ_CONJUGATIONS,
  NA_ADJ_CONJUGATIONS,
  II_ADJ_FORMS,
  COMPARISON_PATTERNS,
  type AdjType,
  type AdjConjRow,
} from "@/data/grammar/adjectives";
import { RubySegment, RubyText } from "@/app/components/ui/Ruby";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";

const ACCENT = "#6A1B9A";
const I_COLOR = "#CE93D8";
const I_ACCENT = "#6A1B9A";
const NA_COLOR = "#80CBC4";
const NA_ACCENT = "#00695C";
const COMP_COLOR = "#FFB74D";
const COMP_ACCENT = "#E65100";

type LessonTab = "i" | "na" | "comparison";
type JLPTLevel = "N5" | "N4" | "N3" | "N2" | "N1";

const JLPT_LEVELS: JLPTLevel[] = ["N5", "N4", "N3", "N2", "N1"];

function withAlpha(hex: string, alpha: number) {
  const clean = hex.replace("#", "");
  const normalized =
    clean.length === 3
      ? clean
          .split("")
          .map((char) => char + char)
          .join("")
      : clean;

  const r = parseInt(normalized.slice(0, 2), 16);
  const g = parseInt(normalized.slice(2, 4), 16);
  const b = parseInt(normalized.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function ShellCard({
  children,
  color,
  className = "",
}: {
  children: ReactNode;
  color: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[30px] border backdrop-blur-md ${className}`}
      style={{
        background: "rgba(255,255,255,0.76)",
        border: `1px solid ${withAlpha(color, 0.2)}`,
        boxShadow: `0 18px 42px ${withAlpha(color, 0.08)}`,
      }}
    >
      {children}
    </div>
  );
}

function SectionCard({
  eyebrow,
  title,
  description,
  color,
  accent,
  children,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  color: string;
  accent: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <ShellCard color={color} className={className}>
      <div className="border-b px-5 py-4 sm:px-6">
        <div
          className="mb-2 inline-flex items-center rounded-full px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.16em]"
          style={{
            color: accent,
            background: withAlpha(color, 0.12),
            border: `1px solid ${withAlpha(color, 0.22)}`,
          }}
        >
          {eyebrow ?? title}
        </div>
        <h2 className="text-xl font-bold leading-tight" style={{ color: "var(--ink)" }}>
          {title}
        </h2>
        {description ? (
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
            {description}
          </p>
        ) : null}
      </div>
      <div className="px-5 py-5 sm:px-6">{children}</div>
    </ShellCard>
  );
}

function StatPill({
  label,
  value,
  color,
  accent,
}: {
  label: string;
  value: string;
  color: string;
  accent: string;
}) {
  return (
    <div
      className="rounded-2xl border px-4 py-3"
      style={{
        background: withAlpha(color, 0.09),
        border: `1px solid ${withAlpha(color, 0.18)}`,
      }}
    >
      <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em]" style={{ color: accent }}>
        {label}
      </p>
      <p className="mt-1 text-lg font-semibold leading-tight" style={{ color: "var(--ink)" }}>
        {value}
      </p>
    </div>
  );
}

function QuickRule({
  jp,
  label,
  detail,
  color,
  accent,
}: {
  jp: string;
  label: string;
  detail: string;
  color: string;
  accent: string;
}) {
  return (
    <div
      className="rounded-[24px] border p-4"
      style={{
        background: withAlpha(color, 0.1),
        border: `1px solid ${withAlpha(color, 0.22)}`,
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className="flex h-14 min-w-[4.25rem] items-center justify-center rounded-2xl px-2"
          style={{
            background: withAlpha(color, 0.16),
            border: `1px solid ${withAlpha(color, 0.28)}`,
          }}
        >
          <span className="char-display whitespace-nowrap text-lg font-bold leading-none" style={{ color: accent }}>
            {jp}
          </span>
        </div>

        <div className="min-w-0">
          <p className="text-sm font-bold uppercase tracking-[0.12em]" style={{ color: accent }}>
            {label}
          </p>
          <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>
            {detail}
          </p>
        </div>
      </div>
    </div>
  );
}

function TabButton({
  active,
  label,
  color,
  accent,
  onClick,
}: {
  active: boolean;
  label: string;
  color: string;
  accent: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-[22px] border px-4 py-3 text-sm font-bold transition-all duration-200 sm:text-[0.95rem]"
      style={{
        background: active ? withAlpha(color, 0.18) : "rgba(255,255,255,0.72)",
        border: `1px solid ${active ? withAlpha(color, 0.5) : "rgba(26,26,46,0.12)"}`,
        color: active ? accent : "var(--ink-soft)",
        boxShadow: active ? `0 12px 28px ${withAlpha(color, 0.12)}` : "none",
      }}
    >
      {label}
    </button>
  );
}

function LevelButton({
  active,
  label,
  color,
  accent,
  onClick,
}: {
  active: boolean;
  label: JLPTLevel;
  color: string;
  accent: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border px-3 py-1.5 text-xs font-bold transition-all duration-200 sm:px-4 sm:py-2 sm:text-sm"
      style={{
        background: active ? withAlpha(color, 0.18) : "rgba(255,255,255,0.78)",
        border: `1px solid ${active ? withAlpha(color, 0.45) : "rgba(26,26,46,0.12)"}`,
        color: active ? accent : "var(--ink-soft)",
        boxShadow: active ? `0 10px 22px ${withAlpha(color, 0.1)}` : "none",
      }}
    >
      {label}
    </button>
  );
}

function ConjCard({ row, type }: { row: AdjConjRow; type: AdjType }) {
  const [open, setOpen] = useState(false);
  const color = type === "i" ? I_COLOR : NA_COLOR;
  const accent = type === "i" ? I_ACCENT : NA_ACCENT;

  return (
    <div
      className="overflow-hidden rounded-[24px] border"
      style={{
        background: "rgba(255,255,255,0.86)",
        border: `1px solid ${withAlpha(color, 0.24)}`,
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
        style={{ background: withAlpha(color, 0.08) }}
      >
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="char-display text-lg font-bold" style={{ color: accent }}>
              {row.form}
            </span>
            <span className="text-sm font-semibold" style={{ color: "var(--ink)" }}>
              {row.label}
            </span>
          </div>
        </div>

        <span
          className="shrink-0 text-sm transition-transform duration-200"
          style={{
            color: accent,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          ▾
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 sm:px-5">
              {row.note ? (
                <div
                  className="mb-4 rounded-2xl border px-4 py-3 text-sm leading-relaxed"
                  style={{
                    background: withAlpha(color, 0.08),
                    border: `1px solid ${withAlpha(color, 0.18)}`,
                    color: accent,
                  }}
                >
                  {row.note}
                </div>
              ) : null}

              <div className="space-y-3">
                {row.examples.map((ex, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border p-4"
                    style={{
                      background: withAlpha(color, 0.045),
                      border: `1px solid ${withAlpha(color, 0.12)}`,
                    }}
                  >
                    <RubyText
                        segments={ex.segments}
                        className="char-display text-lg leading-[2.05] sm:text-[1.28rem]"
                        style={{ color: "var(--ink)" }}
                        rtStyle={{
                            fontSize: "0.42em",
                            opacity: 0.8,
                            lineHeight: 1,
                        }}
                    />

                    <p
                        className="mt-3 text-base italic leading-relaxed"
                        style={{ color: "var(--ink-soft)", opacity: 0.76 }}
                    >
                        {ex.translation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function buildAdjRubySegments(adj: (typeof ADJECTIVE_LIST)[number]): RubySegment[] {
  const hasKanji = /[々一-龯]/.test(adj.dict);

  if (!hasKanji) {
    return [{ text: adj.dict }];
  }

  if (adj.type === "i" && adj.dict.endsWith("い") && adj.stem !== adj.dict) {
    const stemReading = adj.reading.slice(0, -1);
    const okurigana = adj.dict.slice(adj.stem.length);

    return [
      { text: adj.stem, ruby: stemReading },
      { text: okurigana },
    ];
  }

  return [{ text: adj.dict, ruby: adj.reading }];
}

function AdjStrip({
  type,
  level,
}: {
  type: AdjType;
  level: JLPTLevel;
}) {
  const list = ADJECTIVE_LIST.filter(
    (adj) => adj.type === type && adj.level === level
  );

  const color = type === "i" ? I_COLOR : NA_COLOR;
  const accent = type === "i" ? I_ACCENT : NA_ACCENT;

  if (list.length === 0) {
    return (
      <div
        className="rounded-[22px] border px-4 py-6 text-center text-sm"
        style={{
          background: withAlpha(color, 0.06),
          border: `1px solid ${withAlpha(color, 0.16)}`,
          color: "var(--ink-soft)",
        }}
      >
        No hay adjetivos cargados para {level} en esta categoría todavía.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {list.map((adj) => (
        <div
          key={`${adj.dict}-${adj.level}`}
          className="rounded-[22px] border px-4 py-3 text-center"
          style={{
            background: withAlpha(color, 0.09),
            border: `1px solid ${withAlpha(color, 0.2)}`,
            boxShadow: `0 10px 22px ${withAlpha(color, 0.06)}`,
          }}
        >
          <RubyText
            segments={buildAdjRubySegments(adj)}
            className="char-display block text-xl font-bold leading-[2.2] sm:text-[1.45rem]"
            style={{ color: accent }}
            rtStyle={{
              fontSize: "0.6em",
              opacity: 0.92,
              lineHeight: 1,
              fontWeight: 700,
            }}
          />

          <span
            className="mt-2 block text-sm leading-snug sm:text-[0.95rem]"
            style={{ color: "var(--ink-soft)", opacity: 0.78 }}
          >
            {adj.meaning}
          </span>
        </div>
      ))}
    </div>
  );
}

function ComparisonPatternCard({
  index,
  pattern,
  meaning,
  example,
}: {
  index: number;
  pattern: string;
  meaning: string;
  example: {
    segments: Parameters<typeof RubyText>[0]["segments"];
    translation: string;
  };
}) {
  return (
    <div
      className="rounded-[26px] border p-5"
      style={{
        background: "rgba(255,255,255,0.82)",
        border: `1px solid ${withAlpha(COMP_COLOR, 0.24)}`,
        boxShadow: `0 14px 34px ${withAlpha(COMP_COLOR, 0.08)}`,
      }}
    >
      <div className="mb-4 flex items-start gap-3">
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
          style={{ background: `linear-gradient(135deg, ${COMP_COLOR}, ${COMP_ACCENT})` }}
        >
          {index}
        </div>

        <div className="min-w-0">
          <p className="char-display text-lg font-bold" style={{ color: COMP_ACCENT }}>
            {pattern}
          </p>
          <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.75 }}>
            {meaning}
          </p>
        </div>
      </div>

      <div
        className="rounded-2xl border p-5"
        style={{
          background: withAlpha(COMP_COLOR, 0.08),
          border: `1px solid ${withAlpha(COMP_COLOR, 0.18)}`,
        }}
      >
        <RubyText
          segments={example.segments}
          className="char-display text-base leading-loose"
          style={{ color: "var(--ink)" }}
        />
        <p className="mt-2 text-sm italic" style={{ color: "var(--ink-soft)", opacity: 0.72 }}>
          {example.translation}
        </p>
      </div>
    </div>
  );
}

export default function AdjetivosPage() {
  const [tab, setTab] = useState<LessonTab>("i");
  const [selectedLevel, setSelectedLevel] = useState<JLPTLevel>("N5");

  const iCount = ADJECTIVE_LIST.filter((adj) => adj.type === "i").length;
  const naCount = ADJECTIVE_LIST.filter((adj) => adj.type === "na").length;

  const filteredICount = ADJECTIVE_LIST.filter(
    (adj) => adj.type === "i" && adj.level === selectedLevel
    ).length;

    const filteredNaCount = ADJECTIVE_LIST.filter(
    (adj) => adj.type === "na" && adj.level === selectedLevel
    ).length;

  return (
    <main
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: "var(--paper)" }}
    >
      <SakuraAnimation />

      <div className="relative z-10 w-full">
        <div className="mx-auto flex w-full justify-center px-4 pb-24 pt-8 sm:px-6 lg:px-8">
          <div className="w-full max-w-[1240px]">
            <Link
              href="/gramatica"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold shadow-sm backdrop-blur transition-all hover:-translate-y-0.5"
              style={{
                color: ACCENT,
                background: "rgba(255,255,255,0.8)",
                borderColor: withAlpha(ACCENT, 0.16),
                boxShadow: `0 10px 24px ${withAlpha(ACCENT, 0.08)}`,
              }}
            >
              <span aria-hidden="true">←</span>
              <span>Gramática</span>
            </Link>

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
                    style={{
                      fontSize: "clamp(4.6rem, 10vw, 8rem)",
                      color: withAlpha(ACCENT, 0.08),
                      lineHeight: 1,
                    }}
                  >
                    形容詞
                  </div>

                  <div
                    className="mb-4 inline-flex items-center rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.18em]"
                    style={{
                      color: ACCENT,
                      background: withAlpha(I_COLOR, 0.12),
                      border: `1px solid ${withAlpha(I_COLOR, 0.22)}`,
                    }}
                  >
                    形容詞 · Adjetivos
                  </div>

                  <h1
                    className="char-display max-w-[12ch] text-4xl font-bold leading-tight sm:text-5xl"
                    style={{ color: "var(--ink)" }}
                  >
                    Adjetivos en Japonés
                  </h1>

                  <p
                    className="mt-4 max-w-[62ch] text-base leading-relaxed sm:text-lg"
                    style={{ color: "var(--ink-soft)", opacity: 0.8 }}
                  >
                    Aprende a distinguir y conjugar los dos grandes grupos:
                    <span style={{ color: I_ACCENT, fontWeight: 700 }}> い-adjetivos</span> y
                    <span style={{ color: NA_ACCENT, fontWeight: 700 }}> な-adjetivos</span>.
                    Aquí la idea no es solo memorizar formas, sino ver claramente cómo se
                    comportan dentro de una frase.
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <StatPill
                      label="い-adjetivos"
                      value={`${iCount} ejemplos`}
                      color={I_COLOR}
                      accent={I_ACCENT}
                    />
                    <StatPill
                      label="な-adjetivos"
                      value={`${naCount} ejemplos`}
                      color={NA_COLOR}
                      accent={NA_ACCENT}
                    />
                    <StatPill
                      label="comparación"
                      value={`${COMPARISON_PATTERNS.length} patrones`}
                      color={COMP_COLOR}
                      accent={COMP_ACCENT}
                    />
                  </div>
                </ShellCard>
              </motion.div>

              <motion.aside
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: 0.05 }}
                className="lg:col-span-5"
              >
                <ShellCard color={NA_COLOR} className="h-full p-5 sm:p-6">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                      <p
                        className="text-[0.72rem] font-bold uppercase tracking-[0.18em]"
                        style={{ color: ACCENT }}
                      >
                        Diferencias rápidas
                      </p>
                      <h2 className="mt-1 text-2xl font-bold" style={{ color: "var(--ink)" }}>
                        Vista general
                      </h2>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <QuickRule
                      jp="高い"
                      label="い-adjetivo"
                      detail="Conjuga cambiando la terminación い. Antes de un sustantivo se usa directo: 高い山."
                      color={I_COLOR}
                      accent={I_ACCENT}
                    />
                    <QuickRule
                      jp="静か"
                      label="な-adjetivo"
                      detail="Antes de un sustantivo necesita な: 静かな部屋. En predicado funciona con です / だ."
                      color={NA_COLOR}
                      accent={NA_ACCENT}
                    />
                    <QuickRule
                      jp="より / ほど"
                      label="Comparaciones"
                      detail="En japonés normalmente no cambias el adjetivo en sí; cambias la estructura de la comparación."
                      color={COMP_COLOR}
                      accent={COMP_ACCENT}
                    />
                  </div>
                </ShellCard>
              </motion.aside>
            </section>

            <div className="mt-8">
              <ShellCard color={ACCENT} className="p-3">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  <TabButton
                    active={tab === "i"}
                    label="い-adjetivos"
                    color={I_COLOR}
                    accent={I_ACCENT}
                    onClick={() => setTab("i")}
                  />
                  <TabButton
                    active={tab === "na"}
                    label="な-adjetivos"
                    color={NA_COLOR}
                    accent={NA_ACCENT}
                    onClick={() => setTab("na")}
                  />
                  <TabButton
                    active={tab === "comparison"}
                    label="Comparaciones"
                    color={COMP_COLOR}
                    accent={COMP_ACCENT}
                    onClick={() => setTab("comparison")}
                  />
                </div>
              </ShellCard>
            </div>

            <div className="mt-6">
              <ShellCard color={ACCENT} className="p-5 sm:p-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="min-w-0">
                    <div
                      className="inline-flex items-center rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                      style={{
                        color: ACCENT,
                        background: withAlpha(I_COLOR, 0.12),
                        border: `1px solid ${withAlpha(I_COLOR, 0.22)}`,
                      }}
                    >
                      Practice
                    </div>

                    <h2 className="mt-3 text-xl font-bold" style={{ color: "var(--ink)" }}>
                      Pon a prueba los adjetivos
                    </h2>

                    <p
                      className="mt-2 max-w-[60ch] text-sm leading-relaxed sm:text-[0.95rem]"
                      style={{ color: "var(--ink-soft)", opacity: 0.78 }}
                    >
                      Practica tipo de adjetivo, conjugaciones, uso en frases, comparación y producción.
                      Ideal para repasar después de estudiar la teoría.
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {["い / な", "conjugación", "frases", "comparación", "producción"].map((item) => (
                        <span
                          key={item}
                          className="rounded-full px-3 py-1 text-xs font-semibold"
                          style={{
                            color: ACCENT,
                            background: withAlpha(I_COLOR, 0.1),
                            border: `1px solid ${withAlpha(I_COLOR, 0.18)}`,
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="shrink-0">
                    <Link
                      href="/gramatica/adjetivos/quiz"
                      className="inline-flex items-center justify-center rounded-[22px] px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
                      style={{
                        background: `linear-gradient(135deg, ${I_COLOR}, ${ACCENT})`,
                        boxShadow: `0 14px 28px ${withAlpha(ACCENT, 0.18)}`,
                      }}
                    >
                      Ir a practicar →
                    </Link>
                  </div>
                </div>
              </ShellCard>
            </div>

            <AnimatePresence mode="wait">
              {tab === "i" ? (
                <motion.section
                    key="i"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.22 }}
                    className="mt-8 space-y-6"
                >
                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
                    <div className="space-y-6">
                        <SectionCard
                        eyebrow="い-adjetivos"
                        title="Conjugaciones principales"
                        description="Ábrelas una por una para revisar forma, regla y ejemplos."
                        color={I_COLOR}
                        accent={I_ACCENT}
                        >
                        <div className="space-y-3">
                            {I_ADJ_CONJUGATIONS.map((row, index) => (
                            <motion.div
                                key={row.label}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.04 }}
                            >
                                <ConjCard row={row} type="i" />
                            </motion.div>
                            ))}
                        </div>
                        </SectionCard>
                    </div>

                    <div className="space-y-6 xl:sticky xl:top-24 xl:self-start">
                        <SectionCard
                        eyebrow="Excepción"
                        title="いい / よい"
                        description="Se dice いい en diccionario, pero muchas conjugaciones salen de よい."
                        color={I_COLOR}
                        accent={I_ACCENT}
                        >
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-2">
                            {II_ADJ_FORMS.map((form) => (
                            <div
                                key={form.label}
                                className="rounded-2xl border px-3 py-3"
                                style={{
                                background: withAlpha(I_COLOR, 0.08),
                                border: `1px solid ${withAlpha(I_COLOR, 0.18)}`,
                                }}
                            >
                                <p className="char-display text-base font-bold" style={{ color: I_ACCENT }}>
                                {form.form}
                                </p>
                                <p className="mt-1 text-xs" style={{ color: "var(--ink-soft)", opacity: 0.72 }}>
                                {form.label}
                                </p>
                            </div>
                            ))}
                        </div>
                        </SectionCard>

                        <SectionCard
                        eyebrow="Regla clave"
                        title="Cómo reconocerlos"
                        color={I_COLOR}
                        accent={I_ACCENT}
                        >
                        <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                            <p>
                            La forma básica suele terminar en <span className="char-display font-bold" style={{ color: I_ACCENT }}>い</span>.
                            </p>
                            <p>
                            Antes de sustantivo no necesitas partícula extra:{" "}
                            <span className="char-display">高い山</span>.
                            </p>
                            <p>
                            Para unir con otra idea aparece mucho la forma{" "}
                            <span className="char-display font-bold" style={{ color: I_ACCENT }}>〜くて</span>.
                            </p>
                        </div>
                        </SectionCard>
                    </div>
                    </div>

                    <SectionCard
                        eyebrow="Banco visual"
                        title={`Lista de い-adjetivos · ${selectedLevel} (${filteredICount})`}
                        color={I_COLOR}
                        accent={I_ACCENT}
                        >
                        <div className="mb-5 flex flex-wrap gap-2">
                            {JLPT_LEVELS.map((level) => (
                            <LevelButton
                                key={level}
                                label={level}
                                active={selectedLevel === level}
                                color={I_COLOR}
                                accent={I_ACCENT}
                                onClick={() => setSelectedLevel(level)}
                            />
                            ))}
                        </div>

                        <AdjStrip type="i" level={selectedLevel} />
                    </SectionCard>
                </motion.section>
                ) : null}

              {tab === "na" ? (
                <motion.section
                    key="na"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.22 }}
                    className="mt-8 space-y-6"
                >
                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
                    <div className="space-y-6">
                        <SectionCard
                        eyebrow="な-adjetivos"
                        title="Conjugaciones principales"
                        description="La diferencia importante está en cómo conectan con sustantivos y con です / だ."
                        color={NA_COLOR}
                        accent={NA_ACCENT}
                        >
                        <div className="space-y-3">
                            {NA_ADJ_CONJUGATIONS.map((row, index) => (
                            <motion.div
                                key={row.label}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.04 }}
                            >
                                <ConjCard row={row} type="na" />
                            </motion.div>
                            ))}
                        </div>
                        </SectionCard>
                    </div>

                    <div className="space-y-6 xl:sticky xl:top-24 xl:self-start">
                        <SectionCard
                        eyebrow="Diferencia clave"
                        title="Uso en la frase"
                        color={NA_COLOR}
                        accent={NA_ACCENT}
                        >
                        <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                            <p>
                            Antes de sustantivo usan{" "}
                            <span className="char-display font-bold" style={{ color: NA_ACCENT }}>な</span>:{" "}
                            <span className="char-display">静かな部屋</span>.
                            </p>
                            <p>
                            Como predicado suelen aparecer con{" "}
                            <span className="char-display font-bold" style={{ color: NA_ACCENT }}>です / だ</span>:{" "}
                            <span className="char-display">静かです</span>.
                            </p>
                            <p>
                            La conexión equivalente a 〜くて suele ser{" "}
                            <span className="char-display font-bold" style={{ color: NA_ACCENT }}>で</span>:{" "}
                            <span className="char-display">静かで広い</span>.
                            </p>
                        </div>
                        </SectionCard>

                        <SectionCard
                        eyebrow="Memoria rápida"
                        title="Qué no olvidar"
                        color={NA_COLOR}
                        accent={NA_ACCENT}
                        >
                        <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                            <p>No todos los adjetivos que terminan en い son い-adjetivos.</p>
                            <p>
                            Algunos que visualmente parecen adjetivos funcionan como esta familia nominal.
                            </p>
                            <p>
                            Cuando dudes, revisa si antes del sustantivo pide{" "}
                            <span className="char-display font-bold" style={{ color: NA_ACCENT }}>な</span>.
                            </p>
                        </div>
                        </SectionCard>
                    </div>
                    </div>

                    <SectionCard
                        eyebrow="Banco visual"
                        title={`Lista de な-adjetivos · ${selectedLevel} (${filteredNaCount})`}
                        color={NA_COLOR}
                        accent={NA_ACCENT}
                        >
                        <div className="mb-5 flex flex-wrap gap-2">
                            {JLPT_LEVELS.map((level) => (
                            <LevelButton
                                key={level}
                                label={level}
                                active={selectedLevel === level}
                                color={NA_COLOR}
                                accent={NA_ACCENT}
                                onClick={() => setSelectedLevel(level)}
                            />
                            ))}
                        </div>

                        <AdjStrip type="na" level={selectedLevel} />
                    </SectionCard>
                </motion.section>
                ) : null}

              {tab === "comparison" ? (
                <motion.section
                  key="comparison"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22 }}
                  className="mt-8 space-y-6"
                >
                  <SectionCard
                    eyebrow="Comparaciones"
                    title="Cómo comparar en japonés"
                    description="A diferencia del español, normalmente no alteras el adjetivo con una forma comparativa propia. Lo natural es usar patrones fijos como より, ほど o いちばん."
                    color={COMP_COLOR}
                    accent={COMP_ACCENT}
                  >
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                      <StatPill
                        label="Idea central"
                        value="estructura fija"
                        color={COMP_COLOR}
                        accent={COMP_ACCENT}
                      />
                      <StatPill
                        label="comparación"
                        value="A は B より..."
                        color={COMP_COLOR}
                        accent={COMP_ACCENT}
                      />
                      <StatPill
                        label="superlativo"
                        value="いちばん"
                        color={COMP_COLOR}
                        accent={COMP_ACCENT}
                      />
                    </div>
                  </SectionCard>

                  <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                    {COMPARISON_PATTERNS.map((pattern, index) => (
                      <motion.div
                        key={pattern.pattern}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <ComparisonPatternCard
                          index={index + 1}
                          pattern={pattern.pattern}
                          meaning={pattern.meaning}
                          example={pattern.example}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}