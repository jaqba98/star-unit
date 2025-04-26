const { CheckConfigExistService } = require("../service/check-config-exist.service");
const { ReadConfigService } = require("../service/read-config.service");
const { LoadTestFilesService } = require("../service/load-test-files.service");
const { TestsSummaryService } = require("../service/tests-summary.service");

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
    this.testsSummaryService.getSummary();
  }
}

module.exports = { TestProgram };
