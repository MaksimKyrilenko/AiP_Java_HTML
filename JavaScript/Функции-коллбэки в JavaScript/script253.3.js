"use strict";
function each(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
var words = ["apple", "banana", "cherry"];
each(words, function(word, index, arr) {
  arr[index] = word.charAt(0).toUpperCase() + word.slice(1);
});
console.log(words);