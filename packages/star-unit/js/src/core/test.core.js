const { TestStore } = require("../store/test.store");
const { TestsStore } = require("../store/tests.store");

class TestCore {
  #description;
  #fn;

  constructor(description, fn) {
    this.#description = description;
    this.#fn = fn;
  }

  run() {
    TestStore.reset();
    TestStore.create(this.#description);
    TestsStore.save();
    this.#fn();
    TestStore.reset();
  }
}

module.exports = { TestCore };
