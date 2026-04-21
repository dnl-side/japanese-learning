// src/lib/adjectiveEngine.ts

import type { AdjEntry } from "@/data/grammar/adjectives";

// ─── Types ────────────────────────────────────────────────────────────────────

export type AdjForm =
  | "present_aff"   // 高い          / 静か
  | "present_neg"   // 高くない      / 静かじゃない
  | "past_aff"      // 高かった      / 静かだった
  | "past_neg"      // 高くなかった  / 静かじゃなかった
  | "te_form"       // 高くて        / 静かで
  | "adverbial"     // 高く          / 静かに
  | "before_noun";  // 高い          / 静かな

export const ADJ_FORMS: AdjForm[] = [
  "present_aff", "present_neg",
  "past_aff",    "past_neg",
  "te_form",     "adverbial",
  "before_noun",
];

export const ADJ_FORM_LABELS: Record<AdjForm, string> = {
  present_aff: "Presente afirmativo",
  present_neg: "Presente negativo",
  past_aff:    "Pasado afirmativo",
  past_neg:    "Pasado negativo",
  te_form:     "Forma て",
  adverbial:   "Adverbial",
  before_noun: "Antes de sustantivo",
};

export interface AdjConjResult {
  /** Con kanji cuando corresponde (p. ej. 高くない). */
  kanji: string;
  /** Solo kana (p. ej. たかくない). */
  kana: string;
  form: AdjForm;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function stripTail(s: string, tail: string): string {
  return s.endsWith(tail) ? s.slice(0, -tail.length) : s;
}

/**
 * いい / 良い es irregular: todas las formas salvo la diccionario
 * se conjugan a través de よ (よかった, よくない…).
 * Se detecta por `reading === "いい"`.
 */
function isIiAdj(entry: AdjEntry): boolean {
  return entry.reading === "いい";
}

// ─── Conjugación núcleo ───────────────────────────────────────────────────────

function conjIi(entry: AdjEntry, form: AdjForm): AdjConjResult {
  const useKanji = entry.dict.includes("良");
  const kStem = useKanji ? "良" : "い";
  const hStem = "よ";

  const build = (tail: string): AdjConjResult => ({
    kanji: kStem + tail,
    kana:  hStem + tail,
    form,
  });

  switch (form) {
    case "present_aff":
    case "before_noun":
      // La forma diccionario queda como está (いい / 良い), NO よい.
      return { kanji: entry.dict, kana: entry.reading, form };
    case "present_neg": return build("くない");
    case "past_aff":    return build("かった");
    case "past_neg":    return build("くなかった");
    case "te_form":     return build("くて");
    case "adverbial":   return build("く");
  }
}

function conjI(entry: AdjEntry, form: AdjForm): AdjConjResult {
  // い-adj: el stem es todo lo que viene antes del い final.
  // `entry.stem` tiene el stem en kanji (p. ej. "高"); el stem en kana
  // lo derivamos quitando el い de `entry.reading`.
  const kStem = entry.stem;
  const hStem = stripTail(entry.reading, "い");

  const build = (tail: string): AdjConjResult => ({
    kanji: kStem + tail,
    kana:  hStem + tail,
    form,
  });

  switch (form) {
    case "present_aff":
    case "before_noun": return build("い");
    case "present_neg": return build("くない");
    case "past_aff":    return build("かった");
    case "past_neg":    return build("くなかった");
    case "te_form":     return build("くて");
    case "adverbial":   return build("く");
  }
}

function conjNa(entry: AdjEntry, form: AdjForm): AdjConjResult {
  // な-adj: el stem ES el adjetivo entero (p. ej. "静か", "きれい").
  const kStem = entry.stem;
  const hStem = entry.reading;

  const build = (tail: string): AdjConjResult => ({
    kanji: kStem + tail,
    kana:  hStem + tail,
    form,
  });

  switch (form) {
    case "present_aff": return build("だ");
    case "before_noun": return build("な");
    case "present_neg": return build("じゃない");
    case "past_aff":    return build("だった");
    case "past_neg":    return build("じゃなかった");
    case "te_form":     return build("で");
    case "adverbial":   return build("に");
  }
}

/**
 * Conjuga un adjetivo a la forma pedida. Devuelve SIEMPRE forma simple (plain).
 * Usá `toPolite()` para convertir a forma formal (です / でした…).
 *
 * Limitaciones conocidas (v1):
 *   - 同じ NO lleva な antes de sustantivo (同じ人, no 同じな人).
 *     Marcalo como caso especial en ADJECTIVE_LIST cuando lo agregues.
 *   - Negativo formal con ありません (高くありません) no se genera; se usa
 *     la variante con です (高くないです). Ambas son correctas.
 */
export function conjugateAdj(entry: AdjEntry, form: AdjForm): AdjConjResult {
  if (isIiAdj(entry))     return conjIi(entry, form);
  if (entry.type === "i") return conjI(entry, form);
  return conjNa(entry, form);
}

/** Devuelve las 7 formas de un adjetivo de una sola vez. */
export function conjugateAll(entry: AdjEntry): Record<AdjForm, AdjConjResult> {
  return Object.fromEntries(
    ADJ_FORMS.map(f => [f, conjugateAdj(entry, f)])
  ) as Record<AdjForm, AdjConjResult>;
}

// ─── Wrapper de formalidad ────────────────────────────────────────────────────

/**
 * Convierte un resultado en forma simple a forma formal (です / でした…).
 * - い-adj     : añade です al final
 * - な-adj     : reemplaza la cópula (だ → です, だった → でした, etc.)
 * - `te_form`, `adverbial`, `before_noun`: no cambian.
 */
export function toPolite(entry: AdjEntry, result: AdjConjResult): AdjConjResult {
  if (isIiAdj(entry) || entry.type === "i") {
    if (result.form === "before_noun") return result;
    return {
      ...result,
      kanji: result.kanji + "です",
      kana:  result.kana  + "です",
    };
  }

  // な-adj — reemplazar la cola según la forma
  const kStem = entry.stem;
  const hStem = entry.reading;

  switch (result.form) {
    case "present_aff":
      return { form: result.form, kanji: kStem + "です",             kana: hStem + "です" };
    case "past_aff":
      return { form: result.form, kanji: kStem + "でした",           kana: hStem + "でした" };
    case "present_neg":
      return { form: result.form, kanji: kStem + "じゃないです",      kana: hStem + "じゃないです" };
    case "past_neg":
      return { form: result.form, kanji: kStem + "じゃなかったです",  kana: hStem + "じゃなかったです" };
    default:
      // te_form / adverbial / before_noun — se quedan igual
      return result;
  }
}