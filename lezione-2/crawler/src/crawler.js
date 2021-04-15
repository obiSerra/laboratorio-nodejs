"use strict";

const https = require("https");

class Crawler {
  constructor(startingUrl) {
    this.startingUrl = startingUrl;
    console.log("startingUrl", this.startingUrl.href);
  }

  getPage(url, onEnd) {
    https
      .get(url, response => {
        console.log("statusCode:", response.statusCode);
        //console.log("headers:", response.headers);
        let data = "";
        response.on("data", d => {
          data += d;
          //process.stdout.write(d);
          //process.stdout.write("\n\n\n---------------------------------------------------\n\n\n");
        });
        response.on("end", () => {
          if (typeof onEnd === "function") {
            onEnd(data);
          }
        });
      })
      .on("error", err => console.log(`[ERROR] ${err}`));
  }

  run(onEnd) {
    this.getPage(this.startingUrl, onEnd);
  }
}

module.exports = Crawler;
