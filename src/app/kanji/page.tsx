// src/app/kanji/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { KANJI_LIST, LEVEL_META, getKanjiByLevel } from "@/data/kanji";
import SakuraAnimation from "../components/layout/SakuraAnimation";

const ACCENT = "#2E7D32";
const ACCENT_SOFT = "rgba(46,125,50,";

const features = [
  {
    href: "/kanji/tabla",
    icon: "⊞",
    label: "Explorar Tabla",
    desc: "Todos los kanji organizados por nivel",
    color: "#A5D6A7",
    accent: "#2E7D32",
  },
  {
    href: "/kanji/quiz",
    icon: "◎",
    label: "Trivia",
    desc: "Pon a prueba tu lectura de kanji",
    color: "#FFD580",
    accent: "#8B5E00",
  },
  {
    href: "/kanji/vocabulario",
    icon: "册",
    label: "Vocabulario",
    desc: "Palabras con kanji por nivel",
    color: "#A7F2C4",
    accent: "#1A6B3C",
  },
  {
    href: "/kanji/practica",
    icon: "✏",
    label: "Práctica de escritura",
    desc: "Dibuja kanji y valida tus trazos",
    color: "#D4A7F2",
    accent: "#5B1A8B",
  },
];

const PREVIEW_CHARS = getKanjiByLevel(1).slice(0, 10).map(k => k.char);

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function KanjiPage() {
  const level1Count = getKanjiByLevel(1).length;
  const level2Count = getKanjiByLevel(2).length;

  return (
    <main className="relative min-h-screen" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-12">

        {/* Back link */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}>
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: ACCENT }}>
            ← Inicio
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-8 flex flex-col items-center text-center"
        >
          <div className="relative mb-2 select-none" aria-hidden="true">
            <span className="char-display" style={{
              fontSize: "clamp(5rem, 18vw, 10rem)", color: ACCENT, lineHeight: 1, fontWeight: 700,
              opacity: 0.10, position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)", whiteSpace: "nowrap",
            }}>
              漢字
            </span>
            <span className="char-display relative z-10" style={{
              fontSize: "clamp(4rem, 14vw, 8rem)", color: ACCENT, lineHeight: 1, fontWeight: 700,
            }}>
              字
            </span>
          </div>

          <h1 className="char-display mt-4" style={{
            fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.02em",
          }}>
            Kanji
            <span className="ml-3 text-2xl font-normal" style={{ color: ACCENT, letterSpacing: "0.1em" }}>漢字</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.75 }}>
            El kanji es el sistema de escritura logográfico de origen chino usado en japonés.
            Cada kanji representa una idea o concepto, y tiene lecturas chinas (on-yomi) y japonesas (kun-yomi).
          </p>

          {/* Stats pills */}
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {[
              { label: "Nivel 1 disponible", value: `${level1Count}` },
              { label: "Nivel 2 disponible", value: `${level2Count}` },
              { label: "Total en lista",     value: `${KANJI_LIST.length}` },
            ].map(stat => (
              <div key={stat.label} className="rounded-full px-4 py-1.5 text-sm font-medium"
                style={{ background: "rgba(165,214,167,0.18)", border: "1px solid rgba(165,214,167,0.45)", color: ACCENT }}>
                <span className="font-bold">{stat.value}</span>
                <span className="ml-1.5 opacity-75">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Character preview strip */}
        <div className="mt-10 overflow-x-auto pb-2">
          <div className="flex justify-center gap-2 min-w-max mx-auto">
            {PREVIEW_CHARS.map((char, i) => (
              <motion.div key={char} custom={i} initial="hidden" animate="show" variants={fadeUp}>
                <Link
                  href={`/kanji/practica/${encodeURIComponent(char)}`}
                  className="group flex h-14 w-14 flex-col items-center justify-center rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                  style={{ background: "white", border: "1px solid var(--border)", boxShadow: "var(--shadow-soft)" }}
                  title={`Practicar ${char}`}
                >
                  <span className="char-display text-2xl leading-none group-hover:scale-110 transition-transform duration-200"
                    style={{ color: ACCENT }}>
                    {char}
                  </span>
                </Link>
              </motion.div>
            ))}
            <motion.div custom={PREVIEW_CHARS.length} initial="hidden" animate="show" variants={fadeUp}>
              <Link href="/kanji/tabla"
                className="flex h-14 w-14 flex-col items-center justify-center rounded-2xl text-xs font-medium transition-all duration-200 hover:-translate-y-1"
                style={{ background: "rgba(165,214,167,0.12)", border: "1px dashed rgba(165,214,167,0.6)", color: ACCENT }}>
                Ver<br />todos
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Feature buttons */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map((f, i) => (
            <motion.div key={f.href} custom={i + PREVIEW_CHARS.length} initial="hidden" animate="show" variants={fadeUp}>
              <Link href={f.href}
                className="group relative flex items-center gap-5 overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ background: "white", border: "1px solid var(--border)", boxShadow: "var(--shadow-card)" }}>
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full blur-2xl opacity-50 transition-opacity duration-300 group-hover:opacity-80"
                  style={{ background: f.color }} />
                <div className="absolute inset-x-0 top-0 h-0.5"
                  style={{ background: `linear-gradient(90deg, ${f.accent}, ${f.color})` }} />
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl font-bold"
                  style={{ background: `${f.color}33`, color: f.accent, border: `1px solid ${f.color}66` }}>
                  {f.icon}
                </div>
                <div className="relative z-10 flex-1">
                  <p className="font-semibold" style={{ color: "var(--ink)" }}>{f.label}</p>
                  <p className="mt-0.5 text-sm" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>{f.desc}</p>
                </div>
                <span className="relative z-10 text-lg opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                  style={{ color: f.accent }}>→</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Levels overview */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.45 }}
          className="mt-12">
          <h2 className="mb-4 text-lg font-semibold" style={{ color: "var(--ink)" }}>Niveles disponibles</h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(level => {
              const meta = LEVEL_META[level];
              const count = getKanjiByLevel(level).length;
              return (
                <div key={level}
                  className={`rounded-xl border p-3 text-center transition-all duration-200 ${meta.available ? "hover:-translate-y-0.5 hover:shadow-md cursor-pointer" : "opacity-50"}`}
                  style={{ background: meta.available ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.4)", border: "1px solid var(--border)" }}
                  onClick={() => meta.available && window.location.assign(`/kanji/tabla?nivel=${level}`)}>
                  <div className="char-display text-2xl font-bold" style={{ color: meta.accent }}>{level}</div>
                  <p className="mt-0.5 text-xs font-medium" style={{ color: "var(--ink)" }}>{count} kanji</p>
                  <p className="mt-0.5 text-[0.65rem]" style={{ color: meta.available ? meta.accent : "var(--ink-soft)", opacity: meta.available ? 1 : 0.6 }}>
                    {meta.available ? "✓ Disponible" : "Próximo"}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </main>
  );
}