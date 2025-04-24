class ToBeMatcher {
  run(received, expected) {
    return Object.is(received, expected);
  }
}

module.exports = { ToBeMatcher };
