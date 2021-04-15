"use strict";

const utils = require("../../utils/utils");



const starting = utils.getNow();

// -------------------- Callbacks

  // const cbWait = require("./callbacks");

  // cbWait(200, "1", () => {
  //   console.log(`[1] finished after: ${utils.getNow() - starting}ms\n\n`);
  //   cbWait(300, "2", () => {
  //     console.log(`[2] finished after: ${utils.getNow() - starting}ms\n\n`);
  //     cbWait(200, "3", () => {
  //       console.log(`[3] finished after: ${utils.getNow() - starting}ms\n\n`);
  //       cbWait(600, "4", () => {
  //         console.log(`[4] finished after: ${utils.getNow() - starting}ms\n\n`);
  //         cbWait(100, "5", () => {
  //           console.log(`[5] finished after: ${utils.getNow() - starting}ms`);
  //         });
  //       });
  //     });
  //   });
  // });

// -------------------- Events

// const evtWait = require("./events");

// evtWait(200, "1")
//   .on("start", e => console.log(`[${e.label}] Async operation starting after: ${e.time - starting}ms`))
//   .on("end", e => {
//     console.log(`[${e.label}] Async operation timeout in ${e.time - starting}ms`);
//     evtWait(300, "2")
//       .on("start", e => console.log(`[${e.label}] Async operation starting after: ${e.time - starting}ms`))
//       .on("end", e => console.log(`[${e.label}] Async operation timeout in ${e.time - starting}ms`));
//   });


// -------------------- Promise

const promWait = require("./promise");

promWait(200, "1")
    .then(() => console.log(`[1] Finished in ${utils.getNow() - starting}ms\n`))
    .then(() => promWait(300, "2"))
    .then(() => console.log(`[2] Finished in ${utils.getNow() - starting}ms\n`))
    .then(() => promWait(200, "3"))
    .then(() => console.log(`[3] Finished in ${utils.getNow() - starting}ms\n`))
    .then(() => promWait(600, "4"))
    .then(() => console.log(`[4] Finished in ${utils.getNow() - starting}ms\n`))
    .then(() => promWait(100, "5"))
    .then(() => console.log(`[5] Finished in ${utils.getNow() - starting}ms\n`))
    .catch(() => console.log("ERROR"))


// -------------------- Async Await

// const awWait = require("./async-await");


// async function runner() {
//     await awWait(100, "1");
//     console.log(`[1] Finished in ${utils.getNow() - starting}ms\n\n`);
//     await awWait(200, "2");
//     console.log(`[2] Finished in ${utils.getNow() - starting}ms\n\n`);
//     await awWait(300, "3");
//     console.log(`[3] Finished in ${utils.getNow() - starting}ms\n\n`);
//     await awWait(600, "4");
//     console.log(`[4] Finished in ${utils.getNow() - starting}ms\n\n`);
//     await awWait(100, "5");
//     console.log(`[5] Finished in ${utils.getNow() - starting}ms\n\n`);
// }

// runner()