"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import type { Lesson, VocabWord, ScriptType } from "@/types/japanese";
import SakuraAnimation from "../layout/SakuraAnimation";

// ─── Props ────────────────────────────────────────────────────────────────────

interface VocabularyPageProps {
  lessons: Lesson[];
  scriptType: ScriptType;
  backHref: string;
  backLabel: string;
  accent: string;
  accentSoft: string;
  gradient: string;
}

// ─── Word Card ────────────────────────────────────────────────────────────────

function WordCard({
  word,
  accent,
  accentSoft,
  gradient,
  isSelected,
  onClick,
}: {
  word: VocabWord;
  accent: string;
  accentSoft: string;
  gradient: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  // Split example into JP and translation
  const [jpExample, translation] = word.example.split(" - ");

  return (
    <motion.button
      layout
      onClick={onClick}
      className="w-full text-left rounded-2xl border p-4 transition-all duration-200 hover:-translate-y-0.5"
      style={{
        background: isSelected ? `${accentSoft}0.08)` : "rgba(255,255,255,0.8)",
        border: `1px solid ${isSelected ? `${accentSoft}0.3)` : "var(--border)"}`,
        boxShadow: isSelected
          ? `0 8px 24px ${accentSoft}0.12)`
          : "var(--shadow-soft)",
      }}
    >
      <div className="flex items-start justify-between gap-3">
        {/* Word display */}
        <div className="flex items-center gap-3">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
            style={{
              background: gradient,
              boxShadow: `0 6px 16px ${accentSoft}0.25)`,
            }}
          >
            <span
              className="char-display font-bold text-white"
              style={{ fontSize: "1.5rem", textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
            >
              {word.word}
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-medium" style={{ color: accent }}>
                {word.romaji}
              </span>
            </div>
            <p className="mt-0.5 text-base font-semibold" style={{ color: "var(--ink)" }}>
              {word.meaning}
            </p>
          </div>
        </div>

        {/* Arrow */}
        <span
          className="mt-1 shrink-0 text-sm transition-transform duration-200"
          style={{
            color: accent,
            opacity: isSelected ? 1 : 0.3,
            transform: isSelected ? "rotate(90deg)" : "rotate(0deg)",
          }}
        >
          ▾
        </span>
      </div>

      {/* Example sentence — expanded */}
      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div
              className="mt-3 rounded-xl p-3"
              style={{
                background: `${accentSoft}0.06)`,
                border: `1px solid ${accentSoft}0.12)`,
              }}
            >
              <p
                className="char-display text-base leading-relaxed"
                style={{ color: "var(--ink)" }}
              >
                {jpExample}
              </p>
              {translation && (
                <p className="mt-1 text-sm italic" style={{ color: "var(--ink-soft)", opacity: 0.75 }}>
                  {translation}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

// ─── Lesson Overview ──────────────────────────────────────────────────────────

function LessonOverview({
  lessons,
  accent,
  accentSoft,
  onSelect,
}: {
  lessons: Lesson[];
  accent: string;
  accentSoft: string;
  onSelect: (lesson: Lesson) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {lessons.map((lesson, i) => (
        <motion.button
          key={lesson.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.04, duration: 0.35 }}
          onClick={() => onSelect(lesson)}
          className="group flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          style={{
            background: "rgba(255,255,255,0.8)",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow-soft)",
          }}
        >
          {/* Number badge */}
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold"
            style={{
              background: `${accentSoft}0.12)`,
              color: accent,
              border: `1px solid ${accentSoft}0.20)`,
            }}
          >
            {i + 1}
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate" style={{ color: "var(--ink)" }}>
              {lesson.lesson}
            </p>
            <p className="mt-0.5 text-xs" style={{ color: "var(--ink-soft)", opacity: 0.65 }}>
              {lesson.characters.join("　")} · {lesson.vocabulary.length} palabras
            </p>
          </div>

          <span
            className="shrink-0 text-sm opacity-30 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5"
            style={{ color: accent }}
          >
            →
          </span>
        </motion.button>
      ))}
    </div>
  );
}

// ─── Lesson Detail ────────────────────────────────────────────────────────────

function LessonDetail({
  lesson,
  accent,
  accentSoft,
  gradient,
  onBack,
}: {
  lesson: Lesson;
  accent: string;
  accentSoft: string;
  gradient: string;
  onBack: () => void;
}) {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  return (
    <div>
      {/* Lesson header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 rounded-[24px] border p-5"
        style={{
          background: "rgba(255,255,255,0.8)",
          border: `1px solid ${accentSoft}0.12)`,
          boxShadow: `0 16px 36px ${accentSoft}0.08)`,
        }}
      >
        <button
          onClick={onBack}
          className="mb-3 text-sm font-medium transition-opacity hover:opacity-70"
          style={{ color: accent }}
        >
          ← Todas las lecciones
        </button>

        <h2
          className="char-display text-xl font-bold"
          style={{ color: "var(--ink)" }}
        >
          {lesson.lesson}
        </h2>

        {/* Characters pills */}
        <div className="mt-3 flex flex-wrap gap-2">
          {lesson.characters.map((char) => (
            <span
              key={char}
              className="char-display inline-flex h-9 w-9 items-center justify-center rounded-xl text-lg font-bold text-white"
              style={{
                background: gradient,
                boxShadow: `0 4px 10px ${accentSoft}0.22)`,
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Words list */}
      <div className="space-y-3">
        {lesson.vocabulary.map((word, i) => (
          <motion.div
            key={word.word}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <WordCard
              word={word}
              accent={accent}
              accentSoft={accentSoft}
              gradient={gradient}
              isSelected={selectedWord === word.word}
              onClick={() =>
                setSelectedWord(selectedWord === word.word ? null : word.word)
              }
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function VocabularyPage({
  lessons,
  scriptType,
  backHref,
  backLabel,
  accent,
  accentSoft,
  gradient,
}: VocabularyPageProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const leccionParam = searchParams.get("leccion");
  const currentLesson = leccionParam
    ? lessons.find((l) => l.id === leccionParam) ?? null
    : null;

  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(currentLesson);

  const handleSelectLesson = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    router.push(`?leccion=${lesson.id}`, { scroll: false });
  };

  const handleBack = () => {
    setSelectedLesson(null);
    router.push("?", { scroll: false });
  };

  return (
    <main className="relative min-h-screen" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />

      <div className="relative z-10 mx-auto max-w-3xl px-4 pb-24 pt-8 sm:px-6">

        {/* Top nav */}
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
          style={{ color: accent }}
        >
          ← {backLabel}
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 mt-5 rounded-[28px] border px-5 py-5"
          style={{
            background: "rgba(255,255,255,0.72)",
            border: `1px solid ${accentSoft}0.12)`,
            boxShadow: `0 16px 36px ${accentSoft}0.06)`,
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            className="mb-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
            style={{
              color: accent,
              background: `${accentSoft}0.08)`,
              border: `1px solid ${accentSoft}0.15)`,
            }}
          >
            語彙 · Vocabulario
          </div>

          <h1
            className="char-display text-2xl font-bold"
            style={{ color: "var(--ink)" }}
          >
            {selectedLesson ? selectedLesson.lesson : `Vocabulario de ${scriptType === "hiragana" ? "Hiragana" : "Katakana"}`}
          </h1>

          {!selectedLesson && (
            <p className="mt-2 text-sm" style={{ color: "var(--ink-soft)", opacity: 0.75 }}>
              {lessons.length} lecciones · {lessons.reduce((acc, l) => acc + l.vocabulary.length, 0)} palabras en total
            </p>
          )}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {selectedLesson ? (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25 }}
            >
              <LessonDetail
                lesson={selectedLesson}
                accent={accent}
                accentSoft={accentSoft}
                gradient={gradient}
                onBack={handleBack}
              />
            </motion.div>
          ) : (
            <motion.div
              key="overview"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.25 }}
            >
              <LessonOverview
                lessons={lessons}
                accent={accent}
                accentSoft={accentSoft}
                onSelect={handleSelectLesson}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}