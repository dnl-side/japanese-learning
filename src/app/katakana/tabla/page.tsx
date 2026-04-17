"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import {
  KATAKANA_TABLE_ROWS,
  KATAKANA_DAKUTEN_ROWS,
  KATAKANA_HANDAKUTEN_ROWS,
  KATAKANA_STROKE_COUNT,
  KATAKANA_ROMAJI,
  getKatakanaLessonByChar,
} from "@/data/katakana";
import type { TableRow } from "@/types/japanese";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";


// ─── Types ────────────────────────────────────────────────────────────────────

interface SelectedChar {
  char: string;
  romaji: string;
  strokeCount: number;
  lesson?: ReturnType<typeof getKatakanaLessonByChar>;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const VOWEL_HEADERS = ["A", "I", "U", "E", "O"];

const ROW_LABELS: Record<string, string> = {
  a: "—", ka: "K", sa: "S", ta: "T", na: "N",
  ha: "H", ma: "M", ya: "Y", ra: "R", wa: "W",
  ga: "G", za: "Z", da: "D", ba: "B", pa: "P",
};

// Katakana uses blue palette
const GRADIENT_BASIC   = "linear-gradient(135deg, #64B5F6 0%, #1A4BC0 100%)";
const GRADIENT_DAKUTEN = "linear-gradient(135deg, #FFAB40 0%, #EF5350 100%)";
const GRADIENT_HANDAKU = "linear-gradient(135deg, #4FC3F7 0%, #7C4DFF 100%)";
const TABLE_GRID_TEMPLATE = "2.25rem repeat(5, minmax(4.8rem, 1fr))";

const ACCENT = "#1A4BC0";
const ACCENT_SOFT = "rgba(167,196,242,";

// ─── CharCell ─────────────────────────────────────────────────────────────────

function CharCell({
  char, romaji, gradient, onSelect, isSelected, delay,
}: {
  char: string | null; romaji: string | null; gradient: string;
  onSelect: (c: SelectedChar) => void; isSelected: boolean; delay: number;
}) {
  if (!char) {
    return (
      <div
        className="rounded-2xl border"
        style={{
          minHeight: "clamp(4.25rem, 10vw, 5.4rem)",
          background: "rgba(255,255,255,0.5)",
          borderColor: `${ACCENT_SOFT}0.08)`,
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)",
        }}
      />
    );
  }

  return (
    <motion.button
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.28, delay, ease: [0.22, 1, 0.36, 1] as const }}
      onClick={() =>
        onSelect({
          char,
          romaji: romaji ?? KATAKANA_ROMAJI[char] ?? "",
          strokeCount: KATAKANA_STROKE_COUNT[char] ?? 1,
          lesson: getKatakanaLessonByChar(char),
        })
      }
      aria-pressed={isSelected}
      className="group relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border px-2 py-3 text-center transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
      style={{
        minHeight: "clamp(4.25rem, 10vw, 5.4rem)",
        background: gradient,
        borderColor: isSelected ? `${ACCENT_SOFT}0.45)` : "rgba(255,255,255,0.42)",
        boxShadow: isSelected
          ? `0 0 0 3px rgba(255,255,255,0.95), 0 0 0 5px ${ACCENT_SOFT}0.22), 0 16px 30px rgba(0,0,0,0.16)`
          : "0 10px 22px rgba(26,75,192,0.18)",
        transform: isSelected ? "translateY(-2px)" : undefined,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 38%, rgba(255,255,255,0.08) 100%)",
        }}
      />
      <span
        className="char-display relative z-10 font-bold leading-none text-white"
        style={{ fontSize: "clamp(1.5rem, 2.8vw, 2rem)", textShadow: "0 2px 6px rgba(0,0,0,0.18)" }}
      >
        {char}
      </span>
      <span
        className="relative z-10 mt-1 font-mono font-medium uppercase leading-none text-white/88"
        style={{ fontSize: "clamp(0.62rem, 1vw, 0.76rem)", letterSpacing: "0.08em" }}
      >
        {romaji}
      </span>
    </motion.button>
  );
}

