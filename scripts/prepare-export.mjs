import { cpSync, existsSync, lstatSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const rootDir = process.cwd();
const outDir = resolve(rootDir, "out");

const staticEntries = [
  "assets",
  "baby_match",
  "wordspuzzle",
  ".well-known",
  ".nojekyll",
  "_config.yml",
  "CNAME",
];

if (!existsSync(outDir)) {
  throw new Error("Missing ./out directory. Run `next build` before copying static entries.");
}

for (const entry of staticEntries) {
  const sourcePath = resolve(rootDir, entry);
  const targetPath = resolve(outDir, entry);

  if (!existsSync(sourcePath)) {
    continue;
  }

  const isDirectory = lstatSync(sourcePath).isDirectory();

  if (isDirectory) {
    mkdirSync(targetPath, { recursive: true });
    cpSync(sourcePath, targetPath, { recursive: true, force: true });
  } else {
    cpSync(sourcePath, targetPath, { force: true });
  }

  console.log(`Copied ${entry}`);
}
