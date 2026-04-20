// src/app/gramatica/contadores/page.tsx
"use client";

import { useMemo, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import { COUNTERS, NUMBERS, type CounterEntry } from "@/data/grammar/counters";
import { RubyText } from "@/app/components/ui/Ruby";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";

const ACCENT = "#00695C";
const SOFT = "#80CBC4";
const GRADIENT = "linear-gradient(135deg, #B2DFDB 0%, #80CBC4 48%, #00695C 100%)";

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
        background: "rgba(255,255,255,0.78)",
        border: `1px solid ${withAlpha(color, 0.18)}`,
        boxShadow: `0 18px 44px ${withAlpha(color, 0.08)}`,
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
          className="mb-2 inline-flex items-center rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
          style={{
            color: accent,
            background: withAlpha(color, 0.12),
            border: `1px solid ${withAlpha(color, 0.2)}`,
          }}
        >
          {eyebrow ?? title}
        </div>

        <h2 className="text-xl font-bold leading-tight" style={{ color: "var(--ink)" }}>
          {title}
        </h2>

        {description ? (
          <p
            className="mt-2 text-sm leading-relaxed"
            style={{ color: "var(--ink-soft)", opacity: 0.78 }}
          >
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
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: string;
}) {
  return (
    <div
      className="rounded-[24px] border p-4"
      style={{
        background: withAlpha(SOFT, 0.1),
        border: `1px solid ${withAlpha(SOFT, 0.22)}`,
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-bold"
          style={{
            color: ACCENT,
            background: withAlpha(SOFT, 0.18),
            border: `1px solid ${withAlpha(SOFT, 0.28)}`,
          }}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-sm font-bold uppercase tracking-[0.12em]" style={{ color: ACCENT }}>
            {title}
          </p>
          <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function NumberStrip() {
  return (
    <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
      {NUMBERS.map((n) => (
        <div
          key={n.num}
          className="rounded-2xl border px-2 py-2 text-center"
          style={{
            background: withAlpha(SOFT, 0.08),
            border: `1px solid ${withAlpha(SOFT, 0.16)}`,
          }}
        >
          <span className="char-display block text-lg font-bold" style={{ color: ACCENT }}>
            {n.kanji}
          </span>
          <span
            className="mt-0.5 block text-[0.72rem]"
            style={{ color: "var(--ink-soft)", opacity: 0.7 }}
          >
            {n.reading}
          </span>
        </div>
      ))}
    </div>
  );
}


function ReadingGrid({ counter }: { counter: CounterEntry }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
      {counter.readings.map((r) => {
        const numberData = NUMBERS[r.num - 1];
        const irregular = Boolean(r.note);

        return (
          <div
            key={`${counter.counter}-${r.num}`}
            className="rounded-2xl border p-3 text-center"
            style={{
              background: irregular ? withAlpha(SOFT, 0.12) : withAlpha(SOFT, 0.06),
              border: `1px solid ${withAlpha(SOFT, irregular ? 0.28 : 0.16)}`,
            }}
          >
            <div className="text-[0.7rem] font-bold uppercase tracking-[0.12em]" style={{ color: ACCENT, opacity: 0.72 }}>
              {r.num}
            </div>

            <div className="char-display mt-1 text-lg font-bold" style={{ color: "var(--ink-soft)", opacity: 0.72 }}>
              {numberData?.kanji ?? r.num}
            </div>

            <div className="char-display mt-1 text-base font-bold" style={{ color: irregular ? ACCENT : "var(--ink)" }}>
              {r.reading}
            </div>

            <div
              className="mt-1 text-[0.68rem] leading-snug"
              style={{ color: irregular ? ACCENT : "var(--ink-soft)", opacity: irregular ? 0.95 : 0.7 }}
            >
              {irregular ? "lectura irregular" : numberData?.reading ?? ""}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CounterAccordionItem({
    counter,
    active,
    onToggle,
    }: {
    counter: CounterEntry;
    active: boolean;
    onToggle: () => void;
    }) {
    const irregularCount = counter.readings.filter((item) => Boolean(item.note)).length;
    const examples = counter.exampleSentences;

    return (
        <motion.div
        layout
        className="scroll-mt-28 rounded-[28px] border"
        style={{
            background: "rgba(255,255,255,0.88)",
            border: `1px solid ${active ? withAlpha(ACCENT, 0.32) : "rgba(26,26,46,0.10)"}`,
            boxShadow: active
            ? `0 18px 36px ${withAlpha(ACCENT, 0.10)}`
            : `0 10px 24px ${withAlpha(ACCENT, 0.05)}`,
        }}
        >
        <div
            className={active ? "sticky top-24 z-20 rounded-t-[28px]" : "rounded-[28px]"}
            style={{
            background: "rgba(255,255,255,0.96)",
            backdropFilter: active ? "blur(10px)" : "none",
            borderBottom: active ? `1px solid ${withAlpha(SOFT, 0.18)}` : "none",
            }}
        >
            <button
            type="button"
            onClick={onToggle}
            className="relative w-full text-left"
            >
            <div
                className="absolute inset-x-0 top-0 h-[2px]"
                style={{ background: active ? GRADIENT : withAlpha(SOFT, 0.3) }}
            />

            <div className="flex items-start gap-4 p-4 sm:p-5">
                <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl char-display text-2xl font-bold text-white sm:h-16 sm:w-16 sm:text-3xl"
                style={{
                    background: GRADIENT,
                    boxShadow: `0 8px 18px ${withAlpha(ACCENT, 0.22)}`,
                }}
                >
                {counter.counter}
                </div>

                <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                    <span className="char-display text-lg font-bold" style={{ color: ACCENT }}>
                    〜{counter.reading}
                    </span>

                    <span
                    className="rounded-full px-2 py-0.5 text-[0.68rem] font-bold uppercase tracking-[0.12em]"
                    style={{
                        color: ACCENT,
                        background: withAlpha(SOFT, 0.16),
                        border: `1px solid ${withAlpha(SOFT, 0.24)}`,
                    }}
                    >
                    {counter.level}
                    </span>
                </div>

                <p className="mt-1 text-base font-semibold leading-snug" style={{ color: "var(--ink)" }}>
                    {counter.meaning}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                    {counter.examples.map((example) => (
                    <span
                        key={example}
                        className="rounded-full px-2.5 py-1 text-xs font-semibold"
                        style={{
                        color: "var(--ink-soft)",
                        background: "rgba(255,255,255,0.82)",
                        border: `1px solid ${withAlpha(SOFT, 0.16)}`,
                        }}
                    >
                        {example}
                    </span>
                    ))}
                </div>
                </div>

                <span
                className="mt-1 shrink-0 text-lg font-bold transition-transform duration-200"
                style={{
                    color: ACCENT,
                    opacity: active ? 1 : 0.45,
                    transform: active ? "rotate(180deg)" : "rotate(0deg)",
                }}
                >
                ˅
                </span>
            </div>
            </button>
        </div>

        <AnimatePresence initial={false}>
            {active ? (
            <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22 }}
            >
                <div className="space-y-5 px-4 pb-4 pt-4 sm:px-5 sm:pb-5">
                <div className="grid grid-cols-2 gap-3">
                    <StatPill
                    label="lecturas"
                    value={`${counter.readings.length}`}
                    color={SOFT}
                    accent={ACCENT}
                    />
                    <StatPill
                    label="irregulares"
                    value={`${irregularCount}`}
                    color={SOFT}
                    accent={ACCENT}
                    />
                </div>

                <div>
                    <p
                    className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                    style={{ color: ACCENT }}
                    >
                    Del 1 al 10
                    </p>
                    <ReadingGrid counter={counter} />
                </div>

                <div
                    className="rounded-[24px] border p-4 sm:p-5"
                    style={{
                    background: withAlpha(SOFT, 0.08),
                    border: `1px solid ${withAlpha(SOFT, 0.18)}`,
                    }}
                >
                    <p
                    className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                    style={{ color: ACCENT }}
                    >
                    {examples.length > 1 ? "Ejemplos" : "Ejemplo"}
                    </p>

                    <div className="space-y-4">
                    {examples.map((example, index) => (
                        <div
                            key={`${counter.counter}-example-${index}`}
                            className={index > 0 ? "border-t pt-4" : ""}
                            style={index > 0 ? { borderColor: withAlpha(SOFT, 0.18) } : undefined}
                        >
                            <RubyText
                            segments={example.segments}
                            className="char-display text-xl leading-[2.2] sm:text-[1.45rem]"
                            style={{ color: "var(--ink)" }}
                            rtStyle={{
                                fontSize: "0.56em",
                                opacity: 0.9,
                                lineHeight: 1,
                                fontWeight: 700,
                            }}
                            />

                            <p
                            className="mt-3 text-base italic leading-relaxed"
                            style={{ color: "var(--ink-soft)", opacity: 0.76 }}
                            >
                            {example.translation}
                            </p>
                        </div>
                        ))}
                    </div>
                </div>
                </div>
            </motion.div>
            ) : null}
        </AnimatePresence>
        </motion.div>
    );
    }

export default function ContadoresPage() {
  const [openCounter, setOpenCounter] = useState<string | null>(COUNTERS[0]?.counter ?? null);

  const irregularCounters = useMemo(
    () => COUNTERS.filter((counter) => counter.readings.some((item) => Boolean(item.note))).length,
    []
  );

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
                background: "rgba(255,255,255,0.82)",
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
                      fontSize: "clamp(4.4rem, 10vw, 8rem)",
                      color: withAlpha(ACCENT, 0.08),
                      lineHeight: 1,
                    }}
                  >
                    助数詞
                  </div>

                  <div
                    className="mb-4 inline-flex items-center rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.18em]"
                    style={{
                      color: ACCENT,
                      background: withAlpha(SOFT, 0.12),
                      border: `1px solid ${withAlpha(SOFT, 0.22)}`,
                    }}
                  >
                    助数詞 · Contadores
                  </div>

                  <h1
                    className="char-display max-w-[12ch] text-4xl font-bold leading-tight sm:text-5xl"
                    style={{ color: "var(--ink)" }}
                  >
                    Contadores en Japonés
                  </h1>

                  <p
                    className="mt-4 max-w-[64ch] text-base leading-relaxed sm:text-lg"
                    style={{ color: "var(--ink-soft)", opacity: 0.8 }}
                  >
                    En japonés no basta con decir solo un número. Para contar objetos se usan
                    contadores según la forma, el tamaño o la categoría de lo que estás contando.
                    La clave es aprender el patrón y acostumbrarte a sus lecturas irregulares.
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <StatPill
                      label="contadores"
                      value={`${COUNTERS.length} patrones`}
                      color={SOFT}
                      accent={ACCENT}
                    />
                    <StatPill
                      label="números base"
                      value={`${NUMBERS.length} referencias`}
                      color={SOFT}
                      accent={ACCENT}
                    />
                    <StatPill
                      label="con irregularidad"
                      value={`${irregularCounters} casos`}
                      color={SOFT}
                      accent={ACCENT}
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
                <ShellCard color={SOFT} className="h-full p-5 sm:p-6">
                  <p
                    className="text-[0.72rem] font-bold uppercase tracking-[0.18em]"
                    style={{ color: ACCENT }}
                  >
                    Reglas rápidas
                  </p>

                  <h2 className="mt-1 text-2xl font-bold" style={{ color: "var(--ink)" }}>
                    Vista general
                  </h2>

                  <div className="mt-4 space-y-4">
                    <QuickRule
                      icon="数"
                      title="No se cuentan igual"
                      text="Objetos largos, planos, pequeños, personas o libros usan contadores distintos."
                    />
                    <QuickRule
                      icon="!"
                      title="Cuidado con 1, 6, 8 y 10"
                      text="Muchos contadores cambian lectura con いち, ろく, はち y じゅう. No siempre es una suma mecánica."
                    />
                    <QuickRule
                      icon="読"
                      title="Aprende contador + ejemplo"
                      text="Memorizar la categoría junto con una palabra típica hace mucho más natural recordar el uso."
                    />
                  </div>
                </ShellCard>
              </motion.aside>
            </section>

            <section className="mt-8 space-y-6">
                <SectionCard
                    eyebrow="Referencia"
                    title="Números base"
                    description="Ten a la vista las lecturas base del 1 al 10 antes de combinarlas con cada contador."
                    color={SOFT}
                    accent={ACCENT}
                >
                    <NumberStrip />
                </SectionCard>

                <SectionCard
                    eyebrow="Catálogo"
                    title="Contadores principales"
                    description="Abre un contador para ver sus lecturas del 1 al 10 y sus ejemplos con furigana."
                    color={SOFT}
                    accent={ACCENT}
                >
                    <div className="space-y-4">
                    {COUNTERS.map((counter, index) => (
                        <motion.div
                        key={counter.counter}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.03 }}
                        >
                        <CounterAccordionItem
                            counter={counter}
                            active={openCounter === counter.counter}
                            onToggle={() =>
                            setOpenCounter((current) =>
                                current === counter.counter ? null : counter.counter
                            )
                            }
                        />
                        </motion.div>
                    ))}
                    </div>
                </SectionCard>
                </section>
          </div>
        </div>
      </div>
    </main>
  );
}