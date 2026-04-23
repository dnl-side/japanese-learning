
import type { VocabularyCatalog, VocabularyCollection, VocabularyEntry } from "../types";
import { VOCABULARY_KIND_ORDER, VOCABULARY_TOPIC_ORDER, VOCABULARY_LEVEL_ORDER } from "../labels";
import { dedupeEntries, sortVocabularyEntries } from "../helpers";

interface BuildVocabularyCatalogOptions {
  entries: VocabularyEntry[];
  collections: VocabularyCollection[];
}

export function buildVocabularyCatalog(options: BuildVocabularyCatalogOptions): VocabularyCatalog {
  const entries = sortVocabularyEntries(dedupeEntries(options.entries));

  return {
    version: "1.0.0",
    title: "Vocabulary Catalog",
    description:
      "Catálogo central para unificar vocabulario manual, vocabulario derivado de módulos existentes y relaciones con lecciones.",
    levels: [...VOCABULARY_LEVEL_ORDER],
    topicOrder: [...VOCABULARY_TOPIC_ORDER],
    kindOrder: [...VOCABULARY_KIND_ORDER],
    filters: ["level", "kind", "topic", "register", "importance", "tags", "query"],
    defaultFilters: {
      levels: ["N5"],
      onlyCore: false,
      onlyWithExamples: false,
    },
    entries,
    collections: options.collections,
  };
}
