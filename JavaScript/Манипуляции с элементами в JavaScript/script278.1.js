"use strict";
function square(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      arr[i] = arr[i] * arr[i];
    } else if (Array.isArray(arr[i])) {
      square(arr[i]);
    }
  }
  return arr;
}

const arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
console.log(square(arr)); // выведет [1, [4, 49, 64], [9, 16], [25, [36, 49]]]
