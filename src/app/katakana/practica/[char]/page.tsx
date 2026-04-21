
//src/app/katakana/practica/[char]/page.tsx

import DrawingCanvas from "@/app/components/drawing/DrawingCanvas";
import {
  KATAKANA_ROMAJI,
  KATAKANA_STROKE_COUNT,
  KATAKANA_ALL_CHARS,
} from "@/data/katakana";

interface Props {
  params: Promise<{ char: string }>;
}

export default async function KatakanaPracticaPage({ params }: Props) {
  const { char: encoded } = await params;
  const char = decodeURIComponent(encoded);

  const romaji = KATAKANA_ROMAJI[char] ?? char;
  const strokeCount = KATAKANA_STROKE_COUNT[char] ?? 1;

  const allChars = KATAKANA_ALL_CHARS.map((c) => c.char);
  const idx = allChars.indexOf(char);
  const prevChar = idx > 0 ? allChars[idx - 1] : null;
  const nextChar = idx < allChars.length - 1 ? allChars[idx + 1] : null;

  const encode = (c: string) => encodeURIComponent(c);

  return (
    <div className="flex h-screen flex-col">
      <DrawingCanvas
        char={char}
        romaji={romaji}
        scriptType="katakana"
        strokeCount={strokeCount}
        backHref="/katakana/tabla"
        prevHref={prevChar ? `/katakana/practica/${encode(prevChar)}` : undefined}
        nextHref={nextChar ? `/katakana/practica/${encode(nextChar)}` : undefined}
      />
    </div>
  );
}