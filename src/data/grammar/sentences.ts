// src/data/grammar/sentences.ts

import { RubySegment } from "@/app/components/ui/Ruby";


export interface GrammarExample {
  segments: RubySegment[];
  translation: string;
  note?: string;
}

// ─── 品詞 — Partes de la oración ─────────────────────────────────────────────

export interface HinshiEntry {
  key: string;
  jp: string;           // 名詞
  ruby: string;         // めいし
  spanish: string;      // Sustantivo
  definitionEs: string; // Qué es en español
  definitionJp: string; // Qué es en japonés
  examples: { es: string; jp: string; reading?: string }[];
  note?: string;        // special pedagogical note
  connectsWith?: string[]; // partículas u otras conexiones
  color: string;
  accent: string;
  // For verbs — complementos
  complements?: { label: string; particle: string; meaning: string; example: GrammarExample }[];
}

export const HINSHI_LIST: HinshiEntry[] = [
  {
    key: "meishi",
    jp: "名詞", ruby: "めいし", spanish: "Sustantivo",
    definitionEs: "Palabra que nombra a una persona, animal, cosa, lugar o idea.",
    definitionJp: "En japonés no hay artículos (el/la) ni género gramatical. Un sustantivo puede ser concreto (犬 perro) o abstracto (愛 amor).",
    examples: [
      { es: "perro", jp: "犬", reading: "いぬ" },
      { es: "libro", jp: "本", reading: "ほん" },
      { es: "escuela", jp: "学校", reading: "がっこう" },
      { es: "amor", jp: "愛", reading: "あい" },
    ],
    note: "Los sustantivos son la base de la oración. Casi siempre llevan una partícula pegada que indica su función.",
    connectsWith: ["は (tema)", "が (sujeto)", "を (objeto)", "で (lugar/medio)", "に (destino/tiempo)", "の (posesión)"],
    color: "#90CAF9", accent: "#1565C0",
  },
  {
    key: "doushi",
    jp: "動詞", ruby: "どうし", spanish: "Verbo",
    definitionEs: "Palabra que expresa una acción, proceso o estado.",
    definitionJp: "En japonés el verbo siempre va al final de la oración y se conjuga para marcar tiempo, formalidad, negación, etc. Se divide en 3 grupos (Godan, Ichidan, Irregular).",
    examples: [
      { es: "comer", jp: "食べる", reading: "たべる" },
      { es: "ir", jp: "行く", reading: "いく" },
      { es: "hacer", jp: "する" },
      { es: "existir (seres vivos)", jp: "いる" },
      { es: "existir (objetos)", jp: "ある" },
    ],
    note: "Verbos de existencia: いる para seres vivos/animados, ある para objetos inanimados. Ambos usan が para el sujeto y に para el lugar de existencia.",
    color: "#FFAB40", accent: "#E65100",
    complements: [
      {
        label: "Objeto directo", particle: "を", meaning: "Cosa sobre la que recae la acción",
        example: {
          segments: [{ text: "パンを" }, { text: "食", ruby: "た" }, { text: "べます。" }],
          translation: "Como pan.",
        },
      },
      {
        label: "Lugar de acción", particle: "で", meaning: "Dónde sucede la acción",
        example: {
          segments: [{ text: "図書館", ruby: "としょかん" }, { text: "で" }, { text: "勉強", ruby: "べんきょう" }, { text: "します。" }],
          translation: "Estudio en la biblioteca.",
        },
      },
      {
        label: "Destino / dirección", particle: "に / へ", meaning: "Hacia dónde va la acción",
        example: {
          segments: [{ text: "学校", ruby: "がっこう" }, { text: "に" }, { text: "行", ruby: "い" }, { text: "きます。" }],
          translation: "Voy a la escuela.",
        },
      },
      {
        label: "Compañía", particle: "と", meaning: "Con quién se realiza la acción",
        example: {
          segments: [{ text: "友", ruby: "とも" }, { text: "だちと" }, { text: "遊", ruby: "あそ" }, { text: "びます。" }],
          translation: "Juego con amigos.",
        },
      },
      {
        label: "Medio / herramienta", particle: "で", meaning: "Con qué se realiza la acción",
        example: {
          segments: [{ text: "箸", ruby: "はし" }, { text: "で" }, { text: "食", ruby: "た" }, { text: "べます。" }],
          translation: "Como con palillos.",
        },
      },
      {
        label: "Tiempo específico", particle: "に", meaning: "A qué hora / día concreto",
        example: {
          segments: [{ text: "3時", ruby: "さんじ" }, { text: "に" }, { text: "起", ruby: "お" }, { text: "きます。" }],
          translation: "Me levanto a las 3.",
          note: "Solo tiempos específicos (horas, días de la semana, fechas). NO se usa con 今日、毎日、昨日.",
        },
      },
      {
        label: "Lugar de existencia", particle: "に", meaning: "Con いる/ある: dónde existe algo",
        example: {
          segments: [{ text: "部屋", ruby: "へや" }, { text: "に" }, { text: "猫", ruby: "ねこ" }, { text: "がいます。" }],
          translation: "Hay un gato en la habitación.",
        },
      },
    ],
  },
  {
    key: "i-keiyoushi",
    jp: "い形容詞", ruby: "いけいようし", spanish: "Adjetivo い",
    definitionEs: "Palabra que describe o califica a un sustantivo.",
    definitionJp: "Los い-adjetivos terminan en い y se conjugan como si fueran verbos (pasado, negativo). Son descendientes históricos de adjetivos nativos japoneses.",
    examples: [
      { es: "alto / caro", jp: "高い", reading: "たかい" },
      { es: "grande", jp: "大きい", reading: "おおきい" },
      { es: "nuevo", jp: "新しい", reading: "あたらしい" },
      { es: "bueno", jp: "いい / よい" },
    ],
    note: "Se colocan directamente antes del sustantivo sin partícula: 高い山 (montaña alta). Al final de oración llevan です: この山は高いです.",
    color: "#CE93D8", accent: "#6A1B9A",
  },
  {
    key: "na-keiyoushi",
    jp: "な形容詞", ruby: "なけいようし", spanish: "Adjetivo な",
    definitionEs: "Otro tipo de adjetivo, de origen chino o extranjero.",
    definitionJp: "No se conjugan por sí mismos — usan です/だ. Cuando modifican un sustantivo necesitan な entre medio.",
    examples: [
      { es: "tranquilo", jp: "静か", reading: "しずか" },
      { es: "famoso", jp: "有名", reading: "ゆうめい" },
      { es: "amable", jp: "親切", reading: "しんせつ" },
      { es: "conveniente", jp: "便利", reading: "べんり" },
    ],
    note: "Clave: antes de sustantivo llevan な (静かな部屋 — habitación tranquila). Al final de oración llevan です (この部屋は静かです).",
    color: "#80CBC4", accent: "#00695C",
  },
  {
    key: "fukushi",
    jp: "副詞", ruby: "ふくし", spanish: "Adverbio",
    definitionEs: "Palabra que modifica a un verbo, adjetivo u otro adverbio. Indica modo, tiempo, cantidad, frecuencia, etc.",
    definitionJp: "En japonés los adverbios NO se conjugan y usualmente NO llevan partícula. Su posición en la oración es más flexible que otros elementos.",
    examples: [
      { es: "rápidamente", jp: "速く", reading: "はやく" },
      { es: "muy", jp: "とても" },
      { es: "siempre", jp: "いつも" },
      { es: "todos los días", jp: "毎日", reading: "まいにち" },
      { es: "un poco", jp: "少し", reading: "すこし" },
    ],
    note: "⚠️ REGLA IMPORTANTE: Los adverbios de tiempo (毎日、今日、昨日) suelen ir ANTES del tema. Ejemplo: 「毎日、私は勉強します」es más natural que 「私は毎日勉強します」. Además, así evitas confundirte con la partícula に — que SOLO se usa con tiempos específicos como 3時に, 月曜日に, pero NUNCA con 毎日/今日/昨日.",
    color: "#F48FB1", accent: "#AD1457",
  },
  {
    key: "joshi",
    jp: "助詞", ruby: "じょし", spanish: "Partículas",
    definitionEs: "Palabras funcionales sin significado propio que marcan la función de otras palabras en la oración.",
    definitionJp: "En español usamos preposiciones (a, de, en, con) que van antes del sustantivo. En japonés usamos partículas que van DESPUÉS del sustantivo. Toda parte de la oración requiere una partícula para conectarse con el resto.",
    examples: [
      { es: "Tema", jp: "は" },
      { es: "Sujeto", jp: "が" },
      { es: "Objeto directo", jp: "を" },
      { es: "En/con/de", jp: "で" },
      { es: "A/en (destino/existencia)", jp: "に" },
    ],
    note: "Todas las partículas están detalladas en la sección de Partículas. Aquí solo recuerda: cada palabra de la oración necesita una partícula que la conecte, excepto al verbo al final y algunos adverbios.",
    color: "#FFD54F", accent: "#F57F17",
  },
  {
    key: "jodoushi",
    jp: "助動詞", ruby: "じょどうし", spanish: "Verbos auxiliares",
    definitionEs: "Elementos que se combinan con verbos o adjetivos para añadir matices de tiempo, formalidad o modalidad.",
    definitionJp: "En japonés, los auxiliares más comunes son です (cópula formal), だ (cópula informal), ます (marca de formalidad verbal), た (pasado) y ない (negativo).",
    examples: [
      { es: "es / ser (formal)", jp: "です" },
      { es: "es / ser (informal)", jp: "だ" },
      { es: "formalidad verbal", jp: "ます" },
      { es: "pasado", jp: "た" },
      { es: "negativo", jp: "ない" },
    ],
    note: "Estos elementos siempre van al final de la oración y se adhieren al verbo o adjetivo principal.",
    color: "#A5D6A7", accent: "#2E7D32",
  },
  {
    key: "setsuzokushi",
    jp: "接続詞", ruby: "せつぞくし", spanish: "Conjunciones",
    definitionEs: "Palabras que conectan oraciones o ideas entre sí (y, pero, porque, entonces…).",
    definitionJp: "Típicamente aparecen al inicio de una oración para conectarla con la anterior.",
    examples: [
      { es: "y / entonces", jp: "そして" },
      { es: "pero", jp: "でも" },
      { es: "por lo tanto", jp: "だから" },
      { es: "además", jp: "それに" },
      { es: "después", jp: "それから" },
    ],
    color: "#B39DDB", accent: "#4527A0",
  },
  {
    key: "daimeishi",
    jp: "代名詞", ruby: "だいめいし", spanish: "Pronombres",
    definitionEs: "Palabras que reemplazan a un sustantivo (yo, tú, esto, aquello).",
    definitionJp: "En japonés los pronombres se OMITEN frecuentemente cuando el contexto es claro. Decir 私は todo el tiempo suena antinatural.",
    examples: [
      { es: "yo", jp: "私", reading: "わたし" },
      { es: "tú", jp: "あなた" },
      { es: "esto (cerca de mí)", jp: "これ" },
      { es: "eso (cerca de ti)", jp: "それ" },
      { es: "aquello (lejos)", jp: "あれ" },
    ],
    note: "Los pronombres demostrativos siguen el sistema こ/そ/あ/ど — cerca de mí / cerca de ti / lejos / interrogativo.",
    color: "#FFCC80", accent: "#BF360C",
  },
  {
    key: "kandoushi",
    jp: "感動詞", ruby: "かんどうし", spanish: "Interjecciones",
    definitionEs: "Palabras o expresiones que transmiten emoción, sorpresa, afirmación o negación.",
    definitionJp: "Generalmente aparecen al inicio de la oración, separadas del resto.",
    examples: [
      { es: "¡Ah!", jp: "あ！" },
      { es: "sí", jp: "はい" },
      { es: "no", jp: "いいえ" },
      { es: "ehh...", jp: "えーと" },
      { es: "¡Vaya!", jp: "すごい！" },
    ],
    color: "#EF9A9A", accent: "#C62828",
  },
];

