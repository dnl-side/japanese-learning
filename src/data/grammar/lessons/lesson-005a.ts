//src/data/grammar/lessons/lesson-005a.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson005a: GrammarLesson = {
  id: "lesson-005a",
  slug: "numeros-1-99",
  order: 7,
  level: "N5",
  status: "ready",
  title: "Números 1–99",
  jpTitle: "かず 1〜99",
  shortTitle: "Números",
  description:
    "Cómo leer y formar números del 1 al 99 con una lógica clara, usando primero números arábigos y lectura en hiragana para que la base quede realmente comprensible.",
  estimatedMinutes: 40,
  categoryTags: ["fundamentos", "numeros", "lectura", "base"],
  grammarTags: ["1〜99", "じゅう", "unidad", "decena", "lectura"],
  searchTerms: [
    "numeros",
    "numeros 1 a 99",
    "lectura numeros japones",
    "unidad y decena",
    "numeros japones",
    "1-99",
  ],
  relatedLessonSlugs: [
    "wa-desu-basico",
    "preguntas-basicas-desu-ka",
    "pais-de-origen-shusshin",
    "nacionalidad-jin-mo",
    "idiomas-ga-dekimasu-wakarimasu",
  ],
  relatedVocabularyTags: ["numeros", "base"],
  objectives: [
    "Leer y formar números del 1 al 99 con una lógica clara.",
    "Pensar primero en el número arábigo y su lectura natural en hiragana.",
    "Reconocer que 10, 20, 30... 90 siguen un patrón estable.",
    "Preparar una base sólida para horas, edad, contadores y precios.",
  ],
  display: {
    rubyMode: "tap",
    bodyTextSize: "lg",
    japaneseTextSize: "xl",
    exampleTextSize: "2xl",
    spacing: "loose",
    preferWideLayout: true,
  },
  sections: [
    {
      id: "lesson-005a-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "En esta unidad vamos a construir la base numérica que después vas a usar en muchas otras partes del japonés. La idea no es memorizar 99 palabras aisladas, sino entender un sistema claro. Aquí el foco principal será ver el número como 16, 24 o 38, y asociarlo enseguida con su lectura natural en japonés.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Primero fijaremos las unidades como número + lectura:",
              jp: ruby("[1|いち] / [2|に] / [3|さん] / [4|よん] / [5|ご] / [6|ろく] / [7|なな] / [8|はち] / [9|きゅう]"),
            },
            {
              es: "Después veremos las decenas:",
              jp: ruby("[10|じゅう] / [20|にじゅう] / [30|さんじゅう] ... [90|きゅうじゅう]"),
            },
            {
              es: "Y finalmente armaremos números como:",
              jp: ruby("[16|じゅうろく] / [24|にじゅうよん] / [38|さんじゅうはち] / [99|きゅうじゅうきゅう]"),
            },
          ],
        },
      ],
    },
    {
      id: "lesson-005a-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "No memorices 99 formas sueltas",
          content:
            "La idea más importante de esta unidad es entender el patrón. Si dominas las unidades y entiendes cómo funciona じゅう, la mayoría de los números del 1 al 99 se vuelven predecibles.",
          bullets: [
            {
              jp: ruby("[1〜9|いち〜きゅう]"),
              es: "base de unidades",
            },
            {
              jp: ruby("[10|じゅう]"),
              es: "bloque central de decena",
            },
            {
              jp: ruby("[24|にじゅうよん]"),
              es: "20 + 4",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Piensa primero en el número tal como lo ves",
          content:
            "Para esta unidad, lo más claro es partir desde el número arábigo. Cuando ves 16, conviene que tu cabeza vaya directo a じゅうろく. El kanji numérico existe y lo veremos como apoyo, pero no debe entorpecer la comprensión base en esta etapa.",
          bullets: [
            {
              jp: ruby("[16|じゅうろく]"),
              es: "10 + 6",
            },
            {
              jp: ruby("[47|よんじゅうなな]"),
              es: "40 + 7",
            },
            {
              jp: ruby("[86|はちじゅうろく]"),
              es: "80 + 6",
            },
          ],
        },
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-005a-note-blocks",
              label: "Bloques de construcción",
              pattern: ruby("[24|にじゅうよん]"),
              meaning: "Piensa: dos decenas + cuatro.",
              translation:
                "Primero identificas la decena; después añades la unidad final.",
            },
            {
              id: "pattern-005a-note-study",
              label: "Cómo estudiarlo",
              pattern: ruby("[1〜9|いち〜きゅう] → [10〜90|じゅう〜きゅうじゅう] → [11〜99|じゅういち〜きゅうじゅうきゅう]"),
              meaning: "Ve por capas.",
              translation:
                "Si fijas bien las unidades y las decenas, la parte combinada se vuelve mucho más liviana.",
            },
            {
              id: "pattern-005a-note-kanji",
              label: "Kanji aquí es apoyo, no foco principal",
              pattern: ruby("[24|にじゅうよん] ↔ [二十四|にじゅうよん]"),
              meaning: "La lectura es la misma; cambia solo la forma de escritura.",
              translation:
                "En esta unidad priorizamos 24 con lectura. El kanji numérico queda como referencia útil, especialmente para vocabulario y etapas posteriores.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-005a-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-005a-1",
              label: "Unidades",
              pattern: ruby("[1|いち] / [2|に] / [3|さん] / [4|よん] / [5|ご] / [6|ろく] / [7|なな] / [8|はち] / [9|きゅう]"),
              meaning: "1–9",
              translation:
                "Estas son las piezas base de toda la unidad.",
              structure: [
                { slot: { jp: ruby("[1|いち]") }, value: "", note: "Lectura base." },
                { slot: { jp: ruby("[2|に]") }, value: "", note: "Lectura base." },
                { slot: { jp: ruby("[3|さん]") }, value: "", note: "Lectura base." },
                { slot: { jp: ruby("[4|よん]") }, value: "", note: "Usaremos よん de base, pero existe し y よ." },
                { slot: { jp: ruby("[5|ご]") }, value: "", note: "Lectura base." },
                { slot: { jp: ruby("[6|ろく]") }, value: "", note: "Lectura base." },
                { slot: { jp: ruby("[7|なな]") }, value: "", note: "Usaremos なな de base, pero existe しち." },
                { slot: { jp: ruby("[8|はち]") }, value: "", note: "Lectura base." },
                { slot: { jp: ruby("[9|きゅう]") }, value: "", note: "Usaremos きゅう de base, pero existe く." },
              ],
              notes: [
                {
                  es: "Primero deja estas unidades muy firmes; todo lo demás se construye sobre ellas.",
                },
              ],
            },
            {
              id: "pattern-005a-2",
              label: "Diez y decenas",
              pattern: ruby("[10|じゅう] / [20|にじゅう] / [30|さんじゅう] / [40|よんじゅう] / [50|ごじゅう] / [60|ろくじゅう] / [70|ななじゅう] / [80|はちじゅう] / [90|きゅうじゅう]"),
              meaning: "10, 20, 30... 90",
              translation:
                "Desde 20 en adelante, el patrón es muy estable: número base + じゅう.",
              structure: [
                { slot: { jp: ruby("[10|じゅう]") }, value: "", note: "Una decena." },
                { slot: { jp: ruby("[20|にじゅう]") }, value: "", note: "Dos decenas." },
                { slot: { jp: ruby("[30|さんじゅう]") }, value: "", note: "Tres decenas." },
                { slot: { jp: ruby("[40|よんじゅう]") }, value: "", note: "Cuatro decenas." },
                { slot: { jp: ruby("[50|ごじゅう]") }, value: "", note: "Cinco decenas." },
                { slot: { jp: ruby("[60|ろくじゅう]") }, value: "", note: "Seis decenas." },
                { slot: { jp: ruby("[70|ななじゅう]") }, value: "", note: "Siete decenas." },
                { slot: { jp: ruby("[80|はちじゅう]") }, value: "", note: "Ocho decenas." },
                { slot: { jp: ruby("[90|きゅうじゅう]") }, value: "", note: "Nueve decenas." },
              ],
              notes: [
                {
                  es: "Piensa estas formas como la columna vertebral del resto de la unidad.",
                },
              ],
            },
            {
              id: "pattern-005a-3",
              label: "Números combinados",
              pattern: ruby("[16|じゅうろく] / [24|にじゅうよん] / [35|さんじゅうご] / [47|よんじゅうなな] / [58|ごじゅうはち] / [86|はちじゅうろく] / [99|きゅうじゅうきゅう]"),
              meaning: "11–99",
              translation:
                "Una vez que tienes la decena, solo añades la unidad final si hace falta.",
              structure: [
                { slot: { jp: ruby("[16|じゅうろく]") }, value: "", note: "10 + 6" },
                { slot: { jp: ruby("[24|にじゅうよん]") }, value: "", note: "20 + 4" },
                { slot: { jp: ruby("[35|さんじゅうご]") }, value: "", note: "30 + 5" },
                { slot: { jp: ruby("[47|よんじゅうなな]") }, value: "", note: "40 + 7" },
                { slot: { jp: ruby("[58|ごじゅうはち]") }, value: "", note: "50 + 8" },
                { slot: { jp: ruby("[86|はちじゅうろく]") }, value: "", note: "80 + 6" },
                { slot: { jp: ruby("[99|きゅうじゅうきゅう]") }, value: "", note: "90 + 9" },
              ],
              notes: [
                {
                  es: "El orden no cambia: primero decena, después unidad final.",
                },
                {
                  es: "Aquí conviene mirar el número y leerlo, no depender todavía del kanji numérico.",
                },
              ],
            },
            {
              id: "pattern-005a-4",
              label: "Breakdown visual",
              pattern: ruby("[38|さんじゅうはち] = [30|さんじゅう] + [8|はち]"),
              meaning: "38 = 30 + 8",
              translation:
                "Desarmar el número en bloques te ayudará a leer más rápido y con menos confusión.",
              structure: [
                {
                  slot: { jp: ruby("[30|さんじゅう]") },
                  value: "decena",
                  note: "Primero identificas cuántas decenas hay.",
                },
                {
                  slot: { jp: ruby("[8|はち]") },
                  value: "unidad final",
                  note: "Después añades la unidad que sobra.",
                },
              ],
              notes: [
                {
                  es: "Este análisis por bloques es más importante que memorizar números sueltos sin estructura.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-005a-vocabulary",
      kind: "vocabulary",
      title: "Referencia con kanji numérico",
      description:
        "Aquí sí dejamos el apoyo en kanji, pero como referencia secundaria. Lo principal en esta unidad sigue siendo reconocer el número y leerlo con naturalidad.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 3,
          items: [
            { id: "num-1", jp: ruby("[一|いち]"), reading: "いち", meaning: "1", tags: ["unidad", "kanji"] },
            { id: "num-2", jp: ruby("[二|に]"), reading: "に", meaning: "2", tags: ["unidad", "kanji"] },
            { id: "num-3", jp: ruby("[三|さん]"), reading: "さん", meaning: "3", tags: ["unidad", "kanji"] },
            { id: "num-4", jp: ruby("[四|よん]"), reading: "よん", meaning: "4", tags: ["unidad", "kanji"] },
            { id: "num-5", jp: ruby("[五|ご]"), reading: "ご", meaning: "5", tags: ["unidad", "kanji"] },
            { id: "num-6", jp: ruby("[六|ろく]"), reading: "ろく", meaning: "6", tags: ["unidad", "kanji"] },
            { id: "num-7", jp: ruby("[七|なな]"), reading: "なな", meaning: "7", tags: ["unidad", "kanji"] },
            { id: "num-8", jp: ruby("[八|はち]"), reading: "はち", meaning: "8", tags: ["unidad", "kanji"] },
            { id: "num-9", jp: ruby("[九|きゅう]"), reading: "きゅう", meaning: "9", tags: ["unidad", "kanji"] },
            { id: "num-10", jp: ruby("[十|じゅう]"), reading: "じゅう", meaning: "10", tags: ["decena", "kanji"] },
            { id: "num-20", jp: ruby("[二十|にじゅう]"), reading: "にじゅう", meaning: "20", tags: ["decena", "kanji"] },
            { id: "num-30", jp: ruby("[三十|さんじゅう]"), reading: "さんじゅう", meaning: "30", tags: ["decena", "kanji"] },
            { id: "num-40", jp: ruby("[四十|よんじゅう]"), reading: "よんじゅう", meaning: "40", tags: ["decena", "kanji"] },
            { id: "num-50", jp: ruby("[五十|ごじゅう]"), reading: "ごじゅう", meaning: "50", tags: ["decena", "kanji"] },
            { id: "num-60", jp: ruby("[六十|ろくじゅう]"), reading: "ろくじゅう", meaning: "60", tags: ["decena", "kanji"] },
            { id: "num-70", jp: ruby("[七十|ななじゅう]"), reading: "ななじゅう", meaning: "70", tags: ["decena", "kanji"] },
            { id: "num-80", jp: ruby("[八十|はちじゅう]"), reading: "はちじゅう", meaning: "80", tags: ["decena", "kanji"] },
            { id: "num-90", jp: ruby("[九十|きゅうじゅう]"), reading: "きゅうじゅう", meaning: "90", tags: ["decena", "kanji"] },
          ],
        },
      ],
    },
    {
      id: "lesson-005a-examples",
      kind: "examples",
      title: "Ejemplos guiados",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "example-005a-1",
              jp: ruby("[11|じゅういち]です。"),
              es: "Es 11.",
              breakdown: [{ label: "Bloque", jp: ruby("[10|じゅう] + [1|いち]"), es: "" }],
            },
            {
              id: "example-005a-2",
              jp: ruby("[16|じゅうろく]です。"),
              es: "Es 16.",
              breakdown: [{ label: "Bloque", jp: ruby("[10|じゅう] + [6|ろく]"), es: "" }],
            },
            {
              id: "example-005a-3",
              jp: ruby("[20|にじゅう]です。"),
              es: "Es 20.",
              breakdown: [{ label: "Bloque", jp: ruby("[2|に] + [10|じゅう]"), es: "" }],
            },
            {
              id: "example-005a-4",
              jp: ruby("[24|にじゅうよん]です。"),
              es: "Es 24.",
              breakdown: [{ label: "Bloque", jp: ruby("[20|にじゅう] + [4|よん]"), es: "" }],
            },
            {
              id: "example-005a-5",
              jp: ruby("[38|さんじゅうはち]です。"),
              es: "Es 38.",
              breakdown: [{ label: "Bloque", jp: ruby("[30|さんじゅう] + [8|はち]"), es: "" }],
            },
            {
              id: "example-005a-6",
              jp: ruby("[46|よんじゅうろく]です。"),
              es: "Es 46.",
              breakdown: [{ label: "Bloque", jp: ruby("[40|よんじゅう] + [6|ろく]"), es: "" }],
            },
            {
              id: "example-005a-7",
              jp: ruby("[57|ごじゅうなな]です。"),
              es: "Es 57.",
              breakdown: [{ label: "Bloque", jp: ruby("[50|ごじゅう] + [7|なな]"), es: "" }],
            },
            {
              id: "example-005a-8",
              jp: ruby("[68|ろくじゅうはち]です。"),
              es: "Es 68.",
            },
            {
              id: "example-005a-9",
              jp: ruby("[79|ななじゅうきゅう]です。"),
              es: "Es 79.",
            },
            {
              id: "example-005a-10",
              jp: ruby("[88|はちじゅうはち]です。"),
              es: "Es 88.",
            },
            {
              id: "example-005a-11",
              jp: ruby("[99|きゅうじゅうきゅう]です。"),
              es: "Es 99.",
              notes: [
                {
                  es: "Es el último número de esta unidad antes de pasar a centenas.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-005a-contrast",
      kind: "contrast",
      title: "Errores comunes y contrastes clave",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-005a-1",
              label: "10 no lleva 1 delante",
              correct: {
                jp: ruby("[10|じゅう]"),
                es: "",
              },
              incorrect: {
                jp: ruby("[10|いちじゅう]"),
                es: "No se forma así en japonés.",
              },
              explanation:
                "Para 10 se usa solo じゅう. No se dice いちじゅう.",
            },
            {
              id: "contrast-005a-2",
              label: "El orden es decena → unidad",
              correct: {
                jp: ruby("[24|にじゅうよん]"),
                es: "",
              },
              incorrect: {
                jp: ruby("[42|よんじゅうに]"),
                es: "Eso sería 42, no 24.",
              },
              explanation:
                "Primero marcas cuántas decenas hay; después añades la unidad final.",
            },
            {
              id: "contrast-005a-3",
              label: "En esta unidad usamos よん, なな y きゅう",
              correct: {
                jp: ruby("[40|よんじゅう] / [70|ななじゅう] / [90|きゅうじゅう]"),
                es: "Lecturas base de trabajo para esta unidad.",
              },
              incorrect: {
                jp: ruby("[40|しじゅう] / [70|しちじゅう] / [90|くじゅう]"),
                es: "No son las formas base que fijamos aquí.",
              },
              explanation:
                "Aquí nos interesa dejar una base estable y clara antes de abrir variantes más adelante.",
            },
            {
              id: "contrast-005a-4",
              label: "Una misma lógica se repite",
              correct: {
                jp: ruby("[38|さんじゅうはち] / [68|ろくじゅうはち]"),
                es: "La unidad final se mantiene igual y solo cambia la decena.",
              },
              incorrect: {
                jp: ruby("Aprender todos los números."),
                es: "Esa forma de estudiarlo lo vuelve mucho más pesado.",
              },
              explanation:
                "Conviene pensar el sistema como bloques reutilizables, no como una lista infinita sin patrón.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-005a-warning",
      kind: "warning",
      title: "Qué conviene hacer aquí",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "Esta unidad necesita mucha repetición",
          content:
            "Los números parecen simples, pero si no los automatizas bien ahora, más adelante te frenarán en edad, contadores, precios, horas y muchas otras áreas. Conviene practicar poco tiempo cada día, pero con mucha constancia.",
          bullets: [
            {
              es: "Primero deja muy firmes:",
              jp: ruby("[1〜9|いち〜きゅう] / [10〜90|じゅう〜きゅうじゅう]"),
            },
            {
              es: "Después automatiza combinaciones como:",
              jp: ruby("[16|じゅうろく] / [24|にじゅうよん] / [38|さんじゅうはち] / [99|きゅうじゅうきゅう]"),
            },
            {
              es: "No corras todavía a centenas o miles. Primero domina esta base.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-005a-practice",
      kind: "practice",
      title: "Práctica guiada",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Di en voz alta las unidades varias veces:",
              jp: ruby("[1|いち]、[2|に]、[3|さん]、[4|よん]、[5|ご]、[6|ろく]、[7|なな]、[8|はち]、[9|きゅう]。"),
            },
            {
              es: "Haz lo mismo con las decenas:",
              jp: ruby("[10|じゅう]、[20|にじゅう]、[30|さんじゅう]、[40|よんじゅう]、[50|ごじゅう]、[60|ろくじゅう]、[70|ななじゅう]、[80|はちじゅう]、[90|きゅうじゅう]。"),
            },
            {
              es: "Lee números mezclados mirando primero el número:",
              jp: ruby("[24|にじゅうよん] / [37|さんじゅうなな] / [48|よんじゅうはち] / [99|きゅうじゅうきゅう]。"),
            },
            {
              es: "Desarma cada número en voz alta:",
              jp: ruby("[57|ごじゅうなな] = [50|ごじゅう] + [7|なな]。"),
            },
            {
              es: "Practica contrastes que suelen confundir:",
              jp: ruby("[14|じゅうよん] ↔ [40|よんじゅう] / [17|じゅうなな] ↔ [70|ななじゅう]。"),
            },
            {
              es: "Escribe una columna completa del 11 al 19, luego del 21 al 29, y así sucesivamente hasta sentir el patrón.",
            },
            {
              es: "Haz dictado contigo mismo o con otra persona usando números aleatorios del 1 al 99.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-005a-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Puedo leer y formar las unidades del",
              jp: ruby("[1|いち] al [9|きゅう]。"),
            },
            {
              es: "Puedo formar las decenas del",
              jp: ruby("[10|じゅう] al [90|きゅうじゅう]。"),
            },
            {
              es: "Puedo combinar bloques para leer números como",
              jp: ruby("[16|じゅうろく] / [24|にじゅうよん] / [38|さんじゅうはち] / [99|きゅうじゅうきゅう]。"),
            },
            {
              es: "Entiendo el mapa mental de",
              jp: ruby("decena + unidad"),
              note: "para los números combinados.",
            },
            {
              es: "Sé que el kanji numérico existe, pero en esta etapa mi foco principal es reconocer el número y leerlo con soltura.",
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-005a-quiz",
    title: "Quiz — Números 1–99",
    description:
      "Repaso amplio para comprobar si ya puedes leer, formar y distinguir números del 1 al 99 con seguridad.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "single-choice",
        prompt: {
          es: "¿Cuál es la lectura en hiragana de 8?",
        },
        choices: [
          { id: "a", label: { es: "はち" } },
          { id: "b", label: { es: "はっち" } },
          { id: "c", label: { es: "はつ" } },
          { id: "d", label: { es: "はし" } },
        ],
        correctChoiceId: "a",
        explanation: "La lectura base de 8 en esta unidad es はち.",
        relatedSectionIds: ["lesson-005a-vocabulary", "lesson-005a-structure"],
      },
      {
        id: "q2",
        type: "single-choice",
        prompt: {
          es: "¿Cuál es la lectura en hiragana de 15?",
        },
        choices: [
          { id: "a", label: { es: "ごじゅう" } },
          { id: "b", label: { es: "じゅうご" } },
          { id: "c", label: { es: "いちご" } },
          { id: "d", label: { es: "ごじゅういち" } },
        ],
        correctChoiceId: "b",
        explanation: "15 se forma como 10 + 5, por eso la lectura es じゅうご.",
        relatedSectionIds: ["lesson-005a-structure", "lesson-005a-examples"],
      },
      {
        id: "q3",
        type: "single-choice",
        prompt: {
          es: "¿Cuál es la lectura en hiragana de 40?",
        },
        choices: [
          { id: "a", label: { es: "しじゅう" } },
          { id: "b", label: { es: "よんじゅう" } },
          { id: "c", label: { es: "よじゅう" } },
          { id: "d", label: { es: "しちじゅう" } },
        ],
        correctChoiceId: "b",
        explanation: "En esta unidad trabajamos 40 como よんじゅう.",
        relatedSectionIds: ["lesson-005a-vocabulary", "lesson-005a-contrast"],
      },
      {
        id: "q4",
        type: "single-choice",
        prompt: {
          es: "¿Qué número corresponde a la lectura ごじゅうはち?",
        },
        choices: [
          { id: "a", label: { es: "48" } },
          { id: "b", label: { es: "85" } },
          { id: "c", label: { es: "58" } },
          { id: "d", label: { es: "68" } },
        ],
        correctChoiceId: "c",
        explanation: "ごじゅうはち = 50 + 8 = 58.",
        relatedSectionIds: ["lesson-005a-structure", "lesson-005a-examples"],
      },
      {
        id: "q5",
        type: "single-choice",
        prompt: {
          es: "¿Qué número corresponde a la lectura きゅうじゅういち?",
        },
        choices: [
          { id: "a", label: { es: "19" } },
          { id: "b", label: { es: "91" } },
          { id: "c", label: { es: "99" } },
          { id: "d", label: { es: "81" } },
        ],
        correctChoiceId: "b",
        explanation: "きゅうじゅういち = 90 + 1 = 91.",
        relatedSectionIds: ["lesson-005a-structure", "lesson-005a-examples"],
      },
      {
        id: "q6",
        type: "single-choice",
        prompt: {
          es: "¿Cuál corresponde a 29?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[29|にじゅうきゅう]") } },
          { id: "b", label: { jp: ruby("[92|きゅうじゅうに]") } },
          { id: "c", label: { jp: ruby("[29|にきゅうじゅう]") } },
          { id: "d", label: { jp: ruby("[29|にじゅうきゅうじゅう]") } },
        ],
        correctChoiceId: "a",
        explanation: "29 se construye como 20 + 9.",
        relatedSectionIds: ["lesson-005a-structure", "lesson-005a-examples"],
      },
      {
        id: "q7",
        type: "single-choice",
        prompt: {
          es: "¿Cuál corresponde a 86?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[68|ろくじゅうはち]") } },
          { id: "b", label: { jp: ruby("[86|はちじゅうろく]") } },
          { id: "c", label: { jp: ruby("[86|はちじゅうはち]") } },
          { id: "d", label: { jp: ruby("[68|はちじゅうろく]") } },
        ],
        correctChoiceId: "b",
        explanation: "86 = 80 + 6, por eso la lectura correcta es はちじゅうろく.",
        relatedSectionIds: ["lesson-005a-structure", "lesson-005a-examples"],
      },
      {
        id: "q8",
        type: "single-choice",
        prompt: {
          es: "¿Qué bloque explica correctamente 64?",
        },
        choices: [
          { id: "a", label: { es: "ろくじゅう + よん" } },
          { id: "b", label: { es: "よんじゅう + ろく" } },
          { id: "c", label: { es: "ろく + よんじゅう" } },
          { id: "d", label: { es: "ごじゅう + じゅうよん" } },
        ],
        correctChoiceId: "a",
        explanation: "64 se entiende como 60 + 4.",
        relatedSectionIds: ["lesson-005a-concept", "lesson-005a-structure"],
      },
      {
        id: "q9",
        type: "single-choice",
        prompt: {
          es: "¿Qué bloque explica correctamente 47?",
        },
        choices: [
          { id: "a", label: { es: "よんじゅう + なな" } },
          { id: "b", label: { es: "ななじゅう + よん" } },
          { id: "c", label: { es: "さんじゅう + じゅうなな" } },
          { id: "d", label: { es: "よん + ななじゅう" } },
        ],
        correctChoiceId: "a",
        explanation: "47 = 40 + 7.",
        relatedSectionIds: ["lesson-005a-structure", "lesson-005a-practice"],
      },
      {
        id: "q10",
        type: "single-choice",
        prompt: {
          es: "¿Cómo se lee 10 por sí solo?",
        },
        choices: [
          { id: "a", label: { es: "いちじゅう" } },
          { id: "b", label: { es: "じゅう" } },
          { id: "c", label: { es: "じゅっ" } },
          { id: "d", label: { es: "とおじゅう" } },
        ],
        correctChoiceId: "b",
        explanation: "10 se lee simplemente じゅう.",
        relatedSectionIds: ["lesson-005a-structure", "lesson-005a-contrast"],
      },
      {
        id: "q11",
        type: "single-choice",
        prompt: {
          es: "¿Cuál corresponde a 17?",
        },
        choices: [
          { id: "a", label: { es: "ななじゅう" } },
          { id: "b", label: { es: "じゅうなな" } },
          { id: "c", label: { es: "ななじゅういち" } },
          { id: "d", label: { es: "じゅうしち" } },
        ],
        correctChoiceId: "b",
        explanation: "17 se construye como 10 + 7, y aquí fijamos じゅうなな.",
        relatedSectionIds: ["lesson-005a-structure", "lesson-005a-contrast"],
      },
      {
        id: "q12",
        type: "single-choice",
        prompt: {
          es: "¿Cuál corresponde a 88?",
        },
        choices: [
          { id: "a", label: { es: "はちじゅうはち" } },
          { id: "b", label: { es: "はちじゅうきゅう" } },
          { id: "c", label: { es: "はっじゅうはち" } },
          { id: "d", label: { es: "はちじゅうはっ" } },
        ],
        correctChoiceId: "a",
        explanation: "88 = 80 + 8, así que la lectura es はちじゅうはち.",
        relatedSectionIds: ["lesson-005a-structure", "lesson-005a-examples"],
      },
      {
        id: "q13",
        type: "single-choice",
        prompt: {
          es: "¿Cuál de estas parejas suele confundirse porque cambia el orden de decena y unidad?",
        },
        choices: [
          { id: "a", label: { es: "14 ↔ 40" } },
          { id: "b", label: { es: "20 ↔ 21" } },
          { id: "c", label: { es: "60 ↔ 61" } },
          { id: "d", label: { es: "80 ↔ 81" } },
        ],
        correctChoiceId: "a",
        explanation: "14 y 40 cambian completamente según dónde esté la decena y dónde esté la unidad.",
        relatedSectionIds: ["lesson-005a-contrast", "lesson-005a-practice"],
      },
      {
        id: "q14",
        type: "order-sentence",
        prompt: {
          es: "Ordena los bloques para formar 26.",
        },
        tokens: [
          { id: "tok-26-1", value: "20", label: { jp: ruby("[20|にじゅう]") } },
          { id: "tok-26-2", value: "6", label: { jp: ruby("[6|ろく]") } },
        ],
        correctOrder: ["20", "6"],
        answerLabel: {
          jp: ruby("[26|にじゅうろく]"),
          es: "26",
        },
        explanation: "26 = 20 + 6.",
        relatedSectionIds: ["lesson-005a-structure", "lesson-005a-practice"],
      },
      {
        id: "q15",
        type: "order-sentence",
        prompt: {
          es: "Ordena los bloques para formar 73.",
        },
        tokens: [
          { id: "tok-73-1", value: "70", label: { jp: ruby("[70|ななじゅう]") } },
          { id: "tok-73-2", value: "3", label: { jp: ruby("[3|さん]") } },
        ],
        correctOrder: ["70", "3"],
        answerLabel: {
          jp: ruby("[73|ななじゅうさん]"),
          es: "73",
        },
        explanation: "73 = 70 + 3.",
        relatedSectionIds: ["lesson-005a-structure", "lesson-005a-practice"],
      },
      {
        id: "q16",
        type: "order-sentence",
        prompt: {
          es: "Ordena los bloques para formar 91.",
        },
        tokens: [
          { id: "tok-91-1", value: "90", label: { jp: ruby("[90|きゅうじゅう]") } },
          { id: "tok-91-2", value: "1", label: { jp: ruby("[1|いち]") } },
        ],
        correctOrder: ["90", "1"],
        answerLabel: {
          jp: ruby("[91|きゅうじゅういち]"),
          es: "91",
        },
        explanation: "91 = 90 + 1.",
        relatedSectionIds: ["lesson-005a-structure", "lesson-005a-practice"],
      },
      {
        id: "q17",
        type: "fill-blank",
        prompt: {
          es: "Escribe en hiragana la lectura de 58.",
        },
        acceptedAnswers: ["ごじゅうはち"],
        placeholder: "Escribe la lectura completa",
        explanation: "58 = 50 + 8, por eso la lectura es ごじゅうはち.",
        relatedSectionIds: ["lesson-005a-structure", "lesson-005a-examples"],
      },
      {
        id: "q18",
        type: "fill-blank",
        prompt: {
          es: "Completa para formar 34:",
          jp: ruby("[30|さんじゅう]___"),
        },
        acceptedAnswers: ["4", "よん", "四"],
        placeholder: "Escribe la unidad final",
        explanation: "34 = 30 + 4.",
        relatedSectionIds: ["lesson-005a-structure", "lesson-005a-practice"],
      },
      {
        id: "q19",
        type: "fill-blank",
        prompt: {
          es: "Completa para formar 80:",
          jp: ruby("[8|はち]___"),
        },
        acceptedAnswers: ["10", "じゅう", "十"],
        placeholder: "Escribe el bloque que falta",
        explanation: "80 = 8 + 10.",
        relatedSectionIds: ["lesson-005a-vocabulary", "lesson-005a-structure"],
      },
      {
        id: "q20",
        type: "fill-blank",
        prompt: {
          es: "Escribe en hiragana la lectura de 99.",
        },
        acceptedAnswers: ["きゅうじゅうきゅう"],
        placeholder: "Escribe la lectura completa",
        explanation: "99 = 90 + 9, así que la lectura es きゅうじゅうきゅう.",
        relatedSectionIds: ["lesson-005a-structure", "lesson-005a-examples"],
      },
    ],
  },
};

export default lesson005a;
