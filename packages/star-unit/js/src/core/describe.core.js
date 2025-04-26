const { DescribeStore } = require("../store/describe.store");
const { DescribesStore } = require("../store/describes.store");

class DescribeCore {
  #description;
  #fn;

  constructor(description, fn) {
    this.#description = description;
    this.#fn = fn;
  }

  run() {
    DescribeStore.reset();
    DescribeStore.create(this.#description);
    DescribesStore.save();
    this.#fn();
    DescribesStore.removeLastParent();
  }
}

module.exports = { DescribeCore };
