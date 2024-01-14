"use strict";
function each(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
var strings = ["hello", "world", "javascript"];
each(strings, function(str, index, arr) {
  arr[index] = str.split("").reverse().join("");
});
console.log(strings);