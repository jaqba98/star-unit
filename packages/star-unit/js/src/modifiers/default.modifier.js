const { ExpectStore } = require("../store/expect.store");
const { TestStore } = require("../store/test.store");
const { ToBeMatcher } = require("../matchers/to-be.matcher");
const { ToThrowMatcher } = require("../matchers/to-throw.matcher");
const { TestsStore } = require("../store/tests.store");
const { ToEqualMatcher } = require("../matchers/to-equal.matcher");

class DefaultModifier {
  #toBeMatcher;
  #toThrowMatcher;
  #toEqualMatcher;

  constructor() {
    this.#toBeMatcher = new ToBeMatcher();
    this.#toThrowMatcher = new ToThrowMatcher();
    this.#toEqualMatcher = new ToEqualMatcher();
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

  toEqual(value) {
    ExpectStore.value = value;
    const success = this.#toEqualMatcher.run(ExpectStore.callback, ExpectStore.value);
    if (success) return;
    TestsStore.tests[TestStore.id].success = false;
  }
}

module.exports = { DefaultModifier };
