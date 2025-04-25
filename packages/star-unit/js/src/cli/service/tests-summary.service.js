const { TestsStore } = require("../../store/tests.store");

class TestsSummaryService {
  getSummary() {
    let passed = 0;
    const tests = Object.values(TestsStore.tests);
    for (const { description, success } of tests) {
      if (success) {
        console.log(`✓ ${description}`);
        passed++;
        continue;
      }
      console.error(`✗ ${description}`);
    }
    console.log(`\n${passed}/${tests.length} tests passed.`);
  }
}

module.exports = { TestsSummaryService };
