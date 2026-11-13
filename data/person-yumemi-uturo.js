/* =====================================================================
   代表「夢見虚（Yumemi Uturo）」の個人サイトのデータ

   ★ 個人サイト（yumemi-uturo/ フォルダ）の文章・画像・リンクは、
     このファイルだけを編集すれば更新できます。

   画像は assets/images/yumemi-uturo/ フォルダに入れて、ここにパスを書きます。
   ===================================================================== */

window.PERSON_SITE = {
  id: "yumemi-uturo",
  name: "夢見虚",
  nameEn: "Yumemi Uturo",
  logo: "assets/images/yumemi-uturo/logo.svg",

  /* サイトの色（メインの色 / 濃い色 / 薄い背景色 / 線の色） */
  theme: { main: "#5b5bd6", dark: "#33338f", pale: "#f2f2ff", line: "#d9d9f7" },

  /* ヘッダーのメニュー */
  nav: [
    { label: "HOME", href: "index.html" },
    { label: "EVENT", href: "event.html" },
    { label: "所属", href: "affiliation.html" },
  ],

  /* ---------------------------------------------------------------
     プロフィール（ホームの一番上）
       image … 立ち絵などの写真（縦長 3:4 推奨）
       tags  … 名前の上に出る肩書き
       text  … 説明文（1 要素 = 1 段落）
     --------------------------------------------------------------- */
  profile: {
    image: "assets/images/member-placeholder.svg",
    tags: ["VTuber", "うつろプロジェクト 代表"],
    text: [
      "ここに夢見虚の説明文が入ります。どんな活動をしている VTuber なのかを紹介する想定です。（仮の文章）",
      "活動内容や配信の傾向、ひとことメッセージなどを 2〜3 段落ほどで記載します。（仮の文章）",
    ],
  },

  /* ---------------------------------------------------------------
     おすすめの YouTube
       id … 動画の ID。動画の URL が https://www.youtube.com/watch?v=XXXXXXXXXXX なら
            「XXXXXXXXXXX」の部分を書きます。空（""）の間は仮の枠が表示されます
       channelUrl … チャンネルの URL（書くと「チャンネルを見る」ボタンが出ます）
     --------------------------------------------------------------- */
  youtube: {
    description: "まず見てほしいおすすめの動画です。（仮の文章）",
    channelUrl: "https://www.youtube.com/@yumemiuturo",
    videos: [
      { id: "WNhWUH0Cv0w", title: "【Vtuber】マルチクリエイターを夢見る現役大学生Vtuberをお探しですか？【夢見虚】" },
      { id: "OgxmMO7DlrQ", title: "【VRChat】VRCRaycastを使ってスカートの貫通を防ぐ方法【Unity】" },
      { id: "ckTlT8s6bow", title: "【VRChat】イベント主催12名にインタビューしてみた！【夢見祭/夢見虚】" },
    ],
  },

  /* ---------------------------------------------------------------
     EVENT（過去に行なった個人イベントのアーカイブ）
       homeDescription … ホームの EVENT 欄に出す説明文
       description     … EVENT ページの冒頭に出す説明文
       items           … EVENT ページに並ぶイベント（上に書いたものが先頭）。押すと詳細ページへ進みます
         id     … URL に使う名前（半角英数字とハイフン。重複不可）
         title  … イベント名
         date   … 開催日など（省略可。例 "2026.10.31"）
         image  … サムネイル画像（横長 16:9 推奨）
         text   … 詳細ページの説明・感想（1 要素 = 1 段落）
         photos … 詳細ページに並べるイベント時の写真（何枚でも OK。押すと大きく表示）
                  例: ["assets/images/yumemi-uturo/events/odoritai/photo-01.webp", ...]
         links  … 詳細ページに出すボタン（省略可）
     --------------------------------------------------------------- */
  events: {
    homeDescription: "夢見虚がこれまでに行なった個人イベントを、写真や感想とともに振り返ります。",
    description: "これまでに行なった個人イベントのアーカイブです。押すと、当日の写真や感想が見られます。",
    buttonLabel: "イベント一覧",
    items: [
      {
        id: "odoritai",
        title: "夢見うつろは踊りたい 〜パーティクルライブお試し版〜",
        date: "", // ★ 開催日（後で追加）
        image: "assets/images/yumemi-uturo/events/odoritai/thumb.webp",
        text: ["ここにイベントの説明や感想が入ります。（仮の文章）"],
        photos: [], // ★ イベント時の写真（後で追加）
        links: [], // 例: [{ label: "告知ポストを見る", url: "https://..." }]
      },
    ],
  },

  /* ---------------------------------------------------------------
     所属（今キャストとして所属している VRChat のイベント）
       name  … イベント名
       image … キャスト紹介写真（縦長 3:4 推奨）
       xUrl  … そのイベントの公式 X の URL（画像を押したときのボタンの行き先）。空（""）の間はボタンが出ません
     --------------------------------------------------------------- */
  affiliations: {
    homeDescription: "現在キャストとして所属している VRChat のイベントを紹介します。", // ホームの所属欄に出す説明文
    buttonLabel: "所属一覧", // ホームの所属欄のボタンの文字
    description: "現在キャストとして所属している VRChat のイベントです。画像を押すと大きく表示されます。", // 所属ページの説明文
    items: [
      { name: "所属イベント 1", image: "assets/images/member-placeholder.svg", xUrl: "" },
      { name: "所属イベント 2", image: "assets/images/member-placeholder.svg", xUrl: "" },
      { name: "所属イベント 3", image: "assets/images/member-placeholder.svg", xUrl: "" },
    ],
  },

  /* ---------------------------------------------------------------
     各種リンク（url は後で本物に差し替えてください）
     --------------------------------------------------------------- */
  links: [
    { label: "YouTube", note: "配信・動画", url: "https://www.youtube.com/@yumemiuturo" },
    { label: "X (Twitter)", note: "最新情報はこちら", url: "https://x.com/yumemiuturo" },
  ],
};
