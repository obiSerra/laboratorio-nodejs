const moduleB = require("./moduleB.js")
let moduleA = require("./moduleA.js")

if (typeof process.argv[2] === "string") {
    moduleA = require("./moduleA_copy.js")
}


moduleA.functionA();
moduleB.functionB();