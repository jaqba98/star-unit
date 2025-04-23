// const fs = require('fs');
// const path = require('path');
// const TestStore = require("./store/tests.store");
//
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
