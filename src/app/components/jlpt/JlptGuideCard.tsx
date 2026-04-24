import Link from "next/link";
import type { JlptItemTypeGuide } from "@/data/jlpt";

export default function JlptGuideCard({
  guide,
  href,
  accent,
}: {
  guide: JlptItemTypeGuide;
  href: string;
  accent: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-[24px] border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{
        background: "rgba(255,255,255,0.86)",
        borderColor: "rgba(148,163,184,0.18)",
        boxShadow: "0 14px 34px rgba(15,23,42,0.06)",
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: accent }}>
            {guide.jpTitle}
          </p>
          <h3 className="mt-2 text-lg font-bold" style={{ color: "var(--ink)" }}>
            {guide.title}
          </h3>
        </div>
        <span className="rounded-full px-3 py-1 text-xs font-bold" style={{ background: `${accent}14`, color: accent }}>
          Entrenar
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
        {guide.shortDescription}
      </p>

      <div className="mt-4 grid gap-2 text-sm">
        {guide.solvingSteps.slice(0, 2).map((step, index) => (
          <div key={step} className="flex gap-2 rounded-2xl px-3 py-2" style={{ background: `${accent}0D` }}>
            <span className="font-bold" style={{ color: accent }}>
              {index + 1}
            </span>
            <span style={{ color: "var(--ink-soft)" }}>{step}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1" style={{ color: accent }}>
        Ver técnica y ejercicios →
      </div>
    </Link>
  );
}
