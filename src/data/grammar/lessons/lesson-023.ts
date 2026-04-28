
// src/data/grammar/lessons/lesson-023.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson023: GrammarLesson = {
  id: "lesson-023",
  slug: "hora-duracion-y-rutina-basica",
  order: 28,
  level: "N5",
  status: "ready",
  title: "Hora, duración y rutina básica",
  jpTitle: "じかん・じかんのながさ・ごろ・ぐらい",
  shortTitle: "Hora y duración",
  description:
    "Cómo distinguir entre un punto en el tiempo y un período de tiempo usando 時 y 時間, cómo aproximar una hora con ごろ y una duración con ぐらい, y cómo construir rutinas completas con preguntas, respuestas y textos modelo de trabajo y estudio.",
  estimatedMinutes: 102,
  categoryTags: ["fundamentos", "tiempo", "rutina", "duracion", "lectura", "integracion"],
  grammarTags: [
    "時",
    "時間",
    "ごろ",
    "ぐらい",
    "くらい",
    "何時",
    "何時間",
    "に",
    "いつも",
    "ときどき",
    "たまに",
  ],
  searchTerms: [
    "ji vs jikan japanese",
    "goro gurai japanese",
    "how long how many hours japanese",
    "what time do you wake up japanese",
    "rutina diaria japones n5",
    "hora y duracion japones",
    "何時 何時間 ごろ ぐらい",
  ],
  relatedLessonSlugs: [
    "hora-y-expresiones-horarias-basicas",
    "verbos-introduccion-grupo-2-ichidan",
    "verbos-grupo-1-godan",
    "verbos-grupo-3-irregulares",
    "verbos-de-accion-particulas-wo-de-to-ni",
    "verbos-de-movimiento-iku-kuru-kaeru-ni-he-de-to",
    "matome-existencia-accion-movimiento",
  ],
  relatedVocabularyTags: ["tiempo", "rutina", "estudio", "trabajo", "base"],
  objectives: [
    "Distinguir con claridad entre 時 como hora puntual y 時間 como duración.",
    "Usar ごろ para aproximar una hora y ぐらい como aproximación de duración.",
    "Formar y responder preguntas con 何時に〜ですか y 何時間〜ますか.",
    "Construir oraciones de rutina usando horas, duraciones y adverbios de frecuencia básicos.",
    "Leer y producir pequeños perfiles diarios de una persona que trabaja, un estudiante de 高校 y un universitario.",
    "Evitar mezclas típicas como usar に con duraciones o tratar ごろ y ぐらい como si hicieran el mismo trabajo.",
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
      id: "lesson-023-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "La unidad anterior te dejó la base de la hora del reloj. Ahora vamos a dar el siguiente paso: distinguir entre decir a qué hora pasa algo y decir cuánto tiempo dura algo. Esa diferencia parece pequeña, pero es una de las bases más importantes para poder hablar de rutina real con naturalidad.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Aquí verás contrastes como:",
              jp: ruby("[3時|さんじ] / [3時間|さんじかん]。"),
            },
            {
              es: "También trabajarás aproximación con:",
              jp: ruby("[7時|しちじ][頃|ごろ][起|お]きます。 / [3時間|さんじかん]ぐらい[勉強|べんきょう]します。"),
            },
            {
              es: "Y al final unirás todo en rutinas como:",
              jp: ruby("[何時|なんじ]に[起|お]きますか。 / [何時間|なんじかん][勉強|べんきょう]しますか。"),
            },
          ],
        },
      ],
    },
    {
      id: "lesson-023-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "時 dice cuándo; 時間 dice cuánto dura",
          content:
            "Esta es la idea más importante de toda la unidad. 時 marca una hora puntual del reloj. 時間 marca una duración. Si no fijas esta diferencia desde el inicio, después todo se mezcla: la hora de comenzar, la hora de terminar y la cantidad de tiempo que dedicas a algo.",
          bullets: [
            {
              jp: ruby("[3時|さんじ]です。"),
              es: "las 3 en punto",
            },
            {
              jp: ruby("[3時|さんじ]に[寝|ね]ます。"),
              es: "me duermo a las 3",
            },
            {
              jp: ruby("[3時間|さんじかん][勉強|べんきょう]します。"),
              es: "estudio durante 3 horas",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "ごろ aproxima una hora; ぐらい aproxima una duración",
          content:
            "Aquí también conviene separar dos trabajos que se parecen solo por fuera. ごろ se usa con una hora o un momento aproximado del día. ぐらい se usa para decir que una duración es aproximada. En esta ruta fijaremos ぐらい como forma base, pero también reconoceremos くらい como variante muy común.",
          bullets: [
            {
              jp: ruby("[7時|しちじ][頃|ごろ][起|お]きます。"),
              es: "me levanto alrededor de las 7",
            },
            {
              jp: ruby("[7時|しちじ][頃|ごろ]に[起|お]きます。"),
              es: "también puedes encontrar la forma con に",
            },
            {
              jp: ruby("[2時間|にじかん]ぐらいテレビを[見|み]ます。"),
              es: "veo televisión unas 2 horas",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Las preguntas cambian según quieras saber cuándo o cuánto",
          content:
            "Aquí ya no basta con preguntar la hora. Necesitas distinguir si preguntas por el momento en que pasa algo o por la duración de la actividad. Esa diferencia organiza buena parte de la conversación sobre rutina.",
          bullets: [
            {
              jp: ruby("[何時|なんじ]に[起|お]きますか。"),
              es: "pregunta por el momento puntual",
            },
            {
              jp: ruby("[何時間|なんじかん][勉強|べんきょう]しますか。"),
              es: "pregunta por la duración",
            },
            {
              jp: ruby("[何時|なんじ][頃|ごろ][帰|かえ]りますか。"),
              es: "pregunta por un momento aproximado",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Esta unidad te prepara para escribir una rutina completa",
          content:
            "Aquí no queremos solo frases sueltas. Por eso al final de la unidad leerás perfiles completos y podrás juntar tus propias respuestas en un texto corrido. Ese paso es muy importante porque conecta la gramática con un uso real.",
          bullets: [
            {
              jp: ruby("[田中|たなか]さんはいつも[7時|しちじ][頃|ごろ][起|お]きます。"),
              es: "hora aproximada de inicio",
            },
            {
              jp: ruby("[8時間|はちじかん]ぐらい[仕事|しごと]をします。"),
              es: "duración aproximada",
            },
            {
              jp: ruby("そのあと、[寝|ね]ます。"),
              es: "rutina ya encadenada en texto",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-023-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-023-1",
              label: "Hora puntual",
              pattern: ruby("X [時|じ]に V ます。"),
              meaning: "A la hora X realizo V.",
              translation:
                "Aquí la hora funciona como punto exacto o bastante definido del día. La acción ocurre en ese momento, por eso aparece に.",
              structure: [
                {
                  slot: "X 時",
                  value: "hora puntual",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[7時|しちじ] / [8時半|はちじはん] / [10時20分|じゅうじにじゅっぷん]。"),
                  },
                },
                {
                  slot: { jp: ruby("に") },
                  value: "marca del momento puntual",
                  note: "Aquí ancla la acción a una hora concreta.",
                },
                {
                  slot: "V ます",
                  value: "acción",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[起|お]きます / [行|い]きます / [食|た]べます / [寝|ね]ます。"),
                  },
                },
              ],
              notes: [
                "Esta estructura responde a la pregunta 何時に〜ますか.",
              ],
            },
            {
              id: "pattern-023-2",
              label: "Hora aproximada",
              pattern: ruby("X [時|じ][頃|ごろ] V ます。 / X [時|じ][頃|ごろ]に V ます。"),
              meaning: "Alrededor de la hora X realizo V.",
              translation:
                "Aquí ya no hablas de un momento exacto, sino aproximado. En esta ruta reconoceremos tanto la forma con ごろ solo como la forma con ごろに.",
              structure: [
                {
                  slot: "X 時ごろ / X 時ごろに",
                  value: "hora aproximada",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[7時|しちじ][頃|ごろ] / [8時半|はちじはん][頃|ごろ] / [9時|くじ][頃|ごろ]に。"),
                  },
                },
                {
                  slot: "V ます",
                  value: "acción",
                  note: "La acción no se fija al minuto exacto, sino alrededor de esa hora.",
                },
              ],
              notes: [
                "En el quiz aceptaremos ごろ y ごろに cuando la estructura lo permita.",
              ],
            },
            {
              id: "pattern-023-3",
              label: "Duración",
              pattern: ruby("X [時間|じかん] V ます。"),
              meaning: "Realizo V durante X horas.",
              translation:
                "Aquí ya no preguntas cuándo ocurre la acción, sino cuánto dura. Esa es la diferencia esencial con 時.",
              structure: [
                {
                  slot: "X 時間",
                  value: "duración",
                  note: {
                    es: "Puede ser algo como:",
                    jp: ruby("[1時間|いちじかん] / [2時間|にじかん] / [8時間|はちじかん]。"),
                  },
                },
                {
                  slot: "V ます",
                  value: "acción",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[勉強|べんきょう]します / [仕事|しごと]をします / テレビを[見|み]ます。"),
                  },
                },
              ],
              notes: [
                "Aquí no aparece に porque no estás marcando un momento puntual.",
              ],
            },
            {
              id: "pattern-023-4",
              label: "Duración aproximada",
              pattern: ruby("X [時間|じかん]ぐらいVます。"),
              meaning: "Realizo V durante unas X horas.",
              translation:
                "Aquí la duración ya no es exacta. ぐらい marca aproximación de cantidad o duración. En esta unidad lo fijamos así, aunque también verás くらい en otros contextos.",
              structure: [
                {
                  slot: "X 時間ぐらい",
                  value: "duración aproximada",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[1時間|いちじかん]ぐらい / [2時間|にじかん]ぐらい / [8時間|はちじかん]ぐらい。"),
                  },
                },
                {
                  slot: "V ます",
                  value: "acción",
                  note: "La actividad dura aproximadamente ese tiempo.",
                },
              ],
              notes: [
                "Aquí tampoco aparece に porque sigue siendo duración, no momento puntual.",
              ],
            },
            {
              id: "pattern-023-5",
              label: "Preguntas básicas de rutina",
              pattern: ruby("[何時|なんじ]に V ますか。 / [何時|なんじ][頃|ごろ] V ますか。 / [何時間|なんじかん] V ますか。"),
              meaning: "¿A qué hora? / ¿Alrededor de qué hora? / ¿Durante cuántas horas?",
              translation:
                "Estas preguntas son la base para construir perfiles de rutina. Aquí ya no basta con saber decir la hora: necesitas preguntarla con la estructura correcta.",
              structure: [
                {
                  slot: { jp: ruby("[何時|なんじ]に") },
                  value: "pregunta por momento puntual",
                  note: "Sirve cuando esperas una hora concreta.",
                },
                {
                  slot: { jp: ruby("[何時|なんじ][頃|ごろ]") },
                  value: "pregunta por momento aproximado",
                  note: "Sirve cuando la respuesta no tiene que ser exacta.",
                },
                {
                  slot: { jp: ruby("[何時間|なんじかん]") },
                  value: "pregunta por duración",
                  note: "Sirve cuando quieres saber cuánto dura una actividad.",
                },
              ],
              notes: [
                "Estas tres preguntas te permiten construir gran parte de una rutina diaria.",
              ],
            },
          ],
        },
        {
          type: "table",
          title: "Mapa rápido: cuándo vs cuánto dura",
          description:
            "Aquí está la distinción más importante de la unidad. No la estudies como traducción suelta: úsala para decidir qué tipo de información estás expresando.",
          columns: [
            { key: "form", label: "Forma", width: "24%" },
            { key: "question", label: "Pregunta guía", width: "30%" },
            { key: "function", label: "Función", width: "22%" },
            { key: "example", label: "Ejemplo", width: "24%" },
          ],
          rows: [
            {
              id: "map-ji",
              cells: {
                form: { jp: ruby("[3時|さんじ]") },
                question: "¿cuándo?",
                function: "hora puntual",
                example: { jp: ruby("[3時|さんじ]に[寝|ね]ます。") },
              },
            },
            {
              id: "map-jikan",
              cells: {
                form: { jp: ruby("[3時間|さんじかん]") },
                question: "¿cuánto dura?",
                function: "duración",
                example: { jp: ruby("[3時間|さんじかん][勉強|べんきょう]します。") },
              },
            },
            {
              id: "map-goro",
              cells: {
                form: { jp: ruby("[7時|しちじ][頃|ごろ]") },
                question: "¿alrededor de cuándo?",
                function: "hora aproximada",
                example: { jp: ruby("[7時|しちじ][頃|ごろ][起|お]きます。") },
              },
            },
            {
              id: "map-gurai",
              cells: {
                form: { jp: ruby("[2時間|にじかん]ぐらい") },
                question: "¿aproximadamente cuánto dura?",
                function: "duración aproximada",
                example: { jp: ruby("[2時間|にじかん]ぐらいテレビを[見|み]ます。") },
              },
            },
          ],
          zebra: true,
        },
        {
          type: "table",
          title: "Preguntas útiles para construir una rutina",
          description:
            "Estas preguntas te permiten entrevistar a otra persona o escribir un perfil propio con bastante naturalidad.",
          columns: [
            { key: "jp", label: "Pregunta", width: "48%" },
            { key: "es", label: "Qué pide", width: "52%" },
          ],
          rows: [
            {
              id: "q-routine-1",
              cells: {
                jp: { jp: ruby("[何時|なんじ]に[起|お]きますか。") },
                es: "hora puntual de despertar",
              },
            },
            {
              id: "q-routine-2",
              cells: {
                jp: { jp: ruby("[何時|なんじ]に[学校|がっこう] / [会社|かいしゃ]に[行|い]きますか。") },
                es: "hora de salida o llegada al estudio / trabajo",
              },
            },
            {
              id: "q-routine-3",
              cells: {
                jp: { jp: ruby("[何時間|なんじかん][学校|がっこう] / [会社|かいしゃ]にいますか。") },
                es: "duración en el lugar",
              },
            },
            {
              id: "q-routine-4",
              cells: {
                jp: { jp: ruby("[何時間|なんじかん][宿題|しゅくだい] / [残業|ざんぎょう]をしますか。") },
                es: "duración de la actividad",
              },
            },
            {
              id: "q-routine-5",
              cells: {
                jp: { jp: ruby("[何時|なんじ]に[朝|あさ]ご[飯|はん] / [昼|ひる]ご[飯|はん] / [晩|ばん]ご[飯|はん]を[食|た]べますか。") },
                es: "hora de las comidas",
              },
            },
            {
              id: "q-routine-6",
              cells: {
                jp: { jp: ruby("[何時|なんじ]にシャワーを[浴|あ]びますか。") },
                es: "hora del baño / ducha",
              },
            },
            {
              id: "q-routine-7",
              cells: {
                jp: { jp: ruby("[何時|なんじ]に[寝|ね]ますか。") },
                es: "hora de dormir",
              },
            },
          ],
          zebra: true,
        },
      ],
    },
    {
      id: "lesson-023-vocabulary",
      kind: "vocabulary",
      title: "Vocabulario útil para esta unidad",
      description:
        "Aquí el centro es el vocabulario que te ayuda a hablar de rutina y duración. Algunos verbos ya aparecieron antes, pero aquí los reunimos como bloque funcional para esta unidad.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 4,
          items: [
            { id: "v023-jikan", jp: ruby("[時間|じかん]"), reading: "じかん", meaning: "hora(s) de duración / tiempo", tags: ["tiempo", "base"] },
            { id: "v023-goro", jp: ruby("[頃|ごろ]"), reading: "ごろ", meaning: "alrededor de / más o menos a esa hora", tags: ["tiempo", "base"] },
            { id: "v023-gurai", jp: ruby("ぐらい"), reading: "ぐらい", meaning: "aproximadamente / cerca de", tags: ["tiempo", "base"] },
            { id: "v023-nanjikan", jp: ruby("[何時間|なんじかん]"), reading: "なんじかん", meaning: "cuántas horas", tags: ["pregunta", "base"] },

            { id: "v023-always", jp: ruby("いつも"), reading: "いつも", meaning: "siempre", tags: ["frecuencia"] },
            { id: "v023-sometimes", jp: ruby("ときどき"), reading: "ときどき", meaning: "a veces", tags: ["frecuencia"] },
            { id: "v023-occasionally", jp: ruby("たまに"), reading: "たまに", meaning: "de vez en cuando", tags: ["frecuencia"] },
            { id: "v023-after-that", jp: ruby("そのあと"), reading: "そのあと", meaning: "después de eso", tags: ["conector"] },

            { id: "v023-work", jp: ruby("[仕事|しごと]"), reading: "しごと", meaning: "trabajo", tags: ["rutina"] },
            { id: "v023-overtime", jp: ruby("[残業|ざんぎょう]"), reading: "ざんぎょう", meaning: "horas extra / sobretiempo", tags: ["rutina"] },
            { id: "v023-homework", jp: ruby("[宿題|しゅくだい]"), reading: "しゅくだい", meaning: "tarea", tags: ["rutina"] },
            { id: "v023-shower", jp: ruby("シャワー"), reading: "しゃわー", meaning: "ducha", tags: ["rutina"] },

            { id: "v023-breakfast", jp: ruby("[朝|あさ]ご[飯|はん]"), reading: "あさごはん", meaning: "desayuno", tags: ["comida"] },
            { id: "v023-lunch", jp: ruby("[昼|ひる]ご[飯|はん]"), reading: "ひるごはん", meaning: "almuerzo", tags: ["comida"] },
            { id: "v023-dinner", jp: ruby("[晩|ばん]ご[飯|はん]"), reading: "ばんごはん", meaning: "cena", tags: ["comida"] },
            { id: "v023-lunchbox", jp: ruby("[弁当|べんとう]"), reading: "べんとう", meaning: "bentō / almuerzo en caja", tags: ["comida"] },

            { id: "v023-company", jp: ruby("[会社|かいしゃ]"), reading: "かいしゃ", meaning: "empresa / trabajo", tags: ["lugar"] },
            { id: "v023-highschool", jp: ruby("[高校|こうこう]"), reading: "こうこう", meaning: "liceo / enseñanza media", tags: ["lugar"] },
            { id: "v023-university", jp: ruby("[大学|だいがく]"), reading: "だいがく", meaning: "universidad", tags: ["lugar"] },
            { id: "v023-library", jp: ruby("[図書館|としょかん]"), reading: "としょかん", meaning: "biblioteca", tags: ["lugar"] },

            { id: "v023-get-up", jp: ruby("[起|お]きる"), reading: "おきる", meaning: "levantarse", tags: ["verbo"] },
            { id: "v023-sleep", jp: ruby("[寝|ね]る"), reading: "ねる", meaning: "dormirse / acostarse", tags: ["verbo"] },
            { id: "v023-overtime-do", jp: ruby("[残業|ざんぎょう]する"), reading: "ざんぎょうする", meaning: "hacer horas extra", tags: ["verbo"] },
            { id: "v023-shower-verb", jp: ruby("シャワーを[浴|あ]びる"), reading: "しゃわーをあびる", meaning: "ducharse / tomar una ducha", tags: ["verbo"] },
          ],
        },
      ],
    },
    {
      id: "lesson-023-examples",
      kind: "examples",
      title: "Ejemplos guiados y textos modelo",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "ex-023-1",
              jp: ruby("[3時|さんじ]です。"),
              es: "Son las 3.",
              notes: [
                {
                  es: "Aquí 時 funciona como hora puntual del reloj.",
                },
              ],
            },
            {
              id: "ex-023-2",
              jp: ruby("[3時間|さんじかん][勉強|べんきょう]します。"),
              es: "Estudio 3 horas.",
              notes: [
                {
                  es: "Aquí 時間 ya no marca una hora puntual, sino duración.",
                },
              ],
            },
            {
              id: "ex-023-3",
              jp: ruby("[7時|しちじ]に[起|お]きます。"),
              es: "Me levanto a las 7.",
            },
            {
              id: "ex-023-4",
              jp: ruby("[7時|しちじ][頃|ごろ][起|お]きます。 / [7時|しちじ][頃|ごろ]に[起|お]きます。"),
              es: "Me levanto alrededor de las 7.",
              notes: [
                {
                  es: "En esta ruta reconoceremos las dos formas como válidas.",
                },
              ],
            },
            {
              id: "ex-023-5",
              jp: ruby("[3時間|さんじかん]テレビを[見|み]ます。"),
              es: "Veo televisión durante 3 horas.",
            },
            {
              id: "ex-023-6",
              jp: ruby("[3時間|さんじかん]ぐらいテレビを[見|み]ます。"),
              es: "Veo televisión unas 3 horas.",
            },
            {
              id: "ex-023-7",
              jp: ruby("[何時|なんじ]に[会社|かいしゃ]に[行|い]きますか。"),
              es: "¿A qué hora vas al trabajo?",
            },
            {
              id: "ex-023-8",
              jp: ruby("[何時間|なんじかん][宿題|しゅくだい]をしますか。"),
              es: "¿Cuántas horas haces tarea?",
            },
          ],
        },
        {
          type: "example-group",
          items: [
            {
              id: "text-023-worker",
              jp: ruby("[田中|たなか]さんはいつも[7時|しちじ][頃|ごろ][起|お]きます。[朝|あさ]ご[飯|はん]はいつもパンと[牛乳|ぎゅうにゅう]です。[7時半|しちじはん]に[仕事|しごと]に[行|い]きます。[8時間|はちじかん]ぐらい[仕事|しごと]をします。[残業|ざんぎょう]はときどき[2時間|にじかん]ぐらいします。[昼|ひる]ご[飯|はん]はいつも[弁当|べんとう]です。[家|いえ]で[1時間|いちじかん]ぐらいテレビを[見|み]ます。たまに[1時間|いちじかん]ぐらいパソコンでゲームをします。[晩|ばん]ご[飯|はん]はいつも[8時|はちじ][頃|ごろ][食|た]べます。[9時|くじ]にシャワーを[浴|あ]びます。そのあと、[寝|ね]ます。"),
              es: "Perfil de una persona que trabaja.",
              notes: [
                {
                  es: "Aquí conviven hora puntual, hora aproximada, duración y frecuencia.",
                },
              ],
            },
            {
              id: "text-023-koko",
              jp: ruby("[中村|なかむら]さんはいつも[6時半|ろくじはん][頃|ごろ][起|お]きます。[朝|あさ]ご[飯|はん]はいつもご[飯|はん]と[卵|たまご]です。[7時半|しちじはん]に[高校|こうこう]に[行|い]きます。[7時間|しちじかん]ぐらい[高校|こうこう]にいます。[家|いえ]で[2時間|にじかん]ぐらい[宿題|しゅくだい]をします。ときどき[1時間|いちじかん]ぐらいテレビを[見|み]ます。[晩|ばん]ご[飯|はん]はいつも[7時|しちじ][頃|ごろ][食|た]べます。[11時|じゅういちじ][頃|ごろ][寝|ね]ます。"),
              es: "Perfil de un estudiante de 高校.",
              notes: [
                {
                  es: "Aquí la rutina gira más alrededor de clases, tarea y descanso.",
                },
              ],
            },
            {
              id: "text-023-university",
              jp: ruby("[木村|きむら]さんはいつも[8時|はちじ][頃|ごろ][起|お]きます。[朝|あさ]ご[飯|はん]はたまにパンです。[9時半|くじはん][頃|ごろ][大学|だいがく]に[行|い]きます。[5時間|ごじかん]ぐらい[大学|だいがく]にいます。[図書館|としょかん]で[3時間|さんじかん]ぐらい[勉強|べんきょう]します。[昼|ひる]ご[飯|はん]はときどきカレーです。[午後|ごご][7時|しちじ][頃|ごろ][帰|かえ]ります。たまに[2時間|にじかん]ぐらいパソコンを[使|つか]います。[夜|よる][11時半|じゅういちじはん][頃|ごろ][寝|ね]ます。"),
              es: "Perfil de un estudiante universitario.",
              notes: [
                {
                  es: "Aquí la rutina deja más espacio a estudio autónomo y uso del computador.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-023-contrast",
      kind: "contrast",
      title: "Contrastes que conviene fijar",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-023-1",
              label: "3時 vs 3時間",
              correct: {
                jp: ruby("[3時|さんじ] / [3時間|さんじかん]"),
                es: "Una forma marca hora puntual y la otra duración.",
              },
              explanation:
                "Este es el contraste central de la unidad. Si no se fija bien, después se mezclan la hora del reloj y la cantidad de tiempo que dura una actividad.",
            },
            {
              id: "contrast-023-2",
              label: "7時に起きます vs 7時ごろ起きます",
              correct: {
                jp: ruby("[7時|しちじ]に[起|お]きます。 / [7時|しちじ][頃|ごろ][起|お]きます。"),
                es: "La primera es más exacta; la segunda es aproximada.",
              },
              explanation:
                "Aquí cambia el grado de precisión del momento temporal.",
            },
            {
              id: "contrast-023-3",
              label: "3時間勉強します vs 3時間ぐらい勉強します",
              correct: {
                jp: ruby("[3時間|さんじかん][勉強|べんきょう]します。 / [3時間|さんじかん]ぐらい[勉強|べんきょう]します。"),
                es: "La primera duración es más exacta; la segunda es aproximada.",
              },
              explanation:
                "Aquí cambia el grado de precisión de la duración, no el tipo de actividad.",
            },
            {
              id: "contrast-023-4",
              label: "何時に〜ますか vs 何時間〜ますか",
              correct: {
                jp: ruby("[何時|なんじ]に[寝|ね]ますか。 / [何時間|なんじかん]テレビを[見|み]ますか。"),
                es: "Una pregunta pide momento puntual y la otra duración.",
              },
              explanation:
                "Aquí conviene decidir primero si quieres saber cuándo o cuánto dura la actividad.",
            },
            {
              id: "contrast-023-5",
              label: "Hora como dato vs hora dentro de una rutina",
              correct: {
                jp: ruby("[9時|くじ]です。 / [9時|くじ]にシャワーを[浴|あ]びます。"),
                es: "La primera solo informa la hora; la segunda la integra dentro de una acción.",
              },
              explanation:
                "Este contraste conecta directamente con la unidad 022 y mantiene viva la diferencia entre información y rutina.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-023-warning",
      kind: "warning",
      title: "Dónde suele confundirse todo",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "No mezcles punto en el tiempo con período de tiempo",
          content:
            "En esta unidad, los errores más típicos nacen cuando el alumno trata 時 y 時間 como si fueran intercambiables, o cuando intenta usar に con una duración. Otro punto delicado es confundir ごろ y ぐらい solo porque ambos expresan aproximación.",
          bullets: [
            {
              jp: ruby("[7時|しちじ]に[起|お]きます。"),
              es: "aquí la hora es puntual, por eso entra に",
            },
            {
              jp: ruby("[3時間|さんじかん][勉強|べんきょう]します。"),
              es: "aquí la duración no lleva に",
            },
            {
              jp: ruby("[7時|しちじ][頃|ごろ][起|お]きます。 / [2時間|にじかん]ぐらい[勉強|べんきょう]します。"),
              es: "ごろ aproxima una hora; ぐらい aproxima una duración",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-023-practice",
      kind: "practice",
      title: "Práctica guiada antes del quiz",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Primero responde preguntas puntuales como:",
              jp: ruby("[何時|なんじ]に[起|お]きますか。 / [何時|なんじ]に[寝|ね]ますか。"),
            },
            {
              es: "Después responde preguntas de duración como:",
              jp: ruby("[何時間|なんじかん][勉強|べんきょう]しますか。 / [何時間|なんじかん]テレビを[見|み]ますか。"),
            },
            {
              es: "Repite varias respuestas usando",
              jp: ruby("[頃|ごろ]"),
              note: "para hacer la hora menos exacta y más natural.",
            },
            {
              es: "Haz lo mismo con",
              jp: ruby("ぐらい"),
              note: "para hacer la duración menos exacta.",
            },
            {
              es: "Por último, junta todas tus respuestas en un texto corrido como los tres perfiles modelo de esta unidad.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-023-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Puedo distinguir entre",
              jp: ruby("[時|じ]"),
              note: "como hora puntual y",
            },
            {
              es: "",
              jp: ruby("[時間|じかん]"),
              note: "como duración.",
            },
            {
              es: "Puedo usar",
              jp: ruby("[頃|ごろ]"),
              note: "para aproximar una hora y",
            },
            {
              es: "",
              jp: ruby("ぐらい"),
              note: "para aproximar una duración.",
            },
            {
              es: "Puedo preguntar con",
              jp: ruby("[何時|なんじ]に〜ますか。 / [何時間|なんじかん]〜ますか。"),
            },
            {
              es: "Ya puedo leer y producir una rutina diaria con horas, duraciones y frecuencia básica.",
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-023-quiz",
    title: "Quiz — Hora, duración y rutina",
    description:
      "Repaso de 時, 時間, ごろ y ぐらい. Aquí el foco está en distinguir entre punto en el tiempo y duración, y en reconocer preguntas y respuestas naturales de rutina.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "fill-blank",
        prompt: {
          es: "Completa la palabra correcta:",
          jp: ruby("[3|さん]___[勉強|べんきょう]します。"),
        },
        acceptedAnswers: ["時間", "じかん"],
        placeholder: "Escribe la palabra",
        explanation:
          "Aquí necesitas una duración, por eso entra 時間.",
        relatedSectionIds: ["lesson-023-structure", "lesson-023-contrast"],
      },
      {
        id: "q2",
        type: "fill-blank",
        prompt: {
          es: "Completa la palabra correcta:",
          jp: ruby("[3|さん]___に[起|お]きます。"),
        },
        acceptedAnswers: ["時", "じ"],
        placeholder: "Escribe la palabra",
        explanation:
          "Aquí necesitas una hora puntual, por eso entra 時.",
        relatedSectionIds: ["lesson-023-structure", "lesson-023-contrast"],
      },
      {
        id: "q3",
        type: "fill-blank",
        prompt: {
          es: "Completa con la forma aproximada natural:",
          jp: ruby("[7時|しちじ]___[起|お]きます。"),
        },
        acceptedAnswers: ["ごろ", "ごろに", "頃", "頃に"],
        placeholder: "Escribe la expresión",
        explanation:
          "Aquí se aceptan ごろ y ごろに porque las dos formas se usan en esta ruta para aproximar la hora.",
        relatedSectionIds: ["lesson-023-structure", "lesson-023-warning"],
      },
      {
        id: "q4",
        type: "fill-blank",
        prompt: {
          es: "Completa con la aproximación de duración:",
          jp: ruby("[2時間|にじかん]___テレビを[見|み]ます。"),
        },
        acceptedAnswers: ["ぐらい", "くらい"],
        placeholder: "Escribe la palabra",
        explanation:
          "Aquí la duración es aproximada, por eso entra ぐらい. También se acepta くらい como variante común.",
        relatedSectionIds: ["lesson-023-structure", "lesson-023-contrast"],
      },
      {
        id: "q5",
        type: "fill-blank",
        prompt: {
          es: "Completa la pregunta natural:",
          jp: ruby("___[起|お]きますか。"),
        },
        acceptedAnswers: ["何時に", "なんじに"],
        placeholder: "Escribe la expresión",
        explanation:
          "Si preguntas por el momento puntual de despertar, aquí usas 何時に.",
        relatedSectionIds: ["lesson-023-structure", "lesson-023-summary"],
      },
      {
        id: "q6",
        type: "fill-blank",
        prompt: {
          es: "Completa la pregunta natural:",
          jp: ruby("___テレビを[見|み]ますか。"),
        },
        acceptedAnswers: ["何時間", "なんじかん"],
        placeholder: "Escribe la expresión",
        explanation:
          "Aquí preguntas por duración, por eso entra 何時間.",
        relatedSectionIds: ["lesson-023-structure", "lesson-023-summary"],
      },
      {
        id: "q7",
        type: "fill-blank",
        prompt: {
          es: "Completa con el adverbio adecuado:",
          jp: ruby("[田中|たなか]さんは___[7時|しちじ][頃|ごろ][起|お]きます。"),
        },
        acceptedAnswers: ["いつも", "ときどき", "たまに"],
        placeholder: "Escribe la palabra",
        explanation:
          "Aquí depende mucho del contexto, pero いつも, ときどき y たまに son los que vimos en la unidad.",
        relatedSectionIds: ["lesson-023-vocabulary", "lesson-023-examples"],
      },
      {
        id: "q8",
        type: "fill-blank",
        prompt: {
          es: "Completa con el adverbio adecuado:",
          jp: ruby("[残業|ざんぎょう]は___[2時間|にじかん]ぐらいします。"),
        },
        acceptedAnswers: ["いつも", "ときどき", "たまに"],
        placeholder: "Escribe la palabra",
        explanation:
          "Aquí depende mucho del contexto, pero いつも, ときどき y たまに son los que vimos en la unidad.",
        relatedSectionIds: ["lesson-023-vocabulary", "lesson-023-examples"],
      },
      {
        id: "q9",
        type: "fill-blank",
        prompt: {
          es: "Completa con el adverbio adecuado:",
          jp: ruby("___[1時間|いちじかん]ぐらいパソコンでゲームをします。"),
        },
        acceptedAnswers: ["いつも", "ときどき", "たまに"],
        placeholder: "Escribe la palabra",
        explanation:
          "Aquí depende mucho del contexto, pero いつも, ときどき y たまに son los que vimos en la unidad.",
        relatedSectionIds: ["lesson-023-vocabulary", "lesson-023-examples"],
      },
      {
        id: "q10",
        type: "fill-blank",
        prompt: {
          es: "Completa la acción correcta:",
          jp: ruby("[夜|よる][8時|はちじ][頃|ごろ][晩ご飯|ばんごはん]を___。"),
        },
        acceptedAnswers: ["食べます", "たべます"],
        placeholder: "Escribe el verbo",
        explanation:
          "En los perfiles modelo, la cena se presenta como una acción de comer a cierta hora.",
        relatedSectionIds: ["lesson-023-examples"],
      },
      {
        id: "q11",
        type: "fill-blank",
        prompt: {
          es: "Completa la acción correcta:",
          jp: ruby("[9時|くじ]にシャワーを___。"),
        },
        acceptedAnswers: ["浴びます", "あびます"],
        placeholder: "Escribe el verbo",
        explanation:
          "La estructura fija aquí es シャワーを浴びます。",
        relatedSectionIds: ["lesson-023-vocabulary", "lesson-023-examples"],
      },
      {
        id: "q12",
        type: "fill-blank",
        prompt: {
          es: "Completa la pregunta natural:",
          jp: ruby("___[宿題|しゅくだい]をしますか。"),
        },
        acceptedAnswers: ["何時間", "なんじかん"],
        placeholder: "Escribe la expresión",
        explanation:
          "Aquí preguntas cuánto tiempo dura la tarea, por eso entra 何時間.",
        relatedSectionIds: ["lesson-023-structure", "lesson-023-summary"],
      },
      {
        id: "q13",
        type: "fill-blank",
        prompt: {
          es: "Completa la partícula correcta:",
          jp: ruby("[11時|じゅういちじ]___[寝|ね]ます。"),
        },
        acceptedAnswers: ["に"],
        placeholder: "助詞",
        explanation:
          "Aquí la hora marca el momento puntual de la acción, por eso entra に.",
        relatedSectionIds: ["lesson-023-structure", "lesson-023-warning"],
      },
      {
        id: "q14",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[3時間|___]"),
        },
        acceptedAnswers: ["さんじかん"],
        placeholder: "Escribe la lectura",
        explanation:
          "3時間 se lee さんじかん.",
        relatedSectionIds: ["lesson-023-structure", "lesson-023-contrast"],
      },
      {
        id: "q15",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[8時間|___]ぐらい[仕事|しごと]をします。"),
        },
        acceptedAnswers: ["はちじかん"],
        placeholder: "Escribe la lectura",
        explanation:
          "8時間 se lee はちじかん.",
        relatedSectionIds: ["lesson-023-structure", "lesson-023-examples"],
      },
      {
        id: "q16",
        type: "order-sentence",
        prompt: {
          es: "Ordena la pregunta correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[今|いま]") }, value: "今" },
          { id: "t2", label: { jp: ruby("[何時|なんじ]") }, value: "何時" },
          { id: "t3", label: { jp: ruby("ですか。") }, value: "ですか。" },
        ],
        correctOrder: ["t1", "t2", "t3"],
        answerLabel: { jp: ruby("[今|いま][何時|なんじ]ですか。") },
        explanation:
          "Esta pregunta se reutiliza desde la unidad anterior y sigue siendo la base para empezar una escena de tiempo.",
        relatedSectionIds: ["lesson-023-structure", "lesson-023-summary"],
      },
      {
        id: "q17",
        type: "order-sentence",
        prompt: {
          es: "Ordena la oración correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[毎朝|まいあさ]") }, value: "毎朝" },
          { id: "t2", label: { jp: ruby("[7時|しちじ][頃|ごろ]") }, value: "7時ごろ" },
          { id: "t3", label: { jp: ruby("[起|お]きます。") }, value: "起きます。" },
        ],
        correctOrder: ["t1", "t2", "t3"],
        answerLabel: { jp: ruby("[毎朝|まいあさ][7時|しちじ][頃|ごろ][起|お]きます。") },
        explanation:
          "Aquí la rutina queda expresada con una frecuencia y una hora aproximada.",
        relatedSectionIds: ["lesson-023-structure", "lesson-023-examples"],
      },
      {
        id: "q18",
        type: "order-sentence",
        prompt: {
          es: "Ordena la oración correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[9時|くじ]") }, value: "9時" },
          { id: "t2", label: { jp: ruby("に") }, value: "に" },
          { id: "t3", label: { jp: ruby("シャワー") }, value: "シャワー" },
          { id: "t4", label: { jp: ruby("を") }, value: "を" },
          { id: "t5", label: { jp: ruby("[浴|あ]びます。") }, value: "浴びます。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4", "t5"],
        answerLabel: { jp: ruby("[9時|くじ]にシャワーを[浴|あ]びます。") },
        explanation:
          "Aquí la hora puntual entra con に y シャワー es el objeto de la acción, por eso toma を antes de 浴びます。",
        relatedSectionIds: ["lesson-023-structure", "lesson-023-examples"],
      },
      {
        id: "q19",
        type: "order-sentence",
        prompt: {
          es: "Ordena la oración correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[8時間|はちじかん]ぐらい") }, value: "8時間ぐらい" },
          { id: "t2", label: { jp: ruby("[仕事|しごと]") }, value: "仕事" },
          { id: "t3", label: { jp: ruby("を") }, value: "を" },
          { id: "t4", label: { jp: ruby("します。") }, value: "します。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("[8時間|はちじかん]ぐらい[仕事|しごと]をします。") },
        explanation:
          "Aquí 8時間ぐらい marca una duración aproximada y 仕事をします forma el bloque de acción.",
        relatedSectionIds: ["lesson-023-structure", "lesson-023-examples"],
      },
      {
        id: "q20",
        type: "order-sentence",
        prompt: {
          es: "Ordena la pregunta correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[何時間|なんじかん]") }, value: "何時間" },
          { id: "t2", label: { jp: ruby("[勉強|べんきょう]") }, value: "勉強" },
          { id: "t3", label: { jp: ruby("します") }, value: "します" },
          { id: "t4", label: { jp: ruby("か。") }, value: "か。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("[何時間|なんじかん][勉強|べんきょう]しますか。") },
        explanation:
          "Esta pregunta pide duración, así que empieza con 何時間. Aquí 勉強します funciona como bloque verbal y no lleva を.",
        relatedSectionIds: ["lesson-023-structure", "lesson-023-summary"],
      },
    ],
  },
};

export default lesson023;
