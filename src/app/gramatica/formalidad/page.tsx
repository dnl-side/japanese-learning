// src/app/gramatica/formalidad/page.tsx

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";
import { RubyText } from "@/app/components/ui/Ruby";
import { FORMALITY_HUB } from "@/data/grammar/formality-hub";

const ACCENT = "#455A64";
const ACCENT_SOFT = "rgba(69,90,100,";
const GRADIENT = "linear-gradient(135deg, #CFD8DC 0%, #455A64 100%)";

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-5 text-center lg:text-left">
      <p
        className="text-xs font-bold uppercase tracking-[0.18em]"
        style={{ color: ACCENT }}
      >
        {eyebrow}
      </p>
      <h2
        className="mt-2 text-[clamp(1.45rem,2.3vw,2rem)] font-bold"
        style={{ color: "var(--ink)" }}
      >
        {title}
      </h2>
      {desc && (
        <p
          className="mt-2 max-w-3xl text-sm leading-6 lg:text-base"
          style={{ color: "var(--ink-soft)", opacity: 0.82 }}
        >
          {desc}
        </p>
      )}
    </div>
  );
}

export default function FormalidadHubPage() {
  return (
    <main
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: "var(--paper)" }}
    >
      <SakuraAnimation />

      <div className="relative z-10 flex w-full justify-center">
        <div className="w-full max-w-5xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            <Link
              href="/gramatica"
              className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: ACCENT }}
            >
              ← Gramática
            </Link>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mt-5 rounded-[32px] border px-5 py-6 sm:px-8 sm:py-8"
            style={{
              background: "rgba(255,255,255,0.82)",
              borderColor: `${ACCENT_SOFT}0.10)`,
              boxShadow: `0 18px 40px ${ACCENT_SOFT}0.08)`,
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div
                  className="char-display select-none"
                  aria-hidden="true"
                  style={{
                    fontSize: "clamp(4.2rem, 14vw, 7rem)",
                    lineHeight: 1,
                    color: ACCENT,
                    opacity: 0.08,
                    fontWeight: 700,
                  }}
                >
                  {FORMALITY_HUB.meta.jp}
                </div>

                <div
                  className="mt-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                  style={{
                    color: ACCENT,
                    background: "rgba(207,216,220,0.24)",
                    border: `1px solid ${ACCENT_SOFT}0.14)`,
                  }}
                >
                  {FORMALITY_HUB.meta.badge}
                </div>

                <h1
                  className="mt-4 text-[clamp(2.35rem,7vw,4.2rem)] font-bold leading-none"
                  style={{ color: "var(--ink)" }}
                >
                  {FORMALITY_HUB.meta.title}
                </h1>

                <p
                  className="char-display mt-2 text-[clamp(1rem,2.4vw,1.4rem)] tracking-[0.18em]"
                  style={{ color: ACCENT }}
                >
                  {FORMALITY_HUB.meta.reading}
                </p>

                <p
                  className="mt-4 max-w-3xl text-sm leading-7 sm:text-base"
                  style={{ color: "var(--ink-soft)", opacity: 0.82 }}
                >
                  {FORMALITY_HUB.meta.description}
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
                  {FORMALITY_HUB.stats.map((item) => (
                    <div
                      key={item.label}
                      className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap"
                      style={{
                        background: "rgba(207,216,220,0.24)",
                        border: `1px solid ${ACCENT_SOFT}0.14)`,
                        color: ACCENT,
                      }}
                    >
                      <span className="font-bold">{item.value}</span>
                      <span className="opacity-80">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-[28px] border p-5"
                style={{
                  background: "rgba(255,255,255,0.72)",
                  borderColor: `${ACCENT_SOFT}0.12)`,
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ color: ACCENT }}
                >
                  Cómo estudiarlo
                </p>

                <h2
                  className="mt-2 text-xl font-bold"
                  style={{ color: "var(--ink)" }}
                >
                  Ruta recomendada
                </h2>

                <div className="mt-4 space-y-3">
                  {FORMALITY_HUB.studyFlow.map((item) => (
                    <div
                      key={item.step}
                      className="rounded-2xl border p-4"
                      style={{
                        background: "rgba(207,216,220,0.10)",
                        borderColor: `${ACCENT_SOFT}0.10)`,
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-bold text-white"
                          style={{ background: GRADIENT }}
                        >
                          {item.step}
                        </div>
                        <div>
                          <h3
                            className="text-sm font-bold"
                            style={{ color: "var(--ink)" }}
                          >
                            {item.title}
                          </h3>
                          <p
                            className="mt-1 text-sm leading-6"
                            style={{ color: "var(--ink-soft)", opacity: 0.82 }}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          <section className="mt-8">
            <SectionTitle
              eyebrow="Rutas del módulo"
              title="Dos focos distintos dentro de Formalidad"
              desc="Registro y Keigo están conectados, pero no enseñan exactamente lo mismo. Aquí conviene separarlos visualmente para que el usuario entienda qué estudiar primero y qué estudiar después."
            />

            <div className="grid gap-5 lg:grid-cols-2">
              {FORMALITY_HUB.modules.map((module, index) => (
                <motion.article
                  key={module.href}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="rounded-[30px] border p-5 sm:p-6"
                  style={{
                    background: "rgba(255,255,255,0.82)",
                    borderColor: `${module.accent}22`,
                    boxShadow: `0 16px 34px ${module.accent}12`,
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div
                        className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                        style={{
                          color: module.accent,
                          background: module.color,
                          border: `1px solid ${module.accent}22`,
                        }}
                      >
                        {module.eyebrow}
                      </div>

                      <h2
                        className="mt-4 text-[clamp(1.45rem,2vw,2rem)] font-bold leading-tight"
                        style={{ color: "var(--ink)" }}
                      >
                        {module.title}
                      </h2>

                      <p
                        className="char-display mt-1 text-base tracking-[0.16em]"
                        style={{ color: module.accent }}
                      >
                        {module.jp}
                      </p>
                    </div>

                    <div
                      className="rounded-2xl px-3 py-2 text-xs font-bold uppercase tracking-[0.14em]"
                      style={{
                        background: "rgba(255,255,255,0.72)",
                        border: `1px solid ${module.accent}18`,
                        color: module.accent,
                      }}
                    >
                      Módulo principal
                    </div>
                  </div>

                  <p
                    className="mt-4 text-sm leading-7 sm:text-base"
                    style={{ color: "var(--ink-soft)", opacity: 0.82 }}
                  >
                    {module.desc}
                  </p>

                  <div className="mt-5 grid gap-3">
                    {module.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="rounded-2xl border px-4 py-3 text-sm"
                        style={{
                          background: "rgba(255,255,255,0.72)",
                          borderColor: "var(--border)",
                          color: "var(--ink)",
                        }}
                      >
                        {bullet}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    {module.examples.map((sample) => (
                      <div
                        key={sample.label}
                        className="rounded-2xl border p-4"
                        style={{
                          background: "rgba(255,255,255,0.72)",
                          borderColor: "var(--border)",
                        }}
                      >
                        <p
                          className="text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                          style={{ color: module.accent }}
                        >
                          {sample.label}
                        </p>
                        <div className="mt-2">
                          <RubyText
                            segments={sample.segments}
                            className="char-display text-base leading-8"
                            style={{ color: "var(--ink)" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={module.href}
                      className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:brightness-110"
                      style={{
                        background: `linear-gradient(135deg, ${module.color} 0%, ${module.accent} 100%)`,
                        boxShadow: `0 12px 28px ${module.accent}22`,
                      }}
                    >
                      {module.cta} →
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="mt-8 rounded-[30px] border p-5 sm:p-6">
            <SectionTitle
              eyebrow="Comparación rápida"
              title="Qué entra en cada parte"
              desc="La idea es que el usuario entienda de inmediato cuál es la diferencia entre ambas rutas, sin sentir que son dos páginas que repiten lo mismo."
            />

            <div className="grid gap-4 lg:grid-cols-2">
              <div
                className="rounded-[24px] border p-5"
                style={{
                  background: "rgba(207,216,220,0.16)",
                  borderColor: "rgba(55,71,79,0.14)",
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ color: "#37474F" }}
                >
                  Registro
                </p>
                <p
                  className="mt-3 text-sm leading-7"
                  style={{ color: "var(--ink)" }}
                >
                  {FORMALITY_HUB.summary.registro}
                </p>
              </div>

              <div
                className="rounded-[24px] border p-5"
                style={{
                  background: "rgba(237,231,246,0.56)",
                  borderColor: "rgba(109,40,217,0.14)",
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ color: "#6D28D9" }}
                >
                  Keigo
                </p>
                <p
                  className="mt-3 text-sm leading-7"
                  style={{ color: "var(--ink)" }}
                >
                  {FORMALITY_HUB.summary.keigo}
                </p>
              </div>
            </div>
          </section>

          <section className="mt-8 grid gap-5 lg:grid-cols-2">
            {FORMALITY_HUB.quickGuide.map((group) => (
              <div
                key={group.title}
                className="rounded-[28px] border p-5 sm:p-6"
                style={{
                  background: "rgba(255,255,255,0.82)",
                  borderColor: `${ACCENT_SOFT}0.10)`,
                }}
              >
                <h3
                  className="text-lg font-bold"
                  style={{ color: "var(--ink)" }}
                >
                  {group.title}
                </h3>

                <div className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border px-4 py-3 text-sm"
                      style={{
                        background: "rgba(207,216,220,0.10)",
                        borderColor: `${ACCENT_SOFT}0.10)`,
                        color: "var(--ink)",
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section
            className="mt-8 rounded-[30px] border px-5 py-6 text-center sm:px-6"
            style={{
              background: "rgba(255,255,255,0.82)",
              borderColor: `${ACCENT_SOFT}0.10)`,
            }}
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: ACCENT }}
            >
              Recomendación final
            </p>
            <h2
              className="mt-2 text-[clamp(1.45rem,2vw,2rem)] font-bold"
              style={{ color: "var(--ink)" }}
            >
              Empieza por Registro y después sube a Keigo
            </h2>
            <p
              className="mx-auto mt-3 max-w-3xl text-sm leading-7 sm:text-base"
              style={{ color: "var(--ink-soft)", opacity: 0.82 }}
            >
              Ese orden hace que la progresión se sienta natural: primero
              entiendes el cambio entre casual y neutro, y después ya trabajas
              respeto, humildad y fórmulas profesionales con una base mucho más
              firme.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/gramatica/formalidad/registro"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #CFD8DC 0%, #37474F 100%)",
                  boxShadow: "0 12px 28px rgba(55,71,79,0.22)",
                }}
              >
                Entrar a Registro →
              </Link>

              <Link
                href="/gramatica/formalidad/keigo"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #EDE7F6 0%, #6D28D9 100%)",
                  boxShadow: "0 12px 28px rgba(109,40,217,0.22)",
                }}
              >
                Entrar a Keigo →
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}