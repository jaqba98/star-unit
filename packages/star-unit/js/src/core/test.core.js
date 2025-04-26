class TestCore {
  #description;
  #fn;

  constructor(description, fn) {
    this.#description = description;
    this.#fn = fn;
  }

  run() {
    console.log(`Running test: ${this.#description}`);
    this.#fn();
  }
}

module.exports = { TestCore };

// todo: Remove it!
// const { v4 } = require("uuid");
// const { TestStore } = require("../service/test/test.store");
// const { TestsStore } = require("../service/test/tests.store");
// const { DescribeStore } = require("../service/describe/describe.store");
// const { DescribesStore } = require("../service/describe/describes.store");
// class TestCore {
//   constructor(description, callback) {
//     TestStore.reset();
//     TestStore.id = v4();
//     TestStore.description = description;
//     TestStore.success = true;
//     TestsStore.tests[TestStore.id] = {
//       describe: DescribeStore.description,
//       description: TestStore.description,
//       success: TestStore.success,
//     };
//     DescribesStore.addTest(TestStore.description);
//     callback();
//   }
// }
// module.exports = { TestCore };
