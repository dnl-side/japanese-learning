// src/data/hiragana.ts

import type { JapaneseCharacter, Lesson, TableRow } from "@/types/japanese";

// ─── Basic characters (gojuuon) ──────────────────────────────────────────────
// null = empty cell (yi, ye, wi, wu, we don't exist in standard hiragana)

export const HIRAGANA_TABLE_ROWS: TableRow[] = [
  { label: "a",  cells: [{ char: "あ", romaji: "a"  }, { char: "い", romaji: "i"  }, { char: "う", romaji: "u"  }, { char: "え", romaji: "e"  }, { char: "お", romaji: "o"  }] },
  { label: "ka", cells: [{ char: "か", romaji: "ka" }, { char: "き", romaji: "ki" }, { char: "く", romaji: "ku" }, { char: "け", romaji: "ke" }, { char: "こ", romaji: "ko" }] },
  { label: "sa", cells: [{ char: "さ", romaji: "sa" }, { char: "し", romaji: "shi"}, { char: "す", romaji: "su" }, { char: "せ", romaji: "se" }, { char: "そ", romaji: "so" }] },
  { label: "ta", cells: [{ char: "た", romaji: "ta" }, { char: "ち", romaji: "chi"}, { char: "つ", romaji: "tsu"}, { char: "て", romaji: "te" }, { char: "と", romaji: "to" }] },
  { label: "na", cells: [{ char: "な", romaji: "na" }, { char: "に", romaji: "ni" }, { char: "ぬ", romaji: "nu" }, { char: "ね", romaji: "ne" }, { char: "の", romaji: "no" }] },
  { label: "ha", cells: [{ char: "は", romaji: "ha" }, { char: "ひ", romaji: "hi" }, { char: "ふ", romaji: "fu" }, { char: "へ", romaji: "he" }, { char: "ほ", romaji: "ho" }] },
  { label: "ma", cells: [{ char: "ま", romaji: "ma" }, { char: "み", romaji: "mi" }, { char: "む", romaji: "mu" }, { char: "め", romaji: "me" }, { char: "も", romaji: "mo" }] },
  { label: "ya", cells: [{ char: "や", romaji: "ya" }, { char: null, romaji: null }, { char: "ゆ", romaji: "yu" }, { char: null, romaji: null }, { char: "よ", romaji: "yo" }] },
  { label: "ra", cells: [{ char: "ら", romaji: "ra" }, { char: "り", romaji: "ri" }, { char: "る", romaji: "ru" }, { char: "れ", romaji: "re" }, { char: "ろ", romaji: "ro" }] },
  { label: "wa", cells: [{ char: "わ", romaji: "wa" }, { char: null, romaji: null }, { char: "を", romaji: "wo" }, { char: null, romaji: null }, { char: "ん", romaji: "n"  }] },
];

// ─── Dakuten (voiced) ────────────────────────────────────────────────────────

export const HIRAGANA_DAKUTEN_ROWS: TableRow[] = [
  { label: "ga", cells: [{ char: "が", romaji: "ga" }, { char: "ぎ", romaji: "gi" }, { char: "ぐ", romaji: "gu" }, { char: "げ", romaji: "ge" }, { char: "ご", romaji: "go" }] },
  { label: "za", cells: [{ char: "ざ", romaji: "za" }, { char: "じ", romaji: "ji" }, { char: "ず", romaji: "zu" }, { char: "ぜ", romaji: "ze" }, { char: "ぞ", romaji: "zo" }] },
  { label: "da", cells: [{ char: "だ", romaji: "da" }, { char: "ぢ", romaji: "di" }, { char: "づ", romaji: "du" }, { char: "で", romaji: "de" }, { char: "ど", romaji: "do" }] },
  { label: "ba", cells: [{ char: "ば", romaji: "ba" }, { char: "び", romaji: "bi" }, { char: "ぶ", romaji: "bu" }, { char: "べ", romaji: "be" }, { char: "ぼ", romaji: "bo" }] },
];

