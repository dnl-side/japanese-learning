
import type {
  AdjectiveVocabularyEntry,
  JLPTLevel,
  NounVocabularyEntry,
  PhraseVocabularyEntry,
  VocabularyExample,
  VocabularyImportance,
  VocabularyMeaning,
  VocabularyRegister,
  VocabularyRelation,
  VocabularyTopic,
} from "./types";
import { buildSearchIndex, toMeaningItems, toPrimaryForm, uniqueRelations, uniqueTopics } from "./helpers";

interface ManualBaseOptions {
  id: string;
  level: JLPTLevel;
  topics: VocabularyTopic[];
  tags?: string[];
  register?: VocabularyRegister[];
  importance?: VocabularyImportance;
  examples?: VocabularyExample[];
  notes?: string[];
  relatedLessonSlugs?: string[];
  relatedVocabularyTags?: string[];
  relations?: VocabularyRelation[];
  accent?: string;
}

interface ManualNounOptions extends ManualBaseOptions {
  text: string;
  reading?: string;
  meanings: Array<string | VocabularyMeaning>;
  nounCategory?: NonNullable<NounVocabularyEntry["noun"]>["category"];
  counterHints?: string[];
}

interface ManualAdjectiveOptions extends ManualBaseOptions {
  text: string;
  reading?: string;
  meanings: Array<string | VocabularyMeaning>;
  adjectiveType: "i" | "na";
  irregular?: boolean;
  domains?: string[];
}

interface ManualPhraseOptions extends ManualBaseOptions {
  kind?: PhraseVocabularyEntry["kind"];
  text: string;
  reading?: string;
  meanings: Array<string | VocabularyMeaning>;
}

export function createManualNounEntry(options: ManualNounOptions): NounVocabularyEntry {
  const forms = [toPrimaryForm(options.text, options.reading)];
  const meanings = toMeaningItems(options.meanings);

  return {
    id: options.id,
    level: options.level,
    kind: "noun",
    topics: uniqueTopics(options.topics),
    tags: options.tags ?? [],
    register: options.register ?? ["neutral", "polite"],
    importance: options.importance ?? "high",
    forms,
    meanings,
    examples: options.examples ?? [],
    notes: options.notes,
    relatedLessonSlugs: options.relatedLessonSlugs,
    relatedVocabularyTags: options.relatedVocabularyTags,
    relations: uniqueRelations(options.relations),
    source: {
      origin: "manual",
      sourceId: options.id,
    },
    searchIndex: buildSearchIndex({
      forms,
      meanings,
      tags: options.tags,
      topics: options.topics,
      notes: options.notes,
    }),
    ui: {
      accent: options.accent,
      groupLabel: options.level,
    },
    noun: {
      category: options.nounCategory,
      counterHints: options.counterHints,
    },
  };
}

export function createManualAdjectiveEntry(options: ManualAdjectiveOptions): AdjectiveVocabularyEntry {
  const forms = [toPrimaryForm(options.text, options.reading)];
  const meanings = toMeaningItems(options.meanings);

  return {
    id: options.id,
    level: options.level,
    kind: "adjective",
    topics: uniqueTopics(options.topics),
    tags: options.tags ?? [],
    register: options.register ?? ["neutral", "polite"],
    importance: options.importance ?? "high",
    forms,
    meanings,
    examples: options.examples ?? [],
    notes: options.notes,
    relatedLessonSlugs: options.relatedLessonSlugs,
    relatedVocabularyTags: options.relatedVocabularyTags,
    relations: uniqueRelations(options.relations),
    source: {
      origin: "manual",
      sourceId: options.id,
    },
    searchIndex: buildSearchIndex({
      forms,
      meanings,
      tags: options.tags,
      topics: options.topics,
      notes: options.notes,
    }),
    ui: {
      accent: options.accent,
      groupLabel: options.level,
    },
    adjective: {
      type: options.adjectiveType,
      irregular: options.irregular,
      domains: options.domains,
    },
  };
}

export function createManualPhraseEntry(options: ManualPhraseOptions): PhraseVocabularyEntry {
  const forms = [toPrimaryForm(options.text, options.reading)];
  const meanings = toMeaningItems(options.meanings);

  return {
    id: options.id,
    level: options.level,
    kind: options.kind ?? "phrase",
    topics: uniqueTopics(options.topics),
    tags: options.tags ?? [],
    register: options.register ?? ["neutral", "polite"],
    importance: options.importance ?? "high",
    forms,
    meanings,
    examples: options.examples ?? [],
    notes: options.notes,
    relatedLessonSlugs: options.relatedLessonSlugs,
    relatedVocabularyTags: options.relatedVocabularyTags,
    relations: uniqueRelations(options.relations),
    source: {
      origin: "manual",
      sourceId: options.id,
    },
    searchIndex: buildSearchIndex({
      forms,
      meanings,
      tags: options.tags,
      topics: options.topics,
      notes: options.notes,
    }),
    ui: {
      accent: options.accent,
      groupLabel: options.level,
    },
  };
}
