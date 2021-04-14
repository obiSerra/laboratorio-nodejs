"use strinct";

const utils = require("../../utils/utils");

const starting = utils.getNow();

function tresholdWait(ms, cb) {
  if (ms < 200) {
    //cb(); // WRONG
    //setImmediate(cb)
    process.nextTick(cb)
  } else {
    setTimeout(cb, ms);
  }
}

//tresholdWaitWRONG(100, () => console.log(`finished after: ${utils.getNow() - starting}ms\n`))
let label = "";
tresholdWait(100, () => {
  console.log(`${label} finished after: ${utils.getNow() - starting}ms\n`);

  tresholdWait(400, () => {
    console.log(`${label} finished after: ${utils.getNow() - starting}ms\n`);
  });
});

label = "hello";
