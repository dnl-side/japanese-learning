
//src/data/grammar/lessons/lesson-021.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson021: GrammarLesson = {
  id: "lesson-021",
  slug: "matome-existencia-accion-movimiento",
  order: 26,
  level: "N5",
  status: "ready",
  title: "まとめ — Existencia, acción y movimiento",
  jpTitle: "まとめ・ある / いる・こうどう・いどう",
  shortTitle: "Existencia, acción y movimiento",
  description:
    "Gran repaso para contrastar verbos de existencia, verbos de acción y verbos de movimiento, y fijar cómo cambia la partícula del lugar según la función del verbo: に con existencia, で con acción, y に / へ con movimiento.",
  estimatedMinutes: 94,
  categoryTags: ["matome", "fundamentos", "verbos", "particulas", "contraste", "lectura", "integracion"],
  grammarTags: [
    "あります",
    "います",
    "動作",
    "移動",
    "に",
    "で",
    "へ",
    "存在",
    "場所",
    "destino",
    "lugar de acción",
    "matome",
  ],
  searchTerms: [
    "matome existencia accion movimiento japones",
    "ni de he contrast japanese",
    "arimasu imasu vs action vs movement",
    "lugar existencia accion movimiento japones",
    "donde hay donde hago a donde voy japones",
    "particulas de lugar japones repaso",
  ],
  relatedLessonSlugs: [
    "arimasu-imasu-existencia-basica",
    "posiciones-basicas-to",
    "lugares-demostrativos-koko-soko-asoko-kochira",
    "verbos-de-accion-particulas-wo-de-to-ni",
    "verbos-de-movimiento-iku-kuru-kaeru-ni-he-de-to",
  ],
  relatedVocabularyTags: ["lugares", "verbos", "particulas", "matome", "base"],
  objectives: [
    "Distinguir claramente tres familias verbales ya vistas: existencia, acción y movimiento.",
    "Entender que la partícula del lugar cambia según el tipo de verbo y no solo según el sustantivo del lugar.",
    "Fijar に como lugar de existencia, で como lugar de acción, y に / へ como destino de movimiento.",
    "Reforzar el reconocimiento de で como medio dentro de verbos de acción y de movimiento.",
    "Leer mini escenas donde el mismo lugar aparece con partículas distintas según la función verbal.",
    "Resolver un quiz grande de contraste sin mezclar funciones básicas de las partículas.",
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
      id: "lesson-021-intro",
      kind: "intro",
      title: "Qué vas a revisar aquí",
      blocks: [
        {
          type: "paragraph",
          content:
            "Hasta ahora ya trabajaste tres mundos verbales que muchos estudiantes mezclan al leer y al escribir. Primero viste existencia con あります・います. Después entraste a verbos de acción, donde el lugar de la acción se marca con で. Y al final trabajaste verbos de movimiento, donde el destino se marca con に o へ. Esta unidad no trae una gran gramática nueva: su objetivo es ordenar todo eso para que el uso del lugar deje de sentirse caótico.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "La idea más importante de toda la lesson es esta:",
              jp: ruby("[同|おな]じ [場所|ばしょ] でも、[動詞|どうし] が [変|か]わる と [助詞|じょし] が [変|か]わります。"),
            },
            {
              es: "Por ejemplo:",
              jp: ruby("[町|まち]に[図書館|としょかん]があります。 / [今日|きょう]はその[図書館|としょかん]で[勉強|べんきょう]します。 / [明日|あした]、[図書館|としょかん]に[行|い]きます。"),
            },
            {
              es: "Aquí el lugar es casi el mismo, pero la partícula cambia porque cambia la función verbal:",
              jp: ruby("に → [存在|そんざい] / で → [動作|どうさ] / に・へ → [移動|いどう]。"),
            },
          ],
        },
      ],
    },
    {
      id: "lesson-021-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "No cambia el lugar; cambia la función del verbo",
          content:
            "Ese es el corazón real de este まとめ. El lugar puede ser exactamente el mismo, pero la partícula no depende solo del sustantivo. Depende del tipo de verbo y de la pregunta que responde la oración. Si la oración dice que algo existe o está en un sitio, el lugar entra con に. Si la oración dice que allí realizas una acción, el lugar entra con で. Si la oración dice que te desplazas hacia ese lugar, el destino entra con に o へ.",
          bullets: [
            {
              jp: ruby("[公園|こうえん]にベンチがあります。"),
              es: "に = lugar de existencia",
            },
            {
              jp: ruby("[公園|こうえん]でサンドイッチを[食|た]べます。"),
              es: "で = lugar de acción",
            },
            {
              jp: ruby("[公園|こうえん]に[行|い]きます。 / [公園|こうえん]へ[行|い]きます。"),
              es: "に / へ = destino o dirección de movimiento",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Primero clasifica el verbo y después piensa la partícula",
          content:
            "Muchos errores nacen cuando el estudiante intenta decidir la partícula solo viendo el lugar. Aquí conviene cambiar el orden mental. Primero mira qué tipo de verbo tienes. ¿Es un verbo de existencia, de acción o de movimiento? Después decide la partícula del lugar según esa familia verbal.",
          bullets: [
            {
              jp: ruby("あります / います"),
              es: "primero piensa: existencia",
            },
            {
              jp: ruby("[勉強|べんきょう]します / [読|よ]みます / [話|はな]します"),
              es: "primero piensa: acción",
            },
            {
              jp: ruby("[行|い]きます / [来|き]ます / [帰|かえ]ります"),
              es: "primero piensa: movimiento",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "で sigue siendo importante, pero no siempre significa lo mismo",
          content:
            "En este punto del curso ya viste varios usos de で. Aquí conviene reorganizarlos sin mezclar niveles. Con verbos de acción, で puede marcar lugar de acción o medio. Con verbos de movimiento, で puede marcar medio de transporte o grupo. Lo importante es no usarlo como partícula de destino.",
          bullets: [
            {
              jp: ruby("[閲覧室|えつらんしつ]で[新聞|しんぶん]を[読|よ]みます。"),
              es: "で = lugar de acción",
            },
            {
              jp: ruby("シャープペンで[名前|なまえ]を[書|か]きます。"),
              es: "で = herramienta",
            },
            {
              jp: ruby("[地下鉄|ちかてつ]で[展示室|てんじしつ]に[行|い]きます。"),
              es: "で = transporte",
            },
            {
              jp: ruby("5[人|にん]で[広場|ひろば]へ[行|い]きます。"),
              es: "で = grupo",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-021-structure",
      kind: "structure",
      title: "Mapa de contraste",
      blocks: [
        {
          type: "table",
          title: "Los tres tipos de verbo y la partícula del lugar",
          description:
            "Esta es la tabla más importante de toda la unidad. Antes de pensar en matices, primero fija esta diferencia básica.",
          columns: [
            { key: "family", label: "Familia verbal", width: "20%" },
            { key: "question", label: "Pregunta guía", width: "24%" },
            { key: "particle", label: "Partícula del lugar", width: "20%", align: "center" },
            { key: "example", label: "Ejemplo", width: "36%" },
          ],
          rows: [
            {
              id: "map-existence",
              cells: {
                family: "existencia",
                question: "¿dónde hay / está algo o alguien?",
                particle: { jp: ruby("に") },
                example: { jp: ruby("[町|まち]に[図書館|としょかん]があります。") },
              },
            },
            {
              id: "map-action",
              cells: {
                family: "acción",
                question: "¿dónde hago la acción?",
                particle: { jp: ruby("で") },
                example: { jp: ruby("[図書館|としょかん]で[勉強|べんきょう]します。") },
              },
            },
            {
              id: "map-movement",
              cells: {
                family: "movimiento",
                question: "¿a dónde voy / vengo / vuelvo?",
                particle: { jp: ruby("に / へ") },
                example: { jp: ruby("[図書館|としょかん]に[行|い]きます。 / [図書館|としょかん]へ[行|い]きます。") },
              },
            },
          ],
          zebra: true,
        },
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-021-1",
              label: "Existencia",
              pattern: ruby("A に B が あります / います。"),
              meaning: "En A hay / está B.",
              translation:
                "Aquí la oración no dice qué hago ni hacia dónde me desplazo. Solo dice que algo o alguien existe o está en un lugar.",
              structure: [
                {
                  slot: "A に",
                  value: "lugar de existencia",
                  note: {
                    es: "Puede ser algo como:",
                    jp: ruby("[町|まち] / [屋上|おくじょう] / [駐車場|ちゅうしゃじょう] / [交番|こうばん]。"),
                  },
                },
                {
                  slot: "B が",
                  value: "referente que existe o está",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[図書館|としょかん] / [警察官|けいさつかん] / ベンチ / [自動販売機|じどうはんばいき]。"),
                  },
                },
                {
                  slot: { jp: ruby("あります / います") },
                  value: "verbo de existencia",
                  note: "Esta familia ya quedó fijada antes; aquí la contrastamos con las otras dos.",
                },
              ],
              notes: [
                "Si la idea principal es existencia o presencia, aquí el lugar entra con に.",
              ],
            },
            {
              id: "pattern-021-2",
              label: "Acción",
              pattern: ruby("A で B を / が Vます。"),
              meaning: "En A realizo la acción V.",
              translation:
                "Aquí el lugar ya no marca existencia ni destino. Marca el escenario donde se realiza la acción.",
              structure: [
                {
                  slot: "A で",
                  value: "lugar de acción",
                  note: {
                    es: "Puede ser algo como:",
                    jp: ruby("[閲覧室|えつらんしつ] / [展示室|てんじしつ] / [商店街|しょうてんがい] / [公民館|こうみんかん]。"),
                  },
                },
                {
                  slot: "B を / が",
                  value: "objeto o referente de la acción",
                  note: "El resto de la oración se organiza según el verbo concreto, igual que en la unidad 19.",
                },
                {
                  slot: "Vます",
                  value: "verbo de acción",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[勉強|べんきょう]します / [読|よ]みます / [会|あ]います / [話|はな]します / [書|か]きます。"),
                  },
                },
              ],
              notes: [
                "Si la oración describe lo que haces en ese lugar, aquí el lugar entra con で.",
              ],
            },
            {
              id: "pattern-021-3",
              label: "Movimiento",
              pattern: ruby("A に / へ V ます。"),
              meaning: "Me desplazo hacia A.",
              translation:
                "Aquí el lugar ya no es escenario de una acción ni lugar de existencia. Es el destino o la dirección del desplazamiento.",
              structure: [
                {
                  slot: "A に / へ",
                  value: "destino o dirección",
                  note: {
                    es: "Puede ser algo como:",
                    jp: ruby("[博物館|はくぶつかん] / [花屋|はなや] / [温室|おんしつ] / [展望台|てんぼうだい]。"),
                  },
                },
                {
                  slot: "Vます",
                  value: "verbo de movimiento",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[行|い]きます / [来|き]ます / [帰|かえ]ります。"),
                  },
                },
              ],
              notes: [
                "En frases simples del nivel, に y へ muchas veces pueden funcionar ambas como destino o dirección.",
              ],
            },
            {
              id: "pattern-021-4",
              label: "El mismo lugar en tres oraciones distintas",
              pattern: ruby("A に B が あります。 / A で Vます。 / A に・へ[行|い]きます。"),
              meaning: "El lugar es el mismo, pero la partícula cambia según el verbo.",
              translation:
                "Este patrón es el corazón del まとめ. Conviene practicarlo muchas veces con lugares distintos hasta que el contraste se vuelva automático.",
              structure: [
                {
                  slot: "A",
                  value: "mismo lugar repetido",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[図書館|としょかん] / [体育館|たいいくかん] / [喫茶店|きっさてん] / [空港|くうこう]。"),
                  },
                },
                {
                  slot: "に / で / に・へ",
                  value: "partícula que cambia",
                  note: "La diferencia depende del tipo de verbo, no del sustantivo del lugar en sí mismo.",
                },
              ],
              notes: [
                "Esta es la práctica más importante de la unidad.",
              ],
            },
          ],
        },
        {
          type: "table",
          title: "Preguntas que ayudan a elegir la partícula",
          description:
            "Si dudas, intenta responder mentalmente una de estas preguntas guía antes de poner la partícula.",
          columns: [
            { key: "question", label: "Pregunta", width: "38%" },
            { key: "verb", label: "Tipo de verbo", width: "28%" },
            { key: "particle", label: "Partícula esperable", width: "18%", align: "center" },
            { key: "example", label: "Ejemplo", width: "16%" },
          ],
          rows: [
            {
              id: "guide-1",
              cells: {
                question: "¿Dónde hay / está algo o alguien?",
                verb: "existencia",
                particle: { jp: ruby("に") },
                example: { jp: ruby("に") },
              },
            },
            {
              id: "guide-2",
              cells: {
                question: "¿Dónde hago la acción?",
                verb: "acción",
                particle: { jp: ruby("で") },
                example: { jp: ruby("で") },
              },
            },
            {
              id: "guide-3",
              cells: {
                question: "¿A dónde voy / vengo / vuelvo?",
                verb: "movimiento",
                particle: { jp: ruby("に / へ") },
                example: { jp: ruby("に / へ") },
              },
            },
          ],
          zebra: true,
        },
      ],
    },
    {
      id: "lesson-021-vocabulary",
      kind: "vocabulary",
      title: "Vocabulario útil para este まとめ",
      description:
        "Aquí mezclamos lugares, objetos y personas que ayudan a construir contrastes nuevos sin depender siempre de los mismos sustantivos de las lessons anteriores.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 4,
          items: [
            { id: "v021-shopping-street", jp: ruby("[商店街|しょうてんがい]"), reading: "しょうてんがい", meaning: "calle comercial / galería", tags: ["lugar"] },
            { id: "v021-flower-shop", jp: ruby("[花屋|はなや]"), reading: "はなや", meaning: "florería", tags: ["lugar"] },
            { id: "v021-community-center", jp: ruby("[公民館|こうみんかん]"), reading: "こうみんかん", meaning: "centro comunitario", tags: ["lugar"] },
            { id: "v021-police-box", jp: ruby("[交番|こうばん]"), reading: "こうばん", meaning: "kōban / caseta policial", tags: ["lugar"] },

            { id: "v021-exhibition-room", jp: ruby("[展示室|てんじしつ]"), reading: "てんじしつ", meaning: "sala de exposición", tags: ["lugar"] },
            { id: "v021-observation-deck", jp: ruby("[展望台|てんぼうだい]"), reading: "てんぼうだい", meaning: "mirador", tags: ["lugar"] },
            { id: "v021-greenhouse", jp: ruby("[温室|おんしつ]"), reading: "おんしつ", meaning: "invernadero", tags: ["lugar"] },
            { id: "v021-rooftop", jp: ruby("[屋上|おくじょう]"), reading: "おくじょう", meaning: "azotea / terraza superior", tags: ["lugar"] },

            { id: "v021-parking", jp: ruby("[駐車場|ちゅうしゃじょう]"), reading: "ちゅうしゃじょう", meaning: "estacionamiento", tags: ["lugar"] },
            { id: "v021-information-desk", jp: ruby("[案内所|あんないじょ]"), reading: "あんないじょ", meaning: "oficina de información", tags: ["lugar"] },
            { id: "v021-reading-room", jp: ruby("[閲覧室|えつらんしつ]"), reading: "えつらんしつ", meaning: "sala de lectura", tags: ["lugar"] },
            { id: "v021-square", jp: ruby("[広場|ひろば]"), reading: "ひろば", meaning: "plaza / explanada", tags: ["lugar"] },

            { id: "v021-vending-machine", jp: ruby("[自動販売機|じどうはんばいき]"), reading: "じどうはんばいき", meaning: "máquina expendedora", tags: ["objeto"] },
            { id: "v021-bench", jp: ruby("ベンチ"), reading: "べんち", meaning: "banca / banco", tags: ["objeto"] },
            { id: "v021-pamphlet", jp: ruby("パンフレット"), reading: "ぱんふれっと", meaning: "folleto", tags: ["objeto"] },
            { id: "v021-binoculars", jp: ruby("[双眼鏡|そうがんきょう]"), reading: "そうがんきょう", meaning: "binoculares", tags: ["objeto"] },

            { id: "v021-sketchbook", jp: ruby("[画用紙|がようし]"), reading: "がようし", meaning: "papel para dibujo", tags: ["objeto"] },
            { id: "v021-model", jp: ruby("[模型|もけい]"), reading: "もけい", meaning: "maqueta / modelo", tags: ["objeto"] },
            { id: "v021-message", jp: ruby("[伝言|でんごん]"), reading: "でんごん", meaning: "recado / mensaje verbal", tags: ["objeto"] },
            { id: "v021-ticket-gate-pass", jp: ruby("パスケース"), reading: "ぱすけーす", meaning: "porta tarjetas / porta pase", tags: ["objeto"] },

            { id: "v021-security-guard", jp: ruby("[警備員|けいびいん]"), reading: "けいびいん", meaning: "guardia de seguridad", tags: ["persona"] },
            { id: "v021-police-officer", jp: ruby("[警察官|けいさつかん]"), reading: "けいさつかん", meaning: "policía", tags: ["persona"] },
            { id: "v021-staff", jp: ruby("スタッフ"), reading: "すたっふ", meaning: "staff / personal", tags: ["persona"] },
            { id: "v021-neighbor", jp: ruby("[近所|きんじょ]の[人|ひと]"), reading: "きんじょのひと", meaning: "vecino / persona del barrio", tags: ["persona"] },

            { id: "v021-monorail", jp: ruby("モノレール"), reading: "ものれーる", meaning: "monorriel", tags: ["transporte"] },
            { id: "v021-ferry", jp: ruby("フェリー"), reading: "ふぇりー", meaning: "ferri", tags: ["transporte"] },
            { id: "v021-bicycle", jp: ruby("[自転車|じてんしゃ]"), reading: "じてんしゃ", meaning: "bicicleta", tags: ["transporte"] },
            { id: "v021-limousine-bus", jp: ruby("リムジンバス"), reading: "りむじんばす", meaning: "bus aeropuerto / limousine bus", tags: ["transporte"] },
          ],
        },
      ],
    },
    {
      id: "lesson-021-examples",
      kind: "examples",
      title: "Mini escenas de contraste",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "ex-021-1",
              jp: ruby("[町|まち]に[図書館|としょかん]があります。[今日|きょう]はその[図書館|としょかん]で[勉強|べんきょう]します。[明日|あした]も[図書館|としょかん]に[行|い]きます。"),
              es: "En la ciudad hay una biblioteca. Hoy estudio en esa biblioteca. Mañana también voy a la biblioteca.",
              notes: [
                {
                  es: "Este es el patrón base de toda la unidad: el mismo lugar con に, luego con で y luego con に otra vez como destino.",
                },
              ],
            },
            {
              id: "ex-021-2",
              jp: ruby("[学校|がっこう]に[体育館|たいいくかん]があります。[放課後|ほうかご]、[体育館|たいいくかん]でバドミントンを[練習|れんしゅう]します。[土曜日|どようび]も[友達|ともだち]と[体育館|たいいくかん]へ[行|い]きます。"),
              es: "En la escuela hay un gimnasio. Después de clases practico bádminton en el gimnasio. El sábado también voy al gimnasio con amigos.",
            },
            {
              id: "ex-021-3",
              jp: ruby("[駅|えき]の[前|まえ]に[喫茶店|きっさてん]があります。[兄|あに]はその[喫茶店|きっさてん]で[新聞|しんぶん]を[読|よ]みます。[私|わたし]はあとでそこに[来|き]ます。"),
              es: "Frente a la estación hay una cafetería. Mi hermano lee el diario en esa cafetería. Yo voy a venir allí más tarde.",
            },
            {
              id: "ex-021-4",
              jp: ruby("[空港|くうこう]に[父|ちち]がいます。[私|わたし]は[空港|くうこう]で[父|ちち]に[会|あ]います。[来月|らいげつ]、[母|はは]と[一緒|いっしょ]に[空港|くうこう]へ[行|い]きます。"),
              es: "Mi padre está en el aeropuerto. En el aeropuerto me encuentro con mi padre. El próximo mes voy al aeropuerto junto con mi madre.",
            },
            {
              id: "ex-021-5",
              jp: ruby("[博物館|はくぶつかん]に[展示室|てんじしつ]があります。[午後|ごご]、その[展示室|てんじしつ]で[模型|もけい]を[見|み]ます。[日曜日|にちようび]、[親友|しんゆう]と[博物館|はくぶつかん]に[行|い]きます。"),
              es: "En el museo hay una sala de exposición. Por la tarde veo maquetas en esa sala. El domingo voy al museo con mi mejor amigo.",
            },
            {
              id: "ex-021-6",
              jp: ruby("[市役所|しやくしょ]に[案内所|あんないじょ]があります。[私|わたし]は[案内所|あんないじょ]で[申請書|しんせいしょ]を[書|か]きます。[午後|ごご]、もう[一度|いちど][市役所|しやくしょ]に[来|き]ます。"),
              es: "En la municipalidad hay una oficina de información. En esa oficina escribo un formulario. Por la tarde vuelvo a venir una vez más a la municipalidad.",
              notes: [
                {
                  es: "Aquí también se ve el contraste muy limpio entre existencia, acción y movimiento con el mismo lugar base.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-021-contrast",
      kind: "contrast",
      title: "Contrastes que conviene fijar",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-021-1",
              label: "に de existencia vs で de acción vs に / へ de movimiento",
              correct: {
                jp: ruby("[屋上|おくじょう]にベンチがあります。 / [屋上|おくじょう]でパンフレットを[読|よ]みます。 / [屋上|おくじょう]に[行|い]きます。"),
                es: "El lugar es prácticamente el mismo, pero la partícula cambia porque cambia el tipo de verbo.",
              },
              explanation:
                "Este es el contraste más importante del まとめ. Si el verbo es de existencia, el lugar entra con に. Si es de acción, entra con で. Si es de movimiento, el destino entra con に o へ.",
            },
            {
              id: "contrast-021-2",
              label: "に de existencia vs に de destino",
              correct: {
                jp: ruby("[駐車場|ちゅうしゃじょう]にタクシーがあります。 / [駐車場|ちゅうしゃじょう]に[来|き]ます。"),
                es: "La misma partícula puede aparecer dos veces, pero no está haciendo exactamente el mismo trabajo.",
              },
              explanation:
                "En la primera oración, に marca el lugar donde algo existe. En la segunda, marca el destino del movimiento. Por eso conviene mirar primero el verbo.",
            },
            {
              id: "contrast-021-3",
              label: "で de acción vs で de transporte",
              correct: {
                jp: ruby("[公民館|こうみんかん]で[伝言|でんごん]を[書|か]きます。 / モノレールで[公民館|こうみんかん]へ[行|い]きます。"),
                es: "La partícula es la misma, pero una vez marca lugar de acción y otra vez medio de transporte.",
              },
              explanation:
                "Aquí el bloque anterior define la lectura. 公民館 es un lugar donde realizas la acción. モノレール es el medio con que te desplazas.",
            },
            {
              id: "contrast-021-4",
              label: "No todo lugar con に significa movimiento",
              correct: {
                jp: ruby("[交番|こうばん]に[警察官|けいさつかん]がいます。 / [交番|こうばん]に[行|い]きます。"),
                es: "La primera es existencia; la segunda es destino de movimiento.",
              },
              explanation:
                "Muchos estudiantes ven に y asumen que siempre hay desplazamiento. Aquí no. El verbo es el que define la función principal.",
            },
            {
              id: "contrast-021-5",
              label: "Primero el tipo de verbo, después la partícula",
              correct: {
                jp: ruby("[展示室|てんじしつ]があります。 / [展示室|てんじしつ]で[見|み]ます。 / [展示室|てんじしつ]へ[行|い]きます。"),
                es: "Una misma palabra de lugar puede entrar en las tres familias verbales sin problema.",
              },
              explanation:
                "Si cambias primero el verbo y luego decides la partícula, los contrastes empiezan a ordenarse mucho mejor en la cabeza.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-021-practice",
      kind: "practice",
      title: "Práctica guiada antes del quiz",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Toma cinco lugares y escribe tres oraciones para cada uno: una con existencia, una con acción y una con movimiento.",
              jp: ruby("[図書館|としょかん] / [体育館|たいいくかん] / [空港|くうこう] / [公民館|こうみんかん] / [博物館|はくぶつかん]。"),
            },
            {
              es: "Subraya en cada una solo el verbo y decide primero si pertenece a existencia, acción o movimiento.",
              jp: ruby("あります・います / [読|よ]みます・[勉強|べんきょう]します / [行|い]きます・[来|き]ます・[帰|かえ]ります。"),
            },
            {
              es: "Haz después una lista de errores típicos y corrígelos comparando pares como:",
              jp: ruby("[学校|がっこう]に[先生|せんせい]がいます。 / [学校|がっこう]で[勉強|べんきょう]します。 / [学校|がっこう]に[行|い]きます。"),
            },
            {
              es: "Añade también uno o dos ejemplos donde vuelva a aparecer",
              jp: ruby("で"),
              note: "como transporte o como medio, para no pensar que esa partícula solo sirve para el lugar de acción.",
            },
            {
              es: "Cierra el repaso haciendo mini escenas de tres frases con el mismo lugar, igual que en los ejemplos de esta unidad.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-021-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Sé distinguir tres familias verbales grandes:",
              jp: ruby("[存在|そんざい] / [動作|どうさ] / [移動|いどう]。"),
            },
            {
              es: "Sé usar",
              jp: ruby("に"),
              note: "como lugar de existencia con あります・います.",
            },
            {
              es: "Sé usar",
              jp: ruby("で"),
              note: "como lugar de acción con verbos de acción.",
            },
            {
              es: "Sé usar",
              jp: ruby("に / へ"),
              note: "como destino o dirección con verbos de movimiento.",
            },
            {
              es: "Ya no intento elegir la partícula del lugar sin mirar antes el tipo de verbo.",
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-021-quiz",
    title: "Quiz — まとめ: existencia, acción y movimiento",
    description:
      "Repaso grande para distinguir las tres familias verbales y fijar qué partícula del lugar corresponde según la función del verbo en la oración.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "fill-blank",
        prompt: {
          jp: ruby("[町|まち]（　）[図書館|としょかん]があります。"),
        },
        acceptedAnswers: ["に"],
        placeholder: "助詞",
        explanation:
          "Aquí el verbo es あります, así que hablamos de existencia. El lugar entra con に.",
        relatedSectionIds: ["lesson-021-structure", "lesson-021-examples"],
      },
      {
        id: "q2",
        type: "fill-blank",
        prompt: {
          jp: ruby("[図書館|としょかん]（　）[勉強|べんきょう]します。"),
        },
        acceptedAnswers: ["で"],
        placeholder: "助詞",
        explanation:
          "Aquí el verbo es de acción: 勉強します. El lugar donde realizas la acción entra con で.",
        relatedSectionIds: ["lesson-021-structure", "lesson-021-examples"],
      },
      {
        id: "q3",
        type: "fill-blank",
        prompt: {
          jp: ruby("[明日|あした]、[図書館|としょかん]（　）[行|い]きます。"),
        },
        acceptedAnswers: ["に", "へ"],
        placeholder: "助詞",
        explanation:
          "Aquí el verbo es de movimiento. En este nivel, に y へ pueden funcionar ambas como destino o dirección en una frase simple.",
        relatedSectionIds: ["lesson-021-structure", "lesson-021-contrast"],
      },
      {
        id: "q4",
        type: "fill-blank",
        prompt: {
          jp: ruby("[学校|がっこう]（　）[先生|せんせい]がいます。"),
        },
        acceptedAnswers: ["に"],
        placeholder: "助詞",
        explanation:
          "Aquí el verbo es います, así que el lugar de existencia entra con に.",
        relatedSectionIds: ["lesson-021-structure", "lesson-021-contrast"],
      },
      {
        id: "q5",
        type: "fill-blank",
        prompt: {
          jp: ruby("[学校|がっこう]（　）[宿題|しゅくだい]をします。"),
        },
        acceptedAnswers: ["で"],
        placeholder: "助詞",
        explanation:
          "Aquí します funciona como verbo de acción. El lugar de la acción entra con で.",
        relatedSectionIds: ["lesson-021-structure", "lesson-021-contrast"],
      },
      {
        id: "q6",
        type: "fill-blank",
        prompt: {
          jp: ruby("[学校|がっこう]（　）[来|き]ます。"),
        },
        acceptedAnswers: ["に", "へ"],
        placeholder: "助詞",
        explanation:
          "Aquí el verbo es de movimiento: 来ます. En esta unidad se aceptan に y へ como destino o dirección.",
        relatedSectionIds: ["lesson-021-structure", "lesson-021-contrast"],
      },
      {
        id: "q7",
        type: "fill-blank",
        prompt: {
          jp: ruby("[空港|くうこう]（　）[父|ちち]がいます。"),
        },
        acceptedAnswers: ["に"],
        placeholder: "助詞",
        explanation:
          "Aquí el verbo es います, así que hablamos de presencia en un lugar. Por eso entra に.",
        relatedSectionIds: ["lesson-021-examples", "lesson-021-contrast"],
      },
      {
        id: "q8",
        type: "fill-blank",
        prompt: {
          jp: ruby("[空港|くうこう]（　）[父|ちち]に[会|あ]います。"),
        },
        acceptedAnswers: ["で"],
        placeholder: "助詞",
        explanation:
          "Aquí 会います funciona dentro de una escena de acción: el aeropuerto es el lugar donde ocurre el encuentro. Por eso entra で.",
        relatedSectionIds: ["lesson-021-examples", "lesson-021-contrast"],
      },
      {
        id: "q9",
        type: "fill-blank",
        prompt: {
          jp: ruby("[空港|くうこう]（　）[行|い]きます。"),
        },
        acceptedAnswers: ["に", "へ"],
        placeholder: "助詞",
        explanation:
          "Aquí el aeropuerto es destino de movimiento. En este nivel se aceptan に y へ.",
        relatedSectionIds: ["lesson-021-structure", "lesson-021-contrast"],
      },
      {
        id: "q10",
        type: "fill-blank",
        prompt: {
          jp: ruby("[博物館|はくぶつかん]（　）[展示室|てんじしつ]があります。"),
        },
        acceptedAnswers: ["に"],
        placeholder: "助詞",
        explanation:
          "Aquí la sala de exposición existe dentro del museo, así que el lugar entra con に.",
        relatedSectionIds: ["lesson-021-examples", "lesson-021-structure"],
      },
      {
        id: "q11",
        type: "fill-blank",
        prompt: {
          jp: ruby("[展示室|てんじしつ]（　）[模型|もけい]を[見|み]ます。"),
        },
        acceptedAnswers: ["で"],
        placeholder: "助詞",
        explanation:
          "Aquí 見ます es un verbo de acción. El lugar donde realizas la acción entra con で.",
        relatedSectionIds: ["lesson-021-examples", "lesson-021-structure"],
      },
      {
        id: "q12",
        type: "fill-blank",
        prompt: {
          jp: ruby("[日曜日|にちようび]、[博物館|はくぶつかん]（　）[行|い]きます。"),
        },
        acceptedAnswers: ["に", "へ"],
        placeholder: "助詞",
        explanation:
          "Aquí el museo es el destino del movimiento. Por eso se aceptan に y へ.",
        relatedSectionIds: ["lesson-021-examples", "lesson-021-contrast"],
      },
      {
        id: "q13",
        type: "single-choice",
        prompt: {
          jp: ruby("あります は どの グループ ですか。"),
        },
        choices: [
          { id: "a", label: { jp: ruby("[存在|そんざい]の[動詞|どうし]") } },
          { id: "b", label: { jp: ruby("[動作|どうさ]の[動詞|どうし]") } },
          { id: "c", label: { jp: ruby("[移動|いどう]の[動詞|どうし]") } },
          { id: "d", label: { jp: ruby("[道具|どうぐ]の[動詞|どうし]") } },
        ],
        correctChoiceId: "a",
        explanation:
          "あります pertenece a la familia de existencia.",
        relatedSectionIds: ["lesson-021-concept", "lesson-021-summary"],
      },
      {
        id: "q14",
        type: "single-choice",
        prompt: {
          jp: ruby("[読|よ]みます は どの グループ ですか。"),
        },
        choices: [
          { id: "a", label: { jp: ruby("[存在|そんざい]の[動詞|どうし]") } },
          { id: "b", label: { jp: ruby("[動作|どうさ]の[動詞|どうし]") } },
          { id: "c", label: { jp: ruby("[移動|いどう]の[動詞|どうし]") } },
          { id: "d", label: { jp: ruby("[方角|ほうがく]の[動詞|どうし]") } },
        ],
        correctChoiceId: "b",
        explanation:
          "読みます describe una acción [動作|, no existencia ni desplazamiento.",
        relatedSectionIds: ["lesson-021-concept", "lesson-021-summary"],
      },
      {
        id: "q15",
        type: "single-choice",
        prompt: {
          jp: ruby("[帰|かえ]ります は どの グループ ですか。"),
        },
        choices: [
          { id: "a", label: { jp: ruby("[存在|そんざい]の[動詞|どうし]") } },
          { id: "b", label: { jp: ruby("[動作|どうさ]の[動詞|どうし]") } },
          { id: "c", label: { jp: ruby("[移動|いどう]の[動詞|どうし]") } },
          { id: "d", label: { jp: ruby("[説明|せつめい]の[動詞|どうし]") } },
        ],
        correctChoiceId: "c",
        explanation:
          "帰ります pertenece al grupo de verbos de movimiento [移動|.",
        relatedSectionIds: ["lesson-021-concept", "lesson-021-summary"],
      },
      {
        id: "q16",
        type: "single-choice",
        prompt: {
          jp: ruby("[広場|ひろば]___ベンチがあります。 [広場|ひろば]___パンフレットを[読|よ]みます。 [広場|ひろば]___[行|い]きます。"),
          note: "いちばん しぜんな ならび を えらんでください。",
        },
        choices: [
          { id: "a", label: { jp: ruby("に / で / に・へ") } },
          { id: "b", label: { jp: ruby("で / に・へ / で") } },
          { id: "c", label: { jp: ruby("に・へ / に / で") } },
          { id: "d", label: { jp: ruby("で / で / に・へ") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Primero existencia con に, luego acción con で, y al final movimiento con に o へ.",
        relatedSectionIds: ["lesson-021-structure", "lesson-021-contrast"],
      },
      {
        id: "q17",
        type: "single-choice",
        prompt: {
          jp: ruby("[交番|こうばん]___[警察官|けいさつかん]がいます。 [交番|こうばん]___[話|はな]します。 [交番|こうばん]___[来|き]ます。"),
          note: "いちばん しぜんな ならび を えらんでください。",
        },
        choices: [
          { id: "a", label: { jp: ruby("に / で / に・へ") } },
          { id: "b", label: { jp: ruby("で / に・へ / で") } },
          { id: "c", label: { jp: ruby("に・へ / に / で") } },
          { id: "d", label: { jp: ruby("で / で / に・へ") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Otra vez: existencia con に, acción con で y movimiento con に o へ.",
        relatedSectionIds: ["lesson-021-contrast", "lesson-021-summary"],
      },
      {
        id: "q18",
        type: "fill-blank",
        prompt: {
          jp: ruby("モノレール（　）[展望台|てんぼうだい]へ[行|い]きます。"),
        },
        acceptedAnswers: ["で"],
        placeholder: "助詞",
        explanation:
          "Aquí モノレール es el medio de transporte. Por eso entra で.",
        relatedSectionIds: ["lesson-021-concept", "lesson-021-vocabulary"],
      },
      {
        id: "q19",
        type: "fill-blank",
        prompt: {
          jp: ruby("[閲覧室|えつらんしつ]（　）[新聞|しんぶん]を[読|よ]みます。"),
        },
        acceptedAnswers: ["で"],
        placeholder: "助詞",
        explanation:
          "Aquí 閲覧室 es el lugar donde realizas la acción de leer. Por eso entra で.",
        relatedSectionIds: ["lesson-021-concept", "lesson-021-vocabulary"],
      },
      {
        id: "q20",
        type: "fill-blank",
        prompt: {
          jp: ruby("[閲覧室|えつらんしつ]（　）スタッフがいます。"),
        },
        acceptedAnswers: ["に"],
        placeholder: "助詞",
        explanation:
          "Aquí el verbo es います, así que se trata de existencia o presencia en un lugar. Por eso entra に.",
        relatedSectionIds: ["lesson-021-concept", "lesson-021-vocabulary"],
      },
      {
        id: "q21",
        type: "fill-blank",
        prompt: {
          jp: ruby("[夕方|ゆうがた]、[閲覧室|えつらんしつ]（　）[行|い]きます。"),
        },
        acceptedAnswers: ["に", "へ"],
        placeholder: "助詞",
        explanation:
          "Aquí se trata de destino de movimiento. En este nivel se aceptan に y へ.",
        relatedSectionIds: ["lesson-021-concept", "lesson-021-vocabulary"],
      },
    ],
  },
};

export default lesson021;
