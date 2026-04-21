// src/lib/adjQuizGenerator.ts

import { ADJECTIVE_LIST, type AdjEntry } from "@/data/grammar/adjectives";
import {
  conjugateAdj,
  ADJ_FORMS,
  ADJ_FORM_LABELS,
  type AdjForm,
} from "./adjectiveEngine";
import {
  USO_FRASE_TEMPLATES,
  COMPARACION_TEMPLATES,
  type AdjQuestion,
  type AdjDistractor,
  type QuizMode,
  type Difficulty,
  type ErrorTag,
  type UsoFraseTemplate,
} from "@/data/grammar/adjectiveQuiz";
import type { RubySegment } from "@/app/components/ui/Ruby";

// ─── Public API ───────────────────────────────────────────────────────────────

export interface QuizFilters {
  /** Modos habilitados. Si vacío, se usa "tipo". */
  modes: QuizMode[];
  count: number;
  difficulties?: Difficulty[];
  jlpt?: Array<"N5" | "N4" | "N3" | "N2" | "N1">;
  /** "both" (default) usa i-adj y na-adj. */
  adjType?: "i" | "na" | "both";
}

export interface QuizContext {
  /**
   * Weakness bias: valores positivos aumentan la probabilidad de preguntas
   * cuyos tags coincidan. Rango típico 0..2.
   */
  weights?: Partial<Record<ErrorTag, number>>;
}

/**
 * Genera una tanda de preguntas. Distribuye `count` entre los modos pedidos
 * en round-robin, aplica bias de weakness si hay weights, y devuelve el set
 * final mezclado.
 */
export function generateAdjQuiz(
  filters: QuizFilters,
  ctx?: QuizContext
): AdjQuestion[] {
  const pool = filterAdjs(filters);
  if (pool.length === 0) return [];

  const modes: QuizMode[] = filters.modes.length > 0 ? filters.modes : ["tipo"];
  const target = Math.max(1, filters.count);

  // Sobre-generamos ~2x para permitir dedupe y sampling con peso.
  const oversample = Math.max(target * 2, target + 6);
  const candidates: AdjQuestion[] = [];

  let idCounter = 0;
  let safety = 0;
  while (candidates.length < oversample && safety < oversample * 6) {
    const mode = modes[candidates.length % modes.length];
    const q = generateOne(mode, pool, filters, `q-${idCounter++}`);
    if (q) candidates.push(q);
    safety++;
  }

  if (candidates.length === 0) return [];

  return ctx?.weights
    ? weightedPick(candidates, ctx.weights, target)
    : shuffle(candidates).slice(0, target);
}

// ─── Per-mode generators ──────────────────────────────────────────────────────

function generateOne(
  mode: QuizMode,
  pool: AdjEntry[],
  filters: QuizFilters,
  id: string
): AdjQuestion | null {
  switch (mode) {
    case "tipo":        return genTipo(pool, id);
    case "conjugacion": return genConjugacion(pool, id);
    case "uso_frase":   return genUsoFrase(pool, filters, id);
    case "comparacion": return genComparacion(filters, id);
    case "produccion":  return genProduccion(pool, id);
  }
}

function genTipo(pool: AdjEntry[], id: string): AdjQuestion {
  const entry = pickOne(pool);
  const correct = entry.type === "i" ? "い-adjetivo" : "な-adjetivo";
  const wrong   = entry.type === "i" ? "な-adjetivo" : "い-adjetivo";

  return {
    id,
    mode: "tipo",
    difficulty: "basico",
    tags: ["i_vs_na"],
    prompt: adjPromptSegments(entry),
    promptMeta: { adjDict: entry.dict, spanish: entry.meaning },
    correct,
    distractors: [{ value: wrong, misconception: "i_vs_na" }],
  };
}

function genConjugacion(pool: AdjEntry[], id: string): AdjQuestion {
  const entry = pickOne(pool);
  const targetForm = pickOne(ADJ_FORMS);
  const correct = conjugateAdj(entry, targetForm).kanji;
  const distractors = buildWrongForms(entry, targetForm, correct, 3);

  const tags: ErrorTag[] = formTags(entry, targetForm);

  return {
    id,
    mode: "conjugacion",
    difficulty: conjugacionDifficulty(targetForm),
    tags,
    prompt: adjPromptSegments(entry),
    promptMeta: {
      adjDict: entry.dict,
      targetForm,
      spanish: entry.meaning,
    },
    correct,
    distractors,
  };
}

