"use strict";
let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];

function flattenArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (Array.isArray(element)) {
      result = result.concat(flattenArray(element));
    } else {
      result.push(element);
    }
  }
  return result;
}

console.log(flattenArray(arr)); 

