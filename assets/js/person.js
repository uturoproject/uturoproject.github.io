/* =====================================================================
   個人のサイト（夢見虚 など）のスクリプト
   data/person-◯◯.js の内容を読み取って各ページを組み立てます。
   文章や画像の差し替えだけなら、このファイルを編集する必要はありません。
   ===================================================================== */

(function () {
  "use strict";

  var UP = window.UP;
  var P = window.PERSON_SITE;
  var PARENT = window.SITE; // うつろプロジェクト本体の情報
  var esc = UP.esc;
  var $ = UP.$;
  var page = document.body.dataset.page; // person-home / person-event / person-event-detail / person-affiliation
  var fullName = P.name + (P.nameEn ? "（" + P.nameEn + "）" : "");

  /* ---------- ホーム ---------- */

  function initHome() {
    document.title = fullName;

    var tags = (P.profile.tags || [])
      .map(function (t) {
        return "<li>" + esc(t) + "</li>";
      })
      .join("");

    var videos = (P.youtube.videos || [])
      .map(function (v) {
        // 動画 ID は英数字と - _ のみ。それ以外や空のときは仮の枠を出す
        var ok = /^[\w-]{6,20}$/.test(v.id || "");
        var frame = ok
          ? '<iframe src="https://www.youtube-nocookie.com/embed/' + esc(v.id) + '" title="' + esc(v.title || "YouTube 動画") +
            '" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
          : '<div class="video-empty">動画を準備中です</div>';
        return (
          '<div class="video"><div class="video-frame">' + frame + "</div>" +
          (v.title ? '<p class="video-title">' + esc(v.title) + "</p>" : "") +
          "</div>"
        );
      })
      .join("");

    $("#main").innerHTML =
      // プロフィール
      '<section class="person-hero" id="profile"><div class="container person-hero-inner">' +
      '<div class="person-photo"><img src="' + esc(UP.asset(P.profile.image)) + '" alt="' + esc(P.name) + '"></div>' +
      "<div>" +
      (tags ? '<ul class="person-tags">' + tags + "</ul>" : "") +
      '<h1 class="person-name">' + esc(P.name) + "</h1>" +
      (P.nameEn ? '<p class="person-name-en">' + esc(P.nameEn) + "</p>" : "") +
      UP.paragraphs(P.profile.text) +
      "</div></div></section>" +

      // おすすめの YouTube
      '<section class="section" id="youtube"><div class="container">' +
      UP.sectionHead("YOUTUBE", "おすすめの動画") +
      (P.youtube.description ? '<div class="section-text"><p>' + esc(P.youtube.description) + "</p></div>" : "") +
      '<div class="video-grid" style="margin-top:32px">' + videos + "</div>" +
      (P.youtube.channelUrl
        ? '<div class="section-action"><a class="btn" href="' + esc(P.youtube.channelUrl) + '"' +
          UP.linkAttrs(P.youtube.channelUrl) + ">チャンネルを見る</a></div>"
        : "") +
      "</div></section>" +

      // EVENT
      '<section class="section tint" id="event"><div class="container">' +
      UP.sectionHead("EVENT", "個人イベント") +
      '<div class="section-text"><p>' + esc(P.events.homeDescription || P.events.description) + "</p></div>" +
      '<div class="section-action"><a class="btn" href="event.html">' + esc(P.events.buttonLabel || "イベント一覧") + "</a></div>" +
      "</div></section>" +

      // 所属
      '<section class="section" id="affiliation"><div class="container">' +
      UP.sectionHead("CAST", "所属") +
      '<div class="section-text"><p>' + esc(P.affiliations.homeDescription || P.affiliations.description) + "</p></div>" +
      '<div class="section-action"><a class="btn" href="affiliation.html">' + esc(P.affiliations.buttonLabel || "所属一覧") + "</a></div>" +
      "</div></section>" +

      // 各種リンク
      '<section class="section tint" id="links"><div class="container">' +
      UP.sectionHead("LINKS", "各種リンク") +
      '<div class="link-grid">' + UP.linkCards(P.links) + "</div>" +
      "</div></section>";
  }

  /* ---------- EVENT ページ（過去のイベントのアーカイブ一覧） ---------- */

  function eventUrl(id) {
    return "event-detail.html?id=" + encodeURIComponent(id);
  }

  function initEvent() {
    document.title = "EVENT | " + fullName;

    var cards = (P.events.items || [])
      .map(function (ev) {
        return (
          '<a class="card" href="' + esc(eventUrl(ev.id)) + '">' +
          '<div class="card-thumb"><img src="' + esc(UP.asset(ev.image)) + '" alt="" loading="lazy"></div>' +
          '<div class="card-body">' +
          (ev.date ? '<p class="card-date">' + esc(ev.date) + "</p>" : "") +
          '<h2 class="card-title">' + esc(ev.title) + "</h2>" +
          "</div></a>"
        );
      })
      .join("");

    $("#main").innerHTML =
      '<div class="page-hero"><div class="container">' +
      UP.sectionHead("EVENT", "個人イベント", "h1") +
      "<p>" + esc(P.events.description) + "</p>" +
      "</div></div>" +
      '<div class="page-body"><div class="container">' +
      (cards ? '<div class="card-grid">' + cards + "</div>" : '<p class="empty">ただいま準備中です。</p>') +
      "</div></div>";
  }

  /* ---------- イベント詳細ページ（写真と説明・感想） ---------- */

  function initEventDetail() {
    var main = $("#main");
    var ev = (P.events.items || []).find(function (e) {
      return e.id === UP.param("id");
    });

    if (!ev) {
      main.innerHTML = UP.notFound("イベントが見つかりませんでした。", "event.html", "イベント一覧へ戻る");
      return;
    }

    document.title = ev.title + " | " + fullName;

    var links = UP.linkButtons(ev.links);
    var photos = ev.photos || [];
    var gallery = photos
      .map(function (src, i) {
        return (
          '<button class="gallery-item" type="button" data-index="' + i + '" aria-label="写真 ' + (i + 1) + ' を大きく表示">' +
          '<img src="' + esc(UP.asset(src)) + '" alt="" loading="lazy"></button>'
        );
      })
      .join("");

    main.innerHTML =
      '<article class="page-body"><div class="container narrow">' +
      '<nav class="breadcrumb" aria-label="パンくずリスト">' +
      '<a href="index.html">HOME</a>' +
      '<span><a href="event.html">EVENT</a></span>' +
      "<span>" + esc(ev.title) + "</span></nav>" +
      (ev.date ? '<p class="detail-date">' + esc(ev.date) + "</p>" : "") +
      '<h1 class="detail-title">' + esc(ev.title) + "</h1>" +
      (ev.image ? '<div class="detail-image"><img src="' + esc(UP.asset(ev.image)) + '" alt="' + esc(ev.title) + '"></div>' : "") +
      '<div class="detail-text">' + UP.paragraphs(ev.text) + "</div>" +
      (gallery
        ? '<h2 class="gallery-title">PHOTO</h2><div class="gallery">' + gallery + "</div>"
        : "") +
      (links ? '<div class="detail-links">' + links + "</div>" : "") +
      '<div class="detail-back"><a class="btn back outline" href="event.html">イベント一覧へ戻る</a></div>' +
      "</div></article>" +
      // 写真を押したときに画面中央に出る拡大表示
      '<dialog class="photo-modal" id="photo-modal" aria-label="写真の拡大表示">' +
      '<button class="modal-close" type="button" aria-label="閉じる">×</button>' +
      '<img id="photo-modal-image" src="" alt="">' +
      "</dialog>";

    var modal = $("#photo-modal");
    document.querySelectorAll(".gallery-item").forEach(function (btn) {
      btn.addEventListener("click", function () {
        $("#photo-modal-image").src = UP.asset(photos[Number(btn.dataset.index)]);
        modal.showModal();
      });
    });
    modal.querySelector(".modal-close").addEventListener("click", function () { modal.close(); });
    // 写真の外側（暗い部分）を押しても閉じる
    modal.addEventListener("click", function (e) {
      if (e.target === modal) modal.close();
    });
  }

  /* ---------- 所属ページ ---------- */

  function initAffiliation() {
    document.title = "所属 | " + fullName;
    var items = P.affiliations.items || [];

    var cards = items
      .map(function (a, i) {
        return (
          '<button class="roster-card" type="button" data-index="' + i + '">' +
          '<span class="roster-photo"><img src="' + esc(UP.asset(a.image)) + '" alt="" loading="lazy"></span>' +
          '<span class="roster-name">' + esc(a.name) + "</span>" +
          "</button>"
        );
      })
      .join("");

    $("#main").innerHTML =
      '<div class="page-hero"><div class="container">' +
      UP.sectionHead("CAST", "所属", "h1") +
      "<p>" + esc(P.affiliations.description) + "</p>" +
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
      '<div class="modal-action"><a class="btn" id="modal-link" href="#">公式 X を見る</a></div>' +
      "</div></dialog>";

    var modal = $("#member-modal");
    var link = $("#modal-link");

    document.querySelectorAll(".roster-card").forEach(function (card) {
      card.addEventListener("click", function () {
        var a = items[Number(card.dataset.index)];
        $("#modal-image").src = UP.asset(a.image);
        $("#modal-image").alt = a.name + " キャスト紹介";
        $("#modal-name").textContent = a.name;
        // 公式 X の URL が無いものはボタンを出さない
        link.parentElement.hidden = !a.xUrl;
        link.href = a.xUrl || "#";
        if (/^https?:\/\//.test(a.xUrl || "")) {
          link.target = "_blank";
          link.rel = "noopener noreferrer";
        } else {
          link.removeAttribute("target");
          link.removeAttribute("rel");
        }
        modal.showModal();
      });
    });

    modal.querySelector(".modal-close").addEventListener("click", function () { modal.close(); });
    // 画像の外側（暗い部分）を押しても閉じる
    modal.addEventListener("click", function (e) {
      if (e.target === modal) modal.close();
    });
  }

  /* ---------- 起動 ---------- */

  UP.applyTheme(P.theme);

  if (page === "person-home") initHome();
  else if (page === "person-event") initEvent();
  else if (page === "person-event-detail") initEventDetail();
  else if (page === "person-affiliation") initAffiliation();

  UP.renderHeader({
    name: fullName,
    logo: P.logo,
    homeHref: "index.html",
    nav: P.nav,
    current: document.body.dataset.nav || "",
  });
  UP.renderFooter({
    name: fullName,
    nav: P.nav,
    // 親サイト（うつろプロジェクト）へ戻るリンク
    extraHtml:
      '<p class="footer-parent"><a href="' + UP.asset("index.html") + '">' +
      esc(PARENT.name) + " 公式サイトへ</a></p>",
    copyright: PARENT.nameEn,
  });
  UP.finish();
})();
