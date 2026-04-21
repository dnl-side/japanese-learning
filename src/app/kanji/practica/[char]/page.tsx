// src/app/kanji/practica/[char]/page.tsx

import DrawingCanvas from "@/app/components/drawing/DrawingCanvas";
import { KANJI_LIST, getKanjiEntry, getKanjiSvgFile } from "@/data/kanji";

interface Props {
  params: Promise<{ char: string }>;
}

export async function generateStaticParams() {
  return KANJI_LIST
    .filter((k) => k.hasSvg)
    .map((k) => ({ char: k.char }));
}

export default async function KanjiPracticaPage({ params }: Props) {
  const { char: encoded } = await params;
  const char = decodeURIComponent(encoded);

  const entry = getKanjiEntry(char);
  const svgFile = entry ? getKanjiSvgFile(entry.char, entry.level) : undefined;

  if (!entry || !entry.hasSvg || !svgFile) {
    return (
      <div className="flex min-h-screen items-center justify-center" style={{ background: "var(--paper)" }}>
        <div className="px-6 text-center">
          <div className="char-display mb-4 text-6xl" style={{ color: "#2E7D32" }}>
            {char}
          </div>
          <p className="mb-2 text-lg font-semibold" style={{ color: "var(--ink)" }}>
            Sin SVG disponible
          </p>
          <p className="mb-6 text-sm" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>
            La práctica de escritura solo está disponible para kanji de nivel 1 y 2.
          </p>
          <a
            href="/kanji/tabla"
            className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #A5D6A7, #2E7D32)" }}
          >
            ← Volver a la tabla
          </a>
        </div>
      </div>
    );
  }

  const practiceList = KANJI_LIST
    .filter((k) => k.hasSvg && getKanjiSvgFile(k.char, k.level))
    .map((k) => k.char);

  const idx = practiceList.indexOf(char);
  const prevChar = idx > 0 ? practiceList[idx - 1] : null;
  const nextChar = idx < practiceList.length - 1 ? practiceList[idx + 1] : null;

  const encode = (c: string) => encodeURIComponent(c);

  const displayLabel =
    entry.on.length > 0
      ? entry.on[0]
      : entry.kun.length > 0
      ? entry.kun[0]
      : char;

  return (
    <div className="flex h-screen flex-col">
      <DrawingCanvas
        char={char}
        romaji={svgFile}
        displayLabel={displayLabel}
        scriptType="kanji"
        strokeCount={entry.strokeCount}
        kanjiLevel={entry.level}
        backHref="/kanji/tabla"
        prevHref={prevChar ? `/kanji/practica/${encode(prevChar)}` : undefined}
        nextHref={nextChar ? `/kanji/practica/${encode(nextChar)}` : undefined}
      />
    </div>
  );
}