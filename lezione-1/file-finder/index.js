const fileFinder = require("./src/fileFinder.js");

if (typeof process.argv[2] !== "string") {
  console.log("Usage: $ node index.js <search>");
  return;
}
//fileFinder.findInFile("./data/file1.txt", "distrustsa", console.log)
fileFinder.findInDir("./data", process.argv[2]);
