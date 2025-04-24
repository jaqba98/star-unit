class ToBeMatcher {
  toBe(received, expected) {
    return received === expected;
  }
}

module.exports = { ToBeMatcher };
