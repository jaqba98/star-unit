const { DefaultModifier } = require("../modifiers/default.modifier");
const { ExpectStore } = require("../store/expect.store");

class ExpectCore extends DefaultModifier {
  constructor(callback) {
    ExpectStore.reset();
    ExpectStore.callback = callback;
    super();
  }
}

module.exports = { ExpectCore };
