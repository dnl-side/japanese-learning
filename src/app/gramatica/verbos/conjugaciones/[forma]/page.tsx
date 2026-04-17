// src/app/gramatica/verbos/conjugaciones/[forma]/page.tsx
"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import { use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CONJUGATION_FORMS } from "@/data/grammar/verbs";
import type { ConjExample, ConjGroup, VerbGroup } from "@/data/grammar/verbs";
import { FORM_TENSES, TENSE_LABELS, type TenseKey } from "@/lib/conjugationEngine";
import { RubyText } from "@/app/components/ui/Ruby";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";

const ACCENT = "#5D4037";
const ACCENT_SOFT = "rgba(141,110,99,";

const GROUP_META: Record<VerbGroup, { label: string; color: string; accent: string }> = {
  godan:     { label: "Grupo 1 — 五段",  color: "#FFAB40", accent: "#E65100" },
  ichidan:   { label: "Grupo 2 — 一段",  color: "#81C784", accent: "#2E7D32" },
  irregular: { label: "Grupo 3 — 変格",  color: "#90CAF9", accent: "#1565C0" },
};

const LEVEL_COLORS: Record<string, { bg: string; text: string }> = {
  N5: { bg: "rgba(144,202,249,0.15)", text: "#1565C0" },
  N4: { bg: "rgba(255,171,64,0.15)",  text: "#E65100" },
  N3: { bg: "rgba(129,199,132,0.15)", text: "#2E7D32" },
};

// ─── Tense badge ─────────────────────────────────────────────────────────────

const TENSE_COLORS: Record<TenseKey, string> = {
  present:      "#4CAF50",
  past:         "#42A5F5",
  negative:     "#EF5350",
  past_negative:"#AB47BC",
};

// ─── ConjugationDisplay ───────────────────────────────────────────────────────

