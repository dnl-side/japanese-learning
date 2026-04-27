"use client";

import { useMemo, useState } from "react";
import type { CounterFamilyId } from "@/data/grammar/counters";
import { COUNTER_FAMILIES, COUNTERS, TIME_CONTRASTS, getCounterFamily } from "@/data/grammar/counters";
import { Badge, InfoCard, ReadingToken, RubyLine, SectionPanel, withAlpha } from "./QuantityUi";

function CounterStat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="rounded-2xl border px-4 py-3" style={{ background: withAlpha(color, 0.08), borderColor: withAlpha(color, 0.18) }}>
      <p className="text-[0.68rem] font-black uppercase tracking-[0.14em]" style={{ color }}>
        {label}
      </p>
      <p className="mt-1 text-lg font-bold" style={{ color: "var(--ink)" }}>
        {value}
      </p>
    </div>
  );
}

export function CounterOverviewStats() {
  const irregularCount = COUNTERS.filter((counter) => counter.readings.some((reading) => reading.irregular)).length;
  const coreCount = COUNTERS.filter((counter) => counter.level === "core").length;

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      <CounterStat label="familias" value={`${COUNTER_FAMILIES.length}`} color="#00695C" />
      <CounterStat label="contadores" value={`${COUNTERS.length}`} color="#00695C" />
      <CounterStat label="base core" value={`${coreCount} esenciales`} color="#00695C" />
      <CounterStat label="con irregularidad" value={`${irregularCount}`} color="#00695C" />
      <CounterStat label="tiempo" value={`${COUNTERS.filter((counter) => counter.family === "time-point" || counter.family === "duration").length}`} color="#00695C" />
      <CounterStat label="reutilizable" value="data driven" color="#00695C" />
    </div>
  );
}

