const { v4 } = require("uuid");

class DescribeStore {
  static id;
  static description;
  static success;

  static create(description) {
    DescribeStore.id = v4();
    DescribeStore.description = description;
    DescribeStore.success = true;
  }

  static reset() {
    DescribeStore.id = null;
    DescribeStore.description = null;
    DescribeStore.success = true;
  }

  static get() {
    return {
      id: DescribeStore.id,
      description: DescribeStore.description,
      success: DescribeStore.success,
    };
  }
}

module.exports = { DescribeStore };
