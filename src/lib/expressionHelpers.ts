// src/lib/expressionHelpers.ts

import {
  EXPRESSIONS_CATALOG,
  type ExpressionItem,
  type JlptLevel,
  type ExpressionCategory,
} from "@/data/grammar/expresiones";

// ─── Lookups ──────────────────────────────────────────────────────────────────

export function getAllExpressions(): ExpressionItem[] {
  return EXPRESSIONS_CATALOG.expressions;
}

export function getExpressionById(id: string): ExpressionItem | undefined {
  return EXPRESSIONS_CATALOG.expressions.find((e) => e.id === id);
}

export function getExpressionsByLevel(level: JlptLevel): ExpressionItem[] {
  return EXPRESSIONS_CATALOG.expressions
    .filter((e) => e.level === level)
    .sort((a, b) => a.order - b.order);
}

export function getExpressionsByCategory(category: ExpressionCategory): ExpressionItem[] {
  return EXPRESSIONS_CATALOG.expressions.filter((e) => e.category === category);
}

// ─── Level metadata ───────────────────────────────────────────────────────────

export interface LevelMeta {
  level: JlptLevel;
  label: string;           // "N5"
  caption: string;         // "Básico"
  accent: string;          // hex color
  accentSoft: string;      // same hex with reduced alpha for tinted surfaces
  description: string;
  count: number;
}

// Captions taken from common JLPT progression labels (Spanish)
const LEVEL_CAPTIONS: Record<JlptLevel, { caption: string; description: string }> = {
  N5: {
    caption: "Básico",
    description: "Patrones esenciales del día a día: deseo, permiso, prohibición, invitaciones.",
  },
  N4: {
    caption: "Elemental",
    description: "Obligación, planes, cambios de hábito y apariencia. Puente a conversación real.",
  },
  N3: {
    caption: "Intermedio",
    description: "Decisiones, causas, consecuencias y matices más allá del aula inicial.",
  },
  N2: {
    caption: "Intermedio avanzado",
    description: "Registros formales, contraste sofisticado y uso cotidiano en el trabajo.",
  },
  N1: {
    caption: "Avanzado",
    description: "Expresiones literarias y escritas. Lo que se lee en libros, prensa y discursos.",
  },
};

export function getLevelMeta(level: JlptLevel): LevelMeta {
  const expressions = getExpressionsByLevel(level);
  const accent = expressions[0]?.ui.accent ?? "#1A1A2E";
  return {
    level,
    label: level,
    caption: LEVEL_CAPTIONS[level].caption,
    description: LEVEL_CAPTIONS[level].description,
    accent,
    accentSoft: hexWithAlpha(accent, 0.12),
    count: expressions.length,
  };
}

export function getAllLevelsMeta(): LevelMeta[] {
  return EXPRESSIONS_CATALOG.ui.levelOrder.map(getLevelMeta);
}

// ─── Category meta-groups ────────────────────────────────────────────────────
// The raw catalog has 30 categories — too many for UI filtering. These groups
// collapse them into human-scaled buckets for the level page.

export interface MetaGroup {
  id: string;
  label: string;
  categories: ExpressionCategory[];
}

export const META_GROUPS: MetaGroup[] = [
  { id: "voluntad",    label: "Voluntad e intención",      categories: ["deseo", "intencion", "plan", "decision", "objetivo", "intento"] },
  { id: "permiso",     label: "Permisos y obligaciones",   categories: ["peticion", "permiso", "prohibicion", "obligacion", "invitacion"] },
  { id: "tiempo",      label: "Tiempo y secuencia",        categories: ["secuencia", "tiempo", "progreso", "frecuencia"] },
  { id: "causa",       label: "Causa y consecuencia",      categories: ["razon", "causa", "resultado", "juicio"] },
  { id: "apariencia",  label: "Apariencia e inferencia",   categories: ["apariencia", "inferencia"] },
  { id: "cambio",      label: "Cambio y estado",           categories: ["cambio"] },
  { id: "contraste",   label: "Contraste y matiz",         categories: ["contraste", "comparacion", "restriccion", "limite"] },
  { id: "otros",       label: "Otros",                     categories: ["ejemplos", "experiencia", "formal", "avanzado"] },
];

export function getMetaGroupForCategory(category: ExpressionCategory): MetaGroup | undefined {
  return META_GROUPS.find((g) => g.categories.includes(category));
}

export function groupExpressionsByMeta(expressions: ExpressionItem[]): Array<{
  group: MetaGroup;
  items: ExpressionItem[];
}> {
  const buckets = new Map<string, ExpressionItem[]>();
  for (const e of expressions) {
    const g = getMetaGroupForCategory(e.category);
    if (!g) continue;
    const arr = buckets.get(g.id) ?? [];
    arr.push(e);
    buckets.set(g.id, arr);
  }
  return META_GROUPS
    .filter((g) => buckets.has(g.id))
    .map((g) => ({ group: g, items: buckets.get(g.id)! }));
}

// ─── CompareWith resolution ──────────────────────────────────────────────────

export interface ResolvedCompareRef {
  pattern: string;
  id?: string;
  level?: JlptLevel;         // present only when id resolves
  title?: string;            // present only when id resolves
}

export function resolveCompareRef(ref: { pattern: string; id?: string }): ResolvedCompareRef {
  if (!ref.id) return { pattern: ref.pattern };
  const expr = getExpressionById(ref.id);
  if (!expr) return { pattern: ref.pattern };
  return {
    pattern: ref.pattern,
    id: expr.id,
    level: expr.level,
    title: expr.title,
  };
}

// ─── Utilities ───────────────────────────────────────────────────────────────

/** Convert a hex color like "#22C55E" into "rgba(r,g,b,a)". */
export function hexWithAlpha(hex: string, alpha: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** Humanize a category slug for display. */
export function categoryLabel(cat: ExpressionCategory): string {
  const labels: Record<ExpressionCategory, string> = {
    deseo: "Deseo",
    peticion: "Petición",
    permiso: "Permiso",
    prohibicion: "Prohibición",
    invitacion: "Invitación",
    progreso: "Progreso",
    secuencia: "Secuencia",
    ejemplos: "Ejemplos",
    experiencia: "Experiencia",
    intencion: "Intención",
    obligacion: "Obligación",
    plan: "Plan",
    apariencia: "Apariencia",
    cambio: "Cambio",
    razon: "Razón",
    contraste: "Contraste",
    intento: "Intento",
    decision: "Decisión",
    objetivo: "Objetivo",
    resultado: "Resultado",
    tiempo: "Tiempo",
    frecuencia: "Frecuencia",
    causa: "Causa",
    comparacion: "Comparación",
    limite: "Límite",
    juicio: "Juicio",
    inferencia: "Inferencia",
    restriccion: "Restricción",
    formal: "Formal",
    avanzado: "Avanzado",
  };
  return labels[cat] ?? cat;
}

/** Humanize a register. */
export function registerLabel(r: string): string {
  switch (r) {
    case "casual": return "Casual";
    case "polite": return "Cortés";
    case "formal": return "Formal";
    case "written": return "Escrito";
    default: return r;
  }
}

/** Badge for importance tier. */
export function importanceLabel(i: string): string {
  switch (i) {
    case "core":   return "Esencial";
    case "high":   return "Alta";
    case "medium": return "Media";
    default: return i;
  }
}