// ─── Los 3 tipos de oración ──────────────────────────────────────────────────

export interface SentenceType {
  key: string;
  title: string;
  subtitle: string;
  formula: string;
  color: string;
  accent: string;
  examples: { basic: GrammarExample; expanded?: GrammarExample };
  notes: string[];
}

export const SENTENCE_TYPES: SentenceType[] = [
  {
    key: "noun",
    title: "Oración de sustantivo",
    subtitle: "名詞文",
    formula: "[Tema] は [Sustantivo] です",
    color: "#90CAF9", accent: "#1565C0",
    examples: {
      basic: {
        segments: [{ text: "私", ruby: "わたし" }, { text: "は" }, { text: "学生", ruby: "がくせい" }, { text: "です。" }],
        translation: "Yo soy estudiante.",
      },
      expanded: {
        segments: [{ text: "田中", ruby: "たなか" }, { text: "さんは" }, { text: "日本人", ruby: "にほんじん" }, { text: "の" }, { text: "先生", ruby: "せんせい" }, { text: "です。" }],
        translation: "Tanaka es profesor japonés.",
      },
    },
    notes: [
      "です es la cópula formal (equivale a 'es/soy/son').",
      "En informal se usa だ, pero se omite con frecuencia en lenguaje hablado.",
      "La pregunta se forma añadiendo か al final: 学生ですか？(¿Eres estudiante?)",
    ],
  },
  {
    key: "i-adj",
    title: "Oración de adjetivo い",
    subtitle: "い形容詞文",
    formula: "[Tema] は [い-adj] です",
    color: "#CE93D8", accent: "#6A1B9A",
    examples: {
      basic: {
        segments: [{ text: "この" }, { text: "本", ruby: "ほん" }, { text: "は" }, { text: "難", ruby: "むずか" }, { text: "しいです。" }],
        translation: "Este libro es difícil.",
      },
      expanded: {
        segments: [{ text: "今日", ruby: "きょう" }, { text: "の" }, { text: "天気", ruby: "てんき" }, { text: "はとても" }, { text: "暑", ruby: "あつ" }, { text: "いです。" }],
        translation: "El clima de hoy es muy caluroso.",
      },
    },
    notes: [
      "El adjetivo い ya contiene la idea de 'ser', por eso です es opcional en informal.",
      "En pasado se conjuga el adjetivo (難しかった), NO el です. Error común: 難しいでした ❌",
    ],
  },
  {
    key: "na-adj",
    title: "Oración de adjetivo な",
    subtitle: "な形容詞文",
    formula: "[Tema] は [な-adj] です",
    color: "#80CBC4", accent: "#00695C",
    examples: {
      basic: {
        segments: [{ text: "この" }, { text: "部屋", ruby: "へや" }, { text: "は" }, { text: "静", ruby: "しず" }, { text: "かです。" }],
        translation: "Esta habitación es tranquila.",
      },
      expanded: {
        segments: [{ text: "田中", ruby: "たなか" }, { text: "さんは" }, { text: "とても" }, { text: "親切", ruby: "しんせつ" }, { text: "な" }, { text: "人", ruby: "ひと" }, { text: "です。" }],
        translation: "Tanaka es una persona muy amable.",
      },
    },
    notes: [
      "Al final de oración: な-adj + です (静かです).",
      "Antes de sustantivo: な-adj + な + sustantivo (静かな部屋).",
      "En pasado: 静かでした (NO 静かだった es informal).",
    ],
  },
  {
    key: "verb",
    title: "Oración de verbo",
    subtitle: "動詞文",
    formula: "[Tema] は [complementos] [Verbo]",
    color: "#FFAB40", accent: "#E65100",
    examples: {
      basic: {
        segments: [{ text: "私", ruby: "わたし" }, { text: "は" }, { text: "食", ruby: "た" }, { text: "べます。" }],
        translation: "Yo como.",
      },
      expanded: {
        segments: [{ text: "毎日", ruby: "まいにち" }, { text: "、" }, { text: "私", ruby: "わたし" }, { text: "は" }, { text: "友", ruby: "とも" }, { text: "だちと" }, { text: "学校", ruby: "がっこう" }, { text: "で" }, { text: "昼", ruby: "ひる" }, { text: "ご" }, { text: "飯", ruby: "はん" }, { text: "を" }, { text: "食", ruby: "た" }, { text: "べます。" }],
        translation: "Todos los días, yo como el almuerzo con amigos en la escuela.",
      },
    },
    notes: [
      "El verbo SIEMPRE va al final de la oración.",
      "Los complementos (objeto, lugar, tiempo, etc.) van antes del verbo, cada uno con su partícula.",
      "Los adverbios de tiempo (毎日、今日) suelen ir al inicio, antes del tema.",
    ],
  },
];

