const { CheckConfigExistService } = require("../service/check-config-exist.service");
const { ReadConfigService } = require("../service/read-config.service");

class TestProgram {
  constructor() {
    this.checkConfigExistService = new CheckConfigExistService();
    this.readConfigService = new ReadConfigService();
  }

  run(commandDomain) {
    if (!this.checkConfigExistService.check()) return;
    const config = this.readConfigService.read(commandDomain);
    console.log(config);
  }
}

module.exports = { TestProgram };
