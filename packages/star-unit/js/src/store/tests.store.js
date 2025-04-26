const deepcopy = require("deepcopy");
const { TestStore } = require("./test.store");
const { DescribeStore } = require("./describe.store");

class TestsStore {
  static tests = {};

  static save() {
    const { id, description, success } = TestStore.get();
    TestsStore.tests[id] = {
      id,
      description,
      success,
      describeId: DescribeStore.get().id
    };
  }

  static updateTestSuccess(id, success) {
    if (TestsStore.tests[id]) {
      TestsStore.tests[id].success = success;
    }
  }

  static get() {
    return deepcopy(TestsStore.tests);
  }
}

module.exports = { TestsStore };
