"use strict";
let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += Math.pow(arr[i], 3);
}
let result = Math.sqrt(sum);
console.log(result);