
// カードのマークとランクの定義
const marks = ["♠", "♥", "♦", "♣"];
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// 現在のカードとスコア
let currentCard = drawCard();
let conbo = 0;  // 連続正解数

// 「innerText」のプロパティは、その要素のテキスト内容を設定するために必要。
document.querySelector("#current-card").innerText = `Current Card: ${currentCard.rank} ${currentCard.mark}`;

// カードを引く関数
// 「marks.legth」「ranks.length」と書くことで、marksやranksの配列のインデックスとして使える範囲の数を得ることができる。
function drawCard() {
    let mark = marks[Math.floor(Math.random() * marks.length)];
    let rank = ranks[Math.floor(Math.random() * ranks.length)];
    return { mark: mark, rank: rank, rankValue: ranks.indexOf(rank) };
}

// ゲームの予測関数
function guess(prediction) {
    let newCard = drawCard(); //新しいカードを引いて、そのカード情報をnewCardに代入する。後で使う
    let resultText = ''; //予測結果に応じて、テキストの内容を変えるために変数を作っておく。GsのEランでやってた。

    // 下のコードの場合、もし予測結果が「highかつ引いたカード情報のランクが現在のカードよりも高い場合」を意味している。
    if ((prediction === 'high' && newCard.rankValue > currentCard.rankValue) ||
        (prediction === 'low' && newCard.rankValue < currentCard.rankValue)) {
        resultText = `正解! 今回のカードは ${newCard.rank} ${newCard.mark}.`;
        conbo++;  // 正解した場合、連続正解数を増やす
    } else {
        resultText = `残念! 今回のカードは ${newCard.rank} ${newCard.mark}.`;
        conbo = 0;  // 間違えた場合、連続正解数をリセット
    }

    // 結果と連続正解数の更新
    document.querySelector("#result").innerText = resultText;
    document.querySelector("#score").innerText = `conbo: ${conbo}`;

    // 新しいカードをセット
    currentCard = newCard;
    document.querySelector("#current-card").innerText = `Current Card: ${currentCard.rank} ${currentCard.mark}`;
}

// バックグラウンドで音楽再生（Holer.jsのライブラリを使用）
const music = new Howl({
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/%22Ethiopia_Rag%22_%281909%29%2C_by_Joseph_F._Lamb.mp3',
    autoplay: true,
    volume: 0.2,
    loop: true,
});
music.play();