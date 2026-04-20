// src/data/grammar/conditionals.ts

import { RubySegment } from "@/app/components/ui/Ruby";


export interface CondExample {
  segments: RubySegment[];
  translation: string;
  note?: string;
}

export interface CondFormation {
  type: string;           // "Verbo", "い-adjetivo", "な-adjetivo", "Sustantivo"
  example: string;        // dictionary form
  rule: string;           // cómo se transforma
  result: string;         // forma final
  negative?: string;      // forma negativa
}

export interface Conditional {
  key: string;
  jp: string;             // と
  romaji: string;
  title: string;          // Condicional de resultado natural
  summary: string;        // short 1-line
  color: string;
  accent: string;
  mainUse: string;
  formation: CondFormation[];
  examples: CondExample[];
  restrictions: string[];
  whenNotToUse: string;
}

export const CONDITIONALS: Conditional[] = [
  // ─── と ──────────────────────────────────────────────────────────────────
  {
    key: "to",
    jp: "と",
    romaji: "to",
    title: "Resultado natural / inevitable",
    summary: "Cuando A ocurre, B ocurre siempre — relación de causa inevitable.",
    color: "#90CAF9",
    accent: "#1565C0",
    mainUse: "Se usa para expresar relaciones automáticas, hábitos invariables, leyes naturales o instrucciones. Si A pasa, B siempre pasa — sin excepción.",
    formation: [
      { type: "Verbo",         example: "行く",   rule: "Forma diccionario + と",              result: "行くと",        negative: "行かないと" },
      { type: "い-adjetivo",   example: "高い",   rule: "Forma diccionario + と",              result: "高いと",        negative: "高くないと" },
      { type: "な-adjetivo",   example: "静か",   rule: "Sustantivo + だと",                   result: "静かだと",      negative: "静かじゃないと" },
      { type: "Sustantivo",    example: "学生",   rule: "Sustantivo + だと",                   result: "学生だと",      negative: "学生じゃないと" },
    ],
    examples: [
      { segments: [{ text: "春", ruby: "はる" }, { text: "になると" }, { text: "桜", ruby: "さくら" }, { text: "が" }, { text: "咲", ruby: "さ" }, { text: "きます。" }], translation: "Cuando llega la primavera, florecen los cerezos." },
      { segments: [{ text: "このボタンを" }, { text: "押", ruby: "お" }, { text: "すと、ドアが" }, { text: "開", ruby: "あ" }, { text: "きます。" }], translation: "Si presionas este botón, la puerta se abre." },
      { segments: [{ text: "まっすぐ" }, { text: "行", ruby: "い" }, { text: "くと" }, { text: "駅", ruby: "えき" }, { text: "があります。" }], translation: "Si sigues recto, encontrarás la estación." },
      { segments: [{ text: "勉強", ruby: "べんきょう" }, { text: "しないと" }, { text: "試験", ruby: "しけん" }, { text: "に" }, { text: "落", ruby: "お" }, { text: "ちます。" }], translation: "Si no estudias, reprobarás el examen." },
    ],
    restrictions: [
      "La cláusula B NO puede expresar voluntad, petición, invitación u orden.",
      "NO se usa con ください, ましょう, 〜たい, 〜てください.",
      "El resultado debe ser automático o inevitable.",
    ],
    whenNotToUse: "Evita と cuando quieras pedir algo, invitar o expresar tu intención. ❌ 時間があると来てください。 ✓ 時間があったら来てください。",
  },

  // ─── ば ──────────────────────────────────────────────────────────────────
  {
    key: "ba",
    jp: "ば",
    romaji: "ba",
    title: "Hipotético / general",
    summary: "Condicional más formal y abstracto. Frecuente en refranes y expresiones fijas.",
    color: "#A5D6A7",
    accent: "#2E7D32",
    mainUse: "Se usa para condiciones hipotéticas generales o abstractas. Muy común en refranes, expresiones fijas, y cuando el hablante enfatiza la condición misma.",
    formation: [
      { type: "Verbo Godan",   example: "行く",   rule: "Morfema al escalón え + ば",          result: "行けば",        negative: "行かなければ" },
      { type: "Verbo Ichidan", example: "食べる", rule: "Quitar る + れば",                     result: "食べれば",      negative: "食べなければ" },
      { type: "Verbo する",    example: "する",   rule: "Irregular",                            result: "すれば",        negative: "しなければ" },
      { type: "Verbo くる",    example: "くる",   rule: "Irregular",                            result: "くれば",        negative: "こなければ" },
      { type: "い-adjetivo",   example: "高い",   rule: "Quitar い + ければ",                   result: "高ければ",      negative: "高くなければ" },
      { type: "な-adjetivo",   example: "静か",   rule: "Sustantivo + ならば (ば es opcional)", result: "静かならば",    negative: "静かでなければ" },
      { type: "Sustantivo",    example: "学生",   rule: "Sustantivo + ならば",                  result: "学生ならば",    negative: "学生でなければ" },
    ],
    examples: [
      { segments: [{ text: "雨", ruby: "あめ" }, { text: "が" }, { text: "降", ruby: "ふ" }, { text: "れば、" }, { text: "試合", ruby: "しあい" }, { text: "は" }, { text: "中止", ruby: "ちゅうし" }, { text: "です。" }], translation: "Si llueve, el partido se cancelará." },
      { segments: [{ text: "安", ruby: "やす" }, { text: "ければ" }, { text: "買", ruby: "か" }, { text: "います。" }], translation: "Si es barato, lo compraré." },
      { segments: [{ text: "時間", ruby: "じかん" }, { text: "があれば、" }, { text: "手伝", ruby: "てつだ" }, { text: "います。" }], translation: "Si tengo tiempo, ayudaré." },
      { segments: [{ text: "急", ruby: "いそ" }, { text: "がなければ" }, { text: "間", ruby: "ま" }, { text: "に" }, { text: "合", ruby: "あ" }, { text: "いません。" }], translation: "Si no te apuras, no llegaremos a tiempo.", note: "Este patrón 〜なければ + neg. es muy común para 'si no X, entonces Y'." },
    ],
    restrictions: [
      "La cláusula principal NO suele expresar acciones pasadas.",
      "Con verbos de estado/existencia se siente más natural.",
      "Menos usado en conversación cotidiana que たら — suena más formal o literario.",
    ],
    whenNotToUse: "Evita ば para eventos específicos o secuencias de acciones en el pasado. ❌ 昨日雨が降れば家にいました。 ✓ 昨日雨が降ったら家にいました。",
  },

  // ─── たら ─────────────────────────────────────────────────────────────────
  {
    key: "tara",
    jp: "たら",
    romaji: "tara",
    title: "Temporal / versátil",
    summary: "El más flexible y usado. Cuando dudes, usa たら.",
    color: "#FFAB40",
    accent: "#E65100",
    mainUse: "Expresa condición o secuencia temporal ('cuando/si A, entonces B'). Es el más usado en conversación porque acepta prácticamente cualquier cláusula principal, incluyendo voluntad, petición, orden o invitación.",
    formation: [
      { type: "Verbo",         example: "行く",   rule: "Forma た + ら",                        result: "行ったら",      negative: "行かなかったら" },
      { type: "Verbo",         example: "食べる", rule: "Forma た + ら",                        result: "食べたら",      negative: "食べなかったら" },
      { type: "い-adjetivo",   example: "高い",   rule: "Quitar い + かったら",                 result: "高かったら",    negative: "高くなかったら" },
      { type: "な-adjetivo",   example: "静か",   rule: "Sustantivo + だったら",                result: "静かだったら",  negative: "静かじゃなかったら" },
      { type: "Sustantivo",    example: "学生",   rule: "Sustantivo + だったら",                result: "学生だったら",  negative: "学生じゃなかったら" },
    ],
    examples: [
      { segments: [{ text: "時間", ruby: "じかん" }, { text: "があったら、" }, { text: "映画", ruby: "えいが" }, { text: "を" }, { text: "見", ruby: "み" }, { text: "ましょう。" }], translation: "Si tenemos tiempo, veamos una película.", note: "Nota cómo aquí sí se puede usar ましょう — cosa que con と es imposible." },
      { segments: [{ text: "駅", ruby: "えき" }, { text: "に" }, { text: "着", ruby: "つ" }, { text: "いたら" }, { text: "電話", ruby: "でんわ" }, { text: "してください。" }], translation: "Cuando llegues a la estación, llámame por favor.", note: "Petición con てください — solo funciona con たら." },
      { segments: [{ text: "日本", ruby: "にほん" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "ったら、" }, { text: "寿司", ruby: "すし" }, { text: "を" }, { text: "食", ruby: "た" }, { text: "べたいです。" }], translation: "Cuando vaya a Japón, quiero comer sushi." },
      { segments: [{ text: "家", ruby: "いえ" }, { text: "に" }, { text: "帰", ruby: "かえ" }, { text: "ったら、" }, { text: "手紙", ruby: "てがみ" }, { text: "がありました。" }], translation: "Cuando llegué a casa, había una carta.", note: "Uso temporal: 'cuando X sucedió, descubrí/encontré Y'." },
    ],
    restrictions: [
      "Es el más flexible — acepta voluntad, petición, orden, invitación en la cláusula principal.",
      "También puede usarse para eventos pasados descubiertos ('cuando hice X, resultó que Y').",
      "En contextos muy formales o literarios, ば o と pueden sonar más apropiados.",
    ],
    whenNotToUse: "Evita たら solo cuando quieras enfatizar el carácter hipotético general (ば) o la inevitabilidad automática (と). En el 95% de los casos de conversación, たら es la opción correcta.",
  },

  // ─── なら ─────────────────────────────────────────────────────────────────
  {
    key: "nara",
    jp: "なら",
    romaji: "nara",
    title: "Contextual / de confirmación",
    summary: "Si es el caso que... Se basa en información que acabas de escuchar.",
    color: "#CE93D8",
    accent: "#6A1B9A",
    mainUse: "Se usa cuando el hablante toma como premisa algo que el otro acaba de decir o que se asume como contexto. Equivale a 'si es así que...', 'en ese caso...', 'si vas a...'.",
    formation: [
      { type: "Verbo",         example: "行く",   rule: "Forma diccionario + なら",             result: "行くなら",      negative: "行かないなら" },
      { type: "い-adjetivo",   example: "高い",   rule: "Forma diccionario + なら",             result: "高いなら",      negative: "高くないなら" },
      { type: "な-adjetivo",   example: "静か",   rule: "Sustantivo + なら (SIN だ)",           result: "静かなら",      negative: "静かじゃないなら" },
      { type: "Sustantivo",    example: "学生",   rule: "Sustantivo + なら (SIN だ)",           result: "学生なら",      negative: "学生じゃないなら" },
    ],
    examples: [
      { segments: [{ text: "日本", ruby: "にほん" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "くなら、" }, { text: "京都", ruby: "きょうと" }, { text: "がおすすめです。" }], translation: "Si vas a Japón, te recomiendo Kioto.", note: "El otro mencionó que irá a Japón — por eso usamos なら." },
      { segments: [{ text: "寿司", ruby: "すし" }, { text: "なら、あの" }, { text: "店", ruby: "みせ" }, { text: "がおいしいです。" }], translation: "Si hablamos de sushi, ese restaurante está delicioso.", note: "Respuesta a alguien que mencionó querer sushi." },
      { segments: [{ text: "安", ruby: "やす" }, { text: "いなら" }, { text: "買", ruby: "か" }, { text: "います。" }], translation: "Si es barato (como dices), lo compro." },
      { segments: [{ text: "忙", ruby: "いそが" }, { text: "しいなら、" }, { text: "手伝", ruby: "てつだ" }, { text: "いましょうか。" }], translation: "Si estás ocupado, ¿te ayudo?", note: "Se basa en la situación del otro que ya conocemos." },
    ],
    restrictions: [
      "Requiere un contexto previo — información dada por el interlocutor o la situación.",
      "La cláusula B (resultado) puede ocurrir ANTES que A en el tiempo real.",
      "Con sustantivos y な-adjetivos NO lleva だ (ni ならば formal).",
    ],
    whenNotToUse: "Evita なら cuando no hay contexto previo ni premisa asumida. Si simplemente quieres decir 'si llueve, no salgo' (sin que nadie haya mencionado la lluvia), usa たら o ば.",
  },
];

