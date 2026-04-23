import { VOCABULARY_CATALOG } from "@/data/vocabulary";
import { VocabularyExplorerClient } from "@/app/components/vocabulary/VocabularyExplorerClient";

export default function VocabularyExplorerPage() {
  return <VocabularyExplorerClient catalog={VOCABULARY_CATALOG} />;
}
