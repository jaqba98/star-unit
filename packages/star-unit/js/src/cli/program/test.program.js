const {
  CheckConfigExistService,
} = require("../service/check-config-exist.service");
const { ReadConfigService } = require("../service/read-config.service");
const { LoadTestFilesService } = require("../service/load-test-files.service");
const { TestsSummaryService } = require("../service/tests-summary.service");
const { DescribesStore } = require("../../store/describes.store");
const { TestsStore } = require("../../store/tests.store");
const { ExpectsStore } = require("../../store/expects.store");
const { TestResultsStore } = require("../../store/test-results.store");

class TestProgram {
  constructor() {
    this.checkConfigExistService = new CheckConfigExistService();
    this.readConfigService = new ReadConfigService();
    this.loadTestFilesService = new LoadTestFilesService();
    this.testsSummaryService = new TestsSummaryService();
  }

  run(commandDomain) {
    if (!this.checkConfigExistService.check()) return;
    const config = this.readConfigService.read(commandDomain);
    this.loadTestFilesService.load(config);
    // this.testsSummaryService.getSummary();
    // console.log('Describes:');
    // console.log(DescribesStore.describes);
    // console.log('Tests:');
    // console.log(TestsStore.tests);
    // console.log('Expect:');
    // console.log(ExpectsStore.expects);
    console.log(TestResultsStore.get());
  }
}

module.exports = { TestProgram };
