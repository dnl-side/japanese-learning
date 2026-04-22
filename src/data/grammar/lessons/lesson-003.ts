import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson003: GrammarLesson = {
  id: "lesson-003",
  slug: "preguntas-basicas-desu-ka",
  order: 3,
  level: "N5",
  status: "ready",
  title: "Preguntas básicas",
  jpTitle: "〜ですか・はい・いいえ",
  shortTitle: "Preguntas y respuestas",
  description:
    "Cómo convertir oraciones básicas en preguntas y responder de forma natural con sí, no, confirmación y negación.",
  estimatedMinutes: 28,
  categoryTags: ["fundamentos", "preguntas", "respuestas", "copula"],
  grammarTags: [
    "ですか",
    "はい",
    "いいえ",
    "そうです",
    "違います",
    "ではありません",
    "じゃありません",
  ],
  searchTerms: [
    "desu ka",
    "preguntas basicas",
    "hai",
    "iie",
    "sou desu",
    "chigaimasu",
    "dewa arimasen",
    "ja arimasen",
  ],
  relatedLessonSlugs: ["wa-desu-basico", "presentacion-simple-profesiones"],
  relatedVocabularyTags: ["preguntas", "respuestas", "profesiones"],
  objectives: [
    "Formar preguntas simples con か.",
    "Responder afirmativamente con はい y そうです.",
    "Responder negativamente con いいえ, 違います, ではありません y じゃありません.",
    "Distinguir entre una respuesta completa y una respuesta más compacta y natural.",
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
      id: "lesson-003-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "Hasta ahora podías afirmar cosas sobre ti o sobre otra persona. En esta lección vas a usar esa misma base para preguntar y responder de forma simple: confirmar, negar y contestar con expresiones más naturales.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Convertiremos la base",
              jp: ruby("A は B です。"),
              note: "en pregunta con か.",
            },
            {
              es: "Aprenderás respuestas afirmativas y negativas cortas y naturales.",
            },
            {
              es: "Todavía no veremos pasado ni preguntas abiertas.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-003-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "La pregunta nace de la misma estructura",
          content:
            "No necesitas aprender una oración completamente nueva. La base sigue siendo la misma que ya conoces: A は B です. Lo nuevo es que ahora puedes convertirla en pregunta añadiendo か al final.",
          bullets: [
            {
              jp: ruby("A は B です。"),
              es: "afirmación simple",
            },
            {
              jp: ruby("A は B ですか。"),
              es: "pregunta simple",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Dos maneras de responder",
          content:
            "En japonés puedes responder repitiendo la información completa o usando una respuesta más compacta cuando el contexto ya está claro.",
          bullets: [
            {
              jp: ruby("[はい]、[学生|がくせい]です。"),
              es: "respuesta afirmativa completa",
            },
            {
              jp: ruby("[はい]、そうです。"),
              es: "respuesta afirmativa compacta",
            },
            {
              jp: ruby("[いいえ]、[学生|がくせい]ではありません。"),
              es: "respuesta negativa completa",
            },
            {
              jp: ruby("[いいえ]、[違|ちが]います。"),
              es: "respuesta negativa compacta",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Dos negativas que verás juntas",
          content:
            "En esta lección veremos juntas ではありません y じゃありません. Ambas entran en el japonés educado, pero no suenan exactamente igual.",
          bullets: [
            {
              jp: ruby("ではありません"),
              es: "más rígida, más escrita o más formal",
            },
            {
              jp: ruby("じゃありません"),
              es: "más natural en conversación educada",
            },
          ],
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Cuando la información anterior ya está clara,",
              jp: ruby("そうです / [違|ちが]います"),
              note: "suenan muy naturales.",
            },
            {
              es: "Si quieres dejar la información explícita, puedes responder con la oración completa.",
            },
            {
              es: "Esta lección sigue trabajando solo con presente no pasado.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-003-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-003-1",
              label: "Pregunta básica",
              pattern: ruby("A は B ですか。"),
              meaning: "¿A es B?",
              translation: "La partícula か convierte la oración en pregunta.",
              structure: [
                {
                  slot: "A",
                  value: "tema",
                  note: "La persona o cosa de la que se está hablando.",
                },
                {
                  slot: "B",
                  value: "categoría",
                  note: {
                    es: "Suele ser un nombre o una categoría simple como:",
                    jp: ruby("[学生|がくせい]、[先生|せんせい]、[看護師|かんごし]、[店員|てんいん]。"),
                  },
                },
                {
                  slot: "か",
                  value: "marca de pregunta",
                  note: "Va al final y convierte la oración en pregunta.",
                },
              ],
              notes: [
                "La base sigue siendo la misma de las lecciones anteriores.",
              ],
            },
            {
              id: "pattern-003-2",
              label: "Respuesta afirmativa",
              pattern: ruby("[はい]、B です。 / [はい]、そうです。"),
              meaning: "Sí, soy/es B. / Sí, así es.",
              translation:
                "Puedes responder repitiendo la información o con una forma más compacta.",
              structure: [
                {
                  slot: "はい",
                  value: "sí",
                  note: "Respuesta afirmativa básica.",
                },
                {
                  slot: "そうです",
                  value: "así es",
                  note: "Muy útil cuando la información ya quedó clara en la pregunta.",
                },
              ],
              notes: [
                "No hace falta repetir toda la oración cada vez.",
              ],
            },
            {
              id: "pattern-003-3",
              label: "Respuesta negativa",
              pattern: ruby("[いいえ]、B ではありません。 / [いいえ]、B じゃありません。 / [いいえ]、[違|ちが]います。"),
              meaning: "No, no soy/es B. / No, eso no es así.",
              translation:
                "La respuesta negativa puede ser completa o más compacta según el contexto.",
              structure: [
                {
                  slot: "いいえ",
                  value: "no",
                  note: "Respuesta negativa básica.",
                },
                {
                  slot: "ではありません",
                  value: "negación más rígida",
                  note: "Suena más formal o más escrita.",
                },
                {
                  slot: "じゃありません",
                  value: "negación conversacional educada",
                  note: "Muy común en japonés hablado.",
                },
                {
                  slot: "違います",
                  value: "eso no es / está equivocado",
                  note: "Muy natural cuando niegas la afirmación anterior sin repetirla completa.",
                },
              ],
              notes: [
                "違います no repite la categoría; niega la idea anterior como bloque.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-003-vocabulary",
      kind: "vocabulary",
      title: "Vocabulario nuevo para preguntar y responder",
      description:
        "Aquí aparecen las respuestas nuevas y algunas profesiones adicionales para practicar preguntas simples.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 2,
          items: [
            {
              id: "vocab-hai",
              jp: ruby("[はい]"),
              reading: "はい",
              meaning: "sí",
              tags: ["respuesta"],
            },
            {
              id: "vocab-iie",
              jp: ruby("[いいえ]"),
              reading: "いいえ",
              meaning: "no",
              tags: ["respuesta"],
            },
            {
              id: "vocab-soudesu",
              jp: ruby("そうです。"),
              reading: "そうです",
              meaning: "así es / sí, correcto",
              tags: ["respuesta"],
            },
            {
              id: "vocab-chigaimasu",
              jp: ruby("[違|ちが]います。"),
              reading: "ちがいます",
              meaning: "no es así / está equivocado",
              tags: ["respuesta"],
            },
            {
              id: "vocab-dewaarimasen",
              jp: ruby("ではありません。"),
              reading: "ではありません",
              meaning: "no es / no soy",
              notes: ["Más rígida y más pesada que じゃありません."],
              tags: ["negacion"],
            },
            {
              id: "vocab-jaarimasen",
              jp: ruby("じゃありません。"),
              reading: "じゃありません",
              meaning: "no es / no soy",
              notes: ["Muy común en conversación educada."],
              tags: ["negacion"],
            },
            {
              id: "vocab-kangoshi",
              jp: ruby("[看護師|かんごし]"),
              reading: "かんごし",
              meaning: "enfermero / enfermera",
              tags: ["profesion"],
            },
            {
              id: "vocab-tenin",
              jp: ruby("[店員|てんいん]"),
              reading: "てんいん",
              meaning: "dependiente / empleado de tienda",
              tags: ["profesion"],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-003-examples",
      kind: "examples",
      title: "Ejemplos de preguntas y respuestas",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "example-003-1",
              jp: ruby("[田中|たなか]さんは[学生|がくせい]ですか。 [はい]、[学生|がくせい]です。"),
              es: "¿Tanaka es estudiante? Sí, es estudiante.",
              breakdown: [
                { label: "Pregunta", jp: ruby("[田中|たなか]さんは[学生|がくせい]ですか。") },
                { label: "Respuesta", jp: ruby("[はい]、[学生|がくせい]です。") },
              ],
            },
            {
              id: "example-003-2",
              jp: ruby("[マリア|まりあ]さんは[先生|せんせい]ですか。 [いいえ]、[先生|せんせい]ではありません。 [看護師|かんごし]です。"),
              es: "¿María es profesora? No, no es profesora. Es enfermera.",
              notes: [
                "Aquí la negación va completa y luego se corrige con la categoría correcta.",
              ],
            },
            {
              id: "example-003-3",
              jp: ruby("[あなた]は[エンジニア|えんじにあ]ですか。 [はい]、そうです。"),
              es: "¿Eres ingeniero? Sí, así es.",
              notes: [
                "そうです evita repetir la profesión completa.",
              ],
            },
            {
              id: "example-003-4",
              jp: ruby("[田中|たなか]さんは[医者|いしゃ]ですか。 [いいえ]、[違|ちが]います。 [先生|せんせい]です。"),
              es: "¿Tanaka es médico? No, no es así. Es profesor.",
              notes: [
                "違います niega la afirmación anterior como bloque.",
              ],
            },
            {
              id: "example-003-5",
              jp: ruby("[アナ|あな]さんは[店員|てんいん]ですか。 [いいえ]、[店員|てんいん]じゃありません。 [会社員|かいしゃいん]です。"),
              es: "¿Ana trabaja en una tienda? No, no es dependienta. Es empleada de empresa.",
              notes: [
                "じゃありません suena más conversacional que ではありません.",
              ],
            },
            {
              id: "example-003-6",
              jp: ruby("[山田|やまだ]さんは[看護師|かんごし]ですか。 [はい]、そうです。"),
              es: "¿Yamada es enfermero? Sí, así es.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-003-contrast",
      kind: "contrast",
      title: "Errores comunes al preguntar y responder",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-003-1",
              label: "No olvides か al final",
              correct: {
                jp: ruby("[田中|たなか]さんは[学生|がくせい]ですか。"),
                es: "¿Tanaka es estudiante?",
              },
              incorrect: {
                jp: ruby("[田中|たなか]さんは[学生|がくせい]です。"),
                es: "Eso sigue siendo una afirmación.",
              },
              explanation:
                "La marca de pregunta en esta lección es か, y va al final de la oración.",
            },
            {
              id: "contrast-003-2",
              label: "No mezcles afirmación y negación",
              correct: {
                jp: ruby("[いいえ]、[学生|がくせい]ではありません。"),
                es: "No, no es estudiante.",
              },
              incorrect: {
                jp: ruby("[いいえ]、[学生|がくせい]です。"),
                es: "La respuesta contradice el no inicial.",
              },
              explanation:
                "Si respondes con いいえ, la respuesta debe seguir con negación o con una corrección clara.",
            },
            {
              id: "contrast-003-3",
              label: "そうです y 違います se usan cuando el contexto ya está claro",
              correct: {
                jp: ruby("[はい]、そうです。 / [いいえ]、[違|ちが]います。"),
                es: "Respuestas cortas y naturales.",
              },
              incorrect: {
                jp: ruby("そうです[学生|がくせい]。"),
                es: "Orden incorrecto.",
              },
              explanation:
                "そうです y 違います funcionan como respuestas completas. No se mezclan como si fueran una partícula o un prefijo.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-003-warning",
      kind: "warning",
      title: "Qué todavía no estamos viendo",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "Todavía no mezcles otras capas",
          content:
            "En esta lección nos quedamos en preguntas cerradas simples. Aún no veremos pasado, preguntas abiertas ni información más amplia como nacionalidad, idioma o edad.",
          bullets: [
            {
              es: "Primero deja sólida la base de",
              jp: ruby("ですか / [はい] / [いいえ] / そうです / [違|ちが]います"),
            },
            {
              es: "Después será más fácil ampliar el contenido de las respuestas.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-003-practice",
      kind: "practice",
      title: "Práctica guiada",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Convierte afirmaciones en preguntas:",
              jp: ruby("[私|わたし]は[学生|がくせい]です。 → [私|わたし]は[学生|がくせい]ですか。"),
            },
            {
              es: "Responde afirmativamente con dos estilos:",
              jp: ruby("[はい]、[学生|がくせい]です。 / [はい]、そうです。"),
            },
            {
              es: "Responde negativamente con dos estilos:",
              jp: ruby("[いいえ]、[学生|がくせい]ではありません。 / [いいえ]、[学生|がくせい]じゃありません。"),
            },
            {
              es: "Niega la afirmación anterior con",
              jp: ruby("[違|ちが]います。"),
              note: "y corrige después con la categoría correcta.",
            },
            {
              es: "Escribe tres mini diálogos de pregunta y respuesta usando profesiones distintas.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-003-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Puedo convertir una afirmación en pregunta con",
              jp: ruby("か。"),
            },
            {
              es: "Puedo responder afirmativamente con",
              jp: ruby("[はい] / そうです。"),
            },
            {
              es: "Puedo responder negativamente con",
              jp: ruby("[いいえ] / [違|ちが]います / ではありません / じゃありません。"),
            },
            {
              es: "Entiendo que",
              jp: ruby("ではありません"),
              note: "suena más rígida que じゃありません.",
            },
            {
              es: "Todavía no mezclo pasado ni preguntas abiertas en esta etapa.",
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-003-quiz",
    title: "Quiz — Preguntas básicas",
    description:
      "Repaso para comprobar si ya puedes preguntar y responder de forma simple y natural.",
    passScore: 75,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "single-choice",
        prompt: {
          es: "¿Qué partícula convierte en pregunta la estructura básica de esta lección?",
        },
        choices: [
          { id: "a", label: { es: "は" } },
          { id: "b", label: { es: "を" } },
          { id: "c", label: { es: "か" } },
          { id: "d", label: { es: "の" } },
        ],
        correctChoiceId: "c",
        explanation:
          "En esta lección, か va al final y convierte la oración en pregunta.",
        relatedSectionIds: ["lesson-003-structure"],
      },
      {
        id: "q2",
        type: "single-choice",
        prompt: {
          jp: ruby("[田中|たなか]さんは[学生|がくせい]ですか。"),
          es: "¿Qué significa esta oración?",
        },
        choices: [
          { id: "a", label: { es: "Tanaka es estudiante." } },
          { id: "b", label: { es: "¿Tanaka es estudiante?" } },
          { id: "c", label: { es: "Tanaka no es estudiante." } },
          { id: "d", label: { es: "¿Tanaka es profesor?" } },
        ],
        correctChoiceId: "b",
        explanation:
          "La partícula か convierte la estructura en pregunta.",
        relatedSectionIds: ["lesson-003-structure", "lesson-003-examples"],
      },
      {
        id: "q3",
        type: "single-choice",
        prompt: {
          es: "Elige la mejor respuesta para: 田中さんは学生ですか。",
        },
        choices: [
          { id: "a", label: { jp: ruby("[はい]、そうです。") } },
          { id: "b", label: { jp: ruby("[はい]、[違|ちが]います。") } },
          { id: "c", label: { jp: ruby("[いいえ]、そうです。") } },
          { id: "d", label: { jp: ruby("[学生|がくせい]か。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "そうです confirma la información anterior de forma corta y natural.",
        relatedSectionIds: ["lesson-003-concept", "lesson-003-structure"],
      },
      {
        id: "q4",
        type: "single-choice",
        prompt: {
          es: "Elige la mejor respuesta negativa para: マリアさんは先生ですか。",
        },
        choices: [
          { id: "a", label: { jp: ruby("[いいえ]、[先生|せんせい]です。") } },
          { id: "b", label: { jp: ruby("[いいえ]、[先生|せんせい]ではありません。") } },
          { id: "c", label: { jp: ruby("[はい]、[先生|せんせい]じゃありません。") } },
          { id: "d", label: { jp: ruby("[違|ちが]います[先生|せんせい]。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "Después de いいえ, la respuesta debe mantener una negación coherente.",
        relatedSectionIds: ["lesson-003-structure", "lesson-003-contrast"],
      },
      {
        id: "q5",
        type: "single-choice",
        prompt: {
          es: "¿Qué expresión sirve para negar la afirmación anterior sin repetir toda la oración?",
        },
        choices: [
          { id: "a", label: { jp: ruby("そうです。") } },
          { id: "b", label: { jp: ruby("[違|ちが]います。") } },
          { id: "c", label: { jp: ruby("[はい]。") } },
          { id: "d", label: { jp: ruby("[先生|せんせい]です。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "違います niega la idea anterior como bloque y suena muy natural en este contexto.",
        relatedSectionIds: ["lesson-003-concept", "lesson-003-structure"],
      },
      {
        id: "q6",
        type: "single-choice",
        prompt: {
          es: "¿Cuál suena más natural en conversación educada cotidiana?",
        },
        choices: [
          { id: "a", label: { jp: ruby("ではありません。") } },
          { id: "b", label: { jp: ruby("じゃありません。") } },
          { id: "c", label: { jp: ruby("でした。") } },
          { id: "d", label: { jp: ruby("ませんか。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "じゃありません suele sonar más natural en japonés hablado educado, mientras que ではありません se siente más rígida o más escrita.",
        relatedSectionIds: ["lesson-003-concept", "lesson-003-vocabulary"],
      },
      {
        id: "q7",
        type: "order-sentence",
        prompt: {
          es: "Ordena los elementos para formar: “¿María es enfermera?”",
        },
        tokens: [
          {
            id: "tok-maria",
            value: "マリアさん",
            label: { jp: ruby("[マリア|まりあ]さん") },
          },
          {
            id: "tok-wa",
            value: "は",
            label: { jp: ruby("は") },
          },
          {
            id: "tok-kangoshi",
            value: "看護師",
            label: { jp: ruby("[看護師|かんごし]") },
          },
          {
            id: "tok-desuka",
            value: "ですか",
            label: { jp: ruby("ですか") },
          },
        ],
        correctOrder: ["マリアさん", "は", "看護師", "ですか"],
        answerLabel: {
          jp: ruby("[マリア|まりあ]さんは[看護師|かんごし]ですか。"),
        },
        explanation:
          "La estructura sigue siendo tema + は + categoría + ですか.",
        relatedSectionIds: ["lesson-003-structure"],
      },
      {
        id: "q8",
        type: "fill-blank",
        prompt: {
          es: "Completa la pregunta:",
          jp: ruby("[田中|たなか]さんは[先生|せんせい]です___"),
        },
        acceptedAnswers: ["か", "か。"],
        placeholder: "Escribe la partícula",
        explanation:
          "La partícula que convierte la oración en pregunta es か.",
        relatedSectionIds: ["lesson-003-structure", "lesson-003-contrast"],
      },
      {
        id: "q9",
        type: "fill-blank",
        prompt: {
          es: "Completa una respuesta negativa válida:",
          jp: ruby("[いいえ]、[先生|せんせい]_____"),
        },
        acceptedAnswers: [
          "ではありません",
          "ではありません。",
          "じゃありません",
          "じゃありません。",
        ],
        placeholder: "Escribe la negación",
        explanation:
          "En esta lección aceptamos tanto ではありません como じゃありません.",
        relatedSectionIds: ["lesson-003-concept", "lesson-003-structure"],
      },
      {
        id: "q10",
        type: "single-choice",
        prompt: {
          es: "¿Qué continuación completa mejor este diálogo?",
          jp: ruby("[アナ|あな]さんは[店員|てんいん]ですか。"),
        },
        choices: [
          {
            id: "a",
            label: { jp: ruby("[いいえ]、[違|ちが]います。[会社員|かいしゃいん]です。") },
          },
          {
            id: "b",
            label: { jp: ruby("[はい]、[違|ちが]います。") },
          },
          {
            id: "c",
            label: { jp: ruby("[いいえ]、[店員|てんいん]です。") },
          },
          {
            id: "d",
            label: { jp: ruby("[店員|てんいん]か。") },
          },
        ],
        correctChoiceId: "a",
        explanation:
          "La opción A niega la afirmación anterior y luego corrige con la categoría correcta.",
        relatedSectionIds: ["lesson-003-examples", "lesson-003-contrast"],
      },
    ],
  },
};

export default lesson003;