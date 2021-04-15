//./src/crawler.js esporta una classe Crawler con un costruttore che prende 1 parametro (startingUrl)

class Crawler {
  constructor(startingUrl) {
    this.startingUrl = startingUrl;
    console.log("startingUrl", this.startingUrl.href);
  }
}

module.exports = Crawler;