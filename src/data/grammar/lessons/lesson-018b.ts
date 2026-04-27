//src/data/grammar/lessons/lesson-018b.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson018b: GrammarLesson = {
  id: "lesson-018b",
  slug: "verbos-grupo-1-godan",
  order: 22,
  level: "N5",
  status: "ready",
  title: "Verbos II",
  jpTitle: "どうし・グループ1",
  shortTitle: "Grupo 1",
  description:
    "Cómo reconocer y transformar los verbos del grupo 1, entender la lógica del morfema final que sube a la fila de い antes de ます, y distinguirlos del grupo 2 sin caer en la trampa de varios verbos terminados en る.",
  estimatedMinutes: 88,
  categoryTags: ["fundamentos", "verbos", "grupo 1", "godan", "transformacion", "lectura"],
  grammarTags: [
    "grupo 1",
    "godan",
    "forma diccionario",
    "forma ます",
    "う→い",
    "く→き",
    "ぐ→ぎ",
    "す→し",
    "つ→ち",
    "ぬ→に",
    "ぶ→び",
    "む→み",
    "る→り",
  ],
  searchTerms: [
    "verbos japones grupo 1",
    "godan japanese verbs",
    "dictionary to masu godan",
    "u ku gu su tsu nu bu mu ru to masu",
    "group 1 japanese verbs",
    "raiz y morfema grupo 1",
    "ru verbs exceptions japanese",
  ],
  relatedLessonSlugs: [
    "verbos-introduccion-grupo-2-ichidan",
    "verbos-grupo-3-irregulares",
    "tiempo-basico-pasado-desu-masu",
  ],
  relatedVocabularyTags: ["verbos", "acciones", "lectura", "objetos", "base"],
  objectives: [
    "Entender que el grupo 1 cambia el morfema final subiendo a la fila de い antes de ます.",
    "Usar una regla de identificación práctica: si no termina en る, es grupo 1; si termina en る, primero miras lo que viene antes y luego revisas los casos de cuidado.",
    "Separar raíz y morfema con claridad en varios verbos del grupo 1.",
    "Transformar verbos del grupo 1 de forma diccionario a forma ます con seguridad.",
    "Reconocer una lista básica de verbos terminados en る que parecen grupo 2, pero se trabajan como grupo 1.",
    "Preparar la base antes de pasar a irregulares y después al uso más fuerte de partículas con verbos.",
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
      id: "lesson-018b-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "Después del grupo 2, ahora toca la parte más pesada del arranque verbal: el grupo 1. Aquí ya no basta con quitar una sola pieza final. Lo que cambia es el morfema final del verbo, y para formar ます ese morfema sube a la fila de い en la tabla de hiragana. Por eso esta unidad exige más atención, más tabla y más comparación.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Verás transformaciones como:",
              jp: ruby("[書|か]く → [書|か]きます / [話|はな]す → [話|はな]します / [待|ま]つ → [待|ま]ちます。"),
            },
            {
              es: "Aquí la separación entre raíz y morfema sigue siendo clave.",
            },
            {
              es: "También fijaremos varios verbos terminados en",
              jp: ruby("る"),
              note: "que parecen grupo 2, pero en esta ruta se trabajan como grupo 1.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-018b-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "La regla práctica de entrada",
          content:
            "Para empezar a clasificar sin entrar todavía en una teoría demasiado pesada, aquí seguiremos una regla muy útil. Si el verbo no termina en る, lo trabajas como grupo 1. Si termina en る, primero miras la vocal que va antes. Si no tiene i o e antes de る, también lo tratas como grupo 1. Si sí tiene i o e antes de る, revisas con más cuidado porque ahí se abre la zona de duda entre grupo 1 y grupo 2.",
          bullets: [
            {
              jp: ruby("[書|か]く / [飲|の]む / [話|はな]す"),
              es: "no terminan en る → grupo 1",
            },
            {
              jp: ruby("[帰|かえ]る / [走|はし]る / [知|し]る"),
              es: "terminan en る, pero aquí se trabajan como grupo 1",
            },
            {
              jp: ruby("[食|た]べる / [見|み]る"),
              es: "ya los viste en grupo 2",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Aquí el morfema sube a la fila de い",
          content:
            "La lógica central del grupo 1 es morfológica. Primero identificas el morfema final del verbo. Después lo subes un escalón a la versión de い en la tabla de hiragana. Y recién entonces añades ます. Eso explica por qué く pasa a き, す pasa a し, つ pasa a ち, む pasa a み, etc.",
          bullets: [
            {
              jp: ruby("[書|か]く = [書|か] + く → [書|か] + き + ます"),
              es: "書く → 書きます",
            },
            {
              jp: ruby("[話|はな]す = [話|はな] + す → [話|はな] + し + ます"),
              es: "話す → 話します",
            },
            {
              jp: ruby("[読|よ]む = [読|よ] + む → [読|よ] + み + ます"),
              es: "読む → 読みます",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Raíz y morfema siguen siendo la mejor separación",
          content:
            "Igual que en el grupo 2, aquí conviene separar raíz y morfema. La diferencia es que ahora el morfema no desaparece sin más, sino que cambia de forma antes de unirse a ます.",
          bullets: [
            {
              jp: ruby("[待|ま]つ = [待|ま] + つ"),
              es: "raíz + morfema",
            },
            {
              jp: ruby("[待|ま]ちます = [待|ま] + ち + ます"),
              es: "el morfema cambia a la fila de い",
            },
            {
              jp: ruby("[帰|かえ]る = [帰|かえ] + る / [帰|かえ]ります = [帰|かえ] + り + ます"),
              es: "con る del grupo 1 pasa lo mismo",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Los verbos en る de cuidado no se aprenden por intuición",
          content:
            "Aquí conviene ser explícito con una lista base de verbos que terminan en る y aun así se trabajan como grupo 1. No es buena idea confiar solo en la intuición visual de “parece grupo 2”. En esta ruta fijaremos algunos de los más importantes desde el principio para que no se metan como error habitual.",
          bullets: [
            {
              jp: ruby("[入|はい]る / [走|はし]る / [帰|かえ]る / [知|し]る / [切|き]る / [要|い]る"),
              es: "lista de cuidado de esta unidad",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-018b-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-018b-1",
              label: "Paso base del grupo 1",
              pattern: ruby("A + (morfema final) → A + (fila de い) + ます"),
              meaning: "La raíz se mantiene; el morfema sube a la fila de い y luego entra ます.",
              translation:
                "Aquí no quitas simplemente una pieza como en el grupo 2. Primero transformas el morfema final y después añades ます.",
              structure: [
                {
                  slot: "A",
                  value: "raíz",
                  note: {
                    es: "La parte que se mantiene, por ejemplo:",
                    jp: ruby("[書|か] / [話|はな] / [読|よ] / [帰|かえ]。"),
                  },
                },
                {
                  slot: "morfema final",
                  value: "う・く・ぐ・す・つ・ぬ・ぶ・む・る",
                  note: "Aquí está la pieza que cambia.",
                },
                {
                  slot: "fila de い + ます",
                  value: "い・き・ぎ・し・ち・に・び・み・り + ます",
                  note: "Ese es el paso de trabajo de esta unidad.",
                },
              ],
              notes: [
                "Piensa primero en la fila de い y recién después en ます.",
              ],
            },
            {
              id: "pattern-018b-2",
              label: "Regla rápida de clasificación",
              pattern: ruby("るじゃない → グループ1 / る + i・e のまえ → まず かくにん"),
              meaning: "Si no termina en る, lo trabajas como grupo 1. Si termina en る y tiene i o e antes, revisas.",
              translation:
                "Esta regla no resuelve todo el japonés, pero sí te da una entrada muy útil para trabajar con el bloque básico de esta unidad.",
              notes: [
                "Aquí la palabra clave es revisar, no adivinar.",
              ],
            },
            {
              id: "pattern-018b-3",
              label: "Primer apoyo de uso real",
              pattern: ruby("AをVます。"),
              meaning: "Realizas la acción V sobre A.",
              translation:
                "Igual que en 18a, aquí solo aparece como primer apoyo práctico. La unidad 19 abrirá de verdad el bloque de verbos de acción con を y otras partículas.",
              structure: [
                {
                  slot: "A",
                  value: "objeto",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[手紙|てがみ] / [音楽|おんがく] / [水|みず] / [本|ほん] / パン。"),
                  },
                },
                {
                  slot: { jp: ruby("Vます") },
                  value: "verbo ya transformado",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[書|か]きます / [聞|き]きます / [飲|の]みます / [読|よ]みます / [買|か]います。"),
                  },
                },
              ],
              notes: [
                "Aquí el foco sigue siendo la transformación, no la sintaxis completa del verbo.",
              ],
            },
          ],
        },
        {
          type: "table",
          title: "Mapa del morfema final y su paso a la fila de い",
          description:
            "Este es el corazón mecánico de la unidad. Primero mira el morfema final del verbo. Después súbelo a la fila de い y recién entonces añade ます.",
          columns: [
            { key: "final", label: "Morfema final", width: "24%", align: "center" },
            { key: "irow", label: "Fila de い", width: "24%", align: "center" },
            { key: "example", label: "Ejemplo", width: "26%", align: "center" },
            { key: "masu", label: "Resultado", width: "26%", align: "center" },
          ],
          rows: [
            {
              id: "row-u",
              cells: {
                final: { jp: ruby("う") },
                irow: { jp: ruby("い") },
                example: { jp: ruby("[買|か]う") },
                masu: { jp: ruby("[買|か]います") },
              },
            },
            {
              id: "row-ku",
              cells: {
                final: { jp: ruby("く") },
                irow: { jp: ruby("き") },
                example: { jp: ruby("[書|か]く") },
                masu: { jp: ruby("[書|か]きます") },
              },
            },
            {
              id: "row-gu",
              cells: {
                final: { jp: ruby("ぐ") },
                irow: { jp: ruby("ぎ") },
                example: { jp: ruby("[泳|およ]ぐ") },
                masu: { jp: ruby("[泳|およ]ぎます") },
              },
            },
            {
              id: "row-su",
              cells: {
                final: { jp: ruby("す") },
                irow: { jp: ruby("し") },
                example: { jp: ruby("[話|はな]す") },
                masu: { jp: ruby("[話|はな]します") },
              },
            },
            {
              id: "row-tsu",
              cells: {
                final: { jp: ruby("つ") },
                irow: { jp: ruby("ち") },
                example: { jp: ruby("[待|ま]つ") },
                masu: { jp: ruby("[待|ま]ちます") },
              },
            },
            {
              id: "row-nu",
              cells: {
                final: { jp: ruby("ぬ") },
                irow: { jp: ruby("に") },
                example: { jp: ruby("[死|し]ぬ") },
                masu: { jp: ruby("[死|し]にます") },
              },
            },
            {
              id: "row-bu",
              cells: {
                final: { jp: ruby("ぶ") },
                irow: { jp: ruby("び") },
                example: { jp: ruby("[選|えら]ぶ") },
                masu: { jp: ruby("[選|えら]びます") },
              },
            },
            {
              id: "row-mu",
              cells: {
                final: { jp: ruby("む") },
                irow: { jp: ruby("み") },
                example: { jp: ruby("[読|よ]む") },
                masu: { jp: ruby("[読|よ]みます") },
              },
            },
            {
              id: "row-ru",
              cells: {
                final: { jp: ruby("る") },
                irow: { jp: ruby("り") },
                example: { jp: ruby("[帰|かえ]る") },
                masu: { jp: ruby("[帰|かえ]ります") },
              },
            },
          ],
          zebra: true,
        },
        {
          type: "table",
          title: "Grupo 1: separación de raíz y morfema",
          description:
            "Aquí puedes ver que la raíz sigue estable, mientras que el morfema final es la parte que sube a la fila de い antes de ます.",
          columns: [
            { key: "dictionary", label: "Diccionario", width: "22%", align: "center" },
            { key: "root", label: "Raíz", width: "22%", align: "center" },
            { key: "morpheme", label: "Morfema", width: "16%", align: "center" },
            { key: "irow", label: "Paso", width: "16%", align: "center" },
            { key: "masu", label: "Forma ます", width: "24%", align: "center" },
          ],
          rows: [
            {
              id: "g1-kaku",
              cells: {
                dictionary: { jp: ruby("[書|か]く") },
                root: { jp: ruby("[書|か]") },
                morpheme: { jp: ruby("く") },
                irow: { jp: ruby("き") },
                masu: { jp: ruby("[書|か]きます") },
              },
            },
            {
              id: "g1-hanasu",
              cells: {
                dictionary: { jp: ruby("[話|はな]す") },
                root: { jp: ruby("[話|はな]") },
                morpheme: { jp: ruby("す") },
                irow: { jp: ruby("し") },
                masu: { jp: ruby("[話|はな]します") },
              },
            },
            {
              id: "g1-yomu",
              cells: {
                dictionary: { jp: ruby("[読|よ]む") },
                root: { jp: ruby("[読|よ]") },
                morpheme: { jp: ruby("む") },
                irow: { jp: ruby("み") },
                masu: { jp: ruby("[読|よ]みます") },
              },
            },
            {
              id: "g1-matsu",
              cells: {
                dictionary: { jp: ruby("[待|ま]つ") },
                root: { jp: ruby("[待|ま]") },
                morpheme: { jp: ruby("つ") },
                irow: { jp: ruby("ち") },
                masu: { jp: ruby("[待|ま]ちます") },
              },
            },
            {
              id: "g1-kaeru",
              cells: {
                dictionary: { jp: ruby("[帰|かえ]る") },
                root: { jp: ruby("[帰|かえ]") },
                morpheme: { jp: ruby("る") },
                irow: { jp: ruby("り") },
                masu: { jp: ruby("[帰|かえ]ります") },
              },
            },
            {
              id: "g1-shiru",
              cells: {
                dictionary: { jp: ruby("[知|し]る") },
                root: { jp: ruby("[知|し]") },
                morpheme: { jp: ruby("る") },
                irow: { jp: ruby("り") },
                masu: { jp: ruby("[知|し]ります") },
              },
            },
          ],
          zebra: true,
        },
        {
          type: "table",
          title: "Verbos terminados en る que aquí debes vigilar",
          description:
            "Estos verbos pueden engañar a muchos alumnos porque visualmente recuerdan al grupo 2. En esta unidad conviene fijarlos explícitamente como casos de cuidado del grupo 1.",
          columns: [
            { key: "dictionary", label: "Diccionario", width: "32%", align: "center" },
            { key: "masu", label: "Forma ます", width: "32%", align: "center" },
            { key: "note", label: "Observación", width: "36%" },
          ],
          rows: [
            {
              id: "care-hairu",
              cells: {
                dictionary: { jp: ruby("[入|はい]る") },
                masu: { jp: ruby("[入|はい]ります") },
                note: "termina en る, pero aquí se trabaja como grupo 1",
              },
            },
            {
              id: "care-hashiru",
              cells: {
                dictionary: { jp: ruby("[走|はし]る") },
                masu: { jp: ruby("[走|はし]ります") },
                note: "termina en る, pero aquí se trabaja como grupo 1",
              },
            },
            {
              id: "care-kaeru",
              cells: {
                dictionary: { jp: ruby("[帰|かえ]る") },
                masu: { jp: ruby("[帰|かえ]ります") },
                note: "caso de cuidado muy frecuente",
              },
            },
            {
              id: "care-shiru",
              cells: {
                dictionary: { jp: ruby("[知|し]る") },
                masu: { jp: ruby("[知|し]ります") },
                note: "caso de cuidado muy frecuente",
              },
            },
            {
              id: "care-kiru",
              cells: {
                dictionary: { jp: ruby("[切|き]る") },
                masu: { jp: ruby("[切|き]ります") },
                note: "no lo confundas con 着る",
              },
            },
            {
              id: "care-iru",
              cells: {
                dictionary: { jp: ruby("[要|い]る") },
                masu: { jp: ruby("[要|い]ります") },
                note: "otro caso de cuidado básico",
              },
            },
          ],
          zebra: true,
        },
      ],
    },
    {
      id: "lesson-018b-vocabulary",
      kind: "vocabulary",
      title: "Verbos base del grupo 1",
      description:
        "Aquí reunimos una familia amplia para que el patrón de transformación quede realmente firme. El foco sigue siendo pasar de forma diccionario a forma ます.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 4,
          items: [
            { id: "vocab-018b-kaku", jp: ruby("[書|か]く"), reading: "かく", meaning: "escribir", tags: ["verbo", "grupo 1"] },
            { id: "vocab-018b-kiku", jp: ruby("[聞|き]く"), reading: "きく", meaning: "escuchar / oír", tags: ["verbo", "grupo 1"] },
            { id: "vocab-018b-oyogu", jp: ruby("[泳|およ]ぐ"), reading: "およぐ", meaning: "nadar", tags: ["verbo", "grupo 1"] },
            { id: "vocab-018b-hanasu", jp: ruby("[話|はな]す"), reading: "はなす", meaning: "hablar", tags: ["verbo", "grupo 1"] },

            { id: "vocab-018b-matsu", jp: ruby("[待|ま]つ"), reading: "まつ", meaning: "esperar", tags: ["verbo", "grupo 1"] },
            { id: "vocab-018b-motsu", jp: ruby("[持|も]つ"), reading: "もつ", meaning: "tener en la mano / sostener", tags: ["verbo", "grupo 1"] },
            { id: "vocab-018b-shinu", jp: ruby("[死|し]ぬ"), reading: "しぬ", meaning: "morir", tags: ["verbo", "grupo 1"] },
            { id: "vocab-018b-erabu", jp: ruby("[選|えら]ぶ"), reading: "えらぶ", meaning: "elegir", tags: ["verbo", "grupo 1"] },

            { id: "vocab-018b-nomu", jp: ruby("[飲|の]む"), reading: "のむ", meaning: "beber", tags: ["verbo", "grupo 1"] },
            { id: "vocab-018b-yomu", jp: ruby("[読|よ]む"), reading: "よむ", meaning: "leer", tags: ["verbo", "grupo 1"] },
            { id: "vocab-018b-kau", jp: ruby("[買|か]う"), reading: "かう", meaning: "comprar", tags: ["verbo", "grupo 1"] },
            { id: "vocab-018b-tsukuru", jp: ruby("[作|つく]る"), reading: "つくる", meaning: "hacer / fabricar", tags: ["verbo", "grupo 1"] },

            { id: "vocab-018b-kaeru", jp: ruby("[帰|かえ]る"), reading: "かえる", meaning: "regresar", tags: ["verbo", "grupo 1", "cuidado"] },
            { id: "vocab-018b-hairu", jp: ruby("[入|はい]る"), reading: "はいる", meaning: "entrar", tags: ["verbo", "grupo 1", "cuidado"] },
            { id: "vocab-018b-hashiru", jp: ruby("[走|はし]る"), reading: "はしる", meaning: "correr", tags: ["verbo", "grupo 1", "cuidado"] },
            { id: "vocab-018b-shiru", jp: ruby("[知|し]る"), reading: "しる", meaning: "saber / conocer un dato", tags: ["verbo", "grupo 1", "cuidado"] },

            { id: "vocab-018b-kiru", jp: ruby("[切|き]る"), reading: "きる", meaning: "cortar", tags: ["verbo", "grupo 1", "cuidado"] },
            { id: "vocab-018b-iru", jp: ruby("[要|い]る"), reading: "いる", meaning: "necesitar", tags: ["verbo", "grupo 1", "cuidado"] },
          ],
        },
      ],
    },
    {
      id: "lesson-018b-examples",
      kind: "examples",
      title: "Ejemplos guiados",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "ex-018b-1",
              jp: ruby("[手紙|てがみ]を[書|か]きます。"),
              es: "Escribo una carta.",
            },
            {
              id: "ex-018b-2",
              jp: ruby("[音楽|おんがく]を[聞|き]きます。"),
              es: "Escucho música.",
            },
            {
              id: "ex-018b-3",
              jp: ruby("[水|みず]を[飲|の]みます。"),
              es: "Bebo agua.",
            },
            {
              id: "ex-018b-4",
              jp: ruby("[本|ほん]を[読|よ]みます。"),
              es: "Leo un libro.",
            },
            {
              id: "ex-018b-5",
              jp: ruby("[友達|ともだち]を[待|ま]ちます。"),
              es: "Espero a un amigo.",
            },
            {
              id: "ex-018b-6",
              jp: ruby("[荷物|にもつ]を[持|も]ちます。"),
              es: "Sostengo el equipaje / llevo el equipaje en la mano.",
            },
            {
              id: "ex-018b-7",
              jp: ruby("パンを[買|か]います。"),
              es: "Compro pan.",
            },
            {
              id: "ex-018b-8",
              jp: ruby("[作文|さくぶん]を[作|つく]ります。"),
              es: "Hago una redacción.",
            },
            {
              id: "ex-018b-9",
              jp: ruby("[写真|しゃしん]を[選|えら]びます。"),
              es: "Elijo una foto.",
            },
            {
              id: "ex-018b-10",
              jp: ruby("[紙|かみ]を[切|き]ります。"),
              es: "Corto papel.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-018b-contrast",
      kind: "contrast",
      title: "Contrastes clave",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-018b-1",
              label: "Grupo 2 vs grupo 1",
              correct: {
                jp: ruby("[食|た]べる → [食|た]べます / [書|か]く → [書|か]きます"),
                es: "Los dos llegan a ます, pero no por la misma ruta.",
              },
              explanation:
                "En el grupo 2 quitas る y añades ます. En el grupo 1 cambias el morfema final a la fila de い y después añades ます.",
            },
            {
              id: "contrast-018b-2",
              label: "る no garantiza grupo 2",
              correct: {
                jp: ruby("[帰|かえ]る → [帰|かえ]ります / [知|し]る → [知|し]ります"),
                es: "Estos verbos terminan en る, pero aquí se trabajan como grupo 1.",
              },
              explanation:
                "Por eso no conviene mirar solo el final visual. Cuando aparece る, primero verificas y luego recuerdas la lista de cuidado.",
            },
            {
              id: "contrast-018b-3",
              label: "Raíz estable, morfema cambiante",
              correct: {
                jp: ruby("[読|よ]む = [読|よ] + む / [読|よ]みます = [読|よ] + み + ます"),
                es: "La raíz no se mueve; el cambio cae en el morfema.",
              },
              explanation:
                "La separación raíz / morfema sigue siendo la mejor herramienta para no perderte dentro del grupo 1.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-018b-practice",
      kind: "practice",
      title: "Práctica guiada antes del quiz",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Primero identifica el morfema final.",
              jp: ruby("[書|か]く → く / [話|はな]す → す / [待|ま]つ → つ / [飲|の]む → む。"),
            },
            {
              es: "Después súbelo a la fila de い.",
              jp: ruby("く → き / す → し / つ → ち / む → み。"),
            },
            {
              es: "Solo al final añade",
              jp: ruby("ます"),
              note: "para no saltarte el paso morfológico intermedio.",
            },
            {
              es: "Haz una segunda ronda especial solo con verbos terminados en",
              jp: ruby("る"),
              note: "para no confundir 帰る, 入る, 走る, 知る, 切る y 要る con el grupo 2.",
            },
          ],
        },
        {
          type: "resource-links",
          title: "Apoyo complementario",
          description:
            "Esta lesson fija el grupo 1 como sistema. Para ver la separación más amplia y sus familias, usa también la sección específica del módulo de verbos.",
          items: [
            {
              id: "link-018b-godan",
              label: "Ir al grupo 1 (godan)",
              href: "/gramatica/verbos/grupos/godan",
              jp: ruby("グループ1・[五段動詞|ごだんどうし]"),
              description: "Profundiza en las familias del grupo 1 y repasa con más ejemplos de clasificación.",
              tone: "accent",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-018b-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Puedo reconocer la lógica central del grupo 1: morfema final → fila de い → ます.",
            },
            {
              es: "No dependo solo del final visual del verbo para clasificarlo.",
            },
            {
              es: "Ya fijé varios verbos de cuidado terminados en",
              jp: ruby("る"),
              note: "como grupo 1.",
            },
            {
              es: "Puedo transformar verbos como",
              jp: ruby("[書|か]く / [読|よ]む / [話|はな]す / [待|ま]つ / [帰|かえ]る"),
              note: "a su forma ます.",
            },
            {
              es: "Estoy listo para pasar a los irregulares, donde la lógica vuelve a cambiar.",
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-018b-quiz",
    title: "Quiz — Grupo 1",
    description:
      "Transforma cada verbo desde forma diccionario a forma ます. Aquí el foco es aplicar bien la fila de い y vigilar los verbos terminados en る que engañan.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "fill-blank",
        prompt: {
          jp: ruby("[書|か]く → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["書きます", "かきます"],
        placeholder: "こたえを かいてください",
        explanation: "書く pasa a 書きます: く → き + ます.",
        relatedSectionIds: ["lesson-018b-structure", "lesson-018b-summary"],
      },
      {
        id: "q2",
        type: "fill-blank",
        prompt: {
          jp: ruby("[聞|き]く → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["聞きます", "ききます"],
        placeholder: "こたえを かいてください",
        explanation: "聞く pasa a 聞きます.",
        relatedSectionIds: ["lesson-018b-vocabulary", "lesson-018b-summary"],
      },
      {
        id: "q3",
        type: "fill-blank",
        prompt: {
          jp: ruby("[泳|およ]ぐ → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["泳ぎます", "およぎます"],
        placeholder: "こたえを かいてください",
        explanation: "泳ぐ pasa a 泳ぎます: ぐ → ぎ + ます.",
        relatedSectionIds: ["lesson-018b-vocabulary", "lesson-018b-summary"],
      },
      {
        id: "q4",
        type: "fill-blank",
        prompt: {
          jp: ruby("[話|はな]す → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["話します", "はなします"],
        placeholder: "こたえを かいてください",
        explanation: "話す pasa a 話します: す → し + ます.",
        relatedSectionIds: ["lesson-018b-vocabulary", "lesson-018b-summary"],
      },
      {
        id: "q5",
        type: "fill-blank",
        prompt: {
          jp: ruby("[待|ま]つ → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["待ちます", "まちます"],
        placeholder: "こたえを かいてください",
        explanation: "待つ pasa a 待ちます: つ → ち + ます.",
        relatedSectionIds: ["lesson-018b-vocabulary", "lesson-018b-summary"],
      },
      {
        id: "q6",
        type: "fill-blank",
        prompt: {
          jp: ruby("[持|も]つ → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["持ちます", "もちます"],
        placeholder: "こたえを かいてください",
        explanation: "持つ pasa a 持ちます.",
        relatedSectionIds: ["lesson-018b-vocabulary", "lesson-018b-summary"],
      },
      {
        id: "q7",
        type: "fill-blank",
        prompt: {
          jp: ruby("[死|し]ぬ → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["死にます", "しにます"],
        placeholder: "こたえを かいてください",
        explanation: "死ぬ pasa a 死にます: ぬ → に + ます.",
        relatedSectionIds: ["lesson-018b-vocabulary", "lesson-018b-summary"],
      },
      {
        id: "q8",
        type: "fill-blank",
        prompt: {
          jp: ruby("[選|えら]ぶ → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["選びます", "えらびます"],
        placeholder: "こたえを かいてください",
        explanation: "選ぶ pasa a 選びます: ぶ → び + ます.",
        relatedSectionIds: ["lesson-018b-vocabulary", "lesson-018b-summary"],
      },
      {
        id: "q9",
        type: "fill-blank",
        prompt: {
          jp: ruby("[飲|の]む → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["飲みます", "のみます"],
        placeholder: "こたえを かいてください",
        explanation: "飲む pasa a 飲みます.",
        relatedSectionIds: ["lesson-018b-vocabulary", "lesson-018b-summary"],
      },
      {
        id: "q10",
        type: "fill-blank",
        prompt: {
          jp: ruby("[読|よ]む → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["読みます", "よみます"],
        placeholder: "こたえを かいてください",
        explanation: "読む pasa a 読みます.",
        relatedSectionIds: ["lesson-018b-vocabulary", "lesson-018b-summary"],
      },
      {
        id: "q11",
        type: "fill-blank",
        prompt: {
          jp: ruby("[買|か]う → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["買います", "かいます"],
        placeholder: "こたえを かいてください",
        explanation: "買う pasa a 買います: う → い + ます.",
        relatedSectionIds: ["lesson-018b-vocabulary", "lesson-018b-summary"],
      },
      {
        id: "q12",
        type: "fill-blank",
        prompt: {
          jp: ruby("[作|つく]る → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["作ります", "つくります"],
        placeholder: "こたえを かいてください",
        explanation: "作る pasa a 作ります.",
        relatedSectionIds: ["lesson-018b-vocabulary", "lesson-018b-summary"],
      },
      {
        id: "q13",
        type: "fill-blank",
        prompt: {
          jp: ruby("[帰|かえ]る → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["帰ります", "かえります"],
        placeholder: "こたえを かいてください",
        explanation: "帰る termina en る, pero aquí es grupo 1: 帰ります.",
        relatedSectionIds: ["lesson-018b-structure", "lesson-018b-summary"],
      },
      {
        id: "q14",
        type: "fill-blank",
        prompt: {
          jp: ruby("[入|はい]る → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["入ります", "はいります"],
        placeholder: "こたえを かいてください",
        explanation: "入る se trabaja aquí como grupo 1: 入ります.",
        relatedSectionIds: ["lesson-018b-structure", "lesson-018b-summary"],
      },
      {
        id: "q15",
        type: "fill-blank",
        prompt: {
          jp: ruby("[知|し]る → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["知ります", "しります"],
        placeholder: "こたえを かいてください",
        explanation: "知る se trabaja aquí como grupo 1: 知ります.",
        relatedSectionIds: ["lesson-018b-structure", "lesson-018b-summary"],
      },
      {
        id: "q16",
        type: "fill-blank",
        prompt: {
          jp: ruby("[切|き]る → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["切ります", "きります"],
        placeholder: "こたえを かいてください",
        explanation: "切る se trabaja aquí como grupo 1: 切ります.",
        relatedSectionIds: ["lesson-018b-structure", "lesson-018b-summary"],
      },
      {
        id: "q17",
        type: "fill-blank",
        prompt: {
          jp: ruby("[要|い]る → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["要ります", "いります"],
        placeholder: "こたえを かいてください",
        explanation: "要る se trabaja aquí como grupo 1: 要ります.",
        relatedSectionIds: ["lesson-018b-structure", "lesson-018b-summary"],
      },
    ],
  },
};

export default lesson018b;
