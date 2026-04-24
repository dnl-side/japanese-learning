// src/app/kanji/tabla/page.tsx

"use client";

import { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { KANJI_LIST, LEVEL_META, getKanjiByLevel, type KanjiEntry, getPrimaryKanjiExample  } from "@/data/kanji";
import { RubyText } from "@/app/components/ui/Ruby";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";

const ACCENT = "#2E7D32";
const ACCENT_SOFT = "rgba(46,125,50,";
const GRADIENT_L1 = "linear-gradient(135deg, #A5D6A7 0%, #2E7D32 100%)";
const GRADIENT_L2 = "linear-gradient(135deg, #C8E6C9 0%, #388E3C 100%)";

const MOBILE_BOTTOM_NAV_OFFSET = "calc(5.5rem + env(safe-area-inset-bottom, 0px))";
const DESKTOP_STICKY_TOP = "7rem";
const MOBILE_SELECTED_SPACER = "8rem";

function getLevelGradient(level: number) {
  if (level === 1) return GRADIENT_L1;
  if (level === 2) return GRADIENT_L2;
  return `linear-gradient(135deg, ${LEVEL_META[level]?.color ?? "#ccc"} 0%, ${LEVEL_META[level]?.accent ?? "#666"} 100%)`;
}

// ─── KanjiCell ────────────────────────────────────────────────────────────────

function KanjiCell({
  entry, gradient, isSelected, onSelect, delay,
}: {
  entry: KanjiEntry; gradient: string; isSelected: boolean;
  onSelect: (e: KanjiEntry) => void; delay: number;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.28, delay, ease: [0.22, 1, 0.36, 1] as const }}
      onClick={() => onSelect(entry)}
      aria-pressed={isSelected}
      className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border px-1 py-3 text-center transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
      style={{
        minHeight: "clamp(4rem, 10vw, 5rem)",
        background: gradient,
        borderColor: isSelected ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.42)",
        boxShadow: isSelected
          ? "0 0 0 3px rgba(255,255,255,0.95), 0 0 0 5px rgba(46,125,50,0.22), 0 16px 30px rgba(0,0,0,0.16)"
          : "0 8px 20px rgba(46,125,50,0.18)",
        transform: isSelected ? "translateY(-2px)" : undefined,
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-80"
        style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 38%, rgba(255,255,255,0.08) 100%)" }} />
      <span className="char-display relative z-10 font-bold leading-none text-white"
        style={{ fontSize: "clamp(1.4rem, 2.6vw, 1.9rem)", textShadow: "0 2px 6px rgba(0,0,0,0.18)" }}>
        {entry.char}
      </span>
      {entry.strokeCount > 0 && (
        <span className="relative z-10 mt-0.5 text-[0.6rem] font-semibold text-white/75">
          {entry.strokeCount}画
        </span>
      )}
    </motion.button>
  );
}

// ─── Level Section ────────────────────────────────────────────────────────────

function LevelSection({
  level, selected, onSelect,
}: {
  level: number; selected: KanjiEntry | null; onSelect: (e: KanjiEntry) => void;
}) {
  const [expanded, setExpanded] = useState(level <= 2);
  const entries = getKanjiByLevel(level);
  const meta = LEVEL_META[level];
  const gradient = getLevelGradient(level);
  const hasWriting = entries.some((entry) => entry.hasSvg);

  return (
    <section className="rounded-[28px] border"
      style={{ background: "rgba(255,255,255,0.72)", borderColor: `${ACCENT_SOFT}0.10)`, boxShadow: "0 20px 40px rgba(46,125,50,0.06)", backdropFilter: "blur(10px)" }}>

      {/* Section header */}
      <button
        onClick={() => setExpanded(e => !e)}
        className="flex w-full items-center justify-between px-5 py-4 sm:px-6"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-white"
            style={{ background: gradient }}>
            {level}
          </div>
          <div className="text-left">
            <h2 className="text-sm font-bold uppercase tracking-[0.18em]" style={{ color: meta.accent }}>
              {meta.label}
            </h2>
            <p className="text-xs" style={{ color: "var(--ink-soft)", opacity: 0.65 }}>
              {entries.length} kanji{hasWriting ? " · Con práctica de escritura" : " · Solo lectura, vocabulario y quiz"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.7rem] font-semibold"
            style={{ background: `${meta.color}33`, color: meta.accent, border: `1px solid ${meta.color}55` }}>
            <span className="h-2 w-2 rounded-full" style={{ background: gradient }} />
            Toca para ver detalle
          </div>
          <span className="text-sm transition-transform duration-200" style={{
            color: meta.accent, transform: expanded ? "rotate(180deg)" : "none", display: "block"
          }}>▾</span>
        </div>
      </button>

      {/* Grid */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-5 sm:px-6">
              <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(4.5rem, 1fr))" }}>
                {entries.map((entry, i) => (
                  <KanjiCell
                    key={entry.char}
                    entry={entry}
                    gradient={gradient}
                    isSelected={selected?.char === entry.char}
                    onSelect={onSelect}
                    delay={i * 0.008}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ─── Detail Panel ─────────────────────────────────────────────────────────────

function DetailPanel({ selected, onClose }: { selected: KanjiEntry | null; onClose: () => void }) {
  if (!selected) {
    return (
      <div className="rounded-[28px] border p-6"
        style={{ background: "rgba(255,255,255,0.82)", borderColor: `${ACCENT_SOFT}0.10)`, boxShadow: "0 20px 40px rgba(46,125,50,0.08)", backdropFilter: "blur(10px)" }}>
        <div className="mb-4 rounded-2xl p-4"
          style={{ background: "rgba(165,214,167,0.12)", border: `1px solid ${ACCENT_SOFT}0.10)` }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>Panel de detalle</p>
          <h3 className="mt-2 text-lg font-semibold" style={{ color: "var(--ink)" }}>Selecciona un kanji</h3>
          <p className="mt-2 text-sm leading-6" style={{ color: "var(--ink-soft)", opacity: 0.8 }}>
            Aquí verás las lecturas on/kun, significado, trazos, ejemplos y acceso a práctica cuando haya SVG disponible.
          </p>
        </div>
        <div className="space-y-3 text-sm" style={{ color: "var(--ink-soft)" }}>
          {["✏ Práctica directa de escritura", "册 Lecturas on-yomi y kun-yomi"].map(t => (
            <div key={t} className="rounded-2xl border p-3"
              style={{ borderColor: `${ACCENT_SOFT}0.08)`, background: "rgba(255,255,255,0.66)" }}>
              {t}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const meta = LEVEL_META[selected.level];
  const gradient = getLevelGradient(selected.level);

  return (
    <AnimatePresence mode="wait">
      <motion.div key={selected.char}
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] as const }}
        className="sticky top-6 rounded-[28px] border p-6"
        style={{ background: "rgba(255,255,255,0.88)", borderColor: `${ACCENT_SOFT}0.10)`, boxShadow: "0 20px 40px rgba(46,125,50,0.08)", backdropFilter: "blur(10px)" }}
      >
        <button onClick={onClose} className="absolute right-4 top-4 text-lg opacity-30 transition-opacity hover:opacity-70" aria-label="Cerrar">✕</button>

        {/* Big char */}
        <div className="mb-5 rounded-[24px] p-5 text-center"
          style={{ background: "rgba(165,214,167,0.10)", border: `1px solid ${ACCENT_SOFT}0.10)` }}>
          <div className="char-display font-bold leading-none"
            style={{ fontSize: "5rem", background: gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {selected.char}
          </div>
          {selected.meaning && (
            <p className="mt-2 text-sm font-semibold" style={{ color: ACCENT }}>{selected.meaning}</p>
          )}
          <p className="mt-1 text-xs" style={{ color: "var(--ink-soft)", opacity: 0.6 }}>
            {meta.label}
          </p>
        </div>

        {/* Readings */}
        {(selected.on.length > 0 || selected.kun.length > 0) && (
          <div className="mb-4 space-y-2">
            {selected.on.length > 0 && (
              <div className="rounded-2xl p-3"
                style={{ background: "rgba(165,214,167,0.08)", border: `1px solid ${ACCENT_SOFT}0.12)` }}>
                <p className="text-xs font-bold uppercase tracking-[0.16em] mb-1" style={{ color: ACCENT }}>On-yomi 音読み</p>
                <p className="char-display text-lg font-semibold" style={{ color: "var(--ink)" }}>
                  {selected.on.join("　")}
                </p>
              </div>
            )}
            {selected.kun.length > 0 && (
              <div className="rounded-2xl p-3"
                style={{ background: "rgba(165,214,167,0.06)", border: `1px solid ${ACCENT_SOFT}0.10)` }}>
                <p className="text-xs font-bold uppercase tracking-[0.16em] mb-1" style={{ color: ACCENT }}>Kun-yomi 訓読み</p>
                <p className="char-display text-lg font-semibold" style={{ color: "var(--ink)" }}>
                  {selected.kun.join("　")}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Stroke count */}
        {selected.strokeCount > 0 && (
          <div className="mb-4 rounded-2xl p-4"
            style={{ background: "rgba(165,214,167,0.06)", border: `1px solid rgba(165,214,167,0.22)` }}>
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>Trazos 画数</div>
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1">
                {Array.from({ length: Math.min(selected.strokeCount, 20) }).map((_, i) => (
                  <div key={i} className="h-6 w-1.5 rounded-full" style={{ background: gradient }} />
                ))}
                {selected.strokeCount > 20 && (
                  <span className="text-xs self-center" style={{ color: ACCENT }}>+{selected.strokeCount - 20}</span>
                )}
              </div>
              <span className="text-sm font-semibold shrink-0" style={{ color: "var(--ink)" }}>
                {selected.strokeCount} {selected.strokeCount === 1 ? "trazo" : "trazos"}
              </span>
            </div>
          </div>
        )}

        {/* Example */}
        {(() => {
          const primaryExample = getPrimaryKanjiExample(selected);

          if (!primaryExample) return null;

          return (
            <div
              className="mb-4 rounded-2xl p-3"
              style={{ background: "rgba(255,255,255,0.72)", border: `1px solid ${ACCENT_SOFT}0.08)` }}
            >
              <p
                className="mb-1 text-xs font-bold uppercase tracking-[0.16em]"
                style={{ color: ACCENT }}
              >
                Ejemplo
              </p>

              <RubyText
                segments={primaryExample.segments}
                className="char-display text-base"
                style={{ color: "var(--ink)" }}
              />

              {primaryExample.translation && (
                <p className="mt-2 text-sm" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
                  {primaryExample.translation}
                </p>
              )}
            </div>
          );
        })()}

        {/* Actions */}
        <div className="flex flex-col gap-2">
          {selected.hasSvg ? (
            <Link href={`/kanji/practica/${encodeURIComponent(selected.char)}`}
              className="flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
              style={{ background: gradient, boxShadow: "0 14px 28px rgba(46,125,50,0.22)" }}>
              ✏ Practicar escritura
            </Link>
          ) : (
            <div className="flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium opacity-50 cursor-not-allowed"
              style={{ border: `1px solid ${ACCENT_SOFT}0.15)`, color: "var(--ink-soft)" }}>
              ✏ Práctica no disponible (sin SVG)
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Inner Page ───────────────────────────────────────────────────────────────

function KanjiTablaInner() {
  const searchParams = useSearchParams();
  const nivelParam = searchParams.get("nivel");
  const [selected, setSelected] = useState<KanjiEntry | null>(null);

  return (
    <main className="relative min-h-screen" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-36 pt-8 sm:px-6 sm:pb-24 sm:pt-10">
        <Link href="/kanji" className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70" style={{ color: ACCENT }}>
          ← Kanji
        </Link>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
          className="mb-8 mt-5 rounded-[32px] border px-5 py-6 sm:px-7"
          style={{ background: "rgba(255,255,255,0.7)", borderColor: `${ACCENT_SOFT}0.10)`, boxShadow: "0 18px 40px rgba(46,125,50,0.06)", backdropFilter: "blur(10px)" }}>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
            style={{ color: ACCENT, background: "rgba(165,214,167,0.10)", border: `1px solid ${ACCENT_SOFT}0.12)` }}>
            漢字表 · Tabla interactiva
          </div>
          <h1 className="char-display text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight" style={{ color: "var(--ink)" }}>
            Tabla de Kanji
            <span className="ml-2 block text-[clamp(1rem,2vw,1.65rem)] font-medium sm:ml-3 sm:inline" style={{ color: ACCENT }}>漢字表</span>
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 sm:text-[0.95rem]" style={{ color: "var(--ink-soft)", opacity: 0.8 }}>
            Kanji organizados por nivel escolar. Niveles 1 y 2 tienen SVG para práctica de escritura.
            Haz clic en cualquier kanji para ver sus lecturas y significado.
          </p>
        </motion.div>

        {/* Main layout */}
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="space-y-5">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(level => (
              <LevelSection
                key={level}
                level={level}
                selected={selected}
                onSelect={setSelected}
              />
            ))}
          </div>

          <div className="hidden lg:block lg:self-start lg:sticky" style={{ top: DESKTOP_STICKY_TOP }}>
            <div className="max-h-[calc(100vh-8rem)] overflow-y-auto pr-1">
              <DetailPanel selected={selected} onClose={() => setSelected(null)} />
            </div>
          </div>
        </div>

        {selected && (
          <div
            className="lg:hidden"
            aria-hidden="true"
            style={{ height: MOBILE_SELECTED_SPACER }}
          />
        )}

        {/* Mobile bottom sheet */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
              className="fixed left-0 right-0 z-[60] rounded-t-[28px] border p-5 lg:hidden"
              style={{
                bottom: MOBILE_BOTTOM_NAV_OFFSET,
                background: "rgba(255,255,255,0.96)",
                boxShadow: "0 -12px 44px rgba(0,0,0,0.14)",
                borderColor: `${ACCENT_SOFT}0.10)`,
                backdropFilter: "blur(10px)",
                maxHeight: "min(68vh, calc(100dvh - 8rem))",
                overflowY: "auto",
                paddingBottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))",
              }}>
              <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-gray-200" />
              <div className="flex items-center gap-4">
                <div className="char-display text-5xl font-bold"
                  style={{ background: getLevelGradient(selected.level), WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {selected.char}
                </div>
                <div className="min-w-0 flex-1">
                  {selected.meaning && (
                    <p className="font-semibold text-base" style={{ color: "var(--ink)" }}>{selected.meaning}</p>
                  )}
                  {selected.on.length > 0 && (
                    <p className="char-display text-sm" style={{ color: ACCENT }}>{selected.on.join("・")}</p>
                  )}
                  {selected.strokeCount > 0 && (
                    <p className="text-sm" style={{ color: "var(--ink-soft)" }}>{selected.strokeCount} trazos</p>
                  )}
                </div>
                <button onClick={() => setSelected(null)} className="ml-auto rounded-xl px-3 py-2 text-sm"
                  style={{ border: `1px solid ${ACCENT_SOFT}0.10)`, color: "var(--ink-soft)" }}>✕</button>
              </div>
              <div className="mt-4">
                {selected.hasSvg ? (
                  <Link href={`/kanji/practica/${encodeURIComponent(selected.char)}`}
                    className="block w-full rounded-2xl px-4 py-3 text-center text-sm font-semibold text-white"
                    style={{ background: getLevelGradient(selected.level) }}>
                    Practicar ✏
                  </Link>
                ) : (
                  <div className="w-full rounded-2xl px-4 py-3 text-center text-sm opacity-50"
                    style={{ border: `1px solid ${ACCENT_SOFT}0.12)`, color: "var(--ink-soft)" }}>
                    Sin SVG disponible
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

export default function KanjiTablaPage() {
  return (
    <Suspense>
      <KanjiTablaInner />
    </Suspense>
  );
}