// ─── Handakuten (semi-voiced) ────────────────────────────────────────────────

export const HIRAGANA_HANDAKUTEN_ROWS: TableRow[] = [
  { label: "pa", cells: [{ char: "ぱ", romaji: "pa" }, { char: "ぴ", romaji: "pi" }, { char: "ぷ", romaji: "pu" }, { char: "ぺ", romaji: "pe" }, { char: "ぽ", romaji: "po" }] },
];

// ─── Stroke counts ───────────────────────────────────────────────────────────

export const HIRAGANA_STROKE_COUNT: Record<string, number> = {
  "あ": 3, "い": 2, "う": 2, "え": 2, "お": 3,
  "か": 3, "き": 4, "く": 1, "け": 3, "こ": 2,
  "さ": 3, "し": 1, "す": 2, "せ": 3, "そ": 1,
  "た": 4, "ち": 2, "つ": 1, "て": 1, "と": 2,
  "な": 4, "に": 3, "ぬ": 2, "ね": 2, "の": 1,
  "は": 3, "ひ": 1, "ふ": 4, "へ": 1, "ほ": 4,
  "ま": 3, "み": 2, "む": 3, "め": 2, "も": 3,
  "や": 3, "ゆ": 2, "よ": 2,
  "ら": 2, "り": 2, "る": 1, "れ": 2, "ろ": 1,
  "わ": 2, "を": 3, "ん": 1,
  // dakuten
  "が": 5, "ぎ": 6, "ぐ": 3, "げ": 5, "ご": 4,
  "ざ": 5, "じ": 3, "ず": 4, "ぜ": 5, "ぞ": 3,
  "だ": 6, "ぢ": 4, "づ": 3, "で": 3, "ど": 4,
  "ば": 5, "び": 3, "ぶ": 6, "べ": 3, "ぼ": 6,
  // handakuten
  "ぱ": 4, "ぴ": 2, "ぷ": 5, "ぺ": 2, "ぽ": 5,
  // small
  "っ": 1, "ゃ": 3, "ゅ": 3, "ょ": 2,
};

// ─── Romaji map ───────────────────────────────────────────────────────────────

export const HIRAGANA_ROMAJI: Record<string, string> = {
  "あ": "a",   "い": "i",   "う": "u",   "え": "e",   "お": "o",
  "か": "ka",  "き": "ki",  "く": "ku",  "け": "ke",  "こ": "ko",
  "さ": "sa",  "し": "shi", "す": "su",  "せ": "se",  "そ": "so",
  "た": "ta",  "ち": "chi", "つ": "tsu", "て": "te",  "と": "to",
  "な": "na",  "に": "ni",  "ぬ": "nu",  "ね": "ne",  "の": "no",
  "は": "ha",  "ひ": "hi",  "ふ": "fu",  "へ": "he",  "ほ": "ho",
  "ま": "ma",  "み": "mi",  "む": "mu",  "め": "me",  "も": "mo",
  "や": "ya",  "ゆ": "yu",  "よ": "yo",
  "ら": "ra",  "り": "ri",  "る": "ru",  "れ": "re",  "ろ": "ro",
  "わ": "wa",  "を": "wo",  "ん": "n",
  "が": "ga",  "ぎ": "gi",  "ぐ": "gu",  "げ": "ge",  "ご": "go",
  "ざ": "za",  "じ": "ji",  "ず": "zu",  "ぜ": "ze",  "ぞ": "zo",
  "だ": "da",  "ぢ": "di",  "づ": "du",  "で": "de",  "ど": "do",
  "ば": "ba",  "び": "bi",  "ぶ": "bu",  "べ": "be",  "ぼ": "bo",
  "ぱ": "pa",  "ぴ": "pi",  "ぷ": "pu",  "ぺ": "pe",  "ぽ": "po",
  "っ": "ltsu","ゃ": "lya", "ゅ": "lyu", "ょ": "lyo",
};

// ─── Lessons with vocabulary ─────────────────────────────────────────────────

