const ExpectCore = require("../core/expect.core");

const expect = (received) => {
  return new ExpectCore(received);
};

module.exports = expect;
