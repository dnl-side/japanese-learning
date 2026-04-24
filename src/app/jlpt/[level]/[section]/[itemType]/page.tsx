import Link from "next/link";
import { notFound } from "next/navigation";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";
import JlptQuestionRenderer from "@/app/components/jlpt/JlptQuestionRenderer";
import { allJlptGuides, JLPT_LEVEL_META, JLPT_SECTION_META, getJlptGuide, getJlptLevelFromSlug, getJlptQuestionsByItemType, getJlptSectionFromSlug, type JlptItemType } from "@/data/jlpt";

interface Props {
  params: Promise<{ level: string; section: string; itemType: string }>;
}

export function generateStaticParams() {
  return allJlptGuides.map((guide) => ({
    level: JLPT_LEVEL_META[guide.level].slug,
    section: guide.section,
    itemType: guide.itemType,
  }));
}

function isJlptItemType(value: string): value is JlptItemType {
  return allJlptGuides.some((guide) => guide.itemType === value);
}

export default async function JlptItemTypePage({ params }: Props) {
  const { level: levelSlug, section: sectionSlug, itemType: itemTypeSlug } = await params;
  const level = getJlptLevelFromSlug(levelSlug);
  const section = getJlptSectionFromSlug(sectionSlug);
  if (!level || !section || !isJlptItemType(itemTypeSlug)) notFound();

  const guide = getJlptGuide(level, section, itemTypeSlug);
  const questions = getJlptQuestionsByItemType(level, section, itemTypeSlug);
  if (!guide) notFound();

  const levelMeta = JLPT_LEVEL_META[level];
  const sectionMeta = JLPT_SECTION_META[section];

  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />

      <div className="relative z-10 mx-auto flex w-full justify-center px-4 pb-24 pt-10 sm:px-6 lg:px-10">
        <div className="w-full max-w-[980px]">
          <Link href={`/jlpt/${levelMeta.slug}/${section}`} className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold shadow-sm backdrop-blur transition-all hover:-translate-y-0.5" style={{ color: sectionMeta.accent, background: "rgba(255,255,255,0.78)", borderColor: `${sectionMeta.accent}26` }}>
            ← {sectionMeta.label}
          </Link>

          <section className="mx-auto mt-8 max-w-[860px] text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: sectionMeta.accent }}>{levelMeta.label} · {sectionMeta.jpLabel}</p>
            <h1 className="char-display mt-3 text-4xl font-bold sm:text-5xl" style={{ color: "var(--ink)" }}>
              {guide.title}
            </h1>
            <p className="mx-auto mt-4 max-w-[720px] text-base leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
              {guide.shortDescription}
            </p>
          </section>

          <section className="mt-8">
            <JlptQuestionRenderer questions={questions} guide={guide} mode="guided" />
          </section>
        </div>
      </div>
    </main>
  );
}
