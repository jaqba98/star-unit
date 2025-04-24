const { TestsStore } = require("../store/tests.store");
const { ToBeMatcher } = require("../matchers/to-be.matcher");

class ExpectCore {
  #received;
  #toBeMatcher;

  constructor(received) {
    this.#received = received;
    this.#toBeMatcher = new ToBeMatcher();
  }

  toBe(expected) {
    const result = this.#toBeMatcher.toBe(this.#received, expected);
    if (!result) TestsStore.tests[TestsStore.id].correct = false;
  }
}

module.exports = { ExpectCore };
