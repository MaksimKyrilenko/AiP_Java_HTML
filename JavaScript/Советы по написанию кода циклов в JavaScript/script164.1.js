"use strict";
let arr = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;

for (let num of arr) {
  let firstDigit = parseInt(num.toString()[0]);
  if (firstDigit === 1 || firstDigit === 2) {
    sum += num;
  }
}

console.log(sum);