//src/app/gramatica/verbos/grupos/irregulares/page.tsx

"use client";

import SakuraAnimation from "@/app/components/layout/SakuraAnimation";
import { RubyText } from "@/app/components/ui/Ruby";
import { motion } from "framer-motion";
import Link from "next/link";

const ACCENT = "#1565C0";
const ACCENT_SOFT = "rgba(144,202,249,";
const GRADIENT = "linear-gradient(135deg, #90CAF9, #1565C0)";

const SURU_CONJUGATIONS = [
  { form: "します", meaning: "Hace (formal presente)", tense: "presente" },
  { form: "しません", meaning: "No hace (formal negativo)", tense: "presente-neg" },
  { form: "して", meaning: "Haciendo / Después de hacer", tense: "te-form" },
  { form: "した", meaning: "Hizo (pasado informal)", tense: "pasado" },
  { form: "しない", meaning: "No hace (informal negativo)", tense: "neg" },
  { form: "したい", meaning: "Quiere hacer", tense: "deseo" },
  { form: "できる", meaning: "Puede hacer (potencial)", tense: "potencial" },
  { form: "される", meaning: "Es hecho (pasivo)", tense: "pasivo" },
  { form: "させる", meaning: "Hace hacer (causativo)", tense: "causativo" },
];

const KURU_CONJUGATIONS = [
  { reading: "き", ending: "ます", meaning: "Viene (formal presente)", tense: "presente" },
  { reading: "き", ending: "ません", meaning: "No viene (formal negativo)", tense: "presente-neg" },
  { reading: "き", ending: "て", meaning: "Viniendo / Después de venir", tense: "te-form" },
  { reading: "き", ending: "た", meaning: "Vino (pasado informal)", tense: "pasado" },
  { reading: "こ", ending: "ない", meaning: "No viene (informal negativo)", tense: "neg" },
  { reading: "き", ending: "たい", meaning: "Quiere venir", tense: "deseo" },
  { reading: "こ", ending: "られる", meaning: "Puede venir (potencial)", tense: "potencial" },
  { reading: "こ", ending: "られる", meaning: "Es venido (pasivo)", tense: "pasivo" },
  { reading: "こ", ending: "させる", meaning: "Hace venir (causativo)", tense: "causativo" },
];

const COMPOUND_SURU = [
  { noun: "勉強", ruby: "べんきょう", meaning: "estudiar", example: "日本語を勉強します" },
  { noun: "運動", ruby: "うんどう", meaning: "ejercitarse", example: "毎日運動します" },
  { noun: "料理", ruby: "りょうり", meaning: "cocinar", example: "夕ご飯を料理します" },
  { noun: "旅行", ruby: "りょこう", meaning: "viajar", example: "来月旅行します" },
  { noun: "電話", ruby: "でんわ", meaning: "llamar", example: "後で電話します" },
  { noun: "練習", ruby: "れんしゅう", meaning: "practicar", example: "ピアノを練習します" },
];

const QUICK_COMPARE = [
  {
    title: "ます形",
    suru: "します",
    kuruReading: "き",
    kuruEnding: "ます",
    note: "Ambos cambian completamente y no siguen Godan ni Ichidan.",
  },
  {
    title: "て形",
    suru: "して",
    kuruReading: "き",
    kuruEnding: "て",
    note: "Hay que memorizar la forma fija de cada verbo.",
  },
  {
    title: "ない形",
    suru: "しない",
    kuruReading: "こ",
    kuruEnding: "ない",
    note: "来 cambia de lectura: き → こ en formas negativas.",
  },
  {
    title: "potencial",
    suru: "できる",
    kuruReading: "こ",
    kuruEnding: "られる",
    note: "する cambia a できる, así que aquí la irregularidad es total.",
  },
];

