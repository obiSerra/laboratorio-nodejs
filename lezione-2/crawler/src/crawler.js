"use strict";

const https = require("https");
var HTMLParser = require("node-html-parser");

class Crawler {
  constructor(startingUrl, maxRequests = 10) {
    this.startingUrl = startingUrl;
    this.visited = [];

    this.queue = [];
    this.activeProcess = 0;

    this.maxRequests = maxRequests;
    this.requestsDone = 0;
  }

  findAnc(content) {
    const dom = HTMLParser.parse(content);

    const urls = dom.querySelectorAll("a").map(a => a.getAttribute("href"));
    return urls;
  }

  getValidUrl(u) {
    try {
      let url = null;
      if (u.match(/^\//)) {
        url = new URL(u, this.startingUrl.origin);
      } else {
        url = new URL(u);
      }

      return url.host === this.startingUrl.host ? url.href : false;
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
          let data = "";
          response.on("data", d => {
            data += d;
          });
          response.on("end", () => {
            const urls = this.findAnc(data)
              .map(u => this.getValidUrl(u))
              .filter(u => !!u);
            resolve([...new Set(urls)]);
          });
        })
        .on("error", err => reject(err));
    });
  }

  queueCrawl() {
    if (this.requestsDone > this.maxRequests) {
      // Troppe richieste
      return;
    }

    if (this.queue.length > 0) {
      const nextUrl = this.queue.shift();
      this.getPage(nextUrl).then(urls => console.log(urls));
    }
    if (this.queue.length === 0 && this.activeProcess === 0) {
      console.log(this.visited);
      return;
    }
    if (this.queue.length === 0 && this.activeProcess > 0) {
      // In attesa di risposta
      setImmediate(() => this.queueCrawl())
    }
  }

  run() {
    this.queue.push(this.startingUrl.href);
    this.queueCrawl();
    // this.getPage(this.startingUrl).then(urls => {
    //   console.log(urls);
    // });
  }
}

module.exports = Crawler;
