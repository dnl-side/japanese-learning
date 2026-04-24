//src/data/grammar/lessons/lesson-012.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson012: GrammarLesson = {
  id: "lesson-012",
  slug: "lugares-demostrativos-koko-soko-asoko-kochira",
  order: 15,
  level: "N5",
  status: "ready",
  title: "Lugares demostrativos",
  jpTitle: "ここ・そこ・あそこ・こちら・そちら・あちら",
  shortTitle: "Aquí / ahí / allá",
  description:
    "Cómo usar ここ・そこ・あそこ para lugares, ampliar la base con こちら・そちら・あちら・どちら en contextos más corteses, y preguntar por personas y ubicaciones con 誰・どなた・どこ・どちら sin mezclar sus funciones.",
  estimatedMinutes: 64,
  categoryTags: ["fundamentos", "lugares", "demostrativos", "cortesia", "preguntas", "lectura"],
  grammarTags: [
    "ここ",
    "そこ",
    "あそこ",
    "どこ",
    "こちら",
    "そちら",
    "あちら",
    "どちら",
    "誰",
    "どなた",
    "方",
  ],
  searchTerms: [
    "koko soko asoko",
    "kochira sochira achira",
    "doko dochira",
    "dare donata",
    "lugares demostrativos japones",
    "forma cortés de aquí ahí allá",
    "quien en japones formal",
  ],
  relatedLessonSlugs: [
    "pronombres-demostrativos-kore-sore-are",
    "demostrativos-con-sustantivo-kono-sono-ano",
    "arimasu-imasu-existencia-basica",
  ],
  relatedVocabularyTags: ["lugares", "instalaciones", "cortesia", "personas", "preguntas"],
  objectives: [
    "Distinguir ここ・そこ・あそこ・どこ como palabras de lugar.",
    "Entender que こちら・そちら・あちら・どちら añaden cortesía y también pueden usarse para orientar o presentar personas.",
    "Preguntar por ubicación con どこですか y con どちらですか según el nivel de cortesía.",
    "Preguntar por personas con 誰ですか y どなたですか, y reconocer el uso de 方 como forma más cortés de persona.",
    "Conectar esta unidad con la anterior respondiendo también con ここにいます / そこにあります cuando el verbo de existencia sigue siendo necesario.",
    "Moverte con naturalidad entre versión neutra y versión más cortés sin sentir que son temas separados.",
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
      id: "lesson-012-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "En la unidad anterior fijaste bien la base de existencia y ubicación con あります・います, が y に. Ahora vamos a cerrar este bloque con palabras que te permiten señalar lugares y orientarte mejor dentro de una escena: aquí, ahí, allá, dónde, y sus versiones más corteses. También aprovecharás esta unidad para empezar a distinguir entre preguntar “quién” de manera neutra y hacerlo con un tono más formal.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Primero trabajarás palabras de lugar como:",
              jp: ruby("ここ / そこ / あそこ / どこ。"),
            },
            {
              es: "Después verás una familia más cortés muy usada en orientación y trato formal:",
              jp: ruby("こちら / そちら / あちら / どちら。"),
            },
            {
              es: "Y al final practicarás preguntas por persona con",
              jp: ruby("[誰|だれ] / どなた"),
              note: "para distinguir un registro neutro de uno más cortés.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-012-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Aquí ya no hablamos de cosas, sino de lugares",
          content:
            "Aquí la lógica espacial sigue conectada con これ・それ・あれ, pero el foco ya no está en objetos o cosas, sino en lugares. Por eso ここ・そこ・あそこ funcionan como palabras de lugar completas. No acompañan a un sustantivo: ya expresan el lugar por sí mismas.",
          bullets: [
            {
              jp: ruby("ここ"),
              es: "aquí / este lugar",
            },
            {
              jp: ruby("そこ"),
              es: "ahí / ese lugar cerca de ti o de ese punto",
            },
            {
              jp: ruby("あそこ"),
              es: "allá / aquel lugar más alejado",
            },
            {
              jp: ruby("どこ"),
              es: "dónde / qué lugar",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "こちら・そちら・あちら・どちら añaden cortesía",
          content:
            "Esta segunda familia se usa mucho para orientar, atender, recibir personas o hablar con más suavidad. A veces señala dirección o lugar; otras veces se usa para referirse a personas con cortesía, especialmente en presentaciones o en atención al público.",
          bullets: [
            {
              jp: ruby("こちらです。"),
              es: "más cortés que ここです en varios contextos",
            },
            {
              jp: ruby("ロビーはあちらです。"),
              es: "orientación cortés",
            },
            {
              jp: ruby("こちらは[森田|もりた][部長|ぶちょう]です。"),
              es: "presentación cortés de una persona",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Quién y dónde también tienen una versión más cortés",
          content:
            "En esta unidad verás que algunas preguntas pueden quedarse en un registro neutro o subir un poco en cortesía. 誰 y どこ son totalmente válidos en la base. Pero どなた y どちら aparecen mucho cuando la escena pide un tono más formal, más cuidadoso o más de atención.",
          bullets: [
            {
              jp: ruby("[誰|だれ]ですか。"),
              es: "quién, de forma neutra",
            },
            {
              jp: ruby("どなたですか。"),
              es: "quién, de forma más cortés",
            },
            {
              jp: ruby("どこですか。"),
              es: "dónde, de forma neutra",
            },
            {
              jp: ruby("どちらですか。"),
              es: "dónde / cuál dirección, de forma más cortés",
            },
          ],
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Aquí aprenderás a decir cosas como:",
              jp: ruby("[受付|うけつけ]はここです。 / ロビーはあちらです。"),
            },
            {
              es: "Y también a conectar esta unidad con la anterior usando respuestas como:",
              jp: ruby("[猫|ねこ]はあそこにいます。 / [資料|しりょう]はそちらにあります。"),
            },
            {
              es: "La diferencia importante es esta:",
              jp: ruby("ここです / ここにあります"),
              note: "una responde por el lugar en sí; la otra mantiene un verbo de existencia.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-012-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-012-1",
              label: "Lugar señalado directamente",
              pattern: ruby("A は ここ / そこ / あそこ です。"),
              meaning: "A está aquí / ahí / allá.",
              translation:
                "Aquí el foco está en identificar el lugar de A con una palabra de lugar completa.",
              structure: [
                {
                  slot: "A",
                  value: "referente",
                  note: {
                    es: "Puede ser un lugar, una persona, una instalación o un objeto dentro de la escena, como:",
                    jp: ruby("[受付|うけつけ] / [会議室|かいぎしつ] / [鈴木|すずき]さん / [荷物|にもつ]。"),
                  },
                },
                {
                  slot: { jp: ruby("ここ / そこ / あそこ") },
                  value: "lugar señalado",
                  note: "La palabra ya expresa lugar por sí misma.",
                },
                {
                  slot: { jp: ruby("です") },
                  value: "cierre",
                  note: "Cierra la identificación del lugar.",
                },
              ],
              notes: [
                "Aquí no necesitas に si solo identificas el lugar con です.",
                "Más abajo verás cuándo sí reaparece に junto a あります・います.",
              ],
            },
            {
              id: "pattern-012-2",
              label: "Pregunta por lugar",
              pattern: ruby("A は どこ ですか。"),
              meaning: "¿Dónde está A?",
              translation:
                "Pregunta por el lugar de algo o alguien cuando el referente ya está claro.",
              structure: [
                {
                  slot: "A",
                  value: "tema conocido",
                  note: {
                    es: "Puede ser algo como:",
                    jp: ruby("[受付|うけつけ] / [出口|でぐち] / [田中|たなか]さん / [会議室|かいぎしつ]。"),
                  },
                },
                {
                  slot: { jp: ruby("どこ") },
                  value: "pregunta por lugar",
                  note: "Versión neutra para preguntar dónde está algo o alguien.",
                },
                {
                  slot: { jp: ruby("ですか") },
                  value: "pregunta",
                  note: "Misma lógica base de las preguntas con ですか.",
                },
              ],
              notes: [
                "Aquí preguntas por el lugar como identificación general.",
                "Si mantienes あります・います, usarás どこにありますか / どこにいますか.",
              ],
            },
            {
              id: "pattern-012-3",
              label: "Versión más cortés",
              pattern: ruby("A は どちら ですか。"),
              meaning: "¿Dónde está A? / ¿Hacia qué lado queda A?",
              translation:
                "どちら añade cortesía y se usa mucho cuando orientas, recibes o atiendes.",
              structure: [
                {
                  slot: "A",
                  value: "lugar o dirección buscada",
                  note: {
                    es: "Suele funcionar muy bien con espacios de servicio o de orientación, por ejemplo:",
                    jp: ruby("[受付|うけつけ] / [売|う]り[場|ば] / [会議室|かいぎしつ] / [出口|でぐち]。"),
                  },
                },
                {
                  slot: { jp: ruby("どちら") },
                  value: "lugar / dirección más cortés",
                  note: "Aquí no buscamos una persona, sino un lugar o una dirección con más cortesía.",
                },
              ],
              notes: [
                "どちら no reemplaza siempre a どこ en todos los contextos, pero aquí lo fijamos como forma más cortés muy útil.",
                "En respuestas, こちら / そちら / あちら suelen sonar naturales.",
              ],
            },
            {
              id: "pattern-012-4",
              label: "Presentar a una persona con cortesía",
              pattern: ruby("こちらは A です。"),
              meaning: "Esta persona es A.",
              translation:
                "Aquí こちら se usa para presentar a alguien de forma educada dentro de una escena formal o semi-formal.",
              structure: [
                {
                  slot: { jp: ruby("こちら") },
                  value: "esta persona / este lado",
                  note: "En contextos corteses puede referirse a una persona presente en este lado.",
                },
                {
                  slot: "A",
                  value: "nombre o cargo",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[中村|なかむら]さん / [森田|もりた][部長|ぶちょう] / [田辺|たなべ][先生|せんせい]。"),
                  },
                },
              ],
              notes: [
                "No hace falta introducir toda la teoría de tratamiento aquí; basta con fijar el uso real de cortesía básica.",
                "Esta estructura aparece mucho en recepción, atención o presentación de terceros.",
              ],
            },
            {
              id: "pattern-012-5",
              label: "Quién neutro y quién cortés",
              pattern: ruby("[誰|だれ]ですか。 / どなたですか。"),
              meaning: "¿Quién es? / ¿Quién es usted o esa persona? (más cortés)",
              translation:
                "Las dos preguntan por la persona, pero no suenan igual. どなた sube el tono de cortesía.",
              structure: [
                {
                  slot: { jp: ruby("[誰|だれ]") },
                  value: "quién (neutro)",
                  note: "Funciona bien en escenas normales o directas.",
                },
                {
                  slot: { jp: ruby("どなた") },
                  value: "quién (más cortés)",
                  note: "Muy útil en atención, recepción, llamadas o trato más formal.",
                },
              ],
              notes: [
                "Aquí no necesitas cargar todavía la unidad con todas las variantes honoríficas posibles.",
                "La meta es sentir la diferencia de tono entre neutro y cortés.",
              ],
            },
            {
              id: "pattern-012-6",
              label: "Conectar con あります・います",
              pattern: ruby("A は ここ / そこ / あそこ に あります / います。"),
              meaning: "A está aquí / ahí / allá.",
              translation:
                "Esta estructura conecta directamente con la unidad anterior: ahora respondes usando palabras de lugar más compactas antes de に.",
              structure: [
                {
                  slot: "A",
                  value: "referente",
                  note: {
                    es: "Puede ser algo como:",
                    jp: ruby("[資料|しりょう] / [鍵|かぎ] / [猫|ねこ] / [職員|しょくいん]。"),
                  },
                },
                {
                  slot: { jp: ruby("ここ / そこ / あそこ") },
                  value: "lugar señalado",
                  note: "Ahora la palabra de lugar va antes de に.",
                },
                {
                  slot: { jp: ruby("に") },
                  value: "marca de lugar",
                  note: "Se mantiene porque el verbo final sigue siendo de existencia.",
                },
                {
                  slot: { jp: ruby("あります / います") },
                  value: "verbo final",
                  note: "Se elige según el referente, igual que en la unidad anterior.",
                },
              ],
              notes: [
                "Piensa la diferencia así: ここです identifica un lugar; ここにあります mantiene la estructura de existencia.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-012-vocabulary",
      kind: "vocabulary",
      title: "Vocabulario nuevo para esta unidad",
      description:
        "Subimos el nivel léxico con espacios de orientación, atención y presentación para que esta unidad no dependa solo de palabras ya gastadas en lessons anteriores.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 4,
          items: [
            { id: "vocab-012-reception", jp: ruby("[受付|うけつけ]"), reading: "うけつけ", meaning: "recepción", tags: ["lugar", "nuevo"] },
            { id: "vocab-012-information", jp: ruby("[案内所|あんないじょ]"), reading: "あんないじょ", meaning: "informaciones / oficina de información", tags: ["lugar", "nuevo"] },
            { id: "vocab-012-conference", jp: ruby("[会議室|かいぎしつ]"), reading: "かいぎしつ", meaning: "sala de reuniones", tags: ["lugar", "nuevo"] },
            { id: "vocab-012-waiting", jp: ruby("[待合室|まちあいしつ]"), reading: "まちあいしつ", meaning: "sala de espera", tags: ["lugar", "nuevo"] },

            { id: "vocab-012-entrance", jp: ruby("[入|い]り[口|ぐち]"), reading: "いりぐち", meaning: "entrada", tags: ["lugar", "nuevo"] },
            { id: "vocab-012-exit", jp: ruby("[出口|でぐち]"), reading: "でぐち", meaning: "salida", tags: ["lugar", "nuevo"] },
            { id: "vocab-012-corridor", jp: ruby("[廊下|ろうか]"), reading: "ろうか", meaning: "pasillo", tags: ["lugar", "nuevo"] },
            { id: "vocab-012-stairway", jp: ruby("[階段|かいだん]"), reading: "かいだん", meaning: "escalera", tags: ["lugar", "nuevo"] },

            { id: "vocab-012-lobby", jp: [{ text: "ロビー" }], reading: "ろびー", meaning: "lobby", tags: ["lugar", "nuevo"] },
            { id: "vocab-012-elevator", jp: [{ text: "エレベーター" }], reading: "えれべーたー", meaning: "ascensor", tags: ["lugar", "nuevo"] },
            { id: "vocab-012-counter", jp: [{ text: "カウンター" }], reading: "かうんたー", meaning: "mostrador / counter", tags: ["lugar", "nuevo"] },
            { id: "vocab-012-vending", jp: ruby("[自動販売機|じどうはんばいき]"), reading: "じどうはんばいき", meaning: "máquina expendedora", tags: ["objeto", "nuevo"] },

            { id: "vocab-012-copy", jp: ruby("[複写機|ふくしゃき]"), reading: "ふくしゃき", meaning: "fotocopiadora", tags: ["objeto", "nuevo"] },
            { id: "vocab-012-badge", jp: ruby("[名札|なふだ]"), reading: "なふだ", meaning: "credencial con nombre", tags: ["objeto", "nuevo"] },
            { id: "vocab-012-form", jp: ruby("[用紙|ようし]"), reading: "ようし", meaning: "formulario / hoja", tags: ["objeto", "nuevo"] },
            { id: "vocab-012-notice", jp: ruby("[案内板|あんないばん]"), reading: "あんないばん", meaning: "panel de información", tags: ["objeto", "nuevo"] },

            { id: "vocab-012-manager", jp: ruby("[部長|ぶちょう]"), reading: "ぶちょう", meaning: "jefe de departamento / gerente", tags: ["persona", "nuevo"] },
            { id: "vocab-012-president", jp: ruby("[社長|しゃちょう]"), reading: "しゃちょう", meaning: "presidente / director de empresa", tags: ["persona", "nuevo"] },
            { id: "vocab-012-staff", jp: ruby("[職員|しょくいん]"), reading: "しょくいん", meaning: "personal / funcionario", tags: ["persona", "nuevo"] },
            { id: "vocab-012-guest", jp: ruby("[来客|らいきゃく]"), reading: "らいきゃく", meaning: "visitante / invitado", tags: ["persona", "nuevo"] },

            { id: "vocab-012-person-polite", jp: ruby("[方|かた]"), reading: "かた", meaning: "persona (más cortés)", tags: ["persona", "cortesia"] },
            { id: "vocab-012-near", jp: ruby("[近|ちか]く"), reading: "ちかく", meaning: "cerca", tags: ["expresion", "nuevo"] },
            { id: "vocab-012-opposite", jp: ruby("[向|む]かい"), reading: "むかい", meaning: "enfrente / al otro lado", tags: ["lugar", "nuevo"] },
            { id: "vocab-012-next-building", jp: ruby("[別館|べっかん]"), reading: "べっかん", meaning: "anexo / edificio aparte", tags: ["lugar", "nuevo"] },
          ],
        },
      ],
    },
    {
      id: "lesson-012-examples",
      kind: "examples",
      title: "Ejemplos guiados",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "ex-012-1",
              jp: ruby("[受付|うけつけ]はここです。"),
              es: "La recepción está aquí.",
              breakdown: [
                { label: "受付", es: "lugar o instalación de la que hablas" },
                { label: "ここ", es: "lugar cercano a mí o a este punto" },
              ],
              notes: [
                "Aquí solo identificas el lugar con です.",
              ],
            },
            {
              id: "ex-012-2",
              jp: ruby("ロビーはあそこです。"),
              es: "El lobby está allá.",
              breakdown: [
                { label: "ロビー", es: "lugar que buscas o señalas" },
                { label: "あそこ", es: "lugar más alejado" },
              ],
            },
            {
              id: "ex-012-3",
              jp: ruby("[会議室|かいぎしつ]はどこですか。"),
              es: "¿Dónde está la sala de reuniones?",
              notes: [
                "Versión neutra para preguntar por un lugar.",
              ],
            },
            {
              id: "ex-012-4",
              jp: ruby("[会議室|かいぎしつ]はどちらですか。"),
              es: "¿Dónde está la sala de reuniones? / ¿Hacia qué lado queda la sala de reuniones?",
              notes: [
                "Aquí la misma búsqueda se expresa con más cortesía.",
              ],
            },
            {
              id: "ex-012-5",
              jp: ruby("[出口|でぐち]はそちらです。"),
              es: "La salida queda por ahí / por ese lado.",
              notes: [
                "そちら funciona muy bien cuando orientas a alguien.",
              ],
            },
            {
              id: "ex-012-6",
              jp: ruby("こちらは[森田|もりた][部長|ぶちょう]です。"),
              es: "Esta persona es el gerente Morita.",
              notes: [
                "Aquí こちら ya no señala solo un lugar, sino a una persona presentada con cortesía.",
              ],
            },
            {
              id: "ex-012-7",
              jp: ruby("あの[方|かた]はどなたですか。"),
              es: "¿Quién es aquella persona?",
              notes: [
                "Pregunta cortés por una persona.",
              ],
            },
            {
              id: "ex-012-8",
              jp: ruby("[来客|らいきゃく]はどこにいますか。 あちらにいます。"),
              es: "¿Dónde está el visitante? Está allá.",
              notes: [
                "Aquí la respuesta vuelve a conectarse con la estructura de existencia: あちらにいます.",
              ],
            },
            {
              id: "ex-012-9",
              jp: ruby("[名札|なふだ]はどこにありますか。 そこにあります。"),
              es: "¿Dónde está la credencial? Está ahí.",
              notes: [
                "Aquí そこ entra antes de に porque la oración sigue usando あります.",
              ],
            },
            {
              id: "ex-012-10",
              jp: ruby("[案内所|あんないじょ]は[入|い]り[口|ぐち]の[近|ちか]くです。"),
              es: "La oficina de información está cerca de la entrada.",
              notes: [
                "Este tipo de frase te deja describir ubicación sin necesidad de repetir siempre ここ / そこ / あそこ.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-012-contrast",
      kind: "contrast",
      title: "Contrastes clave",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-012-1",
              label: "Lugar vs cosa",
              correct: {
                jp: ruby("ここです。"),
                es: "Aquí es / está aquí.",
              },
              incorrect: {
                jp: ruby("これです。"),
                es: "Eso ya habla de una cosa, no de un lugar.",
              },
              explanation:
                "ここ pertenece a la familia de lugares. これ pertenece a la familia de cosas o referentes no-lugar.",
            },
            {
              id: "contrast-012-2",
              label: "Neutro vs cortés para lugar",
              correct: {
                jp: ruby("[受付|うけつけ]はどこですか。 / [受付|うけつけ]はどちらですか。"),
                es: "Las dos preguntan por lugar, pero どちら sube la cortesía.",
              },
              explanation:
                "どこ funciona perfectamente en registro neutro. どちら añade suavidad y cortesía, sobre todo en orientación o atención.",
            },
            {
              id: "contrast-012-3",
              label: "Neutro vs cortés para persona",
              correct: {
                jp: ruby("[誰|だれ]ですか。 / どなたですか。"),
                es: "Las dos preguntan quién es, pero どなた suena más cortés.",
              },
              explanation:
                "La diferencia central aquí no es de contenido, sino de tono y situación.",
            },
            {
              id: "contrast-012-4",
              label: "Lugar identificado vs lugar con verbo de existencia",
              correct: {
                jp: ruby("[受付|うけつけ]はここです。 / [資料|しりょう]はここにあります。"),
                es: "La primera identifica un lugar; la segunda mantiene la estructura de existencia.",
              },
              explanation:
                "Si respondes solo por el lugar, basta con ここです. Si la oración sigue siendo de existencia, conservas に + あります / います.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-012-warning",
      kind: "warning",
      title: "En qué fijarte bien",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "No mezcles familias que se parecen visualmente",
          content:
            "En este punto ya manejas varias familias cercanas: これ・それ・あれ, この・その・あの, y ahora ここ・そこ・あそこ. Conviene distinguir bien qué ocupa lugar de cosa, qué acompaña a un sustantivo y qué funciona como palabra de lugar.",
          bullets: [
            {
              jp: ruby("これ"),
              es: "cosa / pronombre",
            },
            {
              jp: ruby("この[本|ほん]"),
              es: "acompaña a un sustantivo",
            },
            {
              jp: ruby("ここ"),
              es: "lugar",
            },
            {
              jp: ruby("ここです / ここにあります"),
              es: "según si solo identificas el lugar o mantienes el verbo de existencia",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-012-practice",
      kind: "practice",
      title: "Práctica guiada antes del quiz",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Haz primero cinco preguntas neutras por lugar con",
              jp: ruby("どこですか"),
              note: "usando lugares nuevos como [受付|うけつけ], [案内所|あんないじょ], [会議室|かいぎしつ], [待合室|まちあいしつ] o [出口|でぐち].",
            },
            {
              es: "Repite esas mismas preguntas con una versión más cortés usando",
              jp: ruby("どちらですか"),
              note: "para notar que cambia el tono, no la base del significado.",
            },
            {
              es: "Haz presentaciones corteses de personas usando",
              jp: ruby("こちらは A です"),
              note: "con nombres o cargos como [森田|もりた][部長|ぶちょう], [高橋|たかはし][社長|しゃちょう] o [篠田|しのだ][先生|せんせい].",
            },
            {
              es: "Practica preguntas por persona en dos niveles:",
              jp: ruby("[誰|だれ]ですか / どなたですか"),
              note: "usa respuestas con [方|かた], [来客|らいきゃく], [職員|しょくいん] o nombres propios.",
            },
            {
              es: "Conecta esta unidad con la anterior respondiendo por ubicación con",
              jp: ruby("ここにあります / そこにいます / あちらにあります"),
              note: "para no olvidar que las palabras de lugar también pueden entrar antes de に.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-012-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Puedo usar palabras de lugar como",
              jp: ruby("ここ / そこ / あそこ / どこ"),
              note: "sin confundirlas con cosas o con demostrativos que acompañan sustantivos.",
            },
            {
              es: "Puedo subir el nivel de cortesía con",
              jp: ruby("こちら / そちら / あちら / どちら"),
              note: "especialmente al orientar o presentar a alguien.",
            },
            {
              es: "Puedo distinguir entre",
              jp: ruby("[誰|だれ] / どなた"),
              note: "según el nivel de cortesía.",
            },
            {
              es: "Puedo responder por lugar con",
              jp: ruby("ここです / そこです / あそこです"),
              note: "o mantener la estructura de existencia con に + あります / います.",
            },
            {
              es: "Ya tengo cerrada la base de orientación y ubicación antes de pasar a contadores.",
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-012-quiz",
    title: "Quiz — Lugares demostrativos y cortesía básica",
    description:
      "Repaso variado para comprobar si ya distingues palabras de lugar, versiones más corteses, preguntas por persona y la conexión con あります・います sin repetir siempre el mismo molde.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "single-choice",
        prompt: {
          es: "¿Cuál palabra corresponde a “aquí” como lugar?",
        },
        choices: [
          { id: "a", label: { jp: ruby("ここ") } },
          { id: "b", label: { jp: ruby("これ") } },
          { id: "c", label: { jp: ruby("この") } },
          { id: "d", label: { jp: ruby("どこ") } },
        ],
        correctChoiceId: "a",
        explanation:
          "ここ pertenece a la familia de lugares. これ habla de una cosa y この acompaña a un sustantivo.",
        relatedSectionIds: ["lesson-012-concept", "lesson-012-contrast"],
      },
      {
        id: "q2",
        type: "single-choice",
        prompt: {
          es: "¿Qué opción corresponde mejor a una versión más cortés de そこ en esta unidad?",
        },
        choices: [
          { id: "a", label: { jp: ruby("そちら") } },
          { id: "b", label: { jp: ruby("どちら") } },
          { id: "c", label: { jp: ruby("これ") } },
          { id: "d", label: { jp: ruby("その") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí そちら funciona como versión más cortés muy útil de lugar o dirección cercana a ese lado.",
        relatedSectionIds: ["lesson-012-concept", "lesson-012-structure"],
      },
      {
        id: "q3",
        type: "single-choice",
        prompt: {
          es: "¿Qué pregunta neutra corresponde mejor para buscar la recepción?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[受付|うけつけ]はどこですか。") } },
          { id: "b", label: { jp: ruby("[受付|うけつけ]はどなたですか。") } },
          { id: "c", label: { jp: ruby("ここは[受付|うけつけ]ですか。") } },
          { id: "d", label: { jp: ruby("[受付|うけつけ]に[誰|だれ]ですか。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí solo buscas un lugar y la forma neutra natural es 受付はどこですか。",
        relatedSectionIds: ["lesson-012-structure", "lesson-012-vocabulary"],
      },
      {
        id: "q4",
        type: "single-choice",
        prompt: {
          es: "¿Qué pregunta suena más cortés para buscar el ascensor?",
        },
        choices: [
          { id: "a", label: { jp: ruby("エレベーターはどこですか。") } },
          { id: "b", label: { jp: ruby("エレベーターはどちらですか。") } },
          { id: "c", label: { jp: ruby("エレベーターは[誰|だれ]ですか。") } },
          { id: "d", label: { jp: ruby("あれはエレベーターですか。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "どちら añade cortesía y aquí funciona muy bien para orientación.",
        relatedSectionIds: ["lesson-012-concept", "lesson-012-structure"],
      },
      {
        id: "q5",
        type: "single-choice",
        prompt: {
          jp: ruby("ロビーはあちらです。"),
          note: "Elige la pregunta más natural para esa respuesta.",
        },
        choices: [
          { id: "a", label: { jp: ruby("ロビーはどちらですか。") } },
          { id: "b", label: { jp: ruby("ロビーはどなたですか。") } },
          { id: "c", label: { jp: ruby("ロビーに[誰|だれ]がいますか。") } },
          { id: "d", label: { jp: ruby("ロビーはここにありますか。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "La respuesta usa una forma cortés de lugar o dirección, así que la pregunta más natural es ロビーはどちらですか。",
        relatedSectionIds: ["lesson-012-structure", "lesson-012-examples"],
      },
      {
        id: "q6",
        type: "single-choice",
        prompt: {
          es: "¿Cuál opción pregunta por una persona con más cortesía?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[誰|だれ]ですか。") } },
          { id: "b", label: { jp: ruby("どなたですか。") } },
          { id: "c", label: { jp: ruby("どこですか。") } },
          { id: "d", label: { jp: ruby("どちらですか。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "どなた es la forma más cortés de preguntar quién es alguien en esta unidad.",
        relatedSectionIds: ["lesson-012-concept", "lesson-012-structure"],
      },
      {
        id: "q7",
        type: "single-choice",
        prompt: {
          jp: ruby("こちらは[相沢|あいざわ][社長|しゃちょう]です。"),
          note: "¿Qué función cumple こちら aquí?",
        },
        choices: [
          { id: "a", label: { es: "Marca una dirección cardinal exacta." } },
          { id: "b", label: { es: "Presenta a una persona con cortesía." } },
          { id: "c", label: { es: "Funciona como partícula de tema." } },
          { id: "d", label: { es: "Reemplaza siempre a どちら." } },
        ],
        correctChoiceId: "b",
        explanation:
          "En este tipo de escena, こちら se usa para presentar a alguien de forma educada.",
        relatedSectionIds: ["lesson-012-structure", "lesson-012-examples"],
      },
      {
        id: "q8",
        type: "single-choice",
        prompt: {
          jp: ruby("あの[方|かた]はどなたですか。"),
          note: "¿Qué pregunta se está haciendo aquí?",
        },
        choices: [
          { id: "a", label: { es: "¿Dónde queda aquel lugar?" } },
          { id: "b", label: { es: "¿Qué objeto está allá?" } },
          { id: "c", label: { es: "¿Quién es aquella persona?" } },
          { id: "d", label: { es: "¿Cuál es esa revista?" } },
        ],
        correctChoiceId: "c",
        explanation:
          "方 y どなた elevan el tono de cortesía; la pregunta apunta a identificar a una persona.",
        relatedSectionIds: ["lesson-012-concept", "lesson-012-examples"],
      },
      {
        id: "q9",
        type: "single-choice",
        prompt: {
          es: "¿Cuál frase conecta mejor esta unidad con la de あります / います?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[資料|しりょう]はここです。") } },
          { id: "b", label: { jp: ruby("[資料|しりょう]はここにあります。") } },
          { id: "c", label: { jp: ruby("ここは[資料|しりょう]です。") } },
          { id: "d", label: { jp: ruby("[資料|しりょう]にここです。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "Aquí mantienes el verbo de existencia y por eso reaparece に antes de あります.",
        relatedSectionIds: ["lesson-012-structure", "lesson-012-contrast"],
      },
      {
        id: "q10",
        type: "single-choice",
        prompt: {
          es: "Quieres decir con más cortesía: “La sala de espera está por allá”. ¿Qué opción encaja mejor?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[待合室|まちあいしつ]はあそこです。") } },
          { id: "b", label: { jp: ruby("[待合室|まちあいしつ]はあちらです。") } },
          { id: "c", label: { jp: ruby("[待合室|まちあいしつ]はこれです。") } },
          { id: "d", label: { jp: ruby("[待合室|まちあいしつ]はどなたです。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "あちら añade un tono más cortés que encaja muy bien en orientación.",
        relatedSectionIds: ["lesson-012-concept", "lesson-012-vocabulary"],
      },
      {
        id: "q11",
        type: "single-choice",
        prompt: {
          jp: ruby("[複写機|ふくしゃき]はそこにあります。"),
          note: "Elige la pregunta más natural para esa respuesta.",
        },
        choices: [
          { id: "a", label: { jp: ruby("[複写機|ふくしゃき]はどこにありますか。") } },
          { id: "b", label: { jp: ruby("[複写機|ふくしゃき]はどなたですか。") } },
          { id: "c", label: { jp: ruby("そこは[何|なに]ですか。") } },
          { id: "d", label: { jp: ruby("[複写機|ふくしゃき]はどちらですか。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "La respuesta mantiene あります, así que la pregunta natural también usa どこにありますか。",
        relatedSectionIds: ["lesson-012-structure", "lesson-012-contrast"],
      },
      {
        id: "q12",
        type: "single-choice",
        prompt: {
          es: "¿Cuál par muestra mejor la diferencia de cortesía sin cambiar la idea principal?",
        },
        choices: [
          {
            id: "a",
            label: {
              jp: ruby("[受付|うけつけ]はどこですか。 / [受付|うけつけ]はどちらですか。"),
            },
          },
          {
            id: "b",
            label: {
              jp: ruby("[誰|だれ]ですか。 / どこですか。"),
            },
          },
          {
            id: "c",
            label: {
              jp: ruby("ここです。 / この[受付|うけつけ]です。"),
            },
          },
          {
            id: "d",
            label: {
              jp: ruby("あそこです。 / あれです。"),
            },
          },
        ],
        correctChoiceId: "a",
        explanation:
          "Ese par mantiene la misma idea de lugar, pero cambia el nivel de cortesía.",
        relatedSectionIds: ["lesson-012-concept", "lesson-012-contrast"],
      },
      {
        id: "q13",
        type: "order-sentence",
        prompt: {
          es: "Ordena la pregunta neutra correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[受付|うけつけ]") }, value: "受付" },
          { id: "t2", label: { jp: ruby("は") }, value: "は" },
          { id: "t3", label: { jp: ruby("どこ") }, value: "どこ" },
          { id: "t4", label: { jp: ruby("ですか。") }, value: "ですか。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("[受付|うけつけ]はどこですか。") },
        explanation:
          "La pregunta neutra por lugar se construye como A は どこですか。",
        relatedSectionIds: ["lesson-012-structure", "lesson-012-summary"],
      },
      {
        id: "q14",
        type: "order-sentence",
        prompt: {
          es: "Ordena la pregunta cortés correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("エレベーター") }, value: "エレベーター" },
          { id: "t2", label: { jp: ruby("は") }, value: "は" },
          { id: "t3", label: { jp: ruby("どちら") }, value: "どちら" },
          { id: "t4", label: { jp: ruby("ですか。") }, value: "ですか。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("エレベーターはどちらですか。") },
        explanation:
          "Aquí mantienes la misma estructura, pero usas どちら para subir la cortesía.",
        relatedSectionIds: ["lesson-012-structure", "lesson-012-summary"],
      },
      {
        id: "q15",
        type: "order-sentence",
        prompt: {
          es: "Ordena la presentación cortés correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("こちら") }, value: "こちら" },
          { id: "t2", label: { jp: ruby("は") }, value: "は" },
          { id: "t3", label: { jp: ruby("[西村|にしむら][先生|せんせい]") }, value: "西村先生" },
          { id: "t4", label: { jp: ruby("です。") }, value: "です。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("こちらは[西村|にしむら][先生|せんせい]です。") },
        explanation:
          "Esta es una forma muy natural de presentar a alguien con cortesía básica.",
        relatedSectionIds: ["lesson-012-structure", "lesson-012-examples"],
      },
      {
        id: "q16",
        type: "fill-blank",
        prompt: {
          es: "Completa con la palabra de lugar neutra para “dónde”:",
          jp: ruby("[会議室|かいぎしつ]は___ですか。"),
        },
        acceptedAnswers: ["どこ"],
        placeholder: "Escribe la palabra",
        explanation:
          "La forma neutra de preguntar por lugar aquí es どこ.",
        relatedSectionIds: ["lesson-012-structure", "lesson-012-summary"],
      },
      {
        id: "q17",
        type: "fill-blank",
        prompt: {
          es: "Completa con la forma más cortés de “quién”:",
          jp: ruby("あの[方|かた]は___ですか。"),
        },
        acceptedAnswers: ["どなた"],
        placeholder: "Escribe la palabra",
        explanation:
          "Cuando quieres preguntar con más cortesía por una persona, aquí usamos どなた.",
        relatedSectionIds: ["lesson-012-structure", "lesson-012-summary"],
      },
      {
        id: "q18",
        type: "fill-blank",
        prompt: {
          es: "Completa para mantener la estructura de existencia:",
          jp: ruby("[職員|しょくいん]はあちら___います。"),
        },
        acceptedAnswers: ["に"],
        placeholder: "Escribe la partícula",
        explanation:
          "Si la oración sigue con います, la palabra de lugar entra antes de に.",
        relatedSectionIds: ["lesson-012-structure", "lesson-012-contrast"],
      },
      {
        id: "q19",
        type: "fill-blank",
        prompt: {
          jp: ruby("[案内所|あんないじょ]はそちらです。"),
          note: "Escribe la pregunta más natural para esa respuesta usando la forma más cortés.",
        },
        acceptedAnswers: [
          "案内所はどちらですか",
          "案内所はどちらですか。",
          "あんないじょはどちらですか",
          "あんないじょはどちらですか。"
        ],
        placeholder: "Escribe la pregunta completa",
        explanation:
          "La respuesta usa そちら como forma cortés de lugar o dirección, así que la pregunta natural es 案内所はどちらですか。",
        relatedSectionIds: ["lesson-012-structure", "lesson-012-examples"],
      },
      {
        id: "q20",
        type: "single-choice",
        prompt: {
          es: "¿Qué idea resume mejor el corazón de esta unidad?",
        },
        choices: [
          { id: "a", label: { es: "Que ここ, そこ y あそこ acompañan siempre a un sustantivo visible." } },
          { id: "b", label: { es: "Que どなた reemplaza por completo a 誰 en cualquier situación." } },
          { id: "c", label: { es: "Que aquí trabajamos palabras de lugar, sus versiones más corteses y la diferencia entre identificar un lugar y mantener una oración con あります・います." } },
          { id: "d", label: { es: "Que こちら y そちら solo significan derecha e izquierda." } },
        ],
        correctChoiceId: "c",
        explanation:
          "Ese es el núcleo real de la unidad: palabras de lugar, versiones más corteses y conexión con la base de existencia y orientación.",
        relatedSectionIds: ["lesson-012-concept", "lesson-012-summary"],
      },
    ],
  },
};

export default lesson012;
