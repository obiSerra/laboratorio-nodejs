const moduleB = require("./moduleB.js")


module.exports.functionA = function functionA() {
  console.log("function A start");
  moduleB.bDep();
  console.log("function A end");
}

module.exports.aDep =  function aDep() {
  return "this is A";
}
