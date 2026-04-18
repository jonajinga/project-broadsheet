// Lazy-loaded site-wide search modal backed by Pagefind.
(function () {
  var modal = document.getElementById("search-modal");
  if (!modal) return;
  var loaded = false;
  var initializing = false;

  function loadPagefind() {
    if (loaded || initializing) return Promise.resolve();
    initializing = true;

    var css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "/pagefind/pagefind-ui.css";
    document.head.appendChild(css);

    return new Promise(function (resolve) {
      var script = document.createElement("script");
      script.src = "/pagefind/pagefind-ui.js";
      script.onload = function () {
        try {
          if (window.PagefindUI) {
            new window.PagefindUI({
              element: "#pagefind-search",
              showSubResults: true,
              resetStyles: false,
              autofocus: true
            });
          }
        } catch (e) { /* noop */ }
        loaded = true;
        initializing = false;
        resolve();
      };
      script.onerror = function () { initializing = false; resolve(); };
      document.body.appendChild(script);
    });
  }

  window.openSearch = function () {
    modal.setAttribute("data-open", "true");
    modal.setAttribute("aria-hidden", "false");
    document.body.setAttribute("data-search-open", "true");
    loadPagefind().then(function () {
      setTimeout(function () {
        var input = modal.querySelector(".pagefind-ui__search-input");
        if (input) input.focus();
      }, 50);
    });
  };

  window.closeSearch = function () {
    modal.setAttribute("data-open", "false");
    modal.setAttribute("aria-hidden", "true");
    document.body.removeAttribute("data-search-open");
  };

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.getAttribute("data-open") === "true") {
      window.closeSearch();
    }
    // Cmd/Ctrl + K opens search
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (modal.getAttribute("data-open") === "true") window.closeSearch();
      else window.openSearch();
    }
    // "/" opens search (unless already typing in a field)
    if (e.key === "/" && !/input|textarea|select/i.test(document.activeElement.tagName)) {
      e.preventDefault();
      window.openSearch();
    }
  });
})();
