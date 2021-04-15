"use strict";

const https = require("https");
const { url } = require("inspector");
var HTMLParser = require("node-html-parser");
const { isRegExp } = require("util");

class Crawler {
  constructor(startingUrl) {
    this.startingUrl = startingUrl;
    this.visited = [];
  }

  findAnc(content) {
    const dom = HTMLParser.parse(content);

    const urls = dom.querySelectorAll("a").map(a => a.getAttribute("href"));
    return urls;
  }

  isValidUrl(u) {
    try {
      let url = null;
      if (u.match(/^\//)) {
        url = new URL(u, this.startingUrl.origin);
      } else {
        url = new URL(u);
      }

      return url.host === this.startingUrl.host;
    } catch (e) {
      return false;
    }
  }

  getPage(url) {
    return new Promise((resolve, reject) => {
      https
        .get(url, response => {
          console.log("statusCode:", response.statusCode);
          this.visited.push(url.href);
          console.log(this.visited);
          let data = "";
          response.on("data", d => {
            data += d;
          });
          response.on("end", () => {
            const urls = this.findAnc(data).filter(u => this.isValidUrl(u));
            resolve(urls);
          });
        })
        .on("error", err => reject(err));
    });
  }

  run(onEnd) {
    this.getPage(this.startingUrl).then(urls => {
      console.log(urls);
    });
  }
}

module.exports = Crawler;
