const { v4 } = require("uuid");

class DescribeStore {
  static id;
  static description;

  static clean() {
    DescribeStore.id = null;
    DescribeStore.description = null;
  }

  static set(description) {
    DescribeStore.id = v4();
    DescribeStore.description = description;
  }

  static get() {
    return {
      id: DescribeStore.id,
      description: DescribeStore.description,
    };
  }
}

module.exports = { DescribeStore };
