import { notFound } from "next/navigation";
import SakuraAnimation from "@/app/components/layout/SakuraAnimation";
import LessonQuizClient from "@/app/components/grammar/lesson-quiz/LessonQuizClient";
import {
  getAllGrammarLessons,
  getGrammarLessonBySlug,
} from "@/data/grammar/lessons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllGrammarLessons().map((lesson) => ({
    slug: lesson.slug,
  }));
}

export default async function GrammarLessonQuizPage({ params }: Props) {
  const { slug } = await params;
  const lesson = getGrammarLessonBySlug(slug);

  if (!lesson) {
    notFound();
  }

  return (
    <main className="relative min-h-screen" style={{ background: "var(--paper)" }}>
      <SakuraAnimation />

      <div className="relative z-10 flex w-full justify-center">
        <div className="w-full max-w-4xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10">
          <LessonQuizClient lesson={lesson} />
        </div>
      </div>
    </main>
  );
}