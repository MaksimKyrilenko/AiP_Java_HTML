"use strict";
let arr = [1, 2, 3, 4, 5];
let result = arr.every((num, index) => num * (index + 1) < 30);
console.log(result); 

let arr2 = [1, 2, 3, 4, 10];
let result2 = arr2.every((num, index) => num * (index + 1) < 30);
console.log(result2);

