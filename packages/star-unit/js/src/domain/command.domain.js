const { InitProgram } = require("../program/init.program");
const { TestProgram } = require("../program/test.program");

const commandDomain = {
  init: {
    name: "init",
    description: "Initialize the configuration required by this tool.",
    options: {
      root: {
        flags: "-r, --root <root>",
        description: "Path to the root directory.",
        defaultValue: "./",
      },
      ext: {
        flags: "-e, --ext <root>",
        description: "Test file extension.",
        defaultValue: "test.js",
      },
    },
    program: new InitProgram(),
  },
  test: {
    name: "test",
    description: "Run unit tests.",
    options: {},
    program: new TestProgram(),
  },
};

module.exports = { commandDomain };
