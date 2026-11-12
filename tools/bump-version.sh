#!/bin/sh
# 公開前に実行するスクリプト。
# すべての HTML が読み込む CSS・JS・データファイルの URL に「?v=日時」を付け直します。
# こうしておくと、更新後に閲覧者のブラウザが古いファイルを使い続けるのを防げます。
#
# 使い方（プロジェクトのフォルダで）:  sh tools/bump-version.sh
cd "$(dirname "$0")/.." || exit 1
V=$(date +%Y%m%d%H%M)
sed -E -i '' 's#((href|src)="(\.\./)?(assets/(css|js)|data)/[^"?]+)(\?v=[^"]*)?"#\1?v='"$V"'"#g' *.html */*.html
echo "version: $V"
