const { v4 } = require("uuid");

class TestStore {
  static id;
  static description;

  static create(description) {
    TestStore.id = v4();
    TestStore.description = description;
  }

  static reset() {
    TestStore.id = null;
    TestStore.description = null;
  }

  static get() {
    return {
      id: TestStore.id,
      description: TestStore.description,
    };
  }
}

module.exports = { TestStore };
