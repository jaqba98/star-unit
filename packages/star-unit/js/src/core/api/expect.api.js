const { ExpectCore } = require("../core/expect.core");

const expect = (expectCallback) => {
  return new ExpectCore(expectCallback);
};

module.exports = { expect };
