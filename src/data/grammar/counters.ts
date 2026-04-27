import type { RubySegment } from "@/app/components/ui/Ruby";

export type JLPTLevel = "N5" | "N4" | "N3" | "N2" | "N1";

export type QuantityMainTab = "numbers" | "counters" | "time" | "duration";

export type CounterFamilyId =
  | "general-objects"
  | "people-animals"
  | "time-point"
  | "duration"
  | "money-frequency"
  | "order-location";

export type CounterImportance = "core" | "basic" | "useful" | "advanced";

export interface NumberReference {
  value: string;
  reading: string;
  note?: string;
}

export interface NumberPlace {
  id: "ones" | "tens" | "hundreds" | "thousands";
  label: string;
  jp: string;
  multiplier: number;
  accent: string;
  description: string;
}

export interface LargeNumberGroup {
  id: "base" | "man" | "oku" | "chou";
  label: string;
  jp: string;
  multiplierLabel: string;
  accent: string;
  description: string;
}

export interface NumberBuildExample {
  id: string;
  value: string;
  expression: string;
  reading: string;
  chunks: Array<{
    label: string;
    value: string;
    reading: string;
    accent: string;
  }>;
  note?: string;
}

export interface DecimalExample {
  id: string;
  value: string;
  reading: string;
  note: string;
}

export interface FractionExample {
  id: string;
  value: string;
  reading: string;
  denominator: string;
  numerator: string;
  note: string;
}

export interface CounterReading {
  num: number;
  display: string;
  reading: string;
  irregular?: boolean;
  important?: boolean;
  aliases?: string[];
  note?: string;
}

export interface CounterExample {
  id: string;
  jp: RubySegment[];
  es: string;
  pattern?: string;
}

export interface CounterFamily {
  id: CounterFamilyId;
  label: string;
  jp: string;
  description: string;
  accent: string;
  soft: string;
}

export interface CounterEntry {
  id: string;
  counter: string;
  reading: string;
  family: CounterFamilyId;
  title: string;
  meaning: string;
  usage: string;
  warning?: string;
  questionWord: RubySegment[];
  level: CounterImportance;
  jlpt: JLPTLevel;
  examples: RubySegment[];
  readings: CounterReading[];
  exampleSentences: CounterExample[];
  relatedCounters?: string[];
}

const seg = (text: string, ruby?: string): RubySegment => (ruby ? { text, ruby } : { text });
const jp = (...segments: RubySegment[]) => segments;

export const NUMBER_REFERENCES: NumberReference[] = [
  { value: "0", reading: "れい / ゼロ", note: "れい es más formal; ゼロ es muy común en conversación." },
  { value: "1", reading: "いち" },
  { value: "2", reading: "に" },
  { value: "3", reading: "さん" },
  { value: "4", reading: "よん / し", note: "よん es la base segura. し aparece en 4時 y 4月." },
  { value: "5", reading: "ご" },
  { value: "6", reading: "ろく" },
  { value: "7", reading: "なな / しち", note: "なな es cómodo para evitar confusiones, pero しち aparece mucho en tiempo." },
  { value: "8", reading: "はち" },
  { value: "9", reading: "きゅう / く", note: "く aparece en 9時 y 9月." },
  { value: "10", reading: "じゅう" },
];

export const NUMBER_PLACES: NumberPlace[] = [
  {
    id: "thousands",
    label: "Milésima",
    jp: "千",
    multiplier: 1000,
    accent: "#E11D48",
    description: "Unidad × 1000. Cuidado con 3000 y 8000.",
  },
  {
    id: "hundreds",
    label: "Centena",
    jp: "百",
    multiplier: 100,
    accent: "#D97706",
    description: "Unidad × 100. Cuidado con 300, 600 y 800.",
  },
  {
    id: "tens",
    label: "Decena",
    jp: "十",
    multiplier: 10,
    accent: "#0284C7",
    description: "Unidad × 10 + posible unidad final.",
  },
  {
    id: "ones",
    label: "Unidad",
    jp: "一",
    multiplier: 1,
    accent: "#64748B",
    description: "Base 1〜9. Esta pieza se repite dentro de cada grupo.",
  },
];

export const LARGE_NUMBER_GROUPS: LargeNumberGroup[] = [
  {
    id: "chou",
    label: "Grupo 兆",
    jp: "兆",
    multiplierLabel: "10¹²",
    accent: "#7C3AED",
    description: "Grupo de 兆. Va antes de 億・万・grupo final.",
  },
  {
    id: "oku",
    label: "Grupo 億",
    jp: "億",
    multiplierLabel: "10⁸",
    accent: "#2563EB",
    description: "Grupo de 億. En japonés se piensa como bloque propio.",
  },
  {
    id: "man",
    label: "Grupo 万",
    jp: "万",
    multiplierLabel: "10⁴",
    accent: "#059669",
    description: "Primer salto grande. El grupo de 1〜9999 se coloca antes de 万.",
  },
  {
    id: "base",
    label: "Grupo final",
    jp: "一",
    multiplierLabel: "1",
    accent: "#EA580C",
    description: "Último grupo de 1〜9999, sin marca grande al final.",
  },
];

export const NUMBER_BUILD_EXAMPLES: NumberBuildExample[] = [
  {
    id: "number-43",
    value: "43",
    expression: "4 × 10 + 3",
    reading: "よんじゅうさん",
    chunks: [
      { label: "十", value: "4", reading: "よんじゅう", accent: "#0284C7" },
      { label: "一", value: "3", reading: "さん", accent: "#64748B" },
    ],
  },
  {
    id: "number-687",
    value: "687",
    expression: "6 × 100 + 8 × 10 + 7",
    reading: "ろっぴゃくはちじゅうなな",
    chunks: [
      { label: "百", value: "6", reading: "ろっぴゃく", accent: "#D97706" },
      { label: "十", value: "8", reading: "はちじゅう", accent: "#0284C7" },
      { label: "一", value: "7", reading: "なな", accent: "#64748B" },
    ],
    note: "600 no se lee ろくひゃく, sino ろっぴゃく.",
  },
  {
    id: "number-8346",
    value: "8346",
    expression: "8 × 1000 + 3 × 100 + 4 × 10 + 6",
    reading: "はっせんさんびゃくよんじゅうろく",
    chunks: [
      { label: "千", value: "8", reading: "はっせん", accent: "#E11D48" },
      { label: "百", value: "3", reading: "さんびゃく", accent: "#D97706" },
      { label: "十", value: "4", reading: "よんじゅう", accent: "#0284C7" },
      { label: "一", value: "6", reading: "ろく", accent: "#64748B" },
    ],
    note: "8000 y 300 tienen cambio de sonido.",
  },
  {
    id: "number-58346",
    value: "58,346",
    expression: "5万 + 8346",
    reading: "ごまんはっせんさんびゃくよんじゅうろく",
    chunks: [
      { label: "万", value: "5", reading: "ごまん", accent: "#059669" },
      { label: "千百十一", value: "8346", reading: "はっせんさんびゃくよんじゅうろく", accent: "#EA580C" },
    ],
    note: "El grupo 8346 se repite completo después de 万.",
  },
  {
    id: "number-235008000",
    value: "235,008,000",
    expression: "2億 + 3500万 + 8000",
    reading: "におくさんぜんごひゃくまんはっせん",
    chunks: [
      { label: "億", value: "2", reading: "におく", accent: "#2563EB" },
      { label: "万", value: "3500", reading: "さんぜんごひゃくまん", accent: "#059669" },
      { label: "一", value: "8000", reading: "はっせん", accent: "#EA580C" },
    ],
  },
  {
    id: "number-1234567891234",
    value: "1,234,567,891,234",
    expression: "1兆 + 2345億 + 6789万 + 1234",
    reading: "いっちょうにせんさんびゃくよんじゅうごおくろくせんななひゃくはちじゅうきゅうまんせんにひゃくさんじゅうよん",
    chunks: [
      { label: "兆", value: "1", reading: "いっちょう", accent: "#7C3AED" },
      { label: "億", value: "2345", reading: "にせんさんびゃくよんじゅうごおく", accent: "#2563EB" },
      { label: "万", value: "6789", reading: "ろくせんななひゃくはちじゅうきゅうまん", accent: "#059669" },
      { label: "一", value: "1234", reading: "せんにひゃくさんじゅうよん", accent: "#EA580C" },
    ],
  },
];

