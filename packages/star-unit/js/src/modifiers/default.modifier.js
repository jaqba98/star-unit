const { ExpectStore } = require("../store/expect.store");
const { TestStore } = require("../store/test.store");
const { ToBeMatcher } = require("../matchers/to-be.matcher");
const { ToThrowMatcher } = require("../matchers/to-throw.matcher");
const { TestsStore } = require("../store/tests.store");

class DefaultModifier {
  #toBeMatcher;
  #toThrowMatcher;

  constructor() {
    this.#toBeMatcher = new ToBeMatcher();
    this.#toThrowMatcher = new ToThrowMatcher();
  }

  toBe(value) {
    ExpectStore.value = value;
    const success = this.#toBeMatcher.run(ExpectStore.callback, ExpectStore.value);
    if (success) return;
    TestsStore.tests[TestStore.id].success = false;
  }

  toThrow(value) {
    ExpectStore.value = value;
    const success = this.#toThrowMatcher.run(ExpectStore.callback, ExpectStore.value);
    if (success) return;
    TestsStore.tests[TestStore.id].success = false;
  }
}

module.exports = { DefaultModifier };
