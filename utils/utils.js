"strict mode"

exports.getNow = () => Date.now();

exports.scriptArg = idx => process.argv[2 + idx] || null;
