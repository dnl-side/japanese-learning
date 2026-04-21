// src/app/gramatica/tiempo/page.tsx

"use client";

import { useMemo, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  DESU_FORMS, TEIRU_USES, TEIRU_NEGATIVE, VERB_TENSE_SUMMARY,
  ADJ_TENSE_SUMMARY, TIME_MARKERS, COMPARISONS,
  type DesuForm, type TeiruUse, type TimeMarker,
} from "@/data/grammar/time";
import { RubyText } from "@/app/components/ui/Ruby";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";

const ACCENT = "#D32F2F";
const ACCENT_SOFT = "rgba(211,47,47,";
const GRADIENT = "linear-gradient(135deg, #EF5350, #D32F2F)";

type SectionKey = "base" | "forms" | "uses" | "markers" | "compare";

const SECTIONS: { key: SectionKey; label: string; jp: string }[] = [
  { key: "base",    label: "Base",       jp: "基本"     },
  { key: "forms",   label: "Formas",     jp: "活用"     },
  { key: "uses",    label: "Usos",       jp: "用法"     },
  { key: "markers", label: "Marcadores", jp: "時間表現" },
  { key: "compare", label: "Comparar",   jp: "比較"     },
];

// ─── 1. Base Section ──────────────────────────────────────────────────────────

