// src/data/grammar/adjectives.ts

import { RubySegment } from "@/app/components/ui/Ruby";


// ─── Types ────────────────────────────────────────────────────────────────────

export type AdjType = "i" | "na";

export interface AdjExample {
  segments: RubySegment[];
  translation: string;
}

export interface AdjConjRow {
  label: string;      // "Presente afirmativo"
  form: string;       // the conjugated ending e.g. "い" "くない"
  note?: string;
  examples: AdjExample[];
}

export interface AdjEntry {
  dict: string;       // 高い / 静か
  reading: string;    // たかい / しずか
  stem: string;       // 高 / 静か (part before い or な)
  meaning: string;
  type: AdjType;
  level: "N5" | "N4" | "N3" | "N2" | "N1";
}

// ─── Adjective list ───────────────────────────────────────────────────────────

export const ADJECTIVE_LIST: AdjEntry[] = [
  // ── N5・い形容詞 ─────────────────────────────────────────────────────
  { dict: "高い",     reading: "たかい",     stem: "高",       meaning: "alto / caro",                type: "i",  level: "N5" },
  { dict: "安い",     reading: "やすい",     stem: "安",       meaning: "barato",                     type: "i",  level: "N5" },
  { dict: "大きい",   reading: "おおきい",   stem: "大き",     meaning: "grande",                     type: "i",  level: "N5" },
  { dict: "小さい",   reading: "ちいさい",   stem: "小さ",     meaning: "pequeño",                    type: "i",  level: "N5" },
  { dict: "新しい",   reading: "あたらしい", stem: "新し",     meaning: "nuevo",                      type: "i",  level: "N5" },
  { dict: "古い",     reading: "ふるい",     stem: "古",       meaning: "viejo / antiguo",            type: "i",  level: "N5" },
  { dict: "良い",     reading: "いい",       stem: "良",       meaning: "bueno",                      type: "i",  level: "N5" },
  { dict: "悪い",     reading: "わるい",     stem: "悪",       meaning: "malo",                       type: "i",  level: "N5" },
  { dict: "暑い",     reading: "あつい",     stem: "暑",       meaning: "caluroso",                   type: "i",  level: "N5" },
  { dict: "寒い",     reading: "さむい",     stem: "寒",       meaning: "frío",                       type: "i",  level: "N5" },
  { dict: "熱い",     reading: "あつい",     stem: "熱",       meaning: "caliente",                   type: "i",  level: "N5" },
  { dict: "冷たい",   reading: "つめたい",   stem: "冷た",     meaning: "frío al tacto",              type: "i",  level: "N5" },
  { dict: "暖かい",   reading: "あたたかい", stem: "暖か",     meaning: "templado / cálido",          type: "i",  level: "N5" },
  { dict: "涼しい",   reading: "すずしい",   stem: "涼し",     meaning: "fresco",                     type: "i",  level: "N5" },
  { dict: "速い",     reading: "はやい",     stem: "速",       meaning: "rápido",                     type: "i",  level: "N5" },
  { dict: "早い",     reading: "はやい",     stem: "早",       meaning: "temprano",                   type: "i",  level: "N5" },
  { dict: "遅い",     reading: "おそい",     stem: "遅",       meaning: "lento / tarde",              type: "i",  level: "N5" },
  { dict: "楽しい",   reading: "たのしい",   stem: "楽し",     meaning: "divertido",                  type: "i",  level: "N5" },
  { dict: "面白い",   reading: "おもしろい", stem: "面白",     meaning: "interesante / entretenido",  type: "i",  level: "N5" },
  { dict: "難しい",   reading: "むずかしい", stem: "難し",     meaning: "difícil",                    type: "i",  level: "N5" },
  { dict: "易しい",   reading: "やさしい",   stem: "易し",     meaning: "fácil",                      type: "i",  level: "N5" },
  { dict: "優しい",   reading: "やさしい",   stem: "優し",     meaning: "amable / gentil",            type: "i",  level: "N5" },
  { dict: "長い",     reading: "ながい",     stem: "長",       meaning: "largo",                      type: "i",  level: "N5" },
  { dict: "短い",     reading: "みじかい",   stem: "短",       meaning: "corto",                      type: "i",  level: "N5" },
  { dict: "多い",     reading: "おおい",     stem: "多",       meaning: "mucho / muchos",             type: "i",  level: "N5" },
  { dict: "少ない",   reading: "すくない",   stem: "少な",     meaning: "poco / pocos",               type: "i",  level: "N5" },
  { dict: "広い",     reading: "ひろい",     stem: "広",       meaning: "amplio / espacioso",         type: "i",  level: "N5" },
  { dict: "近い",     reading: "ちかい",     stem: "近",       meaning: "cercano",                    type: "i",  level: "N5" },
  { dict: "遠い",     reading: "とおい",     stem: "遠",       meaning: "lejano",                     type: "i",  level: "N5" },
  { dict: "忙しい",   reading: "いそがしい", stem: "忙し",     meaning: "ocupado",                    type: "i",  level: "N5" },
  { dict: "美味しい", reading: "おいしい",   stem: "美味し",   meaning: "delicioso",                  type: "i",  level: "N5" },
  { dict: "重い",     reading: "おもい",     stem: "重",       meaning: "pesado",                     type: "i",  level: "N5" },
  { dict: "軽い",     reading: "かるい",     stem: "軽",       meaning: "liviano",                    type: "i",  level: "N5" },
  { dict: "可愛い",   reading: "かわいい",   stem: "可愛",     meaning: "lindo / adorable",           type: "i",  level: "N5" },
  { dict: "若い",     reading: "わかい",     stem: "若",       meaning: "joven",                      type: "i",  level: "N5" },
  { dict: "明るい",   reading: "あかるい",   stem: "明る",     meaning: "brillante / alegre",         type: "i",  level: "N5" },
  { dict: "暗い",     reading: "くらい",     stem: "暗",       meaning: "oscuro",                     type: "i",  level: "N5" },
  { dict: "赤い",     reading: "あかい",     stem: "赤",       meaning: "rojo",                       type: "i",  level: "N5" },
  { dict: "青い",     reading: "あおい",     stem: "青",       meaning: "azul",                       type: "i",  level: "N5" },
  { dict: "白い",     reading: "しろい",     stem: "白",       meaning: "blanco",                     type: "i",  level: "N5" },
  { dict: "黒い",     reading: "くろい",     stem: "黒",       meaning: "negro",                      type: "i",  level: "N5" },
  { dict: "欲しい",   reading: "ほしい",     stem: "欲し",     meaning: "querer / desear",            type: "i",  level: "N5" },
  { dict: "強い",     reading: "つよい",     stem: "強",       meaning: "fuerte",                     type: "i",  level: "N5" },
  { dict: "弱い",     reading: "よわい",     stem: "弱",       meaning: "débil",                      type: "i",  level: "N5" },
  { dict: "甘い",     reading: "あまい",     stem: "甘",       meaning: "dulce",                      type: "i",  level: "N5" },
  { dict: "辛い",     reading: "からい",     stem: "辛",       meaning: "picante",                    type: "i",  level: "N5" },
  { dict: "汚い",     reading: "きたない",   stem: "汚",       meaning: "sucio",                      type: "i",  level: "N5" },
  { dict: "危ない",   reading: "あぶない",   stem: "危な",     meaning: "peligroso",                  type: "i",  level: "N5" },

  // ── N5・な形容詞 ─────────────────────────────────────────────────────
  { dict: "静か",     reading: "しずか",       stem: "静か",     meaning: "tranquilo",                    type: "na", level: "N5" },
  { dict: "賑やか",   reading: "にぎやか",     stem: "賑やか",   meaning: "animado / bullicioso",        type: "na", level: "N5" },
  { dict: "好き",     reading: "すき",         stem: "好き",     meaning: "gustar / favorito",           type: "na", level: "N5" },
  { dict: "大好き",   reading: "だいすき",     stem: "大好き",   meaning: "encantar / gustar mucho",     type: "na", level: "N5" },
  { dict: "嫌い",     reading: "きらい",       stem: "嫌い",     meaning: "desagradar / odiar",          type: "na", level: "N5" },
  { dict: "上手",     reading: "じょうず",     stem: "上手",     meaning: "hábil / bueno en",            type: "na", level: "N5" },
  { dict: "下手",     reading: "へた",         stem: "下手",     meaning: "torpe / malo en",             type: "na", level: "N5" },
  { dict: "親切",     reading: "しんせつ",     stem: "親切",     meaning: "amable",                      type: "na", level: "N5" },
  { dict: "便利",     reading: "べんり",       stem: "便利",     meaning: "conveniente",                 type: "na", level: "N5" },
  { dict: "不便",     reading: "ふべん",       stem: "不便",     meaning: "inconveniente",               type: "na", level: "N5" },
  { dict: "大切",     reading: "たいせつ",     stem: "大切",     meaning: "importante / valioso",        type: "na", level: "N5" },
  { dict: "元気",     reading: "げんき",       stem: "元気",     meaning: "bien / con energía",          type: "na", level: "N5" },
  { dict: "大丈夫",   reading: "だいじょうぶ", stem: "大丈夫",   meaning: "estar bien / ok",             type: "na", level: "N5" },
  { dict: "綺麗",     reading: "きれい",       stem: "綺麗",     meaning: "bonito / limpio",             type: "na", level: "N5" },
  { dict: "暇",       reading: "ひま",         stem: "暇",       meaning: "libre / desocupado",          type: "na", level: "N5" },
  { dict: "本当",     reading: "ほんとう",     stem: "本当",     meaning: "verdadero / real",            type: "na", level: "N5" },
  { dict: "色々",     reading: "いろいろ",     stem: "色々",     meaning: "varios / diversos",           type: "na", level: "N5" },
  { dict: "嫌",       reading: "いや",         stem: "嫌",       meaning: "desagradable",                type: "na", level: "N5" },

  // ── N4・い形容詞 ─────────────────────────────────────────────────────
  { dict: "狭い",       reading: "せまい",       stem: "狭",       meaning: "estrecho",                    type: "i",  level: "N4" },
  { dict: "嬉しい",     reading: "うれしい",     stem: "嬉し",     meaning: "feliz / contento",            type: "i",  level: "N4" },
  { dict: "悲しい",     reading: "かなしい",     stem: "悲し",     meaning: "triste",                      type: "i",  level: "N4" },
  { dict: "恥ずかしい", reading: "はずかしい",   stem: "恥ずかし", meaning: "vergonzoso / apenado",        type: "i",  level: "N4" },
  { dict: "浅い",       reading: "あさい",       stem: "浅",       meaning: "poco profundo",               type: "i",  level: "N4" },
  { dict: "深い",       reading: "ふかい",       stem: "深",       meaning: "profundo",                    type: "i",  level: "N4" },
  { dict: "硬い",       reading: "かたい",       stem: "硬",       meaning: "duro / rígido",               type: "i",  level: "N4" },
  { dict: "柔らかい",   reading: "やわらかい",   stem: "柔らか",   meaning: "blando / suave",              type: "i",  level: "N4" },
  { dict: "厳しい",     reading: "きびしい",     stem: "厳し",     meaning: "estricto / severo",           type: "i",  level: "N4" },
  { dict: "細かい",     reading: "こまかい",     stem: "細か",     meaning: "detallado / pequeño",         type: "i",  level: "N4" },
  { dict: "丸い",       reading: "まるい",       stem: "丸",       meaning: "redondo",                     type: "i",  level: "N4" },
  { dict: "寂しい",     reading: "さびしい",     stem: "寂し",     meaning: "solitario / triste",          type: "i",  level: "N4" },
  { dict: "正しい",     reading: "ただしい",     stem: "正し",     meaning: "correcto",                    type: "i",  level: "N4" },
  { dict: "珍しい",     reading: "めずらしい",   stem: "珍し",     meaning: "raro / inusual",              type: "i",  level: "N4" },
  { dict: "酷い",       reading: "ひどい",       stem: "酷",       meaning: "terrible / cruel",            type: "i",  level: "N4" },
  { dict: "苦しい",     reading: "くるしい",     stem: "苦し",     meaning: "doloroso / difícil",          type: "i",  level: "N4" },

  // ── N4・な形容詞 ─────────────────────────────────────────────────────
  { dict: "安心",     reading: "あんしん",   stem: "安心",     meaning: "tranquilo / seguro emocionalmente", type: "na", level: "N4" },
  { dict: "安全",     reading: "あんぜん",   stem: "安全",     meaning: "seguro",                           type: "na", level: "N4" },
  { dict: "大事",     reading: "だいじ",     stem: "大事",     meaning: "importante / serio",                type: "na", level: "N4" },
  { dict: "複雑",     reading: "ふくざつ",   stem: "複雑",     meaning: "complejo",                          type: "na", level: "N4" },
  { dict: "反対",     reading: "はんたい",   stem: "反対",     meaning: "contrario / opuesto",               type: "na", level: "N4" },
  { dict: "変",       reading: "へん",       stem: "変",       meaning: "raro / extraño",                    type: "na", level: "N4" },
  { dict: "簡単",     reading: "かんたん",   stem: "簡単",     meaning: "simple / fácil",                    type: "na", level: "N4" },
  { dict: "危険",     reading: "きけん",     stem: "危険",     meaning: "peligroso",                         type: "na", level: "N4" },
  { dict: "十分",     reading: "じゅうぶん", stem: "十分",     meaning: "suficiente",                        type: "na", level: "N4" },
  { dict: "必要",     reading: "ひつよう",   stem: "必要",     meaning: "necesario",                         type: "na", level: "N4" },
  { dict: "無理",     reading: "むり",       stem: "無理",     meaning: "imposible / forzado",               type: "na", level: "N4" },
  { dict: "無駄",     reading: "むだ",       stem: "無駄",     meaning: "inútil / desperdiciado",            type: "na", level: "N4" },
  { dict: "残念",     reading: "ざんねん",   stem: "残念",     meaning: "lamentable",                        type: "na", level: "N4" },
  { dict: "真面目",   reading: "まじめ",     stem: "真面目",   meaning: "serio / aplicado",                  type: "na", level: "N4" },
  { dict: "特別",     reading: "とくべつ",   stem: "特別",     meaning: "especial",                          type: "na", level: "N4" },
  { dict: "自由",     reading: "じゆう",     stem: "自由",     meaning: "libre",                             type: "na", level: "N4" },
  { dict: "有名",     reading: "ゆうめい",   stem: "有名",     meaning: "famoso",                            type: "na", level: "N4" },
  { dict: "正直",     reading: "しょうじき", stem: "正直",     meaning: "honesto",                           type: "na", level: "N4" },
  { dict: "熱心",     reading: "ねっしん",   stem: "熱心",     meaning: "entusiasta / dedicado",             type: "na", level: "N4" },
  { dict: "普通",     reading: "ふつう",     stem: "普通",     meaning: "normal",                            type: "na", level: "N4" },
  { dict: "不思議",   reading: "ふしぎ",     stem: "不思議",   meaning: "misterioso / extraño",              type: "na", level: "N4" },

  // ── N3・い形容詞 ─────────────────────────────────────────────────────
  { dict: "激しい",   reading: "はげしい",   stem: "激し",     meaning: "intenso / violento",            type: "i",  level: "N3" },
  { dict: "怪しい",   reading: "あやしい",   stem: "怪し",     meaning: "sospechoso",                    type: "i",  level: "N3" },
  { dict: "鋭い",     reading: "するどい",   stem: "鋭",       meaning: "afilado / agudo",               type: "i",  level: "N3" },
  { dict: "緩い",     reading: "ゆるい",     stem: "緩",       meaning: "flojo / no estricto",           type: "i",  level: "N3" },
  { dict: "上手い",   reading: "うまい",     stem: "上手",     meaning: "hábil / sabroso",               type: "i",  level: "N3" },
  { dict: "宜しい",   reading: "よろしい",   stem: "宜し",     meaning: "bien / correcto (formal)",      type: "i",  level: "N3" },
  { dict: "親しい",   reading: "したしい",   stem: "親し",     meaning: "cercano / íntimo",              type: "i",  level: "N3" },
  { dict: "惜しい",   reading: "おしい",     stem: "惜し",     meaning: "lamentable / casi",             type: "i",  level: "N3" },
  { dict: "恐ろしい", reading: "おそろしい", stem: "恐ろし",   meaning: "terrible / espantoso",          type: "i",  level: "N3" },
  { dict: "懐かしい", reading: "なつかしい", stem: "懐かし",   meaning: "nostálgico",                    type: "i",  level: "N3" },

  // ── N3・な形容詞 ─────────────────────────────────────────────────────
  { dict: "明らか",   reading: "あきらか",   stem: "明らか",   meaning: "claro / evidente",              type: "na", level: "N3" },
  { dict: "新た",     reading: "あらた",     stem: "新た",     meaning: "nuevo / renovado",              type: "na", level: "N3" },
  { dict: "駄目",     reading: "だめ",       stem: "駄目",     meaning: "inútil / no sirve",             type: "na", level: "N3" },
  { dict: "不利",     reading: "ふり",       stem: "不利",     meaning: "desfavorable",                  type: "na", level: "N3" },
  { dict: "不足",     reading: "ふそく",     stem: "不足",     meaning: "insuficiente / escaso",         type: "na", level: "N3" },
  { dict: "平気",     reading: "へいき",     stem: "平気",     meaning: "tranquilo / sin problema",      type: "na", level: "N3" },
  { dict: "急",       reading: "きゅう",     stem: "急",       meaning: "repentino / urgente",           type: "na", level: "N3" },
  { dict: "器用",     reading: "きよう",     stem: "器用",     meaning: "hábil / mañoso",                type: "na", level: "N3" },
  { dict: "正確",     reading: "せいかく",   stem: "正確",     meaning: "exacto",                        type: "na", level: "N3" },
  { dict: "勝手",     reading: "かって",     stem: "勝手",     meaning: "egoísta / a su manera",         type: "na", level: "N3" },
  { dict: "盛ん",     reading: "さかん",     stem: "盛ん",     meaning: "activo / próspero",             type: "na", level: "N3" },
  { dict: "完全",     reading: "かんぜん",   stem: "完全",     meaning: "completo / perfecto",           type: "na", level: "N3" },
  { dict: "逆",       reading: "ぎゃく",     stem: "逆",       meaning: "opuesto / inverso",             type: "na", level: "N3" },
  { dict: "豊か",     reading: "ゆたか",     stem: "豊か",     meaning: "abundante / rico",              type: "na", level: "N3" },
  { dict: "地味",     reading: "じみ",       stem: "地味",     meaning: "sobrio / poco llamativo",       type: "na", level: "N3" },
  { dict: "派手",     reading: "はで",       stem: "派手",     meaning: "llamativo / vistoso",           type: "na", level: "N3" },
  { dict: "真剣",     reading: "しんけん",   stem: "真剣",     meaning: "serio / sincero",               type: "na", level: "N3" },
  { dict: "適当",     reading: "てきとう",   stem: "適当",     meaning: "adecuado / apropiado",          type: "na", level: "N3" },
  { dict: "最高",     reading: "さいこう",   stem: "最高",     meaning: "excelente / el mejor",          type: "na", level: "N3" },
  { dict: "最低",     reading: "さいてい",   stem: "最低",     meaning: "pésimo / el peor",              type: "na", level: "N3" },
  { dict: "自然",     reading: "しぜん",     stem: "自然",     meaning: "natural",                       type: "na", level: "N3" },
  { dict: "立派",     reading: "りっぱ",     stem: "立派",     meaning: "magnífico / espléndido",        type: "na", level: "N3" },
  { dict: "確か",     reading: "たしか",     stem: "確か",     meaning: "seguro / cierto",               type: "na", level: "N3" },

  // ── N2・い形容詞 ─────────────────────────────────────────────────────
  { dict: "青白い",     reading: "あおじろい",     stem: "青白",     meaning: "pálido / blanquiazul",           type: "i",  level: "N2" },
  { dict: "著しい",     reading: "いちじるしい",   stem: "著し",     meaning: "notable / marcado",              type: "i",  level: "N2" },
  { dict: "幼い",       reading: "おさない",       stem: "幼",       meaning: "infantil / muy joven",           type: "i",  level: "N2" },
  { dict: "羨ましい",   reading: "うらやましい",   stem: "羨まし",   meaning: "envidiable",                     type: "i",  level: "N2" },
  { dict: "憎い",       reading: "にくい",         stem: "憎",       meaning: "odioso / detestable",            type: "i",  level: "N2" },
  { dict: "物足りない", reading: "ものたりない",   stem: "物足りな", meaning: "insuficiente / que deja corto",  type: "i",  level: "N2" },
  { dict: "相応しい",   reading: "ふさわしい",     stem: "相応し",   meaning: "apropiado / digno de",           type: "i",  level: "N2" },
  { dict: "乏しい",     reading: "とぼしい",       stem: "乏し",     meaning: "escaso / pobre",                 type: "i",  level: "N2" },
  { dict: "荒っぽい",   reading: "あらっぽい",     stem: "荒っぽ",   meaning: "brusco / rudo",                  type: "i",  level: "N2" },
  { dict: "素早い",     reading: "すばやい",       stem: "素早",     meaning: "rápido / ágil",                  type: "i",  level: "N2" },

  // ── N2・な形容詞 ─────────────────────────────────────────────────────
  { dict: "意地悪",   reading: "いじわる",   stem: "意地悪",   meaning: "malo / cruel",                   type: "na", level: "N2" },
  { dict: "真っ青",   reading: "まっさお",   stem: "真っ青",   meaning: "azul intenso / pálido",          type: "na", level: "N2" },
  { dict: "真っ白",   reading: "まっしろ",   stem: "真っ白",   meaning: "blanco puro",                    type: "na", level: "N2" },
  { dict: "透明",     reading: "とうめい",   stem: "透明",     meaning: "transparente",                   type: "na", level: "N2" },
  { dict: "曖昧",     reading: "あいまい",   stem: "曖昧",     meaning: "ambiguo",                        type: "na", level: "N2" },
  { dict: "厄介",     reading: "やっかい",   stem: "厄介",     meaning: "problemático / molesto",         type: "na", level: "N2" },
  { dict: "莫大",     reading: "ばくだい",   stem: "莫大",     meaning: "enorme / inmenso",               type: "na", level: "N2" },
  { dict: "僅か",     reading: "わずか",     stem: "僅か",     meaning: "escaso / apenas",                type: "na", level: "N2" },
  { dict: "妥当",     reading: "だとう",     stem: "妥当",     meaning: "válido / razonable",             type: "na", level: "N2" },
  { dict: "微妙",     reading: "びみょう",   stem: "微妙",     meaning: "sutil / delicado",               type: "na", level: "N2" },
  { dict: "無邪気",   reading: "むじゃき",   stem: "無邪気",   meaning: "inocente / ingenuo",            type: "na", level: "N2" },
  { dict: "平等",     reading: "びょうどう", stem: "平等",     meaning: "igualitario / equitativo",       type: "na", level: "N2" },
  { dict: "強引",     reading: "ごういん",   stem: "強引",     meaning: "forzado / autoritario",          type: "na", level: "N2" },
  { dict: "重大",     reading: "じゅうだい", stem: "重大",     meaning: "grave / importante",             type: "na", level: "N2" },
  { dict: "膨大",     reading: "ぼうだい",   stem: "膨大",     meaning: "enorme / vasto",                 type: "na", level: "N2" },
  { dict: "露骨",     reading: "ろこつ",     stem: "露骨",     meaning: "demasiado directo / descarado",  type: "na", level: "N2" },
  { dict: "斬新",     reading: "ざんしん",   stem: "斬新",     meaning: "innovador / novedoso",          type: "na", level: "N2" },

  // ── N1・い形容詞 ─────────────────────────────────────────────────────
  { dict: "快い",       reading: "こころよい",   stem: "快",       meaning: "agradable",                    type: "i",  level: "N1" },
  { dict: "疎い",       reading: "うとい",       stem: "疎",       meaning: "poco familiarizado con",      type: "i",  level: "N1" },
  { dict: "甚だしい",   reading: "はなはだしい", stem: "甚だし",   meaning: "extremo / excesivo",          type: "i",  level: "N1" },
  { dict: "煩わしい",   reading: "わずらわしい", stem: "煩わし",   meaning: "molesto / fastidioso",        type: "i",  level: "N1" },
  { dict: "見苦しい",   reading: "みぐるしい",   stem: "見苦し",   meaning: "feo de ver / lamentable",    type: "i",  level: "N1" },
  { dict: "紛らわしい", reading: "まぎらわしい", stem: "紛らわし", meaning: "confuso / engañoso",         type: "i",  level: "N1" },
  { dict: "好ましい",   reading: "このましい",   stem: "好まし",   meaning: "deseable / favorable",       type: "i",  level: "N1" },
  { dict: "潔い",       reading: "いさぎよい",   stem: "潔",       meaning: "honorable / sin apego",      type: "i",  level: "N1" },

  // ── N1・な形容詞 ─────────────────────────────────────────────────────
  { dict: "明白",     reading: "めいはく",   stem: "明白",     meaning: "claro / explícito",             type: "na", level: "N1" },
  { dict: "悲惨",     reading: "ひさん",     stem: "悲惨",     meaning: "trágico / miserable",           type: "na", level: "N1" },
  { dict: "顕著",     reading: "けんちょ",   stem: "顕著",     meaning: "notable / destacado",           type: "na", level: "N1" },
  { dict: "厳重",     reading: "げんじゅう", stem: "厳重",     meaning: "estricto / severo",             type: "na", level: "N1" },
  { dict: "緻密",     reading: "ちみつ",     stem: "緻密",     meaning: "minucioso / detallado",         type: "na", level: "N1" },
  { dict: "健全",     reading: "けんぜん",   stem: "健全",     meaning: "sano / sólido",                 type: "na", level: "N1" },
  { dict: "滑稽",     reading: "こっけい",   stem: "滑稽",     meaning: "ridículo / cómico",             type: "na", level: "N1" },
  { dict: "円滑",     reading: "えんかつ",   stem: "円滑",     meaning: "fluido / sin fricciones",       type: "na", level: "N1" },
  { dict: "強硬",     reading: "きょうこう", stem: "強硬",     meaning: "duro / inflexible",             type: "na", level: "N1" },
  { dict: "ずさん",   reading: "ずさん",     stem: "ずさん",   meaning: "descuidado / chapucero",        type: "na", level: "N1" },
  { dict: "冷淡",     reading: "れいたん",   stem: "冷淡",     meaning: "frío / indiferente",            type: "na", level: "N1" },
  { dict: "簡素",     reading: "かんそ",     stem: "簡素",     meaning: "simple / austero",              type: "na", level: "N1" },
  { dict: "巧妙",     reading: "こうみょう", stem: "巧妙",     meaning: "ingenioso / hábil",             type: "na", level: "N1" },
];

