class ToBeNullMatcher {
  run(callback) {
    return callback() === null;
  }
}

module.exports = { ToBeNullMatcher };
