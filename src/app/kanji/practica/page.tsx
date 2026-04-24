// src/app/kanji/practica/page.tsx

"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  AVAILABLE_LEVELS,
  KANJI_LIST,
  LEVEL_META,
  getKanjiByLevel,
  getKanjiSvgFile,
  getPrimaryKanjiExample,
  type KanjiEntry,
} from "@/data/kanji";
import { RubyText } from "@/app/components/ui/Ruby";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";

const ACCENT = "#2E7D32";
const ACCENT_SOFT = "rgba(46,125,50,";
const GRADIENT = "linear-gradient(135deg, #A5D6A7, #2E7D32)";

function getWritableKanji(): KanjiEntry[] {
  return KANJI_LIST.filter((entry) => entry.hasSvg && Boolean(getKanjiSvgFile(entry.char, entry.level)));
}

function getLevelGradient(level: number): string {
  const meta = LEVEL_META[level];
  if (!meta) return GRADIENT;
  return `linear-gradient(135deg, ${meta.color} 0%, ${meta.accent} 100%)`;
}

function KanjiPracticeCard({
  entry,
  selected,
  onSelect,
}: {
  entry: KanjiEntry;
  selected: boolean;
  onSelect: (entry: KanjiEntry) => void;
}) {
  const href = `/kanji/practica/${encodeURIComponent(entry.char)}`;
  const gradient = getLevelGradient(entry.level);

  return (
    <div
      className="overflow-hidden rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
      style={{
        borderColor: selected ? "rgba(46,125,50,0.34)" : "rgba(148,163,184,0.18)",
        boxShadow: selected ? "0 0 0 3px rgba(46,125,50,0.12), 0 14px 28px rgba(0,0,0,0.10)" : "0 8px 18px rgba(46,125,50,0.10)",
      }}
    >
      <button
        type="button"
        onClick={() => onSelect(entry)}
        className="flex min-h-[5.2rem] w-full flex-col items-center justify-center px-2 py-3 text-center"
        style={{ background: gradient }}
      >
        <span className="char-display text-3xl font-bold leading-none text-white" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.18)" }}>
          {entry.char}
        </span>
        <span className="mt-1 text-[0.65rem] font-semibold text-white/80">
          {entry.strokeCount}画 · Nivel {entry.level}
        </span>
      </button>
      <Link
        href={href}
        className="block bg-white/90 px-2 py-2 text-center text-[0.68rem] font-bold transition-opacity hover:opacity-75"
        style={{ color: ACCENT }}
      >
        Practicar →
      </Link>
    </div>
  );
}

