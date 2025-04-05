const TestCore = require("../core/test.core");

const test = (name, fn) => {
  return new TestCore(name, fn);
};

module.exports = test;
