
import type {
  VocabularyEntry,
  VocabularyExample,
  VocabularyForm,
  VocabularyMeaning,
  VocabularyRelation,
  VocabularyTopic,
} from "./types";
import type { RubySegment } from "@/app/components/ui/Ruby";

const KANJI_RE = /[\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]/u;
const RUBY_RE = /\[([^\]|]+)\|([^\]]+)\]/g;

export function ruby(input: string): RubySegment[] {
  const segments: RubySegment[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = RUBY_RE.exec(input)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ text: input.slice(lastIndex, match.index) });
    }

    segments.push({ text: match[1], ruby: match[2] });
    lastIndex = RUBY_RE.lastIndex;
  }

  if (lastIndex < input.length) {
    segments.push({ text: input.slice(lastIndex) });
  }

  return segments;
}

export function example(input: string, translation: string, note?: string): VocabularyExample {
  return {
    segments: ruby(input),
    translation,
    note,
  };
}

export function hasKanji(text: string) {
  return KANJI_RE.test(text);
}

export function toWordSegments(text: string, reading?: string): RubySegment[] {
  if (!reading || !hasKanji(text)) {
    return [{ text }];
  }

  return [{ text, ruby: reading }];
}

export function toPrimaryForm(text: string, reading?: string): VocabularyForm {
  return {
    text,
    reading,
    segments: toWordSegments(text, reading),
    isPrimary: true,
  };
}

export function toMeaningItems(meanings: Array<string | VocabularyMeaning>): VocabularyMeaning[] {
  return meanings.map((meaning) =>
    typeof meaning === "string"
      ? {
          lang: "es",
          text: meaning,
        }
      : meaning,
  );
}

export function uniqueStrings(values: string[]) {
  return [...new Set(values.map((value) => value.trim()).filter(Boolean))];
}

export function uniqueTopics(values: VocabularyTopic[]) {
  return [...new Set(values)];
}

export function uniqueRelations(relations: VocabularyRelation[] | undefined) {
  if (!relations?.length) return undefined;

  const seen = new Set<string>();
  const result: VocabularyRelation[] = [];

  for (const relation of relations) {
    const key = `${relation.type}:${relation.ref}`;
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(relation);
  }

  return result;
}

export function buildSearchIndex(input: {
  forms: VocabularyForm[];
  meanings: VocabularyMeaning[];
  tags?: string[];
  topics?: VocabularyTopic[];
  notes?: string[];
}) {
  return uniqueStrings([
    ...input.forms.flatMap((form) => [form.text, form.reading ?? ""]),
    ...input.meanings.flatMap((meaning) => [meaning.text, meaning.nuance ?? ""]),
    ...(input.tags ?? []),
    ...(input.topics ?? []),
    ...(input.notes ?? []),
  ]).map((value) => value.toLowerCase());
}

const LEVEL_WEIGHT: Record<string, number> = {
  N5: 1,
  N4: 2,
  N3: 3,
  N2: 4,
  N1: 5,
};

export function sortVocabularyEntries(entries: VocabularyEntry[]) {
  return [...entries].sort((a, b) => {
    const levelDiff = LEVEL_WEIGHT[a.level] - LEVEL_WEIGHT[b.level];
    if (levelDiff !== 0) return levelDiff;

    const aPrimary = a.forms.find((form) => form.isPrimary)?.text ?? a.forms[0]?.text ?? a.id;
    const bPrimary = b.forms.find((form) => form.isPrimary)?.text ?? b.forms[0]?.text ?? b.id;

    return aPrimary.localeCompare(bPrimary, "ja");
  });
}

export function dedupeEntries(entries: VocabularyEntry[]) {
  const byId = new Map<string, VocabularyEntry>();

  for (const entry of entries) {
    byId.set(entry.id, entry);
  }

  return [...byId.values()];
}

export function mergeEntryRelations(entry: VocabularyEntry, relations: VocabularyRelation[]) {
  return {
    ...entry,
    relations: uniqueRelations([...(entry.relations ?? []), ...relations]),
  };
}
