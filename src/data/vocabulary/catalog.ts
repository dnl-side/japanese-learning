//src/data/vocabulary/catalog.ts

import { ADJECTIVE_LIST } from "@/data/grammar/adjectives";
import { COUNTERS } from "@/data/grammar/counters";
import { getAllGrammarLessons } from "@/data/grammar/lessons";
import { VERB_LIST } from "@/data/grammar/verbs";
import { fromAdjectiveList } from "./adapters/fromAdjectives";
import { fromCounterList } from "./adapters/fromCounters";
import { attachKanjiRelations } from "./adapters/fromKanji";
import { buildCollectionsFromLessons } from "./adapters/fromLessons";
import { fromVerbList } from "./adapters/fromVerbs";
import { BASE_VOCABULARY_COLLECTIONS } from "./collections";
import { MANUAL_VOCAB_ENTRIES } from "./seed";
import type {
  JLPTLevel,
  VocabularyCatalog,
  VocabularyCollection,
  VocabularyEntry,
  VocabularyTopic,
} from "./types";
import { buildVocabularyCatalog } from "./utils/buildVocabularyCatalog";
import { filterVocabularyEntries } from "./utils/filterVocabulary";

const lessonCollections = buildCollectionsFromLessons(
  getAllGrammarLessons(),
  MANUAL_VOCAB_ENTRIES,
);

export const VOCABULARY_ENTRIES: VocabularyEntry[] = attachKanjiRelations([
  ...MANUAL_VOCAB_ENTRIES,
  ...fromVerbList(VERB_LIST),
  ...fromAdjectiveList(ADJECTIVE_LIST),
  ...fromCounterList(COUNTERS),
]);

export const VOCABULARY_COLLECTIONS: VocabularyCollection[] = [
  ...BASE_VOCABULARY_COLLECTIONS,
  ...lessonCollections,
];

export const VOCABULARY_CATALOG: VocabularyCatalog = buildVocabularyCatalog({
  entries: VOCABULARY_ENTRIES,
  collections: VOCABULARY_COLLECTIONS,
});

const ENTRY_BY_ID = new Map(VOCABULARY_ENTRIES.map((entry) => [entry.id, entry]));

export function getAllVocabularyEntries(): VocabularyEntry[] {
  return VOCABULARY_CATALOG.entries;
}

export function getVocabularyEntryById(id: string): VocabularyEntry | undefined {
  return ENTRY_BY_ID.get(id);
}

export function getVocabularyEntriesByLevel(level: JLPTLevel): VocabularyEntry[] {
  return VOCABULARY_CATALOG.entries.filter((entry) => entry.level === level);
}

export function getVocabularyEntriesByTopic(topic: VocabularyTopic): VocabularyEntry[] {
  return VOCABULARY_CATALOG.entries.filter((entry) => entry.topics.includes(topic));
}

export function searchVocabulary(query: string): VocabularyEntry[] {
  return filterVocabularyEntries(VOCABULARY_CATALOG.entries, {
    query,
  });
}