const TENSE_COLORS: Record<string, string> = {
  presente: "#4CAF50",
  "presente-neg": "#EF5350",
  "te-form": "#FFAB40",
  pasado: "#42A5F5",
  neg: "#AB47BC",
  deseo: "#26C6DA",
  potencial: "#8D6E63",
  pasivo: "#78909C",
  causativo: "#F06292",
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function IrregularesPage() {
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
                変格活用 · Grupo 3
              </div>

              <RubyText
                segments={[
                  { text: "変格", ruby: "へんかく" },
                  { text: "活用", ruby: "かつよう" },
                ]}
                className="char-display mb-3 block text-3xl font-bold sm:text-4xl"
                style={{ color: "var(--ink)" }}
              />

              <p
                className="text-sm leading-7 sm:text-[0.98rem]"
                style={{ color: "var(--ink-soft)", opacity: 0.82 }}
              >
                El Grupo 3 contiene solo <strong>dos verbos</strong>: する y 来る.
                No siguen el patrón de Godan ni el de Ichidan, así que sus formas
                deben memorizarse directamente.
              </p>

              <div
                className="mt-5 rounded-2xl p-4 text-sm leading-7 sm:p-5"
                style={{
                  background: `${ACCENT_SOFT}0.06)`,
                  border: `1px solid ${ACCENT_SOFT}0.12)`,
                  color: "var(--ink-soft)",
                }}
              >
                <strong style={{ color: ACCENT }}>¿Qué los hace especiales?</strong>{" "}
                En する, la raíz cambia a <strong>し</strong>, <strong>でき</strong>,
                <strong> さ</strong> o <strong>され</strong> según la forma.
                En 来る, el mismo kanji <strong>来</strong> cambia de lectura entre{" "}
                <strong>く</strong>, <strong>き</strong> y <strong>こ</strong>.
                <span className="mt-3 block">
                  Por eso no conviene intentar adivinarlos con reglas normales:
                  se estudian como patrones propios.
                </span>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div
                  className="rounded-2xl border p-4 text-center sm:p-5"
                  style={{
                    background: "rgba(255,255,255,0.86)",
                    border: `1px solid ${ACCENT_SOFT}0.12)`,
                  }}
                >
                  <div className="char-display text-3xl font-bold" style={{ color: ACCENT }}>
                    する
                  </div>
                  <p
                    className="mt-2 text-sm"
                    style={{ color: "var(--ink-soft)", opacity: 0.75 }}
                  >
                    hacer
                  </p>
                </div>

                <div
                  className="rounded-2xl border p-4 text-center sm:p-5"
                  style={{
                    background: "rgba(255,255,255,0.86)",
                    border: `1px solid ${ACCENT_SOFT}0.12)`,
                  }}
                >
                  <RubyText
                    segments={[
                      { text: "来", ruby: "く" },
                      { text: "る" },
                    ]}
                    className="char-display block text-3xl font-bold"
                    style={{ color: ACCENT }}
                    rtStyle={{ fontSize: "0.68em", opacity: 0.92 }}
                  />
                  <p
                    className="mt-2 text-sm"
                    style={{ color: "var(--ink-soft)", opacity: 0.75 }}
                  >
                    venir
                  </p>
                </div>
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
                Comparación rápida de los dos irregulares
              </h2>

              <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4">
                {QUICK_COMPARE.map((item, i) => (
                  <motion.div
                    key={item.title}
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
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className="rounded-full px-2 py-1 text-[0.68rem] font-bold uppercase tracking-[0.08em]"
                        style={{ background: `${ACCENT_SOFT}0.10)`, color: ACCENT }}
                      >
                        {item.title}
                      </span>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className="char-display text-xl font-bold"
                          style={{ color: "var(--ink)" }}
                        >
                          する
                        </span>
                        <span
                          className="text-sm opacity-45"
                          style={{ color: "var(--ink-soft)" }}
                        >
                          →
                        </span>
                        <span
                          className="char-display text-xl font-bold"
                          style={{ color: ACCENT }}
                        >
                          {item.suru}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <RubyText
                          segments={[
                            { text: "来", ruby: "く" },
                            { text: "る" },
                          ]}
                          className="char-display text-xl font-bold"
                          style={{ color: "var(--ink)" }}
                          rtStyle={{ fontSize: "0.68em", opacity: 0.92 }}
                        />
                        <span
                          className="text-sm opacity-45"
                          style={{ color: "var(--ink-soft)" }}
                        >
                          →
                        </span>
                        <RubyText
                          segments={[
                            { text: "来", ruby: item.kuruReading },
                            { text: item.kuruEnding },
                          ]}
                          className="char-display text-xl font-bold"
                          style={{ color: ACCENT }}
                          rtStyle={{ fontSize: "0.68em", opacity: 0.92 }}
                        />
                      </div>
                    </div>

                    <p
                      className="mt-4 text-sm"
                      style={{ color: "var(--ink-soft)", opacity: 0.72 }}
                    >
                      {item.note}
                    </p>
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
                Conjugaciones de する
              </h2>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
                {SURU_CONJUGATIONS.map((c, i) => (
                  <motion.div
                    key={`${c.form}-${i}`}
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
                          <span
                            className="char-display text-2xl font-bold leading-none sm:text-3xl"
                            style={{ color: "var(--ink)" }}
                          >
                            する
                          </span>

                          <span
                            className="text-base font-semibold opacity-45 sm:text-lg"
                            style={{ color: "var(--ink-soft)" }}
                          >
                            →
                          </span>

                          <span
                            className="char-display text-2xl font-bold leading-none sm:text-3xl"
                            style={{ color: ACCENT }}
                          >
                            {c.form}
                          </span>
                        </div>

                        <p
                          className="mt-2 text-sm sm:text-base"
                          style={{ color: "var(--ink-soft)", opacity: 0.8 }}
                        >
                          {c.meaning}
                        </p>
                      </div>

                      <span
                        className="h-10 w-2 shrink-0 rounded-full"
                        style={{ background: TENSE_COLORS[c.tense] ?? ACCENT }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="space-y-5"
            >
              <h2
                className="px-1 text-sm font-bold uppercase tracking-[0.18em] sm:px-0"
                style={{ color: ACCENT }}
              >
                Conjugaciones de 来る
              </h2>

              <div
                className="rounded-2xl border px-4 py-4 sm:px-5"
                style={{
                  background: "rgba(255,248,220,0.78)",
                  border: "1px solid rgba(255,193,7,0.25)",
                  color: "#7B6000",
                }}
              >
                <p className="text-sm leading-7">
                  💡 En 来る, el kanji <strong>来</strong> cambia de lectura según la
                  forma: <strong>く</strong> en diccionario, <strong>き</strong> en muchas
                  formas afirmativas y <strong>こ</strong> en negativas, potenciales y
                  causativas.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
                {KURU_CONJUGATIONS.map((c, i) => (
                  <motion.div
                    key={`${c.reading}-${c.ending}-${i}`}
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
                            segments={[
                              { text: "来", ruby: "く" },
                              { text: "る" },
                            ]}
                            className="char-display text-2xl font-bold leading-none sm:text-3xl"
                            style={{ color: "var(--ink)" }}
                            rtStyle={{ fontSize: "0.68em", opacity: 0.92 }}
                          />

                          <span
                            className="text-base font-semibold opacity-45 sm:text-lg"
                            style={{ color: "var(--ink-soft)" }}
                          >
                            →
                          </span>

                          <RubyText
                            segments={[
                              { text: "来", ruby: c.reading },
                              { text: c.ending },
                            ]}
                            className="char-display text-2xl font-bold leading-none sm:text-3xl"
                            style={{ color: ACCENT }}
                            rtStyle={{ fontSize: "0.68em", opacity: 0.92 }}
                          />
                        </div>

                        <p
                          className="mt-2 text-sm sm:text-base"
                          style={{ color: "var(--ink-soft)", opacity: 0.8 }}
                        >
                          {c.meaning}
                        </p>
                      </div>

                      <span
                        className="h-10 w-2 shrink-0 rounded-full"
                        style={{ background: TENSE_COLORS[c.tense] ?? ACCENT }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="space-y-4"
            >
              <h2
                className="px-1 text-sm font-bold uppercase tracking-[0.18em] sm:px-0"
                style={{ color: ACCENT }}
              >
                Verbos compuestos con する
              </h2>

              <p
                className="px-1 text-sm"
                style={{ color: "var(--ink-soft)", opacity: 0.72 }}
              >
                Muchos sustantivos se convierten en verbo al añadir する. Todos ellos se
                conjugan siguiendo el patrón de する.
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
                {COMPOUND_SURU.map((v, i) => (
                  <motion.div
                    key={v.noun}
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
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-end gap-2">
                        <RubyText
                          segments={[{ text: v.noun, ruby: v.ruby }]}
                          className="char-display text-2xl font-bold leading-none sm:text-3xl"
                          style={{ color: ACCENT }}
                          rtStyle={{ fontSize: "0.68em", opacity: 0.92 }}
                        />
                        <span
                          className="char-display text-2xl font-bold leading-none sm:text-3xl"
                          style={{ color: "var(--ink)" }}
                        >
                          する
                        </span>
                      </div>

                      <p
                        className="mt-2 text-sm sm:text-base"
                        style={{ color: "var(--ink-soft)", opacity: 0.8 }}
                      >
                        {v.meaning}
                      </p>

                      <p
                        className="mt-3 text-xs sm:text-sm"
                        style={{ color: "var(--ink-soft)", opacity: 0.62 }}
                      >
                        ejemplo: {v.example}
                      </p>
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
                    aria-current="page"
                    className="rounded-2xl py-3.5 text-center text-sm font-bold text-white pointer-events-none"
                    style={{ background: GRADIENT }}
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
                    Ver todas las conjugaciones →
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