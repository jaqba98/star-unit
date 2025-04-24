const { ExpectStore } = require("../store/expect.store");
const { TestStore } = require("../store/test.store");

class DefaultModifier {
  toBe(value) {
    ExpectStore.setValue(value);
    console.log(value, TestStore.getDescription(), " --- ", ExpectStore.getCallback(), ExpectStore.getValue());
  }

  toThrow(value) {
    ExpectStore.setValue(value);
    console.log(value, TestStore.getDescription(), " --- ", ExpectStore.getCallback(), ExpectStore.getValue());
  }
}

module.exports = { DefaultModifier };
