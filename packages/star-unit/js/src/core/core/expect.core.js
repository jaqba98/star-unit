const ToBeMatcher = require("../matchers/to-be.matcher");
const TestsStore = require("../store/tests.store");

class ExpectCore {
  #received;
  #toBeMatcher;

  constructor(received) {
    this.#received = received;
    this.#toBeMatcher = new ToBeMatcher();
  }

  toBe(expected) {
    const t = this.#toBeMatcher.toBe(this.#received, expected);
    TestsStore.tests[TestsStore.currentId].expects.push(t);
  }
}

module.exports = ExpectCore;
