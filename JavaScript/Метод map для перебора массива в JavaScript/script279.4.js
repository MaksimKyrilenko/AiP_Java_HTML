"use strict";
let arr = ['123', '456', '789'];
let result = arr.map(str => str.split('').map(Number));
console.log(result); 

