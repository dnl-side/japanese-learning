import Link from "next/link";
import { notFound } from "next/navigation";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";
import JlptGuideCard from "@/app/components/jlpt/JlptGuideCard";
import JlptQuestionRenderer from "@/app/components/jlpt/JlptQuestionRenderer";
import { JLPT_LEVEL_META, JLPT_SECTION_META, JLPT_SECTION_SLUGS, getItemTypeHref, getJlptGuidesBySection, getJlptLevelFromSlug, getJlptQuestionsBySection, getJlptSectionFromSlug } from "@/data/jlpt";

interface Props {
  params: Promise<{ level: string; section: string }>;
}

export function generateStaticParams() {
  return Object.values(JLPT_LEVEL_META).flatMap((meta) =>
    JLPT_SECTION_SLUGS.map((section) => ({ level: meta.slug, section })),
  );
}

export default async function JlptSectionPage({ params }: Props) {
  const { level: levelSlug, section: sectionSlug } = await params;
  const level = getJlptLevelFromSlug(levelSlug);
  const section = getJlptSectionFromSlug(sectionSlug);
  if (!level || !section) notFound();

  const levelMeta = JLPT_LEVEL_META[level];
  const sectionMeta = JLPT_SECTION_META[section];
  const guides = getJlptGuidesBySection(level, section);
  const questions = getJlptQuestionsBySection(level, section);

  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />

      <div className="relative z-10 mx-auto flex w-full justify-center px-4 pb-24 pt-10 sm:px-6 lg:px-10">
        <div className="w-full max-w-[1180px]">
          <Link href={`/jlpt/${levelMeta.slug}`} className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold shadow-sm backdrop-blur transition-all hover:-translate-y-0.5" style={{ color: sectionMeta.accent, background: "rgba(255,255,255,0.78)", borderColor: `${sectionMeta.accent}26` }}>
            ← {levelMeta.label}
          </Link>

          <section className="mx-auto mt-8 max-w-[920px] text-center">
            <div className="char-display pointer-events-none select-none text-center" style={{ fontSize: "clamp(5rem, 16vw, 10rem)", color: sectionMeta.accent, opacity: 0.09, lineHeight: 1, fontWeight: 700 }} aria-hidden="true">
              {sectionMeta.jpLabel}
            </div>
            <h1 className="char-display -mt-8 text-4xl font-bold sm:text-6xl" style={{ color: "var(--ink)" }}>
              {sectionMeta.label}
            </h1>
            <p className="mx-auto mt-5 max-w-[760px] text-base leading-relaxed sm:text-lg" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
              {sectionMeta.description}
            </p>
          </section>

          <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {guides.map((guide) => (
              <JlptGuideCard key={guide.id} guide={guide} href={getItemTypeHref(level, section, guide.itemType)} accent={sectionMeta.accent} />
            ))}
          </section>

          <section className="mt-10">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: sectionMeta.accent }}>Práctica rápida</p>
                <h2 className="mt-1 text-2xl font-bold" style={{ color: "var(--ink)" }}>Todas las preguntas de la sección</h2>
              </div>
              <span className="rounded-full px-3 py-1 text-xs font-bold" style={{ background: `${sectionMeta.color}33`, color: sectionMeta.accent }}>{questions.length} preguntas</span>
            </div>
            <JlptQuestionRenderer questions={questions} mode="guided" />
          </section>
        </div>
      </div>
    </main>
  );
}
