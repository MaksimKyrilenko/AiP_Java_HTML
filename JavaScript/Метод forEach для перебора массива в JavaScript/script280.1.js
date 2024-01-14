"use strict";
let arr = [1, 2, 3, 4, 5];
let sumOfSquares = 0;

arr.forEach(num => {
  sumOfSquares += num ** 2;
});

console.log(sumOfSquares); 
