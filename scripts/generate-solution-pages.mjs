#!/usr/bin/env node
/**
 * Regenerates `solutions/{slug}/index.html` stubs from `src/data/solutions.js`.
 * Run from repo root: node scripts/generate-solution-pages.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function truncate(text, maxLen = 155) {
  const t = String(text).trim().replace(/\s+/g, " ");
  return t.length <= maxLen ? t : `${t.slice(0, Math.max(0, maxLen - 1)).trim()}…`;
}

/** @type {typeof import("../src/data/solutions.js")} */
const solutionsMod = await import(pathToFileURL(path.join(root, "src/data/solutions.js")).href);

function escapeHtmlAttr(s) {
  return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function stubHtml(slug, title, description) {
  const meta = escapeHtmlAttr(truncate(description));
  const safeTitle = escapeHtmlAttr(title);
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${safeTitle} | Surface Finishing Solutions | El Etehadia</title>
    <meta name="description" content="${meta}" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;family=Noto+Kufi+Arabic:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet" />
  </head>
  <body data-page="solution-detail" data-slug="${escapeHtmlAttr(slug)}">
    <div id="app"></div>
    <script type="module" src="/src/solutions/main.js"></script>
  </body>
</html>
`;
}

const detail = solutionsMod.getDetailSolutions();
for (const s of detail) {
  const dir = path.join(root, "solutions", s.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), stubHtml(s.slug, s.title, s.description), "utf8");
}

console.log("Wrote solutions pages:", detail.map((x) => x.slug).join(", "));
console.log("\nAdd these to vite.config.js rollupOptions.input if slugs changed:");
console.log(detail.map((x) => `        solution_${x.slug.replace(/-/g, "_")}: resolve(__dirname, "solutions/${x.slug}/index.html"),`).join("\n"));
