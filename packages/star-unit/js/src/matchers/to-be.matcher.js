class ToBeMatcher {
  run(callback, value) {
    return Object.is(callback(), value);
  }
}

module.exports = { ToBeMatcher };