function DetailPanel({ entry }: { entry: KanjiEntry | null }) {
  if (!entry) {
    return (
      <aside
        className="rounded-[30px] border p-6"
        style={{ background: "rgba(255,255,255,0.82)", borderColor: `${ACCENT_SOFT}0.10)`, boxShadow: "0 20px 42px rgba(46,125,50,0.08)" }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
          Detalle
        </p>
        <h2 className="mt-2 text-xl font-bold" style={{ color: "var(--ink)" }}>
          Selecciona un kanji
        </h2>
        <p className="mt-2 text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.75 }}>
          Verás lectura, significado y ejemplo antes de entrar al lienzo de escritura.
        </p>
      </aside>
    );
  }

  const example = getPrimaryKanjiExample(entry);

  return (
    <aside
      className="rounded-[30px] border p-6 lg:sticky lg:top-24"
      style={{ background: "rgba(255,255,255,0.86)", borderColor: `${ACCENT_SOFT}0.10)`, boxShadow: "0 20px 42px rgba(46,125,50,0.08)", backdropFilter: "blur(12px)" }}
    >
      <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
        Kanji seleccionado
      </p>

      <div className="mt-4 flex items-center gap-4">
        <div
          className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[26px] text-white"
          style={{ background: getLevelGradient(entry.level), boxShadow: `0 14px 30px ${ACCENT_SOFT}0.22)` }}
        >
          <span className="char-display text-5xl font-bold leading-none">{entry.char}</span>
        </div>
        <div>
          <h2 className="text-xl font-bold" style={{ color: "var(--ink)" }}>
            {entry.meaning}
          </h2>
          <p className="mt-1 text-sm" style={{ color: "var(--ink-soft)", opacity: 0.72 }}>
            Nivel {entry.level} · {entry.strokeCount} trazos
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-3">
        {entry.on.length > 0 && (
          <div className="rounded-2xl p-4" style={{ background: `${ACCENT_SOFT}0.06)`, border: `1px solid ${ACCENT_SOFT}0.10)` }}>
            <p className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: ACCENT }}>
              On-yomi 音読み
            </p>
            <p className="char-display mt-1 text-lg font-semibold" style={{ color: "var(--ink)" }}>
              {entry.on.join("　")}
            </p>
          </div>
        )}

        {entry.kun.length > 0 && (
          <div className="rounded-2xl p-4" style={{ background: `${ACCENT_SOFT}0.06)`, border: `1px solid ${ACCENT_SOFT}0.10)` }}>
            <p className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: ACCENT }}>
              Kun-yomi 訓読み
            </p>
            <p className="char-display mt-1 text-lg font-semibold" style={{ color: "var(--ink)" }}>
              {entry.kun.join("　")}
            </p>
          </div>
        )}
      </div>

      {example && (
        <div className="mt-4 rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.72)", border: `1px solid ${ACCENT_SOFT}0.08)` }}>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em]" style={{ color: ACCENT }}>
            Ejemplo
          </p>
          <RubyText
            segments={example.segments}
            className="char-display text-base leading-8"
            style={{ color: "var(--ink)" }}
            rtStyle={{ fontSize: "0.48em" }}
          />
          {example.translation && (
            <p className="mt-2 text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
              {example.translation}
            </p>
          )}
        </div>
      )}

      <Link
        href={`/kanji/practica/${encodeURIComponent(entry.char)}`}
        className="mt-5 flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold text-white transition-all duration-200 hover:brightness-110"
        style={{ background: getLevelGradient(entry.level), boxShadow: `0 14px 28px ${ACCENT_SOFT}0.20)` }}
      >
        Practicar escritura →
      </Link>
    </aside>
  );
}

