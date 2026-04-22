// src/app/gramatica/lecciones/[slug]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";
import {
  getAdjacentGrammarLessons,
  getAllGrammarLessons,
  getGrammarLessonBySlug,
  LessonBulletItem,
  type GrammarLesson,
  type LessonCalloutTone,
  type LessonContentBlock,
  type LessonDisplayConfig,
  type LessonExample,
  type LessonPrompt,
  type LessonTextSize,
} from "@/data/grammar/lessons";
import { RubyText, type RubySegment } from "@/app/components/ui/Ruby";
import ReadingPopoverText from "@/app/components/ui/ReadingPopoverText";

const ACCENT = "#1565C0";
const ACCENT_SOFT = "rgba(21,101,192,";
const GRADIENT = "linear-gradient(135deg, #90CAF9 0%, #1565C0 100%)";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllGrammarLessons().map((lesson) => ({
    slug: lesson.slug,
  }));
}

function textSizeClass(size: LessonTextSize) {
  switch (size) {
    case "base":
      return "text-base";
    case "lg":
      return "text-lg";
    case "xl":
      return "text-xl";
    case "2xl":
      return "text-2xl";
    case "3xl":
      return "text-3xl";
    default:
      return "text-lg";
  }
}

function spacingClass(spacing: LessonDisplayConfig["spacing"]) {
  switch (spacing) {
    case "normal":
      return "space-y-4";
    case "relaxed":
      return "space-y-5";
    case "loose":
      return "space-y-6";
    default:
      return "space-y-5";
  }
}

function containerMaxWidth(display: LessonDisplayConfig) {
  return display.preferWideLayout ? "max-w-5xl" : "max-w-4xl";
}

function resolveSegments(
  segments: RubySegment[] | undefined,
  rubyMode: LessonDisplayConfig["rubyMode"],
) {
  if (!segments) return [];

  if (rubyMode === "off") {
    return segments.map((seg) => ({ text: seg.text }));
  }

  if (rubyMode === "smart") {
    return segments.map((seg) => {
      const isKanaOnly = /^[ぁ-ゖァ-ヶー・、。？！「」『』（）\s]+$/.test(seg.text);
      return isKanaOnly ? { text: seg.text } : seg;
    });
  }

  return segments;
}

function rubyRtStyle(display: LessonDisplayConfig) {
  if (display.rubyMode === "off") {
    return { display: "none" as const };
  }

  return {
    fontSize: display.exampleTextSize === "3xl" ? "0.42em" : "0.48em",
    opacity: 0.9,
    lineHeight: 1,
  };
}

function BulletItemContent({
  item,
  display,
}: {
  item: LessonBulletItem;
  display: LessonDisplayConfig;
}) {
  if (typeof item === "string") {
    return <span>{item}</span>;
  }

  return (
    <div className="space-y-1">
      {item.es && (
        <p style={{ color: "var(--ink-soft)", opacity: 0.88 }}>
          {item.es}
        </p>
      )}

      {item.jp && item.jp.length > 0 && (
        <LessonJapaneseText
          segments={item.jp}
          display={display}
          className="char-display text-lg font-bold leading-relaxed"
          style={{ color: "var(--ink)" }}
          rtStyle={rubyRtStyle(display)}
        />
      )}

      {item.note && (
        <p
          className="text-xs sm:text-sm"
          style={{ color: "var(--ink-soft)", opacity: 0.72 }}
        >
          {item.note}
        </p>
      )}
    </div>
  );
}

function PromptLine({
  prompt,
  display,
  jpClassName,
}: {
  prompt?: LessonPrompt;
  display: LessonDisplayConfig;
  jpClassName?: string;
}) {
  if (!prompt) return null;

  return (
    <div className="space-y-1.5">
      {prompt.jp && prompt.jp.length > 0 && (
        <LessonJapaneseText
          segments={prompt.jp}
          display={display}
          className={jpClassName ?? `char-display font-bold leading-relaxed ${textSizeClass(display.exampleTextSize)}`}
          style={{ color: "var(--ink)" }}
          rtStyle={rubyRtStyle(display)}
        />
      )}

      {prompt.es && (
        <p className="text-sm sm:text-base" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>
          {prompt.es}
        </p>
      )}

      {prompt.note && (
        <p className="text-xs sm:text-sm" style={{ color: "var(--ink-soft)", opacity: 0.68 }}>
          {prompt.note}
        </p>
      )}
    </div>
  );
}

