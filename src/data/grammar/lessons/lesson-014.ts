//src/data/grammar/lessons/lesson-014.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson014: GrammarLesson = {
  id: "lesson-014",
  slug: "contadores-basicos-tsu-ko-mai-hon-satsu-nin",
  order: 17,
  level: "N5",
  status: "ready",
  title: "Contadores básicos I",
  jpTitle: "つ・個・枚・本・冊・人",
  shortTitle: "Contadores básicos",
  description:
    "Cómo empezar a usar contadores básicos como つ・個・枚・本・冊・人, entender qué tipo de cosas cuenta cada uno, fijar sus primeras irregularidades y usarlos en pedidos simples y escenas de tienda sin intentar memorizar todos los contadores del japonés de una sola vez.",
  estimatedMinutes: 74,
  categoryTags: ["fundamentos", "contadores", "numeros", "pedidos", "lectura", "integracion"],
  grammarTags: [
    "つ",
    "個",
    "枚",
    "本",
    "冊",
    "人",
    "これをください",
    "〜をください",
    "contador",
    "número + contador",
  ],
  searchTerms: [
    "contadores basicos japones",
    "tsu ko mai hon satsu nin",
    "hitotsu futatsu mittsu",
    "ikko sanbon hitori",
    "kore o kudasai",
    "como pedir objetos en japones",
    "counter words basic japanese",
  ],
  relatedLessonSlugs: [
    "numeros-1-99",
    "edad-oikutsu-nansai",
    "arimasu-imasu-existencia-basica",
    "posiciones-basicas-to",
    "lugares-demostrativos-koko-soko-asoko-kochira",
  ],
  relatedVocabularyTags: ["numeros", "tienda", "comida", "objetos", "personas", "base"],
  objectives: [
    "Entender qué es un contador y por qué en japonés no basta con saber el número solo.",
    "Usar de forma básica los contadores つ・個・枚・本・冊・人.",
    "Fijar la serie completa de つ del 1 al 10 como vocabulario base.",
    "Reconocer primeras irregularidades frecuentes como 1個, 1本, 3本, 1冊, 1人 y 2人.",
    "Hacer pedidos simples con 〜をください y empezar a leer grupos más largos con dos productos distintos.",
    "Preparar una base limpia antes de pasar a contadores más específicos y a la tabla general de la app.",
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
      id: "lesson-014-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "Hasta ahora ya dejaste bastante firme la base numérica, la edad, los demostrativos, の, la existencia y la ubicación. Ahora entramos a un tema muy japonés y muy necesario: los contadores. En esta unidad no vamos a intentar cubrirlos todos. La idea es construir una primera base muy usable con algunos de los más frecuentes, entender cómo funcionan y empezar a pedir cosas en escenas simples de tienda.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Verás un contador general muy importante:",
              jp: ruby("[一つ|ひとつ] / [二つ|ふたつ] / [三つ|みっつ] ... [十|とお]。"),
            },
            {
              es: "Y también empezarás a usar contadores más específicos como:",
              jp: ruby("[1個|いっこ] / [2枚|にまい] / [3本|さんぼん] / [1冊|いっさつ] / [2人|ふたり]。"),
            },
            {
              es: "Al final podrás hacer pedidos simples como:",
              jp: ruby("これをください。 / りんごを[一つ|ひとつ]ください。 / チーズバーガー[2|ふた]つとテリヤキバーガー[3|みっつ]をください。"),
            },
          ],
        },
      ],
    },
    {
      id: "lesson-014-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "En japonés no suele bastar con decir solo el número",
          content:
            "En esta unidad aparece con fuerza una idea importante: en japonés normalmente no dices simplemente “tres” o “cinco” cuando quieres contar cosas. Lo más natural es unir el número con un contador que diga qué tipo de cosa estás contando.",
          bullets: [
            {
              jp: ruby("[三つ|みっつ]"),
              es: "tres cosas, de forma general",
            },
            {
              jp: ruby("[3枚|さんまい]"),
              es: "tres cosas planas y delgadas",
            },
            {
              jp: ruby("[3本|さんぼん]"),
              es: "tres objetos largos o cilíndricos",
            },
            {
              jp: ruby("[3人|さんにん]"),
              es: "tres personas",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "No todos los contadores sirven para todo",
          content:
            "Aquí no conviene aprender una traducción literal única, sino una lógica de uso. つ funciona como contador general y muy cómodo para empezar. Los otros ya te obligan a mirar la forma o el tipo del referente: cosas pequeñas, cosas planas, objetos largos, libros o personas.",
          bullets: [
            {
              jp: ruby("[一つ|ひとつ]"),
              es: "general / muy útil para comenzar",
            },
            {
              jp: ruby("[1個|いっこ]"),
              es: "objetos pequeños o unidades individuales",
            },
            {
              jp: ruby("[1枚|いちまい]"),
              es: "cosas planas y delgadas",
            },
            {
              jp: ruby("[1本|いっぽん]"),
              es: "objetos largos o cilíndricos",
            },
            {
              jp: ruby("[1冊|いっさつ]"),
              es: "libros, cuadernos, revistas",
            },
            {
              jp: ruby("[1人|ひとり]"),
              es: "personas",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Esta unidad mezcla dos formas de escribir a propósito",
          content:
            "Aquí seguiremos una regla pedagógica clara para que la lectura se vuelva más fácil. Con つ fijaremos la serie tradicional en kanji + lectura, porque así esa familia se recuerda mejor como vocabulario. En los otros contadores usaremos número arábigo + contador, porque eso ayuda a ver la estructura con más rapidez.",
          bullets: [
            {
              jp: ruby("[一つ|ひとつ] / [二つ|ふたつ] / [三つ|みっつ]"),
              es: "la serie general つ la fijamos como vocabulario completo",
            },
            {
              jp: ruby("[1個|いっこ] / [2枚|にまい] / [3本|さんぼん]"),
              es: "los otros contadores se trabajarán con número visible + contador",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Contar y pedir no son dos temas separados",
          content:
            "En cuanto aprendes un contador, puedes usarlo en escenas reales. Una de las más útiles para empezar es pedir algo en una tienda o mostrador. Por eso aquí verás desde pronto patrones como これをください y AをNカウンターください.",
          bullets: [
            {
              jp: ruby("これをください。"),
              es: "dame esto / quisiera esto",
            },
            {
              jp: ruby("りんごを[一つ|ひとつ]ください。"),
              es: "quisiera una manzana",
            },
            {
              jp: ruby("ノートを[2冊|にさつ]ください。"),
              es: "quisiera dos cuadernos",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-014-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-014-1",
              label: "Número + contador",
              pattern: ruby("N + カウンター"),
              meaning: "N unidades del tipo que marca el contador.",
              translation:
                "La base mental de esta unidad es simple: primero decides cuántas unidades quieres contar, y después eliges el contador que corresponda al tipo de cosa.",
              structure: [
                {
                  slot: "N",
                  value: "número",
                  note: {
                    es: "Puede aparecer como serie fija con つ o como número visible en otros contadores, por ejemplo:",
                    jp: ruby("[一つ|ひとつ] / [二つ|ふたつ] / [3枚|さんまい] / [5本|ごほん]。"),
                  },
                },
                {
                  slot: "カウンター",
                  value: "contador",
                  note: {
                    es: "Aquí trabajaremos con:",
                    jp: ruby("つ / [個|こ] / [枚|まい] / [本|ほん] / [冊|さつ] / [人|にん]。"),
                  },
                },
              ],
              notes: [
                {
                  es: "No intentes memorizar todos los contadores del japonés de una sola vez.",
                },
                {
                  es: "En esta unidad nos concentramos en una base muy frecuente y muy utilizable.",
                },
              ],
            },
            {
              id: "pattern-014-2",
              label: "Pedir una cosa con contador",
              pattern: ruby("A を Nカウンター ください。"),
              meaning: "Quisiera A en esa cantidad.",
              translation:
                "Este patrón es muy útil para pedidos simples. A entra como el producto u objeto que quieres pedir; después añades la cantidad con su contador.",
              structure: [
                {
                  slot: "A",
                  value: "objeto pedido",
                  note: {
                    es: "Puede ser algo como:",
                    jp: ruby("りんご / ノート / [写真|しゃしん] / ペットボトル。"),
                  },
                },
                {
                  slot: { jp: ruby("を") },
                  value: "marca del objeto pedido",
                  note: "Aquí la pieza principal del pedido aparece antes de la cantidad.",
                },
                {
                  slot: "Nカウンター",
                  value: "cantidad",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[一つ|ひとつ] / [2冊|にさつ] / [3本|さんぼん]。"),
                  },
                },
                {
                  slot: { jp: ruby("ください") },
                  value: "pedido",
                  note: "Lo trabajamos aquí como frase fija muy útil para tienda o mostrador.",
                },
              ],
              notes: [
                {
                  es: "Aquí no hace falta abrir todavía todas las teorías del verbo ください; basta con dominar el uso práctico del patrón.",
                },
              ],
            },
            {
              id: "pattern-014-3",
              label: "Dos pedidos en la misma frase",
              pattern: ruby("A Nカウンター と B Nカウンター を ください。"),
              meaning: "Quisiera A en esa cantidad y B en esa otra cantidad.",
              translation:
                "Aquí と une dos grupos nominales completos. Cada grupo tiene su objeto y su cantidad. Todo el conjunto sigue funcionando como lo que pides en la oración.",
              structure: [
                {
                  slot: "A Nカウンター",
                  value: "primer grupo nominal",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("チーズバーガー[2|ふた]つ / [写真|しゃしん][3枚|さんまい]。"),
                  },
                },
                {
                  slot: { jp: ruby("と") },
                  value: "une grupos",
                  note: "No une verbos ni ideas abstractas aquí: une dos bloques nominales completos.",
                },
                {
                  slot: "B Nカウンター",
                  value: "segundo grupo nominal",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("テリヤキバーガー[3|みっつ] / ノート[2冊|にさつ]。"),
                  },
                },
              ],
              notes: [
                {
                  es: "Piensa este patrón como una lista compacta: un grupo + と + otro grupo.",
                },
              ],
            },
            {
              id: "pattern-014-4",
              label: "Contar dentro de una escena",
              pattern: ruby("A が Nカウンター あります / います。"),
              meaning: "Hay / están N unidades de A.",
              translation:
                "Esta estructura conecta directamente con la unidad de existencia. El referente sigue marcado con が, pero ahora ya no aparece solo: lleva una cantidad con contador.",
              structure: [
                {
                  slot: "A",
                  value: "referente",
                  note: {
                    es: "Puede ser algo como:",
                    jp: ruby("りんご / ノート / [猫|ねこ] / [学生|がくせい]。"),
                  },
                },
                {
                  slot: { jp: ruby("が") },
                  value: "marca del referente",
                  note: "Sigue funcionando igual que en あります / います.",
                },
                {
                  slot: "Nカウンター",
                  value: "cantidad",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[三つ|みっつ] / [2冊|にさつ] / [3人|さんにん]。"),
                  },
                },
                {
                  slot: { jp: ruby("あります / います") },
                  value: "verbo final",
                  note: "Se elige según el referente, igual que en la unidad 010.",
                },
              ],
              notes: [
                {
                  es: "Contar dentro de una escena te obliga a pensar a la vez en cantidad y en tipo de referente.",
                },
              ],
            },
          ],
        },
        {
          type: "table",
          title: "Mapa rápido de los contadores que trabajaremos aquí",
          description:
            "Esta primera tabla te da una visión global. No intentes memorizarlo todo a la vez: úsala como mapa mental para distinguir qué tipo de cosas cuenta cada familia.",
          columns: [
            { key: "counter", label: "Contador", align: "center", width: "18%" },
            { key: "use", label: "Uso básico", width: "34%" },
            { key: "examples", label: "Ejemplos típicos", width: "48%" },
          ],
          rows: [
            {
              id: "map-tsu",
              cells: {
                counter: { jp: ruby("つ") },
                use: "contador general para empezar",
                examples: { jp: ruby("りんご / クッキー / みかん / これ") },
              },
            },
            {
              id: "map-ko",
              cells: {
                counter: { jp: ruby("[個|こ]") },
                use: "objetos pequeños o unidades individuales",
                examples: { jp: ruby("りんご / [卵|たまご] / みかん / ケーキ") },
              },
            },
            {
              id: "map-mai",
              cells: {
                counter: { jp: ruby("[枚|まい]") },
                use: "cosas planas y delgadas",
                examples: { jp: ruby("[写真|しゃしん] / [紙|かみ] / シャツ / [切手|きって]") },
              },
            },
            {
              id: "map-hon",
              cells: {
                counter: { jp: ruby("[本|ほん]") },
                use: "objetos largos o cilíndricos",
                examples: { jp: ruby("[鉛筆|えんぴつ] / [傘|かさ] / ペットボトル / バナナ") },
              },
            },
            {
              id: "map-satsu",
              cells: {
                counter: { jp: ruby("[冊|さつ]") },
                use: "libros, cuadernos, revistas",
                examples: { jp: ruby("[本|ほん] / ノート / [雑誌|ざっし] / [辞書|じしょ]") },
              },
            },
            {
              id: "map-nin",
              cells: {
                counter: { jp: ruby("[人|にん]") },
                use: "personas",
                examples: { jp: ruby("[学生|がくせい] / [客|きゃく] / [店員|てんいん] / [先生|せんせい]") },
              },
            },
          ],
          zebra: true,
        },
        {
          type: "table",
          title: "Serie base de つ",
          description:
            "Aquí sí conviene memorizar la serie como vocabulario fijo. Esta familia se vuelve muy útil cuando todavía no dominas todos los contadores específicos.",
          columns: [
            { key: "form", label: "Forma", width: "25%", align: "center" },
            { key: "reading", label: "Lectura", width: "25%", align: "center" },
            { key: "meaning", label: "Idea base", width: "50%" },
          ],
          rows: [
            { id: "tsu-1", cells: { form: { jp: ruby("[一つ|ひとつ]") }, reading: "ひとつ", meaning: "una cosa / una unidad general" } },
            { id: "tsu-2", cells: { form: { jp: ruby("[二つ|ふたつ]") }, reading: "ふたつ", meaning: "dos cosas" } },
            { id: "tsu-3", cells: { form: { jp: ruby("[三つ|みっつ]") }, reading: "みっつ", meaning: "tres cosas" } },
            { id: "tsu-4", cells: { form: { jp: ruby("[四つ|よっつ]") }, reading: "よっつ", meaning: "cuatro cosas" } },
            { id: "tsu-5", cells: { form: { jp: ruby("[五つ|いつつ]") }, reading: "いつつ", meaning: "cinco cosas" } },
            { id: "tsu-6", cells: { form: { jp: ruby("[六つ|むっつ]") }, reading: "むっつ", meaning: "seis cosas" } },
            { id: "tsu-7", cells: { form: { jp: ruby("[七つ|ななつ]") }, reading: "ななつ", meaning: "siete cosas" } },
            { id: "tsu-8", cells: { form: { jp: ruby("[八つ|やっつ]") }, reading: "やっつ", meaning: "ocho cosas" } },
            { id: "tsu-9", cells: { form: { jp: ruby("[九つ|ここのつ]") }, reading: "ここのつ", meaning: "nueve cosas" } },
            { id: "tsu-10", cells: { form: { jp: ruby("[十|とお]") }, reading: "とお", meaning: "diez cosas" } },
          ],
          compact: true,
          zebra: true,
        },
        {
            type: "table",
            title: "Primeras formas que conviene fijar ya",
            description:
                "No todas estas familias se comportan igual. Esta tabla junta las formas más importantes del 1 al 10 para que veas dónde la lectura se mantiene y dónde empieza a cambiar.",
            columns: [
                { key: "counter", label: "Contador", width: "14%" },
                { key: "one", label: "1", align: "center", width: "8.6%" },
                { key: "two", label: "2", align: "center", width: "8.6%" },
                { key: "three", label: "3", align: "center", width: "8.6%" },
                { key: "four", label: "4", align: "center", width: "8.6%" },
                { key: "five", label: "5", align: "center", width: "8.6%" },
                { key: "six", label: "6", align: "center", width: "8.6%" },
                { key: "seven", label: "7", align: "center", width: "8.6%" },
                { key: "eight", label: "8", align: "center", width: "8.6%" },
                { key: "nine", label: "9", align: "center", width: "8.6%" },
                { key: "ten", label: "10", align: "center", width: "8.6%" },
            ],
            rows: [
                {
                id: "basic-tsu",
                cells: {
                    counter: { jp: ruby("〜つ") },
                    one: { jp: ruby("[一つ|ひとつ]") },
                    two: { jp: ruby("[二つ|ふたつ]") },
                    three: { jp: ruby("[三つ|みっつ]") },
                    four: { jp: ruby("[四つ|よっつ]") },
                    five: { jp: ruby("[五つ|いつつ]") },
                    six: { jp: ruby("[六つ|むっつ]") },
                    seven: { jp: ruby("[七つ|ななつ]") },
                    eight: { jp: ruby("[八つ|やっつ]") },
                    nine: { jp: ruby("[九つ|ここのつ]") },
                    ten: { jp: ruby("[十|とお]") },
                },
                },
                {
                id: "basic-ko",
                cells: {
                    counter: { jp: ruby("[個|こ]") },
                    one: { jp: ruby("[1個|いっこ]") },
                    two: { jp: ruby("[2個|にこ]") },
                    three: { jp: ruby("[3個|さんこ]") },
                    four: { jp: ruby("[4個|よんこ]") },
                    five: { jp: ruby("[5個|ごこ]") },
                    six: { jp: ruby("[6個|ろっこ]") },
                    seven: { jp: ruby("[7個|ななこ]") },
                    eight: { jp: ruby("[8個|はっこ]") },
                    nine: { jp: ruby("[9個|きゅうこ]") },
                    ten: { jp: ruby("[10個|じゅっこ]") },
                },
                },
                {
                id: "basic-mai",
                cells: {
                    counter: { jp: ruby("[枚|まい]") },
                    one: { jp: ruby("[1枚|いちまい]") },
                    two: { jp: ruby("[2枚|にまい]") },
                    three: { jp: ruby("[3枚|さんまい]") },
                    four: { jp: ruby("[4枚|よんまい]") },
                    five: { jp: ruby("[5枚|ごまい]") },
                    six: { jp: ruby("[6枚|ろくまい]") },
                    seven: { jp: ruby("[7枚|ななまい]") },
                    eight: { jp: ruby("[8枚|はちまい]") },
                    nine: { jp: ruby("[9枚|きゅうまい]") },
                    ten: { jp: ruby("[10枚|じゅうまい]") },
                },
                },
                {
                id: "basic-hon",
                cells: {
                    counter: { jp: ruby("[本|ほん]") },
                    one: { jp: ruby("[1本|いっぽん]") },
                    two: { jp: ruby("[2本|にほん]") },
                    three: { jp: ruby("[3本|さんぼん]") },
                    four: { jp: ruby("[4本|よんほん]") },
                    five: { jp: ruby("[5本|ごほん]") },
                    six: { jp: ruby("[6本|ろっぽん]") },
                    seven: { jp: ruby("[7本|ななほん]") },
                    eight: { jp: ruby("[8本|はっぽん]") },
                    nine: { jp: ruby("[9本|きゅうほん]") },
                    ten: { jp: ruby("[10本|じゅっぽん]") },
                },
                },
                {
                id: "basic-satsu",
                cells: {
                    counter: { jp: ruby("[冊|さつ]") },
                    one: { jp: ruby("[1冊|いっさつ]") },
                    two: { jp: ruby("[2冊|にさつ]") },
                    three: { jp: ruby("[3冊|さんさつ]") },
                    four: { jp: ruby("[4冊|よんさつ]") },
                    five: { jp: ruby("[5冊|ごさつ]") },
                    six: { jp: ruby("[6冊|ろくさつ]") },
                    seven: { jp: ruby("[7冊|ななさつ]") },
                    eight: { jp: ruby("[8冊|はっさつ]") },
                    nine: { jp: ruby("[9冊|きゅうさつ]") },
                    ten: { jp: ruby("[10冊|じゅっさつ]") },
                },
                },
                {
                id: "basic-nin",
                cells: {
                    counter: { jp: ruby("[人|にん]") },
                    one: { jp: ruby("[1人|ひとり]") },
                    two: { jp: ruby("[2人|ふたり]") },
                    three: { jp: ruby("[3人|さんにん]") },
                    four: { jp: ruby("[4人|よにん]") },
                    five: { jp: ruby("[5人|ごにん]") },
                    six: { jp: ruby("[6人|ろくにん]") },
                    seven: { jp: ruby("[7人|しちにん]") },
                    eight: { jp: ruby("[8人|はちにん]") },
                    nine: { jp: ruby("[9人|きゅうにん]") },
                    ten: { jp: ruby("[10人|じゅうにん]") },
                },
                },
            ],
            compact: true,
            zebra: true,
          },
      ],
    },
    {
      id: "lesson-014-vocabulary",
      kind: "vocabulary",
      title: "Vocabulario útil para practicar contadores",
      description:
        "Aquí subimos el léxico pensando en escenas de tienda, mostrador y conteo real, no solo en ejemplos sueltos.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 4,
          items: [
            { id: "vocab-014-orange", jp: [{ text: "みかん" }], reading: "みかん", meaning: "mandarina", tags: ["comida", "unidad"] },
            { id: "vocab-014-cookie", jp: [{ text: "クッキー" }], reading: "くっきー", meaning: "galleta", tags: ["comida", "unidad"] },
            { id: "vocab-014-egg", jp: ruby("[卵|たまご]"), reading: "たまご", meaning: "huevo", tags: ["comida", "unidad"] },
            { id: "vocab-014-cake", jp: [{ text: "ケーキ" }], reading: "けーき", meaning: "pastel / torta", tags: ["comida", "unidad"] },

            { id: "vocab-014-photo", jp: ruby("[写真|しゃしん]"), reading: "しゃしん", meaning: "foto", tags: ["plano", "objeto"] },
            { id: "vocab-014-paper", jp: ruby("[紙|かみ]"), reading: "かみ", meaning: "papel", tags: ["plano", "objeto"] },
            { id: "vocab-014-stamp", jp: ruby("[切手|きって]"), reading: "きって", meaning: "sello / estampilla", tags: ["plano", "objeto"] },
            { id: "vocab-014-shirt", jp: [{ text: "シャツ" }], reading: "しゃつ", meaning: "camisa", tags: ["plano", "ropa"] },

            { id: "vocab-014-bottle", jp: [{ text: "ペットボトル" }], reading: "ぺっとぼとる", meaning: "botella plástica", tags: ["largo", "objeto"] },
            { id: "vocab-014-banana", jp: [{ text: "バナナ" }], reading: "ばなな", meaning: "banana", tags: ["largo", "comida"] },
            { id: "vocab-014-pencil", jp: ruby("[鉛筆|えんぴつ]"), reading: "えんぴつ", meaning: "lápiz", tags: ["largo", "objeto"] },
            { id: "vocab-014-umbrella", jp: ruby("[傘|かさ]"), reading: "かさ", meaning: "paraguas", tags: ["largo", "objeto"] },

            { id: "vocab-014-magazine", jp: ruby("[雑誌|ざっし]"), reading: "ざっし", meaning: "revista", tags: ["libro", "lectura"] },
            { id: "vocab-014-dictionary", jp: ruby("[辞書|じしょ]"), reading: "じしょ", meaning: "diccionario", tags: ["libro", "lectura"] },
            { id: "vocab-014-textbook", jp: ruby("[教科書|きょうかしょ]"), reading: "きょうかしょ", meaning: "libro de texto", tags: ["libro", "lectura"] },
            { id: "vocab-014-ticket", jp: ruby("[切符|きっぷ]"), reading: "きっぷ", meaning: "boleto", tags: ["plano", "nuevo"] },

            { id: "vocab-014-staff", jp: ruby("[店員|てんいん]"), reading: "てんいん", meaning: "dependiente / staff de tienda", tags: ["persona", "tienda"] },
            { id: "vocab-014-customer", jp: ruby("[客|きゃく]"), reading: "きゃく", meaning: "cliente", tags: ["persona", "tienda"] },
            { id: "vocab-014-family", jp: ruby("[家族|かぞく]"), reading: "かぞく", meaning: "familia", tags: ["persona", "grupo"] },
            { id: "vocab-014-child", jp: ruby("[子供|こども]"), reading: "こども", meaning: "niño / niño pequeño", tags: ["persona", "base"] },

            { id: "vocab-014-cheeseburger", jp: [{ text: "チーズバーガー" }], reading: "ちーずばーがー", meaning: "cheeseburger", tags: ["tienda", "comida"] },
            { id: "vocab-014-teriyaki", jp: [{ text: "テリヤキバーガー" }], reading: "てりやきばーがー", meaning: "hamburguesa teriyaki", tags: ["tienda", "comida"] },
            { id: "vocab-014-order", jp: ruby("[注文|ちゅうもん]"), reading: "ちゅうもん", meaning: "pedido", tags: ["tienda", "nuevo"] },
            { id: "vocab-014-counter", jp: ruby("[売|う]り[場|ば]"), reading: "うりば", meaning: "sección de ventas / mostrador", tags: ["tienda", "lugar"] },
          ],
        },
      ],
    },
    {
      id: "lesson-014-examples",
      kind: "examples",
      title: "Ejemplos guiados",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "ex-014-1",
              jp: ruby("りんごが[三つ|みっつ]あります。"),
              es: "Hay tres manzanas.",
              breakdown: [
                { label: "りんご", es: "referente" },
                { label: "三つ", es: "contador general para tres cosas" },
              ],
              notes: [
                {
                  es: "Aquí usamos つ como contador general y conectamos con あります.",
                },
              ],
            },
            {
              id: "ex-014-2",
              jp: ruby("[写真|しゃしん]が[2枚|にまい]あります。"),
              es: "Hay dos fotos.",
              breakdown: [
                { label: "写真", es: "cosa plana y delgada" },
                { label: "2枚", es: "contador para cosas planas" },
              ],
            },
            {
              id: "ex-014-3",
              jp: ruby("[鉛筆|えんぴつ]が[3本|さんぼん]あります。"),
              es: "Hay tres lápices.",
              notes: [
                {
                  es: "Aquí ya aparece una lectura que no se siente tan mecánica: 3本 = さんぼん.",
                },
              ],
            },
            {
              id: "ex-014-4",
              jp: ruby("ノートが[2冊|にさつ]あります。"),
              es: "Hay dos cuadernos.",
              notes: [
                {
                  es: "冊 funciona con libros, cuadernos y revistas.",
                },
              ],
            },
            {
              id: "ex-014-5",
              jp: ruby("[学生|がくせい]が[2人|ふたり]います。"),
              es: "Hay dos estudiantes.",
              notes: [
                {
                  es: "Con personas, 1人 y 2人 son especialmente importantes: ひとり y ふたり.",
                },
              ],
            },
            {
              id: "ex-014-6",
              jp: ruby("A: これをください。 B: はい、どうぞ。"),
              es: "A: Quisiera esto. B: Sí, tome.",
              notes: [
                {
                  es: "Esta mini escena sirve como puerta de entrada antes de pedir con cantidad exacta.",
                },
              ],
            },
            {
              id: "ex-014-7",
              jp: ruby("A: りんごを[一つ|ひとつ]ください。 B: はい、[一つ|ひとつ]ですね。"),
              es: "A: Quisiera una manzana. B: Sí, una unidad.",
              notes: [
                {
                  es: "Aquí el cliente usa el contador general つ para un pedido muy simple.",
                },
              ],
            },
            {
              id: "ex-014-8",
              jp: ruby("A: チーズバーガー[2|ふた]つとテリヤキバーガー[3|みっつ]つをください。 B: はい、わかりました。"),
              es: "A: Quisiera dos cheeseburgers y tres hamburguesas teriyaki. B: Sí, entendido.",
              notes: [
                {
                  es: "Aquí と une dos grupos nominales completos dentro del mismo pedido.",
                },
              ],
            },
            {
              id: "ex-014-9",
              jp: ruby("A: [雑誌|ざっし]を[1冊|いっさつ]ください。 B: はい、[1冊|いっさつ]ですね。"),
              es: "A: Quisiera una revista. B: Sí, una revista.",
            },
            {
              id: "ex-014-10",
              jp: ruby("[家族|かぞく]は[4人|よにん]です。"),
              es: "Mi familia son cuatro personas.",
              notes: [
                {
                  es: "Aquí el contador 人 aparece dentro de una afirmación nominal simple.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-014-contrast",
      kind: "contrast",
      title: "Contrastes clave",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-014-1",
              label: "つ vs 個",
              correct: {
                jp: ruby("りんごを[一つ|ひとつ]ください。 / りんごを[1個|いっこ]ください。"),
                es: "Las dos pueden aparecer en un nivel inicial, pero no transmiten exactamente la misma sensación.",
              },
              explanation:
                "つ funciona como contador general muy cómodo para empezar. 個 ya se siente más específico para unidades pequeñas o individuales.",
            },
            {
              id: "contrast-014-2",
              label: "枚 vs 本",
              correct: {
                jp: ruby("[写真|しゃしん][2枚|にまい] / [鉛筆|えんぴつ][2本|にほん]"),
                es: "Cada contador mira una forma distinta del referente.",
              },
              incorrect: {
                jp: ruby("[写真|しゃしん][2本|にほん] / [鉛筆|えんぴつ][2枚|にまい]"),
                es: "Aquí se cruzan dos lógicas que no corresponden.",
              },
              explanation:
                "枚 cuenta cosas planas; 本 cuenta objetos largos o cilíndricos.",
            },
            {
              id: "contrast-014-3",
              label: "冊 vs 本",
              correct: {
                jp: ruby("ノート[3冊|さんさつ] / バナナ[3本|さんぼん]"),
                es: "Aunque ambos llevan objetos contables, no pertenecen a la misma familia.",
              },
              incorrect: {
                jp: ruby("ノート[3本|さんぼん] / バナナ[3冊|さんさつ]"),
                es: "Eso mezcla libros con objetos largos.",
              },
              explanation:
                "冊 está reservado para libros, cuadernos, diccionarios y revistas; 本 no.",
            },
            {
              id: "contrast-014-4",
              label: "1人 y 2人 no siguen la lectura mecánica con にん",
              correct: {
                jp: ruby("[1人|ひとり] / [2人|ふたり] / [3人|さんにん]"),
                es: "Las dos primeras formas conviene aprenderlas como vocabulario fijo.",
              },
              incorrect: {
                jp: ruby("[1人|いちにん] / [2人|ににん]"),
                es: "No son lecturas válidas.",
              },
              explanation:
                "Con personas, ひとり y ふたり son dos bases irregulares que debes fijar pronto.",
            },
            {
              id: "contrast-014-5",
              label: "La lista con と sigue siendo un grupo nominal",
              correct: {
                jp: ruby("チーズバーガー[2|ふた]つとテリヤキバーガー[3|みっつ]つをください。"),
                es: "Todo el bloque funciona como lo que pides.",
              },
              incorrect: {
                jp: ruby("チーズバーガー[2|ふた]つをとテリヤキバーガー[3|みっつ]つください。"),
                es: "Aquí la estructura del grupo se rompe.",
              },
              explanation:
                "Piensa el conjunto como grupo nominal 1 + と + grupo nominal 2, y luego la oración sigue normalmente.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-014-warning",
      kind: "warning",
      title: "Qué conviene hacer aquí",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "No intentes dominar todos los contadores del japonés en una sola unidad",
          content:
            "Este tema se siente pesado si lo estudias como una lista infinita de excepciones. Aquí conviene fijar primero una base usable: la serie de つ, el mapa de uso de 個・枚・本・冊・人 y algunas lecturas clave que volverán todo el tiempo.",
          bullets: [
            {
              es: "Primero deja muy firme:",
              jp: ruby("[一つ|ひとつ]〜[十|とお]。"),
            },
            {
              es: "Después fija algunas formas de referencia rápida:",
              jp: ruby("[1個|いっこ] / [3本|さんぼん] / [1冊|いっさつ] / [1人|ひとり] / [2人|ふたり]。"),
            },
            {
              es: "La tabla completa seguirá siendo útil como lugar de consulta incluso cuando ya avances a otros módulos.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-014-practice",
      kind: "practice",
      title: "Práctica guiada antes del quiz",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Di primero la serie completa de つ varias veces:",
              jp: ruby("[一つ|ひとつ] / [二つ|ふたつ] / [三つ|みっつ] / [四つ|よっつ] / [五つ|いつつ] / [六つ|むっつ] / [七つ|ななつ] / [八つ|やっつ] / [九つ|ここのつ] / [十|とお]。"),
            },
            {
              es: "Haz luego mini listas por contador:",
              jp: ruby("[1個|いっこ] / [2個|にこ] / [3個|さんこ]、[1枚|いちまい] / [2枚|にまい] / [3枚|さんまい]。"),
            },
            {
              es: "Practica lecturas que no conviene leer de forma mecánica:",
              jp: ruby("[1本|いっぽん] / [3本|さんぼん] / [1冊|いっさつ] / [1人|ひとり] / [2人|ふたり]。"),
            },
            {
              es: "Haz cinco escenas con あります o います usando cantidad:",
              jp: ruby("りんごが[三つ|みっつ]あります。 / [学生|がくせい]が[2人|ふたり]います。"),
            },
            {
              es: "Después practica pedidos cortos con",
              jp: ruby("これをください / AをNカウンターください"),
              note: "primero con un solo objeto y luego con dos grupos unidos por と.",
            },
          ],
        },
        {
          type: "resource-links",
          title: "Apoyo complementario",
          description:
            "Esta lesson fija la base. Para seguir repasando familias más amplias y más excepciones, usa también la sección completa de contadores de la app.",
          items: [
            {
              id: "link-014-counters-page",
              label: "Ir a la sección completa de contadores",
              href: "/gramatica/contadores",
              jp: ruby("[助数詞|じょすうし]のページ"),
              description: "Consulta tablas más amplias, categorías extra y lecturas especiales fuera del scope inicial de esta unidad.",
              tone: "accent",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-014-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Entiendo que en japonés no siempre basta con decir solo el número.",
            },
            {
              es: "Puedo usar la serie básica de",
              jp: ruby("[一つ|ひとつ]〜[十|とお]"),
              note: "como contador general.",
            },
            {
              es: "Distingo el uso básico de",
              jp: ruby("[個|こ] / [枚|まい] / [本|ほん] / [冊|さつ] / [人|にん]"),
              note: "según el tipo de referente.",
            },
            {
              es: "Ya fijé algunas lecturas importantes como",
              jp: ruby("[1個|いっこ] / [3本|さんぼん] / [1冊|いっさつ] / [1人|ひとり] / [2人|ふたり]。"),
            },
            {
              es: "Puedo hacer pedidos simples como",
              jp: ruby("りんごを[一つ|ひとつ]ください。 / ノートを[2冊|にさつ]ください。"),
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-014-quiz",
    title: "Quiz — Contadores básicos I",
    description:
      "Repaso variado para comprobar si ya distingues qué cuenta cada contador, cómo se leen sus primeras formas importantes y cómo usarlos en escenas simples de conteo y de tienda.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "single-choice",
        prompt: {
          es: "¿Cuál contador general estamos fijando como base más flexible para empezar?",
        },
        choices: [
          { id: "a", label: { jp: ruby("つ") } },
          { id: "b", label: { jp: ruby("[枚|まい]") } },
          { id: "c", label: { jp: ruby("[冊|さつ]") } },
          { id: "d", label: { jp: ruby("[人|にん]") } },
        ],
        correctChoiceId: "a",
        explanation:
          "En esta unidad, つ funciona como contador general muy cómodo para iniciar el tema.",
        relatedSectionIds: ["lesson-014-concept", "lesson-014-structure"],
      },
      {
        id: "q2",
        type: "single-choice",
        prompt: {
          es: "¿Qué contador corresponde mejor a objetos pequeños o unidades individuales como huevos o manzanas?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[本|ほん]") } },
          { id: "b", label: { jp: ruby("[個|こ]") } },
          { id: "c", label: { jp: ruby("[枚|まい]") } },
          { id: "d", label: { jp: ruby("つ") } },
        ],
        correctChoiceId: "b",
        explanation:
          "個 se usa aquí para unidades pequeñas o individuales.",
        relatedSectionIds: ["lesson-014-concept", "lesson-014-structure"],
      },
      {
        id: "q3",
        type: "single-choice",
        prompt: {
          es: "¿Qué contador corresponde mejor a cosas planas y delgadas como fotos o papel?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[枚|まい]") } },
          { id: "b", label: { jp: ruby("[本|ほん]") } },
          { id: "c", label: { jp: ruby("[個|こ]") } },
          { id: "d", label: { jp: ruby("つ") } },
        ],
        correctChoiceId: "a",
        explanation:
          "枚 cuenta cosas planas y delgadas como fotos, hojas de papel o camisas.",
        relatedSectionIds: ["lesson-014-structure", "lesson-014-vocabulary"],
      },
      {
        id: "q4",
        type: "single-choice",
        prompt: {
          es: "¿Qué contador corresponde mejor a objetos largos o cilíndricos como lápices o botellas?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[冊|さつ]") } },
          { id: "b", label: { jp: ruby("[本|ほん]") } },
          { id: "c", label: { jp: ruby("[枚|まい]") } },
          { id: "d", label: { jp: ruby("[人|にん]") } },
        ],
        correctChoiceId: "b",
        explanation:
          "本 cuenta objetos largos o cilíndricos dentro de esta unidad.",
        relatedSectionIds: ["lesson-014-structure", "lesson-014-vocabulary"],
      },
      {
        id: "q5",
        type: "single-choice",
        prompt: {
          es: "¿Qué contador corresponde mejor a libros, cuadernos y revistas?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[個|こ]") } },
          { id: "b", label: { jp: ruby("[本|ほん]") } },
          { id: "c", label: { jp: ruby("[冊|さつ]") } },
          { id: "d", label: { jp: ruby("つ") } },
        ],
        correctChoiceId: "c",
        explanation:
          "冊 se fija aquí como contador para libros, cuadernos, diccionarios y revistas.",
        relatedSectionIds: ["lesson-014-structure", "lesson-014-vocabulary"],
      },
      {
        id: "q6",
        type: "single-choice",
        prompt: {
          es: "¿Qué contador corresponde a personas?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[冊|さつ]") } },
          { id: "b", label: { jp: ruby("[人|にん]") } },
          { id: "c", label: { jp: ruby("[本|ほん]") } },
          { id: "d", label: { jp: ruby("[枚|まい]") } },
        ],
        correctChoiceId: "b",
        explanation:
          "人 se usa para contar personas.",
        relatedSectionIds: ["lesson-014-structure", "lesson-014-vocabulary"],
      },
      {
        id: "q7",
        type: "single-choice",
        prompt: {
          es: "¿Cuál es la lectura correcta de 1人 en esta unidad?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[1人|いちにん]") } },
          { id: "b", label: { jp: ruby("[1人|ひとり]") } },
          { id: "c", label: { jp: ruby("[1人|いっにん]") } },
          { id: "d", label: { jp: ruby("[1人|ひとにん]") } },
        ],
        correctChoiceId: "b",
        explanation:
          "1人 se fija aquí como ひとり.",
        relatedSectionIds: ["lesson-014-structure", "lesson-014-contrast"],
      },
      {
        id: "q8",
        type: "single-choice",
        prompt: {
          es: "¿Cuál es la lectura correcta de 2人 en esta unidad?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[2人|ふたり]") } },
          { id: "b", label: { jp: ruby("[2人|ににん]") } },
          { id: "c", label: { jp: ruby("[2人|ふたにん]") } },
          { id: "d", label: { jp: ruby("[2人|にたり]") } },
        ],
        correctChoiceId: "a",
        explanation:
          "2人 se fija aquí como ふたり.",
        relatedSectionIds: ["lesson-014-structure", "lesson-014-contrast"],
      },
      {
        id: "q9",
        type: "single-choice",
        prompt: {
          es: "¿Cuál es la lectura correcta de 3本?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[3本|さんほん]") } },
          { id: "b", label: { jp: ruby("[3本|さんぽん]") } },
          { id: "c", label: { jp: ruby("[3本|さんぼん]") } },
          { id: "d", label: { jp: ruby("[3本|みっぽん]") } },
        ],
        correctChoiceId: "c",
        explanation:
          "3本 se fija aquí como さんぼん.",
        relatedSectionIds: ["lesson-014-structure", "lesson-014-contrast"],
      },
      {
        id: "q10",
        type: "single-choice",
        prompt: {
          es: "¿Cuál es la lectura correcta de 1冊?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[1冊|いっさつ]") } },
          { id: "b", label: { jp: ruby("[1冊|いちさつ]") } },
          { id: "c", label: { jp: ruby("[1冊|ひとさつ]") } },
          { id: "d", label: { jp: ruby("[1冊|いちざつ]") } },
        ],
        correctChoiceId: "a",
        explanation:
          "1冊 se fija aquí como いっさつ.",
        relatedSectionIds: ["lesson-014-structure", "lesson-014-contrast"],
      },
      {
        id: "q11",
        type: "single-choice",
        prompt: {
          jp: ruby("りんごを[一つ|ひとつ]ください。"),
          note: "Elige la interpretación más natural.",
        },
        choices: [
          { id: "a", label: { es: "Quisiera una manzana." } },
          { id: "b", label: { es: "Hay una manzana." } },
          { id: "c", label: { es: "La manzana está aquí." } },
          { id: "d", label: { es: "¿Dónde está la manzana?" } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí se trata de un pedido simple con をください.",
        relatedSectionIds: ["lesson-014-structure", "lesson-014-examples"],
      },
      {
        id: "q12",
        type: "single-choice",
        prompt: {
          jp: ruby("チーズバーガー[2|ふた]つとテリヤキバーガー[3|みっつ]つをください。"),
          note: "¿Qué está pidiendo esta persona?",
        },
        choices: [
          { id: "a", label: { es: "Dos hamburguesas de queso y tres hamburguesas teriyaki." } },
          { id: "b", label: { es: "Tres hamburguesas de queso y dos hamburguesas teriyaki." } },
          { id: "c", label: { es: "Cinco hamburguesas de queso." } },
          { id: "d", label: { es: "Dos fotos y tres cuadernos." } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí el grupo con と une dos pedidos distintos con cantidades distintas.",
        relatedSectionIds: ["lesson-014-structure", "lesson-014-examples"],
      },
      {
        id: "q13",
        type: "single-choice",
        prompt: {
          es: "¿Qué oración suena mejor para contar cuadernos?",
        },
        choices: [
          { id: "a", label: { jp: ruby("ノートが[3本|さんぼん]あります。") } },
          { id: "b", label: { jp: ruby("ノートが[3冊|さんさつ]あります。") } },
          { id: "c", label: { jp: ruby("ノートが[3枚|さんまい]あります。") } },
          { id: "d", label: { jp: ruby("ノートが[三つ|みっつ]さつあります。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "Con cuadernos, la opción más natural en esta unidad es 冊.",
        relatedSectionIds: ["lesson-014-structure", "lesson-014-vocabulary"],
      },
      {
        id: "q14",
        type: "order-sentence",
        prompt: {
          es: "Ordena el pedido correcto:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("りんご") }, value: "りんご" },
          { id: "t2", label: { jp: ruby("を") }, value: "を" },
          { id: "t3", label: { jp: ruby("[一つ|ひとつ]") }, value: "一つ" },
          { id: "t4", label: { jp: ruby("ください。") }, value: "ください。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("りんごを[一つ|ひとつ]ください。") },
        explanation:
          "Aquí el objeto pedido aparece antes, seguido por を, la cantidad con contador y el cierre del pedido.",
        relatedSectionIds: ["lesson-014-structure", "lesson-014-summary"],
      },
      {
        id: "q15",
        type: "order-sentence",
        prompt: {
          es: "Ordena la oración correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("ノート") }, value: "ノート" },
          { id: "t2", label: { jp: ruby("が") }, value: "が" },
          { id: "t3", label: { jp: ruby("[2冊|にさつ]") }, value: "2冊" },
          { id: "t4", label: { jp: ruby("あります。") }, value: "あります。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("ノートが[2冊|にさつ]あります。") },
        explanation:
          "Aquí el referente sigue marcado con が y la cantidad entra antes del verbo de existencia.",
        relatedSectionIds: ["lesson-014-structure", "lesson-014-examples"],
      },
      {
        id: "q16",
        type: "fill-blank",
        prompt: {
          es: "Completa la lectura de 1個:",
          jp: ruby("[1個|___]"),
        },
        acceptedAnswers: ["いっこ"],
        placeholder: "Escribe la lectura",
        explanation:
          "1個 se fija aquí como いっこ.",
        relatedSectionIds: ["lesson-014-structure", "lesson-014-summary"],
      },
      {
        id: "q17",
        type: "fill-blank",
        prompt: {
          es: "Completa la lectura de 3枚:",
          jp: ruby("[3枚|___]"),
        },
        acceptedAnswers: ["さんまい"],
        placeholder: "Escribe la lectura",
        explanation:
          "3枚 se lee さんまい.",
        relatedSectionIds: ["lesson-014-structure", "lesson-014-summary"],
      },
      {
        id: "q18",
        type: "fill-blank",
        prompt: {
          es: "Completa el contador correcto:",
          jp: ruby("バナナが[2___|にほん]あります。"),
        },
        acceptedAnswers: ["本", "ほん"],
        placeholder: "Escribe el contador",
        explanation:
          "En esta unidad, バナナ se trabaja con 本 como objeto largo.",
        relatedSectionIds: ["lesson-014-structure", "lesson-014-vocabulary"],
      },
      {
        id: "q19",
        type: "fill-blank",
        prompt: {
          es: "Completa la lectura de 1人:",
          jp: ruby("[1人|___]"),
        },
        acceptedAnswers: ["ひとり"],
        placeholder: "Escribe la lectura",
        explanation:
          "1人 se fija aquí como ひとり.",
        relatedSectionIds: ["lesson-014-structure", "lesson-014-contrast"],
      },
      {
        id: "q20",
        type: "single-choice",
        prompt: {
          es: "¿Qué idea resume mejor el corazón de esta unidad?",
        },
        choices: [
          { id: "a", label: { es: "Que cualquier cosa en japonés se puede contar siempre con つ y no hace falta aprender más." } },
          { id: "b", label: { es: "Que esta unidad introduce una base de contadores frecuentes, algunas irregularidades clave y el uso práctico de esos contadores en escenas simples de conteo y de tienda." } },
          { id: "c", label: { es: "Que aquí dejamos de usar números visibles y trabajamos solo con kanji numéricos completos." } },
          { id: "d", label: { es: "Que 人 se lee siempre con にん, sin excepciones." } },
        ],
        correctChoiceId: "b",
        explanation:
          "Ese es el núcleo real de la unidad: base usable, primeras irregularidades y aplicación práctica.",
        relatedSectionIds: ["lesson-014-concept", "lesson-014-summary"],
      },
    ],
  },
};

export default lesson014;
