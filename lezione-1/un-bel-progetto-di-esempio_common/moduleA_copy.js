const moduleB = require("./moduleB.js")


module.exports.functionA = function functionA() {
  console.log("function A start - COPY HERE");
  moduleB.bDep();
  console.log("function A end - COPY HERE");
}

module.exports.aDep =  function aDep() {
  return "this is A - COPY HERE";
}
