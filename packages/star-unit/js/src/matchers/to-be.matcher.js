class ToBeMatcher {
  run(expectCallback, expectValue) {
    return Object.is(expectCallback(), expectValue);
  }
}

module.exports = { ToBeMatcher };
