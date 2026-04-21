//src/app/hiragana/page.tsx

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HIRAGANA_LESSONS, HIRAGANA_ALL_CHARS } from "@/data/hiragana";
import SakuraAnimation from "../components/layout/SakuraAnimation";

const features = [
  {
    href: "/hiragana/tabla",
    icon: "⊞",
    label: "Explorar Tabla",
    desc: "Los 46 caracteres organizados por fila",
    color: "#F2A7BB",
    accent: "#BC002D",
  },
  {
    href: "/hiragana/quiz",
    icon: "◎",
    label: "Trivia",
    desc: "Pon a prueba tu lectura de hiragana",
    color: "#FFD580",
    accent: "#8B5E00",
  },
  {
    href: "/hiragana/vocabulario",
    icon: "册",
    label: "Vocabulario",
    desc: `${HIRAGANA_LESSONS.length} lecciones con palabras del día a día`,
    color: "#A7F2C4",
    accent: "#1A6B3C",
  },
  {
    href: "/hiragana/practica",
    icon: "✏",
    label: "Práctica de escritura",
    desc: "Dibuja cada carácter y valida tus trazos",
    color: "#D4A7F2",
    accent: "#5B1A8B",
  },
];

const PREVIEW_CHARS = ["あ", "い", "う", "え", "お", "か", "き", "く", "さ", "し"];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      delay: i * 0.06,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const SURFACE = {
  background: "rgba(255,255,255,0.78)",
  border: "1px solid rgba(188,0,45,0.08)",
  boxShadow: "0 20px 42px rgba(64, 41, 66, 0.07)",
  backdropFilter: "blur(10px)",
};