// ─── い-adjective conjugation table ──────────────────────────────────────────

export const I_ADJ_CONJUGATIONS: AdjConjRow[] = [
  {
    label: "Presente afirmativo",
    form: "〜い",
    note: "Forma diccionario. Se usa antes de sustantivos o al final de oración.",
    examples: [
      { segments: [{ text: "高", ruby: "たか" }, { text: "いビルです。" }], translation: "Es un edificio alto." },
      { segments: [{ text: "この本", ruby: "ほん" }, { text: "は" }, { text: "難", ruby: "むずか" }, { text: "しい。" }], translation: "Este libro es difícil." },
    ],
  },
  {
    label: "Presente negativo",
    form: "〜くない",
    note: "Se elimina el い final y se añade くない.",
    examples: [
      { segments: [{ text: "この店", ruby: "みせ" }, { text: "は" }, { text: "高", ruby: "たか" }, { text: "くないです。" }], translation: "Esta tienda no es cara." },
      { segments: [{ text: "今日", ruby: "きょう" }, { text: "は" }, { text: "寒", ruby: "さむ" }, { text: "くない。" }], translation: "Hoy no hace frío." },
    ],
  },
  {
    label: "Pasado afirmativo",
    form: "〜かった",
    note: "Se elimina el い y se añade かった.",
    examples: [
      { segments: [{ text: "映画", ruby: "えいが" }, { text: "は" }, { text: "楽", ruby: "たの" }, { text: "しかったです。" }], translation: "La película fue divertida." },
      { segments: [{ text: "昨日", ruby: "きのう" }, { text: "は" }, { text: "暑", ruby: "あつ" }, { text: "かった。" }], translation: "Ayer hizo calor." },
    ],
  },
  {
    label: "Pasado negativo",
    form: "〜くなかった",
    note: "Se elimina el い y se añade くなかった.",
    examples: [
      { segments: [{ text: "試験", ruby: "しけん" }, { text: "は" }, { text: "難", ruby: "むずか" }, { text: "しくなかった。" }], translation: "El examen no fue difícil." },
      { segments: [{ text: "昨日", ruby: "きのう" }, { text: "は" }, { text: "寒", ruby: "さむ" }, { text: "くなかった。" }], translation: "Ayer no hizo frío." },
    ],
  },
  {
    label: "Forma て",
    form: "〜くて",
    note: "Se usa para conectar adjetivos o dar razón. Se elimina い y se añade くて.",
    examples: [
      { segments: [{ text: "この部屋", ruby: "へや" }, { text: "は" }, { text: "広", ruby: "ひろ" }, { text: "くて明るいです。" }], translation: "Esta habitación es amplia y luminosa." },
      { segments: [{ text: "安", ruby: "やす" }, { text: "くておいしい。" }], translation: "Barato y delicioso." },
    ],
  },
  {
    label: "Forma adverbial",
    form: "〜く",
    note: "Para modificar verbos. Se elimina い y se añade く.",
    examples: [
      { segments: [{ text: "速", ruby: "はや" }, { text: "く走", ruby: "はし" }, { text: "ります。" }], translation: "Corro rápido." },
      { segments: [{ text: "大", ruby: "おお" }, { text: "きく書", ruby: "か" }, { text: "いてください。" }], translation: "Por favor escribe en grande." },
    ],
  },
  {
    label: "Antes de sustantivo",
    form: "〜い + sustantivo",
    note: "Los い-adjetivos se colocan directamente antes del sustantivo sin cambiar.",
    examples: [
      { segments: [{ text: "高", ruby: "たか" }, { text: "い山", ruby: "やま" }], translation: "Una montaña alta." },
      { segments: [{ text: "新", ruby: "あたら" }, { text: "しい" }, { text: "車", ruby: "くるま" }], translation: "Un coche nuevo." },
    ],
  },
];

