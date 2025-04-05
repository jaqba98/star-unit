const { FileUtil } = require("../util/file.util");

class CreateConfigService {
  constructor() {
    this.fileUtil = new FileUtil();
  }

  create(args) {
    this.fileUtil.write("star-unit.config.json", args);
  }
}

module.exports = { CreateConfigService };
