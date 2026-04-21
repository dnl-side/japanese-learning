// src/data/katakana.ts

import type { JapaneseCharacter, Lesson, TableRow } from "@/types/japanese";

// ─── Basic characters (gojuuon) ──────────────────────────────────────────────

export const KATAKANA_TABLE_ROWS: TableRow[] = [
  { label: "a",  cells: [{ char: "ア", romaji: "a"  }, { char: "イ", romaji: "i"  }, { char: "ウ", romaji: "u"  }, { char: "エ", romaji: "e"  }, { char: "オ", romaji: "o"  }] },
  { label: "ka", cells: [{ char: "カ", romaji: "ka" }, { char: "キ", romaji: "ki" }, { char: "ク", romaji: "ku" }, { char: "ケ", romaji: "ke" }, { char: "コ", romaji: "ko" }] },
  { label: "sa", cells: [{ char: "サ", romaji: "sa" }, { char: "シ", romaji: "shi"}, { char: "ス", romaji: "su" }, { char: "セ", romaji: "se" }, { char: "ソ", romaji: "so" }] },
  { label: "ta", cells: [{ char: "タ", romaji: "ta" }, { char: "チ", romaji: "chi"}, { char: "ツ", romaji: "tsu"}, { char: "テ", romaji: "te" }, { char: "ト", romaji: "to" }] },
  { label: "na", cells: [{ char: "ナ", romaji: "na" }, { char: "ニ", romaji: "ni" }, { char: "ヌ", romaji: "nu" }, { char: "ネ", romaji: "ne" }, { char: "ノ", romaji: "no" }] },
  { label: "ha", cells: [{ char: "ハ", romaji: "ha" }, { char: "ヒ", romaji: "hi" }, { char: "フ", romaji: "fu" }, { char: "ヘ", romaji: "he" }, { char: "ホ", romaji: "ho" }] },
  { label: "ma", cells: [{ char: "マ", romaji: "ma" }, { char: "ミ", romaji: "mi" }, { char: "ム", romaji: "mu" }, { char: "メ", romaji: "me" }, { char: "モ", romaji: "mo" }] },
  { label: "ya", cells: [{ char: "ヤ", romaji: "ya" }, { char: null, romaji: null }, { char: "ユ", romaji: "yu" }, { char: null, romaji: null }, { char: "ヨ", romaji: "yo" }] },
  { label: "ra", cells: [{ char: "ラ", romaji: "ra" }, { char: "リ", romaji: "ri" }, { char: "ル", romaji: "ru" }, { char: "レ", romaji: "re" }, { char: "ロ", romaji: "ro" }] },
  { label: "wa", cells: [{ char: "ワ", romaji: "wa" }, { char: null, romaji: null }, { char: "ヲ", romaji: "wo" }, { char: null, romaji: null }, { char: "ン", romaji: "n"  }] },
];

// ─── Dakuten (voiced) ────────────────────────────────────────────────────────

export const KATAKANA_DAKUTEN_ROWS: TableRow[] = [
  { label: "ga", cells: [{ char: "ガ", romaji: "ga" }, { char: "ギ", romaji: "gi" }, { char: "グ", romaji: "gu" }, { char: "ゲ", romaji: "ge" }, { char: "ゴ", romaji: "go" }] },
  { label: "za", cells: [{ char: "ザ", romaji: "za" }, { char: "ジ", romaji: "ji" }, { char: "ズ", romaji: "zu" }, { char: "ゼ", romaji: "ze" }, { char: "ゾ", romaji: "zo" }] },
  { label: "da", cells: [{ char: "ダ", romaji: "da" }, { char: "ヂ", romaji: "di" }, { char: "ヅ", romaji: "du" }, { char: "デ", romaji: "de" }, { char: "ド", romaji: "do" }] },
  { label: "ba", cells: [{ char: "バ", romaji: "ba" }, { char: "ビ", romaji: "bi" }, { char: "ブ", romaji: "bu" }, { char: "ベ", romaji: "be" }, { char: "ボ", romaji: "bo" }] },
];

