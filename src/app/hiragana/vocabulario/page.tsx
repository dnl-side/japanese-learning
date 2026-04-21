//src/app/hiragana/vocabulario/page.tsx

import { Suspense } from "react";
import { HIRAGANA_LESSONS } from "@/data/hiragana";
import VocabularyPage from "@/app/components/vocabulary/VocabularyPage";

export default function HiraganaVocabularioPage() {
  return (
    <Suspense>
      <VocabularyPage
        lessons={HIRAGANA_LESSONS}
        scriptType="hiragana"
        backHref="/hiragana"
        backLabel="Hiragana"
        accent="var(--sakura-dark)"
        accentSoft="rgba(242,167,187,"
        gradient="linear-gradient(135deg, #F48FB1 0%, #CE93D8 100%)"
      />
    </Suspense>
  );
}