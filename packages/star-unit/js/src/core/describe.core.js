const { SetDescribeService } = require("../service/describe/set-describe.service");
const { EndDescribeService } = require("../service/describe/end-describe.service");

class DescribeCore {
  constructor(description, callback) {
    new SetDescribeService().set(description);
    callback();
    new EndDescribeService().end();
  }
}

module.exports = { DescribeCore };
