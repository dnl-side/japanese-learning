//src/data/grammar/lessons/lesson-007.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson007: GrammarLesson = {
  id: "lesson-007",
  slug: "pronombres-demostrativos-kore-sore-are",
  order: 10,
  level: "N5",
  status: "ready",
  title: "Pronombres demostrativos",
  jpTitle: "これ・それ・あれ・何",
  shortTitle: "Esto / eso / aquello",
  description:
    "Cómo usar これ・それ・あれ como pronombres demostrativos, entender su lógica de distancia, ver cómo ocupan el lugar del sustantivo dentro de la oración y empezar a preguntar con なんですか.",
  estimatedMinutes: 42,
  categoryTags: ["fundamentos", "pronombres", "demostrativos", "preguntas", "lectura"],
  grammarTags: ["これ", "それ", "あれ", "なに", "これは〜です", "それは〜です", "あれは〜です"],
  searchTerms: [
    "kore sore are",
    "pronombres demostrativos",
    "esto eso aquello japones",
    "kore wa nan desu ka",
    "demostrativos pronombre japones",
    "nani desu ka",
  ],
  relatedLessonSlugs: [
    "wa-desu-basico",
    "preguntas-basicas-desu-ka",
    "matome-1-5-presentacion-integrada",
  ],
  relatedVocabularyTags: ["objetos", "aula", "lugares", "preguntas", "base"],
  objectives: [
    "Entender la lógica de distancia de これ・それ・あれ.",
    "Reconocer que funcionan como pronombres y por eso reemplazan un sustantivo.",
    "Usarlos tanto como tema al inicio de la oración como identificación al final.",
    "Preguntar por objetos o cosas con これはなんですか / それはなんですか / あれはなんですか.",
    "Empezar a manejar el cambio natural de perspectiva entre interlocutores: これ ↔ それ, y あれ ↔ あれ.",
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
      id: "lesson-007-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "Hasta ahora ya viste pronombres como 私 y también trabajaste la estructura básica con は y です. En esta unidad darás un paso muy útil: aprender a señalar cosas sin repetir siempre el nombre del objeto. Para eso entran これ・それ・あれ, que funcionan como pronombres demostrativos.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Aprenderás la lógica de distancia entre:",
              jp: ruby("これ / それ / あれ。"),
            },
            {
              es: "Verás por qué estos bloques pueden ocupar el lugar de un sustantivo en oraciones como:",
              jp: ruby("これは[本|ほん]です。 / [本|ほん]はそれです。"),
            },
            {
              es: "Y empezarás a preguntar con",
              jp: ruby("[何|なに]"),
              note: "para decir cosas como これはなんですか。",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-007-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "La distancia aquí no es solo física",
          content:
            "En esta unidad no basta con pensar cerca o lejos como si fuera un mapa rígido. También conviene imaginar el espacio personal de cada interlocutor. Algo que yo tengo conmigo o en mi área personal tiende a sentirse como これ. Algo que está contigo o en tu espacio personal tiende a sentirse como それ. Y algo que está fuera del alcance de ambos se siente como あれ.",
          bullets: [
            {
              jp: ruby("これ"),
              es: "cerca de mí / en mi espacio personal",
            },
            {
              jp: ruby("それ"),
              es: "cerca de ti / en tu espacio personal",
            },
            {
              jp: ruby("あれ"),
              es: "lejos de los dos",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Estos bloques funcionan como pronombres",
          content:
            "Un pronombre reemplaza un nombre. Ya viste algo parecido con 私, que puede ocupar el lugar del nombre de una persona. Aquí pasa algo parecido con objetos o cosas: これ no dice el nombre exacto, pero lo reemplaza. Por eso puede ocupar el espacio donde normalmente iría un sustantivo, y a su lado aparece una partícula o el cierre de la oración.",
          bullets: [
            {
                jp: ruby("[私|わたし]は[学生|がくせい]です。"),
                es: "私 es un pronombre: reemplaza el nombre del hablante y entra en la oración como tema.",
            },
            {
                jp: ruby("これは[本|ほん]です。"),
                es: "これ también es un pronombre. Aquí ocupa el lugar del sustantivo y queda como tema con は. La idea es: “esto” se identifica como libro.",
            },
            {
                jp: ruby("[本|ほん]はそれです。"),
                es: "En esta vez el sustantivo va como tema y それ queda al final como identificación. Así se ve que el pronombre también puede ocupar la parte final de la oración.",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "La perspectiva cambia entre interlocutores",
          content:
            "Cuando una conversación tiene dos personas, これ y それ suelen cambiar según quién habla. Si yo pregunto por algo que tengo conmigo usando これ, tu respuesta más natural muchas veces será con それ, porque desde tu lado ese objeto está de mi lado. En cambio, si ambos vemos algo lejano, あれ suele mantenerse como あれ para los dos.",
          bullets: [
            {
                jp: ruby("A: これは[何|なん]ですか。 B: それは[本|ほん]です。"),
                es: "A usa これ y B responde con それ desde el cambio natural de perspectiva",
            },
            {
                jp: ruby("A: それは[何|なん]ですか。 B: これはペンです。"),
                es: "A usa それ y B responde con これ desde su propio lado",
            },
            {
                jp: ruby("A: あれは[何|なん]ですか。 B: あれは[病院|びょういん]です。"),
                es: "cuando el referente está lejos de ambos, あれ suele mantenerse en ambos lados",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-007-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-007-1",
              label: "Pronombre como tema",
              pattern: ruby("これは A です。"),
              meaning: "Esto es A.",
              translation:
                "Aquí これ entra al inicio de la oración como tema, exactamente en el lugar donde antes podías poner un sustantivo o un pronombre como 私.",
              structure: [
                {
                  slot: { jp: ruby("これ") },
                  value: "esto",
                  note: "Pronombre demostrativo cerca de mí o de mi espacio inmediato.",
                },
                {
                  slot: { jp: ruby("は") },
                  value: "partícula de tema",
                  note: "Marca de qué estamos hablando, igual que en lecciones anteriores.",
                },
                {
                  slot: "A",
                  value: "identificación del objeto",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[本|ほん] / ペン / [机|つくえ] / スマホ。"),
                  },
                },
                {
                  slot: { jp: ruby("です") },
                  value: "cierre cortés",
                  note: "Misma lógica base que ya trabajaste con は + です.",
                },
              ],
              notes: [
                "Aquí これ ya cumple el papel de “esto”, así que entra solo en la oración y funciona como tema con は.",
                "Al ser pronombre, no acompaña directamente a un sustantivo. Esa función aparecerá después con この・その・あの.",
                ],
            },
            {
              id: "pattern-007-2",
              label: "Pronombre al final como identificación",
              pattern: ruby("A はそれです。"),
              meaning: "A es eso.",
              translation:
                "Aquí el pronombre no entra como tema inicial, sino al final de la oración, ocupando la parte que identifica qué es el tema.",

                structure: [
                {
                    slot: "A",
                    value: "objeto identificable",
                    note: {
                    es: "Puede ser algo como:",
                    jp: ruby("[鉛筆|えんぴつ] / ラジオ / テレビ / [木|き] / [池|いけ]。"),
                    },
                },
                {
                    slot: { jp: ruby("は") },
                    value: "tema",
                    note: "Mantiene la oración anclada al elemento del que estás hablando.",
                },
                {
                    slot: { jp: ruby("それ") },
                    value: "eso",
                    note: "Pronombre demostrativo cerca del interlocutor o de su espacio.",
                },
                {
                    slot: { jp: ruby("です") },
                    value: "cierre cortés",
                    note: "Cierra la identificación igual que en las lecciones base.",
                },
                ],

                notes: [
                "Aquí el tema debe ser algo que puedas identificar como objeto o lugar dentro de la escena.",
                "Esta dirección de la oración ayuda a entender que el pronombre también puede ocupar la parte final de la identificación, no solo la posición inicial de tema.",
                "Es útil para señalar, confirmar o distinguir cosas visibles sin repetir siempre el mismo sustantivo.",
                ],
            },
            {
              id: "pattern-007-3",
              label: "Pregunta con 何",
              pattern: ruby("これは[何|なん]ですか。"),
              meaning: "¿Qué es esto?",
              translation:
                "Aquí 何 entra como palabra interrogativa para preguntar por la identidad del objeto o cosa señalada.",
              structure: [
                {
                  slot: { jp: ruby("これ") },
                  value: "esto",
                  note: "El objeto señalado desde mi lado.",
                },
                {
                  slot: { jp: ruby("は") },
                  value: "tema",
                  note: "Misma función de siempre.",
                },
                {
                  slot: { jp: ruby("[何|なん]") },
                  value: "qué",
                  note: "Pregunta por la identidad del objeto. En esta etapa la fijamos como なに dentro de este patrón.",
                },
                {
                  slot: { jp: ruby("ですか") },
                  value: "cierre de pregunta",
                  note: "La misma lógica de pregunta básica que ya viste en 003.",
                },
              ],
              notes: [
                "Desde esta unidad, 何 se vuelve una palabra muy importante que volverá a aparecer más adelante en muchos otros patrones.",
              ],
            },
            {
              id: "pattern-007-4",
              label: "Cambio natural de perspectiva",
              pattern: ruby("A: これは[何|なん]ですか。 B: それは[鉛筆|えんぴつ]です。"),
              meaning: "A: ¿Qué es esto? B: Eso es un lápiz.",
              translation:
                "La misma cosa puede verse como これ desde un lado y como それ desde el otro. Este cambio es una de las ideas más importantes de la unidad.",
              structure: [
                {
                  slot: { jp: ruby("これ") },
                  value: "mi lado",
                  note: "El hablante A siente el objeto cerca de sí.",
                },
                {
                  slot: { jp: ruby("それ") },
                  value: "tu lado / ese lado",
                  note: "El hablante B responde desde su propia perspectiva.",
                },
              ],
              notes: [
                "No es una regla matemática absoluta, pero sí una tendencia muy natural en conversaciones de este tipo.",
                "Si ambos miran algo lejos, あれ suele mantenerse como あれ para los dos.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-007-vocabulary",
      kind: "vocabulary",
      title: "Vocabulario útil para señalar y preguntar",
      description:
        "En esta unidad conviene tener más repertorio visible. El foco sigue siendo これ・それ・あれ, pero mientras más objetos y lugares simples tengas en la cabeza, más natural se vuelve el quiz y la lectura.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 4,
          items: [
            { id: "vocab-007-book", jp: ruby("[本|ほん]"), reading: "ほん", meaning: "libro", tags: ["objeto", "base"] },
            { id: "vocab-007-pen", jp: [{ text: "ペン" }], reading: "ぺん", meaning: "bolígrafo / lápiz pasta", tags: ["objeto", "base"] },
            { id: "vocab-007-bag", jp: [{ text: "かばん" }], reading: "かばん", meaning: "bolso / cartera / mochila", tags: ["objeto", "base"] },
            { id: "vocab-007-water", jp: ruby("[水|みず]"), reading: "みず", meaning: "agua", tags: ["objeto", "base"] },
            { id: "vocab-007-chair", jp: [{ text: "いす" }], reading: "いす", meaning: "silla", tags: ["objeto"] },
            { id: "vocab-007-key", jp: [{ text: "かぎ" }], reading: "かぎ", meaning: "llave", tags: ["objeto"] },
            { id: "vocab-007-notebook", jp: [{ text: "ノート" }], reading: "のーと", meaning: "cuaderno", tags: ["objeto"] },
            { id: "vocab-007-phone", jp: [{ text: "スマホ" }], reading: "すまほ", meaning: "smartphone", tags: ["objeto", "tecnologia"] },
            { id: "vocab-007-computer", jp: [{ text: "パソコン" }], reading: "ぱそこん", meaning: "computador", tags: ["objeto", "tecnologia"] },
            { id: "vocab-007-pencil", jp: ruby("[鉛筆|えんぴつ]"), reading: "えんぴつ", meaning: "lápiz", tags: ["objeto", "aula"] },
            { id: "vocab-007-radio", jp: [{ text: "ラジオ" }], reading: "らじお", meaning: "radio", tags: ["objeto"] },
            { id: "vocab-007-tv", jp: [{ text: "テレビ" }], reading: "てれび", meaning: "televisión", tags: ["objeto"] },
            { id: "vocab-007-calendar", jp: [{ text: "カレンダー" }], reading: "かれんだー", meaning: "calendario", tags: ["objeto"] },
            { id: "vocab-007-desk", jp: ruby("[机|つくえ]"), reading: "つくえ", meaning: "escritorio / mesa", tags: ["objeto", "aula"] },
            { id: "vocab-007-tree", jp: ruby("[木|き]"), reading: "き", meaning: "árbol", tags: ["naturaleza"] },
            { id: "vocab-007-mountain", jp: ruby("[山|やま]"), reading: "やま", meaning: "montaña", tags: ["naturaleza"] },
            { id: "vocab-007-pond", jp: ruby("[池|いけ]"), reading: "いけ", meaning: "estanque", tags: ["naturaleza"] },
            { id: "vocab-007-apple", jp: [{ text: "りんご" }], reading: "りんご", meaning: "manzana", tags: ["objeto", "comida"] },
            { id: "vocab-007-cup", jp: [{ text: "コップ" }], reading: "こっぷ", meaning: "vaso", tags: ["objeto"] },
            { id: "vocab-007-hospital", jp: ruby("[病院|びょういん]"), reading: "びょういん", meaning: "hospital", tags: ["lugar"] },
            { id: "vocab-007-post", jp: ruby("[郵便局|ゆうびんきょく]"), reading: "ゆうびんきょく", meaning: "correo / oficina de correos", tags: ["lugar"] },
            { id: "vocab-007-school", jp: ruby("[学校|がっこう]"), reading: "がっこう", meaning: "escuela", tags: ["lugar"] },
            { id: "vocab-007-station", jp: ruby("[駅|えき]"), reading: "えき", meaning: "estación", tags: ["lugar"] },
            { id: "vocab-007-library", jp: ruby("[図書館|としょかん]"), reading: "としょかん", meaning: "biblioteca", tags: ["lugar"] },
            ],
        },
      ],
    },
    {
      id: "lesson-007-examples",
      kind: "examples",
      title: "Ejemplos guiados",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "ex-007-1",
              jp: ruby("これは[本|ほん]です。"),
              es: "Esto es un libro.",
              breakdown: [
                { label: "これ", es: "esto; pronombre cerca de mí" },
                { label: "は", es: "tema" },
                { label: "本", es: "identificación del objeto" },
                { label: "です", es: "cierre cortés" },
              ],
              notes: [
                "Aquí el pronombre está al inicio como tema.",
              ],
            },
            {
            id: "ex-007-2",
            jp: ruby("[ペン|ぺん]はそれです。"),
            es: "El lápiz pasta es ese.",
            breakdown: [
                { label: "ペン", es: "el objeto del que hablamos" },
                { label: "それ", es: "pronombre cerca de ti o de tu lado" },
            ],
            notes: [
                "Aquí el pronombre aparece al final y ocupa la parte que identifica al objeto.",
            ],
            },
            {
              id: "ex-007-3",
              jp: ruby("A: これは[何|なん]ですか。 B: それは[鉛筆|えんぴつ]です。"),
              es: "A: ¿Qué es esto? B: Eso es un lápiz.",
              notes: [
                "La respuesta cambia naturalmente a それ por la diferencia de perspectiva entre los dos interlocutores.",
              ],
            },
            {
              id: "ex-007-4",
              jp: ruby("A: それは[何|なん]ですか。 B: これはスマホです。"),
              es: "A: ¿Qué es eso? B: Esto es un smartphone.",
              notes: [
                "Aquí pasa la inversión opuesta: desde el otro lado, el mismo objeto puede sentirse como これ.",
              ],
            },
            {
              id: "ex-007-5",
              jp: ruby("A: あれは[何|なん]ですか。 B: あれは[山|やま]です。"),
              es: "A: ¿Qué es aquello? B: Aquello es una montaña.",
              notes: [
                "Como el referente está lejos de ambos, あれ suele mantenerse en ambos lados del diálogo.",
              ],
            },
            {
              id: "ex-007-6",
              jp: ruby("カレンダーはあれです。"),
              es: "El calendario es aquel.",
              notes: [
                "Sirve para reforzar la segunda dirección de la oración: sustantivo + は + pronombre + です.",
              ],
            },
            {
              id: "ex-007-7",
              jp: ruby("これはテレビですか。 [いいえ]、[違|ちが]います。ラジオです。"),
              es: "¿Esto es una televisión? No, está equivocado. Es una radio.",
              notes: [
                "Aquí reciclas la lógica de preguntas y corrección que ya viste antes, pero con pronombres demostrativos.",
              ],
            },
            {
                id: "ex-007-8",
                jp: ruby("[かばん]はこれです。 [デスク]はそれです。"),
                es: "La cartera es esta. El escritorio es ese.",
                notes: [
                    "Sirve para contrastar dos referentes distintos usando これ y それ sin salir de la estructura básica de la unidad.",
                ],
            },
            {
              id: "ex-007-9",
              jp: ruby("あれは[山|やま]です。 あれは[池|いけ]ではありません。"),
              es: "Aquello es una montaña. Aquello no es un estanque.",
              notes: [
                "Útil para practicar lugares y cosas lejanas dentro de un paisaje.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-007-contrast",
      kind: "contrast",
      title: "Contrastes importantes",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-007-1",
              label: "Pronombre vs palabra acompañante",
              correct: {
                jp: ruby("これは[本|ほん]です。"),
                es: "Aquí これ funciona solo como pronombre.",
              },
              incorrect: {
                jp: ruby("これ[本|ほん]です。"),
                es: "No se pega directamente al sustantivo así.",
              },
              explanation:
                "Al ser pronombre, これ ya ocupa el lugar del sustantivo. Después de él viene una partícula o el cierre de la oración, no otro sustantivo pegado.",
            },
            {
              id: "contrast-007-2",
              label: "Tema inicial vs identificación final",
              correct: {
                jp: ruby("これは[机|つくえ]です。 / [机|つくえ]はそれです。"),
                es: "Las dos son posibles, pero la posición del pronombre cambia.",
              },
              explanation:
                "En la primera, el pronombre es el tema. En la segunda, el pronombre aparece al final como identificación. Entender ambas direcciones ayuda mucho a consolidar la unidad.",
            },
            {
              id: "contrast-007-3",
              label: "Cambio de perspectiva",
              correct: {
                jp: ruby("A: これは[何|なん]ですか。 B: それはノートです。"),
                es: "Respuesta natural desde el otro lado.",
              },
              incorrect: {
                jp: ruby("A: これは[何|なん]ですか。 B: これはノートです。"),
                es: "No siempre es imposible, pero muchas veces suena menos natural en este tipo de interacción.",
              },
              explanation:
                "Cuando la pregunta parte desde これ, es muy frecuente que la respuesta desde el otro interlocutor cambie a それ. No es una ley absoluta, pero sí una tendencia importante de esta unidad.",
            },
            {
              id: "contrast-007-4",
              label: "Lejos de ambos",
              correct: {
                jp: ruby("A: あれは[何|なん]ですか。 B: あれは[郵便局|ゆうびんきょく]です。"),
                es: "Aquí あれ se mantiene.",
              },
              explanation:
                "Si ambos comparten la idea de lejanía respecto del referente, あれ suele seguir siendo la opción natural para ambos.",
            },
          ],
        },
      ],
    },
    {
        id: "lesson-007-warning",
        kind: "warning",
        title: "En qué fijarte bien",
        blocks: [
            {
            type: "callout",
            tone: "warning",
            title: "No uses これ・それ・あれ solo por memoria: piensa en la distancia y en la perspectiva",
            content:
                "En esta unidad no basta con memorizar tres palabras. Lo importante es mirar desde qué lado se habla y dónde está el objeto. Si cambias de interlocutor, muchas veces cambia también la palabra natural.",
            bullets: [
                {
                jp: ruby("A: これは[何|なん]ですか。 B: それは[本|ほん]です。"),
                es: "si cambia la perspectiva, muchas veces これ pasa a それ",
                },
                {
                jp: ruby("A: それは[何|なん]ですか。 B: これは[鉛筆|えんぴつ]です。"),
                es: "desde el otro lado, それ muchas veces pasa a これ",
                },
                {
                jp: ruby("A: あれは[何|なん]ですか。 B: あれは[病院|びょういん]です。"),
                es: "si está lejos de ambos, あれ suele mantenerse",
                },
            ],
            },
        ],
    },
    {
        id: "lesson-007-practice",
        kind: "practice",
        title: "Práctica guiada antes del quiz",
        blocks: [
            {
            type: "bullet-list",
            items: [
                {
                es: "Señala objetos cercanos a ti y di en voz alta:",
                jp: ruby("これは[鉛筆|えんぴつ]です。 / これはスマホです。 / これは[水|みず]です。"),
                },
                {
                es: "Cambia la misma escena a la perspectiva del otro interlocutor:",
                jp: ruby("これは[何|なん]ですか。 → それはペンです。"),
                },
                {
                es: "Practica también la otra dirección de la oración:",
                jp: ruby("[鉛筆|えんぴつ]はこれです。 [ラジオ]はそれです。"),
                },
                {
                es: "Mira algo lejano y úsalo con",
                jp: ruby("あれ"),
                note: "para lugares o cosas que ambos ven lejos: 山, 病院, 郵便局, 学校...",
                },
                {
                es: "Escribe cuatro mini diálogos usando 何ですか y cambia la perspectiva de la respuesta cuando corresponda.",
                },
            ],
            },
        ],
    },
    {
      id: "lesson-007-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Entiendo la lógica de distancia entre",
              jp: ruby("これ / それ / あれ。"),
            },
            {
              es: "Sé que funcionan como pronombres y reemplazan un sustantivo.",
            },
            {
              es: "Puedo usarlos al inicio con",
              jp: ruby("これはAです。"),
              note: "y también al final con Aはそれです。",
            },
            {
              es: "Puedo preguntar con",
              jp: ruby("これは[何|なん]ですか。 / それは[何|なん]ですか。 / あれは[何|なん]ですか。"),
            },
            {
              es: "Empiezo a entender el cambio natural de perspectiva",
              jp: ruby("これ ↔ それ"),
              note: "y que あれ suele mantenerse cuando ambos comparten la lejanía.",
            },
          ],
        },
      ],
    },
  ],
    quiz: {
    id: "lesson-007-quiz",
    title: "Quiz — Pronombres demostrativos",
    description:
        "Repaso variado para comprobar si ya distingues distancia, perspectiva, función de pronombre, posición dentro de la oración y preguntas con 何.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
        {
        id: "q1",
        type: "single-choice",
        prompt: {
            es: "¿Cuál pronombre usas normalmente para algo que está conmigo o en mi espacio personal?",
        },
        choices: [
            { id: "a", label: { jp: ruby("これ") } },
            { id: "b", label: { jp: ruby("それ") } },
            { id: "c", label: { jp: ruby("あれ") } },
            { id: "d", label: { jp: ruby("何") } },
        ],
        correctChoiceId: "a",
        explanation:
            "En esta unidad, これ se fija como el pronombre para algo cercano a mí o a mi espacio personal.",
        relatedSectionIds: ["lesson-007-concept", "lesson-007-structure"],
        },
        {
        id: "q2",
        type: "single-choice",
        prompt: {
            es: "¿Cuál pronombre usas normalmente para algo que está contigo o en tu espacio personal?",
        },
        choices: [
            { id: "a", label: { jp: ruby("これ") } },
            { id: "b", label: { jp: ruby("それ") } },
            { id: "c", label: { jp: ruby("あれ") } },
            { id: "d", label: { jp: ruby("何") } },
        ],
        correctChoiceId: "b",
        explanation:
            "それ se siente como “eso” desde el lado del interlocutor o de su espacio.",
        relatedSectionIds: ["lesson-007-concept"],
        },
        {
        id: "q3",
        type: "single-choice",
        prompt: {
            es: "¿Qué opción corresponde a algo que ambos ven lejos?",
        },
        choices: [
            { id: "a", label: { jp: ruby("これ") } },
            { id: "b", label: { jp: ruby("それ") } },
            { id: "c", label: { jp: ruby("あれ") } },
            { id: "d", label: { jp: ruby("です") } },
        ],
        correctChoiceId: "c",
        explanation:
            "Cuando el referente está lejos de los dos, la opción natural es あれ.",
        relatedSectionIds: ["lesson-007-concept", "lesson-007-contrast"],
        },
        {
        id: "q4",
        type: "single-choice",
        prompt: {
            es: "Elige la oración más natural para decir: “Esto es un lápiz”.",
        },
        choices: [
            { id: "a", label: { jp: ruby("これは[鉛筆|えんぴつ]です。") } },
            { id: "b", label: { jp: ruby("これ[鉛筆|えんぴつ]です。") } },
            { id: "c", label: { jp: ruby("[鉛筆|えんぴつ]これです。") } },
            { id: "d", label: { jp: ruby("これはです[鉛筆|えんぴつ]。") } },
        ],
        correctChoiceId: "a",
        explanation:
            "La estructura natural aquí es pronombre + は + identificación + です.",
        relatedSectionIds: ["lesson-007-structure", "lesson-007-examples"],
        },
        {
        id: "q5",
        type: "single-choice",
        prompt: {
            es: "Elige la oración más natural para decir: “La llave es esa”.",
        },
        choices: [
            { id: "a", label: { jp: ruby("かぎはそれです。") } },
            { id: "b", label: { jp: ruby("それはかぎです。") } },
            { id: "c", label: { jp: ruby("かぎそれです。") } },
            { id: "d", label: { jp: ruby("それかぎです。") } },
        ],
        correctChoiceId: "a",
        explanation:
            "Aquí el objeto va como tema y el pronombre queda al final como identificación.",
        relatedSectionIds: ["lesson-007-structure", "lesson-007-examples"],
        },
        {
        id: "q6",
        type: "single-choice",
        prompt: {
            es: "¿Cuál pregunta está bien formada para decir “¿Qué es esto?”?",
        },
        choices: [
            { id: "a", label: { jp: ruby("これは[何|なん]ですか。") } },
            { id: "b", label: { jp: ruby("これ[何|なん]ですか。") } },
            { id: "c", label: { jp: ruby("[何|なん]これはですか。") } },
            { id: "d", label: { jp: ruby("これはです[何|なん]か。") } },
        ],
        correctChoiceId: "a",
        explanation:
            "La estructura base de la pregunta en esta unidad es これは何ですか。",
        relatedSectionIds: ["lesson-007-structure"],
        },
        {
        id: "q7",
        type: "single-choice",
        prompt: {
            es: "A: これは何ですか。 ¿Qué respuesta suena más natural desde el otro lado si el objeto está cerca de quien preguntó?",
        },
        choices: [
            { id: "a", label: { jp: ruby("それはペンです。") } },
            { id: "b", label: { jp: ruby("あれはペンです。") } },
            { id: "c", label: { jp: ruby("ペンはこれです。") } },
            { id: "d", label: { jp: ruby("これペンです。") } },
        ],
        correctChoiceId: "a",
        explanation:
            "En este tipo de diálogo, これ desde un lado suele responderse naturalmente con それ desde el otro.",
        relatedSectionIds: ["lesson-007-concept", "lesson-007-contrast"],
        },
        {
        id: "q8",
        type: "single-choice",
        prompt: {
            es: "A: それは何ですか。 ¿Qué respuesta suena más natural si el objeto está de tu lado?",
        },
        choices: [
            { id: "a", label: { jp: ruby("それはテレビです。") } },
            { id: "b", label: { jp: ruby("これはテレビです。") } },
            { id: "c", label: { jp: ruby("あれはテレビです。") } },
            { id: "d", label: { jp: ruby("テレビですこれ。") } },
        ],
        correctChoiceId: "b",
        explanation:
            "Si el otro habló de それ desde su perspectiva, tu respuesta natural suele pasar a これ desde la tuya.",
        relatedSectionIds: ["lesson-007-concept", "lesson-007-examples"],
        },
        {
        id: "q9",
        type: "single-choice",
        prompt: {
            es: "A: あれは何ですか。 ¿Qué respuesta es la más natural si ambos miran el mismo edificio lejano?",
        },
        choices: [
            { id: "a", label: { jp: ruby("これは[病院|びょういん]です。") } },
            { id: "b", label: { jp: ruby("それは[病院|びょういん]です。") } },
            { id: "c", label: { jp: ruby("あれは[病院|びょういん]です。") } },
            { id: "d", label: { jp: ruby("[病院|びょういん]はそれです。") } },
        ],
        correctChoiceId: "c",
        explanation:
            "Cuando ambos comparten la misma lejanía respecto del referente, あれ suele mantenerse.",
        relatedSectionIds: ["lesson-007-concept", "lesson-007-contrast"],
        },
        {
        id: "q10",
        type: "single-choice",
        prompt: {
            es: "Elige la oración más natural para decir: “Aquello es la biblioteca”.",
        },
        choices: [
            { id: "a", label: { jp: ruby("あれは[図書館|としょかん]です。") } },
            { id: "b", label: { jp: ruby("それ[図書館|としょかん]です。") } },
            { id: "c", label: { jp: ruby("あれ[図書館|としょかん]です。") } },
            { id: "d", label: { jp: ruby("[図書館|としょかん]はあれをです。") } },
        ],
        correctChoiceId: "a",
        explanation:
            "La estructura correcta mantiene pronombre + は + identificación + です.",
        relatedSectionIds: ["lesson-007-structure", "lesson-007-vocabulary"],
        },
        {
        id: "q11",
        type: "single-choice",
        prompt: {
            es: "¿Cuál oración usa bien el pronombre al final como identificación?",
        },
        choices: [
            { id: "a", label: { jp: ruby("[駅|えき]はあれです。") } },
            { id: "b", label: { jp: ruby("あれ[駅|えき]です。") } },
            { id: "c", label: { jp: ruby("[駅|えき]それです。") } },
            { id: "d", label: { jp: ruby("あれは[駅|えき]はです。") } },
        ],
        correctChoiceId: "a",
        explanation:
            "Aquí se ve la otra dirección de la oración: el sustantivo entra como tema y el pronombre queda al final.",
        relatedSectionIds: ["lesson-007-structure", "lesson-007-examples"],
        },
        {
        id: "q12",
        type: "single-choice",
        prompt: {
            es: "Tienes un calendario en la mano. ¿Qué oración suena más natural?",
        },
        choices: [
            { id: "a", label: { jp: ruby("それはカレンダーです。") } },
            { id: "b", label: { jp: ruby("これはカレンダーです。") } },
            { id: "c", label: { jp: ruby("あれはカレンダーです。") } },
            { id: "d", label: { jp: ruby("カレンダーはそれです。") } },
        ],
        correctChoiceId: "b",
        explanation:
            "Si lo tienes tú contigo, el pronombre natural es これ.",
        relatedSectionIds: ["lesson-007-concept", "lesson-007-vocabulary"],
        },
        {
        id: "q13",
        type: "single-choice",
        prompt: {
            es: "Ambos miran un estanque a lo lejos. ¿Qué oración suena más natural?",
        },
        choices: [
            { id: "a", label: { jp: ruby("これは[池|いけ]です。") } },
            { id: "b", label: { jp: ruby("それは[池|いけ]です。") } },
            { id: "c", label: { jp: ruby("あれは[池|いけ]です。") } },
            { id: "d", label: { jp: ruby("[池|いけ]はこれです。") } },
        ],
        correctChoiceId: "c",
        explanation:
            "Cuando algo está lejos de ambos, la forma natural es あれ.",
        relatedSectionIds: ["lesson-007-concept", "lesson-007-vocabulary"],
        },
        {
        id: "q14",
        type: "order-sentence",
        prompt: {
            es: "Ordena la pregunta correcta:",
        },
        tokens: [
            { id: "t1", label: { jp: ruby("これは") }, value: "これは" },
            { id: "t2", label: { jp: ruby("[何|なん]") }, value: "何" },
            { id: "t3", label: { jp: ruby("ですか。") }, value: "ですか。" },
        ],
        correctOrder: ["t1", "t2", "t3"],
        answerLabel: { jp: ruby("これは[何|なん]ですか。") },
        explanation:
            "La pregunta base de esta unidad se arma como これは何ですか。",
        relatedSectionIds: ["lesson-007-structure", "lesson-007-summary"],
        },
        {
        id: "q15",
        type: "order-sentence",
        prompt: {
            es: "Ordena la oración correcta:",
        },
        tokens: [
            { id: "t1", label: { jp: ruby("[郵便局|ゆうびんきょく]") }, value: "郵便局" },
            { id: "t2", label: { jp: ruby("は") }, value: "は" },
            { id: "t3", label: { jp: ruby("あれ") }, value: "あれ" },
            { id: "t4", label: { jp: ruby("です。") }, value: "です。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("[郵便局|ゆうびんきょく]はあれです。") },
        explanation:
            "Aquí el lugar entra como tema y el pronombre queda al final como identificación.",
        relatedSectionIds: ["lesson-007-structure", "lesson-007-vocabulary"],
        },
        {
        id: "q16",
        type: "fill-blank",
        prompt: {
            es: "Completa con la palabra interrogativa correcta:",
            jp: ruby("これは___ですか。"),
        },
        acceptedAnswers: ["何", "なん"],
        placeholder: "Escribe la palabra",
        explanation:
            "Para preguntar “qué” en esta unidad usamos 何 dentro del patrón これは何ですか。",
        relatedSectionIds: ["lesson-007-structure", "lesson-007-summary"],
        },
        {
        id: "q17",
        type: "fill-blank",
        prompt: {
            es: "Completa la respuesta natural cambiando de perspectiva:",
            jp: ruby("A: これは[何|なん]ですか。 B: ___はスマホです。"),
        },
        acceptedAnswers: ["それ"],
        placeholder: "Escribe el pronombre",
        explanation:
            "Cuando A usa これ para algo de su lado, B suele responder con それ desde el suyo.",
        relatedSectionIds: ["lesson-007-concept", "lesson-007-contrast"],
        },
        {
        id: "q18",
        type: "fill-blank",
        prompt: {
            es: "Completa la respuesta natural cambiando de perspectiva:",
            jp: ruby("A: それは[何|なん]ですか。 B: ___はラジオです。"),
        },
        acceptedAnswers: ["これ"],
        placeholder: "Escribe el pronombre",
        explanation:
            "Si el otro habló de それ desde su perspectiva, tu respuesta natural puede pasar a これ desde la tuya.",
        relatedSectionIds: ["lesson-007-concept", "lesson-007-contrast"],
        },
        {
        id: "q19",
        type: "fill-blank",
        prompt: {
            es: "Completa con el pronombre natural para algo lejano a ambos:",
            jp: ruby("___は[山|やま]です。"),
        },
        acceptedAnswers: ["あれ"],
        placeholder: "Escribe el pronombre",
        explanation:
            "Si ambos ven la montaña lejos, la opción natural es あれ.",
        relatedSectionIds: ["lesson-007-concept", "lesson-007-vocabulary"],
        },
        {
        id: "q20",
        type: "single-choice",
        prompt: {
            es: "¿Cuál explicación capta mejor por qué これ puede ir seguido de は o ocupar la parte que normalmente ocupa un sustantivo?",
        },
        choices: [
            { id: "a", label: { es: "Porque es un adjetivo y modifica un sustantivo oculto." } },
            { id: "b", label: { es: "Porque funciona como pronombre y ocupa el lugar del sustantivo dentro de la oración." } },
            { id: "c", label: { es: "Porque siempre significa lo mismo." } },
            { id: "d", label: { es: "Porque solo se usa con personas." } },
        ],
        correctChoiceId: "b",
        explanation:
            "Ese es el corazón gramatical de la unidad: これ reemplaza el nombre de la cosa y por eso puede entrar donde iría un sustantivo.",
        relatedSectionIds: ["lesson-007-concept", "lesson-007-structure"],
        },
    ],
    },
};

export default lesson007;
