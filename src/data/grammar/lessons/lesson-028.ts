
// src/data/grammar/lessons/lesson-028.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson028: GrammarLesson = {
  id: "lesson-028",
  slug: "adjetivos-na-uso-basico-y-contrastes",
  order: 33,
  level: "N5",
  status: "ready",
  title: "Adjetivos な",
  jpTitle: "なけいようし",
  shortTitle: "Adjetivos な",
  description:
    "Qué son los adjetivos な, cómo se usan para modificar sustantivos y como predicado con です, por qué な solo aparece delante del sustantivo, cómo se expresan el negativo y el pasado en esta familia, y cómo entender bien pares importantes como 上手 / 下手, 得意 / 苦手 y 好き / 嫌い.",
  estimatedMinutes: 110,
  categoryTags: ["fundamentos", "adjetivos", "na-adjetivos", "conjugacion", "gustos", "habilidad", "lectura"],
  grammarTags: [
    "な形容詞",
    "な",
    "静か",
    "便利",
    "好き",
    "嫌い",
    "上手",
    "下手",
    "得意",
    "苦手",
    "AなN",
    "Aです",
    "Aではありません",
    "Aでした",
    "Aではありませんでした",
  ],
  searchTerms: [
    "adjetivos na japones",
    "nakeiyoushi",
    "shizuka benri suki kirai",
    "jyouzu heta tokui nigate",
    "na adjective before noun japanese",
    "por que na solo aparece antes del sustantivo",
    "na adjectives japanese n5",
  ],
  relatedLessonSlugs: [
    "adjetivos-i-conjugacion-y-uso-basico",
    "deseo-con-hoshii-y-forma-tai",
    "comparativo-y-superlativo-basico",
  ],
  relatedVocabularyTags: ["adjetivos", "descripcion", "gustos", "habilidad", "lugares", "base"],
  objectives: [
    "Entender la naturaleza básica de los adjetivos な.",
    "Reconocer que な aparece solo cuando el adjetivo modifica directamente a un sustantivo.",
    "Usar adjetivos な como predicado con です, ではありません, でした y ではありませんでした.",
    "Distinguir la familia な de la familia い, incluso en palabras que pueden confundir visualmente.",
    "Trabajar con cuidado pares muy usados como 上手 / 下手, 得意 / 苦手 y 好き / 嫌い.",
    "Construir oraciones más ricas de descripción, gusto y habilidad.",
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
      id: "lesson-028-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "Después de la familia い, ahora toca la otra gran familia básica de adjetivos: los adjetivos な. Aquí el trabajo ya no se reparte igual. La pieza な solo aparece cuando el adjetivo modifica directamente a un sustantivo. En cambio, cuando el adjetivo cierra una oración, la forma principal que verás será con です y con sus cambios temporales y negativos.",
        },
        {
          type: "bullet-list",
          items: [
            { es: "Verás contrastes como:", jp: ruby("[静|しず]かな[部屋|へや] / [部屋|へや]は[静|しず]かです。") },
            { es: "También fijarás la cuadrícula básica de esta familia:", jp: ruby("[便利|べんり]です / [便利|べんり]ではありません / [便利|べんり]でした / [便利|べんり]ではありませんでした。") },
            { es: "Y trabajaremos con calma pares importantes como:", jp: ruby("[上手|じょうず] / [下手|へた] / [得意|とくい] / [苦手|にがて] / [好|す]き / [嫌|きら]い。") },
          ],
        },
      ],
    },
    {
      id: "lesson-028-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "La familia な no se reconoce solo por la vista",
          content:
            "A diferencia de la familia い, aquí no puedes depender tanto de una terminación fija visible. Por eso esta unidad conviene entenderla por comportamiento. La pista más útil es ver cuándo aparece な y cuándo desaparece.",
          bullets: [
            { jp: ruby("[静|しず]かな[町|まち]"), es: "な aparece delante del sustantivo" },
            { jp: ruby("[町|まち]は[静|しず]かです。"), es: "aquí な desaparece porque el adjetivo ya no modifica directamente a un sustantivo" },
            { jp: ruby("[好|す]きです / [嫌|きら]いです"), es: "estas palabras no se trabajan como adjetivos い en esta ruta" },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "な solo aparece cuando el adjetivo modifica a un sustantivo",
          content:
            "Este es el corazón estructural de la unidad. Si el adjetivo queda inmediatamente delante de un sustantivo, entra な. Si el adjetivo cierra la oración, な ya no aparece. Por eso no decimos 静かなです ni 好きなです.",
          bullets: [
            { jp: ruby("[有名|ゆうめい]な[先生|せんせい]"), es: "correcto: modifica al sustantivo" },
            { jp: ruby("[先生|せんせい]は[有名|ゆうめい]です。"), es: "correcto: el adjetivo ya no lleva な" },
            { jp: ruby("[上手|じょうず]な[学生|がくせい] / [学生|がくせい]は[上手|じょうず]です。"), es: "misma lógica con otro adjetivo" },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "En la familia な, el tiempo y la negación se apoyan en です",
          content:
            "Aquí la descripción principal no cambia como en la familia い. Lo que cambia es el bloque de cortesía que la acompaña. Por eso la cuadrícula básica de esta unidad será です / ではありません / でした / ではありませんでした.",
          bullets: [
            { jp: ruby("[部屋|へや]は[静|しず]かです。"), es: "afirmativo no pasado" },
            { jp: ruby("[部屋|へや]は[静|しず]かではありません。"), es: "negativo" },
            { jp: ruby("[町|まち]は[有名|ゆうめい]でした。"), es: "pasado" },
            { jp: ruby("[店|みせ]は[便利|べんり]ではありませんでした。"), es: "pasado negativo" },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "好き / 嫌い y 上手 / 下手 / 得意 / 苦手 merecen calma",
          content:
            "Estas palabras son muy frecuentes y muy útiles, pero también suelen confundir porque hablan de gustos, habilidad, comodidad o punto fuerte. Aquí conviene fijarlas con varios ejemplos sencillos.",
          bullets: [
            { jp: ruby("[私|わたし]は[甘|あま]いものが[好|す]きです。"), es: "gusto" },
            { jp: ruby("[兄|あに]は[魚|さかな]が[嫌|きら]いです。"), es: "disgusto" },
            { jp: ruby("[彩花|あやか]さんは[料理|りょうり]が[上手|じょうず]です。"), es: "habilidad observada" },
            { jp: ruby("[私|わたし]は[数学|すうがく]が[苦手|にがて]です。 / [弟|おとうと]は[英語|えいご]が[得意|とくい]です。"), es: "fortaleza o debilidad sentida como campo personal" },
          ],
        },
      ],
    },
    {
      id: "lesson-028-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-028-1",
              label: "Adjetivo な + sustantivo",
              pattern: ruby("Aな + N"),
              meaning: "Un sustantivo descrito por un adjetivo な.",
              translation:
                "Aquí la pieza な aparece solo porque el adjetivo modifica directamente al sustantivo que viene después.",
              structure: [
                { slot: "Aな", value: "adjetivo な", note: { es: "Por ejemplo:", jp: ruby("[静|しず]かな / [便利|べんり]な / [有名|ゆうめい]な / [元気|げんき]な。") } },
                { slot: "N", value: "sustantivo", note: { es: "Puede ser algo como:", jp: ruby("[町|まち] / [部屋|へや] / [先生|せんせい] / [人|ひと]。") } },
              ],
              notes: ["Si no viene un sustantivo justo después, aquí no aparece な."],
            },
            {
              id: "pattern-028-2",
              label: "Predicado afirmativo",
              pattern: ruby("N は Aです。"),
              meaning: "N es A.",
              translation:
                "Cuando el adjetivo な ya no modifica directamente a un sustantivo, aquí aparece sin な y cierra la oración con です.",
              structure: [
                { slot: "N は", value: "tema", note: "El referente del que estás hablando." },
                { slot: "A", value: "adjetivo な en base", note: "Aquí va sin な." },
                { slot: { jp: ruby("です") }, value: "cierre cortés", note: "Marca la cortesía y sostiene la cuadrícula temporal básica." },
              ],
              notes: ["No digas 静かなです o 好きなです."],
            },
            {
              id: "pattern-028-3",
              label: "Negativo y pasado",
              pattern: ruby("N は Aではありません。 / N は Aでした。 / N は Aではありませんでした。"),
              meaning: "N no es A / N fue A / N no fue A.",
              translation:
                "Aquí la familia な organiza el tiempo y la negación con el bloque de です, no cambiando una terminación como en la familia い.",
              structure: [
                { slot: "Aではありません", value: "negativo", note: "Forma productiva base de esta unidad." },
                { slot: "Aでした", value: "pasado", note: "Empuja la descripción al pasado." },
                { slot: "Aではありませんでした", value: "pasado negativo", note: "Niega la descripción en pasado." },
              ],
              notes: ["Más adelante puedes ver variantes como じゃありません, pero aquí fijamos la ruta base con では."],
            },
            {
              id: "pattern-028-4",
              label: "Gustos y habilidad",
              pattern: ruby("A は Bが[好|す]きです。 / A は Bが[嫌|きら]いです。 / A は Bが[上手|じょうず]です。 / A は Bが[下手|へた]です。 / A は Bが[得意|とくい]です。 / A は Bが[苦手|にがて]です。"),
              meaning: "A gusta de B / no gusta de B / es bueno en B / es malo en B / se le da bien B / se le da mal B.",
              translation:
                "Aquí B suele entrar con が porque marca el campo, el objeto del gusto o el ámbito de habilidad del que se habla.",
              structure: [
                { slot: "A は", value: "persona o tema", note: "La persona de la que hablas." },
                { slot: "B が", value: "objeto de gusto o campo", note: { es: "Puede ser algo como:", jp: ruby("[料理|りょうり] / [数学|すうがく] / [歌|うた] / [魚|さかな] / [野球|やきゅう]。") } },
                { slot: "好き / 嫌い / 上手 / 下手 / 得意 / 苦手", value: "adjetivo na especial", note: "Aquí esta familia aparece muchísimo en japonés básico." },
              ],
              notes: ["No conviene tratarlos como verbos en esta etapa."],
            },
          ],
        },
        {
          type: "table",
          title: "Cuadrícula básica de varios adjetivos な",
          description:
            "Aquí conviene ver que la base descriptiva se mantiene y el trabajo temporal o negativo lo hace el bloque de です.",
          columns: [
            { key: "base", label: "Base", width: "24%" },
            { key: "negative", label: "Negativo", width: "28%" },
            { key: "past", label: "Pasado", width: "20%" },
            { key: "pastNegative", label: "Pasado negativo", width: "28%" },
          ],
          rows: [
            {
              id: "na028-1",
              cells: {
                base: { jp: ruby("[静|しず]かです") },
                negative: { jp: ruby("[静|しず]かではありません") },
                past: { jp: ruby("[静|しず]かでした") },
                pastNegative: { jp: ruby("[静|しず]かではありませんでした") },
              },
            },
            {
              id: "na028-2",
              cells: {
                base: { jp: ruby("[便利|べんり]です") },
                negative: { jp: ruby("[便利|べんり]ではありません") },
                past: { jp: ruby("[便利|べんり]でした") },
                pastNegative: { jp: ruby("[便利|べんり]ではありませんでした") },
              },
            },
            {
              id: "na028-3",
              cells: {
                base: { jp: ruby("[有名|ゆうめい]です") },
                negative: { jp: ruby("[有名|ゆうめい]ではありません") },
                past: { jp: ruby("[有名|ゆうめい]でした") },
                pastNegative: { jp: ruby("[有名|ゆうめい]ではありませんでした") },
              },
            },
            {
              id: "na028-4",
              cells: {
                base: { jp: ruby("[元気|げんき]です") },
                negative: { jp: ruby("[元気|げんき]ではありません") },
                past: { jp: ruby("[元気|げんき]でした") },
                pastNegative: { jp: ruby("[元気|げんき]ではありませんでした") },
              },
            },
          ],
          zebra: true,
        },
      ],
    },
    {
      id: "lesson-028-vocabulary",
      kind: "vocabulary",
      title: "Vocabulario nuevo de adjetivos な",
      description:
        "Aquí reunimos un bloque bastante amplio de adjetivos な para que la unidad no dependa solo de 好き y 上手.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 4,
          items: [
            { id: "v028-quiet", jp: ruby("[静|しず]か"), reading: "しずか", meaning: "tranquilo", tags: ["adjetivo", "core"] },
            { id: "v028-lively", jp: ruby("にぎやか"), reading: "にぎやか", meaning: "animado / bullicioso", tags: ["adjetivo"] },
            { id: "v028-convenient", jp: ruby("[便利|べんり]"), reading: "べんり", meaning: "conveniente / práctico", tags: ["adjetivo", "core"] },
            { id: "v028-inconvenient", jp: ruby("[不便|ふべん]"), reading: "ふべん", meaning: "inconveniente / poco práctico", tags: ["adjetivo"] },
            { id: "v028-healthy", jp: ruby("[元気|げんき]"), reading: "げんき", meaning: "con ánimo / sano / bien", tags: ["adjetivo", "core"] },
            { id: "v028-kind", jp: ruby("[親切|しんせつ]"), reading: "しんせつ", meaning: "amable / atento", tags: ["adjetivo"] },
            { id: "v028-famous", jp: ruby("[有名|ゆうめい]"), reading: "ゆうめい", meaning: "famoso", tags: ["adjetivo", "core"] },
            { id: "v028-hard", jp: ruby("[大変|たいへん]"), reading: "たいへん", meaning: "duro / serio / complicado", tags: ["adjetivo"] },
            { id: "v028-good-at", jp: ruby("[上手|じょうず]"), reading: "じょうず", meaning: "hábil / bueno en", tags: ["adjetivo", "skill", "core"] },
            { id: "v028-bad-at", jp: ruby("[下手|へた]"), reading: "へた", meaning: "torpe / malo en", tags: ["adjetivo", "skill"] },
            { id: "v028-strength", jp: ruby("[得意|とくい]"), reading: "とくい", meaning: "fuerte en / se me da bien", tags: ["adjetivo", "aptitude", "core"] },
            { id: "v028-weakness", jp: ruby("[苦手|にがて]"), reading: "にがて", meaning: "se me da mal / no se me da bien", tags: ["adjetivo", "aptitude", "core"] },
            { id: "v028-like", jp: ruby("[好|す]き"), reading: "すき", meaning: "gustar / favorito", tags: ["adjetivo", "core"] },
            { id: "v028-dislike", jp: ruby("[嫌|きら]い"), reading: "きらい", meaning: "no gustar / detestar", tags: ["adjetivo", "core"] },
            { id: "v028-free", jp: ruby("[暇|ひま]"), reading: "ひま", meaning: "libre / desocupado", tags: ["adjetivo"] },
            { id: "v028-strong", jp: ruby("[丈夫|じょうぶ]"), reading: "じょうぶ", meaning: "resistente / sólido", tags: ["adjetivo"] },
          ],
        },
      ],
    },
    {
      id: "lesson-028-examples",
      kind: "examples",
      title: "Ejemplos guiados",
      blocks: [
        {
          type: "example-group",
          items: [
            { id: "ex-028-1", jp: ruby("[静|しず]かな[部屋|へや]です。"), es: "Es una habitación tranquila." },
            { id: "ex-028-2", jp: ruby("この[町|まち]はにぎやかです。"), es: "Esta ciudad es animada." },
            { id: "ex-028-3", jp: ruby("[駅前|えきまえ]は[便利|べんり]です。"), es: "La zona frente a la estación es conveniente." },
            { id: "ex-028-4", jp: ruby("[昨日|きのう]は[元気|げんき]でした。"), es: "Ayer estuve bien / con ánimo." },
            { id: "ex-028-5", jp: ruby("[先週|せんしゅう]は[暇|ひま]ではありませんでした。"), es: "La semana pasada no tuve tiempo libre." },
            { id: "ex-028-6", jp: ruby("[木村|きむら]さんは[料理|りょうり]が[上手|じょうず]です。"), es: "Kimura es bueno cocinando." },
            { id: "ex-028-7", jp: ruby("[私|わたし]は[数学|すうがく]が[苦手|にがて]です。"), es: "Se me dan mal las matemáticas." },
            { id: "ex-028-8", jp: ruby("[弟|おとうと]は[英語|えいご]が[得意|とくい]です。"), es: "A mi hermano menor se le da bien el inglés." },
            { id: "ex-028-9", jp: ruby("[私|わたし]は[辛|から]いものが[好|す]きです。"), es: "Me gusta la comida picante." },
            { id: "ex-028-10", jp: ruby("[姉|あね]は[納豆|なっとう]が[嫌|きら]いです。"), es: "A mi hermana mayor no le gusta el nattō." },
          ],
        },
      ],
    },
    {
      id: "lesson-028-contrast",
      kind: "contrast",
      title: "Contrastes que conviene fijar",
      blocks: [
        {
          type: "contrast-list",
          items: [
            {
              id: "contrast-028-1",
              label: "Modificar sustantivo vs cerrar oración",
              correct: { jp: ruby("[静|しず]かな[町|まち] / [町|まち]は[静|しず]かです。"), es: "La primera lleva な porque modifica al sustantivo; la segunda no." },
              explanation: "Aquí está el contraste estructural más importante de la unidad.",
            },
            {
              id: "contrast-028-2",
              label: "Familia い vs familia な",
              correct: { jp: ruby("[高|たか]い[山|やま] / [有名|ゆうめい]な[山|やま]"), es: "La primera entra directa; la segunda necesita な." },
              explanation: "Este contraste debe quedar muy firme para no mezclar familias.",
            },
            {
              id: "contrast-028-3",
              label: "好き / 嫌い vs 上手 / 下手",
              correct: { jp: ruby("[私|わたし]は[魚|さかな]が[好|す]きです。 / [彩花|あやか]さんは[料理|りょうり]が[上手|じょうず]です。"), es: "El primer par habla de gusto; el segundo, de habilidad." },
              explanation: "No conviene traducirlos todos como si expresaran la misma idea afectiva.",
            },
            {
              id: "contrast-028-4",
              label: "上手 / 下手 vs 得意 / 苦手",
              correct: { jp: ruby("[父|ちち]は[歌|うた]が[上手|じょうず]です。 / [私|わたし]は[歌|うた]が[苦手|にがて]です。"), es: "El primer par suena más a evaluación de habilidad; el segundo, a punto fuerte o débil vivido por la persona." },
              explanation: "Pedagógicamente esta diferencia ayuda mucho a producir frases más naturales.",
            },
            {
              id: "contrast-028-5",
              label: "Negativo y pasado en la familia な",
              correct: { jp: ruby("[便利|べんり]です。 / [便利|べんり]ではありません。 / [便利|べんり]でした。 / [便利|べんり]ではありませんでした。"), es: "Aquí el bloque de です organiza la cuadrícula temporal y negativa." },
              explanation: "Aquí la lógica es distinta de la familia い.",
            },
          ],
        },
      ],
    },
    {
      id: "lesson-028-warning",
      kind: "warning",
      title: "Qué conviene vigilar",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "No pongas な delante de です ni trates 好き como adjetivo い",
          content:
            "Los errores más típicos aquí son dos. Uno: poner な cuando el adjetivo ya no está modificando un sustantivo. Dos: pensar que palabras como 好き o きれい pertenecen a la familia い solo porque terminan visualmente de forma parecida.",
          bullets: [
            { jp: ruby("[静|しず]かな[部屋|へや]"), es: "correcto: な solo aparece delante del sustantivo" },
            { jp: ruby("[部屋|へや]は[静|しず]かです。"), es: "correcto: aquí ya no va な" },
            { jp: ruby("[好|す]きです / [嫌|きら]いです"), es: "en esta ruta pertenecen a la familia な" },
          ],
        },
      ],
    },
    {
      id: "lesson-028-practice",
      kind: "practice",
      title: "Práctica guiada antes del quiz",
      blocks: [
        {
          type: "bullet-list",
          items: [
            { es: "Toma primero cinco adjetivos な y únelos a sustantivos distintos.", jp: ruby("[静|しず]かな[部屋|へや] / [便利|べんり]な[駅前|えきまえ] / [有名|ゆうめい]な[先生|せんせい]。") },
            { es: "Después reescribe esas mismas ideas como predicado con", jp: ruby("です"), note: "y quita な." },
            { es: "Haz una segunda ronda con negativo y pasado usando", jp: ruby("ではありません / でした / ではありませんでした。") },
            { es: "Luego practica varias oraciones con", jp: ruby("[好|す]き / [嫌|きら]い / [上手|じょうず] / [下手|へた] / [得意|とくい] / [苦手|にがて]"), note: "cuidando el uso de が." },
            { es: "Por último, escribe un mini perfil de una persona mezclando descripción, gustos y habilidades." },
          ],
        },
      ],
    },
    {
      id: "lesson-028-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            { es: "Entiendo que la familia な se reconoce mejor por comportamiento que por pura forma visual." },
            { es: "Sé que", jp: ruby("な"), note: "solo aparece cuando el adjetivo modifica directamente a un sustantivo." },
            { es: "Puedo usar la cuadrícula", jp: ruby("です / ではありません / でした / ではありませんでした"), note: "con esta familia." },
            { es: "Puedo distinguir entre gusto, habilidad y área fuerte o débil con", jp: ruby("[好|す]き / [嫌|きら]い / [上手|じょうず] / [下手|へた] / [得意|とくい] / [苦手|にがて]。") },
            { es: "Estoy listo para pasar del bloque de descripción al bloque de deseo." },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-028-quiz",
    title: "Quiz — Adjetivos な",
    description:
      "Repaso de uso, cuadrícula básica y contrastes importantes dentro de la familia な, con énfasis en な delante del sustantivo y en la diferencia entre gusto, habilidad y punto fuerte o débil.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      { id: "q1", type: "single-choice", prompt: { es: "¿Cuál grupo modifica correctamente al sustantivo “部屋”?" }, choices: [ { id: "a", label: { jp: ruby("[静|しず]か[部屋|へや]") } }, { id: "b", label: { jp: ruby("[静|しず]かな[部屋|へや]") } }, { id: "c", label: { jp: ruby("[静|しず]かい[部屋|へや]") } }, { id: "d", label: { jp: ruby("[静|しず]かです[部屋|へや]") } } ], correctChoiceId: "b", explanation: "Cuando el adjetivo な modifica directamente a un sustantivo, aquí aparece な.", relatedSectionIds: ["lesson-028-structure", "lesson-028-contrast"] },
      { id: "q2", type: "single-choice", prompt: { es: "¿Cuál oración está bien formada como predicado?" }, choices: [ { id: "a", label: { jp: ruby("[部屋|へや]は[静|しず]かなです。") } }, { id: "b", label: { jp: ruby("[部屋|へや]は[静|しず]かです。") } }, { id: "c", label: { jp: ruby("[部屋|へや]は[静|しず]かいです。") } }, { id: "d", label: { jp: ruby("[部屋|へや]は[静|しず]くないです。") } } ], correctChoiceId: "b", explanation: "Cuando el adjetivo な cierra la oración, aquí ya no aparece な.", relatedSectionIds: ["lesson-028-structure", "lesson-028-warning"] },
      { id: "q3", type: "fill-blank", prompt: { es: "Completa el negativo base:", jp: ruby("[便利|べんり]___") }, acceptedAnswers: ["ではありません", "じゃありません"], placeholder: "Escribe la forma", explanation: "La ruta productiva base de esta unidad es ではありません. También puedes reconocer じゃありません.", relatedSectionIds: ["lesson-028-structure", "lesson-028-summary"] },
      { id: "q4", type: "fill-blank", prompt: { es: "Completa el pasado:", jp: ruby("[元気|げんき]___") }, acceptedAnswers: ["でした"], placeholder: "Escribe la forma", explanation: "Aquí el pasado se forma como 元気でした.", relatedSectionIds: ["lesson-028-structure", "lesson-028-summary"] },
      { id: "q5", type: "fill-blank", prompt: { es: "Completa el pasado negativo:", jp: ruby("[有名|ゆうめい]___") }, acceptedAnswers: ["ではありませんでした", "じゃありませんでした"], placeholder: "Escribe la forma", explanation: "La ruta base aquí es 有名ではありませんでした.", relatedSectionIds: ["lesson-028-structure", "lesson-028-summary"] },
      { id: "q6", type: "fill-blank", prompt: { es: "Completa la oración:", jp: ruby("[私|わたし]は[魚|さかな]が___です。"), note: "La idea es: me gusta." }, acceptedAnswers: ["好き", "すき"], placeholder: "Escribe el adjetivo", explanation: "Aquí 好き expresa gusto.", relatedSectionIds: ["lesson-028-structure", "lesson-028-examples"] },
      { id: "q7", type: "fill-blank", prompt: { es: "Completa la oración:", jp: ruby("[兄|あに]は[数学|すうがく]が___です。"), note: "La idea es: se le da bien." }, acceptedAnswers: ["得意", "とくい"], placeholder: "Escribe el adjetivo", explanation: "Aquí 得意 expresa que algo se le da bien a la persona.", relatedSectionIds: ["lesson-028-structure", "lesson-028-contrast"] },
      { id: "q8", type: "fill-blank", prompt: { es: "Completa la oración:", jp: ruby("[私|わたし]は[歌|うた]が___です。"), note: "La idea es: no se me da bien." }, acceptedAnswers: ["苦手", "にがて"], placeholder: "Escribe el adjetivo", explanation: "Aquí 苦手 expresa un área difícil para la persona.", relatedSectionIds: ["lesson-028-structure", "lesson-028-contrast"] },
      { id: "q9", type: "single-choice", prompt: { es: "¿Qué oración expresa mejor habilidad observada?" }, choices: [ { id: "a", label: { jp: ruby("[彩花|あやか]さんは[料理|りょうり]が[上手|じょうず]です。") } }, { id: "b", label: { jp: ruby("[彩花|あやか]さんは[料理|りょうり]が[好|す]きです。") } }, { id: "c", label: { jp: ruby("[彩花|あやか]さんは[料理|りょうり]が[便利|べんり]です。") } }, { id: "d", label: { jp: ruby("[彩花|あやか]さんは[料理|りょうり]が[静|しず]かです。") } } ], correctChoiceId: "a", explanation: "Aquí 上手 apunta a habilidad observada.", relatedSectionIds: ["lesson-028-contrast", "lesson-028-examples"] },
      { id: "q10", type: "single-choice", prompt: { es: "¿Qué explicación capta mejor por qué な aparece en 静かな部屋 pero no en 部屋は静かです?" }, choices: [ { id: "a", label: { es: "Porque な solo aparece cuando el adjetivo modifica directamente al sustantivo." } }, { id: "b", label: { es: "Porque な marca pasado." } }, { id: "c", label: { es: "Porque な es una partícula de tema." } }, { id: "d", label: { es: "Porque です es un sustantivo." } } ], correctChoiceId: "a", explanation: "Ese es el corazón estructural de la familia な.", relatedSectionIds: ["lesson-028-concept", "lesson-028-contrast"] },
      { id: "q11", type: "fill-blank", prompt: { es: "Completa la oración:", jp: ruby("[駅前|えきまえ]は___です。"), note: "La idea es: conveniente." }, acceptedAnswers: ["便利", "べんり"], placeholder: "Escribe el adjetivo", explanation: "Aquí el adjetivo correcto es 便利.", relatedSectionIds: ["lesson-028-vocabulary", "lesson-028-examples"] },
      { id: "q12", type: "fill-blank", prompt: { es: "Completa el grupo correcto:", jp: ruby("___[先生|せんせい]"), note: "La idea es: un profesor famoso." }, acceptedAnswers: ["有名な", "ゆうめいな"], placeholder: "Escribe la expresión", explanation: "Aquí el adjetivo な modifica directamente al sustantivo y por eso entra な.", relatedSectionIds: ["lesson-028-structure", "lesson-028-vocabulary"] },
      { id: "q13", type: "single-choice", prompt: { es: "¿Cuál oración expresa gusto y no habilidad?" }, choices: [ { id: "a", label: { jp: ruby("[私|わたし]は[魚|さかな]が[好|す]きです。") } }, { id: "b", label: { jp: ruby("[私|わたし]は[魚|さかな]が[上手|じょうず]です。") } }, { id: "c", label: { jp: ruby("[私|わたし]は[魚|さかな]が[便利|べんり]です。") } }, { id: "d", label: { jp: ruby("[私|わたし]は[魚|さかな]が[元気|げんき]です。") } } ], correctChoiceId: "a", explanation: "Aquí 好き expresa gusto, no habilidad.", relatedSectionIds: ["lesson-028-contrast", "lesson-028-examples"] },
      { id: "q14", type: "fill-blank", prompt: { es: "Completa la frase:", jp: ruby("[昨日|きのう]は___でした。"), note: "La idea es: estuve bien / con ánimo." }, acceptedAnswers: ["元気", "げんき"], placeholder: "Escribe el adjetivo", explanation: "La forma completa es 元気でした.", relatedSectionIds: ["lesson-028-vocabulary", "lesson-028-examples"] },
      { id: "q15", type: "single-choice", prompt: { es: "¿Cuál forma está bien formada para decir “no fue tranquilo”?" }, choices: [ { id: "a", label: { jp: ruby("[静|しず]くなかったです") } }, { id: "b", label: { jp: ruby("[静|しず]かなかったです") } }, { id: "c", label: { jp: ruby("[静|しず]かではありませんでした") } }, { id: "d", label: { jp: ruby("[静|しず]かいではありませんでした") } } ], correctChoiceId: "c", explanation: "La familia な usa la cuadrícula con ではありませんでした.", relatedSectionIds: ["lesson-028-structure", "lesson-028-contrast"] },
      { id: "q16", type: "order-sentence", prompt: { es: "Ordena el grupo correcto:" }, tokens: [ { id: "t1", label: { jp: ruby("[静|しず]かな") }, value: "静かな" }, { id: "t2", label: { jp: ruby("[町|まち]") }, value: "町" } ], correctOrder: ["t1", "t2"], answerLabel: { jp: ruby("[静|しず]かな[町|まち]") }, explanation: "Aquí な aparece porque el adjetivo modifica directamente al sustantivo.", relatedSectionIds: ["lesson-028-structure", "lesson-028-contrast"] },
      { id: "q17", type: "order-sentence", prompt: { es: "Ordena la oración correcta:" }, tokens: [ { id: "t1", label: { jp: ruby("[町|まち]は") }, value: "町は" }, { id: "t2", label: { jp: ruby("にぎやか") }, value: "にぎやか" }, { id: "t3", label: { jp: ruby("です。") }, value: "です。" } ], correctOrder: ["t1", "t2", "t3"], answerLabel: { jp: ruby("[町|まち]はにぎやかです。") }, explanation: "Aquí el adjetivo cierra la oración sin な.", relatedSectionIds: ["lesson-028-structure", "lesson-028-examples"] },
      { id: "q18", type: "order-sentence", prompt: { es: "Ordena la oración correcta:" }, tokens: [ { id: "t1", label: { jp: ruby("[私|わたし]は") }, value: "私は" }, { id: "t2", label: { jp: ruby("[甘|あま]いものが") }, value: "甘いものが" }, { id: "t3", label: { jp: ruby("[好|す]き") }, value: "好き" }, { id: "t4", label: { jp: ruby("です。") }, value: "です。" } ], correctOrder: ["t1", "t2", "t3", "t4"], answerLabel: { jp: ruby("[私|わたし]は[甘|あま]いものが[好|す]きです。") }, explanation: "Aquí el bloque con が marca el objeto del gusto.", relatedSectionIds: ["lesson-028-structure", "lesson-028-examples"] },
      { id: "q19", type: "order-sentence", prompt: { es: "Ordena la oración correcta:" }, tokens: [ { id: "t1", label: { jp: ruby("[弟|おとうと]は") }, value: "弟は" }, { id: "t2", label: { jp: ruby("[英語|えいご]が") }, value: "英語が" }, { id: "t3", label: { jp: ruby("[得意|とくい]") }, value: "得意" }, { id: "t4", label: { jp: ruby("です。") }, value: "です。" } ], correctOrder: ["t1", "t2", "t3", "t4"], answerLabel: { jp: ruby("[弟|おとうと]は[英語|えいご]が[得意|とくい]です。") }, explanation: "Aquí 得意 expresa el área fuerte de la persona.", relatedSectionIds: ["lesson-028-structure", "lesson-028-contrast"] },
      { id: "q20", type: "single-choice", prompt: { es: "¿Cuál idea resume mejor la familia な?" }, choices: [ { id: "a", label: { es: "Siempre termina en い y cambia a くない." } }, { id: "b", label: { es: "な aparece solo delante del sustantivo; el tiempo y la negación se sostienen con la cuadrícula de です." } }, { id: "c", label: { es: "No puede hablar de gustos ni de habilidad." } }, { id: "d", label: { es: "Siempre necesita を." } } ], correctChoiceId: "b", explanation: "Ese es el corazón estructural de esta familia.", relatedSectionIds: ["lesson-028-concept", "lesson-028-summary"] },
    ],
  },
};

export default lesson028;
