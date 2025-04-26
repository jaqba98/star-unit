const { DescribeStore } = require("./describe.store");

class DescribesStore {
  static describes = {};
  static parents = [];

  static save() {
    const { id, description } = DescribeStore.get();
    DescribesStore.describes[id] = {
      id,
      description,
      parent: DescribesStore.parents[DescribesStore.parents.length - 1]
    };
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
