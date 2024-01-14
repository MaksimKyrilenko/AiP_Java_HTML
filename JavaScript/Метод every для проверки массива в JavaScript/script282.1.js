"use strict";
let arr = [1, 2, 3, 4, 5];
let allPositive = arr.every(num => num > 0);
console.log(allPositive); 

let arr2 = [1, -2, 3, -4, 5];
let allPositive2 = arr2.every(num => num > 0);
console.log(allPositive2); 