function BaseSection() {
  return (
    <section id="base" className="space-y-4 scroll-mt-24">
      <div className="rounded-[28px] border p-6 sm:p-7"
        style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ACCENT_SOFT}0.15)` }}>
        <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
          基本 — Base conceptual
        </p>
        <h2 className="text-xl font-bold mt-1 mb-3" style={{ color: "var(--ink)" }}>
          El tiempo en japonés
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.85 }}>
          El sistema temporal del japonés es <strong>binario</strong>: solo distingue entre
          <strong style={{ color: ACCENT }}> pasado</strong> y <strong style={{ color: ACCENT }}>no-pasado</strong>.
          El futuro no tiene una forma propia — se expresa con el no-pasado más contexto
          (adverbios como 明日, 来週, etc.).
        </p>

        {/* Key principles */}
        <div className="mt-4 space-y-2">
          {[
            "El verbo (o です) siempre va al FINAL y define el tiempo de la oración.",
            "Cambiar el tiempo significa cambiar la terminación del verbo, です o adjetivo.",
            "No existe forma específica para el futuro: se usa el no-pasado + un marcador temporal.",
            "El negativo y el pasado son dos ejes independientes que se combinan libremente.",
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl p-2.5"
              style={{ background: `${ACCENT_SOFT}0.06)`, border: `1px solid ${ACCENT_SOFT}0.10)` }}>
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[0.6rem] font-bold text-white mt-0.5"
                style={{ background: ACCENT }}>{i + 1}</div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick example: verb */}
      <div className="rounded-[28px] border p-6 sm:p-7"
        style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ACCENT_SOFT}0.15)` }}>
        <p className="text-xs font-bold uppercase tracking-[0.14em] mb-3" style={{ color: ACCENT }}>
          Ejemplo base — verbo 食べる (comer)
        </p>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {[
            { form: "食べます",       meaning: "como / comeré",     polarity: "afirm", tense: "no-pasado" },
            { form: "食べました",     meaning: "comí",              polarity: "afirm", tense: "pasado"    },
            { form: "食べません",     meaning: "no como / no comeré",polarity: "neg",  tense: "no-pasado" },
            { form: "食べませんでした",meaning: "no comí",            polarity: "neg",  tense: "pasado"    },
          ].map(r => (
            <div key={r.form} className="rounded-xl p-3 flex items-center justify-between gap-2"
              style={{
                background: r.polarity === "afirm" ? "rgba(165,214,167,0.12)" : "rgba(239,154,154,0.12)",
                border: `1px solid ${r.polarity === "afirm" ? "rgba(46,125,50,0.20)" : "rgba(198,40,40,0.20)"}`,
              }}>
              <div>
                <span className="char-display text-base font-bold block" style={{ color: r.polarity === "afirm" ? "#2E7D32" : "#C62828" }}>{r.form}</span>
                <span className="text-xs opacity-70" style={{ color: "var(--ink-soft)" }}>{r.meaning}</span>
              </div>
              <span className="text-[0.6rem] font-bold uppercase px-2 py-0.5 rounded-full shrink-0"
                style={{ background: "rgba(255,255,255,0.7)", color: r.polarity === "afirm" ? "#2E7D32" : "#C62828" }}>
                {r.tense}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick example: desu */}
      <div className="rounded-[28px] border p-6 sm:p-7"
        style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ACCENT_SOFT}0.15)` }}>
        <p className="text-xs font-bold uppercase tracking-[0.14em] mb-3" style={{ color: ACCENT }}>
          Mismo sistema con です — 学生 (estudiante)
        </p>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {[
            { form: "学生です",                 meaning: "soy estudiante",      polarity: "afirm" },
            { form: "学生でした",               meaning: "era estudiante",      polarity: "afirm" },
            { form: "学生ではありません",       meaning: "no soy estudiante",   polarity: "neg" },
            { form: "学生ではありませんでした", meaning: "no era estudiante",   polarity: "neg" },
          ].map(r => (
            <div key={r.form} className="rounded-xl p-3"
              style={{
                background: r.polarity === "afirm" ? "rgba(165,214,167,0.12)" : "rgba(239,154,154,0.12)",
                border: `1px solid ${r.polarity === "afirm" ? "rgba(46,125,50,0.20)" : "rgba(198,40,40,0.20)"}`,
              }}>
              <span className="char-display text-base font-bold block" style={{ color: r.polarity === "afirm" ? "#2E7D32" : "#C62828" }}>{r.form}</span>
              <span className="text-xs opacity-70" style={{ color: "var(--ink-soft)" }}>{r.meaning}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 2. Forms Section ─────────────────────────────────────────────────────────

function DesuCard({ d }: { d: DesuForm }) {
  return (
    <div className="rounded-[18px] border p-4"
      style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ACCENT_SOFT}0.18)` }}>
      <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: ACCENT }}>{d.label}</p>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 mb-3">
        <div className="rounded-xl p-2.5" style={{ background: `${ACCENT_SOFT}0.08)` }}>
          <p className="text-[0.6rem] font-bold uppercase opacity-60" style={{ color: ACCENT }}>Formal</p>
          <p className="char-display text-base font-bold" style={{ color: ACCENT }}>{d.formal}</p>
          {d.formalAlt && <p className="char-display text-xs mt-0.5" style={{ color: ACCENT, opacity: 0.7 }}>o: {d.formalAlt}</p>}
        </div>
        <div className="rounded-xl p-2.5" style={{ background: "rgba(100,100,100,0.08)" }}>
          <p className="text-[0.6rem] font-bold uppercase opacity-60" style={{ color: "var(--ink-soft)" }}>Informal</p>
          <p className="char-display text-base font-bold" style={{ color: "var(--ink)" }}>{d.informal}</p>
          {d.informalAlt && <p className="char-display text-xs mt-0.5" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>o: {d.informalAlt}</p>}
        </div>
      </div>

      {d.semiFormal && (
        <div className="rounded-xl p-2.5 mb-3" style={{ background: "rgba(255,193,7,0.10)", border: "1px solid rgba(255,193,7,0.25)" }}>
          <p className="text-[0.6rem] font-bold uppercase opacity-75" style={{ color: "#F57F17" }}>Semi-formal (conversacional)</p>
          <p className="char-display text-base font-bold" style={{ color: "#F57F17" }}>{d.semiFormal}</p>
        </div>
      )}

      <div className="rounded-xl p-2.5 mb-2" style={{ background: "rgba(255,255,255,0.7)", border: "1px solid var(--border)" }}>
        <RubyText segments={d.example.segments} className="char-display text-lg leading-[2.05] sm:text-[1.24rem]" style={{ color: "var(--ink)" }} />
        <p className="text-xs italic mt-0.5" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>{d.example.translation}</p>
      </div>

      {d.note && (
        <p className="text-xs leading-relaxed rounded-lg p-2" style={{ background: "rgba(255,248,220,0.6)", border: "1px solid rgba(255,193,7,0.25)", color: "#7B6000" }}>
          💡 {d.note}
        </p>
      )}
    </div>
  );
}

