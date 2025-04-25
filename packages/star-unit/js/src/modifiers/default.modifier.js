const { ExpectStore } = require("../store/expect.store");
const { TestStore } = require("../store/test.store");
const { TestsStore } = require("../store/tests.store");
const { ToBeMatcher } = require("../matchers/to-be.matcher");
const { ToThrowMatcher } = require("../matchers/to-throw.matcher");
const { ToEqualMatcher } = require("../matchers/to-equal.matcher");
const { ToBeGreaterThanMatcher } = require("../matchers/to-be-greater-than.matcher");

class DefaultModifier {
  #toBeMatcher;
  #toThrowMatcher;
  #toEqualMatcher;
  #toBeGreaterThanMatcher;

  constructor() {
    this.#toBeMatcher = new ToBeMatcher();
    this.#toThrowMatcher = new ToThrowMatcher();
    this.#toEqualMatcher = new ToEqualMatcher();
    this.#toBeGreaterThanMatcher = new ToBeGreaterThanMatcher();
  }

  #run(matcher, value = undefined) {
    ExpectStore.value = value;
    const success = matcher.run(ExpectStore.callback, value);
    if (success) return;
    TestsStore.tests[TestStore.id].success = false;
  }

  toBe(value) {
    this.#run(this.#toBeMatcher, value);
  }

  toThrow(value) {
    this.#run(this.#toThrowMatcher, value);
  }

  toEqual(value) {
    this.#run(this.#toEqualMatcher, value);
  }

  toBeGreaterThan(value) {
    this.#run(this.#toBeGreaterThanMatcher, value);
  }
}

module.exports = { DefaultModifier };
