/* =====================================================================
   定期イベント「こんなのですが残念ながらサキュバスです」のサイトデータ

   ★ このイベントのサイト（succubus/ フォルダ）の文章・画像・メンバーは、
     このファイルだけを編集すれば更新できます。

   画像は assets/images/succubus/ フォルダに入れて、ここにパスを書きます。
   ===================================================================== */

window.EVENT_SITE = {
  id: "succubus",
  name: "こんなのですが残念ながらサキュバスです",
  logo: "assets/images/succubus/logo.svg",

  /* サイトの色（メインの色 / 濃い色 / 薄い背景色 / 線の色） */
  theme: { main: "#b8388f", dark: "#6e1d57", pale: "#fdf0f8", line: "#f1cfe4" },

  /* ヘッダーのメニュー */
  nav: [
    { label: "ホーム", href: "index.html" },
    { label: "参加方法", href: "join.html" },
    { label: "在籍一覧", href: "members.html" },
  ],

  /* ---------------------------------------------------------------
     ホーム最上部のスライド（横長画像。推奨サイズ 1600×600 前後）
     --------------------------------------------------------------- */
  slideInterval: 5000, // 切り替わる間隔（ミリ秒）
  slides: [
    { image: "assets/images/succubus/slide-1.svg", alt: "スライド1", link: "" },
    { image: "assets/images/succubus/slide-2.svg", alt: "スライド2", link: "join.html" },
    { image: "assets/images/succubus/slide-3.svg", alt: "スライド3", link: "members.html" },
  ],

  /* ---------------------------------------------------------------
     ABOUT（イベントの概要）
       poster … ポスター画像（縦長）。不要なら "" にすると文章だけになります
       info   … 開催情報の表。不要なら [] にすると表示されません
     --------------------------------------------------------------- */
  about: {
    poster: "assets/images/succubus/poster.jpg",
    lead: "サキュバスと過ごす、なんだか癖の強い時間",
    text: [
      "魅惑的なサキュバスが蔓延るこのVRChatに残念なサキュバスが集結！",
      "魅惑よりボケや笑いの方が多いちょっぴり変わったサキュバスラウンジをご堪能ください！",
    ],
    info: [
      { label: "開催日時", value: "毎週金曜日 23:10〜24:10" },
      { label: "開催場所", value: "VRChat グループインスタンス" },
      { label: "グループ", value: "ZNSU.8842" },
    ],
  },

  /* ---------------------------------------------------------------
     参加方法
       description … ホームと参加方法ページの冒頭に出す説明文
       steps       … 参加方法ページの手順（上から 1, 2, 3… と番号が付きます）
       notes       … 注意事項（不要なら [] ）
     --------------------------------------------------------------- */
  join: {
    description: "ここに参加方法の簡単な説明文が入ります。詳しい手順は参加方法のページをご覧ください。（仮の文章）",
    buttonLabel: "参加方法を見る",
    steps: [
      { title: "手順 1 のタイトル", text: "ここに手順の説明が入ります。（例：グループに参加する）" },
      { title: "手順 2 のタイトル", text: "ここに手順の説明が入ります。（例：開催時間にインスタンスへ入る）" },
      { title: "手順 3 のタイトル", text: "ここに手順の説明が入ります。（例：スタッフの案内に従って楽しむ）" },
    ],
    notes: [
      "ここに注意事項が入ります。（仮）",
      "ここに注意事項が入ります。（仮）",
    ],
  },

  /* ---------------------------------------------------------------
     メンバー（在籍一覧）
       id      … URL に使う名前（半角英数字とハイフン。重複不可）
       name    … 名前
       role    … 肩書き（省略可）
       image   … 写真（縦長 3:4 推奨。例 900×1200）
       comment … 在籍一覧で画像を押したときに出る「ひとことコメント」
       bio     … メンバー紹介ページの本文（1 要素 = 1 段落）
       links   … メンバー紹介ページに出すリンク（省略可）
     ホームの MEMBER では、この並び順で写真が流れます。
     --------------------------------------------------------------- */
  memberSlideInterval: 3000, // 写真が 1 人分進む間隔（ミリ秒）
  members: [
    {
      id: "member-1",
      name: "メンバー 1",
      role: "キャスト",
      image: "assets/images/member-placeholder.svg",
      comment: "ここにひとことコメントが入ります。",
      bio: ["ここにメンバーの紹介文が入ります。"],
      links: [], // 例: [{ label: "X (Twitter)", url: "https://x.com/..." }]
    },
    {
      id: "member-2",
      name: "メンバー 2",
      role: "キャスト",
      image: "assets/images/member-placeholder.svg",
      comment: "ここにひとことコメントが入ります。",
      bio: ["ここにメンバーの紹介文が入ります。"],
      links: [], // 例: [{ label: "X (Twitter)", url: "https://x.com/..." }]
    },
    {
      id: "member-3",
      name: "メンバー 3",
      role: "キャスト",
      image: "assets/images/member-placeholder.svg",
      comment: "ここにひとことコメントが入ります。",
      bio: ["ここにメンバーの紹介文が入ります。"],
      links: [], // 例: [{ label: "X (Twitter)", url: "https://x.com/..." }]
    },
    {
      id: "member-4",
      name: "メンバー 4",
      role: "キャスト",
      image: "assets/images/member-placeholder.svg",
      comment: "ここにひとことコメントが入ります。",
      bio: ["ここにメンバーの紹介文が入ります。"],
      links: [], // 例: [{ label: "X (Twitter)", url: "https://x.com/..." }]
    },
    {
      id: "member-5",
      name: "メンバー 5",
      role: "キャスト",
      image: "assets/images/member-placeholder.svg",
      comment: "ここにひとことコメントが入ります。",
      bio: ["ここにメンバーの紹介文が入ります。"],
      links: [], // 例: [{ label: "X (Twitter)", url: "https://x.com/..." }]
    },
    {
      id: "member-6",
      name: "メンバー 6",
      role: "キャスト",
      image: "assets/images/member-placeholder.svg",
      comment: "ここにひとことコメントが入ります。",
      bio: ["ここにメンバーの紹介文が入ります。"],
      links: [], // 例: [{ label: "X (Twitter)", url: "https://x.com/..." }]
    },
  ],

  /* ---------------------------------------------------------------
     各種リンク（url は後で本物に差し替えてください）
     --------------------------------------------------------------- */
  links: [
    { label: "X (Twitter)", note: "最新情報はこちら", url: "https://x.com/zansuccu_vrc" },
    { label: "VRChat Group", note: "グループに参加する", url: "https://vrc.group/ZNSU.8842" },
  ],
};
