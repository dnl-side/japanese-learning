"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

export interface VocabularyUserEntryState {
  starred: boolean;
  archived: boolean;
  lastViewedAt?: string;
}

export type VocabularyUserStateMap = Record<string, VocabularyUserEntryState>;

const STORAGE_KEY = "japanese-learning:vocabulary-user-state:v1";

function readStorage(): VocabularyUserStateMap {
  if (typeof window === "undefined") return {};

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};

    const parsed = JSON.parse(raw) as VocabularyUserStateMap;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeStorage(value: VocabularyUserStateMap) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
}

export function useVocabularyUserState() {
  const [state, setState] = useState<VocabularyUserStateMap>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setState(readStorage());
    setReady(true);
  }, []);

  const updateEntry = useCallback(
    (entryId: string, updater: (current: VocabularyUserEntryState) => VocabularyUserEntryState) => {
      setState((current) => {
        const nextEntry = updater(current[entryId] ?? { starred: false, archived: false });
        const next = {
          ...current,
          [entryId]: nextEntry,
        };
        writeStorage(next);
        return next;
      });
    },
    [],
  );

  const toggleStar = useCallback(
    (entryId: string) => {
      updateEntry(entryId, (current) => ({
        ...current,
        starred: !current.starred,
      }));
    },
    [updateEntry],
  );

  const toggleArchive = useCallback(
    (entryId: string) => {
      updateEntry(entryId, (current) => ({
        ...current,
        archived: !current.archived,
      }));
    },
    [updateEntry],
  );

  const markViewed = useCallback(
    (entryId: string) => {
      updateEntry(entryId, (current) => ({
        ...current,
        lastViewedAt: new Date().toISOString(),
      }));
    },
    [updateEntry],
  );

  const starredIds = useMemo(
    () => Object.entries(state).filter(([, value]) => value.starred).map(([key]) => key),
    [state],
  );

  const archivedIds = useMemo(
    () => Object.entries(state).filter(([, value]) => value.archived).map(([key]) => key),
    [state],
  );

  const recentIds = useMemo(
    () =>
      Object.entries(state)
        .filter(([, value]) => Boolean(value.lastViewedAt))
        .sort((a, b) => (b[1].lastViewedAt ?? "").localeCompare(a[1].lastViewedAt ?? ""))
        .map(([key]) => key),
    [state],
  );

  const getEntryState = useCallback(
    (entryId: string) => state[entryId] ?? { starred: false, archived: false },
    [state],
  );

  return {
    ready,
    state,
    starredIds,
    archivedIds,
    recentIds,
    getEntryState,
    toggleStar,
    toggleArchive,
    markViewed,
  };
}
