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
    console.log(TestsStore.currentId);
    return this.#toBeMatcher.toBe(this.#received, expected);
  }
}

module.exports = ExpectCore;
