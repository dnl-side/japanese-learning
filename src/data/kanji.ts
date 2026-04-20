// src/data/kanji.ts

// ─── Types ────────────────────────────────────────────────────────────────────

export interface KanjiEntry {
  char: string;
  level: number;          // school grade 1–8
  strokeCount: number;
  on: string[];           // on-yomi readings
  kun: string[];          // kun-yomi readings
  meaning: string;
  example: string;
  hasSvg: boolean;        // SVG available for drawing practice
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getSvgPath(entry: KanjiEntry): string {
  if (!entry.hasSvg) return "";
  const folder = entry.level === 1 ? "nivel_uno" : "nivel_dos";
  return `/svg/kanji/${folder}/${entry.char}.svg`;
}

export function getKanjiByLevel(level: number): KanjiEntry[] {
  return KANJI_LIST.filter(k => k.level === level);
}

export function getKanjiEntry(char: string): KanjiEntry | undefined {
  return KANJI_LIST.find(k => k.char === char);
}

export const AVAILABLE_LEVELS = [1, 2] as const;
export const ALL_LEVELS = [1, 2, 3, 4, 5, 6, 7, 8] as const;

// ─── Level 1 Kanji — 80 chars, full data ─────────────────────────────────────

const LEVEL1: KanjiEntry[] = [
  { char: "一", level: 1, strokeCount: 1, on: ["イチ","イツ"],           kun: ["ひと","ひと(つ)"],        meaning: "Uno",                    example: "飴を一つください。",           hasSvg: true },
  { char: "右", level: 1, strokeCount: 5, on: ["ウ","ユウ"],             kun: ["みぎ"],                   meaning: "Derecha",                example: "右に曲がります。",             hasSvg: true },
  { char: "雨", level: 1, strokeCount: 8, on: ["ウ"],                    kun: ["あめ","あま"],            meaning: "Lluvia",                 example: "雨が降っています。",           hasSvg: true },
  { char: "円", level: 1, strokeCount: 4, on: ["エン"],                  kun: [],                         meaning: "Yen / Círculo",          example: "一円玉。",                     hasSvg: true },
  { char: "王", level: 1, strokeCount: 4, on: ["オウ"],                  kun: [],                         meaning: "Rey",                    example: "王様。",                       hasSvg: true },
  { char: "音", level: 1, strokeCount: 9, on: ["イン","オン"],           kun: ["おと","ね"],              meaning: "Sonido",                 example: "音楽を聞く。",                 hasSvg: true },
  { char: "下", level: 1, strokeCount: 3, on: ["カ","ゲ"],               kun: ["した","しも","さ.げる"],  meaning: "Abajo / Bajar",          example: "机の下に猫がいる。",           hasSvg: true },
  { char: "火", level: 1, strokeCount: 4, on: ["カ"],                    kun: ["ひ","ほ"],                meaning: "Fuego",                  example: "火を消してください。",         hasSvg: true },
  { char: "花", level: 1, strokeCount: 7, on: ["カ"],                    kun: ["はな"],                   meaning: "Flor",                   example: "桜の花が咲いている。",         hasSvg: true },
  { char: "貝", level: 1, strokeCount: 7, on: ["バイ"],                  kun: ["かい"],                   meaning: "Concha",                 example: "海で貝を見つけた。",           hasSvg: true },
  { char: "学", level: 1, strokeCount: 8, on: ["ガク"],                  kun: ["まな.ぶ"],                meaning: "Estudiar / Aprender",    example: "学校で学びます。",             hasSvg: true },
  { char: "気", level: 1, strokeCount: 6, on: ["キ","ケ"],               kun: ["いき"],                   meaning: "Energía / Ánimo",        example: "元気です。",                   hasSvg: true },
  { char: "九", level: 1, strokeCount: 2, on: ["キュウ","ク"],           kun: ["ここの","ここのつ"],      meaning: "Nueve",                  example: "九つのりんご。",               hasSvg: true },
  { char: "休", level: 1, strokeCount: 6, on: ["キュウ"],                kun: ["やす.む"],                meaning: "Descansar",              example: "休みましょう。",               hasSvg: true },
  { char: "玉", level: 1, strokeCount: 5, on: ["ギョク"],                kun: ["たま"],                   meaning: "Bola / Joya",            example: "玉ねぎを切る。",               hasSvg: true },
  { char: "金", level: 1, strokeCount: 8, on: ["キン","コン"],           kun: ["かね"],                   meaning: "Oro / Dinero",           example: "金を大切にする。",             hasSvg: true },
  { char: "空", level: 1, strokeCount: 8, on: ["クウ"],                  kun: ["そら","あ.く","から"],    meaning: "Cielo",                  example: "青い空。",                     hasSvg: true },
  { char: "月", level: 1, strokeCount: 4, on: ["ゲツ","ガツ"],           kun: ["つき"],                   meaning: "Luna / Mes",             example: "月が綺麗です。",               hasSvg: true },
  { char: "犬", level: 1, strokeCount: 4, on: ["ケン"],                  kun: ["いぬ"],                   meaning: "Perro",                  example: "犬と散歩する。",               hasSvg: true },
  { char: "見", level: 1, strokeCount: 7, on: ["ケン"],                  kun: ["み.る","み.える"],        meaning: "Ver",                    example: "景色が見える。",               hasSvg: true },
  { char: "五", level: 1, strokeCount: 4, on: ["ゴ"],                    kun: ["いつ","いつ(つ)"],        meaning: "Cinco",                  example: "五時に会いましょう。",         hasSvg: true },
  { char: "口", level: 1, strokeCount: 3, on: ["コウ","ク"],             kun: ["くち"],                   meaning: "Boca",                   example: "口を閉じてください。",         hasSvg: true },
  { char: "校", level: 1, strokeCount:10, on: ["コウ"],                  kun: [],                         meaning: "Escuela",                example: "学校へ行く。",                 hasSvg: true },
  { char: "左", level: 1, strokeCount: 5, on: ["サ"],                    kun: ["ひだり"],                 meaning: "Izquierda",              example: "左に曲がります。",             hasSvg: true },
  { char: "三", level: 1, strokeCount: 3, on: ["サン"],                  kun: ["み","みっ(つ)"],          meaning: "Tres",                   example: "三人で行く。",                 hasSvg: true },
  { char: "山", level: 1, strokeCount: 3, on: ["サン"],                  kun: ["やま"],                   meaning: "Montaña",                example: "山に登る。",                   hasSvg: true },
  { char: "子", level: 1, strokeCount: 3, on: ["シ","ス"],               kun: ["こ"],                     meaning: "Niño / Hijo",            example: "子供が遊んでいる。",           hasSvg: true },
  { char: "四", level: 1, strokeCount: 5, on: ["シ"],                    kun: ["よ","よん","よっ(つ)"],   meaning: "Cuatro",                 example: "四月は春です。",               hasSvg: true },
  { char: "糸", level: 1, strokeCount: 6, on: ["シ"],                    kun: ["いと"],                   meaning: "Hilo",                   example: "糸を結ぶ。",                   hasSvg: true },
  { char: "字", level: 1, strokeCount: 6, on: ["ジ"],                    kun: ["あざ"],                   meaning: "Letra / Carácter",       example: "漢字を書く。",                 hasSvg: true },
  { char: "耳", level: 1, strokeCount: 6, on: ["ジ"],                    kun: ["みみ"],                   meaning: "Oído / Oreja",           example: "耳が痛い。",                   hasSvg: true },
  { char: "七", level: 1, strokeCount: 2, on: ["シチ"],                  kun: ["なな","なの"],            meaning: "Siete",                  example: "七時に起きる。",               hasSvg: true },
  { char: "車", level: 1, strokeCount: 7, on: ["シャ"],                  kun: ["くるま"],                 meaning: "Coche / Vehículo",       example: "車で行きます。",               hasSvg: true },
  { char: "手", level: 1, strokeCount: 4, on: ["シュ"],                  kun: ["て","た"],                meaning: "Mano",                   example: "手を洗う。",                   hasSvg: true },
  { char: "十", level: 1, strokeCount: 2, on: ["ジュウ","ジッ"],         kun: ["とお","と"],              meaning: "Diez",                   example: "十時です。",                   hasSvg: true },
  { char: "出", level: 1, strokeCount: 5, on: ["シュツ","スイ"],         kun: ["で.る","だ.す"],          meaning: "Salir",                  example: "外に出ます。",                 hasSvg: true },
  { char: "女", level: 1, strokeCount: 3, on: ["ジョ","ニョ"],           kun: ["おんな","め"],            meaning: "Mujer",                  example: "女の人が来た。",               hasSvg: true },
  { char: "小", level: 1, strokeCount: 3, on: ["ショウ"],                kun: ["ちい.さい","こ","お"],    meaning: "Pequeño",                example: "小さい猫。",                   hasSvg: true },
  { char: "上", level: 1, strokeCount: 3, on: ["ジョウ","ショウ"],       kun: ["うえ","のぼ.る"],         meaning: "Arriba / Subir",         example: "机の上に本がある。",           hasSvg: true },
  { char: "森", level: 1, strokeCount:12, on: ["シン"],                  kun: ["もり"],                   meaning: "Bosque",                 example: "深い森の中。",                 hasSvg: true },
  { char: "人", level: 1, strokeCount: 2, on: ["ジン","ニン"],           kun: ["ひと"],                   meaning: "Persona",                example: "日本人です。",                 hasSvg: true },
  { char: "水", level: 1, strokeCount: 4, on: ["スイ"],                  kun: ["みず"],                   meaning: "Agua",                   example: "水を飲む。",                   hasSvg: true },
  { char: "正", level: 1, strokeCount: 5, on: ["セイ","ショウ"],         kun: ["ただ.しい","まさ"],       meaning: "Correcto / Justo",       example: "正しい答え。",                 hasSvg: true },
  { char: "生", level: 1, strokeCount: 5, on: ["セイ","ショウ"],         kun: ["い.きる","なま","は.える"],meaning: "Vivir / Nacer",          example: "先生に会う。",                 hasSvg: true },
  { char: "青", level: 1, strokeCount: 8, on: ["セイ","ショウ"],         kun: ["あお"],                   meaning: "Azul / Verde",           example: "青い空。",                     hasSvg: true },
  { char: "夕", level: 1, strokeCount: 3, on: ["セキ"],                  kun: ["ゆう"],                   meaning: "Tarde / Noche",          example: "夕日が綺麗だ。",               hasSvg: true },
  { char: "石", level: 1, strokeCount: 5, on: ["セキ","シャク","コク"],  kun: ["いし"],                   meaning: "Piedra",                 example: "石を拾う。",                   hasSvg: true },
  { char: "赤", level: 1, strokeCount: 7, on: ["セキ","シャク"],         kun: ["あか"],                   meaning: "Rojo",                   example: "赤いりんご。",                 hasSvg: true },
  { char: "千", level: 1, strokeCount: 3, on: ["セン"],                  kun: ["ち"],                     meaning: "Mil",                    example: "千円あります。",               hasSvg: true },
  { char: "川", level: 1, strokeCount: 3, on: ["セン"],                  kun: ["かわ"],                   meaning: "Río",                    example: "川で泳ぐ。",                   hasSvg: true },
  { char: "先", level: 1, strokeCount: 6, on: ["セン"],                  kun: ["さき"],                   meaning: "Adelante / Antes",       example: "先生に聞く。",                 hasSvg: true },
  { char: "早", level: 1, strokeCount: 6, on: ["ソウ","サッ"],           kun: ["はや.い"],                meaning: "Temprano / Rápido",      example: "早起きする。",                 hasSvg: true },
  { char: "草", level: 1, strokeCount: 9, on: ["ソウ"],                  kun: ["くさ"],                   meaning: "Hierba",                 example: "草が生えている。",             hasSvg: true },
  { char: "足", level: 1, strokeCount: 7, on: ["ソク"],                  kun: ["あし","た.りる"],         meaning: "Pie / Pierna / Suficiente",example: "足が速い。",                 hasSvg: true },
  { char: "村", level: 1, strokeCount: 7, on: ["ソン"],                  kun: ["むら"],                   meaning: "Aldea / Pueblo",         example: "田舎の村。",                   hasSvg: true },
  { char: "大", level: 1, strokeCount: 3, on: ["ダイ","タイ"],           kun: ["おお.きい","おお"],       meaning: "Grande",                 example: "大きい犬。",                   hasSvg: true },
  { char: "男", level: 1, strokeCount: 7, on: ["ダン","ナン"],           kun: ["おとこ"],                 meaning: "Hombre",                 example: "男の人が来た。",               hasSvg: true },
  { char: "竹", level: 1, strokeCount: 6, on: ["チク"],                  kun: ["たけ"],                   meaning: "Bambú",                  example: "竹の棒。",                     hasSvg: true },
  { char: "中", level: 1, strokeCount: 4, on: ["チュウ"],                kun: ["なか"],                   meaning: "Dentro / Centro",        example: "箱の中に入れる。",             hasSvg: true },
  { char: "虫", level: 1, strokeCount: 6, on: ["チュウ"],                kun: ["むし"],                   meaning: "Insecto",                example: "虫が飛んでいる。",             hasSvg: true },
  { char: "町", level: 1, strokeCount: 7, on: ["チョウ"],                kun: ["まち"],                   meaning: "Ciudad / Barrio",        example: "町を歩く。",                   hasSvg: true },
  { char: "天", level: 1, strokeCount: 4, on: ["テン"],                  kun: ["あめ","あま"],            meaning: "Cielo / Dios",           example: "天気がいい。",                 hasSvg: true },
  { char: "田", level: 1, strokeCount: 5, on: ["デン"],                  kun: ["た"],                     meaning: "Arrozal / Campo",        example: "田んぼで米を作る。",           hasSvg: true },
  { char: "土", level: 1, strokeCount: 3, on: ["ド","ト"],               kun: ["つち"],                   meaning: "Tierra / Suelo",         example: "土を掘る。",                   hasSvg: true },
  { char: "二", level: 1, strokeCount: 2, on: ["ニ"],                    kun: ["ふた","ふた(つ)"],        meaning: "Dos",                    example: "二人でいく。",                 hasSvg: true },
  { char: "日", level: 1, strokeCount: 4, on: ["ニチ","ジツ"],           kun: ["ひ","か"],                meaning: "Sol / Día",              example: "今日は晴れです。",             hasSvg: true },
  { char: "入", level: 1, strokeCount: 2, on: ["ニュウ"],                kun: ["い.る","い.れる","は.いる"],meaning: "Entrar",               example: "部屋に入る。",                 hasSvg: true },
  { char: "年", level: 1, strokeCount: 6, on: ["ネン"],                  kun: ["とし"],                   meaning: "Año",                    example: "今年は何年ですか。",           hasSvg: true },
  { char: "白", level: 1, strokeCount: 5, on: ["ハク","ビャク"],         kun: ["しろ","しら"],            meaning: "Blanco",                 example: "白い雲。",                     hasSvg: true },
  { char: "八", level: 1, strokeCount: 2, on: ["ハチ"],                  kun: ["や","やっ(つ)"],          meaning: "Ocho",                   example: "八時に起きる。",               hasSvg: true },
  { char: "百", level: 1, strokeCount: 6, on: ["ヒャク"],                kun: [],                         meaning: "Cien",                   example: "百円ください。",               hasSvg: true },
  { char: "文", level: 1, strokeCount: 4, on: ["ブン","モン"],           kun: ["ふみ","ふみ"],            meaning: "Texto / Escritura",      example: "文章を読む。",                 hasSvg: true },
  { char: "木", level: 1, strokeCount: 4, on: ["モク","ボク"],           kun: ["き","こ"],                meaning: "Árbol / Madera",         example: "木の下で休む。",               hasSvg: true },
  { char: "本", level: 1, strokeCount: 5, on: ["ホン"],                  kun: ["もと"],                   meaning: "Libro / Origen",         example: "本を読む。",                   hasSvg: true },
  { char: "名", level: 1, strokeCount: 6, on: ["メイ","ミョウ"],         kun: ["な"],                     meaning: "Nombre",                 example: "お名前は何ですか。",           hasSvg: true },
  { char: "目", level: 1, strokeCount: 5, on: ["モク","ボク"],           kun: ["め","ま"],                meaning: "Ojo",                    example: "目が悪い。",                   hasSvg: true },
  { char: "立", level: 1, strokeCount: 5, on: ["リツ","リュウ"],         kun: ["た.つ","た.てる"],        meaning: "Pararse / Erigir",       example: "立ってください。",             hasSvg: true },
  { char: "力", level: 1, strokeCount: 2, on: ["リョク","リキ"],         kun: ["ちから"],                 meaning: "Fuerza",                 example: "力を入れる。",                 hasSvg: true },
  { char: "林", level: 1, strokeCount: 8, on: ["リン"],                  kun: ["はやし"],                 meaning: "Arboleda",               example: "林の中を歩く。",               hasSvg: true },
  { char: "六", level: 1, strokeCount: 4, on: ["ロク"],                  kun: ["む","むっ(つ)","むい"],   meaning: "Seis",                   example: "六時に来てください。",         hasSvg: true },
];

// ─── Level 2 Kanji — 160 chars, stroke counts only ───────────────────────────

const LEVEL2_STROKES: Record<string, number> = {
  "引":4,"羽":6,"雲":12,"園":13,"遠":13,"何":7,"科":9,"夏":10,"家":10,"歌":14,
  "画":8,"回":6,"会":6,"海":9,"絵":12,"外":5,"角":7,"楽":13,"活":9,"間":12,
  "丸":3,"岩":8,"顔":18,"汽":7,"記":10,"帰":10,"弓":3,"牛":4,"魚":11,"京":8,
  "強":11,"教":11,"近":6,"兄":5,"形":7,"計":9,"元":4,"言":7,"原":10,"戸":4,
  "古":5,"午":4,"後":9,"語":14,"工":3,"公":4,"広":5,"交":6,"光":6,"考":6,
  "行":6,"高":10,"黄":11,"合":6,"谷":7,"国":8,"黒":11,"今":4,"才":3,"細":11,
  "作":7,"算":14,"止":4,"市":5,"矢":5,"姉":7,"思":9,"紙":10,"寺":6,"自":6,
  "時":10,"室":9,"社":7,"弱":10,"首":9,"秋":9,"週":11,"春":9,"書":10,"少":4,
  "場":12,"色":6,"食":9,"心":4,"新":13,"親":16,"図":7,"数":13,"西":6,"声":7,
  "星":9,"晴":12,"切":4,"雪":11,"船":11,"線":15,"前":9,"組":11,"走":7,"多":6,
  "太":4,"体":7,"台":5,"地":6,"池":6,"知":9,"茶":9,"昼":9,"長":8,"鳥":11,
  "朝":12,"直":8,"通":10,"弟":7,"店":8,"点":9,"電":13,"刀":2,"冬":5,"当":6,
  "東":8,"答":12,"頭":16,"同":6,"道":12,"読":14,"内":4,"南":9,"肉":6,"馬":10,
  "売":7,"買":12,"麦":7,"半":5,"番":12,"父":4,"風":9,"分":4,"聞":14,"米":6,
  "歩":8,"母":5,"方":4,"北":5,"毎":6,"妹":8,"万":3,"明":8,"鳴":14,"毛":4,
  "門":8,"夜":8,"野":11,"友":4,"用":5,"曜":18,"来":7,"里":7,"理":11,"話":13,
};

const LEVEL2: KanjiEntry[] = Object.keys(LEVEL2_STROKES).map(char => ({
  char,
  level: 2,
  strokeCount: LEVEL2_STROKES[char],
  on: [],
  kun: [],
  meaning: "",
  example: "",
  hasSvg: true,
}));

// ─── Levels 3–8 — chars only ─────────────────────────────────────────────────

const LEVELS_3_8: Array<{ level: number; chars: string[] }> = [
  { level: 3, chars: ['悪','安','暗','医','委','意','育','員','院','飲','運','泳','駅','央','横','屋','温','化','荷','界','開','階','寒','感','漢','館','岸','起','期','客','究','急','級','宮','球','去','橋','業','曲','局','銀','区','苦','具','君','係','軽','血','決','研','県','庫','湖','向','幸','港','号','根','祭','皿','仕','死','使','始','指','歯','詩','次','事','持','式','実','写','者','主','守','取','酒','受','州','拾','終','習','集','住','重','宿','所','暑','助','昭','消','商','章','勝','乗','植','申','身','神','真','深','進','世','整','昔','全','相','送','想','息','速','族','他','打','対','待','代','第','題','炭','短','談','着','注','柱','丁','帳','調','追','定','庭','笛','鉄','転','都','度','投','豆','島','湯','登','等','動','童','農','波','配','倍','箱','畑','発','反','坂','板','皮','悲','美','鼻','筆','氷','表','秒','病','品','負','部','服','福','物','平','返','勉','放','味','命','面','問','役','薬','由','油','有','遊','予','羊','洋','葉','陽','様','落','流','旅','両','緑','礼','列','練','路','和'] },
  { level: 4, chars: ['愛','械','泣','健','産','唱','然','典','票','民','案','害','給','験','散','焼','争','伝','標','無','以','街','挙','固','残','照','倉','徒','不','約','衣','各','漁','功','氏','城','巣','努','夫','勇','位','覚','共','好','司','縄','束','灯','付','要'] },
  { level: 5, chars: ['圧','囲','移','因','永','営','衛','易','益','液','演','応','往','桜','可','仮','価','河','過','快','解','格','確','額','刊','幹','慣','眼','紀','基','寄','規','喜','技','義','逆','久','旧','救','居','許','境','均','禁','句','型','経','潔','件','険','検','限','現','減','故','個','護','効','厚','耕','航','鉱','構','興','講','告','混'] },
  { level: 6, chars: ['胃','異','遺','域','宇','映','延','沿','恩','我','灰','拡','革','閣','割','株','干','巻','看','簡','危','机','揮','貴','疑','吸','供','胸','郷','勤','筋','系','敬','警','劇','激','穴','券','絹','権','憲','源','厳','己','呼','誤','后','孝','皇','紅','降','鋼','刻','穀','骨','困'] },
  { level: 7, chars: ['握','扱','依','威','為','偉','違','維','緯','壱','芋','陰','隠','影','鋭','越','援','煙','鉛','縁','汚','押','奥','憶','菓','暇','箇','雅','介','戒','皆','壊','較','獲','刈','甘','汗','乾','勧','歓','監','環','鑑','含','奇','祈','鬼','幾','脚','及'] },
  { level: 8, chars: ['哀','慰','詠','悦','閲','炎','宴','欧','殴','乙','卸','穏','佳','架','華','嫁','餓','怪','悔','塊','慨','該','概','郭','隔','穫','岳','掛','滑','肝','冠','勘','貫','喚','換','敢','緩','企','忌','軌','既','棋','棄','騎','欺','犠','菊','吉','喫','虐'] },
];

const LEVELS_3_8_ENTRIES: KanjiEntry[] = LEVELS_3_8.flatMap(({ level, chars }) =>
  chars.map(char => ({
    char,
    level,
    strokeCount: 0,
    on: [],
    kun: [],
    meaning: "",
    example: "",
    hasSvg: false,
  }))
);

// ─── Full list ────────────────────────────────────────────────────────────────

export const KANJI_LIST: KanjiEntry[] = [...LEVEL1, ...LEVEL2, ...LEVELS_3_8_ENTRIES];

// ─── Level metadata ───────────────────────────────────────────────────────────

export const LEVEL_META: Record<number, { label: string; color: string; accent: string; available: boolean }> = {
  1: { label: "Nivel 1",  color: "#A5D6A7", accent: "#2E7D32", available: true },
  2: { label: "Nivel 2",  color: "#C8E6C9", accent: "#388E3C", available: true },
  3: { label: "Nivel 3",  color: "#DCEDC8", accent: "#558B2F", available: false },
  4: { label: "Nivel 4",  color: "#F0F4C3", accent: "#827717", available: false },
  5: { label: "Nivel 5",  color: "#FFF9C4", accent: "#F57F17", available: false },
  6: { label: "Nivel 6",  color: "#FFE0B2", accent: "#E65100", available: false },
  7: { label: "Nivel 7",  color: "#FFCCBC", accent: "#BF360C", available: false },
  8: { label: "Nivel 8",  color: "#D7CCC8", accent: "#4E342E", available: false },
};