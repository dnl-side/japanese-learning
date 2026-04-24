"use client";

import { useMemo, useState } from "react";
import type { JlptItemTypeGuide, JlptQuestion, JlptQuestionMode } from "@/data/jlpt";
import { JlptRubyBlock, JlptText } from "./JlptText";

const ACCENT = "#B91C1C";

type AnswerState = Record<string, boolean>;

export default function JlptQuestionRenderer({
  questions,
  guide,
  mode = "guided",
}: {
  questions: readonly JlptQuestion[];
  guide?: JlptItemTypeGuide;
  mode?: JlptQuestionMode;
}) {
  const [answers, setAnswers] = useState<AnswerState>({});

  const answeredCount = Object.keys(answers).length;
  const correctCount = Object.values(answers).filter(Boolean).length;
  const progressLabel = questions.length > 0 ? `${correctCount}/${answeredCount || questions.length}` : "0/0";

  function registerAnswer(questionId: string, isCorrect: boolean) {
    setAnswers((prev) => {
      if (questionId in prev) return prev;
      return { ...prev, [questionId]: isCorrect };
    });
  }

  if (questions.length === 0) {
    return (
      <div className="rounded-[28px] border p-6 text-center" style={{ background: "rgba(255,255,255,0.8)", borderColor: "rgba(148,163,184,0.2)" }}>
        <p className="text-lg font-bold" style={{ color: "var(--ink)" }}>Banco pendiente</p>
        <p className="mt-2 text-sm" style={{ color: "var(--ink-soft)", opacity: 0.76 }}>
          La estructura ya está lista. Falta agregar preguntas para esta combinación de nivel y tipo.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {guide ? <StrategyPanel guide={guide} /> : null}

      <div className="sticky top-3 z-20 rounded-full border px-4 py-3 text-sm font-semibold backdrop-blur" style={{ background: "rgba(255,255,255,0.86)", borderColor: "rgba(148,163,184,0.18)", color: "var(--ink)", boxShadow: "0 10px 26px rgba(15,23,42,0.08)" }}>
        Progreso: {progressLabel} · Respondidas: {answeredCount}/{questions.length}
      </div>

      {questions.map((question, index) => (
        <QuestionCard
          key={question.id}
          question={question}
          index={index}
          mode={mode}
          onAnswer={registerAnswer}
        />
      ))}
    </div>
  );
}

function StrategyPanel({ guide }: { guide: JlptItemTypeGuide }) {
  return (
    <section className="rounded-[28px] border p-6" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,255,255,0.78))", borderColor: "rgba(185,28,28,0.16)", boxShadow: "0 18px 38px rgba(15,23,42,0.08)" }}>
      <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
        Técnica de ejercicio · {guide.jpTitle}
      </p>
      <h2 className="mt-2 text-2xl font-bold" style={{ color: "var(--ink)" }}>{guide.title}</h2>
      <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.78 }}>{guide.shortDescription}</p>

      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        <MiniList title="Qué mide" items={guide.whatItTests} />
        <MiniList title="Cómo resolver" items={guide.solvingSteps} ordered />
        <MiniList title="Trampas típicas" items={guide.commonTraps} />
      </div>
    </section>
  );
}

