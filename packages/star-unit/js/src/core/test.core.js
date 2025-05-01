const { TestStore } = require("../store/test.store");
const { TestsStore } = require("../store/tests.store");

class TestCore {
  #description;
  #params;

  constructor(description) {
    this.#description = description;
    this.#params = [];
  }

  params(params) {
    this.#params = params ?? [];
    return this;
  }

  create(fn) {
    if (this.#params.length === 0) {
      TestStore.reset();
      TestStore.create(this.#description, this.#params);
      TestsStore.save();
      fn();
      TestStore.reset();
    } else {
      this.#params.forEach((param) => {
        TestStore.reset();
        TestStore.create(this.#description, this.#params);
        TestsStore.save();
        fn(param);
        TestStore.reset();
      })
    }
  }
}

module.exports = { TestCore };
