"use strict";
let sum = 0;
for (let key1 in obj) {
  for (let key2 in obj[key1]) {
    for (let key3 in obj[key1][key2]) {
      sum += obj[key1][key2][key3];
    }
  }
}
console.log(sum);
