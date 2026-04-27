"use client";

import { RouteButton, SectionPanel } from "./QuantityUi";

export function PracticePanel() {
  return (
    <SectionPanel
      eyebrow="練習"
      title="Práctica separada"
      description="La práctica completa ahora vive en una página aparte para poder usar sesiones random, modos separados y un banco de preguntas más grande sin cargar la página principal de referencia."
      action={<RouteButton href="/gramatica/contadores/practica">Ir a práctica →</RouteButton>}
    >
      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-[22px] border p-4" style={{ background: "rgba(255,255,255,0.82)", border: "1px solid var(--border)" }}>
          <p className="text-sm font-bold" style={{ color: "var(--ink)" }}>Modos separados</p>
          <p className="mt-1 text-xs leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.72 }}>
            Leer números, separar grupos, elegir contador, hora vs duración y completar frase.
          </p>
        </div>

        <div className="rounded-[22px] border p-4" style={{ background: "rgba(255,255,255,0.82)", border: "1px solid var(--border)" }}>
          <p className="text-sm font-bold" style={{ color: "var(--ink)" }}>Sesiones random</p>
          <p className="mt-1 text-xs leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.72 }}>
            Cada intento toma preguntas desde el banco para evitar repetir siempre el mismo orden.
          </p>
        </div>

        <div className="rounded-[22px] border p-4" style={{ background: "rgba(255,255,255,0.82)", border: "1px solid var(--border)" }}>
          <p className="text-sm font-bold" style={{ color: "var(--ink)" }}>Sin pistas obvias</p>
          <p className="mt-1 text-xs leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.72 }}>
            Las preguntas de lectura muestran dígitos o formas sin ruby para no revelar la respuesta.
          </p>
        </div>
      </div>
    </SectionPanel>
  );
}