function ConjugationDisplay({ ex }: { ex: ConjExample }) {
  return (
    <div className="rounded-2xl border p-4"
      style={{ background: "rgba(255,255,255,0.88)", border: "1px solid var(--border)", boxShadow: "var(--shadow-soft)" }}>
      <div className="mb-2 flex items-center gap-3 flex-wrap">
        {/* Dict form */}
        <div className="flex items-baseline gap-0.5">
          {ex.kanji && (
            <RubyText segments={[{ text: ex.kanji, ruby: ex.furigana }]}
              className="char-display text-xl font-bold" style={{ color: "var(--ink-soft)" }} />
          )}
          <span className="char-display text-xl" style={{ color: "var(--ink-soft)", opacity: 0.5 }}>{ex.morpheme}</span>
        </div>
        <span className="text-sm opacity-30">→</span>
        {/* Conjugated */}
        <div className="flex items-baseline gap-0.5">
          {ex.conjKanji && (
            <RubyText segments={[{ text: ex.conjKanji, ruby: ex.conjFurigana }]}
              className="char-display text-xl font-bold" style={{ color: "var(--ink)" }} />
          )}
          <span className="char-display text-xl font-bold" style={{ color: ACCENT }}>{ex.conjMorpheme}</span>
        </div>
      </div>
      <p className="text-sm" style={{ color: "var(--ink-soft)", opacity: 0.75 }}>{ex.meaning}</p>
      {ex.exampleSegments && (
        <div className="mt-2 rounded-xl px-3 py-2"
          style={{ background: `${ACCENT_SOFT}0.05)`, border: `1px solid ${ACCENT_SOFT}0.10)` }}>
          <RubyText segments={ex.exampleSegments} className="char-display text-base leading-loose" style={{ color: "var(--ink)" }} />
          {ex.exampleTranslation && (
            <p className="mt-0.5 text-xs italic" style={{ color: "var(--ink-soft)", opacity: 0.65 }}>{ex.exampleTranslation}</p>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Group section ────────────────────────────────────────────────────────────

function GroupSection({ group, formColor }: { group: ConjGroup; formColor: string }) {
  const [open, setOpen] = useState(true);
  const meta = GROUP_META[group.group as VerbGroup];

  return (
    <div className="rounded-[20px] border overflow-hidden"
      style={{ border: `1px solid ${meta.color}33` }}>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-5 py-4 transition-colors"
        style={{ background: `${meta.color}12` }}
      >
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full" style={{ background: meta.color }} />
          <span className="font-semibold text-sm" style={{ color: meta.accent }}>{meta.label}</span>
          <span className="text-xs opacity-60" style={{ color: "var(--ink-soft)" }}>
            {group.examples.length} ejemplos
          </span>
        </div>
        <span className="text-sm transition-transform duration-200" style={{ color: meta.accent, display: "block", transform: open ? "rotate(180deg)" : "none" }}>▾</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {/* Rule */}
            <div className="mx-4 mt-3 mb-2 rounded-xl p-3 text-xs font-mono whitespace-pre-line"
              style={{ background: `${meta.color}10`, border: `1px solid ${meta.color}33`, color: meta.accent }}>
              📐 {group.rule}
            </div>
            {/* Examples */}
            <div className="px-4 pb-4 space-y-2">
              {group.examples.map((ex: ConjExample, i: number) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}>
                  <ConjugationDisplay ex={ex} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Tense overview table ─────────────────────────────────────────────────────

function TenseOverview({ formKey }: { formKey: string }) {
  const tenses = FORM_TENSES[formKey as keyof typeof FORM_TENSES] ?? [];
  if (tenses.length <= 1) return null;

  // Find godan example: 買う (ka+う)
  const godanEx = { dict: "買う", i: "か", nai: "わ", e: "え" };

  const TENSE_EXAMPLES: Partial<Record<string, Record<TenseKey, string>>> = {
    masu:     { present: "買います", past: "買いました",         negative: "買いません",          past_negative: "買いませんでした" },
    nai:      { present: "買わない", past: "買わなかった",        negative: "—",                   past_negative: "—" },
    tai:      { present: "買いたい", past: "買いたかった",        negative: "買いたくない",         past_negative: "買いたくなかった" },
    potential:{ present: "買える",   past: "買えた",              negative: "買えない",             past_negative: "買えなかった" },
    passive:  { present: "買われる", past: "買われた",            negative: "買われない",           past_negative: "買われなかった" },
    causative:{ present: "買わせる", past: "買わせた",            negative: "買わせない",           past_negative: "買わせなかった" },
    causative_passive: { present: "買わされる", past: "買わされた", negative: "買わされない",       past_negative: "買わされなかった" },
  };

  const examples = TENSE_EXAMPLES[formKey];
  if (!examples) return null;

  return (
    <div className="rounded-[20px] border p-5 mb-6"
      style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ACCENT_SOFT}0.12)` }}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
        Tiempos — ejemplo con 買う (comprar)
      </p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {tenses.map(t => (
          <div key={t} className="flex items-center gap-3 rounded-xl border p-3"
            style={{ background: `rgba(255,255,255,0.7)`, border: "1px solid var(--border)" }}>
            <div className="h-2 w-2 rounded-full shrink-0" style={{ background: TENSE_COLORS[t] }} />
            <div>
              <p className="text-xs font-semibold" style={{ color: TENSE_COLORS[t] }}>
                {TENSE_LABELS[t]}
              </p>
              <p className="char-display text-lg font-bold" style={{ color: "var(--ink)" }}>
                {examples[t]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FormaPage({ params }: { params: Promise<{ forma: string }> }) {
  const { forma } = use(params);
  const form = CONJUGATION_FORMS.find(f => f.key === forma);
  if (!form) notFound();

  const levelColors = LEVEL_COLORS[form.level] ?? LEVEL_COLORS.N5;
  const tenses = FORM_TENSES[forma as keyof typeof FORM_TENSES] ?? [];

  // Nav between forms
  const formIndex = CONJUGATION_FORMS.findIndex(f => f.key === forma);
  const prevForm = formIndex > 0 ? CONJUGATION_FORMS[formIndex - 1] : null;
  const nextForm = formIndex < CONJUGATION_FORMS.length - 1 ? CONJUGATION_FORMS[formIndex + 1] : null;

  return (
    <main className="relative min-h-screen" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />

      <div className="relative z-10 mx-auto max-w-3xl px-4 pb-24 pt-10 sm:px-6">

        <Link href="/gramatica/verbos/conjugaciones"
          className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
          style={{ color: ACCENT }}>
          ← Todas las formas
        </Link>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
          className="mt-5 mb-6 rounded-[28px] border px-6 py-6"
          style={{ background: "rgba(255,255,255,0.80)", border: `1px solid ${form.color}44`, boxShadow: `0 16px 36px ${ACCENT_SOFT}0.07)`, backdropFilter: "blur(10px)" }}>

          {/* Color bar */}
          <div className="absolute inset-x-0 top-0 h-1 rounded-t-[28px]" style={{ background: form.color }} />

          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
              style={{ background: `${form.color}44`, border: `1px solid ${form.color}88` }}>
              <RubyText segments={form.titleSegments.slice(0, 1)} className="char-display text-2xl font-bold" style={{ color: ACCENT }} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <RubyText segments={form.titleSegments} className="char-display text-2xl font-bold" style={{ color: "var(--ink)" }} />
                <span className="rounded-full px-2 py-0.5 text-xs font-bold"
                  style={{ background: levelColors.bg, color: levelColors.text }}>
                  {form.level}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.8 }}>
                {form.description}
              </p>
            </div>
          </div>

          {/* Usage box */}
          <div className="mt-4 rounded-xl p-3 text-sm leading-relaxed"
            style={{ background: `${ACCENT_SOFT}0.06)`, border: `1px solid ${ACCENT_SOFT}0.12)`, color: "var(--ink-soft)" }}>
            <span className="font-bold" style={{ color: ACCENT }}>Uso: </span>{form.usage}
          </div>

          {/* Tense pills */}
          {tenses.length > 1 && (
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs font-semibold" style={{ color: "var(--ink-soft)", opacity: 0.6 }}>Tiempos:</span>
              {tenses.map(t => (
                <span key={t} className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                  style={{ background: `${TENSE_COLORS[t]}22`, color: TENSE_COLORS[t], border: `1px solid ${TENSE_COLORS[t]}44` }}>
                  {TENSE_LABELS[t]}
                </span>
              ))}
            </div>
          )}

          {/* Practice button */}
          <div className="mt-4">
            <Link
              href={`/gramatica/verbos/quiz?form=${forma}`}
              className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-bold text-white transition-all hover:brightness-110"
              style={{ background: `linear-gradient(135deg, ${form.color}, ${ACCENT})` }}>
              ◎ Practicar esta forma
            </Link>
          </div>
        </motion.div>

        {/* Tense overview */}
        <TenseOverview formKey={forma} />

        {/* Groups */}
        <div className="mb-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
            Por grupo de verbos
          </p>
          <div className="space-y-4">
            {form.groups.map((group, i) => (
              <motion.div key={group.group}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}>
                <GroupSection group={group} formColor={form.color} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Prev / Next navigation */}
        <div className="mt-8 grid grid-cols-2 gap-3">
          {prevForm ? (
            <Link href={`/gramatica/verbos/conjugaciones/${prevForm.key}`}
              className="flex flex-col rounded-2xl border p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
              style={{ background: "rgba(255,255,255,0.8)", border: "1px solid var(--border)" }}>
              <span className="text-xs mb-1" style={{ color: "var(--ink-soft)", opacity: 0.5 }}>← Anterior</span>
              <RubyText segments={prevForm.titleSegments} className="char-display text-base font-bold" style={{ color: ACCENT }} />
            </Link>
          ) : <div />}

          {nextForm ? (
            <Link href={`/gramatica/verbos/conjugaciones/${nextForm.key}`}
              className="flex flex-col items-end rounded-2xl border p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
              style={{ background: "rgba(255,255,255,0.8)", border: "1px solid var(--border)" }}>
              <span className="text-xs mb-1" style={{ color: "var(--ink-soft)", opacity: 0.5 }}>Siguiente →</span>
              <RubyText segments={nextForm.titleSegments} className="char-display text-base font-bold" style={{ color: ACCENT }} />
            </Link>
          ) : <div />}
        </div>

      </div>
    </main>
  );
}