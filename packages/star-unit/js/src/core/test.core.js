const { v4 } = require("uuid");
const { TestStore } = require("../store/test.store");
const { TestsStore } = require("../store/tests.store");
const { DescribeStore } = require("../store/describe.store");

class TestCore {
  constructor(description, callback) {
    TestStore.reset();
    TestStore.id = v4();
    TestStore.description = description;
    TestStore.success = true;
    TestsStore.tests[TestStore.id] = {
      describe: DescribeStore.description,
      description: TestStore.description,
      success: TestStore.success,
    };
    callback();
  }
}

module.exports = { TestCore };
