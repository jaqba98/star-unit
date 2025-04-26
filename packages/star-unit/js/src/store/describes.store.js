const deepcopy = require("deepcopy");
const { DescribeStore } = require("./describe.store");

class DescribesStore {
  static describes = {};
  static parents = [];

  static save() {
    const { id, description, success } = DescribeStore.get();
    DescribesStore.describes[id] = {
      id,
      description,
      success,
      parent: DescribesStore.parents[DescribesStore.parents.length - 1],
    };
    DescribesStore.parents.push(id);
  }

  static removeLastParent() {
    DescribesStore.parents.pop();
  }

  static updateDescribeSuccess(id, success) {
    if (DescribesStore.describes[id]) {
      DescribesStore.describes[id].success = success;
    }
  }

  static get() {
    return deepcopy(DescribesStore.describes);
  }
}

module.exports = { DescribesStore };
