// src/app/gramatica/condicionales/page.tsx

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import {
  COMPARISON_MATRIX,
  CONDITIONALS,
  SIDE_BY_SIDE,
  type Conditional,
} from "@/data/grammar/conditionals";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";
import { RubyText } from "@/app/components/ui/Ruby";

const ACCENT = "#388E3C";
const ACCENT_SOFT = "rgba(56,142,60,";
const GRADIENT = "linear-gradient(135deg, #81C784, #388E3C)";

const PANEL_STYLE = {
  background: "rgba(255,255,255,0.84)",
  border: `1px solid ${ACCENT_SOFT}0.14)`,
  boxShadow: `0 14px 34px ${ACCENT_SOFT}0.06)`,
  backdropFilter: "blur(10px)",
} as const;

const PANEL_STYLE_SOFT = {
  background: "rgba(255,255,255,0.9)",
  border: `1px solid ${ACCENT_SOFT}0.12)`,
  boxShadow: `0 10px 24px ${ACCENT_SOFT}0.05)`,
  backdropFilter: "blur(10px)",
} as const;

const GOLD_STYLE = {
  background: "rgba(255,248,235,0.92)",
  border: "1px solid rgba(245,158,11,0.22)",
  boxShadow: "0 12px 28px rgba(245,158,11,0.08)",
  backdropFilter: "blur(10px)",
} as const;

type SectionKey = "base" | "detail" | "compare";

const SECTIONS: { key: SectionKey; label: string; jp: string }[] = [
  { key: "base", label: "Base", jp: "基本" },
  { key: "detail", label: "Detalle", jp: "詳細" },
  { key: "compare", label: "Comparar", jp: "比較" },
];

const COND_COLOR: Record<string, { color: string; accent: string; name: string }> = {
  to: { color: "#90CAF9", accent: "#1565C0", name: "と" },
  ba: { color: "#A5D6A7", accent: "#2E7D32", name: "ば" },
  tara: { color: "#FFAB40", accent: "#E65100", name: "たら" },
  nara: { color: "#CE93D8", accent: "#6A1B9A", name: "なら" },
};

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[28px] px-5 py-6 sm:px-7 sm:py-7" style={PANEL_STYLE}>
      <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
        {eyebrow}
      </p>
      <h2 className="mt-2 text-xl font-bold sm:text-2xl" style={{ color: "var(--ink)" }}>
        {title}
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 sm:text-[0.95rem]" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>
        {description}
      </p>
    </div>
  );
}

