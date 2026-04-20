//src\app\gramatica\verbos\page.tsx

"use client";

import { useMemo, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CONJUGATION_FORMS, VERB_LIST } from "@/data/grammar/verbs";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";
import { RubyText } from "@/app/components/ui/Ruby";

const ACCENT = "#5D4037";
const SOFT = "#D7CCC8";
const GODAN = "#FFAB40";
const ICHIDAN = "#81C784";
const IRREGULAR = "#90CAF9";

type VerbTab = "groups" | "forms" | "path";

const GROUPS = [
  {
    href: "/gramatica/verbos/grupos/godan",
    key: "godan",
    jp: "五段",
    ruby: "ごだん",
    label: "Grupo 1 — Godan",
    desc: "Verbos con varios cambios de morfema. Terminan en う、く、す、つ、ぬ、ぶ、む、る.",
    color: GODAN,
    accent: "#E65100",
    count: VERB_LIST.filter((v) => v.group === "godan").length,
    examples: [
      { text: "書", ruby: "か" },
      { text: "く" },
      { text: "話", ruby: "はな" },
      { text: "す" },
      { text: "読", ruby: "よ" },
      { text: "む" },
    ],
  },
  {
    href: "/gramatica/verbos/grupos/ichidan",
    key: "ichidan",
    jp: "一段",
    ruby: "いちだん",
    label: "Grupo 2 — Ichidan",
    desc: "Verbos más regulares. Normalmente terminan en る precedido de い o え.",
    color: ICHIDAN,
    accent: "#2E7D32",
    count: VERB_LIST.filter((v) => v.group === "ichidan").length,
    examples: [
      { text: "食", ruby: "た" },
      { text: "べる" },
      { text: "見", ruby: "み" },
      { text: "る" },
      { text: "起", ruby: "お" },
      { text: "きる" },
    ],
  },
  {
    href: "/gramatica/verbos/grupos/irregulares",
    key: "irregular",
    jp: "変格",
    ruby: "へんかく",
    label: "Grupo 3 — Irregulares",
    desc: "Solo dos verbos base: する y くる. Sus cambios no siguen el patrón normal.",
    color: IRREGULAR,
    accent: "#1565C0",
    count: VERB_LIST.filter((v) => v.group === "irregular").length,
    examples: [
      { text: "する" },
      { text: "・" },
      { text: "来", ruby: "く" },
      { text: "る" },
    ],
  },
] as const;

const TABS: { key: VerbTab; label: string; jp: string }[] = [
  { key: "groups", label: "Grupos", jp: "動詞群" },
  { key: "forms", label: "Conjugaciones", jp: "活用形" },
  { key: "path", label: "Ruta", jp: "学習順" },
];

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
        boxShadow: `0 18px 44px ${withAlpha(color, 0.08)}`,
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
          <p
            className="mt-2 text-sm leading-relaxed"
            style={{ color: "var(--ink-soft)", opacity: 0.78 }}
          >
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

function GroupCard({
  group,
}: {
  group: (typeof GROUPS)[number];
}) {
  return (
    <Link
      href={group.href}
      className="group relative block h-full overflow-hidden rounded-[28px] border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6"
      style={{
        background: "rgba(255,255,255,0.86)",
        border: `1px solid ${withAlpha(group.color, 0.24)}`,
        boxShadow: `0 14px 32px ${withAlpha(group.color, 0.08)}`,
      }}
    >
      <div
        className="absolute -right-5 -top-5 h-24 w-24 rounded-full blur-2xl opacity-40 transition-opacity duration-300 group-hover:opacity-70"
        style={{ background: group.color }}
      />

      <div
        className="absolute inset-x-0 top-0 h-[2px]"
        style={{ background: `linear-gradient(90deg, ${group.accent}, ${group.color})` }}
      />

      <div className="relative z-10">
        <RubyText
          segments={[{ text: group.jp, ruby: group.ruby }]}
          className="char-display text-[2.2rem] font-bold leading-[1.6]"
          style={{ color: group.accent }}
          rtStyle={{ fontSize: "0.42em", fontWeight: 700, opacity: 0.88 }}
        />

        <p className="mt-2 text-lg font-bold" style={{ color: "var(--ink)" }}>
          {group.label}
        </p>

        <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
          {group.desc}
        </p>

        <div
          className="mt-4 rounded-2xl border p-3"
          style={{
            background: withAlpha(group.color, 0.08),
            border: `1px solid ${withAlpha(group.color, 0.16)}`,
          }}
        >
          <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.14em]" style={{ color: group.accent }}>
            Ejemplos
          </p>

          <RubyText
            segments={group.examples}
            className="char-display text-lg leading-[2.05]"
            style={{ color: "var(--ink)" }}
            rtStyle={{ fontSize: "0.52em", fontWeight: 700, opacity: 0.88 }}
          />
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span
            className="rounded-full px-3 py-1 text-sm font-bold"
            style={{
              background: withAlpha(group.color, 0.16),
              color: group.accent,
              border: `1px solid ${withAlpha(group.color, 0.24)}`,
            }}
          >
            {group.count} verbos
          </span>

          <span
            className="text-base opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
            style={{ color: group.accent }}
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

function FormCard({
  form,
}: {
  form: (typeof CONJUGATION_FORMS)[number];
}) {
  const color = form.color ?? "#CE93D8";
  const accent = color;

  return (
    <Link
      href={`/gramatica/verbos/conjugaciones/${form.key}`}
      className="group block rounded-[24px] border p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-5"
      style={{
        background: "rgba(255,255,255,0.84)",
        border: `1px solid ${withAlpha(color, 0.22)}`,
        boxShadow: `0 10px 24px ${withAlpha(color, 0.07)}`,
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-base font-bold"
          style={{
            background: withAlpha(color, 0.14),
            border: `1px solid ${withAlpha(color, 0.24)}`,
            color: accent,
          }}
        >
          {form.title?.slice(0, 1) ?? "形"}
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-base font-bold leading-snug" style={{ color: "var(--ink)" }}>
            {form.title}
          </p>

          <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.76 }}>
            {form.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function VerbosPage() {
  const [activeTab, setActiveTab] = useState<VerbTab>("groups");

  const totalVerbs = useMemo(() => VERB_LIST.length, []);
  const totalForms = useMemo(() => CONJUGATION_FORMS.length, []);
  const n5Forms = useMemo(() => CONJUGATION_FORMS.filter((f) => f.level === "N5"), []);
  const n4Forms = useMemo(() => CONJUGATION_FORMS.filter((f) => f.level === "N4"), []);
  const n3Forms = useMemo(() => CONJUGATION_FORMS.filter((f) => f.level === "N3"), []);

  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ background: "var(--paper)" }}>
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
                      fontSize: "clamp(4.6rem, 10vw, 8rem)",
                      color: withAlpha(ACCENT, 0.08),
                      lineHeight: 1,
                    }}
                  >
                    動詞
                  </div>

                  <div
                    className="mb-4 inline-flex items-center rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.18em]"
                    style={{
                      color: ACCENT,
                      background: withAlpha(SOFT, 0.16),
                      border: `1px solid ${withAlpha(SOFT, 0.28)}`,
                    }}
                  >
                    動詞 · Verbos japoneses
                  </div>

                  <h1
                    className="char-display max-w-[12ch] text-4xl font-bold leading-tight sm:text-5xl"
                    style={{ color: "var(--ink)" }}
                  >
                    Verbos en Japonés
                    <span className="ml-3 text-2xl font-normal sm:text-3xl" style={{ color: ACCENT }}>
                      動詞
                    </span>
                  </h1>

                  <p
                    className="mt-4 max-w-[64ch] text-base leading-relaxed sm:text-lg"
                    style={{ color: "var(--ink-soft)", opacity: 0.8 }}
                  >
                    Los verbos japoneses se entienden bien cuando separas tres cosas:
                    <span style={{ color: ACCENT, fontWeight: 700 }}> grupo</span>,
                    <span style={{ color: ACCENT, fontWeight: 700 }}> morfema</span> y
                    <span style={{ color: ACCENT, fontWeight: 700 }}> forma de conjugación</span>.
                    Esta página te deja ver la estructura general antes de entrar a cada detalle.
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <StatPill label="verbos" value={`${totalVerbs} entradas`} color={SOFT} accent={ACCENT} />
                    <StatPill label="formas" value={`${totalForms} conjugaciones`} color={GODAN} accent="#E65100" />
                    <StatPill label="grupos" value="3 familias" color={IRREGULAR} accent="#1565C0" />
                  </div>

                  <div
                    className="mt-6 rounded-[26px] border p-4 sm:p-5"
                    style={{
                      background: withAlpha(SOFT, 0.1),
                      border: `1px solid ${withAlpha(SOFT, 0.22)}`,
                    }}
                  >
                    <p className="mb-2 text-sm font-bold" style={{ color: ACCENT }}>
                      💡 Concepto clave — El morfema
                    </p>

                    <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.84 }}>
                      El kanji o la raíz se mantiene. La parte que realmente muta al conjugar es el
                      morfema final. Por eso reconocer el grupo del verbo cambia por completo la forma
                      en que lo transformas.
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {[
                        {
                          label: "書く",
                          segments: [
                            { text: "書", ruby: "か" },
                            { text: "く" },
                          ],
                          note: "raíz + く",
                        },
                        {
                          label: "食べる",
                          segments: [
                            { text: "食", ruby: "た" },
                            { text: "べる" },
                          ],
                          note: "raíz + る",
                        },
                        {
                          label: "する",
                          segments: [{ text: "する" }],
                          note: "irregular",
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="rounded-2xl border px-3.5 py-2.5"
                          style={{
                            background: "rgba(255,255,255,0.78)",
                            border: `1px solid ${withAlpha(ACCENT, 0.12)}`,
                          }}
                        >
                          <RubyText
                            segments={item.segments}
                            className="char-display text-lg font-bold leading-[1.9]"
                            style={{ color: ACCENT }}
                            rtStyle={{ fontSize: "0.5em", fontWeight: 700, opacity: 0.88 }}
                          />
                          <p className="mt-1 text-xs" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>
                            {item.note}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/gramatica/verbos/conjugaciones"
                      className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-bold text-white transition-all hover:brightness-110"
                      style={{ background: "linear-gradient(135deg, #FFAB40, #5D4037)" }}
                    >
                      Ver todas las conjugaciones →
                    </Link>

                    <Link
                      href="/gramatica/verbos/quiz"
                      className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-semibold transition-all hover:bg-white"
                      style={{
                        border: `1px solid ${withAlpha(ACCENT, 0.18)}`,
                        color: ACCENT,
                        background: "rgba(255,255,255,0.64)",
                      }}
                    >
                      ◎ Practicar con quiz
                    </Link>
                  </div>
                </ShellCard>
              </motion.div>

              <motion.aside
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: 0.05 }}
                className="lg:col-span-5"
              >
                <ShellCard color={SOFT} className="h-full p-5 sm:p-6">
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
                      jp="五段"
                      title="Godan"
                      detail="El morfema cambia de fila según la forma: ます, ない, て, た, potencial, pasiva y más."
                      color={GODAN}
                      accent="#E65100"
                    />
                    <QuickRule
                      jp="一段"
                      title="Ichidan"
                      detail="La raíz casi no se toca. Normalmente se quita る y se agrega la terminación nueva."
                      color={ICHIDAN}
                      accent="#2E7D32"
                    />
                    <QuickRule
                      jp="変格"
                      title="Irregulares"
                      detail="Se memorizan aparte. Son pocos, pero aparecen muchísimo y arrastran muchas formas clave."
                      color={IRREGULAR}
                      accent="#1565C0"
                    />
                  </div>
                </ShellCard>
              </motion.aside>
            </section>

            <div className="mt-8 sticky top-[86px] z-30">
              <ShellCard color={ACCENT} className="p-3">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {TABS.map((tab) => (
                    <TabButton
                      key={tab.key}
                      active={activeTab === tab.key}
                      label={tab.label}
                      jp={tab.jp}
                      color={SOFT}
                      accent={ACCENT}
                      onClick={() => setActiveTab(tab.key)}
                    />
                  ))}
                </div>
              </ShellCard>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === "groups" ? (
                <motion.section
                  key="groups"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                  className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_340px]"
                >
                  <div className="space-y-6">
                    <SectionCard
                      eyebrow="動詞群 — Los tres grupos"
                      title="Clasificación base"
                      description="Antes de conjugar, lo primero es identificar a qué grupo pertenece el verbo."
                      color={SOFT}
                      accent={ACCENT}
                    >
                      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                        {GROUPS.map((group, index) => (
                          <motion.div
                            key={group.key}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <GroupCard group={group} />
                          </motion.div>
                        ))}
                      </div>
                    </SectionCard>
                  </div>

                  <div className="space-y-6 xl:sticky xl:top-[170px] xl:self-start">
                    <SectionCard
                      eyebrow="Pista rápida"
                      title="Cómo distinguirlos"
                      color={SOFT}
                      accent={ACCENT}
                    >
                      <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                        <p>Si termina en する o くる, es irregular.</p>
                        <p>Si termina en る tras い / え, puede ser ichidan, pero no siempre.</p>
                        <p>Si no entra limpio en ichidan, trátalo como godan.</p>
                      </div>
                    </SectionCard>

                    <SectionCard
                      eyebrow="Consejo"
                      title="No memorices aislado"
                      color={GODAN}
                      accent="#E65100"
                    >
                      <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                        <p>Aprende el verbo junto con su grupo.</p>
                        <p>Eso evita errores en ない, て, た y potencial.</p>
                        <p>Después las conjugaciones se vuelven mucho más mecánicas.</p>
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
                  className="mt-8 space-y-6"
                >
                  <SectionCard
                    eyebrow="活用形 — Conjugaciones"
                    title="Panorama por nivel"
                    description="Aquí están agrupadas por nivel para que la lectura no se sienta como una lista infinita."
                    color={SOFT}
                    accent={ACCENT}
                  >
                    <div className="space-y-6">
                      {[
                        { label: "Nivel N5 — Básico", forms: n5Forms, color: GODAN, accent: "#E65100" },
                        { label: "Nivel N4 — Intermedio", forms: n4Forms, color: ICHIDAN, accent: "#2E7D32" },
                        { label: "Nivel N3 — Avanzado", forms: n3Forms, color: IRREGULAR, accent: "#1565C0" },
                      ].map((block) => (
                        <div key={block.label}>
                          <div className="mb-3 flex items-center gap-3">
                            <div
                              className="h-2 w-2 rounded-full"
                              style={{ background: block.accent }}
                            />
                            <p className="text-[0.78rem] font-bold uppercase tracking-[0.16em]" style={{ color: block.accent }}>
                              {block.label}
                            </p>
                          </div>

                          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                            {block.forms.map((form, index) => (
                              <motion.div
                                key={form.key}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.03 }}
                              >
                                <FormCard form={form} />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </SectionCard>
                </motion.section>
              ) : null}

              {activeTab === "path" ? (
                <motion.section
                  key="path"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                  className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_340px]"
                >
                  <div className="space-y-6">
                    <SectionCard
                      eyebrow="学習順 — Ruta"
                      title="Cómo estudiar verbos sin marearte"
                      description="Si intentas memorizar todas las formas a la vez, la página se vuelve pesada. Mejor dividirla en capas."
                      color={SOFT}
                      accent={ACCENT}
                    >
                      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                        {[
                          {
                            step: "01",
                            title: "Reconocer el grupo",
                            text: "Antes de conjugar, asegúrate de distinguir si el verbo es godan, ichidan o irregular.",
                            color: GODAN,
                            accent: "#E65100",
                          },
                          {
                            step: "02",
                            title: "Aprender las formas base",
                            text: "Empieza por ます, ない, て y た. Son las que más sostienen el resto del sistema.",
                            color: ICHIDAN,
                            accent: "#2E7D32",
                          },
                          {
                            step: "03",
                            title: "Aplicar con práctica",
                            text: "Después lleva esas formas a frases y quiz. Ahí realmente se fijan.",
                            color: IRREGULAR,
                            accent: "#1565C0",
                          },
                        ].map((item) => (
                          <div
                            key={item.step}
                            className="rounded-[26px] border p-5"
                            style={{
                              background: "rgba(255,255,255,0.84)",
                              border: `1px solid ${withAlpha(item.color, 0.22)}`,
                              boxShadow: `0 12px 28px ${withAlpha(item.color, 0.08)}`,
                            }}
                          >
                            <div
                              className="mb-3 inline-flex rounded-full px-3 py-1 text-xs font-bold"
                              style={{
                                background: withAlpha(item.color, 0.16),
                                color: item.accent,
                                border: `1px solid ${withAlpha(item.color, 0.24)}`,
                              }}
                            >
                              Paso {item.step}
                            </div>

                            <h3 className="text-lg font-bold" style={{ color: "var(--ink)" }}>
                              {item.title}
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
                              {item.text}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                          href="/gramatica/verbos/grupos/godan"
                          className="rounded-full px-4 py-2 text-sm font-bold text-white transition-all hover:brightness-110"
                          style={{ background: "linear-gradient(135deg, #FFAB40, #E65100)" }}
                        >
                          Empezar por grupos
                        </Link>

                        <Link
                          href="/gramatica/verbos/conjugaciones"
                          className="rounded-full px-4 py-2 text-sm font-bold text-white transition-all hover:brightness-110"
                          style={{ background: "linear-gradient(135deg, #8D6E63, #5D4037)" }}
                        >
                          Ir a conjugaciones
                        </Link>

                        <Link
                          href="/gramatica/verbos/quiz"
                          className="rounded-full px-4 py-2 text-sm font-bold text-white transition-all hover:brightness-110"
                          style={{ background: "linear-gradient(135deg, #90CAF9, #1565C0)" }}
                        >
                          Abrir quiz
                        </Link>
                      </div>
                    </SectionCard>
                  </div>

                  <div className="space-y-6 xl:sticky xl:top-[170px] xl:self-start">
                    <SectionCard
                      eyebrow="Meta"
                      title="Qué debería quedarte"
                      color={SOFT}
                      accent={ACCENT}
                    >
                      <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                        <p>Que no todos los verbos cambian igual.</p>
                        <p>Que el grupo determina casi toda la conjugación.</p>
                        <p>Que aprender formas sin contexto sirve menos que aplicarlas en frases.</p>
                      </div>
                    </SectionCard>
                  </div>
                </motion.section>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}