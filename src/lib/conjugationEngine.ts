// src/lib/conjugationEngine.ts

import type { VerbEntry } from "@/data/grammar/verbs";

// ─── Types ────────────────────────────────────────────────────────────────────

export type FormKey =
  | "masu" | "te" | "ta" | "nai" | "tai"
  | "mashou" | "potential" | "passive" | "causative" | "causative_passive";

export type TenseKey =
  | "present"        // ます / ない / etc.
  | "past"           // ました / なかった / etc.
  | "negative"       // ません / たくない / etc.
  | "past_negative"; // ませんでした / たくなかった / etc.

export interface ConjugationResult {
  morpheme: string;        // just the ending e.g. "います"
  full: string;            // full verb e.g. "買います"
  fullReading: string;     // full hiragana reading e.g. "かいます"
  label: string;           // human label e.g. "ます形・現在"
}

// ─── Available tenses per form ────────────────────────────────────────────────

export const FORM_TENSES: Record<FormKey, TenseKey[]> = {
  masu:             ["present", "past", "negative", "past_negative"],
  te:               ["present"],   // て is a single form
  ta:               ["past"],      // た is already past
  nai:              ["present", "past"],
  tai:              ["present", "past", "negative", "past_negative"],
  mashou:           ["present"],
  potential:        ["present", "past", "negative", "past_negative"],
  passive:          ["present", "past", "negative", "past_negative"],
  causative:        ["present", "past", "negative", "past_negative"],
  causative_passive:["present", "past", "negative", "past_negative"],
};

export const TENSE_LABELS: Record<TenseKey, string> = {
  present:      "Presente",
  past:         "Pasado",
  negative:     "Negativo",
  past_negative:"Pasado negativo",
};

export const FORM_LABELS: Record<FormKey, string> = {
  masu:             "ます形",
  te:               "て形",
  ta:               "た形",
  nai:              "ない形",
  tai:              "たい形",
  mashou:           "ましょう形",
  potential:        "可能形",
  passive:          "受身形",
  causative:        "使役形",
  causative_passive:"使役受身形",
};

// ─── Godan stem helpers ───────────────────────────────────────────────────────

// Maps morpheme → い stem (ます base)
const I_STEM: Record<string, string> = {
  う: "い", く: "き", ぐ: "ぎ", す: "し",
  つ: "ち", ぬ: "に", ぶ: "び", む: "み", る: "り",
};

// Maps morpheme → あ stem (ない base) — note: う → わ not うあ
const A_STEM: Record<string, string> = {
  う: "わ", く: "か", ぐ: "が", す: "さ",
  つ: "た", ぬ: "な", ぶ: "ば", む: "ま", る: "ら",
};

// Maps morpheme → え stem (potential base)
const E_STEM: Record<string, string> = {
  う: "え", く: "け", ぐ: "げ", す: "せ",
  つ: "て", ぬ: "ね", ぶ: "べ", む: "め", る: "れ",
};

// て形 / た形 special rules for godan
function godanTeBase(morpheme: string): { te: string; ta: string } {
  switch (morpheme) {
    case "う": case "つ": case "る": return { te: "って", ta: "った" };
    case "く": return { te: "いて", ta: "いた" };
    case "ぐ": return { te: "いで", ta: "いだ" };
    case "す": return { te: "して", ta: "した" };
    case "ぬ": case "ぶ": case "む": return { te: "んで", ta: "んだ" };
    default: return { te: "って", ta: "った" };
  }
}

// ─── Conjugation engine ───────────────────────────────────────────────────────

