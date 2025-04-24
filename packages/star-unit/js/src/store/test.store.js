class TestStore {
  static description;
  static callback;

  static setDescription = (description) => TestStore.description = description;
  static getDescription = () => {
    if (!TestStore.description) throw new Error("Description not set");
    return TestStore.description;
  }

  static setCallback = (callback) => TestStore.callback = callback;
  static getCallback = () => {
    if (!TestStore.callback) throw new Error("Callback not set");
    return TestStore.callback;
  }

  static reset() {
    TestStore.description = null;
    TestStore.callback = null;
  }
}

module.exports = { TestStore };
