/* =====================================================================
   定期イベント「リアル人妻・彼氏持ち相席居酒屋「よいどれ」」のサイトデータ

   ★ このイベントのサイト（yoidore/ フォルダ）の文章・画像・メンバーは、
     このファイルだけを編集すれば更新できます。

   画像は assets/images/yoidore/ フォルダに入れて、ここにパスを書きます。
   ===================================================================== */

window.EVENT_SITE = {
  id: "yoidore",
  name: "リアル人妻・彼氏持ち相席居酒屋「よいどれ」",
  logo: "assets/images/yoidore/logo.svg",

  /* サイトの色（メインの色 / 濃い色 / 薄い背景色 / 線の色） */
  theme: { main: "#d9622b", dark: "#8f3a12", pale: "#fff4ec", line: "#f5d9c7" },

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
    { image: "assets/images/yoidore/slide-1.svg", alt: "スライド1", link: "" },
    { image: "assets/images/yoidore/slide-2.svg", alt: "スライド2", link: "join.html" },
    { image: "assets/images/yoidore/slide-3.svg", alt: "スライド3", link: "members.html" },
  ],

  /* ---------------------------------------------------------------
     ABOUT（イベントの概要）
       poster … ポスター画像（縦長）。不要なら "" にすると文章だけになります
       info   … 開催情報の表。不要なら [] にすると表示されません
     --------------------------------------------------------------- */
  about: {
    poster: "assets/images/yoidore/poster.webp",
    lead: "やば、楽しすぎて時間忘れてた！……あ、電話来てる",
    text: [
      "VRChatでは珍しい、リアルでお相手のいる女性と1対1でお話しできる相席居酒屋イベントです。",
      "雑談するもよし、恋愛相談や惚気話も大歓迎！ 次の1週間をがんばるために、英気を養っていきませんか？",
    ],
    info: [
      { label: "開催日時", value: "毎週日曜日 23:00〜24:00" },
      { label: "開催場所", value: "VRChat グループインスタンス" },
      { label: "グループ", value: "リアル人妻・彼氏持ち相席居酒屋「よいどれ」（YIDR.1006）" },
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
       thumb   … 一覧やスライド用の小さい写真（省略可。無ければ image を使います。600×800 程度）
       comment … 在籍一覧で画像を押したときに出る「ひとことコメント」
       bio     … メンバー紹介ページの本文（1 要素 = 1 段落）
       links   … メンバー紹介ページに出すリンク（省略可）
     ホームの MEMBER では、この並び順で写真が流れます。
     --------------------------------------------------------------- */
  memberSlideInterval: 3000, // 写真が 1 人分進む間隔（ミリ秒）
  members: [
    {
      id: "afro",
      name: "Afroちゃん",
      role: "キャスト",
      image: "assets/images/yoidore/members/afro.webp",
      thumb: "assets/images/yoidore/members/thumb/afro.webp",
      comment: "お話しするの大好き！こいバナはもっと大好き！！！ぜひとなりで聞かせて！？",
      bio: [],
      links: [],
    },
    {
      id: "sora",
      name: "そら",
      role: "キャスト",
      image: "assets/images/yoidore/members/sora.webp",
      thumb: "assets/images/yoidore/members/thumb/sora.webp",
      comment: "ダウナー系ギャル人妻とお話しよ〜？",
      bio: [],
      links: [],
    },
    {
      id: "aguni",
      name: "あぐに",
      role: "キャスト",
      image: "assets/images/yoidore/members/aguni.webp",
      thumb: "assets/images/yoidore/members/thumb/aguni.webp",
      comment: "相談？お姉さんにいくらでも聞かせてよ",
      bio: [],
      links: [],
    },
    {
      id: "opitapi",
      name: "おぴたぴ",
      role: "キャスト",
      image: "assets/images/yoidore/members/opitapi.webp",
      thumb: "assets/images/yoidore/members/thumb/opitapi.webp",
      comment: "お酒弱いんだけど、いっしょに飲んでおしゃべりしてくれる？",
      bio: [],
      links: [],
    },
    {
      id: "omochimochigome",
      name: "おもちもちごめ",
      role: "キャスト",
      image: "assets/images/yoidore/members/omochimochigome.webp",
      thumb: "assets/images/yoidore/members/thumb/omochimochigome.webp",
      comment: "お酒とのろけを聞くのが大好き！お酒を飲みながらいっしょにお話ししましょう！",
      bio: [],
      links: [],
    },
    {
      id: "oiwa-rock",
      name: "お岩_rock",
      role: "キャスト",
      image: "assets/images/yoidore/members/oiwa-rock.webp",
      thumb: "assets/images/yoidore/members/thumb/oiwa-rock.webp",
      comment: "お酒と相席にカンパイ！！！！",
      bio: [],
      links: [],
    },
    {
      id: "tsubaki",
      name: "つばき",
      role: "キャスト",
      image: "assets/images/yoidore/members/tsubaki.webp",
      thumb: "assets/images/yoidore/members/thumb/tsubaki.webp",
      comment: "ふわっとおじゃましまーす！お話もお酒も、ゆっくり楽しも〜！",
      bio: [],
      links: [],
    },
    {
      id: "nurumayu",
      name: "ぬるまゆ。",
      role: "キャスト",
      image: "assets/images/yoidore/members/nurumayu.webp",
      thumb: "assets/images/yoidore/members/thumb/nurumayu.webp",
      comment: "惚気が栄養！！いっぱい話そ〜〜",
      bio: [],
      links: [],
    },
    {
      id: "nemutaro",
      name: "ねむた郎",
      role: "キャスト",
      image: "assets/images/yoidore/members/nemutaro.webp",
      thumb: "assets/images/yoidore/members/thumb/nemutaro.webp",
      comment: "自我丸出しでいきます。対戦よろしくお願いします",
      bio: [],
      links: [],
    },
    {
      id: "nottan",
      name: "のったん",
      role: "キャスト",
      image: "assets/images/yoidore/members/nottan.webp",
      thumb: "assets/images/yoidore/members/thumb/nottan.webp",
      comment: "相席失礼しちゃいまーす！え？カレシ？いるよ！今日は何話そっか！",
      bio: [],
      links: [],
    },
    {
      id: "mozuku",
      name: "もずく",
      role: "キャスト",
      image: "assets/images/yoidore/members/mozuku.webp",
      thumb: "assets/images/yoidore/members/thumb/mozuku.webp",
      comment: "あら、隣になりましたね。…今日はどんな1日だったんですか？",
      bio: [],
      links: [],
    },
    {
      id: "mochimochitree",
      name: "もちもちtree",
      role: "キャスト",
      image: "assets/images/yoidore/members/mochimochitree.webp",
      thumb: "assets/images/yoidore/members/thumb/mochimochitree.webp",
      comment: "いっぱいお話聞かせて？酒の肴にしちゃいましょ♪",
      bio: [],
      links: [],
    },
    {
      id: "yakechama",
      name: "やけちゃま",
      role: "キャスト",
      image: "assets/images/yoidore/members/yakechama.webp",
      thumb: "assets/images/yoidore/members/thumb/yakechama.webp",
      comment: "今日はお姉さんとどんなお話する？",
      bio: [],
      links: [],
    },
    {
      id: "yuzuponzu",
      name: "ゆずぽん酢",
      role: "キャスト",
      image: "assets/images/yoidore/members/yuzuponzu.webp",
      thumb: "assets/images/yoidore/members/thumb/yuzuponzu.webp",
      comment: "口数は少ないですが、お酒を飲む手は止めません",
      bio: [],
      links: [],
    },
    {
      id: "riberu",
      name: "りべる",
      role: "キャスト",
      image: "assets/images/yoidore/members/riberu.webp",
      thumb: "assets/images/yoidore/members/thumb/riberu.webp",
      comment: "今ひと仕事してきたんだよねぇ。良かったらいっしょにゆっくりしよ？",
      bio: [],
      links: [],
    },
    {
      id: "rokochi",
      name: "ろこち",
      role: "キャスト",
      image: "assets/images/yoidore/members/rokochi.webp",
      thumb: "assets/images/yoidore/members/thumb/rokochi.webp",
      comment: "え、おごり！？やった〜",
      bio: [],
      links: [],
    },
    {
      id: "saya",
      name: "沙夜",
      role: "キャスト",
      image: "assets/images/yoidore/members/saya.webp",
      thumb: "assets/images/yoidore/members/thumb/saya.webp",
      comment: "だんなにナイショで来ちゃった、ゆっくりお話しましょ",
      bio: [],
      links: [],
    },
    {
      id: "reiko",
      name: "糸翠 玲孤",
      role: "キャスト",
      image: "assets/images/yoidore/members/reiko.webp",
      thumb: "assets/images/yoidore/members/thumb/reiko.webp",
      comment: "私のカレシが見守ってるけど、私と何話しましょうか？",
      bio: [],
      links: [],
    },
    {
      id: "nanatsu",
      name: "七紡（ななつ）",
      role: "キャスト",
      image: "assets/images/yoidore/members/nanatsu.webp",
      thumb: "assets/images/yoidore/members/thumb/nanatsu.webp",
      comment: "むすめがここでお手伝いしてるの。…心配できちゃった♪ ちょっとおとなり失礼するわね。",
      bio: [],
      links: [],
    },
    {
      id: "amana",
      name: "あまな",
      role: "スタッフ",
      image: "assets/images/yoidore/members/amana.webp",
      thumb: "assets/images/yoidore/members/thumb/amana.webp",
      comment: "あまな、がんばる！",
      bio: [],
      links: [],
    },
    {
      id: "gatsu",
      name: "がつ",
      role: "スタッフ",
      image: "assets/images/yoidore/members/gatsu.webp",
      thumb: "assets/images/yoidore/members/thumb/gatsu.webp",
      comment: "陰ながら見守ります！",
      bio: [],
      links: [],
    },
    {
      id: "niko",
      name: "ニコ",
      role: "スタッフ",
      image: "assets/images/yoidore/members/niko.webp",
      thumb: "assets/images/yoidore/members/thumb/niko.webp",
      comment: "い゛ら゛っしゃい゛ま゛せぇ゛ェ！ご注文承り゛ま゛ァす！！",
      bio: [],
      links: [],
    },
    {
      id: "hakaishi-tea",
      name: "墓石てあ",
      role: "スタッフ",
      image: "assets/images/yoidore/members/hakaishi-tea.webp",
      thumb: "assets/images/yoidore/members/thumb/hakaishi-tea.webp",
      comment: "何か有りましたらお気軽にお呼び下さいね。",
      bio: [],
      links: [],
    },
    {
      id: "gippururu",
      name: "Gippururu",
      role: "スタッフ",
      image: "assets/images/yoidore/members/gippururu.webp",
      thumb: "assets/images/yoidore/members/thumb/gippururu.webp",
      comment: "私よりも他の子たちを見なさい。その方が目の保養になるでしょ？",
      bio: [],
      links: [],
    },
  ],

  /* ---------------------------------------------------------------
     各種リンク（url は後で本物に差し替えてください）
     --------------------------------------------------------------- */
  links: [
    { label: "X (Twitter)", note: "最新情報はこちら", url: "#" },
    { label: "VRChat Group", note: "グループに参加する", url: "#" },
  ],
};
