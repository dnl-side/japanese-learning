// src/data/grammar/time.ts

import { RubySegment } from "@/app/components/ui/Ruby";


export interface TimeExample {
  segments: RubySegment[];
  translation: string;
  note?: string;
}

// ─── です conjugations ────────────────────────────────────────────────────────

export interface DesuForm {
  label: string;            // "Afirmativo presente"
  formal: string;           // です
  formalAlt?: string;       // alt formal variant
  informal: string;         // だ
  informalAlt?: string;
  semiFormal?: string;      // ではないです / じゃないです
  note?: string;
  example: TimeExample;
}

export const DESU_FORMS: DesuForm[] = [
  {
    label: "Afirmativo no-pasado",
    formal: "です",
    informal: "だ",
    note: "です es la cópula formal. En lenguaje informal だ se usa poco en conversación — suele omitirse dejando solo el sustantivo/adjetivo.",
    example: {
      segments: [{ text: "私", ruby: "わたし" }, { text: "は" }, { text: "学生", ruby: "がくせい" }, { text: "です。" }],
      translation: "Soy estudiante.",
    },
  },
  {
    label: "Afirmativo pasado",
    formal: "でした",
    informal: "だった",
    example: {
      segments: [{ text: "去年", ruby: "きょねん" }, { text: "は" }, { text: "学生", ruby: "がくせい" }, { text: "でした。" }],
      translation: "El año pasado era estudiante.",
    },
  },
  {
    label: "Negativo no-pasado",
    formal: "ではありません",
    formalAlt: "ではないです",
    informal: "じゃない",
    informalAlt: "ではない",
    semiFormal: "じゃないです",
    note: "ではありません es el más formal. じゃないです se escucha muy frecuente en conversación educada pero relajada. じゃない solo entre amigos/familia.",
    example: {
      segments: [{ text: "私", ruby: "わたし" }, { text: "は" }, { text: "先生", ruby: "せんせい" }, { text: "ではありません。" }],
      translation: "No soy profesor.",
    },
  },
  {
    label: "Negativo pasado",
    formal: "ではありませんでした",
    formalAlt: "ではなかったです",
    informal: "じゃなかった",
    informalAlt: "ではなかった",
    semiFormal: "じゃなかったです",
    note: "Misma lógica que el negativo no-pasado. じゃなかったです es conversacional pero educado.",
    example: {
      segments: [{ text: "昨日", ruby: "きのう" }, { text: "は" }, { text: "休", ruby: "やす" }, { text: "みではありませんでした。" }],
      translation: "Ayer no era día libre.",
    },
  },
];

// ─── ている — Presente continuo / aspecto ────────────────────────────────────

export interface TeiruUse {
  title: string;
  description: string;
  example: TimeExample;
}

export const TEIRU_USES: TeiruUse[] = [
  {
    title: "Acción en progreso",
    description: "Equivale al 'estar + gerundio' del español. La acción está ocurriendo en el momento de hablar.",
    example: {
      segments: [{ text: "今", ruby: "いま" }, { text: "ご" }, { text: "飯", ruby: "はん" }, { text: "を" }, { text: "食", ruby: "た" }, { text: "べています。" }],
      translation: "Ahora estoy comiendo.",
    },
  },
  {
    title: "Hábito / acción repetida",
    description: "Una acción que se realiza habitualmente. No es 'estoy haciendo ahora', sino 'hago regularmente'.",
    example: {
      segments: [{ text: "毎朝", ruby: "まいあさ" }, { text: "コーヒーを" }, { text: "飲", ruby: "の" }, { text: "んでいます。" }],
      translation: "Tomo café todas las mañanas. (hábito)",
    },
  },
  {
    title: "Estado resultante",
    description: "Con ciertos verbos (結婚する, 住む, 知る, 持つ…) indica el estado resultante de una acción pasada. NO se traduce como 'estoy -ando'.",
    example: {
      segments: [{ text: "日本", ruby: "にほん" }, { text: "に" }, { text: "住", ruby: "す" }, { text: "んでいます。" }],
      translation: "Vivo en Japón. (NO 'estoy viviendo')",
      note: "結婚しています = 'estoy casado', no 'me estoy casando'. 知っています = 'lo sé', no 'lo estoy sabiendo'.",
    },
  },
];

