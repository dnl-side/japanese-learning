
// src/data/grammar/lessons/lesson-027.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson027: GrammarLesson = {
  id: "lesson-027",
  slug: "adjetivos-i-conjugacion-y-uso-basico",
  order: 32,
  level: "N5",
  status: "ready",
  title: "Adjetivos い",
  jpTitle: "いけいようし",
  shortTitle: "Adjetivos い",
  description:
    "Qué es un adjetivo en japonés, cómo reconocer la base de los adjetivos い, cómo cambia el morfema い a くない・かった・くなかった, y cómo usar estos adjetivos tanto delante de un sustantivo como antes de です dentro de oraciones completas.",
  estimatedMinutes: 104,
  categoryTags: ["fundamentos", "adjetivos", "i-adjetivos", "conjugacion", "lectura", "integracion"],
  grammarTags: [
    "い形容詞",
    "adjetivo",
    "い",
    "くない",
    "かった",
    "くなかった",
    "AいN",
    "Aいです",
  ],
  searchTerms: [
    "adjetivos i japones",
    "ikeiyoushi",
    "takai takakunai takakatta",
    "como conjugar adjetivos i japones",
    "adjetivo antes de sustantivo japones",
    "i adjectives japanese n5",
  ],
  relatedLessonSlugs: [
    "adverbios-de-tiempo-y-frecuencia",
    "verbos-de-accion-particulas-wo-de-to-ni",
    "verbos-de-movimiento-iku-kuru-kaeru-ni-he-de-to",
    "fechas-en-uso-periodos-de-tiempo-kara-made",
  ],
  relatedVocabularyTags: ["adjetivos", "descripcion", "objetos", "lugares", "personas", "base"],
  objectives: [
    "Entender qué hace un adjetivo dentro de una oración japonesa.",
    "Reconocer que la marca visible de esta familia es el morfema final い.",
    "Conjugar adjetivos い en afirmativo, negativo, pasado y pasado negativo.",
    "Usar adjetivos い como modificadores de sustantivo sin añadir な.",
    "Usar adjetivos い como predicado antes de です, entendiendo que el adjetivo mismo es el que cambia.",
    "Construir oraciones más variadas de descripción antes de pasar a la familia な.",
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
      id: "lesson-027-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "Ahora entramos a uno de los bloques más importantes del curso: los adjetivos. Aquí vas a empezar por la familia más visible y más mecánica al principio, la de los adjetivos い. La meta no es solo memorizar vocabulario, sino entender qué hace un adjetivo, cómo se reconoce, cómo cambia y cómo se usa dentro de oraciones reales.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Primero verás qué significa que un adjetivo describa un sustantivo en grupos como:",
              jp: ruby("[高|たか]い[山|やま] / [新|あたら]しい[辞書|じしょ] / [忙|いそが]しい[先生|せんせい]。"),
            },
            {
              es: "Después trabajarás la conjugación base de esta familia:",
              jp: ruby("[高|たか]い → [高|たか]くない → [高|たか]かった → [高|たか]くなかった。"),
            },
            {
              es: "Y al final usarás adjetivos tanto delante de un sustantivo como en frases completas como:",
              jp: ruby("この[本|ほん]は[面白|おもしろ]いです。 / [昨日|きのう]は[寒|さむ]かったです。"),
            },
          ],
        },
      ],
    },
    {
      id: "lesson-027-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Un adjetivo describe cómo es algo o alguien",
          content:
            "La función más básica del adjetivo es describir una característica. Puede decir cómo es un objeto, una persona, un lugar, una situación o una experiencia. En japonés, esa descripción puede aparecer pegada al sustantivo o puede cerrar la idea principal de la oración.",
          bullets: [
            { jp: ruby("[高|たか]い[山|やま]"), es: "el adjetivo modifica directamente al sustantivo" },
            { jp: ruby("[山|やま]は[高|たか]いです。"), es: "el adjetivo funciona como predicado de la oración" },
            { jp: ruby("この[映画|えいが]は[面白|おもしろ]いです。"), es: "el adjetivo describe una experiencia o valoración" },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "La pista visible de esta familia es el morfema final い",
          content:
            "En esta unidad conviene fijar muy bien que la marca más visible de la familia es el い final. Ese い no es solo una parte decorativa: es el morfema que cambia cuando el adjetivo pasa a negativo o a pasado. Por eso aquí la conjugación vive dentro del propio adjetivo.",
          bullets: [
            { jp: ruby("[高|たか]い"), es: "forma base" },
            { jp: ruby("[高|たか]くない"), es: "el い cambia a くない" },
            { jp: ruby("[高|たか]かった"), es: "el い cambia a かった" },
            { jp: ruby("[高|たか]くなかった"), es: "el い cambia a くなかった" },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Cuando el adjetivo va antes de un sustantivo, entra directo",
          content:
            "Una de las ventajas de esta familia es que el adjetivo se une directamente al sustantivo sin partícula.",
          bullets: [
            { jp: ruby("[新|あたら]しい[自転車|じてんしゃ]"), es: "nuevo + bicicleta" },
            { jp: ruby("[小|ちい]さい[町|まち]"), es: "pequeño + pueblo / ciudad" },
            { jp: ruby("[難|むずか]しい[問題|もんだい]"), es: "difícil + problema" },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Cuando el adjetivo cierra la oración, el adjetivo es el que cambia",
          content:
            "Aquí está la otra idea grande de la unidad. Con los adjetivos い, el tiempo y la negación viven en el propio adjetivo. です sigue apareciendo como cierre cortés, pero no es です quien lleva el peso principal de la conjugación.",
          bullets: [
            { jp: ruby("[部屋|へや]は[明|あか]るいです。"), es: "afirmativo no pasado" },
            { jp: ruby("[部屋|へや]は[明|あか]るくないです。"), es: "negativo" },
            { jp: ruby("[部屋|へや]は[明|あか]るかったです。"), es: "pasado" },
            { jp: ruby("[部屋|へや]は[明|あか]るくなかったです。"), es: "pasado negativo" },
          ],
        },
      ],
    },
    {
      id: "lesson-027-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-027-1",
              label: "Adjetivo い + sustantivo",
              pattern: ruby("Aい + N"),
              meaning: "Un sustantivo descrito por un adjetivo い.",
              translation:
                "Aquí el adjetivo entra directo delante del sustantivo.",
              structure: [
                {
                  slot: "Aい",
                  value: "adjetivo い",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[高|たか]い / [新|あたら]しい / [古|ふる]い / [忙|いそが]しい / [面白|おもしろ]い。"),
                  },
                },
                {
                  slot: "N",
                  value: "sustantivo",
                  note: {
                    es: "Puede ser algo como:",
                    jp: ruby("[山|やま] / [本|ほん] / [町|まち] / [先生|せんせい] / [映画|えいが]。"),
                  },
                },
              ],
              notes: ["Aquí la familia い entra directa delante del nombre."],
            },
            {
              id: "pattern-027-2",
              label: "Predicado afirmativo",
              pattern: ruby("N は Aいです。"),
              meaning: "N es A.",
              translation:
                "Aquí el adjetivo funciona como predicado de la oración y です cierra la frase con cortesía.",
              structure: [
                { slot: "N は", value: "tema", note: "El sustantivo del que hablas." },
                { slot: "Aい", value: "adjetivo base", note: "El adjetivo mantiene su forma básica." },
                { slot: { jp: ruby("です") }, value: "cierre cortés", note: "Añade cortesía, pero la forma base sigue estando en el adjetivo." },
              ],
              notes: ["Tener en cuenta que el い estara presente en todos los adjetivos い"],
            },
            {
              id: "pattern-027-3",
              label: "Negativo",
              pattern: ruby("N は Aくないです。"),
              meaning: "N no es A.",
              translation:
                "Aquí el morfema final い cambia a くない. Esa es la puerta principal del negativo en esta familia.",
              structure: [
                { slot: "Aい", value: "forma base", note: { es: "Ejemplo base:", jp: ruby("[高|たか]い") } },
                { slot: "Aくない", value: "negativo", note: { es: "Resultado:", jp: ruby("[高|たか]くない") } },
              ],
              notes: ["En esta ruta fijaremos くないです como forma productiva principal."],
            },
            {
              id: "pattern-027-4",
              label: "Pasado y pasado negativo",
              pattern: ruby("N は Aかったです。 / N は Aくなかったです。"),
              meaning: "N fue A. / N no fue A.",
              translation:
                "Aquí la familia sigue siendo la misma. El morfema final del adjetivo cambia a かった o くなかった.",
              structure: [
                {
                  slot: "Aかった",
                  value: "pasado afirmativo",
                  note: { es: "Por ejemplo:", jp: ruby("[寒|さむ]かった / [安|やす]かった / [面白|おもしろ]かった。") },
                },
                {
                  slot: "Aくなかった",
                  value: "pasado negativo",
                  note: { es: "Por ejemplo:", jp: ruby("[寒|さむ]くなかった / [安|やす]くなかった / [面白|おもしろ]くなかった。") },
                },
              ],
              notes: ["El adjetivo sigue cargando la conjugación principal."],
            },
          ],
        },
        {
          type: "table",
          title: "Conjugación base de varios adjetivos い",
          description:
            "Aquí conviene ver el patrón repetirse con varios adjetivos distintos hasta que el cambio del morfema se vuelva automático.",
          columns: [
            { key: "base", label: "Base", width: "22%" },
            { key: "negative", label: "Negativo", width: "26%" },
            { key: "past", label: "Pasado", width: "24%" },
            { key: "pastNegative", label: "Pasado negativo", width: "28%" },
          ],
          rows: [
            {
              id: "adj027-1",
              cells: {
                base: { jp: ruby("[高|たか]い") },
                negative: { jp: ruby("[高|たか]くない") },
                past: { jp: ruby("[高|たか]かった") },
                pastNegative: { jp: ruby("[高|たか]くなかった") },
              },
            },
            {
              id: "adj027-2",
              cells: {
                base: { jp: ruby("[安|やす]い") },
                negative: { jp: ruby("[安|やす]くない") },
                past: { jp: ruby("[安|やす]かった") },
                pastNegative: { jp: ruby("[安|やす]くなかった") },
              },
            },
            {
              id: "adj027-3",
              cells: {
                base: { jp: ruby("[忙|いそが]しい") },
                negative: { jp: ruby("[忙|いそが]しくない") },
                past: { jp: ruby("[忙|いそが]しかった") },
                pastNegative: { jp: ruby("[忙|いそが]しくなかった") },
              },
            },
            {
              id: "adj027-4",
              cells: {
                base: { jp: ruby("[面白|おもしろ]い") },
                negative: { jp: ruby("[面白|おもしろ]くない") },
                past: { jp: ruby("[面白|おもしろ]かった") },
                pastNegative: { jp: ruby("[面白|おもしろ]くなかった") },
              },
            },
          ],
          zebra: true,
        },
      ],
    },
    {
      id: "lesson-027-vocabulary",
      kind: "vocabulary",
      title: "Vocabulario nuevo de adjetivos い",
      description:
        "Aquí reunimos un bloque de adjetivos い bastante variado para que la unidad no dependa siempre de las mismas descripciones.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 4,
          items: [
            { id: "v027-high", jp: ruby("[高|たか]い"), reading: "たかい", meaning: "alto / caro", tags: ["adjetivo", "core"] },
            { id: "v027-cheap", jp: ruby("[安|やす]い"), reading: "やすい", meaning: "barato", tags: ["adjetivo", "core"] },
            { id: "v027-new", jp: ruby("[新|あたら]しい"), reading: "あたらしい", meaning: "nuevo", tags: ["adjetivo"] },
            { id: "v027-old", jp: ruby("[古|ふる]い"), reading: "ふるい", meaning: "viejo / antiguo", tags: ["adjetivo"] },
            { id: "v027-early", jp: ruby("[早|はや]い"), reading: "はやい", meaning: "temprano / rápido", tags: ["adjetivo"] },
            { id: "v027-late", jp: ruby("[遅|おそ]い"), reading: "おそい", meaning: "tarde / lento", tags: ["adjetivo"] },
            { id: "v027-busy", jp: ruby("[忙|いそが]しい"), reading: "いそがしい", meaning: "ocupado", tags: ["adjetivo", "core"] },
            { id: "v027-kind", jp: ruby("[優|やさ]しい"), reading: "やさしい", meaning: "amable", tags: ["adjetivo"] },
            { id: "v027-difficult", jp: ruby("[難|むずか]しい"), reading: "むずかしい", meaning: "difícil", tags: ["adjetivo", "core"] },
            { id: "v027-easy", jp: ruby("[易|やさ]しい"), reading: "やさしい", meaning: "fácil", tags: ["adjetivo"] },
            { id: "v027-interesting", jp: ruby("[面白|おもしろ]い"), reading: "おもしろい", meaning: "interesante / entretenido", tags: ["adjetivo", "core"] },
            { id: "v027-boring", jp: ruby("つまらない"), reading: "つまらない", meaning: "aburrido", tags: ["adjetivo"] },
            { id: "v027-hot", jp: ruby("[暑|あつ]い"), reading: "あつい", meaning: "caluroso", tags: ["adjetivo"] },
            { id: "v027-cold", jp: ruby("[寒|さむ]い"), reading: "さむい", meaning: "frío (clima)", tags: ["adjetivo"] },
            { id: "v027-big", jp: ruby("[大|おお]きい"), reading: "おおきい", meaning: "grande", tags: ["adjetivo", "core"] },
            { id: "v027-small", jp: ruby("[小|ちい]さい"), reading: "ちいさい", meaning: "pequeño", tags: ["adjetivo", "core"] },
          ],
        },
      ],
    },
    {
      id: "lesson-027-examples",
      kind: "examples",
      title: "Ejemplos guiados",
      blocks: [
        {
          type: "example-group",
          items: [
            { id: "ex-027-1", jp: ruby("[高|たか]い[建物|たてもの]です。"), es: "Es un edificio alto." },
            { id: "ex-027-2", jp: ruby("この[辞書|じしょ]は[新|あたら]しいです。"), es: "Este diccionario es nuevo." },
            { id: "ex-027-3", jp: ruby("[昨日|きのう]のテストは[難|むずか]しかったです。"), es: "La prueba de ayer fue difícil." },
            { id: "ex-027-4", jp: ruby("[今日|きょう]は[寒|さむ]くないです。"), es: "Hoy no hace frío." },
            { id: "ex-027-5", jp: ruby("[先週|せんしゅう]は[忙|いそが]しくなかったです。"), es: "La semana pasada no estuve ocupado." },
            { id: "ex-027-6", jp: ruby("[面白|おもしろ]い[映画|えいが]を[見|み]ました。"), es: "Vi una película interesante." },
            { id: "ex-027-7", jp: ruby("[図書館|としょかん]は[大|おお]きいです。"), es: "La biblioteca es grande." },
            { id: "ex-027-8", jp: ruby("[夜|よる]の[駅前|えきまえ]は[明|あか]るいです。"), es: "La zona frente a la estación de noche es luminosa." },
            { id: "ex-027-9", jp: ruby("[古|ふる]い[地図|ちず]は[見|み]にくいです。"), es: "Los mapas viejos son difíciles de ver." },
            {
              id: "ex-027-10",
              jp: ruby("[小|ちい]さい[町|まち]ですが、[面白|おもしろ]いです。"),
              es: "Es una ciudad pequeña, pero interesante.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-027-contrast",
      kind: "contrast",
      title: "Contrastes que conviene fijar",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-027-1",
              label: "Modificar sustantivo vs cerrar oración",
              correct: {
                jp: ruby("[新|あたら]しい[本|ほん] / この[本|ほん]は[新|あたら]しいです。"),
                es: "La primera modifica al nombre; la segunda cierra la descripción.",
              },
              explanation:
                "Aquí el adjetivo い entra directo delante del sustantivo o puede funcionar como predicado con です.",
            },
            {
              id: "contrast-027-2",
              label: "Afirmativo vs negativo",
              correct: {
                jp: ruby("[高|たか]いです。 / [高|たか]くないです。"),
                es: "El adjetivo mismo cambia para formar el negativo.",
              },
              explanation:
                "La ruta base aquí es い → くない.",
            },
            {
              id: "contrast-027-3",
              label: "Presente vs pasado",
              correct: {
                jp: ruby("[寒|さむ]いです。 / [寒|さむ]かったです。"),
                es: "La segunda forma mueve la descripción al pasado.",
              },
              explanation:
                "La ruta base aquí es い → かった.",
            },
            {
              id: "contrast-027-4",
              label: "Pasado vs pasado negativo",
              correct: {
                jp: ruby("[面白|おもしろ]かったです。 / [面白|おもしろ]くなかったです。"),
                es: "La segunda dice que algo no fue interesante.",
              },
              explanation:
                "La ruta base aquí es い → くなかった.",
            },
            {
              id: "contrast-027-5",
              label: "Familia い vs familia な",
              correct: {
                jp: ruby("[高|たか]い[山|やま] / [静|しず]かな[町|まち]"),
                es: "La primera entra directa; la segunda necesitará な y se verá en la siguiente unidad.",
              },
              explanation:
                "Aquí conviene preparar desde ya esa diferencia para no mezclar familias.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-027-warning",
      kind: "warning",
      title: "Qué conviene vigilar",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "No metas な dentro de la familia い",
          content:
            "El error más típico en este punto es contaminar la familia い con una な que no corresponde. El segundo error típico es creer que todo lo que termina en い pertenece automáticamente a esta familia. En la siguiente unidad verás palabras como きれい o 好き, que no funcionan como adjetivos い aunque visualmente puedan confundir.",
          bullets: [
            { jp: ruby("[高|たか]い[本|ほん]"), es: "correcto: entra directo" },
            { jp: ruby("[高|たか]いです"), es: "correcto: el adjetivo cierra la oración con です" },
          ],
        },
      ],
    },
    {
      id: "lesson-027-practice",
      kind: "practice",
      title: "Práctica guiada antes del quiz",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Toma primero cinco adjetivos い y únelos a sustantivos distintos.",
              jp: ruby("[新|あたら]しい[本|ほん] / [大|おお]きい[公園|こうえん] / [面白|おもしろ]い[映画|えいが]。"),
            },
            { es: "Después transforma cada uno a negativo con", jp: ruby("くない"), note: "sin cambiar el sustantivo." },
            { es: "Haz una segunda ronda en pasado con", jp: ruby("かった"), note: "usando referencias temporales como きのう o 先週." },
            { es: "Y una tercera ronda en pasado negativo con", jp: ruby("くなかった"), note: "para fijar bien el patrón completo." },
            { es: "Por último, mezcla frases de sustantivo + adjetivo y frases con adjetivo como predicado." },
          ],
        },
      ],
    },
    {
      id: "lesson-027-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            { es: "Entiendo qué hace un adjetivo dentro de una oración japonesa." },
            { es: "Puedo reconocer la familia い por su morfema final y usar sus cambios base." },
            { es: "Puedo formar", jp: ruby("[高|たか]くない / [高|たか]かった / [高|たか]くなかった"), note: "sin perder la lógica del patrón." },
            { es: "Puedo usar adjetivos い delante de un sustantivo y también antes de です." },
            { es: "Estoy listo para contrastar esta familia con la familia な." },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-027-quiz",
    title: "Quiz — Adjetivos い",
    description:
      "Repaso de reconocimiento, conjugación y uso de los adjetivos い. Aquí el foco fuerte está en el cambio del morfema final y en distinguir bien el uso delante de un sustantivo y como predicado.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      { id: "q1", type: "fill-blank", prompt: { es: "Completa la forma negativa:", jp: ruby("[高|たか]い → ___") }, acceptedAnswers: ["高くない", "たかくない"], placeholder: "Escribe la forma", explanation: "La ruta base del negativo aquí es い → くない.", relatedSectionIds: ["lesson-027-structure", "lesson-027-contrast"] },
      { id: "q2", type: "fill-blank", prompt: { es: "Completa la forma de pasado:", jp: ruby("[安|やす]い → ___") }, acceptedAnswers: ["安かった", "やすかった"], placeholder: "Escribe la forma", explanation: "La ruta base del pasado aquí es い → かった.", relatedSectionIds: ["lesson-027-structure", "lesson-027-contrast"] },
      { id: "q3", type: "fill-blank", prompt: { es: "Completa la forma de pasado negativo:", jp: ruby("[新|あたら]しい → ___") }, acceptedAnswers: ["新しくなかった", "あたらしくなかった"], placeholder: "Escribe la forma", explanation: "La ruta base del pasado negativo aquí es い → くなかった.", relatedSectionIds: ["lesson-027-structure", "lesson-027-contrast"] },
      { id: "q4", type: "fill-blank", prompt: { es: "Completa la forma negativa:", jp: ruby("[忙|いそが]しい → ___") }, acceptedAnswers: ["忙しくない", "いそがしくない"], placeholder: "Escribe la forma", explanation: "忙しい pertenece a la familia い y cambia a 忙しくない.", relatedSectionIds: ["lesson-027-structure", "lesson-027-vocabulary"] },
      { id: "q5", type: "fill-blank", prompt: { es: "Completa con la forma correcta:", jp: ruby("[昨日|きのう]は[寒|さむ]___です。"), note: "La idea es: hizo frío." }, acceptedAnswers: ["かった", "寒かった", "さむかった"], placeholder: "Escribe la parte que falta", explanation: "Aquí la referencia temporal empuja al pasado, así que necesitas 寒かったです.", relatedSectionIds: ["lesson-027-examples", "lesson-027-contrast"] },
      { id: "q6", type: "single-choice", prompt: { es: "¿Cuál grupo modifica correctamente al sustantivo “本”?" }, choices: [ { id: "a", label: { jp: ruby("[面白|おもしろ]い[本|ほん]") } }, { id: "b", label: { jp: ruby("[面白|おもしろ]いな[本|ほん]") } }, { id: "c", label: { jp: ruby("[面白|おもしろ]く[本|ほん]") } }, { id: "d", label: { jp: ruby("[面白|おもしろ]かった[本|ほん]です") } } ], correctChoiceId: "a", explanation: "Los adjetivos い entran directamente delante del sustantivo.", relatedSectionIds: ["lesson-027-structure", "lesson-027-warning"] },
      { id: "q7", type: "single-choice", prompt: { es: "¿Cuál oración está bien formada como predicado de adjetivo い?" }, choices: [ { id: "a", label: { jp: ruby("[図書館|としょかん]は[静|しず]かいです。") } }, { id: "b", label: { jp: ruby("[図書館|としょかん]は[大|おお]きいです。") } }, { id: "c", label: { jp: ruby("[図書館|としょかん]は[大|おお]きいなです。") } }, { id: "d", label: { jp: ruby("[図書館|としょかん]は[大|おお]きくです。") } } ], correctChoiceId: "b", explanation: "大きい es adjetivo い y puede cerrar la oración como 大きいです.", relatedSectionIds: ["lesson-027-structure", "lesson-027-contrast"] },
      { id: "q8", type: "fill-blank", prompt: { es: "Completa la oración:", jp: ruby("この[映画|えいが]は___です。"), note: "La idea es: interesante." }, acceptedAnswers: ["面白い", "おもしろい"], placeholder: "Escribe el adjetivo", explanation: "Aquí necesitas un adjetivo い en forma base como predicado.", relatedSectionIds: ["lesson-027-vocabulary", "lesson-027-examples"] },
      { id: "q9", type: "fill-blank", prompt: { es: "Completa la oración:", jp: ruby("[先週|せんしゅう]は___です。"), note: "La idea es: no estuve ocupado." }, acceptedAnswers: ["忙しくなかった", "いそがしくなかった"], placeholder: "Escribe el adjetivo", explanation: "La referencia temporal y la negación te llevan a 忙しくなかったです.", relatedSectionIds: ["lesson-027-vocabulary", "lesson-027-examples"] },
      { id: "q10", type: "single-choice", prompt: { es: "¿Qué explicación capta mejor la diferencia entre 高い山 y 山は高いです?" }, choices: [ { id: "a", label: { es: "La primera modifica al sustantivo y la segunda usa el adjetivo como predicado." } }, { id: "b", label: { es: "La primera es una pregunta y la segunda una orden." } }, { id: "c", label: { es: "La primera es de la familia な y la segunda de la familia い." } }, { id: "d", label: { es: "No hay ninguna diferencia real." } } ], correctChoiceId: "a", explanation: "Ese es el contraste central: adjetivo + sustantivo frente a adjetivo como predicado.", relatedSectionIds: ["lesson-027-concept", "lesson-027-contrast"] },
      { id: "q11", type: "fill-blank", prompt: { es: "Completa con la forma correcta:", jp: ruby("[駅前|えきまえ]は[夜|よる]も___です。"), note: "La idea es: luminoso." }, acceptedAnswers: ["明るい", "あかるい"], placeholder: "Escribe el adjetivo", explanation: "Aquí el adjetivo correcto es 明るい.", relatedSectionIds: ["lesson-027-vocabulary", "lesson-027-examples"] },
      { id: "q12", type: "fill-blank", prompt: { es: "Completa con la forma correcta:", jp: ruby("[部屋|へや]は___です。"), note: "La idea es: no es pequeño." }, acceptedAnswers: ["小さくない", "ちいさくない"], placeholder: "Escribe el adjetivo", explanation: "Aquí la forma negativa de 小さい es 小さくない.", relatedSectionIds: ["lesson-027-vocabulary", "lesson-027-structure"] },
      { id: "q13", type: "single-choice", prompt: { es: "¿Cuál forma corresponde al pasado de 面白い?" }, choices: [ { id: "a", label: { jp: ruby("[面白|おもしろ]くない") } }, { id: "b", label: { jp: ruby("[面白|おもしろ]かった") } }, { id: "c", label: { jp: ruby("[面白|おもしろ]くなかった") } }, { id: "d", label: { jp: ruby("[面白|おもしろ]いな") } } ], correctChoiceId: "b", explanation: "La ruta de pasado es い → かった.", relatedSectionIds: ["lesson-027-structure", "lesson-027-contrast"] },
      { id: "q14", type: "single-choice", prompt: { es: "¿Cuál forma corresponde al pasado negativo de 古い?" }, choices: [ { id: "a", label: { jp: ruby("[古|ふる]くない") } }, { id: "b", label: { jp: ruby("[古|ふる]かった") } }, { id: "c", label: { jp: ruby("[古|ふる]くなかった") } }, { id: "d", label: { jp: ruby("[古|ふる]いなかった") } } ], correctChoiceId: "c", explanation: "La ruta del pasado negativo es い → くなかった.", relatedSectionIds: ["lesson-027-structure", "lesson-027-contrast"] },
      { id: "q15", type: "fill-blank", prompt: { es: "Completa la oración:", jp: ruby("[問題|もんだい]は___です。"), note: "La idea es: difícil." }, acceptedAnswers: ["難しい", "むずかしい"], placeholder: "Escribe el adjetivo", explanation: "Aquí la forma base correcta es 難しい.", relatedSectionIds: ["lesson-027-vocabulary", "lesson-027-examples"] },
      { id: "q16", type: "order-sentence", prompt: { es: "Ordena la oración correcta:" }, tokens: [ { id: "t1", label: { jp: ruby("この") }, value: "この" }, { id: "t2", label: { jp: ruby("[本|ほん]は") }, value: "本は" }, { id: "t3", label: { jp: ruby("[面白|おもしろ]い") }, value: "面白い" }, { id: "t4", label: { jp: ruby("です。") }, value: "です。" } ], correctOrder: ["t1", "t2", "t3", "t4"], answerLabel: { jp: ruby("この[本|ほん]は[面白|おもしろ]いです。") }, explanation: "Aquí el adjetivo い aparece como predicado de la oración.", relatedSectionIds: ["lesson-027-structure", "lesson-027-examples"] },
      { id: "q17", type: "order-sentence", prompt: { es: "Ordena el grupo correcto:" }, tokens: [ { id: "t1", label: { jp: ruby("[新|あたら]しい") }, value: "新しい" }, { id: "t2", label: { jp: ruby("[自転車|じてんしゃ]") }, value: "自転車" } ], correctOrder: ["t1", "t2"], answerLabel: { jp: ruby("[新|あたら]しい[自転車|じてんしゃ]") }, explanation: "Aquí el adjetivo い entra directo delante del sustantivo.", relatedSectionIds: ["lesson-027-structure", "lesson-027-contrast"] },
      { id: "q18", type: "order-sentence", prompt: { es: "Ordena la oración correcta:" }, tokens: [ { id: "t1", label: { jp: ruby("[昨日|きのう]は") }, value: "昨日は" }, { id: "t2", label: { jp: ruby("[寒|さむ]かった") }, value: "寒かった" }, { id: "t3", label: { jp: ruby("です。") }, value: "です。" } ], correctOrder: ["t1", "t2", "t3"], answerLabel: { jp: ruby("[昨日|きのう]は[寒|さむ]かったです。") }, explanation: "Aquí la referencia temporal y el adjetivo en pasado trabajan juntos.", relatedSectionIds: ["lesson-027-structure", "lesson-027-examples"] },
      { id: "q19", type: "fill-blank", prompt: { es: "Completa la frase:", jp: ruby("[古|ふる]い___"), note: "La idea es: mapa." }, acceptedAnswers: ["地図", "ちず"], placeholder: "Escribe el sustantivo", explanation: "Aquí solo debes formar un grupo natural de adjetivo い + sustantivo.", relatedSectionIds: ["lesson-027-structure", "lesson-027-examples"] },
      { id: "q20", type: "single-choice", prompt: { es: "¿Cuál idea resume mejor la familia de los adjetivos い?" }, choices: [ { id: "a", label: { es: "Llevan な delante del sustantivo y です cambia todo el tiempo." } }, { id: "b", label: { es: "El morfema final い es la pista visible y el propio adjetivo carga la negación y el pasado." } }, { id: "c", label: { es: "Solo pueden usarse delante de sustantivos." } }, { id: "d", label: { es: "No pueden aparecer con です." } } ], correctChoiceId: "b", explanation: "Ese es el corazón real de la unidad: el adjetivo い carga la conjugación principal.", relatedSectionIds: ["lesson-027-concept", "lesson-027-summary"] },
    ],
  },
};

export default lesson027;
