# **5分間タイマーアプリ**

5分間の時間を計測するシンプルなタイマーアプリです。スタート、一時停止、リセットの機能を提供し、5分経過後にプロンプトが表示されます。学習や集中したい時に活用できます。

---

## **機能**

- **タイマー機能**
  - 5分間を計測。
  - スタート、一時停止、リセットが可能。
- **アラート機能**
  - 5分経過時に以下のプロンプトを表示
    - 見てどう思った？
    - 3つ覚えたことを教えて？

- **シンプルなUI**
  - 時間表示が大きく視認性が高い。
  - 必要最小限のボタン配置で操作しやすい。

---

## **インストール方法**

1. **リポジトリをクローン**
   ```bash
   git clone https://github.com/ito-ryo-50a/5min-timer.git
   ```

2. **プロジェクトディレクトリに移動**
   ```bash
   cd 5min-timer
   ```

3. **ブラウザで表示**
   `index.html` をブラウザで開きます。

---

## **使い方**

1. アプリをブラウザで開く。
2. **スタートボタン**をクリックしてタイマーを開始。
3. 必要に応じて**一時停止**または**リセット**を操作。
4. 5分経過後に表示されるプロンプトを参考に振り返りを行う。

---

## **開発環境**

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**

---

## **ファイル構成**

```
5min-timer/
├── index.html   # アプリのHTML
├── style.css    # アプリのスタイリング
├── script.js    # タイマー機能のロジック
```

---

## **カスタマイズ**

タイマー時間を変更したい場合は、`script.js` の以下の部分を編集します。

```javascript
let timer = 300; // 5分（300秒）を任意の秒数に変更できます
```

---

## **ライセンス**

このプロジェクトはMITライセンスの下で提供されています。詳細については、`LICENSE.txt` ファイルをご確認ください。

---

## **貢献**

バグ報告や機能追加、改善のご提案は、[Issueページ](https://github.com/ito-ryo-50a/5min-timer/issues)からお願いします。

---