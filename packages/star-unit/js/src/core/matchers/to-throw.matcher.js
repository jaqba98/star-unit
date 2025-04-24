class ToThrowMatcher {
  run(expected, callback) {
    try {
      callback();
      return false;
    } catch (e) {
      return e.message === expected;
    }
  }
}

module.exports = { ToThrowMatcher };
