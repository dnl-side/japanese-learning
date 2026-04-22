import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson002: GrammarLesson = {
  id: "lesson-002",
  slug: "presentacion-simple-profesiones",
  order: 2,
  level: "N5",
  status: "ready",
  title: "Presentación simple",
  jpTitle: "はじめまして・よろしくお願いします",
  shortTitle: "Presentación",
  description:
    "Cómo presentarte con tu nombre y una profesión o rol básico usando frases fijas naturales.",
  estimatedMinutes: 25,
  categoryTags: ["fundamentos", "presentacion", "saludos", "profesiones"],
  grammarTags: [
    "はじめまして",
    "よろしくお願いします",
    "A は B です",
    "omision del tema",
  ],
  searchTerms: [
    "presentacion",
    "hajimemashite",
    "yoroshiku onegaishimasu",
    "profesiones",
    "soy estudiante",
    "soy ingeniero",
  ],
  relatedLessonSlugs: ["wa-desu-basico"],
  relatedVocabularyTags: ["presentacion", "profesiones", "nombres"],
  objectives: [
    "Usar la estructura A は B です para presentarte de forma natural.",
    "Entender el uso básico de はじめまして y よろしくお願いします.",
    "Presentarte con tu nombre y una profesión o rol simple.",
    "Reconocer que en una presentación se puede omitir 私は cuando el contexto ya está claro.",
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
      id: "lesson-002-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "En la lección anterior aprendiste la estructura básica A は B です. Ahora vamos a usar esa misma base para hacer una presentación simple y natural: decir tu nombre, decir qué eres y cerrar con una frase fija muy usada en japonés.",
        },
        {
          type: "bullet-list",
          items: [
            "La base gramatical sigue siendo A は B です.",
            "Añadimos frases fijas típicas de presentación.",
            "Todavía no veremos preguntas con か; aquí nos concentramos en presentarte.",
          ],
        },
      ],
    },
    {
      id: "lesson-002-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Qué cambia respecto a la lesson 001",
          content:
            "La gramática base no cambia: seguimos usando は y です. Lo nuevo aquí es el uso real de esa estructura dentro de una auto-presentación simple y natural.",
          bullets: [
            {
                es: "Nombre",
                jp: ruby("[私|わたし]は[マリア|まりあ]です。"),
            },
            {
                es: "Profesión o rol",
                jp: ruby("[学生|がくせい]です。"),
            },
            {
                es: "Cierre social",
                jp: ruby("よろしくお[願|ねが]いします。"),
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "No todo se traduce palabra por palabra",
          content:
            "Expresiones como はじめまして y よろしくおねがいします no funcionan como una traducción exacta palabra por palabra al español. Conviene aprenderlas como bloques completos que cumplen una función social dentro de la presentación.",
          bullets: [
            {
            jp: ruby("[初|はじ]めまして"),
            es: "Se usa al conocer a alguien por primera vez.",
            },
            {
            jp: ruby("よろしくお[願|ねが]いします。"),
            es: "Cierra la presentación con cortesía y buena disposición.",
            },
        ],
        },
        {
        type: "bullet-list",
            items: [
                {
                    jp: ruby("[私|わたし]は"),
                    es: "En una presentación simple, repetirlo en cada frase puede sonar pesado.",
                },
                {
                    jp: ruby("[学生|がくせい]です / [先生|せんせい]です"),
                    es: "Si el contexto ya está claro, se puede omitir el tema y dejar solo la categoría.",
                },
                "Esta lección sigue usando afirmaciones simples.",
            ],
        },
      ],
    },
    {
      id: "lesson-002-structure",
      kind: "structure",
      title: "Estructuras base de la presentación",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-002-1",
              label: "Presentación mínima",
              pattern: [
                { text: "初", ruby: "はじ" },
                { text: "めまして。" },
                { text: "私", ruby: "わたし" },
                { text: "はAです。" },
                { text: "Bです。" },
                { text: "よろしくお" },
                { text: "願", ruby: "ねが" },
                { text: "いします。" },
              ],
              meaning: "Mucho gusto. Soy A. Soy B. Encantado / quedo a su disposición.",
              translation:
                "Se presenta el saludo inicial, luego el nombre, luego la categoría o profesión, y finalmente el cierre cortés.",
              structure: [
                {
                  slot: "A",
                  value: "nombre",
                  note: "Tu nombre o el nombre con el que te presentas.",
                },
                {
                  slot: "B",
                  value: "profesión o rol",
                  note: {
                    es: "Categorías simples como:",
                    jp: ruby("[学生|がくせい]、[先生|せんせい]、[医者|いしゃ]、[エンジニア|えんじにあ]、[会社員|かいしゃいん]。"),
                  },
                },
              ],
              notes: [
                "No hace falta repetir 私は en cada línea si el tema ya está claro.",
                "Esta estructura sirve como auto-presentación básica.",
              ],
            },
            {
              id: "pattern-002-2",
              label: "Decir tu nombre",
              pattern: ruby("[私|わたし]は A です。"),
              meaning: "Yo soy A.",
              translation: "En cuanto a mí, soy A.",
              structure: [
                {
                  slot: "私",
                  value: "yo",
                  note: "Puedes usarlo al inicio para dejar claro el tema.",
                },
                {
                slot: "A",
                value: "nombre",
                note: {
                    es: "Tu nombre, por ejemplo:",
                    jp: [
                    { text: "マリア", ruby: "まりあ" },
                    { text: " o " },
                    { text: "田中", ruby: "たなか" },
                    { text: "。" },
                    ],
                },
                },
              ],
              notes: [
                "En una presentación básica suele aparecer primero el nombre.",
              ],
            },
            {
              id: "pattern-002-3",
              label: "Decir tu profesión o rol",
              pattern: ruby("[私|わたし]は B です。 / B です。"),
              meaning: "Yo soy B. / Soy B.",
              translation:
                "Si el contexto ya está claro, puedes omitir 私は y dejar solo la categoría.",
              structure: [
                {
                  slot: "B",
                  value: "categoría simple",
                  note:{
                    es:"Por ejemplo:",
                    jp:[
                        {text:"学生", ruby:"がくせい"},
                        {text:", "},
                        {text:"先生", ruby:"せんせい"},
                        {text:", "},
                        {text:"医者", ruby:"いしゃ"},
                        {text:", "},
                        {text:"エンジニア", ruby:"えんじにあ"},
                        {text:", "},
                        {text:"会社員", ruby:"かいしゃいん"},
                        {text:"."},
                    ]
                  },
                }, 
              ],
              notes: [
                "La segunda forma suena más natural cuando el hablante ya quedó claro en la frase anterior.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-002-vocabulary",
      kind: "vocabulary",
      title: "Frases y vocabulario mínimo para presentarte",
      description:
        "Aquí recuperamos la base de la lesson 001 y añadimos las expresiones y profesiones más útiles para una presentación simple.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 2,
          items: [
            {
              id: "vocab-hajimemashite",
              jp: ruby("[初|はじ]めまして。"),
              reading: "はじめまして",
              meaning: "mucho gusto / encantado de conocerle",
              tags: ["frase fija", "presentacion"],
            },
            {
              id: "vocab-yoroshiku",
              jp: ruby("よろしくお[願|ねが]いします。"),
              reading: "よろしくおねがいします",
              meaning: "encantado / quedo a su disposición / mucho gusto",
              notes: [
                "No tiene una traducción exacta palabra por palabra; funciona como cierre cortés de la presentación.",
              ],
              tags: ["frase fija", "presentacion"],
            },
            {
              id: "vocab-gakusei",
              jp: ruby("[学生|がくせい]"),
              reading: "がくせい",
              meaning: "estudiante",
              tags: ["profesion", "rol"],
            },
            {
              id: "vocab-sensei",
              jp: ruby("[先生|せんせい]"),
              reading: "せんせい",
              meaning: "profesor / docente",
              tags: ["profesion", "rol"],
            },
            {
              id: "vocab-isha",
              jp: ruby("[医者|いしゃ]"),
              reading: "いしゃ",
              meaning: "médico",
              tags: ["profesion"],
            },
            {
              id: "vocab-engineer",
              jp: [{ text: "エンジニア", ruby: "えんじにあ" }],
              reading: "えんじにあ",
              meaning: "ingeniero",
              tags: ["profesion", "katakana"],
            },
            {
              id: "vocab-kaishain",
              jp: ruby("[会社員|かいしゃいん]"),
              reading: "かいしゃいん",
              meaning: "empleado de empresa",
              tags: ["profesion"],
            },
            {
              id: "vocab-maria",
              jp: [{ text: "マリア", ruby: "まりあ" }, { text: "さん" }],
              reading: "まりあさん",
              meaning: "María",
              tags: ["nombre", "katakana"],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-002-examples",
      kind: "examples",
      title: "Ejemplos de presentación simple",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "example-002-1",
              jp: [
                { text: "初", ruby: "はじ" },
                { text: "めまして。" },
                { text: "私", ruby: "わたし" },
                { text: "は" },
                { text: "マリア", ruby: "まりあ" },
                { text: "です。" },
                { text: "学生", ruby: "がくせい" },
                { text: "です。" },
                { text: "よろしくお" },
                { text: "願", ruby: "ねが" },
                { text: "いします。" },
              ],
              es: "Mucho gusto. Soy María. Soy estudiante. Encantada.",
              breakdown: [
                { label: "Apertura", jp: ruby("[初|はじ]めまして。") },
                { label: "Nombre", jp: [{ text: "私", ruby: "わたし" }, { text: "は" }, { text: "マリア", ruby: "まりあ" }, { text: "です。" }] },
                { label: "Rol", jp: ruby("[学生|がくせい]です。") },
                { label: "Cierre", jp: ruby("よろしくお[願|ねが]いします。") },
              ],
            },
            {
              id: "example-002-2",
              jp: [
                { text: "初", ruby: "はじ" },
                { text: "めまして。" },
                { text: "田中", ruby: "たなか" },
                { text: "です。" },
                { text: "先生", ruby: "せんせい" },
                { text: "です。" },
                { text: "よろしくお" },
                { text: "願", ruby: "ねが" },
                { text: "いします。" },
              ],
              es: "Mucho gusto. Soy Tanaka. Soy profesor. Encantado.",
              notes: [
                "Aquí se omite 私は porque el hablante ya queda claro por el contexto de presentación.",
              ],
            },
            {
              id: "example-002-3",
              jp: [
                { text: "私", ruby: "わたし" },
                { text: "は" },
                { text: "エンジニア", ruby: "えんじにあ" },
                { text: "です。" },
              ],
              es: "Yo soy ingeniero.",
            },
            {
              id: "example-002-4",
              jp: ruby("[私|わたし]は[医者|いしゃ]です。"),
              es: "Yo soy médico.",
            },
            {
              id: "example-002-5",
              jp: ruby("[私|わたし]は[会社員|かいしゃいん]です。"),
              es: "Yo soy empleado de empresa.",
            },
            {
              id: "example-002-6",
              jp: [
                { text: "アナ", ruby: "あな" },
                { text: "です。" },
                { text: "エンジニア", ruby: "えんじにあ" },
                { text: "です。" },
              ],
              es: "Soy Ana. Soy ingeniera.",
              notes: [
                "Una vez que el tema ya está claro, el japonés permite una presentación más compacta.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-002-contrast",
      kind: "contrast",
      title: "Errores comunes de presentación",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-002-1",
              label: "No repitas 私は innecesariamente",
              correct: {
                jp: [
                  { text: "初", ruby: "はじ" },
                  { text: "めまして。" },
                  { text: "私", ruby: "わたし" },
                  { text: "は" },
                  { text: "マリア", ruby: "まりあ" },
                  { text: "です。" },
                  { text: "学生", ruby: "がくせい" },
                  { text: "です。" },
                ],
                es: "Mucho gusto. Soy María. Soy estudiante.",
              },
              incorrect: {
                jp: [
                  { text: "初", ruby: "はじ" },
                  { text: "めまして。" },
                  { text: "私", ruby: "わたし" },
                  { text: "は" },
                  { text: "マリア", ruby: "まりあ" },
                  { text: "です。" },
                  { text: "私", ruby: "わたし" },
                  { text: "は" },
                  { text: "学生", ruby: "がくせい" },
                  { text: "です。" },
                ],
                es: "Gramaticalmente posible, pero más pesada.",
              },
              explanation:
                "Repetir 私は no siempre está mal, pero en una presentación corta suele sonar más natural omitirlo después de la primera frase.",
            },
            {
              id: "contrast-002-2",
              label: "No olvides です con la profesión",
              correct: {
                jp: ruby("[私|わたし]は[医者|いしゃ]です。"),
                es: "Yo soy médico.",
              },
              incorrect: {
                jp: ruby("[私|わたし]は[医者|いしゃ]。"),
                es: "Falta el cierre cortés.",
              },
              explanation:
                "En esta etapa seguimos usando la estructura completa para que la presentación quede clara y correcta.",
            },
            {
              id: "contrast-002-3",
              label: "よろしお願いします va al cierre",
              correct: {
                jp: [
                  { text: "初", ruby: "はじ" },
                  { text: "めまして。" },
                  { text: "私", ruby: "わたし" },
                  { text: "は" },
                  { text: "マリア", ruby: "まりあ" },
                  { text: "です。" },
                  { text: "学生", ruby: "がくせい" },
                  { text: "です。" },
                  { text: "よろしくお" },
                  { text: "願", ruby: "ねが" },
                  { text: "いします。" },
                ],
                es: "Orden natural de una presentación simple.",
              },
              incorrect: {
                jp: [
                  { text: "よろしくお" },
                  { text: "願", ruby: "ねが" },
                  { text: "いします。" },
                  { text: "私", ruby: "わたし" },
                  { text: "は" },
                  { text: "マリア", ruby: "まりあ" },
                  { text: "です。" },
                ],
                es: "Orden poco natural para esta situación.",
              },
              explanation:
                "En una presentación básica, よろしくお願いします funciona mejor como cierre después de decir quién eres.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-002-warning",
      kind: "warning",
      title: "Qué todavía no estamos viendo",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "Todavía no mezcles preguntas ni negación",
          content:
            "En esta lección seguimos usando solo afirmaciones simples. Todavía no veremos ですか, はい / いいえ ni ではありません.",
          bullets: [
            "Primero domina la presentación simple.",
            "Luego será más fácil convertir esa misma base en preguntas y respuestas.",
          ],
        },
      ],
    },
    {
      id: "lesson-002-practice",
      kind: "practice",
      title: "Práctica guiada",
      blocks: [
        {
            type: "bullet-list",
            items: [
            {
                es: "Cambia solo el nombre:",
                jp: ruby("[田中|たなか]です。→ [マリア|まりあ]です。→ [アナ|あな]です。"),
            },
            {
                es: "Cambia solo la profesión:",
                jp: ruby("[学生|がくせい]です。→ [先生|せんせい]です。→ [医者|いしゃ]です。→ [エンジニア|えんじにあ]です。"),
            },
            {
                es: "Lee en voz alta una presentación completa fijándote en el orden natural.",
            },
            {
                es: "Prueba dos versiones: una con",
                jp: ruby("[私|わたし]は"),
                note: "y otra más compacta sin repetirlo.",
            },
            {
                es: "Escribe una presentación propia de tres o cuatro frases.",
            },
            ],
        },
      ],
    },
    {
      id: "lesson-002-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
            type: "checklist",
            items: [
            {
                es: "Puedo presentarme con mi nombre usando",
                jp: ruby("です。"),
            },
            {
                es: "Puedo decir una profesión o rol básico.",
            },
            {
                es: "Entiendo el uso básico de",
                jp: ruby("[初|はじ]めまして / よろしくお[願|ねが]いします。"),
            },
            {
                es: "Sé que no hace falta repetir",
                jp: ruby("[私|わたし]は"),
                note: "en cada frase si el contexto ya está claro.",
            },
            {
                es: "Todavía no mezclo preguntas ni negación en esta etapa.",
            },
            ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-002-quiz",
    title: "Quiz — Presentación simple",
    description:
      "Repaso corto para comprobar si ya puedes hacer una auto-presentación básica y natural.",
    passScore: 70,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "single-choice",
        prompt: {
          es: "¿Cuándo se usa はじめまして?",
        },
        choices: [
          {
            id: "a",
            label: {
              es: "Cuando conoces a alguien por primera vez.",
            },
          },
          {
            id: "b",
            label: {
              es: "Cuando respondes sí a una pregunta.",
            },
          },
          {
            id: "c",
            label: {
              es: "Cuando niegas una oración con です.",
            },
          },
          {
            id: "d",
            label: {
              es: "Cuando pides permiso para entrar.",
            },
          },
        ],
        correctChoiceId: "a",
        explanation:
          "はじめまして es una frase fija que se usa al conocer a alguien por primera vez.",
        relatedSectionIds: ["lesson-002-concept", "lesson-002-vocabulary"],
      },
      {
        id: "q2",
        type: "single-choice",
        prompt: {
          es: "Elige la presentación más natural para: “Mucho gusto. Soy María. Soy estudiante. Encantada.”",
        },
        choices: [
          {
            id: "a",
            label: {
              jp: [
                { text: "初", ruby: "はじ" },
                { text: "めまして。" },
                { text: "私", ruby: "わたし" },
                { text: "は" },
                { text: "マリア", ruby: "まりあ" },
                { text: "です。" },
                { text: "学生", ruby: "がくせい" },
                { text: "です。" },
                { text: "よろしくお" },
                { text: "願", ruby: "ねが" },
                { text: "いします。" },
              ],
            },
          },
          {
            id: "b",
            label: {
              jp: [
                { text: "よろしくお" },
                { text: "願", ruby: "ねが" },
                { text: "いします。" },
                { text: "私", ruby: "わたし" },
                { text: "は" },
                { text: "マリア", ruby: "まりあ" },
                { text: "です。" },
                { text: "初", ruby: "はじ" },
                { text: "めまして。" },
              ],
            },
          },
          {
            id: "c",
            label: {
              jp: [
                { text: "初", ruby: "はじ" },
                { text: "めまして。" },
                { text: "私", ruby: "わたし" },
                { text: "は" },
                { text: "マリア", ruby: "まりあ" },
                { text: "。" },
                { text: "学生", ruby: "がくせい" },
                { text: "。" },
              ],
            },
          },
          {
            id: "d",
            label: {
              jp: [
                { text: "初", ruby: "はじ" },
                { text: "めまして。" },
                { text: "私", ruby: "わたし" },
                { text: "は" },
                { text: "マリア", ruby: "まりあ" },
                { text: "ですか。" },
                { text: "学生", ruby: "がくせい" },
                { text: "です。" },
              ],
            },
          },
        ],
        correctChoiceId: "a",
        explanation:
          "La opción correcta mantiene el orden natural: saludo inicial, nombre, rol y cierre cortés.",
        relatedSectionIds: ["lesson-002-structure", "lesson-002-examples"],
      },
      {
        id: "q3",
        type: "single-choice",
        prompt: {
          es: "¿Qué función cumple よろしくおねがいします en esta lección?",
        },
        choices: [
          {
            id: "a",
            label: { es: "Marca una pregunta." },
          },
          {
            id: "b",
            label: { es: "Cierra la presentación con cortesía." },
          },
          {
            id: "c",
            label: { es: "Convierte la oración en pasado." },
          },
          {
            id: "d",
            label: { es: "Sirve para negar una profesión." },
          },
        ],
        correctChoiceId: "b",
        explanation:
          "En esta lección, よろしくおねがいします funciona como un cierre cortés y natural dentro de la presentación.",
        relatedSectionIds: ["lesson-002-concept", "lesson-002-vocabulary"],
      },
      {
        id: "q4",
        type: "single-choice",
        prompt: {
          es: "Elige la mejor forma de decir: “Yo soy ingeniero”.",
        },
        choices: [
          {
            id: "a",
            label: {
              jp: [
                { text: "私", ruby: "わたし" },
                { text: "エンジニア", ruby: "えんじにあ" },
                { text: "です。" },
              ],
            },
          },
          {
            id: "b",
            label: {
              jp: [
                { text: "私", ruby: "わたし" },
                { text: "は" },
                { text: "エンジニア", ruby: "えんじにあ" },
                { text: "です。" },
              ],
            },
          },
          {
            id: "c",
            label: {
              jp: [
                { text: "私", ruby: "わたし" },
                { text: "は" },
                { text: "です" },
                { text: "エンジニア", ruby: "えんじにあ" },
              ],
            },
          },
          {
            id: "d",
            label: {
              jp: [
                { text: "私", ruby: "わたし" },
                { text: "を" },
                { text: "エンジニア", ruby: "えんじにあ" },
                { text: "です。" },
              ],
            },
          },
        ],
        correctChoiceId: "b",
        explanation:
          "La estructura correcta sigue siendo A は B です.",
        relatedSectionIds: ["lesson-002-structure"],
      },
      {
        id: "q5",
        type: "order-sentence",
        prompt: {
          es: "Ordena los elementos para formar: “Yo soy ingeniero”.",
        },
        tokens: [
          {
            id: "tok-desu",
            value: "です",
            label: { jp: ruby("です") },
          },
          {
            id: "tok-watashi",
            value: "私",
            label: { jp: ruby("[私|わたし]") },
          },
          {
            id: "tok-engineer",
            value: "エンジニア",
            label: { jp: [{ text: "エンジニア", ruby: "えんじにあ" }] },
          },
          {
            id: "tok-wa",
            value: "は",
            label: { jp: ruby("は") },
          },
        ],
        correctOrder: ["私", "は", "エンジニア", "です"],
        answerLabel: {
          jp: [
            { text: "私", ruby: "わたし" },
            { text: "は" },
            { text: "エンジニア", ruby: "えんじにあ" },
            { text: "です。" },
          ],
        },
        explanation:
          "Primero va el tema, luego la partícula は, después la profesión y al final です.",
        relatedSectionIds: ["lesson-002-structure"],
      },
      {
        id: "q6",
        type: "single-choice",
        prompt: {
            es: "Después de decir esto, ¿qué continuación suena más natural en una presentación simple?",
            jp: ruby("[私|わたし]は[マリア|まりあ]です。"),
        },
        choices: [
            {
            id: "a",
            label: { jp: ruby("[学生|がくせい]です。") },
            },
            {
            id: "b",
            label: { jp: ruby("[私|わたし]は[学生|がくせい]です。") },
            },
            {
            id: "c",
            label: { jp: ruby("[学生|がくせい]。") },
            },
            {
            id: "d",
            label: { jp: ruby("です[学生|がくせい]。") },
            },
        ],
        correctChoiceId: "a",
        explanation:
            "La opción B no es imposible, pero la A suena más natural porque evita repetir 私は innecesariamente.",
        relatedSectionIds: ["lesson-002-contrast", "lesson-002-examples"],
        },
      {
        id: "q7",
        type: "fill-blank",
        prompt: {
            es: "Completa el cierre natural de esta presentación:",
            jp: ruby("[初|はじ]めまして。[私|わたし]は[マリア|まりあ]です。[学生|がくせい]です。_____"),
        },
        acceptedAnswers: [
            "よろしくお願いします",
            "よろしくお願いします。",
            "よろしくおねがいします",
            "よろしくおねがいします。",
        ],
        placeholder: "Escribe la frase de cierre",
        explanation:
            "El cierre natural de esta presentación es よろしくお願いします.",
        relatedSectionIds: ["lesson-002-concept", "lesson-002-vocabulary"],
        },
    ],
  },
};

export default lesson002;