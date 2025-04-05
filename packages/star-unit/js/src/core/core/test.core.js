const TestsStore = require("../../cli/system/tests.store");

class TestCore {
  constructor(name, fn) {
    TestsStore.tests.push({ name, fn });
  }
}

module.exports = TestCore;
