"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";
import type { QuantityMainTab } from "@/data/grammar/counters";
import { CounterFamilySection, CounterOverviewStats, TimeContrastSection } from "@/app/components/grammar/counters/CounterSections";
import { DecimalFractionSection, LargeNumberSection, NumberSystemSection } from "@/app/components/grammar/counters/NumberSections";
import { ACCENT, GRADIENT, InfoCard, RouteButton, SectionPanel, ShellCard, SOFT, withAlpha } from "@/app/components/grammar/counters/QuantityUi";

const MAIN_TABS: Array<{
  id: QuantityMainTab;
  label: string;
  jp: string;
  description: string;
}> = [
  {
    id: "numbers",
    label: "Números",
    jp: "数字",
    description: "1〜9999, 万・億・兆, decimales y fracciones.",
  },
  {
    id: "counters",
    label: "Contadores",
    jp: "助数詞",
    description: "Objetos, personas, animales, dinero, frecuencia y pisos.",
  },
  {
    id: "time",
    label: "Tiempo puntual",
    jp: "時点",
    description: "時・分・日・月・年 como reloj y calendario.",
  },
  {
    id: "duration",
    label: "Duración",
    jp: "期間",
    description: "時間・分間・日間・週間・カ月・年間.",
  },
];

function Hero() {
  return (
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
            数量
          </div>

          <div
            className="mb-4 inline-flex items-center rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.18em]"
            style={{
              color: ACCENT,
              background: withAlpha(SOFT, 0.12),
              border: `1px solid ${withAlpha(SOFT, 0.22)}`,
            }}
          >
            数字・助数詞 · Números y contadores
          </div>

          <h1 className="char-display max-w-[14ch] text-4xl font-bold leading-tight sm:text-5xl" style={{ color: "var(--ink)" }}>
            Números y contadores
          </h1>

          <p className="mt-4 max-w-[66ch] text-base leading-relaxed sm:text-lg" style={{ color: "var(--ink-soft)", opacity: 0.8 }}>
            En este módulo los números se trabajan como normalmente los vas a ver en escritura horizontal: con dígitos. Primero aprendes a separarlos y leerlos; después los combinas con contadores, tiempo puntual y duración.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <RouteButton href="/gramatica/contadores/practica">Practicar ahora →</RouteButton>
            <RouteButton href="/gramatica" color="#0F766E">← Gramática</RouteButton>
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
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
            Ruta mental
          </p>

          <h2 className="mt-1 text-2xl font-bold" style={{ color: "var(--ink)" }}>
            De número a cantidad real
          </h2>

          <div className="mt-4 space-y-4">
            <InfoCard
              icon="数"
              title="Primero el sistema numérico"
              text="Unidad, decena, centena y milésima forman un grupo. Ese grupo se repite antes de 万・億・兆."
            />
            <InfoCard
              icon="助"
              title="Después el contador"
              text="Una vez sabes formar el número, eliges el contador según objeto, persona, animal, tiempo o duración."
            />
            <InfoCard
              icon="時"
              title="Tiempo no es una sola cosa"
              text="4時 es las 4:00, pero 4時間 son cuatro horas. 4月 es abril, pero 4カ月 son cuatro meses."
            />
          </div>
        </ShellCard>
      </motion.aside>
    </section>
  );
}

function MainTabs({ active, onChange }: { active: QuantityMainTab; onChange: (tab: QuantityMainTab) => void }) {
  return (
    <SectionPanel
      eyebrow="ナビゲーション"
      title="Elige qué quieres estudiar"
      description="La práctica pesada vive en una página aparte. Esta página queda como referencia navegable y explicativa, con suficiente aire para no mezclar todos los temas."
      action={<RouteButton href="/gramatica/contadores/practica">Ir a práctica →</RouteButton>}
    >
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {MAIN_TABS.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChange(tab.id)}
              className="group rounded-[24px] border p-4 text-left transition-all hover:-translate-y-0.5"
              style={{
                background: isActive ? withAlpha(ACCENT, 0.12) : "rgba(255,255,255,0.82)",
                borderColor: isActive ? withAlpha(ACCENT, 0.26) : "var(--border)",
                boxShadow: isActive ? `0 14px 28px ${withAlpha(ACCENT, 0.12)}` : "none",
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="char-display text-xl font-bold" style={{ color: isActive ? ACCENT : "var(--ink)" }}>
                    {tab.jp}
                  </p>
                  <p className="mt-1 text-base font-bold" style={{ color: "var(--ink)" }}>
                    {tab.label}
                  </p>
                </div>
                <span
                  className="rounded-full px-2.5 py-1 text-xs font-bold"
                  style={{ color: isActive ? "white" : ACCENT, background: isActive ? GRADIENT : withAlpha(ACCENT, 0.1) }}
                >
                  {isActive ? "Activo" : "Ver"}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.72 }}>
                {tab.description}
              </p>
            </button>
          );
        })}
      </div>
    </SectionPanel>
  );
}

function ActiveTabContent({ activeTab }: { activeTab: QuantityMainTab }) {
  if (activeTab === "numbers") {
    return (
      <div className="space-y-6">
        <NumberSystemSection />
        <LargeNumberSection />
        <DecimalFractionSection />
      </div>
    );
  }

  if (activeTab === "counters") {
    return (
      <CounterFamilySection
        familyIds={["general-objects", "people-animals", "money-frequency", "order-location"]}
        title="Contadores por tipo de referente"
        description="Objetos, personas, animales, máquinas, bebidas, dinero, frecuencia, orden y pisos. La idea es elegir el contador por función, no memorizar una lista sin contexto."
      />
    );
  }

  if (activeTab === "time") {
    return (
      <div className="space-y-6">
        <CounterFamilySection
          familyIds={["time-point"]}
          title="Tiempo puntual y calendario"
          description="時・分・日・月・年 funcionan como punto del reloj o del calendario. No los mezcles automáticamente con duración."
        />
        <TimeContrastSection />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <CounterFamilySection
        familyIds={["duration"]}
        title="Duración y periodos"
        description="時間・分間・日間・週間・カ月・年間 expresan cuánto dura algo. Se parecen al tiempo puntual, pero cumplen otra función."
      />
      <TimeContrastSection />
    </div>
  );
}

export default function ContadoresPage() {
  const [activeTab, setActiveTab] = useState<QuantityMainTab>("numbers");

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

            <Hero />

            <section className="mt-8">
              <CounterOverviewStats />
            </section>

            <section className="mt-8 space-y-6">
              <MainTabs active={activeTab} onChange={setActiveTab} />
              <ActiveTabContent activeTab={activeTab} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
