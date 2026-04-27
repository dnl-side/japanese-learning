//src/data/grammar/lessons/lesson-017.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson017: GrammarLesson = {
  id: "lesson-017",
  slug: "tiempo-basico-pasado-desu-masu",
  order: 20,
  level: "N5",
  status: "ready",
  title: "Tiempo básico I",
  jpTitle: "きのう・きょう・あした / でした・ました",
  shortTitle: "Tiempo básico",
  description:
    "Cómo introducir el tiempo pasado con lo que ya conoces, distinguir entre no pasado y pasado, entender por qué です se comporta distinto del grupo en ます que ya viste hasta ahora, y usar palabras temporales como 昨日・今日・明日 y los días de la semana sin asumir todavía una forma futura independiente.",
  estimatedMinutes: 76,
  categoryTags: ["fundamentos", "tiempo", "pasado", "verbos", "copula", "lectura", "integracion"],
  grammarTags: [
    "昨日",
    "今日",
    "明日",
    "月曜日",
    "火曜日",
    "水曜日",
    "木曜日",
    "金曜日",
    "土曜日",
    "日曜日",
    "です",
    "でした",
    "ではありません",
    "ではありませんでした",
    "じゃありません",
    "じゃありませんでした",
    "あります",
    "いました",
    "ました",
    "ませんでした",
  ],
  searchTerms: [
    "pasado japones basico",
    "deshita mashita",
    "kinou kyou ashita",
    "dias de la semana japones",
    "no pasado y pasado japones",
    "desu irregular mashita regular",
    "arimasu imasu past",
    "wakarimasu dekimasu past",
  ],
  relatedLessonSlugs: [
    "preguntas-basicas-desu-ka",
    "idiomas-ga-dekimasu-wakarimasu",
    "arimasu-imasu-existencia-basica",
    "contadores-basicos-tsu-ko-mai-hon-satsu-nin",
    "familia-y-niveles-escolares",
    "matome-particulas-1-15",
  ],
  relatedVocabularyTags: ["tiempo", "dias", "escuela", "horario", "lectura", "base"],
  objectives: [
    "Entender que en esta etapa trabajamos principalmente con la diferencia entre no pasado y pasado.",
    "Reconocer que です sigue una ruta distinta de las formas en ます que ya conoces.",
    "Usar como base productiva です / ではありません / でした / ではありませんでした, sin ignorar que también existen variantes frecuentes como じゃありません, ではないです o じゃないです.",
    "Ver que あります・います・できます・わかります siguen una cuadrícula más regular: ます / ません / ました / ませんでした.",
    "Usar palabras temporales como 昨日・今日・明日 y los días de la semana para interpretar presente, pasado y referencia futura sin hablar todavía de una forma futura independiente.",
    "Preparar una base limpia antes de entrar de lleno al sistema verbal más amplio.",
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
      id: "lesson-017-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "Hasta ahora ya viste afirmativo y negativo con です, y también algunos verbos muy importantes como あります, います, できます y わかります. En esta unidad vamos a añadir una dimensión nueva: el tiempo. Pero no entraremos todavía a todos los verbos del japonés. La idea aquí es usar lo que ya conoces para entender cómo cambia una frase cuando se mueve del no pasado al pasado.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Primero fijaremos palabras temporales como:",
              jp: ruby("[昨日|きのう] / [今日|きょう] / [明日|あした]。"),
            },
            {
              es: "Después verás que",
              jp: ruby("です"),
              note: "no se comporta igual que los otros verbos que ya conoces.",
            },
            {
              es: "Y al final podrás leer y producir contrastes como:",
              jp: ruby("[昨日|きのう]は[月曜日|げつようび]でした。[今日|きょう]は[火曜日|かようび]です。[明日|あした]は[水曜日|すいようび]です。"),
            },
          ],
        },
      ],
    },
    {
      id: "lesson-017-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Aquí conviene pensar primero en no pasado y pasado",
          content:
            "En esta etapa la división más útil no es presente / pasado / futuro como tres casillas totalmente separadas. Lo que más conviene fijar ahora es no pasado frente a pasado. La forma no pasada puede leerse como presente o como referencia futura según la palabra temporal que la acompañe.",
          bullets: [
            {
              jp: ruby("[今日|きょう]は[火曜日|かようび]です。"),
              es: "no pasado con referencia presente",
            },
            {
              jp: ruby("[明日|あした]は[水曜日|すいようび]です。"),
              es: "misma forma no pasada, pero con referencia futura",
            },
            {
              jp: ruby("[昨日|きのう]は[月曜日|げつようび]でした。"),
              es: "pasado explícito",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "No introducimos una forma futura nueva en esta unidad",
          content:
            "Aquí no vamos a hablar todavía de una conjugación futura distinta. Lo que harás será combinar la forma no pasada con palabras temporales como 明日 o con días de la semana para entender que la referencia puede caer en el futuro sin cambiar la forma principal.",
          bullets: [
            {
              jp: ruby("[明日|あした]は[金曜日|きんようび]です。"),
              es: "la referencia futura nace de 明日, no de una forma verbal nueva",
            },
            {
              jp: ruby("[明日|あした]、[音楽室|おんがくしつ]に[先生|せんせい]がいます。"),
              es: "la forma sigue siendo no pasada",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "です sigue una ruta distinta",
          content:
            "Una de las cosas más importantes de esta unidad es ver que です no toma el pasado y la negación de la misma manera que las formas en ます que ya conoces. Por eso aquí conviene separarlo desde el principio y no asumir que todo el japonés va a conjugar igual.",
          bullets: [
            {
              jp: ruby("です → でした"),
              es: "pasado afirmativo de です",
            },
            {
              jp: ruby("ではありません → ではありませんでした"),
              es: "ruta base de pasado negativo para esta unidad",
            },
            {
              jp: ruby("あります → ありました / ありませんでした"),
              es: "las formas en ます siguen una cuadrícula mucho más pareja",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "También verás otras formas educadas con です",
          content:
            "Aunque aquí fijaremos una base productiva clara, en japonés real también verás otras formas educadas muy frecuentes alrededor de です. No conviene ignorarlas, pero tampoco convertirlas todas en el eje principal de producción desde el primer día.",
          bullets: [
            {
              jp: ruby("じゃありません / じゃありませんでした"),
              es: "variantes conversacionales educadas muy frecuentes",
            },
            {
              jp: ruby("ではないです / じゃないです"),
              es: "formas que también verás bastante en japonés real",
            },
            {
              jp: ruby("ではなかったです / じゃなかったです"),
              es: "formas de pasado negativo que también existen y conviene reconocer",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-017-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-017-1",
              label: "Anclar la frase en el tiempo",
              pattern: ruby("[昨日|きのう] / [今日|きょう] / [明日|あした] + [文|ぶん]"),
              meaning: "La palabra temporal orienta cuándo ocurre o cuándo vale la frase.",
              translation:
                "Aquí el primer paso suele ser temporal. Antes de mirar la forma final de la oración, fíjate si la frase está anclada en ayer, hoy o mañana.",
              structure: [
                {
                  slot: { jp: ruby("[昨日|きのう]") },
                  value: "ayer",
                  note: "Empuja la frase hacia el pasado.",
                },
                {
                  slot: { jp: ruby("[今日|きょう]") },
                  value: "hoy",
                  note: "Sirve como ancla natural del presente.",
                },
                {
                  slot: { jp: ruby("[明日|あした]") },
                  value: "mañana",
                  note: "Marca referencia futura sin exigir una forma futura nueva en esta unidad.",
                },
              ],
              notes: [
                {
                  es: "Antes de conjugar, mira primero la referencia temporal que abre la frase.",
                },
              ],
            },
            {
              id: "pattern-017-2",
              label: "Ruta base de です",
              pattern: ruby("です / ではありません / でした / ではありませんでした"),
              meaning: "No pasado afirmativo, no pasado negativo, pasado afirmativo y pasado negativo con です.",
              translation:
                "Aquí fijamos la cuadrícula base más clara para trabajar con です. Esta será la producción principal de la unidad, aunque luego reconozcas variantes frecuentes de conversación.",
              structure: [
                {
                  slot: { jp: ruby("です") },
                  value: "no pasado afirmativo",
                  note: "La forma base que ya conocías desde el inicio del curso.",
                },
                {
                  slot: { jp: ruby("ではありません") },
                  value: "no pasado negativo",
                  note: "Ruta base más clara y más estable para esta unidad.",
                },
                {
                  slot: { jp: ruby("でした") },
                  value: "pasado afirmativo",
                  note: "Marca que la identificación o el estado nominal valían en el pasado.",
                },
                {
                  slot: { jp: ruby("ではありませんでした") },
                  value: "pasado negativo",
                  note: "La forma base de trabajo que fijamos aquí para el pasado negativo.",
                },
              ],
              notes: [
                {
                  es: "En conversación educada también verás mucho",
                  jp: ruby("じゃありません / じゃありませんでした"),
                  note: "como variantes frecuentes.",
                },
              ],
            },
            {
              id: "pattern-017-3",
              label: "Ruta base del grupo en ます",
              pattern: ruby("ます / ません / ました / ませんでした"),
              meaning: "No pasado afirmativo, no pasado negativo, pasado afirmativo y pasado negativo en el grupo que ya conoces.",
              translation:
                "Con los verbos que ya has visto hasta este punto, la cuadrícula temporal y negativa se siente mucho más pareja. Eso es justamente lo que queremos dejar claro antes de abrir el sistema verbal completo.",
              structure: [
                {
                  slot: { jp: ruby("ます") },
                  value: "no pasado afirmativo",
                  note: "Base conocida en あります・います・できます・わかります.",
                },
                {
                  slot: { jp: ruby("ません") },
                  value: "no pasado negativo",
                  note: "La negación ya la conocías con estos verbos.",
                },
                {
                  slot: { jp: ruby("ました") },
                  value: "pasado afirmativo",
                  note: "Añade referencia pasada dentro del mismo grupo.",
                },
                {
                  slot: { jp: ruby("ませんでした") },
                  value: "pasado negativo",
                  note: "Mantiene la misma lógica regular dentro del grupo.",
                },
              ],
              notes: [
                {
                  es: "Aquí no estamos separando todavía tipos verbales internos; solo fijamos la cuadrícula de trabajo de las formas que ya conocías.",
                },
              ],
            },
            {
              id: "pattern-017-4",
              label: "Contraste temporal simple",
              pattern: ruby("[昨日|きのう]は A でした。[今日|きょう]は B です。[明日|あした]は C です。"),
              meaning: "Ayer fue A. Hoy es B. Mañana es C.",
              translation:
                "Esta estructura es muy útil para empezar a contrastar tiempo con palabras que ya conoces y con sustantivos o categorías simples: días, descanso, clases, prueba, reunión, etc.",
              structure: [
                {
                  slot: "A / B / C",
                  value: "identificación nominal",
                  note: {
                    es: "Puede ser algo como:",
                    jp: ruby("[月曜日|げつようび] / [休|やす]み / [授業|じゅぎょう] / [試験|しけん]。"),
                  },
                },
              ],
              notes: [
                {
                  es: "Este patrón es perfecto para introducir tiempo sin abrir todavía verbos nuevos como 行きます o 食べます.",
                },
              ],
            },
          ],
        },
        {
          type: "table",
          title: "Cuadrícula base de です",
          description:
            "Esta tabla deja fijo el corazón de la unidad. Aquí se ve con claridad que です no se comporta igual que el grupo en ます.",
          columns: [
            { key: "type", label: "Tipo", width: "20%" },
            { key: "nonpastAff", label: "No pasado +", width: "20%" },
            { key: "nonpastNeg", label: "No pasado −", width: "20%" },
            { key: "pastAff", label: "Pasado +", width: "20%" },
            { key: "pastNeg", label: "Pasado −", width: "20%" },
          ],
          rows: [
            {
              id: "desu-standard",
              cells: {
                type: "base de producción",
                nonpastAff: { jp: ruby("です") },
                nonpastNeg: { jp: ruby("ではありません") },
                pastAff: { jp: ruby("でした") },
                pastNeg: { jp: ruby("ではありませんでした") },
              },
            },
            {
              id: "desu-spoken",
              cells: {
                type: "variante conversacional educada",
                nonpastAff: { jp: ruby("です") },
                nonpastNeg: { jp: ruby("じゃありません") },
                pastAff: { jp: ruby("でした") },
                pastNeg: { jp: ruby("じゃありませんでした") },
              },
            },
          ],
          zebra: true,
        },
        {
          type: "table",
          title: "Otras formas de です que también conviene reconocer",
          description:
            "No las ignoramos, pero tampoco las convertimos aquí en el eje central de producción. La idea es que las reconozcas pronto sin volver caótica la base.",
          columns: [
            { key: "form", label: "Forma", width: "32%" },
            { key: "idea", label: "Qué expresa", width: "28%" },
            { key: "status", label: "Cómo la tratamos aquí", width: "40%" },
          ],
          rows: [
            {
              id: "desu-alt-1",
              cells: {
                form: { jp: ruby("ではないです") },
                idea: "no pasado negativo",
                status: "forma frecuente que conviene reconocer; no será la forma base principal de producción en esta unidad",
              },
            },
            {
              id: "desu-alt-2",
              cells: {
                form: { jp: ruby("じゃないです") },
                idea: "no pasado negativo",
                status: "forma frecuente y conversacional; aquí la reconocemos como variante útil",
              },
            },
            {
              id: "desu-alt-3",
              cells: {
                form: { jp: ruby("ではなかったです") },
                idea: "pasado negativo",
                status: "forma que también aparece y que conviene poder leer",
              },
            },
            {
              id: "desu-alt-4",
              cells: {
                form: { jp: ruby("じゃなかったです") },
                idea: "pasado negativo",
                status: "variante muy visible en uso real; aquí queda como forma de reconocimiento",
              },
            },
          ],
          zebra: true,
        },
        {
          type: "table",
          title: "Cuadrícula regular del grupo en ます que ya conoces",
          description:
            "Con los verbos ya vistos hasta ahora, la lógica es mucho más pareja. Esta tabla es justamente la antesala de la gran unidad de verbos que viene después.",
          columns: [
            { key: "base", label: "Base", width: "20%" },
            { key: "nonpastAff", label: "No pasado +", width: "20%" },
            { key: "nonpastNeg", label: "No pasado −", width: "20%" },
            { key: "pastAff", label: "Pasado +", width: "20%" },
            { key: "pastNeg", label: "Pasado −", width: "20%" },
          ],
          rows: [
            {
              id: "masu-arimasu",
              cells: {
                base: { jp: ruby("あります") },
                nonpastAff: { jp: ruby("あります") },
                nonpastNeg: { jp: ruby("ありません") },
                pastAff: { jp: ruby("ありました") },
                pastNeg: { jp: ruby("ありませんでした") },
              },
            },
            {
              id: "masu-imasu",
              cells: {
                base: { jp: ruby("います") },
                nonpastAff: { jp: ruby("います") },
                nonpastNeg: { jp: ruby("いません") },
                pastAff: { jp: ruby("いました") },
                pastNeg: { jp: ruby("いませんでした") },
              },
            },
            {
              id: "masu-dekimasu",
              cells: {
                base: { jp: ruby("できます") },
                nonpastAff: { jp: ruby("できます") },
                nonpastNeg: { jp: ruby("できません") },
                pastAff: { jp: ruby("できました") },
                pastNeg: { jp: ruby("できませんでした") },
              },
            },
            {
              id: "masu-wakarimasu",
              cells: {
                base: { jp: ruby("わかります") },
                nonpastAff: { jp: ruby("わかります") },
                nonpastNeg: { jp: ruby("わかりません") },
                pastAff: { jp: ruby("わかりました") },
                pastNeg: { jp: ruby("わかりませんでした") },
              },
            },
          ],
          zebra: true,
        },
      ],
    },
    {
      id: "lesson-017-vocabulary",
      kind: "vocabulary",
      title: "Vocabulario nuevo para esta unidad",
      description:
        "Aquí metemos sobre todo palabras temporales, días de la semana y algunas palabras de apoyo para que el pasado pueda practicarse con escenas nuevas y no con el mismo léxico de siempre.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 4,
          items: [
            { id: "vocab-017-yesterday", jp: ruby("[昨日|きのう]"), reading: "きのう", meaning: "ayer", tags: ["tiempo", "base"] },
            { id: "vocab-017-today", jp: ruby("[今日|きょう]"), reading: "きょう", meaning: "hoy", tags: ["tiempo", "base"] },
            { id: "vocab-017-tomorrow", jp: ruby("[明日|あした]"), reading: "あした", meaning: "mañana", tags: ["tiempo", "base"] },
            { id: "vocab-017-monday", jp: ruby("[月曜日|げつようび]"), reading: "げつようび", meaning: "lunes", tags: ["dia", "base"] },

            { id: "vocab-017-tuesday", jp: ruby("[火曜日|かようび]"), reading: "かようび", meaning: "martes", tags: ["dia"] },
            { id: "vocab-017-wednesday", jp: ruby("[水曜日|すいようび]"), reading: "すいようび", meaning: "miércoles", tags: ["dia"] },
            { id: "vocab-017-thursday", jp: ruby("[木曜日|もくようび]"), reading: "もくようび", meaning: "jueves", tags: ["dia"] },
            { id: "vocab-017-friday", jp: ruby("[金曜日|きんようび]"), reading: "きんようび", meaning: "viernes", tags: ["dia"] },

            { id: "vocab-017-saturday", jp: ruby("[土曜日|どようび]"), reading: "どようび", meaning: "sábado", tags: ["dia"] },
            { id: "vocab-017-sunday", jp: ruby("[日曜日|にちようび]"), reading: "にちようび", meaning: "domingo", tags: ["dia"] },
            { id: "vocab-017-holiday", jp: ruby("[休|やす]み"), reading: "やすみ", meaning: "descanso / día libre", tags: ["horario", "nuevo"] },
            { id: "vocab-017-class", jp: ruby("[授業|じゅぎょう]"), reading: "じゅぎょう", meaning: "clase / lección", tags: ["horario", "nuevo"] },

            { id: "vocab-017-exam", jp: ruby("[試験|しけん]"), reading: "しけん", meaning: "prueba / examen", tags: ["horario", "nuevo"] },
            { id: "vocab-017-homework", jp: ruby("[宿題|しゅくだい]"), reading: "しゅくだい", meaning: "tarea", tags: ["estudio", "nuevo"] },
            { id: "vocab-017-explanation", jp: ruby("[説明|せつめい]"), reading: "せつめい", meaning: "explicación", tags: ["estudio", "nuevo"] },
            { id: "vocab-017-schedule", jp: ruby("[予定表|よていひょう]"), reading: "よていひょう", meaning: "horario / tabla de planificación", tags: ["objeto", "nuevo"] },

            { id: "vocab-017-music-room", jp: ruby("[音楽室|おんがくしつ]"), reading: "おんがくしつ", meaning: "sala de música", tags: ["lugar", "nuevo"] },
            { id: "vocab-017-cafeteria", jp: ruby("[食堂|しょくどう]"), reading: "しょくどう", meaning: "comedor / cafetería", tags: ["lugar", "nuevo"] },
            { id: "vocab-017-nurse-room", jp: ruby("[保健室|ほけんしつ]"), reading: "ほけんしつ", meaning: "enfermería escolar", tags: ["lugar", "nuevo"] },
            { id: "vocab-017-art-room", jp: ruby("[美術室|びじゅつしつ]"), reading: "びじゅつしつ", meaning: "sala de arte", tags: ["lugar", "nuevo"] },
          ],
        },
      ],
    },
    {
      id: "lesson-017-examples",
      kind: "examples",
      title: "Ejemplos guiados",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "ex-017-1",
              jp: ruby("[昨日|きのう]は[月曜日|げつようび]でした。[今日|きょう]は[火曜日|かようび]です。[明日|あした]は[水曜日|すいようび]です。"),
              es: "Ayer fue lunes. Hoy es martes. Mañana es miércoles.",
              notes: [
                {
                  es: "Aquí la forma no pasada se usa tanto para hoy como para mañana. La referencia futura nace de 明日, no de una forma futura nueva.",
                },
              ],
            },
            {
              id: "ex-017-2",
              jp: ruby("[昨日|きのう]は[休|やす]みではありませんでした。[今日|きょう]は[休|やす]みです。[明日|あした]も[休|やす]みではありません。"),
              es: "Ayer no fue día libre. Hoy sí es descanso. Mañana tampoco será descanso.",
              notes: [
                {
                  es: "Este ejemplo sirve para ver la ruta de です en negativo y pasado negativo sin salir todavía del mundo nominal.",
                },
              ],
            },
            {
              id: "ex-017-3",
              jp: ruby("[昨日|きのう]、[音楽室|おんがくしつ]に[先生|せんせい]がいました。[今日|きょう]はいません。[明日|あした]はいます。"),
              es: "Ayer hubo / estaba un profesor en la sala de música. Hoy no está. Mañana estará.",
              notes: [
                {
                  es: "Con います la cuadrícula ya sigue una lógica regular: います / いません / いました / いませんでした.",
                },
              ],
            },
            {
              id: "ex-017-4",
              jp: ruby("[昨日|きのう]、[食堂|しょくどう]に[予定表|よていひょう]がありました。[今日|きょう]はありません。[明日|あした]はあります。"),
              es: "Ayer había un horario en la cafetería. Hoy no hay. Mañana sí hay.",
              notes: [
                {
                  es: "Aquí el referente es un objeto, por eso mantenemos あります y sus formas relacionadas.",
                },
              ],
            },
            {
              id: "ex-017-5",
              jp: ruby("[昨日|きのう]、この[説明|せつめい]はわかりませんでした。[今日|きょう]はわかります。[明日|あした]もわかります。"),
              es: "Ayer no entendía esta explicación. Hoy sí la entiendo. Mañana también la entenderé.",
              notes: [
                {
                  es: "Con わかります aparece la misma cuadrícula regular del grupo en ます.",
                },
              ],
            },
            {
              id: "ex-017-6",
              jp: ruby("[昨日|きのう]、この[宿題|しゅくだい]はできませんでした。[今日|きょう]はできます。[明日|あした]もできます。"),
              es: "Ayer no podía hacer esta tarea. Hoy sí puedo. Mañana también podré.",
              notes: [
                {
                  es: "Este ejemplo nos deja ver できます en pasado y negativo sin tener que abrir todavía una unidad completa de verbos nuevos.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-017-contrast",
      kind: "contrast",
      title: "Contrastes clave",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-017-1",
              label: "No pasado con hoy vs no pasado con mañana",
              correct: {
                jp: ruby("[今日|きょう]は[木曜日|もくようび]です。 / [明日|あした]は[金曜日|きんようび]です。"),
                es: "La forma principal puede quedarse en no pasado en los dos casos.",
              },
              explanation:
                "La diferencia temporal aquí la ponen 今日 y 明日. No necesitas una forma futura distinta en esta unidad.",
            },
            {
              id: "contrast-017-2",
              label: "です no sigue la misma ruta que el grupo en ます",
              correct: {
                jp: ruby("です → でした / ではありませんでした"),
                es: "Ruta propia de です.",
              },
              incorrect: {
                jp: ruby("です → ですました / ですませんでした"),
                es: "Eso intenta forzar sobre です una lógica que no le corresponde.",
              },
              explanation:
                "Una de las metas principales de esta unidad es separar mentalmente estas dos rutas desde el principio.",
            },
            {
              id: "contrast-017-3",
              label: "El grupo en ます sí forma una cuadrícula regular",
              correct: {
                jp: ruby("あります → ありません → ありました → ありませんでした"),
                es: "Se ve claramente la lógica pareja del grupo.",
              },
              explanation:
                "Esta cuadrícula reaparece con います, できます y わかります.",
            },
            {
              id: "contrast-017-4",
              label: "Base productiva vs formas que también verás",
              correct: {
                jp: ruby("ではありませんでした"),
                es: "La fijamos aquí como forma base de trabajo para です en pasado negativo.",
              },
              incorrect: {
                jp: ruby("ではなかったです"),
                es: "No está mal como japonés real, pero aquí no la tomamos como forma base principal de producción.",
              },
              explanation:
                "Las dos existen, pero para esta unidad conviene dejar una base clara y luego ampliar el reconocimiento.",
            },
            {
              id: "contrast-017-5",
              label: "El ancla temporal cambia la lectura de la frase",
              correct: {
                jp: ruby("[昨日|きのう]、[美術室|びじゅつしつ]に[先生|せんせい]がいました。 / [明日|あした]、[美術室|びじゅつしつ]に[先生|せんせい]がいます。"),
                es: "La forma verbal cambia según pasado o no pasado; la palabra temporal termina de orientar la escena.",
              },
              explanation:
                "Conviene mirar primero la referencia temporal y después la forma final del verbo o de です.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-017-warning",
      kind: "warning",
      title: "Qué conviene hacer aquí",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "No intentes abrir todavía todo el sistema verbal",
          content:
            "Esta unidad es un puente. La meta no es estudiar todavía todos los verbos japoneses, sino fijar dos ideas muy importantes: cómo cambia el tiempo con lo que ya conoces, y por qué です no se comporta igual que las otras formas en ます que ya viste.",
          bullets: [
            {
              es: "Primero deja muy firme la cuadrícula de",
              jp: ruby("です / ではありません / でした / ではありませんでした。"),
            },
            {
              es: "Después automatiza la cuadrícula de",
              jp: ruby("あります / います / できます / わかります"),
              note: "con ません / ました / ませんでした.",
            },
            {
              es: "Y solo después piensa en la gran unidad de verbos como siguiente paso.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-017-practice",
      kind: "practice",
      title: "Práctica guiada antes del quiz",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Di varias veces la tríada temporal base:",
              jp: ruby("[昨日|きのう] / [今日|きょう] / [明日|あした]。"),
            },
            {
              es: "Repite después los días de la semana completos desde lunes a domingo:",
              jp: ruby("[月曜日|げつようび] / [火曜日|かようび] / [水曜日|すいようび] / [木曜日|もくようび] / [金曜日|きんようび] / [土曜日|どようび] / [日曜日|にちようび]。"),
            },
            {
              es: "Conjuga varias veces la base de",
              jp: ruby("です"),
              note: "en sus cuatro casillas principales y luego reconoce las variantes más conversacionales.",
            },
            {
              es: "Haz mini contrastes con los verbos ya conocidos:",
              jp: ruby("あります → ありません → ありました → ありませんでした。 / います → いません → いました → いませんでした。"),
            },
            {
              es: "Escribe cinco pares con ayer / hoy o hoy / mañana usando vocabulario nuevo como",
              jp: ruby("[授業|じゅぎょう] / [試験|しけん] / [宿題|しゅくだい] / [音楽室|おんがくしつ] / [食堂|しょくどう]。"),
            },
          ],
        },
      ],
    },
    {
      id: "lesson-017-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Entiendo que aquí conviene pensar primero en no pasado frente a pasado.",
            },
            {
              es: "Ya fijé la cuadrícula base de",
              jp: ruby("です / ではありません / でした / ではありませんでした。"),
            },
            {
              es: "Reconozco que también existen formas como",
              jp: ruby("じゃありません / じゃありませんでした / ではないです / じゃないです。"),
            },
            {
              es: "Puedo conjugar los verbos ya conocidos del grupo en ます con",
              jp: ruby("ます / ません / ました / ませんでした。"),
            },
            {
              es: "Entiendo que la referencia futura en esta unidad nace sobre todo de palabras como",
              jp: ruby("[明日|あした]"),
              note: "y no de una nueva forma verbal independiente.",
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-017-quiz",
    title: "Quiz — Tiempo básico I",
    description:
      "Repaso variado para comprobar si ya distingues no pasado y pasado, si separas bien la ruta de です de la cuadrícula regular en ます, y si puedes leer frases con 昨日・今日・明日 y días de la semana sin depender siempre del español.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "single-choice",
        prompt: {
          jp: ruby("[昨日|きのう]は[月曜日|げつようび]___。"),
          note: "いちばん しぜんな ものを えらんでください。",
        },
        choices: [
          { id: "a", label: { jp: ruby("です") } },
          { id: "b", label: { jp: ruby("でした") } },
          { id: "c", label: { jp: ruby("ではありません") } },
          { id: "d", label: { jp: ruby("ませんでした") } },
        ],
        correctChoiceId: "b",
        explanation: "昨日 empuja la frase al pasado. Por eso aquí corresponde でした.",
        relatedSectionIds: ["lesson-017-concept", "lesson-017-structure"],
      },
      {
        id: "q2",
        type: "single-choice",
        prompt: {
          jp: ruby("[今日|きょう]は[火曜日|かようび]___。"),
          note: "いちばん しぜんな ものを えらんでください。",
        },
        choices: [
          { id: "a", label: { jp: ruby("でした") } },
          { id: "b", label: { jp: ruby("ではありませんでした") } },
          { id: "c", label: { jp: ruby("です") } },
          { id: "d", label: { jp: ruby("ません") } },
        ],
        correctChoiceId: "c",
        explanation: "Aquí la referencia es hoy, así que la forma base natural es です.",
        relatedSectionIds: ["lesson-017-concept", "lesson-017-structure"],
      },
      {
        id: "q3",
        type: "single-choice",
        prompt: {
          jp: ruby("[明日|あした]は[水曜日|すいようび]___。"),
          note: "この unit の かんがえかたに いちばん あう ものを えらんでください。",
        },
        choices: [
          { id: "a", label: { jp: ruby("です") } },
          { id: "b", label: { jp: ruby("でした") } },
          { id: "c", label: { jp: ruby("ではありませんでした") } },
          { id: "d", label: { jp: ruby("でしたです") } },
        ],
        correctChoiceId: "a",
        explanation: "En esta unidad, la referencia futura se expresa aquí con 明日 y la forma no pasada です.",
        relatedSectionIds: ["lesson-017-concept", "lesson-017-contrast"],
      },
      {
        id: "q4",
        type: "single-choice",
        prompt: {
            jp: ruby("A: [昨日|きのう]は[学校|がっこう]でしたか。 B: いいえ、[学校|がっこう]は[休|やす]み___。"),
            note: "いちばん しぜんな こたえ を えらんでください。",
        },
        choices: [
            { id: "a", label: { jp: ruby("ではありません") } },
            { id: "b", label: { jp: ruby("ではありませんでした") } },
            { id: "c", label: { jp: ruby("でした") } },
            { id: "d", label: { jp: ruby("じゃないです") } },
        ],
        correctChoiceId: "c",
        explanation: "Aquí la respuesta natural es 休みでした porque se está diciendo que ayer sí fue día de descanso.",
        relatedSectionIds: ["lesson-017-structure", "lesson-017-summary"],
      },
      {
        id: "q5",
        type: "single-choice",
        prompt: {
          jp: ruby("[昨日|きのう]、[音楽室|おんがくしつ]に[先生|せんせい]が___。"),
          note: "いちばん しぜんな ものを えらんでください。",
        },
        choices: [
          { id: "a", label: { jp: ruby("います") } },
          { id: "b", label: { jp: ruby("いました") } },
          { id: "c", label: { jp: ruby("いません") } },
          { id: "d", label: { jp: ruby("でした") } },
        ],
        correctChoiceId: "b",
        explanation: "Con 昨日 y un referente animado, la forma natural es いました.",
        relatedSectionIds: ["lesson-017-examples", "lesson-017-structure"],
      },
      {
        id: "q6",
        type: "single-choice",
        prompt: {
          jp: ruby("[今日|きょう]、[音楽室|おんがくしつ]に[先生|せんせい]が___。"),
          note: "マイナスを えらんでください。",
        },
        choices: [
          { id: "a", label: { jp: ruby("いません") } },
          { id: "b", label: { jp: ruby("いました") } },
          { id: "c", label: { jp: ruby("ありません") } },
          { id: "d", label: { jp: ruby("じゃありません") } },
        ],
        correctChoiceId: "a",
        explanation: "先生 es un referente animado. La forma negativa (マイナス) no pasada aquí es いません.",
        relatedSectionIds: ["lesson-017-structure", "lesson-017-examples"],
      },
      {
        id: "q7",
        type: "single-choice",
        prompt: {
          jp: ruby("[昨日|きのう]、[食堂|しょくどう]に[予定表|よていひょう]が___。"),
          note: "いちばん しぜんな ものを えらんでください。",
        },
        choices: [
          { id: "a", label: { jp: ruby("あります") } },
          { id: "b", label: { jp: ruby("ありました") } },
          { id: "c", label: { jp: ruby("いました") } },
          { id: "d", label: { jp: ruby("です") } },
        ],
        correctChoiceId: "b",
        explanation: "予定表 es un objeto. Por eso usamos あります y, con 昨日, su pasado ありました.",
        relatedSectionIds: ["lesson-017-examples", "lesson-017-structure"],
      },
      {
        id: "q8",
        type: "single-choice",
        prompt: {
          jp: ruby("[今日|きょう]、[食堂|しょくどう]に[予定表|よていひょう]が___。"),
          note: "マイナスの いまの かたちを えらんでください。",
        },
        choices: [
          { id: "a", label: { jp: ruby("いません") } },
          { id: "b", label: { jp: ruby("ありません") } },
          { id: "c", label: { jp: ruby("ありました") } },
          { id: "d", label: { jp: ruby("でした") } },
        ],
        correctChoiceId: "b",
        explanation: "Con objetos, la negación (マイナス) no pasada aquí se forma con ありません.",
        relatedSectionIds: ["lesson-017-structure", "lesson-017-examples"],
      },
      {
        id: "q9",
        type: "single-choice",
        prompt: {
          jp: ruby("[昨日|きのう]、この[説明|せつめい]は___。"),
          note: "わかります の かこ マイナスを えらんでください。",
        },
        choices: [
          { id: "a", label: { jp: ruby("わかりました") } },
          { id: "b", label: { jp: ruby("わかりません") } },
          { id: "c", label: { jp: ruby("わかりませんでした") } },
          { id: "d", label: { jp: ruby("でした") } },
        ],
        correctChoiceId: "c",
        explanation: "Aquí necesitas el pasado (カコ) negativo (マイナス) de わかります: わかりませんでした.",
        relatedSectionIds: ["lesson-017-structure", "lesson-017-examples"],
      },
      {
        id: "q10",
        type: "single-choice",
        prompt: {
          jp: ruby("[今日|きょう]、この[説明|せつめい]は___。"),
          note: "いまの かたちを えらんでください。",
        },
        choices: [
          { id: "a", label: { jp: ruby("わかります") } },
          { id: "b", label: { jp: ruby("わかりませんでした") } },
          { id: "c", label: { jp: ruby("でした") } },
          { id: "d", label: { jp: ruby("ありません") } },
        ],
        correctChoiceId: "a",
        explanation: "Para hoy, la forma natural no pasada aquí es わかります.",
        relatedSectionIds: ["lesson-017-structure", "lesson-017-examples"],
      },
      {
        id: "q11",
        type: "single-choice",
        prompt: {
          jp: ruby("[昨日|きのう]、この[宿題|しゅくだい]は___。"),
          note: "できます の かこ マイナスを えらんでください。",
        },
        choices: [
          { id: "a", label: { jp: ruby("できませんでした") } },
          { id: "b", label: { jp: ruby("できました") } },
          { id: "c", label: { jp: ruby("できません") } },
          { id: "d", label: { jp: ruby("でした") } },
        ],
        correctChoiceId: "a",
        explanation: "Aquí se pide el pasado negativo de できます: できませんでした.",
        relatedSectionIds: ["lesson-017-structure", "lesson-017-examples"],
      },
      {
        id: "q12",
        type: "single-choice",
        prompt: {
          jp: ruby("[今日|きょう]、この[宿題|しゅくだい]は___。"),
          note: "いちばん しぜんな ものを えらんでください。",
        },
        choices: [
          { id: "a", label: { jp: ruby("できます") } },
          { id: "b", label: { jp: ruby("できませんでした") } },
          { id: "c", label: { jp: ruby("でした") } },
          { id: "d", label: { jp: ruby("ありませんでした") } },
        ],
        correctChoiceId: "a",
        explanation: "Con 今日, la forma natural aquí es できます.",
        relatedSectionIds: ["lesson-017-structure", "lesson-017-examples"],
      },
      {
        id: "q13",
        type: "single-choice",
        prompt: {
          jp: ruby("です の かこ マイナスの きほんは どれですか。"),
        },
        choices: [
          { id: "a", label: { jp: ruby("でしたません") } },
          { id: "b", label: { jp: ruby("ではありませんでした") } },
          { id: "c", label: { jp: ruby("じゃないました") } },
          { id: "d", label: { jp: ruby("ませんでしたです") } },
        ],
        correctChoiceId: "b",
        explanation: "La forma base de trabajo que fijamos aquí para です en pasado negativo es ではありませんでした.",
        relatedSectionIds: ["lesson-017-structure", "lesson-017-summary"],
      },
      {
        id: "q14",
        type: "single-choice",
        prompt: {
          jp: ruby("この unit で、あしたの ぶんに いちばん あう ものは どれですか。"),
        },
        choices: [
          { id: "a", label: { jp: ruby("[明日|あした]は[金曜日|きんようび]でした。") } },
          { id: "b", label: { jp: ruby("[明日|あした]は[金曜日|きんようび]です。") } },
          { id: "c", label: { jp: ruby("[明日|あした]は[金曜日|きんようび]ではありませんでした。") } },
          { id: "d", label: { jp: ruby("[明日|あした]は[金曜日|きんようび]ません。") } },
        ],
        correctChoiceId: "b",
        explanation: "En esta unidad, la referencia futura se expresa naturalmente con 明日 más la forma no pasada.",
        relatedSectionIds: ["lesson-017-concept", "lesson-017-contrast"],
      },
      {
        id: "q15",
        type: "order-sentence",
        prompt: {
          jp: ruby("ただしい じゅんばんに してください。"),
          note: "「[昨日|きのう]は[金曜日|きんようび]でした。」",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[昨日|きのう]") }, value: "昨日" },
          { id: "t2", label: { jp: ruby("は") }, value: "は" },
          { id: "t3", label: { jp: ruby("[金曜日|きんようび]") }, value: "金曜日" },
          { id: "t4", label: { jp: ruby("でした。") }, value: "でした。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("[昨日|きのう]は[金曜日|きんようび]でした。") },
        explanation: "Aquí primero anclas el tiempo y luego cierras la identificación con でした.",
        relatedSectionIds: ["lesson-017-structure", "lesson-017-summary"],
      },
      {
        id: "q16",
        type: "order-sentence",
        prompt: {
          jp: ruby("ただしい じゅんばんに してください。"),
          note: "「[明日|あした]は[試験|しけん]です。」",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[明日|あした]") }, value: "明日" },
          { id: "t2", label: { jp: ruby("は") }, value: "は" },
          { id: "t3", label: { jp: ruby("[試験|しけん]") }, value: "試験" },
          { id: "t4", label: { jp: ruby("です。") }, value: "です。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("[明日|あした]は[試験|しけん]です。") },
        explanation: "Aunque la referencia sea mañana, aquí seguimos usando la forma no pasada です.",
        relatedSectionIds: ["lesson-017-concept", "lesson-017-summary"],
      },
      {
        id: "q17",
        type: "fill-blank",
        prompt: {
          jp: ruby("[今日|きょう]は[木曜日|もくようび]です。[明日|あした]は___です。"),
          note: "ようびを かいてください。",
        },
        acceptedAnswers: ["金曜日", "きんようび"],
        placeholder: "こたえを かいてください",
        explanation: "Después de 木曜日 viene 金曜日.",
        relatedSectionIds: ["lesson-017-vocabulary", "lesson-017-summary"],
      },
      {
        id: "q18",
        type: "fill-blank",
        prompt: {
          jp: ruby("[今日|きょう]は[日曜日|にちようび]です。[昨日|きのう]は___でした。"),
          note: "ようびを かいてください。",
        },
        acceptedAnswers: ["土曜日", "どようび"],
        placeholder: "こたえを かいてください",
        explanation: "Si hoy es domingo, ayer fue sábado: 土曜日.",
        relatedSectionIds: ["lesson-017-vocabulary", "lesson-017-summary"],
      },
      {
        id: "q19",
        type: "fill-blank",
        prompt: {
          jp: ruby("[昨日|きのう]、この[漢字|かんじ]は___。"),
          note: "わかります の かこ マイナスを かいてください。",
        },
        acceptedAnswers: ["わかりませんでした", "わかりませんでした。"],
        placeholder: "こたえを かいてください",
        explanation: "Aquí se pide escribir completa la forma わかりませんでした.",
        relatedSectionIds: ["lesson-017-structure", "lesson-017-examples"],
      },
      {
        id: "q20",
        type: "single-choice",
        prompt: {
          jp: ruby("[明日|あした]、[保健室|ほけんしつ]に[先生|せんせい]が___。"),
          note: "この unit の かんがえかたに いちばん あう ものを えらんでください。",
        },
        choices: [
          { id: "a", label: { jp: ruby("いました") } },
          { id: "b", label: { jp: ruby("いませんでした") } },
          { id: "c", label: { jp: ruby("います") } },
          { id: "d", label: { jp: ruby("でした") } },
        ],
        correctChoiceId: "c",
        explanation: "Con 明日, esta unidad favorece la lectura futura mediante la forma no pasada: います.",
        relatedSectionIds: ["lesson-017-concept", "lesson-017-contrast"],
      },
    ],
  },
};

export default lesson017;
