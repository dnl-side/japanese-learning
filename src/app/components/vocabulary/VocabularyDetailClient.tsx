"use client";

import Link from "next/link";
import ReadingPopoverText from "@/app/components/ui/ReadingPopoverText";
import type { VocabularyCollection, VocabularyEntry } from "@/data/vocabulary";
import { VOCABULARY_KIND_LABELS, VOCABULARY_TOPIC_LABELS } from "@/data/vocabulary";
import { useVocabularyUserState } from "@/lib/vocabulary/useVocabularyUserState";
import { getCollectionHref, getPrimaryForm } from "@/lib/vocabulary/vocabularyView";
import { SectionEyebrow, VocabularyPill } from "./VocabularyPills";
import { VOCAB_ACCENT, VOCAB_ACCENT_DEEP, VOCAB_ACCENT_SOFT, glassCard } from "./theme";
import { VocabularyEntryCard } from "./VocabularyEntryCard";

interface VocabularyDetailClientProps {
  entry: VocabularyEntry;
  relatedEntries: VocabularyEntry[];
  collections: VocabularyCollection[];
}

export function VocabularyDetailClient({ entry, relatedEntries, collections }: VocabularyDetailClientProps) {
  const userState = useVocabularyUserState();
  const primaryForm = getPrimaryForm(entry);
  const state = userState.getEntryState(entry.id);
  const accent = entry.ui?.accent ?? VOCAB_ACCENT;

  return (
    <main className="min-h-screen" style={{ background: "var(--paper)" }}>
      <div className="mx-auto max-w-6xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/vocabulario/explorar" className="text-sm font-semibold" style={{ color: VOCAB_ACCENT }}>
            ← Explorar
          </Link>
          <Link href="/vocabulario" className="text-sm font-semibold" style={{ color: VOCAB_ACCENT, opacity: 0.75 }}>
            Vocabulario
          </Link>
        </div>

        <section className="mt-5 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[34px] border p-6 sm:p-7" style={glassCard()}>
            <SectionEyebrow>Ficha</SectionEyebrow>
            <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap gap-2">
                  <VocabularyPill accent={accent}>{entry.level}</VocabularyPill>
                  <VocabularyPill accent={VOCAB_ACCENT_DEEP}>{VOCABULARY_KIND_LABELS[entry.kind]}</VocabularyPill>
                  {entry.topics.slice(0, 3).map((topic) => (
                    <VocabularyPill key={topic}>{VOCABULARY_TOPIC_LABELS[topic]}</VocabularyPill>
                  ))}
                </div>

                <div className="mt-5">
                  {primaryForm?.segments?.length ? (
                    <ReadingPopoverText
                      segments={primaryForm.segments}
                      className="char-display text-[2.2rem] font-black leading-none sm:text-[2.8rem]"
                      popoverStyle={{ fontSize: "1.2rem" }}
                    />
                  ) : (
                    <h1 className="char-display text-[2.2rem] font-black leading-none sm:text-[2.8rem]" style={{ color: "var(--ink)" }}>
                      {primaryForm?.text ?? entry.id}
                    </h1>
                  )}
                </div>

                {primaryForm?.reading ? (
                  <p className="mt-3 text-base font-semibold sm:text-lg" style={{ color: accent }}>
                    {primaryForm.reading}
                  </p>
                ) : null}

                <div className="mt-6 space-y-3">
                  {entry.meanings.map((meaning, index) => (
                    <div key={`${meaning.text}-${index}`} className="rounded-2xl border px-4 py-3" style={{ background: "rgba(255,255,255,0.78)", border: `1px solid rgba(124,58,237,0.1)` }}>
                      <p className="text-sm font-black uppercase tracking-[0.18em]" style={{ color: VOCAB_ACCENT }}>
                        Significado {index + 1}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed sm:text-base" style={{ color: "var(--ink)" }}>
                        {meaning.text}
                      </p>
                      {meaning.nuance ? (
                        <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                          {meaning.nuance}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => userState.toggleStar(entry.id)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border text-lg font-bold"
                  style={{
                    color: state.starred ? "#F59E0B" : VOCAB_ACCENT,
                    background: state.starred ? "rgba(254,243,199,0.76)" : `${VOCAB_ACCENT_SOFT}0.08)`,
                    border: `1px solid rgba(124,58,237,0.14)`,
                  }}
                >
                  ★
                </button>
                <button
                  type="button"
                  onClick={() => userState.toggleArchive(entry.id)}
                  className="inline-flex h-11 items-center justify-center rounded-2xl border px-4 text-sm font-bold"
                  style={{
                    color: VOCAB_ACCENT_DEEP,
                    background: `${VOCAB_ACCENT_SOFT}0.08)`,
                    border: `1px solid rgba(124,58,237,0.14)`,
                  }}
                >
                  {state.archived ? "Desarchivar" : "Archivar"}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <section className="rounded-[30px] border p-5" style={glassCard()}>
              <SectionEyebrow>Metadatos</SectionEyebrow>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border px-4 py-3" style={{ background: "rgba(255,255,255,0.78)", border: `1px solid rgba(124,58,237,0.1)` }}>
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em]" style={{ color: VOCAB_ACCENT }}>
                    Registro
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {entry.register.map((value) => (
                      <VocabularyPill key={value}>{value}</VocabularyPill>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border px-4 py-3" style={{ background: "rgba(255,255,255,0.78)", border: `1px solid rgba(124,58,237,0.1)` }}>
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em]" style={{ color: VOCAB_ACCENT }}>
                    Importancia
                  </p>
                  <p className="mt-2 text-base font-semibold" style={{ color: "var(--ink)" }}>
                    {entry.importance}
                  </p>
                </div>
                <div className="rounded-2xl border px-4 py-3 sm:col-span-2" style={{ background: "rgba(255,255,255,0.78)", border: `1px solid rgba(124,58,237,0.1)` }}>
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em]" style={{ color: VOCAB_ACCENT }}>
                    Tags
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {entry.tags.length ? entry.tags.map((tag) => <VocabularyPill key={tag}>{tag}</VocabularyPill>) : <span className="text-sm" style={{ color: "var(--ink-soft)" }}>Sin tags extra</span>}
                  </div>
                </div>
              </div>
            </section>

            {collections.length ? (
              <section className="rounded-[30px] border p-5" style={glassCard()}>
                <SectionEyebrow>Rutas</SectionEyebrow>
                <h2 className="mt-2 text-xl font-black" style={{ color: "var(--ink)" }}>
                  Colecciones donde aparece
                </h2>
                <div className="mt-4 grid gap-3">
                  {collections.map((collection) => (
                    <Link
                      key={collection.id}
                      href={getCollectionHref(collection.id)}
                      className="rounded-[22px] border px-4 py-4"
                      style={{ background: "rgba(255,255,255,0.78)", border: `1px solid rgba(124,58,237,0.1)` }}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <VocabularyPill accent={collection.accent ?? VOCAB_ACCENT}>{collection.level}</VocabularyPill>
                        <VocabularyPill>{collection.entryIds.length} palabras</VocabularyPill>
                      </div>
                      <p className="mt-3 text-sm font-black" style={{ color: "var(--ink)" }}>
                        {collection.label}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                        {collection.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </section>

        {entry.examples.length ? (
          <section className="mt-8 rounded-[34px] border p-6 sm:p-7" style={glassCard()}>
            <SectionEyebrow>Ejemplos</SectionEyebrow>
            <h2 className="mt-2 text-2xl font-black" style={{ color: "var(--ink)" }}>
              Uso en frase
            </h2>
            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              {entry.examples.map((example, index) => (
                <div key={`${entry.id}-example-${index}`} className="rounded-[26px] border p-4" style={{ background: "rgba(255,255,255,0.82)", border: `1px solid rgba(124,58,237,0.1)` }}>
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em]" style={{ color: VOCAB_ACCENT }}>
                    Ejemplo {index + 1}
                  </p>
                  <div className="mt-3">
                    <ReadingPopoverText
                      segments={example.segments}
                      className="char-display text-xl font-black leading-relaxed sm:text-[1.35rem]"
                      popoverStyle={{ fontSize: "1rem" }}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed sm:text-base" style={{ color: "var(--ink-soft)" }}>
                    {example.translation}
                  </p>
                  {example.note ? (
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: accent }}>
                      {example.note}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {entry.notes?.length ? (
          <section className="mt-8 rounded-[34px] border p-6 sm:p-7" style={glassCard()}>
            <SectionEyebrow>Notas</SectionEyebrow>
            <h2 className="mt-2 text-2xl font-black" style={{ color: "var(--ink)" }}>
              Matices y recordatorios
            </h2>
            <div className="mt-5 grid gap-3">
              {entry.notes.map((note, index) => (
                <div key={`${entry.id}-note-${index}`} className="rounded-2xl border px-4 py-3" style={{ background: "rgba(255,255,255,0.8)", border: `1px solid rgba(124,58,237,0.1)` }}>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {relatedEntries.length ? (
          <section className="mt-8 rounded-[34px] border p-6 sm:p-7" style={glassCard()}>
            <SectionEyebrow>Relacionadas</SectionEyebrow>
            <h2 className="mt-2 text-2xl font-black" style={{ color: "var(--ink)" }}>
              Sigue por este mismo grupo
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {relatedEntries.map((candidate) => (
                <VocabularyEntryCard
                  key={candidate.id}
                  entry={candidate}
                  compact
                  userState={userState.getEntryState(candidate.id)}
                  onToggleArchive={userState.toggleArchive}
                  onToggleStar={userState.toggleStar}
                  onVisit={userState.markViewed}
                />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
