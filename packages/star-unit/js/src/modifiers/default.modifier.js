const { ExpectStore } = require("../store/expect.store");
const { TestStore } = require("../store/test.store");

class DefaultModifier {
  toBe(value) {
    ExpectStore.value = value;
    console.log(TestStore.id, TestStore.description, TestStore.success, " --- ", ExpectStore.callback, ExpectStore.value);
  }

  toThrow(value) {
    ExpectStore.value = value;
    console.log(TestStore.id, TestStore.description, TestStore.success, " --- ", ExpectStore.callback, ExpectStore.value);
  }
}

module.exports = { DefaultModifier };
