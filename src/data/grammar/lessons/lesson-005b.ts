//src/data/grammar/lessons/lesson-005b.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson005b: GrammarLesson = {
  id: "lesson-005b",
  slug: "edad-oikutsu-nansai",
  order: 8,
  level: "N5",
  status: "ready",
  title: "Edad",
  jpTitle: "おいくつ・何歳",
  shortTitle: "Edad",
  description:
    "Cómo preguntar y responder la edad usando おいくつですか y 何歳ですか, fijando bien las edades del 1 al 20 y las lecturas especiales de 歳.",
  estimatedMinutes: 42,
  categoryTags: ["fundamentos", "numeros", "edad", "preguntas", "contadores"],
  grammarTags: ["おいくつ", "何歳", "〜歳", "いっさい", "はっさい", "じゅっさい", "はたち", "も"],
  searchTerms: [
    "edad en japones",
    "oikutsu",
    "nansai",
    "sai",
    "hatachi",
    "como preguntar edad",
    "1 a 20 edad japones",
  ],
  relatedLessonSlugs: [
    "wa-desu-basico",
    "preguntas-basicas-desu-ka",
    "nacionalidad-jin-mo",
    "idiomas-ga-dekimasu-wakarimasu",
    "numeros-1-99",
  ],
  relatedVocabularyTags: ["numeros", "edad", "personas", "base"],
  objectives: [
    "Preguntar la edad con おいくつですか y なんさいですか.",
    "Responder la edad con 〜さいです.",
    "Fijar como vocabulario base las edades del 1 al 20.",
    "Reconocer las lecturas especiales いっさい, はっさい, じゅっさい y はたち.",
    "Entender que algunas irregularidades se repiten también en 11, 18, 21, 28 y más arriba.",
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
      id: "lesson-005b-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "En la unidad anterior fijaste la base numérica. Ahora vamos a poner esa base en un contexto real y muy frecuente: decir la edad. Aquí ya no basta con saber leer números aislados; toca aprender cómo se combinan con 歳 y cómo suenan dentro de una pregunta y una respuesta natural.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Aprenderás dos preguntas muy usadas:",
              jp: ruby("おいくつですか。 / [何歳|なんさい]ですか。"),
            },
            {
              es: "Y respuestas como:",
              jp: ruby("[18歳|じゅうはっさい]です。 / [20歳|はたち]です。"),
            },
            {
              es: "Además fijaremos bien las edades del 1 al 20 y sus lecturas especiales.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-005b-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "La edad toma la base numérica y le añade un contador",
          content:
            "En esta unidad vas a ver por primera vez con fuerza cómo una base numérica se une a un contador. Aquí el contador es さい. Por eso esta lección también prepara el terreno para los contadores que vendrán después.",
          bullets: [
            {
              jp: ruby("[5歳|ごさい]"),
              es: "5 + 歳",
            },
            {
              jp: ruby("[14歳|じゅうよんさい]"),
              es: "14 + 歳",
            },
            {
              jp: ruby("[20歳|はたち]"),
              es: "forma especial muy importante",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Hay dos preguntas base, pero no suenan igual",
          content:
            "Las dos sirven para preguntar la edad, pero no tienen exactamente la misma sensación. おいくつですか suena más suave y más cortés. なんさいですか es más directa y muy común en contextos normales.",
          bullets: [
            {
              jp: ruby("おいくつですか。"),
              es: "más suave / más cortés",
            },
            {
              jp: ruby("[何歳|なんさい]ですか。"),
              es: "más directa / neutral",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "No todo sigue la lectura base de los números",
          content:
            "Con 歳 aparecen varias lecturas especiales. Las más importantes que debes fijar bien aquí son 1, 8, 10 y 20. Además, algunas de esas irregularidades se repiten cuando el número vuelve a aparecer dentro de una edad mayor.",
          bullets: [
            {
              jp: ruby("[1歳|いっさい] / [8歳|はっさい] / [10歳|じゅっさい] / [20歳|はたち]"),
              es: "formas clave de esta unidad",
            },
            {
              jp: ruby("[11歳|じゅういっさい] / [18歳|じゅうはっさい] / [21歳|にじゅういっさい]"),
              es: "la irregularidad reaparece más arriba",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-005b-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-005b-1",
              label: "Pregunta suave y cortés",
              pattern: ruby("おいくつですか。"),
              meaning: "¿Cuántos años tiene?",
              translation:
                "Sirve para preguntar la edad con un tono más suave y educado.",
              structure: [
                {
                  slot: { jp: ruby("おいくつ") },
                  value: "pregunta por cantidad / edad",
                  note: "Aquí funciona como forma cortés para preguntar la edad.",
                },
                {
                  slot: { jp: ruby("ですか") },
                  value: "cierre de pregunta",
                  note: "Misma lógica que ya viste en preguntas con ですか.",
                },
              ],
              notes: [
                {
                  es: "Muy útil cuando quieres sonar más suave con la otra persona.",
                },
              ],
            },
            {
              id: "pattern-005b-2",
              label: "Pregunta directa y común",
              pattern: ruby("[何歳|なんさい]ですか。"),
              meaning: "¿Qué edad tiene?",
              translation:
                "Pregunta directa y muy frecuente en contextos normales.",
              structure: [
                {
                  slot: { jp: ruby("[何歳|なんさい]") },
                  value: "qué edad",
                  note: "Combina 何 con 歳 para preguntar la edad exacta.",
                },
                {
                  slot: { jp: ruby("ですか") },
                  value: "cierre de pregunta",
                  note: "Mantiene el tono educado básico.",
                },
              ],
              notes: [
                {
                  es: "Es normal y muy usada, pero suena algo más directa que おいくつですか.",
                },
              ],
            },
            {
              id: "pattern-005b-3",
              label: "Respuesta base",
              pattern: ruby("[18歳|じゅうはっさい]です。"),
              meaning: "Tengo 18 años.",
              translation:
                "Para responder, el bloque clave es número + 歳 + です.",
              structure: [
                {
                  slot: { jp: ruby("[18歳|じゅうはっさい]") },
                  value: "edad",
                  note: "Aquí el número ya va unido a 歳.",
                },
                {
                  slot: { jp: ruby("です") },
                  value: "respuesta",
                  note: "Cierre educado de la frase.",
                },
              ],
              notes: [
                {
                  es: "En esta etapa conviene pensar primero en el número y después en cómo suena con 歳.",
                },
              ],
            },
            {
              id: "pattern-005b-4",
              label: "Misma edad con も",
              pattern: ruby("[ホセ|ほせ]さんは[25歳|にじゅうごさい]です。[エマー|えまー]さんも[25歳|にじゅうごさい]です。"),
              meaning: "José tiene 25 años. Ema también tiene 25 años.",
              translation:
                "Si la segunda información coincide, も entra de forma natural igual que en lecciones anteriores.",
              structure: [
                {
                  slot: { jp: ruby("は") },
                  value: "tema base",
                  note: "Primera oración con información inicial.",
                },
                {
                  slot: { jp: ruby("も") },
                  value: "también",
                  note: "Reemplaza a は cuando la segunda información coincide.",
                },
              ],
              notes: [
                {
                  es: "Aquí も no es el foco central de la unidad, pero aparece de forma muy natural.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-005b-vocabulary",
      kind: "vocabulary",
      title: "Edad del 1 al 20",
      description:
        "Aquí fijamos como vocabulario base las edades más importantes de esta etapa. Igual que en 005a, el foco principal está en ver el número y leerlo con naturalidad; por eso no repetimos el value abajo.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 4,
          items: [
            { id: "age-1", jp: ruby("[1歳|いっさい]"), reading: "いっさい", meaning: "1 año", tags: ["edad", "especial"] },
            { id: "age-2", jp: ruby("[2歳|にさい]"), reading: "にさい", meaning: "2 años", tags: ["edad"] },
            { id: "age-3", jp: ruby("[3歳|さんさい]"), reading: "さんさい", meaning: "3 años", tags: ["edad"] },
            { id: "age-4", jp: ruby("[4歳|よんさい]"), reading: "よんさい", meaning: "4 años", tags: ["edad"] },
            { id: "age-5", jp: ruby("[5歳|ごさい]"), reading: "ごさい", meaning: "5 años", tags: ["edad"] },
            { id: "age-6", jp: ruby("[6歳|ろくさい]"), reading: "ろくさい", meaning: "6 años", tags: ["edad"] },
            { id: "age-7", jp: ruby("[7歳|ななさい]"), reading: "ななさい", meaning: "7 años", tags: ["edad"] },
            { id: "age-8", jp: ruby("[8歳|はっさい]"), reading: "はっさい", meaning: "8 años", tags: ["edad", "especial"] },
            { id: "age-9", jp: ruby("[9歳|きゅうさい]"), reading: "きゅうさい", meaning: "9 años", tags: ["edad"] },
            { id: "age-10", jp: ruby("[10歳|じゅっさい]"), reading: "じゅっさい", meaning: "10 años", tags: ["edad", "especial"] },
            { id: "age-11", jp: ruby("[11歳|じゅういっさい]"), reading: "じゅういっさい", meaning: "11 años", tags: ["edad", "irregularidad reaparece"] },
            { id: "age-12", jp: ruby("[12歳|じゅうにさい]"), reading: "じゅうにさい", meaning: "12 años", tags: ["edad"] },
            { id: "age-13", jp: ruby("[13歳|じゅうさんさい]"), reading: "じゅうさんさい", meaning: "13 años", tags: ["edad"] },
            { id: "age-14", jp: ruby("[14歳|じゅうよんさい]"), reading: "じゅうよんさい", meaning: "14 años", tags: ["edad"] },
            { id: "age-15", jp: ruby("[15歳|じゅうごさい]"), reading: "じゅうごさい", meaning: "15 años", tags: ["edad"] },
            { id: "age-16", jp: ruby("[16歳|じゅうろくさい]"), reading: "じゅうろくさい", meaning: "16 años", tags: ["edad"] },
            { id: "age-17", jp: ruby("[17歳|じゅうななさい]"), reading: "じゅうななさい", meaning: "17 años", tags: ["edad"] },
            { id: "age-18", jp: ruby("[18歳|じゅうはっさい]"), reading: "じゅうはっさい", meaning: "18 años", tags: ["edad", "irregularidad reaparece"] },
            { id: "age-19", jp: ruby("[19歳|じゅうきゅうさい]"), reading: "じゅうきゅうさい", meaning: "19 años", tags: ["edad"] },
            { id: "age-20", jp: ruby("[20歳|はたち]"), reading: "はたち", meaning: "20 años", tags: ["edad", "especial"] },
          ],
        },
      ],
    },
    {
      id: "lesson-005b-examples",
      kind: "examples",
      title: "Ejemplos guiados",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "example-005b-1",
              jp: ruby("[太郎|たろう]くんはおいくつですか。"),
              es: "¿Cuántos años tiene Tarō?",
              notes: [
                {
                  es: "Pregunta suave y común cuando quieres sonar un poco más amable.",
                },
              ],
            },
            {
              id: "example-005b-2",
              jp: ruby("[太郎|たろう]くんは[6歳|ろくさい]です。"),
              es: "Tarō tiene 6 años.",
            },
            {
              id: "example-005b-3",
              jp: ruby("[山田|やまだ]さんは[何歳|なんさい]ですか。"),
              es: "¿Qué edad tiene Yamada?",
            },
            {
              id: "example-005b-4",
              jp: ruby("[山田|やまだ]さんは[14歳|じゅうよんさい]です。"),
              es: "Yamada tiene 14 años.",
              breakdown: [{ label: "Bloque", jp: ruby("[10|じゅう] + [4歳|よんさい]"), es: "" }],
            },
            {
              id: "example-005b-5",
              jp: ruby("[テレサ|てれさ]ちゃんは[18歳|じゅうはっさい]ですか。"),
              es: "¿Teresa tiene 18 años?",
            },
            {
              id: "example-005b-6",
              jp: ruby("いいえ、[違|ちが]います。[19歳|じゅうきゅうさい]です。"),
              es: "No, no es así. Tiene 19 años.",
              notes: [
                {
                  es: "Buena forma para corregir una edad equivocada sin repetir todo desde cero.",
                },
              ],
            },
            {
              id: "example-005b-7",
              jp: ruby("[ホセ|ほせ]さんは[25歳|にじゅうごさい]です。"),
              es: "José tiene 25 años.",
            },
            {
              id: "example-005b-8",
              jp: ruby("[エマー|えまー]さんも[25歳|にじゅうごさい]です。"),
              es: "Emar también tiene 25 años.",
            },
            {
              id: "example-005b-9",
              jp: ruby("[妹|いもうと]は[1歳|いっさい]です。"),
              es: "Mi hermanita tiene 1 año.",
              notes: [
                {
                  es: "Aquí aparece una de las lecturas especiales más importantes: いっさい.",
                },
              ],
            },
            {
              id: "example-005b-10",
              jp: ruby("[兄|あに]は[20歳|はたち]です。"),
              es: "Mi hermano mayor tiene 20 años.",
              notes: [
                {
                  es: "はたち es una forma especial que debes fijar muy bien.",
                },
              ],
            },
            {
              id: "example-005b-11",
              jp: ruby("[弟|おとうと]は[11歳|じゅういっさい]です。"),
              es: "Mi hermano menor tiene 11 años.",
              breakdown: [{ label: "Bloque", jp: ruby("[10|じゅう] + [1歳|いっさい]"), es: "" }],
            },
            {
              id: "example-005b-12",
              jp: ruby("[娘|むすめ]は[8歳|はっさい]になりました。"),
              es: "Mi hija ya cumplió 8 años.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-005b-contrast",
      kind: "contrast",
      title: "Errores comunes y contrastes clave",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-005b-1",
              label: "1歳 no sigue la lectura base de 1 + さい",
              correct: {
                jp: ruby("[1歳|いっさい]"),
                es: "Lectura correcta.",
              },
              incorrect: {
                jp: ruby("[1歳|いちさい]"),
                es: "No es la forma que fijamos aquí.",
              },
              explanation:
                "Con 歳, 1 entra en una lectura especial: いっさい.",
            },
            {
              id: "contrast-005b-2",
              label: "8歳 también cambia",
              correct: {
                jp: ruby("[8歳|はっさい]"),
                es: "Lectura correcta.",
              },
              incorrect: {
                jp: ruby("[8歳|はちさい]"),
                es: "No es la forma base de esta unidad.",
              },
              explanation:
                "Con 歳, 8 no se fija como はちさい sino como はっさい.",
            },
            {
              id: "contrast-005b-3",
              label: "10歳 se fija como じゅっさい",
              correct: {
                jp: ruby("[10歳|じゅっさい]"),
                es: "Lectura base de trabajo.",
              },
              incorrect: {
                jp: ruby("[10歳|じゅうさい]"),
                es: "No es la forma que dejamos aquí.",
              },
              explanation:
                "Aquí conviene fijar じゅっさい como lectura base.",
            },
            {
              id: "contrast-005b-4",
              label: "20歳 tiene forma especial",
              correct: {
                jp: ruby("[20歳|はたち]"),
                es: "Forma clave de esta unidad.",
              },
              incorrect: {
                jp: ruby("[20歳|にじゅっさい]"),
                es: "Existe como variante, pero aquí fijamos primero はたち.",
              },
              explanation:
                "Para 20 años, la forma principal que te conviene automatizar ahora es はたち.",
            },
            {
              id: "contrast-005b-5",
              label: "La irregularidad reaparece más arriba",
              correct: {
                jp: ruby("[11歳|じゅういっさい] / [18歳|じゅうはっさい] / [21歳|にじゅういっさい]"),
                es: "La forma especial vuelve a aparecer cuando ese número reaparece dentro de otra edad.",
              },
              incorrect: {
                jp: ruby("[11歳|じゅういちさい] / [18歳|じゅうはちさい]"),
                es: "No siguen la lógica que fijamos aquí.",
              },
              explanation:
                "Si 1 y 8 cambian con 歳, esa irregularidad también vuelve cuando aparecen dentro de 11, 18, 21, 28, 31 y más arriba.",
            },
            {
              id: "contrast-005b-6",
              label: "おいくつ y 何歳 preguntan lo mismo, pero con distinto matiz",
              correct: {
                jp: ruby("おいくつですか。 / [何歳|なんさい]ですか。"),
                es: "Ambas preguntan la edad.",
              },
              incorrect: {
                jp: ruby("Aprender solo una."),
                es: "Es necesario recordar que existen ambas.",
              },
              explanation:
                "La diferencia principal está en el matiz de cortesía, no en el tema.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-005b-warning",
      kind: "warning",
      title: "Qué conviene hacer aquí",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "No intentes memorizarlo todo como lista plana",
          content:
            "Esta unidad funciona mejor si separas tres capas: primero la pregunta, después la respuesta base con 〜歳です, y por último las lecturas especiales. Si mezclas todo desde el inicio, la lección se vuelve más pesada de lo que realmente es.",
          bullets: [
            {
              es: "Primero fija:",
              jp: ruby("おいくつですか。 / [何歳|なんさい]ですか。 / 〜[歳|さい]です。"),
            },
            {
              es: "Después automatiza muy bien:",
              jp: ruby("[1歳|いっさい] / [8歳|はっさい] / [10歳|じゅっさい] / [20歳|はたち]。"),
            },
            {
              es: "Y solo entonces amplía a edades más altas como 21, 28 o 31.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-005b-practice",
      kind: "practice",
      title: "Práctica guiada",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Di varias veces en voz alta las preguntas base:",
              jp: ruby("おいくつですか。 / [何歳|なんさい]ですか。"),
            },
            {
              es: "Lee en voz alta del 1 al 10 con 歳:",
              jp: ruby("[1歳|いっさい]、[2歳|にさい]、[3歳|さんさい]、[4歳|よんさい]、[5歳|ごさい]、[6歳|ろくさい]、[7歳|ななさい]、[8歳|はっさい]、[9歳|きゅうさい]、[10歳|じゅっさい]。"),
            },
            {
              es: "Haz lo mismo del 11 al 20 prestando mucha atención a 11, 18 y 20.",
            },
            {
              es: "Practica pares que tienden a confundirse:",
              jp: ruby("[1歳|いっさい] ↔ [11歳|じゅういっさい] / [8歳|はっさい] ↔ [18歳|じゅうはっさい] / [10歳|じゅっさい] ↔ [20歳|はたち]。"),
            },
            {
              es: "Pregunta y responde con nombres reales o imaginarios:",
              jp: ruby("[マリア|まりあ]さんは[何歳|なんさい]ですか。→ [17歳|じゅうななさい]です。"),
            },
            {
              es: "Corrige información equivocada usando una respuesta corta:",
              jp: ruby("[16歳|じゅうろくさい]ですか。→ いいえ、[違|ちが]います。[17歳|じゅうななさい]です。"),
            },
            {
              es: "Haz mini series con も cuando la edad coincida entre dos personas.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-005b-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Puedo preguntar la edad con",
              jp: ruby("おいくつですか。 / [何歳|なんさい]ですか。"),
            },
            {
              es: "Puedo responder con",
              jp: ruby("〜[歳|さい]です。"),
              note: "teniendo cuidado con las lecturas especiales.",
            },
            {
              es: "Puedo leer con seguridad las edades del",
              jp: ruby("[1歳|いっさい] al [20歳|はたち]。"),
            },
            {
              es: "Reconozco como formas clave:",
              jp: ruby("[1歳|いっさい] / [8歳|はっさい] / [10歳|じゅっさい] / [20歳|はたち]。"),
            },
            {
              es: "Entiendo que algunas irregularidades vuelven a aparecer en",
              jp: ruby("[11歳|じゅういっさい] / [18歳|じゅうはっさい] / [21歳|にじゅういっさい]。"),
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-005b-quiz",
    title: "Quiz — Edad",
    description:
      "Repaso para comprobar si ya puedes preguntar y responder la edad, leer edades frecuentes y distinguir bien las lecturas especiales de 歳.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "single-choice",
        prompt: {
          es: "¿Cuál de estas preguntas suena más suave y cortés para preguntar la edad?",
        },
        choices: [
          { id: "a", label: { es: "何歳ですか。" } },
          { id: "b", label: { es: "おいくつですか。" } },
          { id: "c", label: { es: "何人ですか。" } },
          { id: "d", label: { es: "どこですか。" } },
        ],
        correctChoiceId: "b",
        explanation: "おいくつですか es la forma más suave y cortés de las dos preguntas base de esta unidad.",
        relatedSectionIds: ["lesson-005b-concept", "lesson-005b-structure"],
      },
      {
        id: "q2",
        type: "single-choice",
        prompt: {
          es: "¿Cuál es la lectura correcta de 1歳?",
        },
        choices: [
          { id: "a", label: { es: "いちさい" } },
          { id: "b", label: { es: "いっさい" } },
          { id: "c", label: { es: "ひとさい" } },
          { id: "d", label: { es: "いちっさい" } },
        ],
        correctChoiceId: "b",
        explanation: "1歳 entra en una lectura especial: いっさい.",
        relatedSectionIds: ["lesson-005b-vocabulary", "lesson-005b-contrast"],
      },
      {
        id: "q3",
        type: "single-choice",
        prompt: {
          es: "¿Cuál es la lectura correcta de 8歳?",
        },
        choices: [
          { id: "a", label: { es: "はちさい" } },
          { id: "b", label: { es: "はっさい" } },
          { id: "c", label: { es: "はっちさい" } },
          { id: "d", label: { es: "やっさい" } },
        ],
        correctChoiceId: "b",
        explanation: "8歳 se fija como はっさい.",
        relatedSectionIds: ["lesson-005b-vocabulary", "lesson-005b-contrast"],
      },
      {
        id: "q4",
        type: "single-choice",
        prompt: {
          es: "¿Cuál es la lectura que fijamos para 20歳 en esta lección?",
        },
        choices: [
          { id: "a", label: { es: "にじゅうさい" } },
          { id: "b", label: { es: "にじゅっさい" } },
          { id: "c", label: { es: "はたち" } },
          { id: "d", label: { es: "はっち" } },
        ],
        correctChoiceId: "c",
        explanation: "Aquí fijamos primero はたち como la forma clave para 20歳.",
        relatedSectionIds: ["lesson-005b-vocabulary", "lesson-005b-contrast"],
      },
      {
        id: "q5",
        type: "single-choice",
        prompt: {
          es: "¿Qué lectura corresponde a 18歳?",
        },
        choices: [
          { id: "a", label: { es: "じゅうはちさい" } },
          { id: "b", label: { es: "じゅうはっさい" } },
          { id: "c", label: { es: "はちじゅうさい" } },
          { id: "d", label: { es: "じゅうはちっさい" } },
        ],
        correctChoiceId: "b",
        explanation: "La irregularidad de 8 vuelve a aparecer: 18歳 = じゅうはっさい.",
        relatedSectionIds: ["lesson-005b-vocabulary", "lesson-005b-contrast"],
      },
      {
        id: "q6",
        type: "single-choice",
        prompt: {
          es: "¿Cuál corresponde a una respuesta natural de edad?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[16歳|じゅうろくさい]です。") } },
          { id: "b", label: { jp: ruby("[16歳|じゅうろくさい]ですか。") } },
          { id: "c", label: { jp: ruby("おいくつです。") } },
          { id: "d", label: { jp: ruby("[何歳|なんさい]です。") } },
        ],
        correctChoiceId: "a",
        explanation: "Para responder la edad, la forma base es número + 歳 + です.",
        relatedSectionIds: ["lesson-005b-structure", "lesson-005b-examples"],
      },
      {
        id: "q7",
        type: "single-choice",
        prompt: {
          es: "¿Qué pregunta corresponde mejor si quieres preguntar la edad de forma normal y directa?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[何歳|なんさい]ですか。") } },
          { id: "b", label: { jp: ruby("[何人|なんにん]ですか。") } },
          { id: "c", label: { jp: ruby("いつですか。") } },
          { id: "d", label: { jp: ruby("どれですか。") } },
        ],
        correctChoiceId: "a",
        explanation: "何歳ですか es la pregunta directa y normal para la edad.",
        relatedSectionIds: ["lesson-005b-concept", "lesson-005b-structure"],
      },
      {
        id: "q8",
        type: "single-choice",
        prompt: {
          es: "¿Qué número corresponde a じゅういっさい?",
        },
        choices: [
          { id: "a", label: { es: "1" } },
          { id: "b", label: { es: "10" } },
          { id: "c", label: { es: "11" } },
          { id: "d", label: { es: "21" } },
        ],
        correctChoiceId: "c",
        explanation: "じゅういっさい = 11歳.",
        relatedSectionIds: ["lesson-005b-vocabulary", "lesson-005b-examples"],
      },
      {
        id: "q9",
        type: "single-choice",
        prompt: {
          es: "Completa la lógica: ホセさんは25歳です。エマーさん___25歳です。",
        },
        choices: [
          { id: "a", label: { es: "は" } },
          { id: "b", label: { es: "も" } },
          { id: "c", label: { es: "が" } },
          { id: "d", label: { es: "を" } },
        ],
        correctChoiceId: "b",
        explanation: "Si la segunda persona también tiene la misma edad, も entra naturalmente.",
        relatedSectionIds: ["lesson-005b-structure", "lesson-005b-examples"],
      },
      {
        id: "q10",
        type: "single-choice",
        prompt: {
          es: "¿Cuál de estas lecturas sigue la base que fijamos para 17歳?",
        },
        choices: [
          { id: "a", label: { es: "じゅうしちさい" } },
          { id: "b", label: { es: "じゅうななさい" } },
          { id: "c", label: { es: "ななじゅうさい" } },
          { id: "d", label: { es: "じゅうななっさい" } },
        ],
        correctChoiceId: "b",
        explanation: "Aquí mantenemos なな como lectura base de trabajo: 17歳 = じゅうななさい.",
        relatedSectionIds: ["lesson-005b-vocabulary", "lesson-005b-practice"],
      },
      {
        id: "q11",
        type: "order-sentence",
        prompt: {
          es: "Ordena los bloques para formar una pregunta de edad con tono suave.",
        },
        tokens: [
          { id: "tok-11-1", value: "おいくつ", label: { jp: ruby("おいくつ") } },
          { id: "tok-11-2", value: "ですか", label: { jp: ruby("ですか。") } },
        ],
        correctOrder: ["おいくつ", "ですか"],
        answerLabel: {
          jp: ruby("おいくつですか。"),
          es: "¿Cuántos años tiene?",
        },
        explanation: "La pregunta suave se forma como おいくつ + ですか.",
        relatedSectionIds: ["lesson-005b-structure", "lesson-005b-practice"],
      },
      {
        id: "q12",
        type: "order-sentence",
        prompt: {
          es: "Ordena los bloques para responder: 'Tiene 14 años'.",
        },
        tokens: [
          { id: "tok-12-1", value: "14歳", label: { jp: ruby("[14歳|じゅうよんさい]") } },
          { id: "tok-12-2", value: "です", label: { jp: ruby("です。") } },
        ],
        correctOrder: ["14歳", "です"],
        answerLabel: {
          jp: ruby("[14歳|じゅうよんさい]です。"),
          es: "Tiene 14 años.",
        },
        explanation: "La respuesta básica es edad + です.",
        relatedSectionIds: ["lesson-005b-structure", "lesson-005b-examples"],
      },
      {
        id: "q13",
        type: "order-sentence",
        prompt: {
          es: "Ordena los bloques para expresar que Teresa también tiene 25 años.",
        },
        tokens: [
          { id: "tok-13-1", value: "テレサさん", label: { jp: ruby("[テレサ|てれさ]さん") } },
          { id: "tok-13-2", value: "も", label: { jp: ruby("も") } },
          { id: "tok-13-3", value: "25歳", label: { jp: ruby("[25歳|にじゅうごさい]") } },
          { id: "tok-13-4", value: "です", label: { jp: ruby("です。") } },
        ],
        correctOrder: ["テレサさん", "も", "25歳", "です"],
        answerLabel: {
          jp: ruby("[テレサ|てれさ]さんも[25歳|にじゅうごさい]です。"),
          es: "Teresa también tiene 25 años.",
        },
        explanation: "Cuando la misma información se repite, も entra en el lugar de は.",
        relatedSectionIds: ["lesson-005b-structure", "lesson-005b-examples"],
      },
      {
        id: "q14",
        type: "fill-blank",
        prompt: {
          es: "Escribe en hiragana la lectura de 10歳.",
        },
        acceptedAnswers: ["じゅっさい"],
        placeholder: "Escribe la lectura completa",
        explanation: "10歳 se fija aquí como じゅっさい.",
        relatedSectionIds: ["lesson-005b-vocabulary", "lesson-005b-contrast"],
      },
      {
        id: "q15",
        type: "fill-blank",
        prompt: {
          es: "Completa la lectura de 11歳:",
          jp: ruby("[11歳|じゅう___]"),
        },
        acceptedAnswers: ["いっさい"],
        placeholder: "Completa la parte faltante",
        explanation: "11歳 = じゅういっさい. La irregularidad de 1 vuelve a aparecer.",
        relatedSectionIds: ["lesson-005b-vocabulary", "lesson-005b-contrast"],
      },
      {
        id: "q16",
        type: "fill-blank",
        prompt: {
          es: "Completa para formar la respuesta correcta:",
          jp: ruby("[8歳|はっさい]___"),
        },
        acceptedAnswers: ["です", "です。"],
        placeholder: "Escribe el cierre",
        explanation: "La respuesta básica se completa con です.",
        relatedSectionIds: ["lesson-005b-structure", "lesson-005b-examples"],
      },
      {
        id: "q17",
        type: "fill-blank",
        prompt: {
          es: "Escribe en hiragana la lectura principal que fijamos para 20歳.",
        },
        acceptedAnswers: ["はたち"],
        placeholder: "Escribe la lectura",
        explanation: "Para 20歳, aquí fijamos はたち como lectura principal de trabajo.",
        relatedSectionIds: ["lesson-005b-vocabulary", "lesson-005b-contrast"],
      },
      {
        id: "q18",
        type: "fill-blank",
        prompt: {
          es: "Tu primera respuesta fue '[18歳|じゅうはっさい]です。' y quieres decir que otra persona también tiene la misma edad. Completa:",
          jp: ruby("[アナ|あな]さん___[18歳|じゅうはっさい]です。"),
        },
        acceptedAnswers: ["も"],
        placeholder: "Escribe la partícula",
        explanation: "Si la segunda información coincide, la partícula natural es も.",
        relatedSectionIds: ["lesson-005b-structure", "lesson-005b-examples"],
      },
    ],
  },
};

export default lesson005b;
