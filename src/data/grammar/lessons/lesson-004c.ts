//src/data/grammar/lessons/lesson-004c.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson004c: GrammarLesson = {
  id: "lesson-004c",
  slug: "idiomas-ga-dekimasu-wakarimasu",
  order: 6,
  level: "N5",
  status: "ready",
  title: "Idiomas y comprensión",
  jpTitle: "〜ご・が・できます・わかります",
  shortTitle: "Idiomas",
  description:
    "Cómo decir qué idioma entiendes o manejas, usando が con できます y わかります, y cómo formar sus negativas.",
  estimatedMinutes: 34,
  categoryTags: ["fundamentos", "idiomas", "particulas", "verbos"],
  grammarTags: ["〜ご", "が", "できます", "わかります", "できません", "わかりません", "も"],
  searchTerms: [
    "idiomas",
    "gengo",
    "ga dekimasu",
    "ga wakarimasu",
    "dekimasen",
    "wakarimasen",
    "idioma en japones",
  ],
  relatedLessonSlugs: [
    "wa-desu-basico",
    "preguntas-basicas-desu-ka",
    "pais-de-origen-shusshin",
    "nacionalidad-jin-mo",
  ],
  relatedVocabularyTags: ["idiomas", "comprension", "capacidad"],
  objectives: [
    "Decir qué idioma puedes manejar con できます.",
    "Decir qué idioma entiendes con わかります.",
    "Entender por qué aquí usamos が con estos verbos.",
    "Formar negativas con できません y わかりません.",
    "Seguir practicando も cuando la información coincide.",
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
      id: "lesson-004c-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "Hasta ahora ya puedes hablar de origen y nacionalidad. En esta unidad vamos a ampliar esa presentación para decir qué idioma entiendes o qué idioma puedes manejar, y veremos una partícula muy importante que aquí aparece junto a dos verbos base.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Aprenderás a decir cosas como:",
              jp: ruby("[スペイン語|すぺいんご]ができます。"),
            },
            {
              es: "Y también expresiones como:",
              jp: ruby("[英語|えいご]がわかります。"),
            },
            {
              es: "Practicarás el negativo y seguirás reforzando",
              jp: ruby("も"),
              note: "cuando la información coincide.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-004c-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Qué hace が en esta unidad",
          content:
            "Aquí aparece が como una partícula que verás mucho más a fondo más adelante. En esta lección nos interesa su uso junto a dos verbos concretos: uno para expresar capacidad o manejo, y otro para expresar comprensión.",
          bullets: [
            {
              jp: ruby("[スペイン語|すぺいんご]ができます。"),
              es: "capacidad o manejo",
            },
            {
              jp: ruby("[英語|えいご]がわかります。"),
              es: "comprensión",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "No significan exactamente lo mismo",
          content:
            "Aunque ambos patrones hablan de idiomas, no expresan la misma idea. Uno se acerca más a poder usar o manejar un idioma; el otro, a entenderlo o comprenderlo.",
          bullets: [
            {
              jp: ruby("できます"),
              es: "puedo manejarlo / tengo capacidad con eso",
            },
            {
              jp: ruby("わかります"),
              es: "lo entiendo / lo comprendo",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "El negativo aquí sigue la lógica de verbos en ます",
          content:
            "En esta unidad verás que estos verbos pasan al negativo con ません. Eso te ayuda a reconocer un patrón muy importante. También sirve para comparar con lo que ya viste antes con です, cuya negación sigue una ruta distinta.",
          bullets: [
            {
              jp: ruby("できます → できません"),
              es: "negativo verbal en esta unidad",
            },
            {
              jp: ruby("わかります → わかりません"),
              es: "mismo patrón",
            },
            {
              jp: ruby("です → ではありません / じゃありません"),
              es: "ruta distinta que ya viste antes",
            },
          ],
        },
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-004c-note-ga",
              label: "Partícula clave",
              pattern: ruby("が"),
              meaning: "Aquí se usa con dos verbos concretos.",
              translation:
                "En esta unidad la verás con できます y わかります. Más adelante estudiarás otros usos de が con más profundidad.",
            },
            {
              id: "pattern-004c-note-difference",
              label: "Dos ideas distintas",
              pattern: ruby("できます / わかります"),
              meaning: "Capacidad o manejo vs comprensión.",
              translation:
                "No conviene tratarlos como si fueran idénticos. Uno habla más de poder manejar algo; el otro, de entenderlo.",
            },
            {
              id: "pattern-004c-note-base",
              label: "Base de la unidad",
              pattern: ruby("〜[語|ご] / が / できます / わかります / できません / わかりません"),
              meaning: "Aquí fijamos la base.",
              translation:
                "Conviene practicar esta unidad con calma hasta que las formas afirmativas y negativas salgan naturales.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-004c-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-004c-1",
              label: "Decir que manejas un idioma",
              pattern: ruby("A[語|ご]ができます。"),
              meaning: "Puedo manejar A.",
              translation:
                "En esta unidad できます se usa para decir que puedes manejar o usar ese idioma.",
              structure: [
                {
                  slot: "A",
                  value: "idioma",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[スペイン語|すぺいんご] / [英語|えいご] / [日本語|にほんご]。"),
                  },
                },
                {
                  slot: {
                    jp: ruby("が"),
                  },
                  value: "partícula de esta estructura",
                  note: "Aquí aparece unida a できます.",
                },
                {
                  slot: {
                    jp: ruby("できます"),
                  },
                  value: "capacidad o manejo",
                  note: "Expresa que puedes manejar ese idioma.",
                },
              ],
              notes: [
                {
                  es: "En esta etapa piensa en esta forma como una manera práctica de decir que manejas ese idioma.",
                },
              ],
            },
            {
              id: "pattern-004c-2",
              label: "Decir que entiendes un idioma",
              pattern: ruby("A[語|ご]がわかります。"),
              meaning: "Entiendo A.",
              translation:
                "En esta unidad わかります se usa para hablar de comprensión o entendimiento.",
              structure: [
                {
                  slot: "A",
                  value: "idioma",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[英語|えいご] / [中国語|ちゅうごくご] / [韓国語|かんこくご]。"),
                  },
                },
                {
                  slot: {
                    jp: ruby("が"),
                  },
                  value: "partícula de esta estructura",
                  note: "Aquí aparece unida a わかります.",
                },
                {
                  slot: {
                    jp: ruby("わかります"),
                  },
                  value: "comprensión",
                  note: "Expresa que entiendes o comprendes ese idioma.",
                },
              ],
              notes: [
                {
                  es: "No es exactamente la misma idea que",
                  jp: ruby("できます"),
                  note: "Aquí el foco está en entender.",
                },
              ],
            },
            {
              id: "pattern-004c-3",
              label: "Negativo de estos verbos",
              pattern: ruby("A[語|ご]ができません。 / A[語|ご]がわかりません。"),
              meaning: "No puedo manejar A. / No entiendo A.",
              translation:
                "Aquí ves el negativo en ません aplicado a dos verbos muy importantes.",
              structure: [
                {
                  slot: {
                    jp: ruby("できません"),
                  },
                  value: "negativo de できます",
                  note: "Expresa falta de capacidad o manejo.",
                },
                {
                  slot: {
                    jp: ruby("わかりません"),
                  },
                  value: "negativo de わかります",
                  note: "Expresa falta de comprensión.",
                },
                {
                  slot: {
                    jp: ruby("ではありません / じゃありません"),
                  },
                  value: "negativo especial de です",
                  note: "Sirve como contraste con lo que ya aprendiste antes.",
                },
              ],
              notes: [
                {
                  es: "Esta diferencia te ayuda a ver que",
                  jp: ruby("です"),
                  note: "no niega como los verbos en ます de esta unidad.",
                },
                {
                    es: "En esta unidad usamos",
                    jp: ruby("A[語|ご]ができません / A[語|ご]がわかりません"),
                    note: "como forma base del negativo.",
                },
                {
                    es: "También puedes encontrar",
                    jp: ruby("A[語|ご]はできません / A[語|ご]はわかりません"),
                    note:
                    "cuando el idioma se presenta como tema o cuando hay contraste. Para esta unidad, primero conviene dominar la base con が.",
                },
              ],
            },
            {
              id: "pattern-004c-4",
              label: "También con も",
              pattern: ruby("A[語|ご]がわかります。 B[語|ご]もわかります。 / A[語|ご]ができます。 B[語|ご]もできます。"),
              meaning: "Entiendo A. También entiendo B. / Puedo manejar A. También puedo manejar B.",
              translation:
                "Aquí も sigue sirviendo para añadir una segunda información que coincide con la primera.",
              structure: [
                {
                  slot: {
                    jp: ruby("も"),
                  },
                  value: "también",
                  note: "Añade un segundo idioma con la misma idea.",
                },
              ],
              notes: [
                {
                  es: "En esta unidad lo seguimos practicando de forma introductoria.",
                },
              ],
            },
            {
              id: "pattern-004c-5",
              label: "Pregunta y respuesta",
              pattern: ruby("A[語|ご]がわかりますか。 [はい]、わかります。 / [いいえ]、わかりません。"),
              meaning: "¿Entiendes A? Sí, lo entiendo. / No, no lo entiendo.",
              translation:
                "La base de preguntas y respuestas de la unidad 003 ahora se aplica a idiomas.",
              structure: [
                {
                  slot: {
                    jp: ruby("ですか / か"),
                  },
                  value: "pregunta",
                  note: "Aquí la pregunta se forma con el cierre interrogativo del verbo.",
                },
                {
                  slot: {
                    jp: ruby("[はい] / [いいえ]"),
                  },
                  value: "respuesta base",
                  note: "Sirve para afirmar o negar la comprensión o capacidad.",
                },
              ],
              notes: [
                {
                  es: "La lógica de preguntas y respuestas ya la conoces; aquí solo la aplicas a un tema nuevo.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-004c-vocabulary",
      kind: "vocabulary",
      title: "Idiomas base de esta unidad",
      description:
        "Aquí el foco está en los nombres de idiomas con 〜語.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 3,
          items: [
            {
              id: "vocab-japanese-language",
              jp: ruby("[日本語|にほんご]"),
              reading: "にほんご",
              meaning: "japonés",
              tags: ["idioma", "core"],
            },
            {
              id: "vocab-english-language",
              jp: ruby("[英語|えいご]"),
              reading: "えいご",
              meaning: "inglés",
              tags: ["idioma", "core"],
            },
            {
              id: "vocab-spanish-language",
              jp: ruby("[スペイン語|すぺいんご]"),
              reading: "すぺいんご",
              meaning: "español",
              tags: ["idioma", "core", "katakana"],
            },
            {
              id: "vocab-portuguese-language",
              jp: ruby("[ポルトガル語|ぽるとがるご]"),
              reading: "ぽるとがるご",
              meaning: "portugués",
              tags: ["idioma", "katakana"],
            },
            {
              id: "vocab-chinese-language",
              jp: ruby("[中国語|ちゅうごくご]"),
              reading: "ちゅうごくご",
              meaning: "chino",
              tags: ["idioma"],
            },
            {
              id: "vocab-korean-language",
              jp: ruby("[韓国語|かんこくご]"),
              reading: "かんこくご",
              meaning: "coreano",
              tags: ["idioma"],
            },
            {
              id: "vocab-french-language",
              jp: ruby("[フランス語|ふらんすご]"),
              reading: "ふらんすご",
              meaning: "francés",
              tags: ["idioma", "katakana"],
            },
            {
              id: "vocab-german-language",
              jp: ruby("[ドイツ語|どいつご]"),
              reading: "どいつご",
              meaning: "alemán",
              tags: ["idioma", "katakana"],
            },
            {
              id: "vocab-italian-language",
              jp: ruby("[イタリア語|いたりあご]"),
              reading: "いたりあご",
              meaning: "italiano",
              tags: ["idioma", "katakana"],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-004c-examples",
      kind: "examples",
      title: "Ejemplos en contexto",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "example-004c-1",
              jp: ruby("[私|わたし]は[スペイン語|すぺいんご]ができます。"),
              es: "Puedo manejar español.",
            },
            {
              id: "example-004c-2",
              jp: ruby("[英語|えいご]がわかります。"),
              es: "Entiendo inglés.",
            },
            {
              id: "example-004c-3",
              jp: ruby("[日本語|にほんご]ができません。"),
              es: "No puedo manejar japonés.",
              notes: [
                {
                  es: "Aquí aparece el negativo verbal en",
                  jp: ruby("ません"),
                  note: ".",
                },
              ],
            },
            {
              id: "example-004c-4",
              jp: ruby("[中国語|ちゅうごくご]がわかりません。"),
              es: "No entiendo chino.",
            },
            {
              id: "example-004c-5",
              jp: ruby("[英語|えいご]がわかります。[スペイン語|すぺいんご]もわかります。"),
              es: "Entiendo inglés. También entiendo español.",
              notes: [
                {
                  es: "La segunda oración usa",
                  jp: ruby("も"),
                  note: "porque la información coincide.",
                },
              ],
            },
            {
              id: "example-004c-6",
              jp: ruby("[カルロス|かるろす]さんは[ポルトガル語|ぽるとがるご]ができますか。[はい]、できます。[スペイン語|すぺいんご]もできます。"),
              es: "¿Carlos puede manejar portugués? Sí, puede. También puede manejar español.",
            },
            {
              id: "example-004c-7",
              jp: ruby("[アナ|あな]さんは[ドイツ語|どいつご]がわかりますか。[いいえ]、わかりません。[英語|えいご]はわかります。"),
              es: "¿Ana entiende alemán? No, no lo entiende. Pero sí entiende inglés.",
              notes: [
                {
                  es: "Aquí reaparece",
                  jp: ruby("は"),
                  note: "para contrastar una información distinta.",
                },
              ],
            },
            {
              id: "example-004c-8",
              jp: ruby("[ホセ|ほせ]さんは[フランス語|ふらんすご]ができますが、[イタリア語|いたりあご]はできません。"),
              es: "José puede manejar francés, pero no puede manejar italiano.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-004c-contrast",
      kind: "contrast",
      title: "Contrastes importantes",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-004c-1",
              label: "Capacidad vs comprensión",
              correct: {
                jp: ruby("[スペイン語|すぺいんご]ができます。 / [英語|えいご]がわかります。"),
                es: "Dos ideas cercanas, pero no idénticas.",
              },
              incorrect: {
                jp: ruby("できます と わかります は[同|おな]じです。"),
                es: "No conviene tratarlos como si fueran exactamente iguales.",
              },
              explanation:
                "En esta unidad, できます se presenta como capacidad o manejo, y わかります como comprensión.",
            },
            {
              id: "contrast-004c-2",
              label: "Negativo verbal vs negativo de です",
              correct: {
                jp: ruby("できます → できません / わかります → わかりません / です → ではありません"),
                es: "No todas las negativas siguen la misma ruta.",
              },
              incorrect: {
                jp: ruby("です → ですません"),
                es: "Esa formación no existe.",
              },
              explanation:
                "Aquí se ve con claridad que です tiene una negación distinta a la de estos verbos.",
            },
            {
              id: "contrast-004c-3",
              label: "も cuando la información coincide",
              correct: {
                jp: ruby("[英語|えいご]がわかります。[スペイン語|すぺいんご]もわかります。"),
                es: "La segunda información sigue la misma línea.",
              },
              incorrect: {
                jp: ruby("[英語|えいご]がわかります。[スペイン語|すぺいんご]がわかります。"),
                es: "No está mal, pero aquí も suena más natural porque la información coincide.",
              },
              explanation:
                "La lógica es la misma que ya empezaste a ver en la unidad anterior.",
            },
            {
              id: "contrast-004c-4",
              label: "Si la información cambia, reaparece は",
              correct: {
                jp: ruby("[英語|えいご]がわかります。[中国語|ちゅうごくご]はわかりません。"),
                es: "Aquí hay contraste entre dos informaciones distintas.",
              },
              incorrect: {
                jp: ruby("[英語|えいご]がわかります。[中国語|ちゅうごくご]もわかりません。"),
                es: "Aquí も no encaja, porque ya no estás añadiendo la misma información.",
              },
              explanation:
                "Cuando cambias la información o la contrastas, も deja de ser la opción natural.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-004c-warning",
      kind: "warning",
      title: "Qué conviene hacer aquí",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "Esta base necesita repetición",
          content:
            "Aquí aparecen a la vez una partícula importante, dos verbos base y sus negativas. No hace falta correr. Lo ideal es practicar esta unidad todos los días hasta que las formas afirmativas y negativas salgan con naturalidad.",
          bullets: [
            {
              es: "Primero deja firmes:",
              jp: ruby("〜[語|ご]ができます / 〜[語|ご]がわかります"),
            },
            {
              es: "Después automatiza sus negativas:",
              jp: ruby("できません / わかりません"),
            },
            {
              es: "Y sigue reforzando",
              jp: ruby("も"),
              note: "cuando la información coincide.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-004c-practice",
      kind: "practice",
      title: "Práctica guiada",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Cambia solo el idioma:",
              jp: ruby("[英語|えいご] → [スペイン語|すぺいんご] → [日本語|にほんご] → [中国語|ちゅうごくご]。"),
            },
            {
              es: "Decide si la idea correcta es capacidad o comprensión:",
              jp: ruby("できます / わかります"),
            },
            {
              es: "Pasa las oraciones al negativo:",
              jp: ruby("できます → できません / わかります → わかりません。"),
            },
            {
              es: "Suma un segundo idioma con",
              jp: ruby("も"),
              note: "cuando la información coincida.",
            },
            {
              es: "Haz una pregunta y responde en afirmativo y en negativo con el mismo idioma.",
            },
            {
              es: "Compara una forma negativa verbal con una negativa de",
              jp: ruby("です"),
              note: "para notar que no siguen la misma ruta.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-004c-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Puedo decir qué idioma manejo con",
              jp: ruby("〜[語|ご]ができます。"),
            },
            {
              es: "Puedo decir qué idioma entiendo con",
              jp: ruby("〜[語|ご]がわかります。"),
            },
            {
              es: "Entiendo que en esta unidad usamos",
              jp: ruby("が"),
              note: "junto a estos dos verbos.",
            },
            {
              es: "Puedo formar negativas con",
              jp: ruby("できません / わかりません。"),
            },
            {
              es: "Reconozco que el negativo de",
              jp: ruby("です"),
              note: "sigue una ruta distinta.",
            },
            {
              es: "Puedo seguir practicando",
              jp: ruby("も"),
              note: "cuando la información coincide.",
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-004c-quiz",
    title: "Quiz — Idiomas y comprensión",
    description:
      "Repaso para comprobar si ya puedes hablar de idiomas, capacidad, comprensión y negativos básicos.",
    passScore: 75,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "single-choice",
        prompt: {
          es: "¿Qué partícula usamos en esta unidad junto a estos dos verbos?",
          jp: ruby("できます / わかります"),
        },
        choices: [
          { id: "a", label: { es: "は" } },
          { id: "b", label: { es: "も" } },
          { id: "c", label: { es: "が" } },
          { id: "d", label: { es: "の" } },
        ],
        correctChoiceId: "c",
        explanation:
          "En esta unidad, が aparece junto a できます y わかります.",
        relatedSectionIds: ["lesson-004c-concept", "lesson-004c-structure"],
      },
      {
        id: "q2",
        type: "single-choice",
        prompt: {
          es: "¿Qué diferencia básica marcamos en esta unidad entre estas dos formas?",
          jp: ruby("できます / わかります"),
        },
        choices: [
          { id: "a", label: { es: "No hay ninguna diferencia real." } },
          { id: "b", label: { es: "Una expresa capacidad o manejo; la otra, comprensión." } },
          { id: "c", label: { es: "Una es pasado y la otra presente." } },
          { id: "d", label: { es: "Una es informal y la otra formal." } },
        ],
        correctChoiceId: "b",
        explanation:
          "En esta unidad, できます se presenta como capacidad o manejo, y わかります como comprensión.",
        relatedSectionIds: ["lesson-004c-concept", "lesson-004c-contrast"],
      },
      {
        id: "q3",
        type: "single-choice",
        prompt: {
          es: "¿Qué significa esta oración?",
          jp: ruby("[英語|えいご]がわかります。"),
        },
        choices: [
          { id: "a", label: { es: "Puedo escribir inglés." } },
          { id: "b", label: { es: "Entiendo inglés." } },
          { id: "c", label: { es: "No entiendo inglés." } },
          { id: "d", label: { es: "El inglés es fácil." } },
        ],
        correctChoiceId: "b",
        explanation:
          "Aquí わかります expresa comprensión.",
        relatedSectionIds: ["lesson-004c-structure", "lesson-004c-examples"],
      },
      {
        id: "q4",
        type: "single-choice",
        prompt: {
          es: "Elige la mejor forma de decir: “Puedo manejar español”.",
        },
        choices: [
          { id: "a", label: { jp: ruby("[スペイン語|すぺいんご]ができます。") } },
          { id: "b", label: { jp: ruby("[スペイン語|すぺいんご]がわかります。") } },
          { id: "c", label: { jp: ruby("[スペイン語|すぺいんご]できます。") } },
          { id: "d", label: { jp: ruby("[スペイン語|すぺいんご]ではありません。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "En esta unidad, できます es la forma que usamos para expresar capacidad o manejo.",
        relatedSectionIds: ["lesson-004c-structure"],
      },
      {
        id: "q5",
        type: "single-choice",
        prompt: {
          es: "Después de esta oración, ¿qué continuación suena más natural si la información coincide?",
          jp: ruby("[英語|えいご]がわかります。"),
        },
        choices: [
          { id: "a", label: { jp: ruby("[スペイン語|すぺいんご]もわかります。") } },
          { id: "b", label: { jp: ruby("[スペイン語|すぺいんご]はわかります。") } },
          { id: "c", label: { jp: ruby("[スペイン語|すぺいんご]がです。") } },
          { id: "d", label: { jp: ruby("[スペイン語|すぺいんご]か。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí も suena más natural porque añade una segunda información del mismo tipo.",
        relatedSectionIds: ["lesson-004c-structure", "lesson-004c-contrast"],
      },
      {
        id: "q6",
        type: "single-choice",
        prompt: {
          es: "¿Cuál es el negativo correcto de esta forma?",
          jp: ruby("できます"),
        },
        choices: [
          { id: "a", label: { jp: ruby("ではありません") } },
          { id: "b", label: { jp: ruby("できません") } },
          { id: "c", label: { jp: ruby("できますない") } },
          { id: "d", label: { jp: ruby("でません") } },
        ],
        correctChoiceId: "b",
        explanation:
          "En esta unidad, できます pasa al negativo como できません。",
        relatedSectionIds: ["lesson-004c-concept", "lesson-004c-structure"],
      },
      {
        id: "q7",
        type: "single-choice",
        prompt: {
          es: "¿Qué idea queremos destacar al comparar estas formas?",
          jp: ruby("できます → できません / です → ではありません"),
        },
        choices: [
          { id: "a", label: { es: "Que todas las negativas japonesas siguen la misma ruta." } },
          { id: "b", label: { es: "Que です también niega con ません." } },
          { id: "c", label: { es: "Que el negativo de です sigue una ruta distinta." } },
          { id: "d", label: { es: "Que できません es informal." } },
        ],
        correctChoiceId: "c",
        explanation:
          "Esta comparación sirve para mostrar que です no niega igual que estos verbos.",
        relatedSectionIds: ["lesson-004c-concept", "lesson-004c-contrast"],
      },
      {
        id: "q8",
        type: "order-sentence",
        prompt: {
          es: "Ordena los elementos para formar: “No entiendo francés”.",
        },
        tokens: [
          {
            id: "tok-french",
            value: "フランス語",
            label: { jp: ruby("[フランス語|ふらんすご]") },
          },
          {
            id: "tok-ga",
            value: "が",
            label: { jp: ruby("が") },
          },
          {
            id: "tok-not-understand",
            value: "わかりません",
            label: { jp: ruby("わかりません") },
          },
        ],
        correctOrder: ["フランス語", "が", "わかりません"],
        answerLabel: {
          jp: ruby("[フランス語|ふらんすご]がわかりません。"),
        },
        explanation:
          "La estructura mantiene idioma + が + verbo en negativo.",
        relatedSectionIds: ["lesson-004c-structure", "lesson-004c-examples"],
      },
      {
        id: "q9",
        type: "fill-blank",
        prompt: {
          es: "Completa la frase:",
          jp: ruby("[スペイン語|すぺいんご]___できます。"),
        },
        acceptedAnswers: ["が", "が。"],
        placeholder: "Escribe la partícula",
        explanation:
          "En esta unidad, la partícula de esta estructura es が.",
        relatedSectionIds: ["lesson-004c-concept", "lesson-004c-structure"],
      },
      {
        id: "q10",
        type: "fill-blank",
        prompt: {
          es: "Completa la segunda oración de forma natural:",
          jp: ruby("[英語|えいご]がわかります。[日本語|にほんご]___わかります。"),
        },
        acceptedAnswers: ["も", "も。"],
        placeholder: "Escribe la partícula",
        explanation:
          "Aquí usamos も porque la segunda oración añade la misma clase de información.",
        relatedSectionIds: ["lesson-004c-structure", "lesson-004c-contrast"],
      },
    ],
  },
};

export default lesson004c;