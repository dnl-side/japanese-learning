// src/data/grammar/formalityKeigoQuiz.ts

import type { RubySegment } from "@/app/components/ui/Ruby";

export type KeigoQuizMode =
  | "choose-keigo-type"
  | "choose-natural"
  | "fix-keigo"
  | "fixed-phrase"
  | "dialogue-keigo";

export const KEIGO_QUIZ_MODE_LABELS: Record<KeigoQuizMode, string> = {
  "choose-keigo-type": "Elegir tipo de keigo",
  "choose-natural": "Elegir la opción natural",
  "fix-keigo": "Corregir keigo",
  "fixed-phrase": "Frases fijas",
  "dialogue-keigo": "Keigo en diálogo",
};

export const KEIGO_QUIZ_MODE_DESCRIPTIONS: Record<KeigoQuizMode, string> = {
  "choose-keigo-type":
    "Decide si la situación pide 丁寧語, 尊敬語, 謙譲語 o una frase fija de servicio.",
  "choose-natural":
    "Elige la forma que mejor encaja según quién hace la acción y cuál es la distancia social.",
  "fix-keigo":
    "Corrige una frase que usa la dirección equivocada, un verbo especial incorrecto o un exceso de keigo.",
  "fixed-phrase":
    "Selecciona la fórmula más natural para teléfono, email, atención o trabajo.",
  "dialogue-keigo":
    "Mantén el tono correcto dentro de una interacción real y responde según el interlocutor.",
};

export type KeigoDifficulty = "base" | "intermedio" | "avanzado";

export const KEIGO_DIFFICULTY_LABELS: Record<KeigoDifficulty, string> = {
  base: "Base",
  intermedio: "Intermedio",
  avanzado: "Avanzado",
};

export type KeigoQuizContext =
  | "general"
  | "trabajo"
  | "telefono"
  | "email"
  | "tienda";

export const KEIGO_CONTEXT_LABELS: Record<KeigoQuizContext, string> = {
  general: "General",
  trabajo: "Trabajo",
  telefono: "Teléfono",
  email: "Email",
  tienda: "Tienda",
};

export type KeigoLabel = "teineigo" | "sonkeigo" | "kenjougo" | "fixed";

export const KEIGO_LABELS: Record<KeigoLabel, string> = {
  teineigo: "丁寧語",
  sonkeigo: "尊敬語",
  kenjougo: "謙譲語",
  fixed: "定型表現",
};

export type KeigoErrorTag =
  | "actor-direction"
  | "sonkeigo-vs-kenjougo"
  | "special-verb"
  | "pattern-choice"
  | "fixed-phrase"
  | "too-plain"
  | "too-high"
  | "double-keigo"
  | "context-mismatch"
  | "telephone-etiquette"
  | "email-etiquette"
  | "service-language"
  | "in-group-out-group"
  | "naturalness"
  | "dialogue-response";

export const KEIGO_ERROR_LABELS: Record<KeigoErrorTag, string> = {
  "actor-direction": "Dirección de la acción",
  "sonkeigo-vs-kenjougo": "尊敬語 vs 謙譲語",
  "special-verb": "Verbo especial",
  "pattern-choice": "Patrón productivo",
  "fixed-phrase": "Frase fija",
  "too-plain": "Demasiado simple",
  "too-high": "Demasiado alto",
  "double-keigo": "Doble keigo",
  "context-mismatch": "Contexto",
  "telephone-etiquette": "Etiqueta telefónica",
  "email-etiquette": "Etiqueta de email",
  "service-language": "Lenguaje de servicio",
  "in-group-out-group": "Dentro vs fuera del grupo",
  naturalness: "Naturalidad",
  "dialogue-response": "Respuesta en diálogo",
};

export const KEIGO_ERROR_FEEDBACK: Record<KeigoErrorTag, string> = {
  "actor-direction":
    "En keigo, la primera pregunta no es la conjugación sino quién hace la acción. Si la acción es del cliente, jefe o interlocutor, suele ir en 尊敬語. Si es tuya o de tu lado hacia afuera, suele ir en 謙譲語.",
  "sonkeigo-vs-kenjougo":
    "No mezcles elevar al otro con bajar lo propio. 尊敬語 sube a la otra parte; 謙譲語 baja tu lado para mostrar respeto.",
  "special-verb":
    "Muchos verbos frecuentes no se resuelven solo con una fórmula. Hay pares que conviene memorizar como いらっしゃる / 参る, ご覧になる / 拝見する, おっしゃる / 申す.",
  "pattern-choice":
    "Los patrones お / ご + raíz + になります y お / ご + raíz + します ayudan mucho, pero no sustituyen a los verbos especiales más comunes.",
  "fixed-phrase":
    "Las frases fijas de trabajo, teléfono, tienda y email funcionan como unidades completas. En estos casos importa tanto memorizar la expresión como saber cuándo usarla.",
  "too-plain":
    "La opción elegida puede entenderse, pero queda demasiado neutra o demasiado simple para el contexto social.",
  "too-high":
    "A veces la frase no está mal, pero suena más pesada o más de servicio de lo que la escena realmente pide.",
  "double-keigo":
    "Una forma ya respetuosa no necesita otra capa extra. En keigo, más alto no siempre significa mejor.",
  "context-mismatch":
    "Piensa en el entorno: trabajo, teléfono, tienda o email no activan el mismo tipo de lenguaje.",
  "telephone-etiquette":
    "Al teléfono suelen aparecer fórmulas muy estables como 少々お待ちください o ただいま担当者をお呼びいたします. La naturalidad aquí importa mucho.",
  "email-etiquette":
    "En email profesional hay aperturas y cierres casi fijos. Elegir la fórmula correcta pesa más que improvisar una frase libre.",
  "service-language":
    "Atención, tienda y recepción tienen un tono reconocible. Algunas expresiones suenan especialmente naturales en servicio, como いらっしゃいませ, かしこまりました o こちらでございます.",
  "in-group-out-group":
    "Cuando hablas con alguien de fuera, las personas de tu empresa o de tu lado suelen bajar de nivel con 謙譲語. Ese contraste es muy importante en keigo real.",
  naturalness:
    "Aquí no basta con una frase comprensible. La meta es elegir la opción que suena más japonesa y más natural para la escena.",
  "dialogue-response":
    "La respuesta debe heredar el tono del intercambio y respetar quién habla, a quién responde y qué papel ocupa cada persona.",
};

export interface KeigoChoice {
  id: string;
  label: string;
  segments?: RubySegment[];
  misconception?: KeigoErrorTag;
  feedback?: string;
}

export interface KeigoQuizQuestion {
  id: string;
  mode: KeigoQuizMode;
  difficulty: KeigoDifficulty;
  context: KeigoQuizContext;
  targetLabel?: KeigoLabel;
  tags: KeigoErrorTag[];
  situation?: string;
  prompt: RubySegment[];
  promptMeta?: {
    sourceLabel?: KeigoLabel;
    targetLabel?: KeigoLabel;
    translation?: string;
    accept?: string[];
  };
  choices: KeigoChoice[];
  correctChoiceId: string;
  explanation: string;
}

export interface KeigoSessionPreset {
  id: string;
  label: string;
  description: string;
  difficulties: KeigoDifficulty[];
  modes: KeigoQuizMode[];
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
  misconception?: KeigoErrorTag,
  feedback?: string,
): KeigoChoice {
  return { id, label, segments, misconception, feedback };
}

export const FORMALITY_KEIGO_SESSION_PRESETS: KeigoSessionPreset[] = [
  {
    id: "keigo-foundation",
    label: "Base de dirección",
    description:
      "Aprende a decidir quién hace la acción y si el caso pide 丁寧語, 尊敬語, 謙譲語 o una frase fija.",
    difficulties: ["base"],
    modes: ["choose-keigo-type", "choose-natural", "fixed-phrase"],
    recommendedCount: 10,
  },
  {
    id: "keigo-core-verbs",
    label: "Verbos núcleo",
    description:
      "Trabaja los pares más frecuentes, el contraste entre 尊敬語 y 謙譲語 y los errores clásicos con verbos especiales.",
    difficulties: ["intermedio"],
    modes: ["choose-natural", "fix-keigo", "choose-keigo-type"],
    recommendedCount: 10,
  },
  {
    id: "business-keigo",
    label: "Keigo de trabajo",
    description:
      "Refuerza teléfono, email, atención y lenguaje de servicio con fórmulas naturales y respuestas de uso real.",
    difficulties: ["intermedio", "avanzado"],
    modes: ["fixed-phrase", "choose-natural", "dialogue-keigo"],
    recommendedCount: 10,
  },
  {
    id: "keigo-naturalness-lab",
    label: "Laboratorio de naturalidad",
    description:
      "Practica los casos donde varias opciones parecen posibles, pero solo una suena claramente mejor en contexto.",
    difficulties: ["avanzado"],
    modes: ["choose-natural", "fix-keigo", "dialogue-keigo"],
    recommendedCount: 8,
  },
  {
    id: "keigo-mixed-review",
    label: "Repaso mixto",
    description:
      "Mezcla dirección de la acción, verbos especiales, frases fijas y diálogo para una sesión completa.",
    difficulties: ["base", "intermedio", "avanzado"],
    modes: [
      "choose-keigo-type",
      "choose-natural",
      "fix-keigo",
      "fixed-phrase",
      "dialogue-keigo",
    ],
    recommendedCount: 12,
  },
];

export const FORMALITY_KEIGO_QUESTIONS: KeigoQuizQuestion[] = [
  {
    id: "kei-base-001",
    mode: "choose-keigo-type",
    difficulty: "base",
    context: "general",
    targetLabel: "sonkeigo",
    tags: ["actor-direction", "sonkeigo-vs-kenjougo"],
    situation: "Hablas de la acción del cliente o de un profesor.",
    prompt: ruby("[田中|たなか]さまはもういらっしゃいました。"),
    choices: [
      option("a", "丁寧語"),
      option("b", "尊敬語"),
      option(
        "c",
        "謙譲語",
        undefined,
        "sonkeigo-vs-kenjougo",
        "Aquí no estás bajando una acción tuya; estás elevando la acción del cliente.",
      ),
      option("d", "定型表現"),
    ],
    correctChoiceId: "b",
    explanation:
      "いらっしゃいました eleva la acción de la otra persona. Por eso este caso pertenece a 尊敬語.",
  },
  {
    id: "kei-base-002",
    mode: "choose-keigo-type",
    difficulty: "base",
    context: "trabajo",
    targetLabel: "kenjougo",
    tags: ["actor-direction", "sonkeigo-vs-kenjougo"],
    situation: "Hablas de una acción tuya hacia un cliente.",
    prompt: ruby("[私|わたし]がご[案内|あんない]します。"),
    choices: [
      option("a", "丁寧語"),
      option("b", "尊敬語"),
      option("c", "謙譲語"),
      option(
        "d",
        "定型表現",
        undefined,
        "context-mismatch",
        "No es solo una fórmula fija: es una acción propia expresada humildemente.",
      ),
    ],
    correctChoiceId: "c",
    explanation:
      "Cuando la acción es tuya o de tu lado hacia afuera, lo natural es usar 謙譲語.",
  },
  {
    id: "kei-base-003",
    mode: "choose-keigo-type",
    difficulty: "base",
    context: "general",
    targetLabel: "teineigo",
    tags: ["too-plain", "context-mismatch"],
    situation: "Necesitas solo una forma formal base, sin honoríficos especiales.",
    prompt: ruby("[先生|せんせい]は[今日|きょう]、[学校|がっこう]に[来|き]ます。"),
    choices: [
      option("a", "丁寧語"),
      option(
        "b",
        "尊敬語",
        undefined,
        "too-high",
        "来ます es solo la forma cortés base; todavía no eleva con una forma especial como いらっしゃいます.",
      ),
      option(
        "c",
        "謙譲語",
        undefined,
        "actor-direction",
        "No estás bajando una acción propia.",
      ),
      option("d", "定型表現"),
    ],
    correctChoiceId: "a",
    explanation:
      "来ます es cortesía base. Sube el tono respecto al estilo simple, pero no entra todavía en 尊敬語 o 謙譲語.",
  },
  {
    id: "kei-base-004",
    mode: "choose-keigo-type",
    difficulty: "base",
    context: "tienda",
    targetLabel: "fixed",
    tags: ["fixed-phrase", "service-language"],
    situation: "Recibes al cliente en una tienda o restaurante.",
    prompt: ruby("いらっしゃいませ。"),
    choices: [
      option("a", "丁寧語"),
      option("b", "尊敬語"),
      option("c", "謙譲語"),
      option("d", "定型表現"),
    ],
    correctChoiceId: "d",
    explanation:
      "いらっしゃいませ funciona como fórmula estable de servicio. Aquí importa reconocer la expresión como unidad completa.",
  },
  {
    id: "kei-base-005",
    mode: "choose-natural",
    difficulty: "base",
    context: "trabajo",
    targetLabel: "sonkeigo",
    tags: ["actor-direction", "special-verb", "naturalness"],
    situation: "Quieres decir que el presidente ya llegó.",
    prompt: ruby("[社長|しゃちょう]がもう[来|き]ました。どれがいちばん[自然|しぜん]ですか。"),
    choices: [
      option("a", "Opción A", ruby("[社長|しゃちょう]がいらっしゃいました。")),
      option(
        "b",
        "Opción B",
        ruby("[社長|しゃちょう]が[参|まい]りました。"),
        "sonkeigo-vs-kenjougo",
        "参る es una forma humilde del lado del hablante; no eleva la acción del presidente.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[社長|しゃちょう]が[来|き]ました。"),
        "too-plain",
        "Puede entenderse, pero queda demasiado neutra para una escena donde quieres tratar al presidente con respeto.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "Para hablar respetuosamente de la llegada del presidente, いらっしゃいました es la opción más natural.",
  },
  {
    id: "kei-base-006",
    mode: "choose-natural",
    difficulty: "base",
    context: "trabajo",
    targetLabel: "kenjougo",
    tags: ["actor-direction", "pattern-choice", "naturalness"],
    situation: "Quieres decir que tú harás la explicación al cliente.",
    prompt: ruby("[私|わたし]が[説明|せつめい]します。どれがいちばん[自然|しぜん]ですか。"),
    choices: [
      option("a", "Opción A", ruby("[私|わたし]がご[説明|せつめい]いたします。")),
      option(
        "b",
        "Opción B",
        ruby("[私|わたし]がご[説明|せつめい]になります。"),
        "sonkeigo-vs-kenjougo",
        "〜になります eleva la acción. Aquí la acción es tuya, así que no corresponde subirla.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[私|わたし]が[説明|せつめい]します。"),
        "too-plain",
        "No está mal como cortesía base, pero aquí el foco es bajar tu acción frente al cliente.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "ご説明いたします expresa la acción propia con humildad y encaja mejor frente a un cliente.",
  },
  {
    id: "kei-base-007",
    mode: "fixed-phrase",
    difficulty: "base",
    context: "telefono",
    targetLabel: "fixed",
    tags: ["fixed-phrase", "telephone-etiquette", "service-language"],
    situation: "Atiendes una llamada y necesitas pedir que esperen un momento.",
    prompt: ruby("[電話|でんわ]で[少|すこ]し[待|ま]ってもらいたいです。"),
    choices: [
      option("a", "Opción A", ruby("[少々|しょうしょう]お[待|ま]ちください。")),
      option(
        "b",
        "Opción B",
        ruby("ちょっと[待|ま]ってください。"),
        "telephone-etiquette",
        "Puede entenderse, pero al teléfono profesional suena menos estable y menos de servicio.",
      ),
      option(
        "c",
        "Opción C",
        ruby("ちょっと[待|ま]って。"),
        "too-plain",
        "Esto cae demasiado en casual para una llamada de trabajo.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "少々お待ちください es una de las fórmulas más típicas y naturales al teléfono.",
  },
  {
    id: "kei-base-008",
    mode: "fixed-phrase",
    difficulty: "base",
    context: "trabajo",
    targetLabel: "fixed",
    tags: ["fixed-phrase", "service-language", "naturalness"],
    situation: "Un cliente te pide algo y quieres confirmar con un tono de servicio.",
    prompt: ruby("[依頼|いらい]を[受|う]けて、ていねいに『entendido』と[言|い]いたいです。"),
    choices: [
      option("a", "Opción A", ruby("かしこまりました。")),
      option(
        "b",
        "Opción B",
        ruby("わかりました。"),
        "service-language",
        "わかりました puede servir, pero かしこまりました suena claramente más de servicio y atención.",
      ),
      option(
        "c",
        "Opción C",
        ruby("了解|りょうかいしました。"),
        "too-plain",
        "了解しました no es la opción más apropiada frente a cliente.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "かしこまりました funciona muy bien en situaciones de servicio, recepción y atención formal.",
  },
  {
    id: "kei-base-009",
    mode: "fix-keigo",
    difficulty: "base",
    context: "trabajo",
    targetLabel: "sonkeigo",
    tags: ["sonkeigo-vs-kenjougo", "special-verb", "actor-direction"],
    situation: "La frase habla de la llegada del jefe.",
    prompt: ruby("[社長|しゃちょう]が[参|まい]りました。"),
    choices: [
      option("a", "Opción A", ruby("[社長|しゃちょう]がいらっしゃいました。")),
      option(
        "b",
        "Opción B",
        ruby("[社長|しゃちょう]が[参|まい]りました。"),
        "sonkeigo-vs-kenjougo",
        "参る baja al hablante o a su lado. No sirve para elevar al jefe.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[社長|しゃちょう]が[来|き]ました。"),
        "too-plain",
        "Es comprensible, pero no es la mejor corrección si la meta es usar keigo adecuadamente.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "Para hablar respetuosamente de la llegada del jefe, necesitas una forma de 尊敬語 como いらっしゃいました.",
  },
  {
    id: "kei-base-010",
    mode: "fix-keigo",
    difficulty: "base",
    context: "general",
    targetLabel: "kenjougo",
    tags: ["sonkeigo-vs-kenjougo", "special-verb", "actor-direction"],
    situation: "La frase describe una acción propia.",
    prompt: ruby("[私|わたし]がご[覧|らん]になりました。"),
    choices: [
      option("a", "Opción A", ruby("[私|わたし]が[拝見|はいけん]しました。")),
      option(
        "b",
        "Opción B",
        ruby("[私|わたし]がご[覧|らん]になりました。"),
        "actor-direction",
        "ご覧になる sube la acción de la otra persona. Aquí la acción es tuya.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[私|わたし]が[見|み]ました。"),
        "too-plain",
        "Puede entenderse, pero la meta de corrección en keigo es usar la forma humilde correspondiente.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "Para tu propia acción, la forma humilde natural es 拝見しました.",
  },
  {
    id: "kei-base-011",
    mode: "choose-natural",
    difficulty: "base",
    context: "general",
    targetLabel: "sonkeigo",
    tags: ["special-verb", "actor-direction", "naturalness"],
    situation: "Hablas de lo que comerá un profesor.",
    prompt: ruby("[先生|せんせい]は[昼|ひる]ごはんをどう[食|た]べますか。"),
    choices: [
      option("a", "Opción A", ruby("[先生|せんせい]は[何|なに]を[召|め]し[上|あ]がりますか。")),
      option(
        "b",
        "Opción B",
        ruby("[先生|せんせい]は[何|なに]をいただきますか。"),
        "sonkeigo-vs-kenjougo",
        "いただく baja la acción del hablante; no eleva la del profesor.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[先生|せんせい]は[何|なに]を[食|た]べますか。"),
        "too-plain",
        "Es una pregunta educada, pero si la meta es keigo, 召し上がる encaja mejor.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "Con profesores, jefes o clientes, 召し上がる es la forma respetuosa más típica para comer y beber.",
  },
  {
    id: "kei-base-012",
    mode: "choose-natural",
    difficulty: "base",
    context: "general",
    targetLabel: "sonkeigo",
    tags: ["special-verb", "actor-direction", "naturalness"],
    situation: "Hablas de lo que verá un cliente en un documento.",
    prompt: ruby("お[客|きゃく][様|さま]はその[資料|しりょう]をどう[見|み]ますか。"),
    choices: [
      option("a", "Opción A", ruby("お[客|きゃく][様|さま]はその[資料|しりょう]をご[覧|らん]になります。")),
      option(
        "b",
        "Opción B",
        ruby("お[客|きゃく][様|さま]はその[資料|しりょう]を[拝見|はいけん]します。"),
        "sonkeigo-vs-kenjougo",
        "拝見する baja la acción propia; no la del cliente.",
      ),
      option(
        "c",
        "Opción C",
        ruby("お[客|きゃく][様|さま]はその[資料|しりょう]を[見|み]ます。"),
        "too-plain",
        "Es formal base, pero no aprovecha el par de keigo más natural para 見る.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "Para la acción de ver del cliente, ご覧になります es la opción más natural.",
  },
  {
    id: "kei-int-013",
    mode: "choose-natural",
    difficulty: "intermedio",
    context: "trabajo",
    targetLabel: "sonkeigo",
    tags: ["pattern-choice", "actor-direction", "naturalness"],
    situation: "Quieres decir que el jefe ya se va o regresará.",
    prompt: ruby("[部長|ぶちょう]はもう[帰|かえ]ります。どれがいちばん[自然|しぜん]ですか。"),
    choices: [
      option("a", "Opción A", ruby("[部長|ぶちょう]はもうお[帰|かえ]りになります。")),
      option(
        "b",
        "Opción B",
        ruby("[部長|ぶちょう]はもうお[帰|かえ]りします。"),
        "pattern-choice",
        "お + raíz + します baja la acción propia; no eleva la del jefe.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[部長|ぶちょう]はもう[帰|かえ]ります。"),
        "too-plain",
        "La frase es correcta como 丁寧語, pero aquí la meta es expresar respeto más alto.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "Con 帰る, un patrón muy natural para elevar a la otra persona es お帰りになります.",
  },
  {
    id: "kei-int-014",
    mode: "choose-natural",
    difficulty: "intermedio",
    context: "trabajo",
    targetLabel: "kenjougo",
    tags: ["special-verb", "actor-direction", "naturalness"],
    situation: "Quieres decir que más tarde irás a ver al cliente.",
    prompt: ruby("[後|のち]ほど[行|い]きます。どれがいちばん[自然|しぜん]ですか。"),
    choices: [
      option("a", "Opción A", ruby("[後|のち]ほど[伺|うかが]います。")),
      option(
        "b",
        "Opción B",
        ruby("[後|のち]ほどいらっしゃいます。"),
        "sonkeigo-vs-kenjougo",
        "いらっしゃる eleva la acción de la otra persona, no la tuya.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[後|のち]ほど[行|い]きます。"),
        "too-plain",
        "Es formal base, pero para una visita al cliente 伺います suena mejor.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "伺います es muy natural para decir que irás a ver a alguien de manera humilde.",
  },
  {
    id: "kei-int-015",
    mode: "choose-natural",
    difficulty: "intermedio",
    context: "trabajo",
    targetLabel: "kenjougo",
    tags: ["special-verb", "actor-direction", "naturalness"],
    situation: "Quieres decir que preguntarás o escucharás un detalle al cliente.",
    prompt: ruby("お[客|きゃく][様|さま]にその[点|てん]を[聞|き]きます。どれがいちばん[自然|しぜん]ですか。"),
    choices: [
      option("a", "Opción A", ruby("お[客|きゃく][様|さま]にその[点|てん]を[伺|うかが]います。")),
      option(
        "b",
        "Opción B",
        ruby("お[客|きゃく][様|さま]にその[点|てん]をお[聞|き]きになります。"),
        "actor-direction",
        "お聞きになる eleva la acción del cliente; aquí la acción de preguntar es tuya.",
      ),
      option(
        "c",
        "Opción C",
        ruby("お[客|きゃく][様|さま]にその[点|てん]を[聞|き]きます。"),
        "too-plain",
        "Se entiende, pero el matiz humilde de 伺う encaja mejor con cliente.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "伺う cubre muy bien los matices de preguntar o escuchar humildemente a la otra parte.",
  },
  {
    id: "kei-int-016",
    mode: "fixed-phrase",
    difficulty: "intermedio",
    context: "telefono",
    targetLabel: "fixed",
    tags: ["fixed-phrase", "telephone-etiquette", "dialogue-response"],
    situation: "Atiendes una llamada y tienes que transferirla al responsable.",
    prompt: ruby("[担当者|たんとうしゃ]に[電話|でんわ]をつなぎたいです。"),
    choices: [
      option("a", "Opción A", ruby("ただいま[担当者|たんとうしゃ]をお[呼|よ]びいたします。")),
      option(
        "b",
        "Opción B",
        ruby("いま[担当者|たんとうしゃ]を[呼|よ]びます。"),
        "telephone-etiquette",
        "Es comprensible, pero al teléfono profesional suena menos estable y menos cortés.",
      ),
      option(
        "c",
        "Opción C",
        ruby("ただいま[担当者|たんとうしゃ]がお[呼|よ]びになります。"),
        "actor-direction",
        "Aquí la acción de llamar es tuya o de tu lado, no del cliente.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "お呼びいたします es una fórmula muy estable para transferencias y llamadas de oficina.",
  },
  {
    id: "kei-int-017",
    mode: "fixed-phrase",
    difficulty: "intermedio",
    context: "email",
    targetLabel: "fixed",
    tags: ["fixed-phrase", "email-etiquette", "naturalness"],
    situation: "Abres un correo de trabajo a un contacto con el que ya existe relación.",
    prompt: ruby("[仕事|しごと]のメールを[開|はじ]めます。"),
    choices: [
      option("a", "Opción A", ruby("いつもお[世話|せわ]になっております。")),
      option(
        "b",
        "Opción B",
        ruby("こんにちは。"),
        "email-etiquette",
        "Puede aparecer en contextos informales, pero no es la apertura típica de correo profesional.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[少々|しょうしょう]お[待|ま]ちください。"),
        "fixed-phrase",
        "Esa fórmula pertenece más a teléfono o atención inmediata, no a apertura de email.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "いつもお世話になっております es una de las aperturas más estables y naturales en correo laboral.",
  },
  {
    id: "kei-int-018",
    mode: "fixed-phrase",
    difficulty: "intermedio",
    context: "email",
    targetLabel: "fixed",
    tags: ["fixed-phrase", "email-etiquette", "naturalness"],
    situation: "Cierras un correo donde has hecho una petición o una coordinación.",
    prompt: ruby("メールの[最後|さいご]をていねいに[閉|し]めたいです。"),
    choices: [
      option("a", "Opción A", ruby("よろしくお[願|ねが]いいたします。")),
      option(
        "b",
        "Opción B",
        ruby("いらっしゃいませ。"),
        "fixed-phrase",
        "Esa fórmula corresponde a atención en tienda o restaurante.",
      ),
      option(
        "c",
        "Opción C",
        ruby("ごめんなさい。"),
        "context-mismatch",
        "No es un cierre estándar de correo profesional.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "よろしくお願いいたします funciona muy bien como cierre formal para peticiones, coordinación y seguimiento.",
  },
  {
    id: "kei-int-019",
    mode: "fixed-phrase",
    difficulty: "intermedio",
    context: "trabajo",
    targetLabel: "fixed",
    tags: ["fixed-phrase", "service-language", "naturalness"],
    situation: "Tu empresa cometió un error y necesitas disculparte formalmente.",
    prompt: ruby("[強|つよ]い[謝罪|しゃざい]が[必要|ひつよう]です。"),
    choices: [
      option("a", "Opción A", ruby("[申|もう]し[訳|わけ]ございません。")),
      option(
        "b",
        "Opción B",
        ruby("すみません。"),
        "too-plain",
        "すみません sirve en muchos casos, pero aquí la escena pide una disculpa más fuerte y más formal.",
      ),
      option(
        "c",
        "Opción C",
        ruby("ごめんなさい。"),
        "too-plain",
        "Eso cae demasiado en informal para un error laboral serio.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "申し訳ございません es una disculpa fuerte y formal, muy usada en trabajo y atención.",
  },
  {
    id: "kei-int-020",
    mode: "fix-keigo",
    difficulty: "intermedio",
    context: "trabajo",
    targetLabel: "sonkeigo",
    tags: ["sonkeigo-vs-kenjougo", "special-verb", "actor-direction"],
    situation: "La frase habla de lo que dijo el jefe.",
    prompt: ruby("[部長|ぶちょう]が[申|もう]しました。"),
    choices: [
      option("a", "Opción A", ruby("[部長|ぶちょう]がおっしゃいました。")),
      option(
        "b",
        "Opción B",
        ruby("[部長|ぶちょう]が[申|もう]しました。"),
        "sonkeigo-vs-kenjougo",
        "申す baja la acción del hablante o de su lado; no eleva la del jefe.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[部長|ぶちょう]が[言|い]いました。"),
        "too-plain",
        "No corrige el problema central, que es la falta de elevación adecuada.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "Para la acción de decir del jefe, おっしゃいました es la corrección natural.",
  },
  {
    id: "kei-int-021",
    mode: "fix-keigo",
    difficulty: "intermedio",
    context: "general",
    targetLabel: "sonkeigo",
    tags: ["double-keigo", "special-verb", "naturalness"],
    situation: "La frase ya usa una forma respetuosa.",
    prompt: ruby("そうおっしゃられました。"),
    choices: [
      option("a", "Opción A", ruby("そうおっしゃいました。")),
      option(
        "b",
        "Opción B",
        ruby("そうおっしゃられました。"),
        "double-keigo",
        "おっしゃる ya es respetuoso. Añadir otra capa no lo mejora.",
      ),
      option(
        "c",
        "Opción C",
        ruby("そう[言|い]いました。"),
        "too-plain",
        "Baja demasiado el tono y pierde el matiz respetuoso.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "おっしゃる ya contiene el respeto necesario. No necesita られる encima.",
  },
  {
    id: "kei-int-022",
    mode: "choose-natural",
    difficulty: "intermedio",
    context: "trabajo",
    targetLabel: "sonkeigo",
    tags: ["pattern-choice", "naturalness", "actor-direction"],
    situation: "Quieres decir que el presidente leerá el documento.",
    prompt: ruby("[社長|しゃちょう]はその[資料|しりょう]を[読|よ]みます。どれがいちばん[自然|しぜん]ですか。"),
    choices: [
      option("a", "Opción A", ruby("[社長|しゃちょう]はその[資料|しりょう]をお[読|よ]みになります。")),
      option(
        "b",
        "Opción B",
        ruby("[社長|しゃちょう]はその[資料|しりょう]をお[読|よ]みします。"),
        "pattern-choice",
        "お + raíz + します no eleva la acción del presidente.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[社長|しゃちょう]はその[資料|しりょう]を[読|よ]みます。"),
        "too-plain",
        "Es 丁寧語 base, pero aquí la meta es elevar la acción del presidente.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "お読みになります sigue un patrón productivo muy natural para expresar respeto hacia la otra persona.",
  },
  {
    id: "kei-int-023",
    mode: "choose-natural",
    difficulty: "intermedio",
    context: "trabajo",
    targetLabel: "kenjougo",
    tags: ["pattern-choice", "actor-direction", "service-language"],
    situation: "Un cliente te entrega un objeto y quieres decir que tú lo recibirás.",
    prompt: ruby("こちらでそれを[受|う]けます。どれがいちばん[自然|しぜん]ですか。"),
    choices: [
      option("a", "Opción A", ruby("こちらでお[預|あず]かりいたします。")),
      option(
        "b",
        "Opción B",
        ruby("こちらでお[預|あず]かりになります。"),
        "actor-direction",
        "〜になります eleva la acción. Aquí la acción de recibir es tuya o de tu lado.",
      ),
      option(
        "c",
        "Opción C",
        ruby("こちらで[受|う]けます。"),
        "too-plain",
        "Se entiende, pero en recepción u oficina suele sonar más natural お預かりいたします.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "お預かりいたします suena muy natural en recepción, mostrador y atención al cliente.",
  },
  {
    id: "kei-int-024",
    mode: "choose-natural",
    difficulty: "intermedio",
    context: "trabajo",
    targetLabel: "fixed",
    tags: ["fixed-phrase", "service-language", "naturalness"],
    situation: "Pides con suavidad que el cliente complete un formulario.",
    prompt: ruby("お[客|きゃく][様|さま]にここへ[記入|きにゅう]してほしいです。"),
    choices: [
      option("a", "Opción A", ruby("[恐|おそ]れ[入|い]りますが、こちらにご[記入|きにゅう]ください。")),
      option(
        "b",
        "Opción B",
        ruby("ここに[書|か]いてください。"),
        "too-plain",
        "Puede funcionar en un contexto muy básico, pero pierde el tono de atención cuidadosa.",
      ),
      option(
        "c",
        "Opción C",
        ruby("こちらにご[記入|きにゅう]になります。"),
        "pattern-choice",
        "La estructura no queda natural porque estás intentando elevar una acción que todavía no realiza la otra persona.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "恐れ入りますが suaviza la petición y la vuelve mucho más natural en trabajo y atención.",
  },
  {
    id: "kei-int-025",
    mode: "choose-keigo-type",
    difficulty: "intermedio",
    context: "general",
    targetLabel: "sonkeigo",
    tags: ["special-verb", "sonkeigo-vs-kenjougo"],
    situation: "Quieres clasificar la forma ご存じです.",
    prompt: ruby("ご[存|ぞん]じです。"),
    choices: [
      option("a", "丁寧語"),
      option("b", "尊敬語"),
      option(
        "c",
        "謙譲語",
        undefined,
        "sonkeigo-vs-kenjougo",
        "存じております sería una forma humilde. ご存じです eleva a la otra persona.",
      ),
      option("d", "定型表現"),
    ],
    correctChoiceId: "b",
    explanation:
      "ご存じです se usa para elevar el conocimiento de la otra persona. Por eso entra en 尊敬語.",
  },
  {
    id: "kei-int-026",
    mode: "choose-keigo-type",
    difficulty: "intermedio",
    context: "general",
    targetLabel: "kenjougo",
    tags: ["special-verb", "sonkeigo-vs-kenjougo"],
    situation: "Quieres clasificar la forma 存じております.",
    prompt: ruby("[存|ぞん]じております。"),
    choices: [
      option("a", "丁寧語"),
      option("b", "尊敬語"),
      option("c", "謙譲語"),
      option(
        "d",
        "定型表現",
        undefined,
        "context-mismatch",
        "No es una frase fija cerrada, sino una forma humilde del verbo conocer/saber.",
      ),
    ],
    correctChoiceId: "c",
    explanation:
      "存じております baja la posición del hablante y de su lado. Por eso pertenece a 謙譲語.",
  },
  {
    id: "kei-adv-027",
    mode: "dialogue-keigo",
    difficulty: "avanzado",
    context: "trabajo",
    targetLabel: "kenjougo",
    tags: ["dialogue-response", "actor-direction", "naturalness"],
    situation: "El cliente ya llegó y ahora tú le acompañarás a la sala de reuniones.",
    prompt: ruby("A: [田中|たなか]さまはもういらっしゃいましたか。\nB: はい、______。"),
    choices: [
      option(
        "a",
        "Opción A",
        ruby("[田中|たなか]さまはもういらっしゃいました。[私|わたし]が[会議室|かいぎしつ]までご[案内|あんない]します。"),
      ),
      option(
        "b",
        "Opción B",
        ruby("[田中|たなか]さまはもう[参|まい]りました。[会議室|かいぎしつ]までご[案内|あんない]になります。"),
        "sonkeigo-vs-kenjougo",
        "La primera parte baja mal la acción del cliente y la segunda eleva mal una acción tuya.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[田中|たなか]さまはもう[来|き]ました。[会議室|かいぎしつ]まで[案内|あんない]します。"),
        "too-plain",
        "Se entiende, pero para una recepción formal pierde el matiz de respeto esperado.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "La mejor respuesta combina 尊敬語 para la llegada del cliente y 謙譲語 para tu propia acción de acompañar.",
  },
  {
    id: "kei-adv-028",
    mode: "dialogue-keigo",
    difficulty: "avanzado",
    context: "telefono",
    targetLabel: "fixed",
    tags: ["telephone-etiquette", "dialogue-response", "fixed-phrase"],
    situation: "Atiendes una llamada y tienes que pedir espera antes de pasarla al encargado.",
    prompt: ruby("A: [担当者|たんとうしゃ]の[方|かた]をお[願|ねが]いします。\nB: ______"),
    choices: [
      option(
        "a",
        "Opción A",
        ruby("[少々|しょうしょう]お[待|ま]ちください。ただいま[担当者|たんとうしゃ]をお[呼|よ]びいたします。"),
      ),
      option(
        "b",
        "Opción B",
        ruby("ちょっと[待|ま]ってください。[担当者|たんとうしゃ]を[呼|よ]びます。"),
        "telephone-etiquette",
        "Puede entenderse, pero para teléfono de oficina suena demasiado llano.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[少々|しょうしょう]お[待|ま]ちになります。ただいま[担当者|たんとうしゃ]がお[呼|よ]びになります。"),
        "actor-direction",
        "La estructura sube mal acciones que pertenecen a tu lado.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "Las dos fórmulas de la opción A forman una respuesta telefónica muy estable y natural.",
  },
  {
    id: "kei-adv-029",
    mode: "choose-natural",
    difficulty: "avanzado",
    context: "tienda",
    targetLabel: "fixed",
    tags: ["service-language", "fixed-phrase", "naturalness"],
    situation: "Presentas un producto o un documento en mostrador.",
    prompt: ruby("『aquí lo tiene / es este』を[店|みせ]の[言|い]い[方|かた]で[言|い]いたいです。"),
    choices: [
      option("a", "Opción A", ruby("こちらでございます。")),
      option(
        "b",
        "Opción B",
        ruby("こちらです。"),
        "too-plain",
        "No está mal como cortesía básica, pero en atención de servicio こちらでございます suena más natural.",
      ),
      option(
        "c",
        "Opción C",
        ruby("これだ。"),
        "too-plain",
        "Aquí cae totalmente fuera del tono de servicio.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "En tienda y mostrador, こちらでございます es una forma muy reconocible de servicio.",
  },
  {
    id: "kei-adv-030",
    mode: "choose-natural",
    difficulty: "avanzado",
    context: "tienda",
    targetLabel: "fixed",
    tags: ["service-language", "fixed-phrase", "naturalness"],
    situation: "Un cliente entra al local y quieres saludar como en servicio.",
    prompt: ruby("お[客|きゃく][様|さま]が[店|みせ]に[入|はい]りました。"),
    choices: [
      option("a", "Opción A", ruby("いらっしゃいませ。")),
      option(
        "b",
        "Opción B",
        ruby("こんにちは。"),
        "service-language",
        "Es un saludo normal, pero no es el saludo de servicio más característico.",
      ),
      option(
        "c",
        "Opción C",
        ruby("ようこそ。"),
        "naturalness",
        "Puede funcionar en otros contextos, pero no es la fórmula típica de tienda.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "いらっしゃいませ es la respuesta más natural para recibir al cliente en un local.",
  },
  {
    id: "kei-adv-031",
    mode: "choose-natural",
    difficulty: "avanzado",
    context: "trabajo",
    targetLabel: "fixed",
    tags: ["service-language", "naturalness", "fixed-phrase"],
    situation: "Un cliente hace una petición simple y quieres confirmar con tono de servicio.",
    prompt: ruby("どれがいちばん[接客|せっきゃく]らしい[返答|へんとう]ですか。"),
    choices: [
      option("a", "Opción A", ruby("かしこまりました。")),
      option(
        "b",
        "Opción B",
        ruby("わかりました。"),
        "service-language",
        "わかりました no está mal, pero かしこまりました suena claramente más de servicio.",
      ),
      option(
        "c",
        "Opción C",
        ruby("うん、わかった。"),
        "too-plain",
        "Aquí el tono cae demasiado fuera de la situación.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "Cuando el foco es atención o servicio, かしこまりました suele ser la opción más natural.",
  },
  {
    id: "kei-adv-032",
    mode: "choose-natural",
    difficulty: "avanzado",
    context: "email",
    targetLabel: "fixed",
    tags: ["email-etiquette", "fixed-phrase", "naturalness"],
    situation: "Quieres cerrar un correo con un tono un poco más enfático y muy formal.",
    prompt: ruby("メールの[最後|さいご]を、より[強|つよ]くていねいに[閉|し]めたいです。"),
    choices: [
      option("a", "Opción A", ruby("[何卒|なにとぞ]よろしくお[願|ねが]いいたします。")),
      option(
        "b",
        "Opción B",
        ruby("よろしくです。"),
        "email-etiquette",
        "Ese cierre cae demasiado en coloquial para un correo profesional.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[少々|しょうしょう]お[待|ま]ちください。"),
        "fixed-phrase",
        "Esa fórmula no cumple función de cierre de correo.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "何卒よろしくお願いいたします suena más enfático y muy natural como cierre formal.",
  },
  {
    id: "kei-adv-033",
    mode: "fix-keigo",
    difficulty: "avanzado",
    context: "trabajo",
    targetLabel: "sonkeigo",
    tags: ["special-verb", "actor-direction", "sonkeigo-vs-kenjougo"],
    situation: "La frase describe lo que hizo el presidente con un documento.",
    prompt: ruby("[社長|しゃちょう]がその[資料|しりょう]を[拝見|はいけん]しました。"),
    choices: [
      option("a", "Opción A", ruby("[社長|しゃちょう]がその[資料|しりょう]をご[覧|らん]になりました。")),
      option(
        "b",
        "Opción B",
        ruby("[社長|しゃちょう]がその[資料|しりょう]を[拝見|はいけん]しました。"),
        "sonkeigo-vs-kenjougo",
        "拝見する baja la acción del hablante. No sirve para la acción del presidente.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[社長|しゃちょう]がその[資料|しりょう]を[見|み]ました。"),
        "too-plain",
        "Baja demasiado el nivel para una corrección de keigo.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "Si la acción es del presidente, la corrección adecuada es ご覧になりました.",
  },
  {
    id: "kei-adv-034",
    mode: "choose-natural",
    difficulty: "avanzado",
    context: "trabajo",
    targetLabel: "kenjougo",
    tags: ["special-verb", "naturalness", "actor-direction"],
    situation: "Quieres decir que tú ya conoces ese asunto en un contexto laboral formal.",
    prompt: ruby("その[件|けん]はもう[知|し]っています。どれがいちばん[自然|しぜん]ですか。"),
    choices: [
      option("a", "Opción A", ruby("その[件|けん]は[存|ぞん]じております。")),
      option(
        "b",
        "Opción B",
        ruby("その[件|けん]はご[存|ぞん]じです。"),
        "sonkeigo-vs-kenjougo",
        "ご存じです eleva el conocimiento de la otra persona, no el tuyo.",
      ),
      option(
        "c",
        "Opción C",
        ruby("その[件|けん]は[知|し]っています。"),
        "too-plain",
        "Puede funcionar en otros contextos, pero aquí la forma humilde resulta más adecuada.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "存じております baja la posición del hablante y encaja muy bien en trabajo formal.",
  },
  {
    id: "kei-adv-035",
    mode: "choose-natural",
    difficulty: "avanzado",
    context: "telefono",
    targetLabel: "kenjougo",
    tags: ["in-group-out-group", "telephone-etiquette", "naturalness"],
    situation:
      "Un cliente llama preguntando por Tanaka, que trabaja en tu empresa, pero ahora no está en su puesto.",
    prompt: ruby("[田中|たなか]はいま[席|せき]にいません。どれがいちばん[自然|しぜん]ですか。"),
    choices: [
      option("a", "Opción A", ruby("[田中|たなか]はただいま[席|せき]を[外|はず]しております。")),
      option(
        "b",
        "Opción B",
        ruby("[田中|たなか]はいらっしゃいません。"),
        "in-group-out-group",
        "Cuando hablas con alguien de fuera, las personas de tu propia empresa suelen bajar de nivel, no subir.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[田中|たなか]はいません。"),
        "too-plain",
        "Se entiende, pero pierde el tono telefónico y la diferencia entre dentro y fuera del grupo.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "En teléfono de empresa, hablar humildemente de alguien de tu propio lado frente a un cliente suena mucho más natural.",
  },
  {
    id: "kei-adv-036",
    mode: "choose-natural",
    difficulty: "avanzado",
    context: "trabajo",
    targetLabel: "kenjougo",
    tags: ["in-group-out-group", "actor-direction", "naturalness"],
    situation:
      "Hablas con un cliente y te refieres a tu jefe, que ahora no se encuentra presente.",
    prompt: ruby("[部長|ぶちょう]はいま[席|せき]にいません。どれがいちばん[自然|しぜん]ですか。"),
    choices: [
      option("a", "Opción A", ruby("[部長|ぶちょう]はただいま[席|せき]を[外|はず]しております。")),
      option(
        "b",
        "Opción B",
        ruby("[部長|ぶちょう]はいらっしゃいません。"),
        "in-group-out-group",
        "Con cliente, tu propio lado no suele elevarse de esa manera.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[部長|ぶちょう]はいません。"),
        "too-plain",
        "La información se entiende, pero queda demasiado plana para la escena.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "En keigo laboral real, también importa cómo hablas de las personas de tu propio lado ante alguien externo.",
  },
  {
    id: "kei-adv-037",
    mode: "fix-keigo",
    difficulty: "avanzado",
    context: "telefono",
    targetLabel: "kenjougo",
    tags: ["actor-direction", "pattern-choice", "telephone-etiquette"],
    situation: "Quieres decir que tú llamarás al responsable.",
    prompt: ruby("ただいま[担当者|たんとうしゃ]をお[呼|よ]びになります。"),
    choices: [
      option("a", "Opción A", ruby("ただいま[担当者|たんとうしゃ]をお[呼|よ]びいたします。")),
      option(
        "b",
        "Opción B",
        ruby("ただいま[担当者|たんとうしゃ]をお[呼|よ]びになります。"),
        "actor-direction",
        "La acción de llamar pertenece a tu lado; no debe elevarse como si fuera del cliente.",
      ),
      option(
        "c",
        "Opción C",
        ruby("ただいま[担当者|たんとうしゃ]がいらっしゃいます。"),
        "context-mismatch",
        "Eso cambia el significado y ya no expresa la acción de llamar.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "Al teléfono, la forma natural es bajar la acción propia: お呼びいたします.",
  },
  {
    id: "kei-adv-038",
    mode: "choose-natural",
    difficulty: "avanzado",
    context: "email",
    targetLabel: "fixed",
    tags: ["email-etiquette", "naturalness", "fixed-phrase"],
    situation: "Envías un correo a un socio o cliente con quien ya trabajas regularmente.",
    prompt: ruby("メールの[冒頭|ぼうとう]としてどれがいちばん[自然|しぜん]ですか。"),
    choices: [
      option("a", "Opción A", ruby("いつもお[世話|せわ]になっております。")),
      option(
        "b",
        "Opción B",
        ruby("お[元気|げんき]ですか。"),
        "email-etiquette",
        "Eso puede aparecer en otros tipos de correo, pero no es la apertura profesional más estable.",
      ),
      option(
        "c",
        "Opción C",
        ruby("こんにちは、[田中|たなか]です。"),
        "too-plain",
        "En un correo profesional regular, queda más casual y menos institucional.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "La apertura profesional más natural en ese tipo de relación suele ser いつもお世話になっております.",
  },
  {
    id: "kei-adv-039",
    mode: "choose-natural",
    difficulty: "avanzado",
    context: "tienda",
    targetLabel: "fixed",
    tags: ["service-language", "fixed-phrase", "dialogue-response"],
    situation: "Un cliente hace un pedido sencillo y tú quieres responder con tono claro de servicio.",
    prompt: ruby("お[客|きゃく][様|さま]の[注文|ちゅうもん]に[答|こた]えます。"),
    choices: [
      option("a", "Opción A", ruby("かしこまりました。こちらでございます。")),
      option(
        "b",
        "Opción B",
        ruby("わかりました。これです。"),
        "service-language",
        "El contenido se entiende, pero pierde bastante tono de atención y mostrador.",
      ),
      option(
        "c",
        "Opción C",
        ruby("はい。"),
        "too-plain",
        "Demasiado corta y demasiado plana para una escena de servicio.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "La combinación かしこまりました + こちらでございます suena muy natural en atención al cliente.",
  },
  {
    id: "kei-adv-040",
    mode: "dialogue-keigo",
    difficulty: "avanzado",
    context: "telefono",
    targetLabel: "kenjougo",
    tags: ["telephone-etiquette", "dialogue-response", "special-verb"],
    situation:
      "Necesitas pedirle a la persona del teléfono que repita su nombre con una formulación humilde y muy educada.",
    prompt: ruby("A: [恐|おそ]れ[入|い]りますが、もう[一度|いちど]お[名前|なまえ]を______。"),
    choices: [
      option("a", "Opción A", ruby("[伺|うかが]ってもよろしいでしょうか。")),
      option(
        "b",
        "Opción B",
        ruby("お[聞|き]きになってもよろしいでしょうか。"),
        "actor-direction",
        "お聞きになる eleva la acción de la otra persona. Aquí quien pregunta eres tú.",
      ),
      option(
        "c",
        "Opción C",
        ruby("[聞|き]いていいですか。"),
        "telephone-etiquette",
        "La intención se entiende, pero cae muy por debajo del tono telefónico profesional.",
      ),
    ],
    correctChoiceId: "a",
    explanation:
      "伺う permite formular preguntas de forma humilde y muy natural en teléfono formal.",
  },
];