// ─── な-adjective conjugation table ──────────────────────────────────────────

export const NA_ADJ_CONJUGATIONS: AdjConjRow[] = [
  {
    label: "Presente afirmativo",
    form: "〜です / 〜だ",
    note: "Al final de oración se usa です (formal) o だ (informal). El な solo aparece antes de sustantivos.",
    examples: [
      { segments: [{ text: "この町", ruby: "まち" }, { text: "は" }, { text: "静", ruby: "しず" }, { text: "かです。" }], translation: "Esta ciudad es tranquila." },
      { segments: [{ text: "彼女", ruby: "かのじょ" }, { text: "は" }, { text: "親切", ruby: "しんせつ" }, { text: "だ。" }], translation: "Ella es amable." },
    ],
  },
  {
    label: "Presente negativo",
    form: "〜ではない / 〜じゃない",
    note: "Se añade ではありません (formal) o じゃない (informal) después del adjetivo.",
    examples: [
      { segments: [{ text: "ここは" }, { text: "静", ruby: "しず" }, { text: "かではありません。" }], translation: "Aquí no es tranquilo." },
      { segments: [{ text: "それは" }, { text: "便利", ruby: "べんり" }, { text: "じゃない。" }], translation: "Eso no es conveniente." },
    ],
  },
  {
    label: "Pasado afirmativo",
    form: "〜でした / 〜だった",
    note: "Se añade でした (formal) o だった (informal).",
    examples: [
      { segments: [{ text: "昨日", ruby: "きのう" }, { text: "の" }, { text: "授業", ruby: "じゅぎょう" }, { text: "は" }, { text: "楽", ruby: "たの" }, { text: "しかったです。" }], translation: "La clase de ayer fue divertida." },
      { segments: [{ text: "子供", ruby: "こども" }, { text: "の時", ruby: "とき" }, { text: "は" }, { text: "元気", ruby: "げんき" }, { text: "だった。" }], translation: "De niño era enérgico." },
    ],
  },
  {
    label: "Pasado negativo",
    form: "〜ではなかった",
    note: "Se añade ではなかった (informal) o ではありませんでした (formal).",
    examples: [
      { segments: [{ text: "その映画", ruby: "えいが" }, { text: "は" }, { text: "有名", ruby: "ゆうめい" }, { text: "ではなかった。" }], translation: "Esa película no era famosa." },
    ],
  },
  {
    label: "Forma て",
    form: "〜で",
    note: "Para conectar adjetivos o dar razón. Se añade で después del adjetivo.",
    examples: [
      { segments: [{ text: "彼女", ruby: "かのじょ" }, { text: "は" }, { text: "親切", ruby: "しんせつ" }, { text: "で" }, { text: "明", ruby: "あか" }, { text: "るい人", ruby: "ひと" }, { text: "です。" }], translation: "Ella es amable y alegre." },
      { segments: [{ text: "この部屋", ruby: "へや" }, { text: "は" }, { text: "静", ruby: "しず" }, { text: "かで" }, { text: "広", ruby: "ひろ" }, { text: "いです。" }], translation: "Esta habitación es tranquila y amplia." },
    ],
  },
  {
    label: "Antes de sustantivo",
    form: "〜な + sustantivo",
    note: "Los な-adjetivos usan な antes del sustantivo. Esta es la diferencia clave con い-adjetivos.",
    examples: [
      { segments: [{ text: "静", ruby: "しず" }, { text: "かな" }, { text: "部屋", ruby: "へや" }], translation: "Una habitación tranquila." },
      { segments: [{ text: "有名", ruby: "ゆうめい" }, { text: "な" }, { text: "歌手", ruby: "かしゅ" }], translation: "Un/a cantante famoso/a." },
    ],
  },
];

