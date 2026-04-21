//src/app/gramatica/verbos/grupos/ichidan/page.tsx

"use client";

import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import { VERB_LIST } from "@/data/grammar/verbs";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";
import { RubyText } from "@/app/components/ui/Ruby";

const ACCENT = "#2E7D32";
const ACCENT_SOFT = "rgba(129,199,132,";
const GRADIENT = "linear-gradient(135deg, #81C784, #2E7D32)";

const ICHIDAN_VERBS = VERB_LIST.filter((v) => v.group === "ichidan");

const COMPARISON = [
  {
    verb: "食べる",
    kanji: "食",
    furigana: "た",
    morpheme: "べる",
    vowelBefore: "べ (え)",
    group: 2,
    correct: true,
    note: "La vocal antes de る es え, por eso sigue el patrón típico de Grupo 2.",
  },
  {
    verb: "起きる",
    kanji: "起",
    furigana: "お",
    morpheme: "きる",
    vowelBefore: "き (い)",
    group: 2,
    correct: true,
    note: "La vocal antes de る es い, así que normalmente se conjuga como Grupo 2.",
  },
  {
    verb: "帰る",
    kanji: "帰",
    furigana: "かえ",
    morpheme: "る",
    vowelBefore: "え → pero es godan",
    group: 1,
    correct: false,
    note: "⚠️ Aunque parece える, 帰る es Grupo 1 y se memoriza como excepción.",
  },
  {
    verb: "切る",
    kanji: "切",
    furigana: "き",
    morpheme: "る",
    vowelBefore: "き (い) → pero es godan",
    group: 1,
    correct: false,
    note: "⚠️ Aunque termina en いる, 切る también es Grupo 1.",
  },
];

