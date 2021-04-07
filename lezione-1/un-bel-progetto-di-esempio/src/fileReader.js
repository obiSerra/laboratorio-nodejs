const fs = require('fs')

class FileReader {
  constructor(fileName) {
    this.fileName = fileName;
  }

  read(cb) {
    if (typeof cb !== "function") {
      console.error("cb should be a function");
      return;
    }
    fs.readFile(this.fileName, "utf-8", (err, data) => {
      if (err) throw err;
      cb(data);
    });
  }
}

module.exports = FileReader
