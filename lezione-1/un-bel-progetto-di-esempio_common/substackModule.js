// Substack pattern
"strict mode";

// Esporto direttamente la funzione
module.exports = (message) => {
  console.log(`info: ${message}`);
};

// Posso aggiungere dei named exports come funzioni "secondarie"
module.exports.warning = (message) => {
  console.log(`warning: ${message}`);
};
