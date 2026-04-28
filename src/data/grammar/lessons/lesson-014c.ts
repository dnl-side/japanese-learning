
// src/data/grammar/lessons/lesson-014c.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson014c: GrammarLesson = {
  id: "lesson-014c",
  slug: "precios-e-ikura-compras-basicas",
  order: 17.2,
  level: "N5",
  status: "ready",
  title: "Precios y compras",
  jpTitle: "ねだん・えん・いくら",
  shortTitle: "Precios",
  description:
    "Cómo preguntar y entender precios con いくら y 円, continuar los pedidos con 〜をください, y unir números, contadores ya conocidos y mini diálogos de tienda sin abrir todavía contadores más específicos fuera de la base trabajada en la unidad 14a.",
  estimatedMinutes: 84,
  categoryTags: ["fundamentos", "numeros", "tienda", "compras", "dialogos", "integracion"],
  grammarTags: [
    "いくらですか",
    "円",
    "これをください",
    "〜をください",
    "一つ",
    "個",
    "枚",
    "冊",
    "価格",
    "買い物",
  ],
  searchTerms: [
    "ikura desu ka japanese",
    "prices in japanese n5",
    "shopping dialogue japanese",
    "yen in japanese lesson",
    "kore o kudasai prices",
    "円 いくら ください",
    "compras japones basico",
  ],
  relatedLessonSlugs: [
    "numeros-1-99",
    "contadores-basicos-tsu-ko-mai-hon-satsu-nin",
    "numeros-grandes-100-1000-man-oku-cho",
  ],
  relatedVocabularyTags: ["tienda", "hogar", "electrodomesticos", "objetos", "numeros", "base"],
  objectives: [
    "Usar いくらですか para preguntar precios de forma natural.",
    "Responder precios básicos con 〜円です, incluyendo cantidades simples y precios con 万.",
    "Continuar el patrón de tienda con これをください y Aをください.",
    "Usar solo los contadores ya fijados en la unidad 14a cuando la escena realmente lo necesite.",
    "Entender que, dentro de esta ruta, ひとつ / ふたつ funcionan como apoyo seguro cuando todavía no se ha enseñado un contador más específico.",
    "Leer mini diálogos de compra sin depender de español en cada paso.",
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
      id: "lesson-014c-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "Esta unidad continúa dos caminos que ya abriste antes. Por un lado, la base de números que necesitas para leer cantidades y precios. Por otro, las escenas de tienda con 〜をください que empezaste en la unidad 14. Ahora las unimos para preguntar cuánto cuesta algo, entender la respuesta y pedirlo de forma natural.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Primero fijaremos la pregunta base de precio:",
              jp: ruby("これはいくらですか。 / このフライパンはいくらですか。"),
            },
            {
              es: "Después veremos respuestas simples como:",
              jp: ruby("[2800円|にせんはっぴゃくえん]です。 / [14800円|いちまんよんせんはっぴゃくえん]です。"),
            },
            {
              es: "Y al final uniremos todo con pedidos como:",
              jp: ruby("ドライヤーをください。 / タオルを[2枚|にまい]ください。 / トースターを[一つ|ひとつ]ください。"),
            },
          ],
        },
      ],
    },
    {
      id: "lesson-014c-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "いくらですか pregunta precio, no cantidad",
          content:
            "Aquí conviene fijar una diferencia muy clara. いくらですか no pregunta cuántos hay ni qué cosa es. Pregunta cuánto cuesta. Por eso la respuesta natural entra con 円.",
          bullets: [
            {
              jp: ruby("これはいくらですか。"),
              es: "pregunta por precio",
            },
            {
              jp: ruby("[3500円|さんぜんごひゃくえん]です。"),
              es: "respuesta básica de precio",
            },
            {
              jp: ruby("[2万円|にまんえん]です。"),
              es: "también puede responder un precio más alto",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "〜をください continúa la escena de tienda",
          content:
            "La unidad 14a ya te dejó una base muy útil con これをください y Aをください. Aquí no cambiamos esa lógica. Lo nuevo es que ahora la escena puede ir un poco más lejos: primero preguntas el precio y después decides si quieres pedir el producto.",
          bullets: [
            {
              jp: ruby("A: これはいくらですか。 B: [4200円|よんせんにひゃくえん]です。"),
              es: "primero preguntas el precio",
            },
            {
              jp: ruby("A: じゃあ、これをください。"),
              es: "después haces el pedido",
            },
            {
              jp: ruby("A: フライパンをください。"),
              es: "también puedes pedir directamente el producto",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Aquí no abrimos contadores nuevos fuera de la base ya trabajada",
          content:
            "En japonés real, muchos objetos de tienda pueden tomar contadores muy específicos. Pero esta unidad no quiere abrir más familias de contadores todavía. Por eso aquí reutilizaremos solo la base ya trabajada en la unidades anteriores. Y cuando el contador específico todavía no forme parte de la ruta, usaremos 一つ / 二つ como apoyo seguro.",
          bullets: [
            {
              jp: ruby("タオルを[2枚|にまい]ください。"),
              es: "ejemplo claro con un contador ya trabajado",
            },
            {
              jp: ruby("ノートを[2冊|にさつ]ください。"),
              es: "otro ejemplo claro con contador ya trabajado",
            },
            {
              jp: ruby("トースターを[一つ|ひとつ]ください。"),
              es: "aquí usamos つ como apoyo seguro dentro de esta ruta",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Números y precios se leen con la misma base numérica",
          content:
            "Esta unidad no crea un sistema nuevo para precios. Solo reutiliza la base numérica que ya viste antes. Por eso leer 2800円 o 14800円 no debería sentirse como aprender una gramática nueva, sino como aplicar los números a una situación real de compra.",
          bullets: [
            {
              jp: ruby("[2800円|にせんはっぴゃくえん]"),
              es: "2800 + 円",
            },
            {
              jp: ruby("[6200円|ろくせんにひゃくえん]"),
              es: "6200 + 円",
            },
            {
              jp: ruby("[14800円|いちまんよんせんはっぴゃくえん]"),
              es: "1万 + 4800 + 円",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-014c-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-014c-1",
              label: "Pregunta por precio",
              pattern: ruby("これはいくらですか。 / このAはいくらですか。"),
              meaning: "¿Cuánto cuesta esto? / ¿Cuánto cuesta este A?",
              translation:
                "Este es el patrón más importante de la unidad. Puede usarse con これ si señalas el objeto directamente o con この + sustantivo si quieres nombrarlo.",
              structure: [
                {
                  slot: { jp: ruby("これ") },
                  value: "esto",
                  note: "Sirve cuando el objeto ya está delante de los interlocutores.",
                },
                {
                  slot: { jp: ruby("この A") },
                  value: "este A",
                  note: "Sirve cuando nombras explícitamente el producto.",
                },
                {
                  slot: { jp: ruby("いくらですか") },
                  value: "pregunta de precio",
                  note: "Aquí no pregunta cantidad ni identidad, sino precio.",
                },
              ],
              notes: [
                "Las dos direcciones son muy útiles en tienda: señalar o nombrar el producto.",
              ],
            },
            {
              id: "pattern-014c-2",
              label: "Respuesta de precio",
              pattern: ruby("A は X 円です。 / X 円です。"),
              meaning: "A cuesta X yenes. / Son X yenes.",
              translation:
                "La respuesta puede nombrar el producto otra vez o simplemente dar el precio si ya está claro de qué se habla.",
              structure: [
                {
                  slot: "A",
                  value: "producto",
                  note: "A veces se omite si el contexto ya lo deja claro.",
                },
                {
                  slot: "X 円",
                  value: "precio",
                  note: {
                    es: "Puede ser un número pequeño o uno con 万 como:",
                    jp: ruby("[350円|さんびゃくごじゅうえん] / [6800円|ろくせんはっぴゃくえん] / [32000円|さんまんにせんえん]。"),
                  },
                },
                {
                  slot: { jp: ruby("です") },
                  value: "cierre cortés",
                  note: "Mismo cierre que ya vienes trabajando en otras unidades.",
                },
              ],
              notes: [
                "No hace falta repetir siempre el nombre del producto en la respuesta.",
              ],
            },
            {
              id: "pattern-014c-3",
              label: "Pedido directo",
              pattern: ruby("これをください。 / A をください。"),
              meaning: "Quiero esto. / Quiero A.",
              translation:
                "Esta estructura ya la conocías en la unidad anterior de contadores. Aquí la reutilizamos dentro de una escena más completa de tienda.",
              structure: [
                {
                  slot: { jp: ruby("これ") },
                  value: "esto",
                  note: "Sirve cuando el objeto está a la vista y lo señalas.",
                },
                {
                  slot: "A",
                  value: "producto",
                  note: "Sirve cuando nombras directamente lo que quieres comprar.",
                },
                {
                  slot: { jp: ruby("を") },
                  value: "marca del objeto pedido",
                  note: "Aquí ya está fijada desde la unidad de contadores.",
                },
                {
                  slot: { jp: ruby("ください") },
                  value: "pedido cortés",
                  note: "Cierre básico para pedir algo en tienda.",
                },
              ],
              notes: [
                "Esta sigue siendo una de las estructuras más importantes de la unidad anterior.",
              ],
            },
            {
              id: "pattern-014c-4",
              label: "Pedido con cantidad",
              pattern: ruby("A を N カウンターください。"),
              meaning: "Quiero N unidades de A.",
              translation:
                "Aquí solo reutilizamos contadores ya trabajados en la unidad anterior. No es el momento de abrir familias nuevas que todavía no forman parte de la ruta.",
              structure: [
                {
                  slot: "A",
                  value: "producto",
                  note: "El objeto que quieres comprar.",
                },
                {
                  slot: "N カウンター",
                  value: "número + contador",
                  note: {
                    es: "En esta unidad reutilizamos casos como:",
                    jp: ruby("[2枚|にまい] / [2冊|にさつ] / [3個|さんこ] / [一つ|ひとつ]。"),
                  },
                },
                {
                  slot: { jp: ruby("ください") },
                  value: "pedido cortés",
                  note: "Mismo cierre de la unidad anterior.",
                },
              ],
              notes: [
                "Cuando el contador específico todavía no se ha trabajado en esta ruta, aquí usaremos つ como apoyo seguro.",
              ],
            },
            {
              id: "pattern-014c-5",
              label: "Precio total por cantidad",
              pattern: ruby("N カウンターで X 円です。"),
              meaning: "Por N unidades, son X yenes.",
              translation:
                "Aquí で presenta el total correspondiente a esa cantidad dentro de la escena de compra.",
              structure: [
                {
                  slot: "N カウンター",
                  value: "cantidad pedida",
                  note: "La cantidad del producto que entra en el cálculo.",
                },
                {
                  slot: { jp: ruby("で") },
                  value: "para esa cantidad / en ese total",
                  note: "Aquí introduce el precio correspondiente a ese conjunto.",
                },
                {
                  slot: "X 円です",
                  value: "precio final",
                  note: "La respuesta de total en la escena de compra.",
                },
              ],
              notes: [
                "Este patrón conviene trabajarlo con ejemplos muy claros y cantidades pequeñas.",
              ],
            },
          ],
        },
        {
          type: "table",
          title: "Preguntar, responder y pedir",
          description:
            "Esta tabla resume el circuito básico de tienda que queremos fijar en la unidad: preguntar precio, entenderlo y pedir el objeto.",
          columns: [
            { key: "step", label: "Paso", width: "18%" },
            { key: "jp", label: "Patrón", width: "44%" },
            { key: "es", label: "Función", width: "38%" },
          ],
          rows: [
            {
              id: "shop-step-1",
              cells: {
                step: "1",
                jp: { jp: ruby("これはいくらですか。") },
                es: "preguntar el precio de algo que se señala",
              },
            },
            {
              id: "shop-step-2",
              cells: {
                step: "2",
                jp: { jp: ruby("このドライヤーはいくらですか。") },
                es: "preguntar el precio de un producto nombrado",
              },
            },
            {
              id: "shop-step-3",
              cells: {
                step: "3",
                jp: { jp: ruby("[4200円|よんせんにひゃくえん]です。") },
                es: "responder con el precio",
              },
            },
            {
              id: "shop-step-4",
              cells: {
                step: "4",
                jp: { jp: ruby("じゃあ、これをください。") },
                es: "pedir el objeto después de escuchar el precio",
              },
            },
            {
              id: "shop-step-5",
              cells: {
                step: "5",
                jp: { jp: ruby("タオルを[2枚|にまい]ください。 / [2枚|にまい]で[1200円|せんにひゃくえん]です。") },
                es: "pedir con cantidad y recibir el total",
              },
            },
          ],
          zebra: true,
        },
        {
          type: "table",
          title: "Precios modelo de esta unidad",
          description:
            "Aquí no se trata de memorizar precios reales, sino de practicar lectura y diálogo con cantidades variadas.",
          columns: [
            { key: "item", label: "Producto", width: "34%" },
            { key: "price", label: "Precio", width: "30%", align: "center" },
            { key: "reading", label: "Lectura", width: "36%", align: "center" },
          ],
          rows: [
            {
              id: "price-frying-pan",
              cells: {
                item: { jp: ruby("フライパン") },
                price: { jp: ruby("[2800円|にせんはっぴゃくえん]") },
                reading: "にせんはっぴゃくえん",
              },
            },
            {
              id: "price-dryer",
              cells: {
                item: { jp: ruby("ドライヤー") },
                price: { jp: ruby("[4200円|よんせんにひゃくえん]") },
                reading: "よんせんにひゃくえん",
              },
            },
            {
              id: "price-toaster",
              cells: {
                item: { jp: ruby("トースター") },
                price: { jp: ruby("[6800円|ろくせんはっぴゃくえん]") },
                reading: "ろくせんはっぴゃくえん",
              },
            },
            {
              id: "price-fan",
              cells: {
                item: { jp: ruby("扇風機|せんぷうき") },
                price: { jp: ruby("[6200円|ろくせんにひゃくえん]") },
                reading: "ろくせんにひゃくえん",
              },
            },
            {
              id: "price-rice-cooker",
              cells: {
                item: { jp: ruby("炊飯器|すいはんき") },
                price: { jp: ruby("[14800円|いちまんよんせんはっぴゃくえん]") },
                reading: "いちまんよんせんはっぴゃくえん",
              },
            },
            {
              id: "price-fridge",
              cells: {
                item: { jp: ruby("冷蔵庫|れいぞうこ") },
                price: { jp: ruby("[32000円|さんまんにせんえん]") },
                reading: "さんまんにせんえん",
              },
            },
          ],
          zebra: true,
        },
      ],
    },
    {
      id: "lesson-014c-vocabulary",
      kind: "vocabulary",
      title: "Vocabulario útil para esta unidad",
      description:
        "Aquí el centro no es aprender contadores nuevos, sino ampliar el repertorio de productos que puedes ver, preguntar y pedir en una tienda.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 4,
          items: [
            { id: "v014c-price", jp: ruby("いくら"), reading: "いくら", meaning: "cuánto / cuánto cuesta", tags: ["precio", "base"] },
            { id: "v014c-yen", jp: ruby("[円|えん]"), reading: "えん", meaning: "yen", tags: ["precio", "base"] },
            { id: "v014c-frying-pan", jp: ruby("フライパン"), reading: "ふらいぱん", meaning: "sartén", tags: ["hogar"] },
            { id: "v014c-microwave", jp: ruby("レンジ"), reading: "れんじ", meaning: "microondas / horno microondas", tags: ["hogar"] },

            { id: "v014c-fridge", jp: ruby("冷蔵庫|れいぞうこ"), reading: "れいぞうこ", meaning: "refrigerador", tags: ["hogar"] },
            { id: "v014c-freezer", jp: ruby("冷凍庫|れいとうこ"), reading: "れいとうこ", meaning: "congelador", tags: ["hogar"] },
            { id: "v014c-dryer-machine", jp: ruby("乾燥機|かんそうき"), reading: "かんそうき", meaning: "secadora", tags: ["hogar"] },
            { id: "v014c-washer", jp: ruby("洗濯機|せんたくき"), reading: "せんたくき", meaning: "lavadora", tags: ["hogar"] },

            { id: "v014c-hairdryer", jp: ruby("ドライヤー"), reading: "どらいやー", meaning: "secador de pelo", tags: ["hogar"] },
            { id: "v014c-fan", jp: ruby("扇風機|せんぷうき"), reading: "せんぷうき", meaning: "ventilador", tags: ["hogar"] },
            { id: "v014c-toaster", jp: ruby("トースター"), reading: "とーすたー", meaning: "tostadora", tags: ["hogar"] },
            { id: "v014c-rice-cooker", jp: ruby("炊飯器|すいはんき"), reading: "すいはんき", meaning: "olla arrocera", tags: ["hogar"] },

            { id: "v014c-towel", jp: ruby("タオル"), reading: "たおる", meaning: "toalla", tags: ["hogar"] },
            { id: "v014c-shirt", jp: ruby("シャツ"), reading: "しゃつ", meaning: "camisa / polera", tags: ["ropa"] },
            { id: "v014c-notebook", jp: ruby("ノート"), reading: "のーと", meaning: "cuaderno", tags: ["papeleria"] },
            { id: "v014c-battery", jp: ruby("電池|でんち"), reading: "でんち", meaning: "pila / batería", tags: ["hogar"] },

            { id: "v014c-clerk", jp: ruby("店員|てんいん"), reading: "てんいん", meaning: "dependiente / vendedor", tags: ["tienda"] },
            { id: "v014c-customer", jp: ruby("[客|きゃく]"), reading: "きゃく", meaning: "cliente", tags: ["tienda"] },
            { id: "v014c-this", jp: ruby("これ"), reading: "これ", meaning: "esto", tags: ["base"] },
            { id: "v014c-this-noun", jp: ruby("この"), reading: "この", meaning: "este / esta", tags: ["base"] },
          ],
        },
      ],
    },
    {
      id: "lesson-014c-examples",
      kind: "examples",
      title: "Diálogos y ejemplos guiados",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "ex-014c-1",
              jp: ruby("A: これはいくらですか。 B: [2800円|にせんはっぴゃくえん]です。"),
              es: "A: ¿Cuánto cuesta esto? B: Cuesta 2800 yenes.",
            },
            {
              id: "ex-014c-2",
              jp: ruby("A: このフライパンはいくらですか。 B: [2800円|にせんはっぴゃくえん]です。"),
              es: "A: ¿Cuánto cuesta esta sartén? B: Cuesta 2800 yenes.",
            },
            {
              id: "ex-014c-3",
              jp: ruby("A: このドライヤーはいくらですか。 B: [4200円|よんせんにひゃくえん]です。"),
              es: "A: ¿Cuánto cuesta este secador? B: Cuesta 4200 yenes.",
            },
            {
              id: "ex-014c-4",
              jp: ruby("A: この炊飯器|すいはんきはいくらですか。 B: [14800円|いちまんよんせんはっぴゃくえん]です。"),
              es: "A: ¿Cuánto cuesta esta arrocera? B: Cuesta 14.800 yenes.",
            },
            {
              id: "ex-014c-5",
              jp: ruby("A: 冷蔵庫|れいぞうこをください。 B: はい、[32000円|さんまんにせんえん]です。"),
              es: "A: Quiero el refrigerador. B: Sí, son 32.000 yenes.",
            },
            {
              id: "ex-014c-6",
              jp: ruby("A: トースターを[一つ|ひとつ]ください。 B: はい、[6800円|ろくせんはっぴゃくえん]です。"),
              es: "A: Quiero una tostadora. B: Sí, son 6800 yenes.",
              notes: [
                {
                  es: "Aquí usamos 一つ como apoyo seguro dentro de esta ruta, sin abrir todavía contadores más específicos.",
                },
              ],
            },
            {
              id: "ex-014c-7",
              jp: ruby("A: タオルを[2枚|にまい]ください。 B: はい、[2枚|にまい]で[1200円|せんにひゃくえん]です。"),
              es: "A: Quiero dos toallas. B: Sí, por dos son 1200 yenes.",
            },
            {
              id: "ex-014c-8",
              jp: ruby("A: ノートを[2冊|にさつ]ください。 B: はい、[2冊|にさつ]で[900円|きゅうひゃくえん]です。"),
              es: "A: Quiero dos cuadernos. B: Sí, por dos son 900 yenes.",
            },
            {
              id: "ex-014c-9",
              jp: ruby("A: シャツを[1枚|いちまい]ください。 B: はい、[1500円|せんごひゃくえん]です。"),
              es: "A: Quiero una camisa. B: Sí, son 1500 yenes.",
            },
            {
              id: "ex-014c-10",
              jp: ruby("A: [電池|でんち]を[3個|さんこ]ください。 B: はい、[3個|さんこ]で[600円|ろっぴゃくえん]です。"),
              es: "A: Quiero tres pilas. B: Sí, por tres son 600 yenes.",
            },
            {
              id: "ex-014c-11",
              jp: ruby("A: [扇風機|せんぷうき]はいくらですか。 B: [6200円|ろくせんにひゃくえん]です。 A: じゃあ、これをください。"),
              es: "A: ¿Cuánto cuesta el ventilador? B: Cuesta 6200 yenes. A: Entonces, me llevo este.",
            },
            {
              id: "ex-014c-12",
              jp: ruby("A: レンジはいくらですか。 B: [9800円|きゅうせんはっぴゃくえん]です。"),
              es: "A: ¿Cuánto cuesta el microondas? B: Cuesta 9800 yenes.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-014c-contrast",
      kind: "contrast",
      title: "Contrastes que conviene fijar",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-014c-1",
              label: "Preguntar precio vs preguntar identidad",
              correct: {
                jp: ruby("これはいくらですか。"),
                es: "Pregunta por precio.",
              },
              incorrect: {
                jp: ruby("これは[何|なん]ですか。"),
                es: "Pregunta qué es, no cuánto cuesta.",
              },
              explanation:
                "Aquí la diferencia es muy importante. 何 pregunta identidad; いくら pregunta precio.",
            },
            {
              id: "contrast-014c-2",
              label: "Escuchar el precio vs pedir el objeto",
              correct: {
                jp: ruby("[4200円|よんせんにひゃくえん]です。 / ドライヤーをください。"),
                es: "Una oración responde el precio; la otra realiza el pedido.",
              },
              explanation:
                "En una escena de tienda las dos funciones conviven, pero no hacen el mismo trabajo.",
            },
            {
              id: "contrast-014c-3",
              label: "Pedir sin cantidad vs pedir con cantidad",
              correct: {
                jp: ruby("タオルをください。 / タオルを[2枚|にまい]ください。"),
                es: "La segunda ya deja explícita la cantidad.",
              },
              explanation:
                "Cuando la cantidad importa, el bloque del contador entra antes de ください.",
            },
            {
              id: "contrast-014c-4",
              label: "Precio simple vs total por cantidad",
              correct: {
                jp: ruby("[900円|きゅうひゃくえん]です。 / [2冊|にさつ]で[900円|きゅうひゃくえん]です。"),
                es: "La segunda respuesta especifica que ese precio corresponde a una cantidad concreta.",
              },
              explanation:
                "Aquí で ayuda a presentar el total correspondiente a esa cantidad dentro de la escena de compra.",
            },
            {
              id: "contrast-014c-5",
              label: "Contador ya enseñado vs apoyo seguro con つ",
              correct: {
                jp: ruby("ノートを[2冊|にさつ]ください。 / トースターを[一つ|ひとつ]ください。"),
                es: "Solo usamos contadores ya fijados o el apoyo seguro con つ.",
              },
              explanation:
                "Esta unidad no quiere abrir todavía contadores específicos nuevos para electrodomésticos.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-014c-warning",
      kind: "warning",
      title: "Qué conviene tener claro aquí",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "No conviertas esta unidad en una lección nueva de contadores",
          content:
            "Aquí el foco principal es precio y compra, no ampliar todavía el sistema de contadores. Por eso conviene trabajar con seguridad: usa los contadores ya fijados en 14a cuando sean claros, y cuando no, apóyate en 一つ / 二つ dentro de esta ruta.",
          bullets: [
            {
              jp: ruby("タオルを[2枚|にまい]ください。"),
              es: "contador ya trabajado y claro",
            },
            {
              jp: ruby("ノートを[2冊|にさつ]ください。"),
              es: "contador ya trabajado y claro",
            },
            {
              jp: ruby("ドライヤーを[一つ|ひとつ]ください。"),
              es: "apoyo seguro sin abrir una familia nueva",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-014c-practice",
      kind: "practice",
      title: "Práctica guiada antes del quiz",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Señala productos y pregunta primero solo con",
              jp: ruby("これはいくらですか。"),
            },
            {
              es: "Después nombra el producto y repite la misma escena con",
              jp: ruby("このAはいくらですか。"),
            },
            {
              es: "Responde cada vez con",
              jp: ruby("X[円|えん]です。"),
              note: "usando precios variados, incluidos algunos con 万.",
            },
            {
              es: "Haz pedidos directos con",
              jp: ruby("Aをください。 / これをください。"),
            },
            {
              es: "Añade cantidad solo cuando el contador ya esté firme o cuando puedas usar",
              jp: ruby("[一つ|ひとつ] / [二つ|ふたつ]"),
              note: "como apoyo seguro dentro de esta ruta.",
            },
          ],
        },
        {
          type: "resource-links",
          title: "Apoyo complementario",
          description:
            "Si quieres volver a revisar la base general de contadores antes de seguir practicando precios, usa también la sección dedicada a contadores.",
          items: [
            {
              id: "link-014c-counters",
              label: "Ir a contadores",
              href: "/gramatica/contadores",
              jp: ruby("[助数詞|じょすうし]のページ"),
              description: "Mapa visual y tabla general de contadores para reforzar la base del bloque 14.",
              tone: "accent",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-014c-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Puedo preguntar precios con",
              jp: ruby("いくらですか。"),
            },
            {
              es: "Puedo responder precios con",
              jp: ruby("X[円|えん]です。"),
            },
            {
              es: "Puedo continuar la escena de tienda con",
              jp: ruby("これをください。 / Aをください。"),
            },
            {
              es: "Puedo usar cantidad solo con contadores ya fijados o con",
              jp: ruby("[一つ|ひとつ]"),
              note: "como apoyo seguro dentro de esta unidad.",
            },
            {
              es: "Ya puedo leer y usar mini diálogos de compra con números, contadores y precio.",
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-014c-quiz",
    title: "Quiz — Precios y compras",
    description:
      "Repaso de preguntas por precio, respuestas con 円 y escenas de tienda con 〜をください. Aquí el foco está en leer la situación y escoger o completar la forma más natural.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "fill-blank",
        prompt: {
          es: "Completa para preguntar por precio:",
          jp: ruby("これは___ですか。"),
        },
        acceptedAnswers: ["いくら"],
        placeholder: "Escribe la palabra",
        explanation:
          "いくら pregunta cuánto cuesta algo.",
        relatedSectionIds: ["lesson-014c-structure", "lesson-014c-summary"],
      },
      {
        id: "q2",
        type: "fill-blank",
        prompt: {
          es: "Completa la unidad de precio:",
          jp: ruby("[4200|よんせんにひゃく]___です。"),
        },
        acceptedAnswers: ["円", "えん"],
        placeholder: "Escribe la palabra",
        explanation:
          "La respuesta de precio entra con 円.",
        relatedSectionIds: ["lesson-014c-structure", "lesson-014c-summary"],
      },
      {
        id: "q3",
        type: "single-choice",
        prompt: {
          es: "¿Cuál pregunta corresponde mejor a “¿Cuánto cuesta esta sartén?”",
        },
        choices: [
          { id: "a", label: { jp: ruby("このフライパンはいくらですか。") } },
          { id: "b", label: { jp: ruby("このフライパンは[何|なん]ですか。") } },
          { id: "c", label: { jp: ruby("フライパンをください。") } },
          { id: "d", label: { jp: ruby("これはフライパンですか。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí necesitas la pregunta de precio con いくらですか.",
        relatedSectionIds: ["lesson-014c-structure", "lesson-014c-contrast"],
      },
      {
        id: "q4",
        type: "single-choice",
        prompt: {
          jp: ruby("A: これはいくらですか。 B: ___。"),
          note: "いちばん しぜんな こたえ を えらんでください。",
        },
        choices: [
          { id: "a", label: { jp: ruby("[2800円|にせんはっぴゃくえん]です。") } },
          { id: "b", label: { jp: ruby("これはフライパンです。") } },
          { id: "c", label: { jp: ruby("フライパンをください。") } },
          { id: "d", label: { jp: ruby("[二つ|ふたつ]です。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí la respuesta natural a いくらですか es un precio con 円.",
        relatedSectionIds: ["lesson-014c-structure", "lesson-014c-examples"],
      },
      {
        id: "q5",
        type: "fill-blank",
        prompt: {
          es: "Completa el pedido directo:",
          jp: ruby("ドライヤー___ください。"),
        },
        acceptedAnswers: ["を"],
        placeholder: "助詞",
        explanation:
          "En esta estructura, を marca el objeto que pides.",
        relatedSectionIds: ["lesson-014c-structure", "lesson-014c-summary"],
      },
      {
        id: "q6",
        type: "fill-blank",
        prompt: {
          es: "Completa con el contador correcto:",
          jp: ruby("ノートを[2|に]___ください。"),
        },
        acceptedAnswers: ["冊", "さつ"],
        placeholder: "Escribe el contador",
        explanation:
          "ノート entra aquí con 冊, que ya quedó trabajado en 14a.",
        relatedSectionIds: ["lesson-014c-structure", "lesson-014c-warning"],
      },
      {
        id: "q7",
        type: "fill-blank",
        prompt: {
          es: "Completa con el contador correcto:",
          jp: ruby("タオルを[2|に]___ください。"),
        },
        acceptedAnswers: ["枚", "まい"],
        placeholder: "Escribe el contador",
        explanation:
          "Aquí usamos 枚 para una cosa plana dentro de la base ya trabajada.",
        relatedSectionIds: ["lesson-014c-structure", "lesson-014c-warning"],
      },
      {
        id: "q8",
        type: "fill-blank",
        prompt: {
          es: "Completa con el contador correcto:",
          jp: ruby("[電池|でんち]を[3|さん]___ください。"),
        },
        acceptedAnswers: ["個", "こ"],
        placeholder: "Escribe el contador",
        explanation:
          "Aquí reutilizamos 個 como contador ya fijado para unidades pequeñas individuales.",
        relatedSectionIds: ["lesson-014c-structure", "lesson-014c-warning"],
      },
      {
        id: "q9",
        type: "fill-blank",
        prompt: {
          es: "Completa con la forma segura de esta ruta:",
          jp: ruby("リンゴを___ください。"),
        },
        acceptedAnswers: ["一つ", "ひとつ"],
        placeholder: "Escribe la cantidad",
        explanation:
          "Aquí usamos 一つ.",
        relatedSectionIds: ["lesson-014c-structure", "lesson-014c-warning"],
      },
      {
        id: "q10",
        type: "single-choice",
        prompt: {
          jp: ruby("この[炊飯器|すいはんき]はいくらですか。"),
          note: "いちばん しぜんな こたえ を えらんでください。",
        },
        choices: [
          { id: "a", label: { jp: ruby("[14800円|いちまんよんせんはっぴゃくえん]です。") } },
          { id: "b", label: { jp: ruby("[二つ|ふたつ]です。") } },
          { id: "c", label: { jp: ruby("これをください。") } },
          { id: "d", label: { jp: ruby("[炊飯器|すいはんき]です。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí la respuesta correcta debe ser un precio, no un pedido ni una identificación.",
        relatedSectionIds: ["lesson-014c-structure", "lesson-014c-examples"],
      },
      {
        id: "q11",
        type: "fill-blank",
        prompt: {
          es: "Completa el total por cantidad:",
          jp: ruby("[2冊|にさつ]___[900円|きゅうひゃくえん]です。"),
        },
        acceptedAnswers: ["で"],
        placeholder: "助詞",
        explanation:
          "Aquí で introduce el precio correspondiente a esa cantidad dentro de la escena de compra.",
        relatedSectionIds: ["lesson-014c-structure", "lesson-014c-contrast"],
      },
      {
        id: "q12",
        type: "single-choice",
        prompt: {
          jp: ruby("A: このドライヤーはいくらですか。 B: [4200円|よんせんにひゃくえん]です。 A: ___。"),
          note: "つぎ に いちばん しぜんな ぶん を えらんでください。",
        },
        choices: [
          { id: "a", label: { jp: ruby("じゃあ、これをください。") } },
          { id: "b", label: { jp: ruby("これはいくらですか。") } },
          { id: "c", label: { jp: ruby("[4200円|よんせんにひゃくえん]です。") } },
          { id: "d", label: { jp: ruby("[三つ|みっつ]です。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Después de oír el precio, una continuación natural es hacer el pedido.",
        relatedSectionIds: ["lesson-014c-concept", "lesson-014c-examples"],
      },
      {
        id: "q13",
        type: "fill-blank",
        prompt: {
          es: "Completa con el contador correcto:",
          jp: ruby("シャツを[1|いち]___ください。"),
        },
        acceptedAnswers: ["枚", "まい"],
        placeholder: "Escribe el contador",
        explanation:
          "Aquí reutilizamos 枚 para una pieza plana dentro de la base ya trabajada.",
        relatedSectionIds: ["lesson-014c-structure", "lesson-014c-warning"],
      },
      {
        id: "q14",
        type: "single-choice",
        prompt: {
          es: "¿Qué oración pregunta mejor “¿Cuánto cuesta este refrigerador?”",
        },
        choices: [
          { id: "a", label: { jp: ruby("この[冷蔵庫|れいぞうこ]はいくらですか。") } },
          { id: "b", label: { jp: ruby("[冷蔵庫|れいぞうこ]をください。") } },
          { id: "c", label: { jp: ruby("この[冷蔵庫|れいぞうこ]は[何|なに]ですか。") } },
          { id: "d", label: { jp: ruby("[冷蔵庫|れいぞうこ][円|えん]ですか。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí necesitas この + sustantivo + いくらですか.",
        relatedSectionIds: ["lesson-014c-structure", "lesson-014c-contrast"],
      },
      {
        id: "q15",
        type: "single-choice",
        prompt: {
          jp: ruby("A: タオルを[2枚|にまい]ください。 B: ___。"),
          note: "いちばん しぜんな こたえ を えらんでください。",
        },
        choices: [
          { id: "a", label: { jp: ruby("[2枚|にまい]で[1200円|せんにひゃくえん]です。") } },
          { id: "b", label: { jp: ruby("タオルはいくらですか。") } },
          { id: "c", label: { jp: ruby("タオルをください。") } },
          { id: "d", label: { jp: ruby("[二つ|ふたつ]です。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí la respuesta natural es el total correspondiente a la cantidad pedida.",
        relatedSectionIds: ["lesson-014c-structure", "lesson-014c-examples"],
      },
      {
        id: "q16",
        type: "fill-blank",
        prompt: {
          es: "Completa la pregunta natural por precio:",
          jp: ruby("このトースターは___ですか。"),
        },
        acceptedAnswers: ["いくら"],
        placeholder: "Escribe la palabra",
        explanation:
          "Aquí también la palabra correcta es いくら, porque sigues preguntando precio.",
        relatedSectionIds: ["lesson-014c-structure", "lesson-014c-summary"],
      },
      {
        id: "q17",
        type: "single-choice",
        prompt: {
          jp: ruby("32000円"),
          note: "どれ が ただしい よみかた ですか。",
        },
        choices: [
          { id: "a", label: { jp: ruby("さんまんにせんえん") } },
          { id: "b", label: { jp: ruby("さんせんにまんえん") } },
          { id: "c", label: { jp: ruby("にせんさんまんえん") } },
          { id: "d", label: { jp: ruby("さんまんにひゃくえん") } },
        ],
        correctChoiceId: "a",
        explanation:
          "32000円 se lee さんまんにせんえん.",
        relatedSectionIds: ["lesson-014c-structure", "lesson-014c-examples"],
      },
      {
        id: "q18",
        type: "fill-blank",
        prompt: {
          es: "Completa el pedido directo:",
          jp: ruby("これ___ください。"),
        },
        acceptedAnswers: ["を"],
        placeholder: "助詞",
        explanation:
          "El patrón fijo de tienda sigue siendo これをください.",
        relatedSectionIds: ["lesson-014c-structure", "lesson-014c-summary"],
      },
      {
        id: "q19",
        type: "single-choice",
        prompt: {
          es: "¿Cuál oración expresa mejor “Quiero dos cuadernos”?",
        },
        choices: [
          { id: "a", label: { jp: ruby("ノートはいくらですか。") } },
          { id: "b", label: { jp: ruby("ノートを[2冊|にさつ]ください。") } },
          { id: "c", label: { jp: ruby("ノートは[900円|きゅうひゃくえん]です。") } },
          { id: "d", label: { jp: ruby("ノートです。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "Aquí la estructura natural de pedido es ノートを2冊ください。",
        relatedSectionIds: ["lesson-014c-structure", "lesson-014c-examples"],
      },
      {
        id: "q20",
        type: "single-choice",
        prompt: {
          es: "¿Qué idea resume mejor el foco de esta unidad?",
        },
        choices: [
          { id: "a", label: { es: "Aprender muchos contadores nuevos para electrodomésticos." } },
          { id: "b", label: { es: "Usar precios, 円, いくら y escenas de tienda continuando la base de números y ください, sin abrir todavía contadores nuevos fuera de la ruta." } },
          { id: "c", label: { es: "Estudiar solo números grandes sin contexto de compra." } },
          { id: "d", label: { es: "Aprender a usar verbos de movimiento con tiendas." } },
        ],
        correctChoiceId: "b",
        explanation:
          "Ese es el corazón real de la unidad: precio, compra y continuación del bloque de números y contadores ya vistos.",
        relatedSectionIds: ["lesson-014c-concept", "lesson-014c-summary"],
      },
    ],
  },
};

export default lesson014c;
