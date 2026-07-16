#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(root, "public", "assets", "optimized");

const jobs = [
  ["ion-plated-fasteners-nara.jpg", "zinc-plated-industrial-fasteners.webp"],
  ["rafele1_hover.75c662c8cadec7f966e8.png", "aerospace-defense-surface-finishing.webp"],
  ["Pyramids_of_the_Giza_Necropolis.jpg", "el-etehadia-egypt-production.webp"],
  ["about-spotlight-mission.jpeg", "el-etehadia-industrial-supply.webp"],
  ["Stainless-Bracket-BW-02.jpg", "light-metal-surface-finishing.webp"],
  ["Stainless-Steel-Water-Strainer-Filter-Nozzle.png", "surface-treatment-filter-nozzle.webp"],
];

fs.mkdirSync(outputDir, { recursive: true });

for (const [inputName, outputName] of jobs) {
  const input = path.join(root, "assets", inputName);
  const output = path.join(outputDir, outputName);
  await sharp(input)
    .rotate()
    .resize({ width: 1600, height: 1200, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82, effort: 6, smartSubsample: true })
    .toFile(output);

  const before = fs.statSync(input).size;
  const after = fs.statSync(output).size;
  console.log(`${outputName}: ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB`);
}