export const DECIMAL_EXAMPLES: DecimalExample[] = [
  { id: "decimal-3-14", value: "3.14", reading: "さんてんいちよん", note: "Después de 点, los dígitos se leen uno por uno." },
  { id: "decimal-0-5", value: "0.5", reading: "れいてんご / ゼロてんご", note: "0 puede leerse れい o ゼロ según el contexto." },
  { id: "decimal-12-08", value: "12.08", reading: "じゅうにてんれいはち", note: "El 0 después del punto también se lee." },
];

export const FRACTION_EXAMPLES: FractionExample[] = [
  { id: "fraction-half", value: "1/2", reading: "にぶんのいち", denominator: "2", numerator: "1", note: "Primero se lee el denominador, después el numerador." },
  { id: "fraction-three-fourths", value: "3/4", reading: "よんぶんのさん", denominator: "4", numerator: "3", note: "La estructura es denominador + 分の + numerador." },
  { id: "fraction-five-eighths", value: "5/8", reading: "はちぶんのご", denominator: "8", numerator: "5", note: "No se lee de izquierda a derecha como en español." },
];

export const COUNTER_FAMILIES: CounterFamily[] = [
  {
    id: "general-objects",
    label: "Objetos y unidades",
    jp: "もの",
    description: "Contadores para cosas generales, objetos planos, largos, libros, máquinas y bebidas.",
    accent: "#00695C",
    soft: "#80CBC4",
  },
  {
    id: "people-animals",
    label: "Personas y animales",
    jp: "人・動物",
    description: "Personas, animales pequeños, animales grandes y aves.",
    accent: "#7C2D12",
    soft: "#FDBA74",
  },
  {
    id: "time-point",
    label: "Tiempo puntual",
    jp: "時点",
    description: "Hora, minuto, día del mes, mes del año y año calendario.",
    accent: "#1D4ED8",
    soft: "#93C5FD",
  },
  {
    id: "duration",
    label: "Duración y periodos",
    jp: "期間",
    description: "Horas, minutos, días, semanas, meses y años como duración.",
    accent: "#7E22CE",
    soft: "#C084FC",
  },
  {
    id: "money-frequency",
    label: "Dinero y frecuencia",
    jp: "円・回",
    description: "Precios, frecuencia, veces y repetición.",
    accent: "#15803D",
    soft: "#86EFAC",
  },
  {
    id: "order-location",
    label: "Orden y pisos",
    jp: "番・階",
    description: "Número de orden, turnos, rankings y pisos de edificios.",
    accent: "#B45309",
    soft: "#FCD34D",
  },
];

