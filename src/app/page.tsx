"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import SakuraAnimation from "./components/layout/SakuraAnimation";

const sections = [
  {
    href: "/hiragana",
    jp: "ひらがな",
    label: "Hiragana",
    desc: "Los 46 caracteres base del japonés",
    color: "#F2A7BB",
    accent: "#BC002D",
    delay: 0.1,
  },
  {
    href: "/katakana",
    jp: "カタカナ",
    label: "Katakana",
    desc: "Palabras extranjeras y énfasis",
    color: "#A7C4F2",
    accent: "#1A4BC0",
    delay: 0.2,
  },
  {
    href: "/kanji",
    jp: "漢字",
    label: "Kanji",
    desc: "Caracteres por nivel JLPT",
    color: "#A7F2C4",
    accent: "#1A6B3C",
    delay: 0.3,
  },
  {
    href: "/gramatica",
    jp: "文法",
    label: "Gramática",
    desc: "Partículas, verbos, conjugaciones",
    color: "#F2D9A7",
    accent: "#8B5E00",
    delay: 0.4,
  },
  {
    href: "/vocabulario",
    jp: "語彙",
    label: "Vocabulario",
    desc: "Organizado por tema y nivel",
    color: "#D4A7F2",
    accent: "#5B1A8B",
    delay: 0.5,
  },
  {
    href: "/jlpt",
    jp: "JLPT",
    label: "JLPT",
    desc: "Preparación N5 → N1",
    color: "#F2A7A7",
    accent: "#8B1A1A",
    delay: 0.6,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function HomePage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{ background: "var(--paper)" }}
    >
      <SakuraAnimation />

      <div className="relative z-10 px-6">
        <section className="relative mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center py-20 text-center">
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 select-none char-display"
                style={{
                  fontSize: "clamp(160px, 24vw, 340px)",
                  color: "var(--sakura)",
                  opacity: 0.08,
                  lineHeight: 1,
                  fontWeight: 700,
                }}
                aria-hidden="true"
              >
                日
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
              >
                <p
                  className="char-display mb-4"
                  style={{
                    color: "var(--sakura-dark)",
                    fontSize: "0.9rem",
                    letterSpacing: "0.35em",
                  }}
                >
                  日本語を学ぼう
                </p>

                <h1
                  className="char-display leading-[0.95]"
                  style={{
                    fontSize: "clamp(3rem, 7vw, 5.8rem)",
                    fontWeight: 700,
                    color: "var(--ink)",
                    letterSpacing: "-0.04em",
                    textShadow: "0 10px 30px rgba(26,26,46,0.08)",
                  }}
                >
                  Aprende Japonés
                  <br />
                  <span style={{ color: "var(--red-japan)" }}>de verdad.</span>
                </h1>

                <p
                  className="mx-auto mt-6 max-w-2xl"
                  style={{
                    color: "var(--ink-soft)",
                    fontSize: "1.08rem",
                    opacity: 0.8,
                    lineHeight: 1.8,
                  }}
                >
                  Hiragana, katakana, kanji, gramática y vocabulario — estructurado
                  para complementar tus clases, sin mezclar lo que aún no has visto.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.5 }}
                  className="mt-8 flex flex-wrap items-center justify-center gap-4"
                >
                  <Link
                    href="/hiragana"
                    className="group inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #BC002D 0%, #D91C47 45%, #F2A7BB 100%)",
                      boxShadow:
                        "0 14px 34px rgba(188,0,45,0.26), inset 0 1px 0 rgba(255,255,255,0.22)",
                    }}
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                      Empezar con Hiragana →
                    </span>
                  </Link>

                  <Link
                    href="/jlpt"
                    className="group inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0"
                    style={{
                      color: "var(--ink)",
                      background: "rgba(255,255,255,0.80)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(26,26,46,0.10)",
                      boxShadow:
                        "0 10px 24px rgba(26,26,46,0.08), inset 0 1px 0 rgba(255,255,255,0.65)",
                    }}
                  >
                    Ver niveles JLPT
                  </Link>
                </motion.div>
              </motion.div>
            </section>

            <section className="mx-auto w-full max-w-5xl pb-24 text-center">
              <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3 place-items-center">
                {sections.map((s) => (
                  <motion.div
                    key={s.href}
                    custom={s.delay}
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="w-full max-w-[340px]"
                  >
                    <Link
                      href={s.href}
                      className="group relative flex min-h-[190px] overflow-hidden rounded-[28px] p-6 transition-all..."
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.72) 100%)",
                        backdropFilter: "blur(14px)",
                        border: "1px solid rgba(255,255,255,0.65)",
                        boxShadow: "0 16px 40px rgba(26,26,46,0.10)",
                      }}
                    >
                      <div
                        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                          background: `linear-gradient(135deg, ${s.color}22 0%, transparent 55%)`,
                        }}
                      />

                      <div
                        className="absolute -right-8 -top-8 h-28 w-28 rounded-full blur-3xl transition-all duration-300 group-hover:scale-125 group-hover:opacity-80"
                        style={{
                          background: s.color,
                          opacity: 0.45,
                        }}
                      />

                      <div
                        className="absolute inset-x-0 top-0 h-1"
                        style={{
                          background: `linear-gradient(90deg, ${s.accent}, ${s.color})`,
                        }}
                      />

                      <div className="relative z-10 flex w-full flex-col items-center justify-center text-center">
                        <div
                          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full text-base font-bold transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          style={{
                            background: `${s.color}33`,
                            color: s.accent,
                            boxShadow: `0 8px 18px ${s.color}44`,
                          }}
                        >
                          →
                        </div>

                        <div
                          className="char-display"
                          style={{
                            fontSize: "2.45rem",
                            color: s.accent,
                            lineHeight: 1.05,
                            fontWeight: 700,
                            textShadow: `0 6px 16px ${s.color}55`,
                          }}
                        >
                          {s.jp}
                        </div>

                        <p
                          className="mt-3 text-xl font-semibold"
                          style={{ color: "var(--ink)" }}
                        >
                          {s.label}
                        </p>

                        <p
                          className="mt-3 max-w-[240px] text-sm"
                          style={{
                            color: "var(--ink-soft)",
                            opacity: 0.78,
                            lineHeight: 1.65,
                          }}
                        >
                          {s.desc}
                        </p>

                        <div className="mt-5">
                          <div
                            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium transition-all duration-300 group-hover:translate-x-1"
                            style={{
                              background: `${s.color}22`,
                              color: s.accent,
                              border: `1px solid ${s.color}55`,
                            }}
                          >
                            Explorar sección
                            <span>→</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
      <div
        className="pointer-events-none fixed bottom-0 left-0 right-0 z-0 h-32"
        style={{
          background: "linear-gradient(to top, var(--paper) 0%, transparent 100%)",
        }}
      />
    </main>
  );
}