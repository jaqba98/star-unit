const TestsStore = require("../../core/store/tests.store");

class TestResultService {
  result() {
    console.log(TestsStore.tests);
    // let passed = 0;
    // for (const { id, name, fn } of TestsStore.tests) {
    //   fn(id)
    //   console.log(id, name, fn);
    //   // try {
    //   //   const t = fn();
    //   //   console.log(`✓ ${name}`);
    //   //   passed++;
    //   // } catch (err) {
    //   //   console.error(`✗ ${name}`);
    //   //   console.error(' ', err.message);
    //   // }
    // }
    // console.log(`\n${passed}/${TestsStore.tests.length} tests passed.`);
  }
}

module.exports = { TestResultService };
