const fs = require("fs");
const path = require("path");

const logger = require("./logger");

function findInFile(filename, toFind, cb) {
  if (typeof cb !== "function") {
    console.error("cb should be a function");
    return;
  }
  fs.readFile(filename, "utf-8", (err, data) => {
    if (err) throw err;
    logger.debug(`looking into ${filename}`);
    if (data.indexOf(toFind) >= 0) {
      cb(data);
    }
  });
}

module.exports = (dir, toSearch) => {
  fs.readdir(dir, (err, files) => {
    if (err) throw err;
    files.forEach((file) => {
      findInFile(path.join(dir, file), toSearch, () =>
        logger.info(`found into ${file}`)
      );
    });
  });
};
