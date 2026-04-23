// src/app/gramatica/formalidad/keigo/page.tsx

"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";
import { RubyText } from "@/app/components/ui/Ruby";
import {
  KEIGO_MODULE,
  type KeigoContext,
} from "@/data/grammar/keigo";

const ACCENT = "#7C3AED";
const ACCENT_SOFT = "rgba(124,58,237,";
const GRADIENT = "linear-gradient(135deg, #DDD6FE 0%, #7C3AED 100%)";
const PRACTICE_HREF = "/gramatica/formalidad/keigo/practica";
const REGISTRO_HREF = "/gramatica/formalidad/registro";

type SectionKey = "base" | "verbs" | "phrases" | "mistakes" | "scenarios";

const SECTION_TABS: Array<{
  key: SectionKey;
  label: string;
  jp: string;
  desc: string;
}> = [
  {
    key: "base",
    label: "Base",
    jp: "基本",
    desc: "Reglas, tipos y patrones",
  },
  {
    key: "verbs",
    label: "Verbos",
    jp: "動詞",
    desc: "Pares clave de keigo",
  },
  {
    key: "phrases",
    label: "Frases fijas",
    jp: "定型表現",
    desc: "Teléfono, email, tienda",
  },
  {
    key: "mistakes",
    label: "Errores",
    jp: "注意",
    desc: "Qué evitar y por qué",
  },
  {
    key: "scenarios",
    label: "Escenarios",
    jp: "場面",
    desc: "Uso real por contexto",
  },
];

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

