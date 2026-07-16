#!/usr/bin/env node
/**
 * Regenerates `industries/{slug}/index.html` stubs from `src/data/industries.js`.
 * Run from repo root: node scripts/generate-industry-pages.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { renderSeoHead } from "./seo-head.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function truncate(text, maxLen = 155) {
  const t = String(text).trim().replace(/\s+/g, " ");
  return t.length <= maxLen ? t : `${t.slice(0, Math.max(0, maxLen - 1)).trim()}...`;
}

function escapeHtmlAttr(s) {
  return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

/** @type {typeof import("../src/data/industries.js")} */
const industriesMod = await import(pathToFileURL(path.join(root, "src/data/industries.js")).href);

function stubHtml(industry) {
  const meta = escapeHtmlAttr(truncate(industry.intro));
  const safeTitle = escapeHtmlAttr(industry.title);
  const safePageKey = escapeHtmlAttr(industry.pageKey);
  const pathname = `/industries/${industry.slug}/`;
  const pageTitle = `${industry.title} Electroplating | El Etehadia`;
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${safeTitle} Electroplating | El Etehadia</title>
    <meta name="description" content="${meta}" />
    ${renderSeoHead({ pathname, title: pageTitle, description: truncate(industry.intro), image: industry.heroImage?.[0] })}
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;family=Noto+Kufi+Arabic:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet" />
  </head>
  <body data-page="${safePageKey}">
    <div id="app"></div>
    <script type="module" src="/src/pages.js"></script>
  </body>
</html>
`;
}

for (const industry of industriesMod.industries) {
  const dir = path.join(root, "industries", industry.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), stubHtml(industry), "utf8");
}

console.log("Wrote industry pages:", industriesMod.industries.map((x) => x.slug).join(", "));
