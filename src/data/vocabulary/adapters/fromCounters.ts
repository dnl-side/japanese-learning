import type { CounterEntry, CounterFamilyId, CounterImportance } from "@/data/grammar/counters";
import type { CounterVocabularyEntry, VocabularyImportance, VocabularyTopic } from "../types";
import { buildSearchIndex, toMeaningItems, toPrimaryForm } from "../helpers";

const COUNTER_FAMILY_TOPICS: Record<CounterFamilyId, VocabularyTopic[]> = {
  "general-objects": ["contadores", "gramatica", "objetos"],
  "people-animals": ["contadores", "gramatica", "personas", "animales"],
  "time-point": ["contadores", "gramatica", "tiempo"],
  duration: ["contadores", "gramatica", "tiempo"],
  "money-frequency": ["contadores", "gramatica", "compras"],
  "order-location": ["contadores", "gramatica", "lugares"],
};

const IMPORTANCE_MAP: Record<CounterImportance, VocabularyImportance> = {
  core: "core",
  basic: "high",
  useful: "medium",
  advanced: "medium",
};

function segmentsToText(segments: CounterEntry["examples"]) {
  return segments.map((segment) => segment.text).join("");
}

function splitCommonNouns(entry: CounterEntry) {
  return segmentsToText(entry.examples)
    .split("・")
    .map((item) => item.trim())
    .filter(Boolean);
}

function buildCounterTags(entry: CounterEntry) {
  return [
    "contador",
    "gramatica",
    entry.family,
    entry.level,
    entry.jlpt,
    entry.counter,
    entry.reading,
  ];
}

export function fromCounterEntry(entry: CounterEntry): CounterVocabularyEntry {
  const forms = [toPrimaryForm(entry.counter, entry.reading)];
  const meanings = toMeaningItems([entry.meaning]);
  const topics = COUNTER_FAMILY_TOPICS[entry.family];
  const tags = buildCounterTags(entry);
  const commonNouns = splitCommonNouns(entry);
  const irregularNumbers = entry.readings
    .filter((reading) => reading.irregular || reading.note)
    .map((reading) => reading.num);

  return {
    id: `counter:${entry.counter}`,
    level: entry.jlpt,
    kind: "counter",
    topics: [...topics],
    tags,
    register: ["neutral", "polite"],
    importance: IMPORTANCE_MAP[entry.level],
    forms,
    meanings,
    examples: entry.exampleSentences.map((item) => ({
      segments: item.jp,
      translation: item.es,
      note: item.pattern,
    })),
    notes: [
      entry.usage,
      ...(entry.warning ? [entry.warning] : []),
      ...(entry.readings.some((reading) => reading.irregular || reading.note)
        ? ["Incluye lecturas irregulares en algunos números."]
        : []),
    ].filter(Boolean),
    source: {
      origin: "counters",
      sourceId: entry.id,
    },
    searchIndex: buildSearchIndex({
      forms,
      meanings,
      tags,
      topics: [...topics],
      notes: [
        entry.title,
        entry.usage,
        entry.warning ?? "",
        ...commonNouns,
        ...entry.readings.flatMap((reading) => [
          reading.display,
          reading.reading,
          reading.note ?? "",
        ]),
      ],
    }),
    ui: {
      groupLabel: entry.title,
      accent: "#EA580C",
    },
    counter: {
      symbol: entry.counter,
      reading: entry.reading,
      commonNouns,
      irregularNumbers: irregularNumbers.length ? irregularNumbers : undefined,
    },
  };
}

export function fromCounterList(entries: CounterEntry[]) {
  return entries.map(fromCounterEntry);
}