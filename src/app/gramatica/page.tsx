"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SakuraAnimation from "../components/layout/SakuraAnimation";

const SECTIONS = [
  {
    href: "/gramatica/particulas",
    jp: "助詞",
    label: "Partículas",
    desc: "は, が, を, に, で, へ, と, も, から, まで",
    color: "#FFAB40",
    accent: "#E65100",
    status: "ready",
  },
  {
    href: "/gramatica/verbos",
    jp: "動詞",
    label: "Verbos",
    desc: "Grupos 1, 2 y 3 — conjugaciones completas",
    color: "#A5D6A7",
    accent: "#2E7D32",
    status: "ready",
  },
  {
    href: "/gramatica/lecciones",
    jp: "文法",
    label: "Lecciones",
    desc: "Patrones gramaticales por nivel N5→N3",
    color: "#90CAF9",
    accent: "#1565C0",
    status: "soon",
  },
  {
    href: "/gramatica/oraciones",
    jp: "文",
    label: "Oraciones",
    desc: "Estructura SOV y construcción de frases",
    color: "#FFF176",
    accent: "#F57F17",
    status: "soon",
  },
  {
    href: "/gramatica/adjetivos",
    jp: "形容詞",
    label: "Adjetivos",
    desc: "い-adjetivos y な-adjetivos con conjugación",
    color: "#CE93D8",
    accent: "#6A1B9A",
    status: "soon",
  },
  {
    href: "/gramatica/contadores",
    jp: "助数詞",
    label: "Contadores",
    desc: "本, 枚, 個, 匹, 人… y sus lecturas",
    color: "#80DEEA",
    accent: "#00695C",
    status: "soon",
  },
  {
    href: "/gramatica/expresiones",
    jp: "表現",
    label: "Expresiones",
    desc: "Conectores, conjunciones y frases hechas",
    color: "#FFCC80",
    accent: "#BF360C",
    status: "soon",
  },
  {
    href: "/gramatica/condicionales",
    jp: "条件",
    label: "Condicionales",
    desc: "と, ば, たら, なら — cuándo usar cada uno",
    color: "#A5D6A7",
    accent: "#1B5E20",
    status: "soon",
  },
  {
    href: "/gramatica/formalidad",
    jp: "敬語",
    label: "Formalidad",
    desc: "Keigo — lenguaje formal, neutro e informal",
    color: "#B0BEC5",
    accent: "#263238",
    status: "soon",
  },
  {
    href: "/gramatica/tiempo",
    jp: "時間",
    label: "Tiempo y acciones",
    desc: "Pasado, presente, progresivo y futuro",
    color: "#EF9A9A",
    accent: "#B71C1C",
    status: "soon",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function GramaticaPage() {
  return (
    <section className="relative" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />

      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-10 pb-8 sm:px-6">

        <Link
          href="/"
          className="md:hidden inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold shadow-sm backdrop-blur transition-all hover:-translate-y-0.5"
          style={{
            color: "#E65100",
            background: "rgba(255,255,255,0.78)",
            borderColor: "rgba(230,81,0,0.18)",
            boxShadow: "0 6px 18px rgba(26,26,46,0.08)",
          }}
        >
          <span aria-hidden="true">←</span>
          <span>Volver al inicio</span>
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 mb-10 text-center"
        >
          <div
            className="pointer-events-none select-none char-display"
            style={{ fontSize: "clamp(5rem, 18vw, 9rem)", color: "#FFAB40", opacity: 0.12, lineHeight: 1, fontWeight: 700 }}
            aria-hidden="true"
          >
            文法
          </div>

          <h1 className="char-display -mt-8 text-4xl font-bold" style={{ color: "var(--ink)" }}>
            Gramática
            <span className="ml-3 text-2xl font-normal" style={{ color: "#E65100" }}>文法</span>
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.75 }}>
            El japonés sigue un orden Sujeto-Objeto-Verbo y usa partículas para definir
            relaciones entre palabras. Aprende desde lo básico hasta estructuras avanzadas.
          </p>
        </motion.div>

        {/* Sections grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {SECTIONS.map((s, i) => (
            <motion.div key={s.href} custom={i} initial="hidden" animate="show" variants={fadeUp}>
              {s.status === "ready" ? (
                <Link
                  href={s.href}
                  className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    background: "white",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <SectionContent s={s} />
                </Link>
              ) : (
                <div
                  className="relative flex items-center gap-4 overflow-hidden rounded-2xl border p-5 opacity-60"
                  style={{
                    background: "rgba(255,255,255,0.5)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <SectionContent s={s} />
                  <span
                    className="absolute right-3 top-3 rounded-full px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide"
                    style={{ background: "rgba(0,0,0,0.06)", color: "var(--ink-soft)" }}
                  >
                    Próximo
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionContent({ s }: { s: typeof SECTIONS[0] }) {
  return (
    <>
      <div
        className="absolute -right-5 -top-5 h-20 w-20 rounded-full blur-2xl opacity-40 transition-opacity duration-300 group-hover:opacity-70"
        style={{ background: s.color }}
      />
      <div
        className="absolute inset-x-0 top-0 h-0.5"
        style={{ background: `linear-gradient(90deg, ${s.accent}, ${s.color})` }}
      />
      <div
        className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
        style={{ background: `${s.color}33`, border: `1px solid ${s.color}66` }}
      >
        <span className="char-display text-xl font-bold" style={{ color: s.accent }}>{s.jp}</span>
      </div>
      <div className="relative z-10 flex-1 min-w-0">
        <p className="font-semibold" style={{ color: "var(--ink)" }}>{s.label}</p>
        <p className="mt-0.5 text-xs truncate" style={{ color: "var(--ink-soft)", opacity: 0.65 }}>{s.desc}</p>
      </div>
      <span className="relative z-10 text-sm opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" style={{ color: s.accent }}>→</span>
    </>
  );
}