function SectionHeader({
  eyebrow,
  title,
  desc,
  action,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && (
          <p
            className="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.18em]"
            style={{ color: "var(--sakura-dark)" }}
          >
            {eyebrow}
          </p>
        )}
        <h2 className="text-xl font-semibold tracking-[-0.02em]" style={{ color: "var(--ink)" }}>
          {title}
        </h2>
        {desc && (
          <p className="mt-2 max-w-2xl text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
            {desc}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}

export default function HiraganaPage() {
  return (
    <main className="relative min-h-screen overflow-hidden" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />

      <div className="relative z-10 flex w-full justify-center">
        <div className="w-full max-w-5xl px-4 pb-20 pt-6 sm:px-6 sm:pb-24 sm:pt-8">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
          >
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
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.04, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-5 rounded-[32px] p-5 sm:p-7"
            style={SURFACE}
          >
            <div className="flex flex-col items-center text-center">
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.18em]"
                style={{
                  color: "var(--sakura-dark)",
                  background: "rgba(242,167,187,0.1)",
                  border: "1px solid rgba(188,0,45,0.08)",
                }}
              >
                ひらがな · guía inicial
              </div>

              <div className="relative mt-6 flex h-[220px] w-full max-w-[520px] items-center justify-center overflow-hidden rounded-[30px] px-4">
                <span
                  className="char-display absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
                  aria-hidden="true"
                  style={{
                    fontSize: "clamp(4.5rem, 14vw, 8.5rem)",
                    color: "var(--sakura-dark)",
                    opacity: 0.1,
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  ひらがな
                </span>

                <div
                  className="absolute inset-0 rounded-[30px]"
                  style={{
                    background:
                      "radial-gradient(circle at top left, rgba(244,143,177,0.12), transparent 36%), radial-gradient(circle at bottom right, rgba(206,147,216,0.12), transparent 28%)",
                    border: "1px solid rgba(188,0,45,0.06)",
                  }}
                />

                <span
                  className="char-display relative z-10"
                  style={{
                    fontSize: "clamp(5rem, 16vw, 8.5rem)",
                    color: "var(--sakura-dark)",
                    fontWeight: 700,
                    lineHeight: 1,
                    textShadow: "0 10px 28px rgba(188,0,45,0.10)",
                  }}
                >
                </span>
              </div>

              <h1
                className="char-display mt-6 text-[clamp(2.3rem,5vw,4rem)] font-bold leading-[1.05]"
                style={{ color: "var(--ink)", letterSpacing: "-0.03em" }}
              >
                Hiragana
                <span
                  className="mt-2 block text-[clamp(1.05rem,2vw,1.65rem)] font-medium tracking-[0.18em] sm:mt-3"
                  style={{ color: "var(--sakura-dark)" }}
                >
                  ひらがな
                </span>
              </h1>

              <p
                className="mt-4 max-w-2xl text-sm leading-7 sm:text-base"
                style={{ color: "var(--ink-soft)", opacity: 0.8 }}
              >
                El hiragana es el sistema de escritura base del japonés. Cada carácter representa una
                sílaba y se usa para escribir palabras nativas, partículas gramaticales y conjugaciones
                de verbos.
              </p>

              <div className="mt-7 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { label: "Caracteres básicos", value: `${HIRAGANA_ALL_CHARS.length}` },
                  { label: "Lecciones", value: `${HIRAGANA_LESSONS.length}` },
                  { label: "Filas", value: "10" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[24px] px-4 py-4"
                    style={{
                      background: "rgba(255,255,255,0.72)",
                      border: "1px solid rgba(188,0,45,0.08)",
                    }}
                  >
                    <div className="text-2xl font-bold leading-none" style={{ color: "var(--sakura-dark)" }}>
                      {stat.value}
                    </div>
                    <div
                      className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em]"
                      style={{ color: "var(--ink-soft)", opacity: 0.72 }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
                <Link
                  href="/hiragana/tabla"
                  className="inline-flex flex-1 items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105"
                  style={{
                    background: "linear-gradient(135deg, #F48FB1 0%, #CE93D8 100%)",
                    boxShadow: "0 16px 30px rgba(192, 99, 140, 0.22)",
                  }}
                >
                  Ver tabla completa
                </Link>

                <Link
                  href="/hiragana/practica"
                  className="inline-flex flex-1 items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition-all duration-200 hover:bg-white"
                  style={{
                    background: "rgba(255,255,255,0.72)",
                    border: "1px solid rgba(188,0,45,0.08)",
                    color: "var(--ink)",
                  }}
                >
                  Empezar práctica
                </Link>
              </div>
            </div>
          </motion.section>

          <section className="mt-6 rounded-[28px] p-5 sm:p-6" style={SURFACE}>
            <SectionHeader
              eyebrow="accesos rápidos"
              title="Vista rápida de caracteres"
              desc="Accede directamente a práctica desde los primeros caracteres más comunes, con una franja limpia y fácil de recorrer."
              action={
                <Link
                  href="/hiragana/tabla"
                  className="inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition-all hover:bg-white"
                  style={{
                    color: "var(--sakura-dark)",
                    border: "1px solid rgba(188,0,45,0.08)",
                    background: "rgba(255,255,255,0.6)",
                  }}
                >
                  Ver todos →
                </Link>
              }
            />

            <div className="overflow-x-auto pb-1">
              <div className="flex min-w-max gap-3">
                {PREVIEW_CHARS.map((char, i) => (
                  <motion.div
                    key={char}
                    custom={i}
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                  >
                    <Link
                      href={`/hiragana/practica/${encodeURIComponent(char)}`}
                      className="group flex h-[86px] w-[86px] flex-col items-center justify-center rounded-[24px] border transition-all duration-200 hover:-translate-y-1 hover:bg-white"
                      style={{
                        background: "rgba(255,255,255,0.74)",
                        borderColor: "rgba(188,0,45,0.08)",
                        boxShadow: "0 12px 24px rgba(64, 41, 66, 0.05)",
                      }}
                      title={`Practicar ${char}`}
                    >
                      <span
                        className="char-display text-[2.1rem] leading-none transition-transform duration-200 group-hover:scale-110"
                        style={{ color: "var(--sakura-dark)" }}
                      >
                        {char}
                      </span>
                      <span
                        className="mt-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em]"
                        style={{ color: "var(--ink-soft)", opacity: 0.55 }}
                      >
                        práctica
                      </span>
                    </Link>
                  </motion.div>
                ))}

                <motion.div custom={PREVIEW_CHARS.length} initial="hidden" animate="show" variants={fadeUp}>
                  <Link
                    href="/hiragana/tabla"
                    className="flex h-[86px] w-[86px] items-center justify-center rounded-[24px] border text-center text-xs font-semibold leading-5 transition-all duration-200 hover:-translate-y-1 hover:bg-white"
                    style={{
                      background: "rgba(242,167,187,0.12)",
                      border: "1px dashed rgba(242,167,187,0.7)",
                      color: "var(--sakura-dark)",
                    }}
                  >
                    Ver
                    <br />
                    todos
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="mt-6">
            <SectionHeader
              eyebrow="modos de estudio"
              title="Elige cómo quieres practicar"
              desc="Cada bloque tiene más aire, más separación y una jerarquía más estable para que la lectura sea clara desde el primer vistazo."
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.href}
                  custom={i + PREVIEW_CHARS.length}
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                >
                  <Link
                    href={feature.href}
                    className="group relative flex h-full items-start gap-4 overflow-hidden rounded-[28px] p-6 transition-all duration-300 hover:-translate-y-1"
                    style={{
                      ...SURFACE,
                      background: "rgba(255,255,255,0.82)",
                    }}
                  >
                    <div
                      className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-55 transition-opacity duration-300 group-hover:opacity-85"
                      style={{ background: feature.color }}
                    />
                    <div
                      className="absolute inset-x-0 top-0 h-1"
                      style={{ background: `linear-gradient(90deg, ${feature.accent}, ${feature.color})` }}
                    />

                    <div
                      className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl font-bold"
                      style={{
                        background: `${feature.color}33`,
                        color: feature.accent,
                        border: `1px solid ${feature.color}66`,
                      }}
                    >
                      {feature.icon}
                    </div>

                    <div className="relative z-10 min-w-0 flex-1">
                      <p className="text-lg font-semibold leading-none" style={{ color: "var(--ink)" }}>
                        {feature.label}
                      </p>
                      <p className="mt-3 text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
                        {feature.desc}
                      </p>
                    </div>

                    <span
                      className="relative z-10 mt-1 text-lg opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                      style={{ color: feature.accent }}
                    >
                      →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mt-6 rounded-[28px] p-5 sm:p-6" style={SURFACE}>
            <SectionHeader
              eyebrow="contenido"
              title="Lecciones disponibles"
              desc="Organizadas en tarjetas más uniformes, con mejor espacio interno y lectura cómoda tanto en desktop como en pantallas pequeñas."
            />

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {HIRAGANA_LESSONS.map((lesson) => (
                <Link
                  key={lesson.id}
                  href={`/hiragana/vocabulario?leccion=${lesson.id}`}
                  className="group rounded-[22px] border p-4 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
                  style={{
                    borderColor: "rgba(188,0,45,0.08)",
                    background: "rgba(255,255,255,0.66)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold"
                      style={{
                        background: "rgba(242,167,187,0.16)",
                        color: "var(--sakura-dark)",
                      }}
                    >
                      {lesson.id.split("-")[1]}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-sm font-semibold leading-6 sm:text-base" style={{ color: "var(--ink)" }}>
                          {lesson.lesson}
                        </p>
                        <span
                          className="text-sm opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                          style={{ color: "var(--sakura-dark)" }}
                        >
                          →
                        </span>
                      </div>

                      <p className="mt-1 text-xs leading-6 sm:text-sm" style={{ color: "var(--ink-soft)", opacity: 0.72 }}>
                        {lesson.characters.join("　")}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        <span
                          className="rounded-full px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em]"
                          style={{
                            background: "rgba(242,167,187,0.1)",
                            color: "var(--sakura-dark)",
                          }}
                        >
                          {lesson.vocabulary.length} palabras
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
