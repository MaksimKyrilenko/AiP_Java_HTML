"use strict";
let numbers = [3, -2, 5, -1, 0, 7];
let positiveNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positiveNumbers.push(numbers[i]);
  }
}

console.log(positiveNumbers); 