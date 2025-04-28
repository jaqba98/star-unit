const { TestResultBuilder } = require("../builder/test-result.builder");

class TestResultService {
  constructor() {
    this.testResultBuilder = new TestResultBuilder();
  }

  getTestResult() {
    const testResult = this.testResultBuilder.build();
    console.log(JSON.stringify(testResult, null, 2));
  }

  getSummary() {
    // console.log(DescribesStore.describes);
    // console.log("");
    // this.#logDescribesService.log();
    // let passed = 0,
    //   all = 0;
    // const tests = Object.values(TestsStore.tests).reduce((acc, curr) => {
    //   if (!acc[curr.describe]) {
    //     acc[curr.describe] = [];
    //   }
    //   acc[curr.describe].push(curr);
    //   return acc;
    // }, {});
    // Object.entries(tests).forEach(([key, values]) => {
    //   console.log(`Describe: ${key}`);
    //   values.forEach(({ describe, description, success }) => {
    //     if (success) {
    //       console.log(`✓ ${describe} ${description}`);
    //       passed++;
    //     } else {
    //       console.error(`✗ ${describe} ${description}`);
    //     }
    //     all++;
    //   });
    //   console.log("");
    // });
    // console.log(`\n${passed}/${all} tests passed.`);
  }
}

module.exports = { TestResultService };
