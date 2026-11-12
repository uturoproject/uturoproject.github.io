/* =====================================================================
   うつろプロジェクト（メインサイト）のスクリプト
   data/site-data.js の内容を読み取って各ページを組み立てます。
   文章や画像の差し替えだけなら、このファイルを編集する必要はありません。
   ===================================================================== */

(function () {
  "use strict";

  var UP = window.UP;
  var SITE = window.SITE;
  var esc = UP.esc;
  var $ = UP.$;
  var page = document.body.dataset.page; // home / list / detail / member

  function detailUrl(type, id) {
    return "detail.html?type=" + encodeURIComponent(type) + "&id=" + encodeURIComponent(id);
  }

  /* ---------- 写真が等速で横に流れ続ける帯 ---------- */

  function initPhotoMarquee(root, photos, speed) {
    // 画面幅より短いと途切れるので、枚数が少ないときは同じ並びを繰り返して長さを確保する
    var list = [];
    while (list.length < 10) list = list.concat(photos);

    var imgs = list
      .map(function (src) {
        return '<img src="' + esc(src) + '" alt="" draggable="false">';
      })
      .join("");

    // 同じ並びを 2 つつなげ、1 つ分だけ進んだら最初に戻すことで、切れ目なく流れ続ける
    root.innerHTML = '<div class="photo-track">' + imgs + imgs + "</div>";
    var track = root.querySelector(".photo-track");

    // 帯の長さに合わせて 1 周の時間を決める（＝写真の枚数や大きさが変わっても速さは一定）
    function setDuration() {
      var distance = track.scrollWidth / 2;
      if (distance > 0) track.style.animationDuration = distance / (speed || 40) + "s";
    }

    track.querySelectorAll("img").forEach(function (img) {
      img.addEventListener("load", setDuration);
    });
    window.addEventListener("resize", setDuration);
    setDuration();
  }

  /* ---------- ホーム ---------- */

  function initHome() {
    UP.initSlider($("#slider"), SITE.slides, SITE.slideInterval);

    // ABOUT
    $("#about-body").innerHTML =
      // キャッチフレーズは「、」の位置でだけ折り返す（言葉の途中で改行させない）
      (SITE.about.lead
        ? '<p class="section-lead catch">' +
          SITE.about.lead
            .split(/(?<=、)/)
            .map(function (part) { return "<span>" + esc(part) + "</span>"; })
            .join("") +
          "</p>"
        : "") +
      (SITE.about.sub ? '<p class="catch-sub">' + esc(SITE.about.sub) + "</p>" : "") +
      UP.paragraphs(SITE.about.text);

    // EVENT / PROJECT / WORK
    document.querySelectorAll("[data-category-section]").forEach(function (section) {
      var cat = SITE.categories[section.dataset.categorySection];
      if (!cat) return;
      var hasPhotos = cat.photos && cat.photos.length;
      section.innerHTML =
        '<div class="container">' +
        UP.sectionHead(cat.title, cat.titleJp) +
        '<div class="section-text"><p>' + esc(cat.description) + "</p></div>" +
        "</div>" +
        (hasPhotos ? '<div class="photo-marquee" aria-hidden="true"></div>' : "") +
        '<div class="container"><div class="section-action"><a class="btn" href="' + esc(cat.page) + '">' +
        esc(cat.buttonLabel) + "</a></div></div>";
      if (hasPhotos) initPhotoMarquee(section.querySelector(".photo-marquee"), cat.photos, cat.photoSpeed);
    });

    // 運営・スタッフ
    var core = (SITE.members.core || [])
      .map(function (m) {
        return (
          // url があれば個人のホームページへ、無ければ共通のプロフィールページへ進む
          '<a class="member" href="' + esc(m.url || "member.html?id=" + encodeURIComponent(m.id)) + '">' +
          '<div class="member-photo"><img src="' + esc(m.image) + '" alt="' + esc(m.name) + '" loading="lazy"></div>' +
          '<p class="member-name">' + esc(m.name) + "</p>" +
          '<p class="member-role">' + esc(m.role) + "</p>" +
          "</a>"
        );
      })
      .join("");

    var staff = (SITE.members.staff || [])
      .map(function (m) {
        return (
          '<div class="member small">' +
          '<div class="member-photo"><img src="' + esc(m.image) + '" alt="' + esc(m.name) + '" loading="lazy"></div>' +
          '<p class="member-name">' + esc(m.name) + "</p>" +
          (m.role ? '<p class="member-role">' + esc(m.role) + "</p>" : "") +
          "</div>"
        );
      })
      .join("");

    $("#members-body").innerHTML =
      (core ? '<div class="member-group"><h3 class="member-group-title">運営</h3><div class="member-grid">' + core + "</div></div>" : "") +
      (staff ? '<div class="member-group"><h3 class="member-group-title">スタッフ</h3><div class="member-grid">' + staff + "</div></div>" : "");

    // リンク一覧
    $("#links-body").innerHTML = UP.linkCards(SITE.links);
  }

  /* ---------- 一覧ページ ---------- */

  function initList() {
    var type = document.body.dataset.category;
    var cat = SITE.categories[type];

    document.title = cat.title + " | " + SITE.name;

    var cards = (cat.items || [])
      .map(function (item) {
        // url があるものはそのページへ、無いものは共通の詳細ページへ進む
        var href = item.url || detailUrl(type, item.id);
        // ポスターだけを並べる一覧（文字は出さない）
        if (cat.layout === "poster") {
          return (
            '<a class="poster-card" href="' + esc(href) + '"' + UP.linkAttrs(href) + ">" +
            '<img src="' + esc(item.image) + '" alt="' + esc(item.title) + '" loading="lazy"></a>'
          );
        }
        return (
          '<a class="card" href="' + esc(href) + '"' + UP.linkAttrs(href) + ">" +
          '<div class="card-thumb"><img src="' + esc(item.image) + '" alt="" loading="lazy"></div>' +
          '<div class="card-body">' +
          (item.date ? '<p class="card-date">' + esc(item.date) + "</p>" : "") +
          '<h2 class="card-title">' + esc(item.title) + "</h2>" +
          (item.summary ? '<p class="card-summary">' + esc(item.summary) + "</p>" : "") +
          "</div></a>"
        );
      })
      .join("");

    $("#main").innerHTML =
      '<div class="page-hero"><div class="container">' +
      UP.sectionHead(cat.title, cat.titleJp, "h1") +
      "<p>" + esc(cat.description) + "</p>" +
      "</div></div>" +
      '<div class="page-body"><div class="container">' +
      (cards ? '<div class="' + (cat.layout === "poster" ? "poster-grid" : "card-grid") + '">' + cards + "</div>" : '<p class="empty">ただいま準備中です。</p>') +
      "</div></div>";
  }

  /* ---------- 詳細ページ ---------- */

  function initDetail() {
    var type = UP.param("type");
    var cat = SITE.categories[type];
    var main = $("#main");
    var item =
      cat &&
      (cat.items || []).find(function (i) {
        return i.id === UP.param("id");
      });

    if (!item) {
      main.innerHTML = UP.notFound("ページが見つかりませんでした。", "index.html", "ホームへ戻る");
      return null;
    }

    document.title = item.title + " | " + SITE.name;

    var links = UP.linkButtons(item.links);

    main.innerHTML =
      '<article class="page-body"><div class="container narrow">' +
      '<nav class="breadcrumb" aria-label="パンくずリスト">' +
      '<a href="index.html">HOME</a>' +
      '<span><a href="' + esc(cat.page) + '">' + esc(cat.title) + "</a></span>" +
      "<span>" + esc(item.title) + "</span></nav>" +
      (item.date ? '<p class="detail-date">' + esc(item.date) + "</p>" : "") +
      '<h1 class="detail-title">' + esc(item.title) + "</h1>" +
      (item.image ? '<div class="detail-image"><img src="' + esc(item.image) + '" alt="' + esc(item.title) + '"></div>' : "") +
      '<div class="detail-text">' + UP.paragraphs(item.body) + "</div>" +
      (links ? '<div class="detail-links">' + links + "</div>" : "") +
      '<div class="detail-back"><a class="btn back outline" href="' + esc(cat.page) + '">' +
      esc(cat.buttonLabel) + "へ戻る</a></div>" +
      "</div></article>";

    return cat.page; // ヘッダーで光らせるメニュー
  }

  /* ---------- 運営プロフィールページ ---------- */

  function initMember() {
    var main = $("#main");
    var member = (SITE.members.core || []).find(function (m) {
      return m.id === UP.param("id");
    });

    if (!member) {
      main.innerHTML = UP.notFound("プロフィールが見つかりませんでした。", "index.html#staff", "ホームへ戻る");
      return;
    }

    document.title = member.name + " | " + SITE.name;

    var links = UP.linkButtons(member.links);

    main.innerHTML =
      '<article class="page-body"><div class="container narrow">' +
      '<nav class="breadcrumb" aria-label="パンくずリスト">' +
      '<a href="index.html">HOME</a>' +
      '<span><a href="index.html#staff">運営・スタッフ</a></span>' +
      "<span>" + esc(member.name) + "</span></nav>" +
      '<div class="profile">' +
      '<div class="profile-photo"><img src="' + esc(member.image) + '" alt="' + esc(member.name) + '"></div>' +
      "<div>" +
      '<p class="profile-role">' + esc(member.role) + "</p>" +
      '<h1 class="profile-name">' + esc(member.name) + "</h1>" +
      UP.paragraphs(member.bio) +
      (links ? '<div class="detail-links">' + links + "</div>" : "") +
      "</div></div>" +
      '<div class="detail-back"><a class="btn back outline" href="index.html#staff">運営・スタッフへ戻る</a></div>' +
      "</div></article>";
  }

  /* ---------- 起動 ---------- */

  var currentHref = document.body.dataset.nav || "";

  if (page === "home") initHome();
  else if (page === "list") initList();
  else if (page === "detail") currentHref = initDetail() || "";
  else if (page === "member") initMember();

  UP.renderHeader({
    name: SITE.name,
    logo: SITE.logo,
    homeHref: "index.html",
    nav: SITE.nav,
    current: currentHref,
  });
  UP.renderFooter({ name: SITE.name, nav: SITE.nav, copyright: SITE.nameEn });
  UP.finish();
})();