export default function KanjiPracticeIndexPage() {
  const writableKanji = useMemo(() => getWritableKanji(), []);
  const writableLevels = useMemo(
    () => [...new Set(writableKanji.map((entry) => entry.level))].sort((a, b) => a - b),
    [writableKanji]
  );
  const [selectedLevel, setSelectedLevel] = useState<number>(writableLevels[0] ?? 1);
  const [selectedEntry, setSelectedEntry] = useState<KanjiEntry | null>(writableKanji[0] ?? null);

  const entriesByLevel = getKanjiByLevel(selectedLevel).filter((entry) => entry.hasSvg && getKanjiSvgFile(entry.char, entry.level));
  const contentCount = AVAILABLE_LEVELS.reduce((sum, level) => sum + getKanjiByLevel(level).filter((entry) => entry.meaning).length, 0);

  return (
    <main className="relative min-h-screen" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />

      <div className="relative z-10 flex w-full justify-center">
        <div className="w-full max-w-7xl px-4 pb-32 pt-8 sm:px-6 sm:pt-10">
          <Link href="/kanji" className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70" style={{ color: ACCENT }}>
            ← Kanji
          </Link>

          <motion.header
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mt-6 rounded-[34px] border px-5 py-7 text-center sm:px-8"
            style={{ background: "rgba(255,255,255,0.74)", borderColor: `${ACCENT_SOFT}0.10)`, boxShadow: "0 20px 46px rgba(46,125,50,0.08)", backdropFilter: "blur(12px)" }}
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT, background: `${ACCENT_SOFT}0.08)`, border: `1px solid ${ACCENT_SOFT}0.15)` }}>
              書き取り · Práctica con SVG
            </div>
            <h1 className="char-display text-[clamp(2.3rem,6vw,4.6rem)] font-bold leading-none" style={{ color: "var(--ink)" }}>
              Práctica de escritura
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 sm:text-base" style={{ color: "var(--ink-soft)", opacity: 0.76 }}>
              Elige un kanji con SVG disponible y entra al lienzo de dibujo. Por ahora la escritura cubre niveles 1 y 2; los niveles 3–7 quedan activos para tabla, vocabulario y quiz.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {[
                { label: "Con SVG", value: `${writableKanji.length}` },
                { label: "Niveles de escritura", value: writableLevels.join("–") || "—" },
                { label: "Contenido total 1–7", value: `${contentCount}` },
              ].map((stat) => (
                <div key={stat.label} className="rounded-full px-4 py-1.5 text-sm font-medium" style={{ background: "rgba(165,214,167,0.18)", border: "1px solid rgba(165,214,167,0.45)", color: ACCENT }}>
                  <span className="font-bold">{stat.value}</span>
                  <span className="ml-1.5 opacity-75">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.header>

          <div className="mt-7 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
            <section className="space-y-5">
              <div className="rounded-[28px] border p-4 sm:p-5" style={{ background: "rgba(255,255,255,0.78)", borderColor: `${ACCENT_SOFT}0.10)`, boxShadow: "0 18px 40px rgba(46,125,50,0.06)", backdropFilter: "blur(10px)" }}>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
                  Filtrar por nivel
                </p>
                <div className="flex flex-wrap gap-2">
                  {writableLevels.map((level) => {
                    const meta = LEVEL_META[level];
                    const active = selectedLevel === level;
                    const count = getKanjiByLevel(level).filter((entry) => entry.hasSvg && getKanjiSvgFile(entry.char, entry.level)).length;

                    return (
                      <button
                        key={level}
                        type="button"
                        onClick={() => {
                          setSelectedLevel(level);
                          const first = getKanjiByLevel(level).find((entry) => entry.hasSvg && getKanjiSvgFile(entry.char, entry.level));
                          if (first) setSelectedEntry(first);
                        }}
                        className="rounded-2xl border px-4 py-3 text-left transition-all duration-200 hover:-translate-y-0.5"
                        style={{
                          background: active ? `${meta.color}33` : "rgba(255,255,255,0.72)",
                          border: `1px solid ${active ? `${meta.color}88` : "rgba(148,163,184,0.20)"}`,
                          color: active ? meta.accent : "var(--ink)",
                        }}
                      >
                        <span className="char-display block text-lg font-bold">Nivel {level}</span>
                        <span className="text-xs opacity-75">{count} kanji con SVG</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <motion.div
                key={selectedLevel}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28 }}
                className="rounded-[30px] border p-4 sm:p-5"
                style={{ background: "rgba(255,255,255,0.78)", borderColor: `${ACCENT_SOFT}0.10)`, boxShadow: "0 18px 40px rgba(46,125,50,0.06)", backdropFilter: "blur(10px)" }}
              >
                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
                      Nivel {selectedLevel}
                    </p>
                    <h2 className="mt-1 text-xl font-bold" style={{ color: "var(--ink)" }}>
                      Kanji disponibles para escritura
                    </h2>
                  </div>
                  <p className="text-sm" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>
                    Toca una tarjeta para ver detalle, o entra directo a practicar.
                  </p>
                </div>

                <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(5.2rem, 1fr))" }}>
                  {entriesByLevel.map((entry) => (
                    <KanjiPracticeCard
                      key={entry.char}
                      entry={entry}
                      selected={selectedEntry?.char === entry.char}
                      onSelect={setSelectedEntry}
                    />
                  ))}
                </div>
              </motion.div>
            </section>

            <DetailPanel entry={selectedEntry} />
          </div>
        </div>
      </div>
    </main>
  );
}
