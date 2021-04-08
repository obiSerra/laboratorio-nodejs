// Class export
"strict mode";

module.exports = class Logger {
  info(message) {
    console.log(`info: ${message}`);
  }
  warning(message) {
    console.log(`warning: ${message}`);
  }
};