// ─── TableSection ─────────────────────────────────────────────────────────────

function TableSection({
  title, subtitle, rows, gradient, selected, onSelect, startDelay,
}: {
  title: string; subtitle: string; rows: TableRow[]; gradient: string;
  selected: SelectedChar | null; onSelect: (c: SelectedChar) => void; startDelay: number;
}) {
  return (
    <section
      className="rounded-[28px] border p-4 sm:p-5"
      style={{
        background: "rgba(255,255,255,0.72)",
        borderColor: `${ACCENT_SOFT}0.12)`,
        boxShadow: "0 20px 40px rgba(26,75,192,0.07)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2
            className="text-[0.78rem] font-bold uppercase tracking-[0.22em]"
            style={{ color: ACCENT }}
          >
            {title}
          </h2>
          <p className="mt-1 text-sm" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
            {subtitle}
          </p>
        </div>
        <div
          className="inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-[0.72rem] font-semibold"
          style={{
            background: `${ACCENT_SOFT}0.10)`,
            color: ACCENT,
            border: `1px solid ${ACCENT_SOFT}0.18)`,
          }}
        >
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: gradient, boxShadow: "0 0 0 4px rgba(255,255,255,0.45)" }}
          />
          Toca un carácter para abrir sus detalles
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="mx-auto min-w-[24rem] max-w-[44rem]">
          <div className="mb-2 grid gap-2" style={{ gridTemplateColumns: TABLE_GRID_TEMPLATE }}>
            <div />
            {VOWEL_HEADERS.map((vowel) => (
              <div
                key={vowel}
                className="flex items-center justify-center rounded-xl px-2 py-2 text-center text-[0.72rem] font-bold uppercase tracking-[0.18em]"
                style={{
                  color: ACCENT,
                  background: `${ACCENT_SOFT}0.08)`,
                  border: `1px solid ${ACCENT_SOFT}0.15)`,
                }}
              >
                {vowel}
              </div>
            ))}
          </div>

          <div className="space-y-2">
            {rows.map((row, rowIndex) => (
              <div
                key={row.label}
                className="grid items-stretch gap-2"
                style={{ gridTemplateColumns: TABLE_GRID_TEMPLATE }}
              >
                <div
                  className="flex items-center justify-center rounded-xl text-xs font-bold uppercase tracking-[0.18em]"
                  style={{
                    color: ACCENT,
                    background: `${ACCENT_SOFT}0.07)`,
                    border: `1px solid ${ACCENT_SOFT}0.10)`,
                  }}
                >
                  {ROW_LABELS[row.label] ?? row.label}
                </div>
                {row.cells.map((cell, cellIndex) => (
                  <CharCell
                    key={`${row.label}-${cellIndex}`}
                    char={cell.char}
                    romaji={cell.romaji}
                    gradient={gradient}
                    isSelected={selected?.char === cell.char}
                    onSelect={onSelect}
                    delay={startDelay + (rowIndex * 5 + cellIndex) * 0.014}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── DetailPanel ──────────────────────────────────────────────────────────────

function DetailPanel({ selected, onClose }: { selected: SelectedChar | null; onClose: () => void }) {
  if (!selected) {
    return (
      <div
        className="sticky top-6 rounded-[28px] border p-6"
        style={{
          background: "rgba(255,255,255,0.82)",
          borderColor: `${ACCENT_SOFT}0.12)`,
          boxShadow: "0 20px 40px rgba(26,75,192,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          className="mb-4 rounded-2xl p-4"
          style={{
            background: `linear-gradient(135deg, ${ACCENT_SOFT}0.10) 0%, ${ACCENT_SOFT}0.06) 100%)`,
            border: `1px solid ${ACCENT_SOFT}0.12)`,
          }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
            Panel de detalle
          </p>
          <h3 className="mt-2 text-lg font-semibold" style={{ color: "var(--ink)" }}>
            Selecciona un carácter
          </h3>
          <p className="mt-2 text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.8 }}>
            Aquí podrás ver la lectura, cantidad de trazos y accesos rápidos para practicar o revisar vocabulario.
          </p>
        </div>
        <div className="space-y-3 text-sm" style={{ color: "var(--ink-soft)" }}>
          {["✏ Práctica directa desde cada carácter", "册 Acceso rápido al vocabulario relacionado"].map((t) => (
            <div
              key={t}
              className="rounded-2xl border p-3"
              style={{ borderColor: `${ACCENT_SOFT}0.10)`, background: "rgba(255,255,255,0.66)" }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selected.char}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] as const }}
        className="sticky top-6 rounded-[28px] border p-6"
        style={{
          background: "rgba(255,255,255,0.88)",
          borderColor: `${ACCENT_SOFT}0.12)`,
          boxShadow: "0 20px 40px rgba(26,75,192,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-lg opacity-30 transition-opacity hover:opacity-70"
          aria-label="Cerrar"
        >
          ✕
        </button>

        <div
          className="mb-5 rounded-[24px] p-5 text-center"
          style={{
            background: `linear-gradient(135deg, ${ACCENT_SOFT}0.12) 0%, ${ACCENT_SOFT}0.06) 100%)`,
            border: `1px solid ${ACCENT_SOFT}0.12)`,
          }}
        >
          <div
            className="char-display font-bold leading-none"
            style={{
              fontSize: "5rem",
              background: GRADIENT_BASIC,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {selected.char}
          </div>
          <div
            className="mt-2 font-mono text-lg font-semibold uppercase tracking-[0.16em]"
            style={{ color: ACCENT }}
          >
            {selected.romaji}
          </div>
        </div>

        <div
          className="mb-4 rounded-2xl p-4"
          style={{ background: `${ACCENT_SOFT}0.06)`, border: `1px solid ${ACCENT_SOFT}0.15)` }}
        >
          <div className="mb-2 text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
            Trazos
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex gap-1">
              {Array.from({ length: selected.strokeCount }).map((_, i) => (
                <div key={i} className="h-6 w-1.5 rounded-full" style={{ background: GRADIENT_BASIC }} />
              ))}
            </div>
            <span className="text-sm font-semibold" style={{ color: "var(--ink)" }}>
              {selected.strokeCount} {selected.strokeCount === 1 ? "trazo" : "trazos"}
            </span>
          </div>
        </div>

        {selected.lesson && (
          <div
            className="mb-4 rounded-2xl p-4"
            style={{ border: `1px solid ${ACCENT_SOFT}0.10)`, background: "rgba(255,255,255,0.72)" }}
          >
            <div className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
              Lección relacionada
            </div>
            <p className="mt-2 text-sm font-semibold" style={{ color: "var(--ink)" }}>
              {selected.lesson.lesson}
            </p>
            <p className="mt-1 text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
              {selected.lesson.vocabulary[0]?.word} — {selected.lesson.vocabulary[0]?.meaning}
            </p>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <Link
            href={`/katakana/practica/${encodeURIComponent(selected.char)}`}
            className="flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
            style={{ background: GRADIENT_BASIC, boxShadow: "0 14px 28px rgba(26,75,192,0.22)" }}
          >
            ✏ Practicar escritura
          </Link>
          {selected.lesson && (
            <Link
              href={`/katakana/vocabulario?leccion=${selected.lesson.id}`}
              className="flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-white"
              style={{
                border: `1px solid ${ACCENT_SOFT}0.12)`,
                color: "var(--ink)",
                background: "rgba(255,255,255,0.72)",
              }}
            >
              册 Ver vocabulario
            </Link>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function KatakanaTablaPage() {
  const [selected, setSelected] = useState<SelectedChar | null>(null);

  return (
    <main className="relative min-h-screen" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10">
        <Link
          href="/katakana"
          className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
          style={{ color: ACCENT }}
        >
          ← Katakana
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-8 mt-5 rounded-[32px] border px-5 py-6 sm:px-7"
          style={{
            background: "rgba(255,255,255,0.7)",
            borderColor: `${ACCENT_SOFT}0.12)`,
            boxShadow: "0 18px 40px rgba(26,75,192,0.06)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
            style={{
              color: ACCENT,
              background: `${ACCENT_SOFT}0.08)`,
              border: `1px solid ${ACCENT_SOFT}0.15)`,
            }}
          >
            五十音図 · Tabla interactiva
          </div>

          <h1
            className="char-display text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight"
            style={{ color: "var(--ink)" }}
          >
            Tabla de Katakana
            <span
              className="ml-2 block text-[clamp(1rem,2vw,1.65rem)] font-medium sm:ml-3 sm:inline"
              style={{ color: ACCENT }}
            >
              カタカナ
            </span>
          </h1>

          <p
            className="mt-3 max-w-3xl text-sm leading-6 sm:text-[0.95rem]"
            style={{ color: "var(--ink-soft)", opacity: 0.8 }}
          >
            Tabla completa del katakana con caracteres básicos, sonidos sonoros y semi-sonoros.
            Haz clic en cualquier carácter para ver sus detalles y practicar su escritura.
          </p>
        </motion.div>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="space-y-5">
            <TableSection
              title="Caracteres básicos — 清音"
              subtitle="Base principal del silabario katakana, organizada por filas y vocales."
              rows={KATAKANA_TABLE_ROWS}
              gradient={GRADIENT_BASIC}
              selected={selected}
              onSelect={setSelected}
              startDelay={0.04}
            />
            <TableSection
              title="Sonidos sonoros — 濁音"
              subtitle="Variantes con dakuten: G, Z, D, B."
              rows={KATAKANA_DAKUTEN_ROWS}
              gradient={GRADIENT_DAKUTEN}
              selected={selected}
              onSelect={setSelected}
              startDelay={0.18}
            />
            <TableSection
              title="Sonidos semi-sonoros — 半濁音"
              subtitle="Bloque handakuten: Pa, Pi, Pu, Pe, Po."
              rows={KATAKANA_HANDAKUTEN_ROWS}
              gradient={GRADIENT_HANDAKU}
              selected={selected}
              onSelect={setSelected}
              startDelay={0.3}
            />
          </div>

          <div className="hidden lg:block">
            <DetailPanel selected={selected} onClose={() => setSelected(null)} />
          </div>
        </div>

        {/* Mobile bottom sheet */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
              className="fixed bottom-0 left-0 right-0 z-50 rounded-t-[28px] border p-5 lg:hidden"
              style={{
                background: "rgba(255,255,255,0.96)",
                boxShadow: "0 -12px 44px rgba(0,0,0,0.14)",
                borderColor: `${ACCENT_SOFT}0.12)`,
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-gray-200" />
              <div className="flex items-center gap-4">
                <div
                  className="char-display text-5xl font-bold"
                  style={{
                    background: GRADIENT_BASIC,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {selected.char}
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-lg font-semibold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
                    {selected.romaji}
                  </p>
                  <p className="text-sm" style={{ color: "var(--ink-soft)" }}>
                    {selected.strokeCount} {selected.strokeCount === 1 ? "trazo" : "trazos"}
                  </p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="ml-auto rounded-xl px-3 py-2 text-sm"
                  style={{ border: `1px solid ${ACCENT_SOFT}0.12)`, color: "var(--ink-soft)" }}
                >
                  ✕
                </button>
              </div>
              <div className="mt-4 flex gap-2">
                <Link
                  href={`/katakana/practica/${encodeURIComponent(selected.char)}`}
                  className="flex-1 rounded-2xl px-4 py-3 text-center text-sm font-semibold text-white"
                  style={{ background: GRADIENT_BASIC }}
                >
                  Practicar ✏
                </Link>
                {selected.lesson && (
                  <Link
                    href={`/katakana/vocabulario?leccion=${selected.lesson.id}`}
                    className="flex-1 rounded-2xl px-4 py-3 text-center text-sm font-medium"
                    style={{
                      background: "rgba(255,255,255,0.8)",
                      color: "var(--ink)",
                      border: `1px solid ${ACCENT_SOFT}0.12)`,
                    }}
                  >
                    Vocabulario 册
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}