export const HIRAGANA_LESSONS: Lesson[] = [
  {
    id: "hiragana-1",
    lesson: "Lección 1 - A, I, U, E, O",
    characters: ["あ", "い", "う", "え", "お"],
    vocabulary: [
      { word: "あさ",   romaji: "asa",   meaning: "Mañana",   example: "あさごはんをたべます。- Como el desayuno." },
      { word: "いぬ",   romaji: "inu",   meaning: "Perro",    example: "いぬがかわいいです。- El perro es lindo." },
      { word: "うみ",   romaji: "umi",   meaning: "Mar",      example: "うみでおよぎます。- Nado en el mar." },
      { word: "えき",   romaji: "eki",   meaning: "Estación", example: "えきでまちます。- Espero en la estación." },
      { word: "おかね", romaji: "okane", meaning: "Dinero",   example: "おかねをためます。- Ahorro dinero." },
    ],
  },
  {
    id: "hiragana-2",
    lesson: "Lección 2 - Ka, Ki, Ku, Ke, Ko",
    characters: ["か", "き", "く", "け", "こ"],
    vocabulary: [
      { word: "かさ",   romaji: "kasa",   meaning: "Paraguas",   example: "かさをもっています。- Llevo un paraguas." },
      { word: "き",     romaji: "ki",     meaning: "Árbol",      example: "きがおおきいです。- El árbol es grande." },
      { word: "くるま", romaji: "kuruma", meaning: "Automóvil",  example: "くるまでいきます。- Voy en auto." },
      { word: "けむり", romaji: "kemuri", meaning: "Humo",       example: "けむりがみえます。- Veo humo." },
      { word: "こえ",   romaji: "koe",    meaning: "Voz",        example: "こえがきれいです。- Tiene una voz bonita." },
    ],
  },
  {
    id: "hiragana-3",
    lesson: "Lección 3 - Sa, Shi, Su, Se, So",
    characters: ["さ", "し", "す", "せ", "そ"],
    vocabulary: [
      { word: "さかな",   romaji: "sakana",  meaning: "Pescado",  example: "さかなをたべます。- Como pescado." },
      { word: "しろ",     romaji: "shiro",   meaning: "Blanco",   example: "しろいくるまがあります。- Hay un auto blanco." },
      { word: "すし",     romaji: "sushi",   meaning: "Sushi",    example: "すしをたべます。- Como sushi." },
      { word: "せんせい", romaji: "sensei",  meaning: "Profesor", example: "せんせいはやさしいです。- El profesor es amable." },
      { word: "そら",     romaji: "sora",    meaning: "Cielo",    example: "そらがあおいです。- El cielo es azul." },
    ],
  },
  {
    id: "hiragana-4",
    lesson: "Lección 4 - Ta, Chi, Tsu, Te, To",
    characters: ["た", "ち", "つ", "て", "と"],
    vocabulary: [
      { word: "たべもの", romaji: "tabemono", meaning: "Comida", example: "たべものがおいしいです。- La comida es deliciosa." },
      { word: "ちず",     romaji: "chizu",    meaning: "Mapa",   example: "ちずをみます。- Miro el mapa." },
      { word: "つき",     romaji: "tsuki",    meaning: "Luna",   example: "つきがきれいです。- La luna está hermosa." },
      { word: "てがみ",   romaji: "tegami",   meaning: "Carta",  example: "てがみをかきます。- Escribo una carta." },
      { word: "とり",     romaji: "tori",     meaning: "Pájaro", example: "とりがそらをとびます。- El pájaro vuela en el cielo." },
    ],
  },
  {
    id: "hiragana-5",
    lesson: "Lección 5 - Na, Ni, Nu, Ne, No",
    characters: ["な", "に", "ぬ", "ね", "の"],
    vocabulary: [
      { word: "なつ",   romaji: "natsu", meaning: "Verano",        example: "なつはあついです。- El verano es caluroso." },
      { word: "にほん", romaji: "nihon", meaning: "Japón",         example: "にほんにいきたいです。- Quiero ir a Japón." },
      { word: "ぬの",   romaji: "nuno",  meaning: "Tela",          example: "ぬのでつくります。- Lo prepararé con tela." },
      { word: "ねこ",   romaji: "neko",  meaning: "Gato",          example: "ねこがかわいいです。- El gato es lindo." },
      { word: "のり",   romaji: "nori",  meaning: "Alga (nori)",   example: "すしにはのりをつかいます。- Para el sushi se usa nori." },
    ],
  },
  {
    id: "hiragana-6",
    lesson: "Lección 6 - Ha, Hi, Fu, He, Ho",
    characters: ["は", "ひ", "ふ", "へ", "ほ"],
    vocabulary: [
      { word: "はな",   romaji: "hana",  meaning: "Flor / Nariz", example: "はながきれいです。- La flor es hermosa." },
      { word: "ひと",   romaji: "hito",  meaning: "Persona",      example: "ひとがおおいです。- Hay mucha gente." },
      { word: "ふゆ",   romaji: "fuyu",  meaning: "Invierno",     example: "ふゆはさむいです。- El invierno es frío." },
      { word: "へや",   romaji: "heya",  meaning: "Habitación",   example: "へやをそうじします。- Limpio la habitación." },
      { word: "ほん",   romaji: "hon",   meaning: "Libro",        example: "ほんをよみます。- Leo un libro." },
    ],
  },
  {
    id: "hiragana-7",
    lesson: "Lección 7 - Ma, Mi, Mu, Me, Mo",
    characters: ["ま", "み", "む", "め", "も"],
    vocabulary: [
      { word: "まち",   romaji: "machi",  meaning: "Ciudad",   example: "まちをあるきます。- Camino por la ciudad." },
      { word: "みず",   romaji: "mizu",   meaning: "Agua",     example: "みずをのむ。- Bebo agua." },
      { word: "むし",   romaji: "mushi",  meaning: "Insecto",  example: "むしがとびます。- Los insectos vuelan." },
      { word: "めがね", romaji: "megane", meaning: "Gafas",    example: "めがねをかけます。- Uso gafas." },
      { word: "もり",   romaji: "mori",   meaning: "Bosque",   example: "もりにはいる。- Entro al bosque." },
    ],
  },
  {
    id: "hiragana-8",
    lesson: "Lección 8 - Ya, Yu, Yo",
    characters: ["や", "ゆ", "よ"],
    vocabulary: [
      { word: "やま",     romaji: "yama",    meaning: "Montaña",  example: "やまにのぼります。- Subo a la montaña." },
      { word: "やさい",   romaji: "yasai",   meaning: "Vegetales",example: "やさいをたべます。- Como vegetales." },
      { word: "ゆき",     romaji: "yuki",    meaning: "Nieve",    example: "ゆきがふります。- Nieva." },
      { word: "ゆめ",     romaji: "yume",    meaning: "Sueño",    example: "ゆめをみます。- Tengo un sueño." },
      { word: "ようふく", romaji: "youfuku", meaning: "Ropa",     example: "ようふくをきます。- Me pongo ropa." },
    ],
  },
  {
    id: "hiragana-9",
    lesson: "Lección 9 - Ra, Ri, Ru, Re, Ro",
    characters: ["ら", "り", "る", "れ", "ろ"],
    vocabulary: [
      { word: "らくだ",     romaji: "rakuda",   meaning: "Camello",        example: "らくだはさばくにすんでいます。- El camello vive en el desierto." },
      { word: "りんご",     romaji: "ringo",    meaning: "Manzana",        example: "りんごをたべます。- Como una manzana." },
      { word: "るす",       romaji: "rusu",     meaning: "Ausencia",       example: "かれはいまるすです。- Él está ausente ahora." },
      { word: "れいぞうこ", romaji: "reizouko", meaning: "Refrigerador",   example: "れいぞうこにのみものがあります。- Hay bebidas en el refrigerador." },
      { word: "ろうそく",   romaji: "rousoku",  meaning: "Vela",           example: "ろうそくをつけます。- Enciendo una vela." },
    ],
  },
  {
    id: "hiragana-10",
    lesson: "Lección 10 - Wa, Wo, N",
    characters: ["わ", "を", "ん"],
    vocabulary: [
      { word: "わたし", romaji: "watashi", meaning: "Yo",                       example: "わたしはがくせいです。- Yo soy estudiante." },
      { word: "わに",   romaji: "wani",   meaning: "Cocodrilo",                 example: "わにはかわにいます。- El cocodrilo está en el río." },
      { word: "を",     romaji: "wo (o)", meaning: "(Partícula de objeto directo)", example: "ほんをよみます。- Leo un libro." },
      { word: "おんがく", romaji: "ongaku", meaning: "Música",                  example: "おんがくをききます。- Escucho música." },
      { word: "ほん",   romaji: "hon",    meaning: "Libro",                     example: "ほんをかいます。- Compro un libro." },
    ],
  },
  {
    id: "hiragana-11",
    lesson: "Lección 11 - Sonidos Especiales: G",
    characters: ["が", "ぎ", "ぐ", "げ", "ご"],
    vocabulary: [
      { word: "がっこう",   romaji: "gakkou",   meaning: "Escuela", example: "がっこうへいきます。- Voy a la escuela." },
      { word: "ぎんこう",   romaji: "ginkou",   meaning: "Banco",   example: "ぎんこうでおかねをとります。- Retiro dinero en el banco." },
      { word: "ぐんたい",   romaji: "guntai",   meaning: "Ejército",example: "ぐんたいはつよいです。- El ejército es fuerte." },
      { word: "げつようび", romaji: "getsuyoubi",meaning: "Lunes",  example: "げつようびはしごとです。- Trabajo el lunes." },
      { word: "ごはん",     romaji: "gohan",    meaning: "Arroz / Comida", example: "ごはんをたべます。- Como arroz." },
    ],
  },
  {
    id: "hiragana-12",
    lesson: "Lección 12 - Sonidos Especiales: Z",
    characters: ["ざ", "じ", "ず", "ぜ", "ぞ"],
    vocabulary: [
      { word: "ざっし",   romaji: "zasshi",  meaning: "Revista",    example: "ざっしをよみます。- Leo una revista." },
      { word: "じかん",   romaji: "jikan",   meaning: "Tiempo/Hora",example: "じかんがありません。- No tengo tiempo." },
      { word: "ずつう",   romaji: "zutsuu",  meaning: "Dolor de cabeza", example: "ずつうがします。- Me duele la cabeza." },
      { word: "ぜんぶ",   romaji: "zenbu",   meaning: "Todo",       example: "ぜんぶたべました。- Lo comí todo." },
      { word: "ぞう",     romaji: "zou",     meaning: "Elefante",   example: "ぞうはおおきいです。- El elefante es grande." },
    ],
  },
  {
    id: "hiragana-13",
    lesson: "Lección 13 - Sonidos Especiales: D",
    characters: ["だ", "ぢ", "づ", "で", "ど"],
    vocabulary: [
      { word: "だいがく", romaji: "daigaku",  meaning: "Universidad", example: "だいがくにかよっています。- Asisto a la universidad." },
      { word: "でんわ",   romaji: "denwa",    meaning: "Teléfono",    example: "でんわをかけます。- Hago una llamada." },
      { word: "どこ",     romaji: "doko",     meaning: "¿Dónde?",     example: "どこにいきますか？- ¿A dónde vas?" },
      { word: "どうぞ",   romaji: "douzo",    meaning: "Por favor / Adelante", example: "どうぞはいってください。- Por favor, pase." },
      { word: "でかける", romaji: "dekakeru", meaning: "Salir",       example: "そとにでかけます。- Salgo afuera." },
    ],
  },
  {
    id: "hiragana-14",
    lesson: "Lección 14 - Sonidos Especiales: B",
    characters: ["ば", "び", "ぶ", "べ", "ぼ"],
    vocabulary: [
      { word: "ばら",   romaji: "bara",   meaning: "Rosa (flor)",  example: "ばらはきれいなはなです。- La rosa es una flor hermosa." },
      { word: "びょういん", romaji: "byouin", meaning: "Hospital", example: "びょういんへいきます。- Voy al hospital." },
      { word: "ぶた",   romaji: "buta",   meaning: "Cerdo",        example: "ぶたはのうじょうにいます。- Los cerdos están en la granja." },
      { word: "べんとう", romaji: "bentou", meaning: "Lonchera",   example: "べんとうをつくります。- Preparo una lonchera." },
      { word: "ぼんさい", romaji: "bonsai", meaning: "Bonsái",     example: "ぼんさいはにほんのでんとうです。- El bonsái es una tradición japonesa." },
    ],
  },
  {
    id: "hiragana-15",
    lesson: "Lección 15 - Sonidos Especiales: P",
    characters: ["ぱ", "ぴ", "ぷ", "ぺ", "ぽ"],
    vocabulary: [
      { word: "ぱん",       romaji: "pan",      meaning: "Pan",         example: "ぱんをたべます。- Como pan." },
      { word: "ぴかぴか",   romaji: "pikapika", meaning: "Brillante",   example: "くつがぴかぴかです。- Los zapatos están brillantes." },
      { word: "ぷち",       romaji: "puchi",    meaning: "Pequeño",     example: "ぷちとまとをたべます。- Como tomates pequeños." },
      { word: "ぺらぺら",   romaji: "perapera", meaning: "Fluido (idioma)", example: "かのじょはえいごがぺらぺらです。- Ella habla inglés fluidamente." },
      { word: "ぽん",       romaji: "pon",      meaning: "Sonido de golpe suave", example: "ドアをぽんとたたきます。- Golpeo suavemente la puerta." },
    ],
  },
];

