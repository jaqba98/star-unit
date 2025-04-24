const { TestsStore } = require("../../core/store/tests.store");

class TestsSummaryService {
  getSummary() {
    let passed = 0;
    const tests = Object.values(TestsStore.tests);
    for (const { name, correct } of tests) {
      if (correct) {
        console.log(`✓ ${name}`);
        passed++;
        continue;
      }
      console.error(`✗ ${name}`);
    }
    console.log(`\n${passed}/${tests.length} tests passed.`);
  }
}

module.exports = { TestsSummaryService };
