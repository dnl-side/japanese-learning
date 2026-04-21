// src/app/gramatica/expresiones/page.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getAllLevelsMeta, hexWithAlpha } from "@/lib/expressionHelpers";
import { EXPRESSIONS_CATALOG } from "@/data/grammar/expresiones";

export default function ExpresionesHubPage() {
  const levels = getAllLevelsMeta();
  const total = EXPRESSIONS_CATALOG.expressions.length;
  const totalPracticeSets = EXPRESSIONS_CATALOG.practiceSets.length;
  const totalChallenges = EXPRESSIONS_CATALOG.challengeIdeas.length;

  return (
    <main className="min-h-screen px-4 pb-24 pt-8 sm:px-6 sm:pt-10 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-8 sm:gap-10">
        <nav className="w-full max-w-[1040px] text-sm text-[var(--ink-soft)]">
          <Link href="/gramatica" className="transition-colors hover:text-[var(--sakura-dark)]">
            Gramática
          </Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-[var(--ink)]">Expresiones</span>
        </nav>

        <motion.header
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative w-full max-w-[1040px] overflow-hidden rounded-[2rem] border bg-[var(--bg-card)] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12"
          style={{
            borderColor: "var(--border)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-32"
            style={{
              background:
                "linear-gradient(180deg, rgba(242,167,187,0.16) 0%, rgba(242,167,187,0.04) 45%, transparent 100%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 top-8 h-48 w-48 rounded-full blur-3xl"
            style={{ background: "rgba(242,167,187,0.16)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full blur-3xl"
            style={{ background: "rgba(201,168,76,0.10)" }}
          />

          <div className="relative mx-auto flex w-full max-w-[760px] flex-col items-center text-center">
            <div className="flex w-full flex-wrap items-center justify-center gap-3 text-center sm:gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--sakura-dark)]">
                Grammar · 表現
              </span>
              <span className="hidden h-px flex-1 bg-[var(--border)] sm:block" />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--ink-soft)]">
                Catálogo base
              </span>
            </div>

            <h1 className="mt-5 font-serif text-4xl leading-tight tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
              Expresiones japonesas
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--ink-soft)] sm:text-base">
              Patrones que aparecen en conversación real, avisos, correos, lectura y estudio JLPT.
              Esta sección reúne las expresiones desde N5 hasta N1 con una entrada clara por nivel,
              para que el usuario no se pierda entre matices, registros y estructuras parecidas.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
              <HubChip label={`${total} expresiones`} />
              <HubChip label={`${levels.length} niveles`} />
              <HubChip label={`${totalPracticeSets} sets base`} />
              <HubChip label={`${totalChallenges} ideas de práctica`} />
            </div>
          </div>
        </motion.header>

        <section className="w-full max-w-[1040px]">
          <div className="mx-auto mb-5 flex w-full max-w-[820px] flex-col gap-3 text-center sm:mb-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                Navegación principal
              </p>
              <h2 className="mt-2 font-serif text-2xl text-[var(--ink)] sm:text-3xl">
                Explora por nivel JLPT
              </h2>
            </div>

            <p className="mx-auto max-w-2xl text-sm leading-6 text-[var(--ink-soft)]">
              Cada bloque resume enfoque, dificultad y cantidad de expresiones para que la entrada sea
              visualmente clara tanto en móvil como en web.
            </p>
          </div>

          <ul className="mx-auto grid w-full max-w-[980px] gap-4 md:grid-cols-2">
            {levels.map((lvl, i) => (
              <motion.li
                key={lvl.level}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.05, ease: "easeOut" }}
                className="h-full"
              >
                <Link
                  href={`/gramatica/expresiones/${lvl.level.toLowerCase()}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border bg-[var(--bg-card)] p-5 transition-all duration-300 sm:p-6"
                  style={{
                    borderColor: "var(--border)",
                    boxShadow: "var(--shadow-soft)",
                  }}
                >
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1.5"
                    style={{ background: lvl.accent }}
                  />

                  <div
                    aria-hidden
                    className="pointer-events-none absolute right-0 top-0 h-32 w-32 translate-x-6 -translate-y-6 rounded-full opacity-80 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `radial-gradient(circle, ${hexWithAlpha(lvl.accent, 0.20)} 0%, transparent 72%)`,
                    }}
                  />

                  <div className="relative flex h-full flex-col gap-5">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <span
                            className="font-serif text-4xl font-medium leading-none sm:text-5xl"
                            style={{ color: lvl.accent }}
                          >
                            {lvl.label}
                          </span>
                          <span
                            className="rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em]"
                            style={{
                              background: hexWithAlpha(lvl.accent, 0.12),
                              color: lvl.accent,
                            }}
                          >
                            {lvl.caption}
                          </span>
                        </div>

                        <p className="mt-4 max-w-md text-sm leading-6 text-[var(--ink-soft)] sm:text-[0.95rem]">
                          {lvl.description}
                        </p>
                      </div>

                      <div className="shrink-0 text-left sm:text-right">
                        <div
                          className="font-serif text-3xl font-medium leading-none sm:text-4xl"
                          style={{ color: lvl.accent }}
                        >
                          {lvl.count}
                        </div>
                        <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink-soft)]">
                          expresiones
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-2 text-xs text-[var(--ink-soft)] sm:grid-cols-2 sm:text-[0.8rem]">
                      <div className="rounded-2xl bg-[var(--paper-warm)] px-3 py-2">
                        Entrada clara para estudiar por bloque.
                      </div>
                      <div className="rounded-2xl bg-[var(--paper-warm)] px-3 py-2">
                        Ideal para filtrar después por matiz y registro.
                      </div>
                    </div>

                    <div className="mt-auto flex items-center justify-between border-t border-[var(--border)] pt-4">
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--ink-soft)] transition-colors group-hover:text-[var(--sakura-dark)]">
                        Explorar nivel
                      </span>
                      <span
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-lg transition-transform duration-300 group-hover:translate-x-1"
                        style={{
                          background: hexWithAlpha(lvl.accent, 0.12),
                          color: lvl.accent,
                        }}
                      >
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.li>
            ))}
          </ul>
        </section>

        <section className="w-full max-w-[1040px]">
          <div
            className="mx-auto w-full max-w-[980px] rounded-[1.75rem] border bg-[var(--bg-card)] px-5 py-5 sm:px-6"
            style={{
              borderColor: "var(--border)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <div className="mx-auto flex w-full max-w-[820px] flex-col gap-3 text-center">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-soft)]">
                  Nota de estudio
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)] sm:text-[0.95rem]">
                  Los niveles JLPT aquí son una guía pedagógica. Algunas expresiones pueden aparecer
                  en más de un nivel según el enfoque del material o el tipo de examen.
                </p>
              </div>

              <div className="pt-1">
                <Link
                  href="/gramatica"
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--ink-soft)] transition-colors hover:text-[var(--sakura-dark)]"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span>Volver a gramática</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function HubChip({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.72)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink-soft)] backdrop-blur-sm sm:text-[11px]">
      {label}
    </span>
  );
}
