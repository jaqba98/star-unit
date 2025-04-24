const { PathUtil } = require("../util/path.util");
const { FileUtil } = require("../util/file.util");

class LoadTestFilesService {
  constructor() {
    this.pathUtil = new PathUtil();
    this.fileUtil = new FileUtil();
  }

  load(config) {
    const rootDir = this.pathUtil.join(process.cwd(), config.root);
    if (this.fileUtil.exist(rootDir)) {
      const testFiles = this.fileUtil.readFiles(rootDir, ".test.js");
      for (const testFile of testFiles) {
        require(testFile);
      }
    }
  }
}

module.exports = { LoadTestFilesService };
