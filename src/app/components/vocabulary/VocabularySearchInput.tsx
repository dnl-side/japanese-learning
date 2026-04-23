"use client";

import { FormEvent } from "react";
import { VOCAB_ACCENT, VOCAB_ACCENT_SOFT } from "./theme";

interface VocabularySearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  placeholder?: string;
  className?: string;
}

export function VocabularySearchInput({
  value,
  onChange,
  onSubmit,
  placeholder = "Busca por kanji, kana, lectura o significado…",
  className,
}: VocabularySearchInputProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit?.();
  }

  return (
    <form onSubmit={handleSubmit} className={["flex w-full items-stretch gap-3", className].filter(Boolean).join(" ")}>
      <label className="sr-only" htmlFor="vocabulary-search-input">
        Buscar vocabulario
      </label>
      <input
        id="vocabulary-search-input"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="min-w-0 flex-1 rounded-2xl border px-4 py-3 text-sm outline-none transition-all sm:text-base"
        style={{
          color: "var(--ink)",
          background: "rgba(255,255,255,0.92)",
          border: `1px solid rgba(124,58,237,0.18)`,
          boxShadow: `0 12px 28px ${VOCAB_ACCENT_SOFT}0.08)`,
        }}
      />
      <button
        type="submit"
        className="shrink-0 rounded-2xl px-4 py-3 text-sm font-bold transition-transform hover:-translate-y-[1px] sm:px-5"
        style={{
          color: "white",
          background: VOCAB_ACCENT,
          boxShadow: "0 14px 32px rgba(124,58,237,0.24)",
        }}
      >
        Buscar
      </button>
    </form>
  );
}