function FormsSection() {
  return (
    <section id="forms" className="space-y-5 scroll-mt-24">
      <div className="rounded-[28px] border p-6 sm:p-7"
        style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ACCENT_SOFT}0.15)` }}>
        <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
          活用 — Cambios de forma
        </p>
        <h2 className="text-xl font-bold mt-1 mb-2" style={{ color: "var(--ink)" }}>
          Cómo cambiar el tiempo de una oración
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.8 }}>
          Dependiendo del tipo de oración, el tiempo se define cambiando el verbo, です o el adjetivo.
        </p>
      </div>

      {/* A. Verbs — link to verbs section */}
      <div className="rounded-[28px] border p-6 sm:p-7"
        style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,171,64,0.30)" }}>
        <div className="flex items-start gap-3 mb-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-white"
            style={{ background: "linear-gradient(135deg, #FFAB40, #E65100)" }}>A</div>
          <div>
            <h3 className="text-base font-bold" style={{ color: "#E65100" }}>Verbos</h3>
            <p className="text-xs" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>Resumen de las 5 formas más usadas</p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border" style={{ border: "1px solid rgba(255,171,64,0.20)" }}>
          <table className="w-full text-sm min-w-[480px]">
            <thead>
              <tr style={{ background: "rgba(255,171,64,0.12)" }}>
                <th className="px-3 py-2 text-left font-bold" style={{ color: "#E65100" }}>Forma</th>
                <th className="px-3 py-2 text-left font-bold" style={{ color: "#E65100" }}>Formal (ます)</th>
                <th className="px-3 py-2 text-left font-bold" style={{ color: "#E65100" }}>Informal</th>
                <th className="px-3 py-2 text-left font-bold opacity-60" style={{ color: "var(--ink-soft)" }}>Significado</th>
              </tr>
            </thead>
            <tbody>
              {VERB_TENSE_SUMMARY.map((r, i) => (
                <tr key={r.label} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.4)" }}>
                  <td className="px-3 py-2 text-xs font-semibold" style={{ color: "var(--ink-soft)" }}>{r.label}</td>
                  <td className="px-3 py-2 char-display font-bold text-base" style={{ color: "#E65100" }}>{r.formal}</td>
                  <td className="px-3 py-2 char-display font-bold text-base" style={{ color: "var(--ink)" }}>{r.informal}</td>
                  <td className="px-3 py-2 text-xs opacity-70" style={{ color: "var(--ink-soft)" }}>{r.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Link href="/gramatica/verbos/conjugaciones"
          className="mt-3 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold text-white transition-all hover:brightness-110"
          style={{ background: "linear-gradient(135deg, #FFAB40, #E65100)" }}>
          Ver conjugaciones completas →
        </Link>
      </div>

      {/* B. Desu — the full section */}
      <div className="rounded-[28px] border p-6 sm:p-7"
        style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ACCENT_SOFT}0.25)` }}>
        <div className="flex items-start gap-3 mb-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-white"
            style={{ background: GRADIENT }}>B</div>
          <div>
            <h3 className="text-base font-bold" style={{ color: ACCENT }}>Oraciones con です</h3>
            <p className="text-xs" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>
              です no es un verbo normal — es la cópula del japonés y tiene su propio sistema
            </p>
          </div>
        </div>

        <div className="rounded-xl p-3 mb-4 text-xs leading-relaxed"
          style={{ background: `${ACCENT_SOFT}0.06)`, border: `1px solid ${ACCENT_SOFT}0.15)`, color: "var(--ink-soft)" }}>
          <strong style={{ color: ACCENT }}>⚠️ Atención: </strong>
          です se comporta distinto a los verbos. No se dice <span className="line-through">ですました</span>,
          se dice <span className="char-display font-bold" style={{ color: ACCENT }}>でした</span>.
          Existen múltiples variantes de formalidad que conviene conocer.
        </div>

        <div className="space-y-2">
          {DESU_FORMS.map((d, i) => (
            <motion.div key={d.label} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <DesuCard d={d} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* C. Adjectives — link */}
      <div className="rounded-[28px] border p-6 sm:p-7"
        style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(206,147,216,0.35)" }}>
        <div className="flex items-start gap-3 mb-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-white"
            style={{ background: "linear-gradient(135deg, #CE93D8, #6A1B9A)" }}>C</div>
          <div>
            <h3 className="text-base font-bold" style={{ color: "#6A1B9A" }}>Adjetivos</h3>
            <p className="text-xs" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>
              Los adjetivos también cambian con el tiempo de la oración
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="rounded-xl border p-3" style={{ background: "rgba(206,147,216,0.08)", border: "1px solid rgba(206,147,216,0.25)" }}>
            <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: "#6A1B9A" }}>い-adjetivos (高い)</p>
            {ADJ_TENSE_SUMMARY.i.map(r => (
              <div key={r.label} className="flex items-baseline justify-between py-1 border-b last:border-0" style={{ borderColor: "rgba(206,147,216,0.15)" }}>
                <span className="text-[0.65rem]" style={{ color: "var(--ink-soft)" }}>{r.label}</span>
                <span className="char-display text-sm font-bold" style={{ color: "#6A1B9A" }}>{r.form}</span>
              </div>
            ))}
          </div>
          <div className="rounded-xl border p-3" style={{ background: "rgba(128,203,196,0.08)", border: "1px solid rgba(128,203,196,0.25)" }}>
            <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: "#00695C" }}>な-adjetivos (静か)</p>
            {ADJ_TENSE_SUMMARY.na.map(r => (
              <div key={r.label} className="flex items-baseline justify-between py-1 border-b last:border-0" style={{ borderColor: "rgba(128,203,196,0.15)" }}>
                <span className="text-[0.65rem]" style={{ color: "var(--ink-soft)" }}>{r.label}</span>
                <span className="char-display text-sm font-bold" style={{ color: "#00695C" }}>{r.form}</span>
              </div>
            ))}
          </div>
        </div>

        <Link href="/gramatica/adjetivos"
          className="mt-3 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold text-white transition-all hover:brightness-110"
          style={{ background: "linear-gradient(135deg, #CE93D8, #6A1B9A)" }}>
          Ver adjetivos completos →
        </Link>
      </div>
    </section>
  );
}

