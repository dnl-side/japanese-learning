// src/data/grammar/formality.ts

import type { RubySegment } from "@/app/components/ui/Ruby";

export type FormalityRegister = "informal" | "neutral" | "formal";
export type FormalityScenarioContext = "friend" | "daily" | "teacher" | "work";

export interface FormalityLevelCard {
  key: FormalityRegister;
  label: string;
  jp: string;
  desc: string;
  color: string;
  accent: string;
  bullets: string[];
}

export interface FormalityRule {
  title: string;
  summary: string;
  detail: string;
}

export interface FormalityPattern {
  title: string;
  plain: string;
  neutral: string;
  note: string;
}

export interface FormalityContrastRow {
  label: string;
  explanation?: string;
  informal: RubySegment[];
  neutral: RubySegment[];
  formal: RubySegment[];
}

export interface FormalityContrast {
  id: string;
  title: string;
  summary: string;
  rows: FormalityContrastRow[];
}

export interface FormalityScenario {
  id: string;
  context: FormalityScenarioContext;
  title: string;
  situation: string;
  informal: RubySegment[];
  neutral: RubySegment[];
  formal: RubySegment[];
  note: string;
}

export interface FormalityMistake {
  wrong: RubySegment[];
  correct: RubySegment[];
  explanation: string;
}

export interface KeigoBridgeCard {
  title: string;
  jp: string;
  desc: string;
  example: RubySegment[];
  color: string;
  accent: string;
}

export function ruby(input: string): RubySegment[] {
  const regex = /\[([^\]|]+)\|([^\]]+)\]/g;
  const segments: RubySegment[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(input)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ text: input.slice(lastIndex, match.index) });
    }

    segments.push({ text: match[1], ruby: match[2] });
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < input.length) {
    segments.push({ text: input.slice(lastIndex) });
  }

  return segments;
}

export const FORMALITY_LEVELS: FormalityLevelCard[] = [
  {
    key: "informal",
    label: "Informal",
    jp: "くだけた話し方",
    desc: "Forma casual entre amigos, familia cercana y habla interior.",
    color: "#FFE0B2",
    accent: "#C2410C",
    bullets: [
      "Usa plain forms",
      "Aparecen だ・ない・た",
      "No necesita です・ます",
    ],
  },
  {
    key: "neutral",
    label: "Neutro",
    jp: "です・ます体",
    desc: "La cortesía base para la vida diaria, clase, trabajo general y desconocidos.",
    color: "#CFD8DC",
    accent: "#263238",
    bullets: [
      "Base más segura",
      "Usa です・ます",
      "No entra todavía en keigo fuerte",
    ],
  },
  {
    key: "formal",
    label: "Formal alto",
    jp: "敬語",
    desc: "Nivel más alto: respeto al otro, humildad propia y expresiones de negocio.",
    color: "#D1C4E9",
    accent: "#5B21B6",
    bullets: [
      "Incluye 丁寧語 alta",
      "Incluye 尊敬語 y 謙譲語",
      "Muy usado en cliente, teléfono, email y servicio",
    ],
  },
];

export const FORMALITY_RULES: FormalityRule[] = [
  {
    title: "La diferencia central no es vocabulario, sino registro",
    summary: "La misma idea cambia según la relación social.",
    detail:
      "Primero decides con quién hablas. Después eliges el nivel: informal si hay cercanía, neutro si buscas cortesía base, y formal alto si el contexto exige distancia o jerarquía.",
  },
  {
    title: "Informal y neutro forman el puente principal",
    summary: "Ese es el salto que más conviene dominar primero.",
    detail:
      "En la práctica diaria, el cambio más frecuente es de plain form a です・ます. Si ese puente queda claro, después el keigo se entiende como una capa extra y no como algo aislado.",
  },
  {
    title: "Keigo no reemplaza toda la gramática",
    summary: "Es una capa superior, no el punto de partida.",
    detail:
      "Primero conviene consolidar だ / plain forms / ない / た frente a です / ます / ません / ました. Luego se añaden formas como いらっしゃる, 伺う, 拝見する, 申し上げる, etc.",
  },
];

export const FORMALITY_PATTERNS: FormalityPattern[] = [
  {
    title: "名詞・な形容詞",
    plain: "学生だ / 静かだ",
    neutral: "学生です / 静かです",
    note: "だ desaparece y pasa a です.",
  },
  {
    title: "い形容詞",
    plain: "高い / 忙しい",
    neutral: "高いです / 忙しいです",
    note: "El い se mantiene. No se usa 高いだ.",
  },
  {
    title: "動詞・現在",
    plain: "行く / 食べる / 見る",
    neutral: "行きます / 食べます / 見ます",
    note: "La idea base pasa a la forma en ます.",
  },
  {
    title: "動詞・否定",
    plain: "行かない / 食べない",
    neutral: "行きません / 食べません",
    note: "Plain usa ない. Neutro usa ません.",
  },
  {
    title: "動詞・過去",
    plain: "行った / 食べた",
    neutral: "行きました / 食べました",
    note: "Plain usa た. Neutro usa ました.",
  },
  {
    title: "動詞・過去 negativo",
    plain: "行かなかった / 食べなかった",
    neutral: "行きませんでした / 食べませんでした",
    note: "Este es uno de los contrastes más útiles para conversación real.",
  },
];

