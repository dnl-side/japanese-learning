//src/data/grammar/lessons/lesson-016.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson016: GrammarLesson = {
  id: "lesson-016",
  slug: "matome-particulas-1-15",
  order: 19,
  level: "N5",
  status: "ready",
  title: "まとめ じょし 1〜15",
  jpTitle: "まとめ・じょし",
  shortTitle: "Repaso de partículas",
  description:
    "Repaso integrado de las partículas y funciones que ya aparecieron desde la unidad 001 hasta la 015, con foco en reconocer qué partícula entra mejor según la relación entre los elementos de la oración y cerrar el bloque con un quiz fuerte principalmente en japonés.",
  estimatedMinutes: 70,
  categoryTags: ["matome", "fundamentos", "particulas", "lectura", "integracion", "quiz"],
  grammarTags: [
    "は",
    "も",
    "の",
    "が",
    "に",
    "と",
    "を",
    "か",
    "repaso de partículas",
  ],
  searchTerms: [
    "matome particulas japones",
    "repaso は も が の に と か",
    "complete la particula japones",
    "quiz de particulas japones n5",
    "particles review japanese n5",
    "joshi matome",
  ],
  relatedLessonSlugs: [
    "wa-desu-basico",
    "preguntas-basicas-desu-ka",
    "pais-de-origen-shusshin",
    "nacionalidad-jin-mo",
    "idiomas-ga-dekimasu-wakarimasu",
    "particula-no-posesion-relacion-tipo",
    "demostrativos-con-sustantivo-kono-sono-ano",
    "arimasu-imasu-existencia-basica",
    "posiciones-basicas-to",
    "contadores-basicos-tsu-ko-mai-hon-satsu-nin",
    "familia-y-niveles-escolares",
  ],
  relatedVocabularyTags: ["particulas", "objetos", "lugares", "personas", "escuela", "integracion"],
  objectives: [
    "Revisar las partículas principales ya vistas hasta este punto del curso sin tratarlas como listas aisladas.",
    "Reconocer mejor la diferencia entre tema, coincidencia, referente, lugar, posesión, lista, objeto pedido dentro de un patrón fijo y pregunta final.",
    "Relacionar partículas con patrones completos como AはBです, AもBです, AのB, AがBにあります, Aをください y Aですか.",
    "Empezar a resolver preguntas y ejercicios con mucho menos apoyo del español y con más foco en la lectura directa del japonés.",
    "Cerrar este bloque con un quiz fuerte, principalmente en japonés, centrado en completar la partícula correcta según el contexto.",
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
      id: "lesson-016-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "Hasta aquí ya aparecieron muchas partículas, pero nunca como un bloque de repaso concentrado. Esta unidad hace una pausa breve para revisar cómo se están usando realmente desde la unidad 1 hasta la 15. La idea no es memorizar traducciones sueltas, sino mirar qué relación marca cada partícula dentro de una oración completa.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Vamos a revisar partículas como:",
              jp: ruby("は / も / の / が / に / と / か。"),
            },
            {
              es: "El foco no estará en una definición aislada, sino en patrones reales como:",
              jp: ruby("[兄|あに]は[高校|こうこう]2[年生|ねんせい]です。 / [庭|にわ]に[犬|いぬ]と[猫|ねこ]がいます。 / この[毛布|もうふ]をください。"),
            },
            {
              es: "El quiz de esta unidad será principalmente en japonés.",
              note: "La explicación del feedback puede seguir en español, pero la pregunta y las opciones buscarán acostumbrarte a pensar un poco más directamente en japonés.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-016-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "La misma partícula no se entiende bien fuera de la oración",
          content:
            "En este punto del curso ya conviene dejar atrás la idea de aprender partículas como si fueran una traducción fija. Lo importante no es pensar que の siempre es “de” o que は siempre es “es”. Lo importante es mirar qué papel está marcando cada partícula dentro del patrón completo.",
          bullets: [
            {
              jp: ruby("[兄|あに]は[大学|だいがく]2[年生|ねんせい]です。"),
              es: "は marca el tema de la oración",
            },
            {
              jp: ruby("[姉|あね]も[大学|だいがく]2[年生|ねんせい]です。"),
              es: "も añade la idea de también",
            },
            {
              jp: ruby("[温室|おんしつ]の[中|なか]に[花|はな]があります。"),
              es: "の conecta nombres; に marca el lugar; が marca el referente que existe",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Algunas partículas compiten entre sí dentro de contextos parecidos",
          content:
            "Buena parte de los errores a este nivel no nacen porque el estudiante no conozca una partícula, sino porque duda entre dos o tres que parecen posibles. Por eso aquí conviene revisar bloques que suelen confundirse: は vs も, の vs と, が vs は, に vs の, y el uso limitado de を dentro del patrón 〜をください.",
          bullets: [
            {
              jp: ruby("[弟|おとうと]はアメリカ[人|じん]です。 [兄|あに]もアメリカ[人|じん]です。"),
              es: "la segunda oración no repite は porque ahora la información coincide",
            },
            {
              jp: ruby("[庭|にわ]に[犬|いぬ]と[猫|ねこ]がいます。"),
              es: "と une los sustantivos; が marca el grupo completo como referente",
            },
            {
              jp: ruby("[田中|たなか]さんは[日本語|にほんご]ができます。でも、[英語|えいご]はできません。"),
              es: "が marca la capacidad; は reaparece para contrastar",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "El quiz aquí pide decidir por función, no por memoria mecánica",
          content:
            "Algunas preguntas de esta unidad serán muy directas, pero otras te obligarán a mirar la función de cada bloque dentro de la escena. A veces tendrás que notar qué parte es tema conocido, qué parte es lista, qué parte es posesión y qué parte es lugar de existencia.",
          bullets: [
            {
              jp: ruby("[改札|かいさつ]はどこですか。"),
              es: "aquí 改札 ya es el tema conocido y la pregunta cae sobre el lugar",
            },
            {
              jp: ruby("この[図鑑|ずかん]は[天体|てんたい]の[図鑑|ずかん]です。"),
              es: "aquí の no une personas, sino tema + objeto principal",
            },
            {
              jp: ruby("この[毛布|もうふ]をください。"),
              es: "aquí を marca el objeto pedido dentro de un patrón fijo de tienda",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-016-structure",
      kind: "structure",
      title: "Mapa de partículas ya vistas",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-016-1",
              label: "Tema y coincidencia",
              pattern: ruby("A は B です。 / A も B です。"),
              meaning: "A es B. / A también es B.",
              translation:
                "は vuelve a marcar de qué estás hablando. も entra cuando la nueva información coincide con la anterior y quieres añadir la idea de también.",
              structure: [
                {
                  slot: { jp: ruby("は") },
                  value: "tema",
                  note: "Marca de qué persona, cosa o bloque estás hablando en esa oración.",
                },
                {
                  slot: { jp: ruby("も") },
                  value: "también",
                  note: "Reemplaza a は cuando la segunda información coincide con la primera.",
                },
              ],
              notes: [
                "Una de las confusiones más comunes aquí es repetir は incluso cuando la oración ya pide も.",
              ],
            },
            {
              id: "pattern-016-2",
              label: "Conectar nombres y unir elementos",
              pattern: ruby("A の B / A と B"),
              meaning: "B relacionado con A / A y B",
              translation:
                "の conecta nombres entre sí; と une sustantivos dentro de una lista explícita. Las dos pueden aparecer en la misma oración, pero no hacen el mismo trabajo.",
              structure: [
                {
                  slot: { jp: ruby("の") },
                  value: "relación entre nombres",
                  note: "Puede expresar posesión, tipo, contenido, procedencia, relación o identificación nominal.",
                },
                {
                  slot: { jp: ruby("と") },
                  value: "lista explícita",
                  note: "Une dos o más sustantivos como un grupo claro dentro de la oración.",
                },
              ],
              notes: [
                "Si quieres decir “A y B”, no entra の. Si quieres decir “el B de A” o “B relacionado con A”, no entra と.",
              ],
            },
            {
              id: "pattern-016-3",
              label: "Referente y lugar de existencia",
              pattern: ruby("A が B に あります / います。"),
              meaning: "A existe o está en B.",
              translation:
                "En este bloque de repaso, が sigue marcando el referente que existe o está presente, y に sigue marcando el lugar donde existe.",
              structure: [
                {
                  slot: { jp: ruby("が") },
                  value: "referente",
                  note: "Marca la persona, animal, objeto o cosa que existe o está presente.",
                },
                {
                  slot: { jp: ruby("に") },
                  value: "lugar de existencia",
                  note: "Marca el lugar donde ese referente existe o está.",
                },
              ],
              notes: [
                "Cuando el referente ya es tema conocido y preguntas por su lugar, muchas veces ese referente pasa a は: 猫はどこにいますか。",
              ],
            },
            {
              id: "pattern-016-4",
              label: "Pedido fijo y pregunta final",
              pattern: ruby("A をください。 / A ですか。"),
              meaning: "Quisiera A. / ¿Es A?",
              translation:
                "Aquí cerramos el mapa con dos piezas que sí quedaron fijadas con claridad en la ruta: を dentro del patrón de pedido 〜をください, y か como marca final de pregunta.",
              structure: [
                {
                  slot: { jp: ruby("を") },
                  value: "objeto pedido dentro de un patrón fijo",
                  note: "En esta ruta lo has fijado sobre todo dentro de 〜をください。 No lo abrimos aquí como repaso amplio de objeto directo general.",
                },
                {
                  slot: { jp: ruby("か") },
                  value: "pregunta final",
                  note: "Cierra una pregunta simple después de です o al final del bloque correspondiente.",
                },
              ],
              notes: [
                "Aunque か se escribe al final, su función afecta a toda la oración anterior.",
              ],
            },
          ],
        },
        {
          type: "table",
          title: "Resumen rápido de partículas en esta ruta",
          description:
            "Esta tabla no reemplaza los ejemplos. Úsala como mapa mental para recordar qué relación principal has venido fijando con cada partícula hasta este punto.",
          columns: [
            { key: "particle", label: "Partícula", width: "12%", align: "center" },
            { key: "core", label: "Uso principal en esta ruta", width: "28%" },
            { key: "pattern", label: "Patrón representativo", width: "35%" },
            { key: "watch", label: "Qué vigilar", width: "25%" },
          ],
          rows: [
            {
              id: "row-wa",
              cells: {
                particle: { jp: ruby("は") },
                core: "tema / contraste base",
                pattern: { jp: ruby("A は B です。 / A はどこですか。") },
                watch: "No traducirla palabra por palabra como si fuera un pronombre.",
              },
            },
            {
              id: "row-mo",
              cells: {
                particle: { jp: ruby("も") },
                core: "también / coincidencia",
                pattern: { jp: ruby("A も B です。") },
                watch: "Reemplaza a は cuando la segunda información coincide.",
              },
            },
            {
              id: "row-no",
              cells: {
                particle: { jp: ruby("の") },
                core: "relación entre nombres",
                pattern: { jp: ruby("A の B / だれの / なんの") },
                watch: "Mirar primero el núcleo que queda a la derecha.",
              },
            },
            {
              id: "row-ga",
              cells: {
                particle: { jp: ruby("が") },
                core: "referente / capacidad / comprensión",
                pattern: { jp: ruby("A がいます。 / [日本語|にほんご]ができます。") },
                watch: "No confundir su función en existencia con su uso en できます・わかります.",
              },
            },
            {
              id: "row-ni",
              cells: {
                particle: { jp: ruby("に") },
                core: "lugar de existencia",
                pattern: { jp: ruby("B に A があります。 / います。") },
                watch: "En esta ruta la fijaste sobre todo como lugar donde algo está.",
              },
            },
            {
              id: "row-to",
              cells: {
                particle: { jp: ruby("と") },
                core: "lista explícita de sustantivos",
                pattern: { jp: ruby("A と B がいます。 / A と B をください。") },
                watch: "No reemplaza a の; no expresa posesión ni tipo.",
              },
            },
            {
              id: "row-wo",
              cells: {
                particle: { jp: ruby("を") },
                core: "objeto pedido",
                pattern: { jp: ruby("A をください。") },
                watch: "En este punto del curso la has fijado sobre todo dentro de pedidos simples.",
              },
            },
            {
              id: "row-kara",
              cells: {
                particle: { jp: ruby("から") },
                core: "origen / punto de partida",
                pattern: { jp: ruby("A から[来|き]ました。") },
                watch: "Aquí la repasamos dentro del patrón de venir desde un lugar.",
              },
            },
            {
              id: "row-ka",
              cells: {
                particle: { jp: ruby("か") },
                core: "marca final de pregunta",
                pattern: { jp: ruby("A ですか。") },
                watch: "Cierra la pregunta completa y no una sola palabra.",
              },
            },
          ],
          zebra: true,
        },
      ],
    },
    {
      id: "lesson-016-vocabulary",
      kind: "vocabulary",
      title: "Vocabulario de apoyo para el repaso",
      description:
        "La tabla de arriba fija la gramática. Esta grilla suma vocabulario fresco para que el repaso y el quiz no dependan siempre de las mismas escenas de las unidades anteriores.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 4,
          items: [
            { id: "vocab-016-greenhouse", jp: ruby("[温室|おんしつ]"), reading: "おんしつ", meaning: "invernadero", tags: ["lugar", "nuevo"] },
            { id: "vocab-016-rooftop", jp: ruby("[屋上|おくじょう]"), reading: "おくじょう", meaning: "azotea / terraza superior", tags: ["lugar", "nuevo"] },
            { id: "vocab-016-corridor", jp: ruby("[廊下|ろうか]"), reading: "ろうか", meaning: "pasillo", tags: ["lugar", "nuevo"] },
            { id: "vocab-016-gate", jp: ruby("[改札|かいさつ]"), reading: "かいさつ", meaning: "control de boletos / torniquete", tags: ["lugar", "nuevo"] },

            { id: "vocab-016-gallery", jp: ruby("[展示室|てんじしつ]"), reading: "てんじしつ", meaning: "sala de exposición", tags: ["lugar", "nuevo"] },
            { id: "vocab-016-warehouse", jp: ruby("[倉庫|そうこ]"), reading: "そうこ", meaning: "bodega / almacén", tags: ["lugar", "nuevo"] },
            { id: "vocab-016-theater", jp: ruby("[劇場|げきじょう]"), reading: "げきじょう", meaning: "teatro", tags: ["lugar", "nuevo"] },
            { id: "vocab-016-temple", jp: ruby("[寺|てら]"), reading: "てら", meaning: "templo", tags: ["lugar", "nuevo"] },

            { id: "vocab-016-port", jp: ruby("[港|みなと]"), reading: "みなと", meaning: "puerto", tags: ["lugar", "nuevo"] },
            { id: "vocab-016-telescope", jp: ruby("[望遠鏡|ぼうえんきょう]"), reading: "ぼうえんきょう", meaning: "telescopio", tags: ["objeto", "nuevo"] },
            { id: "vocab-016-guidebook", jp: ruby("[図鑑|ずかん]"), reading: "ずかん", meaning: "guía ilustrada / atlas visual", tags: ["objeto", "nuevo"] },
            { id: "vocab-016-blanket", jp: ruby("[毛布|もうふ]"), reading: "もうふ", meaning: "manta / frazada", tags: ["objeto", "nuevo"] },

            { id: "vocab-016-sculpture", jp: ruby("[彫刻|ちょうこく]"), reading: "ちょうこく", meaning: "escultura", tags: ["objeto", "nuevo"] },
            { id: "vocab-016-signboard", jp: ruby("[案内板|あんないばん]"), reading: "あんないばん", meaning: "panel de información / señal", tags: ["objeto", "nuevo"] },
            { id: "vocab-016-mountainpath", jp: ruby("[山道|やまみち]"), reading: "やまみち", meaning: "camino de montaña", tags: ["lugar", "nuevo"] },
            { id: "vocab-016-ship", jp: ruby("[船|ふね]"), reading: "ふね", meaning: "barco", tags: ["objeto", "nuevo"] },

            { id: "vocab-016-stationstaff", jp: ruby("[駅員|えきいん]"), reading: "えきいん", meaning: "empleado de estación", tags: ["persona", "nuevo"] },
            { id: "vocab-016-visitor", jp: ruby("[見学者|けんがくしゃ]"), reading: "けんがくしゃ", meaning: "visitante / observador", tags: ["persona", "nuevo"] },
            { id: "vocab-016-intstudent", jp: ruby("[留学生|りゅうがくせい]"), reading: "りゅうがくせい", meaning: "estudiante internacional", tags: ["persona", "nuevo"] },
            { id: "vocab-016-researcher", jp: ruby("[研究者|けんきゅうしゃ]"), reading: "けんきゅうしゃ", meaning: "investigador / investigadora", tags: ["persona", "nuevo"] },

            { id: "vocab-016-celestial", jp: ruby("[天体|てんたい]"), reading: "てんたい", meaning: "cuerpo celeste / astronomía básica", tags: ["tema", "nuevo"] },
            { id: "vocab-016-cherry", jp: ruby("[桜|さくら]"), reading: "さくら", meaning: "cerezo / flor de cerezo", tags: ["naturaleza", "nuevo"] },
            { id: "vocab-016-building", jp: ruby("[建物|たてもの]"), reading: "たてもの", meaning: "edificio", tags: ["objeto", "nuevo"] },
            { id: "vocab-016-laboratory", jp: ruby("[研究室|けんきゅうしつ]"), reading: "けんきゅうしつ", meaning: "laboratorio / sala de investigación", tags: ["lugar", "nuevo"] },
          ],
        },
      ],
    },
    {
      id: "lesson-016-examples",
      kind: "examples",
      title: "Ejemplos guiados de repaso",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "ex-016-1",
              jp: ruby("[兄|あに]はブラジル[人|じん]です。[弟|おとうと]もブラジル[人|じん]です。"),
              es: "Mi hermano mayor es brasileño. Mi hermano menor también es brasileño.",
              notes: [
                { es: "Aquí el segundo bloque pide も porque la información coincide con la primera oración." },
              ],
            },
            {
              id: "ex-016-2",
              jp: ruby("[温室|おんしつ]の[中|なか]に[花|はな]と[木|き]があります。"),
              es: "Dentro del invernadero hay flores y árboles.",
              notes: [
                { es: "の conecta 温室 con 中; と une dos referentes; が marca al grupo entero; に marca el lugar." },
              ],
            },
            {
              id: "ex-016-3",
              jp: ruby("[屋上|おくじょう]に[望遠鏡|ぼうえんきょう]があります。"),
              es: "Hay un telescopio en la azotea.",
            },
            {
              id: "ex-016-4",
              jp: ruby("[劇場|げきじょう]の[前|まえ]に[駅員|えきいん]と[見学者|けんがくしゃ]がいます。"),
              es: "Delante del teatro hay un empleado de estación y un visitante.",
            },
            {
              id: "ex-016-5",
              jp: ruby("この[図鑑|ずかん]は[天体|てんたい]の[図鑑|ずかん]です。"),
              es: "Esta guía ilustrada es una guía de astronomía / cuerpos celestes.",
              notes: [
                { es: "Aquí の no marca dueño, sino tipo o contenido del libro." },
              ],
            },
            {
              id: "ex-016-6",
              jp: ruby("この[毛布|もうふ]はだれのですか。"),
              es: "¿De quién es esta manta?",
            },
            {
              id: "ex-016-7",
              jp: ruby("これは[何|なん]の[雑誌|ざっし]ですか。"),
              es: "¿De qué tipo de revista es esta?",
            },
            {
              id: "ex-016-8",
              jp: ruby("[田中|たなか]さんは[日本語|にほんご]ができます。でも、[英語|えいご]はできません。"),
              es: "Tanaka puede usar japonés. Pero inglés no puede.",
              notes: [
                { es: "Aquí が marca la capacidad con 日本語ができます, y は reaparece para contrastar 英語はできません." },
              ],
            },
            {
              id: "ex-016-9",
              jp: ruby("こちらは[森田|もりた][先生|せんせい]です。"),
              es: "Esta persona es el profesor Morita.",
            },
            {
              id: "ex-016-10",
              jp: ruby("[改札|かいさつ]はどこですか。あちらです。"),
              es: "¿Dónde está el control de boletos? Está por allá.",
            },
            {
              id: "ex-016-11",
              jp: ruby("[留学生|りゅうがくせい]が[研究室|けんきゅうしつ]の[前|まえ]にいます。"),
              es: "Hay un estudiante internacional delante del laboratorio.",
            },
            {
              id: "ex-016-12",
              jp: ruby("この[毛布|もうふ]をください。"),
              es: "Quisiera esta manta.",
              notes: [
                { es: "Aquí reaparece el patrón fijo de pedido con をください." },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-016-practice",
      kind: "practice",
      title: "Cómo abordar el quiz",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Desde aquí conviene leer primero la escena y solo después pensar en la partícula",
          content:
            "No empieces el quiz traduciendo todo al español. Mira primero qué relación te está pidiendo la oración: tema, coincidencia, posesión, lista, lugar, referente, contraste, objeto pedido dentro de un patrón fijo o pregunta final. Cuando esa relación ya está clara, la partícula correcta suele volverse mucho más visible.",
          bullets: [
            {
              jp: ruby("[兄|あに]はアメリカ[人|じん]です。[弟|おとうと]（　）アメリカ[人|じん]です。"),
              es: "Primero piensa: la información coincide. Después eliges も.",
            },
            {
              jp: ruby("[庭|にわ]に[犬|いぬ]（　）[猫|ねこ]がいます。"),
              es: "Primero piensa: aquí necesito unir dos sustantivos. Después eliges と.",
            },
            {
              jp: ruby("この[図鑑|ずかん]は[天体|てんたい]（　）[図鑑|ずかん]です。"),
              es: "Primero piensa: aquí un nombre caracteriza a otro nombre. Después eliges の.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-016-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            { es: "Puedo distinguir mejor qué partícula entra según la relación entre los bloques de la oración." },
            { es: "Ya no intento resolver todo por traducción literal, sino por función dentro del patrón." },
            { es: "Reconozco mejor contrastes como", jp: ruby("は / も、の / と、が / は、に / の、が / に。") },
            { es: "Puedo leer preguntas y opciones con mucho menos apoyo del español." },
            { es: "Estoy listo para usar este repaso como base antes de entrar a un bloque nuevo de gramática." },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-016-quiz",
    title: "Quiz — Partículas 1〜15",
    description:
      "Repaso fuerte de partículas con foco principal en japonés. La mayor parte del trabajo aquí es decidir qué partícula entra mejor según el contexto de la oración.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "fill-blank",
        prompt: {
          jp: ruby("[兄|あに]はアメリカ[人|じん]です。[弟|おとうと]（　）アメリカ[人|じん]です。"),
        },
        acceptedAnswers: ["も"],
        placeholder: "助詞",
        explanation:
          "La segunda información coincide con la primera. Por eso aquí も reemplaza a は y añade la idea de 'también'.",
        relatedSectionIds: ["lesson-016-structure", "lesson-016-examples"],
      },
      {
        id: "q2",
        type: "fill-blank",
        prompt: {
          jp: ruby("[庭|にわ]に[犬|いぬ]（　）[猫|ねこ]がいます。"),
        },
        acceptedAnswers: ["と"],
        placeholder: "助詞",
        explanation:
          "Aquí necesitas unir dos sustantivos de una lista explícita. La partícula correcta es と.",
        relatedSectionIds: ["lesson-016-structure", "lesson-016-examples"],
      },
      {
        id: "q3",
        type: "fill-blank",
        prompt: {
          jp: ruby("[机|つくえ]の[上|うえ]にペンと[教科書|きょうかしょ]（　）あります。"),
        },
        acceptedAnswers: ["が"],
        placeholder: "助詞",
        explanation:
          "ペンと教科書 forma un solo grupo nominal. Después de ese grupo, la partícula que marca el referente existente es が.",
        relatedSectionIds: ["lesson-016-structure"],
      },
      {
        id: "q4",
        type: "fill-blank",
        prompt: {
          jp: ruby("[田中|たなか]さんは[日本語|にほんご]ができます。でも、[英語|えいご]（　）できません。"),
        },
        acceptedAnswers: ["は"],
        placeholder: "助詞",
        explanation:
          "Después de introducir la primera información, aquí は reaparece para contrastar con 'pero, en cuanto al inglés...'.",
        relatedSectionIds: ["lesson-016-concept", "lesson-016-structure"],
      },
      {
        id: "q5",
        type: "fill-blank",
        prompt: {
          jp: ruby("[私|わたし]（　）[港|みなと]から[来|き]ました。"),
        },
        acceptedAnswers: ["は"],
        placeholder: "助詞",
        explanation:
          "Aquí 私 es el tema de la oración. Después, 港から expresa el punto de origen del movimiento.",
        relatedSectionIds: ["lesson-016-structure", "lesson-016-examples"],
      },
      {
        id: "q6",
        type: "fill-blank",
        prompt: {
          jp: ruby("この[図鑑|ずかん]は[天体|てんたい]（　）[図鑑|ずかん]です。"),
        },
        acceptedAnswers: ["の"],
        placeholder: "助詞",
        explanation:
          "Aquí un nombre caracteriza a otro nombre: 天体の図鑑. Por eso entra の.",
        relatedSectionIds: ["lesson-016-structure", "lesson-016-examples"],
      },
      {
        id: "q7",
        type: "fill-blank",
        prompt: {
          jp: ruby("この[毛布|もうふ]はだれ（　）ですか。"),
        },
        acceptedAnswers: ["の"],
        placeholder: "助詞",
        explanation:
          "Para preguntar de quién es algo, aquí la pieza correcta es だれのですか.",
        relatedSectionIds: ["lesson-016-structure", "lesson-016-examples"],
      },
      {
        id: "q8",
        type: "fill-blank",
        prompt: {
          jp: ruby("これは[何|なん]（　）[雑誌|ざっし]ですか。"),
        },
        acceptedAnswers: ["の"],
        placeholder: "助詞",
        explanation:
          "Para preguntar por tipo o contenido, aquí necesitas なんの + sustantivo.",
        relatedSectionIds: ["lesson-016-structure", "lesson-016-examples"],
      },
      {
        id: "q9",
        type: "fill-blank",
        prompt: {
          jp: ruby("[屋上|おくじょう]（　）[望遠鏡|ぼうえんきょう]があります。"),
        },
        acceptedAnswers: ["に"],
        placeholder: "助詞",
        explanation:
          "Aquí 屋上 es el lugar donde existe el telescopio. Por eso entra に.",
        relatedSectionIds: ["lesson-016-structure", "lesson-016-examples"],
      },
      {
        id: "q10",
        type: "fill-blank",
        prompt: {
          jp: ruby("[改札|かいさつ]（　）どこですか。"),
        },
        acceptedAnswers: ["は"],
        placeholder: "助詞",
        explanation:
          "Aquí 改札 ya es el tema conocido y la pregunta cae sobre どこ. Por eso la forma natural es 改札はどこですか。",
        relatedSectionIds: ["lesson-016-concept", "lesson-016-examples"],
      },
      {
        id: "q11",
        type: "fill-blank",
        prompt: {
          jp: ruby("[留学生|りゅうがくせい]（　）[研究室|けんきゅうしつ]の[前|まえ]にいます。"),
        },
        acceptedAnswers: ["が"],
        placeholder: "助詞",
        explanation:
          "Aquí 留学生 es el referente que está presente delante del laboratorio. Por eso entra が.",
        relatedSectionIds: ["lesson-016-structure", "lesson-016-examples"],
      },
      {
        id: "q12",
        type: "fill-blank",
        prompt: {
          jp: ruby("この[毛布|もうふ]（　）ください。"),
        },
        acceptedAnswers: ["を"],
        placeholder: "助詞",
        explanation:
          "En el patrón de pedido trabajado hasta aquí, el objeto pedido va marcado con を: この毛布をください。",
        relatedSectionIds: ["lesson-016-structure", "lesson-016-examples"],
      },
      {
        id: "q13",
        type: "fill-blank",
        prompt: {
          jp: ruby("[田中|たなか]さんは[日本語|にほんご]ができます。でも、[英語|えいご]（　）できません。"),
        },
        acceptedAnswers: ["は"],
        placeholder: "助詞",
        explanation:
          "Aquí 英語 entra como bloque contrastado después de でも. Por eso la forma natural es 英語はできません。",
        relatedSectionIds: ["lesson-016-concept", "lesson-016-examples"],
      },
      {
        id: "q14",
        type: "fill-blank",
        prompt: {
          jp: ruby("こちら（　）[森田|もりた][先生|せんせい]です。"),
        },
        acceptedAnswers: ["は"],
        placeholder: "助詞",
        explanation:
          "En esta presentación cortés, こちら entra como tema con は: こちらは森田先生です。",
        relatedSectionIds: ["lesson-016-examples"],
      },
      {
        id: "q15",
        type: "fill-blank",
        prompt: {
          jp: ruby("あの[人|ひと]は[駅員|えきいん]です（　）。"),
        },
        acceptedAnswers: ["か"],
        placeholder: "助詞",
        explanation:
          "Aquí se está convirtiendo la oración en pregunta. La partícula final correcta es か.",
        relatedSectionIds: ["lesson-016-structure"],
      },
      {
        id: "q16",
        type: "single-choice",
        prompt: {
          jp: ruby("[温室|おんしつ]（　）[中|なか]（　）[花|はな]があります。"),
          note: "いちばん[自然|しぜん]な[組|く]み[合|あ]わせを[選|えら]んでください。",
        },
        choices: [
          { id: "a", label: { jp: ruby("の・に") } },
          { id: "b", label: { jp: ruby("が・に") } },
          { id: "c", label: { jp: ruby("の・が") } },
          { id: "d", label: { jp: ruby("を・に") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Primero necesitas 温室の中 para formar el lugar relacional. Después, に marca ese lugar de existencia. Por eso la combinación correcta es の・に.",
        relatedSectionIds: ["lesson-016-structure", "lesson-016-examples"],
      },
      {
        id: "q17",
        type: "single-choice",
        prompt: {
          jp: ruby("あの[山|やま]（　）[道|みち]（　）[上|うえ]（　）[桜|さくら]（　）[木|き]があります。"),
          note: "いちばん[自然|しぜん]な[組|く]み[合|あ]わせを[選|えら]んでください。",
        },
        choices: [
          { id: "a", label: { jp: ruby("の・の・に・の") } },
          { id: "b", label: { jp: ruby("が・が・に・が") } },
          { id: "c", label: { jp: ruby("の・に・の・が") } },
          { id: "d", label: { jp: ruby("に・の・に・の") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí primero se forma あの山の道, luego 道の上, después に marca el lugar, y al final 桜の木 vuelve a usar の para unir dos nombres. La secuencia correcta es の・の・に・の.",
        relatedSectionIds: ["lesson-016-structure"],
      },
      {
        id: "q18",
        type: "single-choice",
        prompt: {
          jp: ruby("[兄|あに]は[大学|だいがく]2[年生|ねんせい]です。[姉|あね]（　）[大学|だいがく]2[年生|ねんせい]です。"),
        },
        choices: [
          { id: "a", label: { jp: ruby("は") } },
          { id: "b", label: { jp: ruby("も") } },
          { id: "c", label: { jp: ruby("が") } },
          { id: "d", label: { jp: ruby("の") } },
        ],
        correctChoiceId: "b",
        explanation:
          "La información del segundo miembro coincide con la primera. Por eso la partícula natural aquí es も.",
        relatedSectionIds: ["lesson-016-structure"],
      },
      {
        id: "q19",
        type: "single-choice",
        prompt: {
          jp: ruby("[倉庫|そうこ]の[前|まえ]に[箱|はこ]と[椅子|いす]（　）あります。"),
        },
        choices: [
          { id: "a", label: { jp: ruby("は") } },
          { id: "b", label: { jp: ruby("も") } },
          { id: "c", label: { jp: ruby("が") } },
          { id: "d", label: { jp: ruby("を") } },
        ],
        correctChoiceId: "c",
        explanation:
          "箱と椅子 forma un solo grupo nominal y luego ese grupo queda marcado como referente existente con が.",
        relatedSectionIds: ["lesson-016-structure"],
      },
      {
        id: "q20",
        type: "single-choice",
        prompt: {
          jp: ruby("A: これは[何|なん]ですか。 B: それ（　）[天体|てんたい]の[図鑑|ずかん]です。"),
        },
        choices: [
          { id: "a", label: { jp: ruby("は") } },
          { id: "b", label: { jp: ruby("も") } },
          { id: "c", label: { jp: ruby("を") } },
          { id: "d", label: { jp: ruby("か") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí それ vuelve a entrar como tema de la respuesta: それは天体の図鑑です。",
        relatedSectionIds: ["lesson-016-structure", "lesson-016-examples"],
      },
      {
        id: "q21",
        type: "single-choice",
        prompt: {
          jp: ruby("いちばん[自然|しぜん]な[文|ぶん]を[選|えら]んでください。"),
        },
        choices: [
          { id: "a", label: { jp: ruby("[机|つくえ]の[上|うえ]にペンと[教科書|きょうかしょ]があります。") } },
          { id: "b", label: { jp: ruby("[机|つくえ]に[上|うえ]のペンと[教科書|きょうかしょ]があります。") } },
          { id: "c", label: { jp: ruby("[机|つくえ]の[上|うえ]がペンと[教科書|きょうかしょ]あります。") } },
          { id: "d", label: { jp: ruby("[机|つくえ]を[上|うえ]にペンと[教科書|きょうかしょ]があります。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí primero se forma el lugar relacional 机の上, luego に marca ese lugar y el grupo ペンと教科書 queda marcado con が como referente existente.",
        relatedSectionIds: ["lesson-016-structure"],
      },
      {
        id: "q22",
        type: "order-sentence",
        prompt: {
          jp: ruby("[正|ただ]しい[文|ぶん]を[作|つく]ってください。"),
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[展示室|てんじしつ]") }, value: "展示室" },
          { id: "t2", label: { jp: ruby("の") }, value: "の" },
          { id: "t3", label: { jp: ruby("[中|なか]") }, value: "中" },
          { id: "t4", label: { jp: ruby("に") }, value: "に" },
          { id: "t5", label: { jp: ruby("[彫刻|ちょうこく]") }, value: "彫刻" },
          { id: "t6", label: { jp: ruby("が") }, value: "が" },
          { id: "t7", label: { jp: ruby("あります。") }, value: "あります。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4", "t5", "t6", "t7"],
        answerLabel: { jp: ruby("[展示室|てんじしつ]の[中|なか]に[彫刻|ちょうこく]があります。") },
        explanation:
          "Primero se forma el lugar relacional 展示室の中, luego に marca el lugar y después が marca el referente existente.",
        relatedSectionIds: ["lesson-016-structure", "lesson-016-vocabulary"],
      },
      {
        id: "q23",
        type: "order-sentence",
        prompt: {
          jp: ruby("[正|ただ]しい[文|ぶん]を[作|つく]ってください。"),
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[留学生|りゅうがくせい]") }, value: "留学生" },
          { id: "t2", label: { jp: ruby("も") }, value: "も" },
          { id: "t3", label: { jp: ruby("[研究者|けんきゅうしゃ]") }, value: "研究者" },
          { id: "t4", label: { jp: ruby("です") }, value: "です" },
          { id: "t5", label: { jp: ruby("か。") }, value: "か。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4", "t5"],
        answerLabel: { jp: ruby("[留学生|りゅうがくせい]も[研究者|けんきゅうしゃ]ですか。") },
        explanation:
          "Aquí も expresa “también” y か convierte la oración completa en pregunta.",
        relatedSectionIds: ["lesson-016-structure", "lesson-016-vocabulary"],
      },
      {
        id: "q24",
        type: "single-choice",
        prompt: {
          jp: ruby("いちばん[自然|しぜん]な[文|ぶん]を[選|えら]んでください。"),
        },
        choices: [
          { id: "a", label: { jp: ruby("[廊下|ろうか]に[案内板|あんないばん]があります。") } },
          { id: "b", label: { jp: ruby("[廊下|ろうか]が[案内板|あんないばん]にあります。") } },
          { id: "c", label: { jp: ruby("[廊下|ろうか]の[案内板|あんないばん]にあります。") } },
          { id: "d", label: { jp: ruby("[廊下|ろうか]を[案内板|あんないばん]があります。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí el lugar es 廊下 y el referente que existe es 案内板. La estructura natural es 廊下に案内板があります。",
        relatedSectionIds: ["lesson-016-structure", "lesson-016-vocabulary"],
      },
    ],
  },
};

export default lesson016;
