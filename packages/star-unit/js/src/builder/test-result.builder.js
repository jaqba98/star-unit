const { DescribesStore } = require("../store/describes.store");
const { TestsStore } = require("../store/tests.store");
const { ExpectsStore } = require("../store/expects.store");

class TestResultBuilder {
  build() {
    return this.#buildDescribes();
  }

  #buildDescribes() {
    return Object.values(DescribesStore.get()).map((describe) => ({
      ...describe,
      tests: this.#buildTests(describe.id),
    }));
  }

  #buildTests(describeId) {
    return Object.values(TestsStore.get())
      .filter((test) => test.describeId === describeId)
      .map((test) => ({ ...test, expects: this.#buildExpects(test.id) }));
  }

  #buildExpects(testId) {
    return Object.values(ExpectsStore.expects).filter(
      (expect) => expect.testId === testId,
    );
  }
}

module.exports = { TestResultBuilder };
