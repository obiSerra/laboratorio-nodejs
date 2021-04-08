// Annotazione dei tipi
function logger(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

logger("Roberto");

interface User {
  name: string;
  surname: string;
  id: number;
}

const roberto: User = {
  name: "Roberto",
  surname: "Serra",
  id: 1,
};

/*
const noberto: User = {
  name: "Roberto",
  surname: "Serra",
  username: "obi",
  id: 1,
};
*/