function MiniList({ title, items, ordered = false }: { title: string; items: readonly string[]; ordered?: boolean }) {
  return (
    <div className="rounded-3xl border p-4" style={{ background: "rgba(255,255,255,0.72)", borderColor: "rgba(148,163,184,0.16)" }}>
      <h3 className="text-sm font-bold" style={{ color: "var(--ink)" }}>{title}</h3>
      <div className="mt-3 space-y-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)", opacity: 0.82 }}>
        {items.map((item, index) => (
          <div key={item} className="flex gap-2">
            <span className="font-bold" style={{ color: ACCENT }}>{ordered ? index + 1 : "•"}</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuestionCard({
  question,
  index,
  mode,
  onAnswer,
}: {
  question: JlptQuestion;
  index: number;
  mode: JlptQuestionMode;
  onAnswer: (questionId: string, isCorrect: boolean) => void;
}) {
  return (
    <article className="rounded-[28px] border p-5 sm:p-6" style={{ background: "rgba(255,255,255,0.88)", borderColor: "rgba(148,163,184,0.18)", boxShadow: "0 16px 36px rgba(15,23,42,0.07)" }}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
            Pregunta {index + 1} · {question.itemType}
          </p>
          {question.title ? <h3 className="mt-1 text-lg font-bold" style={{ color: "var(--ink)" }}>{question.title}</h3> : null}
        </div>
        <span className="rounded-full px-3 py-1 text-xs font-bold" style={{ background: "rgba(185,28,28,0.1)", color: ACCENT }}>
          {question.level}
        </span>
      </div>

      <div className="mt-5 rounded-3xl p-4" style={{ background: "rgba(248,250,252,0.86)" }}>
        <p className="text-sm font-semibold" style={{ color: "var(--ink-soft)" }}>
          <JlptText value={question.instruction} />
        </p>

        {question.passage ? (
          <div className="mt-4 rounded-2xl border p-4" style={{ background: "rgba(255,255,255,0.88)", borderColor: "rgba(148,163,184,0.18)" }}>
            {question.passage.title ? <p className="mb-2 text-sm font-bold" style={{ color: "var(--ink)" }}>{question.passage.title}</p> : null}
            <JlptRubyBlock segments={question.passage.body} className="whitespace-pre-line text-lg leading-loose" />
            {question.passage.note ? <p className="mt-2 text-xs" style={{ color: "var(--ink-soft)", opacity: 0.68 }}>{question.passage.note}</p> : null}
          </div>
        ) : null}

        {question.audio ? (
          <div className="mt-4 rounded-2xl border p-4" style={{ background: "rgba(250,245,255,0.72)", borderColor: "rgba(109,40,217,0.18)" }}>
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-bold" style={{ color: "#6D28D9" }}>Script de listening</p>
              <span className="rounded-full px-3 py-1 text-xs font-bold" style={{ background: "rgba(109,40,217,0.12)", color: "#6D28D9" }}>
                audio {question.audio.status === "ready" ? "listo" : "pendiente"}
              </span>
            </div>
            <JlptRubyBlock segments={question.audio.script} className="whitespace-pre-line text-lg leading-loose" />
            {question.audio.note ? <p className="mt-2 text-xs" style={{ color: "var(--ink-soft)", opacity: 0.68 }}>{question.audio.note}</p> : null}
          </div>
        ) : null}

        <div className="mt-4 text-xl font-semibold leading-loose" style={{ color: "var(--ink)" }}>
          <JlptText value={question.prompt} />
        </div>

        {mode !== "mock" ? (
          <div className="mt-3 rounded-2xl border px-4 py-3 text-sm" style={{ background: "rgba(255,247,237,0.74)", borderColor: "rgba(194,65,12,0.16)", color: "#9A3412" }}>
            Pista: {question.explanation.hint}
          </div>
        ) : null}
      </div>

      {question.questionKind === "single-choice" ? (
        <SingleChoice question={question} mode={mode} onAnswer={onAnswer} />
      ) : (
        <OrderSentence question={question} mode={mode} onAnswer={onAnswer} />
      )}
    </article>
  );
}

function SingleChoice({
  question,
  mode,
  onAnswer,
}: {
  question: Extract<JlptQuestion, { questionKind: "single-choice" }>;
  mode: JlptQuestionMode;
  onAnswer: (questionId: string, isCorrect: boolean) => void;
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const answered = selectedId !== null;
  const isCorrect = selectedId === question.correctChoiceId;

  function choose(choiceId: string) {
    if (answered) return;
    setSelectedId(choiceId);
    onAnswer(question.id, choiceId === question.correctChoiceId);
  }

  return (
    <div className="mt-5 space-y-3">
      {question.choices.map((choice) => {
        const selected = selectedId === choice.id;
        const correct = choice.id === question.correctChoiceId;
        const showCorrect = answered && correct;
        const showWrong = answered && selected && !correct;

        return (
          <button
            key={choice.id}
            type="button"
            onClick={() => choose(choice.id)}
            className="flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all hover:-translate-y-0.5 disabled:cursor-default disabled:hover:translate-y-0"
            disabled={answered}
            style={{
              background: showCorrect ? "rgba(220,252,231,0.78)" : showWrong ? "rgba(254,226,226,0.78)" : "rgba(255,255,255,0.92)",
              borderColor: showCorrect ? "rgba(22,163,74,0.35)" : showWrong ? "rgba(220,38,38,0.35)" : "rgba(148,163,184,0.18)",
              color: "var(--ink)",
            }}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold" style={{ background: "rgba(185,28,28,0.1)", color: ACCENT }}>
              {choice.id.toUpperCase()}
            </span>
            <span className="text-base leading-relaxed">
              <JlptText value={choice.label} />
            </span>
          </button>
        );
      })}

      {answered ? <Explanation question={question} isCorrect={isCorrect} selectedId={selectedId} mode={mode} /> : null}
    </div>
  );
}

function OrderSentence({
  question,
  mode,
  onAnswer,
}: {
  question: Extract<JlptQuestion, { questionKind: "order-sentence" }>;
  mode: JlptQuestionMode;
  onAnswer: (questionId: string, isCorrect: boolean) => void;
}) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [answered, setAnswered] = useState(false);

  const selectedTokens = useMemo(
    () => selectedIds.map((id) => question.tokens.find((token) => token.id === id)).filter((token): token is (typeof question.tokens)[number] => Boolean(token)),
    [question.tokens, selectedIds],
  );

  const isCorrect = answered && selectedIds.length === question.correctOrder.length && selectedIds.every((id, index) => id === question.correctOrder[index]);

  function addToken(tokenId: string) {
    if (answered || selectedIds.includes(tokenId)) return;
    setSelectedIds((prev) => [...prev, tokenId]);
  }

  function reset() {
    if (answered) return;
    setSelectedIds([]);
  }

  function check() {
    if (answered || selectedIds.length !== question.correctOrder.length) return;
    const correct = selectedIds.every((id, index) => id === question.correctOrder[index]);
    setAnswered(true);
    onAnswer(question.id, correct);
  }

  return (
    <div className="mt-5 space-y-4">
      <div className="rounded-2xl border p-4" style={{ background: "rgba(255,255,255,0.78)", borderColor: "rgba(148,163,184,0.18)" }}>
        <p className="mb-3 text-sm font-bold" style={{ color: "var(--ink-soft)" }}>Tu orden</p>
        <div className="flex min-h-12 flex-wrap gap-2">
          {selectedTokens.length > 0 ? selectedTokens.map((token) => (
            <span key={token.id} className="rounded-2xl px-3 py-2 text-base font-semibold" style={{ background: "rgba(185,28,28,0.1)", color: ACCENT }}>
              <JlptText value={token.label} />
            </span>
          )) : <span className="text-sm opacity-60">Selecciona los bloques en orden.</span>}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {question.tokens.map((token) => (
          <button
            key={token.id}
            type="button"
            disabled={answered || selectedIds.includes(token.id)}
            onClick={() => addToken(token.id)}
            className="rounded-2xl border px-4 py-2 text-base font-semibold transition-all hover:-translate-y-0.5 disabled:opacity-35 disabled:hover:translate-y-0"
            style={{ background: "rgba(255,255,255,0.92)", borderColor: "rgba(148,163,184,0.18)", color: "var(--ink)" }}
          >
            <JlptText value={token.label} />
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={check} disabled={answered || selectedIds.length !== question.correctOrder.length} className="rounded-full px-5 py-2.5 text-sm font-bold text-white disabled:opacity-40" style={{ background: ACCENT }}>
          Comprobar orden
        </button>
        <button type="button" onClick={reset} disabled={answered || selectedIds.length === 0} className="rounded-full border px-5 py-2.5 text-sm font-bold disabled:opacity-40" style={{ borderColor: "rgba(148,163,184,0.22)", color: "var(--ink)" }}>
          Reiniciar
        </button>
      </div>

      {answered ? <Explanation question={question} isCorrect={isCorrect} selectedId={null} mode={mode} /> : null}
    </div>
  );
}

function Explanation({
  question,
  isCorrect,
  selectedId,
  mode,
}: {
  question: JlptQuestion;
  isCorrect: boolean;
  selectedId: string | null;
  mode: JlptQuestionMode;
}) {
  const selectedWrong = selectedId && question.explanation.whyWrong ? question.explanation.whyWrong[selectedId] : undefined;

  return (
    <div className="rounded-[24px] border p-5" style={{ background: isCorrect ? "rgba(240,253,244,0.82)" : "rgba(255,247,237,0.82)", borderColor: isCorrect ? "rgba(22,163,74,0.25)" : "rgba(194,65,12,0.22)" }}>
      <p className="text-sm font-bold" style={{ color: isCorrect ? "#15803D" : "#C2410C" }}>
        {isCorrect ? "Correcto" : "Revisemos la trampa"}
      </p>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>{question.explanation.whyCorrect}</p>
      {!isCorrect && selectedWrong ? <p className="mt-2 text-sm leading-relaxed" style={{ color: "#9A3412" }}>{selectedWrong}</p> : null}

      {question.questionKind === "order-sentence" ? (
        <p className="mt-3 text-base font-semibold" style={{ color: "var(--ink)" }}>
          Respuesta: <JlptText value={question.answerLabel} />
        </p>
      ) : null}

      {mode !== "mock" ? (
        <div className="mt-4 space-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>Técnica</p>
          {question.explanation.strategy.map((step, index) => (
            <div key={step} className="flex gap-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              <span className="font-bold" style={{ color: ACCENT }}>{index + 1}</span>
              <span>{step}</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
