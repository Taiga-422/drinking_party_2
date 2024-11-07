


function play(userChoice) {
    // 利用可能な選択肢を配列として定義
    const choices = [`rock`, `scissors`, `paper`];

    // コンピュータの選択をランダムに決定
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = ``;

    // ユーザとコンピュータの選択を比較して結果を判定
    if (userChoice === computerChoice) {
        console.log("引き分け!")
        result = "引き分け！";
    } else if (
        (userChoice === `rock` && computerChoice === `scissors`) ||
        (userChoice === `scissors` && computerChoice === `paper`) ||
        (userChoice === `paper` && computerChoice === `rock`)
    ) {
        console.log("あなたの勝ち!")
        result = "あなたの勝ち！";
    } else {
        console.log("あなたの負け…")
        result = "あなたの負け…";
    }

    // 英語の選択を日本語に変換するためのマッピングオブジェクト
    //ある値と別の値を対応させるためのオブジェクト。
    // 例えば、英語と日本語を対応させたい場合、 マッピングオブジェクトを使って
    // {'apple': 'りんご', 'banana': 'バナナ'} のように記述。
    // これで、「apple」を入れると「りんご」が返ってくるようになる。

    const choiceMapping = {
        'rock': 'グー',
        'scissors': 'チョキ',
        'paper': 'パー'
    };


    // 選択に対応する画像のURLを保持するオブジェクト
    const choiceImage = {
        'rock': 'https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14296.png',
        'scissors': 'https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14297.png',
        'paper': 'https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14298.png'
    };

    // コンピュータの選択を日本語に変換
    const computerChoicejapanese = choiceMapping[computerChoice];
    // choiceMapping[computerChoice] は、
    // computerChoice で指定されたキーに対応する値を 
    // choiceMapping オブジェクトから取得。
    // つまり、コンピュータの選んだ手が英語で rock ならば、
    // choiceMapping[rock] として グー を取得する

    // 結果テキストの作成
  
    const resultText = `コンピューターの選択： ${computerChoicejapanese}. 結果: ${result}`;

    // ユーザの選択を画像で表示
    const yourChoiceImg = document.getElementById(`userChoiceImg`);
    // userChoiceImgというID属性を持ったタグを使用できるように代入する
    yourChoiceImg.src = choiceImage[userChoice];

    // コンピュータの選択を画像で表示
    const computerChoiceImg = document.getElementById(`computerChoiceImg`);
    computerChoiceImg.src = choiceImage[computerChoice];

    // 結果を履歴として追加
    const historyElement = document.createElement('p');
    historyElement.innerText = resultText;

    // 履歴をDOMに追加
    const addHistory = document.getElementById('history');
    addHistory.prepend(historyElement);

}


// バックグラウンドで音楽再生
const music = new Howl({
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/%22Ethiopia_Rag%22_%281909%29%2C_by_Joseph_F._Lamb.mp3',
    autoplay: true,
    volume: 0.2,
    loop: true,
});
music.play();

