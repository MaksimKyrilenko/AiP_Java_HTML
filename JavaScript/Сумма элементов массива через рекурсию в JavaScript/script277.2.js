"use strict";
function flatten(arr) {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      result += arr[i];
    } else if (Array.isArray(arr[i])) {
      result += flatten(arr[i]);
    }
  }
  return result;
}

const arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
console.log(flatten(arr)); 
