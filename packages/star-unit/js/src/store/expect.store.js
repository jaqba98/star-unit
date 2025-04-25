class ExpectStore {
  static callback;
  static value;

  static reset() {
    ExpectStore.callback = null;
    ExpectStore.value = null;
  }
}

module.exports = { ExpectStore };
