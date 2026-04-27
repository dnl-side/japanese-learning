//src/data/grammar/lessons/lesson-018a.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson018a: GrammarLesson = {
  id: "lesson-018a",
  slug: "verbos-introduccion-grupo-2-ichidan",
  order: 21,
  level: "N5",
  status: "ready",
  title: "Verbos I",
  jpTitle: "どうし・グループ2",
  shortTitle: "Introducción y grupo 2",
  description:
    "Puerta de entrada al sistema verbal: qué es forma diccionario, qué es forma ます, cómo pensar raíz y morfema, y cómo transformar con seguridad los verbos del grupo 2 antes de abrir el bloque más pesado del grupo 1.",
  estimatedMinutes: 74,
  categoryTags: ["fundamentos", "verbos", "grupo 2", "ichidan", "transformacion", "lectura"],
  grammarTags: [
    "forma diccionario",
    "forma ます",
    "grupo 2",
    "ichidan",
    "raíz",
    "morfema",
    "る → ます",
    "食べる",
    "見る",
    "起きる",
    "寝る",
  ],
  searchTerms: [
    "verbos japones grupo 2",
    "ichidan japanese verbs",
    "dictionary form to masu form",
    "ru verbs japanese",
    "taberu mimasu okimasu neru",
    "forma diccionario forma masu",
    "raiz y morfema verbos japones",
  ],
  relatedLessonSlugs: [
    "tiempo-basico-pasado-desu-masu",
    "verbos-grupo-1-godan",
    "verbos-grupo-3-irregulares",
  ],
  relatedVocabularyTags: ["verbos", "acciones", "rutina", "objetos", "base"],
  objectives: [
    "Entender que forma diccionario y forma ます son dos caras del mismo verbo.",
    "Separar visual y mentalmente la raíz del verbo y el morfema que cambia.",
    "Empezar por el grupo 2 porque su transformación a ます es la más directa.",
    "Transformar verbos del grupo 2 de forma diccionario a forma ます con seguridad.",
    "Reconocer que varios verbos que ya conocías en ます venían de formas diccionario concretas.",
    "Preparar una base limpia antes de entrar al grupo 1 y a la parte fuerte del uso verbal con partículas.",
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
      id: "lesson-018a-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "Hasta ahora ya viste varias formas verbales en ます, como あります, います, できます y わかります. En esta unidad empieza el bloque grande de verbos de verdad: vas a mirar el verbo desde su forma diccionario, aprenderás a separar raíz y morfema, y empezarás por el grupo 2 porque es la entrada más clara al sistema.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Aquí trabajarás el paso base:",
              jp: ruby("[食|た]べる → [食|た]べます / [見|み]る → [見|み]ます / [起|お]きる → [起|お]きます。"),
            },
            {
              es: "La idea no es memorizar una lista sin patrón, sino ver qué parte no cambia y qué parte sí cambia.",
            },
            {
              es: "Todavía no vamos a abrir todas las partículas de los verbos.",
              note: "Aquí el foco principal es clasificación y transformación.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-018a-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Forma diccionario y forma ます no son verbos distintos",
          content:
            "La idea más importante aquí es que no estás aprendiendo dos palabras diferentes, sino dos formas del mismo verbo. La forma diccionario es la base del verbo. La forma ます es la versión cortés que usarás mucho en tus primeras oraciones verbales.",
          bullets: [
            {
              jp: ruby("[食|た]べる"),
              es: "forma diccionario",
            },
            {
              jp: ruby("[食|た]べます"),
              es: "forma ます",
            },
            {
              jp: ruby("[見|み]る / [見|み]ます"),
              es: "mismo verbo, dos formas distintas",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Aquí conviene separar raíz y morfema",
          content:
            "En tu método de trabajo, esta parte es clave: la raíz del verbo se mantiene y el morfema cambia. En el grupo 2, el morfema base que quitamos al pasar a ます es る. Por eso este grupo sirve tan bien para abrir el tema.",
          bullets: [
            {
              jp: ruby("[食|た]べる = [食|た]べ + る"),
              es: "食べ queda como raíz de trabajo; る es el morfema que cambia",
            },
            {
              jp: ruby("[起|お]きる = [起|お]き + る"),
              es: "la lógica es la misma",
            },
            {
              jp: ruby("[閉|し]める = [閉|し]め + る"),
              es: "la raíz no cambia; el morfema sí",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Empezamos por grupo 2 porque la transformación es la más limpia",
          content:
            "Antes de entrar al grupo 1, conviene ganar confianza con una familia donde el cambio es muy visible y muy constante. En los verbos del grupo 2, el primer paso de trabajo es separar る. Después añades ます.",
          bullets: [
            {
              jp: ruby("[食|た]べる → [食|た]べ + ます → [食|た]べます"),
              es: "ruta base del grupo 2",
            },
            {
              jp: ruby("[見|み]る → [見|み] + ます → [見|み]ます"),
              es: "misma lógica",
            },
            {
              jp: ruby("[寝|ね]る → [寝|ね] + ます → [寝|ね]ます"),
              es: "misma lógica otra vez",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Varias formas que ya conocías ahora se entienden mejor",
          content:
            "Antes ya viste verbos en ます, pero todavía no habías abierto el sistema completo. Esta unidad te permite mirar hacia atrás y entender de dónde vienen algunas de esas formas.",
          bullets: [
            {
              jp: ruby("いる → います"),
              es: "verbo ya conocido ahora visto desde su base",
            },
            {
              jp: ruby("できる → できます"),
              es: "también sigue una transformación de grupo 2",
            },
            {
              jp: ruby("[開|あ]ける → [開|あ]けます"),
              es: "mismo patrón con un verbo nuevo",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-018a-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-018a-1",
              label: "Paso base del grupo 2",
              pattern: ruby("Aる → Aます"),
              meaning: "Quitas る y añades ます.",
              translation:
                "En el grupo 2, la ruta de trabajo base es directa: separas el morfema る y lo reemplazas por ます. La raíz se mantiene.",
              structure: [
                {
                  slot: "A",
                  value: "raíz",
                  note: {
                    es: "La parte que no cambia, por ejemplo:",
                    jp: ruby("[食|た]べ / [見|み] / [起|お]き / [閉|し]め。"),
                  },
                },
                {
                  slot: { jp: ruby("る") },
                  value: "morfema",
                  note: "En este grupo es la pieza que quitamos para formar la versión en ます.",
                },
                {
                  slot: { jp: ruby("ます") },
                  value: "forma cortés",
                  note: "La nueva terminación básica que usamos en esta etapa.",
                },
              ],
              notes: [
                "Aquí todavía no estás aprendiendo todas las conjugaciones del verbo.",
                "Primero deja muy firme el paso forma diccionario → forma ます.",
              ],
            },
            {
              id: "pattern-018a-2",
              label: "Separación visual de trabajo",
              pattern: ruby("[食|た]べる = [食|た]べ + る / [食|た]べます = [食|た]べ + ます"),
              meaning: "La raíz queda; cambia el morfema.",
              translation:
                "Esta forma de separar te ayuda a ver con claridad qué parte conviene mantener y qué parte conviene cambiar cuando transformas el verbo.",
              notes: [
                {
                  es: "En tu método, conviene marcar raíz y morfema con colores distintos cuando trabajas a mano o en pantalla.",
                },
                {
                  es: "Aunque aquí el archivo no depende de una sola convención visual, la separación raíz / morfema sí queda fijada como estrategia base.",
                },
              ],
            },
            {
              id: "pattern-018a-3",
              label: "Primer contacto con uso real",
              pattern: ruby("AをVます。"),
              meaning: "Hago V con A / realizo la acción sobre A.",
              translation:
                "Aquí solo lo miraremos como primer anticipo muy simple: muchos verbos de acción se usarán después con を para marcar el objeto directo. El desarrollo fuerte de esa partícula quedará para la unidad 19.",
              structure: [
                {
                  slot: "A",
                  value: "objeto",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("パン / [映画|えいが] / [漢字|かんじ] / ドア。"),
                  },
                },
                {
                  slot: { jp: ruby("を") },
                  value: "objeto directo",
                  note: "Aquí solo entra como primer apoyo práctico, no como foco total del bloque verbal.",
                },
                {
                  slot: "Vます",
                  value: "verbo en forma ます",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[食|た]べます / [見|み]ます / [覚|おぼ]えます / [開|あ]けます。"),
                  },
                },
              ],
              notes: [
                "La unidad 19 desarrollará esta parte con más fuerza.",
              ],
            },
          ],
        },
        {
          type: "table",
          title: "Verbos ya conocidos vistos ahora desde la forma diccionario",
          description:
            "Estas parejas sirven para entender que varias formas que ya conocías en ます venían de una base verbal concreta. No todas pertenecen al mismo grupo, pero aquí nos ayudan a abrir el sistema.",
          columns: [
            { key: "dictionary", label: "Forma diccionario", width: "34%", align: "center" },
            { key: "masu", label: "Forma ます", width: "34%", align: "center" },
            { key: "note", label: "Observación", width: "32%" },
          ],
          rows: [
            {
              id: "known-iru",
              cells: {
                dictionary: { jp: ruby("いる") },
                masu: { jp: ruby("います") },
                note: "grupo 2",
              },
            },
            {
              id: "known-dekiru",
              cells: {
                dictionary: { jp: ruby("できる") },
                masu: { jp: ruby("できます") },
                note: "grupo 2",
              },
            },
            {
              id: "known-wakaru",
              cells: {
                dictionary: { jp: ruby("わかる") },
                masu: { jp: ruby("わかります") },
                note: "grupo 1; lo estudiaremos en la siguiente unidad",
              },
            },
            {
              id: "known-aru",
              cells: {
                dictionary: { jp: ruby("ある") },
                masu: { jp: ruby("あります") },
                note: "grupo 1; lo estudiaremos en la siguiente unidad",
              },
            },
          ],
          zebra: true,
        },
        {
          type: "table",
          title: "Grupo 2: separación de raíz y morfema",
          description:
            "Aquí la idea no es solo memorizar pares, sino ver con claridad qué parte se mantiene y qué parte cambia al formar ます.",
          columns: [
            { key: "dictionary", label: "Diccionario", width: "22%", align: "center" },
            { key: "root", label: "Raíz", width: "22%", align: "center" },
            { key: "morpheme", label: "Morfema", width: "16%", align: "center" },
            { key: "masu", label: "Forma ます", width: "22%", align: "center" },
            { key: "meaning", label: "Idea base", width: "18%" },
          ],
          rows: [
            {
              id: "g2-taberu",
              cells: {
                dictionary: { jp: ruby("[食|た]べる") },
                root: { jp: ruby("[食|た]べ") },
                morpheme: { jp: ruby("る") },
                masu: { jp: ruby("[食|た]べます") },
                meaning: "comer",
              },
            },
            {
              id: "g2-miru",
              cells: {
                dictionary: { jp: ruby("[見|み]る") },
                root: { jp: ruby("[見|み]") },
                morpheme: { jp: ruby("る") },
                masu: { jp: ruby("[見|み]ます") },
                meaning: "ver / mirar",
              },
            },
            {
              id: "g2-okiru",
              cells: {
                dictionary: { jp: ruby("[起|お]きる") },
                root: { jp: ruby("[起|お]き") },
                morpheme: { jp: ruby("る") },
                masu: { jp: ruby("[起|お]きます") },
                meaning: "levantarse",
              },
            },
            {
              id: "g2-neru",
              cells: {
                dictionary: { jp: ruby("[寝|ね]る") },
                root: { jp: ruby("[寝|ね]") },
                morpheme: { jp: ruby("る") },
                masu: { jp: ruby("[寝|ね]ます") },
                meaning: "dormir",
              },
            },
            {
              id: "g2-akiru",
              cells: {
                dictionary: { jp: ruby("[開|あ]ける") },
                root: { jp: ruby("[開|あ]け") },
                morpheme: { jp: ruby("る") },
                masu: { jp: ruby("[開|あ]けます") },
                meaning: "abrir",
              },
            },
            {
              id: "g2-shimeru",
              cells: {
                dictionary: { jp: ruby("[閉|し]める") },
                root: { jp: ruby("[閉|し]め") },
                morpheme: { jp: ruby("る") },
                masu: { jp: ruby("[閉|し]めます") },
                meaning: "cerrar",
              },
            },
          ],
          zebra: true,
        },
      ],
    },
    {
      id: "lesson-018a-vocabulary",
      kind: "vocabulary",
      title: "Verbos base del grupo 2",
      description:
        "Aquí fijamos una primera familia de verbos muy útiles para rutinas, objetos y acciones sencillas. El foco sigue siendo la transformación diccionario → ます.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 4,
          items: [
            { id: "vocab-018a-taberu", jp: ruby("[食|た]べる"), reading: "たべる", meaning: "comer", tags: ["verbo", "grupo 2"] },
            { id: "vocab-018a-miru", jp: ruby("[見|み]る"), reading: "みる", meaning: "ver / mirar", tags: ["verbo", "grupo 2"] },
            { id: "vocab-018a-okiru", jp: ruby("[起|お]きる"), reading: "おきる", meaning: "levantarse", tags: ["verbo", "grupo 2"] },
            { id: "vocab-018a-neru", jp: ruby("[寝|ね]る"), reading: "ねる", meaning: "dormir", tags: ["verbo", "grupo 2"] },

            { id: "vocab-018a-akeru", jp: ruby("[開|あ]ける"), reading: "あける", meaning: "abrir", tags: ["verbo", "grupo 2"] },
            { id: "vocab-018a-shimeru", jp: ruby("[閉|し]める"), reading: "しめる", meaning: "cerrar", tags: ["verbo", "grupo 2"] },
            { id: "vocab-018a-kiru", jp: ruby("[着|き]る"), reading: "きる", meaning: "ponerse ropa", tags: ["verbo", "grupo 2"] },
            { id: "vocab-018a-kariru", jp: ruby("[借|か]りる"), reading: "かりる", meaning: "pedir prestado", tags: ["verbo", "grupo 2"] },

            { id: "vocab-018a-abiru", jp: ruby("[浴|あ]びる"), reading: "あびる", meaning: "ducharse / tomar una ducha", tags: ["verbo", "grupo 2"] },
            { id: "vocab-018a-oboeru", jp: ruby("[覚|おぼ]える"), reading: "おぼえる", meaning: "memorizar / recordar", tags: ["verbo", "grupo 2"] },
            { id: "vocab-018a-wasureru", jp: ruby("[忘|わす]れる"), reading: "わすれる", meaning: "olvidar", tags: ["verbo", "grupo 2"] },
            { id: "vocab-018a-shiraberu", jp: ruby("[調|しら]べる"), reading: "しらべる", meaning: "investigar / revisar", tags: ["verbo", "grupo 2"] },
          ],
        },
      ],
    },
    {
      id: "lesson-018a-examples",
      kind: "examples",
      title: "Ejemplos guiados",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "ex-018a-1",
              jp: ruby("パンを[食|た]べます。"),
              es: "Como pan.",
              notes: [
                {
                  es: "Aquí solo usamos を como primer apoyo práctico del objeto directo.",
                },
              ],
            },
            {
              id: "ex-018a-2",
              jp: ruby("[映画|えいが]を[見|み]ます。"),
              es: "Veo una película.",
            },
            {
              id: "ex-018a-3",
              jp: ruby("[朝|あさ]、[起|お]きます。"),
              es: "Me levanto por la mañana.",
            },
            {
              id: "ex-018a-4",
              jp: ruby("[夜|よる]、[寝|ね]ます。"),
              es: "Duermo / me voy a dormir por la noche.",
            },
            {
              id: "ex-018a-5",
              jp: ruby("ドアを[開|あ]けます。"),
              es: "Abro la puerta.",
            },
            {
              id: "ex-018a-6",
              jp: ruby("[窓|まど]を[閉|し]めます。"),
              es: "Cierro la ventana.",
            },
            {
              id: "ex-018a-7",
              jp: ruby("シャツを[着|き]ます。"),
              es: "Me pongo una camisa.",
            },
            {
              id: "ex-018a-8",
              jp: ruby("[辞書|じしょ]を[借|か]ります。"),
              es: "Pido prestado un diccionario.",
            },
            {
              id: "ex-018a-9",
              jp: ruby("シャワーを[浴|あ]びます。"),
              es: "Me ducho.",
            },
            {
              id: "ex-018a-10",
              jp: ruby("[漢字|かんじ]を[覚|おぼ]えます。"),
              es: "Memorizo kanji.",
            },
            {
              id: "ex-018a-11",
              jp: ruby("[名前|なまえ]を[忘|わす]れます。"),
              es: "Olvido un nombre.",
            },
            {
              id: "ex-018a-12",
              jp: ruby("[時刻表|じこくひょう]を[調|しら]べます。"),
              es: "Reviso el horario.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-018a-contrast",
      kind: "contrast",
      title: "Contrastes clave",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-018a-1",
              label: "Mismo verbo, dos formas",
              correct: {
                jp: ruby("[食|た]べる ↔ [食|た]べます"),
                es: "No son dos verbos distintos; son dos formas del mismo verbo.",
              },
              explanation:
                "La forma diccionario sirve como base. La forma ます es la versión cortés de trabajo en esta etapa.",
            },
            {
              id: "contrast-018a-2",
              label: "Raíz vs morfema",
              correct: {
                jp: ruby("[閉|し]める = [閉|し]め + る / [閉|し]めます = [閉|し]め + ます"),
                es: "La raíz no cambia; cambia el morfema final.",
              },
              explanation:
                "Esta es la separación que conviene fijar desde el inicio si quieres conjugar con claridad.",
            },
            {
              id: "contrast-018a-3",
              label: "Entrada amable al sistema",
              correct: {
                jp: ruby("[見|み]る → [見|み]ます / [起|お]きる → [起|お]きます"),
                es: "La transformación del grupo 2 es constante y muy visible.",
              },
              explanation:
                "Por eso empezamos por esta familia antes de pasar al grupo 1, que requiere más cuidado morfológico.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-018a-practice",
      kind: "practice",
      title: "Práctica guiada antes del quiz",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Separa cada verbo en dos partes antes de transformarlo.",
              jp: ruby("[食|た]べる → [食|た]べ + る / [見|み]る → [見|み] + る / [調|しら]べる → [調|しら]べ + る。"),
            },
            {
              es: "Después cambia solo el morfema final por",
              jp: ruby("ます"),
              note: "y comprueba que la raíz quedó intacta.",
            },
            {
              es: "Haz primero la transformación aislada y recién después úsala en mini frases.",
              jp: ruby("[食|た]べる → [食|た]べます / パンを[食|た]べます。"),
            },
            {
              es: "Practica en voz alta con ritmo fijo:",
              jp: ruby("[起|お]きる → [起|お]きます / [寝|ね]る → [寝|ね]ます / [覚|おぼ]える → [覚|おぼ]えます。"),
            },
          ],
        },
        {
          type: "resource-links",
          title: "Apoyo complementario",
          description:
            "Esta lesson abre el sistema. Para ver la clasificación y explicación más amplia del grupo 2, usa también la sección de verbos de la app.",
          items: [
            {
              id: "link-018a-verbs-hub",
              label: "Ir al bloque general de verbos",
              href: "/gramatica/verbos",
              jp: ruby("[動詞|どうし]のページ"),
              description: "Repasa la vista general del módulo de verbos y cómo encaja este bloque dentro del sistema completo.",
              tone: "accent",
            },
            {
              id: "link-018a-ichidan",
              label: "Ir al grupo 2 (ichidan)",
              href: "/gramatica/verbos/grupos/ichidan",
              jp: ruby("グループ2・[一段動詞|いちだんどうし]"),
              description: "Profundiza en la clasificación y el comportamiento del grupo 2.",
              tone: "accent",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-018a-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Entiendo que forma diccionario y forma ます son dos formas del mismo verbo.",
            },
            {
              es: "Puedo separar raíz y morfema en varios verbos del grupo 2.",
            },
            {
              es: "Ya fijé la ruta base del grupo 2:",
              jp: ruby("る → ます"),
            },
            {
              es: "Puedo transformar verbos como",
              jp: ruby("[食|た]べる / [見|み]る / [起|お]きる / [寝|ね]る"),
              note: "a su forma ます sin romper la raíz.",
            },
            {
              es: "Estoy listo para pasar al grupo 1, donde la parte que cambia exigirá más atención.",
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-018a-quiz",
    title: "Quiz — Introducción y grupo 2",
    description:
      "Transforma cada verbo desde forma diccionario a forma ます. Aquí el foco no está en elegir entre alternativas, sino en hacer tú mismo el cambio correcto.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "fill-blank",
        prompt: {
          jp: ruby("[食|た]べる → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["食べます", "たべます"],
        placeholder: "こたえを かいてください",
        explanation: "En el grupo 2, quitas る y añades ます: 食べる → 食べます.",
        relatedSectionIds: ["lesson-018a-structure", "lesson-018a-summary"],
      },
      {
        id: "q2",
        type: "fill-blank",
        prompt: {
          jp: ruby("[見|み]る → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["見ます", "みます"],
        placeholder: "こたえを かいてください",
        explanation: "見る pasa a 見ます.",
        relatedSectionIds: ["lesson-018a-structure", "lesson-018a-summary"],
      },
      {
        id: "q3",
        type: "fill-blank",
        prompt: {
          jp: ruby("[起|お]きる → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["起きます", "おきます"],
        placeholder: "こたえを かいてください",
        explanation: "起きる pasa a 起きます.",
        relatedSectionIds: ["lesson-018a-structure", "lesson-018a-summary"],
      },
      {
        id: "q4",
        type: "fill-blank",
        prompt: {
          jp: ruby("[寝|ね]る → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["寝ます", "ねます"],
        placeholder: "こたえを かいてください",
        explanation: "寝る pasa a 寝ます.",
        relatedSectionIds: ["lesson-018a-structure", "lesson-018a-summary"],
      },
      {
        id: "q5",
        type: "fill-blank",
        prompt: {
          jp: ruby("[開|あ]ける → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["開けます", "あけます"],
        placeholder: "こたえを かいてください",
        explanation: "開ける pasa a 開けます.",
        relatedSectionIds: ["lesson-018a-structure", "lesson-018a-summary"],
      },
      {
        id: "q6",
        type: "fill-blank",
        prompt: {
          jp: ruby("[閉|し]める → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["閉めます", "しめます"],
        placeholder: "こたえを かいてください",
        explanation: "閉める pasa a 閉めます.",
        relatedSectionIds: ["lesson-018a-structure", "lesson-018a-summary"],
      },
      {
        id: "q7",
        type: "fill-blank",
        prompt: {
          jp: ruby("[着|き]る → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["着ます", "きます"],
        placeholder: "こたえを かいてください",
        explanation: "着る pasa a 着ます.",
        relatedSectionIds: ["lesson-018a-vocabulary", "lesson-018a-summary"],
      },
      {
        id: "q8",
        type: "fill-blank",
        prompt: {
          jp: ruby("[借|か]りる → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["借ります", "かります"],
        placeholder: "こたえを かいてください",
        explanation: "借りる pasa a 借ります.",
        relatedSectionIds: ["lesson-018a-vocabulary", "lesson-018a-summary"],
      },
      {
        id: "q9",
        type: "fill-blank",
        prompt: {
          jp: ruby("[浴|あ]びる → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["浴びます", "あびます"],
        placeholder: "こたえを かいてください",
        explanation: "浴びる pasa a 浴びます.",
        relatedSectionIds: ["lesson-018a-vocabulary", "lesson-018a-summary"],
      },
      {
        id: "q10",
        type: "fill-blank",
        prompt: {
          jp: ruby("[覚|おぼ]える → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["覚えます", "おぼえます"],
        placeholder: "こたえを かいてください",
        explanation: "覚える pasa a 覚えます.",
        relatedSectionIds: ["lesson-018a-vocabulary", "lesson-018a-summary"],
      },
      {
        id: "q11",
        type: "fill-blank",
        prompt: {
          jp: ruby("[忘|わす]れる → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["忘れます", "わすれます"],
        placeholder: "こたえを かいてください",
        explanation: "忘れる pasa a 忘れます.",
        relatedSectionIds: ["lesson-018a-vocabulary", "lesson-018a-summary"],
      },
      {
        id: "q12",
        type: "fill-blank",
        prompt: {
          jp: ruby("[調|しら]べる → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["調べます", "しらべます"],
        placeholder: "こたえを かいてください",
        explanation: "調べる pasa a 調べます.",
        relatedSectionIds: ["lesson-018a-vocabulary", "lesson-018a-summary"],
      },
    ],
  },
};

export default lesson018a;
