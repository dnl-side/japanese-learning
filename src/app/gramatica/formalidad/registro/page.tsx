// src/app/gramatica/formalidad/registro/page.tsx

"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";
import { RubyText } from "@/app/components/ui/Ruby";
import {
  FORMALITY_MODULE,
  type FormalityScenarioContext,
} from "@/data/grammar/formality";
import {
  FORMALITY_REGISTER_SESSION_PRESETS,
  REGISTER_QUIZ_MODE_LABELS,
} from "@/data/grammar/formalityRegisterQuiz";

const ACCENT = "#263238";
const ACCENT_SOFT = "rgba(38,50,56,";
const GRADIENT = "linear-gradient(135deg, #B0BEC5 0%, #263238 100%)";
const PRACTICE_HREF = "/gramatica/formalidad/registro/practica";
const KEIGO_HREF = "/gramatica/formalidad/keigo";

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

export default function FormalidadRegistroPage() {
  const [activeContext, setActiveContext] =
    useState<"all" | FormalityScenarioContext>("all");

  const visibleScenarios = useMemo(() => {
    if (activeContext === "all") return FORMALITY_MODULE.scenarios;
    return FORMALITY_MODULE.scenarios.filter((s) => s.context === activeContext);
  }, [activeContext]);

  const practiceModes = useMemo(
    () =>
      Array.from(
        new Set(
          FORMALITY_REGISTER_SESSION_PRESETS.flatMap((preset) => preset.modes),
        ),
      ).slice(0, 4),
    [],
  );

  const practiceQuestionCount = useMemo(
    () => FORMALITY_REGISTER_SESSION_PRESETS[0]?.recommendedCount ?? 10,
    [],
  );

  return (
    <main
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: "var(--paper)" }}
    >
      <SakuraAnimation />

      <div className="relative z-10 flex w-full justify-center">
        <div className="w-full max-w-5xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link
              href="/gramatica/formalidad"
              className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: ACCENT }}
            >
              ← Formalidad
            </Link>

            <Link
              href={PRACTICE_HREF}
              className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-bold text-white transition-all duration-200 hover:brightness-110"
              style={{
                background: GRADIENT,
                boxShadow: `0 12px 26px ${ACCENT_SOFT}0.18)`,
              }}
            >
              Ir a práctica →
            </Link>
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
                <div
                  className="char-display select-none"
                  aria-hidden="true"
                  style={{
                    fontSize: "clamp(4.2rem, 13vw, 7rem)",
                    lineHeight: 1,
                    color: ACCENT,
                    opacity: 0.08,
                    fontWeight: 700,
                  }}
                >
                  話し方
                </div>

                <div
                  className="mt-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                  style={{
                    color: ACCENT,
                    background: "rgba(176,190,197,0.18)",
                    border: `1px solid ${ACCENT_SOFT}0.15)`,
                  }}
                >
                  Formalidad · Registro
                </div>

                <h1
                  className="mt-4 text-[clamp(2.3rem,7vw,4.1rem)] font-bold leading-none"
                  style={{ color: "var(--ink)" }}
                >
                  {FORMALITY_MODULE.title}
                </h1>

                <p
                  className="char-display mt-2 text-[clamp(1rem,2.4vw,1.45rem)] tracking-[0.18em]"
                  style={{ color: ACCENT }}
                >
                  {FORMALITY_MODULE.reading}
                </p>

                <p
                  className="mt-4 max-w-3xl text-sm leading-7 sm:text-base"
                  style={{ color: "var(--ink-soft)", opacity: 0.82 }}
                >
                  {FORMALITY_MODULE.description}
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
                  {[
                    {
                      label: "Registros",
                      value: `${FORMALITY_MODULE.levels.length}`,
                    },
                    {
                      label: "Patrones base",
                      value: `${FORMALITY_MODULE.patterns.length}`,
                    },
                    {
                      label: "Contrastes",
                      value: `${FORMALITY_MODULE.contrasts.length}`,
                    },
                    {
                      label: "Escenarios",
                      value: `${FORMALITY_MODULE.scenarios.length}`,
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap"
                      style={{
                        background: "rgba(176,190,197,0.18)",
                        border: `1px solid ${ACCENT_SOFT}0.14)`,
                        color: ACCENT,
                      }}
                    >
                      <span className="font-bold">{item.value}</span>
                      <span className="opacity-80">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <Link
                    href={PRACTICE_HREF}
                    className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:brightness-110"
                    style={{
                      background: GRADIENT,
                      boxShadow: `0 12px 28px ${ACCENT_SOFT}0.18)`,
                    }}
                  >
                    Empezar práctica de registro
                  </Link>

                  <Link
                    href={KEIGO_HREF}
                    className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: "rgba(255,255,255,0.72)",
                      border: `1px solid ${ACCENT_SOFT}0.14)`,
                      color: "var(--ink)",
                    }}
                  >
                    Ver capa alta: Keigo
                  </Link>
                </div>
              </div>

              <div
                className="rounded-[28px] border p-5"
                style={{
                  background: "rgba(255,255,255,0.72)",
                  borderColor: `${ACCENT_SOFT}0.12)`,
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ color: ACCENT }}
                >
                  Práctica activa
                </p>

                <h2
                  className="mt-2 text-xl font-bold"
                  style={{ color: "var(--ink)" }}
                >
                  Lleva el registro a uso real
                </h2>

                <p
                  className="mt-3 text-sm leading-6"
                  style={{ color: "var(--ink-soft)", opacity: 0.82 }}
                >
                  La práctica de registro está pensada para trabajar no solo el
                  cambio de forma, sino también la naturalidad, la distancia
                  social y la elección del tono correcto.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <div
                    className="rounded-2xl border p-4"
                    style={{
                      background: "rgba(176,190,197,0.10)",
                      borderColor: `${ACCENT_SOFT}0.10)`,
                    }}
                  >
                    <p
                      className="text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                      style={{ color: ACCENT }}
                    >
                      Sesión sugerida
                    </p>
                    <p
                      className="mt-2 text-sm font-semibold"
                      style={{ color: "var(--ink)" }}
                    >
                      {practiceQuestionCount} preguntas
                    </p>
                    <p
                      className="mt-1 text-xs leading-5"
                      style={{ color: "var(--ink-soft)", opacity: 0.76 }}
                    >
                      Ideal para una sesión rápida de práctica guiada.
                    </p>
                  </div>

                  <div
                    className="rounded-2xl border p-4"
                    style={{
                      background: "rgba(176,190,197,0.10)",
                      borderColor: `${ACCENT_SOFT}0.10)`,
                    }}
                  >
                    <p
                      className="text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                      style={{ color: ACCENT }}
                    >
                      Modos cubiertos
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {practiceModes.map((mode) => (
                        <span
                          key={mode}
                          className="rounded-full px-3 py-1 text-[0.72rem] font-semibold"
                          style={{
                            background: "rgba(255,255,255,0.82)",
                            border: `1px solid ${ACCENT_SOFT}0.10)`,
                            color: "var(--ink)",
                          }}
                        >
                          {REGISTER_QUIZ_MODE_LABELS[mode]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href={PRACTICE_HREF}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:brightness-110"
                  style={{
                    background: GRADIENT,
                    boxShadow: `0 12px 28px ${ACCENT_SOFT}0.18)`,
                  }}
                >
                  Abrir quiz de registro →
                </Link>
              </div>
            </div>
          </motion.section>

          <section className="mt-8 grid gap-4 md:grid-cols-3">
            {FORMALITY_MODULE.levels.map((level) => (
              <div
                key={level.key}
                className="rounded-[24px] border p-5"
                style={{
                  background: level.color,
                  borderColor: `${level.accent}22`,
                  boxShadow: `0 14px 30px ${level.accent}11`,
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ color: level.accent }}
                >
                  {level.jp}
                </p>
                <h3
                  className="mt-2 text-lg font-bold"
                  style={{ color: "var(--ink)" }}
                >
                  {level.label}
                </h3>
                <p
                  className="mt-2 text-sm leading-6"
                  style={{ color: "var(--ink-soft)", opacity: 0.82 }}
                >
                  {level.desc}
                </p>

                <div className="mt-4 space-y-2">
                  {level.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="rounded-2xl px-3 py-2 text-sm"
                      style={{
                        background: "rgba(255,255,255,0.66)",
                        color: "var(--ink)",
                        border: "1px solid rgba(255,255,255,0.6)",
                      }}
                    >
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="mt-8 rounded-[28px] border p-5 sm:p-6">
            <SectionTitle
              eyebrow="Idea principal"
              title="Qué cambia realmente entre informal y neutro"
              desc="La separación más importante del módulo está aquí: plain forms frente a です・ます."
            />

            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
              <div className="grid gap-4 md:grid-cols-3">
                {FORMALITY_MODULE.rules.map((rule) => (
                  <div
                    key={rule.title}
                    className="rounded-[22px] border p-4"
                    style={{
                      background: "rgba(255,255,255,0.82)",
                      borderColor: `${ACCENT_SOFT}0.10)`,
                    }}
                  >
                    <h3
                      className="text-base font-bold"
                      style={{ color: "var(--ink)" }}
                    >
                      {rule.title}
                    </h3>
                    <p
                      className="mt-2 text-sm font-medium"
                      style={{ color: ACCENT }}
                    >
                      {rule.summary}
                    </p>
                    <p
                      className="mt-3 text-sm leading-6"
                      style={{ color: "var(--ink-soft)", opacity: 0.82 }}
                    >
                      {rule.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="rounded-[24px] border p-5"
                style={{
                  background: "rgba(176,190,197,0.12)",
                  borderColor: `${ACCENT_SOFT}0.12)`,
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ color: ACCENT }}
                >
                  Mapa rápido
                </p>

                <div className="mt-4 space-y-4">
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-[0.18em]"
                      style={{ color: "#C2410C" }}
                    >
                      Informal
                    </p>
                    <p
                      className="mt-2 text-sm leading-7"
                      style={{ color: "var(--ink)" }}
                    >
                      Plain forms: <strong>だ</strong>, diccionario,{" "}
                      <strong>ない</strong>, <strong>た</strong>,{" "}
                      <strong>なかった</strong>.
                    </p>
                  </div>

                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-[0.18em]"
                      style={{ color: ACCENT }}
                    >
                      Neutro
                    </p>
                    <p
                      className="mt-2 text-sm leading-7"
                      style={{ color: "var(--ink)" }}
                    >
                      Polite forms: <strong>です</strong>, <strong>ます</strong>,{" "}
                      <strong>ません</strong>, <strong>ました</strong>,{" "}
                      <strong>ませんでした</strong>.
                    </p>
                  </div>

                  <div
                    className="rounded-2xl border p-4"
                    style={{
                      background: "rgba(255,255,255,0.72)",
                      borderColor: `${ACCENT_SOFT}0.10)`,
                    }}
                  >
                    <p
                      className="text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                      style={{ color: ACCENT }}
                    >
                      Consejo
                    </p>
                    <p
                      className="mt-2 text-sm leading-6"
                      style={{ color: "var(--ink-soft)", opacity: 0.82 }}
                    >
                      Si esta parte queda clara, después el salto a keigo se
                      siente más lógico y mucho menos pesado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8 rounded-[28px] border p-5 sm:p-6">
            <SectionTitle
              eyebrow="Patrones gramaticales"
              title="El puente básico: plain → です・ます"
              desc="Esta es la parte que conviene dejar muy sólida antes de empujar más keigo."
            />

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {FORMALITY_MODULE.patterns.map((pattern) => (
                <div
                  key={pattern.title}
                  className="rounded-[22px] border p-4"
                  style={{
                    background: "rgba(255,255,255,0.84)",
                    borderColor: `${ACCENT_SOFT}0.10)`,
                  }}
                >
                  <p
                    className="text-xs font-bold uppercase tracking-[0.16em]"
                    style={{ color: ACCENT }}
                  >
                    {pattern.title}
                  </p>

                  <div
                    className="mt-3 rounded-2xl border p-3"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <p
                      className="text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                      style={{ color: "#C2410C" }}
                    >
                      Informal
                    </p>
                    <p
                      className="char-display mt-1 text-base"
                      style={{ color: "var(--ink)" }}
                    >
                      {pattern.plain}
                    </p>
                  </div>

                  <div
                    className="mt-3 rounded-2xl border p-3"
                    style={{
                      borderColor: `${ACCENT_SOFT}0.12)`,
                      background: "rgba(176,190,197,0.10)",
                    }}
                  >
                    <p
                      className="text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                      style={{ color: ACCENT }}
                    >
                      Neutro
                    </p>
                    <p
                      className="char-display mt-1 text-base"
                      style={{ color: "var(--ink)" }}
                    >
                      {pattern.neutral}
                    </p>
                  </div>

                  <p
                    className="mt-3 text-sm leading-6"
                    style={{ color: "var(--ink-soft)", opacity: 0.82 }}
                  >
                    {pattern.note}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-8 space-y-5">
            <SectionTitle
              eyebrow="Comparación"
              title="Una misma idea en tres registros"
              desc="La meta del módulo no es memorizar frases sueltas, sino sentir el cambio de tono al comparar una misma intención."
            />

            {FORMALITY_MODULE.contrasts.map((contrast) => (
              <div
                key={contrast.id}
                className="rounded-[28px] border p-5 sm:p-6"
                style={{
                  background: "rgba(255,255,255,0.84)",
                  borderColor: `${ACCENT_SOFT}0.10)`,
                }}
              >
                <h3
                  className="text-xl font-bold"
                  style={{ color: "var(--ink)" }}
                >
                  {contrast.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-6"
                  style={{ color: "var(--ink-soft)", opacity: 0.8 }}
                >
                  {contrast.summary}
                </p>

                <div className="mt-5 space-y-4">
                  {contrast.rows.map((row) => (
                    <div
                      key={`${contrast.id}-${row.label}`}
                      className="rounded-[22px] border p-4"
                      style={{
                        background: "rgba(255,255,255,0.78)",
                        borderColor: "var(--border)",
                      }}
                    >
                      <div className="mb-3">
                        <p
                          className="text-xs font-bold uppercase tracking-[0.18em]"
                          style={{ color: ACCENT }}
                        >
                          {row.label}
                        </p>
                        {row.explanation && (
                          <p
                            className="mt-1 text-sm"
                            style={{
                              color: "var(--ink-soft)",
                              opacity: 0.78,
                            }}
                          >
                            {row.explanation}
                          </p>
                        )}
                      </div>

                      <div className="grid gap-3 lg:grid-cols-3">
                        <div
                          className="rounded-2xl border p-4"
                          style={{
                            background: "rgba(255,237,213,0.58)",
                            borderColor: "rgba(194,65,12,0.14)",
                          }}
                        >
                          <p
                            className="text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                            style={{ color: "#C2410C" }}
                          >
                            Informal
                          </p>
                          <div className="mt-2">
                            <RubyText
                              segments={row.informal}
                              className="char-display text-base leading-8"
                              style={{ color: "var(--ink)" }}
                            />
                          </div>
                        </div>

                        <div
                          className="rounded-2xl border p-4"
                          style={{
                            background: "rgba(176,190,197,0.12)",
                            borderColor: `${ACCENT_SOFT}0.12)`,
                          }}
                        >
                          <p
                            className="text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                            style={{ color: ACCENT }}
                          >
                            Neutro
                          </p>
                          <div className="mt-2">
                            <RubyText
                              segments={row.neutral}
                              className="char-display text-base leading-8"
                              style={{ color: "var(--ink)" }}
                            />
                          </div>
                        </div>

                        <div
                          className="rounded-2xl border p-4"
                          style={{
                            background: "rgba(209,196,233,0.24)",
                            borderColor: "rgba(91,33,182,0.14)",
                          }}
                        >
                          <p
                            className="text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                            style={{ color: "#5B21B6" }}
                          >
                            Formal alto
                          </p>
                          <div className="mt-2">
                            <RubyText
                              segments={row.formal}
                              className="char-display text-base leading-8"
                              style={{ color: "var(--ink)" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="mt-8 rounded-[28px] border p-5 sm:p-6">
            <SectionTitle
              eyebrow="Situaciones reales"
              title="Dónde se siente mejor la diferencia"
              desc="Estas mini situaciones ayudan a decidir rápido cuándo basta el nivel neutro y cuándo ya empieza el formal alto."
            />

            <div className="mb-4 flex flex-wrap gap-2">
              {Object.entries(FORMALITY_MODULE.contextLabels).map(
                ([key, label]) => {
                  const isActive = activeContext === key;
                  return (
                    <button
                      key={key}
                      onClick={() =>
                        setActiveContext(
                          key as "all" | FormalityScenarioContext,
                        )
                      }
                      className="rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200"
                      style={{
                        background: isActive
                          ? GRADIENT
                          : "rgba(255,255,255,0.8)",
                        color: isActive ? "white" : "var(--ink)",
                        border: isActive ? "none" : "1px solid var(--border)",
                        boxShadow: isActive
                          ? `0 10px 24px ${ACCENT_SOFT}0.18)`
                          : "none",
                      }}
                    >
                      {label}
                    </button>
                  );
                },
              )}
            </div>

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
                        background: "rgba(176,190,197,0.18)",
                        color: ACCENT,
                        border: `1px solid ${ACCENT_SOFT}0.12)`,
                      }}
                    >
                      {FORMALITY_MODULE.contextLabels[scenario.context]}
                    </span>
                    <h3
                      className="text-base font-bold"
                      style={{ color: "var(--ink)" }}
                    >
                      {scenario.title}
                    </h3>
                  </div>

                  <p
                    className="mt-3 text-sm leading-6"
                    style={{ color: "var(--ink-soft)", opacity: 0.82 }}
                  >
                    {scenario.situation}
                  </p>

                  <div className="mt-4 grid gap-3 lg:grid-cols-3">
                    {[
                      {
                        label: "Informal",
                        color: "#C2410C",
                        bg: "rgba(255,237,213,0.58)",
                        border: "rgba(194,65,12,0.14)",
                        value: scenario.informal,
                      },
                      {
                        label: "Neutro",
                        color: ACCENT,
                        bg: "rgba(176,190,197,0.12)",
                        border: `${ACCENT_SOFT}0.12)`,
                        value: scenario.neutral,
                      },
                      {
                        label: "Formal alto",
                        color: "#5B21B6",
                        bg: "rgba(209,196,233,0.24)",
                        border: "rgba(91,33,182,0.14)",
                        value: scenario.formal,
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border p-4"
                        style={{
                          background: item.bg,
                          borderColor: item.border,
                        }}
                      >
                        <p
                          className="text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                          style={{ color: item.color }}
                        >
                          {item.label}
                        </p>
                        <div className="mt-2">
                          <RubyText
                            segments={item.value}
                            className="char-display text-base leading-8"
                            style={{ color: "var(--ink)" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <p
                    className="mt-4 text-sm leading-6"
                    style={{ color: "var(--ink-soft)", opacity: 0.82 }}
                  >
                    {scenario.note}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-8 rounded-[28px] border p-5 sm:p-6">
            <SectionTitle
              eyebrow="Errores de registro"
              title="Donde suena demasiado casual o demasiado rígido"
              desc="No todo error es gramatical: a veces el problema es simplemente el registro."
            />

            <div className="grid gap-4">
              {FORMALITY_MODULE.mistakes.map((mistake, index) => (
                <div
                  key={index}
                  className="rounded-[22px] border p-4"
                  style={{
                    background: "rgba(255,255,255,0.84)",
                    borderColor: `${ACCENT_SOFT}0.10)`,
                  }}
                >
                  <div className="grid gap-3 md:grid-cols-2">
                    <div
                      className="rounded-2xl border p-4"
                      style={{
                        background: "rgba(254,226,226,0.62)",
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

                  <p
                    className="mt-4 text-sm leading-6"
                    style={{ color: "var(--ink-soft)", opacity: 0.82 }}
                  >
                    {mistake.explanation}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-8 rounded-[28px] border p-5 sm:p-6">
            <SectionTitle
              eyebrow="Practicar ahora"
              title="Lleva esta materia al quiz interactivo"
              desc="La parte más difícil del registro no es solo la forma: es decidir qué tan natural, qué tan cortés y qué tan adecuado suena en cada contexto."
            />

            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
              <div
                className="rounded-[24px] border p-5"
                style={{
                  background: "rgba(255,255,255,0.84)",
                  borderColor: `${ACCENT_SOFT}0.10)`,
                }}
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <div
                    className="rounded-2xl border p-4"
                    style={{
                      background: "rgba(176,190,197,0.10)",
                      borderColor: `${ACCENT_SOFT}0.10)`,
                    }}
                  >
                    <p
                      className="text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                      style={{ color: ACCENT }}
                    >
                      Qué entrena
                    </p>
                    <ul
                      className="mt-3 space-y-2 text-sm leading-6"
                      style={{ color: "var(--ink-soft)" }}
                    >
                      <li>• identificar el registro correcto</li>
                      <li>• transformar informal ↔ neutro</li>
                      <li>• corregir frases fuera de contexto</li>
                      <li>• elegir la opción más natural</li>
                    </ul>
                  </div>

                  <div
                    className="rounded-2xl border p-4"
                    style={{
                      background: "rgba(176,190,197,0.10)",
                      borderColor: `${ACCENT_SOFT}0.10)`,
                    }}
                  >
                    <p
                      className="text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                      style={{ color: ACCENT }}
                    >
                      Ruta sugerida
                    </p>
                    <div className="mt-3 space-y-2">
                      {FORMALITY_REGISTER_SESSION_PRESETS.slice(0, 3).map(
                        (preset) => (
                          <div
                            key={preset.id}
                            className="rounded-xl border px-3 py-2 text-sm"
                            style={{
                              background: "rgba(255,255,255,0.82)",
                              borderColor: `${ACCENT_SOFT}0.10)`,
                              color: "var(--ink)",
                            }}
                          >
                            {preset.label}
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="rounded-[24px] border p-5"
                style={{
                  background: "rgba(176,190,197,0.12)",
                  borderColor: `${ACCENT_SOFT}0.12)`,
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ color: ACCENT }}
                >
                  Acceso rápido
                </p>
                <h3
                  className="mt-2 text-xl font-bold"
                  style={{ color: "var(--ink)" }}
                >
                  Practicar Registro
                </h3>
                <p
                  className="mt-3 text-sm leading-6"
                  style={{ color: "var(--ink-soft)", opacity: 0.82 }}
                >
                  Entra directo al quiz y trabaja decisiones de tono, contexto y
                  naturalidad con una sesión configurable.
                </p>

                <Link
                  href={PRACTICE_HREF}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:brightness-110"
                  style={{
                    background: GRADIENT,
                    boxShadow: `0 12px 28px ${ACCENT_SOFT}0.18)`,
                  }}
                >
                  Abrir práctica →
                </Link>
              </div>
            </div>
          </section>

          <section className="mt-8 rounded-[28px] border p-5 sm:p-6">
            <SectionTitle
              eyebrow="Puerta de entrada a keigo"
              title="Dónde empieza la capa alta"
              desc="Aquí no desarrollo todavía el módulo completo de keigo; solo dejo clara su posición dentro de Formalidad."
            />

            <div className="grid gap-4 md:grid-cols-3">
              {FORMALITY_MODULE.keigoBridge.map((card) => (
                <div
                  key={card.jp}
                  className="rounded-[22px] border p-5"
                  style={{
                    background: card.color,
                    borderColor: `${card.accent}22`,
                    boxShadow: `0 14px 30px ${card.accent}11`,
                  }}
                >
                  <p
                    className="text-xs font-bold uppercase tracking-[0.18em]"
                    style={{ color: card.accent }}
                  >
                    {card.jp}
                  </p>
                  <h3
                    className="mt-2 text-lg font-bold"
                    style={{ color: "var(--ink)" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-6"
                    style={{ color: "var(--ink-soft)", opacity: 0.82 }}
                  >
                    {card.desc}
                  </p>

                  <div
                    className="mt-4 rounded-2xl border p-4"
                    style={{
                      background: "rgba(255,255,255,0.68)",
                      borderColor: "rgba(255,255,255,0.6)",
                    }}
                  >
                    <RubyText
                      segments={card.example}
                      className="char-display text-base leading-8"
                      style={{ color: "var(--ink)" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex justify-center lg:justify-end">
              <Link
                href={KEIGO_HREF}
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.78)",
                  border: `1px solid rgba(91,33,182,0.16)`,
                  color: "var(--ink)",
                }}
              >
                Continuar con Keigo →
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}