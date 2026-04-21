// src/data/grammar/expresiones.ts

import type { RubySegment } from "@/app/components/ui/Ruby";

export type JlptLevel = "N5" | "N4" | "N3" | "N2" | "N1";

export type ExpressionCategory =
  | "deseo"
  | "peticion"
  | "permiso"
  | "prohibicion"
  | "invitacion"
  | "progreso"
  | "secuencia"
  | "ejemplos"
  | "experiencia"
  | "intencion"
  | "obligacion"
  | "plan"
  | "apariencia"
  | "cambio"
  | "razon"
  | "contraste"
  | "intento"
  | "decision"
  | "objetivo"
  | "resultado"
  | "tiempo"
  | "frecuencia"
  | "causa"
  | "comparacion"
  | "limite"
  | "juicio"
  | "inferencia"
  | "restriccion"
  | "formal"
  | "avanzado";

export type ExpressionRegister = "casual" | "polite" | "formal" | "written";
export type Importance = "core" | "high" | "medium";
export type ExerciseMode =
  | "choose_expression"
  | "fill_blank"
  | "nuance_match"
  | "sentence_build"
  | "transformation"
  | "reading_focus";

/**
 * Example sentence for an expression.
 * Uses the same shape as particles/verbs so RubyText renders furigana when provided.
 * To add furigana, split the text into multiple segments with optional `ruby` per segment.
 *
 * Example (plain):
 *   { segments: [{ text: "日本へ行きたいです。" }], translation: "Quiero ir a Japón." }
 *
 * Example (with furigana):
 *   { segments: [
 *       { text: "日本", ruby: "にほん" },
 *       { text: "へ" },
 *       { text: "行", ruby: "い" },
 *       { text: "きたいです。" }
 *     ], translation: "Quiero ir a Japón." }
 */
export interface ExpressionExample {
  segments: RubySegment[];
  translation: string;
}

/**
 * Reference to a compared expression.
 * If `id` is present, the UI renders it as a link to that expression's detail page.
 * If only `pattern` is present, it renders as a text chip (the referenced expression
 * doesn't exist in the catalog yet).
 */
export interface CompareRef {
  pattern: string;
  id?: string;
}

export interface ExpressionQuizSeed {
  type: ExerciseMode;
  prompt: string;
  answer: string;
  distractors: string[];
  explanation: string;
}

export interface ExpressionFormation {
  segments: RubySegment[];
}

export interface ExpressionItem {
  id: string;
  level: JlptLevel;
  order: number;
  pattern: string;
  title: string;
  meaning: string;
  nuance: string;
  formation: ExpressionFormation[];
  category: ExpressionCategory;
  register: ExpressionRegister[];
  importance: Importance;
  tags: string[];
  compareWith: CompareRef[];
  caution: string;
  examples: ExpressionExample[];
  quizSeeds: ExpressionQuizSeed[];
  ui: {
    groupLabel: JlptLevel;
    accent: string;
  };
}

export interface ExerciseBlueprint {
  id: ExerciseMode;
  label: string;
  description: string;
  inputMode: string;
}

export interface PracticeSet {
  id: string;
  label: string;
  level: JlptLevel;
  expressionIds: string[];
  recommendedModes: string[];
}

export interface ChallengeIdea {
  id: string;
  label: string;
  description: string;
}



function ruby(input: string): RubySegment[] {
  const regex = /\[([^\]|]+)\|([^\]]+)\]/g;
  const segments: RubySegment[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(input)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ text: input.slice(lastIndex, match.index) });
    }

    segments.push({ text: match[1], ruby: match[2] });
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < input.length) {
    segments.push({ text: input.slice(lastIndex) });
  }

  return segments;
}

export interface ExpressionCatalog {
  version: string;
  title: string;
  description: string;
  note: string;
  levels: JlptLevel[];
  exerciseBlueprints: ExerciseBlueprint[];
  ui: {
    levelOrder: JlptLevel[];
    categoryOrder: ExpressionCategory[];
    filters: string[];
    defaultLevel: JlptLevel;
    defaultSort: string;
  };
  expressions: ExpressionItem[];
  practiceSets: PracticeSet[];
  challengeIdeas: ChallengeIdea[];
}

