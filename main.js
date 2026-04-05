(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Footer year */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  function getHeaderOffset() {
    var raw = getComputedStyle(document.documentElement).getPropertyValue("--header-h").trim();
    var n = parseInt(raw, 10);
    return isNaN(n) ? 88 : n;
  }

  var topNav = document.getElementById("top-nav");
  var floatToggle = document.querySelector(".hero-bar__menu");
  var floatPanel = document.getElementById("float-nav-panel");
  if (topNav && floatToggle && floatPanel) {
    floatToggle.addEventListener("click", function () {
      var open = topNav.classList.toggle("is-open");
      floatToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    floatPanel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        topNav.classList.remove("is-open");
        floatToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Scroll reveal */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if (revealEls.length && !prefersReducedMotion) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else if (revealEls.length) {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* Hero: staggered fade via CSS transition-delay on .hero-reveal */
  var heroReveals = document.querySelectorAll(".hero-reveal");
  function showHeroReveals() {
    window.requestAnimationFrame(function () {
      heroReveals.forEach(function (el) {
        el.classList.add("is-visible");
      });
    });
  }
  if (heroReveals.length) {
    if (prefersReducedMotion) {
      heroReveals.forEach(function (el) {
        el.classList.add("is-visible");
      });
    } else if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", showHeroReveals);
    } else {
      showHeroReveals();
    }
  }

  var heroVideo = document.querySelector(".hero__video");
  if (heroVideo && heroVideo.play) {
    heroVideo.play().catch(function () {});
  }

  /* Count-up */
  function animateCount(el, target, suffix, duration) {
    var start = performance.now();
    function frame(now) {
      var t = Math.min(1, (now - start) / duration);
      var eased = 1 - Math.pow(1 - t, 3);
      var value = Math.round(eased * target);
      el.textContent = value + suffix;
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  var statNums = document.querySelectorAll(".stat__num[data-count]");
  if (statNums.length && !prefersReducedMotion) {
    var counted = false;
    var statsObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting || counted) return;
          counted = true;
          statNums.forEach(function (el) {
            var target = parseInt(el.getAttribute("data-count"), 10);
            var suffix = el.getAttribute("data-suffix") || "";
            animateCount(el, target, suffix, 1600);
          });
          statsObserver.disconnect();
        });
      },
      { threshold: 0.35 }
    );
    var heroStats = document.querySelector(".hero__stats");
    if (heroStats) statsObserver.observe(heroStats);
  } else if (statNums.length) {
    statNums.forEach(function (el) {
      var target = el.getAttribute("data-count");
      var suffix = el.getAttribute("data-suffix") || "";
      el.textContent = target + suffix;
    });
  }

  /* Hero parallax */
  var parallaxLayer = document.querySelector("[data-parallax]");
  if (parallaxLayer && !prefersReducedMotion) {
    var ticking = false;
    function updateParallax() {
      var scrollY = window.scrollY;
      var max = window.innerHeight;
      var p = Math.min(1, scrollY / max);
      var y = p * 12;
      var scale = 1.08 + p * 0.02;
      parallaxLayer.style.transform = "translate3d(0, " + y + "%, 0) scale(" + scale + ")";
      ticking = false;
    }
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(updateParallax);
        }
      },
      { passive: true }
    );
    updateParallax();
  }

  /* Contact form (front-end demo) */
  var form = document.querySelector(".contact__form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
    });
  }

  /* Smooth anchor offset for fixed header */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset() - 10;
      window.scrollTo({ top: top, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  });

  /* Floating slide-tabs nav (Framer-style cursor, vanilla) */
  var floatTabsRoot = document.getElementById("float-tabs");
  if (floatTabsRoot) {
    var floatCursor = floatTabsRoot.querySelector(".float-tabs__cursor");
    var floatItems = floatTabsRoot.querySelectorAll(".float-tabs__item");
    var floatLinks = floatTabsRoot.querySelectorAll(".float-tabs__link");
    /* One entry per nav tab; merged "Services" tracks industries + services + partners */
    var sectionGroups = [
      ["hero"],
      ["about"],
      ["why-us"],
      ["industries", "services", "partners"],
      ["news"],
      ["customers"],
    ];
    var floatSelected = 0;
    var floatHover = false;

    function floatMoveCursorToIndex(idx) {
      if (!floatCursor || !floatItems.length) return;
      var item = floatItems[idx];
      if (!item) return;
      var ul = floatTabsRoot;
      var ulR = ul.getBoundingClientRect();
      var itemR = item.getBoundingClientRect();
      var cs = getComputedStyle(ul);
      var bl = parseFloat(cs.borderLeftWidth) || 0;
      var br = parseFloat(cs.borderRightWidth) || 0;
      var padEdgeLeftV = ulR.left + bl;
      var padEdgeRightV = ulR.right - br;
      var lastIdx = floatItems.length - 1;
      var isFirst = idx === 0;
      var isLast = idx === lastIdx;
      /* Edge tabs: extend into ul padding so red meets the grey pill’s rounded ends (lis sit inset). */
      var leftPx;
      var widthPx;
      if (isFirst && isLast) {
        leftPx = 0;
        widthPx = ul.clientWidth;
      } else if (isFirst) {
        leftPx = 0;
        widthPx = itemR.right - padEdgeLeftV;
      } else if (isLast) {
        leftPx = itemR.left - padEdgeLeftV;
        widthPx = padEdgeRightV - itemR.left;
      } else {
        leftPx = itemR.left - padEdgeLeftV;
        widthPx = itemR.width;
      }
      /* Match full inner pill height (padding included); li height only covers the label band. */
      floatCursor.style.transform = "none";
      floatCursor.style.top = "0";
      floatCursor.style.left = leftPx + "px";
      floatCursor.style.width = widthPx + "px";
      floatCursor.style.height = ul.clientHeight + "px";
      floatCursor.style.opacity = "1";
    }

    function floatUpdateActiveClasses() {
      floatLinks.forEach(function (link, i) {
        link.classList.toggle("is-active", i === floatSelected);
        if (i === floatSelected) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    }

    function floatSetSelected(idx, moveCursor) {
      floatSelected = Math.max(0, Math.min(floatItems.length - 1, idx));
      floatUpdateActiveClasses();
      if (moveCursor !== false && !floatHover) floatMoveCursorToIndex(floatSelected);
    }

    function floatSyncFromScroll() {
      /* Prefer the section under a probe point (stable while scrolling). Visibility-only scoring
         often defaults to tab 0 when no block passes the threshold, or hero wins briefly — cursor jumps to Home. */
      var headerH = getHeaderOffset();
      var probeY = headerH + (window.innerHeight - headerH) * 0.3;
      var probeX = window.innerWidth * 0.5;
      var node = document.elementFromPoint(probeX, probeY);
      var walk = node;
      while (walk && walk !== document.documentElement) {
        if (walk.nodeType === 1 && walk.id) {
          for (var ti = 0; ti < sectionGroups.length; ti++) {
            if (sectionGroups[ti].indexOf(walk.id) >= 0) {
              if (ti !== floatSelected) {
                floatSelected = ti;
                floatUpdateActiveClasses();
                if (!floatHover) floatMoveCursorToIndex(floatSelected);
              }
              return;
            }
          }
        }
        walk = walk.parentElement;
      }

      var mid = window.innerHeight * 0.22;
      var best = floatSelected;
      var bestScore = -Infinity;
      sectionGroups.forEach(function (ids, tabIdx) {
        var tabBest = -Infinity;
        ids.forEach(function (id) {
          var el = document.getElementById(id);
          if (!el) return;
          var r = el.getBoundingClientRect();
          var visible = Math.min(r.bottom, window.innerHeight) - Math.max(r.top, 0);
          if (visible <= 40) return;
          var score = visible - Math.abs(r.top - mid) * 0.2;
          if (score > tabBest) tabBest = score;
        });
        if (tabBest > bestScore) {
          bestScore = tabBest;
          best = tabIdx;
        }
      });
      if (bestScore === -Infinity) return;
      if (best !== floatSelected) {
        floatSelected = best;
        floatUpdateActiveClasses();
        if (!floatHover) floatMoveCursorToIndex(floatSelected);
      }
    }

    floatItems.forEach(function (item, i) {
      item.addEventListener("mouseenter", function () {
        floatHover = true;
        floatMoveCursorToIndex(i);
      });
    });

    floatTabsRoot.addEventListener("mouseleave", function () {
      floatHover = false;
      floatMoveCursorToIndex(floatSelected);
    });

    floatLinks.forEach(function (link, i) {
      link.addEventListener("click", function () {
        floatHover = false;
        floatSetSelected(i, true);
      });
    });

    var floatScrollBusy = false;
    window.addEventListener(
      "scroll",
      function () {
        if (floatScrollBusy) return;
        floatScrollBusy = true;
        requestAnimationFrame(function () {
          floatScrollBusy = false;
          floatSyncFromScroll();
        });
      },
      { passive: true }
    );

    window.addEventListener("resize", function () {
      if (floatHover) {
        var hovered = floatTabsRoot.querySelector(".float-tabs__item:hover");
        var hi = hovered ? Array.prototype.indexOf.call(floatItems, hovered) : floatSelected;
        if (hi >= 0) floatMoveCursorToIndex(hi);
      } else {
        floatMoveCursorToIndex(floatSelected);
      }
    });

    function floatInitPosition() {
      floatUpdateActiveClasses();
      floatMoveCursorToIndex(floatSelected);
      floatSyncFromScroll();
    }

    if (document.readyState === "complete") {
      requestAnimationFrame(floatInitPosition);
    } else {
      window.addEventListener("load", function () {
        requestAnimationFrame(floatInitPosition);
      });
      requestAnimationFrame(floatInitPosition);
    }
  }

  /* About — word reveal driven by normal scroll through a sticky + tall track (no body lock) */
  var ABOUT_REVEAL_LINES = [
    "El Etehadia Company for Import, Export & Agencies has served manufacturers since 1997 from Cairo, Egypt. We offer all types of reliable electroplating chemicals, machines, and related accessories — with licensed production under MacDermid Enthone standards.",
  ];

  var aboutRevealTrack = document.getElementById("about-reveal-track");
  var aboutRevealCopy = document.getElementById("about-reveal-copy");

  function aboutSplitWords(text) {
    return text.trim().split(/\s+/).filter(Boolean);
  }

  function aboutBuildWordSpans() {
    if (!aboutRevealCopy) return [];
    var paras = aboutRevealCopy.querySelectorAll("[data-about-line]");
    var allFg = [];

    paras.forEach(function (p, pi) {
      var line = ABOUT_REVEAL_LINES[pi];
      if (!line) return;
      var words = aboutSplitWords(line);
      words.forEach(function (w) {
        var wrap = document.createElement("span");
        wrap.className = "about__word";
        var ghost = document.createElement("span");
        ghost.className = "about__word-ghost";
        ghost.setAttribute("aria-hidden", "true");
        ghost.textContent = w;
        var fg = document.createElement("span");
        fg.className = "about__word-fg";
        fg.textContent = w;
        wrap.appendChild(ghost);
        wrap.appendChild(fg);
        p.appendChild(wrap);
        allFg.push(fg);
      });
    });

    return allFg;
  }

  function aboutWordOpacity(progress, wordIndex, totalWords) {
    if (totalWords <= 0) return 1;
    var start = wordIndex / totalWords;
    var end = start + 1 / totalWords;
    if (progress <= start) return 0;
    if (progress >= end) return 1;
    return (progress - start) / (end - start);
  }

  function aboutScrollProgress(track) {
    if (!track) return 0;
    var range = track.offsetHeight - window.innerHeight;
    if (range <= 0) return 1;
    var rect = track.getBoundingClientRect();
    var t = -rect.top / range;
    return Math.min(1, Math.max(0, t));
  }

  if (aboutRevealTrack && aboutRevealCopy) {
    var fgSpans = aboutBuildWordSpans();
    var nWords = fgSpans.length;

    function aboutApplyOpacities(p) {
      for (var i = 0; i < nWords; i++) {
        fgSpans[i].style.opacity = String(aboutWordOpacity(p, i, nWords));
      }
    }

    if (prefersReducedMotion) {
      aboutRevealCopy.classList.add("is-static");
    } else if (nWords > 0) {
      var aboutRevealTicking = false;

      function aboutRevealOnScroll() {
        if (aboutRevealTicking) return;
        aboutRevealTicking = true;
        requestAnimationFrame(function () {
          aboutRevealTicking = false;
          var p = aboutScrollProgress(aboutRevealTrack);
          aboutApplyOpacities(p);
          if (p >= 0.999) aboutRevealCopy.classList.add("is-static");
        });
      }

      aboutRevealOnScroll();
      window.addEventListener("scroll", aboutRevealOnScroll, { passive: true });
      window.addEventListener("resize", aboutRevealOnScroll, { passive: true });
    }
  }
})();
