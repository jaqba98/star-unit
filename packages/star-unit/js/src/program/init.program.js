// const { CreateConfigService } = require("../service/create-config.service");

class InitProgram {
  constructor() {
    // this.createConfigService = new CreateConfigService();
  }

  run(commandDomain, args) {
    console.log("Init Program");
    // this.createConfigService.create(args);
  }
}

module.exports = { InitProgram };
