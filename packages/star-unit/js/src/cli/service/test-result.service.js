const TestsStore = require("../../core/store/tests.store");

class TestResultService {
  result() {
    let passed = 0;
    for (const { id, name, expects } of Object.values(TestsStore.tests)) {
      try {
        if (expects.some((e) => e === false)) {
          console.error(`✗ ${name}`);
          continue;
        }
        console.log(`✓ ${name} ${expects}`);
        passed++;
      } catch (err) {
        console.error(`✗ ${name}`);
        console.error(' ', err.message);
      }
    }
    console.log(`\n${passed}/${Object.values(TestsStore.tests).length} tests passed.`);
  }
}

module.exports = { TestResultService };
