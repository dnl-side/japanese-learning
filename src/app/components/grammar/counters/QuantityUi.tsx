import Link from "next/link";
import type { ReactNode } from "react";
import { RubyText, type RubySegment } from "@/app/components/ui/Ruby";

export const ACCENT = "#00695C";
export const SOFT = "#80CBC4";
export const GRADIENT = "linear-gradient(135deg, #B2DFDB 0%, #80CBC4 48%, #00695C 100%)";

export function withAlpha(hex: string, alpha: number) {
  const clean = hex.replace("#", "");
  const normalized =
    clean.length === 3
      ? clean
          .split("")
          .map((char) => char + char)
          .join("")
      : clean;

  const r = parseInt(normalized.slice(0, 2), 16);
  const g = parseInt(normalized.slice(2, 4), 16);
  const b = parseInt(normalized.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function ShellCard({
  children,
  color = ACCENT,
  className = "",
}: {
  children: ReactNode;
  color?: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[30px] border backdrop-blur-md ${className}`}
      style={{
        background: "rgba(255,255,255,0.78)",
        border: `1px solid ${withAlpha(color, 0.18)}`,
        boxShadow: `0 18px 44px ${withAlpha(color, 0.08)}`,
      }}
    >
      {children}
    </div>
  );
}

export function SectionPanel({
  eyebrow,
  title,
  description,
  children,
  color = ACCENT,
  className = "",
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  color?: string;
  className?: string;
  action?: ReactNode;
}) {
  return (
    <ShellCard color={color} className={className}>
      <div className="flex flex-col gap-4 border-b px-5 py-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          {eyebrow ? (
            <div
              className="mb-2 inline-flex items-center rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
              style={{
                color,
                background: withAlpha(color, 0.1),
                border: `1px solid ${withAlpha(color, 0.18)}`,
              }}
            >
              {eyebrow}
            </div>
          ) : null}

          <h2 className="text-xl font-bold leading-tight sm:text-2xl" style={{ color: "var(--ink)" }}>
            {title}
          </h2>

          {description ? (
            <p className="mt-2 max-w-[76ch] text-sm leading-relaxed sm:text-base" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
              {description}
            </p>
          ) : null}
        </div>

        {action ? <div className="shrink-0">{action}</div> : null}
      </div>

      <div className="px-5 py-5 sm:px-6">{children}</div>
    </ShellCard>
  );
}

export function Badge({ children, color = ACCENT }: { children: ReactNode; color?: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.14em]"
      style={{ color, background: withAlpha(color, 0.1), border: `1px solid ${withAlpha(color, 0.18)}` }}
    >
      {children}
    </span>
  );
}

export function InfoCard({
  title,
  text,
  icon,
  color = ACCENT,
}: {
  title: string;
  text: string;
  icon: string;
  color?: string;
}) {
  return (
    <div
      className="rounded-[24px] border p-4"
      style={{ background: withAlpha(color, 0.07), border: `1px solid ${withAlpha(color, 0.16)}` }}
    >
      <div className="flex items-start gap-3">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-bold"
          style={{ color, background: withAlpha(color, 0.13), border: `1px solid ${withAlpha(color, 0.22)}` }}
        >
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold uppercase tracking-[0.12em]" style={{ color }}>
            {title}
          </p>
          <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export function RubyLine({
  segments,
  className = "char-display text-xl font-bold leading-relaxed",
  color = "var(--ink)",
}: {
  segments: RubySegment[];
  className?: string;
  color?: string;
}) {
  return (
    <RubyText
      segments={segments}
      className={className}
      style={{ color }}
      rtStyle={{ fontSize: "0.5em", opacity: 0.9, lineHeight: 1, fontWeight: 700 }}
    />
  );
}

export function ReadingToken({
  text,
  reading,
  color = ACCENT,
  size = "lg",
}: {
  text: string;
  reading: string;
  color?: string;
  size?: "sm" | "lg" | "xl";
}) {
  const sizeClass = size === "xl" ? "text-3xl sm:text-4xl" : size === "lg" ? "text-2xl" : "text-xl";

  return (
    <div
      className="rounded-2xl border px-4 py-3 text-center"
      style={{ background: withAlpha(color, 0.06), borderColor: withAlpha(color, 0.16) }}
    >
      <p className={`font-mono font-black leading-none ${sizeClass}`} style={{ color }}>
        {text}
      </p>
      <p className="mt-2 text-sm font-semibold leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>
        {reading}
      </p>
    </div>
  );
}

export function RouteButton({ href, children, color = ACCENT }: { href: string; children: ReactNode; color?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-bold shadow-sm transition-all hover:-translate-y-0.5"
      style={{ color, background: "rgba(255,255,255,0.86)", borderColor: withAlpha(color, 0.18), boxShadow: `0 10px 24px ${withAlpha(color, 0.08)}` }}
    >
      {children}
    </Link>
  );
}
