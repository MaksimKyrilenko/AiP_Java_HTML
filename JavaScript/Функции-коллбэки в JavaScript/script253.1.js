"use strict";
function each(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
var numbers = [1, 2, 3, 4, 5];
each(numbers, function(num, index, arr) {
  arr[index] = num * 2;
});
console.log(numbers);