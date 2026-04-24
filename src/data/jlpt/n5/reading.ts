import { ruby } from "@/app/components/ui/Ruby";
import type { JlptItemTypeGuide, JlptQuestion } from "../types";

export const n5ReadingGuides: JlptItemTypeGuide[] = [
  {
    id: "n5-reading-short-guide",
    level: "N5",
    section: "reading",
    itemType: "short-passage",
    title: "Texto corto",
    jpTitle: "短文読解",
    shortDescription: "Leer un texto breve y responder una pregunta directa sobre información explícita.",
    whatItTests: [
      "Detectar quién, qué, dónde o cuándo dentro de un texto corto.",
      "No perderse con palabras conocidas usadas en varias frases.",
      "Relacionar pregunta y frase exacta del texto.",
    ],
    solvingSteps: [
      "Lee primero la pregunta para saber qué información buscar.",
      "Subraya mentalmente nombres, lugares, tiempos y objetos.",
      "Busca la frase que responde directamente la pregunta.",
      "Descarta opciones que aparecen en el texto pero responden otra cosa.",
    ],
    commonTraps: [
      "Elegir una palabra que sí aparece, pero no responde la pregunta.",
      "Confundir quién hace la acción.",
      "Traducir todo y quedarse sin foco.",
    ],
    starterQuestionId: "n5-reading-short-001",
  },
  {
    id: "n5-reading-info-guide",
    level: "N5",
    section: "reading",
    itemType: "information-retrieval",
    title: "Búsqueda de información",
    jpTitle: "情報検索",
    shortDescription: "Leer avisos, horarios o notas y ubicar el dato necesario.",
    whatItTests: [
      "Encontrar datos concretos sin leer como traducción lineal.",
      "Cruzar una condición simple con hora, lugar o precio.",
      "Evitar distractores cercanos dentro de una tabla o aviso.",
    ],
    solvingSteps: [
      "Primero lee qué dato pide la pregunta.",
      "Busca números, horas, días o lugares destacados.",
      "Comprueba si hay una condición como 今日, 明日, 午前 o 午後.",
      "Responde solo después de cruzar el dato con esa condición.",
    ],
    commonTraps: [
      "Elegir la primera hora que aparece.",
      "Confundir 午前 y 午後.",
      "No notar si el aviso habla de hoy o mañana.",
    ],
    starterQuestionId: "n5-reading-info-001",
  },
];

export const n5ReadingQuestions: JlptQuestion[] = [
  {
    id: "n5-reading-short-001",
    level: "N5",
    section: "reading",
    itemType: "short-passage",
    questionKind: "single-choice",
    instruction: { es: "Lee el texto y responde la pregunta." },
    passage: {
      title: "友だちの部屋",
      body: ruby("[私|わたし]の[友達|ともだち]の[部屋|へや]は[広|ひろ]いです。[部屋|へや]の[中|なか]に[机|つくえ]とベッドがあります。[机|つくえ]の[上|うえ]に[日本語|にほんご]の[本|ほん]があります。"),
      translation: "La habitación de mi amigo es amplia. Dentro hay un escritorio y una cama. Encima del escritorio hay un libro de japonés.",
    },
    prompt: { es: "¿Dónde está el libro de japonés?" },
    choices: [
      { id: "a", label: { es: "Dentro de la cama." } },
      { id: "b", label: { es: "Encima del escritorio." } },
      { id: "c", label: { es: "Fuera de la habitación." } },
      { id: "d", label: { es: "Debajo del escritorio." } },
    ],
    correctChoiceId: "b",
    explanation: {
      hint: "Busca la frase que contiene 日本語の本.",
      strategy: [
        "La pregunta pide ubicación del libro.",
        "El texto dice 机の上に日本語の本があります.",
        "机の上に significa encima del escritorio.",
      ],
      whyCorrect: "El libro está 机の上に, encima del escritorio.",
      whyWrong: {
        a: "ベッド aparece en el texto, pero no como lugar del libro.",
        c: "外 no aparece para el libro.",
        d: "下 no aparece; el texto dice 上.",
      },
    },
    tags: ["reading", "位置", "の"],
    source: "original",
  },
  {
    id: "n5-reading-short-002",
    level: "N5",
    section: "reading",
    itemType: "short-passage",
    questionKind: "single-choice",
    instruction: { es: "Lee el texto y responde la pregunta." },
    passage: {
      title: "朝の予定",
      body: ruby("[明日|あした]は[学校|がっこう]に[行|い]きます。[朝|あさ]七時に[起|お]きます。八時に[家|いえ]を[出|で]ます。九時から[授業|じゅぎょう]です。"),
    },
    prompt: { es: "¿A qué hora empieza la clase?" },
    choices: [
      { id: "a", label: { jp: ruby("七時") } },
      { id: "b", label: { jp: ruby("八時") } },
      { id: "c", label: { jp: ruby("九時") } },
      { id: "d", label: { jp: ruby("十時") } },
    ],
    correctChoiceId: "c",
    explanation: {
      hint: "起きます y 家を出ます no son lo mismo que 授業です.",
      strategy: [
        "La pregunta pide inicio de clase.",
        "七時 es levantarse; 八時 es salir de casa.",
        "九時から授業です indica el inicio de la clase.",
      ],
      whyCorrect: "九時から授業です significa que la clase empieza a las nueve.",
      whyWrong: {
        a: "七時 es la hora de levantarse.",
        b: "八時 es la hora de salir de casa.",
        d: "十時 no aparece en el texto.",
      },
    },
    tags: ["reading", "time"],
    source: "original",
  },
  {
    id: "n5-reading-info-001",
    level: "N5",
    section: "reading",
    itemType: "information-retrieval",
    questionKind: "single-choice",
    instruction: { es: "Lee el aviso y responde la pregunta." },
    passage: {
      title: "図書館のお知らせ",
      body: ruby("[図書館|としょかん]\n[月曜日|げつようび]〜[金曜日|きんようび]：午前九時〜午後六時\n[土曜日|どようび]：午前十時〜午後四時\n[日曜日|にちようび]：休み"),
      note: "El salto de línea representa un aviso simple.",
    },
    prompt: { es: "El sábado, ¿hasta qué hora está abierta la biblioteca?" },
    choices: [
      { id: "a", label: { jp: ruby("午後四時") } },
      { id: "b", label: { jp: ruby("午後六時") } },
      { id: "c", label: { jp: ruby("午前九時") } },
      { id: "d", label: { jp: ruby("休み") } },
    ],
    correctChoiceId: "a",
    explanation: {
      hint: "No uses la línea de lunes a viernes. La pregunta dice sábado.",
      strategy: [
        "Busca 土曜日 en el aviso.",
        "La línea dice 午前十時〜午後四時.",
        "La hora después de 〜 es la hora de cierre.",
      ],
      whyCorrect: "El sábado cierra a las 午後四時.",
      whyWrong: {
        b: "午後六時 corresponde a lunes a viernes.",
        c: "午前九時 corresponde a la hora de apertura de lunes a viernes.",
        d: "休み corresponde al domingo.",
      },
    },
    tags: ["reading", "notice", "time"],
    source: "original",
  },
];
