// src/data/grammar/lessons/lesson-024.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson024: GrammarLesson = {
  id: "lesson-024",
  slug: "fechas-dias-meses-anos",
  order: 29,
  level: "N5",
  status: "ready",
  title: "Fechas y calendario",
  jpTitle: "ひづけ・ようび・がつ・にち・ねん",
  shortTitle: "Fechas",
  description:
    "Cómo leer y escribir fechas en japonés usando días de la semana, meses, días del mes y años, fijando el orden 年→月→日, las preguntas clave como 何曜日・何日・何月・何年・何月何日, y la lectura completa de fechas con números arábigos dentro de escenas reales como cumpleaños y festividades.",
  estimatedMinutes: 98,
  categoryTags: ["fundamentos", "tiempo", "fecha", "calendario", "lectura", "integracion"],
  grammarTags: [
    "日付",
    "曜日",
    "何曜日",
    "何日",
    "何月",
    "何年",
    "何月何日",
    "年",
    "月",
    "日",
    "fecha",
    "calendario",
  ],
  searchTerms: [
    "fechas en japones",
    "dias meses anos japones",
    "nan youbi nan nichi nan gatsu nan nen",
    "como leer 2026年2月28日",
    "calendario japones n5",
    "fecha completa japones",
    "hizuke japanese lesson",
  ],
  relatedLessonSlugs: [
    "tiempo-basico-pasado-desu-masu",
    "hora-y-expresiones-horarias-basicas",
    "hora-duracion-y-rutina-basica",
  ],
  relatedVocabularyTags: ["tiempo", "fecha", "calendario", "eventos", "base"],
  objectives: [
    "Reforzar los días de la semana como parte del bloque de tiempo.",
    "Leer y fijar los 12 meses usando números arábigos + 月.",
    "Leer y fijar los días del mes del 1 al 31, incluyendo las lecturas especiales más importantes.",
    "Entender y usar el orden japonés de la fecha: 年→月→日.",
    "Preguntar y responder con 何曜日・何日・何月・何年・何月何日.",
    "Leer y producir fechas completas dentro de ejemplos reales como cumpleaños y festividades.",
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
      id: "lesson-024-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "Después de la hora y de la duración, ahora cerramos este bloque de tiempo con el calendario. En esta unidad vas a fijar cómo se leen y se escriben las fechas en japonés, reforzarás los días de la semana, verás los 12 meses, estudiarás todos los días del mes hasta el 31 y aprenderás a manejar preguntas como 何曜日・何日・何月・何年・何月何日.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Primero reforzarás bloques como:",
              jp: ruby("[月曜日|げつようび] / [金曜日|きんようび] / [日曜日|にちようび]。"),
            },
            {
              es: "Después fijarás meses y días escritos con números arábigos, por ejemplo:",
              jp: ruby("[2月|にがつ] / [7月|しちがつ] / [14日|じゅうよっか] / [20日|はつか]。"),
            },
            {
              es: "Y al final leerás fechas completas como:",
              jp: ruby("[2026年2月28日|にせんにじゅうろくねんにがつにじゅうはちにち]。"),
            },
          ],
        },
      ],
    },
    {
      id: "lesson-024-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Aquí el foco es calendario, no la hora del reloj",
          content:
            "La unidad anteior vimos la base de la hora. Luego vimos cómo distinguir entre una hora puntual y una duración. Ahora el foco cambia: aquí no preguntamos a qué hora pasa algo, sino en qué fecha cae.",
          bullets: [
            {
              jp: ruby("[何時|なんじ]ですか。"),
              es: "pregunta por la hora",
            },
            {
              jp: ruby("[何曜日|なんようび]ですか。 / [何月何日|なんがつなんにち]ですか。"),
              es: "preguntas por calendario y fecha",
            },
            {
              jp: ruby("[誕生日|たんじょうび]は[7月4日|しちがつよっか]です。"),
              es: "ejemplo claro de fecha y no de hora",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "En esta ruta escribimos la fecha con números arábigos",
          content:
            "Para esta unidad trabajaremos la fecha en escritura horizontal con números (sin kanji) y con el orden japonés completo. Eso deja la lectura mucho más clara y mantiene un patrón visual estable.",
          bullets: [
            {
              jp: ruby("[2026年2月28日|にせんにじゅうろくねんにがつにじゅうはちにち]"),
              es: "año → mes → día",
            },
            {
              jp: ruby("[12月25日|じゅうにがつにじゅうごにち]"),
              es: "mes → día dentro de una fecha sin año",
            },
            {
              jp: ruby("[7月7日|しちがつなのか]"),
              es: "mes y día",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "No todo se lee de forma regular",
          content:
            "Los meses son bastante regulares, pero los días del mes no. Aquí necesitas fijar varias lecturas como vocabulario base, igual que pasó con la hora y con otros bloques mecánicos del curso.",
          bullets: [
            {
              jp: ruby("[1日|ついたち] / [4日|よっか] / [7日|なのか] / [9日|ここのか]"),
              es: "lecturas que deben quedar muy firmes",
            },
            {
              jp: ruby("[14日|じゅうよっか] / [20日|はつか] / [24日|にじゅうよっか]"),
              es: "otros días muy importantes del calendario",
            },
            {
              jp: ruby("[4月|しがつ] / [7月|しちがつ] / [9月|くがつ]"),
              es: "meses que también conviene fijar con cuidado",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Las preguntas cambian según la pieza de la fecha",
          content:
            "Aquí conviene separar qué parte del calendario estás preguntando. Una cosa es preguntar por el día de la semana. Otra, por el día del mes. Otra, por el mes o el año. Y otra, por la fecha mes + día.",
          bullets: [
            {
              jp: ruby("[何曜日|なんようび]ですか。"),
              es: "pregunta por el día de la semana",
            },
            {
              jp: ruby("[何日|なんにち]ですか。"),
              es: "pregunta por el día del mes",
            },
            {
              jp: ruby("[何月|なんがつ]ですか。 / [何年|なんねん]ですか。 / [何月何日|なんがつなんにち]ですか。"),
              es: "preguntas por otras partes de la fecha",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-024-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-024-1",
              label: "Día de la semana",
              pattern: ruby("[今日は|きょうは][何曜日|なんようび]ですか。 / [月曜日|げつようび]です。"),
              meaning: "¿Qué día de la semana es hoy? / Es lunes.",
              translation:
                "Aquí preguntas solo por el día de la semana, no por la fecha completa.",
              structure: [
                {
                  slot: { jp: ruby("[何曜日|なんようび]") },
                  value: "qué día de la semana",
                  note: "Sirve para lunes, martes, miércoles, etc.",
                },
                {
                  slot: { jp: ruby("〜[曜日|ようび]") },
                  value: "respuesta de día de la semana",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[火曜日|かようび] / [金曜日|きんようび] / [日曜日|にちようび]。"),
                  },
                },
              ],
              notes: [
                "No confundas 何曜日 con 何日: una pregunta va por weekday y la otra por day-of-month.",
              ],
            },
            {
              id: "pattern-024-2",
              label: "Mes, día y año",
              pattern: ruby("X[月|がつ] / Y[日|にち] / Z[年|ねん]"),
              meaning: "mes / día del mes / año",
              translation:
                "Aquí el objetivo es separar bien las tres piezas principales del calendario antes de juntarlas.",
              structure: [
                {
                  slot: "X 月",
                  value: "mes",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[2月|にがつ] / [7月|しちがつ] / [12月|じゅうにがつ]。"),
                  },
                },
                {
                  slot: "Y 日",
                  value: "día del mes",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[3日|みっか] / [14日|じゅうよっか] / [20日|はつか]。"),
                  },
                },
                {
                  slot: "Z 年",
                  value: "año",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[2026年|にせんにじゅうろくねん] / [2014年|にせんじゅうよねん]。"),
                  },
                },
              ],
              notes: [
                "En esta ruta escribimos estas piezas con números sin kanjis.",
              ],
            },
            {
              id: "pattern-024-3",
              label: "Fecha completa",
              pattern: ruby("Z[年|ねん]X[月|がつ]Y[日|にち]"),
              meaning: "año → mes → día",
              translation:
                "Esta es la forma base para escribir una fecha completa en esta unidad.",
              structure: [
                {
                  slot: "Z 年",
                  value: "año",
                  note: "Va primero en el orden japonés de la fecha completa.",
                },
                {
                  slot: "X 月",
                  value: "mes",
                  note: "Va después del año.",
                },
                {
                  slot: "Y 日",
                  value: "día del mes",
                  note: "Cierra la fecha completa.",
                },
              ],
              notes: [
                "Aquí no conviene mezclar el orden japonés con el del español.",
              ],
            },
            {
              id: "pattern-024-4",
              label: "Preguntar la fecha completa",
              pattern: ruby("[今日は|きょうは][何月何日|なんがつなんにち]ですか。"),
              meaning: "¿Qué fecha es hoy?",
              translation:
                "Esta es la pregunta más útil cuando quieres obtener mes + día en una sola respuesta.",
              structure: [
                {
                  slot: { jp: ruby("[何月何日|なんがつなんにち]") },
                  value: "qué mes y qué día",
                  note: "Pide la fecha sin necesariamente incluir el año.",
                },
              ],
              notes: [
                "Si quieres el día de la semana, no usas esta pregunta sino 何曜日ですか。",
              ],
            },
            {
              id: "pattern-024-5",
              label: "Eventos y cumpleaños",
              pattern: ruby("A は X[月|がつ]Y[日|にち]です。 / A は Z[年|ねん]X[月|がつ]Y[日|にち]です。"),
              meaning: "A cae en tal fecha.",
              translation:
                "Aquí la fecha ya no aparece aislada, sino unida a un cumpleaños, una festividad o un evento.",
              structure: [
                {
                  slot: "A",
                  value: "evento",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[誕生日|たんじょうび] / クリスマス / バレンタインデー / [試験|しけん] / [会議|かいぎ]。"),
                  },
                },
                {
                  slot: "X月Y日 / Z年X月Y日",
                  value: "fecha",
                  note: "La fecha puede llevar solo mes + día o incluir también el año.",
                },
              ],
              notes: [
                "Este patrón vuelve la unidad mucho más útil que una simple tabla de calendario.",
              ],
            },
          ],
        },
        {
          type: "table",
          title: "Días de la semana",
          description:
            "Aquí reforzamos la familia completa de 曜日, que ya apareció antes dentro del bloque de tiempo.",
          columns: [
            { key: "jp", label: "Día", width: "32%", align: "center" },
            { key: "reading", label: "Lectura", width: "34%", align: "center" },
            { key: "meaning", label: "Significado", width: "34%" },
          ],
          rows: [
            {
              id: "weekday-1",
              cells: {
                jp: { jp: ruby("[月曜日|げつようび]") },
                reading: "げつようび",
                meaning: "lunes",
              },
            },
            {
              id: "weekday-2",
              cells: {
                jp: { jp: ruby("[火曜日|かようび]") },
                reading: "かようび",
                meaning: "martes",
              },
            },
            {
              id: "weekday-3",
              cells: {
                jp: { jp: ruby("[水曜日|すいようび]") },
                reading: "すいようび",
                meaning: "miércoles",
              },
            },
            {
              id: "weekday-4",
              cells: {
                jp: { jp: ruby("[木曜日|もくようび]") },
                reading: "もくようび",
                meaning: "jueves",
              },
            },
            {
              id: "weekday-5",
              cells: {
                jp: { jp: ruby("[金曜日|きんようび]") },
                reading: "きんようび",
                meaning: "viernes",
              },
            },
            {
              id: "weekday-6",
              cells: {
                jp: { jp: ruby("[土曜日|どようび]") },
                reading: "どようび",
                meaning: "sábado",
              },
            },
            {
              id: "weekday-7",
              cells: {
                jp: { jp: ruby("[日曜日|にちようび]") },
                reading: "にちようび",
                meaning: "domingo",
              },
            },
          ],
          zebra: true,
        },
        {
          type: "table",
          title: "Meses 1〜12",
          description:
            "Los meses se escriben aquí con números principalmente + 月. La mayoría sigue una lógica bastante clara, pero varios conviene fijarlos con mucha atención.",
          columns: [
            { key: "number", label: "Mes", width: "24%", align: "center" },
            { key: "reading", label: "Lectura", width: "34%", align: "center" },
            { key: "note", label: "Nota", width: "42%" },
          ],
          rows: [
            {
              id: "month-1",
              cells: {
                number: { jp: ruby("[1月|いちがつ]") },
                reading: "いちがつ",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "month-2",
              cells: {
                number: { jp: ruby("[2月|にがつ]") },
                reading: "にがつ",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "month-3",
              cells: {
                number: { jp: ruby("[3月|さんがつ]") },
                reading: "さんがつ",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "month-4",
              cells: {
                number: { jp: ruby("[4月|しがつ]") },
                reading: "しがつ",
                note: "Mes con lectura que conviene fijar muy bien.",
              },
            },
            {
              id: "month-5",
              cells: {
                number: { jp: ruby("[5月|ごがつ]") },
                reading: "ごがつ",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "month-6",
              cells: {
                number: { jp: ruby("[6月|ろくがつ]") },
                reading: "ろくがつ",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "month-7",
              cells: {
                number: { jp: ruby("[7月|しちがつ]") },
                reading: "しちがつ",
                note: "Mes con lectura que conviene fijar muy bien.",
              },
            },
            {
              id: "month-8",
              cells: {
                number: { jp: ruby("[8月|はちがつ]") },
                reading: "はちがつ",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "month-9",
              cells: {
                number: { jp: ruby("[9月|くがつ]") },
                reading: "くがつ",
                note: "Mes con lectura que conviene fijar muy bien.",
              },
            },
            {
              id: "month-10",
              cells: {
                number: { jp: ruby("[10月|じゅうがつ]") },
                reading: "じゅうがつ",
                note: "Sigue la lógica de 十 + mes.",
              },
            },
            {
              id: "month-11",
              cells: {
                number: { jp: ruby("[11月|じゅういちがつ]") },
                reading: "じゅういちがつ",
                note: "Sigue la lógica de 十 + mes.",
              },
            },
            {
              id: "month-12",
              cells: {
                number: { jp: ruby("[12月|じゅうにがつ]") },
                reading: "じゅうにがつ",
                note: "Sigue la lógica de 十 + mes.",
              },
            },
          ],
          zebra: true,
        },
        {
          type: "table",
          title: "Días del mes 1〜15",
          description:
            "Aquí aparece el primer bloque fuerte del calendario. Estas lecturas conviene tratarlas como vocabulario base y no como una simple extensión de los números.",
          columns: [
            { key: "number", label: "Día", width: "24%", align: "center" },
            { key: "reading", label: "Lectura", width: "34%", align: "center" },
            { key: "note", label: "Nota", width: "42%" },
          ],
          rows: [
            {
              id: "day-1",
              cells: {
                number: { jp: ruby("[1日|ついたち]") },
                reading: "ついたち",
                note: "Lectura especial importante.",
              },
            },
            {
              id: "day-2",
              cells: {
                number: { jp: ruby("[2日|ふつか]") },
                reading: "ふつか",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "day-3",
              cells: {
                number: { jp: ruby("[3日|みっか]") },
                reading: "みっか",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "day-4",
              cells: {
                number: { jp: ruby("[4日|よっか]") },
                reading: "よっか",
                note: "Lectura especial importante.",
              },
            },
            {
              id: "day-5",
              cells: {
                number: { jp: ruby("[5日|いつか]") },
                reading: "いつか",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "day-6",
              cells: {
                number: { jp: ruby("[6日|むいか]") },
                reading: "むいか",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "day-7",
              cells: {
                number: { jp: ruby("[7日|なのか]") },
                reading: "なのか",
                note: "Lectura especial importante.",
              },
            },
            {
              id: "day-8",
              cells: {
                number: { jp: ruby("[8日|ようか]") },
                reading: "ようか",
                note: "Lectura especial importante.",
              },
            },
            {
              id: "day-9",
              cells: {
                number: { jp: ruby("[9日|ここのか]") },
                reading: "ここのか",
                note: "Lectura especial importante.",
              },
            },
            {
              id: "day-10",
              cells: {
                number: { jp: ruby("[10日|とおか]") },
                reading: "とおか",
                note: "Lectura especial importante.",
              },
            },
            {
              id: "day-11",
              cells: {
                number: { jp: ruby("[11日|じゅういちにち]") },
                reading: "じゅういちにち",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "day-12",
              cells: {
                number: { jp: ruby("[12日|じゅうににち]") },
                reading: "じゅうににち",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "day-13",
              cells: {
                number: { jp: ruby("[13日|じゅうさんにち]") },
                reading: "じゅうさんにち",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "day-14",
              cells: {
                number: { jp: ruby("[14日|じゅうよっか]") },
                reading: "じゅうよっか",
                note: "Lectura especial importante.",
              },
            },
            {
              id: "day-15",
              cells: {
                number: { jp: ruby("[15日|じゅうごにち]") },
                reading: "じゅうごにち",
                note: "Regular dentro de esta base.",
              },
            },
          ],
          zebra: true,
        },
        {
          type: "table",
          title: "Días del mes 16〜31",
          description:
            "Aquí ya se siente más la regularidad, pero siguen apareciendo puntos que conviene fijar con mucha claridad, sobre todo 20日 y 24日.",
          columns: [
            { key: "number", label: "Día", width: "24%", align: "center" },
            { key: "reading", label: "Lectura", width: "34%", align: "center" },
            { key: "note", label: "Nota", width: "42%" },
          ],
          rows: [
            {
              id: "day-16",
              cells: {
                number: { jp: ruby("[16日|じゅうろくにち]") },
                reading: "じゅうろくにち",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "day-17",
              cells: {
                number: { jp: ruby("[17日|じゅうしちにち]") },
                reading: "じゅうしちにち",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "day-18",
              cells: {
                number: { jp: ruby("[18日|じゅうはちにち]") },
                reading: "じゅうはちにち",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "day-19",
              cells: {
                number: { jp: ruby("[19日|じゅうくにち]") },
                reading: "じゅうくにち",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "day-20",
              cells: {
                number: { jp: ruby("[20日|はつか]") },
                reading: "はつか",
                note: "Lectura especial muy importante.",
              },
            },
            {
              id: "day-21",
              cells: {
                number: { jp: ruby("[21日|にじゅういちにち]") },
                reading: "にじゅういちにち",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "day-22",
              cells: {
                number: { jp: ruby("[22日|にじゅうににち]") },
                reading: "にじゅうににち",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "day-23",
              cells: {
                number: { jp: ruby("[23日|にじゅうさんにち]") },
                reading: "にじゅうさんにち",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "day-24",
              cells: {
                number: { jp: ruby("[24日|にじゅうよっか]") },
                reading: "にじゅうよっか",
                note: "Lectura especial muy importante.",
              },
            },
            {
              id: "day-25",
              cells: {
                number: { jp: ruby("[25日|にじゅうごにち]") },
                reading: "にじゅうごにち",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "day-26",
              cells: {
                number: { jp: ruby("[26日|にじゅうろくにち]") },
                reading: "にじゅうろくにち",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "day-27",
              cells: {
                number: { jp: ruby("[27日|にじゅうしちにち]") },
                reading: "にじゅうしちにち",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "day-28",
              cells: {
                number: { jp: ruby("[28日|にじゅうはちにち]") },
                reading: "にじゅうはちにち",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "day-29",
              cells: {
                number: { jp: ruby("[29日|にじゅうくにち]") },
                reading: "にじゅうくにち",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "day-30",
              cells: {
                number: { jp: ruby("[30日|さんじゅうにち]") },
                reading: "さんじゅうにち",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "day-31",
              cells: {
                number: { jp: ruby("[31日|さんじゅういちにち]") },
                reading: "さんじゅういちにち",
                note: "Regular dentro de esta base.",
              },
            },
          ],
          zebra: true,
        },
        {
          type: "table",
          title: "Años — ejemplos guía",
          description:
            "Aquí no buscamos memorizar todos los años posibles, sino entender cómo leerlos dentro de fechas completas.",
          columns: [
            { key: "year", label: "Año", width: "30%", align: "center" },
            { key: "reading", label: "Lectura", width: "40%", align: "center" },
            { key: "note", label: "Idea", width: "30%" },
          ],
          rows: [
            {
              id: "year-1998",
              cells: {
                year: { jp: ruby("[1998年|せんきゅうひゃくきゅうじゅうはちねん]") },
                reading: "せんきゅうひゃくきゅうじゅうはちねん",
                note: "ejemplo de año de 1900s",
              },
            },
            {
              id: "year-2001",
              cells: {
                year: { jp: ruby("[2001年|にせんいちねん]") },
                reading: "にせんいちねん",
                note: "ejemplo temprano de 2000s",
              },
            },
            {
              id: "year-2014",
              cells: {
                year: { jp: ruby("[2014年|にせんじゅうよねん]") },
                reading: "にせんじゅうよねん",
                note: "ejemplo útil para fecha completa",
              },
            },
            {
              id: "year-2026",
              cells: {
                year: { jp: ruby("[2026年|にせんにじゅうろくねん]") },
                reading: "にせんにじゅうろくねん",
                note: "ejemplo base de esta ruta",
              },
            },
          ],
          zebra: true,
        },
      ],
    },
    {
      id: "lesson-024-vocabulary",
      kind: "vocabulary",
      title: "Vocabulario útil para esta unidad",
      description:
        "Aquí reunimos las palabras que te ayudan a preguntar por fechas, responderlas y darles contexto real dentro del calendario.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 4,
          items: [
            { id: "v024-hizuke", jp: ruby("[日付|ひづけ]"), reading: "ひづけ", meaning: "fecha", tags: ["fecha", "base"] },
            { id: "v024-youbi", jp: ruby("[曜日|ようび]"), reading: "ようび", meaning: "día de la semana", tags: ["fecha", "base"] },
            { id: "v024-nanyoubi", jp: ruby("[何曜日|なんようび]"), reading: "なんようび", meaning: "qué día de la semana", tags: ["pregunta", "base"] },
            { id: "v024-nannichi", jp: ruby("[何日|なんにち]"), reading: "なんにち", meaning: "qué día del mes", tags: ["pregunta", "base"] },

            { id: "v024-nangatsu", jp: ruby("[何月|なんがつ]"), reading: "なんがつ", meaning: "qué mes", tags: ["pregunta", "base"] },
            { id: "v024-nannen", jp: ruby("[何年|なんねん]"), reading: "なんねん", meaning: "qué año", tags: ["pregunta", "base"] },
            { id: "v024-nangatsunannichi", jp: ruby("[何月何日|なんがつなんにち]"), reading: "なんがつなんにち", meaning: "qué mes y qué día", tags: ["pregunta", "base"] },
            { id: "v024-birthday", jp: ruby("[誕生日|たんじょうび]"), reading: "たんじょうび", meaning: "cumpleaños", tags: ["eventos"] },

            { id: "v024-christmas", jp: [{ text: "クリスマス" }], reading: "くりすます", meaning: "Navidad", tags: ["eventos"] },
            { id: "v024-valentine", jp: [{ text: "バレンタインデー" }], reading: "ばれんたいんでー", meaning: "San Valentín", tags: ["eventos"] },
            { id: "v024-tanabata", jp: ruby("[七夕|たなばた]"), reading: "たなばた", meaning: "Tanabata", tags: ["eventos"] },
            { id: "v024-children", jp: ruby("こどもの[日|ひ]"), reading: "こどものひ", meaning: "Día del Niño", tags: ["eventos"] },

            { id: "v024-hina", jp: ruby("ひな[祭|まつ]り"), reading: "ひなまつり", meaning: "Festival de las Muñecas", tags: ["eventos"] },
            { id: "v024-exam", jp: ruby("[試験|しけん]"), reading: "しけん", meaning: "prueba / examen", tags: ["eventos"] },
            { id: "v024-meeting", jp: ruby("[会議|かいぎ]"), reading: "かいぎ", meaning: "reunión", tags: ["eventos"] },
            { id: "v024-festival", jp: ruby("[祭|まつ]り"), reading: "まつり", meaning: "festival", tags: ["eventos"] },
          ],
        },
      ],
    },
    {
      id: "lesson-024-examples",
      kind: "examples",
      title: "Ejemplos guiados",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "ex-024-1",
              jp: ruby("[今日は|きょうは][月曜日|げつようび]です。"),
              es: "Hoy es lunes.",
            },
            {
              id: "ex-024-2",
              jp: ruby("[今日は|きょうは][2月14日|にがつじゅうよっか]です。"),
              es: "Hoy es 14 de febrero.",
            },
            {
              id: "ex-024-3",
              jp: ruby("[今日は|きょうは][2026年2月28日|にせんにじゅうろくねんにがつにじゅうはちにち]です。"),
              es: "Hoy es 28 de febrero de 2026.",
            },
            {
              id: "ex-024-4",
              jp: ruby("[誕生日|たんじょうび]は[7月4日|しちがつよっか]です。"),
              es: "Mi cumpleaños es el 4 de julio.",
            },
            {
              id: "ex-024-5",
              jp: ruby("クリスマスは[12月25日|じゅうにがつにじゅうごにち]です。"),
              es: "Navidad es el 25 de diciembre.",
            },
            {
              id: "ex-024-6",
              jp: ruby("バレンタインデーは[2月14日|にがつじゅうよっか]です。"),
              es: "San Valentín es el 14 de febrero.",
            },
            {
              id: "ex-024-7",
              jp: ruby("[七夕|たなばた]は[7月7日|しちがつなのか]です。"),
              es: "Tanabata es el 7 de julio.",
            },
            {
              id: "ex-024-8",
              jp: ruby("こどもの[日|ひ]は[5月5日|ごがついつか]です。"),
              es: "El Día del Niño es el 5 de mayo.",
            },
            {
              id: "ex-024-9",
              jp: ruby("ひな[祭|まつ]りは[3月3日|さんがつみっか]です。"),
              es: "Hinamatsuri es el 3 de marzo.",
            },
            {
              id: "ex-024-10",
              jp: ruby("[試験|しけん]は[6月20日|ろくがつはつか]です。"),
              es: "El examen es el 20 de junio.",
            },
            {
              id: "ex-024-11",
              jp: ruby("[会議|かいぎ]は[2026年11月3日|にせんにじゅうろくねんじゅういちがつみっか]です。"),
              es: "La reunión es el 3 de noviembre de 2026.",
            },
            {
              id: "ex-024-12",
              jp: ruby("[祭|まつ]りは[8月7日|はちがつなのか]です。"),
              es: "El festival es el 7 de agosto.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-024-contrast",
      kind: "contrast",
      title: "Contrastes que conviene fijar",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-024-1",
              label: "1日 vs 1月",
              correct: {
                jp: ruby("[1日|ついたち] / [1月|いちがつ]"),
                es: "No siguen la misma lectura base.",
              },
              explanation:
                "El día del mes y el mes no se leen igual, aunque compartan el mismo número visible.",
            },
            {
              id: "contrast-024-2",
              label: "4日 vs 4月",
              correct: {
                jp: ruby("[4日|よっか] / [4月|しがつ]"),
                es: "El primero es día del mes; el segundo es mes.",
              },
              explanation:
                "Aquí se cruzan dos irregularidades muy frecuentes del calendario.",
            },
            {
              id: "contrast-024-3",
              label: "7日 vs 7月",
              correct: {
                jp: ruby("[7日|なのか] / [7月|しちがつ]"),
                es: "Los dos deben fijarse como formas propias.",
              },
              explanation:
                "Este contraste suele costar mucho al comienzo, así que conviene practicarlo varias veces.",
            },
            {
              id: "contrast-024-4",
              label: "9日 vs 9月",
              correct: {
                jp: ruby("[9日|ここのか] / [9月|くがつ]"),
                es: "Otra pareja que no se puede resolver solo mirando el número.",
              },
              explanation:
                "Aquí las lecturas cambian de forma notable y deben quedar firmes.",
            },
            {
              id: "contrast-024-5",
              label: "20日 vs 24日",
              correct: {
                jp: ruby("[20日|はつか] / [24日|にじゅうよっか]"),
                es: "Dos días muy importantes del calendario que deben fijarse como lectura propia.",
              },
              explanation:
                "Conviene practicarlos mucho porque aparecen muy seguido en fechas reales y en ejercicios.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-024-warning",
      kind: "warning",
      title: "Qué conviene vigilar desde el principio",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "No intentes leer todas las fechas como si fueran números regulares",
          content:
            "Aquí el mayor peligro es creer que basta con saber los números y añadir 年・月・日 mecánicamente. Eso sí funciona bastante con los meses y con muchos años, pero no con todos los días del mes. Por eso esta unidad necesita bastante repetición visual y oral.",
          bullets: [
            {
              jp: ruby("[1日|ついたち] / [4日|よっか] / [7日|なのか] / [20日|はつか] / [24日|にじゅうよっか]"),
              es: "días que conviene fijar como vocabulario base",
            },
            {
              jp: ruby("[何曜日|なんようび] / [何日|なんにち] / [何月|なんがつ] / [何年|なんねん]"),
              es: "no confundas las preguntas entre sí",
            },
            {
              jp: ruby("[2026年2月28日|にせんにじゅうろくねんにがつにじゅうはちにち]"),
              es: "mantén siempre el orden japonés: año → mes → día",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-024-practice",
      kind: "practice",
      title: "Práctica guiada antes del quiz",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Lee primero todos los días de la semana varias veces, sin saltarte ninguno.",
              jp: ruby("[月曜日|げつようび] / [火曜日|かようび] / [水曜日|すいようび] / [木曜日|もくようび] / [金曜日|きんようび] / [土曜日|どようび] / [日曜日|にちようび]。"),
            },
            {
              es: "Después repasa los meses del",
              jp: ruby("[1月|いちがつ] al [12月|じゅうにがつ]"),
              note: "poniendo mucha atención en 4月, 7月 y 9月.",
            },
            {
              es: "Haz una ronda especial solo con los días del mes que tienen lectura fuerte o irregular.",
              jp: ruby("[1日|ついたち] / [4日|よっか] / [7日|なのか] / [9日|ここのか] / [10日|とおか] / [14日|じゅうよっか] / [20日|はつか] / [24日|にじゅうよっか]。"),
            },
            {
              es: "Luego practica preguntas con",
              jp: ruby("[何曜日|なんようび] / [何日|なんにち] / [何月|なんがつ] / [何月何日|なんがつなんにち]"),
              note: "y responde siempre con números arábigos en la fecha escrita.",
            },
            {
              es: "Por último, toma eventos como",
              jp: ruby("[誕生日|たんじょうび] / クリスマス / バレンタインデー / [七夕|たなばた]"),
              note: "y escribe su fecha completa en japonés.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-024-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Puedo leer y responder preguntas con",
              jp: ruby("[何曜日|なんようび] / [何日|なんにち] / [何月|なんがつ] / [何年|なんねん] / [何月何日|なんがつなんにち]。"),
            },
            {
              es: "Puedo leer los 12 meses con números arábigos +",
              jp: ruby("[月|がつ]。"),
            },
            {
              es: "Puedo leer los días del mes del",
              jp: ruby("[1日|ついたち] al [31日|さんじゅういちにち]。"),
            },
            {
              es: "Recuerdo que la fecha completa sigue el orden",
              jp: ruby("[年|ねん] → [月|がつ] → [日|にち]。"),
            },
            {
              es: "Ya puedo leer y escribir fechas reales de cumpleaños, festividades y eventos simples.",
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-024-quiz",
    title: "Quiz — Fechas y calendario",
    description:
      "Repaso fuerte de días, meses, años y fechas completas. Aquí el foco principal es leer y escribir la fecha en japonés con números arábigos y fijar las lecturas que más suelen confundir.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[1日|___]"),
        },
        acceptedAnswers: ["ついたち"],
        placeholder: "Escribe la lectura",
        explanation:
          "1日 se lee ついたち cuando funciona como día del mes.",
        relatedSectionIds: ["lesson-024-structure", "lesson-024-contrast"],
      },
      {
        id: "q2",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[4日|___]"),
        },
        acceptedAnswers: ["よっか"],
        placeholder: "Escribe la lectura",
        explanation:
          "4日 se lee よっか.",
        relatedSectionIds: ["lesson-024-structure", "lesson-024-contrast"],
      },
      {
        id: "q3",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[7日|___]"),
        },
        acceptedAnswers: ["なのか"],
        placeholder: "Escribe la lectura",
        explanation:
          "7日 se lee なのか.",
        relatedSectionIds: ["lesson-024-structure", "lesson-024-contrast"],
      },
      {
        id: "q4",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[9日|___]"),
        },
        acceptedAnswers: ["ここのか"],
        placeholder: "Escribe la lectura",
        explanation:
          "9日 se lee ここのか.",
        relatedSectionIds: ["lesson-024-structure", "lesson-024-contrast"],
      },
      {
        id: "q5",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[14日|___]"),
        },
        acceptedAnswers: ["じゅうよっか"],
        placeholder: "Escribe la lectura",
        explanation:
          "14日 se lee じゅうよっか.",
        relatedSectionIds: ["lesson-024-structure", "lesson-024-contrast"],
      },
      {
        id: "q6",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[20日|___]"),
        },
        acceptedAnswers: ["はつか"],
        placeholder: "Escribe la lectura",
        explanation:
          "20日 se lee はつか.",
        relatedSectionIds: ["lesson-024-structure", "lesson-024-contrast"],
      },
      {
        id: "q7",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[24日|___]"),
        },
        acceptedAnswers: ["にじゅうよっか"],
        placeholder: "Escribe la lectura",
        explanation:
          "24日 se lee にじゅうよっか.",
        relatedSectionIds: ["lesson-024-structure", "lesson-024-contrast"],
      },
      {
        id: "q8",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[2月14日|___]"),
        },
        acceptedAnswers: ["にがつじゅうよっか"],
        placeholder: "Escribe la lectura completa",
        explanation:
          "2月14日 se lee にがつじゅうよっか.",
        relatedSectionIds: ["lesson-024-structure", "lesson-024-examples"],
      },
      {
        id: "q9",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[3月3日|___]"),
        },
        acceptedAnswers: ["さんがつみっか"],
        placeholder: "Escribe la lectura completa",
        explanation:
          "3月3日 se lee さんがつみっか.",
        relatedSectionIds: ["lesson-024-structure", "lesson-024-examples"],
      },
      {
        id: "q10",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[5月5日|___]"),
        },
        acceptedAnswers: ["ごがついつか"],
        placeholder: "Escribe la lectura completa",
        explanation:
          "5月5日 se lee ごがついつか.",
        relatedSectionIds: ["lesson-024-structure", "lesson-024-examples"],
      },
      {
        id: "q11",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[7月7日|___]"),
        },
        acceptedAnswers: ["しちがつなのか"],
        placeholder: "Escribe la lectura completa",
        explanation:
          "7月7日 se lee しちがつなのか.",
        relatedSectionIds: ["lesson-024-structure", "lesson-024-examples"],
      },
      {
        id: "q12",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[12月25日|___]"),
        },
        acceptedAnswers: ["じゅうにがつにじゅうごにち"],
        placeholder: "Escribe la lectura completa",
        explanation:
          "12月25日 se lee じゅうにがつにじゅうごにち.",
        relatedSectionIds: ["lesson-024-structure", "lesson-024-examples"],
      },
      {
        id: "q13",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[2026年2月28日|___]"),
        },
        acceptedAnswers: ["にせんにじゅうろくねんにがつにじゅうはちにち"],
        placeholder: "Escribe la lectura completa",
        explanation:
          "2026年2月28日 se lee にせんにじゅうろくねんにがつにじゅうはちにち.",
        relatedSectionIds: ["lesson-024-structure", "lesson-024-examples"],
      },
      {
        id: "q14",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[2014年11月3日|___]"),
        },
        acceptedAnswers: ["にせんじゅうよねんじゅういちがつみっか"],
        placeholder: "Escribe la lectura completa",
        explanation:
          "2014年11月3日 se lee にせんじゅうよねんじゅういちがつみっか.",
        relatedSectionIds: ["lesson-024-structure", "lesson-024-examples"],
      },
      {
        id: "q15",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[1998年6月20日|___]"),
        },
        acceptedAnswers: ["せんきゅうひゃくきゅうじゅうはちねんろくがつはつか"],
        placeholder: "Escribe la lectura completa",
        explanation:
          "1998年6月20日 se lee せんきゅうひゃくきゅうじゅうはちねんろくがつはつか.",
        relatedSectionIds: ["lesson-024-structure", "lesson-024-examples"],
      },
      {
        id: "q16",
        type: "single-choice",
        prompt: {
          es: "¿Qué interrogativo corresponde mejor a “qué día de la semana”?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[何日|なんにち]") } },
          { id: "b", label: { jp: ruby("[何月|なんがつ]") } },
          { id: "c", label: { jp: ruby("[何曜日|なんようび]") } },
          { id: "d", label: { jp: ruby("[何年|なんねん]") } },
        ],
        correctChoiceId: "c",
        explanation:
          "何曜日 pregunta por el día de la semana.",
        relatedSectionIds: ["lesson-024-structure", "lesson-024-summary"],
      },
      {
        id: "q17",
        type: "single-choice",
        prompt: {
          es: "¿Qué pregunta pide mejor la fecha mes + día de hoy?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[今日は|きょうは][何曜日|なんようび]ですか。") } },
          { id: "b", label: { jp: ruby("[今日は|きょうは][何月何日|なんがつなんにち]ですか。") } },
          { id: "c", label: { jp: ruby("[今日は|きょうは][何年|なんねん]ですか。") } },
          { id: "d", label: { jp: ruby("[今日は|きょうは][何時|なんじ]ですか。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "何月何日 pregunta por la fecha mes + día.",
        relatedSectionIds: ["lesson-024-structure", "lesson-024-summary"],
      },
      {
        id: "q18",
        type: "single-choice",
        prompt: {
          jp: ruby("[誕生日|たんじょうび]は[何月何日|なんがつなんにち]ですか。"),
          es: "Elige la respuesta más natural.",
        },
        choices: [
          { id: "a", label: { jp: ruby("[月曜日|げつようび]です。") } },
          { id: "b", label: { jp: ruby("[7月4日|しちがつよっか]です。") } },
          { id: "c", label: { jp: ruby("[2026年|にせんにじゅうろくねん]です。") } },
          { id: "d", label: { jp: ruby("[7時4分|しちじよんぷん]です。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "Aquí la pregunta pide mes + día, por eso la respuesta natural es 7月4日です。",
        relatedSectionIds: ["lesson-024-structure", "lesson-024-examples"],
      },
      {
        id: "q19",
        type: "order-sentence",
        prompt: {
          es: "Ordena la oración correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("バレンタインデー") }, value: "バレンタインデー" },
          { id: "t2", label: { jp: ruby("は") }, value: "は" },
          { id: "t3", label: { jp: ruby("[2月14日|にがつじゅうよっか]") }, value: "2月14日" },
          { id: "t4", label: { jp: ruby("です。") }, value: "です。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("バレンタインデーは[2月14日|にがつじゅうよっか]です。") },
        explanation:
          "Aquí el evento entra como tema y la fecha completa aparece como identificación.",
        relatedSectionIds: ["lesson-024-structure", "lesson-024-examples"],
      },
      {
        id: "q20",
        type: "order-sentence",
        prompt: {
          es: "Ordena la pregunta correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[今日は|きょうは]") }, value: "今日は" },
          { id: "t2", label: { jp: ruby("[何曜日|なんようび]") }, value: "何曜日" },
          { id: "t3", label: { jp: ruby("ですか。") }, value: "ですか。" },
        ],
        correctOrder: ["t1", "t2", "t3"],
        answerLabel: { jp: ruby("[今日は|きょうは][何曜日|なんようび]ですか。") },
        explanation:
          "La pregunta base por el día de la semana se arma como 今日は何曜日ですか。",
        relatedSectionIds: ["lesson-024-structure", "lesson-024-summary"],
      },
    ],
  },
};

export default lesson024;
