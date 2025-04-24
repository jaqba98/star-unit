const { TestsStore } = require("../store/tests.store");
const { ToBeMatcher } = require("../matchers/to-be.matcher");
const { ToThrowMatcher } = require("../matchers/to-throw.matcher");

class ExpectCore {
  #received;
  #toBeMatcher;
  #toThrowMatcher;

  constructor(received) {
    this.#received = received;
    this.#toBeMatcher = new ToBeMatcher();
    this.#toThrowMatcher = new ToThrowMatcher();
  }

  toBe(expected) {
    const result = this.#toBeMatcher.run(this.#received, expected);
    if (!result) TestsStore.tests[TestsStore.id].correct = false;
  }

  toThrow(expected) {
    const result = this.#toThrowMatcher.run(this.#received, expected);
    if (!result) TestsStore.tests[TestsStore.id].correct = false;
  }
}

module.exports = { ExpectCore };
