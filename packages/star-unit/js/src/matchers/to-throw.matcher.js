class ToThrowMatcher {
  run(actual, expect) {
    try {
      actual();
      return false;
    } catch (e) {
      return e.message === expect;
    }
  }
}

module.exports = { ToThrowMatcher };
