//src/data/grammar/lessons/lesson-015.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson015: GrammarLesson = {
  id: "lesson-015",
  slug: "familia-y-niveles-escolares",
  order: 18,
  level: "N5",
  status: "ready",
  title: "Familia y niveles escolares",
  jpTitle: "かぞく・がっこう・〜ねんせい",
  shortTitle: "Familia y escuela",
  description:
    "Cómo hablar de la familia propia y la de otras personas, distinguir pares como 父 / お父さん o 夫 / ご主人, fijar el caso especial de おじさん y おばさん, y describir niveles escolares completos como 小学校2年生, 高校3年生 o 大学1年生 dentro de perfiles familiares simples.",
  estimatedMinutes: 78,
  categoryTags: ["fundamentos", "familia", "escuela", "personas", "lectura", "integracion"],
  grammarTags: [
    "家族",
    "父",
    "お父さん",
    "母",
    "お母さん",
    "兄",
    "お兄さん",
    "姉",
    "お姉さん",
    "弟",
    "弟さん",
    "妹",
    "妹さん",
    "夫",
    "ご主人",
    "妻",
    "奥さん",
    "祖父",
    "祖母",
    "おじいさん",
    "おばあさん",
    "息子",
    "息子さん",
    "娘",
    "娘さん",
    "おじさん",
    "おばさん",
    "家族は〜人です",
    "〜年生",
  ],
  searchTerms: [
    "familia en japones",
    "chichi otousan haha okaasan",
    "otto goshujin tsuma okusan",
    "ani onii san ane onee san",
    "imouto san otouto san",
    "escuela japones shougakkou chugakkou koukou daigaku",
    "nensei japones",
    "familia y nivel escolar japones",
  ],
  relatedLessonSlugs: [
    "wa-desu-basico",
    "preguntas-basicas-desu-ka",
    "numeros-1-99",
    "edad-oikutsu-nansai",
    "contadores-basicos-tsu-ko-mai-hon-satsu-nin",
  ],
  relatedVocabularyTags: ["familia", "personas", "escuela", "numeros", "base"],
  objectives: [
    "Distinguir entre la forma para hablar de tu propia familia y la forma para hablar de la familia de otra persona.",
    "Fijar pares importantes como 父 / お父さん, 母 / お母さん, 夫 / ご主人 y 妻 / 奥さん.",
    "Reconocer el caso especial de おじさん y おばさん, que aquí mantenemos igual en ambos lados.",
    "Aprender las etapas escolares básicas desde 幼稚園 hasta 大学院.",
    "Usar formas completas como 小学校2年生, 高校3年生 y 大学1年生 como patrón base de esta unidad.",
    "Describir perfiles familiares simples combinando familia, número de miembros y nivel escolar.",
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
      id: "lesson-015-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "En esta unidad vas a trabajar dos bloques que encajan muy bien entre sí. Primero, aprenderás a hablar de la familia propia y de la familia de otras personas sin mezclar las formas. Después, usarás esa base para describir en qué etapa escolar está cada miembro de la familia. Así podrás leer y producir perfiles simples como “mi hermana está en la universidad” o “el hijo de esa familia está en segundo de secundaria”.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Vas a contrastar pares como:",
              jp: ruby("[父|ちち] / お[父|とう]さん、[母|はは] / お[母|かあ]さん、[夫|おっと] / ご[主人|しゅじん]、[妻|つま] / [奥|おく]さん。"),
            },
            {
              es: "También fijaremos con cuidado el caso de:",
              jp: [{ text: "おじさん / おばさん" }],
              note: "en esta ruta básica los trabajaremos igual para familia propia y ajena.",
            },
            {
              es: "Y aprenderás a leer niveles completos como:",
              jp: ruby("[小学校|しょうがっこう]2[年生|ねんせい] / [高校|こうこう]3[年生|ねんせい] / [大学|だいがく]1[年生|ねんせい] / [大学院|だいがくいん]1[年生|ねんせい]。"),
            },
          ],
        },
      ],
    },
    {
      id: "lesson-015-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Mi familia y la familia de otros no se nombran igual",
          content:
            "La idea más importante de esta unidad es que en japonés no siempre usas la misma palabra para hablar de tu propia familia y para hablar de la familia de otra persona. Cuando hablas de la tuya, muchas veces usas una forma más simple o más contenida. Cuando hablas de la familia de otra persona, aparecen formas más amables o respetuosas.",
          bullets: [
            {
              jp: ruby("[父|ちち] / お[父|とう]さん"),
              es: "mi padre / el padre de otra persona",
            },
            {
              jp: ruby("[母|はは] / お[母|かあ]さん"),
              es: "mi madre / la madre de otra persona",
            },
            {
              jp: ruby("[兄|あに] / お[兄|にい]さん"),
              es: "mi hermano mayor / el hermano mayor de otra persona",
            },
            {
              jp: ruby("[姉|あね] / お[姉|ねえ]さん"),
              es: "mi hermana mayor / la hermana mayor de otra persona",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "No todos los miembros cambian de la misma forma",
          content:
            "Aquí conviene fijar que algunas palabras siguen un contraste muy claro entre mi familia y la de otra persona, pero otras no se comportan exactamente igual. Esta unidad no intenta cubrir toda la complejidad social del tema; la idea es darte una base clara y utilizable.",
          bullets: [
            {
              jp: ruby("[夫|おっと] / ご[主人|しゅじん]"),
              es: "mi esposo / el esposo de otra persona",
            },
            {
              jp: ruby("[妻|つま] / [奥|おく]さん"),
              es: "mi esposa / la esposa de otra persona",
            },
            {
              jp: [{ text: "おじさん / おばさん" }],
              es: "en esta ruta básica los fijamos igual en ambos lados",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "La etapa escolar conviene decirla completa",
          content:
            "Aquí no trabajaremos la forma reducida como base. Para esta unidad conviene decir el nivel completo, porque así queda claro si hablas de primaria, secundaria, enseñanza media, universidad o posgrado. Por eso fijaremos formas como 小学校2年生, 中学校1年生 o 高校3年生.",
          bullets: [
            {
              jp: ruby("[小学校|しょうがっこう]2[年生|ねんせい]"),
              es: "segundo de primaria",
            },
            {
              jp: ruby("[中学校|ちゅうがっこう]1[年生|ねんせい]"),
              es: "primero de secundaria",
            },
            {
              jp: ruby("[高校|こうこう]3[年生|ねんせい]"),
              es: "tercero de enseñanza media",
            },
            {
              jp: ruby("[大学|だいがく]1[年生|ねんせい] / [大学院|だいがくいん]1[年生|ねんせい]"),
              es: "primer año de universidad / primer año de posgrado",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Esta unidad encaja muy bien con números y contadores",
          content:
            "La familia no se describe solo con nombres. Aquí también vas a reutilizar la base numérica y el contador 人 para decir cuántas personas hay en la familia. Eso hace que esta unidad conecte muy bien con las unidades anteriores.",
          bullets: [
            {
              jp: ruby("[私|わたし]の[家族|かぞく]は5[人|にん]です。"),
              es: "mi familia somos cinco personas",
            },
            {
              jp: ruby("[兄|あに]は[大学院|だいがくいん]1[年生|ねんせい]です。"),
              es: "mi hermano mayor está en primer año de posgrado",
            },
            {
              jp: ruby("[妹|いもうと]は[高校|こうこう]1[年生|ねんせい]です。"),
              es: "mi hermana menor está en primero de enseñanza media",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-015-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-015-1",
              label: "Mi familia",
              pattern: ruby("[私|わたし]の A は B です。"),
              meaning: "Mi A es B.",
              translation:
                "Esta estructura te sirve para presentar a un miembro de tu propia familia y decir quién es o en qué nivel escolar está.",
              structure: [
                {
                  slot: "A",
                  value: "miembro de mi familia",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[父|ちち] / [母|はは] / [兄|あに] / [姉|あね] / [弟|おとうと] / [妹|いもうと] / [夫|おっと] / [妻|つま]。"),
                  },
                },
                {
                  slot: "B",
                  value: "identificación o etapa",
                  note: {
                    es: "Puede ser una profesión, un rol o un nivel escolar como:",
                    jp: ruby("[会社員|かいしゃいん] / [先生|せんせい] / [小学校|しょうがっこう]2[年生|ねんせい] / [大学|だいがく]1[年生|ねんせい]。"),
                  },
                },
              ],
              notes: [
                {
                  es: "Aquí conviene fijar primero el vocabulario de la familia y después reutilizar la estructura base de は + です que ya conoces.",
                },
              ],
            },
            {
              id: "pattern-015-2",
              label: "La familia de otra persona",
              pattern: ruby("Xさんの A は B です。"),
              meaning: "El / la A de X es B.",
              translation:
                "Aquí usas las formas para hablar de la familia de otra persona. La estructura general no cambia; lo que cambia es el vocabulario familiar que eliges.",
              structure: [
                {
                  slot: "Xさん",
                  value: "persona de referencia",
                  note: "La persona cuya familia estás describiendo.",
                },
                {
                  slot: "A",
                  value: "miembro de la familia ajena",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("お[父|とう]さん / お[母|かあ]さん / お[兄|にい]さん / お[姉|ねえ]さん / [弟|おとうと]さん / [妹|いもうと]さん / ご[主人|しゅじん] / [奥|おく]さん。"),
                  },
                },
                {
                  slot: "B",
                  value: "identificación o etapa",
                  note: {
                    es: "Puede ser una profesión o un nivel escolar.",
                  },
                },
              ],
              notes: [
                {
                  es: "La gramática general de la frase sigue siendo simple; la dificultad real está en elegir el término familiar correcto.",
                },
              ],
            },
            {
              id: "pattern-015-3",
              label: "Cantidad de miembros",
              pattern: ruby("[私|わたし]の[家族|かぞく]は N[人|にん]です。"),
              meaning: "Mi familia somos N personas.",
              translation:
                "Aquí reaparece el contador 人 para decir cuántas personas hay en la familia.",
              structure: [
                {
                  slot: { jp: ruby("[家族|かぞく]") },
                  value: "familia",
                  note: "El grupo del que hablas.",
                },
                {
                  slot: "N人",
                  value: "número de personas",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("3[人|にん] / 4[人|にん] / 5[人|にん] / 7[人|にん]。"),
                  },
                },
              ],
              notes: [
                {
                  es: "Esta estructura conecta directamente con la unidad de contadores.",
                },
              ],
            },
            {
              id: "pattern-015-4",
              label: "Nivel escolar completo",
              pattern: ruby("A は [学校段階|がっこうだんかい] N[年生|ねんせい]です。"),
              meaning: "A está en tal etapa y en tal año.",
              translation:
                "Aquí conviene decir la etapa completa y después el año escolar. En esta unidad trabajaremos la forma completa como patrón base.",
              structure: [
                {
                  slot: { jp: ruby("[学校段階|がっこうだんかい]") },
                  value: "etapa escolar",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[小学校|しょうがっこう] / [中学校|ちゅうがっこう] / [高校|こうこう] / [大学|だいがく] / [大学院|だいがくいん]。"),
                  },
                },
                {
                  slot: "N年生",
                  value: "año o curso",
                  note: {
                    es: "Se une a la etapa completa, por ejemplo:",
                    jp: ruby("2[年生|ねんせい] / 3[年生|ねんせい] / 1[年生|ねんせい]。"),
                  },
                },
              ],
              notes: [
                {
                  es: "En esta ruta no fijamos como base la forma reducida “3年” sola; trabajamos con la etapa completa.",
                },
              ],
            },
          ],
        },
        {
          type: "table",
          title: "Familia propia y familia de otros",
          description:
            "Aquí tienes el mapa principal de esta unidad. No memorices solo la traducción: fíjate en qué forma usas cuando hablas de tu propia familia y cuál aparece cuando hablas de la familia de otra persona.",
          columns: [
            { key: "relation", label: "Relación", width: "20%" },
            { key: "mine", label: "Mi familia", width: "25%" },
            { key: "others", label: "Familia de otra persona", width: "30%" },
            { key: "note", label: "Nota", width: "25%" },
          ],
          rows: [
            {
              id: "family-grandfather",
              cells: {
                relation: "abuelo",
                mine: { jp: ruby("[祖父|そふ]") },
                others: { jp: ruby("おじいさん") },
                note: "contraste base para abuelo propio y ajeno",
              },
            },
            {
              id: "family-grandmother",
              cells: {
                relation: "abuela",
                mine: { jp: ruby("[祖母|そぼ]") },
                others: { jp: ruby("おばあさん") },
                note: "contraste base para abuela propia y ajena",
              },
            },
            {
              id: "family-father",
              cells: {
                relation: "padre",
                mine: { jp: ruby("[父|ちち]") },
                others: { jp: ruby("お[父|とう]さん") },
                note: "uno de los contrastes más importantes de la unidad",
              },
            },
            {
              id: "family-mother",
              cells: {
                relation: "madre",
                mine: { jp: ruby("[母|はは]") },
                others: { jp: ruby("お[母|かあ]さん") },
                note: "uno de los contrastes más importantes de la unidad",
              },
            },
            {
              id: "family-older-brother",
              cells: {
                relation: "hermano mayor",
                mine: { jp: ruby("[兄|あに]") },
                others: { jp: ruby("お[兄|にい]さん") },
                note: "la diferencia se fija muy pronto en japonés básico",
              },
            },
            {
              id: "family-older-sister",
              cells: {
                relation: "hermana mayor",
                mine: { jp: ruby("[姉|あね]") },
                others: { jp: ruby("お[姉|ねえ]さん") },
                note: "la diferencia se fija muy pronto en japonés básico",
              },
            },
            {
              id: "family-younger-brother",
              cells: {
                relation: "hermano menor",
                mine: { jp: ruby("[弟|おとうと]") },
                others: { jp: ruby("[弟|おとうと]さん") },
                note: "aquí mantenemos la base con さん para la familia ajena",
              },
            },
            {
              id: "family-younger-sister",
              cells: {
                relation: "hermana menor",
                mine: { jp: ruby("[妹|いもうと]") },
                others: { jp: ruby("[妹|いもうと]さん") },
                note: "aquí mantenemos la base con さん para la familia ajena",
              },
            },
            {
              id: "family-husband",
              cells: {
                relation: "esposo",
                mine: { jp: ruby("[夫|おっと]") },
                others: { jp: ruby("ご[主人|しゅじん]") },
                note: "contraste muy útil en lectura y conversación",
              },
            },
            {
              id: "family-wife",
              cells: {
                relation: "esposa",
                mine: { jp: ruby("[妻|つま]") },
                others: { jp: ruby("[奥|おく]さん") },
                note: "contraste muy útil en lectura y conversación",
              },
            },
            {
              id: "family-son",
              cells: {
                relation: "hijo",
                mine: { jp: ruby("[息子|むすこ]") },
                others: { jp: ruby("[息子|むすこ]さん") },
                note: "patrón útil para hablar de familias con hijos",
              },
            },
            {
              id: "family-daughter",
              cells: {
                relation: "hija",
                mine: { jp: ruby("[娘|むすめ]") },
                others: { jp: ruby("[娘|むすめ]さん") },
                note: "patrón útil para hablar de familias con hijos",
              },
            },
            {
              id: "family-uncle",
              cells: {
                relation: "tío",
                mine: { jp: [{ text: "おじさん" }] },
                others: { jp: [{ text: "おじさん" }] },
                note: "en esta ruta básica lo fijamos igual en ambos lados",
              },
            },
            {
              id: "family-aunt",
              cells: {
                relation: "tía",
                mine: { jp: [{ text: "おばさん" }] },
                others: { jp: [{ text: "おばさん" }] },
                note: "en esta ruta básica lo fijamos igual en ambos lados",
              },
            },
          ],
          zebra: true,
        },
        {
          type: "table",
          title: "Etapas escolares y forma base de esta unidad",
          description:
            "Aquí fijamos la etapa completa como patrón base. En esta lesson no queremos que el alumno piense solo en “3年生”, sino en el bloque completo que dice claramente de qué etapa se trata.",
          columns: [
            { key: "stage", label: "Etapa", width: "22%" },
            { key: "range", label: "Años", width: "28%" },
            { key: "example", label: "Ejemplo base", width: "30%" },
            { key: "note", label: "Nota", width: "20%" },
          ],
          rows: [
            {
              id: "school-kindergarten",
              cells: {
                stage: { jp: ruby("[幼稚園|ようちえん]") },
                range: "etapa previa",
                example: { jp: ruby("[幼稚園|ようちえん]です。") },
                note: "aquí la fijamos como etapa general",
              },
            },
            {
              id: "school-elementary",
              cells: {
                stage: { jp: ruby("[小学校|しょうがっこう]") },
                range: "1年生〜6年生",
                example: { jp: ruby("[小学校|しょうがっこう]2[年生|ねんせい]") },
                note: "primaria",
              },
            },
            {
              id: "school-juniorhigh",
              cells: {
                stage: { jp: ruby("[中学校|ちゅうがっこう]") },
                range: "1年生〜3年生",
                example: { jp: ruby("[中学校|ちゅうがっこう]1[年生|ねんせい]") },
                note: "secundaria",
              },
            },
            {
              id: "school-high",
              cells: {
                stage: { jp: ruby("[高校|こうこう]") },
                range: "1年生〜3年生",
                example: { jp: ruby("[高校|こうこう]3[年生|ねんせい]") },
                note: "enseñanza media",
              },
            },
            {
              id: "school-university",
              cells: {
                stage: { jp: ruby("[大学|だいがく]") },
                range: "1年生〜4年生",
                example: { jp: ruby("[大学|だいがく]1[年生|ねんせい]") },
                note: "universidad",
              },
            },
            {
              id: "school-grad",
              cells: {
                stage: { jp: ruby("[大学院|だいがくいん]") },
                range: "1年生〜",
                example: { jp: ruby("[大学院|だいがくいん]1[年生|ねんせい]") },
                note: "posgrado",
              },
            },
          ],
          zebra: true,
        },
      ],
    },
    {
      id: "lesson-015-vocabulary",
      kind: "vocabulary",
      title: "Vocabulario de apoyo para ampliar la unidad",
      description:
        "La tabla ya fija la base nuclear de la familia y las etapas escolares. Aquí el objetivo es sumar palabras nuevas y útiles para que los textos, ejercicios y perfiles no se sientan pobres ni repetitivos a este punto del curso.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 4,
          items: [
            { id: "vocab-015-parents", jp: ruby("[両親|りょうしん]"), reading: "りょうしん", meaning: "padres / ambos padres", tags: ["familia", "apoyo"] },
            { id: "vocab-015-siblings", jp: ruby("[兄弟|きょうだい]"), reading: "きょうだい", meaning: "hermanos", tags: ["familia", "apoyo"] },
            { id: "vocab-015-sisters", jp: ruby("[姉妹|しまい]"), reading: "しまい", meaning: "hermanas", tags: ["familia", "apoyo"] },
            { id: "vocab-015-parent-child", jp: ruby("[親子|おやこ]"), reading: "おやこ", meaning: "padre/madre e hijo/a", tags: ["familia", "apoyo"] },

            { id: "vocab-015-couple", jp: ruby("[夫婦|ふうふ]"), reading: "ふうふ", meaning: "matrimonio / pareja casada", tags: ["familia", "apoyo"] },
            { id: "vocab-015-eldest-son", jp: ruby("[長男|ちょうなん]"), reading: "ちょうなん", meaning: "hijo mayor", tags: ["familia", "nuevo"] },
            { id: "vocab-015-eldest-daughter", jp: ruby("[長女|ちょうじょ]"), reading: "ちょうじょ", meaning: "hija mayor", tags: ["familia", "nuevo"] },
            { id: "vocab-015-second-son", jp: ruby("[次男|じなん]"), reading: "じなん", meaning: "segundo hijo varón", tags: ["familia", "nuevo"] },

            { id: "vocab-015-second-daughter", jp: ruby("[次女|じじょ]"), reading: "じじょ", meaning: "segunda hija", tags: ["familia", "nuevo"] },
            { id: "vocab-015-youngest-child", jp: ruby("[末|すえ]っ[子|こ]"), reading: "すえっこ", meaning: "hijo o hija menor / el benjamín", tags: ["familia", "nuevo"] },
            { id: "vocab-015-only-child", jp: ruby("[一人|ひとり]っ[子|こ]"), reading: "ひとりっこ", meaning: "hijo único / hija única", tags: ["familia", "nuevo"] },
            { id: "vocab-015-relative", jp: ruby("[親戚|しんせき]"), reading: "しんせき", meaning: "pariente / familiar", tags: ["familia", "apoyo"] },

            { id: "vocab-015-grade", jp: ruby("[学年|がくねん]"), reading: "がくねん", meaning: "curso / nivel escolar", tags: ["escuela", "apoyo"] },
            { id: "vocab-015-classmate", jp: ruby("[同級生|どうきゅうせい]"), reading: "どうきゅうせい", meaning: "compañero/a de curso", tags: ["escuela", "nuevo"] },
            { id: "vocab-015-senpai", jp: ruby("[先輩|せんぱい]"), reading: "せんぱい", meaning: "compañero/a de curso superior", tags: ["escuela", "nuevo"] },
            { id: "vocab-015-kouhai", jp: ruby("[後輩|こうはい]"), reading: "こうはい", meaning: "compañero/a de curso inferior", tags: ["escuela", "nuevo"] },

            { id: "vocab-015-classroom", jp: ruby("[教室|きょうしつ]"), reading: "きょうしつ", meaning: "sala de clases", tags: ["escuela", "apoyo"] },
            { id: "vocab-015-uniform", jp: ruby("[制服|せいふく]"), reading: "せいふく", meaning: "uniforme escolar", tags: ["escuela", "nuevo"] },
            { id: "vocab-015-student-card", jp: ruby("[学生証|がくせいしょう]"), reading: "がくせいしょう", meaning: "credencial de estudiante", tags: ["escuela", "nuevo"] },
            { id: "vocab-015-schoolbag", jp: ruby("[通学|つうがく]かばん"), reading: "つうがくかばん", meaning: "bolso o mochila escolar", tags: ["escuela", "nuevo"] },

            { id: "vocab-015-entrance-ceremony", jp: ruby("[入学式|にゅうがくしき]"), reading: "にゅうがくしき", meaning: "ceremonia de ingreso", tags: ["escuela", "nuevo"] },
            { id: "vocab-015-graduation", jp: ruby("[卒業式|そつぎょうしき]"), reading: "そつぎょうしき", meaning: "ceremonia de graduación", tags: ["escuela", "nuevo"] },
            { id: "vocab-015-lab", jp: ruby("[研究室|けんきゅうしつ]"), reading: "けんきゅうしつ", meaning: "laboratorio / seminario universitario", tags: ["escuela", "nuevo"] },
            { id: "vocab-015-international-student", jp: ruby("[留学生|りゅうがくせい]"), reading: "りゅうがくせい", meaning: "estudiante extranjero / internacional", tags: ["escuela", "nuevo"] },
          ],
        },
      ],
    },
    {
      id: "lesson-015-examples",
      kind: "examples",
      title: "Cuatro textos guiados",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "text-015-1",
              jp: ruby("[私|わたし]の[家族|かぞく]は5[人|にん]です。[父|ちち]は[会社員|かいしゃいん]です。[母|はは]は[看護師|かんごし]です。[姉|あね]は[大学|だいがく]1[年生|ねんせい]です。[弟|おとうと]は[小学校|しょうがっこう]2[年生|ねんせい]です。[私|わたし]は[高校|こうこう]3[年生|ねんせい]です。"),
              es: "Mi familia somos cinco personas. Mi padre es empleado de empresa. Mi madre es enfermera. Mi hermana mayor está en primer año de universidad. Mi hermano menor está en segundo de primaria. Yo estoy en tercero de enseñanza media.",
              notes: [
                {
                  es: "Aquí se mezclan familia propia, profesiones, número de miembros y niveles escolares completos.",
                },
              ],
            },
            {
              id: "text-015-2",
              jp: ruby("[私|わたし]の[家族|かぞく]は7[人|にん]です。[祖父|そふ]と[祖母|そぼ]もいます。[父|ちち]は[先生|せんせい]です。[母|はは]は[会社員|かいしゃいん]です。[兄|あに]は[大学院|だいがくいん]1[年生|ねんせい]です。[妹|いもうと]は[高校|こうこう]1[年生|ねんせい]です。[私|わたし]は[大学|だいがく]2[年生|ねんせい]です。"),
              es: "Mi familia somos siete personas. Mi abuelo y mi abuela también están con nosotros. Mi padre es profesor. Mi madre es empleada de empresa. Mi hermano mayor está en primer año de posgrado. Mi hermana menor está en primero de enseñanza media. Yo estoy en segundo de universidad.",
              notes: [
                {
                  es: "Este texto amplía el foco hacia abuelos y posgrado sin salir del patrón simple de は + です.",
                },
              ],
            },
            {
              id: "text-015-3",
              jp: ruby("[私|わたし]の[家族|かぞく]は4[人|にん]です。[夫|おっと]は[会社員|かいしゃいん]です。[私|わたし]は[店員|てんいん]です。[息子|むすこ]は[中学校|ちゅうがっこう]1[年生|ねんせい]です。[娘|むすめ]は[小学校|しょうがっこう]4[年生|ねんせい]です。"),
              es: "Mi familia somos cuatro personas. Mi esposo es empleado de empresa. Yo soy dependienta. Mi hijo está en primero de secundaria. Mi hija está en cuarto de primaria.",
              notes: [
                {
                  es: "Aquí aparecen esposo, hijo e hija dentro de un perfil muy directo y natural.",
                },
              ],
            },
            {
              id: "text-015-4",
              jp: ruby("こちらは[森|もり]さんの[家族|かぞく]です。ご[主人|しゅじん]は[医者|いしゃ]です。[奥|おく]さんは[先生|せんせい]です。[息子|むすこ]さんは[高校|こうこう]2[年生|ねんせい]です。[娘|むすめ]さんは[中学校|ちゅうがっこう]3[年生|ねんせい]です。おじさんとおばさんもいます。"),
              es: "Esta es la familia de Mori. Su esposo es médico. Su esposa es profesora. Su hijo está en segundo de enseñanza media. Su hija está en tercero de secundaria. También hay tío y tía.",
              notes: [
                {
                  es: "Aquí el foco cambia a la familia de otra persona y por eso aparecen ご主人, 奥さん, 息子さん y 娘さん.",
                },
                {
                  es: "También reaparece el caso especial de おじさん y おばさん como formas fijas en esta ruta.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-015-contrast",
      kind: "contrast",
      title: "Contrastes clave",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-015-1",
              label: "Familia propia vs familia de otra persona",
              correct: {
                jp: ruby("[父|ちち] / お[父|とう]さん"),
                es: "La primera se fija para mi familia; la segunda para la familia de otra persona.",
              },
              explanation:
                "La gramática general no cambia, pero el vocabulario familiar sí. Ese es uno de los centros de esta unidad.",
            },
            {
              id: "contrast-015-2",
              label: "Esposo y esposa",
              correct: {
                jp: ruby("[夫|おっと] / ご[主人|しゅじん]、[妻|つま] / [奥|おく]さん"),
                es: "Aquí también se fija el contraste entre familia propia y ajena.",
              },
              explanation:
                "Esta familia conviene aprenderla como bloque, porque aparece mucho en lectura y conversación.",
            },
            {
              id: "contrast-015-3",
              label: "Caso especial de tíos",
              correct: {
                jp: [{ text: "おじさん / おばさん" }],
                es: "En esta ruta básica los fijamos igual para ambos lados.",
              },
              explanation:
                "Aquí no replicamos exactamente la misma alternancia que en padre o madre. En esta unidad conviene fijarlos como formas iguales.",
            },
            {
              id: "contrast-015-4",
              label: "Forma completa del nivel escolar",
              correct: {
                jp: ruby("[高校|こうこう]3[年生|ねんせい]です。"),
                es: "Forma base completa de esta unidad.",
              },
              incorrect: {
                jp: ruby("3[年生|ねんせい]です。"),
                es: "Aquí no la tomamos como patrón base de enseñanza.",
              },
              explanation:
                "En esta lesson conviene decir la etapa completa para no perder la referencia escolar.",
            },
            {
              id: "contrast-015-5",
              label: "Cantidad de familia y perfil familiar",
              correct: {
                jp: ruby("[私|わたし]の[家族|かぞく]は5[人|にん]です。[姉|あね]は[大学|だいがく]1[年生|ねんせい]です。"),
                es: "Aquí se mezclan dos piezas que ya deberían sentirse naturales.",
              },
              explanation:
                "La unidad no trata solo de vocabulario familiar; también reutiliza 人 y 年生 para formar perfiles reales.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-015-warning",
      kind: "warning",
      title: "En qué fijarte bien",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "No mezcles la palabra familiar con el contexto equivocado",
          content:
            "El error más común aquí es reconocer la traducción pero olvidar desde qué punto de vista estás hablando. Antes de elegir una palabra, pregúntate si hablas de tu propia familia o de la familia de otra persona. Después, fíjate si el texto necesita también número de miembros o nivel escolar.",
          bullets: [
            {
              jp: ruby("[父|ちち] / お[父|とう]さん"),
              es: "no se intercambian libremente en esta unidad",
            },
            {
              jp: ruby("[夫|おっと] / ご[主人|しゅじん]"),
              es: "no conviene tratarlos como sinónimos neutros",
            },
            {
              jp: ruby("[小学校|しょうがっこう]2[年生|ねんせい] / [大学|だいがく]1[年生|ねんせい]"),
              es: "mantén visible la etapa completa cuando estés aprendiendo la base",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-015-practice",
      kind: "practice",
      title: "Práctica guiada antes del quiz",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Haz dos columnas y separa primero familia propia y familia de otra persona.",
              jp: ruby("[父|ちち] / [母|はは] / [兄|あに] / [姉|あね] ↔ お[父|とう]さん / お[母|かあ]さん / お[兄|にい]さん / お[姉|ねえ]さん。"),
            },
            {
              es: "Fija aparte los pares de esposo y esposa.",
              jp: ruby("[夫|おっと] / ご[主人|しゅじん]、[妻|つま] / [奥|おく]さん。"),
            },
            {
              es: "Repite como bloque especial:",
              jp: [{ text: "おじさん / おばさん" }],
              note: "para no intentar forzar aquí un contraste distinto al que fijamos en esta unidad.",
            },
            {
              es: "Escribe cinco perfiles familiares con cantidad de miembros usando",
              jp: ruby("[私|わたし]の[家族|かぞく]はN[人|にん]です。"),
              note: "y añade al menos dos miembros con profesión o nivel escolar.",
            },
            {
              es: "Practica niveles escolares completos con todas las etapas principales:",
              jp: ruby("[小学校|しょうがっこう]1[年生|ねんせい]〜6[年生|ねんせい] / [中学校|ちゅうがっこう]1[年生|ねんせい]〜3[年生|ねんせい] / [高校|こうこう]1[年生|ねんせい]〜3[年生|ねんせい]。"),
            },
          ],
        },
      ],
    },
    {
      id: "lesson-015-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Puedo distinguir familia propia y familia de otra persona en varios pares importantes.",
            },
            {
              es: "Ya fijé contrastes como",
              jp: ruby("[父|ちち] / お[父|とう]さん、[母|はは] / お[母|かあ]さん、[夫|おっと] / ご[主人|しゅじん]、[妻|つま] / [奥|おく]さん。"),
            },
            {
              es: "Recuerdo que en esta ruta básica trabajamos",
              jp: [{ text: "おじさん / おばさん" }],
              note: "igual en ambos lados.",
            },
            {
              es: "Puedo usar la forma escolar completa como",
              jp: ruby("[小学校|しょうがっこう]2[年生|ねんせい] / [高校|こうこう]3[年生|ねんせい] / [大学|だいがく]1[年生|ねんせい]。"),
            },
            {
              es: "Puedo describir una familia con número de miembros y nivel escolar de cada persona.",
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-015-quiz",
    title: "Quiz — Familia y niveles escolares",
    description:
      "Repaso variado para comprobar si ya distingues familia propia y familia ajena, recuerdas los pares más importantes y puedes leer perfiles familiares con etapas escolares completas.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "single-choice",
        prompt: {
          es: "¿Qué forma fijamos aquí para decir “mi padre”?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[父|ちち]") } },
          { id: "b", label: { jp: ruby("お[父|とう]さん") } },
          { id: "c", label: { jp: ruby("[夫|おっと]") } },
          { id: "d", label: { jp: [{ text: "おじさん" }] } },
        ],
        correctChoiceId: "a",
        explanation:
          "En esta unidad, 父 se fija como forma para hablar del propio padre.",
        relatedSectionIds: ["lesson-015-concept", "lesson-015-structure"],
      },
      {
        id: "q2",
        type: "single-choice",
        prompt: {
          es: "¿Qué forma fijamos aquí para decir “el padre de otra persona”?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[父|ちち]") } },
          { id: "b", label: { jp: ruby("お[父|とう]さん") } },
          { id: "c", label: { jp: ruby("[兄|あに]") } },
          { id: "d", label: { jp: ruby("ご[主人|しゅじん]") } },
        ],
        correctChoiceId: "b",
        explanation:
          "En esta lesson, お父さん se fija para hablar del padre de otra persona.",
        relatedSectionIds: ["lesson-015-concept", "lesson-015-structure"],
      },
      {
        id: "q3",
        type: "single-choice",
        prompt: {
          es: "¿Qué par corresponde a “mi esposo / el esposo de otra persona”?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[妻|つま] / [奥|おく]さん") } },
          { id: "b", label: { jp: ruby("[夫|おっと] / ご[主人|しゅじん]") } },
          { id: "c", label: { jp: ruby("[兄|あに] / お[兄|にい]さん") } },
          { id: "d", label: { jp: ruby("[父|ちち] / お[父|とう]さん") } },
        ],
        correctChoiceId: "b",
        explanation:
          "Aquí el contraste correcto es 夫 para mi familia y ご主人 para la familia de otra persona.",
        relatedSectionIds: ["lesson-015-concept", "lesson-015-contrast"],
      },
      {
        id: "q4",
        type: "single-choice",
        prompt: {
          es: "¿Qué forma fijamos igual para ambos lados en esta ruta básica?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[母|はは]") } },
          { id: "b", label: { jp: ruby("お[母|かあ]さん") } },
          { id: "c", label: { jp: [{ text: "おじさん" }] } },
          { id: "d", label: { jp: ruby("[夫|おっと]") } },
        ],
        correctChoiceId: "c",
        explanation:
          "Aquí fijamos おじさん como forma igual en ambos lados. Lo mismo hacemos con おばさん.",
        relatedSectionIds: ["lesson-015-concept", "lesson-015-contrast"],
      },
      {
        id: "q5",
        type: "single-choice",
        prompt: {
          es: "¿Cuál forma base trabajamos para “segundo de primaria”?",
        },
        choices: [
          { id: "a", label: { jp: ruby("2[年生|ねんせい]です。") } },
          { id: "b", label: { jp: ruby("[小学校|しょうがっこう]2[年生|ねんせい]です。") } },
          { id: "c", label: { jp: ruby("[中学校|ちゅうがっこう]2[年生|ねんせい]です。") } },
          { id: "d", label: { jp: ruby("[高校|こうこう]2[年生|ねんせい]です。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "En esta unidad fijamos la etapa completa como patrón base: 小学校2年生です。",
        relatedSectionIds: ["lesson-015-concept", "lesson-015-structure"],
      },
      {
        id: "q6",
        type: "single-choice",
        prompt: {
          es: "¿Cuál forma base trabajamos para “tercero de enseñanza media”?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[高校|こうこう]3[年生|ねんせい]です。") } },
          { id: "b", label: { jp: ruby("[大学|だいがく]3[年生|ねんせい]です。") } },
          { id: "c", label: { jp: ruby("[中学校|ちゅうがっこう]3[年生|ねんせい]です。") } },
          { id: "d", label: { jp: ruby("3[年生|ねんせい]です。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí la forma base completa para tercero de enseñanza media es 高校3年生です。",
        relatedSectionIds: ["lesson-015-concept", "lesson-015-structure"],
      },
      {
        id: "q7",
        type: "single-choice",
        prompt: {
          jp: ruby("[私|わたし]の[家族|かぞく]は5[人|にん]です。[父|ちち]は[会社員|かいしゃいん]です。[母|はは]は[看護師|かんごし]です。[姉|あね]は[大学|だいがく]1[年生|ねんせい]です。[弟|おとうと]は[小学校|しょうがっこう]2[年生|ねんせい]です。[私|わたし]は[高校|こうこう]3[年生|ねんせい]です。"),
          note: "¿Quién está en primer año de universidad?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[父|ちち]です。") } },
          { id: "b", label: { jp: ruby("[母|はは]です。") } },
          { id: "c", label: { jp: ruby("[姉|あね]です。") } },
          { id: "d", label: { jp: ruby("[弟|おとうと]です。") } },
        ],
        correctChoiceId: "c",
        explanation:
          "En el primer texto, la hermana mayor está en 大学1年生.",
        relatedSectionIds: ["lesson-015-examples"],
      },
      {
        id: "q8",
        type: "single-choice",
        prompt: {
          jp: ruby("[父|ちち]は[会社員|かいしゃいん]です。[母|はは]は[看護師|かんごし]です。[姉|あね]は[大学|だいがく]1[年生|ねんせい]です。[弟|おとうと]は[小学校|しょうがっこう]2[年生|ねんせい]です。[私|わたし]は[高校|こうこう]3[年生|ねんせい]です。[私|わたし]の[家族|かぞく]は[何人|なんにん]ですか。"),
          note: "¿Cuántas personas hay en la familia?",
        },
        choices: [
          { id: "a", label: { jp: ruby("3[人|にん]です。") } },
          { id: "b", label: { jp: ruby("4[人|にん]です。") } },
          { id: "c", label: { jp: ruby("5[人|にん]です。") } },
          { id: "d", label: { jp: ruby("7[人|にん]です。") } },
        ],
        correctChoiceId: "c",
        explanation:
          "Es necesario contar todas las personas nombradas en el texto。",
        relatedSectionIds: ["lesson-015-examples", "lesson-015-structure"],
      },
      {
        id: "q9",
        type: "single-choice",
        prompt: {
          jp: ruby("[私|わたし]の[家族|かぞく]は7[人|にん]です。[祖父|そふ]と[祖母|そぼ]もいます。[父|ちち]は[先生|せんせい]です。[母|はは]は[会社員|かいしゃいん]です。[兄|あに]は[大学院|だいがくいん]1[年生|ねんせい]です。[妹|いもうと]は[高校|こうこう]1[年生|ねんせい]です。[私|わたし]は[大学|だいがく]2[年生|ねんせい]です。"),
          note: "¿Quién está en primer año de posgrado?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[兄|あに]です。") } },
          { id: "b", label: { jp: ruby("[妹|いもうと]です。") } },
          { id: "c", label: { jp: ruby("[父|ちち]です。") } },
          { id: "d", label: { jp: ruby("[祖父|そふ]です。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "En el segundo texto, el hermano mayor está en 大学院1年生.",
        relatedSectionIds: ["lesson-015-examples"],
      },
      {
        id: "q10",
        type: "single-choice",
        prompt: {
          jp: ruby("[私|わたし]の[家族|かぞく]は4[人|にん]です。[夫|おっと]は[会社員|かいしゃいん]です。[私|わたし]は[店員|てんいん]です。[息子|むすこ]は[中学校|ちゅうがっこう]1[年生|ねんせい]です。[娘|むすめ]は[小学校|しょうがっこう]4[年生|ねんせい]です。"),
          note: "¿En qué nivel está la hija?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[中学校|ちゅうがっこう]1[年生|ねんせい]です。") } },
          { id: "b", label: { jp: ruby("[小学校|しょうがっこう]4[年生|ねんせい]です。") } },
          { id: "c", label: { jp: ruby("[高校|こうこう]1[年生|ねんせい]です。") } },
          { id: "d", label: { jp: ruby("[大学|だいがく]1[年生|ねんせい]です。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "En el tercer texto, la hija está en 小学校4年生.",
        relatedSectionIds: ["lesson-015-examples"],
      },
      {
        id: "q11",
        type: "single-choice",
        prompt: {
          jp: ruby("こちらは[森|もり]さんの[家族|かぞく]です。ご[主人|しゅじん]は[医者|いしゃ]です。[奥|おく]さんは[先生|せんせい]です。[息子|むすこ]さんは[高校|こうこう]2[年生|ねんせい]です。[娘|むすめ]さんは[中学校|ちゅうがっこう]3[年生|ねんせい]です。おじさんとおばさんもいます。"),
          note: "¿Qué forma aparece aquí para hablar del esposo de otra persona?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[夫|おっと]") } },
          { id: "b", label: { jp: ruby("ご[主人|しゅじん]") } },
          { id: "c", label: { jp: ruby("[父|ちち]") } },
          { id: "d", label: { jp: ruby("お[父|とう]さん") } },
        ],
        correctChoiceId: "b",
        explanation:
          "En el cuarto texto aparece ご主人 para hablar del esposo de otra persona.",
        relatedSectionIds: ["lesson-015-examples", "lesson-015-contrast"],
      },
      {
        id: "q12",
        type: "single-choice",
        prompt: {
          es: "¿Cuál frase corresponde mejor a “La madre de Tanaka es profesora”?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[田中|たなか]さんの[母|はは]は[先生|せんせい]です。") } },
          { id: "b", label: { jp: ruby("[田中|たなか]さんのお[母|かあ]さんは[先生|せんせい]です。") } },
          { id: "c", label: { jp: ruby("[田中|たなか]さんの[妻|つま]は[先生|せんせい]です。") } },
          { id: "d", label: { jp: ruby("[田中|たなか]さんのお[姉|ねえ]さんは[先生|せんせい]です。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "Aquí hablas de la madre de otra persona, por eso usamos お母さん.",
        relatedSectionIds: ["lesson-015-structure", "lesson-015-contrast"],
      },
      {
        id: "q13",
        type: "single-choice",
        prompt: {
          es: "¿Cuál frase corresponde mejor a “Mi madre es profesora”?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[私|わたし]の[母|はは]は[先生|せんせい]です。") } },
          { id: "b", label: { jp: ruby("[私|わたし]のお[母|かあ]さんは[先生|せんせい]です。") } },
          { id: "c", label: { jp: ruby("[私|わたし]の[奥|おく]さんは[先生|せんせい]です。") } },
          { id: "d", label: { jp: ruby("[私|わたし]のお[姉|ねえ]さんは[先生|せんせい]です。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí hablas de tu propia madre, por eso fijamos 母.",
        relatedSectionIds: ["lesson-015-structure", "lesson-015-contrast"],
      },
      {
        id: "q14",
        type: "order-sentence",
        prompt: {
          es: "Ordena la oración correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[弟|おとうと]") }, value: "弟" },
          { id: "t2", label: { jp: ruby("は") }, value: "は" },
          { id: "t3", label: { jp: ruby("[小学校|しょうがっこう]2[年生|ねんせい]") }, value: "小学校2年生" },
          { id: "t4", label: { jp: ruby("です。") }, value: "です。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("[弟|おとうと]は[小学校|しょうがっこう]2[年生|ねんせい]です。") },
        explanation:
          "Aquí el miembro de la familia entra como tema y después aparece el nivel escolar completo.",
        relatedSectionIds: ["lesson-015-structure", "lesson-015-summary"],
      },
      {
        id: "q15",
        type: "order-sentence",
        prompt: {
          es: "Ordena la oración correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[私|わたし]の[家族|かぞく]") }, value: "私の家族" },
          { id: "t2", label: { jp: ruby("は") }, value: "は" },
          { id: "t3", label: { jp: ruby("5[人|にん]") }, value: "5人" },
          { id: "t4", label: { jp: ruby("です。") }, value: "です。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("[私|わたし]の[家族|かぞく]は5[人|にん]です。") },
        explanation:
          "Aquí reaparece la estructura de cantidad de miembros con el contador 人.",
        relatedSectionIds: ["lesson-015-structure", "lesson-015-summary"],
      },
      {
        id: "q16",
        type: "fill-blank",
        prompt: {
          es: "Completa con la forma correcta para tu propia familia:",
          jp: ruby("[私|わたし]の___は[会社員|かいしゃいん]です。"),
          note: "La idea es “mi padre”.",
        },
        acceptedAnswers: ["父", "ちち"],
        placeholder: "Escribe la palabra",
        explanation:
          "Para hablar de tu propio padre, aquí fijamos 父.",
        relatedSectionIds: ["lesson-015-structure", "lesson-015-summary"],
      },
      {
        id: "q17",
        type: "fill-blank",
        prompt: {
          es: "Completa con la forma correcta para la familia de otra persona:",
          jp: ruby("[田中|たなか]さんの___は[先生|せんせい]です。"),
          note: "La idea es “la madre de Tanaka”.",
        },
        acceptedAnswers: ["お母さん", "おかあさん"],
        placeholder: "Escribe la palabra",
        explanation:
          "Aquí hablas de la madre de otra persona, por eso usamos お母さん.",
        relatedSectionIds: ["lesson-015-structure", "lesson-015-summary"],
      },
      {
        id: "q18",
        type: "fill-blank",
        prompt: {
          es: "Completa la etapa escolar correcta:",
          jp: ruby("[兄|あに]は___1[年生|ねんせい]です。"),
          note: "En el segundo texto, el hermano mayor está en posgrado.",
        },
        acceptedAnswers: ["大学院", "だいがくいん"],
        placeholder: "Escribe la etapa",
        explanation:
          "En el segundo texto, el hermano mayor está en 大学院1年生.",
        relatedSectionIds: ["lesson-015-examples", "lesson-015-summary"],
      },
      {
        id: "q19",
        type: "fill-blank",
        prompt: {
          es: "Completa la etapa escolar correcta:",
          jp: ruby("[弟|おとうと]は___2[年生|ねんせい]です。"),
          note: "En el primer texto, el hermano menor está en segundo de primaria.",
        },
        acceptedAnswers: ["小学校", "しょうがっこう"],
        placeholder: "Escribe la etapa",
        explanation:
          "Aquí fijamos la forma completa 小学校2年生.",
        relatedSectionIds: ["lesson-015-examples", "lesson-015-summary"],
      },
      {
        id: "q20",
        type: "single-choice",
        prompt: {
          es: "¿Qué idea resume mejor el corazón de esta unidad?",
        },
        choices: [
          { id: "a", label: { es: "Que basta con memorizar traducciones sueltas de padre, madre y hermano sin importar quién sea la familia." } },
          { id: "b", label: { es: "Que aquí solo aprendemos escuelas y no hace falta conectar eso con la familia." } },
          { id: "c", label: { es: "Que la unidad enseña a distinguir familia propia y ajena, fijar varios pares familiares importantes y describir perfiles con número de miembros y etapas escolares completas." } },
          { id: "d", label: { es: "Que en esta unidad ya no se necesita usar 人 porque la familia no se cuenta." } },
        ],
        correctChoiceId: "c",
        explanation:
          "Ese es el núcleo real de la unidad: familia propia y ajena, pares importantes y perfiles familiares con niveles escolares completos.",
        relatedSectionIds: ["lesson-015-concept", "lesson-015-summary"],
      },
    ],
  },
};

export default lesson015;
