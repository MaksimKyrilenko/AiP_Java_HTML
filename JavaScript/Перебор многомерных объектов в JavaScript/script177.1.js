"use strict";
let sum = 0;
for (let key1 in obj) {
  for (let key2 in obj[key1]) {
    sum += obj[key1][key2];
  }
}
console.log(sum);