export const TEIRU_NEGATIVE = {
  forms: [
    { label: "Formal neg. no-pasado", form: "〜ていません" },
    { label: "Formal neg. pasado",    form: "〜ていませんでした" },
    { label: "Informal neg. no-pasado",form: "〜ていない" },
    { label: "Informal neg. pasado",  form: "〜ていなかった" },
  ],
  example: {
    segments: [{ text: "まだ" }, { text: "食", ruby: "た" }, { text: "べていません。" }],
    translation: "Todavía no he comido.",
  },
};

// ─── Verb tense summary ──────────────────────────────────────────────────────

export const VERB_TENSE_SUMMARY = [
  { label: "No-pasado afirmativo", formal: "食べます",       informal: "食べる",     meaning: "como / comeré" },
  { label: "Pasado afirmativo",    formal: "食べました",     informal: "食べた",     meaning: "comí" },
  { label: "No-pasado negativo",   formal: "食べません",     informal: "食べない",   meaning: "no como / no comeré" },
  { label: "Pasado negativo",      formal: "食べませんでした",informal: "食べなかった", meaning: "no comí" },
  { label: "Progresivo / estado",  formal: "食べています",   informal: "食べている", meaning: "estoy comiendo / como (hábito)" },
];

// ─── Adjective tense summary ─────────────────────────────────────────────────

export const ADJ_TENSE_SUMMARY = {
  i: [
    { label: "No-pasado afirm.", form: "高いです",           meaning: "es alto/caro" },
    { label: "Pasado afirm.",    form: "高かったです",        meaning: "era alto/caro" },
    { label: "No-pasado neg.",   form: "高くないです",        meaning: "no es alto/caro" },
    { label: "Pasado neg.",      form: "高くなかったです",    meaning: "no era alto/caro" },
  ],
  na: [
    { label: "No-pasado afirm.", form: "静かです",             meaning: "es tranquilo" },
    { label: "Pasado afirm.",    form: "静かでした",           meaning: "era tranquilo" },
    { label: "No-pasado neg.",   form: "静かではありません",   meaning: "no es tranquilo" },
    { label: "Pasado neg.",      form: "静かではありませんでした", meaning: "no era tranquilo" },
  ],
};

// ─── Time expressions ────────────────────────────────────────────────────────

export interface TimeMarker {
  jp: string;
  reading?: string;
  meaning: string;
  usesNi?: boolean;     // requires に particle
  example: TimeExample;
}

export interface TimeMarkerGroup {
  title: string;
  color: string;
  accent: string;
  markers: TimeMarker[];
}

