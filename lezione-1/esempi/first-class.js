function dummyFunction() {
  console.log(`this is the message`);
}


const highLevelFunction = (wt, cb) => {
  if (typeof cb !== "function") {
    console.log("the callback should be a function!");
    return;
  }
  console.log(`cb will be executed in ${wt} ms`);
  setTimeout(cb, wt);
};


// Posso passare una funzione come argomento
highLevelFunction(2000, dummyFunction);

// Anche una arrow function
highLevelFunction(1000, () => console.log("Hellloo"));


// Type sbagliato
//highLevelFunction(1000, {});
