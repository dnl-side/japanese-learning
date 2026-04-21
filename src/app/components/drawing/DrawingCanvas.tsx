//src/app/components/drawing/DrawingCanvas.tsx

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useDrawingCanvas, type ValidationState } from "@/hooks/useDrawingCanvas";
import type { ScriptType } from "@/types/japanese";

// ─── Props ────────────────────────────────────────────────────────────────────

interface DrawingCanvasProps {
  char: string;           // Japanese character displayed as label e.g. "あ"
  romaji: string;         // Romaji filename e.g. "a" (used for SVG path)
  displayLabel?: string;
  scriptType: ScriptType;
  strokeCount: number;    // Required stroke count
  kanjiLevel?: number;
  backHref: string;       // e.g. "/hiragana/tabla"
  nextHref?: string;      // Optional next character
  prevHref?: string;      // Optional previous character
}

// ─── Validation feedback config ───────────────────────────────────────────────

const FEEDBACK: Record<ValidationState, { message: string; color: string; bg: string } | null> = {
  idle: null,
  valid: {
    message: "¡Perfecto! Los trazos están bien alineados. 🎉",
    color: "#15803D",
    bg: "rgba(220,252,231,0.95)",
  },
  "invalid-count": {
    message: "", // built dynamically
    color: "#B45309",
    bg: "rgba(254,243,199,0.95)",
  },
  "invalid-alignment": {
    message: "Los trazos no siguen bien el carácter. Observa la guía e intenta de nuevo.",
    color: "#B91C1C",
    bg: "rgba(254,226,226,0.95)",
  },
};

// ─── Stroke width selector ────────────────────────────────────────────────────

