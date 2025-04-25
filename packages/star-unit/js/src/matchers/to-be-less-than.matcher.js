class ToBeLessThanMatcher {
  run(callback, value) {
    return callback() < value;
  }
}

module.exports = { ToBeLessThanMatcher };
