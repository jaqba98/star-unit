const { TestCore } = require("../core/test.core");
const { ExpectCore } = require("../core/expect.core");

const test = (description, callback) => new TestCore(description, callback);

const expect = (callback) => new ExpectCore(callback);

module.exports = { test, expect };
