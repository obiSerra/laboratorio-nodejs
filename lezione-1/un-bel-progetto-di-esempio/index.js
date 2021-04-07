//const lib = require('./src/helloLib.js')

//lib.hello("word")

const FileReader = require("./src/fileReader.js");

const reader = new FileReader("./hello.txt")
reader.read(console.log)