export const EXPRESSIONS_CATALOG: ExpressionCatalog = {
  "version": "1.0.0",
  "title": "Japanese Expressions Catalog",
  "description": "Curated catalog of high-value Japanese expressions grouped by JLPT study level for app use.",
  "note": "JLPT labels are practical study-level approximations and can vary slightly across resources.",
  "levels": [
    "N5",
    "N4",
    "N3",
    "N2",
    "N1"
  ],
  "exerciseBlueprints": [
    {
      "id": "choose_expression",
      "label": "Elegir la expresión correcta",
      "description": "Se presenta un contexto y varias expresiones posibles; el usuario elige la mejor.",
      "inputMode": "multiple_choice"
    },
    {
      "id": "fill_blank",
      "label": "Completar el espacio",
      "description": "Se muestra una oración con hueco y el usuario completa con la expresión adecuada.",
      "inputMode": "typed_or_choice"
    },
    {
      "id": "nuance_match",
      "label": "Elegir por matiz",
      "description": "Se comparan expresiones parecidas y el usuario selecciona la que mejor calza con la intención.",
      "inputMode": "multiple_choice"
    },
    {
      "id": "sentence_build",
      "label": "Construir la oración",
      "description": "Se reordenan fragmentos para formar una oración correcta con la expresión meta.",
      "inputMode": "reorder"
    },
    {
      "id": "transformation",
      "label": "Transformación",
      "description": "Se transforma una oración base para obligar a usar una expresión específica.",
      "inputMode": "typed"
    },
    {
      "id": "reading_focus",
      "label": "Lectura guiada",
      "description": "El usuario detecta la expresión objetivo dentro de una oración o mini párrafo y explica su matiz.",
      "inputMode": "identify_and_explain"
    }
  ],
  "ui": {
    "levelOrder": [
      "N5",
      "N4",
      "N3",
      "N2",
      "N1"
    ],
    "categoryOrder": [
      "deseo",
      "peticion",
      "permiso",
      "prohibicion",
      "invitacion",
      "progreso",
      "secuencia",
      "ejemplos",
      "experiencia",
      "intencion",
      "obligacion",
      "plan",
      "apariencia",
      "cambio",
      "razon",
      "contraste",
      "intento",
      "decision",
      "objetivo",
      "resultado",
      "tiempo",
      "frecuencia",
      "causa",
      "comparacion",
      "limite",
      "juicio",
      "inferencia",
      "restriccion",
      "formal",
      "avanzado"
    ],
    "filters": [
      "level",
      "category",
      "register",
      "importance",
      "tags"
    ],
    "defaultLevel": "N5",
    "defaultSort": "level_then_order"
  },
  "expressions": [
    {
      "id": "n5-tai",
      "level": "N5",
      "order": 1,
      "pattern": "Vます + たい",
      "title": "Deseo personal",
      "meaning": "querer hacer algo",
      "nuance": "Expresa el deseo del hablante de realizar una acción.",
      "formation": [
        {
          "segments": ruby("[食|た]べます → [食|た]べたい")
        },
        {
          "segments": ruby("[行|い]きます → [行|い]きたい")
        }
      ],
      "category": "deseo",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "core",
      "tags": [
        "deseo",
        "voluntad",
        "basico"
      ],
      "compareWith": [
        {
          "pattern": "〜ほしい",
          "id": "n5-hoshii"
        }
      ],
      "caution": "No se usa normalmente para describir con naturalidad el deseo directo de otra persona.",
      "examples": [
        {
          "segments": ruby("[日本|にほん]へ[行|い]きたいです。"),
          "translation": "Quiero ir a Japón."
        },
        {
          "segments": ruby("[今日|きょう]は[早|はや]く[寝|ね]たい。"),
          "translation": "Hoy quiero dormir temprano."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Quieres decir 'quiero aprender japonés este año'. ¿Qué expresión encaja mejor?",
          "answer": "〜たい",
          "distractors": [
            "〜予定",
            "〜てしまう",
            "〜そうだ"
          ],
          "explanation": "〜たい expresa deseo propio."
        }
      ],
      "ui": {
        "groupLabel": "N5",
        "accent": "#22C55E"
      }
    },
    {
      "id": "n5-tekudasai",
      "level": "N5",
      "order": 2,
      "pattern": "Vて + ください",
      "title": "Petición directa",
      "meaning": "por favor, haz...",
      "nuance": "Se usa para pedir algo de manera directa pero estándar.",
      "formation": [
        {
          "segments": ruby("[読|よ]んでください")
        },
        {
          "segments": ruby("[待|ま]ってください")
        }
      ],
      "category": "peticion",
      "register": [
        "polite"
      ],
      "importance": "core",
      "tags": [
        "peticion",
        "imperativo-suave",
        "servicio"
      ],
      "compareWith": [
        {
          "pattern": "〜てもらえませんか"
        },
        {
          "pattern": "〜てくれ"
        }
      ],
      "caution": "Más suave que una orden, pero puede sonar directo según el contexto.",
      "examples": [
        {
          "segments": ruby("ここに[名前|なまえ]を[書|か]いてください。"),
          "translation": "Por favor escriba su nombre aquí."
        },
        {
          "segments": ruby("[少|すこ]し[待|ま]ってください。"),
          "translation": "Por favor espere un momento."
        }
      ],
      "quizSeeds": [
        {
          "type": "fill_blank",
          "prompt": "少し ______。 (Por favor espere un poco)",
          "answer": "待ってください",
          "distractors": [
            "待ちたい",
            "待たなくてもいい",
            "待ってしまう"
          ],
          "explanation": "Para pedir una acción se usa Vてください."
        }
      ],
      "ui": {
        "groupLabel": "N5",
        "accent": "#22C55E"
      }
    },
    {
      "id": "n5-temoii",
      "level": "N5",
      "order": 3,
      "pattern": "Vても + いい",
      "title": "Permiso",
      "meaning": "poder hacer algo / está bien si...",
      "nuance": "Sirve para pedir o conceder permiso.",
      "formation": [
        {
          "segments": ruby("[入|はい]ってもいいですか")
        },
        {
          "segments": ruby("[食|た]べてもいい")
        }
      ],
      "category": "permiso",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "core",
      "tags": [
        "permiso",
        "autorizacion"
      ],
      "compareWith": [
        {
          "pattern": "〜てはいけない",
          "id": "n5-tehaikenai"
        },
        {
          "pattern": "〜なくてもいい",
          "id": "n4-nakutemoii"
        }
      ],
      "caution": "Con pregunta suele usarse para pedir permiso; en afirmativa, para concederlo.",
      "examples": [
        {
          "segments": ruby("ここで[写真|しゃしん]を[撮|と]ってもいいですか。"),
          "translation": "¿Puedo sacar fotos aquí?"
        },
        {
          "segments": ruby("もう[帰|かえ]ってもいいよ。"),
          "translation": "Ya te puedes ir."
        }
      ],
      "quizSeeds": [
        {
          "type": "nuance_match",
          "prompt": "Quieres pedir permiso para abrir la ventana. ¿Qué patrón corresponde?",
          "answer": "〜てもいいですか",
          "distractors": [
            "〜てはいけません",
            "〜たいです",
            "〜てから"
          ],
          "explanation": "〜てもいいですか se usa para pedir permiso."
        }
      ],
      "ui": {
        "groupLabel": "N5",
        "accent": "#22C55E"
      }
    },
    {
      "id": "n5-tehaikenai",
      "level": "N5",
      "order": 4,
      "pattern": "Vては + いけない",
      "title": "Prohibición",
      "meaning": "no se debe / no está permitido",
      "nuance": "Marca prohibición, regla o algo socialmente incorrecto.",
      "formation": [
        {
          "segments": ruby("[入|はい]ってはいけません")
        },
        {
          "segments": ruby("[忘|わす]れてはいけない")
        }
      ],
      "category": "prohibicion",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "core",
      "tags": [
        "prohibicion",
        "reglas"
      ],
      "compareWith": [
        {
          "pattern": "〜てもいい",
          "id": "n5-temoii"
        },
        {
          "pattern": "〜なくてもいい",
          "id": "n4-nakutemoii"
        }
      ],
      "caution": "En conversación casual también aparecen variantes como ちゃだめ / てはだめ.",
      "examples": [
        {
          "segments": ruby("ここでタバコを[吸|す]ってはいけません。"),
          "translation": "No se debe fumar aquí."
        },
        {
          "segments": ruby("[大事|だいじ]な[約束|やくそく]を[忘|わす]れてはいけない。"),
          "translation": "No debes olvidar una promesa importante."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Hay un cartel que dice 'No se puede entrar'. ¿Qué estructura corresponde?",
          "answer": "〜てはいけない / 〜てはいけません",
          "distractors": [
            "〜てもいい",
            "〜たい",
            "〜ましょう"
          ],
          "explanation": "La prohibición se expresa con 〜てはいけない."
        }
      ],
      "ui": {
        "groupLabel": "N5",
        "accent": "#22C55E"
      }
    },
    {
      "id": "n5-mashou",
      "level": "N5",
      "order": 5,
      "pattern": "Vます + ましょう",
      "title": "Invitación / propuesta",
      "meaning": "hagamos...",
      "nuance": "Invita a hacer algo juntos o propone una acción.",
      "formation": [
        {
          "segments": ruby("[行|い]きましょう")
        },
        {
          "segments": ruby("[食|た]べましょう")
        }
      ],
      "category": "invitacion",
      "register": [
        "polite"
      ],
      "importance": "core",
      "tags": [
        "invitacion",
        "propuesta"
      ],
      "compareWith": [
        {
          "pattern": "〜ませんか",
          "id": "n5-masenka"
        }
      ],
      "caution": "〜ましょう suena más afirmativo; 〜ませんか invita de forma más abierta.",
      "examples": [
        {
          "segments": ruby("[一緒|いっしょ]に[昼|ひる]ご[飯|はん]を[食|た]べましょう。"),
          "translation": "Comamos almuerzo juntos."
        },
        {
          "segments": ruby("[次|つぎ]のページを[見|み]ましょう。"),
          "translation": "Veamos la siguiente página."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Quieres proponer 'Vamos ahora'. ¿Cuál es mejor?",
          "answer": "〜ましょう",
          "distractors": [
            "〜たい",
            "〜そうだ",
            "〜たことがある"
          ],
          "explanation": "〜ましょう expresa propuesta compartida."
        }
      ],
      "ui": {
        "groupLabel": "N5",
        "accent": "#22C55E"
      }
    },
    {
      "id": "n5-masenka",
      "level": "N5",
      "order": 6,
      "pattern": "Vます + ませんか",
      "title": "Invitación suave",
      "meaning": "¿no quieres...? / ¿te gustaría...?",
      "nuance": "Es una invitación más suave y abierta que 〜ましょう.",
      "formation": [
        {
          "segments": ruby("[行|い]きませんか")
        },
        {
          "segments": ruby("[飲|の]みませんか")
        }
      ],
      "category": "invitacion",
      "register": [
        "polite"
      ],
      "importance": "core",
      "tags": [
        "invitacion",
        "propuesta-suave"
      ],
      "compareWith": [
        {
          "pattern": "〜ましょう",
          "id": "n5-mashou"
        }
      ],
      "caution": "Es muy común para invitar sin sonar impositivo.",
      "examples": [
        {
          "segments": ruby("[週末|しゅうまつ]に[映画|えいが]を[見|み]に[行|い]きませんか。"),
          "translation": "¿No quieres ir a ver una película el fin de semana?"
        },
        {
          "segments": ruby("[少|すこ]し[休|やす]みませんか。"),
          "translation": "¿Descansamos un poco?"
        }
      ],
      "quizSeeds": [
        {
          "type": "nuance_match",
          "prompt": "Quieres invitar de forma amable, dejando espacio para que la otra persona diga no. ¿Qué eliges?",
          "answer": "〜ませんか",
          "distractors": [
            "〜ましょう",
            "〜てください",
            "〜なければならない"
          ],
          "explanation": "〜ませんか suena más suave que 〜ましょう."
        }
      ],
      "ui": {
        "groupLabel": "N5",
        "accent": "#22C55E"
      }
    },
    {
      "id": "n5-teiru",
      "level": "N5",
      "order": 7,
      "pattern": "Vて + いる",
      "title": "Progreso / estado",
      "meaning": "estar haciendo / estar en cierto estado",
      "nuance": "Puede indicar acción en progreso o resultado/estado continuo, según el verbo.",
      "formation": [
        {
          "segments": ruby("[食|た]べている")
        },
        {
          "segments": ruby("[住|す]んでいる")
        },
        {
          "segments": ruby("[結婚|けっこん]している")
        }
      ],
      "category": "progreso",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "core",
      "tags": [
        "progreso",
        "estado",
        "presente-continuo"
      ],
      "compareWith": [
        {
          "pattern": "〜てある"
        },
        {
          "pattern": "〜ていく"
        }
      ],
      "caution": "No todos los verbos se interpretan igual: 知っている es 'saber', no 'estar sabiendo'.",
      "examples": [
        {
          "segments": ruby("[今|いま]、[本|ほん]を[読|よ]んでいます。"),
          "translation": "Ahora estoy leyendo un libro."
        },
        {
          "segments": ruby("[仙台|せんだい]に[住|す]んでいます。"),
          "translation": "Vivo en Sendai."
        }
      ],
      "quizSeeds": [
        {
          "type": "fill_blank",
          "prompt": "今、勉強 ______。",
          "answer": "しています",
          "distractors": [
            "したいです",
            "しましょう",
            "してから"
          ],
          "explanation": "Para una acción en progreso se usa 〜ている."
        }
      ],
      "ui": {
        "groupLabel": "N5",
        "accent": "#22C55E"
      }
    },
    {
      "id": "n5-tekara",
      "level": "N5",
      "order": 8,
      "pattern": "Vて + から",
      "title": "Secuencia",
      "meaning": "después de hacer...",
      "nuance": "Marca que una acción ocurre después de completar otra.",
      "formation": [
        {
          "segments": ruby("[食|た]べてから")
        },
        {
          "segments": ruby("[帰|かえ]ってから")
        }
      ],
      "category": "secuencia",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "core",
      "tags": [
        "tiempo",
        "secuencia",
        "orden"
      ],
      "compareWith": [
        {
          "pattern": "あとで"
        },
        {
          "pattern": "前に"
        }
      ],
      "caution": "Destaca más la secuencia completada entre dos acciones.",
      "examples": [
        {
          "segments": ruby("[宿題|しゅくだい]をしてから[寝|ね]ます。"),
          "translation": "Duermo después de hacer la tarea."
        },
        {
          "segments": ruby("[日本|にほん]に[来|き]てから、[日本語|にほんご]をもっと[勉強|べんきょう]しています。"),
          "translation": "Desde que vine a Japón, estudio más japonés."
        }
      ],
      "quizSeeds": [
        {
          "type": "sentence_build",
          "prompt": "Ordena para decir: 'Después de cenar, estudiaré'.",
          "answer": "晩ご飯を食べてから勉強します。",
          "distractors": [
            "晩ご飯を食べたい勉強します",
            "晩ご飯を食べてもいい勉強します"
          ],
          "explanation": "〜てから une dos acciones en secuencia."
        }
      ],
      "ui": {
        "groupLabel": "N5",
        "accent": "#22C55E"
      }
    },
    {
      "id": "n5-tari",
      "level": "N5",
      "order": 9,
      "pattern": "Vたり〜Vたりする",
      "title": "Ejemplos no exhaustivos",
      "meaning": "hacer cosas como... y...",
      "nuance": "Enumera acciones representativas, no una lista completa.",
      "formation": [
        {
          "segments": ruby("[食|た]べたり[飲|の]んだりする")
        },
        {
          "segments": ruby("[行|い]ったり[来|き]たりする")
        }
      ],
      "category": "ejemplos",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "core",
      "tags": [
        "listado",
        "ejemplos",
        "acciones"
      ],
      "compareWith": [
        {
          "pattern": "〜や"
        },
        {
          "pattern": "〜し",
          "id": "n4-shi"
        }
      ],
      "caution": "Las acciones deben ir en la forma たり.",
      "examples": [
        {
          "segments": ruby("[週末|しゅうまつ]は[映画|えいが]を[見|み]たり、[音楽|おんがく]を[聞|き]いたりします。"),
          "translation": "Los fines de semana hago cosas como ver películas y escuchar música."
        },
        {
          "segments": ruby("[休|やす]みの[日|ひ]は[掃除|そうじ]したり[洗濯|せんたく]したりします。"),
          "translation": "En mis días libres hago cosas como limpiar y lavar ropa."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Quieres decir 'los domingos hago cosas como leer y descansar'. ¿Qué patrón sirve?",
          "answer": "〜たり〜たりする",
          "distractors": [
            "〜てから",
            "〜てもいい",
            "〜なければならない"
          ],
          "explanation": "Para enumerar ejemplos parciales se usa 〜たり〜たりする."
        }
      ],
      "ui": {
        "groupLabel": "N5",
        "accent": "#22C55E"
      }
    },
    {
      "id": "n5-takoto",
      "level": "N5",
      "order": 10,
      "pattern": "Vた + ことがある",
      "title": "Experiencia",
      "meaning": "haber hecho algo alguna vez",
      "nuance": "Habla de experiencias en la vida hasta el momento.",
      "formation": [
        {
          "segments": ruby("[行|い]ったことがある")
        },
        {
          "segments": ruby("[食|た]べたことがある")
        }
      ],
      "category": "experiencia",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "core",
      "tags": [
        "experiencia",
        "pasado"
      ],
      "compareWith": [
        {
          "pattern": "〜ことにする",
          "id": "n3-kotoni-suru"
        },
        {
          "pattern": "〜たばかり"
        }
      ],
      "caution": "No describe una acción puntual de ayer; describe experiencia acumulada.",
      "examples": [
        {
          "segments": ruby("[富士山|ふじさん]に[登|のぼ]ったことがあります。"),
          "translation": "He subido el monte Fuji alguna vez."
        },
        {
          "segments": ruby("[納豆|なっとう]を[食|た]べたことがないです。"),
          "translation": "Nunca he comido natto."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Quieres decir 'he probado sushi una vez'. ¿Qué estructura corresponde?",
          "answer": "〜たことがある",
          "distractors": [
            "〜ている",
            "〜そうだ",
            "〜予定だ"
          ],
          "explanation": "La experiencia pasada se expresa con 〜たことがある."
        }
      ],
      "ui": {
        "groupLabel": "N5",
        "accent": "#22C55E"
      }
    },
    {
      "id": "n5-tsumori",
      "level": "N5",
      "order": 11,
      "pattern": "Vる / Vない + つもりだ",
      "title": "Intención",
      "meaning": "tener la intención de...",
      "nuance": "Expresa intención o plan mental del hablante.",
      "formation": [
        {
          "segments": ruby("[行|い]くつもりだ")
        },
        {
          "segments": ruby("[行|い]かないつもりだ")
        }
      ],
      "category": "intencion",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "core",
      "tags": [
        "intencion",
        "plan",
        "voluntad"
      ],
      "compareWith": [
        {
          "pattern": "〜予定だ",
          "id": "n4-yotei"
        },
        {
          "pattern": "〜ようと思う",
          "id": "n4-you-to-omou"
        }
      ],
      "caution": "〜つもり refleja intención personal; 〜予定 puede sonar más planificado/objetivo.",
      "examples": [
        {
          "segments": ruby("[来年|らいねん]、[日本語能力試験|にほんごのうりょくしけん]を[受|う]けるつもりです。"),
          "translation": "Tengo la intención de rendir el JLPT el próximo año."
        },
        {
          "segments": ruby("[今日|きょう]は[外食|がいしょく]しないつもりだ。"),
          "translation": "Hoy no pienso comer fuera."
        }
      ],
      "quizSeeds": [
        {
          "type": "nuance_match",
          "prompt": "Todavía es tu decisión personal, no un horario fijo. ¿Qué encaja mejor?",
          "answer": "〜つもりだ",
          "distractors": [
            "〜予定だ",
            "〜てしまう",
            "〜てはいけない"
          ],
          "explanation": "La intención personal se expresa bien con 〜つもりだ."
        }
      ],
      "ui": {
        "groupLabel": "N5",
        "accent": "#22C55E"
      }
    },
    {
      "id": "n5-hoshii",
      "level": "N5",
      "order": 12,
      "pattern": "N + が + ほしい",
      "title": "Desear una cosa",
      "meaning": "querer un objeto / desear algo",
      "nuance": "Expresa que se quiere un sustantivo, no una acción.",
      "formation": [
        {
          "segments": ruby("[時間|じかん]がほしい")
        },
        {
          "segments": ruby("[新|あたら]しい[本|ほん]がほしい")
        }
      ],
      "category": "deseo",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "core",
      "tags": [
        "deseo",
        "objeto"
      ],
      "compareWith": [
        {
          "pattern": "〜たい",
          "id": "n5-tai"
        }
      ],
      "caution": "Usa 〜たい para verbos y ほしい para sustantivos.",
      "examples": [
        {
          "segments": ruby("[新|あたら]しいパソコンがほしいです。"),
          "translation": "Quiero un computador nuevo."
        },
        {
          "segments": ruby("[今|いま]は[少|すこ]し[休|やす]みがほしい。"),
          "translation": "Ahora quiero un poco de descanso."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Quieres decir 'quiero un diccionario nuevo'. ¿Qué usas?",
          "answer": "Nがほしい",
          "distractors": [
            "Vたい",
            "〜ましょう",
            "〜ている"
          ],
          "explanation": "Cuando quieres un objeto, no una acción, se usa ほしい."
        }
      ],
      "ui": {
        "groupLabel": "N5",
        "accent": "#22C55E"
      }
    },
    {
      "id": "n4-nakerebanaranai",
      "level": "N4",
      "order": 1,
      "pattern": "Vなければ + ならない",
      "title": "Obligación",
      "meaning": "tener que / deber",
      "nuance": "Marca una obligación relativamente fuerte.",
      "formation": [
        {
          "segments": ruby("[行|い]かなければならない")
        },
        {
          "segments": ruby("[勉強|べんきょう]しなければならない")
        }
      ],
      "category": "obligacion",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "core",
      "tags": [
        "obligacion",
        "deber"
      ],
      "compareWith": [
        {
          "pattern": "〜なくてもいい",
          "id": "n4-nakutemoii"
        },
        {
          "pattern": "〜べきだ"
        }
      ],
      "caution": "En conversación se reducen mucho las formas: 〜なきゃ, 〜なくちゃ.",
      "examples": [
        {
          "segments": ruby("[明日|あした]、[早|はや]く[起|お]きなければなりません。"),
          "translation": "Mañana tengo que levantarme temprano."
        },
        {
          "segments": ruby("この[書類|しょるい]を[今日|きょう][出|だ]さなければならない。"),
          "translation": "Tengo que entregar este documento hoy."
        }
      ],
      "quizSeeds": [
        {
          "type": "fill_blank",
          "prompt": "明日、会社へ行か ______。",
          "answer": "なければならない",
          "distractors": [
            "なくてもいい",
            "たい",
            "てしまう"
          ],
          "explanation": "La obligación fuerte se expresa con 〜なければならない."
        }
      ],
      "ui": {
        "groupLabel": "N4",
        "accent": "#3B82F6"
      }
    },
    {
      "id": "n4-nakutemoii",
      "level": "N4",
      "order": 2,
      "pattern": "Vなくても + いい",
      "title": "Ausencia de obligación",
      "meaning": "no es necesario hacer...",
      "nuance": "Indica que algo no hace falta.",
      "formation": [
        {
          "segments": ruby("[行|い]かなくてもいい")
        },
        {
          "segments": ruby("[急|いそ]がなくてもいい")
        }
      ],
      "category": "obligacion",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "core",
      "tags": [
        "permiso",
        "no-obligacion"
      ],
      "compareWith": [
        {
          "pattern": "〜なければならない",
          "id": "n4-nakerebanaranai"
        },
        {
          "pattern": "〜てもいい",
          "id": "n5-temoii"
        }
      ],
      "caution": "No significa prohibición; significa que no es necesario hacerlo.",
      "examples": [
        {
          "segments": ruby("[今日|きょう]は[学校|がっこう]へ[行|い]かなくてもいいです。"),
          "translation": "Hoy no es necesario ir a la escuela."
        },
        {
          "segments": ruby("そんなに[心配|しんぱい]しなくてもいいよ。"),
          "translation": "No hace falta que te preocupes tanto."
        }
      ],
      "quizSeeds": [
        {
          "type": "nuance_match",
          "prompt": "Quieres decir 'no hace falta traer paraguas'. ¿Qué patrón sirve?",
          "answer": "〜なくてもいい",
          "distractors": [
            "〜てはいけない",
            "〜なければならない",
            "〜てしまう"
          ],
          "explanation": "Se usa para ausencia de obligación."
        }
      ],
      "ui": {
        "groupLabel": "N4",
        "accent": "#3B82F6"
      }
    },
    {
      "id": "n4-souda-appearance",
      "level": "N4",
      "order": 3,
      "pattern": "Vます / Adj stem + そうだ",
      "title": "Apariencia",
      "meaning": "parece que... / se ve...",
      "nuance": "Expresa apariencia visual o impresión inmediata.",
      "formation": [
        {
          "segments": ruby("おいしそう")
        },
        {
          "segments": ruby("[雨|あめ]が[降|ふ]りそう")
        }
      ],
      "category": "apariencia",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "core",
      "tags": [
        "apariencia",
        "impresion"
      ],
      "compareWith": [
        {
          "pattern": "〜ようだ"
        },
        {
          "pattern": "〜らしい"
        },
        {
          "pattern": "〜そうだ (dicen)"
        }
      ],
      "caution": "No confundir con そうだ de 'dicen que'.",
      "examples": [
        {
          "segments": ruby("このケーキはおいしそうです。"),
          "translation": "Este pastel se ve delicioso."
        },
        {
          "segments": ruby("もうすぐ[雨|あめ]が[降|ふ]りそうだ。"),
          "translation": "Parece que pronto va a llover."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Ves nubes negras y quieres decir 'parece que va a llover'.",
          "answer": "〜そうだ",
          "distractors": [
            "〜らしい",
            "〜ために",
            "〜ばかり"
          ],
          "explanation": "La apariencia inmediata usa 〜そうだ."
        }
      ],
      "ui": {
        "groupLabel": "N4",
        "accent": "#3B82F6"
      }
    },
    {
      "id": "n4-you-to-omou",
      "level": "N4",
      "order": 4,
      "pattern": "Vよう + と + 思う",
      "title": "Intención en el momento",
      "meaning": "pensar hacer...",
      "nuance": "Muestra una decisión o intención considerada por el hablante.",
      "formation": [
        {
          "segments": ruby("[始|はじ]めようと[思|おも]う")
        },
        {
          "segments": ruby("やめようと[思|おも]う")
        }
      ],
      "category": "intencion",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "high",
      "tags": [
        "intencion",
        "decidir"
      ],
      "compareWith": [
        {
          "pattern": "〜つもりだ",
          "id": "n5-tsumori"
        },
        {
          "pattern": "〜ことにする",
          "id": "n3-kotoni-suru"
        }
      ],
      "caution": "Suele sonar más como decisión mental en proceso que 〜つもりだ.",
      "examples": [
        {
          "segments": ruby("[今年|ことし]から[毎日|まいにち][漢字|かんじ]を[勉強|べんきょう]しようと[思|おも]います。"),
          "translation": "Creo que desde este año estudiaré kanji todos los días."
        },
        {
          "segments": ruby("もう[寝|ね]ようと[思|おも]う。"),
          "translation": "Creo que ya me voy a dormir."
        }
      ],
      "quizSeeds": [
        {
          "type": "nuance_match",
          "prompt": "Quieres expresar una decisión personal que estás formando ahora. ¿Qué eliges?",
          "answer": "〜ようと思う",
          "distractors": [
            "〜予定だ",
            "〜てはいけない",
            "〜そうだ"
          ],
          "explanation": "〜ようと思う transmite decisión/intención pensada."
        }
      ],
      "ui": {
        "groupLabel": "N4",
        "accent": "#3B82F6"
      }
    },
    {
      "id": "n4-yotei",
      "level": "N4",
      "order": 5,
      "pattern": "Vる / Nの + 予定だ",
      "title": "Plan programado",
      "meaning": "tener planeado...",
      "nuance": "Expresa un plan previsto u organizado.",
      "formation": [
        {
          "segments": ruby("[行|い]く[予定|よてい]だ")
        },
        {
          "segments": ruby("[会議|かいぎ]の[予定|よてい]だ")
        }
      ],
      "category": "plan",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "core",
      "tags": [
        "plan",
        "agenda",
        "futuro"
      ],
      "compareWith": [
        {
          "pattern": "〜つもりだ",
          "id": "n5-tsumori"
        },
        {
          "pattern": "〜ことにする",
          "id": "n3-kotoni-suru"
        }
      ],
      "caution": "Suena más objetivo, programado o definido que 〜つもりだ.",
      "examples": [
        {
          "segments": ruby("[来月|らいげつ]、[東京|とうきょう]へ[出張|しゅっちょう]する[予定|よてい]です。"),
          "translation": "Tengo planeado viajar a Tokio por trabajo el próximo mes."
        },
        {
          "segments": ruby("[午後|ごご]は[会議|かいぎ]の[予定|よてい]だ。"),
          "translation": "En la tarde hay una reunión programada."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Ya está agendado que viajarás la próxima semana. ¿Qué expresión encaja mejor?",
          "answer": "〜予定だ",
          "distractors": [
            "〜たい",
            "〜ようにする",
            "〜てしまう"
          ],
          "explanation": "Para planes programados se usa 〜予定だ."
        }
      ],
      "ui": {
        "groupLabel": "N4",
        "accent": "#3B82F6"
      }
    },
    {
      "id": "n4-nagara",
      "level": "N4",
      "order": 6,
      "pattern": "Vます + ながら",
      "title": "Simultaneidad",
      "meaning": "mientras...",
      "nuance": "Describe dos acciones simultáneas hechas por el mismo sujeto.",
      "formation": [
        {
          "segments": ruby("[音楽|おんがく]を[聞|き]きながら[勉強|べんきょう]する")
        },
        {
          "segments": ruby("[歩|ある]きながら[話|はな]す")
        }
      ],
      "category": "tiempo",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "core",
      "tags": [
        "simultaneidad",
        "rutina"
      ],
      "compareWith": [
        {
          "pattern": "〜間に"
        },
        {
          "pattern": "〜うちに",
          "id": "n3-uchini"
        }
      ],
      "caution": "Ambas acciones comparten normalmente el mismo sujeto.",
      "examples": [
        {
          "segments": ruby("[音楽|おんがく]を[聞|き]きながら[勉強|べんきょう]します。"),
          "translation": "Estudio mientras escucho música."
        },
        {
          "segments": ruby("コーヒーを[飲|の]みながら[話|はな]しましょう。"),
          "translation": "Hablemos mientras tomamos café."
        }
      ],
      "quizSeeds": [
        {
          "type": "sentence_build",
          "prompt": "Forma: 'Trabajo mientras escucho un podcast'.",
          "answer": "ポッドキャストを聞きながら仕事します。",
          "distractors": [
            "ポッドキャストを聞いてから仕事します",
            "ポッドキャストを聞いてもいい仕事します"
          ],
          "explanation": "La simultaneidad se expresa con 〜ながら."
        }
      ],
      "ui": {
        "groupLabel": "N4",
        "accent": "#3B82F6"
      }
    },
    {
      "id": "n4-shi",
      "level": "N4",
      "order": 7,
      "pattern": "普通形 + し",
      "title": "Enumerar razones",
      "meaning": "y además / aparte / como...",
      "nuance": "Lista varias razones o características, a veces dejando otras implícitas.",
      "formation": [
        {
          "segments": ruby("[安|やす]いし[便利|べんり]だ")
        },
        {
          "segments": ruby("[忙|いそが]しいし[疲|つか]れた")
        }
      ],
      "category": "razon",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "high",
      "tags": [
        "razones",
        "enumeracion"
      ],
      "compareWith": [
        {
          "pattern": "〜から"
        },
        {
          "pattern": "〜ので",
          "id": "n4-node"
        }
      ],
      "caution": "Muchas veces se usa para dar más de una razón o suavizar una conclusión.",
      "examples": [
        {
          "segments": ruby("この[店|みせ]は[安|やす]いし、おいしいし、よく[行|い]きます。"),
          "translation": "Voy seguido a esta tienda porque es barata, rica y además conveniente."
        },
        {
          "segments": ruby("[今日|きょう]は[寒|さむ]いし、[家|いえ]にいよう。"),
          "translation": "Hoy hace frío y además, mejor quedémonos en casa."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Quieres acumular razones: 'es barato y además rápido'. ¿Qué patrón ayuda?",
          "answer": "〜し",
          "distractors": [
            "〜ながら",
            "〜そうだ",
            "〜ことになる"
          ],
          "explanation": "〜し permite acumular razones o características."
        }
      ],
      "ui": {
        "groupLabel": "N4",
        "accent": "#3B82F6"
      }
    },
    {
      "id": "n4-node",
      "level": "N4",
      "order": 8,
      "pattern": "普通形 / なAな / Nな + ので",
      "title": "Razón suave",
      "meaning": "porque / dado que",
      "nuance": "Da una razón con tono más suave y explicativo que から.",
      "formation": [
        {
          "segments": ruby("[雨|あめ]なので")
        },
        {
          "segments": ruby("[静|しず]かなので")
        },
        {
          "segments": ruby("[疲|つか]れたので")
        }
      ],
      "category": "razon",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "core",
      "tags": [
        "causa",
        "explicacion"
      ],
      "compareWith": [
        {
          "pattern": "〜から"
        },
        {
          "pattern": "〜ものだから",
          "id": "n2-monodakara"
        }
      ],
      "caution": "Muy común en contextos educados o explicativos.",
      "examples": [
        {
          "segments": ruby("[明日|あした]は[仕事|しごと]があるので、[早|はや]く[寝|ね]ます。"),
          "translation": "Como mañana tengo trabajo, dormiré temprano."
        },
        {
          "segments": ruby("[静|しず]かなので、このカフェが[好|す]きです。"),
          "translation": "Me gusta este café porque es tranquilo."
        }
      ],
      "quizSeeds": [
        {
          "type": "nuance_match",
          "prompt": "Quieres dar una razón en tono más suave y explicativo. ¿Cuál conviene más?",
          "answer": "〜ので",
          "distractors": [
            "〜から",
            "〜てしまう",
            "〜ばかり"
          ],
          "explanation": "〜ので suele sonar más suave que 〜から."
        }
      ],
      "ui": {
        "groupLabel": "N4",
        "accent": "#3B82F6"
      }
    },
    {
      "id": "n4-you-ni-naru",
      "level": "N4",
      "order": 9,
      "pattern": "Vる / Vない + ようになる",
      "title": "Cambio de estado/hábito",
      "meaning": "llegar a poder / llegar a acostumbrarse a",
      "nuance": "Describe un cambio progresivo en habilidad, hábito o situación.",
      "formation": [
        {
          "segments": ruby("[読|よ]めるようになる")
        },
        {
          "segments": ruby("[早|はや]く[起|お]きるようになる")
        }
      ],
      "category": "cambio",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "core",
      "tags": [
        "cambio",
        "habilidad",
        "habito"
      ],
      "compareWith": [
        {
          "pattern": "〜ようにする",
          "id": "n3-you-ni-suru"
        }
      ],
      "caution": "〜ようになる describe el resultado del cambio; 〜ようにする describe el esfuerzo intencional.",
      "examples": [
        {
          "segments": ruby("[毎日|まいにち][練習|れんしゅう]して、[日本語|にほんご]が[少|すこ]し[話|はな]せるようになりました。"),
          "translation": "Practiqué todos los días y llegué a poder hablar un poco de japonés."
        },
        {
          "segments": ruby("[最近|さいきん]、[野菜|やさい]をよく[食|た]べるようになった。"),
          "translation": "Últimamente he empezado a comer verduras seguido."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Quieres decir 'con práctica, llegué a poder leer kanji'. ¿Qué patrón sirve?",
          "answer": "〜ようになる",
          "distractors": [
            "〜ようにする",
            "〜つもりだ",
            "〜なくてもいい"
          ],
          "explanation": "El cambio logrado se expresa con 〜ようになる."
        }
      ],
      "ui": {
        "groupLabel": "N4",
        "accent": "#3B82F6"
      }
    },
    {
      "id": "n4-te-shimau",
      "level": "N4",
      "order": 10,
      "pattern": "Vて + しまう",
      "title": "Completitud / pesar",
      "meaning": "terminar de... / lamentablemente...",
      "nuance": "Puede indicar acción completada por completo o un resultado no deseado.",
      "formation": [
        {
          "segments": ruby("[食|た]べてしまう")
        },
        {
          "segments": ruby("[忘|わす]れてしまう")
        }
      ],
      "category": "resultado",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "core",
      "tags": [
        "completitud",
        "arrepentimiento",
        "accidente"
      ],
      "compareWith": [
        {
          "pattern": "〜ておく"
        },
        {
          "pattern": "〜てみる",
          "id": "n4-te-miru"
        }
      ],
      "caution": "En conversación casual se contrae a ちゃう / じゃう.",
      "examples": [
        {
          "segments": ruby("[宿題|しゅくだい]を[全部|ぜんぶ]やってしまいました。"),
          "translation": "Terminé toda la tarea."
        },
        {
          "segments": ruby("[財布|さいふ]を[忘|わす]れてしまった。"),
          "translation": "Se me olvidó la billetera."
        }
      ],
      "quizSeeds": [
        {
          "type": "nuance_match",
          "prompt": "Quieres decir 'se me olvidó por accidente'. ¿Qué patrón ayuda?",
          "answer": "〜てしまう",
          "distractors": [
            "〜てみる",
            "〜ようにする",
            "〜なければならない"
          ],
          "explanation": "Además de completitud, 〜てしまう expresa pesar por algo no deseado."
        }
      ],
      "ui": {
        "groupLabel": "N4",
        "accent": "#3B82F6"
      }
    },
    {
      "id": "n4-bakari",
      "level": "N4",
      "order": 11,
      "pattern": "Vて + ばかりいる / N + ばかり",
      "title": "Exceso / solo eso",
      "meaning": "solo / nada más que",
      "nuance": "Indica repetición excesiva o concentración en una sola cosa.",
      "formation": [
        {
          "segments": ruby("[遊|あそ]んでばかりいる")
        },
        {
          "segments": ruby("[甘|あま]い[物|もの]ばかり[食|た]べる")
        }
      ],
      "category": "frecuencia",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "high",
      "tags": [
        "exceso",
        "habito",
        "solo"
      ],
      "compareWith": [
        {
          "pattern": "〜だけ"
        },
        {
          "pattern": "〜しか"
        }
      ],
      "caution": "Con ばかり often hay matiz crítico: 'siempre estás solo...'.",
      "examples": [
        {
          "segments": ruby("[弟|おとうと]はゲームをしてばかりいる。"),
          "translation": "Mi hermano se la pasa jugando videojuegos."
        },
        {
          "segments": ruby("[最近|さいきん]、[忙|いそが]しくてコンビニの[物|もの]ばかり[食|た]べています。"),
          "translation": "Últimamente, por estar ocupado, como casi puro alimento de konbini."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Quieres criticar que alguien 'solo estudia y no descansa'. ¿Qué patrón suena natural?",
          "answer": "〜ばかり",
          "distractors": [
            "〜だけど",
            "〜そうだ",
            "〜ために"
          ],
          "explanation": "〜ばかり añade matiz de exceso o repetición."
        }
      ],
      "ui": {
        "groupLabel": "N4",
        "accent": "#3B82F6"
      }
    },
    {
      "id": "n4-te-miru",
      "level": "N4",
      "order": 12,
      "pattern": "Vて + みる",
      "title": "Intento",
      "meaning": "probar hacer...",
      "nuance": "Se usa para intentar una acción y ver el resultado.",
      "formation": [
        {
          "segments": ruby("[食|た]べてみる")
        },
        {
          "segments": ruby("[使|つか]ってみる")
        }
      ],
      "category": "intento",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "core",
      "tags": [
        "intento",
        "prueba",
        "experiencia"
      ],
      "compareWith": [
        {
          "pattern": "〜ようにする",
          "id": "n3-you-ni-suru"
        },
        {
          "pattern": "〜てしまう",
          "id": "n4-te-shimau"
        }
      ],
      "caution": "No describe habilidad; describe probar una acción.",
      "examples": [
        {
          "segments": ruby("このアプリを[使|つか]ってみます。"),
          "translation": "Probaré esta app."
        },
        {
          "segments": ruby("[分|わ]からなかったら、[先生|せんせい]に[聞|き]いてみて。"),
          "translation": "Si no entiendes, prueba preguntándole al profesor."
        }
      ],
      "quizSeeds": [
        {
          "type": "fill_blank",
          "prompt": "この料理を食べ ______。",
          "answer": "てみたい",
          "distractors": [
            "てしまう",
            "なくてもいい",
            "ながら"
          ],
          "explanation": "〜てみる expresa intentar/probar. 〜てみたい añade deseo de probar."
        }
      ],
      "ui": {
        "groupLabel": "N4",
        "accent": "#3B82F6"
      }
    },
    {
      "id": "n3-kotoni-suru",
      "level": "N3",
      "order": 1,
      "pattern": "Vる / Vない + ことにする",
      "title": "Decisión personal",
      "meaning": "decidir hacer / decidir no hacer",
      "nuance": "Marca una decisión tomada por voluntad propia.",
      "formation": [
        {
          "segments": ruby("[毎日|まいにち][走|はし]ることにする")
        },
        {
          "segments": ruby("お[酒|さけ]は[飲|の]まないことにした")
        }
      ],
      "category": "decision",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "core",
      "tags": [
        "decision",
        "voluntad"
      ],
      "compareWith": [
        {
          "pattern": "〜ことになる",
          "id": "n3-kotoni-naru"
        },
        {
          "pattern": "〜つもりだ",
          "id": "n5-tsumori"
        }
      ],
      "caution": "La decisión es del hablante; si viene de reglas o circunstancias, suele usarse 〜ことになる.",
      "examples": [
        {
          "segments": ruby("[健康|けんこう]のために、[毎朝|まいあさ][歩|ある]くことにしました。"),
          "translation": "Decidí caminar todas las mañanas por salud."
        },
        {
          "segments": ruby("[今年|ことし]は[夜更|よふ]かししないことにする。"),
          "translation": "Este año decidiré no trasnochar."
        }
      ],
      "quizSeeds": [
        {
          "type": "nuance_match",
          "prompt": "La decisión la tomaste tú mismo. ¿Qué expresión corresponde?",
          "answer": "〜ことにする",
          "distractors": [
            "〜ことになる",
            "〜わけだ",
            "〜に違いない"
          ],
          "explanation": "〜ことにする expresa decisión personal."
        }
      ],
      "ui": {
        "groupLabel": "N3",
        "accent": "#A855F7"
      }
    },
    {
      "id": "n3-kotoni-naru",
      "level": "N3",
      "order": 2,
      "pattern": "Vる / Vない + ことになる",
      "title": "Resultado decidido externamente",
      "meaning": "quedar decidido que / terminar siendo que",
      "nuance": "Se usa cuando una regla, situación o decisión externa establece algo.",
      "formation": [
        {
          "segments": ruby("[来月|らいげつ][転勤|てんきん]することになった")
        },
        {
          "segments": ruby("[会議|かいぎ]は[中止|ちゅうし]ということになった")
        }
      ],
      "category": "decision",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "core",
      "tags": [
        "resultado",
        "regla",
        "decision-externa"
      ],
      "compareWith": [
        {
          "pattern": "〜ことにする",
          "id": "n3-kotoni-suru"
        }
      ],
      "caution": "El foco no es la voluntad del hablante, sino la decisión externa o resultado.",
      "examples": [
        {
          "segments": ruby("[来月|らいげつ]から[大阪|おおさか]で[働|はたら]くことになりました。"),
          "translation": "Se decidió que trabajaré en Osaka desde el próximo mes."
        },
        {
          "segments": ruby("[明日|あした]の[授業|じゅぎょう]はオンラインですることになった。"),
          "translation": "Quedó decidido que la clase de mañana será online."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "La empresa decidió que te mudas de oficina. ¿Qué patrón va mejor?",
          "answer": "〜ことになる",
          "distractors": [
            "〜ことにする",
            "〜ようにする",
            "〜つもりだ"
          ],
          "explanation": "Para una decisión externa se usa 〜ことになる."
        }
      ],
      "ui": {
        "groupLabel": "N3",
        "accent": "#A855F7"
      }
    },
    {
      "id": "n3-you-ni-suru",
      "level": "N3",
      "order": 3,
      "pattern": "Vる / Vない + ようにする",
      "title": "Esfuerzo habitual",
      "meaning": "procurar / intentar hacer regularmente",
      "nuance": "Indica esfuerzo consciente para adquirir o evitar un hábito.",
      "formation": [
        {
          "segments": ruby("[毎日|まいにち][読|よ]むようにする")
        },
        {
          "segments": ruby("[忘|わす]れないようにする")
        }
      ],
      "category": "cambio",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "core",
      "tags": [
        "habito",
        "esfuerzo",
        "rutina"
      ],
      "compareWith": [
        {
          "pattern": "〜ようになる",
          "id": "n4-you-ni-naru"
        }
      ],
      "caution": "〜ようにする enfatiza el intento consciente, no el resultado alcanzado.",
      "examples": [
        {
          "segments": ruby("[毎日|まいにち]、[日本語|にほんご]で[日記|にっき]を[書|か]くようにしています。"),
          "translation": "Procuro escribir un diario en japonés todos los días."
        },
        {
          "segments": ruby("[遅|おく]れないようにしてください。"),
          "translation": "Procure no llegar tarde."
        }
      ],
      "quizSeeds": [
        {
          "type": "nuance_match",
          "prompt": "Quieres expresar esfuerzo voluntario: 'trato de acostarme temprano'.",
          "answer": "〜ようにする",
          "distractors": [
            "〜ようになる",
            "〜ことになる",
            "〜そうだ"
          ],
          "explanation": "El esfuerzo consciente se expresa con 〜ようにする."
        }
      ],
      "ui": {
        "groupLabel": "N3",
        "accent": "#A855F7"
      }
    },
    {
      "id": "n3-tameni",
      "level": "N3",
      "order": 4,
      "pattern": "Vる / Nの + ために",
      "title": "Objetivo / causa",
      "meaning": "para / por",
      "nuance": "Puede marcar finalidad u ocasiones más formales de causa.",
      "formation": [
        {
          "segments": ruby("[合格|ごうかく]するために")
        },
        {
          "segments": ruby("[健康|けんこう]のために")
        }
      ],
      "category": "objetivo",
      "register": [
        "casual",
        "polite",
        "written"
      ],
      "importance": "core",
      "tags": [
        "proposito",
        "objetivo"
      ],
      "compareWith": [
        {
          "pattern": "〜ように"
        },
        {
          "pattern": "〜ので",
          "id": "n4-node"
        }
      ],
      "caution": "Cuando expresa objetivo, la parte inicial suele ser algo controlable y con intención.",
      "examples": [
        {
          "segments": ruby("[日本|にほん]で[働|はたら]くために、[日本語|にほんご]を[勉強|べんきょう]しています。"),
          "translation": "Estudio japonés para trabajar en Japón."
        },
        {
          "segments": ruby("[健康|けんこう]のために、[毎日|まいにち][歩|ある]いています。"),
          "translation": "Camino todos los días por salud."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Quieres decir 'estudio para aprobar el examen'. ¿Qué patrón corresponde?",
          "answer": "〜ために",
          "distractors": [
            "〜わけだ",
            "〜にすぎない",
            "〜ばかり"
          ],
          "explanation": "El objetivo o finalidad se expresa claramente con 〜ために."
        }
      ],
      "ui": {
        "groupLabel": "N3",
        "accent": "#A855F7"
      }
    },
    {
      "id": "n3-wakeda",
      "level": "N3",
      "order": 5,
      "pattern": "普通形 + わけだ",
      "title": "Conclusión lógica",
      "meaning": "por eso / así que / con razón",
      "nuance": "Marca una conclusión que se entiende naturalmente por la información previa.",
      "formation": [
        {
          "segments": ruby("[寒|さむ]いわけだ")
        },
        {
          "segments": ruby("[行|い]けないわけだ")
        }
      ],
      "category": "juicio",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "high",
      "tags": [
        "conclusion",
        "logica"
      ],
      "compareWith": [
        {
          "pattern": "〜わけではない",
          "id": "n3-wakedehanai"
        },
        {
          "pattern": "〜ということだ"
        }
      ],
      "caution": "Se usa cuando algo 'tiene sentido' dada la información.",
      "examples": [
        {
          "segments": ruby("[北海道|ほっかいどう]の[冬|ふゆ]はとても[寒|さむ]い。だから、[雪|ゆき]が[多|おお]いわけだ。"),
          "translation": "El invierno en Hokkaido es muy frío. Por eso tiene sentido que nieve mucho."
        },
        {
          "segments": ruby("[毎日|まいにち][練習|れんしゅう]しているから、[上手|じょうず]なわけですね。"),
          "translation": "Como practicas todos los días, con razón eres bueno."
        }
      ],
      "quizSeeds": [
        {
          "type": "nuance_match",
          "prompt": "Quieres cerrar con una conclusión lógica tipo 'con razón estabas cansado'. ¿Qué eliges?",
          "answer": "〜わけだ",
          "distractors": [
            "〜わけではない",
            "〜ことなく",
            "〜に違いない"
          ],
          "explanation": "〜わけだ expresa conclusión lógica."
        }
      ],
      "ui": {
        "groupLabel": "N3",
        "accent": "#A855F7"
      }
    },
    {
      "id": "n3-wakedehanai",
      "level": "N3",
      "order": 6,
      "pattern": "普通形 + わけではない",
      "title": "Negación parcial",
      "meaning": "no es que... necesariamente",
      "nuance": "Niega una interpretación total o demasiado fuerte.",
      "formation": [
        {
          "segments": ruby("[嫌|きら]いなわけではない")
        },
        {
          "segments": ruby("[毎日|まいにち][行|い]くわけではない")
        }
      ],
      "category": "contraste",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "high",
      "tags": [
        "negacion-parcial",
        "matiz"
      ],
      "compareWith": [
        {
          "pattern": "〜わけがない"
        },
        {
          "pattern": "〜とは限らない"
        }
      ],
      "caution": "Muy útil para matizar y evitar afirmaciones demasiado absolutas.",
      "examples": [
        {
          "segments": ruby("[寿司|すし]が[嫌|きら]いなわけではないですが、[毎日|まいにち]は[食|た]べません。"),
          "translation": "No es que no me guste el sushi, pero no lo como todos los días."
        },
        {
          "segments": ruby("[忙|いそが]しいからといって、[会|あ]えないわけではない。"),
          "translation": "Aunque esté ocupado, no es que no pueda verte."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Quieres matizar: 'No es que no quiera ir'.",
          "answer": "〜わけではない",
          "distractors": [
            "〜わけだ",
            "〜ざるを得ない",
            "〜ばかりか"
          ],
          "explanation": "Para negar parcialmente una interpretación se usa 〜わけではない."
        }
      ],
      "ui": {
        "groupLabel": "N3",
        "accent": "#A855F7"
      }
    },
    {
      "id": "n3-tokoro",
      "level": "N3",
      "order": 7,
      "pattern": "Vる / Vている / Vた + ところ",
      "title": "Etapa de acción",
      "meaning": "estar por / estar en / acabar de",
      "nuance": "Distingue el momento exacto de una acción.",
      "formation": [
        {
          "segments": ruby("[今|いま]から[行|い]くところ")
        },
        {
          "segments": ruby("[今|いま][食|た]べているところ")
        },
        {
          "segments": ruby("[今|いま][帰|かえ]ったところ")
        }
      ],
      "category": "tiempo",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "core",
      "tags": [
        "momento",
        "accion"
      ],
      "compareWith": [
        {
          "pattern": "〜ばかり",
          "id": "n4-bakari"
        },
        {
          "pattern": "〜最中に"
        }
      ],
      "caution": "Vるところ = a punto de; Vているところ = en medio; Vたところ = recién terminado.",
      "examples": [
        {
          "segments": ruby("[今|いま]から[出|で]かけるところです。"),
          "translation": "Justo estoy por salir ahora."
        },
        {
          "segments": ruby("さっき[駅|えき]に[着|つ]いたところです。"),
          "translation": "Acabo de llegar a la estación hace un momento."
        }
      ],
      "quizSeeds": [
        {
          "type": "fill_blank",
          "prompt": "今、ちょうど昼ご飯を食べている ______ です。",
          "answer": "ところ",
          "distractors": [
            "ために",
            "わけ",
            "ように"
          ],
          "explanation": "Para hablar de la etapa de una acción se usa ところ."
        }
      ],
      "ui": {
        "groupLabel": "N3",
        "accent": "#A855F7"
      }
    },
    {
      "id": "n3-uchini",
      "level": "N3",
      "order": 8,
      "pattern": "Vる / Vない / いA / なAな / Nの + うちに",
      "title": "Mientras / antes de que cambie",
      "meaning": "mientras / antes de que...",
      "nuance": "Se usa para aprovechar un estado mientras dure o antes de que cambie.",
      "formation": [
        {
          "segments": ruby("[忘|わす]れないうちに")
        },
        {
          "segments": ruby("[若|わか]いうちに")
        }
      ],
      "category": "tiempo",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "high",
      "tags": [
        "oportunidad",
        "mientras"
      ],
      "compareWith": [
        {
          "pattern": "〜間に"
        },
        {
          "pattern": "〜あいだ"
        }
      ],
      "caution": "A menudo implica 'mejor hacerlo antes de que sea tarde'.",
      "examples": [
        {
          "segments": ruby("[忘|わす]れないうちに、メモしておきます。"),
          "translation": "Lo anotaré antes de que se me olvide."
        },
        {
          "segments": ruby("[日本|にほん]にいるうちに、いろいろな[所|ところ]へ[行|い]きたいです。"),
          "translation": "Mientras esté en Japón, quiero ir a varios lugares."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Quieres decir 'antes de olvidarlo, te escribo'. ¿Qué patrón sirve mejor?",
          "answer": "〜うちに",
          "distractors": [
            "〜たびに",
            "〜末に",
            "〜ばかりか"
          ],
          "explanation": "Se usa para aprovechar el estado antes de que cambie."
        }
      ],
      "ui": {
        "groupLabel": "N3",
        "accent": "#A855F7"
      }
    },
    {
      "id": "n3-tabini",
      "level": "N3",
      "order": 9,
      "pattern": "Vる / Nの + たびに",
      "title": "Cada vez que",
      "meaning": "cada vez que...",
      "nuance": "Marca repetición regular de una situación.",
      "formation": [
        {
          "segments": ruby("[会|あ]うたびに")
        },
        {
          "segments": ruby("[旅行|りょこう]のたびに")
        }
      ],
      "category": "frecuencia",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "core",
      "tags": [
        "repeticion",
        "frecuencia"
      ],
      "compareWith": [
        {
          "pattern": "〜と"
        },
        {
          "pattern": "〜とき"
        }
      ],
      "caution": "Destaca repetición sistemática: cada vez que ocurre A, ocurre B.",
      "examples": [
        {
          "segments": ruby("[彼|かれ]に[会|あ]うたびに、[新|あたら]しいことを[学|まな]びます。"),
          "translation": "Cada vez que lo veo, aprendo algo nuevo."
        },
        {
          "segments": ruby("[旅行|りょこう]のたびに[写真|しゃしん]をたくさん[撮|と]ります。"),
          "translation": "Tomo muchas fotos cada vez que viajo."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Quieres decir 'cada vez que veo esa palabra, la busco'.",
          "answer": "〜たびに",
          "distractors": [
            "〜うちに",
            "〜ために",
            "〜ばかり"
          ],
          "explanation": "La repetición de 'cada vez que' se expresa con 〜たびに."
        }
      ],
      "ui": {
        "groupLabel": "N3",
        "accent": "#A855F7"
      }
    },
    {
      "id": "n3-okagede",
      "level": "N3",
      "order": 10,
      "pattern": "Nの / 普通形 + おかげで",
      "title": "Causa positiva",
      "meaning": "gracias a...",
      "nuance": "Expresa causa con evaluación positiva o agradecida.",
      "formation": [
        {
          "segments": ruby("[先生|せんせい]のおかげで")
        },
        {
          "segments": ruby("[努力|どりょく]したおかげで")
        }
      ],
      "category": "causa",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "high",
      "tags": [
        "causa",
        "positivo",
        "gratitud"
      ],
      "compareWith": [
        {
          "pattern": "〜せいで",
          "id": "n3-seide"
        },
        {
          "pattern": "〜ために",
          "id": "n3-tameni"
        }
      ],
      "caution": "Evita usarlo con resultados negativos.",
      "examples": [
        {
          "segments": ruby("[先生|せんせい]のおかげで、[合格|ごうかく]できました。"),
          "translation": "Gracias al profesor, pude aprobar."
        },
        {
          "segments": ruby("たくさん[練習|れんしゅう]したおかげで、[自信|じしん]がつきました。"),
          "translation": "Gracias a practicar mucho, gané confianza."
        }
      ],
      "quizSeeds": [
        {
          "type": "nuance_match",
          "prompt": "La causa tuvo un resultado bueno. ¿Qué expresión eliges?",
          "answer": "〜おかげで",
          "distractors": [
            "〜せいで",
            "〜ものの",
            "〜どころか"
          ],
          "explanation": "Para una causa positiva se usa 〜おかげで."
        }
      ],
      "ui": {
        "groupLabel": "N3",
        "accent": "#A855F7"
      }
    },
    {
      "id": "n3-seide",
      "level": "N3",
      "order": 11,
      "pattern": "Nの / 普通形 + せいで",
      "title": "Causa negativa",
      "meaning": "por culpa de...",
      "nuance": "Expresa causa negativa, molestia o reproche.",
      "formation": [
        {
          "segments": ruby("[雨|あめ]のせいで")
        },
        {
          "segments": ruby("[寝不足|ねぶそく]のせいで")
        }
      ],
      "category": "causa",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "high",
      "tags": [
        "causa",
        "negativo",
        "reclamo"
      ],
      "compareWith": [
        {
          "pattern": "〜おかげで",
          "id": "n3-okagede"
        },
        {
          "pattern": "〜ために",
          "id": "n3-tameni"
        }
      ],
      "caution": "Tiene matiz negativo y muchas veces emocional.",
      "examples": [
        {
          "segments": ruby("[電車|でんしゃ]が[遅|おく]れたせいで、[会議|かいぎ]に[遅|おく]れました。"),
          "translation": "Llegué tarde a la reunión por culpa del retraso del tren."
        },
        {
          "segments": ruby("[寝不足|ねぶそく]のせいで、[今日|きょう]は[集中|しゅうちゅう]できない。"),
          "translation": "Hoy no puedo concentrarme por culpa de no haber dormido bien."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Quieres decir 'por culpa del tráfico, llegué tarde'. ¿Qué patrón conviene?",
          "answer": "〜せいで",
          "distractors": [
            "〜おかげで",
            "〜ようにする",
            "〜つもりだ"
          ],
          "explanation": "La causa negativa se expresa con 〜せいで."
        }
      ],
      "ui": {
        "groupLabel": "N3",
        "accent": "#A855F7"
      }
    },
    {
      "id": "n3-nitaishite",
      "level": "N3",
      "order": 12,
      "pattern": "Nに対して",
      "title": "Respecto a / hacia",
      "meaning": "con respecto a / hacia",
      "nuance": "Sirve para indicar el objetivo de una opinión, acción o contraste.",
      "formation": [
        {
          "segments": ruby("[学生|がくせい]に[対|たい]して")
        },
        {
          "segments": ruby("この[問題|もんだい]に[対|たい]して")
        }
      ],
      "category": "comparacion",
      "register": [
        "casual",
        "polite",
        "written"
      ],
      "importance": "high",
      "tags": [
        "relacion",
        "objetivo",
        "respecto"
      ],
      "compareWith": [
        {
          "pattern": "〜について"
        },
        {
          "pattern": "〜にとって"
        }
      ],
      "caution": "〜に対して suele sentirse más formal y enfocado al blanco de una acción o actitud.",
      "examples": [
        {
          "segments": ruby("[先生|せんせい]は[学生|がくせい]に[対|たい]してとても[親切|しんせつ]です。"),
          "translation": "El profesor es muy amable con los estudiantes."
        },
        {
          "segments": ruby("この[提案|ていあん]に[対|たい]して、いくつか[質問|しつもん]があります。"),
          "translation": "Tengo varias preguntas respecto a esta propuesta."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Quieres decir 'su actitud hacia los clientes es amable'. ¿Qué patrón encaja?",
          "answer": "〜に対して",
          "distractors": [
            "〜について",
            "〜ために",
            "〜おかげで"
          ],
          "explanation": "Se usa para marcar el objetivo o destinatario de una actitud/acción."
        }
      ],
      "ui": {
        "groupLabel": "N3",
        "accent": "#A855F7"
      }
    },
    {
      "id": "n2-wakenihaikanai",
      "level": "N2",
      "order": 1,
      "pattern": "Vる / Vない + わけにはいかない",
      "title": "No poder hacer / no poder no hacer",
      "meaning": "no puedo permitirme... / no me queda otra que...",
      "nuance": "Expresa restricción moral, social o práctica. No es imposibilidad física, sino circunstancial.",
      "formation": [
        {
          "segments": ruby("[休|やす]むわけにはいかない")
        },
        {
          "segments": ruby("[断|ことわ]るわけにはいかない")
        }
      ],
      "category": "restriccion",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "core",
      "tags": [
        "restriccion",
        "presion-social"
      ],
      "compareWith": [
        {
          "pattern": "〜ざるを得ない",
          "id": "n1-zaruwoenai"
        },
        {
          "pattern": "〜てはいけない",
          "id": "n5-tehaikenai"
        }
      ],
      "caution": "Muy común cuando hay responsabilidad o presión externa.",
      "examples": [
        {
          "segments": ruby("[大事|だいじ]な[会議|かいぎ]があるので、[今日|きょう]は[休|やす]むわけにはいきません。"),
          "translation": "Como hay una reunión importante, hoy no puedo permitirme faltar."
        },
        {
          "segments": ruby("[手伝|てつだ]ってほしいと[言|い]われたら、[断|ことわ]るわけにはいかない。"),
          "translation": "Si me dicen que necesitan ayuda, no puedo simplemente negarme."
        }
      ],
      "quizSeeds": [
        {
          "type": "nuance_match",
          "prompt": "No es que físicamente no puedas; socialmente no corresponde faltar. ¿Qué patrón sirve?",
          "answer": "〜わけにはいかない",
          "distractors": [
            "〜ざるを得ない",
            "〜に違いない",
            "〜ことなく"
          ],
          "explanation": "Expresa restricción moral o social."
        }
      ],
      "ui": {
        "groupLabel": "N2",
        "accent": "#F59E0B"
      }
    },
    {
      "id": "n2-nichigainai",
      "level": "N2",
      "order": 2,
      "pattern": "普通形 + に違いない",
      "title": "Fuerte convicción",
      "meaning": "sin duda / debe ser que",
      "nuance": "Marca una inferencia fuerte basada en evidencia o convicción.",
      "formation": [
        {
          "segments": ruby("[本当|ほんとう]に[違|ちが]いない")
        },
        {
          "segments": ruby("[来|く]るに[違|ちが]いない")
        }
      ],
      "category": "inferencia",
      "register": [
        "casual",
        "polite",
        "written"
      ],
      "importance": "core",
      "tags": [
        "inferencia",
        "certeza"
      ],
      "compareWith": [
        {
          "pattern": "〜はずだ"
        },
        {
          "pattern": "〜に相違ない"
        }
      ],
      "caution": "Es más fuerte que 〜はずだ en convicción.",
      "examples": [
        {
          "segments": ruby("あの[様子|ようす]なら、[彼|かれ]は[合格|ごうかく]したに[違|ちが]いない。"),
          "translation": "Por cómo se ve, sin duda él aprobó."
        },
        {
          "segments": ruby("こんなに[静|しず]かだから、みんなもう[寝|ね]たに[違|ちが]いない。"),
          "translation": "Como está tan silencioso, todos deben haberse dormido ya."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Tienes una convicción fuerte: 'sin duda ya llegó'.",
          "answer": "〜に違いない",
          "distractors": [
            "〜わけではない",
            "〜ばかりか",
            "〜ことなく"
          ],
          "explanation": "La inferencia firme se expresa con 〜に違いない."
        }
      ],
      "ui": {
        "groupLabel": "N2",
        "accent": "#F59E0B"
      }
    },
    {
      "id": "n2-kanenai",
      "level": "N2",
      "order": 3,
      "pattern": "Vます + かねない",
      "title": "Riesgo negativo",
      "meaning": "podría llegar a... (mal)",
      "nuance": "Advierte sobre una posibilidad peligrosa o no deseada.",
      "formation": [
        {
          "segments": ruby("[起|お]こりかねない")
        },
        {
          "segments": ruby("[忘|わす]れかねない")
        }
      ],
      "category": "inferencia",
      "register": [
        "casual",
        "polite",
        "written"
      ],
      "importance": "high",
      "tags": [
        "riesgo",
        "advertencia",
        "negativo"
      ],
      "compareWith": [
        {
          "pattern": "〜おそれがある"
        },
        {
          "pattern": "〜可能性がある"
        }
      ],
      "caution": "Casi siempre lleva un matiz negativo.",
      "examples": [
        {
          "segments": ruby("このままでは[大|おお]きな[事故|じこ]が[起|お]こりかねない。"),
          "translation": "Si seguimos así, podría ocurrir un accidente grave."
        },
        {
          "segments": ruby("[忙|いそが]しすぎると、[大切|たいせつ]なことを[忘|わす]れかねない。"),
          "translation": "Si estás demasiado ocupado, podrías llegar a olvidar cosas importantes."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Quieres advertir sobre una posibilidad negativa seria. ¿Qué patrón usas?",
          "answer": "〜かねない",
          "distractors": [
            "〜おかげで",
            "〜ようにする",
            "〜てみる"
          ],
          "explanation": "〜かねない expresa riesgo negativo."
        }
      ],
      "ui": {
        "groupLabel": "N2",
        "accent": "#F59E0B"
      }
    },
    {
      "id": "n2-monodakara",
      "level": "N2",
      "order": 4,
      "pattern": "普通形 + ものだから",
      "title": "Razón excusatoria",
      "meaning": "es que... / pasa que...",
      "nuance": "Da una explicación con tono justificativo o excusatorio.",
      "formation": [
        {
          "segments": ruby("[忙|いそが]しいものだから")
        },
        {
          "segments": ruby("[知|し]らなかったものだから")
        }
      ],
      "category": "razon",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "high",
      "tags": [
        "excusa",
        "justificacion"
      ],
      "compareWith": [
        {
          "pattern": "〜ので",
          "id": "n4-node"
        },
        {
          "pattern": "〜から"
        }
      ],
      "caution": "Más conversacional y subjetivo que 〜ので.",
      "examples": [
        {
          "segments": ruby("[道|みち]が[混|こ]んでいたものだから、[遅|おく]れてしまいました。"),
          "translation": "Es que el camino estaba congestionado, así que llegué tarde."
        },
        {
          "segments": ruby("[初|はじ]めてだったものだから、[少|すこ]し[緊張|きんちょう]しました。"),
          "translation": "Como era la primera vez, me puse un poco nervioso."
        }
      ],
      "quizSeeds": [
        {
          "type": "nuance_match",
          "prompt": "Quieres sonar más explicativo/justificativo que con 〜ので. ¿Qué eliges?",
          "answer": "〜ものだから",
          "distractors": [
            "〜ばかりか",
            "〜にすぎない",
            "〜ことなく"
          ],
          "explanation": "〜ものだから suele usarse para excusas o explicaciones subjetivas."
        }
      ],
      "ui": {
        "groupLabel": "N2",
        "accent": "#F59E0B"
      }
    },
    {
      "id": "n2-kotonaku",
      "level": "N2",
      "order": 5,
      "pattern": "Vる + ことなく",
      "title": "Sin hacer...",
      "meaning": "sin...",
      "nuance": "Patrón formal/escrito para expresar 'sin hacer una acción'.",
      "formation": [
        {
          "segments": ruby("[休|やす]むことなく")
        },
        {
          "segments": ruby("[迷|まよ]うことなく")
        }
      ],
      "category": "formal",
      "register": [
        "written",
        "formal"
      ],
      "importance": "high",
      "tags": [
        "formal",
        "negacion",
        "sin-hacer"
      ],
      "compareWith": [
        {
          "pattern": "〜ないで"
        },
        {
          "pattern": "〜ずに"
        }
      ],
      "caution": "Suena más escrito/formal que 〜ないで o 〜ずに.",
      "examples": [
        {
          "segments": ruby("[彼|かれ]は[一日|いちにち]も[休|やす]むことなく[働|はたら]き[続|つづ]けた。"),
          "translation": "Siguió trabajando sin descansar ni un solo día."
        },
        {
          "segments": ruby("[彼女|かのじょ]は[迷|まよ]うことなく[答|こた]えた。"),
          "translation": "Respondió sin dudar."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Necesitas una forma formal de 'sin descansar'. ¿Qué patrón sirve?",
          "answer": "〜ことなく",
          "distractors": [
            "〜ないで",
            "〜てしまう",
            "〜わけだ"
          ],
          "explanation": "〜ことなく es una forma más formal/escrita."
        }
      ],
      "ui": {
        "groupLabel": "N2",
        "accent": "#F59E0B"
      }
    },
    {
      "id": "n2-nisuginai",
      "level": "N2",
      "order": 6,
      "pattern": "普通形 / N / である + にすぎない",
      "title": "Solo / nada más que",
      "meaning": "no es más que...",
      "nuance": "Reduce la importancia o alcance de algo.",
      "formation": [
        {
          "segments": ruby("[一例|いちれい]にすぎない")
        },
        {
          "segments": ruby("[噂|うわさ]にすぎない")
        }
      ],
      "category": "limite",
      "register": [
        "casual",
        "polite",
        "written"
      ],
      "importance": "high",
      "tags": [
        "limite",
        "minimizacion"
      ],
      "compareWith": [
        {
          "pattern": "〜だけ"
        },
        {
          "pattern": "〜しか"
        }
      ],
      "caution": "Tiene un tono más analítico que だけ/しか.",
      "examples": [
        {
          "segments": ruby("これは[一|ひと]つの[方法|ほうほう]にすぎません。"),
          "translation": "Esto no es más que un método entre varios."
        },
        {
          "segments": ruby("その[話|はなし]は[噂|うわさ]にすぎない。"),
          "translation": "Esa historia no es más que un rumor."
        }
      ],
      "quizSeeds": [
        {
          "type": "nuance_match",
          "prompt": "Quieres minimizar: 'eso no es más que una excusa'.",
          "answer": "〜にすぎない",
          "distractors": [
            "〜ばかりか",
            "〜かねない",
            "〜に違いない"
          ],
          "explanation": "Para minimizar o relativizar se usa 〜にすぎない."
        }
      ],
      "ui": {
        "groupLabel": "N2",
        "accent": "#F59E0B"
      }
    },
    {
      "id": "n2-bakarika",
      "level": "N2",
      "order": 7,
      "pattern": "N / 普通形 + ばかりか",
      "title": "No solo..., sino también...",
      "meaning": "no solo... sino también...",
      "nuance": "Amplía la información mostrando un efecto adicional, a menudo sorprendente.",
      "formation": [
        {
          "segments": ruby("[日本語|にほんご]ばかりか[英語|えいご]も")
        },
        {
          "segments": ruby("[遅刻|ちこく]したばかりか[謝|あやま]りもしなかった")
        }
      ],
      "category": "comparacion",
      "register": [
        "casual",
        "polite",
        "written"
      ],
      "importance": "high",
      "tags": [
        "ampliacion",
        "enfasis"
      ],
      "compareWith": [
        {
          "pattern": "〜だけでなく"
        },
        {
          "pattern": "〜どころか",
          "id": "n2-dokoroka"
        }
      ],
      "caution": "Suele tener tono más enfático o escrito que だけでなく.",
      "examples": [
        {
          "segments": ruby("[彼|かれ]は[日本語|にほんご]ばかりか、[中国語|ちゅうごくご]も[話|はな]せます。"),
          "translation": "No solo habla japonés, sino también chino."
        },
        {
          "segments": ruby("[彼|かれ]は[遅刻|ちこく]したばかりか、[連絡|れんらく]もしなかった。"),
          "translation": "No solo llegó tarde, sino que ni siquiera avisó."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Quieres enfatizar 'no solo no estudió, sino que además durmió'. ¿Qué patrón va mejor?",
          "answer": "〜ばかりか",
          "distractors": [
            "〜どころか",
            "〜にすぎない",
            "〜おかげで"
          ],
          "explanation": "Se usa para añadir una segunda información enfática."
        }
      ],
      "ui": {
        "groupLabel": "N2",
        "accent": "#F59E0B"
      }
    },
    {
      "id": "n2-dokoroka",
      "level": "N2",
      "order": 8,
      "pattern": "N / 普通形 + どころか",
      "title": "Lejos de..., más bien...",
      "meaning": "para nada..., al contrario...",
      "nuance": "Niega una expectativa y muestra que la realidad es incluso opuesta o más extrema.",
      "formation": [
        {
          "segments": ruby("[簡単|かんたん]どころか[難|むずか]しい")
        },
        {
          "segments": ruby("[休|やす]むどころかもっと[忙|いそが]しい")
        }
      ],
      "category": "contraste",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "high",
      "tags": [
        "contraste",
        "sorpresa"
      ],
      "compareWith": [
        {
          "pattern": "〜ばかりか",
          "id": "n2-bakarika"
        },
        {
          "pattern": "〜どころではない"
        }
      ],
      "caution": "Se usa cuando B contradice fuertemente lo esperado en A.",
      "examples": [
        {
          "segments": ruby("[今日|きょう]は[暇|ひま]どころか、とても[忙|いそが]しいです。"),
          "translation": "Hoy no es que esté libre; al contrario, estoy muy ocupado."
        },
        {
          "segments": ruby("[日本語|にほんご]は[上手|じょうず]どころか、まだまだです。"),
          "translation": "Lejos de hablar bien japonés, todavía me falta mucho."
        }
      ],
      "quizSeeds": [
        {
          "type": "nuance_match",
          "prompt": "Quieres decir 'lejos de ser fácil, fue durísimo'. ¿Qué eliges?",
          "answer": "〜どころか",
          "distractors": [
            "〜ばかりか",
            "〜に違いない",
            "〜ために"
          ],
          "explanation": "Para contradecir fuertemente una expectativa se usa 〜どころか."
        }
      ],
      "ui": {
        "groupLabel": "N2",
        "accent": "#F59E0B"
      }
    },
    {
      "id": "n2-sueni",
      "level": "N2",
      "order": 9,
      "pattern": "普通形 + 末(すえ)に",
      "title": "Resultado tras proceso largo",
      "meaning": "después de mucho... / al final de...",
      "nuance": "Se usa cuando algo ocurre al final de un proceso prolongado o difícil.",
      "formation": [
        {
          "segments": ruby("[話|はな]し[合|あ]った[末|すえ]に")
        },
        {
          "segments": ruby("[悩|なや]んだ[末|すえ]に")
        }
      ],
      "category": "resultado",
      "register": [
        "polite",
        "written"
      ],
      "importance": "high",
      "tags": [
        "resultado",
        "proceso",
        "despues-de"
      ],
      "compareWith": [
        {
          "pattern": "〜あげく"
        },
        {
          "pattern": "〜てしまう",
          "id": "n4-te-shimau"
        }
      ],
      "caution": "Normalmente implica tiempo o esfuerzo considerable antes del resultado.",
      "examples": [
        {
          "segments": ruby("[長|なが]く[悩|なや]んだ[末|すえ]に、[転職|てんしょく]することにしました。"),
          "translation": "Después de pensarlo mucho, decidí cambiar de trabajo."
        },
        {
          "segments": ruby("[話|はな]し[合|あ]いの[末|すえ]に、[計画|けいかく]を[変更|へんこう]した。"),
          "translation": "Tras discutirlo, cambiamos el plan."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Hubo un proceso largo de discusión antes del resultado. ¿Qué patrón sirve?",
          "answer": "〜末に",
          "distractors": [
            "〜ばかりか",
            "〜ようにする",
            "〜ことなく"
          ],
          "explanation": "Se usa al final de un proceso largo o difícil."
        }
      ],
      "ui": {
        "groupLabel": "N2",
        "accent": "#F59E0B"
      }
    },
    {
      "id": "n2-uede",
      "level": "N2",
      "order": 10,
      "pattern": "Vた / Nの + 上で",
      "title": "Después de / al momento de",
      "meaning": "tras... / en el proceso de decidir",
      "nuance": "Sirve para decir 'después de hacer' o como base para una decisión más formal.",
      "formation": [
        {
          "segments": ruby("[確認|かくにん]した[上|うえ]で")
        },
        {
          "segments": ruby("[相談|そうだん]の[上|うえ]で")
        }
      ],
      "category": "formal",
      "register": [
        "polite",
        "written"
      ],
      "importance": "high",
      "tags": [
        "procedimiento",
        "formal",
        "pasos"
      ],
      "compareWith": [
        {
          "pattern": "〜てから",
          "id": "n5-tekara"
        },
        {
          "pattern": "〜うえで",
          "id": "n2-uede"
        }
      ],
      "caution": "Muy común en contextos formales, laborales y escritos.",
      "examples": [
        {
          "segments": ruby("[内容|ないよう]を[確認|かくにん]した[上|うえ]で、ご[連絡|れんらく]いたします。"),
          "translation": "Le contactaré después de revisar el contenido."
        },
        {
          "segments": ruby("[家族|かぞく]と[相談|そうだん]の[上|うえ]で、[決|き]めます。"),
          "translation": "Lo decidiré después de consultarlo con mi familia."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Quieres sonar formal: 'después de revisar, responderé'. ¿Qué patrón encaja mejor?",
          "answer": "〜上で",
          "distractors": [
            "〜てから",
            "〜たびに",
            "〜ばかり"
          ],
          "explanation": "〜上で es muy útil para procedimientos formales."
        }
      ],
      "ui": {
        "groupLabel": "N2",
        "accent": "#F59E0B"
      }
    },
    {
      "id": "n2-monoka",
      "level": "N2",
      "order": 11,
      "pattern": "疑問詞 + 普通形 + ことか",
      "title": "Énfasis emocional",
      "meaning": "cuánto... / qué tan...",
      "nuance": "Expresa intensidad emocional, sorpresa o admiración.",
      "formation": [
        {
          "segments": ruby("どんなにうれしかったことか")
        },
        {
          "segments": ruby("[何度|なんど][考|かんが]えたことか")
        }
      ],
      "category": "juicio",
      "register": [
        "written",
        "formal"
      ],
      "importance": "medium",
      "tags": [
        "emocion",
        "enfasis"
      ],
      "compareWith": [
        {
          "pattern": "〜だろう"
        },
        {
          "pattern": "〜ものか",
          "id": "n2-monoka"
        }
      ],
      "caution": "Se ve mucho en escritura o narración, menos en conversación simple.",
      "examples": [
        {
          "segments": ruby("[合格|ごうかく]の[知|し]らせを[聞|き]いて、どんなにうれしかったことか。"),
          "translation": "No sabes cuánto me alegró escuchar la noticia del aprobado."
        },
        {
          "segments": ruby("あの[時|とき]、[何度|なんど]やめようと[思|おも]ったことか。"),
          "translation": "Cuántas veces habré pensado en rendirme en ese momento."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Quieres dar énfasis emocional escrito: 'cuánto sufrí'. ¿Qué patrón sirve?",
          "answer": "〜ことか",
          "distractors": [
            "〜わけだ",
            "〜ばかりか",
            "〜にすぎない"
          ],
          "explanation": "〜ことか se usa para exclamación emocional."
        }
      ],
      "ui": {
        "groupLabel": "N2",
        "accent": "#F59E0B"
      }
    },
    {
      "id": "n2-monono",
      "level": "N2",
      "order": 12,
      "pattern": "普通形 + ものの",
      "title": "Aunque",
      "meaning": "aunque / si bien",
      "nuance": "Introduce concesión, muchas veces con tono algo escrito.",
      "formation": [
        {
          "segments": ruby("[分|わ]かっているものの")
        },
        {
          "segments": ruby("[行|い]きたいものの")
        }
      ],
      "category": "contraste",
      "register": [
        "polite",
        "written"
      ],
      "importance": "high",
      "tags": [
        "concesion",
        "aunque"
      ],
      "compareWith": [
        {
          "pattern": "〜けれども"
        },
        {
          "pattern": "〜とはいえ"
        }
      ],
      "caution": "Más escrito o formal que けど/けれども.",
      "examples": [
        {
          "segments": ruby("[行|い]きたいものの、[時間|じかん]がありません。"),
          "translation": "Aunque quiero ir, no tengo tiempo."
        },
        {
          "segments": ruby("[計画|けいかく]はあるものの、まだ[始|はじ]めていない。"),
          "translation": "Aunque hay un plan, todavía no hemos empezado."
        }
      ],
      "quizSeeds": [
        {
          "type": "nuance_match",
          "prompt": "Necesitas un 'aunque' de tono más escrito. ¿Qué eliges?",
          "answer": "〜ものの",
          "distractors": [
            "〜ので",
            "〜おかげで",
            "〜てしまう"
          ],
          "explanation": "La concesión escrita/formal se expresa bien con 〜ものの."
        }
      ],
      "ui": {
        "groupLabel": "N2",
        "accent": "#F59E0B"
      }
    },
    {
      "id": "n1-zaruwoenai",
      "level": "N1",
      "order": 1,
      "pattern": "Vない-stem + ざるを得ない",
      "title": "Verse obligado",
      "meaning": "no tener más remedio que...",
      "nuance": "Patrón muy formal para obligación inevitable por circunstancias.",
      "formation": [
        {
          "segments": ruby("[行|い]かざるを[得|え]ない")
        },
        {
          "segments": ruby("[認|みと]めざるを[得|え]ない")
        }
      ],
      "category": "avanzado",
      "register": [
        "formal",
        "written"
      ],
      "importance": "core",
      "tags": [
        "obligacion",
        "inevitable",
        "formal"
      ],
      "compareWith": [
        {
          "pattern": "〜わけにはいかない",
          "id": "n2-wakenihaikanai"
        },
        {
          "pattern": "〜しかない"
        }
      ],
      "caution": "Excepto する → せざるを得ない.",
      "examples": [
        {
          "segments": ruby("[状況|じょうきょう]を[考|かんが]えると、[計画|けいかく]を[変更|へんこう]せざるを[得|え]ない。"),
          "translation": "Considerando la situación, no nos queda más remedio que cambiar el plan."
        },
        {
          "segments": ruby("[証拠|しょうこ]がある[以上|いじょう]、[事実|じじつ]を[認|みと]めざるを[得|え]ない。"),
          "translation": "Dado que hay pruebas, no queda otra que admitir el hecho."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Buscas una forma formal de 'no me queda más remedio que aceptar'.",
          "answer": "〜ざるを得ない",
          "distractors": [
            "〜わけだ",
            "〜ばかりか",
            "〜にすぎない"
          ],
          "explanation": "La obligación inevitable formal se expresa con 〜ざるを得ない."
        }
      ],
      "ui": {
        "groupLabel": "N1",
        "accent": "#EF4444"
      }
    },
    {
      "id": "n1-nitaru",
      "level": "N1",
      "order": 2,
      "pattern": "Vる / N + に足る",
      "title": "Ser digno de",
      "meaning": "merecer / ser digno de",
      "nuance": "Indica que algo tiene mérito o valor suficiente para cierta reacción.",
      "formation": [
        {
          "segments": ruby("[信頼|しんらい]するに[足|た]る")
        },
        {
          "segments": ruby("[検討|けんとう]に[足|た]る")
        }
      ],
      "category": "juicio",
      "register": [
        "formal",
        "written"
      ],
      "importance": "medium",
      "tags": [
        "valoracion",
        "digno"
      ],
      "compareWith": [
        {
          "pattern": "〜に値する"
        }
      ],
      "caution": "Muy frecuente en texto formal, ensayos y crítica.",
      "examples": [
        {
          "segments": ruby("[彼|かれ]の[提案|ていあん]は[十分|じゅうぶん][検討|けんとう]に[足|た]る[内容|ないよう]だ。"),
          "translation": "Su propuesta merece plenamente ser considerada."
        },
        {
          "segments": ruby("その[行動|こうどう]は[尊敬|そんけい]に[足|た]る。"),
          "translation": "Esa conducta merece respeto."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Quieres decir 'ese dato merece atención'. ¿Qué patrón sirve?",
          "answer": "〜に足る",
          "distractors": [
            "〜にすぎない",
            "〜に違いない",
            "〜ものの"
          ],
          "explanation": "Se usa para valorar algo como digno de cierta reacción."
        }
      ],
      "ui": {
        "groupLabel": "N1",
        "accent": "#EF4444"
      }
    },
    {
      "id": "n1-niitarumade",
      "level": "N1",
      "order": 3,
      "pattern": "N + に至るまで",
      "title": "Hasta incluso / hasta llegar a",
      "meaning": "hasta / incluso en...",
      "nuance": "Muestra cobertura total, a menudo enfática y exhaustiva.",
      "formation": [
        {
          "segments": ruby("[細部|さいぶ]に[至|いた]るまで")
        },
        {
          "segments": ruby("[子|こ]どもに[至|いた]るまで")
        }
      ],
      "category": "limite",
      "register": [
        "formal",
        "written"
      ],
      "importance": "high",
      "tags": [
        "alcance",
        "totalidad",
        "enfasis"
      ],
      "compareWith": [
        {
          "pattern": "〜まで"
        },
        {
          "pattern": "〜はもちろん"
        }
      ],
      "caution": "Tiene tono más enfático y formal que un simple まで.",
      "examples": [
        {
          "segments": ruby("[資料|しりょう]は[細部|さいぶ]に[至|いた]るまで[丁寧|ていねい]に[作|つく]られている。"),
          "translation": "El material está hecho cuidadosamente hasta el más mínimo detalle."
        },
        {
          "segments": ruby("[会場|かいじょう]には[大人|おとな]から[子|こ]どもに[至|いた]るまで[多|おお]くの[人|ひと]が[集|あつ]まった。"),
          "translation": "Se reunió mucha gente en el lugar, desde adultos hasta niños."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Quieres dar idea de alcance exhaustivo: 'hasta el último detalle'.",
          "answer": "〜に至るまで",
          "distractors": [
            "〜まで",
            "〜ばかりか",
            "〜ことなく"
          ],
          "explanation": "Este patrón enfatiza cobertura exhaustiva."
        }
      ],
      "ui": {
        "groupLabel": "N1",
        "accent": "#EF4444"
      }
    },
    {
      "id": "n1-nikatakunai",
      "level": "N1",
      "order": 4,
      "pattern": "Vる + に難くない",
      "title": "No es difícil imaginar",
      "meaning": "es fácil imaginar / comprender",
      "nuance": "Se usa para decir que algo se puede imaginar o entender fácilmente por la situación.",
      "formation": [
        {
          "segments": ruby("[想像|そうぞう]するに[難|かた]くない")
        },
        {
          "segments": ruby("[理解|りかい]するに[難|かた]くない")
        }
      ],
      "category": "juicio",
      "register": [
        "formal",
        "written"
      ],
      "importance": "medium",
      "tags": [
        "inferencia",
        "escrito"
      ],
      "compareWith": [
        {
          "pattern": "〜に違いない",
          "id": "n2-nichigainai"
        },
        {
          "pattern": "〜はずだ"
        }
      ],
      "caution": "Muy típico en ensayo, artículo o texto analítico.",
      "examples": [
        {
          "segments": ruby("その[知|し]らせを[聞|き]いた[家族|かぞく]の[驚|おどろ]きは[想像|そうぞう]に[難|かた]くない。"),
          "translation": "No es difícil imaginar la sorpresa de la familia al escuchar esa noticia."
        },
        {
          "segments": ruby("[長年|ながねん][努力|どりょく]してきた[彼|かれ]の[悔|くや]しさは[理解|りかい]するに[難|かた]くない。"),
          "translation": "No es difícil comprender la frustración de alguien que se esforzó durante años."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Buscas una fórmula escrita de 'es fácil imaginar'. ¿Qué patrón encaja?",
          "answer": "〜に難くない",
          "distractors": [
            "〜に足る",
            "〜ならでは",
            "〜まみれ"
          ],
          "explanation": "Es una expresión formal para 'no es difícil imaginar/comprender'."
        }
      ],
      "ui": {
        "groupLabel": "N1",
        "accent": "#EF4444"
      }
    },
    {
      "id": "n1-nara-dewa",
      "level": "N1",
      "order": 5,
      "pattern": "N + ならでは",
      "title": "Precisamente por ser",
      "meaning": "solo porque es / característico de",
      "nuance": "Destaca una cualidad única propia de alguien o algo.",
      "formation": [
        {
          "segments": ruby("[京都|きょうと]ならでは")
        },
        {
          "segments": ruby("[専門家|せんもんか]ならでは")
        }
      ],
      "category": "juicio",
      "register": [
        "casual",
        "polite",
        "written"
      ],
      "importance": "high",
      "tags": [
        "caracteristico",
        "exclusividad"
      ],
      "compareWith": [
        {
          "pattern": "〜しかない"
        },
        {
          "pattern": "〜こそ"
        }
      ],
      "caution": "Subraya algo distintivo y difícil de reproducir.",
      "examples": [
        {
          "segments": ruby("これは[手作|てづく]りならではの[温|あたた]かみがあります。"),
          "translation": "Esto tiene una calidez propia de lo hecho a mano."
        },
        {
          "segments": ruby("[地元|じもと]の[人|ひと]ならではの[情報|じょうほう]を[教|おし]えてもらった。"),
          "translation": "Me dieron información que solo alguien local podría dar."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Quieres decir 'un sabor propio de esta ciudad'.",
          "answer": "〜ならでは",
          "distractors": [
            "〜にすぎない",
            "〜どころか",
            "〜ことなく"
          ],
          "explanation": "Se usa para resaltar algo característico o exclusivo."
        }
      ],
      "ui": {
        "groupLabel": "N1",
        "accent": "#EF4444"
      }
    },
    {
      "id": "n1-mamire",
      "level": "N1",
      "order": 6,
      "pattern": "N + まみれ",
      "title": "Cubierto de / lleno de",
      "meaning": "cubierto de...",
      "nuance": "Describe estar cubierto de algo, normalmente material o figurado con matiz negativo.",
      "formation": [
        {
          "segments": ruby("[泥|どろ]まみれ")
        },
        {
          "segments": ruby("[汗|あせ]まみれ")
        }
      ],
      "category": "avanzado",
      "register": [
        "casual",
        "polite"
      ],
      "importance": "medium",
      "tags": [
        "estado",
        "cubierto"
      ],
      "compareWith": [
        {
          "pattern": "〜だらけ"
        },
        {
          "pattern": "〜ずくめ"
        }
      ],
      "caution": "Se usa con cosas que 'manchan' o se adhieren; suele sonar físico o desagradable.",
      "examples": [
        {
          "segments": ruby("[子|こ]どもたちは[泥|どろ]まみれになって[遊|あそ]んでいた。"),
          "translation": "Los niños estaban jugando cubiertos de barro."
        },
        {
          "segments": ruby("[彼|かれ]は[汗|あせ]まみれで[戻|もど]ってきた。"),
          "translation": "Él volvió cubierto de sudor."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Quieres decir 'quedó cubierto de polvo'. ¿Qué patrón sirve?",
          "answer": "〜まみれ",
          "distractors": [
            "〜ならでは",
            "〜に足る",
            "〜わけだ"
          ],
          "explanation": "〜まみれ expresa estar cubierto de algo."
        }
      ],
      "ui": {
        "groupLabel": "N1",
        "accent": "#EF4444"
      }
    },
    {
      "id": "n1-zunihasumanai",
      "level": "N1",
      "order": 7,
      "pattern": "Vない-stem + ずにはすまない",
      "title": "No poder dejar de",
      "meaning": "no poder no... / sentirse obligado a...",
      "nuance": "Indica que, moral o emocionalmente, uno no puede dejar algo sin hacer.",
      "formation": [
        {
          "segments": ruby("[謝|あやま]らずにはすまない")
        },
        {
          "segments": ruby("[考|かんが]えずにはすまない")
        }
      ],
      "category": "restriccion",
      "register": [
        "formal",
        "written"
      ],
      "importance": "medium",
      "tags": [
        "moral",
        "inevitable",
        "emocion"
      ],
      "compareWith": [
        {
          "pattern": "〜ざるを得ない",
          "id": "n1-zaruwoenai"
        },
        {
          "pattern": "〜ないではいられない"
        }
      ],
      "caution": "Tiene un matiz más social/moral que meramente impulsivo.",
      "examples": [
        {
          "segments": ruby("こんな[迷惑|めいわく]をかけたのだから、[謝|あやま]らずにはすまない。"),
          "translation": "Como causé tantas molestias, no puedo no disculparme."
        },
        {
          "segments": ruby("この[結果|けっか]を[見|み]れば、[原因|げんいん]を[考|かんが]えずにはすまない。"),
          "translation": "Viendo este resultado, uno no puede dejar de pensar en la causa."
        }
      ],
      "quizSeeds": [
        {
          "type": "nuance_match",
          "prompt": "Sientes obligación moral de disculparte. ¿Qué patrón encaja mejor?",
          "answer": "〜ずにはすまない",
          "distractors": [
            "〜ざるを得ない",
            "〜わけにはいかない",
            "〜に違いない"
          ],
          "explanation": "Expresa imposibilidad moral o emocional de dejar algo sin hacer."
        }
      ],
      "ui": {
        "groupLabel": "N1",
        "accent": "#EF4444"
      }
    },
    {
      "id": "n1-kotonashinide",
      "level": "N1",
      "order": 8,
      "pattern": "N / V辞書形 + ことなしに",
      "title": "Sin...",
      "meaning": "sin...",
      "nuance": "Forma muy escrita para indicar ausencia de un paso o condición previa.",
      "formation": [
        {
          "segments": ruby("[努力|どりょく]することなしに")
        },
        {
          "segments": ruby("[許可|きょか]なくしてに[近|ちか]い")
        }
      ],
      "category": "formal",
      "register": [
        "formal",
        "written"
      ],
      "importance": "medium",
      "tags": [
        "formal",
        "sin",
        "escrito"
      ],
      "compareWith": [
        {
          "pattern": "〜ことなく",
          "id": "n2-kotonaku"
        },
        {
          "pattern": "〜ないで"
        }
      ],
      "caution": "Patrón literario/formal; en conversación se prefieren formas más simples.",
      "examples": [
        {
          "segments": ruby("[努力|どりょく]することなしに、[成功|せいこう]は[望|のぞ]めない。"),
          "translation": "No se puede esperar el éxito sin esforzarse."
        },
        {
          "segments": ruby("[十分|じゅうぶん]な[調査|ちょうさ]をすることなしに、[結論|けつろん]は[出|だ]せない。"),
          "translation": "No se puede sacar una conclusión sin investigar lo suficiente."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Necesitas una forma muy escrita de 'sin investigar'.",
          "answer": "〜ことなしに",
          "distractors": [
            "〜ないで",
            "〜てしまう",
            "〜ものの"
          ],
          "explanation": "Es una forma más literaria y formal de 'sin'."
        }
      ],
      "ui": {
        "groupLabel": "N1",
        "accent": "#EF4444"
      }
    },
    {
      "id": "n1-wokawakirini",
      "level": "N1",
      "order": 9,
      "pattern": "N + を皮切りに",
      "title": "Empezando por",
      "meaning": "comenzando con / a partir de",
      "nuance": "Marca el inicio de una serie de acciones, eventos o expansiones.",
      "formation": [
        {
          "segments": ruby("[東京|とうきょう]を[皮切|かわき]りに")
        },
        {
          "segments": ruby("[今年|ことし]を[皮切|かわき]りに")
        }
      ],
      "category": "resultado",
      "register": [
        "formal",
        "written"
      ],
      "importance": "high",
      "tags": [
        "inicio",
        "serie",
        "formal"
      ],
      "compareWith": [
        {
          "pattern": "〜をはじめ"
        },
        {
          "pattern": "〜から"
        }
      ],
      "caution": "No solo inicia algo; sugiere continuación posterior.",
      "examples": [
        {
          "segments": ruby("[東京|とうきょう][公演|こうえん]を[皮切|かわき]りに、[全国|ぜんこく]ツアーが[始|はじ]まる。"),
          "translation": "La gira nacional comenzará partiendo por la presentación en Tokio."
        },
        {
          "segments": ruby("[今年|ことし]を[皮切|かわき]りに、[新|あたら]しい[制度|せいど]が[導入|どうにゅう]される。"),
          "translation": "A partir de este año, se introducirá un nuevo sistema."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Quieres decir 'partiendo por Tokio, empieza la gira'.",
          "answer": "〜を皮切りに",
          "distractors": [
            "〜に至るまで",
            "〜ならでは",
            "〜に足る"
          ],
          "explanation": "Expresa el punto de partida de una serie posterior."
        }
      ],
      "ui": {
        "groupLabel": "N1",
        "accent": "#EF4444"
      }
    },
    {
      "id": "n1-sobakara",
      "level": "N1",
      "order": 10,
      "pattern": "Vる + そばから",
      "title": "Tan pronto como... otra vez",
      "meaning": "apenas... y ya...",
      "nuance": "Describe que algo se deshace o repite inmediatamente después de hacerse, a menudo con frustración.",
      "formation": [
        {
          "segments": ruby("[片付|かたづ]けるそばから")
        },
        {
          "segments": ruby("[教|おし]えるそばから")
        }
      ],
      "category": "frecuencia",
      "register": [
        "casual",
        "polite",
        "written"
      ],
      "importance": "medium",
      "tags": [
        "repeticion",
        "frustracion"
      ],
      "compareWith": [
        {
          "pattern": "〜たびに",
          "id": "n3-tabini"
        },
        {
          "pattern": "〜が早いか",
          "id": "n1-gahayaiKa"
        }
      ],
      "caution": "Suele implicar que el esfuerzo no dura porque la situación se revierte enseguida.",
      "examples": [
        {
          "segments": ruby("[片付|かたづ]けるそばから、[子|こ]どもがおもちゃを[出|だ]してしまう。"),
          "translation": "Apenas ordeno, los niños vuelven a sacar los juguetes."
        },
        {
          "segments": ruby("[覚|おぼ]えたそばから[忘|わす]れてしまう。"),
          "translation": "Apenas lo memorizo, se me olvida."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Quieres expresar 'apenas lo ordeno, se desordena otra vez'.",
          "answer": "〜そばから",
          "distractors": [
            "〜たびに",
            "〜が早いか",
            "〜ばかりか"
          ],
          "explanation": "La repetición inmediata y frustrante se expresa con 〜そばから."
        }
      ],
      "ui": {
        "groupLabel": "N1",
        "accent": "#EF4444"
      }
    },
    {
      "id": "n1-gahayaiKa",
      "level": "N1",
      "order": 11,
      "pattern": "Vる + が早いか",
      "title": "Apenas...",
      "meaning": "apenas... y enseguida...",
      "nuance": "Indica que una acción ocurre inmediatamente después de otra, con tono escrito/narrativo.",
      "formation": [
        {
          "segments": ruby("[座|すわ]るが[早|はや]いか")
        },
        {
          "segments": ruby("[家|いえ]に[帰|かえ]るが[早|はや]いか")
        }
      ],
      "category": "tiempo",
      "register": [
        "written",
        "formal"
      ],
      "importance": "medium",
      "tags": [
        "inmediatez",
        "narracion"
      ],
      "compareWith": [
        {
          "pattern": "〜や否や",
          "id": "n1-yaInaya"
        },
        {
          "pattern": "〜とたん"
        }
      ],
      "caution": "Muy usado en narrativa y escritura; menos común en conversación cotidiana.",
      "examples": [
        {
          "segments": ruby("[彼|かれ]は[家|いえ]に[帰|かえ]るが[早|はや]いか、ベッドに[倒|たお]れ[込|こ]んだ。"),
          "translation": "Apenas llegó a casa, se dejó caer en la cama."
        },
        {
          "segments": ruby("ベルが[鳴|な]るが[早|はや]いか、[学生|がくせい]たちは[教室|きょうしつ]を[飛|と]び[出|だ]した。"),
          "translation": "Apenas sonó la campana, los estudiantes salieron corriendo del salón."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Necesitas un 'apenas' narrativo y muy inmediato. ¿Qué patrón sirve?",
          "answer": "〜が早いか",
          "distractors": [
            "〜そばから",
            "〜うちに",
            "〜ものの"
          ],
          "explanation": "Expresa sucesión inmediata con tono escrito."
        }
      ],
      "ui": {
        "groupLabel": "N1",
        "accent": "#EF4444"
      }
    },
    {
      "id": "n1-yaInaya",
      "level": "N1",
      "order": 12,
      "pattern": "Vる + や否や",
      "title": "En cuanto...",
      "meaning": "en cuanto... / apenas...",
      "nuance": "Patrón escrito para sucesión inmediata de eventos.",
      "formation": [
        {
          "segments": ruby("[見|み]るや[否|いな]や")
        },
        {
          "segments": ruby("[着|つ]くや[否|いな]や")
        }
      ],
      "category": "tiempo",
      "register": [
        "written",
        "formal"
      ],
      "importance": "medium",
      "tags": [
        "inmediatez",
        "literario"
      ],
      "compareWith": [
        {
          "pattern": "〜が早いか",
          "id": "n1-gahayaiKa"
        },
        {
          "pattern": "〜とたん"
        }
      ],
      "caution": "Muy literario/formal; útil para lectura avanzada más que para conversación diaria.",
      "examples": [
        {
          "segments": ruby("[彼|かれ]は[手紙|てがみ]を[見|み]るや[否|いな]や、[表情|ひょうじょう]を[変|か]えた。"),
          "translation": "En cuanto vio la carta, cambió de expresión."
        },
        {
          "segments": ruby("[駅|えき]に[着|つ]くや[否|いな]や、[雨|あめ]が[降|ふ]り[出|だ]した。"),
          "translation": "Apenas llegué a la estación, empezó a llover."
        }
      ],
      "quizSeeds": [
        {
          "type": "choose_expression",
          "prompt": "Buscas una forma escrita de 'en cuanto vio el mensaje'.",
          "answer": "〜や否や",
          "distractors": [
            "〜たびに",
            "〜てから",
            "〜ようにする"
          ],
          "explanation": "Es una expresión escrita para eventos consecutivos inmediatos."
        }
      ],
      "ui": {
        "groupLabel": "N1",
        "accent": "#EF4444"
      }
    }
  ],
  "practiceSets": [
    {
      "id": "mixed-n5-core",
      "label": "N5 básico mezclado",
      "level": "N5",
      "expressionIds": [
        "n5-tai",
        "n5-temoii",
        "n5-tehaikenai",
        "n5-teiru",
        "n5-tekara",
        "n5-takoto"
      ],
      "recommendedModes": [
        "choose_expression",
        "fill_blank"
      ]
    },
    {
      "id": "mixed-n4-habits",
      "label": "N4 hábitos y planes",
      "level": "N4",
      "expressionIds": [
        "n4-nakerebanaranai",
        "n4-nakutemoii",
        "n4-yotei",
        "n4-nagara",
        "n4-you-ni-naru",
        "n4-te-miru"
      ],
      "recommendedModes": [
        "choose_expression",
        "nuance_match",
        "transformation"
      ]
    },
    {
      "id": "mixed-n3-logic",
      "label": "N3 cambio y lógica",
      "level": "N3",
      "expressionIds": [
        "n3-kotoni-suru",
        "n3-kotoni-naru",
        "n3-you-ni-suru",
        "n3-wakeda",
        "n3-wakedehanai",
        "n3-okagede",
        "n3-seide"
      ],
      "recommendedModes": [
        "nuance_match",
        "sentence_build",
        "transformation"
      ]
    },
    {
      "id": "mixed-n2-academic",
      "label": "N2 formal y contraste",
      "level": "N2",
      "expressionIds": [
        "n2-wakenihaikanai",
        "n2-nichigainai",
        "n2-kanenai",
        "n2-nisuginai",
        "n2-bakarika",
        "n2-dokoroka",
        "n2-monono"
      ],
      "recommendedModes": [
        "choose_expression",
        "nuance_match"
      ]
    },
    {
      "id": "mixed-n1-reading",
      "label": "N1 lectura avanzada",
      "level": "N1",
      "expressionIds": [
        "n1-zaruwoenai",
        "n1-nara-dewa",
        "n1-niitarumade",
        "n1-kotonashinide",
        "n1-gahayaiKa",
        "n1-yaInaya"
      ],
      "recommendedModes": [
        "choose_expression",
        "reading_focus"
      ]
    }
  ],
  "challengeIdeas": [
    {
      "id": "context-chooser",
      "label": "Elige la expresión por contexto",
      "description": "Mostrar una situación breve y 4 patrones parecidos para forzar discriminación real de matiz."
    },
    {
      "id": "contrast-pairs",
      "label": "Pares confusos",
      "description": "Enfrentar expresiones cercanas como 〜つもり vs 〜予定, 〜ようにする vs 〜ようになる, 〜おかげで vs 〜せいで."
    },
    {
      "id": "timeline-drill",
      "label": "Línea temporal",
      "description": "Ideal para patrones de secuencia como 〜てから, 〜ところ, 〜うちに, 〜が早いか."
    },
    {
      "id": "register-check",
      "label": "Nivel de formalidad",
      "description": "El usuario debe elegir si una expresión suena casual, estándar, formal o escrita."
    },
    {
      "id": "production-drill",
      "label": "Producción guiada",
      "description": "Dar una oración base y pedir transformarla usando una expresión concreta, sin mostrar la respuesta completa."
    }
  ]
};