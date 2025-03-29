import { run } from './minitest';
import * as fs from 'fs';
import * as path from 'path';

const testDir = __dirname;

function loadTestFiles() {
    const files = fs.readdirSync(testDir);

    for (const file of files) {
        if (file.endsWith('.test.js')) {
            const fullPath = path.join(testDir, file);
            require(fullPath);
        }
    }
}

loadTestFiles();
run();
