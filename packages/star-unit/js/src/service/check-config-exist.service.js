const { FileUtil } = require("../util/file.util");
const { LogUtil } = require("../util/log.util");

class CheckConfigExistService {
  constructor() {
    this.fileUtil = new FileUtil();
    this.logUtil = new LogUtil();
  }

  check() {
    const exist = this.fileUtil.exist("star-unit.config.json");
    if (exist) return true;
    this.logUtil.error("The configuration file does not exist.");
    this.logUtil.error(
      "Run the 'suj init' command to initialize the configuration file.",
    );
    return false;
  }
}

module.exports = { CheckConfigExistService };
