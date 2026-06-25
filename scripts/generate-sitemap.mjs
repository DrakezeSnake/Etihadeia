#!/usr/bin/env node
/**
 * Writes public/robots.txt and public/sitemap.xml from canonical routes.
 * Override base URL: SITE_URL=https://example.com node scripts/generate-sitemap.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");

const SITE_URL = (process.env.SITE_URL || "https://etihadeia.vercel.app").replace(/\/$/, "");

/** @type {typeof import("../src/data/solutions.js")} */
const solutionsMod = await import(pathToFileURL(path.join(root, "src/data/solutions.js")).href);
/** @type {typeof import("../src/data/productDocuments.js")} */
const productDocumentsMod = await import(pathToFileURL(path.join(root, "src/data/productDocuments.js")).href);

const STATIC_PATHS = [
  "/",
  "/about/",
  "/services/",
  "/products/",
  "/industries/",
  "/projects/",
  "/partners/",
  "/brochure/",
  "/news/",
  "/contact/",
  "/solutions/",
];

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildUrlList() {
  const solutionPaths = solutionsMod
    .getDetailSolutions()
    .map((s) => `/solutions/${s.slug}/`);
  const documentPaths = productDocumentsMod.productDocuments.map((doc) => `/solutions/documents/${doc.slug}/`);
  return [...STATIC_PATHS, ...solutionPaths, ...documentPaths];
}

function buildSitemapXml(urls, lastmod) {
  const entries = urls
    .map((pathname) => {
      const loc = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
      return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
}

function buildRobotsTxt() {
  return `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
}

const lastmod = new Date().toISOString().slice(0, 10);
const urls = buildUrlList();

fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, "robots.txt"), buildRobotsTxt(), "utf8");
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), buildSitemapXml(urls, lastmod), "utf8");

console.log(`Wrote ${urls.length} URLs to public/sitemap.xml (${SITE_URL})`);
console.log("Wrote public/robots.txt");
