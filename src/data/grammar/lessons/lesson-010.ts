//src/data/grammar/lessons/lesson-010.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson010: GrammarLesson = {
  id: "lesson-010",
  slug: "arimasu-imasu-existencia-basica",
  order: 13,
  level: "N5",
  status: "ready",
  title: "Existencia básica",
  jpTitle: "あります・います・どこ・何・誰",
  shortTitle: "あります / います",
  description:
    "Cómo usar あります e います para expresar existencia y presencia, distinguir qué verbo corresponde según el referente, marcar con が lo que existe y con に el lugar, y preguntar con どこ・何・誰 sin mezclar las funciones de cada partícula.",
  estimatedMinutes: 62,
  categoryTags: ["fundamentos", "verbos", "existencia", "particulas", "preguntas", "lectura"],
  grammarTags: [
    "あります",
    "います",
    "が",
    "に",
    "どこ",
    "何",
    "誰",
    "A が B に あります",
    "A が B に います",
  ],
  searchTerms: [
    "arimasu imasu",
    "existencia en japones",
    "ga ni arimasu",
    "ga ni imasu",
    "doko ni imasu",
    "doko ni arimasu",
    "nani ga arimasu",
    "dare ga imasu",
  ],
  relatedLessonSlugs: [
    "preguntas-basicas-desu-ka",
    "pronombres-demostrativos-kore-sore-are",
    "particula-no-posesion-relacion-tipo",
    "demostrativos-con-sustantivo-kono-sono-ano",
  ],
  relatedVocabularyTags: ["personas", "animales", "objetos", "lugares", "preguntas", "base"],
  objectives: [
    "Distinguir entre います y あります según el tipo de referente que existe o está presente.",
    "Entender que が marca lo que existe y に marca el lugar de existencia.",
    "Reconocer que el orden puede moverse sin romper la estructura base, aunque el foco de la frase cambie.",
    "Preguntar dónde está algo o alguien con どこにありますか / どこにいますか y entender por qué ahí el referente suele pasar a は.",
    "Usar 何 y 誰 para reemplazar el referente que existe dentro de preguntas simples.",
    "Leer y producir oraciones más completas del tipo sustantivo + partícula + sustantivo + partícula + verbo final.",
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
      id: "lesson-010-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "Hasta ahora ya podías construir oraciones nominales, hacer preguntas, unir sustantivos con の y señalar cosas con demostrativos. En esta unidad aparece una base verbal muy importante: expresar que algo o alguien está en un lugar. Para eso entran あります e います, junto con dos partículas que aquí trabajan de forma muy clara: が para el referente que existe y に para el lugar donde existe.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Aprenderás a distinguir frases como:",
              jp: ruby("[猫|ねこ]が[公園|こうえん]にいます。 / [箱|はこ]が[部屋|へや]にあります。"),
            },
            {
              es: "También practicarás preguntas como:",
              jp: ruby("[猫|ねこ]はどこにいますか。 / [教室|きょうしつ]に[何|なに]がありますか。 / [店|みせ]に[誰|だれ]がいますか。"),
            },
            {
              es: "En esta unidad todavía no veremos posiciones detalladas como",
              jp: ruby("[上|うえ] / [下|した] / [前|まえ] / [後|うし]ろ"),
              note: "Aquí primero dejamos firme la base de existencia antes de pasar a ese siguiente bloque.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-010-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "La distinción no se explica bien solo con “tiene vida”",
          content:
            "En muchos esquemas muy iniciales se dice que います se usa para lo que tiene vida y あります para lo que no. Esa idea puede servir como atajo, pero se queda corta. En esta unidad conviene fijar algo más útil: います se usa con personas, animales y referentes tratados como móviles o animados; あります se usa con objetos, cosas, lugares y también con plantas dentro del japonés básico.",
          bullets: [
            {
              jp: ruby("[学生|がくせい]がいます。 / [犬|いぬ]がいます。"),
              es: "personas y animales → います",
            },
            {
              jp: ruby("[本|ほん]があります。 / [机|つくえ]があります。 / [木|き]があります。"),
              es: "objetos, cosas y plantas → あります",
            },
            {
              jp: ruby("ロボットがいます。"),
              es: "si el referente se trata como algo que se mueve o actúa como presencia animada, aquí lo trabajamos con います",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Qué hace cada partícula en esta unidad",
          content:
            "Aquí las partículas cumplen funciones muy visibles. が marca el referente que existe o está presente. に marca el lugar donde ese referente existe. Conviene pensar primero qué cosa o ser quieres ubicar, y después preguntar o decir en qué lugar está.",
          bullets: [
            {
              jp: ruby("[猫|ねこ]が[公園|こうえん]にいます。"),
              es: "猫 es el referente existente; 公園 es el lugar",
            },
            {
              jp: ruby("[帽子|ぼうし]が[部屋|へや]にあります。"),
              es: "帽子 es lo que existe; 部屋 es el lugar",
            },
            {
              jp: ruby("[教室|きょうしつ]に[学生|がくせい]がいます。"),
              es: "el orden puede empezar por el lugar, pero が sigue marcando al referente",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Cuando preguntas por el lugar, el referente suele pasar a は",
          content:
            "Si el gato, el libro o la persona ya son el tema conocido de la conversación, puedes poner ese referente con は y preguntar por el lugar con どこに. Por eso en preguntas de ubicación como 猫はどこにいますか no aparece が en el referente principal: ya no estás preguntando qué existe, sino dónde está ese referente concreto.",
          bullets: [
            {
              jp: ruby("[猫|ねこ]はどこにいますか。"),
              es: "el tema ya conocido es 猫; ahora preguntas por el lugar",
            },
            {
              jp: ruby("[本|ほん]はどこにありますか。"),
              es: "el tema ya conocido es 本; el foco de la pregunta es どこ",
            },
            {
              jp: ruby("[公園|こうえん]に[誰|だれ]がいますか。"),
              es: "aquí sí preguntas por el referente que existe; por eso vuelve が",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "El orden puede moverse, pero no todas las preguntas funcionan igual",
          content:
            "En afirmaciones simples puedes empezar por el referente o por el lugar. Las dos formas son naturales, aunque cambie un poco el foco. En cambio, cuando ya preguntas con どこ por el lugar, lo más claro es mantener como tema al referente conocido y dejar どこに como parte interrogativa fija.",
          bullets: [
            {
              jp: ruby("[公園|こうえん]に[子供|こども]がいます。 / [子供|こども]が[公園|こうえん]にいます。"),
              es: "las dos sirven; cambia el punto desde donde presentas la información",
            },
            {
              jp: ruby("[犬|いぬ]はどこにいますか。"),
              es: "aquí no conviene tratar どこ como si fuera solo otra palabra intercambiable del orden",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-010-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-010-1",
              label: "Existencia de persona o animal",
              pattern: ruby("A が B にいます。"),
              meaning: "A está / hay A en B.",
              translation:
                "Se usa cuando el referente principal es una persona, un animal o un referente tratado como presencia animada dentro del alcance de esta unidad.",
              structure: [
                {
                  slot: "A",
                  value: "persona o ser animado",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[学生|がくせい] / [先生|せんせい] / [猫|ねこ] / [犬|いぬ] / [赤|あか]ちゃん / [客|きゃく]。"),
                  },
                },
                {
                  slot: { jp: ruby("が") },
                  value: "marca del referente existente",
                  note: "Aquí señala quién o qué ser está presente en el lugar.",
                },
                {
                  slot: "B",
                  value: "lugar de existencia",
                  note: {
                    es: "Puede ser algo como:",
                    jp: ruby("[公園|こうえん] / [教室|きょうしつ] / [部屋|へや] / [店|みせ] / [庭|にわ]。"),
                  },
                },
                {
                  slot: { jp: ruby("に") },
                  value: "lugar de existencia",
                  note: "Marca dónde está la persona o el animal.",
                },
                {
                  slot: { jp: ruby("います") },
                  value: "verbo de existencia",
                  note: "Aquí cerramos la oración con el verbo correspondiente a este tipo de referente.",
                },
              ],
              notes: [
                "La idea base aquí es presencia o existencia en un lugar, no una acción como caminar o comer.",
                "Si cambias el tipo de referente, puede cambiar también el verbo final.",
              ],
            },
            {
              id: "pattern-010-2",
              label: "Existencia de objeto o cosa",
              pattern: ruby("A が B にあります。"),
              meaning: "A está / hay A en B.",
              translation:
                "Se usa cuando el referente principal es un objeto, una cosa, un lugar o una entidad tratada como no animada dentro de esta unidad.",
              structure: [
                {
                  slot: "A",
                  value: "objeto, cosa o planta",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[本|ほん] / [帽子|ぼうし] / [箱|はこ] / [皿|さら] / [木|き] / [花|はな]。"),
                  },
                },
                {
                  slot: { jp: ruby("が") },
                  value: "marca del referente existente",
                  note: "Señala cuál es la cosa que existe en el lugar.",
                },
                {
                  slot: "B",
                  value: "lugar de existencia",
                  note: {
                    es: "Puede ser algo como:",
                    jp: ruby("[部屋|へや] / [教室|きょうしつ] / [店|みせ] / [庭|にわ] / [川|かわ]。"),
                  },
                },
                {
                  slot: { jp: ruby("に") },
                  value: "lugar de existencia",
                  note: "Marca el lugar donde está la cosa o el objeto.",
                },
                {
                  slot: { jp: ruby("あります") },
                  value: "verbo de existencia",
                  note: "Aquí cerramos con el verbo de existencia correspondiente a objetos, cosas y plantas dentro de esta unidad.",
                },
              ],
              notes: [
                "No conviene resumir esta regla como “vida sí / vida no” porque te llevará a errores con plantas u otros referentes especiales.",
                "Piensa mejor en el tipo de presencia que el japonés básico trata como animada o no animada.",
              ],
            },
            {
              id: "pattern-010-3",
              label: "Empezar por el lugar",
              pattern: ruby("B に A があります / います。"),
              meaning: "En B hay / está A.",
              translation:
                "Esta dirección de la oración también es muy natural. Empiezas presentando el lugar y luego dices qué existe allí.",
              structure: [
                {
                  slot: "B に",
                  value: "lugar primero",
                  note: "Muy útil cuando el lugar es el marco principal de la frase.",
                },
                {
                  slot: "A が",
                  value: "referente existente",
                  note: "El referente sigue marcado por が aunque ahora aparezca después del lugar.",
                },
              ],
              notes: [
                {
                  es: "Compara:",
                  jp: ruby("[公園|こうえん]に[猫|ねこ]がいます。 / [猫|ねこ]が[公園|こうえん]にいます。"),
                },
                "Las dos estructuras son válidas; lo que cambia es el punto desde donde presentas la información.",
              ],
            },
            {
              id: "pattern-010-4",
              label: "Preguntar por el lugar",
              pattern: ruby("A はどこにありますか。 / A はどこにいますか。"),
              meaning: "¿Dónde está A?",
              translation:
                "Aquí A suele entrar como tema conocido. Por eso usamos は y preguntamos por el lugar con どこに.",
              structure: [
                {
                  slot: "A は",
                  value: "referente conocido",
                  note: "Ya sabes qué cosa o ser buscas; por eso entra como tema.",
                },
                {
                  slot: { jp: ruby("どこに") },
                  value: "pregunta por lugar",
                  note: "Se mantiene fijo como bloque de pregunta en esta estructura.",
                },
                {
                  slot: { jp: ruby("ありますか / いますか") },
                  value: "verbo según el referente",
                  note: "El verbo sigue dependiendo del tipo de referente que estás ubicando.",
                },
              ],
              notes: [
                "Si preguntas por el lugar del gato, usarás います. Si preguntas por el lugar del libro, usarás あります.",
                "Aquí no preguntas qué existe, sino dónde está algo ya identificado.",
              ],
            },
            {
              id: "pattern-010-5",
              label: "Preguntar qué o quién existe",
              pattern: ruby("B に [何|なに]がありますか。 / B に [誰|だれ]がいますか。"),
              meaning: "¿Qué hay en B? / ¿Quién está en B?",
              translation:
                "Estas preguntas cambian el foco. Ahora el lugar ya está claro y lo que quieres descubrir es el referente que existe allí.",
              structure: [
                {
                  slot: "B に",
                  value: "lugar ya visible",
                  note: "Primero fijas el lugar.",
                },
                {
                  slot: { jp: ruby("[何|なに] / [誰|だれ]") },
                  value: "interrogativo del referente",
                  note: "何 pregunta por cosa u objeto; 誰 pregunta por persona.",
                },
                {
                  slot: { jp: ruby("が") },
                  value: "marca del referente buscado",
                  note: "Aquí vuelve が porque eso mismo es lo que estás preguntando.",
                },
              ],
              notes: [
                {
                  es: "Ejemplos base:",
                  jp: ruby("[教室|きょうしつ]に[何|なに]がありますか。 / [店|みせ]に[誰|だれ]がいますか。"),
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-010-vocabulary",
      kind: "vocabulary",
      title: "Vocabulario nuevo para esta unidad",
      description:
        "Aquí ampliamos bastante el léxico para que la existencia se practique con escenas más variadas y no solo con los mismos dos o tres objetos de siempre.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 4,
          items: [
            { id: "vocab-010-cat", jp: ruby("[猫|ねこ]"), reading: "ねこ", meaning: "gato", tags: ["animal", "nuevo"] },
            { id: "vocab-010-dog", jp: ruby("[犬|いぬ]"), reading: "いぬ", meaning: "perro", tags: ["animal", "repaso"] },
            { id: "vocab-010-bird", jp: ruby("[鳥|とり]"), reading: "とり", meaning: "pájaro", tags: ["animal", "nuevo"] },
            { id: "vocab-010-fish", jp: ruby("[魚|さかな]"), reading: "さかな", meaning: "pez / pescado", tags: ["animal", "nuevo"] },

            { id: "vocab-010-baby", jp: ruby("[赤|あか]ちゃん"), reading: "あかちゃん", meaning: "bebé", tags: ["persona", "nuevo"] },
            { id: "vocab-010-child", jp: ruby("[子供|こども]"), reading: "こども", meaning: "niño / niños", tags: ["persona", "nuevo"] },
            { id: "vocab-010-friend", jp: ruby("[友達|ともだち]"), reading: "ともだち", meaning: "amigo / amiga", tags: ["persona", "nuevo"] },
            { id: "vocab-010-customer", jp: ruby("[客|きゃく]"), reading: "きゃく", meaning: "cliente / visitante", tags: ["persona", "nuevo"] },

            { id: "vocab-010-box", jp: ruby("[箱|はこ]"), reading: "はこ", meaning: "caja", tags: ["objeto", "nuevo"] },
            { id: "vocab-010-hat", jp: ruby("[帽子|ぼうし]"), reading: "ぼうし", meaning: "sombrero / gorro", tags: ["objeto", "nuevo"] },
            { id: "vocab-010-umbrella", jp: ruby("[傘|かさ]"), reading: "かさ", meaning: "paraguas", tags: ["objeto", "nuevo"] },
            { id: "vocab-010-plate", jp: ruby("[皿|さら]"), reading: "さら", meaning: "plato", tags: ["objeto", "nuevo"] },

            { id: "vocab-010-bed", jp: [{ text: "ベッド" }], reading: "べっど", meaning: "cama", tags: ["objeto", "nuevo"] },
            { id: "vocab-010-sofa", jp: [{ text: "ソファ" }], reading: "そふぁ", meaning: "sofá", tags: ["objeto", "nuevo"] },
            { id: "vocab-010-ball", jp: [{ text: "ボール" }], reading: "ぼーる", meaning: "pelota / balón", tags: ["objeto", "nuevo"] },
            { id: "vocab-010-robot", jp: [{ text: "ロボット" }], reading: "ろぼっと", meaning: "robot", tags: ["objeto", "nuevo"] },

            { id: "vocab-010-classroom", jp: ruby("[教室|きょうしつ]"), reading: "きょうしつ", meaning: "sala de clases / aula", tags: ["lugar", "nuevo"] },
            { id: "vocab-010-room", jp: ruby("[部屋|へや]"), reading: "へや", meaning: "habitación / cuarto", tags: ["lugar", "nuevo"] },
            { id: "vocab-010-garden", jp: ruby("[庭|にわ]"), reading: "にわ", meaning: "jardín / patio", tags: ["lugar", "nuevo"] },
            { id: "vocab-010-hallway", jp: ruby("[廊下|ろうか]"), reading: "ろうか", meaning: "pasillo", tags: ["lugar", "nuevo"] },

            { id: "vocab-010-kitchen", jp: ruby("[台所|だいどころ]"), reading: "だいどころ", meaning: "cocina", tags: ["lugar", "nuevo"] },
            { id: "vocab-010-shop", jp: ruby("[店|みせ]"), reading: "みせ", meaning: "tienda", tags: ["lugar", "nuevo"] },
            { id: "vocab-010-park", jp: ruby("[公園|こうえん]"), reading: "こうえん", meaning: "parque", tags: ["lugar", "nuevo"] },
            { id: "vocab-010-river", jp: ruby("[川|かわ]"), reading: "かわ", meaning: "río", tags: ["lugar", "nuevo"] },

            { id: "vocab-010-forest", jp: ruby("[森|もり]"), reading: "もり", meaning: "bosque", tags: ["lugar", "nuevo"] },
            { id: "vocab-010-tree", jp: ruby("[木|き]"), reading: "き", meaning: "árbol", tags: ["planta", "repaso"] },
            { id: "vocab-010-flower", jp: ruby("[花|はな]"), reading: "はな", meaning: "flor", tags: ["planta", "repaso"] },
            { id: "vocab-010-bench", jp: [{ text: "ベンチ" }], reading: "べんち", meaning: "banco / banca", tags: ["objeto", "nuevo"] },
          ],
        },
      ],
    },
    {
      id: "lesson-010-examples",
      kind: "examples",
      title: "Ejemplos guiados",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "ex-010-1",
              jp: ruby("[公園|こうえん]に[猫|ねこ]がいます。"),
              es: "Hay un gato en el parque.",
              breakdown: [
                { label: "公園に", es: "el lugar donde existe el referente" },
                { label: "猫が", es: "el referente que existe" },
                { label: "います", es: "verbo de existencia para este tipo de referente" },
              ],
              notes: [
                "La oración empieza por el lugar, pero 猫 sigue marcado por が como referente existente.",
              ],
            },
            {
              id: "ex-010-2",
              jp: ruby("[帽子|ぼうし]が[部屋|へや]にあります。"),
              es: "El sombrero está en la habitación.",
              breakdown: [
                { label: "帽子が", es: "lo que existe" },
                { label: "部屋に", es: "el lugar de existencia" },
              ],
              notes: [
                "Aquí el referente es un objeto, así que el verbo final cambia a あります.",
              ],
            },
            {
              id: "ex-010-3",
              jp: ruby("[庭|にわ]に[木|き]があります。"),
              es: "Hay un árbol en el jardín.",
              notes: [
                "Este ejemplo sirve para fijar que las plantas se trabajan con あります dentro del alcance básico de esta unidad.",
              ],
            },
            {
              id: "ex-010-4",
              jp: ruby("[研究室|けんきゅうしつ]にロボットがいます。"),
              es: "Hay un robot en el laboratorio.",
              notes: [
                "Aquí lo tratamos como presencia animada o móvil dentro de la escena. Por eso usamos います y no あります.",
              ],
            },
            {
              id: "ex-010-5",
              jp: ruby("[子供|こども]が[庭|にわ]にいます。"),
              es: "El niño está en el jardín.",
              notes: [
                "Esta versión empieza por el referente y luego añade el lugar. También es natural.",
              ],
            },
            {
              id: "ex-010-6",
              jp: ruby("[川|かわ]に[魚|さかな]がいます。"),
              es: "Hay peces en el río.",
              notes: [
                "Aunque empiece por el lugar, el referente principal sigue siendo 魚, marcado por が.",
              ],
            },
            {
              id: "ex-010-7",
              jp: ruby("[台所|だいどころ]に[皿|さら]があります。"),
              es: "Hay platos en la cocina.",
              notes: [
                "Buena escena para fijar la combinación objeto + lugar + あります.",
              ],
            },
            {
              id: "ex-010-8",
              jp: ruby("[店|みせ]にお[客様|きゃくさま]がいます。"),
              es: "Hay clientes en la tienda.",
              notes: [
                "客 es persona, así que cerramos con います.",
              ],
            },
            {
              id: "ex-010-9",
              jp: ruby("[猫|ねこ]はどこにいますか。 [公園|こうえん]にいます。"),
              es: "¿Dónde está el gato? Está en el parque.",
              notes: [
                "Aquí 猫 ya es el tema conocido; por eso aparece con は y la pregunta se concentra en どこに.",
              ],
            },
            {
              id: "ex-010-10",
              jp: ruby("[傘|かさ]はどこにありますか。 [廊下|ろうか]にあります。"),
              es: "¿Dónde está el paraguas? Está en el pasillo.",
              notes: [
                "El mismo patrón se mantiene, pero ahora el verbo es あります porque el referente es un objeto.",
              ],
            },
            {
              id: "ex-010-11",
              jp: ruby("[教室|きょうしつ]に[誰|だれ]がいますか。 [先生|せんせい]がいます。"),
              es: "¿Quién está en la sala de clases? Está el profesor.",
              notes: [
                "Como la pregunta busca al referente que existe, 誰 entra con が.",
              ],
            },
            {
              id: "ex-010-12",
              jp: ruby("[部屋|へや]に[何|なに]がありますか。 ソファがあります。"),
              es: "¿Qué hay en la habitación? Hay un sofá.",
              notes: [
                "何 reemplaza al objeto todavía desconocido y la estructura mantiene が para el referente preguntado.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-010-contrast",
      kind: "contrast",
      title: "Contrastes importantes",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-010-1",
              label: "います vs あります",
              correct: {
                jp: ruby("[犬|いぬ]がいます。 / [箱|はこ]があります。"),
                es: "personas y animales con います; objetos y cosas con あります",
              },
              explanation:
                "Esta es la distinción base de la unidad. Conviene fijarla bien antes de entrar a más detalles de ubicación.",
            },
            {
              id: "contrast-010-2",
              label: "Planta y robot no siguen una explicación simplista de “vida”",
              correct: {
                jp: ruby("[木|き]があります。 / ロボットがいます。"),
                es: "la planta entra con あります y el robot aquí se trabaja como presencia animada o móvil con います",
              },
              explanation:
                "Recordar la distinción de si se mueve o no, no solo como “si está vivo o no”.",
            },
            {
              id: "contrast-010-3",
              label: "Qué marca が y qué marca に",
              correct: {
                jp: ruby("[帽子|ぼうし]が[部屋|へや]にあります。"),
                es: "が marca lo que existe; に marca el lugar donde existe",
              },
              incorrect: {
                jp: ruby("[帽子|ぼうし]に[部屋|へや]があります。"),
                es: "así intercambias las funciones y rompes la relación natural",
              },
              explanation:
                "En esta unidad conviene mirar siempre primero cuál es el referente existente y cuál es el lugar.",
            },
            {
              id: "contrast-010-4",
              label: "Preguntar por lugar vs preguntar por referente",
              correct: {
                jp: ruby("[猫|ねこ]はどこにいますか。 / [公園|こうえん]に[誰|だれ]がいますか。"),
                es: "la primera pregunta busca lugar; la segunda busca el referente existente",
              },
              explanation:
                "Ese contraste te ayuda a entender por qué en una entra は y en la otra vuelve が con la palabra interrogativa.",
            },
            {
              id: "contrast-010-5",
              label: "El orden puede cambiar",
              correct: {
                jp: ruby("[教室|きょうしつ]に[学生|がくせい]がいます。 / [学生|がくせい]が[教室|きょうしつ]にいます。"),
                es: "las dos son naturales dentro del alcance de esta unidad",
              },
              explanation:
                "No estás aprendiendo dos gramáticas distintas. El contenido base sigue siendo el mismo; solo cambia el foco inicial de la frase.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-010-warning",
      kind: "warning",
      title: "En qué fijarte bien",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "No elijas el verbo solo por intuición ni cambies las partículas al azar",
          content:
            "Los errores más comunes de esta unidad son dos: usar います o あります solo por costumbre, y cambiar が y に como si fueran intercambiables. Conviene pensar la oración en este orden: qué existe, en qué lugar existe y qué tipo de referente es para escoger el verbo final.",
          bullets: [
            {
              jp: ruby("[何|なに]があるか / [誰|だれ]がいるか / どこにあるか / どこにいるか"),
              es: "cada pregunta cambia el foco y por eso cambia también la estructura",
            },
            {
              jp: ruby("[本|ほん]はどこにありますか。 / [教室|きょうしつ]に[何|なに]がありますか。"),
              es: "la primera busca lugar; la segunda busca el referente",
            },
            {
              jp: ruby("[木|き]があります。 / ロボットがいます。"),
              es: "no reduzcas la decisión a una idea demasiado simplista de “vida”",
            },
          ],
        },
      ],
    },
    {
        id: "lesson-010-practice",
        kind: "practice",
        title: "Práctica guiada antes del quiz",
        blocks: [
            {
            type: "bullet-list",
            items: [
                {
                es: "Escribe primero cinco escenas con personas o animales usando",
                jp: ruby("います"),
                note: "por ejemplo con [猫|ねこ], [鳥|とり], [友達|ともだち], [子供|こども] o [客|きゃく].",
                },
                {
                es: "Haz luego cinco escenas con objetos, cosas o plantas usando",
                jp: ruby("あります"),
                note: "por ejemplo con [帽子|ぼうし], [箱|はこ], [傘|かさ], [花|はな] o [木|き].",
                },
                {
                es: "Reescribe tres veces la misma escena cambiando el orden:",
                jp: ruby("[公園|こうえん]に[猫|ねこ]がいます。 / [猫|ねこ]が[公園|こうえん]にいます。"),
                },
                {
                es: "Haz preguntas por lugar con",
                jp: ruby("どこにありますか / どこにいますか"),
                note: "usando [物|もの] o [生|い]き[物|もの] ya conocidos en la escena.",
                },
                {
                es: "Haz preguntas por referente con",
                jp: ruby("[何|なに]がありますか / [誰|だれ]がいますか"),
                note: "empezando por el [場所|ばしょ]: [教室|きょうしつ]に..., [店|みせ]に..., [公園|こうえん]に..., [部屋|へや]に....",
                },
            ],
            },
        ],
      },
    {
      id: "lesson-010-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Entiendo la diferencia base entre",
              jp: ruby("います / あります。"),
            },
            {
              es: "Sé que",
              jp: ruby("が"),
              note: "marca el referente que existe y",
            },
            {
              es: "Sé que",
              jp: ruby("に"),
              note: "marca el lugar de existencia dentro de esta unidad.",
            },
            {
              es: "Puedo preguntar dónde está algo o alguien con",
              jp: ruby("どこにいますか / どこにありますか。"),
            },
            {
              es: "Puedo preguntar qué o quién hay en un lugar con",
              jp: ruby("[何|なに]がありますか / [誰|だれ]がいますか。"),
            },
            {
              es: "Empiezo a manejar una estructura verbal más completa del tipo sustantivo + partícula + sustantivo + partícula + verbo final.",
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-010-quiz",
    title: "Quiz — あります / います",
    description:
      "Repaso variado para comprobar si ya distingues qué verbo usar, cómo funcionan が y に, cómo cambia el foco en preguntas con どこ・何・誰 y cómo se mueve el orden sin romper la estructura base.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "single-choice",
        prompt: {
          es: "¿Qué verbo corresponde mejor para hablar de un gato en el parque?",
        },
        choices: [
          { id: "a", label: { jp: ruby("あります") } },
          { id: "b", label: { jp: ruby("います") } },
          { id: "c", label: { jp: ruby("です") } },
          { id: "d", label: { jp: ruby("できます") } },
        ],
        correctChoiceId: "b",
        explanation:
          "En esta unidad, personas y animales se trabajan con います.",
        relatedSectionIds: ["lesson-010-concept", "lesson-010-structure"],
      },
      {
        id: "q2",
        type: "single-choice",
        prompt: {
          es: "¿Qué verbo corresponde mejor para hablar de una caja en la habitación?",
        },
        choices: [
          { id: "a", label: { jp: ruby("あります") } },
          { id: "b", label: { jp: ruby("います") } },
          { id: "c", label: { jp: ruby("です") } },
          { id: "d", label: { jp: ruby("わかります") } },
        ],
        correctChoiceId: "a",
        explanation:
          "箱 es un objeto, así que aquí corresponde あります.",
        relatedSectionIds: ["lesson-010-concept", "lesson-010-structure"],
      },
      {
        id: "q3",
        type: "single-choice",
        prompt: {
          es: "En esta unidad, ¿qué verbo corresponde para hablar de un árbol en el jardín?",
        },
        choices: [
          { id: "a", label: { jp: ruby("います") } },
          { id: "b", label: { jp: ruby("あります") } },
          { id: "c", label: { jp: ruby("です") } },
          { id: "d", label: { jp: ruby("じゃありません") } },
        ],
        correctChoiceId: "b",
        explanation:
          "Aunque esté vivo, 木 se trabaja aquí con あります dentro del japonés básico de esta unidad.",
        relatedSectionIds: ["lesson-010-concept", "lesson-010-contrast"],
      },
      {
        id: "q4",
        type: "single-choice",
        prompt: {
          es: "¿Cuál de estas opciones refleja mejor la nota útil de esta unidad sobre ロボット?",
        },
        choices: [
          { id: "a", label: { jp: ruby("ロボットがあります。") } },
          { id: "b", label: { jp: ruby("ロボットがいます。") } },
          { id: "c", label: { jp: ruby("ロボットはです。") } },
          { id: "d", label: { jp: ruby("ロボットにいます。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "Aquí lo tratamos como presencia animada o móvil dentro de la escena, así que la forma de trabajo es ロボットがいます.",
        relatedSectionIds: ["lesson-010-concept", "lesson-010-contrast"],
      },
      {
        id: "q5",
        type: "single-choice",
        prompt: {
          es: "En la suguiente oración, ¿qué marca に?",
          jp: ruby("[帽子|ぼうし]が[部屋|へや]にあります。"),
        },
        choices: [
          { id: "a", label: { es: "Marca el referente que existe." } },
          { id: "b", label: { es: "Marca el lugar de existencia." } },
          { id: "c", label: { es: "Convierte la oración en pregunta." } },
          { id: "d", label: { es: "Reemplaza al verbo final." } },
        ],
        correctChoiceId: "b",
        explanation:
          "En esta unidad, に marca el lugar donde existe el referente.",
        relatedSectionIds: ["lesson-010-concept", "lesson-010-structure"],
      },
      {
        id: "q6",
        type: "single-choice",
        prompt: {
          es: "Elige la oración más natural para decir: “Hay un pájaro en el bosque”.",
        },
        choices: [
          { id: "a", label: { jp: ruby("[鳥|とり]に[森|もり]がいます。") } },
          { id: "b", label: { jp: ruby("[森|もり]が[鳥|とり]にいます。") } },
          { id: "c", label: { jp: ruby("[鳥|とり]が[森|もり]にいます。") } },
          { id: "d", label: { jp: ruby("[鳥|とり]は[森|もり]がいます。") } },
        ],
        correctChoiceId: "c",
        explanation:
          "鳥 es el referente existente, 森 es el lugar y el verbo correspondiente aquí es います.",
        relatedSectionIds: ["lesson-010-structure", "lesson-010-vocabulary"],
      },
      {
        id: "q7",
        type: "single-choice",
        prompt: {
          es: "¿Cuál pregunta corresponde mejor si ya sabes que hablas del gato y quieres preguntar por su ubicación?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[猫|ねこ]がどこにいますか。") } },
          { id: "b", label: { jp: ruby("どこに[猫|ねこ]がいますか。") } },
          { id: "c", label: { jp: ruby("[猫|ねこ]はどこにいますか。") } },
          { id: "d", label: { jp: ruby("[猫|ねこ]にどこがいますか。") } },
        ],
        correctChoiceId: "c",
        explanation:
          "Si el referente ya es conocido, aquí lo trabajamos como tema con は y preguntamos por el lugar con どこに.",
        relatedSectionIds: ["lesson-010-concept", "lesson-010-structure"],
      },
      {
        id: "q8",
        type: "single-choice",
        prompt: {
          es: "Qué respuesta encaja mejor con la siguiente pregunta",
          jp: ruby("[教室|きょうしつ]に[誰|だれ]がいますか。"),
        },
        choices: [
          { id: "a", label: { jp: ruby("[先生|せんせい]がいます。") } },
          { id: "b", label: { jp: ruby("[教室|きょうしつ]にいます。") } },
          { id: "c", label: { jp: ruby("[先生|せんせい]にいます。") } },
          { id: "d", label: { jp: ruby("[先生|せんせい]はどこですか。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "La pregunta busca el referente existente, por eso la respuesta natural da ese referente con が.",
        relatedSectionIds: ["lesson-010-structure", "lesson-010-examples"],
      },
      {
        id: "q9",
        type: "single-choice",
        prompt: {
          es: "Qué respuesta encaja mejor con la siguiente pregunta:",
          jp: ruby("[部屋|へや]に[何|なに]がありますか。"),
        },
        choices: [
          { id: "a", label: { jp: ruby("ソファがあります。") } },
          { id: "b", label: { jp: ruby("[部屋|へや]にあります。") } },
          { id: "c", label: { jp: ruby("ソファにあります。") } },
          { id: "d", label: { jp: ruby("ソファがいます。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí la pregunta busca el objeto existente, así que la respuesta natural da ese objeto y mantiene あります.",
        relatedSectionIds: ["lesson-010-structure", "lesson-010-examples"],
      },
      {
        id: "q10",
        type: "single-choice",
        prompt: {
          es: "¿Cuál par expresa la misma idea base con dos órdenes posibles?",
        },
        choices: [
          {
            id: "a",
            label: {
              jp: ruby("[公園|こうえん]に[子供|こども]がいます。 / [子供|こども]が[公園|こうえん]にいます。"),
            },
          },
          {
            id: "b",
            label: {
              jp: ruby("[公園|こうえん]が[子供|こども]にいます。 / [子供|こども]に[公園|こうえん]がいます。"),
            },
          },
          {
            id: "c",
            label: {
              jp: ruby("[公園|こうえん]に[子供|こども]はです。 / [子供|こども]が[公園|こうえん]です。"),
            },
          },
          {
            id: "d",
            label: {
              jp: ruby("[公園|こうえん]に[子供|こども]があります。 / [子供|こども]が[公園|こうえん]にあります。"),
            },
          },
        ],
        correctChoiceId: "a",
        explanation:
          "Las dos oraciones del par correcto mantienen la misma relación básica; solo cambia el punto desde donde presentas la información.",
        relatedSectionIds: ["lesson-010-concept", "lesson-010-contrast"],
      },
      {
        id: "q11",
        type: "single-choice",
        prompt: {
          jp: ruby("[図書館|としょかん]にあります。"),
          note: "Elige la pregunta más natural para esa respuesta.",
        },
        choices: [
          { id: "a", label: { jp: ruby("[本|ほん]はどこにありますか。") } },
          { id: "b", label: { jp: ruby("[図書館|としょかん]に[何|なに]がありますか。") } },
          { id: "c", label: { jp: ruby("[本|ほん]が[図書館|としょかん]にいますか。") } },
          { id: "d", label: { jp: ruby("[誰|だれ]が[図書館|としょかん]にいますか。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "La respuesta da un lugar. Por eso la pregunta más natural pide la ubicación de un objeto ya conocido: 本はどこにありますか。",
        relatedSectionIds: ["lesson-010-structure", "lesson-010-contrast"],
      },
      {
        id: "q12",
        type: "single-choice",
        prompt: {
          jp: ruby("お[客様|きゃくさま]がいます。"),
          note: "Elige la pregunta más natural para esa respuesta.",
        },
        choices: [
          { id: "a", label: { jp: ruby("[店|みせ]に[誰|だれ]がいますか。") } },
          { id: "b", label: { jp: ruby("[客|きゃく]はどこにありますか。") } },
          { id: "c", label: { jp: ruby("[店|みせ]に[何|なに]がありますか。") } },
          { id: "d", label: { jp: ruby("[客|きゃく]にどこがいますか。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "La respuesta da una persona que está presente. Por eso la pregunta natural usa 誰がいますか con un lugar ya visible.",
        relatedSectionIds: ["lesson-010-structure", "lesson-010-examples"],
      },
      {
        id: "q13",
        type: "single-choice",
        prompt: {
          jp: ruby("[魚|さかな]がいます。"),
          note: "Elige la pregunta más natural para esa respuesta dentro del alcance de esta unidad.",
        },
        choices: [
          { id: "a", label: { jp: ruby("[川|かわ]に[誰|だれ]がいますか。") } },
          { id: "b", label: { jp: ruby("[川|かわ]に[何|なに]がありますか。") } },
          { id: "c", label: { jp: ruby("[川|かわ]に[何|なに]がいますか。") } },
          { id: "d", label: { jp: ruby("[魚|さかな]はどこにありますか。") } },
        ],
        correctChoiceId: "c",
        explanation:
          "Aquí la pregunta busca qué ser o cosa está en el río. Dentro del alcance básico de esta unidad, 何がいますか funciona como pregunta por el referente no humano que está allí.",
        relatedSectionIds: ["lesson-010-structure", "lesson-010-contrast"],
      },
      {
        id: "q14",
        type: "order-sentence",
        prompt: {
            es: "Ordena la pregunta correcta:",
        },
        tokens: [
            { id: "t1", label: { jp: ruby("[猫|ねこ]") }, value: "猫" },
            { id: "t2", label: { jp: ruby("は") }, value: "は" },
            { id: "t3", label: { jp: ruby("どこ") }, value: "どこ" },
            { id: "t4", label: { jp: ruby("に") }, value: "に" },
            { id: "t5", label: { jp: ruby("いますか。") }, value: "いますか。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4", "t5"],
        answerLabel: { jp: ruby("[猫|ねこ]はどこにいますか。") },
        explanation:
            "Cuando el gato ya es el tema conocido, la pregunta natural se arma como 猫はどこにいますか。",
        relatedSectionIds: ["lesson-010-structure", "lesson-010-summary"],
      },
      {
        id: "q15",
        type: "order-sentence",
        prompt: {
            es: "Ordena la oración correcta:",
        },
        tokens: [
            { id: "t1", label: { jp: ruby("[庭|にわ]") }, value: "庭" },
            { id: "t2", label: { jp: ruby("に") }, value: "に" },
            { id: "t3", label: { jp: ruby("[木|き]") }, value: "木" },
            { id: "t4", label: { jp: ruby("が") }, value: "が" },
            { id: "t5", label: { jp: ruby("あります。") }, value: "あります。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4", "t5"],
        answerLabel: { jp: ruby("[庭|にわ]に[木|き]があります。") },
        explanation:
            "庭 marca el lugar de existencia con に, 木 marca el referente existente con が, y あります cierra la oración con el verbo correspondiente.",
        relatedSectionIds: ["lesson-010-structure", "lesson-010-vocabulary"],
      },
      {
        id: "q16",
        type: "fill-blank",
        prompt: {
          es: "Completa con la partícula correcta del referente existente:",
          jp: ruby("[本|ほん]___[教室|きょうしつ]にあります。"),
        },
        acceptedAnswers: ["が"],
        placeholder: "Escribe la partícula",
        explanation:
          "En esta unidad, が marca lo que existe. Aquí eso es 本.",
        relatedSectionIds: ["lesson-010-structure", "lesson-010-summary"],
      },
      {
        id: "q17",
        type: "fill-blank",
        prompt: {
          es: "Completa con la partícula correcta del lugar:",
          jp: ruby("[猫|ねこ]はどこ___いますか。"),
        },
        acceptedAnswers: ["に"],
        placeholder: "Escribe la partícula",
        explanation:
          "En preguntas de ubicación como esta, どこ se une a に para marcar el lugar buscado.",
        relatedSectionIds: ["lesson-010-structure", "lesson-010-summary"],
      },
      {
        id: "q18",
        type: "fill-blank",
        prompt: {
          es: "Completa con la palabra interrogativa correcta para una persona:",
          jp: ruby("[店|みせ]に___がいますか。"),
        },
        acceptedAnswers: ["誰", "だれ"],
        placeholder: "Escribe la palabra",
        explanation:
          "Si quieres preguntar por una persona presente en un lugar, aquí usamos 誰.",
        relatedSectionIds: ["lesson-010-structure", "lesson-010-examples"],
      },
      {
        id: "q19",
        type: "fill-blank",
        prompt: {
          es: "Completa con el verbo de existencia correcto:",
          jp: ruby("[部屋|へや]にソファが___。"),
        },
        acceptedAnswers: ["あります", "あります。"],
        placeholder: "Escribe el verbo",
        explanation:
          "ソファ es un objeto. Por eso aquí corresponde あります.",
        relatedSectionIds: ["lesson-010-structure", "lesson-010-vocabulary"],
      },
      {
        id: "q20",
        type: "single-choice",
        prompt: {
          es: "¿Cuál idea explica mejor por qué en “猫はどこにいますか。” aparece は y no が en 猫?",
        },
        choices: [
          { id: "a", label: { es: "Porque が no puede aparecer nunca con animales." } },
          { id: "b", label: { es: "Porque aquí 猫 ya es el tema conocido y la pregunta se centra en el lugar con どこに." } },
          { id: "c", label: { es: "Porque は reemplaza siempre a に en preguntas." } },
          { id: "d", label: { es: "Porque どこ obliga a usar です." } },
        ],
        correctChoiceId: "b",
        explanation:
          "Ese es el punto clave: en esa estructura el referente ya está identificado y la pregunta busca el lugar donde está.",
        relatedSectionIds: ["lesson-010-concept", "lesson-010-contrast"],
      },
    ],
  },
};

export default lesson010;
