
// src/data/grammar/lessons/lesson-014b.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson014b: GrammarLesson = {
  id: "lesson-014b",
  slug: "numeros-grandes-100-1000-man-oku-cho",
  order: 17.1,
  level: "N5",
  status: "ready",
  title: "Números grandes",
  jpTitle: "かず 100〜兆",
  shortTitle: "Números grandes",
  description:
    "Cómo continuar la base numérica después del 99, aprender centenas y miles con sus irregularidades clave, entender el bloque japonés de 4 cifras y usar ese mismo bloque para leer números más grandes con 万・億・兆 sin depender del sistema de agrupación del español.",
  estimatedMinutes: 78,
  categoryTags: ["fundamentos", "numeros", "lectura", "patrones", "integracion"],
  grammarTags: [
    "100",
    "1000",
    "万",
    "億",
    "兆",
    "ひゃく",
    "せん",
    "さんびゃく",
    "ろっぴゃく",
    "はっぴゃく",
    "さんぜん",
    "はっせん",
    "bloque de 4 cifras",
  ],
  searchTerms: [
    "numeros grandes japones",
    "100 1000 10000 japones",
    "man oku chou",
    "bloque de 4 cifras japones",
    "lectura de numeros grandes japones",
    "cientos y miles japones",
    "numeros hasta man japones",
  ],
  relatedLessonSlugs: [
    "numeros-1-99",
    "edad-oikutsu-nansai",
    "contadores-basicos-tsu-ko-mai-hon-satsu-nin",
  ],
  relatedVocabularyTags: ["numeros", "lectura", "base"],
  objectives: [
    "Continuar la lógica de la unidad 005a sin tratar los números grandes como un tema aislado.",
    "Fijar las centenas y los miles, incluyendo las irregularidades más importantes.",
    "Entender que el japonés agrupa los números grandes en bloques de 4 cifras, no de 3 como el español.",
    "Construir un bloque completo de hasta 4 cifras antes de añadir 万・億・兆.",
    "Leer números hasta 万 con seguridad y ver 億・兆 como referencia estructural.",
    "Preparar una base limpia antes de pasar a precios, いくら y lectura de cantidades en contextos de compra.",
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
      id: "lesson-014b-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "Esta unidad continúa directamente la lógica de los números 1–99. La idea no es memorizar una lista gigantesca, sino seguir escalando el mismo sistema. Primero fijarás centenas y miles. Después aprenderás a leer un bloque completo de 4 cifras. Y recién entonces verás cómo ese bloque se repite con 万・億・兆 para formar números más grandes.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Primero trabajaremos formas base como:",
              jp: ruby("[100|ひゃく] / [300|さんびゃく] / [600|ろっぴゃく] / [800|はっぴゃく]。"),
            },
            {
              es: "Después veremos miles como:",
              jp: ruby("[1000|せん] / [3000|さんぜん] / [8000|はっせん]。"),
            },
            {
              es: "Y luego construiremos bloques más grandes como:",
              jp: ruby("[4826|よんせんはっぴゃくにじゅうろく] / [12000|いちまんにせん] / [30500|さんまんごひゃく]。"),
            },
          ],
        },
      ],
    },
    {
      id: "lesson-014b-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Esto sigue la misma lógica de la unidad 5, que fue la base de los números",
          content:
            "En la unidad 5 trabajaste la idea más importante: entender el patrón y no memorizar una lista infinita de formas sueltas. Aquí hacemos exactamente lo mismo. Primero amplías la base con centenas y miles. Después usas esa misma base para construir un bloque más grande.",
          bullets: [
            {
              jp: ruby("[24|にじゅうよん]"),
              es: "antes pensabas: decena + unidad",
            },
            {
              jp: ruby("[824|はっぴゃくにじゅうよん]"),
              es: "ahora añades una centena delante",
            },
            {
              jp: ruby("[4824|よんせんはっぴゃくにじゅうよん]"),
              es: "después añades la capa de miles",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "El japonés grande agrupa en 4 cifras",
          content:
            "Aquí está la idea más importante de toda la unidad. En español solemos agrupar los números grandes en bloques de 3 cifras. En japonés, lo más útil es agruparlos en bloques de 4. Por eso 万 aparece tan pronto y se vuelve el primer gran punto de referencia.",
          bullets: [
            {
              jp: ruby("[9999|きゅうせんきゅうひゃくきゅうじゅうきゅう]"),
              es: "esto forma un bloque completo de 4 cifras",
            },
            {
              jp: ruby("[10000|いちまん]"),
              es: "aquí empieza el siguiente bloque",
            },
            {
              jp: ruby("([グループ]) [兆|ちょう] ([グループ]) [億|おく] ([グループ]) [万|まん] ([グループ])"),
              es: "la estructura grande repite ese mismo bloque",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Primero lees el bloque; después añades el apellido",
          content:
            "Cuando aparece 万, 億 o 兆, no conviene pensar en una palabra nueva completamente aparte. Primero lees el bloque que va delante. Después añades 万, 億 o 兆 como etiqueta del bloque.",
          bullets: [
            {
              jp: ruby("[3456|さんぜんよんひゃくごじゅうろく][万|まん]"),
              es: "primero lees 3456, después añades まん (10,000)",
            },
            {
              jp: ruby("[12|じゅうに][億|おく]"),
              es: "primero lees 12, después añades おく (100,000,000)",
            },
            {
              jp: ruby("[1|いち][兆|ちょう]"),
              es: "mismo principio con 兆 (1,000,000,000,000)",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "100 y 1000 no funcionan igual que 10000",
          content:
            "Aquí conviene fijar una diferencia muy importante. En esta ruta base trabajaremos 100 como ひゃく y 1000 como せん. En cambio, para 10000, 100000000 y 1000000000000 sí usamos いち delante: いちまん, いちおく, いっちょう.",
          bullets: [
            {
              jp: ruby("[100|ひゃく] / [1000|せん]"),
              es: "sin いち al inicio en esta base",
            },
            {
              jp: ruby("[10000|いちまん] / [100000000|いちおく] / [1000000000000|いっちょう]"),
              es: "aquí sí aparece いち",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-014b-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-014b-1",
              label: "Centenas",
              pattern: ruby("([1|いち]〜[9|きゅう]) × [100|ひゃく]"),
              meaning: "Unidad × 100",
              translation:
                "Aquí la base es muy parecida a la de las decenas, pero debes fijar varias lecturas especiales. No conviene tratar todas las centenas como si fueran mecánicamente regulares.",
              structure: [
                {
                  slot: { jp: ruby("[100|ひゃく]") },
                  value: "1 × 100",
                  note: "Base sin いち delante en esta ruta.",
                },
                {
                  slot: { jp: ruby("[300|さんびゃく]") },
                  value: "3 × 100",
                  note: "Lectura especial muy importante.",
                },
                {
                  slot: { jp: ruby("[600|ろっぴゃく]") },
                  value: "6 × 100",
                  note: "Lectura especial muy importante.",
                },
                {
                  slot: { jp: ruby("[800|はっぴゃく]") },
                  value: "8 × 100",
                  note: "Lectura especial muy importante.",
                },
              ],
              notes: [
                "No trabajes 300 como さんひゃく ni 600 como ろくひゃく en esta unidad.",
                "Primero fija muy bien las centenas antes de combinarlas con decenas y unidades.",
              ],
            },
            {
              id: "pattern-014b-2",
              label: "Miles",
              pattern: ruby("([1|いち]〜[9|きゅう]) × [1000|せん]"),
              meaning: "Unidad × 1000",
              translation:
                "La lógica sigue creciendo por capas. Aquí también aparecen lecturas especiales importantes que debes fijar muy pronto.",
              structure: [
                {
                  slot: { jp: ruby("[1000|せん]") },
                  value: "1 × 1000",
                  note: "Base sin いち delante en esta unidad.",
                },
                {
                  slot: { jp: ruby("[3000|さんぜん]") },
                  value: "3 × 1000",
                  note: "Lectura especial muy importante.",
                },
                {
                  slot: { jp: ruby("[8000|はっせん]") },
                  value: "8 × 1000",
                  note: "Lectura especial muy importante.",
                },
              ],
              notes: [
                "No trabajes 3000 como さんせん ni 8000 como はちせん.",
                "Una vez fijada esta capa, ya puedes construir cualquier bloque hasta 9999.",
              ],
            },
            {
              id: "pattern-014b-3",
              label: "Bloque completo de 4 cifras",
              pattern: ruby("A[千|せん] + B[百|ひゃく] + C[十|じゅう] + D"),
              meaning: "Miles + centenas + decenas + unidades",
              translation:
                "Este es el bloque mental más importante de la unidad. El japonés grande se apoya en esta estructura. No tienes que usar siempre las cuatro posiciones: si falta una parte, simplemente no la lees.",
              structure: [
                {
                  slot: "A",
                  value: "miles",
                  note: "Va de 1 a 9 si esa posición existe.",
                },
                {
                  slot: "B",
                  value: "centenas",
                  note: "Va de 1 a 9 si esa posición existe.",
                },
                {
                  slot: "C",
                  value: "decenas",
                  note: "Va de 1 a 9 si esa posición existe.",
                },
                {
                  slot: "D",
                  value: "unidades",
                  note: "Va de 1 a 9 si esa posición existe.",
                },
              ],
              notes: [
                "El bloque puede ser completo como 4826 o incompleto como 3400, 2050 o 7008.",
                "Si una posición no aparece, no se pronuncia nada para ella.",
              ],
            },
            {
              id: "pattern-014b-4",
              label: "Bloque repetido con 万・億・兆",
              pattern: ruby("([グループ]) [兆|ちょう] ([グループ]) [億|おく] ([グループ]) [万|まん] ([グループ])"),
              meaning: "Bloque de 4 cifras + etiqueta de bloque",
              translation:
                "Una vez que dominas el bloque de 4 cifras, los números grandes dejan de ser una selva. Solo repites el mismo bloque y le añades 万, 億 o 兆 según el nivel.",
              structure: [
                {
                  slot: { jp: ruby("[万|まん]") },
                  value: "10,000",
                  note: "Primer gran punto de referencia que debes dominar bien.",
                },
                {
                  slot: { jp: ruby("[億|おく]") },
                  value: "100,000,000",
                  note: "Aquí entra como referencia estructural.",
                },
                {
                  slot: { jp: ruby("[兆|ちょう]") },
                  value: "1,000,000,000,000",
                  note: "También lo trabajamos aquí como referencia estructural.",
                },
              ],
              notes: [
                "Para el quiz y la base productiva fuerte de esta unidad nos concentraremos hasta 万.",
                "億 y 兆 se incluyen para que el sistema completo quede explicado desde el principio.",
              ],
            },
            {
              id: "pattern-014b-5",
              label: "Cómo leer un número largo",
              pattern: ruby("[12345678|せんにひゃくさんじゅうよんまんごせんろっぴゃくななじゅうはち]"),
              meaning: "1234万5678",
              translation:
                "La estrategia útil es separar primero el número por bloques de 4 cifras. Después lees cada bloque y le añades su etiqueta si corresponde.",
              structure: [
                {
                  slot: { jp: ruby("[1234|せんにひゃくさんじゅうよん]") },
                  value: "bloque alto",
                  note: "Aquí todavía es un bloque normal de 4 cifras.",
                },
                {
                  slot: { jp: ruby("[万|まん]") },
                  value: "etiqueta del bloque",
                  note: "Se añade después de leer el bloque anterior y trazamos la línea con el 万.",
                },
                {
                  slot: { jp: ruby("[5678|ごせんろっぴゃくななじゅうはち]") },
                  value: "bloque final",
                  note: "Se lee como bloque normal.",
                },
              ],
              notes: [
                "No intentes leer un número largo como una sola cadena sin estructura.",
              ],
            },
          ],
        },
        {
          type: "table",
          title: "Centenas base",
          description:
            "Aquí conviene fijar las centenas una por una, porque algunas siguen la lectura esperable y otras no.",
          columns: [
            { key: "number", label: "Número", width: "18%", align: "center" },
            { key: "reading", label: "Lectura", width: "34%", align: "center" },
            { key: "note", label: "Nota", width: "48%" },
          ],
          rows: [
            { id: "hundred-100", cells: { number: { jp: ruby("[100|ひゃく]") }, reading: "ひゃく", note: "Base sin いち delante." } },
            { id: "hundred-200", cells: { number: { jp: ruby("[200|にひゃく]") }, reading: "にひゃく", note: "Regular dentro de esta base." } },
            { id: "hundred-300", cells: { number: { jp: ruby("[300|さんびゃく]") }, reading: "さんびゃく", note: "Lectura especial importante." } },
            { id: "hundred-400", cells: { number: { jp: ruby("[400|よんひゃく]") }, reading: "よんひゃく", note: "Regular dentro de esta base." } },
            { id: "hundred-500", cells: { number: { jp: ruby("[500|ごひゃく]") }, reading: "ごひゃく", note: "Regular dentro de esta base." } },
            { id: "hundred-600", cells: { number: { jp: ruby("[600|ろっぴゃく]") }, reading: "ろっぴゃく", note: "Lectura especial importante." } },
            { id: "hundred-700", cells: { number: { jp: ruby("[700|ななひゃく]") }, reading: "ななひゃく", note: "Regular dentro de esta base." } },
            { id: "hundred-800", cells: { number: { jp: ruby("[800|はっぴゃく]") }, reading: "はっぴゃく", note: "Lectura especial importante." } },
            { id: "hundred-900", cells: { number: { jp: ruby("[900|きゅうひゃく]") }, reading: "きゅうひゃく", note: "Regular dentro de esta base." } },
          ],
          zebra: true,
        },
        {
          type: "table",
          title: "Miles base",
          description:
            "Igual que con las centenas, aquí hay que dejar muy firmes los miles regulares y los dos casos especiales más importantes.",
          columns: [
            { key: "number", label: "Número", width: "18%", align: "center" },
            { key: "reading", label: "Lectura", width: "34%", align: "center" },
            { key: "note", label: "Nota", width: "48%" },
          ],
          rows: [
            { id: "thousand-1000", cells: { number: { jp: ruby("[1000|せん]") }, reading: "せん", note: "Base sin いち delante." } },
            { id: "thousand-2000", cells: { number: { jp: ruby("[2000|にせん]") }, reading: "にせん", note: "Regular dentro de esta base." } },
            { id: "thousand-3000", cells: { number: { jp: ruby("[3000|さんぜん]") }, reading: "さんぜん", note: "Lectura especial importante." } },
            { id: "thousand-4000", cells: { number: { jp: ruby("[4000|よんせん]") }, reading: "よんせん", note: "Regular dentro de esta base." } },
            { id: "thousand-5000", cells: { number: { jp: ruby("[5000|ごせん]") }, reading: "ごせん", note: "Regular dentro de esta base." } },
            { id: "thousand-6000", cells: { number: { jp: ruby("[6000|ろくせん]") }, reading: "ろくせん", note: "Regular dentro de esta base." } },
            { id: "thousand-7000", cells: { number: { jp: ruby("[7000|ななせん]") }, reading: "ななせん", note: "Regular dentro de esta base." } },
            { id: "thousand-8000", cells: { number: { jp: ruby("[8000|はっせん]") }, reading: "はっせん", note: "Lectura especial importante." } },
            { id: "thousand-9000", cells: { number: { jp: ruby("[9000|きゅうせん]") }, reading: "きゅうせん", note: "Regular dentro de esta base." } },
          ],
          zebra: true,
        },
        {
          type: "table",
          title: "Bloques modelo de 4 cifras",
          description:
            "Aquí lo importante es ver cómo se desarma el bloque y cómo desaparecen las posiciones que no existen.",
          columns: [
            { key: "number", label: "Número", width: "22%", align: "center" },
            { key: "reading", label: "Lectura", width: "38%", align: "center" },
            { key: "breakdown", label: "Desglose", width: "40%" },
          ],
          rows: [
            { id: "block-2486", cells: { number: { jp: ruby("[2486|にせんよんひゃくはちじゅうろく]") }, reading: "にせんよんひゃくはちじゅうろく", breakdown: "2000 + 400 + 80 + 6" } },
            { id: "block-7310", cells: { number: { jp: ruby("[7310|ななせんさんびゃくじゅう]") }, reading: "ななせんさんびゃくじゅう", breakdown: "7000 + 300 + 10" } },
            { id: "block-4052", cells: { number: { jp: ruby("[4052|よんせんごじゅうに]") }, reading: "よんせんごじゅうに", breakdown: "4000 + 50 + 2" } },
            { id: "block-9800", cells: { number: { jp: ruby("[9800|きゅうせんはっぴゃく]") }, reading: "きゅうせんはっぴゃく", breakdown: "9000 + 800" } },
            { id: "block-1200", cells: { number: { jp: ruby("[1200|せんにひゃく]") }, reading: "せんにひゃく", breakdown: "1000 + 200" } },
          ],
          zebra: true,
        },
        {
          type: "table",
          title: "Referencia estructural con 万・億・兆",
          description:
            "Aquí todavía no buscamos que memorices muchísimos ejemplos enormes. La meta es ver el patrón estructural con claridad.",
          columns: [
            { key: "number", label: "Número", width: "26%", align: "center" },
            { key: "reading", label: "Lectura", width: "34%", align: "center" },
            { key: "note", label: "Idea", width: "40%" },
          ],
          rows: [
            { id: "large-10000", cells: { number: { jp: ruby("[10000|いちまん]") }, reading: "いちまん", note: "Primer bloque grande real del sistema." } },
            { id: "large-34000", cells: { number: { jp: ruby("[34000|さんまんよんせん]") }, reading: "さんまんよんせん", note: "3万 + 4000" } },
            { id: "large-12345678", cells: { number: { jp: ruby("[12345678|せんにひゃくさんじゅうよんまんごせんろっぴゃくななじゅうはち]") }, reading: "せんにひゃくさんじゅうよんまんごせんろっぴゃくななじゅうはち", note: "1234万 + 5678" } },
            { id: "large-100000000", cells: { number: { jp: ruby("[100000000|いちおく]") }, reading: "いちおく", note: "Referencia estructural con 億." } },
            { id: "large-1000000000000", cells: { number: { jp: ruby("[1000000000000|いっちょう]") }, reading: "いっちょう", note: "Referencia estructural con 兆." } },
          ],
          zebra: true,
        },
      ],
    },
    {
      id: "lesson-014b-examples",
      kind: "examples",
      title: "Ejemplos guiados",
      blocks: [
        {
          type: "example-group",
          items: [
            { id: "ex-014b-1", jp: ruby("[300|さんびゃく] / [600|ろっぴゃく] / [800|はっぴゃく]"), es: "Tres centenas que debes fijar sí o sí con lectura especial." },
            { id: "ex-014b-2", jp: ruby("[3000|さんぜん] / [8000|はっせん]"), es: "Los dos miles especiales que suelen romper la intuición del estudiante." },
            { id: "ex-014b-3", jp: ruby("[1408|せんよんひゃくはち]"), es: "1408 = 1000 + 400 + 8" },
            { id: "ex-014b-4", jp: ruby("[5206|ごせんにひゃくろく]"), es: "5206 = 5000 + 200 + 6" },
            { id: "ex-014b-5", jp: ruby("[7600|ななせんろっぴゃく]"), es: "7600 = 7000 + 600" },
            { id: "ex-014b-6", jp: ruby("[9034|きゅうせんさんじゅうよん]"), es: "9034 = 9000 + 30 + 4" },
            { id: "ex-014b-7", jp: ruby("[10000|いちまん]"), es: "Aquí aparece por primera vez el bloque grande con 万." },
            { id: "ex-014b-8", jp: ruby("[12000|いちまんにせん]"), es: "12000 = 1万 + 2000" },
            { id: "ex-014b-9", jp: ruby("[30500|さんまんごひゃく]"), es: "30500 = 3万 + 500" },
            { id: "ex-014b-10", jp: ruby("[48000|よんまんはっせん]"), es: "48000 = 4万 + 8000" },
            { id: "ex-014b-11", jp: ruby("[21040|にまんせんよんじゅう]"), es: "21040 = 2万 + 1040" },
            { id: "ex-014b-12", jp: ruby("[70300|ななまんさんびゃく]"), es: "70300 = 7万 + 300" },
            { id: "ex-014b-13", jp: ruby("[12876|いちまんにせんはっぴゃくななじゅうろく]"), es: "12876 = 1万 + 2876" },
            { id: "ex-014b-14", jp: ruby("[54001|ごまんよんせんいち]"), es: "54001 = 5万 + 4001" },
          ],
        },
      ],
    },
    {
      id: "lesson-014b-contrast",
      kind: "contrast",
      title: "Contrastes que conviene fijar",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-014b-1",
              label: "100 vs 10000",
              correct: {
                jp: ruby("[100|ひゃく] / [10000|いちまん]"),
                es: "100 y 10000 no siguen la misma lógica inicial.",
              },
              explanation:
                "En esta base trabajamos 100 como ひゃく y 1000 como せん, pero 10000 ya entra como いちまん.",
            },
            {
              id: "contrast-014b-2",
              label: "300 vs 3000",
              correct: {
                jp: ruby("[300|さんびゃく] / [3000|さんぜん]"),
                es: "Las dos son especiales, pero no cambian de la misma manera.",
              },
              explanation:
                "Conviene fijarlas como pareja visual porque muchos estudiantes intentan regularizarlas y se equivocan.",
            },
            {
              id: "contrast-014b-3",
              label: "Bloque de 3 cifras del español vs bloque de 4 cifras del japonés",
              correct: {
                jp: ruby("[12345678|せんにひゃくさんじゅうよんまんごせんろっぴゃくななじゅうはち]"),
                es: "En japonés conviene pensar 1234万5678.",
              },
              explanation:
                "Aquí el error típico es intentar agrupar como en español. Esta unidad te pide cambiar esa costumbre y empezar a ver bloques de 4.",
            },
            {
              id: "contrast-014b-4",
              label: "Regularidad aparente vs lectura real",
              correct: {
                jp: ruby("[600|ろっぴゃく] / [800|はっぴゃく] / [8000|はっせん]"),
                es: "La estructura se entiende por patrón, pero algunas lecturas deben fijarse como especiales.",
              },
              explanation:
                "La matemática ayuda a construir el número, pero no siempre basta para adivinar la lectura exacta.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-014b-warning",
      kind: "warning",
      title: "Errores típicos",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "No cambies al sistema del español cuando el número crece",
          content:
            "Aquí el error más común es que el alumno entiende bien 100 y 1000, pero al llegar a 10000 vuelve sin querer al sistema mental del español. Esta unidad exige mantener la lógica japonesa: primero el bloque de 4 cifras, luego la etiqueta del bloque.",
          bullets: [
            {
              jp: ruby("[34000|さんまんよんせん]"),
              es: "no conviene pensar “treinta y cuatro mil” como bloque de 3 cifras, sino 3万 + 4000",
            },
            {
              jp: ruby("[12345678|せんにひゃくさんじゅうよんまんごせんろっぴゃくななじゅうはち]"),
              es: "hay que verlo como 1234万5678",
            },
            {
              jp: ruby("[300|さんびゃく] / [3000|さんぜん]"),
              es: "tampoco conviene inventar lecturas regulares donde hay formas especiales",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-014b-practice",
      kind: "practice",
      title: "Práctica guiada antes del quiz",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Lee en voz alta primero las centenas del",
              jp: ruby("[100|ひゃく] al [900|きゅうひゃく]"),
              note: "sin saltarte los casos especiales.",
            },
            {
              es: "Haz lo mismo con los miles del",
              jp: ruby("[1000|せん] al [9000|きゅうせん]"),
              note: "y compara 3000 y 8000 con las otras formas.",
            },
            {
              es: "Después toma números de 4 cifras al azar y desármalos en bloques.",
              jp: ruby("[4826|よんせんはっぴゃくにじゅうろく] = 4000 + 800 + 20 + 6。"),
            },
            {
              es: "Cuando eso ya salga bien, pasa a números con",
              jp: ruby("[万|まん]"),
              note: "y sepáralos como bloque alto + bloque final.",
            },
            {
              es: "Por último, mira un ejemplo con",
              jp: ruby("[億|おく] y [兆|ちょう]"),
              note: "solo para fijar el mapa completo del sistema, aunque el dominio fuerte de esta unidad llegue hasta 万.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-014b-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Puedo leer con seguridad las centenas del",
              jp: ruby("[100|ひゃく] al [900|きゅうひゃく]"),
              note: "incluyendo 300, 600 y 800.",
            },
            {
              es: "Puedo leer con seguridad los miles del",
              jp: ruby("[1000|せん] al [9000|きゅうせん]"),
              note: "incluyendo 3000 y 8000.",
            },
            {
              es: "Puedo construir un bloque completo de 4 cifras.",
            },
            {
              es: "Entiendo que el japonés grande agrupa en bloques de",
              jp: ruby("[4|よん]"),
              note: "y no de 3 como el español.",
            },
            {
              es: "Sé usar",
              jp: ruby("[万|まん]"),
              note: "como primer gran bloque de trabajo y reconozco 億・兆 como extensión estructural.",
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-014b-quiz",
    title: "Quiz — Números grandes",
    description:
      "Repaso de centenas, miles y números hasta 万. Aquí el foco es leer la estructura con seguridad y fijar las lecturas más importantes.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      { id: "q1", type: "fill-blank", prompt: { es: "Completa la lectura de 100:", jp: ruby("[100|___]") }, acceptedAnswers: ["ひゃく"], placeholder: "Escribe la lectura", explanation: "100 se fija aquí como ひゃく, sin いち delante.", relatedSectionIds: ["lesson-014b-structure", "lesson-014b-summary"] },
      { id: "q2", type: "fill-blank", prompt: { es: "Completa la lectura de 300:", jp: ruby("[300|___]") }, acceptedAnswers: ["さんびゃく"], placeholder: "Escribe la lectura", explanation: "300 tiene lectura especial: さんびゃく.", relatedSectionIds: ["lesson-014b-structure", "lesson-014b-contrast"] },
      { id: "q3", type: "fill-blank", prompt: { es: "Completa la lectura de 600:", jp: ruby("[600|___]") }, acceptedAnswers: ["ろっぴゃく"], placeholder: "Escribe la lectura", explanation: "600 tiene lectura especial: ろっぴゃく.", relatedSectionIds: ["lesson-014b-structure", "lesson-014b-contrast"] },
      { id: "q4", type: "fill-blank", prompt: { es: "Completa la lectura de 800:", jp: ruby("[800|___]") }, acceptedAnswers: ["はっぴゃく"], placeholder: "Escribe la lectura", explanation: "800 tiene lectura especial: はっぴゃく.", relatedSectionIds: ["lesson-014b-structure", "lesson-014b-contrast"] },
      { id: "q5", type: "fill-blank", prompt: { es: "Completa la lectura de 1000:", jp: ruby("[1000|___]") }, acceptedAnswers: ["せん"], placeholder: "Escribe la lectura", explanation: "1000 se trabaja aquí como せん, sin いち delante.", relatedSectionIds: ["lesson-014b-structure", "lesson-014b-summary"] },
      { id: "q6", type: "fill-blank", prompt: { es: "Completa la lectura de 3000:", jp: ruby("[3000|___]") }, acceptedAnswers: ["さんぜん"], placeholder: "Escribe la lectura", explanation: "3000 tiene lectura especial: さんぜん.", relatedSectionIds: ["lesson-014b-structure", "lesson-014b-contrast"] },
      { id: "q7", type: "fill-blank", prompt: { es: "Completa la lectura de 8000:", jp: ruby("[8000|___]") }, acceptedAnswers: ["はっせん"], placeholder: "Escribe la lectura", explanation: "8000 tiene lectura especial: はっせん.", relatedSectionIds: ["lesson-014b-structure", "lesson-014b-contrast"] },
      { id: "q8", type: "fill-blank", prompt: { es: "Completa la lectura de 1200:", jp: ruby("[1200|___]") }, acceptedAnswers: ["せんにひゃく"], placeholder: "Escribe la lectura", explanation: "1200 = 1000 + 200 → せんにひゃく.", relatedSectionIds: ["lesson-014b-structure", "lesson-014b-examples"] },
      { id: "q9", type: "fill-blank", prompt: { es: "Completa la lectura de 3400:", jp: ruby("[3400|___]") }, acceptedAnswers: ["さんぜんよんひゃく"], placeholder: "Escribe la lectura", explanation: "3400 = 3000 + 400 → さんぜんよんひゃく.", relatedSectionIds: ["lesson-014b-structure", "lesson-014b-examples"] },
      { id: "q10", type: "fill-blank", prompt: { es: "Completa la lectura de 7600:", jp: ruby("[7600|___]") }, acceptedAnswers: ["ななせんろっぴゃく"], placeholder: "Escribe la lectura", explanation: "7600 = 7000 + 600 → ななせんろっぴゃく.", relatedSectionIds: ["lesson-014b-structure", "lesson-014b-examples"] },
      { id: "q11", type: "fill-blank", prompt: { es: "Completa la lectura de 9999:", jp: ruby("[9999|___]") }, acceptedAnswers: ["きゅうせんきゅうひゃくきゅうじゅうきゅう"], placeholder: "Escribe la lectura", explanation: "Aquí aparece un bloque completo de 4 cifras: 9000 + 900 + 90 + 9.", relatedSectionIds: ["lesson-014b-structure", "lesson-014b-summary"] },
      { id: "q12", type: "fill-blank", prompt: { es: "Completa la lectura de 10000:", jp: ruby("[10000|___]") }, acceptedAnswers: ["いちまん"], placeholder: "Escribe la lectura", explanation: "10000 se fija aquí como いちまん.", relatedSectionIds: ["lesson-014b-structure", "lesson-014b-summary"] },
      { id: "q13", type: "fill-blank", prompt: { es: "Completa la lectura de 12000:", jp: ruby("[12000|___]") }, acceptedAnswers: ["いちまんにせん"], placeholder: "Escribe la lectura", explanation: "12000 = 1万 + 2000 → いちまんにせん.", relatedSectionIds: ["lesson-014b-structure", "lesson-014b-examples"] },
      { id: "q14", type: "fill-blank", prompt: { es: "Completa la lectura de 30500:", jp: ruby("[30500|___]") }, acceptedAnswers: ["さんまんごひゃく"], placeholder: "Escribe la lectura", explanation: "30500 = 3万 + 500 → さんまんごひゃく.", relatedSectionIds: ["lesson-014b-structure", "lesson-014b-examples"] },
      { id: "q15", type: "fill-blank", prompt: { es: "Completa la lectura de 48000:", jp: ruby("[48000|___]") }, acceptedAnswers: ["よんまんはっせん"], placeholder: "Escribe la lectura", explanation: "48000 = 4万 + 8000 → よんまんはっせん.", relatedSectionIds: ["lesson-014b-structure", "lesson-014b-examples"] },
      { id: "q16", type: "fill-blank", prompt: { es: "Completa la lectura de 21040:", jp: ruby("[21040|___]") }, acceptedAnswers: ["にまんせんよんじゅう"], placeholder: "Escribe la lectura", explanation: "21040 = 2万 + 1040 → にまんせんよんじゅう.", relatedSectionIds: ["lesson-014b-structure", "lesson-014b-examples"] },
      { id: "q17", type: "fill-blank", prompt: { es: "Completa la lectura de 70300:", jp: ruby("[70300|___]") }, acceptedAnswers: ["ななまんさんびゃく"], placeholder: "Escribe la lectura", explanation: "70300 = 7万 + 300 → ななまんさんびゃく.", relatedSectionIds: ["lesson-014b-structure", "lesson-014b-examples"] },
      { id: "q18", type: "fill-blank", prompt: { es: "Completa la lectura de 4509:", jp: ruby("[4509|___]") }, acceptedAnswers: ["よんせんごひゃくきゅう"], placeholder: "Escribe la lectura", explanation: "4509 = 4000 + 500 + 9 → よんせんごひゃくきゅう.", relatedSectionIds: ["lesson-014b-structure", "lesson-014b-examples"] },
      { id: "q19", type: "fill-blank", prompt: { es: "Completa la lectura de 12876:", jp: ruby("[12876|___]") }, acceptedAnswers: ["いちまんにせんはっぴゃくななじゅうろく"], placeholder: "Escribe la lectura", explanation: "12876 = 1万 + 2876 → いちまんにせんはっぴゃくななじゅうろく.", relatedSectionIds: ["lesson-014b-structure", "lesson-014b-examples"] },
      { id: "q20", type: "fill-blank", prompt: { es: "Completa la lectura de 54001:", jp: ruby("[54001|___]") }, acceptedAnswers: ["ごまんよんせんいち"], placeholder: "Escribe la lectura", explanation: "54001 = 5万 + 4001 → ごまんよんせんいち.", relatedSectionIds: ["lesson-014b-structure", "lesson-014b-examples"] },
    ],
  },
};

export default lesson014b;
