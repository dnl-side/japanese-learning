
// src/data/grammar/lessons/lesson-029.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson029: GrammarLesson = {
  id: "lesson-029",
  slug: "deseo-con-hoshii-y-forma-tai",
  order: 34,
  level: "N5",
  status: "ready",
  title: "Deseo y voluntad básica",
  jpTitle: "ほしい・〜たい",
  shortTitle: "欲しい y 〜たい",
  description:
    "Cómo expresar deseo de cosas con 欲しい y deseo de acciones con la forma たい, entender la diferencia entre querer un objeto y querer realizar una acción, y trabajar la conjugación básica de 欲しい y de 〜たい dentro de oraciones naturales del nivel.",
  estimatedMinutes: 102,
  categoryTags: ["fundamentos", "adjetivos", "deseo", "verbos", "tai", "lectura", "integracion"],
  grammarTags: [
    "欲しい",
    "ほしい",
    "たい",
    "〜たい",
    "Nが欲しい",
    "Vます-stem + たい",
    "たくない",
    "たかった",
    "たくなかった",
  ],
  searchTerms: [
    "hoshii tai japanese",
    "want something japanese",
    "want to do japanese tai form",
    "N ga hoshii",
    "masu stem tai",
    "tai form negative past japanese",
    "deseo japonés n5",
  ],
  relatedLessonSlugs: [
    "adjetivos-i-conjugacion-y-uso-basico",
    "adjetivos-na-uso-basico-y-contrastes",
    "verbos-introduccion-grupo-2-ichidan",
    "verbos-grupo-1-godan",
    "verbos-grupo-3-irregulares",
  ],
  relatedVocabularyTags: ["deseo", "objetos", "verbos", "rutina", "comida", "base"],
  objectives: [
    "Distinguir entre querer una cosa y querer realizar una acción.",
    "Usar Nが欲しい para expresar deseo de un objeto.",
    "Formar 〜たい a partir de la base en ます para expresar deseo de acción.",
    "Entender que 欲しい y 〜たい se comportan como familia adjetival en esta ruta.",
    "Trabajar la cuadrícula básica de 欲しい y 〜たい en negativo, pasado y pasado negativo.",
    "Evitar usos demasiado ambiciosos con terceras personas antes de fijar bien la base del deseo personal.",
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
      id: "lesson-029-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "Después del bloque de adjetivos, ahora toca una unidad muy útil para hablar de lo que quieres. Aquí vas a separar dos ideas que en español muchas veces se resuelven con la misma palabra “querer”, pero que en japonés se expresan con dos patrones distintos: querer una cosa y querer hacer una acción.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Primero fijaremos el patrón para querer algo:",
              jp: ruby("[新|あたら]しい[辞書|じしょ]が[欲|ほ]しいです。 / パソコンが[欲|ほ]しくないです。"),
            },
            {
              es: "Después verás cómo se expresa querer una acción con la forma:",
              jp: ruby("[食|た]べたい / [行|い]きたい / [会|あ]いたい / [勉強|べんきょう]したい。"),
            },
            {
              es: "Y también trabajarás la conjugación básica de esta familia:",
              jp: ruby("[行|い]きたい → [行|い]きたくない → [行|い]きたかった → [行|い]きたくなかった。"),
            },
          ],
        },
      ],
    },
    {
      id: "lesson-029-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Querer una cosa y querer una acción no se dicen igual",
          content:
            "Este es el corazón de la unidad. Si deseas un objeto, una cosa o algo que quieres tener, aquí trabajaremos 欲しい. Si lo que deseas es realizar una acción, entra la forma たい.",
          bullets: [
            { jp: ruby("[新|あたら]しい[自転車|じてんしゃ]が[欲|ほ]しいです。"), es: "quiero una bicicleta nueva" },
            { jp: ruby("[日本|にほん]へ[行|い]きたいです。"), es: "quiero ir a Japón" },
            { jp: ruby("[寿司|すし]が[欲|ほ]しいです。"), es: "quiero sushi como cosa / producto" },
            { jp: ruby("[寿司|すし]を[食|た]べたいです。"), es: "quiero comer sushi como acción" },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "欲しい funciona como familia adjetival en esta ruta",
          content:
            "Aquí trabajaremos 欲しい como un bloque del tipo de los adjetivos い. Por eso su negación y su pasado siguen el mismo tipo de lógica morfológica de esa familia.",
          bullets: [
            { jp: ruby("[欲|ほ]しい"), es: "forma base" },
            { jp: ruby("[欲|ほ]しくない"), es: "negativo" },
            { jp: ruby("[欲|ほ]しかった"), es: "pasado" },
            { jp: ruby("[欲|ほ]しくなかった"), es: "pasado negativo" },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "La forma たい se forma desde la base en ます",
          content:
            "En esta ruta, la manera más clara de enseñar たい es partir desde la base en ます que ya conoces. Tomas el verbo sin ます y añades たい. Así, 食べます da 食べたい, 読みます da 読みたい y します da したい.",
          bullets: [
            { jp: ruby("[食|た]べます → [食|た]べたい"), es: "grupo 2" },
            { jp: ruby("[読|よ]みます → [読|よ]みたい"), es: "grupo 1" },
            { jp: ruby("します → したい / [来|き]ます → [来|き]たい"), es: "grupo 3" },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "たい también se comporta como familia adjetival",
          content:
            "Una vez formada, la estructura en たい sigue el mismo tipo de cambios básicos que los adjetivos い. Por eso podrás decir 行きたくない, 会いたかった o 勉強したくなかった.",
          bullets: [
            { jp: ruby("[行|い]きたい"), es: "forma base" },
            { jp: ruby("[行|い]きたくない"), es: "negativo" },
            { jp: ruby("[行|い]きたかった"), es: "pasado" },
            { jp: ruby("[行|い]きたくなかった"), es: "pasado negativo" },
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Aquí conviene trabajar sobre todo primera persona y preguntas directas",
          content:
            "En esta etapa, lo más limpio es usar 欲しい y たい sobre todo para hablar de tu propio deseo o para preguntar directamente a la otra persona. Más adelante aparecerán maneras de hablar del deseo de terceros con más cuidado, pero aquí no conviene abrir ese bloque todavía.",
          bullets: [
            { jp: ruby("[私|わたし]は[新|あたら]しい[辞書|じしょ]が[欲|ほ]しいです。"), es: "primera persona" },
            { jp: ruby("[何|なに]が[欲|ほ]しいですか。 / [何|なに]を[食|た]べたいですか。"), es: "preguntas directas a la otra persona" },
          ],
        },
      ],
    },
    {
      id: "lesson-029-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-029-1",
              label: "Querer una cosa",
              pattern: ruby("Nが[欲|ほ]しいです。"),
              meaning: "Quiero N.",
              translation:
                "Aquí lo deseado entra como cosa u objeto. En esta ruta básica, ese bloque se trabajará con が.",
              structure: [
                { slot: "N が", value: "cosa deseada", note: { es: "Por ejemplo:", jp: ruby("[辞書|じしょ] / [時計|とけい] / [切符|きっぷ] / [新|あたら]しいスマホ。") } },
                { slot: { jp: ruby("[欲|ほ]しいです") }, value: "deseo", note: "Expresa deseo de poseer u obtener algo." },
              ],
              notes: ["Aquí no estás queriendo una acción, sino una cosa."],
            },
            {
              id: "pattern-029-2",
              label: "Conjugación básica de 欲しい",
              pattern: ruby("[欲|ほ]しい / [欲|ほ]しくない / [欲|ほ]しかった / [欲|ほ]しくなかった"),
              meaning: "Quiero / no quiero / quise / no quise",
              translation:
                "Aquí 欲しい sigue la lógica básica de la familia い.",
              structure: [
                { slot: { jp: ruby("[欲|ほ]しい") }, value: "base", note: "No pasado afirmativo." },
                { slot: { jp: ruby("[欲|ほ]しくない") }, value: "negativo", note: "No pasado negativo." },
                { slot: { jp: ruby("[欲|ほ]しかった") }, value: "pasado", note: "Pasado afirmativo." },
                { slot: { jp: ruby("[欲|ほ]しくなかった") }, value: "pasado negativo", note: "Pasado negativo." },
              ],
              notes: ["Aquí el patrón es paralelo al de los adjetivos い."],
            },
            {
              id: "pattern-029-3",
              label: "Querer una acción",
              pattern: ruby("Vます-stem + たいです。"),
              meaning: "Quiero hacer V.",
              translation:
                "Aquí tomas la base en ます del verbo y le añades たい.",
              structure: [
                { slot: "Vます-stem", value: "base verbal", note: { es: "Por ejemplo:", jp: ruby("[食|た]べ / [飲|の]み / [行|い]き / [会|あ]い / [勉強|べんきょう]し / [来|き]。") } },
                { slot: { jp: ruby("たい") }, value: "deseo de acción", note: "Convierte la base verbal en expresión de deseo." },
                { slot: { jp: ruby("です") }, value: "cierre cortés", note: "Se añade para mantener la frase en registro cortés." },
              ],
              notes: ["Aquí lo que deseas es hacer la acción, no tener una cosa."],
            },
            {
              id: "pattern-029-4",
              label: "Conjugación básica de たい",
              pattern: ruby("Vたい / Vたくない / Vたかった / Vたくなかった"),
              meaning: "Quiero hacer V / no quiero hacer V / quise hacer V / no quise hacer V.",
              translation:
                "Una vez formada, esta estructura sigue la lógica de los adjetivos い.",
              structure: [
                { slot: "Vたい", value: "base", note: { es: "Por ejemplo:", jp: ruby("[行|い]きたい / [読|よ]みたい / [勉強|べんきょう]したい。") } },
                { slot: "Vたくない", value: "negativo", note: { es: "Por ejemplo:", jp: ruby("[行|い]きたくない / [読|よ]みたくない / [勉強|べんきょう]したくない。") } },
                { slot: "Vたかった / Vたくなかった", value: "pasado / pasado negativo", note: "La lógica sigue el mismo patrón." },
              ],
              notes: ["Aquí たい no se trata como verbo nuevo, sino como bloque de deseo que se apoya en la base verbal."],
            },
          ],
        },
        {
          type: "table",
          title: "De ます a たい",
          description:
            "Aquí conviene ver la transformación repetirse en varios grupos verbales para que no quede como algo suelto.",
          columns: [
            { key: "masu", label: "Forma ます", width: "24%" },
            { key: "stem", label: "Base", width: "18%" },
            { key: "tai", label: "〜たい", width: "24%" },
            { key: "meaning", label: "Idea", width: "34%" },
          ],
          rows: [
            { id: "tai-1", cells: { masu: { jp: ruby("[食|た]べます") }, stem: { jp: ruby("[食|た]べ") }, tai: { jp: ruby("[食|た]べたい") }, meaning: "querer comer" } },
            { id: "tai-2", cells: { masu: { jp: ruby("[読|よ]みます") }, stem: { jp: ruby("[読|よ]み") }, tai: { jp: ruby("[読|よ]みたい") }, meaning: "querer leer" } },
            { id: "tai-3", cells: { masu: { jp: ruby("[行|い]きます") }, stem: { jp: ruby("[行|い]き") }, tai: { jp: ruby("[行|い]きたい") }, meaning: "querer ir" } },
            { id: "tai-4", cells: { masu: { jp: ruby("[勉強|べんきょう]します") }, stem: { jp: ruby("[勉強|べんきょう]し") }, tai: { jp: ruby("[勉強|べんきょう]したい") }, meaning: "querer estudiar" } },
            { id: "tai-5", cells: { masu: { jp: ruby("[来|き]ます") }, stem: { jp: ruby("[来|き]") }, tai: { jp: ruby("[来|き]たい") }, meaning: "querer venir" } },
          ],
          zebra: true,
        },
      ],
    },
    {
      id: "lesson-029-vocabulary",
      kind: "vocabulary",
      title: "Vocabulario útil para esta unidad",
      description:
        "Aquí reunimos objetos deseables y verbos muy frecuentes para que 欲しい y 〜たい puedan practicarse con naturalidad.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 4,
          items: [
            { id: "v029-dictionary", jp: ruby("[辞書|じしょ]"), reading: "じしょ", meaning: "diccionario", tags: ["objeto", "core"] },
            { id: "v029-watch", jp: ruby("[腕時計|うでどけい]"), reading: "うでどけい", meaning: "reloj de pulsera", tags: ["objeto"] },
            { id: "v029-ticket", jp: ruby("[切符|きっぷ]"), reading: "きっぷ", meaning: "ticket / billete", tags: ["objeto"] },
            { id: "v029-bicycle", jp: ruby("[自転車|じてんしゃ]"), reading: "じてんしゃ", meaning: "bicicleta", tags: ["objeto", "core"] },
            { id: "v029-camera", jp: ruby("カメラ"), reading: "かめら", meaning: "cámara", tags: ["objeto"] },
            { id: "v029-smartphone", jp: ruby("スマホ"), reading: "すまほ", meaning: "smartphone", tags: ["objeto", "core"] },
            { id: "v029-train-pass", jp: ruby("[定期券|ていきけん]"), reading: "ていきけん", meaning: "pase de transporte", tags: ["objeto"] },
            { id: "v029-gift", jp: ruby("[土産|みやげ]"), reading: "みやげ", meaning: "souvenir / regalo", tags: ["objeto"] },
            { id: "v029-eat", jp: ruby("[食|た]べる"), reading: "たべる", meaning: "comer", tags: ["verbo", "core"] },
            { id: "v029-drink", jp: ruby("[飲|の]む"), reading: "のむ", meaning: "beber", tags: ["verbo", "core"] },
            { id: "v029-go", jp: ruby("[行|い]く"), reading: "いく", meaning: "ir", tags: ["verbo", "core"] },
            { id: "v029-see", jp: ruby("[見|み]る"), reading: "みる", meaning: "ver", tags: ["verbo"] },
            { id: "v029-meet", jp: ruby("[会|あ]う"), reading: "あう", meaning: "encontrarse con / ver a alguien", tags: ["verbo"] },
            { id: "v029-buy", jp: ruby("[買|か]う"), reading: "かう", meaning: "comprar", tags: ["verbo", "core"] },
            { id: "v029-read", jp: ruby("[読|よ]む"), reading: "よむ", meaning: "leer", tags: ["verbo"] },
            { id: "v029-study", jp: ruby("[勉強|べんきょう]する"), reading: "べんきょうする", meaning: "estudiar", tags: ["verbo", "core"] },
          ],
        },
      ],
    },
    {
      id: "lesson-029-examples",
      kind: "examples",
      title: "Ejemplos guiados",
      blocks: [
        {
          type: "example-group",
          items: [
            { id: "ex-029-1", jp: ruby("[新|あたら]しい[辞書|じしょ]が[欲|ほ]しいです。"), es: "Quiero un diccionario nuevo." },
            { id: "ex-029-2", jp: ruby("パソコンは[今|いま]、[欲|ほ]しくないです。"), es: "Ahora no quiero un computador." },
            { id: "ex-029-3", jp: ruby("[去年|きょねん]は[自転車|じてんしゃ]が[欲|ほ]しかったです。"), es: "El año pasado quería una bicicleta." },
            { id: "ex-029-4", jp: ruby("[昨日|きのう]は[映画|えいが]を[見|み]たかったです。"), es: "Ayer quería ver una película." },
            { id: "ex-029-5", jp: ruby("[今日|きょう]はラーメンを[食|た]べたいです。"), es: "Hoy quiero comer ramen." },
            { id: "ex-029-6", jp: ruby("[明日|あした]は[図書館|としょかん]で[勉強|べんきょう]したいです。"), es: "Mañana quiero estudiar en la biblioteca." },
            { id: "ex-029-7", jp: ruby("[今週|こんしゅう]は[新|あたら]しいスマホを[買|か]いたくないです。"), es: "Esta semana no quiero comprar un smartphone nuevo." },
            { id: "ex-029-8", jp: ruby("[友達|ともだち]に[会|あ]いたいです。"), es: "Quiero ver a un amigo." },
            { id: "ex-029-9", jp: ruby("[何|なに]が[欲|ほ]しいですか。"), es: "¿Qué quieres?" },
            { id: "ex-029-10", jp: ruby("[何|なに]を[食|た]べたいですか。"), es: "¿Qué quieres comer?" },
          ],
        },
      ],
    },
    {
      id: "lesson-029-contrast",
      kind: "contrast",
      title: "Contrastes que conviene fijar",
      blocks: [
        {
          type: "contrast-list",
          items: [
            { id: "contrast-029-1", label: "Querer una cosa vs querer una acción", correct: { jp: ruby("[寿司|すし]が[欲|ほ]しいです。 / [寿司|すし]を[食|た]べたいです。"), es: "La primera desea la cosa; la segunda desea realizar la acción." }, explanation: "Este es el contraste más importante de la unidad." },
            { id: "contrast-029-2", label: "欲しい vs たい", correct: { jp: ruby("[切符|きっぷ]が[欲|ほ]しいです。 / [東京|とうきょう]へ[行|い]きたいです。"), es: "Una forma se usa con objetos; la otra, con acciones." }, explanation: "No conviene mezclar estos dos trabajos solo porque ambos suenan a 'querer'." },
            { id: "contrast-029-3", label: "Base vs negativo en たい", correct: { jp: ruby("[買|か]いたいです。 / [買|か]いたくないです。"), es: "El segundo bloque niega el deseo de la acción." }, explanation: "Aquí la ruta es たい → たくない." },
            { id: "contrast-029-4", label: "Pasado vs pasado negativo en たい", correct: { jp: ruby("[行|い]きたかったです。 / [行|い]きたくなかったです。"), es: "La primera expresa deseo pasado; la segunda niega ese deseo en pasado." }, explanation: "Aquí la ruta es たい → たかった / たくなかった." },
            { id: "contrast-029-5", label: "Deseo personal vs deseo de terceros", correct: { jp: ruby("[私|わたし]は[新|あたら]しい[辞書|じしょ]が[欲|ほ]しいです。"), es: "Aquí nos quedamos en deseo personal directo." }, explanation: "En esta ruta aún no abrimos maneras más complejas de hablar del deseo de otras personas." },
          ],
        },
      ],
    },
    {
      id: "lesson-029-warning",
      kind: "warning",
      title: "Qué conviene vigilar",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "No resuelvas todo con 欲しい",
          content:
            "El error más típico aquí es usar 欲しい incluso cuando lo deseado es una acción. El segundo error es olvidar que たい se forma desde la base en ます. El tercero es intentar hablar demasiado pronto del deseo de terceros sin haber fijado antes la base personal.",
          bullets: [
            { jp: ruby("[辞書|じしょ]が[欲|ほ]しいです。"), es: "correcto: deseo de un objeto" },
            { jp: ruby("[辞書|じしょ]を[買|か]いたいです。"), es: "correcto: deseo de una acción" },
            { jp: ruby("[食|た]べます → [食|た]べたい / [読|よ]みます → [読|よ]みたい"), es: "forma たい desde la base en ます" },
          ],
        },
      ],
    },
    {
      id: "lesson-029-practice",
      kind: "practice",
      title: "Práctica guiada antes del quiz",
      blocks: [
        {
          type: "bullet-list",
          items: [
            { es: "Escribe primero cinco cosas que quieres y cinco que no quieres.", jp: ruby("[辞書|じしょ]が[欲|ほ]しいです。 / スマホは[欲|ほ]しくないです。") },
            { es: "Después toma varios verbos en ます y conviértelos a", jp: ruby("たい"), note: "usando ejemplos de los tres grupos verbales." },
            { es: "Haz una segunda ronda con", jp: ruby("たくない / たかった / たくなかった"), note: "para fijar el patrón completo." },
            { es: "Practica preguntas como", jp: ruby("[何|なに]が[欲|ほ]しいですか。 / [何|なに]を[食|た]べたいですか。") },
            { es: "Y termina escribiendo un mini texto de deseos para hoy, mañana y la próxima semana." },
          ],
        },
      ],
    },
    {
      id: "lesson-029-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            { es: "Puedo distinguir entre querer una cosa y querer una acción." },
            { es: "Puedo usar", jp: ruby("Nが[欲|ほ]しいです"), note: "para objetos." },
            { es: "Puedo formar", jp: ruby("Vます-stem + たいです"), note: "para acciones." },
            { es: "Puedo conjugar ambos bloques en negativo, pasado y pasado negativo." },
            { es: "Estoy listo para comparar cosas y personas con adjetivos en la siguiente unidad." },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-029-quiz",
    title: "Quiz — 欲しい y 〜たい",
    description:
      "Repaso de deseo de cosas y deseo de acciones, con énfasis en no mezclar 欲しい con 〜たい y en fijar la formación desde la base en ます.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      { id: "q1", type: "single-choice", prompt: { es: "¿Qué patrón se usa para decir que quieres una cosa?" }, choices: [ { id: "a", label: { jp: ruby("Nが[欲|ほ]しいです。") } }, { id: "b", label: { jp: ruby("Nを[欲|ほ]したいです。") } }, { id: "c", label: { jp: ruby("Nがたいです。") } }, { id: "d", label: { jp: ruby("Nに[欲|ほ]しいです。") } } ], correctChoiceId: "a", explanation: "En esta ruta básica, el deseo de una cosa se trabaja con Nが欲しいです.", relatedSectionIds: ["lesson-029-structure", "lesson-029-summary"] },
      { id: "q2", type: "single-choice", prompt: { es: "¿Qué patrón se usa para decir que quieres realizar una acción?" }, choices: [ { id: "a", label: { jp: ruby("Nが[欲|ほ]しいです。") } }, { id: "b", label: { jp: ruby("Vます-stem + たいです。") } }, { id: "c", label: { jp: ruby("Vます + [欲|ほ]しいです。") } }, { id: "d", label: { jp: ruby("V dictionary + ほしいです。") } } ], correctChoiceId: "b", explanation: "Aquí la forma correcta es base en ます + たい.", relatedSectionIds: ["lesson-029-structure", "lesson-029-summary"] },
      { id: "q3", type: "fill-blank", prompt: { es: "Completa la oración:", jp: ruby("[新|あたら]しい[辞書|じしょ]が___です。"), note: "La idea es: quiero." }, acceptedAnswers: ["欲しい", "ほしい"], placeholder: "Escribe la forma", explanation: "Aquí la cosa deseada entra con が y el bloque final es 欲しいです.", relatedSectionIds: ["lesson-029-structure", "lesson-029-examples"] },
      { id: "q4", type: "fill-blank", prompt: { es: "Completa la forma negativa:", jp: ruby("[欲|ほ]しい → ___") }, acceptedAnswers: ["欲しくない", "ほしくない"], placeholder: "Escribe la forma", explanation: "欲しい sigue la lógica de la familia い y pasa a 欲しくない.", relatedSectionIds: ["lesson-029-structure", "lesson-029-contrast"] },
      { id: "q5", type: "fill-blank", prompt: { es: "Completa la forma pasada:", jp: ruby("[欲|ほ]しい → ___") }, acceptedAnswers: ["欲しかった", "ほしかった"], placeholder: "Escribe la forma", explanation: "La ruta de pasado aquí es い → かった.", relatedSectionIds: ["lesson-029-structure", "lesson-029-contrast"] },
      { id: "q6", type: "fill-blank", prompt: { es: "Completa la forma pasada negativa:", jp: ruby("[欲|ほ]しい → ___") }, acceptedAnswers: ["欲しくなかった", "ほしくなかった"], placeholder: "Escribe la forma", explanation: "La ruta del pasado negativo aquí es い → くなかった.", relatedSectionIds: ["lesson-029-structure", "lesson-029-contrast"] },
      { id: "q7", type: "fill-blank", prompt: { es: "Convierte a 〜たい:", jp: ruby("[食|た]べます → ___") }, acceptedAnswers: ["食べたい", "たべたい"], placeholder: "Escribe la forma", explanation: "La base en ます aquí es 食べ, así que el resultado es 食べたい.", relatedSectionIds: ["lesson-029-structure", "lesson-029-vocabulary"] },
      { id: "q8", type: "fill-blank", prompt: { es: "Convierte a 〜たい:", jp: ruby("[読|よ]みます → ___") }, acceptedAnswers: ["読みたい", "よみたい"], placeholder: "Escribe la forma", explanation: "Aquí la base en ます es 読み, así que el resultado es 読みたい.", relatedSectionIds: ["lesson-029-structure", "lesson-029-vocabulary"] },
      { id: "q9", type: "fill-blank", prompt: { es: "Convierte a 〜たい:", jp: ruby("[勉強|べんきょう]します → ___") }, acceptedAnswers: ["勉強したい", "べんきょうしたい"], placeholder: "Escribe la forma", explanation: "Con します, la base que entra aquí es し.", relatedSectionIds: ["lesson-029-structure", "lesson-029-vocabulary"] },
      { id: "q10", type: "fill-blank", prompt: { es: "Completa la forma negativa:", jp: ruby("[行|い]きたい → ___") }, acceptedAnswers: ["行きたくない", "いきたくない"], placeholder: "Escribe la forma", explanation: "La ruta base aquí es たい → たくない.", relatedSectionIds: ["lesson-029-structure", "lesson-029-contrast"] },
      { id: "q11", type: "fill-blank", prompt: { es: "Completa la forma pasada:", jp: ruby("[会|あ]いたい → ___") }, acceptedAnswers: ["会いたかった", "あいたかった"], placeholder: "Escribe la forma", explanation: "La ruta base aquí es たい → たかった.", relatedSectionIds: ["lesson-029-structure", "lesson-029-contrast"] },
      { id: "q12", type: "fill-blank", prompt: { es: "Completa la forma pasada negativa:", jp: ruby("[買|か]いたい → ___") }, acceptedAnswers: ["買いたくなかった", "かいたくなかった"], placeholder: "Escribe la forma", explanation: "La ruta base aquí es たい → たくなかった.", relatedSectionIds: ["lesson-029-structure", "lesson-029-contrast"] },
      { id: "q13", type: "single-choice", prompt: { es: "¿Cuál oración significa “quiero comer sushi”?" }, choices: [ { id: "a", label: { jp: ruby("[寿司|すし]が[欲|ほ]しいです。") } }, { id: "b", label: { jp: ruby("[寿司|すし]を[食|た]べたいです。") } }, { id: "c", label: { jp: ruby("[寿司|すし]が[食|た]べたいです。") } }, { id: "d", label: { jp: ruby("[寿司|すし]を[欲|ほ]しいです。") } } ], correctChoiceId: "b", explanation: "Aquí lo que deseas es la acción de comer sushi, no el sushi como cosa.", relatedSectionIds: ["lesson-029-contrast", "lesson-029-examples"] },
      { id: "q14", type: "single-choice", prompt: { es: "¿Cuál oración significa “quiero una cámara”?" }, choices: [ { id: "a", label: { jp: ruby("カメラが[欲|ほ]しいです。") } }, { id: "b", label: { jp: ruby("カメラを[買|か]うです。") } }, { id: "c", label: { jp: ruby("カメラが[買|か]いたいです。") } }, { id: "d", label: { jp: ruby("カメラを[欲|ほ]しいです。") } } ], correctChoiceId: "a", explanation: "Aquí el deseo cae sobre el objeto mismo, así que usamos 欲しい.", relatedSectionIds: ["lesson-029-contrast", "lesson-029-examples"] },
      { id: "q15", type: "fill-blank", prompt: { es: "Completa la pregunta natural:", jp: ruby("___が[欲|ほ]しいですか。"), note: "La idea es: ¿qué quieres?" }, acceptedAnswers: ["何", "なに"], placeholder: "Escribe la palabra", explanation: "Aquí la pregunta correcta es 何が欲しいですか。", relatedSectionIds: ["lesson-029-examples", "lesson-029-summary"] },
      { id: "q16", type: "fill-blank", prompt: { es: "Completa la pregunta natural:", jp: ruby("___を[食|た]べたいですか。"), note: "La idea es: ¿qué quieres comer?" }, acceptedAnswers: ["何", "なに"], placeholder: "Escribe la palabra", explanation: "Aquí la acción deseada es comer, así que la pregunta correcta es 何を食べたいですか。", relatedSectionIds: ["lesson-029-examples", "lesson-029-summary"] },
      { id: "q17", type: "order-sentence", prompt: { es: "Ordena la oración correcta:" }, tokens: [ { id: "t1", label: { jp: ruby("[新|あたら]しい") }, value: "新しい" }, { id: "t2", label: { jp: ruby("スマホが") }, value: "スマホが" }, { id: "t3", label: { jp: ruby("[欲|ほ]しい") }, value: "欲しい" }, { id: "t4", label: { jp: ruby("です。") }, value: "です。" } ], correctOrder: ["t1", "t2", "t3", "t4"], answerLabel: { jp: ruby("[新|あたら]しいスマホが[欲|ほ]しいです。") }, explanation: "Aquí lo deseado es un objeto, por eso la oración se arma con が + 欲しいです.", relatedSectionIds: ["lesson-029-structure", "lesson-029-examples"] },
      { id: "q18", type: "order-sentence", prompt: { es: "Ordena la oración correcta:" }, tokens: [ { id: "t1", label: { jp: ruby("[今日|きょう]は") }, value: "今日は" }, { id: "t2", label: { jp: ruby("ラーメンを") }, value: "ラーメンを" }, { id: "t3", label: { jp: ruby("[食|た]べたい") }, value: "食べたい" }, { id: "t4", label: { jp: ruby("です。") }, value: "です。" } ], correctOrder: ["t1", "t2", "t3", "t4"], answerLabel: { jp: ruby("[今日|きょう]はラーメンを[食|た]べたいです。") }, explanation: "Aquí lo deseado es la acción de comer ramen.", relatedSectionIds: ["lesson-029-structure", "lesson-029-examples"] },
      { id: "q19", type: "order-sentence", prompt: { es: "Ordena la oración correcta:" }, tokens: [ { id: "t1", label: { jp: ruby("[明日|あした]は") }, value: "明日は" }, { id: "t2", label: { jp: ruby("[図書館|としょかん]で") }, value: "図書館で" }, { id: "t3", label: { jp: ruby("[勉強|べんきょう]したい") }, value: "勉強したい" }, { id: "t4", label: { jp: ruby("です。") }, value: "です。" } ], correctOrder: ["t1", "t2", "t3", "t4"], answerLabel: { jp: ruby("[明日|あした]は[図書館|としょかん]で[勉強|べんきょう]したいです。") }, explanation: "Aquí la forma たい se apoya en 勉強し-.", relatedSectionIds: ["lesson-029-structure", "lesson-029-examples"] },
      { id: "q20", type: "single-choice", prompt: { es: "¿Cuál idea resume mejor esta unidad?" }, choices: [ { id: "a", label: { es: "欲しい y 〜たい hacen exactamente el mismo trabajo." } }, { id: "b", label: { es: "欲しい expresa deseo de una cosa y 〜たい expresa deseo de una acción." } }, { id: "c", label: { es: "〜たい se forma desde 欲しい." } }, { id: "d", label: { es: "Solo se pueden usar con terceras personas." } } ], correctChoiceId: "b", explanation: "Ese es el corazón real de la unidad.", relatedSectionIds: ["lesson-029-concept", "lesson-029-summary"] },
    ],
  },
};

export default lesson029;
