class ToEqualMatcher {
  run(callback, value) {
    return JSON.stringify(callback()) === JSON.stringify(value);
  }
}

module.exports = { ToEqualMatcher };
