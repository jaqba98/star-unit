const { v4 } = require("uuid");

class DescribeStore {
  static id;
  static description;

  static create(description) {
    DescribeStore.id = v4();
    DescribeStore.description = description;
  }

  static reset() {
    DescribeStore.id = null;
    DescribeStore.description = null;
  }

  static get() {
    return {
      id: DescribeStore.id,
      description: DescribeStore.description,
    };
  }
}

module.exports = { DescribeStore };
