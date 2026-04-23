import { notFound } from "next/navigation";
import { VOCABULARY_CATALOG, getVocabularyEntryById } from "@/data/vocabulary";
import { VocabularyDetailClient } from "@/app/components/vocabulary/VocabularyDetailClient";
import { buildRelatedEntries, findCollectionsForEntry } from "@/lib/vocabulary/vocabularyView";

interface VocabularyDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function VocabularyDetailPage({ params }: VocabularyDetailPageProps) {
  const { id } = await params;
  const entryId = decodeURIComponent(id);
  const entry = getVocabularyEntryById(entryId);

  if (!entry) {
    notFound();
  }

  const relatedEntries = buildRelatedEntries(entry, VOCABULARY_CATALOG.entries);
  const collections = findCollectionsForEntry(entry.id, VOCABULARY_CATALOG.collections);

  return (
    <VocabularyDetailClient
      entry={entry}
      relatedEntries={relatedEntries}
      collections={collections}
    />
  );
}