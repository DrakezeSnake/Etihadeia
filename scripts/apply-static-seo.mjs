#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { renderSeoHead, staticPageSeo } from "./seo-head.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

function htmlPathForRoute(pathname) {
  return pathname === "/" ? path.join(root, "index.html") : path.join(root, pathname.slice(1), "index.html");
}

function upsertHead(html, pathname, seo) {
  const title = seo.title;
  const description = seo.description;
  const seoBlock = renderSeoHead({ pathname, ...seo });
  let next = html
    .replace(/\s*<!-- seo:start -->[\s\S]*?<!-- seo:end -->\s*/g, "\n")
    .replace(/\s*<link\s+rel=["'](?:icon|shortcut icon|apple-touch-icon|apple-touch-icon-precomposed)["'][^>]*\/?>\s*/gi, "\n")
    .replace(/\s*<link\s+rel=["']manifest["'][^>]*\/?>\s*/gi, "\n")
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${title.replace(/&/g, "&amp;")}</title>`)
    .replace(
      /<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta name="description" content="${description.replace(/&/g, "&amp;").replace(/"/g, "&quot;")}" />`,
    )
    .replace(/\s*<meta\s+name=["']keywords["'][^>]*>\s*/gi, "\n");

  next = next.replace(/\s*<\/head>/i, `\n    ${seoBlock}\n  </head>`);
  return next;
}

function removeRemoteFontLinks(html) {
  return html.replace(/\s*<link\b[^>]*(?:fonts\.googleapis\.com|fonts\.gstatic\.com)[^>]*\/?>\s*/gi, "\n");
}

function replaceBrokenHeroVideo(html) {
  return html.replace(
    /<video\b[^>]*class=["']hero__video["'][\s\S]*?<\/video>/i,
    `<img
          class="hero__video"
          src="/images/hero-electroplating-line.jpg"
          alt="Automated electroplating production line for industrial surface finishing"
          width="1600"
          height="900"
          fetchpriority="high"
          decoding="async"
        />`,
  );
}

for (const [pathname, seo] of Object.entries(staticPageSeo)) {
  const filename = htmlPathForRoute(pathname);
  if (!fs.existsSync(filename)) throw new Error(`Missing static page for ${pathname}: ${filename}`);
  const current = fs.readFileSync(filename, "utf8");
  fs.writeFileSync(filename, replaceBrokenHeroVideo(removeRemoteFontLinks(upsertHead(current, pathname, seo))), "utf8");
}

function removeRemoteFontsFromGeneratedPages(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (["dist", "node_modules", ".git"].includes(entry.name)) continue;
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) removeRemoteFontsFromGeneratedPages(filename);
    else if (entry.name === "index.html") {
      const html = fs.readFileSync(filename, "utf8");
      const cleaned = removeRemoteFontLinks(html);
      if (cleaned !== html) fs.writeFileSync(filename, cleaned, "utf8");
    }
  }
}

removeRemoteFontsFromGeneratedPages(root);

console.log(`Applied SEO metadata to ${Object.keys(staticPageSeo).length} static pages.`);
