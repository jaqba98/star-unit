const { DescribesStore } = require("./describes.store");

class EndDescribeService {
  end() {
    DescribesStore.removeLastParent();
  }
}

module.exports = { EndDescribeService };
