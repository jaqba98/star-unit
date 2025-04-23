const fs = require("fs");
const path = require("path");

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

  readFiles(filePath, ext, files = []) {
    const entries = fs.readdirSync(filePath, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(filePath, entry.name);
      if (entry.isDirectory()) {
        this.readFiles(fullPath, ext, files);
      } else if (entry.isFile() && fullPath.endsWith(ext)) {
        files.push(fullPath);
      }
    }
    return files;
  }
}

module.exports = { FileUtil };
