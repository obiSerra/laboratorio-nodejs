"use strict";

const https = require("https");
const { url } = require("inspector");
var HTMLParser = require("node-html-parser");

class Crawler {
  constructor(startingUrl) {
    this.startingUrl = startingUrl;
  }

  findAnc(content) {
    const dom = HTMLParser.parse(content);

    const urls = dom.querySelectorAll("a").map(a => a.getAttribute("href"));
    return urls;
  }

  getPage(url, onEnd) {
    https
      .get(url, response => {
        console.log("statusCode:", response.statusCode);
        let data = "";
        response.on("data", d => {
          data += d;
        });
        response.on("end", () => {
          if (typeof onEnd === "function") {
            const urls = this.findAnc(data);
            onEnd(urls);
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
