const logger = require("./instanceExportModule")


module.exports = (message) => logger.info(message + " another module")