"use strict";

const utils = require("../../utils/utils");

const starting = utils.getNow();

// Questa funzione genera un wait asincrono
function asyncWait(ms, label, cb) {
  console.log(`[${label}] Async operation starting after: ${utils.getNow() - starting}ms\n`);

  setTimeout(() => {
    console.log(`[${label}] Async operation callback in ${utils.getNow() - starting}ms\n`);
    cb();
  }, ms);
}

module.exports = asyncWait;

// Controllo se e' il modulo principale
if (require.main === module) { 

  asyncWait(3000, "A", () => console.log(`[A] Finished in ${utils.getNow() - starting}ms`));
  asyncWait(1000, "B", () => console.log(`[B] Finished in ${utils.getNow() - starting}ms`));
  console.log(`[-] Next operation starting after: ${utils.getNow() - starting}ms`);

}
