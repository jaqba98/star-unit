const { FileUtil } = require("../util/file.util");
const { LogUtil } = require("../util/log.util");
const { configFileName } = require("../const/const");

class CreateConfigService {
  constructor() {
    this.fileUtil = new FileUtil();
    this.logUtil = new LogUtil();
  }

  create(args) {
    this.fileUtil.write(configFileName, args);
    this.logUtil.success("The configuration file was created successfully.");
  }
}

module.exports = { CreateConfigService };
