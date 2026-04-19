// Theme toggle
window.toggleTheme = function () {
  var current = document.documentElement.getAttribute("data-theme") || "light";
  var next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  try { localStorage.setItem("pb-theme", next); } catch (e) {}
};

// Menu panel
window.openMenu = function () {
  var panel = document.getElementById("menu-panel");
  var backdrop = document.getElementById("menu-backdrop");
  if (panel) panel.setAttribute("data-open", "true");
  if (backdrop) backdrop.setAttribute("data-open", "true");
  document.body.setAttribute("data-menu-open", "true");
};
window.closeMenu = function () {
  var panel = document.getElementById("menu-panel");
  var backdrop = document.getElementById("menu-backdrop");
  if (panel) panel.setAttribute("data-open", "false");
  if (backdrop) backdrop.setAttribute("data-open", "false");
  document.body.setAttribute("data-menu-open", "false");
};

// Dropdown nav toggle
window.toggleDropdown = function (id, event) {
  if (event) event.preventDefault();
  var items = document.querySelectorAll(".site-nav__item");
  items.forEach(function (item) {
    if (item.getAttribute("data-id") !== id) item.setAttribute("data-open", "false");
  });
  var target = document.querySelector('.site-nav__item[data-id="' + id + '"]');
  if (target) {
    var open = target.getAttribute("data-open") === "true";
    target.setAttribute("data-open", open ? "false" : "true");
  }
};

document.addEventListener("click", function (event) {
  if (!event.target.closest(".site-nav__item")) {
    document.querySelectorAll(".site-nav__item").forEach(function (item) {
      item.setAttribute("data-open", "false");
    });
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    window.closeMenu();
    document.querySelectorAll(".site-nav__item").forEach(function (item) {
      item.setAttribute("data-open", "false");
    });
  }
});

// Back-to-top
(function () {
  var btn = document.getElementById("back-to-top");
  if (!btn) return;
  var show = function () {
    if (window.scrollY > 600) btn.setAttribute("data-visible", "true");
    else btn.setAttribute("data-visible", "false");
  };
  window.addEventListener("scroll", show, { passive: true });
  show();
})();

window.scrollToTop = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    var wrap = document.querySelector(".lang-switcher");
    if (wrap && wrap.getAttribute("data-open") === "true") {
      wrap.setAttribute("data-open", "false");
      var btn = wrap.querySelector(".lang-toggle");
      if(btn) { btn.setAttribute("aria-expanded", "false"); btn.focus(); }
    }
  }
});

// Pre-select form fields from URL query params.
// e.g. /book-a-call/?package=signature pre-selects the matching option.
(function () {
  if (!window.location.search) return;
  var params = new URLSearchParams(window.location.search);
  params.forEach(function (value, name) {
    var fields = document.querySelectorAll('[name="' + name + '"]');
    fields.forEach(function (field) {
      if (field.tagName === "SELECT") {
        var matched = false;
        Array.prototype.forEach.call(field.options, function (opt) {
          var optVal = (opt.value || opt.textContent || "").toLowerCase();
          if (optVal === value.toLowerCase() || optVal.indexOf(value.toLowerCase()) === 0) {
            opt.selected = true;
            matched = true;
          }
        });
        if (matched) field.dispatchEvent(new Event("change", { bubbles: true }));
      } else if (field.type === "checkbox" || field.type === "radio") {
        if (field.value.toLowerCase() === value.toLowerCase()) field.checked = true;
      } else if (field.tagName === "INPUT" || field.tagName === "TEXTAREA") {
        if (!field.value) field.value = value;
      }
    });
  });
})();

// Page TOC (for pages with toc: true in front matter — matches sg-nav style)
(function () {
  var content = document.getElementById("page-toc-content");
  var nav = document.getElementById("page-toc-nav");
  if (!content || !nav) return;
  var headings = content.querySelectorAll("h2");
  if (!headings.length) { nav.style.display = "none"; return; }
  var items = [];
  headings.forEach(function (h) {
    if (!h.id) h.id = h.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    var a = document.createElement("a");
    a.href = "#" + h.id;
    a.textContent = h.textContent;
    nav.appendChild(a);
    items.push({ id: h.id, link: a, heading: h });
  });
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) items.forEach(function (item) { item.link.classList.toggle("active", item.id === entry.target.id); });
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  items.forEach(function (item) { observer.observe(item.heading); });
})();
