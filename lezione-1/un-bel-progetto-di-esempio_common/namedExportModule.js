// Named Exports
"strict mode";

module.exports.info = (message) => {
  console.log(`info: ${message}`);
};

// Si puo' utilizzare anche exports al posto di module.exports
exports.warning = (message) => {
  console.log(`warning: ${message}`);
};
