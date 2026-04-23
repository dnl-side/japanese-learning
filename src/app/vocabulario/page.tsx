import { VOCABULARY_CATALOG } from "@/data/vocabulary";
import { VocabularyHubClient } from "@/app/components/vocabulary/VocabularyHubClient";

export default function VocabularyPage() {
  return <VocabularyHubClient catalog={VOCABULARY_CATALOG} />;
}
