#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
let htmlCount = 0;
let stylesheetCount = 0;

function inlineStylesheets(html) {
  return html.replace(/<link\b[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["'][^>]*>/gi, (link, href) => {
    if (!href.startsWith("/assets/") || !href.endsWith(".css")) return link;
    const cssFile = path.join(dist, decodeURIComponent(href).replace(/^\//, ""));
    if (!fs.existsSync(cssFile)) return link;

    const css = fs.readFileSync(cssFile, "utf8");
    const interFont = css.match(/url\(([^)]*inter-latin-wght-normal[^)]*\.woff2)\)/i)?.[1]?.replace(/["']/g, "");
    const preload = interFont
      ? `<link rel="preload" href="${interFont}" as="font" type="font/woff2" crossorigin />\n    `
      : "";
    stylesheetCount += 1;
    return `${preload}<style data-critical-css>${css.replace(/<\/style/gi, "<\\/style")}</style>`;
  });
}

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(filename);
    else if (entry.name === "index.html") {
      const html = fs.readFileSync(filename, "utf8");
      const inlined = inlineStylesheets(html);
      if (inlined !== html) {
        fs.writeFileSync(filename, inlined, "utf8");
        htmlCount += 1;
      }
    }
  }
}

walk(dist);
console.log(`Inlined ${stylesheetCount} critical stylesheet references across ${htmlCount} built pages.`);
