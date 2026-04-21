// src/data/grammar/adjectiveQuiz.ts

import type { RubySegment } from "@/app/components/ui/Ruby";
import type { AdjForm } from "@/lib/adjectiveEngine";

// ─── Modos ────────────────────────────────────────────────────────────────────

export type QuizMode =
  | "tipo"         // clasificar い vs な
  | "conjugacion"  // producir la forma pedida
  | "uso_frase"    // completar oración
  | "comparacion"  // より / のほうが / ほど…ない / etc.
  | "produccion";  // escribir la forma (controlada)

export const QUIZ_MODE_LABELS: Record<QuizMode, string> = {
  tipo:        "Tipo",
  conjugacion: "Conjugación",
  uso_frase:   "Uso en frase",
  comparacion: "Comparación",
  produccion:  "Producción",
};

export const QUIZ_MODE_DESCRIPTIONS: Record<QuizMode, string> = {
  tipo:        "Clasifica el adjetivo como い o な.",
  conjugacion: "Conjuga el adjetivo a la forma pedida.",
  uso_frase:   "Completa la oración con la forma correcta.",
  comparacion: "Elige el patrón comparativo correcto.",
  produccion:  "Escribe la forma en japonés.",
};

// ─── Dificultad ───────────────────────────────────────────────────────────────

export type Difficulty = "basico" | "uso" | "mixto" | "desafio";

export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  basico:  "Básico",
  uso:     "Uso",
  mixto:   "Mixto",
  desafio: "Desafío",
};

// ─── Taxonomía de errores ─────────────────────────────────────────────────────

export type ErrorTag =
  | "i_vs_na"
  | "past_negative"
  | "ii_vs_yoi"
  | "hodo_vs_yori"
  | "na_before_noun"
  | "predicate_vs_modifier"
  | "te_form"
  | "adverbial"
  | "negative_stem"
  | "tense_mix"
  | "register";

export const ERROR_LABELS: Record<ErrorTag, string> = {
  i_vs_na:                "い vs な",
  past_negative:          "Pasado negativo",
  ii_vs_yoi:              "いい / よい",
  hodo_vs_yori:           "ほど vs より",
  na_before_noun:         "な antes de sustantivo",
  predicate_vs_modifier:  "Predicado vs modificador",
  te_form:                "Forma て",
  adverbial:              "Forma adverbial",
  negative_stem:          "Negativo",
  tense_mix:              "Tiempo",
  register:               "Registro",
};

export const ERROR_FEEDBACK: Record<ErrorTag, string> = {
  i_vs_na:
    "Esa forma corresponde al otro tipo de adjetivo. Revisá si es い o な.",
  past_negative:
    "Pasado negativo: い-adj → くなかった / な-adj → じゃなかった.",
  ii_vs_yoi:
    "いい es irregular: todas sus conjugaciones pasan por よ (よかった, よくない…).",
  hodo_vs_yori:
    "より marca 'más que'; ほど…ない marca 'no tan… como'.",
  na_before_noun:
    "Los な-adjetivos llevan な antes de un sustantivo (静かな部屋).",
  predicate_vs_modifier:
    "Aquí el adjetivo modifica un sustantivo, no es el predicado.",
  te_form:
    "Forma て: い-adj → くて, な-adj → で.",
  adverbial:
    "Forma adverbial: い-adj → く, な-adj → に.",
  negative_stem:
    "Negativo: い-adj → くない, な-adj → じゃない.",
  tense_mix:
    "Revisá el tiempo: ¿presente o pasado?",
  register:
    "Revisá el registro: simple (だ) o formal (です).",
};

// ─── Forma de la pregunta ─────────────────────────────────────────────────────

export interface AdjDistractor {
  value: string;
  misconception: ErrorTag;
  /** Opcional: sobrescribe el feedback por defecto de `misconception`. */
  feedback?: string;
}

export interface AdjQuestion {
  id: string;
  mode: QuizMode;
  difficulty: Difficulty;
  tags: ErrorTag[];
  prompt: RubySegment[];
  promptMeta?: {
    targetForm?: AdjForm;
    spanish?: string;
    adjDict?: string;
    /** Respuestas aceptadas en input tipeado (modo producción). */
    accept?: string[];
  };
  correct: string;
  distractors: AdjDistractor[];
}

