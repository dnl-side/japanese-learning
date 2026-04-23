
import type { VocabularyCollection, VocabularyEntry } from "../types";

export type VocabularyGroupMode = "level" | "kind" | "topic";

export interface VocabularyGroup {
  key: string;
  label: string;
  entries: VocabularyEntry[];
}

export function groupVocabularyEntries(entries: VocabularyEntry[], mode: VocabularyGroupMode): VocabularyGroup[] {
  const groups = new Map<string, VocabularyEntry[]>();

  for (const entry of entries) {
    if (mode === "level") {
      const key = entry.level;
      groups.set(key, [...(groups.get(key) ?? []), entry]);
      continue;
    }

    if (mode === "kind") {
      const key = entry.kind;
      groups.set(key, [...(groups.get(key) ?? []), entry]);
      continue;
    }

    for (const topic of entry.topics) {
      groups.set(topic, [...(groups.get(topic) ?? []), entry]);
    }
  }

  return [...groups.entries()].map(([key, values]) => ({
    key,
    label: key,
    entries: values,
  }));
}

export function resolveCollections(
  collections: VocabularyCollection[],
  entries: VocabularyEntry[],
) {
  const byId = new Map(entries.map((entry) => [entry.id, entry]));

  return collections.map((collection) => ({
    ...collection,
    entries: collection.entryIds
      .map((entryId) => byId.get(entryId))
      .filter((entry): entry is VocabularyEntry => Boolean(entry)),
  }));
}
