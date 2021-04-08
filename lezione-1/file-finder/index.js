const fileFinder = require("./src/fileFinder");
const logger = require("./src/logger")

logger.setDebug(true)

if (typeof process.argv[2] !== "string") {
  logger.info("Usage: $ node index.js <search>");
  return;
}
//fileFinder.findInFile("./data/file1.txt", "distrustsa", console.log)
fileFinder("./data", process.argv[2]);
