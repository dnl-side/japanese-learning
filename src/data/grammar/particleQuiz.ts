// src/data/grammar/particleeQuiz.ts

import type { RubySegment } from "@/app/components/ui/Ruby";

// ─── 型定義 ───────────────────────────────────────────────────────────────────

export interface ParticleQuestion {
  segments: RubySegment[]; // 文中に { text: "____" } を入れて空欄を表す
  answers: string[]; // 正解として受け付ける助詞
  hint?: string; // 任意ヒント
}

export interface ParticleQuizBank {
  particle: string; // 例: "は (wa)"
  symbol: string; // 例: "は"
  questions: ParticleQuestion[];
}

// ─── 空欄用セグメント ───────────────────────────────────────────────────────

const BLANK: RubySegment = { text: "____" };

// ─── 助詞クイズ問題集 ───────────────────────────────────────────────────────

export const PARTICLE_QUIZ_BANKS: ParticleQuizBank[] = [
  {
    particle: "は (wa)",
    symbol: "は",
    questions: [
      {
        segments: [{ text: "私", ruby: "わたし" }, BLANK, { text: "学生", ruby: "がくせい" }, { text: "です。" }],
        answers: ["は"],
        hint: "文のテーマ",
      },
      {
        segments: [{ text: "この" }, { text: "本", ruby: "ほん" }, BLANK, { text: "面白", ruby: "おもしろ" }, { text: "いです。" }],
        answers: ["は"],
        hint: "文のテーマ",
      },
      {
        segments: [{ text: "今日", ruby: "きょう" }, BLANK, { text: "暑", ruby: "あつ" }, { text: "いです。" }],
        answers: ["は"],
        hint: "文のテーマ",
      },
      {
        segments: [{ text: "明日", ruby: "あした" }, BLANK, { text: "休", ruby: "やす" }, { text: "みです。" }],
        answers: ["は"],
        hint: "文のテーマ",
      },
      {
        segments: [{ text: "うち" }, { text: "の" }, { text: "犬", ruby: "いぬ" }, BLANK, { text: "元気", ruby: "げんき" }, { text: "です。" }],
        answers: ["は"],
        hint: "文のテーマ",
      },
      {
        segments: [{ text: "この" }, { text: "部屋", ruby: "へや" }, BLANK, { text: "広", ruby: "ひろ" }, { text: "いです。" }],
        answers: ["は"],
        hint: "文のテーマ",
      },
      {
        segments: [{ text: "英語", ruby: "えいご" }, BLANK, { text: "難", ruby: "むずか" }, { text: "しくないです。" }],
        answers: ["は"],
        hint: "文のテーマ",
      },
      {
        segments: [{ text: "音楽", ruby: "おんがく" }, BLANK, { text: "楽", ruby: "たの" }, { text: "しいです。" }],
        answers: ["は"],
        hint: "文のテーマ",
      },
      {
        segments: [{ text: "朝", ruby: "あさ" }, BLANK, { text: "コーヒー" }, { text: "を" }, { text: "飲", ruby: "の" }, { text: "みます。" }],
        answers: ["は"],
        hint: "時間の枠・テーマ",
      },
      {
        segments: [{ text: "夜", ruby: "よる" }, BLANK, { text: "早", ruby: "はや" }, { text: "く" }, { text: "寝", ruby: "ね" }, { text: "ます。" }],
        answers: ["は"],
        hint: "時間の枠・テーマ",
      },
      {
        segments: [{ text: "私", ruby: "わたし" }, { text: "の" }, { text: "町", ruby: "まち" }, BLANK, { text: "静", ruby: "しず" }, { text: "かです。" }],
        answers: ["は"],
        hint: "文のテーマ",
      },
      {
        segments: [{ text: "パソコン" }, BLANK, { text: "高", ruby: "たか" }, { text: "いです。" }],
        answers: ["は"],
        hint: "文のテーマ",
      },
      {
        segments: [{ text: "私", ruby: "わたし" }, { text: "の" }, { text: "母", ruby: "はは" }, BLANK, { text: "料理", ruby: "りょうり" }, { text: "が" }, { text: "上手", ruby: "じょうず" }, { text: "です。" }],
        answers: ["は"],
        hint: "文のテーマ",
      },
      {
        segments: [{ text: "コーヒー" }, BLANK, { text: "好", ruby: "す" }, { text: "きですが、" }, { text: "お茶", ruby: "おちゃ" }, BLANK, { text: "好", ruby: "す" }, { text: "きではありません。" }],
        answers: ["は"],
        hint: "対比",
      },
      {
        segments: [{ text: "朝", ruby: "あさ" }, BLANK, { text: "忙", ruby: "いそが" }, { text: "しいですが、" }, { text: "夜", ruby: "よる" }, BLANK, { text: "ひまです。" }],
        answers: ["は"],
        hint: "対比",
      },
      {
        segments: [{ text: "この" }, { text: "店", ruby: "みせ" }, BLANK, { text: "安", ruby: "やす" }, { text: "いですが、" }, { text: "サービス" }, BLANK, { text: "あまり" }, { text: "良", ruby: "よ" }, { text: "くありません。" }],
        answers: ["は"],
        hint: "対比",
      },
      {
        segments: [{ text: "春", ruby: "はる" }, BLANK, { text: "好", ruby: "す" }, { text: "きですが、" }, { text: "夏", ruby: "なつ" }, BLANK, { text: "暑", ruby: "あつ" }, { text: "すぎます。" }],
        answers: ["は"],
        hint: "対比",
      },
      {
        segments: [{ text: "今日", ruby: "きょう" }, BLANK, { text: "三時間", ruby: "さんじかん" }, { text: "勉強", ruby: "べんきょう" }, { text: "しました。" }],
        answers: ["は"],
        hint: "時間の枠・テーマ",
      },
      {
        segments: [{ text: "今年", ruby: "ことし" }, BLANK, { text: "新", ruby: "あたら" }, { text: "しい" }, { text: "こと" }, { text: "を" }, { text: "始", ruby: "はじ" }, { text: "めたいです。" }],
        answers: ["は"],
        hint: "時間の枠・テーマ",
      },
      {
        segments: [{ text: "休", ruby: "やす" }, { text: "み" }, { text: "の" }, { text: "日", ruby: "ひ" }, BLANK, { text: "よく" }, { text: "料理", ruby: "りょうり" }, { text: "します。" }],
        answers: ["は"],
        hint: "時間の枠・テーマ",
      },
      {
        segments: [{ text: "猫", ruby: "ねこ" }, BLANK, { text: "夜", ruby: "よる" }, { text: "に" }, { text: "よく" }, { text: "動", ruby: "うご" }, { text: "きます。" }],
        answers: ["は"],
        hint: "一般的なテーマ",
      },
      {
        segments: [{ text: "野菜", ruby: "やさい" }, BLANK, { text: "体", ruby: "からだ" }, { text: "に" }, { text: "いいです。" }],
        answers: ["は"],
        hint: "一般的なテーマ",
      },
      {
        segments: [{ text: "日本", ruby: "にほん" }, { text: "の" }, { text: "電車", ruby: "でんしゃ" }, BLANK, { text: "時間", ruby: "じかん" }, { text: "に" }, { text: "正確", ruby: "せいかく" }, { text: "です。" }],
        answers: ["は"],
        hint: "一般的なテーマ",
      },
      {
        segments: [{ text: "友達", ruby: "ともだち" }, BLANK, { text: "大切", ruby: "たいせつ" }, { text: "です。" }],
        answers: ["は"],
        hint: "一般的なテーマ",
      }
    ],
  },

  {
    particle: "が (ga)",
    symbol: "が",
    questions: [
      {
        segments: [{ text: "誰", ruby: "だれ" }, BLANK, { text: "先生", ruby: "せんせい" }, { text: "ですか？" }],
        answers: ["が"],
        hint: "疑問詞で主語をたずねる",
      },
      {
        segments: [{ text: "田中", ruby: "たなか" }, { text: "さん" }, BLANK, { text: "先生", ruby: "せんせい" }, { text: "です。" }],
        answers: ["が"],
        hint: "特定の主語",
      },
      {
        segments: [{ text: "どれ" }, BLANK, { text: "あなた" }, { text: "の" }, { text: "かばんですか？" }],
        answers: ["が"],
        hint: "疑問詞で特定する",
      },
      {
        segments: [{ text: "これ" }, BLANK, { text: "新", ruby: "あたら" }, { text: "しい" }, { text: "パソコン" }, { text: "です。" }],
        answers: ["が"],
        hint: "これが〜です",
      },
      {
        segments: [{ text: "私", ruby: "わたし" }, BLANK, { text: "やります。" }],
        answers: ["が"],
        hint: "主語を強調",
      },
      {
        segments: [{ text: "誰", ruby: "だれ" }, BLANK, { text: "来", ruby: "き" }, { text: "ましたか？" }],
        answers: ["が"],
        hint: "誰が〜",
      },
      {
        segments: [{ text: "山田", ruby: "やまだ" }, { text: "さん" }, BLANK, { text: "来", ruby: "き" }, { text: "ました。" }],
        answers: ["が"],
        hint: "新情報の主語",
      },
      {
        segments: [{ text: "どの" }, { text: "店", ruby: "みせ" }, BLANK, { text: "一番", ruby: "いちばん" }, { text: "安", ruby: "やす" }, { text: "いですか？" }],
        answers: ["が"],
        hint: "比較で特定する",
      },
      {
        segments: [{ text: "あの" }, { text: "店", ruby: "みせ" }, BLANK, { text: "一番", ruby: "いちばん" }, { text: "安", ruby: "やす" }, { text: "いです。" }],
        answers: ["が"],
        hint: "比較で特定する",
      },
      {
        segments: [{ text: "何", ruby: "なに" }, BLANK, { text: "一番", ruby: "いちばん" }, { text: "大切", ruby: "たいせつ" }, { text: "ですか？" }],
        answers: ["が"],
        hint: "疑問詞で特定する",
      },
      {
        segments: [{ text: "健康", ruby: "けんこう" }, BLANK, { text: "一番", ruby: "いちばん" }, { text: "大切", ruby: "たいせつ" }, { text: "です。" }],
        answers: ["が"],
        hint: "特定の主語",
      },
      {
        segments: [{ text: "寿司", ruby: "すし" }, BLANK, { text: "好", ruby: "す" }, { text: "きです。" }],
        answers: ["が"],
        hint: "好き・嫌い",
      },
      {
        segments: [{ text: "日本語", ruby: "にほんご" }, BLANK, { text: "分", ruby: "わ" }, { text: "かります。" }],
        answers: ["が"],
        hint: "分かる",
      },
      {
        segments: [{ text: "彼", ruby: "かれ" }, BLANK, { text: "ピアノ" }, { text: "を" }, { text: "弾", ruby: "ひ" }, { text: "けます。" }],
        answers: ["が"],
        hint: "できる・能力",
      },
      {
        segments: [{ text: "富士山", ruby: "ふじさん" }, BLANK, { text: "見", ruby: "み" }, { text: "えます。" }],
        answers: ["が"],
        hint: "見える",
      },
      {
        segments: [{ text: "音", ruby: "おと" }, BLANK, { text: "聞", ruby: "き" }, { text: "こえます。" }],
        answers: ["が"],
        hint: "聞こえる",
      },
      {
        segments: [{ text: "雨", ruby: "あめ" }, BLANK, { text: "降", ruby: "ふ" }, { text: "ってきました。" }],
        answers: ["が"],
        hint: "自然現象",
      },
      {
        segments: [{ text: "雪", ruby: "ゆき" }, BLANK, { text: "降", ruby: "ふ" }, { text: "っています。" }],
        answers: ["が"],
        hint: "自然現象",
      },
      {
        segments: [{ text: "どの" }, { text: "映画", ruby: "えいが" }, BLANK, { text: "一番", ruby: "いちばん" }, { text: "面白", ruby: "おもしろ" }, { text: "いですか？" }],
        answers: ["が"],
        hint: "比較で特定する",
      },
      {
        segments: [{ text: "猫", ruby: "ねこ" }, BLANK, { text: "部屋", ruby: "へや" }, { text: "に" }, { text: "います。" }],
        answers: ["が"],
        hint: "存在の主語",
      },
      {
        segments: [{ text: "机", ruby: "つくえ" }, { text: "の" }, { text: "上", ruby: "うえ" }, { text: "に" }, { text: "本", ruby: "ほん" }, BLANK, { text: "あります。" }],
        answers: ["が"],
        hint: "存在の主語",
      },
      {
        segments: [{ text: "窓", ruby: "まど" }, { text: "から" }, { text: "風", ruby: "かぜ" }, BLANK, { text: "入", ruby: "はい" }, { text: "ってきます。" }],
        answers: ["が"],
        hint: "現象の主語",
      },
      {
        segments: [{ text: "どの" }, { text: "電車", ruby: "でんしゃ" }, BLANK, { text: "東京", ruby: "とうきょう" }, { text: "行", ruby: "い" }, { text: "きですか？" }],
        answers: ["が"],
        hint: "どれが〜",
      },
      {
        segments: [{ text: "この" }, { text: "電車", ruby: "でんしゃ" }, BLANK, { text: "東京", ruby: "とうきょう" }, { text: "行", ruby: "い" }, { text: "きです。" }],
        answers: ["が"],
        hint: "特定の主語",
      }
    ],
  },

  {
    particle: "を (wo)",
    symbol: "を",
    questions: [
      {
        segments: [{ text: "本", ruby: "ほん" }, BLANK, { text: "読", ruby: "よ" }, { text: "みます。" }],
        answers: ["を"],
        hint: "直接目的語",
      },
      {
        segments: [{ text: "音楽", ruby: "おんがく" }, BLANK, { text: "聞", ruby: "き" }, { text: "きます。" }],
        answers: ["を"],
        hint: "直接目的語",
      },
      {
        segments: [{ text: "映画", ruby: "えいが" }, BLANK, { text: "見", ruby: "み" }, { text: "ます。" }],
        answers: ["を"],
        hint: "直接目的語",
      },
      {
        segments: [{ text: "水", ruby: "みず" }, BLANK, { text: "飲", ruby: "の" }, { text: "みます。" }],
        answers: ["を"],
        hint: "直接目的語",
      },
      {
        segments: [{ text: "宿題", ruby: "しゅくだい" }, BLANK, { text: "します。" }],
        answers: ["を"],
        hint: "直接目的語",
      },
      {
        segments: [{ text: "朝", ruby: "あさ" }, { text: "ご" }, { text: "飯", ruby: "はん" }, BLANK, { text: "食", ruby: "た" }, { text: "べます。" }],
        answers: ["を"],
        hint: "直接目的語",
      },
      {
        segments: [{ text: "手紙", ruby: "てがみ" }, BLANK, { text: "書", ruby: "か" }, { text: "きます。" }],
        answers: ["を"],
        hint: "直接目的語",
      },
      {
        segments: [{ text: "写真", ruby: "しゃしん" }, BLANK, { text: "撮", ruby: "と" }, { text: "ります。" }],
        answers: ["を"],
        hint: "直接目的語",
      },
      {
        segments: [{ text: "パン" }, BLANK, { text: "買", ruby: "か" }, { text: "います。" }],
        answers: ["を"],
        hint: "直接目的語",
      },
      {
        segments: [{ text: "漢字", ruby: "かんじ" }, BLANK, { text: "覚", ruby: "おぼ" }, { text: "えます。" }],
        answers: ["を"],
        hint: "直接目的語",
      },
      {
        segments: [{ text: "ドア" }, BLANK, { text: "開", ruby: "あ" }, { text: "けます。" }],
        answers: ["を"],
        hint: "直接目的語",
      },
      {
        segments: [{ text: "名前", ruby: "なまえ" }, BLANK, { text: "書", ruby: "か" }, { text: "いてください。" }],
        answers: ["を"],
        hint: "直接目的語",
      },
      {
        segments: [{ text: "橋", ruby: "はし" }, BLANK, { text: "渡", ruby: "わた" }, { text: "ります。" }],
        answers: ["を"],
        hint: "通過する場所",
      },
      {
        segments: [{ text: "道", ruby: "みち" }, BLANK, { text: "歩", ruby: "ある" }, { text: "きます。" }],
        answers: ["を"],
        hint: "通過する場所",
      },
      {
        segments: [{ text: "公園", ruby: "こうえん" }, BLANK, { text: "散歩", ruby: "さんぽ" }, { text: "します。" }],
        answers: ["を"],
        hint: "通過する場所",
      },
      {
        segments: [{ text: "バス" }, BLANK, { text: "降", ruby: "お" }, { text: "ります。" }],
        answers: ["を"],
        hint: "乗り物から離れる",
      },
      {
        segments: [{ text: "電車", ruby: "でんしゃ" }, BLANK, { text: "降", ruby: "お" }, { text: "りました。" }],
        answers: ["を"],
        hint: "乗り物から離れる",
      },
      {
        segments: [{ text: "家", ruby: "いえ" }, BLANK, { text: "出", ruby: "で" }, { text: "ます。" }],
        answers: ["を"],
        hint: "出発点を離れる",
      },
      {
        segments: [{ text: "会社", ruby: "かいしゃ" }, BLANK, { text: "辞", ruby: "や" }, { text: "めました。" }],
        answers: ["を"],
        hint: "離脱する対象",
      },
      {
        segments: [{ text: "その" }, { text: "場", ruby: "ば" }, BLANK, { text: "離", ruby: "はな" }, { text: "れてください。" }],
        answers: ["を"],
        hint: "離れる場所",
      },
      {
        segments: [{ text: "グループ" }, BLANK, { text: "離", ruby: "はな" }, { text: "れないでください。" }],
        answers: ["を"],
        hint: "離れる対象",
      },
      {
        segments: [{ text: "空", ruby: "そら" }, BLANK, { text: "飛", ruby: "と" }, { text: "びます。" }],
        answers: ["を"],
        hint: "通過する場所",
      }
    ],
  },

  {
    particle: "に (ni)",
    symbol: "に",
    questions: [
      {
        segments: [{ text: "学校", ruby: "がっこう" }, BLANK, { text: "行", ruby: "い" }, { text: "きます。" }],
        answers: ["に", "へ"],
        hint: "移動の到着点",
      },
      {
        segments: [{ text: "東京", ruby: "とうきょう" }, BLANK, { text: "着", ruby: "つ" }, { text: "きました。" }],
        answers: ["に"],
        hint: "到着点",
      },
      {
        segments: [{ text: "友達", ruby: "ともだち" }, BLANK, { text: "手紙", ruby: "てがみ" }, { text: "を" }, { text: "書", ruby: "か" }, { text: "きます。" }],
        answers: ["に"],
        hint: "相手・受け手",
      },
      {
        segments: [{ text: "先生", ruby: "せんせい" }, BLANK, { text: "質問", ruby: "しつもん" }, { text: "します。" }],
        answers: ["に"],
        hint: "相手・受け手",
      },
      {
        segments: [{ text: "午前", ruby: "ごぜん" }, { text: "8時", ruby: "はちじ" }, BLANK, { text: "起", ruby: "お" }, { text: "きます。" }],
        answers: ["に"],
        hint: "特定の時間",
      },
      {
        segments: [{ text: "日曜日", ruby: "にちようび" }, BLANK, { text: "公園", ruby: "こうえん" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
        answers: ["に"],
        hint: "特定の時間",
      },
      {
        segments: [{ text: "誕生日", ruby: "たんじょうび" }, BLANK, { text: "プレゼント" }, { text: "を" }, { text: "もらいました。" }],
        answers: ["に"],
        hint: "特定の時間",
      },
      {
        segments: [{ text: "猫", ruby: "ねこ" }, { text: "が" }, { text: "部屋", ruby: "へや" }, BLANK, { text: "います。" }],
        answers: ["に"],
        hint: "存在する場所",
      },
      {
        segments: [{ text: "机", ruby: "つくえ" }, { text: "の" }, { text: "上", ruby: "うえ" }, BLANK, { text: "本", ruby: "ほん" }, { text: "が" }, { text: "あります。" }],
        answers: ["に"],
        hint: "存在する場所",
      },
      {
        segments: [{ text: "冷蔵庫", ruby: "れいぞうこ" }, BLANK, { text: "牛乳", ruby: "ぎゅうにゅう" }, { text: "が" }, { text: "あります。" }],
        answers: ["に"],
        hint: "存在する場所",
      },
      {
        segments: [{ text: "駅", ruby: "えき" }, { text: "の" }, { text: "近", ruby: "ちか" }, { text: "く" }, BLANK, { text: "コンビニ" }, { text: "が" }, { text: "あります。" }],
        answers: ["に"],
        hint: "存在する場所",
      },
      {
        segments: [{ text: "いす" }, { text: "の" }, { text: "下", ruby: "した" }, BLANK, { text: "かばん" }, { text: "が" }, { text: "あります。" }],
        answers: ["に"],
        hint: "存在する場所",
      },
      {
        segments: [{ text: "箱", ruby: "はこ" }, { text: "の" }, { text: "中", ruby: "なか" }, BLANK, { text: "手紙", ruby: "てがみ" }, { text: "が" }, { text: "あります。" }],
        answers: ["に"],
        hint: "存在する場所",
      },
      {
        segments: [{ text: "いす" }, BLANK, { text: "座", ruby: "すわ" }, { text: "ります。" }],
        answers: ["に"],
        hint: "動作の着点",
      },
      {
        segments: [{ text: "屋上", ruby: "おくじょう" }, BLANK, { text: "上", ruby: "あ" }, { text: "がります。" }],
        answers: ["に"],
        hint: "動作の着点",
      },
      {
        segments: [{ text: "教室", ruby: "きょうしつ" }, BLANK, { text: "入", ruby: "はい" }, { text: "ったら、" }, { text: "静", ruby: "しず" }, { text: "か" }, { text: "に" }, { text: "してください。" }],
        answers: ["に"],
        hint: "入る先",
      },
      {
        segments: [{ text: "左", ruby: "ひだり" }, { text: "の" }, { text: "席", ruby: "せき" }, BLANK, { text: "座", ruby: "すわ" }, { text: "ってください。" }],
        answers: ["に"],
        hint: "動作の着点",
      },
      {
        segments: [{ text: "買い物", ruby: "かいもの" }, BLANK, { text: "行", ruby: "い" }, { text: "きます。" }],
        answers: ["に"],
        hint: "目的",
      },
      {
        segments: [{ text: "日本", ruby: "にほん" }, { text: "へ" }, { text: "勉強", ruby: "べんきょう" }, BLANK, { text: "来", ruby: "き" }, { text: "ました。" }],
        answers: ["に"],
        hint: "目的",
      },
      {
        segments: [{ text: "水", ruby: "みず" }, { text: "が" }, { text: "氷", ruby: "こおり" }, BLANK, { text: "なりました。" }],
        answers: ["に"],
        hint: "変化の結果",
      }
    ],
  },

  {
    particle: "で (de)",
    symbol: "で",
    questions: [
      {
        segments: [{ text: "学校", ruby: "がっこう" }, BLANK, { text: "勉強", ruby: "べんきょう" }, { text: "します。" }],
        answers: ["で"],
        hint: "動作が行われる場所",
      },
      {
        segments: [{ text: "レストラン" }, BLANK, { text: "食事", ruby: "しょくじ" }, { text: "を" }, { text: "します。" }],
        answers: ["で"],
        hint: "動作が行われる場所",
      },
      {
        segments: [{ text: "図書館", ruby: "としょかん" }, BLANK, { text: "本", ruby: "ほん" }, { text: "を" }, { text: "読", ruby: "よ" }, { text: "みます。" }],
        answers: ["で"],
        hint: "動作が行われる場所",
      },
      {
        segments: [{ text: "公園", ruby: "こうえん" }, BLANK, { text: "遊", ruby: "あそ" }, { text: "びました。" }],
        answers: ["で"],
        hint: "動作が行われる場所",
      },
      {
        segments: [{ text: "家", ruby: "いえ" }, BLANK, { text: "仕事", ruby: "しごと" }, { text: "を" }, { text: "しています。" }],
        answers: ["で"],
        hint: "動作が行われる場所",
      },
      {
        segments: [{ text: "箸", ruby: "はし" }, BLANK, { text: "食", ruby: "た" }, { text: "べます。" }],
        answers: ["で"],
        hint: "道具・手段",
      },
      {
        segments: [{ text: "ペン" }, BLANK, { text: "名前", ruby: "なまえ" }, { text: "を" }, { text: "書", ruby: "か" }, { text: "きます。" }],
        answers: ["で"],
        hint: "道具・手段",
      },
      {
        segments: [{ text: "日本語", ruby: "にほんご" }, BLANK, { text: "話", ruby: "はな" }, { text: "します。" }],
        answers: ["で"],
        hint: "言語・手段",
      },
      {
        segments: [{ text: "英語", ruby: "えいご" }, BLANK, { text: "メール" }, { text: "を" }, { text: "書", ruby: "か" }, { text: "きます。" }],
        answers: ["で"],
        hint: "言語・手段",
      },
      {
        segments: [{ text: "電車", ruby: "でんしゃ" }, BLANK, { text: "行", ruby: "い" }, { text: "きます。" }],
        answers: ["で"],
        hint: "交通手段",
      },
      {
        segments: [{ text: "地下鉄", ruby: "ちかてつ" }, BLANK, { text: "帰", ruby: "かえ" }, { text: "ります。" }],
        answers: ["で"],
        hint: "交通手段",
      },
      {
        segments: [{ text: "車", ruby: "くるま" }, BLANK, { text: "会社", ruby: "かいしゃ" }, { text: "に" }, { text: "通", ruby: "かよ" }, { text: "っています。" }],
        answers: ["で"],
        hint: "交通手段",
      },
      {
        segments: [{ text: "病気", ruby: "びょうき" }, BLANK, { text: "学校", ruby: "がっこう" }, { text: "を" }, { text: "休", ruby: "やす" }, { text: "みました。" }],
        answers: ["で"],
        hint: "原因・理由",
      },
      {
        segments: [{ text: "雪", ruby: "ゆき" }, BLANK, { text: "電車", ruby: "でんしゃ" }, { text: "が" }, { text: "止", ruby: "と" }, { text: "まりました。" }],
        answers: ["で"],
        hint: "原因・理由",
      },
      {
        segments: [{ text: "事故", ruby: "じこ" }, BLANK, { text: "道", ruby: "みち" }, { text: "が" }, { text: "混", ruby: "こ" }, { text: "んでいます。" }],
        answers: ["で"],
        hint: "原因・理由",
      },
      {
        segments: [{ text: "仕事", ruby: "しごと" }, BLANK, { text: "東京", ruby: "とうきょう" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
        answers: ["で"],
        hint: "理由・目的",
      },
      {
        segments: [{ text: "三百円", ruby: "さんびゃくえん" }, BLANK, { text: "コーヒー" }, { text: "が" }, { text: "飲", ruby: "の" }, { text: "めます。" }],
        answers: ["で"],
        hint: "範囲・手段",
      },
      {
        segments: [{ text: "二百円", ruby: "にひゃくえん" }, BLANK, { text: "三本", ruby: "さんぼん" }, { text: "買", ruby: "か" }, { text: "えます。" }],
        answers: ["で"],
        hint: "範囲・条件",
      },
      {
        segments: [{ text: "この" }, { text: "料理", ruby: "りょうり" }, { text: "は" }, { text: "五分", ruby: "ごふん" }, BLANK, { text: "できあがります。" }],
        answers: ["で"],
        hint: "所要時間",
      },
      {
        segments: [{ text: "この" }, { text: "会議室", ruby: "かいぎしつ" }, { text: "は" }, { text: "二十人", ruby: "にじゅうにん" }, BLANK, { text: "使", ruby: "つか" }, { text: "えます。" }],
        answers: ["で"],
        hint: "数量の枠",
      }
    ],
  },

  {
    particle: "へ (he)",
    symbol: "へ",
    questions: [
      {
        segments: [{ text: "東京", ruby: "とうきょう" }, BLANK, { text: "行", ruby: "い" }, { text: "きます。" }],
        answers: ["へ", "に"],
        hint: "方向・行き先",
      },
      {
        segments: [{ text: "海", ruby: "うみ" }, BLANK, { text: "行", ruby: "い" }, { text: "きたいです。" }],
        answers: ["へ", "に"],
        hint: "方向・行き先",
      },
      {
        segments: [{ text: "右", ruby: "みぎ" }, BLANK, { text: "曲", ruby: "ま" }, { text: "がってください。" }],
        answers: ["へ"],
        hint: "方向",
      },
      {
        segments: [{ text: "外", ruby: "そと" }, BLANK, { text: "出", ruby: "で" }, { text: "ましょう。" }],
        answers: ["へ"],
        hint: "方向",
      },
      {
        segments: [{ text: "北", ruby: "きた" }, BLANK, { text: "向", ruby: "む" }, { text: "かっています。" }],
        answers: ["へ"],
        hint: "方向",
      },
      {
        segments: [{ text: "駅", ruby: "えき" }, BLANK, { text: "急", ruby: "いそ" }, { text: "いでいます。" }],
        answers: ["へ", "に"],
        hint: "方向・行き先",
      },
      {
        segments: [{ text: "大学", ruby: "だいがく" }, BLANK, { text: "戻", ruby: "もど" }, { text: "ります。" }],
        answers: ["へ", "に"],
        hint: "行き先",
      },
      {
        segments: [{ text: "大使館", ruby: "たいしかん" }, BLANK, { text: "書類", ruby: "しょるい" }, { text: "を" }, { text: "送", ruby: "おく" }, { text: "りました。" }],
        answers: ["へ", "に"],
        hint: "送り先",
      },
      {
        segments: [{ text: "友達", ruby: "ともだち" }, BLANK, { text: "写真", ruby: "しゃしん" }, { text: "を" }, { text: "送", ruby: "おく" }, { text: "りました。" }],
        answers: ["へ", "に"],
        hint: "送り先",
      },
      {
        segments: [{ text: "先生", ruby: "せんせい" }, BLANK, { text: "レポート" }, { text: "を" }, { text: "出", ruby: "だ" }, { text: "しました。" }],
        answers: ["へ", "に"],
        hint: "提出先",
      },
      {
        segments: [{ text: "お" }, { text: "客", ruby: "きゃく" }, { text: "様", ruby: "さま" }, BLANK, { text: "確認", ruby: "かくにん" }, { text: "の" }, { text: "メール" }, { text: "を" }, { text: "送", ruby: "おく" }, { text: "ってください。" }],
        answers: ["へ", "に"],
        hint: "送り先",
      },
      {
        segments: [{ text: "日本", ruby: "にほん" }, BLANK, { text: "手紙", ruby: "てがみ" }, { text: "を" }, { text: "出", ruby: "だ" }, { text: "しました。" }],
        answers: ["へ", "に"],
        hint: "送り先",
      },
      {
        segments: [{ text: "先生", ruby: "せんせい" }, BLANK, { text: "連絡", ruby: "れんらく" }, { text: "しないでください。" }],
        answers: ["へ", "に"],
        hint: "連絡の相手",
      },
      {
        segments: [{ text: "成功", ruby: "せいこう" }, BLANK, { text: "の" }, { text: "第一歩", ruby: "だいいっぽ" }, { text: "です。" }],
        answers: ["へ"],
        hint: "比喩的な方向",
      }
    ],
  },

  {
    particle: "と (to)",
    symbol: "と",
    questions: [
      {
        segments: [{ text: "犬", ruby: "いぬ" }, BLANK, { text: "猫", ruby: "ねこ" }, { text: "が" }, { text: "好", ruby: "す" }, { text: "きです。" }],
        answers: ["と"],
        hint: "名詞の並列",
      },
      {
        segments: [{ text: "母", ruby: "はは" }, BLANK, { text: "父", ruby: "ちち" }, { text: "が" }, { text: "旅行", ruby: "りょこう" }, { text: "しました。" }],
        answers: ["と"],
        hint: "名詞の並列",
      },
      {
        segments: [{ text: "パン" }, BLANK, { text: "牛乳", ruby: "ぎゅうにゅう" }, { text: "を" }, { text: "買", ruby: "か" }, { text: "いました。" }],
        answers: ["と"],
        hint: "名詞の並列",
      },
      {
        segments: [{ text: "土曜日", ruby: "どようび" }, BLANK, { text: "日曜日", ruby: "にちようび" }, { text: "は" }, { text: "休", ruby: "やす" }, { text: "みです。" }],
        answers: ["と"],
        hint: "名詞の並列",
      },
      {
        segments: [{ text: "友達", ruby: "ともだち" }, BLANK, { text: "映画", ruby: "えいが" }, { text: "を" }, { text: "見", ruby: "み" }, { text: "ました。" }],
        answers: ["と"],
        hint: "一緒にする相手",
      },
      {
        segments: [{ text: "家族", ruby: "かぞく" }, BLANK, { text: "住", ruby: "す" }, { text: "んでいます。" }],
        answers: ["と"],
        hint: "一緒にいる相手",
      },
      {
        segments: [{ text: "先生", ruby: "せんせい" }, BLANK, { text: "話", ruby: "はな" }, { text: "しました。" }],
        answers: ["と"],
        hint: "相手",
      },
      {
        segments: [{ text: "彼", ruby: "かれ" }, { text: "は" }, { text: "「こんにちは」" }, BLANK, { text: "言", ruby: "い" }, { text: "いました。" }],
        answers: ["と"],
        hint: "引用",
      },
      {
        segments: [{ text: "明日", ruby: "あした" }, { text: "は" }, { text: "雨" }, { text: "だ" }, BLANK, { text: "思", ruby: "おも" }, { text: "います。" }],
        answers: ["と"],
        hint: "思う内容",
      },
      {
        segments: [{ text: "日本語", ruby: "にほんご" }, { text: "が" }, { text: "難", ruby: "むずか" }, { text: "しい" }, BLANK, { text: "思", ruby: "おも" }, { text: "います。" }],
        answers: ["と"],
        hint: "思う内容",
      },
      {
        segments: [{ text: "ボタン" }, { text: "を" }, { text: "押", ruby: "お" }, { text: "す" }, BLANK, { text: "ドア" }, { text: "が" }, { text: "開", ruby: "あ" }, { text: "きます。" }],
        answers: ["と"],
        hint: "自動的な条件",
      },
      {
        segments: [{ text: "春", ruby: "はる" }, { text: "に" }, { text: "なる" }, BLANK, { text: "暖", ruby: "あたた" }, { text: "かく" }, { text: "なります。" }],
        answers: ["と"],
        hint: "自然な条件",
      },
      {
        segments: [{ text: "この" }, { text: "道", ruby: "みち" }, { text: "を" }, { text: "まっすぐ" }, { text: "歩", ruby: "ある" }, { text: "く" }, BLANK, { text: "大", ruby: "おお" }, { text: "きい" }, { text: "橋", ruby: "はし" }, { text: "が" }, { text: "あります。" }],
        answers: ["と"],
        hint: "道案内・条件",
      },
      {
        segments: [{ text: "この" }, { text: "薬", ruby: "くすり" }, { text: "を" }, { text: "飲", ruby: "の" }, { text: "む" }, BLANK, { text: "少", ruby: "すこ" }, { text: "し" }, { text: "眠", ruby: "ねむ" }, { text: "く" }, { text: "なります。" }],
        answers: ["と"],
        hint: "結果が起こる条件",
      },
      {
        segments: [{ text: "右", ruby: "みぎ" }, { text: "の" }, { text: "ドア" }, { text: "を" }, { text: "開", ruby: "あ" }, { text: "ける" }, BLANK, { text: "トイレ" }, { text: "です。" }],
        answers: ["と"],
        hint: "道案内・条件",
      },
      {
        segments: [{ text: "パソコン" }, { text: "を" }, { text: "つける" }, BLANK, { text: "ファン" }, { text: "の" }, { text: "音", ruby: "おと" }, { text: "が" }, { text: "聞", ruby: "き" }, { text: "こえます。" }],
        answers: ["と"],
        hint: "結果が起こる条件",
      }
    ],
  },

  {
    particle: "も (mo)",
    symbol: "も",
    questions: [
      {
        segments: [{ text: "私", ruby: "わたし" }, BLANK, { text: "行", ruby: "い" }, { text: "きます。" }],
        answers: ["も"],
        hint: "〜も / 〜too",
      },
      {
        segments: [{ text: "田中", ruby: "たなか" }, { text: "さん" }, BLANK, { text: "来", ruby: "き" }, { text: "ます。" }],
        answers: ["も"],
        hint: "〜も / 〜too",
      },
      {
        segments: [{ text: "兄", ruby: "あに" }, BLANK, { text: "日本語", ruby: "にほんご" }, { text: "を" }, { text: "勉強", ruby: "べんきょう" }, { text: "しています。" }],
        answers: ["も"],
        hint: "追加・含意",
      },
      {
        segments: [{ text: "この" }, { text: "店", ruby: "みせ" }, { text: "で" }, BLANK, { text: "カード" }, { text: "が" }, { text: "使", ruby: "つか" }, { text: "えます。" }],
        answers: ["も"],
        hint: "〜でも",
      },
      {
        segments: [{ text: "彼", ruby: "かれ" }, { text: "は" }, { text: "行", ruby: "い" }, { text: "きませんでした。" }, { text: "私", ruby: "わたし" }, BLANK, { text: "行", ruby: "い" }, { text: "きませんでした。" }],
        answers: ["も"],
        hint: "〜も…ない",
      },
      {
        segments: [{ text: "誰", ruby: "だれ" }, BLANK, { text: "いませんでした。" }],
        answers: ["も"],
        hint: "誰も〜ない",
      },
      {
        segments: [{ text: "何", ruby: "なに" }, BLANK, { text: "食", ruby: "た" }, { text: "べませんでした。" }],
        answers: ["も"],
        hint: "何も〜ない",
      },
      {
        segments: [{ text: "コーヒー" }, BLANK, { text: "お茶", ruby: "おちゃ" }, BLANK, { text: "飲", ruby: "の" }, { text: "みません。" }],
        answers: ["も"],
        hint: "〜も〜も…ない",
      },
      {
        segments: [{ text: "一時間", ruby: "いちじかん" }, BLANK, { text: "待", ruby: "ま" }, { text: "ちました。" }],
        answers: ["も"],
        hint: "数量の強調",
      },
      {
        segments: [{ text: "その" }, { text: "映画", ruby: "えいが" }, { text: "は" }, { text: "三回", ruby: "さんかい" }, BLANK, { text: "見", ruby: "み" }, { text: "ました。" }],
        answers: ["も"],
        hint: "数量の強調",
      },
      {
        segments: [{ text: "彼女", ruby: "かのじょ" }, { text: "は" }, { text: "一日", ruby: "いちにち" }, { text: "に" }, { text: "三回", ruby: "さんかい" }, BLANK, { text: "電話", ruby: "でんわ" }, { text: "しました。" }],
        answers: ["も"],
        hint: "数量の強調",
      },
      {
        segments: [{ text: "今日", ruby: "きょう" }, { text: "は" }, { text: "二回", ruby: "にかい" }, BLANK, { text: "電車", ruby: "でんしゃ" }, { text: "を" }, { text: "乗", ruby: "の" }, { text: "り" }, { text: "間違", ruby: "まちが" }, { text: "えました。" }],
        answers: ["も"],
        hint: "数量の強調",
      },
      {
        segments: [{ text: "まだ" }, { text: "一時間", ruby: "いちじかん" }, BLANK, { text: "勉強", ruby: "べんきょう" }, { text: "していません。" }],
        answers: ["も"],
        hint: "少量でも / 否定",
      }
    ],
  },

  {
    particle: "から (kara)",
    symbol: "から",
    questions: [
      {
        segments: [{ text: "東京", ruby: "とうきょう" }, BLANK, { text: "来", ruby: "き" }, { text: "ました。" }],
        answers: ["から"],
        hint: "出発点・起点",
      },
      {
        segments: [{ text: "駅", ruby: "えき" }, BLANK, { text: "歩", ruby: "ある" }, { text: "きます。" }],
        answers: ["から"],
        hint: "出発点・起点",
      },
      {
        segments: [{ text: "家", ruby: "いえ" }, BLANK, { text: "会社", ruby: "かいしゃ" }, { text: "まで" }, { text: "遠", ruby: "とお" }, { text: "いです。" }],
        answers: ["から"],
        hint: "範囲の起点",
      },
      {
        segments: [{ text: "ここ" }, BLANK, { text: "海", ruby: "うみ" }, { text: "が" }, { text: "見", ruby: "み" }, { text: "えます。" }],
        answers: ["から"],
        hint: "起点",
      },
      {
        segments: [{ text: "窓", ruby: "まど" }, BLANK, { text: "風", ruby: "かぜ" }, { text: "が" }, { text: "入", ruby: "はい" }, { text: "ってきます。" }],
        answers: ["から"],
        hint: "通過の起点",
      },
      {
        segments: [{ text: "大阪", ruby: "おおさか" }, BLANK, { text: "新幹線", ruby: "しんかんせん" }, { text: "で" }, { text: "来", ruby: "き" }, { text: "ました。" }],
        answers: ["から"],
        hint: "出発点・起点",
      },
      {
        segments: [{ text: "学校", ruby: "がっこう" }, BLANK, { text: "帰", ruby: "かえ" }, { text: "ります。" }],
        answers: ["から"],
        hint: "出発点・起点",
      },
      {
        segments: [{ text: "会社", ruby: "かいしゃ" }, BLANK, { text: "駅", ruby: "えき" }, { text: "まで" }, { text: "歩", ruby: "ある" }, { text: "きます。" }],
        answers: ["から"],
        hint: "範囲の起点",
      },
      {
        segments: [{ text: "うち" }, BLANK, { text: "学校", ruby: "がっこう" }, { text: "まで" }, { text: "三十分", ruby: "さんじゅっぷん" }, { text: "かかります。" }],
        answers: ["から"],
        hint: "範囲の起点",
      },
      {
        segments: [{ text: "空港", ruby: "くうこう" }, BLANK, { text: "ホテル" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
        answers: ["から"],
        hint: "出発点・起点",
      },
      {
        segments: [{ text: "この" }, { text: "バス" }, { text: "は" }, { text: "駅", ruby: "えき" }, BLANK, { text: "出", ruby: "で" }, { text: "ます。" }],
        answers: ["から"],
        hint: "出発点・起点",
      },
      {
        segments: [{ text: "9時", ruby: "くじ" }, BLANK, { text: "授業", ruby: "じゅぎょう" }, { text: "が" }, { text: "始", ruby: "はじ" }, { text: "まります。" }],
        answers: ["から"],
        hint: "時間の始まり",
      },
      {
        segments: [{ text: "月曜日", ruby: "げつようび" }, BLANK, { text: "新", ruby: "あたら" }, { text: "しい" }, { text: "仕事", ruby: "しごと" }, { text: "です。" }],
        answers: ["から"],
        hint: "時間の始まり",
      },
      {
        segments: [{ text: "明日", ruby: "あした" }, BLANK, { text: "休", ruby: "やす" }, { text: "みです。" }],
        answers: ["から"],
        hint: "時間の始まり",
      },
      {
        segments: [{ text: "雨", ruby: "あめ" }, { text: "だ" }, BLANK, { text: "家", ruby: "いえ" }, { text: "に" }, { text: "います。" }],
        answers: ["から"],
        hint: "理由・原因",
      },
      {
        segments: [{ text: "忙", ruby: "いそが" }, { text: "しい" }, BLANK, { text: "行", ruby: "い" }, { text: "けません。" }],
        answers: ["から"],
        hint: "理由・原因",
      },
      {
        segments: [{ text: "分", ruby: "わ" }, { text: "からない" }, BLANK, { text: "先生", ruby: "せんせい" }, { text: "に" }, { text: "聞", ruby: "き" }, { text: "きます。" }],
        answers: ["から"],
        hint: "理由・原因",
      },
      {
        segments: [{ text: "寒", ruby: "さむ" }, { text: "い" }, BLANK, { text: "窓", ruby: "まど" }, { text: "を" }, { text: "閉", ruby: "し" }, { text: "めます。" }],
        answers: ["から"],
        hint: "理由・原因",
      },
      {
        segments: [{ text: "きれい" }, { text: "です" }, BLANK, { text: "この" }, { text: "公園", ruby: "こうえん" }, { text: "が" }, { text: "好", ruby: "す" }, { text: "きです。" }],
        answers: ["から"],
        hint: "理由・原因",
      }
    ],
  },

  {
    particle: "まで (made)",
    symbol: "まで",
    questions: [
      {
        segments: [{ text: "5時", ruby: "ごじ" }, BLANK, { text: "働", ruby: "はたら" }, { text: "きます。" }],
        answers: ["まで"],
        hint: "時間の終点",
      },
      {
        segments: [{ text: "来週", ruby: "らいしゅう" }, BLANK, { text: "待", ruby: "ま" }, { text: "ちます。" }],
        answers: ["まで"],
        hint: "時間の終点",
      },
      {
        segments: [{ text: "夜", ruby: "よる" }, { text: "10時", ruby: "じゅうじ" }, BLANK, { text: "勉強", ruby: "べんきょう" }, { text: "しました。" }],
        answers: ["まで"],
        hint: "時間の終点",
      },
      {
        segments: [{ text: "8時", ruby: "はちじ" }, BLANK, { text: "寝", ruby: "ね" }, { text: "ました。" }],
        answers: ["まで"],
        hint: "時間の終点",
      },
      {
        segments: [{ text: "月曜日", ruby: "げつようび" }, BLANK, { text: "に" }, { text: "出", ruby: "だ" }, { text: "してください。" }],
        answers: ["まで"],
        hint: "期限",
      },
      {
        segments: [{ text: "夏", ruby: "なつ" }, BLANK, { text: "に" }, { text: "日本語", ruby: "にほんご" }, { text: "を" }, { text: "もっと" }, { text: "上達", ruby: "じょうたつ" }, { text: "させたいです。" }],
        answers: ["まで"],
        hint: "期限",
      },
      {
        segments: [{ text: "駅", ruby: "えき" }, BLANK, { text: "歩", ruby: "ある" }, { text: "きます。" }],
        answers: ["まで"],
        hint: "場所の終点",
      },
      {
        segments: [{ text: "家", ruby: "いえ" }, { text: "から" }, { text: "会社", ruby: "かいしゃ" }, BLANK, { text: "遠", ruby: "とお" }, { text: "いです。" }],
        answers: ["まで"],
        hint: "範囲の終点",
      },
      {
        segments: [{ text: "ここ" }, { text: "から" }, { text: "海", ruby: "うみ" }, BLANK, { text: "二キロ" }, { text: "です。" }],
        answers: ["まで"],
        hint: "範囲の終点",
      },
      {
        segments: [{ text: "子", ruby: "こ" }, { text: "ども" }, { text: "から" }, { text: "大人", ruby: "おとな" }, BLANK, { text: "楽", ruby: "たの" }, { text: "しめます。" }],
        answers: ["まで"],
        hint: "〜から〜まで",
      },
      {
        segments: [{ text: "一", ruby: "いち" }, { text: "から" }, { text: "十", ruby: "じゅう" }, BLANK, { text: "数", ruby: "かぞ" }, { text: "えてください。" }],
        answers: ["まで"],
        hint: "範囲の終点",
      },
      {
        segments: [{ text: "先生", ruby: "せんせい" }, BLANK, { text: "踊", ruby: "おど" }, { text: "りました。" }],
        answers: ["まで"],
        hint: "〜まで / 〜even",
      },
      {
        segments: [{ text: "社長", ruby: "しゃちょう" }, BLANK, { text: "来", ruby: "き" }, { text: "ました。" }],
        answers: ["まで"],
        hint: "〜まで / 〜even",
      },
      {
        segments: [{ text: "雨", ruby: "あめ" }, { text: "が" }, { text: "止", ruby: "や" }, { text: "む" }, BLANK, { text: "待", ruby: "ま" }, { text: "ちます。" }],
        answers: ["まで"],
        hint: "〜するまで",
      },
      {
        segments: [{ text: "終", ruby: "お" }, { text: "わる" }, BLANK, { text: "帰", ruby: "かえ" }, { text: "りません。" }],
        answers: ["まで"],
        hint: "〜するまで",
      },
      {
        segments: [{ text: "最後", ruby: "さいご" }, BLANK, { text: "読", ruby: "よ" }, { text: "みました。" }],
        answers: ["まで"],
        hint: "最後まで",
      }
    ],
  }
];