// ─── Flat character list (for quiz generation) ───────────────────────────────

export const HIRAGANA_ALL_CHARS: JapaneseCharacter[] = HIRAGANA_TABLE_ROWS.flatMap((row) =>
  row.cells
    .filter((c) => c.char !== null)
    .map((c) => ({
      char: c.char!,
      romaji: c.romaji!,
      strokeCount: HIRAGANA_STROKE_COUNT[c.char!] ?? 1,
      row: row.label,
      type: "basic" as const,
    }))
);

export const HIRAGANA_DAKUTEN_CHARS: JapaneseCharacter[] = HIRAGANA_DAKUTEN_ROWS.flatMap((row) =>
  row.cells.map((c) => ({
    char: c.char!,
    romaji: c.romaji!,
    strokeCount: HIRAGANA_STROKE_COUNT[c.char!] ?? 1,
    row: row.label,
    type: "dakuten" as const,
  }))
);

export const HIRAGANA_HANDAKUTEN_CHARS: JapaneseCharacter[] = HIRAGANA_HANDAKUTEN_ROWS.flatMap((row) =>
  row.cells.map((c) => ({
    char: c.char!,
    romaji: c.romaji!,
    strokeCount: HIRAGANA_STROKE_COUNT[c.char!] ?? 1,
    row: row.label,
    type: "handakuten" as const,
  }))
);

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Returns the SVG asset path for a given hiragana character */
export function getHiraganaSvgPath(char: string): string {
  const romaji = HIRAGANA_ROMAJI[char] ?? char;
  return `/svg/hiragana/${romaji}.svg`;
}

/** Returns stroke count for a character */
export function getHiraganaStrokeCount(char: string): number {
  return HIRAGANA_STROKE_COUNT[char] ?? 1;
}

/** Returns the lesson that contains a specific character */
export function getLessonByChar(char: string): Lesson | undefined {
  return HIRAGANA_LESSONS.find((l) => l.characters.includes(char));
}