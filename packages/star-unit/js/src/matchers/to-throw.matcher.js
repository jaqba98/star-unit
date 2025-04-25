class ToThrowMatcher {
  run(callback, value) {
    try {
      callback();
      return false;
    } catch (e) {
      return e.message === value;
    }
  }
}

module.exports = { ToThrowMatcher };
