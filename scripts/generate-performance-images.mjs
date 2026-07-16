#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
const optimizedDir = path.join(publicDir, "assets", "optimized");

await fs.mkdir(optimizedDir, { recursive: true });

const transitionSource = path.join(publicDir, "images", "transition-logo.png");
for (const size of [192, 384]) {
  await sharp(transitionSource)
    .resize(size, size)
    .webp({ quality: 80, effort: 6, alphaQuality: 90 })
    .toFile(path.join(publicDir, "images", `transition-logo-${size}.webp`));
}

const productionSource = path.join(root, "assets", "maxresdefault.jpg");
for (const width of [384, 512, 768, 1080]) {
  await sharp(productionSource)
    .trim({ background: "#000000", threshold: 10 })
    .resize({ width, height: Math.round(width * 9 / 16), fit: "cover", position: "centre" })
    .avif({ quality: 50, effort: 6, chromaSubsampling: "4:2:0" })
    .toFile(path.join(optimizedDir, `electroplating-production-line-${width}.avif`));
}

const cardImages = [
  ["why-us-chemistry-supply-tanker.jpg", "chemistry-supply-tanker"],
  ["why-us-technical-support-lab.jpg", "technical-support-lab"],
];

for (const [sourceName, outputStem] of cardImages) {
  for (const width of [384, 768]) {
    await sharp(path.join(root, "assets", sourceName))
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 76, effort: 6, smartSubsample: true })
      .toFile(path.join(optimizedDir, `${outputStem}-${width}.webp`));
  }
}

console.log("Generated responsive modern image assets for the transition logo, production line, and Why Us cards.");
