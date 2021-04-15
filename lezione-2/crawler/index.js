//index.js controlla che venga passato un argomento quando viene chiamato;
//se e’ cosi’ instanzia Crawler passandogli l’argomento

const Crawler = require("./src/crawler");

const arg = process.argv[2] || null;

if (!arg) {
  console.log("USAGE: $ <command> <url>");
  return
}

const c = new Crawler(arg);
