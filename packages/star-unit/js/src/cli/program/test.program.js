const { CheckConfigExistService } = require("../service/check-config-exist.service");
const { ReadConfigService } = require("../service/read-config.service");

class TestProgram {
  constructor() {
    this.checkConfigExistService = new CheckConfigExistService();
    this.readConfigService = new ReadConfigService();
  }

  run(_args) {
    if (!this.checkConfigExistService.check()) return;
    this.readConfigService.read();
  }
}

module.exports = { TestProgram };
