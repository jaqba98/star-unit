const { ExpectsStore } = require("../store/expects.store");
const { TestStore } = require("../store/test.store");
const { TestsStore } = require("../store/tests.store");
const { DescribeStore } = require("../store/describe.store");
const { DescribesStore } = require("../store/describes.store");
const { BaseModifier } = require("./base.modifier");

class DefaultModifier extends BaseModifier {
  constructor(actual) {
    super((expect, fn, matcher) => {
      const success = fn(this.actual, expect);
      ExpectsStore.save(success, this.actual, matcher, expect);
      if (!success) {
        TestsStore.updateTestSuccess(TestStore.get().id, false);
        DescribesStore.updateDescribeSuccess(DescribeStore.get().id, false);
      }
    }, actual);
  }
}

module.exports = { DefaultModifier };
