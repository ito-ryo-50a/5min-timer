let timer = 300; // 5分（300秒）
let intervalId = null;
const timerDisplay = document.getElementById("timer");

// 時間をフォーマットする関数
function formatTime(seconds) {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${minutes}:${secs}`;
}

// タイマーを更新する関数
function updateTimer() {
    timerDisplay.textContent = formatTime(timer);
}

// スタートボタンの処理
document.getElementById("start").addEventListener("click", () => {
    if (intervalId === null) {
        intervalId = setInterval(() => {
            if (timer > 0) {
                timer--;
                updateTimer();
            } else {
                clearInterval(intervalId);
                intervalId = null;
                // 5分経過時にブラウザのアラートを表示
                alert("お疲れさまです、5分経過しました! \n\n以下に回答してください。\n- 見てどう思った？\n- 3つ覚えたことを教えて？");
            }
        }, 1000);
    }
});

// 一時停止ボタンの処理
document.getElementById("pause").addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
});

// リセットボタンの処理
document.getElementById("reset").addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
    timer = 300;
    updateTimer();
});

// 初期表示の更新
updateTimer();
