const {
  CheckConfigExistService,
} = require("../service/check-config-exist.service");
const { ReadConfigService } = require("../service/read-config.service");
const { LoadTestFilesService } = require("../service/load-test-files.service");
const { TestResultService } = require("../service/test-result.service");

class TestProgram {
  constructor() {
    this.checkConfigExistService = new CheckConfigExistService();
    this.readConfigService = new ReadConfigService();
    this.loadTestFilesService = new LoadTestFilesService();
    this.testResultService = new TestResultService();
  }

  run(commandDomain) {
    if (!this.checkConfigExistService.check()) return;
    const config = this.readConfigService.read(commandDomain);
    this.loadTestFilesService.load(config);
    this.testResultService.getTestResult();
  }
}

module.exports = { TestProgram };
