import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";


export const lesson001: GrammarLesson = {
  id: "lesson-001",
  slug: "wa-desu-basico",
  order: 1,
  level: "N5",
  status: "ready",
  title: "は + です",
  jpTitle: "〜は〜です",
  shortTitle: "Oración básica",
  description: "Cómo formar una oración básica para presentar a una persona o decir qué es alguien de manera simple.",
  estimatedMinutes: 20,
  categoryTags: ["fundamentos", "particulas", "copula", "presentacion"],
  grammarTags: ["は", "です", "oracion nominal", "frase basica"],
  searchTerms: ["wa", "desu", "soy", "es", "oracion basica", "tema", "particula"],
  relatedLessonSlugs: [],
  relatedVocabularyTags: ["personas", "pronombres", "nombres"],
  objectives: [
    "Entender que は marca el tema de la oración.",
    "Entender que です cierra la oración de forma cortés.",
    "Reconocer que en japonés la idea principal se cierra al final.",
    "Leer ejemplos con kanji y ruby desde el inicio sin perder claridad.",
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
      id: "lesson-001-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "Esta es la primera estructura realmente útil del japonés: decir quién eres, qué eres o quién es otra persona. En esta lección todavía no vamos a conjugar verbos; nos vamos a concentrar en una oración simple, clara y muy frecuente.",
        },
        {
          type: "bullet-list",
          items: [
            "El tema de la oración se marca con は.",
            "La idea principal se cierra con です.",
            "En esta primera lección trabajaremos con oraciones nominales muy simples.",
          ],
        },
      ],
    },
    {
      id: "lesson-001-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Piensa la estructura así",
          content:
            "En vez de pensar literalmente en un verbo “ser” idéntico al español, te conviene pensar que en japonés primero se presenta el tema y luego se dice qué es ese tema de forma cortés.",
          bullets: [
            "A は ... → “en cuanto a A”",
            "... です → cierre cortés de la oración",
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Qué es una partícula",
          content:
            "En español no usamos partículas como piezas separadas para marcar la función de cada palabra. En japonés, las partículas ayudan a indicar qué papel cumple una parte de la oración.",
          bullets: [
            "En esta lección solo verás una: は, que marca el tema."
          ],
        },
        {
          type: "bullet-list",
          items: [
            "は no se traduce palabra por palabra como “yo” o “él”; marca de qué estamos hablando.",
            "です da un tono neutro y educado, ideal para empezar.",
            "En esta lección trabajaremos con afirmaciones simples.",
          ],
        },
      ],
    },
    {
      id: "lesson-001-structure",
      kind: "structure",
      title: "Estructura base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-001",
              label: "Patrón principal",
              pattern: ruby("A は B です。"),
              meaning: "A es B.",
              translation: "En cuanto a A, es B.",
              structure: [
                {
                  slot: "A",
                  value: "tema",
                  note: "La persona o cosa de la que estás hablando.",
                },
                {
                  slot: "は",
                  value: "partícula de tema",
                  note: "Se escribe は, pero en este uso se lee わ.",
                },
                {
                  slot: "B",
                  value: "categoría o identificación básica",
                  note: "En esta lección trabajaremos con nombres y categorías simples como 学生.",
                },
                {
                  slot: "です",
                  value: "cierre cortés",
                  note: "Da forma neutra y educada a la oración.",
                },
              ],
              notes: [
                "Para esta primera lección, B será principalmente un sustantivo simple.",
                "Primero domina esta base antes de pasar a preguntas, negación o categorías más amplias.",
              ],
            },
          ],
        },
      ],
    },
    {
        id: "lesson-001-vocabulary",
        kind: "vocabulary",
        title: "Vocabulario mínimo para usar la estructura",
        description: "Estas palabras bastan para empezar a formar tus primeras oraciones.",
        blocks: [
            {
            type: "vocabulary-grid",
            columns: 2,
            items: [
                {
                id: "vocab-watashi",
                jp: ruby("[私|わたし]"),
                reading: "わたし",
                meaning: "yo",
                tags: ["pronombre"],
                },
                {
                id: "vocab-anata",
                jp: ruby("あなた"),
                reading: "あなた",
                meaning: "tú / usted",
                notes: ["En japonés real no siempre se usa tanto como el “tú” del español."],
                tags: ["pronombre"],
                },
                {
                id: "vocab-kare",
                jp: ruby("[彼|かれ]"),
                reading: "かれ",
                meaning: "él",
                tags: ["pronombre"],
                },
                {
                id: "vocab-kanojo",
                jp: ruby("[彼女|かのじょ]"),
                reading: "かのじょ",
                meaning: "ella",
                tags: ["pronombre"],
                },
                {
                id: "vocab-gakusei",
                jp: ruby("[学生|がくせい]"),
                reading: "がくせい",
                meaning: "estudiante",
                tags: ["categoria"],
                },
                {
                id: "vocab-sensei",
                jp: ruby("[先生|せんせい]"),
                reading: "せんせい",
                meaning: "profesor / docente",
                tags: ["categoria"],
                },
                {
                id: "vocab-tanaka-san",
                jp: ruby("[田中|たなか]さん"),
                reading: "たなかさん",
                meaning: "señor / señora Tanaka",
                tags: ["nombre"],
                },
                {
                id: "vocab-maria-san",
                jp: ruby("マリアさん"),
                reading: "まりあさん",
                meaning: "María",
                tags: ["nombre", "katakana"],
                },
            ],
            },
        ],
    },
    {
      id: "lesson-001-examples",
      kind: "examples",
      title: "Ejemplos base",
      blocks: [
        {
          type: "example-group",
          items: [
            {
                id: "example-001",
                jp: ruby("[私|わたし]は[学生|がくせい]です。"),
                es: "Yo soy estudiante.",
                breakdown: [
                { label: "Tema", jp: ruby("[私|わたし]") },
                { label: "Categoría", jp: ruby("[学生|がくせい]") },
                { label: "Cierre", jp: ruby("です") },
                ],
            },
            {
                id: "example-002",
                jp: ruby("[田中|たなか]さんは[学生|がくせい]です。"),
                es: "Tanaka es estudiante.",
            },
            {
                id: "example-003",
                jp: ruby("マリアさんは[学生|がくせい]です。"),
                es: "María es estudiante.",
            },
            {
                id: "example-004",
                jp: ruby("[彼|かれ]は[学生|がくせい]です。"),
                es: "Él es estudiante.",
            },
            {
                id: "example-005",
                jp: ruby("[彼女|かのじょ]は[学生|がくせい]です。"),
                es: "Ella es estudiante.",
            },
            {
                id: "example-006",
                jp: ruby("[田中|たなか]さんは[先生|せんせい]です。"),
                es: "Tanaka es profesor.",
                notes: ["Este ejemplo solo extiende la misma estructura con otra categoría simple."],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-001-contrast",
      kind: "contrast",
      title: "Errores comunes de principiante",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
                id: "contrast-001",
                label: "No olvides la partícula",
                correct: {
                jp: ruby("[私|わたし]は[学生|がくせい]です。"),
                es: "Yo soy estudiante.",
                },
                incorrect: {
                jp: ruby("[私|わたし][学生|がくせい]です。"),
                es: "Falta la partícula de tema.",
                },
                explanation:
                "En esta etapa conviene dominar la estructura completa: A は B です。",
            },
            {
                id: "contrast-002",
                label: "La parte final va al final",
                correct: {
                jp: ruby("[私|わたし]は[学生|がくせい]です。"),
                es: "Yo soy estudiante.",
                },
                incorrect: {
                jp: ruby("[私|わたし]はです[学生|がくせい]。"),
                es: "Orden incorrecto.",
                },
                explanation:
                "En japonés, la parte que completa la idea principal se coloca al final. En esta lección, esa parte es です.",
            },
            {
                id: "contrast-003",
                label: "Recuerda la pronunciación de は",
                correct: {
                jp: ruby("[私|わたし]は[学生|がくせい]です。"),
                es: "Aquí は se lee わ.",
                },
                explanation:
                "Aunque se escribe は, cuando funciona como partícula de tema se pronuncia わ.",
            },
            ],
        },
      ],
    },
    {
      id: "lesson-001-warning",
      kind: "warning",
      title: "Qué todavía no estamos viendo",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "Aún no mezcles todo",
          content:
            "Todavía no estamos trabajando preguntas con か, negación con じゃありません ni pasado con でした. Primero conviene que la base afirmativa te salga natural.",
          bullets: [
            "Primero domina A は B です。",
            "Luego ya será fácil extender a pregunta, negación y pasado.",
          ],
        },
      ],
    },
    {
      id: "lesson-001-practice",
      kind: "practice",
      title: "Práctica guiada antes del quiz",
      blocks: [
        {
          type: "bullet-list",
          items: [
            "Cambia solo el tema: 私 → 田中さん → マリアさん → 彼 → 彼女.",
            "Cambia solo la categoría: 学生 → 先生.",
            "Lee en voz alta cada oración fijándote en que は se pronuncia わ.",
            "Forma tres oraciones usando el patrón A は B です。",
            "Identifica qué parte de la oración aparece al final.",
          ],
        },
      ],
    },
    {
      id: "lesson-001-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            "Sé que は marca el tema.",
            "Sé que です cierra la oración de forma cortés.",
            "Sé que en esta lección la idea principal se completa al final.",
            "Puedo formar oraciones básicas con A は B です。",
            "Puedo leer la estructura con kanji y ruby sin perder claridad.",
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-001-quiz",
    title: "Quiz — は + です",
    description: "Repaso corto para comprobar si la estructura ya te sale natural.",
    passScore: 70,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "single-choice",
        prompt: {
            jp: ruby("[私|わたし]は[学生|がくせい]です。"),
            es: "¿Qué significa esta oración?",
        },
        choices: [
            { id: "a", label: { es: "Yo soy estudiante." } },
            { id: "b", label: { es: "Yo estudio japonés." } },
            { id: "c", label: { es: "Ese estudiante es mío." } },
            { id: "d", label: { es: "La escuela es grande." } },
        ],
        correctChoiceId: "a",
        explanation: "La estructura A は B です identifica al tema con una categoría.",
        relatedSectionIds: ["lesson-001-structure", "lesson-001-examples"],
        },
      {
        id: "q2",
        type: "single-choice",
        prompt: {
            es: "¿Qué marca は en esta lección?",
        },
        choices: [
            { id: "a", label: { es: "El tema de la oración." } },
            { id: "b", label: { es: "El objeto directo." } },
            { id: "c", label: { es: "El lugar." } },
            { id: "d", label: { es: "La negación." } },
        ],
        correctChoiceId: "a",
        explanation: "は marca de qué estamos hablando: el tema.",
        relatedSectionIds: ["lesson-001-concept", "lesson-001-structure"],
        },
      {
        id: "q3",
        type: "single-choice",
        prompt: {
            es: "¿Cómo se pronuncia は cuando funciona como partícula de tema en esta lección?",
        },
        choices: [
            { id: "a", label: { es: "ha" } },
            { id: "b", label: { es: "wa" } },
            { id: "c", label: { es: "ba" } },
            { id: "d", label: { es: "pa" } },
        ],
        correctChoiceId: "b",
        explanation: "Aquí は se escribe は, pero se pronuncia わ.",
        relatedSectionIds: ["lesson-001-contrast"],
        },
      {
        id: "q4",
        type: "single-choice",
        prompt: {
            es: "Elige la mejor forma de decir: “Tanaka es estudiante”.",
        },
        choices: [
            { id: "a", label: { jp: ruby("[田中|たなか]さん[学生|がくせい]です。") } },
            { id: "b", label: { jp: ruby("[田中|たなか]さんは[学生|がくせい]です。") } },
            { id: "c", label: { jp: ruby("[田中|たなか]さんです[学生|がくせい]。") } },
            { id: "d", label: { jp: ruby("[田中|たなか]さんを[学生|がくせい]です。") } },
        ],
        correctChoiceId: "b",
        explanation: "La estructura base es A は B です。",
        relatedSectionIds: ["lesson-001-structure"],
        },
      {
        id: "q5",
        type: "order-sentence",
        prompt: {
            es: "Ordena los elementos para formar “Yo soy estudiante”.",
        },
        tokens: [
            {
            id: "tok-desu",
            value: "です",
            label: { jp: ruby("です") },
            },
            {
            id: "tok-gakusei",
            value: "学生",
            label: { jp: ruby("[学生|がくせい]") },
            },
            {
            id: "tok-watashi",
            value: "私",
            label: { jp: ruby("[私|わたし]") },
            },
            {
            id: "tok-wa",
            value: "は",
            label: { jp: ruby("は") },
            },
        ],
        correctOrder: ["私", "は", "学生", "です"],
        answerLabel: {
            jp: ruby("[私|わたし]は[学生|がくせい]です。"),
        },
        explanation:
            "Primero va el tema, luego la partícula は, después la categoría y al final です.",
        relatedSectionIds: ["lesson-001-structure"],
        },
      {
        id: "q6",
        type: "single-choice",
        prompt: {
            es: "¿Qué función cumple です en esta lección?",
        },
        choices: [
            { id: "a", label: { es: "Marca el objeto directo." } },
            { id: "b", label: { es: "Cierra la oración de forma cortés." } },
            { id: "c", label: { es: "La convierte en pasado." } },
            { id: "d", label: { es: "Siempre significa “hacer”." } },
        ],
        correctChoiceId: "b",
        explanation: "En esta lección, です funciona como cierre cortés de la oración.",
        relatedSectionIds: ["lesson-001-concept", "lesson-001-structure"],
        },
    ],
  },
};

export default lesson001;