import Link from "next/link";
import { notFound } from "next/navigation";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";
import JlptMockClient from "@/app/components/jlpt/JlptMockClient";
import { JLPT_LEVEL_META, getJlptLevelFromSlug } from "@/data/jlpt";

interface Props {
  params: Promise<{ level: string }>;
}

export function generateStaticParams() {
  return Object.values(JLPT_LEVEL_META).map((meta) => ({ level: meta.slug }));
}

export default async function JlptMockPage({ params }: Props) {
  const { level: levelSlug } = await params;
  const level = getJlptLevelFromSlug(levelSlug);
  if (!level) notFound();

  const meta = JLPT_LEVEL_META[level];

  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />

      <div className="relative z-10 mx-auto flex w-full justify-center px-4 pb-24 pt-10 sm:px-6 lg:px-10">
        <div className="w-full max-w-[980px]">
          <Link href={`/jlpt/${meta.slug}`} className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold shadow-sm backdrop-blur transition-all hover:-translate-y-0.5" style={{ color: meta.accent, background: "rgba(255,255,255,0.78)", borderColor: `${meta.accent}26` }}>
            ← {meta.label}
          </Link>

          <section className="mx-auto mt-8 max-w-[860px] text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: meta.accent }}>Mock generator</p>
            <h1 className="char-display mt-3 text-4xl font-bold sm:text-5xl" style={{ color: "var(--ink)" }}>
              Simulacro {level}
            </h1>
            <p className="mx-auto mt-4 max-w-[720px] text-base leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
              Genera un intento diferente desde el pool de preguntas. Cuando el banco crezca, esta misma pantalla podrá armar simulacros más largos por sección.
            </p>
          </section>

          <section className="mt-8">
            <JlptMockClient level={level} />
          </section>
        </div>
      </div>
    </main>
  );
}
