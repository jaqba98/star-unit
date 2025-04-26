class DescribeCore {
  #description;
  #fn;

  constructor(description, fn) {
    this.#description = description;
    this.#fn = fn;
  }

  run() {
    console.log(`Running group: ${this.#description}`);
    this.#fn();
  }
}

module.exports = { DescribeCore };

// todo: Remove it!
// const { SetDescribeService } = require("../service/describe/set-describe.service");
// const { EndDescribeService } = require("../service/describe/end-describe.service");
// class DescribeCore {
//   constructor(description, callback) {
//     new SetDescribeService().set(description);
//     callback();
//     new EndDescribeService().end();
//   }
// }
// module.exports = { DescribeCore };
