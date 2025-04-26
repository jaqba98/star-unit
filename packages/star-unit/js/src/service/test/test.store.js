class TestStore {
  static id;
  static description;
  static success;

  static reset() {
    TestStore.id = null;
    TestStore.description = null;
    TestStore.success = null;
  }
}

module.exports = { TestStore };