// ─── Special: いい (good) ─────────────────────────────────────────────────────
// いい is irregular — it conjugates from よい not いい

export const II_ADJ_FORMS = [
  { label: "Diccionario",      form: "いい / よい" },
  { label: "Negativo",         form: "よくない" },
  { label: "Pasado",           form: "よかった" },
  { label: "Pasado negativo",  form: "よくなかった" },
  { label: "Forma て",         form: "よくて" },
  { label: "Adverbial",        form: "よく" },
];

// ─── Comparison patterns ──────────────────────────────────────────────────────

export interface ComparisonPattern {
  pattern: string;
  meaning: string;
  example: AdjExample;
}

export const COMPARISON_PATTERNS: ComparisonPattern[] = [
  {
    pattern: "AはBより〜です",
    meaning: "A es más ~ que B",
    example: {
      segments: [{ text: "東京", ruby: "とうきょう" }, { text: "は" }, { text: "大阪", ruby: "おおさか" }, { text: "より" }, { text: "大", ruby: "おお" }, { text: "きいです。" }],
      translation: "Tokio es más grande que Osaka.",
    },
  },
  {
    pattern: "AよりBのほうが〜です",
    meaning: "B es más ~ que A",
    example: {
      segments: [{ text: "電車", ruby: "でんしゃ" }, { text: "より" }, { text: "バスのほうが" }, { text: "遅", ruby: "おそ" }, { text: "いです。" }],
      translation: "El autobús es más lento que el tren.",
    },
  },
  {
    pattern: "AとBとどちらが〜ですか",
    meaning: "¿Cuál es más ~, A o B?",
    example: {
      segments: [{ text: "夏", ruby: "なつ" }, { text: "と冬", ruby: "ふゆ" }, { text: "とどちらが" }, { text: "好", ruby: "す" }, { text: "きですか。" }],
      translation: "¿Cuál te gusta más, el verano o el invierno?",
    },
  },
  {
    pattern: "〜の中で〜が一番〜です",
    meaning: "De todos ~, ~ es el más ~",
    example: {
      segments: [{ text: "クラスの中", ruby: "なか" }, { text: "で田中", ruby: "たなか" }, { text: "さんが一番", ruby: "いちばん" }, { text: "背", ruby: "せ" }, { text: "が" }, { text: "高", ruby: "たか" }, { text: "いです。" }],
      translation: "En la clase, Tanaka es el más alto.",
    },
  },
];