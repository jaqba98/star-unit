const { LogDescribesService } = require("../../service/describe/log-describes.service");
const { DescribesStore } = require("../../service/describe/describes.store");

class TestsSummaryService {
  #logDescribesService;

  constructor() {
    this.#logDescribesService = new LogDescribesService();
  }

  getSummary() {
    console.log(DescribesStore.describes);
    // let passed = 0,
    //   all = 0;
    // const tests = Object.values(TestsStore.tests).reduce((acc, curr) => {
    //   if (!acc[curr.describe]) {
    //     acc[curr.describe] = [];
    //   }
    //   acc[curr.describe].push(curr);
    //   return acc;
    // }, {});
    // Object.entries(tests).forEach(([key, values]) => {
    //   console.log(`Describe: ${key}`);
    //   values.forEach(({ describe, description, success }) => {
    //     if (success) {
    //       console.log(`✓ ${describe} ${description}`);
    //       passed++;
    //     } else {
    //       console.error(`✗ ${describe} ${description}`);
    //     }
    //     all++;
    //   });
    //   console.log("");
    // });
    // console.log(`\n${passed}/${all} tests passed.`);
  }
}

module.exports = { TestsSummaryService };
