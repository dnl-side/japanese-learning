// src/app/gramatica/expresiones/[level]/[id]/page.tsx

"use client";

import Link from "next/link";
import { useMemo, type CSSProperties, type ReactNode } from "react";
import { motion } from "framer-motion";
import { useParams, notFound } from "next/navigation";
import { RubyText } from "@/app/components/ui/Ruby";
import {
  getExpressionById,
  getExpressionsByLevel,
  getLevelMeta,
  hexWithAlpha,
  categoryLabel,
  registerLabel,
  importanceLabel,
  resolveCompareRef,
} from "@/lib/expressionHelpers";
import type { JlptLevel } from "@/data/grammar/expresiones";

const VALID_LEVELS: JlptLevel[] = ["N5", "N4", "N3", "N2", "N1"];

export default function ExpressionDetailPage() {
  const params = useParams<{ level: string; id: string }>();
  const levelParam = (params?.level ?? "").toUpperCase() as JlptLevel;
  const id = params?.id ?? "";

  if (!VALID_LEVELS.includes(levelParam)) notFound();

  const expression = getExpressionById(id);
  if (!expression) notFound();

  const level = expression.level;
  const meta = getLevelMeta(level);
  const accent = meta.accent;

  const resolvedRefs = useMemo(
    () => expression.compareWith.map(resolveCompareRef),
    [expression]
  );

  const siblings = useMemo(() => getExpressionsByLevel(level), [level]);
  const currentIndex = siblings.findIndex((item) => item.id === expression.id);
  const previousExpression = currentIndex > 0 ? siblings[currentIndex - 1] : null;
  const nextExpression = currentIndex < siblings.length - 1 ? siblings[currentIndex + 1] : null;

  return (
    <main className="min-h-screen px-4 pb-24 pt-8 sm:px-6 sm:pt-10 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-6 sm:gap-8">
        <nav className="w-full max-w-[1080px] text-sm text-[var(--ink-soft)]">
          <Link href="/gramatica" className="transition-colors hover:text-[var(--sakura-dark)]">
            Gramática
          </Link>
          <span className="mx-2 opacity-40">/</span>
          <Link
            href="/gramatica/expresiones"
            className="transition-colors hover:text-[var(--sakura-dark)]"
          >
            Expresiones
          </Link>
          <span className="mx-2 opacity-40">/</span>
          <Link
            href={`/gramatica/expresiones/${level.toLowerCase()}`}
            className="transition-colors hover:text-[var(--sakura-dark)]"
          >
            {level}
          </Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-[var(--ink)]">{expression.title}</span>
        </nav>

        <motion.header
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative w-full max-w-[1080px] overflow-hidden rounded-[2rem] border bg-[var(--bg-card)] px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10"
          style={{
            borderColor: "var(--border)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-36"
            style={{
              background: `linear-gradient(180deg, ${hexWithAlpha(accent, 0.18)} 0%, ${hexWithAlpha(
                accent,
                0.04
              )} 48%, transparent 100%)`,
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 top-4 h-64 w-64 rounded-full blur-3xl"
            style={{ background: hexWithAlpha(accent, 0.18) }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full blur-3xl"
            style={{ background: "rgba(201,168,76,0.10)" }}
          />

          <div className="relative mx-auto flex w-full max-w-[980px] flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <span
                  className="rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em]"
                  style={{
                    background: hexWithAlpha(accent, 0.12),
                    color: accent,
                  }}
                >
                  {level} · {meta.caption}
                </span>
                <span className="rounded-full border border-[var(--border)] bg-white/55 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink-soft)] backdrop-blur-sm">
                  {categoryLabel(expression.category)}
                </span>
                <span className="rounded-full border border-[var(--border)] bg-white/55 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink-soft)] backdrop-blur-sm">
                  #{expression.order.toString().padStart(2, "0")}
                </span>
              </div>

              <div className="mt-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                  Patrón objetivo
                </p>
                <h1 className="char-display mt-3 font-serif text-4xl leading-tight tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
                  {expression.pattern}
                </h1>
              </div>

              <div className="mt-6 space-y-3">
                <h2 className="font-serif text-2xl text-[var(--ink)] sm:text-[2rem]">
                  {expression.title}
                </h2>
                <p className="text-base italic leading-relaxed text-[var(--sakura-dark)] sm:text-lg">
                  {expression.meaning}
                </p>
                <p className="max-w-2xl text-sm leading-7 text-[var(--ink-soft)] sm:text-base">
                  {expression.nuance}
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:w-[320px] lg:grid-cols-1">
              <HeroStatCard
                label="Ejemplos"
                value={String(expression.examples.length).padStart(2, "0")}
                accent={accent}
              />
              <HeroStatCard
                label="Comparaciones"
                value={String(resolvedRefs.length).padStart(2, "0")}
                accent={accent}
              />
              <HeroStatCard label="Nivel" value={level} accent={accent} />
            </div>
          </div>
        </motion.header>

        <div className="grid w-full max-w-[1080px] gap-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
          <div className="space-y-6 sm:space-y-7">
            <StudySection eyebrow="Lectura rápida" title="Cómo usar esta expresión" accent={accent}>
              <div className="grid gap-4 md:grid-cols-[minmax(0,1.25fr)_minmax(0,0.95fr)]">
                <SurfaceCard>
                  <h3 className="font-serif text-xl text-[var(--ink)]">Matiz principal</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)] sm:text-base">
                    {expression.nuance}
                  </p>
                </SurfaceCard>

                {expression.caution ? (
                  <SurfaceCard
                    style={{
                      background: "linear-gradient(180deg, rgba(245,240,232,0.95) 0%, rgba(255,255,255,0.9) 100%)",
                      borderColor: hexWithAlpha(accent, 0.2),
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sm"
                        style={{
                          background: hexWithAlpha(accent, 0.12),
                          color: accent,
                        }}
                      >
                        !
                      </span>
                      <h3 className="font-serif text-lg text-[var(--ink)]">Cuidado</h3>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{expression.caution}</p>
                  </SurfaceCard>
                ) : null}
              </div>
            </StudySection>

            {expression.formation.length > 0 && (
              <StudySection eyebrow="Construcción" title="Formación y plantilla" accent={accent}>
                <div className="grid gap-3 sm:grid-cols-2">
                  {expression.formation.map((item, index) => (
                    <motion.div
                      key={`${expression.id}-formation-${index}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.28, delay: index * 0.04 }}
                    >
                      <SurfaceCard className="h-full p-0">
                        <div className="flex h-full gap-0">
                          <div
                            className="flex min-h-full w-14 shrink-0 items-center justify-center rounded-l-[1.35rem] font-mono text-xs uppercase tracking-[0.18em]"
                            style={{
                              background: hexWithAlpha(accent, 0.12),
                              color: accent,
                            }}
                          >
                            {index + 1}
                          </div>

                          <div className="flex flex-1 items-center px-4 py-4 sm:px-5">
                            <RubyText
                              segments={item.segments}
                              className="char-display block font-serif text-lg leading-relaxed text-[var(--ink)] sm:text-xl"
                            />
                          </div>
                        </div>
                      </SurfaceCard>
                    </motion.div>
                  ))}
                </div>
              </StudySection>
            )}

            <StudySection eyebrow="Contexto real" title="Ejemplos" accent={accent}>
              <div className="space-y-4">
                {expression.examples.map((example, index) => (
                  <motion.article
                    key={`${expression.id}-example-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="overflow-hidden rounded-[1.6rem] border bg-[var(--bg-card)]"
                    style={{
                      borderColor: "var(--border)",
                      boxShadow: "var(--shadow-soft)",
                    }}
                  >
                    <div className="h-1.5 w-full" style={{ background: hexWithAlpha(accent, 0.8) }} />
                    <div className="p-5 sm:p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <span
                          className="inline-flex h-9 min-w-9 items-center justify-center rounded-full px-3 font-mono text-[11px] uppercase tracking-[0.18em]"
                          style={{
                            background: hexWithAlpha(accent, 0.12),
                            color: accent,
                          }}
                        >
                          {index + 1}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-soft)]">
                          Ejemplo guiado
                        </span>
                      </div>

                      <RubyText
                        segments={example.segments}
                        className="char-display block font-serif text-2xl leading-relaxed text-[var(--ink)] sm:text-[1.9rem]"
                      />

                      <div className="mt-5 rounded-2xl bg-[var(--paper-warm)] px-4 py-3">
                        <p className="text-sm leading-7 text-[var(--ink-soft)] sm:text-base">
                          {example.translation}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </StudySection>

            {resolvedRefs.length > 0 && (
              <StudySection eyebrow="Comparación" title="Expresiones relacionadas" accent={accent}>
                <SurfaceCard>
                  <div className="flex flex-wrap gap-2.5">
                    {resolvedRefs.map((ref, index) =>
                      ref.id ? (
                        <Link
                          key={`${ref.id}-${index}`}
                          href={`/gramatica/expresiones/${ref.level!.toLowerCase()}/${ref.id}`}
                          className="group inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm transition-all hover:-translate-y-0.5"
                          style={{
                            borderColor: "var(--border)",
                            background: "var(--bg-card)",
                          }}
                        >
                          <span className="char-display font-serif text-[var(--ink)] transition-colors group-hover:text-[var(--sakura-dark)]">
                            {ref.pattern}
                          </span>
                          <span
                            className="rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em]"
                            style={{
                              background: hexWithAlpha(accent, 0.1),
                              color: accent,
                            }}
                          >
                            {ref.level}
                          </span>
                        </Link>
                      ) : (
                        <span
                          key={`${ref.pattern}-${index}`}
                          className="inline-flex items-center rounded-full border border-dashed px-3.5 py-2 text-sm"
                          style={{
                            borderColor: "var(--border)",
                            color: "var(--ink-soft)",
                          }}
                          title="Esta expresión aún no está en el catálogo"
                        >
                          <span className="char-display font-serif">{ref.pattern}</span>
                        </span>
                      )
                    )}
                  </div>
                </SurfaceCard>
              </StudySection>
            )}
          </div>

          <aside className="space-y-4 lg:sticky lg:top-6">
            <SurfaceCard>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-soft)]">
                Ficha rápida
              </p>
              <dl className="mt-4 space-y-4">
                <AsideRow label="Nivel">
                  <span
                    className="rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em]"
                    style={{
                      background: hexWithAlpha(accent, 0.12),
                      color: accent,
                    }}
                  >
                    {level} · {meta.caption}
                  </span>
                </AsideRow>

                <AsideRow label="Categoría">
                  <span className="text-sm text-[var(--ink)]">{categoryLabel(expression.category)}</span>
                </AsideRow>

                <AsideRow label="Importancia">
                  <span
                    className="rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em]"
                    style={{
                      background: hexWithAlpha(accent, 0.12),
                      color: accent,
                    }}
                  >
                    {importanceLabel(expression.importance)}
                  </span>
                </AsideRow>

                <AsideRow label="Registro">
                  <div className="flex flex-wrap gap-1.5">
                    {expression.register.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--border)] bg-[var(--paper-warm)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink-soft)]"
                      >
                        {registerLabel(item)}
                      </span>
                    ))}
                  </div>
                </AsideRow>
              </dl>
            </SurfaceCard>

            {expression.tags.length > 0 && (
              <SurfaceCard>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-soft)]">
                  Tags
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {expression.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--paper-warm)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink-soft)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </SurfaceCard>
            )}

            <SurfaceCard>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-soft)]">
                Navegación
              </p>
              <div className="mt-4 grid gap-2.5">
                <Link
                  href={`/gramatica/expresiones/${level.toLowerCase()}`}
                  className="rounded-2xl border px-4 py-3 text-sm text-[var(--ink)] transition-colors hover:text-[var(--sakura-dark)]"
                  style={{ borderColor: "var(--border)", background: "var(--paper-warm)" }}
                >
                  ← Volver al nivel {level}
                </Link>
                <Link
                  href="/gramatica/expresiones"
                  className="rounded-2xl border px-4 py-3 text-sm text-[var(--ink)] transition-colors hover:text-[var(--sakura-dark)]"
                  style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
                >
                  Ver todos los niveles
                </Link>
              </div>
            </SurfaceCard>

            <div className="text-center lg:text-left">
              <button
                disabled
                className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full border px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-[var(--ink-soft)] opacity-60"
                style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
                title="Quiz disponible próximamente"
              >
                <span>Practicar esta expresión</span>
                <span>·</span>
                <span>Próximamente</span>
              </button>
            </div>
          </aside>
        </div>

        {(previousExpression || nextExpression) && (
          <section className="w-full max-w-[1080px]">
            <div className="mb-4 flex items-center gap-3">
              <h2 className="font-serif text-xl text-[var(--ink)]">Seguir estudiando</h2>
              <span className="h-px flex-1 bg-[var(--border)]" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {previousExpression ? (
                <NavExpressionCard
                  href={`/gramatica/expresiones/${level.toLowerCase()}/${previousExpression.id}`}
                  direction="Anterior"
                  pattern={previousExpression.pattern}
                  title={previousExpression.title}
                  accent={accent}
                />
              ) : (
                <PlaceholderNavCard label="Anterior" />
              )}

              {nextExpression ? (
                <NavExpressionCard
                  href={`/gramatica/expresiones/${level.toLowerCase()}/${nextExpression.id}`}
                  direction="Siguiente"
                  pattern={nextExpression.pattern}
                  title={nextExpression.title}
                  accent={accent}
                />
              ) : (
                <PlaceholderNavCard label="Siguiente" />
              )}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

function StudySection({
  eyebrow,
  title,
  accent,
  children,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  children: ReactNode;
}) {
  return (
    <section>
      <div className="mb-4 sm:mb-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
          {eyebrow}
        </p>
        <div className="mt-2 flex items-center gap-3">
          <h2 className="font-serif text-2xl text-[var(--ink)]">{title}</h2>
          <span
            className="hidden h-px flex-1 sm:block"
            style={{ background: hexWithAlpha(accent, 0.22) }}
          />
        </div>
      </div>
      {children}
    </section>
  );
}

function SurfaceCard({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`rounded-[1.35rem] border bg-[var(--bg-card)] p-5 sm:p-6 ${className}`.trim()}
      style={{
        borderColor: "var(--border)",
        boxShadow: "var(--shadow-soft)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function HeroStatCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div
      className="rounded-[1.35rem] border px-4 py-4 backdrop-blur-sm"
      style={{
        borderColor: hexWithAlpha(accent, 0.16),
        background: "rgba(255,255,255,0.72)",
      }}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-soft)]">
        {label}
      </p>
      <p className="mt-2 font-serif text-2xl text-[var(--ink)]">{value}</p>
    </div>
  );
}

function AsideRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <dt className="mb-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--ink-soft)]">
        {label}
      </dt>
      <dd>{children}</dd>
    </div>
  );
}

function NavExpressionCard({
  href,
  direction,
  pattern,
  title,
  accent,
}: {
  href: string;
  direction: string;
  pattern: string;
  title: string;
  accent: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-[1.6rem] border bg-[var(--bg-card)] p-5 transition-all hover:-translate-y-0.5"
      style={{
        borderColor: "var(--border)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className="rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em]"
          style={{
            background: hexWithAlpha(accent, 0.12),
            color: accent,
          }}
        >
          {direction}
        </span>
        <span className="text-sm text-[var(--ink-soft)] transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </div>

      <p className="char-display mt-4 font-serif text-2xl leading-tight text-[var(--ink)]">{pattern}</p>
      <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{title}</p>
    </Link>
  );
}

function PlaceholderNavCard({ label }: { label: string }) {
  return (
    <div
      className="rounded-[1.6rem] border border-dashed px-5 py-6 text-center text-sm text-[var(--ink-soft)]"
      style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.5)" }}
    >
      {label}: no hay más expresiones en esa dirección.
    </div>
  );
}
