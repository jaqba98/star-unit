// const fs = require('fs');
// const path = require('path');
// const TestStore = require("./store/tests.store");
//
// const rootDir = process.cwd();
//
// function loadTestFilesFrom(dir) {
//     const entries = fs.readdirSync(dir, { withFileTypes: true });
//
//     for (const entry of entries) {
//         const fullPath = path.join(dir, entry.name);
//
//         if (entry.isDirectory()) {
//             loadTestFilesFrom(fullPath);
//         } else if (entry.isFile() && fullPath.endsWith('.test.js')) {
//             require(fullPath);
//         }
//     }
// }
//
// function main() {
//     let passed = 0;
//
//     for (const { name, fn } of TestStore.tests) {
//         try {
//             fn();
//             console.log(`✓ ${name}`);
//             passed++;
//         } catch (err) {
//             console.error(`✗ ${name}`);
//             console.error(' ', err.message);
//         }
//     }
//
//     console.log(`\n${passed}/${TestStore.tests.length} tests passed.`);
// }
//
// loadTestFilesFrom(rootDir);
//
// main();