function BaseSection() {
  return (
    <section id="base" className="scroll-mt-28 space-y-5 sm:space-y-6">
      <SectionIntro
        eyebrow="基本 — Base conceptual"
        title="Los 4 condicionales, ordenados de forma visual"
        description="La idea de esta pantalla no es solo listar reglas, sino ayudarte a distinguir rápido qué matiz expresa cada forma. Primero ves el panorama completo, luego la lógica de decisión, y después bajas al detalle."
      />

      <div className="rounded-[28px] px-5 py-6 sm:px-7 sm:py-7" style={PANEL_STYLE_SOFT}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
              Vista rápida
            </p>
            <h3 className="mt-1 text-lg font-bold sm:text-xl" style={{ color: "var(--ink)" }}>
              Qué representa cada condicional
            </h3>
          </div>
          <p className="max-w-xl text-sm leading-7" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
            El español agrupa todo bajo “si”, pero en japonés el matiz cambia bastante según la relación entre A y B.
          </p>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {CONDITIONALS.map((c) => (
            <div
              key={c.key}
              className="rounded-[22px] border p-4 sm:p-4"
              style={{
                background: `${c.color}12`,
                border: `1px solid ${c.color}40`,
                boxShadow: `0 8px 18px ${c.color}18`,
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl char-display text-lg font-bold"
                  style={{ background: `${c.color}35`, color: c.accent }}
                >
                  {c.jp}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold" style={{ color: c.accent }}>
                    {c.title}
                  </p>
                  <p className="text-[0.72rem] uppercase tracking-[0.14em]" style={{ color: c.accent, opacity: 0.7 }}>
                    {c.romaji}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>
                {c.summary}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[28px] px-5 py-6 sm:px-7 sm:py-7" style={PANEL_STYLE_SOFT}>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
                Guía rápida
              </p>
              <h3 className="mt-1 text-lg font-bold sm:text-xl" style={{ color: "var(--ink)" }}>
                Cómo decidir cuál usar
              </h3>
            </div>
            <p className="max-w-lg text-sm leading-7" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
              Piensa en la intención antes de mirar la forma verbal.
            </p>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              {
                q: "¿El resultado es automático, inevitable o ley natural?",
                a: "と",
                meta: COND_COLOR.to,
              },
              {
                q: "¿Es una condición general, hipotética o más formal?",
                a: "ば",
                meta: COND_COLOR.ba,
              },
              {
                q: "¿Quieres expresar secuencia temporal o una opción versátil?",
                a: "たら",
                meta: COND_COLOR.tara,
              },
              {
                q: "¿Te basas en un contexto previo o algo que el otro dijo?",
                a: "なら",
                meta: COND_COLOR.nara,
              },
            ].map((row, i) => (
              <div
                key={i}
                className="flex gap-3 rounded-[22px] border p-4"
                style={{ background: `${row.meta.color}10`, border: `1px solid ${row.meta.color}35` }}
              >
                <div
                  className="flex h-10 w-12 shrink-0 items-center justify-center rounded-xl char-display text-base font-bold text-white"
                  style={{ background: row.meta.accent }}
                >
                  {row.a}
                </div>
                <p className="text-sm leading-6" style={{ color: "var(--ink-soft)" }}>
                  {row.q}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] px-5 py-6 sm:px-7 sm:py-7" style={GOLD_STYLE}>
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em]" style={{ color: "#D97706" }}>
            Regla de supervivencia
          </p>
          <h3 className="mt-2 text-lg font-bold sm:text-xl" style={{ color: "#7C2D12" }}>
            Cuando dudes, usa たら
          </h3>
          <p className="mt-3 text-sm leading-7" style={{ color: "#7C2D12", opacity: 0.88 }}>
            Es el condicional más flexible para conversación real. Tolera intención, petición, invitación, orden y además también sirve para secuencia temporal.
          </p>

          <div className="mt-5 space-y-3">
            {[
              "と se reserva más para resultados automáticos o inevitables.",
              "ば suena más abstracto, general o formal que たら.",
              "なら funciona mejor cuando ya existe una premisa previa en la conversación.",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 rounded-[20px] border p-3" style={{ border: "1px solid rgba(245,158,11,0.18)", background: "rgba(255,255,255,0.5)" }}>
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ background: "#F59E0B" }} />
                <p className="text-sm leading-6" style={{ color: "#7C2D12" }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ConditionalCard({ c, defaultOpen = false }: { c: Conditional; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className="overflow-hidden rounded-[28px] border"
      style={{
        background: "rgba(255,255,255,0.88)",
        border: `1px solid ${c.color}52`,
        boxShadow: `0 14px 30px ${c.color}12`,
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="h-1.5" style={{ background: `linear-gradient(90deg, ${c.color}, ${c.accent})` }} />

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors sm:px-6 sm:py-6"
        style={{ background: open ? `${c.color}12` : "transparent" }}
      >
        <div className="flex min-w-0 items-start gap-4">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-lg font-bold"
            style={{ background: `${c.color}28`, color: c.accent, borderColor: `${c.color}55` }}
          >
            <span className="char-display">{c.jp}</span>
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="char-display text-xl font-bold" style={{ color: c.accent }}>
                {c.jp}
              </span>
              <span className="text-base font-bold sm:text-lg" style={{ color: "var(--ink)" }}>
                {c.title}
              </span>
              <span className="rounded-full px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em]" style={{ background: `${c.color}1A`, color: c.accent }}>
                {c.romaji}
              </span>
            </div>
            <p className="mt-2 max-w-3xl text-sm leading-7" style={{ color: "var(--ink-soft)", opacity: 0.8 }}>
              {c.summary}
            </p>
          </div>
        </div>

        <span
          className="mt-2 shrink-0 text-base transition-transform duration-200"
          style={{ color: c.accent, transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ▾
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 sm:px-6 sm:pb-6">
              <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-[22px] border p-4" style={{ background: `${c.color}10`, border: `1px solid ${c.color}32` }}>
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em]" style={{ color: c.accent }}>
                    Uso principal
                  </p>
                  <p className="mt-2 text-sm leading-7" style={{ color: "var(--ink-soft)" }}>
                    {c.mainUse}
                  </p>
                </div>

                <div className="rounded-[22px] border p-4" style={{ background: "rgba(248,250,252,0.9)", border: `1px solid ${c.color}22` }}>
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em]" style={{ color: c.accent }}>
                    Restricciones
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {c.restrictions.map((r, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-[0.58rem] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: c.accent }} />
                        <span className="text-sm leading-6" style={{ color: "var(--ink-soft)" }}>
                          {r}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 rounded-[24px] border overflow-hidden" style={{ border: `1px solid ${c.color}30` }}>
                <div className="px-4 py-3" style={{ background: `${c.color}12` }}>
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em]" style={{ color: c.accent }}>
                    Formación
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-[560px] w-full text-sm">
                    <thead>
                      <tr style={{ background: `${c.color}0F` }}>
                        <th className="px-4 py-3 text-left font-bold" style={{ color: c.accent }}>Tipo</th>
                        <th className="px-4 py-3 text-left font-bold" style={{ color: c.accent }}>Ejemplo</th>
                        <th className="px-4 py-3 text-left font-bold" style={{ color: c.accent }}>Regla</th>
                        <th className="px-4 py-3 text-left font-bold" style={{ color: c.accent }}>Afirmativo</th>
                        <th className="px-4 py-3 text-left font-bold" style={{ color: c.accent, opacity: 0.72 }}>Negativo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {c.formation.map((f, i) => (
                        <tr key={i} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.92)" : "rgba(248,250,252,0.75)" }}>
                          <td className="px-4 py-3 font-semibold" style={{ color: "var(--ink-soft)" }}>{f.type}</td>
                          <td className="px-4 py-3 char-display font-bold" style={{ color: "var(--ink)" }}>{f.example}</td>
                          <td className="px-4 py-3 text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>{f.rule}</td>
                          <td className="px-4 py-3 char-display font-bold" style={{ color: c.accent }}>{f.result}</td>
                          <td className="px-4 py-3 char-display text-sm" style={{ color: "var(--ink-soft)", opacity: 0.72 }}>{f.negative ?? "—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em]" style={{ color: c.accent }}>
                  Ejemplos
                </p>
                <div className="mt-3 grid gap-3 xl:grid-cols-2">
                  {c.examples.map((ex, i) => (
                    <div key={i} className="rounded-[22px] border p-4" style={{ background: `${c.color}08`, border: `1px solid ${c.color}26` }}>
                      <RubyText
                        segments={ex.segments}
                        className="char-display text-sm leading-loose sm:text-[0.95rem]"
                        style={{ color: "var(--ink)" }}
                      />
                      <p className="mt-2 text-sm italic leading-6" style={{ color: "var(--ink-soft)", opacity: 0.74 }}>
                        {ex.translation}
                      </p>
                      {ex.note && (
                        <p className="mt-3 rounded-xl p-3 text-xs leading-6" style={{ background: `${c.color}16`, color: c.accent }}>
                          💡 {ex.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="mt-4 rounded-[22px] border p-4"
                style={{ background: "rgba(254,242,242,0.9)", border: "1px solid rgba(220,38,38,0.18)" }}
              >
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em]" style={{ color: "#B91C1C" }}>
                  Cuándo no usarlo
                </p>

                <p className="mt-2 text-sm leading-7" style={{ color: "#991B1B" }}>
                  {"\u00A0"}
                  {c.whenNotToUse}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DetailSection() {
  return (
    <section id="detail" className="scroll-mt-28 space-y-5 sm:space-y-6">
      <SectionIntro
        eyebrow="詳細 — Detalle por condicional"
        title="Profundidad, pero sin saturar la pantalla"
        description="Abrí solo la tarjeta que necesites. Así la pantalla se mantiene limpia y a la vez cada bloque tiene suficiente espacio para formación, ejemplos y restricciones."
      />

      <div className="space-y-4">
        {CONDITIONALS.map((c, i) => (
          <motion.div
            key={c.key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <ConditionalCard c={c} defaultOpen={i === 0} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CompareSection() {
  return (
    <section id="compare" className="scroll-mt-28 space-y-5 sm:space-y-6">
      <SectionIntro
        eyebrow="比較 — Comparativas"
        title="Comparación lado a lado para fijar el matiz"
        description="Después de entender cada bloque por separado, aquí puedes ver qué permite cada condicional y cómo cambia la intención cuando la oración base se reformula."
      />

      <div className="rounded-[28px] px-5 py-6 sm:px-7 sm:py-7" style={PANEL_STYLE_SOFT}>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
              Matriz de compatibilidad
            </p>
            <h3 className="mt-1 text-lg font-bold sm:text-xl" style={{ color: "var(--ink)" }}>
              Qué acepta cada forma
            </h3>
          </div>
          <div className="flex flex-wrap gap-3 text-xs" style={{ color: "var(--ink-soft)" }}>
            <span><strong style={{ color: "#2E7D32" }}>✓</strong> Compatible</span>
            <span><strong style={{ color: "#F57F17" }}>△</strong> Limitado</span>
            <span><strong style={{ color: "#C62828" }}>✗</strong> No corresponde</span>
          </div>
        </div>

        <div className="mt-5 overflow-x-auto rounded-[24px] border" style={{ border: `1px solid ${ACCENT_SOFT}0.14)` }}>
          <table className="min-w-[620px] w-full text-sm">
            <thead>
              <tr style={{ background: `${ACCENT_SOFT}0.08)` }}>
                <th className="px-4 py-3 text-left font-bold" style={{ color: ACCENT }}>Característica</th>
                {(["to", "ba", "tara", "nara"] as const).map((k) => (
                  <th key={k} className="px-4 py-3 text-center char-display font-bold" style={{ color: COND_COLOR[k].accent }}>
                    {COND_COLOR[k].name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_MATRIX.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.95)" : "rgba(248,250,252,0.8)" }}>
                  <td className="px-4 py-3" style={{ color: "var(--ink-soft)" }}>{row.feature}</td>
                  {[row.to, row.ba, row.tara, row.nara].map((value, index) => {
                    const color = value === "✓"
                      ? "#2E7D32"
                      : value === "✗"
                        ? "#C62828"
                        : value === "△"
                          ? "#F57F17"
                          : "var(--ink-soft)";

                    return (
                      <td key={index} className="px-4 py-3 text-center font-bold" style={{ color }}>
                        {value}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        {SIDE_BY_SIDE.map((topic, ti) => (
          <motion.div
            key={topic.topic}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: ti * 0.06 }}
            className="rounded-[28px] px-5 py-6 sm:px-7 sm:py-7"
            style={PANEL_STYLE_SOFT}
          >
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
              Ejemplo contrastivo
            </p>
            <h3 className="mt-2 text-lg font-bold sm:text-xl" style={{ color: "var(--ink)" }}>
              {topic.topic}
            </h3>
            <p className="mt-1 text-sm leading-7" style={{ color: "var(--ink-soft)", opacity: 0.74 }}>
              {topic.base}
            </p>

            <div className="mt-5 space-y-3">
              {topic.variations.map((variation, i) => {
                const meta = COND_COLOR[variation.cond];
                return (
                  <div
                    key={i}
                    className="rounded-[22px] border p-4"
                    style={{ background: `${meta.color}10`, border: `1px solid ${meta.color}30` }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="flex h-9 w-11 shrink-0 items-center justify-center rounded-xl char-display text-sm font-bold text-white"
                        style={{ background: meta.accent }}
                      >
                        {meta.name}
                      </div>
                      <div className="min-w-0 flex-1">
                        <RubyText
                          segments={variation.sentence}
                          className="char-display text-sm leading-loose sm:text-[0.95rem]"
                          style={{ color: "var(--ink)" }}
                        />
                        <p className="mt-2 text-sm italic leading-6" style={{ color: "var(--ink-soft)", opacity: 0.74 }}>
                          {variation.translation}
                        </p>
                        <p className="mt-3 rounded-xl p-3 text-xs leading-6" style={{ background: `${meta.color}18`, color: meta.accent }}>
                          {variation.nuance}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default function CondicionalesPage() {
  const [activeSection, setActiveSection] = useState<SectionKey>("base");

    const renderActiveSection = () => {
    switch (activeSection) {
      case "base":
        return <BaseSection />;
      case "detail":
        return <DetailSection />;
      case "compare":
        return <CompareSection />;
      default:
        return <BaseSection />;
    }
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />

      <div className="relative z-10 flex justify-center px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1180px]">
          <div className="mx-auto w-full max-w-[1080px]">
            <Link
              href="/gramatica"
              className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: ACCENT }}
            >
              ← Gramática
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42 }}
              className="mt-4 rounded-[32px] px-6 py-7 sm:px-8 sm:py-8"
              style={PANEL_STYLE}
            >
              <div className="mx-auto max-w-3xl text-center">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                  style={{
                    color: ACCENT,
                    background: `${ACCENT_SOFT}0.08)`,
                    border: `1px solid ${ACCENT_SOFT}0.14)`,
                  }}
                >
                  条件文 · Condicionales
                </div>

                <h1 className="mt-4 char-display text-3xl font-bold sm:text-4xl" style={{ color: "var(--ink)" }}>
                  Oraciones condicionales
                </h1>

                <p className="mt-4 text-sm leading-7 sm:text-[0.95rem]" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>
                  Mientras el español usa solo “si”, el japonés divide la idea condicional según el matiz: resultado natural
                  (<span className="char-display"> と</span>), hipótesis general (<span className="char-display"> ば</span>),
                  secuencia o condición versátil (<span className="char-display"> たら</span>) y contexto previo
                  (<span className="char-display"> なら</span>).
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {CONDITIONALS.map((c) => (
                  <div
                    key={c.key}
                    className="rounded-[22px] border px-4 py-4 text-left"
                    style={{ background: `${c.color}0F`, border: `1px solid ${c.color}30` }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="char-display text-xl font-bold" style={{ color: c.accent }}>
                        {c.jp}
                      </span>
                      <span className="text-sm font-bold" style={{ color: c.accent }}>
                        {c.title}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.8 }}>
                      {c.summary}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mx-auto w-full max-w-[1080px]">
            <div className="sticky top-4 z-20 mt-6 mb-10 w-full">
              <div
                className="grid grid-cols-3 gap-1 rounded-[24px] border p-1.5"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  border: `1px solid ${ACCENT_SOFT}0.14)`,
                  boxShadow: `0 10px 24px ${ACCENT_SOFT}0.08)`,
                  backdropFilter: "blur(12px)",
                }}
              >
                {SECTIONS.map((section) => (
                  <button
                    key={section.key}
                    onClick={() => setActiveSection(section.key)}
                    className="rounded-[18px] px-2 py-2.5 text-center text-xs font-semibold transition-all sm:px-3"
                    style={{
                      background: activeSection === section.key ? GRADIENT : "transparent",
                      color: activeSection === section.key ? "white" : "var(--ink-soft)",
                      boxShadow: activeSection === section.key ? `0 8px 18px ${ACCENT_SOFT}0.16)` : "none",
                    }}
                  >
                    <span className="char-display block text-[0.64rem] opacity-75">{section.jp}</span>
                    <span>{section.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[1080px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22 }}
              >
                {renderActiveSection()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}