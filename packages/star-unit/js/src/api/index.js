const { TestCore } = require("../core/test.core");
const { ExpectCore } = require("../core/expect.core");
const { DescribeCore } = require("../core/describe.core");

const test = (description, callback) => new TestCore(description, callback);

const describe = (description, callback) =>
  new DescribeCore(description, callback);

const expect = (callback) => new ExpectCore(callback);

module.exports = { describe, test, expect };
