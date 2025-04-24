const { ToBeMatcher } = require("../matchers/to-be.matcher");
const { ToThrowMatcher } = require("../matchers/to-throw.matcher");
const { TestsStore } = require("../store/tests.store");

class DefaultModifier {
  #expectCallback;
  #toBeMatcher;
  #toThrowMatcher;

  constructor(expectCallback) {
    this.#expectCallback = expectCallback;
    this.#toBeMatcher = new ToBeMatcher();
    this.#toThrowMatcher = new ToThrowMatcher();
  }

  toBe(expectValue) {
    const result = this.#toBeMatcher.run(this.#expectCallback, expectValue);
    if (!result) {
      TestsStore.tests[TestsStore.id].correct = false;
    }
  }

  toThrow(expectValue) {
    const result = this.#toThrowMatcher.run(this.#expectCallback, expectValue);
    if (!result) {
      TestsStore.tests[TestsStore.id].correct = false;
    }
  }
}

module.exports = { DefaultModifier };
