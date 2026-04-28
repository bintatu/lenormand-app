const cards = [
  { name: "騎士", meaning: "知らせ・動き・始まり" , meaning_short: "動き出し"  },
  { name: "クローバー", meaning: "小さな幸運・チャンス", meaning_short: "小さな幸運"  },
  { name: "船", meaning: "変化・移動・距離" , meaning_short: "移動・変化" },
  { name: "家", meaning: "安定・家庭・基盤" , meaning_short: "安定"  },
  { name: "木", meaning: "成長・健康・時間" , meaning_short: "成長・継続" },
  { name: "雲", meaning: "不安・混乱・迷い" , meaning_short: "迷い" },
  { name: "蛇", meaning: "裏・嫉妬・複雑さ" , meaning_short: "執着・裏" },
  { name: "棺", meaning: "終わり・停止・区切り" , meaning_short: "区切り" },
  { name: "花束", meaning: "喜び・贈り物・好意" , meaning_short: "好意・喜び" },
  { name: "鎌", meaning: "突然の変化・断ち切り" , meaning_short: "急変" },
  { name: "鞭", meaning: "対立・繰り返し・ストレス" , meaning_short: "ストレス" },
  { name: "鳥", meaning: "会話・不安・落ち着かなさ" , meaning_short: "不安・会話" },
  { name: "子供", meaning: "始まり・未熟・純粋" , meaning_short: "純粋" },
  { name: "狐", meaning: "警戒・自己保身・裏の意図" , meaning_short: "警戒" },
  { name: "熊", meaning: "力・支配・経済" , meaning_short: "力・影響力" },
  { name: "星", meaning: "希望・導き・理想" , meaning_short: "希望" },
  { name: "コウノトリ", meaning: "変化・改善・移行" , meaning_short: "変化" },
  { name: "犬", meaning: "信頼・友人・忠誠" , meaning_short: "信頼" },
  { name: "塔", meaning: "孤立・組織・距離" , meaning_short: "孤立" },
  { name: "庭園", meaning: "公の場・交流・人間関係" , meaning_short: "交流" },
  { name: "山", meaning: "障害・停滞・遅延" , meaning_short: "障害" },
  { name: "道", meaning: "選択・分岐・迷い" , meaning_short: "選択" },
  { name: "ネズミ", meaning: "不安・消耗・ストレス" , meaning_short: "消耗" },
  { name: "ハート", meaning: "愛情・感情・好意" 	, meaning_short: "好意" },
  { name: "指輪", meaning: "契約・関係・約束" , meaning_short: "関係" },
  { name: "本", meaning: "秘密・知識・隠されたこと" , meaning_short: "秘密" },
  { name: "手紙", meaning: "連絡・情報・メッセージ" , meaning_short: "連絡" },
  { name: "紳士", meaning: "男性・本人・主体" , meaning_short: "自分" },
  { name: "淑女", meaning: "女性・相手・受け身" , meaning_short: "相手" },
  { name: "百合", meaning: "成熟・安心・関係の深まり" , meaning_short: "成熟" },
  { name: "太陽", meaning: "成功・喜び・エネルギー" , meaning_short: "成功" },
  { name: "月", meaning: "感情・評価・揺れ" , meaning_short: "揺れ" },
  { name: "鍵", meaning: "重要・確定・解決" , meaning_short: "核心" },
  { name: "魚", meaning: "豊かさ・流れ・金運" , meaning_short: "流れ" },
  { name: "錨", meaning: "安定・継続・固着" , meaning_short: "安定" },
  { name: "十字架", meaning: "試練・運命・重荷" , meaning_short: "試練" },
];

function makeFlow(a, b, c) {
  
}
function drawCards() {
  const button = document.getElementById("drawBtn");
  button.disabled = true;
  const question = document.getElementById("question").value;
  const shuffled = [...cards].sort(() => 0.5 - Math.random());
  const now = new Date().toLocaleString();
  const selected = shuffled.slice(0, 3);

  const names = selected.map(c => c.name).join(" ");
  const topLine = `${names} （${question}）`;

  const meanings = selected
    .map(c => `${c.name} → ${c.meaning}`)
    .join("\n");



const a = selected[0]?.meaning_short ?? selected[0]?.meaning;
const b = selected[1]?.meaning_short ?? selected[1]?.meaning;
const c = selected[2]?.meaning_short ?? selected[2]?.meaning;

  const flow = makeFlow(a, b, c);

const output =
  now + "\n\n" +
  topLine + "\n\n" +
  meanings + "\n\n" +
 
  (flow ?? "");
document.getElementById("result").textContent = output;
 
  flow;
  

  setTimeout(() => {
    button.disabled = false;
  }, 2500);
}