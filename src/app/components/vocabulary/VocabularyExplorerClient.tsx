"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import type { VocabularyCatalog, VocabularyEntry, VocabularyFilterState, VocabularyKind, VocabularyTopic } from "@/data/vocabulary";
import {
  VOCABULARY_KIND_LABELS,
  VOCABULARY_KIND_ORDER,
  VOCABULARY_TOPIC_LABELS,
  VOCABULARY_TOPIC_ORDER,
  filterVocabularyEntries,
  resolveCollections,
} from "@/data/vocabulary";
import { useVocabularyUserState } from "@/lib/vocabulary/useVocabularyUserState";
import { groupEntries, sortEntries, type VocabularyGroupMode, type VocabularySortMode } from "@/lib/vocabulary/vocabularyView";
import { VocabularyEntryCard } from "./VocabularyEntryCard";
import { SectionEyebrow, VocabularyPill } from "./VocabularyPills";
import { VocabularySearchInput } from "./VocabularySearchInput";
import { VOCAB_ACCENT, VOCAB_ACCENT_DEEP, VOCAB_ACCENT_SOFT, glassCard } from "./theme";

interface VocabularyExplorerClientProps {
  catalog: VocabularyCatalog;
}

function parseSingle(searchParams: URLSearchParams, key: string) {
  return searchParams.get(key) ?? "";
}

function parseMany<T extends string>(searchParams: URLSearchParams, key: string) {
  return searchParams.getAll(key) as T[];
}

function getInitialStateFromSearchParams(searchParams: URLSearchParams) {
  const query = parseSingle(searchParams, "q");
  const collection = parseSingle(searchParams, "collection");
  const level = parseMany(searchParams, "level");
  const kind = parseMany(searchParams, "kind");
  const topic = parseMany(searchParams, "topic");

  return {
    query,
    collection,
    levels: level,
    kinds: kind,
    topics: topic,
  };
}

function toggleValue<T extends string>(current: T[], value: T) {
  return current.includes(value) ? current.filter((item) => item !== value) : [...current, value];
}

function buildQueryString(params: {
  query: string;
  collectionId: string;
  levels: string[];
  kinds: string[];
  topics: string[];
}) {
  const next = new URLSearchParams();

  if (params.query.trim()) next.set("q", params.query.trim());
  if (params.collectionId) next.set("collection", params.collectionId);
  params.levels.forEach((value) => next.append("level", value));
  params.kinds.forEach((value) => next.append("kind", value));
  params.topics.forEach((value) => next.append("topic", value));

  return next.toString();
}

