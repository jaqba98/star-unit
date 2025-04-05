const { FileUtil } = require("../util/file.util");
const { LogUtil } = require("../util/log.util");

class CreateConfigService {
  constructor() {
    this.fileUtil = new FileUtil();
    this.logUtil = new LogUtil();
  }

  create(args) {
    this.fileUtil.write("star-unit.config.json", args);
    this.logUtil.success("The configuration file was created successfully.");
  }
}

module.exports = { CreateConfigService };
