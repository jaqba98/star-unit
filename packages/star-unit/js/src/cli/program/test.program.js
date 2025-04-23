const { CheckConfigExistService } = require("../service/check-config-exist.service");
const { ReadConfigService } = require("../service/read-config.service");
const { LoadTestFilesService } = require("../service/load-test-files.service");
const TestsStore = require("../../core/store/tests.store");

class TestProgram {
  constructor() {
    this.checkConfigExistService = new CheckConfigExistService();
    this.readConfigService = new ReadConfigService();
    this.loadTestFilesService = new LoadTestFilesService();
  }

  run(commandDomain) {
    if (!this.checkConfigExistService.check()) return;
    const config = this.readConfigService.read(commandDomain);
    const testFiles = this.loadTestFilesService.load(config);
    for (const testFile of testFiles) {
      require(testFile);
    }
    let passed = 0;
    for (const { name, fn } of TestsStore.tests) {
        try {
            fn();
            console.log(`✓ ${name}`);
            passed++;
        } catch (err) {
            console.error(`✗ ${name}`);
            console.error(' ', err.message);
        }
    }
    console.log(`\n${passed}/${TestsStore.tests.length} tests passed.`);
  }
}

module.exports = { TestProgram };