function genUsoFrase(
  pool: AdjEntry[],
  filters: QuizFilters,
  id: string
): AdjQuestion | null {
  const tpls = filterByDifficulty(USO_FRASE_TEMPLATES, filters);
  if (tpls.length === 0) return null;
  const tpl = pickOne(tpls);

  const tplPool = pool.filter(a => matchesTplFilter(a, tpl));
  if (tplPool.length === 0) return null;
  const entry = pickOne(tplPool);

  const correct = conjugateAdj(entry, tpl.targetForm).kanji;
  const distractors = buildWrongForms(entry, tpl.targetForm, correct, 3);

  // Sustituir {ADJ} por "____" para la pregunta
  const prompt: RubySegment[] = tpl.segments.map(s =>
    s.text === "{ADJ}" ? { text: "____" } : s
  );

  return {
    id,
    mode: "uso_frase",
    difficulty: tpl.difficulty,
    tags: [...tpl.tags],
    prompt,
    promptMeta: {
      adjDict: entry.dict,
      targetForm: tpl.targetForm,
      spanish: tpl.translation.replace("{adj}", entry.meaning),
    },
    correct,
    distractors,
  };
}

function genComparacion(filters: QuizFilters, id: string): AdjQuestion | null {
  const tpls = filterByDifficulty(COMPARACION_TEMPLATES, filters);
  if (tpls.length === 0) return null;
  const tpl = pickOne(tpls);
  return {
    id,
    mode: "comparacion",
    difficulty: tpl.difficulty,
    tags: [...tpl.tags],
    prompt: tpl.segments,
    promptMeta: { spanish: tpl.translation },
    correct: tpl.correct,
    distractors: [...tpl.distractors],
  };
}

function genProduccion(pool: AdjEntry[], id: string): AdjQuestion {
  const entry = pickOne(pool);
  const targetForm = pickOne(ADJ_FORMS);
  const result = conjugateAdj(entry, targetForm);

  // Aceptamos kanji y kana (dedup por si son iguales, p. ej. きれいな)
  const accept = [result.kanji, result.kana].filter(
    (v, i, a) => a.indexOf(v) === i
  );

  return {
    id,
    mode: "produccion",
    difficulty: "uso",
    tags: formTags(entry, targetForm),
    prompt: adjPromptSegments(entry),
    promptMeta: {
      adjDict: entry.dict,
      targetForm,
      spanish: `Escribe la forma "${ADJ_FORM_LABELS[targetForm]}" de ${entry.dict} (${entry.meaning}).`,
      accept,
    },
    correct: result.kanji,
    distractors: [],
  };
}

// ─── Distractor construction ──────────────────────────────────────────────────
//
// Estrategia: construimos candidatos en orden de "claridad pedagógica" y
// devolvemos los primeros N únicos.
//   1) Aplicar la regla del TIPO OPUESTO  → tag i_vs_na
//   2) Devolver OTRAS formas del mismo adjetivo → tag tense_mix / te_form / adverbial
//   3) Para いい: el resultado de conjugar como い regular → tag ii_vs_yoi

function buildWrongForms(
  entry: AdjEntry,
  targetForm: AdjForm,
  correct: string,
  count: number
): AdjDistractor[] {
  const out: AdjDistractor[] = [];
  const seen = new Set<string>([correct]);

  // 1. Conjugación con reglas del tipo opuesto
  const wrongType = wrongTypeConj(entry, targetForm);
  if (wrongType && !seen.has(wrongType)) {
    out.push({ value: wrongType, misconception: "i_vs_na" });
    seen.add(wrongType);
  }

  // 2. Otras formas del mismo adjetivo
  const altFormsOrder: Array<[AdjForm, ErrorTag]> = [
    ["present_neg", "tense_mix"],
    ["past_aff",    "tense_mix"],
    ["past_neg",    "tense_mix"],
    ["present_aff", "tense_mix"],
    ["te_form",     "te_form"],
    ["adverbial",   "adverbial"],
    ["before_noun", "na_before_noun"],
  ];
  for (const [f, tag] of altFormsOrder) {
    if (out.length >= count) break;
    if (f === targetForm) continue;
    const v = conjugateAdj(entry, f).kanji;
    if (!seen.has(v)) {
      out.push({ value: v, misconception: tag });
      seen.add(v);
    }
  }

  // 3. いい: regla regular incorrecta
  if (entry.reading === "いい" && out.length < count) {
    const irregularWrong = iiAsRegular(targetForm);
    if (irregularWrong && !seen.has(irregularWrong)) {
      out.push({ value: irregularWrong, misconception: "ii_vs_yoi" });
      seen.add(irregularWrong);
    }
  }

  return out.slice(0, count);
}

