"use strict";
function cube(num) {
  return num ** 3;
}
var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num, index, arr) {
  arr[index] = cube(num);
});
console.log(numbers);