const TestsStore = require("../../core/store/tests.store");

class TestResultService {
  result() {
    let passed = 0;
    for (const { name, fn } of TestsStore.tests) {
      try {
        fn();
        console.log(`✓ ${name}`);
        passed++;
      } catch (err) {
        console.error(`✗ ${name}`);
        console.error(' ', err.message);
      }
    }
    console.log(`\n${passed}/${TestsStore.tests.length} tests passed.`);
  }
}

module.exports = { TestResultService };
