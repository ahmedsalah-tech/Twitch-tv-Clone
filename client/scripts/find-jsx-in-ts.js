// scripts/find-jsx-in-ts.js
import fs from "fs";
import path from "path";

const SRC_DIR = path.resolve("src");

/**
 * Recursively get all files with the given extension
 */
function getAllFiles(dir, ext = ".ts") {
  const entries = fs.readdirSync(dir);
  let results = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      results = results.concat(getAllFiles(fullPath, ext));
    } else if (entry.endsWith(ext)) {
      results.push(fullPath);
    }
  }

  return results;
}

/**
 * Improved JSX detector (avoids generics false positives)
 */
function containsJSX(content) {
  const jsxTag = /<\s*[A-Z][A-Za-z0-9]*(\s|>|\/)/; // JSX components like <Header>
  const fragment = /<>\s*<\/>/; // <> fragments
  const jsxReturn = /return\s*\(.*<.*>.*\)/s; // return (<div>...</div>)
  return jsxTag.test(content) || fragment.test(content) || jsxReturn.test(content);
}

/**
 * Main logic
 */
function main() {
  const tsFiles = getAllFiles(SRC_DIR, ".ts").filter(f => !f.endsWith(".d.ts"));
  const jsxFiles = [];

  for (const file of tsFiles) {
    const content = fs.readFileSync(file, "utf-8");
    if (containsJSX(content)) {
      jsxFiles.push(file);
    }
  }

  console.log(`\n⚠️ Found ${jsxFiles.length} .ts files that contain JSX:\n`);
  for (const file of jsxFiles) {
    console.log("  →", file);
  }

  if (jsxFiles.length === 0) {
    console.log("✅ No .ts files contain JSX — you're all good!");
  } else {
    console.log("\n💡 You should rename the above files from .ts → .tsx\n");
  }
}

main();
