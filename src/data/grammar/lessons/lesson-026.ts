
// src/data/grammar/lessons/lesson-026.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson026: GrammarLesson = {
  id: "lesson-026",
  slug: "adverbios-de-tiempo-y-frecuencia",
  order: 31,
  level: "N5",
  status: "ready",
  title: "Adverbios de tiempo y frecuencia",
  jpTitle: "じかんのふくし・ひんどのふくし",
  shortTitle: "Adverbios",
  description:
    "Cómo distinguir entre adverbios de tiempo y adverbios de frecuencia, entender la posición que suelen tomar dentro de la oración, y usar con claridad formas como きのう・きょう・あした・毎日・いつも・よく・ときどき・たまに・あまり・全然 sin mezclar información temporal, frecuencia y negación.",
  estimatedMinutes: 106,
  categoryTags: ["fundamentos", "adverbios", "tiempo", "frecuencia", "negacion", "integracion"],
  grammarTags: [
    "きのう",
    "きょう",
    "あした",
    "毎日",
    "毎朝",
    "毎晩",
    "いつも",
    "よく",
    "ときどき",
    "たまに",
    "あまり",
    "全然",
  ],
  searchTerms: [
    "time adverbs japanese",
    "frequency adverbs japanese n5",
    "amari zenzen negative japanese",
    "adverb position japanese sentence",
    "kyou ashita mainichi itsumo yoku tokidoki tamani",
    "adverbios tiempo frecuencia japones",
    "adverbios japones orden en la oracion",
  ],
  relatedLessonSlugs: [
    "hora-duracion-y-rutina-basica",
    "fechas-en-uso-periodos-de-tiempo-kara-made",
    "verbos-de-accion-particulas-wo-de-to-ni",
    "verbos-de-movimiento-iku-kuru-kaeru-ni-he-de-to",
  ],
  relatedVocabularyTags: ["adverbios", "tiempo", "frecuencia", "negacion", "base"],
  objectives: [
    "Distinguir entre adverbios de tiempo y adverbios de frecuencia.",
    "Entender las posiciones más naturales que suelen tomar dentro de la oración.",
    "Usar adverbios de tiempo al inicio o después del tema sin romper la oración.",
    "Usar adverbios de frecuencia para modificar el verbo y la rutina.",
    "Entender que あまり y 全然 empujan o exigen la forma negativa en esta ruta.",
    "Reconocer que no todos los adverbios hacen el mismo trabajo dentro de la oración.",
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
      id: "lesson-026-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "Hasta ahora ya usaste varias palabras de tiempo dentro de rutinas, pero no las habíamos ordenado como sistema. Esta unidad lo hace de forma explícita. Aquí distinguirás entre adverbios que ubican la acción en el tiempo y adverbios que expresan con qué frecuencia ocurre esa acción. Después verás qué pasa con あまり y 全然 cuando la frase entra en negativo.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Primero separarás dos grupos como:",
              jp: ruby("きのう / きょう / あした / [毎日|まいにち] / [毎朝|まいあさ]。"),
            },
            {
              es: "Y frente a ellos verás otro grupo como:",
              jp: ruby("いつも / よく / ときどき / たまに / あまり / [全然|ぜんぜん]。"),
            },
            {
              es: "Al final aprenderás contrastes como:",
              jp: ruby("きょう、[図書館|としょかん]で[勉強|べんきょう]します。 / いつも[図書館|としょかん]で[勉強|べんきょう]します。 / あまりテレビを[見|み]ません。"),
            },
          ],
        },
      ],
    },
    {
      id: "lesson-026-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "No todos los adverbios hacen el mismo trabajo",
          content:
            "Aquí está la idea más importante de la unidad. Algunas palabras te dicen cuándo ocurre la acción. Otras te dicen con qué frecuencia ocurre. Y otras, como あまり y 全然, cambian además el tipo de forma verbal que aparece después.",
          bullets: [
            {
              jp: ruby("きょう[勉強|べんきょう]します。"),
              es: "ubica la acción en el tiempo",
            },
            {
              jp: ruby("いつも[勉強|べんきょう]します。"),
              es: "dice con qué frecuencia ocurre la acción",
            },
            {
              jp: ruby("あまりテレビを[見|み]ません。 / [全然|ぜんぜん]コーヒーを[飲|の]みません。"),
              es: "empujan o exigen forma negativa en esta ruta",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Los adverbios de tiempo suelen anclar la escena",
          content:
            "Aquí entran palabras como きのう, きょう, あした, 毎日, 毎朝 o 毎晩. Su trabajo es decir cuándo ocurre la acción o en qué marco temporal se sitúa.",
          bullets: [
            {
              jp: ruby("きょう、[会社|かいしゃ]へ[行|い]きます。"),
              es: "tiempo al inicio",
            },
            {
              jp: ruby("[私|わたし]はきょう[会社|かいしゃ]へ[行|い]きます。"),
              es: "tiempo después del tema",
            },
            {
              jp: ruby("[毎朝|まいあさ][6時半|ろくじはん]に[起|お]きます。"),
              es: "marco temporal repetido",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Los adverbios de frecuencia modifican el verbo",
          content:
            "Aquí entran いつも, よく, ときどき y たまに. Su trabajo no es decir qué día o qué fecha es, sino con qué regularidad ocurre la acción.",
          bullets: [
            {
              jp: ruby("いつも[7時|しちじ]に[起|お]きます。"),
              es: "siempre",
            },
            {
              jp: ruby("よく[音楽|おんがく]を[聞|き]きます。"),
              es: "a menudo",
            },
            {
              jp: ruby("ときどき[喫茶店|きっさてん]で[勉強|べんきょう]します。 / たまにゲームをします。"),
              es: "a veces / de vez en cuando",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "あまり y 全然 no se comportan igual que いつも o よく",
          content:
            "En esta ruta, あまり y 全然 deben trabajarse con forma negativa. あまり no niega del todo la acción: expresa ‘no mucho’ o ‘no muy seguido’. 全然 sí empuja a una negación mucho más fuerte.",
          bullets: [
            {
              jp: ruby("あまりテレビを[見|み]ません。"),
              es: "no veo mucha televisión / no la veo muy seguido",
            },
            {
              jp: ruby("[全然|ぜんぜん]コーヒーを[飲|の]みません。"),
              es: "no tomo café en absoluto",
            },
            {
              jp: ruby("あまり[行|い]きません。 / [全然|ぜんぜん][行|い]きません。"),
              es: "misma diferencia con otros verbos",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Hay otros adverbios útiles, pero aquí no son el centro",
          content:
            "Existen muchos adverbios más. En esta unidad solo añadiremos algunos si ayudan a entender que no todo es tiempo o frecuencia. Por ejemplo, もっと puede empujar una acción más lejos y たくさん puede marcar gran cantidad.",
          bullets: [
            {
              jp: ruby("もっと[勉強|べんきょう]します。"),
              es: "más estudio / estudiar más",
            },
            {
              jp: ruby("たくさん[本|ほん]を[読|よ]みます。"),
              es: "leo muchos libros",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-026-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-026-1",
              label: "Adverbio de tiempo al inicio",
              pattern: ruby("A、BはVます。"),
              meaning: "A ubica la acción en el tiempo y luego aparece el resto de la oración.",
              translation:
                "Aquí el adverbio de tiempo va al comienzo para enmarcar toda la escena.",
              structure: [
                {
                  slot: "A",
                  value: "adverbio de tiempo",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("きのう / きょう / あした / [毎日|まいにち] / [毎朝|まいあさ]。"),
                  },
                },
                {
                  slot: "Bは...",
                  value: "tema y resto de la oración",
                  note: "Después de fijar el marco temporal, la oración sigue normalmente.",
                },
              ],
              notes: [
                "Esta posición se siente muy natural cuando quieres enmarcar toda la escena desde el principio.",
              ],
            },
            {
              id: "pattern-026-2",
              label: "Adverbio de tiempo después del tema",
              pattern: ruby("BはA Vます。"),
              meaning: "El tema aparece primero y después el bloque temporal.",
              translation:
                "Aquí el tiempo no abre la oración, sino que entra después del tema.",
              structure: [
                {
                  slot: "Bは",
                  value: "tema",
                  note: "La oración queda anclada primero en el tema.",
                },
                {
                  slot: "A",
                  value: "adverbio de tiempo",
                  note: {
                    es: "Puede ser:",
                    jp: ruby("きょう / あした / [毎晩|まいばん] / [先週|せんしゅう]。"),
                  },
                },
                {
                  slot: "Vます",
                  value: "acción",
                  note: "La acción se ubica temporalmente después del tema.",
                },
              ],
              notes: [
                "Las dos posiciones existen; aquí lo importante es reconocer que A sigue funcionando como tiempo.",
              ],
            },
            {
              id: "pattern-026-3",
              label: "Adverbio de frecuencia",
              pattern: ruby("BはA XをVます。"),
              meaning: "B realiza V con cierta frecuencia.",
              translation:
                "Aquí A no dice qué día o qué fecha es. A modifica la frecuencia del verbo.",
              structure: [
                {
                  slot: "Bは",
                  value: "tema",
                  note: "La persona o referente del que hablas.",
                },
                {
                  slot: "A",
                  value: "adverbio de frecuencia",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("いつも / よく / ときどき / たまに。"),
                  },
                },
                {
                  slot: "XをVます",
                  value: "acción",
                  note: "El adverbio modifica la frecuencia con que ocurre.",
                },
              ],
              notes: [
                "Aquí el adverbio suele quedar cerca del verbo o del bloque verbal.",
              ],
            },
            {
              id: "pattern-026-4",
              label: "Frecuencia negativa",
              pattern: ruby("BはあまりVません。 / Bは[全然|ぜんぜん]Vません。"),
              meaning: "B no hace mucho V / no hace nada de V.",
              translation:
                "Estas dos formas merecen una tarjeta aparte porque aquí la frecuencia ya entra ligada a una forma negativa.",
              structure: [
                {
                  slot: "あまり",
                  value: "no mucho / no muy seguido",
                  note: "Aquí va con forma negativa en esta ruta.",
                },
                {
                  slot: { jp: ruby("[全然|ぜんぜん]") },
                  value: "en absoluto / para nada",
                  note: "Aquí exige una negación fuerte en esta ruta.",
                },
                {
                  slot: "Vません",
                  value: "forma negativa",
                  note: "La negación es parte estructural del patrón.",
                },
              ],
              notes: [
                "No conviene tratarlos como adverbios iguales a いつも o よく.",
              ],
            },
            {
              id: "pattern-026-5",
              label: "Otros adverbios útiles",
              pattern: ruby("もっとVます。 / たくさんXをVます。"),
              meaning: "Más V / hacer V en gran cantidad",
              translation:
                "Aquí solo añadimos dos apoyos útiles para mostrar que no todos los adverbios son de tiempo o frecuencia.",
              structure: [
                {
                  slot: "もっと",
                  value: "más / más intensamente",
                  note: "Empuja la acción hacia un grado mayor.",
                },
                {
                  slot: "たくさん",
                  value: "mucho / muchos",
                  note: "Marca gran cantidad dentro de la acción.",
                },
              ],
              notes: [
                "Aquí no abrimos todavía el mundo completo de adverbios de grado.",
              ],
            },
          ],
        },
        {
          type: "table",
          title: "Mapa rápido de adverbios",
          description:
            "Aquí conviene separar los grupos por función antes de pensar en traducción o posición.",
          columns: [
            { key: "type", label: "Tipo", width: "24%" },
            { key: "jp", label: "Formas", width: "40%" },
            { key: "role", label: "Trabajo principal", width: "36%" },
          ],
          rows: [
            {
              id: "adv-time",
              cells: {
                type: "tiempo",
                jp: { jp: ruby("きのう / きょう / あした / [毎日|まいにち] / [毎朝|まいあさ] / [毎晩|まいばん]") },
                role: "ubicar la acción en el tiempo",
              },
            },
            {
              id: "adv-frequency",
              cells: {
                type: "frecuencia",
                jp: { jp: ruby("いつも / よく / ときどき / たまに") },
                role: "indicar con qué regularidad ocurre la acción",
              },
            },
            {
              id: "adv-negative",
              cells: {
                type: "frecuencia negativa",
                jp: { jp: ruby("あまり / [全然|ぜんぜん]") },
                role: "modificar la acción en negativo",
              },
            },
            {
              id: "adv-other",
              cells: {
                type: "otros apoyos",
                jp: { jp: ruby("もっと / たくさん") },
                role: "grado o cantidad dentro de la acción",
              },
            },
          ],
          zebra: true,
        },
        {
          type: "table",
          title: "Posición típica dentro de la oración",
          description:
            "Aquí no buscamos una teoría absoluta del japonés, sino una base de uso clara para esta etapa.",
          columns: [
            { key: "pattern", label: "Patrón", width: "42%" },
            { key: "idea", label: "Idea", width: "58%" },
          ],
          rows: [
            {
              id: "pos-time-front",
              cells: {
                pattern: { jp: ruby("きょう、[私|わたし]は[図書館|としょかん]で[勉強|べんきょう]します。") },
                idea: "El adverbio de tiempo abre y enmarca toda la escena.",
              },
            },
            {
              id: "pos-time-after-topic",
              cells: {
                pattern: { jp: ruby("[私|わたし]はきょう[図書館|としょかん]で[勉強|べんきょう]します。") },
                idea: "El tema aparece primero y después el adverbio de tiempo.",
              },
            },
            {
              id: "pos-frequency",
              cells: {
                pattern: { jp: ruby("[私|わたし]はいつも[朝|あさ]ご[飯|はん]を[食|た]べます。") },
                idea: "El adverbio de frecuencia queda ligado a la acción.",
              },
            },
            {
              id: "pos-negative",
              cells: {
                pattern: { jp: ruby("[私|わたし]はあまりテレビを[見|み]ません。 / [全然|ぜんぜん]コーヒーを[飲|の]みません。") },
                idea: "あまり y 全然 aparecen con negativo en esta ruta.",
              },
            },
          ],
          zebra: true,
        },
      ],
    },
    {
      id: "lesson-026-vocabulary",
      kind: "vocabulary",
      title: "Vocabulario útil para esta unidad",
      description:
        "Aquí el foco del vocabulario es el sistema de adverbios mismo. La meta es aprender qué tipo de información añade cada palabra a la oración.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 4,
          items: [
            { id: "v026-yesterday", jp: ruby("きのう"), reading: "きのう", meaning: "ayer", tags: ["tiempo", "base"] },
            { id: "v026-today", jp: ruby("きょう"), reading: "きょう", meaning: "hoy", tags: ["tiempo", "base"] },
            { id: "v026-tomorrow", jp: ruby("あした"), reading: "あした", meaning: "mañana", tags: ["tiempo", "base"] },
            { id: "v026-everyday", jp: ruby("[毎日|まいにち]"), reading: "まいにち", meaning: "todos los días", tags: ["tiempo", "base"] },

            { id: "v026-every-morning", jp: ruby("[毎朝|まいあさ]"), reading: "まいあさ", meaning: "cada mañana", tags: ["tiempo", "base"] },
            { id: "v026-every-night", jp: ruby("[毎晩|まいばん]"), reading: "まいばん", meaning: "cada noche", tags: ["tiempo", "base"] },
            { id: "v026-always", jp: ruby("いつも"), reading: "いつも", meaning: "siempre", tags: ["frecuencia", "base"] },
            { id: "v026-often", jp: ruby("よく"), reading: "よく", meaning: "a menudo", tags: ["frecuencia", "base"] },

            { id: "v026-sometimes", jp: ruby("ときどき"), reading: "ときどき", meaning: "a veces", tags: ["frecuencia", "base"] },
            { id: "v026-occasionally", jp: ruby("たまに"), reading: "たまに", meaning: "de vez en cuando", tags: ["frecuencia", "base"] },
            { id: "v026-not-much", jp: ruby("あまり"), reading: "あまり", meaning: "no mucho / no muy seguido", tags: ["frecuencia", "negativo"] },
            { id: "v026-not-at-all", jp: ruby("[全然|ぜんぜん]"), reading: "ぜんぜん", meaning: "en absoluto / para nada", tags: ["frecuencia", "negativo"] },

            { id: "v026-more", jp: ruby("もっと"), reading: "もっと", meaning: "más", tags: ["otro"] },
            { id: "v026-many", jp: ruby("たくさん"), reading: "たくさん", meaning: "mucho / muchos", tags: ["otro"] },
            { id: "v026-coffee", jp: ruby("コーヒー"), reading: "こーひー", meaning: "café", tags: ["apoyo"] },
            { id: "v026-music", jp: ruby("[音楽|おんがく]"), reading: "おんがく", meaning: "música", tags: ["apoyo"] },
          ],
        },
      ],
    },
    {
      id: "lesson-026-examples",
      kind: "examples",
      title: "Ejemplos guiados y textos modelo",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "ex-026-1",
              jp: ruby("きょう、[私|わたし]は[図書館|としょかん]で[勉強|べんきょう]します。"),
              es: "Hoy, yo estudio en la biblioteca.",
            },
            {
              id: "ex-026-2",
              jp: ruby("[私|わたし]はきょう[図書館|としょかん]で[勉強|べんきょう]します。"),
              es: "Yo hoy estudio en la biblioteca.",
              notes: [
                {
                  es: "Aquí el adverbio de tiempo aparece después del tema.",
                },
              ],
            },
            {
              id: "ex-026-3",
              jp: ruby("[毎朝|まいあさ][6時半|ろくじはん]に[起|お]きます。"),
              es: "Me levanto cada mañana a las 6:30.",
            },
            {
              id: "ex-026-4",
              jp: ruby("[私|わたし]はいつも[朝|あさ]ご[飯|はん]を[食|た]べます。"),
              es: "Yo siempre desayuno.",
            },
            {
              id: "ex-026-5",
              jp: ruby("[田中|たなか]さんはよく[音楽|おんがく]を[聞|き]きます。"),
              es: "Tanaka escucha música a menudo.",
            },
            {
              id: "ex-026-6",
              jp: ruby("[佐藤|さとう]さんはときどき[喫茶店|きっさてん]で[勉強|べんきょう]します。"),
              es: "Satō a veces estudia en una cafetería.",
            },
            {
              id: "ex-026-7",
              jp: ruby("[私|わたし]はたまにゲームをします。"),
              es: "Yo juego de vez en cuando.",
            },
            {
              id: "ex-026-8",
              jp: ruby("[夜|よる]はあまりテレビを[見|み]ません。"),
              es: "Por la noche no veo mucha televisión.",
            },
            {
              id: "ex-026-9",
              jp: ruby("コーヒーは[全然|ぜんぜん][飲|の]みません。"),
              es: "No tomo café en absoluto.",
            },
            {
              id: "ex-026-10",
              jp: ruby("もっと[漢字|かんじ]を[勉強|べんきょう]します。"),
              es: "Estudio más kanji.",
            },
            {
              id: "ex-026-11",
              jp: ruby("たくさん[本|ほん]を[読|よ]みます。"),
              es: "Leo muchos libros.",
            },
          ],
        },
        {
          type: "example-group",
          items: [
            {
              id: "text-026-1",
              jp: ruby("[木村|きむら]さんは[毎朝|まいあさ][7時|しちじ]に[起|お]きます。きょうも[会社|かいしゃ]へ[行|い]きます。[会社|かいしゃ]ではいつもコーヒーを[飲|の]みます。[昼|ひる]ご[飯|はん]はよく[弁当|べんとう]です。[夜|よる]はあまりテレビを[見|み]ません。ゲームは[全然|ぜんぜん]しません。"),
              es: "Texto modelo con adverbios de tiempo, frecuencia y frecuencia negativa.",
            },
            {
              id: "text-026-2",
              jp: ruby("[山口|やまぐち]さんは[毎日|まいにち][高校|こうこう]へ[行|い]きます。きのうは[家|いえ]で[勉強|べんきょう]しました。きょうは[図書館|としょかん]で[宿題|しゅくだい]をします。ときどき[喫茶店|きっさてん]でも[勉強|べんきょう]します。たまに[映画|えいが]を[見|み]ますが、あまりゲームはしません。"),
              es: "Texto modelo con contraste entre adverbios de tiempo y frecuencia.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-026-contrast",
      kind: "contrast",
      title: "Contrastes que conviene fijar",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-026-1",
              label: "Tiempo vs frecuencia",
              correct: {
                jp: ruby("きょう[図書館|としょかん]で[勉強|べんきょう]します。 / いつも[図書館|としょかん]で[勉強|べんきょう]します。"),
                es: "La primera dice cuándo; la segunda dice con qué frecuencia.",
              },
              explanation:
                "Aquí no conviene confundir una referencia temporal con una frecuencia de hábito.",
            },
            {
              id: "contrast-026-2",
              label: "Al inicio vs después del tema",
              correct: {
                jp: ruby("きょう、[私|わたし]は[会社|かいしゃ]へ[行|い]きます。 / [私|わたし]はきょう[会社|かいしゃ]へ[行|い]きます。"),
                es: "Las dos existen; cambia la colocación del adverbio de tiempo.",
              },
              explanation:
                "Aquí el punto no es cuál es la única correcta, sino reconocer que el adverbio sigue funcionando como tiempo en ambas posiciones.",
            },
            {
              id: "contrast-026-3",
              label: "いつも / よく / ときどき / たまに",
              correct: {
                jp: ruby("いつも / よく / ときどき / たまに"),
                es: "Todos son adverbios de frecuencia, pero no expresan el mismo grado.",
              },
              explanation:
                "Aquí conviene sentirlos como una escala aproximada de frecuencia, no como sinónimos perfectos.",
            },
            {
              id: "contrast-026-4",
              label: "あまり vs 全然",
              correct: {
                jp: ruby("あまりテレビを[見|み]ません。 / [全然|ぜんぜん]テレビを[見|み]ません。"),
                es: "Los dos van con negativo, pero no expresan el mismo grado.",
              },
              explanation:
                "あまり suena a 'no mucho' o 'no muy seguido'. 全然 suena a negación mucho más fuerte.",
            },
            {
              id: "contrast-026-5",
              label: "Tiempo / frecuencia vs otros adverbios",
              correct: {
                jp: ruby("きょう / いつも / もっと / たくさん"),
                es: "No todos los adverbios hacen el mismo tipo de modificación.",
              },
              explanation:
                "Aquí conviene reconocer que もっと y たくさん no son adverbios de tiempo ni de frecuencia, aunque también modifiquen la acción.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-026-warning",
      kind: "warning",
      title: "Qué conviene vigilar",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "No pongas todos los adverbios en la misma caja",
          content:
            "En esta unidad el error más típico es pensar que todos los adverbios se comportan igual. Otro error muy frecuente es usar あまり o 全然 con una forma afirmativa dentro de esta ruta.",
          bullets: [
            {
              jp: ruby("きょう / [毎朝|まいあさ]"),
              es: "aquí ubican la acción en el tiempo",
            },
            {
              jp: ruby("いつも / よく / ときどき / たまに"),
              es: "aquí modifican la frecuencia del verbo",
            },
            {
              jp: ruby("あまり[見|み]ません。 / [全然|ぜんぜん][飲|の]みません。"),
              es: "en esta ruta se trabajan con negativo",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-026-practice",
      kind: "practice",
      title: "Práctica guiada antes del quiz",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Toma primero varios adverbios de tiempo y colócalos al inicio de la oración.",
              jp: ruby("きょう、 / あした、 / [毎朝|まいあさ] / [毎晩|まいばん]"),
            },
            {
              es: "Después rehace algunas de esas mismas oraciones poniendo el tiempo después del tema.",
              jp: ruby("[私|わたし]はきょう... / [田中|たなか]さんは[毎晩|まいばん]..."),
            },
            {
              es: "Luego practica frecuencia con",
              jp: ruby("いつも / よく / ときどき / たまに"),
              note: "cuidando que el adverbio modifique claramente el verbo.",
            },
            {
              es: "Haz una serie separada solo con",
              jp: ruby("あまり / [全然|ぜんぜん]"),
              note: "y pon siempre el verbo en negativo dentro de esta ruta.",
            },
            {
              es: "Por último, escribe un mini texto de rutina mezclando tiempo, frecuencia y una negación.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-026-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Puedo distinguir entre adverbios de tiempo y de frecuencia.",
            },
            {
              es: "Puedo usar adverbios de tiempo como",
              jp: ruby("きのう / きょう / あした / [毎日|まいにち] / [毎朝|まいあさ] / [毎晩|まいばん]"),
              note: "para ubicar la acción en el tiempo.",
            },
            {
              es: "Puedo usar adverbios de frecuencia como",
              jp: ruby("いつも / よく / ときどき / たまに"),
              note: "para modificar el verbo.",
            },
            {
              es: "Sé que",
              jp: ruby("あまり / [全然|ぜんぜん]"),
              note: "van con negativo en esta ruta.",
            },
            {
              es: "Reconozco que",
              jp: ruby("もっと / たくさん"),
              note: "también son adverbios, pero no hacen el mismo trabajo que los de tiempo o frecuencia.",
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-026-quiz",
    title: "Quiz — Adverbios de tiempo y frecuencia",
    description:
      "Repaso de adverbios de tiempo, frecuencia y frecuencia negativa. Aquí el foco principal es distinguir qué tipo de adverbio encaja mejor en cada oración y dónde queda de forma más natural.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "fill-blank",
        prompt: {
          es: "Completa con 'hoy':",
          jp: ruby("___、[私|わたし]は[図書館|としょかん]で[勉強|べんきょう]します。"),
        },
        acceptedAnswers: ["きょう"],
        placeholder: "Escribe la palabra",
        explanation:
          "Aquí la idea es 'hoy', por eso entra きょう como adverbio de tiempo.",
        relatedSectionIds: ["lesson-026-structure", "lesson-026-summary"],
      },
      {
        id: "q2",
        type: "fill-blank",
        prompt: {
          es: "Completa con 'ayer':",
          jp: ruby("___[家|いえ]で[勉強|べんきょう]しました。"),
        },
        acceptedAnswers: ["きのう"],
        placeholder: "Escribe la palabra",
        explanation:
          "Aquí la idea es 'ayer', por eso entra きのう.",
        relatedSectionIds: ["lesson-026-structure", "lesson-026-summary"],
      },
      {
        id: "q3",
        type: "fill-blank",
        prompt: {
          es: "Completa con 'mañana':",
          jp: ruby("___[会社|かいしゃ]へ[行|い]きます。"),
        },
        acceptedAnswers: ["あした"],
        placeholder: "Escribe la palabra",
        explanation:
          "Aquí la idea es 'mañana', por eso entra あした.",
        relatedSectionIds: ["lesson-026-structure", "lesson-026-summary"],
      },
      {
        id: "q4",
        type: "fill-blank",
        prompt: {
          es: "Completa con 'cada mañana':",
          jp: ruby("___[6時半|ろくじはん]に[起|お]きます。"),
        },
        acceptedAnswers: ["毎朝", "まいあさ"],
        placeholder: "Escribe la expresión",
        explanation:
          "Aquí el marco temporal repetido es 毎朝.",
        relatedSectionIds: ["lesson-026-structure", "lesson-026-vocabulary"],
      },
      {
        id: "q5",
        type: "fill-blank",
        prompt: {
          es: "Completa con 'siempre':",
          jp: ruby("[私|わたし]は___[朝|あさ]ご[飯|はん]を[食|た]べます。"),
        },
        acceptedAnswers: ["いつも"],
        placeholder: "Escribe la palabra",
        explanation:
          "Aquí la frecuencia es 'siempre', por eso entra いつも.",
        relatedSectionIds: ["lesson-026-structure", "lesson-026-summary"],
      },
      {
        id: "q6",
        type: "fill-blank",
        prompt: {
          es: "Completa con 'a menudo':",
          jp: ruby("[田中|たなか]さんは___[音楽|おんがく]を[聞|き]きます。"),
        },
        acceptedAnswers: ["よく"],
        placeholder: "Escribe la palabra",
        explanation:
          "Aquí la frecuencia es 'a menudo', por eso entra よく.",
        relatedSectionIds: ["lesson-026-structure", "lesson-026-summary"],
      },
      {
        id: "q7",
        type: "fill-blank",
        prompt: {
          es: "Completa con 'a veces':",
          jp: ruby("[佐藤|さとう]さんは___[喫茶店|きっさてん]で[勉強|べんきょう]します。"),
        },
        acceptedAnswers: ["ときどき"],
        placeholder: "Escribe la palabra",
        explanation:
          "Aquí la frecuencia es 'a veces', por eso entra ときどき.",
        relatedSectionIds: ["lesson-026-structure", "lesson-026-summary"],
      },
      {
        id: "q8",
        type: "fill-blank",
        prompt: {
          es: "Completa con 'de vez en cuando':",
          jp: ruby("[私|わたし]は___ゲームをします。"),
        },
        acceptedAnswers: ["たまに", "ときどき"],
        placeholder: "Escribe la palabra",
        explanation:
          "Aquí la frecuencia es 'de vez en cuando', por eso entra たまに o ときどき.",
        relatedSectionIds: ["lesson-026-structure", "lesson-026-summary"],
      },
      {
        id: "q9",
        type: "fill-blank",
        prompt: {
          es: "Completa con 'no mucho / no muy seguido':",
          jp: ruby("テレビを___[見|み]ません。"),
        },
        acceptedAnswers: ["あまり"],
        placeholder: "Escribe la palabra",
        explanation:
          "Aquí la forma correcta es あまり y el verbo va en negativo.",
        relatedSectionIds: ["lesson-026-structure", "lesson-026-warning"],
      },
      {
        id: "q10",
        type: "fill-blank",
        prompt: {
          es: "Completa con 'en absoluto':",
          jp: ruby("コーヒーは___[飲|の]みません。"),
        },
        acceptedAnswers: ["全然", "ぜんぜん"],
        placeholder: "Escribe la palabra",
        explanation:
          "Aquí la forma correcta es 全然 y va con una negación fuerte.",
        relatedSectionIds: ["lesson-026-structure", "lesson-026-warning"],
      },
      {
        id: "q11",
        type: "fill-blank",
        prompt: {
          es: "Completa con 'más':",
          jp: ruby("___[漢字|かんじ]を[勉強|べんきょう]します。"),
        },
        acceptedAnswers: ["もっと"],
        placeholder: "Escribe la palabra",
        explanation:
          "Aquí もっと empuja la acción a un grado mayor.",
        relatedSectionIds: ["lesson-026-structure", "lesson-026-concept"],
      },
      {
        id: "q12",
        type: "fill-blank",
        prompt: {
          es: "Completa con 'muchos / mucho':",
          jp: ruby("___[本|ほん]を[読|よ]みます。"),
        },
        acceptedAnswers: ["たくさん"],
        placeholder: "Escribe la palabra",
        explanation:
          "Aquí たくさん marca gran cantidad dentro de la acción.",
        relatedSectionIds: ["lesson-026-structure", "lesson-026-concept"],
      },
      {
        id: "q13",
        type: "single-choice",
        prompt: {
          es: "¿Cuál grupo reúne mejor adverbios de frecuencia?",
        },
        choices: [
          { id: "a", label: { jp: ruby("きのう / きょう / あした") } },
          { id: "b", label: { jp: ruby("いつも / よく / ときどき / たまに") } },
          { id: "c", label: { jp: ruby("[毎朝|まいあさ] / [毎晩|まいばん] / [毎日|まいにち]") } },
          { id: "d", label: { jp: ruby("もっと / たくさん / きょう") } },
        ],
        correctChoiceId: "b",
        explanation:
          "Ese grupo reúne formas que expresan con qué frecuencia ocurre la acción.",
        relatedSectionIds: ["lesson-026-structure", "lesson-026-summary"],
      },
      {
        id: "q14",
        type: "single-choice",
        prompt: {
          es: "¿Cuál oración usa el adverbio negativo de forma natural en esta ruta?",
        },
        choices: [
          { id: "a", label: { jp: ruby("あまりテレビを[見|み]ます。") } },
          { id: "b", label: { jp: ruby("[全然|ぜんぜん]コーヒーを[飲|の]みます。") } },
          { id: "c", label: { jp: ruby("あまりテレビを[見|み]ません。") } },
          { id: "d", label: { jp: ruby("いつもテレビを[見|み]ません。") } },
        ],
        correctChoiceId: "c",
        explanation:
          "Aquí あまり se trabaja con forma negativa.",
        relatedSectionIds: ["lesson-026-structure", "lesson-026-warning"],
      },
      {
        id: "q15",
        type: "single-choice",
        prompt: {
          es: "¿Qué idea expresa mejor きょう、私は図書館で勉強します。",
        },
        choices: [
          { id: "a", label: { es: "La oración expresa frecuencia." } },
          { id: "b", label: { es: "La oración expresa una negación fuerte." } },
          { id: "c", label: { es: "La oración enmarca la acción con un adverbio de tiempo." } },
          { id: "d", label: { es: "La oración habla de cantidad." } },
        ],
        correctChoiceId: "c",
        explanation:
          "Aquí きょう ubica la acción en el tiempo.",
        relatedSectionIds: ["lesson-026-structure", "lesson-026-contrast"],
      },
      {
        id: "q16",
        type: "order-sentence",
        prompt: {
          es: "Ordena la oración correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("きょう、") }, value: "きょう、" },
          { id: "t2", label: { jp: ruby("[私|わたし]は") }, value: "私は" },
          { id: "t3", label: { jp: ruby("[図書館|としょかん]で") }, value: "図書館で" },
          { id: "t4", label: { jp: ruby("[勉強|べんきょう]します。") }, value: "勉強します。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("きょう、[私|わたし]は[図書館|としょかん]で[勉強|べんきょう]します。") },
        explanation:
          "Aquí el adverbio de tiempo abre y enmarca toda la escena.",
        relatedSectionIds: ["lesson-026-structure", "lesson-026-examples"],
      },
      {
        id: "q17",
        type: "order-sentence",
        prompt: {
          es: "Ordena la oración correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[私|わたし]は") }, value: "私は" },
          { id: "t2", label: { jp: ruby("いつも") }, value: "いつも" },
          { id: "t3", label: { jp: ruby("[朝|あさ]ご[飯|はん]を") }, value: "朝ご飯を" },
          { id: "t4", label: { jp: ruby("[食|た]べます。") }, value: "食べます。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("[私|わたし]はいつも[朝|あさ]ご[飯|はん]を[食|た]べます。") },
        explanation:
          "Aquí いつも modifica la frecuencia del verbo dentro de la rutina.",
        relatedSectionIds: ["lesson-026-structure", "lesson-026-examples"],
      },
      {
        id: "q18",
        type: "order-sentence",
        prompt: {
          es: "Ordena la oración correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[田中|たなか]さんは") }, value: "田中さんは" },
          { id: "t2", label: { jp: ruby("ときどき") }, value: "ときどき" },
          { id: "t3", label: { jp: ruby("[喫茶店|きっさてん]で") }, value: "喫茶店で" },
          { id: "t4", label: { jp: ruby("[勉強|べんきょう]します。") }, value: "勉強します。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("[田中|たなか]さんはときどき[喫茶店|きっさてん]で[勉強|べんきょう]します。") },
        explanation:
          "Aquí ときどき expresa una frecuencia intermedia dentro de la oración.",
        relatedSectionIds: ["lesson-026-structure", "lesson-026-examples"],
      },
      {
        id: "q19",
        type: "order-sentence",
        prompt: {
          es: "Ordena la oración correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("あまり") }, value: "あまり" },
          { id: "t2", label: { jp: ruby("テレビを") }, value: "テレビを" },
          { id: "t3", label: { jp: ruby("[見|み]ません。") }, value: "見ません。" },
        ],
        correctOrder: ["t1", "t2", "t3"],
        answerLabel: { jp: ruby("あまりテレビを[見|み]ません。") },
        explanation:
          "Aquí あまり entra con verbo negativo en esta ruta.",
        relatedSectionIds: ["lesson-026-structure", "lesson-026-warning"],
      },
      {
        id: "q20",
        type: "order-sentence",
        prompt: {
          es: "Ordena la oración correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[全然|ぜんぜん]") }, value: "全然" },
          { id: "t2", label: { jp: ruby("コーヒーを") }, value: "コーヒーを" },
          { id: "t3", label: { jp: ruby("[飲|の]みません。") }, value: "飲みません。" },
        ],
        correctOrder: ["t1", "t2", "t3"],
        answerLabel: { jp: ruby("[全然|ぜんぜん]コーヒーを[飲|の]みません。") },
        explanation:
          "Aquí 全然 también exige la negación dentro de esta ruta.",
        relatedSectionIds: ["lesson-026-structure", "lesson-026-warning"],
      },
    ],
  },
};

export default lesson026;
