// Adds a Copy button to every <pre> block. Vanilla, no dependencies.
(function () {
  var blocks = document.querySelectorAll("pre");
  if (!blocks.length) return;

  blocks.forEach(function (pre) {
    if (pre.parentElement && pre.parentElement.classList.contains("code-block")) return;
    if (pre.dataset.noCopy) return;

    var wrap = document.createElement("div");
    wrap.className = "code-block";
    pre.parentNode.insertBefore(wrap, pre);
    wrap.appendChild(pre);

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "code-copy";
    btn.setAttribute("aria-label", "Copy code to clipboard");
    btn.innerHTML = '<svg class="code-copy__icon code-copy__icon--copy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="1"/><path d="M5 15V5a1 1 0 0 1 1-1h10"/></svg><svg class="code-copy__icon code-copy__icon--check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg><span class="code-copy__label">Copy</span>';
    wrap.appendChild(btn);

    btn.addEventListener("click", function () {
      var code = pre.querySelector("code");
      var text = (code ? code.innerText : pre.innerText).replace(/\r\n/g, "\n");

      var done = function () {
        btn.classList.add("is-copied");
        btn.querySelector(".code-copy__label").textContent = "Copied";
        setTimeout(function () {
          btn.classList.remove("is-copied");
          btn.querySelector(".code-copy__label").textContent = "Copy";
        }, 1800);
      };

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(done).catch(fallback);
      } else {
        fallback();
      }

      function fallback() {
        var ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.top = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); done(); } catch (e) { /* noop */ }
        document.body.removeChild(ta);
      }
    });
  });
})();
