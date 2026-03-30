// scripts/find-non-jsx-tsx.js
import fs from 'fs';
import path from 'path';

// ✅ Adjust if your source directory is different
const SRC_DIR = path.resolve('src');

/**
 * Recursively collect all files with the given extension
 */
function getAllFiles(dir, ext = '.tsx') {
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
 * Detects JSX content while avoiding TypeScript generics
 */
function containsJSX(content) {
  const jsxTag = /<\s*[A-Z][A-Za-z0-9]*(\s|>|\/)/; // <Button>, <Card>
  const fragment = /<>\s*<\/>/; // <>
  const jsxReturn = /return\s*\(.*<.*>.*\)/s; // return (<div>...</div>)
  return (
    jsxTag.test(content) || fragment.test(content) || jsxReturn.test(content)
  );
}

/**
 * Main logic
 */
function main() {
  const tsxFiles = getAllFiles(SRC_DIR, '.tsx');
  const nonJSXFiles = [];

  for (const file of tsxFiles) {
    const content = fs.readFileSync(file, 'utf-8');
    if (!containsJSX(content)) {
      nonJSXFiles.push(file);
    }
  }

  console.log(`\n📄 Found ${nonJSXFiles.length} .tsx files without JSX:\n`);
  for (const file of nonJSXFiles) {
    console.log('  →', file);
  }

  if (nonJSXFiles.length === 0) {
    console.log('✅ All .tsx files contain JSX — nothing to rename!');
  } else {
    console.log('\n💡 You can safely rename the above files to .ts\n');
  }
}

main();
