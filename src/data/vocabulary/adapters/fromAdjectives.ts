
import type { AdjEntry } from "@/data/grammar/adjectives";
import type { AdjectiveVocabularyEntry, VocabularyTopic } from "../types";
import { buildSearchIndex, toMeaningItems, toPrimaryForm } from "../helpers";

function guessAdjectiveTopics(entry: AdjEntry): VocabularyTopic[] {
  const text = `${entry.dict} ${entry.meaning}`.toLowerCase();
  const topics = new Set<VocabularyTopic>();

  if (text.includes("alto") || text.includes("pequeño") || text.includes("grande") || text.includes("largo") || text.includes("corto")) {
    topics.add("objetos");
  }

  if (text.includes("caluroso") || text.includes("frío") || text.includes("templado") || text.includes("fresco")) {
    topics.add("clima");
  }

  if (text.includes("delicioso")) {
    topics.add("comida");
  }

  if (text.includes("ocupado")) {
    topics.add("trabajo");
  }

  if (text.includes("divertido") || text.includes("interesante") || text.includes("amable")) {
    topics.add("emociones");
  }

  if (!topics.size) {
    topics.add("objetos");
  }

  return [...topics];
}

function isIrregular(entry: AdjEntry) {
  return entry.dict === "良い";
}

export function fromAdjectiveEntry(entry: AdjEntry): AdjectiveVocabularyEntry {
  const forms = [toPrimaryForm(entry.dict, entry.reading)];
  const meanings = toMeaningItems([entry.meaning]);
  const topics = guessAdjectiveTopics(entry);
  const tags = [entry.type, "adjetivo"];

  return {
    id: `adj:${entry.dict}`,
    level: entry.level,
    kind: "adjective",
    topics,
    tags,
    register: ["neutral", "polite"],
    importance: entry.level === "N5" ? "core" : "high",
    forms,
    meanings,
    examples: [],
    source: {
      origin: "adjectives",
      sourceId: entry.dict,
    },
    searchIndex: buildSearchIndex({
      forms,
      meanings,
      tags,
      topics,
    }),
    ui: {
      groupLabel: entry.level,
      accent: "#9333EA",
    },
    adjective: {
      type: entry.type,
      irregular: isIrregular(entry),
    },
  };
}

export function fromAdjectiveList(entries: AdjEntry[]) {
  return entries.map(fromAdjectiveEntry);
}
