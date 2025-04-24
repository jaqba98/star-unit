const { DefaultModifier } = require("../modifiers/default.modifier");
const { ExpectStore } = require("../store/expect.store");

class ExpectCore extends DefaultModifier {
  constructor(callback) {
    ExpectStore.reset();
    ExpectStore.setCallback(callback);
    super();
  }
}

module.exports = { ExpectCore };
