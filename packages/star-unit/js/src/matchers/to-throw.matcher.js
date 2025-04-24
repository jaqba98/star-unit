class ToThrowMatcher {
  run(expectCallback, expectValue) {
    try {
      expectCallback();
      return false;
    } catch (e) {
      return e.message === expectValue;
    }
  }
}

module.exports = { ToThrowMatcher };