// ─── 3. Uses Section ──────────────────────────────────────────────────────────

function TeiruUseCard({ u, i }: { u: TeiruUse; i: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
      className="rounded-xl border p-4"
      style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(128,203,196,0.30)" }}>
      <div className="flex items-center gap-2 mb-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-full text-[0.65rem] font-bold text-white"
          style={{ background: "#00695C" }}>{i + 1}</div>
        <h4 className="text-sm font-bold" style={{ color: "#00695C" }}>{u.title}</h4>
      </div>
      <p className="text-xs leading-relaxed mb-2" style={{ color: "var(--ink-soft)" }}>{u.description}</p>
      <div className="rounded-lg p-2.5" style={{ background: "rgba(128,203,196,0.08)" }}>
        <RubyText segments={u.example.segments} className="char-display text-lg leading-[2.05] sm:text-[1.24rem]" style={{ color: "var(--ink)" }} />
        <p className="text-xs italic mt-0.5" style={{ color: "var(--ink-soft)", opacity: 0.75 }}>{u.example.translation}</p>
        {u.example.note && (
          <p className="text-xs mt-1.5 rounded-lg p-2" style={{ background: "rgba(255,193,7,0.10)", color: "#7B6000" }}>
            💡 {u.example.note}
          </p>
        )}
      </div>
    </motion.div>
  );
}

