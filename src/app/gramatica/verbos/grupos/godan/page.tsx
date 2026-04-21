//src/app/gramatica/verbos/grupos/godan/page.tsx

"use client";

import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import { VERB_LIST } from "@/data/grammar/verbs";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";
import { RubyText } from "@/app/components/ui/Ruby";


const ACCENT = "#E65100";
const ACCENT_SOFT = "rgba(255,171,64,";
const GRADIENT = "linear-gradient(135deg, #FFAB40, #E65100)";

const GODAN_VERBS = VERB_LIST.filter(v => v.group === "godan");

const GODAN_MASU_MAP: Record<string, string> = {
  "う": "い",
  "く": "き",
  "ぐ": "ぎ",
  "す": "し",
  "つ": "ち",
  "ぬ": "に",
  "ぶ": "び",
  "む": "み",
  "る": "り",
};

function splitEnding(text: string) {
  const prefix = text.slice(0, -1);
  const ending = text.slice(-1);
  return { prefix, ending };
}

function getGodanMasuText(text: string) {
  const { prefix, ending } = splitEnding(text);
  const masuEnding = GODAN_MASU_MAP[ending] ?? ending;
  return `${prefix}${masuEnding}ます`;
}

function getGodanMutationLabel(text: string) {
  const { ending } = splitEnding(text);
  const masuEnding = GODAN_MASU_MAP[ending] ?? ending;
  return `${ending} → ${masuEnding} + ます`;
}

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

// The 5 escalones table
const ESCALONES = [
  { kana: "あ", label: "あ段", use: "ない形・受身・使役", color: "#EF9A9A" },
  { kana: "い", label: "い段", use: "ます形・たい形", color: "#FFAB40" },
  { kana: "う", label: "う段", use: "辞書形 (diccionario)", color: "#81C784" },
  { kana: "え", label: "え段", use: "可能形・命令形", color: "#64B5F6" },
  { kana: "お", label: "お段", use: "意向形 (volicional)", color: "#CE93D8" },
];

