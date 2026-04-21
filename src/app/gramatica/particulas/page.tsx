//src/app/gramatica/particulas/page.tsx

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { PARTICLES } from "@/data/grammar/particles";
import type { ParticleEntry } from "@/types/grammar";
import { RubyText } from "@/app/components/ui/Ruby";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";

const ACCENT = "#E65100";
const ACCENT_SOFT = "rgba(255,171,64,";

// ─── Particle Card (list view) ────────────────────────────────────────────────
function isMultiCharSymbol(symbol: string) {
  return symbol.length > 1;
}
function ParticleCard({
  entry,
  isSelected,
  onClick,
}: {
  entry: ParticleEntry;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-2xl border p-4 text-left transition-all duration-200 hover:-translate-y-0.5"
      style={{
        background: isSelected ? `${ACCENT_SOFT}0.08)` : "rgba(255,255,255,0.85)",
        border: `2px solid ${isSelected ? ACCENT : "var(--border)"}`,
        boxShadow: isSelected ? `0 8px 24px ${ACCENT_SOFT}0.15)` : "var(--shadow-soft)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className="absolute -right-4 -top-4 h-16 w-16 rounded-full blur-xl opacity-30"
        style={{ background: "#FFAB40" }}
      />
      <div className="flex items-center gap-4">
        <div
          className={`flex shrink-0 items-center justify-center rounded-xl font-bold text-white char-display leading-none whitespace-nowrap ${
            isMultiCharSymbol(entry.symbol) ? "h-12 min-w-[3.25rem] px-2 text-lg" : "h-12 w-12 text-2xl"
          }`}
          style={{
            background: `linear-gradient(135deg, #FFAB40, ${ACCENT})`,
            boxShadow: `0 6px 16px ${ACCENT_SOFT}0.30)`,
            letterSpacing: isMultiCharSymbol(entry.symbol) ? "0" : undefined,
          }}
        >
          {entry.symbol}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-bold text-base" style={{ color: "var(--ink)" }}>{entry.particle}</span>
            <span className="font-mono text-xs" style={{ color: ACCENT }}>{entry.romaji}</span>
          </div>
          <p className="mt-0.5 text-xs leading-relaxed truncate" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>
            {entry.summary}
          </p>
          <p className="mt-1 text-xs" style={{ color: ACCENT, opacity: 0.8 }}>
            {entry.uses.length} uso{entry.uses.length > 1 ? "s" : ""}
          </p>
        </div>
        <span
          className="shrink-0 text-sm transition-all duration-200"
          style={{ color: ACCENT, opacity: isSelected ? 1 : 0.3, transform: isSelected ? "rotate(90deg)" : "none" }}
        >
          ▾
        </span>
      </div>
    </motion.button>
  );
}

// ─── Particle Detail ──────────────────────────────────────────────────────────

function ParticleDetail({ entry }: { entry: ParticleEntry }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-[24px] border p-5"
      style={{
        background: "rgba(255,255,255,0.88)",
        border: `1px solid ${ACCENT_SOFT}0.15)`,
        boxShadow: `0 16px 40px ${ACCENT_SOFT}0.08)`,
      }}
    >
      {/* Header */}
      <div className="mb-5 flex items-center gap-4">
        <div
          className={`flex shrink-0 items-center justify-center rounded-2xl font-bold text-white char-display leading-none whitespace-nowrap ${
            isMultiCharSymbol(entry.symbol) ? "h-16 min-w-[4.75rem] px-3 text-3xl" : "h-16 w-16 text-4xl"
          }`}
          style={{
            background: `linear-gradient(135deg, #FFAB40, ${ACCENT})`,
            boxShadow: `0 8px 20px ${ACCENT_SOFT}0.35)`,
            letterSpacing: isMultiCharSymbol(entry.symbol) ? "0" : undefined,
          }}
        >
          {entry.symbol}
        </div>
        <div>
          <h2 className="text-xl font-bold" style={{ color: "var(--ink)" }}>{entry.particle}</h2>
          <p className="text-sm mt-1 leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.75 }}>
            {entry.summary}
          </p>
        </div>
      </div>

      {/* Uses */}
      <div className="space-y-5">
        {entry.uses.map((use, i) => (
          <div key={i}>
            <div
              className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]"
              style={{ color: ACCENT, background: `${ACCENT_SOFT}0.08)`, border: `1px solid ${ACCENT_SOFT}0.15)` }}
            >
              {use.title}
            </div>

            <div className="space-y-3">
              {use.examples.map((ex, j) => (
                <div
                  key={j}
                  className="rounded-xl p-4"
                  style={{
                    background: `${ACCENT_SOFT}0.04)`,
                    border: `1px solid ${ACCENT_SOFT}0.10)`,
                  }}
                >
                  <RubyText
                    segments={ex.segments}
                    className="char-display text-lg leading-loose"
                    style={{ color: "var(--ink)" }}
                  />
                  <p className="mt-1.5 text-sm italic" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>
                    {ex.translation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ParticulasPage() {
  const [selected, setSelected] = useState<ParticleEntry | null>(null);

  const handleSelect = (entry: ParticleEntry) => {
    setSelected(selected?.particle === entry.particle ? null : entry);
  };

  return (
    <main className="relative min-h-screen" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />

      <div className="relative z-10 mx-auto max-w-5xl px-4 pb-24 pt-10 sm:px-6">

        <Link href="/gramatica" className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70" style={{ color: ACCENT }}>
          ← Gramática
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-8 mt-5 rounded-[28px] border px-5 py-5"
          style={{
            background: "rgba(255,255,255,0.72)",
            border: `1px solid ${ACCENT_SOFT}0.15)`,
            boxShadow: `0 16px 36px ${ACCENT_SOFT}0.06)`,
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            className="mb-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
            style={{ color: ACCENT, background: `${ACCENT_SOFT}0.08)`, border: `1px solid ${ACCENT_SOFT}0.15)` }}
          >
            助詞 · Partículas
          </div>
          <h1 className="char-display text-2xl font-bold" style={{ color: "var(--ink)" }}>
            Partículas en Japonés
          </h1>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.75 }}>
            Las partículas son el corazón de la gramática japonesa. Indican la función de cada
            palabra en la oración — sujeto, objeto, lugar, tiempo, medio y más.
          </p>
          <div className="mt-4">
            <Link
              href="/gramatica/particulas/quiz"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-bold text-white transition-all hover:brightness-110"
              style={{ background: "linear-gradient(135deg, #FFAB40, #E65100)" }}
            >
              ◎ Practicar con Quiz de Partículas
            </Link>
          </div>
        </motion.div>

        {/* Layout — list + detail panel */}
        <div className="flex gap-5 items-start">

          {/* Particle list */}
          <div className={`space-y-3 ${selected ? "hidden lg:block lg:w-72 lg:shrink-0" : "w-full"}`}>
            {PARTICLES.map((entry, i) => (
              <motion.div
                key={entry.particle}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <ParticleCard
                  entry={entry}
                  isSelected={selected?.particle === entry.particle}
                  onClick={() => handleSelect(entry)}
                />
              </motion.div>
            ))}
          </div>

          {/* Detail panel */}
          <AnimatePresence>
            {selected && (
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.3 }}
                className="flex-1 min-w-0"
              >
                {/* Back button */}
                <button
                  onClick={() => setSelected(null)}
                  className="mb-4 inline-flex min-w-[220px] items-center justify-center gap-2 rounded-full border px-6 py-2.5 text-sm font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
                  style={{
                    color: ACCENT,
                    background: "rgba(255,255,255,0.82)",
                    borderColor: `${ACCENT_SOFT}0.16)`,
                    boxShadow: `0 8px 20px ${ACCENT_SOFT}0.10)`,
                    backdropFilter: "blur(8px)",
                  }}
                  aria-label="Volver a todas las partículas"
                >
                  <span aria-hidden="true">←</span>
                  <span>Todas las partículas</span>
                </button>

                <ParticleDetail entry={selected} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}