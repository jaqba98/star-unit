const { run } = require('./minitest');
const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();

function loadTestFilesFrom(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            loadTestFilesFrom(fullPath);
        } else if (entry.isFile() && fullPath.endsWith('.test.js')) {
            require(fullPath);
        }
    }
}

loadTestFilesFrom(rootDir);
run();
