const { DefaultModifier } = require("../modifiers/default.modifier");
const { NotModifier } = require("../modifiers/not.modifier");

class ExpectCore extends DefaultModifier {
  constructor(actual) {
    super(actual);
    this.not = new NotModifier(actual);
  }
}

module.exports = { ExpectCore };
