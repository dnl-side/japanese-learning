import type { JlptLevel, JlptLevelMeta, JlptSection, JlptSectionMeta } from "./types";

export const JLPT_LEVEL_META: Record<JlptLevel, JlptLevelMeta> = {
  N5: {
    level: "N5",
    slug: "n5",
    label: "JLPT N5",
    jpLabel: "入門",
    description: "Primer nivel del examen: lectura base, vocabulario esencial, gramática inicial y comprensión auditiva simple.",
    accent: "#B91C1C",
    color: "#FCA5A5",
    status: "ready",
  },
  N4: {
    level: "N4",
    slug: "n4",
    label: "JLPT N4",
    jpLabel: "基礎",
    description: "Base ampliada: más verbos, lectura cotidiana y conversaciones simples con mayor densidad.",
    accent: "#C2410C",
    color: "#FDBA74",
    status: "scaffold",
  },
  N3: {
    level: "N3",
    slug: "n3",
    label: "JLPT N3",
    jpLabel: "中級",
    description: "Puente intermedio: lectura más extensa, matices gramaticales y comprensión de contexto.",
    accent: "#A16207",
    color: "#FDE68A",
    status: "scaffold",
  },
  N2: {
    level: "N2",
    slug: "n2",
    label: "JLPT N2",
    jpLabel: "上級前",
    description: "Nivel avanzado práctico: textos densos, vocabulario abstracto y selección fina de gramática.",
    accent: "#1D4ED8",
    color: "#93C5FD",
    status: "scaffold",
  },
  N1: {
    level: "N1",
    slug: "n1",
    label: "JLPT N1",
    jpLabel: "最上級",
    description: "Alta precisión: lectura compleja, vocabulario formal, matices discursivos y listening rápido.",
    accent: "#581C87",
    color: "#D8B4FE",
    status: "scaffold",
  },
};

export const JLPT_SECTION_META: Record<JlptSection, JlptSectionMeta> = {
  vocabulary: {
    section: "vocabulary",
    label: "Vocabulario",
    jpLabel: "文字・語彙",
    description: "Lecturas de kanji, escritura correcta, palabra adecuada por contexto, paráfrasis y uso real.",
    accent: "#B91C1C",
    color: "#FCA5A5",
  },
  grammar: {
    section: "grammar",
    label: "Gramática",
    jpLabel: "文法",
    description: "Selección de forma, orden de oración y gramática dentro de textos cortos.",
    accent: "#C2410C",
    color: "#FDBA74",
  },
  reading: {
    section: "reading",
    label: "Lectura",
    jpLabel: "読解",
    description: "Textos cortos, avisos, horarios y búsqueda de información sin traducir todo palabra por palabra.",
    accent: "#1D4ED8",
    color: "#93C5FD",
  },
  listening: {
    section: "listening",
    label: "Listening",
    jpLabel: "聴解",
    description: "Scripts vivos listos para audio posterior: tarea, punto clave y respuesta rápida.",
    accent: "#6D28D9",
    color: "#C4B5FD",
  },
};

export const JLPT_LEVEL_SLUGS = ["n5", "n4", "n3", "n2", "n1"] as const;
export const JLPT_SECTION_SLUGS = ["vocabulary", "grammar", "reading", "listening"] as const;

export function getJlptLevelFromSlug(slug: string): JlptLevel | undefined {
  const normalized = slug.toLowerCase();
  const found = Object.values(JLPT_LEVEL_META).find((meta) => meta.slug === normalized);
  return found?.level;
}

export function getJlptSectionFromSlug(slug: string): JlptSection | undefined {
  const normalized = slug.toLowerCase();
  if (normalized === "vocabulary" || normalized === "grammar" || normalized === "reading" || normalized === "listening") {
    return normalized;
  }
  return undefined;
}
