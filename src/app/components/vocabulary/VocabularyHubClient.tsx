"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { VocabularyCatalog } from "@/data/vocabulary";
import { VOCABULARY_KIND_LABELS, VOCABULARY_TOPIC_LABELS } from "@/data/vocabulary";
import { useVocabularyUserState } from "@/lib/vocabulary/useVocabularyUserState";
import {
  buildKindCounts,
  buildLevelCounts,
  buildResolvedCollections,
  buildTopicCounts,
  getCollectionHref,
  getEntryHref,
  getKindHref,
  getPrimaryMeaning,
  getTopicHref,
} from "@/lib/vocabulary/vocabularyView";
import { VocabularyEntryCard } from "./VocabularyEntryCard";
import { MetricPill, SectionEyebrow, VocabularyPill } from "./VocabularyPills";
import { VocabularySearchInput } from "./VocabularySearchInput";
import { VOCAB_ACCENT, VOCAB_ACCENT_DEEP, VOCAB_ACCENT_SOFT, VOCAB_GRADIENT, glassCard } from "./theme";

interface VocabularyHubClientProps {
  catalog: VocabularyCatalog;
}

export function VocabularyHubClient({ catalog }: VocabularyHubClientProps) {
  const [query, setQuery] = useState("");
  const userState = useVocabularyUserState();

  const topicCounts = useMemo(() => buildTopicCounts(catalog.entries).slice(0, 12), [catalog.entries]);
  const kindCounts = useMemo(() => buildKindCounts(catalog.entries), [catalog.entries]);
  const levelCounts = useMemo(() => buildLevelCounts(catalog.entries), [catalog.entries]);
  const resolvedCollections = useMemo(
    () => buildResolvedCollections(catalog.collections, catalog.entries),
    [catalog.collections, catalog.entries],
  );

  const featuredCollections = resolvedCollections.slice(0, 6);
  const lessonCollections = resolvedCollections.filter((collection) => collection.id.startsWith("lesson:"));
  const favoriteEntries = catalog.entries.filter((entry) => userState.starredIds.includes(entry.id)).slice(0, 4);
  const recentEntries = catalog.entries.filter((entry) => userState.recentIds.includes(entry.id)).slice(0, 4);

  const heroSummary = useMemo(() => {
    const withExamples = catalog.entries.filter((entry) => entry.examples.length > 0).length;
    return {
      total: catalog.entries.length,
      collections: catalog.collections.length,
      withExamples,
      topics: topicCounts.length,
    };
  }, [catalog.collections.length, catalog.entries, topicCounts.length]);

  return (
    <main className="min-h-screen" style={{ background: "var(--paper)" }}>
      <div className="mx-auto max-w-6xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
          style={{ color: VOCAB_ACCENT }}
        >
          ← Inicio
        </Link>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42 }}
          className="mt-5 overflow-hidden rounded-[34px] border p-5 sm:p-7 lg:p-8"
          style={{
            ...glassCard("rgba(255,255,255,0.88)"),
            border: `1px solid rgba(124,58,237,0.14)`,
          }}
        >
          <div
            className="rounded-[28px] px-5 py-6 sm:px-7 sm:py-7"
            style={{
              background: VOCAB_GRADIENT,
              boxShadow: `0 28px 56px ${VOCAB_ACCENT_SOFT}0.18)`,
            }}
          >
            <SectionEyebrow>Vocabulary hub</SectionEyebrow>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
              <div>
                <h1 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-[3rem]">
                  Vocabulario
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/88 sm:text-base">
                  Un compendio central para navegar por temas, tipos, niveles, colecciones y lecciones relacionadas.
                  Busca, filtra, guarda favoritas y archiva lo que ya sientas dominado.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <MetricPill label="Entradas" value={heroSummary.total} />
                <MetricPill label="Colecciones" value={heroSummary.collections} />
                <MetricPill label="Con ejemplo" value={heroSummary.withExamples} />
                <MetricPill label="Temas" value={heroSummary.topics} />
              </div>
            </div>

            <div className="mt-6 rounded-[24px] border p-3 sm:p-4" style={{ background: "rgba(255,255,255,0.16)", border: "1px solid rgba(255,255,255,0.14)" }}>
              <VocabularySearchInput
                value={query}
                onChange={setQuery}
                onSubmit={() => {
                  const target = query.trim()
                    ? `/vocabulario/explorar?q=${encodeURIComponent(query.trim())}`
                    : "/vocabulario/explorar";
                  window.location.href = target;
                }}
                placeholder="Busca por 日本, せんせい, estudiante, colores, profesiones…"
              />
              <div className="mt-3 flex flex-wrap gap-2">
                <VocabularyPill accent="#fff" style={{ color: "white", background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.18)" }}>
                  Kanji
                </VocabularyPill>
                <VocabularyPill accent="#fff" style={{ color: "white", background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.18)" }}>
                  Kana
                </VocabularyPill>
                <VocabularyPill accent="#fff" style={{ color: "white", background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.18)" }}>
                  Español
                </VocabularyPill>
                <VocabularyPill accent="#fff" style={{ color: "white", background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.18)" }}>
                  Tags
                </VocabularyPill>
              </div>
            </div>
          </div>
        </motion.section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {levelCounts.map((item, index) => (
            <motion.article
              key={item.level}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
              className="rounded-[28px] border p-5"
              style={glassCard()}
            >
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em]" style={{ color: VOCAB_ACCENT }}>
                Nivel
              </p>
              <div className="mt-3 flex items-end justify-between gap-3">
                <div>
                  <p className="text-2xl font-black" style={{ color: "var(--ink)" }}>
                    {item.level}
                  </p>
                  <p className="mt-2 text-sm" style={{ color: "var(--ink-soft)" }}>
                    {item.count} entradas activas
                  </p>
                </div>
                <Link
                  href={`/vocabulario/explorar?level=${encodeURIComponent(item.level)}`}
                  className="rounded-2xl px-3 py-2 text-sm font-bold"
                  style={{ color: VOCAB_ACCENT_DEEP, background: `${VOCAB_ACCENT_SOFT}0.08)` }}
                >
                  Abrir
                </Link>
              </div>
            </motion.article>
          ))}
        </section>

        <section className="mt-10">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <SectionEyebrow>Colecciones esenciales</SectionEyebrow>
              <h2 className="mt-2 text-2xl font-black sm:text-[2rem]" style={{ color: "var(--ink)" }}>
                Caminos de estudio listos
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed sm:text-base" style={{ color: "var(--ink-soft)" }}>
                Agrupaciones útiles para entrar rápido a presentación, países, familia, cuerpo, colores o transporte.
              </p>
            </div>
            <Link href="/vocabulario/explorar" className="text-sm font-bold" style={{ color: VOCAB_ACCENT }}>
              Explorar todo →
            </Link>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {featuredCollections.map((collection) => (
              <Link
                key={collection.id}
                href={getCollectionHref(collection.id)}
                className="rounded-[28px] border p-5 transition-transform hover:-translate-y-[2px]"
                style={{
                  ...glassCard(),
                  border: `1px solid rgba(124,58,237,0.12)`,
                }}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <VocabularyPill accent={collection.accent ?? VOCAB_ACCENT}>{collection.level}</VocabularyPill>
                  <VocabularyPill accent={VOCAB_ACCENT_DEEP}>{collection.total} palabras</VocabularyPill>
                </div>
                <h3 className="mt-4 text-xl font-black" style={{ color: "var(--ink)" }}>
                  {collection.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                  {collection.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {collection.topics.slice(0, 4).map((topic) => (
                    <VocabularyPill key={topic}>{VOCABULARY_TOPIC_LABELS[topic]}</VocabularyPill>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[30px] border p-5 sm:p-6" style={glassCard()}>
            <SectionEyebrow>Explorar por tema</SectionEyebrow>
            <h2 className="mt-2 text-2xl font-black sm:text-[2rem]" style={{ color: "var(--ink)" }}>
              Entrada rápida por áreas reales
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {topicCounts.map((topic) => (
                <Link
                  key={topic.topic}
                  href={getTopicHref(topic.topic)}
                  className="rounded-[24px] border px-4 py-4 transition-transform hover:-translate-y-[2px]"
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    border: `1px solid rgba(124,58,237,0.12)`,
                  }}
                >
                  <p className="text-sm font-black" style={{ color: "var(--ink)" }}>
                    {topic.label}
                  </p>
                  <p className="mt-2 text-sm" style={{ color: VOCAB_ACCENT }}>
                    {topic.count} entradas
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border p-5 sm:p-6" style={glassCard()}>
            <SectionEyebrow>Explorar por tipo</SectionEyebrow>
            <h2 className="mt-2 text-2xl font-black sm:text-[2rem]" style={{ color: "var(--ink)" }}>
              Verbo, sustantivo, adjetivo y más
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {kindCounts.map((kind) => (
                <Link
                  key={kind.kind}
                  href={getKindHref(kind.kind)}
                  className="rounded-[24px] border px-4 py-4 transition-transform hover:-translate-y-[2px]"
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    border: `1px solid rgba(124,58,237,0.12)`,
                  }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-black" style={{ color: "var(--ink)" }}>
                      {VOCABULARY_KIND_LABELS[kind.kind]}
                    </p>
                    <VocabularyPill>{kind.count}</VocabularyPill>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {lessonCollections.length ? (
          <section className="mt-10 rounded-[30px] border p-5 sm:p-6" style={glassCard()}>
            <SectionEyebrow>Desde lecciones</SectionEyebrow>
            <h2 className="mt-2 text-2xl font-black sm:text-[2rem]" style={{ color: "var(--ink)" }}>
              Puente directo con gramática
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed sm:text-base" style={{ color: "var(--ink-soft)" }}>
              Colecciones armadas a partir de tags pedagógicos para que el vocabulario también se entienda por contexto de uso.
            </p>
            <div className="mt-5 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
              {lessonCollections.slice(0, 6).map((collection) => (
                <Link
                  key={collection.id}
                  href={getCollectionHref(collection.id)}
                  className="rounded-[24px] border px-4 py-4"
                  style={{
                    background: "rgba(255,255,255,0.78)",
                    border: `1px solid rgba(124,58,237,0.12)`,
                  }}
                >
                  <p className="text-sm font-black" style={{ color: "var(--ink)" }}>
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

        {(favoriteEntries.length || recentEntries.length) ? (
          <section className="mt-10 grid gap-6 xl:grid-cols-2">
            {favoriteEntries.length ? (
              <div className="rounded-[30px] border p-5 sm:p-6" style={glassCard()}>
                <SectionEyebrow>Tu biblioteca</SectionEyebrow>
                <h2 className="mt-2 text-2xl font-black" style={{ color: "var(--ink)" }}>
                  Favoritas
                </h2>
                <div className="mt-5 grid gap-4">
                  {favoriteEntries.map((entry) => (
                    <VocabularyEntryCard
                      key={entry.id}
                      entry={entry}
                      compact
                      userState={userState.getEntryState(entry.id)}
                      onToggleArchive={userState.toggleArchive}
                      onToggleStar={userState.toggleStar}
                      onVisit={userState.markViewed}
                    />
                  ))}
                </div>
              </div>
            ) : null}

            {recentEntries.length ? (
              <div className="rounded-[30px] border p-5 sm:p-6" style={glassCard()}>
                <SectionEyebrow>Tu recorrido</SectionEyebrow>
                <h2 className="mt-2 text-2xl font-black" style={{ color: "var(--ink)" }}>
                  Vistas recientes
                </h2>
                <div className="mt-5 grid gap-4">
                  {recentEntries.map((entry) => (
                    <Link
                      key={entry.id}
                      href={getEntryHref(entry.id)}
                      className="rounded-[24px] border px-4 py-4"
                      style={{
                        background: "rgba(255,255,255,0.8)",
                        border: `1px solid rgba(124,58,237,0.1)`,
                      }}
                    >
                      <p className="text-lg font-black" style={{ color: "var(--ink)" }}>
                        {entry.forms[0]?.text}
                      </p>
                      <p className="mt-2 text-sm" style={{ color: "var(--ink-soft)" }}>
                        {getPrimaryMeaning(entry)}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </section>
        ) : null}
      </div>
    </main>
  );
}
