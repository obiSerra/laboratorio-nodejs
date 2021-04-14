"use strict";

const utils = require("../../utils/utils");

const starting = utils.getNow();

const tasks = [
  { ms: 300, label: "A" },
  { ms: 200, label: "B" },
  { ms: 500, label: "C" },
  { ms: 100, label: "D" },
  { ms: 1000, label: "E" },
  { ms: 50, label: "F" },

];

// Callbacks

// const cbWait = require("./callbacks");

// function runner(cb) {
//   for (let i = 0; i < tasks.length; i++) {
//     const t = tasks[i];
//     cbWait(t.ms, t.label, () => {
//       console.log(`[${t.label}] finished after: ${utils.getNow() - starting}ms\n`);
//     });
//   }

//   cb()
// }

// function runnerAll(cb) {
//   let running = 0;
//   for (let i = 0; i < tasks.length; i++) {
//     const t = tasks[i];
//     running++;
//     cbWait(t.ms, t.label, () => {
//       console.log(`[${t.label}] finished after: ${utils.getNow() - starting}ms\n`);
//       running--;
//       if (running === 0) {
//         cb();
//       }
//     });
//   }
// }

//runner(() => console.log("NON FINITI"));
// runnerAll(() => console.log("TUTTI FINITI"));

// Promise

// const promWait = require("./promise");

// function runner(cb) {
//   for (let i = 0; i < tasks.length; i++) {
//     const t = tasks[i];
//     promWait(t.time, t.label).then(() => console.log(`[${t.label}] Finished in ${utils.getNow() - starting}ms\n`));
//   }

//   cb();
// }

// function runnerAll() {
//   const proms = tasks.map(t =>
//     promWait(t.time, t.label).then(() => console.log(`[${t.label}] Finished in ${utils.getNow() - starting}ms\n`))
//   );
//   return Promise.all(proms);
// }

// //runner(() => console.log("NON FINITI"));
// runnerAll().then(() => console.log("TUTTI FINITI"));

// Async Await

const awWait = require("./async-await");

function runner(cb) {
  for (let i = 0; i < tasks.length; i++) {
    const t = tasks[i];
    awWait.asyncCaller(t.time, t.label);
  }

  cb();
}

function runnerAll() {
  const proms = tasks.map(t => awWait.asyncCaller(t.time, t.label));
  return Promise.all(proms);
}

//runner(() => console.log("NON FINITI"));
(async () => {
  const proms = await runnerAll();
  console.log("TUTTI FINITI", proms.length);
})();
