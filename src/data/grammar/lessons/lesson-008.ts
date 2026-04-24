//src/data/grammar/lessons/lesson-008.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson008: GrammarLesson = {
  id: "lesson-008",
  slug: "particula-no-posesion-relacion-tipo",
  order: 11,
  level: "N5",
  status: "ready",
  title: "Partícula の",
  jpTitle: "の・AのB",
  shortTitle: "Posesión y relación",
  description:
    "Cómo usar の para conectar sustantivos entre sí y expresar posesión, relación, tipo, contenido, procedencia y asociaciones nominales sin depender de traducciones literales desde el español.",
  estimatedMinutes: 52,
  categoryTags: ["fundamentos", "particulas", "posesion", "relacion", "lectura"],
  grammarTags: [
    "の",
    "AのB",
    "posesion",
    "relacion nominal",
    "tipo nominal",
    "origen nominal",
  ],
  searchTerms: [
    "particula no",
    "A no B",
    "posesion en japones",
    "libro de japones",
    "mi libro japones",
    "no entre sustantivos",
    "no posesion y tipo",
  ],
  relatedLessonSlugs: [
    "wa-desu-basico",
    "matome-1-5-presentacion-integrada",
    "pronombres-demostrativos-kore-sore-are",
  ],
  relatedVocabularyTags: ["objetos", "medios", "marcas", "paises", "base"],
  objectives: [
    "Entender que の conecta un nombre con otro nombre.",
    "Reconocer que el núcleo principal suele ir a la derecha en AのB.",
    "Usar の para posesión, pertenencia, tipo, contenido y asociación con país o lugar.",
    "Leer expresiones como 日本語の新聞 o スイスの時計 sin traducir palabra por palabra desde el español.",
    "Formar oraciones completas con これはAのBです y empezar a leer cadenas simples con más de un の.",
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
      id: "lesson-008-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "Hasta ahora ya podías presentar personas, decir origen, nacionalidad, idioma, edad y señalar objetos con これ・それ・あれ. En esta unidad vas a aprender una partícula que aparece por todas partes en japonés: の. Su función aquí será unir un nombre con otro nombre para crear relaciones mucho más ricas y naturales.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Verás estructuras base como:",
              jp: ruby("[私|わたし]の[辞書|じしょ] / [先生|せんせい]の[地図|ちず] / [日本語|にほんご]の[新聞|しんぶん]。"),
            },
            {
              es: "También practicarás relaciones de tipo, contenido y procedencia como:",
              jp: ruby("コンピューターの[雑誌|ざっし] / スイスの[時計|とけい] / [日本|にほん]のカメラ。"),
            },
            {
              es: "En esta unidad todavía mantendremos visible el sustantivo principal del final.",
              note: "La omisión de ese sustantivo la moveremos a la unidad siguiente.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-008-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "の conecta sustantivos, no verbos",
          content:
            "La idea más importante aquí es que の une un sustantivo con otro sustantivo. En AのB, el sustantivo de la derecha suele ser el núcleo principal. Lo de la izquierda lo caracteriza, lo relaciona, lo clasifica o lo ubica.",
          bullets: [
            {
              jp: ruby("[私|わたし]の[辞書|じしょ]"),
              es: "el núcleo es 辞書; 私 solo dice de quién es",
            },
            {
              jp: ruby("[日本語|にほんご]の[新聞|しんぶん]"),
              es: "el núcleo es 新聞; 日本語 solo dice el tipo o contenido",
            },
            {
              jp: ruby("スイスの[時計|とけい]"),
              es: "el núcleo es 時計; スイス lo asocia con ese país",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "No lo traduzcas siempre como “de”",
          content:
            "Al principio ayuda pensar que の se parece a “de”, pero no conviene depender demasiado de esa traducción. En japonés lo más estable es mirar qué nombre está al final. Ese es el objeto o idea principal. Después lees qué información lo modifica desde la izquierda.",
          bullets: [
            {
              jp: ruby("コンピューターの[雑誌|ざっし]"),
              es: "el núcleo es 雑誌: una revista sobre computadoras / de computación",
            },
            {
              jp: ruby("ワインの[本|ほん]"),
              es: "el núcleo es 本: un libro sobre vino",
            },
            {
              jp: ruby("チョコレートの[箱|はこ]"),
              es: "el núcleo es 箱: una caja de chocolate o para chocolate",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Una sola partícula, varias relaciones",
          content:
            "La forma no cambia, pero la relación sí puede cambiar según los dos nombres que conectes. A veces será posesión. Otras veces, categoría, contenido, procedencia, material o relación con una persona, lugar o marca.",
          bullets: [
            {
              jp: ruby("[彼|かれ]の[自転車|じてんしゃ]"),
              es: "posesión o pertenencia",
            },
            {
              jp: ruby("カメラの[雑誌|ざっし]"),
              es: "tipo o contenido",
            },
            {
              jp: ruby("[日本|にほん]のカメラ"),
              es: "asociación con país o procedencia",
            },
            {
              jp: ruby("[木|き]の[机|つくえ]"),
              es: "material o característica nominal",
            },
          ],
        },
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-008-note-core",
              label: "Regla mental útil",
              pattern: ruby("A の B"),
              meaning: "Primero mira B.",
              translation:
                "En la mayoría de los casos, el núcleo principal está a la derecha. Después lees A para entender qué relación aplica sobre ese núcleo.",
            },
            {
              id: "pattern-008-note-scope",
              label: "Enfoque de esta unidad",
              pattern: ruby("[私|わたし]の[本|ほん] / [日本語|にほんご]の[新聞|しんぶん] / [日本|にほん]のカメラ"),
              meaning: "Posesión, tipo y asociación.",
              translation:
                "En esta unidad trabajamos conexiones nominales claras. La omisión del nombre final quedará para la siguiente.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-008-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-008-1",
              label: "Patrón central",
              pattern: ruby("A の B"),
              meaning: "B relacionado con A.",
              translation:
                "A va a la izquierda y da relación, característica, pertenencia, tipo o procedencia. B queda a la derecha como nombre principal.",
              structure: [
                {
                  slot: "A",
                  value: "nombre que modifica o relaciona",
                  note: {
                    es: "Puede ser una persona, categoría, país, material o contenido como:",
                    jp: ruby("[私|わたし] / [先生|せんせい] / [日本語|にほんご] / [日本|にほん] / [木|き]。"),
                  },
                },
                {
                  slot: { jp: ruby("の") },
                  value: "conector nominal",
                  note: "Une un sustantivo con otro sustantivo.",
                },
                {
                  slot: "B",
                  value: "núcleo principal",
                  note: {
                    es: "El sustantivo principal suele ir aquí, por ejemplo:",
                    jp: ruby("[辞書|じしょ] / [新聞|しんぶん] / [時計|とけい] / [机|つくえ]。"),
                  },
                },
              ],
              notes: [
                "En esta unidad conviene mirar primero el nombre de la derecha.",
                "No intentes decidir el significado de の sin mirar los sustantivos que están conectados.",
              ],
            },
            {
              id: "pattern-008-2",
              label: "Posesión o pertenencia",
              pattern: ruby("A の B"),
              meaning: "El B de A / el B que pertenece a A.",
              translation:
                "Cuando A es una persona o un grupo, la lectura más natural muchas veces será de posesión, pertenencia o relación directa.",
              structure: [
                {
                  slot: "A",
                  value: "persona o grupo",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[私|わたし] / [彼|かれ] / [彼女|かのじょ] / [先生|せんせい] / [学生|がくせい]。"),
                  },
                },
                {
                  slot: "B",
                  value: "objeto asociado",
                  note: {
                    es: "Como:",
                    jp: ruby("[辞書|じしょ] / [地図|ちず] / [自転車|じてんしゃ] / [傘|かさ]。"),
                  },
                },
              ],
              notes: [
                "No siempre significa propiedad legal; a veces solo marca una relación clara entre persona y objeto.",
              ],
            },
            {
              id: "pattern-008-3",
              label: "Tipo, tema o contenido",
              pattern: ruby("A の B"),
              meaning: "Un B relacionado con el tema A.",
              translation:
                "Cuando A es una categoría, contenido o campo temático, B suele ser el objeto principal: un libro, un periódico, una revista, una foto, etc.",
              structure: [
                {
                  slot: "A",
                  value: "tema o categoría",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[日本語|にほんご] / カメラ / コンピューター / [音楽|おんがく] / ワイン。"),
                  },
                },
                {
                  slot: "B",
                  value: "soporte o objeto principal",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[本|ほん] / [新聞|しんぶん] / [雑誌|ざっし] / [写真|しゃしん]。"),
                  },
                },
              ],
              notes: [
                "Aquí suele fallar la traducción literal. Primero identifica el objeto final y luego interpreta la relación.",
              ],
            },
            {
              id: "pattern-008-4",
              label: "Asociación con país o lugar",
              pattern: ruby("A の B"),
              meaning: "Un B asociado con A.",
              translation:
                "Si A es un país o lugar, la relación puede sugerir procedencia, asociación cultural, tipo, tema o ubicación dentro del significado nominal.",
              structure: [
                {
                  slot: "A",
                  value: "país o lugar",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[日本|にほん] / スイス / スペイン / カナダ / インド。"),
                  },
                },
                {
                  slot: "B",
                  value: "objeto o categoría",
                  note: {
                    es: "Como:",
                    jp: ruby("[時計|とけい] / カメラ / [地図|ちず] / [写真|しゃしん] / ワイン。"),
                  },
                },
              ],
              notes: [
                "No todas estas relaciones significan exactamente “hecho en”. A veces será más natural pensar “de”, “sobre”, “relacionado con” o “asociado a”.",
              ],
            },
            {
              id: "pattern-008-5",
              label: "Llevarlo a una oración",
              pattern: ruby("これは A の B です。"),
              meaning: "Esto es AのB.",
              translation:
                "La unidad no se queda solo en grupos nominales. También la llevas a oraciones completas con です, usando bases que ya conoces.",
              structure: [
                {
                  slot: { jp: ruby("これは") },
                  value: "tema visible",
                  note: "Puedes reutilizar la base de la unidad 007.",
                },
                {
                  slot: "A の B",
                  value: "grupo nominal completo",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[私|わたし]の[辞書|じしょ] / [日本語|にほんご]の[新聞|しんぶん] / スイスの[時計|とけい]。"),
                  },
                },
                {
                  slot: { jp: ruby("です") },
                  value: "cierre cortés",
                  note: "La misma lógica básica que vienes usando desde 001.",
                },
              ],
              notes: [
                "Primero domina grupos como AのB y luego te resultará natural meterlos dentro de una oración completa.",
              ],
            },
            {
              id: "pattern-008-6",
              label: "Cadena simple con más de un の",
              pattern: ruby("X は A の B の C です。"),
              meaning: "X es un C relacionado con B, y B relacionado con A.",
              translation:
                "A veces el japonés encadena más de un の. Si no te pierdes del núcleo final, la cadena sigue siendo legible.",
              structure: [
                {
                  slot: "A",
                  value: "marco grande",
                  note: {
                    es: "Puede ser un país o categoría como:",
                    jp: ruby("[日本|にほん] / フランス。"),
                  },
                },
                {
                  slot: "B",
                  value: "subcategoría",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[車|くるま] / [時計|とけい] / [香水|こうすい]。"),
                  },
                },
                {
                  slot: "C",
                  value: "núcleo final",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("メーカー / ブランド / [会社|かいしゃ]。"),
                  },
                },
              ],
              notes: [
                "Todavía no hace falta hacer cadenas muy largas, pero sí conviene empezar a reconocer una cadena simple.",
                "El secreto sigue siendo el mismo: mira primero el último nombre.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-008-vocabulary",
      kind: "vocabulary",
      title: "Vocabulario nuevo para construir muchas combinaciones",
      description:
        "Desde esta unidad conviene ampliar bastante el repertorio léxico. Aquí añadimos objetos, medios, países, categorías y marcas que te permiten crear muchas estructuras con の sin depender siempre del mismo vocabulario.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 4,
          items: [
            { id: "vocab-008-magazine", jp: ruby("[雑誌|ざっし]"), reading: "ざっし", meaning: "revista", tags: ["medio", "nuevo"] },
            { id: "vocab-008-photo", jp: ruby("[写真|しゃしん]"), reading: "しゃしん", meaning: "foto / fotografía", tags: ["medio", "nuevo"] },
            { id: "vocab-008-dictionary", jp: ruby("[辞書|じしょ]"), reading: "じしょ", meaning: "diccionario", tags: ["objeto", "nuevo"] },
            { id: "vocab-008-map", jp: ruby("[地図|ちず]"), reading: "ちず", meaning: "mapa", tags: ["objeto", "nuevo"] },

            { id: "vocab-008-watch", jp: ruby("[時計|とけい]"), reading: "とけい", meaning: "reloj", tags: ["objeto", "nuevo"] },
            { id: "vocab-008-car", jp: ruby("[車|くるま]"), reading: "くるま", meaning: "auto / coche", tags: ["objeto", "nuevo"] },
            { id: "vocab-008-newspaper", jp: ruby("[新聞|しんぶん]"), reading: "しんぶん", meaning: "periódico", tags: ["medio", "nuevo"] },
            { id: "vocab-008-bicycle", jp: ruby("[自転車|じてんしゃ]"), reading: "じてんしゃ", meaning: "bicicleta", tags: ["objeto", "nuevo"] },

            { id: "vocab-008-umbrella", jp: ruby("[傘|かさ]"), reading: "かさ", meaning: "paraguas", tags: ["objeto", "nuevo"] },
            { id: "vocab-008-shoes", jp: ruby("[靴|くつ]"), reading: "くつ", meaning: "zapatos", tags: ["objeto", "nuevo"] },
            { id: "vocab-008-hat", jp: ruby("[帽子|ぼうし]"), reading: "ぼうし", meaning: "sombrero / gorro", tags: ["ropa", "nuevo"] },
            { id: "vocab-008-box", jp: ruby("[箱|はこ]"), reading: "はこ", meaning: "caja", tags: ["objeto", "nuevo"] },

            { id: "vocab-008-vase", jp: ruby("[花瓶|かびん]"), reading: "かびん", meaning: "florero / jarrón", tags: ["objeto", "nuevo"] },
            { id: "vocab-008-business-card", jp: ruby("[名刺|めいし]"), reading: "めいし", meaning: "tarjeta de presentación", tags: ["objeto", "nuevo"] },
            { id: "vocab-008-letter", jp: ruby("[手紙|てがみ]"), reading: "てがみ", meaning: "carta", tags: ["objeto", "nuevo"] },
            { id: "vocab-008-music", jp: ruby("[音楽|おんがく]"), reading: "おんがく", meaning: "música", tags: ["tema", "nuevo"] },

            { id: "vocab-008-camera", jp: [{ text: "カメラ" }], reading: "かめら", meaning: "cámara", tags: ["objeto", "nuevo"] },
            { id: "vocab-008-guitar", jp: [{ text: "ギター" }], reading: "ぎたー", meaning: "guitarra", tags: ["objeto", "nuevo"] },
            { id: "vocab-008-piano", jp: [{ text: "ピアノ" }], reading: "ぴあの", meaning: "piano", tags: ["objeto", "nuevo"] },
            { id: "vocab-008-wine", jp: [{ text: "ワイン" }], reading: "わいん", meaning: "vino", tags: ["comida", "nuevo"] },

            { id: "vocab-008-chocolate", jp: [{ text: "チョコレート" }], reading: "ちょこれーと", meaning: "chocolate", tags: ["comida", "nuevo"] },
            { id: "vocab-008-brand", jp: [{ text: "ブランド" }], reading: "ぶらんど", meaning: "marca / brand", tags: ["categoria", "nuevo"] },
            { id: "vocab-008-maker", jp: [{ text: "メーカー" }], reading: "めーかー", meaning: "fabricante / maker", tags: ["categoria", "nuevo"] },
            { id: "vocab-008-company", jp: ruby("[会社|かいしゃ]"), reading: "かいしゃ", meaning: "empresa / compañía", tags: ["categoria", "nuevo"] },

            { id: "vocab-008-perfume", jp: ruby("[香水|こうすい]"), reading: "こうすい", meaning: "perfume", tags: ["objeto", "nuevo"] },
            { id: "vocab-008-switzerland", jp: [{ text: "スイス" }], reading: "すいす", meaning: "Suiza", tags: ["pais", "nuevo"] },
            { id: "vocab-008-spain", jp: [{ text: "スペイン" }], reading: "すぺいん", meaning: "España", tags: ["pais", "nuevo"] },
            { id: "vocab-008-canada", jp: [{ text: "カナダ" }], reading: "かなだ", meaning: "Canadá", tags: ["pais", "nuevo"] },

            { id: "vocab-008-australia", jp: [{ text: "オーストラリア" }], reading: "おーすとらりあ", meaning: "Australia", tags: ["pais", "nuevo"] },
            { id: "vocab-008-india", jp: [{ text: "インド" }], reading: "いんど", meaning: "India", tags: ["pais", "nuevo"] },
            { id: "vocab-008-toyota", jp: [{ text: "トヨタ" }], reading: "とよた", meaning: "Toyota", tags: ["marca", "nuevo"] },
            { id: "vocab-008-casio", jp: [{ text: "カシオ" }], reading: "かしお", meaning: "Casio", tags: ["marca", "nuevo"] },

            { id: "vocab-008-nikon", jp: [{ text: "ニコン" }], reading: "にこん", meaning: "Nikon", tags: ["marca", "nuevo"] },
            { id: "vocab-008-sony", jp: [{ text: "ソニー" }], reading: "そにー", meaning: "Sony", tags: ["marca", "nuevo"] },
            { id: "vocab-008-chanel", jp: [{ text: "シャネル" }], reading: "しゃねる", meaning: "Chanel", tags: ["marca", "nuevo"] },
            { id: "vocab-008-suntory", jp: [{ text: "サントリー" }], reading: "さんとりー", meaning: "Suntory", tags: ["marca", "nuevo"] },
          ],
        },
      ],
    },
    {
      id: "lesson-008-examples",
      kind: "examples",
      title: "Ejemplos guiados por tipo de relación",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "ex-008-1",
              jp: ruby("これは[私|わたし]の[辞書|じしょ]です。"),
              es: "Este es mi diccionario.",
              breakdown: [
                { label: "私", es: "persona de referencia" },
                { label: "辞書", es: "núcleo principal" },
              ],
              notes: [
                "El núcleo está a la derecha: 辞書.",
                "私 solo dice de quién es o con quién se relaciona ese diccionario.",
              ],
            },
            {
              id: "ex-008-2",
              jp: ruby("それは[彼|かれ]の[自転車|じてんしゃ]です。"),
              es: "Esa es su bicicleta.",
              notes: [
                "Aquí の marca una relación clara entre persona y objeto.",
              ],
            },
            {
              id: "ex-008-3",
              jp: ruby("あれは[彼女|かのじょ]の[傘|かさ]です。"),
              es: "Aquello es su paraguas.",
              notes: [
                "La lógica de これ・それ・あれ sigue viva; ahora lo nuevo es el grupo con の.",
              ],
            },
            {
              id: "ex-008-4",
              jp: ruby("これは[高橋|たかはし]さんの[名刺|めいし]です。"),
              es: "Esta es la tarjeta de presentación del señor Takahashi.",
              notes: [
                "名刺 es un vocabulario muy útil para presentaciones y contexto profesional.",
              ],
            },
            {
              id: "ex-008-5",
              jp: ruby("それは[先生|せんせい]の[地図|ちず]です。"),
              es: "Ese es el mapa del profesor.",
              notes: [
                "También puede sonar como “el mapa que usa o tiene el profesor”, no solo propiedad estricta.",
              ],
            },
          ],
        },
        {
          type: "example-group",
          items: [
            {
              id: "ex-008-6",
              jp: ruby("これは[日本語|にほんご]の[新聞|しんぶん]です。"),
              es: "Este es un periódico en japonés.",
              breakdown: [
                { label: "日本語", es: "tema o idioma" },
                { label: "新聞", es: "objeto principal" },
              ],
              notes: [
                "No conviene leerlo como si 日本語 fuera el núcleo. Lo principal es 新聞.",
              ],
            },
            {
              id: "ex-008-7",
              jp: ruby("それはカメラの[雑誌|ざっし]です。"),
              es: "Esa es una revista de cámaras / sobre cámaras.",
              notes: [
                "Aquí の conecta contenido o tema con el soporte final.",
              ],
            },
            {
              id: "ex-008-8",
              jp: ruby("あれは[音楽|おんがく]の[本|ほん]です。"),
              es: "Aquello es un libro de música.",
              notes: [
                "De nuevo, el núcleo real está a la derecha: 本.",
              ],
            },
            {
              id: "ex-008-9",
              jp: ruby("これはギターの[写真|しゃしん]です。"),
              es: "Esta es una foto de una guitarra.",
              notes: [
                "La relación puede ser también “foto de X”.",
              ],
            },
            {
              id: "ex-008-10",
              jp: ruby("それはチョコレートの[箱|はこ]です。"),
              es: "Esa es una caja de chocolate.",
              notes: [
                "Según el contexto, puede sonar como caja con chocolate o caja para chocolate. Lo importante es que 箱 sigue siendo el núcleo.",
              ],
            },
          ],
        },
        {
          type: "example-group",
          items: [
            {
              id: "ex-008-11",
              jp: ruby("これはスイスの[時計|とけい]です。"),
              es: "Este es un reloj suizo / un reloj de Suiza.",
              notes: [
                "Aquí la relación es de asociación con un país.",
              ],
            },
            {
              id: "ex-008-12",
              jp: ruby("それは[日本|にほん]のカメラです。"),
              es: "Esa es una cámara japonesa / de Japón.",
              notes: [
                "No siempre hace falta traducir “de” de manera rígida. A veces suena mejor como adjetivo en español.",
              ],
            },
            {
              id: "ex-008-13",
              jp: ruby("あれはスペインのワインです。"),
              es: "Aquello es vino español / vino de España.",
              notes: [
                "La relación la marca el país; el núcleo sigue siendo ワイン.",
              ],
            },
            {
              id: "ex-008-14",
              jp: ruby("これはインドの[地図|ちず]です。"),
              es: "Este es un mapa de India.",
              notes: [
                "La misma estructura también sirve para mapas, fotos, artículos y muchos otros nombres.",
              ],
            },
            {
              id: "ex-008-15",
              jp: ruby("それはカナダの[写真|しゃしん]です。"),
              es: "Esa es una foto de Canadá.",
              notes: [
                "Aquí の no significa posesión; solo vincula la foto con el lugar representado.",
              ],
            },
          ],
        },
        {
          type: "example-group",
          items: [
            {
              id: "ex-008-16",
              jp: ruby("トヨタは[日本|にほん]の[車|くるま]のメーカーです。"),
              es: "Toyota es un fabricante de autos japoneses / de autos de Japón.",
              breakdown: [
                { label: "日本", es: "marco grande" },
                { label: "車", es: "subcategoría" },
                { label: "メーカー", es: "núcleo final" },
              ],
              notes: [
                "Aunque haya dos の, la regla mental sigue siendo la misma: mira primero el nombre final.",
              ],
            },
            {
              id: "ex-008-17",
              jp: ruby("ニコンは[日本|にほん]のカメラのメーカーです。"),
              es: "Nikon es un fabricante japonés de cámaras.",
              notes: [
                "Esta clase de ejemplo te prepara para leer cadenas nominales simples sin perderte.",
              ],
            },
            {
              id: "ex-008-18",
              jp: ruby("カシオは[日本|にほん]の[時計|とけい]の[会社|かいしゃ]です。"),
              es: "Casio es una empresa japonesa de relojes.",
              notes: [
                "Aquí el núcleo final es 会社.",
              ],
            },
            {
              id: "ex-008-19",
              jp: ruby("シャネルはフランスの[香水|こうすい]のブランドです。"),
              es: "Chanel es una marca francesa de perfumes.",
              notes: [
                "Ya conocías フランス de unidades anteriores; aquí lo reutilizamos dentro de una cadena con の.",
              ],
            },
            {
              id: "ex-008-20",
              jp: ruby("ソニーは[日本|にほん]の[会社|かいしゃ]です。"),
              es: "Sony es una empresa japonesa.",
              notes: [
                "No todas las cadenas necesitan dos の. A veces uno solo basta.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-008-contrast",
      kind: "contrast",
      title: "Contrastes que ayudan a no leerlo al revés",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-008-1",
              label: "Posesión vs tipo",
              correct: {
                jp: ruby("[私|わたし]の[辞書|じしょ] / [日本語|にほんご]の[辞書|じしょ]"),
              },
              explanation:
                "Las dos usan の, pero no expresan la misma relación. La primera suena a posesión o pertenencia. La segunda, a tipo o contenido.",
            },
            {
              id: "contrast-008-2",
              label: "El núcleo sigue a la derecha",
              correct: {
                jp: ruby("コンピューターの[雑誌|ざっし]"),
              },
              incorrect: {
                jp: ruby("[雑誌|ざっし]のコンピューター"),
              },
              explanation:
                "Si quieres decir “revista de computación / sobre computadoras”, el núcleo tiene que ser 雑誌 y quedarse a la derecha.",
            },
            {
              id: "contrast-008-3",
              label: "País + objeto",
              correct: {
                jp: ruby("スイスの[時計|とけい]"),
              },
              incorrect: {
                jp: ruby("[時計|とけい]のスイス"),
              },
              explanation:
                "Aquí lo principal es 時計. スイス solo lo asocia con ese país. Si inviertes el orden, la relación deja de sonar natural.",
            },
            {
              id: "contrast-008-4",
              label: "Cadena simple con más de un の",
              correct: {
                jp: ruby("トヨタは[日本|にほん]の[車|くるま]のメーカーです。"),
              },
              incorrect: {
                jp: ruby("トヨタは[車|くるま]の[日本|にほん]のメーカーです。"),
              },
              explanation:
                "La cadena natural va de marco grande a detalle y termina en el núcleo final. Aquí el núcleo es メーカー.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-008-warning",
      kind: "warning",
      title: "En qué fijarte bien",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "No traduzcas primero; localiza primero el nombre principal",
          content:
            "Con の, el error más común es intentar traducir palabra por palabra desde el español y perder de vista qué objeto es el principal. En esta unidad te conviene mirar primero el nombre de la derecha y recién después leer lo que lo modifica desde la izquierda.",
          bullets: [
            {
              jp: ruby("[日本語|にほんご]の[新聞|しんぶん]"),
              es: "primero identifica 新聞; después añade la idea de 日本語",
            },
            {
              jp: ruby("コンピューターの[雑誌|ざっし]"),
              es: "primero identifica 雑誌; después añade el tema コンピューター",
            },
            {
              jp: ruby("スイスの[時計|とけい]"),
              es: "primero identifica 時計; después añade la asociación con スイス",
            },
            {
              es: "En esta unidad todavía dejaremos visible el nombre final.",
              note: "Primero automatiza AのB antes de pasar a la omisión.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-008-practice",
      kind: "practice",
      title: "Práctica guiada antes del quiz",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Haz primero cinco combinaciones de posesión o pertenencia:",
              jp: ruby("[私|わたし]の[辞書|じしょ] / [彼|かれ]の[自転車|じてんしゃ] / [先生|せんせい]の[地図|ちず]。"),
            },
            {
              es: "Después crea cinco combinaciones de tipo o contenido:",
              jp: ruby("[日本語|にほんご]の[新聞|しんぶん] / カメラの[雑誌|ざっし] / [音楽|おんがく]の[本|ほん]。"),
            },
            {
              es: "Haz luego cinco combinaciones con países o lugares:",
              jp: ruby("スイスの[時計|とけい] / スペインのワイン / インドの[地図|ちず]。"),
            },
            {
              es: "Lleva esas combinaciones a oraciones completas con bases ya conocidas:",
              jp: ruby("これは[私|わたし]の[辞書|じしょ]です。 / それはスイスの[時計|とけい]です。"),
            },
            {
              es: "Por último, crea tres líneas con marcas famosas usando",
              jp: ruby("メーカー / ブランド / [会社|かいしゃ]"),
              note: "para acostumbrarte a una cadena simple con más de un の.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-008-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Entiendo que",
              jp: ruby("A の B"),
              note: "conecta un nombre con otro nombre.",
            },
            {
              es: "Sé que el núcleo principal suele quedar a la derecha.",
            },
            {
              es: "Puedo usar の para posesión, pertenencia, tipo, contenido y asociación con país o lugar.",
            },
            {
              es: "Puedo leer expresiones como",
              jp: ruby("[私|わたし]の[辞書|じしょ] / [日本語|にほんご]の[新聞|しんぶん] / スイスの[時計|とけい]"),
              note: "sin traducirlas literalmente desde el español.",
            },
            {
              es: "Puedo llevar grupos con の a oraciones completas con",
              jp: ruby("これは A の B です。"),
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-008-quiz",
    title: "Quiz — Partícula の",
    description:
      "Repaso variado para comprobar si ya distingues el núcleo de AのB, los usos básicos de posesión, tipo, contenido y procedencia, y la lectura correcta de grupos nominales con の.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "single-choice",
        prompt: {
          es: "En",
          jp: ruby("[日本語|にほんご]の[新聞|しんぶん]"),
          note: "¿cuál es el sustantivo principal?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[日本語|にほんご]") } },
          { id: "b", label: { jp: ruby("[新聞|しんぶん]") } },
          { id: "c", label: { jp: ruby("の") } },
          { id: "d", label: { jp: ruby("です") } },
        ],
        correctChoiceId: "b",
        explanation:
          "En AのB, el núcleo principal suele quedar a la derecha. Aquí lo principal es 新聞.",
        relatedSectionIds: ["lesson-008-concept", "lesson-008-structure"],
      },
      {
        id: "q2",
        type: "single-choice",
        prompt: {
          es: "Elige la forma más natural para decir: “mi diccionario”.",
        },
        choices: [
          { id: "a", label: { jp: ruby("[私|わたし]の[辞書|じしょ]") } },
          { id: "b", label: { jp: ruby("[私|わたし]は[辞書|じしょ]") } },
          { id: "c", label: { jp: ruby("[辞書|じしょ]の[私|わたし]") } },
          { id: "d", label: { jp: ruby("[私|わたし][辞書|じしょ]") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Para posesión o pertenencia básica usamos AのB.",
        relatedSectionIds: ["lesson-008-structure", "lesson-008-vocabulary"],
      },
      {
        id: "q3",
        type: "single-choice",
        prompt: {
          es: "Elige la forma más natural para decir: “revista de computación / sobre computadoras”.",
        },
        choices: [
          { id: "a", label: { jp: ruby("コンピューターの[雑誌|ざっし]") } },
          { id: "b", label: { jp: ruby("[雑誌|ざっし]のコンピューター") } },
          { id: "c", label: { jp: ruby("コンピューターは[雑誌|ざっし]") } },
          { id: "d", label: { jp: ruby("コンピューター[雑誌|ざっし]") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí el núcleo principal es 雑誌 y コンピューター entra antes para dar el tema o contenido.",
        relatedSectionIds: ["lesson-008-concept", "lesson-008-structure"],
      },
      {
        id: "q4",
        type: "single-choice",
        prompt: {
          es: "Elige la forma más natural para decir: “reloj suizo”.",
        },
        choices: [
          { id: "a", label: { jp: ruby("スイスの[時計|とけい]") } },
          { id: "b", label: { jp: ruby("[時計|とけい]のスイス") } },
          { id: "c", label: { jp: ruby("スイスは[時計|とけい]") } },
          { id: "d", label: { jp: ruby("スイス[時計|とけい]") } },
        ],
        correctChoiceId: "a",
        explanation:
          "La relación natural aquí es país + objeto: スイスの時計.",
        relatedSectionIds: ["lesson-008-structure", "lesson-008-vocabulary"],
      },
      {
        id: "q5",
        type: "single-choice",
        prompt: {
          es: "¿Cuál interpretación encaja mejor con",
          jp: ruby("コンピューターの[雑誌|ざっし]"),
          note: "en esta unidad?",
        },
        choices: [
          { id: "a", label: { es: "Una computadora de revistas." } },
          { id: "b", label: { es: "Una revista sobre computadoras / de computación." } },
          { id: "c", label: { es: "La revista pertenece a la computadora." } },
          { id: "d", label: { es: "Una computadora que es una revista." } },
        ],
        correctChoiceId: "b",
        explanation:
          "Con の no conviene traducir automáticamente palabra por palabra. Lo principal aquí es 雑誌.",
        relatedSectionIds: ["lesson-008-concept", "lesson-008-contrast"],
      },
      {
        id: "q6",
        type: "single-choice",
        prompt: {
          es: "Elige la oración más natural para decir: “Ese es su paraguas”.",
        },
        choices: [
          { id: "a", label: { jp: ruby("それは[彼女|かのじょ]の[傘|かさ]です。") } },
          { id: "b", label: { jp: ruby("それは[彼女|かのじょ]は[傘|かさ]です。") } },
          { id: "c", label: { jp: ruby("[彼女|かのじょ]それの[傘|かさ]です。") } },
          { id: "d", label: { jp: ruby("それ[彼女|かのじょ]の[傘|かさ]です。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "La base natural aquí es それはAのBです。",
        relatedSectionIds: ["lesson-008-structure", "lesson-008-examples"],
      },
      {
        id: "q7",
        type: "single-choice",
        prompt: {
          es: "¿Cuál de estas combina の con un sentido de tipo o contenido, no de posesión?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[私|わたし]の[辞書|じしょ]") } },
          { id: "b", label: { jp: ruby("[先生|せんせい]の[地図|ちず]") } },
          { id: "c", label: { jp: ruby("[日本語|にほんご]の[新聞|しんぶん]") } },
          { id: "d", label: { jp: ruby("[彼|かれ]の[靴|くつ]") } },
        ],
        correctChoiceId: "c",
        explanation:
          "日本語の新聞 no habla de posesión; habla del tipo o contenido del periódico.",
        relatedSectionIds: ["lesson-008-concept", "lesson-008-structure"],
      },
      {
        id: "q8",
        type: "single-choice",
        prompt: {
          es: "¿Cuál de estas combina の con una asociación de país o lugar?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[彼女|かのじょ]の[傘|かさ]") } },
          { id: "b", label: { jp: ruby("カメラの[雑誌|ざっし]") } },
          { id: "c", label: { jp: ruby("スイスの[時計|とけい]") } },
          { id: "d", label: { jp: ruby("[先生|せんせい]の[地図|ちず]") } },
        ],
        correctChoiceId: "c",
        explanation:
          "Aquí A es un país y B es el objeto principal: スイスの時計.",
        relatedSectionIds: ["lesson-008-structure", "lesson-008-vocabulary"],
      },
      {
        id: "q9",
        type: "single-choice",
        prompt: {
          es: "Elige la cadena más natural para hablar de Toyota en esta unidad.",
        },
        choices: [
          { id: "a", label: { jp: ruby("トヨタは[日本|にほん]の[車|くるま]のメーカーです。") } },
          { id: "b", label: { jp: ruby("トヨタは[車|くるま]の[日本|にほん]のメーカーです。") } },
          { id: "c", label: { jp: ruby("[日本|にほん]のトヨタのメーカーです。") } },
          { id: "d", label: { jp: ruby("トヨタはメーカーの[日本|にほん]の[車|くるま]です。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "La cadena natural termina en el núcleo final メーカー y mantiene el orden de marco grande a detalle.",
        relatedSectionIds: ["lesson-008-structure", "lesson-008-examples"],
      },
      {
        id: "q10",
        type: "single-choice",
        prompt: {
          es: "Elige la cadena más natural para hablar de Nikon en esta unidad.",
        },
        choices: [
          { id: "a", label: { jp: ruby("ニコンは[日本|にほん]のカメラのメーカーです。") } },
          { id: "b", label: { jp: ruby("ニコンはカメラの[日本|にほん]のメーカーです。") } },
          { id: "c", label: { jp: ruby("[日本|にほん]のニコンのカメラです。") } },
          { id: "d", label: { jp: ruby("ニコンはメーカーのカメラの[日本|にほん]です。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí el núcleo final vuelve a ser メーカー.",
        relatedSectionIds: ["lesson-008-structure", "lesson-008-examples"],
      },
      {
        id: "q11",
        type: "single-choice",
        prompt: {
          es: "Lee esto y elige la mejor interpretación:",
          jp: ruby("これは[高橋|たかはし]さんの[名刺|めいし]です。"),
        },
        choices: [
          { id: "a", label: { es: "Esta es la tarjeta de presentación del señor Takahashi." } },
          { id: "b", label: { es: "Este señor Takahashi es una tarjeta." } },
          { id: "c", label: { es: "Este es un Takahashi de tarjetas." } },
          { id: "d", label: { es: "La tarjeta pertenece al verbo Takahashi." } },
        ],
        correctChoiceId: "a",
        explanation:
          "名刺 es el núcleo y 高橋さん solo lo relaciona con esa persona.",
        relatedSectionIds: ["lesson-008-examples", "lesson-008-vocabulary"],
      },
      {
        id: "q12",
        type: "single-choice",
        prompt: {
          es: "¿Cuál sustantivo es el núcleo final en",
          jp: ruby("トヨタは[日本|にほん]の[車|くるま]のメーカーです。"),
          note: "?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[日本|にほん]") } },
          { id: "b", label: { jp: ruby("[車|くるま]") } },
          { id: "c", label: { jp: [{ text: "メーカー" }] } },
          { id: "d", label: { jp: [{ text: "トヨタ" }] } },
        ],
        correctChoiceId: "c",
        explanation:
          "En una cadena con más de un の, el último nombre sigue siendo el núcleo principal.",
        relatedSectionIds: ["lesson-008-structure", "lesson-008-contrast"],
      },
      {
        id: "q13",
        type: "order-sentence",
        prompt: {
          es: "Ordena la frase para decir: “Este es mi diccionario”.",
        },
        tokens: [
          { id: "tok13-1", value: "これは", label: { jp: ruby("これは") } },
          { id: "tok13-2", value: "私の", label: { jp: ruby("[私|わたし]の") } },
          { id: "tok13-3", value: "辞書です", label: { jp: ruby("[辞書|じしょ]です。") } },
        ],
        correctOrder: ["これは", "私の", "辞書です"],
        answerLabel: {
          jp: ruby("これは[私|わたし]の[辞書|じしょ]です。"),
          es: "Este es mi diccionario.",
        },
        explanation:
          "Primero entra el tema visible, luego el grupo con の y finalmente el núcleo con です.",
        relatedSectionIds: ["lesson-008-structure", "lesson-008-examples"],
      },
      {
        id: "q14",
        type: "order-sentence",
        prompt: {
          es: "Ordena la frase para decir: “Ese es un reloj suizo”.",
        },
        tokens: [
          { id: "tok14-1", value: "それは", label: { jp: ruby("それは") } },
          { id: "tok14-2", value: "スイスの", label: { jp: ruby("スイスの") } },
          { id: "tok14-3", value: "時計です", label: { jp: ruby("[時計|とけい]です。") } },
        ],
        correctOrder: ["それは", "スイスの", "時計です"],
        answerLabel: {
          jp: ruby("それはスイスの[時計|とけい]です。"),
          es: "Ese es un reloj suizo.",
        },
        explanation:
          "La relación país + objeto queda dentro del grupo nominal antes de です.",
        relatedSectionIds: ["lesson-008-structure", "lesson-008-examples"],
      },
      {
        id: "q15",
        type: "order-sentence",
        prompt: {
          es: "Ordena la frase para decir: “Toyota es un fabricante de autos japoneses”.",
        },
        tokens: [
          { id: "tok15-1", value: "トヨタは", label: { jp: ruby("トヨタは") } },
          { id: "tok15-2", value: "日本の", label: { jp: ruby("[日本|にほん]の") } },
          { id: "tok15-3", value: "車の", label: { jp: ruby("[車|くるま]の") } },
          { id: "tok15-4", value: "メーカーです", label: { jp: [{ text: "メーカーです。" }] } },
        ],
        correctOrder: ["トヨタは", "日本の", "車の", "メーカーです"],
        answerLabel: {
          jp: ruby("トヨタは[日本|にほん]の[車|くるま]のメーカーです。"),
          es: "Toyota es un fabricante de autos japoneses.",
        },
        explanation:
          "La cadena natural mantiene 日本 → 車 → メーカー.",
        relatedSectionIds: ["lesson-008-structure", "lesson-008-examples"],
      },
      {
        id: "q16",
        type: "fill-blank",
        prompt: {
          es: "Completa con la partícula correcta:",
          jp: ruby("[日本語|にほんご]___[新聞|しんぶん]です。"),
        },
        acceptedAnswers: ["の"],
        placeholder: "Escribe la partícula",
        explanation:
          "Aquí の conecta un nombre con otro nombre: 日本語の新聞.",
        relatedSectionIds: ["lesson-008-structure", "lesson-008-vocabulary"],
      },
      {
        id: "q17",
        type: "fill-blank",
        prompt: {
          es: "Completa con el grupo que falta para decir “Esto es un mapa de India”.",
          jp: ruby("これはインドの___です。"),
        },
        acceptedAnswers: ["地図", "ちず"],
        placeholder: "Escribe el nombre",
        explanation:
          "El núcleo final aquí es 地図.",
        relatedSectionIds: ["lesson-008-structure", "lesson-008-examples"],
      },
      {
        id: "q18",
        type: "fill-blank",
        prompt: {
          es: "Completa con la palabra que falta:",
          jp: ruby("それはカメラの___です。"),
          note: "Queremos decir: “Esa es una revista de cámaras”.",
        },
        acceptedAnswers: ["雑誌", "ざっし"],
        placeholder: "Escribe el nombre",
        explanation:
          "El núcleo final de esta expresión es 雑誌.",
        relatedSectionIds: ["lesson-008-structure", "lesson-008-examples"],
      },
      {
        id: "q19",
        type: "single-choice",
        prompt: {
          es: "¿Cuál oración usa の de forma más natural sin salir del alcance de esta unidad?",
        },
        choices: [
          { id: "a", label: { jp: ruby("これはスペインのワインです。") } },
          { id: "b", label: { jp: ruby("これはスペインですワイン。") } },
          { id: "c", label: { jp: ruby("これはワインスペインです。") } },
          { id: "d", label: { jp: ruby("これはスペインはワインです。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "La combinación natural mantiene la relación país + objeto dentro de AのB.",
        relatedSectionIds: ["lesson-008-structure", "lesson-008-vocabulary"],
      },
      {
        id: "q20",
        type: "single-choice",
        prompt: {
          es: "¿Cuál idea resume mejor la función de の en esta unidad?",
        },
        choices: [
          { id: "a", label: { es: "Siempre significa exactamente lo mismo que “de” en español." } },
          { id: "b", label: { es: "Solo sirve para posesión y nunca para tipo o contenido." } },
          { id: "c", label: { es: "Conecta un sustantivo con otro sustantivo, y el núcleo principal suele quedar a la derecha." } },
          { id: "d", label: { es: "Reemplaza directamente a は en todas las oraciones." } },
        ],
        correctChoiceId: "c",
        explanation:
          "Ese es el corazón real de la unidad: の conecta sustantivos y conviene leer primero el núcleo de la derecha.",
        relatedSectionIds: ["lesson-008-concept", "lesson-008-summary"],
      },
    ],
  },
};

export default lesson008;
