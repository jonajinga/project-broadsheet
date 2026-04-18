// Glossary tooltips. Looks for <span class="g-term" data-term="foo"> and attaches a tippy tooltip.
(function () {
  var terms = document.querySelectorAll(".g-term[data-term]");
  if (!terms.length) return;

  function init() {
    if (typeof window.tippy !== "function") return false;
    fetch("/glossary-data.json", { credentials: "omit" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (!data) return;
        var lookup = {};
        data.forEach(function (entry) {
          var key = (entry.term || "").toLowerCase();
          lookup[key] = entry;
          if (entry.alt) lookup[entry.alt.toLowerCase()] = entry;
        });
        terms.forEach(function (el) {
          var key = (el.dataset.term || el.textContent || "").toLowerCase();
          var entry = lookup[key];
          if (!entry) return;
          var content = entry.short || "";
          window.tippy(el, {
            content: content,
            theme: "broadsheet",
            allowHTML: false,
            maxWidth: 320,
            delay: [100, 0],
            placement: "top",
            interactive: false,
            trigger: "click mouseenter focus",
            touch: true,
            hideOnClick: true,
            appendTo: function () { return document.body; }
          });
          el.setAttribute("role", "button");
          el.setAttribute("tabindex", "0");
          el.setAttribute("aria-label", entry.term + ": " + content);
        });
      });
    return true;
  }

  if (!init()) {
    var tries = 0;
    var iv = setInterval(function () {
      tries++;
      if (init() || tries > 40) clearInterval(iv);
    }, 100);
  }
})();
