# Komorebi Cafe

HTML/CSS/JavaScriptのみで実装した、架空カフェの1ページランディングページです。  
フレームワークや外部APIを使わず、GitHub Pagesでそのまま公開できる静的サイトとして作成しています。

## 概要

Komorebi Cafeは、木漏れ日と焼き菓子の香りを楽しむ架空カフェのLPです。  
Hero、About、Menu、Features、Access、Contact、Footerを1ページにまとめ、スマホでも見やすいレイアウトにしています。

掲載している店舗名、住所、駅名、メニュー、価格はすべて架空です。実在の個人情報、メールアドレス、電話番号は掲載していません。

## 特徴

- スマホ対応のレスポンシブデザイン
- ハンバーガーメニュー付きのナビゲーション
- ページ内リンクで各セクションへ移動
- sticky header使用時に見出しが隠れにくい `scroll-margin-top` 設定
- CSS背景と装飾だけでカフェらしい雰囲気を表現
- Contactフォームは見た目だけのデモで、実際の送信処理はなし
- `button`、`aria-expanded`、`aria-controls`、スキップリンクなどの基本的なアクセシビリティ対応

## 使用技術

- HTML
- CSS
- JavaScript

React、Next.js、外部API、ビルドツールは使用していません。

## ファイル構成

```text
cafe-landing-page/
├── AGENTS.md
├── README.md
├── index.html
├── styles.css
├── script.js
└── .gitignore
```

## ローカルでの表示方法

ブラウザで直接確認する場合:

1. `index.html` をブラウザで開く
2. ナビゲーションやCTAボタンを押して、各セクションへ移動できることを確認する
3. 画面幅を狭くして、ハンバーガーメニューが開閉することを確認する
4. Contactのデモフォームで「送信せずに確認する」を押し、実際の送信が行われないことを確認する

ローカルサーバーで確認する場合:

```bash
python3 -m http.server 8000
```

起動後、ブラウザで `http://localhost:8000` を開きます。

## GitHub Pagesでの公開方法

1. このフォルダの内容をGitHubリポジトリにpushする
2. GitHubのリポジトリ画面で `Settings` を開く
3. `Pages` を開く
4. `Build and deployment` の `Source` で `Deploy from a branch` を選ぶ
5. Branchに `main`、フォルダに `/root` を選んで保存する
6. 数分後に表示される公開URLへアクセスし、ページが表示されることを確認する

## 公開URL

https://artssm0219.github.io/cafe-landing-page/
