/* =====================================================================
   うつろプロジェクト ホームページ - サイトデータ

   ★ サイトの文章・画像・一覧の中身は、基本的にこのファイルだけを
     編集すれば更新できます。HTML を触る必要はありません。

   画像は assets/images/ フォルダに入れて、ここにパスを書きます。
   ===================================================================== */

window.SITE = {
  name: "うつろプロジェクト",
  nameEn: "UTURO PROJECT",
  logo: "assets/images/logo.svg",

  /* ---------------------------------------------------------------
     ヘッダーのメニュー。項目を増やす・減らす・並べ替える場合はここ。
     --------------------------------------------------------------- */
  nav: [
    { label: "HOME", href: "index.html" },
    { label: "EVENT", href: "event.html" },
    { label: "PROJECT", href: "project.html" },
    { label: "WORK", href: "work.html" },
  ],

  /* ---------------------------------------------------------------
     ホーム最上部のスライド（横長画像。推奨サイズ 1600×600 前後）
     link を書くと、クリックでそのページに移動します（空なら移動なし）
     --------------------------------------------------------------- */
  slideInterval: 5000, // 切り替わる間隔（ミリ秒）
  slides: [
    { image: "assets/images/slide-1.svg", alt: "スライド1", link: "event.html" },
    { image: "assets/images/slide-2.svg", alt: "スライド2", link: "project.html" },
    { image: "assets/images/slide-3.svg", alt: "スライド3", link: "work.html" },
  ],

  /* ---------------------------------------------------------------
     ABOUT（団体の概要）
     --------------------------------------------------------------- */
  about: {
    lead: "ここに団体のキャッチコピーが入ります。",
    text: [
      "うつろプロジェクトは、VRChat を拠点に活動する団体です。ここに団体の概要文が入ります。",
      "どんな想いで、どんな活動をしているのかを 2〜3 段落ほどで紹介する想定です。（仮の文章）",
    ],
  },

  /* ---------------------------------------------------------------
     EVENT / PROJECT / WORK
       description : ホームと一覧ページに表示する説明文
       buttonLabel : ホームのボタンの文字
       items       : 一覧に並ぶもの（上に書いたものが先頭に表示されます）
         id      … URL に使う名前（半角英数字とハイフン。重複不可）
         title   … タイトル
         date    … 日付など（省略可）
         image   … サムネイル画像（推奨 16:9）
         summary … 一覧に出す短い説明
         body    … 詳細ページの本文（1 要素 = 1 段落）
         links   … 詳細ページに出すリンク（省略可）
         url     … 書くと、詳細ページの代わりにそのページへ進みます（省略可）
     --------------------------------------------------------------- */
  categories: {
    event: {
      title: "EVENT",
      titleJp: "定期イベント",
      page: "event.html",
      buttonLabel: "イベント一覧",
      description:
        "うつろプロジェクトが VRChat で開催している定期イベントを紹介します。ここにイベントについての説明文が入ります。",
      // 定期イベントは url で、それぞれ専用のホームページ（イベント名のフォルダ）に進みます。
      // そのサイトの中身は data/event-◯◯.js で編集します。
      items: [
        {
          id: "yoidore",
          title: "リアル人妻・彼氏持ち相席居酒屋「よいどれ」",
          image: "assets/images/yoidore/thumb.svg",
          summary: "イベントの短い説明文がここに入ります。",
          url: "yoidore/index.html",
        },
        {
          id: "succubus",
          title: "こんなのですが残念ながらサキュバスです",
          image: "assets/images/succubus/thumb.svg",
          summary: "イベントの短い説明文がここに入ります。",
          url: "succubus/index.html",
        },
      ],
    },

    project: {
      title: "PROJECT",
      titleJp: "プロジェクト",
      page: "project.html",
      buttonLabel: "プロジェクト一覧",
      description:
        "うつろプロジェクトが進めている企画を紹介します。ここにプロジェクトについての説明文が入ります。",
      items: [
        {
          id: "sample-project-1",
          title: "サンプルプロジェクト 1",
          date: "",
          image: "assets/images/thumb-placeholder.svg",
          summary: "プロジェクトの短い説明文がここに入ります。",
          body: ["プロジェクトの詳細な説明文がここに入ります。"],
        },
        {
          id: "sample-project-2",
          title: "サンプルプロジェクト 2",
          date: "",
          image: "assets/images/thumb-placeholder.svg",
          summary: "プロジェクトの短い説明文がここに入ります。",
          body: ["プロジェクトの詳細な説明文がここに入ります。"],
        },
      ],
    },

    work: {
      title: "WORK",
      titleJp: "制作物",
      page: "work.html",
      buttonLabel: "制作物一覧",
      description:
        "ワールド・映像・楽曲など、うつろプロジェクトの制作物を紹介します。ここに制作物についての説明文が入ります。",
      items: [
        {
          id: "sample-work-1",
          title: "サンプル制作物 1",
          date: "",
          image: "assets/images/thumb-placeholder.svg",
          summary: "制作物の短い説明文がここに入ります。",
          body: ["制作物の詳細な説明文がここに入ります。"],
        },
        {
          id: "sample-work-2",
          title: "サンプル制作物 2",
          date: "",
          image: "assets/images/thumb-placeholder.svg",
          summary: "制作物の短い説明文がここに入ります。",
          body: ["制作物の詳細な説明文がここに入ります。"],
        },
      ],
    },
  },

  /* ---------------------------------------------------------------
     運営・スタッフ
       core  … 運営。画像をクリックするとプロフィールページへ移動します
       staff … スタッフ。画像と名前の表示のみ（クリック不可）
     画像は正方形推奨
     --------------------------------------------------------------- */
  members: {
    core: [
      {
        id: "member-1",
        name: "運営メンバー 1",
        role: "代表",
        image: "assets/images/avatar-placeholder.svg",
        bio: ["プロフィール文がここに入ります。", "担当していることや自己紹介などを記載する想定です。"],
        links: [{ label: "X (Twitter)", url: "#" }],
      },
      {
        id: "member-2",
        name: "運営メンバー 2",
        role: "副代表",
        image: "assets/images/avatar-placeholder.svg",
        bio: ["プロフィール文がここに入ります。"],
        links: [],
      },
      {
        id: "member-3",
        name: "運営メンバー 3",
        role: "運営",
        image: "assets/images/avatar-placeholder.svg",
        bio: ["プロフィール文がここに入ります。"],
        links: [],
      },
    ],
    staff: [
      { name: "スタッフ 1", role: "スタッフ", image: "assets/images/avatar-placeholder.svg" },
      { name: "スタッフ 2", role: "スタッフ", image: "assets/images/avatar-placeholder.svg" },
      { name: "スタッフ 3", role: "スタッフ", image: "assets/images/avatar-placeholder.svg" },
      { name: "スタッフ 4", role: "スタッフ", image: "assets/images/avatar-placeholder.svg" },
    ],
  },

  /* ---------------------------------------------------------------
     各種リンク（url は後で本物に差し替えてください）
     --------------------------------------------------------------- */
  links: [
    { label: "X (Twitter)", note: "最新情報はこちら", url: "#" },
    { label: "VRChat Group", note: "グループに参加する", url: "#" },
    { label: "Discord", note: "コミュニティ", url: "#" },
    { label: "YouTube", note: "動画・配信", url: "#" },
  ],
};