// ─── Plantillas autoreadas ────────────────────────────────────────────────────
//
// Slot: un segment con `text: "{ADJ}"` marca el hueco. El generator:
//   1) conjuga un adjetivo de ADJECTIVE_LIST a `targetForm` y lo usa como
//      respuesta correcta;
//   2) construye distractores aplicando la regla del TIPO OPUESTO, más una
//      forma distinta del mismo adjetivo (confusión de tiempo/modo).

export interface UsoFraseTemplate {
  id: string;
  difficulty: Difficulty;
  tags: ErrorTag[];
  segments: RubySegment[];   // debe tener un segment con text: "{ADJ}"
  targetForm: AdjForm;
  filter?: {
    type?: "i" | "na" | "both";
    /** Requiere agregar `domains` a AdjEntry. Si no lo agregás, se ignora. */
    domains?: string[];
  };
  translation: string;       // con "{adj}" como placeholder del significado
}

export const USO_FRASE_TEMPLATES: UsoFraseTemplate[] = [
  {
    id: "uf-before-noun-movie",
    difficulty: "basico",
    tags: ["na_before_noun", "i_vs_na"],
    segments: [
      { text: "これは" },
      { text: "{ADJ}" },
      { text: "映画", ruby: "えいが" },
      { text: "です。" },
    ],
    targetForm: "before_noun",
    filter: { type: "both" },
    translation: "Esta es una película {adj}.",
  },
  {
    id: "uf-past-neg-weather",
    difficulty: "uso",
    tags: ["past_negative", "i_vs_na"],
    segments: [
      { text: "昨日", ruby: "きのう" },
      { text: "は" },
      { text: "{ADJ}" },
      { text: "。" },
    ],
    targetForm: "past_neg",
    filter: { type: "both", domains: ["clima"] },
    translation: "Ayer no estaba {adj}.",
  },
  {
    id: "uf-te-form-person",
    difficulty: "uso",
    tags: ["te_form", "i_vs_na"],
    segments: [
      { text: "田中", ruby: "たなか" },
      { text: "さんは" },
      { text: "{ADJ}" },
      { text: "、" },
      { text: "明", ruby: "あか" },
      { text: "るい人", ruby: "ひと" },
      { text: "です。" },
    ],
    targetForm: "te_form",
    filter: { type: "both", domains: ["persona"] },
    translation: "Tanaka-san es {adj} y alegre.",
  },
  // TODO: una plantilla por cada combinación forma × contexto que quieras testear.
];

export interface ComparacionTemplate {
  id: string;
  difficulty: Difficulty;
  tags: ErrorTag[];
  pattern: "yori" | "no_hou_ga" | "hodo_nai" | "onaji_kurai" | "dochira";
  /** Un segment con `text: "____"` marca el hueco. */
  segments: RubySegment[];
  correct: string;
  distractors: AdjDistractor[];
  translation: string;
}

export const COMPARACION_TEMPLATES: ComparacionTemplate[] = [
  {
    id: "cmp-yori-tokyo-osaka",
    difficulty: "basico",
    tags: ["hodo_vs_yori"],
    pattern: "yori",
    segments: [
      { text: "東京", ruby: "とうきょう" },
      { text: "は" },
      { text: "大阪", ruby: "おおさか" },
      { text: "____" },
      { text: "大", ruby: "おお" },
      { text: "きいです。" },
    ],
    correct: "より",
    distractors: [
      { value: "ほど",     misconception: "hodo_vs_yori" },
      { value: "のほうが", misconception: "hodo_vs_yori" },
    ],
    translation: "Tokio es más grande que Osaka.",
  },
  {
    id: "cmp-hodo-nai-summer",
    difficulty: "uso",
    tags: ["hodo_vs_yori"],
    pattern: "hodo_nai",
    segments: [
      { text: "今年", ruby: "ことし" },
      { text: "の" },
      { text: "夏", ruby: "なつ" },
      { text: "は" },
      { text: "去年", ruby: "きょねん" },
      { text: "____" },
      { text: "暑", ruby: "あつ" },
      { text: "くないです。" },
    ],
    correct: "ほど",
    distractors: [
      { value: "より", misconception: "hodo_vs_yori" },
      { value: "と",   misconception: "hodo_vs_yori" },
    ],
    translation: "Este verano no es tan caluroso como el del año pasado.",
  },
  // TODO: añadir el resto (のほうが, と同じくらい, どちらが…).
];