/* =====================================================================
   定期イベントのサイト（よいどれ / サキュバス など）のスクリプト
   data/event-◯◯.js の内容を読み取って各ページを組み立てます。
   文章や画像の差し替えだけなら、このファイルを編集する必要はありません。
   ===================================================================== */

(function () {
  "use strict";

  var UP = window.UP;
  var EV = window.EVENT_SITE;
  var PARENT = window.SITE; // うつろプロジェクト本体の情報
  var esc = UP.esc;
  var $ = UP.$;
  var page = document.body.dataset.page; // event-home / event-join / event-members / event-member

  function memberUrl(id) {
    return "member.html?id=" + encodeURIComponent(id);
  }

  /* ---------- メンバーの写真が流れるスライド ---------- */

  function initMemberCarousel(root, members, interval) {
    var n = members.length;
    if (!root) return;
    if (!n) {
      root.innerHTML = '<p class="empty">ただいま準備中です。</p>';
      return;
    }

    // 途切れずに流れ続けるよう、同じ並びを何周分か用意する
    var copies = Math.max(2, Math.ceil(12 / n) + 1);
    var cards = "";
    for (var c = 0; c < copies; c++) {
      cards += members
        .map(function (m) {
          var hidden = c > 0 ? ' aria-hidden="true" tabindex="-1"' : "";
          return (
            '<a class="member-slide" href="' + memberUrl(m.id) + '"' + hidden + ">" +
            '<div class="member-slide-photo"><img src="' + esc(UP.asset(m.thumb || m.image)) + '" alt="' + esc(m.name) + '"></div>' +
            '<p class="member-slide-name">' + esc(m.name) + "</p>" +
            "</a>"
          );
        })
        .join("");
    }

    root.innerHTML =
      '<div class="member-track">' + cards + "</div>" +
      '<button class="slider-arrow prev" type="button" aria-label="前のメンバー">‹</button>' +
      '<button class="slider-arrow next" type="button" aria-label="次のメンバー">›</button>';

    var track = root.querySelector(".member-track");
    var index = 0;
    var timer = null;

    function stepWidth() {
      var items = track.children;
      return items[1].offsetLeft - items[0].offsetLeft;
    }

    function place(animate) {
      track.style.transition = animate ? "" : "none";
      track.style.transform = "translateX(" + -index * stepWidth() + "px)";
      if (!animate) void track.offsetWidth; // 位置を即座に確定させる
    }

    // 1 周分進んだら、見た目が同じ最初の位置へこっそり戻す
    function normalize() {
      if (index >= n) {
        index -= n;
        place(false);
      }
    }

    function next() {
      normalize();
      index += 1;
      place(true);
    }

    function prev() {
      normalize();
      if (index === 0) {
        index = n;
        place(false);
      }
      index -= 1;
      place(true);
    }

    function stop() {
      clearInterval(timer);
    }

    function start() {
      stop();
      timer = setInterval(next, interval || 3000);
    }

    track.addEventListener("transitionend", normalize);
    root.querySelector(".next").addEventListener("click", function () { next(); start(); });
    root.querySelector(".prev").addEventListener("click", function () { prev(); start(); });
    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    window.addEventListener("resize", function () { place(false); });

    // スマホのスワイプ
    var touchX = null;
    root.addEventListener("touchstart", function (e) { touchX = e.touches[0].clientX; }, { passive: true });
    root.addEventListener("touchend", function (e) {
      if (touchX === null) return;
      var dx = e.changedTouches[0].clientX - touchX;
      touchX = null;
      if (Math.abs(dx) > 40) {
        if (dx < 0) next(); else prev();
        start();
      }
    });

    start();
  }

  /* ---------- ホーム ---------- */

  function initHome() {
    document.title = EV.name;

    var info = (EV.about.info || [])
      .map(function (row) {
        return "<dt>" + esc(row.label) + "</dt><dd>" + esc(row.value) + "</dd>";
      })
      .join("");

    $("#main").innerHTML =
      // スライド
      '<section class="hero" aria-label="お知らせスライド"><div class="slider" id="slider"></div></section>' +

      // ABOUT（ポスターがあれば左に置き、文章と開催情報を右に並べる）
      '<section class="section" id="about"><div class="container">' +
      UP.sectionHead("ABOUT", EV.name) +
      (EV.about.poster
        ? '<div class="about-layout">' +
          '<a class="about-poster" href="' + esc(UP.asset(EV.about.poster)) + '" target="_blank" rel="noopener" aria-label="ポスターを大きく表示">' +
          '<img src="' + esc(UP.asset(EV.about.poster)) + '" alt="' + esc(EV.name) + ' のポスター"></a><div>'
        : "") +
      '<div class="section-text">' +
      (EV.about.lead ? '<p class="section-lead">' + esc(EV.about.lead) + "</p>" : "") +
      UP.paragraphs(EV.about.text) +
      "</div>" +
      (info ? '<dl class="info-list">' + info + "</dl>" : "") +
      (EV.about.poster ? "</div></div>" : "") +
      "</div></section>" +

      // 参加方法
      '<section class="section tint" id="join"><div class="container">' +
      UP.sectionHead("HOW TO JOIN", "参加方法") +
      '<div class="section-text"><p>' + esc(EV.join.description) + "</p></div>" +
      '<div class="section-action"><a class="btn" href="join.html">' + esc(EV.join.buttonLabel || "参加方法を見る") + "</a></div>" +
      "</div></section>" +

      // MEMBER
      '<section class="section" id="member">' +
      '<div class="container">' + UP.sectionHead("MEMBER", "メンバー") + "</div>" +
      '<div class="member-carousel" id="member-carousel"></div>' +
      '<div class="container"><div class="section-action"><a class="btn" href="members.html">メンバー一覧</a></div></div>' +
      "</section>" +

      // 各種リンク
      '<section class="section tint" id="links"><div class="container">' +
      UP.sectionHead("LINKS", "各種リンク") +
      '<div class="link-grid">' + UP.linkCards(EV.links) + "</div>" +
      "</div></section>";

    UP.initSlider($("#slider"), EV.slides, EV.slideInterval);
    initMemberCarousel($("#member-carousel"), EV.members || [], EV.memberSlideInterval);
  }

  /* ---------- 参加方法ページ ---------- */

  function initJoin() {
    document.title = "参加方法 | " + EV.name;

    var steps = (EV.join.steps || [])
      .map(function (s) {
        return (
          '<li class="step"><h2 class="step-title">' + esc(s.title) + "</h2>" +
          UP.paragraphs([].concat(s.text || [])) + "</li>"
        );
      })
      .join("");

    var notes = (EV.join.notes || [])
      .map(function (n) {
        return "<li>" + esc(n) + "</li>";
      })
      .join("");

    $("#main").innerHTML =
      '<div class="page-hero"><div class="container">' +
      UP.sectionHead("HOW TO JOIN", "参加方法", "h1") +
      "<p>" + esc(EV.join.description) + "</p>" +
      "</div></div>" +
      '<div class="page-body"><div class="container narrow">' +
      (steps ? '<ol class="steps">' + steps + "</ol>" : '<p class="empty">ただいま準備中です。</p>') +
      (notes ? '<div class="notes"><h2 class="notes-title">ご参加にあたってのお願い</h2><ul>' + notes + "</ul></div>" : "") +
      '<div class="detail-back"><a class="btn back outline" href="index.html">ホームへ戻る</a></div>' +
      "</div></div>";
  }

  /* ---------- 在籍一覧ページ ---------- */

  function initMembers() {
    document.title = "在籍一覧 | " + EV.name;
    var members = EV.members || [];

    var cards = members
      .map(function (m, i) {
        return (
          '<button class="roster-card" type="button" data-index="' + i + '">' +
          '<span class="roster-photo"><img src="' + esc(UP.asset(m.thumb || m.image)) + '" alt="" loading="lazy"></span>' +
          '<span class="roster-name">' + esc(m.name) + "</span>" +
          (m.role ? '<span class="roster-role">' + esc(m.role) + "</span>" : "") +
          "</button>"
        );
      })
      .join("");

    $("#main").innerHTML =
      '<div class="page-hero"><div class="container">' +
      UP.sectionHead("MEMBER", "在籍一覧", "h1") +
      "<p>画像を押すと、大きな画像とひとことコメントが表示されます。</p>" +
      "</div></div>" +
      '<div class="page-body"><div class="container">' +
      (cards ? '<div class="roster-grid">' + cards + "</div>" : '<p class="empty">ただいま準備中です。</p>') +
      "</div></div>" +
      // 画像を押したときに画面中央に出る拡大表示
      '<dialog class="member-modal" id="member-modal" aria-labelledby="modal-name">' +
      '<button class="modal-close" type="button" aria-label="閉じる">×</button>' +
      '<img class="modal-image" id="modal-image" src="" alt="">' +
      '<div class="modal-caption">' +
      '<p class="modal-name" id="modal-name"></p>' +
      '<p class="modal-comment" id="modal-comment"></p>' +
      "</div></dialog>";

    var modal = $("#member-modal");

    document.querySelectorAll(".roster-card").forEach(function (card) {
      card.addEventListener("click", function () {
        var m = members[Number(card.dataset.index)];
        $("#modal-image").src = UP.asset(m.image);
        $("#modal-image").alt = m.name;
        $("#modal-name").textContent = m.name;
        $("#modal-comment").textContent = m.comment || "";
        modal.showModal();
      });
    });

    modal.querySelector(".modal-close").addEventListener("click", function () { modal.close(); });
    // 画像の外側（暗い部分）を押しても閉じる
    modal.addEventListener("click", function (e) {
      if (e.target === modal) modal.close();
    });
  }

  /* ---------- メンバー紹介ページ ---------- */

  function initMember() {
    var main = $("#main");
    var member = (EV.members || []).find(function (m) {
      return m.id === UP.param("id");
    });

    if (!member) {
      main.innerHTML = UP.notFound("メンバーが見つかりませんでした。", "members.html", "在籍一覧へ戻る");
      return;
    }

    document.title = member.name + " | " + EV.name;

    var links = UP.linkButtons(member.links);

    main.innerHTML =
      '<article class="page-body"><div class="container narrow">' +
      '<nav class="breadcrumb" aria-label="パンくずリスト">' +
      '<a href="index.html">ホーム</a>' +
      '<span><a href="members.html">在籍一覧</a></span>' +
      "<span>" + esc(member.name) + "</span></nav>" +
      '<div class="profile">' +
      '<div class="profile-photo portrait"><img src="' + esc(UP.asset(member.image)) + '" alt="' + esc(member.name) + '"></div>' +
      "<div>" +
      (member.role ? '<p class="profile-role">' + esc(member.role) + "</p>" : "") +
      '<h1 class="profile-name">' + esc(member.name) + "</h1>" +
      (member.comment ? '<p class="profile-comment">' + esc(member.comment) + "</p>" : "") +
      UP.paragraphs(member.bio) +
      (links ? '<div class="detail-links">' + links + "</div>" : "") +
      "</div></div>" +
      '<div class="detail-back"><a class="btn back outline" href="members.html">在籍一覧へ戻る</a></div>' +
      "</div></article>";
  }

  /* ---------- 起動 ---------- */

  UP.applyTheme(EV.theme);

  var currentHref = document.body.dataset.nav || "";

  if (page === "event-home") initHome();
  else if (page === "event-join") initJoin();
  else if (page === "event-members") initMembers();
  else if (page === "event-member") initMember();

  UP.renderHeader({
    name: EV.name,
    logo: EV.logo,
    homeHref: "index.html",
    nav: EV.nav,
    current: currentHref,
  });
  UP.renderFooter({
    name: EV.name,
    nav: EV.nav,
    // 親サイト（うつろプロジェクト）へ戻るリンク
    extraHtml:
      '<p class="footer-parent"><a href="' + UP.asset("index.html") + '">' +
      esc(PARENT.name) + " 公式サイトへ</a></p>",
    copyright: PARENT.nameEn,
  });
  UP.finish();
})();