export const TIME_MARKERS: TimeMarkerGroup[] = [
  {
    title: "Presente / hábito",
    color: "#81C784", accent: "#2E7D32",
    markers: [
      { jp: "いつも", meaning: "siempre", example: { segments: [{ text: "いつも" }, { text: "元気", ruby: "げんき" }, { text: "です。" }], translation: "Siempre está bien." } },
      { jp: "毎日", reading: "まいにち", meaning: "todos los días", example: { segments: [{ text: "毎日", ruby: "まいにち" }, { text: "、" }, { text: "勉強", ruby: "べんきょう" }, { text: "します。" }], translation: "Estudio todos los días." } },
      { jp: "よく", meaning: "a menudo", example: { segments: [{ text: "よく" }, { text: "映画", ruby: "えいが" }, { text: "を" }, { text: "見", ruby: "み" }, { text: "ます。" }], translation: "Veo películas a menudo." } },
      { jp: "今", reading: "いま", meaning: "ahora", example: { segments: [{ text: "今", ruby: "いま" }, { text: "、" }, { text: "忙", ruby: "いそが" }, { text: "しいです。" }], translation: "Ahora estoy ocupado." } },
      { jp: "たいてい", meaning: "usualmente", example: { segments: [{ text: "たいてい7時", ruby: "しちじ" }, { text: "に" }, { text: "起", ruby: "お" }, { text: "きます。" }], translation: "Usualmente me levanto a las 7.", note: "7時 lleva に (hora específica)" } },
    ],
  },
  {
    title: "Pasado",
    color: "#64B5F6", accent: "#1565C0",
    markers: [
      { jp: "昨日", reading: "きのう", meaning: "ayer", example: { segments: [{ text: "昨日", ruby: "きのう" }, { text: "、" }, { text: "日本", ruby: "にほん" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きました。" }], translation: "Ayer fui a Japón." } },
      { jp: "さっき", meaning: "hace un rato", example: { segments: [{ text: "さっき" }, { text: "食", ruby: "た" }, { text: "べました。" }], translation: "Comí hace un rato." } },
      { jp: "この前", reading: "このまえ", meaning: "el otro día", example: { segments: [{ text: "この" }, { text: "前", ruby: "まえ" }, { text: "、" }, { text: "会", ruby: "あ" }, { text: "いました。" }], translation: "Nos vimos el otro día." } },
      { jp: "去年", reading: "きょねん", meaning: "el año pasado", example: { segments: [{ text: "去年", ruby: "きょねん" }, { text: "、" }, { text: "結婚", ruby: "けっこん" }, { text: "しました。" }], translation: "Me casé el año pasado." } },
      { jp: "先週", reading: "せんしゅう", meaning: "la semana pasada", example: { segments: [{ text: "先週", ruby: "せんしゅう" }, { text: "は" }, { text: "忙", ruby: "いそが" }, { text: "しかったです。" }], translation: "La semana pasada estuvo ocupada." } },
    ],
  },
  {
    title: "Futuro / intención",
    color: "#FFB74D", accent: "#E65100",
    markers: [
      { jp: "明日", reading: "あした", meaning: "mañana", example: { segments: [{ text: "明日", ruby: "あした" }, { text: "、" }, { text: "会", ruby: "あ" }, { text: "いましょう。" }], translation: "Encontrémonos mañana." } },
      { jp: "来週", reading: "らいしゅう", meaning: "la próxima semana", example: { segments: [{ text: "来週", ruby: "らいしゅう" }, { text: "、" }, { text: "旅行", ruby: "りょこう" }, { text: "します。" }], translation: "Viajaré la próxima semana." } },
      { jp: "今度", reading: "こんど", meaning: "la próxima vez / pronto", example: { segments: [{ text: "今度", ruby: "こんど" }, { text: "、" }, { text: "一緒", ruby: "いっしょ" }, { text: "に" }, { text: "行", ruby: "い" }, { text: "きましょう。" }], translation: "La próxima vez vamos juntos." } },
      { jp: "あとで", meaning: "después", example: { segments: [{ text: "あとで" }, { text: "電話", ruby: "でんわ" }, { text: "します。" }], translation: "Te llamo después." } },
      { jp: "来年", reading: "らいねん", meaning: "el próximo año", example: { segments: [{ text: "来年", ruby: "らいねん" }, { text: "、" }, { text: "日本", ruby: "にほん" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }], translation: "El próximo año iré a Japón." } },
    ],
  },
  {
    title: "Duración / continuidad",
    color: "#BA68C8", accent: "#6A1B9A",
    markers: [
      { jp: "ずっと", meaning: "todo el tiempo / desde hace mucho", example: { segments: [{ text: "ずっと" }, { text: "待", ruby: "ま" }, { text: "っています。" }], translation: "Llevo esperando todo el tiempo." } },
      { jp: "もう", meaning: "ya", example: { segments: [{ text: "もう" }, { text: "食", ruby: "た" }, { text: "べました。" }], translation: "Ya comí." } },
      { jp: "まだ", meaning: "todavía / aún no", example: { segments: [{ text: "まだ" }, { text: "食", ruby: "た" }, { text: "べていません。" }], translation: "Todavía no he comido.", note: "まだ + negativo = 'aún no'. まだ + afirmativo = 'todavía'." } },
      { jp: "これから", meaning: "a partir de ahora", example: { segments: [{ text: "これから" }, { text: "頑張", ruby: "がんば" }, { text: "ります。" }], translation: "A partir de ahora me esforzaré." } },
    ],
  },
  {
    title: "Tiempos específicos (requieren に)",
    color: "#F06292", accent: "#AD1457",
    markers: [
      { jp: "3時", reading: "さんじ", meaning: "a las 3", usesNi: true, example: { segments: [{ text: "3時", ruby: "さんじ" }, { text: "に" }, { text: "会", ruby: "あ" }, { text: "いましょう。" }], translation: "Encontrémonos a las 3." } },
      { jp: "月曜日", reading: "げつようび", meaning: "el lunes", usesNi: true, example: { segments: [{ text: "月曜日", ruby: "げつようび" }, { text: "に" }, { text: "学校", ruby: "がっこう" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }], translation: "Voy a la escuela el lunes." } },
      { jp: "5月", reading: "ごがつ", meaning: "en mayo", usesNi: true, example: { segments: [{ text: "5月", ruby: "ごがつ" }, { text: "に" }, { text: "結婚", ruby: "けっこん" }, { text: "します。" }], translation: "Me caso en mayo." } },
      { jp: "1996年", reading: "せんきゅうひゃくきゅうじゅうろくねん", meaning: "en 1996", usesNi: true, example: { segments: [{ text: "1996年", ruby: "せんきゅうひゃくきゅうじゅうろくねん" }, { text: "に" }, { text: "生", ruby: "う" }, { text: "まれました。" }], translation: "Nací en 1996." } },
    ],
  },
];

// ─── Comparatives ────────────────────────────────────────────────────────────

export interface ComparisonGroup {
  title: string;
  description: string;
  items: { label: string; example: TimeExample }[];
}

export const COMPARISONS: ComparisonGroup[] = [
  {
    title: "Misma oración, distinto tiempo",
    description: "Observa cómo solo cambia la terminación del verbo, pero toda la oración cambia de significado.",
    items: [
      { label: "No-pasado", example: { segments: [{ text: "日本語", ruby: "にほんご" }, { text: "を" }, { text: "勉強", ruby: "べんきょう" }, { text: "します。" }], translation: "Estudio japonés." } },
      { label: "Pasado",    example: { segments: [{ text: "日本語", ruby: "にほんご" }, { text: "を" }, { text: "勉強", ruby: "べんきょう" }, { text: "しました。" }], translation: "Estudié japonés." } },
      { label: "ている",    example: { segments: [{ text: "日本語", ruby: "にほんご" }, { text: "を" }, { text: "勉強", ruby: "べんきょう" }, { text: "しています。" }], translation: "Estoy estudiando / estudio japonés (hábito)." } },
    ],
  },
  {
    title: "Mismo contenido, distinta terminación con です",
    description: "El sustantivo/adjetivo no cambia — solo cambia です a sus distintas formas.",
    items: [
      { label: "Afirm. no-pasado", example: { segments: [{ text: "学生", ruby: "がくせい" }, { text: "です。" }], translation: "Soy estudiante." } },
      { label: "Afirm. pasado",    example: { segments: [{ text: "学生", ruby: "がくせい" }, { text: "でした。" }], translation: "Era estudiante." } },
      { label: "Neg. no-pasado",   example: { segments: [{ text: "学生", ruby: "がくせい" }, { text: "ではありません。" }], translation: "No soy estudiante." } },
      { label: "Neg. pasado",      example: { segments: [{ text: "学生", ruby: "がくせい" }, { text: "ではありませんでした。" }], translation: "No era estudiante." } },
    ],
  },
  {
    title: "Mismo verbo, distinto matiz",
    description: "住みます vs 住んでいます — la diferencia entre acción y estado resultante es clave.",
    items: [
      { label: "住みます",     example: { segments: [{ text: "日本", ruby: "にほん" }, { text: "に" }, { text: "住", ruby: "す" }, { text: "みます。" }], translation: "Viviré / viviría en Japón. (futuro o intención)" } },
      { label: "住んでいます", example: { segments: [{ text: "日本", ruby: "にほん" }, { text: "に" }, { text: "住", ruby: "す" }, { text: "んでいます。" }], translation: "Vivo en Japón. (estado actual)" } },
    ],
  },
];