let dynamicTyping = null;

// object
console.log(`tipo: ${typeof dynamicTyping} | valore: ${dynamicTyping}`);

dynamicTyping = "hello";
// string
console.log(`tipo: ${typeof dynamicTyping} | valore: ${dynamicTyping}`);

dynamicTyping = {"hello": "word"};
// object
console.log(`tipo: ${typeof dynamicTyping} | valore: ${dynamicTyping}`);

dynamicTyping = ["hello", "word"];
// object
console.log(`tipo: ${typeof dynamicTyping} | valore: ${dynamicTyping}`);
