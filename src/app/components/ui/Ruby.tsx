import type { CSSProperties } from "react";

// src\app\components\ui/Ruby.tsx

// ─── Types ────────────────────────────────────────────────────────────────────

export interface RubySegment {
  text: string;
  ruby?: string; // furigana above — omit for plain kana/Latin
}

// ─── Components ───────────────────────────────────────────────────────────────

interface RubyTextProps {
  segments: readonly RubySegment[];
  className?: string;
  style?: CSSProperties;
  rtStyle?: CSSProperties;
}

/**
 * Renders Japanese text with optional furigana (ruby) annotations above kanji.
 * Native HTML <ruby> — no external library needed.
 *
 * Example:
 *   <RubyText segments={[
 *     { text: "日本語", ruby: "にほんご" },
 *     { text: "を" },
 *     { text: "勉強", ruby: "べんきょう" },
 *     { text: "します。" },
 *   ]} />
 */
export function RubyText({ segments, className, style, rtStyle }: RubyTextProps) {
  return (
    <span className={className} style={style}>
      {segments.map((seg, i) =>
        seg.ruby ? (
          <ruby key={i} style={{ rubyAlign: "center" } as CSSProperties}>
            {seg.text}
            <rt
              style={{
                fontSize: "0.5em",
                lineHeight: 1,
                color: "inherit",
                opacity: 0.8,
                ...rtStyle,
              }}
            >
              {seg.ruby}
            </rt>
          </ruby>
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
    </span>
  );
}

// ─── Helper ───────────────────────────────────────────────────────────────────

/**
 * Shorthand to build a RubySegment array from alternating pairs.
 * rb("日本語", "にほんご", "を", "", "勉強", "べんきょう", "します。", "")
 */
export function rb(...pairs: string[]): RubySegment[] {
  const segments: RubySegment[] = [];
  for (let i = 0; i < pairs.length; i += 2) {
    const text = pairs[i];
    const ruby = pairs[i + 1] || undefined;
    segments.push(ruby ? { text, ruby } : { text });
  }
  return segments;
}