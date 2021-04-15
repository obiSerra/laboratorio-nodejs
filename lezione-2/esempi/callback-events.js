"use strict";

const https = require("https");

function downloadFile(url) {
  https
    .get(url, (response) => {
      console.log('statusCode:', response.statusCode);
      console.log('headers:', response.headers);
      response.on("data", function (d) {
        process.stdout.write(d);
        process.stdout.write("\n\n\n---------------------------------------------------\n\n\n");
      });
    })
    .on("error", (err) => console.log(`[ERROR] ${err}`));
}

downloadFile("https://www.unito.it/");
