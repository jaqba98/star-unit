class ToBeNullMatcher {
  run(actual, expect) {
    if (typeof actual === "function") {
      return actual() === expect;
    }
    return actual === expect;
  }
}

module.exports = { ToBeNullMatcher };
