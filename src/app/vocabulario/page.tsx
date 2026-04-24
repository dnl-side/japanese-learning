import { Suspense } from "react";
import { VOCABULARY_CATALOG } from "@/data/vocabulary";
import { VocabularyHubClient } from "@/app/components/vocabulary/VocabularyHubClient";

export default function VocabularyPage() {
  return (
    <Suspense fallback={null}>
      <VocabularyHubClient catalog={VOCABULARY_CATALOG} />
    </Suspense>
  );
}