// ─── Comparison matrix ──────────────────────────────────────────────────────

export interface ComparisonMatrixRow {
  feature: string;
  to: "✓" | "✗" | string;
  ba: "✓" | "✗" | string;
  tara: "✓" | "✗" | string;
  nara: "✓" | "✗" | string;
  note?: string;
}

export const COMPARISON_MATRIX: ComparisonMatrixRow[] = [
  { feature: "Resultado automático / natural",       to: "✓", ba: "✓", tara: "✓", nara: "✗" },
  { feature: "Condición hipotética general",         to: "✓", ba: "✓", tara: "✓", nara: "✗" },
  { feature: "Secuencia temporal (cuando...)",       to: "✗", ba: "✗", tara: "✓", nara: "✗" },
  { feature: "Voluntad / invitación (ましょう)",     to: "✗", ba: "△", tara: "✓", nara: "✓" },
  { feature: "Petición (てください)",                to: "✗", ba: "△", tara: "✓", nara: "✓" },
  { feature: "Orden (命令形)",                       to: "✗", ba: "△", tara: "✓", nara: "✓" },
  { feature: "Basado en info del interlocutor",      to: "✗", ba: "✗", tara: "△", nara: "✓" },
  { feature: "Resultado antes que la condición",     to: "✗", ba: "✗", tara: "✗", nara: "✓" },
  { feature: "Uso en conversación cotidiana",        to: "△", ba: "△", tara: "✓", nara: "✓" },
];

