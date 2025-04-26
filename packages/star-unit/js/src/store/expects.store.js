const deepcopy = require("deepcopy");
const { v4 } = require("uuid");
const { TestStore } = require("./test.store");

class ExpectsStore {
  static expects = {};

  static save(success, actual, matcher, expect) {
    const id = v4();
    const testId = TestStore.get().id;
    const received = typeof actual === "function" ? actual() : actual;
    ExpectsStore.expects[id] = {
      id,
      success,
      testId,
      description: `expect(${actual}).${matcher}(${expect})`,
      expect,
      received,
    };
  }

  static get() {
    return deepcopy(ExpectsStore.expects);
  }
}

module.exports = { ExpectsStore };
