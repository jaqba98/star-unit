const tests = [];

function test(name, fn) {
    tests.push({ name, fn });
}

function expect(received) {
    return {
        toBe(expected) {
            if (received !== expected) {
                throw new Error(`Expected ${received} to be ${expected}`);
            }
        }
    };
}

async function run() {
    let passed = 0;

    for (const { name, fn } of tests) {
        try {
            await fn();
            console.log(`✓ ${name}`);
            passed++;
        } catch (err) {
            console.error(`✗ ${name}`);
            console.error(' ', err.message);
        }
    }

    console.log(`\n${passed}/${tests.length} tests passed.`);
}

module.exports = { test, expect, run };
