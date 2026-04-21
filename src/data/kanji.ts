// src/data/kanji.ts

import type { RubySegment } from "@/app/components/ui/Ruby";

// ─── Types ────────────────────────────────────────────────────────────────────
export interface KanjiExample {
  segments: RubySegment[];
  translation: string;
  note?: string;
}

export interface KanjiEntry {
  char: string;
  level: number;
  strokeCount: number;
  on: string[];
  kun: string[];
  meaning: string;
  example?: string;
  examples?: KanjiExample[];
  hasSvg: boolean;
  svgFile?: string;
}
// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getKanjiExamples(entry: KanjiEntry): KanjiExample[] {
  if (entry.examples?.length) return entry.examples;

  if (entry.example?.trim()) {
    return [
      {
        segments: [{ text: entry.example }],
        translation: ""
      },
    ];
  }

  return [];
}

export function getPrimaryKanjiExample(entry: KanjiEntry): KanjiExample | undefined {
  return getKanjiExamples(entry)[0];
}

export function kanjiExampleToText(example: KanjiExample): string {
  return example.segments.map((seg) => seg.text).join("");
}

export function getSvgPath(entry: KanjiEntry): string {
  if (!entry.hasSvg) return "";
  return buildKanjiSvgPath(entry.char, entry.level) ?? "";
}

export function getKanjiByLevel(level: number): KanjiEntry[] {
  return KANJI_LIST.filter(k => k.level === level);
}

export function getKanjiEntry(char: string): KanjiEntry | undefined {
  return KANJI_LIST.find(k => k.char === char);
}

export const AVAILABLE_LEVELS = [1, 2] as const;
export const ALL_LEVELS = [1, 2, 3, 4, 5, 6, 7, 8] as const;

function getKanjiFolder(level: number): string {
  if (level === 1) return "nivel_uno";
  if (level === 2) return "nivel_dos";
  return "";
}

export function getKanjiSvgFile(char: string, level: number): string | undefined {
  return KANJI_SVG_MAP[level]?.[char];
}

