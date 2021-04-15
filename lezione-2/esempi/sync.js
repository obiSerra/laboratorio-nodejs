"use strict";


const utils = require("../../utils/utils");

const starting = utils.getNow();

// Questa funzione genera un wait sincrono
function syncWait(ms) {
    console.log(`Sync operation starting after: ${utils.getNow() - starting}ms`);
    const now = utils.getNow();
  while (utils.getNow() <= now + ms) {}
  console.log(`Sync operation finished after: ${utils.getNow() - starting}ms`);

}


syncWait(3000);
console.log(`Next operation starting after: ${utils.getNow() - starting}ms`);
syncWait(1000);
console.log(`Finished in ${utils.getNow() - starting}ms`);
