//src\app\gramatica/page.tsx

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
    desc: "Patrones gramaticales por nivel N5→N1",
    color: "#90CAF9",
    accent: "#1565C0",
    status: "ready",
  },
  {
    href: "/gramatica/oraciones",
    jp: "文",
    label: "Oraciones",
    desc: "Estructura SOV y construcción de frases",
    color: "#FFF176",
    accent: "#F57F17",
    status: "ready",
  },
  {
    href: "/gramatica/adjetivos",
    jp: "形容詞",
    label: "Adjetivos",
    desc: "い-adjetivos y な-adjetivos con conjugación",
    color: "#CE93D8",
    accent: "#6A1B9A",
    status: "ready",
  },
  {
    href: "/gramatica/contadores",
    jp: "助数詞",
    label: "Contadores",
    desc: "本, 枚, 個, 匹, 人… y sus lecturas",
    color: "#80DEEA",
    accent: "#00695C",
    status: "ready",
  },
  {
    href: "/gramatica/expresiones",
    jp: "表現",
    label: "Expresiones",
    desc: "Conectores, conjunciones y frases hechas",
    color: "#FFCC80",
    accent: "#BF360C",
    status: "ready",
  },
  {
    href: "/gramatica/condicionales",
    jp: "条件",
    label: "Condicionales",
    desc: "と, ば, たら, なら — cuándo usar cada uno",
    color: "#A5D6A7",
    accent: "#1B5E20",
    status: "ready",
  },
  {
    href: "/gramatica/formalidad",
    jp: "敬語",
    label: "Formalidad",
    desc: "Keigo — lenguaje formal, neutro e informal",
    color: "#B0BEC5",
    accent: "#263238",
    status: "ready",
  },
  {
    href: "/gramatica/tiempo",
    jp: "時間",
    label: "Tiempo y acciones",
    desc: "Pasado, presente, progresivo y futuro",
    color: "#EF9A9A",
    accent: "#B71C1C",
    status: "ready",
  },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.06,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function GramaticaPage() {
  return (
    <section
      className="relative w-full overflow-x-hidden"
      style={{ background: "var(--paper)" }}
    >
      <SakuraAnimation />

      <div className="relative z-10 w-full">
        <div className="mx-auto flex w-full justify-center px-4 pt-10 pb-8 sm:px-6 lg:px-10">
          <div className="w-full max-w-[1180px]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 md:hidden"
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

            <div className="mt-8 mb-10 flex w-full justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex w-full max-w-[860px] flex-col items-center px-4 text-center"
              >
                <div
                  className="pointer-events-none select-none text-center char-display"
                  style={{
                    fontSize: "clamp(5rem, 14vw, 9rem)",
                    color: "#FFAB40",
                    opacity: 0.12,
                    lineHeight: 1,
                    fontWeight: 700,
                  }}
                  aria-hidden="true"
                >
                  文法
                </div>

                <h1
                  className="char-display -mt-6 text-center text-4xl font-bold sm:text-5xl"
                  style={{ color: "var(--ink)" }}
                >
                  Gramática
                  <span
                    className="ml-3 text-2xl font-normal sm:text-3xl"
                    style={{ color: "#E65100" }}
                  >
                    文法
                  </span>
                </h1>

                <p
                  className="mt-4 max-w-[760px] text-center text-base leading-relaxed sm:text-lg"
                  style={{ color: "var(--ink-soft)", opacity: 0.75 }}
                >
                  El japonés sigue un orden Sujeto-Objeto-Verbo y usa partículas para
                  definir relaciones entre palabras. Aprende desde lo básico hasta
                  estructuras avanzadas.
                </p>
              </motion.div>
            </div>

            <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
              {SECTIONS.map((s, i) => (
                <motion.div
                  key={s.href}
                  custom={i}
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                >
                  {s.status === "ready" ? (
                    <Link
                      href={s.href}
                      className="group relative flex min-h-[96px] items-center gap-4 overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-6"
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
                      className="group relative flex min-h-[96px] items-center gap-4 overflow-hidden rounded-2xl border p-5 opacity-60 md:p-6"
                      style={{
                        background: "rgba(255,255,255,0.5)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <SectionContent s={s} />
                      <span
                        className="absolute right-3 top-3 rounded-full px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide"
                        style={{
                          background: "rgba(0,0,0,0.06)",
                          color: "var(--ink-soft)",
                        }}
                      >
                        Próximo
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionContent({ s }: { s: (typeof SECTIONS)[number] }) {
  const isLongJapanese = s.jp.length >= 3;

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
        className="relative z-10 flex h-14 shrink-0 items-center justify-center rounded-2xl px-2"
        style={{
          width: isLongJapanese ? "4.5rem" : "3.5rem",
          background: `${s.color}33`,
          border: `1px solid ${s.color}66`,
        }}
      >
        <span
          className="char-display whitespace-nowrap font-bold leading-none"
          style={{
            color: s.accent,
            fontSize: isLongJapanese ? "1rem" : "1.25rem",
            letterSpacing: isLongJapanese ? "-0.04em" : "0",
          }}
        >
          {s.jp}
        </span>
      </div>

      <div className="relative z-10 min-w-0 flex-1">
        <p
          className="text-lg font-semibold leading-tight"
          style={{ color: "var(--ink)" }}
        >
          {s.label}
        </p>
        <p
          className="mt-1 text-sm leading-snug"
          style={{ color: "var(--ink-soft)", opacity: 0.68 }}
        >
          {s.desc}
        </p>
      </div>

      <span
        className="relative z-10 text-sm opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
        style={{ color: s.accent }}
      >
        →
      </span>
    </>
  );
}