export function buildKanjiSvgPath(char: string, level: number): string | undefined {
  const file = getKanjiSvgFile(char, level);
  const folder = getKanjiFolder(level);

  if (!file || !folder) return undefined;

  return `/svg/kanji/${folder}/${file}.svg`;
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


// ─── Level 1 Kanji — 80 chars, full data ─────────────────────────────────────

const LEVEL1: KanjiEntry[] = [
  {
    char: "一",
    level: 1,
    strokeCount: 1,
    on: ["イチ", "イツ"],
    kun: ["ひと", "ひと(つ)"],
    meaning: "Uno",
    examples: [
      {
        segments: ruby("[飴|あめ]を[一|ひと]つください。"),
        translation: "Por favor, deme un caramelo.",
      },
      {
        segments: ruby("[一|いち][年生|ねんせい]です。"),
        translation: "Soy de primer año.",
      },
      {
        segments: ruby("[一|ひ][人|とり]で[行|い]きます。"),
        translation: "Voy solo.",
      },
      {
        segments: ruby("[一|いっ][回|かい]だけ[読|よ]みます。"),
        translation: "Lo leeré solo una vez.",
      },
      {
        segments: ruby("[一|いち][番|ばん][上|うえ]です。"),
        translation: "Está en la parte más arriba.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "右",
    level: 1,
    strokeCount: 5,
    on: ["ウ", "ユウ"],
    kun: ["みぎ"],
    meaning: "Derecha",
    examples: [
      {
        segments: ruby("[右|みぎ]に[曲|ま]がります。"),
        translation: "Dobla a la derecha.",
      },
      {
        segments: ruby("[右手|みぎて]を[上|あ]げてください。"),
        translation: "Levanta la mano derecha.",
      },
      {
        segments: ruby("[右足|みぎあし]が[痛|いた]いです。"),
        translation: "Me duele la pierna derecha.",
      },
      {
        segments: ruby("[右側|みぎがわ]に[座|すわ]ってください。"),
        translation: "Siéntate al lado derecho.",
      },
      {
        segments: ruby("[右|みぎ]の[道|みち]を[行|い]きます。"),
        translation: "Voy por el camino de la derecha.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "雨",
    level: 1,
    strokeCount: 8,
    on: ["ウ"],
    kun: ["あめ", "あま"],
    meaning: "Lluvia",
    examples: [
      {
        segments: ruby("[雨|あめ]が[降|ふ]っています。"),
        translation: "Está lloviendo.",
      },
      {
        segments: ruby("[今日|きょう]は[雨|あめ]です。"),
        translation: "Hoy está lluvioso.",
      },
      {
        segments: ruby("[雨|あめ]の[日|ひ]は[家|いえ]にいます。"),
        translation: "En los días de lluvia me quedo en casa.",
      },
      {
        segments: ruby("[大雨|おおあめ]に[気|き]をつけてください。"),
        translation: "Ten cuidado con la lluvia fuerte.",
      },
      {
        segments: ruby("[雨音|あまおと]が[聞|き]こえます。"),
        translation: "Se oye el sonido de la lluvia.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "円",
    level: 1,
    strokeCount: 4,
    on: ["エン"],
    kun: [],
    meaning: "Yen / Círculo",
    examples: [
      {
        segments: ruby("[一円玉|いちえんだま]があります。"),
        translation: "Hay una moneda de un yen.",
      },
      {
        segments: ruby("これは百[円|えん]です。"),
        translation: "Esto cuesta cien yenes.",
      },
      {
        segments: ruby("十[円|えん]ください。"),
        translation: "Por favor, deme diez yenes.",
      },
      {
        segments: ruby("[円|えん]をかきます。"),
        translation: "Dibujo un círculo.",
      },
      {
        segments: ruby("[日本|にほん]の[円|えん]です。"),
        translation: "Es el yen japonés.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "王",
    level: 1,
    strokeCount: 4,
    on: ["オウ"],
    kun: [],
    meaning: "Rey",
    examples: [
      {
        segments: ruby("[王様|おうさま]がいます。"),
        translation: "Hay un rey.",
      },
      {
        segments: ruby("[王子|おうじ]が[来|き]ました。"),
        translation: "Llegó el príncipe.",
      },
      {
        segments: ruby("[女王|じょおう]はきれいです。"),
        translation: "La reina es hermosa.",
      },
      {
        segments: ruby("チェスの[王|おう]を[守|まも]ります。"),
        translation: "Protejo al rey del ajedrez.",
      },
      {
        segments: ruby("[王|おう]は[国|くに]をおさめます。"),
        translation: "El rey gobierna el país.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "音",
    level: 1,
    strokeCount: 9,
    on: ["イン", "オン"],
    kun: ["おと", "ね"],
    meaning: "Sonido",
    examples: [
      {
        segments: ruby("[音楽|おんがく]を[聞|き]きます。"),
        translation: "Escucho música.",
      },
      {
        segments: ruby("[大|おお]きい[音|おと]がしました。"),
        translation: "Se oyó un sonido fuerte.",
      },
      {
        segments: ruby("[雨|あめ]の[音|おと]がします。"),
        translation: "Se oye el sonido de la lluvia.",
      },
      {
        segments: ruby("[音読|おんどく]をします。"),
        translation: "Hago lectura en voz alta.",
      },
      {
        segments: ruby("[音|おと]を[小|ちい]さくしてください。"),
        translation: "Baja el volumen.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "下",
    level: 1,
    strokeCount: 3,
    on: ["カ", "ゲ"],
    kun: ["した", "しも", "さ.げる"],
    meaning: "Abajo / Bajar",
    examples: [
      {
        segments: ruby("[机|つくえ]の[下|した]に[猫|ねこ]がいます。"),
        translation: "Hay un gato debajo de la mesa.",
      },
      {
        segments: ruby("[下|した]を[見|み]てください。"),
        translation: "Mira hacia abajo.",
      },
      {
        segments: ruby("[階段|かいだん]を[下|お]ります。"),
        translation: "Bajo las escaleras.",
      },
      {
        segments: ruby("[山|やま]を[下|くだ]ります。"),
        translation: "Bajo la montaña.",
      },
      {
        segments: ruby("[本|ほん]を[下|した]におきます。"),
        translation: "Pongo el libro abajo.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "火",
    level: 1,
    strokeCount: 4,
    on: ["カ"],
    kun: ["ひ", "ほ"],
    meaning: "Fuego",
    examples: [
      {
        segments: ruby("[火|ひ]を[消|け]してください。"),
        translation: "Por favor, apaga el fuego.",
      },
      {
        segments: ruby("[火曜日|かようび]に[行|い]きます。"),
        translation: "Iré el martes.",
      },
      {
        segments: ruby("[火山|かざん]の[写真|しゃしん]です。"),
        translation: "Es una foto de un volcán.",
      },
      {
        segments: ruby("[火|ひ]は[熱|あつ]いです。"),
        translation: "El fuego es caliente.",
      },
      {
        segments: ruby("[火|ひ]をつけます。"),
        translation: "Enciendo el fuego.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "花",
    level: 1,
    strokeCount: 7,
    on: ["カ"],
    kun: ["はな"],
    meaning: "Flor",
    examples: [
      {
        segments: ruby("[桜|さくら]の[花|はな]が[咲|さ]いています。"),
        translation: "Las flores de cerezo están floreciendo.",
      },
      {
        segments: ruby("[花|はな]を[買|か]いました。"),
        translation: "Compré flores.",
      },
      {
        segments: ruby("[赤|あか]い[花|はな]がきれいです。"),
        translation: "La flor roja es bonita.",
      },
      {
        segments: ruby("[花屋|はなや]へ[行|い]きます。"),
        translation: "Voy a la florería.",
      },
      {
        segments: ruby("[母|はは]に[花|はな]をあげます。"),
        translation: "Le doy flores a mi madre.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "貝",
    level: 1,
    strokeCount: 7,
    on: ["バイ"],
    kun: ["かい"],
    meaning: "Concha",
    examples: [
      {
        segments: ruby("[海|うみ]で[貝|かい]を[見|み]つけました。"),
        translation: "Encontré una concha en el mar.",
      },
      {
        segments: ruby("[白|しろ]い[貝|かい]です。"),
        translation: "Es una concha blanca.",
      },
      {
        segments: ruby("[貝殻|かいがら]を[集|あつ]めます。"),
        translation: "Colecciono conchas.",
      },
      {
        segments: ruby("[貝|かい]をひろいました。"),
        translation: "Recogí una concha.",
      },
      {
        segments: ruby("[小|ちい]さい[貝|かい]があります。"),
        translation: "Hay una concha pequeña.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "学",
    level: 1,
    strokeCount: 8,
    on: ["ガク"],
    kun: ["まな.ぶ"],
    meaning: "Estudiar / Aprender",
    examples: [
      {
        segments: ruby("[学校|がっこう]で[学|まな]びます。"),
        translation: "Aprendo en la escuela.",
      },
      {
        segments: ruby("[学|がく][生|せい]です。"),
        translation: "Soy estudiante.",
      },
      {
        segments: ruby("[日本語|にほんご]を[学|まな]んでいます。"),
        translation: "Estoy aprendiendo japonés.",
      },
      {
        segments: ruby("[大学|だいがく]へ[行|い]きたいです。"),
        translation: "Quiero ir a la universidad.",
      },
      {
        segments: ruby("[学校|がっこう]は[八時|はちじ]からです。"),
        translation: "La escuela empieza a las ocho.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "気",
    level: 1,
    strokeCount: 6,
    on: ["キ", "ケ"],
    kun: ["いき"],
    meaning: "Energía / Ánimo",
    examples: [
      {
        segments: ruby("[元気|げんき]ですか。"),
        translation: "¿Cómo estás?",
      },
      {
        segments: ruby("[気|き]をつけてください。"),
        translation: "Ten cuidado.",
      },
      {
        segments: ruby("[天気|てんき]がいいです。"),
        translation: "Hace buen tiempo.",
      },
      {
        segments: ruby("[気持|きも]ちがいいです。"),
        translation: "Se siente bien.",
      },
      {
        segments: ruby("[空気|くうき]がきれいです。"),
        translation: "El aire está limpio.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "九",
    level: 1,
    strokeCount: 2,
    on: ["キュウ", "ク"],
    kun: ["ここの", "ここのつ"],
    meaning: "Nueve",
    examples: [
      {
        segments: ruby("[九|ここの]つあります。"),
        translation: "Hay nueve.",
      },
      {
        segments: ruby("[九時|くじ]に[会|あ]いましょう。"),
        translation: "Nos vemos a las nueve.",
      },
      {
        segments: ruby("[九人|きゅうにん]で[行|い]きます。"),
        translation: "Vamos nueve personas.",
      },
      {
        segments: ruby("[九月|くがつ]はまだ[暑|あつ]いです。"),
        translation: "En septiembre todavía hace calor.",
      },
      {
        segments: ruby("[九|きゅう][回|かい][読|よ]みました。"),
        translation: "Lo leí nueve veces.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "休",
    level: 1,
    strokeCount: 6,
    on: ["キュウ"],
    kun: ["やす.む"],
    meaning: "Descansar",
    examples: [
      {
        segments: ruby("[休|やす]みましょう。"),
        translation: "Descansemos.",
      },
      {
        segments: ruby("[今日|きょう]は[学校|がっこう]が[休|やす]みです。"),
        translation: "Hoy no hay clases.",
      },
      {
        segments: ruby("[日曜日|にちようび]に[休|やす]みます。"),
        translation: "Descanso el domingo.",
      },
      {
        segments: ruby("[少|すこ]し[休|やす]んでください。"),
        translation: "Descansa un poco.",
      },
      {
        segments: ruby("[木|き]の[下|した]で[休|やす]みます。"),
        translation: "Descanso bajo el árbol.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "玉",
    level: 1,
    strokeCount: 5,
    on: ["ギョク"],
    kun: ["たま"],
    meaning: "Bola / Joya",
    examples: [
      {
        segments: ruby("[玉|たま]ねぎを[切|き]ります。"),
        translation: "Corto cebolla.",
      },
      {
        segments: ruby("[白|しろ]い[玉|たま]があります。"),
        translation: "Hay una bola blanca.",
      },
      {
        segments: ruby("[玉|たま]を[投|な]げます。"),
        translation: "Lanzo la pelota.",
      },
      {
        segments: ruby("[目玉焼|めだまや]きを[食|た]べます。"),
        translation: "Como huevo frito.",
      },
      {
        segments: ruby("[水玉|みずたま]の[服|ふく]です。"),
        translation: "Es ropa con lunares.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "金",
    level: 1,
    strokeCount: 8,
    on: ["キン", "コン"],
    kun: ["かね"],
    meaning: "Oro / Dinero",
    examples: [
      {
        segments: ruby("[金|かね]を[大切|たいせつ]にします。"),
        translation: "Cuido bien el dinero.",
      },
      {
        segments: ruby("[金曜日|きんようび]に[行|い]きます。"),
        translation: "Iré el viernes.",
      },
      {
        segments: ruby("[お金|おかね]がありません。"),
        translation: "No tengo dinero.",
      },
      {
        segments: ruby("[金色|きんいろ]の[星|ほし]です。"),
        translation: "Es una estrella dorada.",
      },
      {
        segments: ruby("[銀行|ぎんこう]でお[金|かね]をおろします。"),
        translation: "Saco dinero del banco.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "空",
    level: 1,
    strokeCount: 8,
    on: ["クウ"],
    kun: ["そら", "あ.く", "から"],
    meaning: "Cielo",
    examples: [
      {
        segments: ruby("[青|あお]い[空|そら]です。"),
        translation: "Es un cielo azul.",
      },
      {
        segments: ruby("[空|そら]を[見|み]ます。"),
        translation: "Miro el cielo.",
      },
      {
        segments: ruby("[部屋|へや]が[空|あ]いています。"),
        translation: "La habitación está libre.",
      },
      {
        segments: ruby("[空港|くうこう]へ[行|い]きます。"),
        translation: "Voy al aeropuerto.",
      },
      {
        segments: ruby("[空|から]の[箱|はこ]です。"),
        translation: "Es una caja vacía.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "月",
    level: 1,
    strokeCount: 4,
    on: ["ゲツ", "ガツ"],
    kun: ["つき"],
    meaning: "Luna / Mes",
    examples: [
      {
        segments: ruby("[月|つき]がきれいです。"),
        translation: "La luna está hermosa.",
      },
      {
        segments: ruby("[今月|こんげつ]は[忙|いそが]しいです。"),
        translation: "Este mes estoy ocupado.",
      },
      {
        segments: ruby("[月曜日|げつようび]に[会議|かいぎ]があります。"),
        translation: "Hay reunión el lunes.",
      },
      {
        segments: ruby("[一|いち][月|がつ]は[寒|さむ]いです。"),
        translation: "Enero es frío.",
      },
      {
        segments: ruby("[月|つき]を[見|み]ながら[歩|ある]きます。"),
        translation: "Camino mirando la luna.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "犬",
    level: 1,
    strokeCount: 4,
    on: ["ケン"],
    kun: ["いぬ"],
    meaning: "Perro",
    examples: [
      {
        segments: ruby("[犬|いぬ]と[散歩|さんぽ]します。"),
        translation: "Paseo con el perro.",
      },
      {
        segments: ruby("[白|しろ]い[犬|いぬ]がいます。"),
        translation: "Hay un perro blanco.",
      },
      {
        segments: ruby("[犬|いぬ]が[走|はし]っています。"),
        translation: "El perro está corriendo.",
      },
      {
        segments: ruby("[小|ちい]さい[犬|いぬ]がかわいいです。"),
        translation: "El perrito es tierno.",
      },
      {
        segments: ruby("[犬|いぬ]の[名前|なまえ]はポチです。"),
        translation: "El perro se llama Pochi.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "見",
    level: 1,
    strokeCount: 7,
    on: ["ケン"],
    kun: ["み.る", "み.える"],
    meaning: "Ver",
    examples: [
      {
        segments: ruby("[景色|けしき]が[見|み]えます。"),
        translation: "Se puede ver el paisaje.",
      },
      {
        segments: ruby("[テレビ|てれび]を[見|み]ます。"),
        translation: "Veo la televisión.",
      },
      {
        segments: ruby("[先生|せんせい]に[見|み]せます。"),
        translation: "Se lo muestro al profesor.",
      },
      {
        segments: ruby("[前|まえ]を[見|み]てください。"),
        translation: "Mira al frente.",
      },
      {
        segments: ruby("[月|つき]を[見|み]ました。"),
        translation: "Vi la luna.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "五",
    level: 1,
    strokeCount: 4,
    on: ["ゴ"],
    kun: ["いつ", "いつ(つ)"],
    meaning: "Cinco",
    examples: [
      {
        segments: ruby("[五時|ごじ]に[会|あ]いましょう。"),
        translation: "Nos vemos a las cinco.",
      },
      {
        segments: ruby("[五|いつ]つあります。"),
        translation: "Hay cinco.",
      },
      {
        segments: ruby("[五人|ごにん]の[学生|がくせい]です。"),
        translation: "Son cinco estudiantes.",
      },
      {
        segments: ruby("[五月|ごがつ]は[花|はな]がきれいです。"),
        translation: "En mayo las flores son hermosas.",
      },
      {
        segments: ruby("[五|ご][回|かい][書|か]いてください。"),
        translation: "Escríbelo cinco veces.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "口",
    level: 1,
    strokeCount: 3,
    on: ["コウ", "ク"],
    kun: ["くち"],
    meaning: "Boca",
    examples: [
      {
        segments: ruby("[口|くち]を[開|あ]けてください。"),
        translation: "Abre la boca.",
      },
      {
        segments: ruby("[口|くち]を[閉|と]じてください。"),
        translation: "Cierra la boca.",
      },
      {
        segments: ruby("[入|い]り[口|ぐち]はあちらです。"),
        translation: "La entrada está por allá.",
      },
      {
        segments: ruby("[口|くち]が[小|ちい]さいです。"),
        translation: "Tiene la boca pequeña.",
      },
      {
        segments: ruby("[山|やま]の[入|い]り[口|ぐち]です。"),
        translation: "Es la entrada de la montaña.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "校",
    level: 1,
    strokeCount: 10,
    on: ["コウ"],
    kun: [],
    meaning: "Escuela",
    examples: [
      {
        segments: ruby("[学校|がっこう]へ[行|い]きます。"),
        translation: "Voy a la escuela.",
      },
      {
        segments: ruby("[校長先生|こうちょうせんせい]に[会|あ]いました。"),
        translation: "Me reuní con el director.",
      },
      {
        segments: ruby("[学校|がっこう]は[八時|はちじ]からです。"),
        translation: "La escuela empieza a las ocho.",
      },
      {
        segments: ruby("[校門|こうもん]の[前|まえ]で[待|ま]ちます。"),
        translation: "Espero frente a la puerta de la escuela.",
      },
      {
        segments: ruby("[学校|がっこう]で[友達|ともだち]と[話|はな]します。"),
        translation: "Hablo con mis amigos en la escuela.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "左",
    level: 1,
    strokeCount: 5,
    on: ["サ"],
    kun: ["ひだり"],
    meaning: "Izquierda",
    examples: [
      {
        segments: ruby("[左|ひだり]に[曲|ま]がってください。"),
        translation: "Por favor, dobla a la izquierda.",
      },
      {
        segments: ruby("[左手|ひだりて]で[書|か]きます。"),
        translation: "Escribo con la mano izquierda.",
      },
      {
        segments: ruby("[左|ひだり]の[道|みち]を[行|い]きます。"),
        translation: "Voy por el camino de la izquierda.",
      },
      {
        segments: ruby("[左側|ひだりがわ]に[立|た]ってください。"),
        translation: "Párate al lado izquierdo.",
      },
      {
        segments: ruby("[左足|ひだりあし]が[痛|いた]いです。"),
        translation: "Me duele la pierna izquierda.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "三",
    level: 1,
    strokeCount: 3,
    on: ["サン"],
    kun: ["み", "みっ(つ)"],
    meaning: "Tres",
    examples: [
      {
        segments: ruby("[三人|さんにん]で[行|い]きます。"),
        translation: "Vamos tres personas.",
      },
      {
        segments: ruby("[三|みっ]つください。"),
        translation: "Deme tres.",
      },
      {
        segments: ruby("[三時|さんじ]に[帰|かえ]ります。"),
        translation: "Vuelvo a las tres.",
      },
      {
        segments: ruby("[三月|さんがつ]は[春|はる]です。"),
        translation: "Marzo es primavera.",
      },
      {
        segments: ruby("[三|さん][回|かい][読|よ]みました。"),
        translation: "Lo leí tres veces.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "山",
    level: 1,
    strokeCount: 3,
    on: ["サン"],
    kun: ["やま"],
    meaning: "Montaña",
    examples: [
      {
        segments: ruby("[山|やま]に[登|のぼ]ります。"),
        translation: "Subo la montaña.",
      },
      {
        segments: ruby("[高|たか]い[山|やま]です。"),
        translation: "Es una montaña alta.",
      },
      {
        segments: ruby("[山道|やまみち]を[歩|ある]きます。"),
        translation: "Camino por el sendero de la montaña.",
      },
      {
        segments: ruby("[山|やま]の[上|うえ]に[雪|ゆき]があります。"),
        translation: "Hay nieve en la cima de la montaña.",
      },
      {
        segments: ruby("[山|やま]から[町|まち]が[見|み]えます。"),
        translation: "Desde la montaña se ve el pueblo.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "子",
    level: 1,
    strokeCount: 3,
    on: ["シ", "ス"],
    kun: ["こ"],
    meaning: "Niño / Hijo",
    examples: [
      {
        segments: ruby("[子供|こども]が[遊|あそ]んでいます。"),
        translation: "Los niños están jugando.",
      },
      {
        segments: ruby("[女|おんな]の[子|こ]です。"),
        translation: "Es una niña.",
      },
      {
        segments: ruby("[男|おとこ]の[子|こ]が[走|はし]っています。"),
        translation: "Un niño está corriendo.",
      },
      {
        segments: ruby("[子|こ]ねこがかわいいです。"),
        translation: "El gatito es tierno.",
      },
      {
        segments: ruby("[子|こ]どもの[本|ほん]を[読|よ]みます。"),
        translation: "Leo un libro para niños.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "四",
    level: 1,
    strokeCount: 5,
    on: ["シ"],
    kun: ["よ", "よん", "よっ(つ)"],
    meaning: "Cuatro",
    examples: [
      {
        segments: ruby("[四月|しがつ]は[春|はる]です。"),
        translation: "Abril es primavera.",
      },
      {
        segments: ruby("[四|よ]つあります。"),
        translation: "Hay cuatro.",
      },
      {
        segments: ruby("[四人|よにん]で[食|た]べます。"),
        translation: "Comemos entre cuatro personas.",
      },
      {
        segments: ruby("[四時|よじ]に[起|お]きました。"),
        translation: "Me levanté a las cuatro.",
      },
      {
        segments: ruby("[四|よん][回|かい]れんしゅうします。"),
        translation: "Practico cuatro veces.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "糸",
    level: 1,
    strokeCount: 6,
    on: ["シ"],
    kun: ["いと"],
    meaning: "Hilo",
    examples: [
      {
        segments: ruby("[糸|いと]を[結|むす]びます。"),
        translation: "Ataré el hilo.",
      },
      {
        segments: ruby("[白|しろ]い[糸|いと]です。"),
        translation: "Es un hilo blanco.",
      },
      {
        segments: ruby("[赤|あか]い[糸|いと]を[使|つか]います。"),
        translation: "Uso hilo rojo.",
      },
      {
        segments: ruby("[糸|いと]が[長|なが]いです。"),
        translation: "El hilo es largo.",
      },
      {
        segments: ruby("[糸|いと]で[花|はな]をつくります。"),
        translation: "Hago una flor con hilo.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "字",
    level: 1,
    strokeCount: 6,
    on: ["ジ"],
    kun: ["あざ"],
    meaning: "Letra / Carácter",
    examples: [
      {
        segments: ruby("[漢字|かんじ]を[書|か]きます。"),
        translation: "Escribo kanji.",
      },
      {
        segments: ruby("[小|ちい]さい[字|じ]で[書|か]いてください。"),
        translation: "Escribe con letra pequeña.",
      },
      {
        segments: ruby("[字|じ]がきれいですね。"),
        translation: "Tu letra es bonita.",
      },
      {
        segments: ruby("[名前|なまえ]の[字|じ]を[教|おし]えてください。"),
        translation: "Enséñame cómo se escribe tu nombre.",
      },
      {
        segments: ruby("[字|あざ]が[見|み]えません。"),
        translation: "No puedo ver las letras.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "耳",
    level: 1,
    strokeCount: 6,
    on: ["ジ"],
    kun: ["みみ"],
    meaning: "Oído / Oreja",
    examples: [
      {
        segments: ruby("[耳|みみ]が[痛|いた]いです。"),
        translation: "Me duele el oído.",
      },
      {
        segments: ruby("[耳|みみ]を[大切|たいせつ]にしてください。"),
        translation: "Cuida tus oídos.",
      },
      {
        segments: ruby("[犬|いぬ]の[耳|みみ]は[大|おお]きいです。"),
        translation: "Las orejas del perro son grandes.",
      },
      {
        segments: ruby("[耳|みみ]でよく[聞|き]きます。"),
        translation: "Escucho bien con los oídos.",
      },
      {
        segments: ruby("[耳|みみ]の[音|おと]がします。"),
        translation: "Tengo un sonido en el oído.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "七",
    level: 1,
    strokeCount: 2,
    on: ["シチ"],
    kun: ["なな", "なの"],
    meaning: "Siete",
    examples: [
      {
        segments: ruby("[七時|しちじ]に[起|お]きます。"),
        translation: "Me levanto a las siete.",
      },
      {
        segments: ruby("[七|なな]つください。"),
        translation: "Deme siete.",
      },
      {
        segments: ruby("[七人|しちにん]で[行|い]きます。"),
        translation: "Vamos siete personas.",
      },
      {
        segments: ruby("[七月|しちがつ]は[暑|あつ]いです。"),
        translation: "Julio es caluroso.",
      },
      {
        segments: ruby("[七|なな][回|かい][読|よ]みました。"),
        translation: "Lo leí siete veces.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "車",
    level: 1,
    strokeCount: 7,
    on: ["シャ"],
    kun: ["くるま"],
    meaning: "Coche / Vehículo",
    examples: [
      {
        segments: ruby("[車|くるま]で[行|い]きます。"),
        translation: "Voy en auto.",
      },
      {
        segments: ruby("[赤|あか]い[車|くるま]です。"),
        translation: "Es un auto rojo.",
      },
      {
        segments: ruby("[車|くるま]を[止|と]めます。"),
        translation: "Estaciono el auto.",
      },
      {
        segments: ruby("[電車|でんしゃ]で[学校|がっこう]へ[行|い]きます。"),
        translation: "Voy a la escuela en tren.",
      },
      {
        segments: ruby("[車|くるま]の[中|なか]は[暑|あつ]いです。"),
        translation: "Dentro del auto hace calor.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "手",
    level: 1,
    strokeCount: 4,
    on: ["シュ"],
    kun: ["て", "た"],
    meaning: "Mano",
    examples: [
      {
        segments: ruby("[手|て]を[洗|あら]います。"),
        translation: "Me lavo las manos.",
      },
      {
        segments: ruby("[上手|じょうず]ですね。"),
        translation: "Lo haces muy bien.",
      },
      {
        segments: ruby("[手紙|てがみ]を[書|か]きます。"),
        translation: "Escribo una carta.",
      },
      {
        segments: ruby("[右手|みぎて]を[上|あ]げてください。"),
        translation: "Levanta la mano derecha.",
      },
      {
        segments: ruby("[手|て]が[冷|つめ]たいです。"),
        translation: "Tengo las manos frías.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "十",
    level: 1,
    strokeCount: 2,
    on: ["ジュウ", "ジッ"],
    kun: ["とお", "と"],
    meaning: "Diez",
    examples: [
      {
        segments: ruby("[十時|じゅうじ]です。"),
        translation: "Son las diez.",
      },
      {
        segments: ruby("[十|とお]あります。"),
        translation: "Hay diez.",
      },
      {
        segments: ruby("[十人|じゅうにん]の[学生|がくせい]です。"),
        translation: "Son diez estudiantes.",
      },
      {
        segments: ruby("[十月|じゅうがつ]は[涼|すず]しいです。"),
        translation: "Octubre es fresco.",
      },
      {
        segments: ruby("[十|じゅっ][回|かい][書|か]いてください。"),
        translation: "Escríbelo diez veces.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "出",
    level: 1,
    strokeCount: 5,
    on: ["シュツ", "スイ"],
    kun: ["で.る", "だ.す"],
    meaning: "Salir",
    examples: [
      {
        segments: ruby("[外|そと]に[出|で]ます。"),
        translation: "Salgo afuera.",
      },
      {
        segments: ruby("[早|はや]く[出|で]かけます。"),
        translation: "Salgo temprano.",
      },
      {
        segments: ruby("[本|ほん]を[出|だ]してください。"),
        translation: "Saca el libro.",
      },
      {
        segments: ruby("[駅|えき]に[出|で]ます。"),
        translation: "Salgo hacia la estación.",
      },
      {
        segments: ruby("[日|ひ]が[出|で]ました。"),
        translation: "Salió el sol.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "女",
    level: 1,
    strokeCount: 3,
    on: ["ジョ", "ニョ"],
    kun: ["おんな", "め"],
    meaning: "Mujer",
    examples: [
      {
        segments: ruby("[女|おんな]の[人|ひと]が[来|き]ました。"),
        translation: "Vino una mujer.",
      },
      {
        segments: ruby("[女|おんな]の[子|こ]が[歌|うた]っています。"),
        translation: "Una niña está cantando.",
      },
      {
        segments: ruby("[女王|じょおう]の[話|はなし]です。"),
        translation: "Es una historia de una reina.",
      },
      {
        segments: ruby("[女|おんな]の[先生|せんせい]です。"),
        translation: "Es una profesora.",
      },
      {
        segments: ruby("[女|おんな]の[友達|ともだち]と[会|あ]います。"),
        translation: "Me reúno con una amiga.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "小",
    level: 1,
    strokeCount: 3,
    on: ["ショウ"],
    kun: ["ちい.さい", "こ", "お"],
    meaning: "Pequeño",
    examples: [
      {
        segments: ruby("[小|ちい]さい[猫|ねこ]です。"),
        translation: "Es un gato pequeño.",
      },
      {
        segments: ruby("[小学校|しょうがっこう]へ[行|い]きます。"),
        translation: "Voy a la escuela primaria.",
      },
      {
        segments: ruby("[小|ちい]さな[声|こえ]で[話|はな]します。"),
        translation: "Hablo en voz baja.",
      },
      {
        segments: ruby("[小|ちい]さい[花|はな]が[咲|さ]いています。"),
        translation: "Ha florecido una flor pequeña.",
      },
      {
        segments: ruby("[小|ちい]さい[山|やま]です。"),
        translation: "Es una montaña pequeña.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "上",
    level: 1,
    strokeCount: 3,
    on: ["ジョウ", "ショウ"],
    kun: ["うえ", "のぼ.る"],
    meaning: "Arriba / Subir",
    examples: [
      {
        segments: ruby("[机|つくえ]の[上|うえ]に[本|ほん]があります。"),
        translation: "Hay un libro sobre la mesa.",
      },
      {
        segments: ruby("[上|うえ]を[見|み]てください。"),
        translation: "Mira hacia arriba.",
      },
      {
        segments: ruby("[山|やま]に[上|のぼ]ります。"),
        translation: "Subo la montaña.",
      },
      {
        segments: ruby("[手|て]を[上|あ]げてください。"),
        translation: "Levanta la mano.",
      },
      {
        segments: ruby("[川|かわ]の[上|かみ]です。"),
        translation: "Está río arriba.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "森",
    level: 1,
    strokeCount: 12,
    on: ["シン"],
    kun: ["もり"],
    meaning: "Bosque",
    examples: [
      {
        segments: ruby("[森|もり]の[中|なか]を[歩|ある]きます。"),
        translation: "Camino por el bosque.",
      },
      {
        segments: ruby("[深|ふか]い[森|もり]です。"),
        translation: "Es un bosque profundo.",
      },
      {
        segments: ruby("[森|もり]で[鳥|とり]の[音|おと]を[聞|き]きます。"),
        translation: "Escucho pájaros en el bosque.",
      },
      {
        segments: ruby("[森|もり]に[木|き]がたくさんあります。"),
        translation: "Hay muchos árboles en el bosque.",
      },
      {
        segments: ruby("[朝|あさ]の[森|もり]はしずかです。"),
        translation: "El bosque por la mañana es tranquilo.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "人",
    level: 1,
    strokeCount: 2,
    on: ["ジン", "ニン"],
    kun: ["ひと"],
    meaning: "Persona",
    examples: [
      {
        segments: ruby("[日本人|にほんじん]です。"),
        translation: "Soy japonés.",
      },
      {
        segments: ruby("[人|ひと]がたくさんいます。"),
        translation: "Hay mucha gente.",
      },
      {
        segments: ruby("[人|ひと]を[待|ま]っています。"),
        translation: "Estoy esperando a una persona.",
      },
      {
        segments: ruby("[三人|さんにん]で[食|た]べます。"),
        translation: "Comemos entre tres personas.",
      },
      {
        segments: ruby("[人|ひと]の[名前|なまえ]を[覚|おぼ]えます。"),
        translation: "Memorizo el nombre de una persona.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "水",
    level: 1,
    strokeCount: 4,
    on: ["スイ"],
    kun: ["みず"],
    meaning: "Agua",
    examples: [
      {
        segments: ruby("[水|みず]を[飲|の]みます。"),
        translation: "Bebo agua.",
      },
      {
        segments: ruby("[冷|つめ]たい[水|みず]です。"),
        translation: "Es agua fría.",
      },
      {
        segments: ruby("[水曜日|すいようび]に[会|あ]います。"),
        translation: "Nos vemos el miércoles.",
      },
      {
        segments: ruby("[水|みず]を[入|い]れてください。"),
        translation: "Por favor, pon agua.",
      },
      {
        segments: ruby("[川|かわ]の[水|みず]がきれいです。"),
        translation: "El agua del río está limpia.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "正",
    level: 1,
    strokeCount: 5,
    on: ["セイ", "ショウ"],
    kun: ["ただ.しい", "まさ"],
    meaning: "Correcto / Justo",
    examples: [
      {
        segments: ruby("[正|ただ]しい[答|こた]えです。"),
        translation: "Es la respuesta correcta.",
      },
      {
        segments: ruby("[正午|しょうご]に[昼|ひる]ごはんを[食|た]べます。"),
        translation: "Almuerzo al mediodía.",
      },
      {
        segments: ruby("[正門|せいもん]の[前|まえ]で[待|ま]ちます。"),
        translation: "Espero frente a la puerta principal.",
      },
      {
        segments: ruby("[字|じ]を[正|ただ]しく[書|か]いてください。"),
        translation: "Escribe el carácter correctamente.",
      },
      {
        segments: ruby("[正直|しょうじき]な[人|ひと]です。"),
        translation: "Es una persona honesta.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "生",
    level: 1,
    strokeCount: 5,
    on: ["セイ", "ショウ"],
    kun: ["い.きる", "なま", "は.える"],
    meaning: "Vivir / Nacer",
    examples: [
      {
        segments: ruby("[先生|せんせい]に[会|あ]います。"),
        translation: "Me reúno con el profesor.",
      },
      {
        segments: ruby("[生|い]きています。"),
        translation: "Está vivo.",
      },
      {
        segments: ruby("[生|なま]の[魚|さかな]です。"),
        translation: "Es pescado crudo.",
      },
      {
        segments: ruby("[学生|がくせい]です。"),
        translation: "Soy estudiante.",
      },
      {
        segments: ruby("[花|はな]が[生|は]えています。"),
        translation: "Las flores están creciendo.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "青",
    level: 1,
    strokeCount: 8,
    on: ["セイ", "ショウ"],
    kun: ["あお"],
    meaning: "Azul / Verde",
    examples: [
      {
        segments: ruby("[青|あお]い[空|そら]です。"),
        translation: "Es un cielo azul.",
      },
      {
        segments: ruby("[青|あお]い[車|くるま]があります。"),
        translation: "Hay un auto azul.",
      },
      {
        segments: ruby("[青山|あおやま]へ[行|い]きます。"),
        translation: "Voy a Aoyama.",
      },
      {
        segments: ruby("[青|あお]い[海|うみ]がきれいです。"),
        translation: "El mar azul es hermoso.",
      },
      {
        segments: ruby("[信号|しんごう]が[青|あお]です。"),
        translation: "El semáforo está en verde.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "夕",
    level: 1,
    strokeCount: 3,
    on: ["セキ"],
    kun: ["ゆう"],
    meaning: "Tarde / Noche",
    examples: [
      {
        segments: ruby("[夕日|ゆうひ]がきれいです。"),
        translation: "El atardecer es hermoso.",
      },
      {
        segments: ruby("[夕方|ゆうがた]に[帰|かえ]ります。"),
        translation: "Vuelvo por la tarde.",
      },
      {
        segments: ruby("[夕食|ゆうしょく]を[食|た]べます。"),
        translation: "Ceno.",
      },
      {
        segments: ruby("[夕|ゆう]べ[友達|ともだち]と[話|はな]しました。"),
        translation: "Anoche hablé con un amigo.",
      },
      {
        segments: ruby("[夕方|ゆうがた]の[空|そら]を[見|み]ます。"),
        translation: "Miro el cielo al atardecer.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "石",
    level: 1,
    strokeCount: 5,
    on: ["セキ", "シャク", "コク"],
    kun: ["いし"],
    meaning: "Piedra",
    examples: [
      {
        segments: ruby("[石|いし]を[拾|ひろ]いました。"),
        translation: "Recogí una piedra.",
      },
      {
        segments: ruby("[白|しろ]い[石|いし]です。"),
        translation: "Es una piedra blanca.",
      },
      {
        segments: ruby("[石|いし]の[上|うえ]に[座|すわ]ります。"),
        translation: "Me siento sobre la piedra.",
      },
      {
        segments: ruby("[大|おお]きい[石|いし]があります。"),
        translation: "Hay una piedra grande.",
      },
      {
        segments: ruby("[石|いし]で[道|みち]をつくります。"),
        translation: "Hacen un camino con piedras.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "赤",
    level: 1,
    strokeCount: 7,
    on: ["セキ", "シャク"],
    kun: ["あか"],
    meaning: "Rojo",
    examples: [
      {
        segments: ruby("[赤|あか]いりんごです。"),
        translation: "Es una manzana roja.",
      },
      {
        segments: ruby("[赤|あか]い[花|はな]が[好|す]きです。"),
        translation: "Me gustan las flores rojas.",
      },
      {
        segments: ruby("[信号|しんごう]が[赤|あか]です。"),
        translation: "El semáforo está en rojo.",
      },
      {
        segments: ruby("[顔|かお]が[赤|あか]いです。"),
        translation: "Tiene la cara roja.",
      },
      {
        segments: ruby("[赤|あか]い[本|ほん]を[買|か]いました。"),
        translation: "Compré un libro rojo.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "千",
    level: 1,
    strokeCount: 3,
    on: ["セン"],
    kun: ["ち"],
    meaning: "Mil",
    examples: [
      {
        segments: ruby("[千円|せんえん]あります。"),
        translation: "Tengo mil yenes.",
      },
      {
        segments: ruby("[千|せん][回|かい]はむりです。"),
        translation: "Mil veces es imposible.",
      },
      {
        segments: ruby("[千羽鶴|せんばづる]をつくります。"),
        translation: "Hago mil grullas.",
      },
      {
        segments: ruby("[千|ち][年|とし]の[木|き]です。"),
        translation: "Es un árbol de mil años.",
      },
      {
        segments: ruby("[千|せん][人|にん]くらい[来|き]ます。"),
        translation: "Vendrán unas mil personas.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "川",
    level: 1,
    strokeCount: 3,
    on: ["セン"],
    kun: ["かわ"],
    meaning: "Río",
    examples: [
      {
        segments: ruby("[川|かわ]で[泳|およ]ぎます。"),
        translation: "Nado en el río.",
      },
      {
        segments: ruby("[川|かわ]の[水|みず]がつめたいです。"),
        translation: "El agua del río está fría.",
      },
      {
        segments: ruby("[川|かわ]の[近|ちか]くに[住|す]んでいます。"),
        translation: "Vivo cerca del río.",
      },
      {
        segments: ruby("[大|おお]きい[川|かわ]です。"),
        translation: "Es un río grande.",
      },
      {
        segments: ruby("[川|かわ]に[魚|さかな]がいます。"),
        translation: "Hay peces en el río.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "先",
    level: 1,
    strokeCount: 6,
    on: ["セン"],
    kun: ["さき"],
    meaning: "Adelante / Antes",
    examples: [
      {
        segments: ruby("[先生|せんせい]に[聞|き]きます。"),
        translation: "Le pregunto al profesor.",
      },
      {
        segments: ruby("[先|さき]に[行|い]ってください。"),
        translation: "Por favor, vaya primero.",
      },
      {
        segments: ruby("[この先|このさき]は[右|みぎ]です。"),
        translation: "Más adelante es a la derecha.",
      },
      {
        segments: ruby("[先週|せんしゅう]は[忙|いそが]しかったです。"),
        translation: "La semana pasada estuve ocupado.",
      },
      {
        segments: ruby("[先|さき]に[食|た]べます。"),
        translation: "Como primero.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "早",
    level: 1,
    strokeCount: 6,
    on: ["ソウ", "サッ"],
    kun: ["はや.い"],
    meaning: "Temprano / Rápido",
    examples: [
      {
        segments: ruby("[早|はや]く[起|お]きます。"),
        translation: "Me levanto temprano.",
      },
      {
        segments: ruby("[早|はや]いですね。"),
        translation: "Es temprano, ¿no?",
      },
      {
        segments: ruby("[早口|はやくち]で[話|はな]さないでください。"),
        translation: "No hables tan rápido.",
      },
      {
        segments: ruby("[学校|がっこう]へ[早|はや]く[行|い]きます。"),
        translation: "Voy temprano a la escuela.",
      },
      {
        segments: ruby("[電車|でんしゃ]が[早|はや]いです。"),
        translation: "El tren es rápido.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "草",
    level: 1,
    strokeCount: 9,
    on: ["ソウ"],
    kun: ["くさ"],
    meaning: "Hierba",
    examples: [
      {
        segments: ruby("[草|くさ]が[生|は]えています。"),
        translation: "La hierba está creciendo.",
      },
      {
        segments: ruby("[草|くさ]を[切|き]ります。"),
        translation: "Corto la hierba.",
      },
      {
        segments: ruby("[草原|そうげん]を[歩|ある]きます。"),
        translation: "Camino por la pradera.",
      },
      {
        segments: ruby("[草|くさ]の[上|うえ]に[座|すわ]ります。"),
        translation: "Me siento sobre el pasto.",
      },
      {
        segments: ruby("[小|ちい]さい[草|くさ]です。"),
        translation: "Es una hierba pequeña.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "足",
    level: 1,
    strokeCount: 7,
    on: ["ソク"],
    kun: ["あし", "た.りる"],
    meaning: "Pie / Pierna / Suficiente",
    examples: [
      {
        segments: ruby("[足|あし]が[速|はや]いです。"),
        translation: "Corre rápido.",
      },
      {
        segments: ruby("[足|あし]が[痛|いた]いです。"),
        translation: "Me duele el pie.",
      },
      {
        segments: ruby("[足|あし]りないです。"),
        translation: "No es suficiente.",
      },
      {
        segments: ruby("[手|て]と[足|あし]を[洗|あら]います。"),
        translation: "Me lavo las manos y los pies.",
      },
      {
        segments: ruby("[山|やま]の[下|した]まで[足|あし]で[行|い]きます。"),
        translation: "Voy a pie hasta abajo de la montaña.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "村",
    level: 1,
    strokeCount: 7,
    on: ["ソン"],
    kun: ["むら"],
    meaning: "Aldea / Pueblo",
    examples: [
      {
        segments: ruby("[田舎|いなか]の[村|むら]です。"),
        translation: "Es una aldea del campo.",
      },
      {
        segments: ruby("[村|むら]に[友達|ともだち]がいます。"),
        translation: "Tengo un amigo en el pueblo.",
      },
      {
        segments: ruby("[小|ちい]さい[村|むら]です。"),
        translation: "Es una aldea pequeña.",
      },
      {
        segments: ruby("[村|むら]の[人|ひと]はしんせつです。"),
        translation: "La gente del pueblo es amable.",
      },
      {
        segments: ruby("[山|やま]の[近|ちか]くの[村|むら]です。"),
        translation: "Es un pueblo cerca de la montaña.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "大",
    level: 1,
    strokeCount: 3,
    on: ["ダイ", "タイ"],
    kun: ["おお.きい", "おお"],
    meaning: "Grande",
    examples: [
      {
        segments: ruby("[大|おお]きい[犬|いぬ]です。"),
        translation: "Es un perro grande.",
      },
      {
        segments: ruby("[大|おお]きな[山|やま]が[見|み]えます。"),
        translation: "Se ve una montaña grande.",
      },
      {
        segments: ruby("[大学|だいがく]へ[行|い]きたいです。"),
        translation: "Quiero ir a la universidad.",
      },
      {
        segments: ruby("[大切|たいせつ]な[本|ほん]です。"),
        translation: "Es un libro importante.",
      },
      {
        segments: ruby("[大雨|おおあめ]が[降|ふ]っています。"),
        translation: "Está cayendo una lluvia fuerte.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "男",
    level: 1,
    strokeCount: 7,
    on: ["ダン", "ナン"],
    kun: ["おとこ"],
    meaning: "Hombre",
    examples: [
      {
        segments: ruby("[男|おとこ]の[人|ひと]が[来|き]ました。"),
        translation: "Vino un hombre.",
      },
      {
        segments: ruby("[男|おとこ]の[子|こ]が[走|はし]っています。"),
        translation: "Un niño está corriendo.",
      },
      {
        segments: ruby("[男|おとこ]の[先生|せんせい]です。"),
        translation: "Es un profesor.",
      },
      {
        segments: ruby("[長男|ちょうなん]です。"),
        translation: "Es el hijo mayor.",
      },
      {
        segments: ruby("[男|おとこ]の[友達|ともだち]と[会|あ]います。"),
        translation: "Me reúno con un amigo.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "竹",
    level: 1,
    strokeCount: 6,
    on: ["チク"],
    kun: ["たけ"],
    meaning: "Bambú",
    examples: [
      {
        segments: ruby("[竹|たけ]の[棒|ぼう]です。"),
        translation: "Es un palo de bambú.",
      },
      {
        segments: ruby("[竹林|ちくりん]を[歩|ある]きます。"),
        translation: "Camino por un bosque de bambú.",
      },
      {
        segments: ruby("[竹|たけ]が[高|たか]いです。"),
        translation: "El bambú es alto.",
      },
      {
        segments: ruby("[竹|たけ]でかごをつくります。"),
        translation: "Hago una cesta de bambú.",
      },
      {
        segments: ruby("[青|あお]い[竹|たけ]です。"),
        translation: "Es un bambú verde.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "中",
    level: 1,
    strokeCount: 4,
    on: ["チュウ"],
    kun: ["なか"],
    meaning: "Dentro / Centro",
    examples: [
      {
        segments: ruby("[箱|はこ]の[中|なか]に[入|い]れます。"),
        translation: "Lo meto dentro de la caja.",
      },
      {
        segments: ruby("[中|なか]を[見|み]てください。"),
        translation: "Mira adentro.",
      },
      {
        segments: ruby("[学校|がっこう]の[中|なか]にいます。"),
        translation: "Estoy dentro de la escuela.",
      },
      {
        segments: ruby("[夜中|よなか]に[起|お]きました。"),
        translation: "Me desperté a medianoche.",
      },
      {
        segments: ruby("[水|みず]の[中|なか]に[魚|さかな]がいます。"),
        translation: "Hay peces dentro del agua.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "虫",
    level: 1,
    strokeCount: 6,
    on: ["チュウ"],
    kun: ["むし"],
    meaning: "Insecto",
    examples: [
      {
        segments: ruby("[虫|むし]が[飛|と]んでいます。"),
        translation: "Un insecto está volando.",
      },
      {
        segments: ruby("[小|ちい]さい[虫|むし]です。"),
        translation: "Es un insecto pequeño.",
      },
      {
        segments: ruby("[虫|むし]を[見|み]つけました。"),
        translation: "Encontré un insecto.",
      },
      {
        segments: ruby("[夏|なつ]は[虫|むし]が[多|おお]いです。"),
        translation: "En verano hay muchos insectos.",
      },
      {
        segments: ruby("[虫|むし]が[木|き]にいます。"),
        translation: "Hay un insecto en el árbol.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "町",
    level: 1,
    strokeCount: 7,
    on: ["チョウ"],
    kun: ["まち"],
    meaning: "Ciudad / Barrio",
    examples: [
      {
        segments: ruby("[町|まち]を[歩|ある]きます。"),
        translation: "Camino por la ciudad.",
      },
      {
        segments: ruby("[小|ちい]さい[町|まち]です。"),
        translation: "Es una ciudad pequeña.",
      },
      {
        segments: ruby("[この町|このまち]が[好|す]きです。"),
        translation: "Me gusta esta ciudad.",
      },
      {
        segments: ruby("[町|まち]の[中|なか]はにぎやかです。"),
        translation: "El centro de la ciudad es animado.",
      },
      {
        segments: ruby("[町|まち]で[買|か]い[物|もの]をします。"),
        translation: "Hago compras en la ciudad.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "天",
    level: 1,
    strokeCount: 4,
    on: ["テン"],
    kun: ["あめ", "あま"],
    meaning: "Cielo / Dios",
    examples: [
      {
        segments: ruby("[天気|てんき]がいいです。"),
        translation: "Hace buen tiempo.",
      },
      {
        segments: ruby("[天|てん]まで[高|たか]い[山|やま]です。"),
        translation: "Es una montaña altísima.",
      },
      {
        segments: ruby("[天井|てんじょう]を[見|み]ます。"),
        translation: "Miro el techo.",
      },
      {
        segments: ruby("[天文台|てんもんだい]へ[行|い]きます。"),
        translation: "Voy al observatorio astronómico.",
      },
      {
        segments: ruby("[天気予報|てんきよほう]を[見|み]ました。"),
        translation: "Vi el pronóstico del tiempo.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "田",
    level: 1,
    strokeCount: 5,
    on: ["デン"],
    kun: ["た"],
    meaning: "Arrozal / Campo",
    examples: [
      {
        segments: ruby("[田|た]んぼで[米|こめ]をつくります。"),
        translation: "Se cultiva arroz en el arrozal.",
      },
      {
        segments: ruby("[田|た]の[中|なか]に[水|みず]があります。"),
        translation: "Hay agua en el arrozal.",
      },
      {
        segments: ruby("[山田|やまだ]さんです。"),
        translation: "Es el señor Yamada.",
      },
      {
        segments: ruby("[田|た]を[見|み]ながら[歩|ある]きます。"),
        translation: "Camino mirando los campos de arroz.",
      },
      {
        segments: ruby("[広|ひろ]い[田|た]です。"),
        translation: "Es un campo amplio.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "土",
    level: 1,
    strokeCount: 3,
    on: ["ド", "ト"],
    kun: ["つち"],
    meaning: "Tierra / Suelo",
    examples: [
      {
        segments: ruby("[土|つち]を[掘|ほ]ります。"),
        translation: "Cavo la tierra.",
      },
      {
        segments: ruby("[土曜日|どようび]に[休|やす]みます。"),
        translation: "Descanso el sábado.",
      },
      {
        segments: ruby("[土|つち]がやわらかいです。"),
        translation: "La tierra está blanda.",
      },
      {
        segments: ruby("[土|つち]の[上|うえ]に[花|はな]があります。"),
        translation: "Hay flores sobre la tierra.",
      },
      {
        segments: ruby("[土|ど]の[音|おと]がします。"),
        translation: "Se oye un golpe seco.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "二",
    level: 1,
    strokeCount: 2,
    on: ["ニ"],
    kun: ["ふた", "ふた(つ)"],
    meaning: "Dos",
    examples: [
      {
        segments: ruby("[二人|ふたり]で[行|い]きます。"),
        translation: "Vamos dos personas.",
      },
      {
        segments: ruby("[二|ふた]つください。"),
        translation: "Deme dos.",
      },
      {
        segments: ruby("[二時|にじ]に[会|あ]いましょう。"),
        translation: "Nos vemos a las dos.",
      },
      {
        segments: ruby("[二月|にがつ]は[寒|さむ]いです。"),
        translation: "Febrero es frío.",
      },
      {
        segments: ruby("[二|に][回|かい][読|よ]みました。"),
        translation: "Lo leí dos veces.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "日",
    level: 1,
    strokeCount: 4,
    on: ["ニチ", "ジツ"],
    kun: ["ひ", "か"],
    meaning: "Sol / Día",
    examples: [
      {
        segments: ruby("[今日|きょう]は[晴|は]れの[日|ひ]です。"),
        translation: "Hoy es un día soleado.",
      },
      {
        segments: ruby("[日曜日|にちようび]は[休|やす]みです。"),
        translation: "El domingo es día libre.",
      },
      {
        segments: ruby("[毎日|まいにち][日本語|にほんご]を[勉強|べんきょう]します。"),
        translation: "Estudio japonés todos los días.",
      },
      {
        segments: ruby("[日|ひ]が[長|なが]くなりました。"),
        translation: "Los días se hicieron más largos.",
      },
      {
        segments: ruby("[日|ひ]の[出|で]を[見|み]ました。"),
        translation: "Vi el amanecer.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "入",
    level: 1,
    strokeCount: 2,
    on: ["ニュウ"],
    kun: ["い.る", "い.れる", "は.いる"],
    meaning: "Entrar",
    examples: [
      {
        segments: ruby("[部屋|へや]に[入|はい]ります。"),
        translation: "Entro a la habitación.",
      },
      {
        segments: ruby("[水|みず]を[入|い]れてください。"),
        translation: "Por favor, pon agua.",
      },
      {
        segments: ruby("[本|ほん]をかばんに[入|い]れます。"),
        translation: "Meto el libro en la mochila.",
      },
      {
        segments: ruby("[入学式|にゅうがくしき]に[行|い]きます。"),
        translation: "Voy a la ceremonia de ingreso.",
      },
      {
        segments: ruby("[右|みぎ]から[入|はい]ってください。"),
        translation: "Entre por la derecha.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "年",
    level: 1,
    strokeCount: 6,
    on: ["ネン"],
    kun: ["とし"],
    meaning: "Año",
    examples: [
      {
        segments: ruby("[今年|ことし]はいい[年|とし]です。"),
        translation: "Este año es bueno.",
      },
      {
        segments: ruby("[年|とし]はいくつですか。"),
        translation: "¿Cuántos años tienes?",
      },
      {
        segments: ruby("[来年|らいねん]また[会|あ]いましょう。"),
        translation: "Nos vemos de nuevo el próximo año.",
      },
      {
        segments: ruby("[一年生|いちねんせい]です。"),
        translation: "Soy de primer año.",
      },
      {
        segments: ruby("[年上|としうえ]の[人|ひと]です。"),
        translation: "Es una persona mayor que yo.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "白",
    level: 1,
    strokeCount: 5,
    on: ["ハク", "ビャク"],
    kun: ["しろ", "しら"],
    meaning: "Blanco",
    examples: [
      {
        segments: ruby("[白|しろ]い[雲|くも]です。"),
        translation: "Es una nube blanca.",
      },
      {
        segments: ruby("[白|しろ]い[犬|いぬ]がいます。"),
        translation: "Hay un perro blanco.",
      },
      {
        segments: ruby("[白紙|はくし]に[字|じ]を[書|か]きます。"),
        translation: "Escribo letras en una hoja en blanco.",
      },
      {
        segments: ruby("[白|しろ]い[花|はな]が[好|す]きです。"),
        translation: "Me gustan las flores blancas.",
      },
      {
        segments: ruby("[白|しろ]い[月|つき]が[見|み]えます。"),
        translation: "Se ve una luna blanca.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "八",
    level: 1,
    strokeCount: 2,
    on: ["ハチ"],
    kun: ["や", "やっ(つ)"],
    meaning: "Ocho",
    examples: [
      {
        segments: ruby("[八時|はちじ]に[起|お]きます。"),
        translation: "Me levanto a las ocho.",
      },
      {
        segments: ruby("[八|やっ]つあります。"),
        translation: "Hay ocho.",
      },
      {
        segments: ruby("[八人|はちにん]で[食|た]べます。"),
        translation: "Comemos ocho personas.",
      },
      {
        segments: ruby("[八月|はちがつ]は[暑|あつ]いです。"),
        translation: "Agosto es caluroso.",
      },
      {
        segments: ruby("[八|はっ][回|かい][書|か]きました。"),
        translation: "Lo escribí ocho veces.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "百",
    level: 1,
    strokeCount: 6,
    on: ["ヒャク"],
    kun: [],
    meaning: "Cien",
    examples: [
      {
        segments: ruby("[百円|ひゃくえん]ください。"),
        translation: "Por favor, deme cien yenes.",
      },
      {
        segments: ruby("[百|ひゃく][人|にん]くらいいます。"),
        translation: "Hay unas cien personas.",
      },
      {
        segments: ruby("[百|ひゃく][回|かい]は[多|おお]いです。"),
        translation: "Cien veces es mucho.",
      },
      {
        segments: ruby("[百点|ひゃくてん]をとりました。"),
        translation: "Saqué cien puntos.",
      },
      {
        segments: ruby("[百|ひゃく][本|ほん]の[花|はな]です。"),
        translation: "Son cien flores.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "文",
    level: 1,
    strokeCount: 4,
    on: ["ブン", "モン"],
    kun: ["ふみ", "ふみ"],
    meaning: "Texto / Escritura",
    examples: [
      {
        segments: ruby("[文|ぶん]を[読|よ]みます。"),
        translation: "Leo un texto.",
      },
      {
        segments: ruby("[作文|さくぶん]を[書|か]きます。"),
        translation: "Escribo una redacción.",
      },
      {
        segments: ruby("[長|なが]い[文|ぶん]です。"),
        translation: "Es un texto largo.",
      },
      {
        segments: ruby("[文|ふみ]を[送|おく]ります。"),
        translation: "Envío una carta.",
      },
      {
        segments: ruby("[日本文|にほんぶん]を[勉強|べんきょう]します。"),
        translation: "Estudio textos japoneses.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "木",
    level: 1,
    strokeCount: 4,
    on: ["モク", "ボク"],
    kun: ["き", "こ"],
    meaning: "Árbol / Madera",
    examples: [
      {
        segments: ruby("[木|き]の[下|した]で[休|やす]みます。"),
        translation: "Descanso bajo el árbol.",
      },
      {
        segments: ruby("[大|おお]きい[木|き]です。"),
        translation: "Es un árbol grande.",
      },
      {
        segments: ruby("[木曜日|もくようび]に[会|あ]います。"),
        translation: "Nos vemos el jueves.",
      },
      {
        segments: ruby("[木|き]で[机|つくえ]をつくります。"),
        translation: "Hacen una mesa de madera.",
      },
      {
        segments: ruby("[森|もり]に[木|き]がたくさんあります。"),
        translation: "Hay muchos árboles en el bosque.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "本",
    level: 1,
    strokeCount: 5,
    on: ["ホン"],
    kun: ["もと"],
    meaning: "Libro / Origen",
    examples: [
      {
        segments: ruby("[本|ほん]を[読|よ]みます。"),
        translation: "Leo un libro.",
      },
      {
        segments: ruby("[日本|にほん]へ[行|い]きたいです。"),
        translation: "Quiero ir a Japón.",
      },
      {
        segments: ruby("[本当|ほんとう]ですか。"),
        translation: "¿Es verdad?",
      },
      {
        segments: ruby("[本|もと]の[場所|ばしょ]にもどします。"),
        translation: "Lo devuelvo a su lugar original.",
      },
      {
        segments: ruby("[赤|あか]い[本|ほん]を[買|か]いました。"),
        translation: "Compré un libro rojo.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "名",
    level: 1,
    strokeCount: 6,
    on: ["メイ", "ミョウ"],
    kun: ["な"],
    meaning: "Nombre",
    examples: [
      {
        segments: ruby("お[名前|なまえ]は[何|なん]ですか。"),
        translation: "¿Cómo te llamas?",
      },
      {
        segments: ruby("[有名|ゆうめい]な[人|ひと]です。"),
        translation: "Es una persona famosa.",
      },
      {
        segments: ruby("[名|な]まえを[書|か]いてください。"),
        translation: "Por favor, escribe tu nombre.",
      },
      {
        segments: ruby("[国名|こくめい]を[覚|おぼ]えます。"),
        translation: "Memorizo nombres de países.",
      },
      {
        segments: ruby("[名犬|めいけん]の[話|はなし]です。"),
        translation: "Es una historia de un perro famoso.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "目",
    level: 1,
    strokeCount: 5,
    on: ["モク", "ボク"],
    kun: ["め", "ま"],
    meaning: "Ojo",
    examples: [
      {
        segments: ruby("[目|め]が[悪|わる]いです。"),
        translation: "Tengo mala vista.",
      },
      {
        segments: ruby("[大|おお]きい[目|め]ですね。"),
        translation: "Tienes ojos grandes.",
      },
      {
        segments: ruby("[一|ひと]つ[目|め]です。"),
        translation: "Es el primero.",
      },
      {
        segments: ruby("[目|め]を[開|あ]けてください。"),
        translation: "Abre los ojos.",
      },
      {
        segments: ruby("[目|もく][的|てき]は[日本語|にほんご]です。"),
        translation: "El objetivo es el japonés.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "立",
    level: 1,
    strokeCount: 5,
    on: ["リツ", "リュウ"],
    kun: ["た.つ", "た.てる"],
    meaning: "Pararse / Erigir",
    examples: [
      {
        segments: ruby("[立|た]ってください。"),
        translation: "Por favor, póngase de pie.",
      },
      {
        segments: ruby("[駅|えき]の[前|まえ]に[立|た]ちます。"),
        translation: "Me paro frente a la estación.",
      },
      {
        segments: ruby("[立|りつ][派|ぱ]な[人|ひと]です。"),
        translation: "Es una persona admirable.",
      },
      {
        segments: ruby("[山|やま]の[上|うえ]に[木|き]が[立|た]っています。"),
        translation: "Hay un árbol erguido en la montaña.",
      },
      {
        segments: ruby("[国立|こくりつ]の[学校|がっこう]です。"),
        translation: "Es una escuela nacional.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "力",
    level: 1,
    strokeCount: 2,
    on: ["リョク", "リキ"],
    kun: ["ちから"],
    meaning: "Fuerza",
    examples: [
      {
        segments: ruby("[力|ちから]を[入|い]れてください。"),
        translation: "Pon fuerza.",
      },
      {
        segments: ruby("[大|おお]きな[力|ちから]です。"),
        translation: "Es una gran fuerza.",
      },
      {
        segments: ruby("[電気|でんき]の[力|ちから]です。"),
        translation: "Es energía eléctrica.",
      },
      {
        segments: ruby("[力|りょく]が[足|た]りません。"),
        translation: "No tengo suficiente fuerza.",
      },
      {
        segments: ruby("[協力|きょうりょく]ありがとうございます。"),
        translation: "Gracias por la colaboración.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "林",
    level: 1,
    strokeCount: 8,
    on: ["リン"],
    kun: ["はやし"],
    meaning: "Arboleda",
    examples: [
      {
        segments: ruby("[林|はやし]の[中|なか]を[歩|ある]きます。"),
        translation: "Camino por la arboleda.",
      },
      {
        segments: ruby("[小|ちい]さい[林|はやし]です。"),
        translation: "Es una arboleda pequeña.",
      },
      {
        segments: ruby("[林|はやし]に[鳥|とり]がいます。"),
        translation: "Hay pájaros en la arboleda.",
      },
      {
        segments: ruby("[竹林|ちくりん]へ[行|い]きます。"),
        translation: "Voy al bosque de bambú.",
      },
      {
        segments: ruby("[林|りん]の[道|みち]はしずかです。"),
        translation: "El camino del bosquecillo es tranquilo.",
      },
    ],
    hasSvg: true,
  },
  {
    char: "六",
    level: 1,
    strokeCount: 4,
    on: ["ロク"],
    kun: ["む", "むっ(つ)", "むい"],
    meaning: "Seis",
    examples: [
      {
        segments: ruby("[六時|ろくじ]に[来|き]てください。"),
        translation: "Por favor, venga a las seis.",
      },
      {
        segments: ruby("[六|むっ]つあります。"),
        translation: "Hay seis.",
      },
      {
        segments: ruby("[六人|ろくにん]で[行|い]きます。"),
        translation: "Vamos seis personas.",
      },
      {
        segments: ruby("[六月|ろくがつ]は[雨|あめ]が[多|おお]いです。"),
        translation: "En junio llueve mucho.",
      },
      {
        segments: ruby("[六|ろっ][回|かい][読|よ]みました。"),
        translation: "Lo leí seis veces.",
      },
    ],
    hasSvg: true,
  },
];

// ─── Level 2 Kanji — 160 chars, stroke counts only ───────────────────────────

export const LEVEL2_BLOCK_01_08 = [
  {
    char: "引",
    level: 2,
    strokeCount: 4,
    on: ["イン"],
    kun: ["ひ.く"],
    meaning: "Tirar / jalar",
    examples: [
      { segments: ruby("[線|せん]を[引|ひ]きます。"), translation: "Trazo una línea." },
      { segments: ruby("[手|て]を[引|ひ]いて[歩|ある]きます。"), translation: "Camino llevándolo de la mano." },
      { segments: ruby("ドアを[引|ひ]いてください。"), translation: "Por favor, tira de la puerta." },
      { segments: ruby("[弓|ゆみ]を[引|ひ]きます。"), translation: "Tenso el arco." },
      { segments: ruby("[白線|はくせん]のうえに[線|せん]を[引|ひ]きます。"), translation: "Trazo una línea sobre la línea blanca." },
    ],
    hasSvg: true,
  },
  {
    char: "羽",
    level: 2,
    strokeCount: 6,
    on: ["ウ"],
    kun: ["はね"],
    meaning: "Pluma / ala",
    examples: [
      { segments: ruby("[鳥|とり]の[羽|はね]がきれいです。"), translation: "Las plumas del ave son bonitas." },
      { segments: ruby("[白|しろ]い[羽|はね]があります。"), translation: "Hay una pluma blanca." },
      { segments: ruby("[羽|はね]をひろいました。"), translation: "Recogí una pluma." },
      { segments: ruby("[鳥|とり]が[羽|はね]をひろげます。"), translation: "El ave extiende las alas." },
      { segments: ruby("[小|ちい]さな[羽|はね]が[落|お]ちました。"), translation: "Cayó una plumita." },
    ],
    hasSvg: true,
  },
  {
    char: "雲",
    level: 2,
    strokeCount: 12,
    on: ["ウン"],
    kun: ["くも"],
    meaning: "Nube",
    examples: [
      { segments: ruby("[空|そら]に[雲|くも]があります。"), translation: "Hay nubes en el cielo." },
      { segments: ruby("[白|しろ]い[雲|くも]がういています。"), translation: "Nubes blancas flotan en el cielo." },
      { segments: ruby("[雲|くも]がすこしずつうごきます。"), translation: "Las nubes se mueven poco a poco." },
      { segments: ruby("[黒|くろ]い[雲|くも]がきました。"), translation: "Han llegado nubes negras." },
      { segments: ruby("[雲|くも]のない[空|そら]です。"), translation: "Es un cielo sin nubes." },
    ],
    hasSvg: true,
  },
  {
    char: "園",
    level: 2,
    strokeCount: 13,
    on: ["エン"],
    kun: ["その"],
    meaning: "Jardín / parque",
    examples: [
      { segments: ruby("[公園|こうえん]で[遊|あそ]びます。"), translation: "Juego en el parque." },
      { segments: ruby("[幼稚園|ようちえん]へ[行|い]きます。"), translation: "Voy al jardín infantil." },
      { segments: ruby("[動物園|どうぶつえん]でパンダを[見|み]ます。"), translation: "Veo pandas en el zoológico." },
      { segments: ruby("[公園|こうえん]に[木|き]がたくさんあります。"), translation: "Hay muchos árboles en el parque." },
      { segments: ruby("[花園|はなぞの]がとてもきれいです。"), translation: "El jardín de flores es muy bonito." },
    ],
    hasSvg: true,
  },
  {
    char: "遠",
    level: 2,
    strokeCount: 13,
    on: ["エン"],
    kun: ["とお.い"],
    meaning: "Lejano / distante",
    examples: [
      { segments: ruby("[学校|がっこう]は[遠|とお]いです。"), translation: "La escuela está lejos." },
      { segments: ruby("[遠|とお]い[山|やま]が[見|み]えます。"), translation: "Se ven montañas lejanas." },
      { segments: ruby("ここから[駅|えき]は[遠|とお]いです。"), translation: "Desde aquí la estación queda lejos." },
      { segments: ruby("[遠|とお]くの[空|そら]を[見|み]ます。"), translation: "Miro el cielo a lo lejos." },
      { segments: ruby("[遠足|えんそく]へ[行|い]きます。"), translation: "Voy de excursión." },
    ],
    hasSvg: true,
  },
  {
    char: "何",
    level: 2,
    strokeCount: 7,
    on: ["カ"],
    kun: ["なに", "なん"],
    meaning: "Qué",
    examples: [
      { segments: ruby("[何|なに]を[食|た]べますか。"), translation: "¿Qué vas a comer?" },
      { segments: ruby("[何|なん][時|じ]ですか。"), translation: "¿Qué hora es?" },
      { segments: ruby("これは[何|なん]ですか。"), translation: "¿Qué es esto?" },
      { segments: ruby("[何人|なんにん]で[行|い]きますか。"), translation: "¿Cuántas personas van?" },
      { segments: ruby("[何色|なにいろ]が[好|す]きですか。"), translation: "¿Qué color te gusta?" },
    ],
    hasSvg: true,
  },
  {
    char: "科",
    level: 2,
    strokeCount: 9,
    on: ["カ"],
    kun: [],
    meaning: "Materia / área de estudio",
    examples: [
      { segments: ruby("[理科|りか]が[好|す]きです。"), translation: "Me gusta ciencias." },
      { segments: ruby("[理科|りか]の[授業|じゅぎょう]があります。"), translation: "Hay clase de ciencias." },
      { segments: ruby("[教科書|きょうかしょ]を[開|ひら]いてください。"), translation: "Por favor, abran el libro de texto." },
      { segments: ruby("[科目|かもく]を[選|えら]びます。"), translation: "Elijo una asignatura." },
      { segments: ruby("[理科室|りかしつ]へ[行|い]きます。"), translation: "Voy al laboratorio de ciencias." },
    ],
    hasSvg: true,
  },
  {
    char: "夏",
    level: 2,
    strokeCount: 10,
    on: ["カ"],
    kun: ["なつ"],
    meaning: "Verano",
    examples: [
      { segments: ruby("[夏|なつ]はあついです。"), translation: "El verano es caluroso." },
      { segments: ruby("[夏休|なつやす]みが[始|はじ]まります。"), translation: "Empiezan las vacaciones de verano." },
      { segments: ruby("[夏|なつ]に[海|うみ]へ[行|い]きます。"), translation: "En verano voy al mar." },
      { segments: ruby("[夏服|なつふく]を[着|き]ます。"), translation: "Me pongo ropa de verano." },
      { segments: ruby("[去年|きょねん]の[夏|なつ]はとてもあつかったです。"), translation: "El verano pasado fue muy caluroso." },
    ],
    hasSvg: true,
  },
  {
    char: "家",
    level: 2,
    strokeCount: 10,
    on: ["カ"],
    kun: ["いえ", "うち"],
    meaning: "Casa / hogar / familia",
    examples: [
      { segments: ruby("[家|いえ]に[帰|かえ]ります。"), translation: "Vuelvo a casa." },
      { segments: ruby("わたしの[家|いえ]は[駅|えき]の[近|ちか]くです。"), translation: "Mi casa está cerca de la estación." },
      { segments: ruby("[家族|かぞく]と[家|うち]でごはんを[食|た]べます。"), translation: "Como en casa con mi familia." },
      { segments: ruby("[家|うち]のまえに[木|き]があります。"), translation: "Hay un árbol frente a la casa." },
      { segments: ruby("[新|あたら]しい[家|いえ]を[見|み]ました。"), translation: "Vi una casa nueva." },
    ],
    hasSvg: true,
  },
  {
    char: "歌",
    level: 2,
    strokeCount: 14,
    on: ["カ"],
    kun: ["うた"],
    meaning: "Canción / cantar",
    examples: [
      { segments: ruby("[歌|うた]を[歌|うた]います。"), translation: "Canto una canción." },
      { segments: ruby("[好|す]きな[歌|うた]です。"), translation: "Es una canción que me gusta." },
      { segments: ruby("[歌声|うたごえ]がきれいです。"), translation: "La voz al cantar es bonita." },
      { segments: ruby("みんなで[歌|うた]を[聞|き]きます。"), translation: "Todos escuchamos una canción." },
      { segments: ruby("[歌手|かしゅ]になりたいです。"), translation: "Quiero ser cantante." },
    ],
    hasSvg: true,
  },
  {
    char: "画",
    level: 2,
    strokeCount: 8,
    on: ["ガ"],
    kun: [],
    meaning: "Imagen / dibujo",
    examples: [
      { segments: ruby("[映画|えいが]を[見|み]ます。"), translation: "Veo una película." },
      { segments: ruby("この[画面|がめん]は[大|おお]きいです。"), translation: "Esta pantalla es grande." },
      { segments: ruby("[計画|けいかく]を[立|た]てます。"), translation: "Hago un plan." },
      { segments: ruby("[画用紙|がようし]に[絵|え]をかきます。"), translation: "Dibujo en una hoja de dibujo." },
      { segments: ruby("[図画|ずが]の[時間|じかん]です。"), translation: "Es hora de dibujo." },
    ],
    hasSvg: true,
  },
  {
    char: "回",
    level: 2,
    strokeCount: 6,
    on: ["カイ"],
    kun: ["まわ.る", "まわ.す"],
    meaning: "Vuelta / veces / girar",
    examples: [
      { segments: ruby("[何回|なんかい]も[読|よ]みます。"), translation: "Lo leo muchas veces." },
      { segments: ruby("[一回|いっかい]だけやってみます。"), translation: "Lo intentaré solo una vez." },
      { segments: ruby("[二回|にかい][言|い]いました。"), translation: "Lo dije dos veces." },
      { segments: ruby("[体|からだ]を[回|まわ]してください。"), translation: "Por favor, gire el cuerpo." },
      { segments: ruby("[毎回|まいかい][楽|たの]しいです。"), translation: "Cada vez es divertido." },
    ],
    hasSvg: true,
  },
  {
    char: "会",
    level: 2,
    strokeCount: 6,
    on: ["カイ", "エ"],
    kun: ["あ.う"],
    meaning: "Encontrarse / reunirse",
    examples: [
      { segments: ruby("[友達|ともだち]と[会|あ]います。"), translation: "Me encuentro con un amigo." },
      { segments: ruby("あした[先生|せんせい]に[会|あ]います。"), translation: "Mañana veré al profesor." },
      { segments: ruby("[会話|かいわ]の[練習|れんしゅう]をします。"), translation: "Practico conversación." },
      { segments: ruby("[会|あ]えてうれしいです。"), translation: "Me alegra verte." },
      { segments: ruby("[会場|かいじょう]へ[行|い]きます。"), translation: "Voy al lugar del evento." },
    ],
    hasSvg: true,
  },
  {
    char: "海",
    level: 2,
    strokeCount: 9,
    on: ["カイ"],
    kun: ["うみ"],
    meaning: "Mar",
    examples: [
      { segments: ruby("[海|うみ]で[泳|およ]ぎます。"), translation: "Nado en el mar." },
      { segments: ruby("[海|うみ]はあおいです。"), translation: "El mar es azul." },
      { segments: ruby("[海辺|うみべ]を[歩|ある]きます。"), translation: "Camino por la orilla del mar." },
      { segments: ruby("[海|うみ]の[水|みず]はしょっぱいです。"), translation: "El agua del mar es salada." },
      { segments: ruby("[夏|なつ]に[海|うみ]へ[行|い]きます。"), translation: "En verano voy al mar." },
    ],
    hasSvg: true,
  },
  {
    char: "絵",
    level: 2,
    strokeCount: 12,
    on: ["カイ"],
    kun: ["え"],
    meaning: "Dibujo / pintura",
    examples: [
      { segments: ruby("[絵|え]をかきます。"), translation: "Dibujo una imagen." },
      { segments: ruby("[絵本|えほん]を[読|よ]みます。"), translation: "Leo un libro ilustrado." },
      { segments: ruby("この[絵|え]が[好|す]きです。"), translation: "Me gusta este dibujo." },
      { segments: ruby("[絵|え]を[部屋|へや]にかざります。"), translation: "Pongo un dibujo en la habitación." },
      { segments: ruby("[絵|え]がじょうずですね。"), translation: "Dibujas muy bien." },
    ],
    hasSvg: true,
  },
  {
    char: "外",
    level: 2,
    strokeCount: 5,
    on: ["ガイ"],
    kun: ["そと"],
    meaning: "Fuera / exterior",
    examples: [
      { segments: ruby("[外|そと]で[遊|あそ]びます。"), translation: "Juego afuera." },
      { segments: ruby("[外|そと]はさむいです。"), translation: "Afuera hace frío." },
      { segments: ruby("[外|そと]へ[出|で]てください。"), translation: "Por favor, salga afuera." },
      { segments: ruby("[外国|がいこく]の[友達|ともだち]がいます。"), translation: "Tengo amigos extranjeros." },
      { segments: ruby("[外|そと]から[音|おと]がします。"), translation: "Se oye un sonido desde fuera." },
    ],
    hasSvg: true,
  },
  {
    char: "角",
    level: 2,
    strokeCount: 7,
    on: ["カク"],
    kun: ["かど", "つの"],
    meaning: "Esquina / cuerno",
    examples: [
      { segments: ruby("[角|かど]を[曲|ま]がります。"), translation: "Doblo en la esquina." },
      { segments: ruby("この[机|つくえ]の[角|かど]はあぶないです。"), translation: "La esquina de esta mesa es peligrosa." },
      { segments: ruby("[牛|うし]に[角|つの]があります。"), translation: "La vaca tiene cuernos." },
      { segments: ruby("[三角|さんかく]をかきます。"), translation: "Dibujo un triángulo." },
      { segments: ruby("[四角|しかく]い[箱|はこ]です。"), translation: "Es una caja cuadrada." },
    ],
    hasSvg: true,
  },
  {
    char: "楽",
    level: 2,
    strokeCount: 13,
    on: ["ガク", "ラク"],
    kun: ["たの.しい"],
    meaning: "Divertido / música / cómodo",
    examples: [
      { segments: ruby("[音楽|おんがく]を[聞|き]きます。"), translation: "Escucho música." },
      { segments: ruby("きょうはとても[楽|たの]しいです。"), translation: "Hoy es muy divertido." },
      { segments: ruby("[楽|らく]に[座|すわ]ってください。"), translation: "Siéntese cómodamente." },
      { segments: ruby("[楽器|がっき]を[練習|れんしゅう]します。"), translation: "Practico un instrumento musical." },
      { segments: ruby("[旅行|りょこう]は[楽|たの]しかったです。"), translation: "El viaje fue divertido." },
    ],
    hasSvg: true,
  },
  {
    char: "活",
    level: 2,
    strokeCount: 9,
    on: ["カツ"],
    kun: [],
    meaning: "Vida / actividad / activo",
    examples: [
      { segments: ruby("[生活|せいかつ]は[大切|たいせつ]です。"), translation: "La vida diaria es importante." },
      { segments: ruby("[部活|ぶかつ]でサッカーをします。"), translation: "Juego fútbol en el club escolar." },
      { segments: ruby("[活動|かつどう]の[時間|じかん]です。"), translation: "Es hora de la actividad." },
      { segments: ruby("[生活|せいかつ]のリズムをととのえます。"), translation: "Ordeno mi ritmo de vida." },
      { segments: ruby("[活発|かっぱつ]に[話|はな]します。"), translation: "Habla con mucha energía." },
    ],
    hasSvg: true,
  },
  {
    char: "間",
    level: 2,
    strokeCount: 12,
    on: ["カン"],
    kun: ["あいだ"],
    meaning: "Espacio / intervalo / entre",
    examples: [
      { segments: ruby("[二人|ふたり]の[間|あいだ]に[座|すわ]ります。"), translation: "Me siento entre dos personas." },
      { segments: ruby("[時間|じかん]があります。"), translation: "Hay tiempo." },
      { segments: ruby("[学校|がっこう]まで一[時間|じかん]かかります。"), translation: "Se tarda una hora hasta la escuela." },
      { segments: ruby("[間|あいだ]をあけて[並|なら]んでください。"), translation: "Por favor, hagan fila dejando espacio." },
      { segments: ruby("[長|なが]い[時間|じかん][待|ま]ちました。"), translation: "Esperé mucho tiempo." },
    ],
    hasSvg: true,
  },
  {
    char: "丸",
    level: 2,
    strokeCount: 3,
    on: ["ガン"],
    kun: ["まる"],
    meaning: "Redondo / círculo",
    examples: [
      { segments: ruby("このボールは[丸|まる]いです。"), translation: "Esta pelota es redonda." },
      { segments: ruby("[丸|まる]をかきます。"), translation: "Dibujo un círculo." },
      { segments: ruby("[丸|まる]い[月|つき]がきれいです。"), translation: "La luna redonda es hermosa." },
      { segments: ruby("[丸|まる]いテーブルがあります。"), translation: "Hay una mesa redonda." },
      { segments: ruby("[丸|まる]ごと[食|た]べます。"), translation: "Lo como entero." },
    ],
    hasSvg: true,
  },
  {
    char: "岩",
    level: 2,
    strokeCount: 8,
    on: ["ガン"],
    kun: ["いわ"],
    meaning: "Roca",
    examples: [
      { segments: ruby("[大|おお]きな[岩|いわ]があります。"), translation: "Hay una roca grande." },
      { segments: ruby("[岩|いわ]のうえに[立|た]ちます。"), translation: "Me paro sobre la roca." },
      { segments: ruby("[岩山|いわやま]をのぼります。"), translation: "Subo la montaña rocosa." },
      { segments: ruby("[川|かわ]のそばに[岩|いわ]があります。"), translation: "Hay una roca junto al río." },
      { segments: ruby("[岩|いわ]のかげでやすみます。"), translation: "Descanso a la sombra de la roca." },
    ],
    hasSvg: true,
  },
  {
    char: "顔",
    level: 2,
    strokeCount: 18,
    on: ["ガン"],
    kun: ["かお"],
    meaning: "Cara / rostro",
    examples: [
      { segments: ruby("[顔|かお]を[洗|あら]います。"), translation: "Me lavo la cara." },
      { segments: ruby("[顔|かお]があかいです。"), translation: "Tiene la cara roja." },
      { segments: ruby("[笑顔|えがお]がすてきです。"), translation: "Su sonrisa es encantadora." },
      { segments: ruby("[顔|かお]をよく[見|み]てください。"), translation: "Por favor, mire bien la cara." },
      { segments: ruby("[母|はは]の[顔|かお]を[見|み]てあんしんしました。"), translation: "Me tranquilicé al ver la cara de mi madre." },
    ],
    hasSvg: true,
  },
  {
    char: "汽",
    level: 2,
    strokeCount: 7,
    on: ["キ"],
    kun: [],
    meaning: "Vapor / tren a vapor",
    examples: [
      { segments: ruby("[汽車|きしゃ]に[乗|の]ります。"), translation: "Subo al tren." },
      { segments: ruby("[汽車|きしゃ]が[駅|えき]に[来|き]ます。"), translation: "El tren llega a la estación." },
      { segments: ruby("[汽車|きしゃ]で[旅|たび]をします。"), translation: "Viajo en tren." },
      { segments: ruby("[古|ふる]い[汽車|きしゃ]を[見|み]ました。"), translation: "Vi un tren antiguo." },
      { segments: ruby("[汽車|きしゃ]の[窓|まど]から[山|やま]が[見|み]えます。"), translation: "Desde la ventana del tren se ven las montañas." },
    ],
    hasSvg: true,
  },
  {
    char: "記",
    level: 2,
    strokeCount: 10,
    on: ["キ"],
    kun: ["しる.す"],
    meaning: "Anotar / registrar",
    examples: [
      { segments: ruby("[日記|にっき]を[書|か]きます。"), translation: "Escribo un diario." },
      { segments: ruby("[名前|なまえ]を[記入|きにゅう]してください。"), translation: "Por favor, escriba su nombre." },
      { segments: ruby("[大事|だいじ]なことを[記|しる]します。"), translation: "Anoto lo importante." },
      { segments: ruby("[記号|きごう]をおぼえます。"), translation: "Memorizo los símbolos." },
      { segments: ruby("[記録|きろく]をのこします。"), translation: "Dejo un registro." },
    ],
    hasSvg: true,
  },
  {
    char: "帰",
    level: 2,
    strokeCount: 10,
    on: ["キ"],
    kun: ["かえ.る"],
    meaning: "Volver / regresar",
    examples: [
      { segments: ruby("[家|いえ]に[帰|かえ]ります。"), translation: "Vuelvo a casa." },
      { segments: ruby("[学校|がっこう]からまっすぐ[帰|かえ]ります。"), translation: "Vuelvo directo desde la escuela." },
      { segments: ruby("[帰|かえ]る[時間|じかん]です。"), translation: "Es hora de volver." },
      { segments: ruby("はやく[家|うち]へ[帰|かえ]りたいです。"), translation: "Quiero volver pronto a casa." },
      { segments: ruby("[帰|かえ]り[道|みち]で[本|ほん]を[買|か]います。"), translation: "Compro un libro de camino a casa." },
    ],
    hasSvg: true,
  },
  {
    char: "弓",
    level: 2,
    strokeCount: 3,
    on: ["キュウ"],
    kun: ["ゆみ"],
    meaning: "Arco",
    examples: [
      { segments: ruby("[弓|ゆみ]を[引|ひ]きます。"), translation: "Tenso el arco." },
      { segments: ruby("[弓道|きゅうどう]を[習|なら]っています。"), translation: "Estoy aprendiendo kyudo." },
      { segments: ruby("[弓|ゆみ]の[形|かたち]がきれいです。"), translation: "La forma del arco es bonita." },
      { segments: ruby("[長|なが]い[弓|ゆみ]があります。"), translation: "Hay un arco largo." },
      { segments: ruby("[弓|ゆみ]でまとをねらいます。"), translation: "Apunto al blanco con el arco." },
    ],
    hasSvg: true,
  },
  {
    char: "牛",
    level: 2,
    strokeCount: 4,
    on: ["ギュウ"],
    kun: ["うし"],
    meaning: "Vaca / buey",
    examples: [
      { segments: ruby("[牛|うし]がいます。"), translation: "Hay una vaca." },
      { segments: ruby("[牛乳|ぎゅうにゅう]を[飲|の]みます。"), translation: "Bebo leche." },
      { segments: ruby("[牛肉|ぎゅうにく]を[食|た]べます。"), translation: "Como carne de vacuno." },
      { segments: ruby("[白|しろ]い[牛|うし]を[見|み]ました。"), translation: "Vi una vaca blanca." },
      { segments: ruby("[牛|うし]は[草|くさ]を[食|た]べます。"), translation: "La vaca come pasto." },
    ],
    hasSvg: true,
  },
  {
    char: "魚",
    level: 2,
    strokeCount: 11,
    on: ["ギョ"],
    kun: ["さかな"],
    meaning: "Pez / pescado",
    examples: [
      { segments: ruby("[魚|さかな]を[食|た]べます。"), translation: "Como pescado." },
      { segments: ruby("[魚|さかな]が[泳|およ]いでいます。"), translation: "El pez está nadando." },
      { segments: ruby("[魚屋|さかなや]へ[行|い]きます。"), translation: "Voy a la pescadería." },
      { segments: ruby("[青|あお]い[魚|さかな]を[見|み]ました。"), translation: "Vi un pez azul." },
      { segments: ruby("[大|おお]きな[魚|さかな]がつれました。"), translation: "Pesqué un pez grande." },
    ],
    hasSvg: true,
  },
  {
    char: "京",
    level: 2,
    strokeCount: 8,
    on: ["キョウ"],
    kun: ["みやこ"],
    meaning: "Capital",
    examples: [
      { segments: ruby("[東京|とうきょう]へ[行|い]きます。"), translation: "Voy a Tokio." },
      { segments: ruby("[京都|きょうと]は[古|ふる]い[町|まち]です。"), translation: "Kioto es una ciudad antigua." },
      { segments: ruby("[京|みやこ]の[歴史|れきし]を[学|まな]びます。"), translation: "Aprendo la historia de la capital." },
      { segments: ruby("[東京駅|とうきょうえき]で[会|あ]いましょう。"), translation: "Encontrémonos en la estación de Tokio." },
      { segments: ruby("[京都|きょうと]の[寺|てら]を[見|み]ます。"), translation: "Veo templos de Kioto." },
    ],
    hasSvg: true,
  },
  {
    char: "強",
    level: 2,
    strokeCount: 11,
    on: ["キョウ"],
    kun: ["つよ.い"],
    meaning: "Fuerte",
    examples: [
      { segments: ruby("[風|かぜ]が[強|つよ]いです。"), translation: "El viento es fuerte." },
      { segments: ruby("[強|つよ]い[人|ひと]になりたいです。"), translation: "Quiero volverme una persona fuerte." },
      { segments: ruby("もっと[強|つよ]く[押|お]してください。"), translation: "Por favor, empuje más fuerte." },
      { segments: ruby("[強風|きょうふう]に[気|き]をつけてください。"), translation: "Tenga cuidado con el viento fuerte." },
      { segments: ruby("このチームはとても[強|つよ]いです。"), translation: "Este equipo es muy fuerte." },
    ],
    hasSvg: true,
  },
  {
    char: "教",
    level: 2,
    strokeCount: 11,
    on: ["キョウ"],
    kun: ["おし.える"],
    meaning: "Enseñar",
    examples: [
      { segments: ruby("[先生|せんせい]が[教|おし]えます。"), translation: "El profesor enseña." },
      { segments: ruby("[教室|きょうしつ]に[入|はい]ります。"), translation: "Entro al aula." },
      { segments: ruby("[道|みち]を[教|おし]えてください。"), translation: "Por favor, indíqueme el camino." },
      { segments: ruby("[教科書|きょうかしょ]を[開|ひら]きます。"), translation: "Abro el libro de texto." },
      { segments: ruby("[音楽|おんがく]を[教|おし]えてもらいました。"), translation: "Me enseñaron música." },
    ],
    hasSvg: true,
  },
  {
    char: "近",
    level: 2,
    strokeCount: 6,
    on: ["キン"],
    kun: ["ちか.い"],
    meaning: "Cercano",
    examples: [
      { segments: ruby("[駅|えき]は[近|ちか]いです。"), translation: "La estación está cerca." },
      { segments: ruby("[近|ちか]くの[店|みせ]で[買|か]います。"), translation: "Compro en la tienda cercana." },
      { segments: ruby("[家|いえ]の[近|ちか]くに[公園|こうえん]があります。"), translation: "Hay un parque cerca de casa." },
      { segments: ruby("[近所|きんじょ]の[人|ひと]にあいさつします。"), translation: "Saludo a los vecinos." },
      { segments: ruby("[近|ちか]くで[見|み]るときれいです。"), translation: "De cerca se ve bonito." },
    ],
    hasSvg: true,
  },
  {
    char: "兄",
    level: 2,
    strokeCount: 5,
    on: ["ケイ", "キョウ"],
    kun: ["あに"],
    meaning: "Hermano mayor",
    examples: [
      { segments: ruby("[兄|あに]がいます。"), translation: "Tengo un hermano mayor." },
      { segments: ruby("[兄|あに]と[遊|あそ]びます。"), translation: "Juego con mi hermano mayor." },
      { segments: ruby("[兄弟|きょうだい]で[出|で]かけます。"), translation: "Salimos entre hermanos." },
      { segments: ruby("[兄|あに]は[大学生|だいがくせい]です。"), translation: "Mi hermano mayor es universitario." },
      { segments: ruby("[兄|あに]が[先|さき]に[帰|かえ]りました。"), translation: "Mi hermano mayor volvió primero." },
    ],
    hasSvg: true,
  },
  {
    char: "形",
    level: 2,
    strokeCount: 7,
    on: ["ケイ"],
    kun: ["かたち"],
    meaning: "Forma",
    examples: [
      { segments: ruby("[形|かたち]がきれいです。"), translation: "La forma es bonita." },
      { segments: ruby("[星|ほし]の[形|かたち]をかきます。"), translation: "Dibujo la forma de una estrella." },
      { segments: ruby("パンの[形|かたち]がおもしろいです。"), translation: "La forma del pan es interesante." },
      { segments: ruby("[形|かたち]をよく[見|み]てください。"), translation: "Por favor, mire bien la forma." },
      { segments: ruby("[同|おな]じ[形|かたち]を[作|つく]ります。"), translation: "Hago la misma forma." },
    ],
    hasSvg: true,
  },
  {
    char: "計",
    level: 2,
    strokeCount: 9,
    on: ["ケイ"],
    kun: ["はか.る"],
    meaning: "Medir / plan / total",
    examples: [
      { segments: ruby("[計画|けいかく]を[立|た]てます。"), translation: "Hago un plan." },
      { segments: ruby("[時計|とけい]を[見|み]ます。"), translation: "Miro el reloj." },
      { segments: ruby("[体温|たいおん]を[計|はか]ります。"), translation: "Mido la temperatura corporal." },
      { segments: ruby("[合計|ごうけい]は千[円|えん]です。"), translation: "El total es mil yenes." },
      { segments: ruby("[計算|けいさん]をしてみます。"), translation: "Intento hacer el cálculo." },
    ],
    hasSvg: true,
  },
  {
    char: "元",
    level: 2,
    strokeCount: 4,
    on: ["ゲン"],
    kun: ["もと"],
    meaning: "Origen / base",
    examples: [
      { segments: ruby("お[元気|げんき]ですか。"), translation: "¿Cómo estás?" },
      { segments: ruby("[元気|げんき]にあいさつします。"), translation: "Saludo con energía." },
      { segments: ruby("[元|もと]の[場所|ばしょ]にもどしてください。"), translation: "Por favor, devuélvalo a su lugar original." },
      { segments: ruby("きょうも[元気|げんき]です。"), translation: "Hoy también estoy bien." },
      { segments: ruby("[元|もと]からここにありました。"), translation: "Estaba aquí desde el principio." },
    ],
    hasSvg: true,
  },
  {
    char: "言",
    level: 2,
    strokeCount: 7,
    on: ["ゲン", "ゴン"],
    kun: ["い.う"],
    meaning: "Decir / palabra",
    examples: [
      { segments: ruby("[名前|なまえ]を[言|い]います。"), translation: "Digo mi nombre." },
      { segments: ruby("はっきり[言|い]ってください。"), translation: "Por favor, dígalo claramente." },
      { segments: ruby("[先生|せんせい]がたいせつなことを[言|い]いました。"), translation: "El profesor dijo algo importante." },
      { segments: ruby("[言葉|ことば]をおぼえます。"), translation: "Memorizo palabras." },
      { segments: ruby("[一言|ひとこと]あいさつします。"), translation: "Digo unas palabras de saludo." },
    ],
    hasSvg: true,
  },
  {
    char: "原",
    level: 2,
    strokeCount: 10,
    on: ["ゲン"],
    kun: ["はら"],
    meaning: "Pradera / origen",
    examples: [
      { segments: ruby("[草原|そうげん]がひろいです。"), translation: "La pradera es amplia." },
      { segments: ruby("[原|はら]っぱで[遊|あそ]びます。"), translation: "Juego en el descampado." },
      { segments: ruby("[原|はら]に[花|はな]がさいています。"), translation: "En la pradera florecen flores." },
      { segments: ruby("[原|はら]を[風|かぜ]がわたります。"), translation: "El viento cruza la pradera." },
      { segments: ruby("[原|はら]の[道|みち]をあるきます。"), translation: "Camino por el sendero de la pradera." },
    ],
    hasSvg: true,
  },
  {
    char: "戸",
    level: 2,
    strokeCount: 4,
    on: ["コ"],
    kun: ["と"],
    meaning: "Puerta corrediza / puerta",
    examples: [
      { segments: ruby("[戸|と]を[開|あ]けます。"), translation: "Abro la puerta." },
      { segments: ruby("[戸|と]をしめてください。"), translation: "Por favor, cierre la puerta." },
      { segments: ruby("[雨戸|あまど]をしめます。"), translation: "Cierro las contraventanas." },
      { segments: ruby("[戸口|とぐち]に[立|た]ちます。"), translation: "Me pongo en la entrada." },
      { segments: ruby("[戸|と]の[音|おと]がしました。"), translation: "Se oyó el sonido de la puerta." },
    ],
    hasSvg: true,
  },
];

const LEVEL2_STROKES: Record<string, number> = {
  "引":4,"羽":6,"雲":12,"園":13,"遠":13,"何":7,"科":9,"夏":10,"家":10,"歌":14,
  "画":8,"回":6,"会":6,"海":9,"絵":12,"外":5,"角":7,"楽":13,"活":9,"間":12,
  "丸":3,"岩":8,"顔":18,"汽":7,"記":10,"帰":10,"弓":3,"牛":4,"魚":11,"京":8,
  "強":11,"教":11,"近":6,"兄":5,"形":7,"計":9,"元":4,"言":7,"原":10,"戸":4,
  "古":5,"午":4,"後":9,"語":14,"工":3,"公":4,"広":5,"交":6,"光":6,"考":6,
  "行":6,"高":10,"黄":11,"合":6,"谷":7,"国":8,"黒":11,"今":4,"才":3,"細":11,
  "作":7,"算":14,"止":4,"市":5,"矢":5,"姉":7,"思":9,"紙":10,"寺":6,"自":6,
  "時":10,"室":9,"社":7,"弱":10,"首":9,"秋":9,"週":11,"春":9,"書":10,"少":4,
  "場":12,"色":6,"食":9,"心":4,"新":13,"親":16,"図":7,"数":13,"西":6,"声":7,
  "星":9,"晴":12,"切":4,"雪":11,"船":11,"線":15,"前":9,"組":11,"走":7,"多":6,
  "太":4,"体":7,"台":5,"地":6,"池":6,"知":9,"茶":9,"昼":9,"長":8,"鳥":11,
  "朝":12,"直":8,"通":10,"弟":7,"店":8,"点":9,"電":13,"刀":2,"冬":5,"当":6,
  "東":8,"答":12,"頭":16,"同":6,"道":12,"読":14,"内":4,"南":9,"肉":6,"馬":10,
  "売":7,"買":12,"麦":7,"半":5,"番":12,"父":4,"風":9,"分":4,"聞":14,"米":6,
  "歩":8,"母":5,"方":4,"北":5,"毎":6,"妹":8,"万":3,"明":8,"鳴":14,"毛":4,
  "門":8,"夜":8,"野":11,"友":4,"用":5,"曜":18,"来":7,"里":7,"理":11,"話":13,
};

const LEVEL2: KanjiEntry[] = Object.keys(LEVEL2_STROKES).map(char => ({
  char,
  level: 2,
  strokeCount: LEVEL2_STROKES[char],
  on: [],
  kun: [],
  meaning: "",
  example: "",
  hasSvg: true,
}));

// ─── Levels 3–8 — chars only ─────────────────────────────────────────────────

const LEVELS_3_8: Array<{ level: number; chars: string[] }> = [
  { level: 3, chars: ['悪','安','暗','医','委','意','育','員','院','飲','運','泳','駅','央','横','屋','温','化','荷','界','開','階','寒','感','漢','館','岸','起','期','客','究','急','級','宮','球','去','橋','業','曲','局','銀','区','苦','具','君','係','軽','血','決','研','県','庫','湖','向','幸','港','号','根','祭','皿','仕','死','使','始','指','歯','詩','次','事','持','式','実','写','者','主','守','取','酒','受','州','拾','終','習','集','住','重','宿','所','暑','助','昭','消','商','章','勝','乗','植','申','身','神','真','深','進','世','整','昔','全','相','送','想','息','速','族','他','打','対','待','代','第','題','炭','短','談','着','注','柱','丁','帳','調','追','定','庭','笛','鉄','転','都','度','投','豆','島','湯','登','等','動','童','農','波','配','倍','箱','畑','発','反','坂','板','皮','悲','美','鼻','筆','氷','表','秒','病','品','負','部','服','福','物','平','返','勉','放','味','命','面','問','役','薬','由','油','有','遊','予','羊','洋','葉','陽','様','落','流','旅','両','緑','礼','列','練','路','和'] },
  { level: 4, chars: ['愛','械','泣','健','産','唱','然','典','票','民','案','害','給','験','散','焼','争','伝','標','無','以','街','挙','固','残','照','倉','徒','不','約','衣','各','漁','功','氏','城','巣','努','夫','勇','位','覚','共','好','司','縄','束','灯','付','要'] },
  { level: 5, chars: ['圧','囲','移','因','永','営','衛','易','益','液','演','応','往','桜','可','仮','価','河','過','快','解','格','確','額','刊','幹','慣','眼','紀','基','寄','規','喜','技','義','逆','久','旧','救','居','許','境','均','禁','句','型','経','潔','件','険','検','限','現','減','故','個','護','効','厚','耕','航','鉱','構','興','講','告','混'] },
  { level: 6, chars: ['胃','異','遺','域','宇','映','延','沿','恩','我','灰','拡','革','閣','割','株','干','巻','看','簡','危','机','揮','貴','疑','吸','供','胸','郷','勤','筋','系','敬','警','劇','激','穴','券','絹','権','憲','源','厳','己','呼','誤','后','孝','皇','紅','降','鋼','刻','穀','骨','困'] },
  { level: 7, chars: ['握','扱','依','威','為','偉','違','維','緯','壱','芋','陰','隠','影','鋭','越','援','煙','鉛','縁','汚','押','奥','憶','菓','暇','箇','雅','介','戒','皆','壊','較','獲','刈','甘','汗','乾','勧','歓','監','環','鑑','含','奇','祈','鬼','幾','脚','及'] },
  { level: 8, chars: ['哀','慰','詠','悦','閲','炎','宴','欧','殴','乙','卸','穏','佳','架','華','嫁','餓','怪','悔','塊','慨','該','概','郭','隔','穫','岳','掛','滑','肝','冠','勘','貫','喚','換','敢','緩','企','忌','軌','既','棋','棄','騎','欺','犠','菊','吉','喫','虐'] },
];

const LEVELS_3_8_ENTRIES: KanjiEntry[] = LEVELS_3_8.flatMap(({ level, chars }) =>
  chars.map(char => ({
    char,
    level,
    strokeCount: 0,
    on: [],
    kun: [],
    meaning: "",
    example: "",
    hasSvg: false,
  }))
);

// ─── Full list ────────────────────────────────────────────────────────────────

export const KANJI_LIST: KanjiEntry[] = [...LEVEL1, ...LEVEL2, ...LEVELS_3_8_ENTRIES];

// ─── Level metadata ───────────────────────────────────────────────────────────

export const LEVEL_META: Record<number, { label: string; color: string; accent: string; available: boolean }> = {
  1: { label: "Nivel 1",  color: "#A5D6A7", accent: "#2E7D32", available: true },
  2: { label: "Nivel 2",  color: "#C8E6C9", accent: "#388E3C", available: true },
  3: { label: "Nivel 3",  color: "#DCEDC8", accent: "#558B2F", available: false },
  4: { label: "Nivel 4",  color: "#F0F4C3", accent: "#827717", available: false },
  5: { label: "Nivel 5",  color: "#FFF9C4", accent: "#F57F17", available: false },
  6: { label: "Nivel 6",  color: "#FFE0B2", accent: "#E65100", available: false },
  7: { label: "Nivel 7",  color: "#FFCCBC", accent: "#BF360C", available: false },
  8: { label: "Nivel 8",  color: "#D7CCC8", accent: "#4E342E", available: false },
};

// ---Kanji SVG FILTER ---

const KANJI_SVG_MAP: Record<number, Record<string, string>> = {
  1: {
    "一": "1",
    "右": "2",
    "雨": "3",
    "円": "4",
    "王": "5",
    "音": "6",
    "下": "7",
    "火": "8",
    "花": "9",
    "貝": "10",
    "学": "11",
    "気": "12",
    "九": "13",
    "休": "14",
    "玉": "15",
    "金": "16",
    "空": "17",
    "月": "18",
    "犬": "19",
    "見": "20",
    "五": "21",
    "口": "22",
    "校": "23",
    "左": "24",
    "三": "25",
    "山": "26",
    "子": "27",
    "四": "28",
    "糸": "29",
    "字": "30",
    "耳": "31",
    "七": "32",
    "車": "33",
    "手": "34",
    "十": "35",
    "出": "36",
    "女": "37",
    "小": "38",
    "上": "39",
    "森": "40",
    "人": "41",
    "水": "42",
    "正": "43",
    "生": "44",
    "青": "45",
    "夕": "46",
    "石": "47",
    "赤": "48",
    "千": "49",
    "川": "50",
    "先": "51",
    "早": "52",
    "草": "53",
    "足": "54",
    "村": "55",
    "大": "56",
    "男": "57",
    "竹": "58",
    "中": "59",
    "虫": "60",
    "町": "61",
    "天": "62",
    "田": "63",
    "土": "64",
    "二": "65",
    "日": "66",
    "入": "67",
    "年": "68",
    "白": "69",
    "八": "70",
    "百": "71",
    "文": "72",
    "木": "73",
    "本": "74",
    "名": "75",
    "目": "76",
    "立": "77",
    "力": "78",
    "林": "79",
    "六": "80",
  },
  2: {
    "引": "1",
    "羽": "2",
    "雲": "3",
    "園": "4",
    "遠": "5",
    "何": "6",
    "科": "7",
    "夏": "8",
    "家": "9",
    "歌": "10",
    "画": "11",
    "回": "12",
    "会": "13",
    "海": "14",
    "絵": "15",
    "外": "16",
    "角": "17",
    "楽": "18",
    "活": "19",
    "間": "20",
    "丸": "21",
    "岩": "22",
    "顔": "23",
    "汽": "24",
    "記": "25",
    "帰": "26",
    "弓": "27",
    "牛": "28",
    "魚": "29",
    "京": "30",
    "強": "31",
    "教": "32",
    "近": "33",
    "兄": "34",
    "形": "35",
    "計": "36",
    "元": "37",
    "言": "38",
    "原": "39",
    "戸": "40",
    "古": "41",
    "午": "42",
    "後": "43",
    "語": "44",
    "工": "45",
    "公": "46",
    "広": "47",
    "交": "48",
    "光": "49",
    "考": "50",
    "行": "51",
    "高": "52",
    "黄": "53",
    "合": "54",
    "谷": "55",
    "国": "56",
    "黒": "57",
    "今": "58",
    "才": "59",
    "細": "60",
    "作": "61",
    "算": "62",
    "止": "63",
    "市": "64",
    "矢": "65",
    "姉": "66",
    "思": "67",
    "紙": "68",
    "寺": "69",
    "自": "70",
    "時": "71",
    "室": "72",
    "社": "73",
    "弱": "74",
    "首": "75",
    "秋": "76",
    "週": "77",
    "春": "78",
    "書": "79",
    "少": "80",
    "場": "81",
    "色": "82",
    "食": "83",
    "心": "84",
    "新": "85",
    "親": "86",
    "図": "87",
    "数": "88",
    "西": "89",
    "声": "90",
    "星": "91",
    "晴": "92",
    "切": "93",
    "雪": "94",
    "船": "95",
    "線": "96",
    "前": "97",
    "組": "98",
    "走": "99",
    "多": "100",
    "太": "101",
    "体": "102",
    "台": "103",
    "地": "104",
    "池": "105",
    "知": "106",
    "茶": "107",
    "昼": "108",
    "長": "109",
    "鳥": "110",
    "朝": "111",
    "直": "112",
    "通": "113",
    "弟": "114",
    "店": "115",
    "点": "116",
    "電": "117",
    "刀": "118",
    "冬": "119",
    "当": "120",
    "東": "121",
    "答": "122",
    "頭": "123",
    "同": "124",
    "道": "125",
    "読": "126",
    "内": "127",
    "南": "128",
    "肉": "129",
    "馬": "130",
    "売": "131",
    "買": "132",
    "麦": "133",
    "半": "134",
    "番": "135",
    "父": "136",
    "風": "137",
    "分": "138",
    "聞": "139",
    "米": "140",
    "歩": "141",
    "母": "142",
    "方": "143",
    "北": "144",
    "毎": "145",
    "妹": "146",
    "万": "147",
    "明": "148",
    "鳴": "149",
    "毛": "150",
    "門": "151",
    "夜": "152",
    "野": "153",
    "友": "154",
    "用": "155",
    "曜": "156",
    "来": "157",
    "里": "158",
    "理": "159",
    "話": "160",
  },
};