//src/data/grammar/lessons/lesson-018c.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson019: GrammarLesson = {
  id: "lesson-019",
  slug: "verbos-de-accion-particulas-wo-de-to-ni",
  order: 24,
  level: "N5",
  status: "ready",
  title: "Verbos de acción I",
  jpTitle: "どうし・を・で・と・に",
  shortTitle: "Verbos de acción",
  description:
    "Cómo empezar a usar verbos de acción con sus partículas más importantes: を para objeto directo, で para lugar de acción y medio, と para compañía, y に para destinatario o receptor de la acción, dejando el bloque de movimiento para la unidad siguiente.",
  estimatedMinutes: 96,
  categoryTags: ["fundamentos", "verbos", "particulas", "acciones", "lectura", "integracion"],
  grammarTags: [
    "を",
    "で",
    "と",
    "に",
    "objeto directo",
    "lugar de acción",
    "medio",
    "compañía",
    "destinatario",
    "話す",
    "会う",
  ],
  searchTerms: [
    "verbos de accion japones",
    "wo de to ni con verbos",
    "objeto directo japones",
    "lugar de accion japones",
    "con quien hago la accion japones",
    "medio herramienta japones de",
    "a quien va dirigida la accion japones",
    "hanasu ni to au ni to",
  ],
  relatedLessonSlugs: [
    "arimasu-imasu-existencia-basica",
    "posiciones-basicas-to",
    "matome-particulas-1-15",
    "tiempo-basico-pasado-desu-masu",
    "verbos-introduccion-grupo-2-ichidan",
    "verbos-grupo-1-godan",
    "verbos-grupo-3-irregulares",
  ],
  relatedVocabularyTags: ["verbos", "acciones", "herramientas", "lugares", "personas", "base"],
  objectives: [
    "Entender que los verbos de acción abren una organización nueva de la oración con el verbo al final.",
    "Usar を para marcar el objeto directo que recibe directamente la acción.",
    "Distinguir los dos usos principales de で dentro de esta unidad: lugar donde se realiza la acción y medio o herramienta con la que se realiza.",
    "Usar と para expresar compañía con quien realizas la acción.",
    "Usar に como destinatario o receptor de la acción, y entender que muchas veces puede ayudarte pensar en ello como objeto indirecto.",
    "Reconocer que no todos los verbos usan を con personas y que verbos como 話す o 会う pueden cambiar el matiz según lleven に o と.",
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
      id: "lesson-019-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "En las unidades anteriores dejaste preparada la base de los grupos verbales y la transformación a forma ます. Ahora toca el paso fuerte: usar esos verbos dentro de oraciones reales. En esta unidad no veremos todavía verbos de movimiento como 行く, 来る o 帰る. Aquí el foco está en los verbos de acción y en cómo las partículas organizan el objeto, el lugar, la compañía, el medio y el destinatario de la acción.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Verás patrones como:",
              jp: ruby("[申込書|もうしこみしょ]を[書|か]きます。 / [自習室|じしゅうしつ]でレポートを[書|か]きます。"),
            },
            {
              es: "También trabajarás compañía y herramienta con:",
              jp: ruby("[同級生|どうきゅうせい]とバドミントンを[練習|れんしゅう]します。 / はさみで[布|ぬの]を[切|き]ります。"),
            },
            {
              es: "Y al final entrarás a verbos que merecen cuidado, como:",
              jp: ruby("[先輩|せんぱい]に[話|はな]します。 / [先輩|せんぱい]と[話|はな]します。 / [部長|ぶちょう]に[会|あ]います。"),
            },
          ],
        },
      ],
    },
    {
      id: "lesson-019-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "El verbo ahora organiza la oración desde el final",
          content:
            "Hasta aquí ya habías visto oraciones nominales, existencia y varios patrones con partículas, pero ahora el verbo de acción empieza a mandar de otra manera. Lo más importante es dejar fijo que el verbo sigue yendo al final y que, antes de él, aparecen los bloques que dicen qué recibe la acción, dónde ocurre, con quién se realiza, con qué se hace o a quién va dirigida.",
          bullets: [
            {
              jp: ruby("[申込書|もうしこみしょ]を[書|か]きます。"),
              es: "primero aparece el objeto directo y al final el verbo",
            },
            {
              jp: ruby("[食堂|しょくどう]でうどんを[食|た]べます。"),
              es: "el lugar de la acción aparece antes del objeto y del verbo",
            },
            {
              jp: ruby("[先輩|せんぱい]にメールを[送|おく]ります。"),
              es: "el destinatario aparece antes del objeto y del verbo",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "を responde a la pregunta “qué es lo que recibe la acción”",
          content:
            "Aquí conviene pensar を de forma muy concreta. Si bebes, ¿qué bebes? Si escribes, ¿qué escribes? Si envías, ¿qué envías? Si practicas, ¿qué practicas? La partícula を marca justamente esa pieza que recibe de forma directa la acción del verbo.",
          bullets: [
            {
              jp: ruby("[薬|くすり]を[飲|の]みます。"),
              es: "qué tomo → 薬",
            },
            {
              jp: ruby("[名刺|めいし]を[渡|わた]します。"),
              es: "qué entrego → 名刺",
            },
            {
              jp: ruby("バドミントンを[練習|れんしゅう]します。"),
              es: "qué practico → バドミントン",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "で aquí tiene dos funciones grandes",
          content:
            "Dentro de esta unidad, で no debe aprenderse como una sola etiqueta vaga. Aquí lo vamos a trabajar con dos funciones muy visibles. Primero, marca el lugar donde se realiza la acción. Segundo, marca el medio o la herramienta con la que la acción se lleva a cabo.",
          bullets: [
            {
              jp: ruby("[自習室|じしゅうしつ]でレポートを[書|か]きます。"),
              es: "で = lugar donde se realiza la acción",
            },
            {
              jp: ruby("ボールペンで[予定表|よていひょう]を[書|か]きます。"),
              es: "で = herramienta o medio",
            },
            {
              jp: ruby("タブレットで[写真|しゃしん]を[見|み]ます。"),
              es: "de nuevo で = medio",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "に aquí conviene verlo como destinatario o receptor",
          content:
            "En muchos ejemplos del español, a esta función se le llama objeto indirecto, y eso puede ayudarte al inicio. Pero en esta unidad nos servirá más verla como destinatario o receptor de la acción. Es la persona hacia la que va lo que escribes, muestras, enseñas, mandas, entregas o cuentas.",
          bullets: [
            {
              jp: ruby("[部長|ぶちょう]に[書類|しょるい]を[見|み]せます。"),
              es: "la persona que recibe la acción es 部長",
            },
            {
              jp: ruby("[後輩|こうはい]に[発音|はつおん]を[教|おし]えます。"),
              es: "la persona destinataria es 後輩",
            },
            {
              jp: ruby("[先輩|せんぱい]にメールを[送|おく]ります。"),
              es: "la persona receptora es 先輩",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Con 会う y 話す no todo funciona igual que con を",
          content:
            "Aquí entra un punto importante de madurez verbal: no todos los verbos de acción usan を con personas. Con 話す y 会う aparecen matices que debes observar con cuidado. に puede sentirse más directo, más dirigido hacia la otra persona. と suele sentirse más mutuo, más compartido o más de “hacer la acción con alguien”.",
          bullets: [
            {
              jp: ruby("[森下|もりした]さんに[話|はな]します。"),
              es: "yo le hablo a Morishita",
            },
            {
              jp: ruby("[真由|まゆ]さんと[話|はな]します。"),
              es: "hablo con Mayu, con matiz más mutuo",
            },
            {
              jp: ruby("[部長|ぶちょう]に[会|あ]います。 / [同級生|どうきゅうせい]と[会|あ]います。"),
              es: "las dos existen, pero no suenan exactamente igual",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-019-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-019-1",
              label: "Objeto directo",
              pattern: ruby("A を Vます。"),
              meaning: "Realizo V sobre A.",
              translation:
                "Esta es la puerta principal de la unidad. A es la cosa que recibe directamente la acción del verbo.",
              structure: [
                {
                  slot: "A",
                  value: "objeto directo",
                  note: {
                    es: "Puede ser algo como:",
                    jp: ruby("[宿題|しゅくだい] / [名刺|めいし] / [書類|しょるい] / [予定表|よていひょう] / [薬|くすり]。"),
                  },
                },
                {
                  slot: { jp: ruby("を") },
                  value: "marca del objeto directo",
                  note: "Aquí responde a la pregunta “qué recibe directamente la acción”.",
                },
                {
                  slot: "Vます",
                  value: "verbo de acción",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[書|か]きます / [飲|の]みます / [見|み]せます / [送|おく]ります / [返|かえ]します。"),
                  },
                },
              ],
              notes: [
                "La partícula を no explica todo el verbo, pero sí te ayuda a ver qué bloque cae directamente bajo la acción.",
              ],
            },
            {
              id: "pattern-019-2",
              label: "Lugar donde se realiza la acción",
              pattern: ruby("B で A を Vます。"),
              meaning: "En B realizo V sobre A.",
              translation:
                "Aquí で marca el lugar donde ocurre la acción. No habla de existencia ni de destino: habla del escenario donde se realiza el verbo.",
              structure: [
                {
                  slot: "B",
                  value: "lugar de acción",
                  note: {
                    es: "Puede ser algo como:",
                    jp: ruby("[自習室|じしゅうしつ] / [食堂|しょくどう] / [会議室|かいぎしつ] / [体育館|たいいくかん] / [美容室|びようしつ]。"),
                  },
                },
                {
                  slot: { jp: ruby("で") },
                  value: "lugar de acción",
                  note: "Aquí marca el sitio donde se realiza el verbo.",
                },
                {
                  slot: "A を Vます",
                  value: "acción principal",
                  note: "El objeto y el verbo siguen el patrón base de esta unidad.",
                },
              ],
              notes: [
                "Compáralo con la unidad 10, en donde に marcaba el lugar de existencia; aquí で marca el lugar de acción.",
              ],
            },
            {
              id: "pattern-019-3",
              label: "Compañía",
              pattern: ruby("C と B で A を Vます。"),
              meaning: "Con C, en B, realizo V sobre A.",
              translation:
                "Aquí と ya no une solo listas de cosas como en una unidad anterior. Ahora también marca con quién realizas la acción.",
              structure: [
                {
                  slot: "C",
                  value: "compañía",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[同級生|どうきゅうせい] / [先輩|せんぱい] / [後輩|こうはい] / [姉|あね]。"),
                  },
                },
                {
                  slot: { jp: ruby("と") },
                  value: "con quién",
                  note: "Marca compañía o realización conjunta de la acción.",
                },
                {
                  slot: "B で",
                  value: "lugar de acción",
                  note: "Sigue marcando dónde se realiza la acción.",
                },
                {
                  slot: "A を Vます",
                  value: "acción principal",
                  note: "El bloque central del verbo se mantiene igual.",
                },
              ],
              notes: [
                "No confundas este と con el と de lista nominal, aunque los dos compartan la idea de unión explícita.",
              ],
            },
            {
              id: "pattern-019-4",
              label: "Medio o herramienta",
              pattern: ruby("D で A を Vます。"),
              meaning: "Con D realizo V sobre A.",
              translation:
                "Aquí で ya no marca lugar. Marca el medio, instrumento o herramienta con la que realizas la acción.",
              structure: [
                {
                  slot: "D",
                  value: "herramienta o medio",
                  note: {
                    es: "Puede ser algo como:",
                    jp: ruby("[箸|はし] / スプーン / はさみ / タブレット / キーボード / ボールペン。"),
                  },
                },
                {
                  slot: { jp: ruby("で") },
                  value: "medio o herramienta",
                  note: "La partícula es la misma que en el lugar de acción, pero la función la define el tipo de palabra que aparece antes.",
                },
                {
                  slot: "A を Vます",
                  value: "acción principal",
                  note: "El objeto directo y el verbo siguen funcionando igual.",
                },
              ],
              notes: [
                "Aquí conviene entrenar la lectura de la frase completa y no asumir que で siempre significa exactamente lo mismo.",
              ],
            },
            {
              id: "pattern-019-5",
              label: "Destinatario o receptor",
              pattern: ruby("E に A を Vます。"),
              meaning: "A va dirigido a E.",
              translation:
                "Aquí に marca a quién va dirigida la acción. Puedes pensarla muchas veces como objeto indirecto, pero en esta unidad nos servirá más verla como destinatario o receptor.",
              structure: [
                {
                  slot: "E",
                  value: "destinatario",
                  note: {
                    es: "Puede ser una persona como:",
                    jp: ruby("[先輩|せんぱい] / [部長|ぶちょう] / [後輩|こうはい] / [客|きゃく]。"),
                  },
                },
                {
                  slot: { jp: ruby("に") },
                  value: "destinatario o receptor",
                  note: "Marca a quién va dirigida la acción.",
                },
                {
                  slot: "A を Vます",
                  value: "objeto + verbo",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("メールを[送|おく]ります / [名刺|めいし]を[渡|わた]します / [発音|はつおん]を[教|おし]えます。"),
                  },
                },
              ],
              notes: [
                "No todo に de japonés hace el mismo trabajo, pero en esta unidad esta función debe quedar muy clara.",
              ],
            },
            {
              id: "pattern-019-6",
              label: "Verbos con persona marcada por に o と",
              pattern: ruby("X に[話|はな]します。 / X と[話|はな]します。 / X に[会|あ]います。 / X と[会|あ]います。"),
              meaning: "Con algunos verbos, la persona no entra con を.",
              translation:
                "Esta familia conviene verla como un bloque especial. Aquí el tipo de verbo hace que la relación con la persona se marque de otra manera. に suele sentirse más directo o dirigido hacia esa persona. と suele sentirse más compartido o mutuo.",
              structure: [
                {
                  slot: "X に",
                  value: "persona como objetivo directo de la interacción",
                  note: "Muy visible con 話す y también posible con 会う.",
                },
                {
                  slot: "X と",
                  value: "persona como compañero de interacción",
                  note: "Se siente más claramente mutuo o compartido.",
                },
              ],
              notes: [
                "No hace falta convertir este matiz en una teoría enorme todavía; primero conviene reconocerlo y leerlo bien.",
              ],
            },
          ],
        },
        {
          type: "table",
          title: "Mapa rápido de partículas en verbos de acción",
          description:
            "Esta tabla resume la función principal que queremos fijar en la unidad. No la aprendas como traducción suelta: úsala como mapa de lectura dentro de la oración.",
          columns: [
            { key: "particle", label: "Partícula", width: "16%", align: "center" },
            { key: "question", label: "Pregunta guía", width: "24%" },
            { key: "function", label: "Función aquí", width: "28%" },
            { key: "example", label: "Ejemplo", width: "32%" },
          ],
          rows: [
            {
              id: "map-wo",
              cells: {
                particle: { jp: ruby("を") },
                question: "¿qué recibe la acción?",
                function: "objeto directo",
                example: { jp: ruby("[薬|くすり]を[飲|の]みます。") },
              },
            },
            {
              id: "map-de-place",
              cells: {
                particle: { jp: ruby("で") },
                question: "¿dónde hago la acción?",
                function: "lugar de acción",
                example: { jp: ruby("[食堂|しょくどう]でうどんを[食|た]べます。") },
              },
            },
            {
              id: "map-to",
              cells: {
                particle: { jp: ruby("と") },
                question: "¿con quién hago la acción?",
                function: "compañía",
                example: { jp: ruby("[同級生|どうきゅうせい]とバドミントンを[練習|れんしゅう]します。") },
              },
            },
            {
              id: "map-de-tool",
              cells: {
                particle: { jp: ruby("で") },
                question: "¿con qué lo hago?",
                function: "medio o herramienta",
                example: { jp: ruby("はさみで[布|ぬの]を[切|き]ります。") },
              },
            },
            {
              id: "map-ni",
              cells: {
                particle: { jp: ruby("に") },
                question: "¿a quién va dirigida la acción?",
                function: "destinatario o receptor",
                example: { jp: ruby("[先輩|せんぱい]にメールを[送|おく]ります。") },
              },
            },
          ],
          zebra: true,
        },
        {
          type: "table",
          title: "Orden base útil para empezar",
          description:
            "El japonés permite bastante flexibilidad, pero para arrancar conviene trabajar con un orden estable. Esta no es la única posibilidad del idioma, pero sí una base muy útil para producción inicial.",
          columns: [
            { key: "slot", label: "Bloque", width: "26%" },
            { key: "role", label: "Papel", width: "34%" },
            { key: "example", label: "Ejemplo", width: "40%" },
          ],
          rows: [
            {
              id: "order-time",
              cells: {
                slot: "[tiempo]",
                role: "ancla temporal opcional",
                example: { jp: ruby("[昨日|きのう] / [今日|きょう] / [毎朝|まいあさ]") },
              },
            },
            {
              id: "order-person",
              cells: {
                slot: "[compañía / destinatario]",
                role: "con quién o a quién",
                example: { jp: ruby("[同級生|どうきゅうせい]と / [先輩|せんぱい]に") },
              },
            },
            {
              id: "order-place-tool",
              cells: {
                slot: "[lugar / medio]",
                role: "dónde o con qué",
                example: { jp: ruby("[自習室|じしゅうしつ]で / タブレットで") },
              },
            },
            {
              id: "order-object",
              cells: {
                slot: "[objeto]",
                role: "lo que recibe la acción",
                example: { jp: ruby("[宿題|しゅくだい]を / [書類|しょるい]を / [写真|しゃしん]を") },
              },
            },
            {
              id: "order-verb",
              cells: {
                slot: "[verbo]",
                role: "acción principal",
                example: { jp: ruby("[書|か]きます / [送|おく]ります / [見|み]ます") },
              },
            },
          ],
          zebra: true,
        },
      ],
    },
    {
      id: "lesson-019-vocabulary",
      kind: "vocabulary",
      title: "Vocabulario nuevo para esta unidad",
      description:
        "Aquí el objetivo es ampliar el repertorio de acciones y de sustantivos que realmente te permitan construir escenas variadas, no repetir siempre los mismos cuatro ejemplos.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 4,
          items: [
            { id: "v019-verb-send", jp: ruby("[送|おく]る"), reading: "おくる", meaning: "enviar", tags: ["verbo", "accion"] },
            { id: "v019-verb-give", jp: ruby("[渡|わた]す"), reading: "わたす", meaning: "entregar / pasar", tags: ["verbo", "accion"] },
            { id: "v019-verb-show", jp: ruby("[見|み]せる"), reading: "みせる", meaning: "mostrar", tags: ["verbo", "accion"] },
            { id: "v019-verb-teach", jp: ruby("[教|おし]える"), reading: "おしえる", meaning: "enseñar", tags: ["verbo", "accion"] },

            { id: "v019-verb-return", jp: ruby("[返|かえ]す"), reading: "かえす", meaning: "devolver", tags: ["verbo", "accion"] },
            { id: "v019-verb-borrow", jp: ruby("[借|か]りる"), reading: "かりる", meaning: "pedir prestado", tags: ["verbo", "accion"] },
            { id: "v019-verb-wash", jp: ruby("[洗|あら]う"), reading: "あらう", meaning: "lavar", tags: ["verbo", "accion"] },
            { id: "v019-verb-cut", jp: ruby("[切|き]る"), reading: "きる", meaning: "cortar", tags: ["verbo", "accion"] },

            { id: "v019-verb-draw", jp: ruby("[描|えが]く"), reading: "えがく", meaning: "dibujar", tags: ["verbo", "accion"] },
            { id: "v019-verb-fix", jp: ruby("[直|なお]す"), reading: "なおす", meaning: "arreglar / corregir", tags: ["verbo", "accion"] },
            { id: "v019-verb-contact", jp: ruby("[連絡|れんらく]する"), reading: "れんらくする", meaning: "contactar / ponerse en contacto", tags: ["verbo", "accion"] },
            { id: "v019-verb-reserve", jp: ruby("[予約|よやく]する"), reading: "よやくする", meaning: "reservar", tags: ["verbo", "accion"] },

            { id: "v019-verb-consult", jp: ruby("[相談|そうだん]する"), reading: "そうだんする", meaning: "consultar / hablar un tema", tags: ["verbo", "accion"] },
            { id: "v019-verb-practice", jp: ruby("[練習|れんしゅう]する"), reading: "れんしゅうする", meaning: "practicar", tags: ["verbo", "accion"] },
            { id: "v019-verb-introduce", jp: ruby("[紹介|しょうかい]する"), reading: "しょうかいする", meaning: "presentar / introducir", tags: ["verbo", "accion"] },
            { id: "v019-verb-repair", jp: ruby("[修理|しゅうり]する"), reading: "しゅうりする", meaning: "reparar", tags: ["verbo", "accion"] },

            { id: "v019-bento", jp: ruby("[弁当|べんとう]"), reading: "べんとう", meaning: "almuerzo en caja / bentō", tags: ["comida"] },
            { id: "v019-schedule", jp: ruby("[予定表|よていひょう]"), reading: "よていひょう", meaning: "agenda / tabla de horarios", tags: ["documento"] },
            { id: "v019-form", jp: ruby("[申込書|もうしこみしょ]"), reading: "もうしこみしょ", meaning: "formulario de solicitud", tags: ["documento"] },
            { id: "v019-card", jp: ruby("[名刺|めいし]"), reading: "めいし", meaning: "tarjeta de presentación", tags: ["documento"] },

            { id: "v019-file", jp: ruby("[書類|しょるい]"), reading: "しょるい", meaning: "documentos", tags: ["documento"] },
            { id: "v019-homework", jp: ruby("[宿題|しゅくだい]"), reading: "しゅくだい", meaning: "tarea", tags: ["estudio"] },
            { id: "v019-pronunciation", jp: ruby("[発音|はつおん]"), reading: "はつおん", meaning: "pronunciación", tags: ["estudio"] },
            { id: "v019-report", jp: ruby("レポート"), reading: "れぽーと", meaning: "reporte / trabajo escrito", tags: ["estudio"] },

            { id: "v019-cloth", jp: ruby("[布|ぬの]"), reading: "ぬの", meaning: "tela / paño", tags: ["objeto"] },
            { id: "v019-soup", jp: ruby("スープ"), reading: "すーぷ", meaning: "sopa", tags: ["comida"] },
            { id: "v019-vegetable", jp: ruby("[野菜|やさい]"), reading: "やさい", meaning: "verduras", tags: ["comida"] },
            { id: "v019-udon", jp: ruby("うどん"), reading: "うどん", meaning: "udon", tags: ["comida"] },

            { id: "v019-curry", jp: ruby("カレー"), reading: "かれー", meaning: "curry", tags: ["comida"] },
            { id: "v019-guitar", jp: ruby("ギター"), reading: "ぎたー", meaning: "guitarra", tags: ["objeto"] },
            { id: "v019-badminton", jp: ruby("バドミントン"), reading: "ばどみんとん", meaning: "bádminton", tags: ["deporte"] },
            { id: "v019-mail", jp: ruby("メール"), reading: "めーる", meaning: "correo / mail", tags: ["comunicacion"] },

            { id: "v019-photo", jp: ruby("[写真|しゃしん]"), reading: "しゃしん", meaning: "foto", tags: ["objeto"] },
            { id: "v019-chopsticks", jp: ruby("[箸|はし]"), reading: "はし", meaning: "palillos", tags: ["herramienta"] },
            { id: "v019-spoon", jp: ruby("スプーン"), reading: "すぷーん", meaning: "cuchara", tags: ["herramienta"] },
            { id: "v019-scissors", jp: ruby("はさみ"), reading: "はさみ", meaning: "tijeras", tags: ["herramienta"] },

            { id: "v019-tablet", jp: ruby("タブレット"), reading: "たぶれっと", meaning: "tablet", tags: ["herramienta"] },
            { id: "v019-keyboard", jp: ruby("キーボード"), reading: "きーぼーど", meaning: "teclado", tags: ["herramienta"] },
            { id: "v019-pen", jp: ruby("ボールペン"), reading: "ぼーるぺん", meaning: "bolígrafo", tags: ["herramienta"] },
            { id: "v019-catalog", jp: ruby("カタログ"), reading: "かたろぐ", meaning: "catálogo", tags: ["documento"] },

            { id: "v019-cafeteria", jp: ruby("[食堂|しょくどう]"), reading: "しょくどう", meaning: "comedor / cafetería", tags: ["lugar"] },
            { id: "v019-study-room", jp: ruby("[自習室|じしゅうしつ]"), reading: "じしゅうしつ", meaning: "sala de estudio", tags: ["lugar"] },
            { id: "v019-gym", jp: ruby("[体育館|たいいくかん]"), reading: "たいいくかん", meaning: "gimnasio", tags: ["lugar"] },
            { id: "v019-market", jp: ruby("[市場|いちば]"), reading: "いちば", meaning: "mercado", tags: ["lugar"] },

            { id: "v019-music-room", jp: ruby("[音楽室|おんがくしつ]"), reading: "おんがくしつ", meaning: "sala de música", tags: ["lugar"] },
            { id: "v019-cafe", jp: ruby("[喫茶店|きっさてん]"), reading: "きっさてん", meaning: "cafetería / salón de té", tags: ["lugar"] },
            { id: "v019-salon", jp: ruby("[美容室|びようしつ]"), reading: "びようしつ", meaning: "peluquería / salón de belleza", tags: ["lugar"] },
            { id: "v019-meeting-room", jp: ruby("[会議室|かいぎしつ]"), reading: "かいぎしつ", meaning: "sala de reuniones", tags: ["lugar"] },

            { id: "v019-reception", jp: ruby("[受付|うけつけ]"), reading: "うけつけ", meaning: "recepción", tags: ["lugar"] },
            { id: "v019-classmate", jp: ruby("[同級生|どうきゅうせい]"), reading: "どうきゅうせい", meaning: "compañero / compañera de curso", tags: ["persona"] },
            { id: "v019-senpai", jp: ruby("[先輩|せんぱい]"), reading: "せんぱい", meaning: "senpai / persona de curso superior", tags: ["persona"] },
            { id: "v019-kouhai", jp: ruby("[後輩|こうはい]"), reading: "こうはい", meaning: "kohai / persona de curso inferior", tags: ["persona"] },

            { id: "v019-manager", jp: ruby("[部長|ぶちょう]"), reading: "ぶちょう", meaning: "jefe de sección / manager", tags: ["persona"] },
            { id: "v019-customer", jp: ruby("[客|きゃく]"), reading: "きゃく", meaning: "cliente", tags: ["persona"] },
          ],
        },
      ],
    },
    {
      id: "lesson-019-examples",
      kind: "examples",
      title: "Ejemplos guiados",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "ex-019-1",
              jp: ruby("[朝|あさ]、[箸|はし]で[弁当|べんとう]を[食|た]べます。"),
              es: "Por la mañana, como bentō con palillos.",
              breakdown: [
                { label: "箸で", es: "herramienta" },
                { label: "弁当を", es: "objeto directo" },
              ],
            },
            {
              id: "ex-019-2",
              jp: ruby("[自習室|じしゅうしつ]でレポートを[書|か]きます。"),
              es: "Escribo el reporte en la sala de estudio.",
              breakdown: [
                { label: "自習室で", es: "lugar de acción" },
                { label: "レポートを", es: "objeto directo" },
              ],
            },
            {
              id: "ex-019-3",
              jp: ruby("[先輩|せんぱい]に[予定表|よていひょう]を[見|み]せます。"),
              es: "Le muestro la agenda al senpai.",
              notes: [
                {
                  es: "Aquí 先輩 no recibe を. La persona entra como destinatario con に.",
                },
              ],
            },
            {
              id: "ex-019-4",
              jp: ruby("[同級生|どうきゅうせい]と[体育館|たいいくかん]でバドミントンを[練習|れんしゅう]します。"),
              es: "Practico bádminton con un compañero de curso en el gimnasio.",
              notes: [
                {
                  es: "Aquí conviven compañía, lugar de acción, objeto y verbo.",
                },
              ],
            },
            {
              id: "ex-019-5",
              jp: ruby("タブレットで[市場|いちば]の[写真|しゃしん]を[見|み]ます。"),
              es: "Miro las fotos del mercado en la tablet.",
              notes: [
                {
                  es: "Aquí で marca medio, no lugar.",
                },
              ],
            },
            {
              id: "ex-019-6",
              jp: ruby("はさみで[布|ぬの]を[切|き]ります。"),
              es: "Corto la tela con tijeras.",
            },
            {
              id: "ex-019-7",
              jp: ruby("[後輩|こうはい]に[発音|はつおん]を[教|おし]えます。"),
              es: "Le enseño pronunciación al kohai.",
            },
            {
              id: "ex-019-8",
              jp: ruby("[部長|ぶちょう]に[名刺|めいし]を[渡|わた]します。"),
              es: "Le entrego una tarjeta de presentación al jefe de sección.",
            },
            {
              id: "ex-019-9",
              jp: ruby("[食堂|しょくどう]でうどんとサラダを[食|た]べます。"),
              es: "Como udon y ensalada en el comedor.",
              notes: [
                {
                  es: "Aquí と une dos objetos dentro del mismo bloque nominal.",
                },
              ],
            },
            {
              id: "ex-019-10",
              jp: ruby("[美容室|びようしつ]でカタログを[読|よ]みます。"),
              es: "Leo un catálogo en la peluquería.",
            },
            {
              id: "ex-019-11",
              jp: ruby("[森下|もりした]さんに[話|はな]します。"),
              es: "Le hablo a Morishita.",
              notes: [
                {
                  es: "Aquí la interacción se siente dirigida hacia la otra persona.",
                },
              ],
            },
            {
              id: "ex-019-12",
              jp: ruby("[真由|まゆ]さんと[話|はな]します。"),
              es: "Hablo con Mayu.",
              notes: [
                {
                  es: "Aquí la interacción se siente más compartida o mutua.",
                },
              ],
            },
            {
              id: "ex-019-13",
              jp: ruby("[昨日|きのう]、テレビでアニメのキャラクターが[死|し]にました。"),
              es: "Ayer, un personaje de anime murió en televisión.",
              notes: [
                {
                  es: "Este ejemplo ayuda a recordar que no todos los verbos de acción llevan を. Aquí キャラクター entra con が.",
                },
              ],
            },
            {
              id: "ex-019-14",
              jp: ruby("[受付|うけつけ]で[申込書|もうしこみしょ]を[書|か]きます。"),
              es: "Escribo el formulario de solicitud en recepción.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-019-contrast",
      kind: "contrast",
      title: "Contrastes que conviene fijar",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-019-1",
              label: "で de lugar de acción vs に de existencia",
              correct: {
                jp: ruby("[会議室|かいぎしつ]で[相談|そうだん]します。 / [会議室|かいぎしつ]に[部長|ぶちょう]がいます。"),
                es: "Una misma palabra de lugar puede tomar una partícula distinta según el tipo de verbo y la función de la frase.",
              },
              explanation:
                "Si la frase habla de realizar una acción, aquí entra で. Si la frase habla de existencia o presencia, reaparece la lógica de に + あります / います que ya trabajaste antes.",
            },
            {
              id: "contrast-019-2",
              label: "で de lugar vs で de herramienta",
              correct: {
                jp: ruby("[自習室|じしゅうしつ]でレポートを[書|か]きます。 / ボールペンでレポートを[書|か]きます。"),
                es: "La partícula es la misma, pero cambia la función según el bloque anterior.",
              },
              explanation:
                "En la primera oración, 自習室 es un lugar. En la segunda, ボールペン es una herramienta. Por eso la lectura correcta depende del sustantivo anterior y de la acción completa.",
            },
            {
              id: "contrast-019-3",
              label: "と de compañía vs と de lista",
              correct: {
                jp: ruby("[先輩|せんぱい]と[音楽室|おんがくしつ]でギターを[練習|れんしゅう]します。 / ギターとベースを[練習|れんしゅう]します。"),
                es: "La misma partícula puede unir personas como compañía o unir sustantivos dentro de un mismo bloque.",
              },
              explanation:
                "En la primera, と significa con quién realizas la acción. En la segunda, と une dos objetos dentro del mismo grupo nominal.",
            },
            {
              id: "contrast-019-4",
              label: "話す con に y 話す con と",
              correct: {
                jp: ruby("[先輩|せんぱい]に[話|はな]します。 / [先輩|せんぱい]と[話|はな]します。"),
                es: "Las dos existen, pero no se sienten igual.",
              },
              explanation:
                "Con に, la acción se siente más dirigida hacia la otra persona. Con と, la interacción se siente más compartida o mutua.",
            },
            {
              id: "contrast-019-5",
              label: "No todos los verbos usan を",
              correct: {
                jp: ruby("[部長|ぶちょう]に[会|あ]います。 / アニメのキャラクターが[死|し]にました。"),
                es: "Hay verbos donde la persona o el referente no entran con を.",
              },
              explanation:
                "Eso es importante para esta etapa: no conviene pensar que toda oración verbal necesita automáticamente un objeto directo con を.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-019-warning",
      kind: "warning",
      title: "Dónde suele confundirse todo",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "No intentes usar la misma partícula para todos los verbos",
          content:
            "En esta unidad el error más común es pensar que una vez que aparece un verbo, ya debe entrar を por fuerza. Otro error frecuente es usar に para el lugar de acción porque antes ya habías visto に con lugares en la unidad de existencia. Aquí conviene volver siempre a la función concreta de cada bloque.",
          bullets: [
            {
              jp: ruby("[自習室|じしゅうしつ]でレポートを[書|か]きます。"),
              es: "si el lugar es donde se realiza la acción, aquí entra で",
            },
            {
              jp: ruby("[先輩|せんぱい]にメールを[送|おく]ります。"),
              es: "si la persona recibe la acción, aquí entra に",
            },
            {
              jp: ruby("[森下|もりした]さんと[話|はな]します。"),
              es: "si la interacción es con alguien, aquí puede entrar と",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-019-practice",
      kind: "practice",
      title: "Práctica guiada antes del quiz",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Escribe primero diez oraciones muy cortas solo con objeto directo.",
              jp: ruby("[宿題|しゅくだい]をします。 / [書類|しょるい]を[読|よ]みます。 / [野菜|やさい]を[洗|あら]います。"),
            },
            {
              es: "Después toma las mismas acciones y añádeles un lugar con",
              jp: ruby("で"),
              note: "para distinguir con claridad la escena donde se realiza la acción.",
            },
            {
              es: "Luego rehace varias oraciones cambiando el medio o herramienta con",
              jp: ruby("で"),
              note: "por ejemplo con はさみ, タブレット, キーボード o ボールペン.",
            },
            {
              es: "Practica al menos seis frases con destinatario usando",
              jp: ruby("に"),
              note: "por ejemplo con 先輩, 後輩, 部長 o 客.",
            },
            {
              es: "Cierra la práctica con contrastes de",
              jp: ruby("[話|はな]す / [会|あ]う"),
              note: "para notar la diferencia entre に y と sin intentar reducirla a una fórmula demasiado rígida.",
            },
          ],
        },
        {
          type: "resource-links",
          title: "Apoyo complementario",
          description:
            "Si quieres volver a revisar la transformación de los verbos antes o después de esta lesson, usa también la sección de gramática dedicada al sistema verbal y a los grupos.",
          items: [
            {
              id: "link-019-verbs",
              label: "Ir a la sección de verbos",
              href: "/gramatica/verbos",
              jp: ruby("[動詞|どうし]のページ"),
              description: "Repaso general del sistema verbal que conecta con esta unidad de uso.",
              tone: "accent",
            },
            {
              id: "link-019-groups",
              label: "Ir a grupos verbales",
              href: "/gramatica/verbos/grupos",
              jp: ruby("[動詞|どうし]グループ"),
              description: "Revisión rápida de grupo 1, grupo 2 e irregulares antes de seguir con más partículas.",
              tone: "default",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-019-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Puedo usar",
              jp: ruby("を"),
              note: "para marcar qué cosa recibe directamente la acción.",
            },
            {
              es: "Puedo distinguir dos usos principales de",
              jp: ruby("で"),
              note: "lugar de acción y medio / herramienta.",
            },
            {
              es: "Puedo usar",
              jp: ruby("と"),
              note: "para expresar compañía al realizar una acción.",
            },
            {
              es: "Puedo usar",
              jp: ruby("に"),
              note: "para marcar a quién va dirigida la acción.",
            },
            {
              es: "Recuerdo que verbos como",
              jp: ruby("[話|はな]す / [会|あ]う"),
              note: "no siempre siguen el patrón de objeto directo con を cuando la otra persona entra en la oración.",
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-019-quiz",
    title: "Quiz — Verbos de acción I",
    description:
      "Repaso fuerte de partículas con verbos de acción. Aquí el foco principal es leer la escena y decidir qué partícula encaja mejor según la función del bloque dentro de la oración.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "fill-blank",
        prompt: {
          jp: ruby("[弁当|べんとう]（　）[食|た]べます。"),
        },
        acceptedAnswers: ["を"],
        placeholder: "助詞",
        explanation:
          "Aquí 弁当 recibe directamente la acción de comer. Por eso entra を.",
        relatedSectionIds: ["lesson-019-structure", "lesson-019-examples"],
      },
      {
        id: "q2",
        type: "fill-blank",
        prompt: {
          jp: ruby("[食堂|しょくどう]（　）うどんを[食|た]べます。"),
        },
        acceptedAnswers: ["で"],
        placeholder: "助詞",
        explanation:
          "Aquí 食堂 es el lugar donde se realiza la acción de comer. Por eso entra で.",
        relatedSectionIds: ["lesson-019-structure", "lesson-019-examples"],
      },
      {
        id: "q3",
        type: "fill-blank",
        prompt: {
          jp: ruby("[先輩|せんぱい]（　）[予定表|よていひょう]を[見|み]せます。"),
        },
        acceptedAnswers: ["に"],
        placeholder: "助詞",
        explanation:
          "Aquí 先輩 es la persona que recibe lo que se muestra. Por eso entra に.",
        relatedSectionIds: ["lesson-019-structure", "lesson-019-examples"],
      },
      {
        id: "q4",
        type: "fill-blank",
        prompt: {
          jp: ruby("[同級生|どうきゅうせい]（　）[体育館|たいいくかん]でバドミントンを[練習|れんしゅう]します。"),
        },
        acceptedAnswers: ["と"],
        placeholder: "助詞",
        explanation:
          "Aquí la partícula correcta es と porque marca compañía: practico con un compañero.",
        relatedSectionIds: ["lesson-019-structure", "lesson-019-examples"],
      },
      {
        id: "q5",
        type: "fill-blank",
        prompt: {
          jp: ruby("はさみ（　）[布|ぬの]を[切|き]ります。"),
        },
        acceptedAnswers: ["で"],
        placeholder: "助詞",
        explanation:
          "Aquí はさみ es la herramienta con la que realizas la acción. Por eso entra で.",
        relatedSectionIds: ["lesson-019-structure", "lesson-019-examples"],
      },
      {
        id: "q6",
        type: "fill-blank",
        prompt: {
          jp: ruby("[後輩|こうはい]（　）[発音|はつおん]を[教|おし]えます。"),
        },
        acceptedAnswers: ["に"],
        placeholder: "助詞",
        explanation:
          "Aquí 後輩 es el destinatario o receptor de la enseñanza. Por eso entra に.",
        relatedSectionIds: ["lesson-019-structure", "lesson-019-examples"],
      },
      {
        id: "q7",
        type: "fill-blank",
        prompt: {
          jp: ruby("[書類|しょるい]（　）[直|なお]します。"),
        },
        acceptedAnswers: ["を"],
        placeholder: "助詞",
        explanation:
          "Aquí 書類 es lo que recibe directamente la acción de corregir o arreglar. Por eso entra を.",
        relatedSectionIds: ["lesson-019-structure", "lesson-019-vocabulary"],
      },
      {
        id: "q8",
        type: "fill-blank",
        prompt: {
          jp: ruby("[自習室|じしゅうしつ]（　）レポートを[書|か]きます。"),
        },
        acceptedAnswers: ["で"],
        placeholder: "助詞",
        explanation:
          "Aquí 自習室 marca el lugar donde se realiza la acción. Por eso entra で.",
        relatedSectionIds: ["lesson-019-structure", "lesson-019-vocabulary"],
      },
      {
        id: "q9",
        type: "fill-blank",
        prompt: {
          jp: ruby("[部長|ぶちょう]（　）[名刺|めいし]を[渡|わた]します。"),
        },
        acceptedAnswers: ["に"],
        placeholder: "助詞",
        explanation:
          "Aquí 部長 es la persona que recibe la tarjeta. Por eso la partícula natural es に.",
        relatedSectionIds: ["lesson-019-structure", "lesson-019-examples"],
      },
      {
        id: "q10",
        type: "fill-blank",
        prompt: {
          jp: ruby("タブレット（　）[市場|いちば]の[写真|しゃしん]を[見|み]ます。"),
        },
        acceptedAnswers: ["で"],
        placeholder: "助詞",
        explanation:
          "Aquí タブレット no es lugar. Es el medio con el que miras las fotos. Por eso entra で.",
        relatedSectionIds: ["lesson-019-structure", "lesson-019-examples"],
      },
      {
        id: "q11",
        type: "fill-blank",
        prompt: {
          jp: ruby("[先輩|せんぱい]（　）[話|はな]します。"),
        },
        acceptedAnswers: ["に", "と"],
        placeholder: "助詞",
        explanation:
          "Aquí se aceptan に y と, porque las dos formas existen. 先輩に話します se siente más dirigido hacia la otra persona: le hablo al senpai. 先輩と話します se siente más mutuo o compartido: hablo con el senpai.",
        relatedSectionIds: ["lesson-019-structure", "lesson-019-contrast"],
      },
      {
        id: "q12",
        type: "fill-blank",
        prompt: {
          jp: ruby("[部長|ぶちょう]（　）[会|あ]います。"),
        },
        acceptedAnswers: ["に", "と"],
        placeholder: "助詞",
        explanation:
          "Aquí también se aceptan に y と, porque las dos formas pueden aparecer. 部長に会います se siente más directo, como encuentro dirigido hacia esa persona. 部長と会います se siente más compartido o más de encontrarse con alguien.",
        relatedSectionIds: ["lesson-019-structure", "lesson-019-contrast"],
      },
      {
        id: "q13",
        type: "single-choice",
        prompt: {
          jp: ruby("お[客様|きゃくさま]___メールを[送|おく]ります。"),
          note: "いちばん しぜんな じょし を えらんでください。",
        },
        choices: [
          { id: "a", label: { jp: ruby("に") } },
          { id: "b", label: { jp: ruby("を") } },
          { id: "c", label: { jp: ruby("と") } },
          { id: "d", label: { jp: ruby("で") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí 客 es el destinatario del mail. Por eso entra に.",
        relatedSectionIds: ["lesson-019-structure", "lesson-019-vocabulary"],
      },
      {
        id: "q14",
        type: "single-choice",
        prompt: {
          jp: ruby("[音楽室|おんがくしつ]___ギターを[練習|れんしゅう]します。"),
          note: "この ぶん の ばしょ を あらわす じょし は どれですか。",
        },
        choices: [
          { id: "a", label: { jp: ruby("を") } },
          { id: "b", label: { jp: ruby("で") } },
          { id: "c", label: { jp: ruby("に") } },
          { id: "d", label: { jp: ruby("と") } },
        ],
        correctChoiceId: "b",
        explanation:
          "Aquí 音楽室 es el lugar donde se realiza la práctica. Por eso entra で.",
        relatedSectionIds: ["lesson-019-structure", "lesson-019-vocabulary"],
      },
      {
        id: "q15",
        type: "single-choice",
        prompt: {
          jp: ruby("[姉|あね]___[喫茶店|きっさてん]でケーキを[食|た]べます。"),
          note: "「con mi hermana」 に いちばん ちかい もの を えらんでください。",
        },
        choices: [
          { id: "a", label: { jp: ruby("を") } },
          { id: "b", label: { jp: ruby("に") } },
          { id: "c", label: { jp: ruby("と") } },
          { id: "d", label: { jp: ruby("で") } },
        ],
        correctChoiceId: "c",
        explanation:
          "Aquí necesitas と para decir con quién realizas la acción.",
        relatedSectionIds: ["lesson-019-structure", "lesson-019-vocabulary"],
      },
      {
        id: "q16",
        type: "single-choice",
        prompt: {
          jp: ruby("スプーン___カレーを[食|た]べます。"),
          note: "どうぐ を あらわす じょし は どれですか。",
        },
        choices: [
          { id: "a", label: { jp: ruby("を") } },
          { id: "b", label: { jp: ruby("で") } },
          { id: "c", label: { jp: ruby("と") } },
          { id: "d", label: { jp: ruby("に") } },
        ],
        correctChoiceId: "b",
        explanation:
          "Aquí スプーン es la herramienta con la que comes. Por eso entra で.",
        relatedSectionIds: ["lesson-019-structure", "lesson-019-vocabulary"],
      },
      {
        id: "q17",
        type: "single-choice",
        prompt: {
          jp: ruby("[部長|ぶちょう]___[会|あ]います。"),
          note: "あいて に むかう かんじ が つよい もの を えらんでください。",
        },
        choices: [
          { id: "a", label: { jp: ruby("に") } },
          { id: "b", label: { jp: ruby("を") } },
          { id: "c", label: { jp: ruby("で") } },
          { id: "d", label: { jp: ruby("と") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí trabajamos に como una forma muy natural para marcar la persona con la que te encuentras desde una dirección más directa.",
        relatedSectionIds: ["lesson-019-structure", "lesson-019-contrast"],
      },
      {
        id: "q18",
        type: "single-choice",
        prompt: {
          jp: ruby("[真由|まゆ]さん___[会議室|かいぎしつ]で[話|はな]します。"),
          note: "Elige la partícula si la idea es: hablar con Mayu entre ambos.",
        },
        choices: [
          { id: "a", label: { jp: ruby("に") } },
          { id: "b", label: { jp: ruby("で") } },
          { id: "c", label: { jp: ruby("と") } },
          { id: "d", label: { jp: ruby("を") } },
        ],
        correctChoiceId: "c",
        explanation:
          "Aquí と refleja mejor la idea de hablar con alguien de forma compartida.",
        relatedSectionIds: ["lesson-019-structure", "lesson-019-contrast"],
      },
      {
        id: "q19",
        type: "single-choice",
        prompt: {
          jp: ruby("[受付|うけつけ]で[申込書|もうしこみしょ]___[書|か]きます。"),
          note: "いちばん しぜんな じょし を えらんでください。",
        },
        choices: [
          { id: "a", label: { jp: ruby("に") } },
          { id: "b", label: { jp: ruby("と") } },
          { id: "c", label: { jp: ruby("を") } },
          { id: "d", label: { jp: ruby("で") } },
        ],
        correctChoiceId: "c",
        explanation:
          "Aquí 申込書 es lo que se escribe directamente. Por eso entra を.",
        relatedSectionIds: ["lesson-019-structure", "lesson-019-examples"],
      },
      {
        id: "q20",
        type: "single-choice",
        prompt: {
          jp: ruby("[同級生|どうきゅうせい]___[自習室|じしゅうしつ]___[宿題|しゅくだい]をします。"),
          note: "どの くみあわせ が いちばん しぜん ですか。",
        },
        choices: [
          { id: "a", label: { jp: ruby("と / で") } },
          { id: "b", label: { jp: ruby("に / を") } },
          { id: "c", label: { jp: ruby("で / と") } },
          { id: "d", label: { jp: ruby("を / に") } },
        ],
        correctChoiceId: "a",
        explanation:
          "同級生と expresa compañía y 自習室で marca el lugar de acción. Por eso la combinación natural es と / で.",
        relatedSectionIds: ["lesson-019-structure", "lesson-019-summary"],
      },
    ],
  },
};

export default lesson019;
