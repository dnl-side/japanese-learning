"use client";

import Link from "next/link";
import ReadingPopoverText from "@/app/components/ui/ReadingPopoverText";
import type { VocabularyEntry } from "@/data/vocabulary";
import { VOCABULARY_KIND_LABELS, VOCABULARY_TOPIC_LABELS } from "@/data/vocabulary";
import { getEntryHref, getPrimaryForm, getPrimaryMeaning } from "@/lib/vocabulary/vocabularyView";
import type { VocabularyUserEntryState } from "@/lib/vocabulary/useVocabularyUserState";
import { VocabularyPill } from "./VocabularyPills";
import { VOCAB_ACCENT, VOCAB_ACCENT_DEEP, VOCAB_ACCENT_SOFT, glassCard } from "./theme";

interface VocabularyEntryCardProps {
  entry: VocabularyEntry;
  userState?: VocabularyUserEntryState;
  compact?: boolean;
  onToggleStar?: (entryId: string) => void;
  onToggleArchive?: (entryId: string) => void;
  onVisit?: (entryId: string) => void;
}

export function VocabularyEntryCard({
  entry,
  userState,
  compact = false,
  onToggleStar,
  onToggleArchive,
  onVisit,
}: VocabularyEntryCardProps) {
  const primaryForm = getPrimaryForm(entry);
  const primaryMeaning = getPrimaryMeaning(entry);
  const accent = entry.ui?.accent ?? VOCAB_ACCENT;
  const topicLabel = entry.topics[0] ? VOCABULARY_TOPIC_LABELS[entry.topics[0]] : "Sin tema";

  return (
    <article
      className="rounded-[28px] border p-4 sm:p-5"
      style={{
        ...glassCard(),
        border: `1px solid rgba(124,58,237,0.12)`,
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <VocabularyPill accent={accent}>{entry.level}</VocabularyPill>
            <VocabularyPill accent={VOCAB_ACCENT_DEEP}>
              {VOCABULARY_KIND_LABELS[entry.kind]}
            </VocabularyPill>
            <VocabularyPill>{topicLabel}</VocabularyPill>
          </div>

          <div
            className="mt-4 min-w-0"
            style={{ color: "var(--ink)" }}
          >
            {primaryForm?.segments?.length ? (
              <ReadingPopoverText
                segments={primaryForm.segments}
                className="char-display text-[1.55rem] font-black leading-none sm:text-[1.9rem]"
                popoverStyle={{ fontSize: "1.1rem" }}
              />
            ) : (
              <span className="char-display text-[1.55rem] font-black leading-none sm:text-[1.9rem]">
                {primaryForm?.text ?? entry.id}
              </span>
            )}
          </div>

          {primaryForm?.reading && !primaryForm.segments?.some((segment) => segment.ruby) ? (
            <p className="mt-2 text-sm font-medium sm:text-[0.95rem]" style={{ color: accent }}>
              {primaryForm.reading}
            </p>
          ) : null}

          <p
            className="mt-3 text-sm leading-relaxed sm:text-[0.95rem]"
            style={{ color: "var(--ink-soft)" }}
          >
            {primaryMeaning}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Link
              href={getEntryHref(entry.id)}
              onClick={() => onVisit?.(entry.id)}
              className="inline-flex items-center rounded-2xl border px-3 py-2 text-sm font-semibold transition-all hover:-translate-y-[1px]"
              style={{
                color: accent,
                background: "rgba(255,255,255,0.82)",
                border: "1px solid rgba(124,58,237,0.14)",
              }}
            >
              Ver ficha →
            </Link>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            aria-label={userState?.starred ? "Quitar de favoritas" : "Añadir a favoritas"}
            onClick={() => onToggleStar?.(entry.id)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border text-lg font-bold transition-transform hover:-translate-y-[1px]"
            style={{
              color: userState?.starred ? "#F59E0B" : VOCAB_ACCENT,
              background: userState?.starred
                ? "rgba(254,243,199,0.7)"
                : `${VOCAB_ACCENT_SOFT}0.08)`,
              border: "1px solid rgba(124,58,237,0.16)",
            }}
          >
            ★
          </button>

          <button
            type="button"
            aria-label={userState?.archived ? "Desarchivar" : "Archivar"}
            onClick={() => onToggleArchive?.(entry.id)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border text-sm font-bold transition-transform hover:-translate-y-[1px]"
            style={{
              color: userState?.archived ? "#475569" : VOCAB_ACCENT,
              background: userState?.archived
                ? "rgba(226,232,240,0.9)"
                : `${VOCAB_ACCENT_SOFT}0.05)`,
              border: "1px solid rgba(124,58,237,0.14)",
            }}
          >
            {userState?.archived ? "↺" : "⎘"}
          </button>
        </div>
      </div>

      {!compact && entry.examples[0] ? (
        <div
          className="mt-4 rounded-2xl border px-4 py-3"
          style={{
            background: "rgba(250,250,255,0.86)",
            border: `1px solid rgba(124,58,237,0.1)`,
          }}
        >
          <div className="flex items-center gap-2">
            <span className="text-[0.72rem] font-bold uppercase tracking-[0.18em]" style={{ color: accent }}>
              Ejemplo
            </span>
            <span className="text-[0.72rem]" style={{ color: "var(--ink-soft)", opacity: 0.6 }}>
              {entry.examples.length} total
            </span>
          </div>
          <div className="mt-3">
            <ReadingPopoverText
              segments={entry.examples[0].segments}
              className="char-display text-lg font-bold leading-relaxed sm:text-[1.18rem]"
              popoverStyle={{ fontSize: "1rem" }}
            />
          </div>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            {entry.examples[0].translation}
          </p>
        </div>
      ) : null}
    </article>
  );
}
