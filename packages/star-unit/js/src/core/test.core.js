const { TestStore } = require("../store/test.store");

class TestCore {
  constructor(description, callback) {
    TestStore.reset();
    TestStore.setDescription(description);
    callback();
  }
}

module.exports = { TestCore };