export function conjugate(
  verb: VerbEntry,
  form: FormKey,
  tense: TenseKey
): ConjugationResult | null {

  // Validate tense is available for this form
  if (!FORM_TENSES[form].includes(tense)) return null;

  const { kanji, furigana, morpheme, group } = verb;
  const root = kanji || ""; // kanji root (may be empty for する)
  const rootReading = furigana;

  let suffix = "";

  // ── Irregular (する / くる) ────────────────────────────────────────────────
  if (group === "irregular") {
    const isSuru = morpheme === "する" || morpheme === "する";
    const isKuru = root === "来" || morpheme === "る" && furigana === "";

    // Actually detect by dictionary
    const isSuruVerb = verb.dictionary === "する" || verb.dictionary.endsWith("する");
    const isKuruVerb = verb.dictionary === "くる";

    suffix = irregularConjugation(isSuruVerb ? "suru" : "kuru", form, tense);
    const fullReading = isSuruVerb
      ? irregularReading("suru", form, tense)
      : irregularReading("kuru", form, tense);

    if (!suffix) return null;

    const fullVerb = isSuruVerb
      ? suffix  // する verbs just use the suffix
      : (form === "masu" || form === "te" || form === "ta" || form === "tai" || form === "mashou"
          ? `来${suffix}`
          : `来${suffix}`);

    return {
      morpheme: suffix,
      full: fullVerb,
      fullReading,
      label: `${FORM_LABELS[form]}・${TENSE_LABELS[tense]}`,
    };
  }

  // ── Ichidan ───────────────────────────────────────────────────────────────
  if (group === "ichidan") {
    // Strip る from morpheme to get the stem addition
    // morpheme can be "る", "べる", "きる", "える", etc.
    const stemSuffix = morpheme === "る" ? "" : morpheme.slice(0, -1); // remove る

    switch (form) {
      case "masu":
        suffix = stemSuffix + getMasuTense(tense, "");
        break;
      case "te":
        suffix = stemSuffix + "て";
        break;
      case "ta":
        suffix = stemSuffix + "た";
        break;
      case "nai":
        suffix = stemSuffix + getNaiTense(tense);
        break;
      case "tai":
        suffix = stemSuffix + getTaiTense(tense);
        break;
      case "mashou":
        suffix = stemSuffix + "ましょう";
        break;
      case "potential":
        suffix = stemSuffix + getPotentialTense("られ", tense);
        break;
      case "passive":
        suffix = stemSuffix + getPotentialTense("られ", tense);
        break;
      case "causative":
        suffix = stemSuffix + getCausativeTense("させ", tense);
        break;
      case "causative_passive":
        suffix = stemSuffix + "させられ" + getBaseEnding(tense);
        break;
    }

    const full = root + suffix;
    const fullReading = rootReading + suffix;
    return { morpheme: suffix, full, fullReading, label: `${FORM_LABELS[form]}・${TENSE_LABELS[tense]}` };
  }

  // ── Godan ─────────────────────────────────────────────────────────────────
  if (group === "godan") {
    const iStem = I_STEM[morpheme] ?? morpheme;
    const aStem = A_STEM[morpheme] ?? morpheme;
    const eStem = E_STEM[morpheme] ?? morpheme;
    const { te, ta } = godanTeBase(morpheme);

    switch (form) {
      case "masu":
        suffix = iStem + getMasuTense(tense, "");
        break;
      case "te":
        suffix = te;
        break;
      case "ta":
        suffix = ta;
        break;
      case "nai":
        suffix = aStem + getNaiTense(tense);
        break;
      case "tai":
        suffix = iStem + getTaiTense(tense);
        break;
      case "mashou":
        suffix = iStem + "ましょう";
        break;
      case "potential":
        suffix = eStem + getPotentialTense("", tense) + "る";
        // potential for godan: え→える (present), えない (neg), えた (past)
        suffix = godanPotential(eStem, tense);
        break;
      case "passive":
        suffix = aStem + getPotentialTense("れ", tense);
        break;
      case "causative":
        suffix = aStem + getCausativeTense("せ", tense);
        break;
      case "causative_passive":
        // う verbs: わされる, others: あ+させられる
        if (morpheme === "す") {
          suffix = aStem + "させられ" + getBaseEnding(tense);
        } else {
          suffix = aStem + "され" + getBaseEnding(tense);
        }
        break;
    }

    const full = root + suffix;
    const fullReading = rootReading + suffix;
    return { morpheme: suffix, full, fullReading, label: `${FORM_LABELS[form]}・${TENSE_LABELS[tense]}` };
  }

  return null;
}

// ─── Tense helper builders ────────────────────────────────────────────────────

function getMasuTense(tense: TenseKey, _base: string): string {
  switch (tense) {
    case "present":      return "ます";
    case "past":         return "ました";
    case "negative":     return "ません";
    case "past_negative":return "ませんでした";
  }
}

function getNaiTense(tense: TenseKey): string {
  switch (tense) {
    case "present": return "ない";
    case "past":    return "なかった";
    default:        return "ない";
  }
}

