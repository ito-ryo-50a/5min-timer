let timer = 300; // 5分 = 300秒
let intervalId = null;
const timerDisplay = document.getElementById("timer");
const alertBox = document.getElementById("alert");

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
                alertBox.classList.remove("hidden");
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
    alertBox.classList.add("hidden");
});

// 初期表示の更新
updateTimer();