// ─── Constructor incremental ─────────────────────────────────────────────────

export interface ConstructorStep {
  label: string;
  added: string;         // what's being added
  addedType: "verb" | "object" | "place" | "companion" | "subject" | "time";
  segments: RubySegment[];
  translation: string;
  explanation: string;
}

export const CONSTRUCTOR_STEPS: ConstructorStep[] = [
  {
    label: "Paso 1 — El verbo solo",
    added: "食べます", addedType: "verb",
    segments: [{ text: "食", ruby: "た" }, { text: "べます。" }],
    translation: "(Alguien) come.",
    explanation: "En japonés, el verbo por sí solo ya es una oración completa. El sujeto se sobreentiende por el contexto.",
  },
  {
    label: "Paso 2 — Añadir objeto directo (を)",
    added: "昼ご飯を", addedType: "object",
    segments: [{ text: "昼", ruby: "ひる" }, { text: "ご" }, { text: "飯", ruby: "はん" }, { text: "を" }, { text: "食", ruby: "た" }, { text: "べます。" }],
    translation: "Como el almuerzo.",
    explanation: "を marca qué se come. El objeto directo siempre va antes del verbo.",
  },
  {
    label: "Paso 3 — Añadir lugar de acción (で)",
    added: "学校で", addedType: "place",
    segments: [{ text: "学校", ruby: "がっこう" }, { text: "で" }, { text: "昼", ruby: "ひる" }, { text: "ご" }, { text: "飯", ruby: "はん" }, { text: "を" }, { text: "食", ruby: "た" }, { text: "べます。" }],
    translation: "Como el almuerzo en la escuela.",
    explanation: "で indica dónde ocurre la acción. No confundir con に (destino) o に (existencia).",
  },
  {
    label: "Paso 4 — Añadir compañía (と)",
    added: "友だちと", addedType: "companion",
    segments: [{ text: "友", ruby: "とも" }, { text: "だちと" }, { text: "学校", ruby: "がっこう" }, { text: "で" }, { text: "昼", ruby: "ひる" }, { text: "ご" }, { text: "飯", ruby: "はん" }, { text: "を" }, { text: "食", ruby: "た" }, { text: "べます。" }],
    translation: "Como el almuerzo con amigos en la escuela.",
    explanation: "と indica con quién. El orden de los complementos es flexible, pero este flujo es el más natural.",
  },
  {
    label: "Paso 5 — Añadir el tema (は)",
    added: "私は", addedType: "subject",
    segments: [{ text: "私", ruby: "わたし" }, { text: "は" }, { text: "友", ruby: "とも" }, { text: "だちと" }, { text: "学校", ruby: "がっこう" }, { text: "で" }, { text: "昼", ruby: "ひる" }, { text: "ご" }, { text: "飯", ruby: "はん" }, { text: "を" }, { text: "食", ruby: "た" }, { text: "べます。" }],
    translation: "Yo como el almuerzo con amigos en la escuela.",
    explanation: "は marca el tema de la oración. En japonés se omite cuando el contexto es claro — por eso empezamos sin él.",
  },
  {
    label: "Paso 6 — Añadir adverbio de tiempo (AL INICIO)",
    added: "毎日、", addedType: "time",
    segments: [{ text: "毎日", ruby: "まいにち" }, { text: "、" }, { text: "私", ruby: "わたし" }, { text: "は" }, { text: "友", ruby: "とも" }, { text: "だちと" }, { text: "学校", ruby: "がっこう" }, { text: "で" }, { text: "昼", ruby: "ひる" }, { text: "ご" }, { text: "飯", ruby: "はん" }, { text: "を" }, { text: "食", ruby: "た" }, { text: "べます。" }],
    translation: "Todos los días, yo como el almuerzo con amigos en la escuela.",
    explanation: "⚠️ Los adverbios de tiempo como 毎日 van ANTES del tema. Además NO llevan partícula に (esa solo se usa con tiempos específicos como 3時に, 月曜日に).",
  },
];

export const CONSTRUCTOR_COLORS: Record<ConstructorStep["addedType"], { color: string; accent: string; label: string }> = {
  verb:      { color: "#FFAB40", accent: "#E65100", label: "Verbo"             },
  object:    { color: "#90CAF9", accent: "#1565C0", label: "Objeto directo (を)" },
  place:     { color: "#A5D6A7", accent: "#2E7D32", label: "Lugar de acción (で)"},
  companion: { color: "#CE93D8", accent: "#6A1B9A", label: "Compañía (と)"       },
  subject:   { color: "#FFD54F", accent: "#F57F17", label: "Tema (は)"           },
  time:      { color: "#F48FB1", accent: "#AD1457", label: "Adverbio de tiempo"  },
};