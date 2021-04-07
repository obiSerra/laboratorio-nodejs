const moduleA = require("./moduleA.js")


module.exports.functionB = function functionB() {
  console.log("function B start");
  moduleA.aDep();
  console.log("function B end");
}

module.exports.bDep = function bDep() {
  return "this is B";
}
