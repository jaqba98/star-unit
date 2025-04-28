const { TestResultBuilder } = require("../builder/test-result.builder");
const { LogUtil } = require("../util/log.util");

class TestResultService {
  constructor() {
    this.testResultBuilder = new TestResultBuilder();
    this.logUtil = new LogUtil();
  }

  getTestResult() {
    const testResult = this.testResultBuilder.build();
    this.#writeDescribes(testResult)
  }

  #writeDescribes(describes) {
    describes.forEach((describe) => {
      if (describe.success) this.#writeDescribeSuccess(describe);
      else this.#writeDescribeError(describe);
      this.#writeTests(describe.tests);
    })
  }

  #writeDescribeSuccess(describe) {
    this.logUtil.success('✓ ' + describe.description);
  }

  #writeDescribeError(describe) {
    this.logUtil.error('✗ ' + describe.description);
  }

  #writeTests(tests) {
    tests.forEach((test) => {
      if (test.success) this.#writeTestSuccess(test);
      else this.#writeTestError(test);
      this.#writeExpects(test.expects);
    })
  }

  #writeTestSuccess(test) {
    this.logUtil.success('\t' + '✓ ' + test.description);
  }

  #writeTestError(test) {
    this.logUtil.error('\t' + '✗ ' + test.description);
  }

  #writeExpects(expects) {
    expects.forEach((expect) => {
      if (expect.success) this.#writeExpectSuccess(expect);
      else this.#writeExpectError(expect);
    })
  }

  #writeExpectSuccess(expect) {
    this.logUtil.success('\t\t' + '✓ ' + expect.description);
  }

  #writeExpectError(expect) {
    this.logUtil.error('\t\t' + '✗ ' + expect.description);
    this.logUtil.error('\t\t' + '  Expect: ' + expect.expect);
    this.logUtil.error('\t\t' + '  Received: ' + expect.received);
  }
}

module.exports = { TestResultService };
