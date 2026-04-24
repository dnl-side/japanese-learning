"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";
import { JLPT_LEVELS, JLPT_LEVEL_META, getJlptLevelStats } from "@/data/jlpt";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function JlptPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />

      <div className="relative z-10 mx-auto flex w-full justify-center px-4 pb-24 pt-10 sm:px-6 lg:px-10">
        <div className="w-full max-w-[1180px]">
          <Link href="/" className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold shadow-sm backdrop-blur transition-all hover:-translate-y-0.5" style={{ color: "#B91C1C", background: "rgba(255,255,255,0.78)", borderColor: "rgba(185,28,28,0.16)" }}>
            ← Inicio
          </Link>

          <section className="mx-auto mt-8 flex max-w-[900px] flex-col items-center text-center">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="char-display pointer-events-none select-none text-center" style={{ fontSize: "clamp(5rem, 16vw, 11rem)", color: "#B91C1C", opacity: 0.09, lineHeight: 1, fontWeight: 700 }} aria-hidden="true">
                JLPT
              </div>
              <h1 className="char-display -mt-8 text-center text-4xl font-bold sm:text-6xl" style={{ color: "var(--ink)" }}>
                Entrenamiento JLPT
              </h1>
              <p className="mx-auto mt-5 max-w-[760px] text-base leading-relaxed sm:text-lg" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
                Aprende el formato del examen antes de practicar: técnicas, pistas, distractores, explicación de errores y mocks generados desde un banco propio.
              </p>
            </motion.div>
          </section>

          <section className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {JLPT_LEVELS.map((level, index) => {
              const meta = JLPT_LEVEL_META[level];
              const stats = getJlptLevelStats(level);

              return (
                <motion.div key={level} custom={index} initial="hidden" animate="show" variants={fadeUp}>
                  <Link href={`/jlpt/${meta.slug}`} className="group flex min-h-[260px] flex-col justify-between rounded-[28px] border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.72))", borderColor: "rgba(255,255,255,0.72)", boxShadow: "0 16px 38px rgba(15,23,42,0.08)" }}>
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="rounded-2xl px-3 py-2 text-xl font-bold" style={{ background: `${meta.color}55`, color: meta.accent }}>
                          {level}
                        </span>
                        <span className="rounded-full px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em]" style={{ background: meta.status === "ready" ? "rgba(22,163,74,0.1)" : "rgba(148,163,184,0.14)", color: meta.status === "ready" ? "#15803D" : "#64748B" }}>
                          {meta.status === "ready" ? "base lista" : "molde"}
                        </span>
                      </div>

                      <p className="char-display mt-5 text-3xl font-bold" style={{ color: meta.accent }}>{meta.jpLabel}</p>
                      <h2 className="mt-2 text-xl font-bold" style={{ color: "var(--ink)" }}>{meta.label}</h2>
                      <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.75 }}>{meta.description}</p>
                    </div>

                    <div className="mt-6 space-y-2 text-sm">
                      <div className="rounded-2xl px-3 py-2" style={{ background: `${meta.color}26`, color: meta.accent }}>
                        {stats.guideCount} tipos explicados
                      </div>
                      <div className="rounded-2xl px-3 py-2" style={{ background: "rgba(248,250,252,0.86)", color: "var(--ink-soft)" }}>
                        {stats.totalQuestions} preguntas propias
                      </div>
                      <p className="pt-2 font-semibold transition-transform duration-300 group-hover:translate-x-1" style={{ color: meta.accent }}>
                        Entrar →
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </section>
        </div>
      </div>
    </main>
  );
}
