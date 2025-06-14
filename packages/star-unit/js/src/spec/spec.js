const { DescribeCore } = require("../core/describe.core");
const { TestCore } = require("../core/test.core");
const { ExpectCore } = require("../core/expect.core");

const describe = (description, fn) => {
  new DescribeCore(description, fn).run();
};

const test = (description) => {
  return new TestCore(description);
};

const expect = (actual) => {
  return new ExpectCore(actual);
};

module.exports = { describe, test, expect };