// ─── Handakuten (semi-voiced) ────────────────────────────────────────────────

export const KATAKANA_HANDAKUTEN_ROWS: TableRow[] = [
  { label: "pa", cells: [{ char: "パ", romaji: "pa" }, { char: "ピ", romaji: "pi" }, { char: "プ", romaji: "pu" }, { char: "ペ", romaji: "pe" }, { char: "ポ", romaji: "po" }] },
];

// ─── Combo sounds (youon) ────────────────────────────────────────────────────

export const KATAKANA_COMBO_ROWS: TableRow[] = [
  { label: "kya", cells: [{ char: "キャ", romaji: "kya" }, { char: "キュ", romaji: "kyu" }, { char: "キョ", romaji: "kyo" }, { char: null, romaji: null }, { char: null, romaji: null }] },
  { label: "sha", cells: [{ char: "シャ", romaji: "sha" }, { char: "シュ", romaji: "shu" }, { char: "ショ", romaji: "sho" }, { char: null, romaji: null }, { char: null, romaji: null }] },
  { label: "cha", cells: [{ char: "チャ", romaji: "cha" }, { char: "チュ", romaji: "chu" }, { char: "チョ", romaji: "cho" }, { char: null, romaji: null }, { char: null, romaji: null }] },
  { label: "nya", cells: [{ char: "ニャ", romaji: "nya" }, { char: "ニュ", romaji: "nyu" }, { char: "ニョ", romaji: "nyo" }, { char: null, romaji: null }, { char: null, romaji: null }] },
  { label: "hya", cells: [{ char: "ヒャ", romaji: "hya" }, { char: "ヒュ", romaji: "hyu" }, { char: "ヒョ", romaji: "hyo" }, { char: null, romaji: null }, { char: null, romaji: null }] },
  { label: "mya", cells: [{ char: "ミャ", romaji: "mya" }, { char: "ミュ", romaji: "myu" }, { char: "ミョ", romaji: "myo" }, { char: null, romaji: null }, { char: null, romaji: null }] },
  { label: "rya", cells: [{ char: "リャ", romaji: "rya" }, { char: "リュ", romaji: "ryu" }, { char: "リョ", romaji: "ryo" }, { char: null, romaji: null }, { char: null, romaji: null }] },
  { label: "gya", cells: [{ char: "ギャ", romaji: "gya" }, { char: "ギュ", romaji: "gyu" }, { char: "ギョ", romaji: "gyo" }, { char: null, romaji: null }, { char: null, romaji: null }] },
  { label: "ja",  cells: [{ char: "ジャ", romaji: "ja"  }, { char: "ジュ", romaji: "ju"  }, { char: "ジョ", romaji: "jo"  }, { char: null, romaji: null }, { char: null, romaji: null }] },
  { label: "bya", cells: [{ char: "ビャ", romaji: "bya" }, { char: "ビュ", romaji: "byu" }, { char: "ビョ", romaji: "byo" }, { char: null, romaji: null }, { char: null, romaji: null }] },
  { label: "pya", cells: [{ char: "ピャ", romaji: "pya" }, { char: "ピュ", romaji: "pyu" }, { char: "ピョ", romaji: "pyo" }, { char: null, romaji: null }, { char: null, romaji: null }] },
];

// ─── Stroke counts ───────────────────────────────────────────────────────────

