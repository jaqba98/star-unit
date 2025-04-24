class TestStore {
  static description;

  static setDescription = (description) => (TestStore.description = description);
  static getDescription = () => {
    if (TestStore.description === null) throw new Error("Description not set");
    return TestStore.description;
  };

  static reset() {
    TestStore.description = null;
  }
}

module.exports = { TestStore };
