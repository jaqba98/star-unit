type TestFn = () => void | Promise<void>;

const tests: { name: string; fn: TestFn }[] = [];

export function test(name: string, fn: TestFn) {
    tests.push({ name, fn });
}

export function expect(received: any) {
    return {
        toBe(expected: any) {
            if (received !== expected) {
                throw new Error(`Expected ${received} to be ${expected}`);
            }
        },
    };
}

export async function run() {
    let passed = 0;

    for (const { name, fn } of tests) {
        try {
            await fn();
            console.log(`✓ ${name}`);
            passed++;
        } catch (err) {
            console.error(`✗ ${name}`);
            console.error(' ', (err as Error).message);
        }
    }

    console.log(`\n${passed}/${tests.length} tests passed.`);
}
