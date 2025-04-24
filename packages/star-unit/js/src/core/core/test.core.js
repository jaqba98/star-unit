const { v4 } = require('uuid');
const TestsStore = require("../store/tests.store");

class TestCore {
  constructor(name, fn) {
    const id = v4();
    TestsStore.currentId = id;
    TestsStore.tests.push({ id, name });
    fn(id);
  }
}

module.exports = TestCore;
