"use strict";
let arr = [1, 2, 3, 4, 5];

function getSumSquares(arr) {
  if (arr.length > 0) {
    let first = arr[0];
    let square = first * first;
    return square + getSumSquares(arr.slice(1));
  } else {
    return 0;
  }
}

console.log(getSumSquares(arr)); 
