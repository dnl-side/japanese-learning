import Link from "next/link";
import { notFound } from "next/navigation";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";
import { JLPT_LEVEL_META, JLPT_SECTION_META, JLPT_SECTION_SLUGS, getJlptGuidesBySection, getJlptLevelFromSlug, getJlptLevelStats, getSectionHref } from "@/data/jlpt";

interface Props {
  params: Promise<{ level: string }>;
}

export function generateStaticParams() {
  return Object.values(JLPT_LEVEL_META).map((meta) => ({ level: meta.slug }));
}

export default async function JlptLevelPage({ params }: Props) {
  const { level: levelSlug } = await params;
  const level = getJlptLevelFromSlug(levelSlug);
  if (!level) notFound();

  const meta = JLPT_LEVEL_META[level];
  const stats = getJlptLevelStats(level);

  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />

      <div className="relative z-10 mx-auto flex w-full justify-center px-4 pb-24 pt-10 sm:px-6 lg:px-10">
        <div className="w-full max-w-[1180px]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link href="/jlpt" className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold shadow-sm backdrop-blur transition-all hover:-translate-y-0.5" style={{ color: meta.accent, background: "rgba(255,255,255,0.78)", borderColor: `${meta.accent}26` }}>
              ← JLPT
            </Link>
            <Link href={`/jlpt/${meta.slug}/mock`} className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5" style={{ background: `linear-gradient(135deg, ${meta.accent}, ${meta.color})` }}>
              Generar mock →
            </Link>
          </div>

          <section className="mx-auto mt-8 max-w-[920px] text-center">
            <div className="char-display pointer-events-none select-none text-center" style={{ fontSize: "clamp(5rem, 16vw, 11rem)", color: meta.accent, opacity: 0.09, lineHeight: 1, fontWeight: 700 }} aria-hidden="true">
              {level}
            </div>
            <h1 className="char-display -mt-8 text-4xl font-bold sm:text-6xl" style={{ color: "var(--ink)" }}>
              {meta.label}
            </h1>
            <p className="mx-auto mt-5 max-w-[760px] text-base leading-relaxed sm:text-lg" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
              {meta.description}
            </p>
          </section>

          <section className="mt-8 grid gap-4 md:grid-cols-3">
            <StatCard label="Tipos explicados" value={stats.guideCount.toString()} accent={meta.accent} />
            <StatCard label="Preguntas propias" value={stats.totalQuestions.toString()} accent={meta.accent} />
            <StatCard label="Estado" value={meta.status === "ready" ? "Base lista" : "Molde listo"} accent={meta.accent} />
          </section>

          <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {JLPT_SECTION_SLUGS.map((section) => {
              const sectionMeta = JLPT_SECTION_META[section];
              const guides = getJlptGuidesBySection(level, section);
              const count = stats.sectionCounts[section];

              return (
                <Link key={section} href={getSectionHref(level, section)} className="group rounded-[28px] border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ background: "rgba(255,255,255,0.86)", borderColor: "rgba(148,163,184,0.18)", boxShadow: "0 16px 36px rgba(15,23,42,0.07)" }}>
                  <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: sectionMeta.accent }}>{sectionMeta.jpLabel}</p>
                  <h2 className="mt-2 text-xl font-bold" style={{ color: "var(--ink)" }}>{sectionMeta.label}</h2>
                  <p className="mt-3 min-h-16 text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.76 }}>{sectionMeta.description}</p>
                  <div className="mt-5 grid grid-cols-2 gap-2 text-sm">
                    <span className="rounded-2xl px-3 py-2" style={{ background: `${sectionMeta.color}33`, color: sectionMeta.accent }}>{guides.length} técnicas</span>
                    <span className="rounded-2xl px-3 py-2" style={{ background: "rgba(248,250,252,0.88)", color: "var(--ink-soft)" }}>{count} preguntas</span>
                  </div>
                  <p className="mt-5 text-sm font-bold transition-transform group-hover:translate-x-1" style={{ color: sectionMeta.accent }}>Ver sección →</p>
                </Link>
              );
            })}
          </section>
        </div>
      </div>
    </main>
  );
}

function StatCard({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="rounded-[24px] border p-5 text-center" style={{ background: "rgba(255,255,255,0.82)", borderColor: "rgba(148,163,184,0.18)", boxShadow: "0 14px 34px rgba(15,23,42,0.06)" }}>
      <p className="text-2xl font-bold" style={{ color: accent }}>{value}</p>
      <p className="mt-1 text-sm" style={{ color: "var(--ink-soft)", opacity: 0.72 }}>{label}</p>
    </div>
  );
}
