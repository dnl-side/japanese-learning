
import type { RubySegment } from "@/app/components/ui/Ruby";

export type JLPTLevel = "N5" | "N4" | "N3" | "N2" | "N1";

export type VocabularyKind =
  | "noun"
  | "verb"
  | "adjective"
  | "adverb"
  | "pronoun"
  | "counter"
  | "expression"
  | "phrase"
  | "prefix"
  | "suffix";

export type VocabularyTopic =
  | "personas"
  | "familia"
  | "profesiones"
  | "paises"
  | "idiomas"
  | "nacionalidades"
  | "colores"
  | "cuerpo"
  | "ropa"
  | "comida"
  | "bebidas"
  | "casa"
  | "escuela"
  | "trabajo"
  | "transporte"
  | "lugares"
  | "tiempo"
  | "clima"
  | "emociones"
  | "acciones"
  | "direccion"
  | "naturaleza"
  | "animales"
  | "tecnologia"
  | "compras"
  | "saludos"
  | "preguntas"
  | "respuestas"
  | "gramatica"
  | "contadores"
  | "objetos";

export type VocabularyRegister = "casual" | "neutral" | "polite" | "formal" | "written";
export type VocabularyImportance = "core" | "high" | "medium";
export type VocabularySourceOrigin =
  | "manual"
  | "verbs"
  | "adjectives"
  | "counters"
  | "kanji"
  | "lessons"
  | "expressions";

export type VocabularyRelationType =
  | "lesson"
  | "kanji"
  | "country"
  | "nationality"
  | "profession"
  | "counter"
  | "pair"
  | "opposite"
  | "related"
  | "derived-from"
  | "same-topic";

export type VocabularyNounCategory =
  | "common"
  | "proper"
  | "person"
  | "place"
  | "country"
  | "profession"
  | "language"
  | "nationality"
  | "thing";

export interface VocabularyForm {
  text: string;
  reading?: string;
  segments?: RubySegment[];
  label?: string;
  isPrimary?: boolean;
}

export interface VocabularyMeaning {
  lang: "es";
  text: string;
  nuance?: string;
}

export interface VocabularyExample {
  segments: RubySegment[];
  translation: string;
  note?: string;
}

export interface VocabularyRelation {
  type: VocabularyRelationType;
  ref: string;
  label?: string;
}

export interface VocabularySourceMeta {
  origin: VocabularySourceOrigin;
  sourceId?: string;
}

export interface VocabularyUiMeta {
  accent?: string;
  groupLabel?: string;
}

export interface VocabularyEntryBase {
  id: string;
  level: JLPTLevel;
  kind: VocabularyKind;
  topics: VocabularyTopic[];
  tags: string[];
  register: VocabularyRegister[];
  importance: VocabularyImportance;
  forms: VocabularyForm[];
  meanings: VocabularyMeaning[];
  examples: VocabularyExample[];
  notes?: string[];
  relatedLessonSlugs?: string[];
  relatedVocabularyTags?: string[];
  relations?: VocabularyRelation[];
  source: VocabularySourceMeta;
  searchIndex: string[];
  ui?: VocabularyUiMeta;
}

export interface NounVocabularyEntry extends VocabularyEntryBase {
  kind: "noun";
  noun?: {
    category?: VocabularyNounCategory;
    counterHints?: string[];
  };
}

export interface VerbVocabularyEntry extends VocabularyEntryBase {
  kind: "verb";
  verb: {
    group: "godan" | "ichidan" | "irregular";
    transitivity?: "transitive" | "intransitive" | "both";
    pairId?: string;
  };
}

export interface AdjectiveVocabularyEntry extends VocabularyEntryBase {
  kind: "adjective";
  adjective: {
    type: "i" | "na";
    irregular?: boolean;
    domains?: string[];
  };
}

export interface CounterVocabularyEntry extends VocabularyEntryBase {
  kind: "counter";
  counter: {
    symbol: string;
    reading: string;
    commonNouns: string[];
    irregularNumbers?: number[];
  };
}

export interface PhraseVocabularyEntry extends VocabularyEntryBase {
  kind: "phrase" | "expression" | "adverb" | "pronoun" | "prefix" | "suffix";
}

export type VocabularyEntry =
  | NounVocabularyEntry
  | VerbVocabularyEntry
  | AdjectiveVocabularyEntry
  | CounterVocabularyEntry
  | PhraseVocabularyEntry;

export interface VocabularyCollection {
  id: string;
  label: string;
  description: string;
  level: JLPTLevel;
  topics: VocabularyTopic[];
  entryIds: string[];
  accent?: string;
}

export interface VocabularyFilterState {
  levels?: JLPTLevel[];
  kinds?: VocabularyKind[];
  topics?: VocabularyTopic[];
  registers?: VocabularyRegister[];
  importance?: VocabularyImportance[];
  tags?: string[];
  query?: string;
  onlyCore?: boolean;
  onlyWithExamples?: boolean;
}

export interface VocabularyCatalog {
  version: string;
  title: string;
  description: string;
  levels: JLPTLevel[];
  topicOrder: VocabularyTopic[];
  kindOrder: VocabularyKind[];
  filters: Array<"level" | "kind" | "topic" | "register" | "importance" | "tags" | "query">;
  defaultFilters: VocabularyFilterState;
  entries: VocabularyEntry[];
  collections: VocabularyCollection[];
}
