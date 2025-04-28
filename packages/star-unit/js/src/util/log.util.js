class LogUtil {
  success(message) {
    console.log(`Success: ${message}`);
  }

  error(message) {
    console.log(`Error: ${message}`);
  }
}

module.exports = { LogUtil };
