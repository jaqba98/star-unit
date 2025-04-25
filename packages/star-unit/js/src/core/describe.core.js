const { v4 } = require("uuid");
const { DescribeStore } = require("../store/describe.store");

class DescribeCore {
  constructor(description, callback) {
    DescribeStore.reset();
    DescribeStore.id = v4();
    DescribeStore.description = description;
    callback();
  }
}

module.exports = { DescribeCore };