function StickyTabs({
  activeSection,
  onChange,
}: {
  activeSection: SectionKey;
  onChange: (key: SectionKey) => void;
}) {
  return (
    <div className="sticky top-3 z-20 mt-8">
      <div
        className="overflow-x-auto rounded-[24px] border px-2 py-2 backdrop-blur"
        style={{
          background: "rgba(255,255,255,0.88)",
          borderColor: `${ACCENT_SOFT}0.10)`,
          boxShadow: `0 12px 30px ${ACCENT_SOFT}0.10)`,
        }}
      >
        <div className="flex min-w-max gap-2">
          {SECTION_TABS.map((tab) => {
            const active = activeSection === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => onChange(tab.key)}
                className="rounded-2xl px-4 py-3 text-left transition-all duration-200"
                style={{
                  color: active ? "white" : "var(--ink)",
                  background: active ? GRADIENT : "rgba(255,255,255,0.78)",
                  border: active ? "1px solid transparent" : "1px solid var(--border)",
                  boxShadow: active
                    ? `0 10px 24px ${ACCENT_SOFT}0.18)`
                    : "none",
                  minWidth: 180,
                }}
              >
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] opacity-85">
                  {tab.jp}
                </p>
                <p className="mt-1 text-sm font-bold">{tab.label}</p>
                <p className="mt-1 text-[0.72rem] opacity-80">{tab.desc}</p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function BaseSection() {
  const [openPattern, setOpenPattern] = useState<string>(KEIGO_MODULE.patterns[0]?.id ?? "");

  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="rounded-[28px] border p-5 sm:p-6" style={{ background: "rgba(255,255,255,0.84)", borderColor: `${ACCENT_SOFT}0.10)` }}>
          <SectionTitle
            eyebrow="Idea central"
            title="La lógica de keigo"
            desc="Aquí lo importante no es solo transformar un verbo, sino decidir quién hace la acción y cuál es la distancia social entre las partes."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {KEIGO_MODULE.rules.map((rule) => (
              <div
                key={rule.title}
                className="rounded-[22px] border p-4"
                style={{ background: "rgba(255,255,255,0.82)", borderColor: `${ACCENT_SOFT}0.10)` }}
              >
                <h3 className="text-base font-bold" style={{ color: "var(--ink)" }}>
                  {rule.title}
                </h3>
                <p className="mt-2 text-sm font-medium" style={{ color: ACCENT }}>
                  {rule.summary}
                </p>
                <p className="mt-3 text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>
                  {rule.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border p-5" style={{ background: "rgba(255,255,255,0.76)", borderColor: `${ACCENT_SOFT}0.12)` }}>
          <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
            Mapa rápido
          </p>
          <div className="mt-4 space-y-3">
            {KEIGO_MODULE.categories.map((category) => (
              <div
                key={category.key}
                className="rounded-2xl border p-4"
                style={{ background: category.color, borderColor: `${category.accent}22` }}
              >
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em]" style={{ color: category.accent }}>
                  {category.jp}
                </p>
                <p className="mt-1 text-base font-bold" style={{ color: "var(--ink)" }}>
                  {category.label}
                </p>
                <p className="mt-2 text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>
                  {category.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-[28px] border p-5 sm:p-6" style={{ background: "rgba(255,255,255,0.84)", borderColor: `${ACCENT_SOFT}0.10)` }}>
        <SectionTitle
          eyebrow="Patrones"
          title="Formas productivas que conviene dominar"
          desc="Aquí mantengo los patrones colapsados para que la página no se vuelva una lista infinita. Abre solo el que quieras estudiar en ese momento."
        />

        <div className="space-y-3">
          {KEIGO_MODULE.patterns.map((pattern) => {
            const isOpen = openPattern === pattern.id;
            const meta = KEIGO_MODULE.categories.find((c) => c.key === pattern.category);
            return (
              <div
                key={pattern.id}
                className="rounded-[24px] border"
                style={{ background: "rgba(255,255,255,0.8)", borderColor: `${meta?.accent ?? ACCENT}22` }}
              >
                <button
                  onClick={() => setOpenPattern((prev) => (prev === pattern.id ? "" : pattern.id))}
                  className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                >
                  <div className="min-w-0">
                    <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em]" style={{ color: meta?.accent ?? ACCENT }}>
                      {meta?.jp}
                    </p>
                    <h3 className="mt-1 text-lg font-bold" style={{ color: "var(--ink)" }}>
                      {pattern.title}
                    </h3>
                    <p className="mt-1 text-sm" style={{ color: "var(--ink-soft)", opacity: 0.8 }}>
                      {pattern.formula}
                    </p>
                  </div>
                  <span className="shrink-0 text-xl font-bold" style={{ color: meta?.accent ?? ACCENT }}>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <p className="text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.84 }}>
                          {pattern.meaning}
                        </p>

                        {pattern.caution && (
                          <div
                            className="mt-4 rounded-2xl border px-4 py-3"
                            style={{ background: "rgba(254,243,199,0.45)", borderColor: "rgba(217,119,6,0.18)" }}
                          >
                            <p className="text-sm leading-6" style={{ color: "#9A3412" }}>
                              {pattern.caution}
                            </p>
                          </div>
                        )}

                        <div className="mt-4 grid gap-3 md:grid-cols-2">
                          {pattern.examples.map((example, index) => (
                            <div key={`${pattern.id}-${index}`} className="rounded-2xl border p-4" style={{ background: "rgba(255,255,255,0.74)", borderColor: "var(--border)" }}>
                              <RubyText
                                segments={example.segments}
                                className="char-display text-base leading-8"
                                style={{ color: "var(--ink)" }}
                              />
                              <p className="mt-2 text-sm" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>
                                {example.translation}
                              </p>
                              {example.note && (
                                <p className="mt-2 text-xs" style={{ color: meta?.accent ?? ACCENT }}>
                                  {example.note}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function VerbsSection() {
  return (
    <div className="rounded-[28px] border p-5 sm:p-6" style={{ background: "rgba(255,255,255,0.84)", borderColor: `${ACCENT_SOFT}0.10)` }}>
      <SectionTitle
        eyebrow="Verbos núcleo"
        title="Los pares que más conviene automatizar"
        desc="En móvil evito la tabla ancha. Cada verbo queda como tarjeta para que siga siendo legible sin romper el layout."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {KEIGO_MODULE.verbPairs.map((pair) => (
          <div
            key={`${pair.plain}-${pair.meaning}`}
            className="rounded-[24px] border p-5"
            style={{ background: "rgba(255,255,255,0.8)", borderColor: `${ACCENT_SOFT}0.10)` }}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold" style={{ color: "var(--ink)" }}>
                  {pair.meaning}
                </h3>
                <p className="mt-1 text-sm" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
                  {pair.plain}
                </p>
              </div>
              <span className="rounded-full px-3 py-1 text-[0.72rem] font-bold" style={{ background: "rgba(221,214,254,0.42)", color: ACCENT }}>
                núcleo
              </span>
            </div>

            <div className="mt-4 space-y-2">
              {[
                { label: "普通", value: pair.plain, color: "#6B7280" },
                { label: "丁寧", value: pair.polite, color: "#A16207" },
                { label: "尊敬", value: pair.sonkeigo, color: "#1D4ED8" },
                { label: "謙譲", value: pair.kenjougo, color: "#15803D" },
              ].map((row) => (
                <div
                  key={`${pair.plain}-${row.label}`}
                  className="flex items-start gap-3 rounded-2xl border px-4 py-3"
                  style={{ background: "rgba(255,255,255,0.72)", borderColor: "var(--border)" }}
                >
                  <span className="mt-0.5 shrink-0 rounded-full px-2.5 py-1 text-[0.72rem] font-bold" style={{ background: `${row.color}14`, color: row.color }}>
                    {row.label}
                  </span>
                  <div className="min-w-0 text-sm leading-6" style={{ color: "var(--ink)" }}>
                    {row.value || "—"}
                  </div>
                </div>
              ))}
            </div>

            {pair.nuance && (
              <p className="mt-4 text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.8 }}>
                {pair.nuance}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function PhrasesSection({
  activeContext,
  onContextChange,
}: {
  activeContext: "all" | KeigoContext;
  onContextChange: (key: "all" | KeigoContext) => void;
}) {
  const visiblePhrases = useMemo(() => {
    if (activeContext === "all") return KEIGO_MODULE.phrases;
    return KEIGO_MODULE.phrases.filter((phrase) => phrase.context === activeContext);
  }, [activeContext]);

  return (
    <div className="rounded-[28px] border p-5 sm:p-6" style={{ background: "rgba(255,255,255,0.84)", borderColor: `${ACCENT_SOFT}0.10)` }}>
      <SectionTitle
        eyebrow="Frases fijas"
        title="Expresiones listas para usar"
        desc="Aquí está gran parte del valor práctico de keigo. Filtra por contexto y abre solo la parte que necesitas en ese momento."
      />

      <div className="mb-4 flex flex-wrap gap-2">
        {KEIGO_MODULE.contexts.map((ctx) => {
          const active = activeContext === ctx.key;
          return (
            <button
              key={ctx.key}
              onClick={() => onContextChange(ctx.key)}
              className="rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200"
              style={{
                background: active ? GRADIENT : "rgba(255,255,255,0.8)",
                color: active ? "white" : "var(--ink)",
                border: active ? "none" : "1px solid var(--border)",
                boxShadow: active ? `0 10px 24px ${ACCENT_SOFT}0.18)` : "none",
              }}
            >
              {ctx.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {visiblePhrases.map((phrase) => {
          const meta = KEIGO_MODULE.categories.find((category) => category.key === phrase.category);
          return (
            <div
              key={phrase.id}
              className="rounded-[22px] border p-4"
              style={{ background: "rgba(255,255,255,0.82)", borderColor: `${meta?.accent ?? ACCENT}22` }}
            >
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                  style={{
                    background: meta?.color ?? "rgba(221,214,254,0.3)",
                    color: meta?.accent ?? ACCENT,
                    border: `1px solid ${(meta?.accent ?? ACCENT)}22`,
                  }}
                >
                  {phrase.label}
                </span>
                <span className="rounded-full px-3 py-1 text-[0.72rem] font-semibold" style={{ background: "rgba(0,0,0,0.04)", color: "var(--ink-soft)" }}>
                  {phrase.context}
                </span>
              </div>

              <div className="mt-4">
                <RubyText
                  segments={phrase.segments}
                  className="char-display text-lg leading-8"
                  style={{ color: "var(--ink)" }}
                />
              </div>

              <p className="mt-3 text-sm font-medium" style={{ color: meta?.accent ?? ACCENT }}>
                {phrase.translation}
              </p>
              <p className="mt-2 text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>
                {phrase.usage}
              </p>
              {phrase.note && (
                <p className="mt-2 text-xs leading-5" style={{ color: "var(--ink-soft)", opacity: 0.74 }}>
                  {phrase.note}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MistakesSection() {
  return (
    <div className="rounded-[28px] border p-5 sm:p-6" style={{ background: "rgba(255,255,255,0.84)", borderColor: `${ACCENT_SOFT}0.10)` }}>
      <SectionTitle
        eyebrow="Errores frecuentes"
        title="Dónde se cae más la gente"
        desc="Aquí conviene comparar la frase incorrecta con la natural para internalizar la dirección correcta del keigo."
      />

      <div className="grid gap-4">
        {KEIGO_MODULE.mistakes.map((mistake, index) => (
          <div
            key={index}
            className="rounded-[22px] border p-4"
            style={{ background: "rgba(255,255,255,0.82)", borderColor: "rgba(239,68,68,0.16)" }}
          >
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border p-4" style={{ background: "rgba(254,226,226,0.56)", borderColor: "rgba(220,38,38,0.14)" }}>
                <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "#B91C1C" }}>
                  Evitar
                </p>
                <div className="mt-2">
                  <RubyText segments={mistake.wrong} className="char-display text-base leading-8" style={{ color: "#7F1D1D" }} />
                </div>
              </div>

              <div className="rounded-2xl border p-4" style={{ background: "rgba(220,252,231,0.62)", borderColor: "rgba(22,163,74,0.14)" }}>
                <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "#15803D" }}>
                  Mejor
                </p>
                <div className="mt-2">
                  <RubyText segments={mistake.correct} className="char-display text-base leading-8" style={{ color: "#14532D" }} />
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.84 }}>
              {mistake.explanation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScenariosSection({
  activeContext,
  onContextChange,
}: {
  activeContext: "all" | KeigoContext;
  onContextChange: (key: "all" | KeigoContext) => void;
}) {
  const visibleScenarios = useMemo(() => {
    if (activeContext === "all") return KEIGO_MODULE.scenarios;
    return KEIGO_MODULE.scenarios.filter((scenario) => scenario.context === activeContext);
  }, [activeContext]);

  return (
    <div className="rounded-[28px] border p-5 sm:p-6" style={{ background: "rgba(255,255,255,0.84)", borderColor: `${ACCENT_SOFT}0.10)` }}>
      <SectionTitle
        eyebrow="Escenarios"
        title="Mini contextos reales"
        desc="Esta vista deja keigo más respirable: eliges un contexto, abres un bloque, y estudias solo la escena que te interesa."
      />

      <div className="mb-4 flex flex-wrap gap-2">
        {KEIGO_MODULE.contexts.map((ctx) => {
          const active = activeContext === ctx.key;
          return (
            <button
              key={ctx.key}
              onClick={() => onContextChange(ctx.key)}
              className="rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200"
              style={{
                background: active ? GRADIENT : "rgba(255,255,255,0.8)",
                color: active ? "white" : "var(--ink)",
                border: active ? "none" : "1px solid var(--border)",
                boxShadow: active ? `0 10px 24px ${ACCENT_SOFT}0.18)` : "none",
              }}
            >
              {ctx.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-4">
        {visibleScenarios.map((scenario) => (
          <div key={scenario.id} className="rounded-[22px] border p-5" style={{ background: "rgba(255,255,255,0.82)", borderColor: `${ACCENT_SOFT}0.10)` }}>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]" style={{ background: "rgba(221,214,254,0.38)", color: ACCENT, border: `1px solid ${ACCENT_SOFT}0.14)` }}>
                {scenario.context}
              </span>
              <h3 className="text-base font-bold" style={{ color: "var(--ink)" }}>
                {scenario.title}
              </h3>
            </div>

            <p className="mt-3 text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>
              {scenario.situation}
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {scenario.examples.map((example, index) => (
                <div key={`${scenario.id}-${index}`} className="rounded-2xl border p-4" style={{ background: "rgba(255,255,255,0.72)", borderColor: "var(--border)" }}>
                  <RubyText
                    segments={example.segments}
                    className="char-display text-base leading-8"
                    style={{ color: "var(--ink)" }}
                  />
                  <p className="mt-2 text-sm" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>
                    {example.translation}
                  </p>
                  {example.note && (
                    <p className="mt-2 text-xs" style={{ color: ACCENT }}>
                      {example.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function KeigoPage() {
  const [activeSection, setActiveSection] = useState<SectionKey>("base");
  const [activePhraseContext, setActivePhraseContext] = useState<"all" | KeigoContext>("all");
  const [activeScenarioContext, setActiveScenarioContext] = useState<"all" | KeigoContext>("all");

  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />

      <div className="relative z-10 flex w-full justify-center">
        <div className="w-full max-w-6xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link
              href="/gramatica/formalidad"
              className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: ACCENT }}
            >
              ← Formalidad
            </Link>

            <div className="flex flex-wrap gap-3">
              <Link
                href={REGISTRO_HREF}
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.78)",
                  border: `1px solid ${ACCENT_SOFT}0.14)`,
                  color: "var(--ink)",
                }}
              >
                Ver Registro
              </Link>
              <Link
                href={PRACTICE_HREF}
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-bold text-white transition-all duration-200 hover:brightness-110"
                style={{ background: GRADIENT, boxShadow: `0 12px 26px ${ACCENT_SOFT}0.18)` }}
              >
                ◎ Practicar keigo
              </Link>
            </div>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mt-5 rounded-[32px] border px-5 py-6 sm:px-8 sm:py-8"
            style={{
              background: "rgba(255,255,255,0.82)",
              borderColor: `${ACCENT_SOFT}0.10)`,
              boxShadow: `0 18px 40px ${ACCENT_SOFT}0.08)`,
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="char-display select-none" aria-hidden="true" style={{ fontSize: "clamp(4.3rem, 14vw, 7rem)", lineHeight: 1, color: ACCENT, opacity: 0.08, fontWeight: 700 }}>
                  敬語
                </div>

                <div className="mt-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT, background: "rgba(221,214,254,0.24)", border: `1px solid ${ACCENT_SOFT}0.15)` }}>
                  Formalidad · Capa alta
                </div>

                <h1 className="mt-4 text-[clamp(2.4rem,7vw,4.2rem)] font-bold leading-none" style={{ color: "var(--ink)" }}>
                  {KEIGO_MODULE.title}
                </h1>

                <div className="mt-2">
                  <RubyText
                    segments={[{ text: KEIGO_MODULE.jp, ruby: KEIGO_MODULE.reading }]}
                    className="char-display text-[clamp(1rem,2.4vw,1.45rem)] tracking-[0.18em]"
                    style={{ color: ACCENT }}
                    rtStyle={{ fontSize: "0.52em", opacity: 0.86 }}
                  />
                </div>

                <p className="mt-4 max-w-3xl text-sm leading-7 sm:text-base" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>
                  {KEIGO_MODULE.description}
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
                  {[
                    { label: "Patrones", value: `${KEIGO_MODULE.patterns.length}` },
                    { label: "Verbos clave", value: `${KEIGO_MODULE.verbPairs.length}` },
                    { label: "Frases útiles", value: `${KEIGO_MODULE.phrases.length}` },
                    { label: "Escenarios", value: `${KEIGO_MODULE.scenarios.length}` },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap"
                      style={{ background: "rgba(221,214,254,0.24)", border: `1px solid ${ACCENT_SOFT}0.14)`, color: ACCENT }}
                    >
                      <span className="font-bold">{item.value}</span>
                      <span className="opacity-80">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border p-5" style={{ background: "rgba(255,255,255,0.74)", borderColor: `${ACCENT_SOFT}0.12)` }}>
                <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
                  Estudio guiado
                </p>
                <h2 className="mt-2 text-xl font-bold" style={{ color: "var(--ink)" }}>
                  Cómo usar esta página
                </h2>
                <div className="mt-4 space-y-3">
                  {[
                    "Empieza por Base para fijar la lógica de dirección.",
                    "Pasa a Verbos cuando ya distingas 尊敬語 y 謙譲語.",
                    "Usa Frases fijas y Escenarios para aterrizarlo al trabajo real.",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border px-4 py-3 text-sm" style={{ background: "rgba(255,255,255,0.78)", borderColor: "var(--border)", color: "var(--ink)" }}>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <Link
                    href={PRACTICE_HREF}
                    className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:brightness-110"
                    style={{ background: GRADIENT, boxShadow: `0 12px 28px ${ACCENT_SOFT}0.18)` }}
                  >
                    Abrir quiz de keigo →
                  </Link>
                  <Link
                    href={REGISTRO_HREF}
                    className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: "rgba(255,255,255,0.78)", border: `1px solid ${ACCENT_SOFT}0.14)`, color: "var(--ink)" }}
                  >
                    Volver a Registro
                  </Link>
                </div>
              </div>
            </div>
          </motion.section>

          <StickyTabs activeSection={activeSection} onChange={setActiveSection} />

          <div className="mt-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22 }}
              >
                {activeSection === "base" && <BaseSection />}
                {activeSection === "verbs" && <VerbsSection />}
                {activeSection === "phrases" && (
                  <PhrasesSection
                    activeContext={activePhraseContext}
                    onContextChange={setActivePhraseContext}
                  />
                )}
                {activeSection === "mistakes" && <MistakesSection />}
                {activeSection === "scenarios" && (
                  <ScenariosSection
                    activeContext={activeScenarioContext}
                    onContextChange={setActiveScenarioContext}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}
