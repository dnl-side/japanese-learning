//src/data/grammar/lessons/lesson-004a.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson004a: GrammarLesson = {
  id: "lesson-004a",
  slug: "pais-de-origen-shusshin",
  order: 4,
  level: "N5",
  status: "ready",
  title: "País de origen",
  jpTitle: "しゅっしん・くに",
  shortTitle: "Origen",
  description:
    "Cómo preguntar y responder de qué país es alguien, y cómo distinguir entre origen y movimiento físico.",
  estimatedMinutes: 32,
  categoryTags: ["fundamentos", "origen", "paises", "presentacion"],
  grammarTags: [
    "ご出身",
    "どちら",
    "どこ",
    "出身",
    "から来ました",
    "honorifico ご",
  ],
  searchTerms: [
    "shusshin",
    "pais de origen",
    "go shusshin wa dochira desu ka",
    "doko kara kimashita",
    "de donde eres",
    "de donde vienes",
    "paises en japones",
  ],
  relatedLessonSlugs: [
    "wa-desu-basico",
    "presentacion-simple-profesiones",
    "preguntas-basicas-desu-ka",
  ],
  relatedVocabularyTags: ["paises", "origen", "presentacion"],
  objectives: [
    "Preguntar de forma natural y cortés de qué país es alguien.",
    "Distinguir entre preguntar por origen y preguntar desde dónde vino alguien.",
    "Entender por qué ご aparece en la pregunta pero normalmente no en la respuesta.",
    "Añadir el país de origen a una presentación simple.",
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
      id: "lesson-004a-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "Hasta ahora podías presentarte, decir tu profesión y responder preguntas simples. En esta unidad vamos a ampliar esa presentación para decir de qué país es alguien y para distinguir entre preguntar por el origen de una persona y preguntar desde dónde llegó físicamente.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Aprenderás a preguntar por el origen con una forma natural y cortés:",
              jp: ruby("ご[出身|しゅっしん]はどちらですか。"),
            },
            {
              es: "También verás otra pregunta distinta:",
              jp: ruby("どこから[来|き]ましたか。"),
              note: "Aquí la idea ya no es origen, sino movimiento físico.",
            },
            {
              es: "Al final podrás añadir tu país de origen a una presentación breve.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-004a-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Origen no es lo mismo que movimiento",
          content:
            "En muchos libros aparece muy pronto una pregunta sobre venir de algún lugar, pero eso no siempre coincide con la situación real. Si estás en una clase en tu propio país, preguntar desde dónde vino alguien puede sonar raro. Para preguntar por el país de origen, la forma más natural suele ser otra.",
          bullets: [
            {
              jp: ruby("ご[出身|しゅっしん]はどちらですか。"),
              es: "pregunta por el origen o procedencia de la persona",
            },
            {
              jp: ruby("どこから[来|き]ましたか。"),
              es: "pregunta desde dónde vino físicamente alguien",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Qué hace el ご honorífico",
          content:
            "En esta lección aparece ご como prefijo honorífico. Su función aquí es elevar o embellecer la palabra del interlocutor para sonar más respetuoso. Por eso lo ves en la pregunta dirigida a la otra persona.",
          bullets: [
            {
              jp: ruby("ご[出身|しゅっしん]"),
              es: "forma más cortés cuando preguntas por el origen del otro",
            },
            {
              jp: ruby("[出身|しゅっしん]はチリです。"),
              es: "respuesta normal sobre el propio origen, sin ご",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Por qué no se usa ご en la respuesta",
          content:
            "En japonés, los honoríficos como ご suelen usarse para mostrar respeto hacia lo del interlocutor, no para elevar lo propio. Por eso preguntas por la procedencia del otro con ご, pero al responder hablas de tu origen sin ese prefijo.",
          bullets: [
            {
              jp: ruby("ご[出身|しゅっしん]はどちらですか。"),
              es: "pregunta respetuosa sobre la otra persona",
            },
            {
              jp: ruby("[出身|しゅっしん]はチリです。 / チリ[出身|しゅっしん]です。"),
              es: "respuesta natural sobre uno mismo",
            },
          ],
        },
        {
            type: "pattern-cards",
            items: [
                {
                id: "pattern-004a-note-politeness",
                label: "Cortesía",
                pattern: ruby("どちら / どこ"),
                meaning: "どちら suena más cortés que どこ.",
                translation:
                    "En esta unidad usamos どちら cuando queremos preguntar por el origen con un tono más educado.",
                },
                {
                id: "pattern-004a-note-scope",
                label: "Enfoque de la unidad",
                pattern: ruby("[ご出身|ごしゅっしん] / [出身|しゅっしん] / から[来|き]ました"),
                meaning: "Aquí solo trabajamos países y origen.",
                translation:
                    "Todavía no vemos gentilicios ni idiomas; primero dejamos clara la diferencia entre origen y movimiento.",
                },
                {
                id: "pattern-004a-note-nihon",
                label: "Lectura de 日本",
                pattern: ruby("[日本|にほん / にっぽん]"),
                meaning: "Ambas lecturas son válidas.",
                translation:
                    "En esta unidad tomaremos にほん como lectura base de trabajo, pero にっぽん también existe y es correcta.",
                },
            ],
        },
      ],
    },
    {
      id: "lesson-004a-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-004a-1",
              label: "Pregunta por origen",
              pattern: ruby("ご[出身|しゅっしん]はどちらですか。"),
              meaning: "¿De qué país es usted? / ¿De dónde es usted?",
              translation:
                "Forma cortés y natural para preguntar por el origen o procedencia de una persona.",
              structure: [
                {
                  slot: {
                    jp: ruby("ご[出身|しゅっしん]"),
                  },
                  value: "origen del interlocutor",
                  note: {
                    es: "Aquí el ご funciona como prefijo honorífico.",
                  },
                },
                {
                  slot: {
                    jp: ruby("どちら"),
                  },
                  value: "dónde / cuál lado",
                  note: {
                    es: "En este contexto se usa con valor de “de qué lugar”, con un tono más cortés que どこ.",
                  },
                },
                {
                  slot: {
                    jp: ruby("ですか"),
                  },
                  value: "cierre interrogativo",
                  note: "Convierte la estructura en una pregunta educada.",
                },
              ],
              notes: [
                {
                  es: "Es una forma especialmente útil en presentación, clase o conversación educada.",
                },
              ],
            },
            {
              id: "pattern-004a-2",
              label: "Respuesta de origen",
              pattern: ruby("[出身|しゅっしん]は A です。 / A [出身|しゅっしん]です。"),
              meaning: "Mi origen es A. / Soy de A.",
              translation:
                "Dos formas naturales de responder de qué país eres o cuál es tu procedencia.",
              structure: [
                {
                  slot: {
                    jp: ruby("[出身|しゅっしん]"),
                  },
                  value: "origen propio",
                  note: {
                    es: "Aquí no usamos ご porque estás hablando de ti mismo.",
                  },
                },
                {
                  slot: "A",
                  value: "país",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[チリ|ちり] / [日本|にほん / にっぽん] / [韓国|かんこく] / [中国|ちゅうごく]。"),
                  },
                },
              ],
              notes: [
                {
                  es: "La forma",
                  jp: ruby("A [出身|しゅっしん]です。"),
                  note: "suele sonar más compacta.",
                },
              ],
            },
            {
              id: "pattern-004a-3",
              label: "Venir de un lugar",
              pattern: ruby("A から[来|き]ました。"),
              meaning: "Vine de A.",
              translation:
                "Se usa cuando la idea es movimiento físico desde un lugar hacia donde estás ahora.",
              structure: [
                {
                  slot: "A",
                  value: "lugar de procedencia física",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[チリ|ちり] / [日本|にほん / にっぽん] / [フランス|ふらんす]。"),
                  },
                },
                {
                  slot: {
                    jp: ruby("から"),
                  },
                  value: "desde",
                  note: "Marca el punto de origen del movimiento.",
                },
                {
                  slot: {
                    jp: ruby("[来|き]ました"),
                  },
                  value: "vine",
                  note: "Expresa llegada o desplazamiento hacia el lugar donde estás ahora.",
                },
              ],
              notes: [
                {
                  es: "No es la mejor forma para preguntar nacionalidad u origen en una clase local si nadie ha llegado realmente desde otro país.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-004a-vocabulary",
      kind: "vocabulary",
      title: "Países base para esta unidad",
      description:
        "Aquí el foco no es memorizar todos los países del mundo, sino tener suficientes referencias reales para practicar origen y procedencia.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 3,
          items: [
            {
              id: "vocab-japan",
              jp: ruby("[日本|にほん / にっぽん]"),
              reading: "にほん / にっぽん",
              meaning: "Japón",
              notes: [
                "En esta lección tomamos にほん como lectura base de trabajo, pero にっぽん también existe y es válida.",
              ],
              tags: ["pais", "core"],
            },
            {
              id: "vocab-korea",
              jp: ruby("[韓国|かんこく]"),
              reading: "かんこく",
              meaning: "Corea del Sur",
              tags: ["pais", "core"],
            },
            {
              id: "vocab-china",
              jp: ruby("[中国|ちゅうごく]"),
              reading: "ちゅうごく",
              meaning: "China",
              tags: ["pais", "core"],
            },
            {
              id: "vocab-uk",
              jp: ruby("[イギリス|いぎりす]"),
              reading: "いぎりす",
              meaning: "Reino Unido",
              tags: ["pais", "katakana"],
            },
            {
              id: "vocab-italy",
              jp: ruby("[イタリア|いたりあ]"),
              reading: "いたりあ",
              meaning: "Italia",
              tags: ["pais", "katakana"],
            },
            {
              id: "vocab-france",
              jp: ruby("[フランス|ふらんす]"),
              reading: "ふらんす",
              meaning: "Francia",
              tags: ["pais", "katakana"],
            },
            {
              id: "vocab-germany",
              jp: ruby("[ドイツ|どいつ]"),
              reading: "どいつ",
              meaning: "Alemania",
              tags: ["pais", "katakana"],
            },
            {
              id: "vocab-usa",
              jp: ruby("[アメリカ|あめりか]"),
              reading: "あめりか",
              meaning: "Estados Unidos",
              tags: ["pais", "katakana"],
            },
            {
              id: "vocab-mexico",
              jp: ruby("[メキシコ|めきしこ]"),
              reading: "めきしこ",
              meaning: "México",
              tags: ["pais", "katakana"],
            },
            {
              id: "vocab-brazil",
              jp: ruby("[ブラジル|ぶらじる]"),
              reading: "ぶらじる",
              meaning: "Brasil",
              tags: ["pais", "katakana"],
            },
            {
              id: "vocab-argentina",
              jp: ruby("[アルゼンチン|あるぜんちん]"),
              reading: "あるぜんちん",
              meaning: "Argentina",
              tags: ["pais", "katakana"],
            },
            {
              id: "vocab-peru",
              jp: ruby("[ペルー|ぺるう]"),
              reading: "ぺるう",
              meaning: "Perú",
              tags: ["pais", "katakana"],
            },
            {
              id: "vocab-chile",
              jp: ruby("[チリ|ちり]"),
              reading: "ちり",
              meaning: "Chile",
              tags: ["pais", "core", "katakana"],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-004a-examples",
      kind: "examples",
      title: "Ejemplos en contexto",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "example-004a-1",
              jp: ruby("ご[出身|しゅっしん]はどちらですか。 [出身|しゅっしん]は[チリ|ちり]です。"),
              es: "¿De qué país es usted? Soy de Chile.",
              breakdown: [
                { label: "Pregunta", jp: ruby("ご[出身|しゅっしん]はどちらですか。") },
                { label: "Respuesta", jp: ruby("[出身|しゅっしん]は[チリ|ちり]です。") },
              ],
            },
            {
              id: "example-004a-2",
              jp: ruby("ご[出身|しゅっしん]はどちらですか。 [チリ|ちり][出身|しゅっしん]です。"),
              es: "¿De qué país es usted? Soy de Chile.",
              notes: [
                {
                  es: "Aquí la respuesta va más compacta, pero la idea es la misma.",
                },
              ],
            },
            {
              id: "example-004a-3",
              jp: ruby("[今|いま]、[日本|にほん / にっぽん]にいます。 [チリ|ちり]から[来|き]ました。"),
              es: "Ahora estoy en Japón. Vine desde Chile.",
              notes: [
                {
                  es: "Aquí sí hay movimiento real hacia el lugar donde está hablando la persona.",
                },
              ],
            },
            {
              id: "example-004a-4",
              jp: ruby("[マリア|まりあ]さんのご[出身|しゅっしん]はどちらですか。 [ペルー|ぺるう]です。"),
              es: "¿De qué país es María? Es de Perú.",
            },
            {
              id: "example-004a-5",
              jp: ruby("[はじめまして]。[ダニエル|だにえる]です。 [チリ|ちり][出身|しゅっしん]です。 よろしくお[願|ねが]いします。"),
              es: "Mucho gusto. Soy Daniel. Soy de Chile. Encantado.",
              notes: [
                {
                  es: "Aquí ampliamos la presentación de la lesson 002 añadiendo el país de origen.",
                },
              ],
            },
            {
              id: "example-004a-6",
              jp: ruby("[日本|にほん / にっぽん]から[来|き]ました。"),
              es: "Vine desde Japón.",
              notes: [
                {
                  es: "Esto habla de un desplazamiento físico, no de nacionalidad.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-004a-contrast",
      kind: "contrast",
      title: "Contrastes importantes",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-004a-1",
              label: "Origen vs movimiento",
              correct: {
                jp: ruby("ご[出身|しゅっしん]はどちらですか。"),
                es: "Pregunta natural por origen o procedencia.",
              },
              incorrect: {
                jp: ruby("どこから[来|き]ましたか。"),
                es: "No siempre encaja si la idea no es que alguien llegó físicamente desde otro lugar.",
              },
              explanation:
                "Ambas preguntas son correctas, pero no significan exactamente lo mismo ni sirven para el mismo contexto.",
            },
            {
              id: "contrast-004a-2",
              label: "El ご va en la pregunta, no en la respuesta propia",
              correct: {
                jp: ruby("ご[出身|しゅっしん]はどちらですか。 [出身|しゅっしん]は[チリ|ちり]です。"),
                es: "Uso natural del honorífico hacia el interlocutor.",
              },
              incorrect: {
                jp: ruby("ご[出身|しゅっしん]は[チリ|ちり]です。"),
                es: "Suena poco natural al hablar del propio origen.",
              },
              explanation:
                "El prefijo honorífico muestra respeto hacia lo del otro. En la respuesta sobre uno mismo se omite normalmente.",
            },
            {
              id: "contrast-004a-3",
              label: "どちら suena más cortés que どこ",
              correct: {
                jp: ruby("ご[出身|しゅっしん]はどちらですか。"),
                es: "Más cortés y adecuado para presentación o trato educado.",
              },
              incorrect: {
                jp: ruby("ご[出身|しゅっしん]はどこですか。"),
                es: "Comprensible, pero menos fino en este contexto.",
              },
              explanation:
                "Aquí la diferencia no es de gramática básica, sino de nivel de cortesía y naturalidad.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-004a-warning",
      kind: "warning",
      title: "Qué todavía no estamos viendo",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "Esta unidad todavía no entra en gentilicio ni idioma",
          content:
            "Aquí nos concentramos solo en países y origen. Todavía no veremos expresiones como “ser japonés” o “hablar español”, porque esas ideas se trabajarán mejor en las siguientes subunidades.",
          bullets: [
            {
              es: "Aquí solo fijamos:",
              jp: ruby("ご[出身|しゅっしん] / [出身|しゅっしん] / から[来|き]ました"),
            },
            {
              es: "Más adelante añadiremos gentilicio e idioma con sus propias estructuras.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-004a-practice",
      kind: "practice",
      title: "Práctica guiada",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Haz la misma pregunta usando una forma cortés:",
              jp: ruby("ご[出身|しゅっしん]はどちらですか。"),
            },
            {
              es: "Responde con dos estilos:",
              jp: ruby("[出身|しゅっしん]は[チリ|ちり]です。 / [チリ|ちり][出身|しゅっしん]です。"),
            },
            {
              es: "Cambia solo el país:",
              jp: ruby("[チリ|ちり] → [日本|にほん / にっぽん] → [韓国|かんこく] → [中国|ちゅうごく]。"),
            },
            {
              es: "Forma una frase de movimiento real:",
              jp: ruby("[チリ|ちり]から[来|き]ました。"),
            },
            {
              es: "Completa tu presentación con el país de origen después del nombre.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-004a-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Puedo preguntar por el origen de alguien con",
              jp: ruby("ご[出身|しゅっしん]はどちらですか。"),
            },
            {
              es: "Puedo responder con",
              jp: ruby("[出身|しゅっしん]は A です。 / A [出身|しゅっしん]です。"),
            },
            {
              es: "Entiendo la diferencia entre origen y movimiento físico con",
              jp: ruby("A から[来|き]ました。"),
            },
            {
              es: "Sé por qué",
              jp: ruby("ご"),
              note: "aparece en la pregunta pero no normalmente en la respuesta propia.",
            },
            {
              es: "Puedo añadir mi país de origen a una presentación básica.",
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-004a-quiz",
    title: "Quiz — País de origen",
    description:
      "Repaso para comprobar si ya distingues origen, procedencia y movimiento físico.",
    passScore: 75,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "single-choice",
        prompt: {
          es: "¿Cuál es la mejor pregunta para saber de qué país es alguien en una presentación educada?",
        },
        choices: [
          { id: "a", label: { jp: ruby("ご[出身|しゅっしん]はどちらですか。") } },
          { id: "b", label: { jp: ruby("どこから[来|き]ましたか。") } },
          { id: "c", label: { jp: ruby("[出身|しゅっしん]はどちらです。") } },
          { id: "d", label: { jp: ruby("どちらからですか。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "ご出身はどちらですか。 pregunta por el origen con un tono más natural y cortés.",
        relatedSectionIds: ["lesson-004a-concept", "lesson-004a-structure"],
      },
      {
        id: "q2",
        type: "single-choice",
        prompt: {
          es: "¿Qué idea expresa mejor esta pregunta?",
          jp: ruby("どこから[来|き]ましたか。"),
        },
        choices: [
          { id: "a", label: { es: "Pregunta por la nacionalidad de una persona." } },
          { id: "b", label: { es: "Pregunta por el idioma que entiende una persona." } },
          { id: "c", label: { es: "Pregunta desde dónde vino físicamente alguien." } },
          { id: "d", label: { es: "Pregunta por la edad de una persona." } },
        ],
        correctChoiceId: "c",
        explanation:
          "どこから来ましたか。 se centra en el desplazamiento o llegada desde un lugar.",
        relatedSectionIds: ["lesson-004a-concept", "lesson-004a-structure"],
      },
      {
        id: "q3",
        type: "single-choice",
        prompt: {
          es: "¿Por qué aparece ご en la pregunta pero normalmente no en la respuesta propia?",
        },
        choices: [
          { id: "a", label: { es: "Porque ご siempre va solo con países." } },
          { id: "b", label: { es: "Porque ご eleva o embellece lo del interlocutor, no lo propio." } },
          { id: "c", label: { es: "Porque ご solo se usa en pasado." } },
          { id: "d", label: { es: "Porque ご reemplaza a は." } },
        ],
        correctChoiceId: "b",
        explanation:
          "En este contexto, ご funciona como honorífico hacia la otra persona, no como marca general obligatoria.",
        relatedSectionIds: ["lesson-004a-concept"],
      },
      {
        id: "q4",
        type: "single-choice",
        prompt: {
          es: "Elige una respuesta natural para esta pregunta:",
          jp: ruby("ご[出身|しゅっしん]はどちらですか。"),
        },
        choices: [
          { id: "a", label: { jp: ruby("ご[出身|しゅっしん]は[チリ|ちり]です。") } },
          { id: "b", label: { jp: ruby("[出身|しゅっしん]は[チリ|ちり]です。") } },
          { id: "c", label: { jp: ruby("[チリ|ちり]からですか。") } },
          { id: "d", label: { jp: ruby("[チリ|ちり]は[出身|しゅっしん]です。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "La respuesta natural sobre tu propio origen omite el prefijo honorífico ご.",
        relatedSectionIds: ["lesson-004a-concept", "lesson-004a-structure"],
      },
      {
        id: "q5",
        type: "single-choice",
        prompt: {
          es: "¿Cuál encaja mejor si estás en Japón y realmente llegaste desde Chile?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[チリ|ちり][出身|しゅっしん]です。") } },
          { id: "b", label: { jp: ruby("[チリ|ちり]から[来|き]ました。") } },
          { id: "c", label: { jp: ruby("ご[出身|しゅっしん]は[チリ|ちり]です。") } },
          { id: "d", label: { jp: ruby("[チリ|ちり]ですか。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "Aquí la idea es movimiento físico desde Chile hasta el lugar donde está la persona ahora.",
        relatedSectionIds: ["lesson-004a-concept", "lesson-004a-examples"],
      },
      {
        id: "q6",
        type: "single-choice",
        prompt: {
          es: "En esta lección, ¿qué lectura tomamos como base de trabajo para",
          jp: ruby("[日本|にほん / にっぽん]"),
        },
        choices: [
          { id: "a", label: { es: "にほん" } },
          { id: "b", label: { es: "にっぽん" } },
          { id: "c", label: { es: "Ambas son incorrectas." } },
          { id: "d", label: { es: "Solo se lee にちほん." } },
        ],
        correctChoiceId: "a",
        explanation:
          "En esta unidad usamos にほん como lectura base de trabajo, pero にっぽん también existe y es válida.",
        relatedSectionIds: ["lesson-004a-vocabulary"],
      },
      {
        id: "q7",
        type: "order-sentence",
        prompt: {
          es: "Ordena los elementos para formar: “Soy de Chile”.",
        },
        tokens: [
          {
            id: "tok-chile",
            value: "チリ",
            label: { jp: ruby("[チリ|ちり]") },
          },
          {
            id: "tok-shusshin",
            value: "出身",
            label: { jp: ruby("[出身|しゅっしん]") },
          },
          {
            id: "tok-desu",
            value: "です",
            label: { jp: ruby("です") },
          },
        ],
        correctOrder: ["チリ", "出身", "です"],
        answerLabel: {
          jp: ruby("[チリ|ちり][出身|しゅっしん]です。"),
        },
        explanation:
          "La respuesta compacta usa país + 出身 + です.",
        relatedSectionIds: ["lesson-004a-structure", "lesson-004a-examples"],
      },
      {
        id: "q8",
        type: "fill-blank",
        prompt: {
          es: "Completa la pregunta cortés:",
          jp: ruby("ご[出身|しゅっしん]はどちら___"),
        },
        acceptedAnswers: ["ですか", "ですか。"],
        placeholder: "Escribe el cierre",
        explanation:
          "El cierre interrogativo educado aquí es ですか。",
        relatedSectionIds: ["lesson-004a-structure"],
      },
      {
        id: "q9",
        type: "fill-blank",
        prompt: {
          es: "Completa la frase de movimiento físico:",
          jp: ruby("[チリ|ちり]___[来|き]ました。"),
        },
        acceptedAnswers: ["から", "から。"],
        placeholder: "Escribe la partícula",
        explanation:
          "La partícula から marca el punto de origen del movimiento.",
        relatedSectionIds: ["lesson-004a-structure", "lesson-004a-examples"],
      },
      {
        id: "q10",
        type: "single-choice",
        prompt: {
          es: "¿Qué diferencia de tono hay entre estas dos palabras cuando preguntas por el origen?",
          jp: ruby("どちら / どこ"),
        },
        choices: [
          { id: "a", label: { es: "どちら suena más cortés; どこ es más neutro o directo." } },
          { id: "b", label: { es: "どこ suena más cortés; どちら es más brusco." } },
          { id: "c", label: { es: "No hay ninguna diferencia de tono." } },
          { id: "d", label: { es: "どちら solo se usa en pasado." } },
        ],
        correctChoiceId: "a",
        explanation:
          "En esta unidad, どちら se presenta como opción más cortés para una pregunta de presentación.",
        relatedSectionIds: ["lesson-004a-concept", "lesson-004a-contrast"],
      },
    ],
  },
};

export default lesson004a;