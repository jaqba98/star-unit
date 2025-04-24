const { DefaultModifier } = require("../modifiers/default.modifier");

class ExpectCore extends DefaultModifier {
  constructor(expectCallback) {
    super(expectCallback);
  }
}

module.exports = { ExpectCore };
