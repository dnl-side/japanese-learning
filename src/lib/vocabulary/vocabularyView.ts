import type { VocabularyCollection, VocabularyEntry } from "@/data/vocabulary";
import {
  VOCABULARY_KIND_LABELS,
  VOCABULARY_KIND_ORDER,
  VOCABULARY_TOPIC_LABELS,
  VOCABULARY_TOPIC_ORDER,
  resolveCollections,
} from "@/data/vocabulary";

export type VocabularySortMode = "recommended" | "alpha" | "examples";
export type VocabularyGroupMode = "none" | "level" | "kind" | "topic";

const LEVEL_WEIGHT: Record<string, number> = {
  N5: 1,
  N4: 2,
  N3: 3,
  N2: 4,
  N1: 5,
};

export function getPrimaryForm(entry: VocabularyEntry) {
  return entry.forms.find((form) => form.isPrimary) ?? entry.forms[0];
}

export function getPrimaryMeaning(entry: VocabularyEntry) {
  return entry.meanings[0]?.text ?? "Sin significado";
}

export function getEntryHref(entryId: string) {
  return `/vocabulario/${encodeURIComponent(entryId)}`;
}

export function getCollectionHref(collectionId: string) {
  return `/vocabulario/explorar?collection=${encodeURIComponent(collectionId)}`;
}

export function getTopicHref(topic: string) {
  return `/vocabulario/explorar?topic=${encodeURIComponent(topic)}`;
}

export function getKindHref(kind: string) {
  return `/vocabulario/explorar?kind=${encodeURIComponent(kind)}`;
}

export function sortEntries(entries: VocabularyEntry[], mode: VocabularySortMode) {
  return [...entries].sort((a, b) => {
    if (mode === "examples") {
      const diff = b.examples.length - a.examples.length;
      if (diff !== 0) return diff;
    }

    const levelDiff = LEVEL_WEIGHT[a.level] - LEVEL_WEIGHT[b.level];
    if (levelDiff !== 0 && mode === "recommended") return levelDiff;

    const aText = getPrimaryForm(a)?.text ?? a.id;
    const bText = getPrimaryForm(b)?.text ?? b.id;
    return aText.localeCompare(bText, "ja");
  });
}

export function groupEntries(entries: VocabularyEntry[], mode: VocabularyGroupMode) {
  if (mode === "none") {
    return [
      {
        key: "all",
        label: "Resultados",
        entries,
      },
    ];
  }

  if (mode === "level") {
    return ["N5", "N4", "N3", "N2", "N1"]
      .map((level) => ({
        key: level,
        label: level,
        entries: entries.filter((entry) => entry.level === level),
      }))
      .filter((group) => group.entries.length > 0);
  }

  if (mode === "kind") {
    return VOCABULARY_KIND_ORDER.map((kind) => ({
      key: kind,
      label: VOCABULARY_KIND_LABELS[kind],
      entries: entries.filter((entry) => entry.kind === kind),
    })).filter((group) => group.entries.length > 0);
  }

  return VOCABULARY_TOPIC_ORDER.map((topic) => ({
    key: topic,
    label: VOCABULARY_TOPIC_LABELS[topic],
    entries: entries.filter((entry) => entry.topics.includes(topic)),
  })).filter((group) => group.entries.length > 0);
}

export function buildTopicCounts(entries: VocabularyEntry[]) {
  return VOCABULARY_TOPIC_ORDER.map((topic) => ({
    topic,
    label: VOCABULARY_TOPIC_LABELS[topic],
    count: entries.filter((entry) => entry.topics.includes(topic)).length,
  })).filter((item) => item.count > 0);
}

export function buildKindCounts(entries: VocabularyEntry[]) {
  return VOCABULARY_KIND_ORDER.map((kind) => ({
    kind,
    label: VOCABULARY_KIND_LABELS[kind],
    count: entries.filter((entry) => entry.kind === kind).length,
  })).filter((item) => item.count > 0);
}

export function buildLevelCounts(entries: VocabularyEntry[]) {
  return (["N5", "N4", "N3", "N2", "N1"] as const).map((level) => ({
    level,
    label: level,
    count: entries.filter((entry) => entry.level === level).length,
  }));
}

export function buildResolvedCollections(collections: VocabularyCollection[], entries: VocabularyEntry[]) {
  return resolveCollections(collections, entries)
    .map((collection) => ({
      ...collection,
      total: collection.entries.length,
    }))
    .filter((collection) => collection.total > 0);
}

export function findCollectionsForEntry(entryId: string, collections: VocabularyCollection[]) {
  return collections.filter((collection) => collection.entryIds.includes(entryId));
}

export function buildRelatedEntries(entry: VocabularyEntry, entries: VocabularyEntry[], limit = 8) {
  const related = entries.filter((candidate) => {
    if (candidate.id === entry.id) return false;
    if (candidate.level !== entry.level) return false;

    const sharesTopic = candidate.topics.some((topic) => entry.topics.includes(topic));
    const sharesTag = candidate.tags.some((tag) => entry.tags.includes(tag));
    const relatedByRelation = (entry.relations ?? []).some((relation) => relation.ref === candidate.id);

    return sharesTopic || sharesTag || relatedByRelation;
  });

  return sortEntries(related, "recommended").slice(0, limit);
}
