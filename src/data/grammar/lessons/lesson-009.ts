//src/data/grammar/lessons/lesson-009.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson009: GrammarLesson = {
  id: "lesson-009",
  slug: "demostrativos-con-sustantivo-kono-sono-ano",
  order: 12,
  level: "N5",
  status: "ready",
  title: "Demostrativos con sustantivo",
  jpTitle: "この・その・あの・だれの・なんの",
  shortTitle: "この / その / あの",
  description:
    "Cómo usar この・その・あの antes de un sustantivo, distinguirlos de これ・それ・あれ, y empezar a usar la omisión con の para preguntar de quién es algo y de qué tipo es.",
  estimatedMinutes: 58,
  categoryTags: ["fundamentos", "demostrativos", "particulas", "posesion", "preguntas", "lectura"],
  grammarTags: [
    "この",
    "その",
    "あの",
    "このA",
    "Aのです",
    "だれの",
    "なんの",
    "omision nominal",
  ],
  searchTerms: [
    "kono sono ano",
    "demostrativos con sustantivo",
    "este libro japones",
    "dare no desu ka",
    "nan no zasshi desu ka",
    "omision con no",
    "kore kono diferencia",
  ],
  relatedLessonSlugs: [
    "preguntas-basicas-desu-ka",
    "pronombres-demostrativos-kore-sore-are",
    "particula-no-posesion-relacion-tipo",
  ],
  relatedVocabularyTags: ["objetos", "documentos", "posesion", "temas", "preguntas"],
  objectives: [
    "Entender que この・その・あの mantienen la lógica de distancia de これ・それ・あれ, pero ya no reemplazan al sustantivo: ahora lo acompañan.",
    "Usar grupos como この本・その眼鏡・あの病院 dentro de oraciones completas.",
    "Distinguir claramente entre これはAです y このAはBです.",
    "Entender cuándo se puede omitir el sustantivo final y dejar solo のです porque el contexto ya lo hace visible.",
    "Preguntar de quién es algo con だれのですか y preguntar de qué tipo es algo con なんのAですか.",
    "Leer y producir ejemplos más variados sin depender siempre del mismo vocabulario básico de unidades anteriores.",
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
      id: "lesson-009-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "En la unidad anterior aprendiste que の conecta sustantivos. Antes de eso, con これ・それ・あれ aprendiste a señalar cosas reemplazando el sustantivo. Ahora toca unir esas dos piezas: esta unidad te enseña a usar demostrativos que acompañan directamente a un sustantivo, y también a omitir ese sustantivo cuando ya está claro por el contexto.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Vas a contrastar estructuras como:",
              jp: ruby("これは[雑誌|ざっし]です。 / この[雑誌|ざっし]は[料理|りょうり]の[雑誌|ざっし]です。"),
            },
            {
              es: "También entrarás a preguntas como:",
              jp: ruby("この[本|ほん]は[誰|だれ]のですか。 / これは[何|なん]の[雑誌|ざっし]ですか。"),
            },
            {
              es: "En esta unidad todavía no veremos",
              jp: ruby("どの / どれ / どこ"),
              note: "Nos concentramos en fijar bien この・その・あの, la omisión con の y las preguntas con だれ / なんの.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-009-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "La distancia sigue igual; la función cambia",
          content:
            "La lógica espacial sigue siendo la misma que en これ・それ・あれ. Lo que cambia aquí es la función gramatical. Ahora el demostrativo ya no reemplaza al sustantivo, sino que va pegado a él para señalar cuál sustantivo quieres identificar dentro de la escena.",
          bullets: [
            {
              jp: ruby("これ"),
              es: "pronombre: reemplaza el sustantivo",
            },
            {
              jp: ruby("この[本|ほん]"),
              es: "acompaña al sustantivo 本",
            },
            {
              jp: ruby("その[眼鏡|めがね] / あの[病院|びょういん]"),
              es: "misma lógica de distancia, pero ahora con sustantivo visible",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "この・その・あの no van solos",
          content:
            "En esta unidad debes pensarlos como piezas que necesitan un sustantivo inmediatamente después. Por eso esta familia no se comporta igual que これ・それ・あれ.",
          bullets: [
            {
              jp: ruby("この[小説|しょうせつ]"),
              es: "correcto: el sustantivo aparece después",
            },
            {
              jp: ruby("その[封筒|ふうとう]"),
              es: "correcto: acompaña al sustantivo",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "La omisión con の depende del contexto",
          content:
            "Cuando el sustantivo ya está clarísimo por el contexto, puedes omitirlo y dejar solo のです. Eso no significa que siempre puedas borrar el nombre final: funciona cuando todos ya saben de qué objeto se está hablando.",
          bullets: [
            {
              jp: ruby("この[財布|さいふ]は[美咲|みさき]さんの[財布|さいふ]です。"),
              es: "forma completa",
            },
            {
              jp: ruby("この[財布|さいふ]は[美咲|みさき]さんのです。"),
              es: "el sustantivo final ya se entiende y se omite",
            },
            {
              jp: ruby("その[書類|しょるい]は[会社|かいしゃ]の[書類|しょるい]です。"),
              es: "Forma completa",
            },
            {
              jp: ruby("その[書類|しょるい]は[会社|かいしゃ]のです。"),
              es: "aquí のです señala pertenencia porque el nombre principal ya está visible",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "だれの pregunta por dueño; なんの pregunta por tipo",
          content:
            "Estas dos preguntas se parecen visualmente, pero no buscan la misma información. だれの te pide saber de quién es algo. なんの te pide saber qué tipo de objeto, tema o categoría está expresando el grupo con の.",
          bullets: [
            {
              jp: ruby("この[上着|うわぎ]は[誰|だれ]のですか。"),
              es: "pregunta por el dueño",
            },
            {
              jp: ruby("これは[何|なん]の[雑誌|ざっし]ですか。"),
              es: "pregunta por el tipo o contenido de la revista",
            },
            {
              jp: ruby("[旅行|りょこう]の[雑誌|ざっし]です。 / [科学|かがく]の[本|ほん]です。"),
              es: "respuesta de tipo, tema o categoría",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-009-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-009-1",
              label: "Demostrativo + sustantivo",
              pattern: ruby("この A / その A / あの A"),
              meaning: "este A / ese A / aquel A",
              translation:
                "La lógica de distancia sigue siendo la misma que ya conoces, pero ahora el demostrativo acompaña directamente al sustantivo y no lo reemplaza.",
              structure: [
                {
                  slot: { jp: ruby("この") },
                  value: "este / esta",
                  note: "Cerca de mí o de mi espacio personal.",
                },
                {
                  slot: { jp: ruby("その") },
                  value: "ese / esa",
                  note: "Cerca de ti o de tu espacio personal.",
                },
                {
                  slot: { jp: ruby("あの") },
                  value: "aquel / aquella",
                  note: "Lejos de ambos.",
                },
                {
                  slot: "A",
                  value: "sustantivo visible",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[財布|さいふ] / [眼鏡|めがね] / [封筒|ふうとう] / [病院|びょういん]。"),
                  },
                },
              ],
              notes: [
                "La distancia no cambia respecto a これ・それ・あれ; lo que cambia es la función gramatical.",
                "En esta unidad, esta familia necesita un sustantivo justo después.",
              ],
            },
            {
              id: "pattern-009-2",
              label: "Demostrativo con sustantivo dentro de la oración",
              pattern: ruby("この A は B です。"),
              meaning: "Este A es B.",
              translation:
                "Ahora el grupo completo この A entra como tema de la oración. Después viene la identificación o descripción principal.",
              structure: [
                {
                  slot: { jp: ruby("この A") },
                  value: "tema con demostrativo",
                  note: "El demostrativo y el sustantivo forman un solo bloque.",
                },
                {
                  slot: { jp: ruby("は") },
                  value: "tema",
                  note: "Misma partícula de tema que ya trabajaste desde la unidad 1.",
                },
                {
                  slot: "B",
                  value: "identificación principal",
                  note: {
                    es: "Puede ser algo como:",
                    jp: ruby("[歴史|れきし]の[小説|しょうせつ] / [美術館|びじゅつかん]の[写真|しゃしん] / [先生|せんせい]のです。"),
                  },
                },
              ],
              notes: [
                "Piensa el grupo このA como una sola pieza al entrar a la oración.",
                "El núcleo final de la identificación sigue estando a la derecha, igual que en AのB.",
              ],
            },
            {
              id: "pattern-009-3",
              label: "Pronombre vs demostrativo con sustantivo",
              pattern: ruby("これは A です。 ↔ この A は B です。"),
              meaning: "Esto es A. ↔ Este A es B.",
              translation:
                "Esta comparación te ayuda a ver el salto entre la unit 007 y esta unidad. En la primera estructura el pronombre reemplaza el sustantivo. En la segunda, el demostrativo acompaña al sustantivo y el grupo entero entra como tema.",
              notes: [
                {
                  es: "Compara con calma:",
                  jp: ruby("これは[資料|しりょう]です。 / この[資料|しりょう]は[旅行|りょこう]の[資料|しりょう]です。"),
                },
                "No conviene mezclar las dos familias como si fueran iguales.",
              ],
            },
            {
              id: "pattern-009-4",
              label: "Omisión con のです",
              pattern: ruby("この A は X のです。"),
              meaning: "Este A es de X.",
              translation:
                "Aquí el sustantivo después de X ya no aparece porque se entiende por el contexto. Lo que se mantiene visible es のです.",
              structure: [
                {
                  slot: { jp: ruby("この A") },
                  value: "objeto ya visible",
                  note: "El objeto principal sigue estando explícito al inicio.",
                },
                {
                  slot: "X",
                  value: "persona, institución o grupo",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[私|わたし] / [彼女|かのじょ] / [先生|せんせい] / [会社|かいしゃ] / [美咲|みさき]さん。"),
                  },
                },
                {
                  slot: { jp: ruby("のです") },
                  value: "omisión del sustantivo final",
                  note: "El nombre omitido ya se recupera desde el contexto.",
                },
              ],
              notes: [
                "No estás inventando una frase nueva: simplemente omites el sustantivo final porque ya está claro.",
                "Si el contexto no deja claro el objeto, conviene mantener la forma completa.",
              ],
            },
            {
              id: "pattern-009-5",
              label: "Preguntar de quién es",
              pattern: ruby("この A は [誰|だれ]のですか。"),
              meaning: "¿De quién es este A?",
              translation:
                "Aquí だれ entra para preguntar por la persona dueña del objeto. La respuesta natural suele cerrar con Xのです.",
              structure: [
                {
                  slot: { jp: ruby("この A") },
                  value: "objeto ya visible",
                  note: "El objeto principal se mantiene claro desde el inicio.",
                },
                {
                  slot: { jp: ruby("[誰|だれ]の") },
                  value: "de quién",
                  note: "Pregunta por el dueño o la pertenencia.",
                },
                {
                  slot: { jp: ruby("ですか") },
                  value: "cierre de pregunta",
                  note: "Misma lógica de ですか que vienes trabajando desde antes.",
                },
              ],
              notes: [
                {
                  es: "Respuesta típica:",
                  jp: ruby("[健太|けんた]さんのです。 / [私|わたし]のです。"),
                },
              ],
            },
            {
              id: "pattern-009-6",
              label: "Preguntar qué tipo es",
              pattern: ruby("これは [何|なん]の B ですか。"),
              meaning: "¿Esto es un B de qué tipo?",
              translation:
                "Aquí なんの no pregunta por dueño, sino por la clase, el contenido, el tema o la categoría que define al sustantivo final.",
              structure: [
                {
                  slot: { jp: ruby("これは") },
                  value: "tema visible",
                  note: "Primero señalas el objeto o referente visible.",
                },
                {
                  slot: { jp: ruby("[何|なん]の B") },
                  value: "tipo o categoría",
                  note: {
                    es: "B puede ser, por ejemplo:",
                    jp: ruby("[雑誌|ざっし] / [本|ほん] / [写真|しゃしん] / [絵|え]。"),
                  },
                },
              ],
              notes: [
                {
                  es: "Respuesta típica:",
                  jp: ruby("[旅行|りょこう]の[雑誌|ざっし]です。 / [科学|かがく]の[本|ほん]です。"),
                },
                "Aquí la pregunta no busca una persona, sino una categoría o tema.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-009-vocabulary",
      kind: "vocabulary",
      title: "Vocabulario nuevo para esta unidad",
      description:
        "Aquí subimos el nivel léxico para que la unidad no dependa solo del mismo vocabulario básico de las lessons anteriores.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 4,
          items: [
            { id: "vocab-009-wallet", jp: ruby("[財布|さいふ]"), reading: "さいふ", meaning: "billetera / cartera", tags: ["objeto", "nuevo"] },
            { id: "vocab-009-glasses", jp: ruby("[眼鏡|めがね]"), reading: "めがね", meaning: "gafas / lentes", tags: ["objeto", "nuevo"] },
            { id: "vocab-009-medicine", jp: ruby("[薬|くすり]"), reading: "くすり", meaning: "medicina", tags: ["objeto", "nuevo"] },
            { id: "vocab-009-ticket", jp: ruby("[切符|きっぷ]"), reading: "きっぷ", meaning: "billete / ticket de transporte", tags: ["objeto", "nuevo"] },

            { id: "vocab-009-envelope", jp: ruby("[封筒|ふうとう]"), reading: "ふうとう", meaning: "sobre", tags: ["objeto", "nuevo"] },
            { id: "vocab-009-document", jp: ruby("[書類|しょるい]"), reading: "しょるい", meaning: "documento / papeles", tags: ["objeto", "nuevo"] },
            { id: "vocab-009-planner", jp: ruby("[手帳|てちょう]"), reading: "てちょう", meaning: "agenda / libreta de planificación", tags: ["objeto", "nuevo"] },
            { id: "vocab-009-novel", jp: ruby("[小説|しょうせつ]"), reading: "しょうせつ", meaning: "novela", tags: ["objeto", "nuevo"] },

            { id: "vocab-009-encyclopedia", jp: ruby("[辞典|じてん]"), reading: "じてん", meaning: "diccionario / enciclopedia breve", tags: ["objeto", "nuevo"] },
            { id: "vocab-009-material", jp: ruby("[資料|しりょう]"), reading: "しりょう", meaning: "material / documento de referencia", tags: ["objeto", "nuevo"] },
            { id: "vocab-009-jacket", jp: [{ text: "ジャケット" }], reading: "じゃけっと", meaning: "chaqueta / jacket", tags: ["ropa", "nuevo"] },
            { id: "vocab-009-name-tag", jp: ruby("[名札|なふだ]"), reading: "なふだ", meaning: "gafete / credencial de nombre", tags: ["objeto", "nuevo"] },

            { id: "vocab-009-uniform", jp: ruby("[制服|せいふく]"), reading: "せいふく", meaning: "uniforme", tags: ["ropa", "nuevo"] },
            { id: "vocab-009-poster", jp: [{ text: "ポスター" }], reading: "ぽすたー", meaning: "póster / afiche", tags: ["objeto", "nuevo"] },
            { id: "vocab-009-luggage", jp: ruby("[荷物|にもつ]"), reading: "にもつ", meaning: "equipaje / bulto", tags: ["objeto", "nuevo"] },
            { id: "vocab-009-painting", jp: ruby("[絵|え]"), reading: "え", meaning: "dibujo / pintura", tags: ["objeto", "nuevo"] },

            { id: "vocab-009-history", jp: ruby("[歴史|れきし]"), reading: "れきし", meaning: "historia", tags: ["tema", "nuevo"] },
            { id: "vocab-009-science", jp: ruby("[科学|かがく]"), reading: "かがく", meaning: "ciencia", tags: ["tema", "nuevo"] },
            { id: "vocab-009-cooking", jp: ruby("[料理|りょうり]"), reading: "りょうり", meaning: "cocina / gastronomía", tags: ["tema", "nuevo"] },
            { id: "vocab-009-travel", jp: ruby("[旅行|りょこう]"), reading: "りょこう", meaning: "viaje / viajes", tags: ["tema", "nuevo"] },

            { id: "vocab-009-animals", jp: ruby("[動物|どうぶつ]"), reading: "どうぶつ", meaning: "animales", tags: ["tema", "nuevo"] },
            { id: "vocab-009-art", jp: ruby("[美術|びじゅつ]"), reading: "びじゅつ", meaning: "arte", tags: ["tema", "nuevo"] },
            { id: "vocab-009-film", jp: ruby("[映画|えいが]"), reading: "えいが", meaning: "cine / película", tags: ["tema", "nuevo"] },
            { id: "vocab-009-baseball", jp: ruby("[野球|やきゅう]"), reading: "やきゅう", meaning: "béisbol", tags: ["tema", "nuevo"] },

            { id: "vocab-009-art-museum", jp: ruby("[美術館|びじゅつかん]"), reading: "びじゅつかん", meaning: "museo de arte", tags: ["lugar", "nuevo"] },
            { id: "vocab-009-museum", jp: ruby("[博物館|はくぶつかん]"), reading: "はくぶつかん", meaning: "museo", tags: ["lugar", "nuevo"] },
            { id: "vocab-009-airport", jp: ruby("[空港|くうこう]"), reading: "くうこう", meaning: "aeropuerto", tags: ["lugar", "nuevo"] },
            { id: "vocab-009-market", jp: ruby("[市場|いちば]"), reading: "いちば", meaning: "mercado", tags: ["lugar", "nuevo"] },

            { id: "vocab-009-guidebook", jp: ruby("[案内書|あんないしょ]"), reading: "あんないしょ", meaning: "guía / folleto informativo", tags: ["objeto", "nuevo"] },
            { id: "vocab-009-schedule", jp: ruby("[予定表|よていひょう]"), reading: "よていひょう", meaning: "horario / tabla de planificación", tags: ["objeto", "nuevo"] },
            { id: "vocab-009-meeting-room", jp: ruby("[会議室|かいぎしつ]"), reading: "かいぎしつ", meaning: "sala de reuniones", tags: ["lugar", "nuevo"] },
            { id: "vocab-009-lab", jp: ruby("[研究室|けんきゅうしつ]"), reading: "けんきゅうしつ", meaning: "laboratorio / sala de investigación", tags: ["lugar", "nuevo"] },
          ],
        },
      ],
    },
    {
      id: "lesson-009-examples",
      kind: "examples",
      title: "Ejemplos guiados",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "ex-009-1",
              jp: ruby("これは[資料|しりょう]です。"),
              es: "Esto es material de referencia.",
              notes: [
                "Aquí el pronombre これ reemplaza al sustantivo entero, como en la unidad 7.",
              ],
            },
            {
              id: "ex-009-2",
              jp: ruby("この[資料|しりょう]は[旅行|りょこう]の[資料|しりょう]です。"),
              es: "Este material es material de viajes.",
              breakdown: [
                { label: "この資料", es: "grupo con demostrativo + sustantivo" },
                { label: "旅行の資料", es: "tipo o tema del material" },
              ],
              notes: [
                "Comparado con el ejemplo anterior, aquí el sustantivo ya aparece visible después de この.",
              ],
            },
            {
              id: "ex-009-3",
              jp: ruby("その[封筒|ふうとう]は[誰|だれ]のですか。 [沙織|さおり]さんのです。"),
              es: "¿De quién es ese sobre? Es de Saori.",
              notes: [
                "La pregunta busca al dueño del objeto y la respuesta omite el sustantivo final porque ya está claro.",
              ],
            },
            {
              id: "ex-009-4",
              jp: ruby("この[手帳|てちょう]は[美咲|みさき]さんのです。"),
              es: "Esta agenda es de Misaki.",
              notes: [
                "El objeto visible es 手帳. Por eso no hace falta repetir 手帳 al final otra vez.",
              ],
            },
            {
              id: "ex-009-5",
              jp: ruby("あの[雑誌|ざっし]は[何|なん]の[雑誌|ざっし]ですか。 [料理|りょうり]の[雑誌|ざっし]です。"),
              es: "¿Aquella revista es una revista de qué tipo? Es una revista de cocina.",
              notes: [
                "Aquí なんの no pregunta por dueño, sino por tipo o contenido.",
              ],
            },
            {
              id: "ex-009-6",
              jp: ruby("この[小説|しょうせつ]は[歴史|れきし]の[小説|しょうせつ]です。"),
              es: "Esta novela es una novela de historia.",
              notes: [
                "El núcleo sigue siendo 小説. 歴史 lo clasifica desde la izquierda.",
              ],
            },
            {
              id: "ex-009-7",
              jp: ruby("その[絵|え]は[動物|どうぶつ]の[絵|え]です。"),
              es: "Ese dibujo es un dibujo de animales.",
              notes: [
                "Es un buen ejemplo de なんの que luego podría responderse con 動物の絵です.",
              ],
            },
            {
              id: "ex-009-8",
              jp: ruby("あのポスターは[映画|えいが]のポスターです。"),
              es: "Aquel póster es un póster de cine / de película.",
              notes: [
                "Es un buen ejemplo de なんの que luego podría responderse con 映画のポスターです.",
              ],
            },
            {
              id: "ex-009-9",
              jp: ruby("この[眼鏡|めがね]は[健太|けんた]さんのですか。 [いいえ]、[違|ちが]います。 [直樹|なおき]さんのです。"),
              es: "¿Estas gafas son de Kenta? No, está equivocado. Son de Naoki.",
              notes: [
                "Aquí reciclas la lógica de pregunta y corrección que ya viste antes, pero ahora con omisión y posesión.",
              ],
            },
            {
              id: "ex-009-10",
              jp: ruby("その[案内書|あんないしょ]は[美術館|びじゅつかん]の[案内書|あんないしょ]です。"),
              es: "Esa guía es una guía del museo de arte.",
              notes: [
                "Aquí の expresa relación con lugar o institución, no posesión personal.",
              ],
            },
            {
              id: "ex-009-11",
              jp: ruby("この[書類|しょるい]は[会社|かいしゃ]のです。 あの[書類|しょるい]は[研究室|けんきゅうしつ]のです。"),
              es: "Este documento es de la empresa. Aquel documento es del laboratorio.",
              notes: [
                "Sirve para contrastar dos pertenencias distintas sin repetir el nombre final de nuevo.",
              ],
            },
            {
              id: "ex-009-12",
              jp: ruby("これは[何|なん]の[写真|しゃしん]ですか。 [空港|くうこう]の[写真|しゃしん]です。"),
              es: "¿Esta es una foto de qué? Es una foto del aeropuerto.",
              notes: [
                "La respuesta fija bien la lógica: なんの + sustantivo pide tipo, contenido o referente.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-009-contrast",
      kind: "contrast",
      title: "Contrastes importantes",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-009-1",
              label: "Pronombre vs demostrativo con sustantivo",
              correct: {
                jp: ruby("これは[辞典|じてん]です。 / この[辞典|じてん]は[日本語|にほんご]の[辞典|じてん]です。"),
                es: "La primera usa pronombre; la segunda usa demostrativo + sustantivo.",
              },
              explanation:
                "La lógica de distancia se mantiene, pero la función gramatical no es la misma. これ reemplaza el sustantivo; この lo acompaña.",
            },
            {
              id: "contrast-009-2",
              label: "この・その・あの no van solos",
              correct: {
                jp: ruby("その[薬|くすり] / あの[博物館|はくぶつかん]"),
                es: "El demostrativo siempre entra con un sustantivo visible.",
              },
              incorrect: {
                jp: ruby("その / あの"),
                es: "Dentro del alcance de esta unidad, así quedan incompletos.",
              },
              explanation:
                "Esta familia no reemplaza el sustantivo. Si quieres reemplazarlo, vuelves a la familia これ・それ・あれ.",
            },
            {
              id: "contrast-009-3",
              label: "Forma completa vs omisión natural",
              correct: {
                jp: ruby("この[財布|さいふ]は[彩乃|あやの]さんの[財布|さいふ]です。 / この[財布|さいふ]は[彩乃|あやの]さんのです。"),
                es: "Las dos son posibles; la segunda omite el sustantivo final porque ya está claro.",
              },
              explanation:
                "La omisión con のです no crea otra gramática distinta: solo evita repetir el nombre visible cuando el contexto ya lo deja claro.",
            },
            {
              id: "contrast-009-4",
              label: "だれの vs なんの",
              correct: {
                jp: ruby("この[上着|うわぎ]は[誰|だれ]のですか。 / これは[何|なん]の[雑誌|ざっし]ですか。"),
                es: "Una pregunta busca dueño; la otra, tipo o contenido.",
              },
              explanation:
                "No conviene mezclar estas dos preguntas porque no apuntan a la misma información.",
            },
            {
              id: "contrast-009-5",
              label: "Tipo o tema del objeto",
              correct: {
                jp: ruby("[科学|かがく]の[本|ほん] / [旅行|りょこう]の[雑誌|ざっし] / [動物|どうぶつ]の[絵|え]"),
                es: "Aquí の expresa clase, tema o contenido.",
              },
              incorrect: {
                jp: ruby("[科学|かがく]です[本|ほん] / [旅行|りょこう]です[雑誌|ざっし]"),
                es: "Así la estructura nominal se rompe.",
              },
              explanation:
                "Cuando quieres clasificar o describir el sustantivo desde otro nombre, el puente natural sigue siendo の.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-009-warning",
      kind: "warning",
      title: "En qué fijarte bien",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "No mezcles dos ideas diferentes: acompañar un sustantivo y reemplazarlo",
          content:
            "La confusión más común aquí es tratar この como si fuera lo mismo que これ. Recuerda: uno acompaña un sustantivo visible; el otro lo reemplaza. La segunda confusión común es omitir el sustantivo demasiado pronto. Solo hazlo cuando de verdad ya esté claro en la escena o en la conversación.",
          bullets: [
            {
              jp: ruby("これは[書類|しょるい]です。 / この[書類|しょるい]は[会社|かいしゃ]のです。"),
              es: "Primero reemplazas el sustantivo; después lo acompañas y finalmente puedes omitirlo al final si ya está claro.",
            },
            {
              jp: ruby("この[雑誌|ざっし]は[誰|だれ]のですか。 / これは[何|なん]の[雑誌|ざっし]ですか。"),
              es: "Una pregunta busca dueño; la otra, tipo o contenido.",
            },
            {
              es: "Si el contexto todavía no deja claro el sustantivo final, mantén la forma completa antes de pasar a のです.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-009-practice",
      kind: "practice",
      title: "Práctica guiada antes del quiz",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Mira varios objetos y di en voz alta pares como:",
              jp: ruby("この[財布|さいふ] / その[眼鏡|めがね] / あの[博物館|はくぶつかん]。"),
            },
            {
              es: "Transforma una estructura con pronombre en otra con sustantivo visible:",
              jp: ruby("これは[資料|しりょう]です。 → この[資料|しりょう]は[旅行|りょこう]の[資料|しりょう]です。"),
            },
            {
              es: "Practica la omisión cuando el objeto ya esté claro:",
              jp: ruby("この[切符|きっぷ]は[私|わたし]の[切符|きっぷ]です。 → この[切符|きっぷ]は[私|わたし]のです。"),
            },
            {
            es: "Haz preguntas por dueño usando",
            jp: ruby("[誰|だれ]のですか"),
            note: "con objetos nuevos como [上着|うわぎ], [封筒|ふうとう], [手帳|てちょう], [名札|なふだ] o [荷物|にもつ].",
            },
            {
            es: "Haz preguntas por tipo usando",
            jp: ruby("[何|なん]の[雑誌|ざっし]ですか / [何|なん]の[本|ほん]ですか / [何|なん]の[写真|しゃしん]ですか"),
            note: "y responde con temas como [料理|りょうり], [科学|かがく], [歴史|れきし], [旅行|りょこう] o [動物|どうぶつ].",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-009-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Entiendo que",
              jp: ruby("この・その・あの"),
              note: "mantienen la lógica de distancia, pero ahora acompañan un sustantivo.",
            },
            {
              es: "Puedo distinguir entre",
              jp: ruby("これはAです。 / このAはBです。"),
            },
            {
              es: "Puedo usar la omisión con",
              jp: ruby("のです"),
              note: "cuando el sustantivo final ya está claro en el contexto.",
            },
            {
              es: "Puedo preguntar por dueño con",
              jp: ruby("[誰|だれ]のですか。"),
            },
            {
              es: "Puedo preguntar por tipo o contenido con",
              jp: ruby("[何|なん]の[雑誌|ざっし]ですか。 / [何|なん]の[本|ほん]ですか。"),
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-009-quiz",
    title: "Quiz — この・その・あの・だれの・なんの",
    description:
      "Repaso variado para comprobar si ya distingues la función de esta nueva familia, la omisión con の y la diferencia entre preguntas por dueño y preguntas por tipo.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "single-choice",
        prompt: {
          es: "¿Cuál grupo significa “esta billetera”?",
        },
        choices: [
          { id: "a", label: { jp: ruby("これ[財布|さいふ]") } },
          { id: "b", label: { jp: ruby("この[財布|さいふ]") } },
          { id: "c", label: { jp: ruby("その[財布|さいふ]です") } },
          { id: "d", label: { jp: ruby("あのです[財布|さいふ]") } },
        ],
        correctChoiceId: "b",
        explanation:
          "この acompaña al sustantivo 財布. これ, en cambio, reemplaza al sustantivo y no va pegado a él así.",
        relatedSectionIds: ["lesson-009-concept", "lesson-009-structure"],
      },
      {
        id: "q2",
        type: "single-choice",
        prompt: {
          es: "Elige la oración más natural para decir: “Ese sobre es de Naoki”.",
        },
        choices: [
          { id: "a", label: { jp: ruby("その[封筒|ふうとう]は[直樹|なおき]さんのです。") } },
          { id: "b", label: { jp: ruby("それ[封筒|ふうとう]は[直樹|なおき]さんです。") } },
          { id: "c", label: { jp: ruby("そのは[封筒|ふうとう][直樹|なおき]さんのです。") } },
          { id: "d", label: { jp: ruby("その[封筒|ふうとう]は[直樹|なおき]さんですの。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí necesitas demostrativo + sustantivo visible, seguido de la omisión natural con のです.",
        relatedSectionIds: ["lesson-009-structure", "lesson-009-examples"],
      },
      {
        id: "q3",
        type: "single-choice",
        prompt: {
          es: "¿Cuál opción muestra mejor la diferencia entre pronombre y demostrativo con sustantivo?",
        },
        choices: [
          { id: "a", label: { jp: ruby("これは[資料|しりょう]です。 / この[資料|しりょう]は[科学|かがく]の[資料|しりょう]です。") } },
          { id: "b", label: { jp: ruby("このです[資料|しりょう]。 / これ[資料|しりょう]です。") } },
          { id: "c", label: { jp: ruby("その[資料|しりょう]です。 / あの[資料|しりょう]です。") } },
          { id: "d", label: { jp: ruby("この / その / あの") } },
        ],
        correctChoiceId: "a",
        explanation:
          "La primera mitad usa これ como pronombre. La segunda usa この + sustantivo visible como tema de la oración.",
        relatedSectionIds: ["lesson-009-concept", "lesson-009-contrast"],
      },
      {
        id: "q4",
        type: "single-choice",
        prompt: {
          es: "¿Qué pregunta significa “¿De quién es esta agenda?”?",
        },
        choices: [
          { id: "a", label: { jp: ruby("この[手帳|てちょう]は[誰|だれ]のですか。") } },
          { id: "b", label: { jp: ruby("この[手帳|てちょう]は[何|なん]のですか。") } },
          { id: "c", label: { jp: ruby("これは[誰|だれ][手帳|てちょう]ですか。") } },
          { id: "d", label: { jp: ruby("その[手帳|てちょう]は[誰|だれ]ですか。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "だれのですか pregunta por el dueño del objeto ya visible en la oración.",
        relatedSectionIds: ["lesson-009-structure", "lesson-009-summary"],
      },
      {
        id: "q5",
        type: "single-choice",
        prompt: {
          es: "¿Qué respuesta es la más natural para “これは何の雑誌ですか。”?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[美咲|みさき]さんのです。") } },
          { id: "b", label: { jp: ruby("[料理|りょうり]の[雑誌|ざっし]です。") } },
          { id: "c", label: { jp: ruby("この[雑誌|ざっし]です。") } },
          { id: "d", label: { jp: ruby("[誰|だれ]のです。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "なんの雑誌 asks for type or content, so the natural answer is a category like 料理の雑誌です.",
        relatedSectionIds: ["lesson-009-structure", "lesson-009-examples"],
      },
      {
        id: "q6",
        type: "single-choice",
        prompt: {
          es: "Elige la forma más natural para decir “aquel póster”.",
        },
        choices: [
          { id: "a", label: { jp: ruby("これポスター") } },
          { id: "b", label: { jp: ruby("そのポスター") } },
          { id: "c", label: { jp: ruby("あのポスター") } },
          { id: "d", label: { jp: ruby("あれポスター") } },
        ],
        correctChoiceId: "c",
        explanation:
          "Cuando el referente está lejos de ambos y acompaña a un sustantivo, la forma natural es あの + sustantivo.",
        relatedSectionIds: ["lesson-009-concept", "lesson-009-vocabulary"],
      },
      {
        id: "q7",
        type: "single-choice",
        prompt: {
          es: "¿Cuál oración usa bien la omisión con のです?",
        },
        choices: [
          { id: "a", label: { jp: ruby("この[名札|なふだ]は[彩乃|あやの]さんのです。") } },
          { id: "b", label: { jp: ruby("この[名札|なふだ]は[彩乃|あやの]さんの[名札|なふだ]のです。") } },
          { id: "c", label: { jp: ruby("この[名札|なふだ]はのです[彩乃|あやの]さん。") } },
          { id: "d", label: { jp: ruby("この[名札|なふだ]は[彩乃|あやの]さんですの。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "La forma natural omite el sustantivo final porque 名札 ya está visible al inicio.",
        relatedSectionIds: ["lesson-009-concept", "lesson-009-structure"],
      },
      {
        id: "q8",
        type: "single-choice",
        prompt: {
            jp: ruby("[歴史|れきし]の[小説|しょうせつ]です。"),
            note: "Elige la pregunta más natural para esa respuesta.",
        },
        choices: [
            { id: "a", label: { jp: ruby("この[小説|しょうせつ]は[誰|だれ]のですか。") } },
            { id: "b", label: { jp: ruby("これは[何|なん]の[小説|しょうせつ]ですか。") } },
            { id: "c", label: { jp: ruby("その[小説|しょうせつ]は[誰|だれ]ですか。") } },
            { id: "d", label: { jp: ruby("これは[何|なん]ですか。") } },
        ],
        correctChoiceId: "b",
        explanation:
            "La respuesta habla del tipo de novela, no de su dueño. Por eso la pregunta natural usa なんの小説ですか.",
        relatedSectionIds: ["lesson-009-structure", "lesson-009-contrast"],
    　},
      {
        id: "q9",
        type: "single-choice",
        prompt: {
          es: "¿Cuál alternativa está incompleta?",
        },
        choices: [
          { id: "a", label: { jp: ruby("この[制服|せいふく]") } },
          { id: "b", label: { jp: ruby("その[研究室|けんきゅうしつ]") } },
          { id: "c", label: { jp: ruby("あの[市場|いちば]") } },
          { id: "d", label: { jp: ruby("この") } },
        ],
        correctChoiceId: "d",
        explanation:
          "En esta unidad, この・その・あの se trabajan acompañando a un sustantivo visible.",
        relatedSectionIds: ["lesson-009-concept", "lesson-009-warning"],
      },
      {
        id: "q10",
        type: "single-choice",
        prompt: {
          es: "Elige la oración más natural para decir: “Esa guía es una guía del museo”.",
        },
        choices: [
          { id: "a", label: { jp: ruby("その[案内書|あんないしょ]は[博物館|はくぶつかん]の[案内書|あんないしょ]です。") } },
          { id: "b", label: { jp: ruby("その[案内書|あんないしょ]は[博物館|はくぶつかん]です[案内書|あんないしょ]。") } },
          { id: "c", label: { jp: ruby("それ[案内書|あんないしょ]は[博物館|はくぶつかん]のです。") } },
          { id: "d", label: { jp: ruby("その[案内書|あんないしょ]は[誰|だれ]のです。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "La relación natural aquí es lugar/institución + 案内書 dentro de AのB.",
        relatedSectionIds: ["lesson-009-examples", "lesson-009-vocabulary"],
      },
      {
        id: "q11",
        type: "order-sentence",
        prompt: {
          es: "Ordena la oración correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("この") }, value: "この" },
          { id: "t2", label: { jp: ruby("[資料|しりょう]") }, value: "資料" },
          { id: "t3", label: { jp: ruby("は") }, value: "は" },
          { id: "t4", label: { jp: ruby("[科学|かがく]") }, value: "科学" },
          { id: "t5", label: { jp: ruby("の") }, value: "の" },
          { id: "t6", label: { jp: ruby("[資料|しりょう]") }, value: "資料" },
          { id: "t7", label: { jp: ruby("です。") }, value: "です。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4", "t5", "t6", "t7"],
        answerLabel: { jp: ruby("この[資料|しりょう]は[科学|かがく]の[資料|しりょう]です。") },
        explanation:
          "Primero entra el grupo con demostrativo. Después viene la identificación principal usando AのB.",
        relatedSectionIds: ["lesson-009-structure", "lesson-009-examples"],
      },
      {
        id: "q12",
        type: "order-sentence",
        prompt: {
          es: "Ordena la pregunta correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("その") }, value: "その" },
          { id: "t2", label: { jp: ruby("[上着|うわぎ]") }, value: "上着" },
          { id: "t3", label: { jp: ruby("は") }, value: "は" },
          { id: "t4", label: { jp: ruby("[誰|だれ]の") }, value: "誰の" },
          { id: "t5", label: { jp: ruby("ですか。") }, value: "ですか。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4", "t5"],
        answerLabel: { jp: ruby("その[上着|うわぎ]は[誰|だれ]のですか。") },
        explanation:
          "Aquí la pregunta completa se arma con objeto visible + は + だれの + ですか.",
        relatedSectionIds: ["lesson-009-structure", "lesson-009-summary"],
      },
      {
        id: "q13",
        type: "fill-blank",
        prompt: {
          es: "Completa con el demostrativo correcto para algo cerca de ti:",
          jp: ruby("___[辞典|じてん]は[私|わたし]のです。"),
        },
        acceptedAnswers: ["この"],
        placeholder: "Escribe el demostrativo",
        explanation:
          "Si el objeto está conmigo o en mi espacio personal, la forma natural es この + sustantivo.",
        relatedSectionIds: ["lesson-009-concept", "lesson-009-structure"],
      },
      {
        id: "q14",
        type: "fill-blank",
        prompt: {
          es: "Completa con la palabra interrogativa correcta:",
          jp: ruby("この[薬|くすり]は___のですか。"),
          note: "Queremos preguntar por el dueño del objeto.",
        },
        acceptedAnswers: ["誰", "だれ", "誰の", "だれの"],
        placeholder: "Escribe la pregunta",
        explanation:
          "Para preguntar de quién es algo usamos だれのですか. Aquí la pieza clave es だれの.",
        relatedSectionIds: ["lesson-009-structure", "lesson-009-summary"],
      },
      {
        id: "q15",
        type: "fill-blank",
        prompt: {
          es: "Completa con la palabra interrogativa correcta:",
          jp: ruby("これは___の[本|ほん]ですか。"),
          note: "Queremos preguntar por el tipo o tema del libro.",
        },
        acceptedAnswers: ["何", "なん", "何の", "なんの"],
        placeholder: "Escribe la pregunta",
        explanation:
          "Para preguntar por tipo o contenido usamos なんの + sustantivo.",
        relatedSectionIds: ["lesson-009-structure", "lesson-009-summary"],
      },
      {
        id: "q16",
        type: "fill-blank",
        prompt: {
          es: "Completa la respuesta natural:",
          jp: ruby("この[切符|きっぷ]は[誰|だれ]のですか。 ___さんのです。"),
          note: "Queremos decir: es de Haruto.",
        },
        acceptedAnswers: ["遥斗", "はると", "ハルト", "大翔", "悠人"],
        placeholder: "Escribe el nombre",
        explanation:
          "La respuesta natural mantiene solo el dueño y のです porque el sustantivo 切符 ya está visible en la pregunta.",
        relatedSectionIds: ["lesson-009-examples", "lesson-009-structure"],
      },
      {
        id: "q17",
        type: "fill-blank",
        prompt: {
          es: "Completa con el grupo que falta:",
          jp: ruby("これは___の[雑誌|ざっし]です。"),
          note: "Queremos decir: es una revista de béisbol.",
        },
        acceptedAnswers: ["野球", "やきゅう"],
        placeholder: "Escribe el tema",
        explanation:
          "Aquí なんの雑誌 podría responderse con un tema como 野球の雑誌です.",
        relatedSectionIds: ["lesson-009-vocabulary", "lesson-009-structure"],
      },
      {
        id: "q18",
        type: "single-choice",
        prompt: {
          es: "Lee esto y elige la interpretación más natural:",
          jp: ruby("この[書類|しょるい]は[会社|かいしゃ]のです。"),
        },
        choices: [
          { id: "a", label: { es: "Este documento trata sobre una empresa." } },
          { id: "b", label: { es: "Este documento es de la empresa." } },
          { id: "c", label: { es: "Este documento es una empresa." } },
          { id: "d", label: { es: "La empresa es este documento." } },
        ],
        correctChoiceId: "b",
        explanation:
          "En este patrón, 会社のです expresa pertenencia o relación institucional con el documento ya visible en la frase.",
        relatedSectionIds: ["lesson-009-concept", "lesson-009-examples"],
      },
      {
        id: "q19",
        type: "single-choice",
        prompt: {
            jp: ruby("[美術館|びじゅつかん]の[写真|しゃしん]です。"),
            note: "Elige la pregunta más natural para esa respuesta.",
        },
        choices: [
            { id: "a", label: { jp: ruby("これは[何|なん]の[写真|しゃしん]ですか。") } },
            { id: "b", label: { jp: ruby("この[写真|しゃしん]は[誰|だれ]のですか。") } },
            { id: "c", label: { jp: ruby("その[写真|しゃしん]は[誰|だれ]ですか。") } },
            { id: "d", label: { jp: ruby("これは[何|なん]ですか。") } },
        ],
        correctChoiceId: "a",
        explanation:
            "La respuesta 美術館の写真です habla del referente o tipo de la foto, no del dueño.",
        relatedSectionIds: ["lesson-009-structure", "lesson-009-contrast"],
      },
      {
        id: "q20",
        type: "single-choice",
        prompt: {
          es: "Elige la oración más natural dentro del alcance de esta unidad:",
        },
        choices: [
          { id: "a", label: { jp: ruby("この[雑誌|ざっし]は[料理|りょうり]のです。") } },
          { id: "b", label: { jp: ruby("このは[雑誌|ざっし][料理|りょうり]のです。") } },
          { id: "c", label: { jp: ruby("これ[雑誌|ざっし]は[料理|りょうり]です。") } },
          { id: "d", label: { jp: ruby("その[雑誌|ざっし]は[誰|だれ]の[料理|りょうり]です。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí el sustantivo principal 雑誌 ya está visible. Por eso puedes omitirlo al final y dejar solo 料理のです si el contexto ya lo sostiene.",
        relatedSectionIds: ["lesson-009-concept", "lesson-009-warning"],
      },
    ],
  },
};

export default lesson009;
