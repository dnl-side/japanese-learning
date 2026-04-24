//src/data/grammar/lessons/lesson-013.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson013: GrammarLesson = {
  id: "lesson-013",
  slug: "matome-7-12-demostrativos-no-existencia-lugares",
  order: 16,
  level: "N5",
  status: "ready",
  title: "まとめ 7〜12",
  jpTitle: "まとめ・もの・ばしょ・あんない",
  shortTitle: "Resumen integrado",
  description:
    "Lectura y repaso integrado de lo visto en las unidades 7 a 12: demostrativos, の, preguntas por dueño y tipo, existencia con あります・います, posiciones, listas con と, y orientación con formas neutras y corteses.",
  estimatedMinutes: 72,
  categoryTags: ["matome", "fundamentos", "lectura", "integracion", "lugares", "preguntas"],
  grammarTags: [
    "これ・それ・あれ",
    "この・その・あの",
    "の",
    "だれの",
    "なんの",
    "あります",
    "います",
    "どこ",
    "どちら",
    "誰",
    "どなた",
    "こちら",
    "そちら",
    "あちら",
    "と",
    "上",
    "下",
    "前",
    "後ろ",
    "中",
    "外",
  ],
  searchTerms: [
    "matome 7 12",
    "resumen demostrativos no existencia",
    "lectura integrada n5 lugares objetos",
    "dare no nan no doko dochira",
    "arimasu imasu positions matome",
    "koko soko asoko kochira matome",
    "texto y dialogo japones n5",
  ],
  relatedLessonSlugs: [
    "pronombres-demostrativos-kore-sore-are",
    "particula-no-posesion-relacion-tipo",
    "demostrativos-con-sustantivo-kono-sono-ano",
    "arimasu-imasu-existencia-basica",
    "posiciones-basicas-to",
    "lugares-demostrativos-koko-soko-asoko-kochira",
  ],
  relatedVocabularyTags: ["objetos", "lugares", "orientacion", "oficina", "personas", "preguntas", "integracion"],
  objectives: [
    "Leer escenas más compactas donde varias piezas ya conocidas aparecen juntas dentro del mismo texto.",
    "Distinguir con seguridad familias que se parecen visualmente: これ / この / ここ y どこ / どちら / 誰 / どなた.",
    "Reconocer dentro de mini textos y diálogos relaciones con の, grupos con と, existencia con あります・います y ubicación con palabras de lugar y posiciones.",
    "Responder preguntas de comprensión más exigentes sin depender solo de una frase aislada.",
    "Cerrar el bloque 7〜12 con una base usable antes de pasar a contadores.",
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
      id: "lesson-013-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "Desde la unidad 7 hasta la 12 fuiste sumando piezas muy importantes: señalar cosas, unir sustantivos con の, preguntar de quién es algo y de qué tipo es, decir dónde hay o está algo, ubicarlo con posiciones y finalmente orientar a alguien con palabras de lugar neutras y corteses. En este まとめ no entra una gramática nueva pesada; la meta es leer escenas más completas y reconocer cómo encajan todas esas piezas cuando aparecen juntas.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Aquí leerás dos tipos de material:",
              jp: ruby("[短|みじか]い[説明文|せつめいぶん] / [短|みじか]い[会話|かいわ]。"),
            },
            {
              es: "Los mini textos te ayudarán a seguir una escena completa con objetos, personas y lugares.",
            },
            {
              es: "Los diálogos te obligarán a notar mejor quién pregunta, quién responde y cómo cambia la perspectiva.",
            },
            {
              es: "El quiz será más fuerte que el de una unidad normal y te pedirá relacionar información.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-013-concept",
      kind: "concept",
      title: "Cómo leer este bloque integrado",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Primero identifica qué familia estás viendo",
          content:
            "Muchas dificultades de este bloque nacen porque varias familias se parecen en forma. Antes de traducir, conviene identificar si la palabra habla de una cosa, acompaña a un sustantivo o señala un lugar.",
          bullets: [
            {
              jp: ruby("これ / それ / あれ"),
              es: "pronombres de cosa",
            },
            {
              jp: ruby("この[本|ほん] / その[雑誌|ざっし] / あの[方|かた]"),
              es: "demostrativos que acompañan a un sustantivo",
            },
            {
              jp: ruby("ここ / そこ / あそこ / どこ"),
              es: "palabras de lugar",
            },
            {
              jp: ruby("こちら / そちら / あちら / どちら"),
              es: "formas de lugar o dirección con más cortesía",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Después busca el núcleo a la derecha",
          content:
            "Cuando aparece の, la mejor estrategia sigue siendo mirar primero qué sustantivo está a la derecha. Ese suele ser el núcleo principal. Lo de la izquierda lo describe, lo clasifica, lo relaciona o indica de quién es.",
          bullets: [
            {
              jp: ruby("[旅行|りょこう]の[雑誌|ざっし]"),
              es: "el núcleo es 雑誌",
            },
            {
              jp: ruby("[会社|かいしゃ]の[封筒|ふうとう]"),
              es: "el núcleo es 封筒",
            },
            {
              jp: ruby("[机|つくえ]の[上|うえ]"),
              es: "el lugar principal se expresa con 上, apoyado por 机",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Si ves に + あります / います, piensa en ubicación",
          content:
            "En este bloque aparecen muchas frases donde la escena se arma con un referente, un lugar y un verbo final de existencia. Conviene reconocer rápido qué existe, dónde existe y por qué se usa あります o います.",
          bullets: [
            {
              jp: ruby("[資料|しりょう]が[本棚|ほんだな]にあります。"),
              es: "un objeto en un lugar",
            },
            {
              jp: ruby("[職員|しょくいん]が[会議室|かいぎしつ]の[外|そと]にいます。"),
              es: "una persona en un lugar",
            },
            {
              jp: ruby("[猫|ねこ]と[犬|いぬ]が[家|いえ]の[中|なか]にいます。"),
              es: "un grupo nominal con と sigue funcionando como referente",
            },
          ],
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Si el texto es descriptivo, sigue primero la escena.",
            },
            {
              es: "Si el texto es diálogo, mira siempre qué parte es pregunta y qué parte es respuesta.",
            },
            {
              es: "Si algo no te calza, vuelve a mirar qué familia tienes delante: これ / この / ここ.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-013-structure",
      kind: "structure",
      title: "Patrones de repaso que reaparecen aquí",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-013-1",
              label: "Cosa vs sustantivo visible",
              pattern: ruby("これは A です。 / この A は B です。"),
              meaning: "Una cosa como pronombre vs un demostrativo que acompaña al sustantivo.",
              translation:
                "Si ves これ, el sustantivo ya fue reemplazado. Si ves この A, el sustantivo sigue visible y entra dentro de una oración más grande.",
              notes: [
                "Este contraste aparece varias veces en textos y diálogos del matome.",
              ],
            },
            {
              id: "pattern-013-2",
              label: "Dueño y tipo",
              pattern: ruby("この A は[誰|だれ]のですか。 / これは[何|なん]の A ですか。"),
              meaning: "Preguntar de quién es algo y de qué tipo es algo.",
              translation:
                "Aquí vuelven dos preguntas muy importantes de la unidad 009: una pregunta por dueño y la otra por categoría, tema o tipo.",
            },
            {
              id: "pattern-013-3",
              label: "Existencia con lugar",
              pattern: ruby("A が B に あります / います。"),
              meaning: "A existe o está presente en B.",
              translation:
                "La relación central sigue siendo la misma: el referente toma が y el lugar toma に. El verbo final depende del referente.",
            },
            {
              id: "pattern-013-4",
              label: "Posición dentro de otra cosa",
              pattern: ruby("C の A に B があります / います。"),
              meaning: "B existe en la posición A con relación a C.",
              translation:
                "Este patrón aparece cuando combinas posiciones con existencia: 机の上に本があります, 箱の中に鍵があります, etc.",
            },
            {
              id: "pattern-013-5",
              label: "Lugar neutro vs más cortés",
              pattern: ruby("A は どこですか。 / A は どちらですか。"),
              meaning: "Preguntar por lugar en versión neutra o más cortés.",
              translation:
                "Las dos preguntas buscan el lugar, pero no suenan igual. どちら añade más cortesía y se usa mucho en orientación.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-013-vocabulary",
      kind: "vocabulary",
      title: "Palabras de apoyo para los textos",
      description:
        "La idea aquí no es abrir una unidad léxica independiente, sino dar apoyo a algunas palabras nuevas o menos frecuentes que aparecen en las escenas del matome.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 4,
          items: [
            { id: "vocab-013-bookshelf", jp: ruby("[本棚|ほんだな]"), reading: "ほんだな", meaning: "estantería / librero", tags: ["objeto", "mueble"] },
            { id: "vocab-013-mic", jp: [{ text: "マイク" }], reading: "まいく", meaning: "micrófono", tags: ["objeto", "tecnologia"] },
            { id: "vocab-013-passport", jp: [{ text: "パスポート" }], reading: "ぱすぽーと", meaning: "pasaporte", tags: ["objeto", "documento"] },
            { id: "vocab-013-waterbottle", jp: ruby("[水筒|すいとう]"), reading: "すいとう", meaning: "botella o termo de agua", tags: ["objeto", "nuevo"] },

            { id: "vocab-013-entranceway", jp: ruby("[玄関|げんかん]"), reading: "げんかん", meaning: "entrada de la casa / recibidor", tags: ["lugar", "nuevo"] },
            { id: "vocab-013-shelf", jp: ruby("[棚|たな]"), reading: "たな", meaning: "repisa / estante", tags: ["objeto", "mueble"] },
            { id: "vocab-013-lounge", jp: ruby("[応接室|おうせつしつ]"), reading: "おうせつしつ", meaning: "sala de recepción", tags: ["lugar", "nuevo"] },
            { id: "vocab-013-bench", jp: [{ text: "ベンチ" }], reading: "べんち", meaning: "banco / banca", tags: ["objeto", "lugar"] },

            { id: "vocab-013-signboard", jp: ruby("[案内板|あんないばん]"), reading: "あんないばん", meaning: "panel de información", tags: ["objeto", "orientacion"] },
            { id: "vocab-013-ticket", jp: ruby("[切符|きっぷ]"), reading: "きっぷ", meaning: "boleto / ticket", tags: ["objeto", "nuevo"] },
            { id: "vocab-013-map", jp: ruby("[地図|ちず]"), reading: "ちず", meaning: "mapa", tags: ["objeto", "nuevo"] },
            { id: "vocab-013-dictionary", jp: ruby("[辞典|じてん]"), reading: "じてん", meaning: "diccionario", tags: ["objeto", "nuevo"] },

            { id: "vocab-013-document", jp: ruby("[書類|しょるい]"), reading: "しょるい", meaning: "documentos / papeles", tags: ["objeto", "documento"] },
            { id: "vocab-013-reporter", jp: ruby("[記者|きしゃ]"), reading: "きしゃ", meaning: "periodista", tags: ["persona", "nuevo"] },
            { id: "vocab-013-manager", jp: ruby("[係員|かかりいん]"), reading: "かかりいん", meaning: "encargado / personal a cargo", tags: ["persona", "nuevo"] },
            { id: "vocab-013-visitor", jp: ruby("[見学者|けんがくしゃ]"), reading: "けんがくしゃ", meaning: "visitante / observador", tags: ["persona", "nuevo"] },
          ],
        },
      ],
    },
    {
      id: "lesson-013-examples",
      kind: "examples",
      title: "Textos y diálogos de integración",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "text-013-1",
              jp: ruby("[会議室|かいぎしつ]の[中|なか]に、いすとテーブルがあります。テーブルの[上|うえ]にLANケーブルとマイクがあります。[本棚|ほんだな]に[資料|しりょう]と[新聞|しんぶん]があります。[会議室|かいぎしつ]の[外|そと]に[職員|しょくいん]がいます。"),
              es: "Dentro de la sala de reuniones hay sillas y una mesa. Sobre la mesa hay también un cable LAN y un micrófono. En la estantería hay materiales y periódicos. Fuera de la sala hay personal.",
              breakdown: [
                { label: "Escena", es: "Una sala descrita por capas: dentro, sobre, en la estantería, fuera." },
                { label: "Gramática", es: "Posiciones + と + あります / います." },
              ],
              notes: [
                "Este texto sirve para seguir una escena completa sin depender de diálogo.",
              ],
            },
            {
              id: "text-013-2",
              jp: ruby("この[傘|かさ]は[黒田|くろだ]さんのです。その[封筒|ふうとう]は[会社|かいしゃ]のです。あの[雑誌|ざっし]は[何|なん]の[雑誌|ざっし]ですか。[旅行|りょこう]の[雑誌|ざっし]です。[机|つくえ]の[下|した]に[名札|なふだ]もあります。"),
              es: "Este paraguas es de Kuroda. Ese sobre es de la empresa. ¿De qué tipo es aquella revista? Es una revista de viajes. Debajo del escritorio también hay una credencial.",
              breakdown: [
                { label: "Escena", es: "Objetos identificados por dueño, tipo y posición." },
                { label: "Gramática", es: "この / その / あの + の + 誰の / 何の + あります." },
              ],
            },
            {
              id: "text-013-3",
              jp: ruby("[公園|こうえん]の[中|なか]に[子供|こども]と[犬|いぬ]がいます。[木|き]の[下|した]にベンチがあります。ベンチの[上|うえ]にかばんと[水筒|すいとう]があります。[池|いけ]の[横|よこ]に[白石|しらいし]さんがいます。"),
              es: "Dentro del parque hay niños y un perro. Debajo de un árbol hay una banca. Sobre la banca hay un bolso y una botella de agua. Al lado del estanque está la señora Shiraishi.",
              breakdown: [
                { label: "Escena", es: "Un espacio abierto con personas, animales y objetos." },
                { label: "Gramática", es: "と + posiciones + あります / います." },
              ],
            },
            {
              id: "text-013-4",
              jp: ruby("[受付|うけつけ]はここです。ロビーはあそこです。[案内所|あんないじょ]は[入|い]り[口|ぐち]の[横|よこ]です。こちらは[長谷川|はせがわ][部長|ぶちょう]です。あの[方|かた]は[奥村|おくむら][社長|しゃちょう]です。"),
              es: "La recepción está aquí. El lobby está allá. La oficina de información está al lado de la entrada. Esta persona es el gerente Hasegawa. Aquella persona es el presidente Okumura.",
              breakdown: [
                { label: "Escena", es: "Orientación y presentación dentro de un edificio." },
                { label: "Gramática", es: "ここ / あそこ + こちら + 方." },
              ],
            },
          ],
        },
        {
          type: "example-group",
          items: [
            {
              id: "dialog-013-1",
              jp: ruby("A: これは[何|なん]ですか。 B: それはパスポートです。 A: あれは[何|なん]ですか。 B: あれは[案内板|あんないばん]です。"),
              es: "A: ¿Qué es esto? B: Eso es un pasaporte. A: ¿Qué es aquello? B: Aquello es un panel de información.",
              notes: [
                "Aquí vuelven la perspectiva これ ↔ それ y la pregunta básica con 何.",
              ],
            },
            {
              id: "dialog-013-2",
              jp: ruby("A: この[本|ほん]は[誰|だれ]のですか。 B: [浅井|あさい]さんのです。 A: これは[何|なん]の[本|ほん]ですか。 B: [科学|かがく]の[本|ほん]です。"),
              es: "A: ¿De quién es este libro? B: Es de Asai. A: ¿Qué tipo de libro es este? B: Es un libro de ciencia.",
              notes: [
                "El mismo objeto puede preguntarse por dueño o por tipo.",
              ],
            },
            {
              id: "dialog-013-3",
              jp: ruby("A: [猫|ねこ]はどこにいますか。 B: [玄関|げんかん]の[前|まえ]にいます。 A: かぎはどこにありますか。 B: [箱|はこ]の[中|なか]にあります。"),
              es: "A: ¿Dónde está el gato? B: Está delante de la entrada. A: ¿Dónde está la llave? B: Está dentro de la caja.",
              notes: [
                "Aquí reaparecen preguntas por lugar con は y respuestas de existencia con に.",
              ],
            },
            {
              id: "dialog-013-4",
              jp: ruby("A: [会議室|かいぎしつ]はどちらですか。 B: あちらです。 A: あの[方|かた]はどなたですか。 B: [西田|にしだ][先生|せんせい]です。"),
              es: "A: ¿Dónde está la sala de reuniones? B: Por allá. A: ¿Quién es aquella persona? B: Es el profesor Nishida.",
              notes: [
                "Este diálogo junta orientación cortés y pregunta cortés por persona.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-013-contrast",
      kind: "contrast",
      title: "Qué no conviene confundir al leer",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-013-1",
              label: "Cosa, sustantivo visible y lugar",
              correct: {
                jp: ruby("これ / この[本|ほん] / ここ"),
                es: "cosa / sustantivo visible / lugar",
              },
              explanation:
                "En este matome las tres familias reaparecen mezcladas. Conviene identificarlas antes de traducir.",
            },
            {
              id: "contrast-013-2",
              label: "Dueño vs tipo",
              correct: {
                jp: ruby("この[本|ほん]は[誰|だれ]のですか。 / これは[何|なん]の[本|ほん]ですか。"),
                es: "una pregunta busca dueño; la otra busca tipo o tema",
              },
              explanation:
                "Las dos usan の, pero no preguntan lo mismo.",
            },
            {
              id: "contrast-013-3",
              label: "Lugar identificado vs existencia",
              correct: {
                jp: ruby("[受付|うけつけ]はここです。 / [資料|しりょう]はここにあります。"),
                es: "identificar un lugar vs mantener una oración de existencia",
              },
              explanation:
                "La primera responde “dónde queda”. La segunda mantiene el verbo y la estructura con に.",
            },
            {
              id: "contrast-013-4",
              label: "Neutro vs cortés",
              correct: {
                jp: ruby("[誰|だれ]ですか。 / どなたですか。 [会議室|かいぎしつ]はどこですか。 / [会議室|かいぎしつ]はどちらですか。"),
                es: "mismo contenido base, distinto nivel de cortesía",
              },
              explanation:
                "El matome también repasa cómo sube el tono de la pregunta en la unidad 012.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-013-warning",
      kind: "warning",
      title: "En qué fijarte bien",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "No leas estas escenas como frases totalmente separadas",
          content:
            "Este bloque ya no se deja leer bien si solo buscas una traducción línea por línea. Conviene seguir la lógica de la escena: primero qué lugar se presenta, después qué objetos o personas aparecen, luego de quién es algo o qué tipo es, y finalmente qué cambia cuando entra un tono más cortés.",
          bullets: [
            {
              es: "Si el texto es descriptivo, sigue el espacio.",
            },
            {
              es: "Si el texto es diálogo, sigue el turno de cada hablante.",
            },
            {
              es: "Si algo no te calza, vuelve a mirar qué familia tienes delante: これ / この / ここ.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-013-practice",
      kind: "practice",
      title: "Práctica guiada antes del quiz",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Lee cada mini texto y subraya mentalmente las frases con",
              jp: ruby("あります / います"),
              note: "para detectar rápido qué existe y dónde está.",
            },
            {
              es: "Vuelve a leer los diálogos y marca dónde cambia la función entre",
              jp: ruby("これ / この / ここ"),
              note: "para no mezclar pronombre, sustantivo visible y palabra de lugar.",
            },
            {
              es: "Haz una lista aparte con todas las preguntas que aparezcan en el matome y sepáralas en cuatro grupos:",
              jp: ruby("[何|なん] / [誰|だれ] / どこ / どちら"),
            },
            {
              es: "Reescribe dos textos cambiando un lugar o una posición sin romper la estructura.",
            },
            {
              es: "Transforma dos respuestas del bloque cortés en una versión más neutra y compáralas.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-013-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Puedo leer escenas cortas donde se mezclan demostrativos, の, existencia y posiciones.",
            },
            {
              es: "Puedo distinguir entre preguntas por dueño, por tipo, por lugar y por persona.",
            },
            {
              es: "Entiendo la diferencia entre",
              jp: ruby("ここです / ここにあります"),
              note: "sin confundir identificación de lugar con estructura de existencia.",
            },
            {
              es: "Puedo notar cuándo una pregunta o respuesta sube de tono con",
              jp: ruby("どちら / どなた / こちら / あちら。"),
            },
            {
              es: "Ya tengo una base integrada del bloque 7〜12 para pasar a contadores con más soltura.",
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-013-quiz",
    title: "Quiz — まとめ 7〜12",
    description:
      "Repaso integrado del bloque completo con comprensión de textos, diálogos, contraste de familias, dueño, tipo, existencia, posiciones y cortesía básica.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "single-choice",
        prompt: {
          jp: ruby("テーブルの[上|うえ]にLANケーブルとマイクがあります。"),
          note: "¿Qué hay sobre la mesa?",
        },
        choices: [
          { id: "a", label: { jp: ruby("LANケーブルとマイクがあります。") } },
          { id: "b", label: { jp: ruby("[資料|しりょう]と[新聞|しんぶん]があります。") } },
          { id: "c", label: { jp: ruby("[職員|しょくいん]がいます。") } },
          { id: "d", label: { jp: ruby("いすとテーブルがあります。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "En el primer mini texto, la mesa tiene arriba dos objetos: un cable LAN y un micrófono.",
        relatedSectionIds: ["lesson-013-examples"],
      },
      {
        id: "q2",
        type: "single-choice",
        prompt: {
          jp: ruby("[本棚|ほんだな]に[資料|しりょう]と[新聞|しんぶん]があります。"),
          note: "¿Dónde están los materiales y los periódicos?",
        },
        choices: [
          { id: "a", label: { jp: ruby("テーブルの[上|うえ]です。") } },
          { id: "b", label: { jp: ruby("[会議室|かいぎしつ]の[外|そと]です。") } },
          { id: "c", label: { jp: ruby("[本棚|ほんだな]です。") } },
          { id: "d", label: { jp: ruby("ロビーです。") } },
        ],
        correctChoiceId: "c",
        explanation:
          "El texto dice directamente que están en la estantería.",
        relatedSectionIds: ["lesson-013-examples"],
      },
      {
        id: "q3",
        type: "single-choice",
        prompt: {
            jp: ruby("この[傘|かさ]は[黒田|くろだ]さんのです。"),
            note: "Elige la pregunta más natural para esa respuesta.",
        },
        choices: [
            { id: "a", label: { jp: ruby("これは[何|なん]ですか。") } },
            { id: "b", label: { jp: ruby("この[傘|かさ]は[誰|だれ]のですか。") } },
            { id: "c", label: { jp: ruby("この[傘|かさ]はどこですか。") } },
            { id: "d", label: { jp: ruby("これは[何|なん]の[傘|かさ]ですか。") } },
        ],
        correctChoiceId: "b",
        explanation:
            "La respuesta habla del dueño del paraguas, así que la pregunta natural es この傘は誰のですか。",
        relatedSectionIds: ["lesson-013-examples", "lesson-013-structure"],
      },
      {
        id: "q4",
        type: "single-choice",
        prompt: {
          jp: ruby("あの[雑誌|ざっし]は[何|なん]の[雑誌|ざっし]ですか。 [旅行|りょこう]の[雑誌|ざっし]です。"),
          note: "¿De qué tipo es la revista?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[科学|かがく]の[雑誌|ざっし]です。") } },
          { id: "b", label: { jp: ruby("[会社|かいしゃ]の[雑誌|ざっし]です。") } },
          { id: "c", label: { jp: ruby("[旅行|りょこう]の[雑誌|ざっし]です。") } },
          { id: "d", label: { jp: ruby("[誰|だれ]の[雑誌|ざっし]です。") } },
        ],
        correctChoiceId: "c",
        explanation:
          "La revista se identifica por su tema: es una revista de viajes.",
        relatedSectionIds: ["lesson-013-examples", "lesson-013-contrast"],
      },
      {
        id: "q5",
        type: "single-choice",
        prompt: {
          jp: ruby("[公園|こうえん]の[中|なか]に[子供|こども]と[犬|いぬ]がいます。"),
          note: "¿Qué hay o quiénes están dentro del parque?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[子供|こども]と[犬|いぬ]がいます。") } },
          { id: "b", label: { jp: ruby("かばんと[水筒|すいとう]があります。") } },
          { id: "c", label: { jp: ruby("ベンチがあります。") } },
          { id: "d", label: { jp: ruby("[白石|しらいし]さんの[犬|いぬ]です。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí el grupo nominal con と sigue funcionando como un solo referente del verbo います.",
        relatedSectionIds: ["lesson-013-examples", "lesson-013-structure"],
      },
      {
        id: "q6",
        type: "single-choice",
        prompt: {
          jp: ruby("こちらは[長谷川|はせがわ][部長|ぶちょう]です。"),
          note: "¿Qué está haciendo esta frase?",
        },
        choices: [
          { id: "a", label: { es: "Describe la posición de un objeto." } },
          { id: "b", label: { es: "Presenta a una persona con cortesía." } },
          { id: "c", label: { es: "Pregunta por un lugar de forma neutra." } },
          { id: "d", label: { es: "Pregunta de quién es una revista." } },
        ],
        correctChoiceId: "b",
        explanation:
          "Aquí こちら funciona como presentación cortés de una persona.",
        relatedSectionIds: ["lesson-013-examples", "lesson-013-structure"],
      },
      {
        id: "q7",
        type: "single-choice",
        prompt: {
          jp: ruby("それはパスポートです。"),
          note: "Elige la pregunta más natural para esa respuesta.",
        },
        choices: [
          { id: "a", label: { jp: ruby("これは[何|なん]ですか。") } },
          { id: "b", label: { jp: ruby("この[本|ほん]は[誰|だれ]のですか。") } },
          { id: "c", label: { jp: ruby("[会議室|かいぎしつ]はどちらですか。") } },
          { id: "d", label: { jp: ruby("あの[方|かた]はどなたですか。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "La respuesta identifica un objeto preguntado desde la familia de これ / それ / あれ.",
        relatedSectionIds: ["lesson-013-examples"],
      },
      {
        id: "q8",
        type: "single-choice",
        prompt: {
          jp: ruby("この[本|ほん]は[浅井|あさい]さんのです。"),
          note: "Elige la pregunta más natural para esa respuesta.",
        },
        choices: [
          { id: "a", label: { jp: ruby("この[本|ほん]は[誰|だれ]のですか。") } },
          { id: "b", label: { jp: ruby("これは[何|なん]の[本|ほん]ですか。") } },
          { id: "c", label: { jp: ruby("[本|ほん]はどこにありますか。") } },
          { id: "d", label: { jp: ruby("どなたですか。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "La respuesta habla del dueño del libro, no del tipo del libro ni del lugar.",
        relatedSectionIds: ["lesson-013-examples", "lesson-013-contrast"],
      },
      {
        id: "q9",
        type: "single-choice",
        prompt: {
          jp: ruby("[科学|かがく]の[本|ほん]です。"),
          note: "Elige la pregunta más natural para esa respuesta.",
        },
        choices: [
          { id: "a", label: { jp: ruby("この[本|ほん]は[誰|だれ]のですか。") } },
          { id: "b", label: { jp: ruby("これは[何|なん]の[本|ほん]ですか。") } },
          { id: "c", label: { jp: ruby("[本|ほん]はどこですか。") } },
          { id: "d", label: { jp: ruby("どなたですか。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "Aquí la respuesta habla del tema o tipo del libro: un libro de ciencia.",
        relatedSectionIds: ["lesson-013-examples", "lesson-013-contrast"],
      },
      {
        id: "q10",
        type: "single-choice",
        prompt: {
          jp: ruby("[玄関|げんかん]の[前|まえ]にいます。"),
          note: "Elige la pregunta más natural para esa respuesta.",
        },
        choices: [
          { id: "a", label: { jp: ruby("[猫|ねこ]はどこにいますか。") } },
          { id: "b", label: { jp: ruby("[玄関|げんかん]はどこですか。") } },
          { id: "c", label: { jp: ruby("[誰|だれ]が[玄関|げんかん]にありますか。") } },
          { id: "d", label: { jp: ruby("これは[何|なん]ですか。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "La respuesta da una ubicación con います para un referente ya conocido.",
        relatedSectionIds: ["lesson-013-examples", "lesson-013-structure"],
      },
      {
        id: "q11",
        type: "single-choice",
        prompt: {
          es: "¿Cuál pregunta suena más cortés para buscar la sala de reuniones?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[会議室|かいぎしつ]はどこですか。") } },
          { id: "b", label: { jp: ruby("[会議室|かいぎしつ]はどちらですか。") } },
          { id: "c", label: { jp: ruby("[会議室|かいぎしつ]は[誰|だれ]ですか。") } },
          { id: "d", label: { jp: ruby("[会議室|かいぎしつ]はこれですか。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "En este bloque, どちら funciona como versión más cortés muy útil para orientación.",
        relatedSectionIds: ["lesson-013-structure", "lesson-013-contrast"],
      },
      {
        id: "q12",
        type: "single-choice",
        prompt: {
          es: "¿Cuál pregunta suena más cortés para preguntar por una persona?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[誰|だれ]ですか。") } },
          { id: "b", label: { jp: ruby("どなたですか。") } },
          { id: "c", label: { jp: ruby("どこですか。") } },
          { id: "d", label: { jp: ruby("どちらですか。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "どなた es la forma más cortés de preguntar quién es alguien dentro del alcance de este bloque.",
        relatedSectionIds: ["lesson-013-structure", "lesson-013-contrast"],
      },
      {
        id: "q13",
        type: "single-choice",
        prompt: {
          es: "¿Cuál oración usa bien la familia de lugar y no la de cosa ni la de sustantivo visible?",
        },
        choices: [
          { id: "a", label: { jp: ruby("ここです。") } },
          { id: "b", label: { jp: ruby("これです。") } },
          { id: "c", label: { jp: ruby("この[受付|うけつけ]です。") } },
          { id: "d", label: { jp: ruby("そのです。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "ここ es palabra de lugar. これ habla de cosa, y この necesita un sustantivo después.",
        relatedSectionIds: ["lesson-013-concept", "lesson-013-contrast"],
      },
      {
        id: "q14",
        type: "order-sentence",
        prompt: {
          es: "Ordena la pregunta correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("この") }, value: "この" },
          { id: "t2", label: { jp: ruby("[本|ほん]") }, value: "本" },
          { id: "t3", label: { jp: ruby("は") }, value: "は" },
          { id: "t4", label: { jp: ruby("[誰|だれ]") }, value: "誰" },
          { id: "t5", label: { jp: ruby("の") }, value: "の" },
          { id: "t6", label: { jp: ruby("ですか。") }, value: "ですか。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4", "t5", "t6"],
        answerLabel: { jp: ruby("この[本|ほん]は[誰|だれ]のですか。") },
        explanation:
          "Aquí la pregunta se arma con demostrativo + sustantivo + tema + dueño con のですか.",
        relatedSectionIds: ["lesson-013-structure", "lesson-013-summary"],
      },
      {
        id: "q15",
        type: "order-sentence",
        prompt: {
          es: "Ordena la oración correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[箱|はこ]") }, value: "箱" },
          { id: "t2", label: { jp: ruby("の") }, value: "の" },
          { id: "t3", label: { jp: ruby("[中|なか]") }, value: "中" },
          { id: "t4", label: { jp: ruby("に") }, value: "に" },
          { id: "t5", label: { jp: ruby("[切符|きっぷ]") }, value: "切符" },
          { id: "t6", label: { jp: ruby("が") }, value: "が" },
          { id: "t7", label: { jp: ruby("あります。") }, value: "あります。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4", "t5", "t6", "t7"],
        answerLabel: { jp: ruby("[箱|はこ]の[中|なか]に[切符|きっぷ]があります。") },
        explanation:
          "Primero armas el lugar completo 箱の中 y después añades に, el referente y el verbo final.",
        relatedSectionIds: ["lesson-013-structure", "lesson-013-examples"],
      },
      {
        id: "q16",
        type: "order-sentence",
        prompt: {
          es: "Ordena la pregunta cortés correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[会議室|かいぎしつ]") }, value: "会議室" },
          { id: "t2", label: { jp: ruby("は") }, value: "は" },
          { id: "t3", label: { jp: ruby("どちら") }, value: "どちら" },
          { id: "t4", label: { jp: ruby("ですか。") }, value: "ですか。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("[会議室|かいぎしつ]はどちらですか。") },
        explanation:
          "La pregunta por lugar en versión más cortés mantiene la misma estructura básica con ですか.",
        relatedSectionIds: ["lesson-013-structure", "lesson-013-summary"],
      },
      {
        id: "q17",
        type: "fill-blank",
        prompt: {
          es: "Completa con la palabra interrogativa correcta para preguntar por tipo:",
          jp: ruby("これは___の[本|ほん]ですか。"),
        },
        acceptedAnswers: ["何", "なん"],
        placeholder: "Escribe la palabra",
        explanation:
          "Para preguntar de qué tipo o tema es un libro, aquí usamos 何の本ですか。",
        relatedSectionIds: ["lesson-013-structure", "lesson-013-summary"],
      },
      {
        id: "q18",
        type: "fill-blank",
        prompt: {
          es: "Completa la partícula del lugar:",
          jp: ruby("[猫|ねこ]は[玄関|げんかん]の[前|まえ]___います。"),
        },
        acceptedAnswers: ["に"],
        placeholder: "Escribe la partícula",
        explanation:
          "En respuestas de ubicación con います, el lugar sigue marcado con に.",
        relatedSectionIds: ["lesson-013-structure", "lesson-013-examples"],
      },
      {
        id: "q19",
        type: "fill-blank",
        prompt: {
          es: "Completa con la forma más cortés de “quién”:",
          jp: ruby("あの[方|かた]は___ですか。"),
        },
        acceptedAnswers: ["どなた"],
        placeholder: "Escribe la palabra",
        explanation:
          "Aquí la forma más cortés de preguntar por una persona es どなた.",
        relatedSectionIds: ["lesson-013-structure", "lesson-013-summary"],
      },
      {
        id: "q20",
        type: "fill-blank",
        prompt: {
          jp: ruby("ロビーはあちらです。"),
          note: "Escribe la pregunta más natural para esa respuesta usando la forma más cortés.",
        },
        acceptedAnswers: [
          "ロビーはどちらですか",
          "ロビーはどちらですか。",
          "ろびーはどちらですか",
          "ろびーはどちらですか。"
        ],
        placeholder: "Escribe la pregunta completa",
        explanation:
          "La respuesta usa あちら como lugar o dirección cortés, así que la pregunta natural es ロビーはどちらですか。",
        relatedSectionIds: ["lesson-013-structure", "lesson-013-examples"],
      },
      {
        id: "q21",
        type: "single-choice",
        prompt: {
          es: "¿Cuál oración usa bien と para formar un solo grupo nominal dentro de la escena?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[家|いえ]の[中|なか]に[猫|ねこ]と[犬|いぬ]がいます。") } },
          { id: "b", label: { jp: ruby("[家|いえ]の[中|なか]に[猫|ねこ]の[犬|いぬ]がいます。") } },
          { id: "c", label: { jp: ruby("[家|いえ]の[中|なか]に[猫|ねこ]に[犬|いぬ]がいます。") } },
          { id: "d", label: { jp: ruby("[家|いえ]の[中|なか]に[猫|ねこ]です[犬|いぬ]です。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí 猫と犬 forma un grupo nominal y luego ese grupo completo toma が antes de います.",
        relatedSectionIds: ["lesson-013-structure", "lesson-013-examples"],
      },
      {
        id: "q22",
        type: "single-choice",
        prompt: {
          es: "¿Qué par muestra mejor la diferencia entre identificar un lugar y mantener una oración de existencia?",
        },
        choices: [
          {
            id: "a",
            label: { jp: ruby("[受付|うけつけ]はここです。 / [資料|しりょう]はここにあります。") },
          },
          {
            id: "b",
            label: { jp: ruby("これです。 / この[本|ほん]です。") },
          },
          {
            id: "c",
            label: { jp: ruby("[誰|だれ]ですか。 / どなたですか。") },
          },
          {
            id: "d",
            label: { jp: ruby("[会議室|かいぎしつ]はどこですか。 / [会議室|かいぎしつ]はどちらですか。") },
          },
        ],
        correctChoiceId: "a",
        explanation:
          "La primera identifica un lugar con です y la segunda mantiene el verbo y la estructura con に + あります.",
        relatedSectionIds: ["lesson-013-contrast", "lesson-013-summary"],
      },
    ],
  },
};

export default lesson013;