function CounterReadingGrid({ counterId }: { counterId: string }) {
  const counter = COUNTERS.find((entry) => entry.id === counterId);
  if (!counter) return null;

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
      {counter.readings.map((reading) => (
        <div
          key={`${counter.id}-${reading.display}`}
          className="rounded-2xl border p-3 text-center"
          style={{
            background: reading.irregular ? withAlpha("#E11D48", 0.08) : "rgba(255,255,255,0.82)",
            borderColor: reading.irregular ? withAlpha("#E11D48", 0.2) : "var(--border)",
          }}
        >
          <p className="font-mono text-2xl font-black" style={{ color: reading.irregular ? "#E11D48" : "var(--ink)" }}>
            {reading.display}
          </p>
          <p className="mt-1 text-sm font-bold" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>
            {reading.reading}
          </p>
          {reading.aliases?.length ? (
            <p className="mt-1 text-[0.68rem] leading-snug" style={{ color: "var(--ink-soft)", opacity: 0.68 }}>
              también: {reading.aliases.join(" / ")}
            </p>
          ) : null}
          {reading.note ? (
            <p className="mt-1 text-[0.68rem] leading-snug" style={{ color: "var(--ink-soft)", opacity: 0.68 }}>
              {reading.note}
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function CounterDetail({ counterId }: { counterId: string }) {
  const counter = COUNTERS.find((entry) => entry.id === counterId);
  if (!counter) return null;

  const family = getCounterFamily(counter.family);
  const color = family?.accent ?? "#00695C";

  return (
    <div className="rounded-[28px] border p-4 sm:p-5" style={{ background: "rgba(255,255,255,0.9)", borderColor: withAlpha(color, 0.18) }}>
      <div className="grid gap-5 lg:grid-cols-[260px_1fr]">
        <div>
          <div className="rounded-[26px] border p-5 text-center" style={{ background: withAlpha(color, 0.08), borderColor: withAlpha(color, 0.18) }}>
            <p className="char-display text-6xl font-black leading-none" style={{ color }}>
              {counter.counter}
            </p>
            <p className="mt-2 text-lg font-bold" style={{ color: "var(--ink)" }}>
              〜{counter.reading}
            </p>
            <div className="mt-3 flex justify-center">
              <Badge color={color}>{counter.jlpt} · {counter.level}</Badge>
            </div>
          </div>

          <div className="mt-4 rounded-[22px] border p-4" style={{ background: "rgba(255,255,255,0.76)", borderColor: "var(--border)" }}>
            <p className="text-[0.7rem] font-black uppercase tracking-[0.14em]" style={{ color }}>
              pregunta típica
            </p>
            <div className="mt-2">
              <RubyLine segments={counter.questionWord} className="char-display text-2xl font-bold" color="var(--ink)" />
            </div>
          </div>
        </div>

        <div className="min-w-0 space-y-5">
          <div>
            <h3 className="text-2xl font-black" style={{ color: "var(--ink)" }}>
              {counter.title}
            </h3>
            <p className="mt-2 text-base font-semibold leading-relaxed" style={{ color }}>
              {counter.meaning}
            </p>
            <p className="mt-2 text-sm leading-relaxed sm:text-base" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>
              {counter.usage}
            </p>
            {counter.warning ? (
              <div className="mt-3 rounded-2xl border px-4 py-3 text-sm leading-relaxed" style={{ color: "#92400E", background: "rgba(254,243,199,0.72)", borderColor: "rgba(217,119,6,0.18)" }}>
                {counter.warning}
              </div>
            ) : null}
          </div>

          <div className="rounded-[24px] border p-4" style={{ background: withAlpha(color, 0.05), borderColor: withAlpha(color, 0.14) }}>
            <p className="mb-3 text-[0.72rem] font-black uppercase tracking-[0.16em]" style={{ color }}>
              ejemplos típicos
            </p>
            <RubyLine segments={counter.examples} className="char-display text-xl font-bold leading-relaxed" color="var(--ink)" />
          </div>

          <div>
            <p className="mb-3 text-[0.72rem] font-black uppercase tracking-[0.16em]" style={{ color }}>
              tabla de lectura
            </p>
            <CounterReadingGrid counterId={counter.id} />
          </div>

          <div>
            <p className="mb-3 text-[0.72rem] font-black uppercase tracking-[0.16em]" style={{ color }}>
              contexto
            </p>
            <div className="grid gap-3 lg:grid-cols-2">
              {counter.exampleSentences.map((example) => (
                <div key={example.id} className="rounded-[22px] border p-4" style={{ background: "rgba(255,255,255,0.84)", borderColor: "var(--border)" }}>
                  {example.pattern ? <Badge color={color}>{example.pattern}</Badge> : null}
                  <div className="mt-3">
                    <RubyLine segments={example.jp} className="char-display text-xl font-bold leading-[2.1]" color="var(--ink)" />
                  </div>
                  <p className="mt-2 text-sm italic leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.76 }}>
                    {example.es}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CounterFamilySection({
  familyIds,
  title,
  description,
}: {
  familyIds: CounterFamilyId[];
  title: string;
  description: string;
}) {
  const families = useMemo(() => familyIds.map((id) => getCounterFamily(id)).filter(Boolean), [familyIds]);
  const counters = useMemo(() => COUNTERS.filter((counter) => familyIds.includes(counter.family)), [familyIds]);
  const [activeCounterId, setActiveCounterId] = useState(counters[0]?.id ?? "");

  const activeCounter = COUNTERS.find((counter) => counter.id === activeCounterId) ?? counters[0];
  const activeFamily = activeCounter ? getCounterFamily(activeCounter.family) : undefined;
  const color = activeFamily?.accent ?? "#00695C";

  return (
    <div className="space-y-6">
      <SectionPanel eyebrow="助数詞" title={title} description={description} color={color}>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {families.map((family) =>
            family ? (
              <InfoCard key={family.id} icon={family.jp.slice(0, 1)} title={family.label} text={family.description} color={family.accent} />
            ) : null,
          )}
        </div>
      </SectionPanel>

      <SectionPanel
        eyebrow="カタログ"
        title="Elige un contador"
        description="Cada tarjeta abre su tabla de lectura, advertencias y ejemplos. Los números se muestran como dígitos para mantener la lectura práctica del módulo."
        color={color}
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {counters.map((counter) => {
            const family = getCounterFamily(counter.family);
            const itemColor = family?.accent ?? "#00695C";
            const active = activeCounter?.id === counter.id;
            const irregular = counter.readings.filter((reading) => reading.irregular).length;

            return (
              <button
                key={counter.id}
                type="button"
                onClick={() => setActiveCounterId(counter.id)}
                className="rounded-[24px] border p-4 text-left transition-all hover:-translate-y-0.5"
                style={{
                  background: active ? withAlpha(itemColor, 0.12) : "rgba(255,255,255,0.82)",
                  borderColor: active ? withAlpha(itemColor, 0.26) : "var(--border)",
                  boxShadow: active ? `0 14px 28px ${withAlpha(itemColor, 0.12)}` : "none",
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="char-display text-4xl font-black leading-none" style={{ color: itemColor }}>
                      {counter.counter}
                    </p>
                    <p className="mt-2 text-sm font-bold" style={{ color: "var(--ink)" }}>
                      〜{counter.reading}
                    </p>
                  </div>
                  <Badge color={itemColor}>{counter.jlpt}</Badge>
                </div>
                <p className="mt-3 text-sm font-bold leading-snug" style={{ color: "var(--ink)" }}>
                  {counter.title}
                </p>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.72 }}>
                  {counter.meaning}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full px-2 py-0.5 text-[0.68rem] font-bold" style={{ color: itemColor, background: withAlpha(itemColor, 0.1) }}>
                    {counter.readings.length} formas
                  </span>
                  {irregular > 0 ? (
                    <span className="rounded-full px-2 py-0.5 text-[0.68rem] font-bold" style={{ color: "#E11D48", background: withAlpha("#E11D48", 0.1) }}>
                      {irregular} especiales
                    </span>
                  ) : null}
                </div>
              </button>
            );
          })}
        </div>
      </SectionPanel>

      {activeCounter ? <CounterDetail counterId={activeCounter.id} /> : null}
    </div>
  );
}

export function TimeContrastSection() {
  return (
    <SectionPanel
      eyebrow="比較"
      title="Contrastes que evitan errores"
      description="Estas parejas son la razón por la que tiempo puntual y duración deben estudiarse separadas. La forma se parece, pero la función no es la misma."
      color="#1D4ED8"
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {TIME_CONTRASTS.map((contrast) => (
          <div key={contrast.id} className="rounded-[26px] border p-4 sm:p-5" style={{ background: "rgba(255,255,255,0.88)", borderColor: "var(--border)" }}>
            <div className="grid gap-3 sm:grid-cols-2">
              <ReadingToken text={contrast.left.label} reading={`${contrast.left.reading} · ${contrast.left.meaning}`} color="#1D4ED8" />
              <ReadingToken text={contrast.right.label} reading={`${contrast.right.reading} · ${contrast.right.meaning}`} color="#7E22CE" />
            </div>
            <p className="mt-4 text-sm leading-relaxed sm:text-base" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>
              {contrast.explanation}
            </p>
          </div>
        ))}
      </div>
    </SectionPanel>
  );
}
