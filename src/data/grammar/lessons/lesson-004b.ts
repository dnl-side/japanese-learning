//src/data/grammar/lessons/lesson-004b.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson004b: GrammarLesson = {
  id: "lesson-004b",
  slug: "nacionalidad-jin-mo",
  order: 5,
  level: "N5",
  status: "ready",
  title: "Nacionalidad y も",
  jpTitle: "〜じん・も",
  shortTitle: "Nacionalidad",
  description:
    "Cómo decir la nacionalidad con 〜人, distinguirla del país de origen y usar も cuando la información coincide.",
  estimatedMinutes: 32,
  categoryTags: ["fundamentos", "nacionalidad", "particulas", "preguntas"],
  grammarTags: ["〜じん", "も", "ですか", "ではありません", "じゃありません"],
  searchTerms: [
    "nacionalidad",
    "gentilicio",
    "jin",
    "mo",
    "tambien",
    "de donde eres",
    "nacionalidad en japones",
  ],
  relatedLessonSlugs: [
    "wa-desu-basico",
    "presentacion-simple-profesiones",
    "preguntas-basicas-desu-ka",
    "pais-de-origen-shusshin",
  ],
  relatedVocabularyTags: ["nacionalidad", "gentilicios", "particulas"],
  objectives: [
    "Decir la nacionalidad con 〜人.",
    "Distinguir entre país de origen y nacionalidad.",
    "Usar も cuando la información coincide con la oración anterior.",
    "Hacer preguntas y respuestas negativas simples sobre nacionalidad.",
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
      id: "lesson-004b-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "En la unidad anterior viste cómo decir de qué país es alguien o de dónde viene. Ahora vamos a dar un paso más: decir la nacionalidad con 〜人 y usar も cuando dos personas comparten la misma información.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Aprenderás a decir nacionalidades como:",
              jp: ruby("[日本人|にほんじん] / [チリ人|ちりじん] / [ブラジル人|ぶらじるじん]。"),
            },
            {
              es: "Verás cómo",
              jp: ruby("も"),
              note: "entra en el lugar de は cuando la información coincide.",
            },
            {
              es: "También practicarás preguntas y respuestas negativas dentro del mismo tema.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-004b-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "País de origen y nacionalidad no son exactamente lo mismo",
          content:
            "En japonés conviene separar estas dos ideas. Una cosa es decir de qué país proviene alguien; otra, expresar la nacionalidad con 〜人.",
          bullets: [
            {
              jp: ruby("[出身|しゅっしん]は[チリ|ちり]です。"),
              es: "habla del país de origen",
            },
            {
              jp: ruby("[チリ人|ちりじん]です。"),
              es: "habla de la nacionalidad",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Qué hace も en esta unidad",
          content:
            "Aquí も aparece como una partícula que reemplaza a は cuando la segunda información coincide con la primera. La idea principal es “también”.",
          bullets: [
            {
              jp: ruby("[田中|たなか]さんは[日本人|にほんじん]です。"),
              es: "información base",
            },
            {
              jp: ruby("[山田|やまだ]さんも[日本人|にほんじん]です。"),
              es: "la segunda persona también tiene la misma nacionalidad",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Cuándo usar は y cuándo usar も",
          content:
            "Si la segunda oración repite la misma información, も suena muy natural. Si la información cambia o quieres contrastarla, normalmente vuelves a は.",
          bullets: [
            {
              jp: ruby("[田中|たなか]さんは[日本人|にほんじん]です。[山田|やまだ]さんも[日本人|にほんじん]です。"),
              es: "misma información → も",
            },
            {
              jp: ruby("[田中|たなか]さんは[日本人|にほんじん]ですが、[マリア|まりあ]さんは[ブラジル人|ぶらじるじん]です。"),
              es: "información distinta → は",
            },
          ],
        },
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-004b-note-nationality",
              label: "Nacionalidad",
              pattern: ruby("〜[人|じん]"),
              meaning: "Expresa gentilicio o nacionalidad.",
              translation:
                "En esta unidad usamos 〜人 para decir si alguien es japonés, chileno, brasileño, etc.",
            },
            {
              id: "pattern-004b-note-mo",
              label: "Partícula も",
              pattern: ruby("も"),
              meaning: "También",
              translation:
                "Reemplaza a は cuando quieres añadir una segunda persona con la misma información.",
            },
            {
              id: "pattern-004b-note-scope",
              label: "Enfoque de la unidad",
              pattern: ruby("[出身|しゅっしん] / 〜[人|じん] / も / ですか / ではありません"),
              meaning: "Trabajamos nacionalidad con preguntas y negativas.",
              translation:
                "Todavía no entramos en idiomas; aquí el foco es nacionalidad y coincidencia de información.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-004b-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-004b-1",
              label: "Nacionalidad básica",
              pattern: ruby("A は 〜[人|じん]です。"),
              meaning: "A es de nacionalidad X.",
              translation:
                "Se usa para decir la nacionalidad de una persona de forma simple.",
              structure: [
                {
                  slot: "A",
                  value: "persona",
                  note: "La persona de la que hablas.",
                },
                {
                  slot: {
                    jp: ruby("〜[人|じん]"),
                  },
                  value: "gentilicio",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[日本人|にほんじん] / [チリ人|ちりじん] / [ブラジル人|ぶらじるじん]。"),
                  },
                },
                {
                  slot: {
                    jp: ruby("です"),
                  },
                  value: "cierre cortés",
                  note: "La estructura sigue siendo una oración nominal simple.",
                },
              ],
              notes: [
                {
                  es: "Aquí hablamos de nacionalidad, no de país de origen.",
                },
              ],
            },
            {
              id: "pattern-004b-2",
              label: "También con も",
              pattern: ruby("A も 〜[人|じん]です。 / A も B も 〜[人|じん]です。"),
              meaning: "A también es X. / A y B también son X.",
              translation:
                "も entra donde antes estaba は cuando la información coincide con la oración anterior.",
              structure: [
                {
                  slot: {
                    jp: ruby("も"),
                  },
                  value: "también",
                  note: {
                    es: "En esta unidad reemplaza a は cuando la segunda información es la misma.",
                  },
                },
                {
                  slot: {
                    jp: ruby("A も B も"),
                  },
                  value: "dos temas con la misma información",
                  note: "Sirve para unir dos personas dentro de la misma idea.",
                },
              ],
              notes: [
                {
                  es: "Si la información cambia, normalmente vuelves a usar",
                  jp: ruby("は"),
                  note: "para presentar o contrastar.",
                },
              ],
            },
            {
              id: "pattern-004b-3",
              label: "Pregunta y respuesta negativa",
              pattern: ruby("A は 〜[人|じん]ですか。 [いいえ]、A は 〜[人|じん]ではありません。 〜[人|じん]です。"),
              meaning: "¿A es X? No, A no es X. Es Y.",
              translation:
                "La misma gramática de preguntas y negativas de la unidad anterior ahora se aplica a nacionalidades.",
              structure: [
                {
                  slot: {
                    jp: ruby("ですか"),
                  },
                  value: "pregunta",
                  note: "Se añade al final para preguntar por la nacionalidad.",
                },
                {
                  slot: {
                    jp: ruby("ではありません / じゃありません"),
                  },
                  value: "negación",
                  note: {
                    es: "Ambas sirven aquí; ではありません suena más rígida y じゃありません más conversacional.",
                  },
                },
                {
                  slot: {
                    jp: ruby("[いいえ]"),
                  },
                  value: "respuesta negativa",
                  note: "Introduce una corrección o negación de la idea anterior.",
                },
              ],
              notes: [
                {
                  es: "Después de negar, puedes corregir con la nacionalidad correcta.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-004b-vocabulary",
      kind: "vocabulary",
      title: "Gentilicios base de esta unidad",
      description:
        "Aquí el foco ya no es el país como lugar, sino la nacionalidad expresada con 〜人.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 3,
          items: [
            {
              id: "vocab-japanese",
              jp: ruby("[日本人|にほんじん]"),
              reading: "にほんじん",
              meaning: "japonés / japonesa",
              tags: ["gentilicio", "core"],
            },
            {
              id: "vocab-korean",
              jp: ruby("[韓国人|かんこくじん]"),
              reading: "かんこくじん",
              meaning: "coreano / coreana",
              tags: ["gentilicio"],
            },
            {
              id: "vocab-chinese",
              jp: ruby("[中国人|ちゅうごくじん]"),
              reading: "ちゅうごくじん",
              meaning: "chino / china",
              tags: ["gentilicio"],
            },
            {
              id: "vocab-british",
              jp: ruby("[イギリス人|いぎりすじん]"),
              reading: "いぎりすじん",
              meaning: "británico / británica",
              tags: ["gentilicio", "katakana"],
            },
            {
              id: "vocab-italian",
              jp: ruby("[イタリア人|いたりあじん]"),
              reading: "いたりあじん",
              meaning: "italiano / italiana",
              tags: ["gentilicio", "katakana"],
            },
            {
              id: "vocab-french",
              jp: ruby("[フランス人|ふらんすじん]"),
              reading: "ふらんすじん",
              meaning: "francés / francesa",
              tags: ["gentilicio", "katakana"],
            },
            {
              id: "vocab-german",
              jp: ruby("[ドイツ人|どいつじん]"),
              reading: "どいつじん",
              meaning: "alemán / alemana",
              tags: ["gentilicio", "katakana"],
            },
            {
              id: "vocab-american",
              jp: ruby("[アメリカ人|あめりかじん]"),
              reading: "あめりかじん",
              meaning: "estadounidense",
              tags: ["gentilicio", "katakana"],
            },
            {
              id: "vocab-mexican",
              jp: ruby("[メキシコ人|めきしこじん]"),
              reading: "めきしこじん",
              meaning: "mexicano / mexicana",
              tags: ["gentilicio", "katakana"],
            },
            {
              id: "vocab-brazilian",
              jp: ruby("[ブラジル人|ぶらじるじん]"),
              reading: "ぶらじるじん",
              meaning: "brasileño / brasileña",
              tags: ["gentilicio", "katakana"],
            },
            {
              id: "vocab-argentinian",
              jp: ruby("[アルゼンチン人|あるぜんちんじん]"),
              reading: "あるぜんちんじん",
              meaning: "argentino / argentina",
              tags: ["gentilicio", "katakana"],
            },
            {
              id: "vocab-peruvian",
              jp: ruby("[ペルー人|ぺるうじん]"),
              reading: "ぺるうじん",
              meaning: "peruano / peruana",
              tags: ["gentilicio", "katakana"],
            },
            {
              id: "vocab-chilean",
              jp: ruby("[チリ人|ちりじん]"),
              reading: "ちりじん",
              meaning: "chileno / chilena",
              tags: ["gentilicio", "core", "katakana"],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-004b-examples",
      kind: "examples",
      title: "Ejemplos en contexto",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "example-004b-1",
              jp: ruby("[私|わたし]は[チリ人|ちりじん]です。"),
              es: "Soy chileno / chilena.",
            },
            {
              id: "example-004b-2",
              jp: ruby("[田中|たなか]さんは[日本人|にほんじん]です。[山田|やまだ]さんも[日本人|にほんじん]です。"),
              es: "Tanaka es japonés. Yamada también es japonés.",
              notes: [
                {
                  es: "La segunda oración usa",
                  jp: ruby("も"),
                  note: "porque la información coincide.",
                },
              ],
            },
            {
              id: "example-004b-3",
              jp: ruby("[カルロス|かるろす]さんは[チリ人|ちりじん]です。[私|わたし]もです。"),
              es: "Carlos es chileno. Yo también.",
              notes: [
                {
                  es: "Aquí no hace falta repetir toda la nacionalidad; la respuesta compacta ya se entiende.",
                },
              ],
            },
            {
              id: "example-004b-4",
              jp: ruby("[マリア|まりあ]さんは[日本人|にほんじん]ですか。[いいえ]、[マリア|まりあ]さんは[日本人|にほんじん]ではありません。[ブラジル人|ぶらじるじん]です。"),
              es: "¿María es japonesa? No, María no es japonesa. Es brasileña.",
              notes: [
                {
                  es: "Aquí corregimos una nacionalidad con una respuesta negativa completa.",
                },
              ],
            },
            {
              id: "example-004b-5",
              jp: ruby("[田中|たなか]さんは[日本人|にほんじん]ですが、[マリア|まりあ]さんは[ブラジル人|ぶらじるじん]です。"),
              es: "Tanaka es japonés, pero María es brasileña.",
              notes: [
                {
                  es: "Como la información cambia, aquí vuelve a aparecer",
                  jp: ruby("は"),
                  note: "y no も.",
                },
              ],
            },
            {
              id: "example-004b-6",
              jp: ruby("[出身|しゅっしん]は[チリ|ちり]です。[チリ人|ちりじん]です。"),
              es: "Soy de Chile. Soy chileno / chilena.",
              notes: [
                {
                  es: "La primera frase habla del país de origen; la segunda, de la nacionalidad.",
                },
              ],
            },
            {
              id: "example-004b-7",
              jp: ruby("[マリア|まりあ]さんも[ルシア|るしあ]さんも[アルゼンチン人|あるぜんちんじん]です。"),
              es: "María y Lucía también son argentinas.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-004b-contrast",
      kind: "contrast",
      title: "Contrastes importantes",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-004b-1",
              label: "Origen vs nacionalidad",
              correct: {
                jp: ruby("[出身|しゅっしん]は[チリ|ちり]です。 / [チリ人|ちりじん]です。"),
                es: "Las dos frases son válidas, pero no expresan exactamente la misma idea.",
              },
              incorrect: {
                jp: ruby("[出身|しゅっしん]と[チリ人|ちりじん]は[同|おな]じです。"),
                es: "No conviene tratarlas como si fueran idénticas.",
              },
              explanation:
                "出身 responde al origen o procedencia; 〜人 expresa la nacionalidad.",
            },
            {
              id: "contrast-004b-2",
              label: "も reemplaza a は cuando la información coincide",
              correct: {
                jp: ruby("[田中|たなか]さんは[日本人|にほんじん]です。[山田|やまだ]さんも[日本人|にほんじん]です。"),
                es: "La segunda persona comparte la misma información.",
              },
              incorrect: {
                jp: ruby("[田中|たなか]さんは[日本人|にほんじん]です。[山田|やまだ]さんは[日本人|にほんじん]です。"),
                es: "No está mal, pero aquí も suena más natural porque la información coincide.",
              },
              explanation:
                "も evita repetir la misma estructura con は cuando el contenido sigue en la misma línea.",
            },
            {
              id: "contrast-004b-3",
              label: "Si la información cambia, vuelve a は",
              correct: {
                jp: ruby("[田中|たなか]さんは[日本人|にほんじん]ですが、[マリア|まりあ]さんは[ブラジル人|ぶらじるじん]です。"),
                es: "Aquí hay contraste entre dos nacionalidades distintas.",
              },
              incorrect: {
                jp: ruby("[田中|たなか]さんは[日本人|にほんじん]ですが、[マリア|まりあ]さんも[ブラジル人|ぶらじるじん]です。"),
                es: "Aquí も no encaja porque la información ya no coincide con la primera.",
              },
              explanation:
                "Cuando cambias la información o la contrastas, も deja de ser la opción natural.",
            },
            {
              id: "contrast-004b-4",
              label: "Negación coherente",
              correct: {
                jp: ruby("[いいえ]、[マリア|まりあ]さんは[日本人|にほんじん]ではありません。[ブラジル人|ぶらじるじん]です。"),
                es: "Negación más corrección.",
              },
              incorrect: {
                jp: ruby("[いいえ]、[マリア|まりあ]さんは[日本人|にほんじん]です。"),
                es: "La frase contradice el いいえ inicial.",
              },
              explanation:
                "Si la respuesta empieza con いいえ, la continuación debe negar o corregir la información anterior.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-004b-warning",
      kind: "warning",
      title: "Qué todavía no estamos viendo",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "Todavía no entramos en idiomas",
          content:
            "En esta unidad nos concentramos en nacionalidad y en el uso introductorio de も. Todavía no veremos expresiones como “hablar un idioma” o “entender un idioma”.",
          bullets: [
            {
              es: "Aquí fijamos:",
              jp: ruby("〜[人|じん] / も / ですか / ではありません / じゃありません"),
            },
            {
              es: "Más adelante vendrán los idiomas con otras estructuras y otros verbos.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-004b-practice",
      kind: "practice",
      title: "Práctica guiada",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Cambia solo la nacionalidad:",
              jp: ruby("[日本人|にほんじん] → [チリ人|ちりじん] → [ブラジル人|ぶらじるじん] → [アルゼンチン人|あるぜんちんじん]。"),
            },
            {
              es: "Transforma la segunda oración para que use",
              jp: ruby("も"),
              note: "cuando la información sea la misma.",
            },
            {
              es: "Haz una pregunta de nacionalidad y responde negativamente con corrección:",
              jp: ruby("[マリア|まりあ]さんは[日本人|にほんじん]ですか。 [いいえ]、[マリア|まりあ]さんは[日本人|にほんじん]ではありません。[ブラジル人|ぶらじるじん]です。"),
            },
            {
              es: "Contrasta dos personas con nacionalidades distintas usando",
              jp: ruby("は"),
              note: "en ambas oraciones.",
            },
            {
              es: "Practica la respuesta corta:",
              jp: ruby("[私|わたし]もです。"),
            },
          ],
        },
      ],
    },
    {
      id: "lesson-004b-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Puedo decir la nacionalidad con",
              jp: ruby("〜[人|じん]です。"),
            },
            {
              es: "Entiendo la diferencia entre",
              jp: ruby("[出身|しゅっしん]は[チリ|ちり]です。"),
              note: "y",
            },
            {
              jp: ruby("[チリ人|ちりじん]です。"),
              es: "como idea distinta.",
            },
            {
              es: "Puedo usar",
              jp: ruby("も"),
              note: "cuando la información coincide con la oración anterior.",
            },
            {
              es: "Puedo hacer preguntas y respuestas negativas simples sobre nacionalidad.",
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-004b-quiz",
    title: "Quiz — Nacionalidad y も",
    description:
      "Repaso para comprobar si ya puedes hablar de nacionalidad, usar も y responder preguntas simples del tema.",
    passScore: 75,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "single-choice",
        prompt: {
          es: "¿Qué expresa",
          jp: ruby("〜[人|じん]"),
          note: "en esta unidad?",
        },
        choices: [
          { id: "a", label: { es: "País de origen exclusivamente." } },
          { id: "b", label: { es: "Nacionalidad o gentilicio." } },
          { id: "c", label: { es: "Idioma que se habla." } },
          { id: "d", label: { es: "Lugar de llegada." } },
        ],
        correctChoiceId: "b",
        explanation:
          "En esta unidad, 〜人 sirve para expresar nacionalidad o gentilicio.",
        relatedSectionIds: ["lesson-004b-concept", "lesson-004b-structure"],
      },
      {
        id: "q2",
        type: "single-choice",
        prompt: {
          es: "¿Cuál es la diferencia principal entre estas dos frases?",
          jp: ruby("[出身|しゅっしん]は[チリ|ちり]です。 / [チリ人|ちりじん]です。"),
        },
        choices: [
          { id: "a", label: { es: "No hay ninguna diferencia real." } },
          { id: "b", label: { es: "La primera habla de origen; la segunda, de nacionalidad." } },
          { id: "c", label: { es: "La primera es pregunta y la segunda respuesta." } },
          { id: "d", label: { es: "La segunda habla de idioma." } },
        ],
        correctChoiceId: "b",
        explanation:
          "出身 responde al origen; 〜人 expresa nacionalidad.",
        relatedSectionIds: ["lesson-004b-concept", "lesson-004b-contrast"],
      },
      {
        id: "q3",
        type: "single-choice",
        prompt: {
          es: "Elige la mejor forma de decir: “María es brasileña”.",
        },
        choices: [
          { id: "a", label: { jp: ruby("[マリア|まりあ]さんは[ブラジル人|ぶらじるじん]です。") } },
          { id: "b", label: { jp: ruby("[マリア|まりあ]さんは[ブラジル|ぶらじる]です。") } },
          { id: "c", label: { jp: ruby("[マリア|まりあ]さんも[ブラジル人|ぶらじるじん]か。") } },
          { id: "d", label: { jp: ruby("[マリア|まりあ]さん[ブラジル人|ぶらじるじん]です。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "La estructura básica sigue siendo A は 〜人です。",
        relatedSectionIds: ["lesson-004b-structure", "lesson-004b-vocabulary"],
      },
      {
        id: "q4",
        type: "single-choice",
        prompt: {
          es: "Después de esta oración, ¿qué continuación suena más natural si la información es la misma?",
          jp: ruby("[田中|たなか]さんは[日本人|にほんじん]です。"),
        },
        choices: [
          { id: "a", label: { jp: ruby("[山田|やまだ]さんも[日本人|にほんじん]です。") } },
          { id: "b", label: { jp: ruby("[山田|やまだ]さんは[日本人|にほんじん]ですが。") } },
          { id: "c", label: { jp: ruby("[山田|やまだ]さん[日本人|にほんじん]です。") } },
          { id: "d", label: { jp: ruby("[山田|やまだ]さんか[日本人|にほんじん]です。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Cuando la segunda información coincide, も suena más natural que repetir は.",
        relatedSectionIds: ["lesson-004b-concept", "lesson-004b-contrast"],
      },
      {
        id: "q5",
        type: "single-choice",
        prompt: {
          es: "¿Cuál encaja mejor si la información cambia?",
          jp: ruby("[田中|たなか]さんは[日本人|にほんじん]です。"),
        },
        choices: [
          { id: "a", label: { jp: ruby("[マリア|まりあ]さんも[ブラジル人|ぶらじるじん]です。") } },
          { id: "b", label: { jp: ruby("[マリア|まりあ]さんは[ブラジル人|ぶらじるじん]です。") } },
          { id: "c", label: { jp: ruby("[マリア|まりあ]さん[ブラジル人|ぶらじるじん]です。") } },
          { id: "d", label: { jp: ruby("[マリア|まりあ]さんです[ブラジル人|ぶらじるじん]。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "Si la información cambia, vuelves a usar は para presentar o contrastar.",
        relatedSectionIds: ["lesson-004b-concept", "lesson-004b-contrast"],
      },
      {
        id: "q6",
        type: "single-choice",
        prompt: {
          es: "Elige la mejor respuesta para esta pregunta:",
          jp: ruby("[マリア|まりあ]さんは[日本人|にほんじん]ですか。"),
        },
        choices: [
          { id: "a", label: { jp: ruby("[いいえ]、[マリア|まりあ]さんは[日本人|にほんじん]ではありません。[ブラジル人|ぶらじるじん]です。") } },
          { id: "b", label: { jp: ruby("[いいえ]、[マリア|まりあ]さんは[日本人|にほんじん]です。") } },
          { id: "c", label: { jp: ruby("[はい]、[ブラジル人|ぶらじるじん]です。") } },
          { id: "d", label: { jp: ruby("[ブラジル人|ぶらじるじん]ですか。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "La opción correcta niega la nacionalidad anterior y luego la corrige con la nacionalidad real.",
        relatedSectionIds: ["lesson-004b-structure", "lesson-004b-examples"],
      },
      {
        id: "q7",
        type: "order-sentence",
        prompt: {
          es: "Ordena los elementos para formar: “Tanaka también es japonés”.",
        },
        tokens: [
          {
            id: "tok-tanaka",
            value: "田中さん",
            label: { jp: ruby("[田中|たなか]さん") },
          },
          {
            id: "tok-mo",
            value: "も",
            label: { jp: ruby("も") },
          },
          {
            id: "tok-japanese",
            value: "日本人",
            label: { jp: ruby("[日本人|にほんじん]") },
          },
          {
            id: "tok-desu",
            value: "です",
            label: { jp: ruby("です") },
          },
        ],
        correctOrder: ["田中さん", "も", "日本人", "です"],
        answerLabel: {
          jp: ruby("[田中|たなか]さんも[日本人|にほんじん]です。"),
        },
        explanation:
          "Aquí も reemplaza a は porque la información coincide con lo anterior.",
        relatedSectionIds: ["lesson-004b-structure", "lesson-004b-contrast"],
      },
      {
        id: "q8",
        type: "fill-blank",
        prompt: {
          es: "Completa la respuesta corta:",
          jp: ruby("[アナ|あな]さんは[チリ人|ちりじん]です。 [私|わたし]___です。"),
        },
        acceptedAnswers: ["も", "も。"],
        placeholder: "Escribe la partícula",
        explanation:
          "La respuesta compacta correcta es 私もです。",
        relatedSectionIds: ["lesson-004b-examples", "lesson-004b-practice"],
      },
      {
        id: "q9",
        type: "fill-blank",
        prompt: {
          es: "Completa una respuesta negativa válida:",
          jp: ruby("[いいえ]、[日本人|にほんじん]___。[ブラジル人|ぶらじるじん]です。"),
        },
        acceptedAnswers: [
          "ではありません",
          "ではありません。",
          "じゃありません",
          "じゃありません。",
        ],
        placeholder: "Escribe la negación",
        explanation:
          "En esta unidad aceptamos tanto ではありません como じゃありません.",
        relatedSectionIds: ["lesson-004b-structure", "lesson-004b-examples"],
      },
      {
        id: "q10",
        type: "single-choice",
        prompt: {
          es: "¿Qué respuesta corta completa mejor este diálogo?",
          jp: ruby("[ホセ|ほせ]さんは[チリ人|ちりじん]です。"),
        },
        choices: [
          { id: "a", label: { jp: ruby("[私|わたし]もです。") } },
          { id: "b", label: { jp: ruby("[私|わたし]はです。") } },
          { id: "c", label: { jp: ruby("[私|わたし]も[チリ|ちり]です。") } },
          { id: "d", label: { jp: ruby("[私|わたし]ですも。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "私もです。 es una respuesta compacta y natural cuando la información ya está clara.",
        relatedSectionIds: ["lesson-004b-examples", "lesson-004b-practice"],
      },
    ],
  },
};

export default lesson004b;