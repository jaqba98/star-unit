const { v4 } = require("uuid");
const { TestStore } = require("../store/test.store");

class TestCore {
  constructor(description, callback) {
    TestStore.reset();
    TestStore.id = v4();
    TestStore.description = description;
    TestStore.success = true;
    callback();
  }
}

module.exports = { TestCore };
