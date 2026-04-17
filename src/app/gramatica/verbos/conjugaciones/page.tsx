"use client";

//src/app/gramatica/verbos/conjugaciones/page.tsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CONJUGATION_FORMS } from "@/data/grammar/verbs";
import type { ConjForm, ConjExample, VerbGroup } from "@/data/grammar/verbs";
import { RubyText } from "@/app/components/ui/Ruby";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";

const ACCENT = "#5D4037";
const ACCENT_SOFT = "rgba(141,110,99,";

const GROUP_LABELS: Record<
  VerbGroup,
  { label: string; color: string; accent: string }
> = {
  godan: { label: "Grupo 1 — 五段", color: "#FFAB40", accent: "#E65100" },
  ichidan: { label: "Grupo 2 — 一段", color: "#81C784", accent: "#2E7D32" },
  irregular: { label: "Grupo 3 — 変格", color: "#90CAF9", accent: "#1565C0" },
};

const LEVEL_SECTIONS = [
  {
    level: "N5",
    label: "N5 — Básico",
    textColor: "#1565C0",
    bgColor: "rgba(144,202,249,0.12)",
    borderColor: "rgba(144,202,249,0.30)",
  },
  {
    level: "N4",
    label: "N4 — Intermedio",
    textColor: "#E65100",
    bgColor: "rgba(255,171,64,0.12)",
    borderColor: "rgba(255,171,64,0.30)",
  },
  {
    level: "N3",
    label: "N3 — Avanzado",
    textColor: "#2E7D32",
    bgColor: "rgba(129,199,132,0.12)",
    borderColor: "rgba(129,199,132,0.30)",
  },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      delay: i * 0.06,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

function ConjugationDisplay({ ex }: { ex: ConjExample }) {
  return (
    <div
      className="rounded-[22px] border p-4 sm:p-5"
      style={{
        background: "rgba(255,255,255,0.88)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <div className="flex min-w-0 flex-wrap items-baseline gap-0.5">
            {ex.kanji ? (
              <RubyText
                segments={[{ text: ex.kanji, ruby: ex.furigana }]}
                className="char-display text-xl font-bold sm:text-2xl"
                style={{ color: "var(--ink-soft)" }}
              />
            ) : null}

            <span
              className="char-display text-xl sm:text-2xl"
              style={{ color: "var(--ink-soft)", opacity: 0.55 }}
            >
              {ex.morpheme}
            </span>
          </div>

          <span
            className="text-sm sm:text-base"
            style={{ color: "var(--ink-soft)", opacity: 0.4 }}
          >
            →
          </span>

          <div className="flex min-w-0 flex-wrap items-baseline gap-0.5">
            {ex.conjKanji ? (
              <RubyText
                segments={[{ text: ex.conjKanji, ruby: ex.conjFurigana }]}
                className="char-display text-xl font-bold sm:text-2xl"
                style={{ color: "var(--ink)" }}
              />
            ) : null}

            <span
              className="char-display text-xl font-bold sm:text-2xl"
              style={{ color: ACCENT }}
            >
              {ex.conjMorpheme}
            </span>
          </div>
        </div>

        <p
          className="text-sm leading-6 sm:text-[0.96rem]"
          style={{ color: "var(--ink-soft)", opacity: 0.78 }}
        >
          {ex.meaning}
        </p>

        {ex.exampleSegments && (
          <div
            className="rounded-2xl px-4 py-3"
            style={{
              background: `${ACCENT_SOFT}0.05)`,
              border: `1px solid ${ACCENT_SOFT}0.10)`,
            }}
          >
            <RubyText
              segments={ex.exampleSegments}
              className="char-display text-base leading-loose sm:text-[1.02rem]"
              style={{ color: "var(--ink)" }}
            />

            {ex.exampleTranslation && (
              <p
                className="mt-1.5 text-xs italic sm:text-sm"
                style={{ color: "var(--ink-soft)", opacity: 0.68 }}
              >
                {ex.exampleTranslation}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function FormCard({ form }: { form: ConjForm }) {
  const [openGroup, setOpenGroup] = useState<VerbGroup | null>(null);

  return (
    <div
      className="overflow-hidden rounded-[28px] border"
      style={{
        background: "rgba(255,255,255,0.82)",
        border: `1px solid ${ACCENT_SOFT}0.12)`,
        boxShadow: `0 14px 34px ${ACCENT_SOFT}0.07)`,
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="h-1.5" style={{ background: form.color }} />

      <div className="px-5 py-5 sm:px-6 sm:py-6 lg:px-7 lg:py-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-xl font-bold sm:h-16 sm:w-16 sm:text-2xl"
            style={{
              background: `${form.color}26`,
              color: ACCENT,
              border: `1px solid ${form.color}66`,
            }}
          >
            <RubyText
              segments={form.titleSegments.slice(0, 1)}
              className="char-display"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <RubyText
                segments={form.titleSegments}
                className="char-display text-xl font-bold sm:text-2xl"
                style={{ color: "var(--ink)" }}
              />

              <span
                className="rounded-full px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em]"
                style={{ background: `${form.color}33`, color: ACCENT }}
              >
                {form.level}
              </span>
            </div>

            <p
              className="mt-2 text-sm leading-7 sm:text-[0.98rem]"
              style={{ color: "var(--ink-soft)", opacity: 0.78 }}
            >
              {form.description}
            </p>
          </div>
        </div>

        <div
          className="mt-5 rounded-2xl px-4 py-3.5 text-sm leading-7 sm:px-5 sm:py-4"
          style={{
            background: `${ACCENT_SOFT}0.06)`,
            border: `1px solid ${ACCENT_SOFT}0.10)`,
            color: "var(--ink-soft)",
          }}
        >
          <span className="font-bold" style={{ color: ACCENT }}>
            Uso:
          </span>{" "}
          {form.usage}
        </div>
      </div>

      <div
        className="border-t px-4 py-4 sm:px-6 sm:py-5 lg:px-7"
        style={{ borderColor: `${ACCENT_SOFT}0.08)` }}
      >
        <p
          className="pb-3 text-xs font-bold uppercase tracking-[0.18em]"
          style={{ color: "var(--ink-soft)", opacity: 0.52 }}
        >
          Por grupo
        </p>

        <div className="space-y-3">
          {form.groups.map((group) => {
            const meta = GROUP_LABELS[group.group];
            const isOpen = openGroup === group.group;

            return (
              <div key={group.group}>
                <button
                  onClick={() => setOpenGroup(isOpen ? null : group.group)}
                  className="w-full rounded-[22px] border px-4 py-4 text-left transition-all duration-200 hover:-translate-y-0.5 sm:px-5"
                  style={{
                    background: isOpen
                      ? `${meta.color}14`
                      : "rgba(255,255,255,0.78)",
                    border: `1px solid ${
                      isOpen ? `${meta.color}55` : "var(--border)"
                    }`,
                    boxShadow: isOpen ? `0 10px 24px ${meta.color}22` : "none",
                  }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className="mt-1 h-3 w-3 shrink-0 rounded-full"
                      style={{ background: meta.color }}
                    />

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-1">
                        <span
                          className="text-sm font-semibold sm:text-base"
                          style={{
                            color: isOpen ? meta.accent : "var(--ink)",
                          }}
                        >
                          {meta.label}
                        </span>

                        <p
                          className="text-xs leading-6 sm:text-sm"
                          style={{
                            color: "var(--ink-soft)",
                            opacity: 0.68,
                          }}
                        >
                          {group.rule.split("\n")[0]}
                        </p>
                      </div>
                    </div>

                    <span
                      className="mt-0.5 shrink-0 text-sm transition-transform duration-200"
                      style={{
                        color: meta.accent,
                        transform: isOpen ? "rotate(180deg)" : "none",
                      }}
                    >
                      ▾
                    </span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3 px-1 pb-1 pt-3 sm:px-2">
                        <div
                          className="rounded-2xl p-4 text-sm leading-7 sm:p-5"
                          style={{
                            background: `${meta.color}10`,
                            border: `1px solid ${meta.color}33`,
                            color: meta.accent,
                            whiteSpace: "pre-line",
                          }}
                        >
                          <span className="font-semibold">📐 Regla:</span>{" "}
                          {group.rule}
                        </div>

                        <div className="grid grid-cols-1 gap-3 xl:grid-cols-2">
                          {group.examples.map((ex, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.04 }}
                            >
                              <ConjugationDisplay ex={ex} />
                            </motion.div>
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

export default function ConjugacionesPage() {
  return (
    <main
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: "var(--paper)" }}
    >
      <SakuraAnimation />

      <div className="relative z-10 w-full px-4 pb-32 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full justify-center">
          <div className="w-full max-w-[1120px] space-y-10 pt-2 xl:max-w-[1180px]">
            <Link
              href="/gramatica/verbos"
              className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: ACCENT }}
            >
              ← Verbos
            </Link>

            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="rounded-[32px] border px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8"
              style={{
                background: "rgba(255,255,255,0.82)",
                border: `1px solid ${ACCENT_SOFT}0.15)`,
                boxShadow: `0 16px 36px ${ACCENT_SOFT}0.07)`,
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                style={{
                  color: ACCENT,
                  background: `${ACCENT_SOFT}0.10)`,
                  border: `1px solid ${ACCENT_SOFT}0.20)`,
                }}
              >
                活用形 · Formas de conjugación
              </div>

              <h1
                className="char-display text-3xl font-bold sm:text-4xl"
                style={{ color: "var(--ink)" }}
              >
                Conjugaciones
              </h1>

              <p
                className="mt-3 max-w-4xl text-sm leading-7 sm:text-[0.98rem]"
                style={{ color: "var(--ink-soft)", opacity: 0.82 }}
              >
                Haz clic en cada grupo para ver las reglas y ejemplos con
                furigana. Cada forma muestra cómo cambia el morfema en los tres
                grupos.
              </p>
            </motion.section>

            {LEVEL_SECTIONS.map((section) => {
              const forms = CONJUGATION_FORMS.filter(
                (form) => form.level === section.level
              );

              if (forms.length === 0) {
                return null;
              }

              return (
                <section key={section.level} className="space-y-5">
                  <div
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                    style={{
                      color: section.textColor,
                      background: section.bgColor,
                      border: `1px solid ${section.borderColor}`,
                    }}
                  >
                    {section.label}
                  </div>

                  <div className="space-y-5">
                    {forms.map((form, i) => (
                      <motion.div
                        key={form.key}
                        custom={i}
                        initial="hidden"
                        animate="show"
                        variants={fadeUp}
                      >
                        <FormCard form={form} />
                      </motion.div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}