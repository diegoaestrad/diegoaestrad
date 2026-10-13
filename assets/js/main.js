/* Diego Estrada — Portafolio: render de contenido, idioma, carrusel y navegación */
(function () {
  "use strict";

  var root = document.documentElement;
  var SITE = window.SITE || { projects: [], experience: [], skills: { core: [], coreEn: [], groups: [], languages: [] }, credentials: [] };
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Utilidades ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  /* Texto en línea bilingüe: { es, en } → dos <span>, string → texto */
  function t(v) {
    if (v && typeof v === "object") {
      return '<span data-l="es">' + esc(v.es) + '</span><span data-l="en">' + esc(v.en) + "</span>";
    }
    return esc(v);
  }
  /* Bloque bilingüe: un elemento por idioma */
  function block(tag, cls, v) {
    var c = cls ? ' class="' + cls + '"' : "";
    if (v && typeof v === "object") {
      return "<" + tag + c + ' data-l="es">' + esc(v.es) + "</" + tag + ">" +
             "<" + tag + c + ' data-l="en">' + esc(v.en) + "</" + tag + ">";
    }
    return "<" + tag + c + ">" + esc(v) + "</" + tag + ">";
  }
  function pad(n) { return n < 10 ? "0" + n : String(n); }
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  var ARROW = '<svg class="i" viewBox="0 0 16 16" aria-hidden="true"><path d="M5 11l6-6m0 0H6m5 0v5"/></svg>';

  /* ---------- Render: proyectos ---------- */
  var track = $("#projects-track");
  if (track) {
    track.innerHTML = SITE.projects.map(function (p, i) {
      var id = "project-" + (i + 1);
      var foot = "";
      if (p.url) {
        foot = '<a class="card-link" href="' + esc(p.url) + '" target="_blank" rel="noopener">' +
               t({ es: "Ver proyecto", en: "View project" }) + ARROW + "</a>";
      } else if (p.privateCode) {
        foot = '<span class="card-note">' + t({ es: "Código privado del cliente", en: "Client code, not public" }) + "</span>";
      }
      return (
        '<article class="card" id="' + id + '" role="group" aria-labelledby="' + id + '-title">' +
          '<div class="card-top">' +
            '<p class="card-cat">' + t(p.category) + "</p>" +
            '<p class="card-ctx">' + t(p.context) + "</p>" +
          "</div>" +
          '<h3 class="card-title" id="' + id + '-title">' + t(p.name) + "</h3>" +
          block("p", "card-desc", p.description) +
          '<dl class="psr">' +
            "<div><dt>" + t({ es: "Problema", en: "Problem" }) + "</dt><dd>" + t(p.problem) + "</dd></div>" +
            "<div><dt>" + t({ es: "Solución", en: "Solution" }) + "</dt><dd>" + t(p.solution) + "</dd></div>" +
            '<div class="psr-result"><dt>' + t({ es: "Resultado", en: "Result" }) + "</dt><dd>" + t(p.result) + "</dd></div>" +
          "</dl>" +
          '<ul class="chips" aria-label="Tecnologías">' + p.tech.map(function (x) { return "<li>" + t(x) + "</li>"; }).join("") + "</ul>" +
          (foot ? '<div class="card-foot">' + foot + "</div>" : "") +
        "</article>"
      );
    }).join("");
  }

  /* ---------- Render: experiencia ---------- */
  var expList = $("#experience-list");
  if (expList) {
    expList.innerHTML = SITE.experience.map(function (j) {
      var years = esc(j.from) + (j.to ? " – " + esc(j.to) : "");
      var points = j.points && j.points.length
        ? '<ul class="job-points">' + j.points.map(function (pt) { return "<li>" + t(pt) + "</li>"; }).join("") + "</ul>"
        : "";
      var tech = j.tech && j.tech.length
        ? '<p class="job-tech">' + j.tech.map(function (x) { return t(x); }).join(", ") + "</p>"
        : "";
      return (
        '<li class="job">' +
          '<div class="job-when"><p class="job-years">' + years + '</p><p class="job-period">' + t(j.period) + "</p></div>" +
          '<div class="job-head"><h3 class="job-role">' + t(j.role) + '</h3><p class="job-company">' + esc(j.company) +
            '</p><p class="job-place">' + t(j.place) + "</p></div>" +
          '<div class="job-body">' + block("p", "job-summary", j.summary) + points + tech + "</div>" +
        "</li>"
      );
    }).join("");
  }

  /* ---------- Render: habilidades ---------- */
  var core = $("#core-skills");
  if (core) {
    core.innerHTML = SITE.skills.core.map(function (s, i) {
      var en = (SITE.skills.coreEn && SITE.skills.coreEn[i]) || s;
      return "<li>" + (en === s ? esc(s) : t({ es: s, en: en })) + "</li>";
    }).join("");
  }
  var groups = $("#skill-groups");
  if (groups) {
    groups.innerHTML = SITE.skills.groups.map(function (g) {
      return '<div class="skill-group"><h3>' + t(g.name) + "</h3><ul>" +
        g.items.map(function (x) { return "<li>" + t(x) + "</li>"; }).join("") + "</ul></div>";
    }).join("");
  }
  var langs = $("#languages-list");
  if (langs) {
    langs.innerHTML = SITE.skills.languages.map(function (l) { return "<li>" + t(l) + "</li>"; }).join("");
  }

  /* ---------- Render: credenciales ---------- */
  var creds = $("#credentials-list");
  if (creds) {
    creds.innerHTML = SITE.credentials.map(function (c) {
      return (
        '<li class="cred">' +
          '<span class="cred-code">' + esc(c.code) + "</span>" +
          '<div class="cred-main"><h3 class="cred-title">' + t(c.title) + '</h3><p class="cred-org">' + t(c.org) + "</p></div>" +
          '<p class="cred-meta"><span>' + t(c.kind) + '</span><span class="cred-year">' + esc(c.year) + "</span></p>" +
        "</li>"
      );
    }).join("");
  }

  /* ---------- Idioma ---------- */
  var META = {
    es: {
      title: "Diego Estrada · Backend Software Engineer (Java y Spring Boot)",
      desc: "Portafolio de Diego Alejandro Estrada Beltran, Backend Software Engineer con más de 15 años en Java, Spring Boot, APIs REST, ciberseguridad e integraciones de IA con MCP. Medellín, Colombia."
    },
    en: {
      title: "Diego Estrada · Backend Software Engineer (Java & Spring Boot)",
      desc: "Portfolio of Diego Alejandro Estrada Beltran, Backend Software Engineer with 15+ years in Java, Spring Boot, REST APIs, cybersecurity and AI integrations with MCP. Medellín, Colombia."
    }
  };
  var metaDesc = $('meta[name="description"]');

  function setLang(l, persist) {
    if (l !== "es" && l !== "en") { l = "es"; }
    root.setAttribute("data-lang", l);
    root.lang = l;
    document.title = META[l].title;
    if (metaDesc) { metaDesc.setAttribute("content", META[l].desc); }
    $$("[data-aria-" + l + "]").forEach(function (el) { el.setAttribute("aria-label", el.getAttribute("data-aria-" + l)); });
    $$("[data-alt-" + l + "]").forEach(function (el) { el.setAttribute("alt", el.getAttribute("data-alt-" + l)); });
    $$(".chips").forEach(function (el) { el.setAttribute("aria-label", l === "es" ? "Tecnologías" : "Technologies"); });
    $$("[data-set-lang]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-set-lang") === l)); });
    if (persist) {
      try { localStorage.setItem("de-lang", l); } catch (e) { /* almacenamiento no disponible */ }
    }
  }
  $$("[data-set-lang]").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-set-lang"), true); });
  });
  setLang(root.getAttribute("data-lang"), false);

  /* ---------- Carrusel de proyectos ---------- */
  (function carousel() {
    if (!track) { return; }
    var slides = $$(".card", track);
    var dotsWrap = $("#carousel-dots");
    var prev = $("#carousel-prev");
    var next = $("#carousel-next");
    var cur = $("#carousel-current");
    var tot = $("#carousel-total");
    var index = 0;

    if (tot) { tot.textContent = pad(slides.length); }
    if (dotsWrap) {
      dotsWrap.innerHTML = slides.map(function (s, i) {
        var p = SITE.projects[i];
        return '<button type="button" class="dot" data-i="' + i + '"><span class="sr-only">' +
          t({ es: "Proyecto " + (i + 1) + ": " + p.name.es, en: "Project " + (i + 1) + ": " + p.name.en }) +
          "</span></button>";
      }).join("");
    }
    var dots = dotsWrap ? $$(".dot", dotsWrap) : [];

    function startPad() { return parseFloat(getComputedStyle(track).paddingLeft) || 0; }

    function currentIndex() {
      var x = track.scrollLeft;
      if (x >= track.scrollWidth - track.clientWidth - 2) { return slides.length - 1; }
      var p = startPad(), best = 0, bestD = Infinity;
      slides.forEach(function (s, i) {
        var d = Math.abs(s.offsetLeft - p - x);
        if (d < bestD) { bestD = d; best = i; }
      });
      return best;
    }

    function update() {
      index = currentIndex();
      if (cur) { cur.textContent = pad(index + 1); }
      dots.forEach(function (d, i) {
        if (i === index) { d.setAttribute("aria-current", "true"); } else { d.removeAttribute("aria-current"); }
      });
      var atStart = track.scrollLeft <= 2;
      var atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
      if (prev) { prev.disabled = atStart; }
      if (next) { next.disabled = atEnd; }
    }

    function goTo(i) {
      i = Math.max(0, Math.min(slides.length - 1, i));
      track.scrollTo({ left: slides[i].offsetLeft - startPad(), behavior: reduceMotion ? "auto" : "smooth" });
    }

    var ticking = false;
    track.addEventListener("scroll", function () {
      if (ticking) { return; }
      ticking = true;
      window.requestAnimationFrame(function () { update(); ticking = false; });
    }, { passive: true });

    if (prev) { prev.addEventListener("click", function () { goTo(index - 1); }); }
    if (next) { next.addEventListener("click", function () { goTo(index + 1); }); }
    dots.forEach(function (d) {
      d.addEventListener("click", function () { goTo(parseInt(d.getAttribute("data-i"), 10)); });
    });
    track.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); goTo(index + 1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); goTo(index - 1); }
    });
    window.addEventListener("resize", update);
    update();
  })();

  /* ---------- Menú móvil ---------- */
  var toggle = $(".menu-toggle");
  var menu = $("#mobile-menu");
  function setMenu(open) {
    if (!toggle || !menu) { return; }
    toggle.setAttribute("aria-expanded", String(open));
    menu.hidden = !open;
    root.classList.toggle("menu-open", open);
  }
  if (toggle && menu) {
    toggle.addEventListener("click", function () { setMenu(menu.hidden); });
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) { setMenu(false); } });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !menu.hidden) { setMenu(false); toggle.focus(); }
    });
    var wide = window.matchMedia("(min-width: 1140px)");
    var onWide = function (e) { if (e.matches) { setMenu(false); } };
    if (wide.addEventListener) { wide.addEventListener("change", onWide); } else if (wide.addListener) { wide.addListener(onWide); }
  }

  /* ---------- Header al hacer scroll ---------- */
  var header = $("#site-header");
  function onScroll() { if (header) { header.classList.toggle("is-scrolled", window.scrollY > 8); } }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Sección activa en la navegación ---------- */
  var navLinks = $$('.nav a[href^="#"], .mobile-menu a[href^="#"]');
  var sections = $$("main section[id]");
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) { return; }
        var id = en.target.id;
        navLinks.forEach(function (a) {
          if (a.getAttribute("href") === "#" + id) { a.setAttribute("aria-current", "true"); } else { a.removeAttribute("aria-current"); }
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { spy.observe(s); });

    /* Entrada sutil de encabezados de sección */
    var reveals = $$(".reveal");
    if (reduceMotion) {
      reveals.forEach(function (el) { el.classList.add("in"); });
    } else {
      var ro = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("in"); ro.unobserve(en.target); }
        });
      }, { rootMargin: "0px 0px -10% 0px" });
      reveals.forEach(function (el) { ro.observe(el); });
    }
  } else {
    $$(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Año ---------- */
  var y = $("#year");
  if (y) { y.textContent = String(new Date().getFullYear()); }
})();