export const COUNTERS: CounterEntry[] = [
  {
    id: "tsu",
    counter: "つ",
    reading: "つ",
    family: "general-objects",
    title: "General básico",
    meaning: "cosas en general, pedidos simples, unidades sin clasificar",
    usage: "Muy útil al comienzo porque cubre muchas cosas cuando no quieres o no puedes elegir un contador específico.",
    warning: "La serie 1〜10 es especial y conviene memorizarla como vocabulario propio.",
    questionWord: jp(seg("いくつ")),
    level: "core",
    jlpt: "N5",
    examples: jp(seg("りんご"), seg("・"), seg("みかん"), seg("・"), seg("ハンバーガー"), seg("・"), seg("ケーキ")),
    readings: [
      { num: 1, display: "1つ", reading: "ひとつ", irregular: true, important: true },
      { num: 2, display: "2つ", reading: "ふたつ", irregular: true, important: true },
      { num: 3, display: "3つ", reading: "みっつ", irregular: true, important: true },
      { num: 4, display: "4つ", reading: "よっつ", irregular: true, important: true },
      { num: 5, display: "5つ", reading: "いつつ", irregular: true },
      { num: 6, display: "6つ", reading: "むっつ", irregular: true },
      { num: 7, display: "7つ", reading: "ななつ" },
      { num: 8, display: "8つ", reading: "やっつ", irregular: true },
      { num: 9, display: "9つ", reading: "ここのつ", irregular: true },
      { num: 10, display: "10", reading: "とお", irregular: true, important: true, note: "10つ no se usa como forma base." },
    ],
    exampleSentences: [
      { id: "tsu-1", jp: jp(seg("りんごを"), seg("1つ", "ひとつ"), seg("ください。")), es: "Quisiera una manzana.", pattern: "AをNください" },
      { id: "tsu-2", jp: jp(seg("チーズバーガーを"), seg("2つ", "ふたつ"), seg("ください。")), es: "Quisiera dos cheeseburgers.", pattern: "pedido" },
      { id: "tsu-3", jp: jp(seg("テーブルの上にケーキが"), seg("3つ", "みっつ"), seg("あります。")), es: "Hay tres pasteles sobre la mesa.", pattern: "existencia" },
    ],
    relatedCounters: ["ko"],
  },
  {
    id: "ko",
    counter: "個",
    reading: "こ",
    family: "general-objects",
    title: "Objetos compactos",
    meaning: "objetos pequeños, compactos o unidades individuales",
    usage: "Sirve para frutas, huevos, cajas pequeñas, botones, objetos compactos y unidades generales.",
    warning: "1・6・8・10 tienen cambios de sonido.",
    questionWord: jp(seg("何個", "なんこ")),
    level: "core",
    jlpt: "N5",
    examples: jp(seg("りんご"), seg("・"), seg("卵", "たまご"), seg("・"), seg("ボール"), seg("・"), seg("箱", "はこ")),
    readings: [
      { num: 1, display: "1個", reading: "いっこ", irregular: true, important: true },
      { num: 2, display: "2個", reading: "にこ" },
      { num: 3, display: "3個", reading: "さんこ" },
      { num: 4, display: "4個", reading: "よんこ" },
      { num: 5, display: "5個", reading: "ごこ" },
      { num: 6, display: "6個", reading: "ろっこ", irregular: true },
      { num: 7, display: "7個", reading: "ななこ" },
      { num: 8, display: "8個", reading: "はっこ", irregular: true },
      { num: 9, display: "9個", reading: "きゅうこ" },
      { num: 10, display: "10個", reading: "じゅっこ", irregular: true },
    ],
    exampleSentences: [
      { id: "ko-1", jp: jp(seg("卵", "たまご"), seg("を"), seg("2個", "にこ"), seg("買いました。")), es: "Compré dos huevos." },
      { id: "ko-2", jp: jp(seg("箱", "はこ"), seg("の中にボールが"), seg("8個", "はっこ"), seg("あります。")), es: "Hay ocho pelotas dentro de la caja." },
    ],
    relatedCounters: ["tsu"],
  },
  {
    id: "mai",
    counter: "枚",
    reading: "まい",
    family: "general-objects",
    title: "Planos y delgados",
    meaning: "papeles, fotos, tarjetas, platos, ropa plana y objetos delgados",
    usage: "Se usa cuando la forma plana o delgada del objeto importa.",
    questionWord: jp(seg("何枚", "なんまい")),
    level: "core",
    jlpt: "N5",
    examples: jp(seg("紙", "かみ"), seg("・"), seg("写真", "しゃしん"), seg("・"), seg("カード"), seg("・"), seg("皿", "さら")),
    readings: [
      { num: 1, display: "1枚", reading: "いちまい" },
      { num: 2, display: "2枚", reading: "にまい" },
      { num: 3, display: "3枚", reading: "さんまい" },
      { num: 4, display: "4枚", reading: "よんまい" },
      { num: 5, display: "5枚", reading: "ごまい" },
      { num: 6, display: "6枚", reading: "ろくまい" },
      { num: 7, display: "7枚", reading: "ななまい" },
      { num: 8, display: "8枚", reading: "はちまい" },
      { num: 9, display: "9枚", reading: "きゅうまい" },
      { num: 10, display: "10枚", reading: "じゅうまい" },
    ],
    exampleSentences: [
      { id: "mai-1", jp: jp(seg("写真", "しゃしん"), seg("を"), seg("3枚", "さんまい"), seg("ください。")), es: "Quisiera tres fotos." },
      { id: "mai-2", jp: jp(seg("白いシャツが"), seg("1枚", "いちまい"), seg("あります。")), es: "Hay una camisa blanca." },
    ],
  },
  {
    id: "hon",
    counter: "本",
    reading: "ほん",
    family: "general-objects",
    title: "Largos o cilíndricos",
    meaning: "lápices, botellas, paraguas, árboles y objetos alargados",
    usage: "Cuenta objetos con forma larga, cilíndrica o lineal. También aparece en objetos como paraguas y botellas.",
    warning: "1・3・6・8・10 cambian a ぽん / ぼん.",
    questionWord: jp(seg("何本", "なんぼん")),
    level: "core",
    jlpt: "N5",
    examples: jp(seg("鉛筆", "えんぴつ"), seg("・"), seg("ペン"), seg("・"), seg("傘", "かさ"), seg("・"), seg("ボトル")),
    readings: [
      { num: 1, display: "1本", reading: "いっぽん", irregular: true, important: true },
      { num: 2, display: "2本", reading: "にほん" },
      { num: 3, display: "3本", reading: "さんぼん", irregular: true, important: true },
      { num: 4, display: "4本", reading: "よんほん" },
      { num: 5, display: "5本", reading: "ごほん" },
      { num: 6, display: "6本", reading: "ろっぽん", irregular: true },
      { num: 7, display: "7本", reading: "ななほん" },
      { num: 8, display: "8本", reading: "はっぽん", irregular: true },
      { num: 9, display: "9本", reading: "きゅうほん" },
      { num: 10, display: "10本", reading: "じゅっぽん", irregular: true },
    ],
    exampleSentences: [
      { id: "hon-1", jp: jp(seg("ペンを"), seg("2本", "にほん"), seg("ください。")), es: "Quisiera dos lápices/bolígrafos." },
      { id: "hon-2", jp: jp(seg("木", "き"), seg("が"), seg("3本", "さんぼん"), seg("あります。")), es: "Hay tres árboles." },
    ],
  },
  {
    id: "satsu",
    counter: "冊",
    reading: "さつ",
    family: "general-objects",
    title: "Libros y cuadernos",
    meaning: "libros, cuadernos, revistas, mangas y documentos encuadernados",
    usage: "Sirve para objetos tipo libro o cuaderno, aunque sean delgados.",
    warning: "1・8・10 suelen tener cambio pequeño de sonido.",
    questionWord: jp(seg("何冊", "なんさつ")),
    level: "core",
    jlpt: "N5",
    examples: jp(seg("本", "ほん"), seg("・"), seg("ノート"), seg("・"), seg("雑誌", "ざっし"), seg("・"), seg("漫画", "まんが")),
    readings: [
      { num: 1, display: "1冊", reading: "いっさつ", irregular: true, important: true },
      { num: 2, display: "2冊", reading: "にさつ" },
      { num: 3, display: "3冊", reading: "さんさつ" },
      { num: 4, display: "4冊", reading: "よんさつ" },
      { num: 5, display: "5冊", reading: "ごさつ" },
      { num: 6, display: "6冊", reading: "ろくさつ" },
      { num: 7, display: "7冊", reading: "ななさつ" },
      { num: 8, display: "8冊", reading: "はっさつ", irregular: true },
      { num: 9, display: "9冊", reading: "きゅうさつ" },
      { num: 10, display: "10冊", reading: "じゅっさつ", irregular: true },
    ],
    exampleSentences: [
      { id: "satsu-1", jp: jp(seg("ノートを"), seg("2冊", "にさつ"), seg("ください。")), es: "Quisiera dos cuadernos." },
      { id: "satsu-2", jp: jp(seg("本", "ほん"), seg("を"), seg("3冊", "さんさつ"), seg("読みました。")), es: "Leí tres libros." },
    ],
  },
  {
    id: "dai",
    counter: "台",
    reading: "だい",
    family: "general-objects",
    title: "Máquinas y vehículos",
    meaning: "vehículos, aparatos, computadoras, televisores, cámaras y máquinas",
    usage: "Cuenta objetos mecánicos o electrónicos y vehículos.",
    questionWord: jp(seg("何台", "なんだい")),
    level: "basic",
    jlpt: "N5",
    examples: jp(seg("車", "くるま"), seg("・"), seg("自転車", "じてんしゃ"), seg("・"), seg("パソコン"), seg("・"), seg("テレビ")),
    readings: [
      { num: 1, display: "1台", reading: "いちだい" },
      { num: 2, display: "2台", reading: "にだい" },
      { num: 3, display: "3台", reading: "さんだい" },
      { num: 4, display: "4台", reading: "よんだい" },
      { num: 5, display: "5台", reading: "ごだい" },
      { num: 6, display: "6台", reading: "ろくだい" },
      { num: 7, display: "7台", reading: "ななだい" },
      { num: 8, display: "8台", reading: "はちだい" },
      { num: 9, display: "9台", reading: "きゅうだい" },
      { num: 10, display: "10台", reading: "じゅうだい" },
    ],
    exampleSentences: [
      { id: "dai-1", jp: jp(seg("駐車場", "ちゅうしゃじょう"), seg("に車が"), seg("4台", "よんだい"), seg("あります。")), es: "Hay cuatro autos en el estacionamiento." },
      { id: "dai-2", jp: jp(seg("パソコンを"), seg("1台", "いちだい"), seg("買いました。")), es: "Compré un computador." },
    ],
  },
  {
    id: "hai",
    counter: "杯",
    reading: "はい",
    family: "general-objects",
    title: "Bebidas y recipientes",
    meaning: "vasos, tazas, copas, bebidas servidas y porciones en recipiente",
    usage: "Muy útil en cafeterías y restaurantes para café, agua, té, sopa o arroz servido.",
    warning: "1・3・6・8・10 cambian mucho de sonido.",
    questionWord: jp(seg("何杯", "なんばい")),
    level: "basic",
    jlpt: "N5",
    examples: jp(seg("水", "みず"), seg("・"), seg("コーヒー"), seg("・"), seg("お茶", "おちゃ"), seg("・"), seg("ご飯", "ごはん")),
    readings: [
      { num: 1, display: "1杯", reading: "いっぱい", irregular: true, important: true },
      { num: 2, display: "2杯", reading: "にはい" },
      { num: 3, display: "3杯", reading: "さんばい", irregular: true, important: true },
      { num: 4, display: "4杯", reading: "よんはい" },
      { num: 5, display: "5杯", reading: "ごはい" },
      { num: 6, display: "6杯", reading: "ろっぱい", irregular: true },
      { num: 7, display: "7杯", reading: "ななはい" },
      { num: 8, display: "8杯", reading: "はっぱい", irregular: true, aliases: ["はちはい"] },
      { num: 9, display: "9杯", reading: "きゅうはい" },
      { num: 10, display: "10杯", reading: "じゅっぱい", irregular: true, aliases: ["じっぱい"] },
    ],
    exampleSentences: [
      { id: "hai-1", jp: jp(seg("コーヒーを"), seg("1杯", "いっぱい"), seg("ください。")), es: "Quisiera una taza de café." },
      { id: "hai-2", jp: jp(seg("水", "みず"), seg("を"), seg("2杯", "にはい"), seg("飲みました。")), es: "Tomé dos vasos de agua." },
    ],
  },
  {
    id: "nin",
    counter: "人",
    reading: "にん",
    family: "people-animals",
    title: "Personas",
    meaning: "personas",
    usage: "Cuenta personas. 1人 y 2人 son formas especiales que conviene fijar temprano.",
    warning: "1人 = ひとり, 2人 = ふたり, 4人 = よにん.",
    questionWord: jp(seg("何人", "なんにん")),
    level: "core",
    jlpt: "N5",
    examples: jp(seg("学生", "がくせい"), seg("・"), seg("友達", "ともだち"), seg("・"), seg("家族", "かぞく"), seg("・"), seg("お客さん", "おきゃくさん")),
    readings: [
      { num: 1, display: "1人", reading: "ひとり", irregular: true, important: true },
      { num: 2, display: "2人", reading: "ふたり", irregular: true, important: true },
      { num: 3, display: "3人", reading: "さんにん" },
      { num: 4, display: "4人", reading: "よにん", important: true },
      { num: 5, display: "5人", reading: "ごにん" },
      { num: 6, display: "6人", reading: "ろくにん" },
      { num: 7, display: "7人", reading: "しちにん", aliases: ["ななにん"], note: "しちにん es muy común; ななにん también se oye." },
      { num: 8, display: "8人", reading: "はちにん" },
      { num: 9, display: "9人", reading: "きゅうにん" },
      { num: 10, display: "10人", reading: "じゅうにん" },
    ],
    exampleSentences: [
      { id: "nin-1", jp: jp(seg("家族", "かぞく"), seg("は"), seg("4人", "よにん"), seg("です。")), es: "Somos cuatro en mi familia." },
      { id: "nin-2", jp: jp(seg("教室", "きょうしつ"), seg("に学生が"), seg("7人", "しちにん"), seg("います。")), es: "Hay siete estudiantes en la sala." },
    ],
  },
  {
    id: "hiki",
    counter: "匹",
    reading: "ひき",
    family: "people-animals",
    title: "Animales pequeños",
    meaning: "perros, gatos, peces, insectos y animales pequeños o medianos",
    usage: "Cuenta muchos animales cercanos y pequeños. Para animales grandes suele usarse 頭.",
    warning: "1・3・6・8・10 cambian a ぴき / びき.",
    questionWord: jp(seg("何匹", "なんびき")),
    level: "basic",
    jlpt: "N5",
    examples: jp(seg("猫", "ねこ"), seg("・"), seg("犬", "いぬ"), seg("・"), seg("魚", "さかな"), seg("・"), seg("虫", "むし")),
    readings: [
      { num: 1, display: "1匹", reading: "いっぴき", irregular: true, important: true },
      { num: 2, display: "2匹", reading: "にひき" },
      { num: 3, display: "3匹", reading: "さんびき", irregular: true, important: true },
      { num: 4, display: "4匹", reading: "よんひき" },
      { num: 5, display: "5匹", reading: "ごひき" },
      { num: 6, display: "6匹", reading: "ろっぴき", irregular: true },
      { num: 7, display: "7匹", reading: "ななひき" },
      { num: 8, display: "8匹", reading: "はっぴき", irregular: true },
      { num: 9, display: "9匹", reading: "きゅうひき" },
      { num: 10, display: "10匹", reading: "じゅっぴき", irregular: true },
    ],
    exampleSentences: [
      { id: "hiki-1", jp: jp(seg("猫", "ねこ"), seg("が"), seg("3匹", "さんびき"), seg("います。")), es: "Hay tres gatos." },
      { id: "hiki-2", jp: jp(seg("池", "いけ"), seg("に魚が"), seg("6匹", "ろっぴき"), seg("います。")), es: "Hay seis peces en el estanque." },
    ],
  },
  {
    id: "tou",
    counter: "頭",
    reading: "とう",
    family: "people-animals",
    title: "Animales grandes",
    meaning: "animales grandes como caballos, vacas, elefantes y osos",
    usage: "Separa animales grandes de animales pequeños contados con 匹.",
    questionWord: jp(seg("何頭", "なんとう")),
    level: "useful",
    jlpt: "N4",
    examples: jp(seg("馬", "うま"), seg("・"), seg("牛", "うし"), seg("・"), seg("象", "ぞう"), seg("・"), seg("熊", "くま")),
    readings: [
      { num: 1, display: "1頭", reading: "いっとう", irregular: true },
      { num: 2, display: "2頭", reading: "にとう" },
      { num: 3, display: "3頭", reading: "さんとう" },
      { num: 4, display: "4頭", reading: "よんとう" },
      { num: 5, display: "5頭", reading: "ごとう" },
      { num: 6, display: "6頭", reading: "ろくとう" },
      { num: 7, display: "7頭", reading: "ななとう" },
      { num: 8, display: "8頭", reading: "はっとう", irregular: true },
      { num: 9, display: "9頭", reading: "きゅうとう" },
      { num: 10, display: "10頭", reading: "じゅっとう", irregular: true },
    ],
    exampleSentences: [
      { id: "tou-1", jp: jp(seg("牧場", "ぼくじょう"), seg("に馬が"), seg("2頭", "にとう"), seg("います。")), es: "Hay dos caballos en la granja." },
      { id: "tou-2", jp: jp(seg("動物園", "どうぶつえん"), seg("に象が"), seg("1頭", "いっとう"), seg("います。")), es: "Hay un elefante en el zoológico." },
    ],
  },
  {
    id: "wa",
    counter: "羽",
    reading: "わ",
    family: "people-animals",
    title: "Aves y conejos",
    meaning: "aves y, en uso tradicional, conejos",
    usage: "Cuenta pájaros, gallinas, patos y también conejos en expresiones tradicionales.",
    warning: "Algunas lecturas tienen alternativas modernas y tradicionales.",
    questionWord: jp(seg("何羽", "なんわ")),
    level: "useful",
    jlpt: "N4",
    examples: jp(seg("鳥", "とり"), seg("・"), seg("鶏", "にわとり"), seg("・"), seg("鳩", "はと"), seg("・"), seg("兎", "うさぎ")),
    readings: [
      { num: 1, display: "1羽", reading: "いちわ" },
      { num: 2, display: "2羽", reading: "にわ" },
      { num: 3, display: "3羽", reading: "さんわ", aliases: ["さんば"] },
      { num: 4, display: "4羽", reading: "よんわ" },
      { num: 5, display: "5羽", reading: "ごわ" },
      { num: 6, display: "6羽", reading: "ろくわ", aliases: ["ろっぱ"] },
      { num: 7, display: "7羽", reading: "ななわ" },
      { num: 8, display: "8羽", reading: "はちわ", aliases: ["はっぱ"] },
      { num: 9, display: "9羽", reading: "きゅうわ" },
      { num: 10, display: "10羽", reading: "じゅうわ", aliases: ["じゅっぱ"] },
    ],
    exampleSentences: [
      { id: "wa-1", jp: jp(seg("庭", "にわ"), seg("に鳥が"), seg("2羽", "にわ"), seg("います。")), es: "Hay dos pájaros en el jardín." },
      { id: "wa-2", jp: jp(seg("公園", "こうえん"), seg("に鳩が"), seg("5羽", "ごわ"), seg("います。")), es: "Hay cinco palomas en el parque." },
    ],
  },
  {
    id: "ji",
    counter: "時",
    reading: "じ",
    family: "time-point",
    title: "Hora del día",
    meaning: "hora puntual en el reloj",
    usage: "Se usa para decir a qué hora es algo: 4時 = las 4:00.",
    warning: "4時 = よじ, 7時 = しちじ, 9時 = くじ.",
    questionWord: jp(seg("何時", "なんじ")),
    level: "core",
    jlpt: "N5",
    examples: jp(seg("4時"), seg("・"), seg("7時"), seg("・"), seg("9時"), seg("・"), seg("12時")),
    readings: [
      { num: 1, display: "1時", reading: "いちじ" },
      { num: 2, display: "2時", reading: "にじ" },
      { num: 3, display: "3時", reading: "さんじ" },
      { num: 4, display: "4時", reading: "よじ", irregular: true, important: true },
      { num: 5, display: "5時", reading: "ごじ" },
      { num: 6, display: "6時", reading: "ろくじ" },
      { num: 7, display: "7時", reading: "しちじ", irregular: true, important: true },
      { num: 8, display: "8時", reading: "はちじ" },
      { num: 9, display: "9時", reading: "くじ", irregular: true, important: true },
      { num: 10, display: "10時", reading: "じゅうじ" },
      { num: 11, display: "11時", reading: "じゅういちじ" },
      { num: 12, display: "12時", reading: "じゅうにじ" },
    ],
    exampleSentences: [
      { id: "ji-1", jp: jp(seg("会議", "かいぎ"), seg("は"), seg("4時", "よじ"), seg("です。")), es: "La reunión es a las 4:00." },
      { id: "ji-2", jp: jp(seg("電車", "でんしゃ"), seg("は"), seg("9時", "くじ"), seg("に出ます。")), es: "El tren sale a las 9:00." },
    ],
    relatedCounters: ["jikan"],
  },
  {
    id: "fun",
    counter: "分",
    reading: "ふん / ぷん",
    family: "time-point",
    title: "Minuto puntual",
    meaning: "minutos del reloj",
    usage: "Se usa para decir 4時10分, 8時30分, etc.",
    warning: "1・3・4・6・8・10 suelen cambiar a ぷん.",
    questionWord: jp(seg("何分", "なんぷん")),
    level: "core",
    jlpt: "N5",
    examples: jp(seg("1分"), seg("・"), seg("5分"), seg("・"), seg("10分"), seg("・"), seg("30分")),
    readings: [
      { num: 1, display: "1分", reading: "いっぷん", irregular: true, important: true },
      { num: 2, display: "2分", reading: "にふん" },
      { num: 3, display: "3分", reading: "さんぷん", irregular: true },
      { num: 4, display: "4分", reading: "よんぷん", irregular: true },
      { num: 5, display: "5分", reading: "ごふん" },
      { num: 6, display: "6分", reading: "ろっぷん", irregular: true },
      { num: 7, display: "7分", reading: "ななふん" },
      { num: 8, display: "8分", reading: "はっぷん", irregular: true },
      { num: 9, display: "9分", reading: "きゅうふん" },
      { num: 10, display: "10分", reading: "じゅっぷん", irregular: true, aliases: ["じっぷん"] },
      { num: 30, display: "30分", reading: "さんじゅっぷん", aliases: ["半"] },
    ],
    exampleSentences: [
      { id: "fun-1", jp: jp(seg("今", "いま"), seg("は"), seg("8時30分", "はちじさんじゅっぷん"), seg("です。")), es: "Ahora son las 8:30." },
      { id: "fun-2", jp: jp(seg("バスは"), seg("7時10分", "しちじじゅっぷん"), seg("に来ます。")), es: "El bus viene a las 7:10." },
    ],
    relatedCounters: ["funkan"],
  },
  {
    id: "date-day",
    counter: "日",
    reading: "にち / か",
    family: "time-point",
    title: "Día del mes",
    meaning: "fecha dentro del mes",
    usage: "Se usa para decir el día del mes: 1日, 2日, 3日...",
    warning: "Muchos días del 1 al 10 son formas especiales. 14日, 20日 y 24日 también son clave.",
    questionWord: jp(seg("何日", "なんにち")),
    level: "core",
    jlpt: "N5",
    examples: jp(seg("1日"), seg("・"), seg("4日"), seg("・"), seg("14日"), seg("・"), seg("20日")),
    readings: [
      { num: 1, display: "1日", reading: "ついたち", irregular: true, important: true },
      { num: 2, display: "2日", reading: "ふつか", irregular: true },
      { num: 3, display: "3日", reading: "みっか", irregular: true },
      { num: 4, display: "4日", reading: "よっか", irregular: true, important: true },
      { num: 5, display: "5日", reading: "いつか", irregular: true },
      { num: 6, display: "6日", reading: "むいか", irregular: true },
      { num: 7, display: "7日", reading: "なのか", irregular: true },
      { num: 8, display: "8日", reading: "ようか", irregular: true },
      { num: 9, display: "9日", reading: "ここのか", irregular: true },
      { num: 10, display: "10日", reading: "とおか", irregular: true },
      { num: 11, display: "11日", reading: "じゅういちにち" },
      { num: 14, display: "14日", reading: "じゅうよっか", irregular: true, important: true },
      { num: 20, display: "20日", reading: "はつか", irregular: true, important: true },
      { num: 24, display: "24日", reading: "にじゅうよっか", irregular: true, important: true },
      { num: 31, display: "31日", reading: "さんじゅういちにち" },
    ],
    exampleSentences: [
      { id: "date-day-1", jp: jp(seg("試験", "しけん"), seg("は"), seg("20日", "はつか"), seg("です。")), es: "El examen es el día 20." },
      { id: "date-day-2", jp: jp(seg("誕生日", "たんじょうび"), seg("は"), seg("7月4日", "しちがつよっか"), seg("です。")), es: "Mi cumpleaños es el 4 de julio." },
    ],
    relatedCounters: ["day-duration"],
  },
  {
    id: "month",
    counter: "月",
    reading: "がつ",
    family: "time-point",
    title: "Mes del año",
    meaning: "mes calendario",
    usage: "Se usa para enero, febrero, marzo... como punto del calendario.",
    warning: "4月 = しがつ, 7月 = しちがつ, 9月 = くがつ.",
    questionWord: jp(seg("何月", "なんがつ")),
    level: "core",
    jlpt: "N5",
    examples: jp(seg("1月"), seg("・"), seg("4月"), seg("・"), seg("7月"), seg("・"), seg("9月")),
    readings: [
      { num: 1, display: "1月", reading: "いちがつ" },
      { num: 2, display: "2月", reading: "にがつ" },
      { num: 3, display: "3月", reading: "さんがつ" },
      { num: 4, display: "4月", reading: "しがつ", irregular: true, important: true },
      { num: 5, display: "5月", reading: "ごがつ" },
      { num: 6, display: "6月", reading: "ろくがつ" },
      { num: 7, display: "7月", reading: "しちがつ", irregular: true, important: true },
      { num: 8, display: "8月", reading: "はちがつ" },
      { num: 9, display: "9月", reading: "くがつ", irregular: true, important: true },
      { num: 10, display: "10月", reading: "じゅうがつ" },
      { num: 11, display: "11月", reading: "じゅういちがつ" },
      { num: 12, display: "12月", reading: "じゅうにがつ" },
    ],
    exampleSentences: [
      { id: "month-1", jp: jp(seg("学校", "がっこう"), seg("は"), seg("4月", "しがつ"), seg("に始まります。")), es: "La escuela empieza en abril." },
      { id: "month-2", jp: jp(seg("旅行", "りょこう"), seg("は"), seg("9月", "くがつ"), seg("です。")), es: "El viaje es en septiembre." },
    ],
    relatedCounters: ["kagetsu"],
  },
  {
    id: "year-point",
    counter: "年",
    reading: "ねん",
    family: "time-point",
    title: "Año calendario",
    meaning: "año como punto del calendario o año específico",
    usage: "Se usa para años como 2026年, 1999年 o para año escolar según contexto.",
    questionWord: jp(seg("何年", "なんねん")),
    level: "core",
    jlpt: "N5",
    examples: jp(seg("2026年"), seg("・"), seg("1999年"), seg("・"), seg("来年", "らいねん"), seg("・"), seg("今年", "ことし")),
    readings: [
      { num: 1, display: "1年", reading: "いちねん" },
      { num: 2, display: "2年", reading: "にねん" },
      { num: 3, display: "3年", reading: "さんねん" },
      { num: 4, display: "4年", reading: "よねん", important: true },
      { num: 5, display: "5年", reading: "ごねん" },
      { num: 6, display: "6年", reading: "ろくねん" },
      { num: 7, display: "7年", reading: "ななねん" },
      { num: 8, display: "8年", reading: "はちねん" },
      { num: 9, display: "9年", reading: "きゅうねん" },
      { num: 10, display: "10年", reading: "じゅうねん" },
    ],
    exampleSentences: [
      { id: "year-point-1", jp: jp(seg("今", "いま"), seg("は"), seg("2026年", "にせんにじゅうろくねん"), seg("です。")), es: "Ahora es el año 2026." },
      { id: "year-point-2", jp: jp(seg("兄", "あに"), seg("は大学"), seg("4年", "よねん"), seg("です。")), es: "Mi hermano está en cuarto año de universidad." },
    ],
    relatedCounters: ["nenkan"],
  },
  {
    id: "jikan",
    counter: "時間",
    reading: "じかん",
    family: "duration",
    title: "Duración en horas",
    meaning: "cantidad de horas",
    usage: "Se usa para decir cuánto dura algo: 4時間 = cuatro horas.",
    warning: "4時間 = よじかん, no よんじかん.",
    questionWord: jp(seg("何時間", "なんじかん")),
    level: "core",
    jlpt: "N5",
    examples: jp(seg("1時間"), seg("・"), seg("4時間"), seg("・"), seg("7時間"), seg("・"), seg("9時間")),
    readings: [
      { num: 1, display: "1時間", reading: "いちじかん" },
      { num: 2, display: "2時間", reading: "にじかん" },
      { num: 3, display: "3時間", reading: "さんじかん" },
      { num: 4, display: "4時間", reading: "よじかん", irregular: true, important: true },
      { num: 5, display: "5時間", reading: "ごじかん" },
      { num: 6, display: "6時間", reading: "ろくじかん" },
      { num: 7, display: "7時間", reading: "しちじかん", aliases: ["ななじかん"] },
      { num: 8, display: "8時間", reading: "はちじかん" },
      { num: 9, display: "9時間", reading: "くじかん", aliases: ["きゅうじかん"] },
      { num: 10, display: "10時間", reading: "じゅうじかん" },
    ],
    exampleSentences: [
      { id: "jikan-1", jp: jp(seg("昨日", "きのう"), seg("は"), seg("4時間", "よじかん"), seg("勉強しました。")), es: "Ayer estudié cuatro horas." },
      { id: "jikan-2", jp: jp(seg("東京", "とうきょう"), seg("まで"), seg("2時間", "にじかん"), seg("かかります。")), es: "Hasta Tokio toma dos horas." },
    ],
    relatedCounters: ["ji"],
  },
  {
    id: "funkan",
    counter: "分間",
    reading: "ふんかん / ぷんかん",
    family: "duration",
    title: "Duración en minutos",
    meaning: "cantidad de minutos como periodo",
    usage: "分 solo puede expresar duración por contexto, pero 分間 lo vuelve explícito.",
    warning: "Las lecturas base siguen las de 分.",
    questionWord: jp(seg("何分間", "なんぷんかん")),
    level: "basic",
    jlpt: "N5",
    examples: jp(seg("5分"), seg("・"), seg("10分間"), seg("・"), seg("30分"), seg("・"), seg("1分間")),
    readings: [
      { num: 1, display: "1分間", reading: "いっぷんかん", irregular: true },
      { num: 2, display: "2分間", reading: "にふんかん" },
      { num: 3, display: "3分間", reading: "さんぷんかん", irregular: true },
      { num: 4, display: "4分間", reading: "よんぷんかん", irregular: true },
      { num: 5, display: "5分間", reading: "ごふんかん" },
      { num: 6, display: "6分間", reading: "ろっぷんかん", irregular: true },
      { num: 7, display: "7分間", reading: "ななふんかん" },
      { num: 8, display: "8分間", reading: "はっぷんかん", irregular: true },
      { num: 9, display: "9分間", reading: "きゅうふんかん" },
      { num: 10, display: "10分間", reading: "じゅっぷんかん", irregular: true },
    ],
    exampleSentences: [
      { id: "funkan-1", jp: jp(seg("駅", "えき"), seg("まで"), seg("10分", "じゅっぷん"), seg("歩きました。")), es: "Caminé diez minutos hasta la estación." },
      { id: "funkan-2", jp: jp(seg("1分間", "いっぷんかん"), seg("待ってください。")), es: "Espere un minuto, por favor." },
    ],
    relatedCounters: ["fun"],
  },
  {
    id: "day-duration",
    counter: "日 / 日間",
    reading: "にち / か / かん",
    family: "duration",
    title: "Duración en días",
    meaning: "cantidad de días",
    usage: "Puede aparecer solo como 3日 o de forma explícita como 3日間.",
    warning: "1日 como duración suele leerse いちにち; como fecha, 1日 es ついたち.",
    questionWord: jp(seg("何日", "なんにち")),
    level: "core",
    jlpt: "N5",
    examples: jp(seg("1日"), seg("・"), seg("2日間"), seg("・"), seg("3日間"), seg("・"), seg("10日間")),
    readings: [
      { num: 1, display: "1日", reading: "いちにち", irregular: true, important: true, note: "duración; como fecha es ついたち" },
      { num: 2, display: "2日間", reading: "ふつかかん", irregular: true },
      { num: 3, display: "3日間", reading: "みっかかん", irregular: true },
      { num: 4, display: "4日間", reading: "よっかかん", irregular: true },
      { num: 5, display: "5日間", reading: "いつかかん", irregular: true },
      { num: 6, display: "6日間", reading: "むいかかん", irregular: true },
      { num: 7, display: "7日間", reading: "なのかかん", irregular: true },
      { num: 8, display: "8日間", reading: "ようかかん", irregular: true },
      { num: 9, display: "9日間", reading: "ここのかかん", irregular: true },
      { num: 10, display: "10日間", reading: "とおかかん", irregular: true },
    ],
    exampleSentences: [
      { id: "day-duration-1", jp: jp(seg("京都", "きょうと"), seg("に"), seg("3日間", "みっかかん"), seg("いました。")), es: "Estuve tres días en Kioto." },
      { id: "day-duration-2", jp: jp(seg("1日", "いちにち"), seg("休みました。")), es: "Descansé un día." },
    ],
    relatedCounters: ["date-day"],
  },
  {
    id: "shuukan",
    counter: "週間",
    reading: "しゅうかん",
    family: "duration",
    title: "Duración en semanas",
    meaning: "cantidad de semanas",
    usage: "Se usa para periodos de semanas.",
    warning: "1週間 = いっしゅうかん.",
    questionWord: jp(seg("何週間", "なんしゅうかん")),
    level: "basic",
    jlpt: "N5",
    examples: jp(seg("1週間"), seg("・"), seg("2週間"), seg("・"), seg("3週間"), seg("・"), seg("10週間")),
    readings: [
      { num: 1, display: "1週間", reading: "いっしゅうかん", irregular: true, important: true },
      { num: 2, display: "2週間", reading: "にしゅうかん" },
      { num: 3, display: "3週間", reading: "さんしゅうかん" },
      { num: 4, display: "4週間", reading: "よんしゅうかん" },
      { num: 5, display: "5週間", reading: "ごしゅうかん" },
      { num: 6, display: "6週間", reading: "ろくしゅうかん" },
      { num: 7, display: "7週間", reading: "ななしゅうかん" },
      { num: 8, display: "8週間", reading: "はっしゅうかん", irregular: true },
      { num: 9, display: "9週間", reading: "きゅうしゅうかん" },
      { num: 10, display: "10週間", reading: "じゅっしゅうかん", irregular: true },
    ],
    exampleSentences: [
      { id: "shuukan-1", jp: jp(seg("北海道", "ほっかいどう"), seg("に"), seg("1週間", "いっしゅうかん"), seg("いました。")), es: "Estuve una semana en Hokkaido." },
      { id: "shuukan-2", jp: jp(seg("この本を"), seg("2週間", "にしゅうかん"), seg("借りました。")), es: "Pedí prestado este libro por dos semanas." },
    ],
  },
  {
    id: "kagetsu",
    counter: "カ月",
    reading: "かげつ",
    family: "duration",
    title: "Duración en meses",
    meaning: "cantidad de meses",
    usage: "Se usa para periodos de meses. No es lo mismo que 月 del calendario.",
    warning: "4月 = しがつ, pero 4カ月 = よんかげつ.",
    questionWord: jp(seg("何カ月", "なんかげつ")),
    level: "core",
    jlpt: "N5",
    examples: jp(seg("1カ月"), seg("・"), seg("4カ月"), seg("・"), seg("6カ月"), seg("・"), seg("10カ月")),
    readings: [
      { num: 1, display: "1カ月", reading: "いっかげつ", irregular: true, important: true },
      { num: 2, display: "2カ月", reading: "にかげつ" },
      { num: 3, display: "3カ月", reading: "さんかげつ" },
      { num: 4, display: "4カ月", reading: "よんかげつ", important: true },
      { num: 5, display: "5カ月", reading: "ごかげつ" },
      { num: 6, display: "6カ月", reading: "ろっかげつ", irregular: true },
      { num: 7, display: "7カ月", reading: "ななかげつ" },
      { num: 8, display: "8カ月", reading: "はっかげつ", irregular: true },
      { num: 9, display: "9カ月", reading: "きゅうかげつ" },
      { num: 10, display: "10カ月", reading: "じゅっかげつ", irregular: true },
    ],
    exampleSentences: [
      { id: "kagetsu-1", jp: jp(seg("日本語", "にほんご"), seg("を"), seg("4カ月", "よんかげつ"), seg("勉強しました。")), es: "Estudié japonés cuatro meses." },
      { id: "kagetsu-2", jp: jp(seg("日本", "にほん"), seg("に"), seg("6カ月", "ろっかげつ"), seg("います。")), es: "Estoy en Japón por seis meses." },
    ],
    relatedCounters: ["month"],
  },
  {
    id: "nenkan",
    counter: "年間",
    reading: "ねんかん",
    family: "duration",
    title: "Duración en años",
    meaning: "cantidad de años como periodo",
    usage: "Hace explícito que hablamos de un periodo de años.",
    warning: "4年間 = よねんかん.",
    questionWord: jp(seg("何年間", "なんねんかん")),
    level: "basic",
    jlpt: "N5",
    examples: jp(seg("1年間"), seg("・"), seg("4年間"), seg("・"), seg("10年間"), seg("・"), seg("20年間")),
    readings: [
      { num: 1, display: "1年間", reading: "いちねんかん" },
      { num: 2, display: "2年間", reading: "にねんかん" },
      { num: 3, display: "3年間", reading: "さんねんかん" },
      { num: 4, display: "4年間", reading: "よねんかん", important: true },
      { num: 5, display: "5年間", reading: "ごねんかん" },
      { num: 6, display: "6年間", reading: "ろくねんかん" },
      { num: 7, display: "7年間", reading: "ななねんかん" },
      { num: 8, display: "8年間", reading: "はちねんかん" },
      { num: 9, display: "9年間", reading: "きゅうねんかん" },
      { num: 10, display: "10年間", reading: "じゅうねんかん" },
    ],
    exampleSentences: [
      { id: "nenkan-1", jp: jp(seg("日本", "にほん"), seg("に"), seg("3年間", "さんねんかん"), seg("住みました。")), es: "Viví en Japón durante tres años." },
      { id: "nenkan-2", jp: jp(seg("会社", "かいしゃ"), seg("で"), seg("4年間", "よねんかん"), seg("働きました。")), es: "Trabajé en la empresa durante cuatro años." },
    ],
    relatedCounters: ["year-point"],
  },
  {
    id: "en",
    counter: "円",
    reading: "えん",
    family: "money-frequency",
    title: "Yen / dinero",
    meaning: "precios y cantidades de dinero en yenes",
    usage: "Se une al número para expresar precios. En escritura horizontal se ve normalmente con número arábigo.",
    questionWord: jp(seg("何円", "なんえん")),
    level: "core",
    jlpt: "N5",
    examples: jp(seg("100円"), seg("・"), seg("500円"), seg("・"), seg("1000円"), seg("・"), seg("2500円")),
    readings: [
      { num: 1, display: "1円", reading: "いちえん" },
      { num: 2, display: "2円", reading: "にえん" },
      { num: 3, display: "3円", reading: "さんえん" },
      { num: 4, display: "4円", reading: "よえん", aliases: ["よんえん"] },
      { num: 5, display: "5円", reading: "ごえん" },
      { num: 10, display: "10円", reading: "じゅうえん" },
      { num: 100, display: "100円", reading: "ひゃくえん" },
      { num: 1000, display: "1000円", reading: "せんえん" },
    ],
    exampleSentences: [
      { id: "en-1", jp: jp(seg("このパンは"), seg("180円", "ひゃくはちじゅうえん"), seg("です。")), es: "Este pan cuesta 180 yenes." },
      { id: "en-2", jp: jp(seg("全部", "ぜんぶ"), seg("で"), seg("2500円", "にせんごひゃくえん"), seg("です。")), es: "En total son 2500 yenes." },
    ],
  },
  {
    id: "kai-frequency",
    counter: "回",
    reading: "かい",
    family: "money-frequency",
    title: "Veces / frecuencia",
    meaning: "número de veces o repeticiones",
    usage: "Se usa para contar cuántas veces ocurre una acción.",
    warning: "1・6・8・10 cambian a っかい.",
    questionWord: jp(seg("何回", "なんかい")),
    level: "basic",
    jlpt: "N5",
    examples: jp(seg("1回"), seg("・"), seg("2回"), seg("・"), seg("毎回", "まいかい"), seg("・"), seg("今回", "こんかい")),
    readings: [
      { num: 1, display: "1回", reading: "いっかい", irregular: true, important: true },
      { num: 2, display: "2回", reading: "にかい" },
      { num: 3, display: "3回", reading: "さんかい" },
      { num: 4, display: "4回", reading: "よんかい" },
      { num: 5, display: "5回", reading: "ごかい" },
      { num: 6, display: "6回", reading: "ろっかい", irregular: true },
      { num: 7, display: "7回", reading: "ななかい" },
      { num: 8, display: "8回", reading: "はっかい", irregular: true },
      { num: 9, display: "9回", reading: "きゅうかい" },
      { num: 10, display: "10回", reading: "じゅっかい", irregular: true },
    ],
    exampleSentences: [
      { id: "kai-frequency-1", jp: jp(seg("日本", "にほん"), seg("に"), seg("3回", "さんかい"), seg("行きました。")), es: "Fui a Japón tres veces." },
      { id: "kai-frequency-2", jp: jp(seg("もう"), seg("1回", "いっかい"), seg("お願いします。")), es: "Una vez más, por favor." },
    ],
  },
  {
    id: "ban",
    counter: "番",
    reading: "ばん",
    family: "order-location",
    title: "Orden / número",
    meaning: "número de orden, turno, ranking o posición numerada",
    usage: "Sirve para decir número uno, número dos, turno, lugar o opción numerada.",
    questionWord: jp(seg("何番", "なんばん")),
    level: "basic",
    jlpt: "N5",
    examples: jp(seg("1番"), seg("・"), seg("2番"), seg("・"), seg("電話番号", "でんわばんごう"), seg("・"), seg("何番", "なんばん")),
    readings: [
      { num: 1, display: "1番", reading: "いちばん" },
      { num: 2, display: "2番", reading: "にばん" },
      { num: 3, display: "3番", reading: "さんばん" },
      { num: 4, display: "4番", reading: "よんばん" },
      { num: 5, display: "5番", reading: "ごばん" },
      { num: 6, display: "6番", reading: "ろくばん" },
      { num: 7, display: "7番", reading: "ななばん" },
      { num: 8, display: "8番", reading: "はちばん" },
      { num: 9, display: "9番", reading: "きゅうばん" },
      { num: 10, display: "10番", reading: "じゅうばん" },
    ],
    exampleSentences: [
      { id: "ban-1", jp: jp(seg("3番", "さんばん"), seg("のバスに乗ります。")), es: "Voy a tomar el bus número 3." },
      { id: "ban-2", jp: jp(seg("この答えは"), seg("1番", "いちばん"), seg("です。")), es: "Esta respuesta es la número 1." },
    ],
  },
  {
    id: "floor-kai",
    counter: "階",
    reading: "かい / がい",
    family: "order-location",
    title: "Pisos de edificios",
    meaning: "pisos o plantas de un edificio",
    usage: "Se usa para decir en qué piso está algo.",
    warning: "3階 = さんがい. 1・6・8・10 también cambian.",
    questionWord: jp(seg("何階", "なんがい")),
    level: "basic",
    jlpt: "N5",
    examples: jp(seg("1階"), seg("・"), seg("3階"), seg("・"), seg("6階"), seg("・"), seg("10階")),
    readings: [
      { num: 1, display: "1階", reading: "いっかい", irregular: true, important: true },
      { num: 2, display: "2階", reading: "にかい" },
      { num: 3, display: "3階", reading: "さんがい", irregular: true, important: true },
      { num: 4, display: "4階", reading: "よんかい" },
      { num: 5, display: "5階", reading: "ごかい" },
      { num: 6, display: "6階", reading: "ろっかい", irregular: true },
      { num: 7, display: "7階", reading: "ななかい" },
      { num: 8, display: "8階", reading: "はっかい", irregular: true },
      { num: 9, display: "9階", reading: "きゅうかい" },
      { num: 10, display: "10階", reading: "じゅっかい", irregular: true },
    ],
    exampleSentences: [
      { id: "floor-kai-1", jp: jp(seg("受付", "うけつけ"), seg("は"), seg("1階", "いっかい"), seg("です。")), es: "La recepción está en el primer piso." },
      { id: "floor-kai-2", jp: jp(seg("会議室", "かいぎしつ"), seg("は"), seg("3階", "さんがい"), seg("です。")), es: "La sala de reuniones está en el tercer piso." },
    ],
  },
];

