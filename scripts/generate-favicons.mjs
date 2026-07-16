#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
const source = path.join(publicDir, "favicon.svg");

const outputs = [
  ["favicon.png", 96],
  ["apple-touch-icon.png", 180],
  ["favicon-192.png", 192],
  ["favicon-512.png", 512],
];

await Promise.all(
  outputs.map(([filename, size]) =>
    sharp(source, { density: 384 })
      .resize(size, size, { fit: "fill" })
      .png({ compressionLevel: 9, palette: true })
      .toFile(path.join(publicDir, filename)),
  ),
);

const manifest = {
  name: "El Etehadia",
  short_name: "El Etehadia",
  icons: [
    { src: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    { src: "/favicon-512.png", sizes: "512x512", type: "image/png" },
  ],
  theme_color: "#2a292b",
  background_color: "#0e1012",
  display: "standalone",
  start_url: "/",
};

await fs.writeFile(path.join(publicDir, "site.webmanifest"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
console.log(`Generated ${outputs.length} raster favicons and site.webmanifest from public/favicon.svg.`);
