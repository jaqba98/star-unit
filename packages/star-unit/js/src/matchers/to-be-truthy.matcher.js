class ToBeTruthyMatcher {
  run(callback) {
    return !!callback();
  }
}

module.exports = { ToBeTruthyMatcher };