/** Aplica la conjugación del tipo OPUESTO para generar un distractor. */
function wrongTypeConj(entry: AdjEntry, form: AdjForm): string {
  if (entry.type === "i") {
    // Reglas de na-adj sobre la forma diccionario completa
    const stem = entry.dict;
    switch (form) {
      case "present_aff": return stem + "だ";
      case "before_noun": return stem + "な";
      case "present_neg": return stem + "じゃない";
      case "past_aff":    return stem + "だった";
      case "past_neg":    return stem + "じゃなかった";
      case "te_form":     return stem + "で";
      case "adverbial":   return stem + "に";
    }
  } else {
    // Reglas de i-adj sobre el stem del na-adj
    const stem = entry.stem;
    switch (form) {
      case "present_aff":
      case "before_noun": return stem + "い";
      case "present_neg": return stem + "くない";
      case "past_aff":    return stem + "かった";
      case "past_neg":    return stem + "くなかった";
      case "te_form":     return stem + "くて";
      case "adverbial":   return stem + "く";
    }
  }
}

/** いい conjugado con reglas regulares (いかった en vez de よかった). */
function iiAsRegular(form: AdjForm): string | null {
  const stem = "い";
  switch (form) {
    case "present_aff":
    case "before_noun": return "いい";
    case "present_neg": return stem + "くない";
    case "past_aff":    return stem + "かった";
    case "past_neg":    return stem + "くなかった";
    case "te_form":     return stem + "くて";
    case "adverbial":   return stem + "く";
  }
}

// ─── Filtering & matching ─────────────────────────────────────────────────────

function filterAdjs(filters: QuizFilters): AdjEntry[] {
  return ADJECTIVE_LIST.filter(a => {
    if (filters.adjType && filters.adjType !== "both" && a.type !== filters.adjType) return false;
    if (filters.jlpt && filters.jlpt.length > 0 && !filters.jlpt.includes(a.level)) return false;
    return true;
  });
}

function filterByDifficulty<T extends { difficulty: Difficulty }>(
  tpls: T[],
  filters: QuizFilters
): T[] {
  if (!filters.difficulties || filters.difficulties.length === 0) return tpls;
  return tpls.filter(t => filters.difficulties!.includes(t.difficulty));
}

function matchesTplFilter(entry: AdjEntry, tpl: UsoFraseTemplate): boolean {
  if (!tpl.filter) return true;
  if (tpl.filter.type && tpl.filter.type !== "both" && entry.type !== tpl.filter.type) {
    return false;
  }
  if (tpl.filter.domains && tpl.filter.domains.length > 0) {
    const domains = (entry as AdjEntry & { domains?: string[] }).domains;
    if (!domains || !domains.some(d => tpl.filter!.domains!.includes(d))) {
      return false;
    }
  }
  return true;
}

// ─── Tagging helpers ──────────────────────────────────────────────────────────

function formTags(entry: AdjEntry, form: AdjForm): ErrorTag[] {
  const tags: ErrorTag[] = ["i_vs_na"];
  if (entry.reading === "いい") tags.push("ii_vs_yoi");
  if (form === "past_neg")     tags.push("past_negative");
  if (form === "te_form")      tags.push("te_form");
  if (form === "adverbial")    tags.push("adverbial");
  if (form === "before_noun")  tags.push("na_before_noun");
  return tags;
}

function conjugacionDifficulty(form: AdjForm): Difficulty {
  switch (form) {
    case "present_aff":
    case "before_noun": return "basico";
    case "present_neg":
    case "past_aff":    return "uso";
    case "past_neg":    return "mixto";
    case "te_form":
    case "adverbial":   return "desafio";
  }
}

// ─── Display helpers ──────────────────────────────────────────────────────────

function adjPromptSegments(entry: AdjEntry): RubySegment[] {
  if (entry.dict === entry.reading) {
    return [{ text: entry.dict }];
  }
  return [{ text: entry.dict, ruby: entry.reading }];
}

// ─── Weighted sampling ────────────────────────────────────────────────────────

function weightedPick(
  items: AdjQuestion[],
  weights: Partial<Record<ErrorTag, number>>,
  n: number
): AdjQuestion[] {
  const scored = items.map(q => {
    const extra = q.tags.reduce((s, t) => s + Math.max(0, weights[t] ?? 0), 0);
    return { q, weight: 1 + extra };
  });

  const out: AdjQuestion[] = [];
  while (out.length < n && scored.length > 0) {
    const total = scored.reduce((s, x) => s + x.weight, 0);
    let r = Math.random() * total;
    let chosen = scored.length - 1;
    for (let i = 0; i < scored.length; i++) {
      r -= scored[i].weight;
      if (r <= 0) { chosen = i; break; }
    }
    out.push(scored[chosen].q);
    scored.splice(chosen, 1);
  }
  return out;
}

// ─── Utils ────────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickOne<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}