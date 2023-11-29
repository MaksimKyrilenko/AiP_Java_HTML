"use strict";
let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];

function calculateSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += calculateSum(arr[i]);
    } else {
      sum += arr[i];
    }
  }

  return sum;
}

let result = calculateSum(arr);
console.log(result);

