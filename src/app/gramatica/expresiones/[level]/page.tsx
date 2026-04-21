// src/app/gramatica/expresiones/[level]/page.tsx

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, notFound } from "next/navigation";
import {
  getExpressionsByLevel,
  getLevelMeta,
  getAllLevelsMeta,
  groupExpressionsByMeta,
  hexWithAlpha,
  categoryLabel,
  registerLabel,
  importanceLabel,
} from "@/lib/expressionHelpers";
import type {
  JlptLevel,
  ExpressionItem,
  ExpressionRegister,
  Importance,
} from "@/data/grammar/expresiones";

const VALID_LEVELS: JlptLevel[] = ["N5", "N4", "N3", "N2", "N1"];

export default function ExpressionLevelPage() {
  const params = useParams<{ level: string }>();
  const levelParam = (params?.level ?? "").toUpperCase() as JlptLevel;

  if (!VALID_LEVELS.includes(levelParam)) {
    notFound();
  }

  const level = levelParam;
  const meta = getLevelMeta(level);
  const levelNav = getAllLevelsMeta();
  const allExpressions = useMemo(() => getExpressionsByLevel(level), [level]);

  const [registerFilter, setRegisterFilter] = useState<ExpressionRegister | null>(null);
  const [importanceFilter, setImportanceFilter] = useState<Importance | null>(null);

  const filtered = useMemo(() => {
    return allExpressions.filter((e) => {
      if (registerFilter && !e.register.includes(registerFilter)) return false;
      if (importanceFilter && e.importance !== importanceFilter) return false;
      return true;
    });
  }, [allExpressions, registerFilter, importanceFilter]);

  const grouped = useMemo(() => groupExpressionsByMeta(filtered), [filtered]);
  const hasActiveFilter = registerFilter !== null || importanceFilter !== null;

  return (
    <main className="min-h-screen px-4 pb-24 pt-8 sm:px-6 sm:pt-10 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-8 sm:gap-10">
        <nav className="w-full max-w-[1040px] text-sm text-[var(--ink-soft)]">
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
          <span className="text-[var(--ink)]">{level}</span>
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
              background: `linear-gradient(180deg, ${hexWithAlpha(meta.accent, 0.18)} 0%, ${hexWithAlpha(meta.accent, 0.05)} 48%, transparent 100%)`,
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-12 top-8 h-44 w-44 rounded-full blur-3xl"
            style={{ background: hexWithAlpha(meta.accent, 0.2) }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-10 bottom-0 h-36 w-36 rounded-full blur-3xl"
            style={{ background: "rgba(201,168,76,0.10)" }}
          />

          <div className="relative mx-auto flex w-full max-w-[820px] flex-col items-center text-center">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span
                className="rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em]"
                style={{
                  background: hexWithAlpha(meta.accent, 0.12),
                  color: meta.accent,
                }}
              >
                {meta.level} · {meta.caption}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-soft)]">
                {meta.count} expresiones en este nivel
              </span>
            </div>

            <h1 className="mt-5 font-serif text-4xl leading-tight tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
              Expresiones {level}
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--ink-soft)] sm:text-base">
              {meta.description} Aquí están agrupadas por bloques de estudio para que el usuario pueda
              entrar por intención, tiempo, causa, contraste o cambio sin perder legibilidad.
            </p>

            <div className="mt-6 grid w-full max-w-[760px] gap-3 sm:grid-cols-3">
              <HeroStat label="Total del nivel" value={String(meta.count)} accent={meta.accent} />
              <HeroStat label="Grupos visibles" value={String(grouped.length)} accent={meta.accent} />
              <HeroStat
                label="Filtros"
                value={hasActiveFilter ? "Activos" : "Listos"}
                accent={meta.accent}
              />
            </div>
          </div>
        </motion.header>

        <section className="w-full max-w-[1040px]">
          <div
            className="rounded-[1.75rem] border bg-[var(--bg-card)] p-4 sm:p-5"
            style={{
              borderColor: "var(--border)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <div className="mx-auto flex w-full max-w-[980px] flex-col gap-4 sm:gap-5">
              <div className="flex flex-col gap-2 text-center">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                    Navegación entre niveles
                  </p>
                  <h2 className="mt-2 font-serif text-2xl text-[var(--ink)]">
                    Cambiar de nivel sin salir de expresiones
                  </h2>
                </div>

                <p className="mx-auto max-w-2xl text-sm leading-6 text-[var(--ink-soft)]">
                  Útil para comparar dificultad, cantidad y progresión entre N5 y N1.
                </p>
              </div>

              <div className="grid gap-2 sm:grid-cols-5">
                {levelNav.map((item) => {
                  const isActive = item.level === level;
                  return (
                    <Link
                      key={item.level}
                      href={`/gramatica/expresiones/${item.level.toLowerCase()}`}
                      className="rounded-2xl border px-4 py-3 transition-all"
                      style={{
                        borderColor: isActive ? item.accent : "var(--border)",
                        background: isActive ? hexWithAlpha(item.accent, 0.12) : "var(--bg-card)",
                        boxShadow: isActive ? "var(--shadow-soft)" : "none",
                      }}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className="font-serif text-2xl leading-none"
                          style={{ color: isActive ? item.accent : "var(--ink)" }}
                        >
                          {item.level}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink-soft)]">
                          {item.count}
                        </span>
                      </div>
                      <p className="mt-2 text-xs leading-5 text-[var(--ink-soft)]">{item.caption}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-[1040px]">
          <div
            className="rounded-[1.75rem] border bg-[var(--bg-card)] p-5 sm:p-6"
            style={{
              borderColor: "var(--border)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <div className="mx-auto flex w-full max-w-[980px] flex-col gap-5">
              <div className="flex flex-col gap-5 text-center lg:text-left">
                <div className="mx-auto max-w-[760px] lg:mx-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                    Filtros del catálogo
                  </p>
                  <h2 className="mt-2 font-serif text-2xl text-[var(--ink)] sm:text-3xl">
                    Ajusta por registro e importancia
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)] sm:text-[0.95rem]">
                    En vez de apilar todo junto, el page separa primero la lectura del nivel y
                    después los filtros. Así se siente más ordenado y no compite con las cards.
                  </p>
                </div>

                <div className="grid gap-4">
                  <FilterRow
                    title="Registro"
                    accent={meta.accent}
                    active={registerFilter}
                    onChange={setRegisterFilter}
                    options={[
                      { value: "casual", label: "Casual" },
                      { value: "polite", label: "Cortés" },
                      { value: "formal", label: "Formal" },
                      { value: "written", label: "Escrito" },
                    ]}
                  />

                  <FilterRow
                    title="Importancia"
                    accent={meta.accent}
                    active={importanceFilter}
                    onChange={setImportanceFilter}
                    options={[
                      { value: "core", label: "Esencial" },
                      { value: "high", label: "Alta" },
                      { value: "medium", label: "Media" },
                    ]}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-[var(--border)] pt-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                  <SummaryChip label={`${filtered.length} visibles`} accent={meta.accent} />
                  {registerFilter && (
                    <SummaryChip label={`Registro: ${registerLabel(registerFilter)}`} accent={meta.accent} />
                  )}
                  {importanceFilter && (
                    <SummaryChip
                      label={`Importancia: ${importanceLabel(importanceFilter)}`}
                      accent={meta.accent}
                    />
                  )}
                  {!hasActiveFilter && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink-soft)]">
                      Sin filtros activos
                    </span>
                  )}
                </div>

                {hasActiveFilter && (
                  <button
                    onClick={() => {
                      setRegisterFilter(null);
                      setImportanceFilter(null);
                    }}
                    className="inline-flex items-center justify-center rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors hover:text-[var(--sakura-dark)]"
                    style={{ borderColor: "var(--border)", color: "var(--ink-soft)" }}
                  >
                    Limpiar filtros
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {filtered.length === 0 ? (
          <section className="w-full max-w-[1040px]">
            <div
              className="mx-auto w-full max-w-[980px] rounded-[1.75rem] border bg-[var(--bg-card)] px-6 py-12 text-center"
              style={{
                borderColor: "var(--border)",
                boxShadow: "var(--shadow-soft)",
              }}
            >
              <p className="font-serif text-2xl text-[var(--ink)]">No hay resultados con esos filtros.</p>
              <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
                Prueba quitando un filtro o cambiando de nivel para ampliar el catálogo visible.
              </p>
            </div>
          </section>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${level}-${registerFilter}-${importanceFilter}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="flex w-full max-w-[1040px] flex-col gap-6"
            >
              {grouped.map(({ group, items }) => (
                <section
                  key={group.id}
                  className="rounded-[1.75rem] border bg-[var(--bg-card)] p-5 sm:p-6"
                  style={{
                    borderColor: "var(--border)",
                    boxShadow: "var(--shadow-soft)",
                  }}
                >
                  <div className="mx-auto w-full max-w-[980px]">
                    <div className="mb-5 flex flex-col gap-3 text-center">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                          Bloque temático
                        </p>
                        <h2 className="mt-2 font-serif text-2xl text-[var(--ink)] sm:text-[2rem]">
                          {group.label}
                        </h2>
                      </div>

                      <div className="flex items-center justify-center gap-3">
                        <span
                          className="rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em]"
                          style={{
                            background: hexWithAlpha(meta.accent, 0.12),
                            color: meta.accent,
                          }}
                        >
                          {items.length} expresiones
                        </span>
                      </div>
                    </div>

                    <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                      {items.map((expression, index) => (
                        <ExpressionCard
                          key={expression.id}
                          expression={expression}
                          index={index}
                          accent={meta.accent}
                        />
                      ))}
                    </ul>
                  </div>
                </section>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </main>
  );
}

function HeroStat({
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
      className="rounded-[1.4rem] border px-4 py-4 text-center"
      style={{
        borderColor: hexWithAlpha(accent, 0.18),
        background: "rgba(255,255,255,0.7)",
      }}
    >
      <div className="font-serif text-3xl leading-none" style={{ color: accent }}>
        {value}
      </div>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink-soft)]">
        {label}
      </p>
    </div>
  );
}

interface FilterOption<T> {
  value: T;
  label: string;
}

function FilterRow<T extends string>({
  title,
  options,
  active,
  onChange,
  accent,
}: {
  title: string;
  options: FilterOption<T>[];
  active: T | null;
  onChange: (value: T | null) => void;
  accent: string;
}) {
  return (
    <div className="rounded-[1.25rem] bg-[var(--paper-warm)] px-4 py-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <span className="text-center font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-soft)] lg:text-left">
          {title}
        </span>
        <div className="flex flex-wrap justify-center gap-2 lg:justify-end">
          {options.map((opt) => {
            const isActive = active === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => onChange(isActive ? null : opt.value)}
                className="rounded-full border px-3.5 py-2 text-xs transition-all"
                style={{
                  borderColor: isActive ? accent : "var(--border)",
                  background: isActive ? hexWithAlpha(accent, 0.12) : "rgba(255,255,255,0.75)",
                  color: isActive ? accent : "var(--ink-soft)",
                }}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function SummaryChip({ label, accent }: { label: string; accent: string }) {
  return (
    <span
      className="rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em]"
      style={{
        background: hexWithAlpha(accent, 0.1),
        color: accent,
      }}
    >
      {label}
    </span>
  );
}

function ExpressionCard({
  expression,
  index,
  accent,
}: {
  expression: ExpressionItem;
  index: number;
  accent: string;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03, ease: "easeOut" }}
      className="h-full"
    >
      <Link
        href={`/gramatica/expresiones/${expression.level.toLowerCase()}/${expression.id}`}
        className="group flex h-full flex-col rounded-[1.5rem] border bg-[var(--bg-card)] p-4 transition-all duration-300 sm:p-5"
        style={{
          borderColor: "var(--border)",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        <div className="flex items-start justify-between gap-3">
          <span
            className="rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em]"
            style={{
              background: hexWithAlpha(accent, 0.12),
              color: accent,
            }}
          >
            {categoryLabel(expression.category)}
          </span>

          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--ink-soft)]">
            {importanceLabel(expression.importance)}
          </span>
        </div>

        <div className="mt-4 rounded-[1.2rem] bg-[var(--paper-warm)] px-4 py-4">
          <p className="char-display font-serif text-2xl leading-snug text-[var(--ink)] sm:text-[1.7rem]">
            {expression.pattern}
          </p>
        </div>

        <h3 className="mt-4 text-base font-semibold text-[var(--ink)] sm:text-lg">
          {expression.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{expression.meaning}</p>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--ink-soft)]">
          {expression.nuance}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {expression.register.slice(0, 2).map((item) => (
            <span
              key={item}
              className="rounded-full border border-[var(--border)] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--ink-soft)]"
            >
              {registerLabel(item)}
            </span>
          ))}
          {expression.register.length > 2 && (
            <span className="rounded-full border border-[var(--border)] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--ink-soft)]">
              +{expression.register.length - 2}
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-[var(--border)] pt-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink-soft)] transition-colors group-hover:text-[var(--sakura-dark)]">
            Ver detalle
          </span>
          <span
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-base transition-transform duration-300 group-hover:translate-x-1"
            style={{
              background: hexWithAlpha(accent, 0.12),
              color: accent,
            }}
          >
            →
          </span>
        </div>
      </Link>
    </motion.li>
  );
}
