/* =====================================================================
   うつろプロジェクト - 共通スクリプト
   data/site-data.js の内容を読み取って各ページを組み立てます。
   文章や画像の差し替えだけなら、このファイルを編集する必要はありません。
   ===================================================================== */

(function () {
  "use strict";

  var SITE = window.SITE;
  var page = document.body.dataset.page; // home / list / detail / member
  var FALLBACK_IMAGE = "assets/images/thumb-placeholder.svg";

  /* ---------- 小さな道具 ---------- */

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function $(selector) {
    return document.querySelector(selector);
  }

  function paragraphs(list) {
    return (list || [])
      .map(function (text) {
        return "<p>" + esc(text) + "</p>";
      })
      .join("");
  }

  function param(name) {
    return new URLSearchParams(location.search).get(name);
  }

  // 外部サイトへのリンクは新しいタブで開く
  function linkAttrs(url) {
    return /^https?:\/\//.test(url) ? ' target="_blank" rel="noopener noreferrer"' : "";
  }

  function detailUrl(type, id) {
    return "detail.html?type=" + encodeURIComponent(type) + "&id=" + encodeURIComponent(id);
  }

  /* ---------- ヘッダー・フッター ---------- */

  function renderHeader(currentHref) {
    var links = SITE.nav
      .map(function (item) {
        var current = item.href === currentHref ? ' class="is-current" aria-current="page"' : "";
        return '<a href="' + esc(item.href) + '"' + current + ">" + esc(item.label) + "</a>";
      })
      .join("");

    $("#site-header").innerHTML =
      '<div class="inner">' +
      '<a class="site-logo" href="index.html" aria-label="' + esc(SITE.name) + ' ホームへ">' +
      '<img src="' + esc(SITE.logo) + '" alt="' + esc(SITE.name) + '">' +
      "</a>" +
      '<button class="nav-toggle" type="button" aria-label="メニュー" aria-expanded="false" aria-controls="site-nav">' +
      "<span></span><span></span><span></span>" +
      "</button>" +
      '<nav class="site-nav" id="site-nav" aria-label="メインメニュー">' + links + "</nav>" +
      "</div>";

    var toggle = $(".nav-toggle");
    var nav = $("#site-nav");
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  function renderFooter() {
    var links = SITE.nav
      .map(function (item) {
        return '<a href="' + esc(item.href) + '">' + esc(item.label) + "</a>";
      })
      .join("");

    $("#site-footer").innerHTML =
      '<div class="container">' +
      '<p class="footer-name">' + esc(SITE.name) + "</p>" +
      '<nav class="footer-nav" aria-label="フッターメニュー">' + links + "</nav>" +
      '<p class="copyright">&copy; ' + new Date().getFullYear() + " " + esc(SITE.nameEn) + "</p>" +
      "</div>";
  }

  /* ---------- 共通パーツ ---------- */

  function sectionHead(title, sub, tag) {
    tag = tag || "h2";
    return (
      '<div class="section-head">' +
      "<" + tag + ' class="section-title">' + esc(title) + "</" + tag + ">" +
      (sub ? '<p class="section-sub">' + esc(sub) + "</p>" : "") +
      "</div>"
    );
  }

  function notFound(message, backHref, backLabel) {
    return (
      '<div class="container narrow"><p class="empty">' + esc(message) + "</p>" +
      '<div class="section-action"><a class="btn back outline" href="' + esc(backHref) + '">' +
      esc(backLabel) + "</a></div></div>"
    );
  }

  /* ---------- ホーム ---------- */

  function initSlider() {
    var slides = SITE.slides || [];
    var root = $("#slider");
    if (!root || !slides.length) return;

    var slideHtml = slides
      .map(function (s, i) {
        var img = '<img src="' + esc(s.image) + '" alt="' + esc(s.alt || "") + '">';
        var inner = s.link ? '<a href="' + esc(s.link) + '"' + linkAttrs(s.link) + ">" + img + "</a>" : img;
        return '<div class="slide' + (i === 0 ? " is-active" : "") + '">' + inner + "</div>";
      })
      .join("");

    var dotHtml = slides
      .map(function (s, i) {
        return (
          '<button type="button" aria-label="スライド ' + (i + 1) + ' を表示"' +
          (i === 0 ? ' class="is-active"' : "") + "></button>"
        );
      })
      .join("");

    var many = slides.length > 1;
    root.innerHTML =
      '<div class="slider-viewport">' + slideHtml +
      (many
        ? '<button class="slider-arrow prev" type="button" aria-label="前のスライド">‹</button>' +
          '<button class="slider-arrow next" type="button" aria-label="次のスライド">›</button>'
        : "") +
      "</div>" +
      (many ? '<div class="slider-dots">' + dotHtml + "</div>" : "");

    if (!many) return;

    var slideEls = root.querySelectorAll(".slide");
    var dotEls = root.querySelectorAll(".slider-dots button");
    var current = 0;
    var timer = null;

    function show(index) {
      current = (index + slides.length) % slides.length;
      slideEls.forEach(function (el, i) {
        el.classList.toggle("is-active", i === current);
      });
      dotEls.forEach(function (el, i) {
        el.classList.toggle("is-active", i === current);
      });
    }

    function stop() {
      clearInterval(timer);
    }

    function start() {
      stop();
      timer = setInterval(function () {
        show(current + 1);
      }, SITE.slideInterval || 5000);
    }

    // 手動で切り替えたら、そこから数え直す
    function go(index) {
      show(index);
      start();
    }

    root.querySelector(".prev").addEventListener("click", function () { go(current - 1); });
    root.querySelector(".next").addEventListener("click", function () { go(current + 1); });
    dotEls.forEach(function (el, i) {
      el.addEventListener("click", function () { go(i); });
    });

    // マウスを乗せている間は止める
    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);

    // スマホのスワイプ
    var touchX = null;
    root.addEventListener("touchstart", function (e) { touchX = e.touches[0].clientX; }, { passive: true });
    root.addEventListener("touchend", function (e) {
      if (touchX === null) return;
      var dx = e.changedTouches[0].clientX - touchX;
      touchX = null;
      if (Math.abs(dx) > 40) go(current + (dx < 0 ? 1 : -1));
    });

    start();
  }

  function initHome() {
    initSlider();

    // ABOUT
    $("#about-body").innerHTML =
      (SITE.about.lead ? '<p class="section-lead">' + esc(SITE.about.lead) + "</p>" : "") +
      paragraphs(SITE.about.text);

    // EVENT / PROJECT / WORK
    document.querySelectorAll("[data-category-section]").forEach(function (section) {
      var cat = SITE.categories[section.dataset.categorySection];
      if (!cat) return;
      section.querySelector(".container").innerHTML =
        sectionHead(cat.title, cat.titleJp) +
        '<div class="section-text"><p>' + esc(cat.description) + "</p></div>" +
        '<div class="section-action"><a class="btn" href="' + esc(cat.page) + '">' +
        esc(cat.buttonLabel) + "</a></div>";
    });

    // 運営・スタッフ
    var core = (SITE.members.core || [])
      .map(function (m) {
        return (
          '<a class="member" href="member.html?id=' + encodeURIComponent(m.id) + '">' +
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
    $("#links-body").innerHTML = (SITE.links || [])
      .map(function (l) {
        return (
          '<a class="link-card" href="' + esc(l.url) + '"' + linkAttrs(l.url) + ">" +
          "<span><strong>" + esc(l.label) + "</strong>" +
          (l.note ? "<small>" + esc(l.note) + "</small>" : "") + "</span>" +
          '<span class="arrow" aria-hidden="true">→</span></a>'
        );
      })
      .join("");
  }

  /* ---------- 一覧ページ ---------- */

  function initList() {
    var type = document.body.dataset.category;
    var cat = SITE.categories[type];
    var main = $("#main");

    document.title = cat.title + " | " + SITE.name;

    var cards = (cat.items || [])
      .map(function (item) {
        return (
          '<a class="card" href="' + detailUrl(type, item.id) + '">' +
          '<div class="card-thumb"><img src="' + esc(item.image) + '" alt="" loading="lazy"></div>' +
          '<div class="card-body">' +
          (item.date ? '<p class="card-date">' + esc(item.date) + "</p>" : "") +
          '<h2 class="card-title">' + esc(item.title) + "</h2>" +
          (item.summary ? '<p class="card-summary">' + esc(item.summary) + "</p>" : "") +
          "</div></a>"
        );
      })
      .join("");

    main.innerHTML =
      '<div class="page-hero"><div class="container">' +
      sectionHead(cat.title, cat.titleJp, "h1") +
      "<p>" + esc(cat.description) + "</p>" +
      "</div></div>" +
      '<div class="page-body"><div class="container">' +
      (cards ? '<div class="card-grid">' + cards + "</div>" : '<p class="empty">ただいま準備中です。</p>') +
      "</div></div>";
  }

  /* ---------- 詳細ページ ---------- */

  function initDetail() {
    var type = param("type");
    var cat = SITE.categories[type];
    var main = $("#main");
    var item =
      cat &&
      (cat.items || []).find(function (i) {
        return i.id === param("id");
      });

    if (!item) {
      main.innerHTML = notFound("ページが見つかりませんでした。", "index.html", "ホームへ戻る");
      return null;
    }

    document.title = item.title + " | " + SITE.name;

    var links = (item.links || [])
      .map(function (l) {
        return '<a class="btn outline" href="' + esc(l.url) + '"' + linkAttrs(l.url) + ">" + esc(l.label) + "</a>";
      })
      .join("");

    main.innerHTML =
      '<article class="page-body"><div class="container narrow">' +
      '<nav class="breadcrumb" aria-label="パンくずリスト">' +
      '<a href="index.html">HOME</a>' +
      '<span><a href="' + esc(cat.page) + '">' + esc(cat.title) + "</a></span>" +
      "<span>" + esc(item.title) + "</span></nav>" +
      (item.date ? '<p class="detail-date">' + esc(item.date) + "</p>" : "") +
      '<h1 class="detail-title">' + esc(item.title) + "</h1>" +
      (item.image ? '<div class="detail-image"><img src="' + esc(item.image) + '" alt="' + esc(item.title) + '"></div>' : "") +
      '<div class="detail-text">' + paragraphs(item.body) + "</div>" +
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
      return m.id === param("id");
    });

    if (!member) {
      main.innerHTML = notFound("プロフィールが見つかりませんでした。", "index.html#staff", "ホームへ戻る");
      return;
    }

    document.title = member.name + " | " + SITE.name;

    var links = (member.links || [])
      .map(function (l) {
        return '<a class="btn outline" href="' + esc(l.url) + '"' + linkAttrs(l.url) + ">" + esc(l.label) + "</a>";
      })
      .join("");

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
      paragraphs(member.bio) +
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

  renderHeader(currentHref);
  renderFooter();

  // 画像が見つからないときは仮画像を表示する
  document.querySelectorAll("main img").forEach(function (img) {
    img.addEventListener("error", function () {
      if (!img.dataset.fallback) {
        img.dataset.fallback = "1";
        img.src = FALLBACK_IMAGE;
      }
    });
  });

  // 別ページから index.html#staff のように来たとき、描画後にその位置へ移動する
  if (location.hash) {
    var target = document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView();
  }
})();
