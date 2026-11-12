/* =====================================================================
   共通の部品（メインサイトと定期イベントのサイトの両方で使います）
   文章や画像の差し替えだけなら、このファイルを編集する必要はありません。
   ===================================================================== */

window.UP = (function () {
  "use strict";

  // サイトの一番上のフォルダまでの道のり（イベントのページでは "../"）
  var ROOT = document.body.dataset.root || "";

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

  // データに書かれた画像などのパス（サイトの一番上から見た場所）を、今のページから見た場所に直す
  function asset(path) {
    if (!path) return "";
    return /^(https?:|\/|\.\.?\/|#|data:)/.test(path) ? path : ROOT + path;
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

  function linkCards(links) {
    return (links || [])
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

  function linkButtons(links) {
    return (links || [])
      .map(function (l) {
        return '<a class="btn outline" href="' + esc(l.url) + '"' + linkAttrs(l.url) + ">" + esc(l.label) + "</a>";
      })
      .join("");
  }

  /* ---------- サイトごとの色を反映 ---------- */

  // theme: { main, dark, pale, line }
  function applyTheme(theme) {
    if (!theme) return;
    var style = document.documentElement.style;
    var map = { main: "--blue", dark: "--blue-dark", pale: "--blue-pale", line: "--blue-line" };
    Object.keys(map).forEach(function (key) {
      if (theme[key]) style.setProperty(map[key], theme[key]);
    });
    // 影の色もメインの色に合わせる
    var m = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(theme.main || "");
    if (m) {
      var rgb = [m[1], m[2], m[3]].map(function (h) { return parseInt(h, 16); }).join(", ");
      style.setProperty("--shadow", "0 6px 24px rgba(" + rgb + ", 0.16)");
    }
  }

  /* ---------- ヘッダー・フッター ---------- */

  // opts: { name, logo, homeHref, nav: [{label, href}], current }
  function renderHeader(opts) {
    var links = opts.nav
      .map(function (item) {
        var current = item.href === opts.current ? ' class="is-current" aria-current="page"' : "";
        return '<a href="' + esc(item.href) + '"' + current + ">" + esc(item.label) + "</a>";
      })
      .join("");

    $("#site-header").innerHTML =
      '<div class="inner">' +
      '<a class="site-logo" href="' + esc(opts.homeHref) + '" aria-label="' + esc(opts.name) + ' ホームへ">' +
      '<img src="' + esc(asset(opts.logo)) + '" alt="' + esc(opts.name) + '">' +
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

  // opts: { name, nav, extraHtml, copyright }
  function renderFooter(opts) {
    var links = opts.nav
      .map(function (item) {
        return '<a href="' + esc(item.href) + '">' + esc(item.label) + "</a>";
      })
      .join("");

    $("#site-footer").innerHTML =
      '<div class="container">' +
      '<p class="footer-name">' + esc(opts.name) + "</p>" +
      '<nav class="footer-nav" aria-label="フッターメニュー">' + links + "</nav>" +
      (opts.extraHtml || "") +
      '<p class="copyright">&copy; ' + new Date().getFullYear() + " " + esc(opts.copyright) + "</p>" +
      "</div>";
  }

  /* ---------- 一定時間ごとに切り替わるスライド ---------- */

  function initSlider(root, slides, interval) {
    slides = slides || [];
    if (!root || !slides.length) return;

    var slideHtml = slides
      .map(function (s, i) {
        var img = '<img src="' + esc(asset(s.image)) + '" alt="' + esc(s.alt || "") + '">';
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
      }, interval || 5000);
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

  /* ---------- ページを組み立てた後の仕上げ ---------- */

  function finish() {
    // 画像が見つからないときは仮画像を表示する
    var fallback = asset("assets/images/thumb-placeholder.svg");
    document.querySelectorAll("main img").forEach(function (img) {
      img.addEventListener("error", function () {
        if (!img.dataset.fallback) {
          img.dataset.fallback = "1";
          img.src = fallback;
        }
      });
    });

    // 別ページから index.html#staff のように来たとき、描画後にその位置へ移動する
    if (location.hash) {
      var target = document.getElementById(location.hash.slice(1));
      if (target) target.scrollIntoView({ behavior: "instant" });
    }
  }

  return {
    esc: esc,
    $: $,
    asset: asset,
    paragraphs: paragraphs,
    param: param,
    linkAttrs: linkAttrs,
    sectionHead: sectionHead,
    notFound: notFound,
    linkCards: linkCards,
    linkButtons: linkButtons,
    applyTheme: applyTheme,
    renderHeader: renderHeader,
    renderFooter: renderFooter,
    initSlider: initSlider,
    finish: finish,
  };
})();
