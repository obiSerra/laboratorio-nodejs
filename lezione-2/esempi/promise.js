"use strict";

const utils = require("../../utils/utils");

const starting = utils.getNow();

// Questa funzione genera un wait sincrono
function asyncWait(ms, label) {
  return new Promise((done, reject) => {
    try {
      console.log(`[${label}] Async operation starting after: ${utils.getNow() - starting}ms\n`);

      setTimeout(() => done(), ms);
    } catch (e) {
      reject(e);
    }
  });
}

module.exports = asyncWait;

// Controllo se e' il modulo principale
if (require.main === module) {
  asyncWait(3000, "A")
    .then(() => console.log(`[A] Finished in ${utils.getNow() - starting}ms\n`))
    .catch(err => console.log(err));

  asyncWait(1000, "B")
    .then(() => console.log(`[B] Finished in ${utils.getNow() - starting}ms\n`))
    .catch(err => console.log(err));

  console.log(`[-] Next operation starting after: ${utils.getNow() - starting}ms`);
}
