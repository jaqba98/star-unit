class ToBeGreaterThanMatcher {
  run(callback, value) {
    return callback() > value;
  }
}

module.exports = { ToBeGreaterThanMatcher };
