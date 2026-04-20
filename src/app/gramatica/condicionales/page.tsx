// src/app/gramatica/condicionales/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import {
  CONDITIONALS, COMPARISON_MATRIX, SIDE_BY_SIDE,
  type Conditional,
} from "@/data/grammar/conditionals";
import { RubyText } from "@/app/components/ui/Ruby";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";

const ACCENT = "#388E3C";
const ACCENT_SOFT = "rgba(56,142,60,";
const GRADIENT = "linear-gradient(135deg, #81C784, #388E3C)";

type SectionKey = "base" | "detail" | "compare";

const SECTIONS: { key: SectionKey; label: string; jp: string }[] = [
  { key: "base",    label: "Base",    jp: "基本" },
  { key: "detail",  label: "Detalle", jp: "詳細" },
  { key: "compare", label: "Comparar",jp: "比較" },
];

const COND_COLOR: Record<string, { color: string; accent: string; name: string }> = {
  to:   { color: "#90CAF9", accent: "#1565C0", name: "と"    },
  ba:   { color: "#A5D6A7", accent: "#2E7D32", name: "ば"    },
  tara: { color: "#FFAB40", accent: "#E65100", name: "たら"  },
  nara: { color: "#CE93D8", accent: "#6A1B9A", name: "なら"  },
};

// ─── 1. Base Section ──────────────────────────────────────────────────────────

