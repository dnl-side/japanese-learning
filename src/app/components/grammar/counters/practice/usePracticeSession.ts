"use client";

import { useCallback, useMemo, useState } from "react";
import {
  COUNTER_PRACTICE_QUESTIONS,
  type CounterPracticeMode,
  type CounterPracticeQuestion,
} from "@/data/grammar/counterPractice";

export interface PracticeAnswer {
  questionId: string;
  selected: string;
  correct: boolean;
}

export type PracticeStage = "setup" | "running" | "finished";

function shuffleArray<T>(items: T[]) {
  return [...items].sort(() => Math.random() - 0.5);
}

function questionsForMode(mode: CounterPracticeMode) {
  if (mode === "mixed") return COUNTER_PRACTICE_QUESTIONS;
  return COUNTER_PRACTICE_QUESTIONS.filter((question) => question.type === mode);
}

export function usePracticeSession() {
  const [stage, setStage] = useState<PracticeStage>("setup");
  const [mode, setMode] = useState<CounterPracticeMode>("mixed");
  const [questionCount, setQuestionCount] = useState(10);
  const [questions, setQuestions] = useState<CounterPracticeQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<PracticeAnswer[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  const currentQuestion = questions[currentIndex];
  const currentAnswer = currentQuestion ? answers.find((answer) => answer.questionId === currentQuestion.id) : undefined;
  const answered = Boolean(currentAnswer);

  const score = useMemo(() => answers.filter((answer) => answer.correct).length, [answers]);
  const progress = questions.length > 0 ? Math.round(((currentIndex + 1) / questions.length) * 100) : 0;

  const startSession = useCallback(() => {
    const pool = questionsForMode(mode);
    const nextQuestions = shuffleArray(pool).slice(0, Math.min(questionCount, pool.length));
    setQuestions(nextQuestions);
    setCurrentIndex(0);
    setAnswers([]);
    setSelected(null);
    setStage("running");
  }, [mode, questionCount]);

  const answerCurrent = useCallback(
    (choice: string) => {
      if (!currentQuestion || answered) return;

      const correct = choice === currentQuestion.correct;
      setSelected(choice);
      setAnswers((prev) => [
        ...prev,
        {
          questionId: currentQuestion.id,
          selected: choice,
          correct,
        },
      ]);
    },
    [answered, currentQuestion],
  );

  const nextQuestion = useCallback(() => {
    setSelected(null);

    if (currentIndex >= questions.length - 1) {
      setStage("finished");
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  }, [currentIndex, questions.length]);

  const resetToSetup = useCallback(() => {
    setStage("setup");
    setQuestions([]);
    setCurrentIndex(0);
    setAnswers([]);
    setSelected(null);
  }, []);

  const restartSameMode = useCallback(() => {
    const pool = questionsForMode(mode);
    const nextQuestions = shuffleArray(pool).slice(0, Math.min(questionCount, pool.length));
    setQuestions(nextQuestions);
    setCurrentIndex(0);
    setAnswers([]);
    setSelected(null);
    setStage("running");
  }, [mode, questionCount]);

  return {
    stage,
    mode,
    setMode,
    questionCount,
    setQuestionCount,
    questions,
    currentQuestion,
    currentIndex,
    answers,
    currentAnswer,
    answered,
    selected,
    score,
    progress,
    startSession,
    answerCurrent,
    nextQuestion,
    resetToSetup,
    restartSameMode,
  };
}
