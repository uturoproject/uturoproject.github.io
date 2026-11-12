# うつろプロジェクト ホームページ

VRChat 団体「うつろプロジェクト」の公式サイトです。
ビルド不要の静的サイト（HTML / CSS / JavaScript）で、GitHub Pages でそのまま公開できます。

## フォルダ構成

| 場所 | 内容 |
| --- | --- |
| `index.html` | ホーム |
| `event.html` / `project.html` / `work.html` | 一覧ページ |
| `detail.html` | 一覧から開く詳細ページ（共通） |
| `member.html` | 運営のプロフィールページ（共通） |
| `data/site-data.js` | **サイトの文章・画像・一覧の中身（更新は基本ここだけ）** |
| `assets/images/` | 画像置き場 |
| `assets/css/style.css` | デザイン（色は先頭の `:root` で変更） |
| `assets/js/` | 表示の仕組み（`common.js` 共通 / `main.js` メイン / `event.js` 定期イベント） |
| `yoidore/` `succubus/` | 定期イベントそれぞれのホームページ（ホーム・参加方法・在籍一覧・メンバー紹介） |
| `data/event-yoidore.js` `data/event-succubus.js` | **定期イベントのサイトの中身（文章・色・メンバーなど）** |

## よくある更新

すべて `data/site-data.js` を編集します。

- **ロゴを差し替える** … 画像を `assets/images/` に入れ、`logo` のパスを書き換える
- **スライドを変える** … `slides` に画像（横長・1600×600 目安）を追加／削除。間隔は `slideInterval`
- **イベントなどを追加する** … `categories.event.items` の先頭に 1 件追加（`id` は半角英数字で重複しないように）
- **運営・スタッフを変える** … `members.core`（プロフィールあり）／`members.staff`（表示のみ）
- **リンクを変える** … `links`
- **ヘッダーのメニューを増やす** … `nav` に追加。新しい一覧ページが必要なら `event.html` をコピーして
  `data-category` と `data-nav` を書き換え、`categories` に同じ名前の項目を追加

## 定期イベントのサイト

EVENT 一覧のカードを押すと、イベントごとのホームページ（`yoidore/` や `succubus/`）に進みます。
中身は `data/event-◯◯.js` を編集します。

- **メンバーを追加・変更する** … `members` に追加（写真は縦長 3:4 推奨、`assets/images/◯◯/` に置く）。
  `comment` は在籍一覧で画像を押したときに出るひとことコメント
- **色を変える** … `theme`
- **参加方法を書く** … `join.steps`（手順）と `join.notes`（注意事項）
- **定期イベントを増やす** … `yoidore/` フォルダと `data/event-yoidore.js` をコピーして名前を変え、
  コピーした 4 つの HTML の `event-yoidore.js` を新しい名前に書き換え、
  `data/site-data.js` の `categories.event.items` に 1 件追加

## 個人のサイト（運営）

ホームの STAFF で運営を押すと、`url` が書かれている人は個人のホームページへ進みます
（現在は代表「夢見虚」＝ `yumemi-uturo/`）。中身は `data/person-yumemi-uturo.js` を編集します。

- **おすすめの YouTube** … `youtube.videos` の `id` に動画 ID を書く
- **個人イベント** … `events.items`
- **所属** … `affiliations.items`（キャスト紹介写真と、そのイベントの公式 X の URL）
- **ほかの運営の個人サイトを作る** … `yumemi-uturo/` フォルダと `data/person-yumemi-uturo.js` をコピーして名前を変え、
  コピーした HTML の `person-yumemi-uturo.js` を書き換え、`data/site-data.js` のその人に `url` を追加

## 手元で確認する

```bash
python3 -m http.server 8765
```

ブラウザで http://localhost:8765 を開きます。

## GitHub Pages で公開する

1. GitHub にリポジトリを作成し、このフォルダの中身を push
2. リポジトリの Settings → Pages → Source を「Deploy from a branch」、Branch を `main` / `/ (root)` にして保存
3. 数分後に `https://<ユーザー名>.github.io/<リポジトリ名>/` で公開されます
