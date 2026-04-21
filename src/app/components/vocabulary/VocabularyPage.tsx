// src\app\components\vocabulary/VocabularyPage.tsx

"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import type { Lesson, ScriptType } from "@/types/japanese";
import SakuraAnimation from "../layout/SakuraAnimation";
import { RubyText } from "@/app/components/ui/Ruby";
import type { RubySegment } from "@/app/components/ui/Ruby";

interface VocabularyPageProps {
  lessons: Lesson[];
  scriptType: ScriptType;
  backHref: string;
  backLabel: string;
  accent: string;
  accentSoft: string;
  gradient: string;
}

export interface VocabExample {
  segments: RubySegment[];
  translation?: string;
}

export interface VocabWord {
  word: string;
  romaji: string;
  meaning: string;
  example?: string;
  examples?: VocabExample[];
}

function getScriptLabel(scriptType: ScriptType) {
  if (scriptType === "hiragana") return "Hiragana";
  if (scriptType === "katakana") return "Katakana";
  return "Kanji";
}

function getSafeExamples(word: VocabWord): VocabExample[] {
  const legacyParts = word.example ? word.example.split(" - ") : [];
  const fallbackExamples =
    legacyParts.length > 0
      ? [
          {
            segments: [{ text: legacyParts[0] }],
            translation: legacyParts[1],
          },
        ]
      : [];

  return word.examples && word.examples.length > 0
    ? word.examples
    : fallbackExamples;
}

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
  const examples = getSafeExamples(word);

  return (
    <motion.button
      layout
      onClick={onClick}
      className="w-full rounded-[24px] border p-4 text-left transition-all duration-200 hover:-translate-y-0.5 sm:p-5"
      style={{
        background: isSelected ? `${accentSoft}0.08)` : "rgba(255,255,255,0.84)",
        border: `1px solid ${isSelected ? `${accentSoft}0.26)` : "var(--border)"}`,
        boxShadow: isSelected
          ? `0 14px 30px ${accentSoft}0.12)`
          : "0 12px 26px rgba(0,0,0,0.05)",
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] sm:h-14 sm:w-14"
            style={{
              background: gradient,
              boxShadow: `0 8px 18px ${accentSoft}0.22)`,
            }}
          >
            <span
              className="char-display font-bold text-white"
              style={{
                fontSize: "clamp(1.25rem, 2.4vw, 1.6rem)",
                textShadow: "0 2px 4px rgba(0,0,0,0.18)",
              }}
            >
              {word.word}
            </span>
          </div>

          <div className="min-w-0">
            <p
              className="font-mono text-xs font-semibold tracking-[0.08em] sm:text-sm"
              style={{ color: accent }}
            >
              {word.romaji}
            </p>
            <p
              className="mt-1 text-lg font-semibold leading-tight"
              style={{ color: "var(--ink)" }}
            >
              {word.meaning}
            </p>
            <p
              className="mt-1 text-xs"
              style={{ color: "var(--ink-soft)", opacity: 0.62 }}
            >
              {examples.length} {examples.length === 1 ? "ejemplo" : "ejemplos"}
            </p>
          </div>
        </div>

        <span
          className="mt-1 shrink-0 text-sm transition-transform duration-200"
          style={{
            color: accent,
            opacity: isSelected ? 1 : 0.32,
            transform: isSelected ? "rotate(90deg)" : "rotate(0deg)",
          }}
        >
          ▾
        </span>
      </div>

      <AnimatePresence initial={false}>
        {isSelected && examples.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24 }}
            className="overflow-hidden"
          >
            <div className="mt-4 grid gap-2.5">
              {examples.map((example, idx) => (
                <div
                  key={`${word.word}-${idx}`}
                  className="rounded-2xl p-3 sm:p-3.5"
                  style={{
                    background: `${accentSoft}0.055)`,
                    border: `1px solid ${accentSoft}0.12)`,
                  }}
                >
                  <RubyText
                    segments={example.segments}
                    className="char-display text-base leading-relaxed sm:text-[1.05rem]"
                    style={{ color: "var(--ink)" }}
                    rtStyle={{ fontSize: "0.62em", opacity: 0.9 }}
                  />
                  {example.translation && (
                    <p
                      className="mt-1.5 text-sm leading-relaxed"
                      style={{ color: "var(--ink-soft)", opacity: 0.76 }}
                    >
                      {example.translation}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

function LessonOverview({
  lessons,
  accent,
  accentSoft,
  gradient,
  onSelect,
}: {
  lessons: Lesson[];
  accent: string;
  accentSoft: string;
  gradient: string;
  onSelect: (lesson: Lesson) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {lessons.map((lesson, i) => (
        <motion.button
          key={lesson.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.04, duration: 0.35 }}
          onClick={() => onSelect(lesson)}
          className="group rounded-[24px] border p-5 text-left transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background: "rgba(255,255,255,0.84)",
            border: "1px solid var(--border)",
            boxShadow: "0 14px 30px rgba(0,0,0,0.05)",
          }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <div
                className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold"
                style={{
                  background: `${accentSoft}0.12)`,
                  color: accent,
                  border: `1px solid ${accentSoft}0.20)`,
                }}
              >
                {i + 1}
              </div>

              <h3
                className="text-base font-semibold leading-snug sm:text-lg"
                style={{ color: "var(--ink)" }}
              >
                {lesson.lesson}
              </h3>

              <p
                className="mt-1 text-sm"
                style={{ color: "var(--ink-soft)", opacity: 0.7 }}
              >
                {lesson.vocabulary.length} palabras
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {lesson.characters.slice(0, 8).map((char) => (
                  <span
                    key={char}
                    className="char-display inline-flex h-10 w-10 items-center justify-center rounded-xl text-lg font-bold text-white"
                    style={{
                      background: gradient,
                      boxShadow: `0 4px 10px ${accentSoft}0.18)`,
                    }}
                  >
                    {char}
                  </span>
                ))}
                {lesson.characters.length > 8 && (
                  <span
                    className="inline-flex h-10 min-w-[2.5rem] items-center justify-center rounded-xl px-2 text-xs font-semibold"
                    style={{
                      background: `${accentSoft}0.08)`,
                      color: accent,
                      border: `1px solid ${accentSoft}0.16)`,
                    }}
                  >
                    +{lesson.characters.length - 8}
                  </span>
                )}
              </div>
            </div>

            <span
              className="mt-1 shrink-0 text-lg opacity-30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
              style={{ color: accent }}
            >
              →
            </span>
          </div>
        </motion.button>
      ))}
    </div>
  );
}

function LessonSummaryCard({
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
  return (
    <motion.aside
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="lg:sticky lg:top-24"
    >
      <div
        className="rounded-[28px] border p-5 sm:p-6"
        style={{
          background: "rgba(255,255,255,0.86)",
          border: `1px solid ${accentSoft}0.12)`,
          boxShadow: `0 18px 40px ${accentSoft}0.08)`,
          backdropFilter: "blur(10px)",
        }}
      >
        <button
          onClick={onBack}
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
          style={{ color: accent }}
        >
          ← Todas las lecciones
        </button>

        <div
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
          style={{
            color: accent,
            background: `${accentSoft}0.08)`,
            border: `1px solid ${accentSoft}0.15)`,
          }}
        >
          Resumen
        </div>

        <h2
          className="mt-3 font-serif text-[clamp(1.7rem,3vw,2.2rem)] leading-tight"
          style={{ color: "var(--ink)" }}
        >
          {lesson.lesson}
        </h2>

        <p
          className="mt-3 text-sm leading-relaxed"
          style={{ color: "var(--ink-soft)", opacity: 0.76 }}
        >
          {lesson.vocabulary.length} palabras para estudiar en esta lección.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {lesson.characters.map((char) => (
            <span
              key={char}
              className="char-display inline-flex h-10 w-10 items-center justify-center rounded-xl text-lg font-bold text-white"
              style={{
                background: gradient,
                boxShadow: `0 4px 10px ${accentSoft}0.2)`,
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}

function LessonWordsColumn({
  lesson,
  accent,
  accentSoft,
  gradient,
}: {
  lesson: Lesson;
  accent: string;
  accentSoft: string;
  gradient: string;
}) {
  const [selectedWord, setSelectedWord] = useState<string | null>(
    lesson.vocabulary[0]?.word ?? null
  );

  return (
    <div className="space-y-3">
      {lesson.vocabulary.map((word, i) => (
        <motion.div
          key={word.word}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.04 }}
        >
          <WordCard
            word={word as VocabWord}
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
  );
}

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
  return (
    <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)] xl:grid-cols-[360px_minmax(0,1fr)]">
      <LessonSummaryCard
        lesson={lesson}
        accent={accent}
        accentSoft={accentSoft}
        gradient={gradient}
        onBack={onBack}
      />

      <LessonWordsColumn
        lesson={lesson}
        accent={accent}
        accentSoft={accentSoft}
        gradient={gradient}
      />
    </div>
  );
}

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

  const currentLesson = useMemo(
    () => (leccionParam ? lessons.find((l) => l.id === leccionParam) ?? null : null),
    [leccionParam, lessons]
  );

  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(currentLesson);

  useEffect(() => {
    setSelectedLesson(currentLesson);
  }, [currentLesson]);

  const handleSelectLesson = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    router.push(`?leccion=${lesson.id}`, { scroll: false });
  };

  const handleBack = () => {
    setSelectedLesson(null);
    router.push("?", { scroll: false });
  };

  const totalWords = lessons.reduce((acc, l) => acc + l.vocabulary.length, 0);

  return (
    <main className="relative min-h-screen" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />

      <div className="relative z-10 w-full px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: accent }}
          >
            ← {backLabel}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 mt-5 rounded-[32px] border px-5 py-5 sm:px-6 sm:py-6"
            style={{
              background: "rgba(255,255,255,0.74)",
              border: `1px solid ${accentSoft}0.12)`,
              boxShadow: `0 18px 40px ${accentSoft}0.06)`,
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
              style={{
                color: accent,
                background: `${accentSoft}0.08)`,
                border: `1px solid ${accentSoft}0.15)`,
              }}
            >
              語彙 · Vocabulario
            </div>

            <h1
              className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight"
              style={{ color: "var(--ink)" }}
            >
              Vocabulario de {getScriptLabel(scriptType)}
            </h1>

            {selectedLesson ? (
              <p
                className="mt-2 text-sm leading-relaxed sm:text-[0.95rem]"
                style={{ color: "var(--ink-soft)", opacity: 0.76 }}
              >
                {selectedLesson.lesson} · {selectedLesson.vocabulary.length} palabras
              </p>
            ) : (
              <p
                className="mt-2 text-sm leading-relaxed sm:text-[0.95rem]"
                style={{ color: "var(--ink-soft)", opacity: 0.76 }}
              >
                {lessons.length} lecciones · {totalWords} palabras en total
              </p>
            )}
          </motion.div>

          <AnimatePresence mode="wait">
            {selectedLesson ? (
              <motion.div
                key={`detail-${selectedLesson.id}`}
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
                  gradient={gradient}
                  onSelect={handleSelectLesson}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}