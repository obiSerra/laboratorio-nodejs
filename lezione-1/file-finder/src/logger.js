let logger_debug = true;

module.exports.setDebug = (val) => {
  logger_debug = val;
};

module.exports.debug = (message) => {
  if (logger_debug) {
    console.log(`[DEBUG] ${message}`);
  }
};

module.exports.info = (message) => {
  console.log(`[INFO] ${message}`);
};