export const TIME_CONTRASTS = [
  {
    id: "ji-jikan",
    left: { label: "4時", reading: "よじ", meaning: "las 4:00" },
    right: { label: "4時間", reading: "よじかん", meaning: "cuatro horas" },
    explanation: "時 marca un punto del reloj. 時間 marca duración.",
  },
  {
    id: "month-kagetsu",
    left: { label: "4月", reading: "しがつ", meaning: "abril" },
    right: { label: "4カ月", reading: "よんかげつ", meaning: "cuatro meses" },
    explanation: "月 marca mes calendario. カ月 marca cantidad de meses.",
  },
  {
    id: "day-date-duration",
    left: { label: "1日", reading: "ついたち", meaning: "día 1 del mes" },
    right: { label: "1日", reading: "いちにち", meaning: "un día de duración" },
    explanation: "日 puede cambiar según si habla de fecha o duración.",
  },
  {
    id: "year-nenkan",
    left: { label: "2026年", reading: "にせんにじゅうろくねん", meaning: "año 2026" },
    right: { label: "4年間", reading: "よねんかん", meaning: "durante cuatro años" },
    explanation: "年 puede nombrar años; 年間 enfatiza periodo.",
  },
];

export function getCounterFamily(id: CounterFamilyId) {
  return COUNTER_FAMILIES.find((family) => family.id === id);
}

export function getCountersByFamily(familyId: CounterFamilyId) {
  return COUNTERS.filter((counter) => counter.family === familyId);
}

export function getCounterById(id: string) {
  return COUNTERS.find((counter) => counter.id === id);
}
