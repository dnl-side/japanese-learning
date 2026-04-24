import { Suspense } from "react";
import { VOCABULARY_CATALOG } from "@/data/vocabulary";
import { VocabularyExplorerClient } from "@/app/components/vocabulary/VocabularyExplorerClient";

export default function VocabularyExplorerPage() {
  return (
    <Suspense fallback={null}>
      <VocabularyExplorerClient catalog={VOCABULARY_CATALOG} />
    </Suspense>
  );
}