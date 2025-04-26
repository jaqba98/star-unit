const { DescribeStore } = require("./describe.store");

class DescribesStore {
  static describes = {};
  static parents = [];

  static add() {
    const { id, description } = DescribeStore.get();
    const currentParents = [...DescribesStore.parents];
    DescribesStore.describes[id] = {
      id,
      description,
      parent: currentParents[currentParents.length - 1],
      tests: []
    };
  }

  static addTest(description) {
    const { id } = DescribeStore.get();
    DescribesStore.describes[id].tests.push(description);
  }

  static addParent() {
    const { id } = DescribeStore.get();
    DescribesStore.parents.push(id);
  }

  static removeLastParent() {
    DescribesStore.parents.pop();
  }

  static get() {
    return DescribesStore.describes;
  }
}

module.exports = { DescribesStore };
