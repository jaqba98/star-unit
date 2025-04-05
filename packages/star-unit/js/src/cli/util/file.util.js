const fs = require("fs");

class FileUtil {
  write(file, content) {
    fs.writeFileSync(file, JSON.stringify(content, null, 2));
  }

  exist(file) {
    return fs.existsSync(file);
  }

  readJson(file) {
    try {
      return JSON.parse(fs.readFileSync(file).toString());
    } catch (e) {
      return {};
    }
  }
}

module.exports = { FileUtil };
