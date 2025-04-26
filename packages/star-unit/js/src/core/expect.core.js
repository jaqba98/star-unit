const { DefaultModifier } = require("../modifiers/default.modifier");

class ExpectCore extends DefaultModifier {
  constructor(actual) {
    super(actual);
  }
}

module.exports = { ExpectCore };
