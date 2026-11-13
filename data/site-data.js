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
    lead: "虚（うつろ）から、無限へ。", // キャッチフレーズ
    sub: "0を1に、1を∞に。", // キャッチフレーズの下に小さく添える言葉（不要なら ""）
    text: [
      "うつろプロジェクトは、VTuber「夢見虚」が主催する、VRChat発の企画チームです。",
      "「虚（うつろ）」は、からっぽのこと。何もない「0」から最初の「1」を生み出し、その「1」を仲間や参加してくれるみなさんと一緒に、どこまでも広げていく。そんな想いを名前に込めています。",
      "現在は、2つの定期イベントと、約半年に一度の大型企画を軸に活動中。みなさんのVRChatが今よりちょっぴり楽しくなるような時間を、お届けしています。",
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
        "うつろプロジェクトが VRChat で開催している定期イベントを紹介します。",
      // ホームの EVENT 欄で、説明文とボタンの間を横に流れ続ける写真（クリックしても何も起きません）
      // 何枚でも OK。向き・サイズが違っても高さをそろえて表示します（横幅 800px 前後に縮小した画像がおすすめ）
      // photos を [] にすると、写真の帯は表示されません
      photoSpeed: 40, // 流れる速さ（1 秒あたりに進むピクセル数。大きいほど速い）
      photos: [
        "assets/images/event-photos/photo-01.svg",
        "assets/images/event-photos/photo-02.svg",
        "assets/images/event-photos/photo-03.svg",
        "assets/images/event-photos/photo-04.svg",
        "assets/images/event-photos/photo-05.svg",
        "assets/images/event-photos/photo-06.svg",
        "assets/images/event-photos/photo-07.svg",
        "assets/images/event-photos/photo-08.svg",
        "assets/images/event-photos/photo-09.svg",
        "assets/images/event-photos/photo-10.svg",
      ],
      // layout: "poster" にすると、一覧が「縦長のポスター画像だけ」の並びになります
      // （タイトルや説明文は表示されません。title は画像の読み上げ用の名前として使います）
      layout: "poster",
      // 定期イベントは url で、それぞれ専用のホームページ（イベント名のフォルダ）に進みます。
      // そのサイトの中身は data/event-◯◯.js で編集します。
      items: [
        {
          id: "yoidore",
          title: "リアル人妻・彼氏持ち相席居酒屋「よいどれ」",
          image: "assets/images/yoidore/poster.webp",
          url: "yoidore/index.html",
        },
        {
          id: "succubus",
          title: "こんなのですが残念ながらサキュバスです",
          image: "assets/images/succubus/poster.jpg",
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
      // ホームの PROJECT 欄で、説明文とボタンの間を横に流れ続ける写真（EVENT と同じ仕組み）
      photoSpeed: 40, // 流れる速さ（1 秒あたりに進むピクセル数。大きいほど速い）
      photos: [
        "assets/images/project-photos/photo-01.svg",
        "assets/images/project-photos/photo-02.svg",
        "assets/images/project-photos/photo-03.svg",
        "assets/images/project-photos/photo-04.svg",
        "assets/images/project-photos/photo-05.svg",
        "assets/images/project-photos/photo-06.svg",
        "assets/images/project-photos/photo-07.svg",
        "assets/images/project-photos/photo-08.svg",
        "assets/images/project-photos/photo-09.svg",
        "assets/images/project-photos/photo-10.svg",
      ],
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
       core  … 運営。画像をクリックするとプロフィールページ（url があれば個人のホームページ）へ移動します
       staff … スタッフ。画像と名前の表示のみ（クリック不可）
     画像は正方形推奨
     --------------------------------------------------------------- */
  members: {
    core: [
      {
        id: "yumemi-uturo",
        name: "夢見虚",
        role: "代表",
        image: "assets/images/avatar-placeholder.svg",
        // url を書くと、プロフィールページの代わりに個人のホームページへ進みます
        // （中身は data/person-yumemi-uturo.js で編集）
        url: "yumemi-uturo/index.html",
        bio: ["プロフィール文がここに入ります。", "担当していることや自己紹介などを記載する想定です。"],
        links: [{ label: "X (Twitter)", url: "https://x.com/yumemiuturo" }],
      },
      {
        id: "member-2",
        name: "やけちゃま",
        role: "副代表",
        image: "assets/images/avatar-placeholder.svg",
        bio: ["プロフィール文がここに入ります。"],
        links: [],
      },
      {
        id: "member-3",
        name: "七つの天狗 - 天乃",
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
    { label: "X (Twitter)", note: "最新情報はこちら", url: "https://x.com/uturoproject" },
    { label: "VRChat Group", note: "グループに参加する", url: "https://vrc.group/UTURO.7474" },
    { label: "Discord", note: "コミュニティ", url: "#" },
    { label: "YouTube", note: "動画・配信", url: "#" },
  ],
};
