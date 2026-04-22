// src\app\components\ui/ReadingPopoverText.tsx

"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { RubySegment } from "@/app/components/ui/Ruby";

interface ReadingPopoverTextProps {
  segments: readonly RubySegment[];
  className?: string;
  style?: CSSProperties;
  popoverClassName?: string;
  popoverStyle?: CSSProperties;
  interactiveClassName?: string;
  interactiveStyle?: CSSProperties;
}

export default function ReadingPopoverText({
  segments,
  className,
  style,
  popoverClassName,
  popoverStyle,
  interactiveClassName,
  interactiveStyle,
}: ReadingPopoverTextProps) {
  const rootRef = useRef<HTMLSpanElement | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent | TouchEvent) {
      if (!rootRef.current) return;

      const target = event.target as Node | null;
      if (target && !rootRef.current.contains(target)) {
        setOpenIndex(null);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenIndex(null);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown, { passive: true });
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <span ref={rootRef} className={className} style={style}>
      {segments.map((seg, index) => {
        if (!seg.ruby) {
          return <span key={index}>{seg.text}</span>;
        }

        const isOpen = openIndex === index;

        return (
          <span
            key={index}
            className="relative inline-block align-baseline"
            style={{ marginInline: "0.02em" }}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-label={`${seg.text} の読みを表示`}
              onClick={() => setOpenIndex((prev) => (prev === index ? null : index))}
              className={
                interactiveClassName ??
                "inline rounded-md border-0 bg-transparent p-0 align-baseline underline decoration-dotted underline-offset-[0.18em] transition-opacity hover:opacity-75"
              }
              style={{
                color: "inherit",
                font: "inherit",
                lineHeight: "inherit",
                cursor: "pointer",
                ...interactiveStyle,
              }}
            >
              {seg.text}
            </button>

            {isOpen && (
            <span
                role="dialog"
                aria-label={`${seg.text} の読み`}
                className={
                popoverClassName ??
                "pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 -translate-x-1/2 whitespace-nowrap rounded-xl border px-3 py-2 text-sl font-semibold shadow-lg"
                }
                style={{
                background: "rgba(255,255,255,0.96)",
                border: "1px solid rgba(148,163,184,0.22)",
                color: "var(--ink)",
                boxShadow: "0 12px 28px rgba(15,23,42,0.14)",
                fontSize: "1.5rem",
                lineHeight: 1.2,
                ...popoverStyle,
                }}
            >
                {seg.ruby}
            </span>
            )}
          </span>
        );
      })}
    </span>
  );
}