import { aDep } from "./moduleA.js";

export function functionB() {
  console.log("function B start");
  aDep();
  console.log("function B end");
}

export function bDep() {
  return "this is B";
}
