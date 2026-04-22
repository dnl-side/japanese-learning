// src/data/grammar/formalityRegisterQuiz.ts

import type { RubySegment } from "@/app/components/ui/Ruby";

export type RegisterQuizMode =
  | "identify-register"
  | "transform-register"
  | "fix-register"
  | "choose-natural"
  | "dialogue-shift";

export const REGISTER_QUIZ_MODE_LABELS: Record<RegisterQuizMode, string> = {
  "identify-register": "Identificar registro",
  "transform-register": "Transformar registro",
  "fix-register": "Corregir registro",
  "choose-natural": "Elegir la opción natural",
  "dialogue-shift": "Ajuste en diálogo",
};

export const REGISTER_QUIZ_MODE_DESCRIPTIONS: Record<RegisterQuizMode, string> = {
  "identify-register":
    "Detecta si la frase pertenece al nivel informal, neutro o formal base.",
  "transform-register":
    "Convierte la misma idea al registro pedido sin cambiar el significado principal.",
  "fix-register":
    "Corrige una frase que suena demasiado casual, demasiado rígida o poco adecuada para el contexto.",
  "choose-natural":
    "Elige la opción que mejor suena para la situación, aunque haya otras que no sean completamente imposibles.",
  "dialogue-shift":
    "Ajusta la respuesta al interlocutor y al tono que el diálogo ya viene construyendo.",
};

export type RegisterDifficulty = "base" | "intermedio" | "avanzado";

export const REGISTER_DIFFICULTY_LABELS: Record<RegisterDifficulty, string> = {
  base: "Base",
  intermedio: "Intermedio",
  avanzado: "Avanzado",
};

export type RegisterContext =
  | "friend"
  | "family"
  | "daily"
  | "teacher"
  | "senpai"
  | "work"
  | "customer";

export const REGISTER_CONTEXT_LABELS: Record<RegisterContext, string> = {
  friend: "Amigo",
  family: "Familia",
  daily: "Cotidiano",
  teacher: "Profesor",
  senpai: "Senpai",
  work: "Trabajo",
  customer: "Cliente",
};

export type RegisterLabel = "informal" | "neutral" | "formal-base";

export const REGISTER_LABELS: Record<RegisterLabel, string> = {
  informal: "Informal",
  neutral: "Neutro",
  "formal-base": "Formal base",
};

export type RegisterErrorTag =
  | "copula"
  | "plain-vs-masu"
  | "negative-register"
  | "past-register"
  | "question-tone"
  | "request-tone"
  | "gratitude-tone"
  | "apology-tone"
  | "too-casual"
  | "too-rigid"
  | "register-mismatch"
  | "naturalness"
  | "dialogue-response"
  | "social-distance";

export const REGISTER_ERROR_LABELS: Record<RegisterErrorTag, string> = {
  copula: "Cópula",
  "plain-vs-masu": "Plain vs ます",
  "negative-register": "Negativo",
  "past-register": "Pasado",
  "question-tone": "Tono de pregunta",
  "request-tone": "Tono de petición",
  "gratitude-tone": "Tono de agradecimiento",
  "apology-tone": "Tono de disculpa",
  "too-casual": "Demasiado casual",
  "too-rigid": "Demasiado rígido",
  "register-mismatch": "Registro fuera de contexto",
  naturalness: "Naturalidad",
  "dialogue-response": "Respuesta en diálogo",
  "social-distance": "Distancia social",
};

export const REGISTER_ERROR_FEEDBACK: Record<RegisterErrorTag, string> = {
  copula:
    "Revisa el puente だ / です. Con sustantivos y な-adjetivos, ese cambio marca gran parte del salto de tono.",
  "plain-vs-masu":
    "El contraste central del módulo está en plain form frente a ます. Si dudas, vuelve a mirar diccionario / ます.",
  "negative-register":
    "En el puente base, informal usa ない y neutro usa ません. Esa diferencia cambia mucho la sensación de la frase.",
  "past-register":
    "En pasado, informal usa た y neutro usa ました. No cambies el tiempo por accidente al cambiar el registro.",
  "question-tone":
    "Las preguntas directas cambian mucho con el contexto. いい？ puede sonar bien con amigos, pero no con profesor o cliente.",
  "request-tone":
    "Una petición puede ser correcta gramaticalmente y aun así sonar demasiado directa. Mira quién recibe la frase.",
  "gratitude-tone":
    "ありがとう, ありがとうございます y fórmulas más altas no son intercambiables. Cambian cercanía y distancia.",
  "apology-tone":
    "ごめん, すみません y fórmulas más altas expresan niveles distintos de distancia y seriedad.",
  "too-casual":
    "La frase baja demasiado el tono para la relación social. Aquí hacía falta al menos el nivel neutro.",
  "too-rigid":
    "La frase no está necesariamente mal, pero se siente más rígida o pesada de lo que el contexto pide.",
  "register-mismatch":
    "El problema principal no es la gramática aislada, sino que el registro elegido no coincide con la situación.",
  naturalness:
    "Aquí importa elegir lo que suena más japonés y más natural en contexto, no solo algo que pueda entenderse.",
  "dialogue-response":
    "La respuesta debe heredar el tono del diálogo y del interlocutor, no solo sonar correcta por sí sola.",
  "social-distance":
    "Piensa en la distancia social: amigo, profesor, senpai, cliente o compañero de trabajo no requieren el mismo tono.",
};

export interface RegisterChoice {
  id: string;
  label: string;
  segments?: RubySegment[];
  misconception?: RegisterErrorTag;
  feedback?: string;
}

export interface RegisterQuizQuestion {
  id: string;
  mode: RegisterQuizMode;
  difficulty: RegisterDifficulty;
  context: RegisterContext;
  targetRegister?: RegisterLabel;
  tags: RegisterErrorTag[];
  situation?: string;
  prompt: RubySegment[];
  promptMeta?: {
    sourceRegister?: RegisterLabel;
    targetRegister?: RegisterLabel;
    translation?: string;
    accept?: string[];
  };
  choices: RegisterChoice[];
  correctChoiceId: string;
  explanation: string;
}

export interface RegisterSessionPreset {
  id: string;
  label: string;
  description: string;
  difficulties: RegisterDifficulty[];
  modes: RegisterQuizMode[];
  recommendedCount: number;
}

function ruby(input: string): RubySegment[] {
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

function option(
  id: string,
  label: string,
  segments?: RubySegment[],
  misconception?: RegisterErrorTag,
  feedback?: string,
): RegisterChoice {
  return { id, label, segments, misconception, feedback };
}

export const FORMALITY_REGISTER_SESSION_PRESETS: RegisterSessionPreset[] = [
  {
    id: "base-bridge",
    label: "Puente base",
    description:
      "Consolida el salto entre informal y neutro con copula, presente, negativo y pasado.",
    difficulties: ["base"],
    modes: ["identify-register", "transform-register"],
    recommendedCount: 10,
  },
  {
    id: "situational-core",
    label: "Uso en contexto",
    description:
      "Empieza a decidir el tono correcto según amigo, profesor, trabajo y cliente.",
    difficulties: ["intermedio"],
    modes: ["choose-natural", "fix-register", "transform-register"],
    recommendedCount: 10,
  },
  {
    id: "naturalness-lab",
    label: "Laboratorio de naturalidad",
    description:
      "Trabaja los casos donde varias opciones parecen posibles pero una suena mucho mejor.",
    difficulties: ["avanzado"],
    modes: ["choose-natural", "dialogue-shift", "fix-register"],
    recommendedCount: 8,
  },
  {
    id: "mixed-review",
    label: "Repaso mixto",
    description:
      "Mezcla reconocimiento, transformación, corrección y diálogo para una sesión completa.",
    difficulties: ["base", "intermedio", "avanzado"],
    modes: [
      "identify-register",
      "transform-register",
      "fix-register",
      "choose-natural",
      "dialogue-shift",
    ],
    recommendedCount: 12,
  },
];

export const FORMALITY_REGISTER_QUESTIONS: RegisterQuizQuestion[] = [
  {
    id: "reg-base-001",
    mode: "identify-register",
    difficulty: "base",
    context: "friend",
    targetRegister: "informal",
    tags: ["plain-vs-masu", "negative-register"],
    situation: "Le hablas a un amigo cercano.",
    prompt: ruby("[今日|きょう]は[行|い]かない。"),
    choices: [
      option("informal", "Informal"),
      option(
        "neutral",
        "Neutro",
        undefined,
        "register-mismatch",
        "La frase no usa ます ni です. Aquí el tono es claramente casual.",
      ),
      option(
        "formal-base",
        "Formal base",
        undefined,
        "too-rigid",
        "No hay marcas de distancia alta ni expresiones elevadas.",
      ),
    ],
    correctChoiceId: "informal",
    explanation:
      "行かない es una plain form negativa. En este módulo eso pertenece al nivel informal.",
  },
  {
    id: "reg-base-002",
    mode: "identify-register",
    difficulty: "base",
    context: "daily",
    targetRegister: "neutral",
    tags: ["plain-vs-masu", "negative-register"],
    situation: "Aviso educado pero normal.",
    prompt: ruby("[今日|きょう]は[行|い]きません。"),
    choices: [
      option(
        "informal",
        "Informal",
        undefined,
        "plain-vs-masu",
        "La forma en ません ya sube la frase al nivel neutro.",
      ),
      option("neutral", "Neutro"),
      option(
        "formal-base",
        "Formal base",
        undefined,
        "too-rigid",
        "La frase es educada, pero todavía no tiene señales de subida adicional como 本日 o 少々.",
      ),
    ],
    correctChoiceId: "neutral",
    explanation:
      "行きません marca el nivel cortés base. Sigue siendo una frase cotidiana, no una fórmula alta.",
  },
  {
    id: "reg-base-003",
    mode: "identify-register",
    difficulty: "base",
    context: "friend",
    targetRegister: "informal",
    tags: ["copula"],
    situation: "Hablas con un amigo sobre mañana.",
    prompt: ruby("[明日|あした]は[休|やす]みだ。"),
    choices: [
      option("informal", "Informal"),
      option(
        "neutral",
        "Neutro",
        undefined,
        "copula",
        "だ marca plain style. En neutro esperarías です.",
      ),
      option(
        "formal-base",
        "Formal base",
        undefined,
        "too-rigid",
        "No hay ninguna marca de registro alto aquí; solo plain copula.",
      ),
    ],
    correctChoiceId: "informal",
    explanation:
      "Con sustantivos y な-adjetivos, だ es una de las señales más claras del registro informal.",
  },
  {
    id: "reg-base-004",
    mode: "identify-register",
    difficulty: "base",
    context: "daily",
    targetRegister: "neutral",
    tags: ["copula"],
    situation: "Respuesta educada en conversación normal.",
    prompt: ruby("[明日|あした]は[休|やす]みです。"),
    choices: [
      option(
        "informal",
        "Informal",
        undefined,
        "copula",
        "です ya te saca del registro casual.",
      ),
      option("neutral", "Neutro"),
      option(
        "formal-base",
        "Formal base",
        undefined,
        "naturalness",
        "La frase es educada y simple. Todavía no busca sonar especialmente alta.",
      ),
    ],
    correctChoiceId: "neutral",
    explanation:
      "休みです pertenece al nivel cortés base y sirve para la mayoría de interacciones diarias.",
  },
  {
    id: "reg-base-005",
    mode: "identify-register",
    difficulty: "base",
    context: "friend",
    targetRegister: "informal",
    tags: ["gratitude-tone"],
    situation: "Agradeces algo pequeño a un amigo.",
    prompt: ruby("ありがとう。"),
    choices: [
      option("informal", "Informal"),
      option(
        "neutral",
        "Neutro",
        undefined,
        "gratitude-tone",
        "La forma neutra base sería ありがとうございます。",
      ),
      option(
        "formal-base",
        "Formal base",
        undefined,
        "too-rigid",
        "No hay distancia alta ni énfasis especial en la frase.",
      ),
    ],
    correctChoiceId: "informal",
    explanation:
      "ありがとう funciona muy bien con cercanía. Es correcta, pero no es la forma estándar con distancia social.",
  },
  {
    id: "reg-base-006",
    mode: "identify-register",
    difficulty: "base",
    context: "daily",
    targetRegister: "neutral",
    tags: ["gratitude-tone"],
    situation: "Agradeces de forma educada en conversación normal.",
    prompt: ruby("ありがとうございます。"),
    choices: [
      option(
        "informal",
        "Informal",
        undefined,
        "gratitude-tone",
        "ありがとう sería la versión casual.",
      ),
      option("neutral", "Neutro"),
      option(
        "formal-base",
        "Formal base",
        undefined,
        "naturalness",
        "Es educada, pero no tan marcada como 誠にありがとうございます。",
      ),
    ],
    correctChoiceId: "neutral",
    explanation:
      "ありがとうございます es la cortesía base más útil para agradecer en la vida diaria.",
  },
  {
    id: "reg-base-007",
    mode: "transform-register",
    difficulty: "base",
    context: "daily",
    targetRegister: "neutral",
    tags: ["plain-vs-masu", "negative-register"],
    situation: "Pasa esta frase informal al nivel neutro.",
    prompt: ruby("[今日|きょう]は[行|い]かない。"),
    promptMeta: {
      sourceRegister: "informal",
      targetRegister: "neutral",
      translation: "Hoy no voy.",
      accept: ["今日は行きません。"],
    },
    choices: [
      option("a", "Opción A", ruby("[今日|きょう]は[行|い]きません。")),
      option(
        "b",
        "Opción B",
        ruby("[今日|きょう]は[行|い]かないです。"),
        "naturalness",
        "Se oye en conversación, pero para el puente base del módulo la meta es ません.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[今日|きょう]は[行|い]かなかった。"),
        "past-register",
        "Aquí cambiaste el tiempo: pasó de no-pasado negativo a pasado negativo.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "En el puente base, la forma negativa informal ない pasa a ません en el nivel neutro.",
  },
  {
    id: "reg-base-008",
    mode: "transform-register",
    difficulty: "base",
    context: "friend",
    targetRegister: "informal",
    tags: ["plain-vs-masu", "past-register"],
    situation: "Pasa esta frase neutra al nivel informal.",
    prompt: ruby("[昨日|きのう]その[映画|えいが]を[見|み]ました。"),
    promptMeta: {
      sourceRegister: "neutral",
      targetRegister: "informal",
      translation: "Ayer vi esa película.",
      accept: ["昨日その映画を見た。"],
    },
    choices: [
      option("a", "Opción A", ruby("[昨日|きのう]その[映画|えいが]を[見|み]た。")),
      option(
        "b",
        "Opción B",
        ruby("[昨日|きのう]その[映画|えいが]を[見|み]ます。"),
        "past-register",
        "Cambiaste también el tiempo: ました no corresponde a ます, sino a た.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[昨日|きのう]その[映画|えいが]を[見|み]でした。"),
        "plain-vs-masu",
        "見でした no es una salida válida. El pasado informal del verbo es 見た.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "El pasado afirmativo del nivel neutro en ました vuelve al pasado informal en た.",
  },
  {
    id: "reg-base-009",
    mode: "transform-register",
    difficulty: "base",
    context: "daily",
    targetRegister: "neutral",
    tags: ["copula"],
    situation: "Pasa esta oración nominal al nivel neutro.",
    prompt: ruby("[明日|あした]は[休|やす]みだ。"),
    promptMeta: {
      sourceRegister: "informal",
      targetRegister: "neutral",
      translation: "Mañana es día libre.",
      accept: ["明日は休みです。"],
    },
    choices: [
      option("a", "Opción A", ruby("[明日|あした]は[休|やす]みです。")),
      option(
        "b",
        "Opción B",
        ruby("[明日|あした]は[休|やす]みます。"),
        "copula",
        "Aquí convertiste un sustantivo en verbo. 休み no necesita ます.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[明日|あした]は[休|やす]みでした。"),
        "past-register",
        "La frase original no estaba en pasado. No cambies el tiempo al cambiar el registro.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "Con sustantivos, el salto base es simple: だ pasa a です.",
  },
  {
    id: "reg-base-010",
    mode: "transform-register",
    difficulty: "base",
    context: "friend",
    targetRegister: "informal",
    tags: ["naturalness"],
    situation: "Baja esta frase neutra al nivel informal.",
    prompt: ruby("[今日|きょう]は[寒|さむ]いです。"),
    promptMeta: {
      sourceRegister: "neutral",
      targetRegister: "informal",
      translation: "Hoy hace frío.",
      accept: ["今日は寒い。"],
    },
    choices: [
      option("a", "Opción A", ruby("[今日|きょう]は[寒|さむ]い。")),
      option(
        "b",
        "Opción B",
        ruby("[今日|きょう]は[寒|さむ]いだ。"),
        "copula",
        "Los い-adjetivos no usan だ al final en este tipo de predicación.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[今日|きょう]は[寒|さむ]かった。"),
        "past-register",
        "Cambiaste el tiempo: la frase original era no-pasada.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "Con い-adjetivos, el registro informal suele dejar simplemente la base sin です.",
  },
  {
    id: "reg-base-011",
    mode: "fix-register",
    difficulty: "base",
    context: "teacher",
    targetRegister: "neutral",
    tags: ["question-tone", "too-casual", "social-distance"],
    situation: "Quieres hablar con un profesor y abrir la interacción con un tono mínimo correcto.",
    prompt: ruby("[先生|せんせい]、[今|いま]いい？"),
    choices: [
      option(
        "a",
        "Opción A",
        ruby("[先生|せんせい]、[今|いま]いいですか。"),
      ),
      option(
        "b",
        "Opción B",
        ruby("[先生|せんせい]、[今|いま]いい？"),
        "too-casual",
        "Con profesor suena demasiado directo y cercano.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[先生|せんせい]、[今|いま][少々|しょうしょう]いい？"),
        "naturalness",
        "少々 no arregla una estructura que sigue siendo casual al final.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "Con profesor, el salto mínimo correcto es pasar la pregunta al nivel neutro con いいですか.",
  },
  {
    id: "reg-base-012",
    mode: "choose-natural",
    difficulty: "base",
    context: "friend",
    targetRegister: "informal",
    tags: ["gratitude-tone", "naturalness"],
    situation: "Un amigo te pasó un lápiz por un momento y quieres agradecer de forma natural.",
    prompt: ruby("この[場面|ばめん]でいちばん[自然|しぜん]な[言|い]い[方|かた]を[選|えら]んでください。"),
    choices: [
      option("a", "Opción A", ruby("ありがとう。")),
      option(
        "b",
        "Opción B",
        ruby("ありがとうございます。"),
        "too-rigid",
        "No está mal, pero con un amigo cercano suele sonar más distante de lo necesario.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[誠|まこと]にありがとうございます。"),
        "too-rigid",
        "Aquí el nivel de distancia es demasiado alto para la escena.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "Entre amigos, ありがとう suele ser la opción más natural para un agradecimiento pequeño y directo.",
  },
  {
    id: "reg-int-013",
    mode: "choose-natural",
    difficulty: "intermedio",
    context: "teacher",
    targetRegister: "neutral",
    tags: ["question-tone", "social-distance", "naturalness"],
    situation:
      "Estás en clase y quieres hacerle una pregunta normal a tu profesor, sin sonar ni demasiado casual ni exageradamente alto.",
    prompt: ruby("[先生|せんせい]に[質問|しつもん]を[始|はじ]めるとき、どれがいちばん[自然|しぜん]ですか。"),
    choices: [
      option(
        "a",
        "Opción A",
        ruby("[先生|せんせい]、[今|いま]いいですか。"),
      ),
      option(
        "b",
        "Opción B",
        ruby("[先生|せんせい]、[今|いま]いい？"),
        "too-casual",
        "Con profesor sigue sonando demasiado directo.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[先生|せんせい]、[今|いま]お[時間|じかん]よろしいでしょうか。"),
        "too-rigid",
        "Es correcta, pero para una pregunta normal en clase puede sentirse más alta de lo necesario.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "Aquí la meta no es sonar máximo de formal, sino adecuado. いいですか logra el tono justo para una interacción normal con profesor.",
  },
  {
    id: "reg-int-014",
    mode: "choose-natural",
    difficulty: "intermedio",
    context: "customer",
    targetRegister: "formal-base",
    tags: ["request-tone", "social-distance", "naturalness"],
    situation: "Le pides a un cliente que espere un momento.",
    prompt: ruby("お[客|きゃく][様|さま]に[少|すこ]し[待|ま]ってもらいたいです。"),
    choices: [
      option(
        "a",
        "Opción A",
        ruby("ちょっと[待|ま]って。"),
        "too-casual",
        "Esto baja demasiado el tono para atención a cliente.",
      ),
      option(
        "b",
        "Opción B",
        ruby("ちょっと[待|ま]ってください。"),
        "request-tone",
        "Es entendible, pero en servicio suena menos pulido que la opción esperada.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[少々|しょうしょう]お[待|ま]ちください。"),
      ),
    ],
    correctChoiceId: "c",
    explanation:
      "En trato con cliente, 少々お待ちください es una salida mucho más natural que ちょっと待ってください.",
  },
  {
    id: "reg-int-015",
    mode: "identify-register",
    difficulty: "intermedio",
    context: "work",
    targetRegister: "formal-base",
    tags: ["naturalness", "social-distance"],
    situation: "Mensaje más cuidado en entorno laboral.",
    prompt: ruby("[本日|ほんじつ]、[少々|しょうしょう][遅|おく]れております。"),
    choices: [
      option(
        "informal",
        "Informal",
        undefined,
        "register-mismatch",
        "La frase está lejos de un tono casual.",
      ),
      option(
        "neutral",
        "Neutro",
        undefined,
        "naturalness",
        "Tiene una subida adicional por léxico y tono; ya no es solo です・ます cotidiano.",
      ),
      option("formal-base", "Formal base"),
    ],
    correctChoiceId: "formal-base",
    explanation:
      "本日 y 少々 empujan la frase a un nivel más alto que el neutro cotidiano, aunque todavía no entres en keigo profundo.",
  },
  {
    id: "reg-int-016",
    mode: "fix-register",
    difficulty: "intermedio",
    context: "friend",
    targetRegister: "informal",
    tags: ["too-rigid", "naturalness", "register-mismatch"],
    situation: "Le escribes a un amigo cercano para avisar que llegarás tarde.",
    prompt: ruby("[本日|ほんじつ]、[少々|しょうしょう][遅|おく]れております。"),
    choices: [
      option(
        "a",
        "Opción A",
        ruby("[今日|きょう]ちょっと[遅|おく]れる。"),
      ),
      option(
        "b",
        "Opción B",
        ruby("[今日|きょう]は[少|すこ]し[遅|おく]れます。"),
        "naturalness",
        "Sirve, pero con un amigo cercano todavía suena más distante que la opción casual.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[本日|ほんじつ]、[少々|しょうしょう][遅|おく]れております。"),
        "too-rigid",
        "Para un amigo cercano se siente innecesariamente pesado.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "Con un amigo, la versión casual transmite el mismo contenido sin levantar una distancia innecesaria.",
  },
  {
    id: "reg-int-017",
    mode: "choose-natural",
    difficulty: "intermedio",
    context: "work",
    targetRegister: "neutral",
    tags: ["social-distance", "naturalness"],
    situation:
      "Le avisas a un compañero de trabajo que hoy llegarás un poco tarde. No es un comunicado oficial ni trato con cliente.",
    prompt: ruby("[仕事|しごと]の[相手|あいて]に[遅刻|ちこく]ぎみだと[伝|つた]えます。"),
    choices: [
      option(
        "a",
        "Opción A",
        ruby("[今日|きょう]ちょっと[遅|おく]れる。"),
        "too-casual",
        "Puede sonar demasiado relajado para trabajo si no hay mucha cercanía.",
      ),
      option(
        "b",
        "Opción B",
        ruby("[今日|きょう]は[少|すこ]し[遅|おく]れます。"),
      ),
      option(
        "c",
        "Opción C",
        ruby("[本日|ほんじつ]、[少々|しょうしょう][遅|おく]れております。"),
        "too-rigid",
        "Suena más alto de lo que pide un aviso simple entre compañeros.",
      ),
    ],
    correctChoiceId: "b",
    explanation:
      "En trabajo general, ます suele ser el mejor punto medio entre claridad, cortesía y naturalidad.",
  },
  {
    id: "reg-int-018",
    mode: "transform-register",
    difficulty: "intermedio",
    context: "customer",
    targetRegister: "formal-base",
    tags: ["request-tone", "social-distance"],
    situation: "Sube esta petición al nivel formal base.",
    prompt: ruby("ちょっと[待|ま]ってください。"),
    promptMeta: {
      sourceRegister: "neutral",
      targetRegister: "formal-base",
      translation: "Espere un momento, por favor.",
      accept: ["少々お待ちください。"],
    },
    choices: [
      option("a", "Opción A", ruby("[少々|しょうしょう]お[待|ま]ちください。")),
      option(
        "b",
        "Opción B",
        ruby("ちょっと[待|ま]ってください。"),
        "request-tone",
        "Es correcta como petición educada, pero no sube el tono como pide la situación.",
      ),
      option(
        "c",
        "Opción C",
        ruby("ちょっと[待|ま]って。"),
        "too-casual",
        "Baja la frase en vez de subirla.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "少々お待ちください es la salida esperada cuando quieres sonar más pulido en trato con cliente.",
  },
  {
    id: "reg-int-019",
    mode: "transform-register",
    difficulty: "intermedio",
    context: "teacher",
    targetRegister: "neutral",
    tags: ["question-tone", "too-casual"],
    situation: "Sube esta pregunta casual al nivel neutro.",
    prompt: ruby("[今|いま]いい？"),
    promptMeta: {
      sourceRegister: "informal",
      targetRegister: "neutral",
      translation: "¿Tienes un momento ahora?",
      accept: ["今いいですか。"],
    },
    choices: [
      option("a", "Opción A", ruby("[今|いま]いいですか。")),
      option(
        "b",
        "Opción B",
        ruby("[今|いま]お[時間|じかん]よろしいでしょうか。"),
        "naturalness",
        "No está mal, pero sube más de lo que aquí pide la instrucción de pasar solo a neutro.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[今|いま]いい？"),
        "too-casual",
        "La opción no cambia el registro original.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "La transformación pedida es informal → neutro. El salto mínimo correcto es いいですか.",
  },
  {
    id: "reg-int-020",
    mode: "choose-natural",
    difficulty: "intermedio",
    context: "teacher",
    targetRegister: "neutral",
    tags: ["apology-tone", "naturalness", "social-distance"],
    situation: "Interrumpes un momento a tu profesor para hacer una consulta rápida.",
    prompt: ruby("この[場面|ばめん]でいちばん[自然|しぜん]な[謝|あやま]り[方|かた]を[選|えら]んでください。"),
    choices: [
      option(
        "a",
        "Opción A",
        ruby("ごめん。"),
        "too-casual",
        "Con profesor suena demasiado cercano.",
      ),
      option(
        "b",
        "Opción B",
        ruby("すみません。"),
      ),
      option(
        "c",
        "Opción C",
        ruby("[申|もう]し[訳|わけ]ありません。"),
        "too-rigid",
        "Es correcta, pero para una interrupción pequeña puede sentirse más pesada de lo necesario.",
      ),
    ],
    correctChoiceId: "b",
    explanation:
      "すみません cubre muy bien disculpa ligera y llamada de atención con un nivel adecuado para profesor.",
  },
  {
    id: "reg-int-021",
    mode: "fix-register",
    difficulty: "intermedio",
    context: "customer",
    targetRegister: "formal-base",
    tags: ["request-tone", "too-casual", "social-distance"],
    situation: "La frase va dirigida a un cliente en recepción.",
    prompt: ruby("ちょっと[待|ま]ってください。"),
    choices: [
      option(
        "a",
        "Opción A",
        ruby("[少々|しょうしょう]お[待|ま]ちください。"),
      ),
      option(
        "b",
        "Opción B",
        ruby("ちょっと[待|ま]ってください。"),
        "request-tone",
        "Funciona como petición educada, pero en recepción queda menos pulida.",
      ),
      option(
        "c",
        "Opción C",
        ruby("ちょっと[待|ま]って。"),
        "too-casual",
        "Esto sí rompe claramente el registro esperado.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "En atención, el ajuste no es solo gramatical: la naturalidad profesional empuja a usar 少々お待ちください.",
  },
  {
    id: "reg-int-022",
    mode: "choose-natural",
    difficulty: "intermedio",
    context: "daily",
    targetRegister: "neutral",
    tags: ["naturalness", "social-distance"],
    situation: "Le dices a alguien con quien no tienes mucha confianza que le escribirás después.",
    prompt: ruby("あとで[連絡|れんらく]すると[伝|つた]えたいです。"),
    choices: [
      option(
        "a",
        "Opción A",
        ruby("[後|あと]で[連絡|れんらく]するね。"),
        "too-casual",
        "El ね casual baja bastante la distancia.",
      ),
      option(
        "b",
        "Opción B",
        ruby("[後|あと]で[連絡|れんらく]します。"),
      ),
      option(
        "c",
        "Opción C",
        ruby("[後|のち]ほどご[連絡|れんらく]いたします。"),
        "too-rigid",
        "Aquí ya subes al terreno formal base o de trabajo.",
      ),
    ],
    correctChoiceId: "b",
    explanation:
      "Cuando no hace falta ni cercanía fuerte ni formalidad alta, 連絡します suele ser la mejor salida.",
  },
  {
    id: "reg-int-023",
    mode: "choose-natural",
    difficulty: "intermedio",
    context: "friend",
    targetRegister: "informal",
    tags: ["apology-tone", "naturalness"],
    situation: "Chocaste sin querer con un amigo en el pasillo.",
    prompt: ruby("この[場面|ばめん]でいちばん[自然|しぜん]な[言|い]い[方|かた]を[選|えら]んでください。"),
    choices: [
      option("a", "Opción A", ruby("ごめん。")),
      option(
        "b",
        "Opción B",
        ruby("すみません。"),
        "naturalness",
        "No está mal, pero con un amigo cercano suele sentirse un poco más distante.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[申|もう]し[訳|わけ]ありません。"),
        "too-rigid",
        "El nivel de peso es excesivo para esta escena pequeña y cercana.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "Con un amigo y por una molestia pequeña, ごめん es la opción más natural.",
  },
  {
    id: "reg-int-024",
    mode: "choose-natural",
    difficulty: "intermedio",
    context: "work",
    targetRegister: "formal-base",
    tags: ["social-distance", "naturalness"],
    situation: "Preparas un aviso breve para un cartel o anuncio interno visible al público.",
    prompt: ruby("[今日|きょう]は[休|やす]みだ、という[内容|ないよう]を[少|すこ]し[改|あらた]まって[書|か]きたいです。"),
    choices: [
      option(
        "a",
        "Opción A",
        ruby("[今日|きょう]は[休|やす]みだ。"),
        "too-casual",
        "Para un aviso visible, esto suena demasiado plano y cercano.",
      ),
      option(
        "b",
        "Opción B",
        ruby("[今日|きょう]は[休|やす]みです。"),
        "naturalness",
        "Es correcta, pero no aporta el pequeño extra de formalidad que aquí sí se busca.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[本日|ほんじつ]は[休|やす]みです。"),
      ),
    ],
    correctChoiceId: "c",
    explanation:
      "本日 mantiene el contenido simple pero sube la presentación hacia un registro más cuidado.",
  },
  {
    id: "reg-int-025",
    mode: "choose-natural",
    difficulty: "intermedio",
    context: "senpai",
    targetRegister: "neutral",
    tags: ["social-distance", "naturalness"],
    situation: "Hablas con un senpai con quien tienes confianza normal, pero no tanta como para usar registro totalmente casual.",
    prompt: ruby("[今|いま]、[少|すこ]し[話|はな]せるか[聞|き]きたいです。"),
    choices: [
      option(
        "a",
        "Opción A",
        ruby("[今|いま]いい？"),
        "too-casual",
        "Puede sonar demasiado directo si la relación no es tan cercana.",
      ),
      option(
        "b",
        "Opción B",
        ruby("[今|いま]いいですか。"),
      ),
      option(
        "c",
        "Opción C",
        ruby("[今|いま]お[時間|じかん]よろしいでしょうか。"),
        "too-rigid",
        "No está mal, pero para un senpai con trato diario puede sentirse demasiado alto.",
      ),
    ],
    correctChoiceId: "b",
    explanation:
      "Con un senpai, muchas veces el neutro bien llevado es el punto más natural.",
  },
  {
    id: "reg-int-026",
    mode: "transform-register",
    difficulty: "intermedio",
    context: "work",
    targetRegister: "formal-base",
    tags: ["naturalness", "social-distance"],
    situation: "Sube este aviso neutro a un tono más cuidado, sin entrar todavía a keigo profundo.",
    prompt: ruby("[今日|きょう]は[少|すこ]し[遅|おく]れます。"),
    promptMeta: {
      sourceRegister: "neutral",
      targetRegister: "formal-base",
      translation: "Hoy llegaré un poco tarde.",
      accept: ["本日、少々遅れております。"],
    },
    choices: [
      option("a", "Opción A", ruby("[本日|ほんじつ]、[少々|しょうしょう][遅|おく]れております。")),
      option(
        "b",
        "Opción B",
        ruby("[今日|きょう]ちょっと[遅|おく]れる。"),
        "too-casual",
        "Aquí bajas el tono en vez de subirlo.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[今日|きょう]は[少|すこ]し[遅|おく]れます。"),
        "naturalness",
        "Esta es la frase de origen. Sigue en neutro, no en formal base.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "El cambio aquí se apoya más en léxico y presentación que en una sola terminación verbal.",
  },
  {
    id: "reg-adv-027",
    mode: "choose-natural",
    difficulty: "avanzado",
    context: "teacher",
    targetRegister: "formal-base",
    tags: ["question-tone", "social-distance", "naturalness"],
    situation:
      "Vas a interrumpir a un profesor al que no conoces bien y quieres sonar especialmente cuidado.",
    prompt: ruby("この[場面|ばめん]では、どれがいちばんふさわしいですか。"),
    choices: [
      option(
        "a",
        "Opción A",
        ruby("[先生|せんせい]、[今|いま]いい？"),
        "too-casual",
        "La cercanía que transmite no coincide con la situación.",
      ),
      option(
        "b",
        "Opción B",
        ruby("[先生|せんせい]、[今|いま]いいですか。"),
        "naturalness",
        "Es correcta, pero la situación pide un poco más de cuidado todavía.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[先生|せんせい]、[今|いま]お[時間|じかん]よろしいでしょうか。"),
      ),
    ],
    correctChoiceId: "c",
    explanation:
      "Cuando la distancia social es mayor y además estás interrumpiendo, よろしいでしょうか da un tono más apropiado.",
  },
  {
    id: "reg-adv-028",
    mode: "choose-natural",
    difficulty: "avanzado",
    context: "daily",
    targetRegister: "neutral",
    tags: ["naturalness", "too-rigid"],
    situation:
      "En una tienda normal preguntas si aceptan tarjeta. Quieres sonar correcto, pero no convertirlo en una frase innecesariamente pesada.",
    prompt: ruby("カードが[使|つか]えるか[聞|き]きます。"),
    choices: [
      option(
        "a",
        "Opción A",
        ruby("カードは[使|つか]えますか。"),
      ),
      option(
        "b",
        "Opción B",
        ruby("カード、[使|つか]える？"),
        "too-casual",
        "Para una tienda normal, esto baja demasiado el tono.",
      ),
      option(
        "c",
        "Opción C",
        ruby("カードは[使用|しよう]できますでしょうか。"),
        "too-rigid",
        "Suena innecesariamente pesado para una consulta cotidiana simple.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "Una gran parte de la naturalidad en japonés está en no sobrecargar una situación cotidiana con formalidad excesiva.",
  },
  {
    id: "reg-adv-029",
    mode: "fix-register",
    difficulty: "avanzado",
    context: "family",
    targetRegister: "informal",
    tags: ["too-rigid", "register-mismatch", "naturalness"],
    situation: "Llegas tarde a casa y te disculpas con tu familia.",
    prompt: ruby("[申|もう]し[訳|わけ]ありません。"),
    choices: [
      option(
        "a",
        "Opción A",
        ruby("ごめん。"),
      ),
      option(
        "b",
        "Opción B",
        ruby("すみません。"),
        "naturalness",
        "Podría funcionar, pero sigue sonando más distante que la opción esperable en casa.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[申|もう]し[訳|わけ]ありません。"),
        "too-rigid",
        "El peso y la distancia no encajan bien con un entorno familiar cercano.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "Aquí el valor no está en sonar alto, sino en sonar humano y cercano al contexto familiar.",
  },
  {
    id: "reg-adv-030",
    mode: "choose-natural",
    difficulty: "avanzado",
    context: "teacher",
    targetRegister: "neutral",
    tags: ["apology-tone", "naturalness"],
    situation:
      "Llegas a la oficina del profesor con una consulta pequeña. Quieres abrir la interacción con algo natural, no demasiado bajo ni demasiado dramático.",
    prompt: ruby("[研究室|けんきゅうしつ]の[前|まえ]で[声|こえ]をかけます。"),
    choices: [
      option(
        "a",
        "Opción A",
        ruby("ごめん。"),
        "too-casual",
        "No encaja con la distancia social.",
      ),
      option(
        "b",
        "Opción B",
        ruby("すみません。"),
      ),
      option(
        "c",
        "Opción C",
        ruby("[申|もう]し[訳|わけ]ありません。"),
        "too-rigid",
        "La frase se siente demasiado pesada para una consulta pequeña.",
      ),
    ],
    correctChoiceId: "b",
    explanation:
      "La naturalidad real muchas veces está en elegir el nivel suficiente, no el más alto disponible.",
  },
  {
    id: "reg-adv-031",
    mode: "identify-register",
    difficulty: "avanzado",
    context: "customer",
    targetRegister: "formal-base",
    tags: ["request-tone", "social-distance"],
    situation: "Frase típica de atención.",
    prompt: ruby("こちらで[少々|しょうしょう]お[待|ま]ちください。"),
    choices: [
      option(
        "informal",
        "Informal",
        undefined,
        "register-mismatch",
        "No corresponde a un tono casual.",
      ),
      option(
        "neutral",
        "Neutro",
        undefined,
        "naturalness",
        "La frase está por encima del simple 〜てください cotidiano.",
      ),
      option("formal-base", "Formal base"),
    ],
    correctChoiceId: "formal-base",
    explanation:
      "少々 y la forma general de presentación la ubican en un nivel más alto que el neutro estándar.",
  },
  {
    id: "reg-adv-032",
    mode: "choose-natural",
    difficulty: "avanzado",
    context: "friend",
    targetRegister: "informal",
    tags: ["too-rigid", "naturalness"],
    situation:
      "Tu amigo te pregunta si después pueden hablar un momento. Respondes de forma natural y cercana.",
    prompt: ruby("[友|とも]だちに『あとで[少|すこ]し[話|はな]せる？』と[聞|き]かれました。"),
    choices: [
      option("a", "Opción A", ruby("うん、いいよ。")),
      option(
        "b",
        "Opción B",
        ruby("はい、いいです。"),
        "naturalness",
        "No está mal, pero se siente menos cercano que la opción casual esperable entre amigos.",
      ),
      option(
        "c",
        "Opción C",
        ruby("はい、どうぞ。"),
        "too-rigid",
        "Aquí la respuesta suena más institucional que amistosa.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "En diálogo, la mejor respuesta no solo coincide con la gramática, sino también con el vínculo entre las personas.",
  },
  {
    id: "reg-adv-033",
    mode: "dialogue-shift",
    difficulty: "avanzado",
    context: "teacher",
    targetRegister: "formal-base",
    tags: ["dialogue-response", "social-distance", "question-tone"],
    situation: "Un profesor al que no conoces mucho te recibe después de que le dijiste: 先生、今お時間よろしいでしょうか。",
    prompt: ruby("[先生|せんせい]からの[返事|へんじ]として、いちばん[自然|しぜん]なのはどれですか。"),
    choices: [
      option(
        "a",
        "Opción A",
        ruby("うん、いいよ。"),
        "dialogue-response",
        "No es imposible, pero rompe el tono cuidado que el diálogo viene construyendo.",
      ),
      option(
        "b",
        "Opción B",
        ruby("はい、どうぞ。"),
      ),
      option(
        "c",
        "Opción C",
        ruby("いい。"),
        "too-casual",
        "La respuesta cae demasiado en un diálogo ya elevado.",
      ),
    ],
    correctChoiceId: "b",
    explanation:
      "En diálogos cuidados, la respuesta también suele mantener una línea compatible con el tono ya abierto.",
  },
  {
    id: "reg-adv-034",
    mode: "choose-natural",
    difficulty: "avanzado",
    context: "work",
    targetRegister: "neutral",
    tags: ["naturalness", "too-rigid"],
    situation:
      "En una conversación normal con un compañero de otra área quieres preguntar si ahora tiene un momento. No es cliente ni correo, solo conversación presencial de oficina.",
    prompt: ruby("[仕事|しごと]の[場|ば]で[声|こえ]をかけます。"),
    choices: [
      option(
        "a",
        "Opción A",
        ruby("[今|いま]いいですか。"),
      ),
      option(
        "b",
        "Opción B",
        ruby("[今|いま]いい？"),
        "too-casual",
        "Si no hay mucha cercanía, puede sonar muy relajado.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[今|いま]お[時間|じかん]よろしいでしょうか。"),
        "too-rigid",
        "Es válida, pero para una interacción presencial normal puede sentirse más alta de lo necesario.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "En oficina cotidiana, el neutro bien usado suele sonar más natural que el intento de elevar todo.",
  },
  {
    id: "reg-adv-035",
    mode: "choose-natural",
    difficulty: "avanzado",
    context: "customer",
    targetRegister: "formal-base",
    tags: ["apology-tone", "social-distance", "naturalness"],
    situation:
      "Un cliente esperó un poco más de lo que prometiste. No es una tragedia grande, pero sí quieres pedir disculpas con más peso que un simple すみません.",
    prompt: ruby("お[客|きゃく][様|さま]に[一言|ひとこと][謝|あやま]ります。"),
    choices: [
      option(
        "a",
        "Opción A",
        ruby("すみません。"),
        "naturalness",
        "No está totalmente mal, pero aquí la situación pide un poco más de gravedad y distancia.",
      ),
      option(
        "b",
        "Opción B",
        ruby("ごめん。"),
        "too-casual",
        "Eso sí rompe completamente el registro frente a cliente.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[申|もう]し[訳|わけ]ありません。"),
      ),
    ],
    correctChoiceId: "c",
    explanation:
      "Cuando la escena pide más peso, 申し訳ありません sube adecuadamente la disculpa sin entrar todavía en análisis de keigo profundo.",
  },
  {
    id: "reg-adv-036",
    mode: "dialogue-shift",
    difficulty: "avanzado",
    context: "friend",
    targetRegister: "informal",
    tags: ["dialogue-response", "naturalness", "too-rigid"],
    situation: "Tu amigo te escribe: 今日ちょっと遅れる。 Tú respondes algo breve y natural.",
    prompt: ruby("この[流|なが]れに[続|つづ]く[返事|へんじ]として、いちばん[自然|しぜん]なのはどれですか。"),
    choices: [
      option("a", "Opción A", ruby("わかった。")),
      option(
        "b",
        "Opción B",
        ruby("わかりました。"),
        "naturalness",
        "Es entendible, pero con un amigo cercano suele sentirse más distante.",
      ),
      option(
        "c",
        "Opción C",
        ruby("かしこまりました。"),
        "too-rigid",
        "Eso salta claramente a un tono de servicio o atención.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "La naturalidad del registro también se ve en respuestas cortas: la mejor opción hereda cercanía y tono del mensaje recibido.",
  },
  {
    id: "reg-adv-037",
    mode: "fix-register",
    difficulty: "avanzado",
    context: "daily",
    targetRegister: "neutral",
    tags: ["register-mismatch", "naturalness"],
    situation: "Hablas con alguien a quien no conoces mucho en una situación normal de la vida diaria.",
    prompt: ruby("[今日|きょう]ちょっと[遅|おく]れる。"),
    choices: [
      option(
        "a",
        "Opción A",
        ruby("[今日|きょう]は[少|すこ]し[遅|おく]れます。"),
      ),
      option(
        "b",
        "Opción B",
        ruby("[今日|きょう]ちょっと[遅|おく]れる。"),
        "too-casual",
        "La relación no permite tanta cercanía de entrada.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[本日|ほんじつ]、[少々|しょうしょう][遅|おく]れております。"),
        "too-rigid",
        "Sube demasiado para una interacción diaria corriente.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "Aquí el objetivo es encontrar el punto medio correcto: ni casual de más ni rígido de más.",
  },
  {
    id: "reg-adv-038",
    mode: "choose-natural",
    difficulty: "avanzado",
    context: "friend",
    targetRegister: "informal",
    tags: ["too-rigid", "gratitude-tone", "naturalness"],
    situation: "Tu amigo te ayudó a subir una caja pesada a tu casa.",
    prompt: ruby("この[場面|ばめん]で、いちばん[自然|しぜん]な[感謝|かんしゃ]はどれですか。"),
    choices: [
      option("a", "Opción A", ruby("ほんとうにありがとう。")),
      option(
        "b",
        "Opción B",
        ruby("ほんとうにありがとうございます。"),
        "naturalness",
        "Puede funcionar, pero se siente más distante de lo que el vínculo pide.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[誠|まこと]にありがとうございます。"),
        "too-rigid",
        "Eso cambia demasiado la temperatura emocional de la escena.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "En cercanía, reforzar el agradecimiento con ほんとうに suena natural sin abandonar el registro informal.",
  },
  {
    id: "reg-adv-039",
    mode: "choose-natural",
    difficulty: "avanzado",
    context: "work",
    targetRegister: "formal-base",
    tags: ["request-tone", "naturalness", "social-distance"],
    situation:
      "Vas a iniciar una reunión y pides unos segundos de espera a varias personas. Quieres un tono un poco más cuidado que el neutro llano.",
    prompt: ruby("[会議|かいぎ]の[開始|かいし]を[少|すこ]し[待|ま]ってもらいます。"),
    choices: [
      option(
        "a",
        "Opción A",
        ruby("ちょっと[待|ま]ってください。"),
        "request-tone",
        "Se entiende, pero queda demasiado simple para abrir una reunión.",
      ),
      option(
        "b",
        "Opción B",
        ruby("[少々|しょうしょう]お[待|ま]ちください。"),
      ),
      option(
        "c",
        "Opción C",
        ruby("ちょっと[待|ま]って。"),
        "too-casual",
        "Eso baja demasiado el tono para una situación grupal de trabajo.",
      ),
    ],
    correctChoiceId: "b",
    explanation:
      "Aunque la diferencia parezca pequeña, 少々お待ちください cambia mucho la impresión de profesionalidad.",
  },
  {
    id: "reg-adv-040",
    mode: "dialogue-shift",
    difficulty: "avanzado",
    context: "senpai",
    targetRegister: "neutral",
    tags: ["dialogue-response", "social-distance", "naturalness"],
    situation:
      "Tu senpai te pregunta en el trabajo: 今いいですか。 Quieres responder con el mismo nivel general del intercambio.",
    prompt: ruby("この[呼|よ]びかけへの[返事|へんじ]として、どれがいちばん[自然|しぜん]ですか。"),
    choices: [
      option(
        "a",
        "Opción A",
        ruby("はい、[大丈夫|だいじょうぶ]です。"),
      ),
      option(
        "b",
        "Opción B",
        ruby("うん、いいよ。"),
        "too-casual",
        "Puede sentirse demasiado relajado para la relación y el entorno.",
      ),
      option(
        "c",
        "Opción C",
        ruby("はい、どうぞ。"),
        "naturalness",
        "No es imposible, pero aquí suena menos directo que responder que sí puedes atender ahora.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "Una buena respuesta mantiene el tono del diálogo y responde exactamente a lo que el otro preguntó.",
  },
];

export function getRegisterQuizByMode(mode: RegisterQuizMode) {
  return FORMALITY_REGISTER_QUESTIONS.filter((question) => question.mode === mode);
}

export function getRegisterQuizByDifficulty(difficulty: RegisterDifficulty) {
  return FORMALITY_REGISTER_QUESTIONS.filter(
    (question) => question.difficulty === difficulty,
  );
}

export function getRegisterQuizByContext(context: RegisterContext) {
  return FORMALITY_REGISTER_QUESTIONS.filter((question) => question.context === context);
}
