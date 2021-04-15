//index.js controlla che venga passato un argomento quando viene chiamato;
//se e’ cosi’ instanzia Crawler passandogli l’argomento

const Crawler = require("./src/crawler");

const arg = process.argv[2] || null;

let url = null;

const usage = "USAGE: $ <command> <url>";


if (!arg) {
  console.log(usage);
  return;
}

try {
  url = new URL(arg);
} catch (e) {
  console.log(usage);
  console.log("Not a valid URL");
  return;
}

const c = new Crawler(url);
