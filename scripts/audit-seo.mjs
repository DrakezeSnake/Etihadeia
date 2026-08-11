#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pathToFileURL } from "node:url";
import { SITE_URL, staticPageSeo } from "./seo-head.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const failures = [];
const warnings = [];

const solutions = await import(pathToFileURL(path.join(root, "src/data/solutions.js")).href);
const documents = await import(pathToFileURL(path.join(root, "src/data/productDocuments.js")).href);
const industries = await import(pathToFileURL(path.join(root, "src/data/industries.js")).href);
const blog = await import(pathToFileURL(path.join(root, "src/data/blogArticles.js")).href);

const blogRoutes = [
  "/ar/news/",
  ...blog.blogArticles.flatMap((article) => [
    `/news/${article.slug}/`,
    `/ar/news/${article.slug}/`,
  ]),
];
const blogRouteInfo = new Map([
  ["/news/", { locale: "en", type: "index" }],
  ["/ar/news/", { locale: "ar", type: "index" }],
  ...blog.blogArticles.flatMap((article) => [
    [`/news/${article.slug}/`, { locale: "en", type: "article", article }],
    [`/ar/news/${article.slug}/`, { locale: "ar", type: "article", article }],
  ]),
]);

const routes = [
  ...Object.keys(staticPageSeo),
  ...solutions.getDetailSolutions().map((item) => `/solutions/${item.slug}/`),
  ...documents.productDocuments.map((item) => `/solutions/documents/${item.slug}/`),
  ...industries.industries.map((item) => `/industries/${item.slug}/`),
  ...blogRoutes,
];

function count(html, pattern) {
  return (html.match(pattern) || []).length;
}

function capture(html, pattern) {
  return html.match(pattern)?.[1]?.trim() || "";
}

function htmlFileForRoute(route) {
  return route === "/" ? path.join(dist, "index.html") : path.join(dist, route.slice(1), "index.html");
}

