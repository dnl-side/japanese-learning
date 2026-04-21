//src/app/hiragana/practica/[char]/page.tsx

import DrawingCanvas from "@/app/components/drawing/DrawingCanvas";

import {
  HIRAGANA_ROMAJI,
  HIRAGANA_STROKE_COUNT,
  HIRAGANA_ALL_CHARS,
} from "@/data/hiragana";

interface Props {
  params: Promise<{ char: string }>;
}

export default async function HiraganaPracticaPage({ params }: Props) {
  const { char: encoded } = await params;
  const char = decodeURIComponent(encoded);

  const romaji = HIRAGANA_ROMAJI[char] ?? char;
  const strokeCount = HIRAGANA_STROKE_COUNT[char] ?? 1;

  // Prev / Next navigation within the flat char list
  const allChars = HIRAGANA_ALL_CHARS.map((c) => c.char);
  const idx = allChars.indexOf(char);
  const prevChar = idx > 0 ? allChars[idx - 1] : null;
  const nextChar = idx < allChars.length - 1 ? allChars[idx + 1] : null;

  const encode = (c: string) => encodeURIComponent(c);

  return (
    <div className="flex h-screen flex-col">
      <DrawingCanvas
        char={char}
        romaji={romaji}
        scriptType="hiragana"
        strokeCount={strokeCount}
        backHref="/hiragana/tabla"
        prevHref={prevChar ? `/hiragana/practica/${encode(prevChar)}` : undefined}
        nextHref={nextChar ? `/hiragana/practica/${encode(nextChar)}` : undefined}
      />
    </div>
  );
}