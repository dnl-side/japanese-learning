
import type { RubySegment } from "@/app/components/ui/Ruby";
import type { VerbEntry } from "@/data/grammar/verbs";
import type { VerbVocabularyEntry, VocabularyTopic } from "../types";
import { buildSearchIndex, toMeaningItems } from "../helpers";

function buildVerbSegments(entry: VerbEntry): RubySegment[] {
  if (!entry.kanji) {
    return [{ text: entry.dictionary }];
  }

  return [
    { text: entry.kanji, ruby: entry.furigana },
    { text: entry.morpheme },
  ];
}

function buildVerbReading(entry: VerbEntry) {
  return `${entry.furigana}${entry.morpheme}`;
}

function guessVerbTopics(entry: VerbEntry): VocabularyTopic[] {
  const text = `${entry.dictionary} ${entry.meaning}`.toLowerCase();
  const topics = new Set<VocabularyTopic>(["acciones"]);

  if (text.includes("caminar") || text.includes("ir") || text.includes("llegar") || text.includes("cruzar")) {
    topics.add("transporte");
    topics.add("direccion");
  }

  if (text.includes("comer") || text.includes("beber") || text.includes("cocinar")) {
    topics.add("comida");
  }

  if (text.includes("trabajar") || text.includes("pagar") || text.includes("enviar")) {
    topics.add("trabajo");
  }

  if (text.includes("estudiar") || text.includes("aprender") || text.includes("leer") || text.includes("escribir")) {
    topics.add("escuela");
  }

  if (text.includes("vivir") || text.includes("sentarse") || text.includes("poner")) {
    topics.add("casa");
  }

  if (text.includes("hablar") || text.includes("decir") || text.includes("preguntar")) {
    topics.add("preguntas");
    topics.add("respuestas");
  }

  return [...topics];
}

function guessVerbTags(entry: VerbEntry) {
  const tags = [entry.group, "verbo"];
  if (entry.meaning.includes("/")) {
    tags.push("polisemico");
  }
  return tags;
}

export function fromVerbEntry(entry: VerbEntry): VerbVocabularyEntry {
  const forms = [
    {
      text: entry.dictionary,
      reading: buildVerbReading(entry),
      segments: buildVerbSegments(entry),
      isPrimary: true,
    },
  ];
  const meanings = toMeaningItems([entry.meaning]);
  const topics = guessVerbTopics(entry);
  const tags = guessVerbTags(entry);

  return {
    id: `verb:${entry.dictionary}`,
    level: entry.level,
    kind: "verb",
    topics,
    tags,
    register: ["neutral", "polite"],
    importance: entry.level === "N5" ? "core" : "high",
    forms,
    meanings,
    examples: [],
    source: {
      origin: "verbs",
      sourceId: entry.dictionary,
    },
    searchIndex: buildSearchIndex({
      forms,
      meanings,
      tags,
      topics,
    }),
    ui: {
      groupLabel: entry.level,
      accent: "#0F766E",
    },
    verb: {
      group: entry.group,
    },
  };
}

export function fromVerbList(entries: VerbEntry[]) {
  return entries.map(fromVerbEntry);
}