export const KATAKANA_STROKE_COUNT: Record<string, number> = {
  "ア": 2, "イ": 2, "ウ": 3, "エ": 3, "オ": 3,
  "カ": 2, "キ": 3, "ク": 2, "ケ": 3, "コ": 2,
  "サ": 3, "シ": 3, "ス": 2, "セ": 2, "ソ": 2,
  "タ": 3, "チ": 3, "ツ": 3, "テ": 3, "ト": 2,
  "ナ": 2, "ニ": 2, "ヌ": 2, "ネ": 4, "ノ": 1,
  "ハ": 3, "ヒ": 2, "フ": 1, "ヘ": 1, "ホ": 4,
  "マ": 3, "ミ": 3, "ム": 2, "メ": 2, "モ": 3,
  "ヤ": 3, "ユ": 2, "ヨ": 3,
  "ラ": 2, "リ": 2, "ル": 2, "レ": 1, "ロ": 3,
  "ワ": 2, "ヲ": 3, "ン": 2,
  // dakuten
  "ガ": 4, "ギ": 5, "グ": 4, "ゲ": 5, "ゴ": 4,
  "ザ": 5, "ジ": 5, "ズ": 4, "ゼ": 4, "ゾ": 4,
  "ダ": 5, "ヂ": 5, "ヅ": 5, "デ": 5, "ド": 4,
  "バ": 5, "ビ": 4, "ブ": 3, "ベ": 3, "ボ": 6,
  // handakuten
  "パ": 4, "ピ": 3, "プ": 2, "ペ": 2, "ポ": 5,
  // small / special
  "ッ": 3, "ャ": 3, "ュ": 2, "ョ": 3, "ー": 1,
};

// ─── Romaji map ───────────────────────────────────────────────────────────────

export const KATAKANA_ROMAJI: Record<string, string> = {
  "ア": "a",   "イ": "i",   "ウ": "u",   "エ": "e",   "オ": "o",
  "カ": "ka",  "キ": "ki",  "ク": "ku",  "ケ": "ke",  "コ": "ko",
  "サ": "sa",  "シ": "shi", "ス": "su",  "セ": "se",  "ソ": "so",
  "タ": "ta",  "チ": "chi", "ツ": "tsu", "テ": "te",  "ト": "to",
  "ナ": "na",  "ニ": "ni",  "ヌ": "nu",  "ネ": "ne",  "ノ": "no",
  "ハ": "ha",  "ヒ": "hi",  "フ": "fu",  "ヘ": "he",  "ホ": "ho",
  "マ": "ma",  "ミ": "mi",  "ム": "mu",  "メ": "me",  "モ": "mo",
  "ヤ": "ya",  "ユ": "yu",  "ヨ": "yo",
  "ラ": "ra",  "リ": "ri",  "ル": "ru",  "レ": "re",  "ロ": "ro",
  "ワ": "wa",  "ヲ": "wo",  "ン": "n",
  "ガ": "ga",  "ギ": "gi",  "グ": "gu",  "ゲ": "ge",  "ゴ": "go",
  "ザ": "za",  "ジ": "ji",  "ズ": "zu",  "ゼ": "ze",  "ゾ": "zo",
  "ダ": "da",  "ヂ": "di",  "ヅ": "du",  "デ": "de",  "ド": "do",
  "バ": "ba",  "ビ": "bi",  "ブ": "bu",  "ベ": "be",  "ボ": "bo",
  "パ": "pa",  "ピ": "pi",  "プ": "pu",  "ペ": "pe",  "ポ": "po",
  "ッ": "ltsu","ャ": "lya", "ュ": "lyu", "ョ": "lyo", "ー": "alargue",
};

// ─── Lessons with vocabulary ─────────────────────────────────────────────────

