const { v4 } = require("uuid");
const { TestsStore } = require("../store/tests.store");

const test = (name, fn) => {
  const id = v4();
  TestsStore.id = id;
  TestsStore.tests[id] = { id, name, callback: fn, correct: true };
};

module.exports = { test };
