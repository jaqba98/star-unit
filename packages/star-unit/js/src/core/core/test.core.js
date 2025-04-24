const { v4 } = require('uuid');
const TestsStore = require("../store/tests.store");

class TestCore {
  constructor(name, fn) {
    const id = v4();
    TestsStore.currentId = id;
    TestsStore.tests[id] = { id, name, expects: [] };
    fn(id);
  }
}

module.exports = TestCore;
