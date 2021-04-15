"use strict";

const Event = require("events");

const utils = require("../../utils/utils");

const starting = utils.getNow();

class TimeoutEvt extends Event {}

// Questa funzione genera un wait sincrono
function asyncWait(ms, label) {
  const evtHandler = new TimeoutEvt();

  // WRONG - chiamata sincrona
  //evtHandler.emit("start", { label, time: utils.getNow() });

  // RIGHT
  setImmediate(() => evtHandler.emit("start", { label, time: utils.getNow() }));

  setTimeout(() => {
    evtHandler.emit("end", { label, time: utils.getNow() });
  }, ms);

  return evtHandler;
}

module.exports = asyncWait;

if (require.main === module) {
  asyncWait(3000, "A")
    .on("start", e => console.log(`[${e.label}] Async operation starting after: ${e.time - starting}ms\n`))
    .on("end", e => console.log(`[${e.label}] Async operation timeout in ${e.time - starting}ms\n`));

  const secondWait = asyncWait(1000, "B")
    .on("start", e => console.log(`[${e.label}] Async operation starting after: ${e.time - starting}ms\n`))
    .on("end", e => console.log(`[${e.label}] Async operation timeout in ${e.time - starting}ms\n`));

    secondWait.on("end", e => console.log(`[${e.label}] Async operation timeout in ${e.time - starting}ms 2\n`));


  console.log(`[-] Next operation starting after: ${utils.getNow() - starting}ms`);
}
