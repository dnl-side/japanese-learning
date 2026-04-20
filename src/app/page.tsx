"use client";

//src/app/page.tsx

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import SakuraAnimation from "./components/layout/SakuraAnimation";

const SECTIONS = [
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
    desc: "Partículas, verbos y conjugaciones",
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
] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function HomePage() {
  return (
    <main
      className="relative min-h-screen w-full overflow-x-hidden"
      style={{ background: "var(--paper)" }}
    >
      <SakuraAnimation />

      <div className="relative z-10 w-full">
        <div className="mx-auto flex w-full justify-center px-4 pb-20 pt-8 sm:px-6 lg:px-10">
          <div className="w-full max-w-[1180px]">
            <section className="relative mx-auto flex w-full justify-center pb-10 pt-8 sm:pb-14 sm:pt-12">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="relative flex w-full max-w-[920px] flex-col items-center px-2 text-center sm:px-4"
              >
                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 select-none char-display"
                  style={{
                    fontSize: "clamp(7rem, 18vw, 16rem)",
                    color: "var(--sakura)",
                    opacity: 0.08,
                    lineHeight: 1,
                    fontWeight: 700,
                  }}
                  aria-hidden="true"
                >
                  日
                </div>

                <p
                  className="char-display mb-4 text-center"
                  style={{
                    color: "var(--sakura-dark)",
                    fontSize: "0.9rem",
                    letterSpacing: "0.32em",
                  }}
                >
                  日本語を学ぼう
                </p>

                <h1
                  className="char-display text-center leading-[0.94]"
                  style={{
                    fontSize: "clamp(3rem, 8vw, 6.25rem)",
                    fontWeight: 700,
                    color: "var(--ink)",
                    letterSpacing: "-0.045em",
                    textShadow: "0 10px 28px rgba(26,26,46,0.08)",
                  }}
                >
                  Aprende Japonés
                  <br />
                  <span style={{ color: "var(--red-japan)" }}>de verdad.</span>
                </h1>

                <p
                  className="mt-6 max-w-[760px] text-center text-base leading-relaxed sm:text-lg"
                  style={{ color: "var(--ink-soft)", opacity: 0.8 }}
                >
                  Hiragana, katakana, kanji, gramática y vocabulario —
                  estructurado para complementar tus clases, sin mezclar lo que
                  aún no has visto.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.45 }}
                  className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
                >
                  <Link
                    href="/hiragana"
                    className="group inline-flex min-h-[52px] w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 sm:w-auto sm:px-8 sm:py-4"
                    style={{
                      background:
                        "linear-gradient(135deg, #BC002D 0%, #D91C47 45%, #F2A7BB 100%)",
                      boxShadow:
                        "0 14px 34px rgba(188,0,45,0.24), inset 0 1px 0 rgba(255,255,255,0.22)",
                    }}
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                      Empezar con Hiragana →
                    </span>
                  </Link>

                  <Link
                    href="/jlpt"
                    className="group inline-flex min-h-[52px] w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 sm:w-auto sm:px-8 sm:py-4"
                    style={{
                      color: "var(--ink)",
                      background: "rgba(255,255,255,0.82)",
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

            <section className="mx-auto w-full max-w-[1180px]">
              <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {SECTIONS.map((section) => (
                  <motion.div
                    key={section.href}
                    custom={section.delay}
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                  >
                    <Link
                      href={section.href}
                      className="group relative flex min-h-[210px] w-full overflow-hidden rounded-[28px] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:min-h-[220px]"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.74) 100%)",
                        backdropFilter: "blur(14px)",
                        border: "1px solid rgba(255,255,255,0.65)",
                        boxShadow: "0 16px 40px rgba(26,26,46,0.10)",
                      }}
                    >
                      <div
                        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                          background: `linear-gradient(135deg, ${section.color}20 0%, transparent 58%)`,
                        }}
                      />

                      <div
                        className="absolute -right-8 -top-8 h-28 w-28 rounded-full blur-3xl transition-all duration-300 group-hover:scale-125 group-hover:opacity-80"
                        style={{
                          background: section.color,
                          opacity: 0.42,
                        }}
                      />

                      <div
                        className="absolute inset-x-0 top-0 h-1"
                        style={{
                          background: `linear-gradient(90deg, ${section.accent}, ${section.color})`,
                        }}
                      />

                      <div className="relative z-10 flex w-full flex-col items-center justify-center text-center">
                        <div
                          className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-full text-base font-bold transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          style={{
                            background: `${section.color}33`,
                            color: section.accent,
                            boxShadow: `0 8px 18px ${section.color}44`,
                          }}
                        >
                          →
                        </div>

                        <div
                          className="char-display"
                          style={{
                            fontSize: "2.5rem",
                            color: section.accent,
                            lineHeight: 1.05,
                            fontWeight: 700,
                            textShadow: `0 6px 16px ${section.color}55`,
                          }}
                        >
                          {section.jp}
                        </div>

                        <p
                          className="mt-3 text-xl font-semibold"
                          style={{ color: "var(--ink)" }}
                        >
                          {section.label}
                        </p>

                        <p
                          className="mt-3 max-w-[260px] text-sm leading-relaxed sm:text-[0.95rem]"
                          style={{
                            color: "var(--ink-soft)",
                            opacity: 0.78,
                          }}
                        >
                          {section.desc}
                        </p>

                        <div className="mt-5">
                          <div
                            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium transition-all duration-300 group-hover:translate-x-1"
                            style={{
                              background: `${section.color}22`,
                              color: section.accent,
                              border: `1px solid ${section.color}55`,
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
        </div>
      </div>

      <div
        className="pointer-events-none fixed bottom-0 left-0 right-0 z-0 h-32"
        style={{
          background:
            "linear-gradient(to top, var(--paper) 0%, transparent 100%)",
        }}
      />
    </main>
  );
}