import { bDep } from "./moduleB.js";

export function functionA() {
  console.log("function A start");
  bDep();
  console.log("function A end");
}

export function aDep() {
  return "this is A";
}
