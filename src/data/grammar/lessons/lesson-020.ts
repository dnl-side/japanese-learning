
//src/data/grammar/lessons/lesson-020.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson020: GrammarLesson = {
  id: "lesson-020",
  slug: "verbos-de-movimiento-iku-kuru-kaeru-ni-he-de-to",
  order: 25,
  level: "N5",
  status: "ready",
  title: "Verbos de movimiento I",
  jpTitle: "いく・くる・かえる / に・へ・で・と",
  shortTitle: "Movimiento básico",
  description:
    "Cómo usar 行く・来る・帰る como verbos de movimiento, distinguir su punto de vista básico, marcar destino con に y へ, añadir medio de transporte con で, y expresar compañía o desplazamiento en grupo con と・と一緒に・N人で.",
  estimatedMinutes: 92,
  categoryTags: ["fundamentos", "verbos", "movimiento", "particulas", "transporte", "lectura", "integracion"],
  grammarTags: [
    "行く",
    "来る",
    "帰る",
    "に",
    "へ",
    "で",
    "と",
    "と一緒に",
    "N人で",
    "destino",
    "transporte",
    "compañía",
  ],
  searchTerms: [
    "verbos de movimiento japones",
    "iku kuru kaeru",
    "ni he movement japanese",
    "densha de ikimasu",
    "to issho ni ikimasu",
    "nin de ikimasu",
    "venir ir volver japones",
    "verbos de movimiento n5",
  ],
  relatedLessonSlugs: [
    "pais-de-origen-shusshin",
    "arimasu-imasu-existencia-basica",
    "lugares-demostrativos-koko-soko-asoko-kochira",
    "tiempo-basico-pasado-desu-masu",
    "verbos-introduccion-grupo-2-ichidan",
    "verbos-grupo-1-godan",
    "verbos-grupo-3-irregulares",
    "verbos-de-accion-particulas-wo-de-to-ni",
  ],
  relatedVocabularyTags: ["verbos", "movimiento", "transporte", "lugares", "personas", "base"],
  objectives: [
    "Entender que 行く・来る・帰る expresan movimiento y no el mismo tipo de acción que los verbos de la unidad anterior.",
    "Distinguir con una base clara el matiz principal entre ir, venir y volver.",
    "Usar に y へ como partículas de destino o dirección sin forzar una diferencia demasiado rígida en frases simples.",
    "Usar で para expresar medio de transporte.",
    "Usar と y と一緒に para expresar compañía en el desplazamiento.",
    "Usar N人で para indicar que el desplazamiento se realiza en grupo.",
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
      id: "lesson-020-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "En la unidad anterior trabajaste verbos de acción con objeto directo, lugar de acción, compañía, medio y destinatario. Ahora toca una familia verbal distinta: los verbos de movimiento. La meta de esta unidad es dejar muy firme el núcleo básico con 行く・来る・帰る y con las partículas que los acompañan de forma más natural.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Primero fijaremos el contraste central entre:",
              jp: ruby("[行|い]く / [来|く]る / [帰|かえ]る。"),
            },
            {
              es: "Después veremos cómo entran el destino y la dirección con:",
              jp: ruby("に / へ。"),
            },
            {
              es: "Y al final añadirás transporte, compañía y grupo con patrones como:",
              jp: ruby("[新幹線|しんかんせん]で[京都|きょうと]へ[行|い]きます。 / [先輩|せんぱい]と[一緒|いっしょ]に[空港|くうこう]に[来|き]ます。 / 3[人|にん]で[水族館|すいぞくかん]へ[行|い]きます。"),
            },
          ],
        },
      ],
    },
    {
      id: "lesson-020-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Aquí el centro es el desplazamiento",
          content:
            "En esta unidad los verbos no dicen qué cosa recibe una acción, sino hacia dónde se mueve alguien. Por eso el corazón de la oración cambia. Ahora lo más importante es reconocer el lugar de destino, la dirección, el medio de transporte y, si hace falta, con quién o en qué grupo se realiza el movimiento.",
          bullets: [
            {
              jp: ruby("[私|わたし]は[博物館|はくぶつかん]に[行|い]きます。"),
              es: "el centro es el desplazamiento hacia un destino",
            },
            {
              jp: ruby("[部長|ぶちょう]は[会議室|かいぎしつ]に[来|き]ます。"),
              es: "el foco está en venir hacia este punto o este lado",
            },
            {
              jp: ruby("[祖母|そぼ]は[実家|じっか]へ[帰|かえ]ります。"),
              es: "el foco está en volver al lugar base",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "行く, 来る y 帰る no miran el movimiento del mismo lado",
          content:
            "行く expresa ir hacia un lugar. 来る expresa venir hacia el lado que se toma como aquí o como punto de llegada. 帰る expresa volver al lugar de regreso, que en esta unidad fijaremos sobre todo como casa, país o lugar base al que uno vuelve.",
          bullets: [
            {
              jp: ruby("[大阪|おおさか]へ[行|い]きます。"),
              es: "me desplazo hacia Osaka",
            },
            {
              jp: ruby("この[教室|きょうしつ]に[来|き]ます。"),
              es: "viene hacia esta sala, hacia este lado",
            },
            {
              jp: ruby("[日本|にほん]へ[帰|かえ]ります。"),
              es: "vuelve a Japón",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "に y へ aquí pueden sentirse muy cercanas",
          content:
            "En esta unidad trabajaremos に y へ como partículas de destino o dirección. En muchas frases simples del nivel, las dos pueden funcionar sin que la diferencia sea el punto central del ejercicio. Por eso no conviene inventar una rigidez artificial cuando la escena sigue siendo básica.",
          bullets: [
            {
              jp: ruby("[空港|くうこう]に[行|い]きます。"),
              es: "destino marcado con に",
            },
            {
              jp: ruby("[空港|くうこう]へ[行|い]きます。"),
              es: "dirección o destino marcado con へ",
            },
            {
              jp: ruby("[旅館|りょかん]に[来|き]ます。 / [旅館|りょかん]へ[来|き]ます。"),
              es: "en frases simples, ambas pueden sonar naturales",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "で aquí marca transporte o grupo",
          content:
            "Ya viste で como lugar de acción y como herramienta en la unidad anterior. Aquí vuelve con dos lecturas que deben quedar claras: medio de transporte y grupo que realiza el desplazamiento.",
          bullets: [
            {
              jp: ruby("[飛行機|ひこうき]で[日本|にほん]へ[帰|かえ]ります。"),
              es: "で = medio de transporte",
            },
            {
              jp: ruby("4[人|にん]でカラオケに[行|い]きました。"),
              es: "で = grupo de personas que realiza el movimiento",
            },
            {
              jp: ruby("[新幹線|しんかんせん]で[京都|きょうと]へ[行|い]きます。"),
              es: "otro ejemplo claro de transporte",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "と y と一緒に expresan compañía",
          content:
            "Aquí と puede marcar con quién vas, vienes o vuelves. と一緒に hace esa compañía aún más explícita. Las dos formas son útiles; la segunda simplemente deja más visible la idea de “junto con”.",
          bullets: [
            {
              jp: ruby("[親友|しんゆう]と[美術館|びじゅつかん]へ[行|い]きます。"),
              es: "compañía con と",
            },
            {
              jp: ruby("[奥|おく]さんと[一緒|いっしょ]に[飛行機|ひこうき]で[日本|にほん]へ[帰|かえ]りました。"),
              es: "compañía más explícita con と一緒に",
            },
            {
              jp: ruby("[同僚|どうりょう]と[港|みなと]に[来|き]ます。"),
              es: "otra escena de compañía con movimiento",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-020-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-020-1",
              label: "Ir hacia un lugar",
              pattern: ruby("A は B に / へ [行|い]きます。"),
              meaning: "A va a / hacia B.",
              translation:
                "Esta es la estructura más directa para expresar desplazamiento hacia un destino con 行く.",
              structure: [
                {
                  slot: "A",
                  value: "persona o grupo que se mueve",
                  note: {
                    es: "Puede ser algo como:",
                    jp: ruby("[私|わたし] / [姉|あね] / [観光客|かんこうきゃく] / [高校生|こうこうせい]たち。"),
                  },
                },
                {
                  slot: "B に / へ",
                  value: "destino o dirección",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[空港|くうこう]に / [京都|きょうと]へ / [温泉|おんせん]に / [水族館|すいぞくかん]へ。"),
                  },
                },
                {
                  slot: { jp: ruby("[行|い]きます") },
                  value: "ir",
                  note: "Expresa desplazamiento hacia ese lugar.",
                },
              ],
              notes: [
                "En frases simples de esta unidad, に y へ pueden ser muy cercanas.",
              ],
            },
            {
              id: "pattern-020-2",
              label: "Venir hacia este lado o punto de llegada",
              pattern: ruby("A は B に / へ [来|き]ます。"),
              meaning: "A viene a / hacia B.",
              translation:
                "Aquí lo importante es el punto de vista: el movimiento se siente como venir hacia este lado, este punto o este lugar de llegada.",
              structure: [
                {
                  slot: "A",
                  value: "persona o grupo que se mueve",
                  note: {
                    es: "Puede ser una persona, grupo o visitante.",
                  },
                },
                {
                  slot: "B に / へ",
                  value: "destino",
                  note: {
                    es: "Aquí suele ser el lugar al que algo o alguien viene.",
                  },
                },
                {
                  slot: { jp: ruby("[来|き]ます") },
                  value: "venir",
                  note: "La escena se mira desde el lado de llegada.",
                },
              ],
              notes: [
                "Para este nivel, conviene sentir 来る como venir hacia aquí, hacia este lado o hacia este lugar de llegada.",
              ],
            },
            {
              id: "pattern-020-3",
              label: "Volver al lugar base",
              pattern: ruby("A は B に / へ [帰|かえ]ります。"),
              meaning: "A vuelve a B.",
              translation:
                "En esta unidad trabajamos 帰る sobre todo para volver a casa, al país o al lugar base al que uno regresa.",
              structure: [
                {
                  slot: "A",
                  value: "persona o grupo",
                  note: "El referente que vuelve.",
                },
                {
                  slot: "B に / へ",
                  value: "lugar de regreso",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[実家|じっか] / [故郷|こきょう] / [日本|にほん] / [韓国|かんこく]。"),
                  },
                },
                {
                  slot: { jp: ruby("[帰|かえ]ります") },
                  value: "volver",
                  note: "Aquí expresa regreso, no simple desplazamiento neutro.",
                },
              ],
              notes: [
                "Para esta etapa conviene fijarlo con lugares de regreso muy claros y fáciles de imaginar.",
              ],
            },
            {
              id: "pattern-020-4",
              label: "Moverse en un medio de transporte",
              pattern: ruby("A は C で B に / へ [行|い]きます / [来|き]ます / [帰|かえ]ります。"),
              meaning: "A se desplaza a B en C.",
              translation:
                "Aquí で marca el medio de transporte. La base verbal sigue siendo de movimiento; lo nuevo es que ahora añades cómo se realiza el desplazamiento.",
              structure: [
                {
                  slot: "C で",
                  value: "medio de transporte",
                  note: {
                    es: "Puede ser algo como:",
                    jp: ruby("[電車|でんしゃ]で / [新幹線|しんかんせん]で / [飛行機|ひこうき]で / タクシーで / バスで。"),
                  },
                },
                {
                  slot: "B に / へ",
                  value: "destino",
                  note: "El lugar al que te desplazas.",
                },
                {
                  slot: "Vます",
                  value: "verbo de movimiento",
                  note: "Puede ser 行きます, 来ます o 帰ります según la escena.",
                },
              ],
              notes: [
                "Aquí で no significa lugar de acción, sino medio de transporte.",
              ],
            },
            {
              id: "pattern-020-5",
              label: "Moverse con alguien",
              pattern: ruby("A は D と / D と[一緒|いっしょ]に B に / へ [行|い]きます。"),
              meaning: "A va a B con D / junto con D.",
              translation:
                "Aquí と marca compañía. Si añades 一緒に, la idea de ir o venir junto con alguien se vuelve más explícita.",
              structure: [
                {
                  slot: "D と",
                  value: "compañía",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[親友|しんゆう]と / [同僚|どうりょう]と / [家族|かぞく]と。"),
                  },
                },
                {
                  slot: "D と[一緒|いっしょ]に",
                  value: "compañía explícita",
                  note: "Hace aún más visible la idea de “junto con”.",
                },
                {
                  slot: "B に / へ",
                  value: "destino",
                  note: "El lugar hacia el que se mueve la persona o grupo.",
                },
              ],
              notes: [
                "Aquí no hace falta convertir と y と一緒に en una teoría pesada: primero conviene sentir que la segunda forma es simplemente más explícita.",
              ],
            },
            {
              id: "pattern-020-6",
              label: "Moverse en grupo",
              pattern: ruby("A は N[人|にん]で B に / へ [行|い]きます。"),
              meaning: "A va a B en un grupo de N personas.",
              translation:
                "Aquí で no marca transporte, sino el tamaño del grupo que realiza el movimiento.",
              structure: [
                {
                  slot: "N人で",
                  value: "grupo",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("1[人|ひとり]で / 2[人|ふたり]で / 3[人|にん]で / 4[人|にん]で。"),
                  },
                },
                {
                  slot: "B に / へ",
                  value: "destino",
                  note: "El lugar hacia el que va el grupo.",
                },
                {
                  slot: "Vます",
                  value: "verbo de movimiento",
                  note: "Aquí suele bastar con 行きます, aunque también puede aparecer con 来ます o 帰ります.",
                },
              ],
              notes: [
                "No confundas este で con transporte; aquí lo que marca es el grupo que se mueve.",
              ],
            },
          ],
        },
        {
          type: "table",
          title: "Mapa rápido de partículas en verbos de movimiento",
          description:
            "Aquí no queremos que memorices definiciones sueltas, sino que veas qué papel cumple cada bloque dentro de una oración de movimiento.",
          columns: [
            { key: "particle", label: "Partícula", width: "16%", align: "center" },
            { key: "role", label: "Papel aquí", width: "28%" },
            { key: "question", label: "Pregunta guía", width: "24%" },
            { key: "example", label: "Ejemplo", width: "32%" },
          ],
          rows: [
            {
              id: "map-ni",
              cells: {
                particle: { jp: ruby("に") },
                role: "destino",
                question: "¿a qué lugar voy / vengo / vuelvo?",
                example: { jp: ruby("[空港|くうこう]に[行|い]きます。") },
              },
            },
            {
              id: "map-he",
              cells: {
                particle: { jp: ruby("へ") },
                role: "dirección o destino",
                question: "¿hacia qué lugar me desplazo?",
                example: { jp: ruby("[京都|きょうと]へ[行|い]きます。") },
              },
            },
            {
              id: "map-de-transport",
              cells: {
                particle: { jp: ruby("で") },
                role: "medio de transporte",
                question: "¿por qué medio me desplazo?",
                example: { jp: ruby("[飛行機|ひこうき]で[日本|にほん]へ[帰|かえ]ります。") },
              },
            },
            {
              id: "map-to",
              cells: {
                particle: { jp: ruby("と") },
                role: "compañía",
                question: "¿con quién me desplazo?",
                example: { jp: ruby("[親友|しんゆう]と[美術館|びじゅつかん]へ[行|い]きます。") },
              },
            },
            {
              id: "map-de-group",
              cells: {
                particle: { jp: ruby("で") },
                role: "grupo",
                question: "¿en qué grupo se realiza el movimiento?",
                example: { jp: ruby("4[人|にん]でカラオケに[行|い]きました。") },
              },
            },
          ],
          zebra: true,
        },
        {
          type: "table",
          title: "Comparación rápida de los tres verbos base",
          description:
            "Aquí la idea no es traducir palabra por palabra, sino fijar qué tipo de movimiento expresa cada verbo.",
          columns: [
            { key: "verb", label: "Verbo", width: "18%" },
            { key: "core", label: "Idea central", width: "28%" },
            { key: "view", label: "Cómo conviene sentirlo aquí", width: "28%" },
            { key: "example", label: "Ejemplo", width: "26%" },
          ],
          rows: [
            {
              id: "verb-iku",
              cells: {
                verb: { jp: ruby("[行|い]きます") },
                core: "ir",
                view: "moverse hacia un lugar",
                example: { jp: ruby("[温泉|おんせん]へ[行|い]きます。") },
              },
            },
            {
              id: "verb-kuru",
              cells: {
                verb: { jp: ruby("[来|き]ます") },
                core: "venir",
                view: "venir hacia este lado o hacia el punto de llegada",
                example: { jp: ruby("この[会議室|かいぎしつ]に[来|き]ます。") },
              },
            },
            {
              id: "verb-kaeru",
              cells: {
                verb: { jp: ruby("[帰|かえ]ります") },
                core: "volver",
                view: "regresar al lugar base",
                example: { jp: ruby("[実家|じっか]に[帰|かえ]ります。") },
              },
            },
          ],
          zebra: true,
        },
      ],
    },
    {
      id: "lesson-020-vocabulary",
      kind: "vocabulary",
      title: "Vocabulario nuevo para esta unidad",
      description:
        "Aquí conviene ampliar el campo semántico del movimiento con lugares reales, medios de transporte y grupos de personas, en vez de depender siempre de escuela y casa.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 4,
          items: [
            { id: "v020-go", jp: ruby("[行|い]く"), reading: "いく", meaning: "ir", tags: ["verbo", "movimiento"] },
            { id: "v020-come", jp: ruby("[来|く]る"), reading: "くる", meaning: "venir", tags: ["verbo", "movimiento"] },
            { id: "v020-return", jp: ruby("[帰|かえ]る"), reading: "かえる", meaning: "volver", tags: ["verbo", "movimiento"] },
            { id: "v020-together", jp: ruby("[一緒|いっしょ]に"), reading: "いっしょに", meaning: "junto con", tags: ["expresion", "compañia"] },

            { id: "v020-airport", jp: ruby("[空港|くうこう]"), reading: "くうこう", meaning: "aeropuerto", tags: ["lugar"] },
            { id: "v020-port", jp: ruby("[港|みなと]"), reading: "みなと", meaning: "puerto", tags: ["lugar"] },
            { id: "v020-museum", jp: ruby("[博物館|はくぶつかん]"), reading: "はくぶつかん", meaning: "museo", tags: ["lugar"] },
            { id: "v020-art-museum", jp: ruby("[美術館|びじゅつかん]"), reading: "びじゅつかん", meaning: "museo de arte", tags: ["lugar"] },

            { id: "v020-aquarium", jp: ruby("[水族館|すいぞくかん]"), reading: "すいぞくかん", meaning: "acuario", tags: ["lugar"] },
            { id: "v020-zoo", jp: ruby("[動物園|どうぶつえん]"), reading: "どうぶつえん", meaning: "zoológico", tags: ["lugar"] },
            { id: "v020-shrine", jp: ruby("[神社|じんじゃ]"), reading: "じんじゃ", meaning: "santuario", tags: ["lugar"] },
            { id: "v020-temple", jp: ruby("[寺|てら]"), reading: "てら", meaning: "templo", tags: ["lugar"] },

            { id: "v020-city-office", jp: ruby("[市役所|しやくしょ]"), reading: "しやくしょ", meaning: "municipalidad / ayuntamiento", tags: ["lugar"] },
            { id: "v020-bank", jp: ruby("[銀行|ぎんこう]"), reading: "ぎんこう", meaning: "banco", tags: ["lugar"] },
            { id: "v020-hot-spring", jp: ruby("[温泉|おんせん]"), reading: "おんせん", meaning: "aguas termales / onsen", tags: ["lugar"] },
            { id: "v020-inn", jp: ruby("[旅館|りょかん]"), reading: "りょかん", meaning: "ryokan / posada japonesa", tags: ["lugar"] },

            { id: "v020-office", jp: ruby("[事務所|じむしょ]"), reading: "じむしょ", meaning: "oficina", tags: ["lugar"] },
            { id: "v020-factory", jp: ruby("[工場|こうじょう]"), reading: "こうじょう", meaning: "fábrica", tags: ["lugar"] },
            { id: "v020-baseball-stadium", jp: ruby("[球場|きゅうじょう]"), reading: "きゅうじょう", meaning: "estadio", tags: ["lugar"] },
            { id: "v020-amusement-park", jp: ruby("[遊園地|ゆうえんち]"), reading: "ゆうえんち", meaning: "parque de diversiones", tags: ["lugar"] },

            { id: "v020-hometown", jp: ruby("[故郷|こきょう]"), reading: "こきょう", meaning: "pueblo natal / tierra natal", tags: ["lugar", "base"] },
            { id: "v020-family-home", jp: ruby("[実家|じっか]"), reading: "じっか", meaning: "casa familiar", tags: ["lugar", "base"] },
            { id: "v020-train", jp: ruby("[電車|でんしゃ]"), reading: "でんしゃ", meaning: "tren", tags: ["transporte"] },
            { id: "v020-shinkansen", jp: ruby("[新幹線|しんかんせん]"), reading: "しんかんせん", meaning: "tren bala / shinkansen", tags: ["transporte"] },

            { id: "v020-subway", jp: ruby("[地下鉄|ちかてつ]"), reading: "ちかてつ", meaning: "metro", tags: ["transporte"] },
            { id: "v020-bus", jp: [{ text: "バス" }], reading: "ばす", meaning: "bus", tags: ["transporte"] },
            { id: "v020-taxi", jp: [{ text: "タクシー" }], reading: "たくしー", meaning: "taxi", tags: ["transporte"] },
            { id: "v020-airplane", jp: ruby("[飛行機|ひこうき]"), reading: "ひこうき", meaning: "avión", tags: ["transporte"] },

            { id: "v020-bicycle", jp: ruby("[自転車|じてんしゃ]"), reading: "じてんしゃ", meaning: "bicicleta", tags: ["transporte"] },
            { id: "v020-ship", jp: ruby("[船|ふね]"), reading: "ふね", meaning: "barco", tags: ["transporte"] },
            { id: "v020-colleague", jp: ruby("[同僚|どうりょう]"), reading: "どうりょう", meaning: "colega", tags: ["persona"] },
            { id: "v020-close-friend", jp: ruby("[親友|しんゆう]"), reading: "しんゆう", meaning: "amigo íntimo / mejor amigo", tags: ["persona"] },

            { id: "v020-tourist", jp: ruby("[観光客|かんこうきゃく]"), reading: "かんこうきゃく", meaning: "turista", tags: ["persona"] },
            { id: "v020-visitor", jp: ruby("[来客|らいきゃく]"), reading: "らいきゃく", meaning: "visitante / visita", tags: ["persona"] },
            { id: "v020-highschoolers", jp: ruby("[高校生|こうこうせい]たち"), reading: "こうこうせいたち", meaning: "estudiantes de enseñanza media", tags: ["persona", "grupo"] },
            { id: "v020-couple", jp: ruby("[夫婦|ふうふ]"), reading: "ふうふ", meaning: "matrimonio / pareja casada", tags: ["persona", "grupo"] },

            { id: "v020-this-afternoon", jp: ruby("[午後|ごご]"), reading: "ごご", meaning: "tarde / PM", tags: ["tiempo"] },
            { id: "v020-next-week", jp: ruby("[来週|らいしゅう]"), reading: "らいしゅう", meaning: "próxima semana", tags: ["tiempo"] },
            { id: "v020-next-month", jp: ruby("[来月|らいげつ]"), reading: "らいげつ", meaning: "próximo mes", tags: ["tiempo"] },
            { id: "v020-saturday", jp: ruby("[土曜日|どようび]"), reading: "どようび", meaning: "sábado", tags: ["tiempo"] },
          ],
        },
      ],
    },
    {
      id: "lesson-020-examples",
      kind: "examples",
      title: "Ejemplos guiados",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "ex-020-1",
              jp: ruby("[明日|あした]、[由奈|ゆな]さんは[新幹線|しんかんせん]で[京都|きょうと]へ[行|い]きます。"),
              es: "Mañana, Yuna va a Kioto en shinkansen.",
              breakdown: [
                { label: "新幹線で", es: "medio de transporte" },
                { label: "京都へ", es: "destino / dirección" },
              ],
            },
            {
              id: "ex-020-2",
              jp: ruby("[部長|ぶちょう]は[午後|ごご]、[事務所|じむしょ]に[来|き]ます。"),
              es: "Por la tarde, el jefe viene a la oficina.",
              notes: [
                {
                  es: "Aquí el movimiento se mira desde el lado de llegada.",
                },
              ],
            },
            {
              id: "ex-020-3",
              jp: ruby("[祖母|そぼ]は[来月|らいげつ]、[飛行機|ひこうき]で[日本|にほん]へ[帰|かえ]ります。"),
              es: "El próximo mes, mi abuela vuelve a Japón en avión.",
            },
            {
              id: "ex-020-4",
              jp: ruby("[私|わたし]は[親友|しんゆう]と[美術館|びじゅつかん]に[行|い]きます。"),
              es: "Voy al museo de arte con mi mejor amigo.",
            },
            {
              id: "ex-020-5",
              jp: ruby("[先輩|せんぱい]と[一緒|いっしょ]に[空港|くうこう]へ[来|き]ます。"),
              es: "Vengo al aeropuerto junto con mi senpai.",
              notes: [
                {
                  es: "Aquí と一緒に hace más explícita la compañía.",
                },
              ],
            },
            {
              id: "ex-020-6",
              jp: ruby("3[人|にん]で[水族館|すいぞくかん]へ[行|い]きます。"),
              es: "Vamos al acuario en un grupo de tres personas.",
              notes: [
                {
                  es: "Aquí で no marca transporte, sino grupo.",
                },
              ],
            },
            {
              id: "ex-020-7",
              jp: ruby("[高橋|たかはし]さんは[奥|おく]さんと[一緒|いっしょ]に[飛行機|ひこうき]で[日本|にほん]へ[帰|かえ]りました。"),
              es: "Takahashi volvió a Japón en avión junto con su esposa.",
            },
            {
              id: "ex-020-8",
              jp: ruby("あの[高校生|こうこうせい]たちは4[人|にん]で[一緒|いっしょ]にカラオケに[行|い]きました。"),
              es: "Esos estudiantes de enseñanza media fueron al karaoke juntos, en un grupo de cuatro.",
            },
            {
              id: "ex-020-9",
              jp: ruby("[観光客|かんこうきゃく]はバスで[神社|じんじゃ]へ[行|い]きます。"),
              es: "Los turistas van al santuario en bus.",
            },
            {
              id: "ex-020-10",
              jp: ruby("[来客|らいきゃく]はこの[会議室|かいぎしつ]に[来|き]ます。"),
              es: "La visita viene a esta sala de reuniones.",
            },
            {
              id: "ex-020-11",
              jp: ruby("[父|ちち]は[実家|じっか]に[帰|かえ]ります。"),
              es: "Mi padre vuelve a la casa familiar.",
            },
            {
              id: "ex-020-12",
              jp: ruby("[土曜日|どようび]、[同僚|どうりょう]と[博物館|はくぶつかん]へ[行|い]きます。"),
              es: "El sábado, voy al museo con un colega.",
            },
            {
              id: "ex-020-13",
              jp: ruby("[私|わたし]たちはタクシーで[港|みなと]に[来|き]ました。"),
              es: "Vinimos al puerto en taxi.",
            },
            {
              id: "ex-020-14",
              jp: ruby("[夫婦|ふうふ]は[温泉|おんせん]へ[帰|かえ]りません。"),
              es: "La pareja no vuelve al onsen.",
              notes: [
                {
                  es: "Aquí lo importante es reconocer la cuadrícula verbal dentro de una oración de movimiento.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-020-contrast",
      kind: "contrast",
      title: "Contrastes que conviene fijar",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-020-1",
              label: "行く vs 来る",
              correct: {
                jp: ruby("[明日|あした]、[私|わたし]は[大阪|おおさか]へ[行|い]きます。 / [明日|あした]、[先生|せんせい]はこの[教室|きょうしつ]に[来|き]ます。"),
                es: "Los dos son movimiento, pero no miran el desplazamiento desde el mismo lado.",
              },
              explanation:
                "Con 行く, el foco está en ir hacia otro lugar. Con 来る, la escena se mira desde el lado de llegada o desde este punto.",
            },
            {
              id: "contrast-020-2",
              label: "行く / 来る vs 帰る",
              correct: {
                jp: ruby("[市役所|しやくしょ]へ[行|い]きます。 / [会議室|かいぎしつ]に[来|き]ます。 / [実家|じっか]に[帰|かえ]ります。"),
                es: "El tercero ya no es solo ir o venir: es volver.",
              },
              explanation:
                "Aquí 帰る conviene sentirlo como regreso al lugar base, especialmente casa, país o lugar al que uno vuelve.",
            },
            {
              id: "contrast-020-3",
              label: "に vs へ",
              correct: {
                jp: ruby("[空港|くうこう]に[行|い]きます。 / [空港|くうこう]へ[行|い]きます。"),
                es: "En frases simples del nivel, ambas pueden sonar naturales.",
              },
              explanation:
                "Aquí no conviene fabricar una diferencia excesivamente rígida. Las dos pueden funcionar como destino o dirección dentro de esta unidad.",
            },
            {
              id: "contrast-020-4",
              label: "で de transporte vs で de grupo",
              correct: {
                jp: ruby("[飛行機|ひこうき]で[韓国|かんこく]へ[帰|かえ]ります。 / 4[人|にん]でカラオケに[行|い]きます。"),
                es: "La misma partícula vuelve a aparecer con dos funciones distintas.",
              },
              explanation:
                "En la primera, で marca medio de transporte. En la segunda, で marca el grupo que realiza el movimiento.",
            },
            {
              id: "contrast-020-5",
              label: "と vs と一緒に",
              correct: {
                jp: ruby("[同僚|どうりょう]と[博物館|はくぶつかん]へ[行|い]きます。 / [同僚|どうりょう]と[一緒|いっしょ]に[博物館|はくぶつかん]へ[行|い]きます。"),
                es: "Las dos sirven; la segunda deja la compañía más explícita.",
              },
              explanation:
                "Aquí no buscamos una diferencia rígida de gramática, sino notar que と一緒に hace aún más visible la idea de ir o venir junto con alguien.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-020-warning",
      kind: "warning",
      title: "Dónde suele nacer la confusión",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "No fuerces diferencias donde la frase simple todavía no las necesita",
          content:
            "En esta unidad conviene evitar dos errores frecuentes. El primero es pensar que に y へ siempre obligan a una diferencia enorme en toda frase básica. El segundo es usar で como si también sirviera para el destino. Aquí で no marca a dónde vas: marca por qué medio te desplazas o en qué grupo se realiza el movimiento.",
          bullets: [
            {
              jp: ruby("[空港|くうこう]に[行|い]きます。 / [空港|くうこう]へ[行|い]きます。"),
              es: "en frases simples, las dos pueden funcionar",
            },
            {
              jp: ruby("[飛行機|ひこうき]で[空港|くうこう]に[行|い]きます。"),
              es: "で marca transporte; に marca destino",
            },
            {
              jp: ruby("3[人|にん]で[温泉|おんせん]へ[行|い]きます。"),
              es: "aquí で no es transporte, sino grupo",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-020-practice",
      kind: "practice",
      title: "Práctica guiada antes del quiz",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Escribe primero diez oraciones muy cortas cambiando solo el verbo principal entre",
              jp: ruby("[行|い]きます / [来|き]ます / [帰|かえ]ります"),
              note: "para sentir mejor el tipo de movimiento.",
            },
            {
              es: "Después rehace varias de esas oraciones cambiando solo la partícula del destino entre",
              jp: ruby("に / へ"),
              note: "sin intentar forzar una diferencia artificial en cada caso.",
            },
            {
              es: "Añade ahora transporte con",
              jp: ruby("で"),
              note: "usando medios como 電車, 新幹線, バス, タクシー o 飛行機.",
            },
            {
              es: "Practica compañía con",
              jp: ruby("と / と[一緒|いっしょ]に"),
              note: "y usa personas nuevas como 同僚, 親友, 先輩 o 夫婦.",
            },
            {
              es: "Cierra el bloque con escenas de grupo usando",
              jp: ruby("1[人|ひとり]で / 2[人|ふたり]で / 3[人|にん]で / 4[人|にん]で"),
              note: "para que el segundo uso de で no se mezcle con el transporte.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-020-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Puedo distinguir la base entre",
              jp: ruby("[行|い]く / [来|く]る / [帰|かえ]る"),
              note: "como ir, venir y volver.",
            },
            {
              es: "Puedo usar",
              jp: ruby("に / へ"),
              note: "como destino o dirección en verbos de movimiento.",
            },
            {
              es: "Puedo usar",
              jp: ruby("で"),
              note: "para expresar transporte o grupo, según el bloque anterior.",
            },
            {
              es: "Puedo usar",
              jp: ruby("と / と[一緒|いっしょ]に"),
              note: "para expresar compañía en el desplazamiento.",
            },
            {
              es: "Ya no mezclo destino, transporte y compañía dentro de una misma oración de movimiento.",
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-020-quiz",
    title: "Quiz — Verbos de movimiento I",
    description:
      "Repaso fuerte de movimiento básico con 行く・来る・帰る y de las partículas que organizan destino, transporte, compañía y desplazamiento en grupo.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "fill-blank",
        prompt: {
          jp: ruby("[空港|くうこう]（　）[行|い]きます。"),
        },
        acceptedAnswers: ["に", "へ"],
        placeholder: "助詞",
        explanation:
          "Aquí se aceptan に y へ porque las dos pueden funcionar como destino o dirección en una frase simple de movimiento.",
        relatedSectionIds: ["lesson-020-concept", "lesson-020-structure"],
      },
      {
        id: "q2",
        type: "fill-blank",
        prompt: {
          jp: ruby("[新幹線|しんかんせん]（　）[京都|きょうと]へ[行|い]きます。"),
        },
        acceptedAnswers: ["で"],
        placeholder: "助詞",
        explanation:
          "Aquí 新幹線 es el medio de transporte. Por eso entra で.",
        relatedSectionIds: ["lesson-020-structure", "lesson-020-vocabulary"],
      },
      {
        id: "q3",
        type: "fill-blank",
        prompt: {
          jp: ruby("[先輩|せんぱい]（　）[一緒|いっしょ]に[空港|くうこう]に[来|き]ます。"),
        },
        acceptedAnswers: ["と"],
        placeholder: "助詞",
        explanation:
          "Aquí と marca la compañía y 一緒に la vuelve más explícita.",
        relatedSectionIds: ["lesson-020-structure", "lesson-020-concept"],
      },
      {
        id: "q4",
        type: "fill-blank",
        prompt: {
          jp: ruby("3[人|にん]（　）[水族館|すいぞくかん]へ[行|い]きます。"),
        },
        acceptedAnswers: ["で"],
        placeholder: "助詞",
        explanation:
          "Aquí で marca el grupo que realiza el movimiento.",
        relatedSectionIds: ["lesson-020-structure", "lesson-020-concept"],
      },
      {
        id: "q5",
        type: "fill-blank",
        prompt: {
          jp: ruby("[祖母|そぼ]は[来月|らいげつ]、[日本|にほん]（　）[帰|かえ]ります。"),
        },
        acceptedAnswers: ["に", "へ"],
        placeholder: "助詞",
        explanation:
          "Aquí 日本 es el lugar de regreso. En esta unidad se aceptan に y へ como destino o dirección en frases simples.",
        relatedSectionIds: ["lesson-020-structure", "lesson-020-examples"],
      },
      {
        id: "q6",
        type: "fill-blank",
        prompt: {
          jp: ruby("[部長|ぶちょう]は[午後|ごご]、[事務所|じむしょ]（　）[来|き]ます。"),
        },
        acceptedAnswers: ["に", "へ"],
        placeholder: "助詞",
        explanation:
          "Aquí 事務所 es el destino del movimiento. Las dos partículas pueden funcionar dentro del nivel de esta unidad.",
        relatedSectionIds: ["lesson-020-structure", "lesson-020-examples"],
      },
      {
        id: "q7",
        type: "fill-blank",
        prompt: {
          jp: ruby("[観光客|かんこうきゃく]はバス（　）[神社|じんじゃ]へ[行|い]きます。"),
        },
        acceptedAnswers: ["で"],
        placeholder: "助詞",
        explanation:
          "Aquí バス es el medio de transporte.",
        relatedSectionIds: ["lesson-020-structure", "lesson-020-examples"],
      },
      {
        id: "q8",
        type: "fill-blank",
        prompt: {
          jp: ruby("[父|ちち]は[実家|じっか]（　）[帰|かえ]ります。"),
        },
        acceptedAnswers: ["に", "へ"],
        placeholder: "助詞",
        explanation:
          "Aquí 実家 es el lugar de regreso. Se aceptan に y へ dentro del alcance de esta unidad.",
        relatedSectionIds: ["lesson-020-structure", "lesson-020-examples"],
      },
      {
        id: "q9",
        type: "fill-blank",
        prompt: {
          jp: ruby("[親友|しんゆう]___ [美術館|びじゅつかん]に[行|い]きます。"),
        },
        acceptedAnswers: ["と", "と一緒に"],
        placeholder: "助詞",
        explanation:
          "Aquí se aceptan と y と一緒に. La segunda forma deja la compañía más explícita.",
        relatedSectionIds: ["lesson-020-structure", "lesson-020-contrast"],
      },
      {
        id: "q10",
        type: "fill-blank",
        prompt: {
          jp: ruby("[来週|らいしゅう]、[飛行機|ひこうき]（　）[韓国|かんこく]へ[行|い]きます。"),
        },
        acceptedAnswers: ["で"],
        placeholder: "助詞",
        explanation:
          "Aquí 飛行機 marca transporte, por eso entra で.",
        relatedSectionIds: ["lesson-020-structure", "lesson-020-vocabulary"],
      },
      {
        id: "q11",
        type: "single-choice",
        prompt: {
          jp: ruby("[明日|あした]、[私|わたし]は[大阪|おおさか]へ___。"),
          note: "La idea es: mañana me desplazo hacia Osaka.",
        },
        choices: [
          { id: "a", label: { jp: ruby("[行|い]きます。") } },
          { id: "b", label: { jp: ruby("[来|き]ます。") } },
          { id: "c", label: { jp: ruby("[帰|かえ]ります。") } },
          { id: "d", label: { jp: ruby("います。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí el movimiento se entiende como ir hacia Osaka, no como venir hacia aquí ni como volver al lugar base.",
        relatedSectionIds: ["lesson-020-concept", "lesson-020-contrast"],
      },
      {
        id: "q12",
        type: "single-choice",
        prompt: {
          jp: ruby("[明日|あした]、[先生|せんせい]はこの[教室|きょうしつ]に___。"),
          note: "La escena se mira desde esta sala, como punto de llegada.",
        },
        choices: [
          { id: "a", label: { jp: ruby("[行|い]きます。") } },
          { id: "b", label: { jp: ruby("[来|き]ます。") } },
          { id: "c", label: { jp: ruby("[帰|かえ]ります。") } },
          { id: "d", label: { jp: ruby("[飲|の]みます。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "Aquí la sala funciona como punto de llegada, por eso la opción natural es 来ます.",
        relatedSectionIds: ["lesson-020-concept", "lesson-020-contrast"],
      },
      {
        id: "q13",
        type: "single-choice",
        prompt: {
          jp: ruby("[来月|らいげつ]、[祖父|そふ]は[故郷|こきょう]へ___。"),
          note: "La idea es: el próximo mes vuelve a su tierra natal.",
        },
        choices: [
          { id: "a", label: { jp: ruby("[行|い]きます。") } },
          { id: "b", label: { jp: ruby("[来|き]ます。") } },
          { id: "c", label: { jp: ruby("[帰|かえ]ります。") } },
          { id: "d", label: { jp: ruby("[見|み]ます。") } },
        ],
        correctChoiceId: "c",
        explanation:
          "Aquí no basta con ir a un lugar cualquiera; la idea es volver al lugar base. Por eso usamos 帰ります.",
        relatedSectionIds: ["lesson-020-concept", "lesson-020-contrast"],
      },
      {
        id: "q14",
        type: "single-choice",
        prompt: {
          jp: ruby("[港|みなと]___[行|い]きます。"),
          note: "Elige una partícula natural de destino.",
        },
        choices: [
          { id: "a", label: { jp: ruby("で") } },
          { id: "b", label: { jp: ruby("を") } },
          { id: "c", label: { jp: ruby("に") } },
          { id: "d", label: { jp: ruby("が") } },
        ],
        correctChoiceId: "c",
        explanation:
          "Aquí necesitamos una partícula de destino. に funciona bien en este tipo de frase. へ también podría aparecer, pero en estas opciones la correcta disponible es に.",
        relatedSectionIds: ["lesson-020-structure", "lesson-020-contrast"],
      },
      {
        id: "q15",
        type: "single-choice",
        prompt: {
          jp: ruby("[飛行機|ひこうき]___[日本|にほん]へ[帰|かえ]ります。"),
          note: "Elige la partícula que marque transporte.",
        },
        choices: [
          { id: "a", label: { jp: ruby("を") } },
          { id: "b", label: { jp: ruby("で") } },
          { id: "c", label: { jp: ruby("と") } },
          { id: "d", label: { jp: ruby("に") } },
        ],
        correctChoiceId: "b",
        explanation:
          "Aquí 飛行機 es el medio de transporte, por eso la partícula correcta es で.",
        relatedSectionIds: ["lesson-020-structure", "lesson-020-examples"],
      },
      {
        id: "q16",
        type: "single-choice",
        prompt: {
          jp: ruby("[同僚|どうりょう]___[温泉|おんせん]へ[行|い]きます。"),
          note: "La idea es: voy con un colega.",
        },
        choices: [
          { id: "a", label: { jp: ruby("と") } },
          { id: "b", label: { jp: ruby("で") } },
          { id: "c", label: { jp: ruby("へ") } },
          { id: "d", label: { jp: ruby("に") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí necesitas la partícula de compañía. Por eso entra と.",
        relatedSectionIds: ["lesson-020-structure", "lesson-020-examples"],
      },
      {
        id: "q17",
        type: "single-choice",
        prompt: {
          jp: ruby("4[人|にん]___カラオケに[行|い]きました。"),
          note: "La idea es: fuimos cuatro personas.",
        },
        choices: [
          { id: "a", label: { jp: ruby("で") } },
          { id: "b", label: { jp: ruby("と") } },
          { id: "c", label: { jp: ruby("に") } },
          { id: "d", label: { jp: ruby("は") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí で marca el grupo que realiza el movimiento.",
        relatedSectionIds: ["lesson-020-structure", "lesson-020-concept"],
      },
      {
        id: "q18",
        type: "single-choice",
        prompt: {
          jp: ruby("[親友|しんゆう]___[一緒|いっしょ]に[博物館|はくぶつかん]へ[行|い]きます。"),
          note: "Falta la partícula que completa と一緒に.",
        },
        choices: [
          { id: "a", label: { jp: ruby("で") } },
          { id: "b", label: { jp: ruby("と") } },
          { id: "c", label: { jp: ruby("に") } },
          { id: "d", label: { jp: ruby("へ") } },
        ],
        correctChoiceId: "b",
        explanation:
          "La expresión correcta es 親友と一緒に. と marca la compañía y 一緒に la hace más explícita.",
        relatedSectionIds: ["lesson-020-structure", "lesson-020-contrast"],
      },
      {
        id: "q19",
        type: "single-choice",
        prompt: {
          jp: ruby("[同僚|どうりょう]___タクシー___[空港|くうこう]___[行|い]きます。"),
          note: "¿Qué combinación suena más natural?",
        },
        choices: [
          { id: "a", label: { jp: ruby("と / で / に") } },
          { id: "b", label: { jp: ruby("に / を / で") } },
          { id: "c", label: { jp: ruby("で / と / が") } },
          { id: "d", label: { jp: ruby("を / に / と") } },
        ],
        correctChoiceId: "a",
        explanation:
          "同僚と marca compañía, タクシーで marca transporte y 空港に marca destino. Por eso la combinación natural es と / で / に.",
        relatedSectionIds: ["lesson-020-structure", "lesson-020-summary"],
      },
      {
        id: "q20",
        type: "single-choice",
        prompt: {
          jp: ruby("[来客|らいきゃく]はこの[会議室|かいぎしつ]に___。"),
          note: "La escena se mira desde esta sala como punto de llegada.",
        },
        choices: [
          { id: "a", label: { jp: ruby("[行|い]きます。") } },
          { id: "b", label: { jp: ruby("[来|き]ます。") } },
          { id: "c", label: { jp: ruby("[帰|かえ]ります。") } },
          { id: "d", label: { jp: ruby("[会|あ]います。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "Aquí el punto de vista está en esta sala como lugar al que la visita viene. Por eso la mejor opción es 来ます.",
        relatedSectionIds: ["lesson-020-concept", "lesson-020-contrast"],
      },
    ],
  },
};

export default lesson020;
