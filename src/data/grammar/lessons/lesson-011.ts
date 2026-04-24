//src/data/grammar/lessons/lesson-011.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson011: GrammarLesson = {
  id: "lesson-011",
  slug: "posiciones-basicas-to",
  order: 14,
  level: "N5",
  status: "ready",
  title: "Posiciones básicas",
  jpTitle: "うえ・した・みぎ・ひだり・まえ・うしろ・となり・よこ・なか・そと・と",
  shortTitle: "Posiciones y と",
  description:
    "Cómo ubicar personas, animales y objetos con posiciones básicas como 上・下・前・後ろ・中・外, y cómo usar と para unir varios sustantivos dentro de la misma escena sin romper la estructura de existencia.",
  estimatedMinutes: 64,
  categoryTags: ["fundamentos", "posicion", "existencia", "particulas", "lectura", "integracion"],
  grammarTags: [
    "上",
    "下",
    "右",
    "左",
    "前",
    "後ろ",
    "隣",
    "横",
    "中",
    "外",
    "AのBにXがあります",
    "AのBにXがいます",
    "と",
  ],
  searchTerms: [
    "posiciones japones",
    "ue shita mae ushiro",
    "naka soto tonari yoko",
    "to partícula lista japones",
    "mesa arriba japones",
    "gato dentro casa japones",
    "A no ue ni arimasu",
  ],
  relatedLessonSlugs: [
    "particula-no-posesion-relacion-tipo",
    "demostrativos-con-sustantivo-kono-sono-ano",
    "arimasu-imasu-existencia-basica",
  ],
  relatedVocabularyTags: ["lugares", "objetos", "personas", "animales", "posicion", "base"],
  objectives: [
    "Usar posiciones básicas como 上, 下, 右, 左, 前, 後ろ, 隣, 横, 中 y 外 dentro de oraciones reales de existencia.",
    "Entender que estas posiciones suelen aparecer dentro de grupos nominales del tipo Aの上, Aの中, Aの前, etc.",
    "Combinar las posiciones con あります / います sin perder la lógica de が para el referente y に para el lugar de existencia.",
    "Reconocer que el orden puede alternar entre lugar primero o referente primero sin romper la idea central.",
    "Usar と para unir dos o más sustantivos y tratarlos como un solo grupo dentro de la oración.",
    "Preguntar y responder por ubicación con más precisión y con escenas más ricas que en la unidad anterior.",
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
      id: "lesson-011-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "En la unidad anterior aprendiste a decir que algo o alguien existe en un lugar con あります e います. Ahora vamos a volver esa base mucho más precisa. Ya no bastará con decir que algo está en la casa o en el parque; aprenderás a decir si está arriba, abajo, delante, detrás, al lado, dentro o fuera. Además, entra と para que puedas unir dos o más sustantivos dentro de la misma escena.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Verás estructuras como:",
              jp: ruby("[机|つくえ]の[上|うえ]に[辞典|じてん]があります。 / [家|いえ]の[外|そと]に[鳩|はと]がいます。"),
            },
            {
              es: "También practicarás listas simples dentro de una misma escena con:",
              jp: ruby("と"),
              note: "por ejemplo para unir dos objetos o dos personas dentro del mismo bloque nominal.",
            },
            {
              es: "La base verbal sigue siendo la misma que ya conoces:",
              jp: ruby("あります / います"),
              note: "lo nuevo aquí es la relación espacial y la agrupación con と.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-011-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Las posiciones aquí no suelen ir solas",
          content:
            "En esta unidad conviene pensar las posiciones como nombres relacionales que se apoyan en otro sustantivo. Por eso lo más natural no es aprender solo 上 o 中 como palabras flotando, sino grupos como 机の上, 箱の中, 家の外 o 駅の前. Esa pieza completa entra luego antes de に para marcar el lugar de existencia.",
          bullets: [
            {
              jp: ruby("[机|つくえ]の[上|うえ]に[辞典|じてん]があります。"),
              es: "el lugar completo es 机の上",
            },
            {
              jp: ruby("[箱|はこ]の[中|なか]に[切符|きっぷ]があります。"),
              es: "el lugar completo es 箱の中",
            },
            {
              jp: ruby("[家|いえ]の[外|そと]に[鳩|はと]がいます。"),
              es: "el lugar completo es 家の外",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "La posición no decide el verbo; el referente sí",
          content:
            "Aunque ahora aparezcan palabras nuevas como 上, 下 o 前, la lógica principal de あります / います no cambia. El verbo sigue dependiendo del referente que existe. Si el referente es una persona o animal, usas います. Si es un objeto, cosa o planta, usas あります. La posición solo dice dónde está ese referente con relación a otra cosa.",
          bullets: [
            {
              jp: ruby("[ベンチ]の[下|した]に[兎|うさぎ]がいます。"),
              es: "el referente es 兎, por eso usamos います",
            },
            {
              jp: ruby("[扉|とびら]の[右|みぎ]にカレンダーがあります。"),
              es: "el referente es カレンダー, por eso usamos あります",
            },
            {
              jp: ruby("[冷蔵庫|れいぞうこ]の[中|なか]に[牛乳|ぎゅうにゅう]があります。"),
              es: "la posición cambia, pero la lógica del verbo sigue igual",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "と une sustantivos y el grupo entero sigue funcionando como un sustantivo",
          content:
            "La partícula と sirve aquí para juntar dos o más sustantivos de forma explícita. El resultado no crea una oración nueva: simplemente forma un grupo nominal más grande. Ese grupo sigue ocupando el lugar del referente dentro de la estructura principal y luego recibe が antes del verbo de existencia.",
          bullets: [
            {
              jp: ruby("[家|いえ]の[中|なか]に[猫|ねこ]と[犬|いぬ]がいます。"),
              es: "猫と犬 funciona como un solo grupo de referentes",
            },
            {
              jp: ruby("[教室|きょうしつ]の[前|まえ]に[遥|はるか]さんと[優奈|ゆうな]さんがいます。"),
              es: "dos personas forman un solo bloque antes de が",
            },
            {
              jp: ruby("[本棚|ほんだな]の[上|うえ]に[辞典|じてん]と[新聞|しんぶん]があります。"),
              es: "también puedes unir dos objetos con la misma lógica",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Algunas posiciones se parecen, pero no se sienten igual",
          content:
            "En esta unidad conviene empezar a notar pequeñas diferencias de uso. 隣 suele sentirse más como el lugar inmediato contiguo al lado de otra cosa, mientras que 横 se siente más como el costado o lado lateral. Derecha e izquierda también funcionan distinto de delante y detrás: unas orientan lateralmente; las otras, en profundidad dentro de la escena.",
          bullets: [
            {
              jp: ruby("[学校|がっこう]の[隣|となり]に[病院|びょういん]があります。"),
              es: "隣 se siente como el lugar contiguo inmediato",
            },
            {
              jp: ruby("[川|かわ]の[横|よこ]に[ベンチ]があります。"),
              es: "横 se siente como el costado lateral",
            },
            {
              jp: ruby("[駅|えき]の[前|まえ] / [橋|はし]の[後|うし]ろ / [扉|とびら]の[右|みぎ] / [窓|まど]の[左|ひだり]"),
              es: "cada grupo dibuja una relación espacial distinta",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-011-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-011-1",
              label: "Lugar relacional con existencia",
              pattern: ruby("A の X に B があります / います。"),
              meaning: "B está en la posición X de A.",
              translation:
                "Primero formas un lugar relacional con A の X. Después ese bloque completo entra antes de に, y al final añades el referente B con が y el verbo correspondiente.",
              structure: [
                {
                  slot: "A",
                  value: "sustantivo ancla",
                  note: {
                    es: "Puede ser algo como:",
                    jp: ruby("[机|つくえ] / [箱|はこ] / [家|いえ] / [駅|えき] / [窓|まど] / [橋|はし]。"),
                  },
                },
                {
                  slot: { jp: ruby("の") },
                  value: "conector nominal",
                  note: "Une el sustantivo ancla con la posición.",
                },
                {
                  slot: "X",
                  value: "posición",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[上|うえ] / [下|した] / [前|まえ] / [後|うし]ろ / [中|なか] / [外|そと]。"),
                  },
                },
                {
                  slot: { jp: ruby("に") },
                  value: "marca del lugar",
                  note: "Señala dónde existe el referente dentro de la escena.",
                },
                {
                  slot: "B",
                  value: "referente existente",
                  note: {
                    es: "Puede ser una persona, animal, objeto o planta, por ejemplo:",
                    jp: ruby("[兎|うさぎ] / [鳩|はと] / [辞典|じてん] / [牛乳|ぎゅうにゅう] / カレンダー。"),
                  },
                },
                {
                  slot: { jp: ruby("が") },
                  value: "marca del referente",
                  note: "Mantiene la misma función central que en la unidad 010.",
                },
                {
                  slot: { jp: ruby("あります / います") },
                  value: "verbo de existencia",
                  note: "Se elige según el tipo de referente, no según la posición.",
                },
              ],
              notes: [
                "La posición sola no cierra la idea: aquí lo importante es el bloque completo A のX に.",
                "La lógica de あります / います sigue siendo la misma que ya trabajaste en la unidad anterior.",
              ],
            },
            {
              id: "pattern-011-2",
              label: "Familias de posición más frecuentes",
              pattern: ruby("[上|うえ] / [下|した] / [右|みぎ] / [左|ひだり] / [前|まえ] / [後|うし]ろ / [隣|となり] / [横|よこ] / [中|なか] / [外|そと]"),
              meaning: "Posiciones básicas de esta unidad",
              translation:
                "Estas posiciones no viven aisladas: normalmente entran después de otro sustantivo con の para construir el lugar relacional completo.",
              structure: [
                {
                  slot: { jp: ruby("[上|うえ] / [下|した]") },
                  value: "eje vertical",
                  note: "Sirven para decir arriba y abajo con relación a otra cosa.",
                },
                {
                  slot: { jp: ruby("[右|みぎ] / [左|ひだり]") },
                  value: "orientación lateral",
                  note: "Sirven para ubicar algo a la derecha o izquierda del ancla.",
                },
                {
                  slot: { jp: ruby("[前|まえ] / [後|うし]ろ") },
                  value: "profundidad de la escena",
                  note: "Sirven para delante y detrás.",
                },
                {
                  slot: { jp: ruby("[隣|となり] / [横|よこ]") },
                  value: "cercanía lateral",
                  note: "Las dos hablan del costado, pero no siempre se sienten exactamente igual.",
                },
                {
                  slot: { jp: ruby("[中|なか] / [外|そと]") },
                  value: "interior y exterior",
                  note: "Sirven para marcar si algo está dentro o fuera del ancla.",
                },
              ],
              notes: [
                "En esta unidad importa mucho más verlas en oraciones reales que memorizarlas como lista suelta.",
              ],
            },
            {
              id: "pattern-011-3",
              label: "El referente también puede ir primero",
              pattern: ruby("B は A の X にあります / います。"),
              meaning: "En cuanto a B, está en la posición X de A.",
              translation:
                "Igual que en la unidad anterior, la oración puede empezar por el referente conocido. El grupo de posición sigue existiendo igual; solo cambia el punto desde donde organizas la información.",
              structure: [
                {
                  slot: "B",
                  value: "tema conocido",
                  note: "Algo o alguien del que ya vienes hablando en la conversación.",
                },
                {
                  slot: { jp: ruby("は") },
                  value: "tema",
                  note: "Aquí marca el referente conocido sobre el que ahora preguntas o informas posición.",
                },
                {
                  slot: "A の X に",
                  value: "lugar relacional",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[机|つくえ]の[上|うえ]に / [家|いえ]の[外|そと]に / [橋|はし]の[後|うし]ろに。"),
                  },
                },
                {
                  slot: { jp: ruby("あります / います") },
                  value: "verbo final",
                  note: "Se mantiene la misma elección verbal de la unidad anterior.",
                },
              ],
              notes: [
                "Esta dirección se vuelve muy útil cuando respondes a preguntas con どこ.",
              ],
            },
            {
              id: "pattern-011-4",
              label: "Listas simples con と",
              pattern: ruby("A に B と C がいます / あります。"),
              meaning: "B y C están en A.",
              translation:
                "Aquí と une dos o más sustantivos. El grupo entero sigue ocupando el lugar del referente dentro de la oración y luego recibe が antes del verbo final.",
              structure: [
                {
                  slot: "A に",
                  value: "lugar",
                  note: "Puede ser un lugar simple o un lugar relacional con posición.",
                },
                {
                  slot: "B と C",
                  value: "grupo nominal coordinado",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[猫|ねこ]と[犬|いぬ] / [遥|はるか]さんと[優奈|ゆうな]さん / [辞典|じてん]と[新聞|しんぶん]。"),
                  },
                },
                {
                  slot: { jp: ruby("が") },
                  value: "marca del grupo referente",
                  note: "No aparece un が para cada sustantivo, sino uno para el grupo completo.",
                },
                {
                  slot: { jp: ruby("います / あります") },
                  value: "verbo final",
                  note: "La elección sigue dependiendo del tipo de referentes del grupo.",
                },
              ],
              notes: [
                "También puedes extender la lista: B と C と D..., siempre que sigas pensando el conjunto como un solo bloque nominal.",
                "En esta unidad usamos と para listas cerradas y muy claras dentro de una escena.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-011-vocabulary",
      kind: "vocabulary",
      title: "Vocabulario nuevo para ubicar escenas más ricas",
      description:
        "Aquí ampliamos bastante el repertorio para que la unidad no dependa de los mismos objetos y lugares básicos de siempre.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 4,
          items: [
            { id: "vocab-011-up", jp: ruby("[上|うえ]"), reading: "うえ", meaning: "arriba / encima", tags: ["posicion", "base"] },
            { id: "vocab-011-down", jp: ruby("[下|した]"), reading: "した", meaning: "abajo / debajo", tags: ["posicion", "base"] },
            { id: "vocab-011-right", jp: ruby("[右|みぎ]"), reading: "みぎ", meaning: "derecha", tags: ["posicion", "base"] },
            { id: "vocab-011-left", jp: ruby("[左|ひだり]"), reading: "ひだり", meaning: "izquierda", tags: ["posicion", "base"] },

            { id: "vocab-011-front", jp: ruby("[前|まえ]"), reading: "まえ", meaning: "delante / frente", tags: ["posicion", "base"] },
            { id: "vocab-011-back", jp: ruby("[後|うし]ろ"), reading: "うしろ", meaning: "detrás", tags: ["posicion", "base"] },
            { id: "vocab-011-next", jp: ruby("[隣|となり]"), reading: "となり", meaning: "al lado / contiguo", tags: ["posicion", "base"] },
            { id: "vocab-011-side", jp: ruby("[横|よこ]"), reading: "よこ", meaning: "al costado / al lado", tags: ["posicion", "base"] },

            { id: "vocab-011-inside", jp: ruby("[中|なか]"), reading: "なか", meaning: "dentro / interior", tags: ["posicion", "base"] },
            { id: "vocab-011-outside", jp: ruby("[外|そと]"), reading: "そと", meaning: "afuera / exterior", tags: ["posicion", "base"] },
            { id: "vocab-011-window", jp: ruby("[窓|まど]"), reading: "まど", meaning: "ventana", tags: ["objeto", "nuevo"] },
            { id: "vocab-011-door", jp: ruby("[扉|とびら]"), reading: "とびら", meaning: "puerta", tags: ["objeto", "nuevo"] },

            { id: "vocab-011-wall", jp: ruby("[壁|かべ]"), reading: "かべ", meaning: "pared", tags: ["objeto", "nuevo"] },
            { id: "vocab-011-ceiling", jp: ruby("[天井|てんじょう]"), reading: "てんじょう", meaning: "techo / cielo raso", tags: ["objeto", "nuevo"] },
            { id: "vocab-011-floor", jp: ruby("[床|ゆか]"), reading: "ゆか", meaning: "piso / suelo interior", tags: ["objeto", "nuevo"] },
            { id: "vocab-011-fridge", jp: ruby("[冷蔵庫|れいぞうこ]"), reading: "れいぞうこ", meaning: "refrigerador / nevera", tags: ["objeto", "nuevo"] },

            { id: "vocab-011-bookshelf", jp: ruby("[本棚|ほんだな]"), reading: "ほんだな", meaning: "estantería / librero", tags: ["objeto", "nuevo"] },
            { id: "vocab-011-stairs", jp: ruby("[階段|かいだん]"), reading: "かいだん", meaning: "escaleras", tags: ["objeto", "nuevo"] },
            { id: "vocab-011-bridge", jp: ruby("[橋|はし]"), reading: "はし", meaning: "puente", tags: ["lugar", "nuevo"] },
            { id: "vocab-011-bench", jp: [{ text: "ベンチ" }], reading: "べんち", meaning: "banco / banquillo", tags: ["objeto", "nuevo"] },

            { id: "vocab-011-postbox", jp: [{ text: "ポスト" }], reading: "ぽすと", meaning: "buzón", tags: ["objeto", "nuevo"] },
            { id: "vocab-011-parking", jp: ruby("[駐車場|ちゅうしゃじょう]"), reading: "ちゅうしゃじょう", meaning: "estacionamiento", tags: ["lugar", "nuevo"] },
            { id: "vocab-011-entrance", jp: ruby("[入口|いりぐち]"), reading: "いりぐち", meaning: "entrada", tags: ["lugar", "nuevo"] },
            { id: "vocab-011-exit", jp: ruby("[出口|でぐち]"), reading: "でぐち", meaning: "salida", tags: ["lugar", "nuevo"] },

            { id: "vocab-011-mirror", jp: ruby("[鏡|かがみ]"), reading: "かがみ", meaning: "espejo", tags: ["objeto", "nuevo"] },
            { id: "vocab-011-calendar", jp: [{ text: "カレンダー" }], reading: "かれんだー", meaning: "calendario", tags: ["objeto", "repaso"] },
            { id: "vocab-011-milk", jp: ruby("[牛乳|ぎゅうにゅう]"), reading: "ぎゅうにゅう", meaning: "leche", tags: ["comida", "nuevo"] },
            { id: "vocab-011-pigeon", jp: ruby("[鳩|はと]"), reading: "はと", meaning: "paloma", tags: ["animal", "nuevo"] },

            { id: "vocab-011-rabbit", jp: ruby("[兎|うさぎ]"), reading: "うさぎ", meaning: "conejo", tags: ["animal", "nuevo"] },
            { id: "vocab-011-fountain", jp: ruby("[噴水|ふんすい]"), reading: "ふんすい", meaning: "fuente", tags: ["lugar", "nuevo"] },
            { id: "vocab-011-sign", jp: ruby("[看板|かんばん]"), reading: "かんばん", meaning: "letrero / cartel", tags: ["objeto", "nuevo"] },
            { id: "vocab-011-corridor-end", jp: ruby("[角|かど]"), reading: "かど", meaning: "esquina", tags: ["lugar", "nuevo"] },
          ],
        },
      ],
    },
    {
      id: "lesson-011-examples",
      kind: "examples",
      title: "Ejemplos guiados por tipo de posición",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "ex-011-1",
              jp: ruby("[本棚|ほんだな]の[上|うえ]に[辞典|じてん]があります。"),
              es: "Hay un diccionario sobre la estantería.",
              breakdown: [
                { label: "本棚の上", es: "lugar relacional: sobre la estantería" },
                { label: "辞典", es: "referente existente" },
                { label: "あります", es: "verbo de existencia para objeto" },
              ],
              notes: [
                "Primero se forma el lugar con の, y recién después entra に como marca de lugar de existencia.",
              ],
            },
            {
              id: "ex-011-2",
              jp: ruby("[ベンチ]の[下|した]に[兎|うさぎ]がいます。"),
              es: "Hay un conejo debajo del banco.",
              breakdown: [
                { label: "ベンチの下", es: "lugar relacional: debajo del banco" },
                { label: "兎", es: "animal presente en la escena" },
                { label: "います", es: "verbo de existencia para animal" },
              ],
            },
            {
              id: "ex-011-3",
              jp: ruby("[扉|とびら]の[右|みぎ]にカレンダーがあります。"),
              es: "Hay un calendario a la derecha de la puerta.",
              notes: [
                "Aquí 右 ubica lateralmente el referente con respecto a 扉.",
              ],
            },
            {
              id: "ex-011-4",
              jp: ruby("[窓|まど]の[左|ひだり]に[鏡|かがみ]があります。"),
              es: "Hay un espejo a la izquierda de la ventana.",
            },
            {
              id: "ex-011-5",
              jp: ruby("[駅|えき]の[前|まえ]にポストがあります。"),
              es: "Hay un buzón frente a la estación.",
              notes: [
                "前 se siente como el espacio que queda delante del ancla dentro de la escena.",
              ],
            },
            {
              id: "ex-011-6",
              jp: ruby("[橋|はし]の[後|うし]ろに[山|やま]があります。"),
              es: "Hay una montaña detrás del puente.",
            },
            {
              id: "ex-011-7",
              jp: ruby("[冷蔵庫|れいぞうこ]の[中|なか]に[牛乳|ぎゅうにゅう]があります。"),
              es: "Hay leche dentro del refrigerador.",
            },
            {
              id: "ex-011-8",
              jp: ruby("[家|いえ]の[外|そと]に[鳩|はと]がいます。"),
              es: "Hay una paloma fuera de la casa.",
            },
            {
              id: "ex-011-9",
              jp: ruby("[学校|がっこう]の[隣|となり]に[病院|びょういん]があります。"),
              es: "Hay un hospital al lado de la escuela.",
              notes: [
                "隣 suele sentirse como la posición contigua inmediata con respecto al ancla.",
              ],
            },
            {
              id: "ex-011-10",
              jp: ruby("[川|かわ]の[横|よこ]に[ベンチ]があります。"),
              es: "Hay un banco al costado del río.",
              notes: [
                "横 se siente como el costado lateral de algo dentro de la escena.",
              ],
            },
            {
              id: "ex-011-11",
              jp: ruby("[庭|にわ]の[中|なか]に[兎|うさぎ]と[鳩|はと]がいます。"),
              es: "Hay un conejo y una paloma dentro del jardín.",
              breakdown: [
                { label: "兎と鳩", es: "grupo nominal unido con と" },
                { label: "が", es: "marca del grupo completo como referente" },
              ],
            },
            {
              id: "ex-011-12",
              jp: ruby("[教室|きょうしつ]の[前|まえ]に[遥|はるか]さんと[優奈|ゆうな]さんがいます。"),
              es: "Haruka y Yuna están delante del aula.",
            },
            {
              id: "ex-011-13",
              jp: ruby("[辞典|じてん]は[本棚|ほんだな]の[上|うえ]にあります。"),
              es: "El diccionario está sobre la estantería.",
              notes: [
                "Aquí el referente ya es conocido y entra como tema al inicio de la oración.",
              ],
            },
            {
              id: "ex-011-14",
              jp: ruby("[看板|かんばん]は[入口|いりぐち]の[左|ひだり]にあります。"),
              es: "El letrero está a la izquierda de la entrada.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-011-contrast",
      kind: "contrast",
      title: "Contrastes que conviene fijar bien",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-011-1",
              label: "La posición no cambia el verbo",
              correct: {
                jp: ruby("[ベンチ]の[下|した]に[兎|うさぎ]がいます。"),
                es: "Conejo → います, aunque la posición sea 下.",
              },
              incorrect: {
                jp: ruby("[ベンチ]の[下|した]に[兎|うさぎ]があります。"),
                es: "No corresponde dentro del alcance de esta unidad.",
              },
              explanation:
                "El verbo lo decide el referente. Aquí 兎 es un animal, por eso usamos います.",
            },
            {
              id: "contrast-011-2",
              label: "El grupo con と recibe un solo が",
              correct: {
                jp: ruby("[家|いえ]の[中|なか]に[猫|ねこ]と[犬|いぬ]がいます。"),
                es: "猫と犬 funciona como un grupo nominal completo.",
              },
              incorrect: {
                jp: ruby("[家|いえ]の[中|なか]に[猫|ねこ]が[犬|いぬ]がいます。"),
                es: "Aquí la agrupación no está bien formada.",
              },
              explanation:
                "と une los sustantivos y el grupo entero recibe が una sola vez.",
            },
            {
              id: "contrast-011-3",
              label: "Primero se arma el lugar relacional",
              correct: {
                jp: ruby("[窓|まど]の[左|ひだり]に[鏡|かがみ]があります。"),
                es: "El lugar completo es 窓の左に.",
              },
              incorrect: {
                jp: ruby("[窓|まど]が[左|ひだり]に[鏡|かがみ]があります。"),
                es: "La relación espacial no está bien construida.",
              },
              explanation:
                "En esta unidad la posición suele depender de un ancla con の: ventana + izquierda → 窓の左.",
            },
            {
              id: "contrast-011-4",
              label: "Lugar primero o referente primero",
              correct: {
                jp: ruby("[冷蔵庫|れいぞうこ]の[中|なか]に[牛乳|ぎゅうにゅう]があります。 / [牛乳|ぎゅうにゅう]は[冷蔵庫|れいぞうこ]の[中|なか]にあります。"),
                es: "Las dos expresan la misma base; cambia el punto de partida.",
              },
              incorrect: {
                jp: ruby("[牛乳|ぎゅうにゅう]が[冷蔵庫|れいぞうこ]の[中|なか]はあります。"),
                es: "Aquí la estructura se rompe.",
              },
              explanation:
                "Igual que en la unidad 010, puedes reorganizar la frase, pero no mover las partículas como si fueran intercambiables.",
            },
            {
              id: "contrast-011-5",
              label: "隣 y 横 no son idénticos",
              correct: {
                jp: ruby("[学校|がっこう]の[隣|となり]に[病院|びょういん]があります。 / [川|かわ]の[横|よこ]に[ベンチ]があります。"),
                es: "Las dos son válidas, pero no siempre se sienten igual.",
              },
              incorrect: {
                jp: ruby("[隣|となり]と[横|よこ]はいつでもまったく[同|おな]じです。"),
                es: "No conviene pensar eso demasiado pronto.",
              },
              explanation:
                "Las dos hablan de cercanía lateral, pero la sensación espacial no siempre es exactamente la misma.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-011-warning",
      kind: "warning",
      title: "En qué fijarte bien",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "No conviertas esta unidad en una simple lista de palabras",
          content:
            "Arriba, abajo, delante o dentro no son el objetivo final. Lo importante aquí es que puedas construir escenas completas con un ancla, una posición, un referente y el verbo correcto. También conviene no mezclar と con の: una une elementos de una lista; la otra construye relaciones entre sustantivos.",
          bullets: [
            {
              jp: ruby("[机|つくえ]の[上|うえ]に[辞典|じてん]があります。"),
              es: "aquí の arma la relación espacial completa",
            },
            {
              jp: ruby("[辞典|じてん]と[新聞|しんぶん]があります。"),
              es: "aquí と une dos sustantivos en una lista cerrada",
            },
            {
              jp: ruby("[鳩|はと]と[兎|うさぎ]がいます。"),
              es: "el grupo entero sigue ocupando el lugar del referente dentro de la oración",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-011-practice",
      kind: "practice",
      title: "Práctica guiada antes del quiz",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Escribe cinco escenas usando un ancla y una posición vertical o interior:",
              jp: ruby("[本棚|ほんだな]の[上|うえ]に... / [ベンチ]の[下|した]に... / [冷蔵庫|れいぞうこ]の[中|なか]に..."),
            },
            {
              es: "Haz luego cuatro escenas con orientación lateral o profundidad:",
              jp: ruby("[扉|とびら]の[右|みぎ]に... / [窓|まど]の[左|ひだり]に... / [駅|えき]の[前|まえ]に... / [橋|はし]の[後|うし]ろに..."),
            },
            {
              es: "Reescribe dos veces la misma escena cambiando el orden de presentación:",
              jp: ruby("[本棚|ほんだな]の[上|うえ]に[辞典|じてん]があります。 / [辞典|じてん]は[本棚|ほんだな]の[上|うえ]にあります。"),
            },
            {
              es: "Forma grupos con と y úsalos como referente de la escena:",
              jp: ruby("[猫|ねこ]と[犬|いぬ] / [遥|はるか]さんと[優奈|ゆうな]さん / [辞典|じてん]と[新聞|しんぶん]。"),
              note: "La idea es sentir que todo el grupo sigue ocupando el lugar del sustantivo principal dentro de la oración.",
            },
            {
              es: "Haz preguntas por ubicación usando el referente ya conocido:",
              jp: ruby("[牛乳|ぎゅうにゅう]はどこにありますか。 / [鳩|はと]はどこにいますか。"),
            },
          ],
        },
      ],
    },
    {
      id: "lesson-011-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Puedo construir lugares relacionales como",
              jp: ruby("A の [上|うえ] / A の [中|なか] / A の [前|まえ] / A の [隣|となり]。"),
            },
            {
              es: "Puedo combinar esas posiciones con",
              jp: ruby("あります / います"),
              note: "sin perder la lógica del referente y del lugar.",
            },
            {
              es: "Entiendo que el verbo lo decide el referente, no la posición.",
            },
            {
              es: "Puedo usar",
              jp: ruby("と"),
              note: "para unir dos o más sustantivos y tratarlos como un solo grupo dentro de la oración.",
            },
            {
              es: "Puedo responder con más precisión a preguntas de ubicación y preparar el terreno para los lugares demostrativos de la siguiente unidad.",
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-011-quiz",
    title: "Quiz — Posiciones básicas y と",
    description:
      "Repaso variado para comprobar si ya ubicas referentes con posiciones básicas, mantienes la lógica de あります / います, y tratas correctamente los grupos unidos con と.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "single-choice",
        prompt: {
          es: "Elige la oración más natural para decir: “Hay un conejo debajo del banco”.",
        },
        choices: [
          { id: "a", label: { jp: ruby("[ベンチ]の[下|した]に[兎|うさぎ]がいます。") } },
          { id: "b", label: { jp: ruby("[ベンチ]の[下|した]に[兎|うさぎ]があります。") } },
          { id: "c", label: { jp: ruby("[ベンチ]に[下|した]の[兎|うさぎ]がいます。") } },
          { id: "d", label: { jp: ruby("[兎|うさぎ]は[ベンチ]の[下|した]がいます。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "兎 es un animal, por eso aquí corresponde います. Además, la relación espacial natural es ベンチの下に.",
        relatedSectionIds: ["lesson-011-structure", "lesson-011-examples"],
      },
      {
        id: "q2",
        type: "single-choice",
        prompt: {
          es: "Elige la oración más natural para decir: “Hay un calendario a la derecha de la puerta”.",
        },
        choices: [
          { id: "a", label: { jp: ruby("[扉|とびら]の[右|みぎ]にカレンダーがあります。") } },
          { id: "b", label: { jp: ruby("[扉|とびら]の[右|みぎ]にカレンダーがいます。") } },
          { id: "c", label: { jp: ruby("[右|みぎ]の[扉|とびら]にカレンダーがあります。") } },
          { id: "d", label: { jp: ruby("カレンダーは[扉|とびら]の[右|みぎ]がです。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "カレンダー es un objeto, así que corresponde あります. La relación espacial correcta es 扉の右に.",
        relatedSectionIds: ["lesson-011-structure", "lesson-011-vocabulary"],
      },
      {
        id: "q3",
        type: "single-choice",
        prompt: {
          es: "Elige la oración más natural para decir: “Hay un buzón frente a la estación”.",
        },
        choices: [
          { id: "a", label: { jp: ruby("[駅|えき]の[前|まえ]にポストがあります。") } },
          { id: "b", label: { jp: ruby("[駅|えき]の[前|まえ]にポストがいます。") } },
          { id: "c", label: { jp: ruby("ポストの[駅|えき][前|まえ]があります。") } },
          { id: "d", label: { jp: ruby("[駅|えき]に[前|まえ]のポストがあります。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí el referente es ポスト, un objeto. Por eso corresponde あります y la relación natural es 駅の前に.",
        relatedSectionIds: ["lesson-011-examples", "lesson-011-vocabulary"],
      },
      {
        id: "q4",
        type: "single-choice",
        prompt: {
          es: "Elige la oración más natural para decir: “Hay leche dentro del refrigerador”.",
        },
        choices: [
          { id: "a", label: { jp: ruby("[冷蔵庫|れいぞうこ]の[中|なか]に[牛乳|ぎゅうにゅう]があります。") } },
          { id: "b", label: { jp: ruby("[冷蔵庫|れいぞうこ]の[中|なか]に[牛乳|ぎゅうにゅう]がいます。") } },
          { id: "c", label: { jp: ruby("[牛乳|ぎゅうにゅう]の[中|なか]に[冷蔵庫|れいぞうこ]があります。") } },
          { id: "d", label: { jp: ruby("[冷蔵庫|れいぞうこ]に[中|なか]の[牛乳|ぎゅうにゅう]があります。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "El referente es 牛乳, una cosa. Por eso aquí corresponde あります y el lugar relacional es 冷蔵庫の中に.",
        relatedSectionIds: ["lesson-011-structure", "lesson-011-examples"],
      },
      {
        id: "q5",
        type: "single-choice",
        prompt: {
          es: "Elige la oración más natural para decir: “Hay un gato y un perro dentro de la casa”.",
        },
        choices: [
          { id: "a", label: { jp: ruby("[家|いえ]の[中|なか]に[猫|ねこ]と[犬|いぬ]がいます。") } },
          { id: "b", label: { jp: ruby("[家|いえ]の[中|なか]に[猫|ねこ]が[犬|いぬ]がいます。") } },
          { id: "c", label: { jp: ruby("[家|いえ]の[中|なか]に[猫|ねこ]と[犬|いぬ]があります。") } },
          { id: "d", label: { jp: ruby("[猫|ねこ]と[犬|いぬ]は[家|いえ]の[中|なか]がいます。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "猫と犬 forma un solo grupo nominal antes de が. Como ambos referentes son animales, aquí corresponde います.",
        relatedSectionIds: ["lesson-011-concept", "lesson-011-structure"],
      },
      {
        id: "q6",
        type: "single-choice",
        prompt: {
          es: "¿Qué explica mejor la función de と en “庭の中に兎と鳩がいます。”?",
        },
        choices: [
          { id: "a", label: { es: "Une dos sustantivos y el grupo completo sigue funcionando como referente dentro de la oración." } },
          { id: "b", label: { es: "Marca posesión entre los dos animales." } },
          { id: "c", label: { es: "Reemplaza a が porque la escena tiene dos animales." } },
          { id: "d", label: { es: "Convierte la frase en una pregunta." } },
        ],
        correctChoiceId: "a",
        explanation:
          "Ese es el punto clave de esta unidad: と une sustantivos y el grupo entero ocupa el lugar del referente antes de が.",
        relatedSectionIds: ["lesson-011-concept", "lesson-011-structure"],
      },
      {
        id: "q7",
        type: "single-choice",
        prompt: {
          jp: ruby("[本棚|ほんだな]の[上|うえ]にあります。"),
          note: "Elige la pregunta más natural para esa respuesta.",
        },
        choices: [
          { id: "a", label: { jp: ruby("[辞典|じてん]はどこにありますか。") } },
          { id: "b", label: { jp: ruby("[本棚|ほんだな]の[上|うえ]に[何|なに]がありますか。") } },
          { id: "c", label: { jp: ruby("[辞典|じてん]が[本棚|ほんだな]の[上|うえ]にいますか。") } },
          { id: "d", label: { jp: ruby("[誰|だれ]が[本棚|ほんだな]の[上|うえ]にいますか。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "La respuesta da un lugar relacional. Por eso la pregunta más natural pide la ubicación de un referente ya conocido: 辞典はどこにありますか。",
        relatedSectionIds: ["lesson-011-structure", "lesson-011-contrast"],
      },
      {
        id: "q8",
        type: "single-choice",
        prompt: {
          jp: ruby("[庭|にわ]の[中|なか]に[兎|うさぎ]と[鳩|はと]がいます。"),
          note: "Elige la pregunta más natural para esa respuesta.",
        },
        choices: [
          { id: "a", label: { jp: ruby("[庭|にわ]の[中|なか]に[何|なに]がありますか。") } },
          { id: "b", label: { jp: ruby("[庭|にわ]の[中|なか]に[誰|だれ]がいますか。") } },
          { id: "c", label: { jp: ruby("[兎|うさぎ]と[鳩|はと]はどこがいますか。") } },
          { id: "d", label: { jp: ruby("[庭|にわ]の[中|なか]は[誰|だれ]ですか。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "La respuesta da referentes animados presentes en un lugar. Dentro del alcance de esta unidad, la pregunta natural usa 誰がいますか para buscar quién está ahí.",
        relatedSectionIds: ["lesson-011-structure", "lesson-011-examples"],
      },
      {
        id: "q9",
        type: "single-choice",
        prompt: {
          es: "¿Cuál oración usa bien 隣 dentro de esta unidad?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[学校|がっこう]の[隣|となり]に[病院|びょういん]があります。") } },
          { id: "b", label: { jp: ruby("[学校|がっこう]が[隣|となり]に[病院|びょういん]があります。") } },
          { id: "c", label: { jp: ruby("[隣|となり]の[学校|がっこう]に[病院|びょういん]があります。") } },
          { id: "d", label: { jp: ruby("[学校|がっこう]の[隣|となり]が[病院|びょういん]にあります。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "En esta unidad tratamos 隣 como una posición que normalmente aparece en grupos del tipo Aの隣に.",
        relatedSectionIds: ["lesson-011-structure", "lesson-011-contrast"],
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
              jp: ruby("[冷蔵庫|れいぞうこ]の[中|なか]に[牛乳|ぎゅうにゅう]があります。 / [牛乳|ぎゅうにゅう]は[冷蔵庫|れいぞうこ]の[中|なか]にあります。"),
            },
          },
          {
            id: "b",
            label: {
              jp: ruby("[冷蔵庫|れいぞうこ]が[牛乳|ぎゅうにゅう]の[中|なか]にあります。 / [牛乳|ぎゅうにゅう]に[冷蔵庫|れいぞうこ]があります。"),
            },
          },
          {
            id: "c",
            label: {
              jp: ruby("[冷蔵庫|れいぞうこ]の[中|なか]は[牛乳|ぎゅうにゅう]です。 / [牛乳|ぎゅうにゅう]が[冷蔵庫|れいぞうこ]です。"),
            },
          },
          {
            id: "d",
            label: {
              jp: ruby("[牛乳|ぎゅうにゅう]の[中|なか]に[冷蔵庫|れいぞうこ]があります。 / [冷蔵庫|れいぞうこ]は[牛乳|ぎゅうにゅう]の[中|なか]にあります。"),
            },
          },
        ],
        correctChoiceId: "a",
        explanation:
          "Las dos oraciones del par correcto mantienen la misma base espacial; solo cambia el punto desde donde presentas la información.",
        relatedSectionIds: ["lesson-011-concept", "lesson-011-contrast"],
      },
      {
        id: "q11",
        type: "single-choice",
        prompt: {
          es: "¿Qué respuesta encaja mejor con la siguiente pregunta?",
          jp: ruby("[冷蔵庫|れいぞうこ]の[中|なか]に[何|なに]がありますか。"),
        },
        choices: [
          { id: "a", label: { jp: ruby("[牛乳|ぎゅうにゅう]があります。") } },
          { id: "b", label: { jp: ruby("[冷蔵庫|れいぞうこ]の[中|なか]にあります。") } },
          { id: "c", label: { jp: ruby("[牛乳|ぎゅうにゅう]にあります。") } },
          { id: "d", label: { jp: ruby("[牛乳|ぎゅうにゅう]がいます。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "La pregunta busca el referente existente dentro del refrigerador. Por eso la respuesta natural da ese referente y mantiene あります.",
        relatedSectionIds: ["lesson-011-structure", "lesson-011-examples"],
      },
      {
        id: "q12",
        type: "single-choice",
        prompt: {
          es: "¿Qué respuesta encaja mejor con la siguiente pregunta?",
          jp: ruby("[公園|こうえん]の[中|なか]に[誰|だれ]がいますか。"),
        },
        choices: [
          { id: "a", label: { jp: ruby("[遥|はるか]さんと[優奈|ゆうな]さんがいます。") } },
          { id: "b", label: { jp: ruby("[公園|こうえん]の[外|そと]にいます。") } },
          { id: "c", label: { jp: ruby("[遥|はるか]さんと[優奈|ゆうな]さんがあります。") } },
          { id: "d", label: { jp: ruby("[鳩|はと]と[兎|うさぎ]です。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "La pregunta busca personas presentes en un lugar. Por eso la respuesta natural da el grupo de personas con がいます.",
        relatedSectionIds: ["lesson-011-structure", "lesson-011-examples"],
      },
      {
        id: "q13",
        type: "single-choice",
        prompt: {
          es: "¿Cuál oración expresa mejor que algo está al costado del río?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[川|かわ]の[横|よこ]に[ベンチ]があります。") } },
          { id: "b", label: { jp: ruby("[川|かわ]の[隣|となり]に[ベンチ]があります。") } },
          { id: "c", label: { jp: ruby("[川|かわ]に[横|よこ]の[ベンチ]があります。") } },
          { id: "d", label: { jp: ruby("[ベンチ]は[川|かわ]の[横|よこ]がです。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Dentro del alcance de esta unidad, 横 es la opción que mejor encaja con la idea de costado lateral del río.",
        relatedSectionIds: ["lesson-011-concept", "lesson-011-contrast"],
      },
      {
        id: "q14",
        type: "order-sentence",
        prompt: {
          es: "Ordena la oración correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[床|ゆか]") }, value: "床" },
          { id: "t2", label: { jp: ruby("の") }, value: "の" },
          { id: "t3", label: { jp: ruby("[上|うえ]") }, value: "上" },
          { id: "t4", label: { jp: ruby("に") }, value: "に" },
          { id: "t5", label: { jp: ruby("[かばん]") }, value: "かばん" },
          { id: "t6", label: { jp: ruby("が") }, value: "が" },
          { id: "t7", label: { jp: ruby("あります。") }, value: "あります。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4", "t5", "t6", "t7"],
        answerLabel: { jp: ruby("[床|ゆか]の[上|うえ]に[かばん]があります。") },
        explanation:
          "Primero armas el lugar relacional 床の上. Después añades に, el referente y el verbo final.",
        relatedSectionIds: ["lesson-011-structure", "lesson-011-vocabulary"],
      },
      {
        id: "q15",
        type: "order-sentence",
        prompt: {
          es: "Ordena la oración correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[教室|きょうしつ]") }, value: "教室" },
          { id: "t2", label: { jp: ruby("の") }, value: "の" },
          { id: "t3", label: { jp: ruby("[前|まえ]") }, value: "前" },
          { id: "t4", label: { jp: ruby("に") }, value: "に" },
          { id: "t5", label: { jp: ruby("[遥|はるか]さん") }, value: "遥さん" },
          { id: "t6", label: { jp: ruby("と") }, value: "と" },
          { id: "t7", label: { jp: ruby("[優奈|ゆうな]さん") }, value: "優奈さん" },
          { id: "t8", label: { jp: ruby("が") }, value: "が" },
          { id: "t9", label: { jp: ruby("います。") }, value: "います。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9"],
        answerLabel: { jp: ruby("[教室|きょうしつ]の[前|まえ]に[遥|はるか]さんと[優奈|ゆうな]さんがいます。") },
        explanation:
          "Aquí el lugar completo va primero, luego el grupo nominal unido con と, y al final がいます.",
        relatedSectionIds: ["lesson-011-structure", "lesson-011-examples"],
      },
      {
        id: "q16",
        type: "fill-blank",
        prompt: {
          es: "Completa con la posición correcta:",
          jp: ruby("[机|つくえ]の___に[辞典|じてん]があります。"),
          note: "La idea es “sobre la mesa”.",
        },
        acceptedAnswers: ["上", "うえ"],
        placeholder: "Escribe la posición",
        explanation:
          "Para expresar “sobre la mesa”, aquí usamos 机の上に.",
        relatedSectionIds: ["lesson-011-structure", "lesson-011-summary"],
      },
      {
        id: "q17",
        type: "fill-blank",
        prompt: {
          es: "Completa con la partícula que une los dos referentes:",
          jp: ruby("[猫|ねこ]___[犬|いぬ]がいます。"),
        },
        acceptedAnswers: ["と"],
        placeholder: "Escribe la partícula",
        explanation:
          "En esta unidad, と une los sustantivos de una lista clara antes de が.",
        relatedSectionIds: ["lesson-011-structure", "lesson-011-summary"],
      },
      {
        id: "q18",
        type: "fill-blank",
        prompt: {
          es: "Completa con el verbo correcto:",
          jp: ruby("[橋|はし]の[下|した]にボールが___。"),
        },
        acceptedAnswers: ["あります", "あります。"],
        placeholder: "Escribe el verbo",
        explanation:
          "ボール es un objeto. Por eso aquí corresponde あります.",
        relatedSectionIds: ["lesson-011-concept", "lesson-011-vocabulary"],
      },
      {
        id: "q19",
        type: "fill-blank",
        prompt: {
          es: "Completa con la posición correcta:",
          jp: ruby("[家|いえ]の___に[鳩|はと]がいます。"),
          note: "La idea es “fuera de la casa”.",
        },
        acceptedAnswers: ["外", "そと"],
        placeholder: "Escribe la posición",
        explanation:
          "Para expresar “fuera de la casa”, aquí usamos 家の外に.",
        relatedSectionIds: ["lesson-011-structure", "lesson-011-summary"],
      },
      {
        id: "q20",
        type: "single-choice",
        prompt: {
          es: "¿Cuál idea explica mejor por qué “猫と犬” puede ir antes de が como un solo bloque en esta unidad?",
        },
        choices: [
          { id: "a", label: { es: "Porque と convierte automáticamente la frase en una comparación." } },
          { id: "b", label: { es: "Porque と une dos sustantivos y el grupo entero mantiene función de referente dentro de la oración." } },
          { id: "c", label: { es: "Porque が desaparece cuando hay dos animales." } },
          { id: "d", label: { es: "Porque います siempre necesita dos sustantivos antes." } },
        ],
        correctChoiceId: "b",
        explanation:
          "Ese es el punto central de esta unidad: el grupo con と sigue comportándose como un solo bloque nominal dentro de la estructura principal.",
        relatedSectionIds: ["lesson-011-concept", "lesson-011-structure"],
      },
    ],
  },
};

export default lesson011;
