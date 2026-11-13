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
       image   … 写真（縦長 9:16。例 1125×2000）
       thumb   … 一覧・スライド用の小さい写真（省略すると image を使います）
       comment … 在籍一覧で画像を押したときに出る「ひとことコメント」
       bio     … メンバー紹介ページの本文（1 要素 = 1 段落）
       links   … メンバー紹介ページに出すリンク（省略可）
     ホームの MEMBER では、この並び順で写真が流れます。
     --------------------------------------------------------------- */
  photoRatio: "9 / 16", // メンバー写真の枠の縦横比（横 / 縦）。書かなければ 3 / 4
  memberSlideInterval: 3000, // 写真が 1 人分進む間隔（ミリ秒）
  members: [
    {
      id: "cast-01",
      name: "miifa",
      role: "キャスト",
      image: "assets/images/succubus/members/cast-01.webp",
      thumb: "assets/images/succubus/members/thumb/cast-01.webp",
      comment: "サキュバスなんて恐れ多いです！！\nわたしは一般人ですっ！！",
      bio: [],
      links: [],
    },
    {
      id: "cast-02",
      name: "のったん",
      role: "キャスト",
      image: "assets/images/succubus/members/cast-02.webp",
      thumb: "assets/images/succubus/members/thumb/cast-02.webp",
      comment: "人間たちを好きにしていいって聞いて遊びに来ちゃった♡\n何されても怒らないでねっ！",
      bio: [],
      links: [],
    },
    {
      id: "cast-03",
      name: "かたやん",
      role: "キャスト",
      image: "assets/images/succubus/members/cast-03.webp",
      thumb: "assets/images/succubus/members/thumb/cast-03.webp",
      comment: "ただのサキュバスには興味ありません！",
      bio: [],
      links: [],
    },
    {
      id: "cast-04",
      name: "かみゅう",
      role: "キャスト",
      image: "assets/images/succubus/members/cast-04.webp",
      thumb: "assets/images/succubus/members/thumb/cast-04.webp",
      comment: "うっふ〜ん♡\nサキュバスよ〜ん♡\n乾杯して〜♡",
      bio: [],
      links: [],
    },
    {
      id: "cast-05",
      name: "ギンスズメ",
      role: "キャスト",
      image: "assets/images/succubus/members/cast-05.webp",
      thumb: "assets/images/succubus/members/thumb/cast-05.webp",
      comment: "私が、私こそが正統派サキュバスだ！",
      bio: [],
      links: [],
    },
    {
      id: "cast-06",
      name: "_MENDAKO_",
      role: "キャスト",
      image: "assets/images/succubus/members/cast-06.webp",
      thumb: "assets/images/succubus/members/thumb/cast-06.webp",
      comment: "めっ",
      bio: [],
      links: [],
    },
    {
      id: "cast-07",
      name: "しゃむすけ",
      role: "キャスト",
      image: "assets/images/succubus/members/cast-07.webp",
      thumb: "assets/images/succubus/members/thumb/cast-07.webp",
      comment: "自由にしていいと飼い主に伝言を承ってます。\n好きにさせてもらうぞ。",
      bio: [],
      links: [],
    },
    {
      id: "cast-08",
      name: "ちよ",
      role: "キャスト",
      image: "assets/images/succubus/members/cast-08.webp",
      thumb: "assets/images/succubus/members/thumb/cast-08.webp",
      comment: "ごきげんよ～～～人間たち～～～～👋\n寒暖差で風邪ひかないように気を付けるんだっぞ😉",
      bio: [],
      links: [],
    },
    {
      id: "cast-09",
      name: "夢見うつろ",
      role: "キャスト",
      image: "assets/images/succubus/members/cast-09.webp",
      thumb: "assets/images/succubus/members/thumb/cast-09.webp",
      comment: "主催です、サキュバスイベントに行ったことがないです。\nサキュバスってなんですか？",
      bio: [],
      links: [],
    },
    {
      id: "cast-10",
      name: "VegaNiaPC",
      role: "キャスト",
      image: "assets/images/succubus/members/cast-10.webp",
      thumb: "assets/images/succubus/members/thumb/cast-10.webp",
      comment: "こちらが濃厚残念サキュバス無双さんのサキュバス無双ラーメン海苔トッピングです！\nうっひょ～！",
      bio: [],
      links: [],
    },
    {
      id: "cast-11",
      name: "シムカ",
      role: "キャスト",
      image: "assets/images/succubus/members/cast-11.webp",
      thumb: "assets/images/succubus/members/thumb/cast-11.webp",
      comment: "そんなに息を荒げて・・・・辛そうですね・・・・？\n貴方の欲しい物は分かっているんですよ・・・？\n火力支援要請を確認。 エネルギーライン、全段直結。\nアイゼン、ロック。タンク内正常加圧中。砲撃準備完了！",
      bio: [],
      links: [],
    },
    {
      id: "cast-12",
      name: "やけちゃま",
      role: "キャスト",
      image: "assets/images/succubus/members/cast-12.webp",
      thumb: "assets/images/succubus/members/thumb/cast-12.webp",
      comment: "俺やで",
      bio: [],
      links: [],
    },
    {
      id: "cast-13",
      name: "ゆゆっぺ",
      role: "キャスト",
      image: "assets/images/succubus/members/cast-13.webp",
      thumb: "assets/images/succubus/members/thumb/cast-13.webp",
      comment: "私の本当の姿、見ても驚かない…？",
      bio: [],
      links: [],
    },
    {
      id: "cast-14",
      name: "るーなくん",
      role: "キャスト",
      image: "assets/images/succubus/members/cast-14.webp",
      thumb: "assets/images/succubus/members/thumb/cast-14.webp",
      comment: "やあ！知っているかい？トイレにあるスッポンと呼ばれる吸盤の掃除用具があるだろう？\nあれの素材は実際にすっぽんから作られているんだ。ここだけの秘密だよ？",
      bio: [],
      links: [],
    },
    {
      id: "cast-15",
      name: "更級へき",
      role: "キャスト",
      image: "assets/images/succubus/members/cast-15.webp",
      thumb: "assets/images/succubus/members/thumb/cast-15.webp",
      comment: "うっふ〜〜〜ん♡♡♡\nサキュバスよ〜〜〜〜ん♡♡♡\n淫夢を見せるわぁ〜〜〜〜〜ん♡♡♡♡",
      bio: [],
      links: [],
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
