class ToBeMatcher {
  run(actual, expect) {
    if (typeof actual === "function") {
      return Object.is(actual(), expect);
    }
    return Object.is(actual, expect);
  }
}

module.exports = { ToBeMatcher };
