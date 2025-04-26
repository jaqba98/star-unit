const { DescribeStore } = require("./describe.store");
const { DescribesStore } = require("./describes.store");

class SetDescribeService {
  set(description) {
    DescribeStore.clean();
    DescribeStore.set(description);
    DescribesStore.add();
    DescribesStore.addParent();
  }
}

module.exports = { SetDescribeService };
