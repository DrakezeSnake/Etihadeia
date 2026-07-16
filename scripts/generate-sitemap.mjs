#!/usr/bin/env node
/**
 * Writes public/robots.txt and public/sitemap.xml from canonical routes.
 * Override base URL: SITE_URL=https://example.com node scripts/generate-sitemap.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { SITE_URL as DEFAULT_SITE_URL, DEFAULT_SOCIAL_IMAGE, staticPageSeo } from "./seo-head.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");

const SITE_URL = (process.env.SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, "");

/** @type {typeof import("../src/data/solutions.js")} */
const solutionsMod = await import(pathToFileURL(path.join(root, "src/data/solutions.js")).href);
/** @type {typeof import("../src/data/productDocuments.js")} */
const productDocumentsMod = await import(pathToFileURL(path.join(root, "src/data/productDocuments.js")).href);
/** @type {typeof import("../src/data/industries.js")} */
const industriesMod = await import(pathToFileURL(path.join(root, "src/data/industries.js")).href);

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
    .map((s) => ({ pathname: `/solutions/${s.slug}/`, image: s.image }));
  const documentPaths = productDocumentsMod.productDocuments.map((doc) => ({
    pathname: `/solutions/documents/${doc.slug}/`,
    image: doc.heroImage,
  }));
  const industryPaths = industriesMod.industries.map((industry) => ({
    pathname: `/industries/${industry.slug}/`,
    image: industry.heroImage?.[0],
  }));
  const staticPaths = STATIC_PATHS.map((pathname) => ({
    pathname,
    image: staticPageSeo[pathname]?.image || DEFAULT_SOCIAL_IMAGE,
  }));
  return [...staticPaths, ...solutionPaths, ...documentPaths, ...industryPaths];
}

function buildSitemapXml(urls, lastmod) {
  const entries = urls
    .map(({ pathname, image }) => {
      const loc = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
      const imageLoc = image ? encodeURI(`${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`) : null;
      return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>${
        imageLoc ? `\n    <image:image>\n      <image:loc>${escapeXml(imageLoc)}</image:loc>\n    </image:image>` : ""
      }\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${entries}\n</urlset>\n`;
}

function buildRobotsTxt() {
  return `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
}

const lastmod = new Date().toISOString().slice(0, 10);
const urls = buildUrlList();

fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, "robots.txt"), buildRobotsTxt(), "utf8");
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), buildSitemapXml(urls, lastmod), "utf8");

console.log(`Wrote ${urls.length} URLs with representative images to public/sitemap.xml (${SITE_URL})`);
console.log("Wrote public/robots.txt");
