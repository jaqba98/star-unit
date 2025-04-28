const { CheckConfigExistService } = require("../service/check-config-exist.service");
const { ReadConfigService } = require("../service/read-config.service");

class TestProgram {
  constructor() {
    this.checkConfigExistService = new CheckConfigExistService();
    this.readConfigService = new ReadConfigService();
    // this.loadTestFilesService = new LoadTestFilesService();
    // this.testsSummaryService = new TestsSummaryService();
    // this.aaa = new TestResultBuilder();
  }

  run(commandDomain) {
    if (!this.checkConfigExistService.check()) return;
    const config = this.readConfigService.read(commandDomain);
    console.log(config);
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