export const KATAKANA_LESSONS: Lesson[] = [
  {
    id: "katakana-1",
    lesson: "Lección 1 - A, I, U, E, O",
    characters: ["ア", "イ", "ウ", "エ", "オ"],
    vocabulary: [
      { word: "アイス",   romaji: "aisu",    meaning: "Helado",                         example: "アイスがだいすきです。- Me encanta el helado." },
      { word: "イカ",     romaji: "ika",     meaning: "Calamar",                        example: "イカをりょうりします。- Cocino calamar." },
      { word: "ウニ",     romaji: "uni",     meaning: "Erizo de mar",                   example: "ウニはおいしいです。- El erizo de mar es delicioso." },
      { word: "エコ",     romaji: "eko",     meaning: "Ecológico",                      example: "エコなせいかつをしています。- Llevo una vida ecológica." },
      { word: "オアシス", romaji: "oashisu", meaning: "Oasis",                          example: "さばくにオアシスがあります。- Hay un oasis en el desierto." },
    ],
  },
  {
    id: "katakana-2",
    lesson: "Lección 2 - Ka, Ki, Ku, Ke, Ko",
    characters: ["カ", "キ", "ク", "ケ", "コ"],
    vocabulary: [
      { word: "カメラ",   romaji: "kamera",  meaning: "Cámara",     example: "カメラでしゃしんをとります。- Tomo fotos con la cámara." },
      { word: "キー",     romaji: "kī",      meaning: "Llave",      example: "キーをなくしました。- Perdí la llave." },
      { word: "クラス",   romaji: "kurasu",  meaning: "Clase",      example: "クラスでべんきょうします。- Estudio en clase." },
      { word: "ケーキ",   romaji: "kēki",    meaning: "Pastel",     example: "ケーキをたべます。- Como pastel." },
      { word: "コーヒー", romaji: "kōhī",    meaning: "Café",       example: "コーヒーをのみます。- Bebo café." },
    ],
  },
  {
    id: "katakana-3",
    lesson: "Lección 3 - Sa, Shi, Su, Se, So",
    characters: ["サ", "シ", "ス", "セ", "ソ"],
    vocabulary: [
      { word: "サッカー",   romaji: "sakkā",   meaning: "Fútbol",     example: "サッカーをします。- Juego fútbol." },
      { word: "シャツ",     romaji: "shatsu",  meaning: "Camisa",     example: "シャツをきます。- Me pongo la camisa." },
      { word: "スポーツ",   romaji: "supōtsu", meaning: "Deporte",    example: "スポーツがすきです。- Me gustan los deportes." },
      { word: "セーター",   romaji: "sētā",    meaning: "Suéter",     example: "セーターをきます。- Me pongo el suéter." },
      { word: "ソファ",     romaji: "sofa",    meaning: "Sofá",       example: "ソファにすわります。- Me siento en el sofá." },
    ],
  },
  {
    id: "katakana-4",
    lesson: "Lección 4 - Ta, Chi, Tsu, Te, To",
    characters: ["タ", "チ", "ツ", "テ", "ト"],
    vocabulary: [
      { word: "タクシー", romaji: "takushī", meaning: "Taxi",       example: "タクシーにのります。- Tomo un taxi." },
      { word: "チーズ",   romaji: "chīzu",   meaning: "Queso",      example: "チーズがすきです。- Me gusta el queso." },
      { word: "ツナ",     romaji: "tsuna",   meaning: "Atún",       example: "ツナサンドをつくります。- Preparo un sándwich de atún." },
      { word: "テーブル", romaji: "tēburu",  meaning: "Mesa",       example: "テーブルをきれいにします。- Limpio la mesa." },
      { word: "トマト",   romaji: "tomato",  meaning: "Tomate",     example: "トマトをたべます。- Como tomate." },
    ],
  },
  {
    id: "katakana-5",
    lesson: "Lección 5 - Na, Ni, Nu, Ne, No",
    characters: ["ナ", "ニ", "ヌ", "ネ", "ノ"],
    vocabulary: [
      { word: "ナイフ",     romaji: "naifu",     meaning: "Cuchillo",  example: "ナイフでパンをきります。- Corto pan con un cuchillo." },
      { word: "ニュース",   romaji: "nyūsu",     meaning: "Noticias",  example: "ニュースをみます。- Veo las noticias." },
      { word: "ヌードル",   romaji: "nūdoru",    meaning: "Fideos",    example: "ヌードルをたべます。- Como fideos." },
      { word: "ネックレス", romaji: "nekkuresu", meaning: "Collar",    example: "ネックレスをかいます。- Compro un collar." },
      { word: "ノート",     romaji: "nōto",      meaning: "Cuaderno", example: "ノートにかきます。- Escribo en un cuaderno." },
    ],
  },
  {
    id: "katakana-6",
    lesson: "Lección 6 - Ha, Hi, Fu, He, Ho",
    characters: ["ハ", "ヒ", "フ", "ヘ", "ホ"],
    vocabulary: [
      { word: "ハンバーガー",  romaji: "hanbāgā",    meaning: "Hamburguesa",  example: "ハンバーガーをたべます。- Como una hamburguesa." },
      { word: "ヒーロー",      romaji: "hīrō",       meaning: "Héroe",        example: "ヒーローはつよいです。- El héroe es fuerte." },
      { word: "フルーツ",      romaji: "furūtsu",    meaning: "Fruta",        example: "フルーツがすきです。- Me gusta la fruta." },
      { word: "ヘリコプター",  romaji: "herikoputā", meaning: "Helicóptero",  example: "ヘリコプターがそらをとびます。- El helicóptero vuela en el cielo." },
      { word: "ホテル",        romaji: "hoteru",     meaning: "Hotel",        example: "ホテルでとまります。- Me hospedo en un hotel." },
    ],
  },
  {
    id: "katakana-7",
    lesson: "Lección 7 - Ma, Mi, Mu, Me, Mo",
    characters: ["マ", "ミ", "ム", "メ", "モ"],
    vocabulary: [
      { word: "マンガ",   romaji: "manga",   meaning: "Cómic japonés",    example: "マンガをよみます。- Leo un manga." },
      { word: "ミルク",   romaji: "miruku",  meaning: "Leche",            example: "ミルクをのみます。- Bebo leche." },
      { word: "ムード",   romaji: "mūdo",    meaning: "Ambiente/Mood",    example: "ムードがいいです。- El ambiente es bueno." },
      { word: "メニュー", romaji: "menyū",   meaning: "Menú",             example: "メニューをみます。- Miro el menú." },
      { word: "モデル",   romaji: "moderu",  meaning: "Modelo",           example: "モデルになりたいです。- Quiero ser modelo." },
    ],
  },
  {
    id: "katakana-8",
    lesson: "Lección 8 - Ya, Yu, Yo",
    characters: ["ヤ", "ユ", "ヨ"],
    vocabulary: [
      { word: "ヤシ",     romaji: "yashi",   meaning: "Palma (árbol)",    example: "ヤシのきがあります。- Hay una palmera." },
      { word: "ユニフォーム", romaji: "yunifōmu", meaning: "Uniforme",    example: "ユニフォームをきます。- Me pongo el uniforme." },
      { word: "ユーモア", romaji: "yūmoa",   meaning: "Humor",            example: "ユーモアがあります。- Tiene sentido del humor." },
      { word: "ヨガ",     romaji: "yoga",    meaning: "Yoga",             example: "ヨガをします。- Hago yoga." },
      { word: "ヨーロッパ", romaji: "yōroppa", meaning: "Europa",         example: "ヨーロッパにいきたいです。- Quiero ir a Europa." },
    ],
  },
  {
    id: "katakana-9",
    lesson: "Lección 9 - Ra, Ri, Ru, Re, Ro",
    characters: ["ラ", "リ", "ル", "レ", "ロ"],
    vocabulary: [
      { word: "ラーメン",   romaji: "rāmen",   meaning: "Ramen",          example: "ラーメンをたべます。- Como ramen." },
      { word: "リモコン",   romaji: "rimokon", meaning: "Control remoto", example: "リモコンでテレビをつけます。- Enciendo el TV con el control." },
      { word: "ルール",     romaji: "rūru",    meaning: "Regla",          example: "ルールをまもります。- Sigo las reglas." },
      { word: "レストラン", romaji: "resutoran", meaning: "Restaurante",  example: "レストランでひるごはんをたべます。- Almuerzo en un restaurante." },
      { word: "ロボット",   romaji: "robotto", meaning: "Robot",          example: "ロボットがはたらいています。- Un robot está trabajando." },
    ],
  },
  {
    id: "katakana-10",
    lesson: "Lección 10 - Wa, Wo, N",
    characters: ["ワ", "ヲ", "ン"],
    vocabulary: [
      { word: "ワイン",        romaji: "wain",    meaning: "Vino",               example: "ワインをのみます。- Bebo vino." },
      { word: "ワールド",      romaji: "wārudo",  meaning: "Mundo",              example: "ディズニーワールドにいきます。- Voy a Disney World." },
      { word: "サンドイッチ",  romaji: "sandoicchi", meaning: "Sándwich",        example: "サンドイッチをたべます。- Como un sándwich." },
      { word: "コンピューター",romaji: "konpyūtā", meaning: "Computadora",      example: "コンピューターをつかいます。- Uso la computadora." },
      { word: "パン",          romaji: "pan",     meaning: "Pan",                example: "パンをたべます。- Como pan." },
    ],
  },
  {
    id: "katakana-11",
    lesson: "Lección 11 - Sonidos Especiales: G",
    characters: ["ガ", "ギ", "グ", "ゲ", "ゴ"],
    vocabulary: [
      { word: "ガス",   romaji: "gasu",  meaning: "Gas",         example: "ガスをけします。- Apago el gas." },
      { word: "ギター", romaji: "gitā",  meaning: "Guitarra",    example: "ギターをひきます。- Toco la guitarra." },
      { word: "グラス", romaji: "gurasu",meaning: "Vaso",        example: "グラスにみずをいれます。- Pongo agua en el vaso." },
      { word: "ゲーム", romaji: "gēmu",  meaning: "Videojuego",  example: "ゲームをします。- Juego un videojuego." },
      { word: "ゴール", romaji: "gōru",  meaning: "Gol / Meta",  example: "ゴールをめざします。- Apunto al gol." },
    ],
  },
  {
    id: "katakana-12",
    lesson: "Lección 12 - Sonidos Especiales: Z",
    characters: ["ザ", "ジ", "ズ", "ゼ", "ゾ"],
    vocabulary: [
      { word: "ザリガニ", romaji: "zarigani", meaning: "Cangrejo de río", example: "ザリガニをつかまえました。- Atrapé un cangrejo de río." },
      { word: "ジム",     romaji: "jimu",     meaning: "Gimnasio",        example: "ジムでトレーニングをします。- Entreno en el gimnasio." },
      { word: "ズボン",   romaji: "zubon",    meaning: "Pantalones",      example: "ズボンをはきます。- Me pongo los pantalones." },
      { word: "ゼリー",   romaji: "zerī",     meaning: "Gelatina",        example: "ゼリーをつくります。- Hago gelatina." },
      { word: "ゾウ",     romaji: "zō",       meaning: "Elefante",        example: "ゾウはおおきいです。- El elefante es grande." },
    ],
  },
  {
    id: "katakana-13",
    lesson: "Lección 13 - Sonidos Especiales: D",
    characters: ["ダ", "ヂ", "ヅ", "デ", "ド"],
    vocabulary: [
      { word: "ダンス",      romaji: "dansu",     meaning: "Baile",                  example: "ダンスをならっています。- Estoy aprendiendo a bailar." },
      { word: "ダイヤモンド",romaji: "daiyamondo",meaning: "Diamante",               example: "ダイヤモンドのゆびわをかいました。- Compré un anillo de diamante." },
      { word: "デパート",    romaji: "depāto",    meaning: "Tienda departamental",   example: "デパートでかいものをします。- Hago compras en la tienda." },
      { word: "ドア",        romaji: "doa",       meaning: "Puerta",                 example: "ドアをあけてください。- Por favor, abre la puerta." },
      { word: "デート",      romaji: "dēto",      meaning: "Cita romántica",         example: "デートにいきます。- Voy a una cita." },
    ],
  },
  {
    id: "katakana-14",
    lesson: "Lección 14 - Sonidos Especiales: B",
    characters: ["バ", "ビ", "ブ", "ベ", "ボ"],
    vocabulary: [
      { word: "バス",    romaji: "basu",   meaning: "Autobús",  example: "バスでがっこうにいきます。- Voy a la escuela en autobús." },
      { word: "バナナ",  romaji: "banana", meaning: "Banana",   example: "バナナがすきです。- Me gustan las bananas." },
      { word: "ビール",  romaji: "bīru",   meaning: "Cerveza",  example: "ビールをのんでいます。- Estoy bebiendo cerveza." },
      { word: "ベッド",  romaji: "beddo",  meaning: "Cama",     example: "ベッドでねます。- Duermo en la cama." },
      { word: "ボール",  romaji: "bōru",   meaning: "Pelota",   example: "ボールであそびます。- Juego con la pelota." },
    ],
  },
  {
    id: "katakana-15",
    lesson: "Lección 15 - Sonidos Especiales: P",
    characters: ["パ", "ピ", "プ", "ペ", "ポ"],
    vocabulary: [
      { word: "パン",      romaji: "pan",    meaning: "Pan",     example: "パンをたべます。- Como pan." },
      { word: "パーティー",romaji: "pātī",   meaning: "Fiesta",  example: "パーティーにいきます。- Voy a una fiesta." },
      { word: "ピアノ",    romaji: "piano",  meaning: "Piano",   example: "ピアノをひきます。- Toco el piano." },
      { word: "プール",    romaji: "pūru",   meaning: "Piscina", example: "プールでおよぎます。- Nado en la piscina." },
      { word: "ポスター",  romaji: "posutā", meaning: "Póster",  example: "ポスターをかざります。- Decoro con un póster." },
    ],
  },
];

