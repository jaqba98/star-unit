const { FileUtil } = require("../util/file.util");

class ReadConfigService {
  constructor() {
    this.fileUtil = new FileUtil();
  }

  read(commandDomain) {
    const config = this.fileUtil.readJson('star-unit.config.json');
    const options = commandDomain.init.options;
    return {
      root: config.root || options.root.defaultValue
    }
  }
}

module.exports = { ReadConfigService };