// ─── Side-by-side example ────────────────────────────────────────────────────

export interface SideBySideExample {
  cond: "to" | "ba" | "tara" | "nara";
  sentence: RubySegment[];
  translation: string;
  nuance: string;
}

export const SIDE_BY_SIDE: {
  topic: string;
  base: string;
  variations: SideBySideExample[];
}[] = [
  {
    topic: "春になる〜桜が咲きます",
    base: "Mismo contenido, distinto matiz de condicional",
    variations: [
      {
        cond: "to",
        sentence: [{ text: "春", ruby: "はる" }, { text: "になると" }, { text: "桜", ruby: "さくら" }, { text: "が" }, { text: "咲", ruby: "さ" }, { text: "きます。" }],
        translation: "Cuando llega la primavera, florecen los cerezos.",
        nuance: "Ley natural automática — siempre ocurre así.",
      },
      {
        cond: "ba",
        sentence: [{ text: "春", ruby: "はる" }, { text: "になれば" }, { text: "桜", ruby: "さくら" }, { text: "が" }, { text: "咲", ruby: "さ" }, { text: "きます。" }],
        translation: "Si llega la primavera, florecen los cerezos.",
        nuance: "Condición hipotética general — formal o literario.",
      },
      {
        cond: "tara",
        sentence: [{ text: "春", ruby: "はる" }, { text: "になったら" }, { text: "桜", ruby: "さくら" }, { text: "が" }, { text: "咲", ruby: "さ" }, { text: "きます。" }],
        translation: "Cuando/si llega la primavera, florecen los cerezos.",
        nuance: "Temporal o hipotético — el más neutro y conversacional.",
      },
      {
        cond: "nara",
        sentence: [{ text: "春", ruby: "はる" }, { text: "になるなら" }, { text: "旅行", ruby: "りょこう" }, { text: "したいです。" }],
        translation: "Si (es el caso que) llega la primavera, quiero viajar.",
        nuance: "Basado en contexto previo — 'si hablamos de que llegue la primavera'.",
      },
    ],
  },
  {
    topic: "Ir a Japón",
    base: "Cómo cambia el énfasis según el condicional",
    variations: [
      {
        cond: "tara",
        sentence: [{ text: "日本", ruby: "にほん" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "ったら、" }, { text: "寿司", ruby: "すし" }, { text: "を" }, { text: "食", ruby: "た" }, { text: "べます。" }],
        translation: "Cuando vaya a Japón, comeré sushi.",
        nuance: "Secuencia: primero llegar, después comer. El más natural aquí.",
      },
      {
        cond: "nara",
        sentence: [{ text: "日本", ruby: "にほん" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "くなら、" }, { text: "寿司", ruby: "すし" }, { text: "を" }, { text: "食", ruby: "た" }, { text: "べてください。" }],
        translation: "Si vas a Japón, come sushi (por favor).",
        nuance: "Recomendación basada en que el otro ya anunció su viaje.",
      },
      {
        cond: "ba",
        sentence: [{ text: "日本", ruby: "にほん" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "けば、" }, { text: "日本語", ruby: "にほんご" }, { text: "が" }, { text: "上手", ruby: "じょうず" }, { text: "になります。" }], translation: "Si vas a Japón, tu japonés mejorará.",
        nuance: "Condición hipotética más abstracta — beneficio general.",
      },
    ],
  },
];