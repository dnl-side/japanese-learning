
// src/data/grammar/lessons/lesson-031.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson031: GrammarLesson = {
  id: "lesson-031",
  slug: "matome-tiempo-adverbios-y-adjetivos",
  order: 36,
  level: "N5",
  status: "ready",
  title: "まとめ — Tiempo, adverbios y adjetivos",
  jpTitle: "まとめ・じかん・ふくし・けいようし",
  shortTitle: "まとめ",
  description:
    "Unidad de integración para consolidar tiempo en uso, adverbios de tiempo y frecuencia, adjetivos い y な, deseo con 欲しい y 〜たい, y comparación con より・のほうが・ほど・一番 a través de textos, diálogos y una evaluación simple pero bien enfocada.",
  estimatedMinutes: 118,
  categoryTags: ["matome", "integracion", "tiempo", "adverbios", "adjetivos", "deseo", "comparacion"],
  grammarTags: [
    "きょう",
    "いつも",
    "い形容詞",
    "な形容詞",
    "欲しい",
    "たい",
    "より",
    "のほうが",
    "ほど",
    "一番",
  ],
  searchTerms: [
    "matome tiempo adverbios adjetivos japones",
    "review i adjectives na adjectives japanese",
    "hoshii tai comparison japanese",
    "time frequency adverbs japanese review",
    "summary lesson japanese n5 adjectives",
  ],
  relatedLessonSlugs: [
    "fechas-en-uso-periodos-de-tiempo-kara-made",
    "adverbios-de-tiempo-y-frecuencia",
    "adjetivos-i-conjugacion-y-uso-basico",
    "adjetivos-na-uso-basico-y-contrastes",
    "deseo-con-hoshii-y-forma-tai",
    "comparativo-y-superlativo-basico",
  ],
  relatedVocabularyTags: ["tiempo", "adverbios", "adjetivos", "deseo", "comparacion", "base"],
  objectives: [
    "Integrar en textos y diálogos el bloque de tiempo, adverbios y adjetivos trabajado hasta ahora.",
    "Reforzar con claridad la diferencia entre adjetivos い y adjetivos な.",
    "Distinguir entre adverbios de tiempo y adverbios de frecuencia dentro de la oración.",
    "Usar 欲しい para objetos y 〜たい para acciones sin mezclarlos.",
    "Aplicar comparativos y superlativos en escenas reales de elección y preferencia.",
    "Preparar una base firme antes de seguir avanzando con nuevas familias gramaticales.",
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
      id: "lesson-031-intro",
      kind: "intro",
      title: "Qué vas a repasar aquí",
      blocks: [
        {
          type: "paragraph",
          content:
            "Hasta este punto ya puedes ubicar acciones en el tiempo, hablar de rutina, usar adverbios, describir con dos familias distintas de adjetivos, expresar deseos y comparar opciones. Este まとめ no abre materia nueva. La idea es juntar todo en escenas reales para que el alumno deje de ver cada pieza como un bloque aislado.",
        },
        {
          type: "bullet-list",
          items: [
            {
              es: "Aquí volverás a ver diferencias como:",
              jp: ruby("きょう / いつも / [新|あたら]しい / [静|しず]か / [欲|ほ]しい / 〜たい。"),
            },
            {
              es: "También trabajarás comparaciones como:",
              jp: ruby("AはBよりAdjです。 / AのほうがAdjです。 / AはBほどAdjくないです。"),
            },
            {
              es: "Y al final unirás todo dentro de textos y diálogos más largos.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-031-concept",
      kind: "concept",
      title: "Mapa de contraste",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Adverbio de tiempo vs adverbio de frecuencia",
          content:
            "Aquí conviene seguir separando dos trabajos que suelen mezclarse. Un adverbio de tiempo ubica la acción en un momento o marco temporal. Un adverbio de frecuencia dice con qué regularidad ocurre la acción.",
          bullets: [
            {
              jp: ruby("きょう、[図書館|としょかん]で[勉強|べんきょう]します。"),
              es: "tiempo",
            },
            {
              jp: ruby("いつも[図書館|としょかん]で[勉強|べんきょう]します。"),
              es: "frecuencia",
            },
            {
              jp: ruby("ときどきゲームをします。 / あまりテレビを[見|み]ません。"),
              es: "frecuencia positiva y frecuencia negativa",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Adjetivo い vs adjetivo な",
          content:
            "Esta diferencia debe quedar muy firme. La familia い se reconoce por el morfema final い y entra directa delante del sustantivo. La familia な necesita な solo cuando modifica directamente a un sustantivo.",
          bullets: [
            {
              jp: ruby("[新|あたら]しい[本|ほん] / [本|ほん]は[新|あたら]しいです。"),
              es: "familia い",
            },
            {
              jp: ruby("[静|しず]かな[部屋|へや] / [部屋|へや]は[静|しず]かです。"),
              es: "familia な",
            },
            {
              jp: ruby("[便利|べんり]な[店|みせ] / [店|みせ]は[便利|べんり]です。"),
              es: "misma lógica con otro adjetivo な",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "欲しい vs 〜たい",
          content:
            "Aquí también conviene fijar una diferencia estructural muy clara. 欲しい expresa deseo de una cosa. La forma たい expresa deseo de realizar una acción.",
          bullets: [
            {
              jp: ruby("[新|あたら]しいノートパソコンが[欲|ほ]しいです。"),
              es: "quiero un objeto",
            },
            {
              jp: ruby("ノートパソコンを[買|か]いたいです。"),
              es: "quiero realizar una acción",
            },
            {
              jp: ruby("[海|うみ]へ[行|い]きたいです。 / [旅行|りょこう]の[本|ほん]が[欲|ほ]しいです。"),
              es: "dos deseos de naturaleza distinta",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Comparar no es solo usar より",
          content:
            "Aquí ya tienes varias maneras de comparar. より marca la base de comparación. のほうが señala el lado favorecido. ほど entra aquí en comparaciones negativas. Y 一番 cierra el superlativo dentro de un grupo.",
          bullets: [
            {
              jp: ruby("この[店|みせ]はあの[店|みせ]より[安|やす]いです。"),
              es: "comparación con より",
            },
            {
              jp: ruby("この[店|みせ]のほうが[静|しず]かです。"),
              es: "lado favorecido con のほうが",
            },
            {
              jp: ruby("この[町|まち]は[東京|とうきょう]ほどにぎやかではありません。 / [店|みせ]の[中|なか]で、このかばんが[一番|いちばん][便利|べんり]です。"),
              es: "comparación negativa y superlativo",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-031-structure",
      kind: "structure",
      title: "Patrones que deben quedar firmes",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-031-1",
              label: "Tiempo y frecuencia en la misma rutina",
              pattern: ruby("A、BはC Vます。"),
              meaning: "A ubica en el tiempo y C modifica la frecuencia del verbo.",
              translation:
                "Aquí conviene sentir que tiempo y frecuencia no compiten: pueden convivir en la misma oración porque hacen trabajos distintos.",
              structure: [
                {
                  slot: "A",
                  value: "adverbio de tiempo",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("きょう / あした / [毎朝|まいあさ] / [来週|らいしゅう]。"),
                  },
                },
                {
                  slot: "Bは",
                  value: "tema",
                  note: "La persona o referente del que hablas.",
                },
                {
                  slot: "C",
                  value: "adverbio de frecuencia",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("いつも / よく / ときどき / たまに。"),
                  },
                },
                {
                  slot: "Vます",
                  value: "acción",
                  note: "La acción queda ubicada y además graduada en frecuencia.",
                },
              ],
              notes: [
                "No conviene tratar tiempo y frecuencia como si fueran adverbios idénticos.",
              ],
            },
            {
              id: "pattern-031-2",
              label: "Adjetivo い + sustantivo / predicado",
              pattern: ruby("AいN / NはAいです。"),
              meaning: "Un sustantivo descrito por un adjetivo い o una oración con adjetivo い como predicado.",
              translation:
                "Aquí la familia い entra directa delante del sustantivo y además puede cerrar la oración con です.",
              structure: [
                {
                  slot: "Aい",
                  value: "adjetivo い",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[新|あたら]しい / [高|たか]い / [安|やす]い / [面白|おもしろ]い。"),
                  },
                },
                {
                  slot: "N",
                  value: "sustantivo",
                  note: {
                    es: "Puede ser algo como:",
                    jp: ruby("[本|ほん] / [店|みせ] / [山|やま] / [映画|えいが]。"),
                  },
                },
              ],
              notes: [
                "Aquí no aparece な.",
              ],
            },
            {
              id: "pattern-031-3",
              label: "Adjetivo な + sustantivo / predicado",
              pattern: ruby("AなN / NはAです。"),
              meaning: "Un sustantivo descrito por un adjetivo な o una oración con adjetivo な como predicado.",
              translation:
                "Aquí la pieza な solo aparece delante del sustantivo. Cuando el adjetivo cierra la oración, desaparece.",
              structure: [
                {
                  slot: "Aな",
                  value: "adjetivo な delante de sustantivo",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[静|しず]かな / [便利|べんり]な / [有名|ゆうめい]な / [元気|げんき]な。"),
                  },
                },
                {
                  slot: "Aです",
                  value: "predicado con adjetivo な",
                  note: "Aquí el adjetivo ya no lleva な.",
                },
              ],
              notes: [
                "Esta diferencia debe quedar muy clara frente a la familia い.",
              ],
            },
            {
              id: "pattern-031-4",
              label: "Deseo de cosa vs deseo de acción",
              pattern: ruby("Nが[欲|ほ]しいです。 / Vます-stem + たいです。"),
              meaning: "Quiero N. / Quiero hacer V.",
              translation:
                "Aquí el alumno debe decidir si el deseo cae sobre una cosa o sobre una acción.",
              structure: [
                {
                  slot: "Nが欲しい",
                  value: "deseo de objeto",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[新|あたら]しいカメラが[欲|ほ]しいです。"),
                  },
                },
                {
                  slot: "Vたい",
                  value: "deseo de acción",
                  note: {
                    es: "Por ejemplo:",
                    jp: ruby("[写真|しゃしん]を[撮|と]りたいです。 / [京都|きょうと]へ[行|い]きたいです。"),
                  },
                },
              ],
              notes: [
                "Aquí 欲しい y たい no deben mezclarse.",
              ],
            },
            {
              id: "pattern-031-5",
              label: "Comparar y elegir",
              pattern: ruby("AはBよりAdjです。 / AのほうがAdjです。 / AはBほどAdjくないです。 / Nの中でAが一番Adjです。"),
              meaning: "Comparación básica y superlativo.",
              translation:
                "Aquí se reúnen los cuatro patrones más útiles del bloque comparativo.",
              structure: [
                {
                  slot: "Bより",
                  value: "base de comparación",
                  note: "Señala el lado contra el que mides A.",
                },
                {
                  slot: "Aのほうが",
                  value: "lado favorecido",
                  note: "Marca cuál opción sale mejor entre dos.",
                },
                {
                  slot: "Bほど",
                  value: "comparación negativa",
                  note: "Aquí se trabaja dentro de patrón negativo.",
                },
                {
                  slot: "Nの中で Aが一番",
                  value: "superlativo",
                  note: "Marca qué elemento sale más alto dentro de un grupo.",
                },
              ],
              notes: [
                "Aquí conviene reconocer que no todo se expresa con un solo patrón comparativo.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lesson-031-vocabulary",
      kind: "vocabulary",
      title: "Vocabulario de apoyo para los textos",
      description:
        "Aquí el centro sigue siendo la gramática, pero conviene tener a mano algunas palabras de apoyo para que los textos y diálogos fluyan con naturalidad.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 4,
          items: [
            { id: "v031-laptop", jp: ruby("ノートパソコン"), reading: "のーとぱそこん", meaning: "laptop", tags: ["apoyo"] },
            { id: "v031-camera", jp: ruby("カメラ"), reading: "かめら", meaning: "cámara", tags: ["apoyo"] },
            { id: "v031-cafe", jp: ruby("[喫茶店|きっさてん]"), reading: "きっさてん", meaning: "cafetería", tags: ["apoyo"] },
            { id: "v031-park", jp: ruby("[公園|こうえん]"), reading: "こうえん", meaning: "parque", tags: ["apoyo"] },

            { id: "v031-sea", jp: ruby("[海|うみ]"), reading: "うみ", meaning: "mar", tags: ["apoyo"] },
            { id: "v031-mountain", jp: ruby("[山|やま]"), reading: "やま", meaning: "montaña", tags: ["apoyo"] },
            { id: "v031-photo", jp: ruby("[写真|しゃしん]"), reading: "しゃしん", meaning: "fotografía", tags: ["apoyo"] },
            { id: "v031-weekend", jp: ruby("[週末|しゅうまつ]"), reading: "しゅうまつ", meaning: "fin de semana", tags: ["apoyo"] },

            { id: "v031-science", jp: ruby("[科学|かがく]"), reading: "かがく", meaning: "ciencia", tags: ["apoyo"] },
            { id: "v031-history", jp: ruby("[歴史|れきし]"), reading: "れきし", meaning: "historia", tags: ["apoyo"] },
            { id: "v031-exhibit", jp: ruby("[展示会|てんじかい]"), reading: "てんじかい", meaning: "exposición", tags: ["apoyo"] },
            { id: "v031-trip", jp: ruby("[旅行|りょこう]"), reading: "りょこう", meaning: "viaje", tags: ["apoyo"] },
          ],
        },
      ],
    },
    {
      id: "lesson-031-examples",
      kind: "examples",
      title: "Textos y diálogos integrados",
      blocks: [
        {
          type: "example-group",
          items: [
            {
              id: "text-031-1",
              jp: ruby("[佐伯|さえき]さんは[毎朝|まいあさ][6時半|ろくじはん]に[起|お]きます。きょうも[7時半|しちじはん]に[会社|かいしゃ]へ[行|い]きます。[会社|かいしゃ]は[駅|えき]より[家|いえ]に[近|ちか]いです。[昼|ひる]ご[飯|はん]はいつも[静|しず]かな[喫茶店|きっさてん]で[食|た]べます。その[店|みせ]は[安|やす]いです。[昨日|きのう]はあまりおいしくなかったです。[夜|よる]はときどき[公園|こうえん]で[歩|ある]きます。[新|あたら]しいカメラが[欲|ほ]しいですが、[来月|らいげつ]は[旅行|りょこう]に[行|い]きたいです。"),
              es: "Texto 1: rutina de una persona que trabaja, con tiempo, frecuencia, adjetivos y deseo.",
            },
            {
              id: "text-031-2",
              jp: ruby("[高橋|たかはし]さんは[高校|こうこう][三年生|さんねんせい]です。[毎日|まいにち][7時|しちじ][頃|ごろ][起|お]きて、[8時|はちじ]に[学校|がっこう]へ[行|い]きます。[数学|すうがく]より[歴史|れきし]のほうが[好|す]きです。[歴史|れきし]ほど[科学|かがく]は[難|むずか]しくありません。[放課後|ほうかご]はよく[図書館|としょかん]で[勉強|べんきょう]します。[静|しず]かな[部屋|へや]が[好|す]きです。にぎやかな[喫茶店|きっさてん]ではあまり[勉強|べんきょう]しません。[新|あたら]しい[辞書|じしょ]が[欲|ほ]しいです。"),
              es: "Texto 2: estudiante de 高校 con gustos, comparación y entorno de estudio.",
            },
            {
              id: "text-031-3",
              jp: ruby("[森|もり]さんは[大学生|だいがくせい]です。[週末|しゅうまつ]はたまに[展示会|てんじかい]へ[行|い]きます。[海|うみ]より[山|やま]のほうが[好|す]きで、[科学|かがく]が[得意|とくい]です。[写真|しゃしん]も[好|す]きです。[友達|ともだち]の[中|なか]で、[森|もり]さんが[一番|いちばん][旅行|りょこう]が[好|す]きです。きょうは[新|あたら]しいノートパソコンが[欲|ほ]しいです。でも、[軽|かる]いカメラが[一番|いちばん][欲|ほ]しいです。[来週|らいしゅう]は[京都|きょうと]へ[行|い]きたいです。[古|ふる]い[町|まち]の[写真|しゃしん]をたくさん[撮|と]りたいです。"),
              es: "Texto 3: universitario con comparaciones, habilidad, deseo y planes.",
            },
          ],
        },
        {
          type: "example-group",
          items: [
            {
              id: "dialog-031-1",
              jp: ruby("A: きょうはどこで[勉強|べんきょう]したいですか。 B: [図書館|としょかん]で[勉強|べんきょう]したいです。A: あの[喫茶店|きっさてん]はどうですか。 B: あの[喫茶店|きっさてん]は[図書館|としょかん]よりにぎやかです。だから、[図書館|としょかん]のほうがいいです。"),
              es: "Diálogo 1: elegir un lugar para estudiar.",
            },
            {
              id: "dialog-031-2",
              jp: ruby("A: いま[何|なに]が[欲|ほ]しいですか。 B: [新|あたら]しいノートパソコンが[欲|ほ]しいです。A: そのノートパソコンで[何|なに]をしたいですか。 B: [映画|えいが]を[見|み]たいです。レポートも[書|か]きたいです。"),
              es: "Diálogo 2: deseo de objeto y deseo de acción.",
            },
            {
              id: "dialog-031-3",
              jp: ruby("A: ラーメンとカレーと、どちらのほうが[好|す]きですか。 B: カレーのほうが[好|す]きです。A: この[町|まち]の[中|なか]で、どの[店|みせ]が[一番|いちばん][有名|ゆうめい]ですか。 B: [駅前|えきまえ]の[店|みせ]が[一番|いちばん][有名|ゆうめい]です。"),
              es: "Diálogo 3: preferencia y superlativo dentro de un grupo.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-031-contrast",
      kind: "contrast",
      title: "Contrastes que deben quedar muy firmes",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-031-1",
              label: "Tiempo vs frecuencia",
              correct: {
                jp: ruby("きょう[勉強|べんきょう]します。 / いつも[勉強|べんきょう]します。"),
                es: "La primera ubica la acción en el tiempo; la segunda indica con qué frecuencia ocurre.",
              },
              explanation:
                "Aquí el trabajo del adverbio es distinto aunque los dos modifiquen la oración.",
            },
            {
              id: "contrast-031-2",
              label: "Adjetivo い vs adjetivo な delante del sustantivo",
              correct: {
                jp: ruby("[新|あたら]しい[本|ほん] / [静|しず]かな[部屋|へや]"),
                es: "La familia い entra directa; la familia な necesita な al modificar un sustantivo.",
              },
              explanation:
                "Esta diferencia debe quedar muy clara antes de seguir avanzando con nuevas estructuras.",
            },
            {
              id: "contrast-031-3",
              label: "欲しい vs 〜たい",
              correct: {
                jp: ruby("[新|あたら]しいカメラが[欲|ほ]しいです。 / [京都|きょうと]へ[行|い]きたいです。"),
                es: "La primera expresa deseo de una cosa; la segunda, deseo de acción.",
              },
              explanation:
                "Aquí el alumno debe decidir si el deseo cae sobre un objeto o sobre una acción.",
            },
            {
              id: "contrast-031-4",
              label: "より / のほうが / ほど / 一番",
              correct: {
                jp: ruby("AはBよりAdjです。 / AのほうがAdjです。 / AはBほどAdjくないです。 / Nの[中|なか]でAが[一番|いちばん]Adjです。"),
                es: "Son cuatro maneras distintas de comparar o jerarquizar.",
              },
              explanation:
                "Aquí no conviene intentar resolver toda comparación con una sola fórmula.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-031-practice",
      kind: "practice",
      title: "Práctica guiada antes del quiz",
      blocks: [
        {
          type: "bullet-list",
          items: [
            {
              es: "Escribe primero tres oraciones mezclando un adverbio de tiempo con uno de frecuencia.",
              jp: ruby("きょう / [毎朝|まいあさ] / いつも / ときどき"),
            },
            {
              es: "Después rehace tres descripciones usando una vez un adjetivo い y otra vez un adjetivo な.",
              jp: ruby("[新|あたら]しい[本|ほん] / [静|しず]かな[部屋|へや] / [便利|べんり]な[店|みせ] / [安|やす]いカメラ"),
            },
            {
              es: "Haz dos frases con 欲しい y dos con 〜たい.",
              jp: ruby("[辞書|じしょ]が[欲|ほ]しいです。 / [京都|きょうと]へ[行|い]きたいです。"),
            },
            {
              es: "Escribe dos comparaciones con より o のほうが y una con 一番.",
            },
            {
              es: "Y termina redactando un mini perfil de rutina, gustos y deseos parecido a los textos de esta unidad.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-031-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            {
              es: "Puedo distinguir entre adverbios de tiempo y adverbios de frecuencia.",
            },
            {
              es: "Puedo distinguir con seguridad entre adjetivos い y adjetivos な.",
            },
            {
              es: "Puedo usar",
              jp: ruby("[欲|ほ]しい"),
              note: "para objetos y",
            },
            {
              es: "",
              jp: ruby("〜たい"),
              note: "para acciones.",
            },
            {
              es: "Puedo comparar con",
              jp: ruby("より / のほうが / ほど / [一番|いちばん]"),
              note: "sin mezclar sus funciones.",
            },
            {
              es: "Ya puedo leer y producir textos más largos con tiempo, descripción, deseo y comparación.",
            },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-031-quiz",
    title: "Quiz — まとめ",
    description:
      "Evaluación simple para integrar tiempo, adverbios, adjetivos, deseo y comparación. Aquí el foco principal es reconocer qué patrón corresponde a cada situación y entender textos y diálogos del nivel.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      {
        id: "q1",
        type: "single-choice",
        prompt: {
          es: "¿Qué oración usa un adverbio de tiempo?",
        },
        choices: [
          { id: "a", label: { jp: ruby("きょう、[私|わたし]は[図書館|としょかん]で[勉強|べんきょう]します。") } },
          { id: "b", label: { jp: ruby("[私|わたし]はいつも[朝|あさ]ご[飯|はん]を[食|た]べます。") } },
          { id: "c", label: { jp: ruby("[田中|たなか]さんはときどき[映画|えいが]を[見|み]ます。") } },
          { id: "d", label: { jp: ruby("[私|わたし]はあまりコーヒーを[飲|の]みません。") } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí きょう ubica la acción en el tiempo. Las otras opciones trabajan frecuencia.",
        relatedSectionIds: ["lesson-031-concept", "lesson-031-contrast"],
      },
      {
        id: "q2",
        type: "single-choice",
        prompt: {
          es: "¿Qué oración usa un adverbio de frecuencia?",
        },
        choices: [
          { id: "a", label: { jp: ruby("あした、[学校|がっこう]へ[行|い]きます。") } },
          { id: "b", label: { jp: ruby("[私|わたし]はいつも[朝|あさ]ご[飯|はん]を[食|た]べます。") } },
          { id: "c", label: { jp: ruby("[来月|らいげつ]は[旅行|りょこう]に[行|い]きたいです。") } },
          { id: "d", label: { jp: ruby("きのう、[家|いえ]で[勉強|べんきょう]しました。") } },
        ],
        correctChoiceId: "b",
        explanation:
          "Aquí いつも modifica la frecuencia de la acción. Las otras opciones ubican la acción en el tiempo.",
        relatedSectionIds: ["lesson-031-concept", "lesson-031-contrast"],
      },
      {
        id: "q3",
        type: "fill-blank",
        prompt: {
          es: "Completa el grupo natural con adjetivo い:",
          jp: ruby("___[本|ほん]"),
          note: "La idea es: libro nuevo.",
        },
        acceptedAnswers: ["新しい", "あたらしい"],
        placeholder: "Escribe el adjetivo",
        explanation:
          "La familia い entra directa delante del sustantivo: 新しい本.",
        relatedSectionIds: ["lesson-031-concept", "lesson-031-structure"],
      },
      {
        id: "q4",
        type: "fill-blank",
        prompt: {
          es: "Completa el grupo natural con adjetivo な:",
          jp: ruby("___[部屋|へや]"),
          note: "La idea es: habitación silenciosa.",
        },
        acceptedAnswers: ["静かな", "しずかな"],
        placeholder: "Escribe el adjetivo",
        explanation:
          "La familia な necesita な delante del sustantivo: 静かな部屋.",
        relatedSectionIds: ["lesson-031-concept", "lesson-031-structure"],
      },
      {
        id: "q5",
        type: "fill-blank",
        prompt: {
          es: "Completa con la forma correcta:",
          jp: ruby("[店|みせ]は[便利|べんり]___。"),
          note: "La idea es: no es conveniente.",
        },
        acceptedAnswers: ["ではありません", "じゃありません"],
        placeholder: "Escribe la forma",
        explanation:
          "Aquí el adjetivo な funciona como predicado y la negación recae en el bloque final.",
        relatedSectionIds: ["lesson-031-concept", "lesson-031-structure"],
      },
      {
        id: "q6",
        type: "fill-blank",
        prompt: {
          es: "Completa con la forma correcta:",
          jp: ruby("[映画|えいが]は[面白|おもしろ]___です。"),
          note: "La idea es: fue interesante.",
        },
        acceptedAnswers: ["かった"],
        placeholder: "Escribe la forma",
        explanation:
          "Aquí el adjetivo い cambia a かった: 面白かったです.",
        relatedSectionIds: ["lesson-031-concept", "lesson-031-structure"],
      },
      {
        id: "q7",
        type: "single-choice",
        prompt: {
          jp: ruby("[新|あたら]しいカメラが[欲|ほ]しいです。"),
          es: "¿Qué idea expresa mejor la oración?",
        },
        choices: [
          { id: "a", label: { es: "Quiero comprar una cámara." } },
          { id: "b", label: { es: "Quiero una cámara nueva." } },
          { id: "c", label: { es: "La cámara nueva es mejor." } },
          { id: "d", label: { es: "Uso una cámara nueva todos los días." } },
        ],
        correctChoiceId: "b",
        explanation:
          "Aquí 欲しい expresa deseo de un objeto, no deseo de una acción.",
        relatedSectionIds: ["lesson-031-concept", "lesson-031-contrast"],
      },
      {
        id: "q8",
        type: "single-choice",
        prompt: {
          jp: ruby("[京都|きょうと]へ[行|い]きたいです。"),
          es: "¿Qué idea expresa mejor la oración?",
        },
        choices: [
          { id: "a", label: { es: "Quiero Kioto." } },
          { id: "b", label: { es: "Voy a Kioto siempre." } },
          { id: "c", label: { es: "Quiero ir a Kioto." } },
          { id: "d", label: { es: "Kioto es más bonito." } },
        ],
        correctChoiceId: "c",
        explanation:
          "Aquí 〜たい expresa deseo de realizar una acción: ir a Kioto.",
        relatedSectionIds: ["lesson-031-concept", "lesson-031-contrast"],
      },
      {
        id: "q9",
        type: "fill-blank",
        prompt: {
          es: "Completa la comparación:",
          jp: ruby("この[店|みせ]はあの[店|みせ]___[安|やす]いです。"),
        },
        acceptedAnswers: ["より"],
        placeholder: "Escribe la partícula / expresión",
        explanation:
          "Aquí より marca la base de comparación.",
        relatedSectionIds: ["lesson-031-concept", "lesson-031-structure"],
      },
      {
        id: "q10",
        type: "fill-blank",
        prompt: {
          es: "Completa la comparación:",
          jp: ruby("この[店|みせ]の___[静|しず]かです。"),
          note: "La idea es: este local es el lado favorecido.",
        },
        acceptedAnswers: ["ほうが"],
        placeholder: "Escribe la expresión",
        explanation:
          "Aquí のほうが marca el lado que queda favorecido en la comparación.",
        relatedSectionIds: ["lesson-031-concept", "lesson-031-structure"],
      },
      {
        id: "q11",
        type: "single-choice",
        prompt: {
          jp: ruby("この[町|まち]は[東京|とうきょう]ほどにぎやかではありません。"),
          es: "¿Qué idea expresa mejor la oración?",
        },
        choices: [
          { id: "a", label: { es: "Esta ciudad es más animada que Tokio." } },
          { id: "b", label: { es: "Esta ciudad no es tan animada como Tokio." } },
          { id: "c", label: { es: "Tokio no es famoso." } },
          { id: "d", label: { es: "Esta ciudad es la más animada." } },
        ],
        correctChoiceId: "b",
        explanation:
          "Aquí ほど aparece en comparación negativa: no tan... como.",
        relatedSectionIds: ["lesson-031-concept", "lesson-031-structure"],
      },
      {
        id: "q12",
        type: "single-choice",
        prompt: {
          jp: ruby("[店|みせ]の[中|なか]で、このかばんが[一番|いちばん][便利|べんり]です。"),
          es: "¿Qué idea expresa mejor la oración?",
        },
        choices: [
          { id: "a", label: { es: "Este bolso es más útil que otro bolso concreto." } },
          { id: "b", label: { es: "Este bolso es el más útil dentro de la tienda." } },
          { id: "c", label: { es: "Quiero este bolso." } },
          { id: "d", label: { es: "Este bolso no es útil." } },
        ],
        correctChoiceId: "b",
        explanation:
          "Aquí 一番 cierra un superlativo dentro de un grupo.",
        relatedSectionIds: ["lesson-031-concept", "lesson-031-structure"],
      },
      {
        id: "q13",
        type: "single-choice",
        prompt: {
          jp: ruby("[高橋|たかはし]さんは[高校|こうこう][三年生|さんねんせい]です。[数学|すうがく]より[歴史|れきし]のほうが[好|す]きです。"),
          es: "¿Qué le gusta más a Takahashi?",
        },
        choices: [
          { id: "a", label: { jp: ruby("[数学|すうがく]") } },
          { id: "b", label: { jp: ruby("[歴史|れきし]") } },
          { id: "c", label: { jp: ruby("[科学|かがく]") } },
          { id: "d", label: { jp: ruby("[英語|えいご]") } },
        ],
        correctChoiceId: "b",
        explanation:
          "El texto dice que 歴史のほうが好きです, así que historia es la opción preferida.",
        relatedSectionIds: ["lesson-031-examples"],
      },
      {
        id: "q14",
        type: "single-choice",
        prompt: {
          jp: ruby("[森|もり]さんは[海|うみ]より[山|やま]のほうが[好|す]きで、[写真|しゃしん]を[撮|と]るのが[得意|とくい]です。"),
          es: "¿Qué opción describe mejor a Mori?",
        },
        choices: [
          { id: "a", label: { es: "Prefiere el mar y no sabe sacar fotos." } },
          { id: "b", label: { es: "Prefiere la montaña y es bueno sacando fotos." } },
          { id: "c", label: { es: "No le gusta viajar." } },
          { id: "d", label: { es: "Quiere una montaña nueva." } },
        ],
        correctChoiceId: "b",
        explanation:
          "El texto dice que Mori prefiere la montaña y que ciencia es su punto fuerte.",
        relatedSectionIds: ["lesson-031-examples"],
      },
      {
        id: "q15",
        type: "single-choice",
        prompt: {
          jp: ruby("[佐伯|さえき]さんは[新|あたら]しいカメラが[欲|ほ]しいですが、[来月|らいげつ]は[旅行|りょこう]に[行|い]きたいです。"),
          es: "¿Qué combinación es correcta?",
        },
        choices: [
          { id: "a", label: { es: "Quiere una cámara nueva y quiere viajar el próximo mes." } },
          { id: "b", label: { es: "No quiere cámara ni viaje." } },
          { id: "c", label: { es: "La cámara es más barata que el viaje." } },
          { id: "d", label: { es: "Siempre viaja con cámara." } },
        ],
        correctChoiceId: "a",
        explanation:
          "Aquí aparecen juntos un deseo de objeto con 欲しい y un deseo de acción con たい.",
        relatedSectionIds: ["lesson-031-examples", "lesson-031-contrast"],
      },
      {
        id: "q16",
        type: "order-sentence",
        prompt: {
          es: "Ordena la oración correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("きょう、") }, value: "きょう、" },
          { id: "t2", label: { jp: ruby("[私|わたし]は") }, value: "私は" },
          { id: "t3", label: { jp: ruby("[図書館|としょかん]で") }, value: "図書館で" },
          { id: "t4", label: { jp: ruby("[勉強|べんきょう]したいです。") }, value: "勉強したいです。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("きょう、[私|わたし]は[図書館|としょかん]で[勉強|べんきょう]したいです。") },
        explanation:
          "Aquí el adverbio de tiempo abre la escena y el deseo de acción se expresa con 〜たいです。",
        relatedSectionIds: ["lesson-031-concept", "lesson-031-examples"],
      },
      {
        id: "q17",
        type: "order-sentence",
        prompt: {
          es: "Ordena la oración correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[静|しず]かな") }, value: "静かな" },
          { id: "t2", label: { jp: ruby("[部屋|へや]") }, value: "部屋" },
          { id: "t3", label: { jp: ruby("が") }, value: "が" },
          { id: "t4", label: { jp: ruby("[欲|ほ]しいです。") }, value: "欲しいです。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("[静|しず]かな[部屋|へや]が[欲|ほ]しいです。") },
        explanation:
          "Aquí el adjetivo な modifica directamente a 部屋 y luego todo el grupo entra como cosa deseada.",
        relatedSectionIds: ["lesson-031-concept", "lesson-031-contrast"],
      },
      {
        id: "q18",
        type: "order-sentence",
        prompt: {
          es: "Ordena la oración correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("この[店|みせ]は") }, value: "この店は" },
          { id: "t2", label: { jp: ruby("あの[店|みせ]より") }, value: "あの店より" },
          { id: "t3", label: { jp: ruby("[安|やす]い") }, value: "安い" },
          { id: "t4", label: { jp: ruby("です。") }, value: "です。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("この[店|みせ]はあの[店|みせ]より[安|やす]いです。") },
        explanation:
          "Aquí より marca la base de comparación y 安い es un adjetivo い.",
        relatedSectionIds: ["lesson-031-structure", "lesson-031-examples"],
      },
      {
        id: "q19",
        type: "order-sentence",
        prompt: {
          es: "Ordena la pregunta correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("ラーメンと") }, value: "ラーメンと" },
          { id: "t2", label: { jp: ruby("カレーと、") }, value: "カレーと、" },
          { id: "t3", label: { jp: ruby("どちらのほうが") }, value: "どちらのほうが" },
          { id: "t4", label: { jp: ruby("[好|す]きですか。") }, value: "好きですか。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("ラーメンとカレーと、どちらのほうが[好|す]きですか。") },
        explanation:
          "Aquí la pregunta compara dos opciones y pide cuál lado sale favorecido.",
        relatedSectionIds: ["lesson-031-structure", "lesson-031-examples"],
      },
      {
        id: "q20",
        type: "order-sentence",
        prompt: {
          es: "Ordena la oración correcta:",
        },
        tokens: [
          { id: "t1", label: { jp: ruby("[店|みせ]の[中|なか]で、") }, value: "店の中で、" },
          { id: "t2", label: { jp: ruby("このかばんが") }, value: "このかばんが" },
          { id: "t3", label: { jp: ruby("[一番|いちばん]") }, value: "一番" },
          { id: "t4", label: { jp: ruby("[便利|べんり]です。") }, value: "便利です。" },
        ],
        correctOrder: ["t1", "t2", "t3", "t4"],
        answerLabel: { jp: ruby("[店|みせ]の[中|なか]で、このかばんが[一番|いちばん][便利|べんり]です。") },
        explanation:
          "Aquí la estructura de superlativo queda cerrada dentro de un grupo.",
        relatedSectionIds: ["lesson-031-structure", "lesson-031-examples"],
      },
    ],
  },
};

export default lesson031;