function StrokeWidthPanel({
  value,
  onChange,
  onClose,
}: {
  value: number;
  onChange: (v: number) => void;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 8 }}
      className="absolute bottom-20 right-4 z-30 rounded-2xl p-4 shadow-xl"
      style={{ background: "white", border: "1px solid var(--border)", minWidth: "200px" }}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-semibold" style={{ color: "var(--ink)" }}>
          Grosor del lápiz
        </span>
        <button onClick={onClose} className="text-sm opacity-40 hover:opacity-70">✕</button>
      </div>
      <input
        type="range"
        min={4}
        max={24}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-pink-500"
      />
      <div className="mt-2 flex items-center justify-between text-xs" style={{ color: "var(--ink-soft)" }}>
        <span>Fino</span>
        <span className="font-bold" style={{ color: "var(--sakura-dark)" }}>{value}px</span>
        <span>Grueso</span>
      </div>
      {/* Preview */}
      <div className="mt-3 flex items-center justify-center">
        <div
          className="rounded-full bg-pink-400"
          style={{ width: value, height: value, maxWidth: 32, maxHeight: 32 }}
        />
      </div>
    </motion.div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function DrawingCanvas({
  char,
  romaji,
  displayLabel,
  scriptType,
  strokeCount: requiredStrokes,
  kanjiLevel,
  backHref,
  nextHref,
  prevHref,
}: DrawingCanvasProps) {
  const [showWidthPanel, setShowWidthPanel] = useState(false);

  const {
    canvasRef,
    overlayRef,
    guideLoading,
    guideError,
    strokeCount,
    strokeWidth,
    setStrokeWidth,
    validation,
    attempts,
    hintOpacity,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    validate,
    clear,
  } = useDrawingCanvas(romaji, scriptType, requiredStrokes, kanjiLevel);

  // Dynamic feedback message for stroke count
  const getFeedback = () => {
    if (validation === "invalid-count") {
      const diff = requiredStrokes - strokeCount;
      return {
        message:
          diff > 0
            ? `Faltan ${diff} trazo${diff > 1 ? "s" : ""}. Necesitas exactamente ${requiredStrokes}.`
            : `Trazos de más. Necesitas exactamente ${requiredStrokes}.`,
        color: "#B45309",
        bg: "rgba(254,243,199,0.95)",
      };
    }
    return FEEDBACK[validation];
  };

  const feedback = getFeedback();

  return (
    <div className="flex h-full flex-col" style={{ background: "var(--paper)" }}>

      {/* ── Header ── */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{
          background: "white",
          borderBottom: "1px solid var(--border)",
          boxShadow: "0 1px 8px rgba(0,0,0,0.05)",
        }}
      >
        <Link
          href={backHref}
          className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
          style={{ color: "var(--sakura-dark)" }}
        >
          ← Tabla
        </Link>

        {/* Character display */}
        <div className="flex items-center gap-3">
          {prevHref && (
            <Link href={prevHref} className="text-lg opacity-40 hover:opacity-70 transition-opacity">
              ‹
            </Link>
          )}
          <div className="text-center">
            <div
              className="char-display font-bold leading-none"
              style={{ fontSize: "2.5rem", color: "var(--sakura-dark)" }}
            >
              {char}
            </div>
            <div className="font-mono text-xs mt-0.5" style={{ color: "var(--ink-soft)" }}>
              {displayLabel ?? romaji}
            </div>
          </div>
          {nextHref && (
            <Link href={nextHref} className="text-lg opacity-40 hover:opacity-70 transition-opacity">
              ›
            </Link>
          )}
        </div>

        {/* Stroke counter */}
        <div className="text-right">
          <div
            className="text-sm font-bold"
            style={{
              color: strokeCount > requiredStrokes
                ? "#DC2626"
                : strokeCount === requiredStrokes
                ? "#15803D"
                : "var(--ink)",
            }}
          >
            {strokeCount} / {requiredStrokes}
          </div>
          <div className="text-xs" style={{ color: "var(--ink-soft)", opacity: 0.6 }}>
            trazos
          </div>
        </div>
      </div>

      {/* ── Stroke progress dots ── */}
      <div className="flex items-center justify-center gap-1.5 px-4 py-2"
        style={{ background: "rgba(255,255,255,0.7)" }}
      >
        {Array.from({ length: requiredStrokes }).map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-300"
            style={{
              width: i < strokeCount ? 10 : 8,
              height: i < strokeCount ? 10 : 8,
              background: i < strokeCount
                ? "linear-gradient(135deg,#F48FB1,#CE93D8)"
                : "rgba(0,0,0,0.12)",
              boxShadow: i < strokeCount ? "0 2px 6px rgba(244,143,177,0.5)" : "none",
            }}
          />
        ))}
      </div>

      {/* ── Canvas area ── */}
      <div className="relative flex-1 overflow-hidden">
        {guideLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center">
                <div
                className="char-display text-6xl opacity-20 animate-pulse"
                style={{ color: "var(--sakura-dark)" }}
                >
                {char}
                </div>
                <p className="mt-2 text-sm" style={{ color: "var(--ink-soft)" }}>
                Cargando guía...
                </p>
            </div>
            </div>
        )}

        {guideError && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center p-6">
                <div
                className="char-display text-8xl"
                style={{ color: "var(--sakura-dark)", opacity: 0.15 }}
                >
                {char}
                </div>
                <p className="mt-2 text-sm" style={{ color: "var(--ink-soft)" }}>
                SVG no encontrado — practica sin guía
                </p>
            </div>
            </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative aspect-square h-full max-w-full">
            {!guideError && (
                <canvas
                ref={overlayRef}
                width={600}
                height={600}
                className="pointer-events-none absolute inset-0 h-full w-full"
                aria-hidden="true"
                />
            )}

            <canvas
                ref={canvasRef}
                width={600}
                height={600}
                className="absolute inset-0 h-full w-full touch-none"
                style={{ cursor: "crosshair" }}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerLeave={onPointerUp}
            />
            </div>
        </div>

        {attempts > 0 && validation === "invalid-alignment" && (
            <div
            className="absolute top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-medium"
            style={{
                background: "rgba(254,226,226,0.9)",
                color: "#B91C1C",
                border: "1px solid rgba(185,28,28,0.2)",
            }}
            >
            Intento {attempts} — la guía se hace más visible
            </div>
        )}
        </div>

      {/* ── Validation feedback banner ── */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="mx-4 mb-2 rounded-xl px-4 py-3 text-sm font-medium"
            style={{
              background: feedback.bg,
              color: feedback.color,
              border: `1px solid ${feedback.color}33`,
            }}
          >
            {feedback.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Action buttons ── */}
      <div
        className="relative flex items-center justify-between gap-2 px-4 pb-6 pt-2"
        style={{ background: "white", borderTop: "1px solid var(--border)" }}
      >
        {/* Width panel */}
        <AnimatePresence>
          {showWidthPanel && (
            <StrokeWidthPanel
              value={strokeWidth}
              onChange={setStrokeWidth}
              onClose={() => setShowWidthPanel(false)}
            />
          )}
        </AnimatePresence>

        {/* Edit width */}
        <button
          onClick={() => setShowWidthPanel((v) => !v)}
          className="flex flex-col items-center gap-1 rounded-2xl px-4 py-3 text-xs font-medium transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            background: showWidthPanel ? "rgba(242,167,187,0.2)" : "rgba(0,0,0,0.04)",
            color: showWidthPanel ? "var(--sakura-dark)" : "var(--ink-soft)",
            border: "1px solid var(--border)",
          }}
        >
          <span className="text-lg">✏</span>
          Grosor
        </button>

        {/* Clear */}
        <button
          onClick={clear}
          className="flex flex-col items-center gap-1 rounded-2xl px-4 py-3 text-xs font-medium transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            background: "rgba(239,68,68,0.06)",
            color: "#DC2626",
            border: "1px solid rgba(239,68,68,0.2)",
          }}
        >
          <span className="text-lg">🗑</span>
          Limpiar
        </button>

        {/* Validate */}
        <button
          onClick={validate}
          className="flex flex-col items-center gap-1 rounded-2xl px-5 py-3 text-xs font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            background: "linear-gradient(135deg, #BC002D, #F48FB1)",
            boxShadow: "0 4px 16px rgba(188,0,45,0.25)",
            border: "none",
          }}
        >
          <span className="text-lg">✓</span>
          Validar
        </button>
      </div>
    </div>
  );
}