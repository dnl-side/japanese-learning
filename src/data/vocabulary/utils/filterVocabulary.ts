
import type { VocabularyEntry, VocabularyFilterState } from "../types";

function includesAny<T>(target: T[] | undefined, source: T[]) {
  if (!target?.length) return true;
  return target.some((item) => source.includes(item));
}

function matchesQuery(entry: VocabularyEntry, query: string | undefined) {
  if (!query?.trim()) return true;
  const normalized = query.trim().toLowerCase();
  return entry.searchIndex.some((value) => value.includes(normalized));
}

export function filterVocabularyEntries(entries: VocabularyEntry[], filters: VocabularyFilterState) {
  return entries.filter((entry) => {
    if (!includesAny(filters.levels, [entry.level])) return false;
    if (!includesAny(filters.kinds, [entry.kind])) return false;
    if (!includesAny(filters.topics, entry.topics)) return false;
    if (!includesAny(filters.registers, entry.register)) return false;
    if (!includesAny(filters.importance, [entry.importance])) return false;
    if (!includesAny(filters.tags?.map((tag) => tag.toLowerCase()), entry.tags.map((tag) => tag.toLowerCase()))) {
      return false;
    }
    if (filters.onlyCore && entry.importance !== "core") return false;
    if (filters.onlyWithExamples && entry.examples.length === 0) return false;
    if (!matchesQuery(entry, filters.query)) return false;
    return true;
  });
}
