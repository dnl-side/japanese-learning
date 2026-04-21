// src/data/grammar/particles.ts

import type { ParticleEntry } from "@/types/grammar";

export const PARTICLES: ParticleEntry[] = [
  // ─── は (wa) ───────────────────────────────────────────────────────────────
  {
    particle: "は (wa)",
    symbol: "は",
    romaji: "wa",
    summary: "Indica el tema de la oración. Presenta de qué se está hablando y también puede marcar contraste entre elementos.",
    uses: [
      {
        title: "Tema de la oración",
        examples: [
          {
            segments: [{ text: "私", ruby: "わたし" }, { text: "は" }, { text: "学生", ruby: "がくせい" }, { text: "です。" }],
            translation: "Yo soy estudiante.",
          },
          {
            segments: [{ text: "猫", ruby: "ねこ" }, { text: "は" }, { text: "かわいいです。" }],
            translation: "Los gatos son lindos.",
          },
          {
            segments: [{ text: "日本語", ruby: "にほんご" }, { text: "は" }, { text: "難", ruby: "むずか" }, { text: "しいです。" }],
            translation: "El japonés es difícil.",
          },
          {
            segments: [{ text: "この" }, { text: "本", ruby: "ほん" }, { text: "は" }, { text: "面白", ruby: "おもしろ" }, { text: "いです。" }],
            translation: "Este libro es interesante.",
          },
          {
            segments: [{ text: "今日", ruby: "きょう" }, { text: "は" }, { text: "暑", ruby: "あつ" }, { text: "いです。" }],
            translation: "Hoy hace calor.",
          },
          {
            segments: [{ text: "明日", ruby: "あした" }, { text: "は" }, { text: "休", ruby: "やす" }, { text: "みです。" }],
            translation: "Mañana es día libre.",
          },
          {
            segments: [{ text: "彼", ruby: "かれ" }, { text: "は" }, { text: "医者", ruby: "いしゃ" }, { text: "です。" }],
            translation: "Él es médico.",
          },
          {
            segments: [{ text: "彼女", ruby: "かのじょ" }, { text: "は" }, { text: "親切", ruby: "しんせつ" }, { text: "です。" }],
            translation: "Ella es amable.",
          },
          {
            segments: [{ text: "この" }, { text: "店", ruby: "みせ" }, { text: "は" }, { text: "静", ruby: "しず" }, { text: "かです。" }],
            translation: "Esta tienda es tranquila.",
          },
          {
            segments: [{ text: "その" }, { text: "映画", ruby: "えいが" }, { text: "は" }, { text: "長", ruby: "なが" }, { text: "いです。" }],
            translation: "Esa película es larga.",
          },
          {
            segments: [{ text: "私", ruby: "わたし" }, { text: "の" }, { text: "兄", ruby: "あに" }, { text: "は" }, { text: "高校生", ruby: "こうこうせい" }, { text: "です。" }],
            translation: "Mi hermano mayor es estudiante de secundaria.",
          },
          {
            segments: [{ text: "うち" }, { text: "の" }, { text: "犬", ruby: "いぬ" }, { text: "は" }, { text: "元気", ruby: "げんき" }, { text: "です。" }],
            translation: "Mi perro está lleno de energía.",
          },
          {
            segments: [{ text: "冬", ruby: "ふゆ" }, { text: "は" }, { text: "寒", ruby: "さむ" }, { text: "いです。" }],
            translation: "El invierno es frío.",
          },
          {
            segments: [{ text: "夏", ruby: "なつ" }, { text: "は" }, { text: "海", ruby: "うみ" }, { text: "が" }, { text: "人気", ruby: "にんき" }, { text: "です。" }],
            translation: "En verano, el mar es popular.",
          },
          {
            segments: [{ text: "東京", ruby: "とうきょう" }, { text: "は" }, { text: "人", ruby: "ひと" }, { text: "が" }, { text: "多", ruby: "おお" }, { text: "いです。" }],
            translation: "En Tokio hay mucha gente.",
          },
          {
            segments: [{ text: "この" }, { text: "部屋", ruby: "へや" }, { text: "は" }, { text: "広", ruby: "ひろ" }, { text: "いです。" }],
            translation: "Esta habitación es amplia.",
          },
          {
            segments: [{ text: "日本", ruby: "にほん" }, { text: "の" }, { text: "食", ruby: "た" }, { text: "べ" }, { text: "物", ruby: "もの" }, { text: "は" }, { text: "おいしいです。" }],
            translation: "La comida japonesa es rica.",
          },
          {
            segments: [{ text: "英語", ruby: "えいご" }, { text: "は" }, { text: "難", ruby: "むずか" }, { text: "しくないです。" }],
            translation: "El inglés no es difícil.",
          },
          {
            segments: [{ text: "数学", ruby: "すうがく" }, { text: "は" }, { text: "苦手", ruby: "にがて" }, { text: "です。" }],
            translation: "Las matemáticas no se me dan bien.",
          },
          {
            segments: [{ text: "音楽", ruby: "おんがく" }, { text: "は" }, { text: "楽", ruby: "たの" }, { text: "しいです。" }],
            translation: "La música es entretenida.",
          },
          {
            segments: [{ text: "週末", ruby: "しゅうまつ" }, { text: "は" }, { text: "忙", ruby: "いそが" }, { text: "しいです。" }],
            translation: "Los fines de semana estoy ocupado.",
          },
          {
            segments: [{ text: "朝", ruby: "あさ" }, { text: "は" }, { text: "コーヒー" }, { text: "を" }, { text: "飲", ruby: "の" }, { text: "みます。" }],
            translation: "Por la mañana tomo café.",
          },
          {
            segments: [{ text: "夜", ruby: "よる" }, { text: "は" }, { text: "早", ruby: "はや" }, { text: "く" }, { text: "寝", ruby: "ね" }, { text: "ます。" }],
            translation: "Por la noche me acuesto temprano.",
          },
          {
            segments: [{ text: "学校", ruby: "がっこう" }, { text: "は" }, { text: "８時", ruby: "はちじ" }, { text: "からです。" }],
            translation: "La escuela es desde las 8.",
          },
          {
            segments: [{ text: "この" }, { text: "かばん" }, { text: "は" }, { text: "便利", ruby: "べんり" }, { text: "です。" }],
            translation: "Este bolso es práctico.",
          },
          {
            segments: [{ text: "私", ruby: "わたし" }, { text: "の" }, { text: "町", ruby: "まち" }, { text: "は" }, { text: "静", ruby: "しず" }, { text: "かです。" }],
            translation: "Mi ciudad es tranquila.",
          },
          {
            segments: [{ text: "日本", ruby: "にほん" }, { text: "の" }, { text: "春", ruby: "はる" }, { text: "は" }, { text: "きれいです。" }],
            translation: "La primavera en Japón es hermosa.",
          },
          {
            segments: [{ text: "その" }, { text: "先生", ruby: "せんせい" }, { text: "は" }, { text: "有名", ruby: "ゆうめい" }, { text: "です。" }],
            translation: "Ese profesor es famoso.",
          },
          {
            segments: [{ text: "パソコン" }, { text: "は" }, { text: "高", ruby: "たか" }, { text: "いです。" }],
            translation: "Las computadoras son caras.",
          },
          {
            segments: [{ text: "私", ruby: "わたし" }, { text: "の" }, { text: "母", ruby: "はは" }, { text: "は" }, { text: "料理", ruby: "りょうり" }, { text: "が" }, { text: "上手", ruby: "じょうず" }, { text: "です。" }],
            translation: "Mi madre cocina bien.",
          },
        ],
      },
      {
        title: "Contraste entre dos elementos",
        examples: [
          {
            segments: [{ text: "コーヒー" }, { text: "は" }, { text: "好", ruby: "す" }, { text: "きですが、" }, { text: "お茶", ruby: "おちゃ" }, { text: "は" }, { text: "好", ruby: "す" }, { text: "きではありません。" }],
            translation: "Me gusta el café, pero no me gusta el té.",
          },
          {
            segments: [{ text: "この" }, { text: "ケーキ" }, { text: "は" }, { text: "美味", ruby: "おい" }, { text: "しいですが、" }, { text: "値段", ruby: "ねだん" }, { text: "は" }, { text: "高", ruby: "たか" }, { text: "いです。" }],
            translation: "Este pastel es delicioso, pero su precio es alto.",
          },
          {
            segments: [{ text: "兄", ruby: "あに" }, { text: "は" }, { text: "背", ruby: "せ" }, { text: "が" }, { text: "高", ruby: "たか" }, { text: "いですが、" }, { text: "弟", ruby: "おとうと" }, { text: "は" }, { text: "高", ruby: "たか" }, { text: "くありません。" }],
            translation: "Mi hermano mayor es alto, pero mi hermano menor no.",
          },
          {
            segments: [{ text: "朝", ruby: "あさ" }, { text: "は" }, { text: "忙", ruby: "いそが" }, { text: "しいですが、" }, { text: "夜", ruby: "よる" }, { text: "は" }, { text: "ひまです。" }],
            translation: "Por la mañana estoy ocupado, pero por la noche estoy libre.",
          },
          {
            segments: [{ text: "読", ruby: "よ" }, { text: "む" }, { text: "の" }, { text: "は" }, { text: "好", ruby: "す" }, { text: "きですが、" }, { text: "書", ruby: "か" }, { text: "く" }, { text: "の" }, { text: "は" }, { text: "苦手", ruby: "にがて" }, { text: "です。" }],
            translation: "Me gusta leer, pero escribir no se me da bien.",
          },
          {
            segments: [{ text: "犬", ruby: "いぬ" }, { text: "は" }, { text: "好", ruby: "す" }, { text: "きですが、" }, { text: "猫", ruby: "ねこ" }, { text: "は" }, { text: "少", ruby: "すこ" }, { text: "し" }, { text: "苦手", ruby: "にがて" }, { text: "です。" }],
            translation: "Me gustan los perros, pero los gatos no me agradan mucho.",
          },
          {
            segments: [{ text: "日本語", ruby: "にほんご" }, { text: "は" }, { text: "話", ruby: "はな" }, { text: "せますが、" }, { text: "英語", ruby: "えいご" }, { text: "は" }, { text: "まだ" }, { text: "上手", ruby: "じょうず" }, { text: "ではありません。" }],
            translation: "Puedo hablar japonés, pero todavía no hablo bien inglés.",
          },
          {
            segments: [{ text: "春", ruby: "はる" }, { text: "は" }, { text: "好", ruby: "す" }, { text: "きですが、" }, { text: "夏", ruby: "なつ" }, { text: "は" }, { text: "暑", ruby: "あつ" }, { text: "すぎます。" }],
            translation: "Me gusta la primavera, pero el verano es demasiado caluroso.",
          },
          {
            segments: [{ text: "この" }, { text: "部屋", ruby: "へや" }, { text: "は" }, { text: "広", ruby: "ひろ" }, { text: "いですが、" }, { text: "あの" }, { text: "部屋", ruby: "へや" }, { text: "は" }, { text: "狭", ruby: "せま" }, { text: "いです。" }],
            translation: "Esta habitación es amplia, pero esa habitación es estrecha.",
          },
          {
            segments: [{ text: "兄", ruby: "あに" }, { text: "は" }, { text: "野球", ruby: "やきゅう" }, { text: "が" }, { text: "好", ruby: "す" }, { text: "きですが、" }, { text: "私", ruby: "わたし" }, { text: "は" }, { text: "サッカー" }, { text: "が" }, { text: "好", ruby: "す" }, { text: "きです。" }],
            translation: "A mi hermano mayor le gusta el béisbol, pero a mí me gusta el fútbol.",
          },
          {
            segments: [{ text: "今日", ruby: "きょう" }, { text: "は" }, { text: "寒", ruby: "さむ" }, { text: "いですが、" }, { text: "昨日", ruby: "きのう" }, { text: "は" }, { text: "暖", ruby: "あたた" }, { text: "かかったです。" }],
            translation: "Hoy hace frío, pero ayer hacía calor.",
          },
          {
            segments: [{ text: "父", ruby: "ちち" }, { text: "は" }, { text: "車", ruby: "くるま" }, { text: "で" }, { text: "行", ruby: "い" }, { text: "きますが、" }, { text: "母", ruby: "はは" }, { text: "は" }, { text: "電車", ruby: "でんしゃ" }, { text: "で" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Mi padre va en auto, pero mi madre va en tren.",
          },
          {
            segments: [{ text: "この" }, { text: "店", ruby: "みせ" }, { text: "は" }, { text: "安", ruby: "やす" }, { text: "いですが、" }, { text: "サービス" }, { text: "は" }, { text: "あまり" }, { text: "良", ruby: "よ" }, { text: "くありません。" }],
            translation: "Esta tienda es barata, pero el servicio no es muy bueno.",
          },
          {
            segments: [{ text: "肉", ruby: "にく" }, { text: "は" }, { text: "食", ruby: "た" }, { text: "べますが、" }, { text: "魚", ruby: "さかな" }, { text: "は" }, { text: "あまり" }, { text: "食", ruby: "た" }, { text: "べません。" }],
            translation: "Como carne, pero no como mucho pescado.",
          },
          {
            segments: [{ text: "月曜日", ruby: "げつようび" }, { text: "は" }, { text: "ひまですが、" }, { text: "火曜日", ruby: "かようび" }, { text: "は" }, { text: "忙", ruby: "いそが" }, { text: "しいです。" }],
            translation: "El lunes estoy libre, pero el martes estoy ocupado.",
          },
          {
            segments: [{ text: "私", ruby: "わたし" }, { text: "は" }, { text: "早", ruby: "はや" }, { text: "く" }, { text: "起", ruby: "お" }, { text: "きますが、" }, { text: "弟", ruby: "おとうと" }, { text: "は" }, { text: "遅", ruby: "おそ" }, { text: "く" }, { text: "起", ruby: "お" }, { text: "きます。" }],
            translation: "Yo me levanto temprano, pero mi hermano menor se levanta tarde.",
          },
          {
            segments: [{ text: "日本語", ruby: "にほんご" }, { text: "は" }, { text: "難", ruby: "むずか" }, { text: "しいですが、" }, { text: "面白", ruby: "おもしろ" }, { text: "いです。" }],
            translation: "El japonés es difícil, pero interesante.",
          },
          {
            segments: [{ text: "この" }, { text: "本", ruby: "ほん" }, { text: "は" }, { text: "長", ruby: "なが" }, { text: "いですが、" }, { text: "内容", ruby: "ないよう" }, { text: "は" }, { text: "分", ruby: "わ" }, { text: "かりやすいです。" }],
            translation: "Este libro es largo, pero su contenido es fácil de entender.",
          },
          {
            segments: [{ text: "学校", ruby: "がっこう" }, { text: "は" }, { text: "近", ruby: "ちか" }, { text: "いですが、" }, { text: "会社", ruby: "かいしゃ" }, { text: "は" }, { text: "遠", ruby: "とお" }, { text: "いです。" }],
            translation: "La escuela está cerca, pero la empresa está lejos.",
          },
          {
            segments: [{ text: "母", ruby: "はは" }, { text: "は" }, { text: "料理", ruby: "りょうり" }, { text: "が" }, { text: "上手", ruby: "じょうず" }, { text: "ですが、" }, { text: "父", ruby: "ちち" }, { text: "は" }, { text: "あまり" }, { text: "しません。" }],
            translation: "Mi madre cocina bien, pero mi padre casi no cocina.",
          },
          {
            segments: [{ text: "この" }, { text: "町", ruby: "まち" }, { text: "は" }, { text: "静", ruby: "しず" }, { text: "かですが、" }, { text: "駅前", ruby: "えきまえ" }, { text: "は" }, { text: "にぎやかです。" }],
            translation: "Esta ciudad es tranquila, pero frente a la estación hay mucho ambiente.",
          },
          {
            segments: [{ text: "平日", ruby: "へいじつ" }, { text: "は" }, { text: "仕事", ruby: "しごと" }, { text: "がありますが、" }, { text: "週末", ruby: "しゅうまつ" }, { text: "は" }, { text: "休", ruby: "やす" }, { text: "みです。" }],
            translation: "Entre semana tengo trabajo, pero el fin de semana descanso.",
          },
          {
            segments: [{ text: "兄", ruby: "あに" }, { text: "は" }, { text: "数学", ruby: "すうがく" }, { text: "が" }, { text: "得意", ruby: "とくい" }, { text: "ですが、" }, { text: "私", ruby: "わたし" }, { text: "は" }, { text: "国語", ruby: "こくご" }, { text: "の" }, { text: "ほう" }, { text: "が" }, { text: "得意", ruby: "とくい" }, { text: "です。" }],
            translation: "Mi hermano mayor es bueno para matemáticas, pero yo soy mejor en lengua.",
          },
          {
            segments: [{ text: "飛行機", ruby: "ひこうき" }, { text: "は" }, { text: "速", ruby: "はや" }, { text: "いですが、" }, { text: "新幹線", ruby: "しんかんせん" }, { text: "は" }, { text: "楽", ruby: "らく" }, { text: "です。" }],
            translation: "El avión es rápido, pero el shinkansen es cómodo.",
          },
          {
            segments: [{ text: "ここ" }, { text: "は" }, { text: "便利", ruby: "べんり" }, { text: "ですが、" }, { text: "家賃", ruby: "やちん" }, { text: "は" }, { text: "高", ruby: "たか" }, { text: "いです。" }],
            translation: "Aquí es práctico, pero el arriendo es caro.",
          },
          {
            segments: [{ text: "漢字", ruby: "かんじ" }, { text: "は" }, { text: "難", ruby: "むずか" }, { text: "しいですが、" }, { text: "ひらがな" }, { text: "は" }, { text: "覚", ruby: "おぼ" }, { text: "えやすいです。" }],
            translation: "Los kanji son difíciles, pero el hiragana es fácil de aprender.",
          },
          {
            segments: [{ text: "この" }, { text: "スマホ" }, { text: "は" }, { text: "新", ruby: "あたら" }, { text: "しいですが、" }, { text: "電池", ruby: "でんち" }, { text: "は" }, { text: "あまり" }, { text: "長", ruby: "なが" }, { text: "く" }, { text: "もちません。" }],
            translation: "Este celular es nuevo, pero la batería no dura mucho.",
          },
          {
            segments: [{ text: "バス" }, { text: "は" }, { text: "安", ruby: "やす" }, { text: "いですが、" }, { text: "時間", ruby: "じかん" }, { text: "が" }, { text: "かかります。" }],
            translation: "El autobús es barato, pero toma tiempo.",
          },
          {
            segments: [{ text: "一人", ruby: "ひとり" }, { text: "で" }, { text: "旅行", ruby: "りょこう" }, { text: "する" }, { text: "の" }, { text: "は" }, { text: "気楽", ruby: "きらく" }, { text: "ですが、" }, { text: "少", ruby: "すこ" }, { text: "し" }, { text: "さびしいです。" }],
            translation: "Viajar solo es cómodo, pero da un poco de soledad.",
          },
          {
            segments: [{ text: "日本", ruby: "にほん" }, { text: "の" }, { text: "夏", ruby: "なつ" }, { text: "は" }, { text: "暑", ruby: "あつ" }, { text: "いですが、" }, { text: "冬", ruby: "ふゆ" }, { text: "は" }, { text: "とても" }, { text: "寒", ruby: "さむ" }, { text: "いです。" }],
            translation: "El verano en Japón es caluroso, pero el invierno es muy frío.",
          },
        ],
      },
      {
        title: "Marco temporal o contextual",
        examples: [
          {
            segments: [{ text: "今日", ruby: "きょう" }, { text: "は" }, { text: "三時間", ruby: "さんじかん" }, { text: "勉強", ruby: "べんきょう" }, { text: "しました。" }],
            translation: "Hoy estudié tres horas.",
          },
          {
            segments: [{ text: "今週", ruby: "こんしゅう" }, { text: "は" }, { text: "仕事", ruby: "しごと" }, { text: "が" }, { text: "多", ruby: "おお" }, { text: "いです。" }],
            translation: "Esta semana tengo mucho trabajo.",
          },
          {
            segments: [{ text: "日本", ruby: "にほん" }, { text: "では" }, { text: "桜", ruby: "さくら" }, { text: "が" }, { text: "有名", ruby: "ゆうめい" }, { text: "です。" }],
            translation: "En Japón los cerezos son famosos.",
          },
          {
            segments: [{ text: "子", ruby: "こ" }, { text: "ども" }, { text: "の" }, { text: "ころ" }, { text: "は" }, { text: "よく" }, { text: "外", ruby: "そと" }, { text: "で" }, { text: "遊", ruby: "あそ" }, { text: "びました。" }],
            translation: "Cuando era niño jugaba mucho afuera.",
          },
          {
            segments: [{ text: "旅行中", ruby: "りょこうちゅう" }, { text: "は" }, { text: "毎日", ruby: "まいにち" }, { text: "早", ruby: "はや" }, { text: "く" }, { text: "起", ruby: "お" }, { text: "きました。" }],
            translation: "Durante el viaje me levanté temprano todos los días.",
          },
          {
            segments: [{ text: "今年", ruby: "ことし" }, { text: "は" }, { text: "新", ruby: "あたら" }, { text: "しい" }, { text: "こと" }, { text: "を" }, { text: "始", ruby: "はじ" }, { text: "めたいです。" }],
            translation: "Este año quiero empezar algo nuevo.",
          },
          {
            segments: [{ text: "今月", ruby: "こんげつ" }, { text: "は" }, { text: "出張", ruby: "しゅっちょう" }, { text: "が" }, { text: "多", ruby: "おお" }, { text: "いです。" }],
            translation: "Este mes tengo muchos viajes de trabajo.",
          },
          {
            segments: [{ text: "今朝", ruby: "けさ" }, { text: "は" }, { text: "電車", ruby: "でんしゃ" }, { text: "が" }, { text: "遅", ruby: "おく" }, { text: "れました。" }],
            translation: "Esta mañana el tren se atrasó.",
          },
          {
            segments: [{ text: "明日", ruby: "あした" }, { text: "は" }, { text: "会議", ruby: "かいぎ" }, { text: "が" }, { text: "あります。" }],
            translation: "Mañana hay reunión.",
          },
          {
            segments: [{ text: "週末", ruby: "しゅうまつ" }, { text: "は" }, { text: "家", ruby: "いえ" }, { text: "で" }, { text: "休", ruby: "やす" }, { text: "みます。" }],
            translation: "El fin de semana descanso en casa.",
          },
          {
            segments: [{ text: "冬", ruby: "ふゆ" }, { text: "は" }, { text: "六時", ruby: "ろくじ" }, { text: "ごろ" }, { text: "暗", ruby: "くら" }, { text: "くなります。" }],
            translation: "En invierno oscurece cerca de las seis.",
          },
          {
            segments: [{ text: "夜", ruby: "よる" }, { text: "は" }, { text: "この" }, { text: "道", ruby: "みち" }, { text: "は" }, { text: "静", ruby: "しず" }, { text: "かです。" }],
            translation: "Por la noche esta calle es tranquila.",
          },
          {
            segments: [{ text: "春", ruby: "はる" }, { text: "は" }, { text: "新", ruby: "あたら" }, { text: "しい" }, { text: "学生", ruby: "がくせい" }, { text: "が" }, { text: "入", ruby: "はい" }, { text: "ります。" }],
            translation: "En primavera entran estudiantes nuevos.",
          },
          {
            segments: [{ text: "授業中", ruby: "じゅぎょうちゅう" }, { text: "は" }, { text: "日本語", ruby: "にほんご" }, { text: "だけ" }, { text: "を" }, { text: "使", ruby: "つか" }, { text: "います。" }],
            translation: "Durante la clase uso solo japonés.",
          },
          {
            segments: [{ text: "テスト" }, { text: "の" }, { text: "前", ruby: "まえ" }, { text: "は" }, { text: "少", ruby: "すこ" }, { text: "し" }, { text: "緊張", ruby: "きんちょう" }, { text: "します。" }],
            translation: "Antes de una prueba me pongo un poco nervioso.",
          },
          {
            segments: [{ text: "休", ruby: "やす" }, { text: "み" }, { text: "の" }, { text: "日", ruby: "ひ" }, { text: "は" }, { text: "よく" }, { text: "料理", ruby: "りょうり" }, { text: "します。" }],
            translation: "En mis días libres cocino a menudo.",
          },
          {
            segments: [{ text: "北海道", ruby: "ほっかいどう" }, { text: "では" }, { text: "冬", ruby: "ふゆ" }, { text: "に" }, { text: "雪", ruby: "ゆき" }, { text: "が" }, { text: "たくさん" }, { text: "降", ruby: "ふ" }, { text: "ります。" }],
            translation: "En Hokkaidō nieva mucho en invierno.",
          },
          {
            segments: [{ text: "この" }, { text: "店", ruby: "みせ" }, { text: "では" }, { text: "クレジットカード" }, { text: "が" }, { text: "使", ruby: "つか" }, { text: "えます。" }],
            translation: "En esta tienda se puede usar tarjeta de crédito.",
          },
          {
            segments: [{ text: "私", ruby: "わたし" }, { text: "の" }, { text: "国", ruby: "くに" }, { text: "では" }, { text: "昼", ruby: "ひる" }, { text: "ご" }, { text: "飯", ruby: "はん" }, { text: "を" }, { text: "遅", ruby: "おそ" }, { text: "く" }, { text: "食", ruby: "た" }, { text: "べる" }, { text: "人", ruby: "ひと" }, { text: "も" }, { text: "います。" }],
            translation: "En mi país también hay gente que almuerza tarde.",
          },
          {
            segments: [{ text: "学生", ruby: "がくせい" }, { text: "の" }, { text: "とき" }, { text: "は" }, { text: "毎日", ruby: "まいにち" }, { text: "図書館", ruby: "としょかん" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きました。" }],
            translation: "Cuando era estudiante iba a la biblioteca todos los días.",
          },
          {
            segments: [{ text: "忙", ruby: "いそが" }, { text: "しい" }, { text: "とき" }, { text: "は" }, { text: "音楽", ruby: "おんがく" }, { text: "を" }, { text: "聞", ruby: "き" }, { text: "きません。" }],
            translation: "Cuando estoy ocupado no escucho música.",
          },
          {
            segments: [{ text: "困", ruby: "こま" }, { text: "った" }, { text: "とき" }, { text: "は" }, { text: "先生", ruby: "せんせい" }, { text: "に" }, { text: "聞", ruby: "き" }, { text: "いてください。" }],
            translation: "Cuando tengas problemas, pregúntale al profesor.",
          },
          {
            segments: [{ text: "雨", ruby: "あめ" }, { text: "の" }, { text: "日", ruby: "ひ" }, { text: "は" }, { text: "うち" }, { text: "で" }, { text: "映画", ruby: "えいが" }, { text: "を" }, { text: "見", ruby: "み" }, { text: "ます。" }],
            translation: "En los días de lluvia veo películas en casa.",
          },
          {
            segments: [{ text: "仕事中", ruby: "しごとちゅう" }, { text: "は" }, { text: "私語", ruby: "しご" }, { text: "を" }, { text: "しません。" }],
            translation: "Durante el trabajo no converso de cosas ajenas.",
          },
          {
            segments: [{ text: "試験中", ruby: "しけんちゅう" }, { text: "は" }, { text: "スマホ" }, { text: "を" }, { text: "使", ruby: "つか" }, { text: "えません。" }],
            translation: "Durante el examen no se puede usar el celular.",
          },
          {
            segments: [{ text: "この" }, { text: "クラス" }, { text: "では" }, { text: "宿題", ruby: "しゅくだい" }, { text: "が" }, { text: "毎週", ruby: "まいしゅう" }, { text: "出", ruby: "で" }, { text: "ます。" }],
            translation: "En esta clase hay tarea todas las semanas.",
          },
          {
            segments: [{ text: "この" }, { text: "アプリ" }, { text: "では" }, { text: "日本語", ruby: "にほんご" }, { text: "を" }, { text: "勉強", ruby: "べんきょう" }, { text: "できます。" }],
            translation: "En esta aplicación se puede estudiar japonés.",
          },
          {
            segments: [{ text: "駅", ruby: "えき" }, { text: "の" }, { text: "近", ruby: "ちか" }, { text: "く" }, { text: "では" }, { text: "駐車", ruby: "ちゅうしゃ" }, { text: "できません。" }],
            translation: "Cerca de la estación no se puede estacionar.",
          },
          {
            segments: [{ text: "海外", ruby: "かいがい" }, { text: "では" }, { text: "文化", ruby: "ぶんか" }, { text: "の" }, { text: "違", ruby: "ちが" }, { text: "い" }, { text: "を" }, { text: "感", ruby: "かん" }, { text: "じます。" }],
            translation: "En el extranjero se sienten las diferencias culturales.",
          },
          {
            segments: [{ text: "会議中", ruby: "かいぎちゅう" }, { text: "は" }, { text: "静", ruby: "しず" }, { text: "か" }, { text: "に" }, { text: "してください。" }],
            translation: "Durante la reunión, por favor mantén silencio.",
          },
        ],
      },
      {
        title: "Tema general o afirmación amplia",
        examples: [
          {
            segments: [{ text: "猫", ruby: "ねこ" }, { text: "は" }, { text: "夜", ruby: "よる" }, { text: "に" }, { text: "よく" }, { text: "動", ruby: "うご" }, { text: "きます。" }],
            translation: "Los gatos se mueven mucho por la noche.",
          },
          {
            segments: [{ text: "野菜", ruby: "やさい" }, { text: "は" }, { text: "体", ruby: "からだ" }, { text: "に" }, { text: "いいです。" }],
            translation: "Las verduras son buenas para el cuerpo.",
          },
          {
            segments: [{ text: "電車", ruby: "でんしゃ" }, { text: "は" }, { text: "日本", ruby: "にほん" }, { text: "で" }, { text: "とても" }, { text: "便利", ruby: "べんり" }, { text: "です。" }],
            translation: "El tren es muy práctico en Japón.",
          },
          {
            segments: [{ text: "日本", ruby: "にほん" }, { text: "の" }, { text: "夏", ruby: "なつ" }, { text: "は" }, { text: "むし" }, { text: "暑", ruby: "あつ" }, { text: "いです。" }],
            translation: "El verano japonés es húmedo y caluroso.",
          },
          {
            segments: [{ text: "この" }, { text: "アプリ" }, { text: "は" }, { text: "初心者", ruby: "しょしんしゃ" }, { text: "にも" }, { text: "使", ruby: "つか" }, { text: "いやすいです。" }],
            translation: "Esta aplicación es fácil de usar incluso para principiantes.",
          },
          {
            segments: [{ text: "犬", ruby: "いぬ" }, { text: "は" }, { text: "人", ruby: "ひと" }, { text: "と" }, { text: "遊", ruby: "あそ" }, { text: "ぶ" }, { text: "の" }, { text: "が" }, { text: "好", ruby: "す" }, { text: "きです。" }],
            translation: "A los perros les gusta jugar con las personas.",
          },
          {
            segments: [{ text: "魚", ruby: "さかな" }, { text: "は" }, { text: "水", ruby: "みず" }, { text: "の" }, { text: "中", ruby: "なか" }, { text: "で" }, { text: "泳", ruby: "およ" }, { text: "ぎます。" }],
            translation: "Los peces nadan en el agua.",
          },
          {
            segments: [{ text: "鳥", ruby: "とり" }, { text: "は" }, { text: "空", ruby: "そら" }, { text: "を" }, { text: "飛", ruby: "と" }, { text: "びます。" }],
            translation: "Las aves vuelan por el cielo.",
          },
          {
            segments: [{ text: "子", ruby: "こ" }, { text: "ども" }, { text: "は" }, { text: "元気", ruby: "げんき" }, { text: "です。" }],
            translation: "Los niños tienen mucha energía.",
          },
          {
            segments: [{ text: "大人", ruby: "おとな" }, { text: "は" }, { text: "忙", ruby: "いそが" }, { text: "しい" }, { text: "こと" }, { text: "が" }, { text: "多", ruby: "おお" }, { text: "いです。" }],
            translation: "Los adultos suelen estar ocupados.",
          },
          {
            segments: [{ text: "日本語", ruby: "にほんご" }, { text: "の" }, { text: "漢字", ruby: "かんじ" }, { text: "は" }, { text: "覚", ruby: "おぼ" }, { text: "える" }, { text: "の" }, { text: "に" }, { text: "時間", ruby: "じかん" }, { text: "が" }, { text: "かかります。" }],
            translation: "Aprender los kanji del japonés toma tiempo.",
          },
          {
            segments: [{ text: "外国語", ruby: "がいこくご" }, { text: "の" }, { text: "勉強", ruby: "べんきょう" }, { text: "は" }, { text: "時間", ruby: "じかん" }, { text: "が" }, { text: "かかります。" }],
            translation: "Estudiar un idioma extranjero toma tiempo.",
          },
          {
            segments: [{ text: "運動", ruby: "うんどう" }, { text: "は" }, { text: "健康", ruby: "けんこう" }, { text: "に" }, { text: "いいです。" }],
            translation: "El ejercicio es bueno para la salud.",
          },
          {
            segments: [{ text: "水", ruby: "みず" }, { text: "は" }, { text: "毎日", ruby: "まいにち" }, { text: "飲", ruby: "の" }, { text: "んだ" }, { text: "ほう" }, { text: "が" }, { text: "いいです。" }],
            translation: "Es mejor tomar agua todos los días.",
          },
          {
            segments: [{ text: "日本", ruby: "にほん" }, { text: "の" }, { text: "コンビニ" }, { text: "は" }, { text: "とても" }, { text: "便利", ruby: "べんり" }, { text: "です。" }],
            translation: "Las tiendas de conveniencia de Japón son muy prácticas.",
          },
          {
            segments: [{ text: "冬", ruby: "ふゆ" }, { text: "の" }, { text: "朝", ruby: "あさ" }, { text: "は" }, { text: "寒", ruby: "さむ" }, { text: "いです。" }],
            translation: "Las mañanas de invierno son frías.",
          },
          {
            segments: [{ text: "山", ruby: "やま" }, { text: "の" }, { text: "空気", ruby: "くうき" }, { text: "は" }, { text: "きれいです。" }],
            translation: "El aire de la montaña es limpio.",
          },
          {
            segments: [{ text: "辛", ruby: "から" }, { text: "い" }, { text: "食", ruby: "た" }, { text: "べ" }, { text: "物", ruby: "もの" }, { text: "は" }, { text: "人", ruby: "ひと" }, { text: "に" }, { text: "よって" }, { text: "好", ruby: "この" }, { text: "み" }, { text: "が" }, { text: "分", ruby: "わ" }, { text: "かれます。" }],
            translation: "La comida picante divide gustos según la persona.",
          },
          {
            segments: [{ text: "日本", ruby: "にほん" }, { text: "の" }, { text: "電車", ruby: "でんしゃ" }, { text: "は" }, { text: "時間", ruby: "じかん" }, { text: "に" }, { text: "正確", ruby: "せいかく" }, { text: "です。" }],
            translation: "Los trenes en Japón son puntuales.",
          },
          {
            segments: [{ text: "本", ruby: "ほん" }, { text: "は" }, { text: "知識", ruby: "ちしき" }, { text: "を" }, { text: "増", ruby: "ふ" }, { text: "やしてくれます。" }],
            translation: "Los libros ayudan a aumentar el conocimiento.",
          },
          {
            segments: [{ text: "旅行", ruby: "りょこう" }, { text: "は" }, { text: "新", ruby: "あたら" }, { text: "しい" }, { text: "発見", ruby: "はっけん" }, { text: "が" }, { text: "あります。" }],
            translation: "Viajar trae descubrimientos nuevos.",
          },
          {
            segments: [{ text: "日本", ruby: "にほん" }, { text: "の" }, { text: "春", ruby: "はる" }, { text: "は" }, { text: "花", ruby: "はな" }, { text: "が" }, { text: "きれいです。" }],
            translation: "La primavera en Japón tiene flores hermosas.",
          },
          {
            segments: [{ text: "漢字", ruby: "かんじ" }, { text: "は" }, { text: "読", ruby: "よ" }, { text: "む" }, { text: "の" }, { text: "が" }, { text: "難", ruby: "むずか" }, { text: "しいです。" }],
            translation: "Leer kanji es difícil.",
          },
          {
            segments: [{ text: "ひらがな" }, { text: "は" }, { text: "日本語", ruby: "にほんご" }, { text: "の" }, { text: "勉強", ruby: "べんきょう" }, { text: "の" }, { text: "基本", ruby: "きほん" }, { text: "です。" }],
            translation: "El hiragana es la base del estudio del japonés.",
          },
          {
            segments: [{ text: "パン" }, { text: "は" }, { text: "朝", ruby: "あさ" }, { text: "ご" }, { text: "飯", ruby: "はん" }, { text: "に" }, { text: "便利", ruby: "べんり" }, { text: "です。" }],
            translation: "El pan es práctico para el desayuno.",
          },
          {
            segments: [{ text: "スマホ" }, { text: "の" }, { text: "カメラ" }, { text: "は" }, { text: "とても" }, { text: "便利", ruby: "べんり" }, { text: "です。" }],
            translation: "La cámara del celular es muy práctica.",
          },
          {
            segments: [{ text: "音楽", ruby: "おんがく" }, { text: "は" }, { text: "気分", ruby: "きぶん" }, { text: "を" }, { text: "変", ruby: "か" }, { text: "えてくれます。" }],
            translation: "La música ayuda a cambiar el ánimo.",
          },
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "は" }, { text: "大切", ruby: "たいせつ" }, { text: "です。" }],
            translation: "Los amigos son importantes.",
          },
          {
            segments: [{ text: "早寝", ruby: "はやね" }, { text: "は" }, { text: "体", ruby: "からだ" }, { text: "に" }, { text: "いいです。" }],
            translation: "Acostarse temprano es bueno para el cuerpo.",
          },
          {
            segments: [{ text: "日本語", ruby: "にほんご" }, { text: "の" }, { text: "文法", ruby: "ぶんぽう" }, { text: "は" }, { text: "最初", ruby: "さいしょ" }, { text: "は" }, { text: "少", ruby: "すこ" }, { text: "し" }, { text: "難", ruby: "むずか" }, { text: "しく" }, { text: "感", ruby: "かん" }, { text: "じます。" }],
            translation: "La gramática japonesa al principio se siente un poco difícil.",
          },
        ],
      },
    ],
  },

  // ─── が (ga) ───────────────────────────────────────────────────────────────
  {
    particle: "が (ga)",
    symbol: "が",
    romaji: "ga",
    summary: "Indica el sujeto o el elemento que se identifica de forma específica. También aparece con fenómenos, existencia y expresiones como 好き・分かる・できる.",
    uses: [
      {
        title: "Identificar quién o qué es",
        examples: [
          {
            segments: [{ text: "誰", ruby: "だれ" }, { text: "が" }, { text: "先生", ruby: "せんせい" }, { text: "ですか？" }],
            translation: "¿Quién es el profesor?",
          },
          {
            segments: [{ text: "田中", ruby: "たなか" }, { text: "さん" }, { text: "が" }, { text: "先生", ruby: "せんせい" }, { text: "です。" }],
            translation: "Tanaka es el profesor.",
          },
          {
            segments: [{ text: "どれ" }, { text: "が" }, { text: "あなた" }, { text: "の" }, { text: "かばんですか？" }],
            translation: "¿Cuál es tu bolso?",
          },
          {
            segments: [{ text: "これ" }, { text: "が" }, { text: "新", ruby: "あたら" }, { text: "しい" }, { text: "パソコン" }, { text: "です。" }],
            translation: "Esta es la computadora nueva.",
          },
          {
            segments: [{ text: "私", ruby: "わたし" }, { text: "が" }, { text: "やります。" }],
            translation: "Yo lo hago.",
          },
          {
            segments: [{ text: "誰", ruby: "だれ" }, { text: "が" }, { text: "来", ruby: "き" }, { text: "ましたか？" }],
            translation: "¿Quién vino?",
          },
          {
            segments: [{ text: "山田", ruby: "やまだ" }, { text: "さん" }, { text: "が" }, { text: "来", ruby: "き" }, { text: "ました。" }],
            translation: "Vino Yamada.",
          },
          {
            segments: [{ text: "どの" }, { text: "人", ruby: "ひと" }, { text: "が" }, { text: "部長", ruby: "ぶちょう" }, { text: "ですか？" }],
            translation: "¿Cuál persona es el jefe de departamento?",
          },
          {
            segments: [{ text: "あの" }, { text: "人", ruby: "ひと" }, { text: "が" }, { text: "部長", ruby: "ぶちょう" }, { text: "です。" }],
            translation: "Esa persona es el jefe de departamento.",
          },
          {
            segments: [{ text: "何", ruby: "なに" }, { text: "が" }, { text: "問題", ruby: "もんだい" }, { text: "ですか？" }],
            translation: "¿Qué es el problema?",
          },
          {
            segments: [{ text: "時間", ruby: "じかん" }, { text: "が" }, { text: "問題", ruby: "もんだい" }, { text: "です。" }],
            translation: "El problema es el tiempo.",
          },
          {
            segments: [{ text: "どの" }, { text: "店", ruby: "みせ" }, { text: "が" }, { text: "一番", ruby: "いちばん" }, { text: "安", ruby: "やす" }, { text: "いですか？" }],
            translation: "¿Qué tienda es la más barata?",
          },
          {
            segments: [{ text: "あの" }, { text: "店", ruby: "みせ" }, { text: "が" }, { text: "一番", ruby: "いちばん" }, { text: "安", ruby: "やす" }, { text: "いです。" }],
            translation: "Esa tienda es la más barata.",
          },
          {
            segments: [{ text: "どれ" }, { text: "が" }, { text: "正", ruby: "ただ" }, { text: "しい" }, { text: "答", ruby: "こた" }, { text: "え" }, { text: "ですか？" }],
            translation: "¿Cuál es la respuesta correcta?",
          },
          {
            segments: [{ text: "三番", ruby: "さんばん" }, { text: "が" }, { text: "正", ruby: "ただ" }, { text: "しい" }, { text: "答", ruby: "こた" }, { text: "え" }, { text: "です。" }],
            translation: "La respuesta correcta es la número tres.",
          },
          {
            segments: [{ text: "誰", ruby: "だれ" }, { text: "が" }, { text: "説明", ruby: "せつめい" }, { text: "しますか？" }],
            translation: "¿Quién lo explica?",
          },
          {
            segments: [{ text: "私", ruby: "わたし" }, { text: "が" }, { text: "説明", ruby: "せつめい" }, { text: "します。" }],
            translation: "Yo lo explico.",
          },
          {
            segments: [{ text: "誰", ruby: "だれ" }, { text: "が" }, { text: "行", ruby: "い" }, { text: "きますか？" }],
            translation: "¿Quién va?",
          },
          {
            segments: [{ text: "木村", ruby: "きむら" }, { text: "さん" }, { text: "が" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Kimura va.",
          },
          {
            segments: [{ text: "どの" }, { text: "電車", ruby: "でんしゃ" }, { text: "が" }, { text: "東京", ruby: "とうきょう" }, { text: "行", ruby: "い" }, { text: "き" }, { text: "ですか？" }],
            translation: "¿Cuál tren va a Tokio?",
          },
          {
            segments: [{ text: "この" }, { text: "電車", ruby: "でんしゃ" }, { text: "が" }, { text: "東京", ruby: "とうきょう" }, { text: "行", ruby: "い" }, { text: "き" }, { text: "です。" }],
            translation: "Este tren va a Tokio.",
          },
          {
            segments: [{ text: "誰", ruby: "だれ" }, { text: "が" }, { text: "作", ruby: "つく" }, { text: "りましたか？" }],
            translation: "¿Quién lo hizo?",
          },
          {
            segments: [{ text: "母", ruby: "はは" }, { text: "が" }, { text: "作", ruby: "つく" }, { text: "りました。" }],
            translation: "Lo hizo mi madre.",
          },
          {
            segments: [{ text: "どの" }, { text: "人", ruby: "ひと" }, { text: "が" }, { text: "日本人", ruby: "にほんじん" }, { text: "ですか？" }],
            translation: "¿Cuál persona es japonesa?",
          },
          {
            segments: [{ text: "あの" }, { text: "女", ruby: "おんな" }, { text: "の" }, { text: "人", ruby: "ひと" }, { text: "が" }, { text: "日本人", ruby: "にほんじん" }, { text: "です。" }],
            translation: "Esa mujer es japonesa.",
          },
          {
            segments: [{ text: "何", ruby: "なに" }, { text: "が" }, { text: "一番", ruby: "いちばん" }, { text: "大切", ruby: "たいせつ" }, { text: "ですか？" }],
            translation: "¿Qué es lo más importante?",
          },
          {
            segments: [{ text: "健康", ruby: "けんこう" }, { text: "が" }, { text: "一番", ruby: "いちばん" }, { text: "大切", ruby: "たいせつ" }, { text: "です。" }],
            translation: "La salud es lo más importante.",
          },
          {
            segments: [{ text: "どれ" }, { text: "が" }, { text: "あなた" }, { text: "の" }, { text: "席", ruby: "せき" }, { text: "ですか？" }],
            translation: "¿Cuál es tu asiento?",
          },
          {
            segments: [{ text: "その" }, { text: "窓側", ruby: "まどがわ" }, { text: "の" }, { text: "席", ruby: "せき" }, { text: "が" }, { text: "私", ruby: "わたし" }, { text: "の" }, { text: "席", ruby: "せき" }, { text: "です。" }],
            translation: "Ese asiento junto a la ventana es mi asiento.",
          },
          {
            segments: [{ text: "誰", ruby: "だれ" }, { text: "が" }, { text: "この" }, { text: "写真", ruby: "しゃしん" }, { text: "を" }, { text: "撮", ruby: "と" }, { text: "りましたか？" }],
            translation: "¿Quién tomó esta foto?",
          },
          {
            segments: [{ text: "兄", ruby: "あに" }, { text: "が" }, { text: "この" }, { text: "写真", ruby: "しゃしん" }, { text: "を" }, { text: "撮", ruby: "と" }, { text: "りました。" }],
            translation: "Mi hermano mayor tomó esta foto.",
          },
        ],
      },
      {
        title: "Fenómenos, aparición y cambios",
        examples: [
          {
            segments: [{ text: "雨", ruby: "あめ" }, { text: "が" }, { text: "降", ruby: "ふ" }, { text: "っています。" }],
            translation: "Está lloviendo.",
          },
          {
            segments: [{ text: "雪", ruby: "ゆき" }, { text: "が" }, { text: "降", ruby: "ふ" }, { text: "りました。" }],
            translation: "Nevó.",
          },
          {
            segments: [{ text: "風", ruby: "かぜ" }, { text: "が" }, { text: "強", ruby: "つよ" }, { text: "いです。" }],
            translation: "Hace mucho viento.",
          },
          {
            segments: [{ text: "ドア" }, { text: "が" }, { text: "開", ruby: "あ" }, { text: "きました。" }],
            translation: "La puerta se abrió.",
          },
          {
            segments: [{ text: "電気", ruby: "でんき" }, { text: "が" }, { text: "消", ruby: "き" }, { text: "えました。" }],
            translation: "La luz se apagó.",
          },
          {
            segments: [{ text: "太陽", ruby: "たいよう" }, { text: "が" }, { text: "出", ruby: "で" }, { text: "ました。" }],
            translation: "Salió el sol.",
          },
          {
            segments: [{ text: "月", ruby: "つき" }, { text: "が" }, { text: "見", ruby: "み" }, { text: "えます。" }],
            translation: "Se ve la luna.",
          },
          {
            segments: [{ text: "星", ruby: "ほし" }, { text: "が" }, { text: "見", ruby: "み" }, { text: "えます。" }],
            translation: "Se ven las estrellas.",
          },
          {
            segments: [{ text: "虹", ruby: "にじ" }, { text: "が" }, { text: "出", ruby: "で" }, { text: "ました。" }],
            translation: "Salió un arcoíris.",
          },
          {
            segments: [{ text: "雲", ruby: "くも" }, { text: "が" }, { text: "増", ruby: "ふ" }, { text: "えてきました。" }],
            translation: "Empezaron a aumentar las nubes.",
          },
          {
            segments: [{ text: "霧", ruby: "きり" }, { text: "が" }, { text: "出", ruby: "で" }, { text: "ています。" }],
            translation: "Hay neblina.",
          },
          {
            segments: [{ text: "波", ruby: "なみ" }, { text: "が" }, { text: "高", ruby: "たか" }, { text: "いです。" }],
            translation: "Las olas están altas.",
          },
          {
            segments: [{ text: "雷", ruby: "かみなり" }, { text: "が" }, { text: "鳴", ruby: "な" }, { text: "っています。" }],
            translation: "Está tronando.",
          },
          {
            segments: [{ text: "音", ruby: "おと" }, { text: "が" }, { text: "聞", ruby: "き" }, { text: "こえます。" }],
            translation: "Se oye un sonido.",
          },
          {
            segments: [{ text: "声", ruby: "こえ" }, { text: "が" }, { text: "聞", ruby: "き" }, { text: "こえました。" }],
            translation: "Se escuchó una voz.",
          },
          {
            segments: [{ text: "猫", ruby: "ねこ" }, { text: "が" }, { text: "来", ruby: "き" }, { text: "ました。" }],
            translation: "Llegó un gato.",
          },
          {
            segments: [{ text: "子", ruby: "こ" }, { text: "ども" }, { text: "が" }, { text: "集", ruby: "あつ" }, { text: "まってきました。" }],
            translation: "Los niños empezaron a reunirse.",
          },
          {
            segments: [{ text: "バス" }, { text: "が" }, { text: "来", ruby: "き" }, { text: "ました。" }],
            translation: "Llegó el autobús.",
          },
          {
            segments: [{ text: "先生", ruby: "せんせい" }, { text: "が" }, { text: "見", ruby: "み" }, { text: "えました。" }],
            translation: "Se vio al profesor.",
          },
          {
            segments: [{ text: "赤", ruby: "あか" }, { text: "ちゃん" }, { text: "が" }, { text: "生", ruby: "う" }, { text: "まれました。" }],
            translation: "Nació un bebé.",
          },
          {
            segments: [{ text: "火事", ruby: "かじ" }, { text: "が" }, { text: "起", ruby: "お" }, { text: "きました。" }],
            translation: "Ocurrió un incendio.",
          },
          {
            segments: [{ text: "事故", ruby: "じこ" }, { text: "が" }, { text: "起", ruby: "お" }, { text: "きました。" }],
            translation: "Ocurrió un accidente.",
          },
          {
            segments: [{ text: "問題", ruby: "もんだい" }, { text: "が" }, { text: "起", ruby: "お" }, { text: "きました。" }],
            translation: "Surgió un problema.",
          },
          {
            segments: [{ text: "水", ruby: "みず" }, { text: "が" }, { text: "熱", ruby: "あつ" }, { text: "くなりました。" }],
            translation: "El agua se calentó.",
          },
          {
            segments: [{ text: "気温", ruby: "きおん" }, { text: "が" }, { text: "下", ruby: "さ" }, { text: "がりました。" }],
            translation: "La temperatura bajó.",
          },
          {
            segments: [{ text: "気温", ruby: "きおん" }, { text: "が" }, { text: "上", ruby: "あ" }, { text: "がりました。" }],
            translation: "La temperatura subió.",
          },
          {
            segments: [{ text: "信号", ruby: "しんごう" }, { text: "が" }, { text: "青", ruby: "あお" }, { text: "になりました。" }],
            translation: "El semáforo se puso verde.",
          },
          {
            segments: [{ text: "葉", ruby: "は" }, { text: "が" }, { text: "落", ruby: "お" }, { text: "ちました。" }],
            translation: "Las hojas cayeron.",
          },
          {
            segments: [{ text: "花", ruby: "はな" }, { text: "が" }, { text: "咲", ruby: "さ" }, { text: "きました。" }],
            translation: "Las flores florecieron.",
          },
          {
            segments: [{ text: "道", ruby: "みち" }, { text: "が" }, { text: "込", ruby: "こ" }, { text: "んでいます。" }],
            translation: "La calle está congestionada.",
          },
        ],
      },
      {
        title: "Existencia o presencia",
        examples: [
          {
            segments: [{ text: "猫", ruby: "ねこ" }, { text: "が" }, { text: "います。" }],
            translation: "Hay un gato.",
          },
          {
            segments: [{ text: "机", ruby: "つくえ" }, { text: "の" }, { text: "上", ruby: "うえ" }, { text: "に" }, { text: "本", ruby: "ほん" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay un libro sobre el escritorio.",
          },
          {
            segments: [{ text: "問題", ruby: "もんだい" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay un problema.",
          },
          {
            segments: [{ text: "公園", ruby: "こうえん" }, { text: "に" }, { text: "子", ruby: "こ" }, { text: "ども" }, { text: "が" }, { text: "います。" }],
            translation: "Hay niños en el parque.",
          },
          {
            segments: [{ text: "駅", ruby: "えき" }, { text: "の" }, { text: "近", ruby: "ちか" }, { text: "く" }, { text: "に" }, { text: "コンビニ" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay una tienda de conveniencia cerca de la estación.",
          },
          {
            segments: [{ text: "部屋", ruby: "へや" }, { text: "に" }, { text: "犬", ruby: "いぬ" }, { text: "が" }, { text: "います。" }],
            translation: "Hay un perro en la habitación.",
          },
          {
            segments: [{ text: "庭", ruby: "にわ" }, { text: "に" }, { text: "木", ruby: "き" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay un árbol en el jardín.",
          },
          {
            segments: [{ text: "教室", ruby: "きょうしつ" }, { text: "に" }, { text: "先生", ruby: "せんせい" }, { text: "が" }, { text: "います。" }],
            translation: "Hay un profesor en el aula.",
          },
          {
            segments: [{ text: "かばん" }, { text: "の" }, { text: "中", ruby: "なか" }, { text: "に" }, { text: "財布", ruby: "さいふ" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay una billetera dentro del bolso.",
          },
          {
            segments: [{ text: "冷蔵庫", ruby: "れいぞうこ" }, { text: "に" }, { text: "牛乳", ruby: "ぎゅうにゅう" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay leche en el refrigerador.",
          },
          {
            segments: [{ text: "あそこ" }, { text: "に" }, { text: "田中", ruby: "たなか" }, { text: "さん" }, { text: "が" }, { text: "います。" }],
            translation: "Allá está Tanaka.",
          },
          {
            segments: [{ text: "机", ruby: "つくえ" }, { text: "の" }, { text: "下", ruby: "した" }, { text: "に" }, { text: "ねこ" }, { text: "が" }, { text: "います。" }],
            translation: "Hay un gato debajo del escritorio.",
          },
          {
            segments: [{ text: "台所", ruby: "だいどころ" }, { text: "に" }, { text: "母", ruby: "はは" }, { text: "が" }, { text: "います。" }],
            translation: "Mi madre está en la cocina.",
          },
          {
            segments: [{ text: "箱", ruby: "はこ" }, { text: "の" }, { text: "中", ruby: "なか" }, { text: "に" }, { text: "何", ruby: "なに" }, { text: "が" }, { text: "ありますか？" }],
            translation: "¿Qué hay dentro de la caja?",
          },
          {
            segments: [{ text: "テーブル" }, { text: "の" }, { text: "上", ruby: "うえ" }, { text: "に" }, { text: "りんご" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay una manzana sobre la mesa.",
          },
          {
            segments: [{ text: "店", ruby: "みせ" }, { text: "の" }, { text: "前", ruby: "まえ" }, { text: "に" }, { text: "人", ruby: "ひと" }, { text: "が" }, { text: "たくさん" }, { text: "います。" }],
            translation: "Hay mucha gente frente a la tienda.",
          },
          {
            segments: [{ text: "山", ruby: "やま" }, { text: "の" }, { text: "上", ruby: "うえ" }, { text: "に" }, { text: "お" }, { text: "寺", ruby: "てら" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay un templo en la cima de la montaña.",
          },
          {
            segments: [{ text: "川", ruby: "かわ" }, { text: "に" }, { text: "魚", ruby: "さかな" }, { text: "が" }, { text: "います。" }],
            translation: "Hay peces en el río.",
          },
          {
            segments: [{ text: "受付", ruby: "うけつけ" }, { text: "に" }, { text: "だれ" }, { text: "が" }, { text: "いますか？" }],
            translation: "¿Quién está en recepción?",
          },
          {
            segments: [{ text: "会社", ruby: "かいしゃ" }, { text: "の" }, { text: "近", ruby: "ちか" }, { text: "く" }, { text: "に" }, { text: "銀行", ruby: "ぎんこう" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay un banco cerca de la empresa.",
          },
          {
            segments: [{ text: "公園", ruby: "こうえん" }, { text: "に" }, { text: "大", ruby: "おお" }, { text: "きい" }, { text: "木", ruby: "き" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay un árbol grande en el parque.",
          },
          {
            segments: [{ text: "うち" }, { text: "に" }, { text: "妹", ruby: "いもうと" }, { text: "が" }, { text: "います。" }],
            translation: "Tengo una hermana menor.",
          },
          {
            segments: [{ text: "この" }, { text: "町", ruby: "まち" }, { text: "に" }, { text: "古", ruby: "ふる" }, { text: "い" }, { text: "お" }, { text: "城", ruby: "しろ" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay un castillo antiguo en esta ciudad.",
          },
          {
            segments: [{ text: "学校", ruby: "がっこう" }, { text: "に" }, { text: "新", ruby: "あたら" }, { text: "しい" }, { text: "学生", ruby: "がくせい" }, { text: "が" }, { text: "います。" }],
            translation: "Hay estudiantes nuevos en la escuela.",
          },
          {
            segments: [{ text: "壁", ruby: "かべ" }, { text: "に" }, { text: "時", ruby: "と" }, { text: "計", ruby: "けい" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay un reloj en la pared.",
          },
          {
            segments: [{ text: "駅", ruby: "えき" }, { text: "に" }, { text: "タクシー" }, { text: "が" }, { text: "います。" }],
            translation: "Hay taxis en la estación.",
          },
          {
            segments: [{ text: "この" }, { text: "道", ruby: "みち" }, { text: "の" }, { text: "先", ruby: "さき" }, { text: "に" }, { text: "橋", ruby: "はし" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay un puente más adelante en este camino.",
          },
          {
            segments: [{ text: "窓", ruby: "まど" }, { text: "の" }, { text: "そば" }, { text: "に" }, { text: "いす" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay una silla junto a la ventana.",
          },
          {
            segments: [{ text: "向", ruby: "む" }, { text: "こう" }, { text: "の" }, { text: "席", ruby: "せき" }, { text: "に" }, { text: "女", ruby: "おんな" }, { text: "の" }, { text: "人", ruby: "ひと" }, { text: "が" }, { text: "います。" }],
            translation: "Hay una mujer en el asiento de enfrente.",
          },
          {
            segments: [{ text: "この" }, { text: "ビル" }, { text: "の" }, { text: "一階", ruby: "いっかい" }, { text: "に" }, { text: "カフェ" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay una cafetería en el primer piso de este edificio.",
          },
        ],
      },
      {
        title: "Parte, cualidad o capacidad dentro de un todo",
        examples: [
          {
            segments: [{ text: "私", ruby: "わたし" }, { text: "は" }, { text: "犬", ruby: "いぬ" }, { text: "が" }, { text: "好", ruby: "す" }, { text: "きです。" }],
            translation: "Me gustan los perros.",
          },
          {
            segments: [{ text: "私", ruby: "わたし" }, { text: "は" }, { text: "寿司", ruby: "すし" }, { text: "が" }, { text: "好", ruby: "す" }, { text: "きです。" }],
            translation: "Me gusta el sushi.",
          },
          {
            segments: [{ text: "彼", ruby: "かれ" }, { text: "は" }, { text: "ピアノ" }, { text: "が" }, { text: "弾", ruby: "ひ" }, { text: "けます。" }],
            translation: "Él sabe tocar el piano.",
          },
          {
            segments: [{ text: "日本語", ruby: "にほんご" }, { text: "が" }, { text: "少", ruby: "すこ" }, { text: "し" }, { text: "分", ruby: "わ" }, { text: "かります。" }],
            translation: "Entiendo un poco de japonés.",
          },
          {
            segments: [{ text: "姉", ruby: "あね" }, { text: "は" }, { text: "歌", ruby: "うた" }, { text: "が" }, { text: "上手", ruby: "じょうず" }, { text: "です。" }],
            translation: "Mi hermana mayor canta bien.",
          },
          {
            segments: [{ text: "私", ruby: "わたし" }, { text: "は" }, { text: "数学", ruby: "すうがく" }, { text: "が" }, { text: "苦手", ruby: "にがて" }, { text: "です。" }],
            translation: "Las matemáticas no se me dan bien.",
          },
          {
            segments: [{ text: "弟", ruby: "おとうと" }, { text: "は" }, { text: "野球", ruby: "やきゅう" }, { text: "が" }, { text: "上手", ruby: "じょうず" }, { text: "です。" }],
            translation: "Mi hermano menor juega béisbol bien.",
          },
          {
            segments: [{ text: "父", ruby: "ちち" }, { text: "は" }, { text: "料理", ruby: "りょうり" }, { text: "が" }, { text: "下手", ruby: "へた" }, { text: "です。" }],
            translation: "Mi padre cocina mal.",
          },
          {
            segments: [{ text: "彼女", ruby: "かのじょ" }, { text: "は" }, { text: "英語", ruby: "えいご" }, { text: "が" }, { text: "分", ruby: "わ" }, { text: "かります。" }],
            translation: "Ella entiende inglés.",
          },
          {
            segments: [{ text: "私", ruby: "わたし" }, { text: "は" }, { text: "ひらがな" }, { text: "が" }, { text: "読", ruby: "よ" }, { text: "めます。" }],
            translation: "Puedo leer hiragana.",
          },
          {
            segments: [{ text: "彼", ruby: "かれ" }, { text: "は" }, { text: "漢字", ruby: "かんじ" }, { text: "が" }, { text: "書", ruby: "か" }, { text: "けます。" }],
            translation: "Él puede escribir kanji.",
          },
          {
            segments: [{ text: "母", ruby: "はは" }, { text: "は" }, { text: "車", ruby: "くるま" }, { text: "の" }, { text: "運転", ruby: "うんてん" }, { text: "が" }, { text: "できます。" }],
            translation: "Mi madre sabe conducir.",
          },
          {
            segments: [{ text: "私", ruby: "わたし" }, { text: "は" }, { text: "泳", ruby: "およ" }, { text: "ぐ" }, { text: "こと" }, { text: "が" }, { text: "できます。" }],
            translation: "Sé nadar.",
          },
          {
            segments: [{ text: "先生", ruby: "せんせい" }, { text: "は" }, { text: "中国語", ruby: "ちゅうごくご" }, { text: "が" }, { text: "話", ruby: "はな" }, { text: "せます。" }],
            translation: "El profesor puede hablar chino.",
          },
          {
            segments: [{ text: "私", ruby: "わたし" }, { text: "は" }, { text: "この" }, { text: "文", ruby: "ぶん" }, { text: "の" }, { text: "意味", ruby: "いみ" }, { text: "が" }, { text: "分", ruby: "わ" }, { text: "かります。" }],
            translation: "Entiendo el significado de esta oración.",
          },
          {
            segments: [{ text: "子", ruby: "こ" }, { text: "ども" }, { text: "は" }, { text: "手", ruby: "て" }, { text: "が" }, { text: "小", ruby: "ちい" }, { text: "さいです。" }],
            translation: "Los niños tienen las manos pequeñas.",
          },
          {
            segments: [{ text: "父", ruby: "ちち" }, { text: "は" }, { text: "目", ruby: "め" }, { text: "が" }, { text: "悪", ruby: "わる" }, { text: "いです。" }],
            translation: "Mi padre tiene mala vista.",
          },
          {
            segments: [{ text: "母", ruby: "はは" }, { text: "は" }, { text: "髪", ruby: "かみ" }, { text: "が" }, { text: "長", ruby: "なが" }, { text: "いです。" }],
            translation: "Mi madre tiene el pelo largo.",
          },
          {
            segments: [{ text: "彼", ruby: "かれ" }, { text: "は" }, { text: "足", ruby: "あし" }, { text: "が" }, { text: "速", ruby: "はや" }, { text: "いです。" }],
            translation: "Él corre rápido.",
          },
          {
            segments: [{ text: "私", ruby: "わたし" }, { text: "は" }, { text: "頭", ruby: "あたま" }, { text: "が" }, { text: "痛", ruby: "いた" }, { text: "いです。" }],
            translation: "Me duele la cabeza.",
          },
          {
            segments: [{ text: "妹", ruby: "いもうと" }, { text: "は" }, { text: "耳", ruby: "みみ" }, { text: "が" }, { text: "いいです。" }],
            translation: "Mi hermana menor tiene buen oído.",
          },
          {
            segments: [{ text: "祖父", ruby: "そふ" }, { text: "は" }, { text: "声", ruby: "こえ" }, { text: "が" }, { text: "大", ruby: "おお" }, { text: "きいです。" }],
            translation: "Mi abuelo tiene la voz fuerte.",
          },
          {
            segments: [{ text: "この" }, { text: "犬", ruby: "いぬ" }, { text: "は" }, { text: "目", ruby: "め" }, { text: "が" }, { text: "大", ruby: "おお" }, { text: "きいです。" }],
            translation: "Este perro tiene los ojos grandes.",
          },
          {
            segments: [{ text: "彼女", ruby: "かのじょ" }, { text: "は" }, { text: "背", ruby: "せ" }, { text: "が" }, { text: "高", ruby: "たか" }, { text: "いです。" }],
            translation: "Ella es alta.",
          },
          {
            segments: [{ text: "私", ruby: "わたし" }, { text: "は" }, { text: "辛", ruby: "から" }, { text: "い" }, { text: "物", ruby: "もの" }, { text: "が" }, { text: "食", ruby: "た" }, { text: "べられます。" }],
            translation: "Puedo comer comida picante.",
          },
          {
            segments: [{ text: "弟", ruby: "おとうと" }, { text: "は" }, { text: "ピアノ" }, { text: "が" }, { text: "上手", ruby: "じょうず" }, { text: "です。" }],
            translation: "Mi hermano menor toca bien el piano.",
          },
          {
            segments: [{ text: "私", ruby: "わたし" }, { text: "は" }, { text: "その" }, { text: "気持", ruby: "きも" }, { text: "ち" }, { text: "が" }, { text: "分", ruby: "わ" }, { text: "かります。" }],
            translation: "Entiendo ese sentimiento.",
          },
          {
            segments: [{ text: "彼女", ruby: "かのじょ" }, { text: "は" }, { text: "日本", ruby: "にほん" }, { text: "の" }, { text: "文化", ruby: "ぶんか" }, { text: "が" }, { text: "好", ruby: "す" }, { text: "きです。" }],
            translation: "A ella le gusta la cultura japonesa.",
          },
          {
            segments: [{ text: "兄", ruby: "あに" }, { text: "は" }, { text: "絵", ruby: "え" }, { text: "が" }, { text: "上手", ruby: "じょうず" }, { text: "です。" }],
            translation: "Mi hermano mayor dibuja bien.",
          },
          {
            segments: [{ text: "私", ruby: "わたし" }, { text: "は" }, { text: "納豆", ruby: "なっとう" }, { text: "が" }, { text: "食", ruby: "た" }, { text: "べられません。" }],
            translation: "No puedo comer natto.",
          },
        ],
      },
    ],
  },

  // ─── を (wo) ───────────────────────────────────────────────────────────────
  {
    particle: "を (wo)",
    symbol: "を",
    romaji: "wo",
    summary: "Indica el objeto directo de la acción. También se usa con recorridos, trayectos y puntos de salida o abandono.",
    uses: [
      {
        title: "Objeto directo de la acción",
        examples: [
          {
            segments: [{ text: "本", ruby: "ほん" }, { text: "を" }, { text: "読", ruby: "よ" }, { text: "みます。" }],
            translation: "Leo un libro.",
          },
          {
            segments: [{ text: "音楽", ruby: "おんがく" }, { text: "を" }, { text: "聞", ruby: "き" }, { text: "きます。" }],
            translation: "Escucho música.",
          },
          {
            segments: [{ text: "映画", ruby: "えいが" }, { text: "を" }, { text: "見", ruby: "み" }, { text: "ます。" }],
            translation: "Veo una película.",
          },
          {
            segments: [{ text: "水", ruby: "みず" }, { text: "を" }, { text: "飲", ruby: "の" }, { text: "みます。" }],
            translation: "Bebo agua.",
          },
          {
            segments: [{ text: "宿題", ruby: "しゅくだい" }, { text: "を" }, { text: "します。" }],
            translation: "Hago la tarea.",
          },
          {
            segments: [{ text: "朝", ruby: "あさ" }, { text: "ご" }, { text: "飯", ruby: "はん" }, { text: "を" }, { text: "食", ruby: "た" }, { text: "べます。" }],
            translation: "Desayuno.",
          },
          {
            segments: [{ text: "手紙", ruby: "てがみ" }, { text: "を" }, { text: "書", ruby: "か" }, { text: "きます。" }],
            translation: "Escribo una carta.",
          },
          {
            segments: [{ text: "写真", ruby: "しゃしん" }, { text: "を" }, { text: "撮", ruby: "と" }, { text: "ります。" }],
            translation: "Tomo una foto.",
          },
          {
            segments: [{ text: "日本語", ruby: "にほんご" }, { text: "を" }, { text: "勉強", ruby: "べんきょう" }, { text: "します。" }],
            translation: "Estudio japonés.",
          },
          {
            segments: [{ text: "パン" }, { text: "を" }, { text: "買", ruby: "か" }, { text: "います。" }],
            translation: "Compro pan.",
          },
          {
            segments: [{ text: "コーヒー" }, { text: "を" }, { text: "飲", ruby: "の" }, { text: "みます。" }],
            translation: "Tomo café.",
          },
          {
            segments: [{ text: "テレビ" }, { text: "を" }, { text: "見", ruby: "み" }, { text: "ます。" }],
            translation: "Veo televisión.",
          },
          {
            segments: [{ text: "ドア" }, { text: "を" }, { text: "開", ruby: "あ" }, { text: "けます。" }],
            translation: "Abro la puerta.",
          },
          {
            segments: [{ text: "窓", ruby: "まど" }, { text: "を" }, { text: "閉", ruby: "し" }, { text: "めます。" }],
            translation: "Cierro la ventana.",
          },
          {
            segments: [{ text: "部屋", ruby: "へや" }, { text: "を" }, { text: "掃除", ruby: "そうじ" }, { text: "します。" }],
            translation: "Limpio la habitación.",
          },
          {
            segments: [{ text: "車", ruby: "くるま" }, { text: "を" }, { text: "洗", ruby: "あら" }, { text: "います。" }],
            translation: "Lavo el auto.",
          },
          {
            segments: [{ text: "服", ruby: "ふく" }, { text: "を" }, { text: "洗", ruby: "あら" }, { text: "います。" }],
            translation: "Lavo la ropa.",
          },
          {
            segments: [{ text: "りんご" }, { text: "を" }, { text: "食", ruby: "た" }, { text: "べます。" }],
            translation: "Como una manzana.",
          },
          {
            segments: [{ text: "野菜", ruby: "やさい" }, { text: "を" }, { text: "切", ruby: "き" }, { text: "ります。" }],
            translation: "Corto verduras.",
          },
          {
            segments: [{ text: "晩", ruby: "ばん" }, { text: "ご" }, { text: "飯", ruby: "はん" }, { text: "を" }, { text: "作", ruby: "つく" }, { text: "ります。" }],
            translation: "Preparo la cena.",
          },
          {
            segments: [{ text: "ケーキ" }, { text: "を" }, { text: "作", ruby: "つく" }, { text: "ります。" }],
            translation: "Hago un pastel.",
          },
          {
            segments: [{ text: "漢字", ruby: "かんじ" }, { text: "を" }, { text: "覚", ruby: "おぼ" }, { text: "えます。" }],
            translation: "Memorizo kanji.",
          },
          {
            segments: [{ text: "新", ruby: "あたら" }, { text: "しい" }, { text: "言葉", ruby: "ことば" }, { text: "を" }, { text: "習", ruby: "なら" }, { text: "います。" }],
            translation: "Aprendo palabras nuevas.",
          },
          {
            segments: [{ text: "パソコン" }, { text: "を" }, { text: "使", ruby: "つか" }, { text: "います。" }],
            translation: "Uso la computadora.",
          },
          {
            segments: [{ text: "スマホ" }, { text: "を" }, { text: "充電", ruby: "じゅうでん" }, { text: "します。" }],
            translation: "Cargo el celular.",
          },
          {
            segments: [{ text: "電話", ruby: "でんわ" }, { text: "を" }, { text: "かけます。" }],
            translation: "Hago una llamada.",
          },
          {
            segments: [{ text: "メール" }, { text: "を" }, { text: "送", ruby: "おく" }, { text: "ります。" }],
            translation: "Envío un correo.",
          },
          {
            segments: [{ text: "名前", ruby: "なまえ" }, { text: "を" }, { text: "書", ruby: "か" }, { text: "いてください。" }],
            translation: "Por favor, escribe tu nombre.",
          },
          {
            segments: [{ text: "質問", ruby: "しつもん" }, { text: "を" }, { text: "します。" }],
            translation: "Hago una pregunta.",
          },
          {
            segments: [{ text: "歌", ruby: "うた" }, { text: "を" }, { text: "歌", ruby: "うた" }, { text: "います。" }],
            translation: "Canto una canción.",
          },
        ],
      },
      {
        title: "Movimiento a través de un lugar",
        examples: [
          {
            segments: [{ text: "橋", ruby: "はし" }, { text: "を" }, { text: "渡", ruby: "わた" }, { text: "ります。" }],
            translation: "Cruzo el puente.",
          },
          {
            segments: [{ text: "道", ruby: "みち" }, { text: "を" }, { text: "歩", ruby: "ある" }, { text: "きます。" }],
            translation: "Camino por la calle.",
          },
          {
            segments: [{ text: "公園", ruby: "こうえん" }, { text: "を" }, { text: "散歩", ruby: "さんぽ" }, { text: "します。" }],
            translation: "Paseo por el parque.",
          },
          {
            segments: [{ text: "空", ruby: "そら" }, { text: "を" }, { text: "鳥", ruby: "とり" }, { text: "が" }, { text: "飛", ruby: "と" }, { text: "んでいます。" }],
            translation: "Los pájaros vuelan por el cielo.",
          },
          {
            segments: [{ text: "細", ruby: "ほそ" }, { text: "い" }, { text: "道", ruby: "みち" }, { text: "を" }, { text: "通", ruby: "とお" }, { text: "ります。" }],
            translation: "Paso por un camino angosto.",
          },
          {
            segments: [{ text: "川", ruby: "かわ" }, { text: "を" }, { text: "泳", ruby: "およ" }, { text: "ぎます。" }],
            translation: "Nado por el río.",
          },
          {
            segments: [{ text: "森", ruby: "もり" }, { text: "を" }, { text: "歩", ruby: "ある" }, { text: "きました。" }],
            translation: "Caminé por el bosque.",
          },
          {
            segments: [{ text: "トンネル" }, { text: "を" }, { text: "通", ruby: "とお" }, { text: "ります。" }],
            translation: "Paso por el túnel.",
          },
          {
            segments: [{ text: "横断歩道", ruby: "おうだんほどう" }, { text: "を" }, { text: "渡", ruby: "わた" }, { text: "ってください。" }],
            translation: "Por favor, cruce por el paso peatonal.",
          },
          {
            segments: [{ text: "廊下", ruby: "ろうか" }, { text: "を" }, { text: "走", ruby: "はし" }, { text: "らないでください。" }],
            translation: "Por favor, no corra por el pasillo.",
          },
          {
            segments: [{ text: "この" }, { text: "道", ruby: "みち" }, { text: "を" }, { text: "まっすぐ" }, { text: "行", ruby: "い" }, { text: "ってください。" }],
            translation: "Por favor, siga derecho por este camino.",
          },
          {
            segments: [{ text: "山道", ruby: "やまみち" }, { text: "を" }, { text: "ゆっくり" }, { text: "歩", ruby: "ある" }, { text: "きます。" }],
            translation: "Camino despacio por el sendero de montaña.",
          },
          {
            segments: [{ text: "海", ruby: "うみ" }, { text: "の" }, { text: "上", ruby: "うえ" }, { text: "を" }, { text: "飛行機", ruby: "ひこうき" }, { text: "が" }, { text: "飛", ruby: "と" }, { text: "んでいます。" }],
            translation: "Un avión vuela sobre el mar.",
          },
          {
            segments: [{ text: "校庭", ruby: "こうてい" }, { text: "を" }, { text: "子", ruby: "こ" }, { text: "ども" }, { text: "たち" }, { text: "が" }, { text: "走", ruby: "はし" }, { text: "っています。" }],
            translation: "Los niños están corriendo por el patio de la escuela.",
          },
          {
            segments: [{ text: "橋", ruby: "はし" }, { text: "を" }, { text: "歩", ruby: "ある" }, { text: "いて" }, { text: "渡", ruby: "わた" }, { text: "ります。" }],
            translation: "Cruzo el puente caminando.",
          },
          {
            segments: [{ text: "この" }, { text: "坂道", ruby: "さかみち" }, { text: "を" }, { text: "上", ruby: "のぼ" }, { text: "ります。" }],
            translation: "Subo por esta pendiente.",
          },
          {
            segments: [{ text: "階段", ruby: "かいだん" }, { text: "を" }, { text: "上", ruby: "のぼ" }, { text: "ります。" }],
            translation: "Subo por las escaleras.",
          },
          {
            segments: [{ text: "階段", ruby: "かいだん" }, { text: "を" }, { text: "下", ruby: "お" }, { text: "ります。" }],
            translation: "Bajo por las escaleras.",
          },
          {
            segments: [{ text: "角", ruby: "かど" }, { text: "を" }, { text: "右", ruby: "みぎ" }, { text: "に" }, { text: "曲", ruby: "ま" }, { text: "がります。" }],
            translation: "Doblo a la derecha en la esquina.",
          },
          {
            segments: [{ text: "角", ruby: "かど" }, { text: "を" }, { text: "左", ruby: "ひだり" }, { text: "に" }, { text: "曲", ruby: "ま" }, { text: "がります。" }],
            translation: "Doblo a la izquierda en la esquina.",
          },
          {
            segments: [{ text: "庭", ruby: "にわ" }, { text: "を" }, { text: "猫", ruby: "ねこ" }, { text: "が" }, { text: "歩", ruby: "ある" }, { text: "いています。" }],
            translation: "Un gato camina por el jardín.",
          },
          {
            segments: [{ text: "道", ruby: "みち" }, { text: "を" }, { text: "自転車", ruby: "じてんしゃ" }, { text: "で" }, { text: "走", ruby: "はし" }, { text: "ります。" }],
            translation: "Voy en bicicleta por la calle.",
          },
          {
            segments: [{ text: "グラウンド" }, { text: "を" }, { text: "毎朝", ruby: "まいあさ" }, { text: "走", ruby: "はし" }, { text: "ります。" }],
            translation: "Corro por la cancha todas las mañanas.",
          },
          {
            segments: [{ text: "川", ruby: "かわ" }, { text: "の" }, { text: "そば" }, { text: "の" }, { text: "道", ruby: "みち" }, { text: "を" }, { text: "歩", ruby: "ある" }, { text: "きます。" }],
            translation: "Camino por el camino junto al río.",
          },
          {
            segments: [{ text: "広", ruby: "ひろ" }, { text: "い" }, { text: "道", ruby: "みち" }, { text: "を" }, { text: "車", ruby: "くるま" }, { text: "が" }, { text: "走", ruby: "はし" }, { text: "っています。" }],
            translation: "Los autos circulan por una calle ancha.",
          },
          {
            segments: [{ text: "山", ruby: "やま" }, { text: "を" }, { text: "越", ruby: "こ" }, { text: "えて" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy cruzando la montaña.",
          },
          {
            segments: [{ text: "草原", ruby: "そうげん" }, { text: "を" }, { text: "馬", ruby: "うま" }, { text: "が" }, { text: "走", ruby: "はし" }, { text: "っています。" }],
            translation: "Los caballos corren por la pradera.",
          },
          {
            segments: [{ text: "この" }, { text: "橋", ruby: "はし" }, { text: "を" }, { text: "渡", ruby: "わた" }, { text: "る" }, { text: "と" }, { text: "駅", ruby: "えき" }, { text: "です。" }],
            translation: "Si cruzas este puente, llegas a la estación.",
          },
          {
            segments: [{ text: "市場", ruby: "いちば" }, { text: "の" }, { text: "中", ruby: "なか" }, { text: "を" }, { text: "歩", ruby: "ある" }, { text: "く" }, { text: "の" }, { text: "が" }, { text: "好", ruby: "す" }, { text: "きです。" }],
            translation: "Me gusta caminar por dentro del mercado.",
          },
          {
            segments: [{ text: "公園", ruby: "こうえん" }, { text: "を" }, { text: "通", ruby: "とお" }, { text: "って" }, { text: "学校", ruby: "がっこう" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy a la escuela pasando por el parque.",
          },
        ],
      },
      {
        title: "Salir de un lugar o medio de transporte",
        examples: [
          {
            segments: [{ text: "バス" }, { text: "を" }, { text: "降", ruby: "お" }, { text: "ります。" }],
            translation: "Me bajo del autobús.",
          },
          {
            segments: [{ text: "電車", ruby: "でんしゃ" }, { text: "を" }, { text: "降", ruby: "お" }, { text: "ります。" }],
            translation: "Me bajo del tren.",
          },
          {
            segments: [{ text: "家", ruby: "いえ" }, { text: "を" }, { text: "出", ruby: "で" }, { text: "ます。" }],
            translation: "Salgo de casa.",
          },
          {
            segments: [{ text: "大学", ruby: "だいがく" }, { text: "を" }, { text: "卒業", ruby: "そつぎょう" }, { text: "しました。" }],
            translation: "Me gradué de la universidad.",
          },
          {
            segments: [{ text: "席", ruby: "せき" }, { text: "を" }, { text: "立", ruby: "た" }, { text: "ちました。" }],
            translation: "Me levanté del asiento.",
          },
          {
            segments: [{ text: "タクシー" }, { text: "を" }, { text: "降", ruby: "お" }, { text: "りました。" }],
            translation: "Me bajé del taxi.",
          },
          {
            segments: [{ text: "車", ruby: "くるま" }, { text: "を" }, { text: "降", ruby: "お" }, { text: "ります。" }],
            translation: "Me bajo del auto.",
          },
          {
            segments: [{ text: "飛行機", ruby: "ひこうき" }, { text: "を" }, { text: "降", ruby: "お" }, { text: "りました。" }],
            translation: "Me bajé del avión.",
          },
          {
            segments: [{ text: "船", ruby: "ふね" }, { text: "を" }, { text: "降", ruby: "お" }, { text: "ります。" }],
            translation: "Me bajo del barco.",
          },
          {
            segments: [{ text: "新幹線", ruby: "しんかんせん" }, { text: "を" }, { text: "降", ruby: "お" }, { text: "りたら、" }, { text: "電話", ruby: "でんわ" }, { text: "してください。" }],
            translation: "Cuando te bajes del shinkansen, por favor llama.",
          },
          {
            segments: [{ text: "駅", ruby: "えき" }, { text: "で" }, { text: "地下鉄", ruby: "ちかてつ" }, { text: "を" }, { text: "降", ruby: "お" }, { text: "りました。" }],
            translation: "Me bajé del metro en la estación.",
          },
          {
            segments: [{ text: "次", ruby: "つぎ" }, { text: "の" }, { text: "駅", ruby: "えき" }, { text: "で" }, { text: "電車", ruby: "でんしゃ" }, { text: "を" }, { text: "降", ruby: "お" }, { text: "りてください。" }],
            translation: "Por favor, bájate del tren en la próxima estación.",
          },
          {
            segments: [{ text: "部屋", ruby: "へや" }, { text: "を" }, { text: "出", ruby: "で" }, { text: "ます。" }],
            translation: "Salgo de la habitación.",
          },
          {
            segments: [{ text: "教室", ruby: "きょうしつ" }, { text: "を" }, { text: "出", ruby: "で" }, { text: "ました。" }],
            translation: "Salí del aula.",
          },
          {
            segments: [{ text: "会議室", ruby: "かいぎしつ" }, { text: "を" }, { text: "出", ruby: "で" }, { text: "た" }, { text: "あとで、" }, { text: "部長", ruby: "ぶちょう" }, { text: "に" }, { text: "会", ruby: "あ" }, { text: "いました。" }],
            translation: "Después de salir de la sala de reuniones, me encontré con el jefe de departamento.",
          },
          {
            segments: [{ text: "ホテル" }, { text: "を" }, { text: "出", ruby: "で" }, { text: "て、" }, { text: "駅", ruby: "えき" }, { text: "へ" }, { text: "向", ruby: "む" }, { text: "かいました。" }],
            translation: "Salí del hotel y fui hacia la estación.",
          },
          {
            segments: [{ text: "うち" }, { text: "を" }, { text: "出", ruby: "で" }, { text: "る" }, { text: "の" }, { text: "は" }, { text: "七時", ruby: "しちじ" }, { text: "です。" }],
            translation: "Salgo de casa a las siete.",
          },
          {
            segments: [{ text: "会社", ruby: "かいしゃ" }, { text: "を" }, { text: "出", ruby: "で" }, { text: "る" }, { text: "の" }, { text: "は" }, { text: "六時", ruby: "ろくじ" }, { text: "ごろ" }, { text: "です。" }],
            translation: "Salgo de la empresa como a las seis.",
          },
          {
            segments: [{ text: "店", ruby: "みせ" }, { text: "を" }, { text: "出", ruby: "で" }, { text: "た" }, { text: "ところ" }, { text: "です。" }],
            translation: "Justo acabo de salir de la tienda.",
          },
          {
            segments: [{ text: "建物", ruby: "たてもの" }, { text: "を" }, { text: "出", ruby: "で" }, { text: "る" }, { text: "と、" }, { text: "雨", ruby: "あめ" }, { text: "が" }, { text: "降", ruby: "ふ" }, { text: "っていました。" }],
            translation: "Al salir del edificio, estaba lloviendo.",
          },
          {
            segments: [{ text: "図書館", ruby: "としょかん" }, { text: "を" }, { text: "出", ruby: "で" }, { text: "て、" }, { text: "昼", ruby: "ひる" }, { text: "ご" }, { text: "飯", ruby: "はん" }, { text: "を" }, { text: "食", ruby: "た" }, { text: "べました。" }],
            translation: "Salí de la biblioteca y almorcé.",
          },
          {
            segments: [{ text: "ベッド" }, { text: "を" }, { text: "出", ruby: "で" }, { text: "て、" }, { text: "顔", ruby: "かお" }, { text: "を" }, { text: "洗", ruby: "あら" }, { text: "いました。" }],
            translation: "Salí de la cama y me lavé la cara.",
          },
          {
            segments: [{ text: "高校", ruby: "こうこう" }, { text: "を" }, { text: "卒業", ruby: "そつぎょう" }, { text: "しました。" }],
            translation: "Me gradué de la secundaria.",
          },
          {
            segments: [{ text: "専門学校", ruby: "せんもんがっこう" }, { text: "を" }, { text: "卒業", ruby: "そつぎょう" }, { text: "した" }, { text: "あとで、" }, { text: "働", ruby: "はたら" }, { text: "き" }, { text: "始", ruby: "はじ" }, { text: "めました。" }],
            translation: "Después de graduarme del instituto técnico, empecé a trabajar.",
          },
          {
            segments: [{ text: "大学院", ruby: "だいがくいん" }, { text: "を" }, { text: "卒業", ruby: "そつぎょう" }, { text: "して、" }, { text: "研究者", ruby: "けんきゅうしゃ" }, { text: "になりました。" }],
            translation: "Me gradué del posgrado y me convertí en investigador.",
          },
          {
            segments: [{ text: "ソファー" }, { text: "を" }, { text: "立", ruby: "た" }, { text: "って、" }, { text: "窓", ruby: "まど" }, { text: "を" }, { text: "開", ruby: "あ" }, { text: "けました。" }],
            translation: "Me levanté del sofá y abrí la ventana.",
          },
          {
            segments: [{ text: "自分", ruby: "じぶん" }, { text: "の" }, { text: "席", ruby: "せき" }, { text: "を" }, { text: "立", ruby: "た" }, { text: "って、" }, { text: "先生", ruby: "せんせい" }, { text: "の" }, { text: "ところ" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きました。" }],
            translation: "Me levanté de mi asiento y fui donde el profesor.",
          },
          {
            segments: [{ text: "グループ" }, { text: "を" }, { text: "離", ruby: "はな" }, { text: "れないでください。" }],
            translation: "Por favor, no te separes del grupo.",
          },
          {
            segments: [{ text: "その" }, { text: "場", ruby: "ば" }, { text: "を" }, { text: "離", ruby: "はな" }, { text: "れてください。" }],
            translation: "Por favor, aléjese de ese lugar.",
          },
          {
            segments: [{ text: "会社", ruby: "かいしゃ" }, { text: "を" }, { text: "辞", ruby: "や" }, { text: "めました。" }],
            translation: "Dejé la empresa.",
          },
        ],
      },
    ],
  },

  // ─── に (ni) ───────────────────────────────────────────────────────────────
  {
    particle: "に (ni)",
    symbol: "に",
    romaji: "ni",
    summary: "Indica destino, ubicación, tiempo específico, receptor, propósito o resultado, según la estructura y el verbo.",
    uses: [
      {
        title: "Ubicación de existencia",
        examples: [
          {
            segments: [{ text: "猫", ruby: "ねこ" }, { text: "が" }, { text: "部屋", ruby: "へや" }, { text: "に" }, { text: "います。" }],
            translation: "El gato está en la habitación.",
          },
          {
            segments: [{ text: "先生", ruby: "せんせい" }, { text: "は" }, { text: "教室", ruby: "きょうしつ" }, { text: "に" }, { text: "います。" }],
            translation: "El profesor está en el aula.",
          },
          {
            segments: [{ text: "机", ruby: "つくえ" }, { text: "の" }, { text: "上", ruby: "うえ" }, { text: "に" }, { text: "本", ruby: "ほん" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay un libro sobre el escritorio.",
          },
          {
            segments: [{ text: "冷蔵庫", ruby: "れいぞうこ" }, { text: "に" }, { text: "牛乳", ruby: "ぎゅうにゅう" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay leche en el refrigerador.",
          },
          {
            segments: [{ text: "駅", ruby: "えき" }, { text: "の" }, { text: "近", ruby: "ちか" }, { text: "く" }, { text: "に" }, { text: "コンビニ" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay una tienda de conveniencia cerca de la estación.",
          },
          {
            segments: [{ text: "庭", ruby: "にわ" }, { text: "に" }, { text: "犬", ruby: "いぬ" }, { text: "が" }, { text: "います。" }],
            translation: "Hay un perro en el jardín.",
          },
          {
            segments: [{ text: "いす" }, { text: "の" }, { text: "下", ruby: "した" }, { text: "に" }, { text: "かばん" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay un bolso debajo de la silla.",
          },
          {
            segments: [{ text: "箱", ruby: "はこ" }, { text: "の" }, { text: "中", ruby: "なか" }, { text: "に" }, { text: "手紙", ruby: "てがみ" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay una carta dentro de la caja.",
          },
          {
            segments: [{ text: "学校", ruby: "がっこう" }, { text: "の" }, { text: "前", ruby: "まえ" }, { text: "に" }, { text: "バス" }, { text: "が" }, { text: "あります" }],
            translation: "Hay un autobús frente a la escuela.",
          },
          {
            segments: [{ text: "壁", ruby: "かべ" }, { text: "に" }, { text: "時", ruby: "と" }, { text: "計", ruby: "けい" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay un reloj en la pared.",
          },
          {
            segments: [{ text: "机", ruby: "つくえ" }, { text: "の" }, { text: "横", ruby: "よこ" }, { text: "に" }, { text: "いす" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay una silla al lado del escritorio.",
          },
          {
            segments: [{ text: "台所", ruby: "だいどころ" }, { text: "に" }, { text: "母", ruby: "はは" }, { text: "が" }, { text: "います。" }],
            translation: "Mi madre está en la cocina.",
          },
          {
            segments: [{ text: "廊下", ruby: "ろうか" }, { text: "に" }, { text: "だれ" }, { text: "も" }, { text: "いません。" }],
            translation: "No hay nadie en el pasillo.",
          },
          {
            segments: [{ text: "教室", ruby: "きょうしつ" }, { text: "に" }, { text: "学生", ruby: "がくせい" }, { text: "が" }, { text: "たくさん" }, { text: "います。" }],
            translation: "Hay muchos estudiantes en el aula.",
          },
          {
            segments: [{ text: "玄関", ruby: "げんかん" }, { text: "に" }, { text: "靴", ruby: "くつ" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay zapatos en la entrada.",
          },
          {
            segments: [{ text: "棚", ruby: "たな" }, { text: "の" }, { text: "上", ruby: "うえ" }, { text: "に" }, { text: "写真", ruby: "しゃしん" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay una foto sobre el estante.",
          },
          {
            segments: [{ text: "公園", ruby: "こうえん" }, { text: "の" }, { text: "ベンチ" }, { text: "に" }, { text: "おじいさん" }, { text: "が" }, { text: "います。" }],
            translation: "Hay un señor mayor en la banca del parque.",
          },
          {
            segments: [{ text: "池", ruby: "いけ" }, { text: "に" }, { text: "魚", ruby: "さかな" }, { text: "が" }, { text: "います。" }],
            translation: "Hay peces en el estanque.",
          },
          {
            segments: [{ text: "かばん" }, { text: "の" }, { text: "中", ruby: "なか" }, { text: "に" }, { text: "ペン" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay un lápiz dentro del bolso.",
          },
          {
            segments: [{ text: "会社", ruby: "かいしゃ" }, { text: "に" }, { text: "部長", ruby: "ぶちょう" }, { text: "が" }, { text: "います。" }],
            translation: "El jefe de departamento está en la empresa.",
          },
          {
            segments: [{ text: "ベッド" }, { text: "の" }, { text: "上", ruby: "うえ" }, { text: "に" }, { text: "スマホ" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay un celular sobre la cama.",
          },
          {
            segments: [{ text: "机", ruby: "つくえ" }, { text: "の" }, { text: "引", ruby: "ひ" }, { text: "き" }, { text: "出", ruby: "だ" }, { text: "し" }, { text: "に" }, { text: "はさみ" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay unas tijeras en el cajón del escritorio.",
          },
          {
            segments: [{ text: "窓", ruby: "まど" }, { text: "の" }, { text: "そば" }, { text: "に" }, { text: "花", ruby: "はな" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay flores junto a la ventana.",
          },
          {
            segments: [{ text: "図書館", ruby: "としょかん" }, { text: "に" }, { text: "新", ruby: "あたら" }, { text: "しい" }, { text: "本", ruby: "ほん" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay libros nuevos en la biblioteca.",
          },
          {
            segments: [{ text: "山", ruby: "やま" }, { text: "の" }, { text: "上", ruby: "うえ" }, { text: "に" }, { text: "雪", ruby: "ゆき" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay nieve sobre la montaña.",
          },
          {
            segments: [{ text: "町", ruby: "まち" }, { text: "の" }, { text: "中", ruby: "なか" }, { text: "に" }, { text: "大", ruby: "おお" }, { text: "きい" }, { text: "川", ruby: "かわ" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay un río grande en la ciudad.",
          },
          {
            segments: [{ text: "受付", ruby: "うけつけ" }, { text: "に" }, { text: "人", ruby: "ひと" }, { text: "が" }, { text: "います。" }],
            translation: "Hay una persona en recepción.",
          },
          {
            segments: [{ text: "机", ruby: "つくえ" }, { text: "の" }, { text: "前", ruby: "まえ" }, { text: "に" }, { text: "先生", ruby: "せんせい" }, { text: "が" }, { text: "います。" }],
            translation: "El profesor está delante del escritorio.",
          },
          {
            segments: [{ text: "この" }, { text: "ビル" }, { text: "の" }, { text: "一階", ruby: "いっかい" }, { text: "に" }, { text: "カフェ" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay una cafetería en el primer piso de este edificio.",
          },
          {
            segments: [{ text: "町", ruby: "まち" }, { text: "の" }, { text: "外", ruby: "はず" }, { text: "れ" }, { text: "に" }, { text: "工場", ruby: "こうじょう" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay una fábrica en las afueras de la ciudad.",
          },
        ],
      },
      {
        title: "Lugar de destino para verbos de movimiento (行く・来る・帰る)",
        examples: [
          {
            segments: [{ text: "学校", ruby: "がっこう" }, { text: "に" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy a la escuela.",
          },
          {
            segments: [{ text: "家", ruby: "いえ" }, { text: "に" }, { text: "帰", ruby: "かえ" }, { text: "ります。" }],
            translation: "Regreso a casa.",
          },
          {
            segments: [{ text: "日本", ruby: "にほん" }, { text: "に" }, { text: "来", ruby: "き" }, { text: "ました。" }],
            translation: "Vine a Japón.",
          },
          {
            segments: [{ text: "会社", ruby: "かいしゃ" }, { text: "に" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy a la empresa.",
          },
          {
            segments: [{ text: "図書館", ruby: "としょかん" }, { text: "に" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy a la biblioteca.",
          },
          {
            segments: [{ text: "公園", ruby: "こうえん" }, { text: "に" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy al parque.",
          },
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "の" }, { text: "家", ruby: "いえ" }, { text: "に" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy a la casa de mi amigo.",
          },
          {
            segments: [{ text: "東京", ruby: "とうきょう" }, { text: "に" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy a Tokio.",
          },
          {
            segments: [{ text: "病院", ruby: "びょういん" }, { text: "に" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy al hospital.",
          },
          {
            segments: [{ text: "スーパー" }, { text: "に" }, { text: "行", ruby: "い" }, { text: "きました。" }],
            translation: "Fui al supermercado.",
          },
          {
            segments: [{ text: "銀行", ruby: "ぎんこう" }, { text: "に" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy al banco.",
          },
          {
            segments: [{ text: "駅", ruby: "えき" }, { text: "に" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy a la estación.",
          },
          {
            segments: [{ text: "レストラン" }, { text: "に" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy al restaurante.",
          },
          {
            segments: [{ text: "コンビニ" }, { text: "に" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy a la tienda de conveniencia.",
          },
          {
            segments: [{ text: "教室", ruby: "きょうしつ" }, { text: "に" }, { text: "来", ruby: "き" }, { text: "てください。" }],
            translation: "Por favor, venga al aula.",
          },
          {
            segments: [{ text: "こちら" }, { text: "に" }, { text: "来", ruby: "き" }, { text: "てください。" }],
            translation: "Por favor, venga aquí.",
          },
          {
            segments: [{ text: "会議室", ruby: "かいぎしつ" }, { text: "に" }, { text: "来", ruby: "き" }, { text: "ました。" }],
            translation: "Vine a la sala de reuniones.",
          },
          {
            segments: [{ text: "うち" }, { text: "に" }, { text: "帰", ruby: "かえ" }, { text: "ります。" }],
            translation: "Regreso a casa.",
          },
          {
            segments: [{ text: "国", ruby: "くに" }, { text: "に" }, { text: "帰", ruby: "かえ" }, { text: "ります。" }],
            translation: "Regreso a mi país.",
          },
          {
            segments: [{ text: "ホテル" }, { text: "に" }, { text: "帰", ruby: "かえ" }, { text: "りました。" }],
            translation: "Regresé al hotel.",
          },
          {
            segments: [{ text: "大阪", ruby: "おおさか" }, { text: "に" }, { text: "行", ruby: "い" }, { text: "きました。" }],
            translation: "Fui a Osaka.",
          },
          {
            segments: [{ text: "京都", ruby: "きょうと" }, { text: "に" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy a Kioto.",
          },
          {
            segments: [{ text: "部屋", ruby: "へや" }, { text: "に" }, { text: "来", ruby: "き" }, { text: "てください。" }],
            translation: "Por favor, venga a la habitación.",
          },
          {
            segments: [{ text: "日本", ruby: "にほん" }, { text: "に" }, { text: "来", ruby: "き" }, { text: "て" }, { text: "三年", ruby: "さんねん" }, { text: "です。" }],
            translation: "Han pasado tres años desde que vine a Japón.",
          },
          {
            segments: [{ text: "学校", ruby: "がっこう" }, { text: "に" }, { text: "来", ruby: "き" }, { text: "ました。" }],
            translation: "Vine a la escuela.",
          },
          {
            segments: [{ text: "駅", ruby: "えき" }, { text: "に" }, { text: "来", ruby: "き" }, { text: "ました。" }],
            translation: "Vine a la estación.",
          },
          {
            segments: [{ text: "家", ruby: "いえ" }, { text: "に" }, { text: "帰", ruby: "かえ" }, { text: "ってから、" }, { text: "勉強", ruby: "べんきょう" }, { text: "します。" }],
            translation: "Después de regresar a casa, estudio.",
          },
          {
            segments: [{ text: "国", ruby: "くに" }, { text: "に" }, { text: "帰", ruby: "かえ" }, { text: "って" }, { text: "家族", ruby: "かぞく" }, { text: "に" }, { text: "会", ruby: "あ" }, { text: "いたいです。" }],
            translation: "Quiero volver a mi país y ver a mi familia.",
          },
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "が" }, { text: "うち" }, { text: "に" }, { text: "来", ruby: "き" }, { text: "ます。" }],
            translation: "Mi amigo viene a mi casa.",
          },
          {
            segments: [{ text: "来年", ruby: "らいねん" }, { text: "日本", ruby: "にほん" }, { text: "に" }, { text: "来", ruby: "き" }, { text: "ます。" }],
            translation: "El próximo año vendré a Japón.",
          },
        ],
      },
      {
        title: "Tiempo específico en el que ocurre una acción",
        examples: [
          {
            segments: [{ text: "午前", ruby: "ごぜん" }, { text: "８時", ruby: "はちじ" }, { text: "に" }, { text: "起", ruby: "お" }, { text: "きます。" }],
            translation: "Me levanto a las 8 de la mañana.",
          },
          {
            segments: [{ text: "日曜日", ruby: "にちようび" }, { text: "に" }, { text: "公園", ruby: "こうえん" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy al parque el domingo.",
          },
          {
            segments: [{ text: "３月", ruby: "さんがつ" }, { text: "に" }, { text: "卒業", ruby: "そつぎょう" }, { text: "しました。" }],
            translation: "Me gradué en marzo.",
          },
          {
            segments: [{ text: "10時", ruby: "じゅうじ" }, { text: "に" }, { text: "会議", ruby: "かいぎ" }, { text: "が" }, { text: "始", ruby: "はじ" }, { text: "まります。" }],
            translation: "La reunión empieza a las 10.",
          },
          {
            segments: [{ text: "誕生日", ruby: "たんじょうび" }, { text: "に" }, { text: "プレゼント" }, { text: "を" }, { text: "もらいました。" }],
            translation: "Recibí un regalo en mi cumpleaños.",
          },
          {
            segments: [{ text: "７時", ruby: "しちじ" }, { text: "に" }, { text: "朝", ruby: "あさ" }, { text: "ご" }, { text: "飯", ruby: "はん" }, { text: "を" }, { text: "食", ruby: "た" }, { text: "べます。" }],
            translation: "Desayuno a las 7.",
          },
          {
            segments: [{ text: "６時半", ruby: "ろくじはん" }, { text: "に" }, { text: "うち" }, { text: "を" }, { text: "出", ruby: "で" }, { text: "ます。" }],
            translation: "Salgo de casa a las 6:30.",
          },
          {
            segments: [{ text: "９時", ruby: "くじ" }, { text: "に" }, { text: "学校", ruby: "がっこう" }, { text: "が" }, { text: "始", ruby: "はじ" }, { text: "まります。" }],
            translation: "La escuela empieza a las 9.",
          },
          {
            segments: [{ text: "12時", ruby: "じゅうにじ" }, { text: "に" }, { text: "昼", ruby: "ひる" }, { text: "ご" }, { text: "飯", ruby: "はん" }, { text: "を" }, { text: "食", ruby: "た" }, { text: "べます。" }],
            translation: "Almuerzo a las 12.",
          },
          {
            segments: [{ text: "午後", ruby: "ごご" }, { text: "３時", ruby: "さんじ" }, { text: "に" }, { text: "友達", ruby: "ともだち" }, { text: "に" }, { text: "会", ruby: "あ" }, { text: "います。" }],
            translation: "Me encuentro con un amigo a las 3 de la tarde.",
          },
          {
            segments: [{ text: "５時", ruby: "ごじ" }, { text: "に" }, { text: "仕事", ruby: "しごと" }, { text: "が" }, { text: "終", ruby: "お" }, { text: "わります。" }],
            translation: "El trabajo termina a las 5.",
          },
          {
            segments: [{ text: "11時", ruby: "じゅういちじ" }, { text: "に" }, { text: "寝", ruby: "ね" }, { text: "ます。" }],
            translation: "Me acuesto a las 11.",
          },
          {
            segments: [{ text: "月曜日", ruby: "げつようび" }, { text: "に" }, { text: "日本語", ruby: "にほんご" }, { text: "の" }, { text: "授業", ruby: "じゅぎょう" }, { text: "が" }, { text: "あります。" }],
            translation: "El lunes hay clase de japonés.",
          },
          {
            segments: [{ text: "金曜日", ruby: "きんようび" }, { text: "に" }, { text: "テスト" }, { text: "があります。" }],
            translation: "El viernes hay una prueba.",
          },
          {
            segments: [{ text: "土曜日", ruby: "どようび" }, { text: "に" }, { text: "映画", ruby: "えいが" }, { text: "を" }, { text: "見", ruby: "み" }, { text: "ます。" }],
            translation: "El sábado veo una película.",
          },
          {
            segments: [{ text: "来週", ruby: "らいしゅう" }, { text: "の" }, { text: "火曜日", ruby: "かようび" }, { text: "に" }, { text: "病院", ruby: "びょういん" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "El próximo martes voy al hospital.",
          },
          {
            segments: [{ text: "先週", ruby: "せんしゅう" }, { text: "の" }, { text: "木曜日", ruby: "もくようび" }, { text: "に" }, { text: "買", ruby: "か" }, { text: "い" }, { text: "物", ruby: "もの" }, { text: "を" }, { text: "しました。" }],
            translation: "El jueves pasado hice compras.",
          },
          {
            segments: [{ text: "４月", ruby: "しがつ" }, { text: "に" }, { text: "日本", ruby: "にほん" }, { text: "へ" }, { text: "来", ruby: "き" }, { text: "ました。" }],
            translation: "Vine a Japón en abril.",
          },
          {
            segments: [{ text: "８月", ruby: "はちがつ" }, { text: "に" }, { text: "旅行", ruby: "りょこう" }, { text: "します。" }],
            translation: "Viajo en agosto.",
          },
          {
            segments: [{ text: "12月", ruby: "じゅうにがつ" }, { text: "に" }, { text: "雪", ruby: "ゆき" }, { text: "が" }, { text: "降", ruby: "ふ" }, { text: "りました。" }],
            translation: "Nevó en diciembre.",
          },
          {
            segments: [{ text: "１日", ruby: "ついたち" }, { text: "に" }, { text: "給料", ruby: "きゅうりょう" }, { text: "が" }, { text: "入", ruby: "はい" }, { text: "ります。" }],
            translation: "El sueldo entra el día 1.",
          },
          {
            segments: [{ text: "15日", ruby: "じゅうごにち" }, { text: "に" }, { text: "支払", ruby: "しはら" }, { text: "います。" }],
            translation: "Pago el día 15.",
          },
          {
            segments: [{ text: "24日", ruby: "にじゅうよっか" }, { text: "に" }, { text: "パーティー" }, { text: "を" }, { text: "します。" }],
            translation: "Hacemos una fiesta el día 24.",
          },
          {
            segments: [{ text: "元日", ruby: "がんじつ" }, { text: "に" }, { text: "家族", ruby: "かぞく" }, { text: "と" }, { text: "お" }, { text: "寺", ruby: "てら" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "El día de Año Nuevo voy al templo con mi familia.",
          },
          {
            segments: [{ text: "夏休", ruby: "なつやす" }, { text: "み" }, { text: "に" }, { text: "国", ruby: "くに" }, { text: "へ" }, { text: "帰", ruby: "かえ" }, { text: "りました。" }],
            translation: "Volví a mi país en las vacaciones de verano.",
          },
          {
            segments: [{ text: "冬休", ruby: "ふゆやす" }, { text: "み" }, { text: "に" }, { text: "スキー" }, { text: "を" }, { text: "しました。" }],
            translation: "Esquié en las vacaciones de invierno.",
          },
          {
            segments: [{ text: "子", ruby: "こ" }, { text: "ども" }, { text: "の" }, { text: "日", ruby: "ひ" }, { text: "に" }, { text: "お" }, { text: "祝い", ruby: "いわ" }, { text: "を" }, { text: "しました。" }],
            translation: "Celebramos el Día del Niño.",
          },
          {
            segments: [{ text: "試験", ruby: "しけん" }, { text: "の" }, { text: "日", ruby: "ひ" }, { text: "に" }, { text: "早", ruby: "はや" }, { text: "く" }, { text: "起", ruby: "お" }, { text: "きました。" }],
            translation: "El día del examen me levanté temprano.",
          },
          {
            segments: [{ text: "結婚式", ruby: "けっこんしき" }, { text: "に" }, { text: "きれいな" }, { text: "服", ruby: "ふく" }, { text: "を" }, { text: "着", ruby: "き" }, { text: "ました。" }],
            translation: "Me puse ropa elegante en la boda.",
          },
          {
            segments: [{ text: "来年", ruby: "らいねん" }, { text: "の" }, { text: "４月", ruby: "しがつ" }, { text: "に" }, { text: "大学", ruby: "だいがく" }, { text: "に" }, { text: "入", ruby: "はい" }, { text: "ります。" }],
            translation: "Entraré a la universidad en abril del próximo año.",
          },
        ],
      },
      {
        title: "Receptor de una acción",
        examples: [
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "に" }, { text: "手紙", ruby: "てがみ" }, { text: "を" }, { text: "書", ruby: "か" }, { text: "きます。" }],
            translation: "Escribo una carta a mi amigo.",
          },
          {
            segments: [{ text: "弟", ruby: "おとうと" }, { text: "に" }, { text: "本", ruby: "ほん" }, { text: "を" }, { text: "貸", ruby: "か" }, { text: "しました。" }],
            translation: "Le presté un libro a mi hermano menor.",
          },
          {
            segments: [{ text: "母", ruby: "はは" }, { text: "に" }, { text: "電話", ruby: "でんわ" }, { text: "します。" }],
            translation: "Llamo a mi madre.",
          },
          {
            segments: [{ text: "先生", ruby: "せんせい" }, { text: "に" }, { text: "質問", ruby: "しつもん" }, { text: "しました。" }],
            translation: "Le hice una pregunta al profesor.",
          },
          {
            segments: [{ text: "お" }, { text: "客", ruby: "きゃく" }, { text: "様", ruby: "さま" }, { text: "に" }, { text: "メール" }, { text: "を" }, { text: "送", ruby: "おく" }, { text: "りました。" }],
            translation: "Le envié un correo al cliente.",
          },
          {
            segments: [{ text: "父", ruby: "ちち" }, { text: "に" }, { text: "プレゼント" }, { text: "を" }, { text: "あげました。" }],
            translation: "Le di un regalo a mi padre.",
          },
          {
            segments: [{ text: "妹", ruby: "いもうと" }, { text: "に" }, { text: "お" }, { text: "金", ruby: "かね" }, { text: "を" }, { text: "あげました。" }],
            translation: "Le di dinero a mi hermana menor.",
          },
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "に" }, { text: "写真", ruby: "しゃしん" }, { text: "を" }, { text: "見", ruby: "み" }, { text: "せました。" }],
            translation: "Le mostré una foto a mi amigo.",
          },
          {
            segments: [{ text: "先生", ruby: "せんせい" }, { text: "に" }, { text: "作文", ruby: "さくぶん" }, { text: "を" }, { text: "見", ruby: "み" }, { text: "せました。" }],
            translation: "Le mostré mi redacción al profesor.",
          },
          {
            segments: [{ text: "母", ruby: "はは" }, { text: "に" }, { text: "花", ruby: "はな" }, { text: "を" }, { text: "渡", ruby: "わた" }, { text: "しました。" }],
            translation: "Le entregué flores a mi madre.",
          },
          {
            segments: [{ text: "彼", ruby: "かれ" }, { text: "に" }, { text: "かぎ" }, { text: "を" }, { text: "渡", ruby: "わた" }, { text: "しました。" }],
            translation: "Le entregué la llave a él.",
          },
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "に" }, { text: "日本語", ruby: "にほんご" }, { text: "を" }, { text: "教", ruby: "おし" }, { text: "えます。" }],
            translation: "Le enseño japonés a mi amigo.",
          },
          {
            segments: [{ text: "子", ruby: "こ" }, { text: "ども" }, { text: "に" }, { text: "ひらがな" }, { text: "を" }, { text: "教", ruby: "おし" }, { text: "えます。" }],
            translation: "Le enseño hiragana al niño.",
          },
          {
            segments: [{ text: "後輩", ruby: "こうはい" }, { text: "に" }, { text: "仕事", ruby: "しごと" }, { text: "を" }, { text: "教", ruby: "おし" }, { text: "えました。" }],
            translation: "Le enseñé el trabajo a mi compañero menor.",
          },
          {
            segments: [{ text: "弟", ruby: "おとうと" }, { text: "に" }, { text: "ゲーム" }, { text: "を" }, { text: "買", ruby: "か" }, { text: "ってあげました。" }],
            translation: "Le compré un videojuego a mi hermano menor.",
          },
          {
            segments: [{ text: "母", ruby: "はは" }, { text: "に" }, { text: "荷物", ruby: "にもつ" }, { text: "を" }, { text: "送", ruby: "おく" }, { text: "りました。" }],
            translation: "Le envié un paquete a mi madre.",
          },
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "に" }, { text: "メッセージ" }, { text: "を" }, { text: "送", ruby: "おく" }, { text: "りました。" }],
            translation: "Le envié un mensaje a mi amigo.",
          },
          {
            segments: [{ text: "部長", ruby: "ぶちょう" }, { text: "に" }, { text: "報告書", ruby: "ほうこくしょ" }, { text: "を" }, { text: "出", ruby: "だ" }, { text: "しました。" }],
            translation: "Le entregué el informe al jefe de departamento.",
          },
          {
            segments: [{ text: "先生", ruby: "せんせい" }, { text: "に" }, { text: "宿題", ruby: "しゅくだい" }, { text: "を" }, { text: "出", ruby: "だ" }, { text: "しました。" }],
            translation: "Le entregué la tarea al profesor.",
          },
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "に" }, { text: "本", ruby: "ほん" }, { text: "を" }, { text: "返", ruby: "かえ" }, { text: "しました。" }],
            translation: "Le devolví el libro a mi amigo.",
          },
          {
            segments: [{ text: "店員", ruby: "てんいん" }, { text: "に" }, { text: "お" }, { text: "金", ruby: "かね" }, { text: "を" }, { text: "払", ruby: "はら" }, { text: "いました。" }],
            translation: "Le pagué al dependiente.",
          },
          {
            segments: [{ text: "医者", ruby: "いしゃ" }, { text: "に" }, { text: "名前", ruby: "なまえ" }, { text: "を" }, { text: "伝", ruby: "つた" }, { text: "えました。" }],
            translation: "Le di mi nombre al médico.",
          },
          {
            segments: [{ text: "父", ruby: "ちち" }, { text: "に" }, { text: "その" }, { text: "話", ruby: "はなし" }, { text: "を" }, { text: "伝", ruby: "つた" }, { text: "えました。" }],
            translation: "Le conté eso a mi padre.",
          },
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "に" }, { text: "新", ruby: "あたら" }, { text: "しい" }, { text: "店", ruby: "みせ" }, { text: "を" }, { text: "紹介", ruby: "しょうかい" }, { text: "しました。" }],
            translation: "Le recomendé una tienda nueva a mi amigo.",
          },
          {
            segments: [{ text: "私", ruby: "わたし" }, { text: "は" }, { text: "先生", ruby: "せんせい" }, { text: "に" }, { text: "日本", ruby: "にほん" }, { text: "の" }, { text: "文化", ruby: "ぶんか" }, { text: "を" }, { text: "教", ruby: "おし" }, { text: "わりました。" }],
            translation: "Aprendí cultura japonesa con el profesor.",
          },
          {
            segments: [{ text: "彼", ruby: "かれ" }, { text: "に" }, { text: "道", ruby: "みち" }, { text: "を" }, { text: "聞", ruby: "き" }, { text: "きました。" }],
            translation: "Le pregunté el camino a él.",
          },
          {
            segments: [{ text: "駅員", ruby: "えきいん" }, { text: "に" }, { text: "時間", ruby: "じかん" }, { text: "を" }, { text: "聞", ruby: "き" }, { text: "きました。" }],
            translation: "Le pregunté la hora al empleado de la estación.",
          },
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "に" }, { text: "手伝", ruby: "てつだ" }, { text: "ってもらいました。" }],
            translation: "Recibí ayuda de mi amigo.",
          },
          {
            segments: [{ text: "先輩", ruby: "せんぱい" }, { text: "に" }, { text: "資料", ruby: "しりょう" }, { text: "を" }, { text: "作", ruby: "つく" }, { text: "ってもらいました。" }],
            translation: "Le pedí a mi compañero mayor que me preparara los materiales.",
          },
          {
            segments: [{ text: "母", ruby: "はは" }, { text: "に" }, { text: "駅", ruby: "えき" }, { text: "まで" }, { text: "送", ruby: "おく" }, { text: "ってもらいました。" }],
            translation: "Le pedí a mi madre que me llevara hasta la estación.",
          },
        ],
      },
      {
        title: "Propósito o finalidad",
        examples: [
          {
            segments: [{ text: "本", ruby: "ほん" }, { text: "を" }, { text: "買", ruby: "か" }, { text: "い" }, { text: "に" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy a comprar un libro.",
          },
          {
            segments: [{ text: "昼", ruby: "ひる" }, { text: "ご" }, { text: "飯", ruby: "はん" }, { text: "を" }, { text: "食", ruby: "た" }, { text: "べ" }, { text: "に" }, { text: "出", ruby: "で" }, { text: "かけました。" }],
            translation: "Salí a almorzar.",
          },
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "に" }, { text: "会", ruby: "あ" }, { text: "い" }, { text: "に" }, { text: "駅", ruby: "えき" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy a la estación para encontrarme con un amigo.",
          },
          {
            segments: [{ text: "写真", ruby: "しゃしん" }, { text: "を" }, { text: "撮", ruby: "と" }, { text: "り" }, { text: "に" }, { text: "行", ruby: "い" }, { text: "きたいです。" }],
            translation: "Quiero ir a sacar fotos.",
          },
          {
            segments: [{ text: "勉強", ruby: "べんきょう" }, { text: "し" }, { text: "に" }, { text: "図書館", ruby: "としょかん" }, { text: "へ" }, { text: "来", ruby: "き" }, { text: "ました。" }],
            translation: "Vine a la biblioteca a estudiar.",
          },
          {
            segments: [{ text: "買", ruby: "か" }, { text: "い" }, { text: "物", ruby: "もの" }, { text: "し" }, { text: "に" }, { text: "スーパー" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy al supermercado a hacer compras.",
          },
          {
            segments: [{ text: "映画", ruby: "えいが" }, { text: "を" }, { text: "見", ruby: "み" }, { text: "に" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy a ver una película.",
          },
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "と" }, { text: "話", ruby: "はな" }, { text: "し" }, { text: "に" }, { text: "カフェ" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy a una cafetería a conversar con un amigo.",
          },
          {
            segments: [{ text: "水", ruby: "みず" }, { text: "を" }, { text: "買", ruby: "か" }, { text: "い" }, { text: "に" }, { text: "コンビニ" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きました。" }],
            translation: "Fui a la tienda de conveniencia a comprar agua.",
          },
          {
            segments: [{ text: "日本語", ruby: "にほんご" }, { text: "を" }, { text: "習", ruby: "なら" }, { text: "い" }, { text: "に" }, { text: "学校", ruby: "がっこう" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy a la escuela a aprender japonés.",
          },
          {
            segments: [{ text: "働", ruby: "はたら" }, { text: "き" }, { text: "に" }, { text: "日本", ruby: "にほん" }, { text: "へ" }, { text: "来", ruby: "き" }, { text: "ました。" }],
            translation: "Vine a Japón a trabajar.",
          },
          {
            segments: [{ text: "遊", ruby: "あそ" }, { text: "び" }, { text: "に" }, { text: "公園", ruby: "こうえん" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy al parque a jugar.",
          },
          {
            segments: [{ text: "泳", ruby: "およ" }, { text: "ぎ" }, { text: "に" }, { text: "プール" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy a la piscina a nadar.",
          },
          {
            segments: [{ text: "走", ruby: "はし" }, { text: "り" }, { text: "に" }, { text: "公園", ruby: "こうえん" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy al parque a correr.",
          },
          {
            segments: [{ text: "迎", ruby: "むか" }, { text: "え" }, { text: "に" }, { text: "駅", ruby: "えき" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy a la estación a recoger a alguien.",
          },
          {
            segments: [{ text: "先生", ruby: "せんせい" }, { text: "に" }, { text: "聞", ruby: "き" }, { text: "き" }, { text: "に" }, { text: "職員室", ruby: "しょくいんしつ" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きました。" }],
            translation: "Fui a la sala de profesores a preguntarle al profesor.",
          },
          {
            segments: [{ text: "お" }, { text: "金", ruby: "かね" }, { text: "を" }, { text: "下", ruby: "お" }, { text: "ろし" }, { text: "に" }, { text: "銀行", ruby: "ぎんこう" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy al banco a sacar dinero.",
          },
          {
            segments: [{ text: "薬", ruby: "くすり" }, { text: "を" }, { text: "もらい" }, { text: "に" }, { text: "病院", ruby: "びょういん" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きました。" }],
            translation: "Fui al hospital a buscar medicina.",
          },
          {
            segments: [{ text: "昼", ruby: "ひる" }, { text: "ご" }, { text: "飯", ruby: "はん" }, { text: "を" }, { text: "食", ruby: "た" }, { text: "べ" }, { text: "に" }, { text: "レストラン" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy al restaurante a almorzar.",
          },
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "を" }, { text: "見", ruby: "み" }, { text: "送り" }, { text: "に" }, { text: "空港", ruby: "くうこう" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy al aeropuerto a despedir a un amigo.",
          },
          {
            segments: [{ text: "会議", ruby: "かいぎ" }, { text: "に" }, { text: "出", ruby: "で" }, { text: "に" }, { text: "会社", ruby: "かいしゃ" }, { text: "へ" }, { text: "来", ruby: "き" }, { text: "ました。" }],
            translation: "Vine a la empresa para asistir a una reunión.",
          },
          {
            segments: [{ text: "荷物", ruby: "にもつ" }, { text: "を" }, { text: "取", ruby: "と" }, { text: "り" }, { text: "に" }, { text: "うち" }, { text: "へ" }, { text: "帰", ruby: "かえ" }, { text: "ります。" }],
            translation: "Regreso a casa a buscar el equipaje.",
          },
          {
            segments: [{ text: "ご" }, { text: "飯", ruby: "はん" }, { text: "を" }, { text: "作", ruby: "つく" }, { text: "り" }, { text: "に" }, { text: "うち" }, { text: "へ" }, { text: "帰", ruby: "かえ" }, { text: "ります。" }],
            translation: "Regreso a casa a preparar comida.",
          },
          {
            segments: [{ text: "休", ruby: "やす" }, { text: "み" }, { text: "に" }, { text: "海", ruby: "うみ" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy al mar a descansar.",
          },
          {
            segments: [{ text: "桜", ruby: "さくら" }, { text: "を" }, { text: "見", ruby: "み" }, { text: "に" }, { text: "京都", ruby: "きょうと" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きました。" }],
            translation: "Fui a Kioto a ver los cerezos.",
          },
          {
            segments: [{ text: "買", ruby: "か" }, { text: "い" }, { text: "物", ruby: "もの" }, { text: "し" }, { text: "に" }, { text: "町", ruby: "まち" }, { text: "へ" }, { text: "出", ruby: "で" }, { text: "かけます。" }],
            translation: "Salgo al centro a hacer compras.",
          },
          {
            segments: [{ text: "散歩", ruby: "さんぽ" }, { text: "し" }, { text: "に" }, { text: "外", ruby: "そと" }, { text: "へ" }, { text: "出", ruby: "で" }, { text: "かけました。" }],
            translation: "Salí a dar un paseo.",
          },
          {
            segments: [{ text: "練習", ruby: "れんしゅう" }, { text: "し" }, { text: "に" }, { text: "学校", ruby: "がっこう" }, { text: "へ" }, { text: "来", ruby: "き" }, { text: "ました。" }],
            translation: "Vine a la escuela a practicar.",
          },
          {
            segments: [{ text: "働", ruby: "はたら" }, { text: "き" }, { text: "に" }, { text: "東京", ruby: "とうきょう" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy a Tokio a trabajar.",
          },
          {
            segments: [{ text: "本", ruby: "ほん" }, { text: "を" }, { text: "返", ruby: "かえ" }, { text: "し" }, { text: "に" }, { text: "図書館", ruby: "としょかん" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy a la biblioteca a devolver un libro.",
          },
        ],
      },
      {
        title: "Cambio o resultado",
        examples: [
          {
            segments: [{ text: "医者", ruby: "いしゃ" }, { text: "に" }, { text: "なりたいです。" }],
            translation: "Quiero ser médico.",
          },
          {
            segments: [{ text: "信号", ruby: "しんごう" }, { text: "が" }, { text: "青", ruby: "あお" }, { text: "に" }, { text: "なりました。" }],
            translation: "El semáforo se puso verde.",
          },
          {
            segments: [{ text: "部屋", ruby: "へや" }, { text: "を" }, { text: "きれい" }, { text: "に" }, { text: "しました。" }],
            translation: "Dejé la habitación limpia.",
          },
          {
            segments: [{ text: "娘", ruby: "むすめ" }, { text: "は" }, { text: "４月", ruby: "しがつ" }, { text: "に" }, { text: "三歳", ruby: "さんさい" }, { text: "に" }, { text: "なりました。" }],
            translation: "Mi hija cumplió tres años en abril.",
          },
          {
            segments: [{ text: "設定", ruby: "せってい" }, { text: "を" }, { text: "日本語", ruby: "にほんご" }, { text: "に" }, { text: "変", ruby: "か" }, { text: "えました。" }],
            translation: "Cambié la configuración al japonés.",
          },
          {
            segments: [{ text: "将来", ruby: "しょうらい" }, { text: "は" }, { text: "先生", ruby: "せんせい" }, { text: "に" }, { text: "なりたいです。" }],
            translation: "En el futuro quiero ser profesor.",
          },
          {
            segments: [{ text: "兄", ruby: "あに" }, { text: "は" }, { text: "会社員", ruby: "かいしゃいん" }, { text: "に" }, { text: "なりました。" }],
            translation: "Mi hermano mayor se hizo empleado de oficina.",
          },
          {
            segments: [{ text: "彼", ruby: "かれ" }, { text: "は" }, { text: "有名", ruby: "ゆうめい" }, { text: "に" }, { text: "なりました。" }],
            translation: "Él se hizo famoso.",
          },
          {
            segments: [{ text: "日本語", ruby: "にほんご" }, { text: "が" }, { text: "上手", ruby: "じょうず" }, { text: "に" }, { text: "なりました。" }],
            translation: "Mejoré en japonés.",
          },
          {
            segments: [{ text: "静", ruby: "しず" }, { text: "か" }, { text: "に" }, { text: "なりました。" }],
            translation: "Se puso tranquilo.",
          },
          {
            segments: [{ text: "町", ruby: "まち" }, { text: "が" }, { text: "にぎやか" }, { text: "に" }, { text: "なりました。" }],
            translation: "La ciudad se volvió animada.",
          },
          {
            segments: [{ text: "生活", ruby: "せいかつ" }, { text: "が" }, { text: "便利", ruby: "べんり" }, { text: "に" }, { text: "なりました。" }],
            translation: "La vida se volvió más práctica.",
          },
          {
            segments: [{ text: "元気", ruby: "げんき" }, { text: "に" }, { text: "なりました。" }],
            translation: "Mejoré de salud / me puse bien.",
          },
          {
            segments: [{ text: "先生", ruby: "せんせい" }, { text: "に" }, { text: "なりました。" }],
            translation: "Me hice profesor.",
          },
          {
            segments: [{ text: "大人", ruby: "おとな" }, { text: "に" }, { text: "なりました。" }],
            translation: "Me hice adulto.",
          },
          {
            segments: [{ text: "春", ruby: "はる" }, { text: "に" }, { text: "なりました。" }],
            translation: "Llegó la primavera.",
          },
          {
            segments: [{ text: "夜", ruby: "よる" }, { text: "に" }, { text: "なりました。" }],
            translation: "Se hizo de noche.",
          },
          {
            segments: [{ text: "大学生", ruby: "だいがくせい" }, { text: "に" }, { text: "なりました。" }],
            translation: "Me hice universitario.",
          },
          {
            segments: [{ text: "父", ruby: "ちち" }, { text: "は" }, { text: "部長", ruby: "ぶちょう" }, { text: "に" }, { text: "なりました。" }],
            translation: "Mi padre se convirtió en jefe de departamento.",
          },
          {
            segments: [{ text: "この" }, { text: "部屋", ruby: "へや" }, { text: "は" }, { text: "会議室", ruby: "かいぎしつ" }, { text: "に" }, { text: "なりました。" }],
            translation: "Esta habitación pasó a ser una sala de reuniones.",
          },
          {
            segments: [{ text: "テレビ" }, { text: "を" }, { text: "静", ruby: "しず" }, { text: "か" }, { text: "に" }, { text: "しました。" }],
            translation: "Dejé la televisión en silencio.",
          },
          {
            segments: [{ text: "部屋", ruby: "へや" }, { text: "を" }, { text: "賑", ruby: "にぎ" }, { text: "やか" }, { text: "に" }, { text: "しました。" }],
            translation: "Hice que la habitación tuviera más ruido.",
          },
          {
            segments: [{ text: "教室", ruby: "きょうしつ" }, { text: "を" }, { text: "きれい" }, { text: "に" }, { text: "しました。" }],
            translation: "Dejé el aula limpia.",
          },
          {
            segments: [{ text: "問題", ruby: "もんだい" }, { text: "を" }, { text: "簡単", ruby: "かんたん" }, { text: "に" }, { text: "しました。" }],
            translation: "Hice el problema más simple.",
          },
          {
            segments: [{ text: "説明", ruby: "せつめい" }, { text: "を" }, { text: "簡単", ruby: "かんたん" }, { text: "に" }, { text: "しました。" }],
            translation: "Hice la explicación más simple.",
          },
          {
            segments: [{ text: "会議", ruby: "かいぎ" }, { text: "を" }, { text: "３時", ruby: "さんじ" }, { text: "に" }, { text: "しました。" }],
            translation: "Fijé la reunión para las 3.",
          },
          {
            segments: [{ text: "旅行", ruby: "りょこう" }, { text: "は" }, { text: "来週", ruby: "らいしゅう" }, { text: "に" }, { text: "しました。" }],
            translation: "Dejé el viaje para la próxima semana.",
          },
          {
            segments: [{ text: "飲", ruby: "の" }, { text: "み" }, { text: "物", ruby: "もの" }, { text: "は" }, { text: "お" }, { text: "茶", ruby: "ちゃ" }, { text: "に" }, { text: "します。" }],
            translation: "Voy a elegir té como bebida.",
          },
          {
            segments: [{ text: "昼", ruby: "ひる" }, { text: "ご" }, { text: "飯", ruby: "はん" }, { text: "は" }, { text: "カレー" }, { text: "に" }, { text: "しました。" }],
            translation: "Elegí curry para el almuerzo.",
          },
          {
            segments: [{ text: "次", ruby: "つぎ" }, { text: "の" }, { text: "休", ruby: "やす" }, { text: "み" }, { text: "は" }, { text: "京都", ruby: "きょうと" }, { text: "への" }, { text: "旅行", ruby: "りょこう" }, { text: "に" }, { text: "しました。" }],
            translation: "Decidí que las próximas vacaciones sean un viaje a Kioto.",
          },
        ],
      },
      {
        title: "Destino de una acción con verbos mixtos",
        examples: [
          {
            segments: [{ text: "席", ruby: "せき" }, { text: "に" }, { text: "座", ruby: "すわ" }, { text: "ってください。" }],
            translation: "Por favor, siéntese.",
          },
          {
            segments: [{ text: "駅", ruby: "えき" }, { text: "に" }, { text: "着", ruby: "つ" }, { text: "きました。" }],
            translation: "Llegué a la estación.",
          },
          {
            segments: [{ text: "大学", ruby: "だいがく" }, { text: "に" }, { text: "入", ruby: "はい" }, { text: "りました。" }],
            translation: "Entré a la universidad.",
          },
          {
            segments: [{ text: "部屋", ruby: "へや" }, { text: "に" }, { text: "入", ruby: "はい" }, { text: "ってください。" }],
            translation: "Por favor, entre a la habitación.",
          },
          {
            segments: [{ text: "店", ruby: "みせ" }, { text: "に" }, { text: "入", ruby: "はい" }, { text: "りました。" }],
            translation: "Entré a la tienda.",
          },
          {
            segments: [{ text: "エレベーター" }, { text: "に" }, { text: "乗", ruby: "の" }, { text: "ります。" }],
            translation: "Subo al ascensor.",
          },
          {
            segments: [{ text: "新幹線", ruby: "しんかんせん" }, { text: "に" }, { text: "乗", ruby: "の" }, { text: "りました。" }],
            translation: "Subí al shinkansen.",
          },
          {
            segments: [{ text: "前", ruby: "まえ" }, { text: "の" }, { text: "席", ruby: "せき" }, { text: "に" }, { text: "座", ruby: "すわ" }, { text: "ります。" }],
            translation: "Me siento en el asiento de adelante.",
          },
          {
            segments: [{ text: "窓側", ruby: "まどがわ" }, { text: "の" }, { text: "席", ruby: "せき" }, { text: "に" }, { text: "座", ruby: "すわ" }, { text: "りました。" }],
            translation: "Me senté en el asiento junto a la ventana.",
          },
          {
            segments: [{ text: "右", ruby: "みぎ" }, { text: "の" }, { text: "いす" }, { text: "に" }, { text: "座", ruby: "すわ" }, { text: "ってください。" }],
            translation: "Por favor, siéntese en la silla de la derecha.",
          },
          {
            segments: [{ text: "山", ruby: "やま" }, { text: "に" }, { text: "登", ruby: "のぼ" }, { text: "ります。" }],
            translation: "Subo a la montaña.",
          },
          {
            segments: [{ text: "二階", ruby: "にかい" }, { text: "に" }, { text: "上", ruby: "あ" }, { text: "がります。" }],
            translation: "Subo al segundo piso.",
          },
          {
            segments: [{ text: "バス" }, { text: "に" }, { text: "乗", ruby: "の" }, { text: "ります。" }],
            translation: "Subo al autobús.",
          },
          {
            segments: [{ text: "タクシー" }, { text: "に" }, { text: "乗", ruby: "の" }, { text: "りました。" }],
            translation: "Subí al taxi.",
          },
          {
            segments: [{ text: "飛行機", ruby: "ひこうき" }, { text: "に" }, { text: "乗", ruby: "の" }, { text: "ります。" }],
            translation: "Subo al avión.",
          },
          {
            segments: [{ text: "船", ruby: "ふね" }, { text: "に" }, { text: "乗", ruby: "の" }, { text: "りました。" }],
            translation: "Subí al barco.",
          },
          {
            segments: [{ text: "自転車", ruby: "じてんしゃ" }, { text: "に" }, { text: "乗", ruby: "の" }, { text: "ります。" }],
            translation: "Me subo a la bicicleta.",
          },
          {
            segments: [{ text: "温泉", ruby: "おんせん" }, { text: "に" }, { text: "入", ruby: "はい" }, { text: "ります。" }],
            translation: "Entro a las aguas termales.",
          },
          {
            segments: [{ text: "プール" }, { text: "に" }, { text: "入", ruby: "はい" }, { text: "ります。" }],
            translation: "Entro a la piscina.",
          },
          {
            segments: [{ text: "お" }, { text: "風呂", ruby: "ふろ" }, { text: "に" }, { text: "入", ruby: "はい" }, { text: "ります。" }],
            translation: "Entro al baño.",
          },
          {
            segments: [{ text: "ベッド" }, { text: "に" }, { text: "入", ruby: "はい" }, { text: "ります。" }],
            translation: "Me meto en la cama.",
          },
          {
            segments: [{ text: "会場", ruby: "かいじょう" }, { text: "に" }, { text: "着", ruby: "つ" }, { text: "きました。" }],
            translation: "Llegué al lugar del evento.",
          },
          {
            segments: [{ text: "家", ruby: "いえ" }, { text: "に" }, { text: "着", ruby: "つ" }, { text: "きました。" }],
            translation: "Llegué a casa.",
          },
          {
            segments: [{ text: "空港", ruby: "くうこう" }, { text: "に" }, { text: "着", ruby: "つ" }, { text: "きました。" }],
            translation: "Llegué al aeropuerto.",
          },
          {
            segments: [{ text: "ホテル" }, { text: "に" }, { text: "着", ruby: "つ" }, { text: "きました。" }],
            translation: "Llegué al hotel.",
          },
          {
            segments: [{ text: "列", ruby: "れつ" }, { text: "に" }, { text: "並", ruby: "なら" }, { text: "びます。" }],
            translation: "Me pongo en la fila.",
          },
          {
            segments: [{ text: "一番", ruby: "いちばん" }, { text: "前", ruby: "まえ" }, { text: "に" }, { text: "座", ruby: "すわ" }, { text: "ります。" }],
            translation: "Me siento al frente de todo.",
          },
          {
            segments: [{ text: "屋上", ruby: "おくじょう" }, { text: "に" }, { text: "上", ruby: "あ" }, { text: "がります。" }],
            translation: "Subo a la azotea.",
          },
          {
            segments: [{ text: "教室", ruby: "きょうしつ" }, { text: "に" }, { text: "入", ruby: "はい" }, { text: "ったら、" }, { text: "静", ruby: "しず" }, { text: "か" }, { text: "に" }, { text: "してください。" }],
            translation: "Cuando entre al aula, por favor guarde silencio.",
          },
          {
            segments: [{ text: "左", ruby: "ひだり" }, { text: "の" }, { text: "席", ruby: "せき" }, { text: "に" }, { text: "座", ruby: "すわ" }, { text: "ってください。" }],
            translation: "Por favor, siéntese en el asiento de la izquierda.",
          },
        ],
      },
    ],
  },

  // ─── で (de) ───────────────────────────────────────────────────────────────
  {
    particle: "で (de)",
    symbol: "で",
    romaji: "de",
    summary: "Indica el lugar donde ocurre una acción, el medio o herramienta utilizada, el medio de transporte, la causa o un marco cuantitativo.",
    uses: [
      {
        title: "Lugar donde ocurre una acción",
        examples: [
          {
            segments: [{ text: "学校", ruby: "がっこう" }, { text: "で" }, { text: "勉強", ruby: "べんきょう" }, { text: "します。" }],
            translation: "Estudio en la escuela.",
          },
          {
            segments: [{ text: "レストラン" }, { text: "で" }, { text: "食事", ruby: "しょくじ" }, { text: "を" }, { text: "します。" }],
            translation: "Como en un restaurante.",
          },
          {
            segments: [{ text: "図書館", ruby: "としょかん" }, { text: "で" }, { text: "本", ruby: "ほん" }, { text: "を" }, { text: "読", ruby: "よ" }, { text: "みます。" }],
            translation: "Leo libros en la biblioteca.",
          },
          {
            segments: [{ text: "公園", ruby: "こうえん" }, { text: "で" }, { text: "遊", ruby: "あそ" }, { text: "びました。" }],
            translation: "Jugué en el parque.",
          },
          {
            segments: [{ text: "家", ruby: "いえ" }, { text: "で" }, { text: "仕事", ruby: "しごと" }, { text: "を" }, { text: "しています。" }],
            translation: "Estoy trabajando en casa.",
          },
          {
            segments: [{ text: "教室", ruby: "きょうしつ" }, { text: "で" }, { text: "日本語", ruby: "にほんご" }, { text: "を" }, { text: "話", ruby: "はな" }, { text: "します。" }],
            translation: "Hablo japonés en el aula.",
          },
          {
            segments: [{ text: "会社", ruby: "かいしゃ" }, { text: "で" }, { text: "会議", ruby: "かいぎ" }, { text: "を" }, { text: "します。" }],
            translation: "Tengo una reunión en la empresa.",
          },
          {
            segments: [{ text: "台所", ruby: "だいどころ" }, { text: "で" }, { text: "料理", ruby: "りょうり" }, { text: "を" }, { text: "作", ruby: "つく" }, { text: "ります。" }],
            translation: "Cocino en la cocina.",
          },
          {
            segments: [{ text: "店", ruby: "みせ" }, { text: "で" }, { text: "パン" }, { text: "を" }, { text: "買", ruby: "か" }, { text: "います。" }],
            translation: "Compro pan en la tienda.",
          },
          {
            segments: [{ text: "駅", ruby: "えき" }, { text: "で" }, { text: "友達", ruby: "ともだち" }, { text: "を" }, { text: "待", ruby: "ま" }, { text: "ちます。" }],
            translation: "Espero a un amigo en la estación.",
          },
          {
            segments: [{ text: "病院", ruby: "びょういん" }, { text: "で" }, { text: "薬", ruby: "くすり" }, { text: "を" }, { text: "もらいました。" }],
            translation: "Recibí medicina en el hospital.",
          },
          {
            segments: [{ text: "海", ruby: "うみ" }, { text: "で" }, { text: "泳", ruby: "およ" }, { text: "ぎます。" }],
            translation: "Nado en el mar.",
          },
          {
            segments: [{ text: "プール" }, { text: "で" }, { text: "練習", ruby: "れんしゅう" }, { text: "します。" }],
            translation: "Practico en la piscina.",
          },
          {
            segments: [{ text: "喫茶店", ruby: "きっさてん" }, { text: "で" }, { text: "コーヒー" }, { text: "を" }, { text: "飲", ruby: "の" }, { text: "みます。" }],
            translation: "Tomo café en la cafetería.",
          },
          {
            segments: [{ text: "部屋", ruby: "へや" }, { text: "で" }, { text: "音楽", ruby: "おんがく" }, { text: "を" }, { text: "聞", ruby: "き" }, { text: "きます。" }],
            translation: "Escucho música en la habitación.",
          },
          {
            segments: [{ text: "カフェ" }, { text: "で" }, { text: "宿題", ruby: "しゅくだい" }, { text: "を" }, { text: "します。" }],
            translation: "Hago la tarea en una cafetería.",
          },
          {
            segments: [{ text: "体育館", ruby: "たいいくかん" }, { text: "で" }, { text: "バスケットボール" }, { text: "を" }, { text: "します。" }],
            translation: "Juego básquetbol en el gimnasio.",
          },
          {
            segments: [{ text: "博物館", ruby: "はくぶつかん" }, { text: "で" }, { text: "古", ruby: "ふる" }, { text: "い" }, { text: "写真", ruby: "しゃしん" }, { text: "を" }, { text: "見", ruby: "み" }, { text: "ました。" }],
            translation: "Vi fotos antiguas en el museo.",
          },
          {
            segments: [{ text: "会社", ruby: "かいしゃ" }, { text: "で" }, { text: "メール" }, { text: "を" }, { text: "書", ruby: "か" }, { text: "きます。" }],
            translation: "Escribo correos en la empresa.",
          },
          {
            segments: [{ text: "ホテル" }, { text: "で" }, { text: "朝", ruby: "あさ" }, { text: "ご" }, { text: "飯", ruby: "はん" }, { text: "を" }, { text: "食", ruby: "た" }, { text: "べました。" }],
            translation: "Desayuné en el hotel.",
          },
          {
            segments: [{ text: "電車", ruby: "でんしゃ" }, { text: "の" }, { text: "中", ruby: "なか" }, { text: "で" }, { text: "新聞", ruby: "しんぶん" }, { text: "を" }, { text: "読", ruby: "よ" }, { text: "みます。" }],
            translation: "Leo el diario dentro del tren.",
          },
          {
            segments: [{ text: "コンビニ" }, { text: "で" }, { text: "おにぎり" }, { text: "を" }, { text: "買", ruby: "か" }, { text: "いました。" }],
            translation: "Compré onigiri en la tienda de conveniencia.",
          },
          {
            segments: [{ text: "市場", ruby: "いちば" }, { text: "で" }, { text: "野菜", ruby: "やさい" }, { text: "を" }, { text: "買", ruby: "か" }, { text: "います。" }],
            translation: "Compro verduras en el mercado.",
          },
          {
            segments: [{ text: "山", ruby: "やま" }, { text: "で" }, { text: "キャンプ" }, { text: "を" }, { text: "しました。" }],
            translation: "Acampé en la montaña.",
          },
          {
            segments: [{ text: "銀行", ruby: "ぎんこう" }, { text: "で" }, { text: "お" }, { text: "金", ruby: "かね" }, { text: "を" }, { text: "下", ruby: "お" }, { text: "ろします。" }],
            translation: "Saco dinero en el banco.",
          },
          {
            segments: [{ text: "交番", ruby: "こうばん" }, { text: "で" }, { text: "道", ruby: "みち" }, { text: "を" }, { text: "聞", ruby: "き" }, { text: "きました。" }],
            translation: "Pregunté el camino en el puesto de policía.",
          },
          {
            segments: [{ text: "受付", ruby: "うけつけ" }, { text: "で" }, { text: "名前", ruby: "なまえ" }, { text: "を" }, { text: "書", ruby: "か" }, { text: "いてください。" }],
            translation: "Por favor, escribe tu nombre en recepción.",
          },
          {
            segments: [{ text: "会場", ruby: "かいじょう" }, { text: "で" }, { text: "写真", ruby: "しゃしん" }, { text: "を" }, { text: "撮", ruby: "と" }, { text: "りました。" }],
            translation: "Tomé fotos en el lugar del evento.",
          },
          {
            segments: [{ text: "ベランダ" }, { text: "で" }, { text: "洗濯", ruby: "せんたく" }, { text: "物", ruby: "もの" }, { text: "を" }, { text: "干", ruby: "ほ" }, { text: "します。" }],
            translation: "Tiendo la ropa en el balcón.",
          },
          {
            segments: [{ text: "店", ruby: "みせ" }, { text: "で" }, { text: "昼", ruby: "ひる" }, { text: "ご" }, { text: "飯", ruby: "はん" }, { text: "を" }, { text: "食", ruby: "た" }, { text: "べました。" }],
            translation: "Almorcé en el local.",
          },
        ],
      },
      {
        title: "Medio o herramienta utilizada",
        examples: [
          {
            segments: [{ text: "箸", ruby: "はし" }, { text: "で" }, { text: "食", ruby: "た" }, { text: "べます。" }],
            translation: "Como con palillos.",
          },
          {
            segments: [{ text: "鉛筆", ruby: "えんぴつ" }, { text: "で" }, { text: "字", ruby: "じ" }, { text: "を" }, { text: "書", ruby: "か" }, { text: "きます。" }],
            translation: "Escribo con un lápiz.",
          },
          {
            segments: [{ text: "スマホ" }, { text: "で" }, { text: "写真", ruby: "しゃしん" }, { text: "を" }, { text: "撮", ruby: "と" }, { text: "ります。" }],
            translation: "Tomo fotos con el celular.",
          },
          {
            segments: [{ text: "日本語", ruby: "にほんご" }, { text: "で" }, { text: "説明", ruby: "せつめい" }, { text: "してください。" }],
            translation: "Explíquelo en japonés.",
          },
          {
            segments: [{ text: "カード" }, { text: "で" }, { text: "払", ruby: "はら" }, { text: "いました。" }],
            translation: "Pagué con tarjeta.",
          },
          {
            segments: [{ text: "はさみ" }, { text: "で" }, { text: "紙", ruby: "かみ" }, { text: "を" }, { text: "切", ruby: "き" }, { text: "ります。" }],
            translation: "Corto papel con tijeras.",
          },
          {
            segments: [{ text: "包丁", ruby: "ほうちょう" }, { text: "で" }, { text: "野菜", ruby: "やさい" }, { text: "を" }, { text: "切", ruby: "き" }, { text: "ります。" }],
            translation: "Corto verduras con un cuchillo de cocina.",
          },
          {
            segments: [{ text: "スプーン" }, { text: "で" }, { text: "スープ" }, { text: "を" }, { text: "飲", ruby: "の" }, { text: "みます。" }],
            translation: "Tomo sopa con una cuchara.",
          },
          {
            segments: [{ text: "フォーク" }, { text: "で" }, { text: "パスタ" }, { text: "を" }, { text: "食", ruby: "た" }, { text: "べます。" }],
            translation: "Como pasta con tenedor.",
          },
          {
            segments: [{ text: "ペン" }, { text: "で" }, { text: "名前", ruby: "なまえ" }, { text: "を" }, { text: "書", ruby: "か" }, { text: "きます。" }],
            translation: "Escribo mi nombre con un lápiz de tinta.",
          },
          {
            segments: [{ text: "ボールペン" }, { text: "で" }, { text: "手紙", ruby: "てがみ" }, { text: "を" }, { text: "書", ruby: "か" }, { text: "きます。" }],
            translation: "Escribo una carta con bolígrafo.",
          },
          {
            segments: [{ text: "消", ruby: "け" }, { text: "し" }, { text: "ゴム" }, { text: "で" }, { text: "字", ruby: "じ" }, { text: "を" }, { text: "消", ruby: "け" }, { text: "します。" }],
            translation: "Borro letras con una goma.",
          },
          {
            segments: [{ text: "定規", ruby: "じょうぎ" }, { text: "で" }, { text: "線", ruby: "せん" }, { text: "を" }, { text: "引", ruby: "ひ" }, { text: "きます。" }],
            translation: "Trazo una línea con una regla.",
          },
          {
            segments: [{ text: "鍵", ruby: "かぎ" }, { text: "で" }, { text: "ドア" }, { text: "を" }, { text: "開", ruby: "あ" }, { text: "けます。" }],
            translation: "Abro la puerta con una llave.",
          },
          {
            segments: [{ text: "パソコン" }, { text: "で" }, { text: "レポート" }, { text: "を" }, { text: "作", ruby: "つく" }, { text: "ります。" }],
            translation: "Hago un informe en la computadora.",
          },
          {
            segments: [{ text: "パソコン" }, { text: "で" }, { text: "資料", ruby: "しりょう" }, { text: "を" }, { text: "作", ruby: "つく" }, { text: "りました。" }],
            translation: "Preparé materiales en la computadora.",
          },
          {
            segments: [{ text: "メール" }, { text: "で" }, { text: "連絡", ruby: "れんらく" }, { text: "します。" }],
            translation: "Me comunico por correo.",
          },
          {
            segments: [{ text: "電話", ruby: "でんわ" }, { text: "で" }, { text: "予約", ruby: "よやく" }, { text: "しました。" }],
            translation: "Hice una reserva por teléfono.",
          },
          {
            segments: [{ text: "アプリ" }, { text: "で" }, { text: "意味", ruby: "いみ" }, { text: "を" }, { text: "調", ruby: "しら" }, { text: "べます。" }],
            translation: "Busco el significado con una aplicación.",
          },
          {
            segments: [{ text: "辞書", ruby: "じしょ" }, { text: "で" }, { text: "言葉", ruby: "ことば" }, { text: "を" }, { text: "調", ruby: "しら" }, { text: "べます。" }],
            translation: "Busco palabras en el diccionario.",
          },
          {
            segments: [{ text: "インターネット" }, { text: "で" }, { text: "ニュース" }, { text: "を" }, { text: "読", ruby: "よ" }, { text: "みます。" }],
            translation: "Leo noticias por internet.",
          },
          {
            segments: [{ text: "英語", ruby: "えいご" }, { text: "で" }, { text: "メール" }, { text: "を" }, { text: "書", ruby: "か" }, { text: "きます。" }],
            translation: "Escribo correos en inglés.",
          },
          {
            segments: [{ text: "ひらがな" }, { text: "で" }, { text: "名前", ruby: "なまえ" }, { text: "を" }, { text: "書", ruby: "か" }, { text: "いてください。" }],
            translation: "Por favor, escriba su nombre en hiragana.",
          },
          {
            segments: [{ text: "現金", ruby: "げんきん" }, { text: "で" }, { text: "払", ruby: "はら" }, { text: "いました。" }],
            translation: "Pagué en efectivo.",
          },
          {
            segments: [{ text: "電子", ruby: "でんし" }, { text: "マネー" }, { text: "で" }, { text: "払", ruby: "はら" }, { text: "いました。" }],
            translation: "Pagué con dinero electrónico.",
          },
          {
            segments: [{ text: "手", ruby: "て" }, { text: "で" }, { text: "持", ruby: "も" }, { text: "ってください。" }],
            translation: "Por favor, sujételo con la mano.",
          },
          {
            segments: [{ text: "右手", ruby: "みぎて" }, { text: "で" }, { text: "書", ruby: "か" }, { text: "きます。" }],
            translation: "Escribo con la mano derecha.",
          },
          {
            segments: [{ text: "左手", ruby: "ひだりて" }, { text: "で" }, { text: "食", ruby: "た" }, { text: "べます。" }],
            translation: "Como con la mano izquierda.",
          },
          {
            segments: [{ text: "カメラ" }, { text: "で" }, { text: "動画", ruby: "どうが" }, { text: "を" }, { text: "撮", ruby: "と" }, { text: "ります。" }],
            translation: "Grabo videos con una cámara.",
          },
          {
            segments: [{ text: "ハンマー" }, { text: "で" }, { text: "くぎ" }, { text: "を" }, { text: "打", ruby: "う" }, { text: "ちます。" }],
            translation: "Clavo un clavo con un martillo.",
          },
        ],
      },
      {
        title: "Medios de transporte",
        examples: [
          {
            segments: [{ text: "電車", ruby: "でんしゃ" }, { text: "で" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy en tren.",
          },
          {
            segments: [{ text: "自転車", ruby: "じてんしゃ" }, { text: "で" }, { text: "学校", ruby: "がっこう" }, { text: "に" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy a la escuela en bicicleta.",
          },
          {
            segments: [{ text: "バス" }, { text: "で" }, { text: "会社", ruby: "かいしゃ" }, { text: "に" }, { text: "通", ruby: "かよ" }, { text: "っています。" }],
            translation: "Voy al trabajo en autobús.",
          },
          {
            segments: [{ text: "飛行機", ruby: "ひこうき" }, { text: "で" }, { text: "北海道", ruby: "ほっかいどう" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きました。" }],
            translation: "Fui a Hokkaidō en avión.",
          },
          {
            segments: [{ text: "徒歩", ruby: "とほ" }, { text: "で" }, { text: "帰", ruby: "かえ" }, { text: "ります。" }],
            translation: "Regreso a pie.",
          },
          {
            segments: [{ text: "新幹線", ruby: "しんかんせん" }, { text: "で" }, { text: "東京", ruby: "とうきょう" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy a Tokio en shinkansen.",
          },
          {
            segments: [{ text: "地下鉄", ruby: "ちかてつ" }, { text: "で" }, { text: "駅", ruby: "えき" }, { text: "まで" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy hasta la estación en metro.",
          },
          {
            segments: [{ text: "車", ruby: "くるま" }, { text: "で" }, { text: "スーパー" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy al supermercado en auto.",
          },
          {
            segments: [{ text: "タクシー" }, { text: "で" }, { text: "ホテル" }, { text: "に" }, { text: "帰", ruby: "かえ" }, { text: "りました。" }],
            translation: "Regresé al hotel en taxi.",
          },
          {
            segments: [{ text: "バイク" }, { text: "で" }, { text: "学校", ruby: "がっこう" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy a la escuela en moto.",
          },
          {
            segments: [{ text: "船", ruby: "ふね" }, { text: "で" }, { text: "島", ruby: "しま" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きました。" }],
            translation: "Fui a la isla en barco.",
          },
          {
            segments: [{ text: "自転車", ruby: "じてんしゃ" }, { text: "で" }, { text: "駅", ruby: "えき" }, { text: "まで" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy hasta la estación en bicicleta.",
          },
          {
            segments: [{ text: "電車", ruby: "でんしゃ" }, { text: "で" }, { text: "学校", ruby: "がっこう" }, { text: "に" }, { text: "通", ruby: "かよ" }, { text: "っています。" }],
            translation: "Voy a la escuela en tren.",
          },
          {
            segments: [{ text: "飛行機", ruby: "ひこうき" }, { text: "で" }, { text: "日本", ruby: "にほん" }, { text: "に" }, { text: "来", ruby: "き" }, { text: "ました。" }],
            translation: "Vine a Japón en avión.",
          },
          {
            segments: [{ text: "徒歩", ruby: "とほ" }, { text: "で" }, { text: "駅", ruby: "えき" }, { text: "まで" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy caminando hasta la estación.",
          },
          {
            segments: [{ text: "バス" }, { text: "で" }, { text: "病院", ruby: "びょういん" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きました。" }],
            translation: "Fui al hospital en autobús.",
          },
          {
            segments: [{ text: "新幹線", ruby: "しんかんせん" }, { text: "で" }, { text: "大阪", ruby: "おおさか" }, { text: "へ" }, { text: "出張", ruby: "しゅっちょう" }, { text: "します。" }],
            translation: "Voy a Osaka en viaje de trabajo en shinkansen.",
          },
          {
            segments: [{ text: "地下鉄", ruby: "ちかてつ" }, { text: "で" }, { text: "会社", ruby: "かいしゃ" }, { text: "に" }, { text: "行", ruby: "い" }, { text: "っています。" }],
            translation: "Voy a la empresa en metro.",
          },
          {
            segments: [{ text: "車", ruby: "くるま" }, { text: "で" }, { text: "空港", ruby: "くうこう" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy al aeropuerto en auto.",
          },
          {
            segments: [{ text: "タクシー" }, { text: "で" }, { text: "うち" }, { text: "に" }, { text: "帰", ruby: "かえ" }, { text: "りました。" }],
            translation: "Regresé a casa en taxi.",
          },
          {
            segments: [{ text: "船", ruby: "ふね" }, { text: "で" }, { text: "旅行", ruby: "りょこう" }, { text: "しました。" }],
            translation: "Viajé en barco.",
          },
          {
            segments: [{ text: "バイク" }, { text: "で" }, { text: "海", ruby: "うみ" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きました。" }],
            translation: "Fui al mar en moto.",
          },
          {
            segments: [{ text: "自転車", ruby: "じてんしゃ" }, { text: "で" }, { text: "買", ruby: "か" }, { text: "い" }, { text: "物", ruby: "もの" }, { text: "に" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy de compras en bicicleta.",
          },
          {
            segments: [{ text: "電車", ruby: "でんしゃ" }, { text: "で" }, { text: "うち" }, { text: "に" }, { text: "帰", ruby: "かえ" }, { text: "ります。" }],
            translation: "Regreso a casa en tren.",
          },
          {
            segments: [{ text: "飛行機", ruby: "ひこうき" }, { text: "で" }, { text: "福岡", ruby: "ふくおか" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きました。" }],
            translation: "Fui a Fukuoka en avión.",
          },
          {
            segments: [{ text: "徒歩", ruby: "とほ" }, { text: "で" }, { text: "学校", ruby: "がっこう" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy a la escuela a pie.",
          },
          {
            segments: [{ text: "バス" }, { text: "で" }, { text: "駅", ruby: "えき" }, { text: "まで" }, { text: "来", ruby: "き" }, { text: "ました。" }],
            translation: "Vine hasta la estación en autobús.",
          },
          {
            segments: [{ text: "地下鉄", ruby: "ちかてつ" }, { text: "で" }, { text: "帰", ruby: "かえ" }, { text: "ります。" }],
            translation: "Regreso en metro.",
          },
          {
            segments: [{ text: "車", ruby: "くるま" }, { text: "で" }, { text: "会社", ruby: "かいしゃ" }, { text: "に" }, { text: "通", ruby: "かよ" }, { text: "っています。" }],
            translation: "Voy al trabajo en auto.",
          },
          {
            segments: [{ text: "新幹線", ruby: "しんかんせん" }, { text: "で" }, { text: "京都", ruby: "きょうと" }, { text: "へ" }, { text: "旅行", ruby: "りょこう" }, { text: "しました。" }],
            translation: "Viajé a Kioto en shinkansen.",
          },
        ],
      },
      {
        title: "Causa o razón",
        examples: [
          {
            segments: [{ text: "病気", ruby: "びょうき" }, { text: "で" }, { text: "学校", ruby: "がっこう" }, { text: "を" }, { text: "休", ruby: "やす" }, { text: "みました。" }],
            translation: "Falté a la escuela por enfermedad.",
          },
          {
            segments: [{ text: "雪", ruby: "ゆき" }, { text: "で" }, { text: "電車", ruby: "でんしゃ" }, { text: "が" }, { text: "止", ruby: "と" }, { text: "まりました。" }],
            translation: "El tren se detuvo por la nieve.",
          },
          {
            segments: [{ text: "事故", ruby: "じこ" }, { text: "で" }, { text: "道", ruby: "みち" }, { text: "が" }, { text: "混", ruby: "こ" }, { text: "んでいます。" }],
            translation: "La calle está congestionada por un accidente.",
          },
          {
            segments: [{ text: "仕事", ruby: "しごと" }, { text: "で" }, { text: "東京", ruby: "とうきょう" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy a Tokio por trabajo.",
          },
          {
            segments: [{ text: "台風", ruby: "たいふう" }, { text: "で" }, { text: "店", ruby: "みせ" }, { text: "が" }, { text: "閉", ruby: "し" }, { text: "まりました。" }],
            translation: "La tienda cerró por el tifón.",
          },
          {
            segments: [{ text: "風邪", ruby: "かぜ" }, { text: "で" }, { text: "会社", ruby: "かいしゃ" }, { text: "を" }, { text: "休", ruby: "やす" }, { text: "みました。" }],
            translation: "Falté al trabajo por un resfriado.",
          },
          {
            segments: [{ text: "大雨", ruby: "おおあめ" }, { text: "で" }, { text: "試合", ruby: "しあい" }, { text: "が" }, { text: "中止", ruby: "ちゅうし" }, { text: "に" }, { text: "なりました。" }],
            translation: "El partido fue cancelado por la lluvia intensa.",
          },
          {
            segments: [{ text: "停電", ruby: "ていでん" }, { text: "で" }, { text: "エアコン" }, { text: "が" }, { text: "止", ruby: "と" }, { text: "まりました。" }],
            translation: "El aire acondicionado se detuvo por un corte de luz.",
          },
          {
            segments: [{ text: "渋滞", ruby: "じゅうたい" }, { text: "で" }, { text: "遅", ruby: "おく" }, { text: "れました。" }],
            translation: "Llegué tarde por el atasco.",
          },
          {
            segments: [{ text: "用事", ruby: "ようじ" }, { text: "で" }, { text: "早", ruby: "はや" }, { text: "く" }, { text: "帰", ruby: "かえ" }, { text: "ります。" }],
            translation: "Regreso temprano por un asunto pendiente.",
          },
          {
            segments: [{ text: "出張", ruby: "しゅっちょう" }, { text: "で" }, { text: "大阪", ruby: "おおさか" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy a Osaka por un viaje de trabajo.",
          },
          {
            segments: [{ text: "会議", ruby: "かいぎ" }, { text: "で" }, { text: "今日", ruby: "きょう" }, { text: "は" }, { text: "忙", ruby: "いそが" }, { text: "しいです。" }],
            translation: "Hoy estoy ocupado por una reunión.",
          },
          {
            segments: [{ text: "寝不足", ruby: "ねぶそく" }, { text: "で" }, { text: "頭", ruby: "あたま" }, { text: "が" }, { text: "痛", ruby: "いた" }, { text: "いです。" }],
            translation: "Me duele la cabeza por falta de sueño.",
          },
          {
            segments: [{ text: "ストレス" }, { text: "で" }, { text: "お" }, { text: "腹", ruby: "なか" }, { text: "が" }, { text: "痛", ruby: "いた" }, { text: "く" }, { text: "なりました。" }],
            translation: "Me empezó a doler el estómago por estrés.",
          },
          {
            segments: [{ text: "地震", ruby: "じしん" }, { text: "で" }, { text: "窓", ruby: "まど" }, { text: "が" }, { text: "割", ruby: "わ" }, { text: "れました。" }],
            translation: "La ventana se rompió por el terremoto.",
          },
          {
            segments: [{ text: "雨", ruby: "あめ" }, { text: "で" }, { text: "服", ruby: "ふく" }, { text: "が" }, { text: "ぬれました。" }],
            translation: "La ropa se mojó por la lluvia.",
          },
          {
            segments: [{ text: "強風", ruby: "きょうふう" }, { text: "で" }, { text: "木", ruby: "き" }, { text: "が" }, { text: "倒", ruby: "たお" }, { text: "れました。" }],
            translation: "Un árbol se cayó por el viento fuerte.",
          },
          {
            segments: [{ text: "工事", ruby: "こうじ" }, { text: "で" }, { text: "道", ruby: "みち" }, { text: "が" }, { text: "通", ruby: "とお" }, { text: "れません。" }],
            translation: "No se puede pasar por la calle debido a obras.",
          },
          {
            segments: [{ text: "故障", ruby: "こしょう" }, { text: "で" }, { text: "エレベーター" }, { text: "が" }, { text: "使", ruby: "つか" }, { text: "えません。" }],
            translation: "No se puede usar el ascensor por una avería.",
          },
          {
            segments: [{ text: "定期点検", ruby: "ていきてんけん" }, { text: "で" }, { text: "今日", ruby: "きょう" }, { text: "は" }, { text: "休", ruby: "やす" }, { text: "みです。" }],
            translation: "Hoy está cerrado por revisión periódica.",
          },
          {
            segments: [{ text: "熱", ruby: "ねつ" }, { text: "で" }, { text: "学校", ruby: "がっこう" }, { text: "に" }, { text: "行", ruby: "い" }, { text: "けません。" }],
            translation: "No puedo ir a la escuela por fiebre.",
          },
          {
            segments: [{ text: "事故", ruby: "じこ" }, { text: "で" }, { text: "バス" }, { text: "が" }, { text: "遅", ruby: "おく" }, { text: "れました。" }],
            translation: "El autobús se retrasó por un accidente.",
          },
          {
            segments: [{ text: "雪", ruby: "ゆき" }, { text: "で" }, { text: "飛行機", ruby: "ひこうき" }, { text: "が" }, { text: "飛", ruby: "と" }, { text: "びません。" }],
            translation: "El avión no despega por la nieve.",
          },
          {
            segments: [{ text: "台風", ruby: "たいふう" }, { text: "で" }, { text: "イベント" }, { text: "が" }, { text: "延期", ruby: "えんき" }, { text: "に" }, { text: "なりました。" }],
            translation: "El evento fue pospuesto por el tifón.",
          },
          {
            segments: [{ text: "病気", ruby: "びょうき" }, { text: "で" }, { text: "入院", ruby: "にゅういん" }, { text: "しました。" }],
            translation: "Fui hospitalizado por enfermedad.",
          },
          {
            segments: [{ text: "アレルギー" }, { text: "で" }, { text: "この" }, { text: "薬", ruby: "くすり" }, { text: "は" }, { text: "飲", ruby: "の" }, { text: "めません。" }],
            translation: "No puedo tomar este medicamento por una alergia.",
          },
          {
            segments: [{ text: "けが" }, { text: "で" }, { text: "運動", ruby: "うんどう" }, { text: "できません。" }],
            translation: "No puedo hacer ejercicio por una lesión.",
          },
          {
            segments: [{ text: "人手不足", ruby: "ひとでぶそく" }, { text: "で" }, { text: "営業時間", ruby: "えいぎょうじかん" }, { text: "が" }, { text: "短", ruby: "みじか" }, { text: "く" }, { text: "なりました。" }],
            translation: "El horario de atención se redujo por falta de personal.",
          },
          {
            segments: [{ text: "雨", ruby: "あめ" }, { text: "で" }, { text: "遠足", ruby: "えんそく" }, { text: "が" }, { text: "なくなりました。" }],
            translation: "La excursión se suspendió por la lluvia.",
          },
          {
            segments: [{ text: "火事", ruby: "かじ" }, { text: "で" }, { text: "この" }, { text: "道", ruby: "みち" }, { text: "は" }, { text: "通", ruby: "とお" }, { text: "れません。" }],
            translation: "No se puede pasar por este camino debido a un incendio.",
          },
        ],
      },
      {
        title: "Cantidad, total o límite",
        examples: [
          {
            segments: [{ text: "三人", ruby: "さんにん" }, { text: "で" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Iremos entre tres personas.",
          },
          {
            segments: [{ text: "全部", ruby: "ぜんぶ" }, { text: "で" }, { text: "五千円", ruby: "ごせんえん" }, { text: "でした。" }],
            translation: "En total fueron cinco mil yenes.",
          },
          {
            segments: [{ text: "一週間", ruby: "いっしゅうかん" }, { text: "で" }, { text: "終", ruby: "お" }, { text: "わりました。" }],
            translation: "Se terminó en una semana.",
          },
          {
            segments: [{ text: "この" }, { text: "仕事", ruby: "しごと" }, { text: "は" }, { text: "一日", ruby: "いちにち" }, { text: "で" }, { text: "できます。" }],
            translation: "Este trabajo se puede hacer en un día.",
          },
          {
            segments: [{ text: "百円", ruby: "ひゃくえん" }, { text: "で" }, { text: "二個", ruby: "にこ" }, { text: "買", ruby: "か" }, { text: "えます。" }],
            translation: "Puedes comprar dos por cien yenes.",
          },
          {
            segments: [{ text: "二人", ruby: "ふたり" }, { text: "で" }, { text: "食", ruby: "た" }, { text: "べます。" }],
            translation: "Comeremos entre dos personas.",
          },
          {
            segments: [{ text: "五人", ruby: "ごにん" }, { text: "で" }, { text: "住", ruby: "す" }, { text: "んでいます。" }],
            translation: "Vivimos cinco personas.",
          },
          {
            segments: [{ text: "一人", ruby: "ひとり" }, { text: "で" }, { text: "できます。" }],
            translation: "Se puede hacer solo una persona.",
          },
          {
            segments: [{ text: "四人", ruby: "よにん" }, { text: "で" }, { text: "この" }, { text: "部屋", ruby: "へや" }, { text: "を" }, { text: "使", ruby: "つか" }, { text: "います。" }],
            translation: "Usamos esta habitación entre cuatro personas.",
          },
          {
            segments: [{ text: "十人", ruby: "じゅうにん" }, { text: "で" }, { text: "一", ruby: "ひと" }, { text: "つ" }, { text: "の" }, { text: "グループ" }, { text: "です。" }],
            translation: "Un grupo está formado por diez personas.",
          },
          {
            segments: [{ text: "合計", ruby: "ごうけい" }, { text: "で" }, { text: "一万円", ruby: "いちまんえん" }, { text: "かかりました。" }],
            translation: "En total costó diez mil yenes.",
          },
          {
            segments: [{ text: "二人分", ruby: "ふたりぶん" }, { text: "で" }, { text: "千二百円", ruby: "せんにひゃくえん" }, { text: "です。" }],
            translation: "Son mil doscientos yenes por dos porciones.",
          },
          {
            segments: [{ text: "全部", ruby: "ぜんぶ" }, { text: "で" }, { text: "三十枚", ruby: "さんじゅうまい" }, { text: "あります。" }],
            translation: "En total hay treinta hojas.",
          },
          {
            segments: [{ text: "全部", ruby: "ぜんぶ" }, { text: "で" }, { text: "何人", ruby: "なんにん" }, { text: "ですか？" }],
            translation: "¿Cuántas personas son en total?",
          },
          {
            segments: [{ text: "三日", ruby: "みっか" }, { text: "で" }, { text: "読", ruby: "よ" }, { text: "みました。" }],
            translation: "Lo leí en tres días.",
          },
          {
            segments: [{ text: "二時間", ruby: "にじかん" }, { text: "で" }, { text: "宿題", ruby: "しゅくだい" }, { text: "が" }, { text: "終", ruby: "お" }, { text: "わりました。" }],
            translation: "La tarea se terminó en dos horas.",
          },
          {
            segments: [{ text: "十分", ruby: "じゅっぷん" }, { text: "で" }, { text: "着", ruby: "つ" }, { text: "きます。" }],
            translation: "Se llega en diez minutos.",
          },
          {
            segments: [{ text: "五分", ruby: "ごふん" }, { text: "で" }, { text: "できます。" }],
            translation: "Se puede hacer en cinco minutos.",
          },
          {
            segments: [{ text: "一か月", ruby: "いっかげつ" }, { text: "で" }, { text: "日本語", ruby: "にほんご" }, { text: "を" }, { text: "全部", ruby: "ぜんぶ" }, { text: "覚", ruby: "おぼ" }, { text: "える" }, { text: "の" }, { text: "は" }, { text: "無理", ruby: "むり" }, { text: "です。" }],
            translation: "Es imposible aprender todo el japonés en un mes.",
          },
          {
            segments: [{ text: "この" }, { text: "作業", ruby: "さぎょう" }, { text: "は" }, { text: "三十分", ruby: "さんじゅっぷん" }, { text: "で" }, { text: "終", ruby: "お" }, { text: "わります。" }],
            translation: "Este trabajo termina en treinta minutos.",
          },
          {
            segments: [{ text: "千円", ruby: "せんえん" }, { text: "で" }, { text: "足", ruby: "た" }, { text: "ります。" }],
            translation: "Con mil yenes alcanza.",
          },
          {
            segments: [{ text: "五百円", ruby: "ごひゃくえん" }, { text: "で" }, { text: "昼", ruby: "ひる" }, { text: "ご" }, { text: "飯", ruby: "はん" }, { text: "が" }, { text: "食", ruby: "た" }, { text: "べられます。" }],
            translation: "Con quinientos yenes puedes almorzar.",
          },
          {
            segments: [{ text: "二千円", ruby: "にせんえん" }, { text: "で" }, { text: "この" }, { text: "本", ruby: "ほん" }, { text: "が" }, { text: "買", ruby: "か" }, { text: "えます。" }],
            translation: "Con dos mil yenes puedes comprar este libro.",
          },
          {
            segments: [{ text: "三百円", ruby: "さんびゃくえん" }, { text: "で" }, { text: "コーヒー" }, { text: "が" }, { text: "飲", ruby: "の" }, { text: "めます。" }],
            translation: "Con trescientos yenes puedes tomar café.",
          },
          {
            segments: [{ text: "二百円", ruby: "にひゃくえん" }, { text: "で" }, { text: "三本", ruby: "さんぼん" }, { text: "買", ruby: "か" }, { text: "えます。" }],
            translation: "Puedes comprar tres por doscientos yenes.",
          },
          {
            segments: [{ text: "千円", ruby: "せんえん" }, { text: "で" }, { text: "五枚", ruby: "ごまい" }, { text: "です。" }],
            translation: "Son cinco por mil yenes.",
          },
          {
            segments: [{ text: "この" }, { text: "部屋", ruby: "へや" }, { text: "は" }, { text: "六人", ruby: "ろくにん" }, { text: "で" }, { text: "いっぱい" }, { text: "です。" }],
            translation: "Esta habitación se llena con seis personas.",
          },
          {
            segments: [{ text: "この" }, { text: "会議室", ruby: "かいぎしつ" }, { text: "は" }, { text: "二十人", ruby: "にじゅうにん" }, { text: "で" }, { text: "使", ruby: "つか" }, { text: "えます。" }],
            translation: "Esta sala de reuniones se puede usar con veinte personas.",
          },
          {
            segments: [{ text: "この" }, { text: "ホテル" }, { text: "は" }, { text: "一泊", ruby: "いっぱく" }, { text: "二人", ruby: "ふたり" }, { text: "で" }, { text: "一万二千円", ruby: "いちまんにせんえん" }, { text: "です。" }],
            translation: "Este hotel cuesta doce mil yenes por noche para dos personas.",
          },
          {
            segments: [{ text: "この" }, { text: "料理", ruby: "りょうり" }, { text: "は" }, { text: "五分", ruby: "ごふん" }, { text: "で" }, { text: "できあがります。" }],
            translation: "Este plato queda listo en cinco minutos.",
          },
        ],
      },
    ],
  },

  // ─── へ (he) ───────────────────────────────────────────────────────────────
  {
    particle: "へ (he)",
    symbol: "へ",
    romaji: "he",
    summary: "Indica dirección o destino. Es similar a に, pero pone más énfasis en el rumbo o la trayectoria que en la llegada exacta.",
    uses: [
      {
        title: "Dirección o destino físico",
        examples: [
          {
            segments: [{ text: "東京", ruby: "とうきょう" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy hacia Tokio.",
          },
          {
            segments: [{ text: "海", ruby: "うみ" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きたいです。" }],
            translation: "Quiero ir al mar.",
          },
          {
            segments: [{ text: "右", ruby: "みぎ" }, { text: "へ" }, { text: "曲", ruby: "ま" }, { text: "がってください。" }],
            translation: "Gire a la derecha.",
          },
          {
            segments: [{ text: "外", ruby: "そと" }, { text: "へ" }, { text: "出", ruby: "で" }, { text: "ましょう。" }],
            translation: "Salgamos afuera.",
          },
          {
            segments: [{ text: "北", ruby: "きた" }, { text: "へ" }, { text: "向", ruby: "む" }, { text: "かっています。" }],
            translation: "Se dirige hacia el norte.",
          },
          {
            segments: [{ text: "駅", ruby: "えき" }, { text: "へ" }, { text: "急", ruby: "いそ" }, { text: "いで" }, { text: "います。" }],
            translation: "Voy apurado hacia la estación.",
          },
          {
            segments: [{ text: "教室", ruby: "きょうしつ" }, { text: "へ" }, { text: "戻", ruby: "もど" }, { text: "ります。" }],
            translation: "Regreso hacia el aula.",
          },
          {
            segments: [{ text: "山", ruby: "やま" }, { text: "へ" }, { text: "向", ruby: "む" }, { text: "かっています。" }],
            translation: "Se dirige hacia la montaña.",
          },
          {
            segments: [{ text: "出口", ruby: "でぐち" }, { text: "へ" }, { text: "歩", ruby: "ある" }, { text: "いてください。" }],
            translation: "Por favor, camine hacia la salida.",
          },
          {
            segments: [{ text: "窓", ruby: "まど" }, { text: "の" }, { text: "ほう" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "ってください。" }],
            translation: "Por favor, vaya hacia la ventana.",
          },
          {
            segments: [{ text: "前", ruby: "まえ" }, { text: "へ" }, { text: "進", ruby: "すす" }, { text: "んでください。" }],
            translation: "Por favor, avance hacia adelante.",
          },
          {
            segments: [{ text: "左", ruby: "ひだり" }, { text: "へ" }, { text: "少", ruby: "すこ" }, { text: "し" }, { text: "寄", ruby: "よ" }, { text: "ってください。" }],
            translation: "Por favor, muévase un poco hacia la izquierda.",
          },
          {
            segments: [{ text: "南", ruby: "みなみ" }, { text: "へ" }, { text: "下", ruby: "さ" }, { text: "がっていきます。" }],
            translation: "Va bajando hacia el sur.",
          },
          {
            segments: [{ text: "川", ruby: "かわ" }, { text: "の" }, { text: "ほう" }, { text: "へ" }, { text: "歩", ruby: "ある" }, { text: "いていきました。" }],
            translation: "Caminó hacia el río.",
          },
          {
            segments: [{ text: "公園", ruby: "こうえん" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "く" }, { text: "途中", ruby: "とちゅう" }, { text: "で" }, { text: "雨", ruby: "あめ" }, { text: "が" }, { text: "降", ruby: "ふ" }, { text: "りました。" }],
            translation: "En el camino hacia el parque, empezó a llover.",
          },
          {
            segments: [{ text: "うち" }, { text: "へ" }, { text: "帰", ruby: "かえ" }, { text: "る" }, { text: "前", ruby: "まえ" }, { text: "に" }, { text: "スーパー" }, { text: "に" }, { text: "寄", ruby: "よ" }, { text: "ります。" }],
            translation: "Antes de volver a casa, pasaré por el supermercado.",
          },
          {
            segments: [{ text: "空港", ruby: "くうこう" }, { text: "へ" }, { text: "向", ruby: "む" }, { text: "かう" }, { text: "バス" }, { text: "に" }, { text: "乗", ruby: "の" }, { text: "りました。" }],
            translation: "Subí al autobús que va hacia el aeropuerto.",
          },
          {
            segments: [{ text: "海", ruby: "うみ" }, { text: "へ" }, { text: "続", ruby: "つづ" }, { text: "く" }, { text: "道", ruby: "みち" }, { text: "を" }, { text: "歩", ruby: "ある" }, { text: "きました。" }],
            translation: "Caminé por el camino que lleva hacia el mar.",
          },
          {
            segments: [{ text: "この" }, { text: "道", ruby: "みち" }, { text: "を" }, { text: "まっすぐ" }, { text: "行", ruby: "い" }, { text: "く" }, { text: "と" }, { text: "駅", ruby: "えき" }, { text: "へ" }, { text: "出", ruby: "で" }, { text: "ます。" }],
            translation: "Si sigues derecho por este camino, sales hacia la estación.",
          },
          {
            segments: [{ text: "会場", ruby: "かいじょう" }, { text: "へ" }, { text: "急", ruby: "いそ" }, { text: "いでいる" }, { text: "人", ruby: "ひと" }, { text: "が" }, { text: "多", ruby: "おお" }, { text: "いです。" }],
            translation: "Hay mucha gente apurada hacia el lugar del evento.",
          },
          {
            segments: [{ text: "町", ruby: "まち" }, { text: "の" }, { text: "中心", ruby: "ちゅうしん" }, { text: "へ" }, { text: "歩", ruby: "ある" }, { text: "いていきます。" }],
            translation: "Voy caminando hacia el centro de la ciudad.",
          },
          {
            segments: [{ text: "玄関", ruby: "げんかん" }, { text: "へ" }, { text: "来", ruby: "き" }, { text: "てください。" }],
            translation: "Por favor, venga hacia la entrada.",
          },
          {
            segments: [{ text: "こちら" }, { text: "へ" }, { text: "どうぞ。" }],
            translation: "Por aquí, por favor.",
          },
          {
            segments: [{ text: "あちら" }, { text: "へ" }, { text: "お" }, { text: "進", ruby: "すす" }, { text: "みください。" }],
            translation: "Por favor, avance hacia allá.",
          },
          {
            segments: [{ text: "西", ruby: "にし" }, { text: "へ" }, { text: "向", ruby: "む" }, { text: "かう" }, { text: "と" }, { text: "山", ruby: "やま" }, { text: "が" }, { text: "見", ruby: "み" }, { text: "えます。" }],
            translation: "Si miras hacia el oeste, se ve la montaña.",
          },
          {
            segments: [{ text: "ドア" }, { text: "へ" }, { text: "走", ruby: "はし" }, { text: "らないでください。" }],
            translation: "Por favor, no corra hacia la puerta.",
          },
          {
            segments: [{ text: "階段", ruby: "かいだん" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "って、" }, { text: "二階", ruby: "にかい" }, { text: "へ" }, { text: "上", ruby: "あ" }, { text: "がってください。" }],
            translation: "Vaya hacia las escaleras y suba al segundo piso.",
          },
          {
            segments: [{ text: "出口", ruby: "でぐち" }, { text: "へ" }, { text: "向", ruby: "む" }, { text: "かう" }, { text: "人", ruby: "ひと" }, { text: "の" }, { text: "列", ruby: "れつ" }, { text: "が" }, { text: "できています。" }],
            translation: "Se formó una fila de gente que va hacia la salida.",
          },
          {
            segments: [{ text: "港", ruby: "みなと" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "く" }, { text: "船", ruby: "ふね" }, { text: "が" }, { text: "見", ruby: "み" }, { text: "えます。" }],
            translation: "Se ve un barco que va hacia el puerto.",
          },
          {
            segments: [{ text: "家", ruby: "いえ" }, { text: "へ" }, { text: "帰", ruby: "かえ" }, { text: "る" }, { text: "道", ruby: "みち" }, { text: "で" }, { text: "友達", ruby: "ともだち" }, { text: "に" }, { text: "会", ruby: "あ" }, { text: "いました。" }],
            translation: "Me encontré con un amigo en el camino de regreso a casa.",
          },
        ],
      },
      {
        title: "Envío o comunicación hacia alguien",
        examples: [
          {
            segments: [{ text: "先生", ruby: "せんせい" }, { text: "へ" }, { text: "メール" }, { text: "を" }, { text: "送", ruby: "おく" }, { text: "りました。" }],
            translation: "Envié un correo al profesor.",
          },
          {
            segments: [{ text: "家族", ruby: "かぞく" }, { text: "へ" }, { text: "プレゼント" }, { text: "を" }, { text: "送", ruby: "おく" }, { text: "りました。" }],
            translation: "Envié un regalo a mi familia.",
          },
          {
            segments: [{ text: "会社", ruby: "かいしゃ" }, { text: "へ" }, { text: "連絡", ruby: "れんらく" }, { text: "してください。" }],
            translation: "Por favor, contacte a la empresa.",
          },
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "へ" }, { text: "手紙", ruby: "てがみ" }, { text: "を" }, { text: "書", ruby: "か" }, { text: "きました。" }],
            translation: "Le escribí una carta a un amigo.",
          },
          {
            segments: [{ text: "日本", ruby: "にほん" }, { text: "へ" }, { text: "荷物", ruby: "にもつ" }, { text: "を" }, { text: "送", ruby: "おく" }, { text: "りました。" }],
            translation: "Envié un paquete a Japón.",
          },
          {
            segments: [{ text: "母", ruby: "はは" }, { text: "へ" }, { text: "メッセージ" }, { text: "を" }, { text: "送", ruby: "おく" }, { text: "りました。" }],
            translation: "Le envié un mensaje a mi madre.",
          },
          {
            segments: [{ text: "父", ruby: "ちち" }, { text: "へ" }, { text: "手紙", ruby: "てがみ" }, { text: "を" }, { text: "出", ruby: "だ" }, { text: "しました。" }],
            translation: "Le envié una carta a mi padre.",
          },
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "へ" }, { text: "メール" }, { text: "を" }, { text: "書", ruby: "か" }, { text: "きます。" }],
            translation: "Le escribo un correo a un amigo.",
          },
          {
            segments: [{ text: "お" }, { text: "客", ruby: "きゃく" }, { text: "様", ruby: "さま" }, { text: "へ" }, { text: "ご" }, { text: "案内", ruby: "あんない" }, { text: "を" }, { text: "送", ruby: "おく" }, { text: "ります。" }],
            translation: "Envío información al cliente.",
          },
          {
            segments: [{ text: "取引先", ruby: "とりひきさき" }, { text: "へ" }, { text: "資料", ruby: "しりょう" }, { text: "を" }, { text: "送", ruby: "おく" }, { text: "りました。" }],
            translation: "Envié materiales al cliente comercial.",
          },
          {
            segments: [{ text: "部長", ruby: "ぶちょう" }, { text: "へ" }, { text: "報告", ruby: "ほうこく" }, { text: "メール" }, { text: "を" }, { text: "送", ruby: "おく" }, { text: "りました。" }],
            translation: "Envié un correo de informe al jefe de departamento.",
          },
          {
            segments: [{ text: "学校", ruby: "がっこう" }, { text: "へ" }, { text: "申", ruby: "もう" }, { text: "し" }, { text: "込", ruby: "こ" }, { text: "み" }, { text: "書", ruby: "しょ" }, { text: "を" }, { text: "出", ruby: "だ" }, { text: "しました。" }],
            translation: "Entregué el formulario de solicitud a la escuela.",
          },
          {
            segments: [{ text: "先生", ruby: "せんせい" }, { text: "へ" }, { text: "質問", ruby: "しつもん" }, { text: "メール" }, { text: "を" }, { text: "出", ruby: "だ" }, { text: "しました。" }],
            translation: "Le envié un correo con una pregunta al profesor.",
          },
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "へ" }, { text: "返事", ruby: "へんじ" }, { text: "を" }, { text: "書", ruby: "か" }, { text: "きました。" }],
            translation: "Le escribí una respuesta a un amigo.",
          },
          {
            segments: [{ text: "会社", ruby: "かいしゃ" }, { text: "へ" }, { text: "履歴書", ruby: "りれきしょ" }, { text: "を" }, { text: "送", ruby: "おく" }, { text: "りました。" }],
            translation: "Envié mi currículum a la empresa.",
          },
          {
            segments: [{ text: "実家", ruby: "じっか" }, { text: "へ" }, { text: "お" }, { text: "土産", ruby: "みやげ" }, { text: "を" }, { text: "送", ruby: "おく" }, { text: "りました。" }],
            translation: "Envié un recuerdo a la casa de mis padres.",
          },
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "へ" }, { text: "招待状", ruby: "しょうたいじょう" }, { text: "を" }, { text: "送", ruby: "おく" }, { text: "りました。" }],
            translation: "Envié una invitación a un amigo.",
          },
          {
            segments: [{ text: "先生", ruby: "せんせい" }, { text: "へ" }, { text: "お" }, { text: "礼", ruby: "れい" }, { text: "の" }, { text: "メール" }, { text: "を" }, { text: "送", ruby: "おく" }, { text: "りました。" }],
            translation: "Le envié un correo de agradecimiento al profesor.",
          },
          {
            segments: [{ text: "会場", ruby: "かいじょう" }, { text: "へ" }, { text: "案内図", ruby: "あんないず" }, { text: "を" }, { text: "送", ruby: "おく" }, { text: "りました。" }],
            translation: "Envié un mapa guía al lugar del evento.",
          },
          {
            segments: [{ text: "北海道", ruby: "ほっかいどう" }, { text: "へ" }, { text: "荷物", ruby: "にもつ" }, { text: "を" }, { text: "送", ruby: "おく" }, { text: "ります。" }],
            translation: "Envío un paquete a Hokkaidō.",
          },
          {
            segments: [{ text: "会社", ruby: "かいしゃ" }, { text: "へ" }, { text: "ファックス" }, { text: "を" }, { text: "送", ruby: "おく" }, { text: "りました。" }],
            translation: "Envié un fax a la empresa.",
          },
          {
            segments: [{ text: "お" }, { text: "客", ruby: "きゃく" }, { text: "様", ruby: "さま" }, { text: "へ" }, { text: "返事", ruby: "へんじ" }, { text: "を" }, { text: "出", ruby: "だ" }, { text: "しました。" }],
            translation: "Le envié una respuesta al cliente.",
          },
          {
            segments: [{ text: "学校", ruby: "がっこう" }, { text: "へ" }, { text: "欠席届", ruby: "けっせきとどけ" }, { text: "を" }, { text: "出", ruby: "だ" }, { text: "しました。" }],
            translation: "Presenté un aviso de inasistencia a la escuela.",
          },
          {
            segments: [{ text: "大使館", ruby: "たいしかん" }, { text: "へ" }, { text: "書類", ruby: "しょるい" }, { text: "を" }, { text: "送", ruby: "おく" }, { text: "りました。" }],
            translation: "Envié documentos a la embajada.",
          },
          {
            segments: [{ text: "家族", ruby: "かぞく" }, { text: "へ" }, { text: "近況", ruby: "きんきょう" }, { text: "を" }, { text: "書", ruby: "か" }, { text: "いた" }, { text: "メール" }, { text: "を" }, { text: "送りました。" }],
            translation: "Envié a mi familia un correo contando cómo estoy.",
          },
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "へ" }, { text: "写", ruby: "しゃ" }, { text: "真", ruby: "しん" }, { text: "を" }, { text: "送", ruby: "おく" }, { text: "りました。" }],
            translation: "Le envié fotos a un amigo.",
          },
          {
            segments: [{ text: "先生", ruby: "せんせい" }, { text: "へ" }, { text: "レポート" }, { text: "を" }, { text: "出", ruby: "だ" }, { text: "しました。" }],
            translation: "Le entregué el informe al profesor.",
          },
          {
            segments: [{ text: "お" }, { text: "客", ruby: "きゃく" }, { text: "様", ruby: "さま" }, { text: "へ" }, { text: "確認", ruby: "かくにん" }, { text: "の" }, { text: "メール" }, { text: "を" }, { text: "送", ruby: "おく" }, { text: "ってください。" }],
            translation: "Por favor, envíe un correo de confirmación al cliente.",
          },
          {
            segments: [{ text: "日本", ruby: "にほん" }, { text: "へ" }, { text: "手紙", ruby: "てがみ" }, { text: "を" }, { text: "出", ruby: "だ" }, { text: "しました。" }],
            translation: "Envié una carta a Japón.",
          },
          {
            segments: [{ text: "先生", ruby: "せんせい" }, { text: "へ" }, { text: "連絡", ruby: "れんらく" }, { text: "しないでください。" }],
            translation: "Por favor, no se comunique con el profesor.",
          },
        ],
      },
    ],
  },

  // ─── と (to) ───────────────────────────────────────────────────────────────
  {
    particle: "と (to)",
    symbol: "と",
    romaji: "to",
    summary: "Indica compañía, lista cerrada de elementos, citas textuales y condiciones automáticas.",
    uses: [
      {
        title: "Conjunción de sustantivos (lista de objetos)",
        examples: [
          {
            segments: [{ text: "犬", ruby: "いぬ" }, { text: "と" }, { text: "猫", ruby: "ねこ" }, { text: "が" }, { text: "好", ruby: "す" }, { text: "きです。" }],
            translation: "Me gustan los perros y los gatos.",
          },
          {
            segments: [{ text: "母", ruby: "はは" }, { text: "と" }, { text: "父", ruby: "ちち" }, { text: "が" }, { text: "旅行", ruby: "りょこう" }, { text: "しました。" }],
            translation: "Mi madre y mi padre viajaron.",
          },
          {
            segments: [{ text: "パン" }, { text: "と" }, { text: "牛乳", ruby: "ぎゅうにゅう" }, { text: "を" }, { text: "買", ruby: "か" }, { text: "いました。" }],
            translation: "Compré pan y leche.",
          },
          {
            segments: [{ text: "土曜日", ruby: "どようび" }, { text: "と" }, { text: "日曜日", ruby: "にちようび" }, { text: "は" }, { text: "休", ruby: "やす" }, { text: "みです。" }],
            translation: "El sábado y el domingo son días libres.",
          },
          {
            segments: [{ text: "日本語", ruby: "にほんご" }, { text: "と" }, { text: "英語", ruby: "えいご" }, { text: "を" }, { text: "勉強", ruby: "べんきょう" }, { text: "しています。" }],
            translation: "Estoy estudiando japonés e inglés.",
          },
          {
            segments: [{ text: "兄", ruby: "あに" }, { text: "と" }, { text: "姉", ruby: "あね" }, { text: "が" }, { text: "います。" }],
            translation: "Tengo un hermano mayor y una hermana mayor.",
          },
          {
            segments: [{ text: "机", ruby: "つくえ" }, { text: "の" }, { text: "上", ruby: "うえ" }, { text: "に" }, { text: "本", ruby: "ほん" }, { text: "と" }, { text: "ノート" }, { text: "が" }, { text: "あります。" }],
            translation: "Sobre el escritorio hay un libro y un cuaderno.",
          },
          {
            segments: [{ text: "りんご" }, { text: "と" }, { text: "みかん" }, { text: "を" }, { text: "食", ruby: "た" }, { text: "べました。" }],
            translation: "Comí manzanas y mandarinas.",
          },
          {
            segments: [{ text: "赤", ruby: "あか" }, { text: "と" }, { text: "青", ruby: "あお" }, { text: "が" }, { text: "好", ruby: "す" }, { text: "きです。" }],
            translation: "Me gustan el rojo y el azul.",
          },
          {
            segments: [{ text: "山田", ruby: "やまだ" }, { text: "さん" }, { text: "と" }, { text: "田中", ruby: "たなか" }, { text: "さん" }, { text: "は" }, { text: "先生", ruby: "せんせい" }, { text: "です。" }],
            translation: "Yamada y Tanaka son profesores.",
          },
          {
            segments: [{ text: "肉", ruby: "にく" }, { text: "と" }, { text: "魚", ruby: "さかな" }, { text: "と" }, { text: "野菜", ruby: "やさい" }, { text: "を" }, { text: "食", ruby: "た" }, { text: "べます。" }],
            translation: "Como carne, pescado y verduras.",
          },
          {
            segments: [{ text: "月曜日", ruby: "げつようび" }, { text: "と" }, { text: "水曜日", ruby: "すいようび" }, { text: "に" }, { text: "日本語", ruby: "にほんご" }, { text: "の" }, { text: "授業", ruby: "じゅぎょう" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay clases de japonés los lunes y los miércoles.",
          },
          {
            segments: [{ text: "コーヒー" }, { text: "と" }, { text: "お" }, { text: "茶", ruby: "ちゃ" }, { text: "と" }, { text: "水", ruby: "みず" }, { text: "が" }, { text: "あります。" }],
            translation: "Hay café, té y agua.",
          },
          {
            segments: [{ text: "春", ruby: "はる" }, { text: "と" }, { text: "秋", ruby: "あき" }, { text: "が" }, { text: "好", ruby: "す" }, { text: "きです。" }],
            translation: "Me gustan la primavera y el otoño.",
          },
          {
            segments: [{ text: "数学", ruby: "すうがく" }, { text: "と" }, { text: "英語", ruby: "えいご" }, { text: "は" }, { text: "難", ruby: "むずか" }, { text: "しいです。" }],
            translation: "Matemáticas e inglés son difíciles.",
          },
          {
            segments: [{ text: "帽子", ruby: "ぼうし" }, { text: "と" }, { text: "かばん" }, { text: "を" }, { text: "買", ruby: "か" }, { text: "いました。" }],
            translation: "Compré un sombrero y un bolso.",
          },
          {
            segments: [{ text: "駅", ruby: "えき" }, { text: "と" }, { text: "学校", ruby: "がっこう" }, { text: "は" }, { text: "近", ruby: "ちか" }, { text: "いです。" }],
            translation: "La estación y la escuela están cerca.",
          },
          {
            segments: [{ text: "父", ruby: "ちち" }, { text: "と" }, { text: "母", ruby: "はは" }, { text: "に" }, { text: "電話", ruby: "でんわ" }, { text: "しました。" }],
            translation: "Llamé a mi padre y a mi madre.",
          },
          {
            segments: [{ text: "日本", ruby: "にほん" }, { text: "と" }, { text: "韓国", ruby: "かんこく" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きたいです。" }],
            translation: "Quiero ir a Japón y a Corea.",
          },
          {
            segments: [{ text: "紙", ruby: "かみ" }, { text: "と" }, { text: "ペン" }, { text: "が" }, { text: "必要", ruby: "ひつよう" }, { text: "です。" }],
            translation: "Se necesita papel y lápiz.",
          },
          {
            segments: [{ text: "朝", ruby: "あさ" }, { text: "ご" }, { text: "飯", ruby: "はん" }, { text: "に" }, { text: "パン" }, { text: "と" }, { text: "卵", ruby: "たまご" }, { text: "を" }, { text: "食", ruby: "た" }, { text: "べます。" }],
            translation: "En el desayuno como pan y huevos.",
          },
          {
            segments: [{ text: "兄", ruby: "あに" }, { text: "と" }, { text: "弟", ruby: "おとうと" }, { text: "は" }, { text: "背", ruby: "せ" }, { text: "が" }, { text: "高", ruby: "たか" }, { text: "いです。" }],
            translation: "Mi hermano mayor y mi hermano menor son altos.",
          },
          {
            segments: [{ text: "机", ruby: "つくえ" }, { text: "の" }, { text: "中", ruby: "なか" }, { text: "に" }, { text: "はさみ" }, { text: "と" }, { text: "のり" }, { text: "が" }, { text: "あります。" }],
            translation: "Dentro del escritorio hay tijeras y pegamento.",
          },
          {
            segments: [{ text: "テレビ" }, { text: "と" }, { text: "エアコン" }, { text: "を" }, { text: "消", ruby: "け" }, { text: "しました。" }],
            translation: "Apagué la televisión y el aire acondicionado.",
          },
          {
            segments: [{ text: "国語", ruby: "こくご" }, { text: "と" }, { text: "歴史", ruby: "れきし" }, { text: "を" }, { text: "勉強", ruby: "べんきょう" }, { text: "しました。" }],
            translation: "Estudié lengua e historia.",
          },
          {
            segments: [{ text: "山", ruby: "やま" }, { text: "と" }, { text: "川", ruby: "かわ" }, { text: "が" }, { text: "見", ruby: "み" }, { text: "えます。" }],
            translation: "Se ven la montaña y el río.",
          },
          {
            segments: [{ text: "シャツ" }, { text: "と" }, { text: "ズボン" }, { text: "を" }, { text: "洗", ruby: "あら" }, { text: "いました。" }],
            translation: "Lavé la camisa y los pantalones.",
          },
          {
            segments: [{ text: "犬", ruby: "いぬ" }, { text: "と" }, { text: "うさぎ" }, { text: "を" }, { text: "飼", ruby: "か" }, { text: "っています。" }],
            translation: "Tengo un perro y un conejo.",
          },
          {
            segments: [{ text: "月", ruby: "つき" }, { text: "と" }, { text: "星", ruby: "ほし" }, { text: "が" }, { text: "きれいです。" }],
            translation: "La luna y las estrellas están hermosas.",
          },
          {
            segments: [{ text: "名前", ruby: "なまえ" }, { text: "と" }, { text: "住所", ruby: "じゅうしょ" }, { text: "を" }, { text: "書", ruby: "か" }, { text: "いてください。" }],
            translation: "Por favor, escriba su nombre y su dirección.",
          },
        ],
      },
      {
        title: "Compañía en una acción",
        examples: [
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "と" }, { text: "映画", ruby: "えいが" }, { text: "を" }, { text: "見", ruby: "み" }, { text: "ました。" }],
            translation: "Vi una película con mi amigo.",
          },
          {
            segments: [{ text: "家族", ruby: "かぞく" }, { text: "と" }, { text: "夕食", ruby: "ゆうしょく" }, { text: "を" }, { text: "食", ruby: "た" }, { text: "べました。" }],
            translation: "Cené con mi familia.",
          },
          {
            segments: [{ text: "先生", ruby: "せんせい" }, { text: "と" }, { text: "話", ruby: "はな" }, { text: "しました。" }],
            translation: "Hablé con el profesor.",
          },
          {
            segments: [{ text: "同僚", ruby: "どうりょう" }, { text: "と" }, { text: "昼", ruby: "ひる" }, { text: "ご" }, { text: "飯", ruby: "はん" }, { text: "を" }, { text: "食", ruby: "た" }, { text: "べます。" }],
            translation: "Almuerzo con mis compañeros de trabajo.",
          },
          {
            segments: [{ text: "子", ruby: "こ" }, { text: "ども" }, { text: "と" }, { text: "公園", ruby: "こうえん" }, { text: "で" }, { text: "遊", ruby: "あそ" }, { text: "びました。" }],
            translation: "Jugué en el parque con el niño.",
          },
          {
            segments: [{ text: "兄", ruby: "あに" }, { text: "と" }, { text: "買", ruby: "か" }, { text: "い" }, { text: "物", ruby: "もの" }, { text: "に" }, { text: "行", ruby: "い" }, { text: "きました。" }],
            translation: "Fui de compras con mi hermano mayor.",
          },
          {
            segments: [{ text: "妹", ruby: "いもうと" }, { text: "と" }, { text: "音楽", ruby: "おんがく" }, { text: "を" }, { text: "聞", ruby: "き" }, { text: "きます。" }],
            translation: "Escucho música con mi hermana menor.",
          },
          {
            segments: [{ text: "母", ruby: "はは" }, { text: "と" }, { text: "スーパー" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きました。" }],
            translation: "Fui al supermercado con mi madre.",
          },
          {
            segments: [{ text: "父", ruby: "ちち" }, { text: "と" }, { text: "テレビ" }, { text: "を" }, { text: "見", ruby: "み" }, { text: "ました。" }],
            translation: "Vi televisión con mi padre.",
          },
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "と" }, { text: "一緒", ruby: "いっしょ" }, { text: "に" }, { text: "宿題", ruby: "しゅくだい" }, { text: "を" }, { text: "しました。" }],
            translation: "Hice la tarea junto con mi amigo.",
          },
          {
            segments: [{ text: "先生", ruby: "せんせい" }, { text: "と" }, { text: "一緒", ruby: "いっしょ" }, { text: "に" }, { text: "写真", ruby: "しゃしん" }, { text: "を" }, { text: "撮", ruby: "と" }, { text: "りました。" }],
            translation: "Me saqué una foto junto con el profesor.",
          },
          {
            segments: [{ text: "同級生", ruby: "どうきゅうせい" }, { text: "と" }, { text: "一緒", ruby: "いっしょ" }, { text: "に" }, { text: "図書館", ruby: "としょかん" }, { text: "で" }, { text: "勉強", ruby: "べんきょう" }, { text: "しました。" }],
            translation: "Estudié en la biblioteca junto con mis compañeros de clase.",
          },
          {
            segments: [{ text: "彼", ruby: "かれ" }, { text: "と" }, { text: "散歩", ruby: "さんぽ" }, { text: "しました。" }],
            translation: "Di un paseo con él.",
          },
          {
            segments: [{ text: "彼女", ruby: "かのじょ" }, { text: "と" }, { text: "カフェ" }, { text: "で" }, { text: "話", ruby: "はな" }, { text: "しました。" }],
            translation: "Hablé con ella en una cafetería.",
          },
          {
            segments: [{ text: "先輩", ruby: "せんぱい" }, { text: "と" }, { text: "会社", ruby: "かいしゃ" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きました。" }],
            translation: "Fui a la empresa con mi compañero mayor.",
          },
          {
            segments: [{ text: "後輩", ruby: "こうはい" }, { text: "と" }, { text: "会議", ruby: "かいぎ" }, { text: "に" }, { text: "出", ruby: "で" }, { text: "ました。" }],
            translation: "Asistí a la reunión con mi compañero menor.",
          },
          {
            segments: [{ text: "家族", ruby: "かぞく" }, { text: "と" }, { text: "一緒", ruby: "いっしょ" }, { text: "に" }, { text: "旅行", ruby: "りょこう" }, { text: "しました。" }],
            translation: "Viajé junto con mi familia.",
          },
          {
            segments: [{ text: "妻", ruby: "つま" }, { text: "と" }, { text: "晩", ruby: "ばん" }, { text: "ご" }, { text: "飯", ruby: "はん" }, { text: "を" }, { text: "作", ruby: "つく" }, { text: "りました。" }],
            translation: "Preparé la cena con mi esposa.",
          },
          {
            segments: [{ text: "子", ruby: "こ" }, { text: "ども" }, { text: "と" }, { text: "一緒", ruby: "いっしょ" }, { text: "に" }, { text: "本", ruby: "ほん" }, { text: "を" }, { text: "読", ruby: "よ" }, { text: "みました。" }],
            translation: "Leí un libro junto con el niño.",
          },
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "と" }, { text: "テニス" }, { text: "を" }, { text: "しました。" }],
            translation: "Jugué tenis con un amigo.",
          },
          {
            segments: [{ text: "先生", ruby: "せんせい" }, { text: "と" }, { text: "日本語", ruby: "にほんご" }, { text: "で" }, { text: "話", ruby: "はな" }, { text: "しました。" }],
            translation: "Hablé en japonés con el profesor.",
          },
          {
            segments: [{ text: "同僚", ruby: "どうりょう" }, { text: "と" }, { text: "駅", ruby: "えき" }, { text: "まで" }, { text: "歩", ruby: "ある" }, { text: "きました。" }],
            translation: "Caminé hasta la estación con mi compañero de trabajo.",
          },
          {
            segments: [{ text: "兄", ruby: "あに" }, { text: "と" }, { text: "ゲーム" }, { text: "を" }, { text: "しました。" }],
            translation: "Jugué videojuegos con mi hermano mayor.",
          },
          {
            segments: [{ text: "妹", ruby: "いもうと" }, { text: "と" }, { text: "歌", ruby: "うた" }, { text: "を" }, { text: "歌", ruby: "うた" }, { text: "いました。" }],
            translation: "Canté con mi hermana menor.",
          },
          {
            segments: [{ text: "祖母", ruby: "そぼ" }, { text: "と" }, { text: "電話", ruby: "でんわ" }, { text: "で" }, { text: "話", ruby: "はな" }, { text: "しました。" }],
            translation: "Hablé por teléfono con mi abuela.",
          },
          {
            segments: [{ text: "父", ruby: "ちち" }, { text: "と" }, { text: "一緒", ruby: "いっしょ" }, { text: "に" }, { text: "車", ruby: "くるま" }, { text: "を" }, { text: "洗", ruby: "あら" }, { text: "いました。" }],
            translation: "Lavé el auto junto con mi padre.",
          },
          {
            segments: [{ text: "母", ruby: "はは" }, { text: "と" }, { text: "朝", ruby: "あさ" }, { text: "ご" }, { text: "飯", ruby: "はん" }, { text: "を" }, { text: "作", ruby: "つく" }, { text: "りました。" }],
            translation: "Preparé el desayuno con mi madre.",
          },
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "と" }, { text: "写真", ruby: "しゃしん" }, { text: "を" }, { text: "見", ruby: "み" }, { text: "ました。" }],
            translation: "Vi fotos con mi amigo.",
          },
          {
            segments: [{ text: "クラスメート" }, { text: "と" }, { text: "発表", ruby: "はっぴょう" }, { text: "の" }, { text: "練習", ruby: "れんしゅう" }, { text: "を" }, { text: "しました。" }],
            translation: "Practiqué la presentación con un compañero de clase.",
          },
          {
            segments: [{ text: "家族", ruby: "かぞく" }, { text: "と" }, { text: "一緒", ruby: "いっしょ" }, { text: "に" }, { text: "海", ruby: "うみ" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きました。" }],
            translation: "Fui al mar junto con mi familia.",
          },
        ],
      },
      {
        title: "Citas textuales y pensamientos",
        examples: [
          {
            segments: [{ text: "彼", ruby: "かれ" }, { text: "は" }, { text: "「こんにちは」" }, { text: "と" }, { text: "言", ruby: "い" }, { text: "いました。" }],
            translation: "Él dijo 'Hola'.",
          },
          {
            segments: [{ text: "明日", ruby: "あした" }, { text: "は" }, { text: "雨", ruby: "あめ" }, { text: "だ" }, { text: "と" }, { text: "思", ruby: "おも" }, { text: "います。" }],
            translation: "Creo que mañana lloverá.",
          },
          {
            segments: [{ text: "先生", ruby: "せんせい" }, { text: "は" }, { text: "早", ruby: "はや" }, { text: "く" }, { text: "来", ruby: "く" }, { text: "る" }, { text: "と" }, { text: "言", ruby: "い" }, { text: "っていました。" }],
            translation: "El profesor dijo que vendría temprano.",
          },
          {
            segments: [{ text: "母", ruby: "はは" }, { text: "は" }, { text: "体", ruby: "からだ" }, { text: "に" }, { text: "気", ruby: "き" }, { text: "を" }, { text: "つけて" }, { text: "と" }, { text: "言", ruby: "い" }, { text: "いました。" }],
            translation: "Mi madre me dijo que me cuidara.",
          },
          {
            segments: [{ text: "その" }, { text: "店", ruby: "みせ" }, { text: "は" }, { text: "安", ruby: "やす" }, { text: "い" }, { text: "と" }, { text: "聞", ruby: "き" }, { text: "きました。" }],
            translation: "Escuché que esa tienda es barata.",
          },
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "は" }, { text: "「また" }, { text: "明日", ruby: "あした" }, { text: "ね」" }, { text: "と" }, { text: "言", ruby: "い" }, { text: "いました。" }],
            translation: "Mi amigo dijo 'Hasta mañana'.",
          },
          {
            segments: [{ text: "父", ruby: "ちち" }, { text: "は" }, { text: "「もう" }, { text: "大丈夫", ruby: "だいじょうぶ" }, { text: "だ」" }, { text: "と" }, { text: "言", ruby: "い" }, { text: "いました。" }],
            translation: "Mi padre dijo 'Ya está bien'.",
          },
          {
            segments: [{ text: "彼女", ruby: "かのじょ" }, { text: "は" }, { text: "「ありがとう」" }, { text: "と" }, { text: "言", ruby: "い" }, { text: "いました。" }],
            translation: "Ella dijo 'Gracias'.",
          },
          {
            segments: [{ text: "店員", ruby: "てんいん" }, { text: "さん" }, { text: "は" }, { text: "「こちらへどうぞ」" }, { text: "と" }, { text: "言", ruby: "い" }, { text: "いました。" }],
            translation: "El dependiente dijo 'Por aquí, por favor'.",
          },
          {
            segments: [{ text: "先生", ruby: "せんせい" }, { text: "は" }, { text: "「" }, { text: "静", ruby: "しず" }, { text: "か" }, { text: "に" }, { text: "してください」" }, { text: "と" }, { text: "言", ruby: "い" }, { text: "いました。" }],
            translation: "El profesor dijo 'Por favor, guarden silencio'.",
          },
          {
            segments: [{ text: "兄", ruby: "あに" }, { text: "は" }, { text: "今日", ruby: "きょう" }, { text: "は" }, { text: "行", ruby: "い" }, { text: "かない" }, { text: "と" }, { text: "言", ruby: "い" }, { text: "っていました。" }],
            translation: "Mi hermano mayor dijo que hoy no iba a ir.",
          },
          {
            segments: [{ text: "母", ruby: "はは" }, { text: "は" }, { text: "晩", ruby: "ばん" }, { text: "ご" }, { text: "飯", ruby: "はん" }, { text: "は" }, { text: "カレー" }, { text: "だ" }, { text: "と" }, { text: "言", ruby: "い" }, { text: "っていました。" }],
            translation: "Mi madre dijo que la cena sería curry.",
          },
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "は" }, { text: "明日", ruby: "あした" }, { text: "は" }, { text: "忙", ruby: "いそが" }, { text: "しい" }, { text: "と" }, { text: "言", ruby: "い" }, { text: "っていました。" }],
            translation: "Mi amigo dijo que mañana estaría ocupado.",
          },
          {
            segments: [{ text: "ニュース" }, { text: "で" }, { text: "明日", ruby: "あした" }, { text: "は" }, { text: "暑", ruby: "あつ" }, { text: "く" }, { text: "なる" }, { text: "と" }, { text: "言", ruby: "い" }, { text: "っていました。" }],
            translation: "En las noticias dijeron que mañana hará más calor.",
          },
          {
            segments: [{ text: "彼", ruby: "かれ" }, { text: "は" }, { text: "あとで" }, { text: "電話", ruby: "でんわ" }, { text: "する" }, { text: "と" }, { text: "言", ruby: "い" }, { text: "っていました。" }],
            translation: "Él dijo que llamaría más tarde.",
          },
          {
            segments: [{ text: "私", ruby: "わたし" }, { text: "は" }, { text: "この" }, { text: "本", ruby: "ほん" }, { text: "は" }, { text: "面白", ruby: "おもしろ" }, { text: "い" }, { text: "と" }, { text: "思", ruby: "おも" }, { text: "います。" }],
            translation: "Creo que este libro es interesante.",
          },
          {
            segments: [{ text: "彼", ruby: "かれ" }, { text: "は" }, { text: "来", ruby: "こ" }, { text: "ない" }, { text: "と" }, { text: "思", ruby: "おも" }, { text: "います。" }],
            translation: "Creo que él no vendrá.",
          },
          {
            segments: [{ text: "この" }, { text: "問題", ruby: "もんだい" }, { text: "は" }, { text: "難", ruby: "むずか" }, { text: "しい" }, { text: "と" }, { text: "思", ruby: "おも" }, { text: "います。" }],
            translation: "Creo que este problema es difícil.",
          },
          {
            segments: [{ text: "日本語", ruby: "にほんご" }, { text: "は" }, { text: "まだ" }, { text: "難", ruby: "むずか" }, { text: "しい" }, { text: "と" }, { text: "思", ruby: "おも" }, { text: "っています。" }],
            translation: "Sigo pensando que el japonés es difícil.",
          },
          {
            segments: [{ text: "明日", ruby: "あした" }, { text: "は" }, { text: "たぶん" }, { text: "晴", ruby: "は" }, { text: "れる" }, { text: "と" }, { text: "思", ruby: "おも" }, { text: "います。" }],
            translation: "Creo que mañana probablemente estará despejado.",
          },
          {
            segments: [{ text: "彼女", ruby: "かのじょ" }, { text: "は" }, { text: "もう" }, { text: "知", ruby: "し" }, { text: "っている" }, { text: "と" }, { text: "思", ruby: "おも" }, { text: "います。" }],
            translation: "Creo que ella ya lo sabe.",
          },
          {
            segments: [{ text: "私", ruby: "わたし" }, { text: "は" }, { text: "この" }, { text: "やり" }, { text: "方", ruby: "かた" }, { text: "で" }, { text: "いい" }, { text: "と" }, { text: "思", ruby: "おも" }, { text: "います。" }],
            translation: "Creo que esta forma está bien.",
          },
          {
            segments: [{ text: "天気予報", ruby: "てんきよほう" }, { text: "で" }, { text: "今夜", ruby: "こんや" }, { text: "は" }, { text: "雪", ruby: "ゆき" }, { text: "だ" }, { text: "と" }, { text: "言", ruby: "い" }, { text: "っていました。" }],
            translation: "En el pronóstico dijeron que esta noche nevará.",
          },
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "から" }, { text: "この" }, { text: "映画", ruby: "えいが" }, { text: "は" }, { text: "とても" }, { text: "面白", ruby: "おもしろ" }, { text: "い" }, { text: "と" }, { text: "聞", ruby: "き" }, { text: "きました。" }],
            translation: "Escuché de un amigo que esta película es muy interesante.",
          },
          {
            segments: [{ text: "先生", ruby: "せんせい" }, { text: "から" }, { text: "来週", ruby: "らいしゅう" }, { text: "テスト" }, { text: "が" }, { text: "ある" }, { text: "と" }, { text: "聞", ruby: "き" }, { text: "きました。" }],
            translation: "Escuché del profesor que la próxima semana habrá prueba.",
          },
          {
            segments: [{ text: "ニュース" }, { text: "で" }, { text: "その" }, { text: "道", ruby: "みち" }, { text: "は" }, { text: "危険", ruby: "きけん" }, { text: "だ" }, { text: "と" }, { text: "聞", ruby: "き" }, { text: "きました。" }],
            translation: "Escuché en las noticias que ese camino es peligroso.",
          },
          {
            segments: [{ text: "あの" }, { text: "店", ruby: "みせ" }, { text: "の" }, { text: "ラーメン" }, { text: "は" }, { text: "おいしい" }, { text: "と" }, { text: "聞", ruby: "き" }, { text: "きました。" }],
            translation: "Escuché que el ramen de ese local es rico.",
          },
          {
            segments: [{ text: "駅", ruby: "えき" }, { text: "の" }, { text: "前", ruby: "まえ" }, { text: "に" }, { text: "新", ruby: "あたら" }, { text: "しい" }, { text: "カフェ" }, { text: "が" }, { text: "できた" }, { text: "と" }, { text: "聞", ruby: "き" }, { text: "きました。" }],
            translation: "Escuché que abrieron una cafetería nueva frente a la estación.",
          },
          {
            segments: [{ text: "ドア" }, { text: "に" }, { text: "「" }, { text: "入", ruby: "はい" }, { text: "らないでください」" }, { text: "と" }, { text: "書", ruby: "か" }, { text: "いてありました。" }],
            translation: "En la puerta estaba escrito 'Por favor, no entrar'.",
          },
          {
            segments: [{ text: "紙", ruby: "かみ" }, { text: "に" }, { text: "名前", ruby: "なまえ" }, { text: "を" }, { text: "書", ruby: "か" }, { text: "いてください" }, { text: "と" }, { text: "書", ruby: "か" }, { text: "いてありました。" }],
            translation: "En el papel decía 'Por favor, escriba su nombre'.",
          },
        ],
      },
      {
        title: "Condiciones y resultados automáticos",
        examples: [
          {
            segments: [{ text: "ボタン" }, { text: "を" }, { text: "押", ruby: "お" }, { text: "す" }, { text: "と、" }, { text: "ドア" }, { text: "が" }, { text: "開", ruby: "あ" }, { text: "きます。" }],
            translation: "Si presionas el botón, la puerta se abrirá.",
          },
          {
            segments: [{ text: "春", ruby: "はる" }, { text: "に" }, { text: "なる" }, { text: "と、" }, { text: "桜", ruby: "さくら" }, { text: "が" }, { text: "咲", ruby: "さ" }, { text: "きます。" }],
            translation: "Cuando llega la primavera, los cerezos florecen.",
          },
          {
            segments: [{ text: "左", ruby: "ひだり" }, { text: "へ" }, { text: "曲", ruby: "ま" }, { text: "がる" }, { text: "と、" }, { text: "駅", ruby: "えき" }, { text: "が" }, { text: "あります。" }],
            translation: "Si giras a la izquierda, está la estación.",
          },
          {
            segments: [{ text: "夜", ruby: "よる" }, { text: "に" }, { text: "なる" }, { text: "と、" }, { text: "寒", ruby: "さむ" }, { text: "く" }, { text: "なります。" }],
            translation: "Cuando llega la noche, hace más frío.",
          },
          {
            segments: [{ text: "この" }, { text: "道", ruby: "みち" }, { text: "を" }, { text: "まっすぐ" }, { text: "行", ruby: "い" }, { text: "く" }, { text: "と、" }, { text: "公園", ruby: "こうえん" }, { text: "が" }, { text: "あります。" }],
            translation: "Si sigues derecho por este camino, hay un parque.",
          },
          {
            segments: [{ text: "朝", ruby: "あさ" }, { text: "に" }, { text: "なる" }, { text: "と、" }, { text: "鳥", ruby: "とり" }, { text: "が" }, { text: "鳴", ruby: "な" }, { text: "きます。" }],
            translation: "Cuando llega la mañana, los pájaros cantan.",
          },
          {
            segments: [{ text: "夏", ruby: "なつ" }, { text: "に" }, { text: "なる" }, { text: "と、" }, { text: "暑", ruby: "あつ" }, { text: "く" }, { text: "なります。" }],
            translation: "Cuando llega el verano, hace calor.",
          },
          {
            segments: [{ text: "秋", ruby: "あき" }, { text: "に" }, { text: "なる" }, { text: "と、" }, { text: "葉", ruby: "は" }, { text: "が" }, { text: "赤", ruby: "あか" }, { text: "く" }, { text: "なります。" }],
            translation: "Cuando llega el otoño, las hojas se ponen rojas.",
          },
          {
            segments: [{ text: "冬", ruby: "ふゆ" }, { text: "に" }, { text: "なる" }, { text: "と、" }, { text: "雪", ruby: "ゆき" }, { text: "が" }, { text: "降", ruby: "ふ" }, { text: "ります。" }],
            translation: "Cuando llega el invierno, nieva.",
          },
          {
            segments: [{ text: "この" }, { text: "スイッチ" }, { text: "を" }, { text: "入", ruby: "い" }, { text: "れる" }, { text: "と、" }, { text: "電気", ruby: "でんき" }, { text: "が" }, { text: "つきます。" }],
            translation: "Si enciendes este interruptor, la luz se prende.",
          },
          {
            segments: [{ text: "この" }, { text: "アプリ" }, { text: "を" }, { text: "開", ruby: "ひら" }, { text: "く" }, { text: "と、" }, { text: "ホーム" }, { text: "画面", ruby: "がめん" }, { text: "が" }, { text: "出", ruby: "で" }, { text: "ます。" }],
            translation: "Si abres esta aplicación, aparece la pantalla principal.",
          },
          {
            segments: [{ text: "ここ" }, { text: "を" }, { text: "押", ruby: "お" }, { text: "す" }, { text: "と、" }, { text: "音", ruby: "おと" }, { text: "が" }, { text: "出", ruby: "で" }, { text: "ます。" }],
            translation: "Si presionas aquí, sale sonido.",
          },
          {
            segments: [{ text: "窓", ruby: "まど" }, { text: "を" }, { text: "開", ruby: "あ" }, { text: "ける" }, { text: "と、" }, { text: "風", ruby: "かぜ" }, { text: "が" }, { text: "入", ruby: "はい" }, { text: "ってきます。" }],
            translation: "Si abres la ventana, entra el viento.",
          },
          {
            segments: [{ text: "ドア" }, { text: "を" }, { text: "開", ruby: "あ" }, { text: "ける" }, { text: "と、" }, { text: "猫", ruby: "ねこ" }, { text: "が" }, { text: "出", ruby: "で" }, { text: "てきます。" }],
            translation: "Si abres la puerta, sale el gato.",
          },
          {
            segments: [{ text: "駅", ruby: "えき" }, { text: "を" }, { text: "出", ruby: "で" }, { text: "る" }, { text: "と、" }, { text: "右", ruby: "みぎ" }, { text: "に" }, { text: "銀行", ruby: "ぎんこう" }, { text: "が" }, { text: "あります。" }],
            translation: "Si sales de la estación, a la derecha hay un banco.",
          },
          {
            segments: [{ text: "信号", ruby: "しんごう" }, { text: "を" }, { text: "右", ruby: "みぎ" }, { text: "へ" }, { text: "曲", ruby: "ま" }, { text: "がる" }, { text: "と、" }, { text: "病院", ruby: "びょういん" }, { text: "が" }, { text: "あります。" }],
            translation: "Si giras a la derecha en el semáforo, hay un hospital.",
          },
          {
            segments: [{ text: "この" }, { text: "道", ruby: "みち" }, { text: "を" }, { text: "行", ruby: "い" }, { text: "く" }, { text: "と、" }, { text: "海", ruby: "うみ" }, { text: "が" }, { text: "見", ruby: "み" }, { text: "えます。" }],
            translation: "Si sigues este camino, se ve el mar.",
          },
          {
            segments: [{ text: "三月", ruby: "さんがつ" }, { text: "に" }, { text: "なる" }, { text: "と、" }, { text: "卒業式", ruby: "そつぎょうしき" }, { text: "が" }, { text: "あります。" }],
            translation: "Cuando llega marzo, hay ceremonia de graduación.",
          },
          {
            segments: [{ text: "十時", ruby: "じゅうじ" }, { text: "に" }, { text: "なる" }, { text: "と、" }, { text: "店", ruby: "みせ" }, { text: "が" }, { text: "開", ruby: "あ" }, { text: "きます。" }],
            translation: "Cuando son las 10, la tienda abre.",
          },
          {
            segments: [{ text: "五時", ruby: "ごじ" }, { text: "に" }, { text: "なる" }, { text: "と、" }, { text: "店", ruby: "みせ" }, { text: "が" }, { text: "閉", ruby: "し" }, { text: "まります。" }],
            translation: "Cuando son las 5, la tienda cierra.",
          },
          {
            segments: [{ text: "雨", ruby: "あめ" }, { text: "が" }, { text: "降", ruby: "ふ" }, { text: "る" }, { text: "と、" }, { text: "道", ruby: "みち" }, { text: "が" }, { text: "すべりやすく" }, { text: "なります。" }],
            translation: "Cuando llueve, el camino se vuelve resbaladizo.",
          },
          {
            segments: [{ text: "気温", ruby: "きおん" }, { text: "が" }, { text: "下", ruby: "さ" }, { text: "がる" }, { text: "と、" }, { text: "水", ruby: "みず" }, { text: "が" }, { text: "冷", ruby: "つめ" }, { text: "たく" }, { text: "なります。" }],
            translation: "Cuando baja la temperatura, el agua se enfría.",
          },
          {
            segments: [{ text: "気温", ruby: "きおん" }, { text: "が" }, { text: "上", ruby: "あ" }, { text: "がる" }, { text: "と、" }, { text: "氷", ruby: "こおり" }, { text: "が" }, { text: "溶", ruby: "と" }, { text: "けます。" }],
            translation: "Cuando sube la temperatura, el hielo se derrite.",
          },
          {
            segments: [{ text: "春", ruby: "はる" }, { text: "に" }, { text: "なる" }, { text: "と、" }, { text: "花粉", ruby: "かふん" }, { text: "が" }, { text: "多", ruby: "おお" }, { text: "く" }, { text: "なります。" }],
            translation: "Cuando llega la primavera, aumenta el polen.",
          },
          {
            segments: [{ text: "この" }, { text: "ボタン" }, { text: "を" }, { text: "押", ruby: "お" }, { text: "す" }, { text: "と、" }, { text: "画面", ruby: "がめん" }, { text: "が" }, { text: "変", ruby: "か" }, { text: "わります。" }],
            translation: "Si presionas este botón, la pantalla cambia.",
          },
          {
            segments: [{ text: "パソコン" }, { text: "を" }, { text: "つける" }, { text: "と、" }, { text: "ファン" }, { text: "の" }, { text: "音", ruby: "おと" }, { text: "が" }, { text: "聞", ruby: "き" }, { text: "こえます。" }],
            translation: "Si enciendes la computadora, se escucha el ventilador.",
          },
          {
            segments: [{ text: "右", ruby: "みぎ" }, { text: "の" }, { text: "ドア" }, { text: "を" }, { text: "開", ruby: "あ" }, { text: "ける" }, { text: "と、" }, { text: "トイレ" }, { text: "です。" }],
            translation: "Si abres la puerta de la derecha, está el baño.",
          },
          {
            segments: [{ text: "この" }, { text: "道", ruby: "みち" }, { text: "を" }, { text: "まっすぐ" }, { text: "歩", ruby: "ある" }, { text: "く" }, { text: "と、" }, { text: "大", ruby: "おお" }, { text: "きい" }, { text: "橋", ruby: "はし" }, { text: "が" }, { text: "あります。" }],
            translation: "Si caminas derecho por este camino, hay un puente grande.",
          },
          {
            segments: [{ text: "春", ruby: "はる" }, { text: "に" }, { text: "なる" }, { text: "と、" }, { text: "暖", ruby: "あたた" }, { text: "かく" }, { text: "なります。" }],
            translation: "Cuando llega la primavera, se vuelve más cálido.",
          },
          {
            segments: [{ text: "この" }, { text: "薬", ruby: "くすり" }, { text: "を" }, { text: "飲", ruby: "の" }, { text: "む" }, { text: "と、" }, { text: "少", ruby: "すこ" }, { text: "し" }, { text: "眠", ruby: "ねむ" }, { text: "く" }, { text: "なります。" }],
            translation: "Si tomas este medicamento, te da un poco de sueño.",
          },
        ],
      },
    ],
  },

  // ─── も (mo) ───────────────────────────────────────────────────────────────
  {
    particle: "も (mo)",
    symbol: "も",
    romaji: "mo",
    summary: "Indica inclusión, equivalencia o énfasis. Según el contexto puede significar 'también', 'tampoco', 'ni siquiera' o remarcar cantidad.",
    uses: [
      {
        title: "Inclusión — 'también'",
        examples: [
          {
            segments: [{ text: "私", ruby: "わたし" }, { text: "も" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Yo también voy.",
          },
          {
            segments: [{ text: "田中", ruby: "たなか" }, { text: "さん" }, { text: "も" }, { text: "来", ruby: "き" }, { text: "ます。" }],
            translation: "El señor Tanaka también viene.",
          },
          {
            segments: [{ text: "この" }, { text: "店", ruby: "みせ" }, { text: "も" }, { text: "安", ruby: "やす" }, { text: "いです。" }],
            translation: "Esta tienda también es barata.",
          },
          {
            segments: [{ text: "兄", ruby: "あに" }, { text: "も" }, { text: "日本語", ruby: "にほんご" }, { text: "を" }, { text: "勉強", ruby: "べんきょう" }, { text: "しています。" }],
            translation: "Mi hermano mayor también estudia japonés.",
          },
          {
            segments: [{ text: "明日", ruby: "あした" }, { text: "も" }, { text: "仕事", ruby: "しごと" }, { text: "です。" }],
            translation: "Mañana también hay trabajo.",
          },
          {
            segments: [{ text: "私", ruby: "わたし" }, { text: "も" }, { text: "学生", ruby: "がくせい" }, { text: "です。" }],
            translation: "Yo también soy estudiante.",
          },
          {
            segments: [{ text: "母", ruby: "はは" }, { text: "も" }, { text: "元気", ruby: "げんき" }, { text: "です。" }],
            translation: "Mi madre también está bien.",
          },
          {
            segments: [{ text: "父", ruby: "ちち" }, { text: "も" }, { text: "家", ruby: "いえ" }, { text: "に" }, { text: "います。" }],
            translation: "Mi padre también está en casa.",
          },
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "も" }, { text: "映画", ruby: "えいが" }, { text: "を" }, { text: "見", ruby: "み" }, { text: "ます。" }],
            translation: "Mi amigo también ve películas.",
          },
          {
            segments: [{ text: "弟", ruby: "おとうと" }, { text: "も" }, { text: "来週", ruby: "らいしゅう" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Mi hermano menor también irá la próxima semana.",
          },
          {
            segments: [{ text: "先生", ruby: "せんせい" }, { text: "も" }, { text: "来", ruby: "き" }, { text: "ました。" }],
            translation: "El profesor también vino.",
          },
          {
            segments: [{ text: "彼", ruby: "かれ" }, { text: "も" }, { text: "忙", ruby: "いそが" }, { text: "しいです。" }],
            translation: "Él también está ocupado.",
          },
          {
            segments: [{ text: "彼女", ruby: "かのじょ" }, { text: "も" }, { text: "日本人", ruby: "にほんじん" }, { text: "です。" }],
            translation: "Ella también es japonesa.",
          },
          {
            segments: [{ text: "この" }, { text: "本", ruby: "ほん" }, { text: "も" }, { text: "面白", ruby: "おもしろ" }, { text: "いです。" }],
            translation: "Este libro también es interesante.",
          },
          {
            segments: [{ text: "その" }, { text: "映画", ruby: "えいが" }, { text: "も" }, { text: "長", ruby: "なが" }, { text: "いです。" }],
            translation: "Esa película también es larga.",
          },
          {
            segments: [{ text: "今日", ruby: "きょう" }, { text: "も" }, { text: "暑", ruby: "あつ" }, { text: "いです。" }],
            translation: "Hoy también hace calor.",
          },
          {
            segments: [{ text: "土曜日", ruby: "どようび" }, { text: "も" }, { text: "学校", ruby: "がっこう" }, { text: "が" }, { text: "あります。" }],
            translation: "El sábado también hay clases.",
          },
          {
            segments: [{ text: "来年", ruby: "らいねん" }, { text: "も" }, { text: "日本", ruby: "にほん" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きたいです。" }],
            translation: "El próximo año también quiero ir a Japón.",
          },
          {
            segments: [{ text: "私", ruby: "わたし" }, { text: "の" }, { text: "犬", ruby: "いぬ" }, { text: "も" }, { text: "元気", ruby: "げんき" }, { text: "です。" }],
            translation: "Mi perro también está bien.",
          },
          {
            segments: [{ text: "日本語", ruby: "にほんご" }, { text: "も" }, { text: "英語", ruby: "えいご" }, { text: "も" }, { text: "好", ruby: "す" }, { text: "きです。" }],
            translation: "Me gustan tanto el japonés como el inglés.",
          },
          {
            segments: [{ text: "水", ruby: "みず" }, { text: "も" }, { text: "買", ruby: "か" }, { text: "いました。" }],
            translation: "También compré agua.",
          },
          {
            segments: [{ text: "パン" }, { text: "も" }, { text: "食", ruby: "た" }, { text: "べます。" }],
            translation: "También como pan.",
          },
          {
            segments: [{ text: "コーヒー" }, { text: "も" }, { text: "飲", ruby: "の" }, { text: "みます。" }],
            translation: "También tomo café.",
          },
          {
            segments: [{ text: "姉", ruby: "あね" }, { text: "も" }, { text: "歌", ruby: "うた" }, { text: "が" }, { text: "上手", ruby: "じょうず" }, { text: "です。" }],
            translation: "Mi hermana mayor también canta bien.",
          },
          {
            segments: [{ text: "山田", ruby: "やまだ" }, { text: "さん" }, { text: "も" }, { text: "先生", ruby: "せんせい" }, { text: "です。" }],
            translation: "Yamada también es profesor.",
          },
          {
            segments: [{ text: "この" }, { text: "かばん" }, { text: "も" }, { text: "便利", ruby: "べんり" }, { text: "です。" }],
            translation: "Este bolso también es práctico.",
          },
          {
            segments: [{ text: "駅", ruby: "えき" }, { text: "も" }, { text: "近", ruby: "ちか" }, { text: "いです。" }],
            translation: "La estación también queda cerca.",
          },
          {
            segments: [{ text: "私", ruby: "わたし" }, { text: "も" }, { text: "それ" }, { text: "を" }, { text: "知", ruby: "し" }, { text: "っています。" }],
            translation: "Yo también sé eso.",
          },
          {
            segments: [{ text: "子", ruby: "こ" }, { text: "ども" }, { text: "も" }, { text: "公園", ruby: "こうえん" }, { text: "で" }, { text: "遊", ruby: "あそ" }, { text: "んでいます。" }],
            translation: "Los niños también están jugando en el parque.",
          },
          {
            segments: [{ text: "今日", ruby: "きょう" }, { text: "も" }, { text: "日本語", ruby: "にほんご" }, { text: "を" }, { text: "勉強", ruby: "べんきょう" }, { text: "します。" }],
            translation: "Hoy también estudiaré japonés.",
          },
        ],
      },
      {
        title: "Negación incluida — 'tampoco' / 'ni'",
        examples: [
          {
            segments: [{ text: "私", ruby: "わたし" }, { text: "も" }, { text: "行", ruby: "い" }, { text: "きません。" }],
            translation: "Yo tampoco voy.",
          },
          {
            segments: [{ text: "コーヒー" }, { text: "も" }, { text: "お茶", ruby: "おちゃ" }, { text: "も" }, { text: "飲", ruby: "の" }, { text: "みません。" }],
            translation: "No bebo café ni té.",
          },
          {
            segments: [{ text: "兄", ruby: "あに" }, { text: "も" }, { text: "姉", ruby: "あね" }, { text: "も" }, { text: "来", ruby: "き" }, { text: "ませんでした。" }],
            translation: "Ni mi hermano mayor ni mi hermana vinieron.",
          },
          {
            segments: [{ text: "一円", ruby: "いちえん" }, { text: "も" }, { text: "ありません。" }],
            translation: "No tengo ni un yen.",
          },
          {
            segments: [{ text: "何", ruby: "なに" }, { text: "も" }, { text: "見", ruby: "み" }, { text: "えません。" }],
            translation: "No veo nada.",
          },
          {
            segments: [{ text: "私", ruby: "わたし" }, { text: "も" }, { text: "知", ruby: "し" }, { text: "りません。" }],
            translation: "Yo tampoco lo sé.",
          },
          {
            segments: [{ text: "田中", ruby: "たなか" }, { text: "さん" }, { text: "も" }, { text: "来", ruby: "き" }, { text: "ません。" }],
            translation: "Tanaka tampoco viene.",
          },
          {
            segments: [{ text: "今日", ruby: "きょう" }, { text: "も" }, { text: "休", ruby: "やす" }, { text: "めません。" }],
            translation: "Hoy tampoco puedo descansar.",
          },
          {
            segments: [{ text: "日曜日", ruby: "にちようび" }, { text: "も" }, { text: "仕事", ruby: "しごと" }, { text: "が" }, { text: "ありません。" }],
            translation: "El domingo tampoco hay trabajo.",
          },
          {
            segments: [{ text: "父", ruby: "ちち" }, { text: "も" }, { text: "母", ruby: "はは" }, { text: "も" }, { text: "家", ruby: "いえ" }, { text: "に" }, { text: "いません。" }],
            translation: "Ni mi padre ni mi madre están en casa.",
          },
          {
            segments: [{ text: "パン" }, { text: "も" }, { text: "ご" }, { text: "飯", ruby: "はん" }, { text: "も" }, { text: "食", ruby: "た" }, { text: "べませんでした。" }],
            translation: "No comí ni pan ni arroz.",
          },
          {
            segments: [{ text: "テレビ" }, { text: "も" }, { text: "映画", ruby: "えいが" }, { text: "も" }, { text: "見", ruby: "み" }, { text: "ません。" }],
            translation: "No veo ni televisión ni películas.",
          },
          {
            segments: [{ text: "日本語", ruby: "にほんご" }, { text: "も" }, { text: "英語", ruby: "えいご" }, { text: "も" }, { text: "話", ruby: "はな" }, { text: "せません。" }],
            translation: "No puedo hablar ni japonés ni inglés.",
          },
          {
            segments: [{ text: "一人", ruby: "ひとり" }, { text: "も" }, { text: "いません。" }],
            translation: "No hay ni una sola persona.",
          },
          {
            segments: [{ text: "一つ" }, { text: "も" }, { text: "分", ruby: "わ" }, { text: "かりません。" }],
            translation: "No entiendo ni una sola cosa.",
          },
          {
            segments: [{ text: "一回", ruby: "いっかい" }, { text: "も" }, { text: "行", ruby: "い" }, { text: "った" }, { text: "こと" }, { text: "が" }, { text: "ありません。" }],
            translation: "No he ido ni una sola vez.",
          },
          {
            segments: [{ text: "一度", ruby: "いちど" }, { text: "も" }, { text: "食", ruby: "た" }, { text: "べた" }, { text: "こと" }, { text: "が" }, { text: "ありません。" }],
            translation: "No lo he comido ni una sola vez.",
          },
          {
            segments: [{ text: "だれ" }, { text: "も" }, { text: "来", ruby: "き" }, { text: "ませんでした。" }],
            translation: "No vino nadie.",
          },
          {
            segments: [{ text: "どこ" }, { text: "に" }, { text: "も" }, { text: "行", ruby: "い" }, { text: "きません。" }],
            translation: "No voy a ninguna parte.",
          },
          {
            segments: [{ text: "何", ruby: "なに" }, { text: "も" }, { text: "食", ruby: "た" }, { text: "べませんでした。" }],
            translation: "No comí nada.",
          },
          {
            segments: [{ text: "何", ruby: "なに" }, { text: "も" }, { text: "言", ruby: "い" }, { text: "いませんでした。" }],
            translation: "No dije nada.",
          },
          {
            segments: [{ text: "何", ruby: "なに" }, { text: "も" }, { text: "ありません。" }],
            translation: "No hay nada.",
          },
          {
            segments: [{ text: "だれ" }, { text: "も" }, { text: "知", ruby: "し" }, { text: "りません。" }],
            translation: "Nadie lo sabe.",
          },
          {
            segments: [{ text: "どちら" }, { text: "も" }, { text: "好", ruby: "す" }, { text: "きではありません。" }],
            translation: "No me gusta ninguna de las dos opciones.",
          },
          {
            segments: [{ text: "どちら" }, { text: "も" }, { text: "分", ruby: "わ" }, { text: "かりません。" }],
            translation: "No entiendo ninguna de las dos.",
          },
          {
            segments: [{ text: "どれ" }, { text: "も" }, { text: "高", ruby: "たか" }, { text: "くありません。" }],
            translation: "Ninguno es caro.",
          },
          {
            segments: [{ text: "一文字", ruby: "いちもじ" }, { text: "も" }, { text: "読", ruby: "よ" }, { text: "めません。" }],
            translation: "No puedo leer ni un solo carácter.",
          },
          {
            segments: [{ text: "一分", ruby: "いっぷん" }, { text: "も" }, { text: "待", ruby: "ま" }, { text: "てません。" }],
            translation: "No puedo esperar ni un minuto.",
          },
          {
            segments: [{ text: "お" }, { text: "金", ruby: "かね" }, { text: "が" }, { text: "千円", ruby: "せんえん" }, { text: "も" }, { text: "ありません。" }],
            translation: "No tengo ni mil yenes.",
          },
          {
            segments: [{ text: "その" }, { text: "店", ruby: "みせ" }, { text: "は" }, { text: "土曜日", ruby: "どようび" }, { text: "も" }, { text: "日曜日", ruby: "にちようび" }, { text: "も" }, { text: "開", ruby: "あ" }, { text: "きません。" }],
            translation: "Ese local no abre ni sábado ni domingo.",
          },
        ],
      },
      {
        title: "Énfasis de cantidad o grado",
        examples: [
          {
            segments: [{ text: "昨日", ruby: "きのう" }, { text: "は" }, { text: "三時間", ruby: "さんじかん" }, { text: "も" }, { text: "勉強", ruby: "べんきょう" }, { text: "しました。" }],
            translation: "Ayer estudié nada menos que tres horas.",
          },
          {
            segments: [{ text: "この" }, { text: "かばん" }, { text: "は" }, { text: "一万円", ruby: "いちまんえん" }, { text: "も" }, { text: "しました。" }],
            translation: "Este bolso costó hasta diez mil yenes.",
          },
          {
            segments: [{ text: "彼", ruby: "かれ" }, { text: "は" }, { text: "十", ruby: "じゅう" }, { text: "キロ" }, { text: "も" }, { text: "走", ruby: "はし" }, { text: "りました。" }],
            translation: "Él corrió hasta diez kilómetros.",
          },
          {
            segments: [{ text: "まだ" }, { text: "五分", ruby: "ごふん" }, { text: "も" }, { text: "たっていません。" }],
            translation: "Todavía no han pasado ni cinco minutos.",
          },
          {
            segments: [{ text: "彼女", ruby: "かのじょ" }, { text: "は" }, { text: "日本語", ruby: "にほんご" }, { text: "も" }, { text: "英語", ruby: "えいご" }, { text: "も" }, { text: "話", ruby: "はな" }, { text: "せます。" }],
            translation: "Ella puede hablar tanto japonés como inglés.",
          },
          {
            segments: [{ text: "今日", ruby: "きょう" }, { text: "は" }, { text: "宿題", ruby: "しゅくだい" }, { text: "が" }, { text: "五", ruby: "いつ" }, { text: "つ" }, { text: "も" }, { text: "あります。" }],
            translation: "Hoy tengo nada menos que cinco tareas.",
          },
          {
            segments: [{ text: "この" }, { text: "部屋", ruby: "へや" }, { text: "に" }, { text: "は" }, { text: "十人", ruby: "じゅうにん" }, { text: "も" }, { text: "います。" }],
            translation: "En esta habitación hay hasta diez personas.",
          },
          {
            segments: [{ text: "彼", ruby: "かれ" }, { text: "は" }, { text: "一日", ruby: "いちにち" }, { text: "に" }, { text: "コーヒー" }, { text: "を" }, { text: "五杯", ruby: "ごはい" }, { text: "も" }, { text: "飲", ruby: "の" }, { text: "みます。" }],
            translation: "Él toma hasta cinco tazas de café al día.",
          },
          {
            segments: [{ text: "週末", ruby: "しゅうまつ" }, { text: "に" }, { text: "本", ruby: "ほん" }, { text: "を" }, { text: "三冊", ruby: "さんさつ" }, { text: "も" }, { text: "読", ruby: "よ" }, { text: "みました。" }],
            translation: "El fin de semana leí nada menos que tres libros.",
          },
          {
            segments: [{ text: "この" }, { text: "道", ruby: "みち" }, { text: "を" }, { text: "一時間", ruby: "いちじかん" }, { text: "も" }, { text: "歩", ruby: "ある" }, { text: "きました。" }],
            translation: "Caminé por este camino durante nada menos que una hora.",
          },
          {
            segments: [{ text: "彼", ruby: "かれ" }, { text: "は" }, { text: "漢字", ruby: "かんじ" }, { text: "を" }, { text: "百字", ruby: "ひゃくじ" }, { text: "も" }, { text: "覚", ruby: "おぼ" }, { text: "えました。" }],
            translation: "Él memorizó hasta cien kanji.",
          },
          {
            segments: [{ text: "今日", ruby: "きょう" }, { text: "は" }, { text: "十時間", ruby: "じゅうじかん" }, { text: "も" }, { text: "寝", ruby: "ね" }, { text: "ました。" }],
            translation: "Hoy dormí nada menos que diez horas.",
          },
          {
            segments: [{ text: "まだ" }, { text: "三", ruby: "さん" }, { text: "ページ" }, { text: "も" }, { text: "読", ruby: "よ" }, { text: "んでいません。" }],
            translation: "Todavía no he leído ni tres páginas.",
          },
          {
            segments: [{ text: "財布", ruby: "さいふ" }, { text: "に" }, { text: "千円", ruby: "せんえん" }, { text: "も" }, { text: "入", ruby: "はい" }, { text: "っていません。" }],
            translation: "No tengo ni mil yenes en la billetera.",
          },
          {
            segments: [{ text: "彼女", ruby: "かのじょ" }, { text: "は" }, { text: "一人", ruby: "ひとり" }, { text: "で" }, { text: "二時間", ruby: "にじかん" }, { text: "も" }, { text: "練習", ruby: "れんしゅう" }, { text: "しました。" }],
            translation: "Ella practicó sola nada menos que dos horas.",
          },
          {
            segments: [{ text: "この" }, { text: "店", ruby: "みせ" }, { text: "は" }, { text: "昼", ruby: "ひる" }, { text: "でも" }, { text: "三十分", ruby: "さんじゅっぷん" }, { text: "も" }, { text: "待", ruby: "ま" }, { text: "ちます。" }],
            translation: "En este local incluso al mediodía se espera hasta treinta minutos.",
          },
          {
            segments: [{ text: "そんな" }, { text: "に" }, { text: "も" }, { text: "心配", ruby: "しんぱい" }, { text: "しないでください。" }],
            translation: "Por favor, no se preocupe tanto.",
          },
          {
            segments: [{ text: "この" }, { text: "問題", ruby: "もんだい" }, { text: "は" }, { text: "そんな" }, { text: "に" }, { text: "も" }, { text: "難", ruby: "むずか" }, { text: "しくありません。" }],
            translation: "Este problema no es tan difícil.",
          },
          {
            segments: [{ text: "今日", ruby: "きょう" }, { text: "は" }, { text: "雨", ruby: "あめ" }, { text: "が" }, { text: "そんな" }, { text: "に" }, { text: "も" }, { text: "強", ruby: "つよ" }, { text: "くありません。" }],
            translation: "Hoy la lluvia no está tan fuerte.",
          },
          {
            segments: [{ text: "駅", ruby: "えき" }, { text: "まで" }, { text: "は" }, { text: "そんな" }, { text: "に" }, { text: "も" }, { text: "遠", ruby: "とお" }, { text: "くありません。" }],
            translation: "Hasta la estación no está tan lejos.",
          },
          {
            segments: [{ text: "彼", ruby: "かれ" }, { text: "は" }, { text: "一か月", ruby: "いっかげつ" }, { text: "で" }, { text: "五キロ" }, { text: "も" }, { text: "やせました。" }],
            translation: "Él bajó nada menos que cinco kilos en un mes.",
          },
          {
            segments: [{ text: "この" }, { text: "ノート" }, { text: "は" }, { text: "五百", ruby: "ごひゃく" }, { text: "ページ" }, { text: "も" }, { text: "あります。" }],
            translation: "Este cuaderno tiene hasta quinientas páginas.",
          },
          {
            segments: [{ text: "兄", ruby: "あに" }, { text: "は" }, { text: "一晩", ruby: "ひとばん" }, { text: "で" }, { text: "ゲーム" }, { text: "を" }, { text: "十時間", ruby: "じゅうじかん" }, { text: "も" }, { text: "しました。" }],
            translation: "Mi hermano mayor jugó videojuegos nada menos que diez horas en una noche.",
          },
          {
            segments: [{ text: "この" }, { text: "スマホ" }, { text: "は" }, { text: "二万円", ruby: "にまんえん" }, { text: "も" }, { text: "安", ruby: "やす" }, { text: "くなりました。" }],
            translation: "Este celular bajó nada menos que veinte mil yenes.",
          },
          {
            segments: [{ text: "子", ruby: "こ" }, { text: "ども" }, { text: "でも" }, { text: "分", ruby: "わ" }, { text: "かる" }, { text: "のに、" }, { text: "私", ruby: "わたし" }, { text: "は" }, { text: "まだ" }, { text: "一つ" }, { text: "も" }, { text: "分", ruby: "わ" }, { text: "かりません。" }],
            translation: "Aunque hasta un niño lo entiende, yo todavía no entiendo ni una sola cosa.",
          },
          {
            segments: [{ text: "今日", ruby: "きょう" }, { text: "は" }, { text: "二回", ruby: "にかい" }, { text: "も" }, { text: "電車", ruby: "でんしゃ" }, { text: "を" }, { text: "乗", ruby: "の" }, { text: "り" }, { text: "間違", ruby: "まちが" }, { text: "えました。" }],
            translation: "Hoy me equivoqué de tren nada menos que dos veces.",
          },
          {
            segments: [{ text: "彼女", ruby: "かのじょ" }, { text: "は" }, { text: "一日に" }, { text: "三回", ruby: "さんかい" }, { text: "も" }, { text: "電話", ruby: "でんわ" }, { text: "しました。" }],
            translation: "Ella llamó nada menos que tres veces en un día.",
          },
          {
            segments: [{ text: "この" }, { text: "部屋", ruby: "へや" }, { text: "は" }, { text: "冬", ruby: "ふゆ" }, { text: "でも" }, { text: "そんな" }, { text: "に" }, { text: "も" }, { text: "寒", ruby: "さむ" }, { text: "くありません。" }],
            translation: "Esta habitación no es tan fría ni siquiera en invierno.",
          },
          {
            segments: [{ text: "まだ" }, { text: "一時間", ruby: "いちじかん" }, { text: "も" }, { text: "勉強", ruby: "べんきょう" }, { text: "していません。" }],
            translation: "Todavía no he estudiado ni una hora.",
          },
          {
            segments: [{ text: "その" }, { text: "映画", ruby: "えいが" }, { text: "は" }, { text: "三回", ruby: "さんかい" }, { text: "も" }, { text: "見", ruby: "み" }, { text: "ました。" }],
            translation: "Vi esa película nada menos que tres veces.",
          },
        ],
      },
    ],
  },

  // ─── から (kara) ───────────────────────────────────────────────────────────
  {
    particle: "から (kara)",
    symbol: "から",
    romaji: "kara",
    summary: "Indica origen, punto de inicio o causa. También puede marcar el punto de partida en el tiempo o en el espacio.",
    uses: [
      {
        title: "Origen o punto de partida",
        examples: [
          {
            segments: [{ text: "東京", ruby: "とうきょう" }, { text: "から" }, { text: "来", ruby: "き" }, { text: "ました。" }],
            translation: "Vine desde Tokio.",
          },
          {
            segments: [{ text: "駅", ruby: "えき" }, { text: "から" }, { text: "歩", ruby: "ある" }, { text: "きます。" }],
            translation: "Camino desde la estación.",
          },
          {
            segments: [{ text: "家", ruby: "いえ" }, { text: "から" }, { text: "会社", ruby: "かいしゃ" }, { text: "まで" }, { text: "遠", ruby: "とお" }, { text: "いです。" }],
            translation: "Desde casa hasta la empresa está lejos.",
          },
          {
            segments: [{ text: "ここ" }, { text: "から" }, { text: "海", ruby: "うみ" }, { text: "が" }, { text: "見", ruby: "み" }, { text: "えます。" }],
            translation: "Desde aquí se ve el mar.",
          },
          {
            segments: [{ text: "窓", ruby: "まど" }, { text: "から" }, { text: "風", ruby: "かぜ" }, { text: "が" }, { text: "入", ruby: "はい" }, { text: "ってきます。" }],
            translation: "Por la ventana entra viento.",
          },
          {
            segments: [{ text: "大阪", ruby: "おおさか" }, { text: "から" }, { text: "新幹線", ruby: "しんかんせん" }, { text: "で" }, { text: "来", ruby: "き" }, { text: "ました。" }],
            translation: "Vine desde Osaka en shinkansen.",
          },
          {
            segments: [{ text: "学校", ruby: "がっこう" }, { text: "から" }, { text: "帰", ruby: "かえ" }, { text: "ります。" }],
            translation: "Regreso desde la escuela.",
          },
          {
            segments: [{ text: "会社", ruby: "かいしゃ" }, { text: "から" }, { text: "駅", ruby: "えき" }, { text: "まで" }, { text: "歩", ruby: "ある" }, { text: "きます。" }],
            translation: "Camino desde la empresa hasta la estación.",
          },
          {
            segments: [{ text: "うち" }, { text: "から" }, { text: "学校", ruby: "がっこう" }, { text: "まで" }, { text: "三十分", ruby: "さんじゅっぷん" }, { text: "かかります。" }],
            translation: "Desde mi casa hasta la escuela se tarda treinta minutos.",
          },
          {
            segments: [{ text: "空港", ruby: "くうこう" }, { text: "から" }, { text: "ホテル" }, { text: "へ" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy desde el aeropuerto al hotel.",
          },
          {
            segments: [{ text: "この" }, { text: "バス" }, { text: "は" }, { text: "駅", ruby: "えき" }, { text: "から" }, { text: "出", ruby: "で" }, { text: "ます。" }],
            translation: "Este autobús sale desde la estación.",
          },
          {
            segments: [{ text: "朝", ruby: "あさ" }, { text: "から" }, { text: "忙", ruby: "いそが" }, { text: "しいです。" }],
            translation: "Estoy ocupado desde la mañana.",
          },
          {
            segments: [{ text: "九時", ruby: "くじ" }, { text: "から" }, { text: "授業", ruby: "じゅぎょう" }, { text: "が" }, { text: "始", ruby: "はじ" }, { text: "まります。" }],
            translation: "Las clases empiezan desde las 9.",
          },
          {
            segments: [{ text: "月曜日", ruby: "げつようび" }, { text: "から" }, { text: "新", ruby: "あたら" }, { text: "しい" }, { text: "仕事", ruby: "しごと" }, { text: "です。" }],
            translation: "Desde el lunes empiezo un trabajo nuevo.",
          },
          {
            segments: [{ text: "来月", ruby: "らいげつ" }, { text: "から" }, { text: "日本語", ruby: "にほんご" }, { text: "の" }, { text: "勉強", ruby: "べんきょう" }, { text: "を" }, { text: "始", ruby: "はじ" }, { text: "めます。" }],
            translation: "Desde el próximo mes empezaré a estudiar japonés.",
          },
          {
            segments: [{ text: "こちら" }, { text: "から" }, { text: "入", ruby: "はい" }, { text: "ってください。" }],
            translation: "Por favor, entre por aquí.",
          },
          {
            segments: [{ text: "後", ruby: "うし" }, { text: "ろ" }, { text: "から" }, { text: "声", ruby: "こえ" }, { text: "が" }, { text: "しました。" }],
            translation: "Se oyó una voz desde atrás.",
          },
          {
            segments: [{ text: "上", ruby: "うえ" }, { text: "から" }, { text: "水", ruby: "みず" }, { text: "が" }, { text: "落", ruby: "お" }, { text: "ちてきました。" }],
            translation: "Cayó agua desde arriba.",
          },
          {
            segments: [{ text: "遠", ruby: "とお" }, { text: "く" }, { text: "から" }, { text: "山", ruby: "やま" }, { text: "が" }, { text: "見", ruby: "み" }, { text: "えます。" }],
            translation: "Desde lejos se ve la montaña.",
          },
          {
            segments: [{ text: "正面", ruby: "しょうめん" }, { text: "から" }, { text: "入", ruby: "はい" }, { text: "らないでください。" }],
            translation: "Por favor, no entre por el frente.",
          },
          {
            segments: [{ text: "北口", ruby: "きたぐち" }, { text: "から" }, { text: "出", ruby: "で" }, { text: "てください。" }],
            translation: "Por favor, salga por la salida norte.",
          },
          {
            segments: [{ text: "南", ruby: "みなみ" }, { text: "から" }, { text: "暖", ruby: "あたた" }, { text: "かい" }, { text: "風", ruby: "かぜ" }, { text: "が" }, { text: "吹", ruby: "ふ" }, { text: "いています。" }],
            translation: "Sopla viento cálido desde el sur.",
          },
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "から" }, { text: "メール" }, { text: "が" }, { text: "来", ruby: "き" }, { text: "ました。" }],
            translation: "Me llegó un correo de un amigo.",
          },
          {
            segments: [{ text: "先生", ruby: "せんせい" }, { text: "から" }, { text: "返事", ruby: "へんじ" }, { text: "を" }, { text: "もらいました。" }],
            translation: "Recibí una respuesta del profesor.",
          },
          {
            segments: [{ text: "母", ruby: "はは" }, { text: "から" }, { text: "電話", ruby: "でんわ" }, { text: "が" }, { text: "ありました。" }],
            translation: "Recibí una llamada de mi madre.",
          },
          {
            segments: [{ text: "その" }, { text: "話", ruby: "はなし" }, { text: "は" }, { text: "友達", ruby: "ともだち" }, { text: "から" }, { text: "聞", ruby: "き" }, { text: "きました。" }],
            translation: "Esa historia la escuché de un amigo.",
          },
          {
            segments: [{ text: "この" }, { text: "川", ruby: "かわ" }, { text: "から" }, { text: "水", ruby: "みず" }, { text: "を" }, { text: "取", ruby: "と" }, { text: "ります。" }],
            translation: "Saco agua de este río.",
          },
          {
            segments: [{ text: "冷蔵庫", ruby: "れいぞうこ" }, { text: "から" }, { text: "牛乳", ruby: "ぎゅうにゅう" }, { text: "を" }, { text: "出", ruby: "だ" }, { text: "しました。" }],
            translation: "Saqué leche del refrigerador.",
          },
          {
            segments: [{ text: "かばん" }, { text: "から" }, { text: "財布", ruby: "さいふ" }, { text: "を" }, { text: "出", ruby: "だ" }, { text: "しました。" }],
            translation: "Saqué la billetera del bolso.",
          },
          {
            segments: [{ text: "ここ" }, { text: "から" }, { text: "先", ruby: "さき" }, { text: "は" }, { text: "車", ruby: "くるま" }, { text: "で" }, { text: "行", ruby: "い" }, { text: "けません。" }],
            translation: "Desde aquí en adelante no se puede ir en auto.",
          },
        ],
      },
      {
        title: "Punto inicial en el tiempo",
        examples: [
          {
            segments: [{ text: "９時", ruby: "くじ" }, { text: "から" }, { text: "授業", ruby: "じゅぎょう" }, { text: "が" }, { text: "始", ruby: "はじ" }, { text: "まります。" }],
            translation: "Las clases empiezan desde las 9.",
          },
          {
            segments: [{ text: "明日", ruby: "あした" }, { text: "から" }, { text: "忙", ruby: "いそが" }, { text: "しくなります。" }],
            translation: "Desde mañana estaré más ocupado.",
          },
          {
            segments: [{ text: "４月", ruby: "しがつ" }, { text: "から" }, { text: "新", ruby: "あたら" }, { text: "しい" }, { text: "仕事", ruby: "しごと" }, { text: "です。" }],
            translation: "Desde abril tendré un trabajo nuevo.",
          },
          {
            segments: [{ text: "今", ruby: "いま" }, { text: "から" }, { text: "始", ruby: "はじ" }, { text: "めましょう。" }],
            translation: "Empecemos desde ahora.",
          },
          {
            segments: [{ text: "子", ruby: "こ" }, { text: "ども" }, { text: "の" }, { text: "ころ" }, { text: "から" }, { text: "野球", ruby: "やきゅう" }, { text: "が" }, { text: "好", ruby: "す" }, { text: "きです。" }],
            translation: "Me gusta el béisbol desde que era niño.",
          },
          {
            segments: [{ text: "朝", ruby: "あさ" }, { text: "から" }, { text: "雨", ruby: "あめ" }, { text: "が" }, { text: "降", ruby: "ふ" }, { text: "っています。" }],
            translation: "Está lloviendo desde la mañana.",
          },
          {
            segments: [{ text: "月曜日", ruby: "げつようび" }, { text: "から" }, { text: "学校", ruby: "がっこう" }, { text: "が" }, { text: "始", ruby: "はじ" }, { text: "まります。" }],
            translation: "Las clases empiezan desde el lunes.",
          },
          {
            segments: [{ text: "来週", ruby: "らいしゅう" }, { text: "から" }, { text: "日本語", ruby: "にほんご" }, { text: "の" }, { text: "授業", ruby: "じゅぎょう" }, { text: "があります。" }],
            translation: "A partir de la próxima semana habrá clases de japonés.",
          },
          {
            segments: [{ text: "来月", ruby: "らいげつ" }, { text: "から" }, { text: "一人", ruby: "ひとり" }, { text: "で" }, { text: "住", ruby: "す" }, { text: "みます。" }],
            translation: "A partir del próximo mes viviré solo.",
          },
          {
            segments: [{ text: "今日", ruby: "きょう" }, { text: "から" }, { text: "毎日", ruby: "まいにち" }, { text: "勉強", ruby: "べんきょう" }, { text: "します。" }],
            translation: "Desde hoy estudiaré todos los días.",
          },
          {
            segments: [{ text: "今夜", ruby: "こんや" }, { text: "から" }, { text: "寒", ruby: "さむ" }, { text: "くなります。" }],
            translation: "Desde esta noche hará más frío.",
          },
          {
            segments: [{ text: "午後", ruby: "ごご" }, { text: "から" }, { text: "会議", ruby: "かいぎ" }, { text: "があります。" }],
            translation: "Desde la tarde hay reunión.",
          },
          {
            segments: [{ text: "今年", ruby: "ことし" }, { text: "から" }, { text: "この" }, { text: "会社", ruby: "かいしゃ" }, { text: "で" }, { text: "働", ruby: "はたら" }, { text: "いています。" }],
            translation: "Trabajo en esta empresa desde este año.",
          },
          {
            segments: [{ text: "来年", ruby: "らいねん" }, { text: "から" }, { text: "大学生", ruby: "だいがくせい" }, { text: "です。" }],
            translation: "A partir del próximo año seré universitario.",
          },
          {
            segments: [{ text: "春", ruby: "はる" }, { text: "から" }, { text: "東京", ruby: "とうきょう" }, { text: "に" }, { text: "住", ruby: "す" }, { text: "みます。" }],
            translation: "Viviré en Tokio a partir de la primavera.",
          },
          {
            segments: [{ text: "６時", ruby: "ろくじ" }, { text: "から" }, { text: "アルバイト" }, { text: "があります。" }],
            translation: "Tengo trabajo de medio tiempo desde las 6.",
          },
          {
            segments: [{ text: "昼", ruby: "ひる" }, { text: "から" }, { text: "出", ruby: "で" }, { text: "かけます。" }],
            translation: "Saldré desde el mediodía.",
          },
          {
            segments: [{ text: "今週", ruby: "こんしゅう" }, { text: "から" }, { text: "ダイエット" }, { text: "を" }, { text: "始", ruby: "はじ" }, { text: "めます。" }],
            translation: "Empiezo la dieta desde esta semana.",
          },
          {
            segments: [{ text: "先月", ruby: "せんげつ" }, { text: "から" }, { text: "日本語", ruby: "にほんご" }, { text: "を" }, { text: "勉強", ruby: "べんきょう" }, { text: "しています。" }],
            translation: "Estudio japonés desde el mes pasado.",
          },
          {
            segments: [{ text: "去年", ruby: "きょねん" }, { text: "から" }, { text: "この" }, { text: "本", ruby: "ほん" }, { text: "を" }, { text: "使", ruby: "つか" }, { text: "っています。" }],
            translation: "Uso este libro desde el año pasado.",
          },
          {
            segments: [{ text: "十分前", ruby: "じゅっぷんまえ" }, { text: "から" }, { text: "待", ruby: "ま" }, { text: "っています。" }],
            translation: "Estoy esperando desde hace diez minutos.",
          },
          {
            segments: [{ text: "小学生", ruby: "しょうがくせい" }, { text: "の" }, { text: "とき" }, { text: "から" }, { text: "ピアノ" }, { text: "を" }, { text: "習", ruby: "なら" }, { text: "っています。" }],
            translation: "Estudio piano desde que estaba en la primaria.",
          },
          {
            segments: [{ text: "朝早", ruby: "あさはや" }, { text: "く" }, { text: "から" }, { text: "店", ruby: "みせ" }, { text: "が" }, { text: "開", ruby: "あ" }, { text: "いています。" }],
            translation: "La tienda abre desde muy temprano en la mañana.",
          },
          {
            segments: [{ text: "今日", ruby: "きょう" }, { text: "の" }, { text: "午後", ruby: "ごご" }, { text: "から" }, { text: "天気", ruby: "てんき" }, { text: "が" }, { text: "悪", ruby: "わる" }, { text: "くなります。" }],
            translation: "Desde esta tarde el clima empeorará.",
          },
          {
            segments: [{ text: "来週", ruby: "らいしゅう" }, { text: "の" }, { text: "火曜日", ruby: "かようび" }, { text: "から" }, { text: "テスト" }, { text: "です。" }],
            translation: "Los exámenes empiezan desde el próximo martes.",
          },
          {
            segments: [{ text: "３月", ruby: "さんがつ" }, { text: "から" }, { text: "暖", ruby: "あたた" }, { text: "かくなります。" }],
            translation: "Desde marzo empieza a hacer más calor.",
          },
          {
            segments: [{ text: "７月", ruby: "しちがつ" }, { text: "から" }, { text: "夏休", ruby: "なつやす" }, { text: "みです。" }],
            translation: "Las vacaciones de verano empiezan desde julio.",
          },
          {
            segments: [{ text: "その" }, { text: "ころ" }, { text: "から" }, { text: "友達", ruby: "ともだち" }, { text: "です。" }],
            translation: "Somos amigos desde esa época.",
          },
          {
            segments: [{ text: "今", ruby: "いま" }, { text: "から" }, { text: "でも" }, { text: "間", ruby: "ま" }, { text: "に" }, { text: "合", ruby: "あ" }, { text: "います。" }],
            translation: "Todavía alcanzamos si empezamos desde ahora.",
          },
          {
            segments: [{ text: "明後日", ruby: "あさって" }, { text: "から" }, { text: "旅行", ruby: "りょこう" }, { text: "です。" }],
            translation: "El viaje empieza desde pasado mañana.",
          },
        ],
      },
      {
        title: "Causa o razón",
        examples: [
          {
            segments: [{ text: "雨", ruby: "あめ" }, { text: "だから、" }, { text: "家", ruby: "いえ" }, { text: "に" }, { text: "います。" }],
            translation: "Como llueve, estoy en casa.",
          },
          {
            segments: [{ text: "忙", ruby: "いそが" }, { text: "しい" }, { text: "から、" }, { text: "行", ruby: "い" }, { text: "けません。" }],
            translation: "Como estoy ocupado, no puedo ir.",
          },
          {
            segments: [{ text: "寒", ruby: "さむ" }, { text: "い" }, { text: "から、" }, { text: "窓", ruby: "まど" }, { text: "を" }, { text: "閉", ruby: "し" }, { text: "めます。" }],
            translation: "Como hace frío, cierro la ventana.",
          },
          {
            segments: [{ text: "時間", ruby: "じかん" }, { text: "が" }, { text: "ない" }, { text: "から、" }, { text: "急", ruby: "いそ" }, { text: "ぎましょう。" }],
            translation: "Como no hay tiempo, apurémonos.",
          },
          {
            segments: [{ text: "大切", ruby: "たいせつ" }, { text: "な" }, { text: "話", ruby: "はなし" }, { text: "です" }, { text: "から、" }, { text: "よく" }, { text: "聞", ruby: "き" }, { text: "いてください。" }],
            translation: "Como es un tema importante, por favor escuche bien.",
          },
          {
            segments: [{ text: "もう" }, { text: "遅", ruby: "おそ" }, { text: "い" }, { text: "から、" }, { text: "帰", ruby: "かえ" }, { text: "りましょう。" }],
            translation: "Como ya es tarde, volvamos.",
          },
          {
            segments: [{ text: "明日", ruby: "あした" }, { text: "テスト" }, { text: "が" }, { text: "ある" }, { text: "から、" }, { text: "今晩", ruby: "こんばん" }, { text: "勉強", ruby: "べんきょう" }, { text: "します。" }],
            translation: "Como mañana hay prueba, esta noche estudiaré.",
          },
          {
            segments: [{ text: "お" }, { text: "金", ruby: "かね" }, { text: "が" }, { text: "ない" }, { text: "から、" }, { text: "その" }, { text: "かばん" }, { text: "は" }, { text: "買", ruby: "か" }, { text: "えません。" }],
            translation: "Como no tengo dinero, no puedo comprar ese bolso.",
          },
          {
            segments: [{ text: "日本語", ruby: "にほんご" }, { text: "が" }, { text: "まだ" }, { text: "上手", ruby: "じょうず" }, { text: "じゃない" }, { text: "から、" }, { text: "ゆっくり" }, { text: "話", ruby: "はな" }, { text: "してください。" }],
            translation: "Como todavía no hablo bien japonés, por favor hable despacio.",
          },
          {
            segments: [{ text: "子", ruby: "こ" }, { text: "ども" }, { text: "が" }, { text: "寝", ruby: "ね" }, { text: "ている" }, { text: "から、" }, { text: "静", ruby: "しず" }, { text: "か" }, { text: "に" }, { text: "してください。" }],
            translation: "Como el niño está durmiendo, por favor guarde silencio.",
          },
          {
            segments: [{ text: "疲", ruby: "つか" }, { text: "れた" }, { text: "から、" }, { text: "少", ruby: "すこ" }, { text: "し" }, { text: "休", ruby: "やす" }, { text: "みます。" }],
            translation: "Como estoy cansado, descansaré un poco.",
          },
          {
            segments: [{ text: "頭", ruby: "あたま" }, { text: "が" }, { text: "痛", ruby: "いた" }, { text: "い" }, { text: "から、" }, { text: "薬", ruby: "くすり" }, { text: "を" }, { text: "飲", ruby: "の" }, { text: "みます。" }],
            translation: "Como me duele la cabeza, tomaré medicina.",
          },
          {
            segments: [{ text: "熱", ruby: "ねつ" }, { text: "が" }, { text: "ある" }, { text: "から、" }, { text: "今日", ruby: "きょう" }, { text: "は" }, { text: "学校", ruby: "がっこう" }, { text: "を" }, { text: "休", ruby: "やす" }, { text: "みます。" }],
            translation: "Como tengo fiebre, hoy faltarē a la escuela.",
          },
          {
            segments: [{ text: "天気", ruby: "てんき" }, { text: "が" }, { text: "悪", ruby: "わる" }, { text: "い" }, { text: "から、" }, { text: "今日", ruby: "きょう" }, { text: "は" }, { text: "出", ruby: "で" }, { text: "かけません。" }],
            translation: "Como hace mal tiempo, hoy no saldré.",
          },
          {
            segments: [{ text: "明日", ruby: "あした" }, { text: "は" }, { text: "早", ruby: "はや" }, { text: "い" }, { text: "から、" }, { text: "もう" }, { text: "寝", ruby: "ね" }, { text: "ます。" }],
            translation: "Como mañana tengo que levantarme temprano, ya me voy a dormir.",
          },
          {
            segments: [{ text: "道", ruby: "みち" }, { text: "が" }, { text: "分", ruby: "わ" }, { text: "からない" }, { text: "から、" }, { text: "地図", ruby: "ちず" }, { text: "を" }, { text: "見", ruby: "み" }, { text: "ます。" }],
            translation: "Como no sé el camino, miraré el mapa.",
          },
          {
            segments: [{ text: "危", ruby: "あぶ" }, { text: "ない" }, { text: "から、" }, { text: "そこ" }, { text: "に" }, { text: "入", ruby: "はい" }, { text: "らないでください。" }],
            translation: "Como es peligroso, por favor no entre ahí.",
          },
          {
            segments: [{ text: "駅", ruby: "えき" }, { text: "は" }, { text: "あそこ" }, { text: "です" }, { text: "から、" }, { text: "まっすぐ" }, { text: "行", ruby: "い" }, { text: "ってください。" }],
            translation: "Como la estación está allí, por favor siga derecho.",
          },
          {
            segments: [{ text: "静", ruby: "しず" }, { text: "か" }, { text: "です" }, { text: "から、" }, { text: "ここ" }, { text: "で" }, { text: "勉強", ruby: "べんきょう" }, { text: "しやすいです。" }],
            translation: "Como es tranquilo, aquí es fácil estudiar.",
          },
          {
            segments: [{ text: "便利", ruby: "べんり" }, { text: "です" }, { text: "から、" }, { text: "この" }, { text: "アプリ" }, { text: "を" }, { text: "使", ruby: "つか" }, { text: "っています。" }],
            translation: "Como es práctico, uso esta aplicación.",
          },
          {
            segments: [{ text: "今日", ruby: "きょう" }, { text: "は" }, { text: "日曜日", ruby: "にちようび" }, { text: "だから、" }, { text: "学校", ruby: "がっこう" }, { text: "は" }, { text: "休", ruby: "やす" }, { text: "みです。" }],
            translation: "Como hoy es domingo, no hay clases.",
          },
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "が" }, { text: "来", ruby: "く" }, { text: "る" }, { text: "から、" }, { text: "部屋", ruby: "へや" }, { text: "を" }, { text: "片", ruby: "かた" }, { text: "づけます。" }],
            translation: "Como va a venir un amigo, voy a ordenar la habitación.",
          },
          {
            segments: [{ text: "電車", ruby: "でんしゃ" }, { text: "が" }, { text: "もうすぐ" }, { text: "来", ruby: "く" }, { text: "る" }, { text: "から、" }, { text: "急", ruby: "いそ" }, { text: "ぎましょう。" }],
            translation: "Como el tren llega pronto, apurémonos.",
          },
          {
            segments: [{ text: "お" }, { text: "腹", ruby: "なか" }, { text: "が" }, { text: "すいた" }, { text: "から、" }, { text: "何", ruby: "なに" }, { text: "か" }, { text: "食", ruby: "た" }, { text: "べたいです。" }],
            translation: "Como tengo hambre, quiero comer algo.",
          },
          {
            segments: [{ text: "この" }, { text: "漢字", ruby: "かんじ" }, { text: "は" }, { text: "大事", ruby: "だいじ" }, { text: "です" }, { text: "から、" }, { text: "覚", ruby: "おぼ" }, { text: "えてください。" }],
            translation: "Como este kanji es importante, por favor memorícelo.",
          },
          {
            segments: [{ text: "初", ruby: "はじ" }, { text: "めて" }, { text: "です" }, { text: "から、" }, { text: "緊張", ruby: "きんちょう" }, { text: "しています。" }],
            translation: "Como es mi primera vez, estoy nervioso.",
          },
          {
            segments: [{ text: "まだ" }, { text: "子", ruby: "こ" }, { text: "ども" }, { text: "だから、" }, { text: "一人", ruby: "ひとり" }, { text: "では" }, { text: "行", ruby: "い" }, { text: "けません。" }],
            translation: "Como todavía es un niño, no puede ir solo.",
          },
          {
            segments: [{ text: "元気", ruby: "げんき" }, { text: "じゃない" }, { text: "から、" }, { text: "今日", ruby: "きょう" }, { text: "は" }, { text: "運動", ruby: "うんどう" }, { text: "しません。" }],
            translation: "Como no me siento bien, hoy no haré ejercicio.",
          },
          {
            segments: [{ text: "きれい" }, { text: "です" }, { text: "から、" }, { text: "この" }, { text: "公園", ruby: "こうえん" }, { text: "が" }, { text: "好", ruby: "す" }, { text: "きです。" }],
            translation: "Como es bonito, me gusta este parque.",
          },
          {
            segments: [{ text: "分", ruby: "わ" }, { text: "からない" }, { text: "から、" }, { text: "先生", ruby: "せんせい" }, { text: "に" }, { text: "聞", ruby: "き" }, { text: "きます。" }],
            translation: "Como no entiendo, le preguntaré al profesor.",
          },
        ],
      },
    ],
  },

  // ─── まで (made) ───────────────────────────────────────────────────────────
  {
    particle: "まで (made)",
    symbol: "まで",
    romaji: "made",
    summary: "Indica el límite o término de una acción en tiempo, espacio o alcance.",
    uses: [
      {
        title: "Límite de tiempo",
        examples: [
          {
            segments: [{ text: "５時", ruby: "ごじ" }, { text: "まで" }, { text: "働", ruby: "はたら" }, { text: "きます。" }],
            translation: "Trabajo hasta las 5.",
          },
          {
            segments: [{ text: "来週", ruby: "らいしゅう" }, { text: "まで" }, { text: "待", ruby: "ま" }, { text: "ちます。" }],
            translation: "Esperaré hasta la semana que viene.",
          },
          {
            segments: [{ text: "夜", ruby: "よる" }, { text: "10時", ruby: "じゅうじ" }, { text: "まで" }, { text: "勉強", ruby: "べんきょう" }, { text: "しました。" }],
            translation: "Estudié hasta las 10 de la noche.",
          },
          {
            segments: [{ text: "月曜日", ruby: "げつようび" }, { text: "まで" }, { text: "に" }, { text: "出", ruby: "だ" }, { text: "してください。" }],
            translation: "Entréguelo a más tardar el lunes.",
          },
          {
            segments: [{ text: "夏", ruby: "なつ" }, { text: "まで" }, { text: "に" }, { text: "日本語", ruby: "にほんご" }, { text: "を" }, { text: "もっと" }, { text: "上達", ruby: "じょうたつ" }, { text: "させたいです。" }],
            translation: "Quiero mejorar más mi japonés para el verano.",
          },
          {
            segments: [{ text: "８時", ruby: "はちじ" }, { text: "まで" }, { text: "寝", ruby: "ね" }, { text: "ました。" }],
            translation: "Dormí hasta las 8.",
          },
          {
            segments: [{ text: "12時", ruby: "じゅうにじ" }, { text: "まで" }, { text: "会議", ruby: "かいぎ" }, { text: "があります。" }],
            translation: "Hay reunión hasta las 12.",
          },
          {
            segments: [{ text: "明日", ruby: "あした" }, { text: "まで" }, { text: "この" }, { text: "本", ruby: "ほん" }, { text: "を" }, { text: "読", ruby: "よ" }, { text: "みます。" }],
            translation: "Leeré este libro hasta mañana.",
          },
          {
            segments: [{ text: "３月", ruby: "さんがつ" }, { text: "まで" }, { text: "日本", ruby: "にほん" }, { text: "に" }, { text: "います。" }],
            translation: "Estaré en Japón hasta marzo.",
          },
          {
            segments: [{ text: "土曜日", ruby: "どようび" }, { text: "まで" }, { text: "に" }, { text: "宿題", ruby: "しゅくだい" }, { text: "を" }, { text: "終", ruby: "お" }, { text: "えてください。" }],
            translation: "Por favor, termina la tarea a más tardar el sábado.",
          },
          {
            segments: [{ text: "午後", ruby: "ごご" }, { text: "３時", ruby: "さんじ" }, { text: "まで" }, { text: "ここ" }, { text: "に" }, { text: "います。" }],
            translation: "Estaré aquí hasta las 3 de la tarde.",
          },
          {
            segments: [{ text: "11時", ruby: "じゅういちじ" }, { text: "まで" }, { text: "テレビ" }, { text: "を" }, { text: "見", ruby: "み" }, { text: "ました。" }],
            translation: "Vi televisión hasta las 11.",
          },
          {
            segments: [{ text: "冬", ruby: "ふゆ" }, { text: "まで" }, { text: "に" }, { text: "新", ruby: "あたら" }, { text: "しい" }, { text: "コート" }, { text: "を" }, { text: "買", ruby: "か" }, { text: "いたいです。" }],
            translation: "Quiero comprar un abrigo nuevo para el invierno.",
          },
          {
            segments: [{ text: "来月", ruby: "らいげつ" }, { text: "まで" }, { text: "この" }, { text: "部屋", ruby: "へや" }, { text: "を" }, { text: "借", ruby: "か" }, { text: "ります。" }],
            translation: "Alquilaré esta habitación hasta el próximo mes.",
          },
          {
            segments: [{ text: "金曜日", ruby: "きんようび" }, { text: "まで" }, { text: "に" }, { text: "返事", ruby: "へんじ" }, { text: "を" }, { text: "ください。" }],
            translation: "Por favor, responda a más tardar el viernes.",
          },
          {
            segments: [{ text: "朝", ruby: "あさ" }, { text: "まで" }, { text: "雨", ruby: "あめ" }, { text: "が" }, { text: "降", ruby: "ふ" }, { text: "っていました。" }],
            translation: "Llovió hasta la mañana.",
          },
          {
            segments: [{ text: "卒業", ruby: "そつぎょう" }, { text: "まで" }, { text: "あと" }, { text: "一年", ruby: "いちねん" }, { text: "です。" }],
            translation: "Falta un año hasta la graduación.",
          },
          {
            segments: [{ text: "７時", ruby: "しちじ" }, { text: "まで" }, { text: "に" }, { text: "駅", ruby: "えき" }, { text: "に" }, { text: "来", ruby: "き" }, { text: "てください。" }],
            translation: "Por favor, venga a la estación a más tardar a las 7.",
          },
          {
            segments: [{ text: "今日", ruby: "きょう" }, { text: "まで" }, { text: "この" }, { text: "仕事", ruby: "しごと" }, { text: "を" }, { text: "続", ruby: "つづ" }, { text: "けます。" }],
            translation: "Seguiré con este trabajo hasta hoy.",
          },
          {
            segments: [{ text: "春休", ruby: "はるやす" }, { text: "み" }, { text: "まで" }, { text: "に" }, { text: "この" }, { text: "本", ruby: "ほん" }, { text: "を" }, { text: "読", ruby: "よ" }, { text: "みたいです。" }],
            translation: "Quiero leer este libro para las vacaciones de primavera.",
          },
          {
            segments: [{ text: "５分", ruby: "ごふん" }, { text: "まで" }, { text: "待", ruby: "ま" }, { text: "ちます。" }],
            translation: "Esperaré hasta cinco minutos.",
          },
          {
            segments: [{ text: "今月", ruby: "こんげつ" }, { text: "まで" }, { text: "この" }, { text: "キャンペーン" }, { text: "を" }, { text: "しています。" }],
            translation: "Esta campaña dura hasta este mes.",
          },
          {
            segments: [{ text: "日曜日", ruby: "にちようび" }, { text: "まで" }, { text: "に" }, { text: "部屋", ruby: "へや" }, { text: "を" }, { text: "片", ruby: "かた" }, { text: "づけます。" }],
            translation: "Ordenaré la habitación para el domingo.",
          },
          {
            segments: [{ text: "夕方", ruby: "ゆうがた" }, { text: "まで" }, { text: "公園", ruby: "こうえん" }, { text: "で" }, { text: "遊", ruby: "あそ" }, { text: "びました。" }],
            translation: "Jugué en el parque hasta la tarde.",
          },
          {
            segments: [{ text: "来年", ruby: "らいねん" }, { text: "まで" }, { text: "に" }, { text: "車", ruby: "くるま" }, { text: "を" }, { text: "買", ruby: "か" }, { text: "いたいです。" }],
            translation: "Quiero comprar un auto para el próximo año.",
          },
          {
            segments: [{ text: "２時", ruby: "にじ" }, { text: "まで" }, { text: "昼", ruby: "ひる" }, { text: "ご" }, { text: "飯", ruby: "はん" }, { text: "を" }, { text: "食", ruby: "た" }, { text: "べていました。" }],
            translation: "Estuve almorzando hasta las 2.",
          },
          {
            segments: [{ text: "年末", ruby: "ねんまつ" }, { text: "まで" }, { text: "忙", ruby: "いそが" }, { text: "しいです。" }],
            translation: "Estaré ocupado hasta fin de año.",
          },
          {
            segments: [{ text: "明後日", ruby: "あさって" }, { text: "まで" }, { text: "に" }, { text: "準備", ruby: "じゅんび" }, { text: "を" }, { text: "してください。" }],
            translation: "Por favor, haga los preparativos a más tardar pasado mañana.",
          },
          {
            segments: [{ text: "子", ruby: "こ" }, { text: "ども" }, { text: "の" }, { text: "ころ" }, { text: "まで" }, { text: "この" }, { text: "町", ruby: "まち" }, { text: "に" }, { text: "住", ruby: "す" }, { text: "んでいました。" }],
            translation: "Viví en esta ciudad hasta mi niñez.",
          },
          {
            segments: [{ text: "試験", ruby: "しけん" }, { text: "まで" }, { text: "に" }, { text: "百", ruby: "ひゃく" }, { text: "個", ruby: "こ" }, { text: "の" }, { text: "漢字", ruby: "かんじ" }, { text: "を" }, { text: "覚", ruby: "おぼ" }, { text: "えたいです。" }],
            translation: "Quiero memorizar cien kanji para la prueba.",
          },
        ],
      },
      {
        title: "Límite de lugar",
        examples: [
          {
            segments: [{ text: "駅", ruby: "えき" }, { text: "まで" }, { text: "歩", ruby: "ある" }, { text: "きます。" }],
            translation: "Camino hasta la estación.",
          },
          {
            segments: [{ text: "ここ" }, { text: "から" }, { text: "東京", ruby: "とうきょう" }, { text: "まで" }, { text: "何時間", ruby: "なんじかん" }, { text: "かかりますか？" }],
            translation: "¿Cuántas horas se tarda de aquí hasta Tokio?",
          },
          {
            segments: [{ text: "学校", ruby: "がっこう" }, { text: "まで" }, { text: "自転車", ruby: "じてんしゃ" }, { text: "で" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy en bicicleta hasta la escuela.",
          },
          {
            segments: [{ text: "空港", ruby: "くうこう" }, { text: "まで" }, { text: "バス" }, { text: "で" }, { text: "行", ruby: "い" }, { text: "きました。" }],
            translation: "Fui en autobús hasta el aeropuerto.",
          },
          {
            segments: [{ text: "川", ruby: "かわ" }, { text: "まで" }, { text: "走", ruby: "はし" }, { text: "りました。" }],
            translation: "Corrí hasta el río.",
          },
          {
            segments: [{ text: "家", ruby: "いえ" }, { text: "まで" }, { text: "帰", ruby: "かえ" }, { text: "ります。" }],
            translation: "Regreso hasta casa.",
          },
          {
            segments: [{ text: "駅", ruby: "えき" }, { text: "まで" }, { text: "車", ruby: "くるま" }, { text: "で" }, { text: "送", ruby: "おく" }, { text: "ります。" }],
            translation: "Te llevo en auto hasta la estación.",
          },
          {
            segments: [{ text: "学校", ruby: "がっこう" }, { text: "まで" }, { text: "毎日", ruby: "まいにち" }, { text: "歩", ruby: "ある" }, { text: "きます。" }],
            translation: "Camino hasta la escuela todos los días.",
          },
          {
            segments: [{ text: "会社", ruby: "かいしゃ" }, { text: "まで" }, { text: "電車", ruby: "でんしゃ" }, { text: "で" }, { text: "通", ruby: "かよ" }, { text: "っています。" }],
            translation: "Voy hasta la empresa en tren.",
          },
          {
            segments: [{ text: "図書館", ruby: "としょかん" }, { text: "まで" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy hasta la biblioteca.",
          },
          {
            segments: [{ text: "公園", ruby: "こうえん" }, { text: "まで" }, { text: "子", ruby: "こ" }, { text: "ども" }, { text: "と" }, { text: "歩", ruby: "ある" }, { text: "きました。" }],
            translation: "Caminé con el niño hasta el parque.",
          },
          {
            segments: [{ text: "山", ruby: "やま" }, { text: "の" }, { text: "上", ruby: "うえ" }, { text: "まで" }, { text: "登", ruby: "のぼ" }, { text: "りました。" }],
            translation: "Subí hasta la cima de la montaña.",
          },
          {
            segments: [{ text: "二階", ruby: "にかい" }, { text: "まで" }, { text: "上", ruby: "あ" }, { text: "がってください。" }],
            translation: "Por favor, suba hasta el segundo piso.",
          },
          {
            segments: [{ text: "教室", ruby: "きょうしつ" }, { text: "まで" }, { text: "案内", ruby: "あんない" }, { text: "します。" }],
            translation: "Lo guío hasta el aula.",
          },
          {
            segments: [{ text: "ホテル" }, { text: "まで" }, { text: "タクシー" }, { text: "で" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy en taxi hasta el hotel.",
          },
          {
            segments: [{ text: "海", ruby: "うみ" }, { text: "まで" }, { text: "車", ruby: "くるま" }, { text: "で" }, { text: "行", ruby: "い" }, { text: "きました。" }],
            translation: "Fui en auto hasta el mar.",
          },
          {
            segments: [{ text: "駅", ruby: "えき" }, { text: "まで" }, { text: "あと" }, { text: "五分", ruby: "ごふん" }, { text: "です。" }],
            translation: "Faltan cinco minutos hasta la estación.",
          },
          {
            segments: [{ text: "ここ" }, { text: "から" }, { text: "学校", ruby: "がっこう" }, { text: "まで" }, { text: "遠", ruby: "とお" }, { text: "いです。" }],
            translation: "De aquí hasta la escuela está lejos.",
          },
          {
            segments: [{ text: "家", ruby: "いえ" }, { text: "から" }, { text: "駅", ruby: "えき" }, { text: "まで" }, { text: "十分", ruby: "じゅっぷん" }, { text: "かかります。" }],
            translation: "De casa a la estación se tarda diez minutos.",
          },
          {
            segments: [{ text: "学校", ruby: "がっこう" }, { text: "から" }, { text: "うち" }, { text: "まで" }, { text: "歩", ruby: "ある" }, { text: "いて" }, { text: "帰", ruby: "かえ" }, { text: "ります。" }],
            translation: "Vuelvo caminando desde la escuela hasta casa.",
          },
          {
            segments: [{ text: "駅", ruby: "えき" }, { text: "から" }, { text: "会社", ruby: "かいしゃ" }, { text: "まで" }, { text: "バス" }, { text: "で" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Voy en autobús desde la estación hasta la empresa.",
          },
          {
            segments: [{ text: "ここ" }, { text: "から" }, { text: "空港", ruby: "くうこう" }, { text: "まで" }, { text: "一時間", ruby: "いちじかん" }, { text: "です。" }],
            translation: "De aquí hasta el aeropuerto es una hora.",
          },
          {
            segments: [{ text: "橋", ruby: "はし" }, { text: "まで" }, { text: "まっすぐ" }, { text: "行", ruby: "い" }, { text: "ってください。" }],
            translation: "Por favor, siga derecho hasta el puente.",
          },
          {
            segments: [{ text: "角", ruby: "かど" }, { text: "まで" }, { text: "歩", ruby: "ある" }, { text: "いてください。" }],
            translation: "Por favor, camine hasta la esquina.",
          },
          {
            segments: [{ text: "門", ruby: "もん" }, { text: "まで" }, { text: "走", ruby: "はし" }, { text: "りました。" }],
            translation: "Corrí hasta la puerta principal.",
          },
          {
            segments: [{ text: "向", ruby: "む" }, { text: "こう" }, { text: "の" }, { text: "店", ruby: "みせ" }, { text: "まで" }, { text: "行", ruby: "い" }, { text: "きましょう。" }],
            translation: "Vamos hasta la tienda de enfrente.",
          },
          {
            segments: [{ text: "病院", ruby: "びょういん" }, { text: "まで" }, { text: "どのくらい" }, { text: "かかりますか？" }],
            translation: "¿Cuánto se tarda hasta el hospital?",
          },
          {
            segments: [{ text: "空港", ruby: "くうこう" }, { text: "まで" }, { text: "送", ruby: "おく" }, { text: "ってもらいました。" }],
            translation: "Me llevaron hasta el aeropuerto.",
          },
          {
            segments: [{ text: "この" }, { text: "道", ruby: "みち" }, { text: "を" }, { text: "行", ruby: "い" }, { text: "く" }, { text: "と、" }, { text: "駅", ruby: "えき" }, { text: "まで" }, { text: "行", ruby: "い" }, { text: "けます。" }],
            translation: "Si sigues este camino, puedes llegar hasta la estación.",
          },
          {
            segments: [{ text: "家", ruby: "いえ" }, { text: "まで" }, { text: "一人", ruby: "ひとり" }, { text: "で" }, { text: "帰", ruby: "かえ" }, { text: "れますか？" }],
            translation: "¿Puedes volver solo hasta casa?",
          },
        ],
      },
      {
        title: "Extensión o alcance",
        examples: [
          {
            segments: [{ text: "子", ruby: "こ" }, { text: "ども" }, { text: "から" }, { text: "大人", ruby: "おとな" }, { text: "まで" }, { text: "楽", ruby: "たの" }, { text: "しめます。" }],
            translation: "Lo pueden disfrutar desde niños hasta adultos.",
          },
          {
            segments: [{ text: "駅", ruby: "えき" }, { text: "から" }, { text: "会社", ruby: "かいしゃ" }, { text: "まで" }, { text: "歩", ruby: "ある" }, { text: "いて" }, { text: "10分", ruby: "じゅっぷん" }, { text: "です。" }],
            translation: "Desde la estación hasta la empresa son 10 minutos caminando.",
          },
          {
            segments: [{ text: "一", ruby: "いち" }, { text: "から" }, { text: "十", ruby: "じゅう" }, { text: "まで" }, { text: "数", ruby: "かぞ" }, { text: "えてください。" }],
            translation: "Por favor, cuenta del uno al diez.",
          },
          {
            segments: [{ text: "最後", ruby: "さいご" }, { text: "まで" }, { text: "読", ruby: "よ" }, { text: "んでください。" }],
            translation: "Por favor, léalo hasta el final.",
          },
          {
            segments: [{ text: "私", ruby: "わたし" }, { text: "に" }, { text: "まで" }, { text: "気", ruby: "き" }, { text: "を" }, { text: "使", ruby: "つか" }, { text: "わなくて" }, { text: "いいです。" }],
            translation: "No hace falta que seas tan considerado incluso conmigo.",
          },
          {
            segments: [{ text: "北海道", ruby: "ほっかいどう" }, { text: "から" }, { text: "沖縄", ruby: "おきなわ" }, { text: "まで" }, { text: "旅行", ruby: "りょこう" }, { text: "したいです。" }],
            translation: "Quiero viajar desde Hokkaidō hasta Okinawa.",
          },
          {
            segments: [{ text: "初級", ruby: "しょきゅう" }, { text: "から" }, { text: "上級", ruby: "じょうきゅう" }, { text: "まで" }, { text: "勉強", ruby: "べんきょう" }, { text: "できます。" }],
            translation: "Se puede estudiar desde nivel inicial hasta avanzado.",
          },
          {
            segments: [{ text: "月曜日", ruby: "げつようび" }, { text: "から" }, { text: "金曜日", ruby: "きんようび" }, { text: "まで" }, { text: "授業", ruby: "じゅぎょう" }, { text: "があります。" }],
            translation: "Hay clases desde el lunes hasta el viernes.",
          },
          {
            segments: [{ text: "朝", ruby: "あさ" }, { text: "から" }, { text: "夜", ruby: "よる" }, { text: "まで" }, { text: "働", ruby: "はたら" }, { text: "きました。" }],
            translation: "Trabajé desde la mañana hasta la noche.",
          },
          {
            segments: [{ text: "一", ruby: "いち" }, { text: "ページ" }, { text: "から" }, { text: "五", ruby: "ご" }, { text: "ページ" }, { text: "まで" }, { text: "読", ruby: "よ" }, { text: "みました。" }],
            translation: "Leí desde la página 1 hasta la 5.",
          },
          {
            segments: [{ text: "A" }, { text: "から" }, { text: "Z" }, { text: "まで" }, { text: "書", ruby: "か" }, { text: "いてください。" }],
            translation: "Por favor, escríbelo de la A a la Z.",
          },
          {
            segments: [{ text: "春", ruby: "はる" }, { text: "から" }, { text: "冬", ruby: "ふゆ" }, { text: "まで" }, { text: "楽", ruby: "たの" }, { text: "しめる" }, { text: "イベント" }, { text: "です。" }],
            translation: "Es un evento que se puede disfrutar desde primavera hasta invierno.",
          },
          {
            segments: [{ text: "入", ruby: "い" }, { text: "り" }, { text: "口", ruby: "ぐち" }, { text: "から" }, { text: "出", ruby: "で" }, { text: "口", ruby: "ぐち" }, { text: "まで" }, { text: "まっすぐ" }, { text: "です。" }],
            translation: "Desde la entrada hasta la salida es todo recto.",
          },
          {
            segments: [{ text: "一月", ruby: "いちがつ" }, { text: "から" }, { text: "十二月", ruby: "じゅうにがつ" }, { text: "まで" }, { text: "全部", ruby: "ぜんぶ" }, { text: "覚", ruby: "おぼ" }, { text: "えました。" }],
            translation: "Memoricé todo desde enero hasta diciembre.",
          },
          {
            segments: [{ text: "この" }, { text: "バス" }, { text: "は" }, { text: "駅", ruby: "えき" }, { text: "から" }, { text: "空港", ruby: "くうこう" }, { text: "まで" }, { text: "行", ruby: "い" }, { text: "きます。" }],
            translation: "Este autobús va desde la estación hasta el aeropuerto.",
          },
          {
            segments: [{ text: "ここ" }, { text: "から" }, { text: "あそこ" }, { text: "まで" }, { text: "走", ruby: "はし" }, { text: "ってください。" }],
            translation: "Por favor, corre de aquí hasta allí.",
          },
          {
            segments: [{ text: "最初", ruby: "さいしょ" }, { text: "から" }, { text: "最後", ruby: "さいご" }, { text: "まで" }, { text: "聞", ruby: "き" }, { text: "いてください。" }],
            translation: "Por favor, escuche desde el principio hasta el final.",
          },
          {
            segments: [{ text: "一年生", ruby: "いちねんせい" }, { text: "から" }, { text: "三年生", ruby: "さんねんせい" }, { text: "まで" }, { text: "参加", ruby: "さんか" }, { text: "できます。" }],
            translation: "Pueden participar desde primero hasta tercero.",
          },
          {
            segments: [{ text: "初", ruby: "はじ" }, { text: "め" }, { text: "から" }, { text: "終", ruby: "お" }, { text: "わり" }, { text: "まで" }, { text: "一人", ruby: "ひとり" }, { text: "で" }, { text: "やりました。" }],
            translation: "Lo hice solo desde el principio hasta el final.",
          },
          {
            segments: [{ text: "この" }, { text: "本", ruby: "ほん" }, { text: "は" }, { text: "子", ruby: "こ" }, { text: "ども" }, { text: "から" }, { text: "大人", ruby: "おとな" }, { text: "まで" }, { text: "人気", ruby: "にんき" }, { text: "です。" }],
            translation: "Este libro es popular desde niños hasta adultos.",
          },
          {
            segments: [{ text: "月", ruby: "つき" }, { text: "から" }, { text: "金曜日", ruby: "きんようび" }, { text: "まで" }, { text: "毎日", ruby: "まいにち" }, { text: "働", ruby: "はたら" }, { text: "きます。" }],
            translation: "Trabajo todos los días de lunes a viernes.",
          },
          {
            segments: [{ text: "一番", ruby: "いちばん" }, { text: "後", ruby: "うし" }, { text: "ろ" }, { text: "まで" }, { text: "見", ruby: "み" }, { text: "えますか？" }],
            translation: "¿Se ve hasta la última fila?",
          },
          {
            segments: [{ text: "そこ" }, { text: "まで" }, { text: "言", ruby: "い" }, { text: "わなくても" }, { text: "いいです。" }],
            translation: "No hace falta decirlo hasta ese punto.",
          },
          {
            segments: [{ text: "先生", ruby: "せんせい" }, { text: "に" }, { text: "まで" }, { text: "知", ruby: "し" }, { text: "らせました。" }],
            translation: "Se lo hice saber incluso al profesor.",
          },
          {
            segments: [{ text: "社長", ruby: "しゃちょう" }, { text: "に" }, { text: "まで" }, { text: "その" }, { text: "話", ruby: "はなし" }, { text: "が" }, { text: "届", ruby: "とど" }, { text: "きました。" }],
            translation: "Esa información llegó incluso al presidente de la empresa.",
          },
          {
            segments: [{ text: "友達", ruby: "ともだち" }, { text: "に" }, { text: "まで" }, { text: "心配", ruby: "しんぱい" }, { text: "を" }, { text: "かけてしまいました。" }],
            translation: "Terminé preocupando incluso a mis amigos.",
          },
          {
            segments: [{ text: "こんな" }, { text: "簡単", ruby: "かんたん" }, { text: "な" }, { text: "漢字", ruby: "かんじ" }, { text: "まで" }, { text: "忘", ruby: "わす" }, { text: "れました。" }],
            translation: "Olvidé hasta un kanji tan simple.",
          },
          {
            segments: [{ text: "名前", ruby: "なまえ" }, { text: "まで" }, { text: "覚", ruby: "おぼ" }, { text: "えています。" }],
            translation: "Recuerdo hasta el nombre.",
          },
          {
            segments: [{ text: "そんな" }, { text: "こと" }, { text: "まで" }, { text: "しなくて" }, { text: "いいです。" }],
            translation: "No hace falta hacer incluso eso.",
          },
          {
            segments: [{ text: "これ" }, { text: "は" }, { text: "細", ruby: "こま" }, { text: "かい" }, { text: "ところ" }, { text: "まで" }, { text: "よく" }, { text: "書", ruby: "か" }, { text: "いてあります。" }],
            translation: "Esto está bien escrito hasta en los detalles más pequeños.",
          },
        ],
      },
    ],
  },
];
