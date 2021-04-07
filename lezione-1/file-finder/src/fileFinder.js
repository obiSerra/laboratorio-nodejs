const fs = require("fs");
const path = require("path");

function findInFile(filename, toFind, cb) {
  if (typeof cb !== "function") {
    console.error("cb should be a function");
    return;
  }
  fs.readFile(filename, "utf-8", (err, data) => {
    if (err) throw err;
    if (data.indexOf(toFind) >= 0) cb(data);
  });
}

function findInDir(dir, toSearch) {
    fs.readdir(dir, (err, files) => {
      if (err) throw err;
      files.forEach((file) => {
        findInFile(path.join(dir, file), toSearch, () => console.log(file))
      });
    });
  };

module.exports.findInDir = findInDir

module.exports.findInFile = findInFile;
