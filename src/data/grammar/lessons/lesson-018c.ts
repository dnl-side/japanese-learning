//src/data/grammar/lessons/lesson-018c.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson018c: GrammarLesson = {
  id: "lesson-018c",
  slug: "verbos-grupo-3-irregulares",
  order: 23,
  level: "N5",
  status: "ready",
  title: "Verbos III",
  jpTitle: "どうし・グループ3",
  shortTitle: "Grupo 3",
  description:
    "Cómo trabajar los verbos irregulares する y 来る, fijar con mucho cuidado sus transformaciones, y entender con claridad por qué patrones como 日本語を勉強する y 日本語の勉強をする no significan exactamente lo mismo en estructura aunque sean cercanos en sentido.",
  estimatedMinutes: 72,
  categoryTags: ["fundamentos", "verbos", "grupo 3", "irregulares", "suru", "kuru", "lectura"],
  grammarTags: [
    "grupo 3",
    "irregular",
    "する",
    "します",
    "来る",
    "来ます",
    "勉強する",
    "勉強をする",
    "洗濯する",
    "洗濯をする",
  ],
  searchTerms: [
    "verbos irregulares japones",
    "suru kuru masu form",
    "group 3 japanese verbs",
    "benkyou suru benkyou o suru",
    "sentaku suru sentaku o suru",
    "irregular japanese verbs n5",
  ],
  relatedLessonSlugs: [
    "verbos-introduccion-grupo-2-ichidan",
    "verbos-grupo-1-godan",
    "tiempo-basico-pasado-desu-masu",
  ],
  relatedVocabularyTags: ["verbos", "estudio", "rutina", "acciones", "base"],
  objectives: [
    "Fijar con seguridad las transformaciones する → します y 来る → 来ます.",
    "Reconocer que el grupo 3 no sigue la lógica mecánica del grupo 2 ni del grupo 1.",
    "Trabajar con más fuerza la familia de verbos con する para que no se convierta en una zona de pánico.",
    "Distinguir la diferencia estructural entre Aを勉強する y Aの勉強をする.",
    "Distinguir la diferencia estructural entre Aを洗濯する y Aの洗濯をする.",
    "Cerrar el bloque de grupos verbales antes de entrar a las unidades de uso fuerte con partículas.",
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
      id: "lesson-018c-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "Después del grupo 2 y del grupo 1, ahora toca cerrar la clasificación básica con el grupo 3. Aquí el bloque es pequeño, pero no por eso se puede mirar rápido: する y 来る son muy importantes, y especialmente する necesita bastante cuidado porque muchos alumnos se confunden cuando cambia la posición de を en estructuras que parecen muy parecidas.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Fijaremos primero las dos transformaciones clave:",
              jp: ruby("する → します / [来|く]る → [来|き]ます。"),
            },
            {
              es: "Después pondremos mucho énfasis en contrastes como:",
              jp: ruby("[日本語|にほんご]を[勉強|べんきょう]する / [日本語|にほんご]の[勉強|べんきょう]をする。"),
            },
            {
              es: "Y también en pares como:",
              jp: ruby("シャツを[洗濯|せんたく]する / シャツの[洗濯|せんたく]をする。"),
            },
          ],
        },
      ],
    },
    {
      id: "lesson-018c-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "El grupo 3 es pequeño, pero no se puede tratar como si fuera automático",
          content:
            "Aquí el número de verbos base es pequeño, pero su importancia es enorme. する y 来る aparecen muy pronto y muy seguido. Por eso conviene fijarlos con mucha claridad antes de mezclarlos con más usos de partículas y con verbos de movimiento.",
          bullets: [
            {
              jp: ruby("する → します"),
              es: "irregular básico 1",
            },
            {
              jp: ruby("[来|く]る → [来|き]ます"),
              es: "irregular básico 2",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Con する, la posición de を cambia el análisis de la frase",
          content:
            "Aquí está uno de los puntos que más confusión provoca. En 日本語を勉強する, 日本語 queda marcado como objeto directo de la acción. En 日本語の勉強をする, en cambio, 勉強 se vuelve el núcleo nominal y 日本語 lo modifica con の. Después, todo el grupo 日本語の勉強 toma を antes de する.",
          bullets: [
            {
              jp: ruby("[日本語|にほんご]を[勉強|べんきょう]する"),
              es: "日本語 toma を directamente antes del bloque verbal",
            },
            {
              jp: ruby("[日本語|にほんご]の[勉強|べんきょう]をする"),
              es: "el grupo completo 日本語の勉強 toma を",
            },
            {
              jp: ruby("を が [日本語|にほんご] から [勉強|べんきょう] に うつる わけではない"),
              es: "la función sintáctica cambia porque la estructura entera cambió",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Lo mismo pasa con 洗濯する",
          content:
            "Este patrón se entiende mejor cuando lo ves repetirse con otro verbo en する. En シャツを洗濯する, シャツ es el objeto directo. En シャツの洗濯をする, 洗濯 se vuelve un nombre y シャツ lo modifica con の antes de que el grupo entero tome を.",
          bullets: [
            {
              jp: ruby("シャツを[洗濯|せんたく]する"),
              es: "シャツ queda como objeto directo",
            },
            {
              jp: ruby("シャツの[洗濯|せんたく]をする"),
              es: "洗濯 pasa a ser núcleo nominal dentro del grupo completo",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "No hace falta forzar una teoría más grande todavía",
          content:
            "En esta etapa no hace falta abrir todos los análisis posibles del japonés. Lo que sí conviene dejar muy firme es que する forma una familia enorme, que puede unirse a muchos nombres, y que el movimiento de を cambia la estructura aunque el sentido global siga cercano.",
          bullets: [
            {
              jp: ruby("[勉強|べんきょう]する / [練習|れんしゅう]する / [掃除|そうじ]する / [料理|りょうり]する / [電話|でんわ]する"),
              es: "familia verbal muy productiva",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-018c-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-018c-1",
              label: "Irregular する",
              pattern: ruby("する → します"),
              meaning: "La forma en ます no sigue la ruta del grupo 2 ni la del grupo 1.",
              translation:
                "Aquí no quitamos un る como en grupo 2 ni subimos un morfema a la fila de い como en grupo 1. Simplemente fijamos la transformación irregular completa.",
              notes: [
                "Conviene memorizar esta pareja como base absoluta del grupo 3.",
              ],
            },
            {
              id: "pattern-018c-2",
              label: "Irregular 来る",
              pattern: ruby("[来|く]る → [来|き]ます"),
              meaning: "Otra transformación irregular que debes fijar como bloque.",
              translation:
                "Aquí también la forma cambia de manera especial. La lectura del kanji ayuda a recordar que no basta con seguir una regla mecánica de los grupos anteriores.",
              notes: [
                "El uso fuerte de movimiento quedará para la unidad 20.",
              ],
            },
            {
              id: "pattern-018c-3",
              label: "AをNする",
              pattern: ruby("A を Nする"),
              meaning: "Realizas N sobre A.",
              translation:
                "Aquí A queda como objeto directo. El bloque con する funciona verbalmente desde el final.",
              structure: [
                {
                  slot: "A",
                  value: "objeto directo",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[日本語|にほんご] / シャツ。"),
                  },
                },
                {
                  slot: "Nする",
                  value: "nombre + する",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[勉強|べんきょう]する / [洗濯|せんたく]する。"),
                  },
                },
              ],
              notes: [
                "Aquí を cae sobre A.",
              ],
            },
            {
              id: "pattern-018c-4",
              label: "AのNをする",
              pattern: ruby("A の N をする"),
              meaning: "Haces el N de A.",
              translation:
                "Aquí N se comporta como núcleo nominal. A lo modifica con の y después el grupo completo AのN toma を antes de する.",
              structure: [
                {
                  slot: "A の N",
                  value: "grupo nominal",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[日本語|にほんご]の[勉強|べんきょう] / シャツの[洗濯|せんたく]。"),
                  },
                },
                {
                  slot: { jp: ruby("を") },
                  value: "objeto del grupo entero",
                  note: "Aquí を cae sobre todo el grupo nominal, no solo sobre A.",
                },
                {
                  slot: { jp: ruby("する") },
                  value: "verbo final",
                  note: "Cierra la acción verbal del patrón.",
                },
              ],
              notes: [
                "Esta diferencia de estructura merece mucha atención porque genera confusión muy pronto.",
              ],
            },
          ],
        },
        {
          type: "table",
          title: "Grupo 3: transformaciones base",
          description:
            "Aquí no conviene buscar una mecánica idéntica a los otros grupos. Las dos formas base deben fijarse con mucha claridad desde el principio.",
          columns: [
            { key: "dictionary", label: "Forma diccionario", width: "35%", align: "center" },
            { key: "masu", label: "Forma ます", width: "35%", align: "center" },
            { key: "note", label: "Observación", width: "30%" },
          ],
          rows: [
            {
              id: "irr-suru",
              cells: {
                dictionary: { jp: ruby("する") },
                masu: { jp: ruby("します") },
                note: "irregular básico",
              },
            },
            {
              id: "irr-kuru",
              cells: {
                dictionary: { jp: ruby("[来|く]る") },
                masu: { jp: ruby("[来|き]ます") },
                note: "irregular básico",
              },
            },
          ],
          zebra: true,
        },
        {
          type: "table",
          title: "Dos estructuras que se parecen, pero no son la misma",
          description:
            "Aquí el objetivo no es solo traducir, sino ver qué bloque está tomando を en cada patrón.",
          columns: [
            { key: "pattern", label: "Patrón", width: "34%" },
            { key: "analysis", label: "Qué pasa con を", width: "32%" },
            { key: "masu", label: "Forma ます", width: "34%" },
          ],
          rows: [
            {
              id: "study-direct",
              cells: {
                pattern: { jp: ruby("[日本語|にほんご]を[勉強|べんきょう]する") },
                analysis: "を cae sobre 日本語",
                masu: { jp: ruby("[日本語|にほんご]を[勉強|べんきょう]します") },
              },
            },
            {
              id: "study-nominal",
              cells: {
                pattern: { jp: ruby("[日本語|にほんご]の[勉強|べんきょう]をする") },
                analysis: "を cae sobre 日本語の勉強",
                masu: { jp: ruby("[日本語|にほんご]の[勉強|べんきょう]をします") },
              },
            },
            {
              id: "laundry-direct",
              cells: {
                pattern: { jp: ruby("シャツを[洗濯|せんたく]する") },
                analysis: "を cae sobre シャツ",
                masu: { jp: ruby("シャツを[洗濯|せんたく]します") },
              },
            },
            {
              id: "laundry-nominal",
              cells: {
                pattern: { jp: ruby("シャツの[洗濯|せんたく]をする") },
                analysis: "を cae sobre シャツの洗濯",
                masu: { jp: ruby("シャツの[洗濯|せんたく]をします") },
              },
            },
          ],
          zebra: true,
        },
      ],
    },
    {
      id: "lesson-018c-vocabulary",
      kind: "vocabulary",
      title: "Verbos y familias útiles del grupo 3",
      description:
        "Aquí reunimos el núcleo pequeño pero muy potente del grupo 3, con varias familias frecuentes en する.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 4,
          items: [
            { id: "vocab-018c-suru", jp: ruby("する"), reading: "する", meaning: "hacer", tags: ["verbo", "grupo 3"] },
            { id: "vocab-018c-kuru", jp: ruby("[来|く]る"), reading: "くる", meaning: "venir", tags: ["verbo", "grupo 3"] },
            { id: "vocab-018c-benkyou", jp: ruby("[勉強|べんきょう]する"), reading: "べんきょうする", meaning: "estudiar", tags: ["verbo", "grupo 3"] },
            { id: "vocab-018c-renshuu", jp: ruby("[練習|れんしゅう]する"), reading: "れんしゅうする", meaning: "practicar", tags: ["verbo", "grupo 3"] },

            { id: "vocab-018c-souji", jp: ruby("[掃除|そうじ]する"), reading: "そうじする", meaning: "limpiar", tags: ["verbo", "grupo 3"] },
            { id: "vocab-018c-sentaku", jp: ruby("[洗濯|せんたく]する"), reading: "せんたくする", meaning: "lavar ropa / hacer lavado", tags: ["verbo", "grupo 3"] },
            { id: "vocab-018c-ryouri", jp: ruby("[料理|りょうり]する"), reading: "りょうりする", meaning: "cocinar", tags: ["verbo", "grupo 3"] },
            { id: "vocab-018c-denwa", jp: ruby("[電話|でんわ]する"), reading: "でんわする", meaning: "llamar por teléfono", tags: ["verbo", "grupo 3"] },

            { id: "vocab-018c-shitsumon", jp: ruby("[質問|しつもん]する"), reading: "しつもんする", meaning: "hacer una pregunta", tags: ["verbo", "grupo 3"] },
            { id: "vocab-018c-copy", jp: [{ text: "コピーする" }], reading: "こぴーする", meaning: "copiar / sacar una copia", tags: ["verbo", "grupo 3"] },
            { id: "vocab-018c-kenkyuu", jp: ruby("[研究|けんきゅう]する"), reading: "けんきゅうする", meaning: "investigar", tags: ["verbo", "grupo 3"] },
            { id: "vocab-018c-yoyaku", jp: ruby("[予約|よやく]する"), reading: "よやくする", meaning: "reservar", tags: ["verbo", "grupo 3"] },
          ],
        },
      ],
    },
    {
      id: "lesson-018c-examples",
      kind: "examples",
      title: "Ejemplos guiados",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "ex-018c-1",
              jp: ruby("[日本語|にほんご]を[勉強|べんきょう]します。"),
              es: "Estudio japonés.",
              notes: [
                {
                  es: "Aquí を cae directamente sobre 日本語.",
                },
              ],
            },
            {
              id: "ex-018c-2",
              jp: ruby("[日本語|にほんご]の[勉強|べんきょう]をします。"),
              es: "Hago estudio de japonés / hago el estudio de japonés.",
              notes: [
                {
                  es: "Aquí を cae sobre el grupo completo 日本語の勉強.",
                },
              ],
            },
            {
              id: "ex-018c-3",
              jp: ruby("シャツを[洗濯|せんたく]します。"),
              es: "Lavo la camisa.",
            },
            {
              id: "ex-018c-4",
              jp: ruby("シャツの[洗濯|せんたく]をします。"),
              es: "Hago el lavado de la camisa.",
            },
            {
              id: "ex-018c-5",
              jp: ruby("[毎日|まいにち]、[練習|れんしゅう]します。"),
              es: "Practico todos los días.",
            },
            {
              id: "ex-018c-6",
              jp: ruby("[土曜日|どようび]、[掃除|そうじ]します。"),
              es: "Limpio el sábado.",
            },
            {
              id: "ex-018c-7",
              jp: ruby("[今日|きょう]、[電話|でんわ]します。"),
              es: "Hoy llamo por teléfono.",
            },
            {
              id: "ex-018c-8",
              jp: ruby("[先生|せんせい]が[来|き]ます。"),
              es: "El profesor viene.",
              notes: [
                {
                  es: "Aquí solo fijamos la transformación. El bloque fuerte de movimiento vendrá más adelante.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-018c-contrast",
      kind: "contrast",
      title: "Contrastes clave",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-018c-1",
              label: "Irregular vs grupos anteriores",
              correct: {
                jp: ruby("する → します / [来|く]る → [来|き]ます"),
                es: "Aquí no basta con aplicar la mecánica del grupo 2 o del grupo 1.",
              },
              explanation:
                "El grupo 3 se fija como irregular. Conviene memorizar estas parejas como base antes de complicar más el sistema.",
            },
            {
              id: "contrast-018c-2",
              label: "Aを勉強する vs Aの勉強をする",
              correct: {
                jp: ruby("[日本語|にほんご]を[勉強|べんきょう]する ↔ [日本語|にほんご]の[勉強|べんきょう]をする"),
                es: "El sentido global puede acercarse, pero la estructura cambia.",
              },
              explanation:
                "En la primera, を cae sobre 日本語. En la segunda, を cae sobre el grupo 日本語の勉強.",
            },
            {
              id: "contrast-018c-3",
              label: "Mismo fenómeno con 洗濯",
              correct: {
                jp: ruby("シャツを[洗濯|せんたく]する ↔ シャツの[洗濯|せんたく]をする"),
                es: "La posición de を vuelve a cambiar porque cambió el análisis de la frase.",
              },
              explanation:
                "Este segundo par sirve para confirmar que no se trata de un caso aislado de 勉強する.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-018c-practice",
      kind: "practice",
      title: "Práctica guiada antes del quiz",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Fija primero como bloque absoluto:",
              jp: ruby("する → します / [来|く]る → [来|き]ます。"),
            },
            {
              es: "Después haz una ronda solo con familias en",
              jp: ruby("する"),
              note: "para que la irregularidad del grupo no se mezcle con la del vocabulario.",
            },
            {
              es: "Compara siempre en pares estos dos patrones:",
              jp: ruby("[日本語|にほんご]を[勉強|べんきょう]する ↔ [日本語|にほんご]の[勉強|べんきょう]をする。"),
            },
            {
              es: "Repite el mismo análisis con otro verbo en",
              jp: ruby("する"),
              note: "por ejemplo con 洗濯 para confirmar que el cambio de を no es casual.",
            },
          ],
        },
        {
          type: "resource-links",
          title: "Apoyo complementario",
          description:
            "Esta lesson cierra la clasificación básica. Para ver más familias con する y el bloque específico de irregulares, usa también la sección correspondiente de la app.",
          items: [
            {
              id: "link-018c-irregulars",
              label: "Ir al grupo 3 (irregulares)",
              href: "/gramatica/verbos/grupos/irregulares",
              jp: ruby("グループ3・[不規則動詞|ふきそくどうし]"),
              description: "Profundiza en する, 来る y sus familias más frecuentes.",
              tone: "accent",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-018c-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Ya fijé con claridad las dos transformaciones básicas del grupo 3.",
            },
            {
              es: "No intento aplicar mecánicamente las reglas del grupo 2 o del grupo 1 a",
              jp: ruby("する / [来|く]る"),
              note: "porque aquí la ruta es irregular.",
            },
            {
              es: "Entiendo por qué",
              jp: ruby("[日本語|にほんご]を[勉強|べんきょう]する"),
              note: "y",
            },
            {
              es: "no se analizan igual que",
              jp: ruby("[日本語|にほんご]の[勉強|べんきょう]をする"),
              note: "aunque el sentido general se acerque.",
            },
            {
              es: "Estoy listo para pasar al uso fuerte de verbos con partículas en las unidades siguientes.",
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-018c-quiz",
    title: "Quiz — Grupo 3",
    description:
      "Fija las dos transformaciones irregulares y comprueba si ya distingues bien las estructuras con する donde cambia la posición de を.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "fill-blank",
        prompt: {
          jp: ruby("する → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["します"],
        placeholder: "こたえを かいてください",
        explanation: "する pasa a します. Aquí conviene memorizar la pareja completa.",
        relatedSectionIds: ["lesson-018c-structure", "lesson-018c-summary"],
      },
      {
        id: "q2",
        type: "fill-blank",
        prompt: {
          jp: ruby("[来|く]る → ___"),
          note: "ますけい に してください。",
        },
        acceptedAnswers: ["来ます", "きます"],
        placeholder: "こたえを かいてください",
        explanation: "来る pasa a 来ます. También aquí conviene fijar la pareja completa.",
        relatedSectionIds: ["lesson-018c-structure", "lesson-018c-summary"],
      },
      {
        id: "q3",
        type: "order-sentence",
        prompt: {
          jp: ruby("ただしい ぶんを つくってください。"),
          note: "れんしゅう の ぶん です。",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[日本語|にほんご]") }, value: "日本語" },
          { id: "t2", label: { jp: ruby("を") }, value: "を" },
          { id: "t3", label: { jp: ruby("[練習|れんしゅう]") }, value: "練習" },
          { id: "t4", label: { jp: ruby("します。") }, value: "します。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("[日本語|にほんご]を[練習|れんしゅう]します。") },
        explanation:
          "Aquí 練習する pasa a 練習します, y を marca lo que se practica.",
        relatedSectionIds: ["lesson-018c-structure", "lesson-018c-vocabulary"],
      },
      {
        id: "q4",
        type: "order-sentence",
        prompt: {
          jp: ruby("ただしい ぶんを つくってください。"),
          note: "りょうり の ぶん です。",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[母|はは]") }, value: "母" },
          { id: "t2", label: { jp: ruby("は") }, value: "は" },
          { id: "t3", label: { jp: ruby("[料理|りょうり]") }, value: "料理" },
          { id: "t4", label: { jp: ruby("します。") }, value: "します。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("[母|はは]は[料理|りょうり]します。") },
        explanation:
          "Aquí 料理する pasa a 料理します. La oración queda simple y natural para este nivel.",
        relatedSectionIds: ["lesson-018c-structure", "lesson-018c-vocabulary"],
      },
      {
        id: "q5",
        type: "single-choice",
        prompt: {
          jp: ruby("つぎの うち、グループ3 の へんか として ただしい ものは どれですか。"),
        },
        choices: [
          { id: "a", label: { jp: ruby("[勉強|べんきょう]する → [勉強|べんきょう]します") } },
          { id: "b", label: { jp: ruby("[勉強|べんきょう]する → [勉強|べんきょう]べます") } },
          { id: "c", label: { jp: ruby("[勉強|べんきょう]する → [勉強|べんきょう]ります") } },
          { id: "d", label: { jp: ruby("[勉強|べんきょう]する → [勉強|べんきょう]きます") } },
        ],
        correctChoiceId: "a",
        explanation: "Los nombres que forman verbo con する pasan a します: 勉強する → 勉強します.",
        relatedSectionIds: ["lesson-018c-vocabulary", "lesson-018c-summary"],
      },
      {
        id: "q6",
        type: "order-sentence",
        prompt: {
          jp: ruby("ただしい じゅんばんに してください。"),
          note: "「[日本語|にほんご]を[勉強|べんきょう]します。」",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[日本語|にほんご]") }, value: "日本語" },
          { id: "t2", label: { jp: ruby("を") }, value: "を" },
          { id: "t3", label: { jp: ruby("[勉強|べんきょう]します。") }, value: "勉強します。" },
        ],
        correctOrder: ["t1", "t2", "t3"],
        answerLabel: { jp: ruby("[日本語|にほんご]を[勉強|べんきょう]します。") },
        explanation: "Aquí を cae directamente sobre 日本語 y el verbo final es 勉強します.",
        relatedSectionIds: ["lesson-018c-structure", "lesson-018c-summary"],
      },
      {
        id: "q7",
        type: "order-sentence",
        prompt: {
          jp: ruby("ただしい じゅんばんに してください。"),
          note: "「シャツの[洗濯|せんたく]をします。」",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("シャツ") }, value: "シャツ" },
          { id: "t2", label: { jp: ruby("の") }, value: "の" },
          { id: "t3", label: { jp: ruby("[洗濯|せんたく]") }, value: "洗濯" },
          { id: "t4", label: { jp: ruby("を") }, value: "を" },
          { id: "t5", label: { jp: ruby("します。") }, value: "します。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4", "t5"],
        answerLabel: { jp: ruby("シャツの[洗濯|せんたく]をします。") },
        explanation: "Aquí primero formas el grupo nominal シャツの洗濯, luego ese grupo entero toma を antes de します.",
        relatedSectionIds: ["lesson-018c-structure", "lesson-018c-summary"],
      },
      {
        id: "q8",
        type: "single-choice",
        prompt: {
          jp: ruby("[先生|せんせい]が___。"),
          note: "[来|く]る の ますけい を いれてください。",
        },
        choices: [
          { id: "a", label: { jp: ruby("[来|く]ます。") } },
          { id: "b", label: { jp: ruby("[来|き]ます。") } },
          { id: "c", label: { jp: ruby("[来|く]ります。") } },
          { id: "d", label: { jp: ruby("[来|き]ります。") } },
        ],
        correctChoiceId: "b",
        explanation: "来る pasa a 来ます. La lectura base de trabajo aquí es くる → きます.",
        relatedSectionIds: ["lesson-018c-structure", "lesson-018c-summary"],
      },
    ],
  },
};

export default lesson018c;