// ─── Flat character list (for quiz generation) ───────────────────────────────

export const KATAKANA_ALL_CHARS: JapaneseCharacter[] = KATAKANA_TABLE_ROWS.flatMap((row) =>
  row.cells
    .filter((c) => c.char !== null)
    .map((c) => ({
      char: c.char!,
      romaji: c.romaji!,
      strokeCount: KATAKANA_STROKE_COUNT[c.char!] ?? 1,
      row: row.label,
      type: "basic" as const,
    }))
);

export const KATAKANA_DAKUTEN_CHARS: JapaneseCharacter[] = KATAKANA_DAKUTEN_ROWS.flatMap((row) =>
  row.cells.map((c) => ({
    char: c.char!,
    romaji: c.romaji!,
    strokeCount: KATAKANA_STROKE_COUNT[c.char!] ?? 1,
    row: row.label,
    type: "dakuten" as const,
  }))
);

export const KATAKANA_HANDAKUTEN_CHARS: JapaneseCharacter[] = KATAKANA_HANDAKUTEN_ROWS.flatMap((row) =>
  row.cells.map((c) => ({
    char: c.char!,
    romaji: c.romaji!,
    strokeCount: KATAKANA_STROKE_COUNT[c.char!] ?? 1,
    row: row.label,
    type: "handakuten" as const,
  }))
);

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Returns the SVG asset path for a given katakana character */
export function getKatakanaSvgPath(char: string): string {
  const romaji = KATAKANA_ROMAJI[char] ?? char;
  return `/svg/katakana/${romaji}.svg`;
}

/** Returns stroke count for a character */
export function getKatakanaStrokeCount(char: string): number {
  return KATAKANA_STROKE_COUNT[char] ?? 1;
}

/** Returns the lesson that contains a specific character */
export function getKatakanaLessonByChar(char: string): Lesson | undefined {
  return KATAKANA_LESSONS.find((l) => l.characters.includes(char));
}