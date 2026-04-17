import { Suspense } from "react";
import { KATAKANA_LESSONS } from "@/data/katakana";
import VocabularyPage from "@/app/components/vocabulary/VocabularyPage";

export default function KatakanaVocabularioPage() {
  return (
    <Suspense>
      <VocabularyPage
        lessons={KATAKANA_LESSONS}
        scriptType="katakana"
        backHref="/katakana"
        backLabel="Katakana"
        accent="#1A4BC0"
        accentSoft="rgba(167,196,242,"
        gradient="linear-gradient(135deg, #64B5F6 0%, #1A4BC0 100%)"
      />
    </Suspense>
  );
}