"use client";

import { useMemo, useState } from "react";
import { generateJlptMock, JLPT_SECTION_META, type JlptLevel, type JlptMockResult } from "@/data/jlpt";
import JlptQuestionRenderer from "./JlptQuestionRenderer";

function createDefaultSeed(level: JlptLevel): string {
  const now = new Date();
  return `${level}-${now.getFullYear()}${now.getMonth() + 1}${now.getDate()}-${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;
}

export default function JlptMockClient({ level }: { level: JlptLevel }) {
  const [seedInput, setSeedInput] = useState("");
  const [mock, setMock] = useState<JlptMockResult | null>(null);

  const sectionSummary = useMemo(() => {
    if (!mock) return [];
    return mock.sections.map((section) => ({
      section: section.section,
      label: JLPT_SECTION_META[section.section].label,
      count: section.questions.length,
      minutes: section.minutes,
    }));
  }, [mock]);

  function startMock() {
    const seed = seedInput.trim() || createDefaultSeed(level);
    setMock(generateJlptMock({ level, seed }));
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border p-6" style={{ background: "rgba(255,255,255,0.88)", borderColor: "rgba(148,163,184,0.18)", boxShadow: "0 16px 36px rgba(15,23,42,0.07)" }}>
        <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "#B91C1C" }}>
          Generador de mock
        </p>
        <h2 className="mt-2 text-2xl font-bold" style={{ color: "var(--ink)" }}>Crear intento aleatorio</h2>
        <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
          Usa un seed para repetir exactamente el mismo mock o deja el campo vacío para generar uno nuevo. El generador toma preguntas originales desde el pool disponible por nivel y tipo de ejercicio.
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <input
            value={seedInput}
            onChange={(event: { target: { value: string } }) => setSeedInput(event.target.value)}
            placeholder="Seed opcional, por ejemplo n5-demo-001"
            className="min-h-12 flex-1 rounded-2xl border px-4 text-sm outline-none"
            style={{ background: "rgba(255,255,255,0.92)", borderColor: "rgba(148,163,184,0.22)", color: "var(--ink)" }}
          />
          <button type="button" onClick={startMock} className="min-h-12 rounded-2xl px-5 text-sm font-bold text-white" style={{ background: "linear-gradient(135deg, #B91C1C, #F87171)" }}>
            Generar mock
          </button>
        </div>
      </section>

      {mock ? (
        <>
          <section className="rounded-[28px] border p-5" style={{ background: "rgba(255,255,255,0.82)", borderColor: "rgba(148,163,184,0.18)" }}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold" style={{ color: "var(--ink)" }}>{mock.title}</h3>
                <p className="mt-1 text-sm" style={{ color: "var(--ink-soft)", opacity: 0.76 }}>Seed: {mock.seed}</p>
              </div>
              <span className="rounded-full px-3 py-1 text-xs font-bold" style={{ background: "rgba(185,28,28,0.1)", color: "#B91C1C" }}>
                {mock.questions.length} preguntas
              </span>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {sectionSummary.map((item) => (
                <div key={item.section} className="rounded-2xl border p-4" style={{ borderColor: "rgba(148,163,184,0.16)", background: "rgba(248,250,252,0.72)" }}>
                  <p className="text-sm font-bold" style={{ color: "var(--ink)" }}>{item.label}</p>
                  <p className="mt-1 text-xs" style={{ color: "var(--ink-soft)", opacity: 0.72 }}>{item.count} preguntas · {item.minutes} min referencia</p>
                </div>
              ))}
            </div>
          </section>

          <JlptQuestionRenderer questions={mock.questions} mode="mock" />
        </>
      ) : null}
    </div>
  );
}