const EXAMPLE_FORMS = [
  { dictionary: "食べる", result: "食べます", label: "ます形" },
  { dictionary: "食べる", result: "食べて", label: "て形" },
  { dictionary: "食べる", result: "食べた", label: "た形" },
  { dictionary: "食べる", result: "食べない", label: "ない形" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const LEVEL_FILTERS = ["N5", "N4", "N3", "N2", "N1"] as const;
type LevelFilter = (typeof LEVEL_FILTERS)[number] | "all";

function shuffleArray<T>(array: T[]) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function stripIchidanRu(morpheme: string) {
  return morpheme.endsWith("る") ? morpheme.slice(0, -1) : morpheme;
}

export default function IchidanPage() {
    const [selectedLevel, setSelectedLevel] = useState<LevelFilter>("N5");
  const [showAll, setShowAll] = useState(false);
  const [previewIchidanVerbs, setPreviewIchidanVerbs] = useState<typeof ICHIDAN_VERBS>([]);

  const filteredIchidanVerbs = useMemo(() => {
    if (selectedLevel === "all") {
      return ICHIDAN_VERBS;
    }

    return ICHIDAN_VERBS.filter((verb) => verb.level === selectedLevel);
  }, [selectedLevel]);

  useEffect(() => {
    setPreviewIchidanVerbs(shuffleArray(filteredIchidanVerbs).slice(0, 10));
  }, [filteredIchidanVerbs]);

  const safePreviewIchidanVerbs =
    previewIchidanVerbs.length > 0
      ? previewIchidanVerbs
      : filteredIchidanVerbs.slice(0, 10);

  const visibleIchidanVerbs = showAll ? filteredIchidanVerbs : safePreviewIchidanVerbs;
  const canExpand = filteredIchidanVerbs.length > 10;

  const handleLevelChange = (level: LevelFilter) => {
    setSelectedLevel(level);
    setShowAll(false);
  };

  const reshufflePreview = () => {
    setPreviewIchidanVerbs(shuffleArray(filteredIchidanVerbs).slice(0, 10));
  };
  return (
    <main
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: "var(--paper)" }}
    >
      <SakuraAnimation />

      <div className="relative z-10 w-full px-6 pb-40 pt-8 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto flex w-full justify-center">
          <div className="w-full max-w-[1120px] space-y-12 pt-2 xl:max-w-[1180px]">
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
                一段活用 · Grupo 2
              </div>

              <RubyText
                segments={[
                  { text: "一段", ruby: "いちだん" },
                  { text: "活用", ruby: "かつよう" },
                ]}
                className="char-display mb-3 block text-3xl font-bold sm:text-4xl"
                style={{ color: "var(--ink)" }}
              />

              <p
                className="text-sm leading-7 sm:text-[0.98rem]"
                style={{ color: "var(--ink-soft)", opacity: 0.82 }}
              >
                Los verbos Ichidan se llaman <strong>一段 (un escalón)</strong> porque su
                base no va cambiando por columnas como en Godan. En casi todas las formas,
                simplemente se quita <strong>る</strong> y se agrega la terminación.
              </p>

              <div
                className="mt-5 rounded-2xl p-4 text-sm leading-7 sm:p-5"
                style={{
                  background: `${ACCENT_SOFT}0.06)`,
                  border: `1px solid ${ACCENT_SOFT}0.12)`,
                  color: "var(--ink-soft)",
                }}
              >
                <strong style={{ color: ACCENT }}>¿Cómo identificarlos?</strong>{" "}
                La mayoría de los verbos Ichidan terminan en <strong>〜いる</strong> o{" "}
                <strong>〜える</strong>. Por eso, si ves un verbo en{" "}
                <strong>る</strong> con sonido <strong>i / e</strong> antes del る,
                muchas veces será Grupo 2.
                <span className="mt-3 block">
                  Ejemplos típicos: 食べる、起きる、見る、寝る、教える.
                </span>
                <span className="mt-3 block">
                  Pero ojo: también existen excepciones que parecen Ichidan y en realidad
                  son <strong>Grupo 1</strong>, como 帰る o 切る.
                </span>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="space-y-5"
            >
              <h2
                className="px-1 text-sm font-bold uppercase tracking-[0.18em] sm:px-0"
                style={{ color: ACCENT }}
              >
                Regla de conjugación — siempre igual
              </h2>

              <div
                className="rounded-[28px] border bg-white/75 p-4 sm:p-5 lg:p-6"
                style={{ border: `1px solid ${ACCENT_SOFT}0.12)` }}
              >
                <div className="rounded-[24px] border px-4 py-5 sm:px-6">
                  <div className="flex flex-wrap items-center justify-center gap-3 text-center sm:gap-4">
                    <div
                      className="rounded-2xl px-4 py-3"
                      style={{ background: `${ACCENT_SOFT}0.06)` }}
                    >
                      <div className="char-display text-3xl font-bold" style={{ color: "var(--ink)" }}>
                        食べ<span style={{ color: ACCENT }}>る</span>
                      </div>
                      <p
                        className="mt-1 text-xs"
                        style={{ color: "var(--ink-soft)", opacity: 0.62 }}
                      >
                        diccionario
                      </p>
                    </div>

                    <div
                      className="text-2xl font-semibold opacity-40"
                      style={{ color: "var(--ink-soft)" }}
                    >
                      →
                    </div>

                    <div
                      className="rounded-2xl px-4 py-3"
                      style={{ background: `${ACCENT_SOFT}0.06)` }}
                    >
                      <div className="char-display text-3xl font-bold" style={{ color: "var(--ink)" }}>
                        食べ
                      </div>
                      <p
                        className="mt-1 text-xs"
                        style={{ color: "var(--ink-soft)", opacity: 0.62 }}
                      >
                        quitar る
                      </p>
                    </div>

                    <div
                      className="text-2xl font-semibold opacity-40"
                      style={{ color: "var(--ink-soft)" }}
                    >
                      +
                    </div>

                    <div
                      className="rounded-2xl px-4 py-3"
                      style={{ background: `${ACCENT_SOFT}0.10)` }}
                    >
                      <div className="char-display text-3xl font-bold" style={{ color: ACCENT }}>
                        ます / て / た / ない
                      </div>
                      <p
                        className="mt-1 text-xs"
                        style={{ color: "var(--ink-soft)", opacity: 0.62 }}
                      >
                        añadir terminación
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {EXAMPLE_FORMS.map((item, i) => (
                    <motion.div
                      key={item.label}
                      custom={i}
                      initial="hidden"
                      animate="show"
                      variants={fadeUp}
                      className="rounded-2xl border p-4"
                      style={{
                        background: "rgba(255,255,255,0.86)",
                        border: `1px solid ${ACCENT_SOFT}0.12)`,
                      }}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className="char-display text-lg font-bold"
                          style={{ color: "var(--ink)" }}
                        >
                          {item.dictionary}
                        </span>
                        <span
                          className="text-sm opacity-45"
                          style={{ color: "var(--ink-soft)" }}
                        >
                          →
                        </span>
                        <span
                          className="char-display text-lg font-bold"
                          style={{ color: ACCENT }}
                        >
                          {item.result}
                        </span>
                      </div>

                      <p
                        className="mt-2 text-xs"
                        style={{ color: "var(--ink-soft)", opacity: 0.62 }}
                      >
                        {item.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="space-y-5"
            >
              <h2
                className="px-1 text-sm font-bold uppercase tracking-[0.18em] sm:px-0"
                style={{ color: ACCENT }}
              >
                Diferencia entre Grupo 1 y Grupo 2 — verbos en る
              </h2>

              <p
                className="px-1 text-sm"
                style={{ color: "var(--ink-soft)", opacity: 0.72 }}
              >
                Aquí es donde más se confunden los estudiantes: muchos verbos en る
                parecen Ichidan, pero algunos siguen siendo Godan.
              </p>

              <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4">
                {COMPARISON.map((item, i) => (
                  <motion.div
                    key={item.verb}
                    custom={i}
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="rounded-[24px] border p-4 sm:p-5"
                    style={{
                      background: item.correct
                        ? "rgba(255,255,255,0.9)"
                        : "rgba(255,247,247,0.95)",
                      border: item.correct
                        ? `1px solid ${ACCENT_SOFT}0.16)`
                        : "1px solid rgba(220,38,38,0.16)",
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <RubyText
                            segments={[
                              { text: item.kanji, ruby: item.furigana },
                              { text: item.morpheme },
                            ]}
                            className="char-display text-2xl font-bold leading-none sm:text-3xl"
                            style={{ color: item.correct ? ACCENT : "#B91C1C" }}
                            rtStyle={{ fontSize: "0.68em", opacity: 0.92 }}
                          />

                          <span
                            className="rounded-full px-2 py-1 text-[0.68rem] font-bold"
                            style={{
                              background: item.correct
                                ? `${ACCENT_SOFT}0.10)`
                                : "rgba(220,38,38,0.08)",
                              color: item.correct ? ACCENT : "#B91C1C",
                            }}
                          >
                            {item.correct ? "G2" : "G1"}
                          </span>
                        </div>

                        <p
                          className="mt-2 text-sm"
                          style={{
                            color: item.correct ? "var(--ink-soft)" : "#7F1D1D",
                            opacity: 0.82,
                          }}
                        >
                          {item.note}
                        </p>

                        <p
                          className="mt-2 text-xs"
                          style={{
                            color: item.correct ? "var(--ink-soft)" : "#7F1D1D",
                            opacity: 0.62,
                          }}
                        >
                          patrón antes de る: {item.vowelBefore}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div
                className="rounded-2xl border px-4 py-4 sm:px-5"
                style={{
                  background: "rgba(255,248,220,0.78)",
                  border: "1px solid rgba(255,193,7,0.25)",
                  color: "#7B6000",
                }}
              >
                <p className="text-sm leading-7">
                  💡 Consejo: si recién empiezas, piensa que muchos verbos en{" "}
                  <strong>〜いる / 〜える</strong> son Grupo 2, pero memoriza pronto las
                  excepciones más comunes de Grupo 1, como 帰る、切る、走る、知る.
                </p>
              </div>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="space-y-4"
                >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                    <h2
                        className="px-1 text-sm font-bold uppercase tracking-[0.18em] sm:px-0"
                        style={{ color: ACCENT }}
                    >
                        Verbos Ichidan — {selectedLevel === "all" ? "Todos" : selectedLevel}
                    </h2>

                    <p
                        className="mt-2 px-1 text-xs sm:text-sm"
                        style={{ color: "var(--ink-soft)", opacity: 0.72 }}
                    >
                        Mostrando {visibleIchidanVerbs.length} de {filteredIchidanVerbs.length} verbos
                    </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {LEVEL_FILTERS.map((level) => {
                    const isActive = selectedLevel === level;

                    return (
                        <button
                        key={level}
                        onClick={() => handleLevelChange(level)}
                        className="rounded-full px-4 py-2 text-sm font-semibold transition-all"
                        style={{
                            color: isActive ? "white" : ACCENT,
                            background: isActive ? GRADIENT : "rgba(255,255,255,0.82)",
                            border: `1px solid ${isActive ? "transparent" : `${ACCENT_SOFT}0.20)`}`,
                            boxShadow: isActive ? `0 10px 24px ${ACCENT_SOFT}0.18)` : "none",
                        }}
                        >
                        {level}
                        </button>
                    );
                    })}

                    <button
                    onClick={() => handleLevelChange("all")}
                    className="rounded-full px-4 py-2 text-sm font-semibold transition-all"
                    style={{
                        color: selectedLevel === "all" ? "white" : ACCENT,
                        background: selectedLevel === "all" ? GRADIENT : "rgba(255,255,255,0.82)",
                        border: `1px solid ${
                        selectedLevel === "all" ? "transparent" : `${ACCENT_SOFT}0.20)`
                        }`,
                        boxShadow:
                        selectedLevel === "all" ? `0 10px 24px ${ACCENT_SOFT}0.18)` : "none",
                    }}
                    >
                    Todos
                    </button>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                    {canExpand && !showAll && (
                    <button
                        onClick={() => setShowAll(true)}
                        className="rounded-2xl px-4 py-2.5 text-sm font-semibold transition-all hover:brightness-105"
                        style={{
                        color: ACCENT,
                        background: "rgba(255,255,255,0.82)",
                        border: `1px solid ${ACCENT_SOFT}0.20)`,
                        }}
                    >
                        Mostrar todos ({filteredIchidanVerbs.length})
                    </button>
                    )}

                    {canExpand && showAll && (
                    <button
                        onClick={() => setShowAll(false)}
                        className="rounded-2xl px-4 py-2.5 text-sm font-semibold transition-all hover:brightness-105"
                        style={{
                        color: ACCENT,
                        background: "rgba(255,255,255,0.82)",
                        border: `1px solid ${ACCENT_SOFT}0.20)`,
                        }}
                    >
                        Volver a 10 random
                    </button>
                    )}
                </div>

                {!showAll && filteredIchidanVerbs.length > 10 && (
                    <button
                    onClick={reshufflePreview}
                    className="rounded-2xl px-4 py-2.5 text-sm font-semibold transition-all hover:brightness-105"
                    style={{
                        color: ACCENT,
                        background: "rgba(255,255,255,0.82)",
                        border: `1px solid ${ACCENT_SOFT}0.20)`,
                    }}
                    >
                    Otros 10 random
                    </button>
                )}

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
                    {visibleIchidanVerbs.map((verb, i) => (
                    <motion.div
                        key={verb.dictionary}
                        custom={i}
                        initial="hidden"
                        animate="show"
                        variants={fadeUp}
                        className="rounded-[24px] border p-4 sm:p-5"
                        style={{
                        background: "rgba(255,255,255,0.9)",
                        border: "1px solid var(--border)",
                        }}
                    >
                        <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                            <div className="flex flex-wrap items-end gap-2">
                            <RubyText
                                segments={
                                verb.kanji
                                    ? [
                                        { text: verb.kanji, ruby: verb.furigana },
                                        { text: verb.morpheme },
                                    ]
                                    : [{ text: verb.dictionary }]
                                }
                                className="char-display text-2xl font-bold leading-none sm:text-3xl"
                                style={{ color: ACCENT }}
                                rtStyle={{ fontSize: "0.68em", opacity: 0.92 }}
                            />

                            <span
                                className="text-base font-semibold opacity-45 sm:text-lg"
                                style={{ color: "var(--ink-soft)" }}
                            >
                                →
                            </span>

                            <RubyText
                                segments={
                                verb.kanji
                                    ? [
                                        { text: verb.kanji, ruby: verb.furigana },
                                        { text: `${stripIchidanRu(verb.morpheme)}ます` },
                                    ]
                                    : [{ text: `${stripIchidanRu(verb.dictionary)}ます` }]
                                }
                                className="char-display text-2xl font-bold leading-none sm:text-3xl"
                                style={{ color: "var(--ink)" }}
                                rtStyle={{ fontSize: "0.68em", opacity: 0.92 }}
                            />
                            </div>

                            <p
                            className="mt-2 text-sm sm:text-base"
                            style={{ color: "var(--ink-soft)", opacity: 0.8 }}
                            >
                            {verb.meaning}
                            </p>

                            <p
                            className="mt-2 text-xs sm:text-sm"
                            style={{ color: "var(--ink-soft)", opacity: 0.62 }}
                            >
                            quitar る + ます
                            </p>
                        </div>

                        <span
                            className="shrink-0 rounded-full px-2 py-1 text-[0.68rem] font-bold"
                            style={{ background: `${ACCENT_SOFT}0.10)`, color: ACCENT }}
                        >
                            {verb.level}
                        </span>
                        </div>
                    </motion.div>
                    ))}
                </div>
            </motion.section>

            <div className="pt-2">
                <div className="h-6 sm:h-8" />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <Link
                    href="/gramatica/verbos/grupos/godan"
                    className="rounded-2xl py-3.5 text-center text-sm font-semibold transition-all hover:bg-white"
                    style={{
                        border: `1px solid ${ACCENT_SOFT}0.20)`,
                        color: "var(--ink)",
                        background: "rgba(255,255,255,0.7)",
                    }}
                    >
                    Grupo 1
                    </Link>

                    <Link
                    href="/gramatica/verbos/grupos/ichidan"
                    aria-current="page"
                    className="rounded-2xl py-3.5 text-center text-sm font-bold text-white pointer-events-none"
                    style={{ background: GRADIENT }}
                    >
                    Grupo 2
                    </Link>

                    <Link
                    href="/gramatica/verbos/grupos/irregulares"
                    className="rounded-2xl py-3.5 text-center text-sm font-semibold transition-all hover:bg-white"
                    style={{
                        border: `1px solid ${ACCENT_SOFT}0.20)`,
                        color: "var(--ink)",
                        background: "rgba(255,255,255,0.7)",
                    }}
                    >
                    Grupo 3
                    </Link>
                </div>

                <div className="h-5 sm:h-6" />

                <div className="flex flex-col gap-4 sm:flex-row">
                    <Link
                    href="/gramatica/verbos/conjugaciones"
                    className="flex-1 rounded-2xl py-3.5 text-center text-sm font-bold text-white transition-all hover:brightness-110"
                    style={{ background: GRADIENT }}
                    >
                    Ver conjugaciones →
                    </Link>

                    <Link
                    href="/gramatica/verbos/quiz"
                    className="flex-1 rounded-2xl py-3.5 text-center text-sm font-semibold transition-all hover:bg-white"
                    style={{
                        border: `1px solid ${ACCENT_SOFT}0.20)`,
                        color: "var(--ink)",
                        background: "rgba(255,255,255,0.7)",
                    }}
                    >
                    ◎ Practicar quiz
                    </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}