function UsesSection() {
  return (
    <section id="uses" className="space-y-4 scroll-mt-24">
      <div className="rounded-[28px] border p-6 sm:p-7"
        style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ACCENT_SOFT}0.15)` }}>
        <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
          用法 — Usos en contexto
        </p>
        <h2 className="text-xl font-bold mt-1 mb-2" style={{ color: "var(--ink)" }}>
          Cuándo usar cada forma
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.8 }}>
          Saber conjugar no es suficiente — hay que saber cuándo usar cada forma según el contexto.
        </p>
      </div>

      {/* No-pasado */}
      <div className="rounded-[28px] border p-6 sm:p-7"
        style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(165,214,167,0.35)" }}>
        <p className="text-xs font-bold uppercase tracking-wide mb-3" style={{ color: "#2E7D32" }}>No-pasado</p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {["Hechos generales", "Hábitos", "Futuro con contexto", "Estados actuales"].map(tag => (
            <span key={tag} className="rounded-full px-2.5 py-1 text-xs font-semibold"
              style={{ background: "rgba(165,214,167,0.20)", color: "#2E7D32", border: "1px solid rgba(46,125,50,0.25)" }}>{tag}</span>
          ))}
        </div>
        <div className="space-y-1.5">
          {[
            { jp: [{ text: "毎日", ruby: "まいにち" }, { text: "、" }, { text: "日本語", ruby: "にほんご" }, { text: "を" }, { text: "勉強", ruby: "べんきょう" }, { text: "します。" }] as any, es: "Estudio japonés todos los días. (hábito)" },
            { jp: [{ text: "明日", ruby: "あした" }, { text: "、" }, { text: "東京", ruby: "とうきょう" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }], es: "Mañana iré a Tokio. (futuro por contexto)" },
            { jp: [{ text: "今日", ruby: "きょう" }, { text: "は" }, { text: "休", ruby: "やす" }, { text: "みです。" }], es: "Hoy es día libre." },
          ].map((ex, i) => (
            <div key={i} className="rounded-lg p-2" style={{ background: "rgba(165,214,167,0.08)" }}>
              <RubyText segments={ex.jp} className="char-display text-lg leading-[2.05] sm:text-[1.24rem]" style={{ color: "var(--ink)" }} />
              <p className="text-xs italic opacity-70" style={{ color: "var(--ink-soft)" }}>{ex.es}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pasado */}
      <div className="rounded-[28px] border p-6 sm:p-7"
        style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(100,181,246,0.35)" }}>
        <p className="text-xs font-bold uppercase tracking-wide mb-3" style={{ color: "#1565C0" }}>Pasado</p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {["Acción terminada", "Estado pasado", "Experiencia concreta"].map(tag => (
            <span key={tag} className="rounded-full px-2.5 py-1 text-xs font-semibold"
              style={{ background: "rgba(100,181,246,0.18)", color: "#1565C0", border: "1px solid rgba(21,101,192,0.25)" }}>{tag}</span>
          ))}
        </div>
        <div className="space-y-1.5">
          {[
            { jp: [{ text: "昨日", ruby: "きのう" }, { text: "、" }, { text: "勉強", ruby: "べんきょう" }, { text: "しました。" }] as any, es: "Ayer estudié." },
            { jp: [{ text: "子", ruby: "こ" }, { text: "どもの" }, { text: "時", ruby: "とき" }, { text: "、" }, { text: "東京", ruby: "とうきょう" }, { text: "は" }, { text: "静", ruby: "しず" }, { text: "かでした。" }], es: "Cuando era niño, Tokio era tranquilo." },
          ].map((ex, i) => (
            <div key={i} className="rounded-lg p-2" style={{ background: "rgba(100,181,246,0.08)" }}>
              <RubyText segments={ex.jp} className="char-display text-lg leading-[2.05] sm:text-[1.24rem]" style={{ color: "var(--ink)" }} />
              <p className="text-xs italic opacity-70" style={{ color: "var(--ink-soft)" }}>{ex.es}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ている */}
      <div className="rounded-[28px] border p-6 sm:p-7"
        style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(128,203,196,0.35)" }}>
        <div className="flex items-start justify-between mb-3 gap-2 flex-wrap">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide" style={{ color: "#00695C" }}>〜ている — Continuo y aspecto</p>
            <p className="text-xs mt-1" style={{ color: "var(--ink-soft)", opacity: 0.75 }}>
              Se forma con la forma て del verbo + いる/います
            </p>
          </div>
          <Link href="/gramatica/verbos/conjugaciones/te"
            className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-bold text-white shrink-0"
            style={{ background: "linear-gradient(135deg, #81C784, #2E7D32)" }}>
            Forma て →
          </Link>
        </div>

        <div className="rounded-xl p-3 mb-3 text-xs leading-relaxed"
          style={{ background: "rgba(255,193,7,0.10)", border: "1px solid rgba(255,193,7,0.25)", color: "#7B6000" }}>
          ⚠️ <strong>〜ている NO siempre equivale a "estoy -ando"</strong>. Tiene tres usos distintos:
        </div>

        <div className="space-y-2">
          {TEIRU_USES.map((u, i) => <TeiruUseCard key={u.title} u={u} i={i} />)}
        </div>

        {/* Teiru negative */}
        <div className="mt-3 rounded-xl p-3" style={{ background: "rgba(128,203,196,0.08)", border: "1px solid rgba(128,203,196,0.20)" }}>
          <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: "#00695C" }}>Formas negativas de ている</p>
          <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
            {TEIRU_NEGATIVE.forms.map(f => (
              <div key={f.label} className="rounded-lg p-2" style={{ background: "rgba(255,255,255,0.7)" }}>
                <p className="text-[0.65rem] opacity-60" style={{ color: "var(--ink-soft)" }}>{f.label}</p>
                <p className="char-display text-sm font-bold" style={{ color: "#00695C" }}>{f.form}</p>
              </div>
            ))}
          </div>
          <div className="mt-2 rounded-lg p-2" style={{ background: "rgba(255,255,255,0.7)" }}>
            <RubyText segments={TEIRU_NEGATIVE.example.segments} className="char-display text-lg leading-[2.05] sm:text-[1.24rem]" style={{ color: "var(--ink)" }} />
            <p className="text-xs italic opacity-70" style={{ color: "var(--ink-soft)" }}>{TEIRU_NEGATIVE.example.translation}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 4. Markers Section ───────────────────────────────────────────────────────

function TimeMarkerChip({ m, color, accent }: { m: TimeMarker; color: string; accent: string }) {
  return (
    <div className="rounded-xl border p-3"
      style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${color}44` }}>
      <div className="flex items-baseline justify-between gap-2 mb-2">
        <div>
          {m.reading ? (
            <RubyText segments={[{ text: m.jp, ruby: m.reading }]}
              className="char-display text-base font-bold" style={{ color: accent }} />
          ) : (
            <span className="char-display text-base font-bold" style={{ color: accent }}>{m.jp}</span>
          )}
          <span className="ml-2 text-xs" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>{m.meaning}</span>
        </div>
        {m.usesNi && (
          <span className="rounded-full px-2 py-0.5 text-[0.6rem] font-bold shrink-0"
            style={{ background: "rgba(240,98,146,0.20)", color: "#AD1457" }}>+ に</span>
        )}
      </div>
      <div className="rounded-lg p-2" style={{ background: `${color}10` }}>
        <RubyText segments={m.example.segments} className="char-display text-sm leading-relaxed" style={{ color: "var(--ink)" }} />
        <p className="text-xs italic opacity-70" style={{ color: "var(--ink-soft)" }}>{m.example.translation}</p>
        {m.example.note && (
          <p className="text-xs mt-1 opacity-60" style={{ color: "var(--ink-soft)" }}>💡 {m.example.note}</p>
        )}
      </div>
    </div>
  );
}