function LessonJapaneseText({
  segments,
  display,
  className,
  style,
  rtStyle,
}: {
  segments: RubySegment[];
  display: LessonDisplayConfig;
  className?: string;
  style?: React.CSSProperties;
  rtStyle?: React.CSSProperties;
}) {
  const resolved = resolveSegments(segments, display.rubyMode);

  if (display.rubyMode === "tap") {
    return (
      <ReadingPopoverText
        segments={resolved}
        className={className}
        style={style}
        popoverStyle={{
          fontSize: "0.78rem",
          lineHeight: 1.2,
        }}
      />
    );
  }

  return (
    <RubyText
      segments={resolved}
      className={className}
      style={style}
      rtStyle={rtStyle}
    />
  );
}

function ExampleCard({
  example,
  display,
}: {
  example: LessonExample;
  display: LessonDisplayConfig;
}) {
  return (
    <div
      className="rounded-[24px] border p-4 sm:p-5"
      style={{
        background: "rgba(255,255,255,0.92)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <LessonJapaneseText
        segments={example.jp}
        display={display}
        className={`char-display font-bold leading-relaxed ${textSizeClass(display.exampleTextSize)}`}
        style={{ color: "var(--ink)" }}
        rtStyle={rubyRtStyle(display)}
      />

      <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>
        {example.es}
      </p>

      {example.literal && (
        <p className="mt-1 text-xs sm:text-sm" style={{ color: "var(--ink-soft)", opacity: 0.64 }}>
          Literal: {example.literal}
        </p>
      )}

      {example.breakdown && example.breakdown.length > 0 && (
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {example.breakdown.map((item) => (
            <div
              key={`${example.id}-${item.label}`}
              className="rounded-2xl border px-3 py-2"
              style={{
                background: `${ACCENT_SOFT}0.05)`,
                border: `1px solid ${ACCENT_SOFT}0.12)`,
              }}
            >
              <p
                className="text-[0.68rem] font-bold uppercase tracking-[0.16em]"
                style={{ color: ACCENT }}
              >
                {item.label}
              </p>

              {item.jp && item.jp.length > 0 && (
                <LessonJapaneseText
                  segments={item.jp}
                  display={display}
                  className="char-display mt-1 text-lg font-bold leading-relaxed"
                  style={{ color: "var(--ink)" }}
                  rtStyle={rubyRtStyle(display)}
                />
              )}

              {item.es && (
                <p className="mt-1 text-xs sm:text-sm" style={{ color: "var(--ink-soft)", opacity: 0.8 }}>
                  {item.es}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {example.notes && example.notes.length > 0 && (
        <ul className="mt-3 space-y-1.5 pl-5 text-sm" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>
          {example.notes.map((note, idx) => (
            <li key={`${example.id}-note-${idx}`}>{note}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function calloutToneStyles(tone: LessonCalloutTone) {
  switch (tone) {
    case "success":
      return {
        bg: "rgba(220,252,231,0.9)",
        border: "rgba(22,163,74,0.18)",
        title: "#15803D",
        body: "#166534",
      };
    case "warning":
      return {
        bg: "rgba(254,243,199,0.9)",
        border: "rgba(217,119,6,0.18)",
        title: "#B45309",
        body: "#92400E",
      };
    case "danger":
      return {
        bg: "rgba(254,226,226,0.9)",
        border: "rgba(220,38,38,0.18)",
        title: "#B91C1C",
        body: "#991B1B",
      };
    case "info":
    default:
      return {
        bg: `${ACCENT_SOFT}0.08)`,
        border: `${ACCENT_SOFT}0.16)`,
        title: ACCENT,
        body: "var(--ink-soft)",
      };
  }
}

function BlockRenderer({
  block,
  display,
}: {
  block: LessonContentBlock;
  display: LessonDisplayConfig;
}) {
  if (block.type === "paragraph") {
    return (
      <p
        className={`leading-8 ${textSizeClass(display.bodyTextSize)}`}
        style={{ color: "var(--ink-soft)", opacity: 0.88 }}
      >
        {block.content}
      </p>
    );
  }

  if (block.type === "bullet-list") {
    return (
        <ul className="space-y-2 pl-5" style={{ color: "var(--ink-soft)", opacity: 0.86 }}>
        {block.items.map((item, idx) => (
            <li key={idx} className={`leading-8 ${textSizeClass(display.bodyTextSize)}`}>
            <BulletItemContent item={item} display={display} />
            </li>
        ))}
        </ul>
    );
  }

  if (block.type === "checklist") {
    return (
        <div className="grid gap-3">
        {block.items.map((item, idx) => (
            <div
            key={idx}
            className="rounded-2xl border px-4 py-3"
            style={{
                background: "rgba(255,255,255,0.88)",
                border: `1px solid ${ACCENT_SOFT}0.12)`,
            }}
            >
            <div className={`leading-7 ${textSizeClass(display.bodyTextSize)}`} style={{ color: "var(--ink)" }}>
                <span className="mr-2">✓</span>
                <BulletItemContent item={item} display={display} />
            </div>
            </div>
        ))}
        </div>
    );
  }

  if (block.type === "callout") {
    const tone = calloutToneStyles(block.tone);

    return (
      <div
        className="rounded-[24px] border p-4 sm:p-5"
        style={{
          background: tone.bg,
          borderColor: tone.border,
        }}
      >
        <h3
          className="text-sm font-bold uppercase tracking-[0.16em]"
          style={{ color: tone.title }}
        >
          {block.title}
        </h3>

        <p className="mt-2 text-sm leading-7 sm:text-base" style={{ color: tone.body, opacity: 0.92 }}>
          {block.content}
        </p>

        {block.bullets && block.bullets.length > 0 && (
        <ul
            className="mt-3 space-y-1.5 pl-5 text-sm sm:text-base"
            style={{ color: tone.body, opacity: 0.88 }}
        >
            {block.bullets.map((item, idx) => (
            <li key={idx}>
                <BulletItemContent item={item} display={display} />
            </li>
            ))}
        </ul>
        )}
      </div>
    );
  }

  if (block.type === "pattern-cards") {
    return (
      <div className="grid gap-4">
        {block.items.map((item) => (
          <div
            key={item.id}
            className="rounded-[24px] border p-4 sm:p-5"
            style={{
              background: "rgba(255,255,255,0.92)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.16em]"
                style={{
                  background: `${ACCENT_SOFT}0.08)`,
                  color: ACCENT,
                  border: `1px solid ${ACCENT_SOFT}0.14)`,
                }}
              >
                {item.label}
              </span>
            </div>

            <div className="mt-4">
              <LessonJapaneseText
                segments={item.pattern}
                display={display}
                className={`char-display font-bold leading-relaxed ${textSizeClass(display.japaneseTextSize)}`}
                style={{ color: ACCENT }}
                rtStyle={rubyRtStyle(display)}
              />
            </div>

            <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--ink)" }}>
              {item.meaning}
            </p>

            {item.translation && (
              <p className="mt-1 text-sm" style={{ color: "var(--ink-soft)", opacity: 0.74 }}>
                {item.translation}
              </p>
            )}

            {item.structure && item.structure.length > 0 && (
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {item.structure.map((part) => (
                  <div
                    key={`${item.id}-${part.slot}`}
                    className="rounded-2xl border px-3 py-3"
                    style={{
                      background: `${ACCENT_SOFT}0.04)`,
                      border: `1px solid ${ACCENT_SOFT}0.12)`,
                    }}
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: ACCENT }}>
                      {part.slot}
                    </p>
                    <p className="mt-1 text-sm font-semibold" style={{ color: "var(--ink)" }}>
                      {part.value}
                    </p>
                    {part.note && (
                        typeof part.note === "string" ? (
                            <p
                            className="mt-1 text-xs sm:text-sm"
                            style={{ color: "var(--ink-soft)", opacity: 0.72 }}
                            >
                            {part.note}
                            </p>
                        ) : (
                            <div className="mt-1 space-y-1">
                            {part.note.es && (
                                <p
                                className="text-xs sm:text-sm"
                                style={{ color: "var(--ink-soft)", opacity: 0.78 }}
                                >
                                {part.note.es}
                                </p>
                            )}

                            {part.note.jp && part.note.jp.length > 0 && (
                                <LessonJapaneseText
                                segments={part.note.jp}
                                display={display}
                                className="char-display text-sm font-semibold leading-relaxed"
                                style={{ color: "var(--ink)" }}
                                rtStyle={rubyRtStyle(display)}
                                />
                            )}

                            {part.note.note && (
                                <p
                                className="text-[0.72rem] sm:text-xs"
                                style={{ color: "var(--ink-soft)", opacity: 0.68 }}
                                >
                                {part.note.note}
                                </p>
                            )}
                            </div>
                          )
                        )}
                  </div>
                ))}
              </div>
            )}

            {item.notes && item.notes.length > 0 && (
              <ul className="mt-4 space-y-1.5 pl-5 text-sm" style={{ color: "var(--ink-soft)", opacity: 0.8 }}>
                {item.notes.map((note, idx) => (
                  <li key={`${item.id}-note-${idx}`}>{note}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    );
  }

  if (block.type === "vocabulary-grid") {
    const gridClass =
        block.columns === 4
        ? "sm:grid-cols-2 xl:grid-cols-4"
        : block.columns === 3
        ? "sm:grid-cols-2 xl:grid-cols-3"
        : "sm:grid-cols-2";

    return (
        <div className={`grid grid-cols-1 gap-3 ${gridClass}`}>
        {block.items.map((item) => (
            <div
            key={item.id}
            className="rounded-[22px] border p-4"
            style={{
                background: "rgba(255,255,255,0.92)",
                border: "1px solid var(--border)",
            }}
            >
            <LessonJapaneseText
                segments={item.jp}
                display={display}
                className="char-display text-2xl font-bold leading-relaxed"
                style={{ color: "var(--ink)" }}
                rtStyle={rubyRtStyle(display)}
            />

            <p className="mt-2 text-sm font-semibold" style={{ color: ACCENT }}>
                {item.meaning}
            </p>

            {item.notes && item.notes.length > 0 && (
                <ul
                className="mt-2 space-y-1 pl-4 text-xs sm:text-sm"
                style={{ color: "var(--ink-soft)", opacity: 0.72 }}
                >
                {item.notes.map((note, idx) => (
                    <li key={`${item.id}-note-${idx}`}>{note}</li>
                ))}
                </ul>
            )}
            </div>
        ))}
        </div>
    );
  }

  if (block.type === "example-group") {
    return (
      <div className="grid gap-4">
        {block.items.map((example) => (
          <ExampleCard key={example.id} example={example} display={display} />
        ))}
      </div>
    );
  }

  if (block.type === "contrast-list") {
    return (
      <div className="grid gap-4">
        {block.items.map((item) => (
          <div
            key={item.id}
            className="rounded-[24px] border p-4 sm:p-5"
            style={{
              background: "rgba(255,255,255,0.92)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <h3 className="text-base font-bold sm:text-lg" style={{ color: ACCENT }}>
              {item.label}
            </h3>

            <div className="mt-4 grid gap-3 lg:grid-cols-2">
              <div
                className="rounded-2xl border p-4"
                style={{
                  background: "rgba(220,252,231,0.6)",
                  border: "1px solid rgba(22,163,74,0.16)",
                }}
              >
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em]" style={{ color: "#15803D" }}>
                  Correcto
                </p>
                <div className="mt-2">
                  <PromptLine prompt={item.correct} display={display} />
                </div>
              </div>

              {item.incorrect && (
                <div
                  className="rounded-2xl border p-4"
                  style={{
                    background: "rgba(254,226,226,0.6)",
                    border: "1px solid rgba(220,38,38,0.16)",
                  }}
                >
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em]" style={{ color: "#B91C1C" }}>
                    Incorrecto
                  </p>
                  <div className="mt-2">
                    <PromptLine prompt={item.incorrect} display={display} />
                  </div>
                </div>
              )}
            </div>

            <p className="mt-4 text-sm leading-7 sm:text-base" style={{ color: "var(--ink-soft)", opacity: 0.84 }}>
              {item.explanation}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

function SectionCard({
  lesson,
  section,
}: {
  lesson: GrammarLesson;
  section: GrammarLesson["sections"][number];
}) {
  return (
    <section
      id={section.id}
      className="rounded-[28px] border p-5 sm:p-6"
      style={{
        background: "rgba(255,255,255,0.78)",
        border: `1px solid ${ACCENT_SOFT}0.10)`,
        boxShadow: `0 20px 40px ${ACCENT_SOFT}0.06)`,
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="mb-5">
        <p
          className="text-[0.7rem] font-bold uppercase tracking-[0.18em]"
          style={{ color: ACCENT }}
        >
          {section.kind}
        </p>

        <h2
          className="mt-2 text-2xl font-bold sm:text-3xl"
          style={{ color: "var(--ink)" }}
        >
          {section.title}
        </h2>

        {section.description && (
          <p className="mt-2 text-sm sm:text-base" style={{ color: "var(--ink-soft)", opacity: 0.76 }}>
            {section.description}
          </p>
        )}
      </div>

      <div className={spacingClass(lesson.display.spacing)}>
        {section.blocks.map((block, idx) => (
            <BlockRenderer
            key={`${section.id}-${idx}`}
            block={block}
            display={lesson.display}
            />
        ))}
        </div>
    </section>
  );
}

export default async function GrammarLessonPage({ params }: Props) {
  const { slug } = await params;
  const lesson = getGrammarLessonBySlug(slug);

  if (!lesson) {
    notFound();
  }

  const { previous, next } = getAdjacentGrammarLessons(slug);
  const maxWidth = containerMaxWidth(lesson.display);

  return (
    <main className="relative min-h-screen" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />

      <div className="relative z-10 flex w-full justify-center">
        <div className={`w-full ${maxWidth} px-4 pb-24 pt-8 sm:px-6 sm:pt-10`}>
          <div className="mb-6 flex items-center justify-between gap-4">
            <Link
              href="/gramatica/lecciones"
              className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: ACCENT }}
            >
              ← Lecciones
            </Link>

            <div className="flex items-center gap-2">
              <span
                className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]"
                style={{
                  background: `${ACCENT_SOFT}0.08)`,
                  color: ACCENT,
                  border: `1px solid ${ACCENT_SOFT}0.16)`,
                }}
              >
                {lesson.level}
              </span>

              <span
                className="rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  background: "rgba(255,255,255,0.72)",
                  color: "var(--ink-soft)",
                  border: "1px solid var(--border)",
                }}
              >
                {lesson.estimatedMinutes} min
              </span>
            </div>
          </div>

          <section
            className="rounded-[30px] border px-5 py-6 sm:px-7 sm:py-8"
            style={{
              background: "rgba(255,255,255,0.84)",
              border: `1px solid ${ACCENT_SOFT}0.12)`,
              boxShadow: `0 24px 50px ${ACCENT_SOFT}0.08)`,
            }}
          >
            <div
              className="inline-flex rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em]"
              style={{
                background: `${ACCENT_SOFT}0.08)`,
                color: ACCENT,
                border: `1px solid ${ACCENT_SOFT}0.14)`,
              }}
            >
              Lección {lesson.order}
            </div>

            <div className="mt-5">
              {lesson.jpTitle && (
                <p
                  className="char-display text-xl font-bold sm:text-2xl"
                  style={{ color: ACCENT, letterSpacing: "0.06em" }}
                >
                  {lesson.jpTitle}
                </p>
              )}

              <h1
                className="mt-2 text-4xl font-bold leading-tight sm:text-5xl"
                style={{ color: "var(--ink)" }}
              >
                {lesson.title}
              </h1>

              <p
                className="mt-4 max-w-3xl text-base leading-8 sm:text-lg"
                style={{ color: "var(--ink-soft)", opacity: 0.82 }}
              >
                {lesson.description}
              </p>
            </div>

            {lesson.objectives.length > 0 && (
              <div className="mt-6 grid gap-3 lg:grid-cols-2">
                {lesson.objectives.map((objective, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border px-4 py-3"
                    style={{
                      background: "rgba(255,255,255,0.72)",
                      border: `1px solid ${ACCENT_SOFT}0.12)`,
                    }}
                  >
                    <p className="text-sm sm:text-base" style={{ color: "var(--ink)" }}>
                      {objective}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-2">
              {lesson.grammarTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    background: "rgba(255,255,255,0.68)",
                    color: "var(--ink-soft)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <div className="mt-6 grid gap-4">
            {lesson.sections.map((section) => (
              <SectionCard key={section.id} lesson={lesson} section={section} />
            ))}
          </div>

          <section
            className="mt-6 rounded-[28px] border p-5 sm:p-6"
            style={{
              background: "rgba(255,255,255,0.78)",
              border: `1px solid ${ACCENT_SOFT}0.10)`,
              boxShadow: `0 20px 40px ${ACCENT_SOFT}0.06)`,
            }}
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p
                  className="text-[0.7rem] font-bold uppercase tracking-[0.18em]"
                  style={{ color: ACCENT }}
                >
                  Quiz
                </p>
                <h2 className="mt-2 text-2xl font-bold" style={{ color: "var(--ink)" }}>
                  {lesson.quiz.title}
                </h2>
                {lesson.quiz.description && (
                  <p className="mt-2 text-sm sm:text-base" style={{ color: "var(--ink-soft)", opacity: 0.76 }}>
                    {lesson.quiz.description}
                  </p>
                )}
              </div>

              <Link
                href={`/gramatica/lecciones/${lesson.slug}/quiz`}
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
                style={{
                  background: GRADIENT,
                  boxShadow: `0 12px 28px ${ACCENT_SOFT}0.22)`,
                }}
              >
                Ir al quiz
              </Link>
            </div>
          </section>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {previous ? (
              <Link
                href={`/gramatica/lecciones/${previous.slug}`}
                className="rounded-[24px] border p-4 transition-all hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.82)",
                  border: "1px solid var(--border)",
                }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
                  Anterior
                </p>
                <p className="mt-2 text-lg font-semibold" style={{ color: "var(--ink)" }}>
                  {previous.title}
                </p>
              </Link>
            ) : (
              <div
                className="rounded-[24px] border p-4"
                style={{
                  background: "rgba(255,255,255,0.5)",
                  border: "1px solid var(--border)",
                  opacity: 0.55,
                }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
                  Anterior
                </p>
                <p className="mt-2 text-lg font-semibold" style={{ color: "var(--ink-soft)" }}>
                  Primera lección
                </p>
              </div>
            )}

            {next ? (
              <Link
                href={`/gramatica/lecciones/${next.slug}`}
                className="rounded-[24px] border p-4 text-left transition-all hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.82)",
                  border: "1px solid var(--border)",
                }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
                  Siguiente
                </p>
                <p className="mt-2 text-lg font-semibold" style={{ color: "var(--ink)" }}>
                  {next.title}
                </p>
              </Link>
            ) : (
              <div
                className="rounded-[24px] border p-4"
                style={{
                  background: "rgba(255,255,255,0.5)",
                  border: "1px solid var(--border)",
                  opacity: 0.55,
                }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>
                  Siguiente
                </p>
                <p className="mt-2 text-lg font-semibold" style={{ color: "var(--ink-soft)" }}>
                  Última lección
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}