function BaseSection() {
  return (
    <section id="base" className="space-y-4 scroll-mt-24">
      <div className="rounded-[20px] border p-5"
        style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ACCENT_SOFT}0.15)` }}>
        <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
          基本 — Base conceptual
        </p>
        <h2 className="text-xl font-bold mt-1 mb-3" style={{ color: "var(--ink)" }}>
          Los 4 condicionales del japonés
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.85 }}>
          El español tiene un solo condicional ("si"), pero el japonés tiene <strong>cuatro</strong>:
          <strong style={{ color: "#1565C0" }}> と</strong>,
          <strong style={{ color: "#2E7D32" }}> ば</strong>,
          <strong style={{ color: "#E65100" }}> たら</strong> y
          <strong style={{ color: "#6A1B9A" }}> なら</strong>. Cada uno expresa un matiz distinto
          y hay reglas claras sobre cuándo usar cada uno.
        </p>

        {/* Quick card for each conditional */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 mt-4">
          {CONDITIONALS.map(c => (
            <div key={c.key} className="rounded-xl p-3 border"
              style={{ background: `${c.color}12`, border: `1px solid ${c.color}44` }}>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="char-display text-lg font-bold" style={{ color: c.accent }}>{c.jp}</span>
                <span className="text-xs font-semibold" style={{ color: c.accent }}>{c.title}</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.75 }}>
                {c.summary}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Golden rule */}
      <div className="rounded-[20px] border p-5"
        style={{ background: "rgba(255,243,224,0.85)", border: "1px solid rgba(255,152,0,0.30)" }}>
        <p className="text-xs font-bold uppercase tracking-[0.14em] mb-2" style={{ color: "#E65100" }}>
          💡 Regla de oro
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "#5D4037" }}>
          Cuando dudes entre los 4 condicionales, usa <strong className="char-display">たら</strong>.
          Es el más flexible y cubre el 90% de los casos en conversación cotidiana.
          Los otros se aprenden luego para casos específicos.
        </p>
      </div>

      {/* Quick decision flow */}
      <div className="rounded-[20px] border p-5"
        style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ACCENT_SOFT}0.15)` }}>
        <p className="text-xs font-bold uppercase tracking-[0.14em] mb-3" style={{ color: ACCENT }}>
          Guía rápida de decisión
        </p>
        <div className="space-y-2">
          {[
            { q: "¿El resultado es automático, inevitable o una ley natural?", a: "と", color: COND_COLOR.to },
            { q: "¿Es una condición hipotética general o formal/literaria?", a: "ば", color: COND_COLOR.ba },
            { q: "¿Quieres expresar secuencia temporal o algo versátil?", a: "たら", color: COND_COLOR.tara },
            { q: "¿Te basas en algo que el otro dijo o en un contexto previo?", a: "なら", color: COND_COLOR.nara },
          ].map((row, i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl p-3"
              style={{ background: `${row.color.color}10`, border: `1px solid ${row.color.color}33` }}>
              <div className="flex h-8 w-12 shrink-0 items-center justify-center rounded-lg char-display text-base font-bold text-white"
                style={{ background: row.color.accent }}>
                {row.a}
              </div>
              <p className="text-sm" style={{ color: "var(--ink-soft)" }}>{row.q}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 2. Detail Section ────────────────────────────────────────────────────────

function ConditionalCard({ c }: { c: Conditional }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-[22px] border overflow-hidden"
      style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${c.color}55` }}>
      <div className="h-1" style={{ background: c.color }} />

      <button onClick={() => setOpen(o => !o)}
        className="w-full flex items-start justify-between gap-3 px-5 py-4 text-left transition-colors"
        style={{ background: open ? `${c.color}14` : "transparent" }}>
        <div className="flex items-start gap-3 min-w-0">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold"
            style={{ background: `${c.color}33`, color: c.accent, border: `1px solid ${c.color}66` }}>
            <span className="char-display">{c.jp}</span>
          </div>
          <div className="min-w-0">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="char-display text-lg font-bold" style={{ color: c.accent }}>{c.jp}</span>
              <span className="text-base font-bold" style={{ color: "var(--ink)" }}>{c.title}</span>
            </div>
            <p className="mt-0.5 text-xs leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>
              {c.summary}
            </p>
          </div>
        </div>
        <span className="text-sm transition-transform duration-200 shrink-0 mt-3"
          style={{ color: c.accent, display: "block", transform: open ? "rotate(180deg)" : "none" }}>▾</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="px-5 pb-5 space-y-4">

              {/* Main use */}
              <div className="rounded-xl p-3 text-sm leading-relaxed"
                style={{ background: `${c.color}10`, border: `1px solid ${c.color}33`, color: "var(--ink-soft)" }}>
                <span className="font-bold block mb-1" style={{ color: c.accent }}>Uso principal</span>
                {c.mainUse}
              </div>

              {/* Formation table */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] mb-2" style={{ color: c.accent }}>
                  Formación
                </p>
                <div className="overflow-x-auto rounded-xl border" style={{ border: `1px solid ${c.color}33` }}>
                  <table className="w-full text-xs min-w-[480px]">
                    <thead>
                      <tr style={{ background: `${c.color}14` }}>
                        <th className="px-3 py-2 text-left font-bold" style={{ color: c.accent }}>Tipo</th>
                        <th className="px-3 py-2 text-left font-bold" style={{ color: c.accent }}>Ejemplo</th>
                        <th className="px-3 py-2 text-left font-bold" style={{ color: c.accent }}>Regla</th>
                        <th className="px-3 py-2 text-left font-bold" style={{ color: c.accent }}>Afirmativo</th>
                        <th className="px-3 py-2 text-left font-bold opacity-70" style={{ color: c.accent }}>Negativo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {c.formation.map((f, i) => (
                        <tr key={i} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.4)" }}>
                          <td className="px-3 py-2 font-semibold" style={{ color: "var(--ink-soft)" }}>{f.type}</td>
                          <td className="px-3 py-2 char-display font-bold" style={{ color: "var(--ink)" }}>{f.example}</td>
                          <td className="px-3 py-2 text-xs" style={{ color: "var(--ink-soft)", opacity: 0.75 }}>{f.rule}</td>
                          <td className="px-3 py-2 char-display font-bold" style={{ color: c.accent }}>{f.result}</td>
                          <td className="px-3 py-2 char-display text-xs opacity-70" style={{ color: "var(--ink-soft)" }}>{f.negative ?? "—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Examples */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] mb-2" style={{ color: c.accent }}>
                  Ejemplos
                </p>
                <div className="space-y-2">
                  {c.examples.map((ex, i) => (
                    <div key={i} className="rounded-xl p-3"
                      style={{ background: `${c.color}08`, border: `1px solid ${c.color}22` }}>
                      <RubyText segments={ex.segments} className="char-display text-sm leading-loose" style={{ color: "var(--ink)" }} />
                      <p className="text-xs italic mt-0.5" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>{ex.translation}</p>
                      {ex.note && (
                        <p className="text-xs mt-2 rounded-lg p-2" style={{ background: `${c.color}14`, color: c.accent }}>
                          💡 {ex.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Restrictions */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] mb-2" style={{ color: c.accent }}>
                  Restricciones
                </p>
                <ul className="space-y-1.5">
                  {c.restrictions.map((r, i) => (
                    <li key={i} className="text-xs leading-relaxed pl-4 relative" style={{ color: "var(--ink-soft)" }}>
                      <span className="absolute left-0 top-1.5 h-1 w-1 rounded-full" style={{ background: c.accent }} />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* When NOT to use */}
              <div className="rounded-xl p-3 text-sm leading-relaxed"
                style={{ background: "rgba(254,226,226,0.5)", border: "1px solid rgba(220,38,38,0.20)", color: "#B91C1C" }}>
                <span className="font-bold block mb-1">⚠️ Cuándo NO usar</span>
                {c.whenNotToUse}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DetailSection() {
  return (
    <section id="detail" className="space-y-4 scroll-mt-24">
      <div className="rounded-[20px] border p-5"
        style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ACCENT_SOFT}0.15)` }}>
        <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
          詳細 — Detalle por condicional
        </p>
        <h2 className="text-xl font-bold mt-1 mb-2" style={{ color: "var(--ink)" }}>
          Cada condicional en profundidad
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.8 }}>
          Haz clic en cada card para ver la formación completa (verbo, adjetivos, sustantivo),
          ejemplos con contexto, restricciones y cuándo NO usarlo.
        </p>
      </div>

      <div className="space-y-3">
        {CONDITIONALS.map((c, i) => (
          <motion.div key={c.key}
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
            <ConditionalCard c={c} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── 3. Compare Section ───────────────────────────────────────────────────────

function CompareSection() {
  return (
    <section id="compare" className="space-y-4 scroll-mt-24">
      <div className="rounded-[20px] border p-5"
        style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ACCENT_SOFT}0.15)` }}>
        <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
          比較 — Comparativas
        </p>
        <h2 className="text-xl font-bold mt-1 mb-2" style={{ color: "var(--ink)" }}>
          Los 4 condicionales lado a lado
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.8 }}>
          Comparar directamente las 4 opciones es la mejor forma de entender cuándo usar cada una.
        </p>
      </div>

      {/* Comparison matrix */}
      <div className="rounded-[20px] border p-5"
        style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ACCENT_SOFT}0.15)` }}>
        <p className="text-xs font-bold uppercase tracking-[0.14em] mb-3" style={{ color: ACCENT }}>
          Matriz de compatibilidad
        </p>
        <div className="overflow-x-auto rounded-xl border" style={{ border: `1px solid ${ACCENT_SOFT}0.15)` }}>
          <table className="w-full text-xs min-w-[520px]">
            <thead>
              <tr style={{ background: `${ACCENT_SOFT}0.08)` }}>
                <th className="px-3 py-2.5 text-left font-bold" style={{ color: ACCENT }}>Característica</th>
                {(["to", "ba", "tara", "nara"] as const).map(k => (
                  <th key={k} className="px-3 py-2.5 text-center font-bold char-display"
                    style={{ color: COND_COLOR[k].accent }}>
                    {COND_COLOR[k].name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_MATRIX.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.4)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "var(--ink-soft)" }}>{row.feature}</td>
                  {([row.to, row.ba, row.tara, row.nara] as const).map((v, j) => {
                    const color = v === "✓" ? "#2E7D32" : v === "✗" ? "#C62828" : v === "△" ? "#F57F17" : "var(--ink-soft)";
                    return (
                      <td key={j} className="px-3 py-2 text-center font-bold" style={{ color }}>
                        {v}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 flex flex-wrap gap-3 text-xs" style={{ color: "var(--ink-soft)" }}>
          <span><strong style={{ color: "#2E7D32" }}>✓</strong> Totalmente compatible</span>
          <span><strong style={{ color: "#F57F17" }}>△</strong> Posible pero limitado</span>
          <span><strong style={{ color: "#C62828" }}>✗</strong> No se puede usar</span>
        </div>
      </div>

      {/* Side-by-side */}
      {SIDE_BY_SIDE.map((topic, ti) => (
        <motion.div key={topic.topic}
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: ti * 0.08 }}
          className="rounded-[20px] border p-5"
          style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ACCENT_SOFT}0.15)` }}>
          <h3 className="text-base font-bold mb-1" style={{ color: ACCENT }}>{topic.topic}</h3>
          <p className="text-xs mb-3" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>{topic.base}</p>
          <div className="space-y-2">
            {topic.variations.map((v, i) => {
              const meta = COND_COLOR[v.cond];
              return (
                <div key={i} className="rounded-xl border p-3"
                  style={{ background: `${meta.color}10`, border: `1px solid ${meta.color}33` }}>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-10 shrink-0 items-center justify-center rounded-lg char-display text-sm font-bold text-white"
                      style={{ background: meta.accent }}>{meta.name}</div>
                    <div className="flex-1 min-w-0">
                      <RubyText segments={v.sentence} className="char-display text-sm leading-loose" style={{ color: "var(--ink)" }} />
                      <p className="text-xs italic mt-0.5" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>{v.translation}</p>
                      <p className="text-xs mt-1.5 rounded-lg p-2" style={{ background: `${meta.color}18`, color: meta.accent }}>
                        {v.nuance}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CondicionalesPage() {
  const [activeSection, setActiveSection] = useState<SectionKey>("base");

  useEffect(() => {
    const handler = () => {
      const offsets = SECTIONS.map(s => {
        const el = document.getElementById(s.key);
        if (!el) return { key: s.key, top: Infinity };
        return { key: s.key, top: Math.abs(el.getBoundingClientRect().top - 100) };
      });
      offsets.sort((a, b) => a.top - b.top);
      setActiveSection(offsets[0].key as SectionKey);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (key: SectionKey) => {
    document.getElementById(key)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="relative min-h-screen" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />
      <div className="relative z-10 mx-auto max-w-3xl px-4 pb-24 pt-10 sm:px-6">

        <Link href="/gramatica" className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
          style={{ color: ACCENT }}>← Gramática</Link>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
          className="mt-5 mb-6 rounded-[28px] border px-5 py-5"
          style={{ background: "rgba(255,255,255,0.72)", border: `1px solid ${ACCENT_SOFT}0.15)`, boxShadow: `0 16px 36px ${ACCENT_SOFT}0.06)`, backdropFilter: "blur(10px)" }}>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
            style={{ color: ACCENT, background: `${ACCENT_SOFT}0.08)`, border: `1px solid ${ACCENT_SOFT}0.15)` }}>
            条件文 · Condicionales
          </div>
          <h1 className="char-display text-2xl font-bold" style={{ color: "var(--ink)" }}>
            Oraciones condicionales
          </h1>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.8 }}>
            Mientras el español usa solo "si", el japonés distingue 4 tipos de condicional
            según el matiz: resultado natural (<span className="char-display">と</span>),
            hipotético (<span className="char-display">ば</span>),
            temporal (<span className="char-display">たら</span>) o contextual (<span className="char-display">なら</span>).
          </p>
        </motion.div>

        {/* Sticky nav */}
        <div className="sticky top-4 z-20 mb-6">
          <div className="rounded-2xl border p-1.5 flex gap-1"
            style={{ background: "rgba(255,255,255,0.92)", border: `1px solid ${ACCENT_SOFT}0.15)`, boxShadow: `0 8px 24px ${ACCENT_SOFT}0.08)`, backdropFilter: "blur(12px)" }}>
            {SECTIONS.map(s => (
              <button key={s.key} onClick={() => scrollTo(s.key)}
                className="flex-1 rounded-xl py-2 text-xs font-semibold transition-all"
                style={{
                  background: activeSection === s.key ? GRADIENT : "transparent",
                  color: activeSection === s.key ? "white" : "var(--ink-soft)",
                }}>
                <span className="char-display block text-[0.6rem] opacity-70">{s.jp}</span>
                <span>{s.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          <BaseSection />
          <DetailSection />
          <CompareSection />
        </div>

      </div>
    </main>
  );
}