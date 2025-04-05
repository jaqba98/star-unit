const { CreateConfigService } = require("../service/create-config.service");

class InitProgram {
  constructor() {
    this.createConfigService = new CreateConfigService();
  }

  run(args) {
    this.createConfigService.create(args);
  }
}

module.exports = { InitProgram };
