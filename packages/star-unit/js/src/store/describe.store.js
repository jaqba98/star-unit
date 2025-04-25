class DescribeStore {
  static id;
  static description;

  static reset() {
    DescribeStore.id = null;
    DescribeStore.description = null;
  }
}

module.exports = { DescribeStore };
