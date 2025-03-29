const TestStore = require("./store/tests.store");

async function run() {
    let passed = 0;

    for (const { name, fn } of TestStore.tests) {
        try {
            await fn();
            console.log(`✓ ${name}`);
            passed++;
        } catch (err) {
            console.error(`✗ ${name}`);
            console.error(' ', err.message);
        }
    }

    console.log(`\n${passed}/${TestStore.tests.length} tests passed.`);
}

module.exports = { run };