function MarkersSection() {
  return (
    <section id="markers" className="space-y-4 scroll-mt-24">
      <div className="rounded-[28px] border p-6 sm:p-7"
        style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ACCENT_SOFT}0.15)` }}>
        <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
          時間表現 — Marcadores de tiempo
        </p>
        <h2 className="text-xl font-bold mt-1 mb-2" style={{ color: "var(--ink)" }}>
          Expresiones temporales
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.8 }}>
          Los marcadores temporales son los que orientan el tiempo real de la oración.
          Clave: solo los tiempos <strong>específicos</strong> (horas, días, fechas) llevan la partícula に.
        </p>
      </div>

      {TIME_MARKERS.map((group, gi) => (
        <motion.div key={group.title}
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: gi * 0.06 }}
          className="rounded-[28px] border p-6 sm:p-7"
          style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${group.color}33` }}>
          <p className="text-xs font-bold uppercase tracking-wide mb-3" style={{ color: group.accent }}>{group.title}</p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {group.markers.map(m => (
              <TimeMarkerChip key={m.jp} m={m} color={group.color} accent={group.accent} />
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
}

// ─── 5. Comparisons Section ───────────────────────────────────────────────────

function CompareSection() {
  return (
    <section id="compare" className="space-y-4 scroll-mt-24">
      <div className="rounded-[28px] border p-6 sm:p-7"
        style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ACCENT_SOFT}0.15)` }}>
        <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
          比較 — Comparativas
        </p>
        <h2 className="text-xl font-bold mt-1 mb-2" style={{ color: "var(--ink)" }}>
          Comparando formas lado a lado
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.8 }}>
          Observar el mismo contenido con distintas terminaciones es la forma más efectiva de
          internalizar el sistema temporal.
        </p>
      </div>

      {COMPARISONS.map((g, gi) => (
        <motion.div key={g.title}
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: gi * 0.06 }}
          className="rounded-[28px] border p-6 sm:p-7"
          style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${ACCENT_SOFT}0.18)` }}>
          <h3 className="text-base font-bold mb-1" style={{ color: ACCENT }}>{g.title}</h3>
          <p className="text-xs mb-3" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>{g.description}</p>
          <div className="space-y-2">
            {g.items.map((item, i) => (
              <div key={i} className="rounded-xl p-3 flex items-start gap-3"
                style={{ background: `${ACCENT_SOFT}0.06)`, border: `1px solid ${ACCENT_SOFT}0.12)` }}>
                <span className="rounded-full px-2.5 py-0.5 text-[0.65rem] font-bold shrink-0 mt-0.5"
                  style={{ background: `${ACCENT_SOFT}0.15)`, color: ACCENT }}>{item.label}</span>
                <div className="flex-1 min-w-0">
                  <RubyText segments={item.example.segments} className="char-display text-lg leading-[2.05] sm:text-[1.24rem]" style={{ color: "var(--ink)" }} />
                  <p className="text-xs italic opacity-70" style={{ color: "var(--ink-soft)" }}>{item.example.translation}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
}

function withAlpha(hex: string, alpha: number) {
  const clean = hex.replace("#", "");
  const normalized =
    clean.length === 3
      ? clean
          .split("")
          .map((char) => char + char)
          .join("")
      : clean;

  const r = parseInt(normalized.slice(0, 2), 16);
  const g = parseInt(normalized.slice(2, 4), 16);
  const b = parseInt(normalized.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function ShellCard({
  children,
  color,
  className = "",
}: {
  children: ReactNode;
  color: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[30px] border backdrop-blur-md ${className}`}
      style={{
        background: "rgba(255,255,255,0.78)",
        border: `1px solid ${withAlpha(color, 0.18)}`,
        boxShadow: `0 18px 42px ${withAlpha(color, 0.08)}`,
      }}
    >
      {children}
    </div>
  );
}

function SectionCard({
  eyebrow,
  title,
  description,
  color,
  accent,
  children,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  color: string;
  accent: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <ShellCard color={color} className={className}>
      <div className="border-b px-5 py-4 sm:px-6">
        <div
          className="mb-2 inline-flex items-center rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
          style={{
            color: accent,
            background: withAlpha(color, 0.12),
            border: `1px solid ${withAlpha(color, 0.2)}`,
          }}
        >
          {eyebrow ?? title}
        </div>

        <h2 className="text-xl font-bold leading-tight" style={{ color: "var(--ink)" }}>
          {title}
        </h2>

        {description ? (
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
            {description}
          </p>
        ) : null}
      </div>

      <div className="px-5 py-5 sm:px-6">{children}</div>
    </ShellCard>
  );
}

function StatPill({
  label,
  value,
  color,
  accent,
}: {
  label: string;
  value: string;
  color: string;
  accent: string;
}) {
  return (
    <div
      className="rounded-2xl border px-4 py-3"
      style={{
        background: withAlpha(color, 0.09),
        border: `1px solid ${withAlpha(color, 0.18)}`,
      }}
    >
      <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em]" style={{ color: accent }}>
        {label}
      </p>
      <p className="mt-1 text-lg font-semibold leading-tight" style={{ color: "var(--ink)" }}>
        {value}
      </p>
    </div>
  );
}

function QuickRule({
  jp,
  title,
  detail,
  color,
  accent,
}: {
  jp: string;
  title: string;
  detail: string;
  color: string;
  accent: string;
}) {
  return (
    <div
      className="rounded-[24px] border p-4"
      style={{
        background: withAlpha(color, 0.1),
        border: `1px solid ${withAlpha(color, 0.22)}`,
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className="flex h-14 min-w-[4.25rem] items-center justify-center rounded-2xl px-2"
          style={{
            background: withAlpha(color, 0.16),
            border: `1px solid ${withAlpha(color, 0.28)}`,
          }}
        >
          <span className="char-display whitespace-nowrap text-lg font-bold leading-none" style={{ color: accent }}>
            {jp}
          </span>
        </div>

        <div className="min-w-0">
          <p className="text-sm font-bold uppercase tracking-[0.12em]" style={{ color: accent }}>
            {title}
          </p>
          <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>
            {detail}
          </p>
        </div>
      </div>
    </div>
  );
}

function TabButton({
  active,
  label,
  jp,
  color,
  accent,
  onClick,
}: {
  active: boolean;
  label: string;
  jp: string;
  color: string;
  accent: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-[22px] border px-4 py-3 text-sm font-bold transition-all duration-200 sm:text-[0.95rem]"
      style={{
        background: active ? withAlpha(color, 0.18) : "rgba(255,255,255,0.72)",
        border: `1px solid ${active ? withAlpha(color, 0.5) : "rgba(26,26,46,0.12)"}`,
        color: active ? accent : "var(--ink-soft)",
        boxShadow: active ? `0 12px 28px ${withAlpha(color, 0.12)}` : "none",
      }}
    >
      <span className="char-display block text-[0.7rem] tracking-[0.16em] opacity-80">{jp}</span>
      <span className="mt-1 block">{label}</span>
    </button>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TiempoPage() {
  const [activeTab, setActiveTab] = useState<SectionKey>("base");

  const totalMarkers = useMemo(
    () => TIME_MARKERS.reduce((sum, group) => sum + group.markers.length, 0),
    []
  );

  const totalComparisons = useMemo(
    () => COMPARISONS.reduce((sum, group) => sum + group.items.length, 0),
    []
  );

  return (
    <main
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: "var(--paper)" }}
    >
      <SakuraAnimation />

      <div className="relative z-10 w-full">
        <div className="mx-auto flex w-full justify-center px-4 pb-24 pt-8 sm:px-6 lg:px-8">
          <div className="w-full max-w-[1240px]">
            <Link
              href="/gramatica"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold shadow-sm backdrop-blur transition-all hover:-translate-y-0.5"
              style={{
                color: ACCENT,
                background: "rgba(255,255,255,0.82)",
                borderColor: withAlpha(ACCENT, 0.16),
                boxShadow: `0 10px 24px ${withAlpha(ACCENT, 0.08)}`,
              }}
            >
              <span aria-hidden="true">←</span>
              <span>Gramática</span>
            </Link>

            <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42 }}
                className="relative overflow-hidden lg:col-span-7"
              >
                <ShellCard color={ACCENT} className="h-full p-6 sm:p-7 lg:p-8">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 top-2 select-none char-display"
                    style={{
                      fontSize: "clamp(4.4rem, 10vw, 8rem)",
                      color: withAlpha(ACCENT, 0.08),
                      lineHeight: 1,
                    }}
                  >
                    時制
                  </div>

                  <div
                    className="mb-4 inline-flex items-center rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.18em]"
                    style={{
                      color: ACCENT,
                      background: withAlpha("#EF9A9A", 0.12),
                      border: `1px solid ${withAlpha("#EF9A9A", 0.22)}`,
                    }}
                  >
                    時制 · Tiempo y acciones
                  </div>

                  <h1
                    className="char-display max-w-[12ch] text-4xl font-bold leading-tight sm:text-5xl"
                    style={{ color: "var(--ink)" }}
                  >
                    Tiempo y acciones
                  </h1>

                  <p
                    className="mt-4 max-w-[64ch] text-base leading-relaxed sm:text-lg"
                    style={{ color: "var(--ink-soft)", opacity: 0.8 }}
                  >
                    Esta sección ordena el sistema temporal japonés desde lo más básico hasta
                    lo más delicado: no-pasado, pasado, です, adjetivos, 〜ている y marcadores
                    de tiempo.
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <StatPill
                      label="secciones"
                      value={`${SECTIONS.length} bloques`}
                      color="#EF9A9A"
                      accent={ACCENT}
                    />
                    <StatPill
                      label="marcadores"
                      value={`${totalMarkers} expresiones`}
                      color="#90CAF9"
                      accent="#1565C0"
                    />
                    <StatPill
                      label="comparaciones"
                      value={`${totalComparisons} ejemplos`}
                      color="#A5D6A7"
                      accent="#2E7D32"
                    />
                  </div>
                </ShellCard>
              </motion.div>

              <motion.aside
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: 0.05 }}
                className="lg:col-span-5"
              >
                <ShellCard color="#EF9A9A" className="h-full p-5 sm:p-6">
                  <p
                    className="text-[0.72rem] font-bold uppercase tracking-[0.18em]"
                    style={{ color: ACCENT }}
                  >
                    Diferencias rápidas
                  </p>

                  <h2 className="mt-1 text-2xl font-bold" style={{ color: "var(--ink)" }}>
                    Vista general
                  </h2>

                  <div className="mt-4 space-y-4">
                    <QuickRule
                      jp="過去"
                      title="Pasado"
                      detail="El japonés sí marca pasado de forma morfológica. El cambio va al final de la oración."
                      color="#EF9A9A"
                      accent={ACCENT}
                    />
                    <QuickRule
                      jp="非過去"
                      title="No-pasado"
                      detail="Una misma forma cubre presente y futuro. El contexto temporal decide la lectura."
                      color="#FFCC80"
                      accent="#E65100"
                    />
                    <QuickRule
                      jp="ている"
                      title="Aspecto"
                      detail="No siempre significa progresivo. También puede indicar estado resultante o hábito continuo."
                      color="#80CBC4"
                      accent="#00695C"
                    />
                  </div>
                </ShellCard>
              </motion.aside>
            </section>

            <div className="mt-8">
              <ShellCard color={ACCENT} className="p-3">
                <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
                  {SECTIONS.map((section) => (
                    <TabButton
                      key={section.key}
                      active={activeTab === section.key}
                      label={section.label}
                      jp={section.jp}
                      color="#EF9A9A"
                      accent={ACCENT}
                      onClick={() => setActiveTab(section.key)}
                    />
                  ))}
                </div>
              </ShellCard>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === "base" ? (
                <motion.section
                  key="base"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                  className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_340px]"
                >
                  <div className="space-y-6">
                    <BaseSection />
                  </div>

                  <div className="space-y-6 xl:sticky xl:top-24 xl:self-start">
                    <SectionCard
                      eyebrow="Clave"
                      title="Qué debe quedarte claro"
                      color="#EF9A9A"
                      accent={ACCENT}
                    >
                      <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                        <p>El futuro no tiene forma propia.</p>
                        <p>La parte final decide el tiempo gramatical.</p>
                        <p>No-pasado no significa solo presente.</p>
                      </div>
                    </SectionCard>
                  </div>
                </motion.section>
              ) : null}

              {activeTab === "forms" ? (
                <motion.section
                  key="forms"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                  className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_340px]"
                >
                  <div className="space-y-6">
                    <FormsSection />
                  </div>

                  <div className="space-y-6 xl:sticky xl:top-24 xl:self-start">
                    <SectionCard
                      eyebrow="Resumen"
                      title="Dónde cambia el tiempo"
                      color="#FFCC80"
                      accent="#E65100"
                    >
                      <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                        <p>Verbos: cambian por conjugación.</p>
                        <p>です: tiene sus propias variantes.</p>
                        <p>Adjetivos: también cargan tiempo y polaridad.</p>
                      </div>
                    </SectionCard>
                  </div>
                </motion.section>
              ) : null}

              {activeTab === "uses" ? (
                <motion.section
                  key="uses"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                  className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_340px]"
                >
                  <div className="space-y-6">
                    <UsesSection />
                  </div>

                  <div className="space-y-6 xl:sticky xl:top-24 xl:self-start">
                    <SectionCard
                      eyebrow="Error típico"
                      title="〜ている no es solo progresivo"
                      color="#80CBC4"
                      accent="#00695C"
                    >
                      <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                        <p>Puede expresar acción en curso.</p>
                        <p>Puede expresar estado resultante.</p>
                        <p>Puede sonar a hábito o continuidad según el verbo.</p>
                      </div>
                    </SectionCard>
                  </div>
                </motion.section>
              ) : null}

              {activeTab === "markers" ? (
                <motion.section
                  key="markers"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                  className="mt-8 space-y-6"
                >
                  <MarkersSection />
                </motion.section>
              ) : null}

              {activeTab === "compare" ? (
                <motion.section
                  key="compare"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                  className="mt-8 space-y-6"
                >
                  <CompareSection />
                </motion.section>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}