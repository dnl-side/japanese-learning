
// src/data/grammar/lessons/lesson-025.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson025: GrammarLesson = {
  id: "lesson-025",
  slug: "fechas-en-uso-periodos-de-tiempo-kara-made",
  order: 30,
  level: "N5",
  status: "ready",
  title: "Fechas en uso y períodos de tiempo",
  jpTitle: "ひづけ・きかん・から・まで",
  shortTitle: "Fechas en uso",
  description:
    "Cómo pasar del calendario a expresiones de tiempo en uso real, distinguir entre fecha y período de tiempo con 日・日間・カ月・年間, usar expresiones como 先週・今週・来週, 先月・今月・来月, 去年・今年・来年, y cerrar el bloque temporal con から / まで para marcar inicio y límite de un periodo.",
  estimatedMinutes: 102,
  categoryTags: ["fundamentos", "tiempo", "calendario", "periodos", "lectura", "integracion"],
  grammarTags: [
    "先週",
    "今週",
    "来週",
    "先月",
    "今月",
    "来月",
    "去年",
    "今年",
    "来年",
    "何日",
    "何日間",
    "何カ月",
    "何年間",
    "から",
    "まで",
  ],
  searchTerms: [
    "date vs duration japanese",
    "from until japanese kara made",
    "what date vs how many days japanese",
    "sengetsu kongetsu raigetsu japanese",
    "去年 今年 来年 japanese lesson",
    "何日 何日間 何カ月 何年間",
    "calendar in use japanese n5",
  ],
  relatedLessonSlugs: [
    "fechas-dias-meses-anos",
    "hora-y-expresiones-horarias-basicas",
    "hora-duracion-y-rutina-basica",
  ],
  relatedVocabularyTags: ["tiempo", "calendario", "periodos", "eventos", "base"],
  objectives: [
    "Distinguir entre fecha de calendario y período de tiempo.",
    "Fijar expresiones relativas de semana, mes y año como 先週・今週・来週, 先月・今月・来月, 去年・今年・来年.",
    "Distinguir preguntas como 何日 y 何日間, 何月 y 何カ月, 何年 y 何年間.",
    "Usar から y まで para marcar inicio y límite de un periodo o rango temporal.",
    "Leer y producir ejemplos reales con vacaciones, festividades, estancias y estudio.",
    "Cerrar el bloque de tiempo antes de pasar a adverbios de tiempo y frecuencia.",
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
      id: "lesson-025-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "La unidad 024 te dejó el calendario como fecha. Ahora vamos a dar el paso que faltaba: usar ese calendario dentro de periodos y rangos de tiempo reales. Aquí distinguirás entre una fecha concreta y una duración, aprenderás expresiones como 先週・今週・来週 y cerrarás el bloque temporal con から / まで.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Primero verás contrastes como:",
              jp: ruby("[1日|ついたち] / [一日|いちにち] / [2日間|ふつかかん]。"),
            },
            {
              es: "Después trabajarás expresiones como:",
              jp: ruby("[先週|せんしゅう] / [今週|こんしゅう] / [来週|らいしゅう] / [先月|せんげつ] / [来年|らいねん]。"),
            },
            {
              es: "Y al final usarás rangos como:",
              jp: ruby("[7月20日|しちがつはつか]から[8月31日|はちがつさんじゅういちにち]までです。"),
            },
          ],
        },
      ],
    },
    {
      id: "lesson-025-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Una fecha y un período de tiempo no hacen el mismo trabajo",
          content:
            "Aquí está la diferencia más importante de la unidad. Una fecha identifica un punto del calendario. Un período de tiempo expresa cuánto dura algo. Aunque a veces la forma visual se parezca, el trabajo que hacen en la oración no es el mismo.",
          bullets: [
            {
              jp: ruby("[1日|ついたち]です。"),
              es: "fecha del calendario",
            },
            {
              jp: ruby("[一日|いちにち][勉強|べんきょう]しました。"),
              es: "duración de un día",
            },
            {
              jp: ruby("[2日間|ふつかかん][旅行|りょこう]しました。"),
              es: "duración de dos días",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Las expresiones relativas organizan el calendario en uso",
          content:
            "Después de aprender fecha completa, ahora toca organizar el tiempo respecto del presente. Aquí entran expresiones como semana pasada, esta semana y próxima semana; mes pasado, este mes y próximo mes; año pasado, este año y próximo año.",
          bullets: [
            {
              jp: ruby("[先週|せんしゅう] / [今週|こんしゅう] / [来週|らいしゅう]"),
              es: "semanas relativas",
            },
            {
              jp: ruby("[先月|せんげつ] / [今月|こんげつ] / [来月|らいげつ]"),
              es: "meses relativos",
            },
            {
              jp: ruby("[去年|きょねん] / [今年|ことし] / [来年|らいねん]"),
              es: "años relativos",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "から y まで cierran el bloque temporal",
          content:
            "Aquí から marca el punto de inicio y まで marca el límite. Pueden aparecer con horas, fechas, días de la semana, meses o expresiones relativas de tiempo.",
          bullets: [
            {
              jp: ruby("[月曜日|げつようび]から[金曜日|きんようび]までです。"),
              es: "de lunes a viernes",
            },
            {
              jp: ruby("[7月20日|しちがつはつか]から[8月31日|はちがつさんじゅういちにち]までです。"),
              es: "de 20 de julio a 31 de agosto",
            },
            {
              jp: ruby("[去年|きょねん]から[今年|ことし]まで[日本語|にほんご]を[勉強|べんきょう]しました。"),
              es: "desde el año pasado hasta este año",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Las preguntas cambian según preguntes calendario o duración",
          content:
            "Aquí conviene decidir primero si preguntas por una parte del calendario o por la extensión de un periodo. Esa decisión cambia la forma correcta de la pregunta.",
          bullets: [
            {
              jp: ruby("[何日|なんにち]ですか。"),
              es: "qué día del mes",
            },
            {
              jp: ruby("[何日間|なんにちかん]ですか。"),
              es: "cuántos días dura",
            },
            {
              jp: ruby("[何月|なんがつ]ですか。 / [何カ月|なんかげつ]ですか。 / [何年|なんねん]ですか。 / [何年間|なんねんかん]ですか。"),
              es: "calendario vs duración",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-025-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-025-1",
              label: "Semana, mes y año relativos",
              pattern: ruby("[先週|せんしゅう] / [今週|こんしゅう] / [来週|らいしゅう] / [先月|せんげつ] / [今月|こんげつ] / [来月|らいげつ] / [去年|きょねん] / [今年|ことし] / [来年|らいねん]"),
              meaning: "Semana / mes / año relativos al presente",
              translation:
                "Estas expresiones no dan una fecha exacta, pero ubican un bloque completo de tiempo en relación con el presente.",
              structure: [
                {
                  slot: { jp: ruby("[先週|せんしゅう] / [今週|こんしゅう] / [来週|らいしゅう]") },
                  value: "semanas relativas",
                  note: "Sirven para ubicar actividades por semana.",
                },
                {
                  slot: { jp: ruby("[先月|せんげつ] / [今月|こんげつ] / [来月|らいげつ]") },
                  value: "meses relativos",
                  note: "Sirven para ubicar actividades por mes.",
                },
                {
                  slot: { jp: ruby("[去年|きょねん] / [今年|ことし] / [来年|らいねん]") },
                  value: "años relativos",
                  note: "Sirven para ubicar actividades por año.",
                },
              ],
              notes: [
                "Aquí no necesitas fecha exacta para ubicar el tiempo.",
              ],
            },
            {
              id: "pattern-025-2",
              label: "Fecha vs duración en días",
              pattern: ruby("[1日|ついたち] / [一日|いちにち] / X[日間|にちかん]"),
              meaning: "Fecha del calendario vs duración de uno o varios días",
              translation:
                "Aquí aparece una diferencia que conviene fijar muy pronto. 1日 puede ser fecha del calendario con lectura ついたち. En cambio, 一日 funciona como periodo de un día. Para varias jornadas, esta ruta trabajará con 日間 para que la diferencia quede clara.",
              structure: [
                {
                  slot: { jp: ruby("[1日|ついたち]") },
                  value: "primer día del mes",
                  note: "Fecha del calendario.",
                },
                {
                  slot: { jp: ruby("[一日|いちにち]") },
                  value: "un día completo",
                  note: "Duración de un día.",
                },
                {
                  slot: { jp: ruby("[2日間|ふつかかん] / [3日間|みっかかん]") },
                  value: "periodo de varios días",
                  note: "Duración expresada como bloque temporal.",
                },
              ],
              notes: [
                "Aquí conviene usar 日間 al inicio para que la diferencia entre fecha y duración se vea mejor.",
              ],
            },
            {
              id: "pattern-025-3",
              label: "Mes y año como calendario vs duración",
              pattern: ruby("[何月|なんがつ] / [何カ月|なんかげつ] / [何年|なんねん] / [何年間|なんねんかん]"),
              meaning: "Mes o año del calendario vs duración en meses o años",
              translation:
                "Aquí también cambia el tipo de pregunta según quieras saber una posición del calendario o la duración de un periodo.",
              structure: [
                {
                  slot: { jp: ruby("[何月|なんがつ]") },
                  value: "qué mes",
                  note: "Parte del calendario.",
                },
                {
                  slot: { jp: ruby("[何カ月|なんかげつ]") },
                  value: "cuántos meses",
                  note: "Duración en meses.",
                },
                {
                  slot: { jp: ruby("[何年|なんねん]") },
                  value: "qué año",
                  note: "Parte del calendario.",
                },
                {
                  slot: { jp: ruby("[何年間|なんねんかん]") },
                  value: "cuántos años",
                  note: "Duración en años.",
                },
              ],
              notes: [
                "Aquí la diferencia principal sigue siendo calendario vs duración.",
              ],
            },
            {
              id: "pattern-025-4",
              label: "Desde / hasta",
              pattern: ruby("AからBまで"),
              meaning: "Desde A hasta B",
              translation:
                "Este patrón completa muy bien el bloque temporal. A marca inicio y B marca límite.",
              structure: [
                {
                  slot: "A",
                  value: "inicio",
                  note: {
                    es: "Puede ser una fecha, un día, una hora o un bloque temporal como:",
                    jp: ruby("[月曜日|げつようび] / [7月20日|しちがつはつか] / [先月|せんげつ] / [去年|きょねん]。"),
                  },
                },
                {
                  slot: { jp: ruby("から") },
                  value: "desde",
                  note: "Marca el punto de partida.",
                },
                {
                  slot: "B",
                  value: "límite",
                  note: {
                    es: "Puede ser otra fecha, día o bloque temporal como:",
                    jp: ruby("[金曜日|きんようび] / [8月31日|はちがつさんじゅういちにち] / [今月|こんげつ] / [今年|ことし]。"),
                  },
                },
                {
                  slot: { jp: ruby("まで") },
                  value: "hasta",
                  note: "Marca el punto de cierre.",
                },
              ],
              notes: [
                "Este patrón puede aparecer tanto en frases nominales como dentro de una oración verbal.",
              ],
            },
            {
              id: "pattern-025-5",
              label: "Preguntas útiles de esta unidad",
              pattern: ruby("[何日|なんにち]ですか。 / [何日間|なんにちかん]ですか。 / [何カ月|なんかげつ]ですか。 / [何年間|なんねんかん]ですか。"),
              meaning: "¿Qué fecha? / ¿Cuántos días? / ¿Cuántos meses? / ¿Cuántos años?",
              translation:
                "Estas preguntas te permiten pasar del calendario al uso real de periodos temporales.",
              structure: [
                {
                  slot: { jp: ruby("[何日|なんにち]") },
                  value: "día del mes",
                  note: "Pregunta de calendario.",
                },
                {
                  slot: { jp: ruby("[何日間|なんにちかん]") },
                  value: "cuántos días dura",
                  note: "Pregunta por duración.",
                },
                {
                  slot: { jp: ruby("[何カ月|なんかげつ]") },
                  value: "cuántos meses dura",
                  note: "Duración en meses.",
                },
                {
                  slot: { jp: ruby("[何年間|なんねんかん]") },
                  value: "cuántos años dura",
                  note: "Duración en años.",
                },
              ],
              notes: [
                "Aquí la forma de la pregunta ya te obliga a decidir qué tipo de tiempo estás tratando.",
              ],
            },
          ],
        },
        {
          type: "table",
          title: "Expresiones relativas de calendario",
          description:
            "Aquí el objetivo es fijar de forma visual las expresiones que ordenan el tiempo respecto del presente.",
          columns: [
            { key: "group", label: "Grupo", width: "18%" },
            { key: "jp", label: "Forma", width: "40%" },
            { key: "es", label: "Uso", width: "42%" },
          ],
          rows: [
            {
              id: "rel-week",
              cells: {
                group: "semana",
                jp: { jp: ruby("[先週|せんしゅう] / [今週|こんしゅう] / [来週|らいしゅう]") },
                es: "semana pasada / esta semana / próxima semana",
              },
            },
            {
              id: "rel-month",
              cells: {
                group: "mes",
                jp: { jp: ruby("[先月|せんげつ] / [今月|こんげつ] / [来月|らいげつ]") },
                es: "mes pasado / este mes / próximo mes",
              },
            },
            {
              id: "rel-year",
              cells: {
                group: "año",
                jp: { jp: ruby("[去年|きょねん] / [今年|ことし] / [来年|らいねん]") },
                es: "año pasado / este año / próximo año",
              },
            },
          ],
          zebra: true,
        },
        {
          type: "table",
          title: "Calendario vs duración",
          description:
            "Aquí el foco es ver con claridad qué forma pertenece al calendario y cuál expresa duración.",
          columns: [
            { key: "calendar", label: "Calendario", width: "28%" },
            { key: "duration", label: "Duración", width: "32%" },
            { key: "idea", label: "Diferencia", width: "40%" },
          ],
          rows: [
            {
              id: "cal-dur-day",
              cells: {
                calendar: { jp: ruby("[1日|ついたち] / [何日|なんにち]") },
                duration: { jp: ruby("[一日|いちにち] / [何日間|なんにちかん]") },
                idea: "día del mes vs un día / varios días de duración",
              },
            },
            {
              id: "cal-dur-month",
              cells: {
                calendar: { jp: ruby("[何月|なんがつ] / [7月|しちがつ]") },
                duration: { jp: ruby("[何カ月|なんかげつ] / [3カ月|さんかげつ]") },
                idea: "mes del calendario vs duración en meses",
              },
            },
            {
              id: "cal-dur-year",
              cells: {
                calendar: { jp: ruby("[何年|なんねん] / [2026年|にせんにじゅうろくねん]") },
                duration: { jp: ruby("[何年間|なんねんかん] / [2年間|にねんかん]") },
                idea: "año del calendario vs duración en años",
              },
            },
          ],
          zebra: true,
        },
      ],
    },
    {
      id: "lesson-025-vocabulary",
      kind: "vocabulary",
      title: "Vocabulario útil para esta unidad",
      description:
        "Aquí el núcleo del vocabulario no son objetos nuevos, sino expresiones que organizan el calendario y los periodos de tiempo.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 4,
          items: [
            { id: "v025-last-week", jp: ruby("[先週|せんしゅう]"), reading: "せんしゅう", meaning: "la semana pasada", tags: ["tiempo", "base"] },
            { id: "v025-this-week", jp: ruby("[今週|こんしゅう]"), reading: "こんしゅう", meaning: "esta semana", tags: ["tiempo", "base"] },
            { id: "v025-next-week", jp: ruby("[来週|らいしゅう]"), reading: "らいしゅう", meaning: "la próxima semana", tags: ["tiempo", "base"] },
            { id: "v025-last-month", jp: ruby("[先月|せんげつ]"), reading: "せんげつ", meaning: "el mes pasado", tags: ["tiempo", "base"] },

            { id: "v025-this-month", jp: ruby("[今月|こんげつ]"), reading: "こんげつ", meaning: "este mes", tags: ["tiempo", "base"] },
            { id: "v025-next-month", jp: ruby("[来月|らいげつ]"), reading: "らいげつ", meaning: "el próximo mes", tags: ["tiempo", "base"] },
            { id: "v025-last-year", jp: ruby("[去年|きょねん]"), reading: "きょねん", meaning: "el año pasado", tags: ["tiempo", "base"] },
            { id: "v025-this-year", jp: ruby("[今年|ことし]"), reading: "ことし", meaning: "este año", tags: ["tiempo", "base"] },

            { id: "v025-next-year", jp: ruby("[来年|らいねん]"), reading: "らいねん", meaning: "el próximo año", tags: ["tiempo", "base"] },
            { id: "v025-how-many-days", jp: ruby("[何日間|なんにちかん]"), reading: "なんにちかん", meaning: "cuántos días", tags: ["pregunta", "base"] },
            { id: "v025-how-many-months", jp: ruby("[何カ月|なんかげつ]"), reading: "なんかげつ", meaning: "cuántos meses", tags: ["pregunta", "base"] },
            { id: "v025-how-many-years", jp: ruby("[何年間|なんねんかん]"), reading: "なんねんかん", meaning: "cuántos años", tags: ["pregunta", "base"] },

            { id: "v025-from", jp: ruby("から"), reading: "から", meaning: "desde", tags: ["tiempo", "base"] },
            { id: "v025-until", jp: ruby("まで"), reading: "まで", meaning: "hasta", tags: ["tiempo", "base"] },
            { id: "v025-summer-vacation", jp: ruby("[夏休み|なつやすみ]"), reading: "なつやすみ", meaning: "vacaciones de verano", tags: ["evento"] },
            { id: "v025-stay", jp: ruby("[滞在|たいざい]"), reading: "たいざい", meaning: "estadía / estancia", tags: ["evento"] },
          ],
        },
      ],
    },
    {
      id: "lesson-025-examples",
      kind: "examples",
      title: "Ejemplos guiados y textos modelo",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "ex-025-1",
              jp: ruby("[1日|ついたち]です。"),
              es: "Es el día 1 del mes.",
            },
            {
              id: "ex-025-2",
              jp: ruby("[一日|いちにち][勉強|べんきょう]しました。"),
              es: "Estudié un día entero.",
              notes: [
                {
                  es: "Aquí ya no hablas del calendario, sino de una duración.",
                },
              ],
            },
            {
              id: "ex-025-3",
              jp: ruby("[2日間|ふつかかん][旅行|りょこう]しました。"),
              es: "Viajé durante dos días.",
            },
            {
              id: "ex-025-4",
              jp: ruby("[3カ月|さんかげつ][日本語|にほんご]を[勉強|べんきょう]しました。"),
              es: "Estudié japonés durante tres meses.",
            },
            {
              id: "ex-025-5",
              jp: ruby("[2年間|にねんかん][日本|にほん]で[仕事|しごと]をしました。"),
              es: "Trabajé en Japón durante dos años.",
            },
            {
              id: "ex-025-6",
              jp: ruby("[先週|せんしゅう]は[図書館|としょかん]で[勉強|べんきょう]しました。"),
              es: "La semana pasada estudié en la biblioteca.",
            },
            {
              id: "ex-025-7",
              jp: ruby("[来月|らいげつ][日本|にほん]へ[行|い]きます。"),
              es: "El próximo mes voy a Japón.",
            },
            {
              id: "ex-025-8",
              jp: ruby("[去年|きょねん]から[今年|ことし]まで[日本語|にほんご]を[勉強|べんきょう]しました。"),
              es: "Estudié japonés desde el año pasado hasta este año.",
            },
            {
              id: "ex-025-9",
              jp: ruby("[夏休み|なつやすみ]は[7月20日|しちがつはつか]から[8月31日|はちがつさんじゅういちにち]までです。"),
              es: "Las vacaciones de verano son del 20 de julio al 31 de agosto.",
            },
            {
              id: "ex-025-10",
              jp: ruby("クリスマスは[12月25日|じゅうにがつにじゅうごにち]です。"),
              es: "Navidad es el 25 de diciembre.",
            },
            {
              id: "ex-025-11",
              jp: ruby("バレンタインデーは[2月14日|にがつじゅうよっか]です。"),
              es: "San Valentín es el 14 de febrero.",
            },
            {
              id: "ex-025-12",
              jp: ruby("[七夕|たなばた]は[7月7日|しちがつなのか]です。"),
              es: "Tanabata es el 7 de julio.",
            },
            {
              id: "ex-025-13",
              jp: ruby("こどもの[日|ひ]は[5月5日|ごがついつか]です。"),
              es: "El Día del Niño es el 5 de mayo.",
            },
            {
              id: "ex-025-14",
              jp: ruby("ひな[祭り|まつり]は[3月3日|さんがつみっか]です。"),
              es: "Hinamatsuri es el 3 de marzo.",
            },
          ],
        },
        {
          type: "example-group",
          items: [
            {
              id: "text-025-1",
              jp: ruby("[林|はやし]さんの[夏休み|なつやすみ]は[7月20日|しちがつはつか]から[8月31日|はちがつさんじゅういちにち]までです。[先月|せんげつ]は[毎日|まいにち][会社|かいしゃ]へ[行|い]きましたが、[今月|こんげつ]は[二日間|ふつかかん][旅行|りょこう]しました。[来月|らいげつ]は[三日間|みっかかん][家|いえ]で[休|やす]みます。"),
              es: "Texto modelo con fechas, duración y から / まで.",
            },
            {
              id: "text-025-2",
              jp: ruby("[中野|なかの]さんは[去年|きょねん]から[今年|ことし]まで[日本語|にほんご]を[勉強|べんきょう]しました。[大学|だいがく]では[四カ月|よんかげつ][日本|にほん]に[滞在|たいざい]しました。[来年|らいねん]も[二カ月|にかげつ]ぐらい[日本|にほん]へ[行|い]きます。"),
              es: "Texto modelo con periodos de meses y años.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-025-contrast",
      kind: "contrast",
      title: "Contrastes que conviene fijar",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-025-1",
              label: "1日 vs 一日",
              correct: {
                jp: ruby("[1日|ついたち] / [一日|いちにち]"),
                es: "La primera es fecha de calendario; la segunda es duración.",
              },
              explanation:
                "Aquí está una de las confusiones más típicas. Se parecen visualmente, pero no hacen el mismo trabajo.",
            },
            {
              id: "contrast-025-2",
              label: "何日 vs 何日間",
              correct: {
                jp: ruby("[何日|なんにち]ですか。 / [何日間|なんにちかん]ですか。"),
                es: "Una pregunta pide fecha y la otra pide duración.",
              },
              explanation:
                "Antes de responder, decide si te preguntan calendario o periodo.",
            },
            {
              id: "contrast-025-3",
              label: "何月 vs 何カ月",
              correct: {
                jp: ruby("[何月|なんがつ]ですか。 / [何カ月|なんかげつ]ですか。"),
                es: "Una pregunta pide mes del calendario y la otra duración en meses.",
              },
              explanation:
                "Aquí la forma visual ayuda mucho a separar el bloque de tiempo.",
            },
            {
              id: "contrast-025-4",
              label: "何年 vs 何年間",
              correct: {
                jp: ruby("[何年|なんねん]ですか。 / [何年間|なんねんかん]ですか。"),
                es: "Una pregunta pide año calendario y la otra duración en años.",
              },
              explanation:
                "El patrón se mantiene igual: calendario frente a duración.",
            },
            {
              id: "contrast-025-5",
              label: "Fecha aislada vs rango temporal",
              correct: {
                jp: ruby("クリスマスは[12月25日|じゅうにがつにじゅうごにち]です。 / [夏休み|なつやすみ]は[7月20日|しちがつはつか]から[8月31日|はちがつさんじゅういちにち]までです。"),
                es: "Una oración da una fecha y la otra un periodo completo.",
              },
              explanation:
                "Aquí から / まで convierten la fecha en un rango temporal.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-025-warning",
      kind: "warning",
      title: "Qué conviene vigilar",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "No mezcles calendario con duración solo porque las formas se parezcan",
          content:
            "En esta unidad el error más típico es mirar solo la forma visual y olvidar el trabajo que hace dentro de la oración. Otro error frecuente es usar から sin cerrar con まで cuando el contexto claramente pide un rango completo.",
          bullets: [
            {
              jp: ruby("[1日|ついたち] / [一日|いちにち]"),
              es: "una cosa es fecha y otra cosa es un día como duración",
            },
            {
              jp: ruby("[何月|なんがつ] / [何カ月|なんかげつ]"),
              es: "una cosa es mes del calendario y otra duración en meses",
            },
            {
              jp: ruby("[7月20日|しちがつはつか]から[8月31日|はちがつさんじゅういちにち]まで"),
              es: "si abres un rango temporal, aquí conviene cerrarlo bien",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-025-practice",
      kind: "practice",
      title: "Práctica guiada antes del quiz",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Primero responde preguntas de calendario como:",
              jp: ruby("[何日|なんにち]ですか。 / [何月|なんがつ]ですか。 / [何年|なんねん]ですか。"),
            },
            {
              es: "Después pasa a preguntas de duración como:",
              jp: ruby("[何日間|なんにちかん]ですか。 / [何カ月|なんかげつ]ですか。 / [何年間|なんねんかん]ですか。"),
            },
            {
              es: "Repite fechas conocidas usando eventos como:",
              jp: ruby("[誕生日|たんじょうび] / クリスマス / バレンタインデー / [七夕|たなばた]。"),
            },
            {
              es: "Practica rangos temporales con",
              jp: ruby("から / まで"),
              note: "usando fechas, días de la semana y bloques como 先週・今月・来年.",
            },
            {
              es: "Y cierra escribiendo un mini texto sobre vacaciones, estudio o estancia usando una fecha y una duración.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-025-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Puedo distinguir entre fecha de calendario y período de tiempo.",
            },
            {
              es: "Puedo usar",
              jp: ruby("[先週|せんしゅう] / [今週|こんしゅう] / [来週|らいしゅう] / [先月|せんげつ] / [今月|こんげつ] / [来月|らいげつ] / [去年|きょねん] / [今年|ことし] / [来年|らいねん]"),
              note: "para ubicar el tiempo respecto del presente.",
            },
            {
              es: "Puedo distinguir preguntas como",
              jp: ruby("[何日|なんにち] / [何日間|なんにちかん] / [何月|なんがつ] / [何カ月|なんかげつ] / [何年|なんねん] / [何年間|なんねんかん]。"),
            },
            {
              es: "Puedo usar",
              jp: ruby("から / まで"),
              note: "para marcar inicio y límite de un periodo.",
            },
            {
              es: "Ya puedo leer y producir ejemplos con fechas reales y duraciones.",
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-025-quiz",
    title: "Quiz — Fechas en uso y períodos de tiempo",
    description:
      "Repaso de calendario en uso, duración de días/meses/años y rangos temporales con から / まで. Aquí el foco principal es distinguir qué es fecha y qué es período.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "fill-blank",
        prompt: {
          es: "Completa con la expresión correcta:",
          jp: ruby("___はテストがあります。"),
          note: "La idea es: esta semana.",
        },
        acceptedAnswers: ["今週", "こんしゅう"],
        placeholder: "Escribe la expresión",
        explanation:
          "Aquí la forma correcta es 今週, porque la idea es 'esta semana'.",
        relatedSectionIds: ["lesson-025-structure", "lesson-025-vocabulary"],
      },
      {
        id: "q2",
        type: "fill-blank",
        prompt: {
          es: "Completa con la expresión correcta:",
          jp: ruby("___[日本|にほん]へ[行|い]きます。"),
          note: "La idea es: el próximo mes.",
        },
        acceptedAnswers: ["来月", "らいげつ"],
        placeholder: "Escribe la expresión",
        explanation:
          "Aquí la forma correcta es 来月.",
        relatedSectionIds: ["lesson-025-structure", "lesson-025-vocabulary"],
      },
      {
        id: "q3",
        type: "fill-blank",
        prompt: {
          es: "Completa con la expresión correcta:",
          jp: ruby("___から[今年|ことし]まで[勉強|べんきょう]しました。"),
          note: "La idea es: desde el año pasado.",
        },
        acceptedAnswers: ["去年", "きょねん"],
        placeholder: "Escribe la expresión",
        explanation:
          "Aquí la pareja natural es 去年から今年まで.",
        relatedSectionIds: ["lesson-025-structure", "lesson-025-examples"],
      },
      {
        id: "q4",
        type: "fill-blank",
        prompt: {
          es: "Completa con la pregunta correcta:",
          jp: ruby("___ですか。"),
          note: "La idea es: ¿qué día del mes es?",
        },
        acceptedAnswers: ["何日", "なんにち"],
        placeholder: "Escribe la expresión",
        explanation:
          "Si preguntas por el día del mes, aquí usas 何日.",
        relatedSectionIds: ["lesson-025-structure", "lesson-025-contrast"],
      },
      {
        id: "q5",
        type: "fill-blank",
        prompt: {
          es: "Completa con la pregunta correcta:",
          jp: ruby("___ですか。"),
          note: "La idea es: ¿cuántos días dura?",
        },
        acceptedAnswers: ["何日間", "なんにちかん"],
        placeholder: "Escribe la expresión",
        explanation:
          "Si preguntas por duración en días, aquí usas 何日間.",
        relatedSectionIds: ["lesson-025-structure", "lesson-025-contrast"],
      },
      {
        id: "q6",
        type: "fill-blank",
        prompt: {
          es: "Completa con la forma correcta:",
          jp: ruby("[1日|ついたち]です。 / ___[勉強|べんきょう]しました。"),
          note: "La segunda parte significa: estudié un día entero.",
        },
        acceptedAnswers: ["一日", "いちにち"],
        placeholder: "Escribe la palabra",
        explanation:
          "Aquí la duración de un día se expresa como 一日, no como 1日 de calendario.",
        relatedSectionIds: ["lesson-025-structure", "lesson-025-contrast"],
      },
      {
        id: "q7",
        type: "fill-blank",
        prompt: {
          es: "Completa con la pregunta correcta:",
          jp: ruby("___[日本語|にほんご]を[勉強|べんきょう]しましたか。"),
          note: "La idea es: ¿cuántos meses estudiaste japonés?",
        },
        acceptedAnswers: ["何カ月", "なんかげつ"],
        placeholder: "Escribe la expresión",
        explanation:
          "Aquí preguntas duración en meses, por eso entra 何カ月.",
        relatedSectionIds: ["lesson-025-structure", "lesson-025-contrast"],
      },
      {
        id: "q8",
        type: "fill-blank",
        prompt: {
          es: "Completa con la pregunta correcta:",
          jp: ruby("___[日本|にほん]で[仕事|しごと]をしましたか。"),
          note: "La idea es: ¿durante cuántos años trabajaste en Japón?",
        },
        acceptedAnswers: ["何年間", "なんねんかん"],
        placeholder: "Escribe la expresión",
        explanation:
          "Aquí la pregunta va por duración en años, por eso entra 何年間.",
        relatedSectionIds: ["lesson-025-structure", "lesson-025-contrast"],
      },
      {
        id: "q9",
        type: "fill-blank",
        prompt: {
          es: "Completa la partícula correcta:",
          jp: ruby("[7月20日|しちがつはつか]___[8月31日|はちがつさんじゅういちにち]までです。"),
        },
        acceptedAnswers: ["から"],
        placeholder: "助詞",
        explanation:
          "Aquí から marca el inicio del rango temporal.",
        relatedSectionIds: ["lesson-025-structure", "lesson-025-examples"],
      },
      {
        id: "q10",
        type: "fill-blank",
        prompt: {
          es: "Completa la partícula correcta:",
          jp: ruby("[月曜日|げつようび]から[金曜日|きんようび]___です。"),
        },
        acceptedAnswers: ["まで"],
        placeholder: "助詞",
        explanation:
          "Aquí まで marca el límite del rango temporal.",
        relatedSectionIds: ["lesson-025-structure", "lesson-025-examples"],
      },
      {
        id: "q11",
        type: "single-choice",
        prompt: {
          jp: ruby("[誕生日|たんじょうび]は[何日|なんにち]ですか。"),
          es: "Elige la respuesta más natural.",
        },
        choices: [
          { id: "a", label: { jp: ruby("[二日間|ふつかかん]です。") } },
          { id: "b", label: { jp: ruby("[4日|よっか]です。") } },
          { id: "c", label: { jp: ruby("[4カ月|よんかげつ]です。") } },
          { id: "d", label: { jp: ruby("[来月|らいげつ]です。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "Aquí la pregunta pide el día del mes, no una duración.",
        relatedSectionIds: ["lesson-025-structure", "lesson-025-contrast"],
      },
      {
        id: "q12",
        type: "single-choice",
        prompt: {
          jp: ruby("[日本語|にほんご]を[三カ月|さんかげつ][勉強|べんきょう]しました。"),
          es: "¿Qué idea expresa mejor esta oración?",
        },
        choices: [
          { id: "a", label: { es: "La fecha es marzo." } },
          { id: "b", label: { es: "Estudié japonés durante tres meses." } },
          { id: "c", label: { es: "Estudié japonés el día 3." } },
          { id: "d", label: { es: "Estudié japonés en el año 3." } },
        ],
        correctChoiceId: "b",
        explanation:
          "Aquí 三カ月 expresa duración en meses, no mes del calendario.",
        relatedSectionIds: ["lesson-025-structure", "lesson-025-contrast"],
      },
      {
        id: "q13",
        type: "single-choice",
        prompt: {
          jp: ruby("[夏休み|なつやすみ]は[7月20日|しちがつはつか]から[8月31日|はちがつさんじゅういちにち]までです。"),
          es: "¿Qué idea expresa mejor la oración?",
        },
        choices: [
          { id: "a", label: { es: "Da una sola fecha." } },
          { id: "b", label: { es: "Da una duración aproximada sin límites." } },
          { id: "c", label: { es: "Da un rango temporal completo con inicio y fin." } },
          { id: "d", label: { es: "Pregunta por la fecha." } },
        ],
        correctChoiceId: "c",
        explanation:
          "Aquí aparecen から y まで, así que la oración expresa un rango completo.",
        relatedSectionIds: ["lesson-025-structure", "lesson-025-examples"],
      },
      {
        id: "q14",
        type: "fill-blank",
        prompt: {
          es: "Completa la fecha del evento:",
          jp: ruby("クリスマスは___です。"),
        },
        acceptedAnswers: ["12月25日", "じゅうにがつにじゅうごにち"],
        placeholder: "Escribe la fecha",
        explanation:
          "En esta unidad fijamos Navidad como 12月25日.",
        relatedSectionIds: ["lesson-025-examples"],
      },
      {
        id: "q15",
        type: "fill-blank",
        prompt: {
          es: "Completa la fecha del evento:",
          jp: ruby("[七夕|たなばた]は___です。"),
        },
        acceptedAnswers: ["7月7日", "しちがつなのか"],
        placeholder: "Escribe la fecha",
        explanation:
          "Tanabata se fija aquí como 7月7日.",
        relatedSectionIds: ["lesson-025-examples"],
      },
      {
        id: "q16",
        type: "order-sentence",
        prompt: {
          es: "Ordena la oración correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[夏休み|なつやすみ]は") }, value: "夏休みは" },
          { id: "t2", label: { jp: ruby("[7月20日|しちがつはつか]から") }, value: "7月20日から" },
          { id: "t3", label: { jp: ruby("[8月31日|はちがつさんじゅういちにち]まで") }, value: "8月31日まで" },
          { id: "t4", label: { jp: ruby("です。") }, value: "です。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("[夏休み|なつやすみ]は[7月20日|しちがつはつか]から[8月31日|はちがつさんじゅういちにち]までです。") },
        explanation:
          "Aquí el rango temporal se arma con inicio + から y límite + まで.",
        relatedSectionIds: ["lesson-025-structure", "lesson-025-examples"],
      },
      {
        id: "q17",
        type: "order-sentence",
        prompt: {
          es: "Ordena la oración correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[去年|きょねん]から") }, value: "去年から" },
          { id: "t2", label: { jp: ruby("[今年|ことし]まで") }, value: "今年まで" },
          { id: "t3", label: { jp: ruby("[日本語|にほんご]を") }, value: "日本語を" },
          { id: "t4", label: { jp: ruby("[勉強|べんきょう]しました。") }, value: "勉強しました。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("[去年|きょねん]から[今年|ことし]まで[日本語|にほんご]を[勉強|べんきょう]しました。") },
        explanation:
          "Aquí el rango temporal se combina con una acción verbal.",
        relatedSectionIds: ["lesson-025-structure", "lesson-025-examples"],
      },
      {
        id: "q18",
        type: "fill-blank",
        prompt: {
          es: "Completa con la duración correcta:",
          jp: ruby("[日本|にほん]で___[仕事|しごと]をしました。"),
          note: "La idea es: durante dos años.",
        },
        acceptedAnswers: ["2年間", "二年間", "にねんかん"],
        placeholder: "Escribe la expresión",
        explanation:
          "Aquí la duración en años se expresa como 2年間.",
        relatedSectionIds: ["lesson-025-structure", "lesson-025-contrast"],
      },
      {
        id: "q19",
        type: "fill-blank",
        prompt: {
          es: "Completa con la duración correcta:",
          jp: ruby("[旅行|りょこう]は___でした。"),
          note: "La idea es: fueron dos días.",
        },
        acceptedAnswers: ["2日間", "二日間", "ふつかかん"],
        placeholder: "Escribe la expresión",
        explanation:
          "Aquí la forma natural de esta ruta para la duración es 2日間.",
        relatedSectionIds: ["lesson-025-structure", "lesson-025-contrast"],
      },
      {
        id: "q20",
        type: "single-choice",
        prompt: {
          es: "¿Cuál idea resume mejor el foco de esta unidad?",
        },
        choices: [
          { id: "a", label: { es: "Solo aprender nuevas festividades del calendario." } },
          { id: "b", label: { es: "Distinguir calendario y duración, usar expresiones temporales relativas y cerrar el bloque con から / まで." } },
          { id: "c", label: { es: "Aprender solo adverbios de frecuencia y negativos." } },
          { id: "d", label: { es: "Repetir la unidad de la hora sin cambios." } },
        ],
        correctChoiceId: "b",
        explanation:
          "Ese es el corazón real de la 025: fecha en uso, duración y rangos temporales.",
        relatedSectionIds: ["lesson-025-concept", "lesson-025-summary"],
      },
    ],
  },
};

export default lesson025;
