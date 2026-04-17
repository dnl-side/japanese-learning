"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CONJUGATION_FORMS, VERB_LIST } from "@/data/grammar/verbs";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";
import { RubyText } from "@/app/components/ui/Ruby";

const ACCENT = "#5D4037";
const ACCENT_SOFT = "rgba(141,110,99,";
const GRADIENT = "linear-gradient(135deg, #FFAB40, #5D4037)";

const GROUPS = [
  {
    href: "/gramatica/verbos/grupos/godan",
    key: "godan",
    jp: "五段",
    ruby: "ごだん",
    label: "Grupo 1 — Godan",
    desc: "Verbos con 5 escalones de mutación. Terminan en う、く、す、つ、ぬ、ぶ、む、る.",
    color: "#FFAB40",
    accent: "#E65100",
    count: VERB_LIST.filter(v => v.group === "godan").length,
  },
  {
    href: "/gramatica/verbos/grupos/ichidan",
    key: "ichidan",
    jp: "一段",
    ruby: "いちだん",
    label: "Grupo 2 — Ichidan",
    desc: "Verbos con una sola forma. Todos terminan en る precedido de い o え.",
    color: "#81C784",
    accent: "#2E7D32",
    count: VERB_LIST.filter(v => v.group === "ichidan").length,
  },
  {
    href: "/gramatica/verbos/grupos/irregulares",
    key: "irregular",
    jp: "変格",
    ruby: "へんかく",
    label: "Grupo 3 — Irregulares",
    desc: "Solo dos verbos: する y くる. Formas únicas que hay que memorizar.",
    color: "#90CAF9",
    accent: "#1565C0",
    count: VERB_LIST.filter(v => v.group === "irregular").length,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

// N5 forms for quick reference strip
const N5_FORMS = CONJUGATION_FORMS.filter(f => f.level === "N5");
const N4_FORMS = CONJUGATION_FORMS.filter(f => f.level === "N4");
const N3_FORMS = CONJUGATION_FORMS.filter(f => f.level === "N3");

export default function VerbosPage() {
  return (
    <main className="relative min-h-screen" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />

      <div className="relative z-10 mx-auto max-w-4xl px-4 pb-24 pt-10 sm:px-6">

        <Link
          href="/gramatica"
          className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
          style={{ color: ACCENT }}
        >
          ← Gramática
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 mb-10"
        >
          <div
            className="rounded-[32px] border px-6 py-8"
            style={{
              background: "rgba(255,255,255,0.72)",
              border: `1px solid ${ACCENT_SOFT}0.12)`,
              boxShadow: `0 20px 48px ${ACCENT_SOFT}0.07)`,
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Label */}
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
              style={{ color: ACCENT, background: `${ACCENT_SOFT}0.08)`, border: `1px solid ${ACCENT_SOFT}0.15)` }}
            >
              動詞 · Verbos japoneses
            </div>

            <h1 className="char-display text-3xl font-bold" style={{ color: "var(--ink)" }}>
              Verbos en Japonés
              <span className="ml-3 text-xl font-normal" style={{ color: ACCENT }}>動詞</span>
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.8 }}>
              Los verbos japoneses se dividen en tres grupos según cómo mutan su morfema al conjugarse.
              Identificar el grupo correcto es fundamental para conjugar cualquier verbo correctamente.
            </p>

            {/* Key concept box */}
            <div
              className="mt-5 rounded-2xl p-4"
              style={{ background: `${ACCENT_SOFT}0.06)`, border: `1px solid ${ACCENT_SOFT}0.12)` }}
            >
              <p className="text-sm font-semibold mb-2" style={{ color: ACCENT }}>
                💡 Concepto clave — El morfema
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                Todos los verbos en diccionario terminan en la columna <strong>う</strong> del hiragana.
                La parte que cambia al conjugar se llama <strong>morfema</strong>. El kanji o la raíz kana antes del morfema
                nunca cambia — solo el morfema muta según el grupo y la forma.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {[
                  { verb: "書く", ruby: "かく", parts: ["書", "く"], desc: "kanji + morfema く" },
                  { verb: "食べる", ruby: "たべる", parts: ["食べ", "る"], desc: "raíz + morfema る" },
                  { verb: "する", parts: ["す", "る"], desc: "irregular" },
                ].map((ex) => (
                  <div
                    key={ex.verb}
                    className="rounded-xl px-3 py-1.5"
                    style={{ background: "rgba(255,255,255,0.7)", border: `1px solid ${ACCENT_SOFT}0.10)` }}
                  >
                    <RubyText
                      segments={ex.ruby
                        ? [{ text: ex.verb, ruby: ex.ruby }]
                        : [{ text: ex.verb }]}
                      className="char-display font-bold"
                      style={{ color: ACCENT }}
                    />
                    <span className="ml-2 opacity-60" style={{ color: "var(--ink-soft)" }}>{ex.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick link to conjugations */}
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/gramatica/verbos/conjugaciones"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-bold text-white transition-all hover:brightness-110"
                style={{ background: GRADIENT }}
              >
                Ver todas las conjugaciones →
              </Link>
              <Link
                href="/gramatica/verbos/quiz"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-semibold transition-all hover:bg-white"
                style={{
                  border: `1px solid ${ACCENT_SOFT}0.20)`,
                  color: ACCENT,
                  background: "rgba(255,255,255,0.6)",
                }}
              >
                ◎ Practicar con quiz
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Groups */}
        <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
          Los tres grupos
        </h2>

        <div className="grid gap-4 sm:grid-cols-3">
          {GROUPS.map((g, i) => (
            <motion.div key={g.key} custom={i} initial="hidden" animate="show" variants={fadeUp}>
              <Link
                href={g.href}
                className="group relative flex flex-col overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full"
                style={{
                  background: "white",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div
                  className="absolute -right-4 -top-4 h-20 w-20 rounded-full blur-2xl opacity-40 transition-opacity group-hover:opacity-70"
                  style={{ background: g.color }}
                />
                <div
                  className="absolute inset-x-0 top-0 h-0.5"
                  style={{ background: `linear-gradient(90deg, ${g.accent}, ${g.color})` }}
                />

                <div className="relative z-10 mb-3">
                  <RubyText
                    segments={[{ text: g.jp, ruby: g.ruby }]}
                    className="char-display text-3xl font-bold"
                    style={{ color: g.accent }}
                  />
                </div>

                <p className="relative z-10 text-sm font-semibold" style={{ color: "var(--ink)" }}>
                  {g.label}
                </p>
                <p className="relative z-10 mt-1 text-xs leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>
                  {g.desc}
                </p>

                <div className="relative z-10 mt-auto pt-4 flex items-center justify-between">
                  <span
                    className="rounded-full px-2 py-0.5 text-xs font-semibold"
                    style={{ background: `${g.color}33`, color: g.accent }}
                  >
                    {g.count} verbos
                  </span>
                  <span
                    className="text-sm opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5"
                    style={{ color: g.accent }}
                  >
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Conjugation forms overview */}
        <div className="mt-10">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
            Formas de conjugación
          </h2>

          {[
            { level: "N5", forms: N5_FORMS, label: "Nivel N5 — Básico" },
            { level: "N4", forms: N4_FORMS, label: "Nivel N4 — Intermedio" },
            { level: "N3", forms: N3_FORMS, label: "Nivel N3 — Avanzado" },
          ].map(({ level, forms, label }) => (
            <div key={level} className="mb-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--ink-soft)", opacity: 0.5 }}>
                {label}
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {forms.map((form, i) => (
                  <motion.div key={form.key} custom={i} initial="hidden" animate="show" variants={fadeUp}>
                    <Link
                      href={`/gramatica/verbos/conjugaciones/${form.key}`}
                      className="group flex items-center gap-3 rounded-2xl border p-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                      style={{
                        background: "rgba(255,255,255,0.8)",
                        border: "1px solid var(--border)",
                        boxShadow: "var(--shadow-soft)",
                      }}
                    >
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                        style={{ background: `${form.color}44`, border: `1px solid ${form.color}88` }}
                      >
                        <span className="char-display text-sm font-bold" style={{ color: ACCENT }}>
                          {form.key === "masu" ? "ます" :
                           form.key === "te" ? "て" :
                           form.key === "ta" ? "た" :
                           form.key === "nai" ? "ない" :
                           form.key === "tai" ? "たい" :
                           form.key === "mashou" ? "〜う" :
                           form.key === "potential" ? "可" :
                           form.key === "passive" ? "受" :
                           form.key === "causative" ? "使" : "役"}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <RubyText
                          segments={form.titleSegments}
                          className="char-display block text-sm font-bold truncate"
                          style={{ color: "var(--ink)" }}
                        />
                        <p className="text-xs truncate" style={{ color: "var(--ink-soft)", opacity: 0.6 }}>
                          {form.description.split(".")[0]}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}