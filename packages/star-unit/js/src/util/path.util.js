const path = require("path");

class PathUtil {
  join(path1, path2) {
    if (typeof path1 === "string" && typeof path2 === "string") {
      return path.join(path1, path2);
    }
  }
}

module.exports = { PathUtil };
