"strict mode";

// I moduli non sono statici, possono essere caricati a run time

/*
const moduleB = require("./moduleB.js")
let moduleA = require("./moduleA.js")

if (typeof process.argv[2] === "string") {
    moduleA = require("./moduleA_copy.js")
}


moduleA.functionA();
moduleB.functionB();
*/

// Named Exports

/*
// In CommonJs i locali possonono essere richiamati anche senza estensione
const namedLogger = require("./namedExportModule")

namedLogger.info("hello")

namedLogger.warning("oh nooooo")
*/

// Substack pattern

/*
const substackLogger = require("./substackModule")

// Main function
substackLogger("hello")

substackLogger.warning("oh nooooo")
*/


// Class exports

/*
const Logger = require("./classExportModule")

const logger = new Logger()

logger.info("hello class")

logger.warning("ho snap class")
*/

// Instance export

const logger = require("./instanceExportModule")

logger.info("hello instance")
logger.warning("omg")

const anotherLogger = require("./anotherModule")
anotherLogger("hello again")




