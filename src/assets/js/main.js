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
