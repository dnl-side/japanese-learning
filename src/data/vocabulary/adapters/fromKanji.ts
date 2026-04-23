
import { getKanjiEntry } from "@/data/kanji";
import type { VocabularyEntry, VocabularyRelation } from "../types";
import { mergeEntryRelations } from "../helpers";

function buildKanjiRelations(entry: VocabularyEntry): VocabularyRelation[] {
  const relations: VocabularyRelation[] = [];

  for (const form of entry.forms) {
    for (const char of form.text) {
      const kanji = getKanjiEntry(char);
      if (!kanji) continue;
      relations.push({
        type: "kanji",
        ref: `kanji:${kanji.char}`,
        label: kanji.char,
      });
    }
  }

  return relations;
}

export function attachKanjiRelations(entries: VocabularyEntry[]) {
  return entries.map((entry) => mergeEntryRelations(entry, buildKanjiRelations(entry)));
}
