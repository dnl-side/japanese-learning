// src/lib/weaknessTracker.ts
//
// Tracker local-first de debilidades. Guarda estadísticas por ErrorTag en
// localStorage y genera los pesos que consume el adjQuizGenerator para
// sobre-muestrear tags flojos.
//
// SSR-safe (Next.js): todo acceso a localStorage está protegido.
// Cuando migres a Supabase, la misma forma de `WeaknessState` se sube como
// tabla. El código que usa `recordResult` / `getWeights` no cambia.

import { useEffect, useState } from "react";
import type {
  AdjQuestion,
  AdjDistractor,
  ErrorTag,
} from "@/data/grammar/adjectiveQuiz";

// ─── Tipos ────────────────────────────────────────────────────────────────────

export interface TagStats {
  attempts: number;
  errors: number;
  lastSeen: number; // ms epoch
}

export interface WeaknessState {
  version: 1;
  tags: Partial<Record<ErrorTag, TagStats>>;
  /** Últimos N adjetivos vistos (forma diccionario) — para evitar repetir. */
  recentAdjs: string[];
  totalAnswered: number;
}

// ─── Constantes ───────────────────────────────────────────────────────────────

const STORAGE_KEY = "adj-weakness-v1";

/** Un tag necesita al menos este número de intentos antes de recibir peso. */
const MIN_ATTEMPTS_FOR_WEIGHT = 3;

/** Peso máximo que devuelve `getWeights()` por tag (tope de bias). */
const MAX_WEIGHT = 2;

/** Cuántos adjetivos recientes recordar. */
const MAX_RECENT = 20;

// ─── Storage (guardado con guardias de SSR) ───────────────────────────────────

function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function emptyState(): WeaknessState {
  return { version: 1, tags: {}, recentAdjs: [], totalAnswered: 0 };
}

function isValidState(x: unknown): x is WeaknessState {
  return (
    typeof x === "object" && x !== null &&
    (x as { version?: unknown }).version === 1 &&
    typeof (x as WeaknessState).tags === "object" &&
    Array.isArray((x as WeaknessState).recentAdjs)
  );
}

function load(): WeaknessState {
  if (!isBrowser()) return emptyState();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyState();
    const parsed: unknown = JSON.parse(raw);
    return isValidState(parsed) ? parsed : emptyState();
  } catch {
    return emptyState();
  }
}

function save(state: WeaknessState): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Quota excedida, private browsing, etc. — silenciar.
  }
  notify();
}

// ─── Pub/sub para que `useWeaknessState` reaccione a cambios ──────────────────

const listeners = new Set<() => void>();

function notify(): void {
  listeners.forEach(l => l());
}

// ─── API pública ──────────────────────────────────────────────────────────────

/**
 * Registra el resultado de una pregunta.
 *
 *   recordResult(question)                      → respuesta correcta
 *   recordResult(question, chosenDistractor)    → respuesta incorrecta
 *
 * Contabilidad:
 *   - Todos los `question.tags` reciben +1 intento.
 *   - Si hay distractor, su `misconception` recibe +1 error (y +1 intento si
 *     no estaba ya entre los tags de la pregunta).
 */
export function recordResult(
  question: Pick<AdjQuestion, "tags" | "promptMeta">,
  chosenDistractor?: Pick<AdjDistractor, "misconception">
): void {
  const state = load();
  const now = Date.now();

  // 1. Intento para todos los tags de la pregunta
  for (const tag of question.tags) {
    const s = state.tags[tag] ?? { attempts: 0, errors: 0, lastSeen: 0 };
    s.attempts += 1;
    s.lastSeen = now;
    state.tags[tag] = s;
  }

  // 2. Si fue error → sumar error al tag específico del distractor
  if (chosenDistractor) {
    const tag = chosenDistractor.misconception;
    const s = state.tags[tag] ?? { attempts: 0, errors: 0, lastSeen: 0 };
    if (!question.tags.includes(tag)) {
      // La misconception del distractor no era uno de los tags de la pregunta,
      // pero el usuario reveló esa confusión al elegirlo → cuenta como intento.
      s.attempts += 1;
    }
    s.errors += 1;
    s.lastSeen = now;
    state.tags[tag] = s;
  }

  // 3. Adjetivo reciente
  const dict = question.promptMeta?.adjDict;
  if (dict) {
    state.recentAdjs = [dict, ...state.recentAdjs.filter(d => d !== dict)]
      .slice(0, MAX_RECENT);
  }

  state.totalAnswered += 1;
  save(state);
}

/**
 * Devuelve el mapa de pesos listo para pasar al generator como `ctx.weights`.
 * Solo incluye tags con al menos `MIN_ATTEMPTS_FOR_WEIGHT` intentos.
 */
export function getWeights(): Partial<Record<ErrorTag, number>> {
  const { tags } = load();
  const out: Partial<Record<ErrorTag, number>> = {};

  for (const [tag, stats] of Object.entries(tags) as Array<[ErrorTag, TagStats]>) {
    if (!stats || stats.attempts < MIN_ATTEMPTS_FOR_WEIGHT) continue;
    const errorRate = stats.errors / stats.attempts;
    const weight = Math.min(MAX_WEIGHT, errorRate * MAX_WEIGHT);
    if (weight > 0) out[tag] = weight;
  }

  return out;
}

/** Top N tags más flojos (para mostrar en dashboard / feedback). */
export function getTopWeakTags(
  n: number = 5
): Array<{ tag: ErrorTag; weight: number; errors: number; attempts: number }> {
  const { tags } = load();
  return (Object.entries(tags) as Array<[ErrorTag, TagStats]>)
    .filter(([, s]) => s.attempts >= MIN_ATTEMPTS_FOR_WEIGHT)
    .map(([tag, s]) => ({
      tag,
      weight: Math.min(MAX_WEIGHT, (s.errors / s.attempts) * MAX_WEIGHT),
      errors: s.errors,
      attempts: s.attempts,
    }))
    .sort((a, b) => b.weight - a.weight)
    .slice(0, n);
}

/** Estado crudo (debug / dashboard avanzado). */
export function getStats(): WeaknessState {
  return load();
}

/** Últimos N adjetivos usados, para evitarlos en el próximo batch. */
export function getRecentAdjs(): string[] {
  return load().recentAdjs;
}

/** Borra todo (botón "reiniciar progreso"). */
export function resetWeakness(): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
  notify();
}

// ─── Hook React ───────────────────────────────────────────────────────────────

/**
 * Hook para consumir el estado desde un componente. Se re-renderiza cuando
 * `recordResult` o `resetWeakness` actualizan el storage.
 */
export function useWeaknessState(): WeaknessState {
  const [state, setState] = useState<WeaknessState>(emptyState);

  useEffect(() => {
    setState(load()); // carga inicial en cliente
    const listener = () => setState(load());
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  return state;
}