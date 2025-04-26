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
      parents: currentParents
    };
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
