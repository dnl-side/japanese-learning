//src/data/grammar/lessons/lesson-006.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson006: GrammarLesson = {
  id: "lesson-006",
  slug: "matome-1-5-presentacion-integrada",
  order: 9,
  level: "N5",
  status: "ready",
  title: "まとめ 1〜5",
  jpTitle: "まとめ・しょうかい",
  shortTitle: "Resumen integrado",
  description:
    "Lectura y repaso integrado de todo lo visto hasta ahora: presentación, origen, nacionalidad, idiomas, edad, números y uso básico de も dentro de mini perfiles reales.",
  estimatedMinutes: 48,
  categoryTags: ["matome", "fundamentos", "lectura", "presentacion", "integracion"],
  grammarTags: [
    "はじめまして",
    "A は B です",
    "出身",
    "〜人",
    "〜語",
    "ができます",
    "がわかります",
    "〜歳",
    "おいくつ",
    "何歳",
    "も",
  ],
  searchTerms: [
    "matome n5 inicial",
    "resumen unidad 1 5",
    "presentacion integrada japones",
    "origen nacionalidad idioma edad",
    "mini lectura japones n5",
    "texto presentacion japones",
  ],
  relatedLessonSlugs: [
    "wa-desu-basico",
    "presentacion-simple-profesiones",
    "preguntas-basicas-desu-ka",
    "pais-de-origen-shusshin",
    "nacionalidad-jin-mo",
    "idiomas-ga-dekimasu-wakarimasu",
    "numeros-1-99",
    "edad-oikutsu-nansai",
  ],
  relatedVocabularyTags: ["presentacion", "profesiones", "paises", "idiomas", "edad", "numeros"],
  objectives: [
    "Leer perfiles cortos que integran todo lo visto hasta ahora.",
    "Reconocer dentro de un mismo texto nombre, profesión, origen, nacionalidad, idioma y edad.",
    "Distinguir país, nacionalidad e idioma sin confundir funciones.",
    "Usar も de forma natural cuando la información coincide.",
    "Aplicar la base de preguntas y respuestas a un contexto más real y compacto.",
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
      id: "lesson-006-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "Hasta aquí ya viste las piezas por separado: cómo presentarte, cómo preguntar, cómo decir origen, nacionalidad, idioma y edad. En esta lección no entra una gramática nueva pesada; la idea es juntar todo dentro de textos cortos y naturales para que la unidad se convierta en una base usable de verdad.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Leerás perfiles compactos con estructuras como:",
              jp: ruby("[日本出身|にほんしゅっしん]です。 / [日本人|にほんじん]です。 / [日本語|にほんご]ができます。 / [18歳|じゅうはっさい]です。"),
            },
            {
              es: "Vas a tener que distinguir bien",
              jp: ruby("[国|くに] / 〜[人|じん] / 〜[語|ご]"),
              note: "sin mezclar país, nacionalidad e idioma.",
            },
            {
              es: "Al final harás un quiz de integración con preguntas variadas, no solo repetición mecánica.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-006-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Ahora toca leer la información junta",
          content:
            "Hasta ahora cada lección tenía un foco claro. En una situación real, esa información aparece combinada. Una misma presentación puede incluir nombre, profesión, país de origen, nacionalidad, idiomas y edad en muy pocas líneas.",
          bullets: [
            {
              jp: ruby("[私|わたし]は[鈴木|すずき][昌|あきら]です。"),
              es: "nombre",
            },
            {
              jp: ruby("[日本出身|にほんしゅっしん]です。 / [日本人|にほんじん]です。"),
              es: "origen y nacionalidad",
            },
            {
              jp: ruby("[日本語|にほんご]ができます。"),
              es: "idioma",
            },
            {
              jp: ruby("[51歳|ごじゅういっさい]です。"),
              es: "edad",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "No confundas tres cosas que se parecen",
          content:
            "En este punto del curso ya es importante separar tres ideas que muchos estudiantes mezclan al principio: país, nacionalidad e idioma. Que una palabra suene relacionada no significa que cumpla la misma función dentro de la frase.",
          bullets: [
            {
              jp: ruby("[イタリア|いたりあ]"),
              es: "país",
            },
            {
              jp: ruby("[イタリア人|いたりあじん]"),
              es: "nacionalidad",
            },
            {
              jp: ruby("[イタリア語|いたりあご]"),
              es: "idioma",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "El quiz aquí pide pensar, no solo repetir",
          content:
            "Algunas preguntas de esta unidad te harán usar deducción. Por ejemplo, si una persona es de Argentina, no significa que el idioma sea アルゼンチン語. Aquí ya empiezas a relacionar la información y no solo a copiar el patrón visible.",
          bullets: [
            {
              jp: ruby("[アルゼンチン人|あるぜんちんじん]です。"),
              es: "La nacionalidad",
            },
            {
              jp: ruby("[スペイン語|すぺいんご]ができます。"),
              es: "El idioma nace del país que da origen a la palabra",
            },
            {
              jp: ruby("[ブラジル人|ぶらじるじん]です。[ポルトガル語|ぽるとがるご]ができます"),
              es: "Por eso idiomas como español nace de España, portugués de Portugal, inglés de Inglaterra, etc.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-006-structure",
      kind: "structure",
      title: "Patrones que ya deberías reconocer juntos",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
                id: "pattern-006-1",
                label: "Perfil básico integrado",
                pattern: ruby("[私|わたし]はAです。Bです。C[出身|しゅっしん]です。D[語|ご]ができます。E[歳|さい]です。"),
                meaning: "Nombre + profesión o rol + origen + idioma + edad.",
                translation:
                    "Este es el esqueleto general de muchos de los textos de esta lección. No siempre aparecerán todas las piezas, pero ya deberías poder reconocerlas cuando se juntan.",
                structure: [
                    {
                    slot: "A",
                    value: "nombre",
                    note: "La persona que habla o de la que se habla.",
                    },
                    {
                    slot: "B",
                    value: "profesión o rol",
                    note: {
                        es: "Por ejemplo:",
                        jp: ruby("[学生|がくせい] / [先生|せんせい] / [医者|いしゃ] / エンジニア / [会社員|かいしゃいん]。"),
                    },
                    },
                    {
                    slot: "C",
                    value: "país de origen",
                    note: {
                        es: "Va antes de",
                        jp: ruby("[出身|しゅっしん]。"),
                    },
                    },
                    {
                    slot: "D",
                    value: "idioma",
                    note: {
                        es: "Se expresa con",
                        jp: ruby("〜[語|ご]"),
                        note: "y aquí lo trabajamos sobre todo con ができます。",
                    },
                    },
                    {
                    slot: "E",
                    value: "edad",
                    note: {
                        es: "Puede incluir lecturas especiales como:",
                        jp: ruby("[1歳|いっさい] / [8歳|はっさい] / [10歳|じゅっさい] / [20歳|はたち]。"),
                    },
                    },
                ],
                notes: [
                    "No hace falta forzar todas las piezas en todas las presentaciones.",
                    "Lo importante aquí es reconocer cómo encajan cuando aparecen juntas.",
                ],
                },
            {
              id: "pattern-006-2",
              label: "Coincidencia con も",
              pattern: ruby("AさんはXです。BさんもXです。"),
              meaning: "A es X. B también es X.",
              translation:
                "Si la segunda información coincide con la primera, も reemplaza de forma natural a は.",
              structure: [
                {
                  slot: {
                    jp: ruby("も"),
                  },
                  value: "también",
                  note: "Aparece cuando la segunda información coincide con la anterior.",
                },
              ],
              notes: [
                {
                  es: "Esto sirve con nacionalidad, idioma, edad y muchas otras categorías simples.",
                },
              ],
            },
            {
              id: "pattern-006-3",
              label: "Pregunta y corrección",
              pattern: ruby("AさんはXですか。 [いいえ]、[違|ちが]います。Yです。"),
              meaning: "¿A es X? No, no lo es. Es Y.",
              translation:
                "La lógica de la lesson 003 vuelve a aparecer aquí, pero ahora aplicada a nacionalidad, profesión, edad u otra información ya vista.",
              structure: [
                {
                  slot: "X",
                  value: "información propuesta",
                  note: "La información inicial que hay que confirmar o corregir.",
                },
                {
                  slot: "Y",
                  value: "información correcta",
                  note: "La corrección natural después de いいえ、違います。",
                },
              ],
              notes: [
                {
                  es: "No hace falta repetir siempre toda la frase si el contexto ya está claro, pero aquí mantenemos la forma completa para fijar bien la base.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-006-vocabulary",
      kind: "vocabulary",
      title: "Vocabulario de repaso y expansión ligera",
      description:
        "La base de esta unidad reutiliza mucho de lo ya visto y suma unas pocas palabras nuevas para que los textos no se sientan repetidos.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 3,
          items: [
            {
              id: "vocab-006-student",
              jp: ruby("[学生|がくせい]"),
              reading: "がくせい",
              meaning: "estudiante",
              tags: ["rol", "repaso", "core"],
            },
            {
              id: "vocab-006-teacher",
              jp: ruby("[先生|せんせい]"),
              reading: "せんせい",
              meaning: "profesor / profesora",
              tags: ["rol", "repaso", "core"],
            },
            {
              id: "vocab-006-engineer",
              jp: ruby("エンジニア"),
              reading: "えんじにあ",
              meaning: "ingeniero / ingeniera",
              tags: ["profesion", "repaso"],
            },
            {
              id: "vocab-006-doctor",
              jp: ruby("[医者|いしゃ]"),
              reading: "いしゃ",
              meaning: "médico / médica",
              tags: ["profesion", "repaso"],
            },
            {
              id: "vocab-006-company",
              jp: ruby("[会社員|かいしゃいん]"),
              reading: "かいしゃいん",
              meaning: "empleado / empleada de empresa",
              tags: ["profesion", "repaso"],
            },
            {
              id: "vocab-006-astronaut",
              jp: ruby("[宇宙飛行士|うちゅうひこうし]"),
              reading: "うちゅうひこうし",
              meaning: "astronauta",
              tags: ["profesion", "nuevo"],
            },
            {
              id: "vocab-006-chef",
              jp: ruby("シェフ"),
              reading: "しぇふ",
              meaning: "chef",
              tags: ["profesion", "nuevo"],
            },
            {
              id: "vocab-006-designer",
              jp: ruby("デザイナー"),
              reading: "でざいなー",
              meaning: "diseñador / diseñadora",
              tags: ["profesion", "nuevo"],
            },
            {
              id: "vocab-006-singer",
              jp: ruby("[歌手|かしゅ]"),
              reading: "かしゅ",
              meaning: "cantante",
              tags: ["profesion", "nuevo"],
            },
            {
              id: "vocab-006-nurse",
              jp: ruby("[看護師|かんごし]"),
              reading: "かんごし",
              meaning: "enfermero / enfermera",
              tags: ["profesion", "nuevo", "quiz"],
            },
            {
              id: "vocab-006-researcher",
              jp: ruby("[研究者|けんきゅうしゃ]"),
              reading: "けんきゅうしゃ",
              meaning: "investigador / investigadora",
              tags: ["profesion", "nuevo", "distractor"],
            },
            {
              id: "vocab-006-shopstaff",
              jp: ruby("[店員|てんいん]"),
              reading: "てんいん",
              meaning: "dependiente / empleado de tienda",
              tags: ["profesion", "nuevo", "distractor"],
            },
            {
              id: "vocab-006-argentina",
              jp: ruby("アルゼンチン"),
              reading: "あるぜんちん",
              meaning: "Argentina",
              tags: ["pais", "nuevo", "core"],
            },
            {
              id: "vocab-006-italy",
              jp: ruby("イタリア"),
              reading: "いたりあ",
              meaning: "Italia",
              tags: ["pais", "nuevo", "core"],
            },
            {
              id: "vocab-006-uk",
              jp: ruby("イギリス"),
              reading: "いぎりす",
              meaning: "Reino Unido",
              tags: ["pais", "nuevo", "core"],
            },
            {
              id: "vocab-006-portugal",
              jp: ruby("ポルトガル"),
              reading: "ぽるとがる",
              meaning: "Portugal",
              tags: ["pais", "nuevo", "core"],
            },
            {
              id: "vocab-006-germany",
              jp: ruby("ドイツ"),
              reading: "どいつ",
              meaning: "Alemania",
              tags: ["pais", "nuevo", "quiz"],
            },
            {
              id: "vocab-006-australia",
              jp: ruby("オーストラリア"),
              reading: "おーすとらりあ",
              meaning: "Australia",
              tags: ["pais", "nuevo", "quiz"],
            },
            {
              id: "vocab-006-mexico",
              jp: ruby("メキシコ"),
              reading: "めきしこ",
              meaning: "México",
              tags: ["pais", "nuevo", "quiz"],
            },
            {
              id: "vocab-006-spain",
              jp: ruby("[スペイン|すぺいん]"),
              reading: "すぺいん",
              meaning: "España",
              tags: ["pais", "nuevo", "distractor"],
            },
            {
              id: "vocab-006-usa",
              jp: ruby("アメリカ"),
              reading: "あめりか",
              meaning: "Estados Unidos",
              tags: ["pais", "nuevo", "distractor"],
            },
            {
              id: "vocab-006-italian",
              jp: ruby("[イタリア語|いたりあご]"),
              reading: "いたりあご",
              meaning: "italiano",
              tags: ["idioma", "nuevo", "core"],
            },
            {
              id: "vocab-006-portuguese",
              jp: ruby("[ポルトガル語|ぽるとがるご]"),
              reading: "ぽるとがるご",
              meaning: "portugués",
              tags: ["idioma", "nuevo", "core"],
            },
            {
              id: "vocab-006-german",
              jp: ruby("[ドイツ語|どいつご]"),
              reading: "どいつご",
              meaning: "alemán",
              tags: ["idioma", "nuevo", "quiz"],
            },
            {
              id: "vocab-006-spanish",
              jp: ruby("[スペイン語|すぺいんご]"),
              reading: "すぺいんご",
              meaning: "español",
              tags: ["idioma", "repaso", "core"],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-006-examples",
      kind: "examples",
      title: "Textos de lectura integrada",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "example-006-1",
              jp: ruby("[初|はじ]めまして。[私|わたし]は[鈴木|すずき][昌|あきら]です。[日本出身|にほんしゅっしん]です。[宇宙飛行士|うちゅうひこうし]です。[51歳|ごじゅういっさい]です。[日本語|にほんご]ができます。[英語|えいご]もできます。よろしくお[願|ねが]いします。"),
              es: "Mucho gusto. Soy Akira Suzuki. Soy de Japón. Soy astronauta. Tengo 51 años. Puedo usar japonés. También puedo usar inglés. Encantado.",
              notes: [
                {
                  note: "Este texto integra saludo, nombre, origen, profesión, edad, idioma y も dentro de una presentación compacta.",
                },
              ],
            },
            {
              id: "example-006-2",
              jp: ruby("[彼女|かのじょ]は[マリア|まりあ]さんです。[アルゼンチン人|あるぜんちんじん]です。[ブエノスアイレス出身|ぶえのすあいれすしゅっしん]です。[24歳|にじゅうよんさい]です。シェフです。[スペイン語|すぺいんご]ができます。[英語|えいご]もわかります。"),
              es: "Ella es María. Es argentina. Es de Buenos Aires. Tiene 24 años. Es chef. Puede usar español. También entiende inglés.",
              notes: [
                {
                  es: "Aquí aparece tercera persona y se combinan",
                  jp: ruby("できます / わかります"),
                  note: "Recordar la diferencia entre ambos.",
                },
              ],
            },
            {
              id: "example-006-3",
              jp: ruby("[ルカ|るか]さんは[イタリア人|いたりあじん]です。ローマ[出身|しゅっしん]です。[19歳|じゅうきゅうさい]です。デザイナーです。[イタリア語|いたりあご]ができます。[英語|えいご]もできます。[パウラ|ぱうら]さんも[イタリア人|いたりあじん]です。でも、ミラノ[出身|しゅっしん]です。"),
              es: "Luca es italiano. Es de Roma. Tiene 19 años. Es diseñador. Puede usar italiano. También puede usar inglés. Paula también es italiana. Pero es de Milán.",
              notes: [
                {
                  es: "Aquí",
                  jp: ruby("でも"),
                  note: "Marca el pero de la oración.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-006-contrast",
      kind: "contrast",
      title: "Errores que conviene evitar",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-006-1",
              label: "País no es idioma",
              correct: {
                jp: ruby("[アルゼンチン人|あるぜんちんじん]です。[スペイン語|すぺいんご]ができます。"),
                es: "Nacionalidad argentina + idioma español.",
              },
              incorrect: {
                jp: ruby("[アルゼンチン語|あるぜんちんご]ができます。"),
                es: "No es la forma que fijamos en esta unidad.",
              },
              explanation:
                "Aquí el objetivo es distinguir que el país o la nacionalidad no se convierten automáticamente en idioma con 〜語.",
            },
            {
              id: "contrast-006-2",
              label: "Brasil no da ブラジル語 aquí",
              correct: {
                jp: ruby("[ブラジル人|ぶらじるじん]です。[ポルトガル語|ぽるとがるご]ができます。"),
                es: "La asociación de trabajo en esta unidad es Brasil → portugués.",
              },
              incorrect: {
                jp: ruby("[ブラジル語|ぶらじるご]ができます。"),
                es: "No es la forma que fijamos aquí.",
              },
              explanation:
                "Esta es una de las trampas más útiles del resumen porque obliga a separar país e idioma real.",
            },
            {
              id: "contrast-006-3",
              label: "Origen y nacionalidad no son la misma etiqueta",
              correct: {
                jp: ruby("[イタリア出身|いたりあしゅっしん]です。[イタリア人|いたりあじん]です。"),
                es: "Una frase habla del origen; la otra, de la nacionalidad.",
              },
              incorrect: {
                jp: ruby("[イタリア語|いたりあご]です。"),
                es: "Eso sería idioma, no origen ni nacionalidad.",
              },
              explanation:
                "En esta unidad es importante reconocer de qué tipo de información se está hablando.",
            },
            {
              id: "contrast-006-4",
              label: "Usa も solo cuando la información coincide",
              correct: {
                jp: ruby("[ルカ|るか]さんは[イタリア人|いたりあじん]です。[パウラ|ぱうら]さんも[イタリア人|いたりあじん]です。"),
                es: "La nacionalidad coincide en ambas oraciones.",
              },
              incorrect: {
                jp: ruby("[ルカ|るか]さんは[イタリア人|いたりあじん]です。[マリア|まりあ]さんも[アルゼンチン人|あるぜんちんじん]です。"),
                es: "La información ya no coincide.",
              },
              explanation:
                "Si la segunda información cambia, normalmente vuelves a は o reformulas con contraste.",
            },
            {
              id: "contrast-006-5",
              label: "Edad y profesión no ocupan el mismo lugar",
              correct: {
                jp: ruby("[24歳|にじゅうよんさい]です。シェフです。"),
                es: "Edad y profesión aparecen como informaciones distintas.",
              },
              incorrect: {
                jp: ruby("[24語|にじゅうよんご]です。"),
                es: "Aquí se está mezclando una categoría que no corresponde.",
              },
              explanation:
                "El objetivo del matome es que el alumno detecte rápido qué tipo de dato va en cada espacio.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-006-warning",
      kind: "warning",
      title: "Qué conviene hacer en esta etapa",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "No memorices estos textos como si fueran recitaciones fijas",
          content:
            "El valor real de esta unidad no está en repetir tres perfiles de memoria, sino en aprender a mirar cada frase y reconocer qué información aparece allí. Si un estudiante solo recita, pero no distingue país, nacionalidad, idioma y edad, todavía no consolidó la base.",
          bullets: [
            {
              es: "Lee primero para entender la estructura general.",
            },
            {
              es: "Después intenta extraer información puntual:",
              jp: ruby("[何歳|なんさい]ですか。 / どこの[出身|しゅっしん]ですか。 / [何語|なにご]ができますか。"),
              note: "aunque esa última aún no se haya explicado como foco central.",
            },
            {
              es: "Y finalmente intenta transformar los perfiles cambiando solo una pieza cada vez.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-006-practice",
      kind: "practice",
      title: "Práctica guiada",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Toma uno de los textos y subraya mentalmente:",
              jp: ruby("[名前|なまえ] / [出身|しゅっしん] / 〜[人|じん] / 〜[語|ご] / [歳|さい]"),
              note: "como piezas distintas.",
            },
            {
              es: "Cambia solo el país de un perfil y ajusta después nacionalidad e idioma si hace falta.",
            },
            {
              es: "Haz una pregunta sobre edad y otra sobre nacionalidad usando la misma persona del texto.",
            },
            {
              es: "Convierte una coincidencia real en una oración con",
              jp: ruby("も"),
              note: "y un cambio real en una oración con は.",
            },
            {
              es: "Relee en voz alta hasta que los perfiles se sientan naturales y no como fragmentos aislados.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-006-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Puedo leer una presentación corta que combine nombre, profesión, origen, idioma y edad.",
            },
            {
              es: "Entiendo la diferencia entre",
              jp: ruby("[イタリア|いたりあ] / [イタリア人|いたりあじん] / [イタリア語|いたりあご]。"),
            },
            {
              es: "Puedo usar",
              jp: ruby("も"),
              note: "cuando la información realmente coincide con la oración anterior.",
            },
            {
              es: "Puedo responder preguntas básicas sobre un mini perfil.",
            },
            {
              es: "Ya tengo una base compacta para pasar a unidades posteriores sin que todo aparezca separado.",
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-006-quiz",
    title: "Quiz — まとめ 1〜5",
    description:
      "Repaso integrado para comprobar si ya puedes leer mini perfiles, distinguir categorías y responder preguntas variadas sobre todo lo visto hasta ahora.",
    passScore: 78,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "single-choice",
        prompt: {
          jp: ruby("[マリア|まりあ]さんはアルゼンチン[人|じん]です。どれがいちばん[自然|しぜん]ですか。"),
          es: "María es de argentina. ¿Cuál opción suena más natural?",
        },
        choices: [
          { id: "a", label: { jp: ruby("アルゼンチン[語|ご]ができます。") } },
          { id: "b", label: { jp: ruby("[スペイン語|すぺいんご]ができます。") } },
          { id: "c", label: { jp: ruby("アルゼンチンができます。") } },
          { id: "d", label: { jp: ruby("[英語|えいご]です。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "アルゼンチン es el país, pero el idioma esperado aquí es スペイン語. Esta unidad también busca fijar bien la diferencia entre país, nacionalidad e idioma.",
        relatedSectionIds: ["lesson-006-vocabulary", "lesson-006-practice"],
      },
      {
        id: "q2",
        type: "single-choice",
        prompt: {
          jp: ruby("[彼女|かのじょ]はイギリス[人|じん]です。〇〇ができます。"),
          es: "Ella es de inglaterra. Puede hablar 〇〇.",
        },
        choices: [
          { id: "a", label: { jp: ruby("イギリス[語|ご]") } },
          { id: "b", label: { jp: ruby("[英語|えいご]") } },
          { id: "c", label: { jp: ruby("イギリス[人|じん]") } },
          { id: "d", label: { jp: ruby("[二十歳|はたち]") } },
        ],
        correctChoiceId: "b",
        explanation:
          "イギリス人 expresa nacionalidad. El idioma correspondiente aquí es 英語, no イギリス語.",
        relatedSectionIds: ["lesson-006-vocabulary", "lesson-006-practice"],
      },
      {
        id: "q3",
        type: "single-choice",
        prompt: {
          es: "Lee esto y elige la respuesta correcta:",
          jp: ruby("[彼女|かのじょ]は[マリア|まりあ]さんです。[アルゼンチン人|あるぜんちんじん]です。[24歳|にじゅうよんさい]です。[シェフ|しぇふ]です。"),
          note: "¿Qué profesión tiene?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[学生|がくせい]です。") } },
          { id: "b", label: { jp: ruby("[医者|いしゃ]です。") } },
          { id: "c", label: { jp: ruby("[シェフ|しぇふ]です。") } },
          { id: "d", label: { jp: ruby("[デザイナー|でざいなー]です。") } },
        ],
        correctChoiceId: "c",
        explanation:
          "En el texto se dice directamente que María es シェフ.",
        relatedSectionIds: ["lesson-006-examples"],
      },
      {
        id: "q4",
        type: "single-choice",
        prompt: {
          es: "Una persona es de México. ¿Qué idioma habla?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[メキシコ語|めきしこご]") } },
          { id: "b", label: { jp: ruby("[スペイン語|すぺいんご]") } },
          { id: "c", label: { jp: ruby("[英語|えいご]") } },
          { id: "d", label: { jp: ruby("[ポルトガル語|ぽるとがるご]") } },
        ],
        correctChoiceId: "b",
        explanation:
          "Aquí trabajamos la asociación メキシコ → スペイン語, y evitamos la trampa de inventar メキシコ語.",
        relatedSectionIds: ["lesson-006-concept", "lesson-006-contrast"],
      },
      {
        id: "q5",
        type: "single-choice",
        prompt: {
          es: "¿Cuál de estas combinaciones calza mejor en esta unidad?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[ブラジル人|ぶらじるじん]です。[ポルトガル語|ぽるとがるご]ができます。") } },
          { id: "b", label: { jp: ruby("[ブラジル人|ぶらじるじん]です。[ブラジル語|ぶらじるご]ができます。") } },
          { id: "c", label: { jp: ruby("[ブラジル語|ぶらじるご]です。[ブラジル人|ぶらじるじん]ができます。") } },
          { id: "d", label: { jp: ruby("[ポルトガル人|ぽるとがるじん]です。[ブラジル語|ぶらじるご]がわかります。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "La relación de trabajo aquí es Brasil → portugués.",
        relatedSectionIds: ["lesson-006-contrast", "lesson-006-vocabulary"],
      },
      {
        id: "q6",
        type: "single-choice",
        prompt: {
          es: "¿Cuándo suena natural usar",
          jp: ruby("も"),
          note: "en esta lección?",
        },
        choices: [
          { id: "a", label: { es: "Cuando la segunda información coincide con la primera." } },
          { id: "b", label: { es: "Cuando la segunda información cambia por completo." } },
          { id: "c", label: { es: "Solo en preguntas con ですか." } },
          { id: "d", label: { es: "Solo con idiomas, nunca con nacionalidad." } },
        ],
        correctChoiceId: "a",
        explanation:
          "も reemplaza a は cuando la segunda información coincide con la anterior.",
        relatedSectionIds: ["lesson-006-structure", "lesson-006-contrast"],
      },
      {
        id: "q7",
        type: "single-choice",
        prompt: {
          es: "Lee esto:",
          jp: ruby("[ルカ|るか]さんは[イタリア人|いたりあじん]です。ローマ[出身|しゅっしん]です。19歳です。"),
          note: "¿Cuál es la edad de Luca?",
        },
        choices: [
          { id: "a", label: { jp: ruby("じゅうはちさい") } },
          { id: "b", label: { jp: ruby("じゅうきゅうさい") } },
          { id: "c", label: { jp: ruby("にじゅうきゅうさい") } },
          { id: "d", label: { jp: ruby("きゅうじゅうさい") } },
        ],
        correctChoiceId: "b",
        explanation:
          "19歳 se lee じゅうきゅうさい.",
        relatedSectionIds: ["lesson-006-examples"],
      },
      {
        id: "q8",
        type: "single-choice",
        prompt: {
          es: "Lee esto y elige la continuación más natural:",
          jp: ruby("[ルカ|るか]さんは[イタリア人|いたりあじん]です。"),
          note: "Ahora quieres decir: Paula también es italiana.",
        },
        choices: [
          { id: "a", label: { jp: ruby("[パウラ|ぱうら]さんは[イタリア人|いたりあじん]です。") } },
          { id: "b", label: { jp: ruby("[パウラ|ぱうら]さんも[イタリア人|いたりあじん]です。") } },
          { id: "c", label: { jp: ruby("[パウラ|ぱうら]さんは[イタリア|いたりあ]です。") } },
          { id: "d", label: { jp: ruby("[パウラ|ぱうら]さんも[イタリア|いたりあ]です。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "Como la segunda oración añade la misma información, も es la opción más natural. Además, aquí hablamos de nacionalidad, por eso corresponde イタリア人 y no イタリア.",
        relatedSectionIds: ["lesson-006-structure", "lesson-006-examples"],
      },
      {
        id: "q9",
        type: "single-choice",
        prompt: {
          es: "¿Cuál de estas preguntas sirve directamente para preguntar la edad dentro de esta unidad?",
        },
        choices: [
          { id: "a", label: { jp: ruby("ご[出身|しゅっしん]はどちらですか。") } },
          { id: "b", label: { jp: ruby("[何語|なにご]ができますか。") } },
          { id: "c", label: { jp: ruby("おいくつですか。") } },
          { id: "d", label: { jp: ruby("どこから[来|き]ましたか。") } },
        ],
        correctChoiceId: "c",
        explanation:
          "おいくつですか es una de las dos preguntas base que ya viste para preguntar la edad.",
        relatedSectionIds: ["lesson-005b-structure", "lesson-006-practice"],
      },
      {
        id: "q10",
        type: "single-choice",
        prompt: {
          es: "¿Qué significa esta diferencia?",
          jp: ruby("[日本出身|にほんしゅっしん]です。 / [日本人|にほんじん]です。"),
        },
        choices: [
          { id: "a", label: { es: "No hay diferencia; son dos escrituras iguales." } },
          { id: "b", label: { es: "La primera habla de origen; la segunda, de nacionalidad." } },
          { id: "c", label: { es: "La primera es idioma; la segunda, edad." } },
          { id: "d", label: { es: "Las dos expresan profesión." } },
        ],
        correctChoiceId: "b",
        explanation:
          "出身 habla del origen y 〜人 de la nacionalidad.",
        relatedSectionIds: ["lesson-004a-concept", "lesson-004b-concept", "lesson-006-contrast"],
      },
      {
        id: "q11",
        type: "order-sentence",
        prompt: {
          es: "Ordena los bloques para decir: “María también es argentina.”",
        },
        tokens: [
          { id: "tok11-1", value: "マリアさん", label: { jp: ruby("[マリア|まりあ]さん") } },
          { id: "tok11-2", value: "も", label: { jp: ruby("も") } },
          { id: "tok11-3", value: "アルゼンチン人です", label: { jp: ruby("[アルゼンチン人|あるぜんちんじん]です。") } },
        ],
        correctOrder: ["マリアさん", "も", "アルゼンチン人です"],
        answerLabel: {
          jp: ruby("[マリア|まりあ]さんも[アルゼンチン人|あるぜんちんじん]です。"),
          es: "María también es argentina.",
        },
        explanation:
          "Primero va la persona, luego も y finalmente la información que coincide.",
        relatedSectionIds: ["lesson-006-structure", "lesson-006-examples"],
      },
      {
        id: "q12",
        type: "order-sentence",
        prompt: {
          es: "Ordena los bloques para formar una presentación simple y natural.",
        },
        tokens: [
          { id: "tok12-1", value: "私はソフィアです", label: { jp: ruby("[私|わたし]は[ソフィア|そふぃあ]です。") } },
          { id: "tok12-2", value: "イタリア人です", label: { jp: ruby("[イタリア人|いたりあじん]です。") } },
          { id: "tok12-3", value: "32歳です", label: { jp: ruby("[32歳|じゅうきゅうさい]です。") } },
        ],
        correctOrder: ["私はソフィアです", "イタリア人です", "19歳です"],
        answerLabel: {
          jp: ruby("[私|わたし]は[ソフィア|そふぃあ]です。[イタリア人|いたりあじん]です。[32歳|じゅうきゅうさい]です。"),
          es: "Soy Sofía. Soy italiana. Tengo 32 años.",
        },
        explanation:
          "El orden sigue una presentación natural: nombre, luego categoría básica y después edad.",
        relatedSectionIds: ["lesson-006-structure", "lesson-006-examples"],
      },
      {
        id: "q13",
        type: "order-sentence",
        prompt: {
          es: "Ordena los bloques para decir: “Puedo usar portugués.”",
        },
        tokens: [
          { id: "tok13-1", value: "ポルトガル語", label: { jp: ruby("[ポルトガル語|ぽるとがるご]") } },
          { id: "tok13-2", value: "が", label: { jp: ruby("が") } },
          { id: "tok13-3", value: "できます", label: { jp: ruby("できます。") } },
        ],
        correctOrder: ["ポルトガル語", "が", "できます"],
        answerLabel: {
          jp: ruby("[ポルトガル語|ぽるとがるご]ができます。"),
          es: "Puedo usar portugués.",
        },
        explanation:
          "La base que fijamos en la unidad de idiomas es A語 が できます.",
        relatedSectionIds: ["lesson-004c-structure", "lesson-006-vocabulary"],
      },
      {
        id: "q14",
        type: "fill-blank",
        prompt: {
          es: "Completa con la partícula natural si la información coincide:",
          jp: ruby("[ルカ|るか]さんは[イタリア人|いたりあじん]です。[パウラ|ぱうら]さん___[イタリア人|いたりあじん]です。"),
        },
        acceptedAnswers: ["も"],
        placeholder: "Escribe la partícula",
        explanation:
          "Como la nacionalidad coincide, la partícula natural es も.",
        relatedSectionIds: ["lesson-006-structure", "lesson-006-contrast"],
      },
      {
        id: "q15",
        type: "fill-blank",
        prompt: {
          es: "Escribe en hiragana la lectura de 51歳.",
        },
        acceptedAnswers: ["ごじゅういっさい"],
        placeholder: "Escribe la lectura completa",
        explanation:
          "51歳 se lee ごじゅういっさい. La irregularidad de 1 vuelve a aparecer.",
        relatedSectionIds: ["lesson-005b-contrast", "lesson-006-examples"],
      },
      {
        id: "q16",
        type: "fill-blank",
        prompt: {
          es: "Completa el idioma correcto en esta unidad:",
          jp: ruby("[オーストラリア人|おーすとらりあじん]です。___ができます。"),
        },
        acceptedAnswers: ["英語", "えいご"],
        placeholder: "Escribe el idioma",
        explanation:
          "Aquí la asociación de trabajo es Australia → inglés.",
        relatedSectionIds: ["lesson-006-contrast", "lesson-006-vocabulary"],
      },
      {
        id: "q17",
        type: "fill-blank",
        prompt: {
          es: "Completa con la profesión correcta según el perfil:",
          jp: ruby("[彼女|かのじょ]は[アンナ|あんな]さんです。[ドイツ人|どいつじん]です。[27歳|にじゅうななさい]です。___です。"),
        },
        acceptedAnswers: ["看護師", "かんごし"],
        placeholder: "Escribe la profesión",
        explanation:
          "La profesión correcta aquí es 看護師.",
        relatedSectionIds: ["lesson-006-examples", "lesson-006-vocabulary"],
      },
      {
        id: "q18",
        type: "fill-blank",
        prompt: {
          es: "Completa la corrección natural:",
          jp: ruby("[テレサ|てれさ]さんは[18歳|じゅうはっさい]ですか。[いいえ]、[違|ちが]います。___です。"),
          note: "Teresa tiene 19 años.",
        },
        acceptedAnswers: ["19歳", "じゅうきゅうさい", "19歳です", "じゅうきゅうさいです"],
        placeholder: "Escribe la edad correcta",
        explanation:
          "Después de いいえ、違います, la corrección natural aquí es 19歳です.",
        relatedSectionIds: ["lesson-005b-examples", "lesson-006-structure"],
      },
      {
        id: "q19",
        type: "fill-blank",
        prompt: {
          es: "Lee esto y escribe en hiragana la edad:",
          jp: ruby("[マルコ|まるこ]さんは20歳です。"),
          note: "Escribe solo la lectura de la edad.",
        },
        acceptedAnswers: ["はたち"],
        placeholder: "Escribe la lectura",
        explanation:
          "20歳 se trabaja aquí principalmente como はたち.",
        relatedSectionIds: ["lesson-005b-vocabulary", "lesson-006-summary"],
      },
      {
      id: "q20",
      type: "fill-blank",
      prompt: {
        es: "Completa la pieza que falta para expresar origen:",
        jp: ruby("[エマ|えま]さんは[オーストラリア人|おーすとらりあじん]です。シドニー___です。"),
        note: "Queremos decir: Emma es de Sídney.",
      },
      acceptedAnswers: ["出身", "しゅっしん", "出身です", "しゅっしんです"],
      placeholder: "Escribe la pieza que falta",
      explanation:
        "Para expresar origen, aquí usamos 出身. La frase completa es シドニー出身です.",
      relatedSectionIds: ["lesson-004a-structure", "lesson-006-examples"],
    },
    ],
  },
};

export default lesson006;
