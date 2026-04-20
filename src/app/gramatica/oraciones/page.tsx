// src/app/gramatica/oraciones/page.tsx
"use client";

import { useMemo, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import { RubyText, type RubySegment } from "@/app/components/ui/Ruby";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";

const ACCENT = "#FB8C00";
const SOFT = "#FFCC80";
const DEEP = "#E65100";
const COMP_COLOR = "#90CAF9";
const TYPE_COLOR = "#AED581";

type TabKey = "order" | "components" | "types" | "builder";

type BuilderOption = {
  id: string;
  label: string;
  jp: string;
  translation: string;
};

type BuilderState = {
  time: BuilderOption | null;
  subject: BuilderOption | null;
  place: BuilderOption | null;
  object: BuilderOption | null;
  verb: BuilderOption | null;
};

const TABS: {
  key: TabKey;
  label: string;
  jp: string;
}[] = [
  { key: "order", label: "Orden SOV", jp: "語順" },
  { key: "components", label: "Componentes", jp: "品詞" },
  { key: "types", label: "3 tipos", jp: "文型" },
  { key: "builder", label: "Constructor", jp: "組み立て" },
];

const PARTS = [
  {
    jp: "名詞",
    ruby: "めいし",
    label: "Sustantivo",
    description: "Palabra que nombra persona, objeto, lugar o idea.",
    color: "#90CAF9",
    accent: "#1565C0",
    example: [
      { text: "学生", ruby: "がくせい" },
      { text: "・" },
      { text: "本", ruby: "ほん" },
      { text: "・" },
      { text: "学校", ruby: "がっこう" },
    ] satisfies RubySegment[],
  },
  {
    jp: "動詞",
    ruby: "どうし",
    label: "Verbo",
    description: "Expresa acción, proceso o estado. En japonés suele ir al final.",
    color: "#FFCC80",
    accent: "#E65100",
    example: [
      { text: "食", ruby: "た" },
      { text: "べる・" },
      { text: "行", ruby: "い" },
      { text: "く・" },
      { text: "見", ruby: "み" },
      { text: "る" },
    ] satisfies RubySegment[],
  },
  {
    jp: "い形容詞",
    ruby: "いけいようし",
    label: "Adjetivo い",
    description: "Describe directamente a un sustantivo y se conjuga por sí mismo.",
    color: "#CE93D8",
    accent: "#6A1B9A",
    example: [
      { text: "大", ruby: "おお" },
      { text: "きい・" },
      { text: "新", ruby: "あたら" },
      { text: "しい" },
    ] satisfies RubySegment[],
  },
  {
    jp: "な形容詞",
    ruby: "なけいようし",
    label: "Adjetivo な",
    description: "Otro grupo de adjetivos; antes del sustantivo usan な.",
    color: "#80CBC4",
    accent: "#00695C",
    example: [
      { text: "静", ruby: "しず" },
      { text: "か・" },
      { text: "有名", ruby: "ゆうめい" },
    ] satisfies RubySegment[],
  },
  {
    jp: "副詞",
    ruby: "ふくし",
    label: "Adverbio",
    description: "Modifica verbos, adjetivos u otras expresiones.",
    color: "#F48FB1",
    accent: "#C2185B",
    example: [
      { text: "とても・" },
      { text: "ゆっくり・" },
      { text: "毎日", ruby: "まいにち" },
    ] satisfies RubySegment[],
  },
  {
    jp: "助詞",
    ruby: "じょし",
    label: "Partícula",
    description: "Marca la función de cada palabra dentro de la oración.",
    color: "#FFAB91",
    accent: "#D84315",
    example: [
      { text: "は・が・を・に・で・へ・と" },
    ] satisfies RubySegment[],
  },
  {
    jp: "連体詞",
    ruby: "れんたいし",
    label: "Determinante",
    description: "Palabra que modifica directamente a un sustantivo.",
    color: "#B39DDB",
    accent: "#5E35B1",
    example: [
      { text: "この・その・あの" },
    ] satisfies RubySegment[],
  },
  {
    jp: "接続詞",
    ruby: "せつぞくし",
    label: "Conjunción",
    description: "Conecta oraciones o ideas.",
    color: "#A5D6A7",
    accent: "#2E7D32",
    example: [
      { text: "でも・そして・だから" },
    ] satisfies RubySegment[],
  },
  {
    jp: "感動詞",
    ruby: "かんどうし",
    label: "Interjección",
    description: "Expresa emoción, reacción o respuesta breve.",
    color: "#FFCDD2",
    accent: "#C62828",
    example: [
      { text: "あっ・はい・ええ" },
    ] satisfies RubySegment[],
  },
  {
    jp: "助動詞",
    ruby: "じょどうし",
    label: "Auxiliar",
    description: "Se añade a otras palabras para expresar matices gramaticales.",
    color: "#B0BEC5",
    accent: "#37474F",
    example: [
      { text: "です・ます・ない・たい" },
    ] satisfies RubySegment[],
  },
] as const;

const SENTENCE_TYPES = [
  {
    title: "Afirmativa",
    jp: "肯定文",
    accent: "#2E7D32",
    color: "#A5D6A7",
    description: "Expresa un hecho o acción como verdadera.",
    example: [
      { text: "私", ruby: "わたし" },
      { text: "は" },
      { text: "本", ruby: "ほん" },
      { text: "を" },
      { text: "読", ruby: "よ" },
      { text: "みます。" },
    ] satisfies RubySegment[],
    translation: "Yo leo un libro.",
  },
  {
    title: "Negativa",
    jp: "否定文",
    accent: "#C62828",
    color: "#EF9A9A",
    description: "Niega una acción o un estado.",
    example: [
      { text: "私", ruby: "わたし" },
      { text: "は" },
      { text: "本", ruby: "ほん" },
      { text: "を" },
      { text: "読", ruby: "よ" },
      { text: "みません。" },
    ] satisfies RubySegment[],
    translation: "Yo no leo un libro.",
  },
  {
    title: "Interrogativa",
    jp: "疑問文",
    accent: "#1565C0",
    color: "#90CAF9",
    description: "Pregunta algo. Muchas veces termina con か.",
    example: [
      { text: "何", ruby: "なに" },
      { text: "を" },
      { text: "食", ruby: "た" },
      { text: "べますか。" },
    ] satisfies RubySegment[],
    translation: "¿Qué comes?",
  },
] as const;

const BUILDER_OPTIONS = {
  time: [
    { id: "none", label: "Sin tiempo", jp: "", translation: "" },
    { id: "today", label: "Hoy", jp: "今日 は", translation: "hoy" },
    { id: "tomorrow", label: "Mañana", jp: "明日 は", translation: "mañana" },
    { id: "everyday", label: "Todos los días", jp: "毎日 は", translation: "todos los días" },
  ],
  subject: [
    { id: "watashi", label: "Yo", jp: "私 は", translation: "yo" },
    { id: "tanaka", label: "Tanaka", jp: "田中さん は", translation: "Tanaka" },
    { id: "gakusei", label: "El estudiante", jp: "学生 は", translation: "el estudiante" },
  ],
  place: [
    { id: "none", label: "Sin lugar", jp: "", translation: "" },
    { id: "school", label: "En la escuela", jp: "学校 で", translation: "en la escuela" },
    { id: "home", label: "En casa", jp: "家 で", translation: "en casa" },
    { id: "cafe", label: "En el café", jp: "カフェ で", translation: "en el café" },
  ],
  object: [
    { id: "bread", label: "Pan", jp: "パン を", translation: "pan" },
    { id: "book", label: "Libro", jp: "本 を", translation: "libro" },
    { id: "coffee", label: "Café", jp: "コーヒー を", translation: "café" },
  ],
  verb: [
    { id: "eat", label: "Comer", jp: "食べます", translation: "como" },
    { id: "read", label: "Leer", jp: "読みます", translation: "leo" },
    { id: "drink", label: "Beber", jp: "飲みます", translation: "bebo" },
  ],
} satisfies Record<keyof BuilderState, BuilderOption[]>;

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
  text,
  color,
  accent,
}: {
  jp: string;
  title: string;
  text: string;
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
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function StickyTabs({
  active,
  onChange,
}: {
  active: TabKey;
  onChange: (next: TabKey) => void;
}) {
  return (
    <div className="sticky top-[84px] z-30 mt-8">
      <div
        className="rounded-[28px] border p-2 backdrop-blur-md"
        style={{
          background: "rgba(255,255,255,0.84)",
          borderColor: withAlpha(ACCENT, 0.14),
          boxShadow: `0 12px 26px ${withAlpha(ACCENT, 0.08)}`,
        }}
      >
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {TABS.map((tab) => {
            const isActive = active === tab.key;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => onChange(tab.key)}
                className="relative rounded-[22px] px-4 py-3 text-center transition-all duration-300"
              >
                {isActive ? (
                  <motion.div
                    layoutId="sentence-tab-active"
                    className="absolute inset-0 rounded-[22px]"
                    style={{
                      background: `linear-gradient(135deg, ${withAlpha(SOFT, 0.28)} 0%, ${withAlpha(
                        ACCENT,
                        0.16
                      )} 100%)`,
                      border: `1px solid ${withAlpha(ACCENT, 0.22)}`,
                      boxShadow: `0 10px 22px ${withAlpha(ACCENT, 0.1)}`,
                    }}
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                ) : null}

                <div className="relative z-10 flex flex-col items-center gap-1">
                  <span
                    className="char-display text-[0.72rem] font-bold tracking-[0.16em]"
                    style={{ color: isActive ? DEEP : "rgba(45,45,68,0.55)" }}
                  >
                    {tab.jp}
                  </span>
                  <span
                    className="text-sm font-bold sm:text-[0.95rem]"
                    style={{ color: isActive ? DEEP : "var(--ink-soft)" }}
                  >
                    {tab.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ComparisonCard({
  title,
  example,
  translation,
  accent,
  color,
}: {
  title: string;
  example: RubySegment[];
  translation: string;
  accent: string;
  color: string;
}) {
  return (
    <div
      className="rounded-[26px] border p-5"
      style={{
        background: "rgba(255,255,255,0.84)",
        border: `1px solid ${withAlpha(color, 0.24)}`,
        boxShadow: `0 12px 28px ${withAlpha(color, 0.08)}`,
      }}
    >
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em]" style={{ color: accent }}>
        {title}
      </p>

      <RubyText
        segments={example}
        className="char-display text-xl leading-[2.15] sm:text-[1.5rem]"
        style={{ color: "var(--ink)" }}
        rtStyle={{ fontSize: "0.58em", opacity: 0.9, fontWeight: 700 }}
      />

      <p className="mt-3 text-base italic" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
        {translation}
      </p>
    </div>
  );
}

function PartCard({
  part,
}: {
  part: (typeof PARTS)[number];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="overflow-hidden rounded-[24px] border"
      style={{
        background: "rgba(255,255,255,0.86)",
        borderColor: withAlpha(part.color, 0.24),
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start gap-4 px-4 py-4 text-left sm:px-5"
        style={{ background: withAlpha(part.color, 0.08) }}
      >
        <div
          className="flex min-h-[58px] min-w-[58px] items-center justify-center rounded-2xl px-2"
          style={{
            background: withAlpha(part.color, 0.15),
            border: `1px solid ${withAlpha(part.color, 0.24)}`,
          }}
        >
          <RubyText
            segments={[{ text: part.jp, ruby: part.ruby }]}
            className="char-display text-lg font-bold leading-[1.85]"
            style={{ color: part.accent }}
            rtStyle={{ fontSize: "0.52em", fontWeight: 700, opacity: 0.9 }}
          />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-lg font-bold" style={{ color: "var(--ink)" }}>
            {part.label}
          </p>
          <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
            {part.description}
          </p>
        </div>

        <span
          className="mt-1 shrink-0 text-sm transition-transform duration-200"
          style={{
            color: part.accent,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          ▾
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 sm:px-5">
              <div
                className="rounded-2xl border p-4"
                style={{
                  background: withAlpha(part.color, 0.06),
                  borderColor: withAlpha(part.color, 0.14),
                }}
              >
                <p className="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.14em]" style={{ color: part.accent }}>
                  Ejemplos
                </p>

                <RubyText
                  segments={part.example}
                  className="char-display text-xl leading-[2.1] sm:text-[1.4rem]"
                  style={{ color: "var(--ink)" }}
                  rtStyle={{ fontSize: "0.56em", fontWeight: 700, opacity: 0.88 }}
                />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function TypeCard({
  item,
}: {
  item: (typeof SENTENCE_TYPES)[number];
}) {
  return (
    <div
      className="rounded-[28px] border p-5"
      style={{
        background: "rgba(255,255,255,0.84)",
        border: `1px solid ${withAlpha(item.color, 0.22)}`,
        boxShadow: `0 12px 30px ${withAlpha(item.color, 0.08)}`,
      }}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="char-display text-[0.78rem] font-bold tracking-[0.16em]" style={{ color: item.accent }}>
            {item.jp}
          </p>
          <h3 className="mt-1 text-xl font-bold" style={{ color: "var(--ink)" }}>
            {item.title}
          </h3>
        </div>
      </div>

      <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.8 }}>
        {item.description}
      </p>

      <div
        className="mt-4 rounded-2xl border p-4"
        style={{
          background: withAlpha(item.color, 0.08),
          borderColor: withAlpha(item.color, 0.16),
        }}
      >
        <RubyText
          segments={item.example}
          className="char-display text-xl leading-[2.1] sm:text-[1.4rem]"
          style={{ color: "var(--ink)" }}
          rtStyle={{ fontSize: "0.56em", fontWeight: 700, opacity: 0.88 }}
        />

        <p className="mt-3 text-base italic" style={{ color: "var(--ink-soft)", opacity: 0.76 }}>
          {item.translation}
        </p>
      </div>
    </div>
  );
}

function BuilderChoiceGroup({
  title,
  options,
  selected,
  onSelect,
  color,
  accent,
}: {
  title: string;
  options: BuilderOption[];
  selected: BuilderOption | null;
  onSelect: (next: BuilderOption) => void;
  color: string;
  accent: string;
}) {
  return (
    <div>
      <p className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.16em]" style={{ color: accent }}>
        {title}
      </p>

      <div className="flex flex-wrap gap-2.5">
        {options.map((option) => {
          const active = selected?.id === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelect(option)}
              className="rounded-full border px-3.5 py-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
              style={{
                color: active ? accent : "var(--ink-soft)",
                background: active ? withAlpha(color, 0.16) : "rgba(255,255,255,0.8)",
                borderColor: active ? withAlpha(color, 0.38) : "rgba(26,26,46,0.12)",
                boxShadow: active ? `0 10px 20px ${withAlpha(color, 0.12)}` : "none",
              }}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function BuilderSentence({
  state,
}: {
  state: BuilderState;
}) {
  const jp = [
    state.time?.jp || "＿＿",
    state.subject?.jp || "＿＿",
    state.place?.jp || "＿＿",
    state.object?.jp || "＿＿",
    state.verb?.jp || "＿＿",
  ]
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  const translation = [
    state.time?.translation,
    state.subject?.translation,
    state.place?.translation,
    state.verb?.translation,
    state.object?.translation ? `${state.object.translation}` : "",
  ]
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  const completed = Boolean(
    state.subject &&
      state.object &&
      state.verb
  );

  return (
    <div className="space-y-4">
      <div
        className="rounded-[28px] border p-5 sm:p-6"
        style={{
          background: withAlpha(SOFT, 0.08),
          borderColor: withAlpha(SOFT, 0.18),
        }}
      >
        <p className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.16em]" style={{ color: DEEP }}>
          Oración en japonés
        </p>

        <div
          className="rounded-[24px] border px-4 py-5 sm:px-5"
          style={{
            background: "rgba(255,255,255,0.9)",
            borderColor: withAlpha(ACCENT, 0.14),
          }}
        >
          <p className="char-display text-2xl leading-[1.9] sm:text-[1.8rem]" style={{ color: "var(--ink)" }}>
            {jp || "＿＿"}
          </p>
        </div>

        <p className="mt-4 text-base italic leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
          {completed ? translation : "Selecciona sujeto, objeto y verbo para completar la estructura base."}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
        {[
          { label: "Tiempo", value: state.time?.label ?? "vacío" },
          { label: "Sujeto", value: state.subject?.label ?? "vacío" },
          { label: "Lugar", value: state.place?.label ?? "vacío" },
          { label: "Objeto", value: state.object?.label ?? "vacío" },
          { label: "Verbo", value: state.verb?.label ?? "vacío" },
        ].map((slot) => (
          <div
            key={slot.label}
            className="rounded-2xl border px-4 py-3"
            style={{
              background: "rgba(255,255,255,0.84)",
              borderColor: "rgba(26,26,46,0.08)",
            }}
          >
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em]" style={{ color: DEEP }}>
              {slot.label}
            </p>
            <p className="mt-1 text-sm font-semibold" style={{ color: "var(--ink)" }}>
              {slot.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function OracionesPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("order");

  const [builder, setBuilder] = useState<BuilderState>({
    time: BUILDER_OPTIONS.time[0],
    subject: BUILDER_OPTIONS.subject[0],
    place: BUILDER_OPTIONS.place[0],
    object: BUILDER_OPTIONS.object[0],
    verb: BUILDER_OPTIONS.verb[0],
  });

  const totalParts = PARTS.length;

  const completedSlots = useMemo(() => {
    return Object.values(builder).filter((v) => v && v.id !== "none").length;
  }, [builder]);

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
                      fontSize: "clamp(4.2rem, 10vw, 8rem)",
                      color: withAlpha(ACCENT, 0.08),
                      lineHeight: 1,
                    }}
                  >
                    文
                  </div>

                  <div
                    className="mb-4 inline-flex items-center rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.18em]"
                    style={{
                      color: DEEP,
                      background: withAlpha(SOFT, 0.14),
                      border: `1px solid ${withAlpha(SOFT, 0.24)}`,
                    }}
                  >
                    文法 · Oraciones y estructura
                  </div>

                  <h1
                    className="char-display max-w-[12ch] text-4xl font-bold leading-tight sm:text-5xl"
                    style={{ color: "var(--ink)" }}
                  >
                    Oraciones y estructura
                  </h1>

                  <p
                    className="mt-4 max-w-[64ch] text-base leading-relaxed sm:text-lg"
                    style={{ color: "var(--ink-soft)", opacity: 0.8 }}
                  >
                    Aquí se entiende cómo se arma una oración japonesa desde la base:
                    orden <span style={{ color: DEEP, fontWeight: 700 }}>Sujeto → Objeto → Verbo</span>,
                    función de cada palabra y construcción paso a paso.
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <StatPill
                      label="orden base"
                      value="SOV"
                      color={SOFT}
                      accent={DEEP}
                    />
                    <StatPill
                      label="componentes"
                      value={`${totalParts} categorías`}
                      color={COMP_COLOR}
                      accent="#1565C0"
                    />
                    <StatPill
                      label="constructor"
                      value={`${completedSlots}/5 piezas`}
                      color={TYPE_COLOR}
                      accent="#558B2F"
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
                <ShellCard color={SOFT} className="h-full p-5 sm:p-6">
                  <p
                    className="text-[0.72rem] font-bold uppercase tracking-[0.18em]"
                    style={{ color: DEEP }}
                  >
                    Diferencias rápidas
                  </p>

                  <h2 className="mt-1 text-2xl font-bold" style={{ color: "var(--ink)" }}>
                    Vista general
                  </h2>

                  <div className="mt-4 space-y-4">
                    <QuickRule
                      jp="SOV"
                      title="Orden base"
                      text="El verbo en japonés normalmente cierra la oración. Eso cambia por completo cómo se siente la estructura frente al español."
                      color={SOFT}
                      accent={DEEP}
                    />
                    <QuickRule
                      jp="助詞"
                      title="Las partículas mandan"
                      text="No basta con memorizar palabras. Hay que entender qué marca は, を, に o で dentro de la frase."
                      color={COMP_COLOR}
                      accent="#1565C0"
                    />
                    <QuickRule
                      jp="組立"
                      title="Se construye por bloques"
                      text="Una oración clara se arma pieza por pieza: tiempo, sujeto, lugar, objeto y verbo."
                      color={TYPE_COLOR}
                      accent="#558B2F"
                    />
                  </div>
                </ShellCard>
              </motion.aside>
            </section>

            <StickyTabs active={activeTab} onChange={setActiveTab} />

            <AnimatePresence mode="wait">
              {activeTab === "order" ? (
                <motion.section
                  key="order"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                  className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_360px]"
                >
                  <div className="space-y-6">
                    <SectionCard
                      eyebrow="語順 — Orden de la oración"
                      title="Japonés vs Español"
                      description="El español suele organizarse como Sujeto → Verbo → Objeto. En japonés, el verbo se desplaza al final."
                      color={SOFT}
                      accent={DEEP}
                    >
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <ComparisonCard
                          title="Español — SVO"
                          example={[
                            { text: "Yo" },
                            { text: " como" },
                            { text: " pan" },
                          ]}
                          translation="Sujeto → Verbo → Objeto"
                          color="#EF9A9A"
                          accent="#D84315"
                        />

                        <ComparisonCard
                          title="Japonés — SOV"
                          example={[
                            { text: "私", ruby: "わたし" },
                            { text: "は" },
                            { text: "パン" },
                            { text: "を" },
                            { text: "食", ruby: "た" },
                            { text: "べます。" },
                          ]}
                          translation="Sujeto → Objeto → Verbo"
                          color={SOFT}
                          accent={DEEP}
                        />
                      </div>
                    </SectionCard>
                  </div>

                  <div className="space-y-6 xl:sticky xl:top-[170px] xl:self-start">
                    <SectionCard
                      eyebrow="Clave"
                      title="Qué no olvidar"
                      color={SOFT}
                      accent={DEEP}
                    >
                      <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                        <p>El verbo casi siempre queda al final.</p>
                        <p>Las partículas marcan función, no solo “acompañan”.</p>
                        <p>Si el orden te confunde, busca primero el verbo.</p>
                      </div>
                    </SectionCard>
                  </div>
                </motion.section>
              ) : null}

              {activeTab === "components" ? (
                <motion.section
                  key="components"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                  className="mt-8 space-y-6"
                >
                  <SectionCard
                    eyebrow="品詞 — Componentes"
                    title="Las 10 partes de la oración"
                    description="Cada categoría cumple una función distinta. Ábrelas una por una para repasarlas."
                    color={COMP_COLOR}
                    accent="#1565C0"
                  >
                    <div className="space-y-3">
                      {PARTS.map((part) => (
                        <PartCard key={part.label} part={part} />
                      ))}
                    </div>
                  </SectionCard>
                </motion.section>
              ) : null}

              {activeTab === "types" ? (
                <motion.section
                  key="types"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                  className="mt-8 space-y-6"
                >
                  <SectionCard
                    eyebrow="文型 — Tipos"
                    title="Tres patrones básicos"
                    description="Antes de crear frases largas, conviene dominar los tipos más comunes."
                    color={TYPE_COLOR}
                    accent="#558B2F"
                  >
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                      {SENTENCE_TYPES.map((item) => (
                        <TypeCard key={item.title} item={item} />
                      ))}
                    </div>
                  </SectionCard>
                </motion.section>
              ) : null}

              {activeTab === "builder" ? (
                <motion.section
                  key="builder"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                  className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_360px]"
                >
                  <div className="space-y-6">
                    <SectionCard
                      eyebrow="組み立て — Constructor"
                      title="Arma la oración paso a paso"
                      description="Parte desde una estructura vacía y completa cada bloque. Así ves cómo nace una oración japonesa en orden real."
                      color={SOFT}
                      accent={DEEP}
                    >
                      <BuilderSentence state={builder} />
                    </SectionCard>

                    <SectionCard
                      eyebrow="Selección"
                      title="Completa cada pieza"
                      color={SOFT}
                      accent={DEEP}
                    >
                      <div className="space-y-6">
                        <BuilderChoiceGroup
                          title="Tiempo"
                          options={BUILDER_OPTIONS.time}
                          selected={builder.time}
                          onSelect={(next) => setBuilder((prev) => ({ ...prev, time: next }))}
                          color={SOFT}
                          accent={DEEP}
                        />

                        <BuilderChoiceGroup
                          title="Sujeto"
                          options={BUILDER_OPTIONS.subject}
                          selected={builder.subject}
                          onSelect={(next) => setBuilder((prev) => ({ ...prev, subject: next }))}
                          color={SOFT}
                          accent={DEEP}
                        />

                        <BuilderChoiceGroup
                          title="Lugar"
                          options={BUILDER_OPTIONS.place}
                          selected={builder.place}
                          onSelect={(next) => setBuilder((prev) => ({ ...prev, place: next }))}
                          color={SOFT}
                          accent={DEEP}
                        />

                        <BuilderChoiceGroup
                          title="Objeto"
                          options={BUILDER_OPTIONS.object}
                          selected={builder.object}
                          onSelect={(next) => setBuilder((prev) => ({ ...prev, object: next }))}
                          color={SOFT}
                          accent={DEEP}
                        />

                        <BuilderChoiceGroup
                          title="Verbo"
                          options={BUILDER_OPTIONS.verb}
                          selected={builder.verb}
                          onSelect={(next) => setBuilder((prev) => ({ ...prev, verb: next }))}
                          color={SOFT}
                          accent={DEEP}
                        />

                        <div className="flex flex-wrap gap-3">
                          <button
                            type="button"
                            onClick={() =>
                              setBuilder({
                                time: BUILDER_OPTIONS.time[0],
                                subject: BUILDER_OPTIONS.subject[0],
                                place: BUILDER_OPTIONS.place[0],
                                object: BUILDER_OPTIONS.object[0],
                                verb: BUILDER_OPTIONS.verb[0],
                              })
                            }
                            className="rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                            style={{
                              color: DEEP,
                              background: "rgba(255,255,255,0.84)",
                              borderColor: withAlpha(ACCENT, 0.18),
                            }}
                          >
                            Reiniciar oración
                          </button>
                        </div>
                      </div>
                    </SectionCard>
                  </div>

                  <div className="space-y-6 xl:sticky xl:top-[170px] xl:self-start">
                    <SectionCard
                      eyebrow="Ayuda"
                      title="Orden recomendado"
                      color={TYPE_COLOR}
                      accent="#558B2F"
                    >
                      <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                        <p>1. Elige sujeto.</p>
                        <p>2. Añade lugar o tiempo si quieres contexto.</p>
                        <p>3. Marca el objeto.</p>
                        <p>4. Cierra con el verbo.</p>
                      </div>
                    </SectionCard>

                    <SectionCard
                      eyebrow="Meta"
                      title="Qué debe aprenderse aquí"
                      color={COMP_COLOR}
                      accent="#1565C0"
                    >
                      <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                        <p>La frase no nace de una sola vez; se construye por funciones.</p>
                        <p>Eso hace mucho más fácil entender partículas y orden natural.</p>
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