export function VocabularyExplorerClient({ catalog }: VocabularyExplorerClientProps) {
  const router = useRouter();
  const rawSearchParams = useSearchParams();
  const searchParams = new URLSearchParams(rawSearchParams.toString());
  const initial = useMemo(() => getInitialStateFromSearchParams(searchParams), [rawSearchParams]);
  const userState = useVocabularyUserState();

  const [query, setQuery] = useState(initial.query);
  const [selectedCollectionId, setSelectedCollectionId] = useState(initial.collection);
  const [selectedLevels, setSelectedLevels] = useState(initial.levels as VocabularyEntry["level"][]);
  const [selectedKinds, setSelectedKinds] = useState(initial.kinds as VocabularyKind[]);
  const [selectedTopics, setSelectedTopics] = useState(initial.topics as VocabularyTopic[]);
  const [onlyCore, setOnlyCore] = useState(false);
  const [onlyWithExamples, setOnlyWithExamples] = useState(false);
  const [onlyStarred, setOnlyStarred] = useState(false);
  const [showArchived, setShowArchived] = useState(false);
  const [groupMode, setGroupMode] = useState<VocabularyGroupMode>("topic");
  const [sortMode, setSortMode] = useState<VocabularySortMode>("recommended");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const resolvedCollections = useMemo(
    () => resolveCollections(catalog.collections, catalog.entries),
    [catalog.collections, catalog.entries],
  );

  const selectedCollection = resolvedCollections.find((collection) => collection.id === selectedCollectionId);

  const filterState: VocabularyFilterState = {
    query,
    levels: selectedLevels,
    kinds: selectedKinds,
    topics: selectedTopics,
    onlyCore,
    onlyWithExamples,
  };

  const filteredEntries = useMemo(() => {
    let next = filterVocabularyEntries(catalog.entries, filterState);

    if (selectedCollection) {
      const allowed = new Set(selectedCollection.entryIds);
      next = next.filter((entry) => allowed.has(entry.id));
    }

    if (onlyStarred) {
      const starred = new Set(userState.starredIds);
      next = next.filter((entry) => starred.has(entry.id));
    }

    if (!showArchived) {
      const archived = new Set(userState.archivedIds);
      next = next.filter((entry) => !archived.has(entry.id));
    }

    return sortEntries(next, sortMode);
  }, [catalog.entries, filterState, onlyStarred, selectedCollection, showArchived, sortMode, userState.archivedIds, userState.starredIds]);

  const groups = useMemo(() => groupEntries(filteredEntries, groupMode), [filteredEntries, groupMode]);

  const activeFilterCount =
    selectedLevels.length +
    selectedKinds.length +
    selectedTopics.length +
    Number(Boolean(selectedCollectionId)) +
    Number(onlyCore) +
    Number(onlyWithExamples) +
    Number(onlyStarred) +
    Number(Boolean(query.trim())) +
    Number(showArchived);

  function syncUrl(nextQuery = query) {
    const value = buildQueryString({
      query: nextQuery,
      collectionId: selectedCollectionId,
      levels: selectedLevels,
      kinds: selectedKinds,
      topics: selectedTopics,
    });

    router.replace(value ? `/vocabulario/explorar?${value}` : "/vocabulario/explorar", { scroll: false });
  }

  function clearFilters() {
    setSelectedCollectionId("");
    setSelectedLevels([]);
    setSelectedKinds([]);
    setSelectedTopics([]);
    setOnlyCore(false);
    setOnlyWithExamples(false);
    setOnlyStarred(false);
    setShowArchived(false);
    setQuery("");
    router.replace("/vocabulario/explorar", { scroll: false });
  }

  const filterPanel = (
    <div className="space-y-5">
      <div className="rounded-[26px] border p-4" style={glassCard()}>
        <p className="text-sm font-black" style={{ color: "var(--ink)" }}>
          Vista
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {([
            ["topic", "Tema"],
            ["kind", "Tipo"],
            ["level", "Nivel"],
            ["none", "Lista"],
          ] as const).map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setGroupMode(value)}
              className="rounded-2xl px-3 py-2 text-sm font-bold"
              style={{
                color: groupMode === value ? "white" : VOCAB_ACCENT_DEEP,
                background: groupMode === value ? VOCAB_ACCENT : `${VOCAB_ACCENT_SOFT}0.07)`,
              }}
            >
              {label}
            </button>
          ))}
        </div>

        <p className="mt-4 text-sm font-black" style={{ color: "var(--ink)" }}>
          Orden
        </p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {([
            ["recommended", "Base"],
            ["alpha", "A-Z"],
            ["examples", "Ejemplos"],
          ] as const).map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setSortMode(value)}
              className="rounded-2xl px-3 py-2 text-sm font-bold"
              style={{
                color: sortMode === value ? "white" : VOCAB_ACCENT_DEEP,
                background: sortMode === value ? VOCAB_ACCENT : `${VOCAB_ACCENT_SOFT}0.07)`,
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-[26px] border p-4" style={glassCard()}>
        <p className="text-sm font-black" style={{ color: "var(--ink)" }}>
          Colecciones
        </p>
        <div className="mt-3 flex max-h-64 flex-wrap gap-2 overflow-auto pr-1">
          {resolvedCollections.map((collection) => (
            <button
              key={collection.id}
              type="button"
              onClick={() => setSelectedCollectionId((current) => (current === collection.id ? "" : collection.id))}
              className="rounded-full px-3 py-2 text-xs font-bold"
              style={{
                color: selectedCollectionId === collection.id ? "white" : collection.accent ?? VOCAB_ACCENT,
                background:
                  selectedCollectionId === collection.id
                    ? collection.accent ?? VOCAB_ACCENT
                    : `${VOCAB_ACCENT_SOFT}0.08)`,
              }}
            >
              {collection.label}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-[26px] border p-4" style={glassCard()}>
        <p className="text-sm font-black" style={{ color: "var(--ink)" }}>
          Nivel
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {(["N5", "N4", "N3", "N2", "N1"] as const).map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => setSelectedLevels((current) => toggleValue(current, level))}
              className="rounded-full px-3 py-2 text-xs font-bold"
              style={{
                color: selectedLevels.includes(level) ? "white" : VOCAB_ACCENT_DEEP,
                background: selectedLevels.includes(level) ? VOCAB_ACCENT : `${VOCAB_ACCENT_SOFT}0.08)`,
              }}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-[26px] border p-4" style={glassCard()}>
        <p className="text-sm font-black" style={{ color: "var(--ink)" }}>
          Tipo
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {VOCABULARY_KIND_ORDER.map((kind) => (
            <button
              key={kind}
              type="button"
              onClick={() => setSelectedKinds((current) => toggleValue(current, kind))}
              className="rounded-full px-3 py-2 text-xs font-bold"
              style={{
                color: selectedKinds.includes(kind) ? "white" : VOCAB_ACCENT_DEEP,
                background: selectedKinds.includes(kind) ? VOCAB_ACCENT : `${VOCAB_ACCENT_SOFT}0.08)`,
              }}
            >
              {VOCABULARY_KIND_LABELS[kind]}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-[26px] border p-4" style={glassCard()}>
        <p className="text-sm font-black" style={{ color: "var(--ink)" }}>
          Tema
        </p>
        <div className="mt-3 flex max-h-72 flex-wrap gap-2 overflow-auto pr-1">
          {VOCABULARY_TOPIC_ORDER.map((topic) => (
            <button
              key={topic}
              type="button"
              onClick={() => setSelectedTopics((current) => toggleValue(current, topic))}
              className="rounded-full px-3 py-2 text-xs font-bold"
              style={{
                color: selectedTopics.includes(topic) ? "white" : VOCAB_ACCENT_DEEP,
                background: selectedTopics.includes(topic) ? VOCAB_ACCENT : `${VOCAB_ACCENT_SOFT}0.08)`,
              }}
            >
              {VOCABULARY_TOPIC_LABELS[topic]}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-[26px] border p-4" style={glassCard()}>
        <p className="text-sm font-black" style={{ color: "var(--ink)" }}>
          Biblioteca
        </p>
        <div className="mt-3 space-y-2">
          {[
            { value: onlyCore, label: "Solo core", onClick: () => setOnlyCore((current) => !current) },
            {
              value: onlyWithExamples,
              label: "Solo con ejemplos",
              onClick: () => setOnlyWithExamples((current) => !current),
            },
            { value: onlyStarred, label: "Solo favoritas", onClick: () => setOnlyStarred((current) => !current) },
            {
              value: showArchived,
              label: "Mostrar archivadas",
              onClick: () => setShowArchived((current) => !current),
            },
          ].map(({ value, label, onClick }) => (
            <button
              key={label}
              type="button"
              onClick={onClick}
              className="flex w-full items-center justify-between rounded-2xl border px-3 py-3 text-sm font-bold"
              style={{
                color: value ? VOCAB_ACCENT_DEEP : "var(--ink)",
                background: value ? `${VOCAB_ACCENT_SOFT}0.08)` : "rgba(255,255,255,0.76)",
                border: `1px solid rgba(124,58,237,0.12)`,
              }}
            >
              <span>{label}</span>
              <span>{value ? "✓" : "○"}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen" style={{ background: "var(--paper)" }}>
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <Link
          href="/vocabulario"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
          style={{ color: VOCAB_ACCENT }}
        >
          ← Vocabulario
        </Link>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.38 }}
          className="mt-5 rounded-[34px] border p-5 sm:p-6"
          style={glassCard()}
        >
          <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr] xl:items-end">
            <div>
              <SectionEyebrow>Explorador</SectionEyebrow>
              <h1 className="mt-2 text-3xl font-black leading-tight sm:text-4xl" style={{ color: "var(--ink)" }}>
                Biblioteca de vocabulario
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed sm:text-base" style={{ color: "var(--ink-soft)" }}>
                Busca por kanji, lectura o español, cruza tipo y tema, revisa colecciones y limpia el ruido archivando lo que ya no necesitas tener siempre visible.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border px-4 py-3" style={{ background: "rgba(255,255,255,0.78)", border: `1px solid rgba(124,58,237,0.12)` }}>
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em]" style={{ color: VOCAB_ACCENT }}>Resultados</p>
                <p className="mt-2 text-2xl font-black" style={{ color: "var(--ink)" }}>{filteredEntries.length}</p>
              </div>
              <div className="rounded-2xl border px-4 py-3" style={{ background: "rgba(255,255,255,0.78)", border: `1px solid rgba(124,58,237,0.12)` }}>
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em]" style={{ color: VOCAB_ACCENT }}>Grupos</p>
                <p className="mt-2 text-2xl font-black" style={{ color: "var(--ink)" }}>{groups.length}</p>
              </div>
              <div className="rounded-2xl border px-4 py-3" style={{ background: "rgba(255,255,255,0.78)", border: `1px solid rgba(124,58,237,0.12)` }}>
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em]" style={{ color: VOCAB_ACCENT }}>Filtros</p>
                <p className="mt-2 text-2xl font-black" style={{ color: "var(--ink)" }}>{activeFilterCount}</p>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_auto_auto] lg:items-center">
            <VocabularySearchInput
              value={query}
              onChange={setQuery}
              onSubmit={() => syncUrl(query)}
            />
            <button
              type="button"
              onClick={() => setMobileFiltersOpen((current) => !current)}
              className="rounded-2xl px-4 py-3 text-sm font-bold lg:hidden"
              style={{ color: VOCAB_ACCENT_DEEP, background: `${VOCAB_ACCENT_SOFT}0.08)` }}
            >
              {mobileFiltersOpen ? "Cerrar filtros" : "Abrir filtros"}
            </button>
            <button
              type="button"
              onClick={clearFilters}
              className="rounded-2xl px-4 py-3 text-sm font-bold"
              style={{ color: VOCAB_ACCENT_DEEP, background: `${VOCAB_ACCENT_SOFT}0.08)` }}
            >
              Limpiar
            </button>
          </div>

          {(selectedCollection || selectedLevels.length || selectedKinds.length || selectedTopics.length || onlyCore || onlyWithExamples || onlyStarred || showArchived || query.trim()) ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {selectedCollection ? <VocabularyPill accent={selectedCollection.accent ?? VOCAB_ACCENT}>{selectedCollection.label}</VocabularyPill> : null}
              {selectedLevels.map((level) => <VocabularyPill key={level}>{level}</VocabularyPill>)}
              {selectedKinds.map((kind) => <VocabularyPill key={kind}>{VOCABULARY_KIND_LABELS[kind]}</VocabularyPill>)}
              {selectedTopics.map((topic) => <VocabularyPill key={topic}>{VOCABULARY_TOPIC_LABELS[topic]}</VocabularyPill>)}
              {onlyCore ? <VocabularyPill>Core</VocabularyPill> : null}
              {onlyWithExamples ? <VocabularyPill>Con ejemplos</VocabularyPill> : null}
              {onlyStarred ? <VocabularyPill>Favoritas</VocabularyPill> : null}
              {showArchived ? <VocabularyPill>Archivadas visibles</VocabularyPill> : null}
              {query.trim() ? <VocabularyPill>“{query.trim()}”</VocabularyPill> : null}
            </div>
          ) : null}
        </motion.section>

        <div className="mt-8 grid gap-6 xl:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="hidden xl:block">
            <div className="sticky top-24">{filterPanel}</div>
          </aside>

          <div className="space-y-5">
            {mobileFiltersOpen ? <div className="xl:hidden">{filterPanel}</div> : null}

            {groups.map((group) => (
              <section key={group.key} className="rounded-[30px] border p-5 sm:p-6" style={glassCard()}>
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em]" style={{ color: VOCAB_ACCENT }}>
                      Grupo
                    </p>
                    <h2 className="mt-2 text-2xl font-black" style={{ color: "var(--ink)" }}>
                      {group.label}
                    </h2>
                  </div>
                  <VocabularyPill>{group.entries.length} entradas</VocabularyPill>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
                  {group.entries.map((entry) => (
                    <VocabularyEntryCard
                      key={entry.id}
                      entry={entry}
                      userState={userState.getEntryState(entry.id)}
                      onToggleArchive={userState.toggleArchive}
                      onToggleStar={userState.toggleStar}
                      onVisit={userState.markViewed}
                    />
                  ))}
                </div>
              </section>
            ))}

            {!filteredEntries.length ? (
              <section className="rounded-[30px] border p-8 text-center" style={glassCard()}>
                <h2 className="text-2xl font-black" style={{ color: "var(--ink)" }}>
                  No hubo coincidencias
                </h2>
                <p className="mt-3 text-sm leading-relaxed sm:text-base" style={{ color: "var(--ink-soft)" }}>
                  Prueba limpiar filtros, cambiar de colección o buscar con una lectura más simple.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-5 rounded-2xl px-4 py-3 text-sm font-bold"
                  style={{ color: "white", background: VOCAB_ACCENT }}
                >
                  Resetear explorador
                </button>
              </section>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}
