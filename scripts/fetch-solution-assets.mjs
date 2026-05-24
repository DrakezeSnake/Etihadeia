#!/usr/bin/env node
/**
 * Downloads solution card images/icons into `public/assets/solutions/remote/` for offline use.
 * Run: node scripts/fetch-solution-assets.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const destDir = path.join(root, "public", "assets", "solutions", "remote");

const { solutions } = await import(pathToFileURL(path.join(root, "src/data/solutions.js")).href);

function filenameFromUrl(u, fallback) {
  try {
    const { pathname } = new URL(u);
    const base = path.basename(pathname.split("?")[0]) || fallback;
    return base.replace(/[^a-zA-Z0-9._-]/g, "_");
  } catch {
    return fallback;
  }
}

async function download(url, outPath) {
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(outPath, buf);
}

fs.mkdirSync(destDir, { recursive: true });

const report = {
  createdAt: new Date().toISOString(),
  destination: "public/assets/solutions/remote",
  assets: [],
};

for (const s of solutions) {
  const imgs = [
    { url: s.image, slug: `${s.slug}-hero` },
    { url: s.icon, slug: `${s.slug}-icon` },
  ];
  for (const { url, slug } of imgs) {
    const name = `${slug}-${filenameFromUrl(url, slug)}`;
    const out = path.join(destDir, name);
    process.stdout.write(`Fetching ${slug}...\n`);
    try {
      await download(url, out);
      report.assets.push({
        slug,
        sourceUrl: url,
        localPath: `public/assets/solutions/remote/${name}`,
        status: "downloaded",
      });
    } catch (e) {
      report.assets.push({
        slug,
        sourceUrl: url,
        localPath: `public/assets/solutions/remote/${name}`,
        status: "failed",
        error: e.message,
      });
      process.stderr.write(`  SKIP: ${e.message}\n`);
    }
  }
}

fs.writeFileSync(path.join(destDir, "fetch-report.json"), `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log("Done. Assets in public/assets/solutions/remote/");
console.log("Wrote fetch report: public/assets/solutions/remote/fetch-report.json");
