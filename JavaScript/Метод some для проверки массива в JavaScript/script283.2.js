"use strict";
let arr = [1, 2, 3, 4, 5];
let result = arr.some((num, index) => num * (index + 1) > 30);
console.log(result); 

let arr2 = [1, 2, 3, 4, 7];
let result2 = arr2.some((num, index) => num * (index + 1) > 30);
console.log(result2); 