for (const route of routes) {
  const filename = htmlFileForRoute(route);
  if (!fs.existsSync(filename)) {
    failures.push(`${route}: missing built HTML`);
    continue;
  }

  const html = fs.readFileSync(filename, "utf8");
  const title = capture(html, /<title>([\s\S]*?)<\/title>/i);
  const description = capture(html, /<meta\s+name="description"\s+content="([^"]*)"/i);
  const canonical = capture(html, /<link\s+rel="canonical"\s+href="([^"]*)"/i);
  const expectedCanonical = `${SITE_URL}${route}`;

  if (!title) failures.push(`${route}: missing title`);
  if (!description) failures.push(`${route}: missing meta description`);
  if (title.length > 70) warnings.push(`${route}: title is ${title.length} characters`);
  if (description.length < 70 || description.length > 165) {
    warnings.push(`${route}: description is ${description.length} characters`);
  }
  if (canonical !== expectedCanonical) failures.push(`${route}: canonical is ${canonical || "missing"}`);
  if (count(html, /<link\s+rel="canonical"/gi) !== 1) failures.push(`${route}: canonical count is not 1`);
  if (!/<link\s+rel="icon"\s+type="image\/png"\s+sizes="96x96"\s+href="\/favicon\.png"/i.test(html)) {
    failures.push(`${route}: missing primary 96x96 PNG favicon`);
  }
  if (!/<link\s+rel="apple-touch-icon"\s+sizes="180x180"\s+href="\/apple-touch-icon\.png"/i.test(html)) {
    failures.push(`${route}: missing Apple touch icon`);
  }
  if (!/<meta\s+name="robots"\s+content="index, follow, max-image-preview:large/i.test(html)) {
    failures.push(`${route}: missing indexable robots directive`);
  }
  for (const tag of ["og:title", "og:description", "og:url", "og:image", "twitter:card", "twitter:title", "twitter:description", "twitter:image"]) {
    const attr = tag.startsWith("og:") ? "property" : "name";
    if (!new RegExp(`<meta\\s+${attr}="${tag.replace(":", "\\:")}"`, "i").test(html)) {
      failures.push(`${route}: missing ${tag}`);
    }
  }

  const socialImage = capture(html, /<meta\s+property="og:image"\s+content="([^"]*)"/i);
  if (/\s/.test(socialImage)) failures.push(`${route}: social image URL contains unencoded whitespace`);
  if (socialImage.startsWith(SITE_URL)) {
    const localImagePath = decodeURIComponent(new URL(socialImage).pathname).replace(/^\//, "");
    if (!fs.existsSync(path.join(dist, localImagePath))) failures.push(`${route}: social image does not exist (${socialImage})`);
  }

  const jsonLdMatches = [...html.matchAll(/<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  if (!jsonLdMatches.length) failures.push(`${route}: missing JSON-LD`);
  for (const match of jsonLdMatches) {
    try {
      JSON.parse(match[1]);
    } catch (error) {
      failures.push(`${route}: invalid JSON-LD (${error.message})`);
    }
  }

  for (const linkMatch of html.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/gi)) {
    const linkText = linkMatch[1].replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
    if (["learn more", "read more", "click here", "view more", "more details"].includes(linkText)) {
      failures.push(`${route}: non-descriptive link text \"${linkText}\"`);
    }
  }
}

const sitemapPath = path.join(dist, "sitemap.xml");
const robotsPath = path.join(dist, "robots.txt");
for (const faviconFile of ["favicon.png", "favicon.svg", "apple-touch-icon.png", "favicon-192.png", "favicon-512.png", "site.webmanifest"]) {
  if (!fs.existsSync(path.join(dist, faviconFile))) failures.push(`Missing dist/${faviconFile}`);
}
if (!fs.existsSync(sitemapPath)) failures.push("Missing dist/sitemap.xml");
if (!fs.existsSync(robotsPath)) failures.push("Missing dist/robots.txt");

if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, "utf8");
  const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  for (const url of sitemapUrls) {
    if (/\s/.test(url)) failures.push(`Sitemap URL contains unencoded whitespace: ${url}`);
  }
  const pageUrls = sitemapUrls.filter((url) => !url.includes("/assets/") && !url.includes("/images/"));
  if (pageUrls.length !== routes.length) failures.push(`Sitemap contains ${pageUrls.length} page URLs; expected ${routes.length}`);
  for (const route of routes) {
    if (!pageUrls.includes(`${SITE_URL}${route}`)) failures.push(`Sitemap missing ${route}`);
  }
  if (sitemap.includes("etihadeia.vercel.app") || sitemap.includes("https://etehadia.com")) {
    failures.push("Sitemap contains an obsolete hostname");
  }
}

