const { TestStore } = require("./test.store");
const { DescribeStore } = require("./describe.store");

class TestsStore {
  static tests = {};

  static save() {
    const { id, description } = TestStore.get();
    TestsStore.tests[id] = {
      id,
      description,
      describeId: DescribeStore.get().id
    };
  }

  static get() {
    return TestsStore.tests;
  }
}

module.exports = { TestsStore };
