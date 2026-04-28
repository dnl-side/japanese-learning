
// src/data/grammar/lessons/lesson-030.ts

import { ruby } from "@/app/components/ui/Ruby";
import type { GrammarLesson } from "./index";

export const lesson030: GrammarLesson = {
  id: "lesson-030",
  slug: "comparativo-y-superlativo-basico",
  order: 35,
  level: "N5",
  status: "ready",
  title: "Comparativo y superlativo",
  jpTitle: "より・のほうが・ほど・いちばん",
  shortTitle: "Comparar",
  description:
    "Cómo comparar cosas, personas y categorías con より, のほうが y ほど, y cómo formar superlativos básicos con 〜の中で〜が一番Adjです, usando tanto adjetivos い como adjetivos な sin mezclar sus patrones negativos.",
  estimatedMinutes: 112,
  categoryTags: ["fundamentos", "comparacion", "superlativo", "adjetivos", "lectura", "integracion"],
  grammarTags: [
    "より",
    "のほうが",
    "ほど",
    "一番",
    "どちらが",
    "AはBよりAdjです",
    "AのほうがAdjです",
    "AはBほどAdjくない",
    "AはBほどAdjではありません",
    "Nの中でAが一番Adjです",
  ],
  searchTerms: [
    "comparativo japones yor i no hou ga hodo",
    "superlativo japones ichiban",
    "A wa B yori adjective desu",
    "dochira ga adjective desu ka",
    "A wa B hodo adjective kunai",
    "comparativo y superlativo japones n5",
  ],
  relatedLessonSlugs: [
    "adjetivos-i-conjugacion-y-uso-basico",
    "adjetivos-na-uso-basico-y-contrastes",
    "deseo-con-hoshii-y-forma-tai",
  ],
  relatedVocabularyTags: ["comparacion", "adjetivos", "objetos", "lugares", "asignaturas", "base"],
  objectives: [
    "Entender cómo funciona より como punto de comparación.",
    "Usar のほうが para señalar cuál lado queda más alto dentro de la comparación.",
    "Usar ほど en comparaciones negativas como 'no tan... como'.",
    "Formar preguntas con どちらが〜ですか cuando comparas dos opciones.",
    "Construir superlativos básicos con 〜の中で〜が一番Adjです.",
    "Aplicar estos patrones con adjetivos い y な sin mezclar sus formas negativas.",
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
      id: "lesson-030-intro",
      kind: "intro",
      title: "Qué vas a aprender",
      blocks: [
        {
          type: "paragraph",
          content:
            "Ahora que ya viste las dos grandes familias de adjetivos y el bloque de deseo, toca una unidad muy útil para hablar de diferencias y preferencias: la comparación. Aquí aprenderás a decir que algo es más alto, más barato, más conveniente o más interesante que otra cosa, y también a decir qué es lo más dentro de un grupo.",
        },
        {
          type: "bullet-list",
          items: [
            { es: "Primero fijaremos patrones como:", jp: ruby("AはBよりAdjです。 / AのほうがAdjです。") },
            { es: "Después veremos el contraste negativo con:", jp: ruby("AはBほどAdjくないです。 / AはBほどAdjではありません。") },
            { es: "Y al final cerraremos con superlativos como:", jp: ruby("Nの[中|なか]で、Sが[一番|いちばん]Adjです。") },
          ],
        },
      ],
    },
    {
      id: "lesson-030-concept",
      kind: "concept",
      title: "Idea central",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "より marca la base contra la que comparas",
          content:
            "Aquí la idea más útil es muy simple: より señala el punto de comparación. Si dices AはBより高いです, el referente B es la base contra la que estás midiendo A.",
          bullets: [
            { jp: ruby("この[山|やま]はあの[山|やま]より[高|たか]いです。"), es: "あの山 es la base de comparación" },
            { jp: ruby("バスは[電車|でんしゃ]より[安|やす]いです。"), es: "電車 es la base de comparación" },
            { jp: ruby("[数学|すうがく]は[歴史|れきし]より[難|むずか]しいです。"), es: "歴史 es la base de comparación" },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "のほうが señala el lado que queda más alto en la comparación",
          content:
            "Aquí la comparación se siente un poco más enfocada en cuál lado sale favorecido. Por eso のほうが aparece muchísimo en japonés real y conviene dejarlo muy firme.",
          bullets: [
            { jp: ruby("この[辞書|じしょ]のほうが[便利|べんり]です。"), es: "este diccionario sale mejor en la comparación" },
            { jp: ruby("[赤|あか]い[自転車|じてんしゃ]のほうが[好|す]きです。"), es: "la bicicleta roja es la que prefieres más" },
            { jp: ruby("[姉|あね]のほうが[早|はや]いです。"), es: "mi hermana mayor es la más rápida entre dos opciones" },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "ほど se trabaja aquí sobre todo con negativo",
          content:
            "En esta ruta, ほど se fijará en comparaciones negativas del tipo 'no tan... como'. Eso deja muy clara la relación y evita mezclar demasiado pronto otros matices.",
          bullets: [
            { jp: ruby("この[町|まち]は[東京|とうきょう]ほどにぎやかではありません。"), es: "no es tan animada como Tokio" },
            { jp: ruby("[数学|すうがく]は[物理|ぶつり]ほど[難|むずか]しくないです。"), es: "no es tan difícil como física" },
            { jp: ruby("ラーメンはカレーほど[好|す]きではありません。"), es: "no me gusta tanto como el curry" },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "一番 cierra el superlativo dentro de un grupo",
          content:
            "Cuando ya no comparas solo dos cosas, sino un grupo completo, aquí entra 一番. La estructura básica que fijaremos es Nの中で、Sが一番Adjです.",
          bullets: [
            { jp: ruby("[果物|くだもの]の[中|なか]で、りんごが[一番|いちばん][好|す]きです。"), es: "manzana es lo que más me gusta dentro del grupo de frutas" },
            { jp: ruby("[科目|かもく]の[中|なか]で、[数学|すうがく]が[一番|いちばん][難|むずか]しいです。"), es: "matemáticas es la más difícil del grupo" },
            { jp: ruby("[家族|かぞく]の[中|なか]で、[母|はは]が[一番|いちばん][早|はや]いです。"), es: "mamá es la más rápida del grupo" },
          ],
        },
      ],
    },
    {
      id: "lesson-030-structure",
      kind: "structure",
      title: "Estructuras base",
      blocks: [
        {
          type: "pattern-cards",
          items: [
            {
              id: "pattern-030-1",
              label: "Comparación con より",
              pattern: ruby("A は Bより Adjです。"),
              meaning: "A es más Adj que B.",
              translation:
                "Aquí B es la base de comparación y A es el elemento que se evalúa por encima de B.",
              structure: [
                { slot: "A は", value: "elemento evaluado", note: "La cosa, persona o materia que comparas." },
                { slot: "Bより", value: "base de comparación", note: "Marca el otro lado de la comparación." },
                { slot: "Adj です", value: "adjetivo", note: { es: "Puede ser adjetivo い o な, por ejemplo:", jp: ruby("[高|たか]いです / [便利|べんり]です / [静|しず]かです / [難|むずか]しいです。") } },
              ],
              notes: ["Aquí no necesitas のほうが para que la comparación funcione, aunque las dos formas suelen convivir en el japonés real."],
            },
            {
              id: "pattern-030-2",
              label: "Pregunta con どちらが y respuesta con のほうが",
              pattern: ruby("AとBとどちらがAdjですか。 / AのほうがAdjです。"),
              meaning: "¿Cuál de los dos es más Adj? / A lo es más.",
              translation:
                "Aquí comparas dos opciones y luego nombras la que sale favorecida.",
              structure: [
                { slot: "AとBと", value: "dos opciones", note: "Las dos opciones que quieres comparar." },
                { slot: "どちらが", value: "cuál de los dos", note: "Pregunta comparativa entre dos elementos." },
                { slot: "Aのほうが", value: "lado favorecido", note: "Marca qué lado resulta más alto en la comparación." },
              ],
              notes: ["Este patrón es muy útil para conversación y preferencias."],
            },
            {
              id: "pattern-030-3",
              label: "Comparación negativa con ほど",
              pattern: ruby("A は Bほど Adjくないです。 / A は Bほど Adjではありません。"),
              meaning: "A no es tan Adj como B.",
              translation:
                "Aquí ほど se trabaja con una forma negativa. La terminación final cambia según si usas adjetivo い o な.",
              structure: [
                { slot: "Bほど", value: "base de comparación", note: "B marca el referente con el que comparas." },
                { slot: "Adjくない / Adjではありません", value: "negativo", note: { es: "Con い-adjetivos usamos くない. Con な-adjetivos usamos ではありません.", jp: ruby("[高|たか]くない / [便利|べんり]ではありません。") } },
              ],
              notes: ["Aquí la forma final debe respetar la familia del adjetivo."],
            },
            {
              id: "pattern-030-4",
              label: "Superlativo básico",
              pattern: ruby("Nの[中|なか]で、Sが[一番|いちばん]Adjです。"),
              meaning: "Dentro de N, S es lo más Adj.",
              translation:
                "Aquí comparas un grupo completo y nombras el elemento que queda más alto.",
              structure: [
                { slot: "Nの中で", value: "grupo", note: { es: "Puede ser algo como:", jp: ruby("[果物|くだもの]の[中|なか]で / [家族|かぞく]の[中|なか]で / [科目|かもく]の[中|なか]で。") } },
                { slot: "Sが", value: "elemento ganador", note: "El elemento que sale más alto en el grupo." },
                { slot: "一番Adjです", value: "máximo dentro del grupo", note: "Marca el superlativo básico." },
              ],
              notes: ["Aquí 一番 funciona como el bloque central del superlativo."],
            },
          ],
        },
        {
          type: "table",
          title: "Comparación con adjetivos い y な",
          description:
            "Aquí conviene ver juntos los dos tipos de adjetivo para no mezclar sus negativos cuando aparece ほど.",
          columns: [
            { key: "family", label: "Familia", width: "16%" },
            { key: "yori", label: "Comparación con より", width: "34%" },
            { key: "hodo", label: "Comparación con ほど", width: "34%" },
            { key: "note", label: "Nota", width: "16%" },
          ],
          rows: [
            {
              id: "cmp-i",
              cells: {
                family: "い",
                yori: { jp: ruby("この[山|やま]はあの[山|やま]より[高|たか]いです。") },
                hodo: { jp: ruby("この[山|やま]はあの[山|やま]ほど[高|たか]くないです。") },
                note: "くない",
              },
            },
            {
              id: "cmp-na",
              cells: {
                family: "な",
                yori: { jp: ruby("この[辞書|じしょ]はその[辞書|じしょ]より[便利|べんり]です。") },
                hodo: { jp: ruby("この[町|まち]は[東京|とうきょう]ほどにぎやかではありません。") },
                note: "ではありません",
              },
            },
          ],
          zebra: true,
        },
      ],
    },
    {
      id: "lesson-030-vocabulary",
      kind: "vocabulary",
      title: "Vocabulario útil para esta unidad",
      description:
        "Aquí reunimos sustantivos y adjetivos que ayudan a construir comparaciones claras sin depender siempre del mismo repertorio.",
      blocks: [
        {
          type: "vocabulary-grid",
          columns: 4,
          items: [
            { id: "v030-bus", jp: ruby("バス"), reading: "ばす", meaning: "bus", tags: ["objeto"] },
            { id: "v030-train", jp: ruby("[電車|でんしゃ]"), reading: "でんしゃ", meaning: "tren", tags: ["objeto"] },
            { id: "v030-smartphone", jp: ruby("スマホ"), reading: "すまほ", meaning: "smartphone", tags: ["objeto"] },
            { id: "v030-tablet", jp: ruby("タブレット"), reading: "たぶれっと", meaning: "tablet", tags: ["objeto"] },
            { id: "v030-math", jp: ruby("[数学|すうがく]"), reading: "すうがく", meaning: "matemáticas", tags: ["campo"] },
            { id: "v030-history", jp: ruby("[歴史|れきし]"), reading: "れきし", meaning: "historia", tags: ["campo"] },
            { id: "v030-physics", jp: ruby("[物理|ぶつり]"), reading: "ぶつり", meaning: "física", tags: ["campo"] },
            { id: "v030-fruit", jp: ruby("[果物|くだもの]"), reading: "くだもの", meaning: "fruta", tags: ["grupo"] },
            { id: "v030-apple", jp: ruby("りんご"), reading: "りんご", meaning: "manzana", tags: ["objeto"] },
            { id: "v030-banana", jp: ruby("バナナ"), reading: "ばなな", meaning: "banana", tags: ["objeto"] },
            { id: "v030-mountain", jp: ruby("[山|やま]"), reading: "やま", meaning: "montaña", tags: ["objeto"] },
            { id: "v030-town", jp: ruby("[町|まち]"), reading: "まち", meaning: "ciudad / pueblo", tags: ["objeto"] },
            { id: "v030-top", jp: ruby("[一番|いちばん]"), reading: "いちばん", meaning: "el más / el primero", tags: ["comparacion", "core"] },
            { id: "v030-more-side", jp: ruby("のほう"), reading: "のほう", meaning: "el lado que resulta más...", tags: ["comparacion", "core"] },
            { id: "v030-than", jp: ruby("より"), reading: "より", meaning: "que / en comparación con", tags: ["comparacion", "core"] },
            { id: "v030-as-much", jp: ruby("ほど"), reading: "ほど", meaning: "tan... como / al grado de", tags: ["comparacion", "core"] },
          ],
        },
      ],
    },
    {
      id: "lesson-030-examples",
      kind: "examples",
      title: "Ejemplos guiados",
      blocks: [
        {
          type: "example-group",
          items: [
            { id: "ex-030-1", jp: ruby("バスは[電車|でんしゃ]より[安|やす]いです。"), es: "El bus es más barato que el tren." },
            { id: "ex-030-2", jp: ruby("この[辞書|じしょ]はその[辞書|じしょ]より[便利|べんり]です。"), es: "Este diccionario es más práctico que ese diccionario." },
            { id: "ex-030-3", jp: ruby("スマホとタブレットとどちらが[便利|べんり]ですか。"), es: "¿Cuál de los dos es más práctico, el smartphone o la tablet?" },
            { id: "ex-030-4", jp: ruby("スマホのほうが[便利|べんり]です。"), es: "El smartphone es más práctico." },
            { id: "ex-030-5", jp: ruby("[数学|すうがく]は[物理|ぶつり]ほど[難|むずか]しくないです。"), es: "Matemáticas no es tan difícil como física." },
            { id: "ex-030-6", jp: ruby("この[町|まち]は[東京|とうきょう]ほどにぎやかではありません。"), es: "Esta ciudad no es tan bulliciosa como Tokio." },
            { id: "ex-030-7", jp: ruby("[果物|くだもの]の[中|なか]で、りんごが[一番|いちばん][好|す]きです。"), es: "De las frutas, lo que más me gusta es la manzana." },
            { id: "ex-030-8", jp: ruby("[科目|かもく]の[中|なか]で、[歴史|れきし]が[一番|いちばん][面白|おもしろ]いです。"), es: "De las asignaturas, historia es la más interesante." },
            { id: "ex-030-9", jp: ruby("[家族|かぞく]の[中|なか]で、[姉|あね]が[一番|いちばん][早|はや]いです。"), es: "De mi familia, mi hermana mayor es la más rápida / la más tempranera." },
            { id: "ex-030-10", jp: ruby("[赤|あか]い[自転車|じてんしゃ]のほうが[好|す]きです。"), es: "Me gusta más la bicicleta roja." },
          ],
        },
      ],
    },
    {
      id: "lesson-030-contrast",
      kind: "contrast",
      title: "Contrastes que conviene fijar",
      blocks: [
        {
          type: "contrast-list",
          items: [
            { id: "contrast-030-1", label: "より vs のほうが", correct: { jp: ruby("AはBより[高|たか]いです。 / Aのほうが[高|たか]いです。"), es: "La primera marca la base de comparación; la segunda destaca el lado que sale por encima." }, explanation: "Las dos son muy importantes y suelen convivir en la práctica." },
            { id: "contrast-030-2", label: "Comparación positiva vs comparación negativa", correct: { jp: ruby("AはBより[便利|べんり]です。 / AはBほど[便利|べんり]ではありません。"), es: "La primera sube a A por encima de B; la segunda dice que A no llega al nivel de B." }, explanation: "Aquí ほど se fija sobre todo con negativo." },
            { id: "contrast-030-3", label: "Adjetivo い vs adjetivo な con ほど", correct: { jp: ruby("[高|たか]くないです。 / [便利|べんり]ではありません。"), es: "Con い-adjetivos usamos くない. Con な-adjetivos usamos ではありません." }, explanation: "Este contraste debe quedar firme para no mezclar familias dentro de la comparación." },
            { id: "contrast-030-4", label: "Dos opciones vs un grupo entero", correct: { jp: ruby("AとBとどちらがAdjですか。 / Nの[中|なか]で、Sが[一番|いちばん]Adjです。"), es: "La primera compara dos opciones; la segunda busca lo más dentro de un grupo." }, explanation: "Aquí cambia el tipo de comparación que haces." },
            { id: "contrast-030-5", label: "Gusto comparativo vs gusto absoluto", correct: { jp: ruby("[赤|あか]い[自転車|じてんしゃ]のほうが[好|す]きです。 / りんごが[好|す]きです。"), es: "La primera compara; la segunda solo expresa gusto simple." }, explanation: "Así puedes sentir cómo la comparación cambia el tipo de frase." },
          ],
        },
      ],
    },
    {
      id: "lesson-030-warning",
      kind: "warning",
      title: "Qué conviene vigilar",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "No mezcles el negativo de la familia い con el de la familia な",
          content:
            "El error más típico de esta unidad aparece cuando entra ほど y el estudiante usa la forma negativa equivocada. El segundo error es olvidar que より y のほうが no hacen exactamente el mismo trabajo.",
          bullets: [
            { jp: ruby("[数学|すうがく]は[物理|ぶつり]ほど[難|むずか]しくないです。"), es: "aquí la familia い exige くない" },
            { jp: ruby("この[町|まち]は[東京|とうきょう]ほどにぎやかではありません。"), es: "aquí la familia な exige ではありません" },
            { jp: ruby("AはBよりAdjです / AのほうがAdjです"), es: "conviene sentir dos funciones distintas, no una sola plantilla repetida" },
          ],
        },
      ],
    },
    {
      id: "lesson-030-practice",
      kind: "practice",
      title: "Práctica guiada antes del quiz",
      blocks: [
        {
          type: "bullet-list",
          items: [
            { es: "Elige pares de objetos, lugares o personas y compáralos con", jp: ruby("より"), note: "usando tanto adjetivos い como な." },
            { es: "Después rehace varias de esas mismas comparaciones con", jp: ruby("のほうが"), note: "para sentir qué lado queda favorecido." },
            { es: "Haz una tercera ronda con", jp: ruby("ほど"), note: "pero usa siempre la forma negativa correcta según la familia del adjetivo." },
            { es: "Luego toma grupos como frutas, asignaturas o miembros de la familia y escribe varios ejemplos con", jp: ruby("Nの[中|なか]で、Sが[一番|いちばん]Adjです。") },
            { es: "Por último, añade preguntas con", jp: ruby("どちらが"), note: "para practicar comparación real entre dos opciones." },
          ],
        },
      ],
    },
    {
      id: "lesson-030-summary",
      kind: "summary",
      title: "Resumen",
      blocks: [
        {
          type: "checklist",
          items: [
            { es: "Puedo usar", jp: ruby("より"), note: "como base de comparación." },
            { es: "Puedo usar", jp: ruby("のほうが"), note: "para señalar el lado que queda más alto." },
            { es: "Puedo usar", jp: ruby("ほど"), note: "en comparaciones negativas sin mezclar el tipo de adjetivo." },
            { es: "Puedo usar", jp: ruby("Nの[中|なか]で、Sが[一番|いちばん]Adjです"), note: "para formar superlativos básicos." },
            { es: "Ya tengo cerrada la base de descripción, deseo y comparación antes del próximo gran まとめ." },
          ],
        },
      ],
    },
  ],
  quiz: {
    id: "lesson-030-quiz",
    title: "Quiz — Comparativo y superlativo",
    description:
      "Repaso de より, のほうが, ほど y 一番, con énfasis en distinguir su trabajo real y en no mezclar las terminaciones negativas de los adjetivos い y な.",
    passScore: 80,
    shuffleQuestions: true,
    showImmediateFeedback: true,
    questions: [
      { id: "q1", type: "fill-blank", prompt: { es: "Completa la partícula correcta:", jp: ruby("バスは[電車|でんしゃ]___[安|やす]いです。") }, acceptedAnswers: ["より"], placeholder: "Escribe la palabra", explanation: "Aquí より marca la base de comparación.", relatedSectionIds: ["lesson-030-structure", "lesson-030-summary"] },
      { id: "q2", type: "fill-blank", prompt: { es: "Completa la expresión correcta:", jp: ruby("スマホ___[便利|べんり]です。"), note: "La idea es: el smartphone es el lado más práctico." }, acceptedAnswers: ["のほうが"], placeholder: "Escribe la expresión", explanation: "Aquí la comparación se enfoca en el lado favorecido, por eso entra のほうが.", relatedSectionIds: ["lesson-030-structure", "lesson-030-summary"] },
      { id: "q3", type: "fill-blank", prompt: { es: "Completa la partícula correcta:", jp: ruby("[数学|すうがく]は[物理|ぶつり]___[難|むずか]しくないです。") }, acceptedAnswers: ["ほど"], placeholder: "Escribe la palabra", explanation: "Aquí ほど trabaja dentro de una comparación negativa.", relatedSectionIds: ["lesson-030-structure", "lesson-030-contrast"] },
      { id: "q4", type: "fill-blank", prompt: { es: "Completa el superlativo:", jp: ruby("[果物|くだもの]の[中|なか]で、りんごが___[好|す]きです。") }, acceptedAnswers: ["一番", "いちばん"], placeholder: "Escribe la palabra", explanation: "Aquí 一番 marca el superlativo dentro del grupo.", relatedSectionIds: ["lesson-030-structure", "lesson-030-summary"] },
      { id: "q5", type: "single-choice", prompt: { es: "¿Cuál oración compara dos cosas diciendo que A es más alta que B?" }, choices: [ { id: "a", label: { jp: ruby("AはBの[中|なか]で[一番|いちばん][高|たか]いです。") } }, { id: "b", label: { jp: ruby("AはBより[高|たか]いです。") } }, { id: "c", label: { jp: ruby("AはBほど[高|たか]いです。") } }, { id: "d", label: { jp: ruby("AとBが[高|たか]いです。") } } ], correctChoiceId: "b", explanation: "Aquí より marca la base de comparación.", relatedSectionIds: ["lesson-030-structure", "lesson-030-contrast"] },
      { id: "q6", type: "single-choice", prompt: { es: "¿Cuál oración significa “esta ciudad no es tan tranquila como aquella ciudad”?" }, choices: [ { id: "a", label: { jp: ruby("この[町|まち]はあの[町|まち]より[静|しず]かです。") } }, { id: "b", label: { jp: ruby("この[町|まち]はあの[町|まち]ほど[静|しず]かではありません。") } }, { id: "c", label: { jp: ruby("この[町|まち]のほうが[静|しず]かではありません。") } }, { id: "d", label: { jp: ruby("この[町|まち]はあの[町|まち]ほど[静|しず]くないです。") } } ], correctChoiceId: "b", explanation: "Con un adjetivo な como 静か, la comparación negativa con ほど usa ではありません.", relatedSectionIds: ["lesson-030-structure", "lesson-030-warning"] },
      { id: "q7", type: "single-choice", prompt: { es: "¿Cuál oración pregunta correctamente cuál de dos opciones es más práctica?" }, choices: [ { id: "a", label: { jp: ruby("スマホとタブレットとどちらが[便利|べんり]ですか。") } }, { id: "b", label: { jp: ruby("スマホよりタブレットが[便利|べんり]ですか。") } }, { id: "c", label: { jp: ruby("スマホのほうがタブレットですか。") } }, { id: "d", label: { jp: ruby("どちらがスマホとタブレット[便利|べんり]ですか。") } } ], correctChoiceId: "a", explanation: "Aquí comparas dos opciones y preguntas cuál de las dos es más práctica.", relatedSectionIds: ["lesson-030-structure", "lesson-030-examples"] },
      { id: "q8", type: "fill-blank", prompt: { es: "Completa la respuesta natural:", jp: ruby("スマホとタブレットとどちらが[便利|べんり]ですか。 → スマホ___[便利|べんり]です。") }, acceptedAnswers: ["のほうが"], placeholder: "Escribe la expresión", explanation: "La respuesta natural aquí destaca el lado favorecido con のほうが.", relatedSectionIds: ["lesson-030-structure", "lesson-030-examples"] },
      { id: "q9", type: "fill-blank", prompt: { es: "Completa la forma negativa correcta:", jp: ruby("[数学|すうがく]は[物理|ぶつり]ほど[難|むずか]___です。") }, acceptedAnswers: ["しくない", "難しくない", "むずかしくない"], placeholder: "Escribe la parte que falta", explanation: "Con un adjetivo い como 難しい, la comparación negativa usa くない.", relatedSectionIds: ["lesson-030-structure", "lesson-030-warning"] },
      { id: "q10", type: "fill-blank", prompt: { es: "Completa la forma negativa correcta:", jp: ruby("この[店|みせ]はあの[店|みせ]ほど___です。"), note: "La idea es: no es tan conveniente." }, acceptedAnswers: ["便利ではありません", "べんりではありません"], placeholder: "Escribe la forma", explanation: "Con un adjetivo な como 便利, la comparación negativa usa ではありません.", relatedSectionIds: ["lesson-030-structure", "lesson-030-warning"] },
      { id: "q11", type: "single-choice", prompt: { es: "¿Cuál oración expresa un superlativo básico correcto?" }, choices: [ { id: "a", label: { jp: ruby("[果物|くだもの]より、りんごが[一番|いちばん][好|す]きです。") } }, { id: "b", label: { jp: ruby("[果物|くだもの]の[中|なか]で、りんごが[一番|いちばん][好|す]きです。") } }, { id: "c", label: { jp: ruby("りんごが[果物|くだもの]の[中|なか]より[一番|いちばん]です。") } }, { id: "d", label: { jp: ruby("[果物|くだもの]はりんごより[一番|いちばん]です。") } } ], correctChoiceId: "b", explanation: "Aquí el patrón correcto del superlativo es Nの中で、Sが一番Adjです。", relatedSectionIds: ["lesson-030-structure", "lesson-030-summary"] },
      { id: "q12", type: "fill-blank", prompt: { es: "Completa la oración:", jp: ruby("[科目|かもく]の[中|なか]で、[歴史|れきし]が___[面白|おもしろ]いです。") }, acceptedAnswers: ["一番", "いちばん"], placeholder: "Escribe la palabra", explanation: "Aquí 一番 marca el superlativo dentro del grupo de asignaturas.", relatedSectionIds: ["lesson-030-structure", "lesson-030-examples"] },
      { id: "q13", type: "single-choice", prompt: { es: "¿Qué idea capta mejor la diferencia entre より y のほうが?" }, choices: [ { id: "a", label: { es: "No hay ninguna diferencia útil." } }, { id: "b", label: { es: "より marca la base de comparación y のほうが destaca el lado que queda más alto." } }, { id: "c", label: { es: "より solo se usa con verbos y のほうが solo con sustantivos." } }, { id: "d", label: { es: "のほうが siempre reemplaza a より sin cambiar nada." } } ], correctChoiceId: "b", explanation: "Esa es la diferencia pedagógica más útil para esta etapa.", relatedSectionIds: ["lesson-030-concept", "lesson-030-contrast"] },
      { id: "q14", type: "fill-blank", prompt: { es: "Completa la oración:", jp: ruby("[赤|あか]い[自転車|じてんしゃ]___[好|す]きです。"), note: "La idea es: me gusta más la bicicleta roja." }, acceptedAnswers: ["のほうが"], placeholder: "Escribe la expresión", explanation: "Aquí la comparación se resuelve destacando el lado preferido con のほうが.", relatedSectionIds: ["lesson-030-examples", "lesson-030-contrast"] },
      { id: "q15", type: "fill-blank", prompt: { es: "Completa la partícula correcta:", jp: ruby("バスは[電車|でんしゃ]___[安|やす]いですが、[速|はや]くないです。") }, acceptedAnswers: ["より"], placeholder: "Escribe la palabra", explanation: "Aquí 電車 es la base de comparación para el adjetivo 安い.", relatedSectionIds: ["lesson-030-structure", "lesson-030-examples"] },
      { id: "q16", type: "order-sentence", prompt: { es: "Ordena la oración comparativa correcta:" }, tokens: [ { id: "t1", label: { jp: ruby("バスは") }, value: "バスは" }, { id: "t2", label: { jp: ruby("[電車|でんしゃ]より") }, value: "電車より" }, { id: "t3", label: { jp: ruby("[安|やす]い") }, value: "安い" }, { id: "t4", label: { jp: ruby("です。") }, value: "です。" } ], correctOrder: ["t1", "t2", "t3", "t4"], answerLabel: { jp: ruby("バスは[電車|でんしゃ]より[安|やす]いです。") }, explanation: "Aquí より marca la base de comparación.", relatedSectionIds: ["lesson-030-structure", "lesson-030-examples"] },
      { id: "q17", type: "order-sentence", prompt: { es: "Ordena la respuesta correcta:" }, tokens: [ { id: "t1", label: { jp: ruby("スマホのほうが") }, value: "スマホのほうが" }, { id: "t2", label: { jp: ruby("[便利|べんり]") }, value: "便利" }, { id: "t3", label: { jp: ruby("です。") }, value: "です。" } ], correctOrder: ["t1", "t2", "t3"], answerLabel: { jp: ruby("スマホのほうが[便利|べんり]です。") }, explanation: "Aquí la respuesta marca el lado favorecido con のほうが.", relatedSectionIds: ["lesson-030-structure", "lesson-030-examples"] },
      { id: "q18", type: "order-sentence", prompt: { es: "Ordena la comparación negativa correcta:" }, tokens: [ { id: "t1", label: { jp: ruby("[数学|すうがく]は") }, value: "数学は" }, { id: "t2", label: { jp: ruby("[物理|ぶつり]ほど") }, value: "物理ほど" }, { id: "t3", label: { jp: ruby("[難|むずか]しくない") }, value: "難しくない" }, { id: "t4", label: { jp: ruby("です。") }, value: "です。" } ], correctOrder: ["t1", "t2", "t3", "t4"], answerLabel: { jp: ruby("[数学|すうがく]は[物理|ぶつり]ほど[難|むずか]しくないです。") }, explanation: "Con un adjetivo い, la comparación negativa con ほど usa くない.", relatedSectionIds: ["lesson-030-structure", "lesson-030-warning"] },
      { id: "q19", type: "order-sentence", prompt: { es: "Ordena el superlativo correcto:" }, tokens: [ { id: "t1", label: { jp: ruby("[果物|くだもの]の[中|なか]で、") }, value: "果物の中で、" }, { id: "t2", label: { jp: ruby("りんごが") }, value: "りんごが" }, { id: "t3", label: { jp: ruby("[一番|いちばん]") }, value: "一番" }, { id: "t4", label: { jp: ruby("[好|す]き") }, value: "好き" }, { id: "t5", label: { jp: ruby("です。") }, value: "です。" } ], correctOrder: ["t1", "t2", "t3", "t4", "t5"], answerLabel: { jp: ruby("[果物|くだもの]の[中|なか]で、りんごが[一番|いちばん][好|す]きです。") }, explanation: "Aquí el grupo se marca con の中で y el superlativo con 一番.", relatedSectionIds: ["lesson-030-structure", "lesson-030-examples"] },
      { id: "q20", type: "single-choice", prompt: { es: "¿Cuál idea resume mejor esta unidad?" }, choices: [ { id: "a", label: { es: "Solo se aprende una forma de comparación." } }, { id: "b", label: { es: "より, のほうが, ほど y 一番 cubren trabajos distintos dentro de la comparación y el superlativo." } }, { id: "c", label: { es: "La comparación no depende del tipo de adjetivo." } }, { id: "d", label: { es: "ほど siempre se usa en afirmativo en esta ruta." } } ], correctChoiceId: "b", explanation: "Ese es el corazón real de la unidad.", relatedSectionIds: ["lesson-030-concept", "lesson-030-summary"] },
    ],
  },
};

export default lesson030;
