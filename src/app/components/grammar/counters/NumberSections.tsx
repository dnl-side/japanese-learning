import {
  DECIMAL_EXAMPLES,
  FRACTION_EXAMPLES,
  LARGE_NUMBER_GROUPS,
  NUMBER_BUILD_EXAMPLES,
  NUMBER_PLACES,
  NUMBER_REFERENCES,
} from "@/data/grammar/counters";
import { Badge, InfoCard, ReadingToken, SectionPanel, withAlpha } from "./QuantityUi";

function PlaceFormulaCard({ example }: { example: (typeof NUMBER_BUILD_EXAMPLES)[number] }) {
  return (
    <div className="rounded-[26px] border p-4 sm:p-5" style={{ background: "rgba(255,255,255,0.9)", borderColor: "var(--border)" }}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Badge>{example.value}</Badge>
        <span className="rounded-full px-3 py-1 text-xs font-bold" style={{ color: "var(--ink-soft)", background: "rgba(255,255,255,0.76)", border: "1px solid var(--border)" }}>
          {example.expression}
        </span>
      </div>

      <div className="mt-4 grid gap-2" style={{ gridTemplateColumns: `repeat(${example.chunks.length}, minmax(0, 1fr))` }}>
        {example.chunks.map((chunk) => (
          <div
            key={`${example.id}-${chunk.label}-${chunk.value}`}
            className="rounded-2xl border px-3 py-3 text-center"
            style={{ background: withAlpha(chunk.accent, 0.08), borderColor: withAlpha(chunk.accent, 0.2) }}
          >
            <p className="text-[0.68rem] font-black uppercase tracking-[0.16em]" style={{ color: chunk.accent }}>
              {chunk.label}
            </p>
            <p className="mt-1 font-mono text-3xl font-black leading-none" style={{ color: chunk.accent }}>
              {chunk.value}
            </p>
            <p className="mt-2 text-xs font-semibold leading-snug" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
              {chunk.reading}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-lg font-bold leading-relaxed" style={{ color: "var(--ink)" }}>
        {example.reading}
      </p>

      {example.note ? (
        <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.74 }}>
          {example.note}
        </p>
      ) : null}
    </div>
  );
}

export function NumberSystemSection() {
  const smallExamples = NUMBER_BUILD_EXAMPLES.filter((example) => ["number-43", "number-687", "number-8346"].includes(example.id));

  return (
    <div className="space-y-6">
      <SectionPanel
        eyebrow="数字"
        title="Números base escritos como número"
        description="En escritura horizontal y en estudio práctico conviene partir desde el número arábigo. La lectura se fija al lado, sin obligar al estudiante a pensar primero en kanji numérico."
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 xl:grid-cols-11">
          {NUMBER_REFERENCES.map((number) => (
            <div key={number.value} className="space-y-2">
              <ReadingToken text={number.value} reading={number.reading} size="lg" />
              {number.note ? (
                <p className="px-1 text-[0.68rem] leading-snug" style={{ color: "var(--ink-soft)", opacity: 0.68 }}>
                  {number.note}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </SectionPanel>

      <SectionPanel
        eyebrow="1〜9999"
        title="Unidad, decena, centena y milésima"
        description="El primer bloque japonés se arma hasta 9999. Ese bloque completo después se repite antes de 万, 億 y 兆."
      >
        <div className="grid gap-3 md:grid-cols-4">
          {NUMBER_PLACES.map((place) => (
            <div
              key={place.id}
              className="rounded-[24px] border p-4"
              style={{ background: withAlpha(place.accent, 0.07), borderColor: withAlpha(place.accent, 0.18) }}
            >
              <p className="text-[0.68rem] font-black uppercase tracking-[0.16em]" style={{ color: place.accent }}>
                {place.label}
              </p>
              <div className="mt-3 flex items-end justify-between gap-3">
                <p className="char-display text-3xl font-black" style={{ color: place.accent }}>
                  {place.jp}
                </p>
                <p className="font-mono text-xl font-black" style={{ color: "var(--ink)" }}>
                  × {place.multiplier}
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
                {place.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {smallExamples.map((example) => (
            <PlaceFormulaCard key={example.id} example={example} />
          ))}
        </div>
      </SectionPanel>
    </div>
  );
}

export function LargeNumberSection() {
  const largeExamples = NUMBER_BUILD_EXAMPLES.filter((example) => !["number-43", "number-687", "number-8346"].includes(example.id));

  return (
    <SectionPanel
      eyebrow="万・億・兆"
      title="Números grandes por grupos de 4 dígitos"
      description="La idea clave es que el grupo de unidad, decena, centena y milésima se repite. En vez de pensar cada tres dígitos, separa cada cuatro: 兆・億・万・grupo final."
    >
      <div className="grid gap-3 md:grid-cols-4">
        {LARGE_NUMBER_GROUPS.map((group) => (
          <div key={group.id} className="rounded-[24px] border p-4" style={{ background: withAlpha(group.accent, 0.07), borderColor: withAlpha(group.accent, 0.18) }}>
            <div className="flex items-center justify-between gap-3">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.16em]" style={{ color: group.accent }}>
                {group.label}
              </p>
              <span className="rounded-full px-2 py-0.5 text-xs font-bold" style={{ color: group.accent, background: withAlpha(group.accent, 0.12) }}>
                {group.multiplierLabel}
              </span>
            </div>
            <p className="char-display mt-3 text-4xl font-black" style={{ color: group.accent }}>
              {group.jp}
            </p>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
              {group.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-[26px] border p-4 sm:p-5" style={{ background: withAlpha("#00695C", 0.06), borderColor: withAlpha("#00695C", 0.16) }}>
        <p className="text-sm font-bold uppercase tracking-[0.14em]" style={{ color: "#00695C" }}>
          Fórmula visual
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          {LARGE_NUMBER_GROUPS.map((group) => (
            <div key={`formula-${group.id}`} className="rounded-2xl border px-4 py-3 text-center" style={{ background: "rgba(255,255,255,0.82)", borderColor: withAlpha(group.accent, 0.2) }}>
              <p className="font-mono text-2xl font-black" style={{ color: group.accent }}>
                Grupo
              </p>
              <p className="char-display mt-1 text-2xl font-black" style={{ color: group.accent }}>
                {group.id === "base" ? "" : group.jp}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {largeExamples.map((example) => (
          <PlaceFormulaCard key={example.id} example={example} />
        ))}
      </div>
    </SectionPanel>
  );
}

export function DecimalFractionSection() {
  return (
    <SectionPanel
      eyebrow="小数・分数"
      title="Decimales y fracciones"
      description="Los decimales se leen dígito por dígito después de 点. Las fracciones invierten el orden respecto al español: denominador + 分の + numerador."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="space-y-4">
          <InfoCard
            icon="."
            title="Decimal"
            text="Parte entera + 点 + dígitos uno por uno. 3.14 no se lee como 3 punto 14, sino como 3 punto 1 4."
            color="#0284C7"
          />
          <div className="grid gap-3">
            {DECIMAL_EXAMPLES.map((example) => (
              <div key={example.id} className="rounded-[22px] border p-4" style={{ background: "rgba(255,255,255,0.86)", borderColor: "var(--border)" }}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-mono text-3xl font-black" style={{ color: "#0284C7" }}>
                    {example.value}
                  </p>
                  <p className="text-base font-bold" style={{ color: "var(--ink)" }}>
                    {example.reading}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.74 }}>
                  {example.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <InfoCard
            icon="/"
            title="Fracción"
            text="Primero se lee el denominador, luego 分の, y al final el numerador. 3/4 se lee よんぶんのさん."
            color="#7C3AED"
          />
          <div className="grid gap-3">
            {FRACTION_EXAMPLES.map((example) => (
              <div key={example.id} className="rounded-[22px] border p-4" style={{ background: "rgba(255,255,255,0.86)", borderColor: "var(--border)" }}>
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                  <div className="rounded-2xl border px-4 py-3 text-center" style={{ background: withAlpha("#7C3AED", 0.08), borderColor: withAlpha("#7C3AED", 0.18) }}>
                    <p className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: "#7C3AED" }}>denominador</p>
                    <p className="mt-1 font-mono text-3xl font-black" style={{ color: "#7C3AED" }}>{example.denominator}</p>
                  </div>
                  <p className="text-xl font-black" style={{ color: "var(--ink-soft)" }}>分の</p>
                  <div className="rounded-2xl border px-4 py-3 text-center" style={{ background: withAlpha("#7C3AED", 0.08), borderColor: withAlpha("#7C3AED", 0.18) }}>
                    <p className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: "#7C3AED" }}>numerador</p>
                    <p className="mt-1 font-mono text-3xl font-black" style={{ color: "#7C3AED" }}>{example.numerator}</p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                  <p className="font-mono text-2xl font-black" style={{ color: "#7C3AED" }}>{example.value}</p>
                  <p className="text-base font-bold" style={{ color: "var(--ink)" }}>{example.reading}</p>
                </div>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.74 }}>
                  {example.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionPanel>
  );
}
