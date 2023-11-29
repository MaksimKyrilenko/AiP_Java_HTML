"use strict";
let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;

for (let subArr of arr) {
  for (let elem of subArr) {
    sum = sum + elem;
  }
}

console.log(sum);

let arr2 = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];
let sum2 = 0;

for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr2[i].length; j++) {
    sum2 += arr2[i][j];
  }
}

console.log(sum2);

