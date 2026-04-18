// Auto-generated TOC + IntersectionObserver active highlighting
(function () {
  var content = document.querySelector(".doc-content");
  var tocList = document.getElementById("toc-list");
  if (!content || !tocList) return;

  var headings = content.querySelectorAll("h2, h3");
  if (!headings.length) {
    var toc = document.querySelector(".docs-toc");
    if (toc) toc.style.display = "none";
    return;
  }

  var items = [];
  headings.forEach(function (h) {
    if (!h.id) {
      h.id = h.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    }
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = "#" + h.id;
    a.textContent = h.textContent;
    if (h.tagName === "H3") a.classList.add("toc-h3");
    li.appendChild(a);
    tocList.appendChild(li);
    items.push({ id: h.id, link: a, heading: h });
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        items.forEach(function (item) {
          item.link.classList.toggle("active", item.id === entry.target.id);
        });
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  items.forEach(function (item) { observer.observe(item.heading); });
})();

// Reading progress bar
(function () {
  var bar = document.getElementById("reading-progress");
  if (!bar) return;
  var update = function () {
    var scroll = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? (scroll / docHeight) * 100 : 0;
    bar.style.width = Math.min(100, Math.max(0, pct)) + "%";
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
})();

// Doc feedback (yes / no)
window.docFeedback = function (value) {
  var slug = document.body.getAttribute("data-doc-slug") || location.pathname;
  if (value === "yes") {
    var wrap = document.getElementById("doc-feedback");
    if (wrap) wrap.innerHTML = '<span class="doc-feedback__text">Thanks, that helps.</span>';
    try {
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: document.body.getAttribute("data-w3f-key") || "",
          subject: "Docs feedback: helpful",
          article: slug
        })
      }).catch(function () {});
    } catch (e) {}
  } else {
    window.location.href = "/forms/docs-feedback/?article=" + encodeURIComponent(slug);
  }
};
