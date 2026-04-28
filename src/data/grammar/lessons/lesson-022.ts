// src/data/grammar/lessons/lesson-022.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson022: GrammarLesson = {
  id: "lesson-022",
  slug: "hora-y-expresiones-horarias-basicas",
  order: 27,
  level: "N5",
  status: "ready",
  title: "La hora y expresiones horarias",
  jpTitle: "じかん・なんじ・なんぷん",
  shortTitle: "La hora",
  description:
    "Cómo leer y decir la hora en japonés, trabajar 時 y 分 con sus lecturas especiales, preguntar qué hora es con 今・何時・何分・何時何分, distinguir entre sistema de 12 y 24 horas con 午前 y 午後, y usar に cuando la hora marca el momento de una acción.",
  estimatedMinutes: 96,
  categoryTags: ["fundamentos", "tiempo", "hora", "lectura", "rutina", "integracion"],
  grammarTags: [
    "今",
    "何時",
    "何分",
    "何時何分",
    "時",
    "分",
    "半",
    "午前",
    "午後",
    "に",
    "hora",
    "minutos",
  ],
  searchTerms: [
    "hora en japones",
    "nanji nanpun japanese",
    "jikan ji fun han",
    "gozen gogo 24 horas japones",
    "como preguntar la hora en japones",
    "read time japanese n5",
    "la hora japones basico",
  ],
  relatedLessonSlugs: [
    "tiempo-basico-pasado-desu-masu",
    "verbos-introduccion-grupo-2-ichidan",
    "verbos-grupo-1-godan",
    "verbos-grupo-3-irregulares",
    "verbos-de-accion-particulas-wo-de-to-ni",
    "verbos-de-movimiento-iku-kuru-kaeru-ni-he-de-to",
    "matome-existencia-accion-movimiento",
  ],
  relatedVocabularyTags: ["tiempo", "hora", "rutina", "base"],
  objectives: [
    "Leer y decir la hora con 時 y 分 sin depender solo del español.",
    "Fijar las lecturas especiales más importantes de 時 y 分.",
    "Usar 今、何時ですか y 今、何時何分ですか para preguntar la hora.",
    "Responder con horas simples, horas con minutos y horas con 半.",
    "Entender la diferencia práctica entre 午前 / 午後 y el sistema de 24 horas.",
    "Usar に cuando la hora marca el momento de una acción.",
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
      id: "lesson-022-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "Esta unidad abre un tema muy importante y muy mecánico de la base: la hora. Aquí conviene trabajar con mucha claridad. Primero fijarás las horas completas. Después verás los minutos hasta 60 para que los patrones se vuelvan visibles de verdad. Y al final unirás todo con preguntas, respuestas, 午前 / 午後 y el uso de に cuando la hora marca el momento de una acción.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Primero leerás horas como:",
              jp: ruby("[4時|よじ] / [7時|しちじ] / [9時|くじ] / [14時|じゅうよじ] / [19時|じゅうくじ]。"),
            },
            {
              es: "Después pasarás a horas completas como:",
              jp: ruby("[4時32分|よじさんじゅうにふん] / [7時14分|しちじじゅうよんぷん] / [15時8分|じゅうごじはっぷん]。"),
            },
            {
              es: "Y al final usarás patrones como:",
              jp: ruby("今、[何時|なんじ]ですか。 / 今、[何時何分|なんじなんぷん]ですか。 / [毎朝|まいあさ][6時半|ろくじはん]に[起|お]きます。"),
            },
          ],
        },
      ],
    },
    {
      id: "lesson-022-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Aquí conviene separar tres cosas",
          content:
            "En esta unidad no basta con aprender palabras sueltas. Conviene separar tres funciones. Primero, decir qué hora es. Segundo, preguntar qué hora es. Tercero, usar una hora como momento de una acción con に.",
          bullets: [
            {
              jp: ruby("今、[4時|よじ]です。"),
              es: "decir qué hora es ahora",
            },
            {
              jp: ruby("今、[何時|なんじ]ですか。"),
              es: "preguntar qué hora es ahora",
            },
            {
              jp: ruby("[7時半|しちじはん]に[起|お]きます。"),
              es: "usar la hora como momento de una acción",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "時 y 分 no son totalmente regulares",
          content:
            "Buena parte de la dificultad de esta unidad no está en la idea de tiempo, sino en la lectura. 時 tiene varias lecturas especiales que deben quedar muy firmes. 分 también cambia bastante, así que aquí necesitamos tabla completa y mucha práctica de lectura.",
          bullets: [
            {
              jp: ruby("[4時|よじ] / [7時|しちじ] / [9時|くじ]"),
              es: "tres horas que debes fijar muy bien",
            },
            {
              jp: ruby("[1分|いっぷん] / [3分|さんぷん] / [4分|よんぷん] / [6分|ろっぷん] / [8分|はっぷん] / [10分|じゅっぷん]"),
              es: "minutos con cambios visibles de lectura",
            },
            {
              jp: ruby("[30分|さんじゅっぷん] / [6時半|ろくじはん]"),
              es: "30分 existe, pero con la hora aparece muchísimo como 半",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "午前 / 午後 y 24 horas no hacen exactamente el mismo trabajo",
          content:
            "En conversación cotidiana, muchas veces basta con ごぜん y ごご. El sistema de 24 horas aparece mucho en estaciones, noticias, paneles, horarios y anuncios. Aquí conviene aprender a leer los dos sin tratarlos como mundos separados.",
          bullets: [
            {
              jp: ruby("[午後|ごご][3時|さんじ]です。"),
              es: "forma cotidiana muy visible",
            },
            {
              jp: ruby("[15時|じゅうごじ]です。"),
              es: "misma franja horaria en sistema de 24 horas",
            },
            {
              jp: ruby("[午後|ごご][8時10分|はちじじゅっぷん]です。 / [20時10分|にじゅうじじゅっぷん]です。"),
              es: "dos formas de expresar el mismo momento",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "に aparece cuando la hora ancla una acción",
          content:
            "Cuando solo dices qué hora es, no necesitas に. Pero cuando una acción ocurre a una hora concreta, aquí sí entra に con mucha fuerza. Esa diferencia conviene fijarla desde el principio para que no se vuelva una duda constante.",
          bullets: [
            {
              jp: ruby("[今|いま]、[7時|しちじ]です。"),
              es: "aquí no entra に",
            },
            {
              jp: ruby("[7時|しちじ]に[行|い]きます。"),
              es: "aquí sí entra に porque la hora marca el momento de la acción",
            },
            {
              jp: ruby("[午後|ごご][9時半|くじはん]に[寝|ね]ます。"),
              es: "la misma lógica con 午後 y 半",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-022-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-022-1",
              label: "Preguntar la hora",
              pattern: ruby("今、[何時|なんじ]ですか。 / 今、[何時何分|なんじなんぷん]ですか。"),
              meaning: "¿Qué hora es ahora? / ¿Qué hora y qué minuto es ahora?",
              translation:
                "Aquí fijamos dos preguntas básicas. La primera pregunta solo por la hora. La segunda pide la hora completa con minutos.",
              structure: [
                {
                  slot: { jp: ruby("[今|いま]") },
                  value: "ahora",
                  note: "Ancla la pregunta en el momento actual.",
                },
                {
                  slot: { jp: ruby("[何時|なんじ]") },
                  value: "qué hora",
                  note: "Sirve cuando solo quieres saber la hora.",
                },
                {
                  slot: { jp: ruby("[何時何分|なんじなんぷん]") },
                  value: "qué hora y qué minuto",
                  note: "Sirve cuando quieres la hora completa.",
                },
              ],
              notes: [
                "Las dos preguntas son útiles. La segunda exige más precisión.",
              ],
            },
            {
              id: "pattern-022-2",
              label: "Decir qué hora es",
              pattern: ruby("X[時|じ]です。 / X[時|じ]Y[分|ふん]です。 / X[時半|じはん]です。"),
              meaning: "Es la hora X. / Son las X con Y minutos. / Son las X y media.",
              translation:
                "Aquí la hora funciona como información. No ancla una acción todavía. Por eso no aparece に.",
              structure: [
                {
                  slot: "X時",
                  value: "hora",
                  note: {
                    es: "Puede ser algo como:",
                    jp: ruby("[4時|よじ] / [7時|しちじ] / [15時|じゅうごじ]。"),
                  },
                },
                {
                  slot: "Y 分",
                  value: "minutos",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[14分|じゅうよんぷん] / [28分|にじゅうはっぷん] / [32分|さんじゅうにふん]。"),
                  },
                },
                {
                  slot: "半",
                  value: "media hora",
                  note: "Muy frecuente cuando los minutos son 30.",
                },
              ],
              notes: [
                "Cuando solo informas la hora, aquí no se usa に.",
              ],
            },
            {
              id: "pattern-022-3",
              label: "Sistema de 12 horas y 24 horas",
              pattern: ruby("[午前|ごぜん] / [午後|ごご] + X[時|じ]Y[分|ふん] / 13[時|じ]〜24[時|じ]"),
              meaning: "La misma franja horaria puede expresarse de dos maneras.",
              translation:
                "Aquí el objetivo no es enfrentar dos sistemas enemigos, sino aprender a leer ambos con naturalidad.",
              structure: [
                {
                  slot: { jp: ruby("[午前|ごぜん]") },
                  value: "AM",
                  note: "Muy visible en conversación y horarios cotidianos.",
                },
                {
                  slot: { jp: ruby("[午後|ごご]") },
                  value: "PM",
                  note: "Muy visible en conversación y horarios cotidianos.",
                },
                {
                  slot: "13時〜24時",
                  value: "24 horas",
                  note: "Muy visible en paneles, estaciones, noticias y anuncios.",
                },
              ],
              notes: [
                "Aquí conviene poder leer ambos sin sentir que cambian la gramática central.",
              ],
            },
            {
              id: "pattern-022-4",
              label: "Hora como momento de una acción",
              pattern: ruby("Aは X[時|じ]に Vます。 / Aは X[時|じ]Y[分|ふん]に Vます。 / Aは X[時半|じはん]に Vます。"),
              meaning: "A realiza V a la hora X.",
              translation:
                "Aquí la hora deja de ser un dato aislado y pasa a marcar el momento de una acción. Por eso aparece に.",
              structure: [
                {
                  slot: "A",
                  value: "persona o referente",
                  note: "Puede omitirse si el contexto ya lo deja claro.",
                },
                {
                  slot: "X時 / X時Y分 / X時半",
                  value: "momento temporal",
                  note: "Marca la hora exacta a la que ocurre la acción.",
                },
                {
                  slot: { jp: ruby("に") },
                  value: "marca de tiempo puntual",
                  note: "Aquí entra porque la hora ancla una acción.",
                },
                {
                  slot: "Vます",
                  value: "verbo",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[起|お]きます / [寝|ね]ます / [行|い]きます / [来|き]ます / [帰|かえ]ります。"),
                  },
                },
              ],
              notes: [
                "Esta diferencia con X時です conviene fijarla muy pronto.",
              ],
            },
          ],
        },
        {
          type: "table",
          title: "Horas 1〜12",
          description:
            "Aquí conviene fijar una por una las lecturas base de las horas antes de pasar al sistema de 24 horas.",
          columns: [
            { key: "number", label: "Hora", width: "22%", align: "center" },
            { key: "reading", label: "Lectura", width: "34%", align: "center" },
            { key: "note", label: "Nota", width: "44%" },
          ],
          rows: [
            {
              id: "hour-1",
              cells: {
                number: { jp: ruby("[1時|いちじ]") },
                reading: "いちじ",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "hour-2",
              cells: {
                number: { jp: ruby("[2時|にじ]") },
                reading: "にじ",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "hour-3",
              cells: {
                number: { jp: ruby("[3時|さんじ]") },
                reading: "さんじ",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "hour-4",
              cells: {
                number: { jp: ruby("[4時|よじ]") },
                reading: "よじ",
                note: "Lectura especial importante.",
              },
            },
            {
              id: "hour-5",
              cells: {
                number: { jp: ruby("[5時|ごじ]") },
                reading: "ごじ",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "hour-6",
              cells: {
                number: { jp: ruby("[6時|ろくじ]") },
                reading: "ろくじ",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "hour-7",
              cells: {
                number: { jp: ruby("[7時|しちじ]") },
                reading: "しちじ",
                note: "La forma base de esta ruta es しちじ.",
              },
            },
            {
              id: "hour-8",
              cells: {
                number: { jp: ruby("[8時|はちじ]") },
                reading: "はちじ",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "hour-9",
              cells: {
                number: { jp: ruby("[9時|くじ]") },
                reading: "くじ",
                note: "Lectura especial importante.",
              },
            },
            {
              id: "hour-10",
              cells: {
                number: { jp: ruby("[10時|じゅうじ]") },
                reading: "じゅうじ",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "hour-11",
              cells: {
                number: { jp: ruby("[11時|じゅういちじ]") },
                reading: "じゅういちじ",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "hour-12",
              cells: {
                number: { jp: ruby("[12時|じゅうにじ]") },
                reading: "じゅうにじ",
                note: "Regular dentro de esta base.",
              },
            },
          ],
          zebra: true,
        },
        {
          type: "table",
          title: "Horas 13〜24",
          description:
            "Aquí el sistema sigue creciendo sobre la misma base, pero mantiene varias lecturas especiales importantes.",
          columns: [
            { key: "number", label: "Hora", width: "22%", align: "center" },
            { key: "reading", label: "Lectura", width: "34%", align: "center" },
            { key: "note", label: "Nota", width: "44%" },
          ],
          rows: [
            {
              id: "hour-13",
              cells: {
                number: { jp: ruby("[13時|じゅうさんじ]") },
                reading: "じゅうさんじ",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "hour-14",
              cells: {
                number: { jp: ruby("[14時|じゅうよじ]") },
                reading: "じゅうよじ",
                note: "Sigue la lógica de よじ.",
              },
            },
            {
              id: "hour-15",
              cells: {
                number: { jp: ruby("[15時|じゅうごじ]") },
                reading: "じゅうごじ",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "hour-16",
              cells: {
                number: { jp: ruby("[16時|じゅうろくじ]") },
                reading: "じゅうろくじ",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "hour-17",
              cells: {
                number: { jp: ruby("[17時|じゅうしちじ]") },
                reading: "じゅうしちじ",
                note: "En esta ruta fijamos じゅうしちじ.",
              },
            },
            {
              id: "hour-18",
              cells: {
                number: { jp: ruby("[18時|じゅうはちじ]") },
                reading: "じゅうはちじ",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "hour-19",
              cells: {
                number: { jp: ruby("[19時|じゅうくじ]") },
                reading: "じゅうくじ",
                note: "Sigue la lógica de くじ.",
              },
            },
            {
              id: "hour-20",
              cells: {
                number: { jp: ruby("[20時|にじゅうじ]") },
                reading: "にじゅうじ",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "hour-21",
              cells: {
                number: { jp: ruby("[21時|にじゅういちじ]") },
                reading: "にじゅういちじ",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "hour-22",
              cells: {
                number: { jp: ruby("[22時|にじゅうにじ]") },
                reading: "にじゅうにじ",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "hour-23",
              cells: {
                number: { jp: ruby("[23時|にじゅうさんじ]") },
                reading: "にじゅうさんじ",
                note: "Regular dentro de esta base.",
              },
            },
            {
              id: "hour-24",
              cells: {
                number: { jp: ruby("[24時|にじゅうよじ]") },
                reading: "にじゅうよじ",
                note: "Muy visible en horarios de estaciones o pantallas.",
              },
            },
          ],
          zebra: true,
        },
        {
          type: "table",
          title: "Minutos 1〜30",
          description:
            "Aquí la meta es ver el patrón completo. No basta con aprender 1〜10 y asumir que el resto sale solo.",
          columns: [
            { key: "number", label: "Minuto", width: "22%", align: "center" },
            { key: "reading", label: "Lectura", width: "34%", align: "center" },
            { key: "note", label: "Nota", width: "44%" },
          ],
          rows: [
            {
              id: "minute-1",
              cells: {
                number: { jp: ruby("[1分|いっぷん]") },
                reading: "いっぷん",
                note: "",
              },
            },
            {
              id: "minute-2",
              cells: {
                number: { jp: ruby("[2分|にふん]") },
                reading: "にふん",
                note: "",
              },
            },
            {
              id: "minute-3",
              cells: {
                number: { jp: ruby("[3分|さんぷん]") },
                reading: "さんぷん",
                note: "",
              },
            },
            {
              id: "minute-4",
              cells: {
                number: { jp: ruby("[4分|よんぷん]") },
                reading: "よんぷん",
                note: "",
              },
            },
            {
              id: "minute-5",
              cells: {
                number: { jp: ruby("[5分|ごふん]") },
                reading: "ごふん",
                note: "",
              },
            },
            {
              id: "minute-6",
              cells: {
                number: { jp: ruby("[6分|ろっぷん]") },
                reading: "ろっぷん",
                note: "",
              },
            },
            {
              id: "minute-7",
              cells: {
                number: { jp: ruby("[7分|ななふん]") },
                reading: "ななふん",
                note: "En esta ruta fijamos ななふん.",
              },
            },
            {
              id: "minute-8",
              cells: {
                number: { jp: ruby("[8分|はっぷん]") },
                reading: "はっぷん",
                note: "",
              },
            },
            {
              id: "minute-9",
              cells: {
                number: { jp: ruby("[9分|きゅうふん]") },
                reading: "きゅうふん",
                note: "",
              },
            },
            {
              id: "minute-10",
              cells: {
                number: { jp: ruby("[10分|じゅっぷん]") },
                reading: "じゅっぷん",
                note: "Aquí fijamos じゅっぷん como forma base.",
              },
            },
            {
              id: "minute-11",
              cells: {
                number: { jp: ruby("[11分|じゅういっぷん]") },
                reading: "じゅういっぷん",
                note: "",
              },
            },
            {
              id: "minute-12",
              cells: {
                number: { jp: ruby("[12分|じゅうにふん]") },
                reading: "じゅうにふん",
                note: "",
              },
            },
            {
              id: "minute-13",
              cells: {
                number: { jp: ruby("[13分|じゅうさんぷん]") },
                reading: "じゅうさんぷん",
                note: "",
              },
            },
            {
              id: "minute-14",
              cells: {
                number: { jp: ruby("[14分|じゅうよんぷん]") },
                reading: "じゅうよんぷん",
                note: "",
              },
            },
            {
              id: "minute-15",
              cells: {
                number: { jp: ruby("[15分|じゅうごふん]") },
                reading: "じゅうごふん",
                note: "",
              },
            },
            {
              id: "minute-16",
              cells: {
                number: { jp: ruby("[16分|じゅうろっぷん]") },
                reading: "じゅうろっぷん",
                note: "",
              },
            },
            {
              id: "minute-17",
              cells: {
                number: { jp: ruby("[17分|じゅうななふん]") },
                reading: "じゅうななふん",
                note: "",
              },
            },
            {
              id: "minute-18",
              cells: {
                number: { jp: ruby("[18分|じゅうはっぷん]") },
                reading: "じゅうはっぷん",
                note: "",
              },
            },
            {
              id: "minute-19",
              cells: {
                number: { jp: ruby("[19分|じゅうきゅうふん]") },
                reading: "じゅうきゅうふん",
                note: "",
              },
            },
            {
              id: "minute-20",
              cells: {
                number: { jp: ruby("[20分|にじゅっぷん]") },
                reading: "にじゅっぷん",
                note: "",
              },
            },
            {
              id: "minute-21",
              cells: {
                number: { jp: ruby("[21分|にじゅういっぷん]") },
                reading: "にじゅういっぷん",
                note: "",
              },
            },
            {
              id: "minute-22",
              cells: {
                number: { jp: ruby("[22分|にじゅうにふん]") },
                reading: "にじゅうにふん",
                note: "",
              },
            },
            {
              id: "minute-23",
              cells: {
                number: { jp: ruby("[23分|にじゅうさんぷん]") },
                reading: "にじゅうさんぷん",
                note: "",
              },
            },
            {
              id: "minute-24",
              cells: {
                number: { jp: ruby("[24分|にじゅうよんぷん]") },
                reading: "にじゅうよんぷん",
                note: "",
              },
            },
            {
              id: "minute-25",
              cells: {
                number: { jp: ruby("[25分|にじゅうごふん]") },
                reading: "にじゅうごふん",
                note: "",
              },
            },
            {
              id: "minute-26",
              cells: {
                number: { jp: ruby("[26分|にじゅうろっぷん]") },
                reading: "にじゅうろっぷん",
                note: "",
              },
            },
            {
              id: "minute-27",
              cells: {
                number: { jp: ruby("[27分|にじゅうななふん]") },
                reading: "にじゅうななふん",
                note: "",
              },
            },
            {
              id: "minute-28",
              cells: {
                number: { jp: ruby("[28分|にじゅうはっぷん]") },
                reading: "にじゅうはっぷん",
                note: "",
              },
            },
            {
              id: "minute-29",
              cells: {
                number: { jp: ruby("[29分|にじゅうきゅうふん]") },
                reading: "にじゅうきゅうふん",
                note: "",
              },
            },
            {
              id: "minute-30",
              cells: {
                number: { jp: ruby("[30分|さんじゅっぷん]") },
                reading: "さんじゅっぷん",
                note: "Con la hora también aparece mucho como 半.",
              },
            },
          ],
          zebra: true,
        },
        {
          type: "table",
          title: "Minutos 31〜60",
          description:
            "Aquí ya puedes ver cómo los mismos patrones siguen repitiéndose hasta el cierre del bloque.",
          columns: [
            { key: "number", label: "Minuto", width: "22%", align: "center" },
            { key: "reading", label: "Lectura", width: "34%", align: "center" },
            { key: "note", label: "Nota", width: "44%" },
          ],
          rows: [
            {
              id: "minute-31",
              cells: {
                number: { jp: ruby("[31分|さんじゅういっぷん]") },
                reading: "さんじゅういっぷん",
                note: "",
              },
            },
            {
              id: "minute-32",
              cells: {
                number: { jp: ruby("[32分|さんじゅうにふん]") },
                reading: "さんじゅうにふん",
                note: "",
              },
            },
            {
              id: "minute-33",
              cells: {
                number: { jp: ruby("[33分|さんじゅうさんぷん]") },
                reading: "さんじゅうさんぷん",
                note: "",
              },
            },
            {
              id: "minute-34",
              cells: {
                number: { jp: ruby("[34分|さんじゅうよんぷん]") },
                reading: "さんじゅうよんぷん",
                note: "",
              },
            },
            {
              id: "minute-35",
              cells: {
                number: { jp: ruby("[35分|さんじゅうごふん]") },
                reading: "さんじゅうごふん",
                note: "",
              },
            },
            {
              id: "minute-36",
              cells: {
                number: { jp: ruby("[36分|さんじゅうろっぷん]") },
                reading: "さんじゅうろっぷん",
                note: "",
              },
            },
            {
              id: "minute-37",
              cells: {
                number: { jp: ruby("[37分|さんじゅうななふん]") },
                reading: "さんじゅうななふん",
                note: "",
              },
            },
            {
              id: "minute-38",
              cells: {
                number: { jp: ruby("[38分|さんじゅうはっぷん]") },
                reading: "さんじゅうはっぷん",
                note: "",
              },
            },
            {
              id: "minute-39",
              cells: {
                number: { jp: ruby("[39分|さんじゅうきゅうふん]") },
                reading: "さんじゅうきゅうふん",
                note: "",
              },
            },
            {
              id: "minute-40",
              cells: {
                number: { jp: ruby("[40分|よんじゅっぷん]") },
                reading: "よんじゅっぷん",
                note: "",
              },
            },
            {
              id: "minute-41",
              cells: {
                number: { jp: ruby("[41分|よんじゅういっぷん]") },
                reading: "よんじゅういっぷん",
                note: "",
              },
            },
            {
              id: "minute-42",
              cells: {
                number: { jp: ruby("[42分|よんじゅうにふん]") },
                reading: "よんじゅうにふん",
                note: "",
              },
            },
            {
              id: "minute-43",
              cells: {
                number: { jp: ruby("[43分|よんじゅうさんぷん]") },
                reading: "よんじゅうさんぷん",
                note: "",
              },
            },
            {
              id: "minute-44",
              cells: {
                number: { jp: ruby("[44分|よんじゅうよんぷん]") },
                reading: "よんじゅうよんぷん",
                note: "",
              },
            },
            {
              id: "minute-45",
              cells: {
                number: { jp: ruby("[45分|よんじゅうごふん]") },
                reading: "よんじゅうごふん",
                note: "",
              },
            },
            {
              id: "minute-46",
              cells: {
                number: { jp: ruby("[46分|よんじゅうろっぷん]") },
                reading: "よんじゅうろっぷん",
                note: "",
              },
            },
            {
              id: "minute-47",
              cells: {
                number: { jp: ruby("[47分|よんじゅうななふん]") },
                reading: "よんじゅうななふん",
                note: "",
              },
            },
            {
              id: "minute-48",
              cells: {
                number: { jp: ruby("[48分|よんじゅうはっぷん]") },
                reading: "よんじゅうはっぷん",
                note: "",
              },
            },
            {
              id: "minute-49",
              cells: {
                number: { jp: ruby("[49分|よんじゅうきゅうふん]") },
                reading: "よんじゅうきゅうふん",
                note: "",
              },
            },
            {
              id: "minute-50",
              cells: {
                number: { jp: ruby("[50分|ごじゅっぷん]") },
                reading: "ごじゅっぷん",
                note: "",
              },
            },
            {
              id: "minute-51",
              cells: {
                number: { jp: ruby("[51分|ごじゅういっぷん]") },
                reading: "ごじゅういっぷん",
                note: "",
              },
            },
            {
              id: "minute-52",
              cells: {
                number: { jp: ruby("[52分|ごじゅうにふん]") },
                reading: "ごじゅうにふん",
                note: "",
              },
            },
            {
              id: "minute-53",
              cells: {
                number: { jp: ruby("[53分|ごじゅうさんぷん]") },
                reading: "ごじゅうさんぷん",
                note: "",
              },
            },
            {
              id: "minute-54",
              cells: {
                number: { jp: ruby("[54分|ごじゅうよんぷん]") },
                reading: "ごじゅうよんぷん",
                note: "",
              },
            },
            {
              id: "minute-55",
              cells: {
                number: { jp: ruby("[55分|ごじゅうごふん]") },
                reading: "ごじゅうごふん",
                note: "",
              },
            },
            {
              id: "minute-56",
              cells: {
                number: { jp: ruby("[56分|ごじゅうろっぷん]") },
                reading: "ごじゅうろっぷん",
                note: "",
              },
            },
            {
              id: "minute-57",
              cells: {
                number: { jp: ruby("[57分|ごじゅうななふん]") },
                reading: "ごじゅうななふん",
                note: "",
              },
            },
            {
              id: "minute-58",
              cells: {
                number: { jp: ruby("[58分|ごじゅうはっぷん]") },
                reading: "ごじゅうはっぷん",
                note: "",
              },
            },
            {
              id: "minute-59",
              cells: {
                number: { jp: ruby("[59分|ごじゅうきゅうふん]") },
                reading: "ごじゅうきゅうふん",
                note: "",
              },
            },
            {
              id: "minute-60",
              cells: {
                number: { jp: ruby("[60分|ろくじゅっぷん]") },
                reading: "ろくじゅっぷん",
                note: "Como referencia estructural; en la práctica también se piensa como 1時間.",
              },
            },
          ],
          zebra: true,
        },
        {
          type: "table",
          title: "Comparación rápida: 午前 / 午後 y 24 horas",
          description:
            "Aquí no queremos una teoría larga, sino una referencia visual clara para leer ambos sistemas.",
          columns: [
            { key: "twelve", label: "12 horas", width: "34%", align: "center" },
            { key: "twentyfour", label: "24 horas", width: "34%", align: "center" },
            { key: "idea", label: "Idea", width: "32%" },
          ],
          rows: [
            {
              id: "comp-1",
              cells: {
                twelve: { jp: ruby("[午前|ごぜん][7時|しちじ]") },
                twentyfour: { jp: ruby("[7時|しちじ]") },
                idea: "mañana",
              },
            },
            {
              id: "comp-2",
              cells: {
                twelve: { jp: ruby("[午後|ごご][3時|さんじ]") },
                twentyfour: { jp: ruby("[15時|じゅうごじ]") },
                idea: "misma franja horaria",
              },
            },
            {
              id: "comp-3",
              cells: {
                twelve: { jp: ruby("[午後|ごご][8時10分|はちじじゅっぷん]") },
                twentyfour: { jp: ruby("[20時10分|にじゅうじじゅっぷん]") },
                idea: "misma hora completa",
              },
            },
            {
              id: "comp-4",
              cells: {
                twelve: { jp: ruby("[午後|ごご][11時|じゅういちじ]") },
                twentyfour: { jp: ruby("[23時|にじゅうさんじ]") },
                idea: "noche",
              },
            },
          ],
          zebra: true,
        },
      ],
    },
    {
      id: "lesson-022-vocabulary",
      kind: "vocabulary",
      title: "Vocabulario base de esta unidad",
      description:
        "Aquí el léxico central no son objetos nuevos, sino palabras que te permiten preguntar, responder y anclar la hora dentro de una oración.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 3,
          items: [
            { id: "v022-now", jp: ruby("[今|いま]"), reading: "いま", meaning: "ahora", tags: ["tiempo", "base"] },
            { id: "v022-hour", jp: ruby("[時|じ]"), reading: "じ", meaning: "hora", tags: ["tiempo", "base"] },
            { id: "v022-minute", jp: ruby("[分|ふん]"), reading: "ふん", meaning: "minuto", tags: ["tiempo", "base"] },

            { id: "v022-half", jp: ruby("[半|はん]"), reading: "はん", meaning: "media / y media", tags: ["tiempo", "base"] },
            { id: "v022-am", jp: ruby("[午前|ごぜん]"), reading: "ごぜん", meaning: "AM / mañana", tags: ["tiempo", "base"] },
            { id: "v022-pm", jp: ruby("[午後|ごご]"), reading: "ごご", meaning: "PM / tarde-noche", tags: ["tiempo", "base"] },

            { id: "v022-what-hour", jp: ruby("[何時|なんじ]"), reading: "なんじ", meaning: "qué hora", tags: ["pregunta", "base"] },
            { id: "v022-what-minute", jp: ruby("[何分|なんぷん]"), reading: "なんぷん", meaning: "qué minuto", tags: ["pregunta", "base"] },
            { id: "v022-what-time", jp: ruby("[何時何分|なんじなんぷん]"), reading: "なんじなんぷん", meaning: "qué hora y qué minuto", tags: ["pregunta", "base"] },
          ],
        },
      ],
    },
    {
      id: "lesson-022-examples",
      kind: "examples",
      title: "Ejemplos guiados",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "ex-022-1",
              jp: ruby("[今|いま]、[4時|よじ]です。"),
              es: "Ahora son las 4.",
            },
            {
              id: "ex-022-2",
              jp: ruby("[今|いま]、[7時14分|しちじじゅうよんぷん]です。"),
              es: "Ahora son las 7:14.",
            },
            {
              id: "ex-022-3",
              jp: ruby("[今|いま]、[午後|ごご][3時16分|さんじじゅうろっぷん]です。"),
              es: "Ahora son las 3:16 de la tarde.",
            },
            {
              id: "ex-022-4",
              jp: ruby("[今|いま]、[15時16分|じゅうごじじゅうろっぷん]です。"),
              es: "Ahora son las 15:16.",
              notes: [
                {
                  es: "La misma franja horaria puede leerse también en sistema de 24 horas.",
                },
              ],
            },
            {
              id: "ex-022-5",
              jp: ruby("[毎朝|まいあさ][6時半|ろくじはん]に[起|お]きます。"),
              es: "Me levanto cada mañana a las 6:30.",
            },
            {
              id: "ex-022-6",
              jp: ruby("[午前|ごぜん][7時45分|しちじよんじゅうごふん]に[行|い]きます。"),
              es: "Voy a las 7:45 de la mañana.",
            },
            {
              id: "ex-022-7",
              jp: ruby("[午後|ごご][8時24分|はちじにじゅうよんぷん]に[帰|かえ]ります。"),
              es: "Vuelvo a las 8:24 de la tarde.",
            },
            {
              id: "ex-022-8",
              jp: ruby("[午後|ごご][11時|じゅういちじ]に[寝|ね]ます。"),
              es: "Me duermo a las 11 de la noche.",
            },
            {
              id: "ex-022-9",
              jp: ruby("[何時|なんじ]ですか。"),
              es: "¿Qué hora es?",
            },
            {
              id: "ex-022-10",
              jp: ruby("[何時何分|なんじなんぷん]ですか。"),
              es: "¿Qué hora y qué minuto es?",
            },
            {
              id: "ex-022-11",
              jp: ruby("[午後|ごご][9時半|くじはん]に[来|き]ます。"),
              es: "Vengo a las 9:30 de la noche.",
            },
            {
              id: "ex-022-12",
              jp: ruby("[24時1分|にじゅうよじいっぷん]です。"),
              es: "Son las 24:01.",
              notes: [
                {
                  es: "Esta forma se ve mucho más en pantallas u horarios que en conversación cotidiana.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-022-contrast",
      kind: "contrast",
      title: "Contrastes que conviene fijar",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-022-1",
              label: "Decir qué hora es vs anclar una acción",
              correct: {
                jp: ruby("[今|いま]、[7時|しちじ]です。 / [7時|しちじ]に[行|い]きます。"),
                es: "La primera informa la hora; la segunda marca el momento de una acción.",
              },
              explanation:
                "Aquí conviene fijar la diferencia de una vez. Si solo dices la hora, no aparece に. Si la hora marca cuándo ocurre una acción, aquí sí aparece に.",
            },
            {
              id: "contrast-022-2",
              label: "午前 / 午後 vs 24 horas",
              correct: {
                jp: ruby("[午後|ごご][3時|さんじ]です。 / [15時|じゅうごじ]です。"),
                es: "Las dos formas pueden señalar la misma franja horaria.",
              },
              explanation:
                "Una forma se siente más cotidiana y la otra más de paneles, noticias, estaciones u horarios.",
            },
            {
              id: "contrast-022-3",
              label: "30分 vs 半",
              correct: {
                jp: ruby("[6時30分|ろくじさんじゅっぷん]です。 / [6時半|ろくじはん]です。"),
                es: "Las dos existen, pero 半 es muy frecuente con la hora.",
              },
              explanation:
                "Aquí conviene reconocer ambas, aunque en esta ruta 半 debe quedar muy firme por su frecuencia real.",
            },
            {
              id: "contrast-022-4",
              label: "Hora simple vs hora completa",
              correct: {
                jp: ruby("[4時|よじ]です。 / [4時32分|よじさんじゅうにふん]です。"),
                es: "La segunda exige sumar minutos a la lectura de la hora.",
              },
              explanation:
                "Este paso es justo el que más cuesta al comienzo: no basta con saber 時 por separado; hay que encadenarlo bien con 分.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-022-warning",
      kind: "warning",
      title: "Qué conviene vigilar desde el principio",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "Aquí los errores más típicos no son de gramática, sino de lectura",
          content:
            "En esta unidad el peligro principal es confiar demasiado en la intuición numérica y no fijar bien las formas especiales. También conviene evitar poner に en frases donde solo dices qué hora es.",
          bullets: [
            {
              jp: ruby("[4時|よじ] / [7時|しちじ] / [9時|くじ]"),
              es: "estas tres horas deben quedar muy firmes desde el inicio",
            },
            {
              jp: ruby("[14時|じゅうよじ] / [17時|じゅうしちじ] / [19時|じゅうくじ]"),
              es: "las mismas irregularidades siguen dentro del sistema de 24 horas",
            },
            {
              jp: ruby("[今|いま]、[7時|しちじ]です。 / [7時|しちじ]に[行|い]きます。"),
              es: "no pongas に cuando solo informas la hora, pero sí cuando la hora ancla una acción",
            },
            {
              jp: ruby("[7時|しちじ]"),
              es: "la forma base más usada en esta ruta es しちじ, y conviene fijarla así porque es la que más cuesta pronunciar bien",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-022-practice",
      kind: "practice",
      title: "Práctica guiada antes del quiz",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Lee primero todas las horas del",
              jp: ruby("[1時|いちじ] al [12時|じゅうにじ]"),
              note: "sin saltarte 4時, 7時 y 9時.",
            },
            {
              es: "Después haz lo mismo con el sistema del",
              jp: ruby("[13時|じゅうさんじ] al [24時|にじゅうよじ]"),
              note: "para fijar también 14時, 17時 y 19時.",
            },
            {
              es: "Luego lee minutos del",
              jp: ruby("[1分|いっぷん] al [60分|ろくじゅっぷん]"),
              note: "mirando con cuidado los patrones de ぷん y っぷん.",
            },
            {
              es: "Practica preguntas con",
              jp: ruby("[今|いま]、[何時|なんじ]ですか。 / [今|いま]、[何時何分|なんじなんぷん]ですか。"),
            },
            {
              es: "Y cierra con acciones sencillas usando",
              jp: ruby("[6時半|ろくじはん]に[起|お]きます。 / [午後|ごご][8時24分|はちじにじゅうよんぷん]に[帰|かえ]ります。"),
              note: "para fijar cuándo aparece に.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-022-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Puedo preguntar la hora con",
              jp: ruby("[今|いま]、[何時|なんじ]ですか。 / [今|いま]、[何時何分|なんじなんぷん]ですか。"),
            },
            {
              es: "Puedo leer horas simples y horas completas con minutos.",
            },
            {
              es: "Puedo usar",
              jp: ruby("[半|はん]"),
              note: "cuando la hora cae en y media.",
            },
            {
              es: "Puedo reconocer y leer",
              jp: ruby("[午前|ごぜん] / [午後|ごご]"),
              note: "junto con el sistema de 24 horas.",
            },
            {
              es: "Puedo distinguir entre",
              jp: ruby("X[時|じ]です"),
              note: "y",
            },
            {
              es: "",
              jp: ruby("X[時|じ]にVます"),
              note: "según si la hora es información o momento de acción.",
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-022-quiz",
    title: "Quiz — La hora",
    description:
      "Repaso fuerte de horas y minutos. Aquí la mayor parte del trabajo consiste en escribir la lectura completa de la hora y reconocer cuándo la hora entra como dato y cuándo ancla una acción.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[4時|___]"),
        },
        acceptedAnswers: ["よじ"],
        placeholder: "Escribe la lectura",
        explanation:
          "4時 se fija como よじ.",
        relatedSectionIds: ["lesson-022-structure", "lesson-022-warning"],
      },
      {
        id: "q2",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[7時|___]"),
        },
        acceptedAnswers: ["しちじ"],
        placeholder: "Escribe la lectura",
        explanation:
          "En esta ruta, 7時 se fija como しちじ.",
        relatedSectionIds: ["lesson-022-structure", "lesson-022-warning"],
      },
      {
        id: "q3",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[9時|___]"),
        },
        acceptedAnswers: ["くじ"],
        placeholder: "Escribe la lectura",
        explanation:
          "9時 se fija como くじ.",
        relatedSectionIds: ["lesson-022-structure", "lesson-022-warning"],
      },
      {
        id: "q4",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[4時32分|___]"),
        },
        acceptedAnswers: ["よじさんじゅうにふん"],
        placeholder: "Escribe la lectura completa",
        explanation:
          "Aquí unes よじ con さんじゅうにふん.",
        relatedSectionIds: ["lesson-022-structure", "lesson-022-contrast"],
      },
      {
        id: "q5",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[7時14分|___]"),
        },
        acceptedAnswers: ["しちじじゅうよんぷん"],
        placeholder: "Escribe la lectura completa",
        explanation:
          "7時14分 se lee しちじじゅうよんぷん.",
        relatedSectionIds: ["lesson-022-structure", "lesson-022-warning"],
      },
      {
        id: "q6",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[9時6分|___]"),
        },
        acceptedAnswers: ["くじろっぷん"],
        placeholder: "Escribe la lectura completa",
        explanation:
          "Aquí 6分 se fija como ろっぷん.",
        relatedSectionIds: ["lesson-022-structure", "lesson-022-warning"],
      },
      {
        id: "q7",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[11時28分|___]"),
        },
        acceptedAnswers: ["じゅういちじにじゅうはっぷん"],
        placeholder: "Escribe la lectura completa",
        explanation:
          "11時28分 = じゅういちじ + にじゅうはっぷん.",
        relatedSectionIds: ["lesson-022-structure", "lesson-022-examples"],
      },
      {
        id: "q8",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[6時半|___]"),
        },
        acceptedAnswers: ["ろくじはん"],
        placeholder: "Escribe la lectura completa",
        explanation:
          "Con la hora, 30分 aparece muy frecuentemente como 半.",
        relatedSectionIds: ["lesson-022-structure", "lesson-022-contrast"],
      },
      {
        id: "q9",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[午後|ごご][3時16分|___]"),
        },
        acceptedAnswers: ["ごごさんじじゅうろっぷん"],
        placeholder: "Escribe la lectura completa",
        explanation:
          "Aquí la lectura completa es ごごさんじじゅうろっぷん.",
        relatedSectionIds: ["lesson-022-structure", "lesson-022-examples"],
      },
      {
        id: "q10",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[午前|ごぜん][8時24分|___]"),
        },
        acceptedAnswers: ["ごぜんはちじにじゅうよんぷん"],
        placeholder: "Escribe la lectura completa",
        explanation:
          "Aquí unes 午前 con 8時24分.",
        relatedSectionIds: ["lesson-022-structure", "lesson-022-examples"],
      },
      {
        id: "q11",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[15時8分|___]"),
        },
        acceptedAnswers: ["じゅうごじはっぷん"],
        placeholder: "Escribe la lectura completa",
        explanation:
          "15時8分 se lee じゅうごじはっぷん.",
        relatedSectionIds: ["lesson-022-structure", "lesson-022-contrast"],
      },
      {
        id: "q12",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[17時46分|___]"),
        },
        acceptedAnswers: ["じゅうしちじよんじゅうろっぷん"],
        placeholder: "Escribe la lectura completa",
        explanation:
          "Aquí fijamos 17時 como じゅうしちじ.",
        relatedSectionIds: ["lesson-022-structure", "lesson-022-warning"],
      },
      {
        id: "q13",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[19時27分|___]"),
        },
        acceptedAnswers: ["じゅうくじにじゅうななふん"],
        placeholder: "Escribe la lectura completa",
        explanation:
          "19時27分 se lee じゅうくじにじゅうななふん.",
        relatedSectionIds: ["lesson-022-structure", "lesson-022-warning"],
      },
      {
        id: "q14",
        type: "fill-blank",
        prompt: {
          es: "Completa la partícula correcta:",
          jp: ruby("[6時半|ろくじはん]___[起|お]きます。"),
        },
        acceptedAnswers: ["に"],
        placeholder: "助詞",
        explanation:
          "Aquí la hora marca el momento de una acción, por eso entra に.",
        relatedSectionIds: ["lesson-022-structure", "lesson-022-contrast"],
      },
      {
        id: "q15",
        type: "fill-blank",
        prompt: {
          es: "Escribe la lectura completa:",
          jp: ruby("[24時1分|___]"),
        },
        acceptedAnswers: ["にじゅうよじいっぷん"],
        placeholder: "Escribe la lectura completa",
        explanation:
          "24時1分 se lee にじゅうよじいっぷん.",
        relatedSectionIds: ["lesson-022-structure", "lesson-022-examples"],
      },
      {
        id: "q16",
        type: "order-sentence",
        prompt: {
          es: "Ordena la pregunta correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[今|いま]") }, value: "今" },
          { id: "t2", label: { jp: ruby("[何時|なんじ]") }, value: "何時" },
          { id: "t3", label: { jp: ruby("ですか。") }, value: "ですか。" },
        ],
        correctOrder: ["t1", "t2", "t3"],
        answerLabel: { jp: ruby("[今|いま][何時|なんじ]ですか。") },
        explanation:
          "La pregunta base por la hora se arma como 今何時ですか。",
        relatedSectionIds: ["lesson-022-structure", "lesson-022-summary"],
      },
      {
        id: "q17",
        type: "order-sentence",
        prompt: {
          es: "Ordena la pregunta correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[今|いま]") }, value: "今" },
          { id: "t2", label: { jp: ruby("[何時何分|なんじなんぷん]") }, value: "何時何分" },
          { id: "t3", label: { jp: ruby("ですか。") }, value: "ですか。" },
        ],
        correctOrder: ["t1", "t2", "t3"],
        answerLabel: { jp: ruby("[今|いま][何時何分|なんじなんぷん]ですか。") },
        explanation:
          "Cuando quieres la hora completa con minutos, aquí usas 何時何分ですか。",
        relatedSectionIds: ["lesson-022-structure", "lesson-022-summary"],
      },
      {
        id: "q18",
        type: "order-sentence",
        prompt: {
          es: "Ordena la oración correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[毎朝|まいあさ]") }, value: "毎朝" },
          { id: "t2", label: { jp: ruby("[6時半|ろくじはん]") }, value: "6時半" },
          { id: "t3", label: { jp: ruby("に") }, value: "に" },
          { id: "t4", label: { jp: ruby("[起|お]きます。") }, value: "起きます。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("[毎朝|まいあさ][6時半|ろくじはん]に[起|お]きます。") },
        explanation:
          "Aquí la hora ancla la acción, por eso aparece に antes del verbo.",
        relatedSectionIds: ["lesson-022-structure", "lesson-022-examples"],
      },
      {
        id: "q19",
        type: "order-sentence",
        prompt: {
          es: "Ordena la oración correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[午後|ごご]") }, value: "午後" },
          { id: "t2", label: { jp: ruby("[8時24分|はちじにじゅうよんぷん]") }, value: "8時24分" },
          { id: "t3", label: { jp: ruby("に") }, value: "に" },
          { id: "t4", label: { jp: ruby("[帰|かえ]ります。") }, value: "帰ります。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("[午後|ごご][8時24分|はちじにじゅうよんぷん]に[帰|かえ]ります。") },
        explanation:
          "Aquí 午後 va delante de la hora y la hora toma に antes del verbo.",
        relatedSectionIds: ["lesson-022-structure", "lesson-022-examples"],
      },
      {
        id: "q20",
        type: "order-sentence",
        prompt: {
          es: "Ordena la oración correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[午前|ごぜん]") }, value: "午前" },
          { id: "t2", label: { jp: ruby("[7時45分|しちじよんじゅうごふん]") }, value: "7時45分" },
          { id: "t3", label: { jp: ruby("に") }, value: "に" },
          { id: "t4", label: { jp: ruby("[行|い]きます。") }, value: "行きます。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("[午前|ごぜん][7時45分|しちじよんじゅうごふん]に[行|い]きます。") },
        explanation:
          "Aquí la oración queda anclada con 午前 y con una hora completa antes de に.",
        relatedSectionIds: ["lesson-022-structure", "lesson-022-examples"],
      },
    ],
  },
};

export default lesson022;
