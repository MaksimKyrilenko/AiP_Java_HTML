"use strict";
let arr = [1, 2, 3, 4, 5];
let filteredNumbers = arr.filter((num, index) => num * (index + 1) < 30);
console.log(filteredNumbers); 

