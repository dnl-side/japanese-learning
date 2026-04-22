// src/app/gramatica/formalidad/keigo/page.tsx

"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RubyText } from "@/app/components/ui/Ruby";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";
import {
  KEIGO_MODULE,
  type KeigoCategory,
  type KeigoContext,
} from "@/data/grammar/keigo";

const ACCENT = "#7C3AED";
const ACCENT_SOFT = "rgba(124,58,237,";
const GRADIENT = "linear-gradient(135deg, #DDD6FE 0%, #7C3AED 100%)";

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
          style={{ color: "var(--ink-soft)", opacity: 0.8 }}
        >
          {desc}
        </p>
      )}
    </div>
  );
}

export default function KeigoPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | KeigoCategory>("all");
  const [activeContext, setActiveContext] = useState<"all" | KeigoContext>("all");

  const activeCategoryMeta =
    activeCategory === "all"
      ? null
      : KEIGO_MODULE.categories.find((c) => c.key === activeCategory) ?? null;

  const visiblePatterns = useMemo(() => {
    if (activeCategory === "all" || activeCategory === "fixed") {
      return KEIGO_MODULE.patterns;
    }

    return KEIGO_MODULE.patterns.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const visiblePhrases = useMemo(() => {
    const byCategory =
      activeCategory === "all"
        ? KEIGO_MODULE.phrases
        : activeCategory === "fixed"
        ? KEIGO_MODULE.phrases
        : KEIGO_MODULE.phrases;

    if (activeContext === "all") return byCategory;
    return byCategory.filter((p) => p.context === activeContext);
  }, [activeCategory, activeContext]);

  const visibleScenarios = useMemo(() => {
    if (activeContext === "all") return KEIGO_MODULE.scenarios;
    return KEIGO_MODULE.scenarios.filter((s) => s.context === activeContext);
  }, [activeContext]);

  return (
    <main className="relative min-h-screen" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-28 pt-8 sm:px-6 sm:pt-10">
        <Link
          href="/formalidad"
          className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
          style={{ color: ACCENT }}
        >
          ← Gramática
        </Link>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mt-5 rounded-[32px] border px-5 py-8 sm:px-8"
          style={{
            background: "rgba(255,255,255,0.78)",
            borderColor: `${ACCENT_SOFT}0.10)`,
            boxShadow: "0 18px 40px rgba(124,58,237,0.08)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="flex flex-col items-center text-center">
            <div
              className="char-display pointer-events-none select-none"
              aria-hidden="true"
              style={{
                fontSize: "clamp(4.5rem, 16vw, 8rem)",
                lineHeight: 1,
                color: ACCENT,
                opacity: 0.11,
                fontWeight: 700,
              }}
            >
              敬語
            </div>

            <h1
              className="mt-2 text-[clamp(2.6rem,7vw,4.7rem)] font-bold leading-none"
              style={{ color: "var(--ink)" }}
            >
              {KEIGO_MODULE.title}
            </h1>

            <p
              className="char-display mt-2 text-[clamp(1.05rem,2.4vw,1.5rem)] tracking-[0.18em]"
              style={{ color: ACCENT }}
            >
              {KEIGO_MODULE.reading}
            </p>

            <p
              className="mt-4 max-w-3xl text-sm leading-7 sm:text-base"
              style={{ color: "var(--ink-soft)", opacity: 0.8 }}
            >
              Una sola página para entender la lógica de{" "}
              <strong>丁寧語</strong>, <strong>尊敬語</strong> y{" "}
              <strong>謙譲語</strong>, con comparaciones directas, frases fijas y
              ejemplos con ruby.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {[
                { label: "Patrones", value: `${KEIGO_MODULE.patterns.length}` },
                { label: "Verbos clave", value: `${KEIGO_MODULE.verbPairs.length}` },
                { label: "Frases útiles", value: `${KEIGO_MODULE.phrases.length}` },
                { label: "Errores comunes", value: `${KEIGO_MODULE.mistakes.length}` },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-full px-4 py-1.5 text-sm font-medium"
                  style={{
                    background: "rgba(221,214,254,0.35)",
                    border: "1px solid rgba(124,58,237,0.16)",
                    color: ACCENT,
                  }}
                >
                  <span className="font-bold">{item.value}</span>
                  <span className="ml-1.5 opacity-80">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <button
            onClick={() => setActiveCategory("all")}
            className="rounded-[24px] border p-5 text-left transition-all duration-200 hover:-translate-y-1"
            style={{
              background:
                activeCategory === "all" ? "rgba(221,214,254,0.28)" : "rgba(255,255,255,0.78)",
              borderColor:
                activeCategory === "all" ? "rgba(124,58,237,0.28)" : "var(--border)",
              boxShadow:
                activeCategory === "all"
                  ? "0 14px 30px rgba(124,58,237,0.10)"
                  : "var(--shadow-soft)",
            }}
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: ACCENT }}
            >
              Vista general
            </p>
            <h3 className="mt-2 text-lg font-bold" style={{ color: "var(--ink)" }}>
              Todo el módulo
            </h3>
            <p className="mt-2 text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.75 }}>
              Comparación completa, patrones, frases fijas y errores frecuentes.
            </p>
          </button>

          {KEIGO_MODULE.categories.map((category) => {
            const active = activeCategory === category.key;

            return (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className="rounded-[24px] border p-5 text-left transition-all duration-200 hover:-translate-y-1"
                style={{
                  background: active ? `${category.color}` : "rgba(255,255,255,0.78)",
                  borderColor: active ? `${category.accent}33` : "var(--border)",
                  boxShadow: active
                    ? `0 16px 32px ${category.accent}22`
                    : "var(--shadow-soft)",
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ color: category.accent }}
                >
                  {category.jp}
                </p>
                <h3 className="mt-2 text-lg font-bold" style={{ color: "var(--ink)" }}>
                  {category.label}
                </h3>
                <p className="mt-2 text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
                  {category.desc}
                </p>
              </button>
            );
          })}
        </section>

        <section className="mt-8 rounded-[28px] border p-5 sm:p-6">
          <SectionTitle
            eyebrow="Decisión rápida"
            title="Cómo decidir qué keigo usar"
            desc="La idea es pensar primero en la relación entre quien habla, quien escucha y la persona de la que se habla."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {KEIGO_MODULE.rules.map((rule) => (
              <div
                key={rule.title}
                className="rounded-[22px] border p-4"
                style={{
                  background: "rgba(255,255,255,0.82)",
                  borderColor: `${ACCENT_SOFT}0.10)`,
                }}
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
        </section>

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-6">
            <section className="rounded-[28px] border p-5 sm:p-6">
              <SectionTitle
                eyebrow="Patrones"
                title="Base y transformaciones productivas"
                desc="Estos patrones ayudan, pero recuerda que muchos verbos frecuentes usan formas especiales."
              />

              <div className="space-y-4">
                {visiblePatterns.map((pattern) => {
                  const categoryMeta =
                    KEIGO_MODULE.categories.find((c) => c.key === pattern.category)!;

                  return (
                    <div
                      key={pattern.id}
                      className="rounded-[24px] border p-5"
                      style={{
                        background: "rgba(255,255,255,0.82)",
                        borderColor: `${categoryMeta.accent}22`,
                      }}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p
                            className="text-xs font-bold uppercase tracking-[0.18em]"
                            style={{ color: categoryMeta.accent }}
                          >
                            {categoryMeta.jp}
                          </p>
                          <h3 className="mt-1 text-lg font-bold" style={{ color: "var(--ink)" }}>
                            {pattern.title}
                          </h3>
                        </div>

                        <div
                          className="rounded-2xl px-4 py-2 text-sm font-semibold"
                          style={{
                            background: `${categoryMeta.color}`,
                            color: categoryMeta.accent,
                            border: `1px solid ${categoryMeta.accent}22`,
                          }}
                        >
                          {pattern.formula}
                        </div>
                      </div>

                      <p className="mt-3 text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>
                        {pattern.meaning}
                      </p>

                      {pattern.caution && (
                        <div
                          className="mt-4 rounded-2xl border px-4 py-3"
                          style={{
                            background: "rgba(254,243,199,0.45)",
                            borderColor: "rgba(217,119,6,0.18)",
                          }}
                        >
                          <p className="text-sm leading-6" style={{ color: "#9A3412" }}>
                            {pattern.caution}
                          </p>
                        </div>
                      )}

                      <div className="mt-4 grid gap-3 md:grid-cols-2">
                        {pattern.examples.map((example, index) => (
                          <div
                            key={`${pattern.id}-${index}`}
                            className="rounded-2xl border p-4"
                            style={{
                              background: "rgba(255,255,255,0.72)",
                              borderColor: "var(--border)",
                            }}
                          >
                            <RubyText
                              segments={example.segments}
                              className="char-display text-base leading-8"
                              style={{ color: "var(--ink)" }}
                            />
                            <p className="mt-2 text-sm" style={{ color: "var(--ink-soft)", opacity: 0.8 }}>
                              {example.translation}
                            </p>
                            {example.note && (
                              <p className="mt-2 text-xs" style={{ color: categoryMeta.accent }}>
                                {example.note}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="rounded-[28px] border p-5 sm:p-6">
              <SectionTitle
                eyebrow="Comparación"
                title="Verbos más importantes"
                desc="Esta tabla es el corazón del módulo. La idea es contrastar normal, formal, 尊敬語 y 謙譲語 en un solo lugar."
              />

              <div className="overflow-x-auto">
                <div className="min-w-[860px] rounded-[22px] border">
                  <div
                    className="grid grid-cols-[1.1fr_1.1fr_1.2fr_1.2fr_1fr] gap-0 text-sm font-bold"
                    style={{ background: "rgba(221,214,254,0.24)", color: "var(--ink)" }}
                  >
                    <div className="border-b px-4 py-3">Normal</div>
                    <div className="border-b px-4 py-3">丁寧語</div>
                    <div className="border-b px-4 py-3">尊敬語</div>
                    <div className="border-b px-4 py-3">謙譲語</div>
                    <div className="border-b px-4 py-3">Significado</div>
                  </div>

                  {KEIGO_MODULE.verbPairs.map((pair) => (
                    <div
                      key={`${pair.plain}-${pair.meaning}`}
                      className="grid grid-cols-[1.1fr_1.1fr_1.2fr_1.2fr_1fr] gap-0 text-sm"
                      style={{ background: "rgba(255,255,255,0.86)" }}
                    >
                      <div className="border-b px-4 py-4" style={{ color: "var(--ink)" }}>
                        {pair.plain}
                      </div>
                      <div className="border-b px-4 py-4" style={{ color: "var(--ink)" }}>
                        {pair.polite}
                      </div>
                      <div
                        className="border-b px-4 py-4 font-medium"
                        style={{
                          color: activeCategory === "kenjougo" ? "var(--ink-soft)" : "#1D4ED8",
                          opacity: activeCategory === "kenjougo" ? 0.5 : 1,
                        }}
                      >
                        {pair.sonkeigo}
                      </div>
                      <div
                        className="border-b px-4 py-4 font-medium"
                        style={{
                          color: activeCategory === "sonkeigo" ? "var(--ink-soft)" : "#15803D",
                          opacity: activeCategory === "sonkeigo" ? 0.5 : 1,
                        }}
                      >
                        {pair.kenjougo}
                      </div>
                      <div className="border-b px-4 py-4" style={{ color: "var(--ink-soft)" }}>
                        {pair.meaning}
                        {pair.nuance && (
                          <p className="mt-1 text-xs leading-5" style={{ opacity: 0.75 }}>
                            {pair.nuance}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-[28px] border p-5 sm:p-6">
              <SectionTitle
                eyebrow="Frases fijas"
                title="Expresiones listas para usar"
                desc="Aquí está la parte más útil para la vida real: trabajo, correo, teléfono y atención."
              />

              <div className="mb-4 flex flex-wrap gap-2">
                {KEIGO_MODULE.contexts.map((ctx) => {
                  const active = activeContext === ctx.key;
                  return (
                    <button
                      key={ctx.key}
                      onClick={() => setActiveContext(ctx.key)}
                      className="rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200"
                      style={{
                        background: active ? GRADIENT : "rgba(255,255,255,0.8)",
                        color: active ? "white" : "var(--ink)",
                        border: active ? "none" : "1px solid var(--border)",
                        boxShadow: active ? "0 10px 24px rgba(124,58,237,0.18)" : "none",
                      }}
                    >
                      {ctx.label}
                    </button>
                  );
                })}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {visiblePhrases.map((phrase) => {
                  const meta =
                    KEIGO_MODULE.categories.find((c) => c.key === phrase.category)!;

                  return (
                    <div
                      key={phrase.id}
                      className="rounded-[22px] border p-4"
                      style={{
                        background: "rgba(255,255,255,0.82)",
                        borderColor: `${meta.accent}22`,
                      }}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className="rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                          style={{
                            background: `${meta.color}`,
                            color: meta.accent,
                            border: `1px solid ${meta.accent}22`,
                          }}
                        >
                          {phrase.label}
                        </span>
                        <span
                          className="rounded-full px-3 py-1 text-[0.72rem] font-semibold"
                          style={{
                            background: "rgba(0,0,0,0.04)",
                            color: "var(--ink-soft)",
                          }}
                        >
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

                      <p className="mt-3 text-sm font-medium" style={{ color: meta.accent }}>
                        {phrase.translation}
                      </p>

                      <p className="mt-2 text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>
                        {phrase.usage}
                      </p>

                      {phrase.note && (
                        <p className="mt-2 text-xs leading-5" style={{ color: "var(--ink-soft)", opacity: 0.72 }}>
                          {phrase.note}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="rounded-[28px] border p-5 sm:p-6">
              <SectionTitle
                eyebrow="Escenarios"
                title="Mini contextos reales"
                desc="La idea es que el usuario no vea keigo como una tabla aislada, sino como una decisión de contexto."
              />

              <div className="grid gap-4">
                {visibleScenarios.map((scenario) => (
                  <div
                    key={scenario.id}
                    className="rounded-[22px] border p-5"
                    style={{
                      background: "rgba(255,255,255,0.82)",
                      borderColor: `${ACCENT_SOFT}0.10)`,
                    }}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className="rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                        style={{
                          background: "rgba(221,214,254,0.38)",
                          color: ACCENT,
                          border: "1px solid rgba(124,58,237,0.16)",
                        }}
                      >
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
                        <div
                          key={`${scenario.id}-${index}`}
                          className="rounded-2xl border p-4"
                          style={{
                            background: "rgba(255,255,255,0.72)",
                            borderColor: "var(--border)",
                          }}
                        >
                          <RubyText
                            segments={example.segments}
                            className="char-display text-base leading-8"
                            style={{ color: "var(--ink)" }}
                          />
                          <p className="mt-2 text-sm" style={{ color: "var(--ink-soft)", opacity: 0.8 }}>
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
            </section>

            <section className="rounded-[28px] border p-5 sm:p-6">
              <SectionTitle
                eyebrow="Errores frecuentes"
                title="Donde más se cae la gente"
                desc="Esta parte conviene mucho más que solo memorizar listas, porque te obliga a pensar quién sube y quién baja."
              />

              <div className="grid gap-4">
                {KEIGO_MODULE.mistakes.map((mistake, index) => (
                  <div
                    key={index}
                    className="rounded-[22px] border p-4"
                    style={{
                      background: "rgba(255,255,255,0.82)",
                      borderColor: "rgba(239,68,68,0.16)",
                    }}
                  >
                    <div className="grid gap-3 md:grid-cols-2">
                      <div
                        className="rounded-2xl border p-4"
                        style={{
                          background: "rgba(254,226,226,0.56)",
                          borderColor: "rgba(220,38,38,0.14)",
                        }}
                      >
                        <p
                          className="text-xs font-bold uppercase tracking-[0.18em]"
                          style={{ color: "#B91C1C" }}
                        >
                          Evitar
                        </p>
                        <div className="mt-2">
                          <RubyText
                            segments={mistake.wrong}
                            className="char-display text-base leading-8"
                            style={{ color: "#7F1D1D" }}
                          />
                        </div>
                      </div>

                      <div
                        className="rounded-2xl border p-4"
                        style={{
                          background: "rgba(220,252,231,0.62)",
                          borderColor: "rgba(22,163,74,0.14)",
                        }}
                      >
                        <p
                          className="text-xs font-bold uppercase tracking-[0.18em]"
                          style={{ color: "#15803D" }}
                        >
                          Mejor
                        </p>
                        <div className="mt-2">
                          <RubyText
                            segments={mistake.correct}
                            className="char-display text-base leading-8"
                            style={{ color: "#14532D" }}
                          />
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.84 }}>
                      {mistake.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-24">
            <div
              className="rounded-[28px] border p-5"
              style={{
                background: "rgba(255,255,255,0.88)",
                borderColor: `${ACCENT_SOFT}0.10)`,
                boxShadow: "0 20px 40px rgba(124,58,237,0.08)",
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-[0.18em]"
                style={{ color: ACCENT }}
              >
                Resumen rápido
              </p>

              <h3 className="mt-2 text-xl font-bold" style={{ color: "var(--ink)" }}>
                {activeCategoryMeta ? activeCategoryMeta.jp : "敬語全体"}
              </h3>

              <p className="mt-2 text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>
                {activeCategoryMeta
                  ? activeCategoryMeta.desc
                  : "Vista global para comparar base formal, honoríficos, humildes y frases fijas en un solo lugar."}
              </p>

              <div className="mt-5 space-y-3">
                <div
                  className="rounded-2xl border p-4"
                  style={{
                    background: "rgba(221,214,254,0.22)",
                    borderColor: `${ACCENT_SOFT}0.10)`,
                  }}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
                    Regla mental
                  </p>
                  <p className="mt-2 text-sm leading-6" style={{ color: "var(--ink)" }}>
                    Cliente / jefe / profesor → <strong>尊敬語</strong>
                    <br />
                    Yo / mi empresa / mi lado → <strong>謙譲語</strong>
                    <br />
                    Formal general → <strong>丁寧語</strong>
                  </p>
                </div>

                <div
                  className="rounded-2xl border p-4"
                  style={{
                    background: "rgba(255,255,255,0.82)",
                    borderColor: "var(--border)",
                  }}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
                    Lo imprescindible
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-6" style={{ color: "var(--ink-soft)" }}>
                    <li>• いらっしゃる / 参る</li>
                    <li>• おっしゃる / 申す</li>
                    <li>• ご覧になる / 拝見する</li>
                    <li>• 召し上がる / いただく</li>
                    <li>• ご存じです / 存じております</li>
                  </ul>
                </div>

                <div
                  className="rounded-2xl border p-4"
                  style={{
                    background: "rgba(255,255,255,0.82)",
                    borderColor: "var(--border)",
                  }}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
                    Fórmulas de negocio
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-6" style={{ color: "var(--ink-soft)" }}>
                    <li>• かしこまりました</li>
                    <li>• 少々お待ちください</li>
                    <li>• 申し訳ございません</li>
                    <li>• お世話になっております</li>
                    <li>• よろしくお願いいたします</li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}