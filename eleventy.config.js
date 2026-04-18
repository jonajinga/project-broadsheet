import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import rssPlugin from "@11ty/eleventy-plugin-rss";
import tinyhtml from "@sardine/eleventy-plugin-tinyhtml";

const CSS_ENTRY = "global.css";
const CSS_PARTIALS = [
  "reset.css",
  "tokens.css",
  "utilities.css",
  "components/typography.css",
  "components/buttons.css",
  "components/header.css",
  "components/nav.css",
  "components/hamburger.css",
  "components/footer.css",
  "components/cards.css",
  "components/tables.css",
  "components/forms.css",
  "components/alerts.css",
  "components/back-to-top.css",
  "components/sidebar-cta.css",
  "components/footer-cta.css",
  "components/docs.css",
  "components/search.css",
  "pages/home.css",
  "pages/features.css",
  "pages/pricing.css",
  "pages/compare.css",
  "pages/docs.css",
  "pages/blog.css",
  "pages/contact.css",
  "pages/style-guide.css",
  "pages/sitemap.css"
];

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(rssPlugin);

  const isProd = process.env.NODE_ENV === "production" || process.env.ELEVENTY_RUN_MODE === "build";
  if (isProd) {
    eleventyConfig.addPlugin(tinyhtml);
  }

  eleventyConfig.addPassthroughCopy({ "src/assets/img": "assets/img" });
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "assets/js" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });

  eleventyConfig.addWatchTarget("src/assets/css/");
  eleventyConfig.addWatchTarget("src/assets/js/");

  eleventyConfig.addTemplateFormats("css");
  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",
    compile: async function (inputContent, inputPath) {
      const basename = path.basename(inputPath);
      if (basename !== CSS_ENTRY) return;
      const baseDir = path.dirname(inputPath);
      return async () => {
        let out = "";
        for (const partial of CSS_PARTIALS) {
          const p = path.join(baseDir, partial);
          if (fs.existsSync(p)) {
            out += `/* ${partial} */\n` + fs.readFileSync(p, "utf8") + "\n\n";
          }
        }
        return out;
      };
    }
  });

  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  eleventyConfig.addFilter("readableDate", (date) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  });

  eleventyConfig.addFilter("htmlDateString", (date) => {
    return new Date(date).toISOString().split("T")[0];
  });

  eleventyConfig.addFilter("head", (array, n) => {
    if (!Array.isArray(array) || array.length === 0) return [];
    if (n < 0) return array.slice(n);
    return array.slice(0, n);
  });

  eleventyConfig.addFilter("striptags", (str) => {
    if (!str) return "";
    return String(str).replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  });

  eleventyConfig.addFilter("readingTime", (content) => {
    if (!content) return 1;
    const words = String(content).replace(/<[^>]*>/g, "").split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 225));
  });

  eleventyConfig.addFilter("rejectattr", (arr, attr, value) => {
    if (!Array.isArray(arr)) return [];
    return arr.filter((item) => item?.data?.[attr] !== value && item?.[attr] !== value);
  });

  eleventyConfig.addFilter("truncate", (str, length = 160) => {
    if (!str) return "";
    const s = String(str).trim();
    if (s.length <= length) return s;
    return s.slice(0, length).replace(/\s+\S*$/, "") + "…";
  });

  eleventyConfig.addFilter("slugify", (str) => {
    return String(str).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  });

  eleventyConfig.addFilter("where", (arr, key, value) => {
    if (!Array.isArray(arr)) return [];
    return arr.filter((item) => item?.[key] === value);
  });

  eleventyConfig.addCollection("docs", (api) => {
    return api.getFilteredByGlob("src/docs/**/*.md").sort((a, b) => {
      const ao = a.data.order ?? 99;
      const bo = b.data.order ?? 99;
      return ao - bo;
    });
  });

  eleventyConfig.addCollection("posts", (api) => {
    return api.getFilteredByGlob("src/blog/**/*.md").reverse();
  });

  eleventyConfig.addCollection("releases", (api) => {
    return api.getFilteredByGlob("src/changelog/**/*.md").reverse();
  });

  eleventyConfig.on("eleventy.after", async ({ dir, runMode }) => {
    if (runMode === "build") {
      try {
        execSync(`npx pagefind --site "${dir.output}"`, { stdio: "inherit" });
      } catch (e) {
        console.warn("Pagefind indexing failed:", e.message);
      }
    }
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html", "11ty.js", "css"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
}
