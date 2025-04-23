const { PathUtil } = require("../util/path.util");
const { FileUtil } = require("../util/file.util");

class LoadTestFilesService {
  constructor() {
    this.pathUtil = new PathUtil();
    this.fileUtil = new FileUtil();
  }

  load(config) {
    const rootDir = this.pathUtil.join(process.cwd(), config.root);
    return this.fileUtil.readFiles(rootDir, '.test.js');
  }
}

module.exports = { LoadTestFilesService };
