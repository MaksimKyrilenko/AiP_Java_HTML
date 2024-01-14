"use strict";
let arr = [1, 2, 3, 4, 5];

function printArray(arr) {
  if (arr.length > 0) {
    console.log(arr[0]);
    printArray(arr.slice(1));
  }
}

printArray(arr); 
