const fs = require("fs");

class FileUtil {
  write(file, content) {
    fs.writeFileSync(file, JSON.stringify(content, null, 2));
  }

  exist(file) {
    return fs.existsSync(file);
  }
}

module.exports = { FileUtil };
