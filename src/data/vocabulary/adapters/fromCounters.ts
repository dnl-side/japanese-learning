
import type { CounterEntry } from "@/data/grammar/counters";
import type { CounterVocabularyEntry } from "../types";
import { buildSearchIndex, toMeaningItems, toPrimaryForm } from "../helpers";

export function fromCounterEntry(entry: CounterEntry): CounterVocabularyEntry {
  const forms = [toPrimaryForm(entry.counter, entry.reading)];
  const meanings = toMeaningItems([entry.meaning]);
  const tags = ["contador", "gramatica"];
  const topics = ["contadores", "gramatica", "objetos"] as const;

  return {
    id: `counter:${entry.counter}`,
    level: entry.level,
    kind: "counter",
    topics: [...topics],
    tags,
    register: ["neutral", "polite"],
    importance: "core",
    forms,
    meanings,
    examples: entry.exampleSentences.map((item) => ({
      segments: item.segments,
      translation: item.translation,
    })),
    notes: entry.readings.some((reading) => reading.note)
      ? ["Incluye lecturas irregulares en algunos números."]
      : undefined,
    source: {
      origin: "counters",
      sourceId: entry.counter,
    },
    searchIndex: buildSearchIndex({
      forms,
      meanings,
      tags,
      topics: [...topics],
      notes: entry.examples,
    }),
    ui: {
      groupLabel: entry.level,
      accent: "#EA580C",
    },
    counter: {
      symbol: entry.counter,
      reading: entry.reading,
      commonNouns: entry.examples,
      irregularNumbers: entry.readings.filter((reading) => reading.note).map((reading) => reading.num),
    },
  };
}

export function fromCounterList(entries: CounterEntry[]) {
  return entries.map(fromCounterEntry);
}
