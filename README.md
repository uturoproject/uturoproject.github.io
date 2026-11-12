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
| `assets/js/main.js` | 表示の仕組み |

## よくある更新

すべて `data/site-data.js` を編集します。

- **ロゴを差し替える** … 画像を `assets/images/` に入れ、`logo` のパスを書き換える
- **スライドを変える** … `slides` に画像（横長・1600×600 目安）を追加／削除。間隔は `slideInterval`
- **イベントなどを追加する** … `categories.event.items` の先頭に 1 件追加（`id` は半角英数字で重複しないように）
- **運営・スタッフを変える** … `members.core`（プロフィールあり）／`members.staff`（表示のみ）
- **リンクを変える** … `links`
- **ヘッダーのメニューを増やす** … `nav` に追加。新しい一覧ページが必要なら `event.html` をコピーして
  `data-category` と `data-nav` を書き換え、`categories` に同じ名前の項目を追加

## 手元で確認する

```bash
python3 -m http.server 8765
```

ブラウザで http://localhost:8765 を開きます。

## GitHub Pages で公開する

1. GitHub にリポジトリを作成し、このフォルダの中身を push
2. リポジトリの Settings → Pages → Source を「Deploy from a branch」、Branch を `main` / `/ (root)` にして保存
3. 数分後に `https://<ユーザー名>.github.io/<リポジトリ名>/` で公開されます
