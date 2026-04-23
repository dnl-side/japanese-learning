import type { CSSProperties, ReactNode } from "react";
import { VOCAB_ACCENT, VOCAB_ACCENT_SOFT } from "./theme";

interface PillProps {
  children: ReactNode;
  accent?: string;
  className?: string;
  style?: CSSProperties;
}

export function VocabularyPill({ children, accent = VOCAB_ACCENT, className, style }: PillProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-2.5 py-1 text-[0.72rem] font-semibold tracking-[0.03em]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        color: accent,
        border: `1px solid rgba(124,58,237,0.18)`,
        background: `${VOCAB_ACCENT_SOFT}0.09)`,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p
      className="text-[0.72rem] font-bold uppercase tracking-[0.24em]"
      style={{ color: VOCAB_ACCENT, opacity: 0.9 }}
    >
      {children}
    </p>
  );
}

export function MetricPill({ label, value }: { label: string; value: string | number }) {
  return (
    <div
      className="rounded-2xl border px-4 py-3"
      style={{
        background: "rgba(255,255,255,0.76)",
        border: "1px solid rgba(148,163,184,0.16)",
      }}
    >
      <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em]" style={{ color: VOCAB_ACCENT, opacity: 0.9 }}>
        {label}
      </p>
      <p className="mt-2 text-2xl font-black leading-none sm:text-[1.8rem]" style={{ color: "var(--ink)" }}>
        {value}
      </p>
    </div>
  );
}
