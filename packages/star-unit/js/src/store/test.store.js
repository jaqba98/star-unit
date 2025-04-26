const { v4 } = require("uuid");

class TestStore {
  static id;
  static description;
  static success;

  static create(description) {
    TestStore.id = v4();
    TestStore.description = description;
    TestStore.success = true;
  }

  static reset() {
    TestStore.id = null;
    TestStore.description = null;
    TestStore.success = true;
  }

  static get() {
    return {
      id: TestStore.id,
      description: TestStore.description,
      success: TestStore.success
    };
  }
}

module.exports = { TestStore };
