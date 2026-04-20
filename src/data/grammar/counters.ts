// src/data/grammar/counters.ts

import { RubySegment } from "@/app/components/ui/Ruby";


export interface CounterReading {
  num: number;
  reading: string;        // e.g. "いっぽん"
  note?: string;          // irregular / special note
}

type CounterExample = {
  segments: RubySegment[];
  translation: string;
};

export interface CounterEntry {
  counter: string;
  reading: string;
  meaning: string;
  examples: string[];
  level: "N5" | "N4" | "N3" | "N2" | "N1";
  readings: CounterReading[];
  exampleSentences: CounterExample[];
}
export const COUNTERS: CounterEntry[] = [
  {
    counter: "個",
    reading: "こ",
    meaning: "objetos pequeños, compactos o unidades generales",
    examples: [
        "りんご",
        "みかん",
        "たまご",
        "いし",
        "ボール",
        "コップ",
        "さら",
        "かぎ",
        "はこ",
        "ケーキ",
        "おにぎり",
        "じゃがいも",
        "トマト",
        "けしごむ",
        "ボタン",
        "にんぎょう",
        "チョコレート",
        "カメラ",
        "スマホ",
        "せっけん",
        "コイン",
        "グラス",
        "まくら",
        "おもちゃ",
        "くだもの"
    ],
    level: "N5",
    readings: [
        { num: 1, reading: "いっこ", note: "irregular" },
        { num: 2, reading: "にこ" },
        { num: 3, reading: "さんこ" },
        { num: 4, reading: "よんこ" },
        { num: 5, reading: "ごこ" },
        { num: 6, reading: "ろっこ", note: "irregular" },
        { num: 7, reading: "ななこ" },
        { num: 8, reading: "はっこ", note: "irregular" },
        { num: 9, reading: "きゅうこ" },
        { num: 10, reading: "じゅっこ", note: "irregular" },
        ],
        exampleSentences: [
        {
            segments: [
            { text: "三個", ruby: "さんこ" },
            { text: "ください。" }
            ],
            translation: "Por favor dame tres.",
        },
        {
            segments: [
            { text: "机", ruby: "つくえ" },
            { text: "の" },
            { text: "上", ruby: "うえ" },
            { text: "にりんごが" },
            { text: "一個", ruby: "いっこ" },
            { text: "あります。" }
            ],
            translation: "Hay una manzana sobre el escritorio.",
        },
        {
        segments: [
            { text: "卵", ruby: "たまご" },
            { text: "を" },
            { text: "二個", ruby: "にこ" },
            { text: "買", ruby: "か" },
            { text: "いました。" }
        ],
        translation: "Compré dos huevos.",
        },
        {
        segments: [
            { text: "りんごを" },
            { text: "三個", ruby: "さんこ" },
            { text: "ください。" }
        ],
        translation: "Por favor dame tres manzanas.",
        },
        {
        segments: [
            { text: "母", ruby: "はは" },
            { text: "はケーキを" },
            { text: "四個", ruby: "よんこ" },
            { text: "作", ruby: "つく" },
            { text: "りました。" }
        ],
        translation: "Mi mamá hizo cuatro pasteles.",
        },
        {
        segments: [
            { text: "棚", ruby: "たな" },
            { text: "にコップが" },
            { text: "五個", ruby: "ごこ" },
            { text: "あります。" }
        ],
        translation: "Hay cinco vasos en la repisa.",
        },
        {
        segments: [
            { text: "今日", ruby: "きょう" },
            { text: "はじゃがいもを" },
            { text: "六個", ruby: "ろっこ" },
            { text: "使", ruby: "つか" },
            { text: "います。" }
        ],
        translation: "Hoy usaré seis papas.",
        },
        {
        segments: [
            { text: "箱", ruby: "はこ" },
            { text: "の" },
            { text: "中", ruby: "なか" },
            { text: "にボールが" },
            { text: "七個", ruby: "ななこ" },
            { text: "あります。" }
        ],
        translation: "Hay siete pelotas dentro de la caja.",
        },
        {
        segments: [
            { text: "朝", ruby: "あさ" },
            { text: "、おにぎりを" },
            { text: "八個", ruby: "はっこ" },
            { text: "作", ruby: "つく" },
            { text: "りました。" }
        ],
        translation: "En la mañana hice ocho onigiri.",
        },
        {
        segments: [
            { text: "子", ruby: "こ" },
            { text: "どもが" },
            { text: "石", ruby: "いし" },
            { text: "を" },
            { text: "九個", ruby: "きゅうこ" },
            { text: "集", ruby: "あつ" },
            { text: "めました。" }
        ],
        translation: "El niño juntó nueve piedras.",
        },
        {
        segments: [
            { text: "友", ruby: "とも" },
            { text: "だちにチョコレートを" },
            { text: "十個", ruby: "じゅっこ" },
            { text: "もらいました。" }
        ],
        translation: "Recibí diez chocolates de un amigo.",
        },
        {
        segments: [
            { text: "冷蔵庫", ruby: "れいぞうこ" },
            { text: "にみかんが" },
            { text: "二個", ruby: "にこ" },
            { text: "入", ruby: "はい" },
            { text: "っています。" }
        ],
        translation: "Hay dos mandarinas en el refrigerador.",
        },
        {
        segments: [
            { text: "かばんの" },
            { text: "中", ruby: "なか" },
            { text: "にかぎが" },
            { text: "一個", ruby: "いっこ" },
            { text: "入", ruby: "はい" },
            { text: "っています。" }
        ],
        translation: "Hay una llave dentro del bolso.",
        }
    ]
    },
    {
    counter: "枚",
    reading: "まい",
    meaning: "objetos planos y delgados",
    examples: [
        "紙（かみ）",
        "シャツ",
        "皿（さら）",
        "切手（きって）",
        "チケット",
        "タオル",
        "毛布（もうふ）",
        "写真（しゃしん）",
        "カード",
        "葉っぱ（はっぱ）",
        "のり",
        "パンケーキ",
        "ピザ",
        "ハンカチ",
        "布（ぬの）"
    ],
    level: "N5",
    readings: [
        { num: 1, reading: "いちまい" },
        { num: 2, reading: "にまい" },
        { num: 3, reading: "さんまい" },
        { num: 4, reading: "よんまい" },
        { num: 5, reading: "ごまい" },
        { num: 6, reading: "ろくまい" },
        { num: 7, reading: "ななまい" },
        { num: 8, reading: "はちまい" },
        { num: 9, reading: "きゅうまい" },
        { num: 10, reading: "じゅうまい" },
    ],
    exampleSentences: [
        {
        segments: [
            { text: "紙", ruby: "かみ" },
            { text: "を二枚", ruby: "にまい" },
            { text: "とってください。" }
        ],
        translation: "Por favor toma dos hojas de papel.",
        },
        {
        segments: [
            { text: "お皿", ruby: "おさら" },
            { text: "を三枚", ruby: "さんまい" },
            { text: "買", ruby: "か" },
            { text: "いました。" }
        ],
        translation: "Compré tres platos.",
        },
        {
        segments: [
            { text: "白", ruby: "しろ" },
            { text: "いシャツが一枚", ruby: "いちまい" },
            { text: "あります。" }
        ],
        translation: "Hay una camisa blanca.",
        },
        {
        segments: [
            { text: "切手", ruby: "きって" },
            { text: "を四枚", ruby: "よんまい" },
            { text: "ください。" }
        ],
        translation: "Deme cuatro estampillas, por favor.",
        },
        {
        segments: [
            { text: "写真", ruby: "しゃしん" },
            { text: "を五枚", ruby: "ごまい" },
            { text: "印刷", ruby: "いんさつ" },
            { text: "しました。" }
        ],
        translation: "Imprimí cinco fotos.",
        },
        {
        segments: [
            { text: "チケット", ruby: "チケット" },
            { text: "が六枚", ruby: "ろくまい" },
            { text: "あります。" }
        ],
        translation: "Hay seis boletos.",
        },
        {
        segments: [
            { text: "タオル", ruby: "タオル" },
            { text: "を七枚", ruby: "ななまい" },
            { text: "洗", ruby: "あら" },
            { text: "いました。" }
        ],
        translation: "Lavé siete toallas.",
        },
        {
        segments: [
            { text: "カード", ruby: "カード" },
            { text: "を八枚", ruby: "はちまい" },
            { text: "持", ruby: "も" },
            { text: "っています。" }
        ],
        translation: "Tengo ocho tarjetas.",
        },
        {
        segments: [
            { text: "ピザ", ruby: "ピザ" },
            { text: "を九枚", ruby: "きゅうまい" },
            { text: "に切", ruby: "き" },
            { text: "りました。" }
        ],
        translation: "Corté la pizza en nueve porciones.",
        },
        {
        segments: [
            { text: "のり", ruby: "のり" },
            { text: "を十枚", ruby: "じゅうまい" },
            { text: "使", ruby: "つか" },
            { text: "いました。" }
        ],
        translation: "Usé diez láminas de alga nori.",
        },
    ],
  },
  {
    counter: "本",
    reading: "ほん",
    meaning: "objetos largos y cilíndricos",
    examples: [
        "ペン",
        "ボトル",
        "傘（かさ）",
        "木（き）",
        "鉛筆（えんぴつ）",
        "バナナ",
        "蝋燭（ろうそく）",
        "ジュース",
        "指（ゆび）",
        "電池（でんち）",
        "ネクタイ",
        "ワイン"
    ],
    level: "N5",
    readings: [
        { num: 1, reading: "いっぽん", note: "irregular" },
        { num: 2, reading: "にほん" },
        { num: 3, reading: "さんぼん", note: "irregular" },
        { num: 4, reading: "よんほん" },
        { num: 5, reading: "ごほん" },
        { num: 6, reading: "ろっぽん", note: "irregular" },
        { num: 7, reading: "ななほん" },
        { num: 8, reading: "はっぽん", note: "irregular" },
        { num: 9, reading: "きゅうほん" },
        { num: 10, reading: "じゅっぽん", note: "irregular" },
        ],
        exampleSentences: [
        {
            segments: [
            { text: "ビールを一本", ruby: "いっぽん" },
            { text: "ください。" }
            ],
            translation: "Por favor dame una botella de cerveza.",
        },
        {
        segments: [
            { text: "ペンが二本", ruby: "にほん" },
            { text: "あります。" }
        ],
        translation: "Hay dos lápices.",
        },
        {
        segments: [
            { text: "木", ruby: "き" },
            { text: "が三本", ruby: "さんぼん" },
            { text: "あります。" }
        ],
        translation: "Hay tres árboles.",
        },
        {
        segments: [
            { text: "えんぴつを四本", ruby: "よんほん" },
            { text: "買", ruby: "か" },
            { text: "いました。" }
        ],
        translation: "Compré cuatro lápices.",
        },
        {
        segments: [
            { text: "バナナを五本", ruby: "ごほん" },
            { text: "食", ruby: "た" },
            { text: "べました。" }
        ],
        translation: "Comí cinco bananas.",
        },
        {
        segments: [
            { text: "ジュースを六本", ruby: "ろっぽん" },
            { text: "持", ruby: "も" },
            { text: "ってきました。" }
        ],
        translation: "Traje seis botellas de jugo.",
        },
        {
        segments: [
            { text: "ろうそくを七本", ruby: "ななほん" },
            { text: "立", ruby: "た" },
            { text: "てました。" }
        ],
        translation: "Puse siete velas.",
        },
        {
        segments: [
            { text: "ワインが八本", ruby: "はっぽん" },
            { text: "あります。" }
        ],
        translation: "Hay ocho botellas de vino.",
        },
        {
        segments: [
            { text: "傘", ruby: "かさ" },
            { text: "を九本", ruby: "きゅうほん" },
            { text: "しまいました。" }
        ],
        translation: "Guardé nueve paraguas.",
        },
        {
        segments: [
            { text: "電池", ruby: "でんち" },
            { text: "を十本", ruby: "じゅっぽん" },
            { text: "買", ruby: "か" },
            { text: "いました。" }
        ],
        translation: "Compré diez pilas.",
        },
    ],
    },
  {
    counter: "冊",
    reading: "さつ",
    meaning: "libros, cuadernos, revistas",
    examples: [
        "本（ほん）",
        "雑誌（ざっし）",
        "ノート",
        "漫画（まんが）",
        "辞書（じしょ）",
        "教科書（きょうかしょ）",
        "手帳（てちょう）",
        "アルバム",
        "小説（しょうせつ）",
        "参考書（さんこうしょ）"
    ],
    level: "N5",
    readings: [
        { num: 1, reading: "いっさつ", note: "irregular" },
        { num: 2, reading: "にさつ" },
        { num: 3, reading: "さんさつ" },
        { num: 4, reading: "よんさつ" },
        { num: 5, reading: "ごさつ" },
        { num: 6, reading: "ろくさつ" },
        { num: 7, reading: "ななさつ" },
        { num: 8, reading: "はっさつ", note: "irregular" },
        { num: 9, reading: "きゅうさつ" },
        { num: 10, reading: "じゅっさつ", note: "irregular" },
        ],
        exampleSentences: [
        {
        segments: [
            { text: "本", ruby: "ほん" },
            { text: "を" },
            { text: "三冊", ruby: "さんさつ" },
            { text: "読", ruby: "よ" },
            { text: "みました。" }
        ],
        translation: "Leí tres libros.",
        },
        {
        segments: [
            { text: "雑誌", ruby: "ざっし" },
            { text: "を" },
            { text: "一冊", ruby: "いっさつ" },
            { text: "買", ruby: "か" },
            { text: "いました。" }
        ],
        translation: "Compré una revista.",
        },
        {
        segments: [
            { text: "ノートが" },
            { text: "二冊", ruby: "にさつ" },
            { text: "あります。" }
        ],
        translation: "Hay dos cuadernos.",
        },
        {
        segments: [
            { text: "漫画", ruby: "まんが" },
            { text: "を" },
            { text: "四冊", ruby: "よんさつ" },
            { text: "持", ruby: "も" },
            { text: "っています。" }
        ],
        translation: "Tengo cuatro mangas.",
        },
        {
        segments: [
            { text: "辞書", ruby: "じしょ" },
            { text: "を" },
            { text: "五冊", ruby: "ごさつ" },
            { text: "学校", ruby: "がっこう" },
            { text: "へ" },
            { text: "持", ruby: "も" },
            { text: "っていきました。" }
        ],
        translation: "Llevé cinco diccionarios a la escuela.",
        },
        {
        segments: [
            { text: "教科書", ruby: "きょうかしょ" },
            { text: "を" },
            { text: "六冊", ruby: "ろくさつ" },
            { text: "机", ruby: "つくえ" },
            { text: "の" },
            { text: "上", ruby: "うえ" },
            { text: "に" },
            { text: "置", ruby: "お" },
            { text: "きました。" }
        ],
        translation: "Puse seis libros de texto sobre el escritorio.",
        },
        {
        segments: [
            { text: "手帳", ruby: "てちょう" },
            { text: "を" },
            { text: "七冊", ruby: "ななさつ" },
            { text: "注文", ruby: "ちゅうもん" },
            { text: "しました。" }
        ],
        translation: "Pedí siete agendas.",
        },
        {
        segments: [
            { text: "アルバムが" },
            { text: "八冊", ruby: "はっさつ" },
            { text: "あります。" }
        ],
        translation: "Hay ocho álbumes.",
        },
        {
        segments: [
            { text: "小説", ruby: "しょうせつ" },
            { text: "を" },
            { text: "九冊", ruby: "きゅうさつ" },
            { text: "図書館", ruby: "としょかん" },
            { text: "で" },
            { text: "借", ruby: "か" },
            { text: "りました。" }
        ],
        translation: "Pedí prestadas nueve novelas en la biblioteca.",
        },
        {
        segments: [
            { text: "参考書", ruby: "さんこうしょ" },
            { text: "を" },
            { text: "十冊", ruby: "じゅっさつ" },
            { text: "買", ruby: "か" },
            { text: "いました。" }
        ],
        translation: "Compré diez libros de referencia.",
        },
    ],
    },
  {
    counter: "人",
    reading: "にん（1人・2人は ひとり / ふたり）",
    meaning: "personas",
    examples: ["友達", "先生", "学生", "家族", "子ども", "お客さん", "店員", "日本人"],
    level: "N5",
    readings: [
        { num: 1, reading: "ひとり", note: "irregular" },
        { num: 2, reading: "ふたり", note: "irregular" },
        { num: 3, reading: "さんにん" },
        { num: 4, reading: "よにん" },
        { num: 5, reading: "ごにん" },
        { num: 6, reading: "ろくにん" },
        { num: 7, reading: "ななにん" },
        { num: 8, reading: "はちにん" },
        { num: 9, reading: "きゅうにん" },
        { num: 10, reading: "じゅうにん" },
    ],
    exampleSentences: [
        {
            segments: [
            { text: "パーティーに" },
            { text: "五人", ruby: "ごにん" },
            { text: "来", ruby: "き" },
            { text: "ました。" }
            ],
            translation: "Vinieron cinco personas a la fiesta.",
        },
        {
        segments: [
            { text: "パーティーに" },
            { text: "五人", ruby: "ごにん" },
            { text: "来", ruby: "き" },
            { text: "ました。" }
        ],
        translation: "Vinieron cinco personas a la fiesta.",
        },
        {
        segments: [
            { text: "一人", ruby: "ひとり" },
            { text: "で" },
            { text: "行", ruby: "い" },
            { text: "きます。" }
        ],
        translation: "Voy solo.",
        },
        {
        segments: [
            { text: "二人", ruby: "ふたり" },
            { text: "で" },
            { text: "勉強", ruby: "べんきょう" },
            { text: "します。" }
        ],
        translation: "Estudiamos entre dos personas.",
        },
        {
        segments: [
            { text: "学生", ruby: "がくせい" },
            { text: "が" },
            { text: "三人", ruby: "さんにん" },
            { text: "います。" }
        ],
        translation: "Hay tres estudiantes.",
        },
        {
        segments: [
            { text: "家族", ruby: "かぞく" },
            { text: "は" },
            { text: "四人", ruby: "よにん" },
            { text: "です。" }
        ],
        translation: "Somos cuatro en la familia.",
        },
        {
        segments: [
            { text: "友達", ruby: "ともだち" },
            { text: "が" },
            { text: "六人", ruby: "ろくにん" },
            { text: "来", ruby: "き" },
            { text: "ました。" }
        ],
        translation: "Vinieron seis amigos.",
        },
        {
        segments: [
            { text: "教室", ruby: "きょうしつ" },
            { text: "に" },
            { text: "七人", ruby: "ななにん" },
            { text: "います。" }
        ],
        translation: "Hay siete personas en la sala.",
        },
        {
        segments: [
            { text: "お客", ruby: "きゃく" },
            { text: "さんが" },
            { text: "八人", ruby: "はちにん" },
            { text: "来", ruby: "き" },
            { text: "ました。" }
        ],
        translation: "Vinieron ocho clientes.",
        },
        {
        segments: [
            { text: "会社員", ruby: "かいしゃいん" },
            { text: "が" },
            { text: "九人", ruby: "きゅうにん" },
            { text: "います。" }
        ],
        translation: "Hay nueve empleados de empresa.",
        },
        {
        segments: [
            { text: "クラスに" },
            { text: "十人", ruby: "じゅうにん" },
            { text: "います。" }
        ],
        translation: "Hay diez personas en la clase.",
        },
    ],
    },
    {
    counter: "匹",
    reading: "ひき",
    meaning: "animales pequeños (perros, gatos, peces, insectos)",
    examples: [
        "犬（いぬ）",
        "猫（ねこ）",
        "魚（さかな）",
        "虫（むし）",
        "うさぎ",
        "ハムスター",
        "鳥（とり）",
        "カエル",
        "トカゲ",
        "金魚（きんぎょ）"
    ],
    level: "N5",
    readings: [
        { num: 1, reading: "いっぴき", note: "irregular" },
        { num: 2, reading: "にひき" },
        { num: 3, reading: "さんびき", note: "irregular" },
        { num: 4, reading: "よんひき" },
        { num: 5, reading: "ごひき" },
        { num: 6, reading: "ろっぴき", note: "irregular" },
        { num: 7, reading: "ななひき" },
        { num: 8, reading: "はっぴき", note: "irregular" },
        { num: 9, reading: "きゅうひき" },
        { num: 10, reading: "じゅっぴき", note: "irregular" },
    ],
    exampleSentences: [
        {
        segments: [
            { text: "猫", ruby: "ねこ" },
            { text: "が" },
            { text: "三匹", ruby: "さんびき" },
            { text: "います。" }
        ],
        translation: "Hay tres gatos.",
        },
        {
        segments: [
            { text: "犬", ruby: "いぬ" },
            { text: "が" },
            { text: "一匹", ruby: "いっぴき" },
            { text: "います。" }
        ],
        translation: "Hay un perro.",
        },
        {
        segments: [
            { text: "魚", ruby: "さかな" },
            { text: "を" },
            { text: "二匹", ruby: "にひき" },
            { text: "買", ruby: "か" },
            { text: "いました。" }
        ],
        translation: "Compré dos peces.",
        },
        {
        segments: [
            { text: "虫", ruby: "むし" },
            { text: "が" },
            { text: "四匹", ruby: "よんひき" },
            { text: "います。" }
        ],
        translation: "Hay cuatro insectos.",
        },
        {
        segments: [
            { text: "うさぎが" },
            { text: "五匹", ruby: "ごひき" },
            { text: "います。" }
        ],
        translation: "Hay cinco conejos.",
        },
        {
        segments: [
            { text: "ハムスターを" },
            { text: "六匹", ruby: "ろっぴき" },
            { text: "見", ruby: "み" },
            { text: "ました。" }
        ],
        translation: "Vi seis hámsters.",
        },
        {
        segments: [
            { text: "鳥", ruby: "とり" },
            { text: "が" },
            { text: "七匹", ruby: "ななひき" },
            { text: "います。" }
        ],
        translation: "Hay siete pájaros.",
        },
        {
        segments: [
            { text: "カエルが" },
            { text: "八匹", ruby: "はっぴき" },
            { text: "います。" }
        ],
        translation: "Hay ocho ranas.",
        },
        {
        segments: [
            { text: "金魚", ruby: "きんぎょ" },
            { text: "を" },
            { text: "九匹", ruby: "きゅうひき" },
            { text: "飼", ruby: "か" },
            { text: "っています。" }
        ],
        translation: "Tengo nueve peces dorados.",
        },
        {
        segments: [
            { text: "猫", ruby: "ねこ" },
            { text: "が" },
            { text: "十匹", ruby: "じゅっぴき" },
            { text: "います。" }
        ],
        translation: "Hay diez gatos.",
        },
    ],
    },
  {
    counter: "台",
    reading: "だい",
    meaning: "máquinas y vehículos",
    examples: [
        "車（くるま）",
        "自転車（じてんしゃ）",
        "パソコン",
        "テレビ",
        "バイク",
        "トラック",
        "冷蔵庫（れいぞうこ）",
        "洗濯機（せんたくき）",
        "エアコン",
        "カメラ"
    ],
    level: "N5",
    readings: [
        { num: 1, reading: "いちだい" },
        { num: 2, reading: "にだい" },
        { num: 3, reading: "さんだい" },
        { num: 4, reading: "よんだい" },
        { num: 5, reading: "ごだい" },
        { num: 6, reading: "ろくだい" },
        { num: 7, reading: "ななだい" },
        { num: 8, reading: "はちだい" },
        { num: 9, reading: "きゅうだい" },
        { num: 10, reading: "じゅうだい" },
    ],
    exampleSentences: [
        {
        segments: [
            { text: "車", ruby: "くるま" },
            { text: "が" },
            { text: "二台", ruby: "にだい" },
            { text: "あります。" }
        ],
        translation: "Hay dos coches.",
        },
        {
        segments: [
            { text: "パソコンを" },
            { text: "一台", ruby: "いちだい" },
            { text: "買", ruby: "か" },
            { text: "いました。" }
        ],
        translation: "Compré una computadora.",
        },
        {
        segments: [
            { text: "テレビが" },
            { text: "三台", ruby: "さんだい" },
            { text: "あります。" }
        ],
        translation: "Hay tres televisores.",
        },
        {
        segments: [
            { text: "自転車", ruby: "じてんしゃ" },
            { text: "を" },
            { text: "四台", ruby: "よんだい" },
            { text: "見", ruby: "み" },
            { text: "ました。" }
        ],
        translation: "Vi cuatro bicicletas.",
        },
        {
        segments: [
            { text: "バイクが" },
            { text: "五台", ruby: "ごだい" },
            { text: "あります。" }
        ],
        translation: "Hay cinco motos.",
        },
        {
        segments: [
            { text: "トラックを" },
            { text: "六台", ruby: "ろくだい" },
            { text: "数", ruby: "かぞ" },
            { text: "えました。" }
        ],
        translation: "Conté seis camiones.",
        },
        {
        segments: [
            { text: "冷蔵庫", ruby: "れいぞうこ" },
            { text: "が" },
            { text: "七台", ruby: "ななだい" },
            { text: "あります。" }
        ],
        translation: "Hay siete refrigeradores.",
        },
        {
        segments: [
            { text: "洗濯機", ruby: "せんたくき" },
            { text: "を" },
            { text: "八台", ruby: "はちだい" },
            { text: "買", ruby: "か" },
            { text: "いました。" }
        ],
        translation: "Compré ocho lavadoras.",
        },
        {
        segments: [
            { text: "エアコンが" },
            { text: "九台", ruby: "きゅうだい" },
            { text: "あります。" }
        ],
        translation: "Hay nueve aires acondicionados.",
        },
        {
        segments: [
            { text: "カメラを" },
            { text: "十台", ruby: "じゅうだい" },
            { text: "使", ruby: "つか" },
            { text: "いました。" }
        ],
        translation: "Usé diez cámaras.",
        },
    ],
    },
  {
    counter: "杯",
    reading: "はい",
    meaning: "bebidas en taza o vaso",
    examples: [
        "コーヒー",
        "お茶（おちゃ）",
        "ビール",
        "水（みず）",
        "ジュース",
        "牛乳（ぎゅうにゅう）",
        "ワイン",
        "スープ",
        "紅茶（こうちゃ）",
        "お酒（おさけ）"
    ],
    level: "N5",
    readings: [
        { num: 1, reading: "いっぱい", note: "irregular" },
        { num: 2, reading: "にはい" },
        { num: 3, reading: "さんばい", note: "irregular" },
        { num: 4, reading: "よんはい" },
        { num: 5, reading: "ごはい" },
        { num: 6, reading: "ろっぱい", note: "irregular" },
        { num: 7, reading: "ななはい" },
        { num: 8, reading: "はっぱい", note: "irregular" },
        { num: 9, reading: "きゅうはい" },
        { num: 10, reading: "じゅっぱい", note: "irregular" },
    ],
    exampleSentences: [
        {
        segments: [
            { text: "コーヒーを" },
            { text: "一杯", ruby: "いっぱい" },
            { text: "飲", ruby: "の" },
            { text: "みました。" }
        ],
        translation: "Tomé una taza de café.",
        },
        {
        segments: [
            { text: "お茶", ruby: "おちゃ" },
            { text: "を" },
            { text: "二杯", ruby: "にはい" },
            { text: "ください。" }
        ],
        translation: "Por favor, deme dos tazas de té.",
        },
        {
        segments: [
            { text: "ビールを" },
            { text: "三杯", ruby: "さんばい" },
            { text: "飲", ruby: "の" },
            { text: "みました。" }
        ],
        translation: "Tomé tres vasos de cerveza.",
        },
        {
        segments: [
            { text: "水", ruby: "みず" },
            { text: "を" },
            { text: "四杯", ruby: "よんはい" },
            { text: "飲", ruby: "の" },
            { text: "みました。" }
        ],
        translation: "Tomé cuatro vasos de agua.",
        },
        {
        segments: [
            { text: "ジュースを" },
            { text: "五杯", ruby: "ごはい" },
            { text: "飲", ruby: "の" },
            { text: "みました。" }
        ],
        translation: "Tomé cinco vasos de jugo.",
        },
        {
        segments: [
            { text: "牛乳", ruby: "ぎゅうにゅう" },
            { text: "を" },
            { text: "六杯", ruby: "ろっぱい" },
            { text: "飲", ruby: "の" },
            { text: "みました。" }
        ],
        translation: "Tomé seis vasos de leche.",
        },
        {
        segments: [
            { text: "ワインを" },
            { text: "七杯", ruby: "ななはい" },
            { text: "飲", ruby: "の" },
            { text: "みました。" }
        ],
        translation: "Tomé siete copas de vino.",
        },
        {
        segments: [
            { text: "スープを" },
            { text: "八杯", ruby: "はっぱい" },
            { text: "作", ruby: "つく" },
            { text: "りました。" }
        ],
        translation: "Preparé ocho tazones de sopa.",
        },
        {
        segments: [
            { text: "紅茶", ruby: "こうちゃ" },
            { text: "を" },
            { text: "九杯", ruby: "きゅうはい" },
            { text: "飲", ruby: "の" },
            { text: "みました。" }
        ],
        translation: "Tomé nueve tazas de té negro.",
        },
        {
        segments: [
            { text: "お酒", ruby: "おさけ" },
            { text: "を" },
            { text: "十杯", ruby: "じゅっぱい" },
            { text: "飲", ruby: "の" },
            { text: "みました。" }
        ],
        translation: "Tomé diez vasos de alcohol.",
        },
    ],
    },
  {
    counter: "回",
    reading: "かい",
    meaning: "número de veces / frecuencia",
    examples: [
        "練習（れんしゅう）",
        "試験（しけん）",
        "食事（しょくじ）",
        "電話（でんわ）",
        "旅行（りょこう）",
        "授業（あいさつ）",
        "運動（うんどう）",
        "会議（かいぎ）",
        "復習（ふくしゅう）",
        "質問（しつもん）"
    ],
    level: "N5",
    readings: [
        { num: 1, reading: "いっかい", note: "irregular" },
        { num: 2, reading: "にかい" },
        { num: 3, reading: "さんかい" },
        { num: 4, reading: "よんかい" },
        { num: 5, reading: "ごかい" },
        { num: 6, reading: "ろっかい", note: "irregular" },
        { num: 7, reading: "ななかい" },
        { num: 8, reading: "はっかい", note: "irregular" },
        { num: 9, reading: "きゅうかい" },
        { num: 10, reading: "じゅっかい", note: "irregular" },
    ],
    exampleSentences: [
        {
        segments: [
            { text: "一日", ruby: "いちにち" },
            { text: "に" },
            { text: "三回", ruby: "さんかい" },
            { text: "食事", ruby: "しょくじ" },
            { text: "します。" }
        ],
        translation: "Como tres veces al día.",
        },
        {
        segments: [
            { text: "この" },
            { text: "練習", ruby: "れんしゅう" },
            { text: "を" },
            { text: "一回", ruby: "いっかい" },
            { text: "してください。" }
        ],
        translation: "Haz este ejercicio una vez.",
        },
        {
        segments: [
            { text: "日本", ruby: "にほん" },
            { text: "へ" },
            { text: "二回", ruby: "にかい" },
            { text: "行", ruby: "い" },
            { text: "ったことがあります。" }
        ],
        translation: "He ido dos veces a Japón.",
        },
        {
        segments: [
            { text: "毎週", ruby: "まいしゅう" },
            { text: "三回", ruby: "さんかい" },
            { text: "運動", ruby: "うんどう" },
            { text: "します。" }
        ],
        translation: "Hago ejercicio tres veces por semana.",
        },
        {
        segments: [
            { text: "この" },
            { text: "漢字", ruby: "かんじ" },
            { text: "を" },
            { text: "四回", ruby: "よんかい" },
            { text: "書", ruby: "か" },
            { text: "いてください。" }
        ],
        translation: "Escribe este kanji cuatro veces.",
        },
        {
        segments: [
            { text: "先生", ruby: "せんせい" },
            { text: "に" },
            { text: "五回", ruby: "ごかい" },
            { text: "質問", ruby: "しつもん" },
            { text: "しました。" }
        ],
        translation: "Le hice cinco preguntas al profesor.",
        },
        {
        segments: [
            { text: "昨日", ruby: "きのう" },
            { text: "は" },
            { text: "六回", ruby: "ろっかい" },
            { text: "電話", ruby: "でんわ" },
            { text: "しました。" }
        ],
        translation: "Ayer llamé seis veces.",
        },
        {
        segments: [
            { text: "この" },
            { text: "映画", ruby: "えいが" },
            { text: "を" },
            { text: "七回", ruby: "ななかい" },
            { text: "見", ruby: "み" },
            { text: "ました。" }
        ],
        translation: "Vi esta película siete veces.",
        },
        {
        segments: [
            { text: "今月", ruby: "こんげつ" },
            { text: "は" },
            { text: "八回", ruby: "はっかい" },
            { text: "授業", ruby: "じゅぎょう" },
            { text: "があります。" }
        ],
        translation: "Este mes hay ocho clases.",
        },
        {
        segments: [
            { text: "同", ruby: "おな" },
            { text: "じ" },
            { text: "ところを" },
            { text: "九回", ruby: "きゅうかい" },
            { text: "復習", ruby: "ふくしゅう" },
            { text: "しました。" }
        ],
        translation: "Repasé la misma parte nueve veces.",
        },
        {
        segments: [
            { text: "この" },
            { text: "問題", ruby: "もんだい" },
            { text: "を" },
            { text: "十回", ruby: "じゅっかい" },
            { text: "練習", ruby: "れんしゅう" },
            { text: "しました。" }
        ],
        translation: "Practiqué este problema diez veces.",
        },
    ],
    },
    {
    counter: "階",
    reading: "かい",
    meaning: "pisos o plantas de un edificio",
    examples: [
        "ホテル",
        "ビル",
        "マンション",
        "デパート",
        "学校（がっこう）",
        "病院（びょういん）",
        "ビル",
        "会社（かいしゃ）"
    ],
    level: "N5",
    readings: [
        { num: 1, reading: "いっかい", note: "irregular" },
        { num: 2, reading: "にかい" },
        { num: 3, reading: "さんがい", note: "irregular" },
        { num: 4, reading: "よんかい" },
        { num: 5, reading: "ごかい" },
        { num: 6, reading: "ろっかい", note: "irregular" },
        { num: 7, reading: "ななかい" },
        { num: 8, reading: "はっかい", note: "irregular" },
        { num: 9, reading: "きゅうかい" },
        { num: 10, reading: "じっかい", note: "irregular" },
    ],
    exampleSentences: [
        {
        segments: [
            { text: "トイレは" },
            { text: "二階", ruby: "にかい" },
            { text: "です。" }
        ],
        translation: "El baño está en el segundo piso.",
        },
        {
        segments: [
            { text: "私", ruby: "わたし" },
            { text: "の" },
            { text: "部屋", ruby: "へや" },
            { text: "は" },
            { text: "三階", ruby: "さんがい" },
            { text: "にあります。" }
        ],
        translation: "Mi habitación está en el tercer piso.",
        },
        {
        segments: [
            { text: "受付", ruby: "うけつけ" },
            { text: "は" },
            { text: "一階", ruby: "いっかい" },
            { text: "です。" }
        ],
        translation: "La recepción está en el primer piso.",
        },
        {
        segments: [
            { text: "レストランは" },
            { text: "八階", ruby: "はっかい" },
            { text: "にあります。" }
        ],
        translation: "El restaurante está en el octavo piso.",
        },
        {
        segments: [
            { text: "会議室", ruby: "かいぎしつ" },
            { text: "は" },
            { text: "六階", ruby: "ろっかい" },
            { text: "です。" }
        ],
        translation: "La sala de reuniones está en el sexto piso.",
        },
        {
        segments: [
            { text: "このホテルは" },
            { text: "十階", ruby: "じっかい" },
            { text: "まであります。" }
        ],
        translation: "Este hotel tiene hasta diez pisos.",
        },
        {
        segments: [
            { text: "本屋", ruby: "ほんや" },
            { text: "は" },
            { text: "四階", ruby: "よんかい" },
            { text: "にあります。" }
        ],
        translation: "La librería está en el cuarto piso.",
        },
        {
        segments: [
            { text: "父", ruby: "ちち" },
            { text: "の" },
            { text: "会社", ruby: "かいしゃ" },
            { text: "は" },
            { text: "九階", ruby: "きゅうかい" },
            { text: "です。" }
        ],
        translation: "La empresa de mi padre está en el noveno piso.",
        },
        {
        segments: [
            { text: "売り場", ruby: "うりば" },
            { text: "は" },
            { text: "五階", ruby: "ごかい" },
            { text: "です。" }
        ],
        translation: "La sección de ventas está en el quinto piso.",
        },
        {
        segments: [
            { text: "エレベーターで" },
            { text: "七階", ruby: "ななかい" },
            { text: "へ" },
            { text: "行", ruby: "い" },
            { text: "きます。" }
        ],
        translation: "Voy al séptimo piso en ascensor.",
        },
        {
        segments: [
            { text: "このマンションの" },
            { text: "二階", ruby: "にかい" },
            { text: "に" },
            { text: "友", ruby: "とも" },
            { text: "だちが" },
            { text: "住", ruby: "す" },
            { text: "んでいます。" }
        ],
        translation: "Un amigo vive en el segundo piso de este edificio.",
        }
    ]
    },
];

// ─── Numbers 1-10 in Japanese ────────────────────────────────────────────────

export const NUMBERS: { num: number; kanji: string; reading: string }[] = [
  { num: 1,  kanji: "一", reading: "いち" },
  { num: 2,  kanji: "二", reading: "に"   },
  { num: 3,  kanji: "三", reading: "さん" },
  { num: 4,  kanji: "四", reading: "よん/し" },
  { num: 5,  kanji: "五", reading: "ご"   },
  { num: 6,  kanji: "六", reading: "ろく" },
  { num: 7,  kanji: "七", reading: "なな/しち" },
  { num: 8,  kanji: "八", reading: "はち" },
  { num: 9,  kanji: "九", reading: "きゅう/く" },
  { num: 10, kanji: "十", reading: "じゅう" },
];