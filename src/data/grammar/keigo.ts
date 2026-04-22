// src/data/grammar/keigo.ts

import type { RubySegment } from "@/app/components/ui/Ruby";

export type KeigoCategory = "teineigo" | "sonkeigo" | "kenjougo" | "fixed";
export type KeigoContext = "general" | "trabajo" | "telefono" | "email" | "tienda";

export interface KeigoExample {
  segments: RubySegment[];
  translation: string;
  note?: string;
}

export interface KeigoRuleCard {
  title: string;
  summary: string;
  detail: string;
}

export interface KeigoPattern {
  id: string;
  category: Exclude<KeigoCategory, "fixed">;
  title: string;
  formula: string;
  meaning: string;
  caution?: string;
  examples: KeigoExample[];
}

export interface KeigoVerbPair {
  plain: string;
  polite: string;
  sonkeigo: string;
  kenjougo: string;
  meaning: string;
  nuance?: string;
}

export interface KeigoPhrase {
  id: string;
  category: KeigoCategory;
  context: KeigoContext;
  label: string;
  segments: RubySegment[];
  translation: string;
  usage: string;
  note?: string;
}

export interface KeigoMistake {
  wrong: RubySegment[];
  correct: RubySegment[];
  explanation: string;
}

export interface KeigoScenario {
  id: string;
  context: KeigoContext;
  title: string;
  situation: string;
  examples: KeigoExample[];
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

export const KEIGO_CATEGORIES: Array<{
  key: KeigoCategory;
  label: string;
  jp: string;
  color: string;
  accent: string;
  desc: string;
}> = [
  {
    key: "teineigo",
    label: "Teineigo",
    jp: "丁寧語",
    color: "#FFE7B8",
    accent: "#A16207",
    desc: "Tono formal base con です・ます",
  },
  {
    key: "sonkeigo",
    label: "Sonkeigo",
    jp: "尊敬語",
    color: "#D9E7FF",
    accent: "#1D4ED8",
    desc: "Eleva las acciones de la otra persona",
  },
  {
    key: "kenjougo",
    label: "Kenjougo",
    jp: "謙譲語",
    color: "#DDF6E8",
    accent: "#15803D",
    desc: "Baja las acciones propias o de tu lado",
  },
  {
    key: "fixed",
    label: "Frases fijas",
    jp: "定型表現",
    color: "#F8D7E8",
    accent: "#BE185D",
    desc: "Expresiones habituales de trabajo, tienda y atención",
  },
];

export const KEIGO_CONTEXTS: Array<{
  key: "all" | KeigoContext;
  label: string;
}> = [
  { key: "all", label: "Todo" },
  { key: "general", label: "General" },
  { key: "trabajo", label: "Trabajo" },
  { key: "telefono", label: "Teléfono" },
  { key: "email", label: "Email" },
  { key: "tienda", label: "Tienda" },
];

export const KEIGO_RULES: KeigoRuleCard[] = [
  {
    title: "¿Quién hace la acción?",
    summary: "Esa es la pregunta principal en keigo.",
    detail:
      "Si la acción es del cliente, jefe, profesor o interlocutor, normalmente piensas en 尊敬語. Si la acción es tuya o de tu empresa hacia afuera, normalmente piensas en 謙譲語.",
  },
  {
    title: "丁寧語 no es lo mismo que keigo avanzado",
    summary: "です・ます ya sube el tono.",
    detail:
      "丁寧語 es la base. Después, según la relación social, puedes subir al otro con 尊敬語 o bajar lo propio con 謙譲語.",
  },
  {
    title: "No todo se transforma con una fórmula",
    summary: "Hay verbos especiales que se memorizan tal cual.",
    detail:
      "行く・来る・いる → いらっしゃる / 参る, 見る → ご覧になる / 拝見する, 言う → おっしゃる / 申す など.",
  },
];

export const KEIGO_PATTERNS: KeigoPattern[] = [
  {
    id: "teineigo-basic",
    category: "teineigo",
    title: "Base formal",
    formula: "Vます / Nです / Aです",
    meaning: "Tono respetuoso general sin entrar todavía en honoríficos especiales.",
    caution: "Es la base. No sustituye por sí sola a 尊敬語 o 謙譲語 cuando la situación lo exige.",
    examples: [
      {
        segments: ruby("[先生|せんせい]は[今日|きょう]、[学校|がっこう]に[来|き]ます。"),
        translation: "El profesor viene hoy a la escuela.",
      },
      {
        segments: ruby("[私|わたし]は[明日|あした]、ご[説明|せつめい]します。"),
        translation: "Mañana haré la explicación.",
      },
    ],
  },
  {
    id: "sonkeigo-pattern",
    category: "sonkeigo",
    title: "Patrón productivo de 尊敬語",
    formula: "お / ご + raíz + になります",
    meaning: "Se usa para elevar la acción de la otra persona.",
    caution: "No reemplaza verbos especiales ya establecidos como いらっしゃる, おっしゃる, ご覧になる, 召し上がる.",
    examples: [
      {
        segments: ruby("[部長|ぶちょう]はもうお[帰|かえ]りになります。"),
        translation: "El jefe ya se va / regresará.",
      },
      {
        segments: ruby("[社長|しゃちょう]はその[資料|しりょう]をお[読|よ]みになります。"),
        translation: "El presidente leerá ese material.",
      },
    ],
  },
  {
    id: "kenjougo-pattern",
    category: "kenjougo",
    title: "Patrón productivo de 謙譲語",
    formula: "お / ご + raíz + します / いたします",
    meaning: "Se usa para bajar la acción propia o del lado del hablante.",
    caution: "No reemplaza verbos especiales como 参る, 伺う, 申す, 拝見する, いただく.",
    examples: [
      {
        segments: ruby("[私|わたし]がご[案内|あんない]します。"),
        translation: "Yo le guiaré.",
      },
      {
        segments: ruby("こちらでお[預|あず]かりいたします。"),
        translation: "Nosotros lo recibiremos / custodiarermos aquí.",
      },
    ],
  },
];

export const KEIGO_VERB_PAIRS: KeigoVerbPair[] = [
  {
    plain: "する",
    polite: "します",
    sonkeigo: "なさる",
    kenjougo: "いたす",
    meaning: "hacer",
  },
  {
    plain: "行く・来る・いる",
    polite: "行きます・来ます・います",
    sonkeigo: "いらっしゃる",
    kenjougo: "参る",
    meaning: "ir / venir / estar",
    nuance: "伺う también se usa mucho para ir/venir a ver a alguien.",
  },
  {
    plain: "言う",
    polite: "言います",
    sonkeigo: "おっしゃる",
    kenjougo: "申す / 申し上げる",
    meaning: "decir",
  },
  {
    plain: "見る",
    polite: "見ます",
    sonkeigo: "ご覧になる",
    kenjougo: "拝見する",
    meaning: "ver",
  },
  {
    plain: "聞く",
    polite: "聞きます",
    sonkeigo: "お聞きになる",
    kenjougo: "伺う",
    meaning: "escuchar / preguntar",
  },
  {
    plain: "食べる・飲む",
    polite: "食べます・飲みます",
    sonkeigo: "召し上がる",
    kenjougo: "いただく",
    meaning: "comer / beber",
  },
  {
    plain: "知っている",
    polite: "知っています",
    sonkeigo: "ご存じです",
    kenjougo: "存じております",
    meaning: "saber / conocer",
  },
  {
    plain: "会う",
    polite: "会います",
    sonkeigo: "お会いになる",
    kenjougo: "お目にかかる",
    meaning: "encontrarse",
  },
  {
    plain: "もらう",
    polite: "もらいます",
    sonkeigo: "お受け取りになる",
    kenjougo: "いただく",
    meaning: "recibir",
    nuance: "En lo cotidiano muchas veces no se usa una pareja simétrica perfecta.",
  },
  {
    plain: "くれる",
    polite: "くれます",
    sonkeigo: "くださる",
    kenjougo: "—",
    meaning: "darme / darnos",
  },
];

export const KEIGO_PHRASES: KeigoPhrase[] = [
  {
    id: "irasshaimase",
    category: "fixed",
    context: "tienda",
    label: "Bienvenida al cliente",
    segments: ruby("いらっしゃいませ。"),
    translation: "Bienvenido/a.",
    usage: "Recepción de clientes en tienda, restaurante o atención presencial.",
  },
  {
    id: "kashikomarimashita",
    category: "fixed",
    context: "trabajo",
    label: "Confirmación formal",
    segments: ruby("かしこまりました。"),
    translation: "Entendido / con mucho gusto.",
    usage: "Muy útil en atención al cliente y situaciones de servicio.",
    note: "Suena más alto y más de servicio que わかりました.",
  },
  {
    id: "shoushou-omachi",
    category: "fixed",
    context: "telefono",
    label: "Pedir espera",
    segments: ruby("[少々|しょうしょう]お[待|ま]ちください。"),
    translation: "Espere un momento, por favor.",
    usage: "Teléfono, recepción, atención al cliente.",
  },
  {
    id: "tantousha-oyobi",
    category: "fixed",
    context: "telefono",
    label: "Llamar al encargado",
    segments: ruby("ただいま[担当者|たんとうしゃ]をお[呼|よ]びいたします。"),
    translation: "Ahora mismo llamaré al encargado.",
    usage: "Muy común al teléfono o en recepción.",
  },
  {
    id: "osewa",
    category: "fixed",
    context: "email",
    label: "Apertura de correo",
    segments: ruby("いつもお[世話|せわ]になっております。"),
    translation: "Muchas gracias por su constante apoyo / siempre estamos en deuda.",
    usage: "Apertura muy frecuente en correos laborales.",
  },
  {
    id: "yoroshiku",
    category: "fixed",
    context: "email",
    label: "Cierre de correo",
    segments: ruby("よろしくお[願|ねが]いいたします。"),
    translation: "Quedo atento / muchas gracias de antemano.",
    usage: "Cierre estándar de email de trabajo y solicitudes formales.",
  },
  {
    id: "moushiwake",
    category: "fixed",
    context: "trabajo",
    label: "Disculpa formal",
    segments: ruby("[申|もう]し[訳|わけ]ございません。"),
    translation: "Lo siento mucho / no tengo excusa.",
    usage: "Disculpa fuerte y formal en atención, trabajo o incidencias.",
  },
  {
    id: "osoreirimasu",
    category: "fixed",
    context: "trabajo",
    label: "Pedir con suavidad",
    segments: ruby("[恐|おそ]れ[入|い]りますが、こちらにご[記入|きにゅう]ください。"),
    translation: "Disculpe / sería tan amable de completar esto aquí.",
    usage: "Muy útil para sonar cortés al pedir algo.",
  },
  {
    id: "kochira",
    category: "fixed",
    context: "tienda",
    label: "Presentar algo con respeto",
    segments: ruby("こちらでございます。"),
    translation: "Es este / aquí lo tiene.",
    usage: "Forma más alta que こちらです en atención y servicio.",
  },
];

export const KEIGO_MISTAKES: KeigoMistake[] = [
  {
    wrong: ruby("[社長|しゃちょう]が[参|まい]りました。"),
    correct: ruby("[社長|しゃちょう]がいらっしゃいました。"),
    explanation:
      "参る es 謙譲語. No se usa para elevar al jefe o cliente; ahí corresponde una forma de 尊敬語.",
  },
  {
    wrong: ruby("[私|わたし]がご[覧|らん]になりました。"),
    correct: ruby("[私|わたし]が[拝見|はいけん]しました。"),
    explanation:
      "ご覧になる eleva a la otra persona. Para tu propia acción, usa una forma humilde como 拝見する.",
  },
  {
    wrong: ruby("[部長|ぶちょう]が[申|もう]しました。"),
    correct: ruby("[部長|ぶちょう]がおっしゃいました。"),
    explanation:
      "申す baja al hablante o a su lado. Si hablas de la acción del superior como referente respetado, usa おっしゃる.",
  },
  {
    wrong: ruby("そうおっしゃられました。"),
    correct: ruby("そうおっしゃいました。"),
    explanation:
      "おっしゃる ya es forma respetuosa. Añadir られる produce doble respeto innecesario.",
  },
];

export const KEIGO_SCENARIOS: KeigoScenario[] = [
  {
    id: "office-visit",
    context: "trabajo",
    title: "Visita a la oficina",
    situation:
      "Hablas con un cliente que llegó a la empresa y luego hablas de tus propias acciones.",
    examples: [
      {
        segments: ruby("[田中|たなか]さまはもういらっしゃいました。"),
        translation: "El señor Tanaka ya llegó.",
        note: "La acción del cliente va en 尊敬語.",
      },
      {
        segments: ruby("[私|わたし]が[会議室|かいぎしつ]までご[案内|あんない]します。"),
        translation: "Yo le guiaré hasta la sala de reuniones.",
        note: "La acción propia va en 謙譲語.",
      },
    ],
  },
  {
    id: "phone-transfer",
    context: "telefono",
    title: "Transferencia telefónica",
    situation:
      "Atiendes una llamada, pides espera y avisas que llamarás al responsable.",
    examples: [
      {
        segments: ruby("[少々|しょうしょう]お[待|ま]ちください。"),
        translation: "Espere un momento, por favor.",
      },
      {
        segments: ruby("ただいま[担当者|たんとうしゃ]をお[呼|よ]びいたします。"),
        translation: "Ahora mismo llamaré al encargado.",
      },
    ],
  },
  {
    id: "email-request",
    context: "email",
    title: "Correo de trabajo",
    situation:
      "Abres el mensaje con una fórmula fija y cierras con una petición formal.",
    examples: [
      {
        segments: ruby("いつもお[世話|せわ]になっております。"),
        translation: "Muchas gracias por su constante apoyo.",
      },
      {
        segments: ruby("[何卒|なにとぞ]よろしくお[願|ねが]いいたします。"),
        translation: "Le agradeceré mucho su apoyo / quedo muy atento.",
      },
    ],
  },
  {
    id: "restaurant",
    context: "tienda",
    title: "Atención en tienda o restaurante",
    situation:
      "Recibes al cliente, confirmas la petición y presentas algo con lenguaje de servicio.",
    examples: [
      {
        segments: ruby("いらっしゃいませ。"),
        translation: "Bienvenido/a.",
      },
      {
        segments: ruby("かしこまりました。こちらでございます。"),
        translation: "Entendido. Aquí lo tiene.",
      },
    ],
  },
];

export const KEIGO_MODULE = {
  title: "Keigo",
  jp: "敬語",
  reading: "けいご",
  description:
    "Módulo único para entender cuándo usar 丁寧語, 尊敬語 y 謙譲語 sin separar artificialmente por JLPT.",
  categories: KEIGO_CATEGORIES,
  contexts: KEIGO_CONTEXTS,
  rules: KEIGO_RULES,
  patterns: KEIGO_PATTERNS,
  verbPairs: KEIGO_VERB_PAIRS,
  phrases: KEIGO_PHRASES,
  mistakes: KEIGO_MISTAKES,
  scenarios: KEIGO_SCENARIOS,
} as const;