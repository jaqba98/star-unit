const { FileUtil } = require("../util/file.util");
const { configFileName } = require("../const/const");

class ReadConfigService {
  constructor() {
    this.fileUtil = new FileUtil();
  }

  read(commandDomain) {
    const config = this.fileUtil.readJson(configFileName);
    const options = commandDomain.init.options;
    return {
      root: config.root || options.root.defaultValue,
      ext: config.ext || options.ext.defaultValue,
    };
  }
}

module.exports = { ReadConfigService };