function getTaiTense(tense: TenseKey): string {
  switch (tense) {
    case "present":       return "たい";
    case "past":          return "たかった";
    case "negative":      return "たくない";
    case "past_negative": return "たくなかった";
  }
}

function getPotentialTense(stem: string, tense: TenseKey): string {
  switch (tense) {
    case "present":       return stem + "る";
    case "past":          return stem + "た";
    case "negative":      return stem + "ない";
    case "past_negative": return stem + "なかった";
  }
}

function getCausativeTense(stem: string, tense: TenseKey): string {
  switch (tense) {
    case "present":       return stem + "る";
    case "past":          return stem + "た";
    case "negative":      return stem + "ない";
    case "past_negative": return stem + "なかった";
  }
}

function getBaseEnding(tense: TenseKey): string {
  switch (tense) {
    case "present":       return "る";
    case "past":          return "た";
    case "negative":      return "ない";
    case "past_negative": return "なかった";
  }
}

function godanPotential(eStem: string, tense: TenseKey): string {
  switch (tense) {
    case "present":       return eStem + "る";
    case "past":          return eStem + "た";
    case "negative":      return eStem + "ない";
    case "past_negative": return eStem + "なかった";
  }
}

// ─── Irregular conjugation lookup ────────────────────────────────────────────

function irregularConjugation(verb: "suru" | "kuru", form: FormKey, tense: TenseKey): string {
  const map: Record<"suru" | "kuru", Partial<Record<FormKey, Partial<Record<TenseKey, string>>>>> = {
    suru: {
      masu:             { present: "します",         past: "しました",         negative: "しません",         past_negative: "しませんでした" },
      te:               { present: "して" },
      ta:               { past: "した" },
      nai:              { present: "しない",          past: "しなかった" },
      tai:              { present: "したい",          past: "したかった",        negative: "したくない",        past_negative: "したくなかった" },
      mashou:           { present: "しましょう" },
      potential:        { present: "できる",          past: "できた",            negative: "できない",          past_negative: "できなかった" },
      passive:          { present: "される",          past: "された",            negative: "されない",          past_negative: "されなかった" },
      causative:        { present: "させる",          past: "させた",            negative: "させない",          past_negative: "させなかった" },
      causative_passive:{ present: "させられる",      past: "させられた",        negative: "させられない",      past_negative: "させられなかった" },
    },
    kuru: {
      masu:             { present: "きます",          past: "きました",          negative: "きません",          past_negative: "きませんでした" },
      te:               { present: "きて" },
      ta:               { past: "きた" },
      nai:              { present: "こない",          past: "こなかった" },
      tai:              { present: "きたい",          past: "きたかった",         negative: "きたくない",        past_negative: "きたくなかった" },
      mashou:           { present: "きましょう" },
      potential:        { present: "こられる",        past: "こられた",           negative: "こられない",        past_negative: "こられなかった" },
      passive:          { present: "こられる",        past: "こられた",           negative: "こられない",        past_negative: "こられなかった" },
      causative:        { present: "こさせる",        past: "こさせた",           negative: "こさせない",        past_negative: "こさせなかった" },
      causative_passive:{ present: "こさせられる",    past: "こさせられた",       negative: "こさせられない",    past_negative: "こさせられなかった" },
    },
  };
  return map[verb]?.[form]?.[tense] ?? "";
}

function irregularReading(verb: "suru" | "kuru", form: FormKey, tense: TenseKey): string {
  // For suru compounds the reading depends on the compound — return just suffix
  // For kuru add 来 reading
  const suffix = irregularConjugation(verb, form, tense);
  if (verb === "kuru") {
    const kanjiReading: Partial<Record<FormKey, Partial<Record<TenseKey, string>>>> = {
      nai:    { present: "こ", past: "こ" },
      mashou: { present: "き" },
      potential:   { present: "こ", past: "こ", negative: "こ", past_negative: "こ" },
      passive:     { present: "こ", past: "こ", negative: "こ", past_negative: "こ" },
      causative:   { present: "こ", past: "こ", negative: "こ", past_negative: "こ" },
      causative_passive: { present: "こ", past: "こ", negative: "こ", past_negative: "こ" },
    };
    const reading = kanjiReading[form]?.[tense] ?? "き";
    return `来${reading}${suffix}`;
  }
  return suffix;
}