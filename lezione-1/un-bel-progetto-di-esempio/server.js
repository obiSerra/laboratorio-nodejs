// Includo un node_module
const express = require("express");

// Configurazione per express
const app = express();
const port = 3000;

// Includo il mio file reader
const FileReader = require("./src/fileReader.js");

// Lo configuro
const reader = new FileReader("./hello.txt");

// Configuro le API
app.get("/", (req, res) => {
  reader.read((content) => res.send(content));
});

// Faccio partire il server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
