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
     EVENT（行なっている個人イベント）
       description … ホームと EVENT ページの冒頭に出す説明文
       items       … EVENT ページに並ぶイベント
         title    … イベント名
         schedule … 開催日時など（省略可）
         image    … 画像（横長 16:9 推奨）
         text     … 説明文（1 要素 = 1 段落）
         links    … ボタンにするリンク（省略可）
     --------------------------------------------------------------- */
  events: {
    description: "夢見虚が個人で行なっているイベントを紹介します。ここに説明文が入ります。（仮の文章）",
    buttonLabel: "イベント一覧",
    items: [
      {
        title: "個人イベント 1",
        schedule: "毎週◯曜日 00:00〜（仮）",
        image: "assets/images/thumb-placeholder.svg",
        text: ["ここにイベントの説明文が入ります。（仮の文章）"],
        links: [], // 例: [{ label: "告知ポストを見る", url: "https://..." }]
      },
      {
        title: "個人イベント 2",
        schedule: "不定期開催（仮）",
        image: "assets/images/thumb-placeholder.svg",
        text: ["ここにイベントの説明文が入ります。（仮の文章）"],
        links: [],
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
