"use strict";
let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}

function printPrimitives(obj) {
  for (let key in obj) {
    let value = obj[key];
    if (typeof value === 'object') {
      printPrimitives(value);
    } else {
      console.log(value);
    }
  }
}

printPrimitives(obj); 