if (fs.existsSync(robotsPath)) {
  const robots = fs.readFileSync(robotsPath, "utf8");
  if (!robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`)) failures.push("robots.txt points to the wrong sitemap");
}

const sourceFiles = [];
function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (["node_modules", "dist", ".git", ".playwright-mcp", "New 3d website"].includes(entry.name)) continue;
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(?:html|js)$/i.test(entry.name)) sourceFiles.push(full);
  }
}
walk(root);

const corePageLinks = ["/", "/about/", "/services/", "/products/", "/solutions/", "/projects/", "/industries/", "/partners/", "/brochure/", "/news/", "/contact/"];
for (const navigationSource of ["index.html", "src/pages.js", "src/solutions/main.js"]) {
  const source = fs.readFileSync(path.join(root, navigationSource), "utf8");
  for (const href of corePageLinks) {
    if (!source.includes(`href="${href}"`)) failures.push(`${navigationSource}: missing site-wide core link ${href}`);
  }
}

for (const filename of sourceFiles) {
  const source = fs.readFileSync(filename, "utf8");
  for (const match of source.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt\s*=/.test(match[0])) {
      failures.push(`${path.relative(root, filename)}: image without alt attribute`);
    }
  }
  if (/https:\/\/etihadeia\.vercel\.app|https:\/\/etehadia\.com/i.test(source)) {
    failures.push(`${path.relative(root, filename)}: obsolete website hostname`);
  }
}

const uniqueTitles = new Map();
const uniqueDescriptions = new Map();
const internalLinks = new Set();
for (const route of routes) {
  const filename = htmlFileForRoute(route);
  if (!fs.existsSync(filename)) continue;
  const html = fs.readFileSync(filename, "utf8");
  const title = capture(html, /<title>([\s\S]*?)<\/title>/i);
  const description = capture(html, /<meta\s+name="description"\s+content="([^"]*)"/i);
  if (uniqueTitles.has(title)) failures.push(`${route}: duplicate title also used by ${uniqueTitles.get(title)}`);
  else uniqueTitles.set(title, route);
  if (uniqueDescriptions.has(description)) failures.push(`${route}: duplicate description also used by ${uniqueDescriptions.get(description)}`);
  else uniqueDescriptions.set(description, route);

  const blogInfo = blogRouteInfo.get(route);
  if (blogInfo) {
    const expectedLocale = blogInfo.locale;
    if (!new RegExp(`<html\\s+lang="${expectedLocale}"\\s+dir="${expectedLocale === "ar" ? "rtl" : "ltr"}"`, "i").test(html)) {
      failures.push(`${route}: incorrect lang or dir`);
    }
    if (count(html, /<h1\b/gi) !== 1) failures.push(`${route}: expected exactly one H1`);
    const alternateRoute = expectedLocale === "ar" ? route.replace(/^\/ar/, "") : `/ar${route}`;
    for (const [hreflang, expectedRoute] of [[expectedLocale, route], [expectedLocale === "ar" ? "en" : "ar", alternateRoute], ["x-default", expectedLocale === "ar" ? alternateRoute : route]]) {
      if (!new RegExp(`<link\\s+rel="alternate"\\s+hreflang="${hreflang}"\\s+href="${SITE_URL.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}${expectedRoute}"`, "i").test(html)) {
        failures.push(`${route}: missing ${hreflang} hreflang alternate`);
      }
    }
    if (blogInfo.type === "article") {
      if (!html.includes('"@type":"BlogPosting"')) failures.push(`${route}: missing BlogPosting schema`);
      const text = (html.match(/<article[\s\S]*?<\/article>/i)?.[0] || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
      const wordCount = text ? text.split(" ").length : 0;
      if (wordCount < 900 || wordCount > 1400) failures.push(`${route}: article word count ${wordCount} is outside 900–1,400`);
    } else if (!html.includes('"@type":"Blog"') || !html.includes('"@type":"ItemList"')) {
      failures.push(`${route}: missing Blog or ItemList schema`);
    }
  }

  for (const match of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"[^>]*>/gi)) {
    const href = match[1];
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    internalLinks.add(`${route} -> ${href}`);
  }
}

for (const link of internalLinks) {
  const [, href] = link.split(" -> ");
  const pathname = new URL(href, SITE_URL).pathname;
  if (pathname.startsWith("/assets/") || pathname.startsWith("/images/")) {
    if (!fs.existsSync(path.join(dist, pathname.slice(1)))) failures.push(`Broken internal asset link: ${link}`);
    continue;
  }
  const normalized = pathname === "/" ? "/" : `${pathname.replace(/\/$/, "")}/`;
  if (!fs.existsSync(htmlFileForRoute(normalized))) failures.push(`Broken internal page link: ${link}`);
}

for (const solution of solutions.getDetailSolutions()) {
  if (!blog.getBlogArticleForSolution(solution.slug)) failures.push(`Solution ${solution.slug}: missing related blog article`);
}
const solutionRenderer = fs.readFileSync(path.join(root, "src/solutions/render.js"), "utf8");
if (!solutionRenderer.includes("renderRelatedInsight")) failures.push("Solution pages: missing related insight renderer");
const pageSource = fs.readFileSync(path.join(root, "src/pages.js"), "utf8");
for (const article of blog.blogArticles.filter((item) => item.kind === "macdermid")) {
  if (!pageSource.includes(`/news/${article.slug}/`)) failures.push(`Partners page: missing reciprocal MacDermid article link for ${article.slug}`);
}

console.log(`SEO audit checked ${routes.length} routes.`);
for (const warning of warnings) console.warn(`WARN: ${warning}`);
if (failures.length) {
  for (const failure of failures) console.error(`FAIL: ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`PASS: canonical metadata, descriptive internal links, complete core navigation, favicons, social tags, schema, sitemap, robots, unique snippets, and image alt coverage.`);
}