export const FORMALITY_CONTRASTS: FormalityContrast[] = [
  {
    id: "copula",
    title: "Copula y predicación",
    summary: "La primera gran diferencia es だ frente a です.",
    rows: [
      {
        label: "Nominal",
        explanation: "Misma idea, distinto nivel de distancia.",
        informal: ruby("[明日|あした]は[休|やす]みだ。"),
        neutral: ruby("[明日|あした]は[休|やす]みです。"),
        formal: ruby("[明日|あした]は[休業|きゅうぎょう]でございます。"),
      },
      {
        label: "な-adjetivo",
        explanation: "Con な-adjetivos el cambio también pasa por だ → です.",
        informal: ruby("この[部屋|へや]は[静|しず]かだ。"),
        neutral: ruby("この[部屋|へや]は[静|しず]かです。"),
        formal: ruby("こちらのお[部屋|へや]は[静|しず]かでございます。"),
      },
      {
        label: "い-adjetivo",
        explanation: "Aquí no aparece だ; lo normal es añadir です.",
        informal: ruby("[今日|きょう]は[寒|さむ]い。"),
        neutral: ruby("[今日|きょう]は[寒|さむ]いです。"),
        formal: ruby("[本日|ほんじつ]は[冷|ひ]え[込|こ]んでおります。"),
      },
    ],
  },
  {
    id: "verb-bridge",
    title: "El puente verbal más importante",
    summary: "Plain form frente a ます-form.",
    rows: [
      {
        label: "Afirmativo presente",
        explanation: "La forma de diccionario se vuelve ます.",
        informal: ruby("[後|あと]で[連絡|れんらく]する。"),
        neutral: ruby("[後|あと]で[連絡|れんらく]します。"),
        formal: ruby("[後|のち]ほどご[連絡|れんらく]いたします。"),
      },
      {
        label: "Negativo",
        explanation: "ない en informal, ません en neutro.",
        informal: ruby("[今日|きょう]は[行|い]かない。"),
        neutral: ruby("[今日|きょう]は[行|い]きません。"),
        formal: ruby("[本日|ほんじつ]は[伺|うかが]いません。"),
      },
      {
        label: "Pasado",
        explanation: "た en informal, ました en neutro.",
        informal: ruby("[昨日|きのう]その[映画|えいが]を[見|み]た。"),
        neutral: ruby("[昨日|きのう]その[映画|えいが]を[見|み]ました。"),
        formal: ruby("[昨日|きのう]その[資料|しりょう]を[拝見|はいけん]しました。"),
      },
    ],
  },
  {
    id: "interaction",
    title: "Pedir, preguntar y reaccionar",
    summary: "Aquí es donde el registro se siente más rápido en la vida real.",
    rows: [
      {
        label: "Pedir espera",
        explanation: "La cortesía cambia mucho con una sola frase.",
        informal: ruby("ちょっと[待|ま]って。"),
        neutral: ruby("ちょっと[待|ま]ってください。"),
        formal: ruby("[少々|しょうしょう]お[待|ま]ちください。"),
      },
      {
        label: "Pedir permiso para hablar",
        explanation: "Con profesor o superior, la versión casual suena demasiado directa.",
        informal: ruby("[今|いま]いい？"),
        neutral: ruby("[今|いま]いいですか。"),
        formal: ruby("[今|いま]お[時間|じかん]よろしいでしょうか。"),
      },
      {
        label: "Dar las gracias",
        explanation: "La intensidad y distancia aumentan progresivamente.",
        informal: ruby("ありがとう。"),
        neutral: ruby("ありがとうございます。"),
        formal: ruby("[誠|まこと]にありがとうございます。"),
      },
      {
        label: "Disculparse",
        explanation: "ごめん funciona con cercanía; no con cliente o contexto delicado.",
        informal: ruby("ごめん。"),
        neutral: ruby("すみません。"),
        formal: ruby("[申|もう]し[訳|わけ]ありません。"),
      },
    ],
  },
];

export const FORMALITY_SCENARIOS: FormalityScenario[] = [
  {
    id: "late-message",
    context: "friend",
    title: "Avisar que llegarás tarde",
    situation: "Misma idea, distintos niveles de formalidad.",
    informal: ruby("[今日|きょう]ちょっと[遅|おく]れる。"),
    neutral: ruby("[今日|きょう]は[少|すこ]し[遅|おく]れます。"),
    formal: ruby("[本日|ほんじつ]、[少々|しょうしょう][遅|おく]れております。"),
    note: "Con amigos basta la plain form. Con compañeros o desconocidos, ます ya funciona mejor.",
  },
  {
    id: "ask-time",
    context: "teacher",
    title: "Preguntar si alguien tiene un momento",
    situation: "Muy útil para profesor, jefe o persona con distancia.",
    informal: ruby("[今|いま]いい？"),
    neutral: ruby("[今|いま]いいですか。"),
    formal: ruby("[今|いま]お[時間|じかん]よろしいでしょうか。"),
    note: "Aquí se ve muy claro cómo el registro cambia la sensación de respeto.",
  },
  {
    id: "contact-later",
    context: "daily",
    title: "Decir que contactarás después",
    situation: "Buena frase para ver plain → ます → formal alto.",
    informal: ruby("[後|あと]で[連絡|れんらく]するね。"),
    neutral: ruby("[後|あと]で[連絡|れんらく]します。"),
    formal: ruby("[後|のち]ほどご[連絡|れんらく]いたします。"),
    note: "La columna formal ya entra en terreno de trabajo o trato más alto.",
  },
  {
    id: "wait-customer",
    context: "work",
    title: "Pedir que esperen",
    situation: "Caso típico de tienda, teléfono o recepción.",
    informal: ruby("ちょっと[待|ま]って。"),
    neutral: ruby("ちょっと[待|ま]ってください。"),
    formal: ruby("[少々|しょうしょう]お[待|ま]ちください。"),
    note: "La frase formal no es solo más larga: suena claramente de servicio o atención.",
  },
];

export const FORMALITY_MISTAKES: FormalityMistake[] = [
  {
    wrong: ruby("[先生|せんせい]、これ[見|み]る？"),
    correct: ruby("[先生|せんせい]、これ[見|み]ますか。"),
    explanation:
      "La frase casual puede servir con amigos, pero con profesor suena demasiado directa. El salto mínimo correcto es pasar al nivel neutro.",
  },
  {
    wrong: ruby("[友達|ともだち]に[本日|ほんじつ]お[伺|うかが]いします。"),
    correct: ruby("[友達|ともだち]のところに[今日|きょう][行|い]くね。"),
    explanation:
      "No todo necesita sonar alto. Con amigos, usar demasiada formalidad se vuelve artificial o distante.",
  },
  {
    wrong: ruby("お[客様|きゃくさま]、ちょっと[待|ま]って。"),
    correct: ruby("お[客様|きゃくさま]、[少々|しょうしょう]お[待|ま]ちください。"),
    explanation:
      "Con cliente, la versión informal es demasiado brusca. Aquí corresponde una expresión de servicio.",
  },
];

export const KEIGO_BRIDGE: KeigoBridgeCard[] = [
  {
    title: "Polite base",
    jp: "丁寧語",
    desc: "La base cortés. No eleva ni rebaja tanto como 尊敬語・謙譲語.",
    example: ruby("[明日|あした][連絡|れんらく]します。"),
    color: "#CFD8DC",
    accent: "#263238",
  },
  {
    title: "Elevar al otro",
    jp: "尊敬語",
    desc: "Se usa para hablar de la acción del cliente, jefe, profesor o interlocutor.",
    example: ruby("[先生|せんせい]がお[話|はな]しになります。"),
    color: "#D1C4E9",
    accent: "#5B21B6",
  },
  {
    title: "Bajar lo propio",
    jp: "謙譲語",
    desc: "Se usa para hablar humildemente de la acción propia o del lado del hablante.",
    example: ruby("[私|わたし]がご[説明|せつめい]いたします。"),
    color: "#C8E6C9",
    accent: "#2E7D32",
  },
];

export const FORMALITY_CONTEXT_LABELS: Record<"all" | FormalityScenarioContext, string> = {
  all: "Todo",
  friend: "Amigos",
  daily: "Diario",
  teacher: "Profesor",
  work: "Trabajo",
};

export const FORMALITY_MODULE = {
  title: "Formalidad",
  jp: "話し方",
  reading: "はなしかた",
  subtitle: "Informal → neutro → formal alto",
  description:
    "Módulo principal para entender cómo cambia el japonés según la distancia social, con foco especial en la diferencia entre plain form y です・ます.",
  levels: FORMALITY_LEVELS,
  rules: FORMALITY_RULES,
  patterns: FORMALITY_PATTERNS,
  contrasts: FORMALITY_CONTRASTS,
  scenarios: FORMALITY_SCENARIOS,
  mistakes: FORMALITY_MISTAKES,
  keigoBridge: KEIGO_BRIDGE,
  contextLabels: FORMALITY_CONTEXT_LABELS,
} as const;