// Morpheme mutation table for godan
const MORPHEME_TABLE = [
  { morpheme: "う", a: "わ", i: "い", u: "う", e: "え", o: "お", example: { kanji: "買", ruby: "か" } },
  { morpheme: "く", a: "か", i: "き", u: "く", e: "け", o: "こ", example: { kanji: "書", ruby: "か" } },
  { morpheme: "ぐ", a: "が", i: "ぎ", u: "ぐ", e: "げ", o: "ご", example: { kanji: "泳", ruby: "およ" } },
  { morpheme: "す", a: "さ", i: "し", u: "す", e: "せ", o: "そ", example: { kanji: "話", ruby: "はな" } },
  { morpheme: "つ", a: "た", i: "ち", u: "つ", e: "て", o: "と", example: { kanji: "待", ruby: "ま" } },
  { morpheme: "ぬ", a: "な", i: "に", u: "ぬ", e: "ね", o: "の", example: { kanji: "死", ruby: "し" } },
  { morpheme: "ぶ", a: "ば", i: "び", u: "ぶ", e: "べ", o: "ぼ", example: { kanji: "遊", ruby: "あそ" } },
  { morpheme: "む", a: "ま", i: "み", u: "む", e: "め", o: "も", example: { kanji: "飲", ruby: "の" } },
  { morpheme: "る", a: "ら", i: "り", u: "る", e: "れ", o: "ろ", example: { kanji: "帰", ruby: "かえ" } },
];

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.35, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function GodanPage() {
  const [selectedLevel, setSelectedLevel] = useState<LevelFilter>("N5");
const [showAll, setShowAll] = useState(false);
const [previewGodanVerbs, setPreviewGodanVerbs] = useState<typeof GODAN_VERBS>([]);

const filteredGodanVerbs = useMemo(() => {
  if (selectedLevel === "all") {
    return GODAN_VERBS;
  }

  return GODAN_VERBS.filter((verb) => verb.level === selectedLevel);
}, [selectedLevel]);

useEffect(() => {
  setPreviewGodanVerbs(shuffleArray(filteredGodanVerbs).slice(0, 10));
}, [filteredGodanVerbs]);

const safePreviewGodanVerbs =
  previewGodanVerbs.length > 0
    ? previewGodanVerbs
    : filteredGodanVerbs.slice(0, 10);

const visibleGodanVerbs = showAll ? filteredGodanVerbs : safePreviewGodanVerbs;
const canExpand = filteredGodanVerbs.length > 10;

const handleLevelChange = (level: LevelFilter) => {
  setSelectedLevel(level);
  setShowAll(false);
};

const reshufflePreview = () => {
  setPreviewGodanVerbs(shuffleArray(filteredGodanVerbs).slice(0, 10));
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
                五段活用 · Grupo 1
                </div>

                <RubyText
                segments={[
                    { text: "五段", ruby: "ごだん" },
                    { text: "活用", ruby: "かつよう" },
                ]}
                className="char-display mb-3 block text-3xl font-bold sm:text-4xl"
                style={{ color: "var(--ink)" }}
                />

                <p
                className="text-sm leading-7 sm:text-[0.98rem]"
                style={{ color: "var(--ink-soft)", opacity: 0.82 }}
                >
                Los verbos Godan se llaman <strong>五段 (cinco escalones)</strong>{" "}
                porque su morfema puede mutar en los cinco niveles de la tabla del
                hiragana (あ、い、う、え、お) según la forma de conjugación.
                </p>

                <div
                className="mt-5 rounded-2xl p-4 sm:p-5 text-sm leading-7"
                style={{
                    background: `${ACCENT_SOFT}0.06)`,
                    border: `1px solid ${ACCENT_SOFT}0.12)`,
                    color: "var(--ink-soft)",
                }}
                >
                <strong style={{ color: ACCENT }}>¿Cómo identificarlos?</strong>{" "}
                Los verbos del Grupo 1 pueden terminar en う、く、ぐ、す、つ、ぬ、ぶ、む、る.
                <span className="mt-3 block">
                    Si un verbo termina en <strong>る</strong>, no siempre basta con mirar
                    la vocal anterior. Los verbos en <strong>〜ある / 〜うる / 〜おる</strong>{" "}
                    son Grupo 1, y los que terminan en <strong>〜いる / 〜える</strong>{" "}
                    muchas veces son Grupo 2, pero hay excepciones importantes.
                </span>
                <span className="mt-3 block">
                    Ejemplos de verbos en <strong>〜いる / 〜える</strong> que aun así son{" "}
                    <strong>Grupo 1</strong>: 切る、走る、入る、帰る、知る、要る.
                </span>
                </div>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="space-y-4 pb-2 sm:pb-3"
            >
                <h2
                className="px-1 text-sm font-bold uppercase tracking-[0.18em] sm:px-0"
                style={{ color: ACCENT }}
                >
                Los cinco escalones — 五段
                </h2>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
                {ESCALONES.map((e, i) => (
                    <motion.div
                    key={e.kana}
                    custom={i}
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="flex min-h-[120px] flex-col justify-center rounded-2xl border p-4 text-center sm:p-5"
                    style={{
                        background: `${e.color}20`,
                        border: `1px solid ${e.color}55`,
                    }}
                    >
                    <div
                        className="char-display text-2xl font-bold"
                        style={{ color: ACCENT }}
                    >
                        {e.kana}段
                    </div>
                    <div
                        className="mt-2 text-[0.72rem] leading-snug"
                        style={{ color: "var(--ink-soft)", opacity: 0.72 }}
                    >
                        {e.use}
                    </div>
                    </motion.div>
                ))}
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
                Tabla de mutación del morfema
                </h2>

                <div
                    className="rounded-[28px] border bg-white/75 p-3 sm:p-4 lg:p-5"
                    style={{ border: `1px solid ${ACCENT_SOFT}0.12)` }}
                    >
                    <div className="overflow-x-auto rounded-2xl">
                        <table className="w-full min-w-[780px] table-fixed text-sm sm:text-[0.96rem]">
                        <colgroup>
                            <col className="w-[78px]" />
                            <col className="w-[88px]" />
                            <col className="w-[88px]" />
                            <col className="w-[88px]" />
                            <col className="w-[88px]" />
                            <col className="w-[88px]" />
                            <col className="w-[260px]" />
                        </colgroup>
                    <thead>
                        <tr style={{ background: `${ACCENT_SOFT}0.10)` }}>
                        <th className="px-4 py-3 text-left font-bold" style={{ color: ACCENT }}>Morfema</th>
                        <th className="px-4 py-3 text-center font-bold" style={{ color: "#EF5350" }}>あ段</th>
                        <th className="px-4 py-3 text-center font-bold" style={{ color: "#FFAB40" }}>い段</th>
                        <th className="px-4 py-3 text-center font-bold" style={{ color: "#4CAF50" }}>う段</th>
                        <th className="px-4 py-3 text-center font-bold" style={{ color: "#42A5F5" }}>え段</th>
                        <th className="px-4 py-3 text-center font-bold" style={{ color: "#AB47BC" }}>お段</th>
                        <th className="px-4 py-3 text-left font-bold opacity-70" style={{ color: "var(--ink-soft)" }}>
                            Ejemplo (ます形)
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {MORPHEME_TABLE.map((row, i) => (
                        <tr
                            key={row.morpheme}
                            style={{
                            background:
                                i % 2 === 0
                                ? "rgba(255,255,255,0.86)"
                                : "rgba(255,255,255,0.52)",
                            }}
                        >
                            <td className="px-4 py-3 char-display text-base font-bold" style={{ color: ACCENT }}>{row.morpheme}</td>
                            <td className="px-4 py-3 char-display text-center text-base" style={{ color: "var(--ink)" }}>{row.a}</td>
                            <td className="px-4 py-3 char-display text-center text-base" style={{ color: "var(--ink)" }}>{row.i}</td>
                            <td className="px-4 py-3 char-display text-center text-base font-semibold" style={{ color: "#4CAF50" }}>{row.u}</td>
                            <td className="px-4 py-3 char-display text-center text-base" style={{ color: "var(--ink)" }}>{row.e}</td>
                            <td className="px-4 py-3 char-display text-center text-base" style={{ color: "var(--ink)" }}>{row.o}</td>
                            <td className="px-4 py-3" style={{ color: "var(--ink-soft)" }}>
                                <div className="flex min-w-0 flex-col gap-2">
                                    <div className="flex flex-wrap items-center gap-3">
                                    <RubyText
                                        segments={[
                                        { text: row.example.kanji, ruby: row.example.ruby },
                                        { text: row.morpheme },
                                        ]}
                                        className="char-display text-lg font-bold leading-none sm:text-xl"
                                        style={{ color: "var(--ink)" }}
                                        rtStyle={{ fontSize: "0.68em", opacity: 0.92 }}
                                    />

                                    <span className="text-sm opacity-55">→</span>

                                    <RubyText
                                        segments={[
                                        { text: row.example.kanji, ruby: row.example.ruby },
                                        { text: `${row.i}ます` },
                                        ]}
                                        className="char-display text-lg font-bold leading-none sm:text-xl"
                                        style={{ color: ACCENT }}
                                        rtStyle={{ fontSize: "0.68em", opacity: 0.92 }}
                                    />
                                    </div>

                                    <span className="text-xs opacity-60 sm:text-sm">
                                    cambio típico a ます形
                                    </span>
                                </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>

                <p className="px-1 text-xs" style={{ color: "var(--ink-soft)", opacity: 0.6 }}>
                ⚠️ Excepción para verbos en て形 y た形
                </p>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="space-y-4 pb-2 sm:pb-3"
            >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <h2
                        className="px-1 text-sm font-bold uppercase tracking-[0.18em] sm:px-0"
                        style={{ color: ACCENT }}
                        >
                        Verbos Godan — {selectedLevel === "all" ? "Todos" : selectedLevel}
                        </h2>

                        <p
                        className="mt-2 px-1 text-xs sm:text-sm"
                        style={{ color: "var(--ink-soft)", opacity: 0.72 }}
                        >
                        Mostrando {visibleGodanVerbs.length} de {filteredGodanVerbs.length} verbos
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
                        Mostrar todos ({filteredGodanVerbs.length})
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

                {!showAll && filteredGodanVerbs.length > 10 && (
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
                    {visibleGodanVerbs.map((verb, i) => (
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
                                                { text: getGodanMasuText(verb.morpheme) },
                                                ]
                                            : [{ text: getGodanMasuText(verb.dictionary) }]
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
                                    {getGodanMutationLabel(verb.morpheme)}
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
                    aria-current="page"
                    className="rounded-2xl py-3.5 text-center text-sm font-bold text-white pointer-events-none"
                    style={{ background: GRADIENT }}
                    >
                    Grupo 1
                    </Link>

                    <Link
                    href="/gramatica/verbos/grupos/ichidan"
                    className="rounded-2xl py-3.5 text-center text-sm font-semibold transition-all hover:bg-white"
                    style={{
                        border: `1px solid ${ACCENT_SOFT}0.20)`,
                        color: "var(--ink)",
                        background: "rgba(255,255,255,0.7)",
                    }}
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