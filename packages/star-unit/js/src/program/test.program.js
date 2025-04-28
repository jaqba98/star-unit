// const {
//   CheckConfigExistService,
// } = require("../service/check-config-exist.service");
// const { ReadConfigService } = require("../service/read-config.service");
// const { LoadTestFilesService } = require("../service/load-test-files.service");
// const { TestsSummaryService } = require("../service/tests-summary.service");
// const { DescribesStore } = require("../../store/describes.store");
// const { TestsStore } = require("../../store/tests.store");
// const { ExpectsStore } = require("../../store/expects.store");
// const { TestResultBuilder } = require("../../builder/test-result.builder");

class TestProgram {
  constructor() {
    // this.checkConfigExistService = new CheckConfigExistService();
    // this.readConfigService = new ReadConfigService();
    // this.loadTestFilesService = new LoadTestFilesService();
    // this.testsSummaryService = new TestsSummaryService();
    // this.aaa = new TestResultBuilder();
  }

  run(commandDomain) {
    console.log("Test Program");
    // if (!this.checkConfigExistService.check()) return;
    // const config = this.readConfigService.read(commandDomain);
    // this.loadTestFilesService.load(config);
    // // this.testsSummaryService.getSummary();
    // // console.log('Describes:');
    // // console.log(DescribesStore.describes);
    // // console.log('Tests:');
    // // console.log(TestsStore.tests);
    // // console.log('Expect:');
    // // console.log(ExpectsStore.expects);
    // // console.log(TestResultsStore.get());
    // console.log(JSON.stringify(this.aaa.build(), null, 2));
  }
}

module.exports = { TestProgram };
