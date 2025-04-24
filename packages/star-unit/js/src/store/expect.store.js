class ExpectStore {
  static callback;
  static value;

  static setCallback = (callback) => (ExpectStore.callback = callback);
  static getCallback = () => {
    if (ExpectStore.callback === null) throw new Error("Callback not set");
    return ExpectStore.callback;
  };

  static setValue = (value) => (ExpectStore.value = value);
  static getValue = () => {
    if (ExpectStore.value === null) throw new Error("Value not set");
    return ExpectStore.value;
  };

  static reset() {
    ExpectStore.callback = null;
    ExpectStore.value = null;
  }
}

module.